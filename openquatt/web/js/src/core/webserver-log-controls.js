import { state } from "./state.js";
import { updateWebServerLogState } from "./feature-state.js";

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
  updateWebServerLogState({ webServerLogSource: null, webServerLogConnected: false });
}

export function clearWebServerLogOutput() {
  if (webServerLogControls.clearOutput) {
    return webServerLogControls.clearOutput();
  }
  updateWebServerLogState({
    webServerLogEntries: [],
    webServerLogError: "",
    webServerLogRaw: "",
    webServerLogNotice: "",
  });
}

export function resetWebServerLogRecoveryState() {
  if (webServerLogControls.resetRecoveryState) {
    return webServerLogControls.resetRecoveryState();
  }
  closeWebServerLogStream();
  updateWebServerLogState({ webServerLogEnabled: null, webServerLogConnected: false });
  clearWebServerLogOutput();
}
