import { type ReactNode } from "react";
import { type AppShellNavigate } from "./navigation";
import type { AppShellBrand, AppShellNavItem, AppShellTopBarNavItem } from "./types";
export interface MobileDrawerProps {
    /** Whether the drawer is shown. It renders nothing when `false`. Hidden at the `md` breakpoint and above. */
    open: boolean;
    /**
     * Called to close the drawer: Escape, a tap on the backdrop, the close
     * button, a plain left-click on any link (after `onNavigate`, if set), or a
     * click on a top bar item with `reloadDocument`.
     */
    onClose: () => void;
    /** Primary navigation links listed in the drawer. */
    items: AppShellNavItem[];
    /**
     * Top bar links to repeat in the drawer, in a labelled group above `items`,
     * for destinations that are hidden from the top bar on small screens. Defaults
     * to none, which omits the group.
     */
    topBarNavItems?: AppShellTopBarNavItem[];
    /** Accessible label for the `topBarNavItems` group. Defaults to "Primary". */
    topBarNavLabel?: string;
    /** Brand shown in the drawer header: a custom `logo`, or an `icon` and `name`. */
    brand: AppShellBrand;
    /**
     * The current location, used to mark the matching link active
     * (`aria-current="page"`). A link matches when `currentPath` equals its
     * `path` or sits beneath it; with `end` (the default for `/`) only an exact
     * match counts. Nothing is active when this is omitted, except top bar
     * items that set `active`, which use that value regardless of this path.
     */
    currentPath?: string;
    /**
     * Called with a link's `path` (not its `href`) on a plain left-click, which
     * is then prevented from loading the page; use it for client-side routing.
     * Without it, links are ordinary anchors and the browser navigates. It is
     * never called for top bar items with `reloadDocument`, which do a full
     * page load to `href ?? path`.
     */
    onNavigate?: AppShellNavigate;
    /** Extra content in a full-width strip below the header bar (brand and close button). */
    headerActions?: ReactNode;
    /** Additional utility classes for the drawer panel. */
    className?: string;
}
export declare function MobileDrawer({ open, onClose, items, topBarNavItems, topBarNavLabel, brand, currentPath, onNavigate, headerActions, className, }: MobileDrawerProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=MobileDrawer.d.ts.map