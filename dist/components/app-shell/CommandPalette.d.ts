import { type CommandPaletteShortcut } from "./commandPaletteEvents";
import { type AppShellNavigate } from "./navigation";
import type { AppShellNavItem } from "./types";
export interface CommandPaletteProps {
    items: AppShellNavItem[];
    eventName?: string;
    shortcut?: CommandPaletteShortcut;
    placeholder?: string;
    emptyLabel?: string;
    onNavigate?: AppShellNavigate;
    onSelect?: (item: AppShellNavItem) => void;
}
/**
 * Searchable page palette. Opens via a document-level keydown listener matching
 * `shortcut` (default ⌘K), or when the `eventName` CustomEvent is dispatched on
 * `document` (see openCommandPalette()); the shortcut also toggles it closed.
 */
export declare function CommandPalette({ items, eventName, shortcut, placeholder, emptyLabel, onNavigate, onSelect, }: CommandPaletteProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=CommandPalette.d.ts.map