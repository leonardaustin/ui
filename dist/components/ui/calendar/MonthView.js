import { cn as e } from "../../../lib/cn.js";
import { usePortalContainer as t } from "../../../hooks/usePortalContainer.js";
import { useFixedPopupAt as n } from "../../../hooks/useAnchoredPopup.js";
import { useDismiss as r } from "../../../hooks/useDismiss.js";
import { formatTime as i, formatTimeRange as a, replaceResource as o } from "../../../lib/calendar.js";
import { useCalendarContext as s } from "./context.js";
import { useCallback as c, useEffect as l, useLayoutEffect as u, useMemo as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { X as ee } from "lucide-react";
import { createPortal as te } from "react-dom";
//#region src/components/ui/calendar/MonthView.tsx
var ne = 96, re = 224;
function g(e) {
	return `${e.type}:${e.value.id}`;
}
function _({ date: _, events: v, availability: y, label: ie }) {
	let b = s(), { addDays: x, daySegment: S, differenceInDays: ae, eventsOnDay: C, formatLongDate: w, fromDateKey: T, getFormatter: E, getMonthWeeks: D, isAllDayLike: oe, isSameDay: se, shiftRangeDays: ce, toDateKey: O } = b.dates, k = d(() => D(_, b.weekStartsOn), [
		_,
		b.weekStartsOn,
		D
	]), A = f(null), j = f(null), [M, N] = p(null), [P, F] = p(null), le = t(), I = f(null), [ue, L] = p(null), [R, z] = p(null), B = f(null), V = f(b);
	u(() => {
		V.current = b;
	}), l(() => {
		let e = B;
		return () => {
			e.current?.cleanup(), e.current = null;
		};
	}, []);
	let H = f(!1), [U, de] = p(null);
	l(() => {
		let e = A.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			de(e[0]?.contentRect.height ?? null);
		});
		return t.observe(e), () => t.disconnect();
	}, []);
	let W = c(() => F(null), []);
	r(P !== null, W, [j]), n(P !== null, I, j, (e, t) => {
		let n = Math.max(e.width, re);
		return {
			top: Math.max(8, e.top),
			left: Math.max(8, Math.min(e.left, t - n - 8)),
			width: n
		};
	}), l(() => {
		P && j.current?.querySelector("[data-cal-close]")?.focus();
	}, [P]);
	let G = b.editLayer === "availability", K = b.dates.parts(_).month, q = d(() => k.flat(), [k]), J = O(b.now), fe = q.find((e) => O(e) === J && b.dates.parts(e).month === K) ?? q.find((e) => b.dates.parts(e).month === K && b.dates.parts(e).day === b.dates.parts(_).day) ?? q.find((e) => b.dates.parts(e).month === K) ?? q[0], pe = M && q.some((e) => O(e) === M) ? M : O(fe), me = d(() => {
		let e = /* @__PURE__ */ new Map();
		for (let t of q) {
			let n = C(v, t).map((e) => ({
				type: "event",
				value: e
			})), r = y.filter((e) => S(e.start, e.end, t)).sort((e, t) => e.start.getTime() - t.start.getTime()), i = r.some((e) => (e.kind ?? "available") === "available"), a = G ? r.map((e) => ({
				type: "availability",
				value: e
			})) : n;
			e.set(O(t), {
				items: a,
				hasAvailable: i
			});
		}
		return e;
	}, [
		q,
		v,
		y,
		G,
		C,
		S,
		O
	]), he = E(b.locale, { weekday: "short" }), ge = b.monthMaxEvents ?? (U ? Math.max(1, Math.floor((Math.max(U / k.length, ne) - 28) / 20)) : 3);
	function Y(e) {
		let t = O(e);
		N(t), requestAnimationFrame(() => {
			A.current?.querySelector(`[data-cal-date="${t}"]`)?.focus();
		});
	}
	function _e(e, t) {
		if (e.target !== e.currentTarget) return;
		let n = {
			ArrowLeft: -1,
			ArrowRight: 1,
			ArrowUp: -7,
			ArrowDown: 7
		};
		if (e.key in n) {
			e.preventDefault();
			let r = x(t, n[e.key]);
			q.some((e) => se(e, r)) && Y(r);
		} else if (e.key === "Home" || e.key === "End") {
			e.preventDefault();
			let n = (b.dates.weekday(t) - b.weekStartsOn + 7) % 7;
			Y(x(t, e.key === "Home" ? -n : 6 - n));
		} else (e.key === "Enter" || e.key === " ") && (e.preventDefault(), b.openDay(t));
	}
	function X(e) {
		return e.type === "event" ? b.canEditEvent(e.value) : b.canEditBlock(e.value);
	}
	function Z(e, t) {
		let n = {
			action: "move",
			...ce(e.value, t),
			resourceIds: o(e.value.resourceId, void 0, void 0)
		};
		return e.type === "event" ? {
			target: "event",
			event: e.value,
			...n
		} : {
			target: "availability",
			availability: e.value,
			...n
		};
	}
	function Q(e) {
		e.type === "event" ? b.clickEvent(e.value) : b.clickBlock(e.value);
	}
	function ve(e, t, n) {
		if (e.button !== 0 || B.current || (e.stopPropagation(), e.pointerType === "touch" || !X(t))) return;
		let r = (e) => {
			let t = B.current;
			if (!t || e.pointerId !== t.pointerId) return;
			if (!t.started) {
				if (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) < 4) return;
				t.started = !0, z(g(t.item));
			}
			let n = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-cal-date]"), r = n && A.current?.contains(n) ? n.dataset.calDate ?? null : null;
			t.overKey = r ?? void 0, L(r);
		}, i = (e) => {
			let t = B.current;
			if (!t || (B.current = null, t.cleanup(), L(null), z(null), t.started && (H.current = !0, setTimeout(() => {
				H.current = !1;
			}, 0)), !e || !t.started || !t.overKey || t.overKey === t.originKey)) return;
			let n = ae(T(t.overKey), T(t.originKey));
			V.current.commit(Z(t.item, n), "pointer");
		}, a = (e) => {
			e.pointerId === B.current?.pointerId && i(!0);
		}, o = (e) => {
			e.pointerId === B.current?.pointerId && i(!1);
		}, s = (e) => {
			e.key === "Escape" && i(!1);
		};
		window.addEventListener("pointermove", r), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", o), window.addEventListener("keydown", s), B.current = {
			item: t,
			originKey: n,
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			started: !1,
			cleanup: () => {
				window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", o), window.removeEventListener("keydown", s);
			}
		};
	}
	function ye(e) {
		H.current || Q(e);
	}
	function be(e, t) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), e.stopPropagation(), Q(t);
			return;
		}
		if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
			if (e.preventDefault(), e.stopPropagation(), !X(t)) return;
			b.commit(Z(t, e.key === "ArrowLeft" ? -1 : 1), "keyboard");
		}
	}
	function xe(e, t) {
		e.target !== e.currentTarget || !b.selectable || b.commit({
			target: "selection",
			action: "create",
			start: t,
			end: x(t, 1),
			allDay: !0
		}, "pointer");
	}
	let $ = (t, n) => {
		let r = g(t), o = t.value.placeholder ? {
			"aria-hidden": !0,
			"data-placeholder": !0
		} : {
			role: "button",
			tabIndex: 0,
			onPointerDown: (e) => ve(e, t, n),
			onClick: () => ye(t),
			onKeyDown: (e) => be(e, t)
		};
		if (t.type === "availability") {
			let n = t.value;
			return /* @__PURE__ */ h("div", {
				className: e("ui-cal-chip", `ui-cal-c-${b.blockColor(n)}`),
				"data-all-day": !0,
				"data-dragging": R === r || void 0,
				"aria-label": n.placeholder ? void 0 : b.describeBlock(n),
				...o,
				children: [b.display.time && /* @__PURE__ */ m("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: a(n.start, n.end, b)
				}), b.display.blockLabels && /* @__PURE__ */ m("span", {
					className: "ui-cal-title",
					children: n.label ?? ((n.kind ?? "available") === "available" ? b.labels.available : b.labels.unavailable)
				})]
			}, r);
		}
		let s = t.value, c = oe(s), l = b.statusLabel(s);
		return /* @__PURE__ */ h("div", {
			className: e("ui-cal-chip", `ui-cal-c-${b.eventColor(s)}`),
			"data-all-day": c || void 0,
			"data-status": s.status ?? "confirmed",
			"data-dragging": R === r || void 0,
			"aria-label": s.placeholder ? void 0 : b.describeEvent(s),
			title: l ? `${s.title} (${l})` : s.title,
			...o,
			children: [
				!c && /* @__PURE__ */ m("span", {
					className: "ui-cal-dot",
					"aria-hidden": "true"
				}),
				!c && b.display.time && /* @__PURE__ */ m("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: i(s.start, b)
				}),
				/* @__PURE__ */ m("span", {
					className: "ui-cal-title font-medium",
					children: s.title
				})
			]
		}, r);
	};
	return /* @__PURE__ */ h("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ m("div", {
			className: "border-border grid grid-cols-7 border-b",
			"aria-hidden": "true",
			children: k[0].map((e) => /* @__PURE__ */ m("div", {
				className: "text-text-tertiary py-1.5 text-center text-2xs font-medium uppercase",
				children: he.format(e)
			}, b.dates.weekday(e)))
		}), /* @__PURE__ */ m("div", {
			ref: A,
			role: "grid",
			"aria-label": ie,
			"data-cal-drag": R ? "move" : void 0,
			className: "ui-cal-scroll flex min-h-0 flex-1 flex-col overflow-y-auto",
			children: k.map((t) => /* @__PURE__ */ m("div", {
				role: "row",
				className: "grid min-h-24 flex-1 grid-cols-7",
				children: t.map((t) => {
					let n = O(t), r = me.get(n), i = r?.items ?? [], a = Math.max(1, ge), o = i.length > a, s = o ? i.slice(0, a - 1) : i, c = n === J, l = b.dates.parts(t).month !== K, u = b.hasAvailability && b.shadeOutsideAvailability && !r?.hasAvailable;
					return /* @__PURE__ */ h("div", {
						role: "gridcell",
						tabIndex: n === pe ? 0 : -1,
						"data-cal-date": n,
						"data-outside-month": l || void 0,
						"data-unavailable": u || void 0,
						"data-drop-target": ue === n || void 0,
						"aria-label": `${w(t, b.locale)}${i.length ? `, ${b.labels.eventCount(i.length)}` : ""}`,
						"aria-current": c ? "date" : void 0,
						className: "ui-cal-month-cell flex flex-col gap-0.5 p-1",
						onFocus: (e) => {
							e.target === e.currentTarget && N(n);
						},
						onKeyDown: (e) => _e(e, t),
						onClick: (e) => xe(e, t),
						children: [
							/* @__PURE__ */ m("button", {
								type: "button",
								tabIndex: -1,
								onClick: () => b.openDay(t),
								"aria-label": w(t, b.locale),
								className: e("flex h-5 min-w-5 cursor-pointer items-center justify-center self-start rounded-full px-1 text-2xs font-semibold transition-colors duration-[100ms]", c ? "bg-accent text-text-on-accent" : l ? "text-text-tertiary hover:bg-bg-hover" : "text-text-primary hover:bg-bg-hover"),
								children: b.dates.parts(t).day
							}),
							s.map((e) => $(e, n)),
							o && /* @__PURE__ */ m("button", {
								type: "button",
								className: "text-text-secondary hover:bg-bg-hover hover:text-text-primary cursor-pointer self-start rounded-md px-1 text-2xs font-medium transition-colors duration-[100ms]",
								"aria-haspopup": "dialog",
								"aria-expanded": P === n,
								onClick: (e) => {
									I.current = e.currentTarget.closest("[data-cal-date]"), F(n);
								},
								children: b.labels.more(i.length - s.length)
							}),
							P === n && te(/* @__PURE__ */ m("div", {
								ref: j,
								role: "dialog",
								"aria-label": w(t, b.locale),
								className: "ui-cal ui-cal-popover ui-glass ui-glass-popover flex flex-col gap-0.5",
								children: /* @__PURE__ */ h("div", {
									className: "ui-cal-popover-scroll",
									children: [/* @__PURE__ */ h("div", {
										className: "mb-1 flex items-center justify-between gap-2 pl-1",
										children: [/* @__PURE__ */ m("button", {
											type: "button",
											className: "text-text-primary cursor-pointer text-xs font-semibold hover:underline",
											onClick: () => b.openDay(t),
											children: w(t, b.locale)
										}), /* @__PURE__ */ m("button", {
											type: "button",
											"aria-label": b.labels.close,
											className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
											onClick: W,
											"data-cal-close": !0,
											children: /* @__PURE__ */ m(ee, { className: "h-3.5 w-3.5" })
										})]
									}), i.map((e) => $(e, n))]
								})
							}), le ?? document.body)
						]
					}, n);
				})
			}, O(t[0])))
		})]
	});
}
//#endregion
export { _ as MonthView };
