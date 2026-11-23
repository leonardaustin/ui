import { cn as e } from "../../lib/cn.js";
import { handleAppShellNavigate as t, isAppShellPathActive as n } from "./navigation.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/app-shell/BottomNav.tsx
function a({ items: a, currentPath: o, onNavigate: s, className: c, style: l, ref: u, ...d }) {
	return a.length === 0 ? null : /* @__PURE__ */ r("nav", {
		ref: u,
		...d,
		className: e("ui-glass ui-glass-chrome bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", c),
		style: {
			height: "var(--bottomnav-height)",
			...l
		},
		children: /* @__PURE__ */ r("ul", {
			className: "flex h-full items-center justify-around",
			children: a.map((a) => {
				let c = n(a, o);
				return /* @__PURE__ */ r("li", { children: /* @__PURE__ */ i("a", {
					href: a.path,
					onClick: (e) => t(e, a.path, s),
					"aria-current": c ? "page" : void 0,
					"aria-label": a.shortLabel && a.shortLabel !== a.label ? `${a.shortLabel}, ${a.label}` : void 0,
					className: e("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", c ? "text-accent-fg" : "text-text-tertiary"),
					children: [/* @__PURE__ */ r(a.icon, {
						className: "h-5 w-5",
						"aria-hidden": "true"
					}), /* @__PURE__ */ r("span", {
						className: "text-2xs",
						children: a.shortLabel ?? a.label
					})]
				}) }, a.path);
			})
		})
	});
}
//#endregion
export { a as BottomNav };
