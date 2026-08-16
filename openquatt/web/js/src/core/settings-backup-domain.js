export const SETTINGS_BACKUP_MIN_SCHEMA_VERSION = 1;
export const SETTINGS_BACKUP_MAX_CALIBRATION_OFFSET_C = 2;

export const SETTINGS_BACKUP_MQTT_INPUT_KEYS = Object.freeze([
  "cooling_dew_point",
  "outside_temperature",
  "room_temperature",
  "room_setpoint",
  "heating_enable",
  "cooling_enable",
]);

export const SETTINGS_BACKUP_MQTT_RETAINED_KEYS = Object.freeze([
  "room_setpoint",
  "heating_enable",
  "cooling_enable",
]);

const SETTINGS_BACKUP_MQTT_SOURCE_KEYS = new Set([
  "coolingDewPointSource",
  "outsideTempSource",
  "roomTempSource",
  "roomSetpointSource",
  "heatingEnableSource",
  "coolingEnableSource",
]);

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function normalizeCalibrationOffset(value, label) {
  if (typeof value !== "number" || !Number.isFinite(value) || Math.abs(value) > SETTINGS_BACKUP_MAX_CALIBRATION_OFFSET_C) {
    throw new Error(`Kalibratiewaarde ${label} in backup is ongeldig.`);
  }
  return Object.is(value, -0) ? 0 : value;
}

export function buildSettingsBackupCalibrationConfig(values, fields) {
  const offsets = {};
  const source = isObject(values) ? values : {};
  (fields || []).forEach((field) => {
    if (!Object.prototype.hasOwnProperty.call(source, field.key)) {
      return;
    }
    offsets[field.id] = normalizeCalibrationOffset(source[field.key], field.label || field.id);
  });
  return { temperature_offsets: offsets };
}

export function normalizeSettingsBackupCalibrationConfig(value, fields, legacySettings = null) {
  if (value !== null && value !== undefined && !isObject(value)) {
    throw new Error("Kalibraties in backup zijn ongeldig.");
  }
  const offsets = value === null || value === undefined
    ? {}
    : value.temperature_offsets;
  if (offsets !== undefined && !isObject(offsets)) {
    throw new Error("Temperatuurkalibraties in backup zijn ongeldig.");
  }

  const normalized = {};
  const legacyValues = isObject(legacySettings?.sensor_sources) ? legacySettings.sensor_sources : {};
  (fields || []).forEach((field) => {
    const hasCurrentValue = isObject(offsets) && Object.prototype.hasOwnProperty.call(offsets, field.id);
    const hasLegacyValue = Object.prototype.hasOwnProperty.call(legacyValues, field.key);
    if (!hasCurrentValue && !hasLegacyValue) {
      return;
    }
    const rawValue = hasCurrentValue ? offsets[field.id] : legacyValues[field.key];
    normalized[field.id] = normalizeCalibrationOffset(rawValue, field.label || field.id);
  });
  return { temperature_offsets: normalized };
}

export function collectUnknownSettingsBackupCalibrationIds(value, fields) {
  const offsets = isObject(value?.temperature_offsets) ? value.temperature_offsets : {};
  const knownIds = new Set((fields || []).map((field) => field.id));
  return Object.keys(offsets).filter((id) => !knownIds.has(id)).sort();
}

function pickBooleanMap(source, keys, fallback = false) {
  const values = isObject(source) ? source : {};
  return Object.fromEntries(keys.map((key) => [key, Object.prototype.hasOwnProperty.call(values, key)
    ? values[key] === true || String(values[key]).toLowerCase() === "true"
    : fallback]));
}

export function buildSettingsBackupMqttConfig(status) {
  if (!isObject(status)) {
    return null;
  }

  const port = Number(status.port || 1883);
  return {
    enabled: status.enabled === true,
    broker: String(status.broker || "").trim(),
    port: Number.isInteger(port) && port >= 1 && port <= 65535 ? port : 1883,
    username: String(status.username || "").trim(),
    password_was_set: status.password_set === true,
    input_enabled: pickBooleanMap(status.input_enabled, SETTINGS_BACKUP_MQTT_INPUT_KEYS, true),
    input_accept_retained: pickBooleanMap(status.input_accept_retained, SETTINGS_BACKUP_MQTT_RETAINED_KEYS, true),
  };
}

export function normalizeSettingsBackupMqttConfig(value) {
  if (value === null || value === undefined) {
    return null;
  }
  if (!isObject(value)) {
    throw new Error("MQTT-configuratie in backup is ongeldig.");
  }

  const broker = String(value.broker || "").trim();
  const username = String(value.username || "").trim();
  const port = Number(value.port);
  const enabled = value.enabled === true;
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("MQTT-poort in backup is ongeldig.");
  }
  if (broker.length > 64 || (enabled && !broker)) {
    throw new Error("MQTT-broker in backup is ongeldig.");
  }
  if (username.length > 64) {
    throw new Error("MQTT-gebruikersnaam in backup is ongeldig.");
  }

  return {
    enabled,
    broker,
    port,
    username,
    password_was_set: value.password_was_set === true,
    input_enabled: pickBooleanMap(value.input_enabled, SETTINGS_BACKUP_MQTT_INPUT_KEYS, true),
    input_accept_retained: pickBooleanMap(value.input_accept_retained, SETTINGS_BACKUP_MQTT_RETAINED_KEYS, true),
  };
}

export function settingsBackupMqttNeedsPassword(mqtt) {
  return Boolean(mqtt?.password_was_set);
}

export function isSettingsBackupMqttSourceSelection(key, value) {
  return SETTINGS_BACKUP_MQTT_SOURCE_KEYS.has(key) && /\bMQTT\b/i.test(String(value || ""));
}

export function collectUnknownSettingsBackupItems(settings, sections) {
  const knownSections = new Map((sections || []).map((section) => [section.id, new Set(section.keys || [])]));
  const unknown = [];
  Object.entries(isObject(settings) ? settings : {}).forEach(([sectionId, values]) => {
    const knownKeys = knownSections.get(sectionId);
    if (!knownKeys) {
      if (isObject(values)) {
        Object.keys(values).forEach((key) => unknown.push({ section: sectionId, key }));
      } else {
        unknown.push({ section: sectionId, key: sectionId });
      }
      return;
    }
    if (!isObject(values)) {
      return;
    }
    Object.keys(values).forEach((key) => {
      if (!knownKeys.has(key)) {
        unknown.push({ section: sectionId, key });
      }
    });
  });
  return unknown;
}
