`openquatt/web/js/src/` contains the ES module source for the bundled web app.

Current split:
- `app.js`: bundle entrypoint; imports and starts `boot()`
- `core/`: shared config, state/runtime, entity store, sync, actions, browser helpers and small formatting/domain helpers
- `features/`: feature flows such as firmware update, header status, security, MQTT, quickstart, storage/history, webserver logs and debug recording
- `settings/`: settings shell helpers and domain renderers for storage, heating, water, installation, integrations, security, service, silent mode and cooling
- `views/`: overview, energy, heat pump and root shell rendering

The deployed/runtime file remains:
- `openquatt/web/js/openquatt-app.js`

Rebuild the bundle with:
- `rtk npm run build:web`

Run the local web smoke checks with:
- `rtk npm run smoke:web`
