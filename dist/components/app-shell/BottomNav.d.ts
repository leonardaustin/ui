import { type AppShellNavigate } from "./navigation";
import type { AppShellNavItem } from "./types";
export interface BottomNavProps {
    items: AppShellNavItem[];
    currentPath?: string;
    onNavigate?: AppShellNavigate;
    className?: string;
}
export declare function BottomNav({ items, currentPath, onNavigate, className, }: BottomNavProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=BottomNav.d.ts.map