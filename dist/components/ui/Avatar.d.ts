export type AvatarSize = "xs" | "sm" | "md" | "lg";
export interface AvatarProps {
    /** Person's name; yields the initials, a stable background colour and the accessible label. */
    name: string;
    /** Image URL; when set, the photo replaces the initials. */
    src?: string;
    /** Avatar size. Defaults to "md". */
    size?: AvatarSize;
    /** Additional utility classes for the root element. */
    className?: string;
}
export declare function Avatar({ name, src, size, className }: AvatarProps): import("react/jsx-runtime").JSX.Element;
