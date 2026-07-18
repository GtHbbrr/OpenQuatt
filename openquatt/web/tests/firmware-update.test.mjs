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
  primeFirmwareInstallProgressHints,
} = await import("../js/src/features/firmware-update.js");

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
