import { useMemo, useState, type ReactNode } from "react";

import { ArrowDown, ArrowUp } from "lucide-react";

import { cn } from "../../lib/cn";
import { sortRows, type SortDir } from "./sortRows";

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
export function ResourceTable<T>({
  data,
  columns,
  getRowId,
  onRowClick,
  emptyMessage = "No data",
  sortKey: controlledSortKey,
  sortDir: controlledSortDir,
  onSortChange,
}: ResourceTableProps<T>) {
  const controlled = onSortChange !== undefined;

  const [uncontrolledSortKey, setUncontrolledSortKey] = useState<string | null>(
    null,
  );
  const [uncontrolledSortDir, setUncontrolledSortDir] =
    useState<SortDir>("asc");

  // In controlled mode the caller owns the active sort (and the ordering of
  // `data`); otherwise the table tracks it internally.
  const sortKey = controlled
    ? (controlledSortKey ?? null)
    : uncontrolledSortKey;
  const sortDir = controlled
    ? (controlledSortDir ?? "asc")
    : uncontrolledSortDir;

  // Controlled callers sort `data` themselves; only sort internally otherwise.
  const sorted = useMemo(
    () => (controlled ? data : sortRows(data, columns, sortKey, sortDir)),
    [controlled, data, columns, sortKey, sortDir],
  );

  function handleSort(key: string) {
    // Clicking the active column flips direction; a new column starts at asc.
    const nextDir: SortDir =
      sortKey === key && sortDir === "asc" ? "desc" : "asc";
    if (controlled) {
      onSortChange(key, nextDir);
      return;
    }
    setUncontrolledSortKey(key);
    setUncontrolledSortDir(nextDir);
  }

  return (
    <div className="border-border overflow-x-auto rounded-md border">
      <table className="font-data w-full text-xs">
        <thead>
          <tr className="border-border bg-bg-secondary border-b">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "text-2xs text-text-tertiary font-label h-7 px-3 text-left font-semibold tracking-wider uppercase",
                  col.sortable &&
                    "hover:text-text-secondary cursor-pointer select-none",
                )}
                style={{ width: col.width }}
                onClick={col.sortable ? () => handleSort(col.key) : undefined}
              >
                <span className="inline-flex items-center gap-1">
                  {col.header}
                  {col.sortable &&
                    sortKey === col.key &&
                    (sortDir === "asc" ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    ))}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-text-tertiary h-32 text-center"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sorted.map((row) => (
              <tr
                key={getRowId(row)}
                className={cn(
                  "border-border h-8 border-b last:border-b-0",
                  "hover:bg-bg-hover",
                  onRowClick && "cursor-pointer",
                )}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "text-text-primary px-3 whitespace-nowrap",
                      col.cellClassName,
                    )}
                    /* Stop row-click propagation for cells that contain
                       interactive elements (buttons, checkboxes, dropdowns).
                       Without this, clicking a checkbox or action menu also
                       triggers onRowClick and opens the detail panel. */
                    onClick={
                      col.interactive && onRowClick
                        ? (e) => e.stopPropagation()
                        : undefined
                    }
                  >
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
