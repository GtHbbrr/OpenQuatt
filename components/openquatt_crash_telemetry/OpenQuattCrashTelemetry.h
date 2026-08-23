#pragma once

#include <atomic>
#include <cstddef>
#include <cstdint>
#include <string>

#include "OpenQuattCrashTelemetryPolicy.h"
#include "PsramBuffer.h"
#include "esphome/components/binary_sensor/binary_sensor.h"
#include "esphome/components/switch/switch.h"
#include "esphome/components/text_sensor/text_sensor.h"
#include "esphome/core/component.h"
#include "esphome/core/preferences.h"
#include "mqtt_client.h"

namespace esphome::openquatt_crash_telemetry {

class OpenQuattCrashTelemetry : public Component {
 public:
  void set_broker(const std::string &value) { this->broker_ = value; }
  void set_port(uint16_t value) { this->port_ = value; }
  void set_tls(bool value) { this->tls_ = value; }
  void set_username(const std::string &value) { this->username_ = value; }
  void set_password(const std::string &value) { this->password_ = value; }
  void set_topic(const std::string &value) { this->topic_ = value; }
  void set_usage_switch(switch_::Switch *value) { this->usage_switch_ = value; }
  void set_installation_id_sensor(text_sensor::TextSensor *value) { this->installation_id_sensor_ = value; }
  void set_setup_complete_sensor(binary_sensor::BinarySensor *value) { this->setup_complete_sensor_ = value; }
  void set_firmware_version(const std::string &value) { this->firmware_version_ = value; }
  void set_release_channel(const std::string &value) { this->release_channel_ = value; }
  void set_hardware_profile(const std::string &value) { this->hardware_profile_ = value; }
  void set_topology(const std::string &value) { this->topology_ = value; }
  void set_connection(const std::string &value) { this->connection_ = value; }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;
  bool is_configured() const { return !this->broker_.empty() && !this->topic_.empty(); }

 protected:
  static constexpr uint32_t CRASH_RECORD_MAGIC = 0x4F514352UL;  // OQCR
  static constexpr uint16_t CRASH_RECORD_VERSION = 1U;
  static constexpr uint32_t STATE_MAGIC = 0x4F514353UL;  // OQCS
  static constexpr uint16_t STATE_VERSION = 1U;
  static constexpr size_t CRASH_REPORT_CAPACITY = 2048U;
  static constexpr size_t CRASH_PAYLOAD_CAPACITY = 4096U;
  static constexpr uint32_t SESSION_TIMEOUT_MS = 30000UL;
  static constexpr uint32_t INITIAL_RETRY_MS = 5UL * 60UL * 1000UL;
  static constexpr uint32_t INITIAL_PUBLISH_DELAY_MS = 15000UL;
  static constexpr int MQTT_TASK_STACK_SIZE = 12288;

  struct CrashRecord {
    uint32_t magic;
    uint16_t version;
    uint8_t pending;
    uint8_t truncated;
    uint8_t captured_by_reporting_build;
    uint8_t reserved[3];
    uint16_t report_length;
    uint16_t reserved2;
    uint32_t build_epoch;
    uint32_t reset_reason;
    char crash_id[37];
    char build_id[65];
    char firmware_version[33];
    char release_channel[17];
    char esphome_version[17];
    char hardware_profile[33];
    char topology[17];
    char connection[17];
    char report[CRASH_REPORT_CAPACITY];
    uint32_t checksum;
  };

  struct StateStorage {
    uint32_t magic;
    uint16_t version;
    uint8_t tombstone_pending;
    uint8_t consent_known;
    uint8_t consent_enabled;
    uint8_t reserved[3];
    char installation_id[37];
    uint32_t checksum;
  };

  static_assert(sizeof(CrashRecord) < 3072U, "Crash record should remain a small bounded blob");
  static_assert(sizeof(StateStorage) < 64U, "Crash telemetry state should remain small");

  void capture_pending_crash_();
  void on_log_(const char *tag, const char *message, size_t message_len);
  void on_consent_state_(bool enabled);
  void on_installation_id_(const std::string &installation_id);
  void on_setup_complete_(bool complete);

  bool load_record_();
  bool save_record_();
  bool clear_record_();
  bool load_state_();
  bool save_state_();
  bool build_topic_();
  bool build_crash_payload_();
  bool start_session_(CrashPublishKind kind);
  void complete_session_(bool succeeded);
  bool stop_client_();
  void schedule_retry_();
  void schedule_immediate_();

  static uint32_t checksum_(const void *data, size_t length);
  static bool copy_text_(char *destination, size_t destination_size, const std::string &source);
  static bool copy_text_(char *destination, size_t destination_size, const char *source);
  static void random_uuid_(char *destination, size_t destination_size);
  static const char *extract_message_body_(const char *message);
  static void mqtt_event_handler_(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data);

  std::string broker_;
  uint16_t port_{8883U};
  bool tls_{true};
  std::string username_;
  std::string password_;
  std::string topic_;
  std::string firmware_version_;
  std::string release_channel_;
  std::string hardware_profile_;
  std::string topology_;
  std::string connection_;
  std::string client_id_;

  switch_::Switch *usage_switch_{nullptr};
  text_sensor::TextSensor *installation_id_sensor_{nullptr};
  binary_sensor::BinarySensor *setup_complete_sensor_{nullptr};

  ESPPreferenceObject record_pref_{};
  ESPPreferenceObject state_pref_{};
  openquatt_common::PsramBuffer<CrashRecord> record_{};
  openquatt_common::PsramBuffer<StateStorage> state_{};
  openquatt_common::PsramBuffer<char> topic_buffer_{};
  openquatt_common::PsramBuffer<char> payload_buffer_{};
  size_t payload_size_{0U};

  bool capture_active_{false};
  std::atomic<bool> setup_complete_{false};
  std::atomic<bool> consent_enabled_{false};
  bool consent_seen_{false};
  bool record_loaded_{false};
  bool state_loaded_{false};
  uint32_t next_attempt_ms_{0U};
  uint32_t session_started_ms_{0U};
  uint8_t cleanup_attempts_{0U};

  esp_mqtt_client_handle_t mqtt_client_{nullptr};
  bool mqtt_client_started_{false};
  std::atomic<bool> session_active_{false};
  std::atomic<bool> session_succeeded_{false};
  std::atomic<bool> session_failed_{false};
  std::atomic<int> pending_message_id_{-1};
  std::atomic<CrashPublishKind> active_kind_{CrashPublishKind::NONE};
};

}  // namespace esphome::openquatt_crash_telemetry
