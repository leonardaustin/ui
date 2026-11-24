import { cn as e } from "../../lib/cn.js";
import { isTone as t, toneClasses as n } from "../../lib/tones.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/Timeline.tsx
function a({ items: a, className: o, ref: s, ...c }) {
	return /* @__PURE__ */ r("div", {
		ref: s,
		...c,
		className: e("space-y-0", o),
		children: a.map((o, s) => /* @__PURE__ */ i("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ i("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ r("div", { className: e(t(o.dot) ? n(o.dot).dot : o.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), s < a.length - 1 && /* @__PURE__ */ r("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ i("div", {
				className: e("pb-4", s === a.length - 1 && "pb-0"),
				children: [/* @__PURE__ */ r("p", {
					className: "text-text-primary text-xs",
					children: o.text
				}), /* @__PURE__ */ r("p", {
					className: "text-2xs text-text-tertiary mt-0.5",
					children: o.time
				})]
			})]
		}, o.id))
	});
}
//#endregion
export { a as Timeline };
