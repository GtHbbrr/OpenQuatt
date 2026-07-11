import { FAN_ROTATION_DEG_PER_SEC, FLOW_OFFSET_PX_PER_SEC } from "./config.js";
import { state } from "./state.js";

export function clearLegacyMotionVariables() {
  if (!state.root) {
    return;
  }

  state.root.style.removeProperty("--oq-flow-offset");
  state.root.style.removeProperty("--oq-flow-offset-reverse");
  state.root.style.removeProperty("--oq-fan-rotation");
  if (!state.root.getAttribute("style")) {
    state.root.removeAttribute("style");
  }
}

export function refreshMotionTargets() {
  state.motionTargets = {
    pipeFlows: [],
    fanBlades: [],
  };

  if (!state.root) {
    return 0;
  }

  const runningBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-running");
  runningBoards.forEach((board) => {
    board.querySelectorAll(".oq-hp-tech-pipe-flow").forEach((node) => {
      state.motionTargets.pipeFlows.push(node);
    });
  });

  const waterFlowBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-water-flowing:not(.is-running)");
  waterFlowBoards.forEach((board) => {
    board.querySelectorAll('.oq-hp-tech-pipe-flow[data-oq-flow-variant="water"]').forEach((node) => {
      state.motionTargets.pipeFlows.push(node);
    });
  });

  const fanBoards = state.root.querySelectorAll(".oq-hp-schematic-board.is-fan-running");
  fanBoards.forEach((board) => {
    board.querySelectorAll(".oq-hp-tech-fan-blades").forEach((node) => {
      state.motionTargets.fanBlades.push(node);
    });
  });

  return state.motionTargets.pipeFlows.length + state.motionTargets.fanBlades.length;
}

export function hasMotionTargets() {
  return state.motionTargets.pipeFlows.length > 0 || state.motionTargets.fanBlades.length > 0;
}

export function syncMotionVariables(now = performance.now()) {
  if (!state.root || state.reducedMotion) {
    return false;
  }

  if (!hasMotionTargets() && refreshMotionTargets() === 0) {
    return false;
  }

  if (!state.motionStartedAt) {
    state.motionStartedAt = now;
  }

  const elapsedSeconds = (now - state.motionStartedAt) / 1000;
  const fanRotation = (elapsedSeconds * FAN_ROTATION_DEG_PER_SEC) % 360;

  state.motionTargets.pipeFlows.forEach((node) => {
    const speedMultiplier = node.dataset.oqFlowVariant === "water" ? 0.42 : 1;
    const nodeOffset = -(elapsedSeconds * FLOW_OFFSET_PX_PER_SEC * speedMultiplier);
    node.style.strokeDashoffset = `${nodeOffset.toFixed(3)}px`;
  });
  state.motionTargets.fanBlades.forEach((node) => {
    node.style.transform = `rotate(${fanRotation.toFixed(3)}deg)`;
  });
  return true;
}

export function tickMotion(now) {
  if (!syncMotionVariables(now)) {
    state.motionFrame = 0;
    state.motionStartedAt = 0;
    return;
  }
  state.motionFrame = window.requestAnimationFrame(tickMotion);
}

export function startMotionLoop() {
  if (state.reducedMotion) {
    return;
  }

  if (refreshMotionTargets() === 0) {
    return;
  }
  if (state.motionFrame) {
    return;
  }

  const now = performance.now();
  state.motionStartedAt = now;
  if (!syncMotionVariables(now)) {
    state.motionStartedAt = 0;
    return;
  }
  state.motionFrame = window.requestAnimationFrame(tickMotion);
}

export function stopMotionLoop() {
  if (state.motionFrame) {
    window.cancelAnimationFrame(state.motionFrame);
    state.motionFrame = 0;
  }
  state.motionStartedAt = 0;
  clearLegacyMotionVariables();
}
