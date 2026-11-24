import { cn as e } from "../../lib/cn.js";
import { toneClasses as t } from "../../lib/tones.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/StatusDot.tsx
var i = {
	active: "success",
	inactive: "neutral",
	pending: "warning",
	error: "danger"
};
function a({ status: a, label: o, className: s, pulse: c = !1, ref: l, ...u }) {
	let d = t(i[a]);
	return /* @__PURE__ */ r("span", {
		ref: l,
		...u,
		className: e("inline-flex items-center gap-1.5", s),
		children: [/* @__PURE__ */ n("span", { className: e("h-2 w-2 rounded-full", d.dot, c ? e("status-dot-pulse relative", d.text) : a === "pending" && "animate-pulse-subtle") }), o && /* @__PURE__ */ n("span", {
			className: e("text-xs", d.text),
			children: o
		})]
	});
}
//#endregion
export { a as StatusDot };
