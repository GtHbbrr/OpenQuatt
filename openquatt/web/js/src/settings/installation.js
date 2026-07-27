import { getEntityNumericValue, getEntityStateText, hasEntity, isEntityActive } from "../core/app-shared.js";
import { getOduRuntimeFrequencyControlKey, getOduRuntimeFrequencyValueKey, ODU_RUNTIME_FREQUENCY_HP_IDS, ODU_RUNTIME_FREQUENCY_LEVELS, ODU_RUNTIME_FREQUENCY_MODES } from "../core/config.js";
import { HP_GENERATION_IMAGE_V1, HP_GENERATION_IMAGE_V2 } from "../core/embedded-assets.js";
import { getInputDraftValue } from "../core/control-drafts.js";
import { getEntityValue, getNumberMeta, parseLooseNumber } from "../core/entity-store.js";
import { getInstallationMonitoringFailureText, getInstallationMonitoringModel, isInstallationMonitoringBinaryActive, isInstallationMonitoringFailureActive, isInstallationMonitoringIntegrationEnabled, syncInstallationMonitoringDetailsState } from "../core/installation-monitoring.js";
import { renderNumberInputControl } from "../core/number-controls.js";
import { state } from "../core/state.js";
import { getDebugRecordingStatusCopy, getDebugRecordingStatusLabel } from "../features/debug-recording.js";
import { formatDiagnosticsDateTime, formatUptimeFromMeta, getDeviceIpAddress, getInstallationLabel } from "../features/device-context.js";
import { getUpdateStatus } from "../features/firmware-update.js";
import { getEspTemperatureLabel } from "../features/header-status.js";
import { getWebServerLogStatusLabel } from "../features/webserver-logs.js";
import { BOILER_OPENTHERM_CAPABILITY, getBoilerOpenThermCapability, getSupportedBoilerConnectionOptions } from "./boiler.js";
import { getSelectEntityOptions, renderNamedActionButton, renderSettingsChoiceOption, renderSettingsCompactSwitchControl, renderSettingsFieldCard, renderSettingsNumberField, renderSettingsSection, renderSettingsSliderField, renderSettingsSystemRow } from "./controls.js";
import { renderSettingsHeatPumpLimiterCard } from "./heating.js";
import { escapeHtml } from "../core/html.js";

  export function getOduRuntimeFrequencyHpIndexes() {
    return ODU_RUNTIME_FREQUENCY_HP_IDS.filter((hpIndex) => (
      hasEntity(getOduRuntimeFrequencyControlKey(hpIndex, "Status"))
      || hasEntity(getOduRuntimeFrequencyControlKey(hpIndex, "Load"))
      || hasEntity(getOduRuntimeFrequencyValueKey(hpIndex, "cooling", 0))
    ));
  }

  export function getOduRuntimeFrequencyNumberValue(key) {
    return parseLooseNumber(getInputDraftValue(key));
  }

  export function getOduRuntimeFrequencyTableValidation(hpIndex) {
    const invalid = [];
    ODU_RUNTIME_FREQUENCY_MODES.forEach((mode) => {
      let previous = -Infinity;
      ODU_RUNTIME_FREQUENCY_LEVELS.forEach((level) => {
        const key = getOduRuntimeFrequencyValueKey(hpIndex, mode, level);
        const value = getOduRuntimeFrequencyNumberValue(key);
        if (!Number.isFinite(value) || value < 0 || value > 120 || value < previous) {
          invalid.push(`${mode === "cooling" ? "C" : "H"}F${level}`);
        }
        if (Number.isFinite(value)) {
          previous = value;
        }
      });
    });
    return {
      valid: invalid.length === 0,
      invalid,
    };
  }

  export function getOduRuntimeFrequencyOperationState(hpIndex) {
    const mode = String(getEntityValue(`hp${hpIndex}Mode`) || "").trim();
    const freq = parseLooseNumber(getEntityValue(`hp${hpIndex}Freq`));
    const modeKnown = mode && mode !== "Onbekend" && mode !== "Unknown";
    const freqKnown = Number.isFinite(freq);
    const standby = modeKnown && /standby|stand-by/i.test(mode);
    const stopped = freqKnown && freq <= 0.5;
    const reason = !modeKnown
      ? "ODU status is onbekend."
      : !standby
        ? `ODU staat in ${mode}.`
        : !freqKnown
          ? "Compressorfrequentie is onbekend."
          : !stopped
            ? `Compressor draait op ${freq.toFixed(0)} Hz.`
            : "Standby en compressor uit.";
    return {
      mode: modeKnown ? mode : "Onbekend",
      freq: Number.isFinite(freq) ? `${freq.toFixed(0)} Hz` : "Onbekend",
      safe: standby && stopped,
      reason,
    };
  }

  export function getOduRuntimeFrequencyStatusCopy(status) {
    const normalized = String(status || "").toUpperCase();
    if (!status || normalized === "UNKNOWN" || normalized === "UNAVAILABLE") {
      return "Nog geen readback of apply-status ontvangen.";
    }
    if (normalized.includes("APPLIED")) {
      return "Runtime registers zijn geschreven en via readback bevestigd. Een ODU powercycle zet de originele tabel terug.";
    }
    if (normalized.includes("GUARD_READ_REQUESTED")) {
      return "Firmware leest actuele ODU mode en compressorfrequentie voordat er geschreven wordt.";
    }
    if (normalized.includes("WRITE_QUEUED") || normalized.includes("WRITE_CONFIRMED")) {
      return "Runtime write loopt; wacht op bevestigde readback voordat je de waarden vertrouwt.";
    }
    if (normalized.includes("FAILED")) {
      return "Firmware kon de runtime tabel niet volledig bevestigen. Laad opnieuw voordat je verder test.";
    }
    if (normalized.includes("LOADED")) {
      return "Readback is in de velden geladen. Controleer de waarden voordat je schrijft.";
    }
    if (normalized.includes("BLOCKED")) {
      return "Firmware heeft de actie geblokkeerd; controleer enable, standby en compressorstatus.";
    }
    if (normalized.includes("LOAD_REQUESTED")) {
      return "Readback is aangevraagd bij de ODU.";
    }
    return "Laatste status van de experimentele runtime tabel.";
  }

  export function renderOduRuntimeFrequencyNumberInput(key, tabIndex) {
    if (!hasEntity(key)) {
      return `<span class="oq-settings-odu-runtime-missing">-</span>`;
    }
    return renderNumberInputControl({
      key,
      value: getInputDraftValue(key),
      meta: getNumberMeta(key),
      controlClass: "oq-helper-control oq-helper-control--suffix oq-settings-odu-runtime-control",
      inputClass: "oq-helper-input oq-helper-input--compact-number oq-settings-odu-runtime-input",
      inputAttributes: `data-oq-odu-runtime-tab-index="${tabIndex}"`,
      unitMarkup: '<span class="oq-helper-unit-chip">Hz</span>',
    });
  }

  export function renderOduRuntimeFrequencyTable(hpIndex) {
    const levelCount = ODU_RUNTIME_FREQUENCY_LEVELS.length;
    return `
      <div class="oq-settings-odu-runtime-table" role="table" aria-label="${escapeHtml(`HP${hpIndex} ODU runtime frequentietabel`)}">
        <div class="oq-settings-odu-runtime-row oq-settings-odu-runtime-row--head" role="row">
          <span role="columnheader">Level</span>
          <span role="columnheader">Cooling</span>
          <span role="columnheader">Heating</span>
        </div>
        ${ODU_RUNTIME_FREQUENCY_LEVELS.map((level) => `
          <div class="oq-settings-odu-runtime-row" role="row">
            <span class="oq-settings-odu-runtime-level" role="cell">F${level}</span>
            <div role="cell">${renderOduRuntimeFrequencyNumberInput(getOduRuntimeFrequencyValueKey(hpIndex, "cooling", level), level)}</div>
            <div role="cell">${renderOduRuntimeFrequencyNumberInput(getOduRuntimeFrequencyValueKey(hpIndex, "heating", level), levelCount + level)}</div>
          </div>
        `).join("")}
      </div>
    `;
  }

  export function handleOduRuntimeFrequencyInputKeyDown(event) {
    if (event.key !== "Tab" || event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }

    const input = event.target && event.target.closest
      ? event.target.closest("input[data-oq-odu-runtime-tab-index]")
      : null;
    const table = input ? input.closest(".oq-settings-odu-runtime-table") : null;
    if (!input || !table) {
      return;
    }

    const inputs = Array.from(table.querySelectorAll("input[data-oq-odu-runtime-tab-index]:not(:disabled)"))
      .sort((left, right) => Number(left.dataset.oqOduRuntimeTabIndex || 0) - Number(right.dataset.oqOduRuntimeTabIndex || 0));
    const currentIndex = inputs.indexOf(input);
    const nextInput = inputs[currentIndex + (event.shiftKey ? -1 : 1)];
    if (currentIndex < 0 || !nextInput) {
      return;
    }

    event.preventDefault();
    nextInput.focus();
    if (typeof nextInput.select === "function") {
      nextInput.select();
    }
  }

  export function renderOduRuntimeFrequencyHpPanel(hpIndex) {
    const enableKey = getOduRuntimeFrequencyControlKey(hpIndex, "Enable");
    const loadKey = getOduRuntimeFrequencyControlKey(hpIndex, "Load");
    const applyKey = getOduRuntimeFrequencyControlKey(hpIndex, "Apply");
    const statusKey = getOduRuntimeFrequencyControlKey(hpIndex, "Status");
    const status = String(getEntityValue(statusKey) || "").trim() || "Nog niet geladen";
    const validation = getOduRuntimeFrequencyTableValidation(hpIndex);
    const operation = getOduRuntimeFrequencyOperationState(hpIndex);
    const enabled = Boolean(getEntityValue(enableKey));
    const busy = state.loadingEntities || state.busyAction === loadKey || state.busyAction === applyKey;
    const applyDisabled = busy || !enabled || !validation.valid || !operation.safe || !hasEntity(applyKey);
    const validationText = validation.valid
      ? "Waarden zijn 0-120 Hz en per tabel oplopend."
      : `Controleer ${validation.invalid.slice(0, 5).join(", ")}${validation.invalid.length > 5 ? "..." : ""}.`;

    return `
      <article class="oq-settings-odu-runtime-panel">
        <div class="oq-settings-odu-runtime-panel-head">
          <div>
            <p class="oq-helper-label">HP${hpIndex}</p>
            <h4>Runtime frequentietabel</h4>
            <p>${escapeHtml(operation.reason)} Laatste compressorfrequentie: ${escapeHtml(operation.freq)}.</p>
          </div>
          <div class="oq-settings-odu-runtime-actions">
            ${hasEntity(loadKey) ? renderNamedActionButton(loadKey, state.busyAction === loadKey ? "Lezen..." : "Uit ODU laden", "oq-helper-button oq-helper-button--ghost", busy) : ""}
      ${hasEntity(enableKey) ? renderSettingsCompactSwitchControl(enableKey, `HP${hpIndex} writes vrijgeven`, enabled, busy, "Enable", "Locked") : ""}
            ${hasEntity(applyKey) ? renderNamedActionButton(applyKey, state.busyAction === applyKey ? "Schrijven..." : "Runtime toepassen", "oq-helper-button oq-helper-button--warning", applyDisabled) : ""}
          </div>
        </div>
        <div class="oq-settings-odu-runtime-status${status.toUpperCase().includes("BLOCKED") ? " is-warning" : status.toUpperCase().includes("APPLIED") || status.toUpperCase().includes("LOADED") ? " is-success" : ""}">
          <div>
            <span>Status</span>
            <strong>${escapeHtml(status)}</strong>
          </div>
          <p>${escapeHtml(getOduRuntimeFrequencyStatusCopy(status))}</p>
        </div>
        ${renderOduRuntimeFrequencyTable(hpIndex)}
        <p class="oq-settings-odu-runtime-validation${validation.valid && operation.safe ? " is-ok" : " is-warning"}">${escapeHtml(validationText)} ${escapeHtml(operation.safe ? "" : operation.reason)}</p>
      </article>
    `;
  }

  export function renderSettingsOduRuntimeFrequencySection() {
    const hpIndexes = getOduRuntimeFrequencyHpIndexes();
    if (!hpIndexes.length) {
      return "";
    }

    return `
      <details class="oq-settings-section oq-settings-section--collapsible oq-settings-odu-runtime-details"${state.oduRuntimeFrequencyDetailsOpen ? " open" : ""}>
        <summary class="oq-settings-section-summary" data-oq-action="toggle-odu-runtime-frequency-details">
          <div class="oq-settings-section-head">
            <div class="oq-settings-section-head-meta">
              <p class="oq-helper-label">Experimenteel</p>
              <div class="oq-settings-section-head-meta-badge">
                <span class="oq-settings-section-badge oq-settings-section-badge--experimental">Runtime only</span>
              </div>
            </div>
            <h3>ODU runtime frequentietabel</h3>
            <p>Lees en schrijf de ODU frequentietabel alleen runtime; waarden worden niet opgeslagen in EEPROM.</p>
          </div>
          <span class="oq-settings-section-summary-toggle" aria-hidden="true"></span>
        </summary>
        <div class="oq-settings-section-collapsible-body oq-settings-odu-runtime">
          <div class="oq-settings-odu-runtime-warning" role="alert">
            <strong>Schrijft direct naar ODU runtime registers.</strong>
            <p>Gebruik dit alleen voor gecontroleerde tests. Apply werkt alleen wanneer de HP in standby staat, de compressor uit is en de enable-schakelaar bewust aan staat.</p>
            <p>Verlaag koel-frequenties onder de OEM-ondergrens rond 30 Hz alleen met superheat-bewaking. Bij te lage suction superheat kan natte zuigretour richting compressor ontstaan.</p>
          </div>
          <div class="oq-settings-odu-runtime-panels">
            ${hpIndexes.map((hpIndex) => renderOduRuntimeFrequencyHpPanel(hpIndex)).join("")}
          </div>
        </div>
      </details>
    `;
  }

  export function renderInstallationMonitoringBadge(active, activeLabel = "Aandacht", clearLabel = "OK") {
    return `<span class="oq-settings-monitoring-badge${active ? " is-warning" : " is-clear"}">${escapeHtml(active ? activeLabel : clearLabel)}</span>`;
  }

  export function renderInstallationMonitoringStatusRow({ label, value, note = "", active = false }) {
    return `
      <div class="oq-settings-monitoring-row${active ? " is-warning" : ""}">
        <div>
          <p>${escapeHtml(label)}</p>
          <strong>${escapeHtml(value)}</strong>
          ${note ? `<span>${escapeHtml(note)}</span>` : ""}
        </div>
        ${renderInstallationMonitoringBadge(active)}
      </div>
    `;
  }

  export function getInstallationMonitoringCount(key) {
    const value = getEntityNumericValue(key);
    return Number.isNaN(value) ? "—" : String(Math.max(0, Math.round(value)));
  }

  export function formatInstallationMonitoringLastStart(key) {
    const ageMinutes = getEntityNumericValue(key);
    if (Number.isNaN(ageMinutes)) {
      return "Nog niet gemeten";
    }
    if (ageMinutes < 1) {
      return "Zojuist";
    }
    if (ageMinutes < 60) {
      return `${Math.round(ageMinutes)} min geleden`;
    }
    const hours = Math.floor(ageMinutes / 60);
    const minutes = Math.round(ageMinutes % 60);
    return `${hours}u ${minutes}m geleden`;
  }

  export function formatInstallationMonitoringEpoch(key) {
    const epoch = getEntityNumericValue(key);
    if (Number.isNaN(epoch) || epoch <= 0) {
      return "Tijdstip onbekend";
    }
    return new Intl.DateTimeFormat("nl-NL", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(epoch * 1000));
  }

  export function renderInstallationMonitoringCyclingIncident(monitoring) {
    if (!monitoring.cyclingAlertLatched) {
      return "";
    }
    const alternating = isInstallationMonitoringBinaryActive("compressorCyclingAlertAlternating");
    const hp1Peak2h = getInstallationMonitoringCount("compressorCyclingAlertHp1Peak2h");
    const hp1Peak72h = getInstallationMonitoringCount("compressorCyclingAlertHp1Peak72h");
    const hp2Peak2h = hasEntity("compressorCyclingAlertHp2Peak2h")
      ? getInstallationMonitoringCount("compressorCyclingAlertHp2Peak2h")
      : "";
    const hp2Peak72h = hasEntity("compressorCyclingAlertHp2Peak72h")
      ? getInstallationMonitoringCount("compressorCyclingAlertHp2Peak72h")
      : "";
    return `
      <div class="oq-settings-monitoring-incident${monitoring.cyclingAlertActive ? " is-active" : " is-recovered"}">
        <div class="oq-settings-monitoring-incident-head">
          <div>
            <p>Pendelmelding</p>
            <strong>${monitoring.cyclingAlertActive ? "Pendelen is nu actief" : "Pendelen is niet meer actief"}</strong>
          </div>
          ${renderInstallationMonitoringBadge(monitoring.cyclingAlertActive, "Actief", "Hersteld")}
        </div>
        <span>${monitoring.cyclingAlertActive
          ? "De melding blijft staan nadat de starts weer rustig zijn geworden. Hier zie je de vastgelegde aantallen."
          : "OpenQuatt bewaart deze melding totdat je haar hieronder bevestigt."}</span>
        <dl>
          <div><dt>Eerste melding</dt><dd>${escapeHtml(formatInstallationMonitoringEpoch("compressorCyclingAlertFirstSeen"))}</dd></div>
          <div><dt>Laatste melding</dt><dd>${escapeHtml(formatInstallationMonitoringEpoch("compressorCyclingAlertLastSeen"))}</dd></div>
          <div><dt>HP1 2 uur</dt><dd>${escapeHtml(hp1Peak2h)} starts</dd></div>
          <div><dt>HP1 72 uur</dt><dd>${escapeHtml(hp1Peak72h)} starts</dd></div>
          ${hp2Peak2h ? `<div><dt>HP2 2 uur</dt><dd>${escapeHtml(hp2Peak2h)} starts</dd></div>` : ""}
          ${hp2Peak72h ? `<div><dt>HP2 72 uur</dt><dd>${escapeHtml(hp2Peak72h)} starts</dd></div>` : ""}
          ${alternating ? "<div><dt>Patroon</dt><dd>Opvallend vaak om en om</dd></div>" : ""}
        </dl>
        <div class="oq-settings-monitoring-incident-action">
          ${state.entities.acknowledgeCompressorCyclingAlert
            ? renderNamedActionButton(
              "acknowledgeCompressorCyclingAlert",
              "Melding bevestigen",
              "oq-helper-button oq-helper-button--ghost",
              monitoring.cyclingAlertActive,
            )
            : ""}
          <span>${monitoring.cyclingAlertActive
            ? "Bevestigen wordt beschikbaar zodra het pendelen is gestopt."
            : "Na bevestigen verdwijnt de herinnering uit het overzicht."}</span>
        </div>
      </div>
    `;
  }

  export function renderInstallationMonitoringCompressorUnit(title, prefix) {
    if (!hasEntity(`${prefix}CompressorStarts2h`)) {
      return "";
    }
    return `
      <div class="oq-settings-monitoring-compressor-unit">
        <div>
          <p>${escapeHtml(title)}</p>
          <span>Laatste start: ${escapeHtml(formatInstallationMonitoringLastStart(`${prefix}CompressorLastStartAge`))}</span>
        </div>
        <dl>
          <div><dt>2 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts2h`))}</dd></div>
          <div><dt>6 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts6h`))}</dd></div>
          <div><dt>24 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts24h`))}</dd></div>
          <div><dt>72 uur</dt><dd>${escapeHtml(getInstallationMonitoringCount(`${prefix}CompressorStarts72h`))}</dd></div>
        </dl>
      </div>
    `;
  }

  export function renderSettingsInstallationMonitoringSection() {
    const monitoring = getInstallationMonitoringModel();
    syncInstallationMonitoringDetailsState(monitoring);
    const cicPollingEnabled = isInstallationMonitoringIntegrationEnabled("cicPollingEnabled");
    const otEnabled = isInstallationMonitoringIntegrationEnabled("otEnabled");
    const hydraulicRows = [
      hasEntity("lowflowFaultActive") ? renderInstallationMonitoringStatusRow({
        label: "Flow",
        value: isInstallationMonitoringBinaryActive("lowflowFaultActive") ? "Te lage flow gemeld" : "Geen lage-flowmelding",
        active: isInstallationMonitoringBinaryActive("lowflowFaultActive"),
      }) : "",
      hasEntity("flowMismatch") ? renderInstallationMonitoringStatusRow({
        label: "Flowvergelijking duo",
        value: isInstallationMonitoringBinaryActive("flowMismatch") ? "Afwijking tussen warmtepompen" : "Geen afwijking gemeld",
        active: isInstallationMonitoringBinaryActive("flowMismatch"),
      }) : "",
    ].filter(Boolean).join("");
    const connectionRows = [
      hasEntity("cicDataStale") ? renderInstallationMonitoringStatusRow({
        label: "CIC-data",
        value: !cicPollingEnabled
          ? "Polling uitgeschakeld"
          : isInstallationMonitoringBinaryActive("cicDataStale") ? "Verouderd" : "Geen probleem gemeld",
        active: cicPollingEnabled && isInstallationMonitoringBinaryActive("cicDataStale"),
      }) : "",
      hasEntity("otLinkProblem") ? renderInstallationMonitoringStatusRow({
        label: "OpenTherm",
        value: !otEnabled
          ? "Uitgeschakeld"
          : isInstallationMonitoringBinaryActive("otLinkProblem") ? "Verbindingsprobleem" : "Geen probleem gemeld",
        active: otEnabled && isInstallationMonitoringBinaryActive("otLinkProblem"),
      }) : "",
    ].filter(Boolean).join("");
    const hpRows = [
      hasEntity("hp1Failures") ? renderInstallationMonitoringStatusRow({
        label: "Warmtepomp 1",
        value: getInstallationMonitoringFailureText("hp1Failures"),
        active: isInstallationMonitoringFailureActive("hp1Failures"),
      }) : "",
      hasEntity("hp2Failures") ? renderInstallationMonitoringStatusRow({
        label: "Warmtepomp 2",
        value: getInstallationMonitoringFailureText("hp2Failures"),
        active: isInstallationMonitoringFailureActive("hp2Failures"),
      }) : "",
    ].filter(Boolean).join("");
    const compressorLimit2h = getEntityNumericValue("compressorStarts2hWarningLimit");
    const compressorLimit72h = getEntityNumericValue("compressorStarts72hWarningLimit");
    const compressorWarningActive = isInstallationMonitoringBinaryActive("compressorCyclingWarning2h")
      || isInstallationMonitoringBinaryActive("compressorCyclingWarning72h")
      || isInstallationMonitoringBinaryActive("alternatingCompressorStartsWarning")
      || monitoring.cyclingAlertLatched;
    const hydraulicPanel = hydraulicRows ? `
      <article class="oq-settings-monitoring-card">
        <header><p>Hydrauliek</p></header>
        <div class="oq-settings-monitoring-rows">${hydraulicRows}</div>
      </article>
    ` : "";
    const hpPanel = hpRows ? `
      <article class="oq-settings-monitoring-card">
        <header><p>Warmtepompen</p></header>
        <div class="oq-settings-monitoring-rows">${hpRows}</div>
      </article>
    ` : "";
    const connectionPanel = connectionRows ? `
      <article class="oq-settings-monitoring-card">
        <header><p>Verbindingen</p></header>
        <div class="oq-settings-monitoring-rows">${connectionRows}</div>
      </article>
    ` : "";

    return renderSettingsSection(
      "Bewaking",
      "Installatiebewaking",
      "Lokale diagnose voor compressorstarts, hydrauliek en verbindingen. Hiervoor is geen Home Assistant nodig.",
      `
        <div class="oq-settings-monitoring-summary${monitoring.active ? " is-warning" : " is-clear"}">
          <div>
            <p>Huidige status</p>
            <strong>${escapeHtml(monitoring.title)}</strong>
            <span>${escapeHtml(monitoring.copy)}</span>
          </div>
          ${renderInstallationMonitoringBadge(monitoring.active, "Aandacht nodig", "Alles rustig")}
        </div>
        <details class="oq-settings-monitoring-details"${state.installationMonitoringDetailsOpen ? " open" : ""}>
          <summary data-oq-action="toggle-installation-monitoring-details">
            <strong>Geef details weer</strong>
          </summary>
        ${monitoring.active ? `
          <div class="oq-settings-monitoring-active-list">
            ${monitoring.problems.map((problem) => `<span>${escapeHtml(problem.label)}</span>`).join("")}
          </div>
        ` : ""}
        <div class="oq-settings-monitoring-grid">
          <div class="oq-settings-monitoring-column">
          <article class="oq-settings-monitoring-card">
            <header>
              <p>Compressorstarts</p>
              ${renderInstallationMonitoringBadge(
                compressorWarningActive,
              )}
            </header>
            <span>Gemeten starts sinds de laatste controllerherstart. 6 uur en 24 uur geven extra context; de waarschuwingen zelf gelden op 2 uur en 72 uur.</span>
            ${renderInstallationMonitoringCyclingIncident(monitoring)}
            <div class="oq-settings-monitoring-compressor-list">
              ${renderInstallationMonitoringCompressorUnit("Warmtepomp 1", "hp1")}
              ${renderInstallationMonitoringCompressorUnit("Warmtepomp 2", "hp2")}
            </div>
            ${renderSettingsSliderField(
              "compressorStarts2hWarningLimit",
              "Alarmwaarde voor aantal starts per 2 uur",
              "Aantal starts per warmtepomp binnen 2 uur.",
              "oq-settings-field--compact",
              { minLabel: "1", maxLabel: "20", valueLabel: Number.isNaN(compressorLimit2h) ? "—" : `${Math.round(compressorLimit2h)} starts / 2 uur` },
            )}
            ${renderSettingsSliderField(
              "compressorStarts72hWarningLimit",
              "Alarmwaarde voor aantal starts per 72 uur",
              "Aantal starts per warmtepomp binnen 72 uur.",
              "oq-settings-field--compact",
              { minLabel: "1", maxLabel: "120", valueLabel: Number.isNaN(compressorLimit72h) ? "—" : `${Math.round(compressorLimit72h)} starts / 72 uur` },
            )}
          </article>
          ${hpPanel}
          </div>
          <div class="oq-settings-monitoring-column">
            ${hydraulicPanel}
            ${connectionPanel}
          </div>
        </div>
        </details>
      `,
    );
  }

  export function renderHpGenerationField() {
    if (!hasEntity("hpGeneration")) {
      return "";
    }

    const descriptions = {
      V1: {
        copy: "Voor Quatt V1 en Quatt V1 + V1.5 combinaties.",
        image: HP_GENERATION_IMAGE_V1,
        alt: "Quatt Hybrid V1 en V1.5",
        infoTitle: "V1",
        infoCopy: "Model: AMM4\nKenmerken: Flowmeter bij CV-ketel en vorstbeveiligingsklep buiten de buitenunit. Ook geschikt voor gemengde V1/V1.5 duo's.",
      },
      "V1.5": {
        copy: "Voor Quatt V1.5-installaties.",
        image: HP_GENERATION_IMAGE_V1,
        alt: "Quatt Hybrid V1 en V1.5",
        infoTitle: "V1.5",
        infoCopy: "Model: AMM4-V1.5\nKenmerken: Flowmeter in de buitenunit geïntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.",
      },
      V2: {
        copy: "Voor Quatt V2.",
        image: HP_GENERATION_IMAGE_V2,
        alt: "Quatt Hybrid V2",
        infoTitle: "V2",
        infoCopy: "Model: AMH6 of AMH6-2\nKenmerken: Flowmeter in de buitenunit geïntegreerd. Onder CV-ketel enkel een kleine clip-on temperatuursensor.",
      },
    };

    const entity = state.entities.hpGeneration || {};
    const currentValue = String(getEntityValue("hpGeneration") || "");
    const options = getSelectEntityOptions(entity);
    const busy = state.loadingEntities || state.busyAction === "save-hpGeneration";

    return `
      <div class="oq-settings-generation-field oq-settings-field--span-2">
        <div class="oq-settings-generation-grid">
          ${options.map((option) => {
            const description = descriptions[option] || {};
            return renderSettingsChoiceOption({
              key: "hpGeneration",
              option,
              currentValue,
              busy,
              copy: description.copy || "",
              image: description.image || "",
              imageAlt: description.alt || "",
              infoTitle: description.infoTitle || "",
              infoCopy: description.infoCopy || "",
              infoId: `hp-generation-${String(option).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
            });
          }).join("")}
        </div>
      </div>
    `;
  }

  export function renderSettingsGenerationSection() {
    const currentLabel = getInstallationLabel();
    const entity = state.entities.hpGeneration || {};
    const canEdit = hasEntity("hpGeneration") && getSelectEntityOptions(entity).length > 0;

    if (!currentLabel && !canEdit) {
      return "";
    }

    return renderSettingsSection(
      "Basis",
      "Quatt Hybrid-versie",
      "Kies hier welke Quatt Hybrid je hebt. Deze keuze bepaalt de basis van de regeling.",
      `
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige versie</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(currentLabel || "Onbekend")}</strong>
            </div>
          <button
            class="oq-helper-button oq-helper-button--ghost"
            type="button"
            data-oq-action="open-generation-modal"
            ${!canEdit || state.loadingEntities || state.busyAction === "save-hpGeneration" ? "disabled" : ""}
          >
            Aanpassen
          </button>
          </div>
        </div>
      `,
    );
  }

  export function renderBoilerCvFields(className = "oq-settings-grid oq-settings-boiler-simple-grid") {
    if (!hasEntity("boilerCvAssistEnabled")) {
      return "";
    }

    const boilerPresent = isEntityActive("boilerCvAssistEnabled");
    const boilerPowerEntityAvailable = hasEntity("boilerRatedHeatPower");
    const boilerMeta = getNumberMeta("boilerRatedHeatPower");
    const boilerValue = getInputDraftValue("boilerRatedHeatPower");
    const boilerBusy = state.loadingEntities || state.busyAction === "switch-boilerCvAssistEnabled";
    const boilerConnectionAvailable = hasEntity("boilerConnection");
    const boilerConnection = boilerConnectionAvailable
      ? String(getEntityValue("boilerConnection") || "R1")
      : "R1";
    const openthermBoilerCapability = getBoilerOpenThermCapability({
      linkEntityPresent: hasEntity("otbLinkAvailable"),
      linkEntityConfirmedMissing: Boolean(state.optionalMissingEntities?.otbLinkAvailable),
    });
    const openthermBoilerSupported = openthermBoilerCapability === BOILER_OPENTHERM_CAPABILITY.SUPPORTED;
    const openthermBoilerCapabilityKnown = openthermBoilerCapability !== BOILER_OPENTHERM_CAPABILITY.UNKNOWN;
    const boilerConnectionMismatch =
      boilerConnection === "R1" &&
      isEntityActive("otbConnectionMismatch");
    const boilerConnectionOptions = boilerConnectionAvailable
      ? getSupportedBoilerConnectionOptions(
          getSelectEntityOptions(state.entities.boilerConnection || {}),
          openthermBoilerCapability,
        )
      : [];
    const boilerConnectionControl = boilerConnectionAvailable && openthermBoilerCapabilityKnown ? `
      <label class="oq-settings-control oq-settings-control--select">
        <select class="oq-helper-select" data-oq-field="boilerConnection" ${state.loadingEntities ? "disabled" : ""}>
          ${boilerConnectionOptions.map((option) => `
            <option value="${escapeHtml(option)}" ${option === boilerConnection ? "selected" : ""}>
              ${escapeHtml(option === "OpenTherm" ? "OpenTherm (OTB)" : "Aan/uit (R1)")}
            </option>
          `).join("")}
        </select>
        <span class="oq-settings-select-caret" aria-hidden="true"></span>
      </label>
    ` : boilerConnectionAvailable ? `
      <div class="oq-settings-boiler-power-empty" role="status" aria-live="polite">
        <strong>Beschikbaarheid controleren…</strong>
        <p>De aansluitingskeuze is tijdelijk geblokkeerd.</p>
      </div>
    ` : "";
    const boilerPowerMissingHint = "Deze firmware levert nog geen bewerkbare boilervermogensinstelling.";
    const boilerPowerControl = boilerPowerEntityAvailable
      ? renderNumberInputControl({
          key: "boilerRatedHeatPower",
          value: boilerValue,
          meta: boilerMeta,
          controlClass: "oq-helper-control oq-helper-control--suffix oq-settings-boiler-power-control",
          unitMarkup: `<span class="oq-helper-unit-chip">W</span>`,
        })
      : `
        <div class="oq-settings-boiler-power-empty">
          <strong>Niet beschikbaar</strong>
          <p>${escapeHtml(boilerPowerMissingHint)}</p>
        </div>
      `;
    const boilerPowerFooter = boilerPresent && boilerPowerEntityAvailable
      ? `<p class="oq-settings-boiler-power-note">Je kunt deze waarde altijd handmatig aanpassen.</p>`
      : "";
    const boilerConnectionFooter = boilerConnection === "R1" && openthermBoilerSupported
      ? boilerConnectionMismatch
        ? `
          <div class="oq-settings-boiler-connection-note is-warning" role="alert">
            <strong>OpenTherm-ketel gevonden</strong>
            <p>OT-ketel antwoordt. Kies OpenTherm (OTB).</p>
          </div>
        `
        : `
          <p class="oq-settings-boiler-connection-note">OT-controle bij opstart actief.</p>
        `
      : "";

    return `
        <div class="${escapeHtml(className)}">
          ${renderSettingsFieldCard(
            "boilerCvAssistEnabled",
            "CV-ketel / boiler aanwezig",
            "Geef aan of OpenQuatt deze installatie als ondersteuning mag gebruiken.",
            `
              <div class="oq-settings-compact-switch-field">
                ${renderSettingsCompactSwitchControl("boilerCvAssistEnabled", "CV-ketel / boiler aanwezig", boilerPresent, boilerBusy)}
              </div>
            `,
            "oq-settings-field--compact",
          )}

          ${boilerPresent && boilerConnectionAvailable ? renderSettingsFieldCard(
            "boilerConnection",
            "Ketelaansluiting",
            !openthermBoilerCapabilityKnown
              ? "OpenQuatt controleert welke ketelaansluitingen deze hardware ondersteunt."
              : openthermBoilerSupported
              ? "Kies de aansluiting die fysiek met de ketel is verbonden. OpenQuatt gebruikt nooit beide routes tegelijk."
              : "Deze hardware ondersteunt alleen de aan/uit-aansluiting via R1.",
            boilerConnectionControl,
            "oq-settings-field--compact",
            boilerConnectionFooter,
          ) : ""}

          ${boilerPresent ? renderSettingsFieldCard(
            "boilerRatedHeatPower",
            "Ingesteld boilervermogen",
            "Vul hier het vermogen in dat OpenQuatt mag meerekenen.",
            `
              <div class="oq-settings-boiler-power-inline">
                ${boilerPowerControl}
              </div>
            `,
            boilerPresent && boilerPowerEntityAvailable ? "oq-settings-field--compact" : "oq-settings-field--compact is-disabled",
            boilerPowerFooter,
          ) : ""}
        </div>
      `;
  }

  export function renderSettingsBoilerCvSection() {
    if (!hasEntity("boilerCvAssistEnabled")) {
      return "";
    }

    const boilerPresent = isEntityActive("boilerCvAssistEnabled");
    return renderSettingsSection(
      "Basis",
      "CV-ketel of boiler",
      boilerPresent
        ? "Kies hoe de ketel is aangesloten en hoeveel effectief vermogen OpenQuatt als ondersteuning mag gebruiken."
        : "Geef aan of OpenQuatt een CV-ketel of boiler als ondersteuning mag gebruiken.",
      renderBoilerCvFields(),
    );
  }

  export function renderSettingsQuickStartSection() {
    const statusLabel = state.complete === true ? "Afgerond" : state.complete === false ? "Open" : "Laden...";
    const statusCopy = state.complete === true
      ? "Quick Start is afgerond. Je kunt de status hier altijd weer openen met een reset."
      : state.complete === false
        ? "Quick Start staat nog open. Gebruik de resetknop om opnieuw te beginnen."
        : "De status van Quick Start wordt nog geladen.";

    return renderSettingsSection(
      "Setup",
      "Quick Start",
      "Bekijk of de Quick Start nog open staat of al is afgerond.",
      `
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(statusLabel)}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="reset"
              ${state.busyAction === "reset" ? "disabled" : ""}
            >
              Reset status
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${escapeHtml(statusCopy)}</p>
        </div>
      `,
    );
  }

  export function renderSettingsDiagnosticsSection() {
    const updateStatus = getUpdateStatus();
    const dateTime = formatDiagnosticsDateTime();
    const busyRestart = state.busyAction === "restartAction";

    return renderSettingsSection(
      "Diagnostiek",
      "Systeemstatus",
      "Snelle statusinformatie voor support, controle en onderhoud.",
      `
        <div class="oq-settings-system-summary">
          ${renderSettingsSystemRow({ dataValue: "uptime", label: "Uptime", value: formatUptimeFromMeta() })}
          ${renderSettingsSystemRow({ dataValue: "ip", label: "IP-adres", value: getDeviceIpAddress() })}
          ${renderSettingsSystemRow({
            dataValue: "updates",
            label: "Updates",
            value: updateStatus,
            action: `<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-update-modal"
            >
              Openen
            </button>`,
          })}
          ${renderSettingsSystemRow({
            dataValue: "webserverLog",
            label: "Logboek",
            value: getWebServerLogStatusLabel(),
            action: `<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-webserver-log-modal"
            >
              Openen
            </button>`,
          })}
          ${renderSettingsSystemRow({
            dataValue: "debugRecording",
            label: "Debugopname",
            value: getDebugRecordingStatusLabel(),
            note: getDebugRecordingStatusCopy(),
            action: `<button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-debug-recording-modal"
            >
              Openen
            </button>`,
          })}
          ${renderSettingsSystemRow({ dataValue: "datetime", label: "Datum/tijd", value: dateTime })}
          ${renderSettingsSystemRow({ dataValue: "espTemp", label: "ESP-temp", value: getEspTemperatureLabel() })}
          ${renderSettingsSystemRow({
            dataValue: "restart",
            label: "Herstart OpenQuatt",
            value: "Opnieuw opstarten",
            note: "Dit onderbreekt de webinterface kort.",
            action: `<button
              class="oq-helper-button oq-helper-button--warning"
              type="button"
              data-oq-action="open-restart-confirm"
              ${busyRestart ? "disabled" : ""}
            >
              ${busyRestart ? "Herstarten..." : "Herstarten"}
            </button>`,
          })}
          ${hasEntity("statusLedsEnabled") ? `
            ${renderSettingsSystemRow({
              dataValue: "statusLeds",
              label: "Status-LEDs",
              value: isEntityActive("statusLedsEnabled") ? "Aan" : "Uit",
              note: "Schakelt de gele netwerk-LED en rode storings-LED op de Q-edition controller.",
              action: renderSettingsCompactSwitchControl(
                "statusLedsEnabled",
                "Status-LEDs",
                isEntityActive("statusLedsEnabled"),
                state.loadingEntities || state.busyAction === "switch-statusLedsEnabled",
              ),
            })}
          ` : ""}
        </div>
      `,
    );
  }

  export function renderSettingsCompressorSection() {
    const hpGroups = [
      renderSettingsHeatPumpLimiterCard("Warmtepomp 1", "hp1ExcludedA", "hp1ExcludedB"),
      renderSettingsHeatPumpLimiterCard("Warmtepomp 2", "hp2ExcludedA", "hp2ExcludedB"),
    ].filter(Boolean).join("");

    return renderSettingsSection(
      "Installatie",
      "Compressorinstellingen",
      "Stel hier de minimale draaitijd in en bepaal per warmtepomp welke compressorstanden je wilt overslaan.",
      `
        <div class="oq-settings-subpanel">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Draaitijd</p>
            <h4>Minimale draaitijd</h4>
            <p>Voorkomt dat de warmtepomp te kort achter elkaar start en stopt.</p>
          </div>
          <div class="oq-settings-grid">
            ${renderSettingsNumberField("minRuntime", "Minimale draaitijd", "Hoe lang een compressor minimaal moet blijven lopen voordat hij weer mag stoppen.")}
          </div>
        </div>
        <div class="oq-settings-subpanel oq-settings-subpanel--nested">
          <div class="oq-settings-subpanel-head">
            <p class="oq-helper-label">Uitsluitingen</p>
            <h4>Compressorstanden uitsluiten</h4>
            <p>Kies per warmtepomp welke compressorstanden OpenQuatt moet overslaan.</p>
          </div>
          <div class="oq-settings-hp-columns${hasEntity("hp2ExcludedA") ? "" : " oq-settings-hp-columns--single"}">
            ${hpGroups}
          </div>
        </div>
      `,
    );
  }
