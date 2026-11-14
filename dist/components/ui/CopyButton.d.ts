import { type ButtonProps } from "./Button";
export interface CopyButtonProps extends Omit<ButtonProps, "children" | "icon" | "hideLabel" | "onClick" | "onCopy" | "value"> {
    value: string | (() => string);
    label?: string;
    copiedLabel?: string;
    iconOnly?: boolean;
    onCopy?: (ok: boolean) => void;
}
export declare function CopyButton({ value, label, copiedLabel, iconOnly, onCopy, variant, ...props }: CopyButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CopyButton.d.ts.map