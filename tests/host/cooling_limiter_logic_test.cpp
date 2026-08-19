#include <assert.h>

#include "../../openquatt/includes/control/oq_cooling_limiter_logic.h"

namespace {

using oq_cooling::record_pi_zero_stop;
using oq_cooling::water_restart_gap_recovered;
using oq_cooling::WATER_STOP_DEW;
using oq_cooling::WATER_STOP_LIMITER;
using oq_cooling::WATER_STOP_NONE;
using oq_cooling::WATER_STOP_PROJECTED_FLOOR;
using oq_cooling::WaterCycleState;

void test_pi_zero_stop_requires_an_active_nonzero_run() {
  WaterCycleState inactive;
  assert(!record_pi_zero_stop(1, 0, 0.0f, inactive));

  WaterCycleState not_started{true, 0.0f, WATER_STOP_NONE};
  assert(!record_pi_zero_stop(0, 0, 0.0f, not_started));
  assert(not_started.active);

  WaterCycleState still_running{true, 0.0f, WATER_STOP_NONE};
  assert(!record_pi_zero_stop(1, 1, 0.0f, still_running));
  assert(still_running.active);
}

void test_low_load_pi_zero_stop_waits_for_restart_delta() {
  constexpr float stop_gap_c = 0.05f;
  constexpr float restart_delta_c = 1.0f;
  WaterCycleState cycle{true, 0.0f, WATER_STOP_NONE};

  assert(record_pi_zero_stop(1, 0, stop_gap_c, cycle));
  assert(!cycle.active);
  assert(cycle.stop_reason_code == WATER_STOP_LIMITER);
  assert(cycle.stop_buffer_gap_c == stop_gap_c);

  // Repeated PI recovery attempts stay blocked, so no Duo owner can receive a
  // new request while the just-stopped owner is still in minimum off-time.
  assert(!water_restart_gap_recovered(cycle, 0.20f, restart_delta_c));
  assert(!water_restart_gap_recovered(cycle, 0.60f, restart_delta_c));
  assert(!water_restart_gap_recovered(cycle, 1.04f, restart_delta_c));
  assert(water_restart_gap_recovered(cycle, 1.05f, restart_delta_c));
}

void test_pi_zero_stop_preserves_higher_priority_reason() {
  WaterCycleState dew_stop{true, 0.0f, WATER_STOP_DEW};

  assert(record_pi_zero_stop(1, 0, 0.10f, dew_stop));
  assert(!dew_stop.active);
  assert(dew_stop.stop_reason_code == WATER_STOP_DEW);
  assert(dew_stop.stop_buffer_gap_c == 0.10f);
}

void test_existing_restart_exceptions_remain_unchanged() {
  const WaterCycleState no_water_stop{false, 0.0f, WATER_STOP_NONE};
  assert(water_restart_gap_recovered(no_water_stop, -1.0f, 1.0f));

  const WaterCycleState projected_floor_pause{false, 0.0f, WATER_STOP_PROJECTED_FLOOR};
  assert(water_restart_gap_recovered(projected_floor_pause, -1.0f, 1.0f));
}

}  // namespace

int main() {
  test_pi_zero_stop_requires_an_active_nonzero_run();
  test_low_load_pi_zero_stop_waits_for_restart_delta();
  test_pi_zero_stop_preserves_higher_priority_reason();
  test_existing_restart_exceptions_remain_unchanged();
  return 0;
}
