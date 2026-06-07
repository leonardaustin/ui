/**
 * ColumnPicker — a dropdown for toggling table column visibility.
 *
 * Extracted from Tables.tsx. Renders a FilterButton trigger that opens a
 * checklist of toggleable columns. Uses `useDismiss` to close on outside
 * click or Escape.
 *
 * @example
 * ```tsx
 * <ColumnPicker
 *   columns={columns.filter((c) => c.key !== "select" && c.key !== "actions")}
 *   hidden={hiddenCols}
 *   onToggle={toggleCol}
 * />
 * ```
 */

import { useCallback, useRef, useState } from "react";

import { Columns3 } from "lucide-react";

import { useDismiss } from "../../hooks/useDismiss";
import { Checkbox } from "../ui/Checkbox";
import { FilterButton } from "../ui/FilterButton";

interface ColumnDef {
  /** Unique column key. */
  key: string;
  /** Display label for the column header. */
  header: string;
}

interface ColumnPickerProps {
  /** List of toggleable columns (exclude utility columns like select/actions). */
  columns: ColumnDef[];
  /** Set of currently hidden column keys. */
  hidden: Set<string>;
  /** Called when a column's visibility is toggled. */
  onToggle: (key: string) => void;
}

export function ColumnPicker({ columns, hidden, onToggle }: ColumnPickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [ref]);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger — uses FilterButton for consistent toolbar styling. */}
      <FilterButton icon={Columns3} onClick={() => setOpen(!open)}>
        Columns
      </FilterButton>

      {/* Dropdown panel */}
      {open && (
        <div className="bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 w-48 rounded-md border py-1 shadow-lg">
          <p className="text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase">
            Toggle columns
          </p>
          {columns.map((col) => (
            <button
              key={col.key}
              onClick={() => onToggle(col.key)}
              className="text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]"
            >
              <Checkbox
                checked={!hidden.has(col.key)}
                onChange={() => onToggle(col.key)}
              />
              <span>{col.header}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
