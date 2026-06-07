import { useState } from "react";

interface BarChartProps {
  data: { label: string; value: number }[];
  height?: number;
}

const BAR_OPACITIES = [1, 0.85, 0.7, 0.55, 0.45];

export function BarChart({ data, height }: BarChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const maxValue = Math.max(...data.map((d) => d.value));
  const barHeight = 28;
  const gap = 10;
  const labelWidth = 160;
  const valueWidth = 60;
  const chartHeight = height ?? data.length * (barHeight + gap) - gap;
  const barAreaWidth = 600 - labelWidth - valueWidth;

  return (
    <svg
      width="100%"
      viewBox={`0 0 600 ${chartHeight}`}
      className="select-none"
    >
      {data.map((item, i) => {
        const y = i * (barHeight + gap);
        const barWidth =
          maxValue > 0 ? (item.value / maxValue) * barAreaWidth : 0;
        const isHovered = hoverIndex === i;

        return (
          <g
            key={item.label}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            className="cursor-pointer"
          >
            {/* Hit area */}
            <rect
              x={0}
              y={y}
              width={600}
              height={barHeight}
              fill="transparent"
            />

            {/* Label */}
            <text
              x={0}
              y={y + barHeight / 2}
              dominantBaseline="central"
              fill={isHovered ? "var(--text-primary)" : "var(--text-secondary)"}
              fontSize={11}
              fontWeight={isHovered ? 600 : 400}
              style={{ transition: "all 150ms" }}
            >
              {item.label}
            </text>

            {/* Track */}
            <rect
              x={labelWidth}
              y={y + 3}
              width={barAreaWidth}
              height={barHeight - 6}
              fill="var(--border)"
              rx={6}
              opacity={0.5}
            />

            {/* Bar */}
            <rect
              x={labelWidth}
              y={y + 3}
              width={barWidth}
              height={barHeight - 6}
              fill="var(--accent)"
              rx={6}
              opacity={isHovered ? 1 : BAR_OPACITIES[i % BAR_OPACITIES.length]}
              style={{ transition: "all 150ms" }}
            />

            {/* Value */}
            <text
              x={600}
              y={y + barHeight / 2}
              dominantBaseline="central"
              textAnchor="end"
              fill="var(--text-primary)"
              fontSize={11}
              fontWeight={600}
            >
              {item.value.toLocaleString()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
