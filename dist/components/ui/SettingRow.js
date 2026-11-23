import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/SettingRow.tsx
function r({ label: r, description: i, action: a, className: o, ref: s, ...c }) {
	return /* @__PURE__ */ n("div", {
		ref: s,
		...c,
		className: e("border-border flex items-center justify-between border-b py-3", o),
		children: [/* @__PURE__ */ n("div", {
			className: "min-w-0 flex-1 pr-4",
			children: [/* @__PURE__ */ t("p", {
				className: "text-text-primary font-label text-xs font-medium",
				children: r
			}), i && /* @__PURE__ */ t("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: i
			})]
		}), /* @__PURE__ */ t("div", {
			className: "shrink-0",
			children: a
		})]
	});
}
//#endregion
export { r as SettingRow };
