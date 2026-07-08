const handlers = {};

export function setEventHandlers(nextHandlers = {}) {
  Object.keys(handlers).forEach((key) => {
    delete handlers[key];
  });
  Object.assign(handlers, nextHandlers);
}

export function handleChange(event) {
  handlers.handleChange?.(event);
}

export function handleClick(event) {
  handlers.handleClick?.(event);
}

export function handleFocusChange(event) {
  handlers.handleFocusChange?.(event);
}

export function handleInput(event) {
  handlers.handleInput?.(event);
}

export function handleKeyDown(event) {
  handlers.handleKeyDown?.(event);
}

export function handlePointerDown(event) {
  handlers.handlePointerDown?.(event);
}

export function handlePointerMove(event) {
  handlers.handlePointerMove?.(event);
}

export function handlePointerUp(event) {
  handlers.handlePointerUp?.(event);
}

export function handleSettingsInteractionEnd(event) {
  handlers.handleSettingsInteractionEnd?.(event);
}

export function handleSettingsInteractionStart(event) {
  handlers.handleSettingsInteractionStart?.(event);
}

export function handleWheel(event) {
  handlers.handleWheel?.(event);
}
