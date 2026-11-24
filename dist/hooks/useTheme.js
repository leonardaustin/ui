import { ThemeContext as e } from "../providers/ThemeContext.js";
import { useContext as t } from "react";
//#region src/hooks/useTheme.ts
function n() {
	return t(e);
}
//#endregion
export { n as useTheme };
