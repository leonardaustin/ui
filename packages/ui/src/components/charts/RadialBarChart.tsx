import { useRef, useState } from "react";

import { cn } from "../../lib/cn";

interface RadialSegment {
  label: string;
  value: number;
  max: number;
  color: string;
}

interface RadialBarChartProps {
  segments: RadialSegment[];
  size?: number;
}

const colorToVar: Record<string, string> = {
  "text-blue": "var(--blue)",
  "text-green": "var(--green)",
  "text-purple": "var(--purple)",
  "text-yellow": "var(--yellow)",
  "text-red": "var(--red)",
  "text-accent": "var(--accent)",
};

export function RadialBarChart({ segments, size = 200 }: RadialBarChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const center = size / 2;
  const strokeWidth = 14;
  const gap = 6;
  const outerRadius = (size - 40) / 2;

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="select-none"
        >
          {segments.map((seg, i) => {
            const r = outerRadius - i * (strokeWidth + gap);
            if (r <= 0) return null;
            const circumference = 2 * Math.PI * r;
            const progress = Math.min(seg.value / seg.max, 1);
            const arcLength = circumference * progress;
            const dashOffset = circumference - arcLength;
            const color = colorToVar[seg.color] ?? "var(--accent)";
            const isHovered = hoverIndex === i;

            return (
              <g
                key={seg.label}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
                className="cursor-pointer"
              >
                {/* Track — also a hover target */}
                <circle
                  cx={center}
                  cy={center}
                  r={r}
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth={strokeWidth}
                  opacity={0.3}
                />
                {/* Progress arc */}
                <circle
                  cx={center}
                  cy={center}
                  r={r}
                  fill="none"
                  stroke={color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={`${arcLength} ${dashOffset}`}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${center} ${center})`}
                  opacity={hoverIndex !== null && !isHovered ? 0.4 : 1}
                  className="pointer-events-none"
                  style={{ transition: "all 150ms ease-out" }}
                />
              </g>
            );
          })}

          {/* Center hit area — fills the inner hole, targets the innermost ring */}
          {(() => {
            const lastIdx = segments.length - 1;
            const innerR =
              outerRadius - lastIdx * (strokeWidth + gap) - strokeWidth / 2;
            return (
              <circle
                cx={center}
                cy={center}
                r={Math.max(0, innerR)}
                fill="rgba(0,0,0,0)"
                onMouseEnter={() => setHoverIndex(lastIdx)}
                onMouseLeave={() => setHoverIndex(null)}
                className="cursor-pointer"
              />
            );
          })()}
        </svg>

        {/* Floating tooltip follows mouse */}
        {hoverIndex !== null &&
          (() => {
            const seg = segments[hoverIndex];
            const pct = Math.round((seg.value / seg.max) * 100);
            const color = colorToVar[seg.color] ?? "var(--accent)";

            return (
              <div
                className="bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg"
                style={{
                  left: mousePos.x,
                  top: mousePos.y,
                  transform: "translate(-50%, -120%)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-text-secondary text-xs whitespace-nowrap">
                    {seg.label}
                  </span>
                  <span className="text-text-primary text-xs font-semibold">
                    {pct}%
                  </span>
                  <span className="text-text-tertiary text-2xs">
                    ({seg.value}/{seg.max})
                  </span>
                </div>
              </div>
            );
          })()}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {segments.map((seg, i) => {
          const pct = Math.round((seg.value / seg.max) * 100);
          return (
            <button
              key={seg.label}
              type="button"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className={cn(
                "flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]",
                hoverIndex !== null && hoverIndex !== i && "opacity-50",
              )}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: colorToVar[seg.color] ?? "var(--accent)",
                }}
              />
              <span className="text-text-secondary text-xs">{seg.label}</span>
              <span className="text-text-primary text-xs font-semibold">
                {pct}%
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
