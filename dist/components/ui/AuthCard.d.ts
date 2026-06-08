import type { ElementType, ReactNode } from "react";
export interface AuthCardProps {
    title: string;
    subtitle?: string;
    icon?: ElementType;
    children: ReactNode;
    footer?: ReactNode;
    className?: string;
}
export declare function AuthCard({ title, subtitle, icon: Icon, children, footer, className, }: AuthCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AuthCard.d.ts.map