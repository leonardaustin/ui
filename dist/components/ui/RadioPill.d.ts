import type { ComponentPropsWithRef } from "react";
export interface RadioPillProps<T extends string> extends Omit<ComponentPropsWithRef<"div">, "defaultValue" | "children" | "onChange"> {
    /** The segments to render, in order. Disabled segments are skipped by keyboard navigation. */
    options: {
        value: T;
        label: string;
        disabled?: boolean;
    }[];
    /** Value of the currently selected option. */
    value?: T;
    /** Initially selected value when uncontrolled. */
    defaultValue?: T;
    /** Called with the option's value when a segment is selected. */
    onValueChange?: (value: T) => void;
    /** Disables all segments and dims the control. */
    disabled?: boolean;
    /** Additional utility classes appended to the radiogroup. */
    className?: string;
    /** Accessible name for the radiogroup. */
    "aria-label"?: string;
}
export declare function RadioPill<T extends string>({ options, value: valueProp, defaultValue, onValueChange, disabled, className, "aria-label": ariaLabel, ref, ...rest }: RadioPillProps<T>): import("react/jsx-runtime").JSX.Element;
