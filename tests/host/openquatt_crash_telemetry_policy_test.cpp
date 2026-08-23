#include <cassert>

#include "components/openquatt_crash_telemetry/OpenQuattCrashTelemetryPolicy.h"

using esphome::openquatt_crash_telemetry::crash_data_may_be_published;
using esphome::openquatt_crash_telemetry::CrashPublishKind;
using esphome::openquatt_crash_telemetry::select_crash_publish_kind;
using esphome::openquatt_crash_telemetry::should_request_tombstone;

int main() {
  assert(select_crash_publish_kind(true, false, false, false) == CrashPublishKind::TOMBSTONE);
  assert(select_crash_publish_kind(false, true, true, true) == CrashPublishKind::CRASH);
  assert(select_crash_publish_kind(false, true, false, true) == CrashPublishKind::NONE);
  assert(select_crash_publish_kind(false, false, true, true) == CrashPublishKind::NONE);
  assert(select_crash_publish_kind(false, true, true, false) == CrashPublishKind::NONE);

  assert(should_request_tombstone(true, true, false, true));
  assert(!should_request_tombstone(false, true, false, true));
  assert(!should_request_tombstone(true, false, false, true));
  assert(!should_request_tombstone(true, true, true, true));
  assert(!should_request_tombstone(true, true, false, false));

  assert(crash_data_may_be_published(CrashPublishKind::CRASH, true, true));
  assert(!crash_data_may_be_published(CrashPublishKind::CRASH, false, true));
  assert(!crash_data_may_be_published(CrashPublishKind::CRASH, true, false));
  assert(crash_data_may_be_published(CrashPublishKind::TOMBSTONE, false, false));
  assert(!crash_data_may_be_published(CrashPublishKind::NONE, true, true));
  return 0;
}
