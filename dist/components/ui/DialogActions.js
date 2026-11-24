import { cn as e } from "../../lib/cn.js";
import { Button as t } from "./Button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/DialogActions.tsx
function i({ onCancel: i, onConfirm: a, cancelLabel: o = "Cancel", confirmLabel: s = "Confirm", confirmVariant: c = "primary", className: l, busy: u = !1, busyLabel: d = "Working…", cancelRef: f, confirmRef: p, confirmDisabled: m = !1, ref: h, ...g }) {
	return /* @__PURE__ */ r("div", {
		...g,
		ref: h,
		className: e("flex justify-end gap-2", l),
		"aria-busy": u || void 0,
		children: [/* @__PURE__ */ n(t, {
			ref: f,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-disabled": u || void 0,
			onClick: () => {
				u || i();
			},
			children: o
		}), /* @__PURE__ */ n(t, {
			ref: p,
			type: "button",
			variant: c,
			size: "sm",
			"aria-disabled": u || m || void 0,
			onClick: () => {
				!u && !m && a();
			},
			children: u ? d : s
		})]
	});
}
//#endregion
export { i as DialogActions };
