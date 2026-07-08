import { getApiSecurityStatusDetail, getApiSecurityStatusLabel, getWebAuthStatusDetail, getWebAuthStatusLabel } from "../features/security-access.js";
import { renderSettingsSection } from "./controls.js";
import { escapeHtml } from "../core/html.js";

export { getApiSecurityStatusDetail, getApiSecurityStatusLabel } from "../features/security-access.js";

  export function renderSettingsLoginSection() {
    return renderSettingsSection(
      "Toegang",
      "Login",
      "Open hier de login-instellingen als je de toegangsgegevens wilt aanpassen.",
      `
        <div class="oq-settings-quickstart-status">
          <div class="oq-settings-quickstart-status-row">
            <div>
              <p class="oq-settings-quickstart-status-label">Huidige status</p>
              <strong class="oq-settings-quickstart-status-value">${escapeHtml(getWebAuthStatusLabel())}</strong>
            </div>
            <button
              class="oq-helper-button oq-helper-button--ghost"
              type="button"
              data-oq-action="open-login-modal"
            >
              Aanpassen
            </button>
          </div>
          <p class="oq-settings-quickstart-status-copy">${escapeHtml(getWebAuthStatusDetail())}</p>
        </div>
      `,
    );
  }

  export function renderSettingsAccessSecuritySection() {
    return renderSettingsSection(
      "Toegang",
      "Toegang & Beveiliging",
      "Pas hier de web-login of de ESPHome API-sleutel aan. Deze wijziging wordt actief na herstart.",
      `
        <div class="oq-settings-access-security-shell">
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="login">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Login</p>
                <strong class="oq-settings-quickstart-status-value">${escapeHtml(getWebAuthStatusLabel())}</strong>
                <p class="oq-settings-quickstart-status-copy">${escapeHtml(getWebAuthStatusDetail())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-login-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
          <div class="oq-settings-quickstart-status" data-oq-access-security-item="api">
            <div class="oq-settings-quickstart-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">ESPHome API encryption</p>
                <strong class="oq-settings-quickstart-status-value">${escapeHtml(getApiSecurityStatusLabel())}</strong>
                <p class="oq-settings-quickstart-status-copy">${escapeHtml(getApiSecurityStatusDetail())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--ghost"
                type="button"
                data-oq-action="open-api-security-modal"
              >
                Aanpassen
              </button>
            </div>
          </div>
        </div>
      `,
    );
  }
