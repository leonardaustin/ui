import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import { useFieldControl as n } from "./useFieldControl.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/Textarea.tsx
function a({ label: a, error: o, showCount: s, maxLength: c, value: l, className: u, id: d, hint: f, controlSize: p, required: m, "aria-describedby": h, "aria-invalid": g, ref: _, ...v }) {
	let y = n({
		id: d,
		error: o,
		hint: f,
		describedBy: h,
		invalid: g,
		required: m
	}), { inputId: b, errorId: x, hintId: S } = y, C = t(p), w = typeof l == "string" ? l.length : 0;
	return /* @__PURE__ */ i("div", {
		className: "flex flex-col gap-1.5",
		children: [
			f && /* @__PURE__ */ r("p", {
				id: S,
				className: "text-text-secondary text-xs",
				children: f
			}),
			a && /* @__PURE__ */ r("label", {
				htmlFor: b,
				className: "ui-field-label font-label text-xs font-medium",
				children: a
			}),
			/* @__PURE__ */ r("textarea", {
				ref: _,
				"data-control-size": C,
				required: y.required,
				"aria-invalid": y.invalid,
				"aria-describedby": y.describedBy,
				id: b,
				value: l,
				maxLength: c,
				className: e("ui-sized-control bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-placeholder", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", o ? "border-danger" : "border-border", u),
				...v
			}),
			/* @__PURE__ */ i("div", {
				className: "flex justify-between",
				children: [o && /* @__PURE__ */ r("p", {
					id: x,
					className: "text-2xs text-danger-fg",
					children: o
				}), s && c && /* @__PURE__ */ i("p", {
					className: "text-2xs text-text-tertiary ml-auto",
					children: [
						w,
						"/",
						c
					]
				})]
			})
		]
	});
}
//#endregion
export { a as Textarea };
