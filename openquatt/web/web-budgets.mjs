// Fail when gzip growth exceeds the smaller of these two limits.
export const WEB_BUNDLE_GZIP_GROWTH_LIMIT = { bytes: 4_608, ratio: 0.03 };

export const WEB_BUNDLE_BUDGETS = [
  {
    file: "js/openquatt-app.js",
    raw: 942_000,
    gzipBaselineCeiling: 238_000,
  },
  { file: "css/openquatt-app.css", raw: 200_000 },
];
