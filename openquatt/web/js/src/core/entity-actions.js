import { isTrendHistoryEnabled } from "./app-shared.js";
import { ENTITY_DEFS, getOduRuntimeFrequencyButtonHp, getOduRuntimeFrequencyHpKeys, INSTALLATION_MONITORING_STATE_KEYS, ODU_RUNTIME_FREQUENCY_BUTTON_KEYS, SETTINGS_GROUPS } from "./config.js";
import { isCurveMode } from "./domain-helpers.js";
import { formatValue, getCurveFallbackSuggestion, getEntityValue, getInputDraftValue, getNumberMeta, getOpenQuattPauseDraftValue, getOpenQuattPausePresetValue, normalizeDateTimeValue, normalizeNumber, normalizeTimeValue, parseLooseNumber } from "./entity-store.js";
import { syncEntities } from "./entity-sync.js";
import { commitDateTime, commitNumber, commitOpenQuattRegulationPause, commitOpenQuattRegulationResumeNow, commitSelect, commitSwitch, commitText, commitTime, triggerButton, triggerNamedButton, updateCurveDraftFromPointer } from "./entity-write-actions.js";
import { normalizeControlReplayTab, normalizeControlReplayWindow, setAppView, syncUrlAppView } from "./navigation.js";
import { state } from "./state.js";
import { ensureNativeFrontendLoaded, setDevPanelOpen, setHpLayoutMode, setHpVisualMode, setInterfacePanelOpen, setOverviewTheme, setSettingsGroup, setStoredSurface, syncSurfaceRuntime } from "./runtime.js";
import { setTrendWindowHours } from "./trend-window.js";
import { clearDebugRecordingDevicePollTimer, copyDebugRecordingBundle, downloadDebugRecordingBundle, freezeDebugRecording, refreshDebugRecordingDeviceStatus, scheduleDebugRecordingDeviceStatusPoll, setDebugRecordingSelectedMinutes, startDebugRecording, startRollingDebugRecording, stopDebugRecording } from "../features/debug-recording.js";
import { hydrateFirmwareUpdateModal, installFirmwareConnectionSwitch, installFirmwareTestUpdate, installFirmwareTopologySwitch, installFirmwareUpdate, triggerFirmwareUpdateCheck, uploadFirmwareUpdate } from "../features/firmware-actions.js";
import { getFirmwareTestAssetUrls, getFirmwareTestPrNumber, getFirmwareTestTargetModel, resetFirmwareManualUploadSelection, resetFirmwareTestSelection } from "../features/firmware-update.js";
import { commitMqttConfig, commitMqttInputEnabled, copyMqttTopic, refreshMqttStatus, syncMqttDraftFromInput, syncMqttDraftsFromStatus } from "../features/mqtt-actions.js";
import { isMqttInputEnabled } from "../features/mqtt.js";
import { abortQuickStartFlowTest, applyQuickStartFlowSourceConfiguration, applyQuickStartThermostatSourceConfiguration, refreshQuickStartFlowSignal, refreshQuickStartStepHydration, startQuickStartFlowTest } from "../features/quickstart-actions.js";
import { selectQuickStepByOffset } from "../features/quickstart.js";
import { commitDisableApiSecurity, commitDisableWebAuth, commitEnableApiSecurity, commitRotateApiSecurity, commitWebAuthChanges, copyApiSecurityKey, refreshApiSecurityStatus, refreshLoginModalAuthStatus, restartForApiSecurityChange, stopLoginAuthStatusPolling, syncAuthDraftsFromStatus } from "../features/security-actions.js";
import { clearSettingsBackupDraft, exportEnergyHistoryRecords, exportSettingsBackup, getSettingsStorageRefreshKeys, handleSettingsBackupFileSelection, importEnergyHistoryRecords, normalizeEnergyHistoryExportMode, openEnergyHistoryImportFilePicker, refreshEnergyHistoryData, refreshSettingsStorageState, refreshSettingsStorageStateSoon, refreshTrendHistoryData, resetEnergyHistoryImportState, restoreSettingsBackup } from "../features/storage-history.js";
import { clearWebServerLogOutput, copyWebServerLogOutput, openWebServerLogsModal } from "../features/webserver-logs.js";
import { handleOduRuntimeFrequencyInputKeyDown } from "../settings/installation.js";
import { handleEnergyHistoryPointerMove, setEnergyHistoryPeriodToNow, setEnergyHistoryPeriodValue, setEnergyHistoryView, shiftEnergyHistoryPeriod } from "../views/energy.js";
import { escapeHtml } from "./html.js";
import { render } from "./render-scheduler.js";

  const CONTROL_REPLAY_CUSTOM_MAX_RANGE_MS = 7 * 24 * 60 * 60 * 1000;

  function setControlReplayGraphMinute(windowId) {
    state.controlReplayGraphMinute = windowId === "week"
      ? 1230
      : windowId === "today" || windowId === "yesterday"
      ? 720
      : 1000;
  }

  function parseControlReplayCustomDateTime(value) {
    const epochMs = new Date(String(value || "")).getTime();
    return Number.isFinite(epochMs) ? epochMs : Number.NaN;
  }

  export function handleFocusChange() {
    window.setTimeout(() => {
      const active = document.activeElement;
      state.focusedField = active && active.dataset ? active.dataset.oqField || "" : "";
      state.settingsInteractionLock = Boolean(active && active.closest && active.closest(".oq-ph-concept-hotspot"));
    }, 0);
  }

  export function handleSettingsInteractionStart(event) {
    if (event.target.closest(".oq-ph-concept-hotspot")) {
      state.settingsInteractionLock = true;
    }
  }

  export function handleSettingsInteractionEnd(event) {
    const hotspot = event.target.closest(".oq-ph-concept-hotspot");
    if (!hotspot) {
      return;
    }

    if (event.relatedTarget && hotspot.contains(event.relatedTarget)) {
      return;
    }

    const hoveredHotspot = state.root && state.root.querySelector(".oq-ph-concept-hotspot:hover");
    const focusedHotspot = document.activeElement && document.activeElement.closest
      ? document.activeElement.closest(".oq-ph-concept-hotspot")
      : null;

    state.settingsInteractionLock = Boolean(hoveredHotspot || focusedHotspot);
  }

  export function handleInput(event) {
    if (event.target.dataset.oqFirmwareConnectionConfirm) {
      state.firmwareConnectionSwitchConfirmed = Boolean(event.target.checked);
      render();
      return;
    }

    if (event.target.dataset.oqFirmwareTopologyConfirm) {
      state.firmwareTopologySwitchConfirmed = Boolean(event.target.checked);
      render();
      return;
    }

    if (event.target.dataset.oqFirmwareTestConfirm) {
      state.updateTestFirmwareConfirmed = Boolean(event.target.checked);
      state.updateTestFirmwareError = "";
      const section = event.target.closest(".oq-helper-modal-callout");
      const installButton = section?.querySelector('[data-oq-action="install-firmware-test"]');
      if (installButton) {
        installButton.disabled = !state.updateTestFirmwareConfirmed || !getFirmwareTestPrNumber();
      }
      section?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();
      return;
    }

    if (event.target.dataset.oqFirmwareTestPr) {
      state.updateTestFirmwarePr = String(event.target.value || "");
      state.updateTestFirmwareConfirmed = false;
      state.updateTestFirmwareError = "";
      state.updateTestFirmwareBuild = null;
      const section = event.target.closest(".oq-helper-modal-callout");
      const confirmInput = section?.querySelector('[data-oq-firmware-test-confirm="true"]');
      if (confirmInput) {
        confirmInput.checked = false;
      }
      const installButton = section?.querySelector('[data-oq-action="install-firmware-test"]');
      if (installButton) {
        installButton.disabled = true;
      }
      const target = getFirmwareTestTargetModel();
      const urls = getFirmwareTestAssetUrls(getFirmwareTestPrNumber(), target);
      const assetNote = section?.querySelector('[data-oq-firmware-test-asset-note="true"]');
      if (assetNote) {
        assetNote.textContent = urls ? target.otaFileName : "Vul een PR-nummer in om de OTA-build te kiezen.";
      }
      section?.querySelector('[data-oq-firmware-test-build-row="true"]')?.remove();
      section?.querySelector('[data-oq-firmware-test-runtime-error="true"]')?.remove();
      return;
    }

    const mqttField = event.target.dataset.oqMqttField;
    if (mqttField) {
      syncMqttDraftFromInput(event.target);
      return;
    }

    const field = event.target.dataset.oqField;
    if (!field) {
      if (event.target.dataset.oqQuickstartCicUrl !== undefined) {
        state.quickStartCicFeedUrlDraft = String(event.target.value || "");
        return;
      }
      if (event.target.dataset.oqQuickstartThermostatSource !== undefined) {
        state.quickStartThermostatSourceDraft = String(event.target.value || "");
        render();
        return;
      }
      const authField = event.target.dataset.oqAuthField;
      if (authField) {
        state.authNotice = "";
        state.authError = "";
        if (authField === "username") {
          state.authDraftUsername = String(event.target.value || "");
        } else if (authField === "currentPassword") {
          state.authDraftCurrentPassword = String(event.target.value || "");
        } else if (authField === "newPassword") {
          state.authDraftNewPassword = String(event.target.value || "");
        } else if (authField === "confirmPassword") {
          state.authDraftConfirmPassword = String(event.target.value || "");
        }
        return;
      }

      return;
    }

    if (event.target.dataset.oqPauseDraft) {
      state.pauseResumeDraft = String(event.target.value || "");
      return;
    }

    if (ENTITY_DEFS[field]?.domain === "text") {
      state.inputDrafts[field] = String(event.target.value || "");
      return;
    }

    if (event.target.type === "range" || event.target.type === "number") {
      if (event.target.type === "number") {
        state.inputDrafts[field] = event.target.value;
      }

      const numeric = parseLooseNumber(event.target.value);
      if (!Number.isNaN(numeric)) {
        const normalized = normalizeNumber(field, event.target.value);
        state.drafts[field] = normalized;
        if (event.target.type === "range") {
          const sliderValue = event.target.closest(".oq-helper-slider-field")?.querySelector(".oq-helper-slider-meta strong");
          if (sliderValue) {
            sliderValue.textContent = formatValue(field, normalized);
          }
        }
      }
    }
  }

  export function handleKeyDown(event) {
    handleOduRuntimeFrequencyInputKeyDown(event);
  }

  export function getWheelDeltaPixels(event, value) {
    if (event.deltaMode === 1) {
      return value * 16;
    }
    if (event.deltaMode === 2) {
      return value * window.innerHeight;
    }
    return value;
  }

  export function getWheelScrollContainer(element) {
    let node = element ? element.parentElement : null;
    while (node && node !== document.body && node !== document.documentElement) {
      const style = window.getComputedStyle(node);
      const canScrollY = /(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight;
      const canScrollX = /(auto|scroll)/.test(style.overflowX) && node.scrollWidth > node.clientWidth;
      if (canScrollY || canScrollX) {
        return node;
      }
      node = node.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  }

  export function handleWheel(event) {
    const input = event.target && event.target.closest
      ? event.target.closest('input[type="number"]')
      : null;
    if (!input || !state.root || !state.root.contains(input) || document.activeElement !== input) {
      return;
    }

    event.preventDefault();
    input.blur();

    const scroller = getWheelScrollContainer(input);
    if (scroller && typeof scroller.scrollBy === "function") {
      scroller.scrollBy({
        left: getWheelDeltaPixels(event, event.deltaX || 0),
        top: getWheelDeltaPixels(event, event.deltaY || 0),
        behavior: "auto",
      });
    }
  }

  export function handleChange(event) {
    if (event.target.dataset.oqDevControl === "boiler" && typeof window.__OQ_SET_MOCK_BOILER__ === "function") {
      window.__OQ_SET_MOCK_BOILER__(event.target.value);
      return;
    }

    if (event.target.dataset.oqBackupFileInput) {
      const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
      event.target.value = "";
      void handleSettingsBackupFileSelection(file);
      return;
    }

    if (event.target.dataset.oqFirmwareUploadFileInput) {
      const file = event.target.files && event.target.files[0] ? event.target.files[0] : null;
      event.target.value = "";
      if (file) {
        state.firmwareAdvancedOpen = true;
        state.updateManualUploadOpen = true;
        state.updateManualUploadFile = file;
        state.updateManualUploadFileName = file.name || "";
        state.updateManualUploadError = "";
      } else {
        resetFirmwareManualUploadSelection();
      }
      render();
      return;
    }

    if (event.target.dataset.oqEnergyHistoryPeriodInput) {
      if (typeof setEnergyHistoryPeriodValue === "function") {
        setEnergyHistoryPeriodValue(event.target.dataset.oqEnergyHistoryPeriodInput, event.target.value);
      }
      return;
    }

    if (event.target.dataset.oqEnergyHistoryExportMode !== undefined) {
      state.energyHistoryExportMode = normalizeEnergyHistoryExportMode(event.target.value);
      state.energyHistoryExportError = "";
      state.energyHistoryExportNotice = "";
      render();
      return;
    }

    const field = event.target.dataset.oqField;
    if (!field) {
      return;
    }

    const entity = ENTITY_DEFS[field];
    if (!entity) {
      return;
    }

    if (entity.domain === "select") {
      commitSelect(field, String(event.target.value));
      return;
    }

    if (entity.domain === "number") {
      commitNumber(field, event.target.value);
      return;
    }

    if (entity.domain === "text") {
      commitText(field, event.target.value);
      return;
    }

    if (entity.domain === "time") {
      const normalized = normalizeTimeValue(event.target.value);
      if (!normalized) {
        state.controlError = `${entity.name} verwacht tijd als HH:MM.`;
        render();
        return;
      }
      commitTime(field, normalized);
      return;
    }

    if (entity.domain === "datetime") {
      const normalized = normalizeDateTimeValue(event.target.value);
      if (!normalized) {
        state.controlError = `${entity.name} verwacht datum en tijd.`;
        render();
        return;
      }
      commitDateTime(field, normalized);
      return;
    }

  }

  export function handleClick(event) {
    const dateTimeControl = event.target.closest(".oq-settings-control--time, .oq-settings-control--datetime");
    if (dateTimeControl) {
      const pickerInput = dateTimeControl.querySelector('input[data-oq-field]');
      if (pickerInput && (pickerInput.type === "time" || pickerInput.type === "datetime-local") && typeof pickerInput.showPicker === "function") {
        try {
          pickerInput.showPicker();
        } catch (_error) {
          // Ignore browsers that block this call.
        }
      }
    }

    const infoButton = event.target.closest('[data-oq-action="toggle-settings-info"]');
    const infoWrap = event.target.closest("[data-oq-settings-info]");
    const helperHub = event.target.closest(".oq-helper-hub");
    const controlReplayPeriodMenu = event.target.closest("[data-oq-control-replay-period-menu]");
    const modalBackdrop = event.target.closest("[data-oq-modal]");
    if (infoButton) {
      const infoId = infoButton.dataset.infoId || "";
      state.settingsInfoOpen = state.settingsInfoOpen === infoId ? "" : infoId;
      render();
      return;
    }

    const button = event.target.closest("[data-oq-action]");
    const clickedOutsideInterfacePanel = state.interfacePanelOpen && !helperHub;
    if (!button) {
      let shouldRender = false;
      if (state.settingsInfoOpen && !infoWrap) {
        state.settingsInfoOpen = "";
        shouldRender = true;
      }
      if (clickedOutsideInterfacePanel) {
        setInterfacePanelOpen(false);
        shouldRender = true;
      }
      if (state.controlReplayPeriodMenuOpen && !controlReplayPeriodMenu) {
        state.controlReplayPeriodMenuOpen = false;
        state.controlReplayCustomPeriodOpen = false;
        shouldRender = true;
      }
      if (modalBackdrop && event.target === modalBackdrop) {
        if (modalBackdrop.dataset.oqModal === "quickstart-forced") {
          return;
        }
        if (state.updateModalOpen) {
          state.updateModalOpen = false;
          state.firmwareAdvancedOpen = false;
          state.firmwareConnectionSwitchOpen = false;
          state.firmwareTopologySwitchOpen = false;
          state.updateManualUploadOpen = false;
          state.updateTestFirmwareOpen = false;
          state.firmwareConnectionSwitchConfirmed = false;
          state.firmwareTopologySwitchConfirmed = false;
          resetFirmwareManualUploadSelection();
          resetFirmwareTestSelection();
          shouldRender = true;
        }
        if (state.systemModal) {
          clearSettingsBackupDraft();
          stopLoginAuthStatusPolling();
          state.systemModal = "";
          shouldRender = true;
        }
      }
      if (shouldRender) {
        render();
      }
      return;
    }
    if (clickedOutsideInterfacePanel && button.dataset.oqAction !== "toggle-interface-panel") {
      setInterfacePanelOpen(false);
    }

    const action = button.dataset.oqAction;
    if (action === "set-mock-boiler" && typeof window.__OQ_SET_MOCK_BOILER__ === "function") {
      window.__OQ_SET_MOCK_BOILER__(button.dataset.boilerMode || "off");
      return;
    }

    if (action === "toggle-interface-panel") {
      setInterfacePanelOpen(!state.interfacePanelOpen);
      render();
      return;
    }

    if (action === "toggle-dev-panel") {
      setDevPanelOpen(!state.devPanelOpen);
      render();
      return;
    }

    if (action === "toggle-installation-monitoring-details") {
      event.preventDefault();
      const details = button.closest(".oq-settings-monitoring-details");
      state.installationMonitoringDetailsOpen = !(details && details.hasAttribute("open"));
      render();
      return;
    }

    if (action === "toggle-integration-diagnostics") {
      event.preventDefault();
      const details = button.closest(".oq-settings-integration-diagnostics");
      state.integrationDiagnosticsOpen = !(details && details.hasAttribute("open"));
      render();
      return;
    }

    if (action === "toggle-odu-runtime-frequency-details") {
      event.preventDefault();
      const details = button.closest(".oq-settings-odu-runtime-details");
      state.oduRuntimeFrequencyDetailsOpen = !(details && details.hasAttribute("open"));
      render();
      return;
    }

    if (action === "toggle-storage-technical-details") {
      event.preventDefault();
      const details = button.closest(".oq-settings-storage-technical");
      state.settingsStorageDetailsOpen = !(details && details.hasAttribute("open"));
      render();
      return;
    }

    if (action === "select-view") {
      if ((button.dataset.viewId || "") === "diagnosis" && !isTrendHistoryEnabled()) {
        return;
      }
      const nextView = button.dataset.viewId || "overview";
      setAppView(nextView, { syncMode: "push" });
      render();
      syncEntities({ forceFast: true });
      return;
    }

    if (action === "select-trend-window") {
      if (button.disabled) {
        return;
      }
      setTrendWindowHours(Number(button.dataset.trendHours || 24));
      render();
      void refreshTrendHistoryData({ force: true }).then((changed) => {
        if (changed) {
          render();
        }
      });
      return;
    }

    if (action === "select-energy-history-view") {
      if (button.disabled || typeof setEnergyHistoryView !== "function") {
        return;
      }
      setEnergyHistoryView(button.dataset.energyHistoryView || "day");
      return;
    }

    if (action === "shift-energy-history-period") {
      if (button.disabled || typeof shiftEnergyHistoryPeriod !== "function") {
        return;
      }
      shiftEnergyHistoryPeriod(state.energyHistoryView || "day", button.dataset.energyHistoryDirection || "1");
      return;
    }

    if (action === "select-energy-history-now") {
      if (button.disabled || typeof setEnergyHistoryPeriodToNow !== "function") {
        return;
      }
      setEnergyHistoryPeriodToNow(state.energyHistoryView || "day");
      return;
    }

    if (action === "select-settings-group") {
      setSettingsGroup(button.dataset.groupId || SETTINGS_GROUPS[0].id);
      render();
      syncEntities({ forceFast: true });
      return;
    }

    if (action === "open-update-modal") {
      state.updateModalOpen = true;
      render();
      void hydrateFirmwareUpdateModal();
      return;
    }

    if (action === "open-webserver-log-modal") {
      openWebServerLogsModal();
      return;
    }

    if (action === "open-debug-recording-modal") {
      state.systemModal = "debug-recording";
      state.debugRecordingError = "";
      state.debugRecordingNotice = "";
      render();
      void refreshDebugRecordingDeviceStatus();
      return;
    }

    if (action === "open-login-modal") {
      state.systemModal = "login";
      syncAuthDraftsFromStatus();
      state.authNotice = "";
      state.authError = "";
      render();
      void refreshLoginModalAuthStatus({ poll: true });
      return;
    }

    if (action === "open-api-security-modal") {
      state.systemModal = "api-security";
      state.apiSecurityNotice = "";
      state.apiSecurityError = "";
      render();
      void refreshApiSecurityStatus({ force: true });
      return;
    }

    if (action === "open-mqtt-modal") {
      state.systemModal = "mqtt";
      syncMqttDraftsFromStatus();
      state.mqttDraftDirty = false;
      state.mqttNotice = "";
      state.mqttError = "";
      render();
      void refreshMqttStatus({ force: true });
      return;
    }

    if (action === "open-mqtt-sensors-modal") {
      state.systemModal = "mqtt-sensors";
      state.mqttNotice = "";
      state.mqttError = "";
      state.mqttCopiedTopicKey = "";
      state.mqttExpandedTopicKey = "";
      state.mqttInputToggleBusyKey = "";
      render();
      void refreshMqttStatus({ force: true }).then((changed) => {
        if (changed && state.systemModal === "mqtt-sensors") {
          render();
        }
      });
      return;
    }

    if (action === "toggle-mqtt-sensor-topic") {
      const topicKey = button.dataset?.oqMqttTopicKey || "cooling_dew_point";
      state.mqttExpandedTopicKey = state.mqttExpandedTopicKey === topicKey ? "" : topicKey;
      state.mqttError = "";
      render();
      return;
    }

    if (action === "toggle-mqtt-input") {
      const topicKey = button.dataset?.oqMqttTopicKey || "cooling_dew_point";
      void commitMqttInputEnabled(topicKey, !isMqttInputEnabled(topicKey));
      return;
    }

    if (action === "copy-mqtt-topic" || action === "copy-mqtt-dew-topic") {
      void copyMqttTopic(button.dataset?.oqMqttTopicKey || "cooling_dew_point");
      return;
    }

    if (action === "save-mqtt-config") {
      void commitMqttConfig();
      return;
    }

    if (action === "copy-api-security-key") {
      void copyApiSecurityKey();
      return;
    }

    if (action === "enable-api-security") {
      void commitEnableApiSecurity();
      return;
    }

    if (action === "rotate-api-security") {
      void commitRotateApiSecurity();
      return;
    }

    if (action === "disable-api-security") {
      void commitDisableApiSecurity();
      return;
    }

    if (action === "restart-api-security") {
      void restartForApiSecurityChange();
      return;
    }

    if (action === "flush-trend-history") {
      void triggerNamedButton("trendHistoryFlush", {
        successNotice: "Diagnosegeschiedenis is opgeslagen.",
        errorPrefix: "Diagnosegeschiedenis kon niet worden opgeslagen",
        refreshKeys: getSettingsStorageRefreshKeys(),
        refreshDelayMs: 500,
      }).then(() => {
        refreshSettingsStorageStateSoon(undefined, { forceTrendHistory: true });
      });
      return;
    }

    if (action === "save-lifetime-energy-history") {
      void triggerNamedButton("lifetimeEnergyHistoryCapture", {
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
      return;
    }

    if (action === "clear-lifetime-energy-history") {
      if (!window.confirm("Energiehistorie wissen?\n\nAlle bewaarde dagtotalen worden verwijderd. Dit heeft geen invloed op de werking van je warmtepomp.")) {
        return;
      }
      void triggerNamedButton("lifetimeEnergyHistoryClear", {
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
      return;
    }

    if (action === "select-energy-history-import-file") {
      openEnergyHistoryImportFilePicker();
      return;
    }

    if (action === "clear-energy-history-import-file") {
      resetEnergyHistoryImportState();
      render();
      return;
    }

    if (action === "import-energy-history-file") {
      void importEnergyHistoryRecords();
      return;
    }

    if (action === "export-energy-history") {
      void exportEnergyHistoryRecords();
      return;
    }

    if (action === "open-history-storage-modal") {
      state.systemModal = "history-storage";
      render();
      void refreshSettingsStorageState({ forceMissing: true, forceTrendHistory: true, forceEnergyHistory: true }).finally(() => {
        if (state.systemModal === "history-storage") {
          render();
        }
      });
      refreshSettingsStorageStateSoon([1000, 3000, 7000]);
      return;
    }

    if (action === "open-connectivity-modal") {
      state.systemModal = "connectivity";
      render();
      return;
    }

    if (action === "open-restart-confirm") {
      state.systemModal = "restart-confirm";
      render();
      return;
    }

    if (action === "download-settings-backup") {
      void exportSettingsBackup();
      return;
    }

    if (action === "open-settings-backup-import") {
      state.systemModal = "settings-backup-import";
      render();
      return;
    }

    if (action === "open-silent-settings-modal") {
      state.systemModal = "silent-settings";
      render();
      return;
    }

    if (action === "open-openquatt-pause-modal") {
      state.pauseResumeDraft = getOpenQuattPauseDraftValue();
      state.systemModal = "openquatt-pause";
      render();
      return;
    }

    if (action === "enable-openquatt-now") {
      commitOpenQuattRegulationResumeNow();
      return;
    }

    if (action === "apply-openquatt-preset") {
      const presetValue = getOpenQuattPausePresetValue(button.dataset.pausePreset || "");
      state.pauseResumeDraft = presetValue;
      commitOpenQuattRegulationPause(presetValue);
      return;
    }

    if (action === "apply-openquatt-indefinite") {
      commitOpenQuattRegulationPause("");
      return;
    }

    if (action === "apply-openquatt-custom-pause") {
      if (!String(state.pauseResumeDraft || "").trim()) {
        state.controlError = "Kies eerst een datum en tijd om automatisch te hervatten.";
        render();
        return;
      }
      commitOpenQuattRegulationPause(state.pauseResumeDraft || "");
      return;
    }

    if (action === "close-update-modal") {
      state.updateModalOpen = false;
      state.updateInstallCompleted = false;
      state.updateInstallCompletedVersion = "";
      state.firmwareAdvancedOpen = false;
      state.firmwareConnectionSwitchOpen = false;
      state.firmwareTopologySwitchOpen = false;
      state.updateManualUploadOpen = false;
      state.updateTestFirmwareOpen = false;
      state.firmwareConnectionSwitchConfirmed = false;
      state.firmwareTopologySwitchConfirmed = false;
      resetFirmwareManualUploadSelection();
      resetFirmwareTestSelection();
      render();
      return;
    }

    if (action === "close-quickstart-modal") {
      state.quickStartModalOpen = false;
      render();
      return;
    }

    if (action === "open-quickstart-modal") {
      state.currentStep = "generation";
      state.quickStartModalMode = "wizard";
      state.quickStartModalOpen = true;
      render();
      return;
    }

    if (action === "open-generation-modal") {
      state.currentStep = "generation";
      state.quickStartModalMode = "generation";
      state.quickStartModalOpen = true;
      render();
      return;
    }

    if (action === "open-cm100-commissioning-modal") {
      state.systemModal = "";
      setAppView("settings");
      setSettingsGroup("service");
      render();
      syncEntities({ forceFast: true });
      return;
    }

    if (action === "open-installation-monitoring") {
      state.systemModal = "";
      setAppView("settings");
      setSettingsGroup("service");
      render();
      syncEntities({ forceFast: true });
      return;
    }

    if (action === "open-service-task-modal") {
      const taskKey = String(button.dataset.serviceTask || "").trim();
      if (["autotune", "boiler", "purge", "manual-flow", "manual-hp", "hp-water-calibration"].includes(taskKey)) {
        state.systemModal = `service-task-${taskKey}`;
        render();
        syncEntities({ forceFast: true });
      }
      return;
    }

    if (action === "press-named-button") {
      const buttonKey = String(button.dataset.oqButtonKey || button.dataset.buttonKey || button.getAttribute("data-oq-button-key") || "").trim();
      if (buttonKey) {
        if (buttonKey === "commissioningCm100Start") {
          state.pendingCommissioningCm100Start = true;
          state.commissioningTaskLock = "cm100";
          state.commissioningBoilerHeatPowerDisplay = "";
        } else if (buttonKey === "commissioningCm100Stop") {
          state.pendingCommissioningCm100Start = false;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.pendingHpWaterCalibrationStart = false;
          state.commissioningTaskLock = "";
          state.commissioningBoilerHeatPowerDisplay = "";
        } else if (buttonKey === "boilerPowerTestStart") {
          state.pendingBoilerPowerTestStart = true;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.pendingHpWaterCalibrationStart = false;
          state.commissioningTaskLock = "boiler";
          state.commissioningBoilerHeatPowerDisplay = "";
        } else if (buttonKey === "boilerPowerTestAbort" || buttonKey === "boilerPowerTestApply") {
          state.commissioningTaskLock = "boiler";
        } else if (buttonKey === "flowAutotuneStart") {
          state.pendingFlowAutotuneStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.pendingHpWaterCalibrationStart = false;
          state.commissioningTaskLock = "autotune";
        } else if (buttonKey === "flowAutotuneAbort" || buttonKey === "flowAutotuneApply") {
          state.commissioningTaskLock = "autotune";
        } else if (buttonKey === "airPurgeStart") {
          state.pendingAirPurgeStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.pendingHpWaterCalibrationStart = false;
          state.commissioningTaskLock = "purge";
        } else if (buttonKey === "airPurgeAbort") {
          state.commissioningTaskLock = "purge";
        } else if (buttonKey === "manualFlowStart") {
          state.pendingManualFlowStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualHpStart = false;
          state.pendingHpWaterCalibrationStart = false;
          state.commissioningTaskLock = "manual-flow";
        } else if (buttonKey === "manualFlowAbort") {
          state.commissioningTaskLock = "manual-flow";
        } else if (buttonKey === "manualHpStart") {
          state.pendingManualHpStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingHpWaterCalibrationStart = false;
          state.commissioningTaskLock = "manual-hp";
        } else if (buttonKey === "hpWaterCalibrationStart") {
          state.pendingHpWaterCalibrationStart = true;
          state.pendingBoilerPowerTestStart = false;
          state.pendingFlowAutotuneStart = false;
          state.pendingAirPurgeStart = false;
          state.pendingManualFlowStart = false;
          state.pendingManualHpStart = false;
          state.commissioningTaskLock = "hp-water-calibration";
        } else if (buttonKey === "hpWaterCalibrationAbort" || buttonKey === "hpWaterCalibrationApply") {
          state.commissioningTaskLock = "hp-water-calibration";
        } else if (buttonKey === "manualHpAbort") {
          state.commissioningTaskLock = "manual-hp";
        }
        const refreshKeys = [];
        let refreshDelayMs = 0;
        let successNotice = "";
        let errorPrefix = "";
        if (buttonKey === "acknowledgeCompressorCyclingAlert") {
          refreshKeys.push(...INSTALLATION_MONITORING_STATE_KEYS);
        } else if (buttonKey === "commissioningCm100Start" || buttonKey === "commissioningCm100Stop") {
          refreshKeys.push(
            "commissioningStatus",
            "cm100Active",
            "boilerPowerTestStatus",
            "boilerPowerTestActive",
            "flowAutotuneStatus",
            "airPurgeStatus",
            "airPurgeActive",
            "manualFlowStatus",
            "manualFlowActive",
            "manualHpStatus",
            "manualHpGuardStatus",
            "manualHpActive",
            "hpWaterCalibrationStatus",
            "hpWaterCalibrationActive",
          );
        } else if (buttonKey === "boilerPowerTestStart" || buttonKey === "boilerPowerTestAbort" || buttonKey === "boilerPowerTestApply") {
          refreshKeys.push(
            "commissioningStatus",
            "boilerPowerTestStatus",
            "boilerPowerTestActive",
            "boilerHeatPower",
            "boilerPowerTestResult",
            "boilerRatedHeatPower",
          );
        } else if (buttonKey === "flowAutotuneStart" || buttonKey === "flowAutotuneAbort" || buttonKey === "flowAutotuneApply") {
          refreshKeys.push(
            "commissioningStatus",
            "flowAutotuneStatus",
            "flowKpSuggested",
            "flowKiSuggested",
            "flowKp",
            "flowKi",
          );
        } else if (buttonKey === "airPurgeStart" || buttonKey === "airPurgeAbort") {
          refreshKeys.push(
            "commissioningStatus",
            "airPurgeStatus",
            "airPurgeActive",
            "airPurgeRemaining",
            "airPurgePhase",
            "airPurgeTargetIpwm",
            "flowMode",
          );
        } else if (buttonKey === "hpWaterCalibrationStart" || buttonKey === "hpWaterCalibrationAbort" || buttonKey === "hpWaterCalibrationApply") {
          refreshKeys.push(
            "commissioningStatus",
            "hpWaterCalibrationStatus",
            "hpWaterCalibrationActive",
            "hpWaterCalibrationRemaining",
            "hpWaterCalibrationPhase",
            "hpWaterCalibrationSpread",
            "hpWaterCalibrationSupplyDelta",
            "hpWaterCalibrationStableProgress",
            "hpWaterCalibrationStableRequired",
            "hpWaterCalibrationResultReference",
            "hpWaterCalibrationResultSpreadBefore",
            "hpWaterCalibrationResultExpectedSpread",
            "hpWaterCalibrationResultHp1InRawAvg",
            "hpWaterCalibrationResultHp1OutRawAvg",
            "hpWaterCalibrationResultHp2InRawAvg",
            "hpWaterCalibrationResultHp2OutRawAvg",
            "hp1WaterInRaw",
            "hp1WaterOutRaw",
            "hp2WaterInRaw",
            "hp2WaterOutRaw",
            "hp1WaterIn",
            "hp1WaterOut",
            "hp2WaterIn",
            "hp2WaterOut",
            "hp1WaterInOffset",
            "hp1WaterOutOffset",
            "hp2WaterInOffset",
            "hp2WaterOutOffset",
            "hp1WaterInOffsetSuggested",
            "hp1WaterOutOffsetSuggested",
            "hp2WaterInOffsetSuggested",
            "hp2WaterOutOffsetSuggested",
            "flowMode",
          );
        } else if (buttonKey === "manualFlowStart" || buttonKey === "manualFlowAbort" || buttonKey === "manualFlowApplyHeating" || buttonKey === "manualFlowApplyCooling") {
          refreshKeys.push(
            "commissioningStatus",
            "manualFlowStatus",
            "manualFlowActive",
            "manualFlowSetpoint",
            "manualFlowTargetIpwm",
            "flowSelected",
            "flowMode",
            "flowSetpoint",
            "coolingFlowSetpoint",
          );
        } else if (buttonKey === "manualHpStart" || buttonKey === "manualHpAbort") {
          refreshKeys.push(
            "commissioningStatus",
            "manualHpStatus",
            "manualHpGuardStatus",
            "manualHpActive",
            "manualHp1Mode",
            "manualHp2Mode",
            "manualHp1Level",
            "manualHp2Level",
            "flowSelected",
            "hp1Compressor",
            "hp1Freq",
            "hp1Failures",
            "hp2Compressor",
            "hp2Freq",
            "hp2Failures",
            "hp1Mode",
            "hp2Mode",
          );
        } else if (ODU_RUNTIME_FREQUENCY_BUTTON_KEYS.has(buttonKey)) {
          const hpIndex = getOduRuntimeFrequencyButtonHp(buttonKey);
          if (hpIndex) {
            refreshKeys.push(...getOduRuntimeFrequencyHpKeys(hpIndex));
            refreshDelayMs = buttonKey.endsWith("Load") ? 1200 : 3200;
            successNotice = buttonKey.endsWith("Load")
              ? `HP${hpIndex} ODU runtime tabel lezen aangevraagd.`
              : `HP${hpIndex} ODU runtime write aangevraagd; controleer status/readback.`;
            errorPrefix = `ODU runtime actie mislukt voor HP${hpIndex}`;
          }
        }
        void triggerNamedButton(buttonKey, {
          ...(refreshKeys.length ? { refreshKeys } : {}),
          ...(refreshDelayMs ? { refreshDelayMs } : {}),
          ...(successNotice ? { successNotice } : {}),
          ...(errorPrefix ? { errorPrefix } : {}),
        });
      }
      return;
    }

    if (action === "close-system-modal") {
      stopLoginAuthStatusPolling();
      clearDebugRecordingDevicePollTimer();
      state.systemModal = "";
      state.authDraftCurrentPassword = "";
      state.authDraftNewPassword = "";
      state.authDraftConfirmPassword = "";
      state.authNotice = "";
      state.authError = "";
      state.apiSecurityNotice = "";
      state.apiSecurityError = "";
      clearSettingsBackupDraft();
      render();
      scheduleDebugRecordingDeviceStatusPoll();
      return;
    }

    if (action === "clear-webserver-log-output") {
      clearWebServerLogOutput();
      return;
    }

    if (action === "copy-webserver-log-output") {
      void copyWebServerLogOutput();
      return;
    }

    if (action === "start-debug-recording") {
      void startDebugRecording(button.dataset.debugMinutes || 15);
      return;
    }

    if (action === "start-rolling-debug-recording") {
      void startRollingDebugRecording();
      return;
    }

    if (action === "select-debug-recording-duration") {
      setDebugRecordingSelectedMinutes(button.dataset.debugMinutes || 15);
      return;
    }

    if (action === "stop-debug-recording") {
      void stopDebugRecording();
      return;
    }

    if (action === "freeze-debug-recording") {
      void freezeDebugRecording();
      return;
    }

    if (action === "download-debug-recording") {
      void downloadDebugRecordingBundle();
      return;
    }

    if (action === "copy-debug-recording") {
      void copyDebugRecordingBundle();
      return;
    }

    if (action === "confirm-settings-backup-restore") {
      void restoreSettingsBackup();
      return;
    }

    if (action === "confirm-restart") {
      void triggerNamedButton("restartAction", {
        successNotice: "OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",
        errorPrefix: "Herstart mislukt",
        reconnectMode: "restart",
      });
      return;
    }

    if (action === "select-surface") {
      const nextNativeOpen = button.dataset.surface === "native";
      if (state.nativeOpen === nextNativeOpen) {
        if (state.nativeOpen) {
          void ensureNativeFrontendLoaded();
        }
        return;
      }

      state.nativeOpen = nextNativeOpen;
      setStoredSurface(state.nativeOpen ? "native" : "app");
      state.controlError = "";
      state.controlNotice = "";
      state.settingsInfoOpen = "";
      state.updateModalOpen = false;
      state.firmwareAdvancedOpen = false;
      state.firmwareConnectionSwitchOpen = false;
      state.firmwareTopologySwitchOpen = false;
      state.updateManualUploadOpen = false;
      state.updateTestFirmwareOpen = false;
      state.firmwareConnectionSwitchConfirmed = false;
      state.firmwareTopologySwitchConfirmed = false;
      resetFirmwareManualUploadSelection();
      resetFirmwareTestSelection();
      stopLoginAuthStatusPolling();
      state.systemModal = "";
      if (state.nativeOpen) {
        void ensureNativeFrontendLoaded();
      }
      render();
      syncSurfaceRuntime();
      window.requestAnimationFrame(() => {
        if (state.nativeOpen) {
          if (state.nativeApp) {
            state.nativeApp.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      return;
    }

    if (action === "toggle-overview-theme") {
      setOverviewTheme(state.overviewTheme === "light" ? "dark" : "light");
      render();
      return;
    }

    if (action === "select-hp-visual") {
      setHpVisualMode(button.dataset.hpVisual === "compact" ? "compact" : "schematic");
      render();
      return;
    }

    if (action === "select-hp-layout") {
      setHpLayoutMode(button.dataset.hpLayout || "equal");
      render();
      return;
    }

    if (action === "select-control-replay-focus") {
      state.controlReplayFocusFilter = button.dataset.replayFocus || "all";
      state.controlReplaySelectedEpisode = "";
      render();
      return;
    }

    if (action === "select-control-replay-tab") {
      const tab = button.dataset.replayTab || "status";
      state.controlReplayTab = normalizeControlReplayTab(tab) || "status";
      if (state.appView === "control") {
        syncUrlAppView("push");
      }
      render();
      return;
    }

    if (action === "select-control-replay-window") {
      const windowId = normalizeControlReplayWindow(button.dataset.replayWindow || "") || "last24";
      if (windowId !== "custom") {
        state.controlReplayWindow = windowId;
        state.controlReplayPeriodMenuOpen = false;
        state.controlReplayCustomPeriodOpen = false;
        state.controlReplayCustomPeriodError = "";
        setControlReplayGraphMinute(windowId);
        if (state.appView === "control") {
          syncUrlAppView("push");
        }
      }
      render();
      return;
    }

    if (action === "toggle-control-replay-period-menu") {
      state.controlReplayPeriodMenuOpen = !state.controlReplayPeriodMenuOpen;
      state.controlReplayCustomPeriodOpen = state.controlReplayPeriodMenuOpen && state.controlReplayWindow === "custom";
      state.controlReplayCustomPeriodError = "";
      render();
      return;
    }

    if (action === "toggle-control-replay-custom-period") {
      state.controlReplayCustomPeriodOpen = !state.controlReplayCustomPeriodOpen;
      state.controlReplayCustomPeriodError = "";
      render();
      return;
    }

    if (action === "apply-control-replay-custom-period") {
      const menu = button.closest("[data-oq-control-replay-period-menu]");
      const startDate = String(menu?.querySelector('[data-oq-control-replay-custom-start-date]')?.value || "");
      const startHour = String(menu?.querySelector('[data-oq-control-replay-custom-start-hour]')?.value || "");
      const endDate = String(menu?.querySelector('[data-oq-control-replay-custom-end-date]')?.value || "");
      const endHour = String(menu?.querySelector('[data-oq-control-replay-custom-end-hour]')?.value || "");
      const start = `${startDate}T${startHour}:00`;
      const end = `${endDate}T${endHour}:00`;
      const startEpochMs = parseControlReplayCustomDateTime(start);
      const endEpochMs = parseControlReplayCustomDateTime(end);
      if (!Number.isFinite(startEpochMs) || !Number.isFinite(endEpochMs) || endEpochMs <= startEpochMs) {
        state.controlReplayCustomPeriodError = "Kies een eindtijd na de starttijd.";
        render();
        return;
      }
      if (endEpochMs - startEpochMs > CONTROL_REPLAY_CUSTOM_MAX_RANGE_MS) {
        state.controlReplayCustomPeriodError = "Een eigen periode mag maximaal 7 dagen beslaan.";
        render();
        return;
      }
      const nowMs = Date.now();
      if (startEpochMs < nowMs - CONTROL_REPLAY_CUSTOM_MAX_RANGE_MS || endEpochMs > nowMs + (60 * 1000)) {
        state.controlReplayCustomPeriodError = "Kies een periode binnen de laatste 7 dagen.";
        render();
        return;
      }
      state.controlReplayCustomStart = start;
      state.controlReplayCustomEnd = end;
      state.controlReplayCustomPeriodError = "";
      state.controlReplayWindow = "custom";
      state.controlReplayPeriodMenuOpen = false;
      state.controlReplayCustomPeriodOpen = false;
      setControlReplayGraphMinute("custom");
      if (state.appView === "control") {
        syncUrlAppView("push");
      }
      render();
      return;
    }

    if (action === "select-control-replay-episode") {
      state.controlReplaySelectedEpisode = button.dataset.replayEpisode || "";
      render();
      return;
    }

    if (action === "toggle-control-replay-support-details") {
      event.preventDefault();
      const details = button.closest(".oq-working-support");
      const itemId = details?.dataset.replaySupportItem || "";
      state.controlReplaySupportDetailsItemId = details && details.hasAttribute("open") ? "" : itemId;
      render();
      return;
    }

    if (action === "select-step") {
      state.currentStep = button.dataset.stepId || "generation";
      render();
      void refreshQuickStartStepHydration(state.currentStep);
      return;
    }

    if (action === "apply-quickstart-flow-source") {
      void applyQuickStartFlowSourceConfiguration();
      return;
    }

    if (action === "refresh-quickstart-flow-signal") {
      void refreshQuickStartFlowSignal();
      return;
    }

    if (action === "start-quickstart-flow-test") {
      void startQuickStartFlowTest();
      return;
    }

    if (action === "abort-quickstart-flow-test") {
      void abortQuickStartFlowTest();
      return;
    }

    if (action === "apply-quickstart-thermostat-source") {
      void applyQuickStartThermostatSourceConfiguration();
      return;
    }

    if (action === "previous-step") {
      selectQuickStepByOffset(-1);
      render();
      void refreshQuickStartStepHydration(state.currentStep);
      return;
    }

    if (action === "next-step") {
      selectQuickStepByOffset(1);
      render();
      void refreshQuickStartStepHydration(state.currentStep);
      return;
    }

    if (action === "select-settings-option") {
      const key = button.dataset.selectKey || "";
      const option = button.dataset.selectOption || "";
      if (key && option && String(getEntityValue(key) || "") !== option) {
        commitSelect(key, option);
      }
      return;
    }

    if (action === "toggle-overview-control") {
      const key = button.dataset.controlKey || "";
      const nextState = (button.dataset.controlState || "").toLowerCase();
      if (key && (nextState === "on" || nextState === "off")) {
        commitSwitch(key, nextState === "on");
      }
      return;
    }

    if (action === "select-overview-control-option") {
      const key = button.dataset.controlKey || "";
      const option = button.dataset.controlOption || "";
      if (key && option && String(getEntityValue(key) || "") !== option) {
        commitSelect(key, option);
      }
      return;
    }

    if (action === "suggest-curve-fallback") {
      const suggestion = getCurveFallbackSuggestion();
      if (suggestion) {
        commitNumber("curveFallbackSupply", suggestion.value, "Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");
      }
      return;
    }

    if (action === "apply" || action === "reset") {
      triggerButton(action);
      return;
    }

    if (action === "run-firmware-check") {
      triggerFirmwareUpdateCheck();
      return;
    }

    if (action === "install-firmware-update") {
      installFirmwareUpdate();
      return;
    }

    if (action === "install-firmware-connection-switch") {
      void installFirmwareConnectionSwitch();
      return;
    }

    if (action === "install-firmware-topology-switch") {
      void installFirmwareTopologySwitch();
      return;
    }

    if (action === "toggle-firmware-advanced") {
      if (state.firmwareAdvancedOpen || state.firmwareConnectionSwitchOpen || state.firmwareTopologySwitchOpen || state.updateManualUploadOpen || state.updateTestFirmwareOpen) {
        state.firmwareAdvancedOpen = false;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        state.updateManualUploadOpen = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareManualUploadSelection();
        resetFirmwareTestSelection();
      } else {
        state.firmwareAdvancedOpen = true;
      }
      render();
      return;
    }

    if (action === "toggle-firmware-connection-switch") {
      state.firmwareConnectionSwitchOpen = !state.firmwareConnectionSwitchOpen;
      state.firmwareConnectionSwitchConfirmed = false;
      if (state.firmwareConnectionSwitchOpen) {
        state.firmwareAdvancedOpen = true;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        state.updateManualUploadOpen = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareManualUploadSelection();
        resetFirmwareTestSelection();
      }
      render();
      return;
    }

    if (action === "toggle-firmware-topology-switch") {
      state.firmwareTopologySwitchOpen = !state.firmwareTopologySwitchOpen;
      state.firmwareTopologySwitchConfirmed = false;
      if (state.firmwareTopologySwitchOpen) {
        state.firmwareAdvancedOpen = true;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.updateManualUploadOpen = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareManualUploadSelection();
        resetFirmwareTestSelection();
      }
      render();
      return;
    }

    if (action === "toggle-firmware-upload") {
      if (state.updateManualUploadOpen) {
        state.updateManualUploadOpen = false;
        resetFirmwareManualUploadSelection();
      } else {
        state.firmwareAdvancedOpen = true;
        state.updateManualUploadOpen = true;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareTestSelection();
        state.updateManualUploadError = "";
      }
      render();
      return;
    }

    if (action === "upload-firmware-file") {
      void uploadFirmwareUpdate();
      return;
    }

    if (action === "toggle-firmware-test") {
      if (state.updateTestFirmwareOpen) {
        state.updateTestFirmwareOpen = false;
        resetFirmwareTestSelection();
      } else {
        state.firmwareAdvancedOpen = true;
        state.updateTestFirmwareOpen = true;
        state.updateManualUploadOpen = false;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        resetFirmwareManualUploadSelection();
        state.updateTestFirmwareError = "";
      }
      render();
      return;
    }

    if (action === "install-firmware-test") {
      void installFirmwareTestUpdate();
      return;
    }

    if (action === "save-web-auth") {
      void commitWebAuthChanges();
      return;
    }

    if (action === "disable-web-auth") {
      void commitDisableWebAuth();
      return;
    }

  }

  export function updateControlReplayGraphMinute(rawMinute) {
    const minute = Math.max(0, Math.min(1440, Math.round(rawMinute / 5) * 5));
    if (!Number.isNaN(minute) && state.controlReplayGraphMinute !== minute) {
      state.controlReplayGraphMinute = minute;
      render();
    }
  }

  export function updateControlReplayGraphMinuteFromPointer(clientX, scrubber) {
    const control = scrubber || state.root?.querySelector("[data-oq-control-replay-scrub]");
    if (!control) {
      return;
    }
    const rect = control.getBoundingClientRect();
    if (!rect.width) {
      return;
    }
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    updateControlReplayGraphMinute(ratio * 1440);
  }

  export function handlePointerDown(event) {
    const replayScrubber = event.target.closest("[data-oq-control-replay-scrub]");
    if (replayScrubber) {
      state.controlReplayScrubbing = true;
      event.preventDefault();
      updateControlReplayGraphMinuteFromPointer(event.clientX, replayScrubber);
      return;
    }

    const point = event.target.closest("[data-curve-key]");
    if (!point || !isCurveMode()) {
      return;
    }

    state.draggingCurveKey = point.dataset.curveKey || "";
    updateCurveDraftFromPointer(event.clientY);
  }

  export function handlePointerMove(event) {
    if (typeof handleEnergyHistoryPointerMove === "function") {
      handleEnergyHistoryPointerMove(event);
    }
    if (state.controlReplayScrubbing) {
      event.preventDefault();
      updateControlReplayGraphMinuteFromPointer(event.clientX);
      return;
    }
    if (!state.draggingCurveKey) {
      return;
    }
    updateCurveDraftFromPointer(event.clientY);
  }

  export function handlePointerUp() {
    if (state.controlReplayScrubbing) {
      state.controlReplayScrubbing = false;
      return;
    }

    if (!state.draggingCurveKey) {
      return;
    }

    const key = state.draggingCurveKey;
    const value = normalizeNumber(key, getEntityValue(key));
    state.draggingCurveKey = "";
    commitNumber(key, value, "Curvepunt bijgewerkt.");
  }
