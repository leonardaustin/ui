import { cn as e } from "../../lib/cn.js";
import { Avatar as t } from "./Avatar.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/AuthorByline.tsx
function i({ name: i, meta: a, nameAppend: o, size: s = "sm", className: c, ref: l, ...u }) {
	return /* @__PURE__ */ r("div", {
		ref: l,
		...u,
		className: e("flex items-center gap-2", c),
		children: [/* @__PURE__ */ n(t, {
			name: i,
			size: "sm"
		}), /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ r("p", {
			className: e("text-text-primary font-label font-medium", s === "md" ? "text-xs" : "text-2xs"),
			children: [i, o]
		}), a && /* @__PURE__ */ n("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: a
		})] })]
	});
}
//#endregion
export { i as AuthorByline };
