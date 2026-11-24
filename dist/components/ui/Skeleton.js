import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/Skeleton.tsx
function n({ className: n, width: r, height: i, style: a, ref: o, ...s }) {
	return /* @__PURE__ */ t("div", {
		ref: o,
		...s,
		"aria-hidden": "true",
		className: e("ui-skeleton rounded-md bg-bg-tertiary", n),
		style: {
			width: r,
			height: i,
			...a
		}
	});
}
//#endregion
export { n as Skeleton };
