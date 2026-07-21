// Fail when gzip growth exceeds the smaller of these two limits.
export const WEB_BUNDLE_GZIP_GROWTH_LIMIT = { bytes: 4_096, ratio: 0.02 };

export const WEB_BUNDLE_BUDGETS = [
  { file: "js/openquatt-app.js", raw: 805_250 },
  { file: "css/openquatt-app.css", raw: 258_000 },
];
