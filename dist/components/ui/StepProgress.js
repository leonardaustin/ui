import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { Check as r } from "lucide-react";
//#region src/components/ui/StepProgress.tsx
function i({ steps: i, currentStep: a, className: o, ref: s, ...c }) {
	return /* @__PURE__ */ t("div", {
		ref: s,
		...c,
		className: e("flex items-center justify-between", o),
		children: i.map((o, s) => /* @__PURE__ */ n("div", {
			className: e("flex items-center", s < i.length - 1 && "flex-1"),
			children: [/* @__PURE__ */ n("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ t("div", {
						className: e("flex h-8 w-8 items-center justify-center rounded-full text-xs", s < a && "bg-accent text-text-on-accent", s === a && "border-accent text-accent-fg border-2 font-semibold", s > a && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: s < a ? /* @__PURE__ */ t(r, { className: "h-4 w-4" }) : s + 1
					}),
					/* @__PURE__ */ t("span", {
						className: e("text-2xs mt-1.5 hidden sm:block", s === a && "text-accent-fg", s < a && "text-text-primary", s > a && "text-text-tertiary"),
						children: o.label
					}),
					o.description && /* @__PURE__ */ t("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: o.description
					})
				]
			}), s < i.length - 1 && /* @__PURE__ */ t("div", { className: e("mx-2 h-0.5 flex-1", s < a ? "bg-accent" : "bg-border") })]
		}, o.label))
	});
}
//#endregion
export { i as StepProgress };
