import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/ThemePreview.tsx
function r({ label: r, active: i, icon: a, preview: o, onClick: s, className: c, ref: l, ...u }) {
	return /* @__PURE__ */ n("button", {
		ref: l,
		...u,
		type: "button",
		onClick: s,
		className: e("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", i ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", c),
		children: [/* @__PURE__ */ t("div", {
			className: "border-border-strong/20 flex h-10 w-full items-center justify-center rounded border",
			style: { backgroundColor: o?.bg },
			children: /* @__PURE__ */ t("div", {
				className: "h-1.5 w-8 rounded-md",
				style: { backgroundColor: o?.fg }
			})
		}), /* @__PURE__ */ n("div", {
			className: "flex items-center gap-1.5",
			children: [a && /* @__PURE__ */ t(a, { className: "h-3 w-3" }), /* @__PURE__ */ t("span", {
				className: "text-xs font-medium",
				children: r
			})]
		})]
	});
}
//#endregion
export { r as ThemePreview };
