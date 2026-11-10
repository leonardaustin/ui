export interface ToggleProps {
    /** Whether the switch is on. */
    checked: boolean;
    /** Called with the new checked value when the switch is clicked. */
    onChange: (checked: boolean) => void;
    /** Dims the toggle and blocks interaction. */
    disabled?: boolean;
    /** Text shown beside the switch. */
    label?: string;
    /** Extra classes for the wrapping label element. */
    className?: string;
}
export declare function Toggle({ checked, onChange, disabled, label, className, }: ToggleProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Toggle.d.ts.map