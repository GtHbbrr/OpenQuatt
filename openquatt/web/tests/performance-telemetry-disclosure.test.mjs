import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;

test("privacy settings compose two cards with nested detail disclosures", async () => {
  const settingsSource = await readFile(new URL("../js/src/settings/privacy.js", import.meta.url), "utf8");

  assert.match(settingsSource, /Beide opties staan standaard uit en kunnen onafhankelijk van elkaar worden ingeschakeld/);
  assert.match(settingsSource, /Jouw privacy blijft altijd beschermd/);
  assert.match(settingsSource, /renderSettingsSection\(/);
  assert.match(settingsSource, /disclosure: renderUsageTelemetryDisclosure\(\{ collapsible: true/);
  assert.match(settingsSource, /disclosure: renderPerformanceTelemetryDisclosure\(\{ collapsible: true/);
  assert.match(settingsSource, /renderPerformanceTelemetryConsent\(\{ enabled: performanceEnabled, busy: performanceBusy, settings: true,/);
  assert.doesNotMatch(settingsSource, /\? renderUsageTelemetryDisclosure/);
  assert.doesNotMatch(settingsSource, /\? renderPerformanceTelemetryDisclosure/);
});

test("consent cards lead with why and toggle Aan/Uit", async () => {
  const usageConsentSource = await readFile(new URL("../js/src/features/usage-telemetry.js", import.meta.url), "utf8");
  const performanceConsentSource = await readFile(
    new URL("../js/src/features/performance-telemetry.js", import.meta.url),
    "utf8",
  );

  for (const source of [usageConsentSource, performanceConsentSource]) {
    assert.doesNotMatch(source, /oq-usage-consent-kicker/);
    assert.match(source, /\$\{disclosure\}/);
    assert.match(source, /"Aan",\s*"Uit",/);
  }
  assert.match(usageConsentSource, /<h3>Technische statistieken delen<\/h3>/);
  assert.match(usageConsentSource, /Help OpenQuatt stabieler en betrouwbaarder te maken/);
  assert.match(performanceConsentSource, /<h3>Warmtepompprestaties delen<\/h3>/);
  assert.match(performanceConsentSource, /vermogens- en COP-modellen van OpenQuatt te controleren en verbeteren/);
  assert.match(performanceConsentSource, /basis voor de <strong>Power House<\/strong>-verwarmingsstrategie/);
});

test("nested disclosures pair detail columns with facts and why boxes", async () => {
  const usageDisclosureSource = await readFile(new URL("../js/src/features/usage-telemetry.js", import.meta.url), "utf8");
  const performanceDisclosureSource = await readFile(
    new URL("../js/src/features/performance-telemetry.js", import.meta.url),
    "utf8",
  );
  const viewActionsSource = await readFile(new URL("../js/src/features/view-actions.js", import.meta.url), "utf8");
  const stateSlicesSource = await readFile(new URL("../js/src/core/state-slices.js", import.meta.url), "utf8");

  for (const source of [usageDisclosureSource, performanceDisclosureSource]) {
    assert.match(source, /oq-usage-consent-details/);
    assert.match(source, /Welke gegevens worden gedeeld\?/);
    assert.match(source, /oq-usage-facts-grid/);
    assert.match(source, /Wordt gedeeld<\/h4>/);
    assert.match(source, /Wordt niet gedeeld<\/h4>/);
    assert.match(source, /Hoe vaak\?<\/h5>/);
    assert.match(source, /Wat niet\?<\/h5>/);
    assert.match(source, /Waarom\?<\/h5>/);
    assert.doesNotMatch(source, /oq-usage-disclosure-intro/);
    assert.doesNotMatch(source, /oq-usage-disclosure--collapsible/);
  }
  assert.match(usageDisclosureSource, /Na inschakelen verstuurt OpenQuatt vrijwel direct en daarna ongeveer elk uur/);
  assert.match(usageDisclosureSource, /problemen sneller opsporen en OpenQuatt verder verbeteren/);
  assert.match(performanceDisclosureSource, /Maximaal één keer per kwartier\. De metingen worden lokaal samengevat/);
  assert.match(performanceDisclosureSource, /Zo kan Power House nog slimmer en efficiënter verwarmen/);
  // Quick Start keeps the standalone disclosure untouched.
  assert.match(usageDisclosureSource, /<h3>Wat gaat er mee\?<\/h3>/);
  for (const source of [usageDisclosureSource, performanceDisclosureSource]) {
    assert.equal(source.split("${excludedDetail}").length - 1, 1);
  }
  assert.match(viewActionsSource, /"toggle-performance-telemetry-details": \(button, event\) => \{\s*toggleDetails\(event, button, "\.oq-usage-consent-details", "performanceTelemetryDetailsOpen"\);/);
  assert.match(stateSlicesSource, /performanceTelemetryDetailsOpen: false,/);
});

test("performance disclosure matches the firmware payload scope", async () => {
  const disclosureSource = await readFile(new URL("../js/src/features/performance-telemetry.js", import.meta.url), "utf8");
  const telemetryCpp = await readFile(
    new URL("../../../components/openquatt_performance_telemetry/OpenQuattPerformanceTelemetry.cpp", import.meta.url),
    "utf8",
  );

  assert.match(telemetryCpp, /"bid"/);
  assert.match(telemetryCpp, /"v":1/);
  assert.doesNotMatch(telemetryCpp, /"pem"/);
  assert.doesNotMatch(telemetryCpp, /"mk"/);
  for (const needle of [
    /Willekeurig installatie-ID, OpenQuatt-versie en Single of Duo/,
    /Generatie \(V1 \/ V1\.5 \/ V2\) en versie van het prestatiemodel/,
    /Buitentemperatuur en waterflow/,
    /Compressorlevel en frequentie, water in\/uit/,
    /bodemplaatverwarming/,
    /Alleen stabiele verwarmingsminuten/,
    /Geen wifi- of inloggegevens, MAC-adres of gebruikersnaam/,
    /Geen kamer-\/thermostaatgegevens of coolingmetingen/,
    /ongeldige\/incomplete meetperioden/,
  ]) {
    assert.match(disclosureSource, needle);
  }
  assert.match(disclosureSource, /Voorbeeld van het verzonden bericht \(JSON\)/);
  for (const needle of [
    /batch-ID/,
    /vensterstart/,
    /minuutstart/,
    /prestatiekaart/,
    /Power Input-model/,
  ]) {
    assert.doesNotMatch(disclosureSource, needle);
  }
});
