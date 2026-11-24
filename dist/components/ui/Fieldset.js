import { cn as e } from "../../lib/cn.js";
import { FieldContext as t, describeField as n } from "./FieldContext.js";
import { useId as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/ui/Fieldset.tsx
function o({ id: o, legend: s, hint: c, error: l, children: u, className: d, "aria-describedby": f, ...p }) {
	let m = r(), h = o ?? m, g = c ? `${h}-hint` : void 0, _ = l ? `${h}-error` : void 0, v = n(f, g, _);
	return /* @__PURE__ */ a("fieldset", {
		...p,
		id: h,
		"aria-describedby": v,
		className: e("min-w-0 space-y-2", d),
		children: [
			/* @__PURE__ */ i("legend", {
				className: "text-text-primary font-label text-xs font-medium",
				children: s
			}),
			c && /* @__PURE__ */ i("p", {
				id: g,
				className: "text-text-secondary text-xs",
				children: c
			}),
			l && /* @__PURE__ */ i("p", {
				id: _,
				className: "text-danger-fg text-xs",
				children: l
			}),
			/* @__PURE__ */ i(t.Provider, {
				value: {
					describedBy: v,
					invalid: !!l
				},
				children: u
			})
		]
	});
}
//#endregion
export { o as Fieldset };
