import { type ChangeEvent, type DragEvent, type InputHTMLAttributes, type ReactNode } from "react";
export interface UploadDropzoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "title" | "children"> {
    /** Primary prompt text; defaults to a drag-and-drop or click-to-browse message. */
    title?: ReactNode;
    /** Secondary hint text (e.g. accepted types or size limits), linked via `aria-describedby`. */
    description?: ReactNode;
    /** Replaces the default upload icon. */
    icon?: ReactNode;
    /** Existing picker callback; receives the genuine native-input change event. */
    onChange?: (files: FileList | null, event: ChangeEvent<HTMLInputElement>) => void;
    /** Receives both picker selections and drops. The caller owns upload and file validation. */
    onFilesChange?: (files: FileList, event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLLabelElement>) => void;
}
export declare const UploadDropzone: import("react").ForwardRefExoticComponent<UploadDropzoneProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=UploadDropzone.d.ts.map