import type { ComponentPropsWithRef } from "react";
type OAuthProvider = "github" | "google";
export interface OAuthButtonProps extends ComponentPropsWithRef<"button"> {
    /** Identity provider; selects the icon and default label (`github` or `google`). */
    provider: OAuthProvider;
}
export declare function OAuthButton({ provider, children, ...props }: OAuthButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
