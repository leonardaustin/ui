export interface FieldControlOptions {
    id?: string;
    error?: string;
    hint?: string;
    describedBy?: string;
    invalid?: boolean | "true" | "false" | "grammar" | "spelling";
    required?: boolean;
}
export declare function useFieldControl({ id, error, hint, describedBy, invalid, required, }: FieldControlOptions): {
    inputId: string;
    errorId: string | undefined;
    hintId: string | undefined;
    describedBy: string | undefined;
    invalid: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
    required: boolean | undefined;
};
//# sourceMappingURL=useFieldControl.d.ts.map