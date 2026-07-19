export function shouldInitializeQuickStartUsageTelemetryChoice({
  stepId,
  telemetryAvailable,
  choiceAvailable,
  choiceValue,
}) {
  const choiceExplicitlyMissing = choiceValue === false
    || ["off", "false", "0"].includes(String(choiceValue).trim().toLowerCase());
  return stepId === "usage-telemetry"
    && telemetryAvailable
    && choiceAvailable
    && choiceExplicitlyMissing;
}

function parseActiveValue(value) {
  if (value === true || ["on", "true", "1"].includes(String(value).trim().toLowerCase())) {
    return true;
  }
  if (value === false || ["off", "false", "0"].includes(String(value).trim().toLowerCase())) {
    return false;
  }
  return null;
}

export function isUsageTelemetryChoiceConfirmed({
  telemetryValue,
  choiceValue,
  expectedEnabled,
}) {
  const telemetryEnabled = parseActiveValue(telemetryValue);
  return parseActiveValue(choiceValue) === true
    && telemetryEnabled !== null
    && telemetryEnabled === expectedEnabled;
}
