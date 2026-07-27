#include <assert.h>
#include <stdint.h>

#include "openquatt/includes/boiler/oq_otb_startup_probe.h"

using oq_otb::StartupProbeState;

int main() {
  StartupProbeState state;

  assert(state.result(0, 8000) == oq_otb::STARTUP_PROBE_IDLE);
  state.begin(1000);
  assert(state.active());
  assert(state.result(1000, 8000) == oq_otb::STARTUP_PROBE_RUNNING);

  // A response cannot prove the link unless this probe first emitted its own
  // safe STATUS request.
  state.record_response(
      oq_otb::STARTUP_PROBE_ID_STATUS,
      oq_otb::STARTUP_PROBE_TYPE_READ_ACK);
  assert(!state.opentherm_detected());

  // STATUS with CH enabled is never accepted as a safe probe request.
  state.record_request(
      oq_otb::STARTUP_PROBE_ID_STATUS,
      oq_otb::STARTUP_PROBE_TYPE_READ_DATA, 1, 0);
  state.record_response(
      oq_otb::STARTUP_PROBE_ID_STATUS,
      oq_otb::STARTUP_PROBE_TYPE_READ_ACK);
  assert(!state.opentherm_detected());

  // Only a matching acknowledgement after STATUS(CH=off) proves that an
  // OpenTherm boiler is physically responding.
  state.record_request(
      oq_otb::STARTUP_PROBE_ID_STATUS,
      oq_otb::STARTUP_PROBE_TYPE_READ_DATA, 0, 0);
  state.record_response(
      oq_otb::STARTUP_PROBE_ID_STATUS,
      oq_otb::STARTUP_PROBE_TYPE_READ_DATA);
  assert(!state.opentherm_detected());
  state.record_response(
      oq_otb::STARTUP_PROBE_ID_STATUS,
      oq_otb::STARTUP_PROBE_TYPE_READ_ACK);
  assert(state.opentherm_detected());
  assert(state.result(1001, 8000) ==
         oq_otb::STARTUP_PROBE_OPENTHERM_DETECTED);

  state.end();
  assert(!state.active());
  assert(state.result(1002, 8000) == oq_otb::STARTUP_PROBE_IDLE);

  // A new generation cannot reuse proof from the previous probe.
  state.begin(UINT32_MAX - 5);
  assert(!state.opentherm_detected());
  assert(state.result(1, 10) == oq_otb::STARTUP_PROBE_RUNNING);
  assert(state.result(5, 10) == oq_otb::STARTUP_PROBE_TIMED_OUT);
  state.end();

  return 0;
}
