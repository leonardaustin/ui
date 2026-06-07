import { useContext } from "react";

import { SettingsContext } from "../providers/SettingsContext";

/**
 * Surfaces the user settings (color mode, accent, fonts, and live theme
 * customization plus its persistence). Without a <SettingsProvider> ancestor it
 * falls back to the inert context defaults (setters are no-ops) rather than
 * throwing.
 */
export function useSettings() {
  return useContext(SettingsContext);
}
