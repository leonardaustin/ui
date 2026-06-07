import { cn } from "../../lib/cn";

export interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  /** Called when the user releases the slider (pointerup / change) */
  onCommit?: (value: number) => void;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function Slider({
  min,
  max,
  step = 1,
  value,
  onChange,
  onCommit,
  label,
  showValue,
  className,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-text-secondary font-label text-xs font-medium">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-text-primary font-data text-xs">{value}</span>
          )}
        </div>
      )}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onPointerUp={
          onCommit
            ? (e) => onCommit(Number((e.target as HTMLInputElement).value))
            : undefined
        }
        className="bg-bg-tertiary [&::-webkit-slider-thumb]:bg-accent h-1.5 w-full cursor-pointer appearance-none rounded-md [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[100ms] [&::-webkit-slider-thumb]:hover:scale-110"
        style={{
          background: `linear-gradient(to right, var(--accent) ${pct}%, var(--bg-tertiary) ${pct}%)`,
        }}
      />
    </div>
  );
}
