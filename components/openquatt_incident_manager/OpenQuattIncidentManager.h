#pragma once

#include <array>
#include <atomic>
#include <cstddef>
#include <cstdint>
#include <string>

#include <esp_http_server.h>
#include <freertos/FreeRTOS.h>
#include <freertos/portmacro.h>

#include "esphome/components/globals/globals_component.h"
#include "esphome/components/openquatt_decision_log/OpenQuattDecisionLog.h"
#include "esphome/components/time/real_time_clock.h"
#include "esphome/core/component.h"
#include "esphome/core/preferences.h"
#include "OpenQuattIncidentPolicy.h"
#include "includes/incidents/oq_hp_incident_engine.h"
#include "includes/incidents/oq_manual_reset_latch_policy.h"

#ifndef OQ_TOPOLOGY_DUO
#define OQ_TOPOLOGY_DUO 0
#endif

namespace esphome {
namespace openquatt_incident_manager {

class OpenQuattIncidentManager : public Component {
 public:
  using IntGlobal = globals::GlobalsComponent<int>;

  void set_clock(time::RealTimeClock *clock) { this->clock_ = clock; }
  void set_control_mode_code(IntGlobal *value) { this->control_mode_code_ = value; }
  void set_decision_log(openquatt_decision_log::OpenQuattDecisionLog *value) {
    this->decision_log_ = value;
  }

  void setup() override;
  void loop() override;
  void dump_config() override;
  float get_setup_priority() const override;

  void observe_transport(uint8_t hp_index, bool online, uint32_t now_ms);
  void observe_working_mode(uint8_t hp_index, float working_mode, uint32_t now_ms);
  void observe_compressor_frequency(uint8_t hp_index, float frequency_hz, uint32_t now_ms);
  void observe_fault_word(uint8_t hp_index, uint16_t register_address, uint16_t word,
                          uint32_t now_ms);

  bool request_start(uint8_t hp_index, uint8_t expected_mode, uint32_t now_ms);
  void request_stop(uint8_t hp_index, uint32_t now_ms);
  oq_incidents::StartFailureResetResult retry_start_failure(
      uint8_t hp_index, uint32_t now_ms, uint32_t request_id = 0U);
  uint32_t defer_start_failure_retry(uint8_t hp_index);
  bool acknowledge(uint8_t hp_index, oq_incidents::IncidentId incident_id);
  uint8_t acknowledge_all_cleared();
  bool confirm_odu_power_cycle(uint8_t hp_index, uint32_t now_ms,
                               uint32_t request_id = 0U);
  uint32_t defer_odu_power_cycle_confirmation(uint8_t hp_index);

  oq_incidents::DerivedOutputs get_outputs(uint8_t hp_index) const;
  bool hp_configured(uint8_t hp_index) const;
  uint8_t configured_hp_count() const;
  uint8_t available_hp_count() const;
  bool availability_complete() const;
  bool all_unavailable_hps_allow_fallback() const;
  bool all_fallback_outputs_safe() const;

  void set_fallback_status(bool requested, bool active, uint8_t block_reason);
  void set_boiler_status(uint8_t role, bool command_active, bool output_continuous);

  void write_snapshot(httpd_req_t *req) const;
  const std::string &get_action_csrf_token() const {
    return this->action_csrf_token_;
  }

 protected:
  static constexpr uint32_t LINK_ROUND_TIMEOUT_MS = 15000U;
  static constexpr uint32_t PARTIAL_FAULT_SNAPSHOT_TIMEOUT_MS = 15000U;
  static constexpr uint32_t MANUAL_RESET_PERSIST_RETRY_MS = 60000U;
  static constexpr size_t SYNTHETIC_INCIDENT_COUNT = 4U;
  static constexpr oq_incidents::IncidentId LINK_LOSS_INCIDENT_ID =
      oq_incidents::kLinkLossIncidentId;
  static constexpr oq_incidents::IncidentId START_FAILED_INCIDENT_ID =
      oq_incidents::kStartFailedIncidentId;
  static constexpr oq_incidents::IncidentId STOP_UNCONFIRMED_INCIDENT_ID =
      oq_incidents::kStopUnconfirmedIncidentId;
  static constexpr oq_incidents::IncidentId PERSISTENCE_FAILURE_INCIDENT_ID =
      oq_incidents::kPersistenceFailureIncidentId;

  struct UnitState {
    oq_incidents::HpIncidentEngine engine{};
    bool configured{false};
    bool transport_online{false};
    bool transport_seen{false};
    float working_mode{0.0F};
    bool working_mode_valid{false};
    uint32_t working_mode_generation{0U};
    float compressor_frequency_hz{0.0F};
    bool compressor_frequency_valid{false};
    uint32_t compressor_frequency_generation{0U};
    uint8_t expected_mode{0U};
    uint8_t active_command_mode{0U};
    uint8_t stop_confirmation_reason{0U};
    uint32_t command_mode_generation{0U};
    uint32_t command_frequency_generation{0U};
    bool start_feedback_armed{false};
    bool stop_feedback_armed{false};
    std::array<uint16_t, oq_incidents::kFaultRegisterCount> fault_words{};
    std::array<bool, oq_incidents::kFaultRegisterCount> fault_pending{};
    uint32_t fault_pending_since_ms{0U};
    uint32_t fault_snapshot_generation{0U};
    uint32_t last_link_working_generation{0U};
    uint32_t last_link_frequency_generation{0U};
    uint32_t last_link_fault_generation{0U};
    uint32_t last_link_round_ms{0U};
    std::array<oq_incidents::IncidentRuntime, oq_incidents::kRawIncidentSlotCount>
        previous_incidents{};
    oq_incidents::DerivedOutputs previous_outputs{};
    uint8_t last_reported_availability{openquatt_decision_log::STATE_UNKNOWN};
    std::array<oq_incidents::IncidentRuntime, SYNTHETIC_INCIDENT_COUNT>
        synthetic_incidents{};
    bool restored_manual_reset_pending{false};
    const char *last_action{"none"};
    const char *last_action_result{"none"};
    bool last_action_ok{false};
    uint32_t last_action_seq{0U};
    uint32_t last_action_request_id{0U};
    uint32_t last_action_at_ms{0U};
  };

  struct PublishedUnit {
    oq_incidents::DerivedOutputs outputs{};
    std::array<oq_incidents::IncidentRuntime, oq_incidents::kRawIncidentSlotCount>
        incidents{};
    std::array<oq_incidents::IncidentRuntime, SYNTHETIC_INCIDENT_COUNT>
        synthetic_incidents{};
    const char *last_action{"none"};
    const char *last_action_result{"none"};
    bool last_action_ok{false};
    uint32_t last_action_seq{0U};
    uint32_t last_action_request_id{0U};
    uint32_t last_action_at_ms{0U};
  };

  struct PublishedSnapshot {
    std::array<PublishedUnit, 2U> units{};
    uint8_t control_mode{0U};
    uint8_t boiler_role{0U};
    uint8_t previous_boiler_role{0U};
    uint8_t fallback_block_reason{0U};
    bool fallback_requested{false};
    bool fallback_active{false};
    bool boiler_command_active{false};
    bool boiler_output_continuous{false};
    uint32_t generated_at_ms{0U};
    uint32_t generated_at_epoch_s{0U};
  };

  static bool valid_hp_index_(uint8_t hp_index);
  static size_t hp_slot_(uint8_t hp_index);
  static uint32_t elapsed_ms_(uint32_t now_ms, uint32_t since_ms);
  static uint8_t availability_state_(const oq_incidents::DerivedOutputs &outputs);
  static uint8_t incident_reason_(const oq_incidents::IncidentDefinition &definition);
  static uint8_t incident_severity_(const oq_incidents::IncidentDefinition &definition);
  static uint8_t event_subject_(size_t slot);
  static uint8_t incident_flags_(const oq_incidents::IncidentDefinition &definition,
                                 const oq_incidents::IncidentRuntime &runtime);
  static uint16_t duration_seconds_(uint32_t from_ms, uint32_t to_ms);
  static size_t synthetic_slot_(oq_incidents::IncidentId incident_id);
  static oq_incidents::IncidentDefinition synthetic_definition_(size_t slot);
  static uint8_t reason_for_incident_id_(
      oq_incidents::IncidentId incident_id);
  static uint32_t epoch_for_runtime_ms_(uint32_t generated_epoch_s,
                                        uint32_t generated_at_ms,
                                        uint32_t runtime_ms);

  UnitState *unit_(uint8_t hp_index);
  const UnitState *unit_(uint8_t hp_index) const;
  void process_fault_snapshot_(UnitState &unit, size_t slot, uint32_t now_ms,
                               bool force_partial);
  void observe_complete_link_round_(UnitState &unit, uint32_t now_ms);
  void publish_transitions_(UnitState &unit, size_t slot, uint32_t now_ms);
  void publish_incident_transition_(size_t slot,
                                    const oq_incidents::IncidentDefinition &definition,
                                    const oq_incidents::IncidentRuntime &previous,
                                    const oq_incidents::IncidentRuntime &current,
                                    uint32_t now_ms);
  void publish_synthetic_incident_(UnitState &unit, size_t hp_slot,
                                   size_t synthetic_slot, bool next_active,
                                   uint32_t now_ms);
  void publish_synthetic_transition_(
      size_t hp_slot, const oq_incidents::IncidentDefinition &definition,
      uint8_t reason, const oq_incidents::IncidentRuntime &previous,
      const oq_incidents::IncidentRuntime &current, uint32_t now_ms);
  void setup_manual_reset_persistence_(uint32_t now_ms);
  void rotate_action_csrf_token_();
  uint32_t reserve_action_request_id_();
  static void record_action_result_(UnitState &unit, const char *action,
                                    const char *result, bool ok,
                                    uint32_t now_ms,
                                    uint32_t request_id = 0U);
  void reconcile_manual_reset_persistence_(uint32_t now_ms);
  bool persist_manual_reset_mask_(uint8_t latch_mask);
  uint8_t runtime_manual_reset_mask_() const;
  oq_incidents::DerivedOutputs outputs_for_slot_(size_t slot) const;
  void publish_snapshot_(uint32_t now_ms);
  uint32_t current_epoch_s_() const;

  std::array<UnitState, 2U> units_{};
  time::RealTimeClock *clock_{nullptr};
  IntGlobal *control_mode_code_{nullptr};
  openquatt_decision_log::OpenQuattDecisionLog *decision_log_{nullptr};
  bool fallback_requested_{false};
  bool fallback_active_{false};
  uint8_t fallback_block_reason_{0U};
  uint8_t boiler_role_{0U};
  uint8_t previous_boiler_role_{0U};
  bool boiler_command_active_{false};
  bool boiler_output_continuous_{false};
  uint32_t last_loop_ms_{0U};
  oq_incidents::ManualResetLatchPersistencePolicy
      manual_reset_persistence_{};
  ESPPreferenceObject manual_reset_pref_a_{};
  ESPPreferenceObject manual_reset_pref_b_{};
  ESPPreferenceObject manual_reset_marker_pref_{};
  std::string action_csrf_token_;
  std::atomic<uint32_t> next_action_request_id_{1U};
  PublishedSnapshot published_{};
  PublishedSnapshot staging_{};
  mutable portMUX_TYPE snapshot_mux_ = portMUX_INITIALIZER_UNLOCKED;
};

}  // namespace openquatt_incident_manager
}  // namespace esphome
