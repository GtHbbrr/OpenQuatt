#include <cassert>

#include "components/openquatt_trends/OpenQuattTrendsStoragePolicy.h"

using esphome::openquatt_trends::trend_storage_capabilities;

int main() {
  const auto full = trend_storage_capabilities(true, true, true);
  assert(full.ram_history_available);
  assert(full.flash_archive_available);

  // A missing flash index must degrade to RAM-only history. Flash restore and
  // writes stay unavailable, so they cannot repeatedly clear the RAM ring.
  const auto missing_index = trend_storage_capabilities(true, false, true);
  assert(missing_index.ram_history_available);
  assert(!missing_index.flash_archive_available);

  const auto missing_partition = trend_storage_capabilities(true, true, false);
  assert(missing_partition.ram_history_available);
  assert(!missing_partition.flash_archive_available);

  // Existing flash history remains readable when only RAM capture is
  // unavailable.
  const auto flash_only = trend_storage_capabilities(false, true, true);
  assert(!flash_only.ram_history_available);
  assert(flash_only.flash_archive_available);

  return 0;
}
