import { type ReactNode } from "react";
export interface ToolbarProps {
    /** Left-hand content (search, toggles, counts); takes precedence over `children`. */
    start?: ReactNode;
    /** Right-hand content (filters, action buttons); the right group is omitted when empty. */
    end?: ReactNode;
    /** Fallback for `start` when it is not provided. */
    children?: ReactNode;
    /** Extra classes for the root element. */
    className?: string;
    /** Extra classes for the left group. */
    startClassName?: string;
    /** Extra classes for the right group. */
    endClassName?: string;
    /** Controls displayed in a collapsible row beneath the main toolbar. */
    moreFilters?: ReactNode;
    /** Number of active controls in `moreFilters`; shown on the toggle. */
    moreFiltersActiveCount?: number;
    /** Controlled open state for `moreFilters`. */
    moreFiltersOpen?: boolean;
    /** Initial uncontrolled open state; defaults to open for active filters. */
    defaultMoreFiltersOpen?: boolean;
    /** Called when the more-filters toggle or Escape requests a state change. */
    onMoreFiltersOpenChange?: (open: boolean) => void;
}
export declare function Toolbar({ start, end, children, className, startClassName, endClassName, moreFilters, moreFiltersActiveCount, moreFiltersOpen, defaultMoreFiltersOpen, onMoreFiltersOpenChange, }: ToolbarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Toolbar.d.ts.map