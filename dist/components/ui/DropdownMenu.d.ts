import { type AnchorHTMLAttributes, type ReactNode, type RefAttributes } from "react";
interface DropdownItemContent {
    label: string;
    icon?: ReactNode;
    shortcut?: string;
    /** Content shown after the label, such as a count or Badge. */
    badge?: ReactNode;
    /**
     * Shows a check mark. Setting it (true or false) makes the item a
     * `menuitemcheckbox` (or `menuitemradio`, see `type`) with `aria-checked`.
     */
    checked?: boolean;
    /**
     * How a checkable item is announced: `checkbox` (an independent toggle,
     * the default) or `radio` (one choice of several). Only used with
     * `checked`.
     */
    type?: "checkbox" | "radio";
    /**
     * Shown dimmed with `aria-disabled`; skipped by the arrow keys and
     * typeahead, and does nothing when clicked.
     */
    disabled?: boolean;
    danger?: boolean;
    divider?: false;
}
export interface DropdownActionItem extends DropdownItemContent {
    href?: never;
    onClick: () => void;
}
export interface DropdownLinkItem extends DropdownItemContent {
    href: string;
    target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
    rel?: string;
    download?: AnchorHTMLAttributes<HTMLAnchorElement>["download"];
    "aria-current"?: AnchorHTMLAttributes<HTMLAnchorElement>["aria-current"];
    onClick?: () => void;
}
type DropdownContentItem = DropdownActionItem | DropdownLinkItem;
interface DropdownDivider {
    divider: true;
}
export type DropdownItem = DropdownContentItem | DropdownDivider;
interface DropdownMenuProps {
    /**
     * The element that toggles the menu, usually a `Button`. It receives
     * `aria-haspopup`, `aria-expanded`, `aria-controls` and (unless it has one)
     * an `id` that labels the menu. Plain text is wrapped in a focusable
     * `role="button"`.
     */
    trigger: ReactNode;
    /** Menu entries: actions, links (`label` + `href`), and dividers. */
    items: DropdownItem[];
    /** Informational content above, and outside, the menu items. */
    header?: ReactNode;
    /** Render a real anchor and forward every supplied prop, including ref. */
    renderLink?: (props: AnchorHTMLAttributes<HTMLAnchorElement> & RefAttributes<HTMLAnchorElement>, item: DropdownLinkItem) => ReactNode;
    /**
     * Which trigger edge the menu lines up with: `right` (the default) keeps
     * right edges together, `left` keeps left edges together. Near a viewport
     * edge the menu shifts to stay on screen, and opens above the trigger when
     * there is no room below.
     */
    align?: "left" | "right";
}
/**
 * A menu button: the trigger opens a menu of actions portalled to
 * document.body (or, inside a Dialog, SideSheet or MobileDrawer, into that
 * surface, so it stays within the modal for assistive technology and the
 * focus trap) and kept against the trigger (flipping above it near the
 * bottom of the viewport, following it on scroll and resize).
 *
 * Keyboard: Enter, Space or ArrowDown on the trigger opens on the first item,
 * ArrowUp on the last. In the menu, ArrowUp/ArrowDown move and wrap,
 * Home/End jump, a letter jumps to the next item starting with it, Enter or
 * Space activates. Escape closes and returns focus to the trigger, as does
 * choosing an item; Tab closes and moves on. Disabled items are skipped.
 */
export declare function DropdownMenu({ trigger, items, header, renderLink, align, }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownMenu.d.ts.map