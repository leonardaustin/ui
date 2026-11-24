import { useOverlayEscape as e } from "./useOverlayStack.js";
import { useEffect as t } from "react";
//#region src/hooks/useDismiss.ts
function n(n, r, i, a, o) {
	let s = o?.outsideClick ?? !0;
	return t(() => {
		if (!n) return;
		let e = (e) => {
			let t = e.target;
			a?.some((e) => e.current?.contains(t)) || i.every((e) => e.current && !e.current.contains(t)) && r("outside-click");
		};
		if (!s) return;
		let t = new Set([document, i[0]?.current?.ownerDocument ?? document]);
		return t.forEach((t) => t.addEventListener("mousedown", e)), () => t.forEach((t) => t.removeEventListener("mousedown", e));
	}, [
		n,
		r,
		i,
		a,
		s
	]), e(n, () => r("escape"), i[0]);
}
//#endregion
export { n as useDismiss };
