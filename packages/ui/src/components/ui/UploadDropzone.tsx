import type { ChangeEvent, ReactNode } from "react";

import { UploadCloud } from "lucide-react";

import { cn } from "../../lib/cn";

export interface UploadDropzoneProps {
  title?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  onChange?: (
    files: FileList | null,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  className?: string;
}

export function UploadDropzone({
  title = "Drag and drop files here, or click to browse",
  description,
  icon,
  accept,
  multiple,
  disabled,
  onChange,
  className,
}: UploadDropzoneProps) {
  return (
    <label
      className={cn(
        "border-border hover:border-border-strong block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]",
        disabled
          ? "cursor-not-allowed opacity-60"
          : "cursor-pointer hover:bg-bg-hover",
        className,
      )}
    >
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        className="sr-only"
        onChange={(event) => onChange?.(event.target.files, event)}
      />
      <div className="text-text-tertiary mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-bg-tertiary">
        {icon ?? <UploadCloud className="h-4.5 w-4.5" />}
      </div>
      <p className="text-text-secondary mb-1 text-xs">{title}</p>
      {description && (
        <p className="text-2xs text-text-tertiary">{description}</p>
      )}
    </label>
  );
}
