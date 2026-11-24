import { type ComponentPropsWithRef } from "react";
import { type DisclosureProps } from "./Disclosure";
export interface AccordionItem extends Omit<DisclosureProps, "open" | "defaultOpen" | "onOpenChange"> {
    /** Unique, stable identifier within the accordion. */
    value: string;
}
interface AccordionBaseProps extends Omit<ComponentPropsWithRef<"div">, "children" | "defaultValue" | "onChange"> {
    /** Sections in display order. */
    items: AccordionItem[];
    /** Additional classes on the group. */
    className?: string;
}
export type AccordionProps = AccordionBaseProps & ({
    type?: "single";
    /** Empty string means all sections are closed. */
    value?: string;
    /** Initially expanded item in uncontrolled single mode. */
    defaultValue?: string;
    /** Called with the next selection in single mode. */
    onValueChange?: (value: string) => void;
} | {
    type: "multiple";
    /** Expanded items in controlled multiple mode. */
    value?: string[];
    /** Initially expanded items in uncontrolled multiple mode. */
    defaultValue?: string[];
    /** Called with the next selection in multiple mode. */
    onValueChange?: (value: string[]) => void;
});
export declare function Accordion(props: AccordionProps): import("react/jsx-runtime").JSX.Element;
export {};
