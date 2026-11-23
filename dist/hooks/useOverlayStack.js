import { createOverlayNode as e, lockBodyScroll as t, pushOverlay as n } from "../lib/overlayStack.js";
import { createContext as r, useContext as i, useEffect as a, useLayoutEffect as o, useRef as s, useState as c } from "react";
//#region src/hooks/useOverlayStack.ts
var l = r(null);
function u(t, r, u) {
	let d = i(l), [f] = c(() => e(d)), p = s(r);
	return o(() => {
		p.current = r;
	}), a(() => {
		if (t) return n(f, (e) => p.current(e), u?.current?.ownerDocument ?? document);
	}, [
		t,
		f,
		u
	]), f;
}
function d(e, n) {
	a(() => {
		if (e) return t(n?.current?.ownerDocument ?? document);
	}, [e, n]);
}
//#endregion
export { l as OverlayContext, d as useBodyScrollLock, u as useOverlayEscape };
