import { fetchWithTimeout } from "./browser-utils.js";
import { ENTITY_DEFS } from "./config.js";
import { buildEntityPath } from "./domain-helpers.js";
import { normalizeDateTimeValue, normalizeNumber, normalizeTimeValue } from "./entity-store.js";

export const ENTITY_BACKUP_REQUEST_TIMEOUT_MS = 5000;

function fetchEntityBackup(input, options, timeoutMs, action) {
  return fetchWithTimeout(
    input,
    options,
    timeoutMs,
    `${action} duurde te lang; de controller gaf geen bevestiging.`,
  );
}

export async function setEntityBackupValue(key, value, timeoutMs = ENTITY_BACKUP_REQUEST_TIMEOUT_MS) {
  const entity = ENTITY_DEFS[key];
  if (!entity) {
    throw new Error(`Onbekend veld ${key}.`);
  }

  if (entity.domain === "select") {
    const option = String(value || "").trim();
    const response = await fetchEntityBackup(
      `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(option)}`,
      { method: "POST" },
      timeoutMs,
      `${entity.name} schrijven`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return option;
  }

  if (entity.domain === "number") {
    const normalized = normalizeNumber(key, value);
    const response = await fetchEntityBackup(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" },
      timeoutMs,
      `${entity.name} schrijven`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "time") {
    const normalized = normalizeTimeValue(value);
    const response = await fetchEntityBackup(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" },
      timeoutMs,
      `${entity.name} schrijven`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "datetime") {
    const normalized = normalizeDateTimeValue(value);
    const response = await fetchEntityBackup(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" },
      timeoutMs,
      `${entity.name} schrijven`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "text") {
    const normalized = String(value || "").trim();
    const response = await fetchEntityBackup(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" },
      timeoutMs,
      `${entity.name} schrijven`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "switch" || entity.domain === "binary_sensor") {
    const enabled = Boolean(value);
    const action = enabled ? "turn_on" : "turn_off";
    const response = await fetchEntityBackup(
      buildEntityPath(entity.domain, entity.name, action),
      { method: "POST" },
      timeoutMs,
      `${entity.name} schrijven`,
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return enabled;
  }

  throw new Error(`${entity.name} kan niet worden hersteld.`);
}

export function getEntityBackupSwitchState(payload) {
  if (typeof payload?.value === "boolean") {
    return payload.value;
  }
  const raw = String(payload?.state ?? payload?.value ?? "").trim().toLowerCase();
  if (["on", "true", "1"].includes(raw)) {
    return true;
  }
  if (["off", "false", "0"].includes(raw)) {
    return false;
  }
  return null;
}

export function getEntityBackupNumberState(payload) {
  const raw = payload?.value ?? payload?.state;
  if (raw === null || raw === undefined || (typeof raw === "string" && !raw.trim())) {
    return null;
  }
  const actual = Number(raw);
  return Number.isFinite(actual) ? actual : null;
}

export async function verifyEntityBackupNumberState(
  key,
  expected,
  tolerance = 0.0051,
  timeoutMs = ENTITY_BACKUP_REQUEST_TIMEOUT_MS,
) {
  const entity = ENTITY_DEFS[key];
  if (!entity || entity.domain !== "number") {
    throw new Error(`Onbekend getalveld ${key}.`);
  }

  const response = await fetchEntityBackup(
    buildEntityPath(entity.domain, entity.name),
    {
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    },
    timeoutMs,
    `${entity.name} controleren`,
  );
  if (!response.ok) {
    throw new Error(`Controleren mislukt: HTTP ${response.status}`);
  }
  const actual = getEntityBackupNumberState(await response.json());
  if (actual === null) {
    throw new Error(`${entity.name} gaf geen geldige waarde terug.`);
  }
  return Math.abs(actual - Number(expected)) <= tolerance;
}

export async function waitForEntityBackupNumberState(
  key,
  expected,
  {
    tolerance = 0.0051,
    timeoutMs = ENTITY_BACKUP_REQUEST_TIMEOUT_MS,
    pollIntervalMs = 100,
  } = {},
) {
  const boundedTimeoutMs = Math.max(1, Number(timeoutMs) || ENTITY_BACKUP_REQUEST_TIMEOUT_MS);
  const deadline = Date.now() + boundedTimeoutMs;
  let lastError = null;
  let readSucceeded = false;

  do {
    const remainingMs = Math.max(1, deadline - Date.now());
    try {
      const confirmed = await verifyEntityBackupNumberState(
        key,
        expected,
        tolerance,
        Math.min(1000, remainingMs),
      );
      readSucceeded = true;
      if (confirmed) return true;
    } catch (error) {
      lastError = error;
    }

    const waitMs = Math.min(Math.max(1, Number(pollIntervalMs) || 100), deadline - Date.now());
    if (waitMs <= 0) break;
    await new Promise((resolve) => window.setTimeout(resolve, waitMs));
  } while (Date.now() < deadline);

  if (!readSucceeded && lastError) throw lastError;
  return false;
}

export async function verifyEntityBackupSwitchState(key, expected, timeoutMs = ENTITY_BACKUP_REQUEST_TIMEOUT_MS) {
  const entity = ENTITY_DEFS[key];
  if (!entity || entity.domain !== "switch") {
    throw new Error(`Onbekende schakelaar ${key}.`);
  }

  const response = await fetchEntityBackup(
    buildEntityPath(entity.domain, entity.name),
    {
      cache: "no-store",
      headers: { "Cache-Control": "no-store" },
    },
    timeoutMs,
    `${entity.name} controleren`,
  );
  if (!response.ok) {
    throw new Error(`Controleren mislukt: HTTP ${response.status}`);
  }
  const actual = getEntityBackupSwitchState(await response.json());
  if (actual === null) {
    throw new Error(`${entity.name} gaf geen geldige status terug.`);
  }
  return actual === Boolean(expected);
}
