import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.window = {
  clearTimeout,
  localStorage: { getItem: () => null },
  matchMedia: () => ({ matches: false }),
  setTimeout,
};

const { state } = await import("../js/src/core/state.js");
const {
  getFirmwareProgressModel,
  getFirmwareTestAssetUrls,
  isFirmwareInstallCompletionConfirmed,
  primeFirmwareInstallProgressHints,
} = await import("../js/src/features/firmware-update.js");

test("PR firmware uses deterministic release URLs without the GitHub REST API", () => {
  const target = {
    available: true,
    label: "Heatpump Controller Q Duo Wi-Fi",
    otaFileName: "openquatt-heatpump-controller-q-duo-wifi.firmware.ota.bin",
  };

  assert.deepEqual(getFirmwareTestAssetUrls(395, target), {
    otaUrl: "https://github.com/OpenQuatt/OpenQuatt/releases/download/pr-395/openquatt-heatpump-controller-q-duo-wifi.firmware.ota.bin",
    md5Url: "https://github.com/OpenQuatt/OpenQuatt/releases/download/pr-395/openquatt-heatpump-controller-q-duo-wifi.firmware.ota.bin.md5",
    label: "PR 395 · Heatpump Controller Q Duo Wi-Fi",
  });
  assert.equal(getFirmwareTestAssetUrls("395/../../dev-latest", target), null);
});

test("a new OTA attempt ignores cached reboot progress until a post-start poll", () => {
  state.entities = {
    firmwareUpdate: {
      current_version: "v0.41.0",
      latest_version: "v0.42.0",
    },
    firmwareUpdateProgress: { state: 100, value: 100 },
    firmwareUpdateStatus: { state: "Rebooting", value: "Rebooting" },
    projectVersionText: { state: "v0.41.0", value: "v0.41.0" },
  };
  state.updateInstallBusy = true;
  state.updateInstallMode = "normal";
  state.updateInstallTargetVersion = "v0.42.0";

  primeFirmwareInstallProgressHints();

  assert.deepEqual(getFirmwareProgressModel(), {
    phaseLabel: "Installeren",
    percent: 0,
    copy: "OTA-update is gestart voor OpenQuatt.",
  });
  assert.equal(state.entities.firmwareUpdateStatus.state, "Rebooting");
  assert.equal(state.entities.firmwareUpdateProgress.state, 100);

  state.entities.firmwareUpdateStatus = { state: "Rebooting", value: "Rebooting" };
  state.entities.firmwareUpdateProgress = { state: 100, value: 100 };

  assert.equal(getFirmwareProgressModel().phaseLabel, "Installeren");
  assert.equal(getFirmwareProgressModel().percent, 0);

  state.entities.firmwareUpdateStatus = { state: "Rebooting", value: "Rebooting" };
  state.entities.firmwareUpdateProgress = { state: 100, value: 100 };
  state.updateInstallStatusPollObserved = true;

  assert.equal(getFirmwareProgressModel().phaseLabel, "Herstarten");
  assert.equal(getFirmwareProgressModel().percent, 100);

  primeFirmwareInstallProgressHints();

  state.entities.firmwareUpdateStatus = { state: "Uploading", value: "Uploading" };
  state.entities.firmwareUpdateProgress = { state: 23, value: 23 };
  state.updateInstallStatusPollObserved = true;

  assert.deepEqual(getFirmwareProgressModel(), {
    phaseLabel: "Uploaden",
    percent: 23,
    copy: "Firmware wordt nu naar OpenQuatt verzonden.",
  });

  state.entities.firmwareUpdateStatus = { state: "Rebooting", value: "Rebooting" };
  state.entities.firmwareUpdateProgress = { state: 100, value: 100 };

  assert.equal(getFirmwareProgressModel().phaseLabel, "Herstarten");
  assert.equal(getFirmwareProgressModel().percent, 100);
});

test("local OTA hints do not create optional progress entities", () => {
  state.entities = {
    firmwareUpdate: {
      current_version: "v0.41.0",
      latest_version: "v0.42.0",
    },
    projectVersionText: { state: "v0.41.0", value: "v0.41.0" },
  };
  state.updateInstallBusy = true;
  state.updateInstallMode = "normal";
  state.updateInstallTargetVersion = "v0.42.0";

  primeFirmwareInstallProgressHints();

  assert.equal(state.entities.firmwareUpdateStatus, undefined);
  assert.equal(state.entities.firmwareUpdateProgress, undefined);
  assert.equal(getFirmwareProgressModel().phaseLabel, "Installeren");
  assert.equal(getFirmwareProgressModel().percent, 0);
});

test("manual OTA does not complete while live progress remains active", () => {
  state.entities = {
    firmwareUpdate: {
      current_version: "v0.42.0",
      latest_version: "v0.42.0",
    },
    firmwareUpdateProgress: { state: 100, value: 100 },
    firmwareUpdateStatus: { state: "Rebooting", value: "Rebooting" },
    projectVersionText: { state: "v0.42.0", value: "v0.42.0" },
  };
  state.updateInstallBusy = true;
  state.updateInstallMode = "";
  state.updateInstallTargetVersion = "v0.42.0";
  state.updateInstallStatusPollObserved = true;

  assert.equal(isFirmwareInstallCompletionConfirmed(), false);
});

test("manual OTA does not complete from an unchanged version without progress evidence", () => {
  state.entities = {
    firmwareUpdate: {
      current_version: "v0.42.0",
      latest_version: "v0.42.0",
    },
    projectVersionText: { state: "v0.42.0", value: "v0.42.0" },
  };
  state.updateInstallBusy = true;
  state.updateInstallMode = "";
  state.updateInstallTargetVersion = "v0.42.0";
  state.ota.on = true;
  state.ota.id = {};
  state.ota.wait = true;

  assert.equal(isFirmwareInstallCompletionConfirmed(), false);
});

test("normal OTA completes after its target version is inactive and installed", () => {
  state.entities = {
    firmwareUpdate: {
      current_version: "v0.43.0",
      latest_version: "v0.43.0",
      state: "up_to_date",
    },
    firmwareUpdateStatus: { state: "Idle", value: "Idle" },
    projectVersionText: { state: "v0.43.0", value: "v0.43.0" },
  };
  state.updateInstallBusy = true;
  state.updateInstallMode = "normal";
  state.updateInstallTargetVersion = "v0.43.0";

  assert.equal(isFirmwareInstallCompletionConfirmed(), true);
});
