import { invokeActionMap } from "./action-router.js";
import { getCurveFallbackSuggestion, getEntityValue } from "./entity-store.js";
import { commitNumber, commitSelect, commitSwitch, triggerButton } from "./entity-write-actions.js";

const controlActionHandlers = {
  "select-settings-option": (button) => {
    const key = button.dataset.selectKey || "";
    const option = button.dataset.selectOption || "";
    if (key && option && String(getEntityValue(key) || "") !== option) {
      commitSelect(key, option);
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
