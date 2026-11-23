import { cn as e } from "../../lib/cn.js";
import { defaultPasswordRequirements as t } from "../../lib/passwordRequirements.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Check as i, X as a } from "lucide-react";
//#region src/components/ui/PasswordRequirements.tsx
function o({ password: o, requirements: s = t, showWhenEmpty: c = !1, className: l, ref: u, ...d }) {
	return !c && o.length === 0 ? null : /* @__PURE__ */ n("ul", {
		ref: u,
		...d,
		"aria-label": "Password requirements",
		className: e("space-y-1", l),
		children: s.map((t) => {
			let s = t.test(o);
			return /* @__PURE__ */ r("li", {
				className: "flex items-center gap-1.5",
				children: [s ? /* @__PURE__ */ n(i, {
					"aria-hidden": "true",
					className: "text-success h-3 w-3"
				}) : /* @__PURE__ */ n(a, {
					"aria-hidden": "true",
					className: "text-text-tertiary h-3 w-3"
				}), /* @__PURE__ */ r("span", {
					className: e("text-2xs", s ? "text-success-fg" : "text-text-tertiary"),
					children: [t.label, /* @__PURE__ */ n("span", {
						className: "sr-only",
						children: s ? " (met)" : " (not met)"
					})]
				})]
			}, t.label);
		})
	});
}
//#endregion
export { o as PasswordRequirements };
