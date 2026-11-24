import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import { useControllableState as n } from "../../hooks/useControllableState.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/Toggle.tsx
function a({ checked: a, defaultChecked: o = !1, onCheckedChange: s, disabled: c, label: l, controlSize: u, onClick: d, className: f, ...p }) {
	let m = t(u), [h, g] = n({
		value: a,
		defaultValue: o,
		onChange: s
	});
	return /* @__PURE__ */ i("label", {
		className: e("flex w-fit items-center", c ? "cursor-not-allowed opacity-40" : "cursor-pointer", f),
		style: { gap: 10 },
		children: [/* @__PURE__ */ r("button", {
			...p,
			type: "button",
			role: "switch",
			"aria-checked": h,
			"data-control-size": m,
			disabled: c,
			onClick: (e) => {
				d?.(e), e.defaultPrevented || g(!h);
			},
			className: e("ui-switch relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", h ? "bg-accent border-accent" : "bg-bg-tertiary ui-switch-off", !c && "cursor-pointer"),
			children: /* @__PURE__ */ r("span", { className: "ui-switch-knob absolute top-1/2 rounded-full transition-[left] duration-[100ms]" })
		}), l && /* @__PURE__ */ r("span", {
			className: "text-text-secondary text-xs",
			children: l
		})]
	});
}
//#endregion
export { a as Toggle };
