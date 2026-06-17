export type DarkTheme = "dark" | "monokai" | "solarized" | "cyberBrutalDark";
export type LightTheme = "light" | "cyberBrutalLight" | "hashiTheme";
export type Theme = DarkTheme | LightTheme;
export interface ThemeContextValue {
    theme: Theme;
}
export declare const ThemeContext: import("react").Context<ThemeContextValue>;
//# sourceMappingURL=ThemeContext.d.ts.map