import { cn as e } from "../../lib/cn.js";
import { BottomNav as t } from "./BottomNav.js";
import { CommandPalette as n } from "./CommandPalette.js";
import { MobileDrawer as r } from "./MobileDrawer.js";
import { Sidebar as i } from "./Sidebar.js";
import { TopBar as a } from "./TopBar.js";
import { useMemo as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/app-shell/AppShell.tsx
function u({ children: u, navSections: d, brand: f, accounts: p, bottomNavItems: m = [], commandItems: h, breadcrumbs: g, initialAccountIndex: _, onAccountChange: v, onSignOut: y, signOutPath: b, signOutLabel: x, settingsPath: S, settingsLabel: C, onOpenSettings: w, showCommandPalette: T = !0, showCommandTrigger: E = !0, commandTriggerLabel: D, commandShortcut: O, sidebarHeaderActions: k, topBarActions: A, topBarNavItems: j, topBarNavLabel: M, currentPath: N, onNavigate: P, mainClassName: F, className: I, ref: L, ...R }) {
	let [z, B] = s(!1), V = o(() => d.flatMap((e) => e.items), [d]), H = h ?? V;
	return /* @__PURE__ */ l("div", {
		ref: L,
		...R,
		className: e("ui-glass-shell bg-bg-primary flex h-svh overflow-hidden", I),
		children: [
			/* @__PURE__ */ c("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ c(i, {
				navSections: d,
				brand: f,
				accounts: p,
				initialAccountIndex: _,
				onAccountChange: v,
				onSignOut: y,
				signOutPath: b,
				signOutLabel: x,
				settingsPath: S,
				settingsLabel: C,
				onOpenSettings: w,
				currentPath: N,
				onNavigate: P,
				headerActions: k
			}),
			/* @__PURE__ */ l("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ c(a, {
					onMobileMenuToggle: () => B(!0),
					breadcrumbs: g,
					showCommandTrigger: T && E,
					commandTriggerLabel: D,
					commandShortcut: O,
					actions: A,
					navItems: j,
					navLabel: M,
					currentPath: N,
					onNavigate: P
				}), /* @__PURE__ */ c("main", {
					id: "main-content",
					className: e("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", F),
					children: u
				})]
			}),
			/* @__PURE__ */ c(t, {
				items: m,
				currentPath: N,
				onNavigate: P
			}),
			/* @__PURE__ */ c(r, {
				open: z,
				onClose: () => B(!1),
				items: V,
				topBarNavItems: j,
				topBarNavLabel: M,
				brand: f,
				currentPath: N,
				onNavigate: P,
				headerActions: k
			}),
			T && H.length > 0 && /* @__PURE__ */ c(n, {
				items: H,
				shortcut: O,
				onNavigate: P
			})
		]
	});
}
//#endregion
export { u as AppShell };
