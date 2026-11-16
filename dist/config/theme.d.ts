import type { LucideIcon } from "lucide-react";
import type { AccentColor, FontFamily } from "../providers/SettingsContext";
import type { LightTheme, Theme } from "../providers/ThemeContext";
export interface ThemeItem {
    value: Theme;
    label: string;
    icon: LucideIcon;
    preview?: {
        bg: string;
        fg: string;
    };
}
export interface AccentItem {
    value: AccentColor;
    color: string;
}
export declare const themeItems: ThemeItem[];
export declare function isLightTheme(theme: Theme): theme is LightTheme;
export declare const lightThemes: ThemeItem[];
export declare const darkThemes: ThemeItem[];
export interface ThemeCustomization {
    uiFont: FontFamily;
    headingFont: FontFamily;
    proseFont: FontFamily;
    controlFont: FontFamily;
    labelFont: FontFamily;
    navigationFont: FontFamily;
    dataFont: FontFamily;
    codeFont: FontFamily;
    fontSize: number;
    borderRadius: number;
    borderWidth: number;
    tracking: number;
    lineHeight: number;
    density: number;
}
export declare const themeDefaults: Record<Theme, ThemeCustomization>;
export declare const fontOptions: {
    value: FontFamily;
    label: string;
}[];
export declare const accentItems: AccentItem[];
//# sourceMappingURL=theme.d.ts.map