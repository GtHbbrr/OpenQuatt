#pragma once

#include <stdint.h>

namespace oq_boiler {

// The role explains why heat is requested. It is deliberately independent
// from heat_enable so a CM3 <-> CM4 handover does not toggle the physical
// relay or the OpenTherm CH-enable output.
enum class BoilerRole : uint8_t {
  OFF = 0,
  ASSIST_CM3 = 1,
  FALLBACK_CM4 = 2,
  COMMISSIONING_CM100 = 3,
};

enum class BoilerOutputAction : uint8_t {
  KEEP = 0,
  ENABLE = 1,
  DISABLE = 2,
};

struct BoilerOutputCommand {
  BoilerRole role = BoilerRole::OFF;
  bool heat_enable = false;
};

struct BoilerOutputTransition {
  BoilerRole previous_role = BoilerRole::OFF;
  BoilerRole next_role = BoilerRole::OFF;
  bool previous_heat_enable = false;
  bool next_heat_enable = false;
  bool role_changed = false;
  BoilerOutputAction output_action = BoilerOutputAction::KEEP;
  bool assist_fallback_handover_without_output_edge = false;
};

inline bool is_assist_fallback_handover(BoilerRole previous_role,
                                        BoilerRole next_role) {
  return (previous_role == BoilerRole::ASSIST_CM3 &&
          next_role == BoilerRole::FALLBACK_CM4) ||
         (previous_role == BoilerRole::FALLBACK_CM4 &&
          next_role == BoilerRole::ASSIST_CM3);
}

inline bool effective_heat_enable(const BoilerOutputCommand &command) {
  // OFF with heat enabled is contradictory and must fail safe.
  return command.role != BoilerRole::OFF && command.heat_enable;
}

inline BoilerOutputTransition plan_output_transition(
    BoilerRole previous_role,
    bool previous_heat_enable,
    const BoilerOutputCommand &next_command) {
  const bool next_heat_enable = effective_heat_enable(next_command);
  BoilerOutputTransition transition;
  transition.previous_role = previous_role;
  transition.next_role = next_command.role;
  transition.previous_heat_enable = previous_heat_enable;
  transition.next_heat_enable = next_heat_enable;
  transition.role_changed = previous_role != next_command.role;
  transition.output_action =
      previous_heat_enable == next_heat_enable
          ? BoilerOutputAction::KEEP
          : (next_heat_enable ? BoilerOutputAction::ENABLE
                              : BoilerOutputAction::DISABLE);
  transition.assist_fallback_handover_without_output_edge =
      previous_heat_enable &&
      next_heat_enable &&
      is_assist_fallback_handover(previous_role, next_command.role);
  return transition;
}

// Output must provide: void write_heat_enable(bool enabled).
// Role changes are returned to the caller for status/logging, but never sent
// to the physical output. This keeps relay and OpenTherm output semantics the
// same and makes output continuity explicit.
class BoilerOutputController {
 public:
  BoilerOutputTransition advance(const BoilerOutputCommand &command) {
    const BoilerOutputTransition transition =
        plan_output_transition(role_, heat_enable_, command);
    role_ = transition.next_role;
    heat_enable_ = transition.next_heat_enable;
    return transition;
  }

  template<typename Output>
  BoilerOutputTransition apply(const BoilerOutputCommand &command, Output &output) {
    const BoilerOutputTransition transition = advance(command);
    if (transition.output_action == BoilerOutputAction::ENABLE) {
      output.write_heat_enable(true);
    } else if (transition.output_action == BoilerOutputAction::DISABLE) {
      output.write_heat_enable(false);
    }
    return transition;
  }

  BoilerRole role() const { return role_; }
  bool heat_enable() const { return heat_enable_; }

 private:
  BoilerRole role_ = BoilerRole::OFF;
  bool heat_enable_ = false;
};

}  // namespace oq_boiler
