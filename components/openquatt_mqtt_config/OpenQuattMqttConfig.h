#pragma once

#include <cstdint>
#include <atomic>
#include <array>
#include <string>

#include "esphome/components/binary_sensor/binary_sensor.h"
#include "esphome/components/sensor/sensor.h"
#include "esphome/components/web_server_base/web_server_base.h"
#include "esphome/core/component.h"
#include "esphome/core/preferences.h"
#include "mqtt_client.h"
#include <freertos/FreeRTOS.h>
#include <freertos/semphr.h>

namespace esphome {
namespace openquatt_mqtt_config {

class OpenQuattMqttConfig : public Component {
 public:
  static constexpr size_t PAYLOAD_MAX_LEN = 128;
  static constexpr size_t NUMERIC_INPUT_COUNT = 4;
  static constexpr size_t BINARY_INPUT_COUNT = 2;

  enum class NumericInputKind : uint8_t {
    COOLING_DEW_POINT = 0,
    OUTSIDE_TEMPERATURE = 1,
    ROOM_TEMPERATURE = 2,
    ROOM_SETPOINT = 3,
  };

  enum class BinaryInputKind : uint8_t {
    HEATING_ENABLE = 0,
    COOLING_ENABLE = 1,
  };

  void set_bootstrap_broker(const std::string &bootstrap_broker) { this->bootstrap_broker_ = bootstrap_broker; }
  void set_bootstrap_port(uint16_t bootstrap_port) { this->bootstrap_port_ = bootstrap_port; }
  void set_bootstrap_username(const std::string &bootstrap_username) { this->bootstrap_username_ = bootstrap_username; }
  void set_bootstrap_password(const std::string &bootstrap_password) { this->bootstrap_password_ = bootstrap_password; }
  void set_dew_point_topic(const std::string &dew_point_topic) {
    this->set_numeric_input_topic_(NumericInputKind::COOLING_DEW_POINT, dew_point_topic);
  }
  void set_dew_point_stale_ms(uint32_t dew_point_stale_ms) {
    this->set_numeric_input_stale_ms_(NumericInputKind::COOLING_DEW_POINT, dew_point_stale_ms);
  }
  void set_dew_point_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_sensor_(NumericInputKind::COOLING_DEW_POINT, sensor);
  }
  void set_dew_point_age_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_age_sensor_(NumericInputKind::COOLING_DEW_POINT, sensor);
  }
  void set_dew_point_valid_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_numeric_input_valid_binary_sensor_(NumericInputKind::COOLING_DEW_POINT, binary_sensor);
  }
  void set_outside_temperature_topic(const std::string &topic) {
    this->set_numeric_input_topic_(NumericInputKind::OUTSIDE_TEMPERATURE, topic);
  }
  void set_outside_temperature_stale_ms(uint32_t stale_ms) {
    this->set_numeric_input_stale_ms_(NumericInputKind::OUTSIDE_TEMPERATURE, stale_ms);
  }
  void set_outside_temperature_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_sensor_(NumericInputKind::OUTSIDE_TEMPERATURE, sensor);
  }
  void set_outside_temperature_age_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_age_sensor_(NumericInputKind::OUTSIDE_TEMPERATURE, sensor);
  }
  void set_outside_temperature_valid_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_numeric_input_valid_binary_sensor_(NumericInputKind::OUTSIDE_TEMPERATURE, binary_sensor);
  }
  void set_room_temperature_topic(const std::string &topic) {
    this->set_numeric_input_topic_(NumericInputKind::ROOM_TEMPERATURE, topic);
  }
  void set_room_temperature_stale_ms(uint32_t stale_ms) {
    this->set_numeric_input_stale_ms_(NumericInputKind::ROOM_TEMPERATURE, stale_ms);
  }
  void set_room_temperature_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_sensor_(NumericInputKind::ROOM_TEMPERATURE, sensor);
  }
  void set_room_temperature_age_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_age_sensor_(NumericInputKind::ROOM_TEMPERATURE, sensor);
  }
  void set_room_temperature_valid_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_numeric_input_valid_binary_sensor_(NumericInputKind::ROOM_TEMPERATURE, binary_sensor);
  }
  void set_room_setpoint_topic(const std::string &topic) {
    this->set_numeric_input_topic_(NumericInputKind::ROOM_SETPOINT, topic);
  }
  void set_room_setpoint_stale_ms(uint32_t stale_ms) {
    this->set_numeric_input_stale_ms_(NumericInputKind::ROOM_SETPOINT, stale_ms);
  }
  void set_room_setpoint_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_sensor_(NumericInputKind::ROOM_SETPOINT, sensor);
  }
  void set_room_setpoint_age_sensor(sensor::Sensor *sensor) {
    this->set_numeric_input_age_sensor_(NumericInputKind::ROOM_SETPOINT, sensor);
  }
  void set_room_setpoint_valid_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_numeric_input_valid_binary_sensor_(NumericInputKind::ROOM_SETPOINT, binary_sensor);
  }
  void set_heating_enable_topic(const std::string &topic) {
    this->set_binary_input_topic_(BinaryInputKind::HEATING_ENABLE, topic);
  }
  void set_heating_enable_stale_ms(uint32_t stale_ms) {
    this->set_binary_input_stale_ms_(BinaryInputKind::HEATING_ENABLE, stale_ms);
  }
  void set_heating_enable_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_binary_input_binary_sensor_(BinaryInputKind::HEATING_ENABLE, binary_sensor);
  }
  void set_heating_enable_age_sensor(sensor::Sensor *sensor) {
    this->set_binary_input_age_sensor_(BinaryInputKind::HEATING_ENABLE, sensor);
  }
  void set_heating_enable_valid_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_binary_input_valid_binary_sensor_(BinaryInputKind::HEATING_ENABLE, binary_sensor);
  }
  void set_cooling_enable_topic(const std::string &topic) {
    this->set_binary_input_topic_(BinaryInputKind::COOLING_ENABLE, topic);
  }
  void set_cooling_enable_stale_ms(uint32_t stale_ms) {
    this->set_binary_input_stale_ms_(BinaryInputKind::COOLING_ENABLE, stale_ms);
  }
  void set_cooling_enable_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_binary_input_binary_sensor_(BinaryInputKind::COOLING_ENABLE, binary_sensor);
  }
  void set_cooling_enable_age_sensor(sensor::Sensor *sensor) {
    this->set_binary_input_age_sensor_(BinaryInputKind::COOLING_ENABLE, sensor);
  }
  void set_cooling_enable_valid_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->set_binary_input_valid_binary_sensor_(BinaryInputKind::COOLING_ENABLE, binary_sensor);
  }
  void set_default_enabled(bool default_enabled) { this->default_enabled_ = default_enabled; }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;

  bool is_enabled() const { return this->enabled_.load(); }
  bool is_connected() const { return this->connected_.load(); }

  struct StatusSnapshot {
    bool enabled{false};
    bool connected{false};
    std::string broker;
    uint16_t port{1883};
    std::string username;
    bool password_set{false};
    std::string dew_point_topic;
    std::array<std::string, NUMERIC_INPUT_COUNT> input_topics;
    std::array<std::string, BINARY_INPUT_COUNT> binary_input_topics;
    std::array<bool, NUMERIC_INPUT_COUNT> input_enabled;
    std::array<bool, BINARY_INPUT_COUNT> binary_input_enabled;
    std::string config_source;
    std::string csrf_token;
  };

  StatusSnapshot get_status_snapshot();
  bool set_runtime_config(const std::string &broker, uint16_t port, const std::string &username,
                          const std::string &password, bool clear_password, bool enabled);
  bool set_input_enabled(const std::string &key, bool enabled);

 protected:
  static constexpr uint32_t STORAGE_MAGIC = 0x4F514D49;
  static constexpr uint16_t STORAGE_VERSION = 1;
  static constexpr size_t BROKER_MAX_LEN = 64;
  static constexpr size_t USERNAME_MAX_LEN = 64;
  static constexpr size_t PASSWORD_MAX_LEN = 128;
  static constexpr uint8_t INPUT_MASK_ALL =
      static_cast<uint8_t>((1U << (NUMERIC_INPUT_COUNT + BINARY_INPUT_COUNT)) - 1U);

  struct Storage {
    uint32_t magic;
    uint16_t version;
    uint16_t port;
    uint8_t enabled;
    uint8_t input_disabled_mask;
    char broker[BROKER_MAX_LEN + 1];
    char username[USERNAME_MAX_LEN + 1];
    char password[PASSWORD_MAX_LEN + 1];
  };

  bool load_storage_(Storage *storage);
  bool save_storage_(const Storage &storage);
  bool apply_storage_(const Storage &storage, const char *source);
  bool build_storage_(const std::string &broker, uint16_t port, const std::string &username,
                      const std::string &password, bool enabled, uint8_t input_disabled_mask, Storage *storage);
  bool is_valid_storage_(const Storage &storage) const;
  bool register_http_handlers_();
  void rotate_csrf_token_();
  bool start_client_();
  void stop_client_();
  struct NumericInput {
    NumericInput(const char *key, const char *log_name, float min_value, float max_value)
        : key(key), log_name(log_name), min_value(min_value), max_value(max_value) {}
    const char *key;
    const char *log_name;
    float min_value;
    float max_value;
    std::string topic;
    uint32_t stale_ms{900000};
    sensor::Sensor *sensor{nullptr};
    sensor::Sensor *age_sensor{nullptr};
    binary_sensor::BinarySensor *valid_binary_sensor{nullptr};
    char pending_payload[PAYLOAD_MAX_LEN]{};
    bool pending_payload_ready{false};
    float last_valid_value{NAN};
    uint32_t last_valid_ms{0};
  };
  struct BinaryInput {
    BinaryInput(const char *key, const char *log_name) : key(key), log_name(log_name) {}
    const char *key;
    const char *log_name;
    std::string topic;
    uint32_t stale_ms{900000};
    binary_sensor::BinarySensor *binary_sensor{nullptr};
    sensor::Sensor *age_sensor{nullptr};
    binary_sensor::BinarySensor *valid_binary_sensor{nullptr};
    char pending_payload[PAYLOAD_MAX_LEN]{};
    bool pending_payload_ready{false};
    bool pending_invalid_payload_ready{false};
    bool last_valid_value{false};
    uint32_t last_valid_ms{0};
  };

  void set_numeric_input_topic_(NumericInputKind kind, const std::string &topic);
  void set_numeric_input_stale_ms_(NumericInputKind kind, uint32_t stale_ms);
  void set_numeric_input_sensor_(NumericInputKind kind, sensor::Sensor *sensor);
  void set_numeric_input_age_sensor_(NumericInputKind kind, sensor::Sensor *sensor);
  void set_numeric_input_valid_binary_sensor_(NumericInputKind kind, binary_sensor::BinarySensor *binary_sensor);
  NumericInput &numeric_input_(NumericInputKind kind);
  const NumericInput &numeric_input_(NumericInputKind kind) const;
  void set_binary_input_topic_(BinaryInputKind kind, const std::string &topic);
  void set_binary_input_stale_ms_(BinaryInputKind kind, uint32_t stale_ms);
  void set_binary_input_binary_sensor_(BinaryInputKind kind, binary_sensor::BinarySensor *binary_sensor);
  void set_binary_input_age_sensor_(BinaryInputKind kind, sensor::Sensor *sensor);
  void set_binary_input_valid_binary_sensor_(BinaryInputKind kind, binary_sensor::BinarySensor *binary_sensor);
  BinaryInput &binary_input_(BinaryInputKind kind);
  const BinaryInput &binary_input_(BinaryInputKind kind) const;
  static uint8_t numeric_input_mask_(NumericInputKind kind);
  static uint8_t binary_input_mask_(BinaryInputKind kind);
  bool is_numeric_input_enabled_(size_t input_index) const;
  bool is_binary_input_enabled_(size_t input_index) const;
  bool input_mask_for_key_(const std::string &key, uint8_t *mask) const;
  void clear_disabled_inputs_();
  void process_pending_input_subscriptions_();
  void subscribe_inputs_(esp_mqtt_client_handle_t client);
  int find_numeric_input_index_by_topic_(const char *topic, int topic_len) const;
  int find_binary_input_index_by_topic_(const char *topic, int topic_len) const;
  static void mqtt_event_handler_(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data);
  void queue_numeric_payload_(size_t input_index, const char *data, int len);
  void queue_binary_payload_(size_t input_index, const char *data, int len);
  void consume_pending_numeric_payloads_();
  void consume_pending_binary_payloads_();
  void handle_numeric_payload_(size_t input_index, const char *payload);
  void handle_binary_payload_(size_t input_index, const char *payload);
  void invalidate_numeric_input_(size_t input_index);
  void invalidate_binary_input_(size_t input_index);
  void publish_runtime_state_(bool force);
  void publish_float_if_changed_(sensor::Sensor *sensor, float value, bool force);
  void publish_binary_if_changed_(binary_sensor::BinarySensor *binary_sensor, bool value, bool force);
  void lock_config_();
  void unlock_config_();
  void lock_runtime_();
  void unlock_runtime_();
  static void copy_string_field_(char *destination, size_t max_len, const std::string &value);

  static constexpr uint32_t SENSOR_PUBLISH_INTERVAL_MS = 10000;

  esp_mqtt_client_config_t mqtt_config_{};
  esp_mqtt_client_handle_t mqtt_client_{nullptr};
  SemaphoreHandle_t config_lock_{nullptr};
  SemaphoreHandle_t runtime_lock_{nullptr};
  std::atomic<bool> connected_{false};
  std::atomic<bool> force_publish_{true};
  std::atomic<bool> resubscribe_inputs_{false};
  std::atomic<uint8_t> input_disabled_mask_{0};
  portMUX_TYPE pending_lock_ = portMUX_INITIALIZER_UNLOCKED;

  std::string bootstrap_broker_;
  uint16_t bootstrap_port_{1883};
  std::string bootstrap_username_;
  std::string bootstrap_password_;
  bool default_enabled_{false};

  std::array<NumericInput, NUMERIC_INPUT_COUNT> numeric_inputs_{{
      NumericInput("cooling_dew_point", "cooling dew point", -20.0f, 35.0f),
      NumericInput("outside_temperature", "outside temperature", -40.0f, 60.0f),
      NumericInput("room_temperature", "room temperature", 0.0f, 50.0f),
      NumericInput("room_setpoint", "room setpoint", 5.0f, 35.0f),
  }};
  std::array<BinaryInput, BINARY_INPUT_COUNT> binary_inputs_{{
      BinaryInput("heating_enable", "heating enable"),
      BinaryInput("cooling_enable", "cooling enable"),
  }};

  std::string broker_;
  uint16_t port_{1883};
  std::string username_;
  std::string password_;
  std::string client_id_;
  std::atomic<bool> enabled_{false};
  std::string config_source_;
  std::string csrf_token_;
  ESPPreferenceObject pref_;
  bool handlers_registered_{false};
  uint32_t last_sensor_publish_ms_{0};
};

}  // namespace openquatt_mqtt_config
}  // namespace esphome
