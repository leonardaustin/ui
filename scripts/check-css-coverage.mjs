// Fails if any static utility class used in source is missing from the
// checked-in CSS (since there's no Tailwind to generate it). Runs in pnpm lint.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const sourceRoots = ["apps/demo/src", "packages/ui/src"];
const cssFiles = [
  "packages/ui/src/generated-utilities.css",
  "packages/ui/src/styles.css",
];

const utilityPrefixes = [
  "-",
  "[",
  "active:",
  "after:",
  "align-",
  "animate-",
  "appearance-",
  "aspect-",
  "bg-",
  "block",
  "border",
  "bottom-",
  "break-",
  "columns-",
  "contents",
  "cursor-",
  "disabled:",
  "duration-",
  "ease-",
  "fixed",
  "flex",
  "focus:",
  "focus-visible:",
  "font-",
  "gap-",
  "grid",
  "group",
  "grow",
  "h-",
  "hidden",
  "hover:",
  "inline",
  "inset",
  "items-",
  "justify-",
  "left-",
  "leading-",
  "line-",
  "list-",
  "m-",
  "max-",
  "min-",
  "object-",
  "opacity-",
  "order-",
  "overflow",
  "p-",
  "placeholder:",
  "pointer-",
  "pr-",
  "relative",
  "resize",
  "right-",
  "ring",
  "rounded",
  "select-",
  "shadow",
  "shrink",
  "sm:",
  "space-",
  "sr-only",
  "static",
  "sticky",
  "table",
  "text-",
  "top-",
  "tracking-",
  "transition",
  "truncate",
  "uppercase",
  "visible",
  "w-",
  "whitespace-",
  "z-",
];

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return walk(path);
    return path;
  });
}

function unescapeCssClass(value) {
  return value.replace(/\\(.)/g, "$1");
}

function collectCssClasses() {
  const classes = new Set();
  const selectorPattern = /\.((?:\\.|[A-Za-z0-9_-])+)/g;

  for (const file of cssFiles) {
    const css = readFileSync(file, "utf8");
    for (const match of css.matchAll(selectorPattern)) {
      classes.add(unescapeCssClass(match[1]));
    }
  }

  return classes;
}

function isUtilityLike(token) {
  if (!token || token.includes("${") || token.startsWith("/") || token === "_")
    return false;
  return utilityPrefixes.some((prefix) => token.startsWith(prefix));
}

function collectSourceClasses() {
  const classes = new Map();
  const files = sourceRoots
    .flatMap(walk)
    .filter((path) => /\.(ts|tsx)$/.test(path));
  const classAttributePattern =
    /className\s*=\s*(?:"([^"]*)"|'([^']*)'|`([^`]*)`)/gs;
  const classExpressionPattern = /className\s*=\s*\{([^}]*)\}/gs;

  for (const file of files) {
    const source = stripComments(readFileSync(file, "utf8"));
    const classChunks = [];

    for (const match of source.matchAll(classAttributePattern)) {
      classChunks.push(match[1] ?? match[2] ?? match[3] ?? "");
    }

    for (const match of source.matchAll(classExpressionPattern)) {
      classChunks.push(...stringLiterals(match[1]));
    }

    for (const body of cnCallBodies(source)) {
      classChunks.push(...stringLiterals(body));
    }

    for (const chunk of classChunks) {
      addClassTokens(classes, chunk, file);
    }
  }

  return classes;
}

function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
}

function stringLiterals(source) {
  const values = [];
  const stringPattern = /(["'`])((?:\\.|(?!\1).)*?)\1/gs;

  for (const match of source.matchAll(stringPattern)) {
    values.push(match[2]);
  }

  return values;
}

function cnCallBodies(source) {
  const bodies = [];
  let index = 0;

  while ((index = source.indexOf("cn(", index)) !== -1) {
    let depth = 0;
    let quote = null;
    let start = index + 3;

    for (let i = index + 2; i < source.length; i++) {
      const char = source[i];
      const prev = source[i - 1];

      if (quote) {
        if (char === quote && prev !== "\\") quote = null;
        continue;
      }

      if (char === '"' || char === "'" || char === "`") {
        quote = char;
      } else if (char === "(") {
        depth++;
      } else if (char === ")") {
        depth--;
        if (depth === 0) {
          bodies.push(source.slice(start, i));
          index = i + 1;
          break;
        }
      }
    }

    index++;
  }

  return bodies;
}

function addClassTokens(classes, chunk, file) {
  for (const token of chunk.split(/\s+/)) {
    if (!isUtilityLike(token)) continue;
    const cleaned = token.replace(/^!/, "");
    if (!classes.has(cleaned)) classes.set(cleaned, new Set());
    classes.get(cleaned).add(file);
  }
}

const cssClasses = collectCssClasses();
const sourceClasses = collectSourceClasses();
const missing = [];

for (const [className, files] of sourceClasses) {
  if (!cssClasses.has(className)) {
    missing.push({ className, files: [...files].sort() });
  }
}

if (missing.length > 0) {
  console.error("Missing CSS utility rules:");
  for (const item of missing) {
    console.error(`  ${item.className}`);
    for (const file of item.files) console.error(`    ${file}`);
  }
  process.exit(1);
}

console.log(`CSS coverage OK: ${sourceClasses.size} static utility classes.`);
