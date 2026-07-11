import { getEntityNumericValue, hasEntity } from "../core/app-shared.js";
import { getInputDraftValue } from "../core/control-drafts.js";
import { getNumberMeta, parseLooseNumber } from "../core/entity-store.js";
import { renderNumberInputControl } from "../core/number-controls.js";
import { formatSettingsNumberValue, getSettingsTemperatureValue, renderSettingsNumberField, renderSettingsSection } from "./controls.js";
import { escapeHtml } from "../core/html.js";

  export function getHpWaterRawValue(rawKey, finalKey, offsetKey) {
    const finalValue = getEntityNumericValue(finalKey);
    const offset = getEntityNumericValue(offsetKey);
    if (Number.isFinite(finalValue) && Number.isFinite(offset)) {
      return finalValue - offset;
    }
    const raw = getEntityNumericValue(rawKey);
    return Number.isFinite(raw) ? raw : NaN;
  }

  export function renderWaterSettingsFields(className = "oq-settings-grid") {
    const offsetMarkup = renderHpWaterSensorOffsetSettings();
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsNumberField("maxWater", "Maximale watertemperatuur", "Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5°C boven deze grens.")}
      </div>
      ${offsetMarkup}
    `;
  }

  export function renderHpWaterSensorOffsetSettings() {
    const rows = [
      { label: "HP1 water in", rawKey: "hp1WaterInRaw", offsetKey: "hp1WaterInOffset", finalKey: "hp1WaterIn" },
      { label: "HP1 water uit", rawKey: "hp1WaterOutRaw", offsetKey: "hp1WaterOutOffset", finalKey: "hp1WaterOut" },
      { label: "HP2 water in", rawKey: "hp2WaterInRaw", offsetKey: "hp2WaterInOffset", finalKey: "hp2WaterIn" },
      { label: "HP2 water uit", rawKey: "hp2WaterOutRaw", offsetKey: "hp2WaterOutOffset", finalKey: "hp2WaterOut" },
    ].filter((row) => hasEntity(row.offsetKey) && hasEntity(row.finalKey));

    if (!rows.length) {
      return "";
    }

    const renderRow = (row) => {
      const meta = getNumberMeta(row.offsetKey);
      const raw = getHpWaterRawValue(row.rawKey, row.finalKey, row.offsetKey);
      const offsetDraft = parseLooseNumber(getInputDraftValue(row.offsetKey));
      const finalFromDraft = Number.isFinite(raw) && Number.isFinite(offsetDraft)
        ? formatSettingsNumberValue(raw + offsetDraft, meta.uom || "°C", 2)
        : getSettingsTemperatureValue(row.finalKey, 2);

      return `
        <article class="oq-settings-hp-offset-row" data-oq-settings-field="${escapeHtml(row.offsetKey)}" data-oq-hp-offset-raw-key="${escapeHtml(row.rawKey)}" data-oq-hp-offset-final-key="${escapeHtml(row.finalKey)}">
          <div class="oq-settings-hp-offset-copy">
            <strong>${escapeHtml(row.label)}</strong>
            <span data-oq-hp-offset-active>${escapeHtml(getSettingsTemperatureValue(row.finalKey, 2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${escapeHtml(`${row.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong data-oq-hp-offset-raw>${escapeHtml(Number.isFinite(raw) ? formatSettingsNumberValue(raw, meta.uom || "°C", 2) : getSettingsTemperatureValue(row.rawKey, 2))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <label class="oq-settings-hp-offset-input">
              <span>Correctie</span>
              ${renderNumberInputControl({
                key: row.offsetKey,
                value: getInputDraftValue(row.offsetKey),
                meta,
                controlClass: "oq-helper-control oq-helper-control--suffix",
                inputClass: "oq-helper-input oq-helper-input--compact-number",
                unitMarkup: meta.uom ? `<span class="oq-helper-unit-chip">${escapeHtml(meta.uom)}</span>` : "",
              })}
            </label>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Na wijziging</span>
              <strong data-oq-hp-offset-final>${escapeHtml(finalFromDraft)}</strong>
            </div>
          </div>
        </article>
      `;
    };

    return `
      <div class="oq-settings-subpanel oq-settings-hp-offset-panel">
        <div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Sensorcorrecties</p>
          <h4>Water in/out offsets</h4>
          <p>Raw is de ongecorrigeerde sensorwaarde. Actief is de temperatuur die OpenQuatt nu gebruikt: raw plus correctie.</p>
        </div>
        <div class="oq-settings-hp-offset-list">
          ${rows.map(renderRow).join("")}
        </div>
      </div>
    `;
  }

  export function renderSettingsWaterSection() {
    return renderSettingsSection(
      "Beveiliging",
      "Watertemperatuur",
      "Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.",
      renderWaterSettingsFields(),
    );
  }
