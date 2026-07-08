import { getEntityStateText } from "../core/app-shared.js";

export function isSystemInStandby() {
  return getEntityStateText("controlModeLabel", "").toLowerCase().includes("standby");
}

export function setInnerHtmlIfChanged(node, markup) {
  if (!node) {
    return;
  }
  if (node.innerHTML !== markup) {
    node.innerHTML = markup;
  }
}

export function replaceOuterHtmlIfSignatureChanged(node, signature, markup) {
  if (!node || node.dataset.renderSignature === signature) {
    return false;
  }
  node.outerHTML = markup;
  return true;
}
