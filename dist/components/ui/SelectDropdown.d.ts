import type { SelectOption, SelectOptionGroup } from "./Select";
interface SelectDropdownProps {
    /** Flat options, labelled groups, or a mix of both. Disabled leaves are skipped. */
    options: (SelectOption | SelectOptionGroup)[];
    value?: string | null;
    onChange: (value: string) => void;
    label?: string;
    /** Render the label in the empty trigger, including when an empty-valued option is selected. */
    labelPlacement?: "above" | "placeholder";
    placeholder?: string;
    className?: string;
    size?: "sm" | "md";
    /** Disable the trigger and selection while preserving its position in the layout. */
    disabled?: boolean;
}
/**
 * A select-only listbox: focus stays on the trigger, which tracks the active
 * option with `aria-activedescendant`. ArrowDown/ArrowUp open it on the
 * selected option and then move; Home/End jump; Enter or Space chooses;
 * Escape closes. Typing jumps to the first enabled option starting with the
 * typed text (the text resets after a short pause, and repeating a letter
 * cycles); on the closed trigger it selects the match without opening.
 */
export declare function SelectDropdown({ options: entries, value, onChange, label, labelPlacement, placeholder, className, size, disabled, }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectDropdown.d.ts.map