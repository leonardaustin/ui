import { type AppShellNavigate } from "./navigation";
import type { AppShellBreadcrumbOptions } from "./types";
export interface BreadcrumbsProps extends AppShellBreadcrumbOptions {
    currentPath?: string;
    onNavigate?: AppShellNavigate;
    className?: string;
}
export declare function Breadcrumbs({ homeLabel, labels, parents, currentPath, onNavigate, className, }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Breadcrumbs.d.ts.map