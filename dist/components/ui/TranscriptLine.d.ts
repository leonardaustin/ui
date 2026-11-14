import type { HTMLAttributes, ReactNode } from "react";
export interface TranscriptLineProps extends Omit<HTMLAttributes<HTMLDivElement>, "role"> {
    speaker: ReactNode;
    /** Changes presentation only; the caller decides the speaker's label. */
    role?: "patient" | "staff" | "agent" | "system";
    /** Time offset from the beginning of the recording, in seconds. */
    time?: number;
    /** When supplied with time, turns the timestamp into a seek button. */
    onSeek?: (seconds: number) => void;
    highlighted?: boolean;
    children: ReactNode;
}
export declare function TranscriptLine({ speaker, role, time, onSeek, highlighted, children, className, ...props }: TranscriptLineProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TranscriptLine.d.ts.map