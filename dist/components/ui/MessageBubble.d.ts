import type { HTMLAttributes, ReactNode } from "react";
export interface MessageBubbleProps extends HTMLAttributes<HTMLDivElement> {
    /** Which side of the conversation sent the message. */
    direction: "inbound" | "outbound";
    author?: ReactNode;
    timestamp?: ReactNode;
    status?: ReactNode;
    /** Optional controls, such as reply or copy buttons. */
    actions?: ReactNode;
    children: ReactNode;
}
export declare function MessageBubble({ direction, author, timestamp, status, actions, children, className, ...props }: MessageBubbleProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MessageBubble.d.ts.map