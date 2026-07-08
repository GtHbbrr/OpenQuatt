import { state } from "./state.js";
import { render } from "./render-scheduler.js";

export const DEVICE_RECONNECT_RECOVERY_CLEAR_DELAY_MS = 1500;

export function clearDeviceReconnectRecoveryTimer() {
  if (!state.deviceReconnectRecoveryTimer) {
    return;
  }
  window.clearTimeout(state.deviceReconnectRecoveryTimer);
  state.deviceReconnectRecoveryTimer = null;
}

export function isDeviceReconnectRecovering() {
  return Number(state.deviceReconnectRecoveryStartedAt || 0) > 0;
}

export function getDeviceReconnectPhaseStartedAt() {
  return isDeviceReconnectRecovering()
    ? Number(state.deviceReconnectRecoveryStartedAt || 0)
    : Number(state.deviceReconnectStartedAt || 0);
}

export function getDeviceReconnectStatusLabel() {
  return isDeviceReconnectRecovering() ? "Gegevens verversen" : "Wachten op gegevens";
}

export function getDeviceReconnectStatusCopy() {
  const startedAt = getDeviceReconnectPhaseStartedAt();
  const elapsedSeconds = startedAt > 0 ? Math.max(0, Math.round((Date.now() - startedAt) / 1000)) : 0;
  if (isDeviceReconnectRecovering()) {
    return elapsedSeconds > 0 ? `${elapsedSeconds}s aan het verversen` : "Net weer online";
  }
  return elapsedSeconds > 0 ? `${elapsedSeconds}s bezig` : "Net gestart";
}

export function markDeviceReconnectRecovered() {
  if (!state.deviceReconnectMode || isDeviceReconnectRecovering()) {
    return false;
  }

  clearDeviceReconnectRecoveryTimer();
  state.deviceReconnectRecoveryStartedAt = Date.now();
  state.deviceReconnectLastError = "";
  state.entitySyncFailureCount = 0;

  const recoveryStartedAt = state.deviceReconnectRecoveryStartedAt;
  state.deviceReconnectRecoveryTimer = window.setTimeout(() => {
    if (state.deviceReconnectMode && Number(state.deviceReconnectRecoveryStartedAt || 0) === recoveryStartedAt) {
      clearDeviceReconnect();
      render();
    }
  }, DEVICE_RECONNECT_RECOVERY_CLEAR_DELAY_MS);

  render();
  return true;
}

export function beginDeviceReconnect(mode = "reconnect", error = "") {
  if (!state.deviceReconnectMode) {
    state.deviceReconnectStartedAt = Date.now();
  }
  clearDeviceReconnectRecoveryTimer();
  state.deviceReconnectMode = mode;
  state.deviceReconnectRecoveryStartedAt = 0;
  state.deviceReconnectLastError = error ? String(error) : state.deviceReconnectLastError;
  state.systemModal = "";
  state.updateModalOpen = false;
  state.controlError = "";
}

export function clearDeviceReconnect() {
  clearDeviceReconnectRecoveryTimer();
  if (!state.deviceReconnectMode && !state.entitySyncFailureCount) {
    return;
  }
  state.deviceReconnectMode = "";
  state.deviceReconnectStartedAt = 0;
  state.deviceReconnectRecoveryStartedAt = 0;
  state.deviceReconnectLastError = "";
  state.entitySyncFailureCount = 0;
}

export function getDeviceReconnectTitle() {
  if (isDeviceReconnectRecovering()) {
    return "OpenQuatt is weer online";
  }
  if (state.deviceReconnectMode === "ota") {
    return "OpenQuatt wordt bijgewerkt";
  }
  if (state.deviceReconnectMode === "restart") {
    return "OpenQuatt herstart";
  }
  return "Verbinding herstellen";
}

export function getDeviceReconnectCopy() {
  if (isDeviceReconnectRecovering()) {
    if (state.deviceReconnectMode === "ota") {
      return "De update is bijna klaar. We verversen nu de gegevens en het logboek.";
    }
    return "De controller reageert weer. We verversen nu de gegevens en het logboek.";
  }
  if (state.deviceReconnectMode === "ota") {
    return "De controller installeert de update en start daarna opnieuw op. Deze melding verdwijnt zodra de web-app weer gegevens ontvangt.";
  }
  if (state.deviceReconnectMode === "restart") {
    return "De controller start opnieuw op. De web-app probeert automatisch opnieuw verbinding te maken.";
  }
  return "De web-app krijgt tijdelijk geen gegevens van de controller. We proberen automatisch opnieuw te verbinden.";
}
