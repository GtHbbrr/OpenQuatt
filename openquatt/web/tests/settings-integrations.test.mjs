import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.window = {
  localStorage: {
    getItem: () => null,
  },
};

const { state } = await import("../js/src/core/state.js");
const { renderSettingsSensorSelectionSection } = await import("../js/src/settings/integrations.js");

const MQTT_SOURCE_SELECT_KEYS = [
  "roomTempSource",
  "roomSetpointSource",
  "outsideTempSource",
  "heatingEnableSource",
  "coolingEnableSource",
  "coolingDewPointSource",
];

function getSelectMarkup(markup, key) {
  const match = markup.match(new RegExp(`<select[^>]+data-oq-field="${key}"[^>]*>([\\s\\S]*?)<\\/select>`));
  assert.ok(match, `select ${key} ontbreekt`);
  return match[1];
}

function setSourceSelectionState(mqttEnabled) {
  state.loadingEntities = false;
  state.drafts = {};
  state.mqttStatus = {
    enabled: mqttEnabled,
    input_enabled: {
      cooling_dew_point: true,
      outside_temperature: true,
      room_temperature: true,
      room_setpoint: true,
      heating_enable: true,
      cooling_enable: true,
    },
  };
  state.entities = {
    roomTempSource: { value: "OT thermostat", option: ["OT thermostat", "MQTT"] },
    roomSetpointSource: { value: "OT thermostat", option: ["OT thermostat", "MQTT"] },
    outsideTempSource: { value: "Outdoor unit", option: ["Outdoor unit", "MQTT"] },
    heatingEnableSource: { value: "Disabled", option: ["Disabled", "MQTT"] },
    coolingEnableSource: { value: "Disabled", option: ["Disabled", "MQTT"] },
    coolingDewPointSource: { value: "Auto", option: ["Auto", "MQTT"] },
    mqttRoomTemperature: { value: 20, uom: "°C" },
    mqttRoomTemperatureValid: { value: true, state: "ON" },
    mqttRoomSetpoint: { value: 20, uom: "°C" },
    mqttRoomSetpointValid: { value: true, state: "ON" },
    mqttOutsideTemperature: { value: 8, uom: "°C" },
    mqttOutsideTemperatureValid: { value: true, state: "ON" },
    mqttHeatingEnable: { value: true, state: "ON" },
    mqttHeatingEnableValid: { value: true, state: "ON" },
    mqttCoolingEnable: { value: false, state: "OFF" },
    mqttCoolingEnableValid: { value: true, state: "ON" },
    mqttCoolingDewPoint: { value: 14, uom: "°C" },
    mqttCoolingDewPointValid: { value: true, state: "ON" },
  };
}

test("MQTT verdwijnt uit alle bronselecties en metingen wanneer de integratie uitstaat", () => {
  setSourceSelectionState(true);
  const enabledMarkup = renderSettingsSensorSelectionSection();
  MQTT_SOURCE_SELECT_KEYS.forEach((key) => {
    assert.match(getSelectMarkup(enabledMarkup, key), /<option value="MQTT"/);
  });
  assert.match(enabledMarkup, /<div class="oq-settings-source-row has-status">\s*<span>MQTT/);

  setSourceSelectionState(false);
  const disabledMarkup = renderSettingsSensorSelectionSection();
  MQTT_SOURCE_SELECT_KEYS.forEach((key) => {
    assert.doesNotMatch(getSelectMarkup(disabledMarkup, key), /<option value="MQTT"/);
  });
  assert.doesNotMatch(disabledMarkup, /MQTT/);

  MQTT_SOURCE_SELECT_KEYS.forEach((key) => {
    state.entities[key].value = "MQTT";
  });
  const disabledCurrentMarkup = renderSettingsSensorSelectionSection();
  MQTT_SOURCE_SELECT_KEYS.forEach((key) => {
    const selectMarkup = getSelectMarkup(disabledCurrentMarkup, key);
    assert.match(selectMarkup, /<option value="" selected disabled>Kies een beschikbare bron<\/option>/);
    assert.doesNotMatch(selectMarkup, /<option value="MQTT"/);
  });
  assert.match(disabledCurrentMarkup, /Huidige bron niet beschikbaar: MQTT staat uit/);
  assert.doesNotMatch(disabledCurrentMarkup, /MQTT-topic staat uit/);
});
