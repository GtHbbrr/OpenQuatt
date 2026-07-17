let restoreToken = 0;

function getModalIdentity(backdrop) {
  const dialog = backdrop?.querySelector('[role="dialog"][aria-modal="true"]');
  if (!dialog) {
    return null;
  }
  return {
    modalId: String(backdrop.dataset?.oqModal || ""),
    titleId: String(dialog.getAttribute("aria-labelledby") || ""),
  };
}

function findModalBackdrop(root, identity) {
  if (!root || !identity) {
    return null;
  }
  return Array.from(root.querySelectorAll("[data-oq-modal]")).find((backdrop) => {
    const candidate = getModalIdentity(backdrop);
    return candidate &&
      candidate.modalId === identity.modalId &&
      candidate.titleId === identity.titleId;
  }) || null;
}

function captureElementIdentity(element, scope) {
  if (!element || !scope?.contains(element) || typeof element.getAttribute !== "function") {
    return null;
  }
  const attributes = Array.from(element.attributes || [])
    .filter(({ name, value }) => (value || name.startsWith("data-oq-")) && (
      name === "id" ||
      name === "name" ||
      name === "aria-label" ||
      name.startsWith("data-oq-")
    ))
    .map(({ name, value }) => [name, value]);
  if (!attributes.length) {
    return null;
  }

  const tagName = String(element.tagName || "").toLowerCase();
  const candidates = Array.from(scope.querySelectorAll(tagName)).filter((candidate) =>
    attributes.every(([name, value]) => candidate.getAttribute(name) === value)
  );
  const index = candidates.indexOf(element);
  return index < 0 ? null : { tagName, attributes, index };
}

function findElementByIdentity(scope, identity) {
  if (!scope || !identity) {
    return null;
  }
  const candidates = Array.from(scope.querySelectorAll(identity.tagName)).filter((candidate) =>
    identity.attributes.every(([name, value]) => candidate.getAttribute(name) === value)
  );
  return candidates[identity.index] || null;
}

function captureScrollPositions(backdrop) {
  return [backdrop, ...backdrop.querySelectorAll("[data-oq-modal-scroll]")].map((element) => ({
    key: String(element.dataset?.oqModalScroll || "backdrop"),
    left: Number(element.scrollLeft || 0),
    top: Number(element.scrollTop || 0),
  }));
}

function restoreScrollPositions(backdrop, positions) {
  if (!backdrop) {
    return;
  }
  const elements = [backdrop, ...backdrop.querySelectorAll("[data-oq-modal-scroll]")];
  positions.forEach((position) => {
    const element = elements.find((candidate) =>
      String(candidate.dataset?.oqModalScroll || "backdrop") === position.key
    );
    if (element) {
      element.scrollLeft = position.left;
      element.scrollTop = position.top;
    }
  });
}

export function captureModalContinuity(root) {
  if (!root || typeof document === "undefined") {
    return null;
  }
  const activeBackdrop = typeof document.activeElement?.closest === "function"
    ? document.activeElement.closest("[data-oq-modal]")
    : null;
  const dialog = activeBackdrop?.querySelector('[role="dialog"][aria-modal="true"]') ||
    root.querySelector('[role="dialog"][aria-modal="true"]');
  const backdrop = dialog?.closest("[data-oq-modal]");
  const identity = getModalIdentity(backdrop);
  if (!backdrop || !identity) {
    return null;
  }

  return {
    identity,
    focus: captureElementIdentity(document.activeElement, backdrop),
    scrollPositions: captureScrollPositions(backdrop),
  };
}

export function restoreModalContinuity(root, continuity) {
  const token = restoreToken + 1;
  restoreToken = token;
  if (!root || !continuity) {
    return;
  }

  const applyScroll = () => {
    if (restoreToken !== token) {
      return;
    }
    const backdrop = findModalBackdrop(root, continuity.identity);
    restoreScrollPositions(backdrop, continuity.scrollPositions);
  };

  const backdrop = findModalBackdrop(root, continuity.identity);
  applyScroll();
  const focusTarget = findElementByIdentity(backdrop, continuity.focus);
  if (focusTarget && !focusTarget.disabled) {
    focusTarget.focus({ preventScroll: true });
    applyScroll();
  }
  window.requestAnimationFrame(applyScroll);
}
