// Fail when gzip growth exceeds the smaller of these two limits.
export const WEB_BUNDLE_GZIP_GROWTH_LIMIT = { bytes: 4_608, ratio: 0.03 };

export const WEB_BUNDLE_BUDGETS = [
  {
    file: "js/openquatt-app.js",
    // Raised for the HCQ R2 auxiliary-relay settings section (+~3 KB raw).
    raw: 877_000,
    // One-time migration ceiling for structured incident monitoring, replay,
    // the CSRF-protected deferred recovery actions, and their compact editor.
    // Once this bundle is the base, the normal gzip growth limit applies again.
    gzipBaselineCeiling: 238_000,
  },
  { file: "css/openquatt-app.css", raw: 275_000 },
];
