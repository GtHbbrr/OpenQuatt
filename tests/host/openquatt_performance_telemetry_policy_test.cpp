#include <array>
#include <cassert>
#include <cstring>
#include <string>

#include "components/openquatt_performance_telemetry/OpenQuattPerformanceTelemetryPolicy.h"

using esphome::openquatt_performance_telemetry::append_json_escaped;
using esphome::openquatt_performance_telemetry::append_json_string;
using esphome::openquatt_performance_telemetry::FixedBufferWriter;
using esphome::openquatt_performance_telemetry::PERFORMANCE_SAMPLES_PER_MINUTE;
using esphome::openquatt_performance_telemetry::retry_due;
using esphome::openquatt_performance_telemetry::stable_minute;
using esphome::openquatt_performance_telemetry::valid_active_measurement;

int main() {
  assert(PERFORMANCE_SAMPLES_PER_MINUTE == 6U);
  assert(stable_minute(6U, false, 1U));
  assert(stable_minute(6U, false, 3U));
  assert(!stable_minute(5U, false, 1U));
  assert(!stable_minute(6U, true, 1U));
  assert(!stable_minute(6U, false, 0U));

  assert(retry_due(0x80000000U, 0U));
  assert(retry_due(100U, 100U));
  assert(retry_due(5U, 0xFFFFFFF0U));
  assert(!retry_due(100U, 101U));

  assert(valid_active_measurement(100.0f, 100.0f, 0.0f));
  assert(!valid_active_measurement(99.9f, 100.0f, 0.0f));
  assert(!valid_active_measurement(100.0f, 99.9f, 0.0f));
  assert(!valid_active_measurement(100.0f, 100.0f, -0.1f));

  std::array<char, 96U> escaped{};
  FixedBufferWriter writer(escaped.data(), escaped.size());
  writer += R"({"firmware":")";
  std::string firmware = "v1";
  firmware += '\\';
  firmware += '"';
  firmware += '\n';
  firmware += "test";
  append_json_escaped(writer, firmware);
  writer += R"("})";
  assert(writer.ok());
  assert(std::strcmp(escaped.data(), R"({"firmware":"v1\\\"\ntest"})") == 0);

  std::array<char, 64U> string_value{};
  FixedBufferWriter string_writer(string_value.data(), string_value.size());
  string_writer += R"({"mk":)";
  append_json_string(string_writer, "system_actual");
  string_writer += '}';
  assert(string_writer.ok());
  assert(std::strcmp(string_value.data(), R"({"mk":"system_actual"})") == 0);

  std::array<char, 8U> exact{};
  FixedBufferWriter exact_writer(exact.data(), exact.size());
  exact_writer += "1234567";
  assert(exact_writer.ok());
  exact_writer += '8';
  assert(!exact_writer.ok());
  return 0;
}
