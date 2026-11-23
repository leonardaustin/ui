import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/DividerLabel.tsx
function r({ children: r, className: i, ref: a, ...o }) {
	return /* @__PURE__ */ n("div", {
		...o,
		ref: a,
		className: e("my-6 flex items-center gap-3", i),
		children: [
			/* @__PURE__ */ t("div", { className: "border-border flex-1 border-t" }),
			/* @__PURE__ */ t("span", {
				className: "text-text-tertiary text-xs",
				children: r
			}),
			/* @__PURE__ */ t("div", { className: "border-border flex-1 border-t" })
		]
	});
}
//#endregion
export { r as DividerLabel };
