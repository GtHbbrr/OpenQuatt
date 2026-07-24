# OpenTherm RX decoder candidate override

This directory vendors the complete ESPHome 2026.7.0 `opentherm` component for
an isolated OpenQuatt RMT receive candidate. Except for the files listed below,
the source stays byte-for-byte equal to ESPHome 2026.7.0:

- `__init__.py`: include the ESP-IDF RMT driver;
- `hub.cpp`: service completed RMT frames from normal and synchronous loops;
- `opentherm.cpp` and `opentherm.h`: ESP32 RMT capture, bounded hand-off,
  timeout arbitration, diagnostics and an explicit idle master-output level
  when an in-flight conversation is stopped;
- `opentherm_rmt_decoder.h`: the host-testable Manchester decoder.

The full component, including the `output` platform, is deliberately present:
ESPHome local external components replace rather than overlay the built-in
component.

Candidate history:

- A (`f72d249`) pinned the existing GPTimer interrupt to priority 3. It still
  produced `NO_CHANGE_TOO_LONG` and was rejected.
- B1/B2 (`4ec00e3`, `06e2ce3`) introduced ESP32 RMT response capture and fixed
  the input phase/polarity.
- B3 (`cd7891e`) claimed the completed RMT frame in the ISR, but repeated boots
  still produced whole-response timeouts.
- B4 (`14951b2`) enabled the ESP-IDF cache-safe RMT RX ISR. It timed out quickly
  and was rejected.
- B5 (`bb3bcca`) serializes RMT completion and the 800 ms software deadline:
  a completed frame is always consumed before declaring a timeout.
- B6 (`bed4b48`) adds bounded diagnostics for rejected pulse duration,
  half-bit overflow and incomplete captures. It does not change timing
  tolerances or publish additional Home Assistant entities.
- B7 (`01ba416`) arbitrates RMT completion and the software timeout under the
  same ISR lock, arms the callback claim before starting capture and treats a
  zero-symbol completion as a bounded decoder error instead of remaining
  pending.

The B5-B7 builds pass three host regressions. Two consecutive B6
post-simulator-reboot gates of more than 1,000 complete responses and one B7
gate of 1,093 responses completed with zero response timeouts, protocol errors
and simulator RX/TX errors. The simulator response turnaround stayed below
75 ms. Two earlier B6 gates, before the simulator reboot, each contained one
response timeout but no rejected RMT frame. The simulator now counts immediate
duplicate request IDs so a future timeout can distinguish a missed boiler
response from a master request that never reached the simulator.

The rebased B7 build subsequently passed a 62-minute transport soak with 15,834
complete responses and no master or simulator error. A nine-hour soak with the
OpenTherm product route selected produced about 135,900 valid responses. Its
only master timeout correlated one-to-one with a simulator
`TIMING_INVALID` while receiving the master request; no master-RX protocol,
`NO_TRANSITION` or `NO_CHANGE_TOO_LONG` error occurred. An active 60 °C
commissioning command and two controlled response-loss intervals also
validated OT actuation, R1 exclusion, link-loss withdrawal, simulator watchdog
shutdown, recovery at CH off/TSet 0 and the 120-second minimum off time.

Runtime route changes can stop a conversation between Manchester half-bits.
The built-in `OpenTherm::stop()` stops the timer but does not restore the output
pin. This candidate explicitly drives the same idle-high level used during
initialization, so disabling the hub cannot leave the digital master output at
an asserted half-bit. This is physical fail-silent behavior; it does not claim
that the boiler acknowledged a final CH-off frame.

This remains a separate draft candidate, not a release-ready dependency fork.
Preferred disposition is an upstream ESPHome fix followed by removal of this
override. Merge is blocked on upstream review, real-boiler HIL, prolonged
simultaneous OTT+OTB testing and resolution of the remaining rare
master-TX/bus/simulator-RX timing event. OpenQuatt PR #363 remains unchanged.
