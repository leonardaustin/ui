/**
 * Button — the primary interactive element across the template.
 *
 * Supports five visual variants, three sizes, loading states, and
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
 */
import { type ButtonHTMLAttributes, type ElementType, type ReactNode } from "react";
type Variant = "primary" | "secondary" | "danger" | "ghost" | "icon";
type Size = "sm" | "md" | "lg";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    loading?: boolean;
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
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=Button.d.ts.map