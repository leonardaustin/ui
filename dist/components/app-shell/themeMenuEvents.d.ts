export declare const THEME_MENU_EVENT = "open-theme-menu";
/**
 * Open the top-bar ThemeMenu from anywhere (the menu lives inside AppShell's
 * TopBar, so callers can't reach its state directly). Mirrors
 * openCommandPalette(): dispatch a document-level CustomEvent the menu listens
 * for. No-op outside the browser.
 */
export declare function openThemeMenu(eventName?: string): void;
//# sourceMappingURL=themeMenuEvents.d.ts.map