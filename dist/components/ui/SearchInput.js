import { cn as e } from "../../lib/cn.js";
import { useControllableState as t } from "../../hooks/useControllableState.js";
import { describeField as n } from "./FieldContext.js";
import { useId as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { AlertTriangle as o, Search as s } from "lucide-react";
//#region src/components/ui/SearchInput.tsx
function c({ value: c, defaultValue: l = "", onValueChange: u, onChange: d, placeholder: f = "Search...", className: p, inputClassName: m, icon: h = s, invalid: g = !1, errorMessage: _, "aria-invalid": v, "aria-describedby": y, ref: b, ...x }) {
	let [S, C] = t({
		value: c,
		defaultValue: l,
		onChange: u
	}), w = `${r()}-error`, T = g || v != null && v !== !1 && v !== "false", E = T && _ != null && typeof _ != "boolean" && _ !== "";
	return /* @__PURE__ */ a("div", {
		className: e("flex flex-col gap-1.5", p),
		children: [/* @__PURE__ */ a("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ i(h, {
					"aria-hidden": "true",
					className: "text-text-tertiary pointer-events-none absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2"
				}),
				/* @__PURE__ */ i("input", {
					...x,
					ref: b,
					type: "search",
					value: S,
					onChange: (e) => {
						d?.(e), C(e.target.value);
					},
					placeholder: f,
					"aria-invalid": g ? !0 : v,
					"aria-describedby": n(y, E ? w : void 0),
					className: e("bg-bg-secondary text-text-primary h-7 w-full pl-7 text-xs", !T && "pr-2", "border-border rounded-md border", "placeholder:text-text-placeholder", "transition-colors duration-[100ms]", "focus:outline-none", T ? "border-danger focus:border-danger" : "focus:border-accent", T && "search-input-invalid", m)
				}),
				T && /* @__PURE__ */ i(o, {
					"aria-hidden": "true",
					className: "search-input-warning text-danger pointer-events-none absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2"
				})
			]
		}), E && /* @__PURE__ */ i("p", {
			id: w,
			className: "text-2xs text-danger-fg",
			children: _
		})]
	});
}
//#endregion
export { c as SearchInput };
