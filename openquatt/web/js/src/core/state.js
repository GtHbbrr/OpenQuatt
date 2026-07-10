import { SETTINGS_GROUP_IDS, SETTINGS_GROUPS } from "./config.js";

function getStoredDebugRecordingAcknowledgedId() {
  try {
    return String(window.localStorage.getItem("oq-debug-recording-acknowledged-id") || "");
  } catch (_error) {
    return "";
  }
}

export const DEFAULT_TREND_WINDOW_HOURS = 24;
export const TREND_WINDOW_HOURS_OPTIONS = [3, 12, 24, 72, 168, 336, 720];

export const state = {
  mounted: false,
  root: null,
  nativeApp: null,
  nativeFrontendLoaded: false,
  nativeFrontendLoading: false,
  pollTimer: null,
  supplementaryPrimeTimer: null,
  entitySyncInFlight: false,
  pendingEntitySyncOptions: null,
  lastEntitySyncAttemptAt: 0,
  lastFastEntitySyncAt: 0,
  lastBulkEntitySyncAt: 0,
  lastStaticEntitySyncAt: 0,
  lastAuthStatusRefreshAt: 0,
  loginAuthStatusPollTimer: null,
  lastApiSecurityStatusRefreshAt: 0,
  lastMqttStatusRefreshAt: 0,
  summary: "",
  stage: "Laden...",
  interfacePanelOpen: getStoredInterfacePanelOpen(),
  devPanelOpen: getStoredDevPanelOpen(),
  nativeOpen: getStoredSurface() === "native",
  currentStep: "generation",
  quickStartModalMode: "wizard",
  settingsGroup: getStoredSettingsGroup(),
  appView: "",
  overviewTheme: getStoredOverviewTheme(),
  hpVisualMode: getStoredHpVisualMode(),
  hpLayoutMode: getStoredHpLayoutMode(),
  controlReplayTab: "status",
  controlReplayWindow: "last24",
  controlReplayPeriodMenuOpen: false,
  controlReplayCustomPeriodOpen: false,
  controlReplayCustomStart: "",
  controlReplayCustomEnd: "",
  controlReplayCustomPeriodError: "",
  controlReplayFocusFilter: "all",
  controlReplaySelectedEpisode: "",
  controlReplaySupportDetailsItemId: "",
  controlReplayGraphMinute: 1000,
  controlReplayScrubbing: false,
  decisionLog: null,
  decisionLogError: "",
  decisionLogSignature: "",
  decisionLogLastFetchAt: 0,
  decisionLogFetchPromise: null,
  trendWindowHours: getStoredTrendWindowHours(),
  trendHistoryRaw: "",
  trendHistoryError: "",
  trendHistorySignature: "",
  trendHistoryNowMs: Number.NaN,
  trendHistoryLastFetchAt: 0,
  trendHistoryFetchPromise: null,
  trendHistoryMetadata: {},
  trendHistoryMetadataError: "",
  trendHistoryMetadataSignature: "",
  trendHistoryMetadataLastFetchAt: 0,
  trendHistoryMetadataFetchPromise: null,
  energyHistoryRaw: "",
  energyHistoryError: "",
  energyHistorySignature: "",
  energyHistoryNowMs: Number.NaN,
  energyHistoryLastFetchAt: 0,
  energyHistoryRequestQuery: "",
  energyHistoryFetchQuery: "",
  energyHistoryFetchPromise: null,
  energyHistoryCsrfToken: "",
  energyHistoryView: "day",
  energyHistoryImportFileName: "",
  energyHistoryImportSource: "",
  energyHistoryImportRange: "",
  energyHistoryImportRecords: [],
  energyHistoryImportHourRecords: [],
  energyHistoryImportDuplicateCount: 0,
  energyHistoryImportSkippedCount: 0,
  energyHistoryImportInvalidCount: 0,
  energyHistoryImportUnsupportedCount: 0,
  energyHistoryImportBusy: false,
  energyHistoryImportProgressPercent: 0,
  energyHistoryImportError: "",
  energyHistoryImportNotice: "",
  energyHistoryExportMode: "days_and_hours",
  energyHistoryExportBusy: false,
  energyHistoryExportError: "",
  energyHistoryExportNotice: "",
  settingsStorageDetailsOpen: false,
  energyHistoryPeriodSelection: {
    day: "",
    week: "",
    month: "",
    year: "",
  },
  deviceReconnectMode: "",
  deviceReconnectStartedAt: 0,
  deviceReconnectRecoveryStartedAt: 0,
  deviceReconnectRecoveryTimer: null,
  deviceReconnectLastError: "",
  firmwareOtaQuietUntil: 0,
  firmwareOtaQuietTimer: null,
  entitySyncFailureCount: 0,
  lastEntitySyncAt: 0,
  lastEntitySyncSuccessAt: 0,
  lastEntityResponseAt: 0,
  overviewMetadataHydrated: false,
  overviewMetadataHydrating: false,
  busyAction: "",
  controlError: "",
  controlNotice: "",
  webServerLogSource: null,
  webServerLogConnected: false,
  webServerLogEnabled: null,
  webServerLogError: "",
  webServerLogHistoryLoading: false,
  webServerLogHistoryError: "",
  webServerLogHistoryRequestToken: 0,
  webServerLogHistoryLoaded: false,
  webServerLogScrollRestoreToken: 0,
  cm100CommissioningScrollRestoreToken: 0,
  serviceTaskModalScrollRestoreToken: 0,
  quickStartScrollRestoreToken: 0,
  quickStartCicFeedUrlDraft: null,
  quickStartThermostatSourceDraft: null,
  webServerLogCopyMessage: "",
  webServerLogCopyError: "",
  webServerLogRecentTail: [],
  webServerLogRecentAnchorAt: 0,
  webServerLogEntries: [],
  debugRecordingActive: false,
  debugRecordingStartedAt: 0,
  debugRecordingEndsAt: 0,
  debugRecordingTimer: null,
  debugRecordingSamples: [],
  debugRecordingError: "",
  debugRecordingNotice: "",
  debugRecordingBusy: false,
  debugRecordingLastSampleAt: 0,
  debugRecordingSequence: 0,
  debugRecordingInitialValues: null,
  debugRecordingLastValues: null,
  debugRecordingEvents: [],
  debugRecordingSelectedMinutes: 15,
  debugRecordingDeviceStatus: null,
  debugRecordingAcknowledgedId: getStoredDebugRecordingAcknowledgedId(),
  debugRecordingDeviceBundle: null,
  debugRecordingDevicePollTimer: null,
  complete: false,
  lastKnownInstallationTopology: "",
  quickStartModalOpen: true,
  loadingEntities: true,
  entities: {},
  optionalMissingEntities: {},
  renderedAppView: "",
  renderedSettingsGroup: "",
  settingsPageScrollRestoreToken: 0,
  settingsInfoOpen: "",
  installationMonitoringDetailsOpen: false,
  integrationDiagnosticsOpen: false,
  oduRuntimeFrequencyDetailsOpen: false,
  installationMonitoringProblemSignature: "",
  settingsInteractionLock: false,
  settingsRenderSignature: "",
  settingsBackupDraft: null,
  settingsBackupError: "",
  settingsBackupBusy: false,
  pendingCommissioningCm100Start: false,
  pendingBoilerPowerTestStart: false,
  pendingFlowAutotuneStart: false,
  pendingAirPurgeStart: false,
  pendingManualFlowStart: false,
  pendingManualHpStart: false,
  pendingHpWaterCalibrationStart: false,
  commissioningTaskLock: "",
  commissioningBoilerHeatPowerDisplay: "",
  headerRenderSignature: "",
  drafts: {},
  inputDrafts: {},
  focusedField: "",
  updateModalOpen: false,
  systemModal: "",
  authStatus: null,
  authDraftUsername: "",
  authDraftCurrentPassword: "",
  authDraftNewPassword: "",
  authDraftConfirmPassword: "",
  authBusy: false,
  authNotice: "",
  authError: "",
  apiSecurityStatus: null,
  apiSecurityBusy: false,
  apiSecurityNotice: "",
  apiSecurityError: "",
  mqttStatus: null,
  mqttDraftEnabled: false,
  mqttDraftBroker: "",
  mqttDraftPort: "1883",
  mqttDraftUsername: "",
  mqttDraftPassword: "",
  mqttDraftClearPassword: false,
  mqttDraftDirty: false,
  mqttBusy: false,
  mqttNotice: "",
  mqttError: "",
  mqttCopiedTopicKey: "",
  mqttCopiedTopicTimer: null,
  mqttExpandedTopicKey: "",
  mqttInputToggleBusyKey: "",
  mqttRetainedToggleBusyKey: "",
  mqttSensorsModalRenderSignature: "",
  updateCheckBusy: false,
  updateInstallBusy: false,
  updateInstallTargetVersion: "",
  updateInstallPhaseHint: "",
  updateInstallProgressHint: Number.NaN,
  updateInstallMode: "",
  updateInstallTargetConnection: "",
  updateInstallTargetTopology: "",
  firmwareAdvancedOpen: false,
  firmwareConnectionSwitchOpen: false,
  firmwareConnectionSwitchConfirmed: false,
  firmwareTopologySwitchOpen: false,
  firmwareTopologySwitchConfirmed: false,
  updateInstallCompleted: false,
  updateInstallCompletedVersion: "",
  updateManualUploadOpen: false,
  updateManualUploadFile: null,
  updateManualUploadFileName: "",
  updateManualUploadError: "",
  updateTestFirmwareOpen: false,
  updateTestFirmwarePr: "",
  updateTestFirmwareConfirmed: false,
  updateTestFirmwareError: "",
  updateTestFirmwareBuild: null,
  pauseResumeDraft: "",
  draggingCurveKey: "",
  motionFrame: 0,
  motionStartedAt: 0,
  reducedMotion: getPrefersReducedMotion(),
  motionPreferenceMedia: null,
  motionPreferenceListener: null,
  motionTargets: {
    pipeFlows: [],
    fanBlades: [],
  },
};

export function getStoredOverviewTheme() {
  try {
    return window.localStorage.getItem("oq-overview-theme") === "dark" ? "dark" : "light";
  } catch (_error) {
    return "light";
  }
}

export function getStoredInterfacePanelOpen() {
  return false;
}


export function getStoredSurface() {
  try {
    return window.localStorage.getItem("oq-active-surface") === "native" ? "native" : "app";
  } catch (_error) {
    return "app";
  }
}


export function getStoredDevPanelOpen() {
  try {
    return window.localStorage.getItem("oq-dev-panel-open") === "true";
  } catch (_error) {
    return false;
  }
}


export function getStoredSettingsGroup() {
  try {
    const stored = window.localStorage.getItem("oq-settings-group");
    return SETTINGS_GROUP_IDS.has(stored) ? stored : SETTINGS_GROUPS[0].id;
  } catch (_error) {
    return SETTINGS_GROUPS[0].id;
  }
}


export function getStoredHpVisualMode() {
  try {
    return window.localStorage.getItem("oq-hp-visual-mode") === "compact" ? "compact" : "schematic";
  } catch (_error) {
    return "schematic";
  }
}


export function getStoredHpLayoutMode() {
  try {
    const stored = window.localStorage.getItem("oq-hp-layout-mode");
    return stored === "focus-hp1" || stored === "focus-hp2" ? stored : "equal";
  } catch (_error) {
    return "equal";
  }
}


export function getStoredTrendWindowHours() {
  try {
    const stored = Number(window.localStorage.getItem("oq-trend-window-hours"));
    return TREND_WINDOW_HOURS_OPTIONS.includes(stored) ? stored : DEFAULT_TREND_WINDOW_HOURS;
  } catch (_error) {
    return DEFAULT_TREND_WINDOW_HOURS;
  }
}


export function getReducedMotionMedia() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return null;
  }
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)");
  } catch (_error) {
    return null;
  }
}


export function getPrefersReducedMotion() {
  return Boolean(getReducedMotionMedia()?.matches);
}
