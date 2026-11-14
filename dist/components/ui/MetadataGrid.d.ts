/**
 * MetadataGrid — a two-column label/value grid for detail panels.
 *
 * Used in side panels and overlay sheets to display key-value metadata
 * (e.g. Email, Status, Role). The label column has a fixed width and
 * the value column stretches to fill the remaining space.
 *
 * @example
 * ```tsx
 * <MetadataGrid
 *   items={[
 *     { label: "Email",  value: "alice@example.com" },
 *     { label: "Status", value: <StatusDot status="active" label="Active" /> },
 *     { label: "Role",   value: <Badge color="purple">Admin</Badge> },
 *   ]}
 * />
 * ```
 *
 * @example Custom label width
 * ```tsx
 * <MetadataGrid labelWidth="120px" items={items} />
 * ```
 *
 * @example Striped rows
 * ```tsx
 * <MetadataGrid striped items={items} />
 * ```
 */
import { type ReactNode } from "react";
import { type LayoutGap, type LayoutResponsive } from "../../lib/layout";
interface MetadataItem {
    /** The label displayed in the left column. */
    label: string;
    /** The value displayed in the right column — can be a string or JSX. */
    value: ReactNode;
}
interface MetadataGridProps {
    /** Inline preserves the original two-column markup (unless `striped`); stacked places labels above values. */
    layout?: "inline" | "stacked";
    /** Stacked layout columns at mobile-first breakpoints. */
    columns?: LayoutResponsive<number>;
    /**
     * Stacked layout spacing units; ignored for inline. With `striped`, only
     * the column gap applies and rows touch.
     */
    gap?: LayoutGap;
    /** The list of label/value pairs to display. */
    items: MetadataItem[];
    /**
     * Width of the label column.
     * Defaults to "100px" — the most common width in the codebase.
     * The overlay sheet panels use "80px" for tighter layouts.
     */
    labelWidth?: string;
    /**
     * Shade every other row (the 1st, 3rd, …) with a subtle background, and
     * give every row padding and rounded corners so the shaded and unshaded
     * rows stay aligned. In the stacked layout the stripes follow the visual
     * rows at each breakpoint of `columns`. Set `--ui-metadata-stripe-color`
     * on the grid to change the stripe colour (defaults to `--bg-tertiary`).
     */
    striped?: boolean;
    /** Additional utility classes for the root container. */
    className?: string;
}
export declare function MetadataGrid({ items, labelWidth, layout, columns, gap, striped, className, }: MetadataGridProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MetadataGrid.d.ts.map