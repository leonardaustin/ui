import { type ComponentPropsWithRef, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
export interface SearchInputProps extends Omit<ComponentPropsWithRef<"input">, "value" | "defaultValue" | "type" | "children" | "dangerouslySetInnerHTML"> {
    /** Current search text (controlled). */
    value?: string;
    /** Initial text when uncontrolled. */
    defaultValue?: string;
    /** Called with the new text on every change. */
    onValueChange?: (value: string) => void;
    /** Placeholder text. Defaults to "Search...". */
    placeholder?: string;
    /** Additional utility classes appended to the wrapper. */
    className?: string;
    /** Additional utility classes appended to the input. */
    inputClassName?: string;
    /** Leading icon. Defaults to Search. */
    icon?: LucideIcon;
    /** Shows the invalid border and warning icon. */
    invalid?: boolean;
    /** Message shown below the input while invalid. */
    errorMessage?: ReactNode;
}
export declare function SearchInput({ value: valueProp, defaultValue, onValueChange, onChange, placeholder, className, inputClassName, icon: Icon, invalid, errorMessage, "aria-invalid": ariaInvalid, "aria-describedby": ariaDescribedBy, ref, ...inputProps }: SearchInputProps): import("react/jsx-runtime").JSX.Element;
