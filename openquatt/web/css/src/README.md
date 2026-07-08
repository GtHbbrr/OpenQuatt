`openquatt/web/css/src/` contains the source fragments for the bundled stylesheet.
Bundle order is defined in `openquatt/web/css-source-list.mjs`.

Current split:
- `00-tokens.css`: shared CSS custom properties
- `01-shell.css`: page surface, app shell, header and footer
- `02-devtools.css`: helper hub, dev dock, native surface and status tiles
- `03-modals.css`: shared modal, firmware modal and button styling
- `04-debug-recording.css`: debug recording modal styling
- `05-layout-controls.css`: shared grids, panels, helper fields and curve controls
- `10-settings-layout.css`: settings sections, navigation, callouts and rule tables
- `11-settings-climate.css`: climate strategy, response, cooling and generation blocks
- `12-settings-service.css`: service, ODU runtime, monitoring, commissioning and boiler blocks
- `13-settings-connectivity.css`: MQTT sensor modal, access security and API security
- `14-settings-system-tools.css`: installation/system rows, backups, webserver logs and action notes
- `15-settings-cards-fields.css`: choice cards, backup compare modal, subpanels, mini fields and trend stats
- `16-settings-storage.css`: storage history summary and storage modal
- `17-settings-integrations-controls.css`: integrations, source selection, switches, time controls and curve fallbacks
- `20-overview.css`: overview summary, control and temperature styling
- `30-energy.css`: energy board styling
- `40-heatpump.css`: heat pump cards, schematic and tooltips
- `90-responsive.css`: responsive overrides and compact breakpoints

The deployed/runtime file remains:
- `openquatt/web/css/openquatt-app.css`

Rebuild the bundle with:
- `rtk npm run build:web`
