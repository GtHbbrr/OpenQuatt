#pragma once

#include <cstdint>

#include "esphome/components/spi/spi.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_w5500_power_down {

class OpenQuattW5500PowerDown
    : public Component,
      public spi::SPIDevice<spi::BIT_ORDER_MSB_FIRST, spi::CLOCK_POLARITY_LOW, spi::CLOCK_PHASE_LEADING,
                            spi::DATA_RATE_8MHZ> {
 public:
  void setup() override;
  void dump_config() override;
  float get_setup_priority() const override { return setup_priority::HARDWARE; }

 protected:
  static constexpr uint16_t PHYCFGR_REGISTER = 0x002E;
  static constexpr uint16_t VERSIONR_REGISTER = 0x0039;
  static constexpr uint8_t VERSIONR_EXPECTED = 0x04;
  static constexpr uint8_t PHYCFGR_POWER_DOWN = 0xF0;
  static constexpr uint8_t PHYCFGR_POWER_DOWN_RESET = 0x70;
  static constexpr uint8_t PHYCFGR_CONFIGURATION_MASK = 0xF8;
  static constexpr uint32_t PHY_RESET_HOLD_MS = 10;

  uint8_t read_register_(uint16_t address);
  void write_register_(uint16_t address, uint8_t value);

  bool power_down_active_{false};
};

}  // namespace openquatt_w5500_power_down
}  // namespace esphome
