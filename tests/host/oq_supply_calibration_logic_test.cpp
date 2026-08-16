#include <assert.h>
#include <limits.h>
#include <math.h>

#include "../../openquatt/includes/control/oq_supply_calibration_logic.h"

int main() {
  using namespace oq_supply_calibration;

  const auto pt1000 = source_identity("Local", true, "PT1000", true, "", false, "sensor.supply");
  const auto ds18b20 = source_identity("Local", true, "DS18B20", true, "", false, "sensor.supply");
  const auto non_q_local = source_identity("Local", false, "", false, "", false, "sensor.supply");
  const auto cic_a = source_identity("CIC", false, "", false, "http://cic-a/feed", true, "sensor.supply");
  const auto cic_b = source_identity("CIC", false, "", false, "http://cic-b/feed", true, "sensor.supply");
  const auto ha_a = source_identity("HA input", false, "", false, "", false, "sensor.supply-a");
  const auto ha_b = source_identity("HA input", false, "", false, "", false, "sensor.supply-b");

  assert(pt1000.ready && pt1000.code == SOURCE_LOCAL_PT1000);
  assert(ds18b20.ready && ds18b20.code == SOURCE_LOCAL_DS18B20);
  assert(non_q_local.ready && non_q_local.code == SOURCE_LOCAL_DS18B20);
  assert(pt1000.fingerprint != ds18b20.fingerprint);
  assert(cic_a.fingerprint != cic_b.fingerprint);
  assert(ha_a.fingerprint != ha_b.fingerprint);
  assert(!source_identity("CIC", false, "", false, "", false, "sensor.supply").ready);

  constexpr float offset = -0.37f;
  const uint32_t checksum = record_checksum(SOURCE_CIC, cic_a.fingerprint, offset);
  assert(record_matches(SOURCE_CIC, cic_a.fingerprint, checksum, offset, cic_a));
  assert(!record_matches(SOURCE_CIC, cic_a.fingerprint, checksum, offset, cic_b));
  assert(!record_matches(SOURCE_CIC, cic_a.fingerprint, checksum, offset + 0.01f, cic_a));
  assert(!record_matches(SOURCE_CIC, cic_a.fingerprint, checksum ^ 1U, offset, cic_a));
  assert(!record_matches(-SOURCE_CIC, cic_a.fingerprint, checksum, offset, cic_a));
  assert(!record_matches(SOURCE_CIC, cic_a.fingerprint, checksum, 2.01f, cic_a));
  assert(stale_source_code(SOURCE_CIC) == -SOURCE_CIC);
  assert(stale_source_code(-SOURCE_CIC) == -SOURCE_CIC);
  assert(rounded_offset(0.126f) == 0.13f);
  assert(!signbit(rounded_offset(-0.004f)));
  assert(strcmp(source_label(INT32_MIN), "Unknown") == 0);
  return 0;
}
