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

import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ElementType,
  type ReactNode,
} from "react";

import { Loader2 } from "lucide-react";

import { cn } from "../../lib/cn";

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

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
  secondary:
    "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
  danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
  ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
  icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-7 px-2.5 text-xs gap-1.5",
  md: "h-8 px-3 text-xs gap-2",
  lg: "h-9 px-4 text-sm gap-2",
};

const iconSizeStyles: Record<Size, string> = {
  sm: "h-7 w-7",
  md: "h-8 w-8",
  lg: "h-9 w-9",
};

/* Maps the icon prop size to the appropriate icon dimensions. */
const iconDimensions: Record<Size, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-3.5 w-3.5",
  lg: "h-4 w-4",
};

/* Maps hideLabel breakpoint to the class that shows the label text. */
const hideLabelClass: Record<string, string> = {
  sm: "hidden sm:inline",
  md: "hidden md:inline",
  lg: "hidden lg:inline",
};

/* When the label is hidden, shrink horizontal padding so the icon-only
   state looks balanced. These override the base sizeStyles padding. */
const responsivePaddingClass: Record<string, Record<Size, string>> = {
  sm: { sm: "px-1.5 sm:px-2.5", md: "px-2 sm:px-3", lg: "px-2.5 sm:px-4" },
  md: { sm: "px-1.5 md:px-2.5", md: "px-2 md:px-3", lg: "px-2.5 md:px-4" },
  lg: { sm: "px-1.5 lg:px-2.5", md: "px-2 lg:px-3", lg: "px-2.5 lg:px-4" },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "secondary",
      size = "md",
      loading,
      icon: Icon,
      hideLabel,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isIconVariant = variant === "icon";

    /* Resolve the hideLabel breakpoint string. */
    const breakpoint =
      hideLabel === true ? "sm" : hideLabel === false ? undefined : hideLabel;

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium",
          "font-control",
          "transition-colors duration-[100ms] ease-out",
          "cursor-pointer",
          "disabled:cursor-not-allowed disabled:opacity-40",
          "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
          variantStyles[variant],
          isIconVariant ? iconSizeStyles[size] : sizeStyles[size],
          /* When hiding the label, override padding to be tighter on small
             screens so the icon-only state doesn't have excess whitespace. */
          breakpoint &&
            !isIconVariant &&
            responsivePaddingClass[breakpoint]?.[size],
          className,
        )}
        {...props}
      >
        {loading && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
        {/* Render the icon prop if provided. */}
        {Icon && !loading && <Icon className={iconDimensions[size]} />}
        {/* When hideLabel is set, wrap children in a span that hides below
            the breakpoint. Otherwise render children directly. */}
        {children &&
          (breakpoint ? (
            <span className={hideLabelClass[breakpoint]}>{children}</span>
          ) : (
            children
          ))}
      </button>
    );
  },
);

Button.displayName = "Button";
