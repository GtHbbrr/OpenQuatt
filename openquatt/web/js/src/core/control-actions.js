import { invokeActionMap } from "./action-router.js";
import { hasEntity } from "./app-shared.js";
import { getCurveFallbackSuggestion, getEntityValue } from "./entity-store.js";
import { commitNumber, commitSelect, commitSwitch, triggerButton } from "./entity-write-actions.js";
import { state } from "./state.js";

const controlActionHandlers = {
  "select-settings-option": (button) => {
    const key = button.dataset.selectKey || "";
    const option = button.dataset.selectOption || "";
    if (key && option && String(getEntityValue(key) || "") !== option) {
      commitSelect(key, option);
      if (key === "strategy" && state.quickStartModalOpen && hasEntity("heatingEnableSource")) {
        const isCurve = String(option).includes("Water Temperature Control");
        const recommended = isCurve
          ? (hasEntity("otEnabled") ? "OT thermostat" : hasEntity("cicPollingEnabled") ? "CIC" : "OT thermostat")
          : "Disabled";
        const current = String(getEntityValue("heatingEnableSource") || "");
        if (current !== recommended) {
          // Automatisch goed zetten tijdens onboarding; geen modal nodig
          commitSelect("heatingEnableSource", recommended);
        }
      }
    }
  },
  "toggle-overview-control": (button) => {
    const key = button.dataset.controlKey || "";
    const nextState = (button.dataset.controlState || "").toLowerCase();
    if (key && (nextState === "on" || nextState === "off")) {
      commitSwitch(key, nextState === "on");
    }
  },
  "select-overview-control-option": (button) => {
    const key = button.dataset.controlKey || "";
    const option = button.dataset.controlOption || "";
    if (key && option && String(getEntityValue(key) || "") !== option) {
      commitSelect(key, option);
    }
  },
  "suggest-curve-fallback": () => {
    const suggestion = getCurveFallbackSuggestion();
    if (suggestion) {
      commitNumber("curveFallbackSupply", suggestion.value, "Fallback-aanvoertemperatuur uit de stooklijn overgenomen.");
    }
  },
  apply: () => triggerButton("apply"),
  reset: () => triggerButton("reset"),
};

export function handleControlAction(action, button) {
  return invokeActionMap(controlActionHandlers, action, button);
}
