import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { ThemeCustomization } from "../config/theme";
import { isLightTheme, themeDefaults } from "../config/theme";
import {
  SettingsContext,
  type AccentColor,
  type ColorMode,
  type FontFamily,
} from "./SettingsContext";
import type { DarkTheme, LightTheme, Theme } from "./ThemeContext";

const FONT_STACKS: Record<FontFamily, string> = {
  "archivo-expanded":
    '"Archivo", "Arial Black", "Avenir Next Condensed", "HelveticaNeue-CondensedBold", system-ui, sans-serif',
  inter: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  "jetbrains-mono": '"JetBrains Mono", Menlo, Monaco, Consolas, monospace',
  "pt-serif":
    '"PT Serif", Georgia, ui-serif, Cambria, "Times New Roman", Times, serif',
  system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
};

const ACCENT_MAP: Record<
  AccentColor,
  { base: string; hover: string; active: string; muted: string; subtle: string }
> = {
  purple: {
    base: "#7C5CFC",
    hover: "#6B4AEB",
    active: "#5A39DA",
    muted: "rgba(124,92,252,0.15)",
    subtle: "rgba(124,92,252,0.08)",
  },
  blue: {
    base: "#3B82F6",
    hover: "#2563EB",
    active: "#1D4ED8",
    muted: "rgba(59,130,246,0.15)",
    subtle: "rgba(59,130,246,0.08)",
  },
  green: {
    base: "#22C55E",
    hover: "#16A34A",
    active: "#15803D",
    muted: "rgba(34,197,94,0.15)",
    subtle: "rgba(34,197,94,0.08)",
  },
  teal: {
    base: "#14B8A6",
    hover: "#0D9488",
    active: "#0F766E",
    muted: "rgba(20,184,166,0.15)",
    subtle: "rgba(20,184,166,0.08)",
  },
  orange: {
    base: "#F97316",
    hover: "#EA580C",
    active: "#C2410C",
    muted: "rgba(249,115,22,0.15)",
    subtle: "rgba(249,115,22,0.08)",
  },
  red: {
    base: "#EF4444",
    hover: "#DC2626",
    active: "#B91C1C",
    muted: "rgba(239,68,68,0.15)",
    subtle: "rgba(239,68,68,0.08)",
  },
  pink: {
    base: "#EC4899",
    hover: "#DB2777",
    active: "#BE185D",
    muted: "rgba(236,72,153,0.15)",
    subtle: "rgba(236,72,153,0.08)",
  },
  indigo: {
    base: "#6366F1",
    hover: "#4F46E5",
    active: "#4338CA",
    muted: "rgba(99,102,241,0.15)",
    subtle: "rgba(99,102,241,0.08)",
  },
};

const DEFAULT_STORAGE_KEY = "leonardaustin-ui-settings";

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

const VALID_ACCENTS = new Set<string>(Object.keys(ACCENT_MAP));
const VALID_THEMES = new Set<string>(Object.keys(themeDefaults));
const VALID_FONTS = new Set<string>(Object.keys(FONT_STACKS));
const VALID_COLOR_MODES = new Set<string>(["light", "dark", "system"]);

function clamp(
  value: unknown,
  min: number,
  max: number,
  fallback: number,
): number {
  if (typeof value !== "number" || !isFinite(value)) return fallback;
  return Math.min(max, Math.max(min, value));
}

function validateSettings(
  parsed: Record<string, unknown>,
): Partial<StoredSettings> {
  const validated: Record<string, unknown> = {};

  if (VALID_ACCENTS.has(parsed.accentColor as string))
    validated.accentColor = parsed.accentColor;
  if (VALID_COLOR_MODES.has(parsed.colorMode as string))
    validated.colorMode = parsed.colorMode;
  if (
    VALID_THEMES.has(parsed.preferredDarkTheme as string) &&
    !isLightTheme(parsed.preferredDarkTheme as Theme)
  )
    validated.preferredDarkTheme = parsed.preferredDarkTheme;
  if (
    VALID_THEMES.has(parsed.preferredLightTheme as string) &&
    isLightTheme(parsed.preferredLightTheme as Theme)
  )
    validated.preferredLightTheme = parsed.preferredLightTheme;
  if (typeof parsed.sidebarCollapsed === "boolean")
    validated.sidebarCollapsed = parsed.sidebarCollapsed;
  if (typeof parsed.reducedMotion === "boolean")
    validated.reducedMotion = parsed.reducedMotion;
  if (typeof parsed.sidebarWidth === "number")
    validated.sidebarWidth = clamp(parsed.sidebarWidth, 160, 400, 220);

  if (parsed.themeOverrides && typeof parsed.themeOverrides === "object") {
    const cleaned: Partial<Record<Theme, ThemeCustomization>> = {};
    for (const [key, val] of Object.entries(
      parsed.themeOverrides as Record<string, unknown>,
    )) {
      if (!VALID_THEMES.has(key) || !val || typeof val !== "object") continue;
      const tc = val as Record<string, unknown>;
      const base = themeDefaults[key as Theme];
      cleaned[key as Theme] = {
        uiFont: VALID_FONTS.has(tc.uiFont as string)
          ? (tc.uiFont as FontFamily)
          : base.uiFont,
        headingFont: VALID_FONTS.has(tc.headingFont as string)
          ? (tc.headingFont as FontFamily)
          : base.headingFont,
        proseFont: VALID_FONTS.has(tc.proseFont as string)
          ? (tc.proseFont as FontFamily)
          : base.proseFont,
        controlFont: VALID_FONTS.has(tc.controlFont as string)
          ? (tc.controlFont as FontFamily)
          : base.controlFont,
        labelFont: VALID_FONTS.has(tc.labelFont as string)
          ? (tc.labelFont as FontFamily)
          : base.labelFont,
        navigationFont: VALID_FONTS.has(tc.navigationFont as string)
          ? (tc.navigationFont as FontFamily)
          : base.navigationFont,
        dataFont: VALID_FONTS.has(tc.dataFont as string)
          ? (tc.dataFont as FontFamily)
          : base.dataFont,
        codeFont: VALID_FONTS.has(tc.codeFont as string)
          ? (tc.codeFont as FontFamily)
          : base.codeFont,
        fontSize: clamp(tc.fontSize, 11, 18, base.fontSize),
        borderRadius: clamp(tc.borderRadius, 0, 16, base.borderRadius),
        borderWidth: clamp(tc.borderWidth, 1, 3, base.borderWidth),
        tracking: clamp(tc.tracking, 0, 0.3, base.tracking),
        lineHeight: clamp(tc.lineHeight, 1.2, 2, base.lineHeight),
        density: clamp(tc.density, 0.18, 0.32, base.density),
      };
    }
    validated.themeOverrides = cleaned;
  }

  return validated as Partial<StoredSettings>;
}

const defaults: StoredSettings = {
  accentColor: "purple",
  sidebarCollapsed: false,
  sidebarWidth: 220,
  reducedMotion: false,
  colorMode: "dark",
  preferredDarkTheme: "dark",
  preferredLightTheme: "light",
  themeOverrides: {},
};

function loadSettings(storageKey: string): StoredSettings {
  if (typeof localStorage === "undefined") return defaults;

  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) return { ...defaults, ...validateSettings(JSON.parse(raw)) };
  } catch (e) {
    console.warn("[SettingsProvider] Failed to load settings:", e);
  }
  return defaults;
}

function getEffective(
  theme: Theme,
  overrides: Partial<Record<Theme, ThemeCustomization>>,
): ThemeCustomization {
  const base = themeDefaults[theme] ?? themeDefaults.dark;
  return overrides[theme] ? { ...base, ...overrides[theme] } : base;
}

function customEqual(a: ThemeCustomization, b: ThemeCustomization) {
  return (
    a.uiFont === b.uiFont &&
    a.headingFont === b.headingFont &&
    a.proseFont === b.proseFont &&
    a.controlFont === b.controlFont &&
    a.labelFont === b.labelFont &&
    a.navigationFont === b.navigationFont &&
    a.dataFont === b.dataFont &&
    a.codeFont === b.codeFont &&
    a.fontSize === b.fontSize &&
    a.borderRadius === b.borderRadius &&
    a.borderWidth === b.borderWidth &&
    a.tracking === b.tracking &&
    a.lineHeight === b.lineHeight &&
    a.density === b.density
  );
}

export interface SettingsProviderProps {
  children: ReactNode;
  storageKey?: string;
}

export function SettingsProvider({
  children,
  storageKey = DEFAULT_STORAGE_KEY,
}: SettingsProviderProps) {
  const [settings, setSettings] = useState<StoredSettings>(() =>
    loadSettings(storageKey),
  );

  // System color scheme preference
  const [systemIsDark, setSystemIsDark] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // Resolve the active theme from mode + preferences + OS
  const resolvedTheme: Theme = useMemo(() => {
    if (settings.colorMode === "light") return settings.preferredLightTheme;
    if (settings.colorMode === "dark") return settings.preferredDarkTheme;
    return systemIsDark
      ? settings.preferredDarkTheme
      : settings.preferredLightTheme;
  }, [
    settings.colorMode,
    settings.preferredDarkTheme,
    settings.preferredLightTheme,
    systemIsDark,
  ]);

  // Live customization state — resets when resolved theme changes
  const [live, setLive] = useState<ThemeCustomization>(() =>
    getEffective(resolvedTheme, settings.themeOverrides),
  );

  // When resolved theme changes, sync live state to effective values
  useEffect(() => {
    setLive(getEffective(resolvedTheme, settings.themeOverrides));
    // Only resync when the resolved theme changes, not on every override
    // mutation — that would discard in-flight edits from the live sliders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resolvedTheme]);

  const save = useCallback(
    (patch: Partial<StoredSettings>) => {
      setSettings((prev) => {
        const next = { ...prev, ...patch };
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch (e) {
          console.warn("[SettingsProvider] Failed to persist settings:", e);
        }
        return next;
      });
    },
    [storageKey],
  );

  // --- CSS effects ---

  useEffect(() => {
    const root = document.documentElement;
    const colors = ACCENT_MAP[settings.accentColor];
    root.style.setProperty("--accent", colors.base);
    root.style.setProperty("--accent-hover", colors.hover);
    root.style.setProperty("--accent-active", colors.active);
    root.style.setProperty("--accent-muted", colors.muted);
    root.style.setProperty("--accent-subtle", colors.subtle);
  }, [settings.accentColor]);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "reduced-motion",
      settings.reducedMotion,
    );
  }, [settings.reducedMotion]);

  useEffect(() => {
    const root = document.documentElement;
    const r = live.borderRadius;

    root.style.fontSize = `${(live.fontSize / 13) * 100}%`;
    root.style.setProperty("--font-ui", FONT_STACKS[live.uiFont]);
    root.style.setProperty("--font-heading", FONT_STACKS[live.headingFont]);
    root.style.setProperty("--font-prose", FONT_STACKS[live.proseFont]);
    root.style.setProperty("--font-control", FONT_STACKS[live.controlFont]);
    root.style.setProperty("--font-label", FONT_STACKS[live.labelFont]);
    root.style.setProperty(
      "--font-navigation",
      FONT_STACKS[live.navigationFont],
    );
    root.style.setProperty("--font-data", FONT_STACKS[live.dataFont]);
    root.style.setProperty("--font-code", FONT_STACKS[live.codeFont]);
    root.style.setProperty(
      "--ui-radius",
      r === 0 ? "0" : `${Math.round((r * 2) / 3)}px`,
    );
    root.style.setProperty("--ui-radius-md", r === 0 ? "0" : `${r}px`);
    root.style.setProperty(
      "--ui-radius-lg",
      r === 0 ? "0" : `${Math.round((r * 4) / 3)}px`,
    );
    root.style.setProperty("--ui-radius-xl", r === 0 ? "0" : `${r * 2}px`);
    root.style.setProperty("--ui-border-width", `${live.borderWidth}px`);
    root.style.setProperty("--ui-tracking", `${live.tracking}em`);
    root.style.setProperty("--ui-line-height", String(live.lineHeight));
    root.style.setProperty("--ui-density", `${live.density}rem`);
  }, [live]);

  // --- Derived state ---

  const effective = useMemo(
    () => getEffective(resolvedTheme, settings.themeOverrides),
    [resolvedTheme, settings.themeOverrides],
  );

  const hasThemeOverrides = resolvedTheme in settings.themeOverrides;
  const isCustomized = !customEqual(live, effective);

  // --- Theme customization persistence ---

  const saveThemeCustomization = useCallback(() => {
    save({
      themeOverrides: {
        ...settings.themeOverrides,
        [resolvedTheme]: { ...live },
      },
    });
  }, [save, settings.themeOverrides, resolvedTheme, live]);

  const resetThemeCustomization = useCallback(() => {
    const next = { ...settings.themeOverrides };
    delete next[resolvedTheme];
    save({ themeOverrides: next });
    setLive(themeDefaults[resolvedTheme] ?? themeDefaults.dark);
  }, [save, settings.themeOverrides, resolvedTheme]);

  const contextValue = useMemo(
    () => ({
      fontSize: live.fontSize,
      setFontSize: (s: number) => setLive((p) => ({ ...p, fontSize: s })),
      accentColor: settings.accentColor,
      setAccentColor: (color: AccentColor) => save({ accentColor: color }),
      sidebarCollapsed: settings.sidebarCollapsed,
      setSidebarCollapsed: (collapsed: boolean) =>
        save({ sidebarCollapsed: collapsed }),
      sidebarWidth: settings.sidebarWidth,
      setSidebarWidth: (width: number) => save({ sidebarWidth: width }),
      reducedMotion: settings.reducedMotion,
      setReducedMotion: (reduced: boolean) => save({ reducedMotion: reduced }),
      colorMode: settings.colorMode,
      setColorMode: (mode: ColorMode) => save({ colorMode: mode }),
      preferredDarkTheme: settings.preferredDarkTheme,
      setPreferredDarkTheme: (t: DarkTheme) => save({ preferredDarkTheme: t }),
      preferredLightTheme: settings.preferredLightTheme,
      setPreferredLightTheme: (t: LightTheme) =>
        save({ preferredLightTheme: t }),
      resolvedTheme,
      uiFont: live.uiFont,
      headingFont: live.headingFont,
      proseFont: live.proseFont,
      controlFont: live.controlFont,
      labelFont: live.labelFont,
      navigationFont: live.navigationFont,
      dataFont: live.dataFont,
      codeFont: live.codeFont,
      borderRadius: live.borderRadius,
      borderWidth: live.borderWidth,
      tracking: live.tracking,
      lineHeight: live.lineHeight,
      density: live.density,
      setUiFont: (f: FontFamily) => setLive((p) => ({ ...p, uiFont: f })),
      setHeadingFont: (f: FontFamily) =>
        setLive((p) => ({ ...p, headingFont: f })),
      setProseFont: (f: FontFamily) => setLive((p) => ({ ...p, proseFont: f })),
      setControlFont: (f: FontFamily) =>
        setLive((p) => ({ ...p, controlFont: f })),
      setLabelFont: (f: FontFamily) => setLive((p) => ({ ...p, labelFont: f })),
      setNavigationFont: (f: FontFamily) =>
        setLive((p) => ({ ...p, navigationFont: f })),
      setDataFont: (f: FontFamily) => setLive((p) => ({ ...p, dataFont: f })),
      setCodeFont: (f: FontFamily) => setLive((p) => ({ ...p, codeFont: f })),
      setBorderRadius: (r: number) =>
        setLive((p) => ({ ...p, borderRadius: r })),
      setBorderWidth: (w: number) => setLive((p) => ({ ...p, borderWidth: w })),
      setTracking: (t: number) => setLive((p) => ({ ...p, tracking: t })),
      setLineHeight: (lh: number) => setLive((p) => ({ ...p, lineHeight: lh })),
      setDensity: (d: number) => setLive((p) => ({ ...p, density: d })),
      saveThemeCustomization,
      resetThemeCustomization,
      hasThemeOverrides,
      isCustomized,
    }),
    [
      settings,
      save,
      live,
      resolvedTheme,
      saveThemeCustomization,
      resetThemeCustomization,
      hasThemeOverrides,
      isCustomized,
    ],
  );

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}
