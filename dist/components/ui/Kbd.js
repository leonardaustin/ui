import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/Kbd.tsx
function n({ children: n, className: r, ref: i, ...a }) {
	return /* @__PURE__ */ t("kbd", {
		...a,
		ref: i,
		className: e("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", r),
		children: n
	});
}
//#endregion
export { n as Kbd };
