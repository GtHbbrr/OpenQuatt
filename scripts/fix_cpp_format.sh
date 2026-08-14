#!/usr/bin/env bash
set -euo pipefail

if ! command -v clang-format >/dev/null 2>&1; then
  echo "clang-format was not found in PATH." >&2
  echo "Install clang-format and run this command again." >&2
  exit 2
fi

mapfile -d '' files < <(git ls-files -z -- '*.c' '*.cc' '*.cpp' '*.cxx' '*.h' '*.hh' '*.hpp' '*.hxx')

if (( ${#files[@]} == 0 )); then
  echo "No C/C++ source files found to format."
  exit 0
fi

echo "Formatting ${#files[@]} C/C++ files with clang-format..."
printf '%s\0' "${files[@]}" | xargs -0 -r clang-format --style=file -i
echo "C/C++ formatting updated."