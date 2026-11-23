import { createContext as e, useCallback as t, useContext as n, useState as r } from "react";
//#region src/hooks/usePortalContainer.ts
var i = e(null);
function a() {
	return n(i);
}
function o(e) {
	let [n, i] = r(null);
	return [n, t((t) => {
		e.current = t, i(t);
	}, [e])];
}
//#endregion
export { i as PortalContainerContext, a as usePortalContainer, o as usePortalContainerRef };
