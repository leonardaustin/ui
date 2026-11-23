import { cn as e } from "../../lib/cn.js";
import { handleAppShellNavigate as t, isAppShellPathActive as n } from "./navigation.js";
import { DEFAULT_COMMAND_PALETTE_SHORTCUT as r, openCommandPalette as i } from "./commandPaletteEvents.js";
import { useSettings as a } from "../../hooks/useSettings.js";
import { Breadcrumbs as o } from "./Breadcrumbs.js";
import { ThemeMenu as s } from "./ThemeMenu.js";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { Menu as d, Monitor as f, Moon as p, PanelLeft as m, PanelLeftDashed as h, Search as g, Sun as _ } from "lucide-react";
//#region src/components/app-shell/TopBar.tsx
var v = [
	"dark",
	"light",
	"system"
], y = {
	dark: p,
	light: _,
	system: f
}, b = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function x({ onMobileMenuToggle: t, breadcrumbs: n, navItems: f = [], navLabel: p = "Primary", showCommandTrigger: _ = !0, commandTriggerLabel: x = "Search", commandShortcut: C = r, currentPath: w, onNavigate: T, onCommandTrigger: E, actions: D, className: O, style: k, ref: A, ...j }) {
	let { sidebarCollapsed: M, setSidebarCollapsed: N, colorMode: P, setColorMode: F } = a();
	function I() {
		F(v[(v.indexOf(P) + 1) % v.length]);
	}
	let L = y[P], R = f.length > 0, z = R || n !== !1;
	return /* @__PURE__ */ u("header", {
		ref: A,
		...j,
		className: e("ui-glass ui-glass-chrome border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3", O),
		style: {
			height: "var(--topbar-height)",
			...k
		},
		children: [/* @__PURE__ */ u("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [
				/* @__PURE__ */ l("button", {
					type: "button",
					onClick: t,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden",
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ l(d, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ l("button", {
					type: "button",
					onClick: () => N(!M),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": M ? "Expand sidebar" : "Collapse sidebar",
					children: l(M ? h : m, { className: "h-4 w-4" })
				}),
				z && /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("div", { className: "bg-border hidden h-4 w-px md:block" }), R ? /* @__PURE__ */ l(S, {
					items: f,
					label: p,
					currentPath: w,
					onNavigate: T
				}) : n === !1 ? null : /* @__PURE__ */ l(o, {
					...n,
					currentPath: w,
					onNavigate: T
				})] })
			]
		}), /* @__PURE__ */ u("div", {
			className: "flex shrink-0 items-center gap-1",
			children: [
				D,
				_ && /* @__PURE__ */ u("button", {
					type: "button",
					onClick: E ?? (() => i()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ l(g, { className: "h-3 w-3" }),
						/* @__PURE__ */ l("span", {
							className: "text-2xs",
							children: x
						}),
						/* @__PURE__ */ l("kbd", {
							className: "text-2xs font-mono opacity-60",
							children: C.label
						})
					]
				}),
				/* @__PURE__ */ l("button", {
					type: "button",
					onClick: I,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded",
					"aria-label": `Color mode: ${b[P]}. Click to cycle.`,
					title: b[P],
					children: /* @__PURE__ */ l(L, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ l(s, {})
			]
		})]
	});
}
function S({ items: r, label: i, currentPath: a, onNavigate: o }) {
	return /* @__PURE__ */ l("nav", {
		className: "hidden min-w-0 items-center gap-1 md:flex",
		"aria-label": i,
		children: r.map((r) => {
			let i = r.icon, s = n(r, a), c = r.rel ?? (r.target === "_blank" ? "noreferrer" : void 0);
			return /* @__PURE__ */ u("a", {
				href: r.href ?? r.path,
				target: r.target,
				rel: c,
				"aria-current": s ? "page" : void 0,
				onClick: (e) => {
					r.reloadDocument || t(e, r.path, o);
				},
				className: e("font-navigation flex h-6 max-w-40 items-center gap-1 rounded px-2 text-xs transition-colors duration-[100ms]", s ? "bg-accent-muted text-accent-fg" : "text-text-tertiary hover:bg-bg-hover hover:text-text-primary"),
				children: [
					i && /* @__PURE__ */ l(i, { className: "h-3 w-3 shrink-0" }),
					/* @__PURE__ */ l("span", {
						className: "truncate",
						children: r.label
					}),
					r.badge && /* @__PURE__ */ l("span", {
						className: "shrink-0",
						children: r.badge
					})
				]
			}, `${r.label}-${r.path}`);
		})
	});
}
//#endregion
export { x as TopBar };
