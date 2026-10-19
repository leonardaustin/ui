type AlertType = "success" | "warning" | "error" | "info";
export interface AlertProps {
    type: AlertType;
    title?: string;
    children: React.ReactNode;
    dismissible?: boolean;
    className?: string;
}
export declare function Alert({ type, title, children, dismissible, className, }: AlertProps): import("react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Alert.d.ts.map