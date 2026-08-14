#include "OpenQuattW5500PowerDown.h"

#include "esphome/core/hal.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_w5500_power_down {

static const char* const TAG = "openquatt.w5500_power";

void OpenQuattW5500PowerDown::setup() {
  this->spi_setup();

  const uint8_t version = this->read_register_(VERSIONR_REGISTER);
  if (version != VERSIONR_EXPECTED) {
    ESP_LOGE(TAG, "W5500 not detected: VERSIONR=0x%02X (expected 0x%02X)", version, VERSIONR_EXPECTED);
    this->mark_failed();
    return;
  }

  const uint8_t initial_phycfgr = this->read_register_(PHYCFGR_REGISTER);

  // W5500 datasheet PHY reconfiguration sequence:
  // select software-controlled Power Down, assert PHY reset, then release reset.
  this->write_register_(PHYCFGR_REGISTER, PHYCFGR_POWER_DOWN);
  this->write_register_(PHYCFGR_REGISTER, PHYCFGR_POWER_DOWN_RESET);
  delay(PHY_RESET_HOLD_MS);
  this->write_register_(PHYCFGR_REGISTER, PHYCFGR_POWER_DOWN);

  const uint8_t final_phycfgr = this->read_register_(PHYCFGR_REGISTER);
  this->power_down_active_ = (final_phycfgr & PHYCFGR_CONFIGURATION_MASK) == PHYCFGR_POWER_DOWN;
  if (!this->power_down_active_) {
    ESP_LOGE(TAG, "W5500 Power Down verification failed: PHYCFGR=0x%02X", final_phycfgr);
    this->mark_failed();
    return;
  }

  ESP_LOGI(TAG, "W5500 PHY powered down: PHYCFGR 0x%02X -> 0x%02X", initial_phycfgr, final_phycfgr);
}

void OpenQuattW5500PowerDown::dump_config() {
  ESP_LOGCONFIG(TAG, "W5500 Wi-Fi Power Down:");
  LOG_SPI_DEVICE(this);
  ESP_LOGCONFIG(TAG, "  State: %s", this->power_down_active_ ? "POWER DOWN" : "NOT VERIFIED");
}

uint8_t OpenQuattW5500PowerDown::read_register_(uint16_t address) {
  this->enable();
  this->write_byte(static_cast<uint8_t>(address >> 8));
  this->write_byte(static_cast<uint8_t>(address));
  this->write_byte(0x00);  // Common register block, read, variable data length.
  const uint8_t value = this->read_byte();
  this->disable();
  return value;
}

void OpenQuattW5500PowerDown::write_register_(uint16_t address, uint8_t value) {
  this->enable();
  this->write_byte(static_cast<uint8_t>(address >> 8));
  this->write_byte(static_cast<uint8_t>(address));
  this->write_byte(0x04);  // Common register block, write, variable data length.
  this->write_byte(value);
  this->disable();
}

}  // namespace openquatt_w5500_power_down
}  // namespace esphome
