import { cn as e } from "../../lib/cn.js";
import { useId as t, useState as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { ChevronDown as a } from "lucide-react";
//#region src/components/ui/Disclosure.tsx
function o({ title: o, open: s, defaultOpen: c = !1, onOpenChange: l, meta: u, children: d, className: f, keepMounted: p = !0, ref: m, ...h }) {
	let [g, _] = n(c), v = s ?? g, y = t();
	function b() {
		s === void 0 && _(!v), l?.(!v);
	}
	return /* @__PURE__ */ i("div", {
		...h,
		ref: m,
		className: e("border-border rounded-md border", f),
		children: [/* @__PURE__ */ i("button", {
			type: "button",
			id: `${y}-trigger`,
			"aria-expanded": v,
			"aria-controls": `${y}-content`,
			onClick: b,
			className: "text-text-primary hover:bg-bg-hover flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
			children: [
				/* @__PURE__ */ r(a, {
					"aria-hidden": "true",
					className: e("text-text-tertiary h-3.5 w-3.5 shrink-0 transition-transform duration-[100ms]", !v && "-rotate-90")
				}),
				/* @__PURE__ */ r("span", {
					className: "min-w-0 flex-1",
					children: o
				}),
				u != null && /* @__PURE__ */ r("span", {
					className: "text-text-tertiary shrink-0 text-xs font-normal",
					children: u
				})
			]
		}), /* @__PURE__ */ r("div", {
			id: `${y}-content`,
			hidden: !v,
			className: "text-text-secondary px-3 py-2 text-xs",
			children: (v || p) && d
		})]
	});
}
//#endregion
export { o as Disclosure };
