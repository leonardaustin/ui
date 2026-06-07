/*
 * cn() flattens clsx-style inputs, then resolves utility-class conflicts: a
 * minimal tailwind-merge scoped to this project's utility set. Each class maps
 * to the CSS properties it sets (keyed by variant), and a later class drops an
 * earlier one only when it fully covers that earlier class's properties — so
 * later wins on real conflicts while complementary utilities coexist.
 *
 * Invariant (see AGENTS.md): side-specific border colors like `border-l-red`
 * set only one side's color and therefore must NOT drop the base `border-border`
 * card border, which sets all four sides.
 */
import { clsx, type ClassValue } from "clsx";

const displayClasses = new Set([
  "block",
  "contents",
  "flex",
  "grid",
  "hidden",
  "inline",
  "inline-block",
  "inline-flex",
  "table",
]);

const textSizeClasses = new Set([
  "text-2xl",
  "text-2xs",
  "text-2xs-f",
  "text-5xl",
  "text-base",
  "text-body",
  "text-lg",
  "text-sm",
  "text-xl",
  "text-xs",
]);

const textAlignClasses = new Set(["text-center", "text-left", "text-right"]);
const textTransformClasses = new Set(["lowercase", "uppercase"]);
const fontWeightClasses = new Set([
  "font-bold",
  "font-medium",
  "font-normal",
  "font-semibold",
]);

const spacingProperties = {
  m: ["margin-top", "margin-right", "margin-bottom", "margin-left"],
  mx: ["margin-right", "margin-left"],
  my: ["margin-top", "margin-bottom"],
  mt: ["margin-top"],
  mr: ["margin-right"],
  mb: ["margin-bottom"],
  ml: ["margin-left"],
  p: ["padding-top", "padding-right", "padding-bottom", "padding-left"],
  px: ["padding-right", "padding-left"],
  py: ["padding-top", "padding-bottom"],
  pt: ["padding-top"],
  pr: ["padding-right"],
  pb: ["padding-bottom"],
  pl: ["padding-left"],
} as const;

const insetProperties = {
  inset: ["top", "right", "bottom", "left"],
  "inset-x": ["right", "left"],
  "inset-y": ["top", "bottom"],
  top: ["top"],
  right: ["right"],
  bottom: ["bottom"],
  left: ["left"],
  start: ["inset-inline-start"],
  end: ["inset-inline-end"],
} as const;

const borderWidthProperties = {
  border: [
    "border-top-width",
    "border-right-width",
    "border-bottom-width",
    "border-left-width",
  ],
  "border-x": ["border-right-width", "border-left-width"],
  "border-y": ["border-top-width", "border-bottom-width"],
  "border-t": ["border-top-width"],
  "border-r": ["border-right-width"],
  "border-b": ["border-bottom-width"],
  "border-l": ["border-left-width"],
} as const;

const borderColorProperties = {
  border: [
    "border-top-color",
    "border-right-color",
    "border-bottom-color",
    "border-left-color",
  ],
  "border-x": ["border-right-color", "border-left-color"],
  "border-y": ["border-top-color", "border-bottom-color"],
  "border-t": ["border-top-color"],
  "border-r": ["border-right-color"],
  "border-b": ["border-bottom-color"],
  "border-l": ["border-left-color"],
} as const;

const borderStyleClasses = new Set([
  "border-dashed",
  "border-dotted",
  "border-double",
  "border-hidden",
  "border-none",
  "border-solid",
]);

export function cn(...inputs: ClassValue[]) {
  return mergeClassName(clsx(inputs));
}

function mergeClassName(value: string) {
  const entries: Array<{ token: string; keys: Set<string> } | null> = [];
  const exactIndexes = new Map<string, number>();

  for (const token of value.split(/\s+/)) {
    if (!token) continue;

    const keys = classPropertyKeys(token);
    if (keys.size === 0) {
      const previous = exactIndexes.get(token);
      if (previous !== undefined) entries[previous] = null;
      exactIndexes.set(token, entries.length);
      entries.push({ token, keys });
      continue;
    }

    for (let i = entries.length - 1; i >= 0; i--) {
      const entry = entries[i];
      if (entry && isSubset(entry.keys, keys)) entries[i] = null;
    }

    entries.push({ token, keys });
  }

  return entries
    .filter((entry): entry is { token: string; keys: Set<string> } =>
      Boolean(entry),
    )
    .map((entry) => entry.token)
    .join(" ");
}

function classPropertyKeys(token: string) {
  const parts = splitClassParts(token);
  const base = parts.pop() ?? token;
  const important = base.startsWith("!");
  const normalized = stripNegative(important ? base.slice(1) : base);
  const variant = `${parts.join(":")}|${important ? "!" : ""}`;
  const properties = baseProperties(normalized);

  return new Set(properties.map((property) => `${variant}${property}`));
}

function splitClassParts(token: string) {
  const parts = [];
  let depth = 0;
  let start = 0;

  for (let i = 0; i < token.length; i++) {
    const char = token[i];
    if (char === "[") depth++;
    if (char === "]") depth = Math.max(0, depth - 1);
    if (char !== ":" || depth > 0) continue;

    parts.push(token.slice(start, i));
    start = i + 1;
  }

  parts.push(token.slice(start));
  return parts;
}

function stripNegative(value: string) {
  return value.startsWith("-") ? value.slice(1) : value;
}

function baseProperties(base: string): string[] {
  const spacingKey = spacingPrefix(base);
  if (spacingKey) return [...spacingProperties[spacingKey]];

  const insetKey = insetPrefix(base);
  if (insetKey) return [...insetProperties[insetKey]];

  const borderWidthKey = borderWidthPrefix(base);
  if (borderWidthKey) return [...borderWidthProperties[borderWidthKey]];

  if (displayClasses.has(base)) return ["display"];
  if (base === "absolute" || base === "fixed" || base === "relative")
    return ["position"];
  if (base === "static" || base === "sticky") return ["position"];
  if (base === "visible" || base === "invisible" || base === "collapse")
    return ["visibility"];

  if (base === "border-collapse") return ["border-collapse"];
  if (borderStyleClasses.has(base)) return ["border-style"];
  const borderColorKey = borderColorPrefix(base);
  if (borderColorKey) return [...borderColorProperties[borderColorKey]];
  if (base === "rounded" || base.startsWith("rounded-"))
    return ["border-radius"];

  if (base.startsWith("bg-")) return ["background"];
  if (textSizeClasses.has(base)) return ["font-size"];
  if (textAlignClasses.has(base)) return ["text-align"];
  if (textTransformClasses.has(base)) return ["text-transform"];
  if (base.startsWith("text-")) return ["color"];
  if (base === "font-mono") return ["font-family"];
  if (fontWeightClasses.has(base)) return ["font-weight"];
  if (base.startsWith("leading-")) return ["line-height"];
  if (base.startsWith("tracking-")) return ["letter-spacing"];

  if (base.startsWith("w-")) return ["width"];
  if (base.startsWith("min-w-")) return ["min-width"];
  if (base.startsWith("max-w-")) return ["max-width"];
  if (base.startsWith("h-")) return ["height"];
  if (base.startsWith("min-h-")) return ["min-height"];
  if (base.startsWith("max-h-")) return ["max-height"];

  if (base.startsWith("translate-x-")) return ["translate-x"];
  if (base.startsWith("translate-y-")) return ["translate-y"];
  if (base.startsWith("scale-")) return ["scale"];
  if (base.startsWith("rotate-")) return ["rotate"];
  if (base === "transform") return ["transform"];

  if (base.startsWith("grid-cols-")) return ["grid-template-columns"];
  if (base.startsWith("col-span-")) return ["grid-column"];
  if (base.startsWith("columns-")) return ["columns"];
  if (base === "flex-col" || base === "flex-row") return ["flex-direction"];
  if (base === "flex-wrap") return ["flex-wrap"];
  if (base.startsWith("flex-")) return ["flex"];
  if (base === "shrink" || base.startsWith("shrink-")) return ["flex-shrink"];
  if (base === "grow" || base.startsWith("grow-")) return ["flex-grow"];
  if (base.startsWith("items-")) return ["align-items"];
  if (base.startsWith("justify-")) return ["justify-content"];
  if (base.startsWith("gap-")) return ["gap"];
  if (base.startsWith("space-y-")) return ["space-y"];

  if (base.startsWith("overflow-y-")) return ["overflow-y"];
  if (base.startsWith("overflow-x-")) return ["overflow-x"];
  if (base.startsWith("overflow-")) return ["overflow-x", "overflow-y"];
  if (base.startsWith("object-")) return ["object-fit"];
  if (base.startsWith("aspect-")) return ["aspect-ratio"];

  if (base.startsWith("cursor-")) return ["cursor"];
  if (base.startsWith("opacity-")) return ["opacity"];
  if (base.startsWith("shadow-")) return ["box-shadow"];
  if (base === "ring" || /^ring-\d/.test(base)) return ["ring-width"];
  if (base.startsWith("ring-offset-bg-")) return ["ring-offset-color"];
  if (base.startsWith("ring-offset-")) return ["ring-offset-width"];
  if (base.startsWith("ring-")) return ["ring-color"];
  if (base.startsWith("outline-offset-")) return ["outline-offset"];
  if (/^outline-\d/.test(base)) return ["outline-width"];
  if (base === "outline" || base === "outline-none") return ["outline-style"];
  if (base.startsWith("outline-")) return ["outline-color"];

  if (base.startsWith("transition-") || base === "transition")
    return ["transition-property"];
  if (base.startsWith("duration-")) return ["transition-duration"];
  if (base.startsWith("ease-")) return ["transition-timing-function"];
  if (base.startsWith("animate-")) return ["animation"];
  if (base.startsWith("z-")) return ["z-index"];

  if (base.startsWith("whitespace-")) return ["white-space"];
  if (base.startsWith("break-inside-")) return ["break-inside"];
  if (base.startsWith("break-")) return ["word-break"];
  if (base.startsWith("line-clamp-")) return ["line-clamp"];
  if (base === "list-inside" || base === "list-outside")
    return ["list-style-position"];
  if (base.startsWith("list-")) return ["list-style-type"];

  if (base.startsWith("resize")) return ["resize"];
  if (base.startsWith("select-")) return ["user-select"];
  if (base.startsWith("pointer-events-")) return ["pointer-events"];
  if (base.startsWith("appearance-")) return ["appearance"];
  if (base.startsWith("accent-")) return ["accent-color"];

  return [];
}

function spacingPrefix(base: string) {
  return keyPrefix(base, spacingProperties);
}

function insetPrefix(base: string) {
  return keyPrefix(base, insetProperties);
}

function borderWidthPrefix(base: string) {
  if (base === "border") return "border";

  const match = base.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/);
  return match?.[1] as keyof typeof borderWidthProperties | undefined;
}

function borderColorPrefix(base: string) {
  const sideMatch = base.match(/^(border-[xytrbl])-./);
  if (sideMatch) {
    return sideMatch[1] as keyof typeof borderColorProperties;
  }

  return base.startsWith("border-") ? "border" : undefined;
}

function keyPrefix<T extends Record<string, readonly string[]>>(
  base: string,
  properties: T,
) {
  return (Object.keys(properties) as Array<keyof T>)
    .sort((a, b) => String(b).length - String(a).length)
    .find((key) => {
      const value = String(key);
      return base === value || base.startsWith(`${value}-`);
    });
}

function isSubset(left: Set<string>, right: Set<string>) {
  for (const item of left) {
    if (!right.has(item)) return false;
  }
  return true;
}
