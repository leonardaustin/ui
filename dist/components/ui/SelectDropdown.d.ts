interface SelectDropdownOption {
    value: string;
    label: string;
}
interface SelectDropdownProps {
    options: SelectDropdownOption[];
    value: string;
    onChange: (value: string) => void;
    label?: string;
    placeholder?: string;
    className?: string;
    size?: "sm" | "md";
}
/**
 * A select-only listbox: focus stays on the trigger, which tracks the active
 * option with `aria-activedescendant`. ArrowDown/ArrowUp open it on the
 * selected option and then move; Enter chooses; Escape closes.
 */
export declare function SelectDropdown({ options, value, onChange, label, placeholder, className, size, }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectDropdown.d.ts.map