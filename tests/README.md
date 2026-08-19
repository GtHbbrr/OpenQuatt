# Regression tests

Regression tests preserve behaviour that has already been designed, fixed or
verified. A bug fix should preferably add a test that fails before the fix and
passes afterwards. This prevents a later control, timing or safety change from
silently reintroducing the same failure.

## Test layers

- `tests/host/`: deterministic C++ tests for pure control and safety logic.
  They compile and run on the development machine and in CI without ESP32
  hardware.
- `openquatt/web/tests/`: browser-independent tests for web application logic.
- `scripts/tests/`: tests for repository tooling and validation scripts.
- ESPHome config validation and firmware compilation: integration checks for
  package composition, generated code and supported hardware profiles.
- Hardware-in-the-loop tests: physical protocol, actuator and timing evidence.
  These remain required where a host test cannot prove electrical or real-time
  behaviour.

## Adding a host regression test

Add a self-contained `tests/host/*_test.cpp` file and run:

```sh
./scripts/run_host_regression_tests.sh
```

The runner compiles every matching test with warnings as errors and executes
the resulting binaries. CI runs the same command. Keep host tests deterministic,
independent of network access and focused on public pure-logic interfaces.

Useful future coverage includes state transitions, stale or invalid sensor
input, timestamp wraparound, safety-priority ordering and mutual exclusion of
actuator paths. Host tests complement rather than replace ESPHome compilation
and physical HIL evidence.
