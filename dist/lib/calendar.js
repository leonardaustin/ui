import { clamp as e } from "./math.js";
//#region src/lib/calendar.ts
var t = /* @__PURE__ */ new Map();
function n(e, n) {
	if (!n) return {
		year: e.getFullYear(),
		month: e.getMonth() + 1,
		day: e.getDate(),
		hour: e.getHours(),
		minute: e.getMinutes(),
		second: e.getSeconds(),
		millisecond: e.getMilliseconds()
	};
	let r = t.get(n);
	r || (r = new Intl.DateTimeFormat("en-GB-u-ca-iso8601-nu-latn", {
		timeZone: n,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}), t.set(n, r));
	let i = {};
	for (let t of r.formatToParts(e)) t.type !== "literal" && (i[t.type] = Number(t.value));
	return {
		year: i.year,
		month: i.month,
		day: i.day,
		hour: i.hour,
		minute: i.minute,
		second: i.second,
		millisecond: e.getUTCMilliseconds()
	};
}
function r(e) {
	let t = /* @__PURE__ */ new Date(0);
	return t.setUTCFullYear(e.year, e.month - 1, e.day), t.setUTCHours(e.hour, e.minute, e.second, e.millisecond), t.getTime();
}
function i(e, t, i = "compatible") {
	let a = r(e), o = new Date(a);
	if (!Object.values(e).every(Number.isInteger) || o.getUTCFullYear() !== e.year || o.getUTCMonth() + 1 !== e.month || o.getUTCDate() !== e.day || o.getUTCHours() !== e.hour || o.getUTCMinutes() !== e.minute || o.getUTCSeconds() !== e.second || o.getUTCMilliseconds() !== e.millisecond) throw RangeError("Invalid civil date and time");
	if (!t) {
		let t = /* @__PURE__ */ new Date(0);
		return t.setFullYear(e.year, e.month - 1, e.day), t.setHours(e.hour, e.minute, e.second, e.millisecond), t;
	}
	let s = /* @__PURE__ */ new Set();
	for (let e of [
		-48,
		-24,
		0,
		24,
		48
	]) {
		let i = a + e * 36e5;
		s.add(r(n(new Date(i), t)) - i);
	}
	let c = [...s].map((e) => a - e).sort((e, t) => e - t), l = c.filter((e) => r(n(new Date(e), t)) === a);
	if (l.length === 1) return new Date(l[0]);
	if (i === "reject") throw RangeError(l.length ? "This time occurs twice in the selected timezone" : "This time does not exist in the selected timezone");
	return l.length ? new Date(i === "later" ? l[l.length - 1] : l[0]) : new Date(i === "earlier" ? c[0] : c[c.length - 1]);
}
var a = 1440, o = 6e4, s = [
	1,
	2,
	3,
	4,
	5
];
function c(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function l(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function u(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes() + t, e.getSeconds(), e.getMilliseconds());
}
function d(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes());
}
function f(e, t = 1) {
	let n = c(e);
	return l(n, -((n.getDay() - t + 7) % 7));
}
function p(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function m(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function h(e, t) {
	let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	return Math.round((n - r) / 864e5);
}
function g(e) {
	return e.getHours() * 60 + e.getMinutes() + e.getSeconds() / 60 + e.getMilliseconds() / o;
}
function _(e, t) {
	let n = v(e, t);
	if (!m(n, e) || g(n) <= t) return n;
	let r = Math.floor(t);
	for (; r > 0 && g(v(e, r - 1)) !== r - 1;) r--;
	return /* @__PURE__ */ new Date(n.getTime() - (t - r) * o);
}
function v(e, t) {
	let n = Math.floor(t);
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, n, Math.round((t - n) * 60));
}
function y(e) {
	let t = /^(\d{1,2}):(\d{2})$/.exec(e.trim());
	if (!t) throw RangeError(`Invalid time "${e}", expected HH:mm`);
	let n = Number(t[1]), r = Number(t[2]);
	if (r > 59 || n > 24 || n === 24 && r > 0) throw RangeError(`Invalid time "${e}"`);
	return n * 60 + r;
}
function b(e) {
	let t = Math.round(e), n = Math.floor(t / 60), r = t % 60;
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function x(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function S(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
	if (!t) throw RangeError(`Invalid date key "${e}"`);
	let n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
	if (x(n) !== e) throw RangeError(`Invalid date key "${e}"`);
	return n;
}
function C(e, t, n = "round") {
	if (t <= 0) return e;
	let r = n === "floor" ? Math.floor : n === "ceil" ? Math.ceil : Math.round, i = e / t;
	return r(n === "floor" ? i + 1e-9 : n === "ceil" ? i - 1e-9 : i) * t;
}
function w(e, t, n = "round") {
	return v(c(e), C(g(e), t, n));
}
function T(e) {
	return e === "day" || e === "threeDay" || e === "workWeek" || e === "week";
}
function E(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = c(t);
	switch (e) {
		case "day":
		case "timeline": return [i];
		case "threeDay": return [
			i,
			l(i, 1),
			l(i, 2)
		];
		case "week": {
			let e = f(i, r);
			return Array.from({ length: 7 }, (t, n) => l(e, n));
		}
		case "workWeek": {
			let e = new Set(n.workWeekDays ?? s), t = f(i, r), a = Array.from({ length: 7 }, (e, n) => l(t, n)).filter((t) => e.has(t.getDay()));
			return a.length ? a : [i];
		}
		case "agenda": {
			let e = Math.max(1, Math.floor(n.agendaDays ?? 7));
			return Array.from({ length: e }, (e, t) => l(i, t));
		}
		case "month": return D(t, r).flat();
	}
}
function D(e, t = 1) {
	let n = p(e), r = new Date(n.getFullYear(), n.getMonth() + 1, 0), i = f(n, t), a = [], o = i;
	for (; o <= r || a.length === 0;) {
		let e = Array.from({ length: 7 }, (e, t) => l(o, t));
		a.push(e), o = l(o, 7);
	}
	return a;
}
function O(e, t, n = {}) {
	let r = E(e, t, n);
	return {
		start: r[0],
		end: l(r[r.length - 1], 1)
	};
}
function k(e, t, n, r = {}) {
	switch (e) {
		case "day":
		case "timeline": return l(t, n);
		case "threeDay": return l(t, 3 * n);
		case "week":
		case "workWeek": return l(t, 7 * n);
		case "agenda": return l(t, Math.max(1, r.agendaDays ?? 7) * n);
		case "month": return d(t, n);
	}
}
var A = /* @__PURE__ */ new Map();
function j(e, t) {
	let n = `${e}|${JSON.stringify(t)}`, r = A.get(n);
	return r || (r = new Intl.DateTimeFormat(e, t), A.set(n, r)), r;
}
function M(e, t = {}) {
	return j(t.locale ?? "en-GB", {
		timeZone: t.timeZone,
		timeZoneName: t.timeZone ? "short" : void 0,
		hour: t.hour12 ? "numeric" : "2-digit",
		minute: "2-digit",
		hourCycle: t.hour12 ? "h12" : "h23"
	}).format(e);
}
function N(e, t, n = {}) {
	return `${M(e, n)}–${M(t, n)}`;
}
function P(e, t = {}) {
	if (!t.hour12) return b(e);
	let n = v(new Date(2e3, 0, 1), e);
	return j(t.locale ?? "en-GB", {
		hour: "numeric",
		minute: e % 60 ? "2-digit" : void 0,
		hour12: !0
	}).format(n);
}
function F(e, t = "en-GB") {
	return j(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e);
}
function I(e, t, n = {}) {
	let r = n.locale ?? "en-GB";
	if (e === "month") return j(r, {
		month: "long",
		year: "numeric"
	}).format(t);
	let i = E(e, t, n), a = i[0], o = i[i.length - 1];
	if (i.length === 1) return F(a, r);
	let s = a.getFullYear() === o.getFullYear(), c = s && a.getMonth() === o.getMonth(), l = j(r, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	if (c) return `${a.getDate()} – ${l.format(o)}`;
	let u = j(r, s ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	}), d = j(r, {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return `${u.format(a)} – ${d.format(o)}`;
}
function L(e, t, n, r) {
	return e < r && n < t;
}
function R(e, t, n) {
	let r = c(n), i = l(r, 1), o = e.getTime(), s = Math.max(t.getTime(), o);
	if (s === o) {
		if (o < r.getTime() || o >= i.getTime()) return null;
	} else if (!L(o, s, r.getTime(), i.getTime())) return null;
	let u = o < r.getTime(), d = s > i.getTime();
	return {
		startMinute: u ? 0 : g(e),
		endMinute: s >= i.getTime() ? a : Math.max(g(t), u ? 0 : g(e)),
		continuesBefore: u,
		continuesAfter: d
	};
}
function z(e) {
	let t = e.filter(([e, t]) => t > e).map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]), n = [];
	for (let [e, r] of t) {
		let t = n[n.length - 1];
		t && e <= t[1] ? t[1] = Math.max(t[1], r) : n.push([e, r]);
	}
	return n;
}
function B(e, t, n) {
	let r = [], i = e;
	for (let [e, a] of z(n)) if (!(a <= i) && (e >= t || (e > i && r.push([i, Math.min(e, t)]), i = Math.max(i, a), i >= t))) break;
	return i < t && r.push([i, t]), r;
}
function V(e, t = 0) {
	let n = e.map((e) => ({
		id: e.id,
		start: e.start,
		end: Math.max(e.end, e.start + t)
	})).sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), r = /* @__PURE__ */ new Map(), i = [], a = [], o = -Infinity, s = () => {
		let e = a.length;
		for (let t of i) {
			let n = 1;
			for (let r = t.column + 1; r < e && !i.some((e) => e.column === r && L(t.start, t.end, e.start, e.end)); r++) n++;
			r.set(t.id, {
				column: t.column,
				columns: e,
				span: n
			});
		}
		i = [], a = [], o = -Infinity;
	};
	for (let e of n) {
		e.start >= o && s();
		let t = a.findIndex((t) => t <= e.start);
		t === -1 ? (t = a.length, a.push(e.end)) : a[t] = e.end, i.push({
			...e,
			column: t
		}), o = Math.max(o, e.end);
	}
	return s(), r;
}
function H(e) {
	let t = [...e].sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), n = [], r = /* @__PURE__ */ new Map();
	for (let e of t) {
		let t = Math.max(e.end, e.start + 1e-6), i = n.findIndex((t) => t <= e.start);
		i === -1 ? (i = n.length, n.push(t)) : n[i] = t, r.set(e.id, i);
	}
	return {
		lanes: r,
		count: n.length
	};
}
function U(e) {
	return e === void 0 ? [] : typeof e == "string" ? [e] : e;
}
function W(e, t, { emptyMatchesAll: n }) {
	if (t === void 0) return !0;
	let r = U(e);
	return r.length === 0 ? n : r.includes(t);
}
function G(e, t, n) {
	let r = U(e);
	if (t === void 0 || n === void 0 || t === n) return r.length ? [...r] : void 0;
	if (r.length === 0) return;
	let i = r.map((e) => e === t ? n : e);
	return [...new Set(i)];
}
function K(e, t, n = []) {
	let r = /* @__PURE__ */ new Set(), i = e.start.getTime(), a = e.end.getTime();
	for (let e of [...t, ...n]) if (L(e.start.getTime(), e.end.getTime(), i, a) && !("kind" in e && e.kind === "unavailable")) for (let t of U(e.resourceId)) r.add(t);
	return r;
}
function q(e, t, n = {}) {
	let { fromDateKey: r, wallDateAtMinutes: i, toDateKey: o, startOfWeek: s, startOfDay: c, addDays: l, differenceInDays: u, weekday: d } = $(n.timeZone), f = n.weekStartsOn ?? 1, p = [], m = t.start.getTime(), h = t.end.getTime();
	for (let n of e) {
		let e = y(n.startTime), g = y(n.endTime);
		g <= e && (g += a);
		let _ = r(n.startDate), v = (t) => {
			let r = i(t, e), a = i(t, g);
			if (a <= r || !L(r.getTime(), a.getTime(), m, h)) return;
			let s = o(t);
			p.push({
				id: n.recurrence ? `${n.id}@${s}` : n.id,
				start: r,
				end: a,
				kind: n.kind ?? "available",
				resourceId: n.resourceId,
				label: n.label,
				color: n.color,
				editable: n.editable,
				seriesId: n.recurrence ? n.id : void 0,
				occurrenceKey: n.recurrence ? s : void 0,
				data: n.data
			});
		}, b = n.recurrence;
		if (!b) {
			v(_);
			continue;
		}
		let x = Math.max(1, Math.floor(b.interval ?? 1)), S = new Set(b.weekdays);
		if (S.size === 0) continue;
		let C = new Set(b.exclusions ?? []), w = b.until ? r(b.until) : null, T = s(_, f), E = c(t.start);
		E = l(E, -1), E < _ && (E = _);
		let D = c(t.end);
		for (; E <= D && (!w || E <= w);) S.has(d(E)) && Math.floor(u(s(E, f), T) / 7) % x === 0 && !C.has(o(E)) && v(E), E = l(E, 1);
	}
	return p.sort((e, t) => e.start.getTime() - t.start.getTime());
}
function J(t, n, r, i, a) {
	let s = C(n, i, "floor"), c = C(r, i, "floor"), l = e(Math.min(s, c), a.min, a.max - i), u = e(Math.max(s, c) + i, l + i, a.max), d = _(t, l), f = _(t, u);
	return f <= d && (f = new Date(d.getTime() + i * o)), {
		start: d,
		end: f
	};
}
function Y(t, n, r, i, a, s) {
	let c = (t.end.getTime() - t.start.getTime()) / o, l = C(r - i, a), u = g(t.start);
	u >= s.min && u + c <= s.max && (l = e(l, s.min, s.max - c));
	let d = v(n, l);
	return {
		start: d,
		end: new Date(d.getTime() + c * o)
	};
}
function X(t, n, r, i, o) {
	let s = c(n), l = t.start.getTime() >= s.getTime() ? g(t.start) + i : i;
	return _(s, e(C(r, i), Math.min(l, a), Math.max(o.max, l)));
}
function Z(e, t) {
	return {
		start: l(e.start, t),
		end: l(e.end, t)
	};
}
function Q(e, t) {
	return e.start.getTime() === t.start.getTime() && e.end.getTime() === t.end.getTime();
}
function ee(e) {
	return e.allDay ? !0 : e.end.getTime() >= l(e.start, 1).getTime();
}
function $(t) {
	let r = (e) => n(e, t), c = (e) => i(e, t), l = (e) => {
		let t = r(e);
		return `${String(t.year).padStart(4, "0")}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`;
	}, d = (e) => c({
		...r(e),
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}), f = (e, t) => {
		if (t === 0) return new Date(e);
		let n = r(e), i = new Date(Date.UTC(n.year, n.month - 1, n.day + t));
		return c({
			...n,
			year: i.getUTCFullYear(),
			month: i.getUTCMonth() + 1,
			day: i.getUTCDate()
		});
	}, p = (e, t) => {
		let n = r(e), i = new Date(Date.UTC(n.year, n.month - 1 + t, 1)), a = new Date(Date.UTC(i.getUTCFullYear(), i.getUTCMonth() + 1, 0)).getUTCDate();
		return c({
			...n,
			year: i.getUTCFullYear(),
			month: i.getUTCMonth() + 1,
			day: Math.min(n.day, a)
		});
	}, m = (e) => {
		let t = r(e);
		return new Date(Date.UTC(t.year, t.month - 1, t.day)).getUTCDay();
	}, h = (e, t = 1) => f(d(e), -((m(e) - t + 7) % 7)), _ = (e) => c({
		...r(d(e)),
		day: 1
	}), y = (e, t) => {
		let n = r(e), i = r(t);
		return Math.round((Date.UTC(n.year, n.month - 1, n.day) - Date.UTC(i.year, i.month - 1, i.day)) / 864e5);
	}, b = (e, t) => {
		let n = r(e), i = new Date(Date.UTC(n.year, n.month - 1, n.day, 0, Math.floor(t), 0, Math.round((t - Math.floor(t)) * o)));
		return c({
			year: i.getUTCFullYear(),
			month: i.getUTCMonth() + 1,
			day: i.getUTCDate(),
			hour: i.getUTCHours(),
			minute: i.getUTCMinutes(),
			second: i.getUTCSeconds(),
			millisecond: i.getUTCMilliseconds()
		});
	}, x = (e, t) => {
		let n = r(e);
		return y(e, t) * a + n.hour * 60 + n.minute + n.second / 60 + n.millisecond / o;
	}, S = (e, n) => {
		let r = b(e, n), i = x(r, e);
		if (!t || i <= n + 1e-8) return r;
		let a = Math.floor(r.getTime() - (i - n) * o), s = r.getTime();
		for (; a < s;) {
			let t = Math.floor((a + s) / 2);
			x(new Date(t), e) < n ? a = t + 1 : s = t;
		}
		return new Date(s);
	}, w = (e) => {
		if (!Number.isFinite(e.min) || !Number.isFinite(e.max) || e.max <= e.min) throw RangeError("Calendar time bounds must contain a positive interval of real instants");
	}, T = t ? (e, t) => new Date(d(e).getTime() + t * o) : v, E = t ? (e) => (e.getTime() - d(e).getTime()) / o : g, D = t ? (e, t) => new Date(e.getTime() + t * o) : u, O = (e) => {
		let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
		if (!t) throw RangeError(`Invalid date key "${e}"`);
		let n = c({
			year: +t[1],
			month: +t[2],
			day: +t[3],
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		});
		if (l(n) !== e) throw RangeError(`Invalid date key "${e}"`);
		return n;
	}, k = (e, t = 1) => {
		let n = _(e), r = p(n, 1), i = [];
		for (let e = h(n, t); e < r; e = f(e, 7)) i.push(Array.from({ length: 7 }, (t, n) => f(e, n)));
		return i;
	}, A = (e, t, n = {}) => {
		let r = d(t);
		if (e === "month") return k(r, n.weekStartsOn).flat();
		if (e === "week" || e === "workWeek") {
			let t = h(r, n.weekStartsOn), i = Array.from({ length: 7 }, (e, n) => f(t, n));
			if (e === "week") return i;
			let a = new Set(n.workWeekDays ?? s), o = i.filter((e) => a.has(m(e)));
			return o.length ? o : [r];
		}
		let i = e === "threeDay" ? 3 : e === "agenda" ? Math.max(1, Math.floor(n.agendaDays ?? 7)) : 1;
		return Array.from({ length: i }, (e, t) => f(r, t));
	}, M = (e, n, r) => {
		if (!t) return R(e, n, r);
		let i = d(r).getTime(), a = f(d(r), 1).getTime(), s = e.getTime(), c = Math.max(s, n.getTime());
		return (c === s ? s < i || s >= a : !L(s, c, i, a)) ? null : {
			startMinute: Math.max(0, (s - i) / o),
			endMinute: Math.min(a - i, c - i) / o,
			continuesBefore: s < i,
			continuesAfter: c > a
		};
	}, N = (e) => !!e.allDay || e.end >= f(e.start, 1), P = (e, n) => j(e, {
		...n,
		...t ? { timeZone: t } : {}
	}), F = (e, t = "en-GB") => P(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e), z = (e, n, i = {}) => {
		if (!t) return I(e, n, i);
		let a = i.locale ?? "en-GB";
		if (e === "month") return P(a, {
			month: "long",
			year: "numeric"
		}).format(n);
		let o = A(e, n, i), s = o[0], c = o[o.length - 1];
		if (o.length === 1) return F(s, a);
		let l = r(s), u = r(c);
		return l.year === u.year && l.month === u.month ? `${l.day} – ${P(a, {
			day: "numeric",
			month: "long",
			year: "numeric"
		}).format(c)}` : `${P(a, {
			day: "numeric",
			month: "short",
			...l.year === u.year ? {} : { year: "numeric" }
		}).format(s)} – ${P(a, {
			day: "numeric",
			month: "short",
			year: "numeric"
		}).format(c)}`;
	}, B = (n, i, s, c, l, u) => {
		if (!t) return Y(n, i, s, c, l, u);
		w(u);
		let d = (n.end.getTime() - n.start.getTime()) / o, f = C(s - c, l), p = (e) => {
			let t = T(i, e), n = r(t);
			return y(t, i) * a + n.hour * 60 + n.minute;
		}, m = b(n.start, p(u.min)), h = b(n.start, p(u.max));
		n.start >= m && n.end <= h && d <= u.max - u.min && (f = e(f, u.min, u.max - d));
		let g = T(i, f);
		return {
			start: g,
			end: D(g, d)
		};
	};
	return {
		parts: r,
		weekday: m,
		startOfDay: d,
		addDays: f,
		addMonths: p,
		addMinutes: D,
		startOfWeek: h,
		startOfMonth: _,
		toDateKey: l,
		fromDateKey: O,
		differenceInDays: y,
		isSameDay: (e, t) => l(e) === l(t),
		dateAtMinutes: T,
		wallDateAtMinutes: b,
		minutesOfDay: E,
		getMonthWeeks: k,
		getVisibleDays: A,
		getViewRange: (e, t, n = {}) => {
			let r = A(e, t, n);
			return {
				start: r[0],
				end: f(r[r.length - 1], 1)
			};
		},
		shiftDate: (e, t, n, r = {}) => e === "month" ? p(t, n) : f(t, n * (e === "threeDay" ? 3 : e === "week" || e === "workWeek" ? 7 : e === "agenda" ? Math.max(1, r.agendaDays ?? 7) : 1)),
		getFormatter: P,
		formatLongDate: F,
		formatRangeTitle: z,
		daySegment: M,
		isAllDayLike: N,
		eventsOnDay: (e, t) => e.filter((e) => M(e.start, e.end, t)).sort((e, t) => Number(N(t)) - Number(N(e)) || e.start.getTime() - t.start.getTime() || t.end.getTime() - e.end.getTime() || e.title.localeCompare(t.title)),
		computeCreateRange: (n, r, i, a, o) => {
			if (!t) return J(n, r, i, a, o);
			let s = C(r, a, "floor"), c = C(i, a, "floor");
			w(o);
			let l = Math.min(a, o.max - o.min), u = e(Math.min(s, c), o.min, o.max - l);
			return {
				start: T(n, u),
				end: T(n, e(Math.max(s, c) + a, u + l, o.max))
			};
		},
		computeMoveRange: B,
		computeResizeEnd: (n, r, i, a, s) => {
			if (!t) return X(n, r, i, a, s);
			w(s);
			let c = Math.max(0, (n.start.getTime() - d(r).getTime()) / o) + a;
			return T(r, e(C(i, a), c, Math.max(s.max, c)));
		},
		computeNudgeRange: (e, t, n) => B(e, d(e.start), E(e.start) + t, 0, 1, n),
		shiftRangeDays: (e, n) => {
			if (!t) return Z(e, n);
			if (e.allDay) return {
				start: f(e.start, n),
				end: f(e.end, n)
			};
			let r = f(e.start, n);
			return {
				start: r,
				end: new Date(r.getTime() + e.end.getTime() - e.start.getTime())
			};
		},
		dayBounds: (e, n) => {
			if (!t) return n;
			let r = d(e).getTime(), i = {
				min: (S(e, n.min).getTime() - r) / o,
				max: (S(e, n.max).getTime() - r) / o
			};
			return w(i), i;
		}
	};
}
function te(e, t, n, r, i = !0) {
	let a = Math.max(5, t), o = (e) => Array.from({ length: Math.ceil((e.max - e.min) / a) }, (t, n) => e.min + n * a);
	if (!i) return {
		reference: void 0,
		axes: e.map(({ day: e, bounds: t }) => ({
			day: e,
			bounds: t,
			minutes: o(t),
			matchesReference: !1
		}))
	};
	let s = $(n.timeZone), c = /* @__PURE__ */ new Map(), l = e.map(({ day: e, bounds: t }) => {
		let i = s.toDateKey(e), a = c.get(i);
		if (a) return a;
		let l = o(t), u = l.map((t) => s.dateAtMinutes(e, t)), d = u.map((e) => M(e, n)), f = j(n.locale ?? "en-GB", {
			timeZone: n.timeZone,
			timeZoneName: "short"
		}), p = new Set(u.map((e) => f.formatToParts(e).find((e) => e.type === "timeZoneName")?.value)), m = t.max - t.min === r.max - r.min && p.size === 1, h = {
			day: e,
			bounds: t,
			minutes: l,
			signature: JSON.stringify([t.max - t.min, d]),
			regular: m
		};
		return c.set(i, h), h;
	}), u = /* @__PURE__ */ new Map(), d = [...c.values()].filter((e) => e.regular);
	for (let e of d) u.set(e.signature, (u.get(e.signature) ?? 0) + 1);
	let f = d.reduce((e, t) => !e || u.get(t.signature) > u.get(e.signature) || u.get(t.signature) === u.get(e.signature) && t.day < e.day ? t : e, void 0);
	return {
		reference: f,
		axes: l.map((e) => ({
			...e,
			matchesReference: !!f && e.signature === f.signature
		}))
	};
}
//#endregion
export { l as addDays, u as addMinutes, d as addMonths, i as calendarDateFromParts, n as calendarDateParts, $ as createCalendarDateMath, v as dateAtMinutes, h as differenceInDays, q as expandAvailabilityRules, P as formatHourLabel, I as formatRangeTitle, M as formatTime, b as formatTimeOfDay, N as formatTimeRange, S as fromDateKey, K as getActiveResourceIds, O as getViewRange, E as getVisibleDays, ee as isAllDayLike, m as isSameDay, T as isTimeGridView, V as layoutOverlaps, W as matchesResource, g as minutesOfDay, H as packLanes, y as parseTime, L as rangesOverlap, G as replaceResource, U as resourceIdsOf, Q as sameRange, te as selectCalendarTimeAxis, k as shiftDate, w as snapDate, C as snapMinutes, c as startOfDay, p as startOfMonth, f as startOfWeek, B as subtractIntervals, x as toDateKey };
