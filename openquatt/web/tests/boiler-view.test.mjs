import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.localStorage = { getItem: () => null };

const { state } = await import("../js/src/core/state.js");
const {
  getBoilerPanelModel,
  getBoilerStatusModel,
  renderBoilerPanel,
} = await import("../js/src/views/heatpump.js");
const { renderSettingsOpenThermCicSection } = await import("../js/src/settings/integrations.js");
const { ENTITY_DEFS } = await import("../js/src/core/config.js");
const { INITIAL_SETTINGS_READY_KEY_MAP, SETTINGS_GROUP_KEY_MAP } = await import("../js/src/core/entity-sync.js");
const heatPumpCss = await readFile(new URL("../css/src/40-heatpump.css", import.meta.url), "utf8");
const boilerOpenThermYaml = await readFile(new URL("../../oq_boiler_opentherm.yaml", import.meta.url), "utf8");

function status(overrides = {}) {
  return getBoilerStatusModel({
    opentherm: true,
    linkAvailable: true,
    fault: false,
    dhwActive: false,
    flameOn: false,
    chActive: false,
    commandActive: false,
    commandValid: true,
    requestedPower: 0,
    blockReason: "no boiler heat request",
    ...overrides,
  });
}

test("boiler panel occupies exactly one heat-pump grid column", () => {
  const rule = heatPumpCss.match(/\.oq-overview-boiler\s*\{([^}]*)\}/);
  assert.ok(rule, "expected the boiler panel layout rule");
  assert.match(rule[1], /grid-column:\s*span 1\s*;/);
  assert.doesNotMatch(rule[1], /grid-column:\s*1\s*\/\s*-1\s*;/);
});

test("boiler status follows fault, link, DHW, flame and command priority", () => {
  assert.equal(status({ fault: true, dhwActive: true, flameOn: true }).code, "fault");
  assert.equal(status({ linkAvailable: false }).code, "offline");
  assert.equal(status({ dhwActive: true, flameOn: true }).code, "dhw");
  assert.equal(status({ flameOn: true, chActive: true }).code, "heating");
  assert.equal(status({ chActive: true }).text, "CV actief");
  assert.equal(status({ commandActive: true }).code, "starting");
  assert.equal(status({ commandValid: false, requestedPower: 1400, blockReason: "boiler command stale" }).code, "blocked");
  assert.equal(status().code, "idle");
});

test("OpenTherm boiler model uses actual fresh boiler telemetry and actual flame state", () => {
  const previousEntities = state.entities;
  const previousVisualMode = state.hpVisualMode;
  state.hpVisualMode = "schematic";
  state.entities = {
    boilerCvAssistEnabled: { value: true },
    boilerConnection: { value: "OpenTherm" },
    boilerHeatPower: { value: 1550 },
    boilerActive: { value: true },
    boilerCommandActive: { value: true },
    boilerCommandValid: { value: true },
    boilerCommandRequestedPower: { value: 1800 },
    boilerBlockReason: { value: "" },
    flowSelected: { value: 720 },
    hp1WaterOut: { value: 28.1 },
    supplyTemp: { value: 35.2 },
    otbLinkAvailable: { value: true },
    otbChActive: { value: true },
    otbFlameOn: { value: false },
    otbDhwActive: { value: false },
    otbReturnWaterTemp: { value: 31.4 },
    otbBoilerWaterTemp: { value: 42.8 },
    otbChPressure: { value: 1.6 },
    otbControlSetpointCommand: { value: 45 },
    otbRelativeModulation: { value: 37 },
  };

  try {
    const model = getBoilerPanelModel();
    assert.equal(model.transportText, "OpenTherm");
    assert.equal(model.returnTempText, "31.4 °C");
    assert.equal(model.supplyTempText, "42.8 °C");
    assert.equal(model.pressureText, "1.6 bar");
    assert.equal(model.modulationText, "37 %");
    assert.equal(model.active, true);
    assert.equal(model.flameOn, false);
    assert.equal(model.statusText, "CV actief");
    assert.doesNotMatch(model.boardClass, /has-flame/);

    const html = renderBoilerPanel();
    assert.match(html, /OpenTherm/);
    assert.match(html, /1\.6 bar/);
    assert.doesNotMatch(html, /oq-boiler-card has-flame/);
  } finally {
    state.entities = previousEntities;
    state.hpVisualMode = previousVisualMode;
  }
});

test("OpenTherm boiler model suppresses stale telemetry when the boiler link is down", () => {
  const previousEntities = state.entities;
  state.entities = {
    boilerConnection: { value: "OpenTherm" },
    boilerHeatPower: { value: 0 },
    boilerCommandValid: { value: true },
    boilerCommandRequestedPower: { value: 0 },
    flowSelected: { value: 700 },
    otbLinkAvailable: { value: false },
    otbReturnWaterTemp: { value: 31.4 },
    otbBoilerWaterTemp: { value: 42.8 },
    otbChPressure: { value: 1.6 },
    otbControlSetpointCommand: { value: 45 },
    otbRelativeModulation: { value: 37 },
  };

  try {
    const model = getBoilerPanelModel();
    assert.equal(model.statusCode, "offline");
    assert.equal(model.returnTempText, "—");
    assert.equal(model.supplyTempText, "—");
    assert.equal(model.pressureText, "—");
    assert.equal(model.targetText, "—");
    assert.equal(model.modulationText, "—");
  } finally {
    state.entities = previousEntities;
  }
});

test("R1 boiler view keeps OpenTherm-only telemetry out of the panel", () => {
  const previousEntities = state.entities;
  const previousVisualMode = state.hpVisualMode;
  state.hpVisualMode = "schematic";
  state.entities = {
    boilerCvAssistEnabled: { value: true },
    boilerConnection: { value: "R1" },
    boilerHeatPower: { value: 1200 },
    boilerActive: { value: true },
    flowSelected: { value: 680 },
    hp1WaterOut: { value: 29.3 },
    supplyTemp: { value: 34.7 },
  };

  try {
    const model = getBoilerPanelModel();
    assert.equal(model.transportText, "Aan/uit R1");
    assert.equal(model.statusText, "CV actief");
    assert.equal(model.flameOn, false);
    assert.doesNotMatch(renderBoilerPanel(), /OpenTherm ketelwaarden/);
  } finally {
    state.entities = previousEntities;
    state.hpVisualMode = previousVisualMode;
  }
});

test("integration diagnostics separates thermostat, boiler control, OTB and CiC", () => {
  const previousEntities = state.entities;
  state.entities = {
    otEnabled: { value: true },
    otLinkProblem: { value: false },
    otThermostatStatusValid: { value: true },
    otRoomTemp: { value: 20.8, uom: "°C" },
    boilerConnection: { value: "OpenTherm" },
    boilerCommandValid: { value: true },
    boilerCommandSource: { value: "Power House" },
    otbLinkAvailable: { value: true },
    otbFlameOn: { value: true },
    otbChPressure: { value: 1.6, uom: "bar" },
    cicPollingEnabled: { value: true },
    cicJsonFeedOk: { value: true },
  };

  try {
    const html = renderSettingsOpenThermCicSection();
    assert.match(html, /OpenTherm thermostaat \(OTT\)/);
    assert.match(html, /Ketelregeling/);
    assert.match(html, /OpenTherm ketel \(OTB\)/);
    assert.match(html, /CiC-feed/);
    assert.match(html, /Waterdruk/);
  } finally {
    state.entities = previousEntities;
  }
});

test("settings hydration loads boiler setup and diagnostics before rendering", () => {
  assert.ok(INITIAL_SETTINGS_READY_KEY_MAP.installation.includes("boilerConnection"));
  assert.ok(SETTINGS_GROUP_KEY_MAP.installation.includes("boilerConnection"));
  assert.ok(SETTINGS_GROUP_KEY_MAP.integrations.includes("boilerCommandValid"));
  assert.ok(SETTINGS_GROUP_KEY_MAP.integrations.includes("otbChPressure"));
});

test("DHW permission stays enabled without a user-facing setting", () => {
  assert.match(boilerOpenThermYaml, /^    dhw_enable: true$/m);
  assert.doesNotMatch(boilerOpenThermYaml, /^    dhw_enable:\n\s+id: oq_otb_dhw_enable$/m);
  assert.equal(Object.hasOwn(ENTITY_DEFS, "boilerProvidesDhw"), false);
  assert.equal(INITIAL_SETTINGS_READY_KEY_MAP.installation.includes("boilerProvidesDhw"), false);
  assert.equal(SETTINGS_GROUP_KEY_MAP.installation.includes("boilerProvidesDhw"), false);
  assert.ok(SETTINGS_GROUP_KEY_MAP.integrations.includes("otbDhwActive"));
  assert.ok(SETTINGS_GROUP_KEY_MAP.integrations.includes("otbDhwPresent"));
});
