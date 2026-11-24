import { cn as e } from "../../lib/cn.js";
import { OverlayContext as t, useOverlayEscape as n } from "../../hooks/useOverlayStack.js";
import { Button as r } from "./Button.js";
import { Badge as i } from "./Badge.js";
import { useId as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { SlidersHorizontal as u } from "lucide-react";
//#region src/components/ui/Toolbar.tsx
function d({ start: d, end: f, children: p, className: m, startClassName: h, endClassName: g, moreFilters: _, moreFiltersActiveCount: v = 0, moreFiltersOpen: y, defaultMoreFiltersOpen: b, onMoreFiltersOpenChange: x, ref: S, ...C }) {
	let w = a(), T = o(null), E = o(null), [D, O] = s(!1), k = v > 0, [A, j] = s(b ?? k), [M, N] = s(k);
	M !== k && (N(k), y === void 0 && k && j(!0));
	let P = y ?? A, F = (e) => {
		y === void 0 && j(e), x?.(e);
	}, I = n(!!_ && P && D, (e) => {
		e.defaultPrevented || !E.current?.contains(E.current.ownerDocument.activeElement) || (F(!1), T.current?.focus());
	}, E), L = /* @__PURE__ */ l("div", {
		...!_ && {
			...C,
			ref: S
		},
		className: e("flex items-center justify-between gap-3", !_ && m),
		children: [/* @__PURE__ */ c("div", {
			className: e("flex flex-1 items-center gap-3", h),
			children: d ?? p
		}), (f || _) && /* @__PURE__ */ l("div", {
			className: e("flex items-center gap-1.5", g),
			children: [f, _ && /* @__PURE__ */ l("span", {
				className: "relative inline-flex",
				children: [/* @__PURE__ */ c(r, {
					ref: T,
					size: "sm",
					icon: u,
					hideLabel: !0,
					"aria-label": v > 0 ? `More filters (${v} active)` : "More filters",
					"aria-expanded": P,
					"aria-controls": w,
					onClick: () => F(!P),
					children: "More filters"
				}), v > 0 && /* @__PURE__ */ c(i, {
					size: "xs",
					color: "accent",
					"aria-hidden": "true",
					className: "pointer-events-none absolute top-0 right-0 -translate-y-1/2",
					children: v
				})]
			})]
		})]
	});
	return _ ? /* @__PURE__ */ l("div", {
		ref: S,
		...C,
		className: e("space-y-3", m),
		children: [L, /* @__PURE__ */ c(t.Provider, {
			value: I,
			children: /* @__PURE__ */ c("div", {
				ref: E,
				id: w,
				hidden: !P,
				className: e("flex-wrap items-center gap-3", P ? "flex" : "hidden"),
				onFocus: (e) => O(e.currentTarget.contains(e.target)),
				onBlur: (e) => {
					e.currentTarget.contains(e.relatedTarget) || O(!1);
				},
				children: _
			})
		})]
	}) : L;
}
//#endregion
export { d as Toolbar };
