import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { resolveCssSources } from "./css-source-list.mjs";

const __filename = fileURLToPath(import.meta.url);
const webDir = path.dirname(__filename);
const jsonOutput = process.argv.includes("--json");
const unsupportedArguments = process.argv.slice(2).filter((argument) => argument !== "--json");

if (unsupportedArguments.length) {
  throw new Error(`Unsupported arguments: ${unsupportedArguments.join(", ")}`);
}

async function collectFiles(directory, predicate) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(filePath, predicate));
    } else if (!predicate || predicate(filePath)) {
      files.push(filePath);
    }
  }
  return files.sort((left, right) => left.localeCompare(right));
}

function countLines(source) {
  if (!source.length) {
    return 0;
  }
  const newlineCount = source.match(/\n/g)?.length || 0;
  return newlineCount + (source.endsWith("\n") ? 0 : 1);
}

async function measureFiles(files, { countSourceLines = true } = {}) {
  const buffers = await Promise.all(files.map((file) => readFile(file)));
  const combined = Buffer.concat(buffers.flatMap((buffer, index) => index ? [Buffer.from("\n"), buffer] : [buffer]));
  return {
    files: files.length,
    lines: countSourceLines ? buffers.reduce((total, buffer) => total + countLines(buffer.toString("utf8")), 0) : null,
    bytes: buffers.reduce((total, buffer) => total + buffer.length, 0),
    gzipBytes: gzipSync(combined).length,
  };
}

async function readTextFiles(files) {
  return await Promise.all(files.map(async (file) => ({
    file,
    source: await readFile(file, "utf8"),
  })));
}

function countDarkThemeBlocks(cssSources) {
  return cssSources.reduce((total, source) => {
    const blocks = source.match(/[^{}]+\{/g) || [];
    return total + blocks.filter((block) => block.includes(".oq-helper-shell--dark") || block.includes(".oq-helper-modal-backdrop--dark")).length;
  }, 0);
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) {
    return "-";
  }
  return bytes >= 1024 ? `${(bytes / 1024).toFixed(1)} KiB` : `${bytes} B`;
}

function formatRow(label, metrics) {
  return [
    label.padEnd(20),
    String(metrics.files).padStart(5),
    String(metrics.lines ?? "-").padStart(8),
    formatBytes(metrics.bytes).padStart(12),
    formatBytes(metrics.gzipBytes).padStart(12),
  ].join("  ");
}

const jsSourceFiles = await collectFiles(path.join(webDir, "js", "src"), (file) => file.endsWith(".js"));
const cssSourceFiles = resolveCssSources(webDir);
const devFiles = [
  path.join(webDir, "dev.html"),
  path.join(webDir, "css", "src", "02-devtools.css"),
  path.join(webDir, "js", "device-wrapper.js"),
  path.join(webDir, "js", "mock-scenarios.js"),
  path.join(webDir, "js", "mock-fixtures.js"),
  path.join(webDir, "js", "mock-device.js"),
];
const generatedJsFiles = [path.join(webDir, "js", "openquatt-app.js")];
const generatedCssFiles = [path.join(webDir, "css", "openquatt-app.css")];
const assetFiles = await collectFiles(path.join(webDir, "assets"));

const [jsSources, cssSources] = await Promise.all([
  readTextFiles(jsSourceFiles),
  readTextFiles(cssSourceFiles),
]);
const entityActions = jsSources.find(({ file }) => file.endsWith(`${path.sep}core${path.sep}entity-actions.js`))?.source || "";

const groups = {
  sourceJs: await measureFiles(jsSourceFiles),
  sourceCss: await measureFiles(cssSourceFiles),
  devMock: await measureFiles(devFiles),
  generatedJs: await measureFiles(generatedJsFiles),
  generatedCss: await measureFiles(generatedCssFiles),
  assets: await measureFiles(assetFiles, { countSourceLines: false }),
};

const signals = {
  darkThemeBlocks: countDarkThemeBlocks(cssSources.map(({ source }) => source)),
  modalBackdropReferences: jsSources.reduce((total, { source }) => total + (source.match(/oq-helper-modal-backdrop/g)?.length || 0), 0),
  centralActionComparisons: entityActions.match(/\baction\s*===/g)?.length || 0,
  totalActionComparisons: jsSources.reduce((total, { source }) => total + (source.match(/\baction\s*===/g)?.length || 0), 0),
};

if (jsonOutput) {
  console.log(JSON.stringify({ groups, signals }, null, 2));
} else {
  console.log("Web source statistics");
  console.log("Category              Files     Lines           Raw          Gzip");
  console.log(formatRow("Source JS", groups.sourceJs));
  console.log(formatRow("Source CSS", groups.sourceCss));
  console.log(formatRow("Dev/mock", groups.devMock));
  console.log(formatRow("Generated JS", groups.generatedJs));
  console.log(formatRow("Generated CSS", groups.generatedCss));
  console.log(formatRow("Source assets", groups.assets));
  console.log("");
  console.log(`Dark-theme CSS blocks: ${signals.darkThemeBlocks}`);
  console.log(`Modal backdrop references: ${signals.modalBackdropReferences}`);
  console.log(`Central action comparisons: ${signals.centralActionComparisons}`);
  console.log(`Total action comparisons: ${signals.totalActionComparisons}`);
}
