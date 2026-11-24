import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { Button as n } from "./Button.js";
import { SelectDropdown as r } from "./SelectDropdown.js";
import { createCalendarDateMath as ee, formatTimeRange as te, isTimeGridView as ne, parseTime as i, rangesOverlap as re, resourceIdsOf as ie } from "../../lib/calendar.js";
import { CalendarContext as ae } from "./calendar/context.js";
import { AgendaView as oe } from "./calendar/AgendaView.js";
import { MonthView as se } from "./calendar/MonthView.js";
import { TimeGrid as ce } from "./calendar/TimeGrid.js";
import { TimelineView as le } from "./calendar/TimelineView.js";
import { DEFAULT_CALENDAR_LABELS as a } from "./calendar/types.js";
import { RadioPill as ue } from "./RadioPill.js";
import { useEffect as o, useId as de, useLayoutEffect as fe, useMemo as s, useRef as pe, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
import { ChevronLeft as me, ChevronRight as he, Loader2 as ge } from "lucide-react";
//#region src/components/ui/Calendar.tsx
var _e = [
	"day",
	"threeDay",
	"week",
	"month",
	"agenda"
];
function d() {
	return /* @__PURE__ */ new Date();
}
function ve(e) {
	let [t, n] = c(d);
	return o(() => {
		if (e) return;
		let t = setInterval(() => n(d()), 3e4);
		return () => clearInterval(t);
	}, [e]), e ?? t;
}
function ye(e) {
	let [t, n] = c(null);
	return o(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = new ResizeObserver((e) => {
			n(e[0]?.contentRect.width ?? null);
		});
		return r.observe(t), () => r.disconnect();
	}, [e]), t;
}
var f = /* @__PURE__ */ new Set();
function be(e) {
	let t = !1;
	try {
		t = process.env.NODE_ENV !== "production";
	} catch {}
	!t || f.has(e) || (f.add(e), console.warn(`[Calendar] ${e}`));
}
function p(e, t, n) {
	try {
		return i(t);
	} catch {
		return be(`Invalid ${e} "${t}", expected HH:mm; using the default.`), n;
	}
}
function m({ events: i = [], availability: f, resources: m = [], view: xe, defaultView: Se = "week", onViewChange: Ce, views: h = _e, date: we, defaultDate: Te, onDateChange: Ee, onRangeChange: De, weekStartsOn: g = 1, workWeekDays: Oe, agendaDays: ke = 7, slotMinTime: Ae = "07:00", slotMaxTime: _ = "20:00", slotDuration: je = 15, slotLabelInterval: Me = 60, sharedTimeAxis: v = !1, hourHeight: Ne = 48, timelineHourWidth: Pe = 96, resourceMinWidth: Fe = 120, scrollToTime: y, scrollAlign: Ie = "start", now: Le, nowIndicator: Re = !0, editLayer: b = "events", readOnly: x = !1, selectable: ze, clickCreateDuration: Be = 30, shadeOutsideAvailability: Ve = !0, onCreate: S, onEventClick: C, onEventChange: w, onAvailabilityClick: T, onAvailabilityChange: E, validate: He, onInvalidChange: Ue, onDateClick: We, renderEvent: Ge, monthMaxEvents: Ke, agendaShowAvailability: qe = !0, display: D, narrowView: O = "day", narrowWidth: Je = 640, locale: k = "en-GB", timeZone: A, hour12: Ye = !1, labels: j, toolbar: Xe = !0, toolbarActions: Ze, loading: Qe = !1, className: $e, "aria-label": et, ref: tt, ...nt }) {
	let M = s(() => ee(A), [A]), { addDays: rt, formatLongDate: N, formatRangeTitle: it, getVisibleDays: at, minutesOfDay: ot, shiftDate: st } = M, ct = pe(null), lt = s(() => t(ct, tt), [tt]), ut = de(), dt = ve(Le), P = ye(ct), [ft, pt] = c(Se), [mt, ht] = c(() => Te ?? d()), F = xe ?? ft, I = we ?? mt, L = (e) => {
		xe === void 0 && pt(e), Ce?.(e);
	}, R = (e) => {
		we === void 0 && ht(e), Ee?.(e);
	}, z = P !== null && P < Je && O !== !1 && ne(F) && F !== "day" && O ? O : F, B = s(() => ({
		...a,
		...j,
		views: {
			...a.views,
			...j?.views
		},
		status: {
			...a.status,
			...j?.status
		}
	}), [j]), V = s(() => ({
		weekStartsOn: g,
		workWeekDays: Oe,
		agendaDays: ke
	}), [
		g,
		Oe,
		ke
	]), gt = I.getTime(), H = s(() => at(z, new Date(gt), V), [
		z,
		gt,
		V,
		at
	]), _t = H[0], vt = rt(H[H.length - 1], 1), U = _t.getTime(), W = vt.getTime(), yt = pe(De);
	fe(() => {
		yt.current = De;
	}), o(() => {
		yt.current?.({
			start: new Date(U),
			end: new Date(W),
			view: z
		});
	}, [
		U,
		W,
		z
	]);
	let G = s(() => i.filter((e) => re(e.start.getTime(), Math.max(e.end.getTime(), e.start.getTime() + 1), U, W)), [
		i,
		U,
		W
	]), K = s(() => (f ?? []).filter((e) => re(e.start.getTime(), e.end.getTime(), U, W)), [
		f,
		U,
		W
	]), q = p("slotMinTime", Ae, 0), J = p("slotMaxTime", _, 1440);
	J <= q && be(`slotMaxTime "${_}" must be after slotMinTime "${Ae}"; showing the whole day.`);
	let Y = s(() => J > q ? {
		min: q,
		max: J
	} : {
		min: 0,
		max: 1440
	}, [q, J]), bt = Math.max(1, Math.round(je)), X;
	if (y) X = p("scrollToTime", y, Y.min);
	else {
		let e = K.filter((e) => (e.kind ?? "available") === "available").map((e) => A ? M.parts(e.start).hour * 60 + M.parts(e.start).minute : ot(e.start)).filter((e) => e >= Y.min && e < Y.max);
		e.length && (X = Math.min(...e));
	}
	let Z = s(() => new Map(m.map((e) => [e.id, e])), [m]), Q = it(z, I, {
		...V,
		locale: k
	}), xt = {
		locale: k,
		hour12: Ye,
		timeZone: A
	}, St = (e) => Z.get(ie(e)[0] ?? ""), Ct = (e) => {
		let t = ie(e).map((e) => Z.get(e)?.title).filter(Boolean);
		return t.length ? `, ${t.join(", ")}` : "";
	}, wt = (e) => e.status && e.status !== "confirmed" ? B.status[e.status] : void 0, Tt = (e) => {
		let t = He?.(e);
		return typeof t == "string" && t ? t : void 0;
	}, Et = {
		view: z,
		dates: M,
		timeZone: A,
		dayBounds: (e) => M.dayBounds(e, Y),
		locale: k,
		hour12: Ye,
		weekStartsOn: g,
		now: dt,
		nowIndicator: Re,
		labels: B,
		itemHelpId: ut,
		resources: m,
		resourceById: Z,
		step: bt,
		bounds: Y,
		hourHeight: Ne,
		slotLabelInterval: Me,
		sharedTimeAxis: v,
		timelineHourWidth: Pe,
		resourceMinWidth: Fe,
		editLayer: b,
		selectable: !x && !!S && (ze ?? !0),
		clickCreateDuration: Be,
		hasAvailability: f !== void 0,
		shadeOutsideAvailability: Ve,
		monthMaxEvents: Ke,
		agendaShowAvailability: qe,
		display: {
			time: D?.time ?? !0,
			description: D?.description ?? !0,
			status: D?.status ?? !0,
			badge: D?.badge ?? !0,
			blockLabels: D?.blockLabels ?? !0,
			availableBlocks: D?.availableBlocks ?? !0
		},
		scrollToMinute: X,
		scrollAlign: Ie,
		canEditEvent: (e) => !e.placeholder && !x && !!w && b === "events" && (e.editable ?? e.status !== "cancelled"),
		canEditBlock: (e) => !e.placeholder && !x && !!E && b === "availability" && e.editable !== !1,
		eventColor: (e) => e.color ?? St(e.resourceId)?.color ?? "accent",
		blockColor: (e) => e.color ?? St(e.resourceId)?.color ?? ((e.kind ?? "available") === "available" ? "green" : "gray"),
		statusLabel: wt,
		describeEvent: (e) => {
			let t = e.allDay ? `${N(e.start, k)}, ${B.allDay}` : `${N(e.start, k)}, ${te(e.start, e.end, xt)}`, n = wt(e);
			return [
				e.title,
				t,
				n,
				e.badge,
				e.description
			].filter(Boolean).join(", ").concat(Ct(e.resourceId));
		},
		describeBlock: (e) => [
			(e.kind ?? "available") === "available" ? B.available : B.unavailable,
			e.label,
			`${N(e.start, k)}, ${te(e.start, e.end, xt)}`
		].filter(Boolean).join(", ").concat(Ct(e.resourceId)),
		renderEvent: Ge,
		hasEventClick: !!C,
		hasBlockClick: !!T,
		clickEvent: (e) => C?.(e),
		clickBlock: (e) => T?.(e),
		check: Tt,
		commit: (e, t) => {
			let n = Tt(e);
			if (n) return Ue?.(e, n), !1;
			if (e.target === "selection") S?.({
				start: e.start,
				end: e.end,
				allDay: e.allDay,
				resourceId: e.resourceId,
				source: t
			});
			else {
				let n = {
					...e,
					source: t
				};
				delete n.target, e.target === "event" ? w?.(n) : E?.(n);
			}
			return !0;
		},
		openDay: (e) => {
			if (We) {
				We(e);
				return;
			}
			R(e), z !== "day" && z !== "timeline" && L("day");
		}
	}, Dt = h.map((e) => ({
		value: e,
		label: B.views[e]
	})), $ = et ?? Q, Ot = JSON.stringify([
		A,
		H.map((e) => e.getTime()),
		Y.min,
		Y.max,
		bt,
		m.map((e) => e.id)
	]), kt;
	return kt = z === "month" ? /* @__PURE__ */ l(se, {
		date: I,
		events: G,
		availability: K,
		label: $
	}, A) : z === "agenda" ? /* @__PURE__ */ l(oe, {
		days: H,
		events: G.filter((e) => !e.placeholder),
		availability: K.filter((e) => !e.placeholder),
		label: $
	}, A) : z === "timeline" ? /* @__PURE__ */ l(le, {
		day: H[0],
		events: G,
		availability: K,
		label: $
	}, Ot) : /* @__PURE__ */ l(ce, {
		days: H,
		events: G,
		availability: K,
		label: $
	}, Ot), /* @__PURE__ */ l(ae.Provider, {
		value: Et,
		children: /* @__PURE__ */ u("div", {
			...nt,
			ref: lt,
			"data-time-zone": A,
			"data-shared-axis": v && A && [
				"day",
				"threeDay",
				"workWeek",
				"week"
			].includes(z) ? !0 : void 0,
			role: "region",
			"aria-label": et ?? Q,
			"aria-busy": Qe || void 0,
			className: e("ui-cal relative flex h-full min-h-0 flex-col overflow-hidden", $e),
			children: [
				/* @__PURE__ */ l("span", {
					id: ut,
					className: "sr-only",
					children: B.itemHelp
				}),
				Xe && /* @__PURE__ */ u("div", {
					className: "ui-cal-noprint border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2",
					children: [/* @__PURE__ */ u("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ l(n, {
								size: "sm",
								onClick: () => R(dt),
								children: B.today
							}),
							/* @__PURE__ */ u("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ l(n, {
									variant: "icon",
									size: "sm",
									icon: me,
									"aria-label": B.previous,
									onClick: () => R(st(z, I, -1, V))
								}), /* @__PURE__ */ l(n, {
									variant: "icon",
									size: "sm",
									icon: he,
									"aria-label": B.next,
									onClick: () => R(st(z, I, 1, V))
								})]
							}),
							/* @__PURE__ */ l("h2", {
								className: "text-text-primary truncate text-sm font-semibold",
								"aria-live": "polite",
								children: Q
							})
						]
					}), /* @__PURE__ */ u("div", {
						className: "flex items-center gap-1.5",
						children: [Ze, h.length > 1 && (P === null || P >= h.length * 80 + 420 ? /* @__PURE__ */ l(ue, {
							"aria-label": B.view,
							options: Dt,
							value: F,
							onValueChange: L
						}) : /* @__PURE__ */ l(r, {
							className: "w-28",
							size: "sm",
							options: Dt,
							value: F,
							onValueChange: (e) => L(e)
						}))]
					})]
				}),
				kt,
				Qe && /* @__PURE__ */ u("div", {
					className: "ui-cal-loading",
					role: "status",
					children: [/* @__PURE__ */ l(ge, { className: "text-accent h-6 w-6 animate-spin" }), /* @__PURE__ */ l("span", {
						className: "sr-only",
						children: B.loading
					})]
				})
			]
		})
	});
}
//#endregion
export { m as Calendar };
