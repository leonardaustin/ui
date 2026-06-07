import { useState } from "react";

import { cn } from "../../lib/cn";

interface RadarDataPoint {
  label: string;
  value: number;
}

interface RadarChartProps {
  data: RadarDataPoint[];
  /** Max value for the scale. Defaults to auto from data. */
  maxValue?: number;
  size?: number;
}

const RINGS = 4;

export function RadarChart({ data, maxValue, size = 240 }: RadarChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const max = maxValue ?? Math.max(...data.map((d) => d.value));
  const center = size / 2;
  const radius = (size - 60) / 2; // Leave room for labels
  const angleStep = (2 * Math.PI) / data.length;

  function polarToXY(angle: number, r: number): [number, number] {
    return [
      center + r * Math.cos(angle - Math.PI / 2),
      center + r * Math.sin(angle - Math.PI / 2),
    ];
  }

  // Build polygon path for the data
  const dataPoints = data.map((d, i) => {
    const r = (d.value / max) * radius;
    return polarToXY(i * angleStep, r);
  });
  const dataPath = dataPoints.map((p) => `${p[0]},${p[1]}`).join(" ");

  return (
    <div className="relative flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="select-none"
      >
        {/* Concentric ring guides */}
        {Array.from({ length: RINGS }, (_, ring) => {
          const r = ((ring + 1) / RINGS) * radius;
          const points = data
            .map((_, i) => polarToXY(i * angleStep, r))
            .map((p) => `${p[0]},${p[1]}`)
            .join(" ");
          return (
            <polygon
              key={ring}
              points={points}
              fill="none"
              stroke="var(--border)"
              strokeWidth={1}
              opacity={0.5}
            />
          );
        })}

        {/* Axis lines */}
        {data.map((_, i) => {
          const [x, y] = polarToXY(i * angleStep, radius);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke="var(--border)"
              strokeWidth={1}
              opacity={0.3}
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={dataPath}
          fill="var(--accent)"
          fillOpacity={0.15}
          stroke="var(--accent)"
          strokeWidth={2}
          strokeLinejoin="round"
        />

        {/* Data dots */}
        {dataPoints.map((p, i) => {
          const isHovered = hoverIndex === i;
          return (
            <circle
              key={i}
              cx={p[0]}
              cy={p[1]}
              r={isHovered ? 5 : 3}
              fill={isHovered ? "var(--accent)" : "var(--accent)"}
              stroke="var(--bg-secondary)"
              strokeWidth={2}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="cursor-pointer"
              style={{ transition: "r 150ms" }}
            />
          );
        })}

        {/* Axis labels — hoverable */}
        {data.map((d, i) => {
          const labelR = radius + 18;
          const [x, y] = polarToXY(i * angleStep, labelR);
          return (
            <g
              key={d.label}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="cursor-pointer"
            >
              {/* Invisible hit area around label */}
              <rect
                x={x - 24}
                y={y - 10}
                width={48}
                height={20}
                fill="transparent"
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={
                  hoverIndex === i
                    ? "var(--text-primary)"
                    : "var(--text-tertiary)"
                }
                fontSize={10}
                fontWeight={hoverIndex === i ? 600 : 400}
                style={{ transition: "all 150ms" }}
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoverIndex !== null && (
        <div className="bg-bg-tertiary border-border pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="bg-accent h-2 w-2 shrink-0 rounded-full" />
            <span
              className={cn("text-text-secondary text-xs whitespace-nowrap")}
            >
              {data[hoverIndex].label}
            </span>
            <span className="text-text-primary text-xs font-semibold">
              {data[hoverIndex].value}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
