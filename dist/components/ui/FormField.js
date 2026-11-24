import { cn as e } from "../../lib/cn.js";
import { FieldContext as t, describeField as n } from "./FieldContext.js";
import { useCallback as r, useId as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/ui/FormField.tsx
function c({ id: c, label: l, hint: u, error: d, required: f, optionalLabel: p, labelPlacement: m = "above", children: h, className: g, ..._ }) {
	let v = i(), y = c ?? v, b = u ? `${y}-hint` : void 0, x = d ? `${y}-error` : void 0, S = `${y}-label`, [C, w] = a(0), T = r(() => (w((e) => e + 1), () => w((e) => e - 1)), []), E = m === "placeholder" && typeof l == "string" && l ? l : void 0, D = {
		id: y,
		"aria-describedby": n(b, x),
		"aria-invalid": !!d || void 0,
		required: f
	};
	return /* @__PURE__ */ o(t.Provider, {
		value: {
			id: y,
			describedBy: n(b, x),
			invalid: !!d,
			required: f,
			placeholderLabel: E,
			labelId: S,
			claimLabel: T
		},
		children: /* @__PURE__ */ s("div", {
			..._,
			className: e("flex flex-col gap-1.5", g),
			children: [
				/* @__PURE__ */ s("label", {
					id: C > 0 ? S : void 0,
					htmlFor: y,
					className: e("ui-field-label font-label text-xs font-medium", E && "sr-only"),
					children: [
						l,
						f && /* @__PURE__ */ o("span", {
							"aria-hidden": "true",
							children: " *"
						}),
						!f && p && /* @__PURE__ */ s("span", { children: [" ", p] })
					]
				}),
				u && /* @__PURE__ */ o("p", {
					id: b,
					className: "text-text-secondary text-xs",
					children: u
				}),
				d && /* @__PURE__ */ o("p", {
					id: x,
					className: "text-danger-fg text-xs",
					children: d
				}),
				typeof h == "function" ? h(D) : h
			]
		})
	});
}
function l({ className: t, ...n }) {
	return /* @__PURE__ */ o("p", {
		...n,
		className: e("text-text-secondary text-xs", t)
	});
}
function u({ className: t, ...n }) {
	return /* @__PURE__ */ o("p", {
		...n,
		className: e("text-danger-fg text-xs", t)
	});
}
//#endregion
export { u as FieldError, l as FieldHint, c as FormField };
