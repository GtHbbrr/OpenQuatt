import { getEntityNumericValue, getEntityStateText, hasEntity, isEntityActive } from "../core/app-shared.js";
import { getInputDraftValue } from "../core/control-drafts.js";
import { getNumberMeta, parseLooseNumber } from "../core/entity-store.js";
import { renderModalShell } from "../core/modal-shell.js";
import { renderNumberInputControl } from "../core/number-controls.js";
import { formatSettingsNumberValue, getSettingsTemperatureValue, renderSettingsNumberField, renderSettingsSection, renderSettingsSystemRow } from "./controls.js";
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

  export function getWaterSupplyCorrectionView() {
    const source = getEntityStateText("waterSupplyTempEffectiveSource", "Actieve bron");
    const status = getEntityStateText("waterSupplyCalibrationStatus", "");
    const activeValue = getEntityNumericValue("supplyTemp");
    const storedOffset = getEntityNumericValue("waterSupplyCalibrationOffset");
    const fallbackActive = isEntityActive("waterSupplyTempFallbackActive") || /\(fallback\)/i.test(source);
    const calibrationRequired = isEntityActive("waterSupplyCalibrationRequired") || status.startsWith("Recalibration required:");
    const calibrationActive = status.startsWith("Calibrated:") && !calibrationRequired && !fallbackActive && Number.isFinite(storedOffset);
    const activeOffset = calibrationActive ? storedOffset : 0;

    let statusLabel = "Geen actieve aanvoercorrectie";
    if (fallbackActive) {
      statusLabel = "Fallback actief; correctie tijdelijk uit";
    } else if (calibrationRequired) {
      statusLabel = "Opnieuw kalibreren";
    } else if (calibrationActive) {
      statusLabel = "Brongebonden kalibratie actief";
    }

    return {
      source,
      statusLabel,
      rawValue: Number.isFinite(activeValue) ? activeValue - activeOffset : NaN,
      offsetValue: activeOffset,
      activeValue,
      uom: getNumberMeta("waterSupplyCalibrationOffset").uom || "°C",
    };
  }

  export function renderWaterSettingsFields(className = "oq-settings-grid", { includeSensorCorrections = true } = {}) {
    const offsetLauncher = includeSensorCorrections && hasHpWaterSensorOffsetSettings()
      ? renderSettingsSystemRow({
          label: "Sensorcorrecties",
          value: "Watertemperatuurcorrecties",
          note: "Bekijk en wijzig de water in/uit-correcties en controleer de actieve aanvoercorrectie.",
          action: '<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="open-water-sensor-corrections-modal">Correcties openen</button>',
          className: "oq-settings-hp-offset-launcher",
          dataAttribute: "",
        })
      : "";
    return `
      <div class="${escapeHtml(className)}">
        ${renderSettingsNumberField("maxWater", "Maximale watertemperatuur", "Normale bovengrens voor de watertemperatuur tijdens bedrijf. OpenQuatt begint enkele graden eerder al terug te regelen en bewaakt een harde trip op 5°C boven deze grens.")}
      </div>
      ${offsetLauncher}
    `;
  }

  function hasHpWaterSensorOffsetSettings() {
    const hpRows = [
      ["hp1WaterInOffset", "hp1WaterIn"],
      ["hp1WaterOutOffset", "hp1WaterOut"],
      ["hp2WaterInOffset", "hp2WaterIn"],
      ["hp2WaterOutOffset", "hp2WaterOut"],
    ];
    return hpRows.some(([offsetKey, finalKey]) => hasEntity(offsetKey) && hasEntity(finalKey)) ||
      (hasEntity("supplyTemp") && hasEntity("waterSupplyCalibrationOffset"));
  }

  export function renderHpWaterSensorOffsetSettings({ showHeader = true } = {}) {
    const rows = [
      { label: "HP1 water in", rawKey: "hp1WaterInRaw", offsetKey: "hp1WaterInOffset", finalKey: "hp1WaterIn" },
      { label: "HP1 water uit", rawKey: "hp1WaterOutRaw", offsetKey: "hp1WaterOutOffset", finalKey: "hp1WaterOut" },
      { label: "HP2 water in", rawKey: "hp2WaterInRaw", offsetKey: "hp2WaterInOffset", finalKey: "hp2WaterIn" },
      { label: "HP2 water uit", rawKey: "hp2WaterOutRaw", offsetKey: "hp2WaterOutOffset", finalKey: "hp2WaterOut" },
    ].filter((row) => hasEntity(row.offsetKey) && hasEntity(row.finalKey));
    const hasSupplyCorrection = hasEntity("supplyTemp") && hasEntity("waterSupplyCalibrationOffset");

    if (!rows.length && !hasSupplyCorrection) {
      return "";
    }

    const formatSupplyValue = (value, uom) => Number.isFinite(value)
      ? formatSettingsNumberValue(value, uom, 2)
      : "—";

    const renderRow = (row) => {
      const meta = getNumberMeta(row.offsetKey);
      const raw = getHpWaterRawValue(row.rawKey, row.finalKey, row.offsetKey);
      const offsetDraft = parseLooseNumber(getInputDraftValue(row.offsetKey));
      const finalFromDraft = Number.isFinite(raw) && Number.isFinite(offsetDraft)
        ? formatSettingsNumberValue(raw + offsetDraft, meta.uom || "°C", 2)
        : getSettingsTemperatureValue(row.finalKey, 2);

      return `
        <article class="oq-settings-hp-offset-row">
          <div class="oq-settings-hp-offset-copy">
            <strong>${escapeHtml(row.label)}</strong>
            <span>${escapeHtml(getSettingsTemperatureValue(row.finalKey, 2))} actief</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="${escapeHtml(`${row.label} correctie`)}">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong>${escapeHtml(Number.isFinite(raw) ? formatSettingsNumberValue(raw, meta.uom || "°C", 2) : getSettingsTemperatureValue(row.rawKey, 2))}</strong>
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
              <strong>${escapeHtml(finalFromDraft)}</strong>
            </div>
          </div>
        </article>
      `;
    };

    const renderSupplyRow = () => {
      const view = getWaterSupplyCorrectionView();
      return `
        <article class="oq-settings-hp-offset-row is-readonly">
          <div class="oq-settings-hp-offset-copy">
            <strong>Aanvoer (${escapeHtml(view.source)})</strong>
            <span>${escapeHtml(`${formatSupplyValue(view.activeValue, view.uom)} actief · ${view.statusLabel}`)}</span>
          </div>
          <div class="oq-settings-hp-offset-equation" aria-label="Aanvoer brongebonden correctie">
            <div class="oq-settings-hp-offset-readout">
              <span>Raw</span>
              <strong>${escapeHtml(formatSupplyValue(view.rawValue, view.uom))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">+</span>
            <div class="oq-settings-hp-offset-readout">
              <span>Actieve correctie</span>
              <strong>${escapeHtml(formatSupplyValue(view.offsetValue, view.uom))}</strong>
            </div>
            <span class="oq-settings-hp-offset-operator">=</span>
            <div class="oq-settings-hp-offset-readout oq-settings-hp-offset-final">
              <span>Actief</span>
              <strong>${escapeHtml(formatSupplyValue(view.activeValue, view.uom))}</strong>
            </div>
          </div>
        </article>
      `;
    };

    return `
      <div class="oq-settings-subpanel oq-settings-hp-offset-panel">
        ${showHeader ? `<div class="oq-settings-subpanel-head">
          <p class="oq-helper-label">Sensorcorrecties</p>
          <h4>Watertemperatuurcorrecties</h4>
          <p>Raw is de ongecorrigeerde sensorwaarde. Actief is de temperatuur die OpenQuatt nu gebruikt: raw plus correctie.</p>
        </div>` : ""}
        <div class="oq-settings-hp-offset-list">
          ${rows.map(renderRow).join("")}
          ${hasSupplyCorrection ? renderSupplyRow() : ""}
        </div>
        ${hasSupplyCorrection ? `
          <aside class="oq-settings-hp-offset-supply-note">
            <strong>Waarom is de aanvoercorrectie niet handmatig aanpasbaar?</strong>
            <p>De correctie hoort bij de actieve aanvoerbron en de bijbehorende bronconfiguratie. Een los ingestelde offset kan na een bronwissel op de verkeerde sensor worden toegepast. Daarom is deze waarde hier alleen-lezen en wijzig je haar via de taak Temperatuursensoren kalibreren onder Service; die slaat de correctie en bron samen op.</p>
          </aside>
        ` : ""}
      </div>
    `;
  }

  export function renderHpWaterSensorOffsetsModal() {
    const body = renderHpWaterSensorOffsetSettings({ showHeader: false });
    if (!body) {
      return "";
    }
    return renderModalShell({
      id: "system",
      titleId: "oq-water-sensor-corrections-modal-title",
      kicker: "Sensorcorrecties",
      title: "Watertemperatuurcorrecties",
      copy: "Bekijk de ruwe en actieve sensortemperaturen en pas de water in/uit-correcties aan.",
      className: "oq-helper-modal--wide oq-helper-modal--scrollable oq-settings-hp-offset-modal",
      sectionAttributes: "data-oq-water-offset-modal",
      closeAction: "close-system-modal",
      closeLabel: "Sluit watertemperatuurcorrecties",
      body,
      actions: '<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="close-system-modal">Gereed</button>',
    });
  }

  export function renderSettingsWaterSection() {
    return renderSettingsSection(
      "Beveiliging",
      "Watertemperatuur",
      "Beschermt het systeem tegen te hoge aanvoertemperaturen. OpenQuatt regelt richting deze grens terug en grijpt 5°C erboven hard in.",
      renderWaterSettingsFields(),
    );
  }
