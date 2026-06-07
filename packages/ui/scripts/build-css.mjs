// Inlines generated-utilities.css into styles.css to emit dist/styles.css.
// Runs during the package build (pnpm build).
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const stylesPath = resolve(root, "src/styles.css");
const utilitiesPath = resolve(root, "src/generated-utilities.css");
const outputPath = resolve(root, "dist/styles.css");

const [styles, utilities] = await Promise.all([
  readFile(stylesPath, "utf8"),
  readFile(utilitiesPath, "utf8"),
]);

const importStatement = '@import "./generated-utilities.css";';

if (!styles.includes(importStatement)) {
  throw new Error(`Expected ${stylesPath} to import generated utilities`);
}

const bundled = styles.replace(importStatement, utilities);

await mkdir(resolve(root, "dist"), { recursive: true });
await writeFile(outputPath, bundled);
