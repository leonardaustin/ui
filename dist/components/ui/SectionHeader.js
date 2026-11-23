import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/SectionHeader.tsx
function n({ children: n, as: r = "h2", className: i, border: a = !0, ref: o, ...s }) {
	return /* @__PURE__ */ t(r, {
		ref: o,
		...s,
		className: e("text-text-primary font-heading text-xs font-semibold", a && "border-border border-b pb-2", i),
		children: n
	});
}
//#endregion
export { n as SectionHeader };
