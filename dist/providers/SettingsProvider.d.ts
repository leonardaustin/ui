import { type ReactNode } from "react";
import type { ThemeCustomization } from "../config/theme";
import { type AccentColor, type ColorMode } from "./SettingsContext";
import type { DarkTheme, LightTheme, Theme } from "./ThemeContext";
interface StoredSettings {
    accentColor: AccentColor;
    sidebarCollapsed: boolean;
    sidebarWidth: number;
    reducedMotion: boolean;
    colorMode: ColorMode;
    preferredDarkTheme: DarkTheme;
    preferredLightTheme: LightTheme;
    themeOverrides: Partial<Record<Theme, ThemeCustomization>>;
}
export interface SettingsProviderProps {
    children: ReactNode;
    storageKey?: string;
    /** Defaults used when no stored preference exists. Read once on mount. */
    initialSettings?: Partial<Pick<StoredSettings, "colorMode" | "preferredLightTheme" | "preferredDarkTheme" | "accentColor" | "reducedMotion">>;
    /** Force a theme regardless of stored preferences or OS; remove to restore preferences. */
    forcedTheme?: Theme;
}
export declare function SettingsProvider({ children, storageKey, initialSettings, forcedTheme, }: SettingsProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SettingsProvider.d.ts.map