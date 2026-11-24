import { cn as e } from "../../lib/cn.js";
import { estimateTooltipWidth as t, getFloatingTooltipStyle as n, getPositiveValue as r, resolveChartColor as i } from "./chartUtils.js";
import { useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/charts/DonutChart.tsx
function c(e, t) {
	let n = e.reduce((e, t) => e + r(t.value), 0), i = 0;
	return e.map((e) => {
		let a = r(e.value), o = n > 0 ? a / n * t : 0, s = t - o, c = i / t * 360 - 90, l = c + o / t * 180, u = n > 0 ? a / n * 100 : 0;
		return i += o, {
			segment: e,
			segmentLength: o,
			dashOffset: s,
			rotation: c,
			midAngle: l,
			percentage: u
		};
	});
}
function l({ segments: l, size: u = 180, strokeWidth: d = 28, valueFormatter: f, percentageFormatter: p, showLegend: m = !0, "aria-label": h = "Donut chart", className: g, ref: _, ...v }) {
	let [y, b] = a(null), x = l.reduce((e, t) => e + r(t.value), 0), S = Math.max(1, u), C = Math.max(1, Math.min(d, S - 1)), w = Math.max(.5, (S - C) / 2), T = c(l, 2 * Math.PI * w), E = f ?? ((e) => e.toLocaleString()), D = p ?? ((e) => `${e.toFixed(1)}%`), O = S + 12, k = O / 2;
	return /* @__PURE__ */ s("div", {
		ref: _,
		...v,
		className: e("flex flex-col items-center gap-4", g),
		children: [/* @__PURE__ */ s("div", {
			className: "relative",
			children: [/* @__PURE__ */ s("svg", {
				width: O,
				height: O,
				viewBox: `0 0 ${O} ${O}`,
				className: "select-none",
				onMouseLeave: () => b(null),
				onPointerLeave: () => b(null),
				role: "img",
				"aria-label": h,
				children: [
					T.map((e, t) => /* @__PURE__ */ o("circle", {
						cx: k,
						cy: k,
						r: w,
						fill: "none",
						stroke: "transparent",
						strokeWidth: C + 12 + 8,
						strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
						strokeLinecap: "butt",
						transform: `rotate(${e.rotation} ${k} ${k})`,
						onMouseEnter: () => b(t),
						onPointerEnter: () => b(t),
						onPointerDown: () => b(t),
						onFocus: () => b(t),
						onBlur: () => b(null),
						tabIndex: 0,
						role: "button",
						"aria-label": `${e.segment.name}: ${E(r(e.segment.value))} (${D(e.percentage)})`,
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					T.map((e, t) => {
						let n = y === t, r = e.midAngle * Math.PI / 180, a = n ? Math.cos(r) * 6 : 0, s = n ? Math.sin(r) * 6 : 0;
						return /* @__PURE__ */ o("circle", {
							cx: k,
							cy: k,
							r: w,
							fill: "none",
							stroke: i(e.segment.color),
							strokeWidth: n ? C + 4 : C,
							strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
							strokeLinecap: "butt",
							transform: `translate(${a} ${s}) rotate(${e.rotation} ${k} ${k})`,
							opacity: y !== null && !n ? .5 : 1,
							style: { transition: "all 150ms ease-out" },
							className: "pointer-events-none"
						}, e.segment.name);
					}),
					/* @__PURE__ */ o("text", {
						x: k,
						y: k - 6,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-primary)",
						fontSize: 18,
						fontWeight: 700,
						className: "pointer-events-none",
						children: E(y === null ? x : r(T[y].segment.value))
					}),
					/* @__PURE__ */ o("text", {
						x: k,
						y: k + 12,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-tertiary)",
						fontSize: 10,
						className: "pointer-events-none",
						children: y === null ? "Total" : T[y].segment.name
					})
				]
			}), y !== null && (() => {
				let e = T[y], a = e.midAngle * Math.PI / 180, c = w + C / 2 + 20, l = k + Math.cos(a) * c, u = k + Math.sin(a) * c, d = i(e.segment.color), f = E(r(e.segment.value)), p = D(e.percentage);
				return /* @__PURE__ */ o("div", {
					className: "ui-glass ui-glass-popover bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: n({
						anchorX: l,
						anchorY: u,
						boundsHeight: O,
						boundsWidth: O,
						height: 30,
						margin: 4,
						offset: 8,
						width: t([`${e.segment.name} ${f} ${p}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ s("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ o("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: d }
							}),
							/* @__PURE__ */ o("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: e.segment.name
							}),
							/* @__PURE__ */ o("span", {
								className: "text-text-primary text-xs font-semibold",
								children: f
							}),
							/* @__PURE__ */ s("span", {
								className: "text-text-tertiary text-2xs",
								children: [
									"(",
									p,
									")"
								]
							})
						]
					})
				});
			})()]
		}), m && /* @__PURE__ */ o("div", {
			className: "relative z-0 flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: l.map((t, n) => /* @__PURE__ */ s("button", {
				type: "button",
				onMouseEnter: () => b(n),
				onMouseLeave: () => b(null),
				onPointerEnter: () => b(n),
				onPointerDown: () => b(n),
				onPointerLeave: () => b(null),
				onFocus: () => b(n),
				onBlur: () => b(null),
				className: e("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", y !== null && y !== n && "opacity-50"),
				children: [
					/* @__PURE__ */ o("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: i(t.color) }
					}),
					/* @__PURE__ */ o("span", {
						className: "text-text-secondary text-xs",
						children: t.name
					}),
					/* @__PURE__ */ o("span", {
						className: "text-text-primary text-xs font-semibold",
						children: E(r(t.value))
					})
				]
			}, t.name))
		})]
	});
}
//#endregion
export { l as DonutChart };
