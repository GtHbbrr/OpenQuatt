from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[2]
PERFORMANCE_YAML = (ROOT / "openquatt/oq_performance_telemetry.yaml").read_text()
USAGE_SOURCE = (
    ROOT / "components/openquatt_usage_telemetry/OpenQuattUsageTelemetry.cpp"
).read_text()


class PerformanceTelemetryContractTest(unittest.TestCase):
    def test_samples_the_effective_heating_curve_target(self) -> None:
        self.assertIn(
            "supply_target_sensor: oq_strategy_supply_target_temp_sensor",
            PERFORMANCE_YAML,
        )
        self.assertNotIn("supply_target_sensor: oq_supply_target_temp\n", PERFORMANCE_YAML)

    def test_external_id_creation_does_not_reapply_usage_consent(self) -> None:
        match = re.search(
            r"bool OpenQuattUsageTelemetry::ensure_installation_id_for_external\(\) \{(?P<body>.*?)\n\}",
            USAGE_SOURCE,
            re.DOTALL,
        )
        self.assertIsNotNone(match)
        body = match.group("body")
        self.assertIn("apply_external_installation_id_(storage)", body)
        self.assertNotIn("apply_storage_(storage)", body)


if __name__ == "__main__":
    unittest.main()
