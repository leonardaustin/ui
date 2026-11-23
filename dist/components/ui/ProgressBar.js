import { cn as e } from "../../lib/cn.js";
import { useId as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/ProgressBar.tsx
function i({ label: i, value: a, min: o = 0, max: s = 100, color: c = "accent", striped: l = !1, animated: u = !1, id: d, className: f, ref: p, ...m }) {
	let h = t(), g = d ?? h;
	if (!Number.isFinite(o) || !Number.isFinite(s) || s <= o) throw RangeError("ProgressBar requires a finite max greater than min");
	if (a !== void 0 && !Number.isFinite(a)) throw RangeError("ProgressBar value must be finite");
	let _ = a === void 0 ? void 0 : Math.min(s, Math.max(o, a));
	return /* @__PURE__ */ r("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ n("label", {
			htmlFor: g,
			className: "text-text-secondary text-xs",
			children: i
		}), /* @__PURE__ */ r("div", {
			className: "ui-progress-track",
			"data-color": c,
			"data-striped": l || void 0,
			"data-animated": u || void 0,
			"data-indeterminate": _ === void 0 || void 0,
			children: [/* @__PURE__ */ n("span", {
				"aria-hidden": "true",
				className: "ui-progress-fill",
				style: { width: _ === void 0 ? "35%" : `${(_ - o) / (s - o) * 100}%` }
			}), /* @__PURE__ */ n("progress", {
				...m,
				ref: p,
				id: g,
				className: e("ui-progress-bar", f),
				max: s - o,
				value: _ === void 0 ? void 0 : _ - o,
				"aria-valuemin": o,
				"aria-valuemax": s,
				"aria-valuenow": _,
				children: _ === void 0 ? "In progress" : `${Math.round((_ - o) / (s - o) * 100)}%`
			})]
		})]
	});
}
//#endregion
export { i as ProgressBar };
