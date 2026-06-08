import { type ReactNode } from "react";
import type { CommandPaletteShortcut } from "./commandPaletteEvents";
import type { AppShellNavigate } from "./navigation";
import type { AppShellAccount, AppShellBrand, AppShellBreadcrumbOptions, AppShellNavItem, AppShellNavSection } from "./types";
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
export declare function AppShell({ children, navSections, brand, accounts, bottomNavItems, commandItems, breadcrumbs, initialAccountIndex, onAccountChange, onSignOut, signOutPath, signOutLabel, settingsPath, settingsLabel, onOpenSettings, showCommandPalette, showCommandTrigger, commandTriggerLabel, commandShortcut, currentPath, onNavigate, mainClassName, className, }: AppShellProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AppShell.d.ts.map