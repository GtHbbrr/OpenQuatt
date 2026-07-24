#pragma once

#include <stdint.h>

namespace oq_otb {

constexpr uint8_t OFF_FLUSH_TYPE_READ_DATA = 0;
constexpr uint8_t OFF_FLUSH_TYPE_WRITE_DATA = 1;
constexpr uint8_t OFF_FLUSH_TYPE_READ_ACK = 4;
constexpr uint8_t OFF_FLUSH_TYPE_WRITE_ACK = 5;
constexpr uint8_t OFF_FLUSH_ID_STATUS = 0;
constexpr uint8_t OFF_FLUSH_ID_CH_SETPOINT = 1;

class OffFlushState {
 public:
  void begin() {
    this->active_ = true;
    this->status_off_sent_ = false;
    this->setpoint_zero_sent_ = false;
    this->status_off_acknowledged_ = false;
    this->setpoint_zero_acknowledged_ = false;
  }

  void end() { this->active_ = false; }

  void record_request(
      uint8_t message_id, uint8_t message_type,
      uint8_t value_hb, uint8_t value_lb) {
    if (!this->active_) return;

    if (message_id == OFF_FLUSH_ID_STATUS &&
        message_type == OFF_FLUSH_TYPE_READ_DATA &&
        (value_hb & 0x01U) == 0U) {
      this->status_off_sent_ = true;
    } else if (
        message_id == OFF_FLUSH_ID_CH_SETPOINT &&
        message_type == OFF_FLUSH_TYPE_WRITE_DATA &&
        value_hb == 0U && value_lb == 0U) {
      this->setpoint_zero_sent_ = true;
    }
  }

  void record_response(
      uint8_t message_id, uint8_t message_type,
      uint8_t value_hb, uint8_t value_lb) {
    if (!this->active_) return;

    if (message_id == OFF_FLUSH_ID_STATUS &&
        message_type == OFF_FLUSH_TYPE_READ_ACK &&
        this->status_off_sent_) {
      this->status_off_acknowledged_ = true;
    } else if (
        message_id == OFF_FLUSH_ID_CH_SETPOINT &&
        message_type == OFF_FLUSH_TYPE_WRITE_ACK &&
        value_hb == 0U && value_lb == 0U &&
        this->setpoint_zero_sent_) {
      this->setpoint_zero_acknowledged_ = true;
    }
  }

  bool active() const { return this->active_; }
  bool complete() const {
    return this->status_off_acknowledged_ &&
           this->setpoint_zero_acknowledged_;
  }
  bool status_off_acknowledged() const {
    return this->status_off_acknowledged_;
  }
  bool setpoint_zero_acknowledged() const {
    return this->setpoint_zero_acknowledged_;
  }

 private:
  bool active_{false};
  bool status_off_sent_{false};
  bool setpoint_zero_sent_{false};
  bool status_off_acknowledged_{false};
  bool setpoint_zero_acknowledged_{false};
};

inline OffFlushState off_flush_state;

}  // namespace oq_otb
