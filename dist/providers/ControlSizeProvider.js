import { ControlSizeContext as e } from "./ControlSizeContext.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/providers/ControlSizeProvider.tsx
function n({ size: n, children: r }) {
	return /* @__PURE__ */ t(e.Provider, {
		value: n,
		children: r
	});
}
//#endregion
export { n as ControlSizeProvider };
