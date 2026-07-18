import { isTrendHistoryEnabled } from "../core/app-shared.js";
import { invokeActionMap } from "../core/action-router.js";
import { SETTINGS_GROUPS } from "../core/config.js";
import { syncEntities } from "../core/entity-sync.js";
import { setAppView } from "../core/navigation.js";
import { render } from "../core/render-scheduler.js";
import { setHpLayoutMode, setHpVisualMode, setOverviewTheme, setSettingsGroup } from "../core/runtime.js";
import { state } from "../core/state.js";
import { setTrendWindowHours } from "../core/trend-window.js";
import { setEnergyHistoryPeriodToNow, setEnergyHistoryView, shiftEnergyHistoryPeriod } from "../views/energy.js";
import { refreshTrendHistoryData } from "./storage-history.js";

function openServiceSettings() {
  state.systemModal = "";
  setAppView("settings");
  setSettingsGroup("service");
  render();
  void syncEntities({ forceFast: true });
}

function openServiceTask(button) {
  const taskKey = String(button.dataset.serviceTask || "").trim();
  if (["autotune", "boiler", "purge", "manual-flow", "manual-hp", "hp-water-calibration"].includes(taskKey)) {
    state.systemModal = `service-task-${taskKey}`;
    render();
    void syncEntities({ forceFast: true });
  }
}

function toggleDetails(event, button, selector, stateKey) {
  event.preventDefault();
  const details = button.closest(selector);
  state[stateKey] = !(details && details.hasAttribute("open"));
  render();
}

const viewActionHandlers = {
  "select-view": (button) => {
    if ((button.dataset.viewId || "") === "diagnosis" && !isTrendHistoryEnabled()) {
      return;
    }
    const nextView = button.dataset.viewId || "overview";
    setAppView(nextView, { syncMode: "push" });
    render();
    void syncEntities({ forceFast: true });
  },
  "select-trend-window": (button) => {
    if (button.disabled) {
      return;
    }
    setTrendWindowHours(Number(button.dataset.trendHours || 24));
    render();
    void refreshTrendHistoryData({ force: true }).then((changed) => {
      if (changed) {
        render();
      }
    });
  },
  "select-energy-history-view": (button) => {
    if (!button.disabled) {
      setEnergyHistoryView(button.dataset.energyHistoryView || "day");
    }
  },
  "shift-energy-history-period": (button) => {
    if (!button.disabled) {
      shiftEnergyHistoryPeriod(state.energyHistoryView || "day", button.dataset.energyHistoryDirection || "1");
    }
  },
  "select-energy-history-now": (button) => {
    if (!button.disabled) {
      setEnergyHistoryPeriodToNow(state.energyHistoryView || "day");
    }
  },
  "select-settings-group": (button) => {
    setSettingsGroup(button.dataset.groupId || SETTINGS_GROUPS[0].id);
    render();
    void syncEntities({ forceFast: true });
  },
  "toggle-overview-theme": () => {
    setOverviewTheme(state.overviewTheme === "light" ? "dark" : "light");
    render();
  },
  "select-hp-visual": (button) => {
    setHpVisualMode(button.dataset.hpVisual === "compact" ? "compact" : "schematic");
    render();
  },
  "select-hp-layout": (button) => {
    setHpLayoutMode(button.dataset.hpLayout || "equal");
    render();
  },
  "toggle-installation-monitoring-details": (button, event) => {
    toggleDetails(event, button, ".oq-settings-monitoring-details", "installationMonitoringDetailsOpen");
  },
  "toggle-integration-diagnostics": (button, event) => {
    toggleDetails(event, button, ".oq-settings-integration-diagnostics", "integrationDiagnosticsOpen");
  },
  "toggle-odu-runtime-frequency-details": (button, event) => {
    toggleDetails(event, button, ".oq-settings-odu-runtime-details", "oduRuntimeFrequencyDetailsOpen");
  },
  "toggle-storage-technical-details": (button, event) => {
    toggleDetails(event, button, ".oq-settings-storage-technical", "settingsStorageDetailsOpen");
  },
  "toggle-storage-advanced": (button, event) => {
    toggleDetails(event, button, ".oq-settings-storage-advanced", "settingsStorageAdvancedOpen");
  },
  "open-cm100-commissioning-modal": () => openServiceSettings(),
  "open-installation-monitoring": () => openServiceSettings(),
  "open-service-task-modal": (button) => openServiceTask(button),
};

export function handleViewAction(action, button, event) {
  return invokeActionMap(viewActionHandlers, action, button, event);
}
