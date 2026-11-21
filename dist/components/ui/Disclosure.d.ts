import { type ReactNode } from "react";
export interface DisclosureProps {
    /** Summary content; use non-interactive content inside the trigger. */
    title: ReactNode;
    /** Current expanded state when controlled. */
    open?: boolean;
    /** Initial expanded state when uncontrolled. */
    defaultOpen?: boolean;
    /** Called with the next expanded state when the trigger is pressed. */
    onOpenChange?: (open: boolean) => void;
    /** Right-aligned summary metadata, such as a count. */
    meta?: ReactNode;
    children: ReactNode;
    /** Additional classes on the disclosure container. */
    className?: string;
    /** Preserve child state while closed. Defaults to true. */
    keepMounted?: boolean;
}
export declare function Disclosure({ title, open, defaultOpen, onOpenChange, meta, children, className, keepMounted, }: DisclosureProps): import("react/jsx-runtime").JSX.Element;
