from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
COMMON_YAML = (ROOT / "openquatt" / "oq_common.yaml").read_text()


def switch_block(switch_id: str) -> str:
    marker = f"    id: {switch_id}\n"
    start = COMMON_YAML.index(marker)
    end = COMMON_YAML.find("\n  - platform:", start + len(marker))
    return COMMON_YAML[start : end if end >= 0 else len(COMMON_YAML)]


class HistoryStorageDefaultsContractTest(unittest.TestCase):
    def test_persistent_energy_and_decision_history_default_on(self) -> None:
        for switch_id in (
            "oq_lifetime_energy_history_switch",
            "oq_decision_log_flash_switch",
        ):
            block = switch_block(switch_id)
            self.assertIn("restore_mode: RESTORE_DEFAULT_ON", block)
            self.assertNotIn("restore_mode: ALWAYS_ON", block)

    def test_diagnostic_trend_flash_remains_opt_in_until_hil_validation(self) -> None:
        block = switch_block("oq_trend_history_flash_switch")
        self.assertIn("restore_mode: RESTORE_DEFAULT_OFF", block)


if __name__ == "__main__":
    unittest.main()
