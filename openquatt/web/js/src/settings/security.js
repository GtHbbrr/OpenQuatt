import { state } from "../core/state.js";
import { t } from "../i18n/index.js";

function getFriendlyDeviceName() {
  const ua = navigator.userAgent;
  if (/iPhone/i.test(ua)) return "Apple iPhone";
  if (/iPad/i.test(ua)) return "Apple iPad";
  if (/Android/i.test(ua)) return "Android Toestel";
  if (/Macintosh/i.test(ua)) return "iMac / MacBook";
  if (/Windows/i.test(ua)) return "Windows PC";
  return "Onbekend Apparaat";
}

export function renderSecuritySettings() {
  const status = state.authStatus || {};
  const tunnelId = localStorage.getItem("openquatt_tunnel_id") || "";
  const deviceName = getFriendlyDeviceName();

  // Dynamische rijen opbouwen voor de gegenereerde IDs
  let idRowsHtml = `<tr><td colspan="3" style="text-align:center; color:#999; padding:10px;">Geen actieve koppelingen gegenereerd</td></tr>`;
  if (tunnelId) {
    idRowsHtml = `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px 5px; font-family: monospace; font-size: 0.85rem; color: #0288d1;">\${tunnelId}</td>
        <td style="padding: 10px 5px; font-size: 0.85rem; font-weight: bold;">\${deviceName}</td>
        <td style="padding: 10px 5px; text-align: right;">
          <span class="badge" style="background: #2e7d32; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">Actief</span>
        </td>
      </tr>
    `;
  }

  return `
    <div class="settings-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px;">
      <h3 style="margin-top: 0; color: #333;">\${t("securityAccess.title")}</h3>
      <p class="meta" style="color: #666; font-size: 0.9rem; margin-bottom: 20px;">\${t("securityAccess.subtitle")}</p>
      
      <!-- BUG 1 FIX: Gecorrigeerde herkenbare Switch Toggle -->
      <div class="settings-row" style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #f0f0f0;">
        <div style="flex: 1; padding-right: 20px;">
          <strong style="display: block; font-size: 1rem; color: #222;">\${t("securityAccess.tunnelProxy")}</strong>
          <div class="meta" style="font-size: 0.85rem; color: #666; margin-top: 4px;">\${t("securityAccess.tunnelProxyDesc")}</div>
        </div>
        <label style="position: relative; display: inline-block; width: 50px; height: 28px; shrink: 0;">
          <input type="checkbox" data-oq-action="toggle-tunnel-proxy" \${tunnelId ? "checked" : ""} style="opacity: 0; width: 0; height: 0;">
          <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: \${tunnelId ? "#2e7d32" : "#ccc"}; transition: .4s; border-radius: 28px;">
            <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; transform: \${tunnelId ? "translateX(22px)" : "translateX(0)"};"></span>
          </span>
        </label>
      </div>

      <!-- BUG 2 FIX: Beheer Toestelkoppelingen met Dynamische Lijst -->
      <div style="margin-top: 25px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h4 style="margin: 0; font-size: 0.95rem; color: #444; uppercase; letter-spacing: 0.5px;">📋 Beheer Actieve Toestelkoppelingen</h4>
          \${tunnelId ? `
            <button class="btn btn-danger btn-sm" data-oq-action="clear-tunnel-ids" style="padding: 4px 10px; font-size: 0.8rem; background: #c62828; color: white; border: none; border-radius: 4px; cursor: pointer;">
              Wissen
            </button>
          ` : ""}
        </div>
        
        <table style="width: 100%; border-collapse: collapse; text-align: left; margin-top: 10px;">
          <thead>
            <tr style="background: #f5f5f5; border-bottom: 2px solid #ddd; font-size: 0.8rem; color: #555;">
              <th style="padding: 8px 5px;">GEGENEREERD ID</th>
              <th style="padding: 8px 5px;">APPARAAT / BROWSER</th>
              <th style="padding: 8px 5px; text-align: right;">STATUS</th>
            </tr>
          </thead>
          <tbody>
            \${idRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

export function renderApiSecuritySettings() {
  return `
    <div class="settings-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px;">
      <h3>\${t("apiSecurity.title")}</h3>
      <p class="meta">\${t("apiSecurity.subtitle")}</p>
      <div class="settings-row">
        <button class="btn btn-primary" data-oq-action="open-api-security-modal">
          \${t("apiSecurity.manageButton")}
        </button>
      </div>
    </div>
  `;
}

export function renderCredentialsRecoverySettings() {
  return `
    <div class="settings-card" style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px;">
      <h3>\${t("recoveryUi.title")}</h3>
      <p class="meta">\${t("recoveryUi.subtitle")}</p>
      <div class="settings-row" style="gap: 10px; display: flex;">
        <button class="btn btn-secondary" data-oq-action="reset-api-security">\${t("recoveryUi.resetApi")}</button>
        <button class="btn btn-secondary" data-oq-action="reset-wifi">\${t("recoveryUi.resetWifi")}</button>
      </div>
    </div>
  `;
}
