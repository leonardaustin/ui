export interface ToggleProps {
    /** Whether the switch is on. */
    checked: boolean;
    /** Called with the new checked value when the switch is clicked. */
    onChange: (checked: boolean) => void;
    /** Dims the toggle and blocks interaction. */
    disabled?: boolean;
    /** Text shown beside the switch. */
    label?: string;
    /** ID of an element that names the switch, including when no inline label is shown. */
    "aria-labelledby"?: string;
    /** ID of an element that describes the switch. */
    "aria-describedby"?: string;
    /** Extra classes for the wrapping label element. */
    className?: string;
}
export declare function Toggle({ checked, onChange, disabled, label, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, className, }: ToggleProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Toggle.d.ts.map