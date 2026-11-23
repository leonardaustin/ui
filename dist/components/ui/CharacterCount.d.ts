import { type ComponentPropsWithRef } from "react";
export interface CharacterCountProps extends ComponentPropsWithRef<"p"> {
    /** Current text; its length is counted. */
    value: string;
    /** Character limit; the count turns red when exceeded. */
    maxLength: number;
    /** Delay screen-reader announcements while typing; visible text updates immediately. */
    announcementDelay?: number;
}
/** Counts UTF-16 code units, matching native input/textarea maxLength. */
export declare function CharacterCount({ value, maxLength, announcementDelay, className, ref, ...props }: CharacterCountProps): import("react/jsx-runtime").JSX.Element;
