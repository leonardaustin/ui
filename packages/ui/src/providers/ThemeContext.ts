import { createContext } from "react";

export type DarkTheme = "dark" | "monokai" | "solarized" | "cyberBrutalDark";
export type LightTheme = "light" | "cyberBrutalLight" | "hashiTheme";
export type Theme = DarkTheme | LightTheme;

export interface ThemeContextValue {
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
});
