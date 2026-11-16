import type { ReactNode } from "react";
import { type AppShellNavigate } from "./navigation";
export interface BackLinkProps {
    /** Destination path, used as the link `href`. */
    to: string;
    /** Link text shown after the arrow icon. */
    children: ReactNode;
    /** Called with `to` on a plain left-click instead of a full page load, for client-side routing. */
    onNavigate?: AppShellNavigate;
    /** Extra classes for the link. */
    className?: string;
}
export declare function BackLink({ to, children, onNavigate, className, }: BackLinkProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BackLink.d.ts.map