import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import { useControllableState as n } from "../../hooks/useControllableState.js";
import { FieldContext as r, describeField as i } from "./FieldContext.js";
import { Fieldset as a } from "./Fieldset.js";
import { useContext as o, useId as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/ui/Radio.tsx
function u({ label: n, description: a, controlSize: u, className: d, id: f, "aria-describedby": p, "aria-invalid": m, ref: h, ...g }) {
	let _ = s(), v = t(u), y = o(r), b = f ?? y?.id ?? _, x = a ? `${b}-description` : void 0;
	return /* @__PURE__ */ l("label", {
		className: e("ui-choice flex items-start gap-2.5", d),
		"data-control-size": v,
		children: [/* @__PURE__ */ c("input", {
			...g,
			ref: h,
			id: b,
			type: "radio",
			"aria-invalid": m ?? (y?.invalid || void 0),
			"aria-describedby": i(p, y?.describedBy, x),
			className: "ui-native-choice"
		}), /* @__PURE__ */ l("span", {
			className: "text-text-primary text-xs",
			children: [/* @__PURE__ */ c("span", { children: n }), a && /* @__PURE__ */ c("span", {
				id: x,
				className: "text-text-secondary block text-xs",
				children: a
			})]
		})]
	});
}
function d({ name: e, id: t, options: r, value: i, defaultValue: o, onValueChange: l, required: d, disabled: f, controlSize: p, ...m }) {
	let h = s(), g = t ?? h, [_, v] = n({
		value: i,
		defaultValue: o,
		onChange: (e) => l?.(e)
	});
	return /* @__PURE__ */ c(a, {
		...m,
		id: g,
		disabled: f,
		children: r.map((t, n) => /* @__PURE__ */ c(u, {
			id: `${g}-${n}`,
			name: e ?? g,
			value: t.value,
			checked: _ === t.value,
			onChange: () => v(t.value),
			label: t.label,
			description: t.description,
			disabled: f || t.disabled,
			required: d,
			controlSize: p
		}, t.value))
	});
}
var f = /*#__PURE__*/ Object.assign(u, { Group: d });
//#endregion
export { f as Radio };
