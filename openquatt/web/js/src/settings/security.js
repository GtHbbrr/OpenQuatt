import { getApiSecurityStatusDetail, getApiSecurityStatusLabel, getWebAuthStatusDetail, getWebAuthStatusLabel } from "../features/security-access.js";
import { isEntityActive } from "../core/app-shared.js";
import { renderSettingsSection } from "./controls.js";
import { escapeHtml } from "../core/html.js";
import { t } from "../i18n/index.js";

export { getApiSecurityStatusDetail, getApiSecurityStatusLabel } from "../features/security-access.js";

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
  const tunnelId = localStorage.getItem("openquatt_tunnel_id") || "";
  const deviceName = getFriendlyDeviceName();

  let localIdRowsHtml = "<div class=\"settings-row\"><div class=\"meta\" style=\"text-align: center; width: 100%;\">Geen actieve koppelingen gegenereerd</div></div>";

  if (tunnelId) {
    localIdRowsHtml = "<div class=\"settings-row\" style=\"border-top: 1px dashed #eee; padding-top: 10px; margin-top: 10px;\">" +
      "<div>" +
        "<code style=\"font-family: monospace; font-size: 0.85rem; color: #0288d1;\">" + tunnelId + "</code>" +
        "<div class=\"meta\">" + deviceName + "</div>" +
      "</div>" +
      "<span class=\"badge badge-success\" style=\"background: #2e7d32; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;\">" + t("settingsSecurity.tunnelStatusActive") + "</span>" +
    "</div>";
  }

  return "<div class=\"settings-card\">" +
    "<h3>" + t("settingsSecurity.tunnelLabel") + "</h3>" +
    "<p class=\"meta\">" + t("settingsSecurity.tunnelCopy") + "</p>" +
    "<div class=\"settings-row\">" +
      "<div>" +
        "<strong>" + t("settingsSecurity.tunnelLabel") + "</strong>" +
        "<div class=\"meta\">" + t("settingsSecurity.tunnelCopy") + "</div>" +
      "</div>" +
      "<label class=\"switch\">" +
        "<input type=\"checkbox\" data-oq-action=\"toggle-tunnel-proxy\" " + (tunnelId ? "checked" : "") + ">" +
        "<span class=\"slider round\"></span>" +
      "</label>" +
    "</div>" +
    "<div style=\"margin-top: 25px;\">" +
      "<div class=\"settings-row\" style=\"margin-bottom: 5px\">" +
        "<strong>📋 " + t("settingsSecurity.purgeTitle") + "</strong>" +
        (tunnelId ? "<button class=\"btn btn-danger btn-sm\" data-oq-action=\"clear-tunnel-ids\" style=\"padding: 4px 10px; font-size: 0.8rem;\">" + t("settingsSecurity.purgeButton") + "</button>" : "") +
      "</div>" +
      "<p class=\"meta\" style=\"margin-bottom: 10px;\">" + t("settingsSecurity.purgeCopy") + "</p>" +
      "<div style=\"margin-top: 10px;\">" + localIdRowsHtml + "</div>" +
    "</div>" +
  "</div>";
}

export function renderSettingsAccessSecuritySection() {
  const tunnelId = localStorage.getItem("openquatt_tunnel_id") || "";
  const deviceName = getFriendlyDeviceName();
  
  const loginStatus = getWebAuthStatusLabel();
  const loginDetail = getWebAuthStatusDetail();
  const apiStatus = getApiSecurityStatusLabel();
  const apiDetail = getApiSecurityStatusDetail();

  // FIX: Bouw de tabelrijen hier op binnen de juiste scope van de tabel
  let idRowsHtml = "<tr><td colspan=\"3\" style=\"text-align: center; color: #999; padding: 10px 0;\">Geen actieve koppelingen gegenereerd</td></tr>";
  if (tunnelId) {
    idRowsHtml = "<tr style=\"border-bottom: 1px solid #eee;\">" +
      "<td style=\"padding: 6px 5px; font-family: monospace; font-size: 0.85rem; color: #0288d1;\">" + escapeHtml(tunnelId) + "</td>" +
      "<td style=\"padding: 6px 5px; font-size: 0.85rem; font-weight: bold;\">" + escapeHtml(deviceName) + "</td>" +
      "<td style=\"padding: 6px 5px; text-align: right;\">" +
        "<span class=\"badge\" style=\"background: #2e7d32; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem;\">" + t("settingsSecurity.tunnelStatusActive") + "</span>" +
      "</td>" +
    "</tr>";
  }

  return renderSettingsSection(
    t("settingsSecurity.sectionGroup"),
    t("settingsSecurity.sectionTitle"),
    t("settingsSecurity.sectionCopy"),
    "<div class=\"oq-settings-access-security-shell\">" +
      
      // 1. LOGIN BLOK
      "<div class=\"oq-settings-quickstart-status\" data-oq-access-security-item=\"login\">" +
        "<div class=\"oq-settings-quickstart-status-row\">" +
          "<div>" +
            "<p class=\"oq-settings-quickstart-status-label\">" + escapeHtml(t("settingsSecurity.loginLabel")) + "</p>" +
            "<strong class=\"oq-settings-quickstart-status-value\">" + escapeHtml(loginStatus) + "</strong>" +
            "<p class=\"oq-settings-quickstart-status-copy\">" + escapeHtml(loginDetail) + "</p>" +
          "</div>" +
          "<button class=\"oq-helper-button oq-helper-button--ghost\" type=\"button\" data-oq-action=\"open-login-modal\">" + escapeHtml(t("settingsSecurity.adjustAction")) + "</button>" +
        "</div>" +
      "</div>" +
      
      // 2. JOUW PROXY TUNNEL BLOK
      "<div class=\"oq-settings-quickstart-status\" data-oq-access-security-item=\"tunnel\">" +
        "<div class=\"oq-settings-quickstart-status-row\" style=\"margin-bottom: 15px;\">" +
          "<div>" +
            "<p class=\"oq-settings-quickstart-status-label\">" + escapeHtml(t("settingsSecurity.tunnelLabel")) + "</p>" +
            "<strong class=\"oq-settings-quickstart-status-value\">" + (tunnelId ? t("settingsSecurity.tunnelStatusActive") : t("settingsSecurity.tunnelStatusDisabled")) + "</strong>" +
            "<p class=\"oq-settings-quickstart-status-copy\">" + escapeHtml(t("settingsSecurity.tunnelCopy")) + "</p>" +
          "</div>" +
          "<label class=\"switch\" style=\"position: relative; display: inline-block; width: 44px; height: 24px; shrink: 0; margin-left: 15px;\">" +
            "<input type=\"checkbox\" data-oq-action=\"toggle-tunnel-proxy\" " + (tunnelId ? "checked" : "") + " style=\"opacity: 0; width: 0; height: 0;\">" +
            "<span class=\"slider round\" style=\"position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: " + (tunnelId ? "#2e7d32" : "#ccc") + "; transition: .4s; border-radius: 24px;\">" +
              "<span style=\"position: absolute; content: ''; height: 16px; width: 16px; left: 4px; bottom: 4px; background-color: white; transition: .4s; border-radius: 50%; transform: " + (tunnelId ? "translateX(20px)" : "translateX(0)") + ";\"></span>" +
            "</span>" +
          "</label>" +
        "</div>" +
        
        // De actieve toestelkoppelingen-tabel
        "<div style=\"margin-top: 18px; border-top: 1px solid #f0f0f0; padding-top: 15px;\">" +
          "<div class=\"oq-settings-quickstart-status-row\" style=\"margin-bottom: 10px; justify-content: space-between; align-items: center;\">" +
            "<strong style=\"font-size: 0.85rem; color: #444; text-transform: uppercase; letter-spacing: 0.5px;\">📋 " + t("settingsSecurity.purgeTitle") + "</strong>" +
            (tunnelId ? "<button class=\"oq-helper-button oq-helper-button--ghost\" type=\"button\" data-oq-action=\"clear-tunnel-ids\" style=\"color: #c62828; border-color: #c62828; padding: 2px 8px; font-size: 0.75rem;\">" + t("settingsSecurity.purgeButton") + "</button>" : "") +
          "</div>" +
          "<div style=\"font-size: 0.85rem; color: #666; margin-bottom: 12px;\">" + t("settingsSecurity.purgeCopy") + "</div>" +
          "<table style=\"width: 100%; border-collapse: collapse; text-align: left; margin-top: 10px;\">" +
            "<thead>" +
              "<tr style=\"background: #f5f5f5; border-bottom: 2px solid #ddd; font-size: 0.75rem; color: #666;\">" +
                "<th style=\"padding: 6px 5px;\">" + t("settingsSecurity.tableThId") + "</th>" +
                "<th style=\"padding: 6px 5px;\">" + t("settingsSecurity.tableThDevice") + "</th>" +
                "<th style=\"padding: 6px 5px; text-align: right;\">" + t("settingsSecurity.tableThStatus") + "</th>" +
              "</tr>" +
            "</thead>" +
            "<tbody>" +
              idRowsHtml +
            "</tbody>" +
          "</table>" +
        "</div>" +
      "</div>" +
      
      // 3. HOME ASSISTANT API BLOK
      "<div class=\"oq-settings-quickstart-status\" data-oq-access-security-item=\"api\">" +
        "<div class=\"oq-settings-quickstart-status-row\">" +
          "<div>" +
            "<p class=\"oq-settings-quickstart-status-label\">" + escapeHtml(t("settingsSecurity.apiLabel")) + "</p>" +
            "<strong class=\"oq-settings-quickstart-status-value\">" + escapeHtml(apiStatus) + "</strong>" +
            "<p class=\"oq-settings-quickstart-status-copy\">" + escapeHtml(apiDetail) + "</p>" +
          "</div>" +
          "<button class=\"oq-helper-button oq-helper-button--ghost\" type=\"button\" data-oq-action=\"open-api-security-modal\">" + escapeHtml(t("settingsSecurity.statusAction")) + "</button>" +
        "</div>" +
      "</div>" +
      
    "</div>"
  );
}

export function renderApiSecuritySettings() {
  return "";
}

export function renderCredentialsRecoverySettings() {
  return "";
}
