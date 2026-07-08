import { ENTITY_DEFS } from "./config.js";
import { buildEntityPath } from "./domain-helpers.js";
import { normalizeDateTimeValue, normalizeNumber, normalizeTimeValue } from "./entity-store.js";

export async function setEntityBackupValue(key, value) {
  const entity = ENTITY_DEFS[key];
  if (!entity) {
    throw new Error(`Onbekend veld ${key}.`);
  }

  if (entity.domain === "select") {
    const option = String(value || "").trim();
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(option)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return option;
  }

  if (entity.domain === "number") {
    const normalized = normalizeNumber(key, value);
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "time") {
    const normalized = normalizeTimeValue(value);
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "datetime") {
    const normalized = normalizeDateTimeValue(value);
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "text") {
    const normalized = String(value || "").trim();
    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?value=${encodeURIComponent(normalized)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return normalized;
  }

  if (entity.domain === "switch" || entity.domain === "binary_sensor") {
    const enabled = Boolean(value);
    const action = enabled ? "turn_on" : "turn_off";
    const response = await fetch(buildEntityPath(entity.domain, entity.name, action), { method: "POST" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return enabled;
  }

  throw new Error(`${entity.name} kan niet worden hersteld.`);
}
