import { cn as e } from "../../lib/cn.js";
import { toneClasses as t } from "../../lib/tones.js";
import { useState as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { AlertTriangle as a, CheckCircle2 as o, Info as s, X as c, XCircle as l } from "lucide-react";
//#region src/components/ui/Alert.tsx
var u = {
	neutral: s,
	success: o,
	warning: a,
	danger: l,
	info: s
};
function d({ type: a, title: o, children: s, dismissible: l, onDismiss: d, className: f, actions: p, toneBody: m = !1, ref: h, ...g }) {
	let [_, v] = n(!1);
	if (_) return null;
	let y = a === "error" ? "danger" : a, b = t(y), x = u[y], S = y === "neutral" ? "text-text-primary" : b.text;
	return /* @__PURE__ */ i("div", {
		ref: h,
		...g,
		className: e("flex gap-2.5 rounded-md border p-3", b.fill, b.border, f),
		children: [
			/* @__PURE__ */ r(x, { className: e("mt-0.5 h-4 w-4 shrink-0", b.text) }),
			/* @__PURE__ */ i("div", {
				className: "min-w-0 flex-1",
				children: [o && /* @__PURE__ */ r("p", {
					className: e(m ? S : "text-text-primary", "mb-0.5 text-xs font-semibold"),
					children: o
				}), /* @__PURE__ */ r("div", {
					className: e(m ? S : "text-text-secondary", "text-xs"),
					children: s
				})]
			}),
			p ? /* @__PURE__ */ r("div", {
				className: "shrink-0 self-center",
				children: p
			}) : null,
			l && /* @__PURE__ */ r("button", {
				type: "button",
				onClick: () => {
					d ? d() : v(!0);
				},
				className: "ui-alert-dismiss text-text-tertiary hover:text-text-primary flex shrink-0 cursor-pointer items-center justify-center self-start rounded-md transition-colors duration-[100ms]",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ r(c, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
export { d as Alert };
