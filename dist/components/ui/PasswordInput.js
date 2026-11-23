import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import { useFieldControl as n } from "./useFieldControl.js";
import { useState as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { Eye as o, EyeOff as s } from "lucide-react";
//#region src/components/ui/PasswordInput.tsx
function c({ label: c, error: l, className: u, id: d, hint: f, controlSize: p, required: m, "aria-describedby": h, "aria-invalid": g, ref: _, ...v }) {
	let y = n({
		id: d,
		error: l,
		hint: f,
		describedBy: h,
		invalid: g,
		required: m
	}), { inputId: b, errorId: x, hintId: S } = y, C = t(p), [w, T] = r(!1);
	return /* @__PURE__ */ a("div", {
		className: "flex flex-col gap-1.5",
		children: [
			f && /* @__PURE__ */ i("p", {
				id: S,
				className: "text-text-secondary text-xs",
				children: f
			}),
			(c || l) && /* @__PURE__ */ a("div", {
				className: "flex items-center justify-between",
				children: [c && /* @__PURE__ */ i("label", {
					htmlFor: b,
					className: "ui-field-label text-xs font-medium",
					children: c
				}), l && /* @__PURE__ */ i("p", {
					id: x,
					className: "text-2xs text-danger-fg",
					children: l
				})]
			}),
			/* @__PURE__ */ a("div", {
				className: "relative",
				children: [/* @__PURE__ */ i("input", {
					ref: _,
					"data-control-size": C,
					required: y.required,
					"aria-invalid": y.invalid,
					"aria-describedby": y.describedBy,
					id: b,
					type: w ? "text" : "password",
					className: e("ui-password-input ui-sized-control bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-placeholder", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", l ? "border-danger" : "border-border", u),
					...v
				}), /* @__PURE__ */ i("button", {
					type: "button",
					onClick: () => T(!w),
					"data-control-size": C,
					className: "ui-password-toggle text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",
					"aria-label": w ? "Hide password" : "Show password",
					children: i(w ? s : o, { className: "h-3.5 w-3.5" })
				})]
			})
		]
	});
}
//#endregion
export { c as PasswordInput };
