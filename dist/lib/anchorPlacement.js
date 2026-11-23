//#region src/lib/anchorPlacement.ts
var e = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, t = [
	"bottom",
	"top",
	"right",
	"left"
];
function n(e, t, n) {
	switch (n) {
		case "top": return e.top - t.top;
		case "bottom": return t.bottom - e.bottom;
		case "left": return e.left - t.left;
		case "right": return t.right - e.right;
	}
}
function r(e, t, n, r) {
	return Math.min(Math.max(e, n), r - t);
}
function i(e, t, n, r) {
	return r === "start" ? e : r === "end" ? t - n : (e + t) / 2 - n / 2;
}
function a(e, t, { size: { width: n, height: a }, bounds: o, margin: s, gap: c, align: l = "center" }) {
	return e === "top" || e === "bottom" ? {
		left: r(i(t.left, t.right, n, l), n, o.left + s, o.right - s),
		top: e === "bottom" ? t.bottom + c : t.top - c - a
	} : {
		left: e === "right" ? t.right + c : t.left - c - n,
		top: r(i(t.top, t.bottom, a, l), a, o.top + s, o.bottom - s)
	};
}
function o(e, t, n) {
	let { size: { width: r, height: i }, bounds: o, margin: s } = n, c = o.left + s, l = o.right - s, u = o.top + s, d = o.bottom - s;
	if (r > l - c || i > d - u) return null;
	let { left: f, top: p } = a(e, t, n);
	return f >= c && f + r <= l && p >= u && p + i <= d ? {
		side: e,
		left: f,
		top: p
	} : null;
}
function s(r, i, a) {
	if (!i) return null;
	let { bounds: s } = a;
	if (!(i.right > s.left && i.left < s.right && i.bottom > s.top && i.top < s.bottom)) return null;
	let c = r === "auto" ? [...t].sort((e, t) => n(i, s, t) - n(i, s, e)) : [r, e[r]];
	for (let e of c) {
		let t = o(e, i, a);
		if (t) return t;
	}
	return null;
}
function c(e, t, n, r) {
	return Math.max(Math.min(e, r - t), n);
}
function l(t, r, i) {
	if (i.flip === !1) return {
		side: t,
		...a(t, r, i)
	};
	let o = s(t, r, i);
	if (o) return o;
	let { size: { width: l, height: u }, bounds: d, margin: f } = i, p = e[t], m = n(r, d, p) > n(r, d, t) ? p : t, { left: h, top: g } = a(m, r, i);
	return {
		side: m,
		left: c(h, l, d.left + f, d.right - f),
		top: c(g, u, d.top + f, d.bottom - f)
	};
}
//#endregion
export { s as placeAgainstAnchor, l as placePopup, n as roomOnSide };
