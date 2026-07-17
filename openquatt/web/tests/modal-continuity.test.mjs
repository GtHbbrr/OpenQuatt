import assert from "node:assert/strict";
import test from "node:test";

import { captureModalContinuity, restoreModalContinuity } from "../js/src/core/modal-continuity.js";

class FakeElement {
  constructor(tagName, attributes = {}) {
    this.tagName = tagName.toUpperCase();
    this.attributeMap = new Map(Object.entries(attributes));
    this.attributes = [...this.attributeMap].map(([name, value]) => ({ name, value }));
    this.children = [];
    this.parentElement = null;
    this.scrollLeft = 0;
    this.scrollTop = 0;
    this.scrollHeight = 0;
    this.clientHeight = 0;
    this.disabled = false;
    this.rect = { top: 0 };
    this.dataset = {};
    for (const [name, value] of this.attributeMap) {
      if (name.startsWith("data-")) {
        const key = name.slice(5).replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase());
        this.dataset[key] = value;
      }
    }
  }

  append(...children) {
    children.forEach((child) => {
      child.parentElement = this;
      this.children.push(child);
    });
    return this;
  }

  contains(element) {
    for (let current = element; current; current = current.parentElement) {
      if (current === this) {
        return true;
      }
    }
    return false;
  }

  getAttribute(name) {
    return this.attributeMap.get(name) ?? null;
  }

  getBoundingClientRect() {
    return this.rect;
  }

  matches(selector) {
    if (selector === "[data-oq-modal]") {
      return this.attributeMap.has("data-oq-modal");
    }
    if (selector === "[data-oq-modal-scroll]") {
      return this.attributeMap.has("data-oq-modal-scroll");
    }
    if (selector === '[role="dialog"][aria-modal="true"]') {
      return this.getAttribute("role") === "dialog" && this.getAttribute("aria-modal") === "true";
    }
    return this.tagName.toLowerCase() === selector.toLowerCase();
  }

  closest(selector) {
    for (let current = this; current; current = current.parentElement) {
      if (current.matches(selector)) {
        return current;
      }
    }
    return null;
  }

  querySelectorAll(selector) {
    const matches = [];
    const visit = (element) => {
      element.children.forEach((child) => {
        if (child.matches(selector)) {
          matches.push(child);
        }
        visit(child);
      });
    };
    visit(this);
    return matches;
  }

  querySelector(selector) {
    return this.querySelectorAll(selector)[0] || null;
  }

  focus(options) {
    document.activeElement = this;
    this.focusOptions = options;
  }
}

function createModal(titleId = "oq-silent-settings-modal-title") {
  const root = new FakeElement("div");
  const backdrop = new FakeElement("div", {
    "data-oq-modal": "system",
    "data-oq-modal-scroll": "backdrop",
  });
  const dialog = new FakeElement("section", {
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": titleId,
    "data-oq-modal-scroll": "dialog",
  });
  const closeButton = new FakeElement("button", {
    "data-oq-action": "close-system-modal",
    "aria-label": "Sluit stille-uren-popup",
  });
  const infoButton = new FakeElement("button", {
    "data-oq-action": "toggle-settings-info",
    "data-info-id": "silent-level-day",
    "aria-label": "Uitleg bij Maximaal niveau overdag",
  });
  dialog.append(closeButton, infoButton);
  backdrop.append(dialog);
  root.append(backdrop);
  return { root, backdrop, dialog, closeButton, infoButton };
}

test("modal continuity restores scroll and focus after a root replacement", (t) => {
  const originalDocument = globalThis.document;
  const originalWindow = globalThis.window;
  const frames = [];
  globalThis.document = { activeElement: null };
  globalThis.window = { requestAnimationFrame: (callback) => frames.push(callback) };
  t.after(() => {
    globalThis.document = originalDocument;
    globalThis.window = originalWindow;
  });

  const previous = createModal();
  previous.backdrop.scrollTop = 102;
  previous.dialog.scrollTop = 44;
  document.activeElement = previous.infoButton;
  const continuity = captureModalContinuity(previous.root);

  const replacement = createModal();
  document.activeElement = replacement.closeButton;
  restoreModalContinuity(replacement.root, continuity);

  assert.equal(replacement.backdrop.scrollTop, 102);
  assert.equal(replacement.dialog.scrollTop, 44);
  assert.equal(document.activeElement, replacement.infoButton);
  assert.deepEqual(replacement.infoButton.focusOptions, { preventScroll: true });

  replacement.backdrop.scrollTop = 0;
  frames[0]();
  assert.equal(replacement.backdrop.scrollTop, 102);
});

test("modal continuity does not leak to a different system modal", (t) => {
  const originalDocument = globalThis.document;
  const originalWindow = globalThis.window;
  globalThis.document = { activeElement: null };
  globalThis.window = { requestAnimationFrame() {} };
  t.after(() => {
    globalThis.document = originalDocument;
    globalThis.window = originalWindow;
  });

  const previous = createModal();
  previous.backdrop.scrollTop = 102;
  document.activeElement = previous.infoButton;
  const continuity = captureModalContinuity(previous.root);

  const replacement = createModal("oq-restart-modal-title");
  document.activeElement = replacement.closeButton;
  restoreModalContinuity(replacement.root, continuity);

  assert.equal(replacement.backdrop.scrollTop, 0);
  assert.equal(document.activeElement, replacement.closeButton);
});

test("modal continuity keeps the focused action visually anchored when content grows above it", (t) => {
  const originalDocument = globalThis.document;
  const originalWindow = globalThis.window;
  globalThis.document = { activeElement: null };
  globalThis.window = { requestAnimationFrame() {} };
  t.after(() => {
    globalThis.document = originalDocument;
    globalThis.window = originalWindow;
  });

  const previous = createModal("oq-webserver-log-modal-title");
  previous.dialog.scrollTop = 60;
  previous.dialog.clientHeight = 670;
  previous.dialog.scrollHeight = 730;
  previous.infoButton.rect = { top: 648 };
  document.activeElement = previous.infoButton;
  const continuity = captureModalContinuity(previous.root);

  const replacement = createModal("oq-webserver-log-modal-title");
  replacement.dialog.clientHeight = 670;
  replacement.dialog.scrollHeight = 804;
  replacement.infoButton.rect = { top: 722 };
  document.activeElement = replacement.closeButton;
  restoreModalContinuity(replacement.root, continuity);

  assert.equal(replacement.dialog.scrollTop, 134);
  assert.equal(document.activeElement, replacement.infoButton);
});
