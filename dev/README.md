# OpenQuatt Development Configs

This directory contains standalone development and validation configs that are
not release firmware entrypoints.

## `ot_test_esp32s3.yaml`

Minimal ESP32-S3 OpenTherm validation config. It is intended for local component
testing without pulling in the full OpenQuatt package stack, and is not part of
the release build matrix.

## Memory-sensitive validation

Minimal configs are useful for component isolation, but cannot establish the
internal-heap safety of release firmware. Memory-affecting changes must also be
tested with the applicable full release profile and combined network/control
load. Follow the runtime heap method and release criteria documented in
`docs/system-overview.md` and `CONTRIBUTING.md`.
