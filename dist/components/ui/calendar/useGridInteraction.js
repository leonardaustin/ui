import { clamp as e } from "../../../lib/math.js";
import { replaceResource as t, resourceIdsOf as n, sameRange as r, snapMinutes as i } from "../../../lib/calendar.js";
import { useCalendarContext as a } from "./context.js";
import { useEffect as o, useLayoutEffect as s, useRef as c, useState as l } from "react";
//#region src/components/ui/calendar/useGridInteraction.ts
var u = 4, d = 10, f = 36;
function p(e, r, i, a, o) {
	let s = n(e.value.resourceId).length > 0, c = {
		action: r,
		start: i.start,
		end: i.end,
		resourceId: s ? o : void 0,
		previousResourceId: s ? a : void 0,
		resourceIds: t(e.value.resourceId, a, o)
	};
	return e.type === "event" ? {
		target: "event",
		event: e.value,
		...c
	} : {
		target: "availability",
		availability: e.value,
		...c
	};
}
function m(e, t) {
	return t.target === "selection" ? !1 : r(e.value, t) && (t.resourceId === void 0 || t.resourceId === t.previousResourceId);
}
function h({ axis: t, columns: n, pxPerMinute: r, scrollRef: h, events: g, blocks: _, initialColumn: v }) {
	let y = a(), { addMinutes: b, computeNudgeRange: x, dateAtMinutes: S, differenceInDays: C, shiftRangeDays: w } = y.dates, [T, E] = l(null), [D, O] = l(null), k = c(null), A = c({
		ctx: y,
		columns: n,
		axis: t,
		pxPerMinute: r
	});
	s(() => {
		A.current = {
			ctx: y,
			columns: n,
			axis: t,
			pxPerMinute: r
		};
	}), o(() => {
		let e = k;
		return () => {
			let t = e.current;
			t && (e.current = null, t.cleanup(), t.frame && cancelAnimationFrame(t.frame));
		};
	}, []);
	let { step: j } = y;
	function M(e) {
		return h.current?.querySelector(`[data-cal-col="${e}"]`) ?? null;
	}
	function N(t, n, r) {
		let { ctx: i, axis: a, pxPerMinute: o } = A.current, s = A.current.columns[Number(t.dataset.calCol)], c = s ? i.dayBounds(s.day) : i.bounds, l = t.getBoundingClientRect(), u = a === "y" ? r - l.top : n - l.left;
		return e(c.min + u / o, c.min, c.max);
	}
	function P(e, t, n) {
		let { columns: r, axis: i } = A.current, a = h.current, o = document.elementFromPoint(e, t)?.closest("[data-cal-col]");
		if (o && a?.contains(o)) return {
			index: Number(o.dataset.calCol),
			el: o
		};
		let s = M(n);
		if (!s) return null;
		let c = s.getBoundingClientRect(), l = n, u = i === "y" ? e < c.left : t < c.top, d = i === "y" ? e > c.right : t > c.bottom;
		u && (l = Math.max(0, n - 1)), d && (l = Math.min(r.length - 1, n + 1));
		let f = l === n ? s : M(l);
		return f ? {
			index: l,
			el: f
		} : {
			index: n,
			el: s
		};
	}
	function F(e) {
		let { ctx: t, columns: n } = A.current, { computeCreateRange: r, computeMoveRange: i, computeResizeEnd: a } = t.dates, { step: o } = t, s = n[e.origin];
		if (!s) return;
		let c = t.dayBounds(s.day), l;
		if (e.kind === "create") {
			let t = M(e.origin);
			if (!t) return;
			l = {
				target: "selection",
				action: "create",
				...r(s.day, e.anchorMinute, N(t, e.lastX, e.lastY), o, c),
				allDay: !1,
				resourceId: s.resourceId
			};
		} else if (e.kind === "move" && e.item) {
			let r = P(e.lastX, e.lastY, e.hover);
			if (!r) return;
			e.hover = r.index;
			let a = n[r.index], c = i(e.item.value, a.day, N(r.el, e.lastX, e.lastY), e.grabOffset, o, t.dayBounds(a.day));
			l = p(e.item, "move", c, s.resourceId, a.resourceId);
		} else if (e.kind === "resize" && e.item) {
			let t = M(e.origin);
			if (!t) return;
			let n = a(e.item.value, s.day, N(t, e.lastX, e.lastY), o, c);
			l = p(e.item, "resize", {
				start: e.item.value.start,
				end: n
			}, s.resourceId, s.resourceId);
		} else return;
		return {
			draft: l,
			invalid: t.check(l),
			itemId: e.item?.value.id
		};
	}
	function I(e) {
		let t = h.current;
		if (!t || !e.started) return;
		let n = t.getBoundingClientRect(), r = 0, i = 0;
		if (e.lastY < n.top + f ? i = -1 : e.lastY > n.bottom - f && (i = 1), e.lastX < n.left + f ? r = -1 : e.lastX > n.right - f && (r = 1), !r && !i) {
			e.frame = void 0;
			return;
		}
		t.scrollBy(r * 10, i * 10);
		let a = F(e);
		a && (e.current = a, E(a)), e.frame = requestAnimationFrame(() => I(e));
	}
	function L(t) {
		let { ctx: n, columns: r } = A.current, { dateAtMinutes: a } = n.dates, { step: o } = n, s = k.current;
		if (s && (k.current = null, s.cleanup(), s.frame && cancelAnimationFrame(s.frame), E(null), t)) {
			if (s.started) {
				let e = s.current;
				if (!e || s.item && m(s.item, e.draft)) return;
				n.commit(e.draft, "pointer");
				return;
			}
			if (!s.moved) {
				if (s.item) {
					s.item.type === "event" ? n.clickEvent(s.item.value) : n.clickBlock(s.item.value);
					return;
				}
				if (s.kind === "create") {
					let t = r[s.origin];
					if (!t) return;
					let c = n.dayBounds(t.day), l = Math.min(o, c.max - c.min), u = e(i(s.anchorMinute, o, "floor"), c.min, c.max - l), d = Math.min(u + Math.max(o, n.clickCreateDuration), c.max);
					n.commit({
						target: "selection",
						action: "create",
						start: a(t.day, u),
						end: a(t.day, d),
						allDay: !1,
						resourceId: t.resourceId
					}, "pointer");
				}
			}
		}
	}
	function R(e) {
		if (e.button !== 0 || k.current) return;
		let t = e.target;
		if (t.closest("[data-cal-ignore]")) return;
		let r = t.closest("[data-cal-col]");
		if (!r || !e.currentTarget.contains(r)) return;
		let i = Number(r.dataset.calCol), a = n[i];
		if (!a) return;
		let o, s, c = t.closest("[data-cal-item]");
		if (c) {
			let e = c.dataset.calId ?? "";
			if (c.dataset.calItem === "event") {
				let t = g.get(e);
				if (!t) return;
				o = {
					type: "event",
					value: t
				};
			} else {
				let t = _.get(e);
				if (!t) return;
				o = {
					type: "availability",
					value: t
				};
			}
			let n = o.type === "event" ? y.canEditEvent(o.value) : y.canEditBlock(o.value), r = n && !!t.closest("[data-cal-resize]");
			s = n ? r ? "resize" : "move" : "click";
		} else if (y.selectable) s = "create";
		else return;
		let l = N(r, e.clientX, e.clientY), f = o ? (S(a.day, l).getTime() - o.value.start.getTime()) / 6e4 : 0, p = (e) => {
			let t = k.current;
			if (!t || e.pointerId !== t.pointerId) return;
			t.lastX = e.clientX, t.lastY = e.clientY;
			let n = Math.hypot(e.clientX - t.startX, e.clientY - t.startY);
			if (!t.started) {
				if (t.pointerType === "touch") {
					n > d && (t.moved = !0);
					return;
				}
				if (t.kind === "click" || n < u) {
					n >= u && (t.moved = !0);
					return;
				}
				t.started = !0, h.current?.setPointerCapture?.(t.pointerId);
			}
			let r = F(t);
			r && (t.current = r, E(r)), t.frame || I(t);
		}, m = (e) => {
			e.pointerId === k.current?.pointerId && L(!0);
		}, v = (e) => {
			e.pointerId === k.current?.pointerId && L(!1);
		}, b = (e) => {
			e.key === "Escape" && (e.preventDefault(), L(!1));
		};
		window.addEventListener("pointermove", p), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", v), window.addEventListener("keydown", b), k.current = {
			pointerId: e.pointerId,
			pointerType: e.pointerType,
			startX: e.clientX,
			startY: e.clientY,
			lastX: e.clientX,
			lastY: e.clientY,
			started: !1,
			moved: !1,
			kind: s,
			item: o,
			origin: i,
			hover: i,
			anchorMinute: l,
			grabOffset: f,
			cleanup: () => {
				window.removeEventListener("pointermove", p), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", v), window.removeEventListener("keydown", b);
			}
		};
	}
	function z(e) {
		requestAnimationFrame(() => {
			h.current?.querySelector(`[data-cal-item][data-cal-id="${CSS.escape(e)}"]`)?.focus();
		});
	}
	function B(e, r, i, a) {
		let o = r === "event" ? g.get(i) : _.get(i);
		if (!o) return;
		let s = {
			type: r,
			value: o
		};
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), s.type === "event" ? y.clickEvent(s.value) : y.clickBlock(s.value);
			return;
		}
		if (!e.altKey || !e.key.startsWith("Arrow") || !(s.type === "event" ? y.canEditEvent(s.value) : y.canEditBlock(s.value))) return;
		let c = t === "y" ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"], l = t === "y" ? ["ArrowLeft", "ArrowRight"] : ["ArrowUp", "ArrowDown"], u = n[a];
		if (!u) return;
		let d = null;
		if (c.includes(e.key)) {
			let t = e.key === c[0] ? -j : j;
			if (e.shiftKey) {
				let e = b(o.end, t);
				if (e.getTime() - o.start.getTime() < j * 6e4) return;
				d = p(s, "resize", {
					start: o.start,
					end: e
				}, u.resourceId, u.resourceId);
			} else d = p(s, "move", x(o, t, y.dayBounds(o.start)), u.resourceId, u.resourceId);
		} else if (l.includes(e.key) && !e.shiftKey) {
			let t = n[a + (e.key === l[0] ? -1 : 1)];
			if (!t) return;
			d = p(s, "move", w(o, C(t.day, u.day)), u.resourceId, t.resourceId);
		}
		d && (e.preventDefault(), !m(s, d) && y.commit(d, "keyboard") && z(i));
	}
	function V(e) {
		if (e.target !== e.currentTarget || D) return;
		let t = !0;
		try {
			t = e.currentTarget.matches(":focus-visible");
		} catch {}
		t && O(H());
	}
	function H() {
		let t = n[e(v, 0, Math.max(0, n.length - 1))], r = t ? y.dayBounds(t.day) : y.bounds, a = Math.min(j, r.max - r.min), o = e(i((t && y.timeZone && y.scrollToMinute !== void 0 ? y.dates.minutesOfDay(y.dates.wallDateAtMinutes(t.day, y.scrollToMinute)) : y.scrollToMinute) ?? r.min, j, "floor"), r.min, r.max - a);
		return {
			column: e(v, 0, Math.max(0, n.length - 1)),
			start: o,
			end: Math.min(o + Math.max(j, y.clickCreateDuration), r.max)
		};
	}
	function U(e) {
		e.target === e.currentTarget && O(null);
	}
	function W() {
		requestAnimationFrame(() => {
			h.current?.querySelector("[data-cal-cursor]")?.scrollIntoView({
				block: "nearest",
				inline: "nearest"
			});
		});
	}
	function G(r) {
		if (r.target !== r.currentTarget) return;
		if (!D) {
			(r.key.startsWith("Arrow") || r.key === "Enter" || r.key === " ") && (r.preventDefault(), O(H()), W());
			return;
		}
		let i = n[D.column];
		if (!i) {
			O(null);
			return;
		}
		let a = y.dayBounds(i.day), o = t === "y" ? "ArrowUp" : "ArrowLeft", s = t === "y" ? "ArrowDown" : "ArrowRight", c = t === "y" ? "ArrowLeft" : "ArrowUp", l = t === "y" ? "ArrowRight" : "ArrowDown", u = D.end - D.start, d = null;
		switch (r.key) {
			case o:
			case s: {
				let t = r.key === o ? -j : j;
				if (r.shiftKey) {
					let n = e(D.end + t, D.start + j, a.max);
					d = {
						...D,
						end: n
					};
				} else {
					let n = e(D.start + t, a.min, a.max - u);
					d = {
						...D,
						start: n,
						end: n + u
					};
				}
				break;
			}
			case c:
			case l: {
				let t = e(D.column + (r.key === c ? -1 : 1), 0, n.length - 1), i = y.dayBounds(n[t].day), o = Math.min(u, i.max - i.min), s = e(i.min + D.start - a.min, i.min, i.max - o);
				d = {
					...D,
					column: t,
					start: s,
					end: s + o
				};
				break;
			}
			case "PageUp":
			case "PageDown": {
				let t = r.key === "PageUp" ? -60 : 60, n = e(D.start + t, a.min, a.max - u);
				d = {
					...D,
					start: n,
					end: n + u
				};
				break;
			}
			case "Home":
				d = {
					...D,
					start: a.min,
					end: a.min + u
				};
				break;
			case "End":
				d = {
					...D,
					start: a.max - u,
					end: a.max
				};
				break;
			case "Enter":
			case " ": {
				r.preventDefault();
				let e = n[D.column];
				if (!e || !y.selectable) return;
				y.commit({
					target: "selection",
					action: "create",
					start: S(e.day, D.start),
					end: S(e.day, D.end),
					allDay: !1,
					resourceId: e.resourceId
				}, "keyboard");
				return;
			}
			case "Escape":
				r.preventDefault(), O(null);
				return;
			default: return;
		}
		r.preventDefault(), O(d), W();
	}
	return {
		drag: T,
		cursor: D,
		onPointerDown: R,
		onItemKeyDown: B,
		onGridFocus: V,
		onGridBlur: U,
		onGridKeyDown: G
	};
}
//#endregion
export { h as useGridInteraction };
