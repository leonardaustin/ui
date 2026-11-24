import type { ComponentPropsWithRef, ReactNode } from "react";
export interface ProseContentProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
    /** Rich content (headings, paragraphs, lists) styled by the prose rules. */
    children: ReactNode;
    /** Additional utility classes appended to the root element. */
    className?: string;
}
export declare function ProseContent({ children, className, ref, ...rest }: ProseContentProps): import("react/jsx-runtime").JSX.Element;
