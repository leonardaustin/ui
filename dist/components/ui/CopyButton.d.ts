import { type ButtonProps } from "./Button";
export interface CopyButtonProps extends Omit<ButtonProps, "children" | "icon" | "hideLabel" | "onClick" | "onCopy" | "value"> {
    /** Text to copy or a function evaluated when the button is pressed. */
    value: string | (() => string);
    /** Visible label, or accessible name and tooltip in icon-only mode. */
    label?: string;
    /** Temporary success label. */
    copiedLabel?: string;
    /** Show the icon without visible text. */
    iconOnly?: boolean;
    /** Called with true on success or false on failure. */
    onCopy?: (ok: boolean) => void;
}
export declare function CopyButton({ value, label, copiedLabel, iconOnly, onCopy, variant, ref, ...props }: CopyButtonProps): import("react/jsx-runtime").JSX.Element;
