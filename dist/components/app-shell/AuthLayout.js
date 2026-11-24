import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/app-shell/AuthLayout.tsx
function r({ children: r, className: i, ref: a, ...o }) {
	return /* @__PURE__ */ n("div", {
		ref: a,
		...o,
		className: e("ui-glass-shell bg-bg-primary relative flex min-h-svh items-center justify-center p-4", i),
		children: [/* @__PURE__ */ t("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), r]
	});
}
//#endregion
export { r as AuthLayout };
