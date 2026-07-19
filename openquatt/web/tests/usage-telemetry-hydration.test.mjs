import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { FAST_OVERVIEW_KEYS, OVERVIEW_KEYS, QUICK_STEPS } from "../js/src/core/config.js";

globalThis.__OQ_PREVIEW__ = false;

const { getPrimeBaseKeys } = await import("../js/src/core/entity-sync.js");
const {
  isUsageTelemetryChoiceConfirmed,
  shouldInitializeQuickStartUsageTelemetryChoice,
} = await import("../js/src/core/usage-telemetry-domain.js");

test("usage telemetry is hydrated before Quick Start filters optional steps", () => {
  const usageStep = QUICK_STEPS.find((step) => step.id === "usage-telemetry");

  assert.equal(usageStep?.optionalEntity, "usageTelemetryEnabled");
  assert.ok(getPrimeBaseKeys().includes("usageTelemetryEnabled"));
  assert.ok(getPrimeBaseKeys().includes("usageTelemetryChoiceConfigured"));
  assert.ok(FAST_OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
  assert.ok(FAST_OVERVIEW_KEYS.includes("usageTelemetryChoiceConfigured"));
  assert.ok(OVERVIEW_KEYS.includes("usageTelemetryEnabled"));
  assert.ok(OVERVIEW_KEYS.includes("usageTelemetryChoiceConfigured"));
});

test("telemetry choice confirmation requires persisted state and the expected value", () => {
  assert.equal(isUsageTelemetryChoiceConfirmed({
    telemetryValue: "ON",
    choiceValue: "ON",
    expectedEnabled: true,
  }), true);
  assert.equal(isUsageTelemetryChoiceConfirmed({
    telemetryValue: "OFF",
    choiceValue: "ON",
    expectedEnabled: false,
  }), true);
  assert.equal(isUsageTelemetryChoiceConfirmed({
    telemetryValue: "OFF",
    choiceValue: "OFF",
    expectedEnabled: false,
  }), false);
  assert.equal(isUsageTelemetryChoiceConfirmed({
    telemetryValue: "ON",
    choiceValue: "ON",
    expectedEnabled: false,
  }), false);
  assert.equal(isUsageTelemetryChoiceConfirmed({
    telemetryValue: undefined,
    choiceValue: "ON",
    expectedEnabled: false,
  }), false);
  assert.equal(isUsageTelemetryChoiceConfirmed({
    telemetryValue: "unknown",
    choiceValue: "ON",
    expectedEnabled: false,
  }), false);
});

test("Quick Start applies default-on only while no telemetry choice is recorded", () => {
  const base = {
    stepId: "usage-telemetry",
    telemetryAvailable: true,
    choiceAvailable: true,
  };
  assert.equal(shouldInitializeQuickStartUsageTelemetryChoice({ ...base, choiceValue: "OFF" }), true);
  assert.equal(shouldInitializeQuickStartUsageTelemetryChoice({ ...base, choiceValue: "ON" }), false);
  assert.equal(shouldInitializeQuickStartUsageTelemetryChoice({ ...base, choiceValue: "unknown" }), false);
  assert.equal(shouldInitializeQuickStartUsageTelemetryChoice({ ...base, stepId: "confirm", choiceValue: "OFF" }), false);
});

test("Quick Start locks telemetry consent before hydration starts", async () => {
  const quickStartSource = await readFile(new URL("../js/src/features/quickstart.js", import.meta.url), "utf8");
  const quickStartUiActionsSource = await readFile(new URL("../js/src/features/quickstart-ui-actions.js", import.meta.url), "utf8");
  const preparationLockIndex = quickStartUiActionsSource.indexOf("state.busyAction = USAGE_TELEMETRY_PREPARATION_ACTION");
  const hydrationIndex = quickStartUiActionsSource.indexOf("await refreshQuickStartStepHydration(stepId)");

  assert.match(quickStartSource, /state\.loadingEntities \|\| Boolean\(state\.busyAction\)/);
  assert.ok(preparationLockIndex >= 0 && preparationLockIndex < hydrationIndex);
  assert.match(quickStartUiActionsSource, /preparationId !== quickStartPreparationId/);
});

test("usage telemetry disclosure matches the hourly payload scope", async () => {
  const quickStartSource = await readFile(new URL("../js/src/features/quickstart.js", import.meta.url), "utf8");
  const entityWriteSource = await readFile(new URL("../js/src/core/entity-write-actions.js", import.meta.url), "utf8");
  const settingsSource = await readFile(new URL("../js/src/settings/privacy.js", import.meta.url), "utf8");
  const disclosureSource = await readFile(new URL("../js/src/features/usage-telemetry.js", import.meta.url), "utf8");

  assert.match(quickStartSource, /renderUsageTelemetryDisclosure\(\)/);
  assert.match(quickStartSource, /data-oq-action="confirm-no-usage-telemetry"/);
  assert.match(entityWriteSource, /commitUsageTelemetrySwitch/);
  assert.match(entityWriteSource, /isUsageTelemetryChoiceConfirmed/);
  assert.match(entityWriteSource, /"turn_off"/);
  assert.match(settingsSource, /renderUsageTelemetryDisclosure\(\{ collapsible: true/);
  assert.match(settingsSource, /usageTelemetryDetailsOpen/);
  assert.match(disclosureSource, /vrijwel direct en daarna ongeveer elk uur/);
  assert.match(disclosureSource, /OpenQuatt-loggingserver/);
  assert.match(disclosureSource, /wifi-signaal/);
  assert.match(disclosureSource, /Aan\/uit-status van CiC, OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie/);
  assert.match(disclosureSource, /ketelaansluiting \(aan\/uit of OpenTherm\)/);
  assert.match(disclosureSource, /Geen ingestelde temperaturen, grenzen, MQTT-topics of logs/);
  assert.match(disclosureSource, /Nooit een wifi-netwerknaam, wifi-wachtwoord, gebruikersnaam, ander wachtwoord of inloggegevens/);
  assert.match(disclosureSource, /Voorbeeld van het verzonden bericht \(JSON\)/);
  assert.match(disclosureSource, /schema_version/);
  assert.match(disclosureSource, /oq-usage-disclosure--collapsible/);
  assert.match(disclosureSource, /data-oq-action="toggle-usage-telemetry-details"/);
  assert.match(disclosureSource, /technisch wel het bron-IP-adres zien/);
  assert.match(disclosureSource, /OpenQuatt slaat dit IP-adres niet op/);
  assert.doesNotMatch(disclosureSource, /poort 1883|brokercredential|MQTT-broker|startvertraging|jitter/);
});
