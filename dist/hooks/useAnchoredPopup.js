import { placePopup as e, roomOnSide as t } from "../lib/anchorPlacement.js";
import { useLayoutEffect as n, useRef as r } from "react";
//#region src/hooks/useAnchoredPopup.ts
function i(e, t) {
	let n = {
		left: Math.max(e.left, t.left),
		top: Math.max(e.top, t.top),
		right: Math.min(e.right, t.right),
		bottom: Math.min(e.bottom, t.bottom)
	};
	return n.left < n.right && n.top < n.bottom ? n : null;
}
function a(e, t) {
	let n = i(e.getBoundingClientRect(), t), r = e.ownerDocument.defaultView;
	for (let t = e.parentElement; n && t && t !== e.ownerDocument.documentElement; t = t.parentElement) {
		let e = r?.getComputedStyle(t);
		e && (e.overflowX !== "visible" || e.overflowY !== "visible") && (n = i(n, t.getBoundingClientRect()));
	}
	return n !== null;
}
function o(e) {
	let t = e.createElement("div");
	return t.setAttribute("aria-hidden", "true"), t.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none", t;
}
function s(e) {
	let t = null;
	return {
		measure() {
			let n = e.parentElement;
			if (!n) return {
				left: 0,
				top: 0
			};
			t?.parentElement !== n && (t?.remove(), t = o(e.ownerDocument), n.appendChild(t));
			let { left: r, top: i } = t.getBoundingClientRect();
			return {
				left: r,
				top: i
			};
		},
		release() {
			t?.remove(), t = null;
		}
	};
}
var c = (e, t) => e.length !== t.length || e.some((e, n) => Math.abs(e - t[n]) > .5);
function l(i, o, l, { side: u, align: d = "center", gap: f = 4, margin: p = 8, onAnchorHidden: m, matchAnchorWidth: h = !1, flip: g = !0, minSize: _ = 120 }) {
	let v = r(m);
	n(() => {
		v.current = m;
	}), n(() => {
		let n = l.current;
		if (!i || !n) return;
		let r = n.ownerDocument, m = r.defaultView ?? window, y = s(n), b = [], x = (e) => {
			let t = e.getBoundingClientRect(), n = y.measure();
			return [
				t.left,
				t.top,
				t.width,
				t.height,
				n.left,
				n.top
			];
		}, S = (i) => {
			let s = o.current;
			if (!s) return;
			let c = r.documentElement, l = {
				left: 0,
				top: 0,
				right: c.clientWidth || m.innerWidth,
				bottom: c.clientHeight || m.innerHeight
			};
			if (i && v.current && !a(s, l)) {
				v.current();
				return;
			}
			let y = s.getBoundingClientRect();
			if (h) {
				let e = s instanceof HTMLElement ? s.offsetWidth : y.width;
				n.style.width = `${e}px`;
			}
			let S = u === "top" || u === "bottom";
			if (!g) {
				let e = t(y, l, u) - f - p;
				n.style[S ? "maxHeight" : "maxWidth"] = `${Math.max(Math.floor(e), _)}px`;
			}
			let C = e(u, y, {
				size: {
					width: n.offsetWidth,
					height: n.offsetHeight
				},
				bounds: l,
				margin: p,
				gap: f,
				align: d,
				flip: g
			});
			b = x(s), n.style.left = `${C.left - b[4]}px`, n.style.top = `${C.top - b[5]}px`, n.dataset.side = C.side;
		}, C = () => {
			let e = o.current;
			e && c(x(e), b) && S(!1);
		}, w = 0, T = () => {
			C(), w = m.requestAnimationFrame(T);
		}, E = (e) => {
			e.target instanceof Node && n.contains(e.target) || S(!0);
		}, D = () => S(!0);
		S(!1), m.addEventListener("resize", D), m.addEventListener("scroll", E, !0);
		let O = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => S(!1));
		return O?.observe(n), o.current && O?.observe(o.current), r.addEventListener("animationend", C, !0), r.addEventListener("transitionend", C, !0), w = m.requestAnimationFrame(T), () => {
			m.removeEventListener("resize", D), m.removeEventListener("scroll", E, !0), r.removeEventListener("animationend", C, !0), r.removeEventListener("transitionend", C, !0), m.cancelAnimationFrame(w), O?.disconnect(), y.release(), g || (n.style.maxHeight = "", n.style.maxWidth = "");
		};
	}, [
		i,
		o,
		l,
		u,
		d,
		f,
		p,
		h,
		g,
		_
	]);
}
function u(e, t, i, a) {
	let o = r(a);
	n(() => {
		o.current = a;
	}), n(() => {
		let n = i.current;
		if (!e || !n) return;
		let r = n.ownerDocument, a = r.defaultView ?? window, l = s(n), u = [], d = () => {
			let e = t.current;
			if (!e) return;
			let i = e.getBoundingClientRect(), s = l.measure(), d = [
				i.left,
				i.top,
				i.width,
				i.height,
				s.left,
				s.top
			];
			if (!c(d, u)) return;
			u = d;
			let f = r.documentElement.clientWidth || a.innerWidth, p = o.current(i, f);
			n.style.left = `${p.left - s.left}px`, n.style.top = `${p.top - s.top}px`, p.width !== void 0 && (n.style.width = `${p.width}px`);
		};
		d();
		let f = 0, p = () => {
			d(), f = a.requestAnimationFrame(p);
		};
		return f = a.requestAnimationFrame(p), () => {
			a.cancelAnimationFrame(f), l.release();
		};
	}, [
		e,
		t,
		i
	]);
}
//#endregion
export { l as useAnchoredPopup, u as useFixedPopupAt };
