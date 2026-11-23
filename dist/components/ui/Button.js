import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { Loader2 as i } from "lucide-react";
//#region src/components/ui/Button.tsx
var a = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-danger-muted text-danger-fg border border-transparent hover:bg-danger/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover",
	link: "text-accent-fg hover:underline underline-offset-2"
}, o = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, s = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, c = {
	xs: "text-2xs gap-1",
	sm: "text-xs gap-1.5",
	md: "text-xs gap-2",
	lg: "text-sm gap-2"
}, l = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, u = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, d = {
	sm: {
		xs: "px-1 sm:px-2",
		sm: "px-1.5 sm:px-2.5",
		md: "px-2 sm:px-3",
		lg: "px-2.5 sm:px-4"
	},
	md: {
		xs: "px-1 md:px-2",
		sm: "px-1.5 md:px-2.5",
		md: "px-2 md:px-3",
		lg: "px-2.5 md:px-4"
	},
	lg: {
		xs: "px-1 lg:px-2",
		sm: "px-1.5 lg:px-2.5",
		md: "px-2 lg:px-3",
		lg: "px-2.5 lg:px-4"
	}
};
function f({ variant: f = "secondary", size: p = "md", controlSize: m, loading: h, pressed: g, icon: _, hideLabel: v, className: y, children: b, disabled: x, ref: S, ...C }) {
	let w = t(m), T = f === "icon", E = f === "link", D = g ?? (C["aria-pressed"] === !0 || C["aria-pressed"] === "true"), O = v === !0 ? "sm" : v === !1 ? void 0 : v;
	return /* @__PURE__ */ r("button", {
		type: "button",
		ref: S,
		"data-control-size": w,
		"data-variant": f,
		"data-size": p,
		"data-pressed": g !== void 0 || C["aria-pressed"] !== void 0 ? String(D) : void 0,
		"data-hide-label": O && !T ? "" : void 0,
		disabled: x || h,
		className: e((!E || w === "comfortable") && "ui-sized-control", "inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", a[f], D && (f === "secondary" || f === "ghost" || T) && "text-text-primary", T ? s[p] : E ? c[p] : o[p], O && !T && !E && d[O]?.[p], y),
		...C,
		"aria-pressed": g ?? C["aria-pressed"],
		children: [
			h && /* @__PURE__ */ n(i, { className: "h-3.5 w-3.5 animate-spin" }),
			_ && !h && /* @__PURE__ */ n(_, { className: l[p] }),
			b && (O ? /* @__PURE__ */ n("span", {
				className: u[O],
				children: b
			}) : b)
		]
	});
}
//#endregion
export { f as Button };
