import type { ElementType, ReactNode } from "react";
export interface PageSectionProps {
    title?: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    children: ReactNode;
    as?: ElementType;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
}
export declare function PageSection({ title, description, actions, children, as: Tag, className, headerClassName, contentClassName, }: PageSectionProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PageSection.d.ts.map