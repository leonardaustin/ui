import { cn as e } from "../../lib/cn.js";
import { useControllableState as t } from "../../hooks/useControllableState.js";
import { useId as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/Slider.tsx
var a = new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"Home",
	"End",
	"PageUp",
	"PageDown"
]);
function o({ min: o, max: s, step: c = 1, value: l, defaultValue: u, onValueChange: d, onChange: f, onValueCommit: p, label: m, "aria-label": h, "aria-labelledby": g, id: _, showValue: v, className: y, ref: b, ...x }) {
	let [S, C] = t({
		value: l,
		defaultValue: u ?? o,
		onChange: d
	}), w = n(), T = _ ?? w, E = (S - o) / (s - o) * 100;
	return /* @__PURE__ */ i("div", {
		ref: b,
		...x,
		className: e("flex flex-col gap-1.5", y),
		children: [(m || v) && /* @__PURE__ */ i("div", {
			className: "flex items-center justify-between",
			children: [m && /* @__PURE__ */ r("label", {
				htmlFor: T,
				className: "ui-field-label font-label text-xs font-medium",
				children: m
			}), v && /* @__PURE__ */ r("span", {
				className: "text-text-primary font-data text-xs",
				children: S
			})]
		}), /* @__PURE__ */ r("input", {
			id: T,
			type: "range",
			"aria-label": h,
			"aria-labelledby": g,
			min: o,
			max: s,
			step: c,
			value: S,
			onChange: (e) => {
				f?.(e), C(Number(e.target.value));
			},
			onPointerUp: p ? (e) => p(Number(e.target.value)) : void 0,
			onKeyUp: p ? (e) => {
				a.has(e.key) && p(Number(e.target.value));
			} : void 0,
			className: "bg-bg-tertiary [&::-webkit-slider-thumb]:bg-accent h-1.5 w-full cursor-pointer appearance-none rounded-md [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[100ms] [&::-webkit-slider-thumb]:hover:scale-110",
			style: { background: `linear-gradient(to right, var(--accent) ${E}%, var(--bg-tertiary) ${E}%)` }
		})]
	});
}
//#endregion
export { o as Slider };
