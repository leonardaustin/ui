import type { ElementType, ReactNode } from "react";
export interface AuthCardProps {
    /** Heading shown at the top of the card. */
    title: string;
    /** Secondary line shown below the title. */
    subtitle?: string;
    /** Icon component rendered in an accent tile above the title. */
    icon?: ElementType;
    /** Card body, typically the form. */
    children: ReactNode;
    /** Centred text below the body, e.g. a link to sign up or sign in. */
    footer?: ReactNode;
    /** Additional utility classes for the outer wrapper. */
    className?: string;
}
export declare function AuthCard({ title, subtitle, icon: Icon, children, footer, className, }: AuthCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AuthCard.d.ts.map