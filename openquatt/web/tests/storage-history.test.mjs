import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;

const { SENSOR_CALIBRATION_KEYS, SETTINGS_BACKUP_SECTIONS, SUPPLY_CALIBRATION_BACKUP_KEYS } = await import("../js/src/core/config.js");
const { isUsageTelemetrySetupCompletionSafe, parseDecisionLogStorageMetadata, shouldDisableUsageTelemetryForSetupRestore } = await import("../js/src/features/storage-history.js");

test("calibration offsets are restored before the supply source selection", () => {
  const keys = SETTINGS_BACKUP_SECTIONS.find(({ id }) => id === "sensor_sources").keys;
  assert.deepEqual(
    keys.slice(0, SENSOR_CALIBRATION_KEYS.length + SUPPLY_CALIBRATION_BACKUP_KEYS.length),
    [...SENSOR_CALIBRATION_KEYS, ...SUPPLY_CALIBRATION_BACKUP_KEYS],
  );
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
