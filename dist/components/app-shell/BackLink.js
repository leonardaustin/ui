import { cn as e } from "../../lib/cn.js";
import { handleAppShellNavigate as t } from "./navigation.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
import { ArrowLeft as i } from "lucide-react";
//#region src/components/app-shell/BackLink.tsx
function a({ to: a, children: o, onNavigate: s, className: c, onClick: l, ref: u, ...d }) {
	return /* @__PURE__ */ r("a", {
		ref: u,
		...d,
		href: a,
		onClick: (e) => {
			l?.(e), !e.defaultPrevented && t(e, a, s);
		},
		className: e("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", c),
		children: [/* @__PURE__ */ n(i, { className: "h-3.5 w-3.5" }), o]
	});
}
//#endregion
export { a as BackLink };
