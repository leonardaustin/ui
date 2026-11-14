import { type DisclosureProps } from "./Disclosure";
export interface AccordionItem extends Omit<DisclosureProps, "open" | "defaultOpen" | "onOpenChange"> {
    /** Unique, stable identifier within the accordion. */
    value: string;
}
interface AccordionBaseProps {
    items: AccordionItem[];
    className?: string;
}
export type AccordionProps = AccordionBaseProps & ({
    type?: "single";
    /** Empty string means all sections are closed. */
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
} | {
    type: "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
});
export declare function Accordion(props: AccordionProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Accordion.d.ts.map