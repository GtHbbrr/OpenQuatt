#include <array>
#include <cassert>
#include <cstring>
#include <string>

#include "components/openquatt_usage_telemetry/OpenQuattUsageTelemetryPolicy.h"

using esphome::openquatt_usage_telemetry::append_json_escaped;
using esphome::openquatt_usage_telemetry::FixedBufferWriter;
using esphome::openquatt_usage_telemetry::mqtt_cleanup_decision;
using esphome::openquatt_usage_telemetry::MqttCleanupDecision;

int main() {
  assert(mqtt_cleanup_decision(true, false, false, 0U) == MqttCleanupDecision::DESTROY);
  assert(mqtt_cleanup_decision(false, true, false, 1U) == MqttCleanupDecision::FORCE_DISCONNECT);
  assert(mqtt_cleanup_decision(false, false, false, 1U) == MqttCleanupDecision::RETRY_STOP);
  assert(mqtt_cleanup_decision(false, false, false, 2U) == MqttCleanupDecision::DESTROY_ALREADY_STOPPED);
  assert(mqtt_cleanup_decision(false, true, true, 2U) == MqttCleanupDecision::DESTROY_ALREADY_STOPPED);

  std::array<char, 128U> escaped{};
  FixedBufferWriter json(escaped.data(), escaped.size());
  json += R"({"value":")";
  append_json_escaped(json, std::string{"\"\\\b\f\n\r\t"} + '\x01' + "x");
  json += R"("})";
  assert(json.ok());
  assert(std::strcmp(escaped.data(), R"({"value":"\"\\\b\f\n\r\t\u0001x"})") == 0);

  std::array<char, 5U> exact{};
  FixedBufferWriter exact_writer(exact.data(), exact.size());
  exact_writer += "1234";
  assert(exact_writer.ok());
  assert(exact_writer.size() == 4U);
  assert(std::strcmp(exact.data(), "1234") == 0);
  exact_writer += '5';
  assert(!exact_writer.ok());
  assert(std::strcmp(exact.data(), "1234") == 0);

  std::array<char, 2049U> maximum{};
  FixedBufferWriter maximum_writer(maximum.data(), maximum.size());
  maximum_writer += std::string(2048U, 'x');
  assert(maximum_writer.ok());
  assert(maximum_writer.size() == 2048U);
  maximum_writer += 'y';
  assert(!maximum_writer.ok());
  return 0;
}
