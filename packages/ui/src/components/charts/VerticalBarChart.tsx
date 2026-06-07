import { useState } from "react";

interface VerticalBarChartProps {
  data: { label: string; value: number; color?: string }[];
  height?: number;
}

/** Generate progressively lighter/darker shades of the accent color per bar. */
const BAR_OPACITIES = [1, 0.85, 0.7, 0.55, 0.45, 0.35, 0.25];

const PADDING = { top: 20, right: 8, bottom: 24, left: 40 };

function formatValue(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}k`;
  return String(v);
}

export function VerticalBarChart({
  data,
  height = 180,
}: VerticalBarChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const viewBoxWidth = 600;
  const chartWidth = viewBoxWidth - PADDING.left - PADDING.right;
  const chartHeight = height - PADDING.top - PADDING.bottom;
  const maxValue = Math.max(...data.map((d) => d.value), 1);

  const barGap = 6;
  const barWidth = Math.max(
    4,
    (chartWidth - barGap * (data.length - 1)) / data.length,
  );

  return (
    <svg
      width="100%"
      viewBox={`0 0 ${viewBoxWidth} ${height}`}
      className="select-none"
    >
      {/* Y-axis labels */}
      <text
        x={PADDING.left - 6}
        y={PADDING.top + 4}
        textAnchor="end"
        fill="var(--text-tertiary)"
        fontSize={10}
      >
        {formatValue(maxValue)}
      </text>
      <text
        x={PADDING.left - 6}
        y={PADDING.top + chartHeight}
        textAnchor="end"
        dominantBaseline="central"
        fill="var(--text-tertiary)"
        fontSize={10}
      >
        0
      </text>

      {/* Grid lines */}
      <line
        x1={PADDING.left}
        y1={PADDING.top + chartHeight}
        x2={PADDING.left + chartWidth}
        y2={PADDING.top + chartHeight}
        stroke="var(--border)"
        strokeWidth={1}
      />
      <line
        x1={PADDING.left}
        y1={PADDING.top + chartHeight / 2}
        x2={PADDING.left + chartWidth}
        y2={PADDING.top + chartHeight / 2}
        stroke="var(--border)"
        strokeWidth={1}
        strokeDasharray="3 3"
        opacity={0.5}
      />

      {/* Bars */}
      {data.map((item, i) => {
        const x = PADDING.left + i * (barWidth + barGap);
        const barH = (item.value / maxValue) * chartHeight;
        const y = PADDING.top + chartHeight - barH;
        const isHovered = hoverIndex === i;

        return (
          <g
            key={item.label}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Hit area */}
            <rect
              x={x}
              y={PADDING.top}
              width={barWidth}
              height={chartHeight}
              fill="transparent"
            />

            {/* Bar */}
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barH}
              fill={item.color ?? "var(--accent)"}
              rx={6}
              opacity={isHovered ? 1 : BAR_OPACITIES[i % BAR_OPACITIES.length]}
              style={{ transition: "all 150ms" }}
            />

            {/* X label */}
            <text
              x={x + barWidth / 2}
              y={height - 4}
              textAnchor="middle"
              fill="var(--text-tertiary)"
              fontSize={10}
            >
              {item.label}
            </text>

            {/* Hover value */}
            {isHovered && (
              <text
                x={x + barWidth / 2}
                y={y - 6}
                textAnchor="middle"
                fill="var(--text-primary)"
                fontSize={10}
                fontWeight={600}
              >
                {item.value.toLocaleString()}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
