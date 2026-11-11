import type { ReactNode } from "react";
interface EmptyStateProps {
    /** Icon shown in the tile above the title. Defaults to an inbox icon. */
    icon?: ReactNode;
    /** Heading text. */
    title: string;
    /** Supporting text below the title. */
    description?: string;
    /** Call-to-action, e.g. a Button, shown below the description. */
    action?: ReactNode;
    /** Additional utility classes for the root element. */
    className?: string;
}
export declare function EmptyState({ icon, title, description, action, className, }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=EmptyState.d.ts.map