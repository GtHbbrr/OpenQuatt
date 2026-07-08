let startEntityPollingCallback = null;
let stopEntityPollingCallback = null;

export function setEntityPollingControls({ start, stop } = {}) {
  startEntityPollingCallback = typeof start === "function" ? start : null;
  stopEntityPollingCallback = typeof stop === "function" ? stop : null;
}

export function startEntityPolling() {
  startEntityPollingCallback?.();
}

export function stopEntityPolling() {
  stopEntityPollingCallback?.();
}
