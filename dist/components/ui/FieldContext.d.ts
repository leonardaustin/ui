export interface FieldContextValue {
    id?: string;
    describedBy?: string;
    invalid?: boolean;
    required?: boolean;
}
export declare const FieldContext: import("react").Context<FieldContextValue | null>;
export declare function describeField(...ids: (string | undefined)[]): string | undefined;
//# sourceMappingURL=FieldContext.d.ts.map