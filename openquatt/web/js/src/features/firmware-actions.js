import { hasEntity } from "../core/app-shared.js";
import { invokeActionMap } from "../core/action-router.js";
import { ENTITY_DEFS, ENTITY_REFRESH_CONCURRENCY, FIRMWARE_MODAL_KEYS, FIRMWARE_OTA_INSTALL_POLL_INTERVAL_MS, FIRMWARE_OTA_START_QUIET_MS } from "../core/config.js";
import { buildEntityPath } from "../core/domain-helpers.js";
import { setEntityBackupValue } from "../core/entity-backup.js";
import { getEntityValue } from "../core/entity-store.js";
import { isLikelyDeviceConnectionError, refreshEntities } from "../core/entity-sync.js";
import { state } from "../core/state.js";
import { getFirmwareConnectionLabel, getFirmwareTopologyLabel, getInstallationTopology } from "./device-context.js";
import { beginFirmwareOtaQuietWindow, getFirmwareBuildSwitchModel, getFirmwareConnectionSwitchModel, getFirmwareCurrentVersion, getFirmwareLatestVersion, getFirmwareTestAssetUrls, getFirmwareTestPrNumber, getFirmwareTestTargetModel, getFirmwareTopologySwitchModel, getFirmwareUpdateEntity, pollFirmwareInstallState, pollFirmwareUpdateState, primeFirmwareUpdateState, resetFirmwareInstallUiState, resetFirmwareManualUploadSelection, resetFirmwareTestSelection } from "./firmware-update.js";
import { render } from "../core/render-scheduler.js";

  export async function triggerFirmwareUpdateCheck() {
    const entity = ENTITY_DEFS.checkFirmwareUpdates;
    if (!entity) {
      return;
    }

    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateCheckBusy = true;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      await setFirmwareUpdateTarget("current build", { poll: false, force: true });
      primeFirmwareUpdateState();
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      await pollFirmwareUpdateState();
      state.controlNotice = "Firmwarecontrole bijgewerkt.";
    } catch (error) {
      state.controlError = `Firmwarecontrole mislukte. ${error.message}`;
    } finally {
      state.updateCheckBusy = false;
      render();
    }
  }

  export async function hydrateFirmwareUpdateModal() {
    try {
      await refreshEntities(FIRMWARE_MODAL_KEYS, "all", { concurrency: ENTITY_REFRESH_CONCURRENCY, forceMissing: true });
      if (state.updateModalOpen) {
        render();
      }
    } catch (_error) {
      // Keep the modal usable with known state; OTA actions still show detailed failures.
    }
  }

  export async function setFirmwareUpdateTarget(option, options = {}) {
    const entity = ENTITY_DEFS.firmwareUpdateTarget;
    if (!entity || !hasEntity("firmwareUpdateTarget")) {
      return false;
    }

    const value = String(option || "").trim();
    if (!value) {
      return false;
    }

    if (!options.force && String(getEntityValue("firmwareUpdateTarget") || "").trim() === value) {
      return true;
    }

    state.entities.firmwareUpdateTarget = {
      ...(state.entities.firmwareUpdateTarget || {}),
      state: value,
      value,
    };

    const response = await fetch(
      `${buildEntityPath(entity.domain, entity.name, "set")}?option=${encodeURIComponent(value)}`,
      { method: "POST" }
    );
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    if (options.poll !== false) {
      primeFirmwareUpdateState();
      return await pollFirmwareUpdateState({ expectedBuildLabel: options.expectedBuildLabel || "" });
    }
    return true;
  }

  export async function installFirmwareUpdate() {
    const entity = getFirmwareUpdateEntity();
    if (!entity) {
      return;
    }

    state.firmwareAdvancedOpen = false;
    state.updateManualUploadOpen = false;
    state.firmwareConnectionSwitchOpen = false;
    state.firmwareTopologySwitchOpen = false;
    state.updateTestFirmwareOpen = false;
    state.firmwareConnectionSwitchConfirmed = false;
    state.firmwareTopologySwitchConfirmed = false;
    resetFirmwareManualUploadSelection();
    resetFirmwareTestSelection();
    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallTargetVersion = getFirmwareLatestVersion(entity);
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.updateInstallMode = "normal";
    state.updateInstallTargetConnection = "";
    state.updateInstallTargetTopology = "";
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      await setFirmwareUpdateTarget("current build", { poll: false, force: true });
      state.updateInstallTargetVersion = getFirmwareLatestVersion(getFirmwareUpdateEntity() || {}) || state.updateInstallTargetVersion;
      beginFirmwareOtaQuietWindow();
      const installButtonEntity = ENTITY_DEFS.installFirmwareUpdateTarget;
      const installPath = installButtonEntity && hasEntity("installFirmwareUpdateTarget")
        ? buildEntityPath(installButtonEntity.domain, installButtonEntity.name, "press")
        : buildEntityPath("update", "Firmware Update", "install");
      const response = await fetch(installPath, {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const completed = await pollFirmwareInstallState({
        initialDelayMs: FIRMWARE_OTA_START_QUIET_MS,
        pollDelayMs: FIRMWARE_OTA_INSTALL_POLL_INTERVAL_MS,
      });
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion;
        state.controlNotice = "";
      } else {
        state.controlNotice = "OTA-update gestart. Wacht tot het device weer online is.";
      }
    } catch (error) {
      state.controlError = `OTA-update is mislukt. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  export async function installFirmwareConnectionSwitch() {
    const model = getFirmwareConnectionSwitchModel();
    const buttonEntity = ENTITY_DEFS.installFirmwareUpdateTarget;
    if (!model || !model.canSwitch || !buttonEntity) {
      return;
    }
    if (!state.firmwareConnectionSwitchConfirmed) {
      state.controlError = "Bevestig eerst de waarschuwing voor de verbindingswissel.";
      render();
      return;
    }

    state.updateManualUploadOpen = false;
    state.firmwareTopologySwitchOpen = false;
    state.firmwareTopologySwitchConfirmed = false;
    resetFirmwareManualUploadSelection();
    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallMode = "connection-switch";
    state.updateInstallTargetConnection = model.targetConnection;
    state.updateInstallTargetTopology = getInstallationTopology();
    state.updateInstallTargetVersion = getFirmwareCurrentVersion() || "";
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const targetReady = await setFirmwareUpdateTarget("alternate connection", {
        force: true,
        expectedBuildLabel: model.targetBuildLabel,
      });
      if (!targetReady) {
        throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");
      }
      state.updateInstallTargetVersion = getFirmwareLatestVersion(getFirmwareUpdateEntity() || {}) || getFirmwareCurrentVersion() || "";
      state.updateInstallPhaseHint = "starting";
      state.updateInstallProgressHint = 0;
      render();

      beginFirmwareOtaQuietWindow();
      const response = await fetch(buildEntityPath(buttonEntity.domain, buttonEntity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const completed = await pollFirmwareInstallState({
        initialDelayMs: FIRMWARE_OTA_START_QUIET_MS,
        pollDelayMs: FIRMWARE_OTA_INSTALL_POLL_INTERVAL_MS,
      });
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion || "";
        state.firmwareConnectionSwitchConfirmed = false;
        state.controlNotice = "";
      } else {
        const targetLabel = getFirmwareConnectionLabel(model.targetConnection);
        state.controlNotice = `Verbindingswissel naar ${targetLabel} is gestart. Wacht tot het device via die verbinding terugkomt.`;
      }
    } catch (error) {
      state.controlError = `Verbindingswissel is mislukt. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  export async function installFirmwareTopologySwitch() {
    const model = getFirmwareTopologySwitchModel();
    const buttonEntity = ENTITY_DEFS.installFirmwareUpdateTarget;
    if (!model || !model.canSwitch || !buttonEntity) {
      return;
    }
    if (!state.firmwareTopologySwitchConfirmed) {
      state.controlError = "Bevestig eerst de waarschuwing voor de opstellingswissel.";
      render();
      return;
    }

    state.updateManualUploadOpen = false;
    state.firmwareConnectionSwitchOpen = false;
    state.firmwareConnectionSwitchConfirmed = false;
    state.firmwareTopologySwitchOpen = false;
    state.firmwareTopologySwitchConfirmed = false;
    resetFirmwareManualUploadSelection();
    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallMode = "topology-switch";
    state.updateInstallTargetConnection = model.targetConnection;
    state.updateInstallTargetTopology = model.targetTopology;
    state.updateInstallTargetVersion = getFirmwareCurrentVersion() || "";
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const targetReady = await setFirmwareUpdateTarget("alternate topology", {
        force: true,
        expectedBuildLabel: model.targetBuildLabel,
      });
      if (!targetReady) {
        throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");
      }
      state.updateInstallTargetVersion = getFirmwareLatestVersion(getFirmwareUpdateEntity() || {}) || getFirmwareCurrentVersion() || "";
      state.updateInstallPhaseHint = "starting";
      state.updateInstallProgressHint = 0;
      render();

      beginFirmwareOtaQuietWindow();
      const response = await fetch(buildEntityPath(buttonEntity.domain, buttonEntity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const completed = await pollFirmwareInstallState({
        initialDelayMs: FIRMWARE_OTA_START_QUIET_MS,
        pollDelayMs: FIRMWARE_OTA_INSTALL_POLL_INTERVAL_MS,
      });
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion || "";
        state.firmwareTopologySwitchConfirmed = false;
        state.controlNotice = "";
      } else {
        const targetLabel = getFirmwareTopologyLabel(model.targetTopology);
        state.controlNotice = `Opstellingswissel naar ${targetLabel} is gestart. Wacht tot het device met die opstelling terugkomt.`;
      }
    } catch (error) {
      state.controlError = `Opstellingswissel is mislukt. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  async function installFirmwareCombinedSwitch(model) {
    const buttonEntity = ENTITY_DEFS.installFirmwareUpdateTarget;
    if (!model || !model.canSwitch || !buttonEntity) {
      return;
    }

    state.updateManualUploadOpen = false;
    state.firmwareConnectionSwitchOpen = false;
    state.firmwareTopologySwitchOpen = false;
    resetFirmwareManualUploadSelection();
    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallMode = "build-switch";
    state.updateInstallTargetConnection = model.targetConnection;
    state.updateInstallTargetTopology = model.targetTopology;
    state.updateInstallTargetVersion = getFirmwareCurrentVersion() || "";
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const targetReady = await setFirmwareUpdateTarget(model.targetOption, {
        force: true,
        expectedBuildLabel: model.targetBuildLabel,
      });
      if (!targetReady) {
        throw new Error("Doelmanifest is nog niet geladen. Probeer het over enkele seconden opnieuw.");
      }
      state.updateInstallTargetVersion = getFirmwareLatestVersion(getFirmwareUpdateEntity() || {}) || getFirmwareCurrentVersion() || "";
      render();

      beginFirmwareOtaQuietWindow();
      const response = await fetch(buildEntityPath(buttonEntity.domain, buttonEntity.name, "press"), { method: "POST" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const completed = await pollFirmwareInstallState({
        initialDelayMs: FIRMWARE_OTA_START_QUIET_MS,
        pollDelayMs: FIRMWARE_OTA_INSTALL_POLL_INTERVAL_MS,
      });
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion || "";
        state.controlNotice = "";
      } else {
        state.controlNotice = `Setupwissel naar ${model.targetBuildLabel} is gestart. Wacht tot het device opnieuw bereikbaar is.`;
      }
    } catch (error) {
      state.controlError = `Setupwissel is mislukt. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  export async function installQuickStartSetupSwitch() {
    const [targetTopology, targetConnection] = String(state.quickStartSetupDraft || "").split(":");
    const model = getFirmwareBuildSwitchModel(targetTopology, targetConnection);
    if (!model.available || model.targetOption === "current build") {
      state.currentStep = "generation";
      render();
      return;
    }
    if (!state.quickStartSetupConfirmed) {
      state.controlError = "Bevestig eerst dat de gekozen setup klaar is voor gebruik.";
      render();
      return;
    }
    if (!model.canSwitch) {
      state.controlError = "Deze firmware kan de gekozen setup nog niet direct installeren. Werk de firmware eerst bij.";
      render();
      return;
    }

    if (model.targetOption === "alternate connection") {
      state.firmwareConnectionSwitchConfirmed = true;
      await installFirmwareConnectionSwitch();
    } else if (model.targetOption === "alternate topology") {
      state.firmwareTopologySwitchConfirmed = true;
      await installFirmwareTopologySwitch();
    } else {
      await installFirmwareCombinedSwitch(model);
    }
  }

  export async function fetchFirmwareTestReleaseAsset(prNumber, target) {
    const urls = getFirmwareTestAssetUrls(prNumber, target);
    if (!urls) {
      throw new Error("Geen geldig PR-target gevonden.");
    }

    const response = await fetch(urls.releaseApiUrl, {
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json" },
    });
    if (response.status === 404) {
      throw new Error(`Geen testfirmware gevonden voor PR ${prNumber}. Controleer of het label de build al heeft gepubliceerd.`);
    }
    if (!response.ok) {
      throw new Error(`GitHub API gaf HTTP ${response.status}`);
    }

    const release = await response.json();
    const assets = Array.isArray(release.assets) ? release.assets : [];
    const otaAsset = assets.find((asset) => asset && asset.name === target.otaFileName);
    const md5Asset = assets.find((asset) => asset && asset.name === target.md5FileName);
    if (!otaAsset || !otaAsset.browser_download_url) {
      throw new Error(`PR ${prNumber} bevat geen OTA-build voor ${target.label}.`);
    }
    if (!md5Asset || !md5Asset.browser_download_url) {
      throw new Error(`PR ${prNumber} mist de md5-controle voor ${target.label}.`);
    }

    const releaseName = String(release.name || release.tag_name || `PR ${prNumber}`).trim();
    const updatedAt = String(otaAsset.updated_at || release.published_at || "").trim();
    return {
      otaUrl: otaAsset.browser_download_url,
      md5Url: md5Asset.browser_download_url,
      label: updatedAt ? `${releaseName} · ${updatedAt.replace("T", " ").replace("Z", " UTC")}` : releaseName,
    };
  }

  export async function setFirmwareTestTextEntity(key, value) {
    if (!hasEntity(key)) {
      throw new Error(`${ENTITY_DEFS[key]?.name || key} is niet beschikbaar op deze firmware.`);
    }
    const applied = await setEntityBackupValue(key, value);
    state.entities[key] = {
      ...(state.entities[key] || {}),
      state: applied,
      value: applied,
    };
  }

  export async function installFirmwareTestUpdate() {
    const prNumber = getFirmwareTestPrNumber();
    const target = getFirmwareTestTargetModel();
    const buttonEntity = ENTITY_DEFS.installFirmwareTestOta;
    if (!prNumber) {
      state.updateTestFirmwareError = "Vul een geldig PR-nummer in.";
      render();
      return;
    }
    if (!target.available) {
      state.updateTestFirmwareError = target.error || "Dit firmwaretarget wordt niet herkend.";
      render();
      return;
    }
    if (!state.updateTestFirmwareConfirmed) {
      state.updateTestFirmwareError = "Bevestig eerst dat je testfirmware wilt installeren.";
      render();
      return;
    }
    if (!buttonEntity || !hasEntity("installFirmwareTestOta")) {
      state.updateTestFirmwareError = "Deze firmware bevat de testfirmware-installatieknop nog niet.";
      render();
      return;
    }

    state.updateManualUploadOpen = false;
    state.firmwareConnectionSwitchOpen = false;
    state.firmwareConnectionSwitchConfirmed = false;
    state.firmwareTopologySwitchOpen = false;
    state.firmwareTopologySwitchConfirmed = false;
    resetFirmwareManualUploadSelection();
    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallTargetVersion = "";
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.updateInstallMode = "test-firmware";
    state.updateInstallTargetConnection = "";
    state.updateInstallTargetTopology = "";
    state.controlError = "";
    state.controlNotice = "";
    state.updateTestFirmwareError = "";
    state.updateTestFirmwareBuild = null;
    render();

    let flashRequested = false;
    try {
      const releaseAsset = await fetchFirmwareTestReleaseAsset(prNumber, target);
      state.updateTestFirmwareBuild = releaseAsset.label;
      render();

      await setFirmwareTestTextEntity("firmwareTestOtaUrl", releaseAsset.otaUrl);
      await setFirmwareTestTextEntity("firmwareTestOtaMd5Url", releaseAsset.md5Url);

      flashRequested = true;
      beginFirmwareOtaQuietWindow();
      const response = await fetch(buildEntityPath(buttonEntity.domain, buttonEntity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const completed = await pollFirmwareInstallState({
        initialDelayMs: FIRMWARE_OTA_START_QUIET_MS,
        pollDelayMs: FIRMWARE_OTA_INSTALL_POLL_INTERVAL_MS,
      });
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || `PR ${prNumber}`;
        state.updateTestFirmwareOpen = false;
        resetFirmwareTestSelection();
        state.controlNotice = "";
      } else {
        state.controlNotice = `Testfirmware uit PR ${prNumber} is gestart. Wacht tot het device weer online is.`;
      }
    } catch (error) {
      if (flashRequested && isLikelyDeviceConnectionError(error.message)) {
        state.controlNotice = `Testfirmware uit PR ${prNumber} is gestart. Wacht tot het device weer online is.`;
      } else {
        state.updateTestFirmwareError = `Testfirmware installeren mislukte. ${error.message}`;
      }
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  export async function uploadFirmwareUpdate() {
    const file = state.updateManualUploadFile;
    if (!file) {
      state.updateManualUploadError = "Kies eerst een firmwarebestand.";
      render();
      return;
    }

    state.updateInstallCompleted = false;
    state.updateInstallCompletedVersion = "";
    state.updateInstallBusy = true;
    state.updateInstallTargetVersion = getFirmwareCurrentVersion() || "";
    state.updateInstallPhaseHint = "starting";
    state.updateInstallProgressHint = 0;
    state.updateInstallMode = "";
    state.updateInstallTargetConnection = "";
    state.updateInstallTargetTopology = "";
    state.controlError = "";
    state.controlNotice = "";
    state.updateManualUploadError = "";
    render();

    try {
      const formData = new FormData();
      formData.append("update", file, file.name || "firmware.bin");
      const response = await fetch("/update", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      state.updateManualUploadOpen = false;
      resetFirmwareManualUploadSelection();
      const completed = await pollFirmwareInstallState();
      if (completed) {
        state.updateInstallCompleted = true;
        state.updateInstallCompletedVersion = getFirmwareCurrentVersion() || state.updateInstallTargetVersion || "";
        state.controlNotice = "";
      } else {
        state.controlNotice = "Handmatige OTA-upload gestart. Wacht tot het device weer online is.";
      }
    } catch (error) {
      state.updateManualUploadError = `Handmatige upload mislukte. ${error.message}`;
    } finally {
      resetFirmwareInstallUiState();
      render();
    }
  }

  const firmwareActionHandlers = {
    "open-update-modal": () => {
      state.updateModalOpen = true;
      render();
      return hydrateFirmwareUpdateModal();
    },
    "close-update-modal": () => {
      state.updateModalOpen = false;
      state.updateInstallCompleted = false;
      state.updateInstallCompletedVersion = "";
      state.firmwareAdvancedOpen = false;
      state.firmwareConnectionSwitchOpen = false;
      state.firmwareTopologySwitchOpen = false;
      state.updateManualUploadOpen = false;
      state.updateTestFirmwareOpen = false;
      state.firmwareConnectionSwitchConfirmed = false;
      state.firmwareTopologySwitchConfirmed = false;
      resetFirmwareManualUploadSelection();
      resetFirmwareTestSelection();
      render();
    },
    "run-firmware-check": () => triggerFirmwareUpdateCheck(),
    "install-firmware-update": () => installFirmwareUpdate(),
    "install-firmware-connection-switch": () => installFirmwareConnectionSwitch(),
    "install-firmware-topology-switch": () => installFirmwareTopologySwitch(),
    "toggle-firmware-advanced": () => {
      if (state.firmwareAdvancedOpen || state.firmwareConnectionSwitchOpen || state.firmwareTopologySwitchOpen || state.updateManualUploadOpen || state.updateTestFirmwareOpen) {
        state.firmwareAdvancedOpen = false;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        state.updateManualUploadOpen = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareManualUploadSelection();
        resetFirmwareTestSelection();
      } else {
        state.firmwareAdvancedOpen = true;
      }
      render();
    },
    "toggle-firmware-connection-switch": () => {
      state.firmwareConnectionSwitchOpen = !state.firmwareConnectionSwitchOpen;
      state.firmwareConnectionSwitchConfirmed = false;
      if (state.firmwareConnectionSwitchOpen) {
        state.firmwareAdvancedOpen = true;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        state.updateManualUploadOpen = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareManualUploadSelection();
        resetFirmwareTestSelection();
      }
      render();
    },
    "toggle-firmware-topology-switch": () => {
      state.firmwareTopologySwitchOpen = !state.firmwareTopologySwitchOpen;
      state.firmwareTopologySwitchConfirmed = false;
      if (state.firmwareTopologySwitchOpen) {
        state.firmwareAdvancedOpen = true;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.updateManualUploadOpen = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareManualUploadSelection();
        resetFirmwareTestSelection();
      }
      render();
    },
    "toggle-firmware-upload": () => {
      if (state.updateManualUploadOpen) {
        state.updateManualUploadOpen = false;
        resetFirmwareManualUploadSelection();
      } else {
        state.firmwareAdvancedOpen = true;
        state.updateManualUploadOpen = true;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        state.updateTestFirmwareOpen = false;
        resetFirmwareTestSelection();
        state.updateManualUploadError = "";
      }
      render();
    },
    "upload-firmware-file": () => uploadFirmwareUpdate(),
    "toggle-firmware-test": () => {
      if (state.updateTestFirmwareOpen) {
        state.updateTestFirmwareOpen = false;
        resetFirmwareTestSelection();
      } else {
        state.firmwareAdvancedOpen = true;
        state.updateTestFirmwareOpen = true;
        state.updateManualUploadOpen = false;
        state.firmwareConnectionSwitchOpen = false;
        state.firmwareConnectionSwitchConfirmed = false;
        state.firmwareTopologySwitchOpen = false;
        state.firmwareTopologySwitchConfirmed = false;
        resetFirmwareManualUploadSelection();
        state.updateTestFirmwareError = "";
      }
      render();
    },
    "install-firmware-test": () => installFirmwareTestUpdate(),
  };

  export function handleFirmwareAction(action) {
    return invokeActionMap(firmwareActionHandlers, action);
  }
