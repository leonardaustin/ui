import { type ReactNode } from "react";
import { type AppShellNavigate } from "./navigation";
import type { AppShellBrand, AppShellNavItem, AppShellTopBarNavItem } from "./types";
export interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
    items: AppShellNavItem[];
    topBarNavItems?: AppShellTopBarNavItem[];
    topBarNavLabel?: string;
    brand: AppShellBrand;
    currentPath?: string;
    onNavigate?: AppShellNavigate;
    headerActions?: ReactNode;
    className?: string;
}
export declare function MobileDrawer({ open, onClose, items, topBarNavItems, topBarNavLabel, brand, currentPath, onNavigate, headerActions, className, }: MobileDrawerProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=MobileDrawer.d.ts.map