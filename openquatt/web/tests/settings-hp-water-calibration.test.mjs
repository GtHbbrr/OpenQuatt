import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.window = {
  localStorage: {
    getItem: () => null,
  },
};

const { state } = await import("../js/src/core/state.js");
const { renderHpWaterCalibrationWizard } = await import("../js/src/settings/service.js");

test("kalibratieresultaat bevat de brongebonden aanvoer-offset", () => {
  state.loadingEntities = false;
  state.entities = {
    hp1WaterIn: { value: 25.1, uom: "°C" },
    hp1WaterInRaw: { value: 25.0, uom: "°C" },
    hp1WaterInOffset: { value: 0.1, uom: "°C" },
    hp1WaterInOffsetSuggested: { value: 0.15, uom: "°C" },
    hpWaterCalibrationResultHp1InRawAvg: { value: 25.0, uom: "°C" },
    hpWaterCalibrationResultReference: { value: 25.15, uom: "°C" },
    hpWaterCalibrationResultSpreadBefore: { value: 0.3, uom: "°C" },
    hpWaterCalibrationResultSupplyRawAvg: { value: 24.7, uom: "°C" },
    hpWaterCalibrationResultSupplySource: { value: "Local - PT1000", state: "Local - PT1000" },
    supplyTemp: { value: 24.7, uom: "°C" },
    waterSupplyCalibrationOffset: { value: 0, uom: "°C" },
    waterSupplyCalibrationOffsetSuggested: { value: 0.45, uom: "°C" },
    hpWaterCalibrationApply: { value: false },
  };

  const markup = renderHpWaterCalibrationWizard({
    status: "DONE: stable spread 0.30C",
    running: false,
    resultReady: true,
    startDisabled: false,
    abortDisabled: true,
    applyDisabled: false,
    busy: false,
    controlsAvailable: true,
  });

  assert.match(markup, /Aanvoer \(Local - PT1000\)/);
  assert.match(markup, /Aanvoerbron Local - PT1000/);
  assert.match(markup, /0\.45 °C/);
  assert.match(markup, /25\.15 °C/);
});

test("lege resultaatbron valt tijdens de meting terug op de actieve bron", () => {
  state.loadingEntities = false;
  state.entities = {
    hp1WaterIn: { value: 25.1, uom: "°C" },
    hp1WaterInRaw: { value: 25.0, uom: "°C" },
    hpWaterCalibrationResultSupplySource: { value: "", state: "" },
    waterSupplyTempEffectiveSource: { value: "CIC", state: "CIC" },
    supplyTemp: { value: 24.7, uom: "°C" },
  };

  const markup = renderHpWaterCalibrationWizard({
    status: "MEASURING",
    running: true,
    resultReady: false,
    startDisabled: true,
    abortDisabled: false,
    applyDisabled: true,
    busy: true,
    controlsAvailable: true,
  });

  assert.match(markup, /Aanvoer \(CIC\)/);
  assert.doesNotMatch(markup, /Aanvoer \(IDLE\)/);
});
