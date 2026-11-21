type AlertType = "success" | "warning" | "error" | "danger" | "info" | "neutral";
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "children"> {
    /** Sets the icon and colours. "danger" and "error" are equivalent. */
    type: AlertType;
    /** Bold heading shown above the content. */
    title?: string;
    children: React.ReactNode;
    /** Show a close button. The alert hides itself when no onDismiss is provided. */
    dismissible?: boolean;
    /** Called when the close button is pressed. The caller owns visibility when supplied. */
    onDismiss?: () => void;
    /** Buttons or links displayed beside the content. */
    actions?: React.ReactNode;
    /** Apply the alert tone to the title and body. */
    toneBody?: boolean;
    /** Additional utility classes for the root element. */
    className?: string;
}
export declare function Alert({ type, title, children, dismissible, onDismiss, className, actions, toneBody, ...rest }: AlertProps): import("react/jsx-runtime").JSX.Element | null;
export {};
