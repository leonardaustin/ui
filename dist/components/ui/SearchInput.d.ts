export interface SearchInputProps {
    /** Current search text (controlled). */
    value: string;
    /** Called with the new text on every change. */
    onChange: (value: string) => void;
    /** Placeholder text. Defaults to "Search...". */
    placeholder?: string;
    /** Additional utility classes appended to the wrapper. */
    className?: string;
}
export declare function SearchInput({ value, onChange, placeholder, className, }: SearchInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SearchInput.d.ts.map