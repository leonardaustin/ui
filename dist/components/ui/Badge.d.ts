export type BadgeColor = "green" | "yellow" | "red" | "blue" | "purple" | "gray";
interface BadgeProps {
    color?: BadgeColor;
    dot?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare function Badge({ color, dot, children, className, }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Badge.d.ts.map