#pragma once

#include <stdint.h>

namespace oq_hp_fallback {

enum class ControlMode : uint8_t {
  CM0 = 0,
  CM1 = 1,
  CM2 = 2,
  CM3 = 3,
  CM4 = 4,
  CM5 = 5,
  CM98 = 98,
  CM100 = 100,
};

enum class FallbackAction : uint8_t {
  NO_CM4_CHANGE = 0,
  ENTER_CM4 = 1,
  HOLD_CM4 = 2,
  EXIT_CM4 = 3,
};

enum class FallbackBlockReason : uint8_t {
  NONE = 0,
  OVERRIDE_ACTIVE = 1,
  COMMISSIONING_ACTIVE = 2,
  COOLING_ACTIVE = 3,
  FROST_ACTIVE = 4,
  NO_HEATING_DEMAND = 5,
  FALLBACK_DISABLED = 6,
  HP_AVAILABLE = 7,
  HP_AVAILABILITY_UNKNOWN = 8,
  NO_CONFIRMED_FALLBACK_CAUSE = 9,
  HP_OUTPUT_STATE_UNSAFE = 10,
  FLOW_UNAVAILABLE = 11,
  FLOW_INSUFFICIENT = 12,
  SUPPLY_TEMPERATURE_UNAVAILABLE = 13,
  BOILER_GUARD_BLOCKED = 14,
};

struct FallbackInputs {
  ControlMode current_mode = ControlMode::CM0;
  bool heating_demand = false;
  bool fallback_enabled = false;
  uint8_t available_hp_count = 0;
  bool hp_availability_complete = false;
  bool confirmed_fallback_cause = false;
  bool hp_output_state_safe = false;
  bool flow_valid = false;
  bool flow_sufficient = false;
  bool supply_temperature_valid = false;
  bool boiler_guards_clear = false;
  bool cooling_active = false;
  bool frost_active = false;
  bool commissioning_active = false;
  bool override_active = false;
};

struct FallbackDecision {
  bool cm4_allowed = false;
  FallbackAction action = FallbackAction::NO_CM4_CHANGE;
  FallbackBlockReason block_reason = FallbackBlockReason::NONE;
};

inline FallbackBlockReason first_cm4_block_reason(const FallbackInputs& inputs) {
  // External owners are evaluated first. CM4 may not compete with an
  // override, commissioning, cooling or frost-protection control path.
  if (inputs.override_active) return FallbackBlockReason::OVERRIDE_ACTIVE;
  if (inputs.commissioning_active || inputs.current_mode == ControlMode::CM100) {
    return FallbackBlockReason::COMMISSIONING_ACTIVE;
  }
  if (inputs.cooling_active || inputs.current_mode == ControlMode::CM5) {
    return FallbackBlockReason::COOLING_ACTIVE;
  }
  if (inputs.frost_active || inputs.current_mode == ControlMode::CM98) {
    return FallbackBlockReason::FROST_ACTIVE;
  }
  if (!inputs.heating_demand) return FallbackBlockReason::NO_HEATING_DEMAND;
  if (!inputs.fallback_enabled) return FallbackBlockReason::FALLBACK_DISABLED;
  if (inputs.available_hp_count > 0) return FallbackBlockReason::HP_AVAILABLE;
  if (!inputs.hp_availability_complete) {
    return FallbackBlockReason::HP_AVAILABILITY_UNKNOWN;
  }
  if (!inputs.confirmed_fallback_cause) {
    return FallbackBlockReason::NO_CONFIRMED_FALLBACK_CAUSE;
  }
  if (!inputs.hp_output_state_safe) {
    return FallbackBlockReason::HP_OUTPUT_STATE_UNSAFE;
  }
  if (!inputs.flow_valid) return FallbackBlockReason::FLOW_UNAVAILABLE;
  if (!inputs.flow_sufficient) return FallbackBlockReason::FLOW_INSUFFICIENT;
  if (!inputs.supply_temperature_valid) {
    return FallbackBlockReason::SUPPLY_TEMPERATURE_UNAVAILABLE;
  }
  if (!inputs.boiler_guards_clear) return FallbackBlockReason::BOILER_GUARD_BLOCKED;
  return FallbackBlockReason::NONE;
}

inline FallbackDecision decide_cm4(const FallbackInputs& inputs) {
  FallbackDecision decision;
  decision.block_reason = first_cm4_block_reason(inputs);
  decision.cm4_allowed = decision.block_reason == FallbackBlockReason::NONE;
  if (decision.cm4_allowed) {
    decision.action = inputs.current_mode == ControlMode::CM4 ? FallbackAction::HOLD_CM4 : FallbackAction::ENTER_CM4;
  } else if (inputs.current_mode == ControlMode::CM4) {
    decision.action = FallbackAction::EXIT_CM4;
  }
  return decision;
}

inline const char* fallback_block_reason_name(FallbackBlockReason reason) {
  switch (reason) {
    case FallbackBlockReason::NONE:
      return "none";
    case FallbackBlockReason::OVERRIDE_ACTIVE:
      return "override active";
    case FallbackBlockReason::COMMISSIONING_ACTIVE:
      return "commissioning active";
    case FallbackBlockReason::COOLING_ACTIVE:
      return "cooling active";
    case FallbackBlockReason::FROST_ACTIVE:
      return "frost protection active";
    case FallbackBlockReason::NO_HEATING_DEMAND:
      return "no heating demand";
    case FallbackBlockReason::FALLBACK_DISABLED:
      return "boiler fallback disabled";
    case FallbackBlockReason::HP_AVAILABLE:
      return "heat pump available";
    case FallbackBlockReason::HP_AVAILABILITY_UNKNOWN:
      return "heat pump availability unknown";
    case FallbackBlockReason::NO_CONFIRMED_FALLBACK_CAUSE:
      return "no confirmed fallback cause";
    case FallbackBlockReason::HP_OUTPUT_STATE_UNSAFE:
      return "heat pump output state unsafe";
    case FallbackBlockReason::FLOW_UNAVAILABLE:
      return "flow unavailable";
    case FallbackBlockReason::FLOW_INSUFFICIENT:
      return "flow insufficient";
    case FallbackBlockReason::SUPPLY_TEMPERATURE_UNAVAILABLE:
      return "supply temperature unavailable";
    case FallbackBlockReason::BOILER_GUARD_BLOCKED:
      return "boiler guard blocked";
  }
  return "unknown";
}

}  // namespace oq_hp_fallback
