import { EMPTY_TYPEAHEAD as e, appendTypeahead as t, isTypeaheadActive as n, typeaheadNow as r } from "../lib/typeahead.js";
import { useRef as i } from "react";
//#region src/hooks/useTypeahead.ts
function a() {
	let a = i(e);
	return {
		push(e) {
			return a.current = t(a.current, e, r()), a.current.text;
		},
		active() {
			return n(a.current, r());
		},
		clear() {
			a.current = e;
		}
	};
}
//#endregion
export { a as useTypeahead };
