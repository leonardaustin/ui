import type { ComponentPropsWithRef, CSSProperties, ReactNode } from "react";
export interface TableProps extends ComponentPropsWithRef<"table"> {
    caption?: ReactNode;
    captionHidden?: boolean;
    stickyHeader?: boolean;
    /** Constrains the scrolling wrapper, for example "20rem". */
    maxHeight?: string;
    wrapperClassName?: string;
    wrapperProps?: ComponentPropsWithRef<"div">;
}
export declare function Table({ caption, captionHidden, stickyHeader, maxHeight, wrapperClassName, wrapperProps, className, children, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
export declare function TableHead({ className, ...props }: ComponentPropsWithRef<"thead">): import("react/jsx-runtime").JSX.Element;
export declare function TableBody({ className, ...props }: ComponentPropsWithRef<"tbody">): import("react/jsx-runtime").JSX.Element;
export interface TableRowProps extends ComponentPropsWithRef<"tr"> {
    selected?: boolean;
    interactive?: boolean;
}
export declare function TableRow({ selected, interactive, className, ...props }: TableRowProps): import("react/jsx-runtime").JSX.Element;
export interface TableHeaderCellProps extends Omit<ComponentPropsWithRef<"th">, "align"> {
    align?: CSSProperties["textAlign"];
    numeric?: boolean;
    sort?: "ascending" | "descending" | "none";
}
export declare function TableHeaderCell({ numeric, align, sort, scope, className, style, ...props }: TableHeaderCellProps): import("react/jsx-runtime").JSX.Element;
export interface TableCellProps extends Omit<ComponentPropsWithRef<"td">, "align"> {
    align?: CSSProperties["textAlign"];
    numeric?: boolean;
    nowrap?: boolean;
}
export declare function TableCell({ numeric, align, nowrap, className, style, ...props }: TableCellProps): import("react/jsx-runtime").JSX.Element;
export interface TableEmptyRowProps extends ComponentPropsWithRef<"tr"> {
    colSpan: number;
}
export declare function TableEmptyRow({ colSpan, children, className, ...props }: TableEmptyRowProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map