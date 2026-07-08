export function formatNumericState(value, decimals, unit = "") {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) {
    return "—";
  }
  return `${numeric.toFixed(decimals)}${unit ? ` ${unit}` : ""}`;
}
