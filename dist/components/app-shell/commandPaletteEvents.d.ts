export declare const COMMAND_PALETTE_EVENT = "open-command-palette";
export interface CommandPaletteShortcut {
    key: string;
    label: string;
    modifier?: "primary" | "meta" | "ctrl" | "none";
    altKey?: boolean;
    shiftKey?: boolean;
}
export declare const DEFAULT_COMMAND_PALETTE_SHORTCUT: CommandPaletteShortcut;
export declare function openCommandPalette(eventName?: string): void;
export declare function matchesCommandPaletteShortcut(event: KeyboardEvent, shortcut: CommandPaletteShortcut): boolean;
//# sourceMappingURL=commandPaletteEvents.d.ts.map