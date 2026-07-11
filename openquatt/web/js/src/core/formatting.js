export function formatNumericState(value, decimals, unit = "") {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return "—";
  }
  return `${numeric.toFixed(decimals)}${unit ? ` ${unit}` : ""}`;
}

export function formatDurationFromMinutes(totalMinutes) {
  if (!Number.isFinite(totalMinutes) || totalMinutes < 0) {
    return "—";
  }
  const wholeMinutes = Math.floor(totalMinutes);
  const days = Math.floor(wholeMinutes / 1440);
  const hours = Math.floor((wholeMinutes % 1440) / 60);
  const minutes = wholeMinutes % 60;
  if (days > 0) {
    return `${days}d ${hours}u`;
  }
  if (hours > 0) {
    return `${hours}u ${minutes}m`;
  }
  return `${minutes}m`;
}
