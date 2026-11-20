/**
 * Where popups rendered inside it portal to. A modal surface (Dialog,
 * SideSheet, MobileDrawer) provides its own panel, so a menu or popover
 * opened inside it is a DOM descendant of the `aria-modal` element: screen
 * readers in modal mode can reach it, and the surface's focus trap counts its
 * items. `null` (the default, and while the surface mounts) means
 * `document.body`.
 *
 * The provided element must not clip overflow (a popup is `position: fixed`
 * and is clipped by an overflow ancestor that is also its containing block,
 * as a transformed panel is) and should be the `aria-modal` element itself.
 * Popups are appended as its last children, so styling that relies on
 * `:last-child` or sibling order among its children (`space-y-*`,
 * `divide-y`) should go on an inner wrapper instead.
 */
export declare const PortalContainerContext: import("react").Context<HTMLElement | null>;
/**
 * The element popups rendered here should portal into, or `null` for
 * `document.body`: `createPortal(popup, container ?? document.body)`.
 */
export declare function usePortalContainer(): HTMLElement | null;
/**
 * For a surface that provides a portal container: returns the mounted
 * element (state, so the context updates when it mounts) and a stable
 * callback ref that also keeps `ref` (the surface's own ref) in step.
 */
export declare function usePortalContainerRef<T extends HTMLElement>(ref: {
    current: T | null;
}): readonly [T | null, (element: T | null) => void];
//# sourceMappingURL=usePortalContainer.d.ts.map