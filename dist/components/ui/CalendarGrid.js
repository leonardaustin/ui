import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { calendarDateFromParts as n, calendarDateParts as r } from "../../lib/calendar.js";
import { MONTHS_LONG as i } from "../../lib/months.js";
import { useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { ChevronLeft as l, ChevronRight as u } from "lucide-react";
//#region src/components/ui/CalendarGrid.tsx
var d = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
];
function f(e, t, n) {
	let i = r(e, n), a = r(t, n);
	return i.year === a.year && i.month === a.month && i.day === a.day;
}
function p(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function m(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function h(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function g({ year: g, month: _, timeZone: v, selected: y, rangeStart: b, rangeEnd: x, hoverDate: S, onSelect: C, onMonthChange: w, onHover: T, minDate: E, maxDate: D, className: O, ref: k, ...A }) {
	let j = m(g, _), M = h(g, _), N = /* @__PURE__ */ new Date(), P = a(null), [F, I] = o(null);
	function L() {
		return F !== null && F >= 1 && F <= j ? F : y && r(y, v).year === g && r(y, v).month - 1 === _ ? r(y, v).day : b && r(b, v).year === g && r(b, v).month - 1 === _ ? r(b, v).day : r(N, v).year === g && r(N, v).month - 1 === _ ? r(N, v).day : 1;
	}
	let R = L();
	function z(e, t) {
		let n = 0;
		switch (e.key) {
			case "ArrowRight":
				n = 1;
				break;
			case "ArrowLeft":
				n = -1;
				break;
			case "ArrowDown":
				n = 7;
				break;
			case "ArrowUp":
				n = -7;
				break;
			default: return;
		}
		e.preventDefault();
		let r = t + n;
		r >= 1 && r <= j && (I(r), (P.current?.querySelector(`[data-day="${r}"]`))?.focus());
	}
	function B() {
		_ === 0 ? w(g - 1, 11) : w(g, _ - 1);
	}
	function V() {
		_ === 11 ? w(g + 1, 0) : w(g, _ + 1);
	}
	let H = [];
	for (let e = 0; e < M; e++) H.push(null);
	for (let e = 1; e <= j; e++) H.push(e);
	return /* @__PURE__ */ c("div", {
		...A,
		className: e("w-[252px]", O),
		ref: t(P, k),
		children: [/* @__PURE__ */ c("div", {
			className: "mb-2 flex items-center justify-between",
			children: [
				/* @__PURE__ */ s("button", {
					type: "button",
					onClick: B,
					"aria-label": "Previous month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ s(l, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ c("span", {
					className: "text-text-primary text-xs font-semibold",
					"aria-live": "polite",
					children: [
						i[_],
						" ",
						g
					]
				}),
				/* @__PURE__ */ s("button", {
					type: "button",
					onClick: V,
					"aria-label": "Next month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ s(u, { className: "h-3.5 w-3.5" })
				})
			]
		}), /* @__PURE__ */ c("div", {
			className: "grid grid-cols-7 gap-0",
			children: [d.map((e) => /* @__PURE__ */ s("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), H.map((t, r) => {
				if (t === null) return /* @__PURE__ */ s("div", { className: "h-8" }, `empty-${r}`);
				let a = n({
					year: g,
					month: _ + 1,
					day: t,
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0
				}, v), o = f(a, N, v), c = y ? f(a, y, v) : !1, l = b ? f(a, b, v) : !1, u = x ? f(a, x, v) : !1, d = p(a, b ?? null, x ?? S ?? null), m = E && a < E || D && a > D;
				return /* @__PURE__ */ s("button", {
					type: "button",
					"data-day": t,
					disabled: !!m,
					tabIndex: t === R ? 0 : -1,
					"aria-label": `${i[_]} ${t}, ${g}`,
					"aria-current": o ? "date" : void 0,
					onClick: () => C(a),
					onKeyDown: (e) => z(e, t),
					onMouseEnter: () => T?.(a),
					onMouseLeave: () => T?.(null),
					className: e("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", m && "cursor-not-allowed opacity-30", !m && !c && !l && !u && !d && "hover:bg-bg-hover text-text-primary", o && !c && !l && !u && "text-accent-fg font-semibold", (c || l || u) && "bg-accent text-text-on-accent font-semibold", d && !c && !l && !u && "bg-accent-muted text-accent-fg"),
					children: t
				}, t);
			})]
		})]
	});
}
//#endregion
export { g as CalendarGrid };
