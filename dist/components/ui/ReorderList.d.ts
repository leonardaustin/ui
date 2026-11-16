import { type Key, type ReactNode } from "react";
export interface ReorderListProps<T> {
    items: T[];
    /** Unique, stable identity; never use the item's current index. */
    getKey: (item: T) => Key;
    /** Row content only; the list provides the li and action controls. */
    renderItem: (item: T, index: number) => ReactNode;
    onReorder: (nextItems: T[]) => void;
    /** Optional removal action. The caller owns updating items after removal. */
    onRemove?: (item: T, index: number) => void;
    /** Human-readable name used by controls and move announcements. */
    getItemLabel: (item: T) => string;
    /** Caller-owned add control(s), rendered below the list. */
    addButton?: ReactNode;
    /** Disable list actions; caller-owned content and add controls manage their own disabled state. */
    disabled?: boolean;
}
export declare function ReorderList<T>({ items, getKey, renderItem, onReorder, onRemove, getItemLabel, addButton, disabled, }: ReorderListProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReorderList.d.ts.map