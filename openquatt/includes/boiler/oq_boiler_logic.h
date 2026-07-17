#pragma once

#include <math.h>
#include <stdint.h>

namespace oq_boiler {

enum CommandSource : uint8_t {
  COMMAND_SOURCE_NONE = 0,
  COMMAND_SOURCE_POWER_HOUSE = 1,
  COMMAND_SOURCE_CM3 = COMMAND_SOURCE_POWER_HOUSE,
  COMMAND_SOURCE_COMMISSIONING = 2,
  COMMAND_SOURCE_HEATING_CURVE = 3,
};

enum BlockReason : uint8_t {
  BLOCK_NONE = 0,
  BLOCK_ASSIST_DISABLED = 1,
  BLOCK_COMMAND_INVALID = 2,
  BLOCK_COMMAND_STALE = 3,
  BLOCK_SUPPLY_UNAVAILABLE = 4,
  BLOCK_WATER_TEMP_INHIBIT = 5,
  BLOCK_WATER_TEMP_HARD_TRIP = 6,
  BLOCK_COMMISSIONING_WAITING = 7,
  BLOCK_NO_HEAT_REQUEST = 8,
  BLOCK_MIN_ON_TIME = 9,
  BLOCK_MIN_OFF_TIME = 10,
  BLOCK_TRANSPORT_UNAVAILABLE = 11,
  BLOCK_TARGET_INVALID = 12,
};

struct BoilerCommand {
  bool valid;
  bool demand_present;
  bool heat_request;
  float requested_power_w;
  float target_temperature_c;
  uint8_t source;
  uint32_t updated_at_ms;
};

struct ControllerInput {
  bool assist_enabled;
  bool supply_temperature_valid;
  bool boiler_inhibit_active;
  bool hard_trip_active;
  bool transport_available;
  bool target_required;
  bool target_valid;
  bool output_active;
  uint32_t now_ms;
  uint32_t command_max_age_ms;
  uint32_t output_last_change_ms;
  uint32_t min_on_ms;
  uint32_t min_off_ms;
};

struct PowerTarget {
  bool valid;
  float requested_power_w;
  float target_temperature_c;
};

struct AssistSignal {
  bool need_on;
  bool okay_off;
};

inline AssistSignal power_house_assist(float deficit_w,
                                       float on_threshold_w,
                                       float off_threshold_w) {
  return AssistSignal{
      !isnan(deficit_w) && deficit_w >= on_threshold_w,
      isnan(deficit_w) || deficit_w <= off_threshold_w,
  };
}

inline AssistSignal heating_curve_assist(bool heat_request,
                                         bool hp_saturated,
                                         float target_temperature_c,
                                         float supply_temperature_c,
                                         float on_delta_c,
                                         float off_delta_c) {
  const bool temperatures_valid =
      !isnan(target_temperature_c) && !isnan(supply_temperature_c);
  const float target_error_c = temperatures_valid
      ? target_temperature_c - supply_temperature_c
      : NAN;
  return AssistSignal{
      heat_request && hp_saturated && temperatures_valid &&
          target_error_c >= on_delta_c,
      !heat_request || !hp_saturated || !temperatures_valid ||
          target_error_c <= off_delta_c,
  };
}

inline PowerTarget target_from_power(float requested_power_w,
                                     float rated_power_w,
                                     float inlet_temperature_c,
                                     float flow_lph,
                                     float cp_j_per_kgk,
                                     float maximum_temperature_c) {
  PowerTarget target{false, 0.0f, NAN};
  if (isnan(requested_power_w) || isnan(rated_power_w) ||
      isnan(inlet_temperature_c) || isnan(flow_lph) ||
      isnan(cp_j_per_kgk) || isnan(maximum_temperature_c) ||
      requested_power_w <= 0.0f || rated_power_w <= 0.0f ||
      flow_lph <= 0.0f || cp_j_per_kgk <= 0.0f ||
      inlet_temperature_c >= maximum_temperature_c) {
    return target;
  }

  const float thermal_conductance_w_per_k =
      (flow_lph / 3600.0f) * cp_j_per_kgk;
  const float maximum_hydraulic_power_w =
      thermal_conductance_w_per_k *
      (maximum_temperature_c - inlet_temperature_c);
  float usable_power_w = fminf(requested_power_w, rated_power_w);
  usable_power_w = fminf(usable_power_w, maximum_hydraulic_power_w);
  if (usable_power_w <= 0.0f) return target;

  target.valid = true;
  target.requested_power_w = usable_power_w;
  target.target_temperature_c =
      inlet_temperature_c + usable_power_w / thermal_conductance_w_per_k;
  return target;
}

struct ControllerDecision {
  bool demand_present;
  bool desired_active;
  bool output_active;
  bool force_off;
  bool blocked;
  uint8_t block_reason;
};

inline BoilerCommand make_legacy_command(int control_mode_code,
                                         bool commissioning_active,
                                         bool commissioning_boiler_task,
                                         bool commissioning_boiler_request,
                                         uint32_t now_ms) {
  const bool in_cm3 = control_mode_code == 3;
  const bool commissioning_task_active =
      control_mode_code == 100 &&
      commissioning_active &&
      commissioning_boiler_task;
  const bool commissioning_heat_request =
      commissioning_task_active && commissioning_boiler_request;

  BoilerCommand command{};
  command.valid = true;
  command.demand_present = in_cm3 || commissioning_task_active;
  command.heat_request = in_cm3 || commissioning_heat_request;
  command.requested_power_w = NAN;
  command.target_temperature_c = NAN;
  command.source = commissioning_task_active
      ? COMMAND_SOURCE_COMMISSIONING
      : in_cm3 ? COMMAND_SOURCE_CM3 : COMMAND_SOURCE_NONE;
  command.updated_at_ms = now_ms;
  return command;
}

inline bool command_is_fresh(const BoilerCommand &command,
                             uint32_t now_ms,
                             uint32_t max_age_ms) {
  if (!command.valid || command.updated_at_ms == 0) return false;
  if (max_age_ms == 0) return true;
  return (uint32_t)(now_ms - command.updated_at_ms) <= max_age_ms;
}

inline bool minimum_time_active(uint32_t now_ms,
                                uint32_t last_change_ms,
                                uint32_t minimum_time_ms) {
  if (minimum_time_ms == 0 || last_change_ms == 0) return false;
  return (uint32_t)(now_ms - last_change_ms) < minimum_time_ms;
}

inline ControllerDecision evaluate(const BoilerCommand &command,
                                   const ControllerInput &input) {
  ControllerDecision decision{};
  decision.demand_present = command.demand_present;
  decision.desired_active = false;
  decision.output_active = false;
  decision.force_off = false;
  decision.blocked = false;
  decision.block_reason = BLOCK_NONE;

  if (input.hard_trip_active) {
    decision.force_off = true;
    decision.block_reason = BLOCK_WATER_TEMP_HARD_TRIP;
  } else if (input.boiler_inhibit_active) {
    decision.force_off = true;
    decision.block_reason = BLOCK_WATER_TEMP_INHIBIT;
  } else if (!input.assist_enabled) {
    decision.force_off = true;
    decision.block_reason = BLOCK_ASSIST_DISABLED;
  } else if (!command.valid) {
    decision.force_off = true;
    decision.block_reason = BLOCK_COMMAND_INVALID;
  } else if (!command_is_fresh(command, input.now_ms, input.command_max_age_ms)) {
    decision.force_off = true;
    decision.block_reason = BLOCK_COMMAND_STALE;
  } else if (!input.supply_temperature_valid) {
    decision.force_off = true;
    decision.block_reason = BLOCK_SUPPLY_UNAVAILABLE;
  } else if (!command.demand_present) {
    decision.block_reason = BLOCK_NO_HEAT_REQUEST;
  } else if (!input.transport_available) {
    decision.force_off = true;
    decision.block_reason = BLOCK_TRANSPORT_UNAVAILABLE;
  } else if (command.heat_request && input.target_required && !input.target_valid) {
    decision.force_off = true;
    decision.block_reason = BLOCK_TARGET_INVALID;
  } else if (!command.heat_request) {
    decision.block_reason = command.source == COMMAND_SOURCE_COMMISSIONING
        ? BLOCK_COMMISSIONING_WAITING
        : BLOCK_NO_HEAT_REQUEST;
  } else {
    decision.desired_active = true;
  }

  if (decision.force_off) {
    decision.output_active = false;
  } else if (decision.desired_active) {
    if (!input.output_active &&
        minimum_time_active(input.now_ms, input.output_last_change_ms, input.min_off_ms)) {
      decision.output_active = false;
      decision.block_reason = BLOCK_MIN_OFF_TIME;
    } else {
      decision.output_active = true;
      decision.block_reason = BLOCK_NONE;
    }
  } else if (input.output_active &&
             minimum_time_active(input.now_ms, input.output_last_change_ms, input.min_on_ms)) {
    decision.output_active = true;
    decision.block_reason = BLOCK_MIN_ON_TIME;
  }

  decision.blocked = decision.demand_present && !decision.output_active;
  return decision;
}

inline const char *block_reason_text(uint8_t reason) {
  switch (reason) {
    case BLOCK_ASSIST_DISABLED: return "boiler/CV assist disabled";
    case BLOCK_COMMAND_INVALID: return "boiler command invalid";
    case BLOCK_COMMAND_STALE: return "boiler command stale";
    case BLOCK_SUPPLY_UNAVAILABLE: return "water supply temperature unavailable";
    case BLOCK_WATER_TEMP_INHIBIT: return "water temperature boiler inhibit active";
    case BLOCK_WATER_TEMP_HARD_TRIP: return "water temperature hard trip active";
    case BLOCK_COMMISSIONING_WAITING: return "CM100 boiler commissioning waiting for flow settle";
    case BLOCK_NO_HEAT_REQUEST: return "no boiler heat request";
    case BLOCK_MIN_ON_TIME: return "boiler minimum on-time active";
    case BLOCK_MIN_OFF_TIME: return "boiler minimum off-time active";
    case BLOCK_TRANSPORT_UNAVAILABLE: return "selected boiler transport unavailable";
    case BLOCK_TARGET_INVALID: return "boiler target temperature invalid";
    default: return "";
  }
}

}  // namespace oq_boiler
