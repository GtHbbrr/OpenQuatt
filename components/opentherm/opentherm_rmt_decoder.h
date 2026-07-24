#pragma once

#include <stddef.h>
#include <stdint.h>

namespace esphome::opentherm::rmt_decoder {

static constexpr size_t FRAME_BITS = 34;
static constexpr size_t HALF_BITS = FRAME_BITS * 2;
static constexpr uint16_t HALF_BIT_MIN_US = 380;
static constexpr uint16_t HALF_BIT_MAX_US = 620;
static constexpr uint16_t FULL_BIT_MIN_US = 880;
static constexpr uint16_t FULL_BIT_MAX_US = 1120;

inline bool completion_is_within_deadline(
    uint32_t completed_us, uint32_t deadline_us) {
  return static_cast<int32_t>(completed_us - deadline_us) <= 0;
}

struct Pulse {
  uint16_t duration_us;
  bool level;
};

enum class DecodeError : uint8_t {
  NONE = 0,
  GLITCH,
  TIMING,
  START_BIT,
  MANCHESTER,
  STOP_BIT,
  PARITY,
};

enum class CaptureFailure : uint8_t {
  NONE = 0,
  PULSE_DURATION,
  HALF_BIT_OVERFLOW,
  HALF_BIT_COUNT,
};

struct DecodeResult {
  uint32_t data{0};
  DecodeError error{DecodeError::NONE};
  uint8_t bit_position{0};
  size_t pulse_count{0};
  size_t failure_pulse_index{0};
  uint16_t failure_pulse_duration_us{0};
  size_t half_bit_count{0};
  CaptureFailure capture_failure{CaptureFailure::NONE};
};

inline bool has_even_parity(uint32_t value) {
  value ^= value >> 16;
  value ^= value >> 8;
  value ^= value >> 4;
  value ^= value >> 2;
  value ^= value >> 1;
  return (~value) & 1U;
}

inline DecodeResult decode(const Pulse *pulses, size_t pulse_count) {
  DecodeResult result{};
  result.pulse_count = pulse_count;
  uint8_t half_bits[HALF_BITS]{};
  uint8_t decoded_half_bits[HALF_BITS]{};
  size_t half_bit_count = 0;

  for (size_t pulse_index = 0; pulse_index < pulse_count; pulse_index++) {
    const Pulse &pulse = pulses[pulse_index];
    if (pulse.duration_us == 0) {
      continue;
    }

    uint8_t repeats = 0;
    if (pulse.duration_us >= HALF_BIT_MIN_US && pulse.duration_us <= HALF_BIT_MAX_US) {
      repeats = 1;
    } else if (pulse.duration_us >= FULL_BIT_MIN_US && pulse.duration_us <= FULL_BIT_MAX_US) {
      repeats = 2;
    } else {
      result.error = pulse.duration_us < HALF_BIT_MIN_US ? DecodeError::GLITCH : DecodeError::TIMING;
      result.failure_pulse_index = pulse_index;
      result.failure_pulse_duration_us = pulse.duration_us;
      result.half_bit_count = half_bit_count;
      result.capture_failure = CaptureFailure::PULSE_DURATION;
      return result;
    }

    if (half_bit_count + repeats > HALF_BITS) {
      result.error = DecodeError::TIMING;
      result.failure_pulse_index = pulse_index;
      result.failure_pulse_duration_us = pulse.duration_us;
      result.half_bit_count = half_bit_count;
      result.capture_failure = CaptureFailure::HALF_BIT_OVERFLOW;
      return result;
    }
    for (uint8_t repeat = 0; repeat < repeats; repeat++) {
      half_bits[half_bit_count++] = pulse.level ? 1U : 0U;
    }
  }

  // RMT starts at the first transition and may therefore omit the leading low
  // half of the start bit. It may likewise omit the final high half when the
  // frame is terminated by the idle-range threshold. Only salvage those two
  // exact 67-half-bit boundary cases.
  if (half_bit_count == HALF_BITS - 1U && half_bit_count > 0) {
    if (half_bits[0] == 1U) {
      for (size_t index = half_bit_count; index > 0; index--) {
        half_bits[index] = half_bits[index - 1U];
      }
      half_bits[0] = 0U;
      half_bit_count++;
    } else if (half_bits[half_bit_count - 1U] == 0U) {
      half_bits[half_bit_count++] = 1U;
    }
  }

  if (half_bit_count != HALF_BITS) {
    result.error = DecodeError::TIMING;
    result.failure_pulse_index = pulse_count;
    result.half_bit_count = half_bit_count;
    result.capture_failure = CaptureFailure::HALF_BIT_COUNT;
    return result;
  }
  result.half_bit_count = half_bit_count;

  // The OpenQuatt OT input front-end presents an inverted signal, and RMT
  // starts capturing at the first edge rather than at the logical frame
  // boundary. The existing OpenQuatt OT-slave receiver has established this
  // single one-half-bit-forward, inverted interpretation in long-running HIL.
  for (size_t index = 0; index < HALF_BITS - 1U; index++) {
    decoded_half_bits[index] = half_bits[index + 1U] ^ 0x1U;
  }
  decoded_half_bits[HALF_BITS - 1U] = decoded_half_bits[HALF_BITS - 2U] ^ 0x1U;

  for (size_t bit_index = 0; bit_index < FRAME_BITS; bit_index++) {
    result.bit_position = static_cast<uint8_t>(bit_index);
    const uint8_t first = decoded_half_bits[bit_index * 2U];
    const uint8_t second = decoded_half_bits[(bit_index * 2U) + 1U];
    bool bit_value = false;
    if (first == 0U && second == 1U) {
      bit_value = true;
    } else if (first == 1U && second == 0U) {
      bit_value = false;
    } else {
      result.error = bit_index == 0 ? DecodeError::START_BIT : DecodeError::MANCHESTER;
      return result;
    }

    if (bit_index == 0) {
      if (!bit_value) {
        result.error = DecodeError::START_BIT;
        return result;
      }
      continue;
    }
    if (bit_index == FRAME_BITS - 1U) {
      if (!bit_value) {
        result.error = DecodeError::STOP_BIT;
        return result;
      }
      break;
    }
    result.data = (result.data << 1U) | static_cast<uint32_t>(bit_value);
  }

  if (!has_even_parity(result.data)) {
    result.error = DecodeError::PARITY;
    return result;
  }

  result.error = DecodeError::NONE;
  return result;
}

}  // namespace esphome::opentherm::rmt_decoder
