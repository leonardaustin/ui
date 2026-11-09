import type { ReactNode } from "react";
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
}
export declare function Toolbar({ start, end, children, className, startClassName, endClassName, }: ToolbarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Toolbar.d.ts.map