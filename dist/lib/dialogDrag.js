import { clamp as e } from "./math.js";
function t(e, t) {
	let n = /^\s*(\d*\.?\d+)(px|rem)\s*$/.exec(e);
	if (!n) return 8;
	let r = Number(n[1]), i = n[2] === "rem" ? r * t : r;
	return Number.isFinite(i) && i >= 0 ? i * 2 : 8;
}
function n(t, n, [r, i], [a, o], [s, c], l) {
	let [u, d] = i - r <= c - s - l * 2 ? [r, i] : [a, o], f = n + (s + l - u), p = n + (c - l - d);
	return p < f && (p = f), f = Math.min(f, 0), p = Math.max(p, 0), e(t, f, p);
}
function r(e, t, r, i, a, o) {
	return {
		x: n(e.x, t.x, [r.left, r.right], [i.left, i.right], [a.left, a.right], o),
		y: n(e.y, t.y, [r.top, r.bottom], [i.top, i.bottom], [a.top, a.bottom], o)
	};
}
function i({ x: e, y: t }) {
	return e === 0 && t === 0 ? "" : `${e}px ${t}px`;
}
var a = 10, o = 50;
function s(e, t) {
	let n = t ? o : a;
	switch (e) {
		case "ArrowLeft": return {
			x: -n,
			y: 0
		};
		case "ArrowRight": return {
			x: n,
			y: 0
		};
		case "ArrowUp": return {
			x: 0,
			y: -n
		};
		case "ArrowDown": return {
			x: 0,
			y: n
		};
		default: return null;
	}
}
//#endregion
export { r as clampDragOffset, t as dragMarginFromSpacing, i as dragTranslate, s as nudgeDelta };
