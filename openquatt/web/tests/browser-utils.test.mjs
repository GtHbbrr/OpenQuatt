import assert from "node:assert/strict";
import test from "node:test";

import { fetchWithTimeout } from "../js/src/core/browser-utils.js";

test("fetchWithTimeout returns the fetch response before the deadline", async (t) => {
  const originalFetch = globalThis.fetch;
  const originalWindow = globalThis.window;
  t.after(() => {
    globalThis.fetch = originalFetch;
    globalThis.window = originalWindow;
  });

  const response = { ok: true };
  globalThis.window = globalThis;
  globalThis.fetch = async (_input, options) => {
    assert.ok(options.signal instanceof AbortSignal);
    return response;
  };

  assert.equal(await fetchWithTimeout("/test", { cache: "no-store" }, 100), response);
});

test("fetchWithTimeout reports the endpoint-specific timeout", async (t) => {
  const originalFetch = globalThis.fetch;
  const originalWindow = globalThis.window;
  t.after(() => {
    globalThis.fetch = originalFetch;
    globalThis.window = originalWindow;
  });

  globalThis.window = globalThis;
  globalThis.fetch = (_input, options) => new Promise((_resolve, reject) => {
    options.signal.addEventListener("abort", () => reject(new Error("aborted")), { once: true });
  });

  await assert.rejects(
    fetchWithTimeout("/test", {}, 1, "test endpoint timed out"),
    /test endpoint timed out/,
  );
});
