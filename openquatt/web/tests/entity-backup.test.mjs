import assert from "node:assert/strict";
import test from "node:test";

globalThis.window = { clearTimeout, location: { pathname: "/" }, setTimeout };
globalThis.__OQ_PREVIEW__ = false;

const {
  getEntityBackupNumberState,
  getEntityBackupSwitchState,
  verifyEntityBackupNumberState,
  verifyEntityBackupSwitchState,
  waitForEntityBackupNumberState,
} = await import("../js/src/core/entity-backup.js");

test("backup number state parser accepts ESPHome number states", () => {
  assert.equal(getEntityBackupNumberState({ value: -0.14 }), -0.14);
  assert.equal(getEntityBackupNumberState({ state: "0.06" }), 0.06);
  assert.equal(getEntityBackupNumberState({ state: "  " }), null);
  assert.equal(getEntityBackupNumberState({ state: "nan" }), null);
});

test("backup number verification accepts controller step rounding", async () => {
  const originalFetch = globalThis.fetch;
  let request = null;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ value: 0.13 }) };
  };

  try {
    assert.equal(await verifyEntityBackupNumberState("hp1WaterInOffset", 0.125), true);
    assert.match(request.url, /number\/HP1%20water%20in%20temperature%20offset$/);
    assert.equal(request.options.cache, "no-store");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("backup number verification times out a half-open read", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (_url, options) => new Promise((_resolve, reject) => {
    options.signal.addEventListener("abort", () => reject(new Error("aborted")), { once: true });
  });

  try {
    await assert.rejects(
      verifyEntityBackupNumberState("hp1WaterInOffset", 0.1, 0.0051, 10),
      /duurde te lang/i,
    );
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("backup number confirmation polls past a deferred REST acknowledgement", async () => {
  const originalFetch = globalThis.fetch;
  let reads = 0;
  globalThis.fetch = async () => ({
    ok: true,
    json: async () => ({ value: ++reads < 3 ? 0 : 7 }),
  });

  try {
    assert.equal(await waitForEntityBackupNumberState("calibrationBackupCommitToken", 7, {
      tolerance: 0.1,
      timeoutMs: 50,
      pollIntervalMs: 1,
    }), true);
    assert.equal(reads, 3);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("backup switch state parser accepts ESPHome boolean and text states", () => {
  assert.equal(getEntityBackupSwitchState({ value: true }), true);
  assert.equal(getEntityBackupSwitchState({ state: "OFF" }), false);
  assert.equal(getEntityBackupSwitchState({ state: "unknown" }), null);
});

test("backup switch verification reads the controller state without cache", async () => {
  const originalFetch = globalThis.fetch;
  let request = null;
  globalThis.fetch = async (url, options) => {
    request = { url, options };
    return { ok: true, json: async () => ({ state: "OFF" }) };
  };

  try {
    assert.equal(await verifyEntityBackupSwitchState("usageTelemetryEnabled", false), true);
    assert.match(request.url, /switch\/Usage%20statistics$/);
    assert.equal(request.options.cache, "no-store");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("backup switch verification fails closed when telemetry remains enabled", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => ({ ok: true, json: async () => ({ state: "ON" }) });

  try {
    assert.equal(await verifyEntityBackupSwitchState("usageTelemetryEnabled", false), false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
