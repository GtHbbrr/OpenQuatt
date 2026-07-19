import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { FAST_OVERVIEW_KEYS, OVERVIEW_KEYS, QUICK_STEPS } from "../js/src/core/config.js";

globalThis.__OQ_PREVIEW__ = false;

const { getPrimeBaseKeys } = await import("../js/src/core/entity-sync.js");

test("usage telemetry is hydrated before Quick Start filters optional steps", () => {
  const usageStep = QUICK_STEPS.find((step) => step.id === "usage-telemetry");

  assert.equal(usageStep?.optionalEntity, "usageTelemetryEnabled");
  assert.ok(getPrimeBaseKeys().includes("usageTelemetryEnabled"));
  assert.ok(FAST_OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
  assert.ok(OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
});

test("usage telemetry disclosure matches the hourly payload scope", async () => {
  const quickStartSource = await readFile(new URL("../js/src/features/quickstart.js", import.meta.url), "utf8");
  const settingsSource = await readFile(new URL("../js/src/settings/privacy.js", import.meta.url), "utf8");
  const disclosureSource = await readFile(new URL("../js/src/features/usage-telemetry.js", import.meta.url), "utf8");

  assert.match(quickStartSource, /renderUsageTelemetryDisclosure\(\)/);
  assert.match(settingsSource, /renderUsageTelemetryDisclosure\(\{ collapsible: true/);
  assert.match(settingsSource, /usageTelemetryDetailsOpen/);
  assert.match(disclosureSource, /ongeveer elk uur via MQTT/);
  assert.match(disclosureSource, /Wanneer delen aanstaat/);
  assert.match(disclosureSource, /wifi-signaal/);
  assert.match(disclosureSource, /Aan\/uit-status van CiC, OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie/);
  assert.match(disclosureSource, /ketelaansluiting \(aan\/uit of OpenTherm\)/);
  assert.match(disclosureSource, /Geen ingestelde temperaturen, grenzen, MQTT-topics of logs/);
  assert.match(disclosureSource, /oq-usage-disclosure--collapsible/);
  assert.match(disclosureSource, /data-oq-action="toggle-usage-telemetry-details"/);
  assert.match(disclosureSource, /technisch wel het bron-IP-adres zien/);
  assert.doesNotMatch(disclosureSource, /poort 1883|brokercredential/);
});
