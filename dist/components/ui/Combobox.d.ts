import { type ReactNode } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface ComboboxOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface ComboboxProps<T extends ComboboxOption = ComboboxOption> {
    options: T[];
    value: string;
    onChange: (value: string) => void;
    /** Receives the complete result, including caller-owned metadata. */
    onOptionChange?: (option: T) => void;
    placeholder?: string;
    label?: string;
    className?: string;
    /** Opt-in larger controls, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    id?: string;
    name?: string;
    disabled?: boolean;
    "aria-label"?: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean | "true" | "false";
    /** Controlled query. The application owns fetching, cancellation and paging. */
    query?: string;
    onQueryChange?: (query: string) => void;
    /** Set false for server-filtered/paginated results. */
    filterOptions?: boolean;
    /** Retain an existing selection even when it is absent from this result page. */
    selectedOption?: T;
    renderOption?: (option: T) => ReactNode;
    loading?: boolean;
    loadingMessage?: ReactNode;
    error?: ReactNode;
    onRetry?: () => void;
    emptyMessage?: ReactNode;
    /** Pagination/load-more controls, outside the listbox so they remain operable. */
    footer?: ReactNode;
}
export declare function Combobox<T extends ComboboxOption = ComboboxOption>({ options, value, onChange, onOptionChange, placeholder, label, className, controlSize, id, name, disabled, "aria-label": ariaLabel, "aria-describedby": describedBy, "aria-invalid": invalid, query, onQueryChange, filterOptions, selectedOption, renderOption, loading, loadingMessage, error, onRetry, emptyMessage, footer, }: ComboboxProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Combobox.d.ts.map