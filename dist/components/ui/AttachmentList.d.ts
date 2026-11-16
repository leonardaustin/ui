import type { HTMLAttributes, ReactNode } from "react";
export type AttachmentStatus = "pending" | "uploading" | "processing" | "ready" | "error";
export interface AttachmentItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
    /** File name shown in the row and used in action labels. */
    name: string;
    /** Size in bytes; omitted when unknown. */
    size?: number;
    /** Upload state that sets the default status text. Defaults to "ready". */
    status?: AttachmentStatus;
    /** Overrides the default text for the current status. */
    statusLabel?: ReactNode;
    /** Error message shown in place of the status text. The row is styled as an error only when `status` is "error". */
    error?: ReactNode;
    /** Called when Retry is clicked; the Retry button renders only when provided. */
    onRetry?: () => void;
    /** Called when Remove is clicked; the Remove button renders only when provided. */
    onRemove?: () => void;
    /** Called when the Download button is clicked; renders a button only when provided. */
    onDownload?: () => void;
    /** A caller-authorized download URL; the component does not fetch or authorize files. */
    downloadHref?: string;
    /** Disable the retry, download and remove actions. */
    actionsDisabled?: boolean;
}
export declare function AttachmentItem({ name, size, status, statusLabel, error, onRetry, onRemove, onDownload, downloadHref, actionsDisabled, className, ...props }: AttachmentItemProps): import("react/jsx-runtime").JSX.Element;
export interface AttachmentListProps extends HTMLAttributes<HTMLUListElement> {
    children?: ReactNode;
}
/** Controlled presentation only. Keep transport, scanning, authorization and send policy in the application. */
export declare function AttachmentList({ children, className, "aria-label": label, ...props }: AttachmentListProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AttachmentList.d.ts.map