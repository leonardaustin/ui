interface RadioPillProps<T extends string> {
    /** The segments to render, in order. */
    options: {
        value: T;
        label: string;
    }[];
    /** Value of the currently selected option. */
    value: T;
    /** Called with the option's value when a segment is clicked. */
    onChange: (value: T) => void;
    /** Disables all segments and dims the control. */
    disabled?: boolean;
    /** Additional utility classes appended to the radiogroup. */
    className?: string;
    /** Accessible name for the radiogroup. */
    "aria-label"?: string;
}
export declare function RadioPill<T extends string>({ options, value, onChange, disabled, className, "aria-label": ariaLabel, }: RadioPillProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadioPill.d.ts.map