let storageHistoryControls = {};

export function setStorageHistoryControls(controls = {}) {
  storageHistoryControls = {
    refreshEnergyHistoryData: typeof controls.refreshEnergyHistoryData === "function" ? controls.refreshEnergyHistoryData : null,
    refreshSettingsStorageState: typeof controls.refreshSettingsStorageState === "function" ? controls.refreshSettingsStorageState : null,
    refreshTrendHistoryData: typeof controls.refreshTrendHistoryData === "function" ? controls.refreshTrendHistoryData : null,
    refreshTrendHistoryMetadata: typeof controls.refreshTrendHistoryMetadata === "function" ? controls.refreshTrendHistoryMetadata : null,
    shouldRefreshSettingsStorageForCurrentSurface: typeof controls.shouldRefreshSettingsStorageForCurrentSurface === "function"
      ? controls.shouldRefreshSettingsStorageForCurrentSurface
      : null,
  };
}

export function shouldRefreshSettingsStorageForCurrentSurface() {
  return storageHistoryControls.shouldRefreshSettingsStorageForCurrentSurface
    ? storageHistoryControls.shouldRefreshSettingsStorageForCurrentSurface()
    : false;
}

export async function refreshTrendHistoryMetadata(options = {}) {
  return storageHistoryControls.refreshTrendHistoryMetadata
    ? storageHistoryControls.refreshTrendHistoryMetadata(options)
    : false;
}

export async function refreshSettingsStorageState(options = {}) {
  return storageHistoryControls.refreshSettingsStorageState
    ? storageHistoryControls.refreshSettingsStorageState(options)
    : false;
}

export async function refreshTrendHistoryData(options = {}) {
  return storageHistoryControls.refreshTrendHistoryData
    ? storageHistoryControls.refreshTrendHistoryData(options)
    : false;
}

export async function refreshEnergyHistoryData(options = {}) {
  return storageHistoryControls.refreshEnergyHistoryData
    ? storageHistoryControls.refreshEnergyHistoryData(options)
    : false;
}
