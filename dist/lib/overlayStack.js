//#region src/lib/overlayStack.ts
function e(e) {
	return { parent: e };
}
var t = [];
function n(e, t) {
	for (let n = t.parent; n; n = n.parent) if (n === e) return !0;
	return !1;
}
function r(e) {
	if (e.key !== "Escape" || e.defaultPrevented) return;
	let n = e.currentTarget;
	for (let r = t.length - 1; r >= 0; r--) if (t[r].doc === n) {
		t[r].onEscape(e);
		return;
	}
}
function i(e, i, a = document) {
	let o = {
		node: e,
		doc: a,
		onEscape: i
	};
	t.some((e) => e.doc === a) || a.addEventListener("keydown", r);
	let s = t.findIndex((t) => n(e, t.node));
	return s === -1 ? t.push(o) : t.splice(s, 0, o), () => {
		let e = t.indexOf(o);
		e !== -1 && (t.splice(e, 1), t.some((e) => e.doc === a) || a.removeEventListener("keydown", r));
	};
}
var a = /* @__PURE__ */ new Map();
function o(e = document) {
	let t = a.get(e);
	t || (t = {
		count: 0,
		overflow: e.body.style.overflow
	}, a.set(e, t), e.body.style.overflow = "hidden"), t.count++;
	let n = !1;
	return () => {
		if (n) return;
		n = !0;
		let t = a.get(e);
		t && (t.count--, !(t.count > 0) && (a.delete(e), e.body.style.overflow = t.overflow));
	};
}
//#endregion
export { e as createOverlayNode, o as lockBodyScroll, i as pushOverlay };
