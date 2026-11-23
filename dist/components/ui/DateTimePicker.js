import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { clamp as n } from "../../lib/math.js";
import { useControlSize as r } from "../../providers/ControlSizeContext.js";
import { useControllableState as i } from "../../hooks/useControllableState.js";
import { usePopover as a } from "../../hooks/usePopover.js";
import { calendarDateFromParts as o, calendarDateParts as s } from "../../lib/calendar.js";
import { MONTHS_SHORT as c } from "../../lib/months.js";
import { CalendarGrid as l } from "./CalendarGrid.js";
import { useId as u, useMemo as d, useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
import { Calendar as h } from "lucide-react";
//#region src/components/ui/DateTimePicker.tsx
function g(e) {
	return e === 0 ? {
		hour12: 12,
		period: "AM"
	} : e < 12 ? {
		hour12: e,
		period: "AM"
	} : e === 12 ? {
		hour12: 12,
		period: "PM"
	} : {
		hour12: e - 12,
		period: "PM"
	};
}
function _(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function v(e, t) {
	if (t) return new Intl.DateTimeFormat("en-GB", {
		timeZone: t,
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		timeZoneName: "short",
		hourCycle: "h23"
	}).format(e);
	let n = c[e.getMonth()], r = e.getDate(), i = e.getFullYear(), { hour12: a, period: o } = g(e.getHours());
	return `${n} ${r}, ${i} ${a}:${String(e.getMinutes()).padStart(2, "0")} ${o}`;
}
function y(e) {
	return String(e).padStart(2, "0");
}
function b({ value: e, defaultValue: t = null, onValueChange: n, ...r }) {
	let [a, o] = i({
		value: e,
		defaultValue: t,
		onChange: n
	});
	return /* @__PURE__ */ p(x, {
		...r,
		value: a,
		onValueChange: o
	}, r.timeZone ?? "browser-local");
}
function x({ controlSize: i, label: c, timeZone: b, value: x, onValueChange: S, placeholder: C = "Select date & time...", ref: w, className: T, ...E }) {
	let D = r(i), { open: O, show: k, close: A, rootRef: j, anchorRef: ee, triggerRef: te, popupRef: ne, labelId: re, popupId: ie, triggerAria: ae } = a({
		haspopup: "dialog",
		labelled: !!c
	}), oe = d(() => t(w, j), [w, j]), [M, N] = f(null), [P, F] = f(!1), [I, L] = f("reject"), R = u(), z = s(x ?? /* @__PURE__ */ new Date(), b), B = x ? g(s(x, b).hour) : {
		hour12: 12,
		period: "PM"
	}, [V, H] = f(z.year), [U, W] = f(z.month - 1), [G, K] = f(String(B.hour12)), [q, J] = f(x ? y(s(x, b).minute) : "00"), [Y, X] = f(B.period), [Z, Q] = f(x);
	function se(e) {
		Q(e);
	}
	function ce(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		K(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (K(String(n - 12)), X("PM")) : n === 0 && (K("12"), X("AM"));
	}
	function le() {
		if (!Z) return;
		let e = n(parseInt(G, 10) || 12, 1, 12), t = n(parseInt(q, 10) || 0, 0, 59), r = _(e, Y), i = {
			...s(Z, b),
			hour: r,
			minute: t,
			second: 0,
			millisecond: 0
		}, a = x ? s(x, b) : null, c;
		try {
			c = I === "reject" && x && a && [
				"year",
				"month",
				"day",
				"hour",
				"minute"
			].every((e) => a[e] === i[e]) ? new Date(x) : o(i, b, I);
			let e = s(c, b);
			if (e.hour !== r || e.minute !== t || e.day !== i.day) throw RangeError("This time does not exist in the selected timezone");
		} catch (e) {
			let t = e instanceof Error ? e.message : "Invalid date and time";
			N(t), F(t.includes("twice"));
			return;
		}
		N(null), S(c), A("select");
	}
	function $() {
		if (O) {
			A("toggle");
			return;
		}
		if (x) {
			H(s(x, b).year), W(s(x, b).month - 1), Q(x);
			let e = g(s(x, b).hour);
			K(String(e.hour12)), X(e.period), J(y(s(x, b).minute));
		}
		N(null);
		let e = !1;
		if (x && b) try {
			o(s(x, b), b, "reject");
		} catch (t) {
			e = t instanceof Error && t.message.includes("twice");
		}
		F(e), L("reject"), k();
	}
	return /* @__PURE__ */ m("div", {
		...E,
		ref: oe,
		className: e("flex flex-col gap-1.5", T),
		children: [c && /* @__PURE__ */ p("span", {
			id: re,
			className: "ui-field-label text-xs font-medium",
			children: c
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			ref: ee,
			children: [
				/* @__PURE__ */ p("button", {
					type: "button",
					ref: te,
					...ae,
					onClick: $,
					"data-control-size": D,
					className: e("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: x ? v(x, b) : /* @__PURE__ */ p("span", {
						className: "text-text-placeholder",
						children: C
					})
				}),
				/* @__PURE__ */ p(h, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				O && /* @__PURE__ */ m("div", {
					ref: ne,
					id: ie,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [
						/* @__PURE__ */ p(l, {
							timeZone: b,
							year: V,
							month: U,
							selected: Z,
							onSelect: se,
							onMonthChange: (e, t) => {
								H(e), W(t);
							}
						}),
						b && /* @__PURE__ */ p("p", {
							className: "text-text-tertiary text-2xs",
							children: b
						}),
						M && /* @__PURE__ */ p("p", {
							id: R,
							role: "alert",
							className: "text-danger-fg text-xs",
							children: M
						}),
						P && /* @__PURE__ */ m("select", {
							"aria-label": "Repeated time occurrence",
							value: I,
							onChange: (e) => L(e.target.value),
							className: "bg-bg-secondary text-text-primary border-border rounded-md border text-xs",
							children: [
								/* @__PURE__ */ p("option", {
									value: "reject",
									children: M ? "Choose an occurrence" : "Keep current occurrence"
								}),
								/* @__PURE__ */ p("option", {
									value: "earlier",
									children: "First occurrence (earlier instant)"
								}),
								/* @__PURE__ */ p("option", {
									value: "later",
									children: "Second occurrence (later instant)"
								})
							]
						}),
						/* @__PURE__ */ m("div", {
							className: "border-border mt-3 flex items-center gap-2 border-t pt-3",
							children: [
								/* @__PURE__ */ p("span", {
									className: "text-text-secondary text-2xs font-medium",
									children: "Time"
								}),
								/* @__PURE__ */ m("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ p("input", {
											type: "text",
											inputMode: "numeric",
											maxLength: 2,
											value: G,
											onChange: (e) => ce(e.target.value),
											"aria-label": "Hour",
											"aria-invalid": !!M || void 0,
											"aria-describedby": M ? R : void 0,
											className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
										}),
										/* @__PURE__ */ p("span", {
											className: "text-text-tertiary text-xs",
											children: ":"
										}),
										/* @__PURE__ */ p("input", {
											type: "text",
											inputMode: "numeric",
											maxLength: 2,
											value: q,
											onChange: (e) => J(e.target.value.replace(/\D/g, "").slice(0, 2)),
											"aria-label": "Minute",
											"aria-invalid": !!M || void 0,
											"aria-describedby": M ? R : void 0,
											className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
										})
									]
								}),
								/* @__PURE__ */ m("div", {
									className: "border-border inline-flex overflow-hidden rounded-md border",
									role: "group",
									"aria-label": "Time period",
									children: [/* @__PURE__ */ p("button", {
										type: "button",
										onClick: () => X("AM"),
										"aria-pressed": Y === "AM",
										className: e("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", Y === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "AM"
									}), /* @__PURE__ */ p("button", {
										type: "button",
										onClick: () => X("PM"),
										"aria-pressed": Y === "PM",
										className: e("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", Y === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "PM"
									})]
								}),
								/* @__PURE__ */ p("button", {
									type: "button",
									onClick: le,
									disabled: !Z,
									className: e("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", Z ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
									children: "Apply"
								})
							]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { b as DateTimePicker };
