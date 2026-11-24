import type { ComponentPropsWithRef, ElementType, ReactNode } from "react";
export interface PageSectionProps extends Omit<ComponentPropsWithRef<"section">, "title"> {
    /** Section heading, rendered with the `as` element. */
    title?: ReactNode;
    /** Muted text below the title. */
    description?: ReactNode;
    /** Buttons or controls aligned to the right of the header. */
    actions?: ReactNode;
    /** Section body content. */
    children: ReactNode;
    /** Element or component used for the title. Defaults to `h2`. */
    as?: ElementType;
    /** Additional utility classes appended to the root section. */
    className?: string;
    /** Additional utility classes for the header row. */
    headerClassName?: string;
    /** Additional utility classes for the wrapper around `children`. */
    contentClassName?: string;
}
export declare function PageSection({ title, description, actions, children, as: Tag, className, headerClassName, contentClassName, ref, ...rest }: PageSectionProps): import("react/jsx-runtime").JSX.Element;
