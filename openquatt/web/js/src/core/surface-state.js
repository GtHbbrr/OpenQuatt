import { state } from "./state.js";

export function isSystemSettingsGroupActive() {
  return state.appView === "settings" && state.settingsGroup === "system";
}

export function isIntegrationsSettingsGroupActive() {
  return state.appView === "settings" && state.settingsGroup === "integrations";
}
