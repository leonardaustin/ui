import { cn as e } from "../../lib/cn.js";
import { useControllableState as t } from "../../hooks/useControllableState.js";
import { TextInput as n } from "./TextInput.js";
import { datePartsError as r } from "../../lib/dateParts.js";
import { useEffect as i, useId as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { ChevronDown as u } from "lucide-react";
//#region src/components/ui/DatePartsInput.tsx
var d = {
	day: "",
	month: "",
	year: ""
};
function f({ value: f, defaultValue: p = d, onValueChange: m, label: h, hint: g, error: _, id: v, name: y, disabled: b, required: x, className: S, inputProps: C, minYear: w = 1900, maxYear: T = 2100, ref: E, ...D }) {
	let O = a(), [k, A] = t({
		value: f,
		defaultValue: p,
		onChange: m
	}), j = o({}), [M, N] = s(!1);
	if (!Number.isInteger(w) || !Number.isInteger(T) || w < 1 || T > 9999 || w > T) throw RangeError("DatePartsInput requires year bounds between 1 and 9999, with minYear <= maxYear");
	let P = r(k, {
		required: x,
		minYear: w,
		maxYear: T
	}), F = k.day !== "" && k.month !== "" && k.year.length >= 4, I = _ || (M || F ? P : void 0);
	i(() => {
		Object.values(j.current).forEach((e) => e?.setCustomValidity(P ?? ""));
	}, [P]);
	let L = [
		31,
		Number(k.year) % 4 == 0 && (Number(k.year) % 100 != 0 || Number(k.year) % 400 == 0) ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	][Number(k.month) - 1] ?? 31, R = {
		day: Array.from({ length: L }, (e, t) => String(t + 1)),
		month: Array.from({ length: 12 }, (e, t) => String(t + 1)),
		year: Array.from({ length: T - w + 1 }, (e, t) => String(T - t))
	}, z = v ?? O, B = [g && `${z}-hint`, I && `${z}-error`].filter(Boolean).join(" ") || void 0, V = [D["aria-describedby"], B].filter(Boolean).join(" ") || void 0;
	return /* @__PURE__ */ l("fieldset", {
		ref: E,
		...D,
		id: z,
		disabled: b,
		className: e("space-y-2", S),
		"aria-describedby": V,
		children: [
			/* @__PURE__ */ l("legend", {
				className: "ui-field-label text-xs font-medium",
				children: [h, x && /* @__PURE__ */ c("span", { children: " (required)" })]
			}),
			g && /* @__PURE__ */ c("p", {
				id: `${z}-hint`,
				className: "text-text-tertiary text-xs",
				children: g
			}),
			/* @__PURE__ */ c("div", {
				className: "ui-date-parts",
				children: [
					"day",
					"month",
					"year"
				].map((e) => /* @__PURE__ */ l("div", {
					className: "ui-date-part",
					children: [/* @__PURE__ */ c(n, {
						inputMode: "numeric",
						"data-1p-ignore": "true",
						...C?.[e],
						ref: (t) => {
							j.current[e] = t;
							let n = C?.[e]?.ref;
							if (typeof n == "function") return n(t);
							n && (n.current = t);
						},
						onBlur: (t) => {
							N(!0), C?.[e]?.onBlur?.(t);
						},
						onInvalid: (t) => {
							N(!0), C?.[e]?.onInvalid?.(t);
						},
						type: "text",
						id: `${z}-${e}`,
						label: e[0].toUpperCase() + e.slice(1),
						name: y ? `${y}.${e}` : void 0,
						value: k[e],
						required: x,
						"aria-invalid": I ? !0 : C?.[e]?.["aria-invalid"],
						"aria-describedby": [B, C?.[e]?.["aria-describedby"]].filter(Boolean).join(" ") || void 0,
						onChange: (t) => {
							A({
								...k,
								[e]: t.target.value
							}), C?.[e]?.onChange?.(t);
						}
					}), /* @__PURE__ */ l("div", {
						className: "ui-date-part-selector",
						children: [/* @__PURE__ */ c(u, {
							"aria-hidden": "true",
							className: "h-3.5 w-3.5"
						}), /* @__PURE__ */ l("select", {
							"aria-label": `Choose ${e}`,
							disabled: b || C?.[e]?.disabled || C?.[e]?.readOnly,
							value: R[e].includes(String(Number(k[e]))) ? String(Number(k[e])) : "",
							onChange: (t) => {
								A({
									...k,
									[e]: t.target.value
								});
							},
							children: [/* @__PURE__ */ l("option", {
								value: "",
								disabled: !0,
								children: ["Choose ", e]
							}), R[e].map((e) => /* @__PURE__ */ c("option", {
								value: e,
								children: e
							}, e))]
						})]
					})]
				}, e))
			}),
			I && /* @__PURE__ */ c("p", {
				id: `${z}-error`,
				className: "text-danger-fg text-xs",
				children: I
			})
		]
	});
}
//#endregion
export { f as DatePartsInput };
