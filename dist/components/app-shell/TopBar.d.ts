import type { ReactNode } from "react";
import { type CommandPaletteShortcut } from "./commandPaletteEvents";
import { type AppShellNavigate } from "./navigation";
import type { AppShellBreadcrumbOptions, AppShellTopBarNavItem } from "./types";
export interface TopBarProps {
    /** Called when the menu button (shown below the `md` breakpoint) is clicked. */
    onMobileMenuToggle?: () => void;
    /** Breadcrumb label options. Pass `false` to hide breadcrumbs; ignored when `navItems` is non-empty. */
    breadcrumbs?: AppShellBreadcrumbOptions | false;
    /** Links shown in place of the breadcrumbs, hidden below the `md` breakpoint. */
    navItems?: AppShellTopBarNavItem[];
    /** Accessible label for the nav links. Defaults to "Primary". */
    navLabel?: string;
    /** Show the search button that opens the command palette. Defaults to `true`. */
    showCommandTrigger?: boolean;
    /** Label on the search button. Defaults to "Search". */
    commandTriggerLabel?: string;
    /** Shortcut whose label is shown on the search button. Defaults to ⌘K. */
    commandShortcut?: CommandPaletteShortcut;
    /** Current location pathname, used for breadcrumbs and to mark the active nav item. */
    currentPath?: string;
    /** Called with the target path on a plain left-click of a crumb or nav link, for client-side routing. */
    onNavigate?: AppShellNavigate;
    /** Called when the search button is clicked. Defaults to opening the command palette. */
    onCommandTrigger?: () => void;
    /** Extra content rendered at the right of the bar, before the search button. */
    actions?: ReactNode;
}
export declare function TopBar({ onMobileMenuToggle, breadcrumbs, navItems, navLabel, showCommandTrigger, commandTriggerLabel, commandShortcut, currentPath, onNavigate, onCommandTrigger, actions, }: TopBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TopBar.d.ts.map