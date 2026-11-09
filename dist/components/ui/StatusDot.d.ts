type Status = "active" | "inactive" | "pending" | "error";
interface StatusDotProps {
    /**
     * Which state the dot shows: `active` (green), `inactive` (gray), `pending`
     * (yellow, gently pulsing) or `error` (red). Resolved through the shared tone
     * table, so the colours match Badge.
     */
    status: Status;
    /** Text shown beside the dot, in the same colour as the dot. Omit for a bare dot. */
    label?: string;
    /** Additional utility classes for the root element. */
    className?: string;
}
export declare function StatusDot({ status, label, className }: StatusDotProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=StatusDot.d.ts.map