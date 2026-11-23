import { type ChangeEvent, type ComponentPropsWithRef, type DragEvent, type ReactNode } from "react";
export interface UploadDropzoneProps extends Omit<ComponentPropsWithRef<"input">, "type" | "title" | "children"> {
    /** Primary prompt text; defaults to a drag-and-drop or click-to-browse message. */
    title?: ReactNode;
    /** Secondary hint text (e.g. accepted types or size limits), linked via `aria-describedby`. */
    description?: ReactNode;
    /** Replaces the default upload icon. */
    icon?: ReactNode;
    /** Receives both picker selections and drops. The caller owns upload and file validation. */
    onFilesChange?: (files: FileList, event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLLabelElement>) => void;
}
export declare function UploadDropzone({ title, description, icon, multiple, disabled, onChange, onFilesChange, className, id, "aria-describedby": describedBy, ref, ...inputProps }: UploadDropzoneProps): import("react/jsx-runtime").JSX.Element;
