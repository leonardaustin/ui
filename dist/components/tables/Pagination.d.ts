interface PaginationProps {
    /** Current page, 1-based. */
    page: number;
    /** Total number of pages. Nothing is rendered when this is 1 or less. */
    totalPages: number;
    /** Called with the new page number when a page button or the previous/next arrow is clicked. */
    onPageChange: (page: number) => void;
}
export declare function Pagination({ page, totalPages, onPageChange, }: PaginationProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Pagination.d.ts.map