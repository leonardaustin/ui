import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/DangerZone.tsx
function r({ title: r = "Danger Zone", description: i, children: a, className: o, ref: s, ...c }) {
	return /* @__PURE__ */ n("div", {
		ref: s,
		...c,
		className: e("border-border mt-8 border-t pt-6", o),
		children: [
			/* @__PURE__ */ t("h3", {
				className: "text-danger-fg mb-2 text-xs font-semibold",
				children: r
			}),
			i && /* @__PURE__ */ t("p", {
				className: "text-text-secondary mb-3 text-xs",
				children: i
			}),
			a
		]
	});
}
//#endregion
export { r as DangerZone };
