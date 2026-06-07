import {
  Menu,
  Monitor,
  Moon,
  PanelLeft,
  PanelLeftDashed,
  Search,
  Sun,
} from "lucide-react";

import { useSettings } from "../../hooks/useSettings";
import type { ColorMode } from "../../providers/SettingsContext";
import { Breadcrumbs } from "./Breadcrumbs";
import {
  DEFAULT_COMMAND_PALETTE_SHORTCUT,
  openCommandPalette,
  type CommandPaletteShortcut,
} from "./commandPaletteEvents";
import type { AppShellNavigate } from "./navigation";
import type { AppShellBreadcrumbOptions } from "./types";

const MODE_ORDER: ColorMode[] = ["dark", "light", "system"];
const MODE_ICONS = { dark: Moon, light: Sun, system: Monitor };
const MODE_LABELS = { dark: "Dark", light: "Light", system: "System" };

export interface TopBarProps {
  onMobileMenuToggle?: () => void;
  breadcrumbs?: AppShellBreadcrumbOptions | false;
  showCommandTrigger?: boolean;
  commandTriggerLabel?: string;
  commandShortcut?: CommandPaletteShortcut;
  currentPath?: string;
  onNavigate?: AppShellNavigate;
  onCommandTrigger?: () => void;
}

export function TopBar({
  onMobileMenuToggle,
  breadcrumbs,
  showCommandTrigger = true,
  commandTriggerLabel = "Search",
  commandShortcut = DEFAULT_COMMAND_PALETTE_SHORTCUT,
  currentPath,
  onNavigate,
  onCommandTrigger,
}: TopBarProps) {
  const { sidebarCollapsed, setSidebarCollapsed, colorMode, setColorMode } =
    useSettings();

  function cycleMode() {
    const index = MODE_ORDER.indexOf(colorMode);
    setColorMode(MODE_ORDER[(index + 1) % MODE_ORDER.length]);
  }

  const Icon = MODE_ICONS[colorMode];

  return (
    <header
      className="border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3"
      style={{ height: "var(--topbar-height)" }}
    >
      <div className="flex items-center gap-2">
        <button
          onClick={onMobileMenuToggle}
          className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-4 w-4" />
        </button>

        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex"
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? (
            <PanelLeftDashed className="h-4 w-4" />
          ) : (
            <PanelLeft className="h-4 w-4" />
          )}
        </button>

        {breadcrumbs !== false && (
          <>
            <div className="bg-border hidden h-4 w-px md:block" />
            <Breadcrumbs
              {...breadcrumbs}
              currentPath={currentPath}
              onNavigate={onNavigate}
            />
          </>
        )}
      </div>

      <div className="flex items-center gap-1">
        {showCommandTrigger && (
          <button
            onClick={onCommandTrigger ?? (() => openCommandPalette())}
            className="text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex"
          >
            <Search className="h-3 w-3" />
            <span className="text-2xs">{commandTriggerLabel}</span>
            <kbd className="text-2xs font-mono opacity-60">
              {commandShortcut.label}
            </kbd>
          </button>
        )}
        <button
          onClick={cycleMode}
          className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded"
          aria-label={`Color mode: ${MODE_LABELS[colorMode]}. Click to cycle.`}
          title={MODE_LABELS[colorMode]}
        >
          <Icon className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
