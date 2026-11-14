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
import type { ReactNode } from "react";
export interface PageSizeOption {
    value: string;
    label: string;
}
export interface PaginationBarProps {
    /** Current page number (1-indexed). */
    page: number;
    /** Number of items per page. */
    pageSize: number;
    /** Total number of items across all pages. */
    total: number;
    /** Replace the default range text with custom content or a total formatter. */
    summary?: ReactNode | ((total: number) => ReactNode);
    /** Show a short total caption after the range or custom summary. */
    showTotal?: boolean;
    /** Show a loading caption and disable both navigation and page-size selection. */
    loading?: boolean;
    /**
     * Options for the page-size dropdown.
     * Defaults to 10 / 25 / 50 per page. Override when your table
     * or list uses different page sizes.
     */
    pageSizeOptions?: PageSizeOption[];
    /** Called when the user navigates to a different page. */
    onPageChange: (page: number) => void;
    /**
     * Omit to hide the page-size selector (fixed page size).
     * Called when the user changes the page size.
     * The consumer should also reset the page to 1 when this fires.
     */
    onPageSizeChange?: (size: number) => void;
    /** Additional utility classes for the root container. */
    className?: string;
}
export declare function PaginationBar({ page, pageSize, total, summary, showTotal, loading, pageSizeOptions, onPageChange, onPageSizeChange, className, }: PaginationBarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PaginationBar.d.ts.map