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
import type { ComponentPropsWithRef, ReactNode } from "react";
export interface DangerZoneProps extends Omit<ComponentPropsWithRef<"div">, "title" | "children"> {
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
export declare function DangerZone({ title, description, children, className, ref, ...rest }: DangerZoneProps): import("react/jsx-runtime").JSX.Element;
