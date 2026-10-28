import type { HTMLAttributes, ReactNode } from "react";
export type AttachmentStatus = "pending" | "uploading" | "processing" | "ready" | "error";
export interface AttachmentItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "id"> {
    name: string;
    /** Size in bytes; omitted when unknown. */
    size?: number;
    status?: AttachmentStatus;
    statusLabel?: ReactNode;
    error?: ReactNode;
    onRetry?: () => void;
    onRemove?: () => void;
    onDownload?: () => void;
    /** A caller-authorized download URL; the component does not fetch or authorize files. */
    downloadHref?: string;
    actionsDisabled?: boolean;
}
export declare function AttachmentItem({ name, size, status, statusLabel, error, onRetry, onRemove, onDownload, downloadHref, actionsDisabled, className, ...props }: AttachmentItemProps): import("react/jsx-runtime").JSX.Element;
export interface AttachmentListProps extends HTMLAttributes<HTMLUListElement> {
    children?: ReactNode;
}
/** Controlled presentation only. Keep transport, scanning, authorization and send policy in the application. */
export declare function AttachmentList({ children, className, "aria-label": label, ...props }: AttachmentListProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AttachmentList.d.ts.map