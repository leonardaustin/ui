/** A single rule shown by `PasswordRequirements`. */
export interface PasswordRequirement {
    /** Shown in the checklist. Must be unique within a rule list. */
    label: string;
    /** Returns true when `password` satisfies this rule. */
    test: (password: string) => boolean;
}
/** Length, upper, lower and digit — a sensible default rule set. Frozen. */
export declare const defaultPasswordRequirements: readonly PasswordRequirement[];
/** True when `password` passes every rule — use it in submit validation. */
export declare function meetsPasswordRequirements(password: string, requirements?: readonly PasswordRequirement[]): boolean;
//# sourceMappingURL=passwordRequirements.d.ts.map