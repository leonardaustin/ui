import { clamp as e } from "../../lib/math.js";
//#region src/components/charts/chartUtils.ts
var t = {
	"text-accent": "var(--accent)",
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-red": "var(--red)",
	"text-yellow": "var(--yellow)"
};
function n(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function r(e) {
	return e ? t[e] ?? e : "var(--accent)";
}
function i(e, t) {
	if (e <= 0 || t <= 0) return [];
	if (e === 1 || t === 1) return [0];
	let n = Math.min(e, Math.max(2, Math.floor(t))), r = (e - 1) / (n - 1), i = /* @__PURE__ */ new Set();
	for (let e = 0; e < n; e += 1) i.add(Math.round(e * r));
	return i.add(e - 1), Array.from(i).sort((e, t) => e - t);
}
function a(e) {
	return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function o(e, t) {
	let n = String(e ?? "");
	return t === void 0 || t <= 0 || n.length <= t ? n : t <= 3 ? n.slice(0, t) : `${n.slice(0, t - 3)}...`;
}
function s(e, t = 10) {
	let n = 0;
	for (let r of e) r === " " ? n += t * .32 : /[A-Z0-9]/.test(r) ? n += t * .62 : /[il.,:;|'`]/.test(r) ? n += t * .28 : /[MW@#%&]/.test(r) ? n += t * .82 : n += t * .54;
	return Math.ceil(n);
}
function c(t, { maxWidth: n = 220, minWidth: r = 72, paddingX: i = 20 } = {}) {
	return e(t.reduce((e, t) => Math.max(e, s(t, 11)), 0) + i, r, n);
}
function l(t, n, { boundsHeight: r, boundsWidth: i, height: a, margin: o = 0, offset: s = 8, width: c }) {
	let l = Math.max(1, Math.min(c, i - o * 2)), u = Math.max(1, Math.min(a, r - o * 2)), d = Math.max(o, i - l - o), f = Math.max(o, r - u - o), p = e(t - l / 2, o, d), m = n - u - s, h = m >= o ? "above" : "below";
	return {
		height: u,
		placement: h,
		width: l,
		x: p,
		y: h === "above" ? m : e(n + s, o, f)
	};
}
function u({ anchorX: e, anchorY: t, boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = l(e, t, {
		boundsHeight: n,
		boundsWidth: r,
		height: i,
		margin: a,
		offset: o,
		width: s
	});
	return {
		left: c.x + c.width / 2,
		minWidth: c.width,
		top: c.y + c.height / 2,
		transform: "translate(-50%, -50%)",
		width: c.width
	};
}
//#endregion
export { c as estimateTooltipWidth, n as formatCompactValue, u as getFloatingTooltipStyle, i as getLabelIndices, a as getPositiveValue, l as getSvgTooltipPosition, r as resolveChartColor, o as truncateChartLabel };
