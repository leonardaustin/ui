import type { ButtonHTMLAttributes } from "react";
type OAuthProvider = "github" | "google";
export interface OAuthButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    provider: OAuthProvider;
}
export declare function OAuthButton({ provider, children, ...props }: OAuthButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=OAuthButton.d.ts.map