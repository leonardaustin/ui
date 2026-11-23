import { cn as e } from "../../lib/cn.js";
import { Avatar as t } from "./Avatar.js";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/ProfileHeader.tsx
function a({ name: a, subtitle: o, badge: s, meta: c, action: l, className: u, ref: d, ...f }) {
	return /* @__PURE__ */ i("div", {
		ref: d,
		...f,
		className: e("flex items-start gap-4", u),
		children: [
			/* @__PURE__ */ r(t, {
				name: a,
				size: "lg"
			}),
			/* @__PURE__ */ i("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ i("div", {
						className: "mb-1 flex items-center gap-2",
						children: [/* @__PURE__ */ r("h1", {
							className: "text-text-primary text-base font-semibold",
							children: a
						}), s]
					}),
					o && /* @__PURE__ */ r("p", {
						className: "text-text-tertiary text-xs",
						children: o
					}),
					c && c.length > 0 && /* @__PURE__ */ r("div", {
						className: "mt-2 flex flex-wrap gap-3",
						children: c.map((e) => {
							let t = e.icon, a = /* @__PURE__ */ i(n, { children: [
								/* @__PURE__ */ r(t, { className: "h-3 w-3" }),
								" ",
								e.text
							] });
							return e.href ? /* @__PURE__ */ r("a", {
								href: e.href,
								className: "text-2xs-f text-accent-fg hover:underline flex cursor-pointer items-center gap-1",
								children: a
							}, e.text) : /* @__PURE__ */ r("span", {
								className: "text-2xs-f text-text-tertiary flex items-center gap-1",
								children: a
							}, e.text);
						})
					})
				]
			}),
			l
		]
	});
}
//#endregion
export { a as ProfileHeader };
