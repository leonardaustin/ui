import type { ComponentType, ReactNode } from "react";
export type AppShellIcon = ComponentType<{
    className?: string;
}>;
export interface AppShellBrand {
    name: string;
    icon?: AppShellIcon;
    logo?: ReactNode;
}
export interface AppShellNavItem {
    label: string;
    path: string;
    icon: AppShellIcon;
    badge?: ReactNode;
    shortLabel?: string;
    keywords?: string[];
    end?: boolean;
}
export interface AppShellNavSection {
    title: string;
    items: AppShellNavItem[];
}
export interface AppShellAccount {
    name: string;
    email?: string;
    role?: string;
    avatarSrc?: string;
}
export interface AppShellBreadcrumbOptions {
    homeLabel?: string;
    labels?: Record<string, string>;
    parents?: Record<string, string>;
}
//# sourceMappingURL=types.d.ts.map