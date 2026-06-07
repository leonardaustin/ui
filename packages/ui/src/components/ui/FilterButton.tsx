/**
 * FilterButton — a compact toolbar trigger button for dropdown filters.
 *
 * This is visually distinct from `<Button>` — it uses a secondary background
 * with a subtle border, designed to sit in toolbars as the trigger element
 * for `<DropdownMenu>`. The label text hides on small screens, leaving just
 * the icon for a compact mobile experience.
 *
 * @example As a DropdownMenu trigger
 * ```tsx
 * <DropdownMenu
 *   trigger={
 *     <FilterButton icon={Filter}>
 *       Role{roleFilter !== "All" ? `: ${roleFilter}` : ""}
 *     </FilterButton>
 *   }
 *   items={...}
 * />
 * ```
 *
 * @example Fixed width (prevents reflow when label changes)
 * ```tsx
 * <FilterButton icon={LayoutGrid} className="w-[110px]">
 *   Cards
 * </FilterButton>
 * ```
 */

import { forwardRef, type ElementType, type ReactNode } from "react";

import { cn } from "../../lib/cn";

interface FilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * A Lucide icon component rendered at 14px (h-3.5 w-3.5).
   * Pass the component itself, not a JSX element.
   */
  icon: ElementType;
  /**
   * Label text — hidden on small screens (`sm:inline`) so the button
   * degrades gracefully to an icon-only state on mobile.
   */
  children?: ReactNode;
}

/**
 * Uses `forwardRef` so the button works correctly as a `<DropdownMenu>`
 * trigger, which may need to attach a ref for positioning.
 */
export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  function FilterButton({ icon: Icon, children, className, ...rest }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          /* Layout */
          "flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5",
          /* Colors — secondary bg with subtle border */
          "border-border bg-bg-secondary text-text-secondary border",
          /* Hover — stronger border and darker bg */
          "hover:bg-bg-hover hover:border-border-strong",
          /* Typography */
          "text-xs",
          /* Smooth color transition (no transition delay for instant hover feel) */
          "transition-colors duration-[100ms]",
          className,
        )}
        {...rest}
      >
        <Icon className="h-3.5 w-3.5 shrink-0" />
        {children && <span className="hidden sm:inline">{children}</span>}
      </button>
    );
  },
);
