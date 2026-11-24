import { cn as e } from "../../lib/cn.js";
import { clamp as t } from "../../lib/math.js";
import { getPositiveValue as n, truncateChartLabel as r } from "./chartUtils.js";
import { useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/charts/BarChart.tsx
var s = [
	1,
	.85,
	.7,
	.55,
	.45
], c = 600;
function l({ data: l, height: u, maxValue: d, valueFormatter: f, labelFormatter: p, maxLabelLength: m, labelWidth: h = 160, valueWidth: g = 60, barHeight: _ = 28, gap: v = 10, "aria-label": y = "Horizontal bar chart", className: b, ref: x, ...S }) {
	let [C, w] = i(null), T = l.length, E = Math.max(1, _), D = Math.max(0, v), O = T > 0 ? T * E + Math.max(0, T - 1) * D : E, k = Math.max(1, u ?? O), A = u === void 0 ? 1 : k / O, j = E * A, M = D * A, N = Math.min(3, j / 3), P = Math.max(0, j - N * 2), F = d === void 0 ? Math.max(...l.map((e) => n(e.value)), 1) : Math.max(n(d), 1), I = Math.max(0, h), L = Math.max(0, g), R = Math.max(0, c - I - L), z = f ?? ((e) => e.toLocaleString());
	return /* @__PURE__ */ a("svg", {
		ref: x,
		...S,
		width: "100%",
		viewBox: `0 0 ${c} ${k}`,
		className: e("select-none", b),
		role: "img",
		"aria-label": y,
		children: l.map((e, i) => {
			let l = i * (j + M), u = F > 0 ? t(n(e.value), 0, F) / F * R : 0, d = C === i, f = p?.(e.label, e, i) ?? e.label, h = r(f, m), g = h !== f, _ = z(e.value);
			return /* @__PURE__ */ o("g", {
				onMouseEnter: () => w(i),
				onMouseLeave: () => w(null),
				onPointerEnter: () => w(i),
				onPointerDown: () => w(i),
				onPointerLeave: () => w(null),
				onFocus: () => w(i),
				onBlur: () => w(null),
				className: "cursor-pointer",
				tabIndex: 0,
				role: "button",
				"aria-label": `${f}: ${_}`,
				children: [
					/* @__PURE__ */ a("rect", {
						x: 0,
						y: l,
						width: c,
						height: j,
						fill: "transparent"
					}),
					/* @__PURE__ */ o("text", {
						x: 0,
						y: l + j / 2,
						dominantBaseline: "central",
						fill: d ? "var(--text-primary)" : "var(--text-secondary)",
						fontSize: 11,
						fontWeight: d ? 600 : 400,
						style: { transition: "all 150ms" },
						children: [g && /* @__PURE__ */ a("title", { children: f }), h]
					}),
					/* @__PURE__ */ a("rect", {
						x: I,
						y: l + N,
						width: R,
						height: P,
						fill: "var(--border)",
						rx: 6,
						opacity: .5
					}),
					/* @__PURE__ */ a("rect", {
						x: I,
						y: l + N,
						width: u,
						height: P,
						fill: "var(--accent)",
						rx: 6,
						opacity: d ? 1 : s[i % s.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ a("text", {
						x: c,
						y: l + j / 2,
						dominantBaseline: "central",
						textAnchor: "end",
						fill: "var(--text-primary)",
						fontSize: 11,
						fontWeight: 600,
						children: _
					})
				]
			}, e.label);
		})
	});
}
//#endregion
export { l as BarChart };
