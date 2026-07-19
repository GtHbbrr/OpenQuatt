import { renderOqIcon } from "../core/config.js";
import { escapeHtml } from "../core/html.js";
import { renderSettingsCompactSwitchControl } from "../settings/controls.js";

export function renderUsageTelemetryConsent({ enabled, busy, settings = false }) {
  const scheduleCopy = settings
    ? "Wanneer delen aanstaat, verstuurt OpenQuatt na een willekeurige startvertraging en daarna ongeveer elk uur een bericht via MQTT."
    : "Pas na het afronden, met een willekeurige startvertraging, en daarna ongeveer elk uur via MQTT.";
  return `
    <div class="oq-usage-consent${enabled ? " is-enabled" : ""}${settings ? " oq-usage-consent--settings" : ""}">
      <div class="oq-usage-consent-copy">
        <span class="oq-usage-consent-icon" aria-hidden="true">${renderOqIcon("bar-chart", "oq-usage-consent-icon-svg")}</span>
        <div>
          <span class="oq-usage-consent-kicker">Vrijwillige keuze</span>
          <h3>Beperkte statistieken delen</h3>
          <p>${scheduleCopy}</p>
        </div>
      </div>
      <div class="oq-usage-consent-action">
        ${renderSettingsCompactSwitchControl(
          "usageTelemetryEnabled",
          "Technische gebruiksstatistieken delen",
          enabled,
          busy,
          "Delen",
          "Niet delen",
        )}
      </div>
    </div>
  `;
}

export function renderUsageTelemetryDisclosure({ collapsible = false, idPrefix = "oq-usage", open = false } = {}) {
  const safePrefix = escapeHtml(idPrefix);
  const includedTitleId = `${safePrefix}-included-title`;
  const excludedTitleId = `${safePrefix}-excluded-title`;
  const columns = `
    <div class="oq-usage-disclosure-grid">
      <section class="oq-usage-disclosure-column" aria-labelledby="${includedTitleId}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon is-included" aria-hidden="true">${renderOqIcon("bar-chart", "oq-usage-disclosure-icon-svg")}</span>
          <h4 id="${includedTitleId}">In het bericht</h4>
        </div>
        <ul>
          <li><strong>Installatie</strong><span>Willekeurig ID en uptime</span></li>
          <li><strong>Software</strong><span>Versie en releasekanaal</span></li>
          <li><strong>Platform</strong><span>Hardware, opstelling, verbinding en wifi-signaal</span></li>
          <li><strong>Systeemstatus</strong><span>Geheugen, looptijd, chiptemperatuur en herstartreden</span></li>
          <li><strong>Functies</strong><span>Aan/uit-status van CiC, OpenTherm-thermostaat, ketelondersteuning, MQTT-inputs en lokale historie; plus de ketelaansluiting (aan/uit of OpenTherm)</span></li>
        </ul>
      </section>
      <section class="oq-usage-disclosure-column is-excluded" aria-labelledby="${excludedTitleId}">
        <div class="oq-usage-disclosure-column-head">
          <span class="oq-usage-disclosure-column-icon" aria-hidden="true">${renderOqIcon("shield", "oq-usage-disclosure-icon-svg")}</span>
          <h4 id="${excludedTitleId}">Niet in het bericht</h4>
        </div>
        <ul>
          <li><strong>Identiteit</strong><span>Geen MAC-adres of netwerkadres</span></li>
          <li><strong>Installatiegedrag</strong><span>Geen verwarmingsmetingen of regelwaarden</span></li>
          <li><strong>Lokale data</strong><span>Geen ingestelde temperaturen, grenzen, MQTT-topics of logs</span></li>
        </ul>
      </section>
    </div>
    <p class="oq-usage-network-note">${renderOqIcon("server", "oq-usage-network-note-icon")} De MQTT-broker kan, zoals iedere internetdienst, technisch wel het bron-IP-adres zien.</p>
  `;

  if (collapsible) {
    return `
      <details class="oq-settings-section oq-settings-section--collapsible oq-usage-disclosure oq-usage-disclosure--collapsible"${open ? " open" : ""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-usage-telemetry-details">
          <div class="oq-settings-section-head">
            <h3>Wat gaat er mee?</h3>
            <p>Bekijk precies welke technische gegevens wel en niet worden gedeeld.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body">
          ${columns}
        </div>
      </details>
    `;
  }

  return `
    <div class="oq-usage-disclosure">
      <div class="oq-usage-disclosure-head">
        <h3>Wat gaat er mee?</h3>
        <span>Geen verwarmings- of regeldata</span>
      </div>
      ${columns}
    </div>
  `;
}
