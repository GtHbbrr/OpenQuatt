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

  let idRowsHtml = `
    <div class="settings-row">
      <div class="meta" style="text-align: center; width: 100%;">Geen actieve koppelingen gegenereerd</div>
    </div>
  `;

  if (tunnelId) {
    idRowsHtml = `
      <div class="settings-row" style="border-top: 1px dashed #eee; padding-top: 10px; margin-top: 10px;">
        <div>
          <code style="font-family: monospace; font-size: 0.85rem; color: #0288d1;">\${tunnelId}</code>
          <div class="meta">\${deviceName}</div>
        </div>
        <span class="badge badge-success" style="background: #2e7d32; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;">Actief</span>
      </div>
    `;
  }

  return `
    <div class="settings-card">
      <h3>\${t("securityAccess.title")}</h3>
      <p class="meta">\${t("securityAccess.subtitle")}</p>
      
      <!-- BUG 1 FIX: Switch hersteld naar native OpenQuatt CSS switch structuur -->
      <div class="settings-row">
        <div>
          <strong>\${t("securityAccess.tunnelProxy")}</strong>
          <div class="meta">\${t("securityAccess.tunnelProxyDesc")}</div>
        </div>
        <label class="switch">
          <input type="checkbox" data-oq-action="toggle-tunnel-proxy" \${tunnelId ? "checked" : ""}>
          <span class="slider round"></span>
        </label>
      </div>

      <!-- BUG 2 FIX: Beheer Toestelkoppelingen met framework-veilige indeling -->
      <div style="margin-top: 25px;">
        <div class="settings-row" style="margin-bottom: 5px;">
          <strong>📋 Beheer Actieve Toestelkoppelingen</strong>
          \${tunnelId ? `
            <button class="btn btn-danger btn-sm" data-oq-action="clear-tunnel-ids" style="padding: 4px 10px; font-size: 0.8rem;">
              Wissen
            </button>
          ` : ""}
        </div>
        <div style="margin-top: 10px;">
          \${idRowsHtml}
        </div>
      </div>
    </div>
  `;
}

export function renderApiSecuritySettings() {
  return `
    <div class="settings-card">
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
    <div class="settings-card">
      <h3>\${t("recoveryUi.title")}</h3>
      <p class="meta">\${t("recoveryUi.subtitle")}</p>
      <div class="settings-row" style="gap: 10px; display: flex;">
        <button class="btn btn-secondary" data-oq-action="reset-api-security">\${t("recoveryUi.resetApi")}</button>
        <button class="btn btn-secondary" data-oq-action="reset-wifi">\${t("recoveryUi.resetWifi")}</button>
      </div>
    </div>
  `;
}
