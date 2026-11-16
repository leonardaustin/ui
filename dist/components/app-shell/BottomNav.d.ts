import { type AppShellNavigate } from "./navigation";
import type { AppShellNavItem } from "./types";
export interface BottomNavProps {
    /**
     * Destinations, shown as icon-over-label links in order. Each item's
     * `shortLabel` is shown instead of `label` when set. Renders nothing when
     * empty.
     */
    items: AppShellNavItem[];
    /**
     * The current location, used to mark the matching item active
     * (`aria-current="page"`). An item matches when `currentPath` equals its
     * `path` or sits beneath it; with `end` (the default for `/`) only an exact
     * match counts. Nothing is active when this is omitted.
     */
    currentPath?: string;
    /**
     * Called with the item's path on a plain left-click, which is then
     * prevented from loading the page; use it for client-side routing. Without
     * it, links are ordinary anchors and the browser navigates to `path`.
     */
    onNavigate?: AppShellNavigate;
    /** Additional utility classes for the `<nav>` element. */
    className?: string;
}
export declare function BottomNav({ items, currentPath, onNavigate, className, }: BottomNavProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=BottomNav.d.ts.map