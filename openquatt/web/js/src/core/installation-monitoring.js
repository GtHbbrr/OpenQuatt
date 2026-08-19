import { getEntityStateText, hasEntity, isEntityActive } from "./app-shared.js";
import { getEntityValue } from "./entity-store.js";
import { formatFailures, formatWarningFailures } from "./failure-format.js";
import { combineInstallationMonitoringModel } from "./incident-monitoring.js";
import { state } from "./state.js";

const OT_THERMOSTAT_SOURCE_KEYS = [
  "roomTempSource",
  "roomSetpointSource",
  "heatingEnableSource",
  "coolingEnableSource",
];

export function isInstallationMonitoringBinaryActive(key) {
  return hasEntity(key) && isEntityActive(key);
}

export function isInstallationMonitoringIntegrationEnabled(key) {
  return !hasEntity(key) || isEntityActive(key);
}

export function getInstallationMonitoringFailureText(key) {
  if (!hasEntity(key)) {
    return "";
  }
  return formatFailures(getEntityStateText(key, "None"));
}

export function getInstallationMonitoringWarningFailureText(key) {
  if (!hasEntity(key)) {
    return "";
  }
  return formatWarningFailures(getEntityStateText(key, "None"));
}

export function isInstallationMonitoringFailureActive(key) {
  const normalized = getInstallationMonitoringWarningFailureText(key).trim().toLowerCase();
  return Boolean(normalized) && normalized !== "geen actieve storingen";
}

export function getInstallationMonitoringModel() {
  const problems = [];
  const incidentMonitoringStale = Boolean(state.incidentMonitoringError);
  const structuredIncidentMonitoringAvailable = Boolean(
    state.incidentMonitoringSnapshot?.valid && !incidentMonitoringStale,
  );
  const cyclingActive = isInstallationMonitoringBinaryActive("compressorCyclingWarning2h")
    || isInstallationMonitoringBinaryActive("compressorCyclingWarning72h")
    || isInstallationMonitoringBinaryActive("alternatingCompressorStartsWarning");
  const cyclingAlertLatched = isInstallationMonitoringBinaryActive("compressorCyclingAlertLatched");
  const cicPollingEnabled = isInstallationMonitoringIntegrationEnabled("cicPollingEnabled");
  const otEnabled = isInstallationMonitoringIntegrationEnabled("otEnabled");
  const otThermostatSourceSelected = OT_THERMOSTAT_SOURCE_KEYS.some(
    (key) => hasEntity(key) && String(getEntityValue(key) || "").trim() === "OT thermostat",
  );
  const otThermostatStatusInvalid = otThermostatSourceSelected
    && hasEntity("otThermostatStatusValid")
    && !isEntityActive("otThermostatStatusValid");
  const addBinaryProblem = (key, label) => {
    if (isInstallationMonitoringBinaryActive(key)) {
      problems.push({ key, label });
    }
  };
  addBinaryProblem("compressorCyclingWarning2h", "Te veel compressorstarts in 2 uur");
  addBinaryProblem("compressorCyclingWarning72h", "Te veel compressorstarts in 72 uur");
  addBinaryProblem("alternatingCompressorStartsWarning", "Warmtepompen starten opvallend vaak om en om");
  addBinaryProblem("lowflowFaultActive", "Te lage flow");
  addBinaryProblem("pt1000ReadProblem", "PT1000-aanvoersensor geeft geen geldige meting");
  addBinaryProblem("waterSupplyTempFallbackActive", "Aanvoertemperatuur gebruikt de warmtepompuitlaat als fallback");
  addBinaryProblem("flowMismatch", "Flowverschil tussen warmtepomp 1 en 2");
  if (cicPollingEnabled) {
    addBinaryProblem("cicDataStale", "CIC-data is verouderd");
  }
  if (otThermostatStatusInvalid) {
    problems.push({
      key: "otThermostatStatusInvalid",
      label: "Geen actuele OpenTherm-thermostaatstatus",
    });
  }
  if (otEnabled) {
    if (!otThermostatStatusInvalid) {
      addBinaryProblem("otLinkProblem", "OpenTherm-verbinding meldt een probleem");
    }
  }
  if (!structuredIncidentMonitoringAvailable && isInstallationMonitoringFailureActive("hp1Failures")) {
    problems.push({ key: "hp1Failures", label: `Warmtepomp 1: ${getInstallationMonitoringWarningFailureText("hp1Failures")}` });
  }
  if (!structuredIncidentMonitoringAvailable && isInstallationMonitoringFailureActive("hp2Failures")) {
    problems.push({ key: "hp2Failures", label: `Warmtepomp 2: ${getInstallationMonitoringWarningFailureText("hp2Failures")}` });
  }
  const activeProblemCount = problems.length;
  if (cyclingAlertLatched && !cyclingActive) {
    problems.unshift({
      key: "compressorCyclingAlertLatched",
      label: "Pendelen eerder gedetecteerd; melding nog niet bevestigd",
    });
  }

  const baseModel = {
    problems,
    active: problems.length > 0,
    cyclingAlertLatched,
    cyclingAlertActive: cyclingActive,
    cyclingAlertRecovered: cyclingAlertLatched && !cyclingActive,
    title: activeProblemCount > 0
      ? "Aandacht nodig"
      : cyclingAlertLatched ? "Eerdere waarschuwing nog niet bevestigd" : "Geen bijzonderheden",
    copy: activeProblemCount > 0
      ? `${problems.length} aandachtspunt${problems.length === 1 ? "" : "en"} zichtbaar. Bekijk hieronder de details.`
      : cyclingAlertLatched
        ? "Het pendelen is hersteld. De melding blijft zichtbaar totdat je haar bevestigt."
        : "OpenQuatt ziet op dit moment geen actieve aandachtspunten in de bewaakte signalen.",
  };
  const combined = structuredIncidentMonitoringAvailable
    ? combineInstallationMonitoringModel(baseModel, state.incidentMonitoringSnapshot)
    : baseModel;
  if (!incidentMonitoringStale) {
    return combined;
  }

  const monitoringProblem = {
    key: "incident-monitoring-stale",
    label: "Warmtepompstatus wordt opnieuw opgehaald",
    severity: "attention",
    source: "incident_manager",
  };
  const staleProblems = combined.problems.some((problem) => problem.key === monitoringProblem.key)
    ? combined.problems
    : [monitoringProblem, ...combined.problems];
  return {
    ...combined,
    active: true,
    severity: combined.severity === "fault" ? "fault" : "attention",
    problems: staleProblems,
    title: combined.active ? combined.title : "Warmtepompstatus wordt vernieuwd",
    copy: combined.active
      ? `${combined.copy} De warmtepompstatus wordt opnieuw opgehaald en oude incidentgegevens worden niet als actueel getoond. Ververs de pagina als dit na een controllerherstart blijft staan.`
      : "OpenQuatt haalt de actuele warmtepompstatus opnieuw op. Oude incidentgegevens worden niet als actueel getoond. Ververs de pagina als dit na een controllerherstart blijft staan.",
    incidentMonitoringStale: true,
  };
}

export function syncInstallationMonitoringDetailsState(monitoring) {
  const problemSignature = monitoring.active
    ? monitoring.problems.map((problem) => problem.key).sort().join("|")
    : "";
  if (!problemSignature) {
    state.installationMonitoringProblemSignature = "";
    return;
  }
  if (problemSignature !== state.installationMonitoringProblemSignature) {
    state.installationMonitoringProblemSignature = problemSignature;
    state.installationMonitoringDetailsOpen = true;
  }
}
