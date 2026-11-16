import type { ReactNode } from "react";
export interface ProseContentProps {
    /** Rich content (headings, paragraphs, lists) styled by the prose rules. */
    children: ReactNode;
    /** Additional utility classes appended to the root element. */
    className?: string;
}
export declare function ProseContent({ children, className }: ProseContentProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ProseContent.d.ts.map