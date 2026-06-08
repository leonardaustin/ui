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
export declare function sortRows<T>(rows: T[], columns: Column<T>[], key: string | null, dir: SortDir): T[];
//# sourceMappingURL=sortRows.d.ts.map