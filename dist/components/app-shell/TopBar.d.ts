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
}
export declare function TopBar({ onMobileMenuToggle, breadcrumbs, showCommandTrigger, commandTriggerLabel, commandShortcut, currentPath, onNavigate, onCommandTrigger, }: TopBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TopBar.d.ts.map