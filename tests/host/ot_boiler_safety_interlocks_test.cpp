#include <assert.h>
#include <stdint.h>

#include "openquatt/includes/boiler/oq_boiler_logic.h"

namespace {

oq_boiler::BoilerCommand active_command(uint32_t updated_at_ms) {
  return oq_boiler::BoilerCommand{
      true,
      true,
      true,
      5000.0f,
      45.0f,
      oq_boiler::COMMAND_SOURCE_POWER_HOUSE,
      updated_at_ms,
  };
}

oq_boiler::ControllerInput safe_input(uint32_t now_ms) {
  return oq_boiler::ControllerInput{
      true,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      now_ms,
      15000,
      0,
      30000,
      120000,
  };
}

}  // namespace

int main() {
  const auto command = active_command(1000);

  assert(oq_boiler::strategy_output_is_current(true, 3, 3, 1000));
  assert(!oq_boiler::strategy_output_is_current(false, 3, 3, 1000));
  assert(!oq_boiler::strategy_output_is_current(true, 2, 3, 1000));
  assert(!oq_boiler::strategy_output_is_current(true, 3, 3, 0));

  assert(!oq_boiler::command_satisfies_rearm(true, command, 1000));
  assert(oq_boiler::command_satisfies_rearm(
      true, active_command(1001), 1000));
  assert(!oq_boiler::command_satisfies_rearm(
      true, active_command(999), 1000));
  assert(oq_boiler::timestamp_is_strictly_newer(5, UINT32_MAX - 5));
  assert(!oq_boiler::settle_period_elapsed(true, 5, UINT32_MAX - 5, 20));
  assert(oq_boiler::settle_period_elapsed(true, 20, UINT32_MAX - 5, 20));

  // The command lease must accommodate the slowest (60 s) strategy cadence
  // with scheduler margin, while still expiring if that strategy stops.
  assert(oq_boiler::command_is_fresh(command, 76000, 75000));
  assert(!oq_boiler::command_is_fresh(command, 76001, 75000));

  auto input = safe_input(1500);
  input.transport_settled = false;
  input.output_active = true;
  input.output_last_change_ms = 1400;
  auto decision = oq_boiler::evaluate(command, input);
  assert(decision.force_off);
  assert(!decision.output_active);
  assert(decision.block_reason == oq_boiler::BLOCK_TRANSPORT_SETTLING);

  input = safe_input(1500);
  input.command_rearmed = false;
  decision = oq_boiler::evaluate(command, input);
  assert(decision.force_off);
  assert(!decision.output_active);
  assert(decision.block_reason == oq_boiler::BLOCK_AWAITING_FRESH_COMMAND);

  input = safe_input(1500);
  input.transport_available = false;
  input.command_rearmed = false;
  decision = oq_boiler::evaluate(command, input);
  assert(decision.force_off);
  assert(!decision.output_active);
  assert(decision.block_reason == oq_boiler::BLOCK_TRANSPORT_UNAVAILABLE);

  input = safe_input(1500);
  decision = oq_boiler::evaluate(command, input);
  assert(!decision.force_off);
  assert(decision.output_active);
  assert(decision.block_reason == oq_boiler::BLOCK_NONE);

  // A control-mode ownership change must override minimum on-time. Otherwise
  // an OTB request could continue briefly after entering cooling or off mode.
  auto no_owner_command = command;
  no_owner_command.demand_present = false;
  input.output_active = true;
  input.output_last_change_ms = 1499;
  decision = oq_boiler::evaluate(no_owner_command, input);
  assert(decision.force_off);
  assert(!decision.output_active);
  assert(decision.block_reason == oq_boiler::BLOCK_NO_HEAT_REQUEST);

  return 0;
}
