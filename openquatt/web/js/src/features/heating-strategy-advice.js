import { hasEntity } from "../core/app-shared.js";
import { renderModalShell } from "../core/modal-shell.js";
import { isCurveMode } from "../core/domain-helpers.js";
import { escapeHtml } from "../core/html.js";
import { state } from "../core/state.js";
import { getHeatingEnableAdvice, getHeatingEnableCurrent, getHeatingEnableRecommendation } from "../core/heating-strategy-matrix.js";

function pill(text, tone) {
  return `<span class="oq-advice-pill oq-advice-pill--${tone}">${escapeHtml(text)}</span>`;
}

export function renderHeatingStrategyAdviceModal() {
  if (state.systemModal !== "heating-strategy-advice") {
    return "";
  }
  const isCurve = isCurveMode();
  const strategyLabel = isCurve ? "Water Temperature Control" : "Power House";
  const strategySub = isCurve ? "Stooklijn · buitentemp bepaalt aanvoer" : "Automatisch · huismodel + kamer";
  const advice = getHeatingEnableAdvice();
  const recommended = getHeatingEnableRecommendation();
  const current = getHeatingEnableCurrent();
  const recommendedLabel = recommended === "Disabled" ? "Niet gebruiken" : recommended === "OT thermostat" ? "OpenTherm-thermostaat" : recommended;
  const currentLabel = current === "Disabled" ? "Niet gebruiken" : current === "OT thermostat" ? "OpenTherm-thermostaat" : current || "—";
  const deviant = Boolean(advice.deviant && hasEntity("heatingEnableSource"));
  const busy = state.busyAction === "quickstart-heating-enable";

  return renderModalShell({
    modalId: "system",
    titleId: "oq-heating-advice-modal-title",
    kicker: "Regeling",
    title: "Warmtetoestemming per strategie",
    copy: "OpenTherm-thermostaat heeft voorkeur waar beschikbaar. Kies de toestemming die past bij hoe de regeling denkt.",
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
          <span class="oq-advice-stat-kicker">Huidige warmtetoestemming</span>
          <strong class="oq-advice-stat-value">${escapeHtml(currentLabel)}</strong>
          <span class="oq-advice-stat-sub">${escapeHtml(deviant ? "wijkt af van advies" : "komt overeen met advies")}</span>
        </div>
        <div class="oq-advice-stat is-recommended">
          <span class="oq-advice-stat-kicker">Aanbevolen</span>
          <strong class="oq-advice-stat-value">${escapeHtml(recommendedLabel)}</strong>
          <span class="oq-advice-stat-sub">${escapeHtml(isCurve ? "thermostaat bepaalt óf, stooklijn hoe warm" : "strategie bepaalt zelf de vraag")}</span>
        </div>
      </div>

      ${deviant ? `
        <div class="oq-advice-callout oq-advice-callout--warning">
          <div class="oq-advice-callout-icon">!</div>
          <div>
            <strong>${escapeHtml(advice.title)}</strong>
            <p>${escapeHtml(advice.copy)}</p>
          </div>
        </div>
      ` : `
        <div class="oq-advice-callout oq-advice-callout--ok">
          <div class="oq-advice-callout-icon">✓</div>
          <div>
            <strong>Komt overeen met de aanbeveling</strong>
            <p>${escapeHtml(advice.copy)}</p>
          </div>
        </div>
      `}

      <h4 class="oq-advice-section-title">Matrix — wat is vereist of aanbevolen?</h4>
      <div class="oq-advice-matrix-wrap">
        <table class="oq-advice-matrix">
          <thead>
            <tr>
              <th>Instelling</th>
              <th>Power House</th>
              <th>Stooklijn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kamertemperatuur</td>
              <td>${pill("vereist", "required")}</td>
              <td>${pill("aanbevolen", "recommended")}</td>
            </tr>
            <tr>
              <td>Kamer-setpoint</td>
              <td>${pill("vereist", "required")}</td>
              <td>${pill("aanbevolen", "recommended")}</td>
            </tr>
            <tr>
              <td>Buitentemperatuur</td>
              <td>${pill("vereist", "required")}</td>
              <td>${pill("vereist", "required")} <span class="oq-advice-matrix-note">via Auto</span></td>
            </tr>
            <tr>
              <td>Aanvoertemperatuur</td>
              <td>${pill("nodig voor begrenzing", "muted")}</td>
              <td>${pill("vereist", "required")}</td>
            </tr>
            <tr>
              <td>Flow</td>
              <td>${pill("vereist", "required")}</td>
              <td>${pill("vereist", "required")}</td>
            </tr>
            <tr class="is-highlight${deviant ? " is-warning" : ""}">
              <td>Warmtetoestemming</td>
              <td>${pill("meestal Niet gebruiken", "muted")}</td>
              <td>${pill("meestal thermostaat / zone", "recommended")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="oq-advice-cards">
        <div class="oq-advice-card">
          <div class="oq-advice-card-head">
            <span class="oq-advice-card-icon">◈</span>
            <strong>Power House</strong>
          </div>
          <p>Bepaalt zelf de warmtevraag uit buitentemp, kamer, setpoint en huismodel. Een externe gate als tweede regelaar verstoort modulatie en geeft extra start/stop.</p>
          <p class="oq-advice-card-note">Alleen bewust voor zone-regeling (bijv. geen zone open → blokkeren).</p>
        </div>
        <div class="oq-advice-card">
          <div class="oq-advice-card-head">
            <span class="oq-advice-card-icon">≋</span>
            <strong>Water Temperature Control</strong>
          </div>
          <p>Buitentemp → stooklijn → PID op aanvoer. Kamer is correctie. Thermostaat bepaalt <em>óf</em>, OpenQuatt <em>hoe warm</em>.</p>
          <p class="oq-advice-card-note"><code>Niet gebruiken</code> alleen voor permanent open afgifte zonder thermostaat.</p>
        </div>
      </div>

      <p class="oq-advice-footnote"><strong>Niet gebruiken</strong> = geen externe gate; strategie mag zelf vraag opbouwen (niet “verwarming uit”). Afwijkende maar geldige combinaties blijven mogelijk.</p>

      <div class="oq-helper-modal-actions oq-advice-actions">
        <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal">Sluiten</button>
        ${deviant ? `<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="apply-heating-strategy-advice" data-heating-enable-target="${escapeHtml(recommended)}" ${busy ? "disabled" : ""}>${busy ? "Opslaan..." : "Aanbevolen instelling gebruiken"}</button>` : ""}
      </div>
    `,
  });
}
