import { useCallback } from "react";

import { isLightTheme } from "../config/theme";
import type { Theme } from "../providers/ThemeContext";
import { useSettings } from "./useSettings";

/**
 * Returns a function that sets a theme as the preferred dark or light theme
 * and switches to the corresponding color mode for immediate feedback.
 */
export function useApplyTheme() {
  const { setPreferredDarkTheme, setPreferredLightTheme, setColorMode } =
    useSettings();

  return useCallback(
    (theme: Theme) => {
      if (isLightTheme(theme)) {
        setPreferredLightTheme(theme);
        setColorMode("light");
      } else {
        setPreferredDarkTheme(theme);
        setColorMode("dark");
      }
    },
    [setPreferredDarkTheme, setPreferredLightTheme, setColorMode],
  );
}
