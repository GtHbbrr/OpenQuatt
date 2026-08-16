#pragma once

#include <math.h>
#include <stdint.h>
#include <string.h>

namespace oq_supply_calibration {

enum SourceCode : int32_t {
  SOURCE_NONE = 0,
  SOURCE_LOCAL_PT1000 = 1,
  SOURCE_LOCAL_DS18B20 = 2,
  SOURCE_CIC = 3,
  SOURCE_HA_INPUT = 4,
};

struct SourceIdentity {
  SourceCode code;
  uint32_t fingerprint;
  bool ready;
};

inline uint32_t fnv1a_byte(uint32_t hash, uint8_t value) { return (hash ^ value) * 16777619UL; }

inline uint32_t fingerprint(SourceCode code, const char* identity) {
  uint32_t hash = 2166136261UL;
  const uint32_t source = static_cast<uint32_t>(code);
  for (unsigned shift = 0; shift < 32; shift += 8) {
    hash = fnv1a_byte(hash, static_cast<uint8_t>((source >> shift) & 0xFFU));
  }
  if (identity != nullptr) {
    while (*identity != '\0') {
      hash = fnv1a_byte(hash, static_cast<uint8_t>(*identity));
      identity++;
    }
  }
  return hash == 0 ? 1 : hash;
}

inline SourceIdentity source_identity(const char* selected_source, bool q_hardware, const char* local_source,
                                      bool local_source_ready, const char* cic_url, bool cic_url_ready,
                                      const char* ha_entity_id) {
  if (selected_source != nullptr && strcmp(selected_source, "Local") == 0) {
    if (!q_hardware) {
      return {SOURCE_LOCAL_DS18B20, fingerprint(SOURCE_LOCAL_DS18B20, "local:ds18b20"), true};
    }
    if (!local_source_ready) return {SOURCE_NONE, 0, false};
    if (local_source != nullptr && strcmp(local_source, "PT1000") == 0) {
      return {SOURCE_LOCAL_PT1000, fingerprint(SOURCE_LOCAL_PT1000, "local:pt1000"), true};
    }
    if (local_source != nullptr && strcmp(local_source, "DS18B20") == 0) {
      return {SOURCE_LOCAL_DS18B20, fingerprint(SOURCE_LOCAL_DS18B20, "local:ds18b20"), true};
    }
    return {SOURCE_NONE, 0, false};
  }
  if (selected_source != nullptr && strcmp(selected_source, "CIC") == 0) {
    if (!cic_url_ready) return {SOURCE_NONE, 0, false};
    return {SOURCE_CIC, fingerprint(SOURCE_CIC, cic_url), true};
  }
  if (selected_source != nullptr && strcmp(selected_source, "HA input") == 0) {
    if (ha_entity_id == nullptr || ha_entity_id[0] == '\0') return {SOURCE_NONE, 0, false};
    return {SOURCE_HA_INPUT, fingerprint(SOURCE_HA_INPUT, ha_entity_id), true};
  }
  return {SOURCE_NONE, 0, false};
}

inline uint32_t record_checksum(int32_t source_code, uint32_t source_fingerprint, float offset_c) {
  uint32_t offset_bits = 0;
  static_assert(sizeof(offset_bits) == sizeof(offset_c), "Unexpected float size");
  memcpy(&offset_bits, &offset_c, sizeof(offset_bits));

  uint32_t hash = 2166136261UL;
  const uint32_t values[] = {static_cast<uint32_t>(source_code), source_fingerprint, offset_bits};
  for (uint32_t value : values) {
    for (unsigned shift = 0; shift < 32; shift += 8) {
      hash = fnv1a_byte(hash, static_cast<uint8_t>((value >> shift) & 0xFFU));
    }
  }
  return hash == 0 ? 1 : hash;
}

inline bool record_matches(int32_t source_code, uint32_t source_fingerprint, uint32_t checksum, float offset_c,
                           const SourceIdentity& current, float max_offset_c = 2.0f) {
  return current.ready && source_code > SOURCE_NONE && source_code == static_cast<int32_t>(current.code) &&
         source_fingerprint == current.fingerprint && isfinite(offset_c) && fabsf(offset_c) <= max_offset_c &&
         checksum == record_checksum(source_code, source_fingerprint, offset_c);
}

inline int32_t stale_source_code(int32_t source_code) { return source_code > SOURCE_NONE ? -source_code : source_code; }

inline const char* source_label(int32_t source_code) {
  switch (source_code) {
    case SOURCE_LOCAL_PT1000:
    case -SOURCE_LOCAL_PT1000:
      return "Local - PT1000";
    case SOURCE_LOCAL_DS18B20:
    case -SOURCE_LOCAL_DS18B20:
      return "Local - DS18B20";
    case SOURCE_CIC:
    case -SOURCE_CIC:
      return "CIC";
    case SOURCE_HA_INPUT:
    case -SOURCE_HA_INPUT:
      return "HA input";
    default:
      return "Unknown";
  }
}

inline float rounded_offset(float value) {
  const float rounded = roundf(value * 100.0f) * 0.01f;
  return rounded == 0.0f ? 0.0f : rounded;
}

}  // namespace oq_supply_calibration
