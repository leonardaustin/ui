import { cn as e } from "../../../lib/cn.js";
import { formatHourLabel as t, formatTime as n, formatTimeOfDay as r, layoutOverlaps as i, matchesResource as a, packLanes as o, selectCalendarTimeAxis as s, subtractIntervals as c } from "../../../lib/calendar.js";
import { useCalendarContext as l } from "./context.js";
import { BlockBox as ee, EventBox as u, Ghost as te } from "./items.js";
import { useGridInteraction as d } from "./useGridInteraction.js";
import { useEffect as ne, useId as re, useLayoutEffect as ie, useMemo as f, useRef as p, useState as ae } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/ui/calendar/TimeGrid.tsx
var g = 22, oe = 3, _ = 18, se = 36;
function v(e) {
	let t = e.querySelector(".ui-cal-head")?.offsetHeight ?? 0;
	return (e.clientHeight - t) / 2;
}
function y(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return a ? a.endMinute <= n && a.startMinute < n ? "before" : a.startMinute >= r ? "after" : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	} : null;
}
function b({ days: b, events: x, availability: S, label: ue }) {
	let C = l(), { daySegment: w, formatLongDate: de, getFormatter: fe, isAllDayLike: T, isSameDay: E, minutesOfDay: pe, toDateKey: D } = C.dates, { bounds: O, resources: k, hourHeight: me } = C, A = me / 60, j = p(null), he = re(), [M, ge] = ae(!1), N = f(() => b.flatMap((e) => k.length ? k.map((t) => ({
		key: `${D(e)}|${t.id}`,
		day: e,
		bounds: C.dates.dayBounds(e, C.bounds),
		resourceId: t.id
	})) : [{
		key: D(e),
		day: e,
		bounds: C.dates.dayBounds(e, C.bounds)
	}]), [
		b,
		k,
		D,
		C.dates,
		C.bounds
	]), _e = f(() => new Map(x.map((e) => [e.id, e])), [x]), ve = f(() => new Map(S.map((e) => [e.id, e])), [S]), ye = N.findIndex((e) => E(e.day, C.now)), P = d({
		axis: "y",
		columns: N,
		pxPerMinute: A,
		scrollRef: j,
		events: _e,
		blocks: ve,
		initialColumn: Math.max(0, ye)
	}), { drag: F, cursor: I } = P, L = C.editLayer === "availability", be = f(() => {
		let e = x.filter((e) => !T(e)), t = _ / A;
		return N.map((n) => {
			let r = n.bounds ?? C.bounds, o = 0, s = 0, l = [];
			for (let t of e) {
				if (!a(t.resourceId, n.resourceId, { emptyMatchesAll: !1 })) continue;
				let e = y(t, n.day, r.min, r.max, w);
				e === "before" ? o++ : e === "after" ? s++ : e && l.push(e);
			}
			let ee = i(l.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), t), u = [];
			for (let e of S) {
				if (!a(e.resourceId, n.resourceId, { emptyMatchesAll: !0 })) continue;
				let t = y(e, n.day, r.min, r.max, w);
				t && typeof t == "object" && u.push(t);
			}
			let te = L ? i(u.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), t) : null, d = [];
			return C.hasAvailability && C.shadeOutsideAvailability && (d = c(r.min, r.max, u.map((e) => [e.start, e.end]))), {
				placed: l,
				layout: ee,
				blocks: u,
				blockLayout: te,
				outside: d,
				earlier: o,
				later: s
			};
		});
	}, [
		N,
		x,
		S,
		A,
		L,
		C.hasAvailability,
		C.shadeOutsideAvailability,
		C.bounds,
		w,
		T
	]), R = f(() => {
		let e = [];
		for (let t of x) {
			if (!T(t)) continue;
			let n = -1;
			N.forEach((r, i) => {
				let o = w(t.start, t.end, r.day) !== null && a(t.resourceId, r.resourceId, { emptyMatchesAll: !1 });
				o && n === -1 && (n = i);
				let s = i === N.length - 1;
				if (n !== -1 && (!o || s)) {
					let r = o && s ? i + 1 : i;
					e.push({
						id: `${t.id}#${n}`,
						event: t,
						start: n,
						end: r
					}), n = -1;
				}
			});
		}
		let { lanes: t, count: n } = o(e);
		return {
			runs: e,
			lanes: t,
			count: n
		};
	}, [
		x,
		N,
		w,
		T
	]), z = M ? R.count : Math.min(R.count, oe), xe = R.runs.filter((e) => (R.lanes.get(e.id) ?? 0) >= z).length, B = p(A), Se = p(null);
	ne(() => {
		let e = j.current;
		if (!e) return;
		let t = () => {
			Se.current = (e.scrollTop + v(e)) / B.current;
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, []), ie(() => {
		let e = j.current;
		if (!e || B.current === A) return;
		B.current = A;
		let t = Se.current;
		t !== null && (e.scrollTop = Math.max(0, t * A - v(e)));
	}, [A]);
	let Ce = p(null), V = C.scrollToMinute, { dates: H, timeZone: we, now: Te } = C, Ee = C.scrollAlign;
	ne(() => {
		let e = j.current;
		if (!e || Ce.current === C.view) return;
		Ce.current = C.view;
		let t = b.find((e) => E(e, Te)) ?? b[0], n = we ? H.minutesOfDay(H.wallDateAtMinutes(t, V ?? 480)) : V ?? 480, r = H.dayBounds(t, O), i = e.querySelector(".ui-cal-head"), a = () => {
			let t = Ee === "center" ? v(e) : 8;
			e.scrollTop = Math.max(0, (n - r.min) * A - t);
		};
		if (a(), typeof ResizeObserver > "u") return;
		let o = new ResizeObserver(a);
		o.observe(e), i && o.observe(i);
		let s = !1, c = () => {
			s = !0, o.disconnect();
		}, l = [
			"wheel",
			"pointerdown",
			"touchstart",
			"keydown"
		];
		for (let t of l) e.addEventListener(t, c, {
			once: !0,
			passive: !0
		});
		return () => {
			o.disconnect();
			for (let t of l) e.removeEventListener(t, c);
			s || (Ce.current = null);
		};
	}, [
		C.view,
		V,
		Ee,
		O,
		A,
		b,
		E,
		H,
		we,
		Te
	]);
	let U = b.length > 1, W = k.length > 0, G = !!C.timeZone && C.sharedTimeAxis, K = f(() => s(N.map((e) => ({
		day: e.day,
		bounds: e.bounds ?? C.bounds
	})), C.slotLabelInterval, {
		timeZone: C.timeZone,
		locale: C.locale,
		hour12: C.hour12
	}, C.bounds, G), [
		N,
		C.slotLabelInterval,
		C.timeZone,
		C.locale,
		C.hour12,
		C.bounds,
		G
	]), q = K.reference, J = K.axes.map((e) => !!C.timeZone && (!G || !e.matchesReference)), Y = q ? fe(C.locale, { timeZoneName: "short" }).formatToParts(C.dates.dateAtMinutes(q.day, q.bounds.min)).find((e) => e.type === "timeZoneName")?.value : void 0, De = J.some(Boolean) ? Math.max(W ? C.resourceMinWidth : 0, 180) : W ? C.resourceMinWidth : 44, Oe = Math.max(...N.map((e) => (e.bounds?.max ?? O.max) - (e.bounds?.min ?? O.min))) * A, ke = {
		"--cal-hour": `${me}px`,
		"--cal-offset": `${-(O.min % 60 * A)}px`,
		height: Oe
	}, X = q?.bounds ?? O, Z = [], Q = Math.max(5, C.slotLabelInterval);
	for (let e = Math.ceil(X.min / Q) * Q; e < X.max; e += Q) e > X.min && Z.push(e);
	let Ae = fe(C.locale, { weekday: "short" }), je = pe(C.now), Me = C.nowIndicator, $ = F?.draft, Ne = $ && ($.target === "selection" ? $.resourceId : $.resourceIds), Pe = "";
	if (I) {
		let e = N[I.column];
		if (e) {
			let t = e.resourceId ? C.resourceById.get(e.resourceId) : void 0;
			Pe = `${de(e.day, C.locale)}, ${C.timeZone ? n(C.dates.dateAtMinutes(e.day, I.start), C) : r(I.start)} to ${C.timeZone ? n(C.dates.dateAtMinutes(e.day, I.end), C) : r(I.end)}${t ? `, ${t.title}` : ""}`;
		}
	}
	return /* @__PURE__ */ m("div", {
		ref: j,
		"data-cal-drag": F?.draft.action,
		className: "ui-cal-scroll relative min-h-0 flex-1 overflow-auto",
		style: C.timeZone && !q ? { "--cal-gutter": "0px" } : void 0,
		children: /* @__PURE__ */ h("div", {
			className: "flex min-h-full flex-col",
			style: { minWidth: `calc(var(--cal-gutter) + ${N.length * De}px)` },
			children: [/* @__PURE__ */ h("div", {
				className: "ui-cal-head border-border border-b",
				children: [
					U && /* @__PURE__ */ h("div", {
						className: "flex",
						children: [/* @__PURE__ */ m("div", {
							className: Y ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: Y ? C.timeZone : void 0,
							"aria-label": Y ? C.timeZone : void 0,
							children: Y
						}), b.map((e) => /* @__PURE__ */ m(ce, {
							day: e,
							weekday: Ae.format(e),
							isToday: E(e, C.now),
							grow: W ? k.length : 1,
							onOpen: () => C.openDay(e),
							bordered: W
						}, D(e)))]
					}),
					W && /* @__PURE__ */ h("div", {
						className: "flex",
						children: [/* @__PURE__ */ m("div", {
							className: Y && !U ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: !U && Y ? C.timeZone : void 0,
							"aria-label": !U && Y ? C.timeZone : void 0,
							children: U ? void 0 : Y
						}), N.map((e, t) => /* @__PURE__ */ m(le, {
							resource: C.resourceById.get(e.resourceId ?? ""),
							sub: t % k.length !== 0
						}, e.key))]
					}),
					R.count > 0 && /* @__PURE__ */ h("div", {
						className: "border-border flex border-t",
						children: [/* @__PURE__ */ h("div", {
							className: "ui-cal-corner text-text-tertiary flex flex-col items-end justify-center gap-0.5 pr-2 text-2xs",
							children: [/* @__PURE__ */ m("span", { children: C.labels.allDay }), R.count > oe && /* @__PURE__ */ m("button", {
								type: "button",
								className: "text-accent-fg cursor-pointer hover:underline",
								"aria-expanded": M,
								onClick: () => ge((e) => !e),
								children: M ? C.labels.showLess : C.labels.more(xe)
							})]
						}), /* @__PURE__ */ m("div", {
							className: "relative flex-1",
							style: { height: z * g + 4 },
							children: R.runs.map((e) => {
								let t = R.lanes.get(e.id) ?? 0;
								if (t >= z) return null;
								let n = N[e.start], r = N[e.end - 1];
								return /* @__PURE__ */ m(u, {
									event: e.event,
									compact: !0,
									continuesBefore: !!n && w(e.event.start, e.event.end, n.day)?.continuesBefore,
									continuesAfter: !!r && w(e.event.start, e.event.end, r.day)?.continuesAfter,
									style: {
										top: t * g + 2,
										height: g - 3,
										left: `calc(${e.start / N.length * 100}% + 2px)`,
										width: `calc(${(e.end - e.start) / N.length * 100}% - 4px)`,
										justifyContent: "center"
									},
									onClick: () => C.clickEvent(e.event),
									onKeyDown: (t) => {
										(t.key === "Enter" || t.key === " ") && (t.preventDefault(), C.clickEvent(e.event));
									}
								}, e.id);
							})
						})]
					})
				]
			}), /* @__PURE__ */ h("div", {
				className: "flex flex-1",
				children: [/* @__PURE__ */ h("div", {
					className: "ui-cal-gutter relative",
					style: { height: Oe },
					"aria-hidden": "true",
					children: [
						Y && !U && !W && /* @__PURE__ */ m("span", {
							className: "text-text-tertiary absolute top-0 right-2 text-2xs",
							"aria-hidden": "true",
							children: Y
						}),
						q && Z.map((e) => {
							let n = C.dates.parts(C.dates.dateAtMinutes(q.day, e));
							return /* @__PURE__ */ m("span", {
								className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
								style: { top: (e - q.bounds.min) * A },
								children: t(n.hour * 60 + n.minute, C)
							}, e);
						}),
						!C.timeZone && Z.map((e) => /* @__PURE__ */ m("span", {
							className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
							style: { top: (e - O.min) * A },
							children: t(e, C)
						}, e))
					]
				}), /* @__PURE__ */ h("div", {
					role: "group",
					"aria-roledescription": "time grid",
					"aria-label": ue,
					"aria-describedby": he,
					tabIndex: 0,
					className: "ui-cal-lines ui-cal-surface relative flex flex-1 select-none focus-visible:outline-none",
					style: ke,
					onPointerDown: P.onPointerDown,
					onFocus: P.onGridFocus,
					onBlur: P.onGridBlur,
					onKeyDown: P.onGridKeyDown,
					children: [
						/* @__PURE__ */ m("span", {
							id: he,
							className: "sr-only",
							children: C.labels.gridHelp
						}),
						/* @__PURE__ */ m("span", {
							className: "sr-only",
							"aria-live": "polite",
							children: Pe
						}),
						N.map((t, r) => {
							let i = be[r], o = t.bounds ?? C.bounds, s = J[r] ? 72 : 0, c = J[r] ? K.axes[r].minutes : [], l = E(t.day, C.now), d = W && r % k.length !== 0;
							return /* @__PURE__ */ h("div", {
								"data-cal-col": r,
								"data-today": l || void 0,
								"data-subcol": d || void 0,
								className: "ui-cal-col flex-1",
								style: {
									minWidth: De,
									height: (o.max - o.min) * A
								},
								children: [
									c.map((e) => /* @__PURE__ */ m("span", {
										className: "ui-cal-zone-label",
										style: { top: (e - o.min) * A },
										"aria-hidden": "true",
										children: n(C.dates.dateAtMinutes(t.day, e), C)
									}, `label-${e}`)),
									i.outside.map(([e, t]) => /* @__PURE__ */ m("div", {
										className: "ui-cal-outside",
										"aria-hidden": "true",
										style: {
											left: 0,
											right: 0,
											top: (e - o.min) * A,
											height: (t - e) * A
										}
									}, `o${e}`)),
									i.blocks.map((e) => {
										let t = i.blockLayout?.get(e.item.id);
										return /* @__PURE__ */ m(ee, {
											block: e.item,
											resizeEdge: "bottom",
											continuesAfter: e.continuesAfter,
											dragging: F?.itemId === e.item.id,
											style: {
												top: (e.start - o.min) * A,
												height: Math.max((e.end - e.start) * A, 4),
												left: t ? `calc(${t.column / t.columns * 100}% + ${s * (1 - t.column / t.columns) + 1}px)` : s,
												width: t ? `calc(${t.span / t.columns * 100}% - ${s * t.span / t.columns + 4}px)` : s ? `calc(100% - ${s}px)` : "100%"
											},
											onKeyDown: (t) => P.onItemKeyDown(t, "availability", e.item.id, r),
											onClick: (t) => {
												t.detail === 0 && C.clickBlock(e.item);
											}
										}, e.item.id);
									}),
									/* @__PURE__ */ m("div", {
										style: s ? { left: s } : void 0,
										className: e("absolute inset-0", L && "ui-cal-muted-layer"),
										children: i.placed.map((e) => {
											let t = i.layout.get(e.item.id), n = Math.max((e.end - e.start) * A, _);
											return /* @__PURE__ */ m(u, {
												event: e.item,
												compact: n < se,
												resizeEdge: "bottom",
												continuesBefore: e.continuesBefore,
												continuesAfter: e.continuesAfter,
												dragging: F?.itemId === e.item.id,
												style: {
													top: (e.start - o.min) * A + 1,
													height: n - 2,
													left: t ? `calc(${t.column / t.columns * 100}% + 1px)` : 1,
													width: t ? `calc(${t.span / t.columns * 100}% - 5px)` : "calc(100% - 5px)"
												},
												onKeyDown: (t) => P.onItemKeyDown(t, "event", e.item.id, r),
												onClick: (t) => {
													t.detail === 0 && C.clickEvent(e.item);
												}
											}, e.item.id);
										})
									}),
									i.earlier > 0 && /* @__PURE__ */ m("span", {
										className: "ui-cal-overflow",
										"data-edge": "top",
										"data-cal-ignore": !0,
										children: C.labels.earlier(i.earlier)
									}),
									i.later > 0 && /* @__PURE__ */ m("span", {
										className: "ui-cal-overflow",
										"data-edge": "bottom",
										"data-cal-ignore": !0,
										children: C.labels.later(i.later)
									}),
									l && Me && je >= o.min && je <= o.max && /* @__PURE__ */ m("div", {
										className: "ui-cal-now",
										"data-axis": "y",
										"data-dot": !d || void 0,
										style: { top: (je - o.min) * A }
									}),
									$ && a(Ne, t.resourceId, { emptyMatchesAll: !0 }) && (() => {
										let e = y($, t.day, o.min, o.max, w);
										return !e || typeof e != "object" ? null : /* @__PURE__ */ m(te, {
											draft: $,
											invalid: F?.invalid,
											style: {
												top: (e.start - o.min) * A + 1,
												height: Math.max((e.end - e.start) * A - 2, _),
												left: s + 1,
												right: 4
											}
										});
									})(),
									I?.column === r && /* @__PURE__ */ m("div", {
										"data-cal-cursor": !0,
										className: "ui-cal-cursor",
										style: {
											left: s,
											right: 0,
											top: (I.start - o.min) * A,
											height: (I.end - I.start) * A
										}
									})
								]
							}, t.key);
						})
					]
				})]
			})]
		})
	});
}
function ce({ day: t, weekday: n, isToday: r, grow: i, bordered: a, onOpen: o }) {
	let s = l();
	return /* @__PURE__ */ m("div", {
		className: e("flex min-w-0 items-center justify-center py-1.5", a && "border-border border-l"),
		style: { flex: `${i} 1 0` },
		children: /* @__PURE__ */ h("button", {
			type: "button",
			onClick: o,
			"aria-label": s.dates.formatLongDate(t, s.locale),
			"aria-current": r ? "date" : void 0,
			className: "hover:bg-bg-hover flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors duration-[100ms]",
			children: [/* @__PURE__ */ m("span", {
				className: e("text-2xs font-medium uppercase", r ? "text-accent-fg" : "text-text-tertiary"),
				children: n
			}), /* @__PURE__ */ m("span", {
				className: e("flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold", r ? "bg-accent text-text-on-accent" : "text-text-primary"),
				children: s.dates.parts(t).day
			})]
		})
	});
}
function le({ resource: t, sub: n }) {
	let r = l();
	return /* @__PURE__ */ h("div", {
		className: e("border-border flex min-w-0 flex-1 items-center gap-1.5 border-l px-2 py-1.5", n && "ui-cal-subhead"),
		style: { minWidth: r.resourceMinWidth },
		title: t?.title,
		children: [t?.color && /* @__PURE__ */ m("span", {
			className: e("ui-cal-dot", `ui-cal-c-${t.color}`),
			"aria-hidden": "true"
		}), /* @__PURE__ */ h("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ m("span", {
				className: "text-text-primary block truncate text-xs font-medium",
				children: t?.title
			}), t?.subtitle && /* @__PURE__ */ m("span", {
				className: "text-text-tertiary block truncate text-2xs",
				children: t.subtitle
			})]
		})]
	});
}
//#endregion
export { b as TimeGrid };
