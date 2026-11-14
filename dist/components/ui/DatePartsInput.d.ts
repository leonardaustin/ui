import { type ComponentPropsWithRef, type ReactNode } from "react";
export interface DateParts {
    day: string;
    month: string;
    year: string;
}
export interface DatePartsInputProps {
    /** Raw day, month and year strings (controlled); may be partial or invalid. */
    value: DateParts;
    /** Called with the updated day, month and year strings on every edit. */
    onChange: (value: DateParts) => void;
    /** Group legend describing the date, e.g. "Date of birth". */
    label: ReactNode;
    /** Helper text shown below the legend. */
    hint?: ReactNode;
    /** Error message; overrides the built-in validation message. */
    error?: ReactNode;
    /** Base ID for the fieldset; part inputs use it as a prefix. Generated when omitted. */
    id?: string;
    /** Base name for the inputs, submitted as name.day, name.month and name.year. */
    name?: string;
    /** Disable all three inputs. */
    disabled?: boolean;
    /** Mark the date as required and fail validation while empty. */
    required?: boolean;
    /** Additional utility classes for the root fieldset. */
    className?: string;
    /** Inclusive year bounds for validation and the year selector. */
    minYear?: number;
    /** Inclusive upper year bound. Defaults to 2100. */
    maxYear?: number;
    /** Native attributes for each text input, including refs, autocomplete and blur handlers. */
    inputProps?: Partial<Record<keyof DateParts, ComponentPropsWithRef<"input">>>;
}
/** Retains raw strings, including partial/invalid dates. Validates the combined civil date and offers native selectors for each field. */
export declare function DatePartsInput({ value, onChange, label, hint, error, id, name, disabled, required, className, inputProps, minYear, maxYear, }: DatePartsInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DatePartsInput.d.ts.map