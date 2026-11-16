import type { DarkTheme, LightTheme, Theme } from "./ThemeContext";
export type ColorMode = "light" | "dark" | "system";
export type AccentColor = "purple" | "blue" | "green" | "teal" | "orange" | "red" | "pink" | "indigo";
export type FontFamily = "archivo-expanded" | "inter" | "jetbrains-mono" | "pt-serif" | "system";
export interface SettingsContextValue {
    fontSize: number;
    setFontSize: (size: number) => void;
    accentColor: AccentColor;
    setAccentColor: (color: AccentColor) => void;
    sidebarCollapsed: boolean;
    setSidebarCollapsed: (collapsed: boolean) => void;
    sidebarWidth: number;
    setSidebarWidth: (width: number) => void;
    reducedMotion: boolean;
    setReducedMotion: (reduced: boolean) => void;
    colorMode: ColorMode;
    setColorMode: (mode: ColorMode) => void;
    preferredDarkTheme: DarkTheme;
    setPreferredDarkTheme: (theme: DarkTheme) => void;
    preferredLightTheme: LightTheme;
    setPreferredLightTheme: (theme: LightTheme) => void;
    resolvedTheme: Theme;
    /** Live customization (applied to CSS immediately, unsaved until saveThemeCustomization) */
    uiFont: FontFamily;
    headingFont: FontFamily;
    proseFont: FontFamily;
    controlFont: FontFamily;
    labelFont: FontFamily;
    navigationFont: FontFamily;
    dataFont: FontFamily;
    codeFont: FontFamily;
    borderRadius: number;
    borderWidth: number;
    tracking: number;
    lineHeight: number;
    density: number;
    setUiFont: (font: FontFamily) => void;
    setHeadingFont: (font: FontFamily) => void;
    setProseFont: (font: FontFamily) => void;
    setControlFont: (font: FontFamily) => void;
    setLabelFont: (font: FontFamily) => void;
    setNavigationFont: (font: FontFamily) => void;
    setDataFont: (font: FontFamily) => void;
    setCodeFont: (font: FontFamily) => void;
    setBorderRadius: (radius: number) => void;
    setBorderWidth: (width: number) => void;
    setTracking: (tracking: number) => void;
    setLineHeight: (lineHeight: number) => void;
    setDensity: (density: number) => void;
    /** Persist current live values as overrides for the active theme */
    saveThemeCustomization: () => void;
    /** Clear overrides for the active theme and revert to defaults */
    resetThemeCustomization: () => void;
    /** Whether the active theme has saved overrides */
    hasThemeOverrides: boolean;
    /** Whether live values differ from the saved/default state */
    isCustomized: boolean;
}
export declare const SettingsContext: import("react").Context<SettingsContextValue>;
//# sourceMappingURL=SettingsContext.d.ts.map