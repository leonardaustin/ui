import { type CommandPaletteShortcut } from "./commandPaletteEvents";
import { type AppShellNavigate } from "./navigation";
import type { AppShellNavItem } from "./types";
export interface CommandPaletteProps {
    /** Pages to search. Matches on label, path, and `keywords`. */
    items: AppShellNavItem[];
    /** Name of the `document` CustomEvent that opens the palette. Defaults to the one fired by `openCommandPalette()`. */
    eventName?: string;
    /** Keyboard shortcut that toggles the palette. Defaults to ⌘K / Ctrl+K. */
    shortcut?: CommandPaletteShortcut;
    /** Placeholder text in the search input. Defaults to "Search pages...". */
    placeholder?: string;
    /** Text shown when nothing matches. Defaults to "No results found". */
    emptyLabel?: string;
    /** Called with the selected item's path so a client router can handle it. Without it, the browser navigates to the path. */
    onNavigate?: AppShellNavigate;
    /** Called with the item when one is chosen, before navigation. */
    onSelect?: (item: AppShellNavItem) => void;
}
/**
 * Searchable page palette. Opens via a document-level keydown listener matching
 * `shortcut` (default ⌘K), or when the `eventName` CustomEvent is dispatched on
 * `document` (see openCommandPalette()); the shortcut also toggles it closed.
 */
export declare function CommandPalette({ items, eventName, shortcut, placeholder, emptyLabel, onNavigate, onSelect, }: CommandPaletteProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=CommandPalette.d.ts.map