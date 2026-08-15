#include <assert.h>

#include "../../openquatt/includes/control/oq_flow_pump_logic.h"

namespace {

using oq_flow::all_relevant_pumps_stopped;
using oq_flow::PumpRelayState;

void test_single_requires_hp1_confirmed_stopped() {
  const PumpRelayState unknown{};
  const PumpRelayState stopped{true, false};
  const PumpRelayState running{true, true};

  assert(!all_relevant_pumps_stopped(false, unknown, unknown));
  assert(all_relevant_pumps_stopped(false, stopped, unknown));
  assert(!all_relevant_pumps_stopped(false, running, unknown));

  // HP2 is irrelevant in a single topology.
  assert(all_relevant_pumps_stopped(false, stopped, running));
}

void test_duo_requires_both_pumps_confirmed_stopped() {
  const PumpRelayState unknown{};
  const PumpRelayState stopped{true, false};
  const PumpRelayState running{true, true};

  assert(all_relevant_pumps_stopped(true, stopped, stopped));
  assert(!all_relevant_pumps_stopped(true, running, stopped));
  assert(!all_relevant_pumps_stopped(true, stopped, running));
  assert(!all_relevant_pumps_stopped(true, running, running));
  assert(!all_relevant_pumps_stopped(true, unknown, stopped));
  assert(!all_relevant_pumps_stopped(true, stopped, unknown));
}

}  // namespace

int main() {
  test_single_requires_hp1_confirmed_stopped();
  test_duo_requires_both_pumps_confirmed_stopped();
  return 0;
}
