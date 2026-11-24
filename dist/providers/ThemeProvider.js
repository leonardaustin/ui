import { SettingsContext as e } from "./SettingsContext.js";
import { ThemeContext as t } from "./ThemeContext.js";
import { applyThemeClasses as n } from "./themeClasses.js";
import { useContext as r, useEffect as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/providers/ThemeProvider.tsx
function o({ children: o }) {
	let { resolvedTheme: s } = r(e);
	return i(() => {
		n(document.documentElement.classList, s);
	}, [s]), /* @__PURE__ */ a(t.Provider, {
		value: { theme: s },
		children: o
	});
}
//#endregion
export { o as ThemeProvider };
