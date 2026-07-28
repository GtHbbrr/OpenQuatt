from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
MANAGER_CPP = (
    ROOT
    / "components"
    / "openquatt_incident_manager"
    / "OpenQuattIncidentManager.cpp"
).read_text()
MANAGER_YAML = (ROOT / "openquatt" / "oq_web_access.yaml").read_text()
HP_IO_YAML = (ROOT / "openquatt" / "oq_HP_io.yaml").read_text()


def handler_source() -> str:
    start = MANAGER_CPP.index("class IncidentManagerRequestHandler")
    end = MANAGER_CPP.index("}  // namespace", start)
    return MANAGER_CPP[start:end]


class IncidentManagerActionContractTest(unittest.TestCase):
    def test_http_actions_are_deferred_to_the_main_loop(self) -> None:
        handler = handler_source()
        self.assertIn("defer_start_failure_retry", handler)
        self.assertIn("defer_odu_power_cycle_confirmation", handler)
        self.assertNotIn("->retry_start_failure(", handler)
        self.assertNotIn("->confirm_odu_power_cycle(", handler)
        self.assertIn('request->arg("request_id")', handler)
        self.assertIn('"action_in_progress"', handler)
        self.assertIn('"duplicate":%s', handler)
        self.assertIn("request->send(202", handler)

    def test_incident_endpoint_checks_runtime_auth_on_every_request(self) -> None:
        handler = handler_source()
        self.assertIn("request_is_authenticated(request)", handler)
        self.assertIn("request->requestAuthentication()", handler)
        self.assertIn("web_auth: oq_web_auth_store", MANAGER_YAML)

    def test_power_cycle_release_has_no_generic_entity_endpoint(self) -> None:
        self.assertNotIn("oq_confirm_odu_power_cycle_", HP_IO_YAML)
        self.assertNotIn("Confirm HP${hp_index} ODU power cycle", HP_IO_YAML)


if __name__ == "__main__":
    unittest.main()
