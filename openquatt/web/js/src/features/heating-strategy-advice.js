import { hasEntity } from "../core/app-shared.js";
import { renderModalShell } from "../core/modal-shell.js";
import { isCurveMode } from "../core/domain-helpers.js";
import { getEntityValue } from "../core/entity-store.js";
import { escapeHtml } from "../core/html.js";
import { state } from "../core/state.js";
import { getHeatingEnableAdvice, getHeatingEnableCurrent, getHeatingEnableRecommendation, STRATEGY_CONFIG_MATRIX } from "../core/heating-strategy-matrix.js";

export function renderHeatingStrategyAdviceModal() {
  if (state.systemModal !== "heating-strategy-advice") {
    return "";
  }
  const isCurve = isCurveMode();
  const currentStrategyLabel = isCurve ? "Water Temperature Control (stooklijn)" : "Power House";
  const advice = getHeatingEnableAdvice();
  const recommended = getHeatingEnableRecommendation();
  const current = getHeatingEnableCurrent();
  const recommendedLabel = recommended === "Disabled" ? "Niet gebruiken" : recommended === "OT thermostat" ? "OpenTherm-thermostaat" : recommended;
  const currentLabel = current === "Disabled" ? "Niet gebruiken" : current === "OT thermostat" ? "OpenTherm-thermostaat" : current || "—";
  const deviant = Boolean(advice.deviant && hasEntity("heatingEnableSource"));
  const busy = state.busyAction === "quickstart-heating-enable";
  const matrix = STRATEGY_CONFIG_MATRIX;
  return renderModalShell({
    modalId: "system",
    titleId: "oq-heating-advice-modal-title",
    kicker: "Regeling",
    title: "Warmtetoestemming per strategie",
    copy: "Welke bronnen en toestemmingen logisch samenwerken hangt af van de gekozen strategie. OpenTherm-thermostaat heeft altijd voorkeur waar beschikbaar.",
    closeAction: "close-system-modal",
    closeLabel: "Sluit advies",
    className: "oq-helper-modal--wide",
    bodyMarkup: `
      <div class="oq-helper-modal-body">
        <div class="oq-settings-source-rows" style="margin-bottom:12px">
          <div class="oq-settings-source-row"><span>Huidige strategie</span><strong>${escapeHtml(currentStrategyLabel)}</strong></div>
          <div class="oq-settings-source-row${deviant ? " is-warning" : ""}"><span>Huidige warmtetoestemming</span><strong>${escapeHtml(currentLabel)}</strong></div>
          <div class="oq-settings-source-row"><span>Aanbevolen</span><strong>${escapeHtml(recommendedLabel)}</strong></div>
        </div>
        ${deviant ? `<p class="oq-settings-source-warning">${escapeHtml(advice.title)}<br><span style="font-weight:400">${escapeHtml(advice.copy)}</span></p>` : `<p class="oq-settings-action-note">${escapeHtml(advice.copy)}</p>`}

        <h4 style="margin:14px 0 8px">Matrix: vereist / aanbevolen per strategie</h4>
        <div class="oq-settings-source-rows" style="border:1px solid rgba(148,163,184,.18);border-radius:8px;padding:8px">
          <div class="oq-settings-source-row"><span>Kamertemperatuur</span><strong>PH: ${escapeHtml(matrix.roomTemp.powerHouse)} · Stooklijn: ${escapeHtml(matrix.roomTemp.curve)}</strong></div>
          <div class="oq-settings-source-row"><span>Kamer-setpoint</span><strong>PH: ${escapeHtml(matrix.roomSetpoint.powerHouse)} · Stooklijn: ${escapeHtml(matrix.roomSetpoint.curve)}</strong></div>
          <div class="oq-settings-source-row"><span>Buitentemperatuur</span><strong>PH: ${escapeHtml(matrix.outsideTemp.powerHouse)} · Stooklijn: ${escapeHtml(matrix.outsideTemp.curve)} · normaliter buitenunit via Auto</strong></div>
          <div class="oq-settings-source-row"><span>Aanvoertemperatuur</span><strong>PH: ${escapeHtml(matrix.waterSupply.powerHouse)} · Stooklijn: ${escapeHtml(matrix.waterSupply.curve)}</strong></div>
          <div class="oq-settings-source-row"><span>Flow</span><strong>PH: ${escapeHtml(matrix.flow.powerHouse)} · Stooklijn: ${escapeHtml(matrix.flow.curve)}</strong></div>
          <div class="oq-settings-source-row${deviant ? " is-warning" : ""}"><span>Warmtetoestemming</span><strong>PH: ${escapeHtml(matrix.heatingEnable.powerHouse)} · Stooklijn: ${escapeHtml(matrix.heatingEnable.curve)}</strong></div>
        </div>

        <div style="margin-top:12px;display:grid;gap:6px">
          <p class="oq-settings-action-note"><strong>Power House:</strong> bepaalt zelf de warmtevraag uit buitentemp, kamer, setpoint en huismodel. Externe gate verstoort modulatie; alleen bewust voor zone-regeling.</p>
          <p class="oq-settings-action-note"><strong>Water Temperature Control:</strong> buitentemp → stooklijn → PID op aanvoer. Kamer is correctie. Thermostaat bepaalt <em>of</em>, OpenQuatt <em>hoe warm</em>. <code>Niet gebruiken</code> alleen voor permanent open afgifte zonder thermostaat.</p>
          <p class="oq-settings-action-note"><strong>Niet gebruiken</strong> = geen externe gate; strategie mag zelf vraag opbouwen (niet "verwarming uit"). Afwijkende maar geldige combinaties blijven mogelijk.</p>
        </div>
      </div>
      <div class="oq-helper-modal-actions">
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
        ${deviant ? `<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-heating-strategy-advice" data-heating-enable-target="${escapeHtml(recommended)}" ${busy ? "disabled" : ""}>${busy ? "Opslaan..." : "Aanbevolen instelling gebruiken"}</button>` : ""}
      </div>
    `,
  });
}
