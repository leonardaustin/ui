import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/FilterButton.tsx
function r({ icon: r, children: i, className: a, ref: o, ...s }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		ref: o,
		className: e("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", a),
		...s,
		children: [/* @__PURE__ */ t(r, { className: "h-3.5 w-3.5 shrink-0" }), i && /* @__PURE__ */ t("span", {
			className: "hidden sm:inline",
			children: i
		})]
	});
}
//#endregion
export { r as FilterButton };
