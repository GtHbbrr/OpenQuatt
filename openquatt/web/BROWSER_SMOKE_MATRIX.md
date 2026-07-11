# Web Browser Smoke Matrix

Run this matrix after changes to shared rendering, CSS, state, modals, or entity actions.
Use `dev.html` with the mock controls and test both light and dark themes.

| Surface | Desktop light | Desktop dark | Mobile light | Mobile dark | Required interaction |
|---|---|---|---|---|---|
| Overview | Required | Required | Required | Required | Switch overview controls and open silent settings |
| Energy | Required | Required | Required | Required | Change period and history view |
| Settings | Required | Required | Required | Required | Change group, select, number, switch, and time controls |
| Firmware modals | Required | Required | Required | Required | Open, close, switch advanced mode, and verify errors |
| History import/export | Required | Required | Required | Required | Open storage modal, preserve scroll, and validate file state |

For every cell verify:

- no horizontal page overflow;
- no overlapping controls or clipped text;
- visible focus and working close/backdrop behavior;
- preserved modal scroll and stick-to-bottom behavior where applicable;
- no unexpected console errors, extra polling, or repeated requests.

Automated prerequisites:

```sh
rtk npm run check:web
rtk npm run smoke:web
rtk npm run stats:web
```

`smoke:web` rebuilds the ignored preview assets required by `dev.html`; the
committed production bundles remain check-only in this flow.

The matrix is a release checklist, not a replacement for the automated source,
bundle, import-boundary, scroll, state, and action contracts in `smoke-web.mjs`.
