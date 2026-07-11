import { hasEntity, isEntityActive } from "../core/app-shared.js";
import { ENTITY_DEFS, SETTINGS_BACKUP_KEYS, SETTINGS_BACKUP_SECTIONS } from "../core/config.js";
import { parseEnergyHistoryDateKey, parseEnergyHistoryMetadata } from "../core/energy-history-domain.js";
import { getEntityValue } from "../core/entity-store.js";
import { state } from "../core/state.js";
import { getInstallationLabel, getInstallationTopology } from "../features/device-context.js";
import { getFirmwareCurrentVersion } from "../features/firmware-update.js";
import { ENERGY_HISTORY_EXPORT_MODES, getSettingsBackupSelectionSummary, normalizeEnergyHistoryExportMode } from "../features/storage-history.js";
import { formatSettingsOptionLabel, getSettingsStatValue, renderSettingsCompactSwitchControl, renderSettingsFieldCard, renderSettingsSection, renderSettingsSwitchCopy } from "./controls.js";
import { escapeHtml } from "../core/html.js";
import { renderModalShell } from "../core/modal-shell.js";

  export function renderSettingsStorageSummaryMetric(label, value, meta = "", enabled = false) {
    return `
      <div class="oq-settings-storage-summary-metric${enabled ? " is-on" : ""}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        ${meta ? `<em>${escapeHtml(meta)}</em>` : ""}
      </div>
    `;
  }

  export function formatSettingsStoredDaysLabel(value) {
    const text = String(value || "").trim();
    const match = text.match(/^(\d+(?:[.,]\d+)?)\s+records?$/i);
    if (!match) {
      return text;
    }
    return `${match[1]} ${match[1] === "1" ? "dag" : "dagen"}`;
  }

  export function renderSettingsStorageSwitchRow(key, title, copy, enabledCopy = "", disabledCopy = "", meta = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const enabled = Boolean(getEntityValue(key));
    const busy = state.loadingEntities || state.busyAction === `switch-${key}`;
    return `
      <article class="oq-settings-storage-row" data-oq-settings-field="${escapeHtml(key)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${escapeHtml(title)}</h4>
            ${meta ? `<span>${escapeHtml(meta)}</span>` : ""}
          </div>
          <p>${escapeHtml(copy)}</p>
          ${renderSettingsSwitchCopy(key, enabled, enabledCopy, disabledCopy)}
        </div>
        ${renderSettingsCompactSwitchControl(key, title, enabled, busy)}
      </article>
    `;
  }

  export function renderSettingsStorageSelectRow(key, title, copy, meta = "") {
    if (!hasEntity(key)) {
      return "";
    }

    const entity = state.entities[key];
    const options = Array.isArray(entity?.option) ? entity.option : [];
    const value = String(getEntityValue(key) || "");
    if (!options.length) {
      return "";
    }

    return `
      <article class="oq-settings-storage-row oq-settings-storage-row--select" data-oq-settings-field="${escapeHtml(key)}">
        <div class="oq-settings-storage-row-copy">
          <div class="oq-settings-storage-row-title">
            <h4>${escapeHtml(title)}</h4>
            ${meta ? `<span>${escapeHtml(meta)}</span>` : ""}
          </div>
          <p>${escapeHtml(copy)}</p>
        </div>
        <label class="oq-settings-storage-select">
          <select class="oq-helper-select" data-oq-field="${escapeHtml(key)}" ${state.loadingEntities ? "disabled" : ""}>
            ${options.map((option) => `<option value="${escapeHtml(option)}" ${option === value ? "selected" : ""}>${escapeHtml(formatSettingsOptionLabel(option))}</option>`).join("")}
          </select>
          <span class="oq-settings-select-caret" aria-hidden="true"></span>
        </label>
      </article>
    `;
  }

  export function shouldRenderSettingsStorageActionButton(key) {
    return hasEntity(key) || (Boolean(ENTITY_DEFS[key]) && !state.optionalMissingEntities?.[key]);
  }

  export function renderSettingsStorageActionButton(key, buttonLabel, action, options = {}) {
    if (!shouldRenderSettingsStorageActionButton(key)) {
      return "";
    }

    const entityAvailable = hasEntity(key);
    const busy = entityAvailable && (state.loadingEntities || state.busyAction === key);
    const disabled = options.disabled === true || !entityAvailable;
    const buttonClass = options.buttonClass || "oq-helper-button oq-helper-button--ghost";
    return `
      <button
        class="${escapeHtml(buttonClass)}"
        type="button"
        data-oq-action="${escapeHtml(action)}"
        ${busy || disabled ? "disabled" : ""}
      >
        ${escapeHtml(busy ? (options.busyLabel || buttonLabel) : buttonLabel)}
      </button>
    `;
  }

  export function getSettingsTrendHistoryMetadata() {
    return state.trendHistoryMetadata && typeof state.trendHistoryMetadata === "object"
      ? state.trendHistoryMetadata
      : {};
  }

  export function hasSettingsTrendHistoryMetadata() {
    return Boolean(state.trendHistoryMetadataSignature);
  }

  export function hasSettingsEnergyHistoryMetadata() {
    return Boolean(state.energyHistoryRaw || state.energyHistorySignature);
  }

  export function getSettingsStorageLoadingLabel(error) {
    return error ? "Niet geladen" : "Laden...";
  }

  export function getSettingsStorageStatOrFallback(key, fallback = "—") {
    if (hasEntity(key)) {
      return getSettingsStatValue(key);
    }
    const metadataValue = getSettingsStorageMetadataStat(key);
    return metadataValue === null || metadataValue === undefined || metadataValue === "" ? fallback : metadataValue;
  }

  export function getSettingsStorageMetadataStat(key) {
    const trendMetadata = getSettingsTrendHistoryMetadata();
    if (key === "trendHistoryFlashAvailable") {
      if (!hasSettingsTrendHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.trendHistoryMetadataError);
      }
      return trendMetadata.available || "Alleen live";
    }
    if (key === "trendHistoryFlashOldest") {
      if (!hasSettingsTrendHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.trendHistoryMetadataError);
      }
      return trendMetadata.oldest || "Geen data";
    }
    if (key === "trendHistoryFlashNewest") {
      if (!hasSettingsTrendHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.trendHistoryMetadataError);
      }
      return trendMetadata.newest || "Geen data";
    }
    if (key === "trendHistoryFlashLastFlush") {
      if (!hasSettingsTrendHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.trendHistoryMetadataError);
      }
      return trendMetadata.lastFlush || "Geen data";
    }
    if (key === "trendHistoryFlashSize") {
      if (!hasSettingsTrendHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.trendHistoryMetadataError);
      }
      return formatSettingsStorageKb(trendMetadata.sizeKb);
    }
    if (key === "trendHistoryFlashWrites") {
      if (!hasSettingsTrendHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.trendHistoryMetadataError);
      }
      return formatSettingsStorageCount(trendMetadata.writes);
    }

    const energyMetadata = getSettingsEnergyHistoryMetadata();
    const energyRaw = String(state.energyHistoryRaw || "");
    const hasDayRetentionMetadata = energyRaw.includes("@day_retention|");
    if (key === "lifetimeEnergyHistoryAvailable") {
      if (!hasSettingsEnergyHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.energyHistoryError);
      }
      if (hasDayRetentionMetadata && !energyMetadata.dayPartitionAvailable) {
        return "Niet beschikbaar";
      }
      return formatSettingsStorageDayCount(energyMetadata.storedDayCount, "Geen data");
    }
    if (key === "lifetimeEnergyHistoryOldest") {
      if (!hasSettingsEnergyHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.energyHistoryError);
      }
      return formatSettingsStorageDateKey(energyMetadata.oldestDateKey);
    }
    if (key === "lifetimeEnergyHistoryNewest") {
      if (!hasSettingsEnergyHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.energyHistoryError);
      }
      return formatSettingsStorageDateKey(energyMetadata.newestDateKey);
    }
    if (key === "lifetimeEnergyHistoryLastWrite") {
      if (!hasSettingsEnergyHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.energyHistoryError);
      }
      return formatSettingsStorageTimestamp(energyMetadata.dayLastWriteTimestampS);
    }
    if (key === "lifetimeEnergyHistorySize") {
      if (!hasSettingsEnergyHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.energyHistoryError);
      }
      return formatSettingsStorageKb(energyMetadata.dayStorageKb);
    }
    if (key === "lifetimeEnergyHistoryWrites") {
      if (!hasSettingsEnergyHistoryMetadata()) {
        return getSettingsStorageLoadingLabel(state.energyHistoryError);
      }
      return formatSettingsStorageCount(energyMetadata.dayWriteCount);
    }
    return null;
  }

  export function formatSettingsStorageDayCount(value, fallback = "Geen data") {
    const count = Number(value);
    if (!Number.isFinite(count) || count <= 0) {
      return fallback;
    }
    return `${Math.round(count)} ${Math.round(count) === 1 ? "dag" : "dagen"}`;
  }

  export function formatSettingsStorageKb(value, fallback = "—") {
    const amount = Number(value);
    if (!Number.isFinite(amount) || amount <= 0) {
      return fallback;
    }
    return `${Math.round(amount)} kB`;
  }

  export function formatSettingsStorageCount(value, fallback = "0") {
    const count = Number(value);
    if (!Number.isFinite(count) || count <= 0) {
      return fallback;
    }
    return String(Math.round(count));
  }

  export function formatSettingsStorageDateKey(dateKey) {
    const parsed = parseEnergyHistoryDateKey(dateKey);
    if (!parsed) {
      return "Geen data";
    }
    return parsed.date.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit", year: "numeric" });
  }

  export function formatSettingsStorageTimestamp(seconds, fallback = "Geen data") {
    const timestamp = Number(seconds);
    if (!Number.isFinite(timestamp) || timestamp <= 0) {
      return fallback;
    }
    const date = new Date(timestamp * 1000);
    const day = date.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit" });
    const time = date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
    return `${day} ${time}`;
  }

  export function getSettingsEnergyHistoryMetadata() {
    return parseEnergyHistoryMetadata(state.energyHistoryRaw);
  }

  export function renderSettingsStorageTechnicalRow(row) {
    const items = Array.isArray(row.items) ? row.items : [];
    return `
      <article class="oq-settings-storage-technical-row">
        <div class="oq-settings-storage-technical-row-head">
          <span>${escapeHtml(row.meta || "")}</span>
          <strong>${escapeHtml(row.title)}</strong>
          ${row.note ? `<em>${escapeHtml(row.note)}</em>` : ""}
        </div>
        <div class="oq-settings-storage-technical-metrics">
          ${items.map((item) => `
            <div>
              <span>${escapeHtml(item.label)}</span>
              <strong>${escapeHtml(item.value)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }

  export function renderSettingsStorageTechnicalDetails(rows) {
    const visibleRows = rows.filter(Boolean);
    if (!visibleRows.length) {
      return "";
    }

    return `
      <details class="oq-settings-storage-technical"${state.settingsStorageDetailsOpen ? " open" : ""}>
        <summary data-oq-action="toggle-storage-technical-details">
          <span>
            <strong>Opslagdetails</strong>
            <em>Diagnose, dagtotalen en uurdetail</em>
          </span>
          <span class="oq-settings-storage-technical-summary">${escapeHtml(visibleRows.map((row) => `${row.shortLabel}: ${row.primary}`).join(" · "))}</span>
        </summary>
        <div class="oq-settings-storage-technical-list">
          ${visibleRows.map(renderSettingsStorageTechnicalRow).join("")}
        </div>
      </details>
    `;
  }

  export function renderSettingsTrendSection() {
    if (!hasEntity("trendHistoryEnabled") && !hasEntity("lifetimeEnergyHistoryEnabled")) {
      return "";
    }

    const trendHistoryEnabled = isEntityActive("trendHistoryEnabled");
    const trendHistoryFlashEnabled = trendHistoryEnabled && isEntityActive("trendHistoryFlashEnabled");
    const lifetimeEnergyHistoryAvailable = hasEntity("lifetimeEnergyHistoryEnabled");
    const lifetimeEnergyHistoryEnabled = lifetimeEnergyHistoryAvailable && isEntityActive("lifetimeEnergyHistoryEnabled");
    const trendAvailableValue = trendHistoryFlashEnabled
      ? getSettingsStorageStatOrFallback("trendHistoryFlashAvailable", "Alleen live")
      : "Alleen live";
    const lifetimeAvailableValue = lifetimeEnergyHistoryAvailable
      ? formatSettingsStoredDaysLabel(getSettingsStorageStatOrFallback("lifetimeEnergyHistoryAvailable", "Geen data"))
      : "Geen data";
    return renderSettingsSection(
      "Diagnose",
      "Gegevens bewaren",
      "Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen.",
      `
        <article class="oq-settings-storage-summary">
          <div class="oq-settings-storage-summary-copy">
            <h3>Wat wordt bewaard?</h3>
            <p>Kies welke gegevens tijdelijk beschikbaar blijven en wat in permanent geheugen wordt bewaard.</p>
          </div>
          <div class="oq-settings-storage-summary-metrics" aria-label="Opslagstatus">
            ${hasEntity("trendHistoryEnabled") ? renderSettingsStorageSummaryMetric("Live diagnose", trendHistoryEnabled ? "Aan" : "Uit", "Live", trendHistoryEnabled) : ""}
            ${hasEntity("trendHistoryFlashEnabled") ? renderSettingsStorageSummaryMetric("Diagnosehistorie", trendAvailableValue, trendHistoryFlashEnabled ? "Permanent geheugen" : "Uit", trendHistoryFlashEnabled) : ""}
            ${lifetimeEnergyHistoryAvailable ? renderSettingsStorageSummaryMetric("Energiehistorie", lifetimeAvailableValue, lifetimeEnergyHistoryEnabled ? "Permanent geheugen" : "Uit", lifetimeEnergyHistoryEnabled) : ""}
          </div>
          <button class="oq-helper-button oq-helper-button--ghost oq-settings-storage-summary-action" type="button" data-oq-action="open-history-storage-modal">
            Beheren
          </button>
        </article>
      `,
    );
  }

  export function renderSettingsEnergyHistoryImportPanel() {
    if (!hasEntity("lifetimeEnergyHistoryEnabled")) {
      return "";
    }

    const dailyCount = state.energyHistoryImportRecords.length;
    const hourDayCount = new Set(state.energyHistoryImportHourRecords.map((record) => record.dateKey)).size;
    const recordParts = [];
    if (dailyCount > 0) {
      recordParts.push(`${dailyCount} dagrecords`);
    }
    if (hourDayCount > 0) {
      recordParts.push(`${hourDayCount} uurdagen`);
    }
    if (state.energyHistoryImportRange) {
      recordParts.push(state.energyHistoryImportRange);
    }
    if (state.energyHistoryImportSource) {
      recordParts.push(state.energyHistoryImportSource);
    }
    if (state.energyHistoryImportInvalidCount > 0) {
      recordParts.push(`${state.energyHistoryImportInvalidCount} regels niet gebruikt`);
    }

    const hasFile = Boolean(state.energyHistoryImportFileName);
    const hasRecords = dailyCount > 0 || hourDayCount > 0;
    const progress = Number(state.energyHistoryImportProgressPercent || 0);
    const importLabel = state.energyHistoryImportBusy
      ? `Importeren...${progress > 0 ? ` (${progress}%)` : ""}`
      : "Importeren";

    return `
      <div class="oq-settings-storage-import">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie importeren</h4>
            <p>Vul ontbrekende dagtotalen en uurdetail aan vanuit een OpenQuatt- of Quatt-exportbestand.</p>
          </div>
          ${!hasFile ? `
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="select-energy-history-import-file">
              Bestand kiezen
            </button>
          ` : ""}
        </div>
        ${hasFile ? `
          <div class="oq-settings-storage-import-card">
            <div class="oq-settings-storage-import-file">
              <strong>${escapeHtml(state.energyHistoryImportFileName)}</strong>
              ${recordParts.length ? `<p>${escapeHtml(recordParts.join(" · "))}</p>` : ""}
              ${state.energyHistoryImportNotice ? `<p class="oq-settings-storage-import-notice">${escapeHtml(state.energyHistoryImportNotice)}</p>` : ""}
              ${state.energyHistoryImportError ? `<p class="oq-settings-storage-import-error">${escapeHtml(state.energyHistoryImportError)}</p>` : ""}
            </div>
            <div class="oq-settings-storage-import-actions">
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="clear-energy-history-import-file" ${state.energyHistoryImportBusy ? "disabled" : ""}>
                Wissen
              </button>
              <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="import-energy-history-file" ${state.energyHistoryImportBusy || !hasRecords ? "disabled" : ""}>
                ${escapeHtml(importLabel)}
              </button>
            </div>
          </div>
        ` : `
          ${state.energyHistoryImportNotice ? `<p class="oq-settings-storage-import-notice">${escapeHtml(state.energyHistoryImportNotice)}</p>` : ""}
          ${state.energyHistoryImportError ? `<p class="oq-settings-storage-import-error">${escapeHtml(state.energyHistoryImportError)}</p>` : ""}
        `}
      </div>
    `;
  }

  export function renderSettingsEnergyHistoryExportPanel() {
    if (!hasEntity("lifetimeEnergyHistoryEnabled")) {
      return "";
    }

    const mode = normalizeEnergyHistoryExportMode(state.energyHistoryExportMode);
    const options = ENERGY_HISTORY_EXPORT_MODES.map((option) => `
      <option value="${escapeHtml(option.id)}" ${option.id === mode ? "selected" : ""}>
        ${escapeHtml(option.label)}
      </option>
    `).join("");
    const exportLabel = state.energyHistoryExportBusy ? "Exporteren..." : "Exporteren";

    return `
      <div class="oq-settings-storage-import oq-settings-storage-export">
        <div class="oq-settings-storage-import-head">
          <div>
            <h4>Historie exporteren</h4>
            <p>Download bewaarde energiegegevens om ze later op een andere OpenQuatt te importeren.</p>
          </div>
          <div class="oq-settings-storage-export-controls">
            <select class="oq-helper-select oq-settings-storage-export-select" data-oq-energy-history-export-mode="true" ${state.energyHistoryExportBusy ? "disabled" : ""}>
              ${options}
            </select>
            <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="export-energy-history" ${state.energyHistoryExportBusy ? "disabled" : ""}>
              ${escapeHtml(exportLabel)}
            </button>
          </div>
        </div>
        ${state.energyHistoryExportNotice ? `<p class="oq-settings-storage-import-notice">${escapeHtml(state.energyHistoryExportNotice)}</p>` : ""}
        ${state.energyHistoryExportError ? `<p class="oq-settings-storage-import-error">${escapeHtml(state.energyHistoryExportError)}</p>` : ""}
      </div>
    `;
  }

  export function renderSettingsHistoryStorageModal() {
    const trendHistoryEnabled = hasEntity("trendHistoryEnabled") && isEntityActive("trendHistoryEnabled");
    const trendHistoryFlashEnabled = trendHistoryEnabled && hasEntity("trendHistoryFlashEnabled") && isEntityActive("trendHistoryFlashEnabled");
    const lifetimeEnergyHistoryAvailable = hasEntity("lifetimeEnergyHistoryEnabled");
    const lifetimeEnergyHistoryEnabled = lifetimeEnergyHistoryAvailable && isEntityActive("lifetimeEnergyHistoryEnabled");
    const lifetimeAvailableLabel = lifetimeEnergyHistoryAvailable
      ? getSettingsStorageStatOrFallback("lifetimeEnergyHistoryAvailable", "Geen data")
      : "Geen data";
    const canClearLifetime = hasEntity("lifetimeEnergyHistoryClear")
      && lifetimeAvailableLabel !== "Geen data"
      && lifetimeAvailableLabel !== "—";
    const lifetimeAvailableDaysLabel = formatSettingsStoredDaysLabel(lifetimeAvailableLabel);
    const canFlushTrend = trendHistoryEnabled && hasEntity("trendHistoryFlush");
    const canCaptureLifetime = hasEntity("lifetimeEnergyHistoryCapture");
    const energyMetadata = getSettingsEnergyHistoryMetadata();
    const hasHourMetadata = String(state.energyHistoryRaw || "").includes("@hour_retention|");
    const hourFlashUnavailable = hasHourMetadata && !energyMetadata.hourPartitionAvailable;
    const hourStoredLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Alleen live"
        : formatSettingsStorageDayCount(energyMetadata.hourStoredDayCount, "Geen uurdata")
      : "Laden...";
    const hourStorageLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Niet beschikbaar"
        : formatSettingsStorageKb(energyMetadata.hourStorageKb)
      : "Laden...";
    const hourWriteLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Niet beschikbaar"
        : formatSettingsStorageCount(energyMetadata.hourWriteCount)
      : "Laden...";
    const hourLastWriteLabel = hasHourMetadata
      ? hourFlashUnavailable
        ? "Niet beschikbaar"
        : formatSettingsStorageTimestamp(energyMetadata.hourLastWriteTimestampS)
      : "Laden...";
    const hourOldestLabel = formatSettingsStorageDateKey(energyMetadata.hourOldestDateKey);
    const hourNewestLabel = formatSettingsStorageDateKey(energyMetadata.hourNewestDateKey);
    const hourNote = hasHourMetadata
      ? energyMetadata.hourPartitionAvailable
        ? `${hourOldestLabel} t/m ${hourNewestLabel}`
        : "Live beschikbaar; bewaren in Flash vraagt een nieuwere Flash-indeling."
      : "Uurdetailstatus wordt opgehaald.";
    const storageDetails = [
      {
        title: "Diagnosegeschiedenis",
        meta: "Diagnose",
        shortLabel: "Diagnose",
        primary: getSettingsStorageStatOrFallback("trendHistoryFlashAvailable", "Alleen live"),
        note: `Laatste meting: ${getSettingsStorageStatOrFallback("trendHistoryFlashNewest", "Geen data")}`,
        items: [
          { label: "Bewaarperiode", value: getSettingsStorageStatOrFallback("trendHistoryFlashAvailable", "Alleen live") },
          { label: "Opslagruimte", value: getSettingsStorageStatOrFallback("trendHistoryFlashSize") },
          { label: "Opslagacties", value: getSettingsStorageStatOrFallback("trendHistoryFlashWrites", "0") },
          { label: "Laatst opgeslagen", value: getSettingsStorageStatOrFallback("trendHistoryFlashLastFlush", "Geen data") },
        ],
      },
      {
        title: "Dagtotalen",
        meta: "Resultaten",
        shortLabel: "Dag",
        primary: lifetimeAvailableDaysLabel,
        note: `${getSettingsStorageStatOrFallback("lifetimeEnergyHistoryOldest", "Geen data")} t/m ${getSettingsStorageStatOrFallback("lifetimeEnergyHistoryNewest", "Geen data")}`,
        items: [
          { label: "Dagen bewaard", value: lifetimeAvailableDaysLabel },
          { label: "Opslagruimte", value: getSettingsStorageStatOrFallback("lifetimeEnergyHistorySize") },
          { label: "Opslagacties", value: getSettingsStorageStatOrFallback("lifetimeEnergyHistoryWrites", "0") },
          { label: "Laatst opgeslagen", value: getSettingsStorageStatOrFallback("lifetimeEnergyHistoryLastWrite", "Geen data") },
        ],
      },
      hasEntity("lifetimeEnergyHourRetention") ? {
        title: "Uurdetail",
        meta: "Resultaten",
        shortLabel: "Uur",
        primary: hourStoredLabel,
        note: hourNote,
        items: [
          { label: "Dagen bewaard", value: hourStoredLabel },
          { label: "Opslagruimte", value: hourStorageLabel },
          { label: "Opslagacties", value: hourWriteLabel },
          { label: "Laatst opgeslagen", value: hourLastWriteLabel },
        ],
      } : null,
    ];

    return renderModalShell({
      id: "system",
      titleId: "oq-history-storage-modal-title",
      kicker: "Gegevens",
      title: "Gegevens bewaren",
      copy: "Bepaal welke gegevens OpenQuatt bewaart voor grafieken, resultaten en hulp bij problemen. Dit scherm verandert niets aan de werking of aansturing van je warmtepomp.",
      className: "oq-helper-modal--wide oq-helper-modal--scrollable oq-settings-storage-modal",
      sectionAttributes: "data-oq-history-storage-scroller",
      closeAction: "close-system-modal",
      closeLabel: "Sluit gegevens bewaren",
      body: `
          <div class="oq-settings-storage-domain-grid">
            <section class="oq-settings-storage-domain oq-settings-storage-domain--trend">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Diagnose</p>
                <h3>Diagnosegegevens</h3>
                <p>Technische metingen zoals temperatuur, doorstroming en vermogen. Deze gegevens zijn vooral bedoeld voor diagnosegrafieken en hulp bij problemen.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${renderSettingsStorageSwitchRow(
                  "trendHistoryEnabled",
                  "Recente diagnosegegevens",
                  "Bewaar de laatste meetpunten zolang de controller online is.",
                  "Na een herstart of update zijn deze tijdelijke gegevens niet meer beschikbaar.",
                  "Nieuwe tijdelijke diagnosegegevens worden niet bijgehouden.",
                  "Tijdelijk"
                )}
                ${renderSettingsStorageSwitchRow(
                  "trendHistoryFlashEnabled",
                  "Diagnosegeschiedenis bewaren",
                  "Bewaar recente diagnosegegevens ook na een herstart of update.",
                  "OpenQuatt slaat deze gegevens ongeveer elk uur op.",
                  "Alleen recente diagnosegegevens; bestaande geschiedenis blijft staan.",
                  "Permanent geheugen"
                )}
                ${canFlushTrend ? `
                  <div class="oq-settings-storage-inline-action">
                    <div>
                      <h4>Diagnose nu opslaan</h4>
                      <p>Sla de huidige diagnosegegevens direct op, bijvoorbeeld vóór een update of herstart.</p>
                    </div>
                    ${renderSettingsStorageActionButton(
                      "trendHistoryFlush",
                      "Nu opslaan",
                      "flush-trend-history",
                      {
                        disabled: !trendHistoryFlashEnabled,
                        busyLabel: "Opslaan...",
                      }
                    )}
                  </div>
                ` : ""}
              </div>
            </section>
            <section class="oq-settings-storage-domain oq-settings-storage-domain--energy">
              <div class="oq-settings-storage-domain-head">
                <p class="oq-helper-label">Resultaten</p>
                <h3>Energiehistorie</h3>
                <p>Dagtotalen voor de Resultatenpagina, zoals opbrengst, verbruik, rendement en besparing. Hiermee kun je prestaties over langere tijd terugkijken.</p>
              </div>
              <div class="oq-settings-storage-domain-rows">
                ${renderSettingsStorageSwitchRow(
                  "lifetimeEnergyHistoryEnabled",
                  "Dagtotalen bewaren",
                  "Bewaar elke dag een samenvatting van je energiegegevens.",
                  "Zo blijven je resultaten ook na een herstart of update beschikbaar. OpenQuatt slaat dit op aan het einde van de dag en bij een normale afsluiting.",
                  "Nieuwe dagtotalen worden niet bewaard; bestaande historie blijft staan.",
                  "Permanent geheugen"
                )}
                ${renderSettingsStorageSelectRow(
                  "lifetimeEnergyHourRetention",
                  "Uurdetail bewaren",
                  "Kies hoelang OpenQuatt detail per uur mag bewaren voor de daggrafiek.",
                  "Geavanceerd"
                )}
                ${canCaptureLifetime ? `
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--split">
                    <div>
                      <h4>Vandaag alvast opslaan</h4>
                      <p>Sla de gegevens van vandaag nu op, bijvoorbeeld vóór een update of herstart.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${renderSettingsStorageActionButton(
                        "lifetimeEnergyHistoryCapture",
                        "Vandaag opslaan",
                        "save-lifetime-energy-history",
                        {
                          disabled: !lifetimeEnergyHistoryEnabled,
                          busyLabel: "Opslaan...",
                        }
                      )}
                    </div>
                  </div>
                ` : ""}
                ${renderSettingsEnergyHistoryExportPanel()}
                ${renderSettingsEnergyHistoryImportPanel()}
                ${hasEntity("lifetimeEnergyHistoryClear") ? `
                  <div class="oq-settings-storage-inline-action oq-settings-storage-inline-action--danger">
                    <div>
                      <h4>Energiehistorie wissen</h4>
                      <p>Verwijder alle bewaarde dagtotalen. Je begint daarna opnieuw met het opbouwen van je energiehistorie.</p>
                    </div>
                    <div class="oq-settings-storage-action-stack">
                      ${renderSettingsStorageActionButton(
                        "lifetimeEnergyHistoryClear",
                        "Historie wissen",
                        "clear-lifetime-energy-history",
                        {
                          disabled: !canClearLifetime,
                          buttonClass: "oq-helper-button oq-helper-button--warning",
                          busyLabel: "Wissen...",
                        }
                      )}
                    </div>
                  </div>
                ` : ""}
              </div>
            </section>
          </div>
          ${renderSettingsStorageTechnicalDetails(storageDetails)}
          <p class="oq-settings-storage-footnote"><strong>Goed om te weten:</strong> OpenQuatt schrijft deze gegevens niet continu weg, maar alleen op vaste momenten. Zo blijft duidelijk wat er wordt bewaard en hoeveel geheugen daarvoor wordt gebruikt.</p>`,
      actions: '<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>',
    });
  }

  export function renderSettingsBackupSection() {
    const busy = state.settingsBackupBusy;
    const totalFields = SETTINGS_BACKUP_KEYS.length;
    const sectionCount = SETTINGS_BACKUP_SECTIONS.length;

    return renderSettingsSection(
      "Beheer",
      "Backup en restore",
      "Sla een JSON-backup op van de instellingen die OpenQuatt in deze web-app beheert, en zet die later weer terug na een factory-bin update.",
      `
        <div class="oq-settings-backup-shell">
          <div class="oq-settings-backup-summary">
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Instellingen</span>
              <strong class="oq-settings-backup-stat-value">${escapeHtml(String(totalFields))}</strong>
            </div>
            <div class="oq-settings-backup-stat">
              <span class="oq-settings-backup-stat-label">Secties</span>
              <strong class="oq-settings-backup-stat-value">${escapeHtml(String(sectionCount))}</strong>
            </div>
          </div>
          <div class="oq-settings-backup-actions">
            <button
              class="oq-helper-button oq-helper-button--primary"
              type="button"
              data-oq-action="download-settings-backup"
              ${busy ? "disabled" : ""}
            >
              ${busy ? "Bezig..." : "Backup downloaden"}
            </button>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-settings-backup-import"
              ${busy ? "disabled" : ""}
            >
              Backup herstellen
            </button>
          </div>
          <p class="oq-settings-action-note">Ontbrekende velden houden hun firmware-default. Onbekende velden uit een backup worden overgeslagen.</p>
          ${state.settingsBackupError ? `<p class="oq-settings-backup-error">${escapeHtml(state.settingsBackupError)}</p>` : ""}
        </div>
      `,
    );
  }

  export function renderSettingsBackupImportModal() {
    const busy = state.settingsBackupBusy;
    return renderModalShell({
      id: "system",
      titleId: "oq-backup-import-modal-title",
      kicker: "Beheer",
      title: "Backup herstellen",
      copy: "Kies een JSON-backup om de instellingen te vergelijken en daarna gericht terug te zetten.",
      className: "oq-helper-modal--wide",
      closeAction: "close-system-modal",
      closeLabel: "Sluit backup import popup",
      body: `
          <div class="oq-helper-modal-row">
            <span class="oq-helper-modal-label">Backupbestand</span>
            <input
              class="oq-settings-backup-input oq-settings-backup-import-input"
              type="file"
              accept=".json,application/json"
              data-oq-backup-file-input="true"
              ${busy ? "disabled" : ""}
            >
            <span class="oq-helper-modal-subvalue">Na selectie openen we automatisch het vergelijkingsoverzicht.</span>
          </div>
          ${state.settingsBackupError ? `<p class="oq-settings-backup-error">${escapeHtml(state.settingsBackupError)}</p>` : ""}`,
      actions: `<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${busy ? "disabled" : ""}>Annuleren</button>`,
    });
  }

  export function renderSettingsBackupRestoreModal() {
    const draft = state.settingsBackupDraft;
    if (!draft) {
      return "";
    }

    const summary = draft.summary || getSettingsBackupSelectionSummary(draft);
    const sourceInstallation = String(draft.source?.installation || draft.source?.device || "Onbekend");
    const currentInstallation = getInstallationLabel();
    const sourceVersion = String(draft.source?.firmware_version || "Onbekend");
    const sourceChannel = String(draft.source?.firmware_channel || "").trim() || "Onbekend";
    const sourceTopology = String(draft.source?.topology || "").trim() || "Onbekend";
    const currentVersion = getFirmwareCurrentVersion();
    const currentTopology = typeof getInstallationTopology === "function"
      ? getInstallationTopology()
      : "";
    const topologyMismatch = sourceTopology !== "Onbekend" && currentTopology && sourceTopology !== currentTopology;
    const installationMismatch = sourceInstallation !== "Onbekend" && sourceInstallation !== currentInstallation;
    const warningText = topologyMismatch || installationMismatch
      ? "De backup lijkt van een andere installatie te komen. Je kunt nog steeds doorzetten, maar controleer de secties even goed."
      : summary.requiredMissing
        ? "Ontbrekende velden houden hun firmware-default."
        : "Velden zonder waarde worden overgeslagen.";

    return renderModalShell({
      id: "system",
      titleId: "oq-backup-modal-title",
      kicker: "Beheer",
      title: "Backup herstellen",
      copy: "Deze backup zet alleen de instellingen terug die OpenQuatt in de web-app beheert. Klap een sectie open om backup- en huidige waarden naast elkaar te vergelijken.",
      className: "oq-helper-modal--wide oq-helper-modal--scrollable",
      closeAction: "close-system-modal",
      closeLabel: "Sluit backup-popup",
      body: `
          <div class="oq-helper-modal-grid oq-settings-backup-modal-grid">
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backup van</span>
              <strong class="oq-helper-modal-value">${escapeHtml(sourceInstallation)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${escapeHtml(sourceTopology)} · Firmware: ${escapeHtml(sourceVersion)}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Huidige installatie</span>
              <strong class="oq-helper-modal-value">${escapeHtml(currentInstallation)}</strong>
              <span class="oq-helper-modal-subvalue">Topo: ${escapeHtml(currentTopology)} · Firmware: ${escapeHtml(currentVersion || "Onbekend")}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupkanaal</span>
              <strong class="oq-helper-modal-value">${escapeHtml(sourceChannel)}</strong>
              <span class="oq-helper-modal-subvalue">Schema v${escapeHtml(String(draft.schema_version || 1))}</span>
            </div>
            <div class="oq-helper-modal-row">
              <span class="oq-helper-modal-label">Backupinstellingen</span>
              <strong class="oq-helper-modal-value">${escapeHtml(`${summary.total} instellingen`)}</strong>
              <span class="oq-helper-modal-subvalue">${escapeHtml(summary.differenceCount ? `${summary.differenceCount} ${summary.differenceCount === 1 ? "verschil" : "verschillen"} · ${summary.currentPresent} op huidige installatie · ${summary.unknown} onbekend` : `Alles komt overeen · ${summary.currentPresent} op huidige installatie · ${summary.unknown} onbekend`)}</span>
            </div>
          </div>
          <div class="oq-settings-backup-modal-sections">
            ${summary.sectionSummaries.map((section) => `
              <details class="oq-settings-backup-modal-section">
                <summary class="oq-settings-backup-modal-section-head">
                  <span class="oq-settings-backup-modal-section-head-copy">
                    <strong>${escapeHtml(section.label)}</strong>
                    <em>${escapeHtml(`${section.total} ${section.total === 1 ? "instelling" : "instellingen"} · ${section.differenceCount ? `${section.differenceCount} ${section.differenceCount === 1 ? "verschil" : "verschillen"}` : "Alles gelijk"}`)}</em>
                  </span>
                </summary>
                <div class="oq-settings-backup-modal-section-body">
                  <p>${escapeHtml(section.differenceCount ? `${section.differenceCount} instelling${section.differenceCount === 1 ? "" : "en"} wijkt af of ontbreekt.` : "Alle instellingen komen overeen.")}</p>
                  <div class="oq-settings-backup-compare-list">
                    ${section.rows.map((row) => `
                      <div class="oq-settings-backup-compare oq-settings-backup-compare--${escapeHtml(row.status)}">
                        <div class="oq-settings-backup-compare-head">
                          <strong>${escapeHtml(row.label)}</strong>
                          <span>${escapeHtml(row.statusLabel)}</span>
                        </div>
                        <div class="oq-settings-backup-compare-values">
                          <div class="oq-settings-backup-compare-value" data-change="${escapeHtml(row.status)}">
                            <span>Backup</span>
                            <strong>${escapeHtml(row.backupDisplay)}</strong>
                          </div>
                          <div class="oq-settings-backup-compare-value" data-change="${escapeHtml(row.status)}">
                            <span>Nu</span>
                            <strong>${escapeHtml(row.currentDisplay)}</strong>
                          </div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </details>
            `).join("")}
          </div>
          <p class="oq-settings-action-note${summary.unknown || summary.requiredMissing || installationMismatch ? " oq-settings-action-note--warning" : ""}">${escapeHtml(warningText)}</p>
          ${state.settingsBackupError ? `<p class="oq-settings-backup-error">${escapeHtml(state.settingsBackupError)}</p>` : ""}`,
      actions: `
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${state.settingsBackupBusy ? "disabled" : ""}>Annuleren</button>
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="confirm-settings-backup-restore" ${state.settingsBackupBusy ? "disabled" : ""}>${state.settingsBackupBusy ? "Herstellen..." : "Herstellen"}</button>
      `,
    });
  }
