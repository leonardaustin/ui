import type { Theme } from "./ThemeContext";
export declare const THEME_CLASSES: Record<Theme, string[]>;
export declare function applyThemeClasses(classList: DOMTokenList, theme: Theme): void;
