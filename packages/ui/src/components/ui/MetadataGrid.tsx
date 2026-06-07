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

import { Fragment, type ReactNode } from "react";

import { cn } from "../../lib/cn";

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

export function MetadataGrid({
  items,
  labelWidth = "100px",
  className,
}: MetadataGridProps) {
  return (
    <div
      className={cn("gap-x-3 gap-y-2 text-xs", className)}
      style={{
        display: "grid",
        gridTemplateColumns: `${labelWidth} 1fr`,
      }}
    >
      {items.map((item) => (
        <Fragment key={item.label}>
          {/* Label — muted color to create visual hierarchy. */}
          <span className="text-text-tertiary font-label">{item.label}</span>
          {/* Value — primary color for strings, or custom JSX. */}
          {typeof item.value === "string" || typeof item.value === "number" ? (
            <span className="text-text-primary font-data">{item.value}</span>
          ) : (
            <span>{item.value}</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
