import type { ComponentPropsWithRef } from "react";
export interface KbdProps extends ComponentPropsWithRef<"kbd"> {
    /** The key or key combination to display. */
    children: React.ReactNode;
    /** Additional utility classes appended to the root element. */
    className?: string;
}
export declare function Kbd({ children, className, ref, ...rest }: KbdProps): import("react/jsx-runtime").JSX.Element;
