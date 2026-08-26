import { renderAppNav, syncDocumentTheme, syncDocumentTitle } from "../core/app-shared.js";
import { LOGO_MARKUP } from "../core/embedded-assets.js";
import { getSettingsRenderSignature } from "../core/render-signatures.js";
import { escapeHtml } from "../core/html.js";
import { renderModalShell, syncModalFocus } from "../core/modal-shell.js";
import { captureModalContinuity, restoreModalContinuity } from "../core/modal-continuity.js";
import { setRenderCallback } from "../core/render-scheduler.js";
import { state } from "../core/state.js";
import { clearLegacyMotionVariables, startMotionLoop, stopMotionLoop } from "../core/motion.js";
import { bindHeaderDevControls, syncNativeVisibility } from "../core/runtime.js";
import { renderDeviceReconnectModal, renderUpdateModal } from "../features/firmware-update.js";
import { getDeviceVersionLabel, getHeaderRenderSignature, renderControlModeOverrideBanner, renderDevPanel, renderHeaderStatus, renderNativeSurfaceShell, renderSystemModal } from "../features/header-status.js";
import { getMqttSensorsModalRenderSignature } from "../features/mqtt-actions.js";
import { updateMqttState } from "../core/feature-state.js";
import { captureQuickStartScrollState, queueQuickStartScrollRestore, renderQuickStartModal } from "../features/quickstart.js";
import { captureCm100CommissioningScrollState, captureHistoryStorageModalScrollState, captureServiceTaskModalScrollState, captureSettingsBackupRestoreModalScrollState, captureWebServerLogScrollState, queueCm100CommissioningScrollRestore, queueHistoryStorageModalScrollRestore, queueServiceTaskModalScrollRestore, queueSettingsBackupRestoreModalScrollRestore, queueWebServerLogScrollRestore, syncWebServerLogStream } from "../features/webserver-logs.js";
import { renderSettingsGroupContent, renderSettingsGroupNav } from "../settings/core.js";
import { renderEnergyView, renderResultsView } from "./energy.js";
import { renderControlReplayView } from "../features/control-replay-view.js";
import { renderOverviewView, syncTechTooltipLayers } from "./heatpump.js";
import { renderDiagnosisView, syncOverviewTrendInteractions } from "./overview.js";

function captureFocusedSettingsField() {
  const active = document.activeElement;
  if (state.appView !== "settings" || !state.root?.contains(active) || !active?.dataset?.oqField) {
    return null;
  }
  return {
    field: active.dataset.oqField,
    modalId: active.closest("[data-oq-modal]")?.dataset.oqModal || "",
    selectionStart: active.selectionStart,
    selectionEnd: active.selectionEnd,
  };
}

function restoreFocusedSettingsField(focusState) {
  if (!focusState || !state.root) {
    return;
  }

  const modal = document.activeElement.closest("[data-oq-modal]");
  if ((modal?.dataset.oqModal || "") !== focusState.modalId) {
    return;
  }

  const input = (modal || state.root).querySelector(`[data-oq-field="${focusState.field}"]`);
  if (!input || input.disabled) {
    return;
  }

  input.focus({ preventScroll: true });
  if (typeof focusState.selectionStart === "number" && typeof input.setSelectionRange === "function") {
    input.setSelectionRange(focusState.selectionStart, focusState.selectionEnd);
  }
}

export function renderSettingsView() {
    return `
      <section class="oq-helper-panel">
        <p class="oq-helper-label">Instellingen</p>
        <h2 class="oq-helper-section-title">Kies een onderdeel</h2>
        <p class="oq-helper-section-copy">Werk installatie, service, regeling, koeling en systeem apart bij. Wijzigingen worden direct toegepast.</p>
        ${state.controlError ? `<p class="oq-helper-error" role="alert">${escapeHtml(state.controlError)}</p>` : ""}
        ${state.controlNotice ? `<p class="oq-helper-notice" role="status">${escapeHtml(state.controlNotice)}</p>` : ""}
        ${renderSettingsGroupNav()}
        ${renderSettingsGroupContent()}
      </section>
    `;
  }

  export function renderInitialLoadingView() {
    return renderModalShell({
      modalId: "initial-load",
      titleId: "oq-loading-modal-title",
      kicker: "OpenQuatt",
      title: "OpenQuatt laden",
      backdropClass: "oq-helper-modal-backdrop--loading",
      modalClass: "oq-helper-modal--reconnect oq-helper-modal--loading",
      role: "status",
      ariaLive: "polite",
      bodyMarkup: `
        <p class="oq-helper-modal-copy">We wachten tot de zichtbare gegevens compleet zijn, zodat de interface niet half gevuld verschijnt. Dit kan enkele seconden duren.</p>
        <div class="oq-helper-reconnect-status oq-helper-loading-status">
          <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
          <div>
            <strong>Eerste synchronisatie</strong>
            <span>De velden op dit scherm worden compleet klaargezet.</span>
          </div>
        </div>
      `,
    });
  }

  export function renderCurrentAppView() {
    return state.appView === "overview"
      ? renderOverviewView()
      : state.appView === "control"
      ? renderControlReplayView()
      : state.appView === "energy"
      ? renderEnergyView()
      : state.appView === "diagnosis"
      ? renderDiagnosisView()
      : state.appView === "results"
      ? renderResultsView()
      : renderSettingsView();
  }

  export function renderPoweredByFooter() {
    const version = getDeviceVersionLabel();
    const versionMarkup = version && version !== "—"
      ? `<span class="oq-helper-footer-version">OpenQuatt ${escapeHtml(version)}</span>`
      : "";
    return `
      <footer class="oq-helper-powered-by" aria-label="Platform">
        ${versionMarkup}
        <nav class="oq-helper-footer-links" aria-label="OpenQuatt links">
          <a href="https://openquatt.github.io/OpenQuatt/" target="_blank" rel="noreferrer">Docs</a>
          <a href="https://github.com/OpenQuatt/OpenQuatt" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
        <a class="oq-helper-powered-by-link" href="https://esphome.io/" target="_blank" rel="noreferrer" aria-label="Built with ESPHome">
          <span>Built with</span>
          <img class="oq-helper-powered-by-logo" src="https://media.esphome.io/logo/logo-text-on-light.svg" alt="ESPHome" loading="lazy" decoding="async">
        </a>
      </footer>
    `;
  }

  export function getActiveDevControlSelect() {
    const active = typeof document !== "undefined" ? document.activeElement : null;
    if (!active || typeof active.matches !== "function") {
      return null;
    }
    return active.matches('select[data-oq-dev-control]') ? active : null;
  }

  export function deferRenderUntilDevControlSelectSettles(select) {
    if (!select || state.deferDevControlSelectRender) {
      return;
    }

    state.deferDevControlSelectRender = true;
    const flush = () => {
      select.removeEventListener("blur", flush);
      select.removeEventListener("change", flush);
      state.deferDevControlSelectRender = false;
      window.setTimeout(() => render(), 0);
    };
    select.addEventListener("blur", flush, { once: true });
    select.addEventListener("change", flush, { once: true });
  }

  export function captureSettingsPageScrollState() {
    if (
      state.nativeOpen ||
      state.appView !== "settings" ||
      state.renderedAppView !== "settings" ||
      state.renderedSettingsGroup !== state.settingsGroup
    ) {
      return null;
    }

    const scroller = document.scrollingElement || document.documentElement;
    const top = Number(window.scrollY || scroller?.scrollTop || 0);
    if (!Number.isFinite(top) || top <= 0) {
      return null;
    }

    return {
      group: state.settingsGroup,
      left: Number(window.scrollX || scroller?.scrollLeft || 0),
      top,
    };
  }

  export function queueSettingsPageScrollRestore(scrollState) {
    if (!scrollState) {
      return;
    }

    const token = (state.settingsPageScrollRestoreToken || 0) + 1;
    state.settingsPageScrollRestoreToken = token;
    const restore = () => {
      if (
        token !== state.settingsPageScrollRestoreToken ||
        state.nativeOpen ||
        state.appView !== "settings" ||
        state.settingsGroup !== scrollState.group
      ) {
        return;
      }

      const scroller = document.scrollingElement || document.documentElement;
      if (!scroller) {
        return;
      }

      const maxTop = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
      const top = Math.min(scrollState.top, maxTop);
      window.scrollTo({ left: scrollState.left, top, behavior: "auto" });
    };

    window.requestAnimationFrame(() => {
      restore();
      window.requestAnimationFrame(restore);
      window.setTimeout(restore, 80);
    });
  }

  export function render() {
    if (!state.root) {
      return;
    }

    const activeDevControlSelect = getActiveDevControlSelect();
    if (activeDevControlSelect) {
      deferRenderUntilDevControlSelectSettles(activeDevControlSelect);
      return;
    }

    const focusedSettingsField = captureFocusedSettingsField();
    const modalContinuity = captureModalContinuity(state.root);
    const oduEepromLauncher = state.root.querySelector('[data-oq-action="open-odu-eeprom-dump-modal"]');
    const oduEepromLauncherFocused = oduEepromLauncher === document.activeElement;

    const webServerLogScrollState = state.systemModal === "webserver-logs"
      ? captureWebServerLogScrollState()
      : null;
    const cm100CommissioningScrollState = state.systemModal === "cm100-commissioning"
      ? captureCm100CommissioningScrollState()
      : null;
    const serviceTaskModalScrollState = String(state.systemModal || "").startsWith("service-task-")
      ? captureServiceTaskModalScrollState()
      : null;
    const historyStorageModalScrollState = state.systemModal === "history-storage"
      ? captureHistoryStorageModalScrollState()
      : null;
    const settingsBackupRestoreModalScrollState = state.systemModal === "settings-backup-restore"
      ? captureSettingsBackupRestoreModalScrollState()
      : null;
    const quickStartScrollState = state.quickStartModalOpen
      ? captureQuickStartScrollState()
      : null;
    const settingsPageScrollState = captureSettingsPageScrollState();

    if (state.nativeOpen) {
      state.root.innerHTML = `
        ${renderDevPanel()}
        <div class="oq-main-layout-wrapper" style="display: flex; width: 100vw; height: 100vh; overflow: hidden;">
          <div style="flex-grow: 1; height: 100%; overflow-y: auto;">
            ${renderNativeSurfaceShell()}
          </div>
          ${renderAiSidePanel()}
        </div>
      `;
      syncModalFocus(state.root);
      restoreModalContinuity(state.root, modalContinuity);
      state.renderedAppView = "native";
      state.renderedSettingsGroup = "";
      state.settingsRenderSignature = "";
      state.headerRenderSignature = getHeaderRenderSignature();
      updateMqttState({ mqttSensorsModalRenderSignature: "" });
      stopMotionLoop();
      syncNativeVisibility();
      syncWebServerLogStream();
      bindHeaderDevControls();
      syncDocumentTheme();
      syncDocumentTitle();
      queueWebServerLogScrollRestore(webServerLogScrollState);
      queueCm100CommissioningScrollRestore(cm100CommissioningScrollState);
      queueServiceTaskModalScrollRestore(serviceTaskModalScrollState);
      queueHistoryStorageModalScrollRestore(historyStorageModalScrollState);
      queueSettingsBackupRestoreModalScrollRestore(settingsBackupRestoreModalScrollState);
      queueQuickStartScrollRestore(quickStartScrollState);
      return;
    }

    const currentViewContent = renderCurrentAppView();
    const mainContent = state.loadingEntities
      ? `${currentViewContent}${renderInitialLoadingView()}`
      : currentViewContent;
    const wideFlushCard = state.appView === "overview" || state.appView === "control" || state.appView === "energy" ||
      state.appView === "diagnosis" || state.appView === "results";

    state.root.innerHTML = `
      ${renderDevPanel()}
      <div class="oq-helper-shell${state.overviewTheme === "dark" ? " oq-helper-shell--dark" : ""}">
        <div class="oq-helper-card${wideFlushCard ? " oq-helper-card--wide-flush" : ""}">
          <div class="oq-helper-head">
            <div class="oq-helper-brand">
              <div class="oq-helper-logo-lockup">
                ${LOGO_MARKUP}
              <div class="oq-helper-brand-copy" style="display: flex; align-items: center; gap: 15px;">
                <h1>OpenQuatt Control</h1>
                <button 
                  id="oq-ai-toggle-btn"
                  title="Open AI Copilot"
                  type="button"
                  style="background: #efefef; border: 1px solid #ccc; font-size: 16px; cursor: pointer; padding: 4px 12px; border-radius: 20px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; font-family: sans-serif;"
                  onmouseover="this.style.background='#ff9900'"
                  onmouseout="this.style.background='#efefef'"
                  onclick="(() => { 
                    const current = localStorage.getItem('oq_ai_panel_visible') === 'true';
                    localStorage.setItem('oq_ai_panel_visible', !current ? 'true' : 'false'); 
                    window.location.reload(); 
                  })()"
                >
                  🤖 <span style="font-size: 12px; margin-left: 5px; font-weight: bold; color: #333;">AI Copilot</span>
                </button>
              </div>
              </div>
              <p class="oq-helper-lead">Stel je OpenQuatt in, volg live wat er gebeurt en verfijn de regeling wanneer nodig.</p>
            </div>
            ${renderHeaderStatus()}
          </div>
      ${renderAppNav()}
      ${renderControlModeOverrideBanner()}
      ${mainContent}
      ${renderPoweredByFooter()}
        </div>
      </div>
      ${renderQuickStartModal()}
      ${renderUpdateModal()}
      ${renderSystemModal()}
      ${renderDeviceReconnectModal()}
    `;
    const replacementOduEepromLauncher = state.root.querySelector('[data-oq-action="open-odu-eeprom-dump-modal"]');
    if (oduEepromLauncher && replacementOduEepromLauncher) {
      replacementOduEepromLauncher.replaceWith(oduEepromLauncher);
      if (oduEepromLauncherFocused) oduEepromLauncher.focus({ preventScroll: true });
    }
    syncModalFocus(state.root);
    restoreModalContinuity(state.root, modalContinuity);
    restoreFocusedSettingsField(focusedSettingsField);
    state.renderedAppView = state.appView;
    state.renderedSettingsGroup = state.appView === "settings" ? state.settingsGroup : "";
    state.settingsRenderSignature = state.appView === "settings" ? getSettingsRenderSignature() : "";
    state.headerRenderSignature = getHeaderRenderSignature();
    updateMqttState({
      mqttSensorsModalRenderSignature: state.systemModal === "mqtt-sensors" ? getMqttSensorsModalRenderSignature() : "",
    });
    clearLegacyMotionVariables();
    syncTechTooltipLayers();
    syncWebServerLogStream();
    startMotionLoop();
    syncOverviewTrendInteractions();
    syncNativeVisibility();
    bindHeaderDevControls();
    syncDocumentTheme();
    syncDocumentTitle();
    queueWebServerLogScrollRestore(webServerLogScrollState);
    queueCm100CommissioningScrollRestore(cm100CommissioningScrollState);
    queueServiceTaskModalScrollRestore(serviceTaskModalScrollState);
    queueHistoryStorageModalScrollRestore(historyStorageModalScrollState);
    queueSettingsBackupRestoreModalScrollRestore(settingsBackupRestoreModalScrollState);
    queueQuickStartScrollRestore(quickStartScrollState);
    queueSettingsPageScrollRestore(settingsPageScrollState);
  }

setRenderCallback(render);


export function renderAiSidePanel() {
  const isVisible = localStorage.getItem('oq_ai_panel_visible') === 'true';
  const savedKey = localStorage.getItem('openquatt_gemini_key') || '';
  
  // Als de knop in de header op 'dicht' staat, geeft deze functie niks terug
  if (!isVisible) {
    return "";
  }

  // De HTML-structuur van het geopende AI-Zijpaneel (350 pixels breed aan de rechterkant)
  return `
    <aside id="oq-ai-side-panel" style="width: 350px; min-width: 350px; height: 100%; background: #1a1a1a; border-left: 1px solid #333; display: flex; flex-direction: column; color: #fff; font-family: sans-serif; z-index: 9998;">
      <!-- Panel Header -->
      <div style="padding: 15px; border-bottom: 1px solid #333; display: flex; justify-content: space-between; align-items: center; background: #222;">
        <h3 style="margin: 0; font-size: 16px; color: #ff9900;">🤖 OpenQuatt AI Copilot</h3>
        <button 
          style="background: transparent; border: none; color: #aaa; font-size: 20px; cursor: pointer;"
          onclick="(() => { localStorage.setItem('oq_ai_panel_visible', 'false'); window.location.reload(); })()"
        >
          ✕
        </button>
      </div>

      <!-- Chat Berichtenbak -->
      <div id="oq-ai-chat-messages" style="flex-grow: 1; padding: 15px; overflow-y: auto; font-size: 14px; display: flex; flex-direction: column; gap: 10px;">
        <div style="background: #2a2a2a; padding: 10px; border-radius: 6px; border-left: 3px solid #ff9900;">
          <p style="margin: 0;"><strong>Assistent:</strong> Hallo! Ik ben je OpenQuatt Copilot. Ik ken je installatieprofiel. Hoe kan ik je vandaag helpen?</p>
        </div>
      </div>

      <!-- Live Diagnose Schakelaar (Tweetraps-logica) -->
      <div style="padding: 10px 15px; background: #111; border-top: 1px solid #333; font-size: 12px; display: flex; align-items: center; gap: 8px;">
        <input type="checkbox" id="oq-ai-include-json-chk" style="cursor: pointer;">
        <label for="oq-ai-include-json-chk" style="cursor: pointer; color: #ccc;">Stuur uitgebreide live sensordata (JSON) mee</label>
      </div>

      <!-- Inputveld en Verzendknop -->
      <div style="padding: 15px; border-top: 1px solid #333; display: flex; gap: 8px; background: #222;">
        <input 
          id="oq-ai-chat-input" 
          type="text" 
          placeholder="${savedKey ? 'Stel een vraag...' : 'Voer eerst je API-key in bij Instellingen'}" 
          style="flex-grow: 1; padding: 8px; background: #2a2a2a; border: 1px solid #444; color: #fff; border-radius: 4px;"
          ${savedKey ? '' : 'disabled'}
          onkeypress="if(event.key === 'Enter') { document.getElementById('oq-ai-send-btn').click(); }"
        >
        <button 
          id="oq-ai-send-btn" 
          style="background: #ff9900; color: #000; border: none; font-weight: bold; padding: 0 15px; border-radius: 4px; cursor: pointer;"
          ${savedKey ? '' : 'disabled'}
          onclick="async (() => {
            const inputEl = document.getElementById('oq-ai-chat-input');
            const question = inputEl.value.trim();
            if (!question) return;

            // Toon vraag in de UI
            const msgContainer = document.getElementById('oq-ai-chat-messages');
            msgContainer.innerHTML += \`<div style='background: #333; padding: 10px; border-radius: 6px; align-self: flex-end; max-width: 85%; margin-bottom: 5px;'><p style='margin:0;'><strong>Jij:</strong> \${question}</p></div>\`;
            inputEl.value = '';
            msgContainer.scrollTop = msgContainer.scrollHeight;

            const apiKey = localStorage.getItem('openquatt_gemini_key');
            const includeJson = document.getElementById('oq-ai-include-json-chk').checked;

            // Bouw het installatieprofiel op basis van de actuele telemetriestaat
            const profiel = {
              firmware_version: state.telemetry?.firmware_version || "v0.47.0",
              heating_strategy: state.telemetry?.heating_strategy || "power_house",
              boiler_connection: state.telemetry?.boiler_connection || "opentherm",
              boiler_assist_enabled: state.telemetry?.boiler_assist_enabled ?? true
            };

            let jsonPromptPart = '';
            if (includeJson) {
              try {
                const res = await fetch('/api/status');
                const rawJson = await res.text();
                jsonPromptPart = '\\nHUIDIGE LIVE SENSOR DATA (JSON):\\n' + rawJson;
              } catch(e) { console.error(e); }
            }

            // Cloud API aanroep naar Gemini 1.5 Flash
            try {
              const url = 'https://googleapis.com' + apiKey;
              const payload = {
                contents: [{
                  parts: [{
                    text: 'Je bent de AI-assistent van OpenQuatt (open-source, best-effort basis, support via Discord, bugs via GitHub).\\n\\nINSTALLATIEPROFIEL:\\n' + JSON.stringify(profiel) + jsonPromptPart + '\\n\\nVRAAG: ' + question
                  }]
                }]
              };

              const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
              const data = await response.json();
              const reply = data.candidates.content.parts.text;

              // Toon antwoord in UI
              msgContainer.innerHTML += \`<div style='background: #2a2a2a; padding: 10px; border-radius: 6px; border-left: 3px solid #ff9900; margin-bottom: 5px;'><p style='margin:0;'><strong>Assistent:</strong> \${reply}</p></div>\`;
            } catch (err) {
              msgContainer.innerHTML += \`<div style='background: #552222; padding: 10px; border-radius: 6px; margin-bottom: 5px;'><p style='margin:0;'><strong>Fout:</strong> AI kon niet worden bereikt. Controleer internet of API-key.</p></div>\`;
            }
            msgContainer.scrollTop = msgContainer.scrollHeight;
          })()"
        >
          Stuur
        </button>
      </div>
      
      <!-- Project Footer / Vangrail Links -->
      <div style="padding: 10px; background: #111; font-size: 11px; text-align: center; border-top: 1px solid #333; color: #888;">
        Best-effort project. Hulp nodig? <a href="https://discord.gg" target="_blank" style="color: #ff9900; text-decoration: none;">Discord</a> | Bug? <a href="https://github.com" target="_blank" style="color: #ff9900; text-decoration: none;">GitHub</a>
      </div>
    </aside>
  `;
}
