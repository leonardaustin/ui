import { cn as e } from "../../lib/cn.js";
import { isTone as t, toneClasses as n } from "../../lib/tones.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/MetricCard.tsx
var a = {
	positive: "success",
	negative: "danger",
	neutral: "neutral"
};
function o({ label: o, value: s, sub: c, trend: l, bar: u, icon: d, iconColor: f, className: p, ref: m, ...h }) {
	let g = l && a[l.tone], _ = n(t(g) ? g : "neutral").text;
	return /* @__PURE__ */ i("div", {
		...h,
		ref: m,
		className: e("ui-glass bg-bg-card border-border relative overflow-hidden rounded-md border p-3", p),
		children: [
			d && /* @__PURE__ */ r(d, { className: e("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", f) }),
			/* @__PURE__ */ r("p", {
				className: "text-2xs-f text-text-tertiary font-label mb-1 font-medium tracking-wider uppercase",
				children: o
			}),
			/* @__PURE__ */ r("p", {
				className: "text-text-primary font-data text-xl font-bold tabular-nums",
				children: s
			}),
			c && /* @__PURE__ */ r("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: c
			}),
			l && /* @__PURE__ */ i("p", {
				className: "text-2xs font-label mt-1 flex items-center gap-1",
				children: [/* @__PURE__ */ r("span", {
					className: e("font-medium tabular-nums", _),
					children: l.value
				}), /* @__PURE__ */ r("span", {
					className: "text-text-tertiary",
					children: l.label
				})]
			}),
			u !== void 0 && /* @__PURE__ */ r("div", {
				className: "bg-bg-tertiary mt-2 h-[3px] overflow-hidden rounded-md",
				children: /* @__PURE__ */ r("div", {
					className: "bg-accent h-full rounded-md transition-all duration-[250ms] ease-out",
					style: { width: `${Math.min(100, Math.max(0, u))}%` }
				})
			})
		]
	});
}
//#endregion
export { o as MetricCard };
