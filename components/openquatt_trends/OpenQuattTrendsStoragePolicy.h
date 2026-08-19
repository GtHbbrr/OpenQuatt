#pragma once

#include <cstddef>
#include <cstdint>

namespace esphome {
namespace openquatt_trends {

struct TrendStorageCapabilities {
  bool ram_history_available;
  bool flash_archive_available;
};

enum class TrendArchiveLoadAction : uint8_t {
  WAIT = 0U,
  MARK_EMPTY_AS_SEEDED = 1U,
  MERGE_FLASH_INTO_RAM = 2U,
};

constexpr TrendStorageCapabilities trend_storage_capabilities(bool ram_history_allocated, bool flash_index_allocated,
                                                              bool flash_partition_available) {
  return TrendStorageCapabilities{
      ram_history_allocated,
      flash_index_allocated && flash_partition_available,
  };
}

constexpr TrendArchiveLoadAction trend_archive_load_action(bool archive_scanned, size_t indexed_block_count,
                                                           bool archive_seeded) {
  if (!archive_scanned || archive_seeded) {
    return TrendArchiveLoadAction::WAIT;
  }
  if (indexed_block_count == 0U) {
    return TrendArchiveLoadAction::MARK_EMPTY_AS_SEEDED;
  }
  return TrendArchiveLoadAction::MERGE_FLASH_INTO_RAM;
}

}  // namespace openquatt_trends
}  // namespace esphome
