import { type AppShellNavigate } from "./navigation";
import type { AppShellBrand, AppShellNavItem } from "./types";
export interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
    items: AppShellNavItem[];
    brand: AppShellBrand;
    currentPath?: string;
    onNavigate?: AppShellNavigate;
    className?: string;
}
export declare function MobileDrawer({ open, onClose, items, brand, currentPath, onNavigate, className, }: MobileDrawerProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=MobileDrawer.d.ts.map