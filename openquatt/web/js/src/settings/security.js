import { getApiSecurityStatusDetail, getApiSecurityStatusLabel, getWebAuthStatusDetail, getWebAuthStatusLabel } from "../features/security-access.js";
import { renderSettingsSection } from "./controls.js";
import { escapeHtml } from "../core/html.js";
import { t } from "../i18n/index.js";
import { isEntityActive } from "../core/app-shared.js";
import { state } from "../core/state.js";

export { getApiSecurityStatusDetail, getApiSecurityStatusLabel } from "../features/security-access.js";

export function renderSettingsAccessSecuritySection() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  const tunnelEnabled = isEntityActive("openquatt_tunnel_service");

  const items = [
    ["login", t("settingsSecurity.loginLabel"), getWebAuthStatusLabel(), getWebAuthStatusDetail(), "open-login-modal"],
    ["api", t("settingsSecurity.apiLabel"), getApiSecurityStatusLabel(), getApiSecurityStatusDetail(), "open-api-security-modal"]
  ];

  const desktopWarning = !isMobile ? `
    <div class="oq-settings-quickstart-status is-warning" style="border-left: 4px solid #ff9800; padding: 10px; margin-bottom: 15px; background: rgba(255,152,0,0.05);">
      <p style="margin: 0; font-weight: bold; color: #e65100;">⚠️ Alleen mobiele activatie toegestaan</p>
      <p style="margin: 4px 0 0 0; font-size: 0.85rem;">U kunt de uitgaande proxy-pijplijn alleen inschakelen vanaf uw mobiele telefoon (openquatt.local) om de anonieme koppeling AVG-proof te starten.</p>
    </div>
  ` : "";

  return renderSettingsSection(
    t("settingsSecurity.sectionGroup"),
    t("settingsSecurity.sectionTitle"),
    t("settingsSecurity.sectionCopy"),
    `
      <div class="oq-settings-access-security-shell">
        ${desktopWarning}
        
        ${items.map(([id, label, status, detail, action]) => `
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="\${id}">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">\${escapeHtml(label)}</p>
                <strong class="oq-settings-quickstart-status-value">\${escapeHtml(status)}</strong>
                <p class="oq-settings-quickstart-status-copy">\${escapeHtml(detail)}</p>
              </div>
              <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="\${action}">
                \${escapeHtml(id === "api" ? t("settingsSecurity.statusAction") : t("settingsSecurity.adjustAction"))}
              </button>
            </div>
          </div>
        `).join("")}

        <!-- USER STORY: DE ANONIEME TUNNEL PROXY RIJ -->
        <div class="oq-settings-quickstart-status" data-oq-access-security-item="tunnel">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Buitenshuis Toegang (Stateless Proxy)</p>
              <strong class="oq-settings-quickstart-status-value">${tunnelEnabled ? "Actief" : "Uitgeschakeld"}</strong>
              <p class="oq-settings-quickstart-status-copy">Exposeer de interface anoniem en database-vrij via quatt.openheatpumps.nl</p>
            </div>
            <label class="oq-switch" style="position: relative; display: inline-block; width: 40px; height: 24px;">
              <input 
                type="checkbox" 
                data-oq-field="openquatt_tunnel_service" 
                ${tunnelEnabled ? "checked" : ""} 
                ${!isMobile || state.loadingEntities ? "disabled" : ""}
                data-oq-action="toggle-tunnel-proxy"
                style="opacity: 0; width: 0; height: 0;"
              >
              <span class="oq-switch-slider" style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; transition: .4s; border-radius: 24px;"></span>
            </label>
          </div>
        </div>

        <div class="oq-settings-quickstart-status" style="margin-top: 15px; background: rgba(0,0,0,0.02); padding: 10px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <p class="oq-settings-quickstart-status-label" style="font-weight: bold; margin: 0;">Beheer Toestel-koppelingen</p>
            <p class="oq-settings-quickstart-status-copy" style="margin: 0; font-size: 0.8rem;">Wis alle gegenereerde anonieme ID's direct uit het RAM-geheugen van de ESP32.</p>
          </div>
          <button class="oq-helper-button oq-helper-button--danger" type="button" data-oq-action="clear-tunnel-ids" ${state.loadingEntities ? "disabled" : ""}>
            Gegenereerde ID's wissen
          </button>
        </div>
      </div>
    `
  );
}
