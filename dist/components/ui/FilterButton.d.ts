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
import { type ElementType, type ReactNode } from "react";
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
export declare const FilterButton: import("react").ForwardRefExoticComponent<FilterButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=FilterButton.d.ts.map