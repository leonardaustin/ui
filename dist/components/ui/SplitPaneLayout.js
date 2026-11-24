import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/SplitPaneLayout.tsx
function n({ children: n, direction: r = "row", className: i, ref: a, ...o }) {
	return /* @__PURE__ */ t("div", {
		ref: a,
		...o,
		className: e("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", r === "column" && "flex-col", i),
		children: n
	});
}
function r({ children: n, className: r, ref: i, ...a }) {
	return /* @__PURE__ */ t("div", {
		ref: i,
		...a,
		className: e("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", r),
		children: n
	});
}
var i = /*#__PURE__*/ Object.assign(n, { Main: r });
//#endregion
export { i as SplitPaneLayout };
