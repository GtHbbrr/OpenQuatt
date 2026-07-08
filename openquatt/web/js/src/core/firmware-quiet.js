import { state } from "./state.js";

export function isFirmwareOtaQuietActive(now = Date.now()) {
  return Number(state.firmwareOtaQuietUntil || 0) > now;
}
