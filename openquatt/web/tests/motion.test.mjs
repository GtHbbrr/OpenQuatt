import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.window = {
  localStorage: { getItem: () => null },
  matchMedia: () => ({ matches: false }),
};

const { startMotionLoop, stopMotionLoop } = await import("../js/src/core/motion.js");
const { state } = await import("../js/src/core/state.js");

function createMotionRoot(getFlowNodes) {
  const board = {
    querySelectorAll(selector) {
      return selector === ".oq-hp-tech-pipe-flow" ? getFlowNodes() : [];
    },
  };
  return {
    style: { removeProperty() {} },
    getAttribute: () => "",
    removeAttribute() {},
    querySelectorAll(selector) {
      return selector === ".oq-hp-schematic-board.is-running" && getFlowNodes().length ? [board] : [];
    },
  };
}

test("startMotionLoop starts when motion targets appear after an idle patch", (t) => {
  const originalRequestAnimationFrame = window.requestAnimationFrame;
  const originalCancelAnimationFrame = window.cancelAnimationFrame;
  t.after(() => {
    stopMotionLoop();
    window.requestAnimationFrame = originalRequestAnimationFrame;
    window.cancelAnimationFrame = originalCancelAnimationFrame;
    state.root = null;
  });

  let frameCount = 0;
  let flowNodes = [];
  window.requestAnimationFrame = () => {
    frameCount += 1;
    return frameCount;
  };
  window.cancelAnimationFrame = () => {};
  state.root = createMotionRoot(() => flowNodes);
  state.motionFrame = 0;
  state.motionStartedAt = 0;
  state.motionTargets = { pipeFlows: [], fanBlades: [] };
  state.reducedMotion = false;

  startMotionLoop();
  assert.equal(frameCount, 0);

  const firstFlow = { dataset: { oqFlowVariant: "default" }, style: {} };
  flowNodes = [firstFlow];
  startMotionLoop();
  assert.equal(frameCount, 1);
  assert.equal(state.motionTargets.pipeFlows[0], firstFlow);

  const replacementFlow = { dataset: { oqFlowVariant: "default" }, style: {} };
  flowNodes = [replacementFlow];
  startMotionLoop();
  assert.equal(frameCount, 1);
  assert.equal(state.motionTargets.pipeFlows[0], replacementFlow);
});
