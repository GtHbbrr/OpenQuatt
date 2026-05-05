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


def _flash_files_from_existing_args(path, build_dir):
    if not path.exists():
        return {}
    try:
        data = json.loads(path.read_text())
    except (OSError, json.JSONDecodeError):
        return {}

    flash_files = {}
    for address, filename in data.get("flash_files", {}).items():
        flash_files[address] = str(_resolve_path(filename, build_dir))
    return flash_files


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


def _add_firmware_image(env, build_dir, flash_files):
    firmware_path = Path(env.subst("$BUILD_DIR")) / f"{env.subst('$PROGNAME')}.bin"
    firmware_path = firmware_path.resolve()
    if any(Path(path).resolve() == firmware_path for path in flash_files.values()):
        return

    flash_files[_app_partition_offset(env)] = str(firmware_path)


def normalize_factory_flasher_args(source, target, env):
    build_dir = Path(env.subst("$BUILD_DIR"))
    flasher_args_path = build_dir / "flasher_args.json"

    flash_files = _flash_files_from_extra_images(env, build_dir)
    if not flash_files:
        flash_files = _flash_files_from_existing_args(flasher_args_path, build_dir)
    if not flash_files:
        return

    _add_firmware_image(env, build_dir, flash_files)

    flasher_args_path.write_text(json.dumps({"flash_files": flash_files}, indent=2) + "\n")
    print(f"Normalized factory flasher args: {flasher_args_path}")


env.AddPreAction("$BUILD_DIR/${PROGNAME}.bin", normalize_factory_flasher_args)  # noqa: F821
