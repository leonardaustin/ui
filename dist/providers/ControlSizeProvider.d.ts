import type { ReactNode } from "react";
import { type ControlSize } from "./ControlSizeContext";
export interface ControlSizeProviderProps {
    /** Comfortable controls use a minimum 44px hit area and larger text. */
    size: ControlSize;
    children: ReactNode;
}
export declare function ControlSizeProvider({ size, children, }: ControlSizeProviderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ControlSizeProvider.d.ts.map