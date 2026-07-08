let getHeaderRenderSignatureCallback = null;
let patchHeaderDomCallback = null;

export function setHeaderRenderControls({ getSignature, patch } = {}) {
  getHeaderRenderSignatureCallback = typeof getSignature === "function" ? getSignature : null;
  patchHeaderDomCallback = typeof patch === "function" ? patch : null;
}

export function getHeaderRenderSignature() {
  return getHeaderRenderSignatureCallback ? getHeaderRenderSignatureCallback() : "";
}

export function patchHeaderDom() {
  return patchHeaderDomCallback ? patchHeaderDomCallback() : false;
}
