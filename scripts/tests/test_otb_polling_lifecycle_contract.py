from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
HUB_HEADER = (ROOT / "components" / "opentherm" / "hub.h").read_text()
HUB_CPP = (ROOT / "components" / "opentherm" / "hub.cpp").read_text()
OTB_PACKAGE = (ROOT / "openquatt" / "oq_boiler_opentherm.yaml").read_text()
Q_PROFILE = (
    ROOT / "openquatt" / "profiles" / "heatpump_controller_q.yaml"
).read_text()


class OtbPollingLifecycleContractTest(unittest.TestCase):
    def test_hub_owns_a_hard_polling_gate(self) -> None:
        self.assertIn("bool polling_enabled_ = false;", HUB_HEADER)
        self.assertIn("void suspend_polling();", HUB_HEADER)
        self.assertIn("this->polling_enabled_ = false;", HUB_CPP)
        self.assertIn("if (!this->polling_enabled_) {", HUB_CPP)
        self.assertIn("this->disable_loop();", HUB_CPP)

    def test_probe_state_is_authoritative_for_r1_polling(self) -> None:
        self.assertIn(
            "oq_otb::startup_probe_state.active()",
            OTB_PACKAGE,
        )
        self.assertIn(
            "oq_otb::should_keep_opentherm_polling(",
            OTB_PACKAGE,
        )
        self.assertIn(
            "id(oq_otb_hub).is_polling_enabled()",
            OTB_PACKAGE,
        )
        self.assertIn(
            "id(oq_otb_hub).suspend_polling();",
            OTB_PACKAGE,
        )

    def test_transport_transitions_use_hub_lifecycle_methods(self) -> None:
        lifecycle_yaml = OTB_PACKAGE + Q_PROFILE
        self.assertIn(
            "id(oq_otb_hub).start_priority_polling(",
            lifecycle_yaml,
        )
        self.assertIn(
            "id(oq_otb_hub).resume_polling();",
            lifecycle_yaml,
        )
        self.assertNotIn(
            "id(oq_otb_hub).enable_loop();",
            lifecycle_yaml,
        )


if __name__ == "__main__":
    unittest.main()
