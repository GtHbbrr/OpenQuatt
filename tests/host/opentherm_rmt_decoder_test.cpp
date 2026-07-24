#include <assert.h>
#include <stddef.h>
#include <stdint.h>

#include "../../components/opentherm/opentherm_rmt_decoder.h"

namespace {

using esphome::opentherm::rmt_decoder::DecodeError;
using esphome::opentherm::rmt_decoder::CaptureFailure;
using esphome::opentherm::rmt_decoder::Pulse;

uint32_t with_even_parity(uint32_t value_without_parity) {
  value_without_parity &= 0x7FFFFFFFU;
  if (!esphome::opentherm::rmt_decoder::has_even_parity(value_without_parity)) {
    value_without_parity |= 0x80000000U;
  }
  return value_without_parity;
}

struct EncodedFrame {
  Pulse pulses[68]{};
  size_t size{0};

  void erase_first() {
    for (size_t index = 1; index < size; index++) {
      pulses[index - 1U] = pulses[index];
    }
    size--;
  }

  void erase_last() { size--; }
};

EncodedFrame encode(uint32_t data, int jitter_us = 0) {
  uint8_t logical_half_bits[68]{};
  uint8_t captured_half_bits[68]{};
  size_t half_bit_count = 0;
  const auto append_bit = [&](bool value) {
    logical_half_bits[half_bit_count++] = value ? 0U : 1U;
    logical_half_bits[half_bit_count++] = value ? 1U : 0U;
  };

  append_bit(true);
  for (int bit = 31; bit >= 0; bit--) {
    append_bit(((data >> bit) & 1U) != 0);
  }
  append_bit(true);

  // Inverse of the single RMT interpretation used by the decoder: the first
  // captured half-bit is ignored, and every following half-bit is inverted.
  captured_half_bits[0] = 0U;
  for (size_t index = 0; index < 67U; index++) {
    captured_half_bits[index + 1U] = logical_half_bits[index] ^ 0x1U;
  }

  EncodedFrame encoded;
  size_t run_start = 0;
  while (run_start < 68U) {
    size_t run_end = run_start + 1U;
    while (run_end < 68U && captured_half_bits[run_end] == captured_half_bits[run_start]) {
      run_end++;
    }
    const int base_duration = static_cast<int>((run_end - run_start) * 500U);
    const int signed_jitter = encoded.size % 2U == 0U ? jitter_us : -jitter_us;
    encoded.pulses[encoded.size++] =
        Pulse{static_cast<uint16_t>(base_duration + signed_jitter), captured_half_bits[run_start] != 0U};
    run_start = run_end;
  }
  return encoded;
}

}  // namespace

int main() {
  const uint32_t data = with_even_parity(0x40001234U);

  const auto nominal = encode(data);
  auto decoded = esphome::opentherm::rmt_decoder::decode(nominal.pulses, nominal.size);
  assert(decoded.error == DecodeError::NONE);
  assert(decoded.data == data);

  const auto jittered = encode(data, 19);
  decoded = esphome::opentherm::rmt_decoder::decode(jittered.pulses, jittered.size);
  assert(decoded.error == DecodeError::NONE);
  assert(decoded.data == data);

  decoded = esphome::opentherm::rmt_decoder::decode(nullptr, 0);
  assert(decoded.error == DecodeError::TIMING);
  assert(decoded.capture_failure == CaptureFailure::HALF_BIT_COUNT);
  assert(decoded.pulse_count == 0U);
  assert(decoded.half_bit_count == 0U);

  auto missing_leading_half = nominal;
  assert(missing_leading_half.pulses[0].duration_us == 500);
  missing_leading_half.erase_first();
  decoded =
      esphome::opentherm::rmt_decoder::decode(missing_leading_half.pulses, missing_leading_half.size);
  assert(decoded.error == DecodeError::NONE);
  assert(decoded.data == data);

  const uint32_t trailing_data = with_even_parity(0x40001235U);
  auto missing_trailing_half = encode(trailing_data);
  assert(missing_trailing_half.pulses[missing_trailing_half.size - 1U].duration_us == 500);
  missing_trailing_half.erase_last();
  decoded =
      esphome::opentherm::rmt_decoder::decode(missing_trailing_half.pulses, missing_trailing_half.size);
  assert(decoded.error == DecodeError::NONE);
  assert(decoded.data == trailing_data);

  auto glitch = nominal;
  glitch.pulses[1].duration_us = 200;
  decoded = esphome::opentherm::rmt_decoder::decode(glitch.pulses, glitch.size);
  assert(decoded.error == DecodeError::GLITCH);
  assert(decoded.capture_failure == CaptureFailure::PULSE_DURATION);
  assert(decoded.failure_pulse_index == 1U);
  assert(decoded.failure_pulse_duration_us == 200U);

  auto invalid_timing = nominal;
  invalid_timing.pulses[1].duration_us = 750;
  decoded = esphome::opentherm::rmt_decoder::decode(invalid_timing.pulses, invalid_timing.size);
  assert(decoded.error == DecodeError::TIMING);
  assert(decoded.capture_failure == CaptureFailure::PULSE_DURATION);
  assert(decoded.failure_pulse_index == 1U);
  assert(decoded.failure_pulse_duration_us == 750U);

  auto too_many_half_bits = nominal;
  too_many_half_bits.pulses[too_many_half_bits.size++] = Pulse{1000U, false};
  decoded =
      esphome::opentherm::rmt_decoder::decode(too_many_half_bits.pulses, too_many_half_bits.size);
  assert(decoded.error == DecodeError::TIMING);
  assert(decoded.capture_failure == CaptureFailure::HALF_BIT_OVERFLOW);
  assert(decoded.failure_pulse_index == too_many_half_bits.size - 1U);
  assert(decoded.failure_pulse_duration_us == 1000U);
  assert(decoded.half_bit_count == 68U);

  auto too_few_half_bits = nominal;
  too_few_half_bits.erase_last();
  too_few_half_bits.erase_last();
  decoded =
      esphome::opentherm::rmt_decoder::decode(too_few_half_bits.pulses, too_few_half_bits.size);
  assert(decoded.error == DecodeError::TIMING);
  assert(decoded.capture_failure == CaptureFailure::HALF_BIT_COUNT);
  assert(decoded.failure_pulse_index == too_few_half_bits.size);
  assert(decoded.failure_pulse_duration_us == 0U);
  assert(decoded.half_bit_count < 67U);

  auto invalid_manchester = nominal;
  invalid_manchester.pulses[1].level = invalid_manchester.pulses[0].level;
  decoded =
      esphome::opentherm::rmt_decoder::decode(invalid_manchester.pulses, invalid_manchester.size);
  assert(decoded.error != DecodeError::NONE);

  const auto invalid_parity = encode(data ^ 0x1U);
  decoded = esphome::opentherm::rmt_decoder::decode(invalid_parity.pulses, invalid_parity.size);
  assert(decoded.error == DecodeError::PARITY);

  return 0;
}
