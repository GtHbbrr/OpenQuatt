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
import { getEntityValue } from "../core/entity-store.js";

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
        ${renderNativeSurfaceShell()}
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
                    class="oq-ai-toggle-action"
                    title="Open AI Copilot"
                    type="button"
                    style="background: #efefef; border: 1px solid #ccc; font-size: 16px; cursor: pointer; padding: 4px 12px; border-radius: 20px; display: flex; align-items: center; justify-content: center; transition: background 0.2s; font-family: sans-serif;"
                    onmouseover="this.style.background='#ff9900'"
                    onmouseout="this.style.background='#efefef'"
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

    // --- AI SPRINT: KOPPEL DE KLIKACTIE HIER RECHTSTREEKS BINNEN DE ACTIEVE RENDER-LUS ---
    setTimeout(() => {
      const aiBtn = document.getElementById('oq-ai-toggle-btn');
      if (aiBtn && !aiBtn.dataset.oqBound) {
        aiBtn.dataset.oqBound = "true";
        aiBtn.addEventListener('click', () => {
          let container = document.getElementById('oq-ai-side-panel-container');
          if (container) {
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
          } else {
            const newContainer = document.createElement('div');
            newContainer.id = 'oq-ai-side-panel-container';
            newContainer.style.position = 'fixed';
            newContainer.style.top = '0';
            newContainer.style.right = '0';
            newContainer.style.width = '350px';
            newContainer.style.height = '100vh';
            newContainer.style.zIndex = '99999';
            newContainer.style.boxShadow = '-5px 0 15px rgba(0,0,0,0.3)';
            newContainer.style.display = 'block';
            
            newContainer.innerHTML = renderAiSidePanel();
            document.body.appendChild(newContainer);

            // Koppel direct de sluitknop (✕)
            const closeBtn = newContainer.querySelector('#oq-ai-close-btn');
            if (closeBtn) {
              closeBtn.addEventListener('click', () => {
                newContainer.style.display = 'none';
              });
            }

            // --- DE ACTIVEER-LOGICA VOOR DE STUUR-KNOP BINNEN DE SANDBOX ---
            const sendBtn = newContainer.querySelector('#oq-ai-send-btn');
            const chatInput = newContainer.querySelector('#oq-ai-chat-input');
            
            if (sendBtn && chatInput) {
              sendBtn.addEventListener('click', async () => {
                const question = chatInput.value.trim();
                if (!question) return;

                const msgContainer = document.getElementById('oq-ai-chat-messages');
                msgContainer.innerHTML += '<div style="background: #333; padding: 10px; border-radius: 6px; align-self: flex-end; max-width: 85%; margin-bottom: 5px;"><p style="margin:0;"><strong>Jij:</strong> ' + escapeHtml(question) + '</p></div>';
                chatInput.value = '';
                msgContainer.scrollTop = msgContainer.scrollHeight;

                const currentMode = localStorage.getItem('oq_ai_mode') || 'cloud';
                const apiKey = localStorage.getItem('openquatt_gemini_key');
                const includeJson = document.getElementById('oq-ai-include-json-chk').checked;

                const profiel = {
                  firmware_version: 'v0.47.0',
                  heating_strategy: 'power_house',
                  boiler_connection: 'on_off',
                  boiler_assist_enabled: true
                };

                let jsonPromptPart = '';
                if (includeJson) {
                  try {
                    // Route A: Probeer de echte warmtepomp endpoint te pollen
                    const res = await fetch('/api/status');
                    if (res.ok) {
                      const rawJson = await res.text();
                      jsonPromptPart = '\\nHUIDIGE LIVE SENSOR DATA (JSON):\\n' + rawJson;
                    } else {
                      // Route B: Als we in de simulator zitten (404/leeg), sturen we de complete gesimuleerde matrix mee!
                      const simData = typeof USAGE_TELEMETRY_EXAMPLE_JSON !== 'undefined' ? USAGE_TELEMETRY_EXAMPLE_JSON : JSON.stringify(profiel);
                      jsonPromptPart = '\\nHUIDIGE LIVE SIMULATOR DATA (JSON):\\n' + simData;
                    }
                  } catch(e) { 
                    // Mocht de fetch crashen door CORS/netwerk, gebruik dan direct de simulator data
                    const simData = typeof USAGE_TELEMETRY_EXAMPLE_JSON !== 'undefined' ? USAGE_TELEMETRY_EXAMPLE_JSON : JSON.stringify(profiel);
                    jsonPromptPart = '\\nHUIDIGE LIVE SIMULATOR DATA (JSON):\\n' + simData;
                  }
                }

                const promptText = 'Je bent de AI-assistent van OpenQuatt (open-source, best-effort basis).\\n\\nINSTALLATIEPROFIEL:\\n' + JSON.stringify(profiel) + jsonPromptPart + '\\n\\nVRAAG: ' + question;

                // --- TWEETRAPS LOGICA VERZENDEN ---
                if (currentMode === 'cloud') {
                  // ROUTE A: GOOGLE GEMINI 3.7 CLOUD
                  try {
                    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.7-flash:generateContent?key=' + apiKey;
                    const payload = { contents: [{ parts: [{ text: promptText }] }] };

                    const response = await window.fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    if (!response.ok) {
                      msgContainer.innerHTML += '<div style="background: #552222; padding: 10px; border-radius: 6px; margin-bottom: 5px;"><p style="margin:0;"><strong>Fout:</strong> De AI is (even) niet beschikbaar. Probeer het over een moment opnieuw.</p></div>';
                      msgContainer.scrollTop = msgContainer.scrollHeight;
                      return;
                    }
                    const data = await response.json();
                    const reply = data.candidates[0].content.parts[0].text;
                    msgContainer.innerHTML += '<div style="background: #2a2a2a; padding: 10px; border-radius: 6px; border-left: 3px solid #ff9900; margin-bottom: 5px;"><p style="margin:0;"><strong>Assistent (Cloud):</strong> ' + escapeHtml(reply) + '</p></div>';
                  } catch (err) {
                    msgContainer.innerHTML += '<div style="background: #552222; padding: 10px; border-radius: 6px; margin-bottom: 5px;"><p style="margin:0;"><strong>Fout:</strong> Cloud AI kon niet worden bereikt.</p></div>';
                  }
                } else {
                  // ROUTE B: LOKAAL OLLAMA (LLAMA 3 8B MOOT)
                  try {
                    const url = 'http://localhost:11434/api/generate';
                    const payload = { model: 'llama3', prompt: promptText, stream: false };

                    const response = await window.fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
                    if (!response.ok) {
                      msgContainer.innerHTML += '<div style="background: #552222; padding: 10px; border-radius: 6px; margin-bottom: 5px;"><p style="margin:0;"><strong>Fout:</strong> Lokale Ollama AI reageert niet. Staat de app aan?</p></div>';
                      msgContainer.scrollTop = msgContainer.scrollHeight;
                      return;
                    }
                    const data = await response.json();
                    const reply = data.response;
                    msgContainer.innerHTML += '<div style="background: #2a2a2a; padding: 10px; border-radius: 6px; border-left: 3px solid #ffaa00; margin-bottom: 5px;"><p style="margin:0;"><strong>Assistent (Lokaal):</strong> ' + escapeHtml(reply) + '</p></div>';
                  } catch (err) {
                    msgContainer.innerHTML += '<div style="background: #552222; padding: 10px; border-radius: 6px; margin-bottom: 5px;"><p style="margin:0;"><strong>Fout:</strong> Lokale AI-verbinding verbroken.</p></div>';
                  }
                }
                msgContainer.scrollTop = msgContainer.scrollHeight;
              });
            }
          }
        });
      }
    }, 50);

  }

setRenderCallback(render);


export function renderAiSidePanel() {
  const savedKey = localStorage.getItem('openquatt_gemini_key') || '';
  const aiMode = localStorage.getItem('oq_ai_mode') || 'cloud'; // Onthoud 'cloud' of 'local'
  
  let maskedKey = savedKey;
  if (savedKey.length > 10) {
    maskedKey = savedKey.substring(0, 4) + '...' + savedKey.substring(savedKey.length - 4);
  }

  return `
    <aside id="oq-ai-side-panel" style="width: 350px; min-width: 350px; height: 100%; background: #1a1a1a; border-left: 1px solid #333; display: flex; flex-direction: column; color: #fff; font-family: sans-serif; z-index: 9998; box-sizing: border-box;">
      <!-- Panel Header -->
      <div style="padding: 15px; border-bottom: 1px solid #333; display: flex; justify-content: space-between; align-items: center; background: #222;">
        <h3 style="margin: 0; font-size: 16px; color: #ff9900;">🤖 OpenQuatt AI Copilot</h3>
        <button 
          id="oq-ai-close-btn"
          type="button"
          style="background: transparent; border: none; color: #aaa; font-size: 20px; cursor: pointer;"
        >
          ✕
        </button>
      </div>

      <!-- HYBRIDE MOTOR SCHAKELAAR (Cloud vs Lokaal) -->
      <div style="padding: 10px 15px; background: #151515; border-bottom: 1px solid #333; display: flex; align-items: center; justify-content: space-between; font-size: 12px;">
        <span style="color: #ccc; font-weight: bold;">AI Motor selectie:</span>
        <div style="display: flex; background: #222; border-radius: 15px; padding: 2px; border: 1px solid #444;">
          <button 
            id="oq-mode-cloud-btn"
            type="button"
            style="border: none; padding: 4px 10px; border-radius: 12px; cursor: pointer; font-size: 11px; font-weight: bold; background: ${aiMode === 'cloud' ? '#ff9900' : 'transparent'}; color: ${aiMode === 'cloud' ? '#000' : '#aaa'};"
            onclick="(() => { localStorage.setItem('oq_ai_mode', 'cloud'); document.getElementById('oq-cloud-key-section').style.display = 'block'; document.getElementById('oq-mode-cloud-btn').style.background = '#ff9900'; document.getElementById('oq-mode-cloud-btn').style.color = '#000'; document.getElementById('oq-mode-local-btn').style.background = 'transparent'; document.getElementById('oq-mode-local-btn').style.color = '#aaa'; })()"
          >
            ☁️ Cloud (3.7)
          </button>
          <button 
            id="oq-mode-local-btn"
            type="button"
            style="border: none; padding: 4px 10px; border-radius: 12px; cursor: pointer; font-size: 11px; font-weight: bold; background: ${aiMode === 'local' ? '#ff9900' : 'transparent'}; color: ${aiMode === 'local' ? '#000' : '#aaa'};"
            onclick="(() => { localStorage.setItem('oq_ai_mode', 'local'); document.getElementById('oq-cloud-key-section').style.display = 'none'; document.getElementById('oq-mode-local-btn').style.background = '#ff9900'; document.getElementById('oq-mode-local-btn').style.color = '#000'; document.getElementById('oq-mode-cloud-btn').style.background = 'transparent'; document.getElementById('oq-mode-cloud-btn').style.color = '#aaa'; })()"
          >
            💻 Lokaal (Llama3)
          </button>
        </div>
      </div>

      <!-- API Key Beheer (Verbergt automatisch als lokaal is gekozen) -->
      <div id="oq-cloud-key-section" style="padding: 15px; background: #111; border-bottom: 1px solid #333; font-size: 13px; display: ${aiMode === 'cloud' ? 'block' : 'none'};">
        <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #ccc;">Gemini API-sleutel:</label>
        <div style="display: flex; gap: 8px;">
          <input 
            id="oq-ai-api-key-input" 
            type="password" 
            value="${savedKey}" 
            placeholder="${savedKey ? maskedKey : 'AIzaSy...'}"
            style="flex-grow: 1; padding: 6px; background: #222; border: 1px solid #444; color: #fff; border-radius: 4px; font-size: 12px;"
          >
          <button 
            id="oq-save-ai-key-btn"
            type="button"
            style="background: #ff9900; color: #000; font-weight: bold; border: none; padding: 0 10px; border-radius: 4px; cursor: pointer; font-size: 12px;"
            onclick="(() => {
              const key = document.getElementById('oq-ai-api-key-input').value.trim();
              if(key) {
                localStorage.setItem('openquatt_gemini_key', key);
                alert('Gemini API-sleutel opgeslagen!');
              }
            })()"
          >
            Save
          </button>
        </div>
      </div>

      <!-- Chat Berichtenbak -->
      <div id="oq-ai-chat-messages" style="flex-grow: 1; padding: 15px; overflow-y: auto; font-size: 14px; display: flex; flex-direction: column; gap: 10px;">
        <div style="background: #2a2a2a; padding: 10px; border-radius: 6px; border-left: 3px solid #ff9900;">
          <p style="margin: 0;"><strong>Assistent:</strong> Hallo! Ik ben je OpenQuatt Copilot. Vul hierboven je API-sleutel in om te beginnen.</p>
        </div>
      </div>

      <!-- Live Diagnose Schakelaar -->
      <div style="padding: 10px 15px; background: #111; border-top: 1px solid #333; font-size: 12px; display: flex; align-items: center; gap: 8px;">
        <input type="checkbox" id="oq-ai-include-json-chk" style="cursor: pointer;">
        <label for="oq-ai-include-json-chk" style="cursor: pointer; color: #ccc;">Stuur uitgebreide live sensordata (JSON) mee</label>
      </div>

      <!-- Inputveld en Verzendknop -->
      <div style="padding: 15px; border-top: 1px solid #333; display: flex; gap: 8px; background: #222;">
        <input 
          id="oq-ai-chat-input" 
          type="text" 
          placeholder="${savedKey ? 'Stel een vraag...' : 'Voer eerst hierboven je API-key in'}" 
          style="flex-grow: 1; padding: 8px; background: #2a2a2a; border: 1px solid #444; color: #fff; border-radius: 4px;"
          ${savedKey ? '' : 'disabled'}
          onkeypress="if(event.key === 'Enter') { document.getElementById('oq-ai-send-btn').click(); }"
        >
        <button 
          id="oq-ai-send-btn" 
          type="button"
          style="background: #ff9900; color: #000; border: none; font-weight: bold; padding: 0 15px; border-radius: 4px; cursor: pointer;"
          \${savedKey ? '' : 'disabled'}
        >
          Stuur
        </button>
      </div>
      
      <!-- Project Footer -->
      <div style="padding: 10px; background: #111; font-size: 11px; text-align: center; border-top: 1px solid #333; color: #888;">
        Best-effort project. Hulp nodig? <a href="https://discord.gg" target="_blank" style="color: #ff9900; text-decoration: none;">Discord</a> | Bug? <a href="https://github.com" target="_blank" style="color: #ff9900; text-decoration: none;">GitHub</a>
      </div>
    </aside>
  `;
}

