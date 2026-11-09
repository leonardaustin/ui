type AlertType = "success" | "warning" | "error" | "info" | "neutral";
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "children"> {
    /** Tone of the alert; sets the icon and colours. */
    type: AlertType;
    /** Bold heading shown above the content. */
    title?: string;
    children: React.ReactNode;
    /** Show a close button that hides the alert (local state; no callback). */
    dismissible?: boolean;
    /** Buttons or links displayed beside the content. */
    actions?: React.ReactNode;
    /** Apply the alert tone to the title and body. */
    toneBody?: boolean;
    /** Additional utility classes for the root element. */
    className?: string;
}
export declare function Alert({ type, title, children, dismissible, className, actions, toneBody, ...rest }: AlertProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Alert.d.ts.map