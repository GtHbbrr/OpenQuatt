import { DEFAULT_TREND_WINDOW_HOURS, TREND_WINDOW_HOURS_OPTIONS, state } from "./state.js";

export function isTrendHistoryFlashEnabled() {
  const entity = state.entities?.trendHistoryFlashEnabled;
  if (!entity) {
    return false;
  }
  if (typeof entity.value === "boolean") {
    return entity.value;
  }
  const raw = String(entity.state ?? entity.value ?? "").toLowerCase();
  return raw === "on" || raw === "true" || raw === "1";
}

export function getAvailableTrendWindowHoursOptions() {
  return isTrendHistoryFlashEnabled()
    ? TREND_WINDOW_HOURS_OPTIONS
    : TREND_WINDOW_HOURS_OPTIONS.filter((hours) => hours <= 168);
}

export function normalizeTrendWindowHours(hours) {
  const options = getAvailableTrendWindowHoursOptions();
  const numeric = Number(hours);
  if (options.includes(numeric)) {
    return numeric;
  }
  if (Number.isFinite(numeric) && numeric > options[options.length - 1]) {
    return options[options.length - 1];
  }
  return options.includes(DEFAULT_TREND_WINDOW_HOURS) ? DEFAULT_TREND_WINDOW_HOURS : options[0];
}

export function setTrendWindowHours(hours) {
  state.trendWindowHours = normalizeTrendWindowHours(hours);
  try {
    window.localStorage.setItem("oq-trend-window-hours", String(state.trendWindowHours));
  } catch (_error) {
    // Ignore storage failures in embedded browsers.
  }
}
