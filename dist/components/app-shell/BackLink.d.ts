import type { ReactNode } from "react";
import { type AppShellNavigate } from "./navigation";
export interface BackLinkProps {
    to: string;
    children: ReactNode;
    onNavigate?: AppShellNavigate;
    className?: string;
}
export declare function BackLink({ to, children, onNavigate, className, }: BackLinkProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BackLink.d.ts.map