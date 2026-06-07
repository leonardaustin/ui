export const COMMAND_PALETTE_EVENT = "open-command-palette";

export interface CommandPaletteShortcut {
  key: string;
  label: string;
  modifier?: "primary" | "meta" | "ctrl" | "none";
  altKey?: boolean;
  shiftKey?: boolean;
}

export const DEFAULT_COMMAND_PALETTE_SHORTCUT: CommandPaletteShortcut = {
  key: "k",
  label: "⌘K",
  modifier: "primary",
};

export function openCommandPalette(eventName = COMMAND_PALETTE_EVENT) {
  if (typeof document === "undefined") return;
  document.dispatchEvent(new CustomEvent(eventName));
}

export function matchesCommandPaletteShortcut(
  event: KeyboardEvent,
  shortcut: CommandPaletteShortcut,
) {
  const keyMatches = event.key.toLowerCase() === shortcut.key.toLowerCase();
  if (!keyMatches) return false;

  const modifier = shortcut.modifier ?? "primary";
  const modifierMatches =
    modifier === "primary"
      ? event.metaKey || event.ctrlKey
      : modifier === "meta"
        ? event.metaKey && !event.ctrlKey
        : modifier === "ctrl"
          ? event.ctrlKey && !event.metaKey
          : !event.metaKey && !event.ctrlKey;

  return (
    modifierMatches &&
    Boolean(event.altKey) === Boolean(shortcut.altKey) &&
    Boolean(event.shiftKey) === Boolean(shortcut.shiftKey)
  );
}
