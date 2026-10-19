import { type HTMLAttributes } from "react";
export interface CharacterCountProps extends HTMLAttributes<HTMLParagraphElement> {
    value: string;
    maxLength: number;
    /** Delay screen-reader announcements while typing; visible text updates immediately. */
    announcementDelay?: number;
}
/** Counts UTF-16 code units, matching native input/textarea maxLength. */
export declare function CharacterCount({ value, maxLength, announcementDelay, className, ...props }: CharacterCountProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=CharacterCount.d.ts.map