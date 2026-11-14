import { type ReactNode } from "react";
import type { CommandPaletteShortcut } from "./commandPaletteEvents";
import type { AppShellNavigate } from "./navigation";
import type { AppShellAccount, AppShellBrand, AppShellBreadcrumbOptions, AppShellNavItem, AppShellNavSection, AppShellTopBarNavItem } from "./types";
export interface AppShellProps {
    /** Routed page content, rendered inside the `#main-content` <main>. */
    children?: ReactNode;
    /** Titled groups of nav items for the sidebar; also the mobile drawer items and the default command palette items. */
    navSections: AppShellNavSection[];
    /** Brand name plus optional icon or full logo shown at the top of the sidebar and mobile drawer. */
    brand: AppShellBrand;
    /** Accounts offered in the sidebar account switcher. The switcher is hidden when omitted or empty. */
    accounts?: AppShellAccount[];
    /** Items for the mobile bottom tab bar. Defaults to none. */
    bottomNavItems?: AppShellNavItem[];
    /** Items searchable in the command palette. Defaults to the flattened `navSections`. */
    commandItems?: AppShellNavItem[];
    /** Breadcrumb label options for the top bar. Pass `false` to hide breadcrumbs; ignored when `topBarNavItems` is non-empty. */
    breadcrumbs?: AppShellBreadcrumbOptions | false;
    /** Index of the account active on first render. Defaults to the first account. */
    initialAccountIndex?: number;
    /** Called with the account and its index when the user switches accounts. */
    onAccountChange?: (account: AppShellAccount, index: number) => void;
    /** Called when the sign out item is clicked. Takes precedence over `signOutPath`; the item is hidden if neither is set. */
    onSignOut?: () => void;
    /** Path navigated to on sign out when `onSignOut` is not provided. */
    signOutPath?: string;
    /** Label for the sign out item. Defaults to "Sign out". */
    signOutLabel?: string;
    /** Path navigated to by the settings menu link when `onOpenSettings` is not provided. */
    settingsPath?: string;
    /** Label for the settings menu link. Defaults to "All Settings". */
    settingsLabel?: string;
    /** Called when the settings menu link is clicked. Takes precedence over `settingsPath`; the link is hidden if neither is set. */
    onOpenSettings?: () => void;
    /** Mount the command palette and its keyboard shortcut. Defaults to `true`. */
    showCommandPalette?: boolean;
    /** Show the search button in the top bar that opens the command palette. Defaults to `true`; also requires `showCommandPalette`. */
    showCommandTrigger?: boolean;
    /** Label on the top bar command palette button. Defaults to "Search". */
    commandTriggerLabel?: string;
    /** Keyboard shortcut that toggles the command palette, also shown on the trigger button. Defaults to ⌘K. */
    commandShortcut?: CommandPaletteShortcut;
    /** Extra content rendered in the sidebar header (and the mobile drawer header). */
    sidebarHeaderActions?: ReactNode;
    /** Extra content rendered at the right of the top bar, before the command trigger. */
    topBarActions?: ReactNode;
    /** Links shown in the top bar and mobile drawer. When non-empty they replace the breadcrumbs. */
    topBarNavItems?: AppShellTopBarNavItem[];
    /** Accessible label for the top bar navigation. Defaults to "Primary". */
    topBarNavLabel?: string;
    /** Current location pathname, used to highlight active nav items and build breadcrumbs. */
    currentPath?: string;
    /** Called with the target path when a nav link is clicked (plain left-clicks only), so a client router can handle it. Without it, links use normal browser navigation. */
    onNavigate?: AppShellNavigate;
    /** Extra classes for the `<main>` content area. */
    mainClassName?: string;
    /** Extra classes for the outer shell element. */
    className?: string;
}
/**
 * Top-level app chrome: sidebar, top bar, mobile drawer, and bottom nav around
 * the routed `children`. A leading skip link jumps focus to the `#main-content`
 * <main>. When `showCommandPalette` is on it mounts a CommandPalette bound to
 * `commandShortcut` (default ⌘K) whose searchable items default to the
 * flattened `navSections` (override via `commandItems`).
 */
export declare function AppShell({ children, navSections, brand, accounts, bottomNavItems, commandItems, breadcrumbs, initialAccountIndex, onAccountChange, onSignOut, signOutPath, signOutLabel, settingsPath, settingsLabel, onOpenSettings, showCommandPalette, showCommandTrigger, commandTriggerLabel, commandShortcut, sidebarHeaderActions, topBarActions, topBarNavItems, topBarNavLabel, currentPath, onNavigate, mainClassName, className, }: AppShellProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AppShell.d.ts.map