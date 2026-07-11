import { render } from "./render-scheduler.js";
import { state } from "./state.js";

function getActionErrorMessage(error) {
  if (error instanceof Error && error.message) {
    return error.message;
  }
  return String(error || "Onbekende fout");
}

export function reportActionError(action, error) {
  state.controlError = `Actie ${action || "(onbekend)"} mislukt. ${getActionErrorMessage(error)}`;
  render();
  console.error(`[OpenQuatt] Action failed: ${action || "(unknown)"}`, error);
}

export function invokeActionMap(actionHandlers, action, ...args) {
  const handler = actionHandlers[action];
  if (!handler) {
    return false;
  }

  try {
    const result = handler(...args);
    if (result && typeof result.then === "function") {
      result.catch((error) => reportActionError(action, error));
    }
  } catch (error) {
    reportActionError(action, error);
  }
  return true;
}

export function reportUnknownAction(action, element = null) {
  if (!action) {
    return;
  }
  console.warn(`[OpenQuatt] Unknown action: ${action}`, element || "");
}
