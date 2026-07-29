# Custom Components

- Custom ESPHome components mix Python codegen/validation with C++ runtime code.
- Inspect only the touched component directory plus `openquatt_common` when shared helpers are needed.
- Be conservative with internal DRAM. Move large, long-lived buffers or state to strict PSRAM where task/ISR/cache constraints permit it, and define a fail-closed allocation-failure path.
- Use `PsramBuffer::allocate_external()` for budget-critical trivial storage and `PsramObjectArray` for constructed objects. Use fallback allocation only when consuming internal RAM is an explicit design choice.
- Do not assume `static`, `new`, `std::string` or `std::vector` uses PSRAM; inspect nested ownership as well as the containing object.
- Avoid large per-request copies, repeated task create/delete cycles and hidden internal-RAM fallback. Reuse bounded scratch buffers and persistent workers where practical.
- Preserve internal memory for Wi-Fi, lwIP, TLS, DMA and low-level task stacks; do not change global malloc-placement thresholds without profile-wide evidence.
- For memory-affecting changes, measure current/minimum internal heap, largest free block, fragmentation and relevant task-stack high-watermarks on representative hardware.
- Keep Python schemas/codegen aligned with C++ headers and runtime behavior.
- Prefer target-specific config validation before any full compile.
