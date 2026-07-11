import { getInputDraftValue } from "./control-drafts.js";
import { getNumberMeta } from "./entity-store.js";
import { escapeHtml } from "./html.js";
import { state } from "./state.js";

export function renderNumberInputControl({ key, value, meta, controlClass, inputClass = "oq-helper-input", inputAttributes = "", unitMarkup = "" }) {
  return `
    <label class="${controlClass}">
      <input
        class="${inputClass}"
        type="number"
        data-oq-field="${escapeHtml(key)}"
        min="${meta.min}"
        max="${meta.max}"
        step="${meta.step}"
        value="${escapeHtml(value)}"
        ${inputAttributes}
        ${state.loadingEntities ? "disabled" : ""}
      >
      ${unitMarkup}
    </label>
  `;
}

export function renderNumberInputField(key, title, copy, options = {}) {
  const meta = getNumberMeta(key);
  const value = getInputDraftValue(key);
  return `
    <article class="oq-helper-control-card">
      <div class="oq-helper-control-copy">
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(copy)}</p>
      </div>
      ${renderNumberInputControl({ key, value, meta, controlClass: "oq-helper-control oq-helper-control--split", unitMarkup: `<span class="oq-helper-unit">${escapeHtml(meta.uom || "")}</span>` })}
      ${options.footerMarkup || ""}
    </article>
  `;
}
