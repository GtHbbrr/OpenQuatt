import { hasEntity, isEntityActive } from "../core/app-shared.js";
import { state } from "../core/state.js";
import { renderUsageTelemetryConsent, renderUsageTelemetryDisclosure } from "../features/usage-telemetry.js";
import { renderSettingsCompactSwitchControl, renderSettingsSection } from "./controls.js";

export function renderSettingsPrivacySection() {
  const usageAvailable = hasEntity("usageTelemetryEnabled");
  const performanceAvailable = hasEntity("performanceTelemetryEnabled");
  if (!usageAvailable && !performanceAvailable) {
    return "";
  }
  const usageEnabled = isEntityActive("usageTelemetryEnabled");
  const usageBusy = state.loadingEntities || state.busyAction === "switch-usageTelemetryEnabled";
  const performanceEnabled = isEntityActive("performanceTelemetryEnabled");
  const performanceBusy = state.loadingEntities || state.busyAction === "switch-performanceTelemetryEnabled";

  return renderSettingsSection(
    "Privacy",
    "Vrijwillig gegevens delen",
    "Los en vrijwillig. Geen wifi- of inloggegevens. Onbevestigd uit.",
    `<div class="oq-usage-settings">
      ${usageAvailable ? renderUsageTelemetryConsent({ enabled: usageEnabled, busy: usageBusy, settings: true }) : ""}
      ${usageAvailable ? renderUsageTelemetryDisclosure({ collapsible: true, idPrefix: "oq-settings-usage", open: state.usageTelemetryDetailsOpen }) : ""}
      ${performanceAvailable ? `
        <div class="oq-usage-consent${performanceEnabled ? " is-enabled" : ""}">
          <div class="oq-usage-consent-copy">
            <h3>Prestatiemetingen delen</h3>
            <p>Standaard uit. Elke 15 minuten stabiele verwarmingsmetingen voor kaartvalidatie. Geen wifi-, log-, kamer- of thermostaatsetpointgegevens; bij een stooklijn alleen de aanvoerdoelwaarde. Uitschakelen stopt direct.</p>
          </div>
          ${renderSettingsCompactSwitchControl("performanceTelemetryEnabled", "Prestatiemetingen delen", performanceEnabled, performanceBusy, "Delen", "Niet delen")}
        </div>` : ""}
    </div>`,
  );
}
