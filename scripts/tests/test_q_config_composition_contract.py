from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[2]
SINGLE_TARGET = (ROOT / "configs" / "heatpump_controller_q" / "single.yaml").read_text()
DUO_TARGET = (ROOT / "configs" / "heatpump_controller_q" / "duo.yaml").read_text()
SINGLE_TOPOLOGY_PACKAGE = (ROOT / "openquatt" / "topology" / "single_package.yaml").read_text()
DUO_TOPOLOGY_PACKAGE = (ROOT / "openquatt" / "topology" / "duo_package.yaml").read_text()
Q_PROFILE = (ROOT / "openquatt" / "profiles" / "heatpump_controller_q.yaml").read_text()
NETWORK_PROFILE = (ROOT / "openquatt" / "connection" / "wifi_eth.yaml").read_text()
HIL_DUO = (ROOT / "configs" / "heatpump_controller_q" / "duo_wifi_hil.yaml").read_text()


class QConfigCompositionContractTest(unittest.TestCase):
    def test_release_targets_only_pin_topology(self) -> None:
        for target, flag in (
            (SINGLE_TARGET, '-DOQ_TOPOLOGY_DUO=0'),
            (DUO_TARGET, '-DOQ_TOPOLOGY_DUO=1'),
        ):
            self.assertIn(f'oq_topology_build_flag: "{flag}"', target)
            self.assertNotIn('oq_hardware_profile:', target)
            self.assertNotIn('oq_hardware_build_flag:', target)
            self.assertNotIn('oq_connection:', target)
            self.assertNotIn('oq_connection_text_internal:', target)
            self.assertNotIn('main_release_manifest_url:', target)
            self.assertNotIn('alternate_topology:', target)

    def test_hardware_and_network_have_single_owners(self) -> None:
        self.assertIn('oq_hardware_profile: "heatpump_controller_q"', Q_PROFILE)
        self.assertIn('oq_hardware_build_flag: "-DOQ_HARDWARE_HEATPUMP_CONTROLLER_Q=1"', Q_PROFILE)
        self.assertIn('oq_local_supply_temp_sensor_id: "water_supply_temp_pt1000"', Q_PROFILE)
        self.assertIn('oq_local_supply_temp_selector_id: "oq_local_supply_temp_source"', Q_PROFILE)
        self.assertIn('oq_connection: "auto"', NETWORK_PROFILE)
        self.assertIn('oq_connection_text_internal: "false"', NETWORK_PROFILE)

    def test_topology_package_owns_manifest_routing(self) -> None:
        for package, topology, alternate in (
            (SINGLE_TOPOLOGY_PACKAGE, "single", "duo"),
            (DUO_TOPOLOGY_PACKAGE, "duo", "single"),
        ):
            self.assertIn(f'alternate_topology: "{alternate}"', package)
            self.assertIn('openquatt-heatpump-controller-q-${oq_topology}-ota.manifest.json', package)
            self.assertIn('openquatt-heatpump-controller-q-${alternate_topology}-ota.manifest.json', package)
            self.assertIn('release_manifest_url: "${main_release_manifest_url}"', package)
            self.assertIn(f'!include {topology}.yaml', package)

    def test_hil_build_composes_from_canonical_duo_target(self) -> None:
        self.assertIn('openquatt_q_duo: !include duo.yaml', HIL_DUO)
        self.assertNotIn('!include duo_wifi.yaml', HIL_DUO)


if __name__ == "__main__":
    unittest.main()
