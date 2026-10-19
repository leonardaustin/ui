/**
 * ColumnPicker — a dropdown for toggling table column visibility.
 *
 * Extracted from Tables.tsx. Renders a FilterButton trigger that opens a
 * checklist of toggleable columns. Uses `useDismiss` to close on outside
 * click or Escape. Give columns a `group` to list them under headings, and
 * pass `onOnly` and `footer` to use it as a multi-select filter (e.g. which
 * people and rooms a calendar shows).
 *
 * @example
 * ```tsx
 * <ColumnPicker
 *   columns={columns.filter((c) => c.key !== "select" && c.key !== "actions")}
 *   hidden={hiddenCols}
 *   onToggle={toggleCol}
 * />
 * ```
 */
import { type ElementType, type ReactNode } from "react";
interface ColumnDef {
    /** Unique column key. */
    key: string;
    /** Display label for the column header. */
    header: string;
    /** Heading to list this column under; consecutive columns share one. */
    group?: string;
}
interface ColumnPickerProps {
    /** List of toggleable columns (exclude utility columns like select/actions). */
    columns: ColumnDef[];
    /** Set of currently hidden column keys. */
    hidden: Set<string>;
    /** Called when a column's visibility is toggled. */
    onToggle: (key: string) => void;
    /** Trigger text. Defaults to "Columns". */
    label?: string;
    /** Heading for ungrouped columns. Defaults to "Toggle columns". */
    heading?: string;
    /** Trigger icon. Defaults to a columns icon. */
    icon?: ElementType;
    /** Adds an "Only" shortcut to each row that shows just that column. */
    onOnly?: (key: string) => void;
    /** Text of the `onOnly` shortcut. Defaults to "Only". */
    onlyLabel?: string;
    /** Content below the list, e.g. "Select all" actions. */
    footer?: ReactNode;
}
export declare function ColumnPicker({ columns, hidden, onToggle, label, heading, icon, onOnly, onlyLabel, footer, }: ColumnPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ColumnPicker.d.ts.map