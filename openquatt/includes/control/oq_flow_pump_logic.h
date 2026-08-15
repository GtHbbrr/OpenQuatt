#pragma once

namespace oq_flow {

struct PumpRelayState {
  bool known = false;
  bool running = false;
};

inline bool all_relevant_pumps_stopped(bool secondary_enabled, const PumpRelayState& hp1,
                                       const PumpRelayState& hp2) {
  if (!hp1.known || hp1.running) return false;
  if (!secondary_enabled) return true;
  return hp2.known && !hp2.running;
}

}  // namespace oq_flow
