import { cn as e } from "../../lib/cn.js";
import { clamp as t } from "../../lib/math.js";
import { estimateTooltipWidth as n, getFloatingTooltipStyle as r, getPositiveValue as i, resolveChartColor as a } from "./chartUtils.js";
import { useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/charts/RadialBarChart.tsx
function u({ segments: u, size: d = 200, strokeWidth: f = 14, gap: p = 6, valueFormatter: m, percentageFormatter: h, showLegend: g = !0, "aria-label": _ = "Radial bar chart", className: v, ref: y, ...b }) {
	let [x, S] = s(null), [C, w] = s({
		x: 0,
		y: 0
	}), T = o(null), E = x?.index ?? null, D = Math.max(1, d), O = Math.max(1, Math.min(f, D)), k = Math.max(0, p), A = D / 2, j = Math.max(0, (D - 40) / 2), M = m ?? String, N = h ?? ((e) => `${Math.round(e)}%`), P = u.reduce((e, t, n) => j - n * (O + k) > 0 ? n : e, -1);
	function F(e) {
		let t = T.current?.getBoundingClientRect();
		t && w({
			x: e.clientX - t.left,
			y: e.clientY - t.top
		});
	}
	function I(e) {
		w({
			x: A,
			y: A
		}), S({
			index: e,
			source: "chart"
		});
	}
	function L(e) {
		let n = i(e.max);
		return n <= 0 ? 0 : t(i(e.value) / n, 0, 1);
	}
	function R(e) {
		return L(e) * 100;
	}
	return /* @__PURE__ */ l("div", {
		ref: y,
		...b,
		className: e("flex flex-col items-center gap-4", v),
		children: [/* @__PURE__ */ l("div", {
			className: "relative",
			ref: T,
			onPointerMove: F,
			children: [/* @__PURE__ */ l("svg", {
				width: D,
				height: D,
				viewBox: `0 0 ${D} ${D}`,
				className: "select-none",
				role: "img",
				"aria-label": _,
				children: [u.map((e, t) => {
					let n = j - t * (O + k);
					if (n <= 0) return null;
					let r = 2 * Math.PI * n, i = r * L(e), o = r - i, s = a(e.color), u = E === t, d = R(e);
					return /* @__PURE__ */ l("g", {
						onMouseEnter: () => S({
							index: t,
							source: "chart"
						}),
						onMouseLeave: () => S(null),
						onPointerEnter: () => S({
							index: t,
							source: "chart"
						}),
						onPointerDown: () => S({
							index: t,
							source: "chart"
						}),
						onPointerLeave: () => S(null),
						onFocus: () => I(t),
						onBlur: () => S(null),
						className: "cursor-pointer",
						tabIndex: 0,
						role: "button",
						"aria-label": `${e.label}: ${N(d)} (${M(e.value)}/${M(e.max)})`,
						children: [/* @__PURE__ */ c("circle", {
							cx: A,
							cy: A,
							r: n,
							fill: "none",
							stroke: "var(--border)",
							strokeWidth: O,
							opacity: .3
						}), /* @__PURE__ */ c("circle", {
							cx: A,
							cy: A,
							r: n,
							fill: "none",
							stroke: s,
							strokeWidth: u ? O + 4 : O,
							strokeDasharray: `${i} ${o}`,
							strokeLinecap: "round",
							transform: `rotate(-90 ${A} ${A})`,
							opacity: E !== null && !u ? .4 : 1,
							className: "pointer-events-none",
							style: { transition: "all 150ms ease-out" }
						})]
					}, e.label);
				}), P >= 0 && (() => {
					let e = j - P * (O + k) - O / 2;
					return /* @__PURE__ */ c("circle", {
						cx: A,
						cy: A,
						r: Math.max(0, e),
						fill: "transparent",
						onMouseEnter: () => S({
							index: P,
							source: "chart"
						}),
						onMouseLeave: () => S(null),
						onPointerEnter: () => S({
							index: P,
							source: "chart"
						}),
						onPointerDown: () => S({
							index: P,
							source: "chart"
						}),
						onPointerLeave: () => S(null),
						onFocus: () => I(P),
						onBlur: () => S(null),
						tabIndex: 0,
						role: "button",
						"aria-label": `${u[P].label}: ${N(R(u[P]))}`,
						className: "cursor-pointer"
					});
				})()]
			}), E !== null && x?.source === "chart" && (() => {
				let e = u[E];
				if (!e) return null;
				let t = R(e), i = a(e.color), o = N(t), s = `${M(e.value)}/${M(e.max)}`;
				return /* @__PURE__ */ c("div", {
					className: "ui-glass ui-glass-popover bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: r({
						anchorX: C.x,
						anchorY: C.y,
						boundsHeight: D,
						boundsWidth: D,
						height: 30,
						margin: 4,
						offset: 8,
						width: n([`${e.label} ${o} ${s}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ l("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ c("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: i }
							}),
							/* @__PURE__ */ c("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: e.label
							}),
							/* @__PURE__ */ c("span", {
								className: "text-text-primary text-xs font-semibold",
								children: o
							}),
							/* @__PURE__ */ l("span", {
								className: "text-text-tertiary text-2xs",
								children: [
									"(",
									s,
									")"
								]
							})
						]
					})
				});
			})()]
		}), g && /* @__PURE__ */ c("div", {
			className: "flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: u.map((t, n) => {
				let r = R(t);
				return /* @__PURE__ */ l("button", {
					type: "button",
					onMouseEnter: () => S({
						index: n,
						source: "legend"
					}),
					onMouseLeave: () => S(null),
					onPointerEnter: () => S({
						index: n,
						source: "legend"
					}),
					onPointerDown: () => S({
						index: n,
						source: "legend"
					}),
					onPointerLeave: () => S(null),
					onFocus: () => S({
						index: n,
						source: "legend"
					}),
					onBlur: () => S(null),
					className: e("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", E !== null && E !== n && "opacity-50"),
					children: [
						/* @__PURE__ */ c("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: a(t.color) }
						}),
						/* @__PURE__ */ c("span", {
							className: "text-text-secondary text-xs",
							children: t.label
						}),
						/* @__PURE__ */ c("span", {
							className: "text-text-primary text-xs font-semibold",
							children: N(r)
						})
					]
				}, t.label);
			})
		})]
	});
}
//#endregion
export { u as RadialBarChart };
