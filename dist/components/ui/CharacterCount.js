import { cn as e } from "../../lib/cn.js";
import { useEffect as t, useState as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/CharacterCount.tsx
function a({ value: a, maxLength: o, announcementDelay: s = 1e3, className: c, ref: l, ...u }) {
	let d = o - a.length, f = Math.abs(d), p = `${f} ${f === 1 ? "character" : "characters"} ${d < 0 ? "over the limit" : "remaining"}`, [m, h] = n(p);
	return t(() => {
		let e = setTimeout(() => h(p), s);
		return () => clearTimeout(e);
	}, [p, s]), /* @__PURE__ */ i("p", {
		ref: l,
		...u,
		className: e("text-2xs", d < 0 ? "text-danger-fg" : "text-text-tertiary", c),
		children: [/* @__PURE__ */ r("span", {
			"aria-hidden": "true",
			children: p
		}), /* @__PURE__ */ r("span", {
			className: "sr-only",
			role: "status",
			"aria-live": "polite",
			"aria-atomic": "true",
			children: m
		})]
	});
}
//#endregion
export { a as CharacterCount };
