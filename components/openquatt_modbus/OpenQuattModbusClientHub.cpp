#include "OpenQuattModbusClientHub.h"

#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_modbus {

void OpenQuattModbusClientHub::parse_modbus_frames() {
  if (this->rx_buffer_.empty()) {
    return;
  }

  size_t size;
  do {
    size = this->rx_buffer_.size();
    if (!this->parse_modbus_server_frame_()) {
      increment_(this->parse_failed_count_);
      this->clear_rx_buffer_(LOG_STR("parse failed"), true);
    }
  } while (!this->rx_buffer_.empty() && size > this->rx_buffer_.size());

  if (!this->rx_buffer_.empty() && this->timeout_()) {
    increment_(this->partial_response_count_);
    this->clear_rx_buffer_(LOG_STR("timeout after partial response"), true);
  }
}

}  // namespace openquatt_modbus
}  // namespace esphome
