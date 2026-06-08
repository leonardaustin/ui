import { type AppShellNavigate } from "./navigation";
import type { AppShellAccount, AppShellBrand, AppShellNavSection } from "./types";
export interface SidebarProps {
    navSections: AppShellNavSection[];
    brand: AppShellBrand;
    accounts?: AppShellAccount[];
    initialAccountIndex?: number;
    onAccountChange?: (account: AppShellAccount, index: number) => void;
    onSignOut?: () => void;
    signOutPath?: string;
    signOutLabel?: string;
    settingsPath?: string;
    settingsLabel?: string;
    onOpenSettings?: () => void;
    currentPath?: string;
    onNavigate?: AppShellNavigate;
    className?: string;
}
export declare function Sidebar({ navSections, brand, accounts, initialAccountIndex, onAccountChange, onSignOut, signOutPath, signOutLabel, settingsPath, settingsLabel, onOpenSettings, currentPath, onNavigate, className, }: SidebarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Sidebar.d.ts.map