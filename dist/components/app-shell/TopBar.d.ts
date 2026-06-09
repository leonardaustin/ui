import type { ReactNode } from "react";
import { type CommandPaletteShortcut } from "./commandPaletteEvents";
import type { AppShellNavigate } from "./navigation";
import type { AppShellBreadcrumbOptions } from "./types";
export interface TopBarProps {
    onMobileMenuToggle?: () => void;
    breadcrumbs?: AppShellBreadcrumbOptions | false;
    showCommandTrigger?: boolean;
    commandTriggerLabel?: string;
    commandShortcut?: CommandPaletteShortcut;
    currentPath?: string;
    onNavigate?: AppShellNavigate;
    onCommandTrigger?: () => void;
    actions?: ReactNode;
}
export declare function TopBar({ onMobileMenuToggle, breadcrumbs, showCommandTrigger, commandTriggerLabel, commandShortcut, currentPath, onNavigate, onCommandTrigger, actions, }: TopBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TopBar.d.ts.map