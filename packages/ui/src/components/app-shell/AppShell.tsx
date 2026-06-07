import { useMemo, useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";
import { BottomNav } from "./BottomNav";
import { CommandPalette } from "./CommandPalette";
import type { CommandPaletteShortcut } from "./commandPaletteEvents";
import { MobileDrawer } from "./MobileDrawer";
import type { AppShellNavigate } from "./navigation";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import type {
  AppShellAccount,
  AppShellBrand,
  AppShellBreadcrumbOptions,
  AppShellNavItem,
  AppShellNavSection,
} from "./types";

export interface AppShellProps {
  children?: ReactNode;
  navSections: AppShellNavSection[];
  brand: AppShellBrand;
  accounts?: AppShellAccount[];
  bottomNavItems?: AppShellNavItem[];
  commandItems?: AppShellNavItem[];
  breadcrumbs?: AppShellBreadcrumbOptions | false;
  initialAccountIndex?: number;
  onAccountChange?: (account: AppShellAccount, index: number) => void;
  onSignOut?: () => void;
  signOutPath?: string;
  signOutLabel?: string;
  settingsPath?: string;
  settingsLabel?: string;
  onOpenSettings?: () => void;
  showCommandPalette?: boolean;
  showCommandTrigger?: boolean;
  commandTriggerLabel?: string;
  commandShortcut?: CommandPaletteShortcut;
  currentPath?: string;
  onNavigate?: AppShellNavigate;
  mainClassName?: string;
  className?: string;
}

/**
 * Top-level app chrome: sidebar, top bar, mobile drawer, and bottom nav around
 * the routed `children`. A leading skip link jumps focus to the `#main-content`
 * <main>. When `showCommandPalette` is on it mounts a CommandPalette bound to
 * `commandShortcut` (default ⌘K) whose searchable items default to the
 * flattened `navSections` (override via `commandItems`).
 */
export function AppShell({
  children,
  navSections,
  brand,
  accounts,
  bottomNavItems = [],
  commandItems,
  breadcrumbs,
  initialAccountIndex,
  onAccountChange,
  onSignOut,
  signOutPath,
  signOutLabel,
  settingsPath,
  settingsLabel,
  onOpenSettings,
  showCommandPalette = true,
  showCommandTrigger = true,
  commandTriggerLabel,
  commandShortcut,
  currentPath,
  onNavigate,
  mainClassName,
  className,
}: AppShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerItems = useMemo(
    () => navSections.flatMap((section) => section.items),
    [navSections],
  );
  const searchableItems = commandItems ?? drawerItems;

  return (
    <div className={cn("bg-bg-primary flex h-svh overflow-hidden", className)}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Sidebar
        navSections={navSections}
        brand={brand}
        accounts={accounts}
        initialAccountIndex={initialAccountIndex}
        onAccountChange={onAccountChange}
        onSignOut={onSignOut}
        signOutPath={signOutPath}
        signOutLabel={signOutLabel}
        settingsPath={settingsPath}
        settingsLabel={settingsLabel}
        onOpenSettings={onOpenSettings}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar
          onMobileMenuToggle={() => setMobileMenuOpen(true)}
          breadcrumbs={breadcrumbs}
          showCommandTrigger={showCommandPalette && showCommandTrigger}
          commandTriggerLabel={commandTriggerLabel}
          commandShortcut={commandShortcut}
          currentPath={currentPath}
          onNavigate={onNavigate}
        />

        <main
          id="main-content"
          className={cn(
            "flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6",
            mainClassName,
          )}
        >
          {children}
        </main>
      </div>

      <BottomNav
        items={bottomNavItems}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      <MobileDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={drawerItems}
        brand={brand}
        currentPath={currentPath}
        onNavigate={onNavigate}
      />
      {showCommandPalette && searchableItems.length > 0 && (
        <CommandPalette
          items={searchableItems}
          shortcut={commandShortcut}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
