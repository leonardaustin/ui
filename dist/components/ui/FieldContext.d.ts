export interface FieldContextValue {
    id?: string;
    describedBy?: string;
    invalid?: boolean;
    required?: boolean;
    /** Text a single-value Select shows in its empty closed control instead of a visible field label. */
    placeholderLabel?: string;
}
export declare const FieldContext: import("react").Context<FieldContextValue | null>;
export declare function describeField(...ids: (string | undefined)[]): string | undefined;
//# sourceMappingURL=FieldContext.d.ts.map