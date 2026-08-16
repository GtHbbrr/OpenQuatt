import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.window = { clearTimeout, location: { pathname: "/" }, setTimeout };

const { state } = await import("../js/src/core/state.js");
const { mergeEntityPayload } = await import("../js/src/core/entity-sync.js");
const { renderSettingsBackupRestoreModal } = await import("../js/src/settings/storage.js");

const {
  getSettingsBackupCalibrationRestoreEntries,
  getSettingsBackupSelectionSummary,
  getSettingsBackupSupplyCalibrationDependency,
  isUsageTelemetrySetupCompletionSafe,
  parseDecisionLogStorageMetadata,
  parseSettingsBackupPayload,
  restoreSettingsBackupCalibrations,
  shouldDisableUsageTelemetryForSetupRestore,
} = await import("../js/src/features/storage-history.js");

test("backup restore maps every supply source to its own calibration", () => {
  state.entities.localWaterSupplyTempSource = { value: "PT1000", state: "PT1000" };
  const localDraft = {
    settings: { sensor_sources: { waterSupplySource: "Local", localWaterSupplyTempSource: "DS18B20" } },
  };
  try {
    assert.equal(
      getSettingsBackupSupplyCalibrationDependency(localDraft, "waterSupplySource", "Local"),
      "waterSupplyDs18b20CalibrationOffset",
    );
    assert.equal(
      getSettingsBackupSupplyCalibrationDependency(localDraft, "localWaterSupplyTempSource", "PT1000"),
      "waterSupplyPt1000CalibrationOffset",
    );
    assert.equal(
      getSettingsBackupSupplyCalibrationDependency({ settings: { sensor_sources: { waterSupplySource: "CIC" } } }, "waterSupplySource", "CIC"),
      "waterSupplyCicCalibrationOffset",
    );
    assert.equal(
      getSettingsBackupSupplyCalibrationDependency({ settings: { sensor_sources: { waterSupplySource: "HA input" } } }, "waterSupplySource", "HA input"),
      "waterSupplyHaInputCalibrationOffset",
    );
    assert.equal(
      getSettingsBackupSupplyCalibrationDependency({ settings: { sensor_sources: { waterSupplySource: "CIC" } } }, "localWaterSupplyTempSource", "PT1000"),
      "",
    );
    assert.equal(
      getSettingsBackupSupplyCalibrationDependency({ settings: { sensor_sources: { waterSupplySource: "Local" } } }, "waterSupplySource", "Local"),
      "waterSupplyPt1000CalibrationOffset",
    );
  } finally {
    delete state.entities.localWaterSupplyTempSource;
  }
});

test("non-Q restore always gates Local on the fixed DS18B20 calibration", () => {
  delete state.entities.localWaterSupplyTempSource;
  const qDraft = {
    settings: { sensor_sources: { waterSupplySource: "Local", localWaterSupplyTempSource: "PT1000" } },
  };
  assert.equal(
    getSettingsBackupSupplyCalibrationDependency(qDraft, "waterSupplySource", "Local"),
    "waterSupplyDs18b20CalibrationOffset",
  );
});

test("backup restore only schedules calibration values present in the file", () => {
  const entries = getSettingsBackupCalibrationRestoreEntries({
    calibrations: { temperature_offsets: { hp1_water_in: -0.14, supply_cic: 0.06 } },
  });
  assert.deepEqual(entries.map(({ id, key, value }) => ({ id, key, value })), [
    { id: "hp1_water_in", key: "hp1WaterInOffset", value: -0.14 },
    { id: "supply_cic", key: "waterSupplyCicCalibrationOffset", value: 0.06 },
  ]);
});

test("an available supply bridge without a record is shown as not calibrated", () => {
  state.entities.waterSupplyCicCalibrationOffset = { value: "", state: "nan" };
  try {
    const summary = getSettingsBackupSelectionSummary({
      settings: {},
      calibrations: { temperature_offsets: { supply_cic: 0.12 } },
    });
    assert.equal(summary.calibrations.rows[0].currentDisplay, "Nog niet gekalibreerd");
    assert.equal(summary.calibrations.currentPresent, 0);
  } finally {
    delete state.entities.waterSupplyCicCalibrationOffset;
  }
});

test("an invalid calibration refresh clears a previously valid cached offset", () => {
  assert.deepEqual(
    mergeEntityPayload("waterSupplyCicCalibrationOffset", { value: 0.12, state: "0.12" }, { value: null, state: "nan" }),
    { value: null, state: "nan" },
  );
});

test("schema v2 HP offsets migrate once while schema v3 uses its calibration block", () => {
  const legacy = parseSettingsBackupPayload(JSON.stringify({
    schema_version: 2,
    settings: { sensor_sources: { hp1WaterInOffset: -0.3 } },
  }));
  assert.equal(legacy.calibrations.temperature_offsets.hp1_water_in, -0.3);
  assert.equal(Object.hasOwn(legacy.settings.sensor_sources, "hp1WaterInOffset"), false);

  const current = parseSettingsBackupPayload(JSON.stringify({
    schema_version: 3,
    calibrations: { temperature_offsets: { hp1_water_in: 0.2, future_sensor: 0.1 } },
    settings: { sensor_sources: { hp1WaterInOffset: -0.3 } },
  }));
  assert.equal(current.calibrations.temperature_offsets.hp1_water_in, 0.2);
  assert.equal(Object.hasOwn(current.settings.sensor_sources, "hp1WaterInOffset"), false);
  assert.deepEqual(current.unknown_calibrations, ["future_sensor"]);
  assert.equal(current.summary.unknown, 1);
});

test("backup restore modal enables calibration restore with replacement guidance", () => {
  state.settingsBackupRestoreCalibrations = true;
  state.settingsBackupDraft = {
    schema_version: 3,
    source: {},
    settings: {},
    mqtt: null,
    summary: {
      calibrations: {
        present: 1,
        currentPresent: 1,
        differenceCount: 1,
        rows: [{
          id: "supply_cic",
          key: "waterSupplyCicCalibrationOffset",
          label: "Aanvoer · CIC",
          backupDisplay: "0.12 °C",
          currentDisplay: "0.00 °C",
          different: true,
        }],
      },
      currentPresent: 0,
      differenceCount: 0,
      requiredMissing: 0,
      sectionSummaries: [],
      total: 0,
      unknown: 0,
    },
  };

  try {
    const html = renderSettingsBackupRestoreModal();
    assert.match(html, /data-oq-backup-restore-calibrations="true" checked/);
    assert.match(html, /controller of temperatuursensor fysiek is vervangen/);
    assert.match(html, /Aanvoer · CIC/);
  } finally {
    state.settingsBackupDraft = null;
  }
});

test("calibration restore trusts readback after a lost acknowledgement and fails closed on mismatch", async () => {
  const originalFetch = globalThis.fetch;
  state.entities.hp1WaterInOffset = { value: 0 };
  state.entities.waterSupplyCicCalibrationOffset = { value: 0 };
  state.entities.calibrationBackupCommitToken = { value: 0, min_value: 1, max_value: 1000000, step: 1 };
  globalThis.fetch = async (url, options = {}) => {
    if (options.method === "POST") {
      return { ok: !String(url).includes("HP1%20water%20in"), status: 504 };
    }
    const value = String(url).includes("Calibration%20Backup%20Commit%20Token")
      ? 1
      : (String(url).includes("Water%20Supply%20CIC") ? 0.11 : -0.14);
    return { ok: true, json: async () => ({ value }) };
  };
  const applied = [];
  const skipped = [];

  try {
    const result = await restoreSettingsBackupCalibrations({
      calibrations: { temperature_offsets: { hp1_water_in: -0.14, supply_cic: 0.12 } },
    }, applied, skipped);
    assert.deepEqual(applied, ["hp1WaterInOffset"], JSON.stringify(skipped));
    assert.equal(result.failedKeys.has("hp1WaterInOffset"), false);
    assert.equal(result.failedKeys.has("waterSupplyCicCalibrationOffset"), true);
    assert.equal(skipped.length, 1);
    assert.equal(skipped[0].reason, "Opslaan niet bevestigd");
  } finally {
    globalThis.fetch = originalFetch;
    delete state.entities.hp1WaterInOffset;
    delete state.entities.waterSupplyCicCalibrationOffset;
    delete state.entities.calibrationBackupCommitToken;
  }
});

test("calibration restore continues with commit and readback after a write timeout", async () => {
  const originalFetch = globalThis.fetch;
  state.entities.hp1WaterInOffset = { value: 0, min_value: -2, max_value: 2, step: 0.01 };
  state.entities.calibrationBackupCommitToken = { value: 0, min_value: 1, max_value: 1000000, step: 1 };
  globalThis.fetch = async (url, options = {}) => {
    if (options.method === "POST" && String(url).includes("HP1%20water%20in")) {
      return new Promise((_resolve, reject) => {
        options.signal.addEventListener("abort", () => reject(new Error("aborted")), { once: true });
      });
    }
    if (options.method === "POST") {
      return { ok: true, status: 200 };
    }
    return {
      ok: true,
      json: async () => ({
        value: String(url).includes("Calibration%20Backup%20Commit%20Token") ? 1 : -0.14,
      }),
    };
  };
  const applied = [];
  const skipped = [];

  try {
    const result = await restoreSettingsBackupCalibrations({
      calibrations: { temperature_offsets: { hp1_water_in: -0.14 } },
    }, applied, skipped, 10);
    assert.deepEqual(applied, ["hp1WaterInOffset"]);
    assert.equal(result.failedKeys.size, 0);
    assert.deepEqual(skipped, []);
  } finally {
    globalThis.fetch = originalFetch;
    delete state.entities.hp1WaterInOffset;
    delete state.entities.calibrationBackupCommitToken;
  }
});

test("calibration restore fails closed when flash commit is not acknowledged", async () => {
  const originalFetch = globalThis.fetch;
  state.entities.hp1WaterInOffset = { value: 0, min_value: -2, max_value: 2, step: 0.01 };
  state.entities.calibrationBackupCommitToken = { value: 0, min_value: 1, max_value: 1000000, step: 1 };
  globalThis.fetch = async (url, options = {}) => {
    if (options.method === "POST") return { ok: true, status: 200 };
    return { ok: true, json: async () => ({ value: String(url).includes("Commit") ? 0 : -0.14 }) };
  };
  const applied = [];
  const skipped = [];

  try {
    const result = await restoreSettingsBackupCalibrations({
      calibrations: { temperature_offsets: { hp1_water_in: -0.14 } },
    }, applied, skipped, 10);
    assert.deepEqual(applied, []);
    assert.equal(result.failedKeys.has("hp1WaterInOffset"), true);
    assert.equal(skipped[0].reason, "Flashopslag niet bevestigd");
  } finally {
    globalThis.fetch = originalFetch;
    delete state.entities.hp1WaterInOffset;
    delete state.entities.calibrationBackupCommitToken;
  }
});

test("completed backup restore disables telemetry only for incomplete setup", () => {
  assert.equal(shouldDisableUsageTelemetryForSetupRestore(true, false), true);
  assert.equal(shouldDisableUsageTelemetryForSetupRestore(true, true), false);
  assert.equal(shouldDisableUsageTelemetryForSetupRestore(false, false), false);
  assert.equal(isUsageTelemetrySetupCompletionSafe(true, false, false), false);
  assert.equal(isUsageTelemetrySetupCompletionSafe(true, false, true), true);
  assert.equal(isUsageTelemetrySetupCompletionSafe(true, true, false), true);
});

test("decision log storage metadata normalizes firmware values", () => {
  const metadata = parseDecisionLogStorageMetadata({
    enabled: true,
    available: true,
    stored_events: 420,
    capacity_events: 5120,
    retention_days: 7,
    oldest_epoch_s: 1783700000,
    newest_epoch_s: 1783850000,
    last_flush_epoch_s: 1783851000,
    storage_bytes: 131072,
    write_count: 44,
  });

  assert.deepEqual(metadata, {
    enabled: true,
    available: true,
    storedEvents: 420,
    capacityEvents: 5120,
    retentionDays: 7,
    oldestEpochS: 1783700000,
    newestEpochS: 1783850000,
    lastFlushEpochS: 1783851000,
    storageBytes: 131072,
    writeCount: 44,
  });
});

test("decision log storage metadata clamps invalid counters", () => {
  const metadata = parseDecisionLogStorageMetadata({
    stored_events: -3,
    capacity_events: 0,
    storage_bytes: "invalid",
  });

  assert.equal(metadata.enabled, false);
  assert.equal(metadata.available, false);
  assert.equal(metadata.storedEvents, 0);
  assert.equal(metadata.capacityEvents, 5120);
  assert.equal(metadata.retentionDays, 7);
  assert.equal(metadata.storageBytes, 0);
});
