import { isLightTheme as e } from "../config/theme.js";
import { useSettings as t } from "./useSettings.js";
import { useCallback as n } from "react";
//#region src/hooks/useApplyTheme.ts
function r() {
	let { setPreferredDarkTheme: r, setPreferredLightTheme: i, setColorMode: a } = t();
	return n((t) => {
		e(t) ? (i(t), a("light")) : (r(t), a("dark"));
	}, [
		r,
		i,
		a
	]);
}
//#endregion
export { r as useApplyTheme };
