import type { LucideIcon } from "lucide-react";
import { BookOpen, Monitor, Moon, Palette, Sun, Zap } from "lucide-react";

import type { AccentColor, FontFamily } from "../providers/SettingsContext";
import type { LightTheme, Theme } from "../providers/ThemeContext";

export interface ThemeItem {
  value: Theme;
  label: string;
  icon: LucideIcon;
  preview?: { bg: string; fg: string };
}

export interface AccentItem {
  value: AccentColor;
  color: string;
}

export const themeItems: ThemeItem[] = [
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
    preview: { bg: "#0d0f12", fg: "#2a2e38" },
  },
  {
    value: "light",
    label: "Light",
    icon: Sun,
    preview: { bg: "#f5f5f5", fg: "#d4d4d8" },
  },
  {
    value: "monokai",
    label: "Monokai",
    icon: Palette,
    preview: { bg: "#272822", fg: "#3E3D32" },
  },
  {
    value: "solarized",
    label: "Solarized",
    icon: Monitor,
    preview: { bg: "#002B36", fg: "#0A3F4C" },
  },
  {
    value: "cyberBrutalDark",
    label: "Cyber Brutal Dark",
    icon: Zap,
    preview: { bg: "#050505", fg: "#18181b" },
  },
  {
    value: "cyberBrutalLight",
    label: "Cyber Brutal Light",
    icon: Zap,
    preview: { bg: "#e4e4e7", fg: "#d4d4d8" },
  },
  {
    value: "hashiTheme",
    label: "HashiTheme",
    icon: BookOpen,
    preview: { bg: "#ffffff", fg: "#364153" },
  },
];

const LIGHT_THEMES: ReadonlySet<Theme> = new Set<Theme>([
  "light",
  "cyberBrutalLight",
  "hashiTheme",
]);

export function isLightTheme(theme: Theme): theme is LightTheme {
  return LIGHT_THEMES.has(theme);
}

export const lightThemes = themeItems.filter((t) => isLightTheme(t.value));
export const darkThemes = themeItems.filter((t) => !isLightTheme(t.value));

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

const STANDARD: ThemeCustomization = {
  uiFont: "inter",
  headingFont: "inter",
  proseFont: "inter",
  controlFont: "inter",
  labelFont: "inter",
  navigationFont: "inter",
  dataFont: "inter",
  codeFont: "jetbrains-mono",
  fontSize: 15,
  borderRadius: 6,
  borderWidth: 1,
  tracking: 0.05,
  lineHeight: 1.45,
  density: 0.25,
};

const BRUTAL: ThemeCustomization = {
  uiFont: "jetbrains-mono",
  headingFont: "jetbrains-mono",
  proseFont: "jetbrains-mono",
  controlFont: "jetbrains-mono",
  labelFont: "jetbrains-mono",
  navigationFont: "jetbrains-mono",
  dataFont: "jetbrains-mono",
  codeFont: "jetbrains-mono",
  fontSize: 15,
  borderRadius: 0,
  borderWidth: 1,
  tracking: 0.2,
  lineHeight: 1.4,
  density: 0.22,
};

const HASHI: ThemeCustomization = {
  uiFont: "inter",
  headingFont: "archivo-expanded",
  proseFont: "pt-serif",
  controlFont: "inter",
  labelFont: "inter",
  navigationFont: "inter",
  dataFont: "inter",
  codeFont: "jetbrains-mono",
  fontSize: 14,
  borderRadius: 6,
  borderWidth: 1,
  tracking: 0,
  lineHeight: 1.45,
  density: 0.25,
};

export const themeDefaults: Record<Theme, ThemeCustomization> = {
  dark: STANDARD,
  light: STANDARD,
  monokai: STANDARD,
  solarized: STANDARD,
  cyberBrutalDark: BRUTAL,
  cyberBrutalLight: BRUTAL,
  hashiTheme: HASHI,
};

export const fontOptions: { value: FontFamily; label: string }[] = [
  { value: "archivo-expanded", label: "Archivo Expanded" },
  { value: "inter", label: "Inter" },
  { value: "jetbrains-mono", label: "JetBrains Mono" },
  { value: "pt-serif", label: "PT Serif" },
  { value: "system", label: "System" },
];

export const accentItems: AccentItem[] = [
  { value: "purple", color: "#7C5CFC" },
  { value: "blue", color: "#3B82F6" },
  { value: "green", color: "#22C55E" },
  { value: "teal", color: "#14B8A6" },
  { value: "orange", color: "#F97316" },
  { value: "red", color: "#EF4444" },
  { value: "pink", color: "#EC4899" },
  { value: "indigo", color: "#6366F1" },
];
