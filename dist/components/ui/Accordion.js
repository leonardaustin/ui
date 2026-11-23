import { cn as e } from "../../lib/cn.js";
import { Disclosure as t } from "./Disclosure.js";
import { useState as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/ui/Accordion.tsx
function i(i) {
	let [a, o] = n(i.defaultValue ?? (i.type === "multiple" ? [] : "")), { ref: s, items: c, className: l, ...u } = i;
	delete u.value, delete u.defaultValue, delete u.onValueChange, delete u.type;
	let d = i.value ?? a;
	function f(e, t) {
		if (i.type === "multiple") {
			let n = Array.isArray(d) ? d : [], r = t ? [...n, e] : n.filter((t) => t !== e);
			i.value === void 0 && o(r), i.onValueChange?.(r);
		} else {
			let n = t ? e : "";
			i.value === void 0 && o(n), i.onValueChange?.(n);
		}
	}
	return /* @__PURE__ */ r("div", {
		ref: s,
		...u,
		className: e("space-y-2", l),
		children: c.map((e) => /* @__PURE__ */ r(t, {
			title: e.title,
			meta: e.meta,
			className: e.className,
			keepMounted: e.keepMounted,
			open: i.type === "multiple" ? Array.isArray(d) && d.includes(e.value) : d === e.value,
			onOpenChange: (t) => f(e.value, t),
			children: e.children
		}, e.value))
	});
}
//#endregion
export { i as Accordion };
