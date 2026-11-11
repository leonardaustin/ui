export interface FieldContextValue {
    id?: string;
    describedBy?: string;
    invalid?: boolean;
    required?: boolean;
    /** Text a single-value Select or SelectDropdown shows in its empty closed control instead of a visible field label. */
    placeholderLabel?: string;
    /** Id the field's visible label takes once a control calls `claimLabel`. */
    labelId?: string;
    /**
     * Gives the label `labelId` while the calling control is mounted, for a
     * control that names itself by the label plus its own text. Returns the
     * cleanup. Native controls never call it, so their label keeps no id.
     */
    claimLabel?: () => () => void;
}
export declare const FieldContext: import("react").Context<FieldContextValue | null>;
export declare function describeField(...ids: (string | undefined)[]): string | undefined;
//# sourceMappingURL=FieldContext.d.ts.map