import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/PageHeader.tsx
function r({ title: r, subtitle: i, actions: a, className: o, eyebrow: s, headingLevel: c = 1, wrap: l = !1, ref: u, ...d }) {
	let f = `h${c}`;
	return /* @__PURE__ */ n("div", {
		...d,
		ref: u,
		className: e("flex items-center justify-between gap-3", l && "flex-wrap", o),
		children: [/* @__PURE__ */ n("div", {
			className: "min-w-0",
			children: [
				s && /* @__PURE__ */ t("p", {
					className: "text-text-tertiary text-2xs",
					children: s
				}),
				/* @__PURE__ */ t(f, {
					className: "text-text-primary font-heading text-sm font-semibold",
					children: r
				}),
				i && /* @__PURE__ */ t("p", {
					className: "text-text-tertiary text-xs",
					children: i
				})
			]
		}), a && /* @__PURE__ */ t("div", {
			className: e("flex items-center gap-2", l && "flex-wrap"),
			children: a
		})]
	});
}
//#endregion
export { r as PageHeader };
