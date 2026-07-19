import { hasEntity, isEntityActive } from "../core/app-shared.js";
import { state } from "../core/state.js";
import { renderUsageTelemetryConsent, renderUsageTelemetryDisclosure } from "../features/usage-telemetry.js";
import { renderSettingsSection } from "./controls.js";

export function renderSettingsPrivacySection() {
  if (!hasEntity("usageTelemetryEnabled")) {
    return "";
  }
  const enabled = isEntityActive("usageTelemetryEnabled");
  const busy = state.loadingEntities || state.busyAction === "switch-usageTelemetryEnabled";

  return renderSettingsSection(
    "Privacy",
    "Gebruiksstatistieken",
    "OpenQuatt deelt standaard beperkte technische gebruiksstatistieken. Wil je dit niet, zet delen hier uit. Je kunt deze keuze altijd wijzigen.",
    `<div class="oq-usage-settings">
      ${renderUsageTelemetryConsent({ enabled, busy, settings: true })}
      ${renderUsageTelemetryDisclosure({ collapsible: true, idPrefix: "oq-settings-usage", open: state.usageTelemetryDetailsOpen })}
    </div>`,
  );
}
