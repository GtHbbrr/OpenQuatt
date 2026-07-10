import { getEntityDisplayUnit, getEntityNumericValue, getEntityStateText, hasEntity, isEntityActive } from "../core/app-shared.js";
import { HP_PANEL_CONFIGS, renderOqIcon } from "../core/config.js";
import { getEntityValue } from "../core/entity-store.js";
import { formatFailures, formatWarningFailures } from "../core/failure-format.js";
import { getOverviewControlsRenderSignature, getRenderSignature } from "../core/render-signatures.js";
import { state } from "../core/state.js";
import { refreshMotionTargets } from "../core/motion.js";
import { getInstallationMonitoringModel } from "../core/installation-monitoring.js";
import { setViewPatchControls } from "../core/view-patch-controls.js";
import { getInstallationTopology } from "../features/device-context.js";
import { formatNumericState } from "../core/formatting.js";
import { getHeatPumpPanelStatusLabel, getOverviewStatusCards, getOverviewStrategyLabel, getOverviewStrategySectionModel, getOverviewTempsModel, getOverviewTempsRenderSignature, getOverviewTopCards, getOverviewTrendRenderSignature, isCoolingOverviewActive, patchHpPanelStatusRow, patchOverviewTrendCurrentValues, renderHpPanelStatusRow, renderOverviewControlPanels, renderOverviewInstallationMonitoringNotice, renderOverviewNarrativePanel, renderOverviewStatCards, renderOverviewStatusPanel, renderOverviewSummaryShell, renderOverviewTempsPanel, renderOverviewTrendsPanel, renderTempRow, syncOverviewTrendInteractions } from "./overview.js";
import { escapeHtml } from "../core/html.js";
import { render } from "../core/render-scheduler.js";
import { replaceOuterHtmlIfSignatureChanged, setInnerHtmlIfChanged } from "./view-utils.js";

  export function getHeatPumpRuntimeModel(title, keys, accent) {
    const mode = formatWorkingMode(getEntityStateText(keys.mode, "Unknown"));
    const defrostActive = isEntityActive(keys.defrost);
    const failures = formatFailures(getEntityStateText(keys.failures, "None"));
    const warningFailures = formatWarningFailures(failures);
    const running = mode === "Verwarmen" || mode === "Koelen" || defrostActive;
    return {
      mode,
      defrostActive,
      failures,
      warningFailures,
      running,
      thermalKey: mode === "Koelen" ? keys.cooling : keys.heat,
      schematic: buildHeatPumpSchematicModel(title, keys, accent, mode, defrostActive, warningFailures, running),
    };
  }

  export function renderHeatPumpPanelTitle(title, layoutAction = null) {
    return `<h3>${escapeHtml(title)}</h3>${layoutAction ? `<button class="oq-overview-hp-card-action" type="button" data-oq-action="select-hp-layout" data-hp-layout="${escapeHtml(layoutAction.layout)}">${renderMagnifyActionIcon(layoutAction.layout === "equal" ? "minus" : "plus")}<span>${escapeHtml(layoutAction.label)}</span></button>` : ""}`;
  }

  export function renderHeatPumpPanelStatus(mode, running, warningActive, failureText) {
    return `<div class="oq-overview-hp-status">${renderHpPanelStatusRow(mode, running, warningActive, failureText)}</div>`;
  }

  export function formatHeatPumpSummaryMode(mode, defrostActive) {
    if (defrostActive) {
      return "ontdooit";
    }
    if (mode === "Verwarmen") {
      return "verwarmt";
    }
    if (mode === "Koelen") {
      return "koelt";
    }
    if (mode === "Stand-by") {
      return "stand-by";
    }
    return "onbekend";
  }

  export function renderHeatPumpSummary(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length === 0) {
      return "";
    }
    return `<p class="oq-overview-hp-summary">${escapeHtml(heatPumpPanels.map((panel) => `${panel.title} ${formatHeatPumpSummaryMode(formatWorkingMode(getEntityStateText(panel.keys.mode, "Unknown")), isEntityActive(panel.keys.defrost))}`).join(", "))}</p>`;
  }

  export function formatComponentPositionLabel(key) {
    const entity = state.entities[key];
    if (!entity) {
      return "Positie: â€”";
    }
    const numeric = getEntityNumericValue(key);
    if (!Number.isNaN(numeric)) {
      return `Positie: ${formatNumericState(numeric, 0, entity.uom || "")}`;
    }
    return `Positie: ${getEntityStateText(key)}`;
  }

  export function formatFourWayPositionLabel(key) {
    if (!hasEntity(key)) {
      return "Positie: â€”";
    }
    return `Positie: ${isEntityActive(key) ? "Koelen/Defrost" : "Verwarmen"}`;
  }

  export function formatWorkingMode(value) {
    const raw = String(value || "").trim();
    if (!raw || raw === "Unknown") {
      return "Onbekend";
    }
    if (raw === "Standby") {
      return "Stand-by";
    }
    if (raw === "Heating") {
      return "Verwarmen";
    }
    if (raw === "Cooling") {
      return "Koelen";
    }
    return raw;
  }

  export function renderTechPipeLayer(id, tone, d, animated = true, flowVariant = "default") {
    return `
      <g class="oq-hp-tech-pipe oq-hp-tech-pipe--${escapeHtml(tone)}" data-oq-pipe="${escapeHtml(id)}">
        <path class="oq-hp-tech-pipe-base" d="${escapeHtml(d)}" />
        <path class="oq-hp-tech-pipe-core" d="${escapeHtml(d)}" />
        ${animated ? `<path class="oq-hp-tech-pipe-flow" data-oq-flow-variant="${escapeHtml(flowVariant)}" d="${escapeHtml(d)}" />` : ""}
      </g>
    `;
  }

  export function renderTechTooltipIcon(icon, centerX, centerY) {
    if (icon === "temperature") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--temperature"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-mdi" d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V12H11V5A1 1 0 0 1 12 4Z" />
        </svg>
      `;
    }
    if (icon === "pressure") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z"
          />
        </svg>
      `;
    }
    if (icon === "defrost") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            class="oq-hp-tech-tooltip-icon-mdi"
            d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z"
          />
        </svg>
      `;
    }
    if (icon === "flow") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 8.2 C5.1 6.8 6.8 6.8 8.4 8.2 C10 9.6 11.7 9.6 13.3 8.2 C14.4 7.2 15.6 7 16.5 7.1" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M3.5 12.1 C5.1 10.7 6.8 10.7 8.4 12.1 C10 13.5 11.7 13.5 13.3 12.1 C14.4 11.1 15.6 10.9 16.5 11" />
        </svg>
      `;
    }
    if (icon === "fan") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.7" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 3.1 C12.1 5 12.4 6.7 10.9 9.1 C9 8.9 8.1 7.7 8.2 6.1 C8.3 4.7 8.9 3.7 10 3.1 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M16.9 10 C15 12.1 13.3 12.4 10.9 10.9 C11.1 9 12.3 8.1 13.9 8.2 C15.3 8.3 16.3 8.9 16.9 10 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M10 16.9 C7.9 15 7.6 13.3 9.1 10.9 C11 11.1 11.9 12.3 11.8 13.9 C11.7 15.3 11.1 16.3 10 16.9 Z" />
          <path class="oq-hp-tech-tooltip-icon-fill" d="M3.1 10 C5 7.9 6.7 7.6 9.1 9.1 C8.9 11 7.7 11.9 6.1 11.8 C4.7 11.7 3.7 11.1 3.1 10 Z" />
        </svg>
      `;
    }
    if (icon === "eev") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="4.5,5.1 10,10 4.5,14.9" />
          <polygon class="oq-hp-tech-tooltip-icon-fill" points="15.5,5.1 10,10 15.5,14.9" />
        </svg>
      `;
    }
    if (icon === "fourway") {
      return `
        <svg
          class="oq-hp-tech-tooltip-icon-svg oq-hp-tech-tooltip-icon-svg--component"
          x="${centerX - 10}"
          y="${centerY - 10}"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <rect class="oq-hp-tech-tooltip-icon-stroke" x="7" y="7" width="6" height="6" rx="1.8" />
          <path class="oq-hp-tech-tooltip-icon-stroke" d="M10 3.5 V7 M10 13 V16.5 M3.5 10 H7 M13 10 H16.5" />
          <circle class="oq-hp-tech-tooltip-icon-fill" cx="10" cy="10" r="1.5" />
        </svg>
      `;
    }
    return `
      <g class="oq-hp-tech-tooltip-icon-wrap" transform="translate(${centerX - 10} ${centerY - 10})">
        <path class="oq-hp-tech-tooltip-icon-wave" d="M2 15 L7 9 L12 15 L17 9" />
      </g>
    `;
  }

  export function renderTechTooltip({ bind, modifier, x, y, width, kicker, detail, detailBind = "", icon = "heater", direction = "down" }) {
    const height = 44;
    const badgeCx = x + 26;
    const badgeCy = y + 22;
    const detailBindAttr = detailBind ? ` data-oq-bind="${escapeHtml(detailBind)}"` : "";
    let pointerPath = "";
    if (direction === "up") {
      const pointerMid = x + Math.round(width * 0.52);
      pointerPath = `M${pointerMid - 6} ${y} L${pointerMid} ${y - 8} L${pointerMid + 6} ${y} Z`;
    } else if (direction === "left") {
      const pointerMid = y + Math.round(height * 0.5);
      pointerPath = `M${x} ${pointerMid - 6} L${x - 8} ${pointerMid} L${x} ${pointerMid + 6} Z`;
    } else if (direction === "right") {
      const pointerMid = y + Math.round(height * 0.5);
      pointerPath = `M${x + width} ${pointerMid - 6} L${x + width + 8} ${pointerMid} L${x + width} ${pointerMid + 6} Z`;
    } else {
      const pointerMid = x + Math.round(width * 0.52);
      pointerPath = `M${pointerMid - 6} ${y + height} L${pointerMid} ${y + height + 8} L${pointerMid + 6} ${y + height} Z`;
    }
    return `
      <g
        class="oq-hp-tech-tooltip oq-hp-tech-tooltip--${escapeHtml(modifier)}"
        data-oq-bind="${escapeHtml(bind)}-tooltip"
        aria-hidden="true"
      >
        <rect class="oq-hp-tech-tooltip-panel" x="${x}" y="${y}" width="${width}" height="${height}" rx="12" />
        <circle class="oq-hp-tech-tooltip-accent" cx="${badgeCx}" cy="${badgeCy}" r="11.5" />
        ${renderTechTooltipIcon(icon, badgeCx, badgeCy)}
        <text class="oq-hp-tech-tooltip-kicker" x="${x + 48}" y="${y + 16}">${escapeHtml(kicker)}</text>
        <text class="oq-hp-tech-tooltip-detail" x="${x + 48}" y="${y + 32}"${detailBindAttr}>${escapeHtml(detail)}</text>
        <path class="oq-hp-tech-tooltip-pointer" d="${pointerPath}" />
      </g>
    `;
  }

  export function renderTechWaterReading({ bind, x, y, width, value, label, ariaLabel = "", align = "start" }) {
    const resolvedAriaLabel = ariaLabel || `${label} temperatuur ${value}`;
    const isEndAligned = align === "end";
    const isCenterAligned = align === "center";
    const textAnchor = isCenterAligned ? "middle" : isEndAligned ? "end" : "start";
    const textX = isCenterAligned ? x + (width / 2) : isEndAligned ? x + width - 2 : x + 2;
    return `
      <g
        class="oq-hp-tech-water-reading"
        data-oq-bind="${escapeHtml(bind)}-reading"
        data-oq-tooltip-target="${escapeHtml(bind)}"
        tabindex="0"
        aria-label="${escapeHtml(resolvedAriaLabel)}"
      >
        <rect class="oq-hp-tech-water-reading-hit" x="${x}" y="${y}" width="${width}" height="18" rx="9" fill="rgba(255,255,255,0.001)" stroke="none" />
        <text class="oq-hp-tech-water-reading-value" x="${textX}" y="${y + 13}" text-anchor="${textAnchor}" data-oq-bind="${escapeHtml(bind)}-value">${escapeHtml(value)}</text>
      </g>
    `;
  }

  export function renderTechReadingWithTooltip({ tooltip, ...reading }) {
    return `${renderTechWaterReading(reading)}${renderTechTooltip({ bind: reading.bind, ...tooltip })}`;
  }

  export function renderTechHotspotWithTooltip({ bind, ariaLabel, x, y, width, height, rx, tooltip }) {
    return `
      <g class="oq-hp-tech-hotspot" data-oq-bind="${escapeHtml(bind)}-trigger" data-oq-tooltip-target="${escapeHtml(bind)}" tabindex="0" aria-label="${escapeHtml(ariaLabel)}">
        <rect class="oq-hp-tech-hotspot-hit" x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" />
      </g>
      ${renderTechTooltip({ bind, ...tooltip })}
    `;
  }

  export function renderTechTooltipTriggerGroup({ bind, className, active, ariaLabel, attrs = "", activeClass = "is-active", content, tooltip }) {
    const resolvedClassName = [className, active && activeClass ? activeClass : ""].filter(Boolean).join(" ");
    return `
      <g class="${resolvedClassName}" data-oq-bind="${escapeHtml(bind)}" data-oq-tooltip-target="${escapeHtml(bind)}" tabindex="${active ? "0" : "-1"}" aria-label="${escapeHtml(ariaLabel)}" ${attrs}>
        ${content}
      </g>
      ${renderTechTooltip({ bind, ...tooltip })}
    `;
  }

  export function renderHeatPumpFooterItem({ label, value, bind, ariaLabel = "", valueBind = "", labelBind = "", labelMarkup = "" }) {
    return `
      <div class="oq-hp-tech-footer-item">
        <span${ariaLabel ? ` aria-label="${escapeHtml(ariaLabel)}"` : ""}${labelBind ? ` data-oq-bind="${escapeHtml(labelBind)}"` : ""}>${labelMarkup || escapeHtml(label)}</span>
        <strong${valueBind ? ` data-oq-bind="${escapeHtml(valueBind)}"` : ""}>${escapeHtml(value)}</strong>
      </div>
    `;
  }

  export function formatHeatPumpReading(key, decimals, fallbackUnit = "") {
    const numeric = getEntityNumericValue(key);
    if (Number.isNaN(numeric)) {
      return getEntityStateText(key);
    }
    return formatNumericState(numeric, decimals, getEntityDisplayUnit(key, fallbackUnit));
  }

  export function getHeatPumpFlowKeys(flowKey) {
    const hpGeneration = String(getEntityValue("hpGeneration") || "").trim();
    const keys = hpGeneration === "V1" && flowKey === "hp1Flow"
      ? ["flowSelected", "controllerFlow", "flowLocal", flowKey]
      : [flowKey];
    return keys.filter((key, index) => key && keys.indexOf(key) === index);
  }

  export function getHeatPumpFlowReading(flowKey) {
    const flowKeys = getHeatPumpFlowKeys(flowKey);
    const fallbackKey = flowKeys.find((key) => hasEntity(key)) || flowKey;

    for (const candidateKey of flowKeys) {
      if (!hasEntity(candidateKey)) {
        continue;
      }

      const flowValue = getEntityNumericValue(candidateKey);
      if (!Number.isNaN(flowValue)) {
        return {
          key: candidateKey,
          value: flowValue,
          text: formatNumericState(flowValue, 0, getEntityDisplayUnit(candidateKey, "L/h")),
        };
      }
    }

    return {
      key: fallbackKey,
      value: Number.NaN,
      text: getEntityStateText(fallbackKey),
    };
  }

  export function buildHeatPumpSchematicModel(title, keys, accent, mode, defrostActive, failures, running) {
    const freqValue = getEntityNumericValue(keys.freq);
    const freqText = Number.isNaN(freqValue) ? "—" : String(Math.round(freqValue));
    const powerValue = getEntityNumericValue(keys.power);
    const heatValue = getEntityNumericValue(keys.heat);
    const coolingValue = getEntityNumericValue(keys.cooling);
    const flowReading = getHeatPumpFlowReading(keys.flow);
    const flowValue = flowReading.value;
    const thermalValue = mode === "Koelen" ? coolingValue : heatValue;
    const animated = running || (!Number.isNaN(freqValue) && freqValue > 0) || (!Number.isNaN(powerValue) && powerValue > 80) || (!Number.isNaN(heatValue) && heatValue > 150);
    const waterFlowActive = !Number.isNaN(flowValue) && flowValue > 0;
    const statusText = getHeatPumpPanelStatusLabel(mode, animated);
    const suctionSuperheatStatusRaw = hasEntity(keys.suctionSuperheatStatus)
      ? getEntityStateText(keys.suctionSuperheatStatus, "")
      : "";
    const suctionSuperheatWarningActive = suctionSuperheatStatusRaw === "Low - floodback risk"
      || suctionSuperheatStatusRaw === "Critical low - wet suction likely";
    const suctionSuperheatWarningText = suctionSuperheatStatusRaw === "Critical low - wet suction likely"
      ? "Superheat kritisch laag"
      : suctionSuperheatStatusRaw === "Low - floodback risk"
        ? "Superheat laag"
        : "";
    const failureText = failures === "Geen actieve storingen"
      ? (suctionSuperheatWarningText || "Geen storingen")
      : failures;
    const warningActive = failureText !== "Geen storingen" || suctionSuperheatWarningActive;
    const defrostText = defrostActive ? "Actief" : "Uit";
    const waterOutText = formatHeatPumpReading(keys.waterOut, 1, "°C");
    const waterInText = formatHeatPumpReading(keys.waterIn, 1, "°C");
    const flowText = flowReading.text;
    const evaporatorCoilTempText = formatHeatPumpReading(keys.evaporatorCoilTemp, 1, "°C");
    const innerCoilTempText = formatHeatPumpReading(keys.innerCoilTemp, 1, "°C");
    const outsideTempText = formatHeatPumpReading(keys.outsideTemp, 1, "°C");
    const dischargePressureText = formatHeatPumpReading(keys.condenserPressure, 1, "bar");
    const dischargeTempText = formatHeatPumpReading(keys.dischargeTemp, 1, "°C");
    const suctionPressureText = formatHeatPumpReading(keys.evaporatorPressure, 1, "bar");
    const suctionTempText = formatHeatPumpReading(keys.returnTemp, 1, "°C");
    const suctionSuperheatText = formatHeatPumpReading(keys.suctionSuperheat, 1, "K");
    const dischargeSuperheatText = formatHeatPumpReading(keys.dischargeSuperheat, 1, "K");
    const suctionSuperheatStatusText = suctionSuperheatStatusRaw || "—";
    const bottomPlateActive = isEntityActive(keys.bottomPlate);
    const crankcaseActive = isEntityActive(keys.crankcase);
    const eevPositionText = formatComponentPositionLabel(keys.eev);
    const fourWayPositionText = formatFourWayPositionLabel(keys.fourWay);
    const powerText = formatNumericState(powerValue, 0, "W");
    const heatText = formatNumericState(thermalValue, 0, "W");
    const efficiencyValue = mode === "Koelen"
      ? ((!Number.isNaN(powerValue) && powerValue >= 5.0 && !Number.isNaN(coolingValue)) ? (coolingValue / powerValue) : Number.NaN)
      : getEntityNumericValue(keys.cop);
    const efficiencyText = formatNumericState(efficiencyValue, 1);
    const efficiencyLabel = mode === "Koelen" ? "COP (EER)" : "COP";
    const heatLabel = mode === "Koelen" ? "Koelafgifte" : "Warmteafgifte";
    const heatDescription = mode === "Koelen" ? "afgegeven koeling" : "afgegeven warmte";
    const fanRpmValue = getEntityNumericValue(keys.fanSpeed);
    const fanRunning = !Number.isNaN(fanRpmValue) && fanRpmValue > 0;
    const fanRpmText = Number.isNaN(fanRpmValue)
      ? "—"
      : `${Math.round(fanRpmValue)} rpm`;
    const reverseCycle = defrostActive || mode === "Koelen";
    const leftExchangerTitle = reverseCycle ? "Verdamper" : "Condensor";
    const rightExchangerTitle = reverseCycle ? "Condensor" : "Verdamper";
    const supplyLineTone = reverseCycle ? "return" : "supply";
    const returnLineTone = reverseCycle ? "supply" : "return";
    const lineJumpLeft = 360;
    const lineJumpRight = 384;
    const lineJumpPeakY = 214;
    const hotgasValveHeat = "M278 220 C278 228 273 234 266 234";
    const hotgasValveCool = "M278 220 C278 228 283 234 290 234";
    const suctionValveHeat = "M290 234 C284 234 279 240 278 248";
    const suctionValveCool = "M266 234 C272 234 277 240 278 248";
    const hotgasExternal = reverseCycle
      ? `M290 234 H${lineJumpLeft} Q372 ${lineJumpPeakY} ${lineJumpRight} 234 H436 V134 H480`
      : "M266 234 H180 V134 H164";
    const suctionExternal = reverseCycle
      ? "M164 134 H180 V234 H266"
      : `M480 134 H436 V234 H${lineJumpRight} Q372 ${lineJumpPeakY} ${lineJumpLeft} 234 H290`;
    const compressorDischarge = "M296 150 H278 V220";
    const compressorSuction = "M278 248 V268 H372 V150 H356";
    const liquidPath = reverseCycle ? "M480 294 H337" : "M164 294 H315";
    const expansionPath = reverseCycle ? "M315 294 H164" : "M337 294 H480";
    const boardClass = [
      "oq-hp-schematic-board",
      `oq-hp-schematic-board--${accent}`,
      animated ? "is-running" : "",
      waterFlowActive ? "is-water-flowing" : "",
      fanRunning ? "is-fan-running" : "",
      reverseCycle ? "is-reversed" : "",
      defrostActive ? "is-defrost" : "",
    ].filter(Boolean).join(" ");

    return {
      title,
      boardClass,
      statusText,
      failureText,
      warningActive,
      waterFlowActive,
      defrostActive,
      defrostText,
      mode,
      reverseCycle,
      compressorFreqText: `${freqText} Hz`,
      leftExchangerTitle,
      rightExchangerTitle,
      supplyLineTone,
      returnLineTone,
      waterOutText,
      waterInText,
      flowText,
      evaporatorCoilTempText,
      innerCoilTempText,
      outsideTempText,
      dischargePressureText,
      dischargeTempText,
      suctionPressureText,
      suctionTempText,
      suctionSuperheatText,
      dischargeSuperheatText,
      suctionSuperheatStatusText,
      bottomPlateActive,
      crankcaseActive,
      eevPositionText,
      fourWayPositionText,
      powerText,
      heatText,
      heatLabel,
      heatDescription,
      efficiencyText,
      efficiencyLabel,
      fanRpmText,
      hotgasValveHeat,
      hotgasValveCool,
      suctionValveHeat,
      suctionValveCool,
      leftValveTone: reverseCycle ? "suction" : "hotgas",
      rightValveTone: reverseCycle ? "hotgas" : "suction",
      pipes: {
        supply: { tone: supplyLineTone, d: "M104 134 H18", animated: true, flowVariant: "water" },
        return: { tone: returnLineTone, d: "M18 294 H104", animated: true, flowVariant: "water" },
        compressorDischarge: { tone: "hotgas", d: compressorDischarge, animated: true, flowVariant: "default" },
        hotgasExternal: { tone: "hotgas", d: hotgasExternal, animated: true, flowVariant: "default" },
        liquid: { tone: "liquid", d: liquidPath, animated: true, flowVariant: "default" },
        expansion: { tone: "expansion", d: expansionPath, animated: true, flowVariant: "default" },
        suctionExternal: { tone: "suction", d: suctionExternal, animated: true, flowVariant: "default" },
        suctionCompressor: { tone: "suction", d: compressorSuction, animated: true, flowVariant: "default" },
      },
    };
  }

  export function renderHeatPumpSchematic(model) {
    const svgIdBase = String(model.title || "hp").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const condWaterHeatGradientId = `${svgIdBase}-cond-water-heat`;
    const condWaterCoolGradientId = `${svgIdBase}-cond-water-cool`;
    const condRefGradientId = `${svgIdBase}-cond-ref`;
    const activeCondWaterGradientId = model.reverseCycle ? condWaterCoolGradientId : condWaterHeatGradientId;
    const footerItems = [
      { label: "Werkmodus", value: model.mode, valueBind: "footer-mode" },
      { label: "Stroomverbruik", ariaLabel: "Stroomverbruik", labelMarkup: "Stroom<br>verbruik", value: model.powerText, valueBind: "footer-power" },
      { label: model.heatLabel, ariaLabel: model.heatLabel, labelBind: "footer-heat-label", labelMarkup: model.heatLabel === "Koelafgifte" ? "Koel<br>afgifte" : "Warmte<br>afgifte", value: model.heatText, valueBind: "footer-heat" },
      { label: model.efficiencyLabel, labelBind: "footer-efficiency-label", value: model.efficiencyText, valueBind: "footer-efficiency" },
    ];
    const readings = [
      { bind: "flow", x: 52, y: 308, width: 72, value: model.flowText, label: "Flow", ariaLabel: `Flow ${model.flowText}`, align: "center", tooltip: { modifier: model.returnLineTone, icon: "flow", x: 110, y: 276, width: 126, kicker: "Flow", detail: "CV-circuit", direction: "left" } },
      { bind: "discharge-pressure", x: 218, y: 138, width: 50, value: model.dischargePressureText, label: "Persdruk", ariaLabel: `Persdruk ${model.dischargePressureText}`, align: "end", tooltip: { modifier: "warm", icon: "pressure", x: 82, y: 120, width: 118, kicker: "Druk", detail: "Perszijde", direction: "right" } },
      { bind: "discharge-temp", x: 218, y: 166, width: 50, value: model.dischargeTempText, label: "Perstemperatuur", ariaLabel: `Perstemperatuur ${model.dischargeTempText}`, align: "end", tooltip: { modifier: "warm", icon: "temperature", x: 80, y: 174, width: 142, kicker: "Temperatuur", detail: "Perszijde", direction: "right" } },
      { bind: "suction-pressure", x: 378, y: 138, width: 50, value: model.suctionPressureText, label: "Zuigdruk", ariaLabel: `Zuigdruk ${model.suctionPressureText}`, tooltip: { modifier: "component", icon: "pressure", x: 438, y: 120, width: 118, kicker: "Druk", detail: "Zuigzijde", direction: "left" } },
      { bind: "suction-temp", x: 378, y: 166, width: 50, value: model.suctionTempText, label: "Zuigtemperatuur", ariaLabel: `Zuigtemperatuur ${model.suctionTempText}`, tooltip: { modifier: "component", icon: "temperature", x: 414, y: 174, width: 142, kicker: "Temperatuur", detail: "Zuigzijde", direction: "left" } },
      { bind: "inner-coil-temp", x: 120, y: 166, width: 52, value: model.innerCoilTempText, label: "Inner coil temperatuur", ariaLabel: `Inner coil temperatuur ${model.innerCoilTempText}`, align: "center", tooltip: { modifier: "component", icon: "temperature", x: 174, y: 148, width: 132, kicker: "Temperatuur", detail: "Condensor", direction: "right" } },
      { bind: "evaporator-temp", x: 484, y: 166, width: 52, value: model.evaporatorCoilTempText, label: "Verdampertemperatuur", ariaLabel: `Verdampertemperatuur ${model.evaporatorCoilTempText}`, align: "center", tooltip: { modifier: "component", icon: "temperature", x: 344, y: 148, width: 132, kicker: "Temperatuur", detail: "Verdamper", direction: "right" } },
      { bind: "outside-temp", x: 548, y: 110, width: 48, value: model.outsideTempText, label: "Buitentemperatuur", ariaLabel: `Buitentemperatuur ${model.outsideTempText}`, align: "center", tooltip: { modifier: "component", icon: "temperature", x: 424, y: 92, width: 136, kicker: "Temperatuur", detail: "Buitenlucht", direction: "right" } },
      { bind: "fan-speed", x: 520, y: 258, width: 60, value: model.fanRpmText, label: "Ventilatorsnelheid", ariaLabel: `Ventilatorsnelheid ${model.fanRpmText}`, align: "center", tooltip: { modifier: "component", icon: "fan", x: 410, y: 236, width: 118, kicker: "Ventilator", detail: "Toerental", direction: "right" } },
      { bind: "supply", x: 22, y: 114, width: 58, value: model.waterOutText, label: "Aanvoer", tooltip: { modifier: model.supplyLineTone, icon: "temperature", x: 96, y: 96, width: 124, kicker: "Temperatuur", detail: "Aanvoer", direction: "left" } },
      { bind: "return", x: 22, y: 274, width: 58, value: model.waterInText, label: "Retour", tooltip: { modifier: model.returnLineTone, icon: "temperature", x: 96, y: 252, width: 124, kicker: "Temperatuur", detail: "Retour", direction: "left" } },
    ];
    const hotspots = [
      { bind: "compressor-freq", ariaLabel: `Compressorfrequentie ${model.compressorFreqText}`, x: 300, y: 148, width: 52, height: 26, rx: 12, tooltip: { modifier: "component", icon: "fan", x: 366, y: 130, width: 136, kicker: "Frequentie", detail: "Compressor", direction: "left" } },
      { bind: "fourway", ariaLabel: `4-wegklep, ${model.fourWayPositionText}`, x: 252, y: 208, width: 52, height: 52, rx: 16, tooltip: { modifier: "component", icon: "fourway", x: 308, y: 198, width: 196, kicker: "4-wegklep", detail: model.fourWayPositionText, detailBind: "fourway-detail", direction: "left" } },
      { bind: "eev", ariaLabel: `Expansieventiel, ${model.eevPositionText}`, x: 301, y: 275, width: 50, height: 38, rx: 12, tooltip: { modifier: "component", icon: "eev", x: 340, y: 252, width: 202, kicker: "Expansieventiel", detail: model.eevPositionText, detailBind: "eev-detail", direction: "left" } },
    ];
    return `
      <div class="${escapeHtml(model.boardClass)}" data-oq-hp-board="${escapeHtml(model.title)}">
        <div class="oq-hp-tech-shell">
          <div class="oq-hp-tech-visual">
            <svg class="oq-hp-tech-svg" viewBox="0 0 620 360" role="img" aria-label="${escapeHtml(model.title)} technische schematic">
              <defs>
              <linearGradient id="${escapeHtml(condWaterHeatGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#ef4444" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${escapeHtml(condWaterCoolGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#ef4444" stop-opacity="0.92"></stop>
                <stop offset="18%" stop-color="#f87171" stop-opacity="0.82"></stop>
                <stop offset="50%" stop-color="#8b8fdb" stop-opacity="0.38"></stop>
                <stop offset="82%" stop-color="#60a5fa" stop-opacity="0.82"></stop>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.92"></stop>
              </linearGradient>
              <linearGradient id="${escapeHtml(condRefGradientId)}" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stop-color="#16a34a" stop-opacity="0.12"></stop>
                <stop offset="52%" stop-color="#86efac" stop-opacity="0.08"></stop>
                <stop offset="100%" stop-color="#4ade80" stop-opacity="0.22"></stop>
              </linearGradient>
              </defs>
              <rect class="oq-hp-tech-frame" x="18" y="28" width="584" height="314" rx="22" />

            <text class="oq-hp-tech-title" x="134" y="76" data-oq-bind="left-exchanger-title">${escapeHtml(model.leftExchangerTitle)}</text>
            <text class="oq-hp-tech-title" x="326" y="76">Compressor</text>
            <text class="oq-hp-tech-title" x="510" y="76" data-oq-bind="right-exchanger-title">${escapeHtml(model.rightExchangerTitle)}</text>

            <g class="oq-hp-tech-condensor">
              <rect class="oq-hp-tech-condensor-shell" x="104" y="118" width="60" height="192" rx="18" />
              <rect class="oq-hp-tech-condensor-water" x="112" y="124" width="20" height="180" rx="10" fill="url(#${escapeHtml(activeCondWaterGradientId)})" data-oq-bind="cond-water" />
              <rect class="oq-hp-tech-condensor-ref-column" x="136" y="124" width="20" height="180" rx="10" fill="url(#${escapeHtml(condRefGradientId)})" />
              <path class="oq-hp-tech-condensor-divider" d="M134 128 V300" />
            </g>

            <g class="oq-hp-tech-compressor">
              <rect class="oq-hp-tech-compressor-body" x="306" y="118" width="40" height="70" rx="17" />
              <rect class="oq-hp-tech-compressor-port" x="296" y="140" width="10" height="20" rx="5" />
              <rect class="oq-hp-tech-compressor-port" x="346" y="140" width="10" height="20" rx="5" />
              <path class="oq-hp-tech-compressor-lines" d="M316 134 H336 M316 148 H336 M316 162 H336" />
              <text class="oq-hp-tech-compressor-freq" x="326" y="166" data-oq-bind="compressor-freq">${escapeHtml(model.compressorFreqText)}</text>
            </g>

            <g class="oq-hp-tech-4way">
              <rect class="oq-hp-tech-4way-body" x="264" y="220" width="28" height="28" rx="9" />
              <rect class="oq-hp-tech-4way-actuator" x="259" y="229" width="5" height="10" rx="2.5" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${model.leftValveTone}" cx="266" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--hotgas" cx="278" cy="220" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--${model.rightValveTone}" cx="290" cy="234" r="3.2" />
              <circle class="oq-hp-tech-4way-port oq-hp-tech-4way-port--suction" cx="278" cy="248" r="3.2" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--hotgas" d="${escapeHtml(model.hotgasValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--heat oq-hp-tech-4way-route--suction" d="${escapeHtml(model.suctionValveHeat)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--hotgas" d="${escapeHtml(model.hotgasValveCool)}" />
              <path class="oq-hp-tech-4way-route oq-hp-tech-4way-route--cool oq-hp-tech-4way-route--suction" d="${escapeHtml(model.suctionValveCool)}" />
            </g>

            <g class="oq-hp-tech-valve">
              <rect class="oq-hp-tech-eev-mask" x="311" y="283" width="30" height="22" rx="4" />
              <polygon class="oq-hp-tech-eev-shape" points="315,284 326,294 315,304" />
              <polygon class="oq-hp-tech-eev-shape" points="337,284 326,294 337,304" />
            </g>

            <g class="oq-hp-tech-evaporator">
              <rect class="oq-hp-tech-evaporator-shell" x="480" y="118" width="60" height="192" rx="18" />
              <path class="oq-hp-tech-evaporator-lines" d="M492 130 H526 M492 142 H526 M492 154 H526 M492 166 H526 M492 178 H526 M492 190 H526 M492 202 H526 M492 214 H526 M492 226 H526 M492 238 H526 M492 250 H526 M492 262 H526 M492 274 H526 M492 286 H526 M492 298 H526" />
            </g>

            <g class="oq-hp-tech-fan">
              <circle class="oq-hp-tech-fan-ring" cx="550" cy="214" r="34" />
              <circle class="oq-hp-tech-fan-core" cx="550" cy="214" r="8" />
              <g class="oq-hp-tech-fan-blades">
                <path d="M550 180 C561 192 562 203 550 214 C538 203 539 192 550 180 Z" />
                <path d="M584 214 C572 225 561 226 550 214 C561 202 572 203 584 214 Z" />
                <path d="M550 248 C539 236 538 225 550 214 C562 225 561 236 550 248 Z" />
                <path d="M516 214 C528 203 539 202 550 214 C539 226 528 225 516 214 Z" />
              </g>
            </g>

            ${Object.entries(model.pipes).map(([id, pipe]) => renderTechPipeLayer(id.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), pipe.tone, pipe.d, pipe.animated, pipe.flowVariant)).join("")}

            <g class="oq-hp-tech-pump oq-hp-tech-pump--${model.returnLineTone}">
              <circle class="oq-hp-tech-pump-ring" cx="88" cy="294" r="16" />
              <circle class="oq-hp-tech-pump-core" cx="88" cy="294" r="3.5" />
              <path class="oq-hp-tech-pump-blade" d="M81 287 L96 294 L81 301 Z" />
            </g>

            ${readings.map(renderTechReadingWithTooltip).join("")}
            ${renderTechTooltipTriggerGroup({
              bind: "bottom-heater",
              className: "oq-hp-tech-bottom-heater",
              active: model.bottomPlateActive,
              ariaLabel: "Bottom plate heater actief",
              content: `
                <path class="oq-hp-tech-bottom-heater-glow" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
                <path class="oq-hp-tech-bottom-heater-core" d="M475 320 L485 314 L495 320 L505 314 L515 320 L525 314 L535 320 L545 314" />
              `,
              tooltip: { modifier: "warm", x: 372, y: 269, width: 210, kicker: "Verwarming", detail: "Bodemplaatverwarming aan" },
            })}
            ${renderTechTooltipTriggerGroup({
              bind: "crankcase-heater",
              className: "oq-hp-tech-crankcase-heater",
              active: model.crankcaseActive,
              ariaLabel: "Crank case heater actief",
              content: `
                <path class="oq-hp-tech-crankcase-heater-glow" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
                <path class="oq-hp-tech-crankcase-heater-core" d="M302 194 L310 189 L318 194 L326 189 L334 194 L342 189 L350 194" />
              `,
              tooltip: { modifier: "warm", x: 224, y: 142, width: 172, kicker: "Verwarming", detail: "Carterverwarming aan" },
            })}
            ${renderTechTooltipTriggerGroup({
              bind: "defrost-badge",
              className: "oq-hp-tech-defrost-badge",
              active: model.defrostActive,
              activeClass: "",
              ariaLabel: model.defrostActive ? "Defrost actief" : "Defrost uit",
              attrs: 'transform="translate(532 288)"',
              content: `
                <circle class="oq-hp-tech-defrost-hit" cx="0" cy="0" r="12" />
                <g class="oq-hp-tech-defrost-icon">
                  <path class="oq-hp-tech-defrost-glyph" d="M16.46 12V10.56L18.46 9.43L20.79 10.05L21.31 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12V7.38L8.5 8.82L6.5 7.69L5.92 5.36L4 5.88L4.47 7.65L2.7 8.12L3.22 10.05L5.55 9.43L7.55 10.56V12H2V13H22V12H16.46M9.5 12V10.56L12 9.11L14.5 10.56V12H9.5" />
                  <g class="oq-hp-tech-defrost-drips">
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--left" d="M8 17.85C8 19.04 7.11 20 6 20S4 19.04 4 17.85C4 16.42 6 14 6 14S8 16.42 8 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--right" d="M20 17.85C20 19.04 19.11 20 18 20S16 19.04 16 17.85C16 16.42 18 14 18 14S20 16.42 20 17.85Z" />
                    <path class="oq-hp-tech-defrost-drip oq-hp-tech-defrost-drip--center" d="M14 20.85C14 22.04 13.11 23 12 23S10 22.04 10 20.85C10 19.42 12 17 12 17S14 19.42 14 20.85Z" />
                  </g>
                  <g class="oq-hp-tech-defrost-mists">
                    <g transform="translate(6 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--left">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.18" cy="0.34" r="0.58" />
                        <circle cx="1.16" cy="0.38" r="0.54" />
                      </g>
                    </g>
                    <g transform="translate(12 23.4)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--center">
                        <circle cx="0" cy="0" r="1.08" />
                        <circle cx="-1.42" cy="0.42" r="0.66" />
                        <circle cx="1.38" cy="0.46" r="0.62" />
                      </g>
                    </g>
                    <g transform="translate(18 20.45)">
                      <g class="oq-hp-tech-defrost-mist oq-hp-tech-defrost-mist--right">
                        <circle cx="0" cy="0" r="0.92" />
                        <circle cx="-1.16" cy="0.38" r="0.54" />
                        <circle cx="1.18" cy="0.34" r="0.58" />
                      </g>
                    </g>
                  </g>
                </g>
              `,
              tooltip: { modifier: "return", icon: "defrost", x: 398, y: 266, width: 118, kicker: "Defrost", detail: "Actief", direction: "left" },
            })}

            ${hotspots.map(renderTechHotspotWithTooltip).join("")}

            </svg>
          </div>
          <div class="oq-hp-tech-footer">
            ${footerItems.map(renderHeatPumpFooterItem).join("")}
          </div>
        </div>
      </div>
    `;
  }

  export function renderHeatPumpPanel(title, keys, accent, emphasis = "normal", layoutAction = null) {
    if (!hasEntity(keys.power)) {
      return "";
    }
    const runtime = getHeatPumpRuntimeModel(title, keys, accent);
    const { mode, defrostActive, running, thermalKey } = runtime;
    const schematicModel = runtime.schematic;

    if (state.hpVisualMode === "schematic") {
      return `
        <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)} oq-overview-hp--${escapeHtml(emphasis)}" data-oq-hp-panel="${escapeHtml(title)}">
          <div class="oq-overview-hp-head">
            <div class="oq-overview-hp-head-title">
              ${renderHeatPumpPanelTitle(title, layoutAction)}
            </div>
            <div class="oq-overview-hp-head-side">
              ${renderHeatPumpPanelStatus(mode, running, schematicModel.warningActive, schematicModel.failureText)}
            </div>
          </div>
          ${renderHeatPumpSchematic(schematicModel)}
        </section>
      `;
    }

    return `
      <section class="oq-overview-hp oq-overview-hp--${escapeHtml(accent)} oq-overview-hp--${escapeHtml(emphasis)}" data-oq-hp-panel="${escapeHtml(title)}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>${escapeHtml(title)}</h3>
          </div>
          ${renderHeatPumpPanelStatus(mode, running, schematicModel.warningActive, schematicModel.failureText)}
        </div>
        <div class="oq-overview-hp-stats">
          ${renderOverviewStatCards([
            { key: keys.power, label: "Stroomverbruik", tone: "blue", note: "elektrisch verbruik" },
            { key: thermalKey, label: schematicModel.heatLabel, tone: "orange", note: schematicModel.heatDescription },
            { label: schematicModel.efficiencyLabel, value: schematicModel.efficiencyText, tone: "green", note: "actueel" },
          ])}
        </div>
        <div class="oq-overview-hp-meta">
          <div class="oq-overview-hp-meta-chip">
            <span>Werkmodus</span>
            <strong>${escapeHtml(mode)}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Comp. freq</span>
            <strong>${escapeHtml(getEntityStateText(keys.freq))}</strong>
          </div>
          <div class="oq-overview-hp-meta-chip">
            <span>Defrost</span>
            <strong>${defrostActive ? "Actief" : "Uit"}</strong>
          </div>
          ${hasEntity(keys.suctionSuperheat) ? `
            <div class="oq-overview-hp-meta-chip">
              <span>Suction SH</span>
              <strong>${escapeHtml(schematicModel.suctionSuperheatText)}</strong>
            </div>
          ` : ""}
          ${hasEntity(keys.suctionSuperheatStatus) ? `
            <div class="oq-overview-hp-meta-chip">
              <span>SH status</span>
              <strong>${escapeHtml(schematicModel.suctionSuperheatStatusText)}</strong>
            </div>
          ` : ""}
        </div>
        <div class="oq-overview-temps-list">
          ${renderTempRow("Water in", keys.waterIn)}
          ${renderTempRow("Water out", keys.waterOut)}
        </div>
      </section>
    `;
  }

  export function shouldRenderBoilerPanel() {
    return isEntityActive("boilerCvAssistEnabled") && hasEntity("boilerHeatPower");
  }

  export function getBoilerReturnTemperatureKey() {
    const installationTopology = typeof getInstallationTopology === "function" ? getInstallationTopology() : "";
    if (installationTopology !== "single" && hasEntity("hp2WaterOut")) {
      return "hp2WaterOut";
    }
    return "hp1WaterOut";
  }

  export function getBoilerFlowKey() {
    const installationTopology = typeof getInstallationTopology === "function" ? getInstallationTopology() : "";
    if (installationTopology !== "single" && hasEntity("hp2Flow")) {
      return "hp2Flow";
    }
    return "hp1Flow";
  }

  export function getBoilerPanelModel() {
    const heatValue = getEntityNumericValue("boilerHeatPower");
    const flowValue = getEntityNumericValue(getBoilerFlowKey());
    const active = hasEntity("boilerActive")
      ? isEntityActive("boilerActive")
      : (!Number.isNaN(heatValue) && heatValue > 20);
    const flowActive = !Number.isNaN(flowValue) && flowValue > 0;
    const heatText = formatNumericState(heatValue, 0, "W");
    const flowText = formatNumericState(flowValue, 0, "L/h");
    const returnTempText = formatNumericState(getEntityNumericValue(getBoilerReturnTemperatureKey()), 1, "°C");
    const supplyTempText = formatNumericState(getEntityNumericValue("supplyTemp"), 1, "°C");
    const statusText = active ? "Aan" : "Uit";
    const statusCopy = active
      ? "Levert ondersteuning"
      : "Geen ondersteuning";
    const boardClass = [
      "oq-boiler-card",
      active ? "is-running" : "is-idle",
    ].filter(Boolean).join(" ");

    return {
      active,
      flowActive,
      heatText,
      flowText,
      returnTempText,
      supplyTempText,
      statusText,
      statusCopy,
      boardClass,
      flowPathClass: flowActive ? "is-flowing" : "is-static",
    };
  }

  export function getBoilerPanelRenderSignature(model = getBoilerPanelModel()) {
    return getRenderSignature({
      version: "boiler-visual-mode-v1",
      visualMode: state.hpVisualMode,
      boardClass: "oq-boiler-card",
    });
  }

  export function patchBoilerPanelRuntime(panel, model = getBoilerPanelModel()) {
    const card = panel.querySelector(".oq-boiler-card");
    if (card) {
      card.className = [
        "oq-boiler-card",
        model.active ? "is-running" : "is-idle",
        model.flowActive ? "is-flowing" : "is-static",
      ].join(" ");
    }
    const chip = panel.querySelector(".oq-overview-chip");
    if (chip) {
      chip.className = `oq-overview-chip oq-overview-chip--${model.active ? "active" : "neutral"}`;
      if (chip.textContent !== model.statusText) {
        chip.textContent = model.statusText;
      }
    }
    const supportBox = panel.querySelector(".oq-boiler-summary-box--support");
    if (supportBox) {
      supportBox.classList.toggle("is-active", model.active);
      supportBox.classList.toggle("is-idle", !model.active);
    }
    const supportValue = panel.querySelector(".oq-boiler-summary-box--support strong");
    if (supportValue && supportValue.textContent !== model.statusCopy) {
      supportValue.textContent = model.statusCopy;
    }
    const heatValue = panel.querySelector("[data-oq-boiler-heat-value]");
    if (heatValue && heatValue.textContent !== model.heatText) {
      heatValue.textContent = model.heatText;
    }
    panel.querySelectorAll("[data-oq-boiler-flow-value]").forEach((flowValue) => {
      if (flowValue.textContent !== model.flowText) {
        flowValue.textContent = model.flowText;
      }
    });
    const statusValue = panel.querySelector("[data-oq-boiler-status-value]");
    if (statusValue && statusValue.textContent !== model.statusCopy) {
      statusValue.textContent = model.statusCopy;
    }
    const returnTemp = panel.querySelector('[data-oq-bind="boiler-return-value"]');
    if (returnTemp && returnTemp.textContent !== model.returnTempText) {
      returnTemp.textContent = model.returnTempText;
    }
    const supplyTemp = panel.querySelector('[data-oq-bind="boiler-supply-value"]');
    if (supplyTemp && supplyTemp.textContent !== model.supplyTempText) {
      supplyTemp.textContent = model.supplyTempText;
    }
  }

  export function renderBoilerCompactPanel(model) {
    return `
      <section class="oq-overview-hp oq-overview-boiler oq-overview-boiler--compact" data-oq-boiler-panel data-render-signature="${escapeHtml(getBoilerPanelRenderSignature(model))}">
        <div class="oq-overview-hp-head">
          <div>
            <h3>CV-ketel / boiler</h3>
          </div>
          <span class="oq-overview-chip oq-overview-chip--${model.active ? "active" : "neutral"}">${escapeHtml(model.statusText)}</span>
        </div>
        <div class="oq-overview-hp-stats">
          <article class="oq-overview-stat oq-overview-stat--orange">
            <p>Warmteafgifte</p>
            <strong data-oq-boiler-heat-value>${escapeHtml(model.heatText)}</strong>
            <span>afgegeven warmte</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--blue">
            <p>Water in</p>
            <strong data-oq-bind="boiler-return-value">${escapeHtml(model.returnTempText)}</strong>
            <span>retour naar boiler</span>
          </article>
          <article class="oq-overview-stat oq-overview-stat--sky">
            <p>Water out</p>
            <strong data-oq-bind="boiler-supply-value">${escapeHtml(model.supplyTempText)}</strong>
            <span>naar het systeem</span>
          </article>
        </div>
      </section>
    `;
  }

  export function renderBoilerPanel() {
    if (!shouldRenderBoilerPanel()) {
      return "";
    }

    const model = getBoilerPanelModel();
    if (state.hpVisualMode !== "schematic") {
      return renderBoilerCompactPanel(model);
    }

    return `
      <section class="oq-overview-hp oq-overview-boiler" data-oq-boiler-panel data-render-signature="${escapeHtml(getBoilerPanelRenderSignature(model))}">
        <div class="${escapeHtml([model.boardClass, model.flowPathClass].filter(Boolean).join(" "))}">
          <div class="oq-boiler-card-main">
            <div class="oq-boiler-card-head">
              <div>
                <span class="oq-boiler-eyebrow">Ondersteuning</span>
                <h3>CV-ketel / boiler</h3>
              </div>
              <span class="oq-overview-chip oq-overview-chip--${model.active ? "active" : "neutral"}">${escapeHtml(model.statusText)}</span>
            </div>
            <p class="oq-boiler-copy">De boiler geeft ondersteuning wanneer de warmtepomp extra hulp nodig heeft.</p>
            <div class="oq-boiler-mini-schematic">
              <svg class="oq-boiler-mini-svg" viewBox="0 0 420 132" role="img" aria-label="Schematische weergave CV-ketel of boiler">
                <defs>
                  <linearGradient id="oq-boiler-card-body" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#111827"></stop>
                    <stop offset="62%" stop-color="#7f1d1d"></stop>
                    <stop offset="100%" stop-color="#fb923c"></stop>
                  </linearGradient>
                  <linearGradient id="oq-boiler-card-flame" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stop-color="#f97316"></stop>
                    <stop offset="48%" stop-color="#facc15"></stop>
                    <stop offset="100%" stop-color="#fee2e2"></stop>
                  </linearGradient>
                </defs>
                ${renderTechPipeLayer("boiler-return", "return", "M24 88 H166 C180 88 190 80 196 68", true, "water")}
                ${renderTechPipeLayer("boiler-supply", "supply", "M224 52 C232 40 244 36 258 36 H396", true, "water")}
                <g class="oq-boiler-card-unit">
                  <rect class="oq-boiler-card-unit-shell" x="176" y="26" width="68" height="82" rx="22" />
                  <rect class="oq-boiler-card-unit-core" x="190" y="40" width="40" height="54" rx="14" fill="url(#oq-boiler-card-body)" />
                  <path class="oq-boiler-card-coil" d="M199 54 H221 M199 68 H221 M199 82 H221" />
                  <g class="oq-boiler-card-flame" transform="translate(210 90)">
                    <path class="oq-boiler-card-flame-outer" fill="url(#oq-boiler-card-flame)" d="M0 14 C-12 6 -9 -6 -1 -17 C2 -9 11 -6 9 5 C16 2 18 12 11 17 C7 21 -5 20 0 14 Z" />
                    <path class="oq-boiler-card-flame-inner" d="M0 14 C-5 9 -3 3 2 -4 C2 4 8 6 6 12 C4 16 -2 16 0 14 Z" />
                  </g>
                </g>
                ${renderTechWaterReading({ bind: "boiler-return", x: 22, y: 70, width: 78, value: model.returnTempText, label: "Retour", ariaLabel: `Retour ${model.returnTempText}`, align: "start" })}
                ${renderTechTooltip({ bind: "boiler-return", modifier: "return", icon: "temperature", x: 82, y: 70, width: 124, kicker: "Temperatuur", detail: "Retour", direction: "left" })}
                ${renderTechWaterReading({ bind: "boiler-supply", x: 320, y: 16, width: 76, value: model.supplyTempText, label: "Aanvoer", ariaLabel: `Aanvoer ${model.supplyTempText}`, align: "end" })}
                ${renderTechTooltip({ bind: "boiler-supply", modifier: "supply", icon: "temperature", x: 294, y: 14, width: 124, kicker: "Temperatuur", detail: "Aanvoer", direction: "right" })}
              </svg>
              <div class="oq-boiler-summary-grid">
                <div class="oq-boiler-summary-box oq-boiler-summary-box--power">
                  <span>Geleverd vermogen</span>
                  <strong data-oq-boiler-heat-value>${escapeHtml(model.heatText)}</strong>
                </div>
                <div class="oq-boiler-summary-box oq-boiler-summary-box--support ${model.active ? "is-active" : "is-idle"}">
                  <span>Ondersteuning</span>
                  <strong data-oq-boiler-status-value>${escapeHtml(model.statusCopy)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  export function getHeatPumpPanels() {
    const installationTopology = typeof getInstallationTopology === "function" ? getInstallationTopology() : "";
    return HP_PANEL_CONFIGS.filter((panel) => {
      if (installationTopology === "single" && panel.title === "HP2") {
        return false;
      }
      return hasEntity(panel.keys.power);
    });
  }

  export function getEffectiveHpLayoutMode(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2 || state.hpVisualMode !== "schematic") {
      return "equal";
    }
    return state.hpLayoutMode === "focus-hp1" || state.hpLayoutMode === "focus-hp2" ? state.hpLayoutMode : "equal";
  }

  export function getHeatPumpPanelEmphasis(index, heatPumpPanels, layoutMode) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2) {
      return "normal";
    }
    if (layoutMode === "focus-hp1") {
      return index === 0 ? "focus" : "muted";
    }
    if (layoutMode === "focus-hp2") {
      return index === 1 ? "focus" : "muted";
    }
    return "normal";
  }

  export function getHeatPumpPanelLayoutAction(index, heatPumpPanels, layoutMode) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length < 2 || state.hpVisualMode !== "schematic") {
      return null;
    }

    const emphasis = getHeatPumpPanelEmphasis(index, heatPumpPanels, layoutMode);
    if (emphasis === "focus") {
      return { layout: "equal", label: "Toon beide" };
    }

    return {
      layout: index === 0 ? "focus-hp1" : "focus-hp2",
      label: "Vergroot",
    };
  }

  export function getHeatPumpGridLayoutVariant(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length !== 1) {
      return getEffectiveHpLayoutMode(heatPumpPanels);
    }
    return shouldRenderBoilerPanel() ? "equal" : "single";
  }

  export function renderMagnifyActionIcon(kind = "plus") {
    const path = kind === "minus"
      ? 'M15.5,14H14.71L14.43,13.73C15.41,12.59 16,11.11 16,9.5A6.5,6.5 0 0,0 9.5,3A6.5,6.5 0 0,0 3,9.5A6.5,6.5 0 0,0 9.5,16C11.11,16 12.59,15.41 13.73,14.43L14,14.71V15.5L19,20.5L20.5,19L15.5,14M9.5,14C7,14 5,12 5,9.5C5,7 7,5 9.5,5C12,5 14,7 14,9.5C14,12 12,14 9.5,14M7,9H12V10H7V9Z'
      : 'M15.5,14L20.5,19L19,20.5L14,15.5V14.71L13.73,14.43C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.43,13.73L14.71,14H15.5M9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14M12,10H10V12H9V10H7V9H9V7H10V9H12V10Z';
    return `
      <svg class="oq-overview-hp-card-action-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${path}" fill="currentColor"></path>
      </svg>
    `;
  }

  export function renderHeatPumpControlsInner(heatPumpPanels) {
    if (!Array.isArray(heatPumpPanels) || heatPumpPanels.length === 0) {
      return "";
    }

    return `
      <div class="oq-overview-hp-tools-head">
        <div class="oq-overview-hp-tools-copy">
          <h3>Warmtepompen</h3>
          ${renderHeatPumpSummary(heatPumpPanels)}
        </div>
        <div class="oq-overview-hp-tool-switches">
          <button class="oq-overview-hp-tool-chip${state.hpVisualMode === "schematic" ? " is-active" : ""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="schematic">Schematisch</button>
          <button class="oq-overview-hp-tool-chip${state.hpVisualMode === "compact" ? " is-active" : ""}" type="button" data-oq-action="select-hp-visual" data-hp-visual="compact">Compact</button>
        </div>
      </div>
    `;
  }

  export function patchHeatPumpControls(hpTools, heatPumpPanels) {
    if (!hpTools) {
      return false;
    }

    const copy = hpTools.querySelector(".oq-overview-hp-tools-copy");
    const schematicButton = hpTools.querySelector('[data-hp-visual="schematic"]');
    const compactButton = hpTools.querySelector('[data-hp-visual="compact"]');

    if (!copy || !schematicButton || !compactButton) {
      setInnerHtmlIfChanged(hpTools, renderHeatPumpControlsInner(heatPumpPanels));
      return true;
    }

    setInnerHtmlIfChanged(copy, `
      <h3>Warmtepompen</h3>
      ${renderHeatPumpSummary(heatPumpPanels)}
    `);
    schematicButton.classList.toggle("is-active", state.hpVisualMode === "schematic");
    compactButton.classList.toggle("is-active", state.hpVisualMode === "compact");
    return true;
  }

  function clampControlReplayPercent(value) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return 0;
    }
    return Math.max(0, Math.min(100, numeric));
  }

  function formatControlReplayInteger(key, fallback = "—") {
    if (!hasEntity(key)) {
      return fallback;
    }
    const numeric = getEntityNumericValue(key);
    if (!Number.isFinite(numeric)) {
      return fallback;
    }
    return String(Math.round(numeric));
  }

  function formatControlReplayPower(key, fallback = "—") {
    if (!hasEntity(key)) {
      return fallback;
    }
    const numeric = getEntityNumericValue(key);
    if (!Number.isFinite(numeric)) {
      return fallback;
    }
    const absolute = Math.abs(numeric);
    if (absolute >= 1000) {
      return `${(numeric / 1000).toFixed(1)} kW`;
    }
    return `${Math.round(numeric)} W`;
  }

  function formatControlReplayNumber(key, decimals = 1, unit = "", fallback = "—") {
    if (!hasEntity(key)) {
      return fallback;
    }
    const numeric = getEntityNumericValue(key);
    if (!Number.isFinite(numeric)) {
      return fallback;
    }
    return `${numeric.toFixed(decimals)}${unit ? ` ${unit}` : ""}`;
  }

  function formatControlReplayRuntimeHours(key, fallback = "—") {
    if (!hasEntity(key)) {
      return fallback;
    }
    const minutes = getEntityNumericValue(key);
    if (!Number.isFinite(minutes)) {
      return fallback;
    }
    return `${Math.round(minutes / 60)} u`;
  }

  function getControlReplayCoolingGuardLabel() {
    const stopReason = normalizeControlWorkingCoolingStopReason(getEntityStateText("coolingStopReasonCode", ""));
    const limiterReason = normalizeControlWorkingCoolingReason(getEntityStateText("coolingLimiterReasonCode", ""));
    const blockReason = getEntityStateText("coolingBlockReason", "");
    const reason = [stopReason, limiterReason, blockReason].find((value) => {
      const normalized = String(value || "").trim().toLowerCase();
      return normalized && normalized !== "none" && normalized !== "unknown";
    });
    if (!reason) {
      return "Dauwpuntbewaking";
    }
    return reason.replace(/_/g, " ");
  }

  function isControlReplayHpRunning(panel) {
    if (!panel || !panel.keys) {
      return false;
    }
    const mode = formatWorkingMode(getEntityStateText(panel.keys.mode, "Unknown"));
    const compressorLevel = getEntityNumericValue(panel.keys.freq);
    return mode === "Verwarmen"
      || mode === "Koelen"
      || isEntityActive(panel.keys.defrost)
      || (Number.isFinite(compressorLevel) && compressorLevel > 0);
  }

  const CONTROL_WORKING_COOLING_LIMITER_REASONS = Object.freeze({
    0: "inactive",
    1: "full",
    2: "projected_floor",
    3: "simmer",
    4: "falling_gap",
    5: "buffer_stop",
    6: "dew_stop",
    7: "fallback_floor",
    8: "restart_wait",
    9: "room_cap",
    10: "fallback_cap1",
    11: "level1_hold",
    12: "oil_return_hold",
    13: "oil_return_recovery",
    14: "capacity_cap",
  });

  const CONTROL_WORKING_COOLING_STOP_REASONS = Object.freeze({
    0: "inactive",
    1: "cooling_limiter",
    2: "dew_stop",
    3: "sensor_fallback",
    4: "projected_floor",
    5: "cooling_request_cleared",
    6: "flow_too_low",
    7: "sensor_fallback",
  });

  function normalizeControlWorkingCoolingReason(reasonCode) {
    const normalized = String(reasonCode || "").trim().toLowerCase();
    if (!normalized) {
      return "";
    }
    const numericCode = Number(normalized);
    if (Number.isInteger(numericCode)) {
      return CONTROL_WORKING_COOLING_LIMITER_REASONS[numericCode] || "unknown";
    }
    return normalized;
  }

  function normalizeControlWorkingCoolingStopReason(reasonCode) {
    const normalized = String(reasonCode || "").trim().toLowerCase();
    if (!normalized) {
      return "";
    }
    const numericCode = Number(normalized);
    if (Number.isInteger(numericCode)) {
      return CONTROL_WORKING_COOLING_STOP_REASONS[numericCode] || "unknown";
    }
    return normalized;
  }

  function isControlWorkingCoolingReasonInactive(reasonCode) {
    return ["", "full", "inactive", "none", "unknown", "unavailable"].includes(normalizeControlWorkingCoolingReason(reasonCode));
  }

  function isControlWorkingCoolingProtectionReason(reasonCode) {
    return [
      "dew_stop",
      "falling_gap",
      "projected_floor",
      "restart_wait",
      "sensor_fallback",
      "oil_return_recovery",
      "level1_hold",
    ].includes(normalizeControlWorkingCoolingReason(reasonCode));
  }

  function getControlReplayModeModel(heatPumpPanels) {
    const coolingRequest = isEntityActive("coolingRequestActive");
    const limiterReason = getEntityStateText("coolingLimiterReasonCode", "");
    const normalizedLimiterReason = normalizeControlWorkingCoolingReason(limiterReason);
    const coolingLimitedByLimiter = coolingRequest
      && normalizedLimiterReason
      && !isControlWorkingCoolingReasonInactive(normalizedLimiterReason);
    const coolingBlocked = coolingRequest && hasEntity("coolingPermitted") && !isEntityActive("coolingPermitted");
    const coolingProtection = coolingBlocked || (coolingLimitedByLimiter && isControlWorkingCoolingProtectionReason(normalizedLimiterReason));
    const coolingCapped = coolingLimitedByLimiter && !coolingProtection;
    const coolingMode = isCoolingOverviewActive() || coolingRequest;
    const hpRunningCount = heatPumpPanels.filter(isControlReplayHpRunning).length;
    const hp2Available = heatPumpPanels.some((panel) => panel.title === "HP2");
    const defrostActive = heatPumpPanels.some((panel) => isEntityActive(panel.keys.defrost));
    const boilerActive = hasEntity("boilerActive") && isEntityActive("boilerActive");
    return {
      title: "Control mode",
      copy: "De tab toont dezelfde eventlogica voor elke control mode.",
      hpRunningCount,
      hp2Available,
      defrostActive,
      boilerActive,
      coolingMode,
      coolingRequest,
      coolingBlocked,
      coolingLimited: coolingProtection || coolingCapped,
      coolingProtection,
      coolingCapped,
      coolingLimiterReason: normalizedLimiterReason || "inactive",
    };
  }

  function renderControlReplayMetric({ label, value, note, tone = "neutral", icon = "activity" }) {
    return `
      <article class="oq-control-replay-metric oq-control-replay-metric--${escapeHtml(tone)}">
        <span class="oq-control-replay-metric-icon">${renderOqIcon(icon, "oq-control-replay-icon")}</span>
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <p>${escapeHtml(note)}</p>
      </article>
    `;
  }

  function renderControlReplaySegment(segment) {
    const start = clampControlReplayPercent(segment.start);
    const end = clampControlReplayPercent(segment.end);
    const left = Math.min(start, end);
    const width = Math.max(1.4, Math.abs(end - start));
    const label = segment.label ? `<span>${escapeHtml(segment.label)}</span>` : "";
    return `
      <span
        class="oq-control-replay-segment oq-control-replay-segment--${escapeHtml(segment.tone || "neutral")}"
        style="--oq-replay-left:${left}%;--oq-replay-width:${width}%;"
      >${label}</span>
    `;
  }

  function renderControlReplayMarker(marker) {
    const left = clampControlReplayPercent(marker.at);
    const label = marker.label ? `<span>${escapeHtml(marker.label)}</span>` : "";
    return `
      <span
        class="oq-control-replay-marker oq-control-replay-marker--${escapeHtml(marker.tone || "neutral")}"
        style="--oq-replay-left:${left}%;"
      >${label}</span>
    `;
  }

  function renderControlReplayLane(lane) {
    const markers = Array.isArray(lane.markers) ? lane.markers : [];
    return `
      <div class="oq-control-replay-lane">
        <div class="oq-control-replay-lane-label">
          <strong>${escapeHtml(lane.label)}</strong>
          <span>${escapeHtml(lane.note || "")}</span>
        </div>
        <div class="oq-control-replay-track" aria-label="${escapeHtml(lane.label)}">
          ${(lane.segments || []).map(renderControlReplaySegment).join("")}
          ${markers.map(renderControlReplayMarker).join("")}
        </div>
      </div>
    `;
  }

  function renderControlReplayTimeAxis() {
    return `
      <div class="oq-control-replay-axis" aria-hidden="true">
        <span>06:00</span>
        <span>10:00</span>
        <span>14:00</span>
        <span>18:00</span>
        <span>22:00</span>
      </div>
    `;
  }

  function renderControlReplayTimeline(model) {
    return `
      <section class="oq-control-replay-timeline oq-control-replay-timeline--${escapeHtml(model.id)}">
        <div class="oq-control-replay-timeline-head">
          <span>${escapeHtml(model.eyebrow)}</span>
          <div>
            <h4>${escapeHtml(model.title)}</h4>
            <p>${escapeHtml(model.copy)}</p>
          </div>
        </div>
        ${renderControlReplayTimeAxis()}
        <div class="oq-control-replay-lanes">
          ${model.lanes.map(renderControlReplayLane).join("")}
        </div>
      </section>
    `;
  }

  function renderControlReplayChip(label, tone = "neutral", icon = "activity") {
    return `<span class="oq-control-replay-chip oq-control-replay-chip--${escapeHtml(tone)}">${renderOqIcon(icon, "oq-control-replay-chip-icon")}<span>${escapeHtml(label)}</span></span>`;
  }

  function renderControlReplayStateCard(card) {
    return `
      <article class="oq-control-replay-state-card">
        <div class="oq-control-replay-state-card-head">
          <strong>${escapeHtml(card.title)}</strong>
          <span>${escapeHtml(card.time)}</span>
        </div>
        <div class="oq-control-replay-mini-bars">
          ${(card.bars || []).map((bar) => `
            <div class="oq-control-replay-mini-bar-row">
              <span>${escapeHtml(bar.label)}</span>
              <i class="oq-control-replay-mini-bar oq-control-replay-mini-bar--${escapeHtml(bar.tone || "standby")}" style="--oq-mini-width:${clampControlReplayPercent(bar.width || 0)}%;"></i>
            </div>
          `).join("")}
        </div>
        <dl>
          ${(card.values || []).map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}
        </dl>
      </article>
    `;
  }

  function getControlReplayTransitionCards() {
    const hp1Heat = formatControlReplayPower("hp1Heat", "3.1 kW");
    const hp2Heat = formatControlReplayPower("hp2Heat", "2.7 kW");
    const hp1Cop = formatControlReplayNumber("hp1Cop", 1, "", "4.7");
    const hp2Cop = formatControlReplayNumber("hp2Cop", 1, "", "4.3");
    return [
      {
        title: "HP1 alleen",
        time: "10:00",
        bars: [
          { label: "HP1", tone: "running", width: 72 },
          { label: "HP2", tone: "standby", width: 12 },
        ],
        values: [
          ["Vermogen", hp1Heat],
          ["COP", hp1Cop],
        ],
      },
      {
        title: "HP1 + HP2",
        time: "10:15",
        bars: [
          { label: "HP1", tone: "running", width: 82 },
          { label: "HP2", tone: "running", width: 76 },
        ],
        values: [
          ["Vermogen", hp2Heat === "—" ? hp1Heat : `${hp1Heat} + ${hp2Heat}`],
          ["COP gem.", hp2Cop === "—" ? hp1Cop : `${hp1Cop} / ${hp2Cop}`],
        ],
      },
    ];
  }

  function getControlReplayCoolingCards() {
    return [
      {
        title: "Koelen toegestaan",
        time: "12:10",
        bars: [
          { label: "CM5", tone: "cooling", width: 92 },
          { label: "HP1", tone: "cooling", width: 68 },
        ],
        values: [
          ["Dauwpunt", formatControlReplayNumber("coolingDewPointSelected", 1, "C", "16.8 C")],
          ["Aanvoer", formatControlReplayNumber("coolingEffectiveMinSupplyTemp", 1, "C", "18.0 C")],
        ],
      },
      {
        title: "Koelen gepauzeerd",
        time: "12:32",
        bars: [
          { label: "CM5", tone: "cooling", width: 92 },
          { label: "HP1", tone: "standby", width: 18 },
        ],
        values: [
          ["Reden", getControlReplayCoolingGuardLabel()],
          ["Veilige min.", formatControlReplayNumber("coolingMinimumSafeSupplyTemp", 1, "C", "18.0 C")],
        ],
      },
    ];
  }

  function getControlReplayFocusFilters() {
    return [
      { id: "all", label: "Alles", copy: "Volledige log" },
      { id: "decision", label: "Besluiten", copy: "HP/CV keuze" },
      { id: "protection", label: "Bescherming", copy: "guards" },
      { id: "defrost", label: "Defrost", copy: "ontdooien" },
      { id: "starts", label: "Starts/stops", copy: "actuatoren" },
      { id: "service", label: "Service", copy: "handmatig" },
    ];
  }

  function normalizeControlReplayModeId(value) {
    const normalized = String(value || "").trim().toLowerCase();
    if (normalized.includes("cm100")) return "cm100";
    if (normalized.includes("cm98")) return "cm98";
    if (normalized.includes("cm5")) return "cm5";
    if (normalized.includes("cm3")) return "cm3";
    if (normalized.includes("cm2")) return "cm2";
    if (normalized.includes("cm1")) return "cm1";
    if (normalized.includes("cm0")) return "cm0";
    return "";
  }

  function formatControlReplayStrategyLabel() {
    const code = Math.round(getEntityNumericValue("strategyActiveCode"));
    if (code === 1) return "Cooling";
    if (code === 2) return "Heating Curve";
    if (code === 3) return "Power House";
    return getEntityStateText("strategy", "—");
  }

  function formatControlReplayRequestReason(options = {}) {
    const reason = getEntityStateText("requestReason", "");
    const normalized = String(reason || "").trim();
    if (normalized && normalized !== "unknown" && normalized !== "unavailable") {
      return normalized.replace(/_/g, " ");
    }
    const currentMode = normalizeControlReplayModeId(getEntityStateText("controlModeLabel", ""));
    if (options.preferCoolingGuard || currentMode === "cm5" || isEntityActive("coolingRequestActive")) {
      return getControlReplayCoolingGuardLabel();
    }
    return "live reason volgt";
  }

  function getControlReplayCounterValue(key, fallback = "—") {
    const value = formatControlReplayInteger(key, fallback);
    return value === "—" ? fallback : value;
  }

  function getControlReplayEventSortValue(episode) {
    const raw = String(episode && (episode.sortAt || episode.loggedAt) ? (episode.sortAt || episode.loggedAt) : "").trim();
    const match = /^(\d{1,2}):(\d{2})$/.exec(raw);
    if (!match) {
      return Number.MAX_SAFE_INTEGER;
    }
    return Number(match[1]) * 60 + Number(match[2]);
  }

  function getControlReplayEventStatus(episode) {
    if (episode && episode.severity === "attention") {
      return { label: "Aandacht nodig", tone: "attention" };
    }
    if (episode && episode.severity === "normal") {
      return { label: "Normaal", tone: "normal" };
    }
    if (episode && (episode.severity === "limited" || episode.focus === "protection" || episode.tone === "cooling")) {
      return { label: "Begrensd", tone: "limited" };
    }
    return { label: "Normaal", tone: "normal" };
  }

  function getControlReplayReasonCode(episode) {
    const reasonCodes = {
      "cm2-duo": "heat_demand_above_add_threshold",
      "defrost-group-winter": "defrost_ice_index_above_threshold",
      "cm2-hp2-stop-room": "heat_demand_below_remove_threshold",
      "cm3-assist": "cv_assist_required",
      "cm5-dewpoint": "dewpoint_margin_too_small",
      "cm1-hold": "pump_preflow_required",
      "cm0-sticky": "pump_stick_protection",
      "cm98-frost": "frost_protection_required",
      "cm100-service": "service_mode_active",
      "starts-attention": "start_stop_rate_above_expected",
    };
    return reasonCodes[episode && episode.id] || "event_reason_unknown";
  }

  function getControlReplayFocusMeta(episode) {
    const focusMeta = {
      decision: { label: "Besluit", tone: "decision" },
      protection: { label: "Bescherming", tone: "limited" },
      defrost: { label: "Defrost", tone: "defrost" },
      starts: { label: "Start/stop", tone: "starts" },
      service: { label: "Service", tone: "service" },
    };
    return focusMeta[episode && episode.focus] || { label: "Event", tone: "neutral" };
  }

  function renderControlReplayStatusPill(episode) {
    const status = getControlReplayEventStatus(episode);
    return `<span class="oq-control-replay-status oq-control-replay-status--${escapeHtml(status.tone)}">${escapeHtml(status.label)}</span>`;
  }

  function renderControlReplayKindPill(episode) {
    const focus = getControlReplayFocusMeta(episode);
    return `<span class="oq-control-replay-kind oq-control-replay-kind--${escapeHtml(focus.tone)}">${escapeHtml(focus.label)}</span>`;
  }

  function renderControlReplayDaySummary(episodes) {
    const attentionCount = episodes.filter((episode) => getControlReplayEventStatus(episode).tone === "attention").length;
    const defrostCount = episodes.filter((episode) => episode.focus === "defrost").length;
    const protectionCount = episodes.filter((episode) => episode.focus === "protection").length;
    const startsCount = episodes.filter((episode) => episode.focus === "starts").length;
    return `
      <section class="oq-control-replay-day-summary">
        <div>
          <span>Vandaag</span>
          <h3>${attentionCount ? "Aandacht nodig" : "Normaal bedrijf"}</h3>
          <p>HP1 ${getControlReplayCounterValue("hp1CompressorStarts24h")} starts · HP2 ${getControlReplayCounterValue("hp2CompressorStarts24h", "n.v.t.")} starts · ${defrostCount} defrost-groepen · ${protectionCount} beschermingen · ${attentionCount} waarschuwingen</p>
        </div>
        <div class="oq-control-replay-day-actions">
          <span>${startsCount} start/stop-events</span>
          <button type="button" disabled>Deel diagnose met support</button>
        </div>
      </section>
    `;
  }

  function renderControlReplayTechnicalDetails(episode) {
    const rows = [
      ["Control mode", episode.modeLabel],
      ["Event kind", episode.focus],
      ["Reason code", getControlReplayReasonCode(episode)],
      ["Subject", episode.subject || episode.title],
      ["Effect", episode.effect || episode.copy],
    ];
    return `
      <details class="oq-control-replay-tech">
        <summary>Technische details</summary>
        <dl>
          ${rows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}
        </dl>
      </details>
    `;
  }

  function getControlReplayUnifiedEpisodes(heatPumpPanels) {
    const hp2Available = heatPumpPanels.some((panel) => panel.title === "HP2");
    const hp2Starts = hp2Available ? getControlReplayCounterValue("hp2CompressorStarts24h") : "n.v.t.";
    const currentReason = formatControlReplayRequestReason();
    const coolingReason = formatControlReplayRequestReason({ preferCoolingGuard: true });
    const events = [
      {
        id: "cm2-duo",
        focus: "decision",
        dateLabel: "Vandaag",
        loggedAt: "10:15",
        subject: "HP2",
        effect: "extra verwarmingscapaciteit beschikbaar",
        mode: "cm2",
        modeLabel: "CM2",
        tone: "heating",
        icon: "activity",
        time: "10:15",
        title: hp2Available ? "HP2 schakelt bij" : "Warmtepomp blijft actief",
        copy: hp2Available ? "Extra warmtepompvermogen na aanhoudende vraag." : "Warmtepompbedrijf zonder tweede unit.",
        question: hp2Available ? "Waarom gebeurde dit?" : "Waarom blijft HP actief?",
        answer: hp2Available
          ? "De warmtevraag bleef langer dan 15 minuten boven de bijschakeldrempel. HP2 was beschikbaar en het minimum startinterval was verlopen. Daarom is HP2 bijgeschakeld."
          : "De warmtevraag blijft actief en CM2 is de normale bedrijfsmode voor warmtepomp-only verwarmen.",
        chips: [
          { label: "warmtevraag houdt aan", tone: "heating", icon: "flame" },
          { label: "delta T stijgt", tone: "attention", icon: "thermometer" },
          { label: "min. startinterval ok", tone: "neutral", icon: "activity" },
          { label: currentReason, tone: "safe", icon: "bar-chart" },
        ],
        counters: [
          { label: "Starts HP1", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Starts HP2", value: hp2Starts },
          { label: "Stops", value: "eventlog" },
          { label: "Defrost", value: "eventlog" },
        ],
        lanes: [
          {
            label: "Regelaar",
            note: "CM2",
            segments: [{ start: 4, end: 96, tone: "demand", label: "warmtevraag" }],
            markers: [
              { at: 24, tone: "decision", label: hp2Available ? "HP2 bij" : "HP aan" },
              { at: 68, tone: "attention", label: "kamerremming" },
            ],
          },
          {
            label: "HP1",
            note: "basis",
            segments: [
              { start: 6, end: 94, tone: "running", label: "draait" },
              { start: 42, end: 46, tone: "defrost" },
            ],
          },
          ...(hp2Available ? [{
            label: "HP2",
            note: "bijschakeling",
            segments: [
              { start: 24, end: 72, tone: "running", label: "draait mee" },
              { start: 80, end: 92, tone: "running" },
            ],
          }] : []),
          {
            label: "Thermostaat",
            note: "comfortband",
            segments: [{ start: 0, end: 100, tone: "safe", label: "onder/rond setpoint" }],
            markers: [{ at: 68, tone: "attention", label: "boven setpoint" }],
          },
        ],
        cards: getControlReplayTransitionCards(),
      },
      {
        id: "defrost-group-winter",
        focus: "defrost",
        dateLabel: "Vandaag",
        loggedAt: "10-15u",
        sortAt: "10:00",
        subject: "HP1/HP2",
        effect: "normale defrosts samengevat zolang duur en herstel normaal blijven",
        mode: "cm2",
        modeLabel: "CM2",
        tone: "defrost",
        icon: "snowflake",
        time: "10:00 - 15:00",
        title: "Defrosts gegroepeerd",
        copy: "2x uitgevoerd, gemiddeld 5 min, geen afwijkingen.",
        question: "Waarom staat dit gegroepeerd?",
        answer: "Defrost is normaal terugkerend wintergedrag. Zolang duur en herstel binnen de verwachte bandbreedte blijven, vat de log deze events samen en blijven individuele defrosts beschikbaar in supportdetails.",
        chips: [
          { label: "defrost", tone: "cooling", icon: "snowflake" },
          { label: "warmtevraag blijft", tone: "heating", icon: "flame" },
          { label: "gem. 5 min", tone: "neutral", icon: "activity" },
        ],
        counters: [
          { label: "Defrosts", value: "2" },
          { label: "Gem. duur", value: "5 min" },
          { label: "Starts HP1", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Afwijking", value: "0" },
        ],
        lanes: [
          { label: "Regelaar", note: "CM2", segments: [{ start: 0, end: 100, tone: "demand", label: "vraag blijft" }] },
          { label: "HP1", note: "defrost", segments: [{ start: 4, end: 96, tone: "running", label: "draait" }, { start: 28, end: 34, tone: "defrost", label: "defrost" }, { start: 66, end: 72, tone: "defrost" }] },
          ...(hp2Available ? [{ label: "HP2", note: "meeloop", segments: [{ start: 12, end: 88, tone: "running", label: "draait" }] }] : []),
          { label: "Defrost", note: "gegroepeerd", segments: [{ start: 28, end: 34, tone: "defrost", label: "5 min" }, { start: 66, end: 72, tone: "defrost", label: "5 min" }] },
        ],
        cards: [
          {
            title: "Samenvatting",
            time: "10-15u",
            bars: [{ label: "HP1", tone: "running", width: 84 }, { label: "Defr.", tone: "cooling", width: 24 }],
            values: [["Aantal", "2"], ["Gem. duur", "5 min"]],
          },
          {
            title: "Gedempt",
            time: "normaal",
            bars: [{ label: "Duur", tone: "running", width: 48 }, { label: "Herstel", tone: "running", width: 72 }],
            values: [["Afwijking", "geen"], ["Detail", "support"]],
          },
        ],
      },
      {
        id: "cm2-hp2-stop-room",
        focus: "starts",
        dateLabel: "Vandaag",
        loggedAt: "13:35",
        subject: "HP2",
        effect: "HP2 terug naar standby, HP1 blijft basislast leveren",
        mode: "cm2",
        modeLabel: "CM2",
        tone: "starts",
        icon: "target",
        time: "13:35",
        title: "HP2 gaat naar standby",
        copy: "Capaciteit teruggenomen door kamer- en buitentemperatuurcorrectie.",
        question: "Waarom gebeurde dit?",
        answer: "De warmtevraag zakt richting comfortband. HP2 is daarom niet meer nodig; HP1 blijft basislast leveren zodat het systeem rustig doorloopt.",
        chips: [
          { label: "vraag neemt af", tone: "attention", icon: "bar-chart" },
          { label: "kamer rond setpoint", tone: "safe", icon: "target" },
          { label: "start/stop bewaakt", tone: "neutral", icon: "activity" },
        ],
        counters: [
          { label: "Stops HP2", value: "eventlog" },
          { label: "Starts HP2", value: hp2Starts },
          { label: "HP1 blijft", value: "aan" },
          { label: "Defrost", value: "eventlog" },
        ],
        lanes: [
          { label: "Regelaar", note: "capaciteit", segments: [{ start: 0, end: 62, tone: "demand", label: "duo nodig" }, { start: 62, end: 96, tone: "safe", label: "single genoeg" }], markers: [{ at: 62, tone: "decision", label: "HP2 uit" }] },
          { label: "HP1", note: "basis", segments: [{ start: 0, end: 96, tone: "running", label: "draait" }] },
          ...(hp2Available ? [{ label: "HP2", note: "extra", segments: [{ start: 0, end: 62, tone: "running", label: "draait" }, { start: 62, end: 96, tone: "standby", label: "uit" }] }] : []),
          { label: "Thermostaat", note: "comfort", segments: [{ start: 0, end: 96, tone: "safe", label: "richting setpoint" }] },
        ],
        cards: [
          {
            title: "Duo",
            time: "13:20",
            bars: [{ label: "HP1", tone: "running", width: 76 }, { label: "HP2", tone: "running", width: 66 }],
            values: [["Vraag", "dalend"], ["Besluit", "nog duo"]],
          },
          {
            title: "Single",
            time: "13:35",
            bars: [{ label: "HP1", tone: "running", width: 70 }, { label: "HP2", tone: "standby", width: 14 }],
            values: [["Vraag", "lager"], ["Besluit", "HP2 uit"]],
          },
        ],
      },
      {
        id: "cm3-assist",
        focus: "decision",
        dateLabel: "Vandaag",
        loggedAt: "06:45",
        subject: "CV",
        effect: "CV levert extra warmte",
        mode: "cm3",
        modeLabel: "CM3",
        tone: "assist",
        icon: "zap",
        time: "06:30 - 07:10",
        title: "CV ondersteunt",
        copy: "Extra warmte wanneer HP-capaciteit niet genoeg is.",
        question: "Waarom gebeurde dit?",
        answer: "CM3 wordt gekozen wanneer Power House langdurig tekort ziet en de wachttijden/hysterese voor bijspringen zijn verlopen.",
        chips: [
          { label: "deficit > drempel", tone: "attention", icon: "bar-chart" },
          { label: "CM2 min. runtime voorbij", tone: "neutral", icon: "activity" },
          { label: "CV assist toegestaan", tone: "heating", icon: "flame" },
        ],
        counters: [
          { label: "CV vandaag", value: formatControlReplayPower("boilerHeatPower", "0 W") },
          { label: "CM3 starts", value: "eventlog" },
          { label: "HP starts", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Stops", value: "eventlog" },
        ],
        lanes: [
          {
            label: "Regelaar",
            note: "CM3",
            segments: [{ start: 10, end: 86, tone: "demand", label: "tekort blijft" }],
            markers: [{ at: 34, tone: "decision", label: "CV bij" }],
          },
          { label: "HP1", note: "max", segments: [{ start: 0, end: 94, tone: "running", label: "draait" }] },
          ...(hp2Available ? [{ label: "HP2", note: "max", segments: [{ start: 8, end: 94, tone: "running", label: "draait" }] }] : []),
          { label: "CV", note: "assist", segments: [{ start: 34, end: 72, tone: "assist", label: "bij" }] },
        ],
        cards: [
          {
            title: "CM2",
            time: "06:30",
            bars: [
              { label: "HP1", tone: "running", width: 86 },
              { label: "CV", tone: "standby", width: 12 },
            ],
            values: [["Tekort", "aanhoudend"], ["CV", "uit"]],
          },
          {
            title: "CM3",
            time: "06:45",
            bars: [
              { label: "HP1", tone: "running", width: 86 },
              { label: "CV", tone: "running", width: 52 },
            ],
            values: [["Besluit", "assist bij"], ["CV", formatControlReplayPower("boilerHeatPower", "bij")]],
          },
        ],
      },
      {
        id: "cm5-dewpoint",
        focus: "protection",
        severity: "limited",
        dateLabel: "Vandaag",
        loggedAt: "15:18",
        subject: "HP1",
        effect: "koelen tijdelijk gepauzeerd om condensrisico te voorkomen",
        mode: "cm5",
        modeLabel: "CM5",
        tone: "cooling",
        icon: "droplet",
        time: "12:00 - 18:00",
        title: "Koelen pauzeert door dauwpunt",
        copy: "Vraag blijft actief, actuator pulseert door bescherming.",
        question: "Waarom gebeurde dit?",
        answer: "De koelvraag blijft actief, maar de aanvoer mag niet te dicht bij het dauwpunt komen. De warmtepomp pauzeert tijdelijk om condensrisico te voorkomen.",
        chips: [
          { label: "CM5 blijft actief", tone: "cooling", icon: "snowflake" },
          { label: "dauwpuntbewaking", tone: "dewpoint", icon: "droplet" },
          { label: "aanvoer boven veilige min.", tone: "attention", icon: "thermometer" },
          { label: coolingReason, tone: "safe", icon: "activity" },
        ],
        counters: [
          { label: "Starts HP1", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Stops HP1", value: "eventlog" },
          { label: "Dauwpunt stops", value: "eventlog" },
          { label: "Koelvraag", value: isEntityActive("coolingRequestActive") ? "actief" : "voorbeeld" },
        ],
        lanes: [
          { label: "Regelaar", note: "CM5", segments: [{ start: 0, end: 100, tone: "cooling", label: "koelvraag" }] },
          {
            label: "HP1",
            note: "actuator",
            segments: [
              { start: 6, end: 24, tone: "cooling", label: "aan" },
              { start: 34, end: 52, tone: "cooling" },
              { start: 68, end: 88, tone: "cooling" },
            ],
          },
          { label: "Bescherming", note: "dauwpunt", segments: [{ start: 24, end: 34, tone: "dewpoint", label: "pauze" }, { start: 52, end: 64, tone: "dewpoint" }] },
          { label: "Aanvoer", note: "veilig", segments: [{ start: 4, end: 96, tone: "safe", label: "boven minimum" }] },
        ],
        cards: getControlReplayCoolingCards(),
      },
      {
        id: "cm1-hold",
        focus: "starts",
        dateLabel: "Vandaag",
        loggedAt: "09:55",
        subject: "Compressor",
        effect: "compressor wacht, pomp draait voor flow",
        mode: "cm1",
        modeLabel: "CM1",
        tone: "neutral",
        icon: "waves",
        time: "09:55 - 10:00",
        title: "Compressor wacht",
        copy: "Water blijft circuleren voordat de volgende mode actief wordt.",
        question: "Waarom gebeurde dit?",
        answer: "CM1 houdt de pomp aan voor flowopbouw, naloop of flow-interlock. Daarna gaat de regelaar naar CM0, CM2, CM5 of CM98.",
        chips: [
          { label: "CM1 timer actief", tone: "neutral", icon: "activity" },
          { label: "flow eerst stabiel", tone: "safe", icon: "waves" },
          { label: "volgende CM bekend", tone: "attention", icon: "target" },
        ],
        counters: [
          { label: "Naloop", value: "eventlog" },
          { label: "Flow holds", value: "eventlog" },
          { label: "Starts", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Stops", value: "eventlog" },
        ],
        lanes: [
          { label: "Regelaar", note: "CM1", segments: [{ start: 20, end: 58, tone: "standby", label: "hold" }], markers: [{ at: 58, tone: "decision", label: "naar CM2/5" }] },
          { label: "Pomp", note: "flow", segments: [{ start: 0, end: 72, tone: "safe", label: "aan" }] },
          { label: "HP", note: "wacht", segments: [{ start: 0, end: 58, tone: "standby", label: "uit" }] },
        ],
        cards: [
          {
            title: "CM0/CM2",
            time: "voor",
            bars: [{ label: "Pomp", tone: "standby", width: 18 }, { label: "HP", tone: "standby", width: 12 }],
            values: [["Flow", formatControlReplayNumber("flowSelected", 0, "L/h")], ["Mode", getEntityStateText("controlModeLabel", "—")]],
          },
          {
            title: "CM1",
            time: "hold",
            bars: [{ label: "Pomp", tone: "running", width: 78 }, { label: "HP", tone: "standby", width: 12 }],
            values: [["Flow", "opbouwen"], ["Volgende", "CM2/CM5/CM0"]],
          },
        ],
      },
      {
        id: "cm0-sticky",
        focus: "protection",
        severity: "normal",
        dateLabel: "Vandaag",
        loggedAt: "03:00",
        subject: "Pomp",
        effect: "pomp kort geactiveerd tegen vastzitten",
        mode: "cm0",
        modeLabel: "CM0",
        tone: "safe",
        icon: "shield",
        time: "dagelijks",
        title: "Pomp draait kort ter bescherming",
        copy: "Korte pompactie terwijl het systeem standby blijft.",
        question: "Waarom gebeurde dit?",
        answer: "In CM0 kan de regelaar periodiek kort circuleren zodat de pomp niet vast gaat zitten.",
        chips: [
          { label: "standby", tone: "neutral", icon: "activity" },
          { label: "sticky protection", tone: "safe", icon: "shield" },
          { label: "geen warmtevraag", tone: "neutral", icon: "target" },
        ],
        counters: [
          { label: "Sticky runs", value: "eventlog" },
          { label: "Pomp starts", value: "eventlog" },
          { label: "HP starts", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Stops", value: "eventlog" },
        ],
        lanes: [
          { label: "Regelaar", note: "CM0", segments: [{ start: 0, end: 100, tone: "standby", label: "standby" }] },
          { label: "Pomp", note: "protectie", segments: [{ start: 48, end: 54, tone: "safe", label: "kort aan" }] },
          { label: "HP", note: "uit", segments: [{ start: 0, end: 100, tone: "standby", label: "uit" }] },
        ],
        cards: [
          {
            title: "Standby",
            time: "voor",
            bars: [{ label: "Pomp", tone: "standby", width: 10 }, { label: "HP", tone: "standby", width: 10 }],
            values: [["CM", "CM0"], ["Vraag", "geen"]],
          },
          {
            title: "Protectie",
            time: "kort",
            bars: [{ label: "Pomp", tone: "running", width: 54 }, { label: "HP", tone: "standby", width: 10 }],
            values: [["Doel", "pomp vrij"], ["HP", "uit"]],
          },
        ],
      },
      {
        id: "cm98-frost",
        focus: "protection",
        severity: "limited",
        dateLabel: "Vandaag",
        loggedAt: "05:20",
        subject: "Pomp",
        effect: "watercircuit beschermd tegen vorstrisico",
        mode: "cm98",
        modeLabel: "CM98",
        tone: "defrost",
        icon: "snowflake",
        time: "vorst",
        title: "Anti-freeze circulatie start",
        copy: "Bescherming krijgt voorrang op normale vraag.",
        question: "Waarom gebeurde dit?",
        answer: "Bij vorstrisico houdt CM98 het watercircuit veilig met circulatie en vorstlogica.",
        chips: [
          { label: "frost guard", tone: "cooling", icon: "snowflake" },
          { label: "veiligheid voorrang", tone: "attention", icon: "shield" },
          { label: "flow actief", tone: "safe", icon: "waves" },
        ],
        counters: [
          { label: "CM98 runs", value: "eventlog" },
          { label: "Pomp starts", value: "eventlog" },
          { label: "HP starts", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Stops", value: "eventlog" },
        ],
        lanes: [
          { label: "Regelaar", note: "CM98", segments: [{ start: 12, end: 78, tone: "defrost", label: "frost" }] },
          { label: "Pomp", note: "circulatie", segments: [{ start: 8, end: 86, tone: "safe", label: "aan" }] },
          { label: "HP", note: "beschermd", segments: [{ start: 0, end: 100, tone: "standby", label: "uit/veilig" }] },
        ],
        cards: [
          {
            title: "Normaal",
            time: "voor",
            bars: [{ label: "Pomp", tone: "standby", width: 16 }, { label: "HP", tone: "standby", width: 12 }],
            values: [["Buiten", formatControlReplayNumber("outsideTempSelected", 1, "C")], ["CM", "CM0/1/2"]],
          },
          {
            title: "CM98",
            time: "actief",
            bars: [{ label: "Pomp", tone: "running", width: 80 }, { label: "HP", tone: "standby", width: 12 }],
            values: [["Doel", "anti-freeze"], ["Flow", formatControlReplayNumber("flowSelected", 0, "L/h")]],
          },
        ],
      },
      {
        id: "cm100-service",
        focus: "service",
        dateLabel: "Vandaag",
        loggedAt: "service",
        subject: "Regeling",
        effect: "automatische beslissingen tijdelijk onder servicecontext",
        mode: "cm100",
        modeLabel: "CM100",
        tone: "neutral",
        icon: "tool",
        time: "service",
        title: "Service/commissioning is actief",
        copy: "Regeling tijdelijk onder handmatige of installatiemodus.",
        question: "Waarom gebeurde dit?",
        answer: "CM100 reserveert de state machine voor commissioning, service of handmatige controle. De replay moet tonen welke automatische beslissingen tijdelijk niet gelden.",
        chips: [
          { label: "service mode", tone: "neutral", icon: "tool" },
          { label: "automatiek begrensd", tone: "attention", icon: "shield" },
          { label: "operatoractie", tone: "safe", icon: "target" },
        ],
        counters: [
          { label: "CM100 runs", value: "eventlog" },
          { label: "Handmatige starts", value: "eventlog" },
          { label: "HP starts", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Terug naar auto", value: "eventlog" },
        ],
        lanes: [
          { label: "Regelaar", note: "CM100", segments: [{ start: 18, end: 78, tone: "standby", label: "service" }] },
          { label: "Automatiek", note: "hold", segments: [{ start: 18, end: 78, tone: "attention", label: "begrensd" }] },
          { label: "Actuatoren", note: "operator", segments: [{ start: 30, end: 54, tone: "safe", label: "test/handmatig" }] },
        ],
        cards: [
          {
            title: "Auto",
            time: "voor",
            bars: [{ label: "CM", tone: "running", width: 54 }, { label: "HP", tone: "standby", width: 14 }],
            values: [["Regeling", "auto"], ["Mode", getEntityStateText("controlModeLabel", "—")]],
          },
          {
            title: "CM100",
            time: "service",
            bars: [{ label: "CM", tone: "standby", width: 78 }, { label: "HP", tone: "standby", width: 18 }],
            values: [["Doel", "commissioning"], ["Auto", "tijdelijk hold"]],
          },
        ],
      },
      {
        id: "starts-attention",
        focus: "starts",
        severity: "attention",
        dateLabel: "Vandaag",
        loggedAt: "16:10",
        subject: "Compressor",
        effect: "mogelijk pendelgedrag zichtbaar voor support",
        mode: "cm2",
        modeLabel: "CM2",
        tone: "attention",
        icon: "activity",
        time: "16:10",
        title: "Veel starts/stops gedetecteerd",
        copy: "Startfrequentie hoger dan verwacht voor deze periode.",
        question: "Waarom vraagt dit aandacht?",
        answer: "De compressor start en stopt opvallend vaak binnen korte tijd. Dat kan normaal zijn bij wisselende vraag, maar is waardevol om te beoordelen met support.",
        chips: [
          { label: "start/stop patroon", tone: "attention", icon: "activity" },
          { label: "comfortvraag wisselt", tone: "neutral", icon: "target" },
          { label: "supportdetail", tone: "safe", icon: "tool" },
        ],
        counters: [
          { label: "Starts HP1 2u", value: getControlReplayCounterValue("hp1CompressorStarts2h") },
          { label: "Starts HP1 24u", value: getControlReplayCounterValue("hp1CompressorStarts24h") },
          { label: "Stops", value: "eventlog" },
          { label: "Status", value: "aandacht" },
        ],
        lanes: [
          { label: "Regelaar", note: "vraag", segments: [{ start: 0, end: 24, tone: "demand", label: "vraag" }, { start: 34, end: 54, tone: "demand" }, { start: 66, end: 88, tone: "demand" }] },
          { label: "HP1", note: "starts", segments: [{ start: 4, end: 22, tone: "running", label: "aan" }, { start: 36, end: 52, tone: "running" }, { start: 68, end: 84, tone: "running" }] },
          { label: "Blokkades", note: "interval", segments: [{ start: 22, end: 34, tone: "attention", label: "wacht" }, { start: 52, end: 66, tone: "attention" }] },
        ],
        cards: [
          {
            title: "Normaal",
            time: "verwacht",
            bars: [{ label: "HP1", tone: "running", width: 58 }, { label: "Stops", tone: "standby", width: 18 }],
            values: [["Starts", "rustig"], ["Status", "normaal"]],
          },
          {
            title: "Patroon",
            time: "16:10",
            bars: [{ label: "HP1", tone: "running", width: 38 }, { label: "Stops", tone: "standby", width: 44 }],
            values: [["Starts", getControlReplayCounterValue("hp1CompressorStarts2h")], ["Status", "aandacht"]],
          },
        ],
      },
    ];
    return events.sort((left, right) => getControlReplayEventSortValue(left) - getControlReplayEventSortValue(right));
  }

  function getControlReplayFilteredEpisodes(episodes) {
    const validFilters = new Set(getControlReplayFocusFilters().map((filter) => filter.id));
    const selectedFilter = validFilters.has(state.controlReplayFocusFilter) ? state.controlReplayFocusFilter : "all";
    return selectedFilter === "all"
      ? episodes
      : episodes.filter((episode) => episode.focus === selectedFilter);
  }

  function getControlReplaySelectedEpisode(episodes) {
    const filtered = getControlReplayFilteredEpisodes(episodes);
    if (filtered.some((episode) => episode.id === state.controlReplaySelectedEpisode)) {
      return filtered.find((episode) => episode.id === state.controlReplaySelectedEpisode);
    }
    return filtered[0] || episodes[0] || null;
  }

  function renderControlReplayFocusFilters(episodes) {
    const filters = getControlReplayFocusFilters();
    const selectedFilter = filters.some((filter) => filter.id === state.controlReplayFocusFilter)
      ? state.controlReplayFocusFilter
      : "all";
    return `
      <div class="oq-control-replay-filterbar" role="list" aria-label="Eventfilter">
        ${filters.map((filter) => {
          const count = filter.id === "all"
            ? episodes.length
            : episodes.filter((episode) => episode.focus === filter.id).length;
          return `
            <button
              class="oq-control-replay-filter${selectedFilter === filter.id ? " is-active" : ""}"
              type="button"
              data-oq-action="select-control-replay-focus"
              data-replay-focus="${escapeHtml(filter.id)}"
            >
              <strong>${escapeHtml(filter.label)}</strong>
              <span>${escapeHtml(filter.copy)} · ${count}</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderControlReplayEpisodeButton(episode, selectedEpisode) {
    return `
      <button
        class="oq-control-replay-episode-button${selectedEpisode && selectedEpisode.id === episode.id ? " is-active" : ""}"
        type="button"
        data-oq-action="select-control-replay-episode"
        data-replay-episode="${escapeHtml(episode.id)}"
      >
        <span class="oq-control-replay-event-time">
          <strong>${escapeHtml(episode.loggedAt || episode.time || "")}</strong>
          <small>${escapeHtml(episode.dateLabel || "Vandaag")}</small>
        </span>
        <span class="oq-control-replay-episode-mode oq-control-replay-episode-mode--${escapeHtml(episode.mode)}">${escapeHtml(episode.modeLabel)}</span>
        <span>
          <strong>${escapeHtml(episode.title)}</strong>
          <small>${escapeHtml(getControlReplayFocusMeta(episode).label)} · ${escapeHtml(getControlReplayEventStatus(episode).label)} · ${escapeHtml(episode.copy)}</small>
        </span>
        <i aria-hidden="true"></i>
      </button>
    `;
  }

  function renderControlReplayEpisodeList(episodes, selectedEpisode) {
    return `
      <aside class="oq-control-replay-episode-list">
        <div class="oq-control-replay-episode-list-head">
          <span>Tijdlijn</span>
          <strong>${episodes.length} events</strong>
        </div>
        ${episodes.map((episode) => renderControlReplayEpisodeButton(episode, selectedEpisode)).join("")}
      </aside>
    `;
  }

  function renderControlReplaySelectedEpisode(episode) {
    if (!episode) {
      return "";
    }
    return `
      <section class="oq-control-replay-selected oq-control-replay-selected--${escapeHtml(episode.tone)}">
        <div class="oq-control-replay-selected-head">
          <span class="oq-control-replay-event-time oq-control-replay-event-time--selected">
            <strong>${escapeHtml(episode.loggedAt || episode.time || "")}</strong>
            <small>${escapeHtml(episode.dateLabel || "Vandaag")}</small>
          </span>
          <div>
            <div class="oq-control-replay-selected-context">
              ${renderControlReplayKindPill(episode)}
              ${renderControlReplayStatusPill(episode)}
              <span class="oq-control-replay-episode-mode oq-control-replay-episode-mode--${escapeHtml(episode.mode)}">${escapeHtml(episode.modeLabel)}</span>
              <small>automatisch gekozen context</small>
            </div>
            <h3>${escapeHtml(episode.title)}</h3>
            <p>${escapeHtml(episode.copy)}</p>
          </div>
        </div>
        ${renderControlReplayTimeline({
          id: episode.mode,
          eyebrow: `${episode.dateLabel || "Vandaag"} ${episode.loggedAt || episode.time || ""} · ${episode.modeLabel}`,
          title: episode.question,
          copy: episode.answer,
          lanes: episode.lanes,
        })}
        <div class="oq-control-replay-selected-body">
          <div class="oq-control-replay-episode-explain">
            <h4>Onderbouwing</h4>
            <p>${escapeHtml(episode.answer)}</p>
            <div class="oq-control-replay-chip-row">
              ${episode.chips.map((chip) => renderControlReplayChip(chip.label, chip.tone, chip.icon)).join("")}
            </div>
            <div class="oq-control-replay-counter-row">
              ${episode.counters.map((counter) => `
                <span>
                  <small>${escapeHtml(counter.label)}</small>
                  <strong>${escapeHtml(counter.value)}</strong>
                </span>
              `).join("")}
            </div>
            ${renderControlReplayTechnicalDetails(episode)}
          </div>
          <div class="oq-control-replay-transition">
            ${episode.cards.map(renderControlReplayStateCard).join('<span class="oq-control-replay-transition-arrow" aria-hidden="true">-&gt;</span>')}
          </div>
        </div>
      </section>
    `;
  }

  function getControlReplayUnifiedMetrics(modeModel, episodes = []) {
    const selectedReason = formatControlReplayRequestReason();
    const attentionCount = episodes.filter((episode) => getControlReplayEventStatus(episode).tone === "attention").length;
    return [
      {
        label: "Dagstatus",
        value: attentionCount ? "Aandacht nodig" : "Normaal",
        note: `${episodes.length} events · ${attentionCount} aandacht`,
        tone: attentionCount ? "starts" : "safe",
        icon: "activity",
      },
      {
        label: "Actuele reden",
        value: selectedReason,
        note: "Live reason uit request- en guard-codes.",
        tone: "starts",
        icon: "target",
      },
      {
        label: "Strategie nu",
        value: formatControlReplayStrategyLabel(),
        note: `Phase ${formatControlReplayInteger("strategyPhaseCode", "—")}`,
        tone: "neutral",
        icon: "bar-chart",
      },
      {
        label: "Starts 24u",
        value: `HP1 ${getControlReplayCounterValue("hp1CompressorStarts24h")} / HP2 ${modeModel.hp2Available ? getControlReplayCounterValue("hp2CompressorStarts24h") : "n.v.t."}`,
        note: "Stops/defrost straks uit eventlog.",
        tone: "defrost",
        icon: "activity",
      },
    ];
  }

  function getControlReplayUnifiedSignature(heatPumpPanels) {
    return getRenderSignature({
      selectedFocus: state.controlReplayFocusFilter,
      selectedEpisode: state.controlReplaySelectedEpisode,
      mode: getEntityStateText("controlModeLabel", ""),
      requestReason: getEntityStateText("requestReason", ""),
      strategyActiveCode: formatControlReplayInteger("strategyActiveCode"),
      strategyPhaseCode: formatControlReplayInteger("strategyPhaseCode"),
      hp1Starts24h: formatControlReplayInteger("hp1CompressorStarts24h"),
      hp2Starts24h: formatControlReplayInteger("hp2CompressorStarts24h"),
      hp1Heat: formatControlReplayPower("hp1Heat"),
      hp2Heat: formatControlReplayPower("hp2Heat"),
      hp1Cop: formatControlReplayNumber("hp1Cop", 1),
      hp2Cop: formatControlReplayNumber("hp2Cop", 1),
      boilerHeat: formatControlReplayPower("boilerHeatPower"),
      outsideTemp: formatControlReplayNumber("outsideTempSelected", 1, "C"),
      flow: formatControlReplayNumber("flowSelected", 0, "L/h"),
      coolingRequestActive: isEntityActive("coolingRequestActive"),
      coolingPermitted: hasEntity("coolingPermitted") ? isEntityActive("coolingPermitted") : "",
      coolingDewPoint: formatControlReplayNumber("coolingDewPointSelected", 1, "C"),
      coolingEffectiveMinSupply: formatControlReplayNumber("coolingEffectiveMinSupplyTemp", 1, "C"),
      coolingMinimumSafeSupply: formatControlReplayNumber("coolingMinimumSafeSupplyTemp", 1, "C"),
      coolingGuard: getControlReplayCoolingGuardLabel(),
      topology: heatPumpPanels.map((panel) => panel.title).join(","),
    });
  }

  function getControlWorkingTabs() {
    return [
      { id: "status", label: "Actueel", icon: "shield" },
      { id: "timeline", label: "Tijdlijn", icon: "activity" },
      { id: "graphs", label: "Grafieken", icon: "bar-chart" },
    ];
  }

  function getControlWorkingWindowOptions() {
    return [
      {
        id: "last1",
        label: "Laatste 1 uur",
        shortLabel: "1 uur",
        eyebrow: "Laatste 1 uur",
        title: "Tijdlijn",
        copy: "Recente beslismomenten in het afgelopen uur.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over het laatste uur.",
        durationMinutes: 60,
        quick: false,
      },
      {
        id: "last2",
        label: "Laatste 2 uur",
        shortLabel: "2 uur",
        eyebrow: "Laatste 2 uur",
        title: "Tijdlijn",
        copy: "Recente beslismomenten in de afgelopen twee uur.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de laatste twee uur.",
        durationMinutes: 120,
        quick: false,
      },
      {
        id: "last4",
        label: "Laatste 4 uur",
        shortLabel: "4 uur",
        eyebrow: "Laatste 4 uur",
        title: "Tijdlijn",
        copy: "Recente momenten en periodes voor een gerichte diagnose.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de laatste vier uur.",
        durationMinutes: 240,
        quick: true,
      },
      {
        id: "last8",
        label: "Laatste 8 uur",
        shortLabel: "8 uur",
        eyebrow: "Laatste 8 uur",
        title: "Tijdlijn",
        copy: "Een compacte terugblik op de laatste acht uur.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de laatste acht uur.",
        durationMinutes: 480,
        quick: false,
      },
      {
        id: "last12",
        label: "Laatste 12 uur",
        shortLabel: "12 uur",
        eyebrow: "Laatste 12 uur",
        title: "Tijdlijn",
        copy: "Een dagdeel met alle belangrijke beslismomenten.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de laatste twaalf uur.",
        durationMinutes: 720,
        quick: false,
      },
      {
        id: "last24",
        label: "Afgelopen 24 uur",
        shortLabel: "24 uur",
        eyebrow: "Afgelopen 24 uur",
        title: "Tijdlijn",
        copy: "Gebeurtenissen die verklaren hoe het systeem in de huidige situatie kwam.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de laatste 24 uur.",
        durationMinutes: 1440,
        quick: true,
      },
      {
        id: "last48",
        label: "Afgelopen 48 uur",
        shortLabel: "48 uur",
        eyebrow: "Afgelopen 48 uur",
        title: "Tijdlijn",
        copy: "Twee dagen met belangrijke momenten en perioden.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de laatste 48 uur.",
        durationMinutes: 2880,
        quick: false,
      },
      {
        id: "last3d",
        label: "Afgelopen 3 dagen",
        shortLabel: "3 dagen",
        eyebrow: "Afgelopen 3 dagen",
        title: "Tijdlijn",
        copy: "Een terugblik op patronen over drie dagen.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de laatste drie dagen.",
        durationMinutes: 4320,
        quick: false,
      },
      {
        id: "today",
        label: "Vandaag",
        shortLabel: "Vandaag",
        eyebrow: "Vandaag",
        title: "Tijdlijn",
        copy: "Belangrijke momenten en periodes sinds middernacht.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg voor vandaag.",
        calendarDay: "today",
        quick: true,
      },
      {
        id: "yesterday",
        label: "Gisteren",
        shortLabel: "Gisteren",
        eyebrow: "Gisteren",
        title: "Tijdlijn",
        copy: "Terugkijken naar een volledige kalenderdag.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg voor gisteren.",
        calendarDay: "yesterday",
        quick: true,
      },
      {
        id: "week",
        label: "7 dagen",
        shortLabel: "7 dagen",
        eyebrow: "Afgelopen 7 dagen",
        title: "Tijdlijn",
        copy: "Patronen zoals defrosts, starts/stops en bescherming over meerdere dagen.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg binnen de weekselectie.",
        durationMinutes: 7 * 24 * 60,
        quick: true,
      },
      {
        id: "custom",
        label: "Eigen periode",
        shortLabel: "Eigen periode",
        eyebrow: "Eigen periode",
        title: "Tijdlijn",
        copy: "Een zelfgekozen begin- en eindmoment.",
        graphCopy: "De gekozen tijd verbindt grafiek en uitleg over de gekozen periode.",
        custom: true,
        quick: false,
      },
    ];
  }

  function getControlWorkingQuickWindowOptions() {
    return getControlWorkingWindowOptions().filter((option) => option.quick);
  }

  function getControlWorkingCustomEpoch(value) {
    const epochMs = new Date(String(value || "")).getTime();
    return Number.isFinite(epochMs) ? epochMs : Number.NaN;
  }

  function getControlWorkingCustomWindowBounds() {
    const start = getControlWorkingCustomEpoch(state.controlReplayCustomStart);
    const end = getControlWorkingCustomEpoch(state.controlReplayCustomEnd);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
      return null;
    }
    return { start, end };
  }

  function formatControlWorkingDateTimeInput(epochMs) {
    const date = new Date(epochMs);
    date.setMinutes(0, 0, 0);
    const pad = (value) => String(value).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function formatControlWorkingDateInput(epochMs) {
    return formatControlWorkingDateTimeInput(epochMs).slice(0, 10);
  }

  function getControlWorkingCustomDateTimeParts(value) {
    const normalized = String(value || "");
    const match = normalized.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):00$/);
    return {
      date: match?.[1] || "",
      hour: match?.[2] || "00",
    };
  }

  function renderControlWorkingHourOptions(selectedHour) {
    return Array.from({ length: 24 }, (_value, hour) => {
      const value = String(hour).padStart(2, "0");
      return `<option value="${value}"${value === selectedHour ? " selected" : ""}>${value} uur</option>`;
    }).join("");
  }

  function getControlWorkingCustomDraft() {
    const nowMs = Date.now();
    return {
      start: state.controlReplayCustomStart || formatControlWorkingDateTimeInput(nowMs - (24 * 60 * 60 * 1000)),
      end: state.controlReplayCustomEnd || formatControlWorkingDateTimeInput(nowMs),
    };
  }

  function getControlWorkingCustomInputBounds(draft, nowMs = Date.now()) {
    const maxRangeMs = 7 * 24 * 60 * 60 * 1000;
    const latestMs = new Date(nowMs).setMinutes(0, 0, 0);
    const earliestMs = Math.ceil((nowMs - maxRangeMs) / (60 * 60 * 1000)) * 60 * 60 * 1000;
    const draftStartMs = getControlWorkingCustomEpoch(draft.start);
    const startMs = Number.isFinite(draftStartMs)
      ? Math.max(earliestMs, Math.min(latestMs, draftStartMs))
      : latestMs - (24 * 60 * 60 * 1000);
    const draftEndMs = getControlWorkingCustomEpoch(draft.end);
    const endMs = Number.isFinite(draftEndMs)
      ? Math.max(startMs, Math.min(latestMs, draftEndMs))
      : latestMs;
    return {
      earliestDate: formatControlWorkingDateInput(earliestMs),
      latestDate: formatControlWorkingDateInput(latestMs),
      startMaxDate: formatControlWorkingDateInput(Math.min(latestMs, endMs)),
      endMinDate: formatControlWorkingDateInput(startMs),
      endMaxDate: formatControlWorkingDateInput(Math.min(latestMs, startMs + maxRangeMs)),
    };
  }

  function getControlWorkingWindowBounds(selectedWindow = getControlWorkingSelectedWindow(), nowMs = Date.now()) {
    const option = getControlWorkingWindowOptions().find((candidate) => candidate.id === selectedWindow)
      || getControlWorkingWindowOptions().find((candidate) => candidate.id === "last24");
    if (option?.calendarDay) {
      const start = new Date(nowMs);
      start.setHours(0, 0, 0, 0);
      if (option.calendarDay === "yesterday") {
        start.setDate(start.getDate() - 1);
      }
      return { start: start.getTime(), end: start.getTime() + (24 * 60 * 60 * 1000) };
    }
    if (option?.custom) {
      return getControlWorkingCustomWindowBounds() || {
        start: nowMs - (24 * 60 * 60 * 1000),
        end: nowMs,
      };
    }
    const durationMinutes = Number(option?.durationMinutes) || 1440;
    return {
      start: nowMs - (durationMinutes * 60 * 1000),
      end: nowMs,
    };
  }

  function getControlWorkingWindowDurationMinutes(selectedWindow = getControlWorkingSelectedWindow(), nowMs = Date.now()) {
    const bounds = getControlWorkingWindowBounds(selectedWindow, nowMs);
    return Math.max(1, (bounds.end - bounds.start) / (60 * 1000));
  }

  function formatControlWorkingAxisTime(epochMs, includeDay = false) {
    const date = new Date(epochMs);
    const time = date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
    if (!includeDay) {
      return time;
    }
    const day = date.toLocaleDateString("nl-NL", { weekday: "short" }).replace(".", "");
    return `${day} ${time}`;
  }

  function getControlWorkingWindowAxis(selectedWindow = getControlWorkingSelectedWindow(), nowMs = Date.now()) {
    if (selectedWindow === "today" || selectedWindow === "yesterday") {
      return ["00:00", "06:00", "12:00", "18:00", "24:00"];
    }
    const bounds = getControlWorkingWindowBounds(selectedWindow, nowMs);
    const durationMinutes = getControlWorkingWindowDurationMinutes(selectedWindow, nowMs);
    const includeDay = durationMinutes > 24 * 60 || selectedWindow === "custom";
    return [0, 0.25, 0.5, 0.75, 1].map((fraction, index) => {
      if (index === 4 && selectedWindow !== "custom") {
        return "Nu";
      }
      return formatControlWorkingAxisTime(bounds.start + ((bounds.end - bounds.start) * fraction), includeDay);
    });
  }

  function getControlWorkingSelectedTab() {
    return getControlWorkingTabs().some((tab) => tab.id === state.controlReplayTab)
      ? state.controlReplayTab
      : "status";
  }

  function getControlWorkingSelectedWindow() {
    const selected = getControlWorkingWindowOptions().find((option) => option.id === state.controlReplayWindow);
    if (selected?.custom && !getControlWorkingCustomWindowBounds()) {
      return "last24";
    }
    return selected
      ? state.controlReplayWindow
      : "last24";
  }

  function getControlWorkingWindowModel() {
    const selectedWindow = getControlWorkingSelectedWindow();
    const option = getControlWorkingWindowOptions().find((candidate) => candidate.id === selectedWindow)
      || getControlWorkingWindowOptions().find((candidate) => candidate.id === "last24");
    return {
      ...option,
      axis: getControlWorkingWindowAxis(selectedWindow),
    };
  }

  function getControlWorkingSeverityMeta(severity = "normal") {
    const metas = {
      normal: { label: "Normaal", tone: "normal" },
      limited: { label: "Bescherming actief", tone: "limited" },
      attention: { label: "Aandacht", tone: "attention" },
      fault: { label: "Storing", tone: "fault" },
    };
    return metas[severity] || metas.normal;
  }

  function getControlWorkingReasonMeta(reasonCode) {
    const fallbackLabel = "Keuze van het systeem";
    const metas = {
      keep_current: {
        label: "Huidige keuze blijft logisch",
        summary: "De huidige stand past bij de vraag in huis. Wisselen zou nu weinig voordeel geven.",
        checks: ["Vraag blijft binnen de band", "Geen betere keuze nodig", "Rustig door laten lopen"],
      },
      hold_active: {
        label: "Wissel bewust uitgesteld",
        summary: "Het systeem wacht bewust even, zodat warmtepompen niet onnodig vaak starten en stoppen.",
        checks: ["Vraag is nog niet duidelijk anders", "Minimale looptijd telt mee", "Actieve bron werkt nog goed"],
      },
      defrost_hold: {
        label: "Ontdooien rustig laten verlopen",
        summary: "Een warmtepomp ontdooit kort. Dat is normaal wintergedrag en herstelt vanzelf.",
        checks: ["Ontdooien actief of net klaar", "Warmte kan kort lager zijn", "Herstart gebeurt automatisch"],
      },
      better_heat: {
        label: "Twee pompen passen beter",
        summary: "De warmtevraag blijft hoog. Twee warmtepompen kunnen die vraag rustiger leveren dan één pomp op hoge belasting.",
        checks: ["Warmtevraag blijft hoog", "Beide warmtepompen beschikbaar", "Samen leveren ze rustiger vermogen"],
      },
      soft_guard: {
        label: "Veilige marge bewaakt",
        summary: "Het systeem begrenst zichzelf om veilig binnen de temperatuur- en flowgrenzen te blijven.",
        checks: ["Veiligheidsmarge bewaakt", "Geen storing", "Begrenzing verdwijnt vanzelf"],
      },
      less_power: {
        label: "Minder vermogen nodig",
        summary: "De vraag neemt af. Eén warmtepomp kan de resterende vraag weer rustig dragen.",
        checks: ["Vraag neemt af", "Eén warmtepomp is genoeg", "Minder elektrisch vermogen nodig"],
      },
      cooling_request_cleared: {
        label: "Geen koelvraag meer",
        summary: "De koelvraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",
        checks: ["Koelvraag weg", "Warmtepomp stopt", "Naloop kan normaal zijn"],
      },
      heating_request_cleared: {
        label: "Geen warmtevraag meer",
        summary: "De warmtevraag is weggevallen. De warmtepomp mag stoppen en de pomp kan nog kort nalopen.",
        checks: ["Warmtevraag weg", "Warmtepomp stopt", "Naloop kan normaal zijn"],
      },
      no_candidate: {
        label: "Nog geen veilige start",
        summary: "Er is vraag, maar een start is nu nog niet verstandig door wachttijd of bescherming.",
        checks: ["Beschikbaarheid gecontroleerd", "Bescherming of wachttijd actief", "Straks opnieuw beoordelen"],
      },
      candidate_in_rest: {
        label: "Rusttijd loopt nog",
        summary: "De warmtepomp is kort geleden gestopt en wacht nog even om korte cycli te voorkomen.",
        checks: ["Vorige stop is recent", "Start wordt uitgesteld", "Bij blijvende vraag opnieuw beoordelen"],
      },
      candidate_in_defrost: {
        label: "Warmtepomp ontdooit",
        summary: "Deze warmtepomp kan nu niet starten of wisselen omdat ontdooien eerst rustig moet afronden.",
        checks: ["Ontdooien actief", "Niet onnodig wisselen", "Automatisch opnieuw beoordelen"],
      },
      candidate_unavailable: {
        label: "Warmtepomp niet beschikbaar",
        summary: "De warmtepomp is nu geen geschikte kandidaat door beschikbaarheid of technische begrenzing.",
        checks: ["Kandidaat gecontroleerd", "Voorwaarde niet vrij", "Andere keuze blijft mogelijk"],
      },
      defrost_boost: {
        label: "Ontdooien opgevangen",
        summary: "Een andere bron kan tijdelijk helpen terwijl een warmtepomp ontdooit.",
        checks: ["Ontdooien verlaagt kort vermogen", "Andere bron beschikbaar", "Comfort blijft beschermd"],
      },
      boiler_assist: {
        label: "CV ondersteunt tijdelijk",
        summary: "De CV-ketel helpt alleen wanneer de warmtevraag tijdelijk meer vermogen vraagt dan de warmtepompen rustig kunnen leveren.",
        checks: ["Warmtevraag blijft hoog", "Warmtepompen leveren maximaal rustig vermogen", "CV stopt zodra ondersteuning niet meer nodig is"],
      },
      runtime_lead: {
        label: "Draaiurenbalans",
        summary: "De warmtepompen zijn gelijkwaardig. Het systeem kiest de pomp die het beste past bij draaiuren, beschikbaarheid en wachttijd.",
        checks: ["Draaiuren vergeleken", "Warmtepomp beschikbaar", "Wachttijd vrij"],
      },
      oil_return_hold: {
        label: "Compressor beschermen",
        summary: "De warmtepomp blijft kort doorlopen om de compressor netjes te beschermen.",
        checks: ["Minimale looptijd actief", "Stop wordt uitgesteld", "Korte cyclus voorkomen"],
      },
      single_topology: {
        label: "Eén warmtepomp aanwezig",
        summary: "Er is maar één warmtepomp beschikbaar. Keuzes met twee warmtepompen zijn dan niet van toepassing.",
        checks: ["Opstelling gecontroleerd", "Geen tweede warmtepomp", "Keuze blijft beperkt"],
      },
      demand_decreased: {
        label: "Warmtevraag nam af",
        summary: "De vraag zakte terug. Minder vermogen is genoeg om de woning op temperatuur te houden.",
        checks: ["Vraag is lager", "Stopvertraging verlopen", "Andere warmtepomp blijft actief"],
      },
      min_rest_active: {
        label: "Minimum rusttijd actief",
        summary: "De warmtepomp wacht nog even om korte starts en onnodige belasting te voorkomen.",
        checks: ["Vorige stop is recent", "Rusttijd loopt", "Start volgt als vraag blijft"],
      },
      start_stop_rate_high: {
        label: "Veel starts/stops",
        summary: "De warmtepomp start vaker dan wenselijk. Dat is niet direct een storing, maar wel nuttig om te bekijken.",
        checks: ["Startteller hoog", "Geen acute storing", "Nuttig voor support"],
      },
      sticky_protection: {
        label: "Pompbescherming",
        summary: "De pomp draait kort zodat hij na lange stilstand niet vast gaat zitten. Dit is geen verwarmings- of koelvraag.",
        checks: ["Geen comfortvraag", "Dagelijkse bescherming actief", "Alleen korte pomprun"],
      },
      frost_protection: {
        label: "Vorstbescherming",
        summary: "Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.",
        checks: ["Geen comfortvraag nodig", "Vorstrisico bewaakt", "Water blijft circuleren"],
      },
      flow_preflow: {
        label: "Voorloop actief",
        summary: "De pomp bouwt eerst waterflow op voordat de warmtepomp mag starten.",
        checks: ["Waterflow opbouwen", "Warmtepomp nog niet vrij", "Start volgt automatisch"],
      },
      flow_postflow: {
        label: "Naloop actief",
        summary: "De pomp blijft kort nadraaien zodat warmte netjes uit het systeem wordt afgevoerd.",
        checks: ["Warmtepomp stopt", "Pomp draait kort door", "Daarna standby"],
      },
      flow_too_low: {
        label: "Flowcontrole actief",
        summary: "De pomp draait en de regelaar wacht tot de flow vrijgegeven is voor de volgende stap.",
        checks: ["Flow wordt bevestigd", "Warmtepomp wacht kort", "Start volgt automatisch"],
      },
      capacity_cap: {
        label: "Ingesteld koelmaximum",
        summary: "Er is koelvraag. Het systeem blijft binnen het maximale koelniveau dat in de software is ingesteld.",
        checks: ["Koelvraag actief", "Softwaremaximum actief", "Dauwpunt blijft bewaakt"],
      },
      falling_gap: {
        label: "Dauwpuntmarge daalt",
        summary: "De marge tot het dauwpunt wordt kleiner. Het systeem grijpt vroeg in om condens te voorkomen.",
        checks: ["Marge daalt", "Aanvoer blijft veilig", "Koeling blijft voorzichtig actief"],
      },
      projected_floor: {
        label: "Aanvoer nadert veilige ondergrens",
        summary: "De aanvoer dreigt te koud te worden. Het systeem verlaagt de koeling preventief.",
        checks: ["Aanvoer voorspeld", "Veilige grens leidend", "Geen storing"],
      },
      simmer: {
        label: "Koeling rustig bijgesteld",
        summary: "De koeling blijft op een laag niveau zodat de temperatuur rustig richting setpoint kan bewegen.",
        checks: ["Lage koelvraag", "Geen abrupte stop", "Rustige regeling"],
      },
      buffer_stop: {
        label: "Koeling wacht op veilige watermarge",
        summary: "De watermarge is te klein voor verder koelen. Het systeem wacht tot deze weer veilig is.",
        checks: ["Watermarge bewaakt", "Koeling tijdelijk gepauzeerd", "Automatisch opnieuw beoordelen"],
      },
      dew_stop: {
        label: "Dauwpuntstop",
        summary: "De warmtepomp stopt kort omdat verder koelen te dicht bij het dauwpunt zou komen.",
        checks: ["Condensrisico voorkomen", "Koelvraag blijft bestaan", "Herstart na veilige marge"],
      },
      cooling_limiter: {
        label: "Softwaremaximum actief",
        summary: "Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum en blijft de veiligheidsmarges bewaken.",
        checks: ["Koelvraag actief", "Softwaremaximum actief", "Marge blijft bewaakt"],
      },
      sensor_fallback: {
        label: "Sensorwaarde onzeker",
        summary: "Een meting is tijdelijk minder zeker. Het systeem kiest daarom voorzichtig gedrag.",
        checks: ["Metingen gecontroleerd", "Veilige keuze voorrang", "Herstel zodra data stabiel is"],
      },
      restart_wait: {
        label: "Herstart wacht op veilige marge",
        summary: "Na een korte pauze wacht het systeem tot de marge veilig en stabiel genoeg is.",
        checks: ["Herstart wacht bewust", "Marge moet stabiel blijven", "Daarna opnieuw beoordelen"],
      },
      level1_hold: {
        label: "Voorzichtig blijven koelen",
        summary: "De koeling blijft nog even laag totdat duidelijk is dat de veilige marge terug is.",
        checks: ["Even wachten met opschalen", "Geen snelle sprong omhoog", "Comfortvraag blijft bewaakt"],
      },
      room_cap: {
        label: "Kamervraag begrenst",
        summary: "De kamer vraagt koeling, maar niet genoeg om harder te gaan koelen.",
        checks: ["Kamer koelt richting setpoint", "Vraag blijft beperkt", "Rustige regeling"],
      },
      oil_return_recovery: {
        label: "Compressorherstel",
        summary: "Het systeem geeft compressorherstel tijdelijk voorrang en blijft de veiligheid bewaken.",
        checks: ["Compressorprotectie actief", "Gecontroleerd herstel", "Veiligheid blijft bewaakt"],
      },
    };
    return metas[reasonCode] || { label: fallbackLabel, summary: fallbackLabel, checks: [] };
  }

  function getControlWorkingReasonLabel(reasonCode) {
    return getControlWorkingReasonMeta(reasonCode).label;
  }

  function formatControlWorkingModeCode(cm, allowZero = false) {
    const normalized = Number(cm);
    return Number.isFinite(normalized) && (normalized > 0 || (allowZero && normalized === 0)) ? `CM${normalized}` : "";
  }

  function formatControlWorkingModeTransition(fromCm, toCm) {
    const fromLabel = formatControlWorkingModeCode(fromCm);
    const toLabel = formatControlWorkingModeCode(toCm, true);
    return fromLabel && toLabel && fromLabel !== toLabel ? `${fromLabel} → ${toLabel}` : "";
  }

  function deriveControlWorkingModeTransition(event, previousCm) {
    const eventType = String(event?.event_type || "");
    const cm = Number(event?.cm) || 0;
    const valueA = Number(event?.value_a);
    if (eventType === "boiler_assist_start") {
      return formatControlWorkingModeTransition(previousCm || 2, cm === 3 ? 3 : cm);
    }
    if (eventType === "boiler_assist_stop") {
      return formatControlWorkingModeTransition(previousCm === 3 ? 3 : previousCm, cm > 0 ? cm : 2);
    }
    if (eventType === "flow_hold_start" && cm === 1) {
      return formatControlWorkingModeTransition(previousCm, 1);
    }
    if (eventType === "flow_hold_clear" && cm === 1 && Number.isFinite(valueA)) {
      return formatControlWorkingModeTransition(1, valueA);
    }
    return "";
  }

  function getControlWorkingModeAfterEvent(event) {
    const eventType = String(event?.event_type || "");
    const cm = Number(event?.cm) || 0;
    const valueA = Number(event?.value_a);
    if (eventType === "flow_hold_clear" && cm === 1 && Number.isFinite(valueA)) {
      return valueA;
    }
    if (eventType === "frost_protection_clear") {
      return 0;
    }
    return cm;
  }

  function getControlWorkingModeMetaLabel(item) {
    const transitionLabel = String(item?.modeTransitionLabel || "").trim();
    if (transitionLabel) {
      return transitionLabel;
    }
    const modeLabel = String(item?.modeLabel || "").trim();
    return modeLabel.includes("→") ? modeLabel : "";
  }

  function getControlWorkingCoolingContext() {
    const reasonCode = normalizeControlWorkingCoolingReason(getEntityStateText("coolingLimiterReasonCode", ""));
    return {
      requestActive: isEntityActive("coolingRequestActive"),
      permitted: hasEntity("coolingPermitted") ? isEntityActive("coolingPermitted") : true,
      reasonCode: reasonCode || "inactive",
      rawDemand: formatControlReplayNumber("coolingDemandRaw", 0, "", "—"),
      limitedDemand: formatControlReplayNumber("coolingLimitedDemand", 0, "", "—"),
      allowedMax: formatControlReplayNumber("coolingLimiterAllowedMax", 0, "", "—"),
      dewPoint: formatControlReplayNumber("coolingDewPointSelected", 1, "°C", "—"),
      safeSupply: formatControlReplayNumber("coolingEffectiveMinSupplyTemp", 1, "°C", "—"),
      guardMode: getEntityStateText("coolingGuardMode", "Dauwpuntbewaking"),
      blockReason: getEntityStateText("coolingBlockReason", "Ready"),
    };
  }

  function getControlWorkingKindLabel(kind) {
    const labels = {
      event: "Moment",
      span: "Periode",
      aggregate: "Samenvatting",
    };
    return labels[kind] || "Record";
  }

  function renderControlWorkingPill(label, tone = "neutral", icon = "") {
    const iconMarkup = icon ? renderOqIcon(icon, "oq-working-pill-icon") : "";
    return `<span class="oq-working-pill oq-working-pill--${escapeHtml(tone)}">${iconMarkup}<span>${escapeHtml(label)}</span></span>`;
  }

  function shouldShowControlWorkingModeBadge(item) {
    const reasonCode = item?.reasonCode || item?.primaryReason;
    return normalizeControlReplayModeId(item?.modeLabel) === "cm98" && reasonCode === "frost_protection";
  }

  function renderControlWorkingModeBadge(item) {
    if (!shouldShowControlWorkingModeBadge(item)) {
      return "";
    }
    return `<span class="oq-working-mode-badge" aria-label="Technische mode CM98">CM98</span>`;
  }

  function getControlWorkingOptimizerModel(target) {
    const reasonCode = target?.reasonCode || target?.primaryReason || "keep_current";
    const source = target?.source || "HP1 + HP2";
    if (reasonCode === "better_heat") {
      return {
        title: "Keuze van het systeem",
        verdict: "Twee warmtepompen actief",
        summary: "Omdat de warmtevraag hoog blijft, leveren twee warmtepompen rustiger vermogen dan één warmtepomp op hoge belasting.",
        rows: [
          { option: "Eén warmtepomp", result: "Te weinig reserve", code: "better_heat", detail: "De vraag bleef langer hoog dan één warmtepomp rustig kan dragen.", tone: "muted" },
          { option: "Andere losse pomp", result: "Geen voordeel", code: "hold_active", detail: "Wisselen naar de andere pomp zou geen rustiger gedrag geven.", tone: "muted" },
          { option: "Twee warmtepompen", result: "Gekozen", code: "better_heat", detail: "Samen leveren ze meer reserve en minder belasting per pomp.", tone: "selected" },
        ],
      };
    }
    if (reasonCode === "demand_decreased" || reasonCode === "less_power") {
      return {
        title: "Keuze van het systeem",
        verdict: "Eén warmtepomp is genoeg",
        summary: "De warmtevraag is gezakt. Eén warmtepomp kan de resterende warmte rustiger en zuiniger leveren.",
        rows: [
          { option: "Twee warmtepompen", result: "Niet meer nodig", code: "less_power", detail: "Samen leveren ze meer vermogen dan nu nodig is.", tone: "muted" },
          { option: source, result: "Blijft actief", code: "less_power", detail: "Eén warmtepomp dekt de lagere vraag rustiger.", tone: "selected" },
        ],
      };
    }
    if (reasonCode === "runtime_lead") {
      return {
        title: "Keuze van het systeem",
        verdict: `${source} gestart`,
        summary: "De warmtepompen zijn gelijkwaardig. De keuze volgt uit draaiuren, beschikbaarheid en wachttijden.",
        rows: [
          { option: "HP1", result: source === "HP1" ? "Gekozen" : "Niet nu", code: "runtime_lead", detail: "Past het beste bij de actuele draaiurenbalans.", tone: source === "HP1" ? "selected" : "muted" },
          { option: "HP2", result: source === "HP2" ? "Gekozen" : "Niet nu", code: "runtime_lead", detail: "Gelijkwaardige pomp, maar nu minder gunstig in balans of wachttijd.", tone: source === "HP2" ? "selected" : "muted" },
        ],
      };
    }
    if (["min_rest_active", "no_candidate", "candidate_in_rest", "candidate_in_defrost", "candidate_unavailable"].includes(reasonCode)) {
      return {
        title: "Startcontrole",
        verdict: "Start uitgesteld",
        summary: getControlWorkingReasonMeta(reasonCode).summary,
        rows: [
          { option: source, result: "Wacht nog", code: reasonCode, detail: getControlWorkingReasonMeta(reasonCode).summary, tone: "limited" },
          { option: "Opnieuw beoordelen", result: "Straks", code: "hold_active", detail: "Het systeem probeert opnieuw zodra starten verstandig is.", tone: "muted" },
        ],
      };
    }
    if (["flow_preflow", "flow_postflow", "flow_too_low"].includes(reasonCode)) {
      return {
        title: "Waterflow eerst",
        verdict: reasonCode === "flow_postflow" ? "Naloop actief" : "Start wacht",
        summary: getControlWorkingReasonMeta(reasonCode).summary,
        rows: [
          { option: "Waterflow", result: reasonCode === "flow_too_low" ? "Nog te laag" : "Wordt bewaakt", code: reasonCode, detail: "De pomp zorgt voor veilige circulatie voordat de volgende stap vrij is.", tone: "selected" },
          { option: "Warmtepomp", result: reasonCode === "flow_postflow" ? "Gestopt" : "Wacht nog", code: reasonCode, detail: "De compressor start pas als de flowconditie veilig is.", tone: "limited" },
          { option: "Regelaar", result: "Probeert opnieuw", code: "keep_current", detail: "De controller beoordeelt dit automatisch opnieuw.", tone: "muted" },
        ],
      };
    }
    if (reasonCode === "defrost_hold" || reasonCode === "defrost_boost") {
      return {
        title: "Bescherming",
        verdict: "Ontdooien krijgt voorrang",
        summary: "Tijdens ontdooien houdt het systeem de regeling rustig, zodat de warmtepomp vanzelf kan herstellen.",
        rows: [
          { option: "Actieve warmtepomp", result: "Rustig laten herstellen", code: "defrost_hold", detail: "Niet wisselen zolang ontdooien of herstel actief is.", tone: "selected" },
          { option: "Extra bron", result: reasonCode === "defrost_boost" ? "Helpt mee" : "Stand-by", code: reasonCode, detail: "Alleen inzetten als comfort of vermogen daarom vraagt.", tone: reasonCode === "defrost_boost" ? "selected" : "muted" },
        ],
      };
    }
    if (reasonCode === "boiler_assist") {
      return {
        title: "Bronkeuze",
        verdict: "CV ondersteunt tijdelijk",
        summary: "De warmtepompen blijven de basis leveren. CV vult alleen aan zolang extra vermogen nodig is.",
        rows: [
          { option: "Alleen warmtepompen", result: "Te weinig reserve", code: "better_heat", detail: "De vraag bleef hoger dan de warmtepompen rustig konden leveren.", tone: "muted" },
          { option: "CV-ketel", result: "Tijdelijk bij", code: "boiler_assist", detail: "CV levert extra vermogen en stopt zodra de vraag zakt.", tone: "selected" },
          { option: "Na piek", result: "Terug naar HP", code: "less_power", detail: "De warmtepompen nemen het weer over als ondersteuning niet meer nodig is.", tone: "muted" },
        ],
      };
    }
    if (reasonCode === "sticky_protection") {
      return {
        title: "Pompbescherming",
        verdict: "Korte pomprun",
        summary: "Alleen de pomp draait kort. De warmtepompen blijven uit omdat er geen verwarmings- of koelvraag is.",
        rows: [
          { option: "Verwarmen", result: "Niet nodig", code: "keep_current", detail: "Geen warmtevraag vanuit kamer of regeling.", tone: "muted" },
          { option: "Koelen", result: "Niet nodig", code: "keep_current", detail: "Geen koelvraag vanuit de kamer.", tone: "muted" },
          { option: "Pomp", result: "Kort aan", code: "sticky_protection", detail: "De dagelijkse bescherming laat de pomp ongeveer 1 minuut draaien.", tone: "selected" },
        ],
      };
    }
    if (["capacity_cap", "room_cap", "cooling_limiter"].includes(reasonCode)) {
      const cooling = getControlWorkingCoolingContext();
      return {
        title: "Koelregeling",
        verdict: `Maximaal ingesteld niveau ${cooling.allowedMax}`,
        summary: "De koelvraag wordt uitgevoerd binnen het ingestelde maximum. Dit is normale regeling, geen aandachtspunt.",
        rows: [
          { option: "Gevraagd koelniveau", result: cooling.rawDemand, code: "coolingDemandRaw", detail: "Wat de kamer vraagt voordat het ingestelde maximum meetelt.", tone: "muted" },
          { option: "Ingesteld maximum", result: cooling.allowedMax, code: reasonCode, detail: "Het hoogste niveau dat de software nu toestaat.", tone: "selected" },
          { option: "Uitgestuurd niveau", result: cooling.limitedDemand, code: "coolingLimitedDemand", detail: "Het niveau dat de warmtepomp op dit moment krijgt.", tone: "normal" },
        ],
      };
    }
    if (["falling_gap", "projected_floor", "dew_stop", "restart_wait", "level1_hold", "oil_return_recovery", "sensor_fallback"].includes(reasonCode)) {
      const cooling = getControlWorkingCoolingContext();
      return {
        title: "Koelbewaking",
        verdict: cooling.permitted ? `Maximaal koelniveau ${cooling.allowedMax}` : "Koeling tijdelijk gepauzeerd",
        summary: "De koelvraag blijft actief, maar dauwpunt, aanvoer of compressorconditie vraagt tijdelijk voorzichtig gedrag.",
        rows: [
          { option: "Gevraagd koelniveau", result: cooling.rawDemand, code: "coolingDemandRaw", detail: "Wat de kamer vraagt voordat bewaking meetelt.", tone: "muted" },
          { option: "Maximaal veilig", result: cooling.allowedMax, code: reasonCode, detail: "Het hoogste niveau dat nu veilig is met de huidige dauwpuntmarge.", tone: "selected" },
          { option: "Uitgestuurd niveau", result: cooling.limitedDemand, code: "coolingLimitedDemand", detail: "Het niveau dat de warmtepomp op dit moment krijgt.", tone: "limited" },
        ],
      };
    }
    return null;
  }

  function renderControlWorkingOptimizer(model) {
    if (!model) {
      return "";
    }
    return `
      <div class="oq-working-optimizer">
        <div class="oq-working-optimizer-head">
          <span class="oq-working-eyebrow">${escapeHtml(model.title)}</span>
          <strong>${escapeHtml(model.verdict)}</strong>
          <p>${escapeHtml(model.summary)}</p>
        </div>
        <div class="oq-working-optimizer-options">
          ${model.rows.map((row) => `
            <div class="oq-working-optimizer-option oq-working-optimizer-option--${escapeHtml(row.tone || "muted")}">
              <span>${escapeHtml(row.option)}</span>
              <strong>${escapeHtml(row.result)}</strong>
              <p>${escapeHtml(row.detail)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function getControlWorkingCurrent(heatPumpPanels) {
    const modeModel = getControlReplayModeModel(heatPumpPanels);
    const rawControlModeLabel = getEntityStateText("controlModeLabel", "—");
    const currentModeId = normalizeControlReplayModeId(rawControlModeLabel);
    const currentModeLabel = currentModeId ? currentModeId.toUpperCase() : rawControlModeLabel;
    const hp1Panel = heatPumpPanels.find((panel) => panel.title === "HP1") || heatPumpPanels[0];
    const hp2Panel = heatPumpPanels.find((panel) => panel.title === "HP2");
    const hp1Running = isControlReplayHpRunning(hp1Panel);
    const hp2Running = hp2Panel ? isControlReplayHpRunning(hp2Panel) : false;
    const duoActive = hp1Running && hp2Running;
    const defrostActive = modeModel.defrostActive;
    const coolingContext = getControlWorkingCoolingContext();
    const coolingProtection = modeModel.coolingProtection;
    const coolingCapped = modeModel.coolingCapped;
    const coolingActive = modeModel.coolingMode || modeModel.coolingRequest;
    const stickyActive = hasEntity("stickyActive") && isEntityActive("stickyActive");
    const boilerActive = modeModel.boilerActive;

    let title = "Eén warmtepomp actief";
    let copy = "De actuele vraag past binnen één warmtepomp. De andere warmtepomp blijft beschikbaar als extra capaciteit nodig is.";
    let expectation = "Een extra warmtepomp schakelt bij zodra de vraag lang genoeg hoog blijft en alle wachttijden vrij zijn.";
    let severity = "normal";
    let primaryReason = "keep_current";
    let sinceLabel = "Live";

    if (currentModeId === "cm98") {
      title = "Vorstbescherming actief";
      copy = "Het systeem laat water circuleren om bevriezing van het watercircuit te voorkomen.";
      expectation = "Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.";
      severity = "limited";
      primaryReason = "frost_protection";
      sinceLabel = "Bescherming actief";
    } else if (stickyActive) {
      title = "Pompbescherming actief";
      copy = "Er is geen warmte- of koelvraag. De pomp draait kort om vastzitten na lange stilstand te voorkomen.";
      expectation = "Na ongeveer 1 minuut stopt de pomp en blijft het systeem standby tot er comfortvraag of bescherming nodig is.";
      primaryReason = "sticky_protection";
      sinceLabel = "Dagelijkse run";
    } else if (coolingProtection) {
      const limiterReason = coolingContext.reasonCode && coolingContext.reasonCode !== "inactive" ? coolingContext.reasonCode : "soft_guard";
      title = coolingContext.permitted ? "Koeling tijdelijk beperkt" : "Koeling tijdelijk gepauzeerd";
      copy = `Er is koelvraag, maar het systeem koelt nu maximaal op niveau ${coolingContext.allowedMax} om condens te voorkomen.`;
      expectation = "Koeling neemt stap voor stap toe zodra de dauwpuntmarge veilig en stabiel is.";
      severity = "limited";
      primaryReason = limiterReason;
      sinceLabel = "Koelvraag actief";
    } else if (coolingCapped) {
      const coolingMaxLabel = coolingContext.allowedMax && coolingContext.allowedMax !== "—"
        ? `niveau ${coolingContext.allowedMax}`
        : "het ingestelde maximum";
      const cappedReason = ["capacity_cap", "room_cap", "cooling_limiter"].includes(coolingContext.reasonCode)
        ? coolingContext.reasonCode
        : "capacity_cap";
      title = "Koeling actief op ingesteld maximum";
      copy = `Er is koelvraag. Het systeem koelt maximaal op ${coolingMaxLabel}, zoals ingesteld in de software.`;
      expectation = "Koeling blijft binnen dit maximum. Dauwpunt, aanvoer en waterflow worden op de achtergrond bewaakt.";
      primaryReason = cappedReason;
      sinceLabel = "Koelvraag actief";
    } else if (coolingActive) {
      title = "Koeling actief";
      copy = "Er is koelvraag en dauwpuntbewaking geeft koeling vrij. Het systeem blijft marge en waterflow bewaken.";
      expectation = "Koeling blijft actief tot de kamertemperatuur richting setpoint zakt of bescherming ingrijpt.";
      primaryReason = "keep_current";
      sinceLabel = "Koelen";
    } else if (boilerActive) {
      title = "CV-ketel ondersteunt";
      copy = "De CV-ketel helpt tijdelijk omdat de warmtevraag meer vermogen vraagt dan de warmtepompen nu leveren.";
      expectation = "De CV-ketel stopt zodra de warmtepompen de vraag weer zelf kunnen dragen.";
      severity = "limited";
      primaryReason = "boiler_assist";
      sinceLabel = "Ondersteuning actief";
    } else if (defrostActive) {
      title = "Ontdooien actief";
      copy = "Een warmtepomp ontdooit tijdelijk. Het systeem houdt de keuze rustig zodat het ontdooien vanzelf kan afronden.";
      expectation = "De warmtepomp hervat automatisch zodra het ontdooien klaar is.";
      severity = "limited";
      primaryReason = "defrost_hold";
      sinceLabel = "Tijdelijk";
    } else if (duoActive) {
      title = "Duo-bedrijf actief";
      copy = "Beide warmtepompen draaien omdat de warmtevraag hoog blijft. Dit is normaal winterbedrijf.";
      expectation = "Eén warmtepomp stopt zodra de warmtevraag voldoende afneemt of single-bedrijf weer efficiënter is.";
      primaryReason = "better_heat";
      sinceLabel = "Actief";
    } else if (!hp1Running && !hp2Running) {
      title = "Geen warmtepomp actief";
      copy = "Er is nu geen warmtepompactie nodig, of het systeem wacht door bescherming of rusttijd.";
      expectation = "Bij nieuwe vraag kiest het systeem opnieuw de best passende warmtepomp.";
      primaryReason = "keep_current";
      sinceLabel = "Stand-by";
    }

    return {
      title,
      copy,
      expectation,
      severity,
      primaryReason,
      sinceLabel,
      modeLabel: currentModeLabel,
      strategyLabel: formatControlReplayStrategyLabel(),
      reasonLabel: getControlWorkingReasonLabel(primaryReason),
      hp1Running,
      hp2Running,
      hp2Available: Boolean(hp2Panel),
      hp1Status: hp1Running ? "Actief" : "Beschikbaar",
      hp2Status: hp2Panel ? (hp2Running ? "Actief" : "Beschikbaar") : "Niet aanwezig",
      cvStatus: boilerActive ? "Actief" : "Uit",
      outsideTemp: formatControlReplayNumber("outsideTempSelected", 1, "°C", "—"),
      supplyTemp: formatControlReplayNumber("waterSupplyTempSelected", 1, "°C", "—"),
      flow: formatControlReplayNumber("flowSelected", 0, "L/h", "—"),
      hp1Starts: getControlReplayCounterValue("hp1CompressorStarts24h", "—"),
      hp2Starts: getControlReplayCounterValue("hp2CompressorStarts24h", hp2Panel ? "—" : "n.v.t."),
      hp1Hours: formatControlReplayRuntimeHours("hp1Minutes", "—"),
      hp2Hours: hp2Panel ? formatControlReplayRuntimeHours("hp2Minutes", "—") : "n.v.t.",
      cooling: coolingContext,
      coolingProtection,
      coolingCapped,
    };
  }

  function getDecisionLogEvents() {
    const payload = state.decisionLog;
    return payload?.ok && Array.isArray(payload.events) ? payload.events : [];
  }

  function getDecisionEventEpochMs(event) {
    const epochS = Number(event?.epoch_s);
    if (Number.isFinite(epochS) && epochS > 0) {
      return epochS * 1000;
    }
    const bootEpochS = Number(state.decisionLog?.meta?.boot_epoch_s);
    const uptimeS = Number(event?.uptime_s);
    if (Number.isFinite(bootEpochS) && bootEpochS > 0 && Number.isFinite(uptimeS) && uptimeS >= 0) {
      return (bootEpochS + uptimeS) * 1000;
    }
    return Number.NaN;
  }

  function getDecisionEventAgeMinutes(event, nowMs = Date.now()) {
    const epochMs = getDecisionEventEpochMs(event);
    if (Number.isFinite(epochMs)) {
      return Math.max(0, Math.round((nowMs - epochMs) / 60000));
    }
    const payloadUptimeS = Number(state.decisionLog?.meta?.uptime_s);
    const eventUptimeS = Number(event?.uptime_s);
    if (Number.isFinite(payloadUptimeS) && Number.isFinite(eventUptimeS)) {
      return Math.max(0, Math.round((payloadUptimeS - eventUptimeS) / 60));
    }
    return Number.NaN;
  }

  function isControlWorkingSameLocalDay(left, right) {
    return left.getFullYear() === right.getFullYear()
      && left.getMonth() === right.getMonth()
      && left.getDate() === right.getDate();
  }

  function formatControlWorkingAbsoluteTimeLabel(epochMs, nowMs = Date.now(), mode = "auto") {
    if (!Number.isFinite(epochMs)) {
      return "Onbekend";
    }
    const date = new Date(epochMs);
    const time = date.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
    if (mode === "time") {
      return time;
    }
    if (mode === "weekday") {
      const day = date.toLocaleDateString("nl-NL", { weekday: "short" }).replace(".", "");
      return `${day} ${time}`;
    }
    const today = new Date(nowMs);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (isControlWorkingSameLocalDay(date, today)) {
      return time;
    }
    if (isControlWorkingSameLocalDay(date, yesterday)) {
      return `gisteren ${time}`;
    }
    const day = date.toLocaleDateString("nl-NL", { weekday: "short" }).replace(".", "");
    return `${day} ${time}`;
  }

  function getControlWorkingWindowEpochForMinute(minute, selectedWindow = getControlWorkingSelectedWindow(), nowMs = Date.now()) {
    const normalized = Math.max(0, Math.min(1440, Number(minute) || 0));
    const bounds = getControlWorkingWindowBounds(selectedWindow, nowMs);
    return bounds.start + ((normalized / 1440) * (bounds.end - bounds.start));
  }

  function getDecisionEventWindowMinute(event, selectedWindow = getControlWorkingSelectedWindow(), nowMs = Date.now()) {
    const epochMs = getDecisionEventEpochMs(event);
    const minuteInWindow = (value, start, end) => {
      if (!Number.isFinite(value) || value < start || value > end) {
        return Number.NaN;
      }
      return ((value - start) / Math.max(1, end - start)) * 1440;
    };

    if (Number.isFinite(epochMs)) {
      const bounds = getControlWorkingWindowBounds(selectedWindow, nowMs);
      return minuteInWindow(epochMs, bounds.start, bounds.end);
    }

    const ageMinutes = getDecisionEventAgeMinutes(event, nowMs);
    if (!Number.isFinite(ageMinutes)) {
      return Number.NaN;
    }
    const option = getControlWorkingWindowOptions().find((candidate) => candidate.id === selectedWindow);
    if (option?.calendarDay || option?.custom) {
      return Number.NaN;
    }
    const durationMinutes = getControlWorkingWindowDurationMinutes(selectedWindow, nowMs);
    return ageMinutes <= durationMinutes
      ? 1440 - ((ageMinutes / durationMinutes) * 1440)
      : Number.NaN;
  }

  function formatDecisionLogTimeLabel(event, selectedWindow = getControlWorkingSelectedWindow(), nowMs = Date.now()) {
    const epochMs = getDecisionEventEpochMs(event);
    if (!Number.isFinite(epochMs)) {
      const ageMinutes = getDecisionEventAgeMinutes(event, nowMs);
      return Number.isFinite(ageMinutes) ? formatControlWorkingRelativeOffset(ageMinutes) : "Onbekend";
    }
    if (selectedWindow === "week" || selectedWindow === "last48" || selectedWindow === "last3d" || selectedWindow === "custom") {
      return formatControlWorkingAbsoluteTimeLabel(epochMs, nowMs, "weekday");
    }
    if (selectedWindow.startsWith("last")) {
      return formatControlWorkingAbsoluteTimeLabel(epochMs, nowMs, "auto");
    }
    return formatControlWorkingAbsoluteTimeLabel(epochMs, nowMs, "time");
  }

  function formatDecisionDuration(seconds) {
    const normalized = Math.max(0, Math.round(Number(seconds) || 0));
    if (!normalized) {
      return "";
    }
    if (normalized < 60) {
      return `${normalized}s`;
    }
    if (normalized < 3600) {
      return `${Math.round(normalized / 60)} min`;
    }
    const hours = Math.floor(normalized / 3600);
    const minutes = Math.round((normalized % 3600) / 60);
    return minutes ? `${hours}u ${minutes}m` : `${hours}u`;
  }

  function getDecisionSubjectLabel(subject) {
    const normalized = String(subject || "").toUpperCase();
    const labels = {
      SYSTEM: "Systeem",
      HP1: "HP1",
      HP2: "HP2",
      BOTH: "HP1 + HP2",
      CV: "CV-ketel",
      COOLING: "Koeling",
      PUMP: "Pomp",
      CONTROLLER: "Regelaar",
    };
    return labels[normalized] || "Systeem";
  }

  function getDecisionModeSubjectLabel(subject, contextCm) {
    const normalized = String(subject || "").toUpperCase();
    const subjectLabel = getDecisionSubjectLabel(subject);
    if (normalized !== "HP1" && normalized !== "HP2" && normalized !== "BOTH") {
      return subjectLabel;
    }
    if (Number(contextCm) === 5) {
      return `${subjectLabel} (koelen)`;
    }
    if (Number(contextCm) > 0) {
      return `${subjectLabel} (verwarmen)`;
    }
    return subjectLabel;
  }

  function getDecisionCoolingSourceLabel(event) {
    const coolingSubject = String(event?._oq_active_cooling_subject || "").toUpperCase();
    if (coolingSubject === "HP1" || coolingSubject === "HP2" || coolingSubject === "BOTH") {
      return getDecisionModeSubjectLabel(coolingSubject, 5);
    }
    return getDecisionModeSubjectLabel(event?.subject, 5);
  }

  function getControlWorkingSingleTopologySource(event) {
    const subject = String(event?.subject || "").toUpperCase();
    return subject === "HP1" || subject === "HP2" ? subject : "";
  }

  function getDecisionEventCopy(event) {
    const eventType = String(event?.event_type || "");
    const subject = getDecisionSubjectLabel(event?.subject);
    const reasonCode = String(event?.reason || "unknown");
    const isCoolingModeEvent = Number(event?._oq_context_cm ?? event?.cm) === 5;
    const activeCoolingSource = event?._oq_active_cooling_source || "De warmtepomp";
    const activeHeatingSource = event?._oq_active_heating_source || "De warmtepomp";
    const coolingStopReason = String(event?._oq_cooling_stop_reason || (reasonCode === "dew_stop" ? "dew_stop" : ""));
    const coolingDemandEnded = ["less_power", "demand_decreased", "cooling_request_cleared"].includes(reasonCode);
    const heatingDemandEnded = reasonCode === "heating_request_cleared";
    const coolingRuntimeHold = Boolean(event?._oq_cooling_runtime_hold);
    const heatingRuntimeHold = Boolean(event?._oq_heating_runtime_hold);
    const coolingProtectionReason = isControlWorkingCoolingProtectionReason(reasonCode);
    const boilerStopBlocked = ["soft_guard", "sensor_fallback", "no_candidate", "flow_preflow"].includes(reasonCode);
    const reason = getControlWorkingReasonMeta(reasonCode);
    const isFlowPreStart = reasonCode === "flow_preflow" || reasonCode === "flow_too_low";
    const fallback = {
      title: "Keuze van het systeem",
      summary: "De regelaar heeft een keuze vastgelegd.",
      detail: reason.summary,
      next: "Het systeem beoordeelt opnieuw zodra vraag, marge of beschikbaarheid verandert.",
    };
    const copies = {
      source_start: {
        title: isCoolingModeEvent ? `Koeling gestart (${subject})` : `${subject} gestart`,
        reasonLabel: isCoolingModeEvent ? "Koeling gestart" : "",
        reasonSummary: isCoolingModeEvent ? "Koeling is vrijgegeven en de gekozen warmtepomp start met koelen." : "",
        summary: isCoolingModeEvent
          ? `${subject} is gestart om te koelen. Dauwpunt, waterflow en aanvoertemperatuur blijven bewaakt.`
          : `${subject} is gekozen op basis van beschikbaarheid, wachttijd en draaiurenbalans.`,
        detail: isCoolingModeEvent
          ? "De koelvraag is vrijgegeven. HP1 en HP2 zijn gelijkwaardig; de regelaar kiest de beschikbare bron die nu het beste past."
          : "HP1 en HP2 zijn gelijkwaardig. De regelaar kiest de beschikbare bron die op dat moment het beste past.",
        next: isCoolingModeEvent
          ? "Koeling blijft actief zolang er koelvraag is en de veilige marges vrij blijven."
          : "Als de vraag hoog blijft, beoordeelt het systeem of extra vermogen nodig is.",
      },
      source_stop: {
        title: isCoolingModeEvent
          ? coolingStopReason === "dew_stop"
            ? `${subject} gestopt door dauwpunt`
            : coolingDemandEnded
            ? `Koeling gestopt: geen koelvraag`
            : `Koeling afgerond (${subject})`
          : heatingDemandEnded
          ? "Verwarming gestopt: geen warmtevraag"
          : reasonCode === "less_power"
          ? "Eén warmtepomp stopt"
          : `${subject} gestopt`,
        reasonLabel: isCoolingModeEvent
          ? coolingStopReason === "dew_stop"
            ? "Dauwpuntstop"
            : coolingDemandEnded
            ? "Geen koelvraag"
            : "Koeling afgerond"
          : heatingDemandEnded
          ? "Geen warmtevraag"
          : reasonCode === "less_power"
          ? "Eén warmtepomp is genoeg"
          : "",
        reasonSummary: isCoolingModeEvent
          ? coolingStopReason === "dew_stop"
            ? "De warmtepomp stopte omdat de dauwpuntbewaking koelen pauzeerde."
            : coolingDemandEnded
            ? "De koelvraag is weggevallen of voldoende afgenomen."
            : "De koelactie is afgerond. Een korte pompnaloop kan daarna normaal zijn."
          : heatingDemandEnded
          ? "De warmtevraag is weggevallen. Een korte pompnaloop kan daarna normaal zijn."
          : reasonCode === "less_power"
          ? "De warmtevraag is afgenomen; één warmtepomp kan de resterende vraag dragen."
          : "",
        summary: isCoolingModeEvent
          ? coolingStopReason === "dew_stop"
            ? `${subject} stopte omdat verder koelen te dicht bij het dauwpunt kwam.`
            : coolingDemandEnded
            ? "Er is geen koelvraag meer; de warmtepomp stopt met koelen."
            : `${subject} is klaar met koelen.`
          : heatingDemandEnded
          ? "Er is geen warmtevraag meer; de warmtepomp stopt met verwarmen."
          : reasonCode === "less_power"
          ? "De vraag is lager. Eén warmtepomp kan de resterende warmtevraag rustig dragen."
          : `${subject} is gestopt omdat minder vermogen voldoende is of bescherming voorrang kreeg.`,
        detail: isCoolingModeEvent
          ? coolingStopReason === "dew_stop"
            ? "Dit is beschermingsgedrag. Het systeem voorkomt condens en kan later opnieuw koelen zodra de marge veilig is."
            : "De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden."
          : heatingDemandEnded
          ? "De regeling vraagt geen warmte meer. De pomp kan daarna nog kort nalopen om het watercircuit netjes af te ronden."
          : "De regelaar voorkomt onnodig doordraaien en houdt tegelijk wachttijden en bescherming in de gaten.",
        next: isCoolingModeEvent
          ? coolingStopReason === "dew_stop"
            ? "Bij blijvende koelvraag start koeling opnieuw zodra de dauwpuntmarge veilig genoeg is."
            : "Het systeem blijft standby of rondt de naloop af totdat er opnieuw koelvraag is."
          : heatingDemandEnded
          ? "Het systeem blijft standby totdat er opnieuw warmtevraag is."
          : "Bij stijgende vraag kan dezelfde of de andere warmtepomp opnieuw starten.",
      },
      topology_change: {
        title: isCoolingModeEvent
          ? event?.to === "idle"
            ? reasonCode === "cooling_request_cleared"
              ? "Koeling gestopt: geen koelvraag"
              : reasonCode === "dew_stop"
              ? "Koeling gestopt door dauwpunt"
              : "Koeling gestopt"
            : "Koeling actief"
          : event?.to === "idle" && heatingDemandEnded
          ? "Verwarming gestopt: geen warmtevraag"
          : event?.to === "duo"
          ? "Twee warmtepompen verwarmen"
          : "Eén warmtepomp verwarmt",
        reasonLabel: isCoolingModeEvent
          ? event?.to === "idle"
            ? reasonCode === "cooling_request_cleared"
              ? "Geen koelvraag"
              : reasonCode === "dew_stop"
              ? "Dauwpuntstop"
              : "Koeling gestopt"
            : "Koeling actief"
          : event?.to === "idle" && heatingDemandEnded
          ? "Geen warmtevraag"
          : "",
        reasonSummary: isCoolingModeEvent
          ? event?.to === "idle"
            ? reasonCode === "cooling_request_cleared"
              ? "De koelvraag is weggevallen. Eventuele naloop is normaal."
              : reasonCode === "dew_stop"
              ? "Koeling pauzeert om condens te voorkomen. Herstart kan zodra de marge veilig is."
              : "Er is geen warmtepomp meer actief voor koeling. Eventuele naloop is normaal."
            : "Koeling is actief. Het systeem bewaakt tegelijk de veilige marges."
          : event?.to === "idle" && heatingDemandEnded
          ? "De warmtevraag is weggevallen. Eventuele naloop is normaal."
          : "",
        summary: isCoolingModeEvent
          ? event?.to === "idle"
            ? reasonCode === "cooling_request_cleared"
              ? "De koelvraag is weg. Er is geen warmtepomp meer actief voor koeling."
              : reasonCode === "dew_stop"
              ? "Koeling stopt tijdelijk omdat verder koelen te dicht bij het dauwpunt komt."
              : "Er is geen warmtepomp meer actief voor koeling."
            : `${subject} koelt. Het systeem blijft dauwpunt, waterflow en aanvoertemperatuur bewaken.`
          : event?.to === "duo"
          ? "Samen leveren de warmtepompen rustiger vermogen dan één warmtepomp op hoge belasting."
          : event?.to === "idle" && heatingDemandEnded
          ? "Er is geen warmtepomp meer actief voor verwarmen."
          : "De vraag is lager. Eén warmtepomp kan de resterende vraag weer rustig dragen.",
        detail: isCoolingModeEvent
          ? "Koelen gebruikt dezelfde bronkeuze-logica als verwarmen: de warmtepompen zijn gelijkwaardig en de controller kiest de rustigste beschikbare bron."
          : "De duo-keuze gaat niet over hoofd- en hulppomp. De warmtepompen zijn gelijkwaardig; het systeem kiest de rustigste combinatie.",
        next: isCoolingModeEvent
          ? "Koeling blijft actief zolang er koelvraag is en bescherming geen beperking vraagt."
          : event?.to === "duo"
          ? "Duo-bedrijf blijft actief zolang de extra reserve nuttig is."
          : event?.to === "idle" && heatingDemandEnded
          ? "Het systeem blijft standby totdat er opnieuw warmtevraag is."
          : "De tweede warmtepomp blijft beschikbaar als de vraag opnieuw stijgt.",
      },
      decision_hold: {
        title: reasonCode === "defrost_hold" ? "Keuze kort vastgehouden" : "Start of wissel uitgesteld",
        summary: reasonCode === "defrost_hold"
          ? "De regelaar laat ontdooien rustig afronden voordat hij opnieuw schakelt."
          : "De regelaar wacht bewust even om korte cycli en onrustig gedrag te voorkomen.",
        detail: reason.summary,
        next: "Na de wachttijd beoordeelt het systeem opnieuw wat de rustigste keuze is.",
      },
      decision_blocked: {
        title: subject === "CV-ketel" ? "CV-ketel niet vrijgegeven" : "Actie geblokkeerd",
        summary: subject === "CV-ketel"
          ? "Er was een mogelijke hulpvraag, maar de CV-ketel was niet vrijgegeven."
          : "De gevraagde actie is tijdelijk niet toegestaan door een voorwaarde of bescherming.",
        detail: reason.summary,
        next: "De regelaar probeert opnieuw zodra de voorwaarden vrij zijn.",
      },
      candidate_blocked: {
        title: `${subject} wacht nog`,
        summary: reasonCode === "candidate_in_rest"
          ? `${subject} zit nog in rusttijd na een vorige stop.`
          : `${subject} is nu nog geen veilige kandidaat om te starten.`,
        detail: reason.summary,
        next: "De regelaar probeert opnieuw zodra de voorwaarde vrij is en de vraag blijft bestaan.",
      },
      flow_hold_start: {
        title: reasonCode === "flow_postflow"
          ? coolingRuntimeHold ? "Koeling loopt nog kort door" : heatingRuntimeHold ? "Verwarming loopt nog kort door" : isCoolingModeEvent ? "Naloop na koelen actief" : "Naloop actief"
          : isCoolingModeEvent ? "Voorloop voor koelen" : "Voorloop voor start",
        reasonLabel: reasonCode === "flow_postflow"
          ? coolingRuntimeHold || heatingRuntimeHold ? "Minimale looptijd" : isCoolingModeEvent ? "Naloop na koelen" : "Naloop actief"
          : isCoolingModeEvent ? "Voorloop voor koelen" : "Voorloop actief",
        reasonSummary: isCoolingModeEvent
          ? reasonCode === "flow_postflow"
            ? coolingRuntimeHold
              ? `${activeCoolingSource} staat nog op Cooling terwijl het systeem al in CM1 naloop zit.`
              : "De pomp draait kort na om het koelbedrijf netjes af te ronden."
            : "De pomp draait eerst kort zodat de flow stabiel is voordat de warmtepomp met koelen start."
          : heatingRuntimeHold
          ? `${activeHeatingSource} verwarmt nog terwijl de regelaar al in CM1 naloop zit.`
          : "",
        summary: isCoolingModeEvent
          ? reasonCode === "flow_postflow"
            ? coolingRuntimeHold
              ? `${activeCoolingSource} koelt nog kort door door minimale looptijd; het systeem zit al in naloop.`
              : "De pomp draait kort na zodat het koelbedrijf netjes wordt afgerond."
            : "De pomp draait eerst kort voor. Daarna mag de warmtepomp met koelen starten."
          : isFlowPreStart
            ? "De pomp draait eerst kort voor zodat de flow stabiel is voordat de warmtepomp start."
          : heatingRuntimeHold
          ? `${activeHeatingSource} verwarmt nog kort door door minimale looptijd; het systeem zit al in naloop.`
          : reason.summary,
        detail: isCoolingModeEvent
          ? coolingRuntimeHold
            ? "De controller vraagt geen nieuwe koelactie meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop."
            : "Dit is een normale startstap. De pomp krijgt eerst ongeveer 30 seconden om waterflow op te bouwen; daarna wordt de koelactie vrijgegeven."
          : heatingRuntimeHold
          ? "De regelaar vraagt geen nieuwe warmte meer, maar stopt de buitenunit niet abrupt. Eerst wordt de minimale looptijd afgerond; daarna volgt de normale pompnaloop."
          : "CM1 wordt gebruikt als korte flowfase. De pomp krijgt eerst even tijd om waterflow op te bouwen voordat de warmtepomp start of stopt.",
        next: isCoolingModeEvent
          ? reasonCode === "flow_postflow"
            ? coolingRuntimeHold
              ? `${activeCoolingSource} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`
              : "Daarna blijft het systeem standby of beoordeelt het een nieuwe koelvraag."
            : "Na de korte voorloop gaat het systeem automatisch door met koelen."
          : heatingRuntimeHold
          ? `${activeHeatingSource} stopt zodra de minimale looptijd vrij is; daarna rondt de pomp de naloop af.`
          : "De regelaar gaat automatisch verder zodra de flowfase klaar is.",
      },
      flow_hold_clear: {
        title: reasonCode === "flow_postflow"
          ? isCoolingModeEvent ? "Naloop na koelen klaar" : "Naloop klaar"
          : isCoolingModeEvent ? "Voorloop voor koelen klaar" : "Voorloop klaar",
        reasonLabel: reasonCode === "flow_postflow"
          ? isCoolingModeEvent ? "Naloop na koelen" : "Naloop actief"
          : isCoolingModeEvent ? "Koelen vrijgegeven" : "Voorloop klaar",
        reasonSummary: isCoolingModeEvent
          ? reasonCode === "flow_postflow"
            ? "De korte pompnaloop na koelen is afgerond."
            : "De waterflow is voldoende; de warmtepomp kan met koelen verder."
          : "",
        summary: isCoolingModeEvent
          ? reasonCode === "flow_postflow"
            ? "De pomp heeft kort nagedraaid; het koelbedrijf is afgerond."
            : "De waterflow is voldoende; koeling kan verder."
          : reasonCode === "flow_postflow"
          ? "De pomp heeft kort nagedraaid; het systeem kan terug naar standby."
          : "De waterflowfase is afgerond; de normale regeling kan verder.",
        detail: isCoolingModeEvent
          ? "De flowfase hoort bij het koeltraject. Dit is normaal gedrag rond starten of stoppen van koeling."
          : reason.summary,
        next: isCoolingModeEvent
          ? reasonCode === "flow_postflow"
            ? "Het systeem blijft standby totdat er opnieuw koelvraag of bescherming nodig is."
            : "De controller vervolgt met koelen en blijft dauwpunt en aanvoer bewaken."
          : "De controller vervolgt met verwarmen, koelen, vorstbescherming of standby.",
      },
      defrost_seen_start: {
        title: `Ontdooien gestart (${subject})`,
        summary: `${subject} ontdooit kort. Dat is normaal bij koud en vochtig weer.`,
        detail: "De buitenunit bepaalt zelf hoe lang ontdooien duurt. De regelaar voorkomt ondertussen onnodige wissels.",
        next: "Na ontdooien levert de warmtepomp automatisch weer normaal mee.",
      },
      defrost_seen_clear: {
        title: `Ontdooien klaar (${subject})`,
        summary: `${subject} heeft ontdooien afgerond en kan weer normaal vermogen leveren.`,
        detail: "De regelaar ziet dat de ontdooifase voorbij is en laat de normale regeling weer doorlopen.",
        next: "Bij aanhoudende vraag blijft de warmtepomp actief of schakelt duo-bedrijf bij.",
      },
      cooling_limited: {
        title: reasonCode === "dew_stop"
          ? "Koeling gestopt door dauwpunt"
          : coolingProtectionReason ? "Koeling tijdelijk beperkt" : "Koeling op ingesteld maximum",
        summary: reasonCode === "dew_stop"
          ? `${activeCoolingSource} stopt omdat verder koelen te dicht bij het dauwpunt komt.`
          : coolingProtectionReason
          ? "Er is koelvraag, maar het systeem houdt het koelvermogen tijdelijk lager."
          : "Er is koelvraag. Het systeem koelt binnen het actuele softwaremaximum.",
        detail: reason.summary,
        next: coolingProtectionReason
          ? "Koeling wordt vrijgegeven zodra de veilige marge stabiel genoeg is."
          : "Koeling blijft binnen dit maximum zolang de instelling en koelvraag gelijk blijven.",
      },
      cooling_released: {
        title: "Koeling vrijgegeven",
        summary: "De veilige marge is terug. De warmtepomp mag weer normaal koelen.",
        detail: "De dauwpunt- en temperatuurmarge is voldoende hersteld om de begrenzing los te laten.",
        next: "De regelaar blijft koelen zolang de kamer daarom vraagt.",
      },
      sticky_pump_run: {
        title: "Pompbescherming uitgevoerd",
        summary: "De pomp draaide kort na langere stilstand. Dit is geen verwarmings- of koelvraag.",
        detail: "Deze korte run voorkomt dat de pomp na stilstand vast gaat zitten.",
        next: "De volgende preventieve run volgt pas na de ingestelde beschermingstijd.",
      },
      frost_protection_start: {
        title: "Vorstbescherming actief",
        summary: "Het systeem laat water circuleren om bevriezing te voorkomen.",
        detail: "Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",
        next: "Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",
      },
      frost_protection_clear: {
        title: "Vorstbescherming gestopt",
        summary: "Het systeem verlaat de vorstbescherming en gaat terug naar normale regeling.",
        detail: "Het watercircuit hoeft niet langer apart beschermd te worden.",
        next: "Bij nieuw vorstrisico kan de bescherming automatisch opnieuw starten.",
      },
      boiler_assist_start: {
        title: "CV-ketel ondersteunt tijdelijk",
        summary: "De CV-ketel helpt omdat extra capaciteit tijdelijk nuttig is.",
        detail: "De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",
        next: "De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen.",
      },
      boiler_assist_stop: boilerStopBlocked
        ? {
          title: reasonCode === "sensor_fallback"
            ? "CV-ondersteuning gestopt: meting ontbreekt"
            : reasonCode === "no_candidate"
            ? "CV-ondersteuning niet beschikbaar"
            : reasonCode === "flow_preflow"
            ? "CV-ondersteuning wacht op voorloop"
            : "CV-ondersteuning veilig gestopt",
          summary: reasonCode === "sensor_fallback"
            ? "De CV-ketel is gestopt omdat een betrouwbare aanvoertemperatuur ontbreekt."
            : reasonCode === "no_candidate"
            ? "De CV-ketel is uitgeschakeld of kan nu niet worden ingezet."
            : reasonCode === "flow_preflow"
            ? "De CV-ketel wacht tijdens de test kort tot de waterflow stabiel is."
            : "De CV-ketel is gestopt omdat een veiligheidsgrens voor de watertemperatuur actief is.",
          detail: "Dit is een beschermende of configuratiegebonden keuze, niet een teken dat de warmtevraag vanzelf is afgenomen.",
          next: "De regelaar beoordeelt automatisch opnieuw zodra de blokkade is opgeheven.",
        }
        : {
          title: "CV-ondersteuning gestopt",
          summary: "De extra ondersteuning is niet meer nodig.",
          detail: "De warmtevraag is genoeg gedaald of de warmtepompen kunnen het weer zelf dragen.",
          next: "De CV-ketel blijft beschikbaar als er later opnieuw extra capaciteit nodig is.",
        },
      attention_pattern: {
        title: "Aandachtspunt gezien",
        summary: reasonCode === "start_stop_rate_high"
          ? "Er zijn relatief veel starts/stops gezien. Dat is nuttig om te volgen."
          : "Het systeem ziet een patroon dat extra aandacht verdient.",
        detail: reason.summary,
        next: "Als het patroon aanhoudt, blijft dit zichtbaar voor support en analyse.",
      },
    };
    return copies[eventType] || fallback;
  }

  function getDecisionEventGraphEndMinute(startMinute, event, selectedWindow) {
    const durationS = Number(event?.duration_s);
    if (!Number.isFinite(durationS) || durationS <= 0) {
      return startMinute;
    }
    const minutes = getControlWorkingEventDurationChartMinutes(event, selectedWindow);
    return Math.max(startMinute, Math.min(1440, startMinute + Math.max(5, minutes)));
  }

  function getDecisionEventDisplaySeverity(event) {
    const eventType = String(event?.event_type || "");
    const reason = String(event?.reason || "");
    if (isDecisionCoolingAdjustmentEvent(event)) {
      return "normal";
    }
    if (isControlWorkingCoolingProtectionReason(reason)) {
      return "limited";
    }
    if (eventType === "flow_hold_start" || eventType === "flow_hold_clear") {
      if (reason === "flow_preflow" || reason === "flow_postflow") {
        return "normal";
      }
      if (reason === "flow_too_low") {
        const durationS = Number(event?.duration_s);
        return Number.isFinite(durationS) && durationS > 90 ? "limited" : "normal";
      }
    }
    return String(event?.severity || "normal");
  }

  function isDecisionCoolingAdjustmentEvent(event) {
    if (String(event?.event_type || "") !== "cooling_limited") {
      return false;
    }
    const reason = String(event?.reason || "");
    if (["capacity_cap", "room_cap", "cooling_limiter", "simmer", "falling_gap", "level1_hold"].includes(reason)) {
      return true;
    }
    return reason === "projected_floor" && Number(event?.value_a) > 0;
  }

  function mapDecisionEventToControlWorkingItem(event, selectedWindow, nowMs) {
    const eventType = String(event?.event_type || "");
    const reasonCode = String(event?.reason || "unknown");
    if (!eventType || eventType === "boot_marker" || event?._oq_hidden) {
      return null;
    }
    if ((eventType === "defrost_seen_start" || eventType === "defrost_seen_clear") && Number(event?._oq_context_cm ?? event?.cm) === 5) {
      return null;
    }
    if (isDecisionCoolingAdjustmentEvent(event) || eventType === "cooling_released") {
      return null;
    }
    const graphStart = getDecisionEventWindowMinute(event, selectedWindow, nowMs);
    if (!Number.isFinite(graphStart)) {
      return null;
    }
    const copy = getDecisionEventCopy(event);
    const contextCm = Number(event?._oq_context_cm ?? event?.cm);
    const source = eventType === "cooling_limited" || eventType === "cooling_released"
      ? getDecisionCoolingSourceLabel(event)
      : eventType === "source_start" || eventType === "source_stop" || eventType === "topology_change"
      ? getDecisionModeSubjectLabel(event?.subject, contextCm)
      : getDecisionSubjectLabel(event?.subject);
    const duration = formatDecisionDuration(event?.duration_s);
    const displaySeverity = getDecisionEventDisplaySeverity(event);
    return {
      id: `fw-${event.seq || event.uptime_s || eventType}`,
      kind: "event",
      severity: displaySeverity,
      time: formatDecisionLogTimeLabel(event, selectedWindow, nowMs),
      title: copy.title,
      summary: copy.summary,
      detailTitle: "Waarom gebeurde dit?",
      detail: copy.detail,
      next: copy.next,
      source,
      reasonLabel: copy.reasonLabel || "",
      reasonSummary: copy.reasonSummary || "",
      reasonCode,
      modeLabel: Number(event?.cm) > 0 ? `CM${Number(event.cm)}` : "CM?",
      modeTransitionLabel: event?._oq_mode_transition || "",
      duration,
      graphStart: Math.max(0, Math.min(1440, graphStart)),
      graphEnd: getDecisionEventGraphEndMinute(graphStart, event, selectedWindow),
      realEventType: eventType,
      rawDecisionEvent: event,
      timelineHidden: ((eventType === "source_start" || eventType === "topology_change") && contextCm === 5) ||
        (eventType === "source_stop" && (event?._oq_cooling_stop_reason === "dew_stop" || reasonCode === "dew_stop")),
    };
  }

  function getControlWorkingVisibleEpochRange(startEpochMs, endEpochMs, selectedWindow, nowMs) {
    if (!Number.isFinite(startEpochMs) || !Number.isFinite(endEpochMs) || endEpochMs <= startEpochMs) {
      return null;
    }
    const windowBounds = getControlWorkingWindowBounds(selectedWindow, nowMs);
    const visibleStart = Math.max(startEpochMs, windowBounds.start);
    const visibleEnd = Math.min(endEpochMs, windowBounds.end);
    if (visibleEnd <= visibleStart) {
      return null;
    }
    const windowMs = Math.max(1, windowBounds.end - windowBounds.start);
    return {
      start: ((visibleStart - windowBounds.start) / windowMs) * 1440,
      end: ((visibleEnd - windowBounds.start) / windowMs) * 1440,
      durationS: Math.max(0, Math.round((visibleEnd - visibleStart) / 1000)),
    };
  }

  function getControlWorkingDerivedModeLabel(event) {
    const cm = Number(event?._oq_context_cm ?? event?.cm);
    return Number.isFinite(cm) && cm > 0 ? `CM${cm}` : "CM?";
  }

  function createControlWorkingDerivedSpan(config, selectedWindow, nowMs) {
    const range = getControlWorkingVisibleEpochRange(config.startEpochMs, config.endEpochMs, selectedWindow, nowMs);
    if (!range || range.durationS < Number(config.minDurationS || 60)) {
      return null;
    }
    return {
      id: config.id,
      kind: "span",
      severity: config.severity || "normal",
      time: getControlWorkingIntervalTimeLabel(range.start, range.end, Boolean(config.isOpen)),
      duration: formatDecisionDuration(range.durationS),
      title: config.title,
      summary: config.summary,
      detailTitle: config.detailTitle || "Waarom liep deze periode?",
      detail: config.detail,
      next: config.next,
      source: config.source || "Systeem",
      reasonCode: config.reasonCode || "keep_current",
      reasonLabel: config.reasonLabel || "",
      reasonSummary: config.reasonSummary || "",
      modeLabel: config.modeLabel || getControlWorkingDerivedModeLabel(config.startEvent),
      modeTransitionLabel: "",
      graphStart: Math.max(0, Math.min(1440, range.start)),
      graphEnd: Math.max(0, Math.min(1440, range.end)),
      derivedFromDecisionLog: true,
    };
  }

  function buildControlWorkingDerivedItems(events, selectedWindow, nowMs) {
    const windowBounds = getControlWorkingWindowBounds(selectedWindow, nowMs);
    const intervals = { HP1: [], HP2: [], cooling: [], boiler: [], frost: [] };
    const open = { HP1: null, HP2: null, cooling: null, boiler: null, frost: null };
    const sourceKeys = (subject) => {
      const normalized = String(subject || "").toUpperCase();
      if (normalized === "BOTH") {
        return ["HP1", "HP2"];
      }
      return normalized === "HP1" || normalized === "HP2" ? [normalized] : [];
    };
    const eventEpoch = (event) => getDecisionEventEpochMs(event);
    const openInterval = (key, event) => {
      const startEpochMs = eventEpoch(event);
      if (!Number.isFinite(startEpochMs) || open[key]) {
        return;
      }
      open[key] = { key, startEvent: event, startEpochMs };
    };
    const closeInterval = (key, event) => {
      const active = open[key];
      const endEpochMs = eventEpoch(event);
      if (!active || !Number.isFinite(endEpochMs)) {
        return;
      }
      if (endEpochMs > active.startEpochMs) {
        intervals[key].push({ ...active, endEvent: event, endEpochMs });
      }
      open[key] = null;
    };
    const closeCoolingIfNoActiveCoolingSource = (event) => {
      const hpCoolingActive = ["HP1", "HP2"].some((key) => open[key] && Number(open[key].startEvent?._oq_context_cm ?? open[key].startEvent?.cm) === 5);
      if (!hpCoolingActive) {
        closeInterval("cooling", event);
      }
    };

    events
      .filter((event) => event && !event._oq_hidden)
      .sort((left, right) => Number(left?.uptime_s ?? left?.seq ?? 0) - Number(right?.uptime_s ?? right?.seq ?? 0))
      .forEach((event) => {
        const eventType = String(event?.event_type || "");
        const contextCm = Number(event?._oq_context_cm ?? event?.cm);
        if (eventType === "source_start") {
          sourceKeys(event.subject).forEach((key) => openInterval(key, event));
          if (contextCm === 5) {
            openInterval("cooling", event);
          }
        } else if (eventType === "source_stop") {
          sourceKeys(event.subject).forEach((key) => closeInterval(key, event));
          if (contextCm === 5 || open.cooling) {
            closeCoolingIfNoActiveCoolingSource(event);
          }
        } else if (eventType === "topology_change") {
          if (event.to === "duo") {
            openInterval("HP1", event);
            openInterval("HP2", event);
          } else if (event.to === "single") {
            const activeSource = getControlWorkingSingleTopologySource(event);
            if (activeSource) {
              openInterval(activeSource, event);
              closeInterval(activeSource === "HP1" ? "HP2" : "HP1", event);
            } else {
              closeInterval("HP2", event);
            }
            closeCoolingIfNoActiveCoolingSource(event);
          } else if (event.to === "idle") {
            closeInterval("HP1", event);
            closeInterval("HP2", event);
            closeInterval("cooling", event);
          }
        } else if (eventType === "boiler_assist_start") {
          openInterval("boiler", event);
        } else if (eventType === "boiler_assist_stop") {
          closeInterval("boiler", event);
        } else if (eventType === "frost_protection_start") {
          openInterval("frost", event);
        } else if (eventType === "frost_protection_clear") {
          closeInterval("frost", event);
        } else if (eventType === "flow_hold_clear" && event.reason === "flow_postflow") {
          closeInterval("cooling", event);
        }
      });

    Object.keys(open).forEach((key) => {
      if (open[key]) {
        const openEndEpochMs = selectedWindow === "today"
          ? Math.min(windowBounds.end, nowMs)
          : windowBounds.end;
        intervals[key].push({ ...open[key], endEvent: null, endEpochMs: openEndEpochMs, isOpen: true });
      }
    });

    const items = [];
    const addItem = (item) => {
      if (item) {
        items.push(item);
      }
    };
    const intervalsOverlap = (left, right) =>
      left.startEpochMs < right.endEpochMs && right.startEpochMs < left.endEpochMs;
    const getCoolingIntervalSource = (coolingInterval) => {
      const coolingSources = ["HP1", "HP2"].filter((key) =>
        intervals[key].some((interval) =>
          Number(interval.startEvent?._oq_context_cm ?? interval.startEvent?.cm) === 5 &&
          intervalsOverlap(interval, coolingInterval)));
      if (coolingSources.length === 2) {
        return getDecisionModeSubjectLabel("BOTH", 5);
      }
      if (coolingSources.length === 1) {
        return getDecisionModeSubjectLabel(coolingSources[0], 5);
      }
      return getDecisionModeSubjectLabel(coolingInterval.startEvent?.subject, 5);
    };

    intervals.boiler.forEach((interval, index) => {
      addItem(createControlWorkingDerivedSpan({
        id: `fw-span-boiler-${index}-${interval.startEvent?.seq || interval.startEpochMs}`,
        startEpochMs: interval.startEpochMs,
        endEpochMs: interval.endEpochMs,
        isOpen: Boolean(interval.isOpen),
        startEvent: interval.startEvent,
        severity: "normal",
        title: "CV-ketel ondersteunde tijdelijk",
        summary: "De CV-ketel hielp tijdelijk mee toen extra vermogen nuttig was.",
        detail: "De warmtepompen blijven de basis leveren. De CV-ketel vult alleen aan zolang de vraag daar om vraagt.",
        next: "De CV-ketel stopt zodra de warmtepompen de vraag weer rustig zelf kunnen dragen.",
        source: "CV-ketel",
        reasonCode: "boiler_assist",
        modeLabel: "CM3",
        minDurationS: 120,
      }, selectedWindow, nowMs));
    });

    intervals.cooling.forEach((interval, index) => {
      addItem(createControlWorkingDerivedSpan({
        id: `fw-span-cooling-${index}-${interval.startEvent?.seq || interval.startEpochMs}`,
        startEpochMs: interval.startEpochMs,
        endEpochMs: interval.endEpochMs,
        isOpen: Boolean(interval.isOpen),
        startEvent: interval.startEvent,
        severity: "normal",
        title: "Koeling actief",
        summary: "Er was koelvraag en de warmtepomp koelde binnen de normale regeling.",
        detail: "Tijdens koelen bewaakt de controller continu waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij die normale regeling.",
        next: "Koeling stopt zodra de koelvraag wegvalt of tijdelijk pauzeert als een veiligheidsmarge daarom vraagt.",
        source: getCoolingIntervalSource(interval),
        reasonCode: "keep_current",
        reasonLabel: "Koeling gestart",
        reasonSummary: "De koelrun is gestart en liep binnen de normale regeling.",
        modeLabel: "CM5",
        minDurationS: 120,
      }, selectedWindow, nowMs));
    });

    intervals.frost.forEach((interval, index) => {
      addItem(createControlWorkingDerivedSpan({
        id: `fw-span-frost-${index}-${interval.startEvent?.seq || interval.startEpochMs}`,
        startEpochMs: interval.startEpochMs,
        endEpochMs: interval.endEpochMs,
        isOpen: Boolean(interval.isOpen),
        startEvent: interval.startEvent,
        severity: "limited",
        title: "Vorstbescherming actief",
        summary: "Het systeem liet water circuleren om bevriezing te voorkomen.",
        detail: "Dit is beschermingsgedrag. Er hoeft geen verwarmings- of koelvraag te zijn.",
        next: "Vorstbescherming stopt zodra het risico weg is of de normale regeling weer voorrang krijgt.",
        source: "Systeem",
        reasonCode: "frost_protection",
        modeLabel: "CM98",
        minDurationS: 60,
      }, selectedWindow, nowMs));
    });

    intervals.HP1.forEach((hp1, index) => {
      intervals.HP2.forEach((hp2) => {
        const startEpochMs = Math.max(hp1.startEpochMs, hp2.startEpochMs);
        const endEpochMs = Math.min(hp1.endEpochMs, hp2.endEpochMs);
        const startEvent = hp1.startEpochMs >= hp2.startEpochMs ? hp1.startEvent : hp2.startEvent;
        const hp1ContextCm = Number(hp1.startEvent?._oq_context_cm ?? hp1.startEvent?.cm);
        const hp2ContextCm = Number(hp2.startEvent?._oq_context_cm ?? hp2.startEvent?.cm);
        const contextCm = Number(startEvent?._oq_context_cm ?? startEvent?.cm);
        if (contextCm === 5 || hp1ContextCm === 5 || hp2ContextCm === 5) {
          return;
        }
        const isOpen = Boolean(hp1.isOpen && hp2.isOpen);
        addItem(createControlWorkingDerivedSpan({
          id: `fw-span-duo-${index}-${hp1.startEvent?.seq || hp1.startEpochMs}-${hp2.startEvent?.seq || hp2.startEpochMs}`,
          startEpochMs,
          endEpochMs,
          isOpen,
          startEvent,
          severity: "normal",
          title: "Twee warmtepompen verwarmen",
          summary: "HP1 en HP2 draaiden tegelijk omdat extra capaciteit nuttig was.",
          detail: "De warmtepompen zijn gelijkwaardig. Twee bronnen verdelen de belasting wanneer één warmtepomp de vraag minder rustig kan dragen.",
          next: "Het systeem schakelt terug naar één warmtepomp zodra single-bedrijf weer voldoende of rustiger is.",
          source: getDecisionModeSubjectLabel("BOTH", 2),
          reasonCode: "better_heat",
          modeLabel: "CM2",
          minDurationS: 300,
        }, selectedWindow, nowMs));
      });
    });

    return items;
  }

  function enrichControlWorkingDecisionLogEvents(events) {
    const sorted = [...events].sort((left, right) => {
      const leftTime = Number(left?.uptime_s ?? left?.seq ?? 0);
      const rightTime = Number(right?.uptime_s ?? right?.seq ?? 0);
      return leftTime - rightTime;
    });
    const activeSourceCm = { HP1: 0, HP2: 0 };
    const defrostOpen = { HP1: false, HP2: false };
    let activeTopologyCm = 0;
    let activeFlowCm = 0;
    let previousModeCm = 0;
    let pendingCoolingStopReason = "";

    const sourceKeys = (subject) => {
      const normalized = String(subject || "").toUpperCase();
      if (normalized === "BOTH") {
        return ["HP1", "HP2"];
      }
      return normalized === "HP1" || normalized === "HP2" ? [normalized] : [];
    };
    const upcomingFlowContextCm = (index) => {
      const currentUptime = Number(sorted[index]?.uptime_s);
      for (let offset = 1; offset <= 6 && index + offset < sorted.length; offset += 1) {
        const next = sorted[index + offset];
        const nextUptime = Number(next?.uptime_s);
        if (Number.isFinite(currentUptime) && Number.isFinite(nextUptime) && nextUptime - currentUptime > 300) {
          break;
        }
        const nextType = String(next?.event_type || "");
        if (nextType === "flow_hold_clear" && Number(next?.value_a) === 5) {
          return 5;
        }
        if ((nextType === "source_start" || nextType === "topology_change" || nextType === "cooling_limited") && Number(next?.cm) === 5) {
          return 5;
        }
        if (nextType === "flow_hold_start") {
          break;
        }
      }
      return 0;
    };

    return sorted.map((event, index) => {
      const enriched = { ...event };
      const eventType = String(event?.event_type || "");
      const subject = String(event?.subject || "").toUpperCase();
      const reason = String(event?.reason || "");
      const cm = Number(event?.cm) || 0;
      let contextCm = cm;
      let hidden = false;
      let activeCoolingSource = "";
      let activeCoolingSubject = "";
      let coolingRuntimeHold = false;
      let activeHeatingSource = "";
      let heatingRuntimeHold = false;
      let coolingStopReason = "";
      const previousCm = previousModeCm;
      const coolingSources = () => ["HP1", "HP2"].filter((key) => activeSourceCm[key] === 5);
      const heatingSources = () => ["HP1", "HP2"].filter((key) => activeSourceCm[key] > 0 && activeSourceCm[key] !== 5);

      if (eventType === "source_start") {
        contextCm = cm || contextCm;
        sourceKeys(subject).forEach((key) => {
          activeSourceCm[key] = contextCm;
        });
      } else if (eventType === "source_stop") {
        const sourceCm = sourceKeys(subject).map((key) => activeSourceCm[key]).find((value) => value > 0);
        contextCm = sourceCm || contextCm;
        if (contextCm === 5 && pendingCoolingStopReason) {
          coolingStopReason = pendingCoolingStopReason;
          pendingCoolingStopReason = "";
        }
        sourceKeys(subject).forEach((key) => {
          activeSourceCm[key] = 0;
        });
      } else if (eventType === "topology_change") {
        if (event?.to === "idle") {
          contextCm = activeTopologyCm || contextCm;
          activeTopologyCm = 0;
        } else if (event?.to === "single" || event?.to === "duo") {
          contextCm = cm || activeTopologyCm || contextCm;
          activeTopologyCm = contextCm;
        }
      } else if (eventType === "flow_hold_start") {
        const activeCoolingSources = coolingSources();
        const activeHeatingSources = heatingSources();
        const nextAfterCm = Number(event?.value_a);
        contextCm = reason === "flow_postflow"
          ? activeTopologyCm || contextCm
          : nextAfterCm || upcomingFlowContextCm(index) || contextCm;
        if (reason === "flow_postflow" && contextCm === 5 && activeCoolingSources.length) {
          activeCoolingSource = activeCoolingSources.join(" + ");
          coolingRuntimeHold = true;
        }
        if (reason === "flow_postflow" && contextCm !== 5 && activeHeatingSources.length) {
          activeHeatingSource = activeHeatingSources.join(" + ");
          heatingRuntimeHold = true;
        }
        activeFlowCm = contextCm;
      } else if (eventType === "flow_hold_clear") {
        contextCm = Number(event?.value_a) || activeFlowCm || activeTopologyCm || contextCm;
        activeFlowCm = 0;
      } else if (eventType === "cooling_limited" || eventType === "cooling_released") {
        contextCm = 5;
        const activeCoolingSources = coolingSources();
        if (activeCoolingSources.length) {
          activeCoolingSource = activeCoolingSources.join(" + ");
          activeCoolingSubject = activeCoolingSources.length === 2 ? "BOTH" : activeCoolingSources[0];
        }
        if (eventType === "cooling_limited" && reason === "dew_stop") {
          pendingCoolingStopReason = "dew_stop";
        }
      }

      if (eventType === "defrost_seen_start" || eventType === "defrost_seen_clear") {
        const key = subject === "HP1" || subject === "HP2" ? subject : "HP1";
        if (contextCm === 5 || cm === 5) {
          hidden = true;
        } else if (eventType === "defrost_seen_start") {
          defrostOpen[key] = true;
        } else if (!defrostOpen[key]) {
          hidden = true;
        } else {
          defrostOpen[key] = false;
        }
      }

      enriched._oq_context_cm = contextCm;
      enriched._oq_hidden = hidden;
      enriched._oq_active_cooling_source = activeCoolingSource;
      enriched._oq_active_cooling_subject = activeCoolingSubject;
      enriched._oq_cooling_runtime_hold = coolingRuntimeHold;
      enriched._oq_active_heating_source = activeHeatingSource;
      enriched._oq_heating_runtime_hold = heatingRuntimeHold;
      enriched._oq_cooling_stop_reason = coolingStopReason;
      enriched._oq_previous_cm = previousCm;
      enriched._oq_mode_transition = deriveControlWorkingModeTransition(event, previousCm);
      const nextModeCm = getControlWorkingModeAfterEvent(event);
      if (Number.isFinite(nextModeCm)) {
        previousModeCm = nextModeCm;
      }
      return enriched;
    });
  }

  function getControlWorkingDecisionLogItems() {
    const events = getDecisionLogEvents();
    if (!events.length) {
      return [];
    }
    const selectedWindow = getControlWorkingSelectedWindow();
    const nowMs = Date.now();
    const enrichedEvents = enrichControlWorkingDecisionLogEvents(events);
    const eventItems = enrichedEvents
      .map((event) => mapDecisionEventToControlWorkingItem(event, selectedWindow, nowMs))
      .filter(Boolean);
    const derivedItems = buildControlWorkingDerivedItems(enrichedEvents, selectedWindow, nowMs);
    return [...eventItems, ...derivedItems]
      .sort((left, right) => {
        const startDelta = getControlWorkingItemMinuteRange(right).start - getControlWorkingItemMinuteRange(left).start;
        if (startDelta !== 0) {
          return startDelta;
        }
        const weights = { event: 0, span: 1, aggregate: 2 };
        return (weights[left.kind] ?? 3) - (weights[right.kind] ?? 3);
      });
  }

  function getControlWorkingItems(heatPumpPanels) {
    const decisionLogItems = getControlWorkingDecisionLogItems();
    if (decisionLogItems.length) {
      return decisionLogItems;
    }
    return [];
  }

  function getControlWorkingSelectedItem(items) {
    const visibleItems = items.filter((item) => !item.timelineHidden);
    if (visibleItems.some((item) => item.id === state.controlReplaySelectedEpisode)) {
      return visibleItems.find((item) => item.id === state.controlReplaySelectedEpisode);
    }
    return visibleItems.find((item) => item.kind === "span" && item.reasonCode === "better_heat")
      || visibleItems.find((item) => item.kind === "span")
      || visibleItems[0]
      || null;
  }

  function parseControlWorkingClockMinute(value) {
    const match = String(value || "").match(/(\d{1,2}):(\d{2})/);
    if (!match) {
      return Number.NaN;
    }
    const hours = Number.parseInt(match[1], 10);
    const minutes = Number.parseInt(match[2], 10);
    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
      return Number.NaN;
    }
    return Math.max(0, Math.min(1440, (hours * 60) + minutes));
  }

  function getControlWorkingItemMinuteRange(item) {
    if (Number.isFinite(Number(item?.graphStart))) {
      const start = Math.max(0, Math.min(1440, Number(item.graphStart)));
      const end = Number.isFinite(Number(item?.graphEnd))
        ? Math.max(start, Math.min(1440, Number(item.graphEnd)))
        : start;
      return { start, end };
    }
    const matches = String(item?.time || "").match(/\d{1,2}:\d{2}/g) || [];
    const start = parseControlWorkingClockMinute(matches[0]);
    const end = parseControlWorkingClockMinute(matches[1]);
    if (!Number.isNaN(start) && !Number.isNaN(end)) {
      return { start, end: Math.max(start, end) };
    }
    if (!Number.isNaN(start)) {
      return { start, end: start };
    }
    return { start: 430, end: 430 };
  }

  function getControlWorkingGraphMinute() {
    const minute = Number(state.controlReplayGraphMinute);
    return Number.isFinite(minute) ? Math.max(0, Math.min(1440, Math.round(minute / 5) * 5)) : 430;
  }

  function formatControlWorkingClockMinute(minute) {
    const normalized = Math.max(0, Math.min(1440, Math.round(Number(minute) || 0)));
    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  }

  function formatControlWorkingRelativeOffset(minutesBeforeNow) {
    const normalized = Math.max(0, Math.round(Number(minutesBeforeNow) || 0));
    if (normalized <= 5) {
      return "Nu";
    }
    const days = Math.floor(normalized / 1440);
    const hours = Math.floor((normalized % 1440) / 60);
    const minutes = normalized % 60;
    if (days > 0) {
      return hours > 0 ? `${days}d ${hours}u geleden` : `${days}d geleden`;
    }
    if (hours > 0) {
      return minutes > 0 ? `${hours}u ${minutes}m geleden` : `${hours}u geleden`;
    }
    return `${minutes}m geleden`;
  }

  function formatControlWorkingGraphCursorLabel(minute, windowModel = getControlWorkingWindowModel()) {
    const normalized = Math.max(0, Math.min(1440, Number(minute) || 0));
    if (windowModel.calendarDay === "today") {
      return formatControlWorkingAbsoluteTimeLabel(
        getControlWorkingWindowEpochForMinute(normalized, "today"),
        Date.now(),
        "time",
      );
    }
    if (windowModel.calendarDay === "yesterday") {
      return formatControlWorkingAbsoluteTimeLabel(
        getControlWorkingWindowEpochForMinute(normalized, "yesterday"),
        Date.now(),
        "time",
      );
    }
    if (windowModel.id === "week" || windowModel.id === "last48" || windowModel.id === "last3d" || windowModel.id === "custom") {
      return formatControlWorkingAbsoluteTimeLabel(
        getControlWorkingWindowEpochForMinute(normalized, windowModel.id),
        Date.now(),
        "weekday",
      );
    }
    return formatControlWorkingAbsoluteTimeLabel(
      getControlWorkingWindowEpochForMinute(normalized, windowModel.id),
      Date.now(),
      "auto",
    );
  }

  function getControlWorkingItemForMinute(items, minute) {
    const normalizedMinute = Math.max(0, Math.min(1440, Number(minute) || 0));
    const weights = { span: 0, aggregate: 1, event: 2 };
    const selectedItem = items
      .filter((item) => !item.timelineHidden)
      .map((item) => {
        const range = getControlWorkingGraphHitRange(item);
        if (normalizedMinute < range.start || normalizedMinute > range.end) {
          return null;
        }
        const span = Math.max(1, range.end - range.start);
        return { item, score: span + ((weights[item.kind] ?? 3) * 0.1) };
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score)[0]?.item || null;
    return selectedItem || getControlWorkingActiveGraphContextForMinute(items, normalizedMinute);
  }

  function getControlWorkingEventDurationChartMinutes(event, selectedWindow = getControlWorkingSelectedWindow()) {
    const durationS = Number(event?.duration_s);
    if (!Number.isFinite(durationS) || durationS <= 0) {
      return 0;
    }
    return (durationS / 60) * (1440 / getControlWorkingWindowDurationMinutes(selectedWindow));
  }

  function getControlWorkingGraphHitRange(item) {
    const range = getControlWorkingItemMinuteRange(item);
    const eventType = String(item?.realEventType || "");
    const durationMinutes = getControlWorkingEventDurationChartMinutes(item?.rawDecisionEvent);
    if (eventType === "defrost_seen_clear" && durationMinutes > 0) {
      const width = Math.max(5, durationMinutes);
      return { start: Math.max(0, range.start - width), end: range.start };
    }
    if ((eventType === "flow_hold_clear" || eventType === "frost_protection_clear") && durationMinutes > 0) {
      const width = Math.max(1, durationMinutes);
      return { start: Math.max(0, range.start - width), end: range.start };
    }
    if (range.end > range.start) {
      return range;
    }
    if (item?.kind === "event") {
      return { start: range.start, end: Math.min(1440, range.start + 12) };
    }
    return range;
  }

  function getControlWorkingIntervalTimeLabel(startMinute, endMinute, isOpen = false) {
    const windowModel = getControlWorkingWindowModel();
    const start = formatControlWorkingGraphCursorLabel(startMinute, windowModel);
    const end = isOpen || endMinute >= 1440
      ? "nu"
      : formatControlWorkingGraphCursorLabel(endMinute, windowModel);
    return `${start}-${end}`;
  }

  function getControlWorkingOpenEndMinute(selectedWindow = getControlWorkingSelectedWindow(), nowMs = Date.now()) {
    if (selectedWindow !== "today") {
      return 1440;
    }
    const now = new Date(nowMs);
    return Math.max(0, Math.min(1440, Math.round((now.getHours() * 60) + now.getMinutes() + (now.getSeconds() / 60))));
  }

  function getControlWorkingActiveGraphContextForMinute(items, minute) {
    const intervals = [];
    const open = new Map();
    const sortedItems = [...items]
      .filter((item) => item.rawDecisionEvent)
      .sort((left, right) => getControlWorkingItemMinuteRange(left).start - getControlWorkingItemMinuteRange(right).start);
    const openInterval = (label, item, startMinute) => {
      if (!open.has(label)) {
        open.set(label, { label, item, start: startMinute });
      }
    };
    const closeInterval = (label, endMinute) => {
      const active = open.get(label);
      if (!active) {
        return;
      }
      intervals.push({ ...active, end: Math.max(active.start, endMinute) });
      open.delete(label);
    };
    const closeCoolingIfNoHeatPumpSource = (endMinute) => {
      if (open.has("Koeling") && !open.has("HP1") && !open.has("HP2")) {
        closeInterval("Koeling", endMinute);
      }
    };
    const sourceLabels = (subject) => {
      const normalized = String(subject || "").toUpperCase();
      const labels = [];
      if (normalized === "HP1" || normalized === "BOTH") {
        labels.push("HP1");
      }
      if (normalized === "HP2" || normalized === "BOTH") {
        labels.push("HP2");
      }
      return labels;
    };

    const activeAtWindowStart = getControlWorkingChartSourceStateAtWindowStart();
    const windowStartItem = {
      reasonCode: "keep_current",
      severity: "normal",
      modeLabel: activeAtWindowStart.sourceModes.HP1 || activeAtWindowStart.sourceModes.HP2
        ? `CM${activeAtWindowStart.sourceModes.HP1 || activeAtWindowStart.sourceModes.HP2}`
        : "CM?",
    };
    if (activeAtWindowStart.HP1) {
      openInterval("HP1", windowStartItem, 0);
    }
    if (activeAtWindowStart.HP2) {
      openInterval("HP2", windowStartItem, 0);
    }
    if (activeAtWindowStart.boiler) {
      openInterval("CV-ketel", windowStartItem, 0);
    }
    if (activeAtWindowStart.cooling) {
      openInterval("Koeling", windowStartItem, 0);
    }

    sortedItems.forEach((item) => {
      const range = getControlWorkingItemMinuteRange(item);
      const eventType = String(item.realEventType || "");
      const event = item.rawDecisionEvent || {};
      const contextCm = Number(event._oq_context_cm ?? event.cm);
      const labels = sourceLabels(event.subject);
      if (eventType === "source_start") {
        labels.forEach((label) => openInterval(label, item, range.start));
        if (contextCm === 5) {
          openInterval("Koeling", item, range.start);
        }
      } else if (eventType === "source_stop") {
        labels.forEach((label) => closeInterval(label, range.start));
        if (contextCm === 5 || open.has("Koeling")) {
          closeCoolingIfNoHeatPumpSource(range.start);
        }
      } else if (eventType === "topology_change") {
        if (event.to === "duo") {
          openInterval("HP1", item, range.start);
          openInterval("HP2", item, range.start);
        } else if (event.to === "single") {
          const activeSource = getControlWorkingSingleTopologySource(event);
          if (activeSource) {
            openInterval(activeSource, item, range.start);
            closeInterval(activeSource === "HP1" ? "HP2" : "HP1", range.start);
          } else {
            closeInterval("HP2", range.start);
          }
          closeCoolingIfNoHeatPumpSource(range.start);
        } else if (event.to === "idle") {
          closeInterval("HP1", range.start);
          closeInterval("HP2", range.start);
          closeInterval("Koeling", range.start);
        }
      } else if (eventType === "boiler_assist_start") {
        openInterval("CV-ketel", item, range.start);
      } else if (eventType === "boiler_assist_stop") {
        closeInterval("CV-ketel", range.start);
      } else if (eventType === "flow_hold_clear" && event.reason === "flow_postflow") {
        closeInterval("Koeling", range.start);
      }
    });
    const openEndMinute = getControlWorkingOpenEndMinute();
    open.forEach((active) => {
      if (active.start <= openEndMinute) {
        intervals.push({ ...active, end: openEndMinute });
      }
    });

    const activeIntervals = intervals.filter((interval) => minute >= interval.start && minute <= interval.end);
    if (!activeIntervals.length) {
      return null;
    }
    const labels = new Set(activeIntervals.map((interval) => interval.label));
    const hpLabels = ["HP1", "HP2"].filter((label) => labels.has(label));
    const cvActive = labels.has("CV-ketel");
    const coolingActive = labels.has("Koeling");
    const primaryInterval = activeIntervals
      .filter((interval) => hpLabels.includes(interval.label) || interval.label === "CV-ketel" || interval.label === "Koeling")
      .sort((left, right) => left.start - right.start)[0] || activeIntervals[0];
    const startMinute = Math.max(...activeIntervals.map((interval) => interval.start));
    const endMinute = Math.min(...activeIntervals.map((interval) => interval.end));
    let source = [
      ...hpLabels,
      cvActive ? "CV-ketel" : "",
      coolingActive ? "Koeling" : "",
    ].filter(Boolean).join(" + ");
    let title = "Bron actief";
    let summary = "Deze bron was op dit tijdstip actief.";
    let detail = "De grafiek toont hier een lopende periode. De start of stop staat als los beslismoment in de tijdlijn.";
    let next = "De controller blijft opnieuw beoordelen of deze bron nodig blijft.";
    let reasonCode = primaryInterval.item?.reasonCode || "keep_current";
    let severity = "normal";

    if (coolingActive) {
      title = "Koeling actief";
      summary = hpLabels.length
        ? `${hpLabels.join(" en ")} koelde${hpLabels.length === 1 ? "" : "n"} op dit tijdstip binnen de normale regeling.`
        : "De koeling was op dit tijdstip actief.";
      detail = "De controller bewaakt daarbij waterflow, aanvoertemperatuur en dauwpuntmarge. Een tijdelijk softwaremaximum hoort bij de normale regeling.";
      next = "Koeling gaat door zolang er koelvraag is en de veiligheidsmarges vrij blijven.";
      source = hpLabels.length === 2
        ? getDecisionModeSubjectLabel("BOTH", 5)
        : hpLabels.length === 1
        ? getDecisionModeSubjectLabel(hpLabels[0], 5)
        : "Koeling";
      reasonCode = primaryInterval.item?.reasonCode || "keep_current";
      severity = primaryInterval.item?.severity || "normal";
    } else if (hpLabels.length === 2 && cvActive) {
      title = "Warmtepompen en CV-ketel actief";
      summary = "Beide warmtepompen draaiden en de CV-ketel ondersteunde tijdelijk.";
      detail = "De warmtepompen leverden de basis. De CV-ketel vulde alleen aan zolang extra vermogen nodig was.";
      next = "CV-ondersteuning stopt zodra de warmtepompen de vraag weer zelf rustig kunnen dragen.";
      reasonCode = "boiler_assist";
      severity = "limited";
    } else if (hpLabels.length === 2) {
      title = "Twee warmtepompen verwarmen";
      summary = "HP1 en HP2 verwarmden tegelijk op dit tijdstip.";
      detail = "Twee gelijkwaardige warmtepompen kunnen hoge vraag rustiger leveren dan één warmtepomp op hoge belasting.";
      next = "Eén warmtepomp stopt zodra single-bedrijf weer voldoende of rustiger is.";
      source = getDecisionModeSubjectLabel("BOTH", 2);
      reasonCode = "better_heat";
    } else if (hpLabels.length === 1 && cvActive) {
      title = `${hpLabels[0]} en CV-ketel actief`;
      summary = "De warmtepomp draaide en de CV-ketel ondersteunde tijdelijk.";
      detail = "De CV-ketel vult alleen aan wanneer de warmtepomp de actuele vraag niet rustig genoeg kan dragen.";
      next = "De CV-ketel stopt zodra aanvullende ondersteuning niet meer nodig is.";
      reasonCode = "boiler_assist";
      severity = "limited";
    } else if (hpLabels.length === 1) {
      title = `${hpLabels[0]} verwarmt`;
      summary = `${hpLabels[0]} leverde op dit tijdstip warmte.`;
      detail = "De andere warmtepomp blijft beschikbaar. De controller schakelt pas bij of wisselt pas wanneer dat rustiger of nuttiger is.";
      next = "Bij stijgende vraag kan een tweede warmtepomp bijschakelen; bij dalende vraag stopt deze bron.";
      source = getDecisionModeSubjectLabel(hpLabels[0], 2);
      reasonCode = primaryInterval.item?.reasonCode || "runtime_lead";
    } else if (cvActive) {
      title = "CV-ketel ondersteunt";
      summary = "De CV-ketel leverde op dit tijdstip extra vermogen.";
      detail = "CV-ondersteuning is aanvullend op de warmtepompen en blijft tijdelijk.";
      next = "De CV-ketel stopt zodra de extra capaciteit niet meer nodig is.";
      reasonCode = "boiler_assist";
      severity = "limited";
    }

    return {
      id: `graph-context-${Math.round(minute)}-${Array.from(labels).join("-")}`,
      kind: "span",
      severity,
      time: getControlWorkingIntervalTimeLabel(startMinute, endMinute),
      duration: "",
      title,
      summary,
      detailTitle: "Wat gebeurt hier?",
      detail,
      next,
      source: source || "Systeem",
      reasonCode,
      modeLabel: primaryInterval.item?.modeLabel || "CM?",
      graphStart: startMinute,
      graphEnd: endMinute,
    };
  }

  function renderControlWorkingTabs() {
    const selectedTab = getControlWorkingSelectedTab();
    return `
      <div class="oq-working-control-group">
        <span class="oq-working-control-label">Weergave</span>
        <div class="oq-working-tabs" role="tablist" aria-label="Beslislog weergave">
          ${getControlWorkingTabs().map((tab) => `
            <button
              class="oq-working-tab${selectedTab === tab.id ? " is-active" : ""}"
              type="button"
              role="tab"
              aria-selected="${selectedTab === tab.id ? "true" : "false"}"
              data-oq-action="select-control-replay-tab"
              data-replay-tab="${escapeHtml(tab.id)}"
            >
              ${renderOqIcon(tab.icon, "oq-working-tab-icon")}
              <span>${escapeHtml(tab.label)}</span>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderControlWorkingWindowChoices() {
    const selectedWindow = getControlWorkingSelectedWindow();
    const selectedModel = getControlWorkingWindowModel();
    const quickOptions = getControlWorkingQuickWindowOptions();
    const moreOptions = getControlWorkingWindowOptions().filter((option) => !option.quick && !option.custom);
    const customDraft = getControlWorkingCustomDraft();
    const customInputBounds = getControlWorkingCustomInputBounds(customDraft);
    const customStart = getControlWorkingCustomDateTimeParts(customDraft.start);
    const customEnd = getControlWorkingCustomDateTimeParts(customDraft.end);
    const menuOpen = state.controlReplayPeriodMenuOpen;
    const menuLabel = selectedWindow === "custom"
      ? "Eigen periode"
      : quickOptions.some((option) => option.id === selectedWindow)
      ? "Kies periode"
      : selectedModel.shortLabel;
    return `
      <div class="oq-working-control-group oq-working-control-group--period">
        <span class="oq-working-control-label">Periode</span>
        <div class="oq-working-window-controls" role="group" aria-label="Periode">
          <div class="oq-working-window-choices" aria-label="Snelle periodekeuzes">
          ${quickOptions.map((option) => `
            <button
              class="oq-working-window-choice${selectedWindow === option.id ? " is-active" : ""}"
              type="button"
              data-oq-action="select-control-replay-window"
              data-replay-window="${escapeHtml(option.id)}"
              aria-pressed="${selectedWindow === option.id ? "true" : "false"}"
              aria-label="${escapeHtml(option.label)}"
            >
              ${escapeHtml(option.shortLabel)}
            </button>
          `).join("")}
          </div>
          <div class="oq-working-period-menu" data-oq-control-replay-period-menu>
            <button
              class="oq-working-period-menu-toggle${menuOpen || !quickOptions.some((option) => option.id === selectedWindow) ? " is-active" : ""}"
              type="button"
              aria-expanded="${menuOpen ? "true" : "false"}"
              aria-haspopup="dialog"
              data-oq-action="toggle-control-replay-period-menu"
            >
              <span>${escapeHtml(menuLabel)}</span>
              <span class="oq-working-period-menu-chevron" aria-hidden="true"></span>
            </button>
            ${menuOpen ? `
              <section class="oq-working-period-popover" role="dialog" aria-label="Kies periode">
                <div class="oq-working-period-popover-head">
                  <strong>Ander tijdvenster</strong>
                </div>
                <div class="oq-working-period-option-grid">
                  ${moreOptions.map((option) => `
                    <button
                      class="oq-working-period-option${selectedWindow === option.id ? " is-active" : ""}"
                      type="button"
                      data-oq-action="select-control-replay-window"
                      data-replay-window="${escapeHtml(option.id)}"
                      aria-pressed="${selectedWindow === option.id ? "true" : "false"}"
                    >${escapeHtml(option.shortLabel)}</button>
                  `).join("")}
                </div>
                <div class="oq-working-period-custom">
                  <button
                    class="oq-working-period-custom-toggle${state.controlReplayCustomPeriodOpen || selectedWindow === "custom" ? " is-active" : ""}"
                    type="button"
                    aria-expanded="${state.controlReplayCustomPeriodOpen ? "true" : "false"}"
                    data-oq-action="toggle-control-replay-custom-period"
                  >
                    <span>Eigen periode</span>
                    <span class="oq-working-period-custom-toggle-copy">Datum en uur</span>
                  </button>
                  ${state.controlReplayCustomPeriodOpen ? `
                    <div class="oq-working-period-custom-fields">
                      <label>
                        <span>Van</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${escapeHtml(customInputBounds.earliestDate)}" max="${escapeHtml(customInputBounds.startMaxDate)}" value="${escapeHtml(customStart.date)}" data-oq-control-replay-custom-start-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur van" data-oq-control-replay-custom-start-hour data-oq-control-replay-custom-input>
                            ${renderControlWorkingHourOptions(customStart.hour)}
                          </select>
                        </div>
                      </label>
                      <label>
                        <span>Tot</span>
                        <div class="oq-working-period-date-hour">
                          <input type="date" min="${escapeHtml(customInputBounds.endMinDate)}" max="${escapeHtml(customInputBounds.endMaxDate)}" value="${escapeHtml(customEnd.date)}" data-oq-control-replay-custom-end-date data-oq-control-replay-custom-input>
                          <select aria-label="Uur tot" data-oq-control-replay-custom-end-hour data-oq-control-replay-custom-input>
                            ${renderControlWorkingHourOptions(customEnd.hour)}
                          </select>
                        </div>
                      </label>
                    </div>
                    <div class="oq-working-period-custom-actions">
                      <span>Maximaal 7 dagen</span>
                      <button class="oq-working-period-apply" type="button" data-oq-action="apply-control-replay-custom-period">Toepassen</button>
                    </div>
                    ${state.controlReplayCustomPeriodError ? `<p class="oq-working-period-error" role="alert">${escapeHtml(state.controlReplayCustomPeriodError)}</p>` : ""}
                  ` : ""}
                </div>
              </section>
            ` : ""}
          </div>
        </div>
      </div>
    `;
  }

  function renderControlWorkingNowCard(current) {
    const status = getControlWorkingSeverityMeta(current.severity);
    return `
      <section class="oq-working-now oq-working-now--${escapeHtml(status.tone)}">
        <div class="oq-working-now-main">
          <span class="oq-working-eyebrow">Actuele situatie</span>
          <h2>${escapeHtml(current.title)}${renderControlWorkingModeBadge(current)}</h2>
          <p>${escapeHtml(current.copy)}</p>
          <div class="oq-working-pill-row">
            ${renderControlWorkingPill(status.label, status.tone, "shield")}
            ${renderControlWorkingPill(current.reasonLabel, "info", "target")}
            ${renderControlWorkingPill(current.sinceLabel, "context")}
          </div>
        </div>
        <div class="oq-working-now-next">
          <span>Wat doet het systeem daarna?</span>
          <strong>${escapeHtml(current.expectation)}</strong>
          <div class="oq-working-source-strip">
            <span>HP1 · ${escapeHtml(current.hp1Status)}</span>
            <span>HP2 · ${escapeHtml(current.hp2Status)}</span>
            <span>CV · ${escapeHtml(current.cvStatus)}</span>
          </div>
        </div>
      </section>
    `;
  }

  function renderControlWorkingTimelineItem(item, selectedItem) {
    const status = getControlWorkingSeverityMeta(item.severity);
    const selected = selectedItem && selectedItem.id === item.id;
    const kindLabel = getControlWorkingKindLabel(item.kind);
    const modeMetaLabel = getControlWorkingModeMetaLabel(item);
    return `
      <button
        class="oq-working-entry oq-working-entry--${escapeHtml(item.kind)} oq-working-entry--${escapeHtml(status.tone)}${selected ? " is-active" : ""}"
        type="button"
        data-oq-action="select-control-replay-episode"
        data-replay-episode="${escapeHtml(item.id)}"
      >
        <span class="oq-working-entry-time">
          <strong>${escapeHtml(item.time)}</strong>
          <small>${escapeHtml(kindLabel)}</small>
        </span>
        <span class="oq-working-entry-rail" aria-hidden="true"></span>
        <span class="oq-working-entry-body">
          <span class="oq-working-entry-title">
            <strong>${escapeHtml(item.title)}</strong>
            ${renderControlWorkingModeBadge(item)}
            ${item.count ? `<em>${escapeHtml(item.count)}</em>` : ""}
          </span>
          <span class="oq-working-entry-summary">${escapeHtml(item.summary)}</span>
          <span class="oq-working-entry-meta">
            <span>${escapeHtml(item.source)}</span>
            ${modeMetaLabel ? `<span class="oq-working-entry-meta-mode">${escapeHtml(modeMetaLabel)}</span>` : ""}
            <span>${escapeHtml(item.reasonLabel || getControlWorkingReasonLabel(item.reasonCode))}</span>
            ${item.duration ? `<span>Duur: ${escapeHtml(item.duration)}</span>` : ""}
          </span>
        </span>
        <span class="oq-working-entry-status">${escapeHtml(status.label)}</span>
      </button>
    `;
  }

  function renderControlWorkingDetails(item) {
    if (!item) {
      return "";
    }
    const status = getControlWorkingSeverityMeta(item.severity);
    const reason = getControlWorkingReasonMeta(item.reasonCode);
    const reasonLabel = item.reasonLabel || reason.label;
    const reasonSummary = item.reasonSummary || reason.summary;
    const optimizer = getControlWorkingOptimizerModel(item);
    const modeMetaLabel = getControlWorkingModeMetaLabel(item);
    return `
      <aside class="oq-working-detail oq-working-detail--${escapeHtml(status.tone)}">
        <div>
          <span class="oq-working-eyebrow">Geselecteerd</span>
          <h3>${escapeHtml(item.title)}${renderControlWorkingModeBadge(item)}</h3>
          <p>${escapeHtml(item.summary)}</p>
        </div>
        <div class="oq-working-detail-block">
          <strong>Waarom?</strong>
          <span>${escapeHtml(item.detail)}</span>
        </div>
        <div class="oq-working-detail-block">
          <strong>Is dit normaal?</strong>
          <span>${escapeHtml(reasonSummary)}</span>
        </div>
        <div class="oq-working-detail-block">
          <strong>Wat gebeurt daarna?</strong>
          <span>${escapeHtml(item.next)}</span>
        </div>
        ${renderControlWorkingOptimizer(optimizer)}
        ${reason.checks.length ? `
          <div class="oq-working-checks" aria-label="Beslisfactoren">
            ${reason.checks.map((check) => `<span>${renderOqIcon("shield", "oq-working-reason-icon")} ${escapeHtml(check)}</span>`).join("")}
          </div>
        ` : ""}
        <div class="oq-working-pill-row">
          ${renderControlWorkingPill(status.label, status.tone, "shield")}
          ${renderControlWorkingPill(reasonLabel, "info", "target")}
          ${renderControlWorkingPill(item.source, "context")}
        </div>
        <details class="oq-working-support" data-replay-support-item="${escapeHtml(item.id)}"${state.controlReplaySupportDetailsItemId === item.id ? " open" : ""}>
          <summary data-oq-action="toggle-control-replay-support-details">Details voor support</summary>
          <dl>
            <div><dt>Record</dt><dd>${escapeHtml(getControlWorkingKindLabel(item.kind))}</dd></div>
            <div><dt>Bron</dt><dd>${escapeHtml(item.source)}</dd></div>
            <div><dt>Control mode</dt><dd>${escapeHtml(item.modeLabel)}</dd></div>
            ${modeMetaLabel ? `<div><dt>CM wijziging</dt><dd>${escapeHtml(modeMetaLabel)}</dd></div>` : ""}
            <div><dt>Reason code</dt><dd>${escapeHtml(item.reasonCode)}</dd></div>
          </dl>
        </details>
      </aside>
    `;
  }

  function renderControlWorkingGraphEmptyDetails(timeLabel) {
    return `
      <aside class="oq-working-detail">
        <div>
          <span class="oq-working-eyebrow">Tussen beslismomenten</span>
          <h3>Geen nieuw beslismoment om ${escapeHtml(timeLabel)}</h3>
          <p>Op dit moment veranderde de controller niets. De laatst gekozen situatie blijft gelden.</p>
        </div>
        <div class="oq-working-detail-block">
          <strong>Wat betekent dit?</strong>
          <span>In deze grafiek worden alleen controllerkeuzes, bescherming en bronwissels toegelicht. Tussen die momenten blijft de laatste keuze gewoon gelden.</span>
        </div>
      </aside>
    `;
  }

  function renderControlWorkingEmptyState(title, copy) {
    return `
      <div class="oq-working-empty">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(copy)}</span>
      </div>
    `;
  }

  function renderControlWorkingTimelineTab(items, selectedItem) {
    const windowModel = getControlWorkingWindowModel();
    const visibleItems = items.filter((item) => !item.timelineHidden);
    const timelineItems = visibleItems.slice(0, 80);
    const decisionLogError = String(state.decisionLogError || "").trim();
    const waitingForDecisionLog = !timelineItems.length && !state.decisionLog && !decisionLogError;
    return `
      <div class="oq-working-split">
        <section class="oq-working-list" aria-label="${escapeHtml(windowModel.eyebrow)}">
          <div class="oq-working-list-head">
            <div>
              <span class="oq-working-eyebrow">${escapeHtml(windowModel.eyebrow)}</span>
              <h3>${escapeHtml(windowModel.title)}</h3>
            </div>
            <p>${escapeHtml(windowModel.copy)}</p>
          </div>
          ${timelineItems.length
            ? `<div class="oq-working-timeline">
                ${timelineItems.map((item) => renderControlWorkingTimelineItem(item, selectedItem)).join("")}
              </div>`
            : decisionLogError
            ? renderControlWorkingEmptyState("Beslislog niet beschikbaar", `De firmwarelog kon niet worden geladen (${decisionLogError}). Dit betekent niet dat deze periode leeg is.`)
            : waitingForDecisionLog
            ? renderControlWorkingEmptyState("Beslislog laden", "De controllerkeuzes worden opgehaald. Dit duurt meestal maar heel kort.")
            : renderControlWorkingEmptyState("Nog geen gebeurtenissen", "De beslislog is leeg voor deze periode. Nieuwe controllerkeuzes verschijnen hier zodra de firmware ze vastlegt.")}
        </section>
        ${selectedItem ? renderControlWorkingDetails(selectedItem) : ""}
      </div>
    `;
  }

  function renderControlWorkingSourceCard(title, status, starts, hours, active) {
    return `
      <article class="oq-working-source-card${active ? " is-active" : ""}">
        <div>
          <span>${escapeHtml(title)}</span>
          <strong>${escapeHtml(status)}</strong>
        </div>
        <dl>
          <div><dt>Starts 24u</dt><dd>${escapeHtml(starts)}</dd></div>
          <div><dt>Draaiuren</dt><dd>${escapeHtml(hours)}</dd></div>
        </dl>
      </article>
    `;
  }

  function renderControlWorkingStatusTab(current) {
    const reason = getControlWorkingReasonMeta(current.primaryReason);
    const optimizer = getControlWorkingOptimizerModel({
      primaryReason: current.primaryReason,
      source: current.hp1Running && current.hp2Running ? "HP1 + HP2" : current.hp1Running ? "HP1" : current.hp2Running ? "HP2" : "Geen bron",
    });
    const isCoolingGuard = Boolean(current.coolingProtection);
    const isCoolingCap = Boolean(current.coolingCapped);
    const isSticky = current.primaryReason === "sticky_protection";
    const guardTitle = isCoolingGuard
      ? "Koeling tijdelijk beperkt"
      : isCoolingCap
      ? "Koeling met ingesteld maximum"
      : isSticky
      ? "Geen comfortvraag actief"
      : "Geen beperking actief";
    const guardCopy = isCoolingGuard
      ? "De aanvoer blijft boven de veilige grens. Daarom koelt het systeem tijdelijk minder hard."
      : isCoolingCap
      ? "Dit is normale koeling binnen de ingestelde softwaregrens. Dauwpunt en waterflow blijven wel gewoon bewaakt."
      : isSticky
      ? "Alleen de pomp draait kort. De warmtepompen blijven uit en er worden geen compressorstarts geteld."
      : "Ontdooien, minimum rusttijd, dauwpunt en waterflow blijven bewaakt. Ze verschijnen hier zodra ze gedrag begrenzen.";
    const guardPills = isCoolingGuard
      ? [
        ["Dauwpunt bewaakt", "limited", "droplet"],
        [`Max. niveau ${current.cooling.allowedMax}`, "info", "target"],
        [`Nu niveau ${current.cooling.limitedDemand}`, "context", "bar-chart"],
      ]
      : isCoolingCap
      ? [
        [`Ingesteld max. ${current.cooling.allowedMax}`, "info", "target"],
        [`Nu niveau ${current.cooling.limitedDemand}`, "normal", "bar-chart"],
        ["Marge bewaakt", "context", "shield"],
      ]
      : isSticky
      ? [
        ["Korte pomprun", "normal", "shield"],
        ["Geen koelvraag", "context", "snowflake"],
        ["Geen warmtepompstart", "info", "activity"],
      ]
      : [
        ["Ontdooien vrij", "normal", "snowflake"],
        ["Rusttijd vrij", "normal", "activity"],
        ["Waterflow bewaakt", "info", "waves"],
      ];
    const telemetryRows = [
      ["Aanvoer", current.supplyTemp],
      ["Buiten", current.outsideTemp],
      ["Flow", current.flow],
      ["Strategie", current.strategyLabel],
    ];
    if (current.cooling.requestActive || isCoolingGuard || isCoolingCap) {
      telemetryRows.push(["Dauwpunt", current.cooling.dewPoint]);
      telemetryRows.push(["Veilige min.", current.cooling.safeSupply]);
    }
    return `
      <div class="oq-working-status">
        ${renderControlWorkingNowCard(current)}
        <div class="oq-working-status-grid">
          <section class="oq-working-status-main">
            <span class="oq-working-eyebrow">Waarom deze keuze?</span>
            <h3>${escapeHtml(reason.label)}</h3>
            <p>${escapeHtml(reason.summary)}</p>
            <div class="oq-working-reason-list">
              ${reason.checks.map((check) => `<span>${renderOqIcon("target", "oq-working-reason-icon")} ${escapeHtml(check)}</span>`).join("")}
            </div>
          </section>
          <section class="oq-working-optimizer-panel">
            ${renderControlWorkingOptimizer(optimizer)}
          </section>
          <section class="oq-working-source-grid" aria-label="Bronnen">
            ${renderControlWorkingSourceCard("HP1", current.hp1Status, current.hp1Starts, current.hp1Hours, current.hp1Running)}
            ${renderControlWorkingSourceCard("HP2", current.hp2Status, current.hp2Starts, current.hp2Hours, current.hp2Running)}
            ${renderControlWorkingSourceCard("CV", current.cvStatus, "—", "—", current.cvStatus === "Actief")}
          </section>
          <section class="oq-working-guard-panel">
            <span class="oq-working-eyebrow">Bescherming</span>
            <h3>${escapeHtml(guardTitle)}</h3>
            <p>${escapeHtml(guardCopy)}</p>
            <div class="oq-working-pill-row">
              ${guardPills.map(([label, tone, icon]) => renderControlWorkingPill(label, tone, icon)).join("")}
            </div>
          </section>
          <section class="oq-working-telemetry">
            <span class="oq-working-eyebrow">Context</span>
            <dl>
              ${telemetryRows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}
            </dl>
          </section>
        </div>
      </div>
    `;
  }

  function renderControlWorkingChartLane(label, tone, segments) {
    return `
      <div class="oq-working-chart-lane">
        <span>${escapeHtml(label)}</span>
        <div class="oq-working-chart-track">
          ${segments.map((segment) => `
            <i class="oq-working-chart-segment oq-working-chart-segment--${escapeHtml(segment.tone || tone)}" style="--oq-chart-left:${clampControlReplayPercent(segment.start)}%;--oq-chart-width:${clampControlReplayPercent(segment.width)}%;"></i>
          `).join("")}
        </div>
      </div>
    `;
  }

  function getControlWorkingChartSourceStateAtWindowStart() {
    const windowBounds = getControlWorkingWindowBounds();
    const active = { HP1: false, HP2: false, boiler: false, cooling: false };
    const sourceModes = { HP1: 0, HP2: 0 };
    const sourceKeys = (subject) => {
      const normalized = String(subject || "").toUpperCase();
      if (normalized === "BOTH") {
        return ["HP1", "HP2"];
      }
      return normalized === "HP1" || normalized === "HP2" ? [normalized] : [];
    };
    const events = enrichControlWorkingDecisionLogEvents(getDecisionLogEvents())
      .filter((event) => event && !event._oq_hidden)
      .sort((left, right) => {
        const leftEpochMs = getDecisionEventEpochMs(left);
        const rightEpochMs = getDecisionEventEpochMs(right);
        return (Number.isFinite(leftEpochMs) ? leftEpochMs : Number.POSITIVE_INFINITY) -
          (Number.isFinite(rightEpochMs) ? rightEpochMs : Number.POSITIVE_INFINITY);
      });

    events.forEach((event) => {
      const epochMs = getDecisionEventEpochMs(event);
      if (!Number.isFinite(epochMs) || epochMs > windowBounds.start) {
        return;
      }
      const eventType = String(event.event_type || "");
      const contextCm = Number(event._oq_context_cm ?? event.cm);
      if (eventType === "source_start") {
        sourceKeys(event.subject).forEach((key) => {
          active[key] = true;
          sourceModes[key] = contextCm;
        });
      } else if (eventType === "source_stop") {
        sourceKeys(event.subject).forEach((key) => {
          active[key] = false;
          sourceModes[key] = 0;
        });
      } else if (eventType === "boiler_assist_start") {
        active.boiler = true;
      } else if (eventType === "boiler_assist_stop") {
        active.boiler = false;
      }
    });
    active.cooling = ["HP1", "HP2"].some((key) => active[key] && sourceModes[key] === 5);
    return { ...active, sourceModes };
  }

  function getControlWorkingDecisionLogChartLanes(items) {
    if (!items.some((item) => item.rawDecisionEvent)) {
      return null;
    }
    const lanes = [
      { label: "HP1", tone: "running", segments: [] },
      { label: "HP2", tone: "running", segments: [] },
      { label: "CV-ketel", tone: "assist", segments: [] },
      { label: "Koeling", tone: "cooling", segments: [] },
      { label: "Ontdooien", tone: "defrost", segments: [] },
      { label: "Bescherming", tone: "limited", segments: [] },
    ];
    const byLabel = Object.fromEntries(lanes.map((lane) => [lane.label, lane]));
    const addMinuteSegment = (label, startMinute, endMinute, tone, minWidth = 0.5) => {
      if (!byLabel[label] || !Number.isFinite(startMinute)) {
        return;
      }
      const start = Math.max(0, Math.min(1440, Number(startMinute)));
      const end = Number.isFinite(endMinute)
        ? Math.max(start, Math.min(1440, Number(endMinute)))
        : start;
      const width = Math.max(minWidth, ((end - start) / 1440) * 100);
      byLabel[label].segments.push({ start: (start / 1440) * 100, width, tone });
    };
    const addEventSegment = (label, item, tone, minWidth = 0.5) => {
      const range = getControlWorkingItemMinuteRange(item);
      addMinuteSegment(label, range.start, range.end, tone, minWidth);
    };
    const sortedItems = [...items]
      .filter((item) => item.rawDecisionEvent)
      .sort((left, right) => getControlWorkingItemMinuteRange(left).start - getControlWorkingItemMinuteRange(right).start);
    const openSource = { HP1: null, HP2: null, "CV-ketel": null, Koeling: null };
    const openLane = (label, startMinute) => {
      if (openSource[label] == null) {
        openSource[label] = startMinute;
      }
    };
    const closeLane = (label, endMinute, tone = "running", minWidth = 0.8) => {
      if (openSource[label] == null) {
        return false;
      }
      addMinuteSegment(label, openSource[label], endMinute, tone, minWidth);
      openSource[label] = null;
      return true;
    };
    const closeCoolingLaneIfNoHeatPumpSource = (endMinute) => {
      if (openSource.Koeling != null && openSource.HP1 == null && openSource.HP2 == null) {
        closeLane("Koeling", endMinute, "cooling", 0.8);
      }
    };
    const openDefrost = {};
    const activeAtWindowStart = getControlWorkingChartSourceStateAtWindowStart();
    if (activeAtWindowStart.HP1) {
      openLane("HP1", 0);
    }
    if (activeAtWindowStart.HP2) {
      openLane("HP2", 0);
    }
    if (activeAtWindowStart.boiler) {
      openLane("CV-ketel", 0);
    }
    if (activeAtWindowStart.cooling) {
      openLane("Koeling", 0);
    }

    sortedItems.forEach((item) => {
      const range = getControlWorkingItemMinuteRange(item);
      const eventType = String(item.realEventType || "");
      const subject = String(item.rawDecisionEvent?.subject || "").toUpperCase();
      const contextCm = Number(item.rawDecisionEvent?._oq_context_cm ?? item.rawDecisionEvent?.cm);
      const targetSources = [];
      if (subject === "HP1" || subject === "BOTH") {
        targetSources.push("HP1");
      }
      if (subject === "HP2" || subject === "BOTH") {
        targetSources.push("HP2");
      }

      if (eventType === "source_start") {
        targetSources.forEach((label) => openLane(label, range.start));
        if (contextCm === 5) {
          openLane("Koeling", range.start);
        }
      } else if (eventType === "source_stop") {
        targetSources.forEach((label) => {
          if (!closeLane(label, range.start, "running")) {
            addEventSegment(label, item, "standby", 0.55);
          }
        });
        if (contextCm === 5 || openSource.Koeling != null) {
          closeCoolingLaneIfNoHeatPumpSource(range.start);
        }
      } else if (eventType === "topology_change") {
        if (item.rawDecisionEvent?.to === "duo") {
          openLane("HP1", range.start);
          openLane("HP2", range.start);
        } else if (item.rawDecisionEvent?.to === "single") {
          const activeSource = getControlWorkingSingleTopologySource(item.rawDecisionEvent);
          if (activeSource) {
            openLane(activeSource, range.start);
            closeLane(activeSource === "HP1" ? "HP2" : "HP1", range.start, "running", 0.8);
          } else {
            closeLane("HP2", range.start, "running", 0.8);
          }
          closeCoolingLaneIfNoHeatPumpSource(range.start);
        } else if (item.rawDecisionEvent?.to === "idle") {
          closeLane("HP1", range.start, "running", 0.8);
          closeLane("HP2", range.start, "running", 0.8);
          closeLane("Koeling", range.start, "cooling", 0.8);
        }
      } else if (eventType === "boiler_assist_start") {
        openLane("CV-ketel", range.start);
      } else if (eventType === "boiler_assist_stop") {
        if (!closeLane("CV-ketel", range.start, "assist", 0.65)) {
          addEventSegment("CV-ketel", item, "standby", 0.65);
        }
      } else if (eventType === "candidate_blocked" || eventType === "flow_hold_start") {
        addEventSegment("Bescherming", item, "limited", 0.7);
      } else if (eventType === "flow_hold_clear") {
        const durationMinutes = Math.max(1, getControlWorkingEventDurationChartMinutes(item.rawDecisionEvent));
        addMinuteSegment("Bescherming", Math.max(0, range.start - durationMinutes), range.start, "limited", 0.7);
        if (item.rawDecisionEvent?.reason === "flow_postflow") {
          closeLane("Koeling", range.start, "cooling", 0.8);
        }
      }

      if (eventType === "defrost_seen_start") {
        openDefrost[subject || "SYSTEM"] = range.start;
      } else if (eventType === "defrost_seen_clear" && openDefrost[subject || "SYSTEM"] != null) {
        addMinuteSegment("Ontdooien", openDefrost[subject || "SYSTEM"], range.start, "defrost", 0.7);
        openDefrost[subject || "SYSTEM"] = null;
      } else if (eventType === "defrost_seen_clear" && Number(item.rawDecisionEvent?.duration_s) > 0) {
        const durationMinutes = Math.max(5, getControlWorkingEventDurationChartMinutes(item.rawDecisionEvent));
        addMinuteSegment("Ontdooien", Math.max(0, range.start - durationMinutes), range.start, "defrost", 0.7);
      }
      const protectionAlreadyMapped = eventType === "candidate_blocked" ||
        eventType === "flow_hold_start" ||
        eventType === "flow_hold_clear";
      if (!protectionAlreadyMapped &&
          (item.severity === "limited" || item.severity === "attention" || eventType === "decision_blocked" || eventType === "decision_hold")) {
        addEventSegment("Bescherming", item, item.severity === "attention" ? "assist" : "limited", 0.7);
      }
      if (eventType === "sticky_pump_run") {
        addEventSegment("Bescherming", item, "safe", 0.6);
      }
      if (eventType === "frost_protection_start") {
        addEventSegment("Bescherming", item, "limited", 0.8);
      } else if (eventType === "frost_protection_clear") {
        const durationMinutes = Math.max(1, getControlWorkingEventDurationChartMinutes(item.rawDecisionEvent));
        addMinuteSegment("Bescherming", Math.max(0, range.start - durationMinutes), range.start, "limited", 0.8);
      }
    });
    const openEndMinute = getControlWorkingOpenEndMinute();
    Object.entries(openSource).forEach(([label, startMinute]) => {
      if (startMinute != null) {
        if (startMinute <= openEndMinute) {
          addMinuteSegment(label, startMinute, openEndMinute, label === "CV-ketel" ? "assist" : label === "Koeling" ? "cooling" : "running", 0.8);
        }
      }
    });
    Object.values(openDefrost).forEach((startMinute) => {
      if (startMinute != null) {
        addMinuteSegment("Ontdooien", startMinute, Math.min(1440, startMinute + 7), "defrost", 0.7);
      }
    });

    return lanes.filter((lane) => lane.segments.length);
  }

  function getControlWorkingChartLanes(items) {
    const decisionLogLanes = getControlWorkingDecisionLogChartLanes(items);
    if (decisionLogLanes) {
      return decisionLogLanes;
    }
    return [];
  }

  function renderControlWorkingGraphsTab(selectedItem, items) {
    const graphMinute = getControlWorkingGraphMinute();
    const graphPercent = (graphMinute / 1440) * 100;
    const windowModel = getControlWorkingWindowModel();
    const graphTimeLabel = formatControlWorkingGraphCursorLabel(graphMinute, windowModel);
    const lanes = getControlWorkingChartLanes(items);
    const chartBody = lanes.length
      ? lanes.map((lane) => renderControlWorkingChartLane(lane.label, lane.tone, lane.segments)).join("")
      : renderControlWorkingEmptyState("Nog geen grafiekdata", "De grafiek gebruikt alleen echte beslislog-records. Nieuwe bronwissels, defrosts of begrenzingen verschijnen hier vanzelf.");
    return `
      <div class="oq-working-graphs">
        <section class="oq-working-chart-panel">
          <div class="oq-working-chart-head">
            <div>
              <span class="oq-working-eyebrow">${escapeHtml(windowModel.eyebrow)}</span>
              <h3>Grafieken met beslismomenten</h3>
            </div>
            <p>${escapeHtml(windowModel.graphCopy)}</p>
          </div>
          <div class="oq-working-chart-axis" aria-hidden="true">
            ${windowModel.axis.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}
          </div>
          <div class="oq-working-chart-body">
            <div class="oq-working-chart-control" data-oq-control-replay-scrub="true">
              <input
                class="oq-working-time-slider"
                type="range"
                min="0"
                max="1440"
                step="5"
                value="${escapeHtml(String(graphMinute))}"
                aria-label="Tijd in grafiek"
                data-oq-control-replay-time="true"
              >
              <span class="oq-working-chart-cursor" style="--oq-chart-left:${escapeHtml(String(graphPercent))}%;">
                <strong>${escapeHtml(graphTimeLabel)}</strong>
              </span>
            </div>
            ${chartBody}
          </div>
        </section>
        ${selectedItem ? renderControlWorkingDetails(selectedItem) : renderControlWorkingGraphEmptyDetails(graphTimeLabel)}
      </div>
    `;
  }

  function getControlWorkingSignature(heatPumpPanels) {
    const current = getControlWorkingCurrent(heatPumpPanels);
    return getRenderSignature({
      tab: getControlWorkingSelectedTab(),
      window: getControlWorkingSelectedWindow(),
      periodMenuOpen: state.controlReplayPeriodMenuOpen,
      customPeriodOpen: state.controlReplayCustomPeriodOpen,
      customStart: state.controlReplayCustomStart,
      customEnd: state.controlReplayCustomEnd,
      customPeriodError: state.controlReplayCustomPeriodError,
      selected: state.controlReplaySelectedEpisode,
      supportDetailsItem: state.controlReplaySupportDetailsItemId,
      graphMinute: getControlWorkingGraphMinute(),
      mode: current.modeLabel,
      title: current.title,
      reason: current.primaryReason,
      hp1Running: current.hp1Running,
      hp2Running: current.hp2Running,
      hp1Starts: current.hp1Starts,
      hp2Starts: current.hp2Starts,
      hp1Hours: current.hp1Hours,
      hp2Hours: current.hp2Hours,
      cvStatus: current.cvStatus,
      strategy: current.strategyLabel,
      outside: current.outsideTemp,
      supply: current.supplyTemp,
      flow: current.flow,
      cooling: current.cooling,
      coolingProtection: current.coolingProtection,
      coolingCapped: current.coolingCapped,
      decisionLog: state.decisionLogSignature,
      decisionLogError: state.decisionLogError,
      theme: state.overviewTheme,
    });
  }

  function renderControlWorkingPanel(heatPumpPanels) {
    const current = getControlWorkingCurrent(heatPumpPanels);
    const items = getControlWorkingItems(heatPumpPanels);
    const selectedItem = getControlWorkingSelectedItem(items);
    const selectedTab = getControlWorkingSelectedTab();
    const visibleItem = selectedTab === "graphs"
      ? getControlWorkingItemForMinute(items, getControlWorkingGraphMinute())
      : selectedItem;
    const body = selectedTab === "status"
      ? renderControlWorkingStatusTab(current)
      : selectedTab === "graphs"
      ? renderControlWorkingGraphsTab(visibleItem, items)
      : renderControlWorkingTimelineTab(items, visibleItem);
    const periodChoices = selectedTab === "status" ? "" : renderControlWorkingWindowChoices();
    return `
      <section class="oq-working" data-render-signature="${escapeHtml(getControlWorkingSignature(heatPumpPanels))}">
        <header class="oq-working-head">
          <div class="oq-working-head-copy">
            <span class="oq-working-kicker">
              <span class="oq-working-eyebrow">Beslislog</span>
              <span class="oq-working-beta">BETA</span>
            </span>
            <h2>Keuzes van de controller, uitgelegd</h2>
            <p>Actueel toont wat het systeem nu doet. Tijdlijn toont hoe het zover kwam. Grafieken tonen het verloop.</p>
          </div>
          <div class="oq-working-head-actions">
            ${renderControlWorkingTabs()}
            ${periodChoices}
          </div>
        </header>
        ${body}
      </section>
    `;
  }

  export function renderControlReplayView() {
    const heatPumpPanels = getHeatPumpPanels();
    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          ${renderControlWorkingPanel(heatPumpPanels)}
        </div>
      </section>
    `;
  }

  function patchControlReplayDom() {
    if (!state.root || state.appView !== "control") {
      return false;
    }
    const board = state.root.querySelector(".oq-overview-board");
    const panel = board ? board.querySelector(".oq-working") : null;
    if (!board || !panel) {
      return false;
    }
    const activeElement = document.activeElement;
    if (activeElement && activeElement.closest("[data-oq-control-replay-period-menu]") &&
        activeElement.matches("[data-oq-control-replay-custom-input]")) {
      return true;
    }
    const nextBoardClass = `oq-overview-board oq-overview-board--${state.overviewTheme}`;
    if (board.className !== nextBoardClass) {
      board.className = nextBoardClass;
    }
    const heatPumpPanels = getHeatPumpPanels();
    return replaceOuterHtmlIfSignatureChanged(
      panel,
      getControlWorkingSignature(heatPumpPanels),
      renderControlWorkingPanel(heatPumpPanels),
    ) || true;
  }

  export function renderOverviewView() {
    const strategyLabel = getOverviewStrategyLabel();
    const heatPumpPanels = getHeatPumpPanels();
    const hpLayoutMode = getEffectiveHpLayoutMode(heatPumpPanels);
    const hpGridLayout = getHeatPumpGridLayoutVariant(heatPumpPanels);
    const heatPumpControls = renderHeatPumpControlsInner(heatPumpPanels);

    return `
      <section class="oq-helper-panel oq-helper-panel--flush">
        <div class="oq-overview-board oq-overview-board--${escapeHtml(state.overviewTheme)}">
          ${renderOverviewInstallationMonitoringNotice()}
          ${renderOverviewSummaryShell(strategyLabel)}
          <div class="oq-overview-main">
            ${renderOverviewNarrativePanel(getOverviewStrategySectionModel())}
            ${renderOverviewTempsPanel()}
          </div>
          ${heatPumpControls ? `<div class="oq-overview-hp-tools">${heatPumpControls}</div>` : ""}
          <div class="oq-overview-hp-grid oq-overview-hp-grid--${escapeHtml(hpGridLayout)}">
            ${heatPumpPanels.map((panel, index) => renderHeatPumpPanel(panel.title, panel.keys, panel.accent, getHeatPumpPanelEmphasis(index, heatPumpPanels, hpLayoutMode), getHeatPumpPanelLayoutAction(index, heatPumpPanels, hpLayoutMode))).join("")}
            ${renderBoilerPanel()}
          </div>
        </div>
      </section>
    `;
  }

  export function setTextContent(root, selector, value) {
    if (!root) {
      return;
    }
    const node = root.querySelector(selector);
    if (node && node.textContent !== value) {
      node.textContent = value;
    }
  }

  export function syncAttribute(node, name, value) {
    if (node && node.getAttribute(name) !== value) {
      node.setAttribute(name, value);
    }
  }

  export function syncBoundText(root, bindings) {
    bindings.forEach(([bind, value]) => {
      setTextContent(root, `[data-oq-bind="${bind}"]`, value);
    });
  }

  export function syncBoundAria(root, bindings) {
    bindings.forEach(([bind, label]) => {
      syncAttribute(root.querySelector(`[data-oq-bind="${bind}"]`), "aria-label", label);
    });
  }

  export function syncBoundToggle(root, bind, active, tooltipBind = "") {
    const node = root.querySelector(`[data-oq-bind="${bind}"]`);
    if (!node) {
      return;
    }
    node.classList.toggle("is-active", active);
    syncAttribute(node, "tabindex", active ? "0" : "-1");
    if (!active && tooltipBind) {
      hideTechTooltip(root.querySelector(`[data-oq-bind="${tooltipBind}"]`));
    }
  }

  export function syncBoundFill(root, bind, value) {
    syncAttribute(root.querySelector(`[data-oq-bind="${bind}"]`), "fill", value);
  }

  export function setVariantClass(node, prefix, value, variants) {
    if (!node) {
      return;
    }
    const target = `${prefix}${value}`;
    const current = variants
      .map((variant) => `${prefix}${variant}`)
      .find((variantClass) => node.classList.contains(variantClass));

    if (current === target) {
      return;
    }

    variants.forEach((variant) => node.classList.remove(`${prefix}${variant}`));
    node.classList.add(target);
  }

  export function updatePipeGroup(root, id, tone, d) {
    const group = root.querySelector(`[data-oq-pipe="${id}"]`);
    if (!group) {
      return;
    }
    setVariantClass(group, "oq-hp-tech-pipe--", tone, ["supply", "return", "hotgas", "liquid", "expansion", "suction"]);
    group.querySelectorAll("path").forEach((path) => {
      if (path.getAttribute("d") !== d) {
        path.setAttribute("d", d);
      }
    });
  }

  export function hideTechTooltip(tooltip) {
    if (!tooltip) {
      return;
    }
    tooltip.classList.remove("is-active");
    tooltip.setAttribute("aria-hidden", "true");
  }

  export function showTechTooltip(board, layer, tooltip) {
    if (!board || !layer || !tooltip) {
      return;
    }

    board.querySelectorAll(".oq-hp-tech-tooltip.is-active").forEach((node) => {
      if (node !== tooltip) {
        hideTechTooltip(node);
      }
    });
    layer.appendChild(tooltip);
    tooltip.classList.add("is-active");
    tooltip.setAttribute("aria-hidden", "false");
  }

  export function wireTechTooltipTrigger(board, layer, trigger, tooltip) {
    if (!board || !layer || !trigger || !tooltip || trigger.dataset.oqTooltipWired === "true") {
      return;
    }

    trigger.dataset.oqTooltipWired = "true";
    const hideIfIdle = () => {
      if (trigger.matches(":hover") || document.activeElement === trigger) {
        return;
      }
      hideTechTooltip(tooltip);
    };

    trigger.addEventListener("mouseenter", () => showTechTooltip(board, layer, tooltip));
    trigger.addEventListener("mouseleave", hideIfIdle);
    trigger.addEventListener("focus", () => showTechTooltip(board, layer, tooltip));
    trigger.addEventListener("blur", hideIfIdle);
  }

  export function ensureTechTooltipLayering(board) {
    if (!board) {
      return;
    }

    const svg = board.querySelector(".oq-hp-tech-svg");
    if (!svg) {
      return;
    }

    let layer = svg.querySelector(".oq-hp-tech-tooltip-layer");
    if (!layer) {
      layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
      layer.setAttribute("class", "oq-hp-tech-tooltip-layer");
      svg.appendChild(layer);
    }

    Array.from(svg.querySelectorAll(".oq-hp-tech-tooltip")).forEach((tooltip) => {
      layer.appendChild(tooltip);
    });

    board.querySelectorAll("[data-oq-tooltip-target]").forEach((trigger) => {
      const target = trigger.getAttribute("data-oq-tooltip-target");
      if (!target) {
        return;
      }
      const tooltip = board.querySelector(`[data-oq-bind="${target}-tooltip"]`);
      wireTechTooltipTrigger(board, layer, trigger, tooltip);
    });
  }

  export function syncTechTooltipLayers(root = state.root) {
    if (!root) {
      return;
    }

    root.querySelectorAll("[data-oq-hp-board]").forEach((board) => {
      ensureTechTooltipLayering(board);
    });
  }

  export function patchHeatPumpPanel(panel, title, keys, accent, layoutAction = null, runtime = null) {
    if (!panel) {
      return;
    }

    const resolvedRuntime = runtime || getHeatPumpRuntimeModel(title, keys, accent);
    const { mode, running } = resolvedRuntime;
    const model = resolvedRuntime.schematic;
    const headTitle = panel.querySelector(".oq-overview-hp-head-title");
    if (headTitle) {
      setInnerHtmlIfChanged(headTitle, renderHeatPumpPanelTitle(title, layoutAction));
    }
    const headSide = panel.querySelector(".oq-overview-hp-head-side");
    if (headSide) {
      let headStatus = headSide.querySelector(".oq-overview-hp-status");
      if (!headStatus) {
        setInnerHtmlIfChanged(headSide, renderHeatPumpPanelStatus(mode, running, model.warningActive, model.failureText));
        headStatus = headSide.querySelector(".oq-overview-hp-status");
      }
      patchHpPanelStatusRow(headStatus, mode, running, model.warningActive, model.failureText);
    }

    const board = panel.querySelector("[data-oq-hp-board]");
    if (!board) {
      return;
    }

    if (board.className !== model.boardClass) {
      board.className = model.boardClass;
    }
    syncBoundText(board, [
      ["status", model.statusText],
      ["left-exchanger-title", model.leftExchangerTitle],
      ["right-exchanger-title", model.rightExchangerTitle],
      ["compressor-freq", model.compressorFreqText],
      ["flow-value", model.flowText],
      ["inner-coil-temp-value", model.innerCoilTempText],
      ["evaporator-temp-value", model.evaporatorCoilTempText],
      ["outside-temp-value", model.outsideTempText],
      ["discharge-pressure-value", model.dischargePressureText],
      ["discharge-temp-value", model.dischargeTempText],
      ["suction-pressure-value", model.suctionPressureText],
      ["suction-temp-value", model.suctionTempText],
      ["supply-value", model.waterOutText],
      ["return-value", model.waterInText],
      ["footer-mode", model.mode],
      ["footer-power", model.powerText],
      ["footer-heat", model.heatText],
      ["footer-efficiency-label", model.efficiencyLabel],
      ["footer-efficiency", model.efficiencyText],
      ["fan-speed-value", model.fanRpmText],
      ["fourway-detail", model.fourWayPositionText],
      ["eev-detail", model.eevPositionText],
    ]);
    const footerHeatLabel = board.querySelector('[data-oq-bind="footer-heat-label"]');
    if (footerHeatLabel) {
      syncAttribute(footerHeatLabel, "aria-label", model.heatLabel);
      const nextHeatLabelMarkup = model.heatLabel === "Koelafgifte" ? "Koel<br>afgifte" : "Warmte<br>afgifte";
      if (footerHeatLabel.innerHTML !== nextHeatLabelMarkup) {
        footerHeatLabel.innerHTML = nextHeatLabelMarkup;
      }
    }
    [["bottom-heater", model.bottomPlateActive], ["crankcase-heater", model.crankcaseActive]].forEach(([bind, active]) => {
      syncBoundToggle(board, bind, active, `${bind}-tooltip`);
    });
    const defrostBadge = board.querySelector('[data-oq-bind="defrost-badge"]');
    if (defrostBadge) {
      syncAttribute(defrostBadge, "tabindex", model.defrostActive ? "0" : "-1");
      syncAttribute(defrostBadge, "aria-label", model.defrostActive ? "Defrost actief" : "Defrost uit");
      if (!model.defrostActive) {
        hideTechTooltip(board.querySelector('[data-oq-bind="defrost-badge-tooltip"]'));
      }
    }

    [["supply-tooltip", model.supplyLineTone], ["return-tooltip", model.returnLineTone]].forEach(([bind, tone]) => {
      setVariantClass(board.querySelector(`[data-oq-bind="${bind}"]`), "oq-hp-tech-tooltip--", tone, ["warm", "supply", "return"]);
    });
    syncBoundAria(board, [
      ["supply-reading", `Aanvoer temperatuur ${model.waterOutText}`],
      ["flow-reading", `Flow ${model.flowText}`],
      ["inner-coil-temp-reading", `Inner coil temperatuur ${model.innerCoilTempText}`],
      ["evaporator-temp-reading", `Verdampertemperatuur ${model.evaporatorCoilTempText}`],
      ["outside-temp-reading", `Buitentemperatuur ${model.outsideTempText}`],
      ["compressor-freq-trigger", `Compressorfrequentie ${model.compressorFreqText}`],
      ["fan-speed-reading", `Ventilatorsnelheid ${model.fanRpmText}`],
      ["discharge-pressure-reading", `Persdruk ${model.dischargePressureText}`],
      ["discharge-temp-reading", `Perstemperatuur ${model.dischargeTempText}`],
      ["return-reading", `Retour temperatuur ${model.waterInText}`],
      ["suction-pressure-reading", `Zuigdruk ${model.suctionPressureText}`],
      ["suction-temp-reading", `Zuigtemperatuur ${model.suctionTempText}`],
      ["fourway-trigger", `4-wegklep, ${model.fourWayPositionText}`],
      ["eev-trigger", `Expansieventiel, ${model.eevPositionText}`],
    ]);
    setVariantClass(board.querySelector(".oq-hp-tech-pump"), "oq-hp-tech-pump--", model.returnLineTone, ["supply", "return"]);
    const svgIdBase = String(model.title || "hp").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    syncBoundFill(
      board,
      "cond-water",
      `url(#${model.reverseCycle ? `${svgIdBase}-cond-water-cool` : `${svgIdBase}-cond-water-heat`})`,
    );

    Object.entries(model.pipes).forEach(([id, pipe]) => {
      updatePipeGroup(board, id.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`), pipe.tone, pipe.d);
    });
    ensureTechTooltipLayering(board);
    refreshMotionTargets();
  }

  export function patchOverviewDom() {
    if (!state.root || state.appView !== "overview") {
      return false;
    }

    const board = state.root.querySelector(".oq-overview-board");
    if (!board) {
      return false;
    }

    const nextBoardClass = `oq-overview-board oq-overview-board--${state.overviewTheme}`;
    if (board.className !== nextBoardClass) {
      board.className = nextBoardClass;
    }

    const strategyLabel = getOverviewStrategyLabel();
    const monitoringNotice = board.querySelector("[data-oq-monitoring-notice]");
    const summaryShell = board.querySelector(".oq-overview-summary-shell");
    const system = board.querySelector(".oq-overview-system");
    const temps = board.querySelector(".oq-overview-temps");
    const trends = board.querySelector(".oq-overview-trends");
    const hpTools = board.querySelector(".oq-overview-hp-tools");
    const hpGrid = board.querySelector(".oq-overview-hp-grid");
    const boilerPanel = board.querySelector("[data-oq-boiler-panel]");
    const heatPumpPanels = getHeatPumpPanels();

    if (monitoringNotice) {
      const monitoring = getInstallationMonitoringModel();
      replaceOuterHtmlIfSignatureChanged(
        monitoringNotice,
        getRenderSignature(monitoring),
        renderOverviewInstallationMonitoringNotice(),
      );
    }

    if (summaryShell) {
      const top = summaryShell.querySelector(".oq-overview-top");
      if (top) {
        setInnerHtmlIfChanged(top, renderOverviewStatCards(getOverviewTopCards()));
      }

      const statusPanel = summaryShell.querySelector(".oq-overview-statuspanel");
      if (statusPanel) {
        const controlModeLabel = getEntityStateText("controlModeLabel");
        replaceOuterHtmlIfSignatureChanged(
          statusPanel,
          getRenderSignature(getOverviewStatusCards(strategyLabel, controlModeLabel)),
          renderOverviewStatusPanel(strategyLabel, controlModeLabel),
        );
      }

      const summarySide = summaryShell.querySelector(".oq-overview-summary-side");
      if (summarySide) {
        const nextControlsSignature = getOverviewControlsRenderSignature();
        if (summarySide.dataset.renderSignature !== nextControlsSignature) {
          setInnerHtmlIfChanged(summarySide, renderOverviewControlPanels());
          summarySide.dataset.renderSignature = nextControlsSignature;
        }
      }
    }

    if (system) {
      replaceOuterHtmlIfSignatureChanged(
        system,
        getRenderSignature(getOverviewStrategySectionModel()),
        renderOverviewNarrativePanel(getOverviewStrategySectionModel()),
      );
    }

    if (temps) {
      const tempsModel = getOverviewTempsModel();
      replaceOuterHtmlIfSignatureChanged(
        temps,
        getOverviewTempsRenderSignature(tempsModel),
        renderOverviewTempsPanel(),
      );
    }

    if (trends && state.appView === "overview") {
      replaceOuterHtmlIfSignatureChanged(
        trends,
        getOverviewTrendRenderSignature(),
        renderOverviewTrendsPanel(),
      );
      patchOverviewTrendCurrentValues(board);
    }

    syncOverviewTrendInteractions(board);

    if (!hpTools || !hpGrid) {
      return false;
    }

    const hpLayoutMode = getEffectiveHpLayoutMode(heatPumpPanels);
    const hpGridLayout = getHeatPumpGridLayoutVariant(heatPumpPanels);
    patchHeatPumpControls(hpTools, heatPumpPanels);
    setVariantClass(hpGrid, "oq-overview-hp-grid--", hpGridLayout, ["single", "equal", "focus-hp1", "focus-hp2"]);

    if (state.hpVisualMode !== "schematic") {
      const nextGridMarkup = [
        ...heatPumpPanels.map((panel, index) => renderHeatPumpPanel(
          panel.title,
          panel.keys,
          panel.accent,
          getHeatPumpPanelEmphasis(index, heatPumpPanels, hpLayoutMode),
          getHeatPumpPanelLayoutAction(index, heatPumpPanels, hpLayoutMode),
        )),
        renderBoilerPanel(),
      ].join("");
      const nextGridSignature = getRenderSignature({
        visualMode: state.hpVisualMode,
        layout: hpGridLayout,
        markup: nextGridMarkup,
      });
      if (hpGrid.dataset.renderSignature !== nextGridSignature) {
        setInnerHtmlIfChanged(hpGrid, nextGridMarkup);
        hpGrid.dataset.renderSignature = nextGridSignature;
      }
      return true;
    }

    const nextBoilerModel = shouldRenderBoilerPanel() ? getBoilerPanelModel() : null;
    const nextBoilerMarkup = nextBoilerModel ? renderBoilerPanel() : "";
    const nextBoilerSignature = nextBoilerModel ? getBoilerPanelRenderSignature(nextBoilerModel) : "";
    if (Boolean(boilerPanel) !== Boolean(nextBoilerMarkup)) {
      return false;
    }
    if (boilerPanel && boilerPanel.dataset.renderSignature !== nextBoilerSignature) {
      boilerPanel.outerHTML = nextBoilerMarkup;
    } else if (boilerPanel && nextBoilerModel) {
      patchBoilerPanelRuntime(boilerPanel, nextBoilerModel);
    }

    const renderedPanels = hpGrid.querySelectorAll("[data-oq-hp-panel]");
    if (renderedPanels.length !== heatPumpPanels.length) {
      return false;
    }

    heatPumpPanels.forEach((panel, index) => {
      const panelNode = board.querySelector(`[data-oq-hp-panel="${panel.title}"]`);
      if (panelNode) {
        const runtime = getHeatPumpRuntimeModel(panel.title, panel.keys, panel.accent);
        setVariantClass(panelNode, "oq-overview-hp--", getHeatPumpPanelEmphasis(index, heatPumpPanels, hpLayoutMode), ["normal", "focus", "muted"]);
        patchHeatPumpPanel(panelNode, panel.title, panel.keys, panel.accent, getHeatPumpPanelLayoutAction(index, heatPumpPanels, hpLayoutMode), runtime);
      }
    });

    return true;
  }

  setViewPatchControls({ patchControlReplayDom, patchOverviewDom });
