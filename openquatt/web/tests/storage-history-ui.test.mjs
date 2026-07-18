import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;

const { state } = await import("../js/src/core/state.js");
const { handleViewAction } = await import("../js/src/features/view-actions.js");
const { renderSettingsHistoryStorageModal } = await import("../js/src/settings/storage.js");

test("advanced storage details remain open across export renders", () => {
  const previous = {
    energyHistoryExportBusy: state.energyHistoryExportBusy,
    entities: state.entities,
    settingsStorageAdvancedOpen: state.settingsStorageAdvancedOpen,
    settingsStoragePage: state.settingsStoragePage,
  };

  try {
    state.entities = {
      lifetimeEnergyHistoryEnabled: { value: true },
    };
    state.settingsStoragePage = "energy";
    state.settingsStorageAdvancedOpen = false;

    let prevented = false;
    const button = {
      closest(selector) {
        assert.equal(selector, ".oq-settings-storage-advanced");
        return { hasAttribute: () => false };
      },
    };
    const event = {
      preventDefault() {
        prevented = true;
      },
    };

    assert.equal(handleViewAction("toggle-storage-advanced", button, event), true);
    assert.equal(prevented, true);
    assert.equal(state.settingsStorageAdvancedOpen, true);

    state.energyHistoryExportBusy = true;
    const html = renderSettingsHistoryStorageModal();
    assert.match(html, /<details class="oq-settings-storage-advanced" open><summary data-oq-action="toggle-storage-advanced">/);
  } finally {
    Object.assign(state, previous);
  }
});
