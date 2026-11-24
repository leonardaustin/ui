import { type ComponentPropsWithRef } from "react";
import type { SelectOption, SelectOptionGroup } from "./Select";
export type SelectDropdownSize = "sm" | "md";
export interface SelectDropdownProps extends Omit<ComponentPropsWithRef<"div">, "defaultValue" | "children" | "onChange"> {
    /** Flat options, labelled groups, or a mix of both. Disabled leaves are skipped. */
    options: (SelectOption | SelectOptionGroup)[];
    /** Selected value (controlled). */
    value?: string | null;
    /** Initially selected value when uncontrolled. */
    defaultValue?: string | null;
    /** Called with the chosen option's value. */
    onValueChange?: (value: string) => void;
    label?: string;
    /** Render the label in the empty trigger, including when an empty-valued option is selected. */
    labelPlacement?: "above" | "placeholder";
    placeholder?: string;
    className?: string;
    size?: SelectDropdownSize;
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
export declare function SelectDropdown({ options: entries, value: valueProp, defaultValue, onValueChange, label, labelPlacement, placeholder, className, size, disabled, ref, ...rest }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
