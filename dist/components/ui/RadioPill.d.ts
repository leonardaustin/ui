interface RadioPillProps<T extends string> {
    options: {
        value: T;
        label: string;
    }[];
    value: T;
    onChange: (value: T) => void;
    disabled?: boolean;
    className?: string;
    "aria-label"?: string;
}
export declare function RadioPill<T extends string>({ options, value, onChange, disabled, className, "aria-label": ariaLabel, }: RadioPillProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadioPill.d.ts.map