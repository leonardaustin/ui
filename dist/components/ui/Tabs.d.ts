import { type ReactNode } from "react";
interface Tab {
    key: string;
    label: string;
    content: ReactNode;
}
export interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    /** Controlled active tab key. When set, the parent owns the state. */
    value?: string;
    /** Called with the tab key whenever a tab is selected. */
    onChange?: (key: string) => void;
    className?: string;
}
export declare function Tabs({ tabs, defaultTab, value, onChange, className, }: TabsProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map