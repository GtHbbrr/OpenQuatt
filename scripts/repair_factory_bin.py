#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path
import shutil
import struct
from typing import Iterable

ESP_IMAGE_MAGIC = 0xE9
PARTITION_TABLE_MAGIC = b"\xaa\x50"

ROLE_KEYS = (
    ("bootloader", ("bootloader",)),
    ("partition-table", ("partition-table", "partition_table")),
    ("otadata", ("otadata",)),
    ("app", ("app",)),
)


class FactoryBinError(RuntimeError):
    pass


def parse_offset(value: str) -> int:
    try:
        return int(str(value).strip(), 0)
    except ValueError as exc:
        raise FactoryBinError(f"Invalid flash offset: {value!r}") from exc


def load_flasher_args(build_dir: Path) -> dict:
    path = build_dir / "flasher_args.json"
    if not path.is_file():
        raise FactoryBinError(f"flasher_args.json not found: {path}")
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        raise FactoryBinError(f"Invalid flasher_args.json: {path}") from exc


def first_existing(candidates: Iterable[Path]) -> Path | None:
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    return None


def fallback_candidates(raw_path: str, build_dir: Path, role: str, offset: int) -> list[Path]:
    raw_name = Path(str(raw_path)).name
    candidates = [
        build_dir / raw_name,
        build_dir / str(raw_path),
    ]

    if role == "bootloader" or offset in (0x0, 0x1000, 0x2000):
        candidates.extend(
            (
                build_dir / "bootloader.bin",
                build_dir / "bootloader" / "bootloader.bin",
            )
        )
    if role == "partition-table" or offset == 0x8000:
        candidates.extend(
            (
                build_dir / "partitions.bin",
                build_dir / "partition_table" / "partition-table.bin",
            )
        )
    if role == "otadata":
        candidates.append(build_dir / "ota_data_initial.bin")
    if role == "app" or (not role and is_app_image_name(raw_name)):
        candidates.extend(
            (
                build_dir / "openquatt.bin",
                build_dir / "firmware.bin",
                build_dir / "firmware.ota.bin",
            )
        )

    return candidates


def infer_role(offset: int, path: Path) -> str:
    name = path.name.lower()
    if offset in (0x0, 0x1000, 0x2000) or "bootloader" in name:
        return "bootloader"
    if offset == 0x8000 or "partition" in name or name == "partitions.bin":
        return "partition-table"
    if offset in (0xE000, 0xF000) or "ota_data" in name:
        return "otadata"
    if offset >= 0x10000 and has_esp_image_magic(path):
        return "app"
    return ""


def has_esp_image_magic(path: Path) -> bool:
    try:
        with path.open("rb") as handle:
            return handle.read(1) == bytes([ESP_IMAGE_MAGIC])
    except OSError:
        return False


def is_app_image_name(name: str) -> bool:
    normalized = name.lower()
    return normalized in {"openquatt.bin", "firmware.bin", "firmware.ota.bin"} or normalized.startswith(
        "openquatt_"
    )


def resolve_flash_file(raw_path: str, build_dir: Path, role: str, offset: int) -> Path:
    path = Path(str(raw_path))
    candidates = [path] if path.is_absolute() else [build_dir / path]
    candidates.extend(fallback_candidates(str(raw_path), build_dir, role, offset))

    resolved = first_existing(candidates)
    if resolved is None:
        tried = ", ".join(str(candidate) for candidate in candidates)
        raise FactoryBinError(f"Flash file for {role or hex(offset)} not found. Tried: {tried}")
    return resolved.resolve()


def collect_sections(build_dir: Path, flasher_args: dict) -> tuple[list[tuple[int, Path]], dict[str, int]]:
    sections: dict[int, Path] = {}
    role_offsets: dict[str, int] = {}

    for role, metadata_keys in ROLE_KEYS:
        entry = next(
            (flasher_args[key] for key in metadata_keys if isinstance(flasher_args.get(key), dict)),
            None,
        )
        if entry is None:
            continue
        offset = parse_offset(entry.get("offset", ""))
        raw_file = str(entry.get("file", "")).strip()
        if not raw_file:
            continue
        sections[offset] = resolve_flash_file(raw_file, build_dir, role, offset)
        role_offsets[role] = offset

    for raw_offset, raw_file in flasher_args.get("flash_files", {}).items():
        offset = parse_offset(raw_offset)
        if offset in sections:
            role = infer_role(offset, sections[offset])
            if role and role not in role_offsets:
                role_offsets[role] = offset
            continue
        path = resolve_flash_file(str(raw_file), build_dir, "", offset)
        sections[offset] = path
        role = infer_role(offset, path)
        if role and role not in role_offsets:
            role_offsets[role] = offset

    if not sections:
        raise FactoryBinError(f"No flash sections found in {build_dir / 'flasher_args.json'}")
    for required_role in ("bootloader", "partition-table", "app"):
        if required_role not in role_offsets:
            raise FactoryBinError(f"flasher_args.json does not describe a {required_role} section")

    return sorted(sections.items()), role_offsets


def merge_sections(sections: list[tuple[int, Path]], output_path: Path) -> None:
    image_size = max(offset + path.stat().st_size for offset, path in sections)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with output_path.open("wb") as output:
        output.truncate(image_size)
        output.seek(0)
        output.write(b"\xff" * image_size)
        for offset, path in sections:
            output.seek(offset)
            output.write(path.read_bytes())


def read_bytes(path: Path, offset: int, size: int) -> bytes:
    with path.open("rb") as handle:
        handle.seek(offset)
        data = handle.read(size)
    if len(data) != size:
        raise FactoryBinError(f"{path} is too short to read {size} byte(s) at {hex(offset)}")
    return data


def parse_partition_table(path: Path) -> list[dict[str, int | str]]:
    entries: list[dict[str, int | str]] = []
    data = path.read_bytes()
    entry_size = 32
    for position in range(0, len(data), entry_size):
        raw = data[position : position + entry_size]
        if len(raw) < entry_size or raw[:2] in (b"\xff\xff", b"\xeb\xeb"):
            break
        magic, partition_type, subtype, offset, size, raw_label, flags = struct.unpack("<HBBII16sI", raw)
        if magic != 0x50AA:
            raise FactoryBinError(f"Invalid partition entry magic at {hex(position)} in {path}")
        entries.append(
            {
                "type": partition_type,
                "subtype": subtype,
                "offset": offset,
                "size": size,
                "label": raw_label.split(b"\0", 1)[0].decode("utf-8", errors="replace"),
                "flags": flags,
            }
        )
    if not entries:
        raise FactoryBinError(f"Partition table contains no entries: {path}")
    return entries


def validate_factory_bin(
    output_path: Path,
    role_offsets: dict[str, int],
    sections: list[tuple[int, Path]],
) -> tuple[str, int]:
    bootloader_offset = role_offsets["bootloader"]
    app_offset = role_offsets["app"]

    bootloader_magic = read_bytes(output_path, bootloader_offset, 1)[0]
    if bootloader_magic != ESP_IMAGE_MAGIC:
        raise FactoryBinError(
            f"{output_path.name} has no ESP bootloader magic at {hex(bootloader_offset)} "
            f"(got 0x{bootloader_magic:02x})"
        )

    app_magic = read_bytes(output_path, app_offset, 1)[0]
    if app_magic != ESP_IMAGE_MAGIC:
        raise FactoryBinError(
            f"{output_path.name} has no ESP app magic at {hex(app_offset)} "
            f"(got 0x{app_magic:02x})"
        )

    partition_offset = role_offsets["partition-table"]
    partition_magic = read_bytes(output_path, partition_offset, 2)
    if partition_magic != PARTITION_TABLE_MAGIC:
        raise FactoryBinError(
            f"{output_path.name} has no partition table magic at {hex(partition_offset)} "
            f"(got {partition_magic.hex()})"
        )

    section_by_offset = dict(sections)
    for offset, source_path in sections:
        expected = source_path.read_bytes()
        actual = read_bytes(output_path, offset, len(expected))
        if actual != expected:
            raise FactoryBinError(
                f"{output_path.name} does not contain {source_path.name} unchanged at {hex(offset)}"
            )

    partition_path = section_by_offset[partition_offset]
    app_path = section_by_offset[app_offset]
    partition_entries = parse_partition_table(partition_path)
    app_partition = next(
        (
            entry
            for entry in partition_entries
            if entry["type"] == 0x00 and entry["offset"] == app_offset
        ),
        None,
    )
    if app_partition is None:
        raise FactoryBinError(
            f"Partition table has no app partition at the flasher app offset {hex(app_offset)}"
        )
    app_partition_size = int(app_partition["size"])
    if app_path.stat().st_size > app_partition_size:
        raise FactoryBinError(
            f"{app_path.name} ({app_path.stat().st_size} bytes) exceeds partition "
            f"{app_partition['label']} ({app_partition_size} bytes)"
        )
    return str(app_partition["label"]), app_partition_size


def normalize_app_artifact(
    build_dir: Path,
    sections: list[tuple[int, Path]],
    role_offsets: dict[str, int],
) -> Path:
    app_path = dict(sections)[role_offsets["app"]]
    ota_path = build_dir / "firmware.ota.bin"
    factory_path = build_dir / "firmware.factory.bin"
    elf_path = build_dir / "firmware.elf"
    for required_path in (app_path, ota_path, factory_path, elf_path):
        if not required_path.is_file():
            raise FactoryBinError(f"Required native ESP-IDF artifact not found: {required_path}")
    if app_path.read_bytes() != ota_path.read_bytes():
        raise FactoryBinError(f"{ota_path.name} differs from native app image {app_path.name}")

    normalized_path = build_dir / "firmware.bin"
    if app_path.resolve() != normalized_path.resolve():
        shutil.copy2(app_path, normalized_path)
    return normalized_path


def repair_factory_bin(build_dir: Path, output_name: str = "firmware.factory.bin") -> Path:
    build_dir = build_dir.resolve()
    flasher_args = load_flasher_args(build_dir)
    sections, role_offsets = collect_sections(build_dir, flasher_args)
    output_path = build_dir / output_name
    merge_sections(sections, output_path)
    validate_factory_bin(output_path, role_offsets, sections)
    return output_path


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Validate native ESPHome ESP-IDF artifacts and optionally repair a legacy factory image."
    )
    parser.add_argument("build_dir", help="Path to the native <build_path>/build artifact directory.")
    parser.add_argument("--output-name", default="firmware.factory.bin", help="Factory binary filename to write.")
    parser.add_argument(
        "--repair-legacy",
        action="store_true",
        help="Rebuild the factory image from flasher_args.json before validating it.",
    )
    parser.add_argument(
        "--normalize-app",
        action="store_true",
        help="Copy the native app image to firmware.bin after validating the artifact set.",
    )
    args = parser.parse_args()

    try:
        build_dir = Path(args.build_dir).resolve()
        flasher_args = load_flasher_args(build_dir)
        sections, role_offsets = collect_sections(build_dir, flasher_args)
        output_path = build_dir / args.output_name
        if args.repair_legacy:
            merge_sections(sections, output_path)
        if not output_path.is_file():
            raise FactoryBinError(f"Factory binary not found: {output_path}")
        app_partition, app_partition_size = validate_factory_bin(output_path, role_offsets, sections)
        normalized_path = normalize_app_artifact(build_dir, sections, role_offsets) if args.normalize_app else None
    except FactoryBinError as exc:
        raise SystemExit(str(exc)) from exc

    action = "repaired and validated" if args.repair_legacy else "validated"
    offsets = ", ".join(
        f"{role}={hex(role_offsets[role])}" for role in ("bootloader", "partition-table", "app")
    )
    print(
        f"[ok] {action} factory binary: {output_path} "
        f"({offsets}, partition={app_partition}, size={app_partition_size})"
    )
    if normalized_path is not None:
        print(f"[ok] normalized native app artifact: {normalized_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
