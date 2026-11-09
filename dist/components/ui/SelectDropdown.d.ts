interface SelectDropdownOption {
    value: string;
    label: string;
    /** Dimmed with `aria-disabled`; skipped by the keys and typeahead, and not selectable. */
    disabled?: boolean;
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
 * selected option and then move; Home/End jump; Enter or Space chooses;
 * Escape closes. Typing jumps to the first enabled option starting with the
 * typed text (the text resets after a short pause, and repeating a letter
 * cycles); on the closed trigger it selects the match without opening.
 */
export declare function SelectDropdown({ options, value, onChange, label, placeholder, className, size, }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectDropdown.d.ts.map