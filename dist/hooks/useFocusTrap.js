import { useEffect as e } from "react";
//#region src/hooks/useFocusTrap.ts
var t = "a[href], button:not([disabled]), input:not([disabled]):not([type=\"hidden\"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function n(n, r, { initialFocusRef: i, returnFocusRef: a } = {}) {
	e(() => {
		let e = n.current;
		if (!r || !e) return;
		let o = e.ownerDocument, s = o.activeElement, c = a?.current, l = () => {
			let n = Array.from(e.querySelectorAll(t)).filter((e) => e.tabIndex >= 0 && !e.matches(":disabled") && !e.closest("[hidden], [inert]") && e.getClientRects().length > 0);
			return n.filter((e) => {
				if (!e.matches("input[type=\"radio\"]")) return !0;
				let t = e;
				if (!t.name) return !0;
				let r = n.filter((e) => e.matches("input[type=\"radio\"]") && e.name === t.name && e.form === t.form && e.getRootNode() === t.getRootNode());
				return t === (r.find((e) => e.checked) ?? r[0]);
			});
		}, u = i?.current;
		u && e.contains(u) ? u.focus() : (l()[0] ?? e).focus();
		let d = (t) => {
			if (t.key !== "Tab") return;
			let n = l();
			if (!n.length) {
				t.preventDefault(), e.focus();
				return;
			}
			let r = n[0], i = n[n.length - 1];
			t.shiftKey && (o.activeElement === r || !n.includes(o.activeElement)) ? (t.preventDefault(), i.focus()) : !t.shiftKey && (o.activeElement === i || !n.includes(o.activeElement)) && (t.preventDefault(), r.focus());
		};
		return o.addEventListener("keydown", d), () => {
			o.removeEventListener("keydown", d);
			let e = c ?? s;
			e?.isConnected && e.focus();
		};
	}, [
		r,
		n,
		i,
		a
	]);
}
//#endregion
export { n as useFocusTrap };
