import { type ComponentPropsWithRef, type ReactNode } from "react";
import { type AppShellNavigate } from "./navigation";
import type { AppShellAccount, AppShellBrand, AppShellNavSection } from "./types";
export interface SidebarProps extends Omit<ComponentPropsWithRef<"aside">, "children"> {
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
    headerActions?: ReactNode;
    className?: string;
}
export declare function Sidebar({ navSections, brand, accounts, initialAccountIndex, onAccountChange, onSignOut, signOutPath, signOutLabel, settingsPath, settingsLabel, onOpenSettings, currentPath, onNavigate, headerActions, className, style, ref, ...rest }: SidebarProps): import("react/jsx-runtime").JSX.Element;
