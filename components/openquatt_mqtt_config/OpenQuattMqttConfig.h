#pragma once

#include <cstdint>
#include <atomic>
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

  void set_bootstrap_broker(const std::string &bootstrap_broker) { this->bootstrap_broker_ = bootstrap_broker; }
  void set_bootstrap_port(uint16_t bootstrap_port) { this->bootstrap_port_ = bootstrap_port; }
  void set_bootstrap_username(const std::string &bootstrap_username) { this->bootstrap_username_ = bootstrap_username; }
  void set_bootstrap_password(const std::string &bootstrap_password) { this->bootstrap_password_ = bootstrap_password; }
  void set_dew_point_topic(const std::string &dew_point_topic) { this->dew_point_topic_ = dew_point_topic; }
  void set_dew_point_stale_ms(uint32_t dew_point_stale_ms) { this->dew_point_stale_ms_ = dew_point_stale_ms; }
  void set_dew_point_sensor(sensor::Sensor *sensor) { this->dew_point_sensor_ = sensor; }
  void set_dew_point_age_sensor(sensor::Sensor *sensor) { this->dew_point_age_sensor_ = sensor; }
  void set_dew_point_valid_binary_sensor(binary_sensor::BinarySensor *binary_sensor) {
    this->dew_point_valid_binary_sensor_ = binary_sensor;
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
    std::string config_source;
    std::string csrf_token;
  };

  StatusSnapshot get_status_snapshot();
  bool set_runtime_config(const std::string &broker, uint16_t port, const std::string &username,
                          const std::string &password, bool clear_password, bool enabled);

 protected:
  static constexpr uint32_t STORAGE_MAGIC = 0x4F514D49;
  static constexpr uint16_t STORAGE_VERSION = 1;
  static constexpr size_t BROKER_MAX_LEN = 64;
  static constexpr size_t USERNAME_MAX_LEN = 64;
  static constexpr size_t PASSWORD_MAX_LEN = 128;

  struct Storage {
    uint32_t magic;
    uint16_t version;
    uint16_t port;
    uint8_t enabled;
    uint8_t reserved;
    char broker[BROKER_MAX_LEN + 1];
    char username[USERNAME_MAX_LEN + 1];
    char password[PASSWORD_MAX_LEN + 1];
  };

  bool load_storage_(Storage *storage);
  bool save_storage_(const Storage &storage);
  bool apply_storage_(const Storage &storage, const char *source);
  bool build_storage_(const std::string &broker, uint16_t port, const std::string &username,
                      const std::string &password, bool enabled, Storage *storage);
  bool is_valid_storage_(const Storage &storage) const;
  bool register_http_handlers_();
  void rotate_csrf_token_();
  bool start_client_();
  void stop_client_();
  void subscribe_dew_point_(esp_mqtt_client_handle_t client);
  static void mqtt_event_handler_(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data);
  void queue_dew_point_payload_(const char *data, int len);
  void consume_pending_dew_point_payload_();
  void handle_dew_point_payload_(const char *payload);
  void invalidate_dew_point_();
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
  portMUX_TYPE pending_lock_ = portMUX_INITIALIZER_UNLOCKED;
  char pending_dew_point_payload_[PAYLOAD_MAX_LEN]{};
  bool pending_dew_point_payload_ready_{false};

  std::string bootstrap_broker_;
  uint16_t bootstrap_port_{1883};
  std::string bootstrap_username_;
  std::string bootstrap_password_;
  std::string dew_point_topic_;
  uint32_t dew_point_stale_ms_{900000};
  bool default_enabled_{false};

  sensor::Sensor *dew_point_sensor_{nullptr};
  sensor::Sensor *dew_point_age_sensor_{nullptr};
  binary_sensor::BinarySensor *dew_point_valid_binary_sensor_{nullptr};

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
  float last_valid_dew_point_c_{NAN};
  uint32_t last_valid_dew_point_ms_{0};
  uint32_t last_sensor_publish_ms_{0};
};

}  // namespace openquatt_mqtt_config
}  // namespace esphome
