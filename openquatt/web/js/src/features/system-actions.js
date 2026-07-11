import { getOpenQuattPauseDraftValue, getOpenQuattPausePresetValue } from "../core/entity-store.js";
import { commitOpenQuattRegulationPause, commitOpenQuattRegulationResumeNow, triggerNamedButton } from "../core/entity-write-actions.js";
import { render } from "../core/render-scheduler.js";
import { state } from "../core/state.js";
import { clearDebugRecordingDevicePollTimer, scheduleDebugRecordingDeviceStatusPoll } from "./debug-recording.js";
import { stopLoginAuthStatusPolling } from "./security-actions.js";
import { clearSettingsBackupDraft } from "./storage-history.js";

function closeSystemModal() {
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
}

const systemActionHandlers = {
  "open-connectivity-modal": () => {
    state.systemModal = "connectivity";
    render();
  },
  "open-restart-confirm": () => {
    state.systemModal = "restart-confirm";
    render();
  },
  "open-silent-settings-modal": () => {
    state.systemModal = "silent-settings";
    render();
  },
  "open-openquatt-pause-modal": () => {
    state.pauseResumeDraft = getOpenQuattPauseDraftValue();
    state.systemModal = "openquatt-pause";
    render();
  },
  "enable-openquatt-now": () => commitOpenQuattRegulationResumeNow(),
  "apply-openquatt-preset": (button) => {
    const presetValue = getOpenQuattPausePresetValue(button.dataset.pausePreset || "");
    state.pauseResumeDraft = presetValue;
    commitOpenQuattRegulationPause(presetValue);
  },
  "apply-openquatt-indefinite": () => commitOpenQuattRegulationPause(""),
  "apply-openquatt-custom-pause": () => {
    if (!String(state.pauseResumeDraft || "").trim()) {
      state.controlError = "Kies eerst een datum en tijd om automatisch te hervatten.";
      render();
      return;
    }
    commitOpenQuattRegulationPause(state.pauseResumeDraft || "");
  },
  "close-system-modal": () => closeSystemModal(),
  "confirm-restart": () => triggerNamedButton("restartAction", {
    successNotice: "OpenQuatt wordt opnieuw opgestart. Wacht even tot de webinterface weer terugkomt.",
    errorPrefix: "Herstart mislukt",
    reconnectMode: "restart",
  }),
};

export function handleSystemAction(action, button) {
  return invokeActionMap(systemActionHandlers, action, button);
}
import { invokeActionMap } from "../core/action-router.js";
