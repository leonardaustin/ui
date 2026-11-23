import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useControlSize as n } from "../../providers/ControlSizeContext.js";
import { useControllableState as r } from "../../hooks/useControllableState.js";
import { FieldContext as i, describeField as a } from "./FieldContext.js";
import { useContext as o, useEffect as s, useId as c, useMemo as l, useRef as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { Check as p, Minus as m } from "lucide-react";
//#region src/components/ui/Checkbox.tsx
function h({ id: h, checked: g, defaultChecked: _ = !1, indeterminate: v, onChange: y, onCheckedChange: b, label: x, disabled: S, controlSize: C, className: w, "aria-label": T, "aria-describedby": E, "aria-invalid": D, required: O, ref: k, ...A }) {
	let [j, M] = r({
		value: g,
		defaultValue: _,
		onChange: b
	}), N = c(), P = n(C), F = o(i), I = h ?? F?.id ?? N, L = u(null), R = l(() => t(L, k), [k]);
	return s(() => {
		L.current && (L.current.indeterminate = !!v);
	}, [v]), /* @__PURE__ */ f("div", {
		className: e("ui-choice flex w-fit items-center gap-2.5", S ? "cursor-not-allowed opacity-40" : "cursor-pointer", w),
		"data-control-size": P,
		children: [/* @__PURE__ */ f("span", {
			className: "ui-checkbox-control",
			children: [/* @__PURE__ */ d("input", {
				...A,
				ref: R,
				id: I,
				type: "checkbox",
				checked: j,
				"aria-checked": v ? "mixed" : j,
				"aria-label": T,
				"aria-describedby": a(E, F?.describedBy),
				"aria-invalid": D ?? (F?.invalid || void 0),
				disabled: S,
				required: O ?? F?.required,
				onChange: (e) => {
					y?.(e), M(e.target.checked);
				},
				className: "ui-checkbox-input"
			}), /* @__PURE__ */ d("span", {
				className: "ui-checkbox-decoration",
				"aria-hidden": "true",
				children: v ? /* @__PURE__ */ d(m, { className: "h-3 w-3" }) : j ? /* @__PURE__ */ d(p, { className: "h-3 w-3" }) : null
			})]
		}), x && /* @__PURE__ */ d("label", {
			htmlFor: I,
			className: e("text-text-primary text-xs", S ? "cursor-not-allowed" : "cursor-pointer"),
			children: x
		})]
	});
}
//#endregion
export { h as Checkbox };
