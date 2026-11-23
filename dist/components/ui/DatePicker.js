import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useControlSize as n } from "../../providers/ControlSizeContext.js";
import { useControllableState as r } from "../../hooks/useControllableState.js";
import { usePopover as i } from "../../hooks/usePopover.js";
import { calendarDateParts as a } from "../../lib/calendar.js";
import { MONTHS_SHORT as o } from "../../lib/months.js";
import { CalendarGrid as s } from "./CalendarGrid.js";
import { useMemo as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { Calendar as f } from "lucide-react";
//#region src/components/ui/DatePicker.tsx
function p(e, t) {
	let { year: n, month: r, day: i } = a(e, t);
	return `${o[r - 1]} ${i}, ${n}`;
}
function m({ controlSize: o, label: m, timeZone: h, value: g, defaultValue: _ = null, onValueChange: v, placeholder: y = "Select date...", format: b, ref: x, ...S }) {
	let C = n(o), [w, T] = r({
		value: g,
		defaultValue: _,
		onChange: v
	}), { open: E, show: D, close: O, rootRef: k, anchorRef: A, triggerRef: j, popupRef: M, labelId: N, popupId: P, triggerAria: F } = i({
		haspopup: "dialog",
		labelled: !!m
	}), I = a(w ?? /* @__PURE__ */ new Date(), h), [L, R] = l(I.year), [z, B] = l(I.month - 1);
	function V(e) {
		T(e), O("select");
	}
	function H() {
		if (E) {
			O("toggle");
			return;
		}
		w && (R(a(w, h).year), B(a(w, h).month - 1)), D();
	}
	let U = c(() => t(k, x), [k, x]);
	return /* @__PURE__ */ d("div", {
		...S,
		className: e("flex flex-col gap-1.5", S.className),
		ref: U,
		children: [m && /* @__PURE__ */ u("span", {
			id: N,
			className: "ui-field-label text-xs font-medium",
			children: m
		}), /* @__PURE__ */ d("div", {
			className: "relative",
			ref: A,
			children: [
				/* @__PURE__ */ u("button", {
					type: "button",
					ref: j,
					...F,
					onClick: H,
					"data-control-size": C,
					className: e("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: w ? b ? b(w) : p(w, h) : /* @__PURE__ */ u("span", {
						className: "text-text-placeholder",
						children: y
					})
				}),
				/* @__PURE__ */ u(f, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				E && /* @__PURE__ */ u("div", {
					ref: M,
					id: P,
					role: "dialog",
					"aria-label": "Choose date",
					className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: /* @__PURE__ */ u(s, {
						timeZone: h,
						year: L,
						month: z,
						selected: w,
						onSelect: V,
						onMonthChange: (e, t) => {
							R(e), B(t);
						}
					})
				})
			]
		})]
	});
}
//#endregion
export { m as DatePicker };
