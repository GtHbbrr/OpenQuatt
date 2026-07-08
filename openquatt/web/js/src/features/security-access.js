import { state } from "../core/state.js";
import { escapeHtml } from "../core/html.js";

  export function getWebAuthStatusLabel() {
    const authStatus = state.authStatus;
    if (!authStatus) {
      return "Laden...";
    }
    if (authStatus.enabled) {
      return authStatus.setup_window_active ? "Instelvenster" : "Beveiligd";
    }
    return "Onbeveiligd";
  }

  export function getWebAuthModalTitle() {
    return "Login";
  }

  export function getWebAuthModalCopy() {
    const authStatus = state.authStatus;
    if (!authStatus) {
      return "We halen de huidige loginstatus op.";
    }
    if (authStatus.enabled) {
      return "De web-app vraagt nu een login voordat beheer beschikbaar is. Je kunt die hier aanpassen of uitzetten.";
    }
    return "De web-app staat open op je netwerk. Houd de herstelknop 5 seconden vast om een login toe te voegen.";
  }

  export function getWebAuthStatusDetail() {
    const authStatus = state.authStatus;
    if (!authStatus) {
      return "Logingegevens laden...";
    }
    if (authStatus.enabled) {
      return authStatus.setup_window_active
        ? "Login actief. Tijdelijk instelvenster is open."
        : `Login actief${authStatus.source ? ` via ${authStatus.source}` : ""}.`;
    }
    return authStatus.setup_window_active
      ? "Login uit. Tijdelijk instelvenster is open."
      : "Login uit. Webtoegang is open / onbeveiligd op het netwerk.";
  }

  export function getApiSecurityStatusLabel() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "Laden...";
    }
    const restartPending = Boolean(status.pending_restart
      || (typeof status.enabled === "boolean"
        && typeof status.transport_active === "boolean"
        && status.enabled !== status.transport_active));
    if (restartPending) {
      return "Herstart nodig";
    }
    if (status.transport_active === true) {
      return "Aan";
    }
    if (status.transport_active === false) {
      return "Uit";
    }
    return status.enabled ? "Aan" : "Uit";
  }

  export function getApiSecurityStatusDetail() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "API-encryptie wordt geladen.";
    }
    const restartPending = Boolean(status.pending_restart
      || (typeof status.enabled === "boolean"
        && typeof status.transport_active === "boolean"
        && status.enabled !== status.transport_active));
    if (restartPending) {
      if (status.enabled === true && status.transport_active === false) {
        return "API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu voor Home Assistant.";
      }
      if (status.enabled === false && status.transport_active === true) {
        return "API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API beveiligd.";
      }
      return status.key
        ? "Deze wijziging wordt actief na herstart. De sleutel blijft opgeslagen voor later gebruik."
        : "Deze wijziging wordt actief na herstart.";
    }
    if (status.transport_active === true) {
      return "API-encryptie staat aan. Gebruik dezelfde sleutel in Home Assistant.";
    }
    return "De native API staat nu open op je lokale netwerk.";
  }

  export function getApiSecurityModalTitle() {
    return "ESPHome API encryption";
  }

  export function getApiSecurityModalCopy() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "We halen de huidige API-beveiliging op.";
    }
    const restartPending = Boolean(status.pending_restart
      || (typeof status.enabled === "boolean"
        && typeof status.transport_active === "boolean"
        && status.enabled !== status.transport_active));
    if (restartPending) {
      if (status.enabled === true && status.transport_active === false) {
        return "API-encryptie wordt ingeschakeld na herstart. Kopieer de sleutel nu alvast voor Home Assistant.";
      }
      if (status.enabled === false && status.transport_active === true) {
        return "API-encryptie wordt uitgeschakeld na herstart. Tot die tijd blijft de native API nog beveiligd.";
      }
      return "Deze wijziging wordt actief na herstart. Je kunt de sleutel hier bekijken, kopiëren of vernieuwen.";
    }
    if (status.transport_active === true) {
      return "De native API is beveiligd. Je kunt de sleutel hier bekijken, kopiëren of vernieuwen.";
    }
    return "API-encryptie staat uit. Schakel in om een sleutel te bekijken, kopiëren of vernieuwen.";
  }

  export function getApiSecurityToggleLabel() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "Laden...";
    }
    const restartPending = Boolean(status.pending_restart
      || (typeof status.enabled === "boolean"
        && typeof status.transport_active === "boolean"
        && status.enabled !== status.transport_active));
    if (restartPending && status.enabled === true && status.transport_active === false) {
      return "Annuleer inschakelen";
    }
    if (restartPending && status.enabled === false && status.transport_active === true) {
      return "Annuleer uitschakelen";
    }
    return status.enabled ? "Uitschakelen" : "Inschakelen";
  }

  export function getApiSecurityRotateLabel() {
    const status = state.apiSecurityStatus;
    if (!status) {
      return "Laden...";
    }
    return status.key ? "Vernieuw sleutel" : "Genereer sleutel";
  }

  export function renderLoginStatusRow(label, value, copy = "", loading = false) {
    return `
      <div class="oq-helper-modal-row${loading ? " oq-helper-modal-row--loading" : ""}">
        <span class="oq-helper-modal-label">${escapeHtml(label)}</span>
        <strong class="oq-helper-modal-value">${loading ? `
          <span class="oq-helper-modal-loading">
            <span class="oq-helper-reconnect-spinner" aria-hidden="true"></span>
            <span>${escapeHtml(value)}</span>
          </span>
        ` : escapeHtml(value)}</strong>
      ${copy ? `<span class="oq-helper-modal-subvalue">${escapeHtml(copy)}</span>` : ""}
    </div>
    `;
  }

  export function renderApiSecurityModal() {
    const status = state.apiSecurityStatus || {};
    const enabled = status.enabled === true;
    const hasKey = Boolean(status.key);
    const restartPending = Boolean(status.pending_restart
      || (typeof status.enabled === "boolean"
        && typeof status.transport_active === "boolean"
        && status.enabled !== status.transport_active));
    const showKeySection = hasKey || status.transport_active === true || restartPending;
    const modalNotice = state.apiSecurityNotice;
    const errorMarkup = state.apiSecurityError
      ? `<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${escapeHtml(state.apiSecurityError)}</div>`
      : "";

    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
        <section class="oq-helper-modal oq-helper-modal--wide" role="dialog" aria-modal="true" aria-labelledby="oq-api-security-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Toegang</p>
              <h2 class="oq-helper-modal-title" id="oq-api-security-modal-title">${escapeHtml(getApiSecurityModalTitle())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit API-beveiliging popup">×</button>
          </div>
          <p class="oq-helper-modal-copy">${escapeHtml(getApiSecurityModalCopy())}</p>
          ${modalNotice ? `<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Status</strong><span>${escapeHtml(modalNotice)}</span></div>` : ""}
          ${errorMarkup}
          <div class="oq-settings-api-security-shell oq-settings-api-security-shell--modal">
            <div class="oq-settings-quickstart-status-row oq-settings-api-security-status-row">
              <div>
                <p class="oq-settings-quickstart-status-label">Huidige status</p>
                <strong class="oq-settings-quickstart-status-value">${escapeHtml(getApiSecurityStatusLabel())}</strong>
                <p class="oq-settings-quickstart-status-copy">${escapeHtml(getApiSecurityStatusDetail())}</p>
              </div>
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="${enabled ? "disable-api-security" : "enable-api-security"}"
                ${state.apiSecurityBusy || !status.csrf_token ? "disabled" : ""}
              >
                ${escapeHtml(getApiSecurityToggleLabel())}
              </button>
            </div>
            ${showKeySection ? `
            <div class="oq-settings-api-security-key">
              <div class="oq-settings-field-head">
                <h3>API-sleutel</h3>
              </div>
              <p class="oq-settings-action-note">${escapeHtml(restartPending
                ? (hasKey
                    ? "Deze sleutel is opgeslagen. Kopieer hem nu en kies daarna Opslaan en herstarten."
                    : "Inschakelen maakt direct een nieuwe sleutel aan. Deze wijziging wordt actief na herstart.")
                : (status.transport_active
                    ? "Gebruik deze sleutel in Home Assistant voor de ESPHome-integratie."
                    : status.key
                      ? "Bewaar deze sleutel voor later gebruik of kopieer hem nu."
                      : "Er is nog geen API-sleutel opgeslagen."))}</p>
              ${hasKey ? `<div class="oq-settings-api-security-key-row"><div class="oq-settings-api-security-key-value">${escapeHtml(status.key)}</div></div>` : ""}
              ${hasKey
                ? `
                  <div class="oq-settings-api-security-actions">
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="rotate-api-security"
                      ${state.apiSecurityBusy || !status.csrf_token ? "disabled" : ""}
                    >
                      ${escapeHtml(getApiSecurityRotateLabel())}
                    </button>
                    <button
                      class="oq-helper-button oq-helper-button--ghost"
                      type="button"
                      data-oq-action="copy-api-security-key"
                      ${state.apiSecurityBusy ? "disabled" : ""}
                    >
                      Kopieer sleutel
                    </button>
                  </div>
                `
                : ""}
            </div>
            ` : ""}
          </div>
          <div class="oq-helper-modal-actions">
            ${restartPending ? `
              <button
                class="oq-helper-button oq-helper-button--primary"
                type="button"
                data-oq-action="restart-api-security"
                ${state.apiSecurityBusy ? "disabled" : ""}
              >
                Opslaan en herstarten
              </button>
            ` : ""}
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${state.apiSecurityBusy ? "disabled" : ""}>Gereed</button>
          </div>
        </section>
      </div>
    `;
  }

  export function renderLoginModal() {
    const authStatus = state.authStatus || {};
    const authEnabled = authStatus.enabled === true;
    const setupWindowActive = authStatus.setup_window_active === true;
    const canEdit = authEnabled || setupWindowActive;
    const usernameValue = authEnabled ? String(authStatus.username || "").trim() : "";
    const noticeMarkup = state.authNotice
      ? `<div class="oq-helper-modal-success oq-helper-modal-success--compact" aria-live="polite"><strong>Opgeslagen</strong><span>${escapeHtml(state.authNotice)}</span></div>`
      : "";
    const errorMarkup = state.authError
      ? `<div class="oq-helper-modal-note oq-helper-modal-note--error" aria-live="assertive">${escapeHtml(state.authError)}</div>`
      : "";
    const authFormIntro = canEdit
      ? `<p class="oq-helper-modal-intro">${authEnabled ? "Pas hier je login aan." : "Vul hier je nieuwe login in."}</p>`
      : "";
    const authFormMarkup = canEdit
      ? `
        ${authFormIntro}
        <div class="oq-helper-modal-auth-stack">
          ${authEnabled
            ? `
              <label class="oq-helper-modal-auth-field">
                <span>Huidig wachtwoord</span>
                <input
                  class="oq-helper-input"
                  type="password"
                  autocomplete="current-password"
                  data-oq-auth-field="currentPassword"
                  value="${escapeHtml(state.authDraftCurrentPassword)}"
                  ${state.authBusy ? "disabled" : ""}
                >
              </label>
            `
            : ""}
          <label class="oq-helper-modal-auth-field">
            <span>Nieuwe gebruikersnaam</span>
            <input
              class="oq-helper-input"
              type="text"
              autocomplete="username"
              maxlength="32"
              data-oq-auth-field="username"
              value="${escapeHtml(state.authDraftUsername)}"
              ${state.authBusy ? "disabled" : ""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="newPassword"
              value="${escapeHtml(state.authDraftNewPassword)}"
              ${state.authBusy ? "disabled" : ""}
            >
          </label>
          <label class="oq-helper-modal-auth-field">
            <span>Herhaal nieuw wachtwoord</span>
            <input
              class="oq-helper-input"
              type="password"
              autocomplete="new-password"
              maxlength="64"
              data-oq-auth-field="confirmPassword"
              value="${escapeHtml(state.authDraftConfirmPassword)}"
              ${state.authBusy ? "disabled" : ""}
            >
          </label>
        </div>
      `
      : `
        <div class="oq-helper-modal-callout oq-helper-modal-callout--subtle">
          <strong>Login toevoegen</strong>
          <span>Houd de herstelknop 5 seconden vast om het instelvenster te openen.</span>
        </div>
      `;

    return `
      <div class="oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}" data-oq-modal="system">
        <section class="oq-helper-modal" role="dialog" aria-modal="true" aria-labelledby="oq-login-modal-title">
          <div class="oq-helper-modal-head">
            <div>
              <p class="oq-helper-modal-kicker">Systeem</p>
              <h2 class="oq-helper-modal-title" id="oq-login-modal-title">${escapeHtml(getWebAuthModalTitle())}</h2>
            </div>
            <button class="oq-helper-modal-close" type="button" data-oq-action="close-system-modal" aria-label="Sluit login-popup">×</button>
          </div>
          <p class="oq-helper-modal-copy">${escapeHtml(getWebAuthModalCopy())}</p>
          ${noticeMarkup}
          ${errorMarkup}
          <div class="oq-helper-modal-grid">
            ${renderLoginStatusRow("Beveiligingsstatus", getWebAuthStatusLabel(), getWebAuthStatusDetail())}
            ${renderLoginStatusRow("Gebruiker", authEnabled ? (usernameValue || "Geen naam") : "Geen login", authEnabled ? "Deze naam gebruik je om in te loggen." : "Er staat nog geen login op het device.")}
          </div>
          ${authFormMarkup}
          <div class="oq-helper-modal-actions">
            <button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="close-system-modal" ${state.authBusy ? "disabled" : ""}>Gereed</button>
            ${authEnabled
              ? `<button class="oq-helper-button oq-helper-button--ghost" type="button" data-oq-action="disable-web-auth" ${state.authBusy ? "disabled" : ""}>Uitzetten</button>`
              : ""}
            ${canEdit
              ? `<button class="oq-helper-button oq-helper-button--primary" type="button" data-oq-action="save-web-auth" ${state.authBusy ? "disabled" : ""}>${authEnabled ? "Opslaan" : "Login opslaan"}</button>`
              : ""}
          </div>
        </section>
      </div>
    `;
  }
