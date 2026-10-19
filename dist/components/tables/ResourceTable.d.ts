import { type ReactNode } from "react";
import { type SortDir } from "./sortRows";
export interface Column<T> {
    key: string;
    header: string;
    width?: string;
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
    cellClassName?: string;
    getValue?: (row: T) => string | number;
    render: (row: T) => ReactNode;
}
interface ResourceTableProps<T> {
    data: T[];
    columns: Column<T>[];
    getRowId: (row: T) => string | number;
    onRowClick?: (row: T) => void;
    emptyMessage?: string;
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
 */
export declare function ResourceTable<T>({ data, columns, getRowId, onRowClick, emptyMessage, sortKey: controlledSortKey, sortDir: controlledSortDir, onSortChange, }: ResourceTableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ResourceTable.d.ts.map