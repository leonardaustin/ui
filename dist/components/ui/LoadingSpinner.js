import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
import { Loader2 as n } from "lucide-react";
//#region src/components/ui/LoadingSpinner.tsx
var r = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function i({ className: i, size: a = "md", ref: o, ...s }) {
	return /* @__PURE__ */ t("div", {
		...s,
		ref: o,
		className: e("flex min-h-[200px] items-center justify-center", i),
		children: /* @__PURE__ */ t(n, { className: e("text-accent animate-spin", r[a]) })
	});
}
//#endregion
export { i as LoadingSpinner };
