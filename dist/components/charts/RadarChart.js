import { cn as e } from "../../lib/cn.js";
import { clamp as t } from "../../lib/math.js";
import { getPositiveValue as n, truncateChartLabel as r } from "./chartUtils.js";
import { useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/charts/RadarChart.tsx
function s({ data: s, maxValue: c, size: l = 240, rings: u = 4, labelOffset: d = 18, labelFormatter: f, maxLabelLength: p, valueFormatter: m, "aria-label": h = "Radar chart", className: g, ref: _, ...v }) {
	let [y, b] = i(null), x = Math.max(80, l), S = Math.max(n(c ?? 0), ...s.map((e) => n(e.value)), 1), C = x / 2, w = Math.max(1, C - Math.max(0, d) - 12), T = s.length > 0 ? 2 * Math.PI / s.length : 0, E = Math.max(1, Math.floor(u)), D = m ?? String, O = s.map((e, t) => {
		let n = f?.(e.label, e, t) ?? e.label, i = r(n, p);
		return {
			displayLabel: i,
			isTruncated: i !== n,
			label: n
		};
	});
	function k(e, t) {
		return [C + t * Math.cos(e - Math.PI / 2), C + t * Math.sin(e - Math.PI / 2)];
	}
	let A = s.map((e, r) => {
		let i = t(n(e.value), 0, S) / S * w;
		return k(r * T, i);
	}), j = A.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ o("div", {
		ref: _,
		...v,
		className: e("relative flex flex-col items-center", g),
		children: [/* @__PURE__ */ o("svg", {
			width: x,
			height: x,
			viewBox: `0 0 ${x} ${x}`,
			className: "select-none",
			role: "img",
			"aria-label": h,
			children: [
				s.length > 0 && Array.from({ length: E }, (e, t) => {
					let n = (t + 1) / E * w;
					return /* @__PURE__ */ a("polygon", {
						points: s.map((e, t) => k(t * T, n)).map((e) => `${e[0]},${e[1]}`).join(" "),
						fill: "none",
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .5
					}, t);
				}),
				s.map((e, t) => {
					let [n, r] = k(t * T, w);
					return /* @__PURE__ */ a("line", {
						x1: C,
						y1: C,
						x2: n,
						y2: r,
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .3
					}, t);
				}),
				s.length > 0 && /* @__PURE__ */ a("polygon", {
					points: j,
					fill: "var(--accent)",
					fillOpacity: .15,
					stroke: "var(--accent)",
					strokeWidth: 2,
					strokeLinejoin: "round"
				}),
				A.map((e, t) => {
					let n = y === t, r = D(s[t].value);
					return /* @__PURE__ */ a("circle", {
						cx: e[0],
						cy: e[1],
						r: n ? 5 : 3,
						fill: "var(--accent)",
						stroke: "var(--bg-secondary)",
						strokeWidth: 2,
						onMouseEnter: () => b(t),
						onMouseLeave: () => b(null),
						onPointerEnter: () => b(t),
						onPointerDown: () => b(t),
						onPointerLeave: () => b(null),
						onFocus: () => b(t),
						onBlur: () => b(null),
						tabIndex: 0,
						role: "button",
						"aria-label": `${O[t].label}: ${r}`,
						className: "cursor-pointer",
						style: { transition: "r 150ms" }
					}, t);
				}),
				s.map((e, t) => {
					let n = w + Math.max(0, d), [r, i] = k(t * T, n), s = O[t], c = Math.max(48, s.displayLabel.length * 6 + 12), l = D(e.value);
					return /* @__PURE__ */ o("g", {
						onMouseEnter: () => b(t),
						onMouseLeave: () => b(null),
						onPointerEnter: () => b(t),
						onPointerDown: () => b(t),
						onPointerLeave: () => b(null),
						onFocus: () => b(t),
						onBlur: () => b(null),
						className: "cursor-pointer",
						tabIndex: 0,
						role: "button",
						"aria-label": `${s.label}: ${l}`,
						children: [/* @__PURE__ */ a("rect", {
							x: r - c / 2,
							y: i - 10,
							width: c,
							height: 20,
							fill: "transparent"
						}), /* @__PURE__ */ o("text", {
							x: r,
							y: i,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: y === t ? "var(--text-primary)" : "var(--text-tertiary)",
							fontSize: 10,
							fontWeight: y === t ? 600 : 400,
							style: { transition: "all 150ms" },
							children: [s.isTruncated && /* @__PURE__ */ a("title", { children: s.label }), s.displayLabel]
						})]
					}, e.label);
				})
			]
		}), y !== null && /* @__PURE__ */ a("div", {
			className: "ui-glass ui-glass-popover bg-bg-tertiary border-border pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 shadow-lg",
			children: /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ a("span", { className: "bg-accent h-2 w-2 shrink-0 rounded-full" }),
					/* @__PURE__ */ a("span", {
						className: e("text-text-secondary text-xs whitespace-nowrap"),
						children: O[y].label
					}),
					/* @__PURE__ */ a("span", {
						className: "text-text-primary text-xs font-semibold",
						children: D(s[y].value)
					})
				]
			})
		})]
	});
}
//#endregion
export { s as RadarChart };
