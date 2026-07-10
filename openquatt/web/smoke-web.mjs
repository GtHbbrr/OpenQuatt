import { access, readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import { gzipSync } from "node:zlib";
import { build, transform } from "esbuild";
import { resolveCssSources } from "./css-source-list.mjs";

const __filename = fileURLToPath(import.meta.url);
const webDir = path.dirname(__filename);
const repoDir = path.resolve(webDir, "..", "..");
const jsSourceDir = path.join(webDir, "js", "src");
const cssSources = resolveCssSources(webDir);

const allowedBareImports = new Set(["virtual:embedded-assets"]);
const bundleBudgetHeadroomBytes = 5 * 1024;
const bundleGzipBaselines = new Map([
  ["js/openquatt-app.js", 199828],
  ["css/openquatt-app.css", 40717],
]);
const boundaryAllowedEdges = new Set([
  "core/entity-actions.js -> features/debug-recording.js",
  "core/entity-actions.js -> features/firmware-actions.js",
  "core/entity-actions.js -> features/firmware-update.js",
  "core/entity-actions.js -> features/mqtt-actions.js",
  "core/entity-actions.js -> features/mqtt.js",
  "core/entity-actions.js -> features/quickstart-actions.js",
  "core/entity-actions.js -> features/quickstart.js",
  "core/entity-actions.js -> features/security-actions.js",
  "core/entity-actions.js -> features/storage-history.js",
  "core/entity-actions.js -> features/webserver-logs.js",
  "core/entity-actions.js -> settings/installation.js",
  "core/entity-actions.js -> views/energy.js",
  "core/entity-sync.js -> features/mqtt-actions.js",
  "core/entity-sync.js -> features/security-actions.js",
  "core/entity-write-actions.js -> features/firmware-update.js",
  "core/entity-write-actions.js -> features/security-actions.js",
  "core/entity-write-actions.js -> features/storage-history.js",
  "core/entity-write-actions.js -> features/webserver-logs.js",
  "core/render-signatures.js -> features/security-actions.js",
  "core/runtime.js -> features/debug-recording.js",
  "settings/storage.js -> views/energy.js",
  "views/overview.js -> settings/cooling.js",
  "views/shell.js -> settings/core.js",
]);

function toBundlePath(value) {
  return value.split(path.sep).join("/");
}

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch (_error) {
    return false;
  }
}

async function collectFiles(dir, predicate) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath, predicate));
      continue;
    }
    if (!predicate || predicate(fullPath)) {
      files.push(fullPath);
    }
  }
  return files.sort((a, b) => a.localeCompare(b));
}

function extractImportSpecifiers(source) {
  const specifiers = [];
  const staticImportPattern = /\b(?:import|export)\s+(?:[^"']*?\s+from\s*)?["']([^"']+)["']/g;
  const dynamicImportPattern = /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g;
  for (const pattern of [staticImportPattern, dynamicImportPattern]) {
    let match;
    while ((match = pattern.exec(source)) !== null) {
      specifiers.push(match[1]);
    }
  }
  return specifiers;
}

async function resolveRelativeImport(importer, specifier) {
  const basePath = path.resolve(path.dirname(importer), specifier);
  const candidates = path.extname(basePath) ? [basePath] : [`${basePath}.js`, path.join(basePath, "index.js")];
  for (const candidate of candidates) {
    if (await fileExists(candidate)) {
      return candidate;
    }
  }
  return null;
}

function toSourceRelative(filePath) {
  return toBundlePath(path.relative(jsSourceDir, filePath));
}

async function buildSourceImportGraph() {
  const sourceFiles = await collectFiles(jsSourceDir, (filePath) => filePath.endsWith(".js"));
  const graph = new Map(sourceFiles.map((filePath) => [toSourceRelative(filePath), []]));
  for (const filePath of sourceFiles) {
    const source = await readFile(filePath, "utf8");
    const relativePath = toSourceRelative(filePath);
    for (const specifier of extractImportSpecifiers(source)) {
      if (!specifier.startsWith(".")) {
        continue;
      }
      const resolved = await resolveRelativeImport(filePath, specifier);
      if (resolved) {
        graph.get(relativePath).push(toSourceRelative(resolved));
      }
    }
  }
  return graph;
}

async function checkSourceImports() {
  const sourceFiles = await collectFiles(jsSourceDir, (filePath) => filePath.endsWith(".js"));
  const errors = [];
  for (const filePath of sourceFiles) {
    const source = await readFile(filePath, "utf8");
    for (const specifier of extractImportSpecifiers(source)) {
      if (!specifier.startsWith(".")) {
        if (!allowedBareImports.has(specifier)) {
          errors.push(`${path.relative(repoDir, filePath)} imports unexpected bare module ${specifier}`);
        }
        continue;
      }
      const resolved = await resolveRelativeImport(filePath, specifier);
      if (!resolved) {
        errors.push(`${path.relative(repoDir, filePath)} has unresolved import ${specifier}`);
      }
    }
  }
  if (errors.length) {
    throw new Error(`Source import check failed:\n- ${errors.join("\n- ")}`);
  }
}

async function checkImportCycles() {
  const graph = await buildSourceImportGraph();
  const visiting = new Set();
  const visited = new Set();
  const stack = [];
  const cycleMessages = new Set();

  function visit(node) {
    if (visiting.has(node)) {
      const start = stack.indexOf(node);
      if (start >= 0) {
        cycleMessages.add([...stack.slice(start), node].join(" -> "));
      }
      return;
    }
    if (visited.has(node)) {
      return;
    }

    visiting.add(node);
    stack.push(node);
    for (const target of graph.get(node) || []) {
      visit(target);
    }
    stack.pop();
    visiting.delete(node);
    visited.add(node);
  }

  for (const node of graph.keys()) {
    visit(node);
  }

  if (cycleMessages.size) {
    throw new Error(`Import cycle check failed:\n- ${[...cycleMessages].join("\n- ")}`);
  }
}

async function checkImportBoundaries() {
  const graph = await buildSourceImportGraph();
  const errors = [];
  const seenEdges = new Set();
  for (const [source, targets] of graph.entries()) {
    for (const target of targets) {
      const edge = `${source} -> ${target}`;
      seenEdges.add(edge);
      if (source.startsWith("core/") && (target.startsWith("features/") || target.startsWith("settings/") || target.startsWith("views/")) && !boundaryAllowedEdges.has(edge)) {
        errors.push(`${edge}; core-to-UI imports need an explicit smoke allowlist entry`);
      }
      if (source.startsWith("views/") && target.startsWith("settings/") && !boundaryAllowedEdges.has(edge)) {
        errors.push(`${edge}; view-to-settings imports need an explicit smoke allowlist entry`);
      }
      if (source.startsWith("settings/") && target.startsWith("views/") && !boundaryAllowedEdges.has(edge)) {
        errors.push(`${edge}; settings-to-view imports need an explicit smoke allowlist entry`);
      }
    }
  }
  for (const edge of boundaryAllowedEdges) {
    if (!seenEdges.has(edge)) {
      errors.push(`${edge}; remove stale smoke allowlist entry`);
    }
  }
  if (errors.length) {
    throw new Error(`Import boundary check failed:\n- ${errors.join("\n- ")}`);
  }
}

async function buildEmbeddedAssetModule() {
  const assets = [
    ["HP_GENERATION_IMAGE_V1", path.join(webDir, "assets", "quatt-hybrid-v1.webp")],
    ["HP_GENERATION_IMAGE_V2", path.join(webDir, "assets", "quatt-hybrid-v2.webp")],
  ];
  const lines = [];
  for (const [name, assetPath] of assets) {
    const bytes = await readFile(assetPath);
    lines.push(`export const ${name} = "data:image/webp;base64,${bytes.toString("base64")}";`);
  }
  return lines.join("\n");
}

function embeddedAssetsPlugin() {
  return {
    name: "openquatt-smoke-embedded-assets",
    setup(pluginBuild) {
      pluginBuild.onResolve({ filter: /^virtual:embedded-assets$/ }, (args) => ({
        path: args.path,
        namespace: "openquatt-smoke-embedded-assets",
      }));
      pluginBuild.onLoad({ filter: /.*/, namespace: "openquatt-smoke-embedded-assets" }, async () => ({
        contents: await buildEmbeddedAssetModule(),
        loader: "js",
      }));
    },
  };
}

async function checkJavaScriptBundleFresh() {
  const outputPath = path.join(webDir, "js", "openquatt-app.js");
  const result = await build({
    entryPoints: [path.join(jsSourceDir, "app.js")],
    bundle: true,
    format: "iife",
    legalComments: "none",
    minify: true,
    target: "es2020",
    write: false,
    plugins: [embeddedAssetsPlugin()],
  });
  const header = [
    `/* Generated minified bundle: ${toBundlePath(path.relative(webDir, outputPath))}. */`,
    "/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */",
  ].join("\n");
  const expected = `${header}\n${(result.outputFiles[0]?.text || "").trim()}\n`;
  const actual = await readFile(outputPath, "utf8");
  if (actual !== expected) {
    throw new Error("JS bundle is stale. Run: rtk npm run build:web");
  }
}

async function checkCssBundleFresh() {
  const outputPath = path.join(webDir, "css", "openquatt-app.css");
  const sourceParts = await Promise.all(cssSources.map((source) => readFile(source, "utf8")));
  const header = [
    `/* Generated minified bundle: ${toBundlePath(path.relative(webDir, outputPath))}. */`,
    "/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */",
  ].join("\n");
  const minified = (await transform(sourceParts.map((source) => source.trimEnd()).join("\n"), { loader: "css", minify: true })).code.trim();
  const expected = `${header}\n${minified}\n`;
  const actual = await readFile(outputPath, "utf8");
  if (actual !== expected) {
    throw new Error("CSS bundle is stale. Run: rtk npm run build:web");
  }
}

async function checkBundleGzipBudgets() {
  const errors = [];
  for (const [relativePath, baselineBytes] of bundleGzipBaselines.entries()) {
    const maxBytes = baselineBytes + bundleBudgetHeadroomBytes;
    const bytes = await readFile(path.join(webDir, relativePath));
    const gzipBytes = gzipSync(bytes).length;
    if (gzipBytes > maxBytes) {
      errors.push(`${relativePath} gzip ${gzipBytes} B exceeds budget ${maxBytes} B`);
    }
  }
  if (errors.length) {
    throw new Error(`Bundle budget check failed:\n- ${errors.join("\n- ")}`);
  }
}

function assertContains(source, needle, label) {
  if (!source.includes(needle)) {
    throw new Error(`${label} is missing expected source contract: ${needle}`);
  }
}

async function checkWriteActionContracts() {
  const sources = new Map();
  async function source(relativePath) {
    if (!sources.has(relativePath)) {
      sources.set(relativePath, await readFile(path.join(webDir, relativePath), "utf8"));
    }
    return sources.get(relativePath);
  }

  const entityActions = await source("js/src/core/entity-actions.js");
  const entityWriteActions = await source("js/src/core/entity-write-actions.js");
  const securityActions = await source("js/src/features/security-actions.js");
  const mqttActions = await source("js/src/features/mqtt-actions.js");
  const firmwareActions = await source("js/src/features/firmware-actions.js");
  const debugRecording = await source("js/src/features/debug-recording.js");

  assertContains(securityActions, 'fetch("/api-security/enable"', "API security enable");
  assertContains(securityActions, 'fetch("/api-security/rotate"', "API security rotate");
  assertContains(securityActions, 'fetch("/api-security/disable"', "API security disable");
  assertContains(mqttActions, 'fetch("/mqtt/save"', "MQTT config save");
  assertContains(mqttActions, 'fetch("/mqtt/input/save"', "MQTT input save");
  assertContains(firmwareActions, 'buildEntityPath(installButtonEntity.domain, installButtonEntity.name, "press")', "Firmware install button endpoint");
  assertContains(debugRecording, 'getDebugRecordingEndpoint(`start?duration_s=${encodeURIComponent(minutes * 60)}`)', "Debug recording start");
  assertContains(debugRecording, 'getDebugRecordingEndpoint("stop")', "Debug recording stop");
  assertContains(debugRecording, 'getDebugRecordingEndpoint("download")', "Debug recording download");
  assertContains(entityActions, 'triggerNamedButton("restartAction"', "Restart confirm");
  assertContains(entityWriteActions, "export async function commitOpenQuattRegulationPause", "OpenQuatt pause write helper");
  assertContains(entityWriteActions, "export async function commitOpenQuattRegulationResumeNow", "OpenQuatt resume write helper");
  assertContains(entityActions, 'ODU_RUNTIME_FREQUENCY_BUTTON_KEYS.has(buttonKey)', "ODU runtime named buttons");
  assertContains(entityWriteActions, "ODU_RUNTIME_FREQUENCY_BUTTON_KEYS.has(key)", "ODU runtime named button write helper");
}

async function checkSharedBrowserUtilityContracts() {
  const utilityRelativePath = "core/browser-utils.js";
  const utilitySource = await readFile(path.join(jsSourceDir, utilityRelativePath), "utf8");
  for (const [needle, label] of [
    ["export async function copyTextToClipboard", "clipboard helper"],
    ["export function downloadBlobFile", "blob download helper"],
    ["export function downloadJsonFile", "JSON download helper"],
    ['document.execCommand("copy")', "clipboard fallback"],
    ["URL.createObjectURL", "object URL download"],
  ]) {
    assertContains(utilitySource, needle, label);
  }

  const sourceFiles = await collectFiles(jsSourceDir, (filePath) => filePath.endsWith(".js"));
  const sharedOnlyPatterns = [
    { pattern: "clipboard.writeText", label: "clipboard writes" },
    { pattern: 'document.createElement("textarea")', label: "clipboard textarea fallback" },
    { pattern: 'document.execCommand("copy")', label: "clipboard execCommand fallback" },
    { pattern: "URL.createObjectURL", label: "object URL downloads" },
    { pattern: "URL.revokeObjectURL", label: "object URL cleanup" },
  ];
  const errors = [];
  for (const filePath of sourceFiles) {
    const relativePath = toBundlePath(path.relative(jsSourceDir, filePath));
    if (relativePath === utilityRelativePath) {
      continue;
    }
    const source = await readFile(filePath, "utf8");
    for (const { pattern, label } of sharedOnlyPatterns) {
      if (source.includes(pattern)) {
        errors.push(`${relativePath} contains ${label}; use ${utilityRelativePath}`);
      }
    }
  }
  if (errors.length) {
    throw new Error(`Shared browser utility check failed:\n- ${errors.join("\n- ")}`);
  }
}

async function checkSharedCoreUtilityContracts() {
  const sourceFiles = await collectFiles(jsSourceDir, (filePath) => filePath.endsWith(".js"));
  const utilityContracts = [
    {
      relativePath: "core/html.js",
      expected: "export function escapeHtml",
      blockedExport: "export function escapeHtml",
      blockedImportPattern: /\bimport\s+\{[^}]*\bescapeHtml\b[^}]*\}\s+from\s+["'][^"']*shell\.js["']/,
      label: "HTML escaping",
    },
    {
      relativePath: "core/formatting.js",
      expected: "export function formatNumericState",
      blockedExport: "export function formatNumericState",
      blockedImportPattern: /\bimport\s+\{[^}]*\bformatNumericState\b[^}]*\}\s+from\s+["'][^"']*overview\.js["']/,
      label: "numeric state formatting",
    },
  ];
  const errors = [];
  for (const contract of utilityContracts) {
    const utilityPath = path.join(jsSourceDir, contract.relativePath);
    const utilitySource = await readFile(utilityPath, "utf8");
    assertContains(utilitySource, contract.expected, contract.label);
    for (const filePath of sourceFiles) {
      const relativePath = toBundlePath(path.relative(jsSourceDir, filePath));
      const source = await readFile(filePath, "utf8");
      if (relativePath !== contract.relativePath && source.includes(contract.blockedExport)) {
        errors.push(`${relativePath} exports ${contract.label}; use ${contract.relativePath}`);
      }
      if (contract.blockedImportPattern.test(source)) {
        errors.push(`${relativePath} imports ${contract.label} from a view module; use ${contract.relativePath}`);
      }
    }
  }
  if (errors.length) {
    throw new Error(`Shared core utility check failed:\n- ${errors.join("\n- ")}`);
  }
}

async function checkRuntimeBoundaryContracts() {
  const stateSource = await readFile(path.join(jsSourceDir, "core", "state.js"), "utf8");
  const shellSource = await readFile(path.join(jsSourceDir, "views", "shell.js"), "utf8");
  const runtimeSource = await readFile(path.join(jsSourceDir, "core", "runtime.js"), "utf8");
  assertContains(stateSource, "export const state", "shared state module");
  assertContains(shellSource, "setRenderCallback(render)", "render callback registration");
  assertContains(runtimeSource, 'from "./event-handlers.js"', "runtime event handler indirection");

  const sourceFiles = await collectFiles(jsSourceDir, (filePath) => filePath.endsWith(".js"));
  const errors = [];
  for (const filePath of sourceFiles) {
    const relativePath = toBundlePath(path.relative(jsSourceDir, filePath));
    const source = await readFile(filePath, "utf8");
    if (relativePath !== "views/shell.js" && /\bimport\s+\{[^}]*\brender\b[^}]*\}\s+from\s+["'][^"']*shell\.js["']/.test(source)) {
      errors.push(`${relativePath} imports render from views/shell.js; use core/render-scheduler.js`);
    }
    if (/\bimport\s+\{[^}]*\bstate\b[^}]*\}\s+from\s+["'][^"']*runtime\.js["']/.test(source)) {
      errors.push(`${relativePath} imports state from runtime.js; use core/state.js`);
    }
    if (relativePath === "core/runtime.js" && source.includes('from "./entity-actions.js"')) {
      errors.push("core/runtime.js imports entity-actions directly; use core/event-handlers.js");
    }
  }
  if (errors.length) {
    throw new Error(`Runtime boundary check failed:\n- ${errors.join("\n- ")}`);
  }
}

async function checkBasePathNormalization() {
  const source = await readFile(path.join(jsSourceDir, "core", "url-path.js"), "utf8");
  const sandbox = {};
  vm.runInNewContext(
    `${source.replace(/\bexport\s+/g, "")}
globalThis.normalizeBasePath = normalizeBasePath;`,
    sandbox,
    { filename: "core/url-path.js" },
  );
  const { normalizeBasePath } = sandbox;
  const cases = [
    ["/", ""],
    ["", ""],
    ["/dev.html", ""],
    ["/index.html", ""],
    ["/nested/dev.html", "/nested"],
    ["/proxy/", "/proxy"],
    ["/proxy", "/proxy"],
  ];
  const failures = cases
    .map(([input, expected]) => ({ input, expected, actual: normalizeBasePath(input) }))
    .filter((result) => result.actual !== result.expected);
  if (failures.length) {
    throw new Error(`Base path normalization failed: ${JSON.stringify(failures)}`);
  }
}

async function main() {
  await stat(path.join(webDir, "dev.html"));
  await checkSourceImports();
  await checkImportCycles();
  await checkImportBoundaries();
  await checkBasePathNormalization();
  await checkWriteActionContracts();
  await checkSharedBrowserUtilityContracts();
  await checkSharedCoreUtilityContracts();
  await checkRuntimeBoundaryContracts();
  await checkJavaScriptBundleFresh();
  await checkCssBundleFresh();
  await checkBundleGzipBudgets();
  console.log("Web smoke ok");
}

await main();
