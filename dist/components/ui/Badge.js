import { cn as e } from "../../lib/cn.js";
import { tones as t } from "../../lib/tones.js";
import "react";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/Badge.tsx
var a = "font-label inline-flex items-center rounded-md font-medium", o = {
	xs: "text-2xs gap-1 px-1.5",
	sm: "text-2xs gap-1.5 px-2 py-0.5",
	md: "text-xs gap-1.5 px-2.5 py-1"
}, s = {
	xs: "h-1.5 w-1.5",
	sm: "h-1.5 w-1.5",
	md: "h-2 w-2"
}, c = "cursor-pointer transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40", l = {
	soft: "hover:text-text-primary",
	outline: "hover:border-border-strong hover:text-text-primary"
}, u = !1;
function d() {
	let e = !1;
	try {
		e = process.env.NODE_ENV !== "production";
	} catch {}
	!e || u || (u = !0, console.warn("[Badge] `selected` needs `onClick`; without it the badge renders as a static span and `selected` is ignored."));
}
function f(u) {
	let { color: f, variant: p = "soft", size: m = "sm", dot: h, selected: g, onClick: _, disabled: v, className: y, children: b, ref: x, ...S } = u;
	g !== void 0 && !_ && d();
	let C = _ ? g : void 0, w = C !== void 0, T = t[w && !C ? "gray" : f ?? (w ? "accent" : "gray")], E = e(a, o[m], p === "outline" ? e("border", T.outline) : T.soft, C && (p === "outline" ? T.fill : "ring"), _ && c, w && !C && l[p], v && !_ && "opacity-40", y), D = /* @__PURE__ */ i(n, { children: [h && /* @__PURE__ */ r("span", { className: e(s[m], "rounded-full", T.dot) }), b] });
	return _ ? /* @__PURE__ */ r("button", {
		...S,
		ref: x,
		type: "button",
		disabled: v,
		...w && { "aria-pressed": C },
		onClick: _,
		className: E,
		children: D
	}) : /* @__PURE__ */ r("span", {
		...S,
		...v && { "aria-disabled": !0 },
		ref: x,
		className: E,
		children: D
	});
}
//#endregion
export { f as Badge };
