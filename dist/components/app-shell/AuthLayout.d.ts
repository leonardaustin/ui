import type { ComponentPropsWithRef, ReactNode } from "react";
export interface AuthLayoutProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
    /** Content centered on the page, typically an auth card. */
    children?: ReactNode;
    /** Extra classes for the full-page wrapper. */
    className?: string;
}
export declare function AuthLayout({ children, className, ref, ...rest }: AuthLayoutProps): import("react/jsx-runtime").JSX.Element;
