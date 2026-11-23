import type { ComponentPropsWithRef, ReactNode } from "react";
export interface MessageBubbleProps extends ComponentPropsWithRef<"div"> {
    /** Which side of the conversation sent the message. */
    direction: "inbound" | "outbound";
    /** Sender name displayed above the message. */
    author?: ReactNode;
    /** Time displayed below the message. */
    timestamp?: ReactNode;
    /** Delivery state or other status displayed below the message. */
    status?: ReactNode;
    /** Optional controls, such as reply or copy buttons. */
    actions?: ReactNode;
    children: ReactNode;
}
export declare function MessageBubble({ direction, author, timestamp, status, actions, children, className, ...props }: MessageBubbleProps): import("react/jsx-runtime").JSX.Element;
