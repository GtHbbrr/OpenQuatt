#pragma once

#include <cstddef>
#include <cstdint>

namespace esphome::openquatt_log_history {

static constexpr uint32_t CRASH_TIME_BREADCRUMB_MAGIC = 0x4F514348UL;  // OQCH
static constexpr uint16_t CRASH_TIME_BREADCRUMB_VERSION = 1U;
static constexpr uint32_t MIN_VALID_CRASH_EPOCH_S = 1704067200UL;  // 2024-01-01 00:00:00 UTC
static constexpr uint32_t MAX_VALID_CRASH_EPOCH_S = 2082758400UL;  // 2036-01-01 00:00:00 UTC

struct CrashTimeBreadcrumb {
  uint32_t magic;
  uint16_t version;
  uint16_t reserved;
  uint32_t epoch_s;
  uint32_t uptime_s;
  uint32_t sequence;
  uint32_t crc;
};

struct CrashTimeBreadcrumbSnapshot {
  uint32_t epoch_s;
  uint32_t uptime_s;
  uint32_t sequence;
};

inline bool crash_epoch_is_sane(uint32_t epoch_s) {
  return epoch_s >= MIN_VALID_CRASH_EPOCH_S && epoch_s < MAX_VALID_CRASH_EPOCH_S;
}

inline uint32_t crash_time_breadcrumb_checksum(const CrashTimeBreadcrumb& breadcrumb) {
  CrashTimeBreadcrumb copy = breadcrumb;
  copy.crc = 0U;
  const auto* bytes = reinterpret_cast<const uint8_t*>(&copy);
  uint32_t hash = 2166136261UL;
  for (size_t index = 0U; index < sizeof(copy); ++index) {
    hash ^= bytes[index];
    hash *= 16777619UL;
  }
  return hash;
}

inline bool crash_time_breadcrumb_is_valid(const CrashTimeBreadcrumb& breadcrumb) {
  return breadcrumb.magic == CRASH_TIME_BREADCRUMB_MAGIC && breadcrumb.version == CRASH_TIME_BREADCRUMB_VERSION &&
         crash_epoch_is_sane(breadcrumb.epoch_s) && breadcrumb.crc == crash_time_breadcrumb_checksum(breadcrumb);
}

bool read_crash_time_breadcrumb(CrashTimeBreadcrumbSnapshot* snapshot);
void invalidate_crash_time_breadcrumb();

}  // namespace esphome::openquatt_log_history
