import { cn as e } from "../../lib/cn.js";
import { clamp as t } from "../../lib/math.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/charts/SparkLine.tsx
function i({ data: i, width: a = 60, height: o = 20, minValue: s, maxValue: c, strokeWidth: l = 1.5, padding: u = 1, color: d = "var(--accent)", area: f = !1, areaOpacity: p = .15, "aria-label": m = "Sparkline chart", className: h, ref: g, ..._ }) {
	if (i.length < 2) return null;
	let v = Math.max(1, a), y = Math.max(1, o), b = Math.max(0, Math.min(u, y / 2, v / 2)), x = s ?? Math.min(...i), S = c ?? Math.max(...i), C = Math.min(x, S), w = Math.max(x, S), T = w - C, E = Math.max(1, v - b * 2), D = Math.max(1, y - b * 2), O = i.map((e, n) => ({
		x: b + n / (i.length - 1) * E,
		y: T === 0 ? y / 2 : b + D - (t(e, C, w) - C) / T * D
	})), k = O.map(({ x: e, y: t }) => `${e},${t}`).join(" "), A = O.length > 0 ? [
		`${O[0].x},${y - b}`,
		...O.map(({ x: e, y: t }) => `${e},${t}`),
		`${O[O.length - 1].x},${y - b}`
	].join(" ") : "";
	return /* @__PURE__ */ r("svg", {
		ref: g,
		..._,
		width: v,
		height: y,
		viewBox: `0 0 ${v} ${y}`,
		className: e("inline-block", h),
		role: "img",
		"aria-label": m,
		children: [f && /* @__PURE__ */ n("polygon", {
			points: A,
			fill: d,
			opacity: p
		}), /* @__PURE__ */ n("polyline", {
			points: k,
			fill: "none",
			stroke: d,
			strokeWidth: l,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
export { i as SparkLine };
