import { getSetupCompleteState, hasEntity, isEntityActive, isTrendHistoryEnabled } from "../core/app-shared.js";
import { invokeActionMap } from "../core/action-router.js";
import { downloadBlobFile, downloadJsonFile } from "../core/browser-utils.js";
import { ENTITY_DEFS, FAST_VIEW_ENTITY_REFRESH_CONCURRENCY, SETTINGS_BACKUP_KEY_SET, SETTINGS_BACKUP_KEYS, SETTINGS_BACKUP_SCHEMA_VERSION, SETTINGS_BACKUP_SECTIONS, TREND_HISTORY_REFRESH_INTERVAL_MS } from "../core/config.js";
import { buildEntityPath } from "../core/domain-helpers.js";
import { getEnergyHistoryRequestQuery } from "../core/energy-history-query.js";
import { getEnergyHistoryDateKeyFromDate, parseEnergyHistoryDateKey } from "../core/energy-history-domain.js";
import { updateEnergyHistoryState } from "../core/feature-state.js";
import { setEntityBackupValue } from "../core/entity-backup.js";
import { formatValue, getEntityValue, normalizeDateTimeValue, normalizeTimeValue, parseLooseNumber } from "../core/entity-store.js";
import { refreshEntities, syncEntities } from "../core/entity-sync.js";
import { DEFAULT_TREND_WINDOW_HOURS, state } from "../core/state.js";
import { ENERGY_HISTORY_VIEW_KEYS, getSettingsStorageRefreshKeys, SETTINGS_STORAGE_KEYS, TREND_HISTORY_VIEW_KEYS } from "../core/storage-history-keys.js";
import { setStorageHistoryControls } from "../core/storage-history-controls.js";
import { isSystemSettingsGroupActive } from "../core/surface-state.js";
import { normalizeTrendWindowHours, setTrendWindowHours } from "../core/trend-window.js";
import { getBasePath } from "../core/url-path.js";
import { getFirmwareDeviceLabel, getInstallationLabel, getInstallationTopology } from "./device-context.js";
import { getFirmwareCurrentVersion } from "./firmware-update.js";
import { render } from "../core/render-scheduler.js";

  export function energyHistoryImportRecordHasHour(row) {
    return Object.prototype.hasOwnProperty.call(row, "hour") ||
      Object.prototype.hasOwnProperty.call(row, "hour_of_day") ||
      Object.prototype.hasOwnProperty.call(row, "hourOfDay");
  }

  export function energyHistoryImportRowsHaveTimestamp(rows) {
    return rows.some((row) => getEnergyHistoryImportTimestampValue(row) !== undefined);
  }

  export function energyHistoryImportRowsHaveMultipleRowsPerDay(rows) {
    const seenDates = new Set();
    for (const row of rows) {
      const dateKey = parseEnergyHistoryImportDateKey(
        row.date_key ?? row.dateKey ?? row.date ?? row.from ?? getEnergyHistoryImportTimestampValue(row),
      );
      if (!dateKey) {
        continue;
      }
      if (seenDates.has(dateKey)) {
        return true;
      }
      seenDates.add(dateKey);
    }
    return false;
  }

  export function energyHistoryImportRowsLookHourly(rows) {
    return rows.some(energyHistoryImportRecordHasHour) ||
      (energyHistoryImportRowsHaveTimestamp(rows) && energyHistoryImportRowsHaveMultipleRowsPerDay(rows));
  }

  export { ENERGY_HISTORY_VIEW_KEYS, getSettingsStorageRefreshKeys, SETTINGS_STORAGE_KEYS, TREND_HISTORY_VIEW_KEYS };

  export function getEmptyTrendHistoryMetadata() {
    return {
      available: "Alleen live",
      oldest: "Geen data",
      newest: "Geen data",
      lastFlush: "Geen data",
      sizeKb: 0,
      writes: 0,
      nowMs: Number.NaN,
    };
  }

  export function parseTrendHistoryMetadata(raw) {
    const metadata = getEmptyTrendHistoryMetadata();
    String(raw || "").split(/\r?\n/).forEach((line) => {
      if (line.startsWith("@now|")) {
        metadata.nowMs = Number(line.slice(5));
        return;
      }
      if (!line.startsWith("@flash|")) {
        return;
      }
      const parts = line.split("|");
      metadata.available = parts[1] || metadata.available;
      metadata.oldest = parts[2] || metadata.oldest;
      metadata.newest = parts[3] || metadata.newest;
      metadata.lastFlush = parts[4] || metadata.lastFlush;
      metadata.sizeKb = Number(parts[5]) || 0;
      metadata.writes = Number(parts[6]) || 0;
    });
    return metadata;
  }

  export async function refreshTrendHistoryMetadata(options = {}) {
    if (!hasEntity("trendHistoryEnabled") && !isDevPreviewEnvironmentForFetches()) {
      const changed = Boolean(state.trendHistoryMetadataSignature || state.trendHistoryMetadataError);
      state.trendHistoryMetadata = {};
      state.trendHistoryMetadataError = "";
      state.trendHistoryMetadataSignature = "";
      state.trendHistoryMetadataLastFetchAt = 0;
      return changed;
    }

    const force = options.force === true;
    const now = Date.now();
    if (!force && state.trendHistoryMetadataFetchPromise) {
      return state.trendHistoryMetadataFetchPromise;
    }
    if (!force && (state.trendHistoryMetadataSignature || state.trendHistoryMetadataError) &&
        (now - Number(state.trendHistoryMetadataLastFetchAt || 0)) < TREND_HISTORY_REFRESH_INTERVAL_MS) {
      return false;
    }

    state.trendHistoryMetadataFetchPromise = (async () => {
      const response = await fetch(`${getBasePath()}/trends/history?meta=1`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const raw = await response.text();
      const metadata = parseTrendHistoryMetadata(raw);
      const signature = `${raw.length}|${raw.slice(0, 120)}|${raw.slice(-120)}`;
      const changed = signature !== state.trendHistoryMetadataSignature || state.trendHistoryMetadataError !== "";
      state.trendHistoryMetadata = metadata;
      state.trendHistoryMetadataError = "";
      state.trendHistoryMetadataSignature = signature;
      state.trendHistoryMetadataLastFetchAt = Date.now();
      return changed;
    })();

    try {
      return await state.trendHistoryMetadataFetchPromise;
    } catch (error) {
      const nextError = `Trendhistorie metadata kon niet worden geladen. ${error.message}`;
      const changed = state.trendHistoryMetadataError !== nextError;
      state.trendHistoryMetadata = {};
      state.trendHistoryMetadataError = nextError;
      state.trendHistoryMetadataSignature = "";
      state.trendHistoryMetadataLastFetchAt = Date.now();
      return changed;
    } finally {
      state.trendHistoryMetadataFetchPromise = null;
    }
  }

  export async function refreshSettingsStorageState(options = {}) {
    await refreshEntities(getSettingsStorageRefreshKeys(), "all", {
      concurrency: FAST_VIEW_ENTITY_REFRESH_CONCURRENCY,
      forceMissing: options.forceMissing === true,
    });
    await Promise.all([
      refreshTrendHistoryMetadata({ force: options.forceTrendHistory === true }),
      refreshEnergyHistoryData({ force: options.forceEnergyHistory === true, metaOnly: true }),
    ]);
  }

  export function refreshSettingsStorageStateSoon(delays = [250, 1000, 2500], options = {}) {
    delays.forEach((delayMs) => {
      window.setTimeout(() => {
        if (state.nativeOpen || state.appView !== "settings") {
          return;
        }
        void refreshSettingsStorageState({
          forceMissing: delayMs === 0,
          forceTrendHistory: options.forceTrendHistory === true,
          forceEnergyHistory: options.forceEnergyHistory === true,
        }).finally(() => {
          if (state.appView === "settings" && state.mounted && !state.nativeOpen) {
            render();
          }
        });
      }, delayMs);
    });
  }

  export const ENERGY_HISTORY_IMPORT_SCHEMA_LINE = "@schema|openquatt.energy_history_import.v1";

  export const ENERGY_HISTORY_IMPORT_MAX_BODY_CHARS = 850;

  export const ENERGY_HISTORY_EXPORT_MODES = [
    { id: "days", label: "Alleen dagtotalen", fileLabel: "daily" },
    { id: "days_and_hours", label: "Dagtotalen + uurdetail", fileLabel: "daily-hourly" },
    { id: "hours", label: "Alleen uurdetail", fileLabel: "hourly" },
  ];

  export const ENERGY_HISTORY_IMPORT_ERROR_LABELS = {
    forbidden: "Beveiligingstoken ontbreekt of is verlopen. Vernieuw de pagina en probeer opnieuw.",
    partition_unavailable: "Niet beschikbaar op deze Flash-indeling. Flash de controller eenmalig via USB met de nieuwe indeling.",
    time_unavailable: "De controller heeft nog geen geldige tijd. Probeer opnieuw zodra de tijdsync klaar is.",
    empty_records: "Er zijn geen records verstuurd.",
    payload_too_large: "Deze importbatch is te groot. Probeer het bestand opnieuw te importeren.",
  };

  export const ENERGY_HISTORY_IMPORT_VALUE_KEYS = {
    electricalInput: [
      "electrical_input_wh",
      "electricalInputWh",
      "energy_hp_electric",
      "hpElectric",
      "hp_electric_wh",
      "total_hp_electric_wh",
      "totalHpElectric",
    ],
    heatingInput: ["heating_input_wh", "heatingInputWh"],
    coolingInput: ["cooling_input_wh", "coolingInputWh"],
    heatpumpHeatOutput: [
      "heatpump_heat_output_wh",
      "heatpumpHeatOutputWh",
      "energy_hp_heat",
      "hpHeat",
      "hp_heat_wh",
      "total_hp_heat_wh",
      "totalHpHeat",
    ],
    heatpumpCoolingOutput: [
      "heatpump_cooling_output_wh",
      "heatpumpCoolingOutputWh",
      "energy_hp_cooling",
      "hpCooling",
      "hp_cooling_wh",
      "total_hp_cooling_wh",
      "totalHpCooling",
    ],
    boilerHeatOutput: [
      "boiler_heat_output_wh",
      "boilerHeatOutputWh",
      "energy_boiler_heat",
      "boilerHeat",
      "boiler_heat_wh",
      "total_boiler_heat_wh",
      "totalBoilerHeat",
    ],
    systemHeatOutput: ["system_heat_output_wh", "systemHeatOutputWh"],
  };

  export function normalizeEnergyHistoryExportMode(value) {
    const mode = String(value || "").trim();
    return ENERGY_HISTORY_EXPORT_MODES.some((option) => option.id === mode) ? mode : "days_and_hours";
  }

  export function getEnergyHistoryExportModeMeta(value) {
    const mode = normalizeEnergyHistoryExportMode(value);
    return ENERGY_HISTORY_EXPORT_MODES.find((option) => option.id === mode) || ENERGY_HISTORY_EXPORT_MODES[1];
  }

  export function getEnergyHistoryExportFileName(value) {
    const meta = getEnergyHistoryExportModeMeta(value);
    const stamp = new Date().toISOString().slice(0, 10);
    return `openquatt-energy-history-${meta.fileLabel}-${stamp}.json`;
  }

  export async function exportEnergyHistoryRecords() {
    if (state.energyHistoryExportBusy) {
      return;
    }

    const mode = normalizeEnergyHistoryExportMode(state.energyHistoryExportMode);
    const meta = getEnergyHistoryExportModeMeta(mode);
    updateEnergyHistoryState({
      energyHistoryExportMode: mode,
      energyHistoryExportBusy: true,
      energyHistoryExportError: "",
      energyHistoryExportNotice: "",
    });
    render();

    if (isDevPreviewEnvironmentForFetches()) {
      state.energyHistoryExportBusy = false;
      state.energyHistoryExportNotice = `Preview: ${meta.label.toLowerCase()} zou als JSON worden gedownload.`;
      render();
      return;
    }

    try {
      const response = await fetch(`${getBasePath()}/energy/history/export?mode=${encodeURIComponent(mode)}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const blob = await response.blob();
      downloadBlobFile(blob, getEnergyHistoryExportFileName(mode));
      state.energyHistoryExportNotice = `${meta.label} geëxporteerd.`;
    } catch (error) {
      state.energyHistoryExportError = `Exporteren mislukt. ${error.message}`;
    } finally {
      state.energyHistoryExportBusy = false;
      render();
    }
  }

  export function resetEnergyHistoryImportState(keepNotice = false) {
    const notice = keepNotice ? state.energyHistoryImportNotice : "";
    updateEnergyHistoryState({
      energyHistoryImportFileName: "",
      energyHistoryImportSource: "",
      energyHistoryImportRange: "",
      energyHistoryImportRecords: [],
      energyHistoryImportHourRecords: [],
      energyHistoryImportDuplicateCount: 0,
      energyHistoryImportSkippedCount: 0,
      energyHistoryImportInvalidCount: 0,
      energyHistoryImportUnsupportedCount: 0,
      energyHistoryImportBusy: false,
      energyHistoryImportProgressPercent: 0,
      energyHistoryImportError: "",
      energyHistoryImportNotice: notice,
    });
  }

  export function parseEnergyHistoryImportDateKey(value) {
    if (value === null || value === undefined || value === "") {
      return 0;
    }
    const text = String(value).trim();
    const timestampParts = parseEnergyHistoryImportTimestampParts(text);
    if (timestampParts) {
      return timestampParts.dateKey;
    }
    const compact = text.match(/^\d{8}$/)?.[0]
      || text.match(/^(\d{4})-(\d{2})-(\d{2})$/)?.slice(1).join("");
    let parsed = compact ? parseEnergyHistoryDateKey(compact) : null;
    if (!parsed) {
      const date = new Date(text);
      parsed = Number.isNaN(date.getTime()) ? null : parseEnergyHistoryDateKey(getEnergyHistoryDateKeyFromDate(date));
    }
    return parsed && parsed.year <= 2099 ? parsed.key : 0;
  }

  export function formatEnergyHistoryImportDateKey(dateKey) {
    const key = String(Math.round(Number(dateKey) || 0)).padStart(8, "0");
    if (!/^\d{8}$/.test(key)) {
      return "";
    }
    return `${key.slice(6, 8)}-${key.slice(4, 6)}-${key.slice(0, 4)}`;
  }

  export function getEnergyHistoryImportTimestampValue(record) {
    return record.timestamp ?? record.time ?? record.datetime ?? record.date_time ?? record.dateTime;
  }

  export function parseEnergyHistoryImportTimestampParts(value) {
    if (value === null || value === undefined || value === "") {
      return null;
    }
    const text = String(value).trim();
    const match = text.match(
      /^(\d{4})-(\d{2})-(\d{2})[T\s](\d{1,2})(?::(\d{2}))?(?::(\d{2})(?:\.\d+)?)?(?:Z|[+-]\d{2}:?\d{2})?$/i,
    );
    if (!match) {
      return null;
    }

    const hasZone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(text);
    const year = Number(match[1]);
    const month = Number(match[2]);
    const day = Number(match[3]);
    const hour = Number(match[4]);
    const minute = Number(match[5] || "0");
    const second = Number(match[6] || "0");
    if ([year, month, day, hour, minute, second].some((part) => Number.isNaN(part))) {
      return null;
    }

    const parsedDate = hasZone
      ? new Date(text)
      : new Date(year, month - 1, day, hour, minute, second, 0);
    if (Number.isNaN(parsedDate.getTime())) {
      return null;
    }

    const localYear = parsedDate.getFullYear();
    const localMonth = parsedDate.getMonth() + 1;
    const localDay = parsedDate.getDate();
    const localHour = parsedDate.getHours();
    if (localYear < 2020 || localYear > 2099 || localMonth < 1 || localMonth > 12 || localDay < 1 || localDay > 31) {
      return null;
    }
    return {
      dateKey: (localYear * 10000) + (localMonth * 100) + localDay,
      hour: localHour,
    };
  }

  export function parseEnergyHistoryImportNumber(value) {
    if (value === null || value === undefined || value === "") {
      return null;
    }
    const numeric = Number(String(value).trim().replace(",", "."));
    if (!Number.isFinite(numeric) || numeric < 0 || numeric >= 4294967295) {
      return null;
    }
    return Math.round(numeric);
  }

  export function parseEnergyHistoryImportWh(record, keys, fallback = null) {
    for (const key of keys) {
      if (!Object.prototype.hasOwnProperty.call(record, key)) {
        continue;
      }
      const parsed = parseEnergyHistoryImportNumber(record[key]);
      if (parsed !== null) {
        return parsed;
      }
    }
    return fallback;
  }

  export function hasEnergyHistoryImportWh(record, keys) {
    return parseEnergyHistoryImportWh(record, keys) !== null;
  }

  export function normalizeEnergyHistoryImportDailyRecord(record) {
    const dateKey = parseEnergyHistoryImportDateKey(
      record.date_key ?? record.dateKey ?? record.date ?? record.from ?? getEnergyHistoryImportTimestampValue(record),
    );
    if (!dateKey) {
      return null;
    }

    const electricalInputWh = parseEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.electricalInput);
    const heatpumpHeatOutputWh = parseEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.heatpumpHeatOutput);
    if (electricalInputWh === null || heatpumpHeatOutputWh === null) {
      return null;
    }

    const heatingInputWh = parseEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.heatingInput, electricalInputWh);
    const coolingInputWh = parseEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.coolingInput, 0);
    const heatpumpCoolingOutputWh = parseEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.heatpumpCoolingOutput, 0);
    const boilerHeatOutputWh = parseEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.boilerHeatOutput, 0);
    const systemHeatOutputWh = parseEnergyHistoryImportWh(
      record,
      ENERGY_HISTORY_IMPORT_VALUE_KEYS.systemHeatOutput,
      heatpumpHeatOutputWh + boilerHeatOutputWh,
    );
    const hasFullImportFields = hasEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.heatingInput) ||
      hasEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.coolingInput) ||
      hasEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.heatpumpCoolingOutput) ||
      hasEnergyHistoryImportWh(record, ENERGY_HISTORY_IMPORT_VALUE_KEYS.systemHeatOutput);
    if ([heatingInputWh, coolingInputWh, heatpumpCoolingOutputWh, boilerHeatOutputWh, systemHeatOutputWh].some((value) => value === null)) {
      return null;
    }

    return {
      dateKey,
      electricalInputWh,
      heatingInputWh,
      coolingInputWh,
      heatpumpHeatOutputWh,
      heatpumpCoolingOutputWh,
      boilerHeatOutputWh,
      systemHeatOutputWh,
      hasFullImportFields,
    };
  }

  export function parseEnergyHistoryImportHour(record) {
    const directHour = parseEnergyHistoryImportNumber(record.hour ?? record.hour_of_day ?? record.hourOfDay);
    if (directHour !== null && directHour >= 0 && directHour <= 23) {
      return directHour;
    }
    const timestamp = getEnergyHistoryImportTimestampValue(record);
    if (timestamp) {
      const timestampText = String(timestamp).trim();
      const timestampParts = parseEnergyHistoryImportTimestampParts(timestampText);
      if (timestampParts) {
        return timestampParts.hour;
      }
      const parsedDate = new Date(timestampText);
      if (!Number.isNaN(parsedDate.getTime())) {
        return parsedDate.getHours();
      }
      const hourMatch = timestampText.match(/^(\d{1,2})(?::\d{2})/);
      if (hourMatch) {
        const hour = Number(hourMatch[1]);
        if (hour >= 0 && hour <= 23) {
          return hour;
        }
      }
    }
    return -1;
  }

  export function normalizeEnergyHistoryImportHourlyRecord(record) {
    const normalized = normalizeEnergyHistoryImportDailyRecord(record);
    const hour = parseEnergyHistoryImportHour(record);
    if (!normalized || hour < 0 || hour > 23) {
      return null;
    }
    return { ...normalized, hour };
  }

  export function parseEnergyHistoryImportCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    const pushField = () => {
      row.push(field);
      field = "";
    };
    const pushRow = () => {
      pushField();
      if (row.some((value) => String(value).trim() !== "")) {
        rows.push(row);
      }
      row = [];
    };

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      if (inQuotes) {
        if (char === '"' && text[index + 1] === '"') {
          field += '"';
          index += 1;
        } else if (char === '"') {
          inQuotes = false;
        } else {
          field += char;
        }
      } else if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        pushField();
      } else if (char === "\n") {
        pushRow();
      } else if (char !== "\r") {
        field += char;
      }
    }
    if (field || row.length) {
      pushRow();
    }
    if (!rows.length) {
      return [];
    }

    const headers = rows.shift().map((header) => String(header || "").trim());
    return rows.map((values) => {
      const record = {};
      headers.forEach((header, index) => {
        if (header) {
          record[header] = values[index] ?? "";
        }
      });
      return record;
    });
  }

  export function flattenEnergyHistoryImportDailyRecord(row) {
    if (!row || typeof row !== "object" || Array.isArray(row) || !row.summary ||
        typeof row.summary !== "object" || Array.isArray(row.summary)) {
      return row;
    }
    return { ...row.summary, ...row };
  }

  export function collectEnergyHistoryImportRows(payload) {
    const dailyRows = [];
    const hourlyRows = [];
    if (Array.isArray(payload)) {
      const rows = payload.map(flattenEnergyHistoryImportDailyRecord);
      if (energyHistoryImportRowsLookHourly(rows)) {
        hourlyRows.push(...rows);
      } else {
        dailyRows.push(...rows);
      }
      return { dailyRows, hourlyRows, source: "JSON" };
    }

    const source = String(payload?.schema || payload?.import_schema || "JSON").trim() || "JSON";
    const days = Array.isArray(payload?.days)
      ? payload.days
      : Array.isArray(payload?.daily)
        ? payload.daily
        : Array.isArray(payload?.openquatt_import?.daily)
          ? payload.openquatt_import.daily
          : [];
    const hourly = Array.isArray(payload?.hourly)
      ? payload.hourly
      : Array.isArray(payload?.hours)
        ? payload.hours
        : Array.isArray(payload?.openquatt_import?.hourly)
          ? payload.openquatt_import.hourly
          : [];

    dailyRows.push(...days.map(flattenEnergyHistoryImportDailyRecord));
    hourlyRows.push(...hourly.map(flattenEnergyHistoryImportDailyRecord));
    days.forEach((day) => {
      if (!Array.isArray(day?.samples)) {
        return;
      }
      day.samples.forEach((sample) => {
        hourlyRows.push(flattenEnergyHistoryImportDailyRecord({ ...sample, date: sample.date ?? day.date }));
      });
    });
    return { dailyRows, hourlyRows, source };
  }

  export function parseEnergyHistoryImportPayload(fileName, text) {
    const trimmed = String(text || "").trim();
    if (!trimmed) {
      throw new Error("Bestand is leeg.");
    }

    let dailyRows = [];
    let hourlyRows = [];
    let source = "";
    if (trimmed[0] === "{" || trimmed[0] === "[") {
      const collected = collectEnergyHistoryImportRows(JSON.parse(trimmed));
      dailyRows = collected.dailyRows;
      hourlyRows = collected.hourlyRows;
      source = collected.source;
    } else {
      const rows = parseEnergyHistoryImportCsv(trimmed);
      if (energyHistoryImportRowsLookHourly(rows) || String(fileName || "").toLowerCase().includes("hour")) {
        hourlyRows = rows;
      } else {
        dailyRows = rows;
      }
      source = "CSV";
    }

    const recordsByDate = new Map();
    const hourRecordsByKey = new Map();
    let duplicates = 0;
    let invalid = 0;

    dailyRows.forEach((row) => {
      const record = normalizeEnergyHistoryImportDailyRecord(row);
      if (!record) {
        invalid += 1;
        return;
      }
      if (recordsByDate.has(record.dateKey)) {
        duplicates += 1;
      }
      recordsByDate.set(record.dateKey, record);
    });

    hourlyRows.forEach((row) => {
      const record = normalizeEnergyHistoryImportHourlyRecord(row);
      if (!record) {
        invalid += 1;
        return;
      }
      const key = `${record.dateKey}:${record.hour}`;
      if (hourRecordsByKey.has(key)) {
        duplicates += 1;
      }
      hourRecordsByKey.set(key, record);
    });

    const records = [...recordsByDate.values()].sort((a, b) => a.dateKey - b.dateKey);
    const hourRecords = [...hourRecordsByKey.values()].sort((a, b) => (a.dateKey - b.dateKey) || (a.hour - b.hour));
    if (!records.length && !hourRecords.length) {
      throw new Error("Geen ondersteunde dag- of uurrecords gevonden.");
    }

    const dateKeys = [...records.map((record) => record.dateKey), ...hourRecords.map((record) => record.dateKey)].sort((a, b) => a - b);
    const range = dateKeys.length
      ? `${formatEnergyHistoryImportDateKey(dateKeys[0])} t/m ${formatEnergyHistoryImportDateKey(dateKeys[dateKeys.length - 1])}`
      : "";

    return {
      records,
      hourRecords,
      source,
      range,
      duplicates,
      invalid,
    };
  }

  export function formatEnergyHistoryImportRecordLine(record) {
    if (record.hasFullImportFields) {
      return [
        "day",
        record.dateKey,
        record.electricalInputWh,
        record.heatingInputWh,
        record.coolingInputWh,
        record.heatpumpHeatOutputWh,
        record.heatpumpCoolingOutputWh,
        record.boilerHeatOutputWh,
        record.systemHeatOutputWh,
      ].join("|");
    }
    return [
      "day",
      record.dateKey,
      record.electricalInputWh,
      record.heatpumpHeatOutputWh,
      record.boilerHeatOutputWh,
    ].join("|");
  }

  export function formatEnergyHistoryImportHourDayLines(hourRecords) {
    const byDate = new Map();
    hourRecords.forEach((record) => {
      if (!byDate.has(record.dateKey)) {
        byDate.set(record.dateKey, new Map());
      }
      byDate.get(record.dateKey).set(record.hour, record);
    });

    return [...byDate.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([dateKey, recordsByHour]) => {
        let hourMask = 0;
        const values = [];
        const useFullFormat = [...recordsByHour.values()].some((record) => record.hasFullImportFields);
        for (let hour = 0; hour < 24; hour += 1) {
          const record = recordsByHour.get(hour);
          if (record) {
            hourMask |= 1 << hour;
          }
          if (useFullFormat) {
            values.push(
              record?.electricalInputWh ?? 0,
              record?.heatingInputWh ?? 0,
              record?.coolingInputWh ?? 0,
              record?.heatpumpHeatOutputWh ?? 0,
              record?.heatpumpCoolingOutputWh ?? 0,
              record?.boilerHeatOutputWh ?? 0,
              record?.systemHeatOutputWh ?? 0,
            );
          } else {
            values.push(
              record?.electricalInputWh ?? 0,
              record?.heatpumpHeatOutputWh ?? 0,
              record?.boilerHeatOutputWh ?? 0,
            );
          }
        }
        return ["hourday", dateKey, hourMask, ...values].join("|");
      });
  }

  export function buildEnergyHistoryImportRequestBody(lines) {
    const body = new URLSearchParams();
    body.set("records", [ENERGY_HISTORY_IMPORT_SCHEMA_LINE, ...lines].join("\n"));
    if (state.energyHistoryCsrfToken) {
      body.set("csrf_token", state.energyHistoryCsrfToken);
    }
    return body;
  }

  export function getEnergyHistoryImportLineBatches(lines) {
    const batches = [];
    let batch = [];
    lines.forEach((line) => {
      const candidate = [...batch, line];
      if (batch.length && String(buildEnergyHistoryImportRequestBody(candidate)).length > ENERGY_HISTORY_IMPORT_MAX_BODY_CHARS) {
        batches.push(batch);
        batch = [line];
      } else {
        batch = candidate;
      }
    });
    if (batch.length) {
      batches.push(batch);
    }
    return batches;
  }

  export function summarizeEnergyHistoryImportResult(result) {
    const parts = [];
    if (result.written > 0) {
      parts.push(`${result.written} dagrecords`);
    }
    if (result.hourWritten > 0) {
      parts.push(`${result.hourWritten} uurdagen`);
    }
    const imported = parts.length ? `${parts.join(" en ")} geïmporteerd.` : "Geen nieuwe records geïmporteerd.";
    const details = [];
    if (result.duplicates > 0) {
      details.push(`${result.duplicates} al aanwezig`);
    }
    if (result.skipped > 0) {
      details.push(`${result.skipped} overgeslagen`);
    }
    if (result.invalid > 0) {
      details.push(`${result.invalid} ongeldig`);
    }
    if (result.unsupported > 0) {
      details.push(`${result.unsupported} onbekend`);
    }
    return details.length ? `${imported} (${details.join(", ")}.)` : imported;
  }

  export async function postEnergyHistoryImportLines(lines) {
    const response = await fetch(`${getBasePath()}/energy/history/import`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
      body: buildEnergyHistoryImportRequestBody(lines),
    });
    const text = await response.text();
    let payload = {};
    try {
      payload = text ? JSON.parse(text) : {};
    } catch (_error) {
      payload = {};
    }
    if (!response.ok || payload.ok === false) {
      const errorCode = payload.error ? String(payload.error) : "";
      throw new Error(ENERGY_HISTORY_IMPORT_ERROR_LABELS[errorCode] || errorCode || `HTTP ${response.status}`);
    }
    return payload;
  }

  export function readEnergyHistoryCsrfToken(raw) {
    const line = String(raw || "").split(/\r?\n/).find((entry) => entry.startsWith("@csrf|"));
    return line ? line.slice(6) : "";
  }

  export async function refreshEnergyHistoryImportCsrfToken() {
    if (isDevPreviewEnvironmentForFetches()) {
      return;
    }
    const response = await fetch(`${getBasePath()}/energy/history?meta=1`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const token = readEnergyHistoryCsrfToken(await response.text());
    if (!token) {
      throw new Error("Beveiligingstoken ontbreekt. Vernieuw de pagina en probeer opnieuw.");
    }
    state.energyHistoryCsrfToken = token;
  }

  export function updateEnergyHistoryImportProgress(done, total) {
    state.energyHistoryImportProgressPercent = total > 0 ? Math.min(99, Math.max(1, Math.round((done / total) * 100))) : 0;
    render();
  }

  export async function handleEnergyHistoryImportFileSelection(file) {
    resetEnergyHistoryImportState();
    if (!file) {
      render();
      return;
    }

    updateEnergyHistoryState({ energyHistoryImportFileName: file.name || "exportbestand" });
    try {
      const parsed = parseEnergyHistoryImportPayload(file.name || "", await file.text());
      updateEnergyHistoryState({
        energyHistoryImportRecords: parsed.records,
        energyHistoryImportHourRecords: parsed.hourRecords,
        energyHistoryImportSource: parsed.source,
        energyHistoryImportRange: parsed.range,
        energyHistoryImportDuplicateCount: parsed.duplicates,
        energyHistoryImportInvalidCount: parsed.invalid,
      });
    } catch (error) {
      state.energyHistoryImportError = `Bestand kon niet worden gelezen. ${error.message}`;
    }
    render();
  }

  export function openEnergyHistoryImportFilePicker() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,.csv,application/json,text/csv,text/plain";
    input.style.position = "fixed";
    input.style.left = "-1000px";
    input.style.top = "0";
    input.addEventListener("change", () => {
      const file = input.files && input.files[0] ? input.files[0] : null;
      window.setTimeout(() => input.remove(), 0);
      void handleEnergyHistoryImportFileSelection(file);
    }, { once: true });
    document.body.appendChild(input);
    input.click();
  }

  export async function importEnergyHistoryRecords() {
    if (state.energyHistoryImportBusy) {
      return;
    }
    const lines = [
      ...state.energyHistoryImportRecords.map(formatEnergyHistoryImportRecordLine),
      ...formatEnergyHistoryImportHourDayLines(state.energyHistoryImportHourRecords),
    ];
    if (!lines.length) {
      state.energyHistoryImportError = "Kies eerst een exportbestand met dag- of uurrecords.";
      render();
      return;
    }

    state.energyHistoryImportBusy = true;
    state.energyHistoryImportError = "";
    state.energyHistoryImportNotice = "";
    state.energyHistoryImportProgressPercent = 1;
    render();

    if (isDevPreviewEnvironmentForFetches()) {
      const hourDayCount = new Set(state.energyHistoryImportHourRecords.map((record) => record.dateKey)).size;
      state.energyHistoryImportBusy = false;
      state.energyHistoryImportProgressPercent = 0;
      state.energyHistoryImportNotice = `Preview: ${state.energyHistoryImportRecords.length} dagrecords en ${hourDayCount} uurdagen zouden worden geïmporteerd.`;
      render();
      return;
    }

    const totals = { written: 0, hourWritten: 0, duplicates: 0, skipped: 0, invalid: 0, unsupported: 0 };
    let processedLines = 0;
    try {
      await refreshEnergyHistoryImportCsrfToken();
      const batches = getEnergyHistoryImportLineBatches(lines);
      for (const batch of batches) {
        const result = await postEnergyHistoryImportLines(batch);
        totals.written += Number(result.written || 0);
        totals.hourWritten += Number(result.hour_written || 0);
        totals.duplicates += Number(result.duplicates || 0);
        totals.skipped += Number(result.skipped || 0);
        totals.invalid += Number(result.invalid || 0);
        totals.unsupported += Number(result.unsupported || 0);
        processedLines += batch.length;
        updateEnergyHistoryImportProgress(processedLines, lines.length);
      }
      state.energyHistoryImportProgressPercent = 100;
      state.energyHistoryImportNotice = summarizeEnergyHistoryImportResult(totals);
      state.energyHistoryImportError = "";
      state.energyHistoryRaw = "";
      state.energyHistorySignature = "";
      state.energyHistoryLastFetchAt = 0;
      await refreshSettingsStorageState({ forceMissing: true, forceEnergyHistory: true });
    } catch (error) {
      state.energyHistoryImportError = `Importeren mislukt. ${error.message}`;
    } finally {
      state.energyHistoryImportBusy = false;
      state.energyHistoryImportProgressPercent = 0;
      render();
    }
  }

  export function shouldRefreshSettingsStorageForCurrentSurface() {
    return isSystemSettingsGroupActive() || (state.appView === "settings" && state.systemModal === "history-storage");
  }

  export function clearSettingsBackupDraft() {
    state.settingsBackupDraft = null;
    state.settingsBackupError = "";
    state.settingsBackupBusy = false;
  }

  export function getSettingsBackupSourceMeta() {
    return {
      device: getFirmwareDeviceLabel(),
      installation: getInstallationLabel(),
      topology: typeof getInstallationTopology === "function" ? getInstallationTopology() : "",
      firmware_version: getFirmwareCurrentVersion(),
      firmware_channel: String(getEntityValue("firmwareUpdateChannel") || getEntityValue("releaseChannelText") || "").trim(),
    };
  }

  export function getSettingsBackupValue(key) {
    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return undefined;
    }

    if (key === "setupComplete") {
      return getSetupCompleteState();
    }

    const value = getEntityValue(key);
    if (value === "" || value === null || value === undefined) {
      return undefined;
    }

    if (entity.domain === "switch" || entity.domain === "binary_sensor") {
      return isEntityActive(key);
    }
    if (entity.domain === "number") {
      const numeric = parseLooseNumber(value);
      return Number.isNaN(numeric) ? undefined : numeric;
    }
    if (entity.domain === "time") {
      const normalized = normalizeTimeValue(value);
      return normalized || undefined;
    }
    if (entity.domain === "datetime") {
      const normalized = normalizeDateTimeValue(value);
      return normalized || undefined;
    }

    const text = String(value || "").trim();
    return text || undefined;
  }

  export function buildSettingsBackupSnapshot() {
    const settings = {};
    SETTINGS_BACKUP_SECTIONS.forEach((section) => {
      const values = {};
      section.keys.forEach((key) => {
        const value = getSettingsBackupValue(key);
        if (value !== undefined) {
          values[key] = value;
        }
      });
      settings[section.id] = values;
    });

    return {
      schema_version: SETTINGS_BACKUP_SCHEMA_VERSION,
      exported_at: new Date().toISOString(),
      source: getSettingsBackupSourceMeta(),
      settings,
    };
  }

  export function getSettingsBackupFilename(snapshot = buildSettingsBackupSnapshot()) {
    const stamp = String(snapshot.exported_at || new Date().toISOString())
      .replace(/[:.]/g, "-")
      .replace(/T/, "_")
      .replace(/Z$/, "Z");
    const installation = String(snapshot.source?.installation || "OpenQuatt").replace(/\s+/g, "-").toLowerCase();
    return `${installation}-settings-backup-${stamp}.json`;
  }

  export function getSettingsBackupFieldLabel(key) {
    const entity = ENTITY_DEFS[key];
    if (entity?.name) {
      return entity.name;
    }
    return key
      .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
      .replaceAll(/_/g, " ")
      .trim();
  }

  export function formatSettingsBackupFieldValue(key, value) {
    if (value === undefined || value === null || value === "") {
      return "—";
    }

    const entity = ENTITY_DEFS[key];
    if (!entity) {
      return String(value).trim() || "—";
    }

    if (entity.domain === "number") {
      return formatValue(key, value);
    }
    if (entity.domain === "time") {
      return normalizeTimeValue(value)?.slice(0, 5) || "—";
    }
    if (entity.domain === "datetime") {
      return normalizeDateTimeValue(value) || "—";
    }
    if (entity.domain === "switch" || entity.domain === "binary_sensor") {
      return value ? "Aan" : "Uit";
    }

    const text = String(value).trim();
    return text || "—";
  }

  export function getSettingsBackupFieldStatusLabel(status) {
    switch (status) {
      case "same":
        return "Gelijk";
      case "different":
        return "Wijkt af";
      case "missing":
        return "Ontbreekt in backup";
      case "current-missing":
        return "Niet op huidige installatie";
      case "optional-missing":
      case "optional-unavailable":
        return "Ontbreekt";
      default:
        return "Onbekend";
    }
  }

  export function getSettingsBackupSelectionSummary(snapshot) {
    const settings = snapshot?.settings && typeof snapshot.settings === "object" ? snapshot.settings : {};
    const source = snapshot?.source && typeof snapshot.source === "object" ? snapshot.source : {};
    const backupKeySet = SETTINGS_BACKUP_KEY_SET;
    let requiredPresent = 0;
    let requiredMissing = 0;
    let optionalPresent = 0;
    let optionalMissing = 0;
    let unknown = 0;
    let requiredTotal = 0;
    let differenceCount = 0;
    let currentPresent = 0;
    const sectionSummaries = SETTINGS_BACKUP_SECTIONS.map((section) => {
      const values = settings[section.id] && typeof settings[section.id] === "object" ? settings[section.id] : {};
      let sectionRequiredPresent = 0;
      let sectionRequiredMissing = 0;
      let sectionOptionalPresent = 0;
      let sectionOptionalMissing = 0;
      let sectionOptionalTotal = 0;
      let sectionDifferenceCount = 0;
      let sectionCurrentPresent = 0;
      const rows = section.keys.map((key) => {
        const entity = ENTITY_DEFS[key];
        const optional = Boolean(entity?.optional);
        const hasBackupValue = Object.prototype.hasOwnProperty.call(values, key);
        const backupValue = hasBackupValue ? values[key] : undefined;
        const currentValue = getSettingsBackupValue(key);
        const currentExists = hasEntity(key);
        const backupDisplay = hasBackupValue ? formatSettingsBackupFieldValue(key, backupValue) : (optional ? "Niet op huidige installatie" : "Ontbreekt in backup");
        const currentDisplay = currentExists
          ? formatSettingsBackupFieldValue(key, currentValue)
          : (optional ? "Niet beschikbaar op huidige installatie" : "Ontbreekt op huidige installatie");
        let status = "same";
        if (!hasBackupValue && optional) {
          status = "optional-missing";
        } else if (!hasBackupValue) {
          status = "missing";
        } else if (!currentExists) {
          status = optional ? "optional-unavailable" : "current-missing";
        } else if (JSON.stringify(currentValue) !== JSON.stringify(backupValue)) {
          status = "different";
        }
        if (currentExists) {
          sectionCurrentPresent += 1;
          currentPresent += 1;
        }
        if (status !== "same") {
          sectionDifferenceCount += 1;
          differenceCount += 1;
        }

        if (optional) {
          sectionOptionalTotal += 1;
          if (hasBackupValue) {
            sectionOptionalPresent += 1;
            optionalPresent += 1;
          } else {
            sectionOptionalMissing += 1;
            optionalMissing += 1;
          }
        } else if (hasBackupValue) {
          sectionRequiredPresent += 1;
          requiredPresent += 1;
        } else {
          sectionRequiredMissing += 1;
          requiredMissing += 1;
        }

        return {
          key,
          label: getSettingsBackupFieldLabel(key),
          optional,
          hasBackupValue,
          backupDisplay,
          currentDisplay,
          status,
          statusLabel: getSettingsBackupFieldStatusLabel(status),
        };
      });
      requiredTotal += section.keys.filter((key) => !ENTITY_DEFS[key]?.optional).length;
      return {
        id: section.id,
        label: section.label,
        present: sectionRequiredPresent,
        currentPresent: sectionCurrentPresent,
        requiredTotal: section.keys.filter((key) => !ENTITY_DEFS[key]?.optional).length,
        optionalTotal: sectionOptionalTotal,
        optionalPresent: sectionOptionalPresent,
        optionalMissing: sectionOptionalMissing,
        requiredMissing: sectionRequiredMissing,
        total: section.keys.length,
        differenceCount: sectionDifferenceCount,
        rows,
      };
    });

    Object.entries(settings).forEach(([sectionId, values]) => {
      if (!SETTINGS_BACKUP_SECTIONS.some((section) => section.id === sectionId)) {
        unknown += 1;
        return;
      }
      if (!values || typeof values !== "object") {
        return;
      }
      Object.keys(values).forEach((key) => {
        if (!backupKeySet.has(key)) {
          unknown += 1;
        }
      });
    });

    return {
      source,
      sectionSummaries,
      requiredPresent,
      requiredMissing,
      requiredAvailable: requiredTotal,
      optionalPresent,
      optionalMissing,
      unknown,
      differenceCount,
      currentPresent,
      requiredTotal,
      total: SETTINGS_BACKUP_KEYS.length,
    };
  }

  export function parseSettingsBackupPayload(rawText, fileName = "") {
    const parsed = JSON.parse(rawText);
    if (!parsed || typeof parsed !== "object") {
      throw new Error("Backupbestand bevat geen JSON-object.");
    }

    const schemaVersion = Number(parsed.schema_version ?? parsed.schemaVersion ?? 0);
    if (!Number.isInteger(schemaVersion) || schemaVersion < SETTINGS_BACKUP_SCHEMA_VERSION) {
      throw new Error("Onbekende backupversie.");
    }

    const settings = parsed.settings && typeof parsed.settings === "object" ? parsed.settings : {};
    const snapshot = {
      schema_version: schemaVersion,
      exported_at: String(parsed.exported_at || ""),
      source: parsed.source && typeof parsed.source === "object" ? parsed.source : {},
      settings,
      file_name: fileName || "",
    };
    snapshot.summary = getSettingsBackupSelectionSummary(snapshot);
    return snapshot;
  }

  export async function prepareSettingsBackupSnapshot() {
    state.settingsBackupBusy = true;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      await refreshEntities(SETTINGS_BACKUP_KEYS, "all");
      return buildSettingsBackupSnapshot();
    } finally {
      state.settingsBackupBusy = false;
      render();
    }
  }

  export async function exportSettingsBackup() {
    if (state.settingsBackupBusy) {
      return;
    }

    try {
      const snapshot = await prepareSettingsBackupSnapshot();
      downloadJsonFile(getSettingsBackupFilename(snapshot), snapshot);
      state.controlNotice = "Settings-backup gedownload.";
      render();
    } catch (error) {
      state.controlError = `Backup exporteren mislukt. ${error.message}`;
      render();
    }
  }

  export async function handleSettingsBackupFileSelection(file) {
    if (!file || state.settingsBackupBusy) {
      return;
    }

    state.settingsBackupBusy = true;
    state.settingsBackupDraft = null;
    state.settingsBackupError = "";
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const rawText = await file.text();
      await refreshEntities(SETTINGS_BACKUP_KEYS, "all");
      const snapshot = parseSettingsBackupPayload(rawText, file.name || "");
      state.settingsBackupDraft = snapshot;
      state.systemModal = "settings-backup-restore";
    } catch (error) {
      state.settingsBackupDraft = null;
      state.settingsBackupError = `Backupbestand kon niet worden gelezen. ${error.message}`;
    } finally {
      state.settingsBackupBusy = false;
      render();
    }
  }

  export async function restoreSettingsBackup() {
    const draft = state.settingsBackupDraft;
    if (!draft || state.settingsBackupBusy) {
      return;
    }

    state.settingsBackupBusy = true;
    state.settingsBackupError = "";
    state.controlError = "";
    state.controlNotice = "";
    render();

    const applied = [];
    const skipped = [];
    let shouldCompleteSetup = false;

    try {
      await refreshEntities(SETTINGS_BACKUP_KEYS, "all");

      for (const section of SETTINGS_BACKUP_SECTIONS) {
        const sectionValues = draft.settings?.[section.id] && typeof draft.settings[section.id] === "object"
          ? draft.settings[section.id]
          : {};

        for (const key of section.keys) {
          if (!Object.prototype.hasOwnProperty.call(sectionValues, key)) {
            skipped.push(key);
            continue;
          }

          const value = sectionValues[key];
          if (key === "setupComplete") {
            shouldCompleteSetup = value === true;
            continue;
          }

          if (key === "openquattEnabled") {
            continue;
          }

          const entity = ENTITY_DEFS[key];
          if (!entity || !hasEntity(key)) {
            skipped.push(key);
            continue;
          }

          try {
            await setEntityBackupValue(key, value);
            applied.push(key);
          } catch (error) {
            skipped.push(key);
          }
        }
      }

      const openquattEnabledValue = draft.settings?.operation?.openquattEnabled;
      if (Object.prototype.hasOwnProperty.call(draft.settings?.operation || {}, "openquattEnabled") && hasEntity("openquattEnabled")) {
        await setEntityBackupValue("openquattEnabled", openquattEnabledValue);
        applied.push("openquattEnabled");
      }

      if (shouldCompleteSetup && ENTITY_DEFS.apply) {
        const response = await fetch(buildEntityPath("button", "Complete setup", "press"), { method: "POST" });
        if (!response.ok) {
          throw new Error(`Setup bevestigen mislukt (HTTP ${response.status}).`);
        }
        applied.push("setupComplete");
      } else if (Object.prototype.hasOwnProperty.call(draft.settings?.installation || {}, "setupComplete")) {
        skipped.push("setupComplete");
      }

      state.systemModal = "settings-backup-success";
      clearSettingsBackupDraft();
      state.controlNotice = `Backup hersteld (${applied.length} toegepast${skipped.length ? `, ${skipped.length} overgeslagen` : ""}).`;
      await syncEntities();
    } catch (error) {
      state.settingsBackupError = `Backup herstellen mislukt. ${error.message}`;
    } finally {
      state.settingsBackupBusy = false;
      render();
    }
  }

  export function isDevPreviewEnvironmentForFetches() {
    return Boolean(
      (__OQ_PREVIEW__ && typeof window !== "undefined" && window.__OQ_DEV_CONTROLS__)
      || (__OQ_PREVIEW__ && typeof window !== "undefined" && window.__OQ_DEV_META)
    );
  }

  export async function refreshTrendHistoryData(options = {}) {
    if (!isTrendHistoryEnabled()) {
      const changed = Boolean(state.trendHistoryRaw || state.trendHistoryError);
      state.trendHistoryRaw = "";
      state.trendHistoryError = "";
      state.trendHistorySignature = "";
      state.trendHistoryNowMs = Number.NaN;
      state.trendHistoryLastFetchAt = 0;
      return changed;
    }
    if (isDevPreviewEnvironmentForFetches()) {
      return false;
    }

    const force = options.force === true;
    const now = Date.now();
    if (!force && state.trendHistoryFetchPromise) {
      return state.trendHistoryFetchPromise;
    }
    if (!force && (state.trendHistoryRaw || state.trendHistoryError) &&
        (now - Number(state.trendHistoryLastFetchAt || 0)) < TREND_HISTORY_REFRESH_INTERVAL_MS) {
      return false;
    }

    state.trendHistoryFetchPromise = (async () => {
      const windowHours = normalizeTrendWindowHours(state.trendWindowHours || DEFAULT_TREND_WINDOW_HOURS);
      if (windowHours !== state.trendWindowHours) {
        setTrendWindowHours(windowHours);
      }
      const response = await fetch(`${getBasePath()}/trends/history?hours=${encodeURIComponent(String(windowHours))}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const raw = await response.text();
      const lines = raw.split(/\r?\n/);
      let nowMs = Number.NaN;
      let body = raw;
      if (lines.length && lines[0].startsWith("@now|")) {
        nowMs = Number(lines[0].slice(5));
        body = lines.slice(1).join("\n");
      }
      const signature = `${windowHours}|${body.length}|${body.slice(0, 120)}|${body.slice(-120)}`;
      const currentNowValid = Number.isFinite(state.trendHistoryNowMs);
      const nextNowValid = Number.isFinite(nowMs);
      const nowChanged = nextNowValid
        ? !currentNowValid || state.trendHistoryNowMs !== nowMs
        : currentNowValid;
      const changed = body !== state.trendHistoryRaw || state.trendHistoryError !== "" ||
        state.trendHistorySignature !== signature || nowChanged;
      state.trendHistoryRaw = body;
      state.trendHistoryError = "";
      state.trendHistorySignature = signature;
      state.trendHistoryNowMs = Number.isFinite(nowMs) ? nowMs : Number.NaN;
      state.trendHistoryLastFetchAt = Date.now();
      return changed;
    })();

    try {
      return await state.trendHistoryFetchPromise;
    } catch (error) {
      const nextError = `Trendhistorie kon niet worden geladen. ${error.message}`;
      const changed = state.trendHistoryError !== nextError;
      state.trendHistoryError = nextError;
      state.trendHistoryRaw = "";
      state.trendHistorySignature = "";
      state.trendHistoryNowMs = Number.NaN;
      state.trendHistoryLastFetchAt = Date.now();
      return changed;
    } finally {
      state.trendHistoryFetchPromise = null;
    }
  }

  export async function refreshEnergyHistoryData(options = {}) {
    if (!hasEntity("lifetimeEnergyHistoryEnabled") && !isDevPreviewEnvironmentForFetches()) {
      const changed = Boolean(state.energyHistoryRaw || state.energyHistoryError);
      state.energyHistoryRaw = "";
      state.energyHistoryError = "";
      state.energyHistorySignature = "";
      state.energyHistoryNowMs = Number.NaN;
      state.energyHistoryLastFetchAt = 0;
      state.energyHistoryRequestQuery = "";
      state.energyHistoryFetchQuery = "";
      state.energyHistoryCsrfToken = "";
      return changed;
    }

    const force = options.force === true;
    const now = Date.now();
    const query = options.metaOnly === true
      ? "?meta=1"
      : typeof getEnergyHistoryRequestQuery === "function" ? getEnergyHistoryRequestQuery() : "";
    if (!force && state.energyHistoryFetchPromise && state.energyHistoryFetchQuery === query) {
      return state.energyHistoryFetchPromise;
    }
    if (!force && state.energyHistoryRequestQuery === query && (state.energyHistoryRaw || state.energyHistoryError) &&
        (now - Number(state.energyHistoryLastFetchAt || 0)) < TREND_HISTORY_REFRESH_INTERVAL_MS) {
      return false;
    }

    state.energyHistoryFetchQuery = query;
    state.energyHistoryFetchPromise = (async () => {
      const fetchEnergyHistoryText = async (requestQuery) => {
        const response = await fetch(`${getBasePath()}/energy/history${requestQuery}`, { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.text();
      };
      let finalQuery = query;
      let raw = await fetchEnergyHistoryText(finalQuery);
      if (options.metaOnly !== true && finalQuery.includes("meta=1") && typeof getEnergyHistoryRequestQuery === "function") {
        const previousRaw = state.energyHistoryRaw;
        state.energyHistoryRaw = raw;
        const nextQuery = getEnergyHistoryRequestQuery();
        state.energyHistoryRaw = previousRaw;
        if (nextQuery && nextQuery !== finalQuery) {
          finalQuery = nextQuery;
          raw = await fetchEnergyHistoryText(finalQuery);
        }
      }
      const lines = raw.split(/\r?\n/);
      const nextCsrfToken = readEnergyHistoryCsrfToken(raw) || state.energyHistoryCsrfToken;
      let nowMs = Number.NaN;
      lines.forEach((line) => {
        if (line.startsWith("@now|")) {
          nowMs = Number(line.slice(5));
        }
      });
      const signature = `${raw.length}|${raw.slice(0, 120)}|${raw.slice(-120)}`;
      const currentNowValid = Number.isFinite(state.energyHistoryNowMs);
      const nextNowValid = Number.isFinite(nowMs);
      const nowChanged = nextNowValid
        ? !currentNowValid || state.energyHistoryNowMs !== nowMs
        : currentNowValid;
      const changed = raw !== state.energyHistoryRaw || state.energyHistoryError !== "" ||
        state.energyHistorySignature !== signature || nowChanged ||
        nextCsrfToken !== state.energyHistoryCsrfToken;
      state.energyHistoryRaw = raw;
      state.energyHistoryError = "";
      state.energyHistorySignature = signature;
      state.energyHistoryNowMs = Number.isFinite(nowMs) ? nowMs : Number.NaN;
      state.energyHistoryLastFetchAt = Date.now();
      state.energyHistoryRequestQuery = finalQuery;
      state.energyHistoryCsrfToken = nextCsrfToken;
      return changed;
    })();

    try {
      return await state.energyHistoryFetchPromise;
    } catch (error) {
      const nextError = `Energiehistorie kon niet worden geladen. ${error.message}`;
      const changed = state.energyHistoryError !== nextError;
      state.energyHistoryError = nextError;
      state.energyHistoryRaw = "";
      state.energyHistorySignature = "";
      state.energyHistoryNowMs = Number.NaN;
      state.energyHistoryLastFetchAt = Date.now();
      state.energyHistoryRequestQuery = query;
      state.energyHistoryCsrfToken = "";
      return changed;
    } finally {
      state.energyHistoryFetchPromise = null;
    }
  }

  setStorageHistoryControls({
    refreshEnergyHistoryData,
    refreshSettingsStorageState,
    refreshTrendHistoryData,
    refreshTrendHistoryMetadata,
    shouldRefreshSettingsStorageForCurrentSurface,
  });

  const storageHistoryActionHandlers = {
    "flush-trend-history": ({ triggerNamedButton }) => {
      return triggerNamedButton("trendHistoryFlush", {
        successNotice: "Diagnosegeschiedenis is opgeslagen.",
        errorPrefix: "Diagnosegeschiedenis kon niet worden opgeslagen",
        refreshKeys: getSettingsStorageRefreshKeys(),
        refreshDelayMs: 500,
      }).then(() => {
        refreshSettingsStorageStateSoon(undefined, { forceTrendHistory: true });
      });
    },
    "save-lifetime-energy-history": ({ triggerNamedButton }) => {
      return triggerNamedButton("lifetimeEnergyHistoryCapture", {
        successNotice: "Energiehistorie is opgeslagen.",
        errorPrefix: "Energiehistorie kon niet worden opgeslagen",
        refreshKeys: getSettingsStorageRefreshKeys(),
        refreshDelayMs: 500,
      }).then(() => {
        state.energyHistoryRaw = "";
        state.energyHistorySignature = "";
        state.energyHistoryLastFetchAt = 0;
        refreshSettingsStorageStateSoon();
        if (state.appView === "results") {
          void refreshEnergyHistoryData({ force: true }).then(() => render());
        }
      });
    },
    "clear-lifetime-energy-history": ({ triggerNamedButton }) => {
      if (!window.confirm("Energiehistorie wissen?\n\nAlle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.")) {
        return;
      }
      return triggerNamedButton("lifetimeEnergyHistoryClear", {
        successNotice: "Energiehistorie is gewist.",
        errorPrefix: "Energiehistorie kon niet worden gewist",
        refreshKeys: getSettingsStorageRefreshKeys(),
        refreshDelayMs: 500,
      }).then(() => {
        state.energyHistoryRaw = "";
        state.energyHistorySignature = "";
        state.energyHistoryLastFetchAt = 0;
        refreshSettingsStorageStateSoon();
        if (state.appView === "results") {
          void refreshEnergyHistoryData({ force: true }).then(() => render());
        }
      });
    },
    "select-energy-history-import-file": () => openEnergyHistoryImportFilePicker(),
    "clear-energy-history-import-file": () => {
      resetEnergyHistoryImportState();
      render();
    },
    "import-energy-history-file": () => importEnergyHistoryRecords(),
    "export-energy-history": () => exportEnergyHistoryRecords(),
    "open-history-storage-modal": () => {
      state.systemModal = "history-storage";
      render();
      const refreshPromise = refreshSettingsStorageState({ forceMissing: true, forceTrendHistory: true, forceEnergyHistory: true }).finally(() => {
        if (state.systemModal === "history-storage") {
          render();
        }
      });
      refreshSettingsStorageStateSoon([1000, 3000, 7000]);
      return refreshPromise;
    },
    "download-settings-backup": () => exportSettingsBackup(),
    "open-settings-backup-import": () => {
      state.systemModal = "settings-backup-import";
      render();
    },
    "confirm-settings-backup-restore": () => restoreSettingsBackup(),
  };

  export function handleStorageHistoryAction(action, dependencies) {
    return invokeActionMap(storageHistoryActionHandlers, action, dependencies);
  }
