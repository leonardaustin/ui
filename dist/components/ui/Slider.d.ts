import { type ChangeEventHandler, type ComponentPropsWithRef } from "react";
export interface SliderProps extends Omit<ComponentPropsWithRef<"div">, "defaultValue" | "children" | "onChange" | "id" | "aria-label" | "aria-labelledby"> {
    /** Lowest selectable value. */
    min: number;
    /** Highest selectable value. Must be greater than `min`. */
    max: number;
    /** Increment between selectable values. Defaults to 1. */
    step?: number;
    /** Current value (controlled). Omit to let the slider keep its own value. */
    value?: number;
    /** Initial value when uncontrolled. Defaults to `min`. */
    defaultValue?: number;
    /** Called with the new numeric value on every change while dragging or using the keyboard. */
    onValueChange?: (value: number) => void;
    /** Native change event of the range input. */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Called when the user finishes a change: pointer release, or the key
     * release after a keyboard adjustment (arrows, Home/End, PageUp/PageDown).
     */
    onValueCommit?: (value: number) => void;
    /** Visible label, associated with the range input. */
    label?: string;
    /** Accessible name when no visible `label` is rendered. */
    "aria-label"?: string;
    /** Id of an element that names the slider (overrides `label`). */
    "aria-labelledby"?: string;
    /** Id for the range input. Generated when omitted. */
    id?: string;
    /** Show the current value as text on the right of the label row. */
    showValue?: boolean;
    /** Additional utility classes for the root element. */
    className?: string;
}
export declare function Slider({ min, max, step, value: valueProp, defaultValue, onValueChange, onChange, onValueCommit, label, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, id, showValue, className, ref, ...rest }: SliderProps): import("react/jsx-runtime").JSX.Element;
