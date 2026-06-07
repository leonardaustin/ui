import type { Column } from "./ResourceTable";

export type SortDir = "asc" | "desc";

/**
 * Sort `rows` by the given column's `getValue`, using the same comparison
 * semantics ResourceTable applies internally (locale-aware, numeric-aware).
 * Returns a new array; the input is not mutated. When `key` is null or the
 * column has no `getValue`, the rows are returned unchanged.
 *
 * Exposed so paginated callers can sort the FULL dataset before slicing into
 * a page (see the controlled-sorting note on ResourceTable).
 */
export function sortRows<T>(
  rows: T[],
  columns: Column<T>[],
  key: string | null,
  dir: SortDir,
): T[] {
  if (!key) return rows;
  const col = columns.find((c) => c.key === key);
  const getValue = col?.getValue;
  if (!getValue) return rows;
  return [...rows].sort((a, b) => {
    const as = String(getValue(a));
    const bs = String(getValue(b));
    const cmp = as.localeCompare(bs, undefined, { numeric: true });
    return dir === "asc" ? cmp : -cmp;
  });
}
