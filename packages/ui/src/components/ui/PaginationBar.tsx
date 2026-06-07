/**
 * PaginationBar — combines page-size selector, item count, and page controls.
 *
 * This was previously copy-pasted between Tables and Inbox. It wraps the
 * existing `Pagination` and `SelectDropdown` components into a single,
 * self-contained footer bar.
 *
 * The layout is responsive: on small screens the count text hides,
 * leaving just the page-size dropdown and pagination buttons.
 *
 * @example
 * ```tsx
 * <PaginationBar
 *   page={page}
 *   pageSize={pageSize}
 *   total={filtered.length}
 *   pageSizeOptions={[
 *     { value: "10", label: "10 per page" },
 *     { value: "25", label: "25 per page" },
 *   ]}
 *   onPageChange={setPage}
 *   onPageSizeChange={(size) => {
 *     setPageSize(size);
 *     setPage(1); // reset to first page on size change
 *   }}
 * />
 * ```
 */

import { cn } from "../../lib/cn";
import { Pagination } from "../tables/Pagination";
import { SelectDropdown } from "./SelectDropdown";

interface PageSizeOption {
  value: string;
  label: string;
}

/**
 * Sensible default page-size options.
 * Consumers can override with the `pageSizeOptions` prop when they
 * need different values (e.g. Inbox uses 25/50/100).
 */
const DEFAULT_PAGE_SIZE_OPTIONS: PageSizeOption[] = [
  { value: "10", label: "10 per page" },
  { value: "25", label: "25 per page" },
  { value: "50", label: "50 per page" },
];

interface PaginationBarProps {
  /** Current page number (1-indexed). */
  page: number;
  /** Number of items per page. */
  pageSize: number;
  /** Total number of items across all pages. */
  total: number;
  /**
   * Options for the page-size dropdown.
   * Defaults to 10 / 25 / 50 per page. Override when your table
   * or list uses different page sizes.
   */
  pageSizeOptions?: PageSizeOption[];
  /** Called when the user navigates to a different page. */
  onPageChange: (page: number) => void;
  /**
   * Called when the user changes the page size.
   * The consumer should also reset the page to 1 when this fires.
   */
  onPageSizeChange: (size: number) => void;
  /** Additional utility classes for the root container. */
  className?: string;
}

export function PaginationBar({
  page,
  pageSize,
  total,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  onPageChange,
  onPageSizeChange,
  className,
}: PaginationBarProps) {
  const totalPages = Math.ceil(total / pageSize);

  /* Compute the "1-10 of 50" range string.
     Clamp to avoid showing "1-0 of 0" when there are no results. */
  const rangeStart = Math.min((page - 1) * pageSize + 1, total);
  const rangeEnd = Math.min(page * pageSize, total);

  return (
    <div className={cn("flex items-center justify-between", className)}>
      {/* Left: page-size dropdown + item count */}
      <div className="flex items-center gap-3">
        <SelectDropdown
          size="sm"
          value={String(pageSize)}
          onChange={(v) => onPageSizeChange(Number(v))}
          options={pageSizeOptions}
          className="w-28"
        />
        {/* Count text — hidden on very small screens to save space. */}
        <span className="text-text-tertiary hidden text-xs sm:inline">
          {rangeStart}&ndash;{rangeEnd} of {total}
        </span>
      </div>

      {/* Right: page navigation buttons */}
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
