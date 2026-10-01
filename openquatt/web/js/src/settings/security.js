import { state } from "../core/state.js";
import { t } from "../i18n/index.js";

export function renderSecuritySettings() {
  const status = state.authStatus || {};
  const tunnelId = localStorage.getItem("openquatt_tunnel_id") || "—";

  return `
    <div class="settings-card">
      <h3>${t("securityAccess.title")}</h3>
      <p class="meta">${t("securityAccess.subtitle")}</p>
      
      <div class="settings-row">
        <div>
          <strong>${t("securityAccess.tunnelProxy")}</strong>
          <div class="meta">${t("securityAccess.tunnelProxyDesc")}</div>
        </div>
        <label class="switch">
          <input type="checkbox" data-oq-action="toggle-tunnel-proxy" ${state.authStatus?.enabled ? "checked" : ""}>
          <span class="slider round"></span>
        </label>
      </div>

      <div class="settings-row" style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 10px;">
        <div>
          <strong>Actief RAM ID:</strong>
          <code id="oq-local-id-display" style="font-family: monospace; font-size: 0.9rem;">${tunnelId}</code>
        </div>
        <button class="btn btn-danger btn-sm" data-oq-action="clear-tunnel-ids" style="padding: 4px 8px; font-size: 0.8rem;">
          Wissen
        </button>
      </div>

      <!-- USER STORY: REALTIME INGRESS MONITOR VOOR DESKTOP/LAPTOP THUIS -->
      <div id="oq-tunnel-progress-card" style="margin-top: 20px; padding: 15px; background: #fafafa; border-left: 4px solid #0288d1; border-radius: 4px; display: none;">
        <h4 style="margin: 0 0 10px 0; font-size: 0.95rem; color: #0288d1;">🌐 Cloudflare Tunnel Ingress Monitor</h4>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; line-height: 1.6;">
          <li id="prog-step-1" style="margin-bottom: 5px; color: #333;">⚪ 1. Dynamisch RAM-geheim genereren...</li>
          <li id="prog-step-2" style="margin-bottom: 5px; color: #333;">⚪ 2. Uitgaande TLS Handshake met Cloudflare Edge...</li>
          <li id="prog-step-3" style="margin-bottom: 0; color: #333;">⚪ 3. Tunnel Gekoppeld & Standby voor Verkeer...</li>
        </ul>
        <div id="oq-tunnel-meta" style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed #ccc; font-size: 0.8rem; color: #666; font-family: monospace; display: none;"></div>
      </div>
    </div>
  `;
}
