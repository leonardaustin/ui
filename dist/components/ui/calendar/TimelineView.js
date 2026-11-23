import { cn as e } from "../../../lib/cn.js";
import { formatHourLabel as t, formatTime as n, formatTimeOfDay as r, matchesResource as i, packLanes as a, subtractIntervals as o } from "../../../lib/calendar.js";
import { useCalendarContext as s } from "./context.js";
import { BlockBox as c, EventBox as l, Ghost as u } from "./items.js";
import { useGridInteraction as ee } from "./useGridInteraction.js";
import { useEffect as d, useId as te, useMemo as f, useRef as p, useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
import { ChevronDown as ne, ChevronRight as re } from "lucide-react";
//#region src/components/ui/calendar/TimelineView.tsx
var _ = 34, v = 4, y = 28;
function b(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return !a || a.endMinute <= n || a.startMinute >= r ? null : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	};
}
function x({ day: x, events: S, availability: C, label: w }) {
	let T = s(), { daySegment: E, isSameDay: ie, minutesOfDay: ae } = T.dates, D = T.dayBounds(x), O = p(null), k = T.resources.length === 0 && S.length === 0 && C.length === 0, [A, j] = m(0);
	d(() => {
		let e = O.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(() => {
			let t = e.querySelector(".ui-cal-row-head");
			j(Math.max(0, e.clientWidth - (t?.offsetWidth ?? 0)));
		});
		return t.observe(e), () => t.disconnect();
	}, [k]);
	let M = (D.max - D.min) / 60, N = Math.max(T.timelineHourWidth, A / M), P = N / 60, F = (D.max - D.min) * P, I = te(), [L, oe] = m(/* @__PURE__ */ new Set()), R = f(() => {
		let e = [], t = T.resources.length ? [...T.resources] : [{
			id: "",
			title: ""
		}];
		for (let n of t) {
			let t = e.find((e) => e.name === n.group);
			t || (t = {
				name: n.group,
				resources: []
			}, e.push(t)), t.resources.push(n);
		}
		return e;
	}, [T.resources]), z = f(() => R.flatMap((e) => e.name !== void 0 && L.has(e.name) ? [] : e.resources.map((e) => ({
		key: e.id,
		day: x,
		resourceId: e.id || void 0
	}))), [
		R,
		L,
		x
	]), B = ee({
		axis: "x",
		columns: z,
		pxPerMinute: P,
		scrollRef: O,
		events: f(() => new Map(S.map((e) => [e.id, e])), [S]),
		blocks: f(() => new Map(C.map((e) => [e.id, e])), [C]),
		initialColumn: 0
	}), { drag: V, cursor: H } = B, U = T.editLayer === "availability", W = f(() => {
		let e = y / P;
		return z.map((t) => {
			let n = S.filter((e) => i(e.resourceId, t.resourceId, { emptyMatchesAll: !1 })).map((e) => b(e, x, D.min, D.max, E)).filter((e) => e !== null), r = a(n.map((t) => ({
				id: t.item.id,
				start: t.start,
				end: Math.max(t.end, t.start + e)
			}))), s = C.filter((e) => i(e.resourceId, t.resourceId, { emptyMatchesAll: !0 })).map((e) => b(e, x, D.min, D.max, E)).filter((e) => e !== null), c = U ? a(s.map((t) => ({
				id: t.item.id,
				start: t.start,
				end: Math.max(t.end, t.start + e)
			}))) : null, l = Math.max(1, r.count, c?.count ?? 0);
			return {
				placed: n,
				lanes: r,
				blocks: s,
				blockLanes: c,
				outside: T.hasAvailability && T.shadeOutsideAvailability ? o(D.min, D.max, s.map((e) => [e.start, e.end])) : [],
				laneCount: l
			};
		});
	}, [
		z,
		S,
		C,
		x,
		D.min,
		D.max,
		P,
		U,
		T.hasAvailability,
		T.shadeOutsideAvailability,
		E
	]), G = p(!1), K = T.timeZone && T.scrollToMinute !== void 0 ? T.dates.minutesOfDay(T.dates.wallDateAtMinutes(x, T.scrollToMinute)) : T.scrollToMinute, q = T.scrollAlign;
	d(() => {
		let e = O.current;
		if (!e || G.current) return;
		G.current = !0;
		let t = e.querySelector(".ui-cal-row-head")?.offsetWidth ?? 0, n = q === "center" ? (e.clientWidth - t) / 2 : 16;
		e.scrollLeft = Math.max(0, ((K ?? 480) - D.min) * P - n);
	}, [
		K,
		q,
		D.min,
		P
	]);
	let J = [], Y = Math.max(15, T.slotLabelInterval);
	for (let e = Math.ceil(D.min / Y) * Y; e < D.max; e += Y) J.push(e);
	let X = ae(T.now), se = T.nowIndicator && ie(x, T.now) && X >= D.min && X <= D.max, Z = V?.draft, ce = Z && (Z.target === "selection" ? Z.resourceId : Z.resourceIds), le = {
		"--cal-hour": `${N}px`,
		"--cal-offset": `${-(D.min % 60 * P)}px`
	}, Q = "";
	if (H) {
		let e = z[H.column], t = e?.resourceId ? T.resourceById.get(e.resourceId) : void 0;
		Q = `${t ? `${t.title}, ` : ""}${T.timeZone ? n(T.dates.dateAtMinutes(x, H.start), T) : r(H.start)} to ${T.timeZone ? n(T.dates.dateAtMinutes(x, H.end), T) : r(H.end)}`;
	}
	function $(e) {
		oe((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	if (k) return /* @__PURE__ */ h("div", {
		className: "text-text-tertiary flex flex-1 items-center justify-center p-6 text-xs",
		children: T.labels.noResources
	});
	let ue = 0;
	return /* @__PURE__ */ h("div", {
		ref: O,
		"data-cal-drag": V?.draft.action,
		className: "ui-cal-scroll ui-cal-timeline relative min-h-0 flex-1 overflow-auto",
		children: /* @__PURE__ */ g("div", {
			style: { width: `calc(var(--cal-row-head) + ${F}px)` },
			children: [/* @__PURE__ */ g("div", {
				className: "ui-cal-head border-border flex border-b",
				children: [/* @__PURE__ */ h("div", { className: "ui-cal-row-head ui-cal-corner-x" }), /* @__PURE__ */ h("div", {
					className: "relative h-7",
					style: { width: F },
					"aria-hidden": "true",
					children: J.map((e) => /* @__PURE__ */ h("span", {
						className: "text-text-tertiary font-mono absolute top-1.5 text-2xs",
						style: { left: (e - D.min) * P + 4 },
						children: T.timeZone ? n(T.dates.dateAtMinutes(x, e), T) : t(e, T)
					}, e))
				})]
			}), /* @__PURE__ */ g("div", {
				role: "group",
				"aria-roledescription": "timeline",
				"aria-label": w,
				"aria-describedby": I,
				tabIndex: 0,
				className: "ui-cal-surface select-none focus-visible:outline-none",
				onPointerDown: B.onPointerDown,
				onFocus: B.onGridFocus,
				onBlur: B.onGridBlur,
				onKeyDown: B.onGridKeyDown,
				children: [
					/* @__PURE__ */ h("span", {
						id: I,
						className: "sr-only",
						children: T.labels.gridHelp
					}),
					/* @__PURE__ */ h("span", {
						className: "sr-only",
						"aria-live": "polite",
						children: Q
					}),
					R.map((t) => {
						let n = t.name !== void 0 && L.has(t.name);
						return /* @__PURE__ */ g("div", { children: [t.name !== void 0 && /* @__PURE__ */ h("div", {
							className: "bg-bg-pinned border-border flex border-b",
							children: /* @__PURE__ */ g("button", {
								type: "button",
								className: "ui-cal-group text-text-secondary hover:text-text-primary flex cursor-pointer items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase transition-colors duration-[100ms]",
								"aria-expanded": !n,
								onClick: () => $(t.name),
								children: [
									h(n ? re : ne, { className: "h-3 w-3" }),
									t.name,
									/* @__PURE__ */ h("span", {
										className: "text-text-tertiary font-normal",
										children: t.resources.length
									})
								]
							})
						}), !n && t.resources.map((t) => {
							let n = ue++, r = W[n], a = z[n];
							if (!r || !a) return null;
							let o = r.laneCount * _ + v * 2;
							return /* @__PURE__ */ g("div", {
								className: "border-border flex border-b",
								children: [/* @__PURE__ */ g("div", {
									className: "ui-cal-row-head flex items-center gap-1.5 px-2",
									title: t.title,
									children: [t.color && /* @__PURE__ */ h("span", {
										className: e("ui-cal-dot", `ui-cal-c-${t.color}`),
										"aria-hidden": "true"
									}), /* @__PURE__ */ g("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ h("span", {
											className: "text-text-primary block truncate text-xs font-medium",
											children: t.title
										}), t.subtitle && /* @__PURE__ */ h("span", {
											className: "text-text-tertiary block truncate text-2xs",
											children: t.subtitle
										})]
									})]
								}), /* @__PURE__ */ g("div", {
									"data-cal-col": n,
									className: "ui-cal-lines-x relative shrink-0",
									style: {
										...le,
										width: F,
										height: o
									},
									children: [
										r.outside.map(([e, t]) => /* @__PURE__ */ h("div", {
											className: "ui-cal-outside",
											"aria-hidden": "true",
											style: {
												top: 0,
												bottom: 0,
												left: (e - D.min) * P,
												width: (t - e) * P
											}
										}, `o${e}`)),
										r.blocks.map((e) => {
											let t = r.blockLanes?.lanes.get(e.item.id);
											return /* @__PURE__ */ h(c, {
												block: e.item,
												resizeEdge: "right",
												continuesAfter: e.continuesAfter,
												dragging: V?.itemId === e.item.id,
												style: {
													left: (e.start - D.min) * P,
													width: Math.max((e.end - e.start) * P, 4),
													top: t === void 0 ? 0 : v + t * _,
													height: t === void 0 ? "100%" : _ - 3
												},
												onKeyDown: (t) => B.onItemKeyDown(t, "availability", e.item.id, n),
												onClick: (t) => {
													t.detail === 0 && T.clickBlock(e.item);
												}
											}, e.item.id);
										}),
										/* @__PURE__ */ h("div", {
											className: e("absolute inset-0", U && "ui-cal-muted-layer"),
											children: r.placed.map((e) => {
												let t = r.lanes.lanes.get(e.item.id) ?? 0;
												return /* @__PURE__ */ h(l, {
													event: e.item,
													compact: !1,
													dense: !0,
													resizeEdge: "right",
													continuesBefore: e.continuesBefore,
													continuesAfter: e.continuesAfter,
													dragging: V?.itemId === e.item.id,
													style: {
														left: (e.start - D.min) * P + 1,
														width: Math.max((e.end - e.start) * P, y) - 2,
														top: v + t * _,
														height: _ - 3,
														justifyContent: "center"
													},
													onKeyDown: (t) => B.onItemKeyDown(t, "event", e.item.id, n),
													onClick: (t) => {
														t.detail === 0 && T.clickEvent(e.item);
													}
												}, e.item.id);
											})
										}),
										se && /* @__PURE__ */ h("div", {
											className: "ui-cal-now",
											"data-axis": "x",
											style: { left: (X - D.min) * P }
										}),
										Z && i(ce, a.resourceId, { emptyMatchesAll: !0 }) && (() => {
											let e = b(Z, x, D.min, D.max, E);
											return e ? /* @__PURE__ */ h(u, {
												draft: Z,
												invalid: V?.invalid,
												style: {
													left: (e.start - D.min) * P + 1,
													width: Math.max((e.end - e.start) * P - 2, y),
													top: v,
													bottom: v
												}
											}) : null;
										})(),
										H?.column === n && /* @__PURE__ */ h("div", {
											"data-cal-cursor": !0,
											className: "ui-cal-cursor",
											style: {
												top: 0,
												bottom: 0,
												left: (H.start - D.min) * P,
												width: (H.end - H.start) * P
											}
										})
									]
								})]
							}, t.id || "__all");
						})] }, t.name ?? "__ungrouped");
					})
				]
			})]
		})
	});
}
//#endregion
export { x as TimelineView };
