import type { ChangeEvent, ReactNode } from "react";
export interface UploadDropzoneProps {
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    onChange?: (files: FileList | null, event: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}
export declare function UploadDropzone({ title, description, icon, accept, multiple, disabled, onChange, className, }: UploadDropzoneProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=UploadDropzone.d.ts.map