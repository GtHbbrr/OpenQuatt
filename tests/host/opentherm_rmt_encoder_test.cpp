#include <assert.h>
#include <stddef.h>
#include <stdint.h>

#include "../../components/opentherm/opentherm_rmt_encoder.h"

namespace {

namespace encoder = esphome::opentherm::rmt_encoder;

void assert_symbol(const encoder::Symbol &symbol, bool bit) {
  assert(symbol.level0 == !bit);
  assert(symbol.duration0_us == 500U);
  assert(symbol.level1 == bit);
  assert(symbol.duration1_us == 500U);
}

}  // namespace

int main() {
  static_assert(encoder::FRAME_SYMBOLS == 34U);
  static_assert(encoder::HALF_BIT_DURATION_US == 500U);
  static_assert(encoder::IDLE_LEVEL);

  assert_symbol(encoder::encode_bit(false), false);
  assert_symbol(encoder::encode_bit(true), true);

  const uint32_t data = 0xA5963CC3U;
  assert(encoder::frame_bit(data, 0U));
  assert(encoder::frame_bit(data, encoder::FRAME_SYMBOLS - 1U));
  for (size_t symbol_index = 1; symbol_index < encoder::FRAME_SYMBOLS - 1U; symbol_index++) {
    const bool expected = ((data >> (32U - symbol_index)) & 0x1U) != 0;
    assert(encoder::frame_bit(data, symbol_index) == expected);
    assert_symbol(encoder::encode_frame_symbol(data, symbol_index), expected);
  }
  assert(!encoder::frame_bit(data, encoder::FRAME_SYMBOLS));

  assert_symbol(encoder::encode_frame_symbol(data, 0U), true);
  assert_symbol(encoder::encode_frame_symbol(data, encoder::FRAME_SYMBOLS - 1U), true);
  return 0;
}
