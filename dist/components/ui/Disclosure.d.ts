import { type ReactNode } from "react";
export interface DisclosureProps {
    /** Summary content; use non-interactive content inside the trigger. */
    title: ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    /** Right-aligned summary metadata, such as a count. */
    meta?: ReactNode;
    children: ReactNode;
    className?: string;
    /** Preserve child state while closed. Defaults to true. */
    keepMounted?: boolean;
}
export declare function Disclosure({ title, open, defaultOpen, onOpenChange, meta, children, className, keepMounted, }: DisclosureProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Disclosure.d.ts.map