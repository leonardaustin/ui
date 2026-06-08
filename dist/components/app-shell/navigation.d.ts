import type { MouseEvent } from "react";
import type { AppShellNavItem } from "./types";
export type AppShellNavigate = (path: string) => void;
export declare function isAppShellPathActive(item: AppShellNavItem, currentPath?: string): boolean;
export declare function handleAppShellNavigate(event: MouseEvent<HTMLAnchorElement>, path: string, onNavigate?: AppShellNavigate, onAfterNavigate?: () => void): void;
export declare function navigateToPath(path: string, onNavigate?: AppShellNavigate): void;
//# sourceMappingURL=navigation.d.ts.map