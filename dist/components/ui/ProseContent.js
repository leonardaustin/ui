import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/ProseContent.tsx
function n({ children: n, className: r, ref: i, ...a }) {
	return /* @__PURE__ */ t("div", {
		ref: i,
		...a,
		className: e("ui-prose", r),
		children: n
	});
}
//#endregion
export { n as ProseContent };
