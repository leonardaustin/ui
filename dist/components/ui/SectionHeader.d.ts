/**
 * SectionHeader — a bordered section heading used throughout the template.
 *
 * This is the most-repeated markup in the codebase (~30+ occurrences).
 * It renders a small, semibold heading with a bottom border to visually
 * separate content sections within a page.
 *
 * @example
 * ```tsx
 * <SectionHeader>Text Inputs</SectionHeader>
 * ```
 *
 * @example With a custom element or extra class
 * ```tsx
 * <SectionHeader as="h3" className="mb-4">Settings</SectionHeader>
 * ```
 */
import type { ElementType, ReactNode } from "react";
interface SectionHeaderProps {
    /** The heading text or content. */
    children: ReactNode;
    /**
     * The HTML element to render.
     * Defaults to "h2" for semantic correctness within a page that already
     * has an h1 via PageHeader.
     */
    as?: ElementType;
    /** Additional utility classes appended to the root element. */
    className?: string;
    /** Render the dividing bottom border. Defaults to true. */
    border?: boolean;
}
export declare function SectionHeader({ children, as: Tag, className, border, }: SectionHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SectionHeader.d.ts.map