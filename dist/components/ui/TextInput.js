import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import { useFieldControl as n } from "./useFieldControl.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/TextInput.tsx
function a({ label: a, error: o, icon: s, className: c, id: l, readOnly: u, hint: d, controlSize: f, required: p, "aria-describedby": m, "aria-invalid": h, ref: g, ..._ }) {
	let v = n({
		id: l,
		error: o,
		hint: d,
		describedBy: m,
		invalid: h,
		required: p
	}), { inputId: y, errorId: b, hintId: x } = v, S = t(f);
	return /* @__PURE__ */ i("div", {
		className: "flex flex-col gap-1.5",
		children: [
			d && /* @__PURE__ */ r("p", {
				id: x,
				className: "text-text-secondary text-xs",
				children: d
			}),
			(a || o) && /* @__PURE__ */ i("div", {
				className: "flex items-center justify-between",
				children: [a && /* @__PURE__ */ r("label", {
					htmlFor: y,
					className: "ui-field-label font-label text-xs font-medium",
					children: a
				}), o && /* @__PURE__ */ r("p", {
					id: b,
					className: "text-2xs text-danger-fg",
					children: o
				})]
			}),
			/* @__PURE__ */ i("div", {
				className: "relative",
				children: [s && /* @__PURE__ */ r("span", {
					className: "text-text-tertiary absolute top-1/2 left-2.5 -translate-y-1/2",
					children: s
				}), /* @__PURE__ */ r("input", {
					ref: g,
					"data-control-size": S,
					"data-has-icon": s ? "true" : void 0,
					required: v.required,
					"aria-invalid": v.invalid,
					id: y,
					readOnly: u,
					"aria-describedby": v.describedBy,
					className: e("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-placeholder", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", u && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", s && "pl-7", o ? "border-danger" : !u && "border-border", u && !o && "border-border", c),
					..._
				})]
			})
		]
	});
}
//#endregion
export { a as TextInput };
