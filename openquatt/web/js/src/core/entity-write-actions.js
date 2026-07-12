import { hasEntity } from "./app-shared.js";
import { CURVE_POINTS, ENTITY_DEFS, FIRMWARE_ENTITY_KEYS, FLOW_SETTING_KEYS, getOduRuntimeFrequencyButtonHp, getOduRuntimeFrequencyHpKeys, HEADER_ENTITY_KEYS, LIMIT_KEYS, ODU_RUNTIME_FREQUENCY_BUTTON_KEYS, OPENQUATT_RESUME_CLEAR_VALUE, OVERVIEW_KEYS, POWER_HOUSE_KEYS, QUICK_STEPS } from "./config.js";
import { beginDeviceReconnect } from "./device-reconnect.js";
import { buildEntityPath, isCurveMode } from "./domain-helpers.js";
import { formatOpenQuattResumeDateTime, getEntityValue, normalizeDateTimeValue, normalizeNumber, normalizeTimeValue, toDateTimeInputValue } from "./entity-store.js";
import { getSettingsRefreshKeys, refreshEntities, syncEntities } from "./entity-sync.js";
import { setAppView } from "./navigation.js";
import { render } from "./render-scheduler.js";
import { state } from "./state.js";
import { pollFirmwareUpdateState, primeFirmwareUpdateState } from "../features/firmware-update.js";
import { updateFirmwareState } from "./feature-state.js";
import { stopLoginAuthStatusPolling } from "../features/security-actions.js";
import { refreshSettingsStorageStateSoon, SETTINGS_STORAGE_KEYS } from "../features/storage-history.js";
import { clearWebServerLogOutput, refreshWebServerLogHistory } from "../features/webserver-logs.js";

export async function commitSelect(key, option) {
  const entity = ENTITY_DEFS[key];
  state.busyAction = `save-${key}`;
  state.controlNotice = "";
  state.controlError = "";
  state.entities[key] = {
    ...(state.entities[key] || {}),
    state: option,
    value: option,
  };
  render();

  try {
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(option)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    delete state.drafts[key];
    delete state.inputDrafts[key];
    state.controlNotice = `${entity.name} bijgewerkt.`;
    if (key === "firmwareUpdateChannel") {
      updateFirmwareState({ updateInstallCompleted: false, updateInstallCompletedVersion: "" });
      state.entities.firmwareUpdateChannel = {
        ...(state.entities.firmwareUpdateChannel || {}),
        state: option,
        value: option,
      };
      primeFirmwareUpdateState(option);
      render();
      await pollFirmwareUpdateState();
      state.controlNotice = "Releasekanaal bijgewerkt.";
    } else if (key === "debugLevel") {
      state.controlNotice = "Logger level bijgewerkt.";
      if (state.systemModal === "webserver-logs") {
        void refreshWebServerLogHistory();
      }
    } else if (key === "webServerLogHistoryEnabled") {
      const selectedEnabled = ["1", "on", "true"].includes(String(option).toLowerCase());
      if (selectedEnabled) {
        state.webServerLogHistoryLoaded = false;
        void refreshWebServerLogHistory();
      } else {
        clearWebServerLogOutput();
      }
      if (state.systemModal === "webserver-logs") {
        render();
      }
    } else if (state.appView === "settings") {
      await refreshEntities(getSettingsRefreshKeys(), "all");
    } else {
      await refreshEntities(["setupComplete", "strategy", "openquattEnabled", "manualCoolingEnable", "silentModeOverride", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS], "state");
    }
    if (key === "strategy" && state.appView !== "settings") {
      await refreshEntities(isCurveMode(option) ? CURVE_POINTS.map((point) => point.key) : POWER_HOUSE_KEYS, "state");
    }
  } catch (error) {
    state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function commitSwitch(key, enabled) {
  const entity = ENTITY_DEFS[key];
  if (!entity) {
    return;
  }

  state.busyAction = `switch-${key}`;
  state.controlNotice = "";
  state.controlError = "";
  render();

  try {
    const action = enabled ? "turn_on" : "turn_off";
    const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.entities[key] = {
      ...(state.entities[key] || {}),
      value: enabled,
      state: enabled,
    };
    state.controlNotice = `${entity.name} ${enabled ? "ingeschakeld" : "uitgeschakeld"}.`;
    state.busyAction = "";
    if (state.appView === "overview") {
      await refreshEntities([...OVERVIEW_KEYS, ...HEADER_ENTITY_KEYS, "setupComplete", ...FIRMWARE_ENTITY_KEYS], "state");
    } else if (state.appView === "settings") {
      await refreshEntities(getSettingsRefreshKeys(), "all");
      if (SETTINGS_STORAGE_KEYS.includes(key)) {
        refreshSettingsStorageStateSoon();
      }
    } else {
      await refreshEntities(["setupComplete", "strategy", "openquattEnabled", "manualCoolingEnable", "silentModeOverride", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS], "state");
    }
    if (key === "webServerLogHistoryEnabled") {
      if (enabled) {
        state.webServerLogHistoryLoaded = false;
        void refreshWebServerLogHistory();
      } else {
        clearWebServerLogOutput();
      }
      if (state.systemModal === "webserver-logs") {
        render();
      }
    }
    render();
  } catch (error) {
    state.controlError = `${entity.name} aanpassen mislukt (${error.message}).`;
    render();
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function commitNumber(key, value, successNotice = "") {
  const entity = ENTITY_DEFS[key];
  const normalized = normalizeNumber(key, value);
  state.busyAction = `save-${key}`;
  state.controlNotice = "";
  state.controlError = "";
  state.inputDrafts[key] = String(value ?? "");
  state.drafts[key] = normalized;
  render();

  try {
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    delete state.drafts[key];
    delete state.inputDrafts[key];
    state.controlNotice = successNotice || `${entity.name} bijgewerkt.`;
    await refreshEntities(
      state.appView === "settings"
        ? getSettingsRefreshKeys()
        : [...new Set([key, "setupComplete", "strategy", ...FLOW_SETTING_KEYS, ...LIMIT_KEYS])]
      ,
      "state"
    );
  } catch (error) {
    state.inputDrafts[key] = String(normalized).replace(".", ",");
    state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function commitTime(key, value) {
  const entity = ENTITY_DEFS[key];
  const normalized = normalizeTimeValue(value);
  state.busyAction = `save-${key}`;
  state.controlNotice = "";
  state.controlError = "";
  render();

  try {
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.controlNotice = `${entity.name} bijgewerkt.`;
    await refreshEntities(
      state.appView === "settings"
        ? getSettingsRefreshKeys()
        : [key, "setupComplete"],
      "state"
    );
  } catch (error) {
    state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function commitText(key, value) {
  const entity = ENTITY_DEFS[key];
  const normalized = String(value || "").trim();
  state.busyAction = `save-${key}`;
  state.controlNotice = "";
  state.controlError = "";
  state.inputDrafts[key] = String(value ?? "");
  state.drafts[key] = normalized;
  render();

  try {
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.entities[key] = {
      ...(state.entities[key] || {}),
      value: normalized,
      state: normalized,
    };
    delete state.drafts[key];
    delete state.inputDrafts[key];
    state.controlNotice = `${entity.name} bijgewerkt.`;
    await refreshEntities(
      state.appView === "settings"
        ? getSettingsRefreshKeys()
        : [key, "setupComplete"],
      "state"
    );
  } catch (error) {
    state.inputDrafts[key] = normalized;
    state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function postDateTimeValue(key, value) {
  const entity = ENTITY_DEFS[key];
  const normalized = normalizeDateTimeValue(value) || OPENQUATT_RESUME_CLEAR_VALUE;
  const response = await fetch(
    `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
    { method: "POST" }
  );
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  state.entities[key] = {
    ...(state.entities[key] || {}),
    value: normalized,
    state: normalized,
  };
  return normalized;
}

export async function postSwitchState(key, enabled) {
  const entity = ENTITY_DEFS[key];
  const action = enabled ? "turn_on" : "turn_off";
  const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  state.entities[key] = {
    ...(state.entities[key] || {}),
    value: enabled,
    state: enabled,
  };
  return enabled;
}

export async function refreshOpenQuattControlState() {
  await refreshEntities(
    [...new Set([...OVERVIEW_KEYS, ...HEADER_ENTITY_KEYS, "setupComplete", ...FIRMWARE_ENTITY_KEYS])],
    "state"
  );
}

export async function commitDateTime(key, value) {
  const entity = ENTITY_DEFS[key];
  const normalized = normalizeDateTimeValue(value);
  state.busyAction = `save-${key}`;
  state.controlNotice = "";
  state.controlError = "";
  render();

  try {
    await postDateTimeValue(key, normalized);
    state.controlNotice = `${entity.name} bijgewerkt.`;
    await refreshEntities(
      state.appView === "settings"
        ? getSettingsRefreshKeys()
        : [key, "setupComplete", "openquattEnabled"],
      "state"
    );
  } catch (error) {
    state.controlError = `${entity.name} kon niet worden bijgewerkt. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function commitOpenQuattRegulationPause(rawResumeValue) {
  const scheduledValue = normalizeDateTimeValue(rawResumeValue);
  if (rawResumeValue && !scheduledValue) {
    state.controlError = "Kies een geldig hervatmoment om automatisch weer in te schakelen.";
    render();
    return;
  }
  if (scheduledValue && !hasEntity("openquattResumeAt")) {
    state.controlError = "Automatisch hervatten is op deze firmware nog niet beschikbaar.";
    render();
    return;
  }

  state.busyAction = "openquatt-regulation";
  state.controlNotice = "";
  state.controlError = "";
  render();

  let resumeScheduled = false;
  try {
    if (hasEntity("openquattResumeAt")) {
      await postDateTimeValue("openquattResumeAt", scheduledValue || OPENQUATT_RESUME_CLEAR_VALUE);
      resumeScheduled = Boolean(scheduledValue);
    }
    await postSwitchState("openquattEnabled", false);
    state.pauseResumeDraft = scheduledValue ? toDateTimeInputValue(scheduledValue) : "";
    state.systemModal = "";
    state.controlNotice = scheduledValue
      ? `Openquatt regeling is tijdelijk uitgeschakeld tot ${formatOpenQuattResumeDateTime(scheduledValue)}.`
      : "Openquatt regeling is uitgeschakeld zonder eindmoment.";
    await refreshOpenQuattControlState();
  } catch (error) {
    if (resumeScheduled && hasEntity("openquattResumeAt")) {
      try {
        await postDateTimeValue("openquattResumeAt", OPENQUATT_RESUME_CLEAR_VALUE);
      } catch (_rollbackError) {
        // Best effort rollback to avoid leaving a stray resume moment behind.
      }
    }
    state.controlError = `Openquatt regeling kon niet worden bijgewerkt. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function commitOpenQuattRegulationResumeNow() {
  state.busyAction = "openquatt-regulation";
  state.controlNotice = "";
  state.controlError = "";
  render();

  try {
    await postSwitchState("openquattEnabled", true);
    state.pauseResumeDraft = "";
    state.systemModal = "";
    state.controlNotice = "Openquatt regeling is weer actief.";
    await refreshOpenQuattControlState();
  } catch (error) {
    state.controlError = `Openquatt regeling kon niet worden ingeschakeld. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export async function triggerButton(action) {
  const entity = ENTITY_DEFS[action];
  state.busyAction = action;
  state.controlError = "";
  state.controlNotice = "";
  render();

  try {
    const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    state.controlNotice = action === "apply"
      ? "Setup gemarkeerd als afgerond."
      : "Quick Start teruggezet naar het begin. Huidige tuningwaarden blijven voorlopig staan.";
    await refreshEntities(["setupComplete"], "state");
    if (action === "reset") {
      state.currentStep = QUICK_STEPS[0].id;
      state.quickStartModalMode = "wizard";
      state.quickStartModalOpen = true;
    }
    state.quickStartModalOpen = action !== "apply";
    setAppView("overview", { syncMode: "replace" });
    syncEntities({ forceFast: true });
  } catch (error) {
    state.controlError = `Actie mislukt voor "${entity.name}". ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
  }
}

export function queueHpWaterCalibrationApplyAnchor() {
  window.requestAnimationFrame(() => {
    if (!state.root || state.systemModal !== "service-task-hp-water-calibration") {
      return;
    }
    const scroller = state.root.querySelector("[data-oq-service-task-scroller]");
    const target = state.root.querySelector("[data-oq-hp-water-calibration-actions]");
    if (!scroller || !target) {
      return;
    }
    const scrollerRect = scroller.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const nextTop = scroller.scrollTop + targetRect.top - scrollerRect.top - 24;
    scroller.scrollTop = Math.max(0, nextTop);
  });
}

export async function triggerNamedButton(key, options = {}) {
  const entity = ENTITY_DEFS[key];
  if (!entity) {
    return;
  }
  state.busyAction = key;
  state.controlError = "";
  state.controlNotice = "";
  render();

  try {
    const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
      method: "POST",
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const keepCommissioningModalOpen = [
      "commissioningCm100Start",
      "commissioningCm100Stop",
      "boilerPowerTestStart",
      "boilerPowerTestAbort",
      "boilerPowerTestApply",
      "flowAutotuneStart",
      "flowAutotuneAbort",
      "flowAutotuneApply",
      "airPurgeStart",
      "airPurgeAbort",
      "hpWaterCalibrationStart",
      "hpWaterCalibrationAbort",
      "hpWaterCalibrationApply",
      "manualFlowStart",
      "manualFlowAbort",
      "manualFlowApplyHeating",
      "manualFlowApplyCooling",
      "manualHpStart",
      "manualHpAbort",
      "trendHistoryFlush",
      "decisionLogHistoryFlush",
      "decisionLogHistoryClear",
      "lifetimeEnergyHistoryCapture",
      "lifetimeEnergyHistoryClear",
    ].includes(key) || ODU_RUNTIME_FREQUENCY_BUTTON_KEYS.has(key);
    if (!keepCommissioningModalOpen) {
      stopLoginAuthStatusPolling();
      state.systemModal = "";
    }
    state.controlNotice = options.successNotice || `${entity.name} gestart.`;
    if (options.reconnectMode) {
      beginDeviceReconnect(options.reconnectMode);
    }
    if (Array.isArray(options.refreshKeys) && options.refreshKeys.length) {
      const refreshDelayMs = Number(options.refreshDelayMs || 0);
      if (Number.isFinite(refreshDelayMs) && refreshDelayMs > 0) {
        await new Promise((resolve) => window.setTimeout(resolve, refreshDelayMs));
      }
      await refreshEntities(options.refreshKeys, "state");
    }
  } catch (error) {
    if (key === "commissioningCm100Start") {
      state.pendingCommissioningCm100Start = false;
      state.commissioningTaskLock = "";
    } else if (key === "boilerPowerTestStart") {
      state.pendingBoilerPowerTestStart = false;
      state.commissioningTaskLock = "";
    } else if (key === "flowAutotuneStart") {
      state.pendingFlowAutotuneStart = false;
      state.commissioningTaskLock = "";
    } else if (key === "airPurgeStart") {
      state.pendingAirPurgeStart = false;
      state.commissioningTaskLock = "";
    } else if (key === "hpWaterCalibrationStart") {
      state.pendingHpWaterCalibrationStart = false;
      state.commissioningTaskLock = "";
    } else if (key === "manualFlowStart") {
      state.pendingManualFlowStart = false;
      state.commissioningTaskLock = "";
    } else if (key === "manualHpStart") {
      state.pendingManualHpStart = false;
      state.commissioningTaskLock = "";
    }
    state.controlError = `${options.errorPrefix || `Actie mislukt voor "${entity.name}"`}. ${error.message}`;
  } finally {
    state.busyAction = "";
    render();
    if (key === "hpWaterCalibrationApply") {
      queueHpWaterCalibrationApplyAnchor();
    }
  }
}

export function updateCurveDraftFromPointer(clientY) {
  const svg = state.root ? state.root.querySelector(".oq-helper-curve-svg") : null;
  if (!svg || !state.draggingCurveKey) {
    return;
  }

  const rect = svg.getBoundingClientRect();
  const plotTop = 22;
  const plotHeight = 180;
  const localY = ((clientY - rect.top) / rect.height) * 240;
  const clampedY = Math.min(plotTop + plotHeight, Math.max(plotTop, localY));
  const value = 70 - ((clampedY - plotTop) / plotHeight) * 50;
  const normalized = normalizeNumber(state.draggingCurveKey, value);

  if (String(getEntityValue(state.draggingCurveKey)) !== String(normalized)) {
    state.drafts[state.draggingCurveKey] = normalized;
    render();
  }
}
