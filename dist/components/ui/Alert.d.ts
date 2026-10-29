type AlertType = "success" | "warning" | "error" | "info" | "neutral";
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "children"> {
    type: AlertType;
    title?: string;
    children: React.ReactNode;
    dismissible?: boolean;
    /** Buttons or links displayed beside the content. */
    actions?: React.ReactNode;
    /** Apply the alert tone to the title and body. */
    toneBody?: boolean;
    className?: string;
}
export declare function Alert({ type, title, children, dismissible, className, actions, toneBody, ...rest }: AlertProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Alert.d.ts.map