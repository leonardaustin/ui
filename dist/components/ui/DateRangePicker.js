import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useControlSize as n } from "../../providers/ControlSizeContext.js";
import { useControllableState as r } from "../../hooks/useControllableState.js";
import { usePopover as i } from "../../hooks/usePopover.js";
import { MONTHS_SHORT as a } from "../../lib/months.js";
import { CalendarGrid as o } from "./CalendarGrid.js";
import { useMemo as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { Calendar as d } from "lucide-react";
//#region src/components/ui/DateRangePicker.tsx
function f(e) {
	return `${a[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function p(e) {
	return e.start && e.end ? `${f(e.start)} – ${f(e.end)}` : e.start ? f(e.start) : "";
}
var m = {
	start: null,
	end: null
};
function h({ controlSize: a, label: f, value: h, defaultValue: g = m, onValueChange: _, placeholder: v = "Select date range...", ref: y, className: b, ...x }) {
	let S = n(a), [C, w] = r({
		value: h,
		defaultValue: g,
		onChange: _
	}), { open: T, show: E, close: D, rootRef: O, anchorRef: k, triggerRef: A, popupRef: j, labelId: M, popupId: N, triggerAria: P } = i({
		haspopup: "dialog",
		labelled: !!f
	}), F = s(() => t(y, O), [y, O]), I = /* @__PURE__ */ new Date(), [L, R] = c(C.start?.getFullYear() ?? I.getFullYear()), [z, B] = c(C.start?.getMonth() ?? I.getMonth()), [V, H] = c(null), [U, W] = c("start"), [G, K] = c(C.start), [q, J] = c(C.end), Y = z === 11 ? L + 1 : L, X = z === 11 ? 0 : z + 1;
	function Z() {
		if (T) {
			D("toggle");
			return;
		}
		K(C.start), J(C.end), W("start"), C.start && (R(C.start.getFullYear()), B(C.start.getMonth())), E();
	}
	function Q(e) {
		U === "start" ? (K(e), J(null), W("end")) : (G && e < G ? (J(G), K(e)) : J(e), W("start"), w({
			start: G && e < G ? e : G,
			end: G && e < G ? G : e
		}), D("select"));
	}
	function $() {
		z === 0 ? (R(L - 1), B(11)) : B(z - 1);
	}
	function ee() {
		z === 11 ? (R(L + 1), B(0)) : B(z + 1);
	}
	let te = C.start || C.end ? p(C) : "";
	return /* @__PURE__ */ u("div", {
		...x,
		ref: F,
		className: e("flex flex-col gap-1.5", b),
		children: [f && /* @__PURE__ */ l("span", {
			id: M,
			className: "ui-field-label text-xs font-medium",
			children: f
		}), /* @__PURE__ */ u("div", {
			className: "relative",
			ref: k,
			children: [
				/* @__PURE__ */ l("button", {
					type: "button",
					ref: A,
					...P,
					onClick: Z,
					"data-control-size": S,
					className: e("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: te || /* @__PURE__ */ l("span", {
						className: "text-text-placeholder",
						children: v
					})
				}),
				/* @__PURE__ */ l(d, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				T && /* @__PURE__ */ u("div", {
					ref: j,
					id: N,
					role: "dialog",
					"aria-label": "Choose date range",
					className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [/* @__PURE__ */ u("div", {
						className: "mb-2 flex items-center justify-between",
						children: [
							/* @__PURE__ */ l("button", {
								type: "button",
								onClick: $,
								"aria-label": "Previous month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ l("span", {
									className: "text-xs",
									children: "‹"
								})
							}),
							/* @__PURE__ */ l("span", {
								className: "text-text-tertiary text-2xs",
								"aria-live": "polite",
								children: U === "start" ? "Select start date" : "Select end date"
							}),
							/* @__PURE__ */ l("button", {
								type: "button",
								onClick: ee,
								"aria-label": "Next month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ l("span", {
									className: "text-xs",
									children: "›"
								})
							})
						]
					}), /* @__PURE__ */ u("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ l(o, {
							year: L,
							month: z,
							rangeStart: G,
							rangeEnd: q,
							hoverDate: U === "end" ? V : null,
							onSelect: Q,
							onMonthChange: (e, t) => {
								R(e), B(t);
							},
							onHover: H
						}), /* @__PURE__ */ l(o, {
							year: Y,
							month: X,
							rangeStart: G,
							rangeEnd: q,
							hoverDate: U === "end" ? V : null,
							onSelect: Q,
							onMonthChange: (e, t) => {
								t === 0 ? (R(e - 1), B(11)) : (R(e), B(t - 1));
							},
							onHover: H
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { h as DateRangePicker };
