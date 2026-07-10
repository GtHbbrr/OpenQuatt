#include "OpenQuattDecisionLog.h"

#include <algorithm>
#include <cinttypes>
#include <cstdio>
#include <cstdlib>
#include <cstring>

#include <esp_heap_caps.h>
#include <esp_timer.h>

#include "esphome/core/helpers.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_decision_log {
namespace {

static const char *const TAG = "openquatt.decision_log";
static constexpr uint32_t MIN_VALID_EPOCH_S = 1704067200UL;  // 2024-01-01 00:00:00 UTC
static constexpr uint32_t MAX_VALID_EPOCH_S = 2082758400UL;  // 2036-01-01 00:00:00 UTC

static bool epoch_is_sane(uint32_t epoch_s) { return epoch_s >= MIN_VALID_EPOCH_S && epoch_s < MAX_VALID_EPOCH_S; }

static bool url_path_matches(const char *url, const char *path) {
  if (url == nullptr || path == nullptr) {
    return false;
  }
  const size_t path_len = std::strlen(path);
  return std::strncmp(url, path, path_len) == 0 && (url[path_len] == '\0' || url[path_len] == '?');
}

template<typename T> T *allocate_external(size_t count) {
  if (count == 0) {
    return nullptr;
  }
  RAMAllocator<T> allocator(RAMAllocator<T>::ALLOC_EXTERNAL);
  T *data = allocator.allocate(count);
  if (data != nullptr) {
    std::memset(data, 0, sizeof(T) * count);
  }
  return data;
}

template<typename T> T *allocate_internal(size_t count) {
  if (count == 0) {
    return nullptr;
  }
  RAMAllocator<T> allocator(RAMAllocator<T>::ALLOC_INTERNAL);
  T *data = allocator.allocate(count);
  if (data != nullptr) {
    std::memset(data, 0, sizeof(T) * count);
  }
  return data;
}

class ChunkedJsonWriter {
 public:
  explicit ChunkedJsonWriter(httpd_req_t *req) : req_(req) {}

  bool write_char(char c) { return this->write_bytes_(&c, 1); }

  bool write_literal(const char *text) {
    if (text == nullptr) {
      return true;
    }
    return this->write_bytes_(text, std::strlen(text));
  }

  bool write_string(const char *value) {
    if (!this->write_char('"')) {
      return false;
    }
    const char *cursor = value != nullptr ? value : "";
    while (*cursor != '\0') {
      const unsigned char c = static_cast<unsigned char>(*cursor++);
      switch (c) {
        case '\\':
          if (!this->write_literal("\\\\")) return false;
          break;
        case '"':
          if (!this->write_literal("\\\"")) return false;
          break;
        case '\b':
          if (!this->write_literal("\\b")) return false;
          break;
        case '\f':
          if (!this->write_literal("\\f")) return false;
          break;
        case '\n':
          if (!this->write_literal("\\n")) return false;
          break;
        case '\r':
          if (!this->write_literal("\\r")) return false;
          break;
        case '\t':
          if (!this->write_literal("\\t")) return false;
          break;
        default:
          if (c < 0x20) {
            char escaped[7];
            const int len = std::snprintf(escaped, sizeof(escaped), "\\u%04X", c);
            if (len < 0 || !this->write_bytes_(escaped, static_cast<size_t>(len))) return false;
          } else if (!this->write_char(static_cast<char>(c))) {
            return false;
          }
          break;
      }
    }
    return this->write_char('"');
  }

  bool write_uint32(uint32_t value) {
    char buffer[24];
    const int len = std::snprintf(buffer, sizeof(buffer), "%" PRIu32, value);
    return len >= 0 && this->write_bytes_(buffer, static_cast<size_t>(len));
  }

  bool write_uint64(uint64_t value) {
    char buffer[32];
    const int len = std::snprintf(buffer, sizeof(buffer), "%" PRIu64, value);
    return len >= 0 && this->write_bytes_(buffer, static_cast<size_t>(len));
  }

  bool write_int32(int32_t value) {
    char buffer[24];
    const int len = std::snprintf(buffer, sizeof(buffer), "%" PRId32, value);
    return len >= 0 && this->write_bytes_(buffer, static_cast<size_t>(len));
  }

  bool write_size(size_t value) {
    char buffer[24];
    const int len = std::snprintf(buffer, sizeof(buffer), "%zu", value);
    return len >= 0 && this->write_bytes_(buffer, static_cast<size_t>(len));
  }

  bool flush() {
    if (this->used_ == 0) {
      return true;
    }
    if (httpd_resp_send_chunk(this->req_, this->buffer_, static_cast<ssize_t>(this->used_)) != ESP_OK) {
      return false;
    }
    this->used_ = 0;
    return true;
  }

 private:
  static constexpr size_t BUFFER_SIZE = 384;

  bool write_bytes_(const char *data, size_t len) {
    if (data == nullptr || len == 0) {
      return true;
    }
    size_t remaining = len;
    const char *cursor = data;
    while (remaining > 0) {
      if (this->used_ == BUFFER_SIZE && !this->flush()) {
        return false;
      }
      const size_t space = BUFFER_SIZE - this->used_;
      const size_t to_copy = std::min(space, remaining);
      std::memcpy(this->buffer_ + this->used_, cursor, to_copy);
      this->used_ += to_copy;
      cursor += to_copy;
      remaining -= to_copy;
    }
    return true;
  }

  httpd_req_t *req_;
  char buffer_[BUFFER_SIZE]{};
  size_t used_{0};
};

class OpenQuattDecisionLogRequestHandler : public AsyncWebHandler {
 public:
  explicit OpenQuattDecisionLogRequestHandler(OpenQuattDecisionLog *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    request->url_to(url_buf);
    return url_path_matches(url_buf, "/openquatt/decision-log") && request->method() == HTTP_GET;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    httpd_req_t *req = *request;
    httpd_resp_set_status(req, HTTPD_200);
    httpd_resp_set_type(req, "application/json; charset=utf-8");
    httpd_resp_set_hdr(req, "Cache-Control", "no-store");
    this->parent_->write_decision_log(req);
  }

 protected:
  OpenQuattDecisionLog *parent_;
};

}  // namespace

OpenQuattDecisionLog::~OpenQuattDecisionLog() { this->release_buffers_(); }

float OpenQuattDecisionLog::get_setup_priority() const { return setup_priority::WIFI; }

void OpenQuattDecisionLog::setup() {
  this->allocate_buffers_();
  if (web_server_base::global_web_server_base == nullptr) {
    ESP_LOGW(TAG, "web_server_base is not available; decision log endpoint disabled");
  } else {
    web_server_base::global_web_server_base->add_handler(new OpenQuattDecisionLogRequestHandler(this));
  }
  this->emit(EVENT_BOOT_MARKER, SUBJECT_SYSTEM, REASON_UNKNOWN, SEVERITY_NORMAL, 0, STATE_UNKNOWN, STATE_ACTIVE);
}

void OpenQuattDecisionLog::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt decision log:");
  ESP_LOGCONFIG(TAG, "  Events: %zu/%zu requested (%s)", this->event_capacity_, this->event_capacity_requested_,
                this->events_external_ ? "psram" : (this->events_ != nullptr ? "internal fallback" : "disabled"));
  ESP_LOGCONFIG(TAG, "  Hour buckets: %zu/%zu requested (%s)", this->bucket_capacity_, this->bucket_capacity_requested_,
                this->buckets_external_ ? "psram" : (this->buckets_ != nullptr ? "internal fallback" : "disabled"));
  ESP_LOGCONFIG(TAG, "  Record sizes: event=%zu bucket=%zu", sizeof(DecisionEvent), sizeof(HourBucket));
}

bool OpenQuattDecisionLog::time_is_valid_() const {
  if (this->clock_ == nullptr) {
    return false;
  }
  const auto now = this->clock_->now();
  return now.is_valid() && epoch_is_sane(static_cast<uint32_t>(now.timestamp));
}

uint32_t OpenQuattDecisionLog::current_epoch_s_() const {
  if (!this->time_is_valid_()) {
    return 0;
  }
  const auto now = this->clock_->now();
  return static_cast<uint32_t>(now.timestamp);
}

uint64_t OpenQuattDecisionLog::monotonic_uptime_s_() const {
  const int64_t uptime_us = esp_timer_get_time();
  return uptime_us > 0 ? static_cast<uint64_t>(uptime_us) / 1000000ULL : 0;
}

uint64_t OpenQuattDecisionLog::boot_epoch_s_() const {
  const uint64_t now_epoch_s = this->current_epoch_s_();
  if (now_epoch_s == 0) {
    return 0;
  }
  const uint64_t uptime_s = this->monotonic_uptime_s_();
  return now_epoch_s > uptime_s ? now_epoch_s - uptime_s : 0;
}

void OpenQuattDecisionLog::release_buffers_() {
  if (this->events_ != nullptr) {
    free(this->events_);  // NOLINT(cppcoreguidelines-owning-memory,cppcoreguidelines-no-malloc)
    this->events_ = nullptr;
  }
  if (this->buckets_ != nullptr) {
    free(this->buckets_);  // NOLINT(cppcoreguidelines-owning-memory,cppcoreguidelines-no-malloc)
    this->buckets_ = nullptr;
  }
  this->event_capacity_ = 0;
  this->bucket_capacity_ = 0;
  this->events_external_ = false;
  this->buckets_external_ = false;
}

void OpenQuattDecisionLog::allocate_buffers_() {
  this->release_buffers_();

  this->events_ = allocate_external<DecisionEvent>(this->event_capacity_requested_);
  if (this->events_ != nullptr) {
    this->event_capacity_ = this->event_capacity_requested_;
    this->events_external_ = true;
  } else {
    this->events_ = allocate_internal<DecisionEvent>(this->event_capacity_fallback_);
    this->event_capacity_ = this->events_ != nullptr ? this->event_capacity_fallback_ : 0;
    this->events_external_ = false;
  }

  this->buckets_ = allocate_external<HourBucket>(this->bucket_capacity_requested_);
  if (this->buckets_ != nullptr) {
    this->bucket_capacity_ = this->bucket_capacity_requested_;
    this->buckets_external_ = true;
  } else {
    this->buckets_ = allocate_internal<HourBucket>(this->bucket_capacity_fallback_);
    this->bucket_capacity_ = this->buckets_ != nullptr ? this->bucket_capacity_fallback_ : 0;
    this->buckets_external_ = false;
  }
}

void OpenQuattDecisionLog::emit(uint8_t event_type,
                                uint8_t subject,
                                uint8_t reason_code,
                                uint8_t severity,
                                uint8_t control_mode_code,
                                uint8_t from_state,
                                uint8_t to_state,
                                int16_t value_a,
                                int16_t value_b,
                                int16_t threshold_a,
                                uint16_t duration_s,
                                uint8_t flags) {
  DecisionEvent event{};
  event.epoch_s = this->current_epoch_s_();
  event.uptime_s = this->monotonic_uptime_s_();
  event.duration_s = duration_s;
  event.value_a = value_a;
  event.value_b = value_b;
  event.threshold_a = threshold_a;
  event.event_type = event_type;
  event.subject = subject;
  event.reason_code = reason_code;
  event.severity = severity;
  event.control_mode_code = control_mode_code;
  event.from_state = from_state;
  event.to_state = to_state;
  event.flags = flags;

  portENTER_CRITICAL(&this->mux_);
  event.seq = this->next_seq_++;
  this->push_event_locked_(event);
  this->update_bucket_locked_(event);
  portEXIT_CRITICAL(&this->mux_);
}

void OpenQuattDecisionLog::push_event_locked_(const DecisionEvent &event) {
  if (this->events_ == nullptr || this->event_capacity_ == 0) {
    this->dropped_count_ = this->dropped_count_ < UINT32_MAX ? this->dropped_count_ + 1 : UINT32_MAX;
    return;
  }

  const size_t insert_index = (this->event_head_ + this->event_count_) % this->event_capacity_;
  this->events_[insert_index] = event;
  if (this->event_count_ < this->event_capacity_) {
    ++this->event_count_;
  } else {
    this->event_head_ = (this->event_head_ + 1) % this->event_capacity_;
    this->dropped_count_ = this->dropped_count_ < UINT32_MAX ? this->dropped_count_ + 1 : UINT32_MAX;
  }
}

HourBucket *OpenQuattDecisionLog::current_bucket_locked_(uint64_t uptime_s) {
  if (this->buckets_ == nullptr || this->bucket_capacity_ == 0) {
    return nullptr;
  }
  const uint64_t hour_start = (uptime_s / 3600ULL) * 3600ULL;
  const size_t index = static_cast<size_t>((uptime_s / 3600ULL) % this->bucket_capacity_);
  HourBucket *bucket = &this->buckets_[index];
  if (!bucket->valid || bucket->hour_start_uptime_s != hour_start) {
    std::memset(bucket, 0, sizeof(*bucket));
    bucket->hour_start_uptime_s = hour_start;
    bucket->valid = true;
  }
  return bucket;
}

uint16_t OpenQuattDecisionLog::increment_u16_(uint16_t value) {
  return value < UINT16_MAX ? static_cast<uint16_t>(value + 1) : UINT16_MAX;
}

void OpenQuattDecisionLog::update_bucket_locked_(const DecisionEvent &event) {
  HourBucket *bucket = this->current_bucket_locked_(event.uptime_s);
  if (bucket == nullptr) {
    return;
  }

  if (event.severity == SEVERITY_ATTENTION || event.event_type == EVENT_ATTENTION_PATTERN) {
    bucket->attention_count = increment_u16_(bucket->attention_count);
  }

  switch (event.event_type) {
    case EVENT_SOURCE_START:
      if (event.subject == SUBJECT_HP1) bucket->starts_hp1 = increment_u16_(bucket->starts_hp1);
      else if (event.subject == SUBJECT_HP2) bucket->starts_hp2 = increment_u16_(bucket->starts_hp2);
      break;
    case EVENT_SOURCE_STOP:
      if (event.subject == SUBJECT_HP1) bucket->stops_hp1 = increment_u16_(bucket->stops_hp1);
      else if (event.subject == SUBJECT_HP2) bucket->stops_hp2 = increment_u16_(bucket->stops_hp2);
      break;
    case EVENT_TOPOLOGY_CHANGE:
      if (event.to_state == STATE_SINGLE) bucket->topology_single_count = increment_u16_(bucket->topology_single_count);
      else if (event.to_state == STATE_DUO) bucket->topology_duo_count = increment_u16_(bucket->topology_duo_count);
      break;
    case EVENT_BOILER_ASSIST_START:
      bucket->cv_assist_start_count = increment_u16_(bucket->cv_assist_start_count);
      break;
    case EVENT_BOILER_ASSIST_STOP:
      bucket->cv_assist_stop_count = increment_u16_(bucket->cv_assist_stop_count);
      break;
    case EVENT_COOLING_LIMITED:
      bucket->cooling_limited_count = increment_u16_(bucket->cooling_limited_count);
      if (event.reason_code == REASON_DEW_STOP) bucket->dewpoint_stop_count = increment_u16_(bucket->dewpoint_stop_count);
      break;
    case EVENT_COOLING_RELEASED:
      bucket->cooling_released_count = increment_u16_(bucket->cooling_released_count);
      break;
    case EVENT_STICKY_PUMP_RUN:
      bucket->sticky_run_count = increment_u16_(bucket->sticky_run_count);
      break;
    case EVENT_DEFROST_SEEN_START:
      if (event.subject == SUBJECT_HP1) bucket->defrost_seen_count_hp1 = increment_u16_(bucket->defrost_seen_count_hp1);
      else if (event.subject == SUBJECT_HP2) bucket->defrost_seen_count_hp2 = increment_u16_(bucket->defrost_seen_count_hp2);
      break;
    default:
      break;
  }

  if (event.event_type == EVENT_DECISION_HOLD && event.reason_code == REASON_DEFROST_HOLD) {
    if (event.subject == SUBJECT_HP1) bucket->defrost_hold_count_hp1 = increment_u16_(bucket->defrost_hold_count_hp1);
    else if (event.subject == SUBJECT_HP2) bucket->defrost_hold_count_hp2 = increment_u16_(bucket->defrost_hold_count_hp2);
  } else if (event.reason_code == REASON_DEFROST_BOOST) {
    if (event.subject == SUBJECT_HP1) bucket->defrost_boost_count_hp1 = increment_u16_(bucket->defrost_boost_count_hp1);
    else if (event.subject == SUBJECT_HP2) bucket->defrost_boost_count_hp2 = increment_u16_(bucket->defrost_boost_count_hp2);
  }
}

bool OpenQuattDecisionLog::copy_event_(size_t index, DecisionEvent *out) const {
  if (out == nullptr || this->events_ == nullptr || index >= this->event_count_ || this->event_capacity_ == 0) {
    return false;
  }
  portENTER_CRITICAL(&this->mux_);
  const size_t event_index = (this->event_head_ + index) % this->event_capacity_;
  *out = this->events_[event_index];
  portEXIT_CRITICAL(&this->mux_);
  return true;
}

bool OpenQuattDecisionLog::copy_bucket_(size_t index, HourBucket *out) const {
  if (out == nullptr || this->buckets_ == nullptr || index >= this->bucket_capacity_) {
    return false;
  }
  portENTER_CRITICAL(&this->mux_);
  *out = this->buckets_[index];
  portEXIT_CRITICAL(&this->mux_);
  return true;
}

const char *OpenQuattDecisionLog::event_type_to_string_(uint8_t value) {
  switch (value) {
    case EVENT_BOOT_MARKER: return "boot_marker";
    case EVENT_SOURCE_START: return "source_start";
    case EVENT_SOURCE_STOP: return "source_stop";
    case EVENT_TOPOLOGY_CHANGE: return "topology_change";
    case EVENT_DECISION_HOLD: return "decision_hold";
    case EVENT_DECISION_BLOCKED: return "decision_blocked";
    case EVENT_DEFROST_SEEN_START: return "defrost_seen_start";
    case EVENT_DEFROST_SEEN_CLEAR: return "defrost_seen_clear";
    case EVENT_COOLING_LIMITED: return "cooling_limited";
    case EVENT_COOLING_RELEASED: return "cooling_released";
    case EVENT_STICKY_PUMP_RUN: return "sticky_pump_run";
    case EVENT_BOILER_ASSIST_START: return "boiler_assist_start";
    case EVENT_BOILER_ASSIST_STOP: return "boiler_assist_stop";
    case EVENT_ATTENTION_PATTERN: return "attention_pattern";
    case EVENT_FROST_PROTECTION_START: return "frost_protection_start";
    case EVENT_FROST_PROTECTION_CLEAR: return "frost_protection_clear";
    case EVENT_CANDIDATE_BLOCKED: return "candidate_blocked";
    case EVENT_FLOW_HOLD_START: return "flow_hold_start";
    case EVENT_FLOW_HOLD_CLEAR: return "flow_hold_clear";
    default: return "unknown";
  }
}

const char *OpenQuattDecisionLog::subject_to_string_(uint8_t value) {
  switch (value) {
    case SUBJECT_SYSTEM: return "SYSTEM";
    case SUBJECT_HP1: return "HP1";
    case SUBJECT_HP2: return "HP2";
    case SUBJECT_BOTH: return "BOTH";
    case SUBJECT_CV: return "CV";
    case SUBJECT_COOLING: return "COOLING";
    case SUBJECT_PUMP: return "PUMP";
    case SUBJECT_CONTROLLER: return "CONTROLLER";
    default: return "UNKNOWN";
  }
}

const char *OpenQuattDecisionLog::reason_to_string_(uint8_t value) {
  switch (value) {
    case REASON_KEEP_CURRENT: return "keep_current";
    case REASON_HOLD_ACTIVE: return "hold_active";
    case REASON_DEFROST_HOLD: return "defrost_hold";
    case REASON_BETTER_HEAT: return "better_heat";
    case REASON_SOFT_GUARD: return "soft_guard";
    case REASON_LESS_POWER: return "less_power";
    case REASON_NO_CANDIDATE: return "no_candidate";
    case REASON_DEFROST_BOOST: return "defrost_boost";
    case REASON_RUNTIME_LEAD: return "runtime_lead";
    case REASON_SINGLE_TOPOLOGY: return "single_topology";
    case REASON_OIL_RETURN_HOLD: return "oil_return_hold";
    case REASON_MIN_REST_ACTIVE: return "min_rest_active";
    case REASON_START_STOP_RATE_HIGH: return "start_stop_rate_high";
    case REASON_STICKY_PROTECTION: return "sticky_protection";
    case REASON_BOILER_ASSIST: return "boiler_assist";
    case REASON_DEW_STOP: return "dew_stop";
    case REASON_COOLING_LIMITER: return "cooling_limiter";
    case REASON_SENSOR_FALLBACK: return "sensor_fallback";
    case REASON_FROST_PROTECTION: return "frost_protection";
    case REASON_FLOW_PREFLOW: return "flow_preflow";
    case REASON_FLOW_POSTFLOW: return "flow_postflow";
    case REASON_FLOW_TOO_LOW: return "flow_too_low";
    case REASON_CANDIDATE_IN_REST: return "candidate_in_rest";
    case REASON_CANDIDATE_IN_DEFROST: return "candidate_in_defrost";
    case REASON_CANDIDATE_UNAVAILABLE: return "candidate_unavailable";
    case REASON_COOLING_REQUEST_CLEARED: return "cooling_request_cleared";
    case REASON_HEATING_REQUEST_CLEARED: return "heating_request_cleared";
    case REASON_PROJECTED_FLOOR: return "projected_floor";
    case REASON_SIMMER: return "simmer";
    case REASON_FALLING_GAP: return "falling_gap";
    case REASON_BUFFER_STOP: return "buffer_stop";
    case REASON_RESTART_WAIT: return "restart_wait";
    case REASON_ROOM_CAP: return "room_cap";
    case REASON_LEVEL1_HOLD: return "level1_hold";
    case REASON_OIL_RETURN_RECOVERY: return "oil_return_recovery";
    case REASON_CAPACITY_CAP: return "capacity_cap";
    default: return "unknown";
  }
}

const char *OpenQuattDecisionLog::severity_to_string_(uint8_t value) {
  switch (value) {
    case SEVERITY_NORMAL: return "normal";
    case SEVERITY_LIMITED: return "limited";
    case SEVERITY_ATTENTION: return "attention";
    case SEVERITY_FAULT: return "fault";
    default: return "unknown";
  }
}

const char *OpenQuattDecisionLog::state_to_string_(uint8_t value) {
  switch (value) {
    case STATE_IDLE: return "idle";
    case STATE_STANDBY: return "standby";
    case STATE_ACTIVE: return "active";
    case STATE_SINGLE: return "single";
    case STATE_DUO: return "duo";
    case STATE_BLOCKED: return "blocked";
    case STATE_LIMITED: return "limited";
    default: return "unknown";
  }
}

void OpenQuattDecisionLog::write_decision_log(httpd_req_t *req) const {
  ChunkedJsonWriter writer(req);
  const uint64_t boot_epoch_s = this->boot_epoch_s_();
  const uint64_t uptime_s = this->monotonic_uptime_s_();
  const uint32_t internal_free = heap_caps_get_free_size(MALLOC_CAP_8BIT);
  const uint32_t internal_min = heap_caps_get_minimum_free_size(MALLOC_CAP_8BIT);
  const uint32_t psram_free = heap_caps_get_free_size(MALLOC_CAP_SPIRAM);

  size_t event_count = 0;
  uint32_t dropped_count = 0;
  portENTER_CRITICAL(&this->mux_);
  event_count = this->event_count_;
  dropped_count = this->dropped_count_;
  portEXIT_CRITICAL(&this->mux_);

  bool ok = writer.write_literal(R"({"ok":true,"storage":{)") &&
            writer.write_literal(R"("events":)") &&
            writer.write_string(this->events_external_ ? "psram" : (this->events_ != nullptr ? "internal_fallback" : "disabled")) &&
            writer.write_literal(R"(,"buckets":)") &&
            writer.write_string(this->buckets_external_ ? "psram" : (this->buckets_ != nullptr ? "internal_fallback" : "disabled")) &&
            writer.write_literal(R"(,"event_capacity":)") && writer.write_size(this->event_capacity_) &&
            writer.write_literal(R"(,"event_requested":)") && writer.write_size(this->event_capacity_requested_) &&
            writer.write_literal(R"(,"bucket_capacity":)") && writer.write_size(this->bucket_capacity_) &&
            writer.write_literal(R"(,"bucket_requested":)") && writer.write_size(this->bucket_capacity_requested_) &&
            writer.write_literal(R"(},"meta":{)") &&
            writer.write_literal(R"("event_record_size":)") && writer.write_size(sizeof(DecisionEvent)) &&
            writer.write_literal(R"(,"bucket_record_size":)") && writer.write_size(sizeof(HourBucket)) &&
            writer.write_literal(R"(,"event_count":)") && writer.write_size(event_count) &&
            writer.write_literal(R"(,"dropped_count":)") && writer.write_uint32(dropped_count) &&
            writer.write_literal(R"(,"boot_epoch_s":)") && writer.write_uint64(boot_epoch_s) &&
            writer.write_literal(R"(,"uptime_s":)") && writer.write_uint64(uptime_s) &&
            writer.write_literal(R"(,"internal_heap_free":)") && writer.write_uint32(internal_free) &&
            writer.write_literal(R"(,"internal_heap_min":)") && writer.write_uint32(internal_min) &&
            writer.write_literal(R"(,"psram_free":)") && writer.write_uint32(psram_free) &&
            writer.write_literal(R"(},"events":[)");

  for (size_t index = 0; ok && index < event_count; ++index) {
    DecisionEvent event{};
    if (!this->copy_event_(index, &event)) {
      continue;
    }
    const uint64_t epoch_s = event.epoch_s > 0
        ? static_cast<uint64_t>(event.epoch_s)
        : (boot_epoch_s > 0 ? boot_epoch_s + event.uptime_s : 0);
    ok = (index == 0 || writer.write_char(',')) &&
         writer.write_literal(R"({"seq":)") && writer.write_uint32(event.seq) &&
         writer.write_literal(R"(,"uptime_s":)") && writer.write_uint64(event.uptime_s) &&
         writer.write_literal(R"(,"epoch_s":)") && writer.write_uint64(epoch_s) &&
         writer.write_literal(R"(,"event_type":)") && writer.write_string(event_type_to_string_(event.event_type)) &&
         writer.write_literal(R"(,"subject":)") && writer.write_string(subject_to_string_(event.subject)) &&
         writer.write_literal(R"(,"reason":)") && writer.write_string(reason_to_string_(event.reason_code)) &&
         writer.write_literal(R"(,"severity":)") && writer.write_string(severity_to_string_(event.severity)) &&
         writer.write_literal(R"(,"cm":)") && writer.write_uint32(event.control_mode_code) &&
         writer.write_literal(R"(,"from":)") && writer.write_string(state_to_string_(event.from_state)) &&
         writer.write_literal(R"(,"to":)") && writer.write_string(state_to_string_(event.to_state)) &&
         writer.write_literal(R"(,"value_a":)") && writer.write_int32(event.value_a) &&
         writer.write_literal(R"(,"value_b":)") && writer.write_int32(event.value_b) &&
         writer.write_literal(R"(,"threshold_a":)") && writer.write_int32(event.threshold_a) &&
         writer.write_literal(R"(,"duration_s":)") && writer.write_uint32(event.duration_s) &&
         writer.write_literal(R"(,"flags":)") && writer.write_uint32(event.flags) &&
         writer.write_char('}');
  }

  ok = ok && writer.write_literal(R"(],"buckets":[)");
  bool first_bucket = true;
  for (size_t index = 0; ok && index < this->bucket_capacity_; ++index) {
    HourBucket bucket{};
    if (!this->copy_bucket_(index, &bucket) || !bucket.valid) {
      continue;
    }
    ok = (first_bucket || writer.write_char(',')) &&
         writer.write_literal(R"({"hour_start_uptime_s":)") && writer.write_uint64(bucket.hour_start_uptime_s) &&
         writer.write_literal(R"(,"starts_hp1":)") && writer.write_uint32(bucket.starts_hp1) &&
         writer.write_literal(R"(,"starts_hp2":)") && writer.write_uint32(bucket.starts_hp2) &&
         writer.write_literal(R"(,"stops_hp1":)") && writer.write_uint32(bucket.stops_hp1) &&
         writer.write_literal(R"(,"stops_hp2":)") && writer.write_uint32(bucket.stops_hp2) &&
         writer.write_literal(R"(,"topology_single_count":)") && writer.write_uint32(bucket.topology_single_count) &&
         writer.write_literal(R"(,"topology_duo_count":)") && writer.write_uint32(bucket.topology_duo_count) &&
         writer.write_literal(R"(,"cv_assist_start_count":)") && writer.write_uint32(bucket.cv_assist_start_count) &&
         writer.write_literal(R"(,"cv_assist_stop_count":)") && writer.write_uint32(bucket.cv_assist_stop_count) &&
         writer.write_literal(R"(,"cooling_limited_count":)") && writer.write_uint32(bucket.cooling_limited_count) &&
         writer.write_literal(R"(,"cooling_released_count":)") && writer.write_uint32(bucket.cooling_released_count) &&
         writer.write_literal(R"(,"dewpoint_stop_count":)") && writer.write_uint32(bucket.dewpoint_stop_count) &&
         writer.write_literal(R"(,"sticky_run_count":)") && writer.write_uint32(bucket.sticky_run_count) &&
         writer.write_literal(R"(,"defrost_seen_count_hp1":)") && writer.write_uint32(bucket.defrost_seen_count_hp1) &&
         writer.write_literal(R"(,"defrost_seen_count_hp2":)") && writer.write_uint32(bucket.defrost_seen_count_hp2) &&
         writer.write_literal(R"(,"defrost_hold_count_hp1":)") && writer.write_uint32(bucket.defrost_hold_count_hp1) &&
         writer.write_literal(R"(,"defrost_hold_count_hp2":)") && writer.write_uint32(bucket.defrost_hold_count_hp2) &&
         writer.write_literal(R"(,"defrost_boost_count_hp1":)") && writer.write_uint32(bucket.defrost_boost_count_hp1) &&
         writer.write_literal(R"(,"defrost_boost_count_hp2":)") && writer.write_uint32(bucket.defrost_boost_count_hp2) &&
         writer.write_literal(R"(,"attention_count":)") && writer.write_uint32(bucket.attention_count) &&
         writer.write_char('}');
    first_bucket = false;
  }

  ok = ok && writer.write_literal(R"(]})") && writer.flush();
  if (!ok) {
    ESP_LOGW(TAG, "Failed to write decision-log response");
  }
  httpd_resp_send_chunk(req, nullptr, 0);
}

}  // namespace openquatt_decision_log
}  // namespace esphome
