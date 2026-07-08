export const SETTINGS_STORAGE_KEYS = [
  "trendHistoryEnabled",
  "trendHistoryFlashEnabled",
  "trendHistoryFlush",
  "lifetimeEnergyHistoryEnabled",
  "lifetimeEnergyHourRetention",
  "lifetimeEnergyHistoryCapture",
  "lifetimeEnergyHistoryClear",
];

export const TREND_HISTORY_VIEW_KEYS = [
  "trendHistoryEnabled",
  "trendHistoryFlashEnabled",
];

export const ENERGY_HISTORY_VIEW_KEYS = [
  "lifetimeEnergyHistoryEnabled",
  "lifetimeEnergyHourRetention",
  "lifetimeEnergyHistoryCapture",
  "lifetimeEnergyHistoryClear",
];

export function getSettingsStorageRefreshKeys() {
  return [...new Set(SETTINGS_STORAGE_KEYS)];
}
