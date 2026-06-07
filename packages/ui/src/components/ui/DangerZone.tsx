/**
 * DangerZone — a red-highlighted section for destructive actions.
 *
 * Used at the bottom of settings pages to visually separate destructive
 * operations (like account deletion) from regular settings. The red heading
 * and top border create a clear visual warning.
 *
 * @example
 * ```tsx
 * <DangerZone
 *   title="Danger Zone"
 *   description="Once you delete your account, there is no going back."
 * >
 *   <Button variant="danger" onClick={() => setDeleteOpen(true)}>
 *     Delete Account
 *   </Button>
 * </DangerZone>
 * ```
 */

import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

interface DangerZoneProps {
  /**
   * Section heading.
   * Defaults to "Danger Zone" — the universal convention for destructive
   * action sections in settings UIs.
   */
  title?: string;
  /** Warning text displayed below the heading. */
  description?: string;
  /**
   * The destructive action control(s) — typically a danger Button
   * that opens a confirmation dialog.
   */
  children: ReactNode;
  /** Additional utility classes for the root container. */
  className?: string;
}

export function DangerZone({
  title = "Danger Zone",
  description,
  children,
  className,
}: DangerZoneProps) {
  return (
    <div className={cn("border-border mt-8 border-t pt-6", className)}>
      <h3 className="text-red mb-2 text-xs font-semibold">{title}</h3>
      {description && (
        <p className="text-text-secondary mb-3 text-xs">{description}</p>
      )}
      {children}
    </div>
  );
}
