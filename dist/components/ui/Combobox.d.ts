import { type ComponentPropsWithRef, type ReactNode } from "react";
import { type PopoverCloseReason, type PopoverOpenReason } from "../../hooks/usePopover";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface ComboboxOption {
    /** Unique value returned to onValueChange when the option is chosen. */
    value: string;
    /** Text shown in the list and, once selected, on the trigger. */
    label: string;
    /** Show the option but prevent it from being chosen. */
    disabled?: boolean;
}
/**
 * Why the list opened or closed, as passed to `onOpenChange`.
 *
 * - Opening: `toggle` (the trigger clicked, or Enter/Space on it) or
 *   `keyboard` (ArrowDown/ArrowUp on the trigger).
 * - Closing: `select` (an option chosen), `escape`, `toggle` (the trigger
 *   clicked again), `outside-click` (a press outside the field), `blur` (focus
 *   left the field), `anchor-hidden` (the trigger scrolled out of view) or
 *   `disabled` (the field was disabled while open).
 */
export type ComboboxOpenChangeReason = PopoverOpenReason | PopoverCloseReason;
export interface ComboboxProps<T extends ComboboxOption = ComboboxOption> extends Omit<ComponentPropsWithRef<"div">, "children" | "defaultValue" | "onChange" | "placeholder"> {
    /** Options to choose from. Filtered by label against the search text unless filterOptions is false. */
    options: T[];
    /** Value of the selected option (controlled). */
    value?: string;
    /** Initially selected value when uncontrolled. */
    defaultValue?: string;
    /** Called with the value of the chosen option. */
    onValueChange?: (value: string) => void;
    /** Receives the complete result, including caller-owned metadata. */
    onOptionChange?: (option: T) => void;
    /** Text shown on the trigger when nothing is selected. Defaults to "Select...". */
    placeholder?: string;
    /** Visible label above the trigger; also names the listbox. */
    label?: string;
    /** Additional utility classes for the root element. */
    className?: string;
    /** Opt-in larger controls, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    /** ID for the search input inside the dropdown; generated when omitted. */
    id?: string;
    /** Submits the selected value under this name in a native form post. */
    name?: string;
    /** Disable the combobox. */
    disabled?: boolean;
    /** Accessible name for the trigger and search input; takes precedence over `label` for them. The listbox is named by `label` when set, otherwise by this. */
    "aria-label"?: string;
    /** ID(s) of elements describing the combobox, e.g. a hint or error. */
    "aria-describedby"?: string;
    /** Marks the trigger and search input as invalid. */
    "aria-invalid"?: boolean | "true" | "false";
    /** Controlled query. The application owns fetching, cancellation and paging. */
    query?: string;
    /** Called with the search text as it changes; use it to fetch server-side results. */
    onQueryChange?: (query: string) => void;
    /** Set false for server-filtered/paginated results. */
    filterOptions?: boolean;
    /** Retain an existing selection even when it is absent from this result page. */
    selectedOption?: T;
    /** Custom renderer for the content of each option row. */
    renderOption?: (option: T) => ReactNode;
    /** Show the loading message and mark the listbox busy. */
    loading?: boolean;
    /** Content shown while loading. Defaults to "Loading results…". */
    loadingMessage?: ReactNode;
    /** Error content shown above the list, e.g. when a fetch fails. */
    error?: ReactNode;
    /** Called when the Retry button shown beside the error is clicked; the button renders only when provided. */
    onRetry?: () => void;
    /** Content shown when no options match. Defaults to "No results". */
    emptyMessage?: ReactNode;
    /** Pagination/load-more controls, outside the listbox so they remain operable. */
    footer?: ReactNode;
    /**
     * Called once each time the list opens or closes, with why. Use it to
     * reset a controlled `query` (and any paging) when the list closes.
     */
    onOpenChange?: (open: boolean, reason: ComboboxOpenChangeReason) => void;
    /**
     * Open above the field when there is more room there (the default). Set
     * false to always open below, so the list never covers what is above the
     * field; the list then shrinks to the room below (at least 120px).
     */
    flip?: boolean;
}
export declare function Combobox<T extends ComboboxOption = ComboboxOption>({ options, value: valueProp, defaultValue, onValueChange, onOptionChange, placeholder, label, className, controlSize, id, name, disabled, "aria-label": ariaLabel, "aria-describedby": describedBy, "aria-invalid": invalid, query, onQueryChange, filterOptions, selectedOption, renderOption, loading, loadingMessage, error, onRetry, emptyMessage, footer, onOpenChange, flip, ref, onBlur, ...rest }: ComboboxProps<T>): import("react/jsx-runtime").JSX.Element;
