import { type ComponentPropsWithRef, type ReactNode } from "react";
export interface Tab {
    key: string;
    label: string;
    content: ReactNode;
    /** Decorative icon shown before the label. */
    icon?: ReactNode;
    /** Number shown after the label, including zero. */
    count?: number;
    /** Spoken description of the count, such as "12 messages". */
    countLabel?: string;
}
export interface TabsProps extends Omit<ComponentPropsWithRef<"div">, "defaultValue" | "children" | "onChange"> {
    /** Tabs to render; `key` identifies the tab, `label` is its button text, `content` shows when active. */
    tabs: Tab[];
    /** Key of the initially active tab when uncontrolled; falls back to the first tab. */
    defaultValue?: string;
    /** Controlled active tab key. When set, the parent owns the state. */
    value?: string;
    /** Called with the tab key whenever a tab is selected. */
    onValueChange?: (key: string) => void;
    /** Extra classes for the root element. */
    className?: string;
    /** Extra classes for the active panel. */
    panelClassName?: string;
}
export declare function Tabs({ tabs, defaultValue, value, onValueChange, className, panelClassName, ref, ...rest }: TabsProps): import("react/jsx-runtime").JSX.Element;
