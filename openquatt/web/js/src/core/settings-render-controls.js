let patchSettingsDomCallback = null;

export function setSettingsRenderControls({ patch } = {}) {
  patchSettingsDomCallback = typeof patch === "function" ? patch : null;
}

export function patchSettingsDom() {
  return patchSettingsDomCallback ? patchSettingsDomCallback() : false;
}
