import { state } from "./state.js";

let webServerLogControls = {};

export function setWebServerLogControls(controls = {}) {
  webServerLogControls = {
    clearOutput: typeof controls.clearOutput === "function" ? controls.clearOutput : null,
    closeStream: typeof controls.closeStream === "function" ? controls.closeStream : null,
    resetRecoveryState: typeof controls.resetRecoveryState === "function" ? controls.resetRecoveryState : null,
  };
}

export function closeWebServerLogStream() {
  if (webServerLogControls.closeStream) {
    return webServerLogControls.closeStream();
  }
  const source = state.webServerLogSource;
  if (source) {
    source.close();
  }
  state.webServerLogSource = null;
  state.webServerLogConnected = false;
}

export function clearWebServerLogOutput() {
  if (webServerLogControls.clearOutput) {
    return webServerLogControls.clearOutput();
  }
  state.webServerLogEntries = [];
  state.webServerLogError = "";
  state.webServerLogRaw = "";
  state.webServerLogNotice = "";
}

export function resetWebServerLogRecoveryState() {
  if (webServerLogControls.resetRecoveryState) {
    return webServerLogControls.resetRecoveryState();
  }
  closeWebServerLogStream();
  state.webServerLogEnabled = null;
  state.webServerLogConnected = false;
  clearWebServerLogOutput();
}
