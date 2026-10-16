interface ComboboxOption {
    value: string;
    label: string;
}
interface ComboboxProps {
    options: ComboboxOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
    className?: string;
}
export declare function Combobox({ options, value, onChange, placeholder, label, className, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Combobox.d.ts.map