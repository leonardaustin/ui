import type { ButtonHTMLAttributes } from "react";
type OAuthProvider = "github" | "google";
export interface OAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Identity provider; selects the icon and default label (`github` or `google`). */
    provider: OAuthProvider;
}
export declare function OAuthButton({ provider, children, ...props }: OAuthButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=OAuthButton.d.ts.map