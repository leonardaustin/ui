import { cn as e } from "../../lib/cn.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/ListItemLink.tsx
function i({ title: i, icon: a, meta: o, trailing: s, active: c, className: l, ...u }) {
	let d = e("group hover:bg-bg-hover flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", c && "bg-accent-muted", l), f = /* @__PURE__ */ r(t, { children: [
		a != null && /* @__PURE__ */ n("span", {
			className: "shrink-0",
			children: a
		}),
		/* @__PURE__ */ r("span", {
			className: e("min-w-0 flex-1", u.as !== "button" && "truncate"),
			children: [/* @__PURE__ */ n("span", {
				className: e("text-text-primary", u.as !== "button" && "group-hover:underline"),
				children: i
			}), o != null && /* @__PURE__ */ n("span", {
				className: e("text-text-disabled text-2xs", u.as !== "button" && "ml-2"),
				children: o
			})]
		}),
		s != null && /* @__PURE__ */ n("span", {
			className: "text-text-tertiary text-2xs shrink-0",
			children: s
		})
	] });
	if (u.as === "button") {
		let { as: e, ...t } = u;
		return /* @__PURE__ */ n(e, {
			type: "button",
			...t,
			"aria-pressed": c ?? t["aria-pressed"],
			className: d,
			children: f
		});
	}
	let { as: p = "a", renderLink: m, ...h } = u, g = {
		...h,
		"aria-current": c ? "page" : h["aria-current"],
		className: d,
		children: f
	};
	return m ? m(g) : /* @__PURE__ */ n(p, { ...g });
}
//#endregion
export { i as ListItemLink };
