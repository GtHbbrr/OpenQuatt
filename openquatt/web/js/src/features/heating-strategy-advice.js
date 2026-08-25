import { hasEntity } from "../core/app-shared.js";
import { renderModalShell } from "../core/modal-shell.js";
import { isCurveMode } from "../core/domain-helpers.js";
import { getEntityValue } from "../core/entity-store.js";
import { escapeHtml } from "../core/html.js";
import { state } from "../core/state.js";
import { getHeatingEnableAdvice, getHeatingEnableCurrent, getHeatingEnableRecommendation } from "../core/heating-strategy-matrix.js";

function pill(text, tone) {
  return `<span class="oq-advice-pill oq-advice-pill--${tone}">${escapeHtml(text)}</span>`;
}
function formatSourceLabel(value) {
  const v = String(value || "").trim();
  if (!v) return "—";
  if (v === "Disabled") return "Niet gebruiken";
  if (v === "OT thermostat") return "OpenTherm-thermostaat";
  if (v === "HA input") return "HA-invoer";
  if (v === "API input") return "API-invoer";
  return v;
}

export function renderHeatingStrategyAdviceModal() {
  if (state.systemModal !== "heating-strategy-advice") {
    return "";
  }
  const isCurve = isCurveMode();
  const strategyLabel = isCurve ? "Water Temperature Control" : "Power House";
  const strategySub = isCurve ? "Stooklijn" : "Regelt zelf de vraag";
  const advice = getHeatingEnableAdvice();
  const recommended = getHeatingEnableRecommendation();
  const current = getHeatingEnableCurrent();
  const recommendedLabel = formatSourceLabel(recommended);
  const currentLabel = formatSourceLabel(current);
  const deviant = Boolean(advice.deviant && hasEntity("heatingEnableSource"));
  const busy = state.busyAction === "quickstart-heating-enable";

  // Huidige bronnen voor context
  const roomTempLabel = formatSourceLabel(getEntityValue("roomTempSource"));
  const roomSetpointLabel = formatSourceLabel(getEntityValue("roomSetpointSource"));
  const outsideTempLabel = formatSourceLabel(getEntityValue("outsideTempSource"));
  const supplyLabel = formatSourceLabel(getEntityValue("waterSupplySource"));
  const flowLabel = formatSourceLabel(getEntityValue("flowSource") || getEntityValue("qFlowSource"));

  const heatingStatusCell = deviant
    ? `${escapeHtml(currentLabel)} ${pill("afwijkend", "warning")} <button class="oq-advice-inline-btn" type="button" data-oq-action="apply-heating-strategy-advice" data-heating-enable-target="${escapeHtml(recommended)}" ${busy ? "disabled" : ""}>Overnemen</button>`
    : `${escapeHtml(currentLabel)} ${pill("ok", "ok")}`;

  return renderModalShell({
    modalId: "system",
    titleId: "oq-heating-advice-modal-title",
    kicker: "Regeling",
    title: "Warmtetoestemming per strategie",
    copy: "Kies de toestemming die past bij je strategie. De tabel maakt het overzichtelijk.",
    closeAction: "close-system-modal",
    closeLabel: "Sluit advies",
    className: "oq-helper-modal--wide oq-advice-modal",
    bodyMarkup: `
      <div class="oq-advice-summary">
        <div class="oq-advice-stat">
          <span class="oq-advice-stat-kicker">Huidige strategie</span>
          <strong class="oq-advice-stat-value">${escapeHtml(strategyLabel)}</strong>
          <span class="oq-advice-stat-sub">${escapeHtml(strategySub)}</span>
        </div>
        <div class="oq-advice-stat${deviant ? " is-warning" : " is-ok"}">
          <span class="oq-advice-stat-kicker">Huidige keuze</span>
          <strong class="oq-advice-stat-value">${escapeHtml(currentLabel)}</strong>
          <span class="oq-advice-stat-sub">${escapeHtml(deviant ? "wijkt af" : "komt overeen")}</span>
        </div>
        <div class="oq-advice-stat is-recommended">
          <span class="oq-advice-stat-kicker">Aanbevolen</span>
          <strong class="oq-advice-stat-value">${escapeHtml(recommendedLabel)}</strong>
          <span class="oq-advice-stat-sub">${escapeHtml(isCurve ? "thermostaat bepaalt óf" : "geen extra toestemming")}</span>
        </div>
      </div>

      <div class="oq-advice-callout ${deviant ? "oq-advice-callout--warning" : "oq-advice-callout--ok"}">
        <div class="oq-advice-callout-icon">${deviant ? "!" : "✓"}</div>
        <div>
          <strong>${escapeHtml(advice.title)}</strong>
          <p>${escapeHtml(advice.copy)}</p>
        </div>
      </div>

      <h4 class="oq-advice-section-title">Overzicht voor ${escapeHtml(strategyLabel)}</h4>
      <div class="oq-advice-matrix-wrap">
        <table class="oq-advice-matrix oq-advice-matrix--single">
          <thead>
            <tr>
              <th>Instelling</th>
              <th>Advies</th>
              <th>Jouw instelling</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kamertemperatuur</td>
              <td>${isCurve ? pill("aanbevolen", "recommended") : pill("vereist", "required")}</td>
              <td>${escapeHtml(roomTempLabel)} ${roomTempLabel === "—" ? pill("instellen", "warning") : pill("ok", "ok")}</td>
            </tr>
            <tr>
              <td>Kamer-setpoint</td>
              <td>${isCurve ? pill("aanbevolen", "recommended") : pill("vereist", "required")}</td>
              <td>${escapeHtml(roomSetpointLabel)} ${roomSetpointLabel === "—" ? pill("instellen", "warning") : pill("ok", "ok")}</td>
            </tr>
            <tr>
              <td>Buitentemperatuur</td>
              <td>${pill("vereist", "required")} <span class="oq-advice-matrix-note">via Auto</span></td>
              <td>${escapeHtml(outsideTempLabel)} ${outsideTempLabel === "—" ? pill("instellen", "warning") : pill("ok", "ok")}</td>
            </tr>
            <tr>
              <td>Aanvoertemperatuur</td>
              <td>${isCurve ? pill("vereist", "required") : pill("nodig voor begrenzing", "muted")}</td>
              <td>${escapeHtml(supplyLabel)} ${supplyLabel === "—" ? pill("instellen", "warning") : pill("ok", "ok")}</td>
            </tr>
            <tr>
              <td>Flow</td>
              <td>${pill("vereist", "required")}</td>
              <td>${escapeHtml(flowLabel)} ${flowLabel === "—" ? pill("instellen", "warning") : pill("ok", "ok")}</td>
            </tr>
            <tr class="is-highlight${deviant ? " is-warning" : ""}">
              <td>Warmtetoestemming</td>
              <td>${isCurve ? pill("OpenTherm-thermostaat", "recommended") : pill("Niet gebruiken", "muted")}</td>
              <td>${heatingStatusCell}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="oq-advice-footnote"><strong>Niet gebruiken</strong> = geen externe toestemming (niet “uit”). Afwijkend mag, bijvoorbeeld voor zone-verwarming of open vloer.</p>

      <div class="oq-helper-modal-actions oq-advice-actions">
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
        ${deviant ? `<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-heating-strategy-advice" data-heating-enable-target="${escapeHtml(recommended)}" ${busy ? "disabled" : ""}>${busy ? "Opslaan..." : "Aanbevolen instelling gebruiken"}</button>` : ""}
      </div>
    `,
  });
}
