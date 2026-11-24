import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { Inbox as r } from "lucide-react";
//#region src/components/ui/EmptyState.tsx
function i({ icon: i, title: a, description: o, action: s, className: c, ref: l, ...u }) {
	return /* @__PURE__ */ n("div", {
		...u,
		ref: l,
		className: e("flex flex-col items-center justify-center px-4 py-12", c),
		children: [
			/* @__PURE__ */ t("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: i || /* @__PURE__ */ t(r, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ t("p", {
				className: "text-text-primary mb-1 text-sm font-medium",
				children: a
			}),
			o && /* @__PURE__ */ t("p", {
				className: "text-text-secondary max-w-[300px] text-center text-xs",
				children: o
			}),
			s && /* @__PURE__ */ t("div", {
				className: "mt-4",
				children: s
			})
		]
	});
}
//#endregion
export { i as EmptyState };
