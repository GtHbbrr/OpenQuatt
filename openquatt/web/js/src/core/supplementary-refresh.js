import { SUPPLEMENTARY_STATUS_REFRESH_INTERVAL_MS } from "./config.js";

export function shouldRefreshSupplementaryStatus(lastRefreshAt, options = {}, intervalMs = SUPPLEMENTARY_STATUS_REFRESH_INTERVAL_MS) {
  if (options.force === true) {
    return true;
  }
  const lastAt = Number(lastRefreshAt || 0);
  return !lastAt || (Date.now() - lastAt) >= intervalMs;
}
