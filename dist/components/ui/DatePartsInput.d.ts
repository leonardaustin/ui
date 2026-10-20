import { type ComponentPropsWithRef, type ReactNode } from "react";
export interface DateParts {
    day: string;
    month: string;
    year: string;
}
export interface DatePartsInputProps {
    value: DateParts;
    onChange: (value: DateParts) => void;
    label: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    id?: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    /** Inclusive year bounds for validation and the year selector. */
    minYear?: number;
    maxYear?: number;
    /** Native attributes for each text input, including refs, autocomplete and blur handlers. */
    inputProps?: Partial<Record<keyof DateParts, ComponentPropsWithRef<"input">>>;
}
/** Retains raw strings, including partial/invalid dates. Validates the combined civil date and offers native selectors for each field. */
export declare function DatePartsInput({ value, onChange, label, hint, error, id, name, disabled, required, className, inputProps, minYear, maxYear, }: DatePartsInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DatePartsInput.d.ts.map