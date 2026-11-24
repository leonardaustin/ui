/**
 * FilterDropdown — a convenience wrapper combining FilterButton + DropdownMenu.
 *
 * Since FilterButton is almost always used as the trigger for a DropdownMenu,
 * this component merges both into a single API, reducing ~5 lines per usage.
 *
 * @example
 * ```tsx
 * <FilterDropdown
 *   icon={Filter}
 *   items={roleOptions.map((r) => ({
 *     label: r,
 *     checked: roleFilter === r,
 *     onClick: () => setRoleFilter(r),
 *   }))}
 * >
 *   Role{roleFilter !== "All" ? `: ${roleFilter}` : ""}
 * </FilterDropdown>
 * ```
 *
 * @example With alignment
 * ```tsx
 * <FilterDropdown icon={LayoutGrid} align="right" className="w-[110px]" items={items}>
 *   Cards
 * </FilterDropdown>
 * ```
 */
import type { ComponentProps, ComponentPropsWithRef, ElementType, ReactNode } from "react";
import { DropdownMenu } from "./DropdownMenu";
export interface FilterDropdownProps extends Omit<ComponentPropsWithRef<"button">, "children"> {
    /**
     * A Lucide icon component for the trigger button.
     * Passed through to FilterButton.
     */
    icon: ElementType;
    /**
     * Label text for the trigger — hidden on small screens.
     * Passed as children to FilterButton.
     */
    children?: ReactNode;
    /** Dropdown menu items — same format as DropdownMenu `items`. */
    items: ComponentProps<typeof DropdownMenu>["items"];
    /** Dropdown alignment relative to the trigger. Defaults to DropdownMenu's default. */
    align?: ComponentProps<typeof DropdownMenu>["align"];
    /** Additional utility classes for the trigger button; other button props, including `ref`, go to it too. */
    className?: string;
}
export declare function FilterDropdown({ icon, children, items, align, className, ...rest }: FilterDropdownProps): import("react/jsx-runtime").JSX.Element;
