import { renderOqIcon } from "../core/config.js";
import { escapeHtml } from "../core/html.js";
import { renderSettingsCompactSwitchControl } from "../settings/controls.js";

export function renderPerformanceTelemetryConsent({ enabled, busy, settings = false, disclosure = "" }) {
  const scheduleCopy = settings
    ? "Help de vermogens- en COP-modellen van OpenQuatt te controleren en verbeteren. Deze modellen vormen de basis voor de <strong>Power House</strong>-verwarmingsstrategie."
    : "Standaard uit. Na inschakelen bundelt OpenQuatt stabiele verwarmingsminuten en verstuurt maximaal één bericht per kwartier naar de OpenQuatt-loggingserver. Uitschakelen stopt direct en wist openstaande meetdata.";
  return `
    <div class="oq-usage-consent${enabled ? " is-enabled" : ""} oq-usage-consent--settings">
      <div class="oq-usage-consent-copy">
        <span class="oq-usage-consent-icon" aria-hidden="true">${renderOqIcon("activity", "oq-usage-consent-icon-svg")}</span>
        <div>
          <h3>Prestatiemetingen delen</h3>
          <p>${scheduleCopy}</p>
        </div>
      </div>
      <div class="oq-usage-consent-action">
        ${renderSettingsCompactSwitchControl(
          "performanceTelemetryEnabled",
          "Prestatiemetingen delen",
          enabled,
          busy,
          "Aan",
          "Uit",
        )}
      </div>
      ${disclosure}
    </div>
  `;
}

const PERFORMANCE_PAYLOAD_EXAMPLE = `{
  "v": 1,
  "iid": "3f9a…",
  "bid": "7c4e…",
  "ws": 1757760000,
  "fw": "v0.50.0",
  "top": "duo",
  "gen": "v1_5",
  "map": "v1-2026-09-a",
  "pem": "pinput-v1",
  "mk": "system_actual",
  "m": [
    {
      "t": 1757760000,
      "a": 1,
      "o": 7.25,
      "s": 32.50,
      "f": 807.0,
      "h": [
        {"l": 2, "hz": 30.0, "ti": 28.10, "to": 31.40, "el": 5.67, "et": 17.28, "ep": 0.42, "b": false},
        null
      ]
    }
  ]
}`;

export function renderPerformanceTelemetryDisclosure({ collapsible = false, idPrefix = "oq-performance", open = false } = {}) {
  const safePrefix = escapeHtml(idPrefix);
  const includedTitleId = `${safePrefix}-included-title`;
  const excludedTitleId = `${safePrefix}-excluded-title`;
  const sharedDetail = `
    <section class="oq-usage-disclosure-column" aria-labelledby="${includedTitleId}">
      <div class="oq-usage-disclosure-column-head">
        <span class="oq-usage-disclosure-column-icon is-included" aria-hidden="true">${renderOqIcon("activity", "oq-usage-disclosure-icon-svg")}</span>
        <h4 id="${includedTitleId}">Wordt gedeeld</h4>
      </div>
      <ul>
        <li><strong>Systeem</strong><span>Willekeurig installatie-ID, OpenQuatt-versie en Single of Duo</span></li>
        <li><strong>Warmtepomp</strong><span>Generatie (V1 / V1.5 / V2) en versie van het prestatiemodel en de vermogensberekening</span></li>
        <li><strong>Bedrijfspunt</strong><span>Buitentemperatuur, aanvoertemperatuur en waterflow</span></li>
        <li><strong>Per warmtepomp</strong><span>Compressorlevel en frequentie, water in/uit, elektrische/thermische/pompenergie en bodemplaatverwarming</span></li>
        <li><strong>Bereik</strong><span>Alleen stabiele verwarmingsminuten; starten, stoppen, defrosts en incomplete perioden worden niet meegenomen</span></li>
      </ul>
    </section>
  `;
  const excludedDetail = `
    <section class="oq-usage-disclosure-column is-excluded" aria-labelledby="${excludedTitleId}">
      <div class="oq-usage-disclosure-column-head">
        <span class="oq-usage-disclosure-column-icon" aria-hidden="true">${renderOqIcon("shield", "oq-usage-disclosure-icon-svg")}</span>
        <h4 id="${excludedTitleId}">Wordt niet gedeeld</h4>
      </div>
      <ul>
        <li><strong>Identiteit en toegang</strong><span>Geen wifi- of inloggegevens, MAC-adres of gebruikersnaam</span></li>
        <li><strong>Woning en regeling</strong><span>Geen kamer-/thermostaatgegevens of coolingmetingen</span></li>
        <li><strong>Selectie</strong><span>Geen starts, stops, defrosts, oil return of ongeldige/incomplete meetperioden</span></li>
      </ul>
    </section>
  `;
  const facts = `
    <div class="oq-usage-facts">
      <div class="oq-usage-fact">
        <span class="oq-usage-fact-icon" aria-hidden="true">${renderOqIcon("clock", "oq-usage-fact-icon-svg")}</span>
        <div>
          <h5>Hoe vaak?</h5>
          <p>Maximaal één keer per kwartier. De metingen worden lokaal samengevat.</p>
        </div>
      </div>
      <div class="oq-usage-fact">
        <span class="oq-usage-fact-icon" aria-hidden="true">${renderOqIcon("lock", "oq-usage-fact-icon-svg")}</span>
        <div>
          <h5>Wat niet?</h5>
          <p>Geen metingen tijdens starten/stoppen, defrosts of koelen. Geen persoonlijke gegevens.</p>
        </div>
      </div>
    </div>
  `;
  const why = `
    <aside class="oq-usage-why">
      <span class="oq-usage-why-icon" aria-hidden="true">${renderOqIcon("info", "oq-usage-why-icon-svg")}</span>
      <div>
        <h5>Waarom?</h5>
        <p>Deze metingen helpen ons de warmtepompprestaties in de praktijk te valideren en de modellen te verbeteren. Zo kan Power House nog slimmer en efficiënter verwarmen.</p>
      </div>
    </aside>
  `;
  const note = `
    <p class="oq-usage-network-note">${renderOqIcon("server", "oq-usage-network-note-icon")} De OpenQuatt-loggingserver kan, zoals iedere internetdienst, technisch wel het bron-IP-adres zien. OpenQuatt slaat dit IP-adres niet op.</p>
  `;
  const example = `
    <details class="oq-usage-payload-example">
      <summary>Voorbeeld van het verzonden bericht (JSON)</summary>
      <p>Verkort voorbeeld met één minuut; een echt bericht bevat tot 15 minuten en wordt maximaal één keer per kwartier gepubliceerd.</p>
      <pre><code>${escapeHtml(PERFORMANCE_PAYLOAD_EXAMPLE)}</code></pre>
    </details>
  `;

  if (collapsible) {
    return `
      <details class="oq-usage-consent-details"${open ? " open" : ""}>
        <summary data-oq-action="toggle-performance-telemetry-details">
          <span class="oq-usage-consent-details-title">Welke gegevens worden gedeeld?</span>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-usage-consent-details-body">
          <div class="oq-usage-facts-grid">
            ${sharedDetail}
            ${facts}
            ${why}
          </div>
          ${example}
          ${note}
        </div>
      </details>
    `;
  }

  return `
    <div class="oq-usage-disclosure">
      <div class="oq-usage-disclosure-head">
        <h3>Wat gaat er mee?</h3>
        <span>Alleen stabiele verwarmingsminuten</span>
      </div>
      <div class="oq-usage-disclosure-grid">
        ${sharedDetail}
        ${excludedDetail}
      </div>
      ${example}
      ${note}
    </div>
  `;
}
