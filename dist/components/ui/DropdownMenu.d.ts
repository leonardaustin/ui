import { type ReactNode } from "react";
interface DropdownContentItem {
    label: string;
    icon?: ReactNode;
    shortcut?: string;
    checked?: boolean;
    onClick: () => void;
    danger?: boolean;
    divider?: false;
}
interface DropdownDivider {
    divider: true;
}
export type DropdownItem = DropdownContentItem | DropdownDivider;
interface DropdownMenuProps {
    trigger: ReactNode;
    items: DropdownItem[];
    align?: "left" | "right";
}
/**
 * Menu whose panel portals to document.body. Position is captured from the
 * trigger rect at open time and not recomputed, so it does not reposition on
 * scroll/resize while open.
 */
export declare function DropdownMenu({ trigger, items, align, }: DropdownMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DropdownMenu.d.ts.map