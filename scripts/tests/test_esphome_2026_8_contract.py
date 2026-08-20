from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
WEB_AUTH_HEADER = (
    ROOT / "components" / "openquatt_web_auth" / "OpenQuattWebAuth.h"
).read_text()
WEB_AUTH_CPP = (
    ROOT / "components" / "openquatt_web_auth" / "OpenQuattWebAuth.cpp"
).read_text()
MODBUS_HUB = (ROOT / "openquatt" / "oq_common.yaml").read_text()
MODBUS_CONTROLLER = (ROOT / "openquatt" / "oq_HP_io.yaml").read_text()
ODU_RUNTIME_TABLE = (
    ROOT
    / "openquatt"
    / "includes"
    / "experimental"
    / "oq_odu_runtime_frequency_table.h"
).read_text()


class ESPHome20268ContractTest(unittest.TestCase):
    def test_web_auth_credentials_have_component_lifetime(self) -> None:
        self.assertIn("AuthStorage runtime_storage_{};", WEB_AUTH_HEADER)
        self.assertIn(
            "std::memcpy(&this->runtime_storage_, &storage, "
            "sizeof(this->runtime_storage_));",
            WEB_AUTH_CPP,
        )
        self.assertIn(
            "set_auth_username(this->runtime_storage_.username)",
            WEB_AUTH_CPP,
        )
        self.assertIn(
            "set_auth_password(this->runtime_storage_.password)",
            WEB_AUTH_CPP,
        )
        self.assertNotIn("set_auth_username(storage.username)", WEB_AUTH_CPP)
        self.assertNotIn("set_auth_password(storage.password)", WEB_AUTH_CPP)

    def test_modbus_spacing_is_owned_by_the_hub(self) -> None:
        self.assertIn(
            "turnaround_time: ${oq_modbus_command_throttle_ms}ms",
            MODBUS_HUB,
        )
        self.assertNotIn("command_throttle:", MODBUS_CONTROLLER)

    def test_custom_modbus_callbacks_use_span_payloads(self) -> None:
        custom_modbus = MODBUS_CONTROLLER + ODU_RUNTIME_TABLE
        self.assertIn("std::span<const uint8_t>", custom_modbus)
        self.assertIn("esphome::modbus::EntityType", custom_modbus)
        self.assertNotIn("ModbusRegisterType", custom_modbus)
        self.assertNotIn("const std::vector<uint8_t>&", custom_modbus)
        self.assertNotIn("const std::vector<uint8_t> &", custom_modbus)


if __name__ == "__main__":
    unittest.main()
