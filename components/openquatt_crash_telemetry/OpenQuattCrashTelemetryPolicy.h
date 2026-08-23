#pragma once

#include <cstdint>

namespace esphome::openquatt_crash_telemetry {

enum class CrashPublishKind : uint8_t {
  NONE = 0U,
  CRASH = 1U,
  TOMBSTONE = 2U,
};

inline constexpr CrashPublishKind select_crash_publish_kind(bool tombstone_pending, bool consent_enabled,
                                                            bool setup_complete, bool crash_pending) {
  if (tombstone_pending) {
    return CrashPublishKind::TOMBSTONE;
  }
  if (consent_enabled && setup_complete && crash_pending) {
    return CrashPublishKind::CRASH;
  }
  return CrashPublishKind::NONE;
}

inline constexpr bool should_request_tombstone(bool previous_consent_known, bool previous_consent_enabled,
                                               bool current_consent_enabled, bool installation_id_available) {
  return previous_consent_known && previous_consent_enabled && !current_consent_enabled &&
         installation_id_available;
}

inline constexpr bool crash_data_may_be_published(CrashPublishKind kind, bool consent_enabled, bool setup_complete) {
  if (kind == CrashPublishKind::TOMBSTONE) {
    return true;
  }
  return kind == CrashPublishKind::CRASH && consent_enabled && setup_complete;
}

}  // namespace esphome::openquatt_crash_telemetry
