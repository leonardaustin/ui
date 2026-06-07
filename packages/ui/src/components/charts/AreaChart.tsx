import { useId, useRef, useState } from "react";

interface AreaChartProps {
  data: { date: string; value: number }[];
  height?: number;
}

const PADDING = { top: 16, right: 12, bottom: 28, left: 48 };

function formatValue(v: number): string {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
  if (v >= 1_000) return `${(v / 1_000).toFixed(1)}k`;
  return String(v);
}

export function AreaChart({ data, height = 240 }: AreaChartProps) {
  const gradientId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<{
    x: number;
    y: number;
    index: number;
  } | null>(null);

  const viewBoxWidth = 600;
  const chartWidth = viewBoxWidth - PADDING.left - PADDING.right;
  const chartHeight = height - PADDING.top - PADDING.bottom;

  const min = Math.min(...data.map((d) => d.value));
  const max = Math.max(...data.map((d) => d.value));
  const range = max - min || 1;

  function toX(i: number) {
    return PADDING.left + (i / Math.max(data.length - 1, 1)) * chartWidth;
  }

  function toY(v: number) {
    return PADDING.top + chartHeight - ((v - min) / range) * chartHeight;
  }

  const linePoints = data.map((d, i) => `${toX(i)},${toY(d.value)}`).join(" ");

  const areaPoints = [
    `${toX(0)},${PADDING.top + chartHeight}`,
    ...data.map((d, i) => `${toX(i)},${toY(d.value)}`),
    `${toX(data.length - 1)},${PADDING.top + chartHeight}`,
  ].join(" ");

  // X-axis labels: show ~5 evenly spaced
  const xLabelStep = Math.max(1, Math.floor(data.length / 5));
  const xLabels = data.filter(
    (_, i) => i % xLabelStep === 0 || i === data.length - 1,
  );
  const xLabelIndices = data
    .map((_, i) => i)
    .filter((i) => i % xLabelStep === 0 || i === data.length - 1);

  function handleMouseMove(e: React.MouseEvent<SVGSVGElement>) {
    const svg = svgRef.current;
    if (!svg || data.length === 0) return;
    const rect = svg.getBoundingClientRect();
    const svgX = ((e.clientX - rect.left) / rect.width) * viewBoxWidth;
    const ratio = (svgX - PADDING.left) / chartWidth;
    const idx = Math.round(ratio * (data.length - 1));
    const clamped = Math.max(0, Math.min(data.length - 1, idx));
    setHover({ x: toX(clamped), y: toY(data[clamped].value), index: clamped });
  }

  function handleMouseLeave() {
    setHover(null);
  }

  return (
    <svg
      ref={svgRef}
      width="100%"
      viewBox={`0 0 ${viewBoxWidth} ${height}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="select-none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.3} />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
        </linearGradient>
      </defs>

      {/* Y-axis labels */}
      <text
        x={PADDING.left - 8}
        y={PADDING.top}
        textAnchor="end"
        dominantBaseline="central"
        fill="var(--text-tertiary)"
        fontSize={10}
      >
        {formatValue(max)}
      </text>
      <text
        x={PADDING.left - 8}
        y={PADDING.top + chartHeight}
        textAnchor="end"
        dominantBaseline="central"
        fill="var(--text-tertiary)"
        fontSize={10}
      >
        {formatValue(min)}
      </text>

      {/* Grid line */}
      <line
        x1={PADDING.left}
        y1={PADDING.top + chartHeight}
        x2={PADDING.left + chartWidth}
        y2={PADDING.top + chartHeight}
        stroke="var(--border)"
        strokeWidth={1}
      />

      {/* Area fill */}
      <polygon points={areaPoints} fill={`url(#${gradientId})`} />

      {/* Line */}
      <polyline
        points={linePoints}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* X-axis labels */}
      {xLabels.map((d, li) => (
        <text
          key={d.date}
          x={toX(xLabelIndices[li])}
          y={height - 4}
          textAnchor="middle"
          fill="var(--text-tertiary)"
          fontSize={10}
        >
          {d.date}
        </text>
      ))}

      {/* Hover indicator */}
      {hover && (
        <>
          <line
            x1={hover.x}
            y1={PADDING.top}
            x2={hover.x}
            y2={PADDING.top + chartHeight}
            stroke="var(--border-strong)"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <circle
            cx={hover.x}
            cy={hover.y}
            r={4}
            fill="var(--accent)"
            stroke="var(--bg-secondary)"
            strokeWidth={2}
          />

          {/* Tooltip — flip below when near top, clamp X to stay in bounds */}
          {(() => {
            const above = hover.y - 38 >= 0;
            const ty = above ? hover.y - 38 : hover.y + 12;
            const tw = 90;
            const tx = Math.max(
              0,
              Math.min(viewBoxWidth - tw, hover.x - tw / 2),
            );
            const textX = tx + tw / 2;
            return (
              <>
                <rect
                  x={tx}
                  y={ty}
                  width={tw}
                  height={28}
                  rx={4}
                  fill="var(--bg-tertiary)"
                  stroke="var(--border)"
                  strokeWidth={1}
                />
                <text
                  x={textX}
                  y={ty + 10}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="var(--text-secondary)"
                  fontSize={9}
                >
                  {data[hover.index].date}
                </text>
                <text
                  x={textX}
                  y={ty + 22}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="var(--text-primary)"
                  fontSize={11}
                  fontWeight={600}
                >
                  {data[hover.index].value.toLocaleString()}
                </text>
              </>
            );
          })()}
        </>
      )}
    </svg>
  );
}
