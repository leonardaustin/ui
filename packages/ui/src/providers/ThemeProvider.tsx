import { useContext, useEffect, type ReactNode } from "react";

import { SettingsContext } from "./SettingsContext";
import { ThemeContext, type Theme } from "./ThemeContext";

const THEME_CLASSES: Record<Theme, string> = {
  dark: "",
  light: "theme-light",
  monokai: "theme-monokai",
  solarized: "theme-solarized",
  cyberBrutalDark: "theme-cyber-brutal-dark",
  cyberBrutalLight: "theme-cyber-brutal-light",
  hashiTheme: "theme-hashi",
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useContext(SettingsContext);

  useEffect(() => {
    const root = document.documentElement;
    Object.values(THEME_CLASSES).forEach((cls) => {
      if (cls) root.classList.remove(cls);
    });
    const cls = THEME_CLASSES[resolvedTheme];
    if (cls) root.classList.add(cls);
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ theme: resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
