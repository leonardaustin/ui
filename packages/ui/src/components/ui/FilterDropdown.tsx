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

import type { ComponentProps, ElementType, ReactNode } from "react";

import { DropdownMenu } from "./DropdownMenu";
import { FilterButton } from "./FilterButton";

interface FilterDropdownProps {
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
  /** Additional utility classes for the trigger button. */
  className?: string;
}

export function FilterDropdown({
  icon,
  children,
  items,
  align,
  className,
}: FilterDropdownProps) {
  return (
    <DropdownMenu
      align={align}
      trigger={
        <FilterButton icon={icon} className={className}>
          {children}
        </FilterButton>
      }
      items={items}
    />
  );
}
