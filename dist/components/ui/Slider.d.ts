export interface SliderProps {
    /** Lowest selectable value. */
    min: number;
    /** Highest selectable value. Must be greater than `min`. */
    max: number;
    /** Increment between selectable values. Defaults to 1. */
    step?: number;
    /** Current value. The slider is controlled: update it from `onChange`. */
    value: number;
    /** Called with the new numeric value on every change while dragging or using the keyboard. */
    onChange: (value: number) => void;
    /**
     * Called when the user finishes a change: pointer release, or the key
     * release after a keyboard adjustment (arrows, Home/End, PageUp/PageDown).
     */
    onCommit?: (value: number) => void;
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
export declare function Slider({ min, max, step, value, onChange, onCommit, label, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, id, showValue, className, }: SliderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Slider.d.ts.map