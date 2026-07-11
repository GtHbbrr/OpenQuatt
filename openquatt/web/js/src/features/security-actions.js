import { copyTextToClipboard } from "../core/browser-utils.js";
import { invokeActionMap } from "../core/action-router.js";
import { ENTITY_DEFS, LOGIN_MODAL_AUTH_STATUS_REFRESH_INTERVAL_MS } from "../core/config.js";
import { beginDeviceReconnect } from "../core/device-reconnect.js";
import { buildEntityPath } from "../core/domain-helpers.js";
import { state } from "../core/state.js";
import { shouldRefreshSupplementaryStatus } from "../core/supplementary-refresh.js";
import { isSystemSettingsGroupActive } from "../core/surface-state.js";
import { render } from "../core/render-scheduler.js";

  export function getAuthStatusSignature(status = state.authStatus || {}) {
    return [
      status.enabled ? "on" : "off",
      status.setup_window_active ? "armed" : "locked",
      String(status.username || ""),
      String(status.source || ""),
      String(status.csrf_token || ""),
    ].join(":");
  }

  export function syncAuthDraftsFromStatus() {
    const status = state.authStatus || {};
    state.authDraftUsername = status.enabled ? String(status.username || "").trim() : "";
    state.authDraftCurrentPassword = "";
    state.authDraftNewPassword = "";
    state.authDraftConfirmPassword = "";
  }

  export function getApiSecurityStatusSignature(status = state.apiSecurityStatus || {}) {
    return [
      status.enabled ? "on" : "off",
      status.transport_active ? "active" : "idle",
      status.pending_restart ? "pending" : "settled",
      status.key_present ? "has-key" : "no-key",
      String(status.key || ""),
      String(status.source || ""),
      String(status.csrf_token || ""),
    ].join(":");
  }

  export function shouldRefreshAuthStatusForCurrentSurface() {
    return state.systemModal === "login" || state.systemModal === "api-security" || isSystemSettingsGroupActive();
  }

  export function shouldRefreshApiSecurityStatusForCurrentSurface() {
    return state.systemModal === "api-security" || isSystemSettingsGroupActive();
  }

  export async function refreshAuthStatus(options = {}) {
    if (!shouldRefreshSupplementaryStatus(state.lastAuthStatusRefreshAt, options)) {
      return false;
    }
    state.lastAuthStatusRefreshAt = Date.now();
    try {
      const response = await fetch("/auth/status", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = await response.json();
      const nextStatus = {
        enabled: Boolean(payload.enabled),
        setup_window_active: Boolean(payload.setup_window_active),
        username: String(payload.username || ""),
        source: String(payload.source || ""),
        csrf_token: String(payload.csrf_token || ""),
      };
      const previousSignature = getAuthStatusSignature();
      const nextSignature = getAuthStatusSignature(nextStatus);
      state.authStatus = nextStatus;
      if (previousSignature !== nextSignature) {
        syncAuthDraftsFromStatus();
      }
      if (state.systemModal === "login") {
        state.authError = "";
      }
      return previousSignature !== nextSignature;
    } catch (error) {
      if (state.systemModal === "login") {
        state.authError = `Loginstatus kon niet worden geladen. ${error.message}`;
      }
      return false;
    }
  }

  export function shouldPollLoginAuthStatus() {
    if (state.nativeOpen || state.systemModal !== "login") {
      return false;
    }
    const status = state.authStatus || {};
    return status.setup_window_active !== true;
  }

  export function stopLoginAuthStatusPolling() {
    if (!state.loginAuthStatusPollTimer) {
      return;
    }
    window.clearTimeout(state.loginAuthStatusPollTimer);
    state.loginAuthStatusPollTimer = null;
  }

  export function scheduleLoginAuthStatusPolling(delayMs = LOGIN_MODAL_AUTH_STATUS_REFRESH_INTERVAL_MS) {
    if (state.loginAuthStatusPollTimer || !shouldPollLoginAuthStatus()) {
      return;
    }

    state.loginAuthStatusPollTimer = window.setTimeout(async () => {
      state.loginAuthStatusPollTimer = null;
      if (!shouldPollLoginAuthStatus()) {
        return;
      }
      const previousAuthError = state.authError;
      const changed = await refreshAuthStatus({ force: true });
      if ((changed || state.authError !== previousAuthError) && state.systemModal === "login") {
        render();
      }
      if (shouldPollLoginAuthStatus()) {
        scheduleLoginAuthStatusPolling();
      }
    }, Math.max(0, Number(delayMs) || 0));
  }

  export async function refreshLoginModalAuthStatus(options = {}) {
    if (state.systemModal !== "login") {
      return false;
    }
    const previousAuthError = state.authError;
    const changed = await refreshAuthStatus({ force: true });
    if ((changed || state.authError !== previousAuthError) && state.systemModal === "login") {
      render();
    }
    if (options.poll !== false && shouldPollLoginAuthStatus()) {
      scheduleLoginAuthStatusPolling();
    }
    return changed;
  }

  export async function refreshApiSecurityStatus(options = {}) {
    if (!shouldRefreshSupplementaryStatus(state.lastApiSecurityStatusRefreshAt, options)) {
      return false;
    }
    state.lastApiSecurityStatusRefreshAt = Date.now();
    try {
      const response = await fetch("/api-security/status", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const payload = await response.json();
      const nextStatus = {
        enabled: Boolean(payload.enabled),
        transport_active: Boolean(payload.transport_active),
        pending_restart: Boolean(payload.pending_restart),
        key_present: Boolean(payload.key_present || payload.key),
        key: String(payload.key || ""),
        source: String(payload.source || ""),
        csrf_token: String(payload.csrf_token || ""),
      };
      const previousSignature = getApiSecurityStatusSignature();
      const nextSignature = getApiSecurityStatusSignature(nextStatus);
      state.apiSecurityStatus = nextStatus;
      state.apiSecurityError = "";
      if (previousSignature !== nextSignature) {
        state.apiSecurityNotice = "";
      }
      return previousSignature !== nextSignature;
    } catch (error) {
      state.apiSecurityError = `API-beveiliging kon niet worden geladen. ${error.message}`;
      return false;
    }
  }

  export async function restartForApiSecurityChange() {
    const entity = ENTITY_DEFS.restartAction;
    if (!entity) {
      return;
    }

    state.busyAction = "restartAction";
    state.controlError = "";
    state.controlNotice = "";
    render();

    try {
      const response = await fetch(buildEntityPath(entity.domain, entity.name, "press"), {
        method: "POST",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      stopLoginAuthStatusPolling();
      state.systemModal = "";
      state.controlNotice = "OpenQuatt wordt opnieuw opgestart om de API-beveiliging toe te passen.";
      beginDeviceReconnect("restart");
    } catch (error) {
      state.controlError = `Herstart mislukt. ${error.message}`;
    } finally {
      state.busyAction = "";
      render();
    }
  }

  export async function commitEnableApiSecurity() {
    const status = state.apiSecurityStatus || {};
    if (!status.csrf_token) {
      state.apiSecurityError = "API-beveiliging laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.apiSecurityBusy = true;
    state.apiSecurityNotice = "";
    state.apiSecurityError = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);

      const response = await fetch("/api-security/enable", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshApiSecurityStatus({ force: true });
      state.apiSecurityNotice = "API-beveiliging is opgeslagen. Kopieer de sleutel en kies daarna Opslaan en herstarten.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Inschakelen is mislukt. ${error.message}`;
      render();
    } finally {
      state.apiSecurityBusy = false;
      render();
    }
  }

  export async function commitRotateApiSecurity() {
    const status = state.apiSecurityStatus || {};
    if (!status.csrf_token) {
      state.apiSecurityError = "API-beveiliging laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.apiSecurityBusy = true;
    state.apiSecurityNotice = "";
    state.apiSecurityError = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);

      const response = await fetch("/api-security/rotate", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshApiSecurityStatus({ force: true });
      state.apiSecurityNotice = "API-sleutel is opgeslagen. Kopieer de nieuwe sleutel en kies daarna Opslaan en herstarten.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Roteren is mislukt. ${error.message}`;
      render();
    } finally {
      state.apiSecurityBusy = false;
      render();
    }
  }

  export async function commitDisableApiSecurity() {
    const status = state.apiSecurityStatus || {};
    if (!status.csrf_token) {
      state.apiSecurityError = "API-beveiliging laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }
    if (!status.enabled) {
      state.apiSecurityNotice = "API-encryptie staat al uit.";
      state.apiSecurityError = "";
      render();
      return;
    }

    state.apiSecurityBusy = true;
    state.apiSecurityNotice = "";
    state.apiSecurityError = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);

      const response = await fetch("/api-security/disable", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshApiSecurityStatus({ force: true });
      state.apiSecurityNotice = "API-beveiliging is opgeslagen. Kies daarna Opslaan en herstarten om dit toe te passen.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Uitzetten is mislukt. ${error.message}`;
      render();
    } finally {
      state.apiSecurityBusy = false;
      render();
    }
  }

  export async function copyApiSecurityKey() {
    const key = String(state.apiSecurityStatus?.key || "").trim();
    if (!key) {
      state.apiSecurityError = "Er is nog geen API-sleutel om te kopiëren.";
      render();
      return;
    }

    try {
      const copied = await copyTextToClipboard(key);
      if (!copied) {
        throw new Error("Kopiëren naar het klembord is niet gelukt.");
      }
      state.apiSecurityNotice = "API-sleutel gekopieerd.";
      state.apiSecurityError = "";
      render();
    } catch (error) {
      state.apiSecurityError = `Kopiëren is mislukt. ${error.message}`;
      render();
    }
  }

  export async function commitWebAuthChanges() {
    const status = state.authStatus || {};
    const authEnabled = status.enabled === true;
    const setupWindowActive = status.setup_window_active === true;
    const currentPassword = String(state.authDraftCurrentPassword || "");
    const newUsername = String(state.authDraftUsername || "").trim();
    const newPassword = String(state.authDraftNewPassword || "");
    const confirmPassword = String(state.authDraftConfirmPassword || "");

    if (!newUsername || !newPassword) {
      state.authError = "Vul een gebruikersnaam en wachtwoord in.";
      render();
      return;
    }
    if (newPassword !== confirmPassword) {
      state.authError = "De twee wachtwoorden zijn niet gelijk.";
      render();
      return;
    }
    if (authEnabled && !currentPassword) {
      state.authError = "Vul je huidige wachtwoord in.";
      render();
      return;
    }
    if (!authEnabled && !setupWindowActive) {
      state.authError = "Houd de herstelknop 5 seconden vast.";
      render();
      return;
    }
    if (!status.csrf_token) {
      state.authError = "Logingegevens laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.authBusy = true;
    state.authError = "";
    state.authNotice = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);
      params.set("current_password", currentPassword);
      params.set("new_username", newUsername);
      params.set("new_password", newPassword);

      const response = await fetch("/auth/change", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshAuthStatus({ force: true });
      state.authDraftCurrentPassword = "";
      state.authDraftNewPassword = "";
      state.authDraftConfirmPassword = "";
      state.authDraftUsername = String(state.authStatus?.username || newUsername).trim();
      state.authNotice = authEnabled
        ? "Login aangepast."
        : "Login staat nu aan.";
      state.authError = "";
      render();
    } catch (error) {
      state.authError = `Opslaan is mislukt. ${error.message}`;
      render();
    } finally {
      state.authBusy = false;
      render();
    }
  }

  export async function commitDisableWebAuth() {
    const status = state.authStatus || {};
    if (!status.enabled) {
      state.authNotice = "Login staat al uit.";
      state.authError = "";
      render();
      return;
    }

    const currentPassword = String(state.authDraftCurrentPassword || "");
    if (!currentPassword) {
      state.authError = "Vul je huidige wachtwoord in.";
      render();
      return;
    }
    if (!status.csrf_token) {
      state.authError = "Logingegevens laden nog. Probeer het zo opnieuw.";
      render();
      return;
    }

    state.authBusy = true;
    state.authError = "";
    state.authNotice = "";
    render();

    try {
      const params = new URLSearchParams();
      params.set("csrf_token", status.csrf_token);
      params.set("current_password", currentPassword);

      const response = await fetch("/auth/disable", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: params.toString(),
      });
      const payload = await response.json().catch(() => ({ ok: false, error: "invalid_response" }));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || `HTTP ${response.status}`);
      }
      await refreshAuthStatus({ force: true });
      state.authDraftCurrentPassword = "";
      state.authDraftNewPassword = "";
      state.authDraftConfirmPassword = "";
      state.authDraftUsername = "";
      state.authNotice = "Login staat nu uit.";
      state.authError = "";
      render();
    } catch (error) {
      state.authError = `Uitzetten is mislukt. ${error.message}`;
      render();
    } finally {
      state.authBusy = false;
      render();
    }
  }

  const securityActionHandlers = {
    "open-login-modal": () => {
      state.systemModal = "login";
      syncAuthDraftsFromStatus();
      state.authNotice = "";
      state.authError = "";
      render();
      return refreshLoginModalAuthStatus({ poll: true });
    },
    "open-api-security-modal": () => {
      state.systemModal = "api-security";
      state.apiSecurityNotice = "";
      state.apiSecurityError = "";
      render();
      return refreshApiSecurityStatus({ force: true });
    },
    "copy-api-security-key": () => copyApiSecurityKey(),
    "enable-api-security": () => commitEnableApiSecurity(),
    "rotate-api-security": () => commitRotateApiSecurity(),
    "disable-api-security": () => commitDisableApiSecurity(),
    "restart-api-security": () => restartForApiSecurityChange(),
    "save-web-auth": () => commitWebAuthChanges(),
    "disable-web-auth": () => commitDisableWebAuth(),
  };

  export function handleSecurityAction(action) {
    return invokeActionMap(securityActionHandlers, action);
  }
