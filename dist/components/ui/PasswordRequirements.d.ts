import { type PasswordRequirement } from "../../lib/passwordRequirements";
export interface PasswordRequirementsProps {
    /** The password to check against each rule. */
    password: string;
    /** Rules to list, each with a unique label. Defaults to `defaultPasswordRequirements`. */
    requirements?: readonly PasswordRequirement[];
    /** Keep the list visible while the password is empty. */
    showWhenEmpty?: boolean;
    className?: string;
}
/** A live checklist of password rules, ticked off as the user types. */
export declare function PasswordRequirements({ password, requirements, showWhenEmpty, className, }: PasswordRequirementsProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=PasswordRequirements.d.ts.map