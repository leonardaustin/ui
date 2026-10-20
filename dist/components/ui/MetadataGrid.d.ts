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
 */
import { type ReactNode } from "react";
interface MetadataItem {
    /** The label displayed in the left column. */
    label: string;
    /** The value displayed in the right column — can be a string or JSX. */
    value: ReactNode;
}
interface MetadataGridProps {
    /** The list of label/value pairs to display. */
    items: MetadataItem[];
    /**
     * Width of the label column.
     * Defaults to "100px" — the most common width in the codebase.
     * The overlay sheet panels use "80px" for tighter layouts.
     */
    labelWidth?: string;
    /** Additional utility classes for the root container. */
    className?: string;
}
export declare function MetadataGrid({ items, labelWidth, className, }: MetadataGridProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MetadataGrid.d.ts.map