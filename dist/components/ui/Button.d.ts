/**
 * Button — the primary interactive element across the template.
 *
 * Supports six visual variants, four sizes, loading states, and
 * responsive icon+label patterns via the `icon` prop.
 *
 * ## Responsive icon+label pattern
 *
 * Many toolbar buttons show an icon on all screens but only reveal the
 * text label on larger breakpoints. Instead of manually wrapping children
 * in `<span className="hidden sm:inline">`, use the `icon` prop:
 *
 * ```tsx
 * // Icon always visible, label hidden below `sm` (640px)
 * <Button icon={Trash2} hideLabel>Delete</Button>
 *
 * // Icon always visible, label hidden below `lg` (1024px)
 * <Button icon={MailOpen} hideLabel="lg">Read</Button>
 *
 * // Icon always visible, label always visible (no hiding)
 * <Button icon={Plus}>New Item</Button>
 * ```
 *
 * This replaces the old pattern of:
 * ```tsx
 * <Button>
 *   <Trash2 className="h-3.5 w-3.5" />
 *   <span className="hidden sm:inline">Delete</span>
 * </Button>
 * ```
 *
 * When `hideLabel` is set and the label is hidden, the button's horizontal
 * padding automatically shrinks on small screens so it doesn't look
 * unbalanced as an icon-only button.
 *
 * ## Toggle buttons
 *
 * `secondary` and `ghost` toggles use an accent tint and ring. An `icon`
 * toggle uses a neutral hover surface and keeps caller-supplied icon colors.
 */
import { type ComponentPropsWithRef, type ElementType, type ReactNode } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
/** Visual treatment for Button. */
export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost" | "icon" | "link";
/** Visual size for Button. */
export type ButtonSize = "xs" | "sm" | "md" | "lg";
export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    /**
     * Visual style. `primary` for the main action, `secondary` (default) for
     * neutral actions, `danger` for destructive ones, `ghost` for low-emphasis
     * inline actions, `icon` for square icon-only buttons, and `link` for
     * unpadded text actions in compact mode. Comfortable mode gives link
     * actions the same minimum 44px hit area as other controls.
     */
    variant?: ButtonVariant;
    /** Control height and padding. For `link`, controls text and icon size. Defaults to `md`. */
    size?: ButtonSize;
    /** Inherit ControlSizeProvider or opt into a minimum 44px hit area. */
    controlSize?: ControlSize;
    /**
     * Show a spinner and disable the button while an action is in flight.
     * Implies `disabled`.
     */
    loading?: boolean;
    /** Toggle state, announced via aria-pressed and styled when true. */
    pressed?: boolean;
    /**
     * Optional Lucide icon component rendered before children.
     * Pass the component itself (e.g. `Trash2`), not JSX.
     * The icon is always visible regardless of `hideLabel`.
     */
    icon?: ElementType;
    /**
     * When set, hides the label text below the given breakpoint.
     * - `true` or `"sm"` — label hidden below 640px (most common)
     * - `"md"` — label hidden below 768px
     * - `"lg"` — label hidden below 1024px
     *
     * Only meaningful when both `icon` and `children` are provided.
     * On small screens the button renders as icon-only with tighter padding.
     */
    hideLabel?: boolean | "sm" | "md" | "lg";
    children?: ReactNode;
}
export declare function Button({ variant, size, controlSize, loading, pressed, icon: Icon, hideLabel, className, children, disabled, ref, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
