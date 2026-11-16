import type { ComponentPropsWithRef, CSSProperties, ReactNode } from "react";
export interface TableProps extends ComponentPropsWithRef<"table"> {
    /** Table caption, rendered as a `<caption>`. */
    caption?: ReactNode;
    /** Visually hide the caption while keeping it available to screen readers. Defaults to `false`. */
    captionHidden?: boolean;
    /** Extra classes for the `<caption>`. */
    captionClassName?: string;
    /** Keep the header row pinned while the table scrolls. Defaults to `false`. */
    stickyHeader?: boolean;
    /** Constrains the scrolling wrapper, for example "20rem". */
    maxHeight?: string;
    /** Extra classes for the scrolling wrapper `<div>`. */
    wrapperClassName?: string;
    /** Extra props spread onto the wrapper `<div>`. */
    wrapperProps?: ComponentPropsWithRef<"div">;
    /** Content rendered inside the wrapper `<div>` before the `<table>`, for example a visually hidden `role="status"` loading message. */
    beforeTable?: ReactNode;
}
export declare function Table({ caption, captionHidden, captionClassName, stickyHeader, maxHeight, wrapperClassName, wrapperProps, beforeTable, className, children, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
export declare function TableHead({ className, ...props }: ComponentPropsWithRef<"thead">): import("react/jsx-runtime").JSX.Element;
export declare function TableBody({ className, ...props }: ComponentPropsWithRef<"tbody">): import("react/jsx-runtime").JSX.Element;
export interface TableRowProps extends ComponentPropsWithRef<"tr"> {
    /** Marks the row selected via `data-selected`, which applies the selected background. `aria-selected` is not set; pass it yourself only where it is valid (grid/treegrid rows). */
    selected?: boolean;
    /** Shows a pointer cursor for clickable rows. Defaults to `false`. */
    interactive?: boolean;
}
export declare function TableRow({ selected, interactive, className, ...props }: TableRowProps): import("react/jsx-runtime").JSX.Element;
export interface TableHeaderCellProps extends Omit<ComponentPropsWithRef<"th">, "align"> {
    /** Horizontal text alignment of the cell. */
    align?: CSSProperties["textAlign"];
    /** Right-align with tabular figures for numeric columns. Defaults to `false`. */
    numeric?: boolean;
    /** Current sort direction, exposed as `aria-sort`. */
    sort?: "ascending" | "descending" | "none";
    /** Reports the requested next direction. Sorting and state updates belong to the caller. */
    onSort?: (direction: "ascending" | "descending") => void;
}
export declare function TableHeaderCell({ numeric, align, sort, onSort, scope, className, style, children, ...props }: TableHeaderCellProps): import("react/jsx-runtime").JSX.Element;
export interface TableCellProps extends Omit<ComponentPropsWithRef<"td">, "align"> {
    /** Horizontal text alignment of the cell. */
    align?: CSSProperties["textAlign"];
    /** Right-align with tabular figures for numeric columns. Defaults to `false`. */
    numeric?: boolean;
    /** Prevent the cell content from wrapping. Defaults to `false`. */
    nowrap?: boolean;
}
export declare function TableCell({ numeric, align, nowrap, className, style, ...props }: TableCellProps): import("react/jsx-runtime").JSX.Element;
export interface TableEmptyRowProps extends ComponentPropsWithRef<"tr"> {
    /** Number of columns the empty-state cell spans; set to the table's column count. */
    colSpan: number;
    /** Extra classes for the empty-state `<td>`. */
    cellClassName?: string;
}
export declare function TableEmptyRow({ colSpan, cellClassName, children, className, ...props }: TableEmptyRowProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map