import { getEntityValue } from "./entity-store.js";
import { state } from "./state.js";

export function getInputDraftValue(key) {
  if (Object.prototype.hasOwnProperty.call(state.inputDrafts, key)) {
    return state.inputDrafts[key];
  }
  return getEntityValue(key);
}
