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

export const USAGE_TELEMETRY_CONFIRMATION_ATTEMPTS = 10;
export const USAGE_TELEMETRY_CONFIRMATION_POLL_INTERVAL_MS = 200;
export const USAGE_TELEMETRY_CONFIRMATION_TIMEOUT_MS = 2000;

function waitForUsageTelemetryPoll(delayMs) {
  return new Promise((resolve) => globalThis.setTimeout(resolve, delayMs));
}

export async function waitForUsageTelemetryChoiceConfirmation({
  refresh,
  getTelemetryValue,
  getChoiceValue,
  expectedEnabled,
  attempts = USAGE_TELEMETRY_CONFIRMATION_ATTEMPTS,
  pollIntervalMs = USAGE_TELEMETRY_CONFIRMATION_POLL_INTERVAL_MS,
  timeoutMs = USAGE_TELEMETRY_CONFIRMATION_TIMEOUT_MS,
  wait = waitForUsageTelemetryPoll,
  now = Date.now,
}) {
  const requestedAttempts = Number(attempts);
  const boundedAttempts = Number.isFinite(requestedAttempts) && requestedAttempts > 0
    ? Math.floor(requestedAttempts)
    : USAGE_TELEMETRY_CONFIRMATION_ATTEMPTS;
  const requestedIntervalMs = Number(pollIntervalMs);
  const delayMs = Number.isFinite(requestedIntervalMs) && requestedIntervalMs >= 0
    ? requestedIntervalMs
    : USAGE_TELEMETRY_CONFIRMATION_POLL_INTERVAL_MS;
  const requestedTimeoutMs = Number(timeoutMs);
  const boundedTimeoutMs = Number.isFinite(requestedTimeoutMs) && requestedTimeoutMs > 0
    ? requestedTimeoutMs
    : USAGE_TELEMETRY_CONFIRMATION_TIMEOUT_MS;
  const deadlineMs = now() + boundedTimeoutMs;

  for (let attempt = 0; attempt < boundedAttempts; attempt += 1) {
    const remainingMs = deadlineMs - now();
    if (remainingMs <= 0) {
      return false;
    }
    await wait(Math.min(delayMs, remainingMs));
    try {
      await refresh();
    } catch (_error) {
      continue;
    }
    if (isUsageTelemetryChoiceConfirmed({
      telemetryValue: getTelemetryValue(),
      choiceValue: getChoiceValue(),
      expectedEnabled,
    })) {
      return true;
    }
  }
  return false;
}
