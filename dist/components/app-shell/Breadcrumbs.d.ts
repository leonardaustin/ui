import { type AppShellNavigate } from "./navigation";
import type { AppShellBreadcrumbOptions } from "./types";
export interface BreadcrumbsProps extends AppShellBreadcrumbOptions {
    /** Pathname to build the trail from, one crumb per segment after the home crumb. Defaults to "/". Any query string is ignored. */
    currentPath?: string;
    /** Called with the crumb path on a plain left-click, for client-side routing. */
    onNavigate?: AppShellNavigate;
    /** Extra classes for the `<nav>`. */
    className?: string;
}
export declare function Breadcrumbs({ homeLabel, labels, parents, currentPath, onNavigate, className, }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Breadcrumbs.d.ts.map