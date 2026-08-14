#pragma once

namespace esphome {
namespace openquatt_trends {

struct TrendStorageCapabilities {
  bool ram_history_available;
  bool flash_archive_available;
};

constexpr TrendStorageCapabilities trend_storage_capabilities(bool ram_history_allocated, bool flash_index_allocated,
                                                              bool flash_partition_available) {
  return TrendStorageCapabilities{
      ram_history_allocated,
      flash_index_allocated && flash_partition_available,
  };
}

}  // namespace openquatt_trends
}  // namespace esphome
