import { cn as e } from "../../lib/cn.js";
import { Badge as t } from "./Badge.js";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/NavTabs.tsx
function a({ items: a, activeKey: o, renderLink: s, className: c, "aria-label": l = "Sections", ...u }) {
	return /* @__PURE__ */ r("nav", {
		...u,
		"aria-label": l,
		className: e("ui-nav-tabs border-border border-b", c),
		children: /* @__PURE__ */ r("ul", {
			className: "ui-nav-tabs-list",
			children: a.map((a) => {
				let { key: c, label: l, badge: u, ...d } = a, f = {
					...d,
					"aria-current": c === o ? "page" : void 0,
					className: e("ui-nav-tab px-3 py-2 text-xs font-medium", c === o ? "text-accent-fg" : "text-text-secondary", a.className),
					children: /* @__PURE__ */ i(n, { children: [l, u !== void 0 && /* @__PURE__ */ r(t, {
						size: "xs",
						className: "bg-bg-tertiary font-inherit text-inherit",
						children: u
					})] })
				};
				return /* @__PURE__ */ r("li", { children: s ? s(f, a) : /* @__PURE__ */ r("a", { ...f }) }, c);
			})
		})
	});
}
//#endregion
export { a as NavTabs };
