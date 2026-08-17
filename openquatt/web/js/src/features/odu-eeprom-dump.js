import { hasEntity } from "../core/app-shared.js";
import { invokeActionMap } from "../core/action-router.js";
import { downloadJsonFile, fetchWithTimeout } from "../core/browser-utils.js";
import { escapeHtml } from "../core/html.js";
import { render } from "../core/render-scheduler.js";
import { state } from "../core/state.js";
import { getBasePath } from "../core/url-path.js";
import { getInstallationTopology } from "./device-context.js";

const STATUS_REFRESH_INTERVAL_MS = 5000;
const ACTIVE_POLL_INTERVAL_MS = 1000;
const REQUEST_TIMEOUT_MS = 8000;

export function getOduEepromDumpEndpoint(hp, action) {
  const hpIndex = Number(hp) === 2 ? 2 : 1;
  return `${getBasePath()}/openquatt/odu-eeprom/hp${hpIndex}/${action}`;
}

export function normalizeOduEepromDumpStatus(payload = {}, hp = 1) {
  const progress = Math.max(0, Math.min(100, Number(payload.progress_percent || 0)));
  return {
    ok: payload.ok !== false,
    available: payload.available !== false,
    unsupported: payload.unsupported === true,
    hp: Number(payload.hp || hp) === 2 ? 2 : 1,
    active: payload.active === true,
    dumpReady: payload.dump_ready === true,
    jobId: Math.max(0, Number(payload.job_id || 0)),
    phase: String(payload.phase || "idle"),
    progress,
    registersRead: Math.max(0, Number(payload.registers_read || 0)),
    registerCount: Math.max(0, Number(payload.register_count || 512)),
    warningFlags: Math.max(0, Number(payload.warning_flags || 0)),
    error: String(payload.error || ""),
    crc: {
      calculated: String(payload.crc?.calculated || "0x0000"),
      stored: String(payload.crc?.stored || "0x0000"),
      matchesStoredEeprom: payload.crc?.matches_stored_eeprom === true,
      retryCount: Math.max(0, Number(payload.crc?.retry_count || 0)),
    },
    identity: {
      extendedSupported: payload.identity?.extended_supported === true,
      model: String(payload.identity?.model || ""),
      coreAvailable: payload.identity?.core_available === true,
      pcbProgramRaw: Math.max(0, Number(payload.identity?.pcb_program_raw || 0)),
      pcbProgram: String(payload.identity?.pcb_program || ""),
      eepromProgramRaw: Math.max(0, Number(payload.identity?.eeprom_program_raw || 0)),
    },
  };
}

export function getOduEepromDumpHpIndexes() {
  return getInstallationTopology() === "duo" || hasEntity("hp2ExcludedA") ? [1, 2] : [1];
}

export function getOduEepromCrcLabel(status) {
  if (!status?.dumpReady) return "";
  return status.crc.matchesStoredEeprom
    ? `Runtimewaarden gelijk aan opgeslagen EEPROM (CRC ${status.crc.calculated})`
    : `Runtimewaarden wijken af van opgeslagen EEPROM (runtime ${status.crc.calculated}, EEPROM ${status.crc.stored})`;
}

function clearPollTimer() {
  if (state.oduEepromDumpPollTimer) {
    window.clearTimeout(state.oduEepromDumpPollTimer);
    state.oduEepromDumpPollTimer = null;
  }
}

function schedulePoll() {
  clearPollTimer();
  const statuses = Object.values(state.oduEepromDumpStatuses || {});
  if (!shouldRefreshOduEepromDumpSurface() || !statuses.some((status) => status?.active)) {
    return;
  }
  state.oduEepromDumpPollTimer = window.setTimeout(() => {
    void refreshOduEepromDumpStatuses({ force: true, silent: true });
  }, ACTIVE_POLL_INTERVAL_MS);
}

async function fetchStatus(hp) {
  const response = await fetchWithTimeout(
    getOduEepromDumpEndpoint(hp, "status"),
    { cache: "no-store", headers: { "Cache-Control": "no-store" } },
    REQUEST_TIMEOUT_MS,
    `ODU EEPROM-status voor HP${hp} reageert niet`,
  );
  if (response.status === 404) {
    return normalizeOduEepromDumpStatus({ available: false, unsupported: true, hp }, hp);
  }
  if (!response.ok) {
    throw new Error(`HP${hp} status HTTP ${response.status}`);
  }
  return normalizeOduEepromDumpStatus(await response.json(), hp);
}

export function shouldRefreshOduEepromDumpSurface() {
  return state.appView === "settings" && state.settingsGroup === "service";
}

export async function refreshOduEepromDumpStatuses(options = {}) {
  if (!shouldRefreshOduEepromDumpSurface() && options.force !== true) {
    return false;
  }
  if (state.oduEepromDumpFetchPromise) {
    return state.oduEepromDumpFetchPromise;
  }
  const now = Date.now();
  if (!options.force && now - Number(state.oduEepromDumpLastFetchAt || 0) < STATUS_REFRESH_INTERVAL_MS) {
    return false;
  }

  const previousSignature = JSON.stringify(state.oduEepromDumpStatuses || {});
  state.oduEepromDumpFetchPromise = (async () => {
    try {
      const entries = await Promise.all(getOduEepromDumpHpIndexes().map(async (hp) => [hp, await fetchStatus(hp)]));
      state.oduEepromDumpStatuses = Object.fromEntries(entries);
      state.oduEepromDumpLastFetchAt = Date.now();
      state.oduEepromDumpError = "";
      schedulePoll();
      const changed = JSON.stringify(state.oduEepromDumpStatuses) !== previousSignature;
      if (changed && shouldRefreshOduEepromDumpSurface() && (options.silent || options.force)) render();
      return changed;
    } catch (error) {
      state.oduEepromDumpError = `EEPROM-status kon niet worden opgehaald. ${error.message || String(error)}`;
      if (!options.silent) render();
      return false;
    } finally {
      state.oduEepromDumpFetchPromise = null;
    }
  })();
  return state.oduEepromDumpFetchPromise;
}

async function startDump(button) {
  const hp = Number(button.dataset.hp) === 2 ? 2 : 1;
  state.oduEepromDumpBusyHp = hp;
  state.oduEepromDumpError = "";
  state.oduEepromDumpNotice = "";
  render();
  try {
    const response = await fetchWithTimeout(
      getOduEepromDumpEndpoint(hp, "start?extended=1"),
      { method: "POST", cache: "no-store", headers: { "Cache-Control": "no-store" } },
      REQUEST_TIMEOUT_MS,
      `Uitlezen van HP${hp} kon niet worden gestart`,
    );
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      throw new Error(payload.error === "dump_busy" ? "er loopt al een export" : `HTTP ${response.status}`);
    }
    const status = normalizeOduEepromDumpStatus(await response.json(), hp);
    state.oduEepromDumpStatuses = { ...(state.oduEepromDumpStatuses || {}), [hp]: status };
    state.oduEepromDumpNotice = `HP${hp}: EEPROM-uitlezing gestart.`;
    schedulePoll();
  } catch (error) {
    state.oduEepromDumpError = `HP${hp} kon niet worden uitgelezen. ${error.message || String(error)}`;
  } finally {
    state.oduEepromDumpBusyHp = 0;
    render();
  }
}

function getDownloadFilename(payload, hp) {
  const model = String(payload?.identity?.model || "odu")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "odu";
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  return `openquatt-hp${hp}-${model}-eeprom-${stamp}.json`;
}

async function downloadDump(button) {
  const hp = Number(button.dataset.hp) === 2 ? 2 : 1;
  state.oduEepromDumpBusyHp = hp;
  state.oduEepromDumpError = "";
  state.oduEepromDumpNotice = "";
  render();
  try {
    const response = await fetchWithTimeout(
      getOduEepromDumpEndpoint(hp, "download"),
      { cache: "no-store", headers: { "Cache-Control": "no-store" } },
      20000,
      `Download van HP${hp} reageert niet`,
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    downloadJsonFile(getDownloadFilename(payload, hp), payload);
    state.oduEepromDumpNotice = `HP${hp}: EEPROM-JSON gedownload.`;
  } catch (error) {
    state.oduEepromDumpError = `Download voor HP${hp} is mislukt. ${error.message || String(error)}`;
  } finally {
    state.oduEepromDumpBusyHp = 0;
    render();
  }
}

function translatePhase(phase) {
  const normalized = String(phase || "").toLowerCase();
  if (normalized === "complete") return "Klaar";
  if (normalized === "complete with warnings") return "Klaar met waarschuwingen";
  if (normalized === "failed") return "Mislukt";
  if (normalized.includes("waiting")) return "Wachten op Modbus-bus";
  if (normalized.includes("extended")) return "ODU-identiteit uitlezen";
  if (normalized.includes("core")) return "Firmwaregegevens uitlezen";
  if (normalized.includes("reread") || normalized.includes("runtime crc differs")) return "EEPROM opnieuw uitlezen";
  if (normalized.includes("eeprom")) return "EEPROM uitlezen";
  if (normalized.includes("verifying")) return "CRC controleren";
  return normalized === "idle" ? "Gereed" : phase;
}

function renderHpPanel(hp) {
  const status = state.oduEepromDumpStatuses?.[hp] || null;
  const busy = Number(state.oduEepromDumpBusyHp || 0) === hp;
  const active = status?.active === true;
  const ready = status?.dumpReady === true;
  const unavailable = status?.available === false;
  const unsupported = status?.unsupported === true;
  const progress = active ? status.progress : ready ? 100 : 0;
  const statusLabel = unsupported
    ? "Niet ondersteund door deze firmware"
    : unavailable
      ? "PSRAM-opslag niet beschikbaar"
      : status?.error
        ? `Mislukt: ${status.error}`
        : status
          ? ready && status.warningFlags === 4
            ? "Klaar; runtimewaarden gewijzigd"
            : translatePhase(status.phase)
          : "Status nog niet opgehaald";
  const crcLabel = getOduEepromCrcLabel(status);
  const identityParts = [];
  if (status?.identity?.model) identityParts.push(status.identity.model);
  if (status?.identity?.pcbProgram) identityParts.push(`PCB ${status.identity.pcbProgram}`);
  if (status?.identity?.eepromProgramRaw) identityParts.push(`EEPROM ${status.identity.eepromProgramRaw}`);

  return `
    <article class="oq-odu-eeprom-device${active ? " is-active" : ""}${ready ? " is-ready" : ""}">
      <div class="oq-odu-eeprom-device-head">
        <div>
          <span class="oq-helper-label">HP${hp}</span>
          <h4>ODU EEPROM-momentopname</h4>
          <p>${escapeHtml(identityParts.join(" · ") || "Firmware- en modelinformatie worden met de snapshot uitgelezen.")}</p>
        </div>
        <span class="oq-odu-eeprom-state${ready && !status?.crc?.valid ? " is-warning" : ""}">${escapeHtml(statusLabel)}</span>
      </div>
      <div class="oq-odu-eeprom-progress" role="progressbar" aria-label="Uitleesvoortgang HP${hp}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
        <span style="width:${progress}%"></span>
      </div>
      <div class="oq-odu-eeprom-meta">
        <span>${active ? `${status.registersRead}/${status.registerCount} EEPROM-registers` : ready ? "512/512 EEPROM-registers" : "Registerbereik 3000..3511"}</span>
        ${crcLabel ? `<strong class="${status.crc.matchesStoredEeprom ? "" : "is-warning"}">${escapeHtml(crcLabel)}</strong>` : ""}
      </div>
      <div class="oq-odu-eeprom-actions">
        <button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="start-odu-eeprom-dump" data-hp="${hp}" ${busy || active || unavailable ? "disabled" : ""}>${active ? "Bezig met uitlezen" : ready ? "Opnieuw uitlezen" : "EEPROM uitlezen"}</button>
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="download-odu-eeprom-dump" data-hp="${hp}" ${busy || !ready ? "disabled" : ""}>JSON downloaden</button>
      </div>
    </article>
  `;
}

export function renderOduEepromDumpPanel() {
  const feedback = state.oduEepromDumpError
    ? `<p class="oq-odu-eeprom-feedback is-error" role="alert">${escapeHtml(state.oduEepromDumpError)}</p>`
    : state.oduEepromDumpNotice
      ? `<p class="oq-odu-eeprom-feedback" role="status">${escapeHtml(state.oduEepromDumpNotice)}</p>`
      : "";
  return `
    <div class="oq-odu-eeprom-shell">
      <div class="oq-odu-eeprom-callout">
        <strong>Alleen-lezen diagnose</strong>
        <p>De export leest de actuele EEPROM-shadow en schrijft geen ODU-registers. De uitlezing kan circa 20 seconden duren.</p>
      </div>
      ${feedback}
      <div class="oq-odu-eeprom-grid">
        ${getOduEepromDumpHpIndexes().map((hp) => renderHpPanel(hp)).join("")}
      </div>
      <button class="oq-helper-button oq-helper-button--ghost oq-odu-eeprom-refresh" type="button" data-oq-action="refresh-odu-eeprom-dump" ${state.oduEepromDumpFetchPromise ? "disabled" : ""}>Status vernieuwen</button>
    </div>
  `;
}

const actionHandlers = {
  "start-odu-eeprom-dump": (button) => startDump(button),
  "download-odu-eeprom-dump": (button) => downloadDump(button),
  "refresh-odu-eeprom-dump": () => refreshOduEepromDumpStatuses({ force: true }),
};

export function handleOduEepromDumpAction(action, button) {
  return invokeActionMap(actionHandlers, action, button);
}
