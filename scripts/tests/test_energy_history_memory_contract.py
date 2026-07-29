from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
HEADER = (
    ROOT
    / "components"
    / "openquatt_energy_history"
    / "OpenQuattEnergyHistory.h"
).read_text()
SOURCE = (
    ROOT
    / "components"
    / "openquatt_energy_history"
    / "OpenQuattEnergyHistory.cpp"
).read_text()


def section(text: str, start_marker: str, end_marker: str) -> str:
    start = text.index(start_marker)
    end = text.index(end_marker, start)
    return text[start:end]


class EnergyHistoryMemoryContractTest(unittest.TestCase):
    def test_large_runtime_state_uses_one_strict_external_object_array(self) -> None:
        external_state = section(HEADER, "struct ExternalState {", "  };")
        for member in (
            "hour_records[HOURLY_SLOT_COUNT]",
            "hour_snapshot_values[24]",
            "hour_import_values[24]",
            "stored_day_bitmap[DATE_BITMAP_BYTES]",
            "stored_hour_day_bitmap[DATE_BITMAP_BYTES]",
            "export_date_bitmap[DATE_BITMAP_BYTES]",
            "export_hour_date_keys[EXPORT_HOUR_DATE_COUNT]",
            "export_hour_masks[EXPORT_HOUR_DATE_COUNT]",
        ):
            self.assertIn(member, external_state)

        setup = section(
            SOURCE,
            "void OpenQuattEnergyHistory::setup()",
            "void OpenQuattEnergyHistory::loop()",
        )
        self.assertIn(
            "PsramObjectArray<ExternalState, 1U> external_state_storage_{}",
            HEADER,
        )
        self.assertIn("external_state_storage_.allocate()", setup)
        self.assertNotIn("RAMAllocator<ExternalState>", SOURCE)
        self.assertIn("sizeof(OpenQuattEnergyHistory) <= 2304U", HEADER)

    def test_direct_flash_io_buffers_stay_internal(self) -> None:
        external_state = section(HEADER, "struct ExternalState {", "  };")
        self.assertNotIn("hour_flash_record_buffer", external_state)
        self.assertNotIn("hour_flash_slot_buffer", external_state)
        self.assertIn("EnergyHistoryHourDayRecord hour_flash_record_buffer_{}", HEADER)
        self.assertIn("uint8_t hour_flash_slot_buffer_[HOUR_FLASH_SLOT_SIZE]{}", HEADER)
        self.assertIn(
            "esp_partition_read(this->flash_partition_, slot_offset, record, sizeof(*record))",
            SOURCE,
        )
        self.assertIn(
            "esp_partition_write(this->flash_partition_, slot_offset, slot_buffer, HOUR_FLASH_SLOT_SIZE)",
            SOURCE,
        )

    def test_missing_psram_fails_closed_before_restore_or_flash_mutation(self) -> None:
        setup = section(
            SOURCE,
            "void OpenQuattEnergyHistory::setup()",
            "void OpenQuattEnergyHistory::loop()",
        )
        self.assertLess(
            setup.index("external_state_storage_.allocate()"),
            setup.index("esp_partition_find_first"),
        )
        self.assertIn("this->mark_failed()", setup)
        self.assertIn('"psram_unavailable"', SOURCE)
        self.assertIn(
            "return this->runtime_storage_ready() && this->partition_available_",
            SOURCE,
        )

        clear_history = section(
            SOURCE,
            "void OpenQuattEnergyHistory::clear_history()",
            "std::string OpenQuattEnergyHistory::import_history_records",
        )
        self.assertLess(
            clear_history.index("if (!this->is_partition_ready_())"),
            clear_history.index("esp_partition_erase_range"),
        )


if __name__ == "__main__":
    unittest.main()
