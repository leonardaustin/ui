/**
 * SettingRow — a label + description + action layout for settings pages.
 *
 * Each row displays a setting name and description on the left, with a
 * control (typically a `<Toggle>`) on the right. Rows are separated by
 * a bottom border for visual grouping.
 *
 * @example With a toggle
 * ```tsx
 * <SettingRow
 *   label="Reduced Motion"
 *   description="Disable animations and transitions"
 *   action={<Toggle checked={reducedMotion} onChange={setReducedMotion} />}
 * />
 * ```
 *
 * @example With any control
 * ```tsx
 * <SettingRow
 *   label="Language"
 *   description="Choose your preferred language"
 *   action={<SelectDropdown value={lang} onChange={setLang} options={langs} />}
 * />
 * ```
 */

import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

interface SettingRowProps {
  /** The setting name displayed as a small, medium-weight label. */
  label: string;
  /** A brief description shown below the label in a muted style. */
  description?: string;
  /**
   * The control rendered on the right side of the row.
   * Typically a `<Toggle>`, but can be any React node.
   */
  action: ReactNode;
  /** Additional utility classes appended to the root container. */
  className?: string;
}

export function SettingRow({
  label,
  description,
  action,
  className,
}: SettingRowProps) {
  return (
    <div
      className={cn(
        "border-border flex items-center justify-between border-b py-3",
        className,
      )}
    >
      {/* Label + description — left side */}
      <div className="min-w-0 flex-1 pr-4">
        <p className="text-text-primary font-label text-xs font-medium">
          {label}
        </p>
        {description && (
          <p className="text-2xs text-text-tertiary font-label mt-0.5">
            {description}
          </p>
        )}
      </div>

      {/* Action control — right side, never shrinks */}
      <div className="shrink-0">{action}</div>
    </div>
  );
}
