import { type HTMLAttributes, type ReactNode, type TableHTMLAttributes } from "react";
import { type SortDir } from "./sortRows";
export interface Column<T> {
    /** Unique id for the column. Used as the React key and as the sort key. */
    key: string;
    /** Content of the column header cell. */
    header: ReactNode;
    /**
     * Accessible name for the sort button, replacing the header text for
     * screen readers (for example "Sort by name"). Only used when `sortable`.
     */
    sortLabel?: string;
    /** CSS width of the column, such as "120px" or "20%". */
    width?: string;
    /**
     * Make the header a button that sorts by this column; clicking the active
     * column flips between ascending and descending. Without `onSortChange`
     * the table sorts rows itself, which also needs `getValue`.
     */
    sortable?: boolean;
    /**
     * Mark a column as interactive to prevent clicks inside it from
     * triggering `onRowClick`. Use this for columns that contain buttons,
     * checkboxes, dropdown menus, or other clickable elements.
     *
     * @example
     * ```tsx
     * { key: "select", interactive: true, render: (row) => <Checkbox ... /> }
     * { key: "actions", interactive: true, render: (row) => <DropdownMenu ... /> }
     * ```
     */
    interactive?: boolean;
    /** Extra classes for this column's body cells. */
    cellClassName?: string;
    /**
     * The value to sort this column by. Compared as text, locale-aware and
     * numeric-aware ("item 2" before "item 10"). Without it, the table can't
     * sort rows by this column itself; with controlled sorting it isn't used.
     */
    getValue?: (row: T) => string | number;
    /** Renders the cell content for a row. */
    render: (row: T) => ReactNode;
}
export interface ResourceTableProps<T> {
    /** The rows to display. */
    data: T[];
    /** Column definitions, in display order. */
    columns: Column<T>[];
    /** Returns a stable, unique id for a row, used as its React key. */
    getRowId: (row: T) => string | number;
    /**
     * Called when a row is clicked. Makes rows focusable, so Enter or Space on
     * a focused row calls it too; Enter or Space inside a control in the row
     * does not. Clicks in `interactive` columns, and ones whose `getRowProps`
     * `onClick` called `preventDefault`, are skipped.
     */
    onRowClick?: (row: T) => void;
    /** Shown in place of the rows when `data` is empty. Defaults to "No data". */
    emptyMessage?: ReactNode;
    /** Table caption, shown above the header. */
    caption?: ReactNode;
    /**
     * Marks the table busy (`aria-busy`) and announces `loadingMessage` to
     * screen readers. When `data` is empty, the message also replaces
     * `emptyMessage`. Rows already in `data` stay visible. Defaults to `false`.
     */
    loading?: boolean;
    /** Message shown (and announced) while `loading`. Defaults to "Loading…". */
    loadingMessage?: ReactNode;
    /** Additional utility classes for the scrolling wrapper around the table. */
    className?: string;
    /**
     * Extra props for the `<table>` element (for example `aria-label`). Its
     * `className` and `style` are merged with the table's own.
     */
    tableProps?: Omit<TableHTMLAttributes<HTMLTableElement>, "children">;
    /**
     * Returns extra props for a row's `<tr>`, such as `className`, `onClick` or
     * `data-*` attributes. Its `className` is merged, and its `onClick` and
     * `onKeyDown` run before the table's own handling.
     */
    getRowProps?: (row: T) => HTMLAttributes<HTMLTableRowElement>;
    /**
     * Returns whether a row is selected. Selected rows get a highlighted
     * background and `data-selected`; `aria-selected` is not set. Falls back to
     * an `aria-selected` returned by `getRowProps`.
     */
    isRowSelected?: (row: T) => boolean;
    /**
     * Controlled sort key. Provide together with `onSortChange` to make
     * sorting controlled — the table then renders `data` as-is and the caller
     * is responsible for ordering it.
     */
    sortKey?: string | null;
    /** Controlled sort direction. Used with `sortKey`/`onSortChange`. */
    sortDir?: SortDir;
    /**
     * Called when a sortable header is clicked. When provided, the table is
     * controlled: it does NOT sort `data` itself and the caller must order the
     * data to match. When omitted, the table sorts `data` internally.
     */
    onSortChange?: (key: string | null, dir: SortDir) => void;
}
/**
 * Sorting: by default ResourceTable sorts client-side over the `data` prop.
 * If you paginate (slice `data` to a single page), use controlled sorting
 * (`sortKey`/`sortDir`/`onSortChange`) and sort the FULL dataset before
 * slicing — otherwise header clicks reorder only the current page, giving
 * wrong results. The exported {@link sortRows} helper applies the same
 * comparison semantics for that pre-slice sort. For server-paginated data,
 * sort in the query.
 *
 * Markup and base styling come from the shared {@link Table} parts.
 */
export declare function ResourceTable<T>({ data, columns, getRowId, onRowClick, emptyMessage, sortKey: controlledSortKey, sortDir: controlledSortDir, onSortChange, caption, loading, loadingMessage, className, tableProps, getRowProps, isRowSelected, }: ResourceTableProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ResourceTable.d.ts.map