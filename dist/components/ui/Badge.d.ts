/**
 * Badge — a small semantic label for status, category, or metadata.
 *
 * Renders a `<span>` by default. Pass `onClick` to make it interactive: it
 * then renders a `<button type="button">` with a focus-visible ring, and
 * `selected` turns it into a toggle (`aria-pressed`) for filter chips.
 *
 * ```tsx
 * <Badge color="green" dot>Active</Badge>
 * <Badge variant="outline" size="md">Draft</Badge>
 * <Badge color="blue" selected={on} onClick={() => setOn(!on)}>Design</Badge>
 * ```
 */
import { type HTMLAttributes, type MouseEventHandler, type ReactNode } from "react";
import type { BadgeColor } from "./badgeColors";
export type { BadgeColor } from "./badgeColors";
export type BadgeVariant = "soft" | "outline";
export type BadgeSize = "xs" | "sm" | "md";
/**
 * One flat props type, so wrappers can extend it, `Omit` from it and spread
 * it. The element is chosen at runtime: `<button type="button">` when
 * `onClick` is given, otherwise `<span>`.
 */
export interface BadgeProps extends Omit<HTMLAttributes<HTMLElement>, "color" | "onClick"> {
    /**
     * Semantic colour. Defaults to `gray`, or to `accent` when `selected` is
     * set. For a toggle (`selected` set) this is the colour shown while
     * selected; an unselected toggle renders neutral gray so the state reads
     * clearly.
     */
    color?: BadgeColor;
    /**
     * `soft` (default) is a muted fill with coloured text. `outline` is a
     * coloured 1px border on a transparent background.
     */
    variant?: BadgeVariant;
    /**
     * `sm` (default) is the standard label. `xs` drops vertical padding for
     * inline counts (e.g. inside tabs); `md` is larger, with `text-xs`.
     */
    size?: BadgeSize;
    /** Show a leading status dot in the badge colour. */
    dot?: boolean;
    /** Makes the badge interactive: it renders as a `<button type="button">`. */
    onClick?: MouseEventHandler<HTMLButtonElement>;
    /**
     * Toggle state, exposed as `aria-pressed`. Requires `onClick`; without it
     * the badge stays a static span and a dev-mode warning is logged. Selected
     * shows `color` (with a ring on `soft`, a fill on `outline`); unselected
     * shows neutral gray.
     */
    selected?: boolean;
    /**
     * Dims the badge. With `onClick` this is the native button `disabled`; on
     * a static badge it sets `aria-disabled="true"` instead.
     */
    disabled?: boolean;
    children?: ReactNode;
}
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLElement>>;
//# sourceMappingURL=Badge.d.ts.map