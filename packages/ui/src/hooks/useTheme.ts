import { useContext } from "react";

import { ThemeContext } from "../providers/ThemeContext";

/**
 * Returns the resolved active theme. Without a <ThemeProvider> ancestor it
 * falls back to the context default ("dark") rather than throwing.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
