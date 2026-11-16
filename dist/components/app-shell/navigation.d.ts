import type { MouseEvent } from "react";
export type AppShellNavigate = (path: string) => void;
interface AppShellPathMatchItem {
    path: string;
    end?: boolean;
    active?: boolean;
}
export declare function isAppShellPathActive(item: AppShellPathMatchItem, currentPath?: string): boolean;
export declare function handleAppShellNavigate(event: MouseEvent<HTMLAnchorElement>, path: string, onNavigate?: AppShellNavigate, onAfterNavigate?: () => void): void;
export declare function navigateToPath(path: string, onNavigate?: AppShellNavigate): void;
export {};
//# sourceMappingURL=navigation.d.ts.map