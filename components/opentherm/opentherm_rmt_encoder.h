#pragma once

#include <stddef.h>
#include <stdint.h>

namespace esphome::opentherm::rmt_encoder {

static constexpr size_t FRAME_SYMBOLS = 34;
static constexpr uint16_t HALF_BIT_DURATION_US = 500;
static constexpr bool IDLE_LEVEL = true;

struct Symbol {
  bool level0;
  uint16_t duration0_us;
  bool level1;
  uint16_t duration1_us;
};

inline Symbol encode_bit(bool bit) {
  return Symbol{
      .level0 = !bit,
      .duration0_us = HALF_BIT_DURATION_US,
      .level1 = bit,
      .duration1_us = HALF_BIT_DURATION_US,
  };
}

inline bool frame_bit(uint32_t data, size_t symbol_index) {
  if (symbol_index == 0 || symbol_index == FRAME_SYMBOLS - 1U) {
    return true;
  }
  if (symbol_index >= FRAME_SYMBOLS) {
    return false;
  }
  return ((data >> (32U - symbol_index)) & 0x1U) != 0;
}

inline Symbol encode_frame_symbol(uint32_t data, size_t symbol_index) {
  return encode_bit(frame_bit(data, symbol_index));
}

}  // namespace esphome::opentherm::rmt_encoder
