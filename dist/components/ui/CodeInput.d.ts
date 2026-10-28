export interface CodeInputProps {
    /**
     * The digits entered so far (controlled). Boxes the user has cleared are
     * left out, so `value.length === length` only when every box is filled.
     */
    value: string;
    onChange: (value: string) => void;
    /**
     * Called with the code whenever an edit leaves every box filled — use it
     * to auto-submit. Fires again if the user then changes a digit.
     */
    onComplete?: (value: string) => void;
    /** Number of digit boxes. Only digits are accepted. */
    length?: number;
    /** Error message shown below the boxes; also marks them invalid. */
    error?: string;
    /** Marks the boxes invalid without a message (e.g. when it's shown elsewhere). */
    invalid?: boolean;
    disabled?: boolean;
    autoFocus?: boolean;
    /** Submits the joined code under this name in a native form post. */
    name?: string;
    /** Accessible name for the group of boxes. */
    "aria-label"?: string;
    className?: string;
}
/**
 * A row of single-digit boxes for one-time codes (MFA, email verification).
 * Handles typing, paste, SMS autofill, Backspace/Delete and arrow keys; each
 * box keeps its position, so clearing one never shifts the others.
 */
export declare function CodeInput({ value, onChange, onComplete, length, error, invalid, disabled, autoFocus, name, "aria-label": ariaLabel, className, }: CodeInputProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CodeInput.d.ts.map