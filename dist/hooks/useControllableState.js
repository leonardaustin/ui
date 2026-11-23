import { useCallback as e, useState as t } from "react";
//#region src/hooks/useControllableState.ts
function n({ value: n, defaultValue: r, onChange: i }) {
	let [a, o] = t(() => r), s = n !== void 0, c = e((e) => {
		s || o(() => e), i?.(e);
	}, [s, i]);
	return [s ? n : a, c];
}
//#endregion
export { n as useControllableState };
