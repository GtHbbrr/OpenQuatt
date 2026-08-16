#include <assert.h>
#include <stdint.h>

#include "openquatt/includes/boiler/oq_otb_off_flush.h"

using oq_otb::OffFlushState;

int main() {
  OffFlushState state;

  assert(!state.active());
  assert(!state.complete());

  state.begin();
  assert(state.active());

  // Acknowledgements from requests that were already in flight before begin()
  // must not complete the shutdown handshake.
  state.record_response(oq_otb::OFF_FLUSH_ID_STATUS, oq_otb::OFF_FLUSH_TYPE_READ_ACK, 0, 0);
  state.record_response(oq_otb::OFF_FLUSH_ID_CH_SETPOINT, oq_otb::OFF_FLUSH_TYPE_WRITE_ACK, 0, 0);
  assert(!state.status_off_acknowledged());
  assert(!state.setpoint_zero_acknowledged());

  // An active STATUS request and a non-zero setpoint are not off commands.
  state.record_request(oq_otb::OFF_FLUSH_ID_STATUS, oq_otb::OFF_FLUSH_TYPE_READ_DATA, 1, 0);
  state.record_request(oq_otb::OFF_FLUSH_ID_CH_SETPOINT, oq_otb::OFF_FLUSH_TYPE_WRITE_DATA, 60, 0);
  state.record_response(oq_otb::OFF_FLUSH_ID_STATUS, oq_otb::OFF_FLUSH_TYPE_READ_ACK, 0, 0);
  state.record_response(oq_otb::OFF_FLUSH_ID_CH_SETPOINT, oq_otb::OFF_FLUSH_TYPE_WRITE_ACK, 60, 0);
  assert(!state.complete());

  state.record_request(oq_otb::OFF_FLUSH_ID_STATUS, oq_otb::OFF_FLUSH_TYPE_READ_DATA, 0, 0);
  state.record_response(oq_otb::OFF_FLUSH_ID_STATUS, oq_otb::OFF_FLUSH_TYPE_READ_ACK, 0, 0);
  assert(state.status_off_acknowledged());
  assert(!state.complete());

  state.record_request(oq_otb::OFF_FLUSH_ID_CH_SETPOINT, oq_otb::OFF_FLUSH_TYPE_WRITE_DATA, 0, 0);
  state.record_response(oq_otb::OFF_FLUSH_ID_CH_SETPOINT, oq_otb::OFF_FLUSH_TYPE_WRITE_ACK, 0, 1);
  assert(!state.setpoint_zero_acknowledged());
  state.record_response(oq_otb::OFF_FLUSH_ID_CH_SETPOINT, oq_otb::OFF_FLUSH_TYPE_WRITE_ACK, 0, 0);
  assert(state.setpoint_zero_acknowledged());
  assert(state.complete());

  state.end();
  assert(!state.active());

  // A new flush generation may not reuse acknowledgements from the previous one.
  state.begin();
  assert(!state.complete());
  state.end();

  return 0;
}
