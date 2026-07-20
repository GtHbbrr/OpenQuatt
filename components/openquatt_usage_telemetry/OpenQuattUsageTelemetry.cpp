#include "OpenQuattUsageTelemetry.h"

#include <algorithm>
#include <array>
#include <cmath>
#include <cstdio>
#include <cstring>
#include <inttypes.h>

#include "esp_crt_bundle.h"
#include "esp_heap_caps.h"
#if defined(CONFIG_IDF_TARGET_ESP32S3) && __has_include("heatpump_controller_q_hardware_revision.h")
#include "heatpump_controller_q_hardware_revision.h"
#define OPENQUATT_HAS_Q_HARDWARE_REVISION
#endif
#include "esp_system.h"
#include "esp_timer.h"
#include "esphome/components/network/util.h"
#include "esphome/components/openquatt_mqtt_config/OpenQuattMqttConfig.h"
#include "esphome/core/application.h"
#include "esphome/core/hal.h"
#include "esphome/core/helpers.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_usage_telemetry {
namespace {

static const char *const TAG = "openquatt.usage_telemetry";
static const uint32_t STORAGE_KEY = fnv1_hash("openquatt_usage_telemetry_store");

std::string json_escape_(const std::string &input) {
  std::string output;
  output.reserve(input.size() + 4);
  for (char c : input) {
    switch (c) {
      case '"':
        output += "\\\"";
        break;
      case '\\':
        output += "\\\\";
        break;
      case '\b':
        output += "\\b";
        break;
      case '\f':
        output += "\\f";
        break;
      case '\n':
        output += "\\n";
        break;
      case '\r':
        output += "\\r";
        break;
      case '\t':
        output += "\\t";
        break;
      default:
        if (static_cast<unsigned char>(c) < 0x20U) {
          char buffer[7];
          std::snprintf(buffer, sizeof(buffer), "\\u%04x", static_cast<unsigned char>(c));
          output += buffer;
        } else {
          output += c;
        }
        break;
    }
  }
  return output;
}

bool uuid_is_present_(const std::array<uint8_t, 16> &bytes) {
  return std::any_of(bytes.begin(), bytes.end(), [](uint8_t byte) { return byte != 0U; });
}

void append_json_key_(std::string &payload, const char *key) {
  payload += R"(,")";
  payload += key;
  payload += R"(":)";
}

void append_json_uint_(std::string &payload, const char *key, size_t value) {
  append_json_key_(payload, key);
  payload += std::to_string(static_cast<uint64_t>(value));
}

void append_json_optional_number_(std::string &payload, const char *key, const sensor::Sensor *source,
                                  unsigned decimals) {
  append_json_key_(payload, key);
  if (source == nullptr || !source->has_state() || !std::isfinite(source->state)) {
    payload += "null";
    return;
  }
  char value[32];
  std::snprintf(value, sizeof(value), "%.*f", static_cast<int>(decimals), source->state);
  payload += value;
}

void append_json_optional_bool_(std::string &payload, const char *key, const switch_::Switch *source) {
  append_json_key_(payload, key);
  if (source == nullptr) {
    payload += "null";
    return;
  }
  payload += source->state ? "true" : "false";
}

void append_json_optional_bool_(std::string &payload, const char *key, bool available, bool value) {
  append_json_key_(payload, key);
  if (!available) {
    payload += "null";
    return;
  }
  payload += value ? "true" : "false";
}

void append_json_boiler_connection_(std::string &payload, const select::Select *source) {
  append_json_key_(payload, "boiler_connection");
  if (source == nullptr) {
    // Firmware without the OTB transport selector can only drive the R1 on/off route.
    payload += R"("on_off")";
    return;
  }
  if (!source->has_state()) {
    payload += "null";
    return;
  }
  const std::string &option = source->current_option();
  // Keep the wire values independent from the user-facing select labels.
  if (option == "R1") {
    payload += R"("on_off")";
  } else if (option == "OpenTherm") {
    payload += R"("opentherm")";
  } else {
    payload += "null";
  }
}

const char *reset_reason_name_(esp_reset_reason_t reason) {
  switch (reason) {
    case ESP_RST_POWERON:
      return "power_on";
    case ESP_RST_EXT:
      return "external";
    case ESP_RST_SW:
      return "software";
    case ESP_RST_PANIC:
      return "panic";
    case ESP_RST_INT_WDT:
      return "interrupt_watchdog";
    case ESP_RST_TASK_WDT:
      return "task_watchdog";
    case ESP_RST_WDT:
      return "watchdog";
    case ESP_RST_DEEPSLEEP:
      return "deep_sleep";
    case ESP_RST_BROWNOUT:
      return "brownout";
    default:
      return "unknown";
  }
}

}  // namespace

float OpenQuattUsageTelemetry::get_setup_priority() const { return setup_priority::LATE; }

void OpenQuattUsageTelemetry::setup() {
  this->runtime_lock_ = xSemaphoreCreateMutex();
  if (this->runtime_lock_ == nullptr) {
    ESP_LOGE(TAG, "Failed to create usage telemetry runtime lock");
    this->publish_state(false);
    return;
  }
  if (global_preferences == nullptr) {
    ESP_LOGE(TAG, "Preferences backend is unavailable; usage statistics remain disabled");
    this->publish_state(false);
    return;
  }

  this->pref_ = global_preferences->make_preference<Storage>(STORAGE_KEY, true);
  Storage storage{};
  if (!this->load_storage_(&storage)) {
    storage.magic = STORAGE_MAGIC;
    storage.version = STORAGE_VERSION;
    storage.enabled = 0;
    storage.choice_configured = 0;
    storage.installation_id_present = 0;
    storage.reserved.fill(0);
    storage.installation_id.fill(0);

    StorageV1 legacy_storage{};
    const bool migrated_legacy = this->load_legacy_storage_(&legacy_storage);
    if (migrated_legacy) {
      // Storage v1 could not distinguish a deliberate opt-in from the old
      // default-on migration. Reset it once, preserving only the anonymous ID.
      storage.choice_configured = 1;
      storage.installation_id_present = legacy_storage.installation_id_present;
      storage.installation_id = legacy_storage.installation_id;
    }

    const bool initialized = this->save_storage_(storage);
    if (!initialized) {
      ESP_LOGE(TAG, "Failed to initialize usage telemetry preferences; usage statistics remain disabled");
      storage.enabled = 0;
      storage.choice_configured = 0;
      storage.installation_id_present = 0;
      storage.reserved.fill(0);
      storage.installation_id.fill(0);
    } else if (migrated_legacy) {
      ESP_LOGI(TAG, "Migrated legacy usage telemetry preference to disabled");
    } else {
      ESP_LOGI(TAG, "No usage telemetry choice found; remaining disabled until onboarding records a choice");
    }
  }

  this->apply_storage_(storage);
  if (this->enabled_.load() && this->is_setup_complete_()) {
    this->schedule_initial_publish_();
  }
}

void OpenQuattUsageTelemetry::loop() {
  if (this->session_active_.load()) {
    if (this->start_task_running_.load()) {
      return;
    }
    if (!this->enabled_.load()) {
      this->finish_publish_session_(false);
      return;
    }
    if (this->publish_succeeded_.load()) {
      this->finish_publish_session_(true);
      return;
    }
    if (this->publish_failed_.load() ||
        time_reached_(millis(), this->session_started_ms_ + SESSION_TIMEOUT_MS)) {
      this->finish_publish_session_(false);
    }
    return;
  }

  if (!this->enabled_.load() || !this->is_setup_complete_() || !this->is_configured() ||
      !network::is_connected()) {
    if (!this->is_setup_complete_()) {
      this->next_publish_ms_ = 0;
    }
    return;
  }
  if (this->next_publish_ms_ == 0U) {
    this->schedule_initial_publish_();
  }
  if (time_reached_(millis(), this->next_publish_ms_)) {
    this->start_publish_session_();
  }
}

void OpenQuattUsageTelemetry::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt usage statistics:");
  ESP_LOGCONFIG(TAG, "  Enabled: %s", YESNO(this->enabled_.load()));
  ESP_LOGCONFIG(TAG, "  Broker configured: %s", YESNO(this->is_configured()));
  ESP_LOGCONFIG(TAG, "  Transport: %s", this->tls_ ? "MQTT/TLS" : "MQTT");
  ESP_LOGCONFIG(TAG, "  Port: %u", this->port_);
  if (!this->tls_ && this->is_configured()) {
    ESP_LOGW(TAG, "Usage statistics transport is not encrypted");
  }
  ESP_LOGCONFIG(TAG, "  Choice configured: %s", YESNO(this->choice_configured_.load()));
  ESP_LOGCONFIG(TAG, "  Quick Start complete: %s", YESNO(this->is_setup_complete_()));
  ESP_LOGCONFIG(TAG, "  Publish interval: %" PRIu32 " seconds", this->interval_ms_ / 1000U);
  ESP_LOGCONFIG(TAG, "  Installation ID present: %s", YESNO(!this->installation_id_.empty()));
}

void OpenQuattUsageTelemetry::write_state(bool state) {
  const bool current_state = this->enabled_.load();
  Storage storage{};
  if (!this->load_storage_(&storage)) {
    storage.magic = STORAGE_MAGIC;
    storage.version = STORAGE_VERSION;
    storage.enabled = current_state ? 1U : 0U;
    storage.choice_configured = this->choice_configured_.load() ? 1U : 0U;
    storage.installation_id_present = this->installation_id_.empty() ? 0U : 1U;
    storage.reserved.fill(0);
    storage.installation_id = this->installation_id_bytes_;
  }
  if (state == current_state && storage.choice_configured != 0U) {
    this->publish_state(current_state);
    return;
  }

  if (state && !this->ensure_installation_id_(&storage)) {
    ESP_LOGE(TAG, "Could not generate an installation ID; usage statistics remain disabled");
    this->publish_state(false);
    return;
  }
  storage.enabled = state ? 1U : 0U;
  storage.choice_configured = 1U;
  if (!this->save_storage_(storage)) {
    ESP_LOGE(TAG, "Could not persist usage statistics preference");
    this->publish_state(current_state);
    return;
  }

  this->apply_storage_(storage);
  if (state) {
    this->consecutive_failures_ = 0;
    if (this->is_setup_complete_()) {
      this->schedule_initial_publish_();
    } else {
      this->next_publish_ms_ = 0;
    }
    if (!this->is_configured()) {
      ESP_LOGW(TAG, "Usage statistics were enabled, but no telemetry broker is configured in this build");
    }
  } else {
    this->next_publish_ms_ = 0;
    if (!this->session_active_.load()) {
      this->payload_.clear();
      this->payload_message_id_.clear();
    }
    App.wake_loop_threadsafe();
  }
}

bool OpenQuattUsageTelemetry::load_storage_(Storage *storage) {
  if (storage == nullptr || !this->pref_.load(storage)) {
    return false;
  }
  if (storage->magic != STORAGE_MAGIC || storage->version != STORAGE_VERSION || storage->enabled > 1U ||
      storage->choice_configured > 1U || storage->installation_id_present > 1U) {
    return false;
  }
  const bool id_present = uuid_is_present_(storage->installation_id);
  if ((storage->installation_id_present != 0U) != id_present ||
      (storage->enabled != 0U && (storage->choice_configured == 0U || !id_present))) {
    return false;
  }
  return true;
}

bool OpenQuattUsageTelemetry::load_legacy_storage_(StorageV1 *storage) {
  if (storage == nullptr || global_preferences == nullptr) {
    return false;
  }
  auto legacy_pref = global_preferences->make_preference<StorageV1>(STORAGE_KEY, true);
  if (!legacy_pref.load(storage) || storage->magic != STORAGE_MAGIC || storage->version != 1U ||
      storage->enabled > 1U || storage->installation_id_present > 1U) {
    return false;
  }
  const bool id_present = uuid_is_present_(storage->installation_id);
  return (storage->installation_id_present != 0U) == id_present && (storage->enabled == 0U || id_present);
}

bool OpenQuattUsageTelemetry::save_storage_(const Storage &storage) {
  return this->pref_.save(&storage) && global_preferences != nullptr && global_preferences->sync();
}

bool OpenQuattUsageTelemetry::ensure_installation_id_(Storage *storage) {
  if (storage == nullptr) {
    return false;
  }
  if (storage->installation_id_present != 0U && uuid_is_present_(storage->installation_id)) {
    return true;
  }

  esp_fill_random(storage->installation_id.data(), storage->installation_id.size());
  storage->installation_id[6] = static_cast<uint8_t>((storage->installation_id[6] & 0x0FU) | 0x40U);
  storage->installation_id[8] = static_cast<uint8_t>((storage->installation_id[8] & 0x3FU) | 0x80U);
  storage->installation_id_present = 1U;
  return uuid_is_present_(storage->installation_id);
}

bool OpenQuattUsageTelemetry::is_setup_complete_() const {
  return this->setup_complete_sensor_ != nullptr && this->setup_complete_sensor_->has_state() &&
         this->setup_complete_sensor_->state;
}

void OpenQuattUsageTelemetry::apply_storage_(const Storage &storage) {
  // The ID is immutable across enable/disable writes. Avoid rewriting the string while MQTT callbacks may read it.
  if (this->installation_id_bytes_ != storage.installation_id) {
    this->installation_id_bytes_ = storage.installation_id;
    this->installation_id_ = storage.installation_id_present != 0U ? format_uuid_(storage.installation_id) : "";
  }
  const bool enabled = storage.enabled != 0U && !this->installation_id_.empty();
  const bool choice_configured = storage.choice_configured != 0U;
  this->enabled_.store(enabled);
  this->choice_configured_.store(choice_configured);
  this->publish_state(enabled);
  if (this->choice_configured_sensor_ != nullptr) {
    this->choice_configured_sensor_->publish_state(choice_configured);
  }
}

void OpenQuattUsageTelemetry::schedule_initial_publish_() {
  // Keep zero as the unscheduled sentinel while allowing a newly recorded
  // opt-in to publish on the next loop iteration.
  this->next_publish_ms_ = millis() + 1U;
}

void OpenQuattUsageTelemetry::schedule_regular_publish_() {
  this->next_publish_ms_ = millis() + this->interval_ms_;
}

void OpenQuattUsageTelemetry::schedule_retry_() {
  this->consecutive_failures_ = std::min<uint8_t>(this->consecutive_failures_ + 1U, 8U);
  uint32_t delay_ms = RETRY_MIN_MS;
  for (uint8_t i = 1; i < this->consecutive_failures_ && delay_ms < RETRY_MAX_MS; i++) {
    delay_ms = std::min<uint32_t>(delay_ms * 2U, RETRY_MAX_MS);
  }
  this->next_publish_ms_ = millis() + delay_ms;
}

void OpenQuattUsageTelemetry::start_publish_session_() {
  if (this->session_active_.load() || this->start_task_running_.exchange(true)) {
    return;
  }

  if (this->payload_.empty()) {
    this->build_payload_();
  }
  this->publish_succeeded_.store(false);
  this->publish_failed_.store(false);
  this->pending_message_id_.store(-1);
  this->finishing_session_.store(false);
  this->session_started_ms_ = millis();
  this->session_active_.store(true);

  const BaseType_t created = xTaskCreatePinnedToCore(&OpenQuattUsageTelemetry::start_client_task_,
                                                     "oq_usage_mqtt", MQTT_START_TASK_STACK_SIZE, this, 4, nullptr,
                                                     tskNO_AFFINITY);
  if (created != pdPASS) {
    this->start_task_running_.store(false);
    this->publish_failed_.store(true);
    ESP_LOGE(TAG, "Failed to create usage telemetry MQTT start task");
  }
}

bool OpenQuattUsageTelemetry::start_client_() {
  if (!this->enabled_.load() || !this->session_active_.load() || !this->is_setup_complete_() ||
      !this->is_configured()) {
    return false;
  }

  esp_mqtt_client_config_t mqtt_config{};
  mqtt_config.broker.address.hostname = this->broker_.c_str();
  mqtt_config.broker.address.port = this->port_;
  mqtt_config.broker.address.transport = this->tls_ ? MQTT_TRANSPORT_OVER_SSL : MQTT_TRANSPORT_OVER_TCP;
  if (this->tls_) {
    mqtt_config.broker.verification.crt_bundle_attach = esp_crt_bundle_attach;
  }
  mqtt_config.credentials.client_id = this->installation_id_.c_str();
  mqtt_config.session.keepalive = 30;
  mqtt_config.session.disable_clean_session = false;
  mqtt_config.network.timeout_ms = 10000;
  mqtt_config.network.disable_auto_reconnect = true;
  mqtt_config.task.stack_size = MQTT_TASK_STACK_SIZE;
  mqtt_config.buffer.size = 1024;
  mqtt_config.buffer.out_size = 1024;
  mqtt_config.outbox.limit = 2048;
  if (!this->username_.empty()) {
    mqtt_config.credentials.username = this->username_.c_str();
  }
  if (!this->password_.empty()) {
    mqtt_config.credentials.authentication.password = this->password_.c_str();
  }

  esp_mqtt_client_handle_t client = esp_mqtt_client_init(&mqtt_config);
  if (client == nullptr) {
    ESP_LOGW(TAG, "Failed to initialize usage telemetry MQTT client");
    return false;
  }

  if (xSemaphoreTake(this->runtime_lock_, portMAX_DELAY) != pdTRUE) {
    esp_mqtt_client_destroy(client);
    return false;
  }
  if (!this->enabled_.load() || !this->session_active_.load() || this->mqtt_client_ != nullptr) {
    xSemaphoreGive(this->runtime_lock_);
    esp_mqtt_client_destroy(client);
    return false;
  }
  this->mqtt_client_ = client;
  xSemaphoreGive(this->runtime_lock_);

  esp_err_t error = esp_mqtt_client_register_event(client, MQTT_EVENT_ANY,
                                                    &OpenQuattUsageTelemetry::mqtt_event_handler_, this);
  if (error == ESP_OK) {
    error = esp_mqtt_client_start(client);
  }
  if (error != ESP_OK) {
    ESP_LOGW(TAG, "Failed to start usage telemetry MQTT client: %s", esp_err_to_name(error));
    return false;
  }
  return true;
}

void OpenQuattUsageTelemetry::finish_publish_session_(bool succeeded) {
  if (!this->session_active_.load() || this->start_task_running_.load()) {
    return;
  }
  this->finishing_session_.store(true);

  if (this->runtime_lock_ != nullptr && xSemaphoreTake(this->runtime_lock_, portMAX_DELAY) == pdTRUE) {
    if (this->mqtt_client_ != nullptr) {
      esp_mqtt_client_stop(this->mqtt_client_);
      esp_mqtt_client_destroy(this->mqtt_client_);
      this->mqtt_client_ = nullptr;
    }
    xSemaphoreGive(this->runtime_lock_);
  }

  this->session_active_.store(false);
  this->publish_succeeded_.store(false);
  this->publish_failed_.store(false);
  this->pending_message_id_.store(-1);
  this->finishing_session_.store(false);

  if (!this->enabled_.load()) {
    this->payload_.clear();
    this->payload_message_id_.clear();
    this->next_publish_ms_ = 0;
    this->consecutive_failures_ = 0;
    return;
  }
  if (succeeded) {
    this->payload_.clear();
    this->payload_message_id_.clear();
    this->consecutive_failures_ = 0;
    this->schedule_regular_publish_();
    ESP_LOGD(TAG, "Usage statistics published successfully");
  } else {
    // Refresh volatile observations for the retry, but retain the logical
    // message ID so a lost QoS 1 PUBACK remains idempotent for ingestion.
    this->payload_.clear();
    this->schedule_retry_();
    ESP_LOGW(TAG, "Usage statistics publish failed; a bounded retry was scheduled");
  }
}

void OpenQuattUsageTelemetry::build_payload_() {
  const uint64_t uptime_s = static_cast<uint64_t>(esp_timer_get_time()) / 1000000ULL;
  const std::string hardware_revision = this->read_hardware_revision_();
  if (this->payload_message_id_.empty()) {
    this->payload_message_id_ = random_message_id_();
  }

  this->payload_.clear();
  this->payload_.reserve(960);
  this->payload_ += R"({"schema_version":1,"message_id":")";
  this->payload_ += this->payload_message_id_;
  this->payload_ += R"(","installation_id":")";
  this->payload_ += this->installation_id_;
  this->payload_ += '"';
  append_json_key_(this->payload_, "timestamp_s");
  if (this->clock_ == nullptr) {
    this->payload_ += "null";
  } else {
    const auto now = this->clock_->now();
    if (now.is_valid()) {
      this->payload_ += std::to_string(static_cast<uint64_t>(now.timestamp));
    } else {
      this->payload_ += "null";
    }
  }
  this->payload_ += R"(,"uptime_s":)";
  this->payload_ += std::to_string(uptime_s);
  this->payload_ += R"(,"firmware_version":")";
  this->payload_ += json_escape_(this->firmware_version_);
  this->payload_ += R"(","release_channel":")";
  this->payload_ += json_escape_(this->release_channel_);
  this->payload_ += R"(","hardware_profile":")";
  this->payload_ += json_escape_(this->hardware_profile_);
  this->payload_ += R"(","hardware_revision":)";
  if (hardware_revision.empty()) {
    this->payload_ += "null";
  } else {
    this->payload_ += '"';
    this->payload_ += hardware_revision;
    this->payload_ += '"';
  }
  this->payload_ += R"(,"topology":")";
  this->payload_ += json_escape_(this->topology_);
  this->payload_ += R"(","connection":")";
  this->payload_ += json_escape_(this->connection_);
  this->payload_ += '"';
  append_json_uint_(this->payload_, "heap_free_b", heap_caps_get_free_size(MALLOC_CAP_INTERNAL));
  append_json_uint_(this->payload_, "heap_min_free_b", heap_caps_get_minimum_free_size(MALLOC_CAP_INTERNAL));
  append_json_uint_(this->payload_, "heap_largest_block_b", heap_caps_get_largest_free_block(MALLOC_CAP_INTERNAL));
  append_json_uint_(this->payload_, "psram_free_b", heap_caps_get_free_size(MALLOC_CAP_SPIRAM));
  append_json_optional_number_(this->payload_, "loop_time_ms", this->loop_time_sensor_, 0);
  append_json_optional_number_(this->payload_, "esp_internal_temp_c", this->internal_temperature_sensor_, 1);
  append_json_optional_number_(this->payload_, "wifi_rssi_dbm", this->wifi_signal_sensor_, 1);
  append_json_key_(this->payload_, "reset_reason");
  this->payload_ += '"';
  this->payload_ += reset_reason_name_(esp_reset_reason());
  this->payload_ += '"';
  append_json_optional_bool_(this->payload_, "cic_polling_enabled", this->cic_polling_switch_);
  append_json_optional_bool_(this->payload_, "cic_compatibility_enabled", this->cic_compatibility_switch_);
  append_json_optional_bool_(this->payload_, "ot_thermostat_enabled", this->ot_thermostat_switch_);
  append_json_optional_bool_(this->payload_, "boiler_assist_enabled", this->boiler_assist_switch_);
  append_json_boiler_connection_(this->payload_, this->boiler_connection_select_);
  append_json_optional_bool_(this->payload_, "mqtt_inputs_enabled", this->mqtt_config_ != nullptr,
                             this->mqtt_config_ != nullptr && this->mqtt_config_->is_enabled());
  append_json_optional_bool_(this->payload_, "trend_ram_enabled", this->trend_ram_switch_);
  append_json_optional_bool_(this->payload_, "trend_flash_enabled", this->trend_flash_switch_);
  append_json_optional_bool_(this->payload_, "decision_log_flash_enabled", this->decision_log_flash_switch_);
  append_json_optional_bool_(this->payload_, "energy_history_flash_enabled", this->energy_history_flash_switch_);
  append_json_optional_bool_(this->payload_, "ram_log_history_enabled", this->ram_log_history_switch_);
  this->payload_ += '}';
}

std::string OpenQuattUsageTelemetry::read_hardware_revision_() const {
  if (this->hardware_profile_ != "heatpump_controller_q") {
    return "";
  }
#if defined(OPENQUATT_HAS_Q_HARDWARE_REVISION)
  const auto revision = oq_hardware::read_hardware_revision_efuse();
  if (revision.error != ESP_OK || !revision.programmed) {
    return "";
  }
  char revision_text[32];
  std::snprintf(revision_text, sizeof(revision_text), "%u.%u (batch %u)",
                static_cast<unsigned>(revision.major), static_cast<unsigned>(revision.minor),
                static_cast<unsigned>(revision.batch));
  return revision_text;
#else
  return "";
#endif
}

bool OpenQuattUsageTelemetry::time_reached_(uint32_t now_ms, uint32_t target_ms) {
  return static_cast<int32_t>(now_ms - target_ms) >= 0;
}

std::string OpenQuattUsageTelemetry::format_uuid_(const std::array<uint8_t, 16> &bytes) {
  char uuid[37];
  std::snprintf(uuid, sizeof(uuid),
                "%02x%02x%02x%02x-%02x%02x-%02x%02x-%02x%02x-%02x%02x%02x%02x%02x%02x", bytes[0],
                bytes[1], bytes[2], bytes[3], bytes[4], bytes[5], bytes[6], bytes[7], bytes[8], bytes[9], bytes[10],
                bytes[11], bytes[12], bytes[13], bytes[14], bytes[15]);
  return uuid;
}

std::string OpenQuattUsageTelemetry::random_message_id_() {
  std::array<uint8_t, 16> bytes{};
  esp_fill_random(bytes.data(), bytes.size());
  bytes[6] = static_cast<uint8_t>((bytes[6] & 0x0FU) | 0x40U);
  bytes[8] = static_cast<uint8_t>((bytes[8] & 0x3FU) | 0x80U);
  return format_uuid_(bytes);
}

void OpenQuattUsageTelemetry::start_client_task_(void *arg) {
  auto *self = static_cast<OpenQuattUsageTelemetry *>(arg);
  if (self != nullptr) {
    if (!self->start_client_()) {
      self->publish_failed_.store(true);
    }
    self->start_task_running_.store(false);
    App.wake_loop_threadsafe();
  }
  vTaskDelete(nullptr);
}

void OpenQuattUsageTelemetry::mqtt_event_handler_(void *handler_args, esp_event_base_t base, int32_t event_id,
                                                  void *event_data) {
  (void) base;
  auto *self = static_cast<OpenQuattUsageTelemetry *>(handler_args);
  auto *event = static_cast<esp_mqtt_event_handle_t>(event_data);
  if (self == nullptr || event == nullptr || !self->session_active_.load() || self->finishing_session_.load()) {
    return;
  }

  switch (event_id) {
    case MQTT_EVENT_CONNECTED: {
      if (!self->enabled_.load()) {
        self->publish_failed_.store(true);
        break;
      }
      self->publish_topic_ = self->topic_ + "/" + self->installation_id_ + "/telemetry";
      const int message_id = esp_mqtt_client_enqueue(event->client, self->publish_topic_.c_str(),
                                                     self->payload_.c_str(), static_cast<int>(self->payload_.size()),
                                                     1, 1, true);
      if (message_id < 0) {
        self->publish_failed_.store(true);
      } else {
        self->pending_message_id_.store(message_id);
      }
      App.wake_loop_threadsafe();
      break;
    }
    case MQTT_EVENT_PUBLISHED:
      if (event->msg_id == self->pending_message_id_.load()) {
        self->publish_succeeded_.store(true);
        App.wake_loop_threadsafe();
      }
      break;
    case MQTT_EVENT_ERROR:
      self->publish_failed_.store(true);
      App.wake_loop_threadsafe();
      break;
    case MQTT_EVENT_DISCONNECTED:
      if (!self->publish_succeeded_.load()) {
        self->publish_failed_.store(true);
        App.wake_loop_threadsafe();
      }
      break;
    default:
      break;
  }
}

}  // namespace openquatt_usage_telemetry
}  // namespace esphome
