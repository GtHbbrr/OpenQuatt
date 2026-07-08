import "./views/shell.js";
import { handleChange, handleClick, handleFocusChange, handleInput, handleKeyDown, handlePointerDown, handlePointerMove, handlePointerUp, handleSettingsInteractionEnd, handleSettingsInteractionStart, handleWheel } from "./core/entity-actions.js";
import { setEventHandlers } from "./core/event-handlers.js";
import { boot } from "./core/runtime.js";

setEventHandlers({
  handleChange,
  handleClick,
  handleFocusChange,
  handleInput,
  handleKeyDown,
  handlePointerDown,
  handlePointerMove,
  handlePointerUp,
  handleSettingsInteractionEnd,
  handleSettingsInteractionStart,
  handleWheel,
});

boot();
