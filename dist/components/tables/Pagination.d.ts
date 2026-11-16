import type { ReactNode } from "react";
interface PaginationProps {
    /** Current page, 1-based. */
    page: number;
    /** Total pages. With no caption or loading state, hides when this is 1 or less. */
    totalPages: number;
    /** Called with the new page number when a page button or the previous/next arrow is clicked. */
    onPageChange: (page: number) => void;
    /** Disable navigation while the next page is loading. */
    loading?: boolean;
    /** Optional item total, displayed as “N in total”. */
    total?: number;
    /**
     * Replace the total caption with content or a formatter (which gets
     * `total`, possibly undefined). `null` hides the caption.
     */
    summary?: ReactNode | ((total: number | undefined) => ReactNode);
}
export declare function Pagination({ page, totalPages, onPageChange, loading, total, summary, }: PaginationProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Pagination.d.ts.map