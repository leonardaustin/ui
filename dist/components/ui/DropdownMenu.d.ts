import { type ReactNode } from "react";
interface DropdownContentItem {
    label: string;
    icon?: ReactNode;
    shortcut?: string;
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
    onClick: () => void;
    danger?: boolean;
    divider?: false;
}
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
    /** Menu entries: actions (`label` + `onClick`) and `{ divider: true }`. */
    items: DropdownItem[];
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
 * document.body and kept against the trigger (flipping above it near the
 * bottom of the viewport, following it on scroll and resize).
 *
 * Keyboard: Enter, Space or ArrowDown on the trigger opens on the first item,
 * ArrowUp on the last. In the menu, ArrowUp/ArrowDown move and wrap,
 * Home/End jump, a letter jumps to the next item starting with it, Enter or
 * Space activates. Escape closes and returns focus to the trigger, as does
 * choosing an item; Tab closes and moves on. Disabled items are skipped.
 */
export declare function DropdownMenu({ trigger, items, align, }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownMenu.d.ts.map