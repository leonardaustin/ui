import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { estimateTooltipWidth as n, formatCompactValue as r, getLabelIndices as i, getSvgTooltipPosition as a } from "./chartUtils.js";
import { useId as o, useMemo as s, useRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/charts/AreaChart.tsx
var p = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
}, m = 600;
function h(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function g({ data: g, height: _ = 240, minValue: v, maxValue: y, startAtZero: b = !1, valueFormatter: x, tooltipValueFormatter: S, xLabelCount: C = 5, "aria-label": w = "Area chart", className: T, onPointerMove: E, onPointerLeave: D, ref: O, ...k }) {
	let A = o(), j = c(null), M = s(() => t(j, O), [O]), [N, P] = l(null), F = Math.max(p.top + p.bottom + 1, _), I = m - p.left - p.right, L = Math.max(1, F - p.top - p.bottom), R = g.length > 0, z = g[0]?.value ?? 0, B = g[0]?.value ?? 0;
	for (let e of g) e.value < z && (z = e.value), e.value > B && (B = e.value);
	let V = v ?? z, H = y ?? B;
	if (b && v === void 0 && z >= 0 && (V = 0), V === H) {
		if (b || v !== void 0 || y !== void 0) {
			let e = h(B);
			v === void 0 && (V = b && z >= 0 ? 0 : z >= 0 ? Math.max(0, z - e) : z - e), y === void 0 && (H = B + e);
		}
		V === H && (H = V + 1);
	}
	let U = H - V, W = x ?? r, G = S ?? x ?? ((e) => e.toLocaleString());
	function K(e) {
		return p.left + e / Math.max(g.length - 1, 1) * I;
	}
	function q(e) {
		return p.top + L - (e - V) / U * L;
	}
	let J = g.map((e, t) => `${K(t)},${q(e.value)}`).join(" "), Y = R ? [
		`${K(0)},${p.top + L}`,
		...g.map((e, t) => `${K(t)},${q(e.value)}`),
		`${K(g.length - 1)},${p.top + L}`
	].join(" ") : "", X = i(g.length, C);
	function Z(e) {
		let t = j.current;
		if (!t || g.length === 0) return;
		let n = t.getBoundingClientRect();
		if (n.width <= 0) return;
		let r = ((e.clientX - n.left) / n.width * m - p.left) / I, i = Math.round(r * (g.length - 1)), a = Math.max(0, Math.min(g.length - 1, i));
		P({
			x: K(a),
			y: q(g[a].value),
			index: a
		});
	}
	function Q(e) {
		P({
			x: K(e),
			y: q(g[e].value),
			index: e
		});
	}
	function $() {
		P(null);
	}
	return /* @__PURE__ */ f("svg", {
		...k,
		ref: M,
		width: "100%",
		viewBox: `0 0 ${m} ${F}`,
		onPointerMove: (e) => {
			E?.(e), !e.defaultPrevented && Z(e);
		},
		onPointerLeave: (e) => {
			D?.(e), !e.defaultPrevented && $();
		},
		className: e("select-none", T),
		role: "img",
		"aria-label": w,
		children: [
			/* @__PURE__ */ d("defs", { children: /* @__PURE__ */ f("linearGradient", {
				id: A,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ d("stop", {
					offset: "0%",
					stopColor: "var(--accent)",
					stopOpacity: .3
				}), /* @__PURE__ */ d("stop", {
					offset: "100%",
					stopColor: "var(--accent)",
					stopOpacity: 0
				})]
			}) }),
			/* @__PURE__ */ d("text", {
				x: p.left - 8,
				y: p.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: W(H)
			}),
			/* @__PURE__ */ d("text", {
				x: p.left - 8,
				y: p.top + L,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: W(V)
			}),
			/* @__PURE__ */ d("line", {
				x1: p.left,
				y1: p.top + L,
				x2: p.left + I,
				y2: p.top + L,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			R && /* @__PURE__ */ d("polygon", {
				points: Y,
				fill: `url(#${A})`
			}),
			R && /* @__PURE__ */ d("polyline", {
				points: J,
				fill: "none",
				stroke: "var(--accent)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			g.map((e, t) => /* @__PURE__ */ d("circle", {
				cx: K(t),
				cy: q(e.value),
				r: 8,
				fill: "transparent",
				tabIndex: 0,
				role: "button",
				"aria-label": `${e.date}: ${G(e.value)}`,
				onFocus: () => Q(t),
				onBlur: $
			}, `${e.date}-${t}-hit`)),
			X.map((e) => /* @__PURE__ */ d("text", {
				x: K(e),
				y: F - 4,
				textAnchor: "middle",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: g[e].date
			}, `${g[e].date}-${e}`)),
			N && /* @__PURE__ */ f(u, { children: [
				/* @__PURE__ */ d("line", {
					x1: N.x,
					y1: p.top,
					x2: N.x,
					y2: p.top + L,
					stroke: "var(--border-strong)",
					strokeWidth: 1,
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ d("circle", {
					cx: N.x,
					cy: N.y,
					r: 4,
					fill: "var(--accent)",
					stroke: "var(--bg-secondary)",
					strokeWidth: 2
				}),
				(() => {
					let e = g[N.index];
					if (!e) return null;
					let t = e.date, r = G(e.value), i = a(N.x, N.y, {
						boundsHeight: F,
						boundsWidth: m,
						height: 28,
						offset: 10,
						width: n([t, r], {
							maxWidth: 180,
							minWidth: 90
						})
					}), o = i.x + i.width / 2;
					return /* @__PURE__ */ f(u, { children: [
						/* @__PURE__ */ d("rect", {
							x: i.x,
							y: i.y,
							width: i.width,
							height: i.height,
							rx: 4,
							fill: "var(--bg-tooltip, var(--bg-tertiary))",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ d("text", {
							x: o,
							y: i.y + 10,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-secondary)",
							fontSize: 9,
							children: t
						}),
						/* @__PURE__ */ d("text", {
							x: o,
							y: i.y + 22,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-primary)",
							fontSize: 11,
							fontWeight: 600,
							children: r
						})
					] });
				})()
			] })
		]
	});
}
//#endregion
export { g as AreaChart };
