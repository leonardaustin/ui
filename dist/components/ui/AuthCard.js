import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/AuthCard.tsx
function r({ title: r, subtitle: i, icon: a, children: o, footer: s, className: c, ref: l, ...u }) {
	return /* @__PURE__ */ t("div", {
		ref: l,
		...u,
		className: e("relative z-10 w-full max-w-sm", c),
		children: /* @__PURE__ */ n("div", {
			className: "bg-bg-secondary border-border rounded-lg border p-8 shadow-lg",
			children: [
				/* @__PURE__ */ n("div", {
					className: "mb-6 flex flex-col items-center",
					children: [
						a && /* @__PURE__ */ t("div", {
							className: "bg-accent-muted mb-3 flex h-12 w-12 items-center justify-center rounded-xl",
							children: /* @__PURE__ */ t(a, { className: "text-accent h-6 w-6" })
						}),
						/* @__PURE__ */ t("h1", {
							className: "text-text-primary text-lg font-semibold",
							children: r
						}),
						i && /* @__PURE__ */ t("p", {
							className: "text-text-secondary mt-1 text-xs",
							children: i
						})
					]
				}),
				o,
				s && /* @__PURE__ */ t("p", {
					className: "text-text-secondary mt-6 text-center text-xs",
					children: s
				})
			]
		})
	});
}
//#endregion
export { r as AuthCard };
