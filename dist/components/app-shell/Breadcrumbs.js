import { cn as e } from "../../lib/cn.js";
import { handleAppShellNavigate as t } from "./navigation.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { ChevronRight as i } from "lucide-react";
//#region src/components/app-shell/Breadcrumbs.tsx
function a(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function o({ homeLabel: o = "Dashboard", labels: s = {}, parents: c = {}, currentPath: l = "/", onNavigate: u, className: d, ref: f, ...p }) {
	let m = l.split("?")[0].split("/").filter(Boolean), h = [{
		label: o,
		path: "/"
	}, ...m.map((e, t) => {
		let n = m[t - 1];
		return {
			label: s[e] || c[n] || a(e),
			path: "/" + m.slice(0, t + 1).join("/")
		};
	})];
	return /* @__PURE__ */ n("nav", {
		ref: f,
		...p,
		"aria-label": "Breadcrumb",
		className: e("font-navigation flex items-center gap-1 text-xs", d),
		children: /* @__PURE__ */ n("ol", {
			className: "flex items-center gap-1",
			children: h.map((a, o) => {
				let s = o === h.length - 1;
				return /* @__PURE__ */ r("li", {
					className: "flex items-center gap-1",
					children: [o > 0 && /* @__PURE__ */ n(i, { className: "text-text-tertiary h-3 w-3" }), s ? /* @__PURE__ */ n("span", {
						className: "text-text-primary font-medium",
						children: a.label
					}) : /* @__PURE__ */ n("a", {
						href: a.path,
						onClick: (e) => t(e, a.path, u),
						className: e("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
						children: a.label
					})]
				}, a.path);
			})
		})
	});
}
//#endregion
export { o as Breadcrumbs };
