let renderCallback = null;

export function setRenderCallback(callback) {
  renderCallback = typeof callback === "function" ? callback : null;
}

export function render() {
  if (renderCallback) {
    renderCallback();
  }
}
