import { cn as e } from "../../lib/cn.js";
import { estimateTooltipWidth as t, formatCompactValue as n, getLabelIndices as r, getSvgTooltipPosition as i } from "./chartUtils.js";
import { useState as a } from "react";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/charts/StackedBarChart.tsx
var l = {
	top: 20,
	right: 12,
	bottom: 30,
	left: 48
}, u = 600, d = 4;
function f(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2})/.exec(e);
	if (t) {
		let [, e, n, r, i] = t;
		return new Date(Date.UTC(Number(e), Number(n) - 1, Number(r), Number(i))).toLocaleString(void 0, {
			month: "short",
			day: "numeric",
			hour: "numeric",
			timeZone: "UTC"
		});
	}
	let n = /^(\d{4})-(\d{2})-(\d{2})/.exec(e);
	if (!n) return e;
	let [, r, i, a] = n;
	return new Date(Date.UTC(Number(r), Number(i) - 1, Number(a))).toLocaleDateString(void 0, {
		month: "short",
		day: "numeric",
		timeZone: "UTC"
	});
}
function p(e, t) {
	let n = e[t];
	if (typeof n == "number") return Number.isFinite(n) ? n : 0;
	if (typeof n == "string") {
		let e = Number(n);
		return Number.isFinite(e) ? e : 0;
	}
	return 0;
}
function m(e, t) {
	return t.reduce((t, n) => t + Math.max(0, p(e, n.key)), 0);
}
function h(e, t, n, r, i) {
	let a = Math.min(i, Math.max(0, n / 2), Math.max(0, r));
	return a <= 0 ? `M ${e} ${t} H ${e + n} V ${t + r} H ${e} Z` : [
		`M ${e} ${t + r}`,
		`V ${t + a}`,
		`Q ${e} ${t} ${e + a} ${t}`,
		`H ${e + n - a}`,
		`Q ${e + n} ${t} ${e + n} ${t + a}`,
		`V ${t + r}`,
		"Z"
	].join(" ");
}
function g({ data: g, segments: _, height: v = 220, "aria-label": y = "Stacked bar chart", tooltipRows: b, valueFormatter: x, tooltipValueFormatter: S, xLabelCount: C = 6, barGap: w, minBarWidth: T = 1, className: E, ref: D, ...O }) {
	let [k, A] = a(null), j = Math.max(l.top + l.bottom + 1, v), M = u - l.left - l.right, N = Math.max(1, j - l.top - l.bottom), P = g.reduce((e, t) => Math.max(e, m(t, _)), 1), F = Math.ceil(P / 2), I = F > 0 && F < P, L = w ?? (g.length > 60 ? 2 : g.length > 30 ? 3 : 6), R = Math.max(1, T), z = g.length > 1 ? Math.max(0, (M - g.length * R) / Math.max(g.length - 1, 1)) : 0, B = g.length > 1 ? Math.min(Math.max(0, L), z) : 0, V = g.length > 0 ? (M - B * Math.max(g.length - 1, 0)) / g.length : 0, H = new Set(r(g.length, C)), U = k === null ? null : g[k], W = x ?? n, G = S ?? ((e) => e.toLocaleString());
	function K(e) {
		return l.left + e * (V + B);
	}
	function q(e) {
		return e / P * N;
	}
	return /* @__PURE__ */ c("svg", {
		ref: D,
		...O,
		width: "100%",
		viewBox: `0 0 ${u} ${j}`,
		className: e("select-none", E),
		role: "img",
		"aria-label": y,
		children: [
			/* @__PURE__ */ s("text", {
				x: l.left - 8,
				y: l.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: W(P)
			}),
			I && /* @__PURE__ */ s("text", {
				x: l.left - 8,
				y: l.top + N / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: W(F)
			}),
			/* @__PURE__ */ s("text", {
				x: l.left - 8,
				y: l.top + N,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ s("line", {
				x1: l.left,
				y1: l.top + N,
				x2: l.left + M,
				y2: l.top + N,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ s("line", {
				x1: l.left,
				y1: l.top + N / 2,
				x2: l.left + M,
				y2: l.top + N / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			g.map((e, t) => {
				let n = K(t), r = k === t, i = 0, a = _.map((t) => ({
					segment: t,
					value: Math.max(0, p(e, t.key))
				})).filter(({ value: e }) => e > 0);
				return /* @__PURE__ */ c("g", {
					onMouseEnter: () => A(t),
					onMouseLeave: () => A(null),
					onPointerEnter: () => A(t),
					onPointerDown: () => A(t),
					onPointerLeave: () => A(null),
					onFocus: () => A(t),
					onBlur: () => A(null),
					tabIndex: 0,
					role: "button",
					"aria-label": `${f(e.date)}: ${G(m(e, _))}`,
					children: [
						/* @__PURE__ */ s("rect", {
							x: n,
							y: l.top,
							width: V,
							height: N,
							fill: "transparent"
						}),
						a.map(({ segment: e, value: t }, o) => {
							let c = q(t), u = l.top + N - i - c, f = o === a.length - 1;
							return i += c, f ? /* @__PURE__ */ s("path", {
								d: h(n, u, V, c, d),
								fill: e.color,
								opacity: r ? 1 : e.opacity ?? .9
							}, e.key) : /* @__PURE__ */ s("rect", {
								x: n,
								y: u,
								width: V,
								height: c,
								fill: e.color,
								opacity: r ? 1 : e.opacity ?? .9
							}, e.key);
						}),
						H.has(t) && /* @__PURE__ */ s("text", {
							x: n + V / 2,
							y: j - 5,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: f(e.date)
						})
					]
				}, `${e.date}-${t}`);
			}),
			U && k !== null && /* @__PURE__ */ s("g", {
				pointerEvents: "none",
				children: (() => {
					let e = K(k) + V / 2, n = b?.(U) ?? _.map((e) => ({
						color: e.color,
						label: e.label,
						value: p(U, e.key)
					})), r = m(U, _), a = i(e, l.top + N - q(r), {
						boundsHeight: j,
						boundsWidth: u,
						height: 28 + n.length * 15,
						offset: 8,
						width: t([f(U.date), ...n.map((e) => `${e.label} ${G(e.value)}`)], {
							maxWidth: 240,
							minWidth: 150
						})
					}), d = a.x + 10, h = a.x + a.width - 10;
					return /* @__PURE__ */ c(o, { children: [
						/* @__PURE__ */ s("line", {
							x1: e,
							y1: l.top,
							x2: e,
							y2: l.top + N,
							stroke: "var(--border-strong)",
							strokeWidth: 1,
							strokeDasharray: "3 3"
						}),
						/* @__PURE__ */ s("rect", {
							x: a.x,
							y: a.y,
							width: a.width,
							height: a.height,
							rx: 4,
							fill: "var(--bg-tooltip, var(--bg-tertiary))",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ s("text", {
							x: d,
							y: a.y + 14,
							fill: "var(--text-primary)",
							fontSize: 10,
							fontWeight: 600,
							children: f(U.date)
						}),
						n.map((e, t) => {
							let n = a.y + 30 + t * 15;
							return /* @__PURE__ */ c("g", { children: [
								e.color && /* @__PURE__ */ s("rect", {
									x: d,
									y: n - 6,
									width: 6,
									height: 6,
									rx: 1,
									fill: e.color
								}),
								/* @__PURE__ */ s("text", {
									x: e.color ? d + 12 : d,
									y: n,
									fill: "var(--text-secondary)",
									fontSize: 10,
									children: e.label
								}),
								/* @__PURE__ */ s("text", {
									x: h,
									y: n,
									textAnchor: "end",
									fill: "var(--text-primary)",
									fontSize: 10,
									fontWeight: 600,
									children: G(e.value)
								})
							] }, e.label);
						})
					] });
				})()
			})
		]
	});
}
//#endregion
export { g as StackedBarChart };
