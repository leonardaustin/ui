/**
 * ColumnPicker — a dropdown for toggling table column visibility.
 *
 * Extracted from Tables.tsx. Renders a FilterButton trigger that opens a
 * checklist of toggleable columns. Uses `useDismiss` to close on outside
 * click or Escape.
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
interface ColumnDef {
    /** Unique column key. */
    key: string;
    /** Display label for the column header. */
    header: string;
}
interface ColumnPickerProps {
    /** List of toggleable columns (exclude utility columns like select/actions). */
    columns: ColumnDef[];
    /** Set of currently hidden column keys. */
    hidden: Set<string>;
    /** Called when a column's visibility is toggled. */
    onToggle: (key: string) => void;
}
export declare function ColumnPicker({ columns, hidden, onToggle }: ColumnPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ColumnPicker.d.ts.map