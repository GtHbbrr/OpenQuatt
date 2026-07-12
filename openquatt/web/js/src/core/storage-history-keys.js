export const SETTINGS_STORAGE_KEYS = [
  "trendHistoryEnabled",
  "trendHistoryFlashEnabled",
  "trendHistoryFlush",
  "decisionLogHistoryEnabled",
  "decisionLogHistoryFlush",
  "decisionLogHistoryClear",
  "lifetimeEnergyHistoryEnabled",
  "lifetimeEnergyHourRetention",
  "lifetimeEnergyHistoryCapture",
  "lifetimeEnergyHistoryClear",
];

export const TREND_HISTORY_VIEW_KEYS = [
  "trendHistoryEnabled",
  "trendHistoryFlashEnabled",
];

export const DECISION_LOG_HISTORY_VIEW_KEYS = [
  "decisionLogHistoryEnabled",
  "decisionLogHistoryFlush",
  "decisionLogHistoryClear",
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
