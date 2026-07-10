import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build, transform } from "esbuild";
import { checkSettingsBackupConfig } from "./check-settings-backup.mjs";
import { resolveCssSources } from "./css-source-list.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const checkOnly = process.argv.includes("--check");

const unsupportedArguments = process.argv.slice(2).filter((argument) => argument !== "--check");
if (unsupportedArguments.length) {
  throw new Error(`Unsupported arguments: ${unsupportedArguments.join(", ")}`);
}

const bundles = [
  {
    label: "JS",
    output: path.join(__dirname, "js", "openquatt-app.js"),
    entryPoint: path.join(__dirname, "js", "src", "app.js"),
  },
  {
    label: "CSS",
    output: path.join(__dirname, "css", "openquatt-app.css"),
    sources: resolveCssSources(__dirname),
  },
];

async function buildEmbeddedAssetModule() {
  const assets = [
    ["HP_GENERATION_IMAGE_V1", path.join(__dirname, "assets", "quatt-hybrid-v1.webp")],
    ["HP_GENERATION_IMAGE_V2", path.join(__dirname, "assets", "quatt-hybrid-v2.webp")],
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
    name: "openquatt-embedded-assets",
    setup(pluginBuild) {
      pluginBuild.onResolve({ filter: /^virtual:embedded-assets$/ }, (args) => ({
        path: args.path,
        namespace: "openquatt-embedded-assets",
      }));
      pluginBuild.onLoad({ filter: /.*/, namespace: "openquatt-embedded-assets" }, async () => ({
        contents: await buildEmbeddedAssetModule(),
        loader: "js",
      }));
    },
  };
}

function toBundlePath(value) {
  return value.split(path.sep).join("/");
}

async function renderCssBundle(bundle) {
  const parts = await Promise.all(
    bundle.sources.map(async (source) => ({
      source,
      content: await readFile(source, "utf8"),
    })),
  );

  const header = [
    `/* Generated minified bundle: ${toBundlePath(path.relative(__dirname, bundle.output))}. */`,
    "/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */",
  ].join("\n");
  const bodySegments = parts.map(({ content }) => content.trimEnd());
  const body = bodySegments.join("\n");
  const minified = (await transform(body, { loader: "css", minify: true })).code.trim();
  return `${header}\n${minified}\n`;
}

async function renderJavaScriptBundle(bundle) {
  const result = await build({
    entryPoints: [bundle.entryPoint],
    bundle: true,
    format: "iife",
    legalComments: "none",
    minify: true,
    target: "es2020",
    write: false,
    plugins: [embeddedAssetsPlugin()],
  });
  const header = [
    `/* Generated minified bundle: ${toBundlePath(path.relative(__dirname, bundle.output))}. */`,
    "/* Source files are in ./js/src and ./css/src. Rebuild with: node openquatt/web/build-assets.mjs */",
  ].join("\n");
  const output = result.outputFiles[0]?.text || "";
  return `${header}\n${output.trim()}\n`;
}

async function bundleIsCurrent(bundle, expected) {
  try {
    return await readFile(bundle.output, "utf8") === expected;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function buildBundle(bundle) {
  const output = bundle.label === "JS"
    ? await renderJavaScriptBundle(bundle)
    : await renderCssBundle(bundle);
  if (checkOnly) {
    return await bundleIsCurrent(bundle, output) ? null : path.relative(process.cwd(), bundle.output);
  }

  await mkdir(path.dirname(bundle.output), { recursive: true });
  await writeFile(bundle.output, output, "utf8");
  console.log(`${bundle.label} bundle rebuilt: ${path.relative(__dirname, bundle.output)}`);
  return null;
}

await checkSettingsBackupConfig();
const staleBundles = (await Promise.all(bundles.map(buildBundle))).filter(Boolean);

if (checkOnly) {
  if (staleBundles.length) {
    console.error(`Generated web bundles are out of date:\n- ${staleBundles.join("\n- ")}\nRun: rtk npm run build:web`);
    process.exitCode = 1;
  } else {
    console.log("Generated web bundles are up to date");
  }
}
