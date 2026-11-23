import { cn as e } from "../../lib/cn.js";
import { clamp as t } from "../../lib/math.js";
import { estimateTooltipWidth as n, formatCompactValue as r, getLabelIndices as i, getPositiveValue as a, getSvgTooltipPosition as o, resolveChartColor as s, truncateChartLabel as c } from "./chartUtils.js";
import { useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/charts/VerticalBarChart.tsx
var p = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], m = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
}, h = 600;
function g({ data: g, height: _ = 180, maxValue: v, valueFormatter: y, tooltipValueFormatter: b, labelFormatter: x, maxLabelLength: S, xLabelCount: C = 7, barGap: w = 6, minBarWidth: T = 4, "aria-label": E = "Vertical bar chart", className: D, ref: O, ...k }) {
	let [A, j] = l(null), M = Math.max(m.top + m.bottom + 1, _), N = h - m.left - m.right, P = Math.max(1, M - m.top - m.bottom), F = v === void 0 ? Math.max(...g.map((e) => a(e.value)), 1) : Math.max(a(v), 1), I = Math.max(0, w), L = Math.max(1, T), R = g.length > 1 ? Math.max(0, (N - g.length * L) / Math.max(g.length - 1, 1)) : 0, z = g.length > 1 ? Math.min(I, R) : 0, B = g.length > 0 ? Math.max(0, (N - z * Math.max(g.length - 1, 0)) / g.length) : 0, V = y ?? r, H = b ?? ((e) => e.toLocaleString()), U = new Set(i(g.length, C));
	return /* @__PURE__ */ f("svg", {
		ref: O,
		...k,
		width: "100%",
		viewBox: `0 0 ${h} ${M}`,
		className: e("select-none", D),
		role: "img",
		"aria-label": E,
		children: [
			/* @__PURE__ */ d("text", {
				x: m.left - 6,
				y: m.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: V(F)
			}),
			/* @__PURE__ */ d("text", {
				x: m.left - 6,
				y: m.top + P,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ d("line", {
				x1: m.left,
				y1: m.top + P,
				x2: m.left + N,
				y2: m.top + P,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ d("line", {
				x1: m.left,
				y1: m.top + P / 2,
				x2: m.left + N,
				y2: m.top + P / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			g.map((e, r) => {
				let i = m.left + r * (B + z), l = t(a(e.value), 0, F) / F * P, g = m.top + P - l, _ = A === r, v = x?.(e.label, e, r) ?? e.label, y = c(v, S), b = y !== v, C = H(e.value);
				return /* @__PURE__ */ f("g", {
					onMouseEnter: () => j(r),
					onMouseLeave: () => j(null),
					onPointerEnter: () => j(r),
					onPointerDown: () => j(r),
					onPointerLeave: () => j(null),
					onFocus: () => j(r),
					onBlur: () => j(null),
					tabIndex: 0,
					role: "button",
					"aria-label": `${v}: ${C}`,
					children: [
						/* @__PURE__ */ d("rect", {
							x: i,
							y: m.top,
							width: B,
							height: P,
							fill: "transparent"
						}),
						/* @__PURE__ */ d("rect", {
							x: i,
							y: g,
							width: B,
							height: l,
							fill: s(e.color),
							rx: 6,
							opacity: _ ? 1 : p[r % p.length],
							style: { transition: "all 150ms" }
						}),
						U.has(r) && /* @__PURE__ */ f("text", {
							x: i + B / 2,
							y: M - 4,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: [b && /* @__PURE__ */ d("title", { children: v }), y]
						}),
						_ && (() => {
							let e = o(i + B / 2, g, {
								boundsHeight: M,
								boundsWidth: h,
								height: 24,
								offset: 8,
								width: n([v, C], {
									maxWidth: 180,
									minWidth: 72
								})
							}), t = e.x + e.width / 2;
							return /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d("rect", {
								x: e.x,
								y: e.y,
								width: e.width,
								height: e.height,
								rx: 4,
								fill: "var(--bg-tooltip, var(--bg-tertiary))",
								stroke: "var(--border)",
								strokeWidth: 1
							}), /* @__PURE__ */ d("text", {
								x: t,
								y: e.y + 15,
								textAnchor: "middle",
								fill: "var(--text-primary)",
								fontSize: 10,
								fontWeight: 600,
								children: C
							})] });
						})()
					]
				}, e.label);
			})
		]
	});
}
//#endregion
export { g as VerticalBarChart };
