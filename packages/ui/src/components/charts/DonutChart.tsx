import { useState } from "react";

import { cn } from "../../lib/cn";

interface DonutSegment {
  name: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
}

const colorToVar: Record<string, string> = {
  "text-blue": "var(--blue)",
  "text-green": "var(--green)",
  "text-purple": "var(--purple)",
  "text-yellow": "var(--yellow)",
  "text-red": "var(--red)",
};

interface ArcData {
  segment: DonutSegment;
  segmentLength: number;
  dashOffset: number;
  rotation: number;
  midAngle: number;
  percentage: number;
}

function computeArcs(
  segments: DonutSegment[],
  circumference: number,
): ArcData[] {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  let offset = 0;
  return segments.map((segment) => {
    const segmentLength =
      total > 0 ? (segment.value / total) * circumference : 0;
    const dashOffset = circumference - segmentLength;
    const rotation = (offset / circumference) * 360 - 90;
    const midAngle = rotation + (segmentLength / circumference) * 180;
    const percentage = total > 0 ? (segment.value / total) * 100 : 0;
    offset += segmentLength;
    return {
      segment,
      segmentLength,
      dashOffset,
      rotation,
      midAngle,
      percentage,
    };
  });
}

export function DonutChart({ segments, size = 180 }: DonutChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcs = computeArcs(segments, circumference);

  const hoverExpand = 6;
  const svgSize = size + hoverExpand * 2;
  const svgCenter = svgSize / 2;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          className="select-none"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* Invisible fat hit areas — always at center, wider stroke to catch hover */}
          {arcs.map((arc, i) => (
            <circle
              key={`hit-${arc.segment.name}`}
              cx={svgCenter}
              cy={svgCenter}
              r={radius}
              fill="none"
              stroke="transparent"
              strokeWidth={strokeWidth + hoverExpand * 2 + 8}
              strokeDasharray={`${arc.segmentLength} ${arc.dashOffset}`}
              strokeLinecap="butt"
              transform={`rotate(${arc.rotation} ${svgCenter} ${svgCenter})`}
              onMouseEnter={() => setHoverIndex(i)}
              className="cursor-pointer"
            />
          ))}

          {/* Visible arcs */}
          {arcs.map((arc, i) => {
            const isHovered = hoverIndex === i;
            const angleRad = (arc.midAngle * Math.PI) / 180;
            const tx = isHovered ? Math.cos(angleRad) * hoverExpand : 0;
            const ty = isHovered ? Math.sin(angleRad) * hoverExpand : 0;

            return (
              <circle
                key={arc.segment.name}
                cx={svgCenter}
                cy={svgCenter}
                r={radius}
                fill="none"
                stroke={colorToVar[arc.segment.color] ?? "var(--accent)"}
                strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={`${arc.segmentLength} ${arc.dashOffset}`}
                strokeLinecap="butt"
                transform={`translate(${tx} ${ty}) rotate(${arc.rotation} ${svgCenter} ${svgCenter})`}
                opacity={hoverIndex !== null && !isHovered ? 0.5 : 1}
                style={{ transition: "all 150ms ease-out" }}
                className="pointer-events-none"
              />
            );
          })}

          {/* Center text */}
          <text
            x={svgCenter}
            y={svgCenter - 6}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--text-primary)"
            fontSize={18}
            fontWeight={700}
            className="pointer-events-none"
          >
            {hoverIndex !== null
              ? arcs[hoverIndex].segment.value.toLocaleString()
              : total.toLocaleString()}
          </text>
          <text
            x={svgCenter}
            y={svgCenter + 12}
            textAnchor="middle"
            dominantBaseline="central"
            fill="var(--text-tertiary)"
            fontSize={10}
            className="pointer-events-none"
          >
            {hoverIndex !== null ? arcs[hoverIndex].segment.name : "Total"}
          </text>
        </svg>

        {/* Floating tooltip */}
        {hoverIndex !== null &&
          (() => {
            const arc = arcs[hoverIndex];
            const angleRad = (arc.midAngle * Math.PI) / 180;
            const tooltipR = radius + strokeWidth / 2 + 20;
            const tx = svgCenter + Math.cos(angleRad) * tooltipR;
            const ty = svgCenter + Math.sin(angleRad) * tooltipR;
            const color = colorToVar[arc.segment.color] ?? "var(--accent)";

            return (
              <div
                className="bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg"
                style={{
                  left: tx,
                  top: ty,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-text-secondary text-xs whitespace-nowrap">
                    {arc.segment.name}
                  </span>
                  <span className="text-text-primary text-xs font-semibold">
                    {arc.segment.value.toLocaleString()}
                  </span>
                  <span className="text-text-tertiary text-2xs">
                    ({arc.percentage.toFixed(1)}%)
                  </span>
                </div>
              </div>
            );
          })()}
      </div>

      {/* Legend — z-0 so tooltip floats above */}
      <div className="relative z-0 flex flex-wrap justify-center gap-x-4 gap-y-1.5">
        {segments.map((segment, i) => (
          <button
            key={segment.name}
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
                backgroundColor: colorToVar[segment.color] ?? "var(--accent)",
              }}
            />
            <span className="text-text-secondary text-xs">{segment.name}</span>
            <span className="text-text-primary text-xs font-semibold">
              {segment.value.toLocaleString()}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
