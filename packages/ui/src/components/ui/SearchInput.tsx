import { Search } from "lucide-react";

import { cn } from "../../lib/cn";

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
}: SearchInputProps) {
  return (
    <div className={cn("relative", className)}>
      <Search className="text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs",
          "border-border rounded-md border",
          "placeholder:text-text-disabled",
          "transition-colors duration-[100ms]",
          "focus:border-accent focus:outline-none",
        )}
      />
    </div>
  );
}
