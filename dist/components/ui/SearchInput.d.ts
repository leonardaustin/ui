import { type InputHTMLAttributes, type ReactNode } from "react";
import { type LucideIcon } from "lucide-react";
export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type" | "children" | "dangerouslySetInnerHTML" | "defaultValue"> {
    /** Current search text (controlled). */
    value: string;
    /** Called with the new text on every change. */
    onChange: (value: string) => void;
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
export declare function SearchInput({ value, onChange, placeholder, className, inputClassName, icon: Icon, invalid, errorMessage, "aria-invalid": ariaInvalid, "aria-describedby": ariaDescribedBy, ...inputProps }: SearchInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SearchInput.d.ts.map