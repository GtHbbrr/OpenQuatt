from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
COMMON_HEADER = (
    ROOT / "components" / "openquatt_common" / "PsramBuffer.h"
).read_text()
INCIDENT_HEADER = (
    ROOT
    / "components"
    / "openquatt_incident_manager"
    / "OpenQuattIncidentManager.h"
).read_text()
INCIDENT_CPP = (
    ROOT
    / "components"
    / "openquatt_incident_manager"
    / "OpenQuattIncidentManager.cpp"
).read_text()
TELEMETRY_HEADER = (
    ROOT
    / "components"
    / "openquatt_usage_telemetry"
    / "OpenQuattUsageTelemetry.h"
).read_text()
TELEMETRY_CPP = (
    ROOT
    / "components"
    / "openquatt_usage_telemetry"
    / "OpenQuattUsageTelemetry.cpp"
).read_text()
TELEMETRY_CODEGEN = (
    ROOT / "components" / "openquatt_usage_telemetry" / "__init__.py"
).read_text()
TELEMETRY_POLICY = (
    ROOT
    / "components"
    / "openquatt_usage_telemetry"
    / "OpenQuattUsageTelemetryPolicy.h"
).read_text()


class InternalHeapPlacementContractTest(unittest.TestCase):
    def test_incident_runtime_and_snapshots_are_external_only(self) -> None:
        self.assertIn("class PsramObjectArray", COMMON_HEADER)
        self.assertIn(
            "PsramObjectArray<ExternalState, 1U> external_state_",
            INCIDENT_HEADER,
        )
        self.assertIn(
            "std::array<PublishedSnapshot, 3U> snapshots",
            INCIDENT_HEADER,
        )
        self.assertIn("sizeof(OpenQuattIncidentManager) <= 512U", INCIDENT_HEADER)
        self.assertNotIn(
            "std::unique_ptr<PublishedSnapshot>",
            INCIDENT_CPP,
        )
        self.assertNotIn(
            "new (std::nothrow) PublishedSnapshot",
            INCIDENT_CPP,
        )

    def test_snapshot_publication_avoids_large_spinlock_copy(self) -> None:
        self.assertIn(
            "xSemaphoreCreateMutexStatic(&this->snapshot_mutex_storage_)",
            INCIDENT_CPP,
        )
        self.assertIn(
            "std::swap(this->published_snapshot_index_",
            INCIDENT_CPP,
        )
        self.assertNotIn("portENTER_CRITICAL", INCIDENT_CPP)

    def test_s3_telemetry_worker_and_payload_use_psram(self) -> None:
        self.assertIn("StaticTask worker_task_state_", TELEMETRY_HEADER)
        self.assertIn(
            "MQTT_WORKER_STACK_IN_PSRAM = true",
            TELEMETRY_HEADER,
        )
        self.assertIn("TELEMETRY_PAYLOAD_CAPACITY + 1U", TELEMETRY_CPP)
        self.assertIn(
            "FixedBufferWriter payload(this->payload_.data()",
            TELEMETRY_CPP,
        )
        self.assertNotIn("std::string payload;", TELEMETRY_CPP)
        self.assertIn("psram.request_external_task_stack()", TELEMETRY_CODEGEN)
        self.assertIn(
            "get_esp32_variant() == VARIANT_ESP32S3",
            TELEMETRY_CODEGEN,
        )
        self.assertNotIn("xTaskCreatePinnedToCore(", TELEMETRY_CPP)
        self.assertNotIn("vTaskDelete(nullptr)", TELEMETRY_CPP)

    def test_classic_esp32_worker_remains_internal(self) -> None:
        self.assertIn(
            "MQTT_WORKER_STACK_IN_PSRAM = false",
            TELEMETRY_HEADER,
        )
        self.assertIn(
            "this->worker_task_state_.deallocate();",
            TELEMETRY_CPP,
        )
        self.assertIn("eTaskGetState(handle) != eSuspended", TELEMETRY_CPP)

    def test_telemetry_cleanup_and_consent_fail_closed(self) -> None:
        self.assertIn("mqtt_cleanup_decision(", TELEMETRY_POLICY)
        self.assertIn("DESTROY_ALREADY_STOPPED", TELEMETRY_POLICY)
        self.assertIn("xSemaphoreCreateMutexStatic", TELEMETRY_CPP)
        self.assertIn("consent_mutex_", TELEMETRY_HEADER)
        self.assertIn("consent_publish_blocked_", TELEMETRY_HEADER)
        self.assertIn(
            "this->set_consent_publish_blocked_(true)",
            TELEMETRY_CPP,
        )
        self.assertIn(
            "A failed opt-out write must not reopen telemetry",
            TELEMETRY_CPP,
        )
        self.assertIn("eSetValueWithOverwrite", TELEMETRY_CPP)
        self.assertNotIn("eSetValueWithoutOverwrite", TELEMETRY_CPP)


if __name__ == "__main__":
    unittest.main()
