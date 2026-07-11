#pragma once

#include <cstddef>
#include <cstdint>

#include <esp_http_server.h>
#include <freertos/FreeRTOS.h>
#include <freertos/portmacro.h>

#include "esphome/components/time/real_time_clock.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"

namespace esphome {
namespace openquatt_decision_log {

enum EventType : uint8_t {
  EVENT_UNKNOWN = 0,
  EVENT_BOOT_MARKER = 1,
  EVENT_SOURCE_START = 2,
  EVENT_SOURCE_STOP = 3,
  EVENT_TOPOLOGY_CHANGE = 4,
  EVENT_DECISION_HOLD = 5,
  EVENT_DECISION_BLOCKED = 6,
  EVENT_DEFROST_SEEN_START = 7,
  EVENT_DEFROST_SEEN_CLEAR = 8,
  EVENT_COOLING_LIMITED = 9,
  EVENT_COOLING_RELEASED = 10,
  EVENT_STICKY_PUMP_RUN = 11,
  EVENT_BOILER_ASSIST_START = 12,
  EVENT_BOILER_ASSIST_STOP = 13,
  EVENT_ATTENTION_PATTERN = 14,
  EVENT_FROST_PROTECTION_START = 15,
  EVENT_FROST_PROTECTION_CLEAR = 16,
  EVENT_CANDIDATE_BLOCKED = 17,
  EVENT_FLOW_HOLD_START = 18,
  EVENT_FLOW_HOLD_CLEAR = 19,
  EVENT_STARTUP_INHIBIT_START = 20,
  EVENT_STARTUP_INHIBIT_CLEAR = 21,
};

enum Subject : uint8_t {
  SUBJECT_UNKNOWN = 0,
  SUBJECT_SYSTEM = 1,
  SUBJECT_HP1 = 2,
  SUBJECT_HP2 = 3,
  SUBJECT_BOTH = 4,
  SUBJECT_CV = 5,
  SUBJECT_COOLING = 6,
  SUBJECT_PUMP = 7,
  SUBJECT_CONTROLLER = 8,
};

enum ReasonCode : uint8_t {
  REASON_UNKNOWN = 0,
  REASON_KEEP_CURRENT = 5,
  REASON_HOLD_ACTIVE = 6,
  REASON_DEFROST_HOLD = 7,
  REASON_BETTER_HEAT = 8,
  REASON_SOFT_GUARD = 9,
  REASON_LESS_POWER = 10,
  REASON_NO_CANDIDATE = 11,
  REASON_DEFROST_BOOST = 12,
  REASON_RUNTIME_LEAD = 13,
  REASON_SINGLE_TOPOLOGY = 14,
  REASON_OIL_RETURN_HOLD = 15,
  REASON_MIN_REST_ACTIVE = 30,
  REASON_START_STOP_RATE_HIGH = 31,
  REASON_STICKY_PROTECTION = 32,
  REASON_BOILER_ASSIST = 33,
  REASON_DEW_STOP = 34,
  REASON_COOLING_LIMITER = 35,
  REASON_SENSOR_FALLBACK = 36,
  REASON_FROST_PROTECTION = 37,
  REASON_FLOW_PREFLOW = 38,
  REASON_FLOW_POSTFLOW = 39,
  REASON_FLOW_TOO_LOW = 40,
  REASON_CANDIDATE_IN_REST = 41,
  REASON_CANDIDATE_IN_DEFROST = 42,
  REASON_CANDIDATE_UNAVAILABLE = 43,
  REASON_COOLING_REQUEST_CLEARED = 44,
  REASON_HEATING_REQUEST_CLEARED = 45,
  REASON_PROJECTED_FLOOR = 46,
  REASON_SIMMER = 47,
  REASON_FALLING_GAP = 48,
  REASON_BUFFER_STOP = 49,
  REASON_RESTART_WAIT = 50,
  REASON_ROOM_CAP = 51,
  REASON_LEVEL1_HOLD = 52,
  REASON_OIL_RETURN_RECOVERY = 53,
  REASON_CAPACITY_CAP = 54,
  REASON_STARTUP_INHIBIT = 55,
};

enum Severity : uint8_t {
  SEVERITY_UNKNOWN = 0,
  SEVERITY_NORMAL = 1,
  SEVERITY_LIMITED = 2,
  SEVERITY_ATTENTION = 3,
  SEVERITY_FAULT = 4,
};

enum DecisionState : uint8_t {
  STATE_UNKNOWN = 0,
  STATE_IDLE = 1,
  STATE_STANDBY = 2,
  STATE_ACTIVE = 3,
  STATE_SINGLE = 4,
  STATE_DUO = 5,
  STATE_BLOCKED = 6,
  STATE_LIMITED = 7,
};

struct DecisionEvent {
  uint32_t seq{0};
  uint32_t epoch_s{0};
  uint64_t uptime_s{0};
  uint16_t duration_s{0};
  int16_t value_a{0};
  int16_t value_b{0};
  int16_t threshold_a{0};
  uint8_t event_type{EVENT_UNKNOWN};
  uint8_t subject{SUBJECT_UNKNOWN};
  uint8_t reason_code{REASON_UNKNOWN};
  uint8_t severity{SEVERITY_UNKNOWN};
  uint8_t control_mode_code{0};
  uint8_t from_state{STATE_UNKNOWN};
  uint8_t to_state{STATE_UNKNOWN};
  uint8_t flags{0};
};

struct HourBucket {
  uint64_t hour_start_uptime_s{0};
  uint16_t starts_hp1{0};
  uint16_t starts_hp2{0};
  uint16_t stops_hp1{0};
  uint16_t stops_hp2{0};
  uint16_t topology_single_count{0};
  uint16_t topology_duo_count{0};
  uint16_t cv_assist_start_count{0};
  uint16_t cv_assist_stop_count{0};
  uint16_t cooling_limited_count{0};
  uint16_t cooling_released_count{0};
  uint16_t dewpoint_stop_count{0};
  uint16_t sticky_run_count{0};
  uint16_t defrost_seen_count_hp1{0};
  uint16_t defrost_seen_count_hp2{0};
  uint16_t defrost_hold_count_hp1{0};
  uint16_t defrost_hold_count_hp2{0};
  uint16_t defrost_boost_count_hp1{0};
  uint16_t defrost_boost_count_hp2{0};
  uint16_t attention_count{0};
  bool valid{false};
};

static_assert(sizeof(DecisionEvent) <= 32, "DecisionEvent must stay compact");
static_assert(sizeof(HourBucket) <= 64, "HourBucket must stay compact");

class OpenQuattDecisionLog : public Component {
 public:
  ~OpenQuattDecisionLog();

  void set_clock(time::RealTimeClock *clock) { this->clock_ = clock; }
  void set_event_capacity(size_t capacity) { this->event_capacity_requested_ = capacity; }
  void set_event_fallback_capacity(size_t capacity) { this->event_capacity_fallback_ = capacity; }
  void set_hour_bucket_capacity(size_t capacity) { this->bucket_capacity_requested_ = capacity; }
  void set_hour_bucket_fallback_capacity(size_t capacity) { this->bucket_capacity_fallback_ = capacity; }

  void setup() override;
  void dump_config() override;
  float get_setup_priority() const override;

  void emit(uint8_t event_type,
            uint8_t subject,
            uint8_t reason_code,
            uint8_t severity,
            uint8_t control_mode_code,
            uint8_t from_state,
            uint8_t to_state,
            int16_t value_a = 0,
            int16_t value_b = 0,
            int16_t threshold_a = 0,
            uint16_t duration_s = 0,
            uint8_t flags = 0);

  void write_decision_log(httpd_req_t *req) const;

 protected:
  time::RealTimeClock *clock_{nullptr};
  DecisionEvent *events_{nullptr};
  HourBucket *buckets_{nullptr};
  size_t event_capacity_requested_{512};
  size_t event_capacity_fallback_{64};
  size_t bucket_capacity_requested_{168};
  size_t bucket_capacity_fallback_{24};
  size_t event_capacity_{0};
  size_t bucket_capacity_{0};
  size_t event_head_{0};
  size_t event_count_{0};
  uint32_t next_seq_{1};
  uint32_t dropped_count_{0};
  bool events_external_{false};
  bool buckets_external_{false};
  mutable portMUX_TYPE mux_ = portMUX_INITIALIZER_UNLOCKED;

  bool time_is_valid_() const;
  uint32_t current_epoch_s_() const;
  uint64_t monotonic_uptime_s_() const;
  uint64_t boot_epoch_s_() const;
  void release_buffers_();
  void allocate_buffers_();
  void push_event_locked_(const DecisionEvent &event);
  void update_bucket_locked_(const DecisionEvent &event);
  HourBucket *current_bucket_locked_(uint64_t uptime_s);
  bool copy_event_(size_t index, DecisionEvent *out) const;
  bool copy_bucket_(size_t index, HourBucket *out) const;

  static const char *event_type_to_string_(uint8_t value);
  static const char *subject_to_string_(uint8_t value);
  static const char *reason_to_string_(uint8_t value);
  static const char *severity_to_string_(uint8_t value);
  static const char *state_to_string_(uint8_t value);
  static uint16_t increment_u16_(uint16_t value);
};

}  // namespace openquatt_decision_log
}  // namespace esphome
