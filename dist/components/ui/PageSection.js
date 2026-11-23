import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/PageSection.tsx
function r({ title: r, description: i, actions: a, children: o, as: s = "h2", className: c, headerClassName: l, contentClassName: u, ref: d, ...f }) {
	return /* @__PURE__ */ n("section", {
		...f,
		ref: d,
		className: e("space-y-4", c),
		children: [(r || i || a) && /* @__PURE__ */ n("div", {
			className: e("border-border flex items-end justify-between gap-3 border-b pb-2", l),
			children: [/* @__PURE__ */ n("div", {
				className: "min-w-0",
				children: [r && /* @__PURE__ */ t(s, {
					className: "text-text-primary font-heading text-xs font-semibold",
					children: r
				}), i && /* @__PURE__ */ t("p", {
					className: "text-text-secondary mt-1 text-xs",
					children: i
				})]
			}), a && /* @__PURE__ */ t("div", {
				className: "flex items-center gap-2",
				children: a
			})]
		}), /* @__PURE__ */ t("div", {
			className: u,
			children: o
		})]
	});
}
//#endregion
export { r as PageSection };
