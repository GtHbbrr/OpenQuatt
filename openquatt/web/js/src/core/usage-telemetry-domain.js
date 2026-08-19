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

export async function waitForUsageTelemetryChoiceConfirmation({
  refresh,
  expectedEnabled,
  wait = (ms) => new Promise((done) => setTimeout(done, ms)),
  now = Date.now,
}) {
  const deadline = now() + 2000;

  for (let attempt = 0; attempt < 10 && now() < deadline; attempt += 1) {
    await wait(Math.min(200, deadline - now()));
    let values;
    try {
      values = await refresh();
    } catch {
      continue;
    }
    if (isUsageTelemetryChoiceConfirmed({
      telemetryValue: values[0],
      choiceValue: values[1],
      expectedEnabled,
    })) {
      return true;
    }
  }
  return false;
}
