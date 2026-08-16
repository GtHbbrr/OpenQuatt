import assert from "node:assert/strict";
import test from "node:test";

import {
  buildSettingsBackupCalibrationConfig,
  buildSettingsBackupMqttConfig,
  collectUnknownSettingsBackupCalibrationIds,
  collectUnknownSettingsBackupItems,
  isSettingsBackupMqttSourceSelection,
  normalizeSettingsBackupCalibrationConfig,
  normalizeSettingsBackupMqttConfig,
  settingsBackupMqttNeedsPassword,
} from "../js/src/core/settings-backup-domain.js";

const calibrationFields = [
  { id: "hp1_water_in", key: "hp1WaterInOffset", label: "HP1 water in" },
  { id: "supply_cic", key: "waterSupplyCicCalibrationOffset", label: "Aanvoer · CIC" },
];

test("calibration backup keeps only validated offsets", () => {
  assert.deepEqual(buildSettingsBackupCalibrationConfig({
    hp1WaterInOffset: -0.14,
    waterSupplyCicCalibrationOffset: 0.25,
    ignored: 1,
  }, calibrationFields), {
    temperature_offsets: {
      hp1_water_in: -0.14,
      supply_cic: 0.25,
    },
  });

  assert.throws(
    () => buildSettingsBackupCalibrationConfig({ hp1WaterInOffset: 2.01 }, calibrationFields),
    /HP1 water in/i,
  );
});

test("calibration restore accepts legacy HP offsets but rejects malformed values", () => {
  assert.deepEqual(normalizeSettingsBackupCalibrationConfig(null, calibrationFields, {
    sensor_sources: { hp1WaterInOffset: -0.3 },
  }), {
    temperature_offsets: { hp1_water_in: -0.3 },
  });
  assert.throws(
    () => normalizeSettingsBackupCalibrationConfig({ temperature_offsets: { supply_cic: "0.2" } }, calibrationFields),
    /Aanvoer · CIC/i,
  );
  assert.throws(
    () => normalizeSettingsBackupCalibrationConfig({ temperature_offsets: { supply_cic: Number.NaN } }, calibrationFields),
    /Aanvoer · CIC/i,
  );
});

test("calibration restore reports unknown schema ids", () => {
  assert.deepEqual(collectUnknownSettingsBackupCalibrationIds({
    temperature_offsets: { supply_future: 0.1, supply_cic: 0.2 },
  }, calibrationFields), ["supply_future"]);
});

test("MQTT backup keeps configuration but excludes runtime and secret fields", () => {
  const backup = buildSettingsBackupMqttConfig({
    enabled: true,
    broker: "mqtt.local",
    port: 1883,
    username: "openquatt",
    password_set: true,
    csrf_token: "secret-token",
    connected: true,
    input_enabled: { cooling_dew_point: false },
    input_accept_retained: { room_setpoint: false },
  });

  assert.equal(backup.password_was_set, true);
  assert.equal(backup.input_enabled.cooling_dew_point, false);
  assert.equal(backup.input_enabled.room_temperature, true);
  assert.equal(backup.input_accept_retained.room_setpoint, false);
  assert.equal(Object.hasOwn(backup, "csrf_token"), false);
  assert.equal(Object.hasOwn(backup, "connected"), false);
  assert.equal(Object.hasOwn(backup, "password"), false);
});

test("MQTT restore validation requires a valid endpoint", () => {
  assert.throws(() => normalizeSettingsBackupMqttConfig({ enabled: true, broker: "", port: 1883 }), /broker/i);
  assert.throws(() => normalizeSettingsBackupMqttConfig({ enabled: false, broker: "", port: 70000 }), /poort/i);

  const mqtt = normalizeSettingsBackupMqttConfig({
    enabled: true,
    broker: "mqtt.local",
    port: 1883,
    username: "openquatt",
    password_was_set: true,
  });
  assert.equal(settingsBackupMqttNeedsPassword(mqtt), true);
  assert.equal(settingsBackupMqttNeedsPassword({ enabled: false, password_was_set: true }), true);
  assert.equal(settingsBackupMqttNeedsPassword({ enabled: true, password_was_set: false }), false);
});

test("MQTT-dependent source selections are identified before restore", () => {
  assert.equal(isSettingsBackupMqttSourceSelection("roomTempSource", "MQTT"), true);
  assert.equal(isSettingsBackupMqttSourceSelection("coolingDewPointSource", "Dew point (MQTT)"), true);
  assert.equal(isSettingsBackupMqttSourceSelection("heatingEnableSource", "MQTT + Manual"), true);
  assert.equal(isSettingsBackupMqttSourceSelection("outsideTempSource", "Auto"), false);
  assert.equal(isSettingsBackupMqttSourceSelection("flowSource", "MQTT"), false);
});

test("unknown settings are retained as individual restore result items", () => {
  const unknown = collectUnknownSettingsBackupItems({
    system: { known: true, removedSetting: true },
    legacy: { first: 1, second: 2 },
  }, [{ id: "system", keys: ["known"] }]);

  assert.deepEqual(unknown, [
    { section: "system", key: "removedSetting" },
    { section: "legacy", key: "first" },
    { section: "legacy", key: "second" },
  ]);
});
