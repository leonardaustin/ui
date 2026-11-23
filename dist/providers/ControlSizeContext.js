import { createContext as e, useContext as t } from "react";
//#region src/providers/ControlSizeContext.ts
var n = e("compact");
function r(e) {
	let r = t(n);
	return e ?? r;
}
//#endregion
export { n as ControlSizeContext, r as useControlSize };
