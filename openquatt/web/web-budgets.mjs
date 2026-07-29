// Fail when gzip growth exceeds the smaller of these two limits.
export const WEB_BUNDLE_GZIP_GROWTH_LIMIT = { bytes: 4_608, ratio: 0.03 };

export const WEB_BUNDLE_BUDGETS = [
  { file: "js/openquatt-app.js", raw: 840_000 },
  { file: "css/openquatt-app.css", raw: 275_000 },
];
