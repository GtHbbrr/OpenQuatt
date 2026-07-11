export function createScrollKeeper({
  getScroller,
  getToken,
  setToken,
  isActive = () => true,
  getIdentity = null,
  preserveGrowth = false,
  stickToBottom = false,
  nearBottomThreshold = 48,
}) {
  function capture() {
    const scroller = getScroller();
    if (!scroller) {
      return null;
    }

    const scrollState = { scrollTop: scroller.scrollTop };
    if (preserveGrowth || stickToBottom) {
      scrollState.scrollHeight = scroller.scrollHeight;
    }
    if (stickToBottom) {
      const remaining = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight;
      scrollState.stickToBottom = remaining < nearBottomThreshold;
    }
    if (getIdentity) {
      scrollState.identity = getIdentity(scroller);
    }
    return scrollState;
  }

  function restore(scrollState) {
    if (!scrollState) {
      return;
    }

    const scroller = getScroller();
    if (!scroller || (getIdentity && getIdentity(scroller) !== scrollState.identity)) {
      return;
    }
    if (scrollState.stickToBottom) {
      scroller.scrollTop = scroller.scrollHeight;
      return;
    }

    const growthOffset = preserveGrowth
      ? scroller.scrollHeight - Number(scrollState.scrollHeight || 0)
      : 0;
    scroller.scrollTop = Math.max(0, Number(scrollState.scrollTop || 0) + growthOffset);
  }

  function queue(scrollState, defer = true) {
    if (!scrollState) {
      return;
    }

    const restoreToken = Number(getToken() || 0) + 1;
    setToken(restoreToken);
    const applyScrollState = () => {
      if (Number(getToken() || 0) !== restoreToken || !isActive()) {
        return;
      }
      restore(scrollState);
    };

    if (defer) {
      window.requestAnimationFrame(applyScrollState);
      return;
    }
    applyScrollState();
  }

  function invalidate() {
    setToken(Number(getToken() || 0) + 1);
  }

  return { capture, invalidate, queue, restore };
}
