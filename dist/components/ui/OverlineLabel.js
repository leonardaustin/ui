import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/OverlineLabel.tsx
function n({ children: n, as: r = "span", className: i, ref: a, ...o }) {
	return /* @__PURE__ */ t(r, {
		...o,
		ref: a,
		className: e("text-2xs text-text-tertiary font-label font-medium tracking-wider uppercase", i),
		children: n
	});
}
//#endregion
export { n as OverlineLabel };
