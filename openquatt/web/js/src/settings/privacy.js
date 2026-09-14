import { hasEntity, isEntityActive } from "../core/app-shared.js";
import { state } from "../core/state.js";
import { renderPerformanceTelemetryConsent, renderPerformanceTelemetryDisclosure } from "../features/performance-telemetry.js";
import { renderUsageTelemetryConsent, renderUsageTelemetryDisclosure } from "../features/usage-telemetry.js";
import { renderSettingsSection } from "./controls.js";

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
    "Help OpenQuatt verbeteren door technische gegevens te delen. Beide opties staan standaard uit en kunnen onafhankelijk van elkaar worden ingeschakeld. Geen wifi- of inloggegevens. Jouw privacy blijft altijd beschermd.",
    `<div class="oq-usage-settings">
      ${usageAvailable ? renderUsageTelemetryConsent({ enabled: usageEnabled, busy: usageBusy, settings: true, disclosure: renderUsageTelemetryDisclosure({ collapsible: true, idPrefix: "oq-settings-usage", open: state.usageTelemetryDetailsOpen }) }) : ""}
      ${performanceAvailable ? renderPerformanceTelemetryConsent({ enabled: performanceEnabled, busy: performanceBusy, settings: true, disclosure: renderPerformanceTelemetryDisclosure({ collapsible: true, idPrefix: "oq-settings-performance", open: state.performanceTelemetryDetailsOpen }) }) : ""}
    </div>`,
  );
}
