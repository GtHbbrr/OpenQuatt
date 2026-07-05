#include "OpenQuattMqttConfig.h"

#include <algorithm>
#include <array>
#include <atomic>
#include <cctype>
#include <cstring>
#include <cstdlib>
#include <cmath>
#include <inttypes.h>
#include <string>

#include "cJSON.h"
#include "esphome/core/application.h"
#include "esphome/core/hal.h"
#include "esphome/core/helpers.h"
#include "esphome/core/log.h"

namespace esphome {
namespace openquatt_mqtt_config {

namespace {

static const char *const TAG = "openquatt.mqtt_config";
static const uint32_t STORAGE_KEY = fnv1_hash("openquatt_mqtt_config_store");

std::string json_escape_(const std::string &input) {
  std::string out;
  out.reserve(input.size() + 4);
  for (char c : input) {
    switch (c) {
      case '"':
        out += "\\\"";
        break;
      case '\\':
        out += "\\\\";
        break;
      case '\b':
        out += "\\b";
        break;
      case '\f':
        out += "\\f";
        break;
      case '\n':
        out += "\\n";
        break;
      case '\r':
        out += "\\r";
        break;
      case '\t':
        out += "\\t";
        break;
      default:
        if (static_cast<unsigned char>(c) < 0x20) {
          char buf[7];
          snprintf(buf, sizeof(buf), "\\u%04x", static_cast<unsigned char>(c));
          out += buf;
        } else {
          out += c;
        }
        break;
    }
  }
  return out;
}

std::string base64_encode_bytes_(const uint8_t *data, size_t len) {
  static const char alphabet[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  std::string out;
  out.reserve(((len + 2) / 3) * 4);
  for (size_t i = 0; i < len; i += 3) {
    const uint32_t octet_a = data[i];
    const uint32_t octet_b = (i + 1 < len) ? data[i + 1] : 0;
    const uint32_t octet_c = (i + 2 < len) ? data[i + 2] : 0;
    const uint32_t triple = (octet_a << 16) | (octet_b << 8) | octet_c;
    out.push_back(alphabet[(triple >> 18) & 0x3F]);
    out.push_back(alphabet[(triple >> 12) & 0x3F]);
    out.push_back((i + 1 < len) ? alphabet[(triple >> 6) & 0x3F] : '=');
    out.push_back((i + 2 < len) ? alphabet[triple & 0x3F] : '=');
  }
  return out;
}

bool header_matches_host_(const std::string &header_value, const std::string &host) {
  if (host.empty() || header_value.empty()) {
    return false;
  }

  size_t authority_start = 0;
  const size_t scheme_pos = header_value.find("://");
  if (scheme_pos != std::string::npos) {
    authority_start = scheme_pos + 3;
  }
  const size_t authority_end = header_value.find_first_of("/?#", authority_start);
  const std::string authority = header_value.substr(
      authority_start, authority_end == std::string::npos ? std::string::npos : authority_end - authority_start);
  return authority == host;
}

const char *skip_spaces_(const char *cursor) {
  while (cursor != nullptr && *cursor != '\0' && std::isspace(static_cast<unsigned char>(*cursor)) != 0) {
    cursor++;
  }
  return cursor;
}

bool parse_dew_point_scalar_(const char *payload, float *value) {
  if (payload == nullptr || value == nullptr) {
    return false;
  }

  char normalized[OpenQuattMqttConfig::PAYLOAD_MAX_LEN]{};
  const size_t len = strnlen(payload, sizeof(normalized));
  if (len == 0 || len >= sizeof(normalized)) {
    return false;
  }
  for (size_t i = 0; i < len; i++) {
    normalized[i] = payload[i] == ',' ? '.' : payload[i];
  }

  const char *begin = skip_spaces_(normalized);
  char *end = nullptr;
  const float parsed = std::strtof(begin, &end);
  if (begin == end || end == nullptr || !std::isfinite(parsed)) {
    return false;
  }

  const char *tail = skip_spaces_(end);
  if (static_cast<unsigned char>(tail[0]) == 0xC2U && static_cast<unsigned char>(tail[1]) == 0xB0U) {
    tail += 2;
    tail = skip_spaces_(tail);
  }
  if (tail[0] == 'C' || tail[0] == 'c') {
    tail++;
    tail = skip_spaces_(tail);
  }
  if (*tail != '\0') {
    return false;
  }

  *value = parsed;
  return true;
}

bool parse_dew_point_json_(const char *payload, float *value) {
  if (payload == nullptr || value == nullptr) {
    return false;
  }

  const size_t len = strlen(payload);
  cJSON *root = cJSON_ParseWithLength(payload, len);
  if (root == nullptr) {
    return false;
  }

  bool ok = false;
  const cJSON *item = cJSON_IsObject(root) ? cJSON_GetObjectItemCaseSensitive(root, "value") : root;
  if (cJSON_IsNumber(item)) {
    *value = static_cast<float>(item->valuedouble);
    ok = std::isfinite(*value);
  } else if (cJSON_IsString(item) && item->valuestring != nullptr) {
    ok = parse_dew_point_scalar_(item->valuestring, value);
  }

  cJSON_Delete(root);
  return ok;
}

bool parse_dew_point_payload_(const char *payload, float *value) {
  const char *trimmed = skip_spaces_(payload);
  if (trimmed == nullptr || *trimmed == '\0') {
    return false;
  }
  if (*trimmed == '{' || *trimmed == '[') {
    return parse_dew_point_json_(trimmed, value);
  }
  return parse_dew_point_scalar_(trimmed, value);
}

class MqttConfigHandler : public AsyncWebHandler {
 public:
  explicit MqttConfigHandler(OpenQuattMqttConfig *parent) : parent_(parent) {}

  bool canHandle(AsyncWebServerRequest *request) const override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    StringRef url = request->url_to(url_buf);
    if (url == "/mqtt/status" && request->method() == HTTP_GET) {
      return true;
    }
    if (url == "/mqtt/save" && request->method() == HTTP_POST) {
      return true;
    }
    return false;
  }

  void handleRequest(AsyncWebServerRequest *request) override {
    char url_buf[AsyncWebServerRequest::URL_BUF_SIZE];
    StringRef url = request->url_to(url_buf);
    if (url == "/mqtt/status" && request->method() == HTTP_GET) {
      const auto status = this->parent_->get_status_snapshot();
      const std::string broker = json_escape_(status.broker);
      const std::string username = json_escape_(status.username);
      const std::string topic = json_escape_(status.dew_point_topic);
      const std::string source = json_escape_(status.config_source);
      const std::string csrf_token = json_escape_(status.csrf_token);
      auto *stream = request->beginResponseStream("application/json");
      stream->printf(
          R"({"enabled":%s,"connected":%s,"broker":"%s","port":%u,"username":"%s","password_set":%s,"dew_point_topic":"%s","input_topics":{"cooling_dew_point":"%s"},"source":"%s","csrf_token":"%s"})",
          status.enabled ? "true" : "false", status.connected ? "true" : "false", broker.c_str(), status.port,
          username.c_str(), status.password_set ? "true" : "false", topic.c_str(), topic.c_str(), source.c_str(),
          csrf_token.c_str());
      request->send(stream);
      return;
    }

    if (url == "/mqtt/save" && request->method() == HTTP_POST) {
      if (!this->passes_same_origin_(request) || !this->passes_csrf_(request)) {
        request->send(403, "application/json", R"({"ok":false,"error":"forbidden"})");
        return;
      }

      const std::string broker = request->arg("broker");
      const std::string port_arg = request->arg("port");
      const std::string username = request->arg("username");
      const std::string password = request->arg("password");
      const std::string clear_password_arg = request->arg("clear_password");
      const std::string enabled_arg = request->arg("enabled");
      const bool clear_password =
          clear_password_arg == "true" || clear_password_arg == "1" || clear_password_arg == "on";
      const bool enabled = enabled_arg == "true" || enabled_arg == "1" || enabled_arg == "on";

      char *end = nullptr;
      const unsigned long parsed_port = strtoul(port_arg.c_str(), &end, 10);
      if (port_arg.empty() || end == nullptr || *end != '\0' || parsed_port == 0 || parsed_port > 65535) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_port"})");
        return;
      }
      if (broker.size() > 64U) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_broker"})");
        return;
      }
      if (username.size() > 64U || password.size() > 128U) {
        request->send(409, "application/json", R"({"ok":false,"error":"invalid_credentials"})");
        return;
      }
      if (enabled && broker.empty()) {
        request->send(409, "application/json", R"({"ok":false,"error":"missing_broker"})");
        return;
      }

      if (!this->parent_->set_runtime_config(broker, static_cast<uint16_t>(parsed_port), username, password,
                                             clear_password,
                                             enabled)) {
        request->send(500, "application/json", R"({"ok":false,"error":"save_failed"})");
        return;
      }

      const auto status = this->parent_->get_status_snapshot();
      auto *stream = request->beginResponseStream("application/json");
      stream->printf(R"({"ok":true,"enabled":%s,"connected":%s})", status.enabled ? "true" : "false",
                     status.connected ? "true" : "false");
      request->send(stream);
      return;
    }

    request->send(404, "application/json", R"({"ok":false,"error":"not_found"})");
  }

 protected:
  bool passes_same_origin_(AsyncWebServerRequest *request) const {
    const auto host = request->get_header("Host");
    if (!host.has_value() || host->empty()) {
      return false;
    }

    const auto origin = request->get_header("Origin");
    if (origin.has_value() && !header_matches_host_(origin.value(), host.value())) {
      return false;
    }

    const auto referer = request->get_header("Referer");
    if (referer.has_value() && !header_matches_host_(referer.value(), host.value())) {
      return false;
    }

    return true;
  }

  bool passes_csrf_(AsyncWebServerRequest *request) const {
    const std::string csrf_token = request->arg("csrf_token");
    const auto status = this->parent_->get_status_snapshot();
    return !csrf_token.empty() && csrf_token == status.csrf_token;
  }

  OpenQuattMqttConfig *parent_;
};

}  // namespace

void OpenQuattMqttConfig::setup() {
  if (this->config_lock_ == nullptr) {
    this->config_lock_ = xSemaphoreCreateMutex();
  }
  if (this->runtime_lock_ == nullptr) {
    this->runtime_lock_ = xSemaphoreCreateMutex();
  }

  this->rotate_csrf_token_();
  this->register_http_handlers_();
  this->pref_ = global_preferences->make_preference<Storage>(STORAGE_KEY, true);

  Storage storage{};
  if (!this->load_storage_(&storage)) {
    if (!this->build_storage_(this->bootstrap_broker_, this->bootstrap_port_, this->bootstrap_username_,
                              this->bootstrap_password_, this->default_enabled_, &storage) ||
        !this->save_storage_(storage)) {
      ESP_LOGE(TAG, "MQTT bootstrap configuration could not be prepared");
      return;
    }
    this->apply_storage_(storage, "bootstrap");
  } else if (!this->apply_storage_(storage, "stored")) {
    ESP_LOGE(TAG, "Stored MQTT configuration could not be applied");
  }
}

OpenQuattMqttConfig::StatusSnapshot OpenQuattMqttConfig::get_status_snapshot() {
  StatusSnapshot snapshot;
  snapshot.connected = this->connected_.load();
  this->lock_config_();
  snapshot.enabled = this->enabled_.load();
  snapshot.broker = this->broker_;
  snapshot.port = this->port_;
  snapshot.username = this->username_;
  snapshot.password_set = !this->password_.empty();
  snapshot.dew_point_topic = this->dew_point_topic_;
  snapshot.config_source = this->config_source_;
  snapshot.csrf_token = this->csrf_token_;
  this->unlock_config_();
  return snapshot;
}

void OpenQuattMqttConfig::loop() {
  this->consume_pending_dew_point_payload_();
  this->publish_runtime_state_(this->force_publish_.exchange(false));
}

void OpenQuattMqttConfig::dump_config() {
  ESP_LOGCONFIG(TAG, "OpenQuatt MQTT Config");
  const auto status = this->get_status_snapshot();
  ESP_LOGCONFIG(TAG, "  Enabled: %s", YESNO(status.enabled));
  ESP_LOGCONFIG(TAG, "  Broker: %s:%u", status.broker.empty() ? "<none>" : status.broker.c_str(), status.port);
  ESP_LOGCONFIG(TAG, "  Username: %s", status.username.empty() ? "<none>" : status.username.c_str());
  ESP_LOGCONFIG(TAG, "  Dew point topic: %s", status.dew_point_topic.empty() ? "<none>" : status.dew_point_topic.c_str());
  ESP_LOGCONFIG(TAG, "  Runtime source: %s", status.config_source.empty() ? "<unknown>" : status.config_source.c_str());
  ESP_LOGCONFIG(TAG, "  HTTP handlers registered: %s", YESNO(this->handlers_registered_));
}

float OpenQuattMqttConfig::get_setup_priority() const { return setup_priority::LATE; }

bool OpenQuattMqttConfig::set_runtime_config(const std::string &broker, uint16_t port, const std::string &username,
                                             const std::string &password, bool clear_password, bool enabled) {
  this->lock_runtime_();
  Storage storage{};
  if (!this->load_storage_(&storage)) {
    if (!this->build_storage_(this->bootstrap_broker_, this->bootstrap_port_, this->bootstrap_username_,
                              this->bootstrap_password_, this->default_enabled_, &storage)) {
      this->unlock_runtime_();
      return false;
    }
  }

  this->lock_config_();
  const std::string current_password = this->password_;
  this->unlock_config_();

  const std::string next_password = clear_password ? "" : (password.empty() ? current_password : password);
  if (!this->build_storage_(broker, port, username, next_password, enabled, &storage)) {
    this->unlock_runtime_();
    return false;
  }
  if (!this->save_storage_(storage)) {
    this->unlock_runtime_();
    return false;
  }
  if (!this->apply_storage_(storage, "runtime")) {
    ESP_LOGW(TAG, "MQTT configuration was saved but the client could not be started");
  }
  this->unlock_runtime_();
  return true;
}

bool OpenQuattMqttConfig::load_storage_(Storage *storage) {
  if (storage == nullptr) {
    return false;
  }
  if (!this->pref_.load(storage)) {
    return false;
  }
  return this->is_valid_storage_(*storage);
}

bool OpenQuattMqttConfig::save_storage_(const Storage &storage) {
  if (!this->pref_.save(&storage)) {
    ESP_LOGE(TAG, "Failed to save MQTT configuration to preferences");
    return false;
  }
  if (!global_preferences->sync()) {
    ESP_LOGE(TAG, "Failed to sync MQTT configuration to preferences");
    return false;
  }
  return true;
}

bool OpenQuattMqttConfig::apply_storage_(const Storage &storage, const char *source) {
  const bool enabled = storage.enabled != 0U;
  this->stop_client_();

  this->lock_config_();
  this->broker_ = storage.broker;
  this->port_ = storage.port;
  this->username_ = storage.username;
  this->password_ = storage.password;
  this->enabled_.store(enabled);
  this->config_source_ = source != nullptr ? source : "";
  const bool broker_empty = this->broker_.empty();
  this->unlock_config_();

  if (!enabled || broker_empty) {
    if (enabled) {
      ESP_LOGW(TAG, "MQTT is enabled but no broker is configured; runtime connection is disabled");
    }
    this->force_publish_.store(true);
    return true;
  }

  const bool started = this->start_client_();
  this->force_publish_.store(true);
  return started;
}

bool OpenQuattMqttConfig::build_storage_(const std::string &broker, uint16_t port, const std::string &username,
                                         const std::string &password, bool enabled, Storage *storage) {
  if (storage == nullptr) {
    return false;
  }
  if (broker.size() > BROKER_MAX_LEN || username.size() > USERNAME_MAX_LEN || password.size() > PASSWORD_MAX_LEN) {
    return false;
  }
  if (port == 0U) {
    return false;
  }

  memset(storage, 0, sizeof(Storage));
  storage->magic = STORAGE_MAGIC;
  storage->version = STORAGE_VERSION;
  storage->port = port;
  storage->enabled = enabled ? 1U : 0U;
  copy_string_field_(storage->broker, BROKER_MAX_LEN, broker);
  copy_string_field_(storage->username, USERNAME_MAX_LEN, username);
  copy_string_field_(storage->password, PASSWORD_MAX_LEN, password);
  return true;
}

bool OpenQuattMqttConfig::is_valid_storage_(const Storage &storage) const {
  if (storage.magic != STORAGE_MAGIC || storage.version != STORAGE_VERSION) {
    return false;
  }
  if (storage.port == 0U || storage.enabled > 1U) {
    return false;
  }
  const size_t broker_len = strnlen(storage.broker, BROKER_MAX_LEN + 1U);
  const size_t username_len = strnlen(storage.username, USERNAME_MAX_LEN + 1U);
  const size_t password_len = strnlen(storage.password, PASSWORD_MAX_LEN + 1U);
  return broker_len <= BROKER_MAX_LEN && username_len <= USERNAME_MAX_LEN && password_len <= PASSWORD_MAX_LEN;
}

bool OpenQuattMqttConfig::register_http_handlers_() {
  if (this->handlers_registered_) {
    return true;
  }
  auto *base = web_server_base::global_web_server_base;
  if (base == nullptr) {
    ESP_LOGW(TAG, "Web server base not available; MQTT config API disabled");
    return false;
  }
  base->add_handler(new MqttConfigHandler(this));
  this->handlers_registered_ = true;
  return true;
}

void OpenQuattMqttConfig::rotate_csrf_token_() {
  std::array<uint8_t, 16> token_bytes{};
  for (auto &byte : token_bytes) {
    byte = static_cast<uint8_t>(random_uint32() & 0xFF);
  }
  this->csrf_token_ = base64_encode_bytes_(token_bytes.data(), token_bytes.size());
}

bool OpenQuattMqttConfig::start_client_() {
  this->lock_config_();
  const bool enabled = this->enabled_.load();
  const bool broker_empty = this->broker_.empty();
  this->unlock_config_();
  if (!enabled || broker_empty) {
    return true;
  }

  this->lock_config_();
  memset(&this->mqtt_config_, 0, sizeof(this->mqtt_config_));
  this->client_id_ = App.get_name() + std::string("-mqtt-ingress");
  this->mqtt_config_.broker.address.hostname = this->broker_.c_str();
  this->mqtt_config_.broker.address.port = this->port_;
  this->mqtt_config_.broker.address.transport = MQTT_TRANSPORT_OVER_TCP;
  this->mqtt_config_.credentials.client_id = this->client_id_.c_str();
  this->mqtt_config_.session.keepalive = 30;
  this->mqtt_config_.session.disable_clean_session = false;

  if (!this->username_.empty()) {
    this->mqtt_config_.credentials.username = this->username_.c_str();
    if (!this->password_.empty()) {
      this->mqtt_config_.credentials.authentication.password = this->password_.c_str();
    }
  }
  const std::string log_broker = this->broker_;
  const uint16_t log_port = this->port_;
  this->unlock_config_();

  this->mqtt_client_ = esp_mqtt_client_init(&this->mqtt_config_);
  if (this->mqtt_client_ == nullptr) {
    ESP_LOGE(TAG, "Failed to initialize MQTT ingress client");
    return false;
  }

  esp_err_t err = esp_mqtt_client_register_event(this->mqtt_client_, MQTT_EVENT_ANY, &OpenQuattMqttConfig::mqtt_event_handler_,
                                                 this);
  if (err != ESP_OK) {
    ESP_LOGE(TAG, "Failed to register MQTT ingress event handler: %s", esp_err_to_name(err));
    esp_mqtt_client_destroy(this->mqtt_client_);
    this->mqtt_client_ = nullptr;
    return false;
  }

  err = esp_mqtt_client_start(this->mqtt_client_);
  if (err != ESP_OK) {
    ESP_LOGE(TAG, "Failed to start MQTT ingress client: %s", esp_err_to_name(err));
    esp_mqtt_client_destroy(this->mqtt_client_);
    this->mqtt_client_ = nullptr;
    return false;
  }

  ESP_LOGI(TAG, "MQTT ingress client starting for %s:%u", log_broker.c_str(), log_port);
  return true;
}

void OpenQuattMqttConfig::stop_client_() {
  if (this->mqtt_client_ == nullptr) {
    this->connected_.store(false);
    return;
  }

  esp_mqtt_client_stop(this->mqtt_client_);
  esp_mqtt_client_destroy(this->mqtt_client_);
  this->mqtt_client_ = nullptr;
  this->connected_.store(false);
}

void OpenQuattMqttConfig::subscribe_dew_point_(esp_mqtt_client_handle_t client) {
  if (client == nullptr || this->dew_point_topic_.empty()) {
    return;
  }
  const int msg_id = esp_mqtt_client_subscribe(client, this->dew_point_topic_.c_str(), 0);
  if (msg_id < 0) {
    ESP_LOGW(TAG, "Failed to subscribe to %s", this->dew_point_topic_.c_str());
  } else {
    ESP_LOGI(TAG, "Subscribed to MQTT cooling dew point topic %s", this->dew_point_topic_.c_str());
  }
}

void OpenQuattMqttConfig::mqtt_event_handler_(void *handler_args, esp_event_base_t base, int32_t event_id,
                                              void *event_data) {
  auto *self = static_cast<OpenQuattMqttConfig *>(handler_args);
  auto *event = static_cast<esp_mqtt_event_handle_t>(event_data);
  if (self == nullptr || event == nullptr) {
    return;
  }

  switch (event_id) {
    case MQTT_EVENT_CONNECTED:
      self->connected_.store(true);
      self->subscribe_dew_point_(event->client);
      break;
    case MQTT_EVENT_DISCONNECTED:
      self->connected_.store(false);
      break;
    case MQTT_EVENT_DATA:
      if (event->topic != nullptr && event->data != nullptr && event->current_data_offset == 0 &&
          event->data_len == event->total_data_len &&
          self->dew_point_topic_.size() == static_cast<size_t>(event->topic_len) &&
          memcmp(event->topic, self->dew_point_topic_.data(), event->topic_len) == 0) {
        if (event->retain) {
          ESP_LOGW(TAG, "Ignoring retained MQTT cooling dew point payload");
          break;
        }
        self->queue_dew_point_payload_(event->data, event->data_len);
      }
      break;
    case MQTT_EVENT_ERROR:
      ESP_LOGW(TAG, "MQTT ingress client error");
      break;
    default:
      break;
  }
}

void OpenQuattMqttConfig::queue_dew_point_payload_(const char *data, int len) {
  if (data == nullptr || len < 0) {
    return;
  }
  size_t copy_len = 0;
  if (static_cast<size_t>(len) >= PAYLOAD_MAX_LEN) {
    ESP_LOGW(TAG, "Ignoring overlong MQTT cooling dew point payload (%d bytes)", len);
  } else {
    copy_len = std::min(static_cast<size_t>(len), PAYLOAD_MAX_LEN - 1U);
  }
  portENTER_CRITICAL(&this->pending_lock_);
  memcpy(this->pending_dew_point_payload_, data, copy_len);
  this->pending_dew_point_payload_[copy_len] = '\0';
  this->pending_dew_point_payload_ready_ = true;
  portEXIT_CRITICAL(&this->pending_lock_);
  App.wake_loop_threadsafe();
}

void OpenQuattMqttConfig::consume_pending_dew_point_payload_() {
  char payload[PAYLOAD_MAX_LEN]{};
  bool ready = false;

  portENTER_CRITICAL(&this->pending_lock_);
  if (this->pending_dew_point_payload_ready_) {
    memcpy(payload, this->pending_dew_point_payload_, sizeof(payload));
    this->pending_dew_point_payload_ready_ = false;
    ready = true;
  }
  portEXIT_CRITICAL(&this->pending_lock_);

  if (ready) {
    this->handle_dew_point_payload_(payload);
  }
}

void OpenQuattMqttConfig::handle_dew_point_payload_(const char *payload) {
  if (payload == nullptr) {
    return;
  }

  float value = NAN;
  if (!parse_dew_point_payload_(payload, &value) || value < -20.0f || value > 35.0f) {
    ESP_LOGW(TAG, "Invalidating MQTT cooling dew point after invalid payload: %s", payload);
    this->invalidate_dew_point_();
    return;
  }

  this->last_valid_dew_point_c_ = value;
  this->last_valid_dew_point_ms_ = millis();
  this->publish_runtime_state_(true);
}

void OpenQuattMqttConfig::invalidate_dew_point_() {
  this->last_valid_dew_point_c_ = NAN;
  this->last_valid_dew_point_ms_ = 0;
  this->publish_runtime_state_(true);
}

void OpenQuattMqttConfig::publish_runtime_state_(bool force) {
  const uint32_t now_ms = millis();
  if (!force && (uint32_t)(now_ms - this->last_sensor_publish_ms_) < SENSOR_PUBLISH_INTERVAL_MS) {
    return;
  }
  this->last_sensor_publish_ms_ = now_ms;

  const bool has_sample = this->last_valid_dew_point_ms_ != 0 && std::isfinite(this->last_valid_dew_point_c_);
  const uint32_t age_ms = has_sample ? (uint32_t)(now_ms - this->last_valid_dew_point_ms_) : 0U;
  const bool valid = this->enabled_.load() && has_sample && age_ms <= this->dew_point_stale_ms_;

  this->publish_binary_if_changed_(this->dew_point_valid_binary_sensor_, valid, force);
  this->publish_float_if_changed_(this->dew_point_age_sensor_, has_sample ? static_cast<float>(age_ms / 1000U) : NAN, force);
  this->publish_float_if_changed_(this->dew_point_sensor_, valid ? this->last_valid_dew_point_c_ : NAN, force);
}

void OpenQuattMqttConfig::publish_float_if_changed_(sensor::Sensor *sensor, float value, bool force) {
  if (sensor == nullptr) {
    return;
  }
  const bool current_has_state = sensor->has_state();
  const bool current_nan = !current_has_state || std::isnan(sensor->state);
  const bool value_nan = std::isnan(value);
  if (force || current_nan != value_nan || (!value_nan && std::fabs(sensor->state - value) > 0.001f)) {
    sensor->publish_state(value);
  }
}

void OpenQuattMqttConfig::publish_binary_if_changed_(binary_sensor::BinarySensor *binary_sensor, bool value, bool force) {
  if (binary_sensor == nullptr) {
    return;
  }
  if (force || !binary_sensor->has_state() || binary_sensor->state != value) {
    binary_sensor->publish_state(value);
  }
}

void OpenQuattMqttConfig::lock_config_() {
  if (this->config_lock_ != nullptr) {
    xSemaphoreTake(this->config_lock_, portMAX_DELAY);
  }
}

void OpenQuattMqttConfig::unlock_config_() {
  if (this->config_lock_ != nullptr) {
    xSemaphoreGive(this->config_lock_);
  }
}

void OpenQuattMqttConfig::lock_runtime_() {
  if (this->runtime_lock_ != nullptr) {
    xSemaphoreTake(this->runtime_lock_, portMAX_DELAY);
  }
}

void OpenQuattMqttConfig::unlock_runtime_() {
  if (this->runtime_lock_ != nullptr) {
    xSemaphoreGive(this->runtime_lock_);
  }
}

void OpenQuattMqttConfig::copy_string_field_(char *destination, size_t max_len, const std::string &value) {
  if (destination == nullptr || max_len == 0U) {
    return;
  }
  const size_t copy_len = std::min(max_len, value.size());
  memcpy(destination, value.data(), copy_len);
  destination[copy_len] = '\0';
}

}  // namespace openquatt_mqtt_config
}  // namespace esphome
