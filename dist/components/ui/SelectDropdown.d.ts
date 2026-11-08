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
export declare function SelectDropdown({ options, value, onChange, label, placeholder, className, size, }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectDropdown.d.ts.map