import { isTrendHistoryEnabled } from "./app-shared.js";
import { APP_VIEW_IDS, SETTINGS_GROUP_IDS, SETTINGS_GROUPS } from "./config.js";
import { state } from "./state.js";

export function getDefaultAppView() {
  return "overview";
}

export function normalizeAppView(view) {
  if (view === "trends") {
    view = "diagnosis";
  }
  if (!APP_VIEW_IDS.has(view)) {
    return "";
  }
  if (view === "diagnosis" && !isTrendHistoryEnabled()) {
    return "";
  }
  return view;
}

export function normalizeUrlToken(value) {
  return String(value || "").trim().toLowerCase();
}

export function getUrlAppView() {
  try {
    const url = new URL(window.location.href);
    const rawQueryView = normalizeUrlToken(url.searchParams.get("view") || "");
    const queryView = normalizeAppView(rawQueryView);
    if (queryView) {
      return queryView;
    }

    const rawHashView = normalizeUrlToken(url.hash.replace(/^#/, ""));
    const hashView = normalizeAppView(rawHashView);
    return hashView || "";
  } catch (_error) {
    return "";
  }
}

export function getUrlSettingsGroup() {
  try {
    const url = new URL(window.location.href);
    const section = normalizeUrlToken(url.searchParams.get("section") || "");
    if (SETTINGS_GROUP_IDS.has(section)) {
      return section;
    }

    const legacyGroup = normalizeUrlToken(url.searchParams.get("group") || "");
    if (SETTINGS_GROUP_IDS.has(legacyGroup)) {
      return legacyGroup;
    }

    return "";
  } catch (_error) {
    return "";
  }
}

export function syncUrlAppView(mode = "replace") {
  try {
    const url = new URL(window.location.href);
    const normalized = normalizeAppView(state.appView) || getDefaultAppView();
    url.searchParams.set("view", normalized);
    if (normalized === "settings") {
      const group = SETTINGS_GROUP_IDS.has(state.settingsGroup) ? state.settingsGroup : SETTINGS_GROUPS[0].id;
      url.searchParams.set("section", group);
      url.searchParams.delete("group");
    } else {
      url.searchParams.delete("section");
      url.searchParams.delete("group");
    }
    if (url.hash && normalizeAppView(url.hash.replace(/^#/, ""))) {
      url.hash = "";
    }

    const method = mode === "push" ? "pushState" : "replaceState";
    window.history[method]({ oqView: normalized, oqSettingsSection: normalized === "settings" ? state.settingsGroup : "" }, "", url.toString());
  } catch (_error) {
    // Ignore history failures in embedded browsers.
  }
}

export function setAppView(view, options = {}) {
  const normalized = normalizeAppView(view) || getDefaultAppView();
  const mode = options.syncMode || "replace";
  const changed = state.appView !== normalized;
  state.appView = normalized;

  if (changed || options.forceSync) {
    syncUrlAppView(mode);
  }
}
