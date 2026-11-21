export type DarkTheme = "dark" | "monokai" | "solarized" | "cyberBrutalDark" | "glassDark";
export type LightTheme = "light" | "lightInverted" | "cyberBrutalLight" | "hashiTheme" | "glassLight";
export type Theme = DarkTheme | LightTheme;
export interface ThemeContextValue {
    theme: Theme;
}
export declare const ThemeContext: import("react").Context<ThemeContextValue>;
