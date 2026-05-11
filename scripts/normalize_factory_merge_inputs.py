Import("env")  # noqa: F821

import itertools
import json
from pathlib import Path


def _flatten_flash_images(flash_images):
    return list(
        itertools.chain.from_iterable(
            item if isinstance(item, (list, tuple)) else [item]
            for item in (flash_images or [])
        )
    )


def _resolve_path(raw_path, build_dir):
    path = Path(str(raw_path))
    if path.is_absolute():
        return path
    return build_dir / path


def _flash_files_from_extra_images(env, build_dir):
    flash_images = env.get("FLASH_EXTRA_IMAGES")
    entries = [env.subst(str(item)) for item in _flatten_flash_images(flash_images)]
    flash_files = {}
    for index in range(0, len(entries) - 1, 2):
        address = entries[index]
        filename = entries[index + 1]
        flash_files[address] = str(_resolve_path(filename, build_dir))
    return flash_files


def _load_flasher_args(path):
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text())
    except (OSError, json.JSONDecodeError):
        return None


def _normalize_flash_files(flash_files, build_dir):
    normalized = {}
    for address, filename in flash_files.items():
        resolved = _resolve_path(filename, build_dir)
        if not resolved.exists():
            for candidate in _fallback_candidates(address, build_dir):
                if candidate.exists():
                    resolved = candidate
                    break
        normalized[address] = str(resolved)
    return normalized


def _fallback_candidates(address, build_dir):
    by_address = {
        "0x0": [build_dir / "bootloader.bin"],
        "0x8000": [build_dir / "partitions.bin"],
        "0xf000": [build_dir / "ota_data_initial.bin"],
    }
    return by_address.get(str(address).lower(), [])


def _first_app_partition_offset(path):
    try:
        lines = path.read_text().splitlines()
    except OSError:
        return ""

    for line in lines:
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        columns = [column.strip() for column in stripped.split(",")]
        if len(columns) >= 4 and columns[1] == "app":
            return columns[3]
    return ""


def _app_partition_offset(env):
    partition_file = env.GetProjectOption("board_build.partitions", "")
    if partition_file:
        project_dir = Path(env.subst("$PROJECT_DIR"))
        offset = _first_app_partition_offset(_resolve_path(partition_file, project_dir))
        if offset:
            return offset
    return "0x10000"


def _app_offset(data, env):
    offset = str(data.get("app", {}).get("offset", "")).strip()
    if offset:
        return offset
    return _app_partition_offset(env)


def _set_firmware_image(data, env, flash_files):
    firmware_path = Path(env.subst("$BUILD_DIR")) / f"{env.subst('$PROGNAME')}.bin"
    firmware_path = firmware_path.resolve()
    offset = _app_offset(data, env)
    flash_files[offset] = str(firmware_path)

    app = dict(data.get("app", {}))
    app["offset"] = offset
    app["file"] = str(firmware_path)
    data["app"] = app


def normalize_factory_merge_inputs(source, target, env):
    build_dir = Path(env.subst("$BUILD_DIR"))
    flasher_args_path = build_dir / "flasher_args.json"
    data = _load_flasher_args(flasher_args_path) or {}

    flash_files = _normalize_flash_files(data.get("flash_files", {}), build_dir)
    if not flash_files:
        flash_files = _flash_files_from_extra_images(env, build_dir)
    if not flash_files:
        return

    _set_firmware_image(data, env, flash_files)

    data["flash_files"] = flash_files
    flasher_args_path.write_text(json.dumps(data, indent=2) + "\n")
    print(f"Normalized factory merge inputs: {flasher_args_path}")


env.AddPreAction("$BUILD_DIR/${PROGNAME}.bin", normalize_factory_merge_inputs)  # noqa: F821
