import { Component as e, Fragment as t, cloneElement as n, createContext as r, createElement as i, forwardRef as a, isValidElement as o, useCallback as s, useContext as c, useEffect as l, useId as u, useImperativeHandle as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { Accessibility as y, AlertTriangle as b, ArrowDown as x, ArrowLeft as S, ArrowUp as C, ArrowUpDown as w, BookOpen as T, Calendar as E, Check as D, CheckCircle2 as O, ChevronDown as k, ChevronLeft as A, ChevronRight as j, ChevronsUpDown as M, Columns3 as N, Copy as P, Download as F, Eye as I, EyeOff as L, GripVertical as R, HandleBottomRight as z, Inbox as B, Info as V, Loader2 as H, LogOut as U, Menu as W, Minus as G, Monitor as K, Moon as ee, Palette as te, PanelLeft as ne, PanelLeftDashed as re, PanelRightClose as ie, PanelRightOpen as ae, Pause as oe, Play as se, RotateCcw as ce, RotateCw as le, Search as ue, Settings as de, SlidersHorizontal as fe, Sun as pe, Trash2 as me, UploadCloud as he, Volume2 as ge, VolumeX as _e, X as ve, XCircle as ye, Zap as be } from "lucide-react";
import { createPortal as xe } from "react-dom";
//#region src/lib/cn.ts
function Se(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = Se(n);
		e && (t = t ? `${t} ${e}` : e);
	}
	else for (let n in e) e[n] && (t = t ? `${t} ${n}` : n);
	return t;
}
var Ce = new Set([
	"block",
	"contents",
	"flex",
	"grid",
	"hidden",
	"inline",
	"inline-block",
	"inline-flex",
	"table"
]), we = new Set([
	"text-2xl",
	"text-2xs",
	"text-2xs-f",
	"text-5xl",
	"text-base",
	"text-body",
	"text-lg",
	"text-sm",
	"text-xl",
	"text-xs"
]), Te = new Set([
	"text-center",
	"text-left",
	"text-right"
]), Ee = new Set(["lowercase", "uppercase"]), De = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), Oe = {
	m: [
		"margin-top",
		"margin-right",
		"margin-bottom",
		"margin-left"
	],
	mx: ["margin-right", "margin-left"],
	my: ["margin-top", "margin-bottom"],
	mt: ["margin-top"],
	mr: ["margin-right"],
	mb: ["margin-bottom"],
	ml: ["margin-left"],
	p: [
		"padding-top",
		"padding-right",
		"padding-bottom",
		"padding-left"
	],
	px: ["padding-right", "padding-left"],
	py: ["padding-top", "padding-bottom"],
	pt: ["padding-top"],
	pr: ["padding-right"],
	pb: ["padding-bottom"],
	pl: ["padding-left"]
}, ke = {
	inset: [
		"top",
		"right",
		"bottom",
		"left"
	],
	"inset-x": ["right", "left"],
	"inset-y": ["top", "bottom"],
	top: ["top"],
	right: ["right"],
	bottom: ["bottom"],
	left: ["left"],
	start: ["inset-inline-start"],
	end: ["inset-inline-end"]
}, Ae = {
	border: [
		"border-top-width",
		"border-right-width",
		"border-bottom-width",
		"border-left-width"
	],
	"border-x": ["border-right-width", "border-left-width"],
	"border-y": ["border-top-width", "border-bottom-width"],
	"border-t": ["border-top-width"],
	"border-r": ["border-right-width"],
	"border-b": ["border-bottom-width"],
	"border-l": ["border-left-width"]
}, je = {
	border: [
		"border-top-color",
		"border-right-color",
		"border-bottom-color",
		"border-left-color"
	],
	"border-x": ["border-right-color", "border-left-color"],
	"border-y": ["border-top-color", "border-bottom-color"],
	"border-t": ["border-top-color"],
	"border-r": ["border-right-color"],
	"border-b": ["border-bottom-color"],
	"border-l": ["border-left-color"]
}, Me = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function q(...e) {
	return Ne(Se(e));
}
function Ne(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = Pe(r);
		if (e.size === 0) {
			let i = n.get(r);
			i !== void 0 && (t[i] = null), n.set(r, t.length), t.push({
				token: r,
				keys: e
			});
			continue;
		}
		for (let n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			r && r.keys.size > 0 && Ke(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function Pe(e) {
	let t = Fe(e), n = t.pop() ?? e, r = n.startsWith("!"), i = Ie(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = Le(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function Fe(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function Ie(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function Le(e) {
	let t = Ve(e);
	if (t) return [...Oe[t]];
	let n = He(e);
	if (n) return [...ke[n]];
	let r = Ue(e);
	if (r) return [...Ae[r]];
	if (Ce.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (Me.has(e)) return ["border-style"];
	let i = We(e);
	return i ? [...je[i]] : ze(e) || Be(e) || (we.has(e) ? ["font-size"] : Te.has(e) ? ["text-align"] : Ee.has(e) ? ["text-transform"] : e === "text-ellipsis" || e === "text-clip" ? ["text-overflow"] : e === "text-wrap" || e === "text-nowrap" || e === "text-balance" || e === "text-pretty" ? ["text-wrap"] : /^text-\[(?:length:)?-?[\d.]+(?:px|rem|em|%|vw|vh)\]$/.test(e) ? ["font-size"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : De.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" || e === "flex-col-reverse" || e === "flex-row-reverse" ? ["flex-direction"] : e === "flex-wrap" || e === "flex-nowrap" || e === "flex-wrap-reverse" ? ["flex-wrap"] : e === "flex-shrink" || e.startsWith("flex-shrink-") ? ["flex-shrink"] : e === "flex-grow" || e.startsWith("flex-grow-") ? ["flex-grow"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-x-") ? ["column-gap"] : e.startsWith("gap-y-") ? ["row-gap"] : e.startsWith("gap-") ? ["column-gap", "row-gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : []);
}
var Re = {
	"": [
		"tl",
		"tr",
		"br",
		"bl"
	],
	t: ["tl", "tr"],
	r: ["tr", "br"],
	b: ["bl", "br"],
	l: ["tl", "bl"],
	tl: ["tl"],
	tr: ["tr"],
	br: ["br"],
	bl: ["bl"],
	s: ["ss", "es"],
	e: ["se", "ee"],
	ss: ["ss"],
	se: ["se"],
	es: ["es"],
	ee: ["ee"]
};
function ze(e) {
	let t = e.match(/^rounded(?:-(tl|tr|br|bl|ss|se|es|ee|t|r|b|l|s|e))?(?:-|$)/);
	if (t) return Re[t[1] ?? ""].map((e) => `radius-${e}`);
}
function Be(e) {
	if (e.startsWith("bg-")) return /^bg-(?:auto|cover|contain)$/.test(e) ? ["background-size"] : /^bg-(?:no-repeat|repeat)(?:-|$)/.test(e) ? ["background-repeat"] : /^bg-(?:fixed|local|scroll)$/.test(e) ? ["background-attachment"] : /^bg-(?:gradient-|linear-|radial-|conic-|none$)/.test(e) ? ["background-image"] : /^bg-(?:center|top|bottom|left|right)(?:-|$)/.test(e) || /^bg-position-/.test(e) ? ["background-position"] : ["background-color"];
}
function Ve(e) {
	return Ge(e, Oe);
}
function He(e) {
	return Ge(e, ke);
}
function Ue(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function We(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function Ge(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function Ke(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/lib/math.ts
function J(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region src/components/charts/chartUtils.ts
var qe = {
	"text-accent": "var(--accent)",
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-red": "var(--red)",
	"text-yellow": "var(--yellow)"
};
function Je(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Ye(e) {
	return e ? qe[e] ?? e : "var(--accent)";
}
function Xe(e, t) {
	if (e <= 0 || t <= 0) return [];
	if (e === 1 || t === 1) return [0];
	let n = Math.min(e, Math.max(2, Math.floor(t))), r = (e - 1) / (n - 1), i = /* @__PURE__ */ new Set();
	for (let e = 0; e < n; e += 1) i.add(Math.round(e * r));
	return i.add(e - 1), Array.from(i).sort((e, t) => e - t);
}
function Ze(e) {
	return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function Qe(e, t) {
	let n = String(e ?? "");
	return t === void 0 || t <= 0 || n.length <= t ? n : t <= 3 ? n.slice(0, t) : `${n.slice(0, t - 3)}...`;
}
function $e(e, t = 10) {
	let n = 0;
	for (let r of e) r === " " ? n += t * .32 : /[A-Z0-9]/.test(r) ? n += t * .62 : /[il.,:;|'`]/.test(r) ? n += t * .28 : /[MW@#%&]/.test(r) ? n += t * .82 : n += t * .54;
	return Math.ceil(n);
}
function et(e, { maxWidth: t = 220, minWidth: n = 72, paddingX: r = 20 } = {}) {
	return J(e.reduce((e, t) => Math.max(e, $e(t, 11)), 0) + r, n, t);
}
function tt(e, t, { boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Math.max(1, Math.min(s, r - a * 2)), l = Math.max(1, Math.min(i, n - a * 2)), u = Math.max(a, r - c - a), d = Math.max(a, n - l - a), f = J(e - c / 2, a, u), p = t - l - o, m = p >= a ? "above" : "below";
	return {
		height: l,
		placement: m,
		width: c,
		x: f,
		y: m === "above" ? p : J(t + o, a, d)
	};
}
function nt({ anchorX: e, anchorY: t, boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = tt(e, t, {
		boundsHeight: n,
		boundsWidth: r,
		height: i,
		margin: a,
		offset: o,
		width: s
	});
	return {
		left: c.x + c.width / 2,
		minWidth: c.width,
		top: c.y + c.height / 2,
		transform: "translate(-50%, -50%)",
		width: c.width
	};
}
//#endregion
//#region src/components/charts/AreaChart.tsx
var Y = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
}, rt = 600;
function it(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function at({ data: e, height: t = 240, minValue: n, maxValue: r, startAtZero: i = !1, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 5, ariaLabel: c = "Area chart", className: l }) {
	let d = u(), f = m(null), [p, y] = h(null), b = Math.max(Y.top + Y.bottom + 1, t), x = rt - Y.left - Y.right, S = Math.max(1, b - Y.top - Y.bottom), C = e.length > 0, w = e[0]?.value ?? 0, T = e[0]?.value ?? 0;
	for (let t of e) t.value < w && (w = t.value), t.value > T && (T = t.value);
	let E = n ?? w, D = r ?? T;
	if (i && n === void 0 && w >= 0 && (E = 0), E === D) {
		if (i || n !== void 0 || r !== void 0) {
			let e = it(T);
			n === void 0 && (E = i && w >= 0 ? 0 : w >= 0 ? Math.max(0, w - e) : w - e), r === void 0 && (D = T + e);
		}
		E === D && (D = E + 1);
	}
	let O = D - E, k = a ?? Je, A = o ?? a ?? ((e) => e.toLocaleString());
	function j(t) {
		return Y.left + t / Math.max(e.length - 1, 1) * x;
	}
	function M(e) {
		return Y.top + S - (e - E) / O * S;
	}
	let N = e.map((e, t) => `${j(t)},${M(e.value)}`).join(" "), P = C ? [
		`${j(0)},${Y.top + S}`,
		...e.map((e, t) => `${j(t)},${M(e.value)}`),
		`${j(e.length - 1)},${Y.top + S}`
	].join(" ") : "", F = Xe(e.length, s);
	function I(t) {
		let n = f.current;
		if (!n || e.length === 0) return;
		let r = n.getBoundingClientRect();
		if (r.width <= 0) return;
		let i = ((t.clientX - r.left) / r.width * rt - Y.left) / x, a = Math.round(i * (e.length - 1)), o = Math.max(0, Math.min(e.length - 1, a));
		y({
			x: j(o),
			y: M(e[o].value),
			index: o
		});
	}
	function L(t) {
		y({
			x: j(t),
			y: M(e[t].value),
			index: t
		});
	}
	function R() {
		y(null);
	}
	return /* @__PURE__ */ v("svg", {
		ref: f,
		width: "100%",
		viewBox: `0 0 ${rt} ${b}`,
		onPointerMove: I,
		onPointerLeave: R,
		className: q("select-none", l),
		role: "img",
		"aria-label": c,
		children: [
			/* @__PURE__ */ _("defs", { children: /* @__PURE__ */ v("linearGradient", {
				id: d,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ _("stop", {
					offset: "0%",
					stopColor: "var(--accent)",
					stopOpacity: .3
				}), /* @__PURE__ */ _("stop", {
					offset: "100%",
					stopColor: "var(--accent)",
					stopOpacity: 0
				})]
			}) }),
			/* @__PURE__ */ _("text", {
				x: Y.left - 8,
				y: Y.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(D)
			}),
			/* @__PURE__ */ _("text", {
				x: Y.left - 8,
				y: Y.top + S,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(E)
			}),
			/* @__PURE__ */ _("line", {
				x1: Y.left,
				y1: Y.top + S,
				x2: Y.left + x,
				y2: Y.top + S,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			C && /* @__PURE__ */ _("polygon", {
				points: P,
				fill: `url(#${d})`
			}),
			C && /* @__PURE__ */ _("polyline", {
				points: N,
				fill: "none",
				stroke: "var(--accent)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			e.map((e, t) => /* @__PURE__ */ _("circle", {
				cx: j(t),
				cy: M(e.value),
				r: 8,
				fill: "transparent",
				tabIndex: 0,
				role: "button",
				"aria-label": `${e.date}: ${A(e.value)}`,
				onFocus: () => L(t),
				onBlur: R
			}, `${e.date}-${t}-hit`)),
			F.map((t) => /* @__PURE__ */ _("text", {
				x: j(t),
				y: b - 4,
				textAnchor: "middle",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: e[t].date
			}, `${e[t].date}-${t}`)),
			p && /* @__PURE__ */ v(g, { children: [
				/* @__PURE__ */ _("line", {
					x1: p.x,
					y1: Y.top,
					x2: p.x,
					y2: Y.top + S,
					stroke: "var(--border-strong)",
					strokeWidth: 1,
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ _("circle", {
					cx: p.x,
					cy: p.y,
					r: 4,
					fill: "var(--accent)",
					stroke: "var(--bg-secondary)",
					strokeWidth: 2
				}),
				(() => {
					let t = e[p.index];
					if (!t) return null;
					let n = t.date, r = A(t.value), i = tt(p.x, p.y, {
						boundsHeight: b,
						boundsWidth: rt,
						height: 28,
						offset: 10,
						width: et([n, r], {
							maxWidth: 180,
							minWidth: 90
						})
					}), a = i.x + i.width / 2;
					return /* @__PURE__ */ v(g, { children: [
						/* @__PURE__ */ _("rect", {
							x: i.x,
							y: i.y,
							width: i.width,
							height: i.height,
							rx: 4,
							fill: "var(--bg-tertiary)",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ _("text", {
							x: a,
							y: i.y + 10,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-secondary)",
							fontSize: 9,
							children: n
						}),
						/* @__PURE__ */ _("text", {
							x: a,
							y: i.y + 22,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-primary)",
							fontSize: 11,
							fontWeight: 600,
							children: r
						})
					] });
				})()
			] })
		]
	});
}
//#endregion
//#region src/components/charts/BarChart.tsx
var ot = [
	1,
	.85,
	.7,
	.55,
	.45
], st = 600;
function ct({ data: e, height: t, maxValue: n, valueFormatter: r, labelFormatter: i, maxLabelLength: a, labelWidth: o = 160, valueWidth: s = 60, barHeight: c = 28, gap: l = 10, ariaLabel: u = "Horizontal bar chart", className: d }) {
	let [f, p] = h(null), m = e.length, g = Math.max(1, c), y = Math.max(0, l), b = m > 0 ? m * g + Math.max(0, m - 1) * y : g, x = Math.max(1, t ?? b), S = t === void 0 ? 1 : x / b, C = g * S, w = y * S, T = Math.min(3, C / 3), E = Math.max(0, C - T * 2), D = n === void 0 ? Math.max(...e.map((e) => Ze(e.value)), 1) : Math.max(Ze(n), 1), O = Math.max(0, o), k = Math.max(0, s), A = Math.max(0, st - O - k), j = r ?? ((e) => e.toLocaleString());
	return /* @__PURE__ */ _("svg", {
		width: "100%",
		viewBox: `0 0 ${st} ${x}`,
		className: q("select-none", d),
		role: "img",
		"aria-label": u,
		children: e.map((e, t) => {
			let n = t * (C + w), r = D > 0 ? J(Ze(e.value), 0, D) / D * A : 0, o = f === t, s = i?.(e.label, e, t) ?? e.label, c = Qe(s, a), l = c !== s, u = j(e.value);
			return /* @__PURE__ */ v("g", {
				onMouseEnter: () => p(t),
				onMouseLeave: () => p(null),
				onPointerEnter: () => p(t),
				onPointerDown: () => p(t),
				onPointerLeave: () => p(null),
				onFocus: () => p(t),
				onBlur: () => p(null),
				className: "cursor-pointer",
				tabIndex: 0,
				role: "button",
				"aria-label": `${s}: ${u}`,
				children: [
					/* @__PURE__ */ _("rect", {
						x: 0,
						y: n,
						width: st,
						height: C,
						fill: "transparent"
					}),
					/* @__PURE__ */ v("text", {
						x: 0,
						y: n + C / 2,
						dominantBaseline: "central",
						fill: o ? "var(--text-primary)" : "var(--text-secondary)",
						fontSize: 11,
						fontWeight: o ? 600 : 400,
						style: { transition: "all 150ms" },
						children: [l && /* @__PURE__ */ _("title", { children: s }), c]
					}),
					/* @__PURE__ */ _("rect", {
						x: O,
						y: n + T,
						width: A,
						height: E,
						fill: "var(--border)",
						rx: 6,
						opacity: .5
					}),
					/* @__PURE__ */ _("rect", {
						x: O,
						y: n + T,
						width: r,
						height: E,
						fill: "var(--accent)",
						rx: 6,
						opacity: o ? 1 : ot[t % ot.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ _("text", {
						x: st,
						y: n + C / 2,
						dominantBaseline: "central",
						textAnchor: "end",
						fill: "var(--text-primary)",
						fontSize: 11,
						fontWeight: 600,
						children: u
					})
				]
			}, e.label);
		})
	});
}
//#endregion
//#region src/components/charts/DonutChart.tsx
function lt(e, t) {
	let n = e.reduce((e, t) => e + Ze(t.value), 0), r = 0;
	return e.map((e) => {
		let i = Ze(e.value), a = n > 0 ? i / n * t : 0, o = t - a, s = r / t * 360 - 90, c = s + a / t * 180, l = n > 0 ? i / n * 100 : 0;
		return r += a, {
			segment: e,
			segmentLength: a,
			dashOffset: o,
			rotation: s,
			midAngle: c,
			percentage: l
		};
	});
}
function ut({ segments: e, size: t = 180, strokeWidth: n = 28, valueFormatter: r, percentageFormatter: i, showLegend: a = !0, ariaLabel: o = "Donut chart", className: s }) {
	let [c, l] = h(null), u = e.reduce((e, t) => e + Ze(t.value), 0), d = Math.max(1, t), f = Math.max(1, Math.min(n, d - 1)), p = Math.max(.5, (d - f) / 2), m = lt(e, 2 * Math.PI * p), g = r ?? ((e) => e.toLocaleString()), y = i ?? ((e) => `${e.toFixed(1)}%`), b = d + 12, x = b / 2;
	return /* @__PURE__ */ v("div", {
		className: q("flex flex-col items-center gap-4", s),
		children: [/* @__PURE__ */ v("div", {
			className: "relative",
			children: [/* @__PURE__ */ v("svg", {
				width: b,
				height: b,
				viewBox: `0 0 ${b} ${b}`,
				className: "select-none",
				onMouseLeave: () => l(null),
				onPointerLeave: () => l(null),
				role: "img",
				"aria-label": o,
				children: [
					m.map((e, t) => /* @__PURE__ */ _("circle", {
						cx: x,
						cy: x,
						r: p,
						fill: "none",
						stroke: "transparent",
						strokeWidth: f + 12 + 8,
						strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
						strokeLinecap: "butt",
						transform: `rotate(${e.rotation} ${x} ${x})`,
						onMouseEnter: () => l(t),
						onPointerEnter: () => l(t),
						onPointerDown: () => l(t),
						onFocus: () => l(t),
						onBlur: () => l(null),
						tabIndex: 0,
						role: "button",
						"aria-label": `${e.segment.name}: ${g(Ze(e.segment.value))} (${y(e.percentage)})`,
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					m.map((e, t) => {
						let n = c === t, r = e.midAngle * Math.PI / 180, i = n ? Math.cos(r) * 6 : 0, a = n ? Math.sin(r) * 6 : 0;
						return /* @__PURE__ */ _("circle", {
							cx: x,
							cy: x,
							r: p,
							fill: "none",
							stroke: Ye(e.segment.color),
							strokeWidth: n ? f + 4 : f,
							strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
							strokeLinecap: "butt",
							transform: `translate(${i} ${a}) rotate(${e.rotation} ${x} ${x})`,
							opacity: c !== null && !n ? .5 : 1,
							style: { transition: "all 150ms ease-out" },
							className: "pointer-events-none"
						}, e.segment.name);
					}),
					/* @__PURE__ */ _("text", {
						x,
						y: x - 6,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-primary)",
						fontSize: 18,
						fontWeight: 700,
						className: "pointer-events-none",
						children: g(c === null ? u : Ze(m[c].segment.value))
					}),
					/* @__PURE__ */ _("text", {
						x,
						y: x + 12,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-tertiary)",
						fontSize: 10,
						className: "pointer-events-none",
						children: c === null ? "Total" : m[c].segment.name
					})
				]
			}), c !== null && (() => {
				let e = m[c], t = e.midAngle * Math.PI / 180, n = p + f / 2 + 20, r = x + Math.cos(t) * n, i = x + Math.sin(t) * n, a = Ye(e.segment.color), o = g(Ze(e.segment.value)), s = y(e.percentage);
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: nt({
						anchorX: r,
						anchorY: i,
						boundsHeight: b,
						boundsWidth: b,
						height: 30,
						margin: 4,
						offset: 8,
						width: et([`${e.segment.name} ${o} ${s}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ v("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ _("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: a }
							}),
							/* @__PURE__ */ _("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: e.segment.name
							}),
							/* @__PURE__ */ _("span", {
								className: "text-text-primary text-xs font-semibold",
								children: o
							}),
							/* @__PURE__ */ v("span", {
								className: "text-text-tertiary text-2xs",
								children: [
									"(",
									s,
									")"
								]
							})
						]
					})
				});
			})()]
		}), a && /* @__PURE__ */ _("div", {
			className: "relative z-0 flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => /* @__PURE__ */ v("button", {
				type: "button",
				onMouseEnter: () => l(t),
				onMouseLeave: () => l(null),
				onPointerEnter: () => l(t),
				onPointerDown: () => l(t),
				onPointerLeave: () => l(null),
				onFocus: () => l(t),
				onBlur: () => l(null),
				className: q("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", c !== null && c !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ _("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: Ye(e.color) }
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-primary text-xs font-semibold",
						children: g(Ze(e.value))
					})
				]
			}, e.name))
		})]
	});
}
//#endregion
//#region src/components/charts/RadarChart.tsx
function dt({ data: e, maxValue: t, size: n = 240, rings: r = 4, labelOffset: i = 18, labelFormatter: a, maxLabelLength: o, valueFormatter: s, ariaLabel: c = "Radar chart", className: l }) {
	let [u, d] = h(null), f = Math.max(80, n), p = Math.max(Ze(t ?? 0), ...e.map((e) => Ze(e.value)), 1), m = f / 2, g = Math.max(1, m - Math.max(0, i) - 12), y = e.length > 0 ? 2 * Math.PI / e.length : 0, b = Math.max(1, Math.floor(r)), x = s ?? String, S = e.map((e, t) => {
		let n = a?.(e.label, e, t) ?? e.label, r = Qe(n, o);
		return {
			displayLabel: r,
			isTruncated: r !== n,
			label: n
		};
	});
	function C(e, t) {
		return [m + t * Math.cos(e - Math.PI / 2), m + t * Math.sin(e - Math.PI / 2)];
	}
	let w = e.map((e, t) => {
		let n = J(Ze(e.value), 0, p) / p * g;
		return C(t * y, n);
	}), T = w.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ v("div", {
		className: q("relative flex flex-col items-center", l),
		children: [/* @__PURE__ */ v("svg", {
			width: f,
			height: f,
			viewBox: `0 0 ${f} ${f}`,
			className: "select-none",
			role: "img",
			"aria-label": c,
			children: [
				e.length > 0 && Array.from({ length: b }, (t, n) => {
					let r = (n + 1) / b * g;
					return /* @__PURE__ */ _("polygon", {
						points: e.map((e, t) => C(t * y, r)).map((e) => `${e[0]},${e[1]}`).join(" "),
						fill: "none",
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .5
					}, n);
				}),
				e.map((e, t) => {
					let [n, r] = C(t * y, g);
					return /* @__PURE__ */ _("line", {
						x1: m,
						y1: m,
						x2: n,
						y2: r,
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .3
					}, t);
				}),
				e.length > 0 && /* @__PURE__ */ _("polygon", {
					points: T,
					fill: "var(--accent)",
					fillOpacity: .15,
					stroke: "var(--accent)",
					strokeWidth: 2,
					strokeLinejoin: "round"
				}),
				w.map((t, n) => {
					let r = u === n, i = x(e[n].value);
					return /* @__PURE__ */ _("circle", {
						cx: t[0],
						cy: t[1],
						r: r ? 5 : 3,
						fill: "var(--accent)",
						stroke: "var(--bg-secondary)",
						strokeWidth: 2,
						onMouseEnter: () => d(n),
						onMouseLeave: () => d(null),
						onPointerEnter: () => d(n),
						onPointerDown: () => d(n),
						onPointerLeave: () => d(null),
						onFocus: () => d(n),
						onBlur: () => d(null),
						tabIndex: 0,
						role: "button",
						"aria-label": `${S[n].label}: ${i}`,
						className: "cursor-pointer",
						style: { transition: "r 150ms" }
					}, n);
				}),
				e.map((e, t) => {
					let n = g + Math.max(0, i), [r, a] = C(t * y, n), o = S[t], s = Math.max(48, o.displayLabel.length * 6 + 12), c = x(e.value);
					return /* @__PURE__ */ v("g", {
						onMouseEnter: () => d(t),
						onMouseLeave: () => d(null),
						onPointerEnter: () => d(t),
						onPointerDown: () => d(t),
						onPointerLeave: () => d(null),
						onFocus: () => d(t),
						onBlur: () => d(null),
						className: "cursor-pointer",
						tabIndex: 0,
						role: "button",
						"aria-label": `${o.label}: ${c}`,
						children: [/* @__PURE__ */ _("rect", {
							x: r - s / 2,
							y: a - 10,
							width: s,
							height: 20,
							fill: "transparent"
						}), /* @__PURE__ */ v("text", {
							x: r,
							y: a,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: u === t ? "var(--text-primary)" : "var(--text-tertiary)",
							fontSize: 10,
							fontWeight: u === t ? 600 : 400,
							style: { transition: "all 150ms" },
							children: [o.isTruncated && /* @__PURE__ */ _("title", { children: o.label }), o.displayLabel]
						})]
					}, e.label);
				})
			]
		}), u !== null && /* @__PURE__ */ _("div", {
			className: "bg-bg-tertiary border-border pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 shadow-lg",
			children: /* @__PURE__ */ v("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ _("span", { className: "bg-accent h-2 w-2 shrink-0 rounded-full" }),
					/* @__PURE__ */ _("span", {
						className: q("text-text-secondary text-xs whitespace-nowrap"),
						children: S[u].label
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-primary text-xs font-semibold",
						children: x(e[u].value)
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/charts/RadialBarChart.tsx
function ft({ segments: e, size: t = 200, strokeWidth: n = 14, gap: r = 6, valueFormatter: i, percentageFormatter: a, showLegend: o = !0, ariaLabel: s = "Radial bar chart", className: c }) {
	let [l, u] = h(null), [d, f] = h({
		x: 0,
		y: 0
	}), p = m(null), g = l?.index ?? null, y = Math.max(1, t), b = Math.max(1, Math.min(n, y)), x = Math.max(0, r), S = y / 2, C = Math.max(0, (y - 40) / 2), w = i ?? String, T = a ?? ((e) => `${Math.round(e)}%`), E = e.reduce((e, t, n) => C - n * (b + x) > 0 ? n : e, -1);
	function D(e) {
		let t = p.current?.getBoundingClientRect();
		t && f({
			x: e.clientX - t.left,
			y: e.clientY - t.top
		});
	}
	function O(e) {
		f({
			x: S,
			y: S
		}), u({
			index: e,
			source: "chart"
		});
	}
	function k(e) {
		let t = Ze(e.max);
		return t <= 0 ? 0 : J(Ze(e.value) / t, 0, 1);
	}
	function A(e) {
		return k(e) * 100;
	}
	return /* @__PURE__ */ v("div", {
		className: q("flex flex-col items-center gap-4", c),
		children: [/* @__PURE__ */ v("div", {
			className: "relative",
			ref: p,
			onPointerMove: D,
			children: [/* @__PURE__ */ v("svg", {
				width: y,
				height: y,
				viewBox: `0 0 ${y} ${y}`,
				className: "select-none",
				role: "img",
				"aria-label": s,
				children: [e.map((e, t) => {
					let n = C - t * (b + x);
					if (n <= 0) return null;
					let r = 2 * Math.PI * n, i = r * k(e), a = r - i, o = Ye(e.color), s = g === t, c = A(e);
					return /* @__PURE__ */ v("g", {
						onMouseEnter: () => u({
							index: t,
							source: "chart"
						}),
						onMouseLeave: () => u(null),
						onPointerEnter: () => u({
							index: t,
							source: "chart"
						}),
						onPointerDown: () => u({
							index: t,
							source: "chart"
						}),
						onPointerLeave: () => u(null),
						onFocus: () => O(t),
						onBlur: () => u(null),
						className: "cursor-pointer",
						tabIndex: 0,
						role: "button",
						"aria-label": `${e.label}: ${T(c)} (${w(e.value)}/${w(e.max)})`,
						children: [/* @__PURE__ */ _("circle", {
							cx: S,
							cy: S,
							r: n,
							fill: "none",
							stroke: "var(--border)",
							strokeWidth: b,
							opacity: .3
						}), /* @__PURE__ */ _("circle", {
							cx: S,
							cy: S,
							r: n,
							fill: "none",
							stroke: o,
							strokeWidth: s ? b + 4 : b,
							strokeDasharray: `${i} ${a}`,
							strokeLinecap: "round",
							transform: `rotate(-90 ${S} ${S})`,
							opacity: g !== null && !s ? .4 : 1,
							className: "pointer-events-none",
							style: { transition: "all 150ms ease-out" }
						})]
					}, e.label);
				}), E >= 0 && (() => {
					let t = C - E * (b + x) - b / 2;
					return /* @__PURE__ */ _("circle", {
						cx: S,
						cy: S,
						r: Math.max(0, t),
						fill: "transparent",
						onMouseEnter: () => u({
							index: E,
							source: "chart"
						}),
						onMouseLeave: () => u(null),
						onPointerEnter: () => u({
							index: E,
							source: "chart"
						}),
						onPointerDown: () => u({
							index: E,
							source: "chart"
						}),
						onPointerLeave: () => u(null),
						onFocus: () => O(E),
						onBlur: () => u(null),
						tabIndex: 0,
						role: "button",
						"aria-label": `${e[E].label}: ${T(A(e[E]))}`,
						className: "cursor-pointer"
					});
				})()]
			}), g !== null && l?.source === "chart" && (() => {
				let t = e[g];
				if (!t) return null;
				let n = A(t), r = Ye(t.color), i = T(n), a = `${w(t.value)}/${w(t.max)}`;
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: nt({
						anchorX: d.x,
						anchorY: d.y,
						boundsHeight: y,
						boundsWidth: y,
						height: 30,
						margin: 4,
						offset: 8,
						width: et([`${t.label} ${i} ${a}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ v("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ _("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: r }
							}),
							/* @__PURE__ */ _("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: t.label
							}),
							/* @__PURE__ */ _("span", {
								className: "text-text-primary text-xs font-semibold",
								children: i
							}),
							/* @__PURE__ */ v("span", {
								className: "text-text-tertiary text-2xs",
								children: [
									"(",
									a,
									")"
								]
							})
						]
					})
				});
			})()]
		}), o && /* @__PURE__ */ _("div", {
			className: "flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => {
				let n = A(e);
				return /* @__PURE__ */ v("button", {
					type: "button",
					onMouseEnter: () => u({
						index: t,
						source: "legend"
					}),
					onMouseLeave: () => u(null),
					onPointerEnter: () => u({
						index: t,
						source: "legend"
					}),
					onPointerDown: () => u({
						index: t,
						source: "legend"
					}),
					onPointerLeave: () => u(null),
					onFocus: () => u({
						index: t,
						source: "legend"
					}),
					onBlur: () => u(null),
					className: q("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", g !== null && g !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ _("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: Ye(e.color) }
						}),
						/* @__PURE__ */ _("span", {
							className: "text-text-secondary text-xs",
							children: e.label
						}),
						/* @__PURE__ */ _("span", {
							className: "text-text-primary text-xs font-semibold",
							children: T(n)
						})
					]
				}, e.label);
			})
		})]
	});
}
//#endregion
//#region src/components/charts/SparkLine.tsx
function pt({ data: e, width: t = 60, height: n = 20, minValue: r, maxValue: i, strokeWidth: a = 1.5, padding: o = 1, color: s = "var(--accent)", area: c = !1, areaOpacity: l = .15, ariaLabel: u = "Sparkline chart", className: d }) {
	if (e.length < 2) return null;
	let f = Math.max(1, t), p = Math.max(1, n), m = Math.max(0, Math.min(o, p / 2, f / 2)), h = r ?? Math.min(...e), g = i ?? Math.max(...e), y = Math.min(h, g), b = Math.max(h, g), x = b - y, S = Math.max(1, f - m * 2), C = Math.max(1, p - m * 2), w = e.map((t, n) => ({
		x: m + n / (e.length - 1) * S,
		y: x === 0 ? p / 2 : m + C - (J(t, y, b) - y) / x * C
	})), T = w.map(({ x: e, y: t }) => `${e},${t}`).join(" "), E = w.length > 0 ? [
		`${w[0].x},${p - m}`,
		...w.map(({ x: e, y: t }) => `${e},${t}`),
		`${w[w.length - 1].x},${p - m}`
	].join(" ") : "";
	return /* @__PURE__ */ v("svg", {
		width: f,
		height: p,
		viewBox: `0 0 ${f} ${p}`,
		className: q("inline-block", d),
		role: "img",
		"aria-label": u,
		children: [c && /* @__PURE__ */ _("polygon", {
			points: E,
			fill: s,
			opacity: l
		}), /* @__PURE__ */ _("polyline", {
			points: T,
			fill: "none",
			stroke: s,
			strokeWidth: a,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region src/components/charts/StackedBarChart.tsx
var X = {
	top: 20,
	right: 12,
	bottom: 30,
	left: 48
}, mt = 600, ht = 4;
function gt(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})T(\d{2})/.exec(e);
	if (t) {
		let [, e, n, r, i] = t;
		return new Date(Date.UTC(Number(e), Number(n) - 1, Number(r), Number(i))).toLocaleString(void 0, {
			month: "short",
			day: "numeric",
			hour: "numeric",
			timeZone: "UTC"
		});
	}
	let n = /^(\d{4})-(\d{2})-(\d{2})/.exec(e);
	if (!n) return e;
	let [, r, i, a] = n;
	return new Date(Date.UTC(Number(r), Number(i) - 1, Number(a))).toLocaleDateString(void 0, {
		month: "short",
		day: "numeric",
		timeZone: "UTC"
	});
}
function _t(e, t) {
	let n = e[t];
	if (typeof n == "number") return Number.isFinite(n) ? n : 0;
	if (typeof n == "string") {
		let e = Number(n);
		return Number.isFinite(e) ? e : 0;
	}
	return 0;
}
function vt(e, t) {
	return t.reduce((t, n) => t + Math.max(0, _t(e, n.key)), 0);
}
function yt(e, t, n, r, i) {
	let a = Math.min(i, Math.max(0, n / 2), Math.max(0, r));
	return a <= 0 ? `M ${e} ${t} H ${e + n} V ${t + r} H ${e} Z` : [
		`M ${e} ${t + r}`,
		`V ${t + a}`,
		`Q ${e} ${t} ${e + a} ${t}`,
		`H ${e + n - a}`,
		`Q ${e + n} ${t} ${e + n} ${t + a}`,
		`V ${t + r}`,
		"Z"
	].join(" ");
}
function bt({ data: e, segments: t, height: n = 220, ariaLabel: r = "Stacked bar chart", tooltipRows: i, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 6, barGap: c, minBarWidth: l = 1, className: u }) {
	let [d, f] = h(null), p = Math.max(X.top + X.bottom + 1, n), m = mt - X.left - X.right, y = Math.max(1, p - X.top - X.bottom), b = e.reduce((e, n) => Math.max(e, vt(n, t)), 1), x = Math.ceil(b / 2), S = x > 0 && x < b, C = c ?? (e.length > 60 ? 2 : e.length > 30 ? 3 : 6), w = Math.max(1, l), T = e.length > 1 ? Math.max(0, (m - e.length * w) / Math.max(e.length - 1, 1)) : 0, E = e.length > 1 ? Math.min(Math.max(0, C), T) : 0, D = e.length > 0 ? (m - E * Math.max(e.length - 1, 0)) / e.length : 0, O = new Set(Xe(e.length, s)), k = d === null ? null : e[d], A = a ?? Je, j = o ?? ((e) => e.toLocaleString());
	function M(e) {
		return X.left + e * (D + E);
	}
	function N(e) {
		return e / b * y;
	}
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${mt} ${p}`,
		className: q("select-none", u),
		role: "img",
		"aria-label": r,
		children: [
			/* @__PURE__ */ _("text", {
				x: X.left - 8,
				y: X.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(b)
			}),
			S && /* @__PURE__ */ _("text", {
				x: X.left - 8,
				y: X.top + y / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(x)
			}),
			/* @__PURE__ */ _("text", {
				x: X.left - 8,
				y: X.top + y,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: X.left,
				y1: X.top + y,
				x2: X.left + m,
				y2: X.top + y,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: X.left,
				y1: X.top + y / 2,
				x2: X.left + m,
				y2: X.top + y / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, n) => {
				let r = M(n), i = d === n, a = 0, o = t.map((t) => ({
					segment: t,
					value: Math.max(0, _t(e, t.key))
				})).filter(({ value: e }) => e > 0);
				return /* @__PURE__ */ v("g", {
					onMouseEnter: () => f(n),
					onMouseLeave: () => f(null),
					onPointerEnter: () => f(n),
					onPointerDown: () => f(n),
					onPointerLeave: () => f(null),
					onFocus: () => f(n),
					onBlur: () => f(null),
					tabIndex: 0,
					role: "button",
					"aria-label": `${gt(e.date)}: ${j(vt(e, t))}`,
					children: [
						/* @__PURE__ */ _("rect", {
							x: r,
							y: X.top,
							width: D,
							height: y,
							fill: "transparent"
						}),
						o.map(({ segment: e, value: t }, n) => {
							let s = N(t), c = X.top + y - a - s, l = n === o.length - 1;
							return a += s, l ? /* @__PURE__ */ _("path", {
								d: yt(r, c, D, s, ht),
								fill: e.color,
								opacity: i ? 1 : e.opacity ?? .9
							}, e.key) : /* @__PURE__ */ _("rect", {
								x: r,
								y: c,
								width: D,
								height: s,
								fill: e.color,
								opacity: i ? 1 : e.opacity ?? .9
							}, e.key);
						}),
						O.has(n) && /* @__PURE__ */ _("text", {
							x: r + D / 2,
							y: p - 5,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: gt(e.date)
						})
					]
				}, `${e.date}-${n}`);
			}),
			k && d !== null && /* @__PURE__ */ _("g", {
				pointerEvents: "none",
				children: (() => {
					let e = M(d) + D / 2, n = i?.(k) ?? t.map((e) => ({
						color: e.color,
						label: e.label,
						value: _t(k, e.key)
					})), r = vt(k, t), a = tt(e, X.top + y - N(r), {
						boundsHeight: p,
						boundsWidth: mt,
						height: 28 + n.length * 15,
						offset: 8,
						width: et([gt(k.date), ...n.map((e) => `${e.label} ${j(e.value)}`)], {
							maxWidth: 240,
							minWidth: 150
						})
					}), o = a.x + 10, s = a.x + a.width - 10;
					return /* @__PURE__ */ v(g, { children: [
						/* @__PURE__ */ _("line", {
							x1: e,
							y1: X.top,
							x2: e,
							y2: X.top + y,
							stroke: "var(--border-strong)",
							strokeWidth: 1,
							strokeDasharray: "3 3"
						}),
						/* @__PURE__ */ _("rect", {
							x: a.x,
							y: a.y,
							width: a.width,
							height: a.height,
							rx: 4,
							fill: "var(--bg-tertiary)",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ _("text", {
							x: o,
							y: a.y + 14,
							fill: "var(--text-primary)",
							fontSize: 10,
							fontWeight: 600,
							children: gt(k.date)
						}),
						n.map((e, t) => {
							let n = a.y + 30 + t * 15;
							return /* @__PURE__ */ v("g", { children: [
								e.color && /* @__PURE__ */ _("rect", {
									x: o,
									y: n - 6,
									width: 6,
									height: 6,
									rx: 1,
									fill: e.color
								}),
								/* @__PURE__ */ _("text", {
									x: e.color ? o + 12 : o,
									y: n,
									fill: "var(--text-secondary)",
									fontSize: 10,
									children: e.label
								}),
								/* @__PURE__ */ _("text", {
									x: s,
									y: n,
									textAnchor: "end",
									fill: "var(--text-primary)",
									fontSize: 10,
									fontWeight: 600,
									children: j(e.value)
								})
							] }, e.label);
						})
					] });
				})()
			})
		]
	});
}
//#endregion
//#region src/components/charts/VerticalBarChart.tsx
var xt = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], Z = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
}, St = 600;
function Ct({ data: e, height: t = 180, maxValue: n, valueFormatter: r, tooltipValueFormatter: i, labelFormatter: a, maxLabelLength: o, xLabelCount: s = 7, barGap: c = 6, minBarWidth: l = 4, ariaLabel: u = "Vertical bar chart", className: d }) {
	let [f, p] = h(null), m = Math.max(Z.top + Z.bottom + 1, t), y = St - Z.left - Z.right, b = Math.max(1, m - Z.top - Z.bottom), x = n === void 0 ? Math.max(...e.map((e) => Ze(e.value)), 1) : Math.max(Ze(n), 1), S = Math.max(0, c), C = Math.max(1, l), w = e.length > 1 ? Math.max(0, (y - e.length * C) / Math.max(e.length - 1, 1)) : 0, T = e.length > 1 ? Math.min(S, w) : 0, E = e.length > 0 ? Math.max(0, (y - T * Math.max(e.length - 1, 0)) / e.length) : 0, D = r ?? Je, O = i ?? ((e) => e.toLocaleString()), k = new Set(Xe(e.length, s));
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${St} ${m}`,
		className: q("select-none", d),
		role: "img",
		"aria-label": u,
		children: [
			/* @__PURE__ */ _("text", {
				x: Z.left - 6,
				y: Z.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: D(x)
			}),
			/* @__PURE__ */ _("text", {
				x: Z.left - 6,
				y: Z.top + b,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: Z.left,
				y1: Z.top + b,
				x2: Z.left + y,
				y2: Z.top + b,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: Z.left,
				y1: Z.top + b / 2,
				x2: Z.left + y,
				y2: Z.top + b / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, t) => {
				let n = Z.left + t * (E + T), r = J(Ze(e.value), 0, x) / x * b, i = Z.top + b - r, s = f === t, c = a?.(e.label, e, t) ?? e.label, l = Qe(c, o), u = l !== c, d = O(e.value);
				return /* @__PURE__ */ v("g", {
					onMouseEnter: () => p(t),
					onMouseLeave: () => p(null),
					onPointerEnter: () => p(t),
					onPointerDown: () => p(t),
					onPointerLeave: () => p(null),
					onFocus: () => p(t),
					onBlur: () => p(null),
					tabIndex: 0,
					role: "button",
					"aria-label": `${c}: ${d}`,
					children: [
						/* @__PURE__ */ _("rect", {
							x: n,
							y: Z.top,
							width: E,
							height: b,
							fill: "transparent"
						}),
						/* @__PURE__ */ _("rect", {
							x: n,
							y: i,
							width: E,
							height: r,
							fill: Ye(e.color),
							rx: 6,
							opacity: s ? 1 : xt[t % xt.length],
							style: { transition: "all 150ms" }
						}),
						k.has(t) && /* @__PURE__ */ v("text", {
							x: n + E / 2,
							y: m - 4,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: [u && /* @__PURE__ */ _("title", { children: c }), l]
						}),
						s && (() => {
							let e = tt(n + E / 2, i, {
								boundsHeight: m,
								boundsWidth: St,
								height: 24,
								offset: 8,
								width: et([c, d], {
									maxWidth: 180,
									minWidth: 72
								})
							}), t = e.x + e.width / 2;
							return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("rect", {
								x: e.x,
								y: e.y,
								width: e.width,
								height: e.height,
								rx: 4,
								fill: "var(--bg-tertiary)",
								stroke: "var(--border)",
								strokeWidth: 1
							}), /* @__PURE__ */ _("text", {
								x: t,
								y: e.y + 15,
								textAnchor: "middle",
								fill: "var(--text-primary)",
								fontSize: 10,
								fontWeight: 600,
								children: d
							})] });
						})()
					]
				}, e.label);
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/navigation.ts
function wt(e, t) {
	if (e.active !== void 0) return e.active;
	if (!t) return !1;
	if (e.end ?? e.path === "/") return t === e.path;
	let n = e.path.endsWith("/") ? e.path : `${e.path}/`;
	return t === e.path || t.startsWith(n);
}
function Tt(e, t, n, r) {
	let i = e.currentTarget.getAttribute("target");
	e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || i && i !== "_self" || (n && (e.preventDefault(), n(t)), r?.());
}
function Et(e, t) {
	if (t) {
		t(e);
		return;
	}
	typeof window < "u" && window.location.assign(e);
}
//#endregion
//#region src/components/app-shell/BottomNav.tsx
function Dt({ items: e, currentPath: t, onNavigate: n, className: r }) {
	return e.length === 0 ? null : /* @__PURE__ */ _("nav", {
		className: q("bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ _("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = wt(e, t);
				return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
					href: e.path,
					onClick: (t) => Tt(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					"aria-label": e.shortLabel && e.shortLabel !== e.label ? `${e.shortLabel}, ${e.label}` : void 0,
					className: q("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
					children: [/* @__PURE__ */ _(e.icon, {
						className: "h-5 w-5",
						"aria-hidden": "true"
					}), /* @__PURE__ */ _("span", {
						className: "text-2xs",
						children: e.shortLabel ?? e.label
					})]
				}) }, e.path);
			})
		})
	});
}
//#endregion
//#region src/hooks/useFocusTrap.ts
var Ot = "a[href], button:not([disabled]), input:not([disabled]):not([type=\"hidden\"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function kt(e, t, { initialFocusRef: n, returnFocusRef: r } = {}) {
	l(() => {
		let i = e.current;
		if (!t || !i) return;
		let a = i.ownerDocument, o = a.activeElement, s = r?.current, c = () => {
			let e = Array.from(i.querySelectorAll(Ot)).filter((e) => e.tabIndex >= 0 && !e.matches(":disabled") && !e.closest("[hidden], [inert]") && e.getClientRects().length > 0);
			return e.filter((t) => {
				if (!t.matches("input[type=\"radio\"]")) return !0;
				let n = t;
				if (!n.name) return !0;
				let r = e.filter((e) => e.matches("input[type=\"radio\"]") && e.name === n.name && e.form === n.form && e.getRootNode() === n.getRootNode());
				return n === (r.find((e) => e.checked) ?? r[0]);
			});
		}, l = n?.current;
		l && i.contains(l) ? l.focus() : (c()[0] ?? i).focus();
		let u = (e) => {
			if (e.key !== "Tab") return;
			let t = c();
			if (!t.length) {
				e.preventDefault(), i.focus();
				return;
			}
			let n = t[0], r = t[t.length - 1];
			e.shiftKey && (a.activeElement === n || !t.includes(a.activeElement)) ? (e.preventDefault(), r.focus()) : !e.shiftKey && (a.activeElement === r || !t.includes(a.activeElement)) && (e.preventDefault(), n.focus());
		};
		return a.addEventListener("keydown", u), () => {
			a.removeEventListener("keydown", u);
			let e = s ?? o;
			e?.isConnected && e.focus();
		};
	}, [
		t,
		e,
		n,
		r
	]);
}
//#endregion
//#region src/lib/overlayStack.ts
function At(e) {
	return { parent: e };
}
var jt = [];
function Mt(e, t) {
	for (let n = t.parent; n; n = n.parent) if (n === e) return !0;
	return !1;
}
function Nt(e) {
	if (e.key !== "Escape" || e.defaultPrevented) return;
	let t = e.currentTarget;
	for (let n = jt.length - 1; n >= 0; n--) if (jt[n].doc === t) {
		jt[n].onEscape(e);
		return;
	}
}
function Pt(e, t, n = document) {
	let r = {
		node: e,
		doc: n,
		onEscape: t
	};
	jt.some((e) => e.doc === n) || n.addEventListener("keydown", Nt);
	let i = jt.findIndex((t) => Mt(e, t.node));
	return i === -1 ? jt.push(r) : jt.splice(i, 0, r), () => {
		let e = jt.indexOf(r);
		e !== -1 && (jt.splice(e, 1), jt.some((e) => e.doc === n) || n.removeEventListener("keydown", Nt));
	};
}
var Ft = /* @__PURE__ */ new Map();
function It(e = document) {
	let t = Ft.get(e);
	t || (t = {
		count: 0,
		overflow: e.body.style.overflow
	}, Ft.set(e, t), e.body.style.overflow = "hidden"), t.count++;
	let n = !1;
	return () => {
		if (n) return;
		n = !0;
		let t = Ft.get(e);
		t && (t.count--, !(t.count > 0) && (Ft.delete(e), e.body.style.overflow = t.overflow));
	};
}
//#endregion
//#region src/hooks/useOverlayStack.ts
var Lt = r(null);
function Rt(e, t, n) {
	let r = c(Lt), [i] = h(() => At(r)), a = m(t);
	return f(() => {
		a.current = t;
	}), l(() => {
		if (e) return Pt(i, (e) => a.current(e), n?.current?.ownerDocument ?? document);
	}, [
		e,
		i,
		n
	]), i;
}
function zt(e, t) {
	l(() => {
		if (e) return It(t?.current?.ownerDocument ?? document);
	}, [e, t]);
}
//#endregion
//#region src/components/app-shell/commandPaletteEvents.ts
var Bt = "open-command-palette", Vt = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function Ht(e = Bt) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
function Ut(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
//#region src/components/app-shell/CommandPalette.tsx
function Wt(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function Gt({ items: e, eventName: t = Bt, shortcut: n = Vt, placeholder: r = "Search pages...", emptyLabel: i = "No results found", onNavigate: a, onSelect: o }) {
	let [c, d] = h(!1), [f, p] = h(""), [g, y] = h(0), b = m(null), x = m(null), S = u();
	kt(x, c), Rt(c, () => d(!1), x);
	let C = e.filter((e) => Wt(e, f)), w = s(() => {
		d(!0), p(""), y(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	l(() => {
		let e = (e) => {
			Ut(e, n) && (e.preventDefault(), c ? d(!1) : w());
		}, r = () => {
			c || w();
		};
		return document.addEventListener("keydown", e), document.addEventListener(t, r), () => {
			document.removeEventListener("keydown", e), document.removeEventListener(t, r);
		};
	}, [
		t,
		c,
		w,
		n
	]);
	function T(e) {
		p(e), y(0);
	}
	function E(e) {
		o?.(e), Et(e.path, a), d(!1);
	}
	function D(e) {
		e.key === "ArrowDown" ? (e.preventDefault(), y((e) => Math.min(e + 1, C.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), y((e) => Math.max(e - 1, 0))) : e.key === "Enter" && C[g] && E(C[g]);
	}
	return c ? /* @__PURE__ */ v("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh]",
		children: [/* @__PURE__ */ _("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: () => d(!1)
		}), /* @__PURE__ */ v("div", {
			ref: x,
			className: "bg-bg-secondary border-border animate-scale-in relative z-50 mx-4 w-full max-w-[520px] overflow-hidden rounded-xl border shadow-lg",
			onKeyDown: D,
			children: [/* @__PURE__ */ v("div", {
				className: "border-border flex items-center gap-3 border-b px-4",
				children: [
					/* @__PURE__ */ _(ue, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
					/* @__PURE__ */ _("input", {
						ref: b,
						type: "text",
						role: "combobox",
						"aria-expanded": C.length > 0,
						"aria-controls": S,
						"aria-activedescendant": C[g] ? `${S}-${g}` : void 0,
						"aria-autocomplete": "list",
						"aria-label": "Search pages",
						value: f,
						onChange: (e) => T(e.target.value),
						placeholder: r,
						className: "text-text-primary placeholder:text-text-disabled h-11 flex-1 bg-transparent text-sm focus:outline-none"
					}),
					/* @__PURE__ */ _("kbd", {
						className: "text-2xs bg-bg-tertiary text-text-tertiary border-border hidden items-center rounded border px-1.5 py-0.5 font-mono font-medium sm:inline-flex",
						children: "Esc"
					})
				]
			}), /* @__PURE__ */ _("ul", {
				id: S,
				role: "listbox",
				"aria-label": "Pages",
				className: "max-h-[320px] overflow-y-auto px-2 py-2",
				children: C.length === 0 ? /* @__PURE__ */ _("li", {
					className: "text-text-tertiary px-3 py-6 text-center text-xs",
					children: i
				}) : C.map((e, t) => /* @__PURE__ */ v("li", {
					id: `${S}-${t}`,
					role: "option",
					"aria-selected": t === g,
					onClick: () => E(e),
					className: q("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === g ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
					children: [
						/* @__PURE__ */ _("span", {
							className: "shrink-0 opacity-60",
							children: /* @__PURE__ */ _(e.icon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ _("span", {
							className: "min-w-0 flex-1 text-xs font-medium",
							children: e.label
						}),
						e.badge && /* @__PURE__ */ _("span", {
							className: "shrink-0",
							children: e.badge
						})
					]
				}, e.path))
			})]
		})]
	}) : null;
}
//#endregion
//#region src/hooks/usePortalContainer.ts
var Kt = r(null);
function qt() {
	return c(Kt);
}
function Jt(e) {
	let [t, n] = h(null);
	return [t, s((t) => {
		e.current = t, n(t);
	}, [e])];
}
//#endregion
//#region src/components/app-shell/MobileDrawer.tsx
function Yt({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ _(g, { children: e.logo }) : /* @__PURE__ */ v("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ _(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ _("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function Xt({ open: e, onClose: t, items: n, topBarNavItems: r = [], topBarNavLabel: i = "Primary", brand: a, currentPath: o, onNavigate: s, headerActions: c, className: l }) {
	let u = m(null), [d, f] = Jt(u);
	kt(u, e);
	let p = Rt(e, () => t(), u);
	if (zt(e, u), !e) return null;
	let h = r.length > 0;
	return /* @__PURE__ */ _(Lt.Provider, {
		value: p,
		children: /* @__PURE__ */ _(Kt.Provider, {
			value: d,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: t
				}), /* @__PURE__ */ v("div", {
					ref: f,
					className: q("bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", l),
					children: [
						/* @__PURE__ */ v("div", {
							className: "border-border flex h-11 items-center justify-between border-b px-4",
							children: [/* @__PURE__ */ _(Yt, { brand: a }), /* @__PURE__ */ _("button", {
								type: "button",
								onClick: t,
								className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
								"aria-label": "Close menu",
								children: /* @__PURE__ */ _(ve, { className: "h-4 w-4" })
							})]
						}),
						c && /* @__PURE__ */ _("div", {
							className: "border-border border-b px-4 py-2",
							children: c
						}),
						/* @__PURE__ */ v("nav", {
							className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2",
							children: [h && /* @__PURE__ */ v("div", {
								className: "border-border mb-2 border-b pb-2",
								children: [/* @__PURE__ */ _("div", {
									className: "text-text-tertiary px-3 py-1 text-2xs font-medium uppercase",
									children: i
								}), /* @__PURE__ */ _("ul", {
									className: "space-y-0.5",
									"aria-label": i,
									children: r.map((e) => {
										let n = e.icon, r = wt(e, o), i = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
										return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
											href: e.href ?? e.path,
											target: e.target,
											rel: i,
											onClick: (n) => {
												if (e.reloadDocument) {
													t();
													return;
												}
												Tt(n, e.path, s, t);
											},
											"aria-current": r ? "page" : void 0,
											className: q("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", r ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
											children: [
												n && /* @__PURE__ */ _(n, { className: "h-4 w-4" }),
												/* @__PURE__ */ _("span", {
													className: "min-w-0 flex-1 text-sm",
													children: e.label
												}),
												e.badge && /* @__PURE__ */ _("span", {
													className: "shrink-0",
													children: e.badge
												})
											]
										}) }, `${e.label}-${e.path}`);
									})
								})]
							}), /* @__PURE__ */ _("ul", {
								className: "space-y-0.5",
								children: n.map((e) => {
									let n = wt(e, o);
									return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
										href: e.path,
										onClick: (n) => Tt(n, e.path, s, t),
										"aria-current": n ? "page" : void 0,
										className: q("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
										children: [
											/* @__PURE__ */ _(e.icon, { className: "h-4 w-4" }),
											/* @__PURE__ */ _("span", {
												className: "min-w-0 flex-1 text-sm",
												children: e.label
											}),
											e.badge && /* @__PURE__ */ _("span", {
												className: "shrink-0",
												children: e.badge
											})
										]
									}) }, e.path);
								})
							})]
						})
					]
				})]
			})
		})
	});
}
//#endregion
//#region src/config/theme.ts
var Zt = [
	{
		value: "dark",
		label: "Dark",
		icon: ee,
		preview: {
			bg: "#0d0f12",
			fg: "#2a2e38"
		}
	},
	{
		value: "light",
		label: "Light",
		icon: pe,
		preview: {
			bg: "#f5f5f5",
			fg: "#d4d4d8"
		}
	},
	{
		value: "lightInverted",
		label: "Light Inverted",
		icon: pe,
		preview: {
			bg: "#f1f2f4",
			fg: "#ffffff"
		}
	},
	{
		value: "monokai",
		label: "Monokai",
		icon: te,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: K,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: be,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: be,
		preview: {
			bg: "#e4e4e7",
			fg: "#d4d4d8"
		}
	},
	{
		value: "hashiTheme",
		label: "HashiTheme",
		icon: T,
		preview: {
			bg: "#ffffff",
			fg: "#364153"
		}
	}
], Qt = new Set([
	"light",
	"lightInverted",
	"cyberBrutalLight",
	"hashiTheme"
]);
function $t(e) {
	return Qt.has(e);
}
var en = Zt.filter((e) => $t(e.value)), tn = Zt.filter((e) => !$t(e.value)), nn = {
	uiFont: "inter",
	headingFont: "inter",
	proseFont: "inter",
	controlFont: "inter",
	labelFont: "inter",
	navigationFont: "inter",
	dataFont: "inter",
	codeFont: "jetbrains-mono",
	fontSize: 15,
	borderRadius: 6,
	borderWidth: 1,
	tracking: .05,
	lineHeight: 1.45,
	density: .25
}, rn = {
	uiFont: "jetbrains-mono",
	headingFont: "jetbrains-mono",
	proseFont: "jetbrains-mono",
	controlFont: "jetbrains-mono",
	labelFont: "jetbrains-mono",
	navigationFont: "jetbrains-mono",
	dataFont: "jetbrains-mono",
	codeFont: "jetbrains-mono",
	fontSize: 15,
	borderRadius: 0,
	borderWidth: 1,
	tracking: .2,
	lineHeight: 1.4,
	density: .22
}, an = {
	dark: nn,
	light: nn,
	lightInverted: nn,
	monokai: nn,
	solarized: nn,
	cyberBrutalDark: rn,
	cyberBrutalLight: rn,
	hashiTheme: {
		uiFont: "inter",
		headingFont: "archivo-expanded",
		proseFont: "pt-serif",
		controlFont: "inter",
		labelFont: "inter",
		navigationFont: "inter",
		dataFont: "inter",
		codeFont: "jetbrains-mono",
		fontSize: 14,
		borderRadius: 6,
		borderWidth: 1,
		tracking: 0,
		lineHeight: 1.45,
		density: .25
	}
}, on = [
	{
		value: "archivo-expanded",
		label: "Archivo Expanded"
	},
	{
		value: "inter",
		label: "Inter"
	},
	{
		value: "jetbrains-mono",
		label: "JetBrains Mono"
	},
	{
		value: "pt-serif",
		label: "PT Serif"
	},
	{
		value: "system",
		label: "System"
	}
], sn = [
	{
		value: "purple",
		color: "#7C5CFC"
	},
	{
		value: "blue",
		color: "#3B82F6"
	},
	{
		value: "green",
		color: "#22C55E"
	},
	{
		value: "teal",
		color: "#14B8A6"
	},
	{
		value: "orange",
		color: "#F97316"
	},
	{
		value: "red",
		color: "#EF4444"
	},
	{
		value: "pink",
		color: "#EC4899"
	},
	{
		value: "indigo",
		color: "#6366F1"
	}
], cn = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, ln = [
	"bottom",
	"top",
	"right",
	"left"
];
function un(e, t, n) {
	switch (n) {
		case "top": return e.top - t.top;
		case "bottom": return t.bottom - e.bottom;
		case "left": return e.left - t.left;
		case "right": return t.right - e.right;
	}
}
function dn(e, t, n, r) {
	return Math.min(Math.max(e, n), r - t);
}
function fn(e, t, n, r) {
	return r === "start" ? e : r === "end" ? t - n : (e + t) / 2 - n / 2;
}
function pn(e, t, { size: { width: n, height: r }, bounds: i, margin: a, gap: o, align: s = "center" }) {
	return e === "top" || e === "bottom" ? {
		left: dn(fn(t.left, t.right, n, s), n, i.left + a, i.right - a),
		top: e === "bottom" ? t.bottom + o : t.top - o - r
	} : {
		left: e === "right" ? t.right + o : t.left - o - n,
		top: dn(fn(t.top, t.bottom, r, s), r, i.top + a, i.bottom - a)
	};
}
function mn(e, t, n) {
	let { size: { width: r, height: i }, bounds: a, margin: o } = n, s = a.left + o, c = a.right - o, l = a.top + o, u = a.bottom - o;
	if (r > c - s || i > u - l) return null;
	let { left: d, top: f } = pn(e, t, n);
	return d >= s && d + r <= c && f >= l && f + i <= u ? {
		side: e,
		left: d,
		top: f
	} : null;
}
function hn(e, t, n) {
	if (!t) return null;
	let { bounds: r } = n;
	if (!(t.right > r.left && t.left < r.right && t.bottom > r.top && t.top < r.bottom)) return null;
	let i = e === "auto" ? [...ln].sort((e, n) => un(t, r, n) - un(t, r, e)) : [e, cn[e]];
	for (let e of i) {
		let r = mn(e, t, n);
		if (r) return r;
	}
	return null;
}
function gn(e, t, n, r) {
	return Math.max(Math.min(e, r - t), n);
}
function _n(e, t, n) {
	let r = hn(e, t, n);
	if (r) return r;
	let { size: { width: i, height: a }, bounds: o, margin: s } = n, c = cn[e], l = un(t, o, c) > un(t, o, e) ? c : e, { left: u, top: d } = pn(l, t, n);
	return {
		side: l,
		left: gn(u, i, o.left + s, o.right - s),
		top: gn(d, a, o.top + s, o.bottom - s)
	};
}
//#endregion
//#region src/hooks/useAnchoredPopup.ts
function vn(e, t) {
	let n = {
		left: Math.max(e.left, t.left),
		top: Math.max(e.top, t.top),
		right: Math.min(e.right, t.right),
		bottom: Math.min(e.bottom, t.bottom)
	};
	return n.left < n.right && n.top < n.bottom ? n : null;
}
function yn(e, t) {
	let n = vn(e.getBoundingClientRect(), t), r = e.ownerDocument.defaultView;
	for (let t = e.parentElement; n && t && t !== e.ownerDocument.documentElement; t = t.parentElement) {
		let e = r?.getComputedStyle(t);
		e && (e.overflowX !== "visible" || e.overflowY !== "visible") && (n = vn(n, t.getBoundingClientRect()));
	}
	return n !== null;
}
function bn(e) {
	let t = e.createElement("div");
	return t.setAttribute("aria-hidden", "true"), t.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none", t;
}
function xn(e) {
	let t = null;
	return {
		measure() {
			let n = e.parentElement;
			if (!n) return {
				left: 0,
				top: 0
			};
			t?.parentElement !== n && (t?.remove(), t = bn(e.ownerDocument), n.appendChild(t));
			let { left: r, top: i } = t.getBoundingClientRect();
			return {
				left: r,
				top: i
			};
		},
		release() {
			t?.remove(), t = null;
		}
	};
}
var Sn = (e, t) => e.length !== t.length || e.some((e, n) => Math.abs(e - t[n]) > .5);
function Cn(e, t, n, { side: r, align: i = "center", gap: a = 4, margin: o = 8, onAnchorHidden: s, matchAnchorWidth: c = !1 }) {
	let l = m(s);
	f(() => {
		l.current = s;
	}), f(() => {
		let s = n.current;
		if (!e || !s) return;
		let u = s.ownerDocument, d = u.defaultView ?? window, f = xn(s), p = [], m = (e) => {
			let t = e.getBoundingClientRect(), n = f.measure();
			return [
				t.left,
				t.top,
				t.width,
				t.height,
				n.left,
				n.top
			];
		}, h = (e) => {
			let n = t.current;
			if (!n) return;
			let f = u.documentElement, h = {
				left: 0,
				top: 0,
				right: f.clientWidth || d.innerWidth,
				bottom: f.clientHeight || d.innerHeight
			};
			if (e && l.current && !yn(n, h)) {
				l.current();
				return;
			}
			let g = n.getBoundingClientRect();
			if (c) {
				let e = n instanceof HTMLElement ? n.offsetWidth : g.width;
				s.style.width = `${e}px`;
			}
			let _ = _n(r, g, {
				size: {
					width: s.offsetWidth,
					height: s.offsetHeight
				},
				bounds: h,
				margin: o,
				gap: a,
				align: i
			});
			p = m(n), s.style.left = `${_.left - p[4]}px`, s.style.top = `${_.top - p[5]}px`, s.dataset.side = _.side;
		}, g = () => {
			let e = t.current;
			e && Sn(m(e), p) && h(!1);
		}, _ = 0, v = () => {
			g(), _ = d.requestAnimationFrame(v);
		}, y = (e) => {
			e.target instanceof Node && s.contains(e.target) || h(!0);
		}, b = () => h(!0);
		h(!1), d.addEventListener("resize", b), d.addEventListener("scroll", y, !0);
		let x = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => h(!1));
		return x?.observe(s), t.current && x?.observe(t.current), u.addEventListener("animationend", g, !0), u.addEventListener("transitionend", g, !0), _ = d.requestAnimationFrame(v), () => {
			d.removeEventListener("resize", b), d.removeEventListener("scroll", y, !0), u.removeEventListener("animationend", g, !0), u.removeEventListener("transitionend", g, !0), d.cancelAnimationFrame(_), x?.disconnect(), f.release();
		};
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		c
	]);
}
function wn(e, t, n, r) {
	let i = m(r);
	f(() => {
		i.current = r;
	}), f(() => {
		let r = n.current;
		if (!e || !r) return;
		let a = r.ownerDocument, o = a.defaultView ?? window, s = xn(r), c = [], l = () => {
			let e = t.current;
			if (!e) return;
			let n = e.getBoundingClientRect(), l = s.measure(), u = [
				n.left,
				n.top,
				n.width,
				n.height,
				l.left,
				l.top
			];
			if (!Sn(u, c)) return;
			c = u;
			let d = a.documentElement.clientWidth || o.innerWidth, f = i.current(n, d);
			r.style.left = `${f.left - l.left}px`, r.style.top = `${f.top - l.top}px`, f.width !== void 0 && (r.style.width = `${f.width}px`);
		};
		l();
		let u = 0, d = () => {
			l(), u = o.requestAnimationFrame(d);
		};
		return u = o.requestAnimationFrame(d), () => {
			o.cancelAnimationFrame(u), s.release();
		};
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/hooks/useDismiss.ts
function Tn(e, t, n, r, i) {
	let a = i?.outsideClick ?? !0;
	return l(() => {
		if (!e) return;
		let i = (e) => {
			let i = e.target;
			r?.some((e) => e.current?.contains(i)) || n.every((e) => e.current && !e.current.contains(i)) && t("outside-click");
		};
		if (!a) return;
		let o = new Set([document, n[0]?.current?.ownerDocument ?? document]);
		return o.forEach((e) => e.addEventListener("mousedown", i)), () => o.forEach((e) => e.removeEventListener("mousedown", i));
	}, [
		e,
		t,
		n,
		r,
		a
	]), Rt(e, () => t("escape"), n[0]);
}
//#endregion
//#region src/providers/SettingsContext.ts
var En = r({
	fontSize: 15,
	setFontSize: () => {},
	accentColor: "purple",
	setAccentColor: () => {},
	sidebarCollapsed: !1,
	setSidebarCollapsed: () => {},
	sidebarWidth: 220,
	setSidebarWidth: () => {},
	reducedMotion: !1,
	setReducedMotion: () => {},
	colorMode: "dark",
	setColorMode: () => {},
	preferredDarkTheme: "dark",
	setPreferredDarkTheme: () => {},
	preferredLightTheme: "light",
	setPreferredLightTheme: () => {},
	resolvedTheme: "dark",
	uiFont: "inter",
	headingFont: "inter",
	proseFont: "inter",
	controlFont: "inter",
	labelFont: "inter",
	navigationFont: "inter",
	dataFont: "inter",
	codeFont: "jetbrains-mono",
	borderRadius: 6,
	borderWidth: 1,
	tracking: .05,
	lineHeight: 1.45,
	density: .25,
	setUiFont: () => {},
	setHeadingFont: () => {},
	setProseFont: () => {},
	setControlFont: () => {},
	setLabelFont: () => {},
	setNavigationFont: () => {},
	setDataFont: () => {},
	setCodeFont: () => {},
	setBorderRadius: () => {},
	setBorderWidth: () => {},
	setTracking: () => {},
	setLineHeight: () => {},
	setDensity: () => {},
	saveThemeCustomization: () => {},
	resetThemeCustomization: () => {},
	hasThemeOverrides: !1,
	isCustomized: !1
});
//#endregion
//#region src/hooks/useSettings.ts
function Dn() {
	return c(En);
}
//#endregion
//#region src/components/ui/Avatar.tsx
var On = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function kn(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function An(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function jn({ name: e, src: t, size: n = "md", className: r }) {
	return /* @__PURE__ */ _("div", {
		className: q("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", On[n], r),
		style: { backgroundColor: t ? void 0 : An(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ _("img", {
			src: t,
			alt: e,
			className: "h-full w-full rounded-full object-cover"
		}) : kn(e)
	});
}
//#endregion
//#region src/lib/tones.ts
var Mn = {
	success: "green",
	warning: "yellow",
	danger: "red",
	info: "blue",
	neutral: "gray"
}, Nn = {
	green: {
		soft: "bg-green-muted text-green",
		outline: "border-green text-green",
		fill: "bg-green-muted",
		dot: "bg-green",
		text: "text-green",
		border: "border-green/30"
	},
	yellow: {
		soft: "bg-yellow-muted text-yellow",
		outline: "border-yellow text-yellow",
		fill: "bg-yellow-muted",
		dot: "bg-yellow",
		text: "text-yellow",
		border: "border-yellow/30"
	},
	red: {
		soft: "bg-red-muted text-red",
		outline: "border-red text-red",
		fill: "bg-red-muted",
		dot: "bg-red",
		text: "text-red",
		border: "border-red/30"
	},
	blue: {
		soft: "bg-blue-muted text-blue",
		outline: "border-blue text-blue",
		fill: "bg-blue-muted",
		dot: "bg-blue",
		text: "text-blue",
		border: "border-blue/30"
	},
	purple: {
		soft: "bg-purple-muted text-purple",
		outline: "border-purple text-purple",
		fill: "bg-purple-muted",
		dot: "bg-purple",
		text: "text-purple",
		border: "border-purple/30"
	},
	teal: {
		soft: "bg-teal-muted text-teal",
		outline: "border-teal text-teal",
		fill: "bg-teal-muted",
		dot: "bg-teal",
		text: "text-teal",
		border: "border-teal/30"
	},
	rose: {
		soft: "bg-rose-muted text-rose",
		outline: "border-rose text-rose",
		fill: "bg-rose-muted",
		dot: "bg-rose",
		text: "text-rose",
		border: "border-rose/30"
	},
	gray: {
		soft: "bg-bg-hover text-text-secondary",
		outline: "border-border text-text-secondary",
		fill: "bg-bg-hover",
		dot: "bg-text-tertiary",
		text: "text-text-tertiary",
		border: "border-border"
	},
	accent: {
		soft: "bg-accent-muted text-accent",
		outline: "border-accent text-accent",
		fill: "bg-accent-muted",
		dot: "bg-accent",
		text: "text-accent",
		border: "border-accent/30"
	}
};
function Pn(e) {
	return typeof e == "string" && (Object.prototype.hasOwnProperty.call(Nn, e) || Object.prototype.hasOwnProperty.call(Mn, e));
}
function Fn(e) {
	return Object.prototype.hasOwnProperty.call(Mn, e) ? Mn[e] : e;
}
function In(e) {
	return Nn[Fn(e)];
}
//#endregion
//#region src/components/ui/Toast.tsx
var Ln = r({ toast: () => {} });
function Rn() {
	return c(Ln);
}
function zn({ children: e }) {
	let [t, n] = h([]), r = m(0), i = s((e, t, i = 4e3) => {
		let a = typeof e == "string" ? {
			type: e,
			message: t ?? "",
			duration: i
		} : {
			...e,
			duration: e.duration ?? 4e3
		}, o = r.current++;
		n((e) => [...e, {
			...a,
			id: o
		}]);
	}, []), a = s((e) => {
		n((t) => t.filter((t) => t.id !== e));
	}, []);
	return /* @__PURE__ */ v(Ln.Provider, {
		value: { toast: i },
		children: [e, /* @__PURE__ */ _("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ _(Hn, {
				toast: e,
				onDismiss: () => a(e.id)
			}, e.id))
		})]
	});
}
var Bn = {
	success: O,
	error: ye,
	warning: b,
	info: V
}, Vn = {
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
};
function Hn({ toast: e, onDismiss: t }) {
	let [n, r] = h(100), i = Bn[e.type], a = In(Vn[e.type]), o = e.type === "error" || e.type === "warning", s = m(t);
	l(() => {
		s.current = t;
	}, [t]);
	let c = m(!1), u = m(!1);
	return l(() => {
		if (!Number.isFinite(e.duration) || e.duration <= 0) return;
		let t = e.duration, n = Date.now(), i = setInterval(() => {
			let a = Date.now();
			!c.current && !u.current && (t -= a - n), n = a;
			let o = Math.max(0, t / e.duration * 100);
			r(o), o <= 0 && (s.current(), clearInterval(i));
		}, 50);
		return () => clearInterval(i);
	}, [e.duration]), /* @__PURE__ */ v("div", {
		role: o ? "alert" : "status",
		"aria-live": o ? "assertive" : "polite",
		onMouseEnter: () => {
			c.current = !0;
		},
		onMouseLeave: () => {
			c.current = !1;
		},
		onFocus: () => {
			u.current = !0;
		},
		onBlur: (e) => {
			e.currentTarget.contains(e.relatedTarget) || (u.current = !1);
		},
		className: "bg-bg-secondary border-border animate-slide-down pointer-events-auto relative w-80 overflow-hidden rounded-lg border shadow-lg",
		children: [
			/* @__PURE__ */ _("div", { className: q("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", a.dot) }),
			/* @__PURE__ */ v("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ _(i, { className: q("h-4 w-4 shrink-0", a.text) }),
					e.title ? /* @__PURE__ */ v("div", {
						className: "text-text-primary flex-1 text-xs",
						children: [/* @__PURE__ */ _("strong", {
							className: "block font-semibold",
							children: e.title
						}), /* @__PURE__ */ _("p", { children: e.message })]
					}) : /* @__PURE__ */ _("p", {
						className: "text-text-primary flex-1 text-xs",
						children: e.message
					}),
					/* @__PURE__ */ _("button", {
						type: "button",
						onClick: t,
						"aria-label": "Dismiss notification",
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ _(ve, {
							className: "h-3 w-3",
							"aria-hidden": "true"
						})
					})
				]
			}),
			/* @__PURE__ */ _("div", {
				className: "bg-bg-tertiary mx-3 mb-1 h-0.5 overflow-hidden rounded-md",
				children: /* @__PURE__ */ _("div", {
					className: "bg-border h-full rounded-md transition-all duration-[100ms]",
					style: { width: `${n}%` }
				})
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/Sidebar.tsx
var Un = 140, Wn = 400, Gn = 48, Kn = {
	side: "right",
	align: "end",
	gap: 6
};
function qn({ item: e, collapsed: t, currentPath: n, onNavigate: r }) {
	let i = wt(e, n);
	return /* @__PURE__ */ v("a", {
		href: e.path,
		onClick: (t) => Tt(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: q("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: t ? e.label : void 0,
		children: [
			i && /* @__PURE__ */ _("div", {
				className: "bg-accent absolute left-0 w-0.5 rounded-md",
				style: {
					top: "0.3em",
					bottom: "0.3em"
				}
			}),
			/* @__PURE__ */ _("span", {
				className: "shrink-0",
				children: /* @__PURE__ */ _(e.icon, { className: "h-3.5 w-3.5" })
			}),
			!t && /* @__PURE__ */ _("span", {
				className: "min-w-0 flex-1 truncate text-xs",
				children: e.label
			}),
			!t && e.badge && /* @__PURE__ */ _("span", {
				className: "ml-auto shrink-0",
				children: e.badge
			})
		]
	});
}
function Jn({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ _("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ v("div", {
		className: q("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ _(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ _("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ _("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function Yn(e) {
	return e.role ?? e.email;
}
function Xn({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: i, signOutPath: a, signOutLabel: o = "Sign out", onNavigate: c }) {
	let [l, u] = h(!1), d = qt(), [f, p] = h(() => Math.min(n, Math.max(t.length - 1, 0))), y = m(null), b = m(null), x = s(() => u(!1), []);
	Tn(l, x, [b], [y]), Cn(l, y, b, {
		...Kn,
		onAnchorHidden: x
	});
	let S = t[f] ?? t[0], C = !!(i || a);
	function w() {
		u(!l);
	}
	function T(e, t) {
		p(t), r?.(e, t), u(!1);
	}
	function E() {
		u(!1), i ? i() : a && Et(a, c);
	}
	return S ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: y,
		onClick: w,
		className: q("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? S.name : void 0,
		children: [/* @__PURE__ */ _(jn, {
			name: S.name,
			src: S.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ _("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: S.name
			}), Yn(S) && /* @__PURE__ */ _("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: Yn(S)
			})]
		}), /* @__PURE__ */ _(M, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && xe(/* @__PURE__ */ v("div", {
		ref: b,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-56 rounded-md border py-1 shadow-lg",
		children: [
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accounts"
			}),
			t.map((e, t) => /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => T(e, t),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-8 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(jn, {
						name: e.name,
						src: e.avatarSrc,
						size: "sm"
					}),
					/* @__PURE__ */ v("div", {
						className: "min-w-0 flex-1 text-left",
						children: [/* @__PURE__ */ _("p", {
							className: "text-text-primary truncate text-xs leading-tight",
							children: e.name
						}), e.email && /* @__PURE__ */ _("p", {
							className: "text-2xs text-text-tertiary truncate leading-tight",
							children: e.email
						})]
					}),
					t === f && /* @__PURE__ */ _(D, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, `${e.name}-${e.email ?? t}`)),
			C && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				type: "button",
				onClick: E,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(U, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ _("span", { children: o })]
			})] })
		]
	}), d ?? document.body)] }) : null;
}
function Zn({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: i }) {
	let [a, o] = h(!1), c = qt(), l = m(null), u = m(null), { accentColor: d, setAccentColor: f, reducedMotion: p, setReducedMotion: b, colorMode: x, setColorMode: S } = Dn(), { toast: C } = Rn(), w = !!(t || r), T = s(() => o(!1), []);
	Tn(a, T, [u], [l]), Cn(a, l, u, {
		...Kn,
		onAnchorHidden: T
	});
	function E() {
		o(!a);
	}
	function O() {
		o(!1), r ? r() : t && Et(t, i);
	}
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: l,
		onClick: E,
		className: q("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", a ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ _(de, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ _("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), a && xe(/* @__PURE__ */ v("div", {
		ref: u,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-64 rounded-md border py-1 shadow-lg",
		children: [
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Mode"
			}),
			[
				{
					value: "dark",
					label: "Dark",
					Icon: ee
				},
				{
					value: "light",
					label: "Light",
					Icon: pe
				},
				{
					value: "system",
					label: "System",
					Icon: K
				}
			].map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => S(e),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(n, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ _("span", {
						className: "flex-1 text-left",
						children: t
					}),
					x === e && /* @__PURE__ */ _(D, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, e)),
			/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accent"
			}),
			/* @__PURE__ */ _("div", {
				className: "flex flex-wrap gap-1.5 px-3 pb-2",
				children: sn.map((e) => /* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => f(e.value),
					className: q("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", d === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
					style: {
						backgroundColor: e.color,
						...d === e.value ? { "--utility-ring-color": e.color } : {}
					},
					title: e.value.charAt(0).toUpperCase() + e.value.slice(1)
				}, e.value))
			}),
			/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => {
					b(!p), C("info", p ? "Animations enabled" : "Animations disabled");
				},
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(y, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ _("span", {
						className: "flex-1 text-left",
						children: "Reduced Motion"
					}),
					p && /* @__PURE__ */ _(D, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}),
			w && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				type: "button",
				onClick: O,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(de, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ _("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), c ?? document.body)] });
}
function Qn({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: i, onSignOut: a, signOutPath: o, signOutLabel: c, settingsPath: l, settingsLabel: u, onOpenSettings: d, currentPath: f, onNavigate: p, headerActions: g, className: y }) {
	let { sidebarCollapsed: b, sidebarWidth: x, setSidebarWidth: S } = Dn(), [C, w] = h(/* @__PURE__ */ new Set()), T = m(null), E = m(!1), [D, O] = h(!1), A = s((e) => {
		if (b) return;
		e.preventDefault(), E.current = !0, O(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!E.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			S(Math.max(Un, Math.min(n, Wn)));
		}, n = () => {
			E.current = !1, O(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
		};
		document.addEventListener("mousemove", t), document.addEventListener("mouseup", n);
	}, [b, S]);
	function j(e) {
		w((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	return /* @__PURE__ */ v("aside", {
		ref: T,
		className: q("bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", !D && "transition-[width] duration-[200ms] ease-out", "border-border", y),
		style: { width: b ? Gn : x },
		children: [
			!b && /* @__PURE__ */ _("div", {
				onMouseDown: A,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ _("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ _(Jn, {
					brand: t,
					collapsed: b
				})
			}),
			!b && g && /* @__PURE__ */ _("div", {
				className: "border-border shrink-0 border-b px-2 py-2",
				children: g
			}),
			/* @__PURE__ */ _("nav", {
				className: "flex-1 overflow-y-auto px-2 py-2",
				children: e.map((e, t) => {
					let n = C.has(e.title);
					return /* @__PURE__ */ v("div", {
						className: "mb-4",
						children: [b ? t > 0 && /* @__PURE__ */ _("hr", { className: "border-border mx-auto my-1.5 w-4/5" }) : /* @__PURE__ */ v("button", {
							type: "button",
							onClick: () => j(e.title),
							className: "text-2xs-f text-text-tertiary hover:text-text-secondary font-label flex w-full cursor-pointer items-center gap-1 px-2 text-left font-semibold tracking-wider uppercase",
							style: {
								paddingTop: "0.35em",
								paddingBottom: "0.35em"
							},
							children: [/* @__PURE__ */ _("span", {
								className: "min-w-0 flex-1",
								children: e.title
							}), /* @__PURE__ */ _(k, { className: q("h-3 w-3 shrink-0 transition-transform", n && "-rotate-90") })]
						}), (!n || b) && /* @__PURE__ */ _("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _(qn, {
								item: e,
								collapsed: b,
								currentPath: f,
								onNavigate: p
							}) }, e.path))
						})]
					}, e.title);
				})
			}),
			/* @__PURE__ */ v("div", {
				className: "shrink-0 px-2 py-1.5",
				children: [/* @__PURE__ */ _(Zn, {
					collapsed: b,
					settingsPath: l,
					settingsLabel: u,
					onOpenSettings: d,
					onNavigate: p
				}), n.length > 0 && /* @__PURE__ */ _("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ _(Xn, {
						collapsed: b,
						accounts: n,
						initialAccountIndex: r,
						onAccountChange: i,
						onSignOut: a,
						signOutPath: o,
						signOutLabel: c,
						onNavigate: p
					})
				})]
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/Breadcrumbs.tsx
function $n(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function er({ homeLabel: e = "Dashboard", labels: t = {}, parents: n = {}, currentPath: r = "/", onNavigate: i, className: a }) {
	let o = r.split("?")[0].split("/").filter(Boolean), s = [{
		label: e,
		path: "/"
	}, ...o.map((e, r) => {
		let i = o[r - 1];
		return {
			label: t[e] || n[i] || $n(e),
			path: "/" + o.slice(0, r + 1).join("/")
		};
	})];
	return /* @__PURE__ */ _("nav", {
		"aria-label": "Breadcrumb",
		className: q("font-navigation flex items-center gap-1 text-xs", a),
		children: /* @__PURE__ */ _("ol", {
			className: "flex items-center gap-1",
			children: s.map((e, t) => {
				let n = t === s.length - 1;
				return /* @__PURE__ */ v("li", {
					className: "flex items-center gap-1",
					children: [t > 0 && /* @__PURE__ */ _(j, { className: "text-text-tertiary h-3 w-3" }), n ? /* @__PURE__ */ _("span", {
						className: "text-text-primary font-medium",
						children: e.label
					}) : /* @__PURE__ */ _("a", {
						href: e.path,
						onClick: (t) => Tt(t, e.path, i),
						className: q("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
						children: e.label
					})]
				}, e.path);
			})
		})
	});
}
//#endregion
//#region src/hooks/useApplyTheme.ts
function tr() {
	let { setPreferredDarkTheme: e, setPreferredLightTheme: t, setColorMode: n } = Dn();
	return s((r) => {
		$t(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/providers/ControlSizeContext.ts
var nr = r("compact");
function rr(e) {
	let t = c(nr);
	return e ?? t;
}
//#endregion
//#region src/components/ui/Button.tsx
var ir = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover"
}, ar = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, or = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, sr = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, cr = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, lr = {
	sm: {
		xs: "px-1 sm:px-2",
		sm: "px-1.5 sm:px-2.5",
		md: "px-2 sm:px-3",
		lg: "px-2.5 sm:px-4"
	},
	md: {
		xs: "px-1 md:px-2",
		sm: "px-1.5 md:px-2.5",
		md: "px-2 md:px-3",
		lg: "px-2.5 md:px-4"
	},
	lg: {
		xs: "px-1 lg:px-2",
		sm: "px-1.5 lg:px-2.5",
		md: "px-2 lg:px-3",
		lg: "px-2.5 lg:px-4"
	}
}, Q = a(({ variant: e = "secondary", size: t = "md", controlSize: n, loading: r, icon: i, hideLabel: a, className: o, children: s, disabled: c, ...l }, u) => {
	let d = rr(n), f = e === "icon", p = a === !0 ? "sm" : a === !1 ? void 0 : a;
	return /* @__PURE__ */ v("button", {
		type: "button",
		ref: u,
		"data-control-size": d,
		"data-variant": e,
		"data-size": t,
		"data-hide-label": p && !f ? "" : void 0,
		disabled: c || r,
		className: q("ui-sized-control inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", ir[e], f ? or[t] : ar[t], p && !f && lr[p]?.[t], o),
		...l,
		children: [
			r && /* @__PURE__ */ _(H, { className: "h-3.5 w-3.5 animate-spin" }),
			i && !r && /* @__PURE__ */ _(i, { className: sr[t] }),
			s && (p ? /* @__PURE__ */ _("span", {
				className: cr[p],
				children: s
			}) : s)
		]
	});
});
Q.displayName = "Button";
//#endregion
//#region src/components/ui/SectionHeader.tsx
function ur({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ _(t, {
		className: q("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
function dr({ haspopup: e, matchWidth: t = !1, disabled: n = !1, labelled: r = !1 }) {
	let [i, a] = h(!1), o = i && !n, c = m(null), l = m(null), d = m(null), f = m(null), p = u(), g = `${p}-label`, _ = `${p}-trigger`, v = `${p}-popup`, y = s((e) => {
		let t = f.current, n = t?.ownerDocument.activeElement ?? null, r = !!t && t.contains(n), i = !n || n === t?.ownerDocument.body;
		a(!1), e === "escape" || e === "select" && (r || i) ? d.current?.focus() : e === "anchor-hidden" && r && d.current?.focus({ preventScroll: !0 });
	}, []);
	return Tn(o, y, [c]), Cn(o, l, f, {
		side: "bottom",
		align: "start",
		gap: 4,
		matchAnchorWidth: t,
		onAnchorHidden: () => y("anchor-hidden")
	}), {
		open: o,
		show: () => a(!0),
		close: y,
		rootRef: c,
		anchorRef: l,
		triggerRef: d,
		popupRef: f,
		labelId: g,
		triggerId: _,
		popupId: v,
		triggerAria: {
			id: _,
			"aria-haspopup": e,
			"aria-expanded": o,
			"aria-controls": o ? v : void 0,
			"aria-labelledby": r ? `${g} ${_}` : void 0
		}
	};
}
var fr = {
	text: "",
	at: 0
};
function pr() {
	return performance.now();
}
function mr(e) {
	return e.key.length !== 1 || e.metaKey ? !1 : e.ctrlKey && e.altKey && e.getModifierState?.("AltGraph") ? !0 : !e.ctrlKey && !e.altKey;
}
function hr(e, t) {
	return e.text !== "" && t - e.at <= 500;
}
function gr(e, t, n) {
	return {
		text: hr(e, n) ? e.text + t : t,
		at: n
	};
}
function _r(e, t, n, r) {
	let i = e.length;
	if (i === 0 || r === "") return -1;
	let a = Array.from(r.toLocaleLowerCase()), o = a.every((e) => e === a[0]), s = o ? a[0] : a.join(""), c = o ? n + 1 : Math.max(n, 0);
	for (let n = 0; n < i; n++) {
		let r = ((c + n) % i + i) % i;
		if (!t(r) && e[r].trim().toLocaleLowerCase().startsWith(s)) return r;
	}
	return -1;
}
//#endregion
//#region src/hooks/useTypeahead.ts
function vr() {
	let e = m(fr);
	return {
		push(t) {
			return e.current = gr(e.current, t, pr()), e.current.text;
		},
		active() {
			return hr(e.current, pr());
		},
		clear() {
			e.current = fr;
		}
	};
}
//#endregion
//#region src/components/ui/FieldContext.ts
var yr = r(null);
function br(...e) {
	return [...new Set(e.flatMap((e) => e?.split(/\s+/).filter(Boolean) ?? []))].join(" ") || void 0;
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function xr(e) {
	let t = 0;
	return e.map((e) => {
		let n = t;
		return t += "options" in e ? e.options.length : 1, {
			entry: e,
			firstIndex: n
		};
	});
}
function Sr({ options: e, value: t, onChange: n, label: r, labelPlacement: i = "above", placeholder: a = "Select...", className: o, size: s = "md", disabled: u = !1 }) {
	let d = c(yr), f = i === "placeholder" && r ? r : r ? void 0 : d?.placeholderLabel, p = e.flatMap((e) => "options" in e ? e.options : [e]), [g, y] = h(-1), { open: b, show: x, close: S, rootRef: C, anchorRef: w, triggerRef: T, popupRef: E, labelId: O, popupId: A, triggerAria: j } = dr({
		haspopup: "listbox",
		matchWidth: !0,
		labelled: !!r,
		disabled: u
	}), M = vr(), N = m(!1), P = m(!1), F = (e) => `${A}-option-${e}`, I = !r && d?.id ? d.labelId : void 0, L = d?.claimLabel;
	l(() => {
		if (I && L) return L();
	}, [I, L]), l(() => {
		u && S();
	}, [
		u,
		b,
		S
	]);
	let R = f && !t ? void 0 : p.find((e) => e.value === t), z = m(!1);
	l(() => {
		z.current && !b && M.clear(), z.current = b;
	}), l(() => {
		!b || !N.current || (N.current = !1, document.getElementById(F(g))?.scrollIntoView({ block: "nearest" }));
	});
	function B() {
		let e = p.findIndex((e) => e.value === t);
		M.clear(), U(e >= 0 && !p[e].disabled ? e : G(1)), x();
	}
	function V(e) {
		u || e.disabled || (n(e.value), S("select"));
	}
	function H(e) {
		u || P.current && (P.current = !1, e.detail === 0) || (b ? S("toggle") : B());
	}
	function U(e) {
		N.current = !0, y(e);
	}
	function W(e, t) {
		for (let n = e + t; n >= 0 && n < p.length; n += t) if (!p[n].disabled) return n;
		return e;
	}
	function G(e) {
		let t = W(e === 1 ? -1 : p.length, e);
		return t >= 0 && t < p.length ? t : -1;
	}
	function K(e) {
		e.preventDefault();
		let r = M.push(e.key), i = p.map((e) => e.label), a = (e) => !!p[e].disabled;
		if (b) {
			let e = _r(i, a, g, r);
			e !== -1 && U(e);
		} else {
			let e = _r(i, a, p.findIndex((e) => e.value === t), r);
			e !== -1 && p[e].value !== t && n(p[e].value);
		}
	}
	function ee(e) {
		e.key === " " && P.current && e.preventDefault();
	}
	function te(e) {
		if (!u) {
			if (P.current = !1, e.key === " " && (b || M.active()) && (P.current = !0), mr(e) && (e.key !== " " || M.active())) {
				K(e);
				return;
			}
			if (!b) {
				(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), B());
				return;
			}
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), U(W(g, 1));
					break;
				case "ArrowUp":
					e.preventDefault(), U(W(g, -1));
					break;
				case "Home":
					e.preventDefault();
					{
						let e = G(1);
						e !== -1 && U(e);
					}
					break;
				case "End":
					e.preventDefault();
					{
						let e = G(-1);
						e !== -1 && U(e);
					}
					break;
				case "Enter":
				case " ": {
					e.preventDefault();
					let t = p[g];
					t && !t.disabled && V(t);
					break;
				}
				case "Escape":
					e.preventDefault(), S("escape");
					break;
			}
		}
	}
	function ne(e, n) {
		return /* @__PURE__ */ v("li", {
			id: F(n),
			role: "option",
			"aria-selected": e.value === t,
			"aria-disabled": e.disabled || void 0,
			onClick: () => {
				e.disabled || V(e);
			},
			onMouseEnter: () => {
				e.disabled || y(n);
			},
			className: q("font-control flex h-7 w-full items-center gap-2 px-3 text-xs", !e.disabled && "cursor-pointer", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : n === g ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
			children: [/* @__PURE__ */ _("span", {
				className: "flex-1 truncate",
				children: e.label
			}), e.value === t && /* @__PURE__ */ _(D, { className: "h-3 w-3 shrink-0" })]
		}, e.value);
	}
	let re = xr(e);
	return /* @__PURE__ */ v("div", {
		className: q("flex flex-col gap-1.5", o),
		ref: C,
		children: [r && /* @__PURE__ */ _("span", {
			id: O,
			className: q("ui-field-label font-label text-xs font-medium", i === "placeholder" && "sr-only"),
			children: r
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			ref: w,
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					disabled: u,
					onClick: H,
					onKeyDown: te,
					onKeyUp: ee,
					ref: T,
					...j,
					id: d?.id ?? j.id,
					"aria-labelledby": r && d?.id ? `${O} ${d.id}` : I && L ? `${I} ${d?.id}` : j["aria-labelledby"],
					"aria-describedby": d?.describedBy,
					"aria-invalid": d?.invalid || void 0,
					"aria-activedescendant": b && g >= 0 && p[g] && !p[g].disabled ? F(g) : void 0,
					className: q("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", s === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7", u ? "cursor-not-allowed opacity-40" : "hover:bg-bg-hover hover:border-border-strong"),
					children: R ? R.label : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						"aria-hidden": f ? !0 : void 0,
						children: f ?? a
					})
				}),
				/* @__PURE__ */ _(k, { className: q("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", s === "sm" ? "right-1.5" : "right-2", b && "rotate-180") }),
				b && !u && /* @__PURE__ */ _("div", {
					ref: E,
					className: q("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
					children: /* @__PURE__ */ _("ul", {
						id: A,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: re.map(({ entry: e, firstIndex: t }, n) => "options" in e ? /* @__PURE__ */ v("li", {
							role: "group",
							"aria-label": e.label,
							children: [/* @__PURE__ */ _("div", {
								"aria-hidden": "true",
								className: "text-text-tertiary px-3 py-1 text-2xs font-medium",
								children: e.label
							}), /* @__PURE__ */ _("ul", {
								role: "presentation",
								children: e.options.map((e, n) => ne(e, t + n))
							})]
						}, `group-${n}`) : ne(e, t))
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/Slider.tsx
var Cr = new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"Home",
	"End",
	"PageUp",
	"PageDown"
]);
function wr({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, "aria-label": s, "aria-labelledby": c, id: l, showValue: d, className: f }) {
	let p = u(), m = l ?? p, h = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ v("div", {
		className: q("flex flex-col gap-1.5", f),
		children: [(o || d) && /* @__PURE__ */ v("div", {
			className: "flex items-center justify-between",
			children: [o && /* @__PURE__ */ _("label", {
				htmlFor: m,
				className: "ui-field-label font-label text-xs font-medium",
				children: o
			}), d && /* @__PURE__ */ _("span", {
				className: "text-text-primary font-data text-xs",
				children: r
			})]
		}), /* @__PURE__ */ _("input", {
			id: m,
			type: "range",
			"aria-label": s,
			"aria-labelledby": c,
			min: e,
			max: t,
			step: n,
			value: r,
			onChange: (e) => i(Number(e.target.value)),
			onPointerUp: a ? (e) => a(Number(e.target.value)) : void 0,
			onKeyUp: a ? (e) => {
				Cr.has(e.key) && a(Number(e.target.value));
			} : void 0,
			className: "bg-bg-tertiary [&::-webkit-slider-thumb]:bg-accent h-1.5 w-full cursor-pointer appearance-none rounded-md [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[100ms] [&::-webkit-slider-thumb]:hover:scale-110",
			style: { background: `linear-gradient(to right, var(--accent) ${h}%, var(--bg-tertiary) ${h}%)` }
		})]
	});
}
//#endregion
//#region src/components/ui/ThemePreview.tsx
function Tr({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ v("button", {
		type: "button",
		onClick: i,
		className: q("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
		children: [/* @__PURE__ */ _("div", {
			className: "border-border-strong/20 flex h-10 w-full items-center justify-center rounded border",
			style: { backgroundColor: r?.bg },
			children: /* @__PURE__ */ _("div", {
				className: "h-1.5 w-8 rounded-md",
				style: { backgroundColor: r?.fg }
			})
		}), /* @__PURE__ */ v("div", {
			className: "flex items-center gap-1.5",
			children: [n && /* @__PURE__ */ _(n, { className: "h-3 w-3" }), /* @__PURE__ */ _("span", {
				className: "text-xs font-medium",
				children: e
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Toggle.tsx
function Er({ checked: e, onChange: t, disabled: n, label: r, "aria-labelledby": i, "aria-describedby": a, className: o }) {
	return /* @__PURE__ */ v("label", {
		className: q("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", o),
		style: { gap: 10 },
		children: [/* @__PURE__ */ _("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			"aria-labelledby": i,
			"aria-describedby": a,
			disabled: n,
			onClick: () => t(!e),
			className: q("relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary ui-switch-off", !n && "cursor-pointer"),
			style: {
				width: 36,
				height: 20
			},
			children: /* @__PURE__ */ _("span", {
				className: "ui-switch-knob absolute top-1/2 rounded-full transition-[left] duration-[100ms]",
				style: {
					width: 14,
					height: 14,
					marginTop: -7,
					left: e ? 19 : 3
				}
			})
		}), r && /* @__PURE__ */ _("span", {
			className: "text-text-secondary text-xs",
			children: r
		})]
	});
}
//#endregion
//#region src/components/app-shell/themeMenuEvents.ts
var Dr = "open-theme-menu";
function Or(e = Dr) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
//#endregion
//#region src/components/app-shell/ThemeMenu.tsx
var kr = [
	{
		value: "dark",
		label: "Dark",
		Icon: ee
	},
	{
		value: "light",
		label: "Light",
		Icon: pe
	},
	{
		value: "system",
		label: "System",
		Icon: K
	}
];
function Ar({ className: e, respondToOpenEvent: t = !0 }) {
	let [n, r] = h(!1), i = qt(), [a, o] = h(!1), c = m(null), u = m(null), d = Dn(), f = tr(), { toast: p } = Rn(), y = s(() => {
		r(!1), o(!1);
	}, []);
	Tn(n, y, [u], [c], { outsideClick: !a }), Cn(n, c, u, {
		side: "bottom",
		align: "end",
		gap: 6,
		onAnchorHidden: a ? void 0 : y
	});
	function b() {
		if (n) {
			y();
			return;
		}
		r(!0);
	}
	l(() => {
		if (!t) return;
		let e = () => {
			r(!0), o(!0);
		};
		return document.addEventListener(Dr, e), () => document.removeEventListener(Dr, e);
	}, [t]);
	let { colorMode: x, setColorMode: S, preferredDarkTheme: C, preferredLightTheme: w, accentColor: T, setAccentColor: E, fontSize: D, setFontSize: O, uiFont: k, setUiFont: A, headingFont: j, setHeadingFont: M, proseFont: N, setProseFont: P, codeFont: F, setCodeFont: I, borderRadius: L, setBorderRadius: R, borderWidth: z, setBorderWidth: B, tracking: V, setTracking: H, lineHeight: U, setLineHeight: W, density: G, setDensity: K, reducedMotion: ee, setReducedMotion: ne, saveThemeCustomization: re, resetThemeCustomization: ie, hasThemeOverrides: ae, isCustomized: oe, resolvedTheme: se } = d;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("button", {
		type: "button",
		ref: c,
		onClick: b,
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": n,
		title: "Theme",
		className: q("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", n ? "text-accent bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", e),
		children: /* @__PURE__ */ _(te, { className: "h-4 w-4" })
	}), n && xe(/* @__PURE__ */ _("div", {
		ref: u,
		role: "dialog",
		"aria-label": "Theme settings",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] flex w-80 flex-col overflow-y-auto rounded-md border p-3 shadow-lg",
		style: { maxHeight: "80vh" },
		children: /* @__PURE__ */ v("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(ur, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ _("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: kr.map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ v("button", {
						type: "button",
						onClick: () => S(e),
						className: q("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", x === e ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ _(n, { className: "h-3.5 w-3.5" }), t]
					}, e))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(ur, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: tn.map((e) => /* @__PURE__ */ _(Tr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: C === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(ur, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: en.map((e) => /* @__PURE__ */ _(Tr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: w === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(ur, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ _("div", {
					className: "flex flex-wrap gap-1.5",
					children: sn.map((e) => /* @__PURE__ */ _("button", {
						type: "button",
						onClick: () => E(e.value),
						className: q("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", T === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: e.color,
							...T === e.value ? { "--utility-ring-color": e.color } : {}
						},
						title: e.value.charAt(0).toUpperCase() + e.value.slice(1),
						"aria-label": e.value
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(ur, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ v("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ _(Sr, {
							label: "UI / Body",
							size: "sm",
							options: on,
							value: k,
							onChange: (e) => A(e)
						}),
						/* @__PURE__ */ _(Sr, {
							label: "Headings",
							size: "sm",
							options: on,
							value: j,
							onChange: (e) => M(e)
						}),
						/* @__PURE__ */ _(Sr, {
							label: "Prose",
							size: "sm",
							options: on,
							value: N,
							onChange: (e) => P(e)
						}),
						/* @__PURE__ */ _(Sr, {
							label: "Code",
							size: "sm",
							options: on,
							value: F,
							onChange: (e) => I(e)
						})
					]
				})] }),
				/* @__PURE__ */ v("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ _(wr, {
							label: "Font size",
							min: 11,
							max: 18,
							value: D,
							onChange: O,
							showValue: !0
						}),
						/* @__PURE__ */ _(wr, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: L,
							onChange: R,
							showValue: !0
						}),
						/* @__PURE__ */ _(wr, {
							label: "Border width",
							min: 1,
							max: 3,
							value: z,
							onChange: B,
							showValue: !0
						}),
						/* @__PURE__ */ _(wr, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: V,
							onChange: H,
							showValue: !0
						}),
						/* @__PURE__ */ _(wr, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: U,
							onChange: W,
							showValue: !0
						}),
						/* @__PURE__ */ _(wr, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: G,
							onChange: K,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ _(Er, {
					label: "Reduced motion",
					checked: ee,
					onChange: ne
				}),
				/* @__PURE__ */ v("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ _(Q, {
						variant: "primary",
						size: "sm",
						disabled: !oe,
						onClick: () => {
							re(), p("success", `Saved customization for ${Zt.find((e) => e.value === se)?.label ?? se}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ _(Q, {
						variant: "secondary",
						size: "sm",
						disabled: !ae && !oe,
						onClick: () => {
							ie(), p("info", "Reset to theme defaults");
						},
						children: "Reset"
					})]
				})
			]
		})
	}), i ?? document.body)] });
}
//#endregion
//#region src/components/app-shell/TopBar.tsx
var jr = [
	"dark",
	"light",
	"system"
], Mr = {
	dark: ee,
	light: pe,
	system: K
}, Nr = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function Pr({ onMobileMenuToggle: e, breadcrumbs: t, navItems: n = [], navLabel: r = "Primary", showCommandTrigger: i = !0, commandTriggerLabel: a = "Search", commandShortcut: o = Vt, currentPath: s, onNavigate: c, onCommandTrigger: l, actions: u }) {
	let { sidebarCollapsed: d, setSidebarCollapsed: f, colorMode: p, setColorMode: m } = Dn();
	function h() {
		m(jr[(jr.indexOf(p) + 1) % jr.length]);
	}
	let y = Mr[p], b = n.length > 0;
	return /* @__PURE__ */ v("header", {
		className: "border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3",
		style: { height: "var(--topbar-height)" },
		children: [/* @__PURE__ */ v("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: e,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden",
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ _(W, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => f(!d),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": d ? "Expand sidebar" : "Collapse sidebar",
					children: _(d ? re : ne, { className: "h-4 w-4" })
				}),
				(b || t !== !1) && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "bg-border hidden h-4 w-px md:block" }), b ? /* @__PURE__ */ _(Fr, {
					items: n,
					label: r,
					currentPath: s,
					onNavigate: c
				}) : t === !1 ? null : /* @__PURE__ */ _(er, {
					...t,
					currentPath: s,
					onNavigate: c
				})] })
			]
		}), /* @__PURE__ */ v("div", {
			className: "flex shrink-0 items-center gap-1",
			children: [
				u,
				i && /* @__PURE__ */ v("button", {
					type: "button",
					onClick: l ?? (() => Ht()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ _(ue, { className: "h-3 w-3" }),
						/* @__PURE__ */ _("span", {
							className: "text-2xs",
							children: a
						}),
						/* @__PURE__ */ _("kbd", {
							className: "text-2xs font-mono opacity-60",
							children: o.label
						})
					]
				}),
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: h,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded",
					"aria-label": `Color mode: ${Nr[p]}. Click to cycle.`,
					title: Nr[p],
					children: /* @__PURE__ */ _(y, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _(Ar, {})
			]
		})]
	});
}
function Fr({ items: e, label: t, currentPath: n, onNavigate: r }) {
	return /* @__PURE__ */ _("nav", {
		className: "hidden min-w-0 items-center gap-1 md:flex",
		"aria-label": t,
		children: e.map((e) => {
			let t = e.icon, i = wt(e, n), a = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
			return /* @__PURE__ */ v("a", {
				href: e.href ?? e.path,
				target: e.target,
				rel: a,
				"aria-current": i ? "page" : void 0,
				onClick: (t) => {
					e.reloadDocument || Tt(t, e.path, r);
				},
				className: q("font-navigation flex h-6 max-w-40 items-center gap-1 rounded px-2 text-xs transition-colors duration-[100ms]", i ? "bg-accent-muted text-accent" : "text-text-tertiary hover:bg-bg-hover hover:text-text-primary"),
				children: [
					t && /* @__PURE__ */ _(t, { className: "h-3 w-3 shrink-0" }),
					/* @__PURE__ */ _("span", {
						className: "truncate",
						children: e.label
					}),
					e.badge && /* @__PURE__ */ _("span", {
						className: "shrink-0",
						children: e.badge
					})
				]
			}, `${e.label}-${e.path}`);
		})
	});
}
//#endregion
//#region src/components/app-shell/AppShell.tsx
function Ir({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: l, signOutPath: u, signOutLabel: d, settingsPath: f, settingsLabel: m, onOpenSettings: g, showCommandPalette: y = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, sidebarHeaderActions: C, topBarActions: w, topBarNavItems: T, topBarNavLabel: E, currentPath: D, onNavigate: O, mainClassName: k, className: A }) {
	let [j, M] = h(!1), N = p(() => t.flatMap((e) => e.items), [t]), P = a ?? N;
	return /* @__PURE__ */ v("div", {
		className: q("bg-bg-primary flex h-svh overflow-hidden", A),
		children: [
			/* @__PURE__ */ _("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ _(Qn, {
				navSections: t,
				brand: n,
				accounts: r,
				initialAccountIndex: s,
				onAccountChange: c,
				onSignOut: l,
				signOutPath: u,
				signOutLabel: d,
				settingsPath: f,
				settingsLabel: m,
				onOpenSettings: g,
				currentPath: D,
				onNavigate: O,
				headerActions: C
			}),
			/* @__PURE__ */ v("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ _(Pr, {
					onMobileMenuToggle: () => M(!0),
					breadcrumbs: o,
					showCommandTrigger: y && b,
					commandTriggerLabel: x,
					commandShortcut: S,
					actions: w,
					navItems: T,
					navLabel: E,
					currentPath: D,
					onNavigate: O
				}), /* @__PURE__ */ _("main", {
					id: "main-content",
					className: q("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", k),
					children: e
				})]
			}),
			/* @__PURE__ */ _(Dt, {
				items: i,
				currentPath: D,
				onNavigate: O
			}),
			/* @__PURE__ */ _(Xt, {
				open: j,
				onClose: () => M(!1),
				items: N,
				topBarNavItems: T,
				topBarNavLabel: E,
				brand: n,
				currentPath: D,
				onNavigate: O,
				headerActions: C
			}),
			y && P.length > 0 && /* @__PURE__ */ _(Gt, {
				items: P,
				shortcut: S,
				onNavigate: O
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function Lr({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: q("bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ _("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function Rr({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ v("a", {
		href: e,
		onClick: (t) => Tt(t, e, n),
		className: q("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", r),
		children: [/* @__PURE__ */ _(S, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/Checkbox.tsx
var zr = a(({ id: e, checked: t, indeterminate: n, onChange: r, label: i, ariaLabel: a, disabled: o, controlSize: s, className: d, "aria-label": f, "aria-describedby": p, "aria-invalid": h, required: g, ...y }, b) => {
	let x = u(), S = rr(s), C = c(yr), w = e ?? C?.id ?? x, T = m(null);
	return l(() => {
		T.current && (T.current.indeterminate = !!n);
	}, [n]), /* @__PURE__ */ v("div", {
		className: q("ui-choice flex w-fit items-center gap-2.5", o ? "cursor-not-allowed opacity-40" : "cursor-pointer", d),
		"data-control-size": S,
		children: [/* @__PURE__ */ v("span", {
			className: "ui-checkbox-control",
			children: [/* @__PURE__ */ _("input", {
				...y,
				ref: (e) => {
					if (T.current = e, typeof b == "function") return b(e);
					b && (b.current = e);
				},
				id: w,
				type: "checkbox",
				checked: t,
				"aria-checked": n ? "mixed" : t,
				"aria-label": f ?? a,
				"aria-describedby": br(p, C?.describedBy),
				"aria-invalid": h ?? (C?.invalid || void 0),
				disabled: o,
				required: g ?? C?.required,
				onChange: (e) => r(e.target.checked, e),
				className: "ui-checkbox-input"
			}), /* @__PURE__ */ _("span", {
				className: "ui-checkbox-decoration",
				"aria-hidden": "true",
				children: n ? /* @__PURE__ */ _(G, { className: "h-3 w-3" }) : t ? /* @__PURE__ */ _(D, { className: "h-3 w-3" }) : null
			})]
		}), i && /* @__PURE__ */ _("label", {
			htmlFor: w,
			className: q("text-text-primary text-xs", o ? "cursor-not-allowed" : "cursor-pointer"),
			children: i
		})]
	});
});
zr.displayName = "Checkbox";
//#endregion
//#region src/components/ui/FilterButton.tsx
var Br = a(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ v("button", {
		type: "button",
		ref: i,
		className: q("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ _(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ _("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function Vr(e) {
	return typeof e.header == "string" ? e.header : e.sortLabel ?? e.key;
}
function Hr({ columns: e, hidden: n, onToggle: r, label: i = "Columns", heading: a = "Toggle columns", icon: o = N, onOnly: c, onlyLabel: l = "Only", footer: u }) {
	let [d, f] = h(!1), p = m(null);
	return Tn(d, s(() => f(!1), []), [p]), /* @__PURE__ */ v("div", {
		className: "relative",
		ref: p,
		children: [/* @__PURE__ */ _(Br, {
			icon: o,
			onClick: () => f(!d),
			children: i
		}), d && /* @__PURE__ */ v("div", {
			className: q("bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 rounded-md border py-1 shadow-lg", c ? "w-56" : "w-48"),
			children: [e.map((i, o) => /* @__PURE__ */ v(t, { children: [(o === 0 || i.group !== e[o - 1].group) && /* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: i.group ?? a
			}), /* @__PURE__ */ v("div", {
				onClick: () => r(i.key),
				className: "group text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(zr, {
						checked: !n.has(i.key),
						onChange: () => {},
						ariaLabel: Vr(i)
					}),
					/* @__PURE__ */ _("span", {
						className: "min-w-0 flex-1 truncate",
						children: i.header
					}),
					c && /* @__PURE__ */ _("button", {
						type: "button",
						"aria-label": `${l}: ${Vr(i)}`,
						onClick: (e) => {
							e.stopPropagation(), c(i.key);
						},
						className: "text-text-tertiary hover:text-text-primary text-2xs opacity-0 transition-opacity duration-[100ms] group-hover:opacity-100 focus-visible:opacity-100",
						children: l
					})
				]
			})] }, i.key)), u && /* @__PURE__ */ _("div", {
				className: "border-border mt-1 border-t px-3 pt-1",
				children: u
			})]
		})]
	});
}
//#endregion
//#region src/components/tables/Pagination.tsx
function Ur({ page: e, totalPages: t, onPageChange: n, loading: r = !1, total: i, summary: a }) {
	if (t <= 1 && !r && i === void 0 && a == null) return null;
	let o = [];
	for (let n = 1; n <= t; n++) n === 1 || n === t || n >= e - 1 && n <= e + 1 ? o.push(n) : o[o.length - 1] !== "ellipsis" && o.push("ellipsis");
	return /* @__PURE__ */ v("div", {
		className: "flex items-center gap-1",
		children: [a !== null && (r || i !== void 0 || a !== void 0) && /* @__PURE__ */ _("span", {
			role: "status",
			className: "text-text-tertiary text-xs",
			children: r ? "Loading results..." : a === void 0 ? `${i} in total` : typeof a == "function" ? a(i) : a
		}), t > 1 && /* @__PURE__ */ v(g, { children: [
			/* @__PURE__ */ _("button", {
				type: "button",
				disabled: e === 1,
				"aria-disabled": r || void 0,
				onClick: () => {
					r || n(e - 1);
				},
				className: q("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", r && "cursor-not-allowed opacity-30"),
				"aria-label": "Previous page",
				children: /* @__PURE__ */ _(A, { className: "h-3.5 w-3.5" })
			}),
			o.map((t, i) => t === "ellipsis" ? /* @__PURE__ */ _("span", {
				className: "text-text-tertiary flex h-7 w-7 items-center justify-center text-xs",
				children: "..."
			}, `e${i}`) : /* @__PURE__ */ _("button", {
				type: "button",
				"aria-disabled": r || void 0,
				onClick: () => {
					r || n(t);
				},
				className: q("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", r && "cursor-not-allowed", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ _("button", {
				type: "button",
				disabled: e >= t,
				"aria-disabled": r || void 0,
				onClick: () => {
					r || n(e + 1);
				},
				className: q("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", r && "cursor-not-allowed opacity-30"),
				"aria-label": "Next page",
				children: /* @__PURE__ */ _(j, { className: "h-3.5 w-3.5" })
			})
		] })]
	});
}
//#endregion
//#region src/components/tables/sortRows.ts
function Wr(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/Table.tsx
function Gr({ caption: e, captionHidden: t = !1, captionClassName: n, stickyHeader: r = !1, maxHeight: i, wrapperClassName: a, wrapperProps: o, beforeTable: s, className: c, children: l, ...u }) {
	return /* @__PURE__ */ v("div", {
		...o,
		className: q("ui-table-wrap", o?.className, a),
		style: {
			maxHeight: i,
			...i ? { overflow: "auto" } : {},
			...o?.style
		},
		children: [s, /* @__PURE__ */ v("table", {
			...u,
			className: q("ui-table", r && "ui-table-sticky", c),
			children: [e != null && /* @__PURE__ */ _("caption", {
				className: q(t && "sr-only", n),
				children: e
			}), l]
		})]
	});
}
function Kr({ className: e, ...t }) {
	return /* @__PURE__ */ _("thead", {
		...t,
		className: q("ui-table-head", e)
	});
}
function qr({ className: e, ...t }) {
	return /* @__PURE__ */ _("tbody", {
		...t,
		className: q("ui-table-body", e)
	});
}
function Jr({ selected: e, interactive: t = !1, className: n, ...r }) {
	return /* @__PURE__ */ _("tr", {
		...r,
		"data-selected": e ? "" : void 0,
		className: q("ui-table-row", t && "ui-table-interactive", n)
	});
}
function Yr({ numeric: e = !1, align: t, sort: n, onSort: r, scope: i = "col", className: a, style: o, children: s, ...c }) {
	let l = n ?? c["aria-sort"], u = l === "ascending" ? "descending" : "ascending";
	return /* @__PURE__ */ _("th", {
		...c,
		scope: i,
		"aria-sort": l ?? (r ? "none" : void 0),
		className: q("ui-table-header-cell", e && "ui-table-numeric", a),
		style: {
			...t ? { textAlign: t } : {},
			...o
		},
		children: r ? /* @__PURE__ */ v("button", {
			type: "button",
			className: "ui-table-sort-button",
			onClick: () => r(u),
			children: [
				s,
				/* @__PURE__ */ v("span", {
					className: "sr-only",
					children: [" Sort ", u]
				}),
				/* @__PURE__ */ _("span", {
					className: "ui-table-sort-indicator",
					"aria-hidden": "true",
					children: _(l === "ascending" ? C : l === "descending" ? x : w, {})
				})
			]
		}) : s
	});
}
function Xr({ numeric: e = !1, align: t, nowrap: n = !1, className: r, style: i, ...a }) {
	return /* @__PURE__ */ _("td", {
		...a,
		className: q("ui-table-cell", e && "ui-table-numeric", n && "ui-table-nowrap", r),
		style: {
			...t ? { textAlign: t } : {},
			...i
		}
	});
}
function Zr({ colSpan: e, cellClassName: t, children: n, className: r, ...i }) {
	return /* @__PURE__ */ _("tr", {
		...i,
		className: q("ui-table-empty-row", r),
		children: /* @__PURE__ */ _("td", {
			colSpan: e,
			className: q("ui-table-empty-cell", t),
			children: n
		})
	});
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
var Qr = { "--ui-table-cell-padding-y": "0px" };
function $r({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: a = "No data", sortKey: o, sortDir: s, onSortChange: c, caption: l, loading: u = !1, loadingMessage: d = "Loading…", className: f, tableProps: m, getRowProps: g, isRowSelected: y }) {
	let b = c !== void 0, [S, w] = h(null), [T, E] = h("asc"), D = b ? o ?? null : S, O = b ? s ?? "asc" : T, k = p(() => b ? e : Wr(e, t, D, O), [
		b,
		e,
		t,
		D,
		O
	]);
	function A(e) {
		let t = D === e && O === "asc" ? "desc" : "asc";
		if (b) {
			c(e, t);
			return;
		}
		w(e), E(t);
	}
	return /* @__PURE__ */ v(Gr, {
		...m,
		wrapperClassName: f,
		beforeTable: u && /* @__PURE__ */ _("span", {
			role: "status",
			className: "sr-only",
			children: d
		}),
		caption: l || void 0,
		captionClassName: "text-text-secondary px-3 py-2 text-left text-xs",
		"aria-busy": u || m?.["aria-busy"],
		className: q("font-data text-xs", m?.className),
		style: {
			...Qr,
			...m?.style
		},
		children: [/* @__PURE__ */ _(Kr, { children: /* @__PURE__ */ _(Jr, { children: t.map((e) => /* @__PURE__ */ _(Yr, {
			className: q("text-2xs h-7", e.sortable && "hover:text-text-table-header-hover cursor-pointer select-none"),
			style: { width: e.width },
			sort: e.sortable ? D === e.key ? O === "asc" ? "ascending" : "descending" : "none" : void 0,
			children: e.sortable ? /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => A(e.key),
				"aria-label": e.sortLabel,
				className: "inline-flex cursor-pointer items-center gap-1 text-left focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
				children: [e.header, D === e.key && _(O === "asc" ? C : x, {
					"aria-hidden": "true",
					className: "h-3 w-3"
				})]
			}) : e.header
		}, e.key)) }) }), /* @__PURE__ */ _(qr, { children: k.length === 0 ? /* @__PURE__ */ _(Zr, {
			colSpan: t.length,
			cellClassName: "h-32 px-0 text-center",
			children: u ? d : a
		}) : k.map((e) => {
			let a = g?.(e) ?? {}, o = y?.(e) ?? a["aria-selected"], s = o === !0 || o === "true";
			return /* @__PURE__ */ i(Jr, {
				tabIndex: r ? 0 : void 0,
				...a,
				key: n(e),
				selected: s,
				interactive: !!r,
				className: q("h-8", !s && "hover:bg-bg-hover", r && "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", a.className),
				onClick: (t) => {
					a.onClick?.(t), t.defaultPrevented || r?.(e);
				},
				onKeyDown: (t) => {
					a.onKeyDown?.(t), !(!r || t.defaultPrevented || t.repeat || t.target !== t.currentTarget || t.key !== "Enter" && t.key !== " ") && (t.preventDefault(), r(e));
				}
			}, t.map((t) => /* @__PURE__ */ _(Xr, {
				nowrap: !0,
				className: t.cellClassName,
				onClick: t.interactive ? (e) => e.stopPropagation() : void 0,
				children: t.render(e)
			}, t.key)));
		}) })]
	});
}
//#endregion
//#region src/components/ui/Disclosure.tsx
function ei({ title: e, open: t, defaultOpen: n = !1, onOpenChange: r, meta: i, children: a, className: o, keepMounted: s = !0 }) {
	let [c, l] = h(n), d = t ?? c, f = u();
	function p() {
		t === void 0 && l(!d), r?.(!d);
	}
	return /* @__PURE__ */ v("div", {
		className: q("border-border rounded-md border", o),
		children: [/* @__PURE__ */ v("button", {
			type: "button",
			id: `${f}-trigger`,
			"aria-expanded": d,
			"aria-controls": `${f}-content`,
			onClick: p,
			className: "text-text-primary hover:bg-bg-hover flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
			children: [
				/* @__PURE__ */ _(k, {
					"aria-hidden": "true",
					className: q("text-text-tertiary h-3.5 w-3.5 shrink-0 transition-transform duration-[100ms]", !d && "-rotate-90")
				}),
				/* @__PURE__ */ _("span", {
					className: "min-w-0 flex-1",
					children: e
				}),
				i != null && /* @__PURE__ */ _("span", {
					className: "text-text-tertiary shrink-0 text-xs font-normal",
					children: i
				})
			]
		}), /* @__PURE__ */ _("div", {
			id: `${f}-content`,
			hidden: !d,
			className: "text-text-secondary px-3 py-2 text-xs",
			children: (d || s) && a
		})]
	});
}
//#endregion
//#region src/components/ui/Accordion.tsx
function ti(e) {
	let [t, n] = h(e.defaultValue ?? (e.type === "multiple" ? [] : "")), r = e.value ?? t;
	function i(t, i) {
		if (e.type === "multiple") {
			let a = Array.isArray(r) ? r : [], o = i ? [...a, t] : a.filter((e) => e !== t);
			e.value === void 0 && n(o), e.onValueChange?.(o);
		} else {
			let r = i ? t : "";
			e.value === void 0 && n(r), e.onValueChange?.(r);
		}
	}
	return /* @__PURE__ */ _("div", {
		className: q("space-y-2", e.className),
		children: e.items.map((t) => /* @__PURE__ */ _(ei, {
			title: t.title,
			meta: t.meta,
			className: t.className,
			keepMounted: t.keepMounted,
			open: e.type === "multiple" ? Array.isArray(r) && r.includes(t.value) : r === t.value,
			onOpenChange: (e) => i(t.value, e),
			children: t.children
		}, t.value))
	});
}
//#endregion
//#region src/components/ui/Alert.tsx
var ni = {
	neutral: "neutral",
	success: "success",
	warning: "warning",
	error: "danger",
	info: "info"
}, ri = {
	neutral: V,
	success: O,
	warning: b,
	error: ye,
	info: V
};
function ii({ type: e, title: t, children: n, dismissible: r, className: i, actions: a, toneBody: o = !1, ...s }) {
	let [c, l] = h(!1);
	if (c) return null;
	let u = In(ni[e]), d = ri[e], f = e === "neutral" ? "text-text-primary" : u.text;
	return /* @__PURE__ */ v("div", {
		...s,
		className: q("flex gap-2.5 rounded-md border p-3", u.fill, u.border, i),
		children: [
			/* @__PURE__ */ _(d, { className: q("mt-0.5 h-4 w-4 shrink-0", u.text) }),
			/* @__PURE__ */ v("div", {
				className: "min-w-0 flex-1",
				children: [t && /* @__PURE__ */ _("p", {
					className: q(o ? f : "text-text-primary", "mb-0.5 text-xs font-semibold"),
					children: t
				}), /* @__PURE__ */ _("div", {
					className: q(o ? f : "text-text-secondary", "text-xs"),
					children: n
				})]
			}),
			a ? /* @__PURE__ */ _("div", {
				className: "shrink-0 self-center",
				children: a
			}) : null,
			r && /* @__PURE__ */ _("button", {
				type: "button",
				onClick: () => l(!0),
				className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ _(ve, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/lib/formatMediaTime.ts
function ai(e) {
	let t = Math.max(0, Math.floor(e)), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), i = String(t % 60).padStart(2, "0");
	return n > 0 ? `${n}:${String(r).padStart(2, "0")}:${i}` : `${r}:${i}`;
}
//#endregion
//#region src/components/ui/useFieldControl.ts
function oi({ id: e, error: t, hint: n, describedBy: r, invalid: i, required: a }) {
	let o = u(), s = c(yr), l = e ?? s?.id ?? o, d = t ? `${l}-error` : void 0, f = n ? `${l}-hint` : void 0;
	return {
		inputId: l,
		errorId: d,
		hintId: f,
		describedBy: br(r, s?.describedBy, f, d),
		invalid: i ?? (!!t || s?.invalid || void 0),
		required: a ?? s?.required,
		placeholderLabel: s?.placeholderLabel
	};
}
//#endregion
//#region src/components/ui/Select.tsx
var si = a(({ label: e, labelPlacement: t = "above", error: n, options: r, className: i, id: a, hint: o, controlSize: c, required: u, "aria-describedby": d, "aria-invalid": f, ...p }, g) => {
	let y = oi({
		id: a,
		error: n,
		hint: o,
		describedBy: d,
		invalid: f,
		required: u
	}), { inputId: b, errorId: x, hintId: S } = y, C = rr(c), w = m(null), T = s((e) => {
		if (w.current = e, typeof g == "function") return g(e);
		g && (g.current = e);
	}, [g]), E = t === "placeholder" && e ? e : e ? void 0 : y.placeholderLabel, D = !!E && !p.multiple && (!p.size || p.size <= 1), O = p.value !== void 0, [A, j] = h(p.value ?? p.defaultValue ?? ""), M = O ? p.value ?? "" : A, N = D && M === "", P = r.some((e) => !("options" in e) && e.value === ""), F = (e) => /* @__PURE__ */ _("option", {
		value: e.value,
		disabled: e.disabled,
		style: D ? { color: "var(--text-primary)" } : void 0,
		children: e.label
	}, e.value);
	return l(() => {
		let e = w.current;
		if (!e || O || !D) return;
		let t = !0;
		queueMicrotask(() => {
			t && j(e.value);
		});
		let n = e.form, r, i = () => {
			clearTimeout(r), r = setTimeout(() => {
				j(e.value);
			}, 0);
		};
		n?.addEventListener("reset", i);
		let a = new MutationObserver(() => {
			j(e.value);
		});
		return a.observe(e, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: ["value", "selected"]
		}), () => {
			t = !1, n?.removeEventListener("reset", i), a.disconnect(), clearTimeout(r);
		};
	}, [
		O,
		D,
		p.form
	]), /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		children: [
			o && /* @__PURE__ */ _("p", {
				id: S,
				className: "text-text-secondary text-xs",
				children: o
			}),
			(e || n) && /* @__PURE__ */ v("div", {
				className: q("flex items-center justify-between", D && !n && "sr-only"),
				children: [e && /* @__PURE__ */ _("label", {
					htmlFor: b,
					className: q("ui-field-label font-label text-xs font-medium", D && "sr-only"),
					children: e
				}), n && /* @__PURE__ */ _("p", {
					id: x,
					className: "text-2xs text-red",
					children: n
				})]
			}),
			/* @__PURE__ */ v("div", {
				className: "relative",
				"data-control-size": D ? C : void 0,
				children: [
					/* @__PURE__ */ v("select", {
						ref: D ? T : g,
						"data-control-size": C,
						required: y.required,
						"aria-invalid": y.invalid,
						"aria-describedby": y.describedBy,
						id: b,
						className: q("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", n ? "border-red" : "border-border", i),
						...p,
						value: D && O ? p.value ?? "" : p.value ?? void 0,
						defaultValue: D && !O ? p.defaultValue ?? "" : p.defaultValue,
						onChange: D ? (e) => {
							O || j(e.currentTarget.value), p.onChange?.(e);
						} : p.onChange,
						style: N ? {
							...p.style,
							color: "transparent"
						} : p.style,
						children: [D && !P && /* @__PURE__ */ _("option", {
							value: "",
							disabled: !0,
							hidden: !0
						}), r.map((e, t) => "options" in e ? /* @__PURE__ */ _("optgroup", {
							label: e.label,
							style: D ? { color: "var(--text-primary)" } : void 0,
							children: e.options.map(F)
						}, `group-${t}`) : F(e))]
					}),
					N && /* @__PURE__ */ _("span", {
						"aria-hidden": "true",
						className: "ui-select-placeholder text-text-disabled font-control pointer-events-none absolute top-1/2 -translate-y-1/2 truncate",
						children: E
					}),
					/* @__PURE__ */ _(k, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" })
				]
			})
		]
	});
});
si.displayName = "Select";
//#endregion
//#region src/components/ui/AudioPlayer.tsx
function ci() {
	return q("text-text-tertiary hover:text-text-primary hover:bg-bg-hover inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-md font-medium", "transition-colors duration-[100ms] ease-out disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2");
}
var li = a(function(e, t) {
	return /* @__PURE__ */ _(ui, {
		...e,
		ref: t
	}, e.src);
}), ui = a(function({ src: e, title: t = "Audio recording", preload: n = "metadata", onTimeUpdate: r, onError: i, downloadHref: a, downloadName: o, variant: s = "plain", skipSeconds: c = !1, showMute: l = !1, keyboardShortcuts: u = !0, playbackRates: f = [
	1,
	1.25,
	1.5,
	2
], className: p }, g) {
	let y = m(null), b = m(!1), x = m(null), [S, C] = h(!1), [w, T] = h(n !== "none"), [E, D] = h(), [O, k] = h(0), [A, j] = h(0), [M, N] = h(!1), [P, I] = h(1), L = [...new Set([1, ...f.filter((e) => Number.isFinite(e) && e > 0)])].sort((e, t) => e - t), R = O <= 0 || !!E, z = O > 0 ? Math.min(100, Math.max(0, A / O * 100)) : 0, B = typeof c == "number" && Number.isFinite(c) && c > 0, V = S ? oe : se, H = M ? _e : ge;
	async function U() {
		let t = y.current;
		if (!(!t || E || !e)) if (!t.paused) t.pause();
		else try {
			await t.play();
		} catch (e) {
			y.current === t && !(e instanceof DOMException && e.name === "AbortError") && W(e);
		}
	}
	function W(e) {
		y.current?.pause();
		let t = e instanceof Error ? e : /* @__PURE__ */ Error("Unable to load or play audio.");
		D(t.message), T(!1), C(!1), i?.(t);
	}
	function G(e) {
		let t = y.current;
		if (!t || !Number.isFinite(e) || E) return;
		if (!b.current) {
			let r = x.current === null && n === "none";
			x.current = e, r && (t.preload = "metadata", t.load());
			return;
		}
		let i = t.duration;
		if (!Number.isFinite(i) || i <= 0) return;
		let a = Math.min(i, Math.max(0, e));
		try {
			t.currentTime = a, j(a), r?.(a);
		} catch (e) {
			W(e);
		}
	}
	d(g, () => ({ seekTo: G }));
	function K() {
		let e = y.current?.duration;
		k(e && Number.isFinite(e) && e > 0 ? e : 0), T(!1);
	}
	return /* @__PURE__ */ v("div", {
		role: "group",
		"aria-label": t,
		className: q("space-y-3", s === "card" && "border-border bg-bg-secondary rounded-md border p-3", p),
		children: [
			s === "card" && /* @__PURE__ */ _("p", {
				className: "text-text-primary text-sm font-medium",
				children: t
			}),
			/* @__PURE__ */ _("audio", {
				ref: y,
				src: e,
				preload: n,
				onLoadStart: () => {
					T(!0), D(void 0);
				},
				onLoadedMetadata: () => {
					b.current = !0, K();
					let e = x.current;
					x.current = null, e !== null && G(e);
				},
				onDurationChange: K,
				onCanPlay: () => T(!1),
				onSuspend: () => T(!1),
				onWaiting: () => T(!0),
				onPlaying: () => {
					C(!0), T(!1);
				},
				onVolumeChange: (e) => N(e.currentTarget.muted),
				onPause: () => C(!1),
				onEnded: () => C(!1),
				onError: () => W(/* @__PURE__ */ Error("Unable to load audio recording.")),
				onTimeUpdate: (e) => {
					let t = e.currentTarget.currentTime;
					j(t), r?.(t);
				}
			}),
			/* @__PURE__ */ v("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [
					/* @__PURE__ */ v("div", {
						className: "flex shrink-0 items-center gap-1.5",
						children: [
							B && /* @__PURE__ */ _("button", {
								type: "button",
								className: ci(),
								"aria-label": `Back ${c} seconds`,
								disabled: R,
								onClick: () => G(A - c),
								children: /* @__PURE__ */ _(ce, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								})
							}),
							/* @__PURE__ */ _("button", {
								type: "button",
								"aria-label": S ? "Pause" : "Play",
								disabled: !!E || !e,
								className: "ui-audio-play bg-accent text-text-on-accent hover:bg-accent-hover flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed",
								onClick: U,
								children: /* @__PURE__ */ _(V, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})
							}),
							B && /* @__PURE__ */ _("button", {
								type: "button",
								className: ci(),
								"aria-label": `Forward ${c} seconds`,
								disabled: R,
								onClick: () => G(A + c),
								children: /* @__PURE__ */ _(le, {
									className: "h-3.5 w-3.5",
									"aria-hidden": "true"
								})
							})
						]
					}),
					/* @__PURE__ */ v("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ v("div", {
							className: "ui-audio-track",
							children: [
								/* @__PURE__ */ _("input", {
									type: "range",
									"aria-label": "Seek",
									"aria-valuetext": `${ai(A)} of ${ai(O)}`,
									min: 0,
									max: O,
									step: "any",
									value: A,
									disabled: R,
									className: "ui-audio-seek",
									onChange: (e) => G(Number(e.target.value)),
									onKeyDown: (e) => {
										if (u && !e.altKey && !e.ctrlKey && !e.metaKey && (e.key === " " || e.key.toLowerCase() === "k")) {
											e.preventDefault(), e.repeat || U();
											return;
										}
										let t = {
											ArrowRight: 5,
											ArrowUp: 5,
											ArrowLeft: -5,
											ArrowDown: -5,
											PageUp: 30,
											PageDown: -30
										}, n = e.key === "Home" ? 0 : e.key === "End" ? O : t[e.key] === void 0 ? void 0 : A + t[e.key];
										n !== void 0 && (e.preventDefault(), G(n));
									}
								}),
								/* @__PURE__ */ _("div", {
									"aria-hidden": "true",
									className: "ui-audio-fill",
									style: { width: `${z}%` }
								}),
								/* @__PURE__ */ _("div", {
									"aria-hidden": "true",
									className: "ui-audio-thumb",
									style: { left: `calc(${z}% - 0.375rem)` }
								})
							]
						}), /* @__PURE__ */ v("div", {
							className: "ui-audio-times text-text-tertiary mt-1 flex justify-between text-xs",
							children: [/* @__PURE__ */ _("span", { children: ai(A) }), /* @__PURE__ */ _("span", { children: ai(O) })]
						})]
					}),
					/* @__PURE__ */ _(si, {
						"aria-label": "Playback speed",
						controlSize: "compact",
						className: "w-auto",
						value: String(P),
						disabled: !!E,
						options: L.map((e) => ({
							value: String(e),
							label: `${e}×`
						})),
						onChange: (e) => {
							let t = Number(e.target.value);
							try {
								y.current && (y.current.playbackRate = t), I(t);
							} catch {
								e.target.value = String(P);
							}
						}
					}),
					l && /* @__PURE__ */ _("button", {
						type: "button",
						className: ci(),
						"aria-label": M ? "Unmute" : "Mute",
						"aria-pressed": M,
						disabled: !!E || !e,
						onClick: () => {
							let e = y.current;
							e && (e.muted = !e.muted, N(e.muted));
						},
						children: /* @__PURE__ */ _(H, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true"
						})
					}),
					a && /* @__PURE__ */ _("a", {
						href: a,
						download: o ?? "",
						className: ci(),
						"aria-label": "Download recording",
						title: "Download recording",
						children: /* @__PURE__ */ _(F, {
							className: "h-3.5 w-3.5",
							"aria-hidden": "true"
						})
					})
				]
			}),
			E ? /* @__PURE__ */ _("p", {
				role: "alert",
				className: "text-red text-xs",
				children: E
			}) : w ? /* @__PURE__ */ _("p", {
				role: "status",
				className: "text-text-secondary text-xs",
				children: "Loading audio…"
			}) : null
		]
	});
});
//#endregion
//#region src/components/ui/AuthCard.tsx
function di({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ _("div", {
		className: q("relative z-10 w-full max-w-sm", a),
		children: /* @__PURE__ */ v("div", {
			className: "bg-bg-secondary border-border rounded-lg border p-8 shadow-lg",
			children: [
				/* @__PURE__ */ v("div", {
					className: "mb-6 flex flex-col items-center",
					children: [
						n && /* @__PURE__ */ _("div", {
							className: "bg-accent-muted mb-3 flex h-12 w-12 items-center justify-center rounded-xl",
							children: /* @__PURE__ */ _(n, { className: "text-accent h-6 w-6" })
						}),
						/* @__PURE__ */ _("h1", {
							className: "text-text-primary text-lg font-semibold",
							children: e
						}),
						t && /* @__PURE__ */ _("p", {
							className: "text-text-secondary mt-1 text-xs",
							children: t
						})
					]
				}),
				r,
				i && /* @__PURE__ */ _("p", {
					className: "text-text-secondary mt-6 text-center text-xs",
					children: i
				})
			]
		})
	});
}
//#endregion
//#region src/components/ui/AuthorByline.tsx
function fi({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ v("div", {
		className: q("flex items-center gap-2", i),
		children: [/* @__PURE__ */ _(jn, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ v("div", { children: [/* @__PURE__ */ v("p", {
			className: q("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ _("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var pi = "font-label inline-flex items-center rounded-md font-medium", mi = {
	xs: "text-2xs gap-1 px-1.5",
	sm: "text-2xs gap-1.5 px-2 py-0.5",
	md: "text-xs gap-1.5 px-2.5 py-1"
}, hi = {
	xs: "h-1.5 w-1.5",
	sm: "h-1.5 w-1.5",
	md: "h-2 w-2"
}, gi = "cursor-pointer transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40", _i = {
	soft: "hover:text-text-primary",
	outline: "hover:border-border-strong hover:text-text-primary"
}, vi = !1;
function yi() {
	let e = !1;
	try {
		e = process.env.NODE_ENV !== "production";
	} catch {}
	!e || vi || (vi = !0, console.warn("[Badge] `selected` needs `onClick`; without it the badge renders as a static span and `selected` is ignored."));
}
var bi = a(function(e, t) {
	let { color: n, variant: r = "soft", size: i = "sm", dot: a, selected: o, onClick: s, disabled: c, className: l, children: u, ...d } = e;
	o !== void 0 && !s && yi();
	let f = s ? o : void 0, p = f !== void 0, m = Nn[p && !f ? "gray" : n ?? (p ? "accent" : "gray")], h = q(pi, mi[i], r === "outline" ? q("border", m.outline) : m.soft, f && (r === "outline" ? m.fill : "ring"), s && gi, p && !f && _i[r], c && !s && "opacity-40", l), y = /* @__PURE__ */ v(g, { children: [a && /* @__PURE__ */ _("span", { className: q(hi[i], "rounded-full", m.dot) }), u] });
	return s ? /* @__PURE__ */ _("button", {
		...d,
		ref: t,
		type: "button",
		disabled: c,
		...p && { "aria-pressed": f },
		onClick: s,
		className: h,
		children: y
	}) : /* @__PURE__ */ _("span", {
		...d,
		...c && { "aria-disabled": !0 },
		ref: t,
		className: h,
		children: y
	});
});
bi.displayName = "Badge";
//#endregion
//#region src/components/ui/badgeColors.ts
var xi = Nn, Si = /* @__PURE__ */ new Map();
function $(e, t) {
	if (!t) return {
		year: e.getFullYear(),
		month: e.getMonth() + 1,
		day: e.getDate(),
		hour: e.getHours(),
		minute: e.getMinutes(),
		second: e.getSeconds(),
		millisecond: e.getMilliseconds()
	};
	let n = Si.get(t);
	n || (n = new Intl.DateTimeFormat("en-GB-u-ca-iso8601-nu-latn", {
		timeZone: t,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}), Si.set(t, n));
	let r = {};
	for (let t of n.formatToParts(e)) t.type !== "literal" && (r[t.type] = Number(t.value));
	return {
		year: r.year,
		month: r.month,
		day: r.day,
		hour: r.hour,
		minute: r.minute,
		second: r.second,
		millisecond: e.getUTCMilliseconds()
	};
}
function Ci(e) {
	let t = /* @__PURE__ */ new Date(0);
	return t.setUTCFullYear(e.year, e.month - 1, e.day), t.setUTCHours(e.hour, e.minute, e.second, e.millisecond), t.getTime();
}
function wi(e, t, n = "compatible") {
	let r = Ci(e), i = new Date(r);
	if (!Object.values(e).every(Number.isInteger) || i.getUTCFullYear() !== e.year || i.getUTCMonth() + 1 !== e.month || i.getUTCDate() !== e.day || i.getUTCHours() !== e.hour || i.getUTCMinutes() !== e.minute || i.getUTCSeconds() !== e.second || i.getUTCMilliseconds() !== e.millisecond) throw RangeError("Invalid civil date and time");
	if (!t) {
		let t = /* @__PURE__ */ new Date(0);
		return t.setFullYear(e.year, e.month - 1, e.day), t.setHours(e.hour, e.minute, e.second, e.millisecond), t;
	}
	let a = /* @__PURE__ */ new Set();
	for (let e of [
		-48,
		-24,
		0,
		24,
		48
	]) {
		let n = r + e * 36e5;
		a.add(Ci($(new Date(n), t)) - n);
	}
	let o = [...a].map((e) => r - e).sort((e, t) => e - t), s = o.filter((e) => Ci($(new Date(e), t)) === r);
	if (s.length === 1) return new Date(s[0]);
	if (n === "reject") throw RangeError(s.length ? "This time occurs twice in the selected timezone" : "This time does not exist in the selected timezone");
	return s.length ? new Date(n === "later" ? s[s.length - 1] : s[0]) : new Date(n === "earlier" ? o[0] : o[o.length - 1]);
}
var Ti = 1440, Ei = 6e4, Di = [
	1,
	2,
	3,
	4,
	5
];
function Oi(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function ki(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Ai(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes() + t, e.getSeconds(), e.getMilliseconds());
}
function ji(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes());
}
function Mi(e, t = 1) {
	let n = Oi(e);
	return ki(n, -((n.getDay() - t + 7) % 7));
}
function Ni(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Pi(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Fi(e, t) {
	let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	return Math.round((n - r) / 864e5);
}
function Ii(e) {
	return e.getHours() * 60 + e.getMinutes() + e.getSeconds() / 60 + e.getMilliseconds() / Ei;
}
function Li(e, t) {
	let n = Ri(e, t);
	if (!Pi(n, e) || Ii(n) <= t) return n;
	let r = Math.floor(t);
	for (; r > 0 && Ii(Ri(e, r - 1)) !== r - 1;) r--;
	return /* @__PURE__ */ new Date(n.getTime() - (t - r) * Ei);
}
function Ri(e, t) {
	let n = Math.floor(t);
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, n, Math.round((t - n) * 60));
}
function zi(e) {
	let t = /^(\d{1,2}):(\d{2})$/.exec(e.trim());
	if (!t) throw RangeError(`Invalid time "${e}", expected HH:mm`);
	let n = Number(t[1]), r = Number(t[2]);
	if (r > 59 || n > 24 || n === 24 && r > 0) throw RangeError(`Invalid time "${e}"`);
	return n * 60 + r;
}
function Bi(e) {
	let t = Math.round(e), n = Math.floor(t / 60), r = t % 60;
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Vi(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Hi(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
	if (!t) throw RangeError(`Invalid date key "${e}"`);
	let n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
	if (Vi(n) !== e) throw RangeError(`Invalid date key "${e}"`);
	return n;
}
function Ui(e, t, n = "round") {
	if (t <= 0) return e;
	let r = n === "floor" ? Math.floor : n === "ceil" ? Math.ceil : Math.round, i = e / t;
	return r(n === "floor" ? i + 1e-9 : n === "ceil" ? i - 1e-9 : i) * t;
}
function Wi(e, t, n = "round") {
	return Ri(Oi(e), Ui(Ii(e), t, n));
}
function Gi(e) {
	return e === "day" || e === "threeDay" || e === "workWeek" || e === "week";
}
function Ki(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = Oi(t);
	switch (e) {
		case "day":
		case "timeline": return [i];
		case "threeDay": return [
			i,
			ki(i, 1),
			ki(i, 2)
		];
		case "week": {
			let e = Mi(i, r);
			return Array.from({ length: 7 }, (t, n) => ki(e, n));
		}
		case "workWeek": {
			let e = new Set(n.workWeekDays ?? Di), t = Mi(i, r), a = Array.from({ length: 7 }, (e, n) => ki(t, n)).filter((t) => e.has(t.getDay()));
			return a.length ? a : [i];
		}
		case "agenda": {
			let e = Math.max(1, Math.floor(n.agendaDays ?? 7));
			return Array.from({ length: e }, (e, t) => ki(i, t));
		}
		case "month": return qi(t, r).flat();
	}
}
function qi(e, t = 1) {
	let n = Ni(e), r = new Date(n.getFullYear(), n.getMonth() + 1, 0), i = Mi(n, t), a = [], o = i;
	for (; o <= r || a.length === 0;) {
		let e = Array.from({ length: 7 }, (e, t) => ki(o, t));
		a.push(e), o = ki(o, 7);
	}
	return a;
}
function Ji(e, t, n = {}) {
	let r = Ki(e, t, n);
	return {
		start: r[0],
		end: ki(r[r.length - 1], 1)
	};
}
function Yi(e, t, n, r = {}) {
	switch (e) {
		case "day":
		case "timeline": return ki(t, n);
		case "threeDay": return ki(t, 3 * n);
		case "week":
		case "workWeek": return ki(t, 7 * n);
		case "agenda": return ki(t, Math.max(1, r.agendaDays ?? 7) * n);
		case "month": return ji(t, n);
	}
}
var Xi = /* @__PURE__ */ new Map();
function Zi(e, t) {
	let n = `${e}|${JSON.stringify(t)}`, r = Xi.get(n);
	return r || (r = new Intl.DateTimeFormat(e, t), Xi.set(n, r)), r;
}
function Qi(e, t = {}) {
	return Zi(t.locale ?? "en-GB", {
		timeZone: t.timeZone,
		timeZoneName: t.timeZone ? "short" : void 0,
		hour: t.hour12 ? "numeric" : "2-digit",
		minute: "2-digit",
		hourCycle: t.hour12 ? "h12" : "h23"
	}).format(e);
}
function $i(e, t, n = {}) {
	return `${Qi(e, n)}–${Qi(t, n)}`;
}
function ea(e, t = {}) {
	if (!t.hour12) return Bi(e);
	let n = Ri(new Date(2e3, 0, 1), e);
	return Zi(t.locale ?? "en-GB", {
		hour: "numeric",
		minute: e % 60 ? "2-digit" : void 0,
		hour12: !0
	}).format(n);
}
function ta(e, t = "en-GB") {
	return Zi(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e);
}
function na(e, t, n = {}) {
	let r = n.locale ?? "en-GB";
	if (e === "month") return Zi(r, {
		month: "long",
		year: "numeric"
	}).format(t);
	let i = Ki(e, t, n), a = i[0], o = i[i.length - 1];
	if (i.length === 1) return ta(a, r);
	let s = a.getFullYear() === o.getFullYear(), c = s && a.getMonth() === o.getMonth(), l = Zi(r, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	if (c) return `${a.getDate()} – ${l.format(o)}`;
	let u = Zi(r, s ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	}), d = Zi(r, {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return `${u.format(a)} – ${d.format(o)}`;
}
function ra(e, t, n, r) {
	return e < r && n < t;
}
function ia(e, t, n) {
	let r = Oi(n), i = ki(r, 1), a = e.getTime(), o = Math.max(t.getTime(), a);
	if (o === a) {
		if (a < r.getTime() || a >= i.getTime()) return null;
	} else if (!ra(a, o, r.getTime(), i.getTime())) return null;
	let s = a < r.getTime(), c = o > i.getTime();
	return {
		startMinute: s ? 0 : Ii(e),
		endMinute: o >= i.getTime() ? Ti : Math.max(Ii(t), s ? 0 : Ii(e)),
		continuesBefore: s,
		continuesAfter: c
	};
}
function aa(e) {
	let t = e.filter(([e, t]) => t > e).map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]), n = [];
	for (let [e, r] of t) {
		let t = n[n.length - 1];
		t && e <= t[1] ? t[1] = Math.max(t[1], r) : n.push([e, r]);
	}
	return n;
}
function oa(e, t, n) {
	let r = [], i = e;
	for (let [e, a] of aa(n)) if (!(a <= i) && (e >= t || (e > i && r.push([i, Math.min(e, t)]), i = Math.max(i, a), i >= t))) break;
	return i < t && r.push([i, t]), r;
}
function sa(e, t = 0) {
	let n = e.map((e) => ({
		id: e.id,
		start: e.start,
		end: Math.max(e.end, e.start + t)
	})).sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), r = /* @__PURE__ */ new Map(), i = [], a = [], o = -Infinity, s = () => {
		let e = a.length;
		for (let t of i) {
			let n = 1;
			for (let r = t.column + 1; r < e && !i.some((e) => e.column === r && ra(t.start, t.end, e.start, e.end)); r++) n++;
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
function ca(e) {
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
function la(e) {
	return e === void 0 ? [] : typeof e == "string" ? [e] : e;
}
function ua(e, t, { emptyMatchesAll: n }) {
	if (t === void 0) return !0;
	let r = la(e);
	return r.length === 0 ? n : r.includes(t);
}
function da(e, t, n) {
	let r = la(e);
	if (t === void 0 || n === void 0 || t === n) return r.length ? [...r] : void 0;
	if (r.length === 0) return;
	let i = r.map((e) => e === t ? n : e);
	return [...new Set(i)];
}
function fa(e, t, n = []) {
	let r = /* @__PURE__ */ new Set(), i = e.start.getTime(), a = e.end.getTime();
	for (let e of [...t, ...n]) if (ra(e.start.getTime(), e.end.getTime(), i, a) && !("kind" in e && e.kind === "unavailable")) for (let t of la(e.resourceId)) r.add(t);
	return r;
}
function pa(e, t, n = {}) {
	let { fromDateKey: r, wallDateAtMinutes: i, toDateKey: a, startOfWeek: o, startOfDay: s, addDays: c, differenceInDays: l, weekday: u } = ba(n.timeZone), d = n.weekStartsOn ?? 1, f = [], p = t.start.getTime(), m = t.end.getTime();
	for (let n of e) {
		let e = zi(n.startTime), h = zi(n.endTime);
		h <= e && (h += Ti);
		let g = r(n.startDate), _ = (t) => {
			let r = i(t, e), o = i(t, h);
			if (o <= r || !ra(r.getTime(), o.getTime(), p, m)) return;
			let s = a(t);
			f.push({
				id: n.recurrence ? `${n.id}@${s}` : n.id,
				start: r,
				end: o,
				kind: n.kind ?? "available",
				resourceId: n.resourceId,
				label: n.label,
				color: n.color,
				editable: n.editable,
				seriesId: n.recurrence ? n.id : void 0,
				occurrenceKey: n.recurrence ? s : void 0,
				data: n.data
			});
		}, v = n.recurrence;
		if (!v) {
			_(g);
			continue;
		}
		let y = Math.max(1, Math.floor(v.interval ?? 1)), b = new Set(v.weekdays);
		if (b.size === 0) continue;
		let x = new Set(v.exclusions ?? []), S = v.until ? r(v.until) : null, C = o(g, d), w = s(t.start);
		w = c(w, -1), w < g && (w = g);
		let T = s(t.end);
		for (; w <= T && (!S || w <= S);) b.has(u(w)) && Math.floor(l(o(w, d), C) / 7) % y === 0 && !x.has(a(w)) && _(w), w = c(w, 1);
	}
	return f.sort((e, t) => e.start.getTime() - t.start.getTime());
}
function ma(e, t, n, r, i) {
	let a = Ui(t, r, "floor"), o = Ui(n, r, "floor"), s = J(Math.min(a, o), i.min, i.max - r), c = J(Math.max(a, o) + r, s + r, i.max), l = Li(e, s), u = Li(e, c);
	return u <= l && (u = new Date(l.getTime() + r * Ei)), {
		start: l,
		end: u
	};
}
function ha(e, t, n, r, i, a) {
	let o = (e.end.getTime() - e.start.getTime()) / Ei, s = Ui(n - r, i), c = Ii(e.start);
	c >= a.min && c + o <= a.max && (s = J(s, a.min, a.max - o));
	let l = Ri(t, s);
	return {
		start: l,
		end: new Date(l.getTime() + o * Ei)
	};
}
function ga(e, t, n, r, i) {
	let a = Oi(t), o = e.start.getTime() >= a.getTime() ? Ii(e.start) + r : r;
	return Li(a, J(Ui(n, r), Math.min(o, Ti), Math.max(i.max, o)));
}
function _a(e, t) {
	return {
		start: ki(e.start, t),
		end: ki(e.end, t)
	};
}
function va(e, t) {
	return e.start.getTime() === t.start.getTime() && e.end.getTime() === t.end.getTime();
}
function ya(e) {
	return e.allDay ? !0 : e.end.getTime() >= ki(e.start, 1).getTime();
}
function ba(e) {
	let t = (t) => $(t, e), n = (t) => wi(t, e), r = (e) => {
		let n = t(e);
		return `${String(n.year).padStart(4, "0")}-${String(n.month).padStart(2, "0")}-${String(n.day).padStart(2, "0")}`;
	}, i = (e) => n({
		...t(e),
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	}), a = (e, r) => {
		if (r === 0) return new Date(e);
		let i = t(e), a = new Date(Date.UTC(i.year, i.month - 1, i.day + r));
		return n({
			...i,
			year: a.getUTCFullYear(),
			month: a.getUTCMonth() + 1,
			day: a.getUTCDate()
		});
	}, o = (e, r) => {
		let i = t(e), a = new Date(Date.UTC(i.year, i.month - 1 + r, 1)), o = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth() + 1, 0)).getUTCDate();
		return n({
			...i,
			year: a.getUTCFullYear(),
			month: a.getUTCMonth() + 1,
			day: Math.min(i.day, o)
		});
	}, s = (e) => {
		let n = t(e);
		return new Date(Date.UTC(n.year, n.month - 1, n.day)).getUTCDay();
	}, c = (e, t = 1) => a(i(e), -((s(e) - t + 7) % 7)), l = (e) => n({
		...t(i(e)),
		day: 1
	}), u = (e, n) => {
		let r = t(e), i = t(n);
		return Math.round((Date.UTC(r.year, r.month - 1, r.day) - Date.UTC(i.year, i.month - 1, i.day)) / 864e5);
	}, d = (e, r) => {
		let i = t(e), a = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, Math.floor(r), 0, Math.round((r - Math.floor(r)) * Ei)));
		return n({
			year: a.getUTCFullYear(),
			month: a.getUTCMonth() + 1,
			day: a.getUTCDate(),
			hour: a.getUTCHours(),
			minute: a.getUTCMinutes(),
			second: a.getUTCSeconds(),
			millisecond: a.getUTCMilliseconds()
		});
	}, f = (e, n) => {
		let r = t(e);
		return u(e, n) * Ti + r.hour * 60 + r.minute + r.second / 60 + r.millisecond / Ei;
	}, p = (t, n) => {
		let r = d(t, n), i = f(r, t);
		if (!e || i <= n + 1e-8) return r;
		let a = Math.floor(r.getTime() - (i - n) * Ei), o = r.getTime();
		for (; a < o;) {
			let e = Math.floor((a + o) / 2);
			f(new Date(e), t) < n ? a = e + 1 : o = e;
		}
		return new Date(o);
	}, m = (e) => {
		if (!Number.isFinite(e.min) || !Number.isFinite(e.max) || e.max <= e.min) throw RangeError("Calendar time bounds must contain a positive interval of real instants");
	}, h = e ? (e, t) => new Date(i(e).getTime() + t * Ei) : Ri, g = e ? (e) => (e.getTime() - i(e).getTime()) / Ei : Ii, _ = e ? (e, t) => new Date(e.getTime() + t * Ei) : Ai, v = (e) => {
		let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
		if (!t) throw RangeError(`Invalid date key "${e}"`);
		let i = n({
			year: +t[1],
			month: +t[2],
			day: +t[3],
			hour: 0,
			minute: 0,
			second: 0,
			millisecond: 0
		});
		if (r(i) !== e) throw RangeError(`Invalid date key "${e}"`);
		return i;
	}, y = (e, t = 1) => {
		let n = l(e), r = o(n, 1), i = [];
		for (let e = c(n, t); e < r; e = a(e, 7)) i.push(Array.from({ length: 7 }, (t, n) => a(e, n)));
		return i;
	}, b = (e, t, n = {}) => {
		let r = i(t);
		if (e === "month") return y(r, n.weekStartsOn).flat();
		if (e === "week" || e === "workWeek") {
			let t = c(r, n.weekStartsOn), i = Array.from({ length: 7 }, (e, n) => a(t, n));
			if (e === "week") return i;
			let o = new Set(n.workWeekDays ?? Di), l = i.filter((e) => o.has(s(e)));
			return l.length ? l : [r];
		}
		let o = e === "threeDay" ? 3 : e === "agenda" ? Math.max(1, Math.floor(n.agendaDays ?? 7)) : 1;
		return Array.from({ length: o }, (e, t) => a(r, t));
	}, x = (t, n, r) => {
		if (!e) return ia(t, n, r);
		let o = i(r).getTime(), s = a(i(r), 1).getTime(), c = t.getTime(), l = Math.max(c, n.getTime());
		return (l === c ? c < o || c >= s : !ra(c, l, o, s)) ? null : {
			startMinute: Math.max(0, (c - o) / Ei),
			endMinute: Math.min(s - o, l - o) / Ei,
			continuesBefore: c < o,
			continuesAfter: l > s
		};
	}, S = (e) => !!e.allDay || e.end >= a(e.start, 1), C = (t, n) => Zi(t, {
		...n,
		...e ? { timeZone: e } : {}
	}), w = (e, t = "en-GB") => C(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e), T = (n, r, i = {}) => {
		if (!e) return na(n, r, i);
		let a = i.locale ?? "en-GB";
		if (n === "month") return C(a, {
			month: "long",
			year: "numeric"
		}).format(r);
		let o = b(n, r, i), s = o[0], c = o[o.length - 1];
		if (o.length === 1) return w(s, a);
		let l = t(s), u = t(c);
		return l.year === u.year && l.month === u.month ? `${l.day} – ${C(a, {
			day: "numeric",
			month: "long",
			year: "numeric"
		}).format(c)}` : `${C(a, {
			day: "numeric",
			month: "short",
			...l.year === u.year ? {} : { year: "numeric" }
		}).format(s)} – ${C(a, {
			day: "numeric",
			month: "short",
			year: "numeric"
		}).format(c)}`;
	}, E = (n, r, i, a, o, s) => {
		if (!e) return ha(n, r, i, a, o, s);
		m(s);
		let c = (n.end.getTime() - n.start.getTime()) / Ei, l = Ui(i - a, o), f = (e) => {
			let n = h(r, e), i = t(n);
			return u(n, r) * Ti + i.hour * 60 + i.minute;
		}, p = d(n.start, f(s.min)), g = d(n.start, f(s.max));
		n.start >= p && n.end <= g && c <= s.max - s.min && (l = J(l, s.min, s.max - c));
		let v = h(r, l);
		return {
			start: v,
			end: _(v, c)
		};
	};
	return {
		parts: t,
		weekday: s,
		startOfDay: i,
		addDays: a,
		addMonths: o,
		addMinutes: _,
		startOfWeek: c,
		startOfMonth: l,
		toDateKey: r,
		fromDateKey: v,
		differenceInDays: u,
		isSameDay: (e, t) => r(e) === r(t),
		dateAtMinutes: h,
		wallDateAtMinutes: d,
		minutesOfDay: g,
		getMonthWeeks: y,
		getVisibleDays: b,
		getViewRange: (e, t, n = {}) => {
			let r = b(e, t, n);
			return {
				start: r[0],
				end: a(r[r.length - 1], 1)
			};
		},
		shiftDate: (e, t, n, r = {}) => e === "month" ? o(t, n) : a(t, n * (e === "threeDay" ? 3 : e === "week" || e === "workWeek" ? 7 : e === "agenda" ? Math.max(1, r.agendaDays ?? 7) : 1)),
		getFormatter: C,
		formatLongDate: w,
		formatRangeTitle: T,
		daySegment: x,
		isAllDayLike: S,
		eventsOnDay: (e, t) => e.filter((e) => x(e.start, e.end, t)).sort((e, t) => Number(S(t)) - Number(S(e)) || e.start.getTime() - t.start.getTime() || t.end.getTime() - e.end.getTime() || e.title.localeCompare(t.title)),
		computeCreateRange: (t, n, r, i, a) => {
			if (!e) return ma(t, n, r, i, a);
			let o = Ui(n, i, "floor"), s = Ui(r, i, "floor");
			m(a);
			let c = Math.min(i, a.max - a.min), l = J(Math.min(o, s), a.min, a.max - c);
			return {
				start: h(t, l),
				end: h(t, J(Math.max(o, s) + i, l + c, a.max))
			};
		},
		computeMoveRange: E,
		computeResizeEnd: (t, n, r, a, o) => {
			if (!e) return ga(t, n, r, a, o);
			m(o);
			let s = Math.max(0, (t.start.getTime() - i(n).getTime()) / Ei) + a;
			return h(n, J(Ui(r, a), s, Math.max(o.max, s)));
		},
		computeNudgeRange: (e, t, n) => E(e, i(e.start), g(e.start) + t, 0, 1, n),
		shiftRangeDays: (t, n) => {
			if (!e) return _a(t, n);
			if (t.allDay) return {
				start: a(t.start, n),
				end: a(t.end, n)
			};
			let r = a(t.start, n);
			return {
				start: r,
				end: new Date(r.getTime() + t.end.getTime() - t.start.getTime())
			};
		},
		dayBounds: (t, n) => {
			if (!e) return n;
			let r = i(t).getTime(), a = {
				min: (p(t, n.min).getTime() - r) / Ei,
				max: (p(t, n.max).getTime() - r) / Ei
			};
			return m(a), a;
		}
	};
}
function xa(e, t, n, r, i = !0) {
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
	let s = ba(n.timeZone), c = /* @__PURE__ */ new Map(), l = e.map(({ day: e, bounds: t }) => {
		let i = s.toDateKey(e), a = c.get(i);
		if (a) return a;
		let l = o(t), u = l.map((t) => s.dateAtMinutes(e, t)), d = u.map((e) => Qi(e, n)), f = Zi(n.locale ?? "en-GB", {
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
//#region src/components/ui/calendar/context.ts
var Sa = r(null);
function Ca() {
	let e = c(Sa);
	if (!e) throw Error("Calendar views must render inside <Calendar>");
	return e;
}
//#endregion
//#region src/components/ui/calendar/AgendaView.tsx
function wa({ days: e, events: t, availability: n, label: r }) {
	let i = Ca(), { daySegment: a, eventsOnDay: o, getFormatter: s, isAllDayLike: c, isSameDay: l, toDateKey: u } = i.dates, d = s(i.locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}), f = (e) => la(e).map((e) => i.resourceById.get(e)?.title).filter(Boolean).join(", ");
	return /* @__PURE__ */ _("div", {
		className: "ui-cal-scroll min-h-0 flex-1 overflow-y-auto",
		"aria-label": r,
		role: "region",
		children: e.map((e) => {
			let r = o(t, e).map((e) => ({
				type: "event",
				value: e
			}));
			if (i.agendaShowAvailability) {
				for (let t of n) a(t.start, t.end, e) && r.push({
					type: "availability",
					value: t
				});
				r.sort((e, t) => {
					let n = Number(e.type === "event" && c(e.value)) - Number(t.type === "event" && c(t.value));
					return n ? -n : e.value.start.getTime() - t.value.start.getTime() || (e.type === "availability" ? -1 : 1);
				});
			}
			let s = l(e, i.now);
			return /* @__PURE__ */ v("section", {
				"aria-label": d.format(e),
				children: [/* @__PURE__ */ _("h3", {
					className: q("ui-cal-agenda-day border-border border-b px-3 py-1.5 text-xs font-semibold", s ? "text-accent" : "text-text-primary"),
					children: /* @__PURE__ */ _("button", {
						type: "button",
						className: "cursor-pointer hover:underline",
						onClick: () => i.openDay(e),
						"aria-current": s ? "date" : void 0,
						children: d.format(e)
					})
				}), r.length === 0 ? /* @__PURE__ */ _("p", {
					className: "text-text-tertiary border-border border-b px-3 py-2 text-xs",
					children: i.labels.noEvents
				}) : /* @__PURE__ */ _("ul", {
					className: "divide-border divide-y border-border border-b",
					children: r.map((e) => /* @__PURE__ */ _("li", { children: e.type === "event" ? /* @__PURE__ */ _(Ta, {
						event: e.value,
						resources: f(e.value.resourceId)
					}) : /* @__PURE__ */ _(Ea, {
						block: e.value,
						resources: f(e.value.resourceId)
					}) }, `${e.type}:${e.value.id}`))
				})]
			}, u(e));
		})
	});
}
function Ta({ event: e, resources: t }) {
	let n = Ca(), { isAllDayLike: r } = n.dates, i = n.statusLabel(e), a = r(e) ? n.labels.allDay : $i(e.start, e.end, n);
	return /* @__PURE__ */ v("div", {
		role: "button",
		tabIndex: 0,
		"aria-label": n.describeEvent(e),
		"data-status": e.status ?? "confirmed",
		className: q("ui-cal-agenda-row hover:bg-bg-hover flex cursor-pointer items-start gap-3 px-3 py-2 transition-colors duration-[100ms]", `ui-cal-c-${n.eventColor(e)}`),
		onClick: () => n.clickEvent(e),
		onKeyDown: (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickEvent(e));
		},
		children: [
			/* @__PURE__ */ _("span", {
				className: "text-text-secondary font-mono w-24 shrink-0 text-xs",
				children: a
			}),
			/* @__PURE__ */ _("span", {
				className: "ui-cal-dot mt-1",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ v("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ _("span", {
					className: "ui-cal-title block text-xs",
					children: e.title
				}), e.description && /* @__PURE__ */ _("span", {
					className: "ui-cal-meta block text-2xs",
					children: e.description
				})]
			}),
			t && /* @__PURE__ */ _("span", {
				className: "text-text-tertiary hidden max-w-40 truncate text-2xs sm:block",
				children: t
			}),
			(i || e.badge) && /* @__PURE__ */ v("span", {
				className: "flex shrink-0 gap-1",
				children: [i && /* @__PURE__ */ _("span", {
					className: "ui-cal-badge",
					children: i
				}), e.badge && /* @__PURE__ */ _("span", {
					className: "ui-cal-badge",
					children: e.badge
				})]
			})
		]
	});
}
function Ea({ block: e, resources: t }) {
	let n = Ca(), r = e.kind ?? "available", i = r === "available" ? n.labels.available : n.labels.unavailable, a = n.hasBlockClick;
	return /* @__PURE__ */ v("div", {
		role: a ? "button" : void 0,
		tabIndex: a ? 0 : void 0,
		"aria-label": n.describeBlock(e),
		className: q("text-text-tertiary flex items-start gap-3 px-3 py-1.5 text-2xs", a && "hover:bg-bg-hover cursor-pointer transition-colors duration-[100ms]", `ui-cal-c-${n.blockColor(e)}`),
		onClick: a ? () => n.clickBlock(e) : void 0,
		onKeyDown: a ? (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickBlock(e));
		} : void 0,
		children: [
			/* @__PURE__ */ _("span", {
				className: "font-mono w-24 shrink-0",
				children: $i(e.start, e.end, n)
			}),
			/* @__PURE__ */ _("span", {
				className: q("ui-cal-agenda-swatch mt-0.5", r === "unavailable" && "ui-cal-agenda-swatch-off"),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ v("span", {
				className: "min-w-0 flex-1 truncate",
				children: [i, e.label ? ` · ${e.label}` : ""]
			}),
			t && /* @__PURE__ */ _("span", {
				className: "hidden max-w-40 truncate sm:block",
				children: t
			})
		]
	});
}
//#endregion
//#region src/components/ui/calendar/MonthView.tsx
var Da = 96, Oa = 224;
function ka(e) {
	return `${e.type}:${e.value.id}`;
}
function Aa({ date: e, events: t, availability: n, label: r }) {
	let i = Ca(), { addDays: a, daySegment: o, differenceInDays: c, eventsOnDay: u, formatLongDate: d, fromDateKey: g, getFormatter: y, getMonthWeeks: b, isAllDayLike: x, isSameDay: S, shiftRangeDays: C, toDateKey: w } = i.dates, T = p(() => b(e, i.weekStartsOn), [
		e,
		i.weekStartsOn,
		b
	]), E = m(null), D = m(null), [O, k] = h(null), [A, j] = h(null), M = qt(), N = m(null), [P, F] = h(null), [I, L] = h(null), R = m(null), z = m(i);
	f(() => {
		z.current = i;
	}), l(() => {
		let e = R;
		return () => {
			e.current?.cleanup(), e.current = null;
		};
	}, []);
	let B = m(!1), [V, H] = h(null);
	l(() => {
		let e = E.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			H(e[0]?.contentRect.height ?? null);
		});
		return t.observe(e), () => t.disconnect();
	}, []);
	let U = s(() => j(null), []);
	Tn(A !== null, U, [D]), wn(A !== null, N, D, (e, t) => {
		let n = Math.max(e.width, Oa);
		return {
			top: Math.max(8, e.top),
			left: Math.max(8, Math.min(e.left, t - n - 8)),
			width: n
		};
	}), l(() => {
		A && D.current?.querySelector("[data-cal-close]")?.focus();
	}, [A]);
	let W = i.editLayer === "availability", G = i.dates.parts(e).month, K = p(() => T.flat(), [T]), ee = w(i.now), te = K.find((e) => w(e) === ee && i.dates.parts(e).month === G) ?? K.find((t) => i.dates.parts(t).month === G && i.dates.parts(t).day === i.dates.parts(e).day) ?? K.find((e) => i.dates.parts(e).month === G) ?? K[0], ne = O && K.some((e) => w(e) === O) ? O : w(te), re = p(() => {
		let e = /* @__PURE__ */ new Map();
		for (let r of K) {
			let i = u(t, r).map((e) => ({
				type: "event",
				value: e
			})), a = n.filter((e) => o(e.start, e.end, r)).sort((e, t) => e.start.getTime() - t.start.getTime()), s = a.some((e) => (e.kind ?? "available") === "available"), c = W ? a.map((e) => ({
				type: "availability",
				value: e
			})) : i;
			e.set(w(r), {
				items: c,
				hasAvailable: s
			});
		}
		return e;
	}, [
		K,
		t,
		n,
		W,
		u,
		o,
		w
	]), ie = y(i.locale, { weekday: "short" }), ae = i.monthMaxEvents ?? (V ? Math.max(1, Math.floor((Math.max(V / T.length, Da) - 28) / 20)) : 3);
	function oe(e) {
		let t = w(e);
		k(t), requestAnimationFrame(() => {
			E.current?.querySelector(`[data-cal-date="${t}"]`)?.focus();
		});
	}
	function se(e, t) {
		if (e.target !== e.currentTarget) return;
		let n = {
			ArrowLeft: -1,
			ArrowRight: 1,
			ArrowUp: -7,
			ArrowDown: 7
		};
		if (e.key in n) {
			e.preventDefault();
			let r = a(t, n[e.key]);
			K.some((e) => S(e, r)) && oe(r);
		} else if (e.key === "Home" || e.key === "End") {
			e.preventDefault();
			let n = (i.dates.weekday(t) - i.weekStartsOn + 7) % 7;
			oe(a(t, e.key === "Home" ? -n : 6 - n));
		} else (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i.openDay(t));
	}
	function ce(e) {
		return e.type === "event" ? i.canEditEvent(e.value) : i.canEditBlock(e.value);
	}
	function le(e, t) {
		let n = {
			action: "move",
			...C(e.value, t),
			resourceIds: da(e.value.resourceId, void 0, void 0)
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
	function ue(e) {
		e.type === "event" ? i.clickEvent(e.value) : i.clickBlock(e.value);
	}
	function de(e, t, n) {
		if (e.button !== 0 || R.current || (e.stopPropagation(), e.pointerType === "touch" || !ce(t))) return;
		let r = (e) => {
			let t = R.current;
			if (!t || e.pointerId !== t.pointerId) return;
			if (!t.started) {
				if (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) < 4) return;
				t.started = !0, L(ka(t.item));
			}
			let n = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-cal-date]"), r = n && E.current?.contains(n) ? n.dataset.calDate ?? null : null;
			t.overKey = r ?? void 0, F(r);
		}, i = (e) => {
			let t = R.current;
			if (!t || (R.current = null, t.cleanup(), F(null), L(null), t.started && (B.current = !0, setTimeout(() => {
				B.current = !1;
			}, 0)), !e || !t.started || !t.overKey || t.overKey === t.originKey)) return;
			let n = c(g(t.overKey), g(t.originKey));
			z.current.commit(le(t.item, n), "pointer");
		}, a = (e) => {
			e.pointerId === R.current?.pointerId && i(!0);
		}, o = (e) => {
			e.pointerId === R.current?.pointerId && i(!1);
		}, s = (e) => {
			e.key === "Escape" && i(!1);
		};
		window.addEventListener("pointermove", r), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", o), window.addEventListener("keydown", s), R.current = {
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
	function fe(e) {
		B.current || ue(e);
	}
	function pe(e, t) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), e.stopPropagation(), ue(t);
			return;
		}
		if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
			if (e.preventDefault(), e.stopPropagation(), !ce(t)) return;
			i.commit(le(t, e.key === "ArrowLeft" ? -1 : 1), "keyboard");
		}
	}
	function me(e, t) {
		e.target !== e.currentTarget || !i.selectable || i.commit({
			target: "selection",
			action: "create",
			start: t,
			end: a(t, 1),
			allDay: !0
		}, "pointer");
	}
	let he = (e, t) => {
		let n = ka(e), r = e.value.placeholder ? {
			"aria-hidden": !0,
			"data-placeholder": !0
		} : {
			role: "button",
			tabIndex: 0,
			onPointerDown: (n) => de(n, e, t),
			onClick: () => fe(e),
			onKeyDown: (t) => pe(t, e)
		};
		if (e.type === "availability") {
			let t = e.value;
			return /* @__PURE__ */ v("div", {
				className: q("ui-cal-chip", `ui-cal-c-${i.blockColor(t)}`),
				"data-all-day": !0,
				"data-dragging": I === n || void 0,
				"aria-label": t.placeholder ? void 0 : i.describeBlock(t),
				...r,
				children: [i.display.time && /* @__PURE__ */ _("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: $i(t.start, t.end, i)
				}), i.display.blockLabels && /* @__PURE__ */ _("span", {
					className: "ui-cal-title",
					children: t.label ?? ((t.kind ?? "available") === "available" ? i.labels.available : i.labels.unavailable)
				})]
			}, n);
		}
		let a = e.value, o = x(a), s = i.statusLabel(a);
		return /* @__PURE__ */ v("div", {
			className: q("ui-cal-chip", `ui-cal-c-${i.eventColor(a)}`),
			"data-all-day": o || void 0,
			"data-status": a.status ?? "confirmed",
			"data-dragging": I === n || void 0,
			"aria-label": a.placeholder ? void 0 : i.describeEvent(a),
			title: s ? `${a.title} (${s})` : a.title,
			...r,
			children: [
				!o && /* @__PURE__ */ _("span", {
					className: "ui-cal-dot",
					"aria-hidden": "true"
				}),
				!o && i.display.time && /* @__PURE__ */ _("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: Qi(a.start, i)
				}),
				/* @__PURE__ */ _("span", {
					className: "ui-cal-title font-medium",
					children: a.title
				})
			]
		}, n);
	};
	return /* @__PURE__ */ v("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ _("div", {
			className: "border-border grid grid-cols-7 border-b",
			"aria-hidden": "true",
			children: T[0].map((e) => /* @__PURE__ */ _("div", {
				className: "text-text-tertiary py-1.5 text-center text-2xs font-medium uppercase",
				children: ie.format(e)
			}, i.dates.weekday(e)))
		}), /* @__PURE__ */ _("div", {
			ref: E,
			role: "grid",
			"aria-label": r,
			"data-cal-drag": I ? "move" : void 0,
			className: "ui-cal-scroll flex min-h-0 flex-1 flex-col overflow-y-auto",
			children: T.map((e) => /* @__PURE__ */ _("div", {
				role: "row",
				className: "grid min-h-24 flex-1 grid-cols-7",
				children: e.map((e) => {
					let t = w(e), n = re.get(t), r = n?.items ?? [], a = Math.max(1, ae), o = r.length > a, s = o ? r.slice(0, a - 1) : r, c = t === ee, l = i.dates.parts(e).month !== G, u = i.hasAvailability && i.shadeOutsideAvailability && !n?.hasAvailable;
					return /* @__PURE__ */ v("div", {
						role: "gridcell",
						tabIndex: t === ne ? 0 : -1,
						"data-cal-date": t,
						"data-outside-month": l || void 0,
						"data-unavailable": u || void 0,
						"data-drop-target": P === t || void 0,
						"aria-label": `${d(e, i.locale)}${r.length ? `, ${i.labels.eventCount(r.length)}` : ""}`,
						"aria-current": c ? "date" : void 0,
						className: "ui-cal-month-cell flex flex-col gap-0.5 p-1",
						onFocus: (e) => {
							e.target === e.currentTarget && k(t);
						},
						onKeyDown: (t) => se(t, e),
						onClick: (t) => me(t, e),
						children: [
							/* @__PURE__ */ _("button", {
								type: "button",
								tabIndex: -1,
								onClick: () => i.openDay(e),
								"aria-label": d(e, i.locale),
								className: q("flex h-5 min-w-5 cursor-pointer items-center justify-center self-start rounded-full px-1 text-2xs font-semibold transition-colors duration-[100ms]", c ? "bg-accent text-text-on-accent" : l ? "text-text-tertiary hover:bg-bg-hover" : "text-text-primary hover:bg-bg-hover"),
								children: i.dates.parts(e).day
							}),
							s.map((e) => he(e, t)),
							o && /* @__PURE__ */ _("button", {
								type: "button",
								className: "text-text-secondary hover:bg-bg-hover hover:text-text-primary cursor-pointer self-start rounded-md px-1 text-2xs font-medium transition-colors duration-[100ms]",
								"aria-haspopup": "dialog",
								"aria-expanded": A === t,
								onClick: (e) => {
									N.current = e.currentTarget.closest("[data-cal-date]"), j(t);
								},
								children: i.labels.more(r.length - s.length)
							}),
							A === t && xe(/* @__PURE__ */ v("div", {
								ref: D,
								role: "dialog",
								"aria-label": d(e, i.locale),
								className: "ui-cal ui-cal-popover flex flex-col gap-0.5",
								children: [/* @__PURE__ */ v("div", {
									className: "mb-1 flex items-center justify-between gap-2 pl-1",
									children: [/* @__PURE__ */ _("button", {
										type: "button",
										className: "text-text-primary cursor-pointer text-xs font-semibold hover:underline",
										onClick: () => i.openDay(e),
										children: d(e, i.locale)
									}), /* @__PURE__ */ _("button", {
										type: "button",
										"aria-label": i.labels.close,
										className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
										onClick: U,
										"data-cal-close": !0,
										children: /* @__PURE__ */ _(ve, { className: "h-3.5 w-3.5" })
									})]
								}), r.map((e) => he(e, t))]
							}), M ?? document.body)
						]
					}, t);
				})
			}, w(e[0])))
		})]
	});
}
//#endregion
//#region src/components/ui/calendar/items.tsx
function ja({ event: e, style: t, resizeEdge: n, compact: r, dense: i, continuesBefore: a, continuesAfter: o, dragging: s, onKeyDown: c, onClick: l }) {
	let u = Ca(), d = u.canEditEvent(e), f = e.allDay ? u.labels.allDay : $i(e.start, e.end, u), { display: p } = u, m = p.status ? u.statusLabel(e) : void 0, h = [p.time && f, m].filter(Boolean).join(" · "), y = !!e.placeholder, b = u.renderEvent?.(e, {
		view: u.view,
		compact: r,
		timeLabel: f,
		statusLabel: m
	});
	return /* @__PURE__ */ v("div", {
		role: y ? void 0 : "button",
		tabIndex: y ? void 0 : 0,
		"aria-hidden": y || void 0,
		"data-cal-item": y ? void 0 : "event",
		"data-cal-id": e.id,
		"data-status": e.status ?? "confirmed",
		"data-placeholder": y || void 0,
		"data-editable": d || void 0,
		"data-dragging": s || void 0,
		"data-continues-before": a || void 0,
		"data-continues-after": o || void 0,
		"aria-label": y ? void 0 : u.describeEvent(e),
		"aria-describedby": !y && (d || u.hasEventClick) ? u.itemHelpId : void 0,
		title: `${e.title}\n${f}${e.description ? `\n${e.description}` : ""}`,
		className: q("ui-cal-event", `ui-cal-c-${u.eventColor(e)}`),
		style: t,
		onKeyDown: y ? void 0 : c,
		onClick: y ? void 0 : l,
		children: [b ?? (i ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("span", {
			className: "ui-cal-title",
			children: e.title
		}), h && /* @__PURE__ */ _("span", {
			className: "ui-cal-meta font-mono",
			children: h
		})] }) : /* @__PURE__ */ _(Ma, {
			event: e,
			compact: r,
			timeLabel: p.time ? f : void 0,
			statusLabel: m,
			description: p.description ? e.description : void 0,
			badge: p.badge ? e.badge : void 0
		})), n && d && !o && /* @__PURE__ */ _("div", {
			"data-cal-resize": !0,
			"data-edge": n,
			className: "ui-cal-resize",
			"aria-hidden": "true"
		})]
	});
}
function Ma({ event: e, compact: t, timeLabel: n, statusLabel: r, description: i, badge: a }) {
	return t ? /* @__PURE__ */ v("div", {
		className: "flex min-w-0 items-center gap-1",
		children: [/* @__PURE__ */ v("span", {
			className: "ui-cal-title min-w-0",
			children: [e.title, !e.allDay && n && /* @__PURE__ */ v("span", {
				className: "ui-cal-inline-time font-mono",
				children: [", ", n.split("–")[0]]
			})]
		}), r && /* @__PURE__ */ _("span", {
			className: "ui-cal-badge shrink-0",
			children: r
		})]
	}) : /* @__PURE__ */ v(g, { children: [
		/* @__PURE__ */ _("span", {
			className: "ui-cal-title",
			children: e.title
		}),
		n && /* @__PURE__ */ _("span", {
			className: "ui-cal-meta font-mono",
			children: n
		}),
		i && /* @__PURE__ */ _("span", {
			className: "ui-cal-meta",
			children: i
		}),
		(r || a) && /* @__PURE__ */ v("span", {
			className: "flex min-w-0 flex-wrap gap-1",
			children: [r && /* @__PURE__ */ _("span", {
				className: "ui-cal-badge",
				children: r
			}), a && /* @__PURE__ */ _("span", {
				className: "ui-cal-badge",
				children: a
			})]
		})
	] });
}
function Na({ block: e, style: t, resizeEdge: n, continuesAfter: r, dragging: i, onKeyDown: a, onClick: o }) {
	let s = Ca(), c = s.editLayer === "availability", l = c && s.canEditBlock(e), u = e.kind ?? "available", d = e.label ?? (u === "available" ? s.labels.available : s.labels.unavailable), f = c && !e.placeholder && (l || s.hasBlockClick);
	return u === "available" && !c && !s.display.availableBlocks ? null : /* @__PURE__ */ v("div", {
		role: f ? "button" : void 0,
		tabIndex: f ? 0 : void 0,
		"aria-label": f ? s.describeBlock(e) : void 0,
		"aria-describedby": f ? s.itemHelpId : void 0,
		"aria-hidden": f ? void 0 : !0,
		"data-cal-item": f ? "availability" : void 0,
		"data-cal-id": e.id,
		"data-kind": u,
		"data-placeholder": e.placeholder || void 0,
		"data-edit": c || void 0,
		"data-readonly": c && !l ? !0 : void 0,
		"data-dragging": i || void 0,
		className: q("ui-cal-avail", `ui-cal-c-${s.blockColor(e)}`),
		style: t,
		onKeyDown: f ? a : void 0,
		onClick: f ? o : void 0,
		children: [
			s.display.blockLabels && /* @__PURE__ */ _("span", {
				className: "block truncate font-medium",
				children: d
			}),
			c && s.display.time && /* @__PURE__ */ _("span", {
				className: "ui-cal-meta font-mono block",
				children: $i(e.start, e.end, s)
			}),
			n && l && !r && /* @__PURE__ */ _("div", {
				"data-cal-resize": !0,
				"data-edge": n,
				className: "ui-cal-resize",
				"aria-hidden": "true"
			})
		]
	});
}
function Pa({ draft: e, invalid: t, style: n }) {
	let r = Ca(), i = e.target === "event" ? e.event.title : e.target === "availability" ? e.availability.label ?? r.labels.available : void 0;
	return /* @__PURE__ */ v("div", {
		className: "ui-cal-ghost",
		"data-invalid": t ? !0 : void 0,
		style: n,
		"aria-hidden": "true",
		children: [
			i && /* @__PURE__ */ _("div", {
				className: "ui-cal-title",
				children: i
			}),
			/* @__PURE__ */ _("div", {
				className: "font-mono",
				children: $i(e.start, e.end, r)
			}),
			t && /* @__PURE__ */ _("div", {
				className: "text-red font-medium",
				children: t
			})
		]
	});
}
//#endregion
//#region src/components/ui/calendar/useGridInteraction.ts
var Fa = 4, Ia = 10, La = 36;
function Ra(e, t, n, r, i) {
	let a = la(e.value.resourceId).length > 0, o = {
		action: t,
		start: n.start,
		end: n.end,
		resourceId: a ? i : void 0,
		previousResourceId: a ? r : void 0,
		resourceIds: da(e.value.resourceId, r, i)
	};
	return e.type === "event" ? {
		target: "event",
		event: e.value,
		...o
	} : {
		target: "availability",
		availability: e.value,
		...o
	};
}
function za(e, t) {
	return t.target === "selection" ? !1 : va(e.value, t) && (t.resourceId === void 0 || t.resourceId === t.previousResourceId);
}
function Ba({ axis: e, columns: t, pxPerMinute: n, scrollRef: r, events: i, blocks: a, initialColumn: o }) {
	let s = Ca(), { addMinutes: c, computeNudgeRange: u, dateAtMinutes: d, differenceInDays: p, shiftRangeDays: g } = s.dates, [_, v] = h(null), [y, b] = h(null), x = m(null), S = m({
		ctx: s,
		columns: t,
		axis: e,
		pxPerMinute: n
	});
	f(() => {
		S.current = {
			ctx: s,
			columns: t,
			axis: e,
			pxPerMinute: n
		};
	}), l(() => {
		let e = x;
		return () => {
			let t = e.current;
			t && (e.current = null, t.cleanup(), t.frame && cancelAnimationFrame(t.frame));
		};
	}, []);
	let { step: C } = s;
	function w(e) {
		return r.current?.querySelector(`[data-cal-col="${e}"]`) ?? null;
	}
	function T(e, t, n) {
		let { ctx: r, axis: i, pxPerMinute: a } = S.current, o = S.current.columns[Number(e.dataset.calCol)], s = o ? r.dayBounds(o.day) : r.bounds, c = e.getBoundingClientRect(), l = i === "y" ? n - c.top : t - c.left;
		return J(s.min + l / a, s.min, s.max);
	}
	function E(e, t, n) {
		let { columns: i, axis: a } = S.current, o = r.current, s = document.elementFromPoint(e, t)?.closest("[data-cal-col]");
		if (s && o?.contains(s)) return {
			index: Number(s.dataset.calCol),
			el: s
		};
		let c = w(n);
		if (!c) return null;
		let l = c.getBoundingClientRect(), u = n, d = a === "y" ? e < l.left : t < l.top, f = a === "y" ? e > l.right : t > l.bottom;
		d && (u = Math.max(0, n - 1)), f && (u = Math.min(i.length - 1, n + 1));
		let p = u === n ? c : w(u);
		return p ? {
			index: u,
			el: p
		} : {
			index: n,
			el: c
		};
	}
	function D(e) {
		let { ctx: t, columns: n } = S.current, { computeCreateRange: r, computeMoveRange: i, computeResizeEnd: a } = t.dates, { step: o } = t, s = n[e.origin];
		if (!s) return;
		let c = t.dayBounds(s.day), l;
		if (e.kind === "create") {
			let t = w(e.origin);
			if (!t) return;
			l = {
				target: "selection",
				action: "create",
				...r(s.day, e.anchorMinute, T(t, e.lastX, e.lastY), o, c),
				allDay: !1,
				resourceId: s.resourceId
			};
		} else if (e.kind === "move" && e.item) {
			let r = E(e.lastX, e.lastY, e.hover);
			if (!r) return;
			e.hover = r.index;
			let a = n[r.index], c = i(e.item.value, a.day, T(r.el, e.lastX, e.lastY), e.grabOffset, o, t.dayBounds(a.day));
			l = Ra(e.item, "move", c, s.resourceId, a.resourceId);
		} else if (e.kind === "resize" && e.item) {
			let t = w(e.origin);
			if (!t) return;
			let n = a(e.item.value, s.day, T(t, e.lastX, e.lastY), o, c);
			l = Ra(e.item, "resize", {
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
	function O(e) {
		let t = r.current;
		if (!t || !e.started) return;
		let n = t.getBoundingClientRect(), i = 0, a = 0;
		if (e.lastY < n.top + La ? a = -1 : e.lastY > n.bottom - La && (a = 1), e.lastX < n.left + La ? i = -1 : e.lastX > n.right - La && (i = 1), !i && !a) {
			e.frame = void 0;
			return;
		}
		t.scrollBy(i * 10, a * 10);
		let o = D(e);
		o && (e.current = o, v(o)), e.frame = requestAnimationFrame(() => O(e));
	}
	function k(e) {
		let { ctx: t, columns: n } = S.current, { dateAtMinutes: r } = t.dates, { step: i } = t, a = x.current;
		if (a && (x.current = null, a.cleanup(), a.frame && cancelAnimationFrame(a.frame), v(null), e)) {
			if (a.started) {
				let e = a.current;
				if (!e || a.item && za(a.item, e.draft)) return;
				t.commit(e.draft, "pointer");
				return;
			}
			if (!a.moved) {
				if (a.item) {
					a.item.type === "event" ? t.clickEvent(a.item.value) : t.clickBlock(a.item.value);
					return;
				}
				if (a.kind === "create") {
					let e = n[a.origin];
					if (!e) return;
					let o = t.dayBounds(e.day), s = Math.min(i, o.max - o.min), c = J(Ui(a.anchorMinute, i, "floor"), o.min, o.max - s), l = Math.min(c + Math.max(i, t.clickCreateDuration), o.max);
					t.commit({
						target: "selection",
						action: "create",
						start: r(e.day, c),
						end: r(e.day, l),
						allDay: !1,
						resourceId: e.resourceId
					}, "pointer");
				}
			}
		}
	}
	function A(e) {
		if (e.button !== 0 || x.current) return;
		let n = e.target;
		if (n.closest("[data-cal-ignore]")) return;
		let o = n.closest("[data-cal-col]");
		if (!o || !e.currentTarget.contains(o)) return;
		let c = Number(o.dataset.calCol), l = t[c];
		if (!l) return;
		let u, f, p = n.closest("[data-cal-item]");
		if (p) {
			let e = p.dataset.calId ?? "";
			if (p.dataset.calItem === "event") {
				let t = i.get(e);
				if (!t) return;
				u = {
					type: "event",
					value: t
				};
			} else {
				let t = a.get(e);
				if (!t) return;
				u = {
					type: "availability",
					value: t
				};
			}
			let t = u.type === "event" ? s.canEditEvent(u.value) : s.canEditBlock(u.value), r = t && !!n.closest("[data-cal-resize]");
			f = t ? r ? "resize" : "move" : "click";
		} else if (s.selectable) f = "create";
		else return;
		let m = T(o, e.clientX, e.clientY), h = u ? (d(l.day, m).getTime() - u.value.start.getTime()) / 6e4 : 0, g = (e) => {
			let t = x.current;
			if (!t || e.pointerId !== t.pointerId) return;
			t.lastX = e.clientX, t.lastY = e.clientY;
			let n = Math.hypot(e.clientX - t.startX, e.clientY - t.startY);
			if (!t.started) {
				if (t.pointerType === "touch") {
					n > Ia && (t.moved = !0);
					return;
				}
				if (t.kind === "click" || n < Fa) {
					n >= Fa && (t.moved = !0);
					return;
				}
				t.started = !0, r.current?.setPointerCapture?.(t.pointerId);
			}
			let i = D(t);
			i && (t.current = i, v(i)), t.frame || O(t);
		}, _ = (e) => {
			e.pointerId === x.current?.pointerId && k(!0);
		}, y = (e) => {
			e.pointerId === x.current?.pointerId && k(!1);
		}, b = (e) => {
			e.key === "Escape" && (e.preventDefault(), k(!1));
		};
		window.addEventListener("pointermove", g), window.addEventListener("pointerup", _), window.addEventListener("pointercancel", y), window.addEventListener("keydown", b), x.current = {
			pointerId: e.pointerId,
			pointerType: e.pointerType,
			startX: e.clientX,
			startY: e.clientY,
			lastX: e.clientX,
			lastY: e.clientY,
			started: !1,
			moved: !1,
			kind: f,
			item: u,
			origin: c,
			hover: c,
			anchorMinute: m,
			grabOffset: h,
			cleanup: () => {
				window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", _), window.removeEventListener("pointercancel", y), window.removeEventListener("keydown", b);
			}
		};
	}
	function j(e) {
		requestAnimationFrame(() => {
			r.current?.querySelector(`[data-cal-item][data-cal-id="${CSS.escape(e)}"]`)?.focus();
		});
	}
	function M(n, r, o, l) {
		let d = r === "event" ? i.get(o) : a.get(o);
		if (!d) return;
		let f = {
			type: r,
			value: d
		};
		if (n.key === "Enter" || n.key === " ") {
			n.preventDefault(), f.type === "event" ? s.clickEvent(f.value) : s.clickBlock(f.value);
			return;
		}
		if (!n.altKey || !n.key.startsWith("Arrow") || !(f.type === "event" ? s.canEditEvent(f.value) : s.canEditBlock(f.value))) return;
		let m = e === "y" ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"], h = e === "y" ? ["ArrowLeft", "ArrowRight"] : ["ArrowUp", "ArrowDown"], _ = t[l];
		if (!_) return;
		let v = null;
		if (m.includes(n.key)) {
			let e = n.key === m[0] ? -C : C;
			if (n.shiftKey) {
				let t = c(d.end, e);
				if (t.getTime() - d.start.getTime() < C * 6e4) return;
				v = Ra(f, "resize", {
					start: d.start,
					end: t
				}, _.resourceId, _.resourceId);
			} else v = Ra(f, "move", u(d, e, s.dayBounds(d.start)), _.resourceId, _.resourceId);
		} else if (h.includes(n.key) && !n.shiftKey) {
			let e = t[l + (n.key === h[0] ? -1 : 1)];
			if (!e) return;
			v = Ra(f, "move", g(d, p(e.day, _.day)), _.resourceId, e.resourceId);
		}
		v && (n.preventDefault(), !za(f, v) && s.commit(v, "keyboard") && j(o));
	}
	function N(e) {
		if (e.target !== e.currentTarget || y) return;
		let t = !0;
		try {
			t = e.currentTarget.matches(":focus-visible");
		} catch {}
		t && b(P());
	}
	function P() {
		let e = t[J(o, 0, Math.max(0, t.length - 1))], n = e ? s.dayBounds(e.day) : s.bounds, r = Math.min(C, n.max - n.min), i = J(Ui((e && s.timeZone && s.scrollToMinute !== void 0 ? s.dates.minutesOfDay(s.dates.wallDateAtMinutes(e.day, s.scrollToMinute)) : s.scrollToMinute) ?? n.min, C, "floor"), n.min, n.max - r);
		return {
			column: J(o, 0, Math.max(0, t.length - 1)),
			start: i,
			end: Math.min(i + Math.max(C, s.clickCreateDuration), n.max)
		};
	}
	function F(e) {
		e.target === e.currentTarget && b(null);
	}
	function I() {
		requestAnimationFrame(() => {
			r.current?.querySelector("[data-cal-cursor]")?.scrollIntoView({
				block: "nearest",
				inline: "nearest"
			});
		});
	}
	function L(n) {
		if (n.target !== n.currentTarget) return;
		if (!y) {
			(n.key.startsWith("Arrow") || n.key === "Enter" || n.key === " ") && (n.preventDefault(), b(P()), I());
			return;
		}
		let r = t[y.column];
		if (!r) {
			b(null);
			return;
		}
		let i = s.dayBounds(r.day), a = e === "y" ? "ArrowUp" : "ArrowLeft", o = e === "y" ? "ArrowDown" : "ArrowRight", c = e === "y" ? "ArrowLeft" : "ArrowUp", l = e === "y" ? "ArrowRight" : "ArrowDown", u = y.end - y.start, f = null;
		switch (n.key) {
			case a:
			case o: {
				let e = n.key === a ? -C : C;
				if (n.shiftKey) {
					let t = J(y.end + e, y.start + C, i.max);
					f = {
						...y,
						end: t
					};
				} else {
					let t = J(y.start + e, i.min, i.max - u);
					f = {
						...y,
						start: t,
						end: t + u
					};
				}
				break;
			}
			case c:
			case l: {
				let e = J(y.column + (n.key === c ? -1 : 1), 0, t.length - 1), r = s.dayBounds(t[e].day), a = Math.min(u, r.max - r.min), o = J(r.min + y.start - i.min, r.min, r.max - a);
				f = {
					...y,
					column: e,
					start: o,
					end: o + a
				};
				break;
			}
			case "PageUp":
			case "PageDown": {
				let e = n.key === "PageUp" ? -60 : 60, t = J(y.start + e, i.min, i.max - u);
				f = {
					...y,
					start: t,
					end: t + u
				};
				break;
			}
			case "Home":
				f = {
					...y,
					start: i.min,
					end: i.min + u
				};
				break;
			case "End":
				f = {
					...y,
					start: i.max - u,
					end: i.max
				};
				break;
			case "Enter":
			case " ": {
				n.preventDefault();
				let e = t[y.column];
				if (!e || !s.selectable) return;
				s.commit({
					target: "selection",
					action: "create",
					start: d(e.day, y.start),
					end: d(e.day, y.end),
					allDay: !1,
					resourceId: e.resourceId
				}, "keyboard");
				return;
			}
			case "Escape":
				n.preventDefault(), b(null);
				return;
			default: return;
		}
		n.preventDefault(), b(f), I();
	}
	return {
		drag: _,
		cursor: y,
		onPointerDown: A,
		onItemKeyDown: M,
		onGridFocus: N,
		onGridBlur: F,
		onGridKeyDown: L
	};
}
//#endregion
//#region src/components/ui/calendar/TimeGrid.tsx
var Va = 22, Ha = 3, Ua = 18, Wa = 36;
function Ga(e) {
	let t = e.querySelector(".ui-cal-head")?.offsetHeight ?? 0;
	return (e.clientHeight - t) / 2;
}
function Ka(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return a ? a.endMinute <= n && a.startMinute < n ? "before" : a.startMinute >= r ? "after" : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	} : null;
}
function qa({ days: e, events: t, availability: n, label: r }) {
	let i = Ca(), { daySegment: a, formatLongDate: o, getFormatter: s, isAllDayLike: c, isSameDay: d, minutesOfDay: g, toDateKey: y } = i.dates, { bounds: b, resources: x, hourHeight: S } = i, C = S / 60, w = m(null), T = u(), [E, D] = h(!1), O = p(() => e.flatMap((e) => x.length ? x.map((t) => ({
		key: `${y(e)}|${t.id}`,
		day: e,
		bounds: i.dates.dayBounds(e, i.bounds),
		resourceId: t.id
	})) : [{
		key: y(e),
		day: e,
		bounds: i.dates.dayBounds(e, i.bounds)
	}]), [
		e,
		x,
		y,
		i.dates,
		i.bounds
	]), k = p(() => new Map(t.map((e) => [e.id, e])), [t]), A = p(() => new Map(n.map((e) => [e.id, e])), [n]), j = O.findIndex((e) => d(e.day, i.now)), M = Ba({
		axis: "y",
		columns: O,
		pxPerMinute: C,
		scrollRef: w,
		events: k,
		blocks: A,
		initialColumn: Math.max(0, j)
	}), { drag: N, cursor: P } = M, F = i.editLayer === "availability", I = p(() => {
		let e = t.filter((e) => !c(e)), r = Ua / C;
		return O.map((t) => {
			let o = t.bounds ?? i.bounds, s = 0, c = 0, l = [];
			for (let n of e) {
				if (!ua(n.resourceId, t.resourceId, { emptyMatchesAll: !1 })) continue;
				let e = Ka(n, t.day, o.min, o.max, a);
				e === "before" ? s++ : e === "after" ? c++ : e && l.push(e);
			}
			let u = sa(l.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r), d = [];
			for (let e of n) {
				if (!ua(e.resourceId, t.resourceId, { emptyMatchesAll: !0 })) continue;
				let n = Ka(e, t.day, o.min, o.max, a);
				n && typeof n == "object" && d.push(n);
			}
			let f = F ? sa(d.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r) : null, p = [];
			return i.hasAvailability && i.shadeOutsideAvailability && (p = oa(o.min, o.max, d.map((e) => [e.start, e.end]))), {
				placed: l,
				layout: u,
				blocks: d,
				blockLayout: f,
				outside: p,
				earlier: s,
				later: c
			};
		});
	}, [
		O,
		t,
		n,
		C,
		F,
		i.hasAvailability,
		i.shadeOutsideAvailability,
		i.bounds,
		a,
		c
	]), L = p(() => {
		let e = [];
		for (let n of t) {
			if (!c(n)) continue;
			let t = -1;
			O.forEach((r, i) => {
				let o = a(n.start, n.end, r.day) !== null && ua(n.resourceId, r.resourceId, { emptyMatchesAll: !1 });
				o && t === -1 && (t = i);
				let s = i === O.length - 1;
				if (t !== -1 && (!o || s)) {
					let r = o && s ? i + 1 : i;
					e.push({
						id: `${n.id}#${t}`,
						event: n,
						start: t,
						end: r
					}), t = -1;
				}
			});
		}
		let { lanes: n, count: r } = ca(e);
		return {
			runs: e,
			lanes: n,
			count: r
		};
	}, [
		t,
		O,
		a,
		c
	]), R = E ? L.count : Math.min(L.count, Ha), z = L.runs.filter((e) => (L.lanes.get(e.id) ?? 0) >= R).length, B = m(C), V = m(null);
	l(() => {
		let e = w.current;
		if (!e) return;
		let t = () => {
			V.current = (e.scrollTop + Ga(e)) / B.current;
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, []), f(() => {
		let e = w.current;
		if (!e || B.current === C) return;
		B.current = C;
		let t = V.current;
		t !== null && (e.scrollTop = Math.max(0, t * C - Ga(e)));
	}, [C]);
	let H = m(null), U = i.scrollToMinute, { dates: W, timeZone: G, now: K } = i, ee = i.scrollAlign;
	l(() => {
		let t = w.current;
		if (!t || H.current === i.view) return;
		H.current = i.view;
		let n = e.find((e) => d(e, K)) ?? e[0], r = G ? W.minutesOfDay(W.wallDateAtMinutes(n, U ?? 480)) : U ?? 480, a = W.dayBounds(n, b), o = t.querySelector(".ui-cal-head"), s = () => {
			let e = ee === "center" ? Ga(t) : 8;
			t.scrollTop = Math.max(0, (r - a.min) * C - e);
		};
		if (s(), typeof ResizeObserver > "u") return;
		let c = new ResizeObserver(s);
		c.observe(t), o && c.observe(o);
		let l = !1, u = () => {
			l = !0, c.disconnect();
		}, f = [
			"wheel",
			"pointerdown",
			"touchstart",
			"keydown"
		];
		for (let e of f) t.addEventListener(e, u, {
			once: !0,
			passive: !0
		});
		return () => {
			c.disconnect();
			for (let e of f) t.removeEventListener(e, u);
			l || (H.current = null);
		};
	}, [
		i.view,
		U,
		ee,
		b,
		C,
		e,
		d,
		W,
		G,
		K
	]);
	let te = e.length > 1, ne = x.length > 0, re = !!i.timeZone && i.sharedTimeAxis, ie = p(() => xa(O.map((e) => ({
		day: e.day,
		bounds: e.bounds ?? i.bounds
	})), i.slotLabelInterval, {
		timeZone: i.timeZone,
		locale: i.locale,
		hour12: i.hour12
	}, i.bounds, re), [
		O,
		i.slotLabelInterval,
		i.timeZone,
		i.locale,
		i.hour12,
		i.bounds,
		re
	]), ae = ie.reference, oe = ie.axes.map((e) => !!i.timeZone && (!re || !e.matchesReference)), se = ae ? s(i.locale, { timeZoneName: "short" }).formatToParts(i.dates.dateAtMinutes(ae.day, ae.bounds.min)).find((e) => e.type === "timeZoneName")?.value : void 0, ce = oe.some(Boolean) ? Math.max(ne ? i.resourceMinWidth : 0, 180) : ne ? i.resourceMinWidth : 44, le = Math.max(...O.map((e) => (e.bounds?.max ?? b.max) - (e.bounds?.min ?? b.min))) * C, ue = {
		"--cal-hour": `${S}px`,
		"--cal-offset": `${-(b.min % 60 * C)}px`,
		height: le
	}, de = ae?.bounds ?? b, fe = [], pe = Math.max(5, i.slotLabelInterval);
	for (let e = Math.ceil(de.min / pe) * pe; e < de.max; e += pe) e > de.min && fe.push(e);
	let me = s(i.locale, { weekday: "short" }), he = g(i.now), ge = i.nowIndicator, _e = N?.draft, ve = _e && (_e.target === "selection" ? _e.resourceId : _e.resourceIds), ye = "";
	if (P) {
		let e = O[P.column];
		if (e) {
			let t = e.resourceId ? i.resourceById.get(e.resourceId) : void 0;
			ye = `${o(e.day, i.locale)}, ${i.timeZone ? Qi(i.dates.dateAtMinutes(e.day, P.start), i) : Bi(P.start)} to ${i.timeZone ? Qi(i.dates.dateAtMinutes(e.day, P.end), i) : Bi(P.end)}${t ? `, ${t.title}` : ""}`;
		}
	}
	return /* @__PURE__ */ _("div", {
		ref: w,
		"data-cal-drag": N?.draft.action,
		className: "ui-cal-scroll relative min-h-0 flex-1 overflow-auto",
		style: i.timeZone && !ae ? { "--cal-gutter": "0px" } : void 0,
		children: /* @__PURE__ */ v("div", {
			className: "flex min-h-full flex-col",
			style: { minWidth: `calc(var(--cal-gutter) + ${O.length * ce}px)` },
			children: [/* @__PURE__ */ v("div", {
				className: "ui-cal-head border-border border-b",
				children: [
					te && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: se ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: se ? i.timeZone : void 0,
							"aria-label": se ? i.timeZone : void 0,
							children: se
						}), e.map((e) => /* @__PURE__ */ _(Ja, {
							day: e,
							weekday: me.format(e),
							isToday: d(e, i.now),
							grow: ne ? x.length : 1,
							onOpen: () => i.openDay(e),
							bordered: ne
						}, y(e)))]
					}),
					ne && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: se && !te ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: !te && se ? i.timeZone : void 0,
							"aria-label": !te && se ? i.timeZone : void 0,
							children: te ? void 0 : se
						}), O.map((e, t) => /* @__PURE__ */ _(Ya, {
							resource: i.resourceById.get(e.resourceId ?? ""),
							sub: t % x.length !== 0
						}, e.key))]
					}),
					L.count > 0 && /* @__PURE__ */ v("div", {
						className: "border-border flex border-t",
						children: [/* @__PURE__ */ v("div", {
							className: "ui-cal-corner text-text-tertiary flex flex-col items-end justify-center gap-0.5 pr-2 text-2xs",
							children: [/* @__PURE__ */ _("span", { children: i.labels.allDay }), L.count > Ha && /* @__PURE__ */ _("button", {
								type: "button",
								className: "text-accent cursor-pointer hover:underline",
								"aria-expanded": E,
								onClick: () => D((e) => !e),
								children: E ? i.labels.showLess : i.labels.more(z)
							})]
						}), /* @__PURE__ */ _("div", {
							className: "relative flex-1",
							style: { height: R * Va + 4 },
							children: L.runs.map((e) => {
								let t = L.lanes.get(e.id) ?? 0;
								if (t >= R) return null;
								let n = O[e.start], r = O[e.end - 1];
								return /* @__PURE__ */ _(ja, {
									event: e.event,
									compact: !0,
									continuesBefore: !!n && a(e.event.start, e.event.end, n.day)?.continuesBefore,
									continuesAfter: !!r && a(e.event.start, e.event.end, r.day)?.continuesAfter,
									style: {
										top: t * Va + 2,
										height: Va - 3,
										left: `calc(${e.start / O.length * 100}% + 2px)`,
										width: `calc(${(e.end - e.start) / O.length * 100}% - 4px)`,
										justifyContent: "center"
									},
									onClick: () => i.clickEvent(e.event),
									onKeyDown: (t) => {
										(t.key === "Enter" || t.key === " ") && (t.preventDefault(), i.clickEvent(e.event));
									}
								}, e.id);
							})
						})]
					})
				]
			}), /* @__PURE__ */ v("div", {
				className: "flex flex-1",
				children: [/* @__PURE__ */ v("div", {
					className: "ui-cal-gutter relative",
					style: { height: le },
					"aria-hidden": "true",
					children: [
						se && !te && !ne && /* @__PURE__ */ _("span", {
							className: "text-text-tertiary absolute top-0 right-2 text-2xs",
							"aria-hidden": "true",
							children: se
						}),
						ae && fe.map((e) => {
							let t = i.dates.parts(i.dates.dateAtMinutes(ae.day, e));
							return /* @__PURE__ */ _("span", {
								className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
								style: { top: (e - ae.bounds.min) * C },
								children: ea(t.hour * 60 + t.minute, i)
							}, e);
						}),
						!i.timeZone && fe.map((e) => /* @__PURE__ */ _("span", {
							className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
							style: { top: (e - b.min) * C },
							children: ea(e, i)
						}, e))
					]
				}), /* @__PURE__ */ v("div", {
					role: "group",
					"aria-roledescription": "time grid",
					"aria-label": r,
					"aria-describedby": T,
					tabIndex: 0,
					className: "ui-cal-lines ui-cal-surface relative flex flex-1 select-none focus-visible:outline-none",
					style: ue,
					onPointerDown: M.onPointerDown,
					onFocus: M.onGridFocus,
					onBlur: M.onGridBlur,
					onKeyDown: M.onGridKeyDown,
					children: [
						/* @__PURE__ */ _("span", {
							id: T,
							className: "sr-only",
							children: i.labels.gridHelp
						}),
						/* @__PURE__ */ _("span", {
							className: "sr-only",
							"aria-live": "polite",
							children: ye
						}),
						O.map((e, t) => {
							let n = I[t], r = e.bounds ?? i.bounds, o = oe[t] ? 72 : 0, s = oe[t] ? ie.axes[t].minutes : [], c = d(e.day, i.now), l = ne && t % x.length !== 0;
							return /* @__PURE__ */ v("div", {
								"data-cal-col": t,
								"data-today": c || void 0,
								"data-subcol": l || void 0,
								className: "ui-cal-col flex-1",
								style: {
									minWidth: ce,
									height: (r.max - r.min) * C
								},
								children: [
									s.map((t) => /* @__PURE__ */ _("span", {
										className: "ui-cal-zone-label",
										style: { top: (t - r.min) * C },
										"aria-hidden": "true",
										children: Qi(i.dates.dateAtMinutes(e.day, t), i)
									}, `label-${t}`)),
									n.outside.map(([e, t]) => /* @__PURE__ */ _("div", {
										className: "ui-cal-outside",
										"aria-hidden": "true",
										style: {
											left: 0,
											right: 0,
											top: (e - r.min) * C,
											height: (t - e) * C
										}
									}, `o${e}`)),
									n.blocks.map((e) => {
										let a = n.blockLayout?.get(e.item.id);
										return /* @__PURE__ */ _(Na, {
											block: e.item,
											resizeEdge: "bottom",
											continuesAfter: e.continuesAfter,
											dragging: N?.itemId === e.item.id,
											style: {
												top: (e.start - r.min) * C,
												height: Math.max((e.end - e.start) * C, 4),
												left: a ? `calc(${a.column / a.columns * 100}% + ${o * (1 - a.column / a.columns) + 1}px)` : o,
												width: a ? `calc(${a.span / a.columns * 100}% - ${o * a.span / a.columns + 4}px)` : o ? `calc(100% - ${o}px)` : "100%"
											},
											onKeyDown: (n) => M.onItemKeyDown(n, "availability", e.item.id, t),
											onClick: (t) => {
												t.detail === 0 && i.clickBlock(e.item);
											}
										}, e.item.id);
									}),
									/* @__PURE__ */ _("div", {
										style: o ? { left: o } : void 0,
										className: q("absolute inset-0", F && "ui-cal-muted-layer"),
										children: n.placed.map((e) => {
											let a = n.layout.get(e.item.id), o = Math.max((e.end - e.start) * C, Ua);
											return /* @__PURE__ */ _(ja, {
												event: e.item,
												compact: o < Wa,
												resizeEdge: "bottom",
												continuesBefore: e.continuesBefore,
												continuesAfter: e.continuesAfter,
												dragging: N?.itemId === e.item.id,
												style: {
													top: (e.start - r.min) * C + 1,
													height: o - 2,
													left: a ? `calc(${a.column / a.columns * 100}% + 1px)` : 1,
													width: a ? `calc(${a.span / a.columns * 100}% - 5px)` : "calc(100% - 5px)"
												},
												onKeyDown: (n) => M.onItemKeyDown(n, "event", e.item.id, t),
												onClick: (t) => {
													t.detail === 0 && i.clickEvent(e.item);
												}
											}, e.item.id);
										})
									}),
									n.earlier > 0 && /* @__PURE__ */ _("span", {
										className: "ui-cal-overflow",
										"data-edge": "top",
										"data-cal-ignore": !0,
										children: i.labels.earlier(n.earlier)
									}),
									n.later > 0 && /* @__PURE__ */ _("span", {
										className: "ui-cal-overflow",
										"data-edge": "bottom",
										"data-cal-ignore": !0,
										children: i.labels.later(n.later)
									}),
									c && ge && he >= r.min && he <= r.max && /* @__PURE__ */ _("div", {
										className: "ui-cal-now",
										"data-axis": "y",
										"data-dot": !l || void 0,
										style: { top: (he - r.min) * C }
									}),
									_e && ua(ve, e.resourceId, { emptyMatchesAll: !0 }) && (() => {
										let t = Ka(_e, e.day, r.min, r.max, a);
										return !t || typeof t != "object" ? null : /* @__PURE__ */ _(Pa, {
											draft: _e,
											invalid: N?.invalid,
											style: {
												top: (t.start - r.min) * C + 1,
												height: Math.max((t.end - t.start) * C - 2, Ua),
												left: o + 1,
												right: 4
											}
										});
									})(),
									P?.column === t && /* @__PURE__ */ _("div", {
										"data-cal-cursor": !0,
										className: "ui-cal-cursor",
										style: {
											left: o,
											right: 0,
											top: (P.start - r.min) * C,
											height: (P.end - P.start) * C
										}
									})
								]
							}, e.key);
						})
					]
				})]
			})]
		})
	});
}
function Ja({ day: e, weekday: t, isToday: n, grow: r, bordered: i, onOpen: a }) {
	let o = Ca();
	return /* @__PURE__ */ _("div", {
		className: q("flex min-w-0 items-center justify-center py-1.5", i && "border-border border-l"),
		style: { flex: `${r} 1 0` },
		children: /* @__PURE__ */ v("button", {
			type: "button",
			onClick: a,
			"aria-label": o.dates.formatLongDate(e, o.locale),
			"aria-current": n ? "date" : void 0,
			className: "hover:bg-bg-hover flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors duration-[100ms]",
			children: [/* @__PURE__ */ _("span", {
				className: q("text-2xs font-medium uppercase", n ? "text-accent" : "text-text-tertiary"),
				children: t
			}), /* @__PURE__ */ _("span", {
				className: q("flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold", n ? "bg-accent text-text-on-accent" : "text-text-primary"),
				children: o.dates.parts(e).day
			})]
		})
	});
}
function Ya({ resource: e, sub: t }) {
	let n = Ca();
	return /* @__PURE__ */ v("div", {
		className: q("border-border flex min-w-0 flex-1 items-center gap-1.5 border-l px-2 py-1.5", t && "ui-cal-subhead"),
		style: { minWidth: n.resourceMinWidth },
		title: e?.title,
		children: [e?.color && /* @__PURE__ */ _("span", {
			className: q("ui-cal-dot", `ui-cal-c-${e.color}`),
			"aria-hidden": "true"
		}), /* @__PURE__ */ v("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ _("span", {
				className: "text-text-primary block truncate text-xs font-medium",
				children: e?.title
			}), e?.subtitle && /* @__PURE__ */ _("span", {
				className: "text-text-tertiary block truncate text-2xs",
				children: e.subtitle
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/calendar/TimelineView.tsx
var Xa = 34, Za = 4, Qa = 28;
function $a(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return !a || a.endMinute <= n || a.startMinute >= r ? null : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	};
}
function eo({ day: e, events: t, availability: n, label: r }) {
	let i = Ca(), { daySegment: a, isSameDay: o, minutesOfDay: s } = i.dates, c = i.dayBounds(e), d = m(null), f = i.resources.length === 0 && t.length === 0 && n.length === 0, [g, y] = h(0);
	l(() => {
		let e = d.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(() => {
			let t = e.querySelector(".ui-cal-row-head");
			y(Math.max(0, e.clientWidth - (t?.offsetWidth ?? 0)));
		});
		return t.observe(e), () => t.disconnect();
	}, [f]);
	let b = (c.max - c.min) / 60, x = Math.max(i.timelineHourWidth, g / b), S = x / 60, C = (c.max - c.min) * S, w = u(), [T, E] = h(/* @__PURE__ */ new Set()), D = p(() => {
		let e = [], t = i.resources.length ? [...i.resources] : [{
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
	}, [i.resources]), O = p(() => D.flatMap((t) => t.name !== void 0 && T.has(t.name) ? [] : t.resources.map((t) => ({
		key: t.id,
		day: e,
		resourceId: t.id || void 0
	}))), [
		D,
		T,
		e
	]), A = Ba({
		axis: "x",
		columns: O,
		pxPerMinute: S,
		scrollRef: d,
		events: p(() => new Map(t.map((e) => [e.id, e])), [t]),
		blocks: p(() => new Map(n.map((e) => [e.id, e])), [n]),
		initialColumn: 0
	}), { drag: M, cursor: N } = A, P = i.editLayer === "availability", F = p(() => {
		let r = Qa / S;
		return O.map((o) => {
			let s = t.filter((e) => ua(e.resourceId, o.resourceId, { emptyMatchesAll: !1 })).map((t) => $a(t, e, c.min, c.max, a)).filter((e) => e !== null), l = ca(s.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))), u = n.filter((e) => ua(e.resourceId, o.resourceId, { emptyMatchesAll: !0 })).map((t) => $a(t, e, c.min, c.max, a)).filter((e) => e !== null), d = P ? ca(u.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))) : null, f = Math.max(1, l.count, d?.count ?? 0);
			return {
				placed: s,
				lanes: l,
				blocks: u,
				blockLanes: d,
				outside: i.hasAvailability && i.shadeOutsideAvailability ? oa(c.min, c.max, u.map((e) => [e.start, e.end])) : [],
				laneCount: f
			};
		});
	}, [
		O,
		t,
		n,
		e,
		c.min,
		c.max,
		S,
		P,
		i.hasAvailability,
		i.shadeOutsideAvailability,
		a
	]), I = m(!1), L = i.timeZone && i.scrollToMinute !== void 0 ? i.dates.minutesOfDay(i.dates.wallDateAtMinutes(e, i.scrollToMinute)) : i.scrollToMinute, R = i.scrollAlign;
	l(() => {
		let e = d.current;
		if (!e || I.current) return;
		I.current = !0;
		let t = e.querySelector(".ui-cal-row-head")?.offsetWidth ?? 0, n = R === "center" ? (e.clientWidth - t) / 2 : 16;
		e.scrollLeft = Math.max(0, ((L ?? 480) - c.min) * S - n);
	}, [
		L,
		R,
		c.min,
		S
	]);
	let z = [], B = Math.max(15, i.slotLabelInterval);
	for (let e = Math.ceil(c.min / B) * B; e < c.max; e += B) z.push(e);
	let V = s(i.now), H = i.nowIndicator && o(e, i.now) && V >= c.min && V <= c.max, U = M?.draft, W = U && (U.target === "selection" ? U.resourceId : U.resourceIds), G = {
		"--cal-hour": `${x}px`,
		"--cal-offset": `${-(c.min % 60 * S)}px`
	}, K = "";
	if (N) {
		let t = O[N.column], n = t?.resourceId ? i.resourceById.get(t.resourceId) : void 0;
		K = `${n ? `${n.title}, ` : ""}${i.timeZone ? Qi(i.dates.dateAtMinutes(e, N.start), i) : Bi(N.start)} to ${i.timeZone ? Qi(i.dates.dateAtMinutes(e, N.end), i) : Bi(N.end)}`;
	}
	function ee(e) {
		E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	if (f) return /* @__PURE__ */ _("div", {
		className: "text-text-tertiary flex flex-1 items-center justify-center p-6 text-xs",
		children: i.labels.noResources
	});
	let te = 0;
	return /* @__PURE__ */ _("div", {
		ref: d,
		"data-cal-drag": M?.draft.action,
		className: "ui-cal-scroll ui-cal-timeline relative min-h-0 flex-1 overflow-auto",
		children: /* @__PURE__ */ v("div", {
			style: { width: `calc(var(--cal-row-head) + ${C}px)` },
			children: [/* @__PURE__ */ v("div", {
				className: "ui-cal-head border-border flex border-b",
				children: [/* @__PURE__ */ _("div", { className: "ui-cal-row-head ui-cal-corner-x" }), /* @__PURE__ */ _("div", {
					className: "relative h-7",
					style: { width: C },
					"aria-hidden": "true",
					children: z.map((t) => /* @__PURE__ */ _("span", {
						className: "text-text-tertiary font-mono absolute top-1.5 text-2xs",
						style: { left: (t - c.min) * S + 4 },
						children: i.timeZone ? Qi(i.dates.dateAtMinutes(e, t), i) : ea(t, i)
					}, t))
				})]
			}), /* @__PURE__ */ v("div", {
				role: "group",
				"aria-roledescription": "timeline",
				"aria-label": r,
				"aria-describedby": w,
				tabIndex: 0,
				className: "ui-cal-surface select-none focus-visible:outline-none",
				onPointerDown: A.onPointerDown,
				onFocus: A.onGridFocus,
				onBlur: A.onGridBlur,
				onKeyDown: A.onGridKeyDown,
				children: [
					/* @__PURE__ */ _("span", {
						id: w,
						className: "sr-only",
						children: i.labels.gridHelp
					}),
					/* @__PURE__ */ _("span", {
						className: "sr-only",
						"aria-live": "polite",
						children: K
					}),
					D.map((t) => {
						let n = t.name !== void 0 && T.has(t.name);
						return /* @__PURE__ */ v("div", { children: [t.name !== void 0 && /* @__PURE__ */ _("div", {
							className: "bg-bg-secondary border-border flex border-b",
							children: /* @__PURE__ */ v("button", {
								type: "button",
								className: "ui-cal-group text-text-secondary hover:text-text-primary flex cursor-pointer items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase transition-colors duration-[100ms]",
								"aria-expanded": !n,
								onClick: () => ee(t.name),
								children: [
									_(n ? j : k, { className: "h-3 w-3" }),
									t.name,
									/* @__PURE__ */ _("span", {
										className: "text-text-tertiary font-normal",
										children: t.resources.length
									})
								]
							})
						}), !n && t.resources.map((t) => {
							let n = te++, r = F[n], o = O[n];
							if (!r || !o) return null;
							let s = r.laneCount * Xa + Za * 2;
							return /* @__PURE__ */ v("div", {
								className: "border-border flex border-b",
								children: [/* @__PURE__ */ v("div", {
									className: "ui-cal-row-head flex items-center gap-1.5 px-2",
									title: t.title,
									children: [t.color && /* @__PURE__ */ _("span", {
										className: q("ui-cal-dot", `ui-cal-c-${t.color}`),
										"aria-hidden": "true"
									}), /* @__PURE__ */ v("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ _("span", {
											className: "text-text-primary block truncate text-xs font-medium",
											children: t.title
										}), t.subtitle && /* @__PURE__ */ _("span", {
											className: "text-text-tertiary block truncate text-2xs",
											children: t.subtitle
										})]
									})]
								}), /* @__PURE__ */ v("div", {
									"data-cal-col": n,
									className: "ui-cal-lines-x relative shrink-0",
									style: {
										...G,
										width: C,
										height: s
									},
									children: [
										r.outside.map(([e, t]) => /* @__PURE__ */ _("div", {
											className: "ui-cal-outside",
											"aria-hidden": "true",
											style: {
												top: 0,
												bottom: 0,
												left: (e - c.min) * S,
												width: (t - e) * S
											}
										}, `o${e}`)),
										r.blocks.map((e) => {
											let t = r.blockLanes?.lanes.get(e.item.id);
											return /* @__PURE__ */ _(Na, {
												block: e.item,
												resizeEdge: "right",
												continuesAfter: e.continuesAfter,
												dragging: M?.itemId === e.item.id,
												style: {
													left: (e.start - c.min) * S,
													width: Math.max((e.end - e.start) * S, 4),
													top: t === void 0 ? 0 : Za + t * Xa,
													height: t === void 0 ? "100%" : Xa - 3
												},
												onKeyDown: (t) => A.onItemKeyDown(t, "availability", e.item.id, n),
												onClick: (t) => {
													t.detail === 0 && i.clickBlock(e.item);
												}
											}, e.item.id);
										}),
										/* @__PURE__ */ _("div", {
											className: q("absolute inset-0", P && "ui-cal-muted-layer"),
											children: r.placed.map((e) => {
												let t = r.lanes.lanes.get(e.item.id) ?? 0;
												return /* @__PURE__ */ _(ja, {
													event: e.item,
													compact: !1,
													dense: !0,
													resizeEdge: "right",
													continuesBefore: e.continuesBefore,
													continuesAfter: e.continuesAfter,
													dragging: M?.itemId === e.item.id,
													style: {
														left: (e.start - c.min) * S + 1,
														width: Math.max((e.end - e.start) * S, Qa) - 2,
														top: Za + t * Xa,
														height: Xa - 3,
														justifyContent: "center"
													},
													onKeyDown: (t) => A.onItemKeyDown(t, "event", e.item.id, n),
													onClick: (t) => {
														t.detail === 0 && i.clickEvent(e.item);
													}
												}, e.item.id);
											})
										}),
										H && /* @__PURE__ */ _("div", {
											className: "ui-cal-now",
											"data-axis": "x",
											style: { left: (V - c.min) * S }
										}),
										U && ua(W, o.resourceId, { emptyMatchesAll: !0 }) && (() => {
											let t = $a(U, e, c.min, c.max, a);
											return t ? /* @__PURE__ */ _(Pa, {
												draft: U,
												invalid: M?.invalid,
												style: {
													left: (t.start - c.min) * S + 1,
													width: Math.max((t.end - t.start) * S - 2, Qa),
													top: Za,
													bottom: Za
												}
											}) : null;
										})(),
										N?.column === n && /* @__PURE__ */ _("div", {
											"data-cal-cursor": !0,
											className: "ui-cal-cursor",
											style: {
												top: 0,
												bottom: 0,
												left: (N.start - c.min) * S,
												width: (N.end - N.start) * S
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
//#region src/components/ui/calendar/types.ts
var to = {
	today: "Today",
	previous: "Previous",
	next: "Next",
	view: "View",
	allDay: "All day",
	more: (e) => `+${e} more`,
	eventCount: (e) => `${e} ${e === 1 ? "event" : "events"}`,
	showLess: "Show less",
	noEvents: "Nothing scheduled",
	noResources: "No resources to show",
	earlier: (e) => `${e} earlier`,
	later: (e) => `${e} later`,
	available: "Available",
	unavailable: "Unavailable",
	loading: "Loading",
	close: "Close",
	views: {
		day: "Day",
		threeDay: "3 days",
		workWeek: "Work week",
		week: "Week",
		month: "Month",
		agenda: "Agenda",
		timeline: "Timeline"
	},
	status: {
		confirmed: "Confirmed",
		tentative: "Tentative",
		held: "Held",
		cancelled: "Cancelled"
	},
	gridHelp: "Arrow keys move the time cursor, Shift with arrows extends it, Enter creates, Escape clears.",
	itemHelp: "Enter opens. Alt with arrow keys moves it, Alt and Shift with arrow keys changes its length."
};
//#endregion
//#region src/components/ui/RadioPill.tsx
function no({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ _("div", {
		role: "radiogroup",
		"aria-label": a,
		className: q("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ _("button", {
			type: "button",
			role: "radio",
			"aria-checked": e.value === t,
			disabled: r,
			onClick: () => n(e.value),
			className: q("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", !r && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/Calendar.tsx
var ro = [
	"day",
	"threeDay",
	"week",
	"month",
	"agenda"
];
function io() {
	return /* @__PURE__ */ new Date();
}
function ao(e) {
	let [t, n] = h(io);
	return l(() => {
		if (e) return;
		let t = setInterval(() => n(io()), 3e4);
		return () => clearInterval(t);
	}, [e]), e ?? t;
}
function oo(e) {
	let [t, n] = h(null);
	return l(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = new ResizeObserver((e) => {
			n(e[0]?.contentRect.width ?? null);
		});
		return r.observe(t), () => r.disconnect();
	}, [e]), t;
}
var so = /* @__PURE__ */ new Set();
function co(e) {
	let t = !1;
	try {
		t = process.env.NODE_ENV !== "production";
	} catch {}
	!t || so.has(e) || (so.add(e), console.warn(`[Calendar] ${e}`));
}
function lo(e, t, n) {
	try {
		return zi(t);
	} catch {
		return co(`Invalid ${e} "${t}", expected HH:mm; using the default.`), n;
	}
}
function uo({ events: e = [], availability: t, resources: n = [], view: r, defaultView: i = "week", onViewChange: a, views: o = ro, date: s, defaultDate: c, onDateChange: d, onRangeChange: g, weekStartsOn: y = 1, workWeekDays: b, agendaDays: x = 7, slotMinTime: S = "07:00", slotMaxTime: C = "20:00", slotDuration: w = 15, slotLabelInterval: T = 60, sharedTimeAxis: E = !1, hourHeight: D = 48, timelineHourWidth: O = 96, resourceMinWidth: k = 120, scrollToTime: M, scrollAlign: N = "start", now: P, nowIndicator: F = !0, editLayer: I = "events", readOnly: L = !1, selectable: R, clickCreateDuration: z = 30, shadeOutsideAvailability: B = !0, onCreate: V, onEventClick: U, onEventChange: W, onAvailabilityClick: G, onAvailabilityChange: K, validate: ee, onInvalidChange: te, onDateClick: ne, renderEvent: re, monthMaxEvents: ie, agendaShowAvailability: ae = !0, display: oe, narrowView: se = "day", narrowWidth: ce = 640, locale: le = "en-GB", timeZone: ue, hour12: de = !1, labels: fe, toolbar: pe = !0, toolbarActions: me, loading: he = !1, className: ge, "aria-label": _e }) {
	let ve = p(() => ba(ue), [ue]), { addDays: ye, formatLongDate: be, formatRangeTitle: xe, getVisibleDays: Se, minutesOfDay: Ce, shiftDate: we } = ve, Te = m(null), Ee = u(), De = ao(P), Oe = oo(Te), [ke, Ae] = h(i), [je, Me] = h(() => c ?? io()), Ne = r ?? ke, Pe = s ?? je, Fe = (e) => {
		r === void 0 && Ae(e), a?.(e);
	}, Ie = (e) => {
		s === void 0 && Me(e), d?.(e);
	}, Le = Oe !== null && Oe < ce && se !== !1 && Gi(Ne) && Ne !== "day" && se ? se : Ne, Re = p(() => ({
		...to,
		...fe,
		views: {
			...to.views,
			...fe?.views
		},
		status: {
			...to.status,
			...fe?.status
		}
	}), [fe]), ze = p(() => ({
		weekStartsOn: y,
		workWeekDays: b,
		agendaDays: x
	}), [
		y,
		b,
		x
	]), Be = Pe.getTime(), Ve = p(() => Se(Le, new Date(Be), ze), [
		Le,
		Be,
		ze,
		Se
	]), He = Ve[0], Ue = ye(Ve[Ve.length - 1], 1), We = He.getTime(), Ge = Ue.getTime(), Ke = m(g);
	f(() => {
		Ke.current = g;
	}), l(() => {
		Ke.current?.({
			start: new Date(We),
			end: new Date(Ge),
			view: Le
		});
	}, [
		We,
		Ge,
		Le
	]);
	let J = p(() => e.filter((e) => ra(e.start.getTime(), Math.max(e.end.getTime(), e.start.getTime() + 1), We, Ge)), [
		e,
		We,
		Ge
	]), qe = p(() => (t ?? []).filter((e) => ra(e.start.getTime(), e.end.getTime(), We, Ge)), [
		t,
		We,
		Ge
	]), Je = lo("slotMinTime", S, 0), Ye = lo("slotMaxTime", C, 1440);
	Ye <= Je && co(`slotMaxTime "${C}" must be after slotMinTime "${S}"; showing the whole day.`);
	let Xe = p(() => Ye > Je ? {
		min: Je,
		max: Ye
	} : {
		min: 0,
		max: 1440
	}, [Je, Ye]), Ze = Math.max(1, Math.round(w)), Qe;
	if (M) Qe = lo("scrollToTime", M, Xe.min);
	else {
		let e = qe.filter((e) => (e.kind ?? "available") === "available").map((e) => ue ? ve.parts(e.start).hour * 60 + ve.parts(e.start).minute : Ce(e.start)).filter((e) => e >= Xe.min && e < Xe.max);
		e.length && (Qe = Math.min(...e));
	}
	let $e = p(() => new Map(n.map((e) => [e.id, e])), [n]), et = xe(Le, Pe, {
		...ze,
		locale: le
	}), tt = {
		locale: le,
		hour12: de,
		timeZone: ue
	}, nt = (e) => $e.get(la(e)[0] ?? ""), Y = (e) => {
		let t = la(e).map((e) => $e.get(e)?.title).filter(Boolean);
		return t.length ? `, ${t.join(", ")}` : "";
	}, rt = (e) => e.status && e.status !== "confirmed" ? Re.status[e.status] : void 0, it = (e) => {
		let t = ee?.(e);
		return typeof t == "string" && t ? t : void 0;
	}, at = {
		view: Le,
		dates: ve,
		timeZone: ue,
		dayBounds: (e) => ve.dayBounds(e, Xe),
		locale: le,
		hour12: de,
		weekStartsOn: y,
		now: De,
		nowIndicator: F,
		labels: Re,
		itemHelpId: Ee,
		resources: n,
		resourceById: $e,
		step: Ze,
		bounds: Xe,
		hourHeight: D,
		slotLabelInterval: T,
		sharedTimeAxis: E,
		timelineHourWidth: O,
		resourceMinWidth: k,
		editLayer: I,
		selectable: !L && !!V && (R ?? !0),
		clickCreateDuration: z,
		hasAvailability: t !== void 0,
		shadeOutsideAvailability: B,
		monthMaxEvents: ie,
		agendaShowAvailability: ae,
		display: {
			time: oe?.time ?? !0,
			description: oe?.description ?? !0,
			status: oe?.status ?? !0,
			badge: oe?.badge ?? !0,
			blockLabels: oe?.blockLabels ?? !0,
			availableBlocks: oe?.availableBlocks ?? !0
		},
		scrollToMinute: Qe,
		scrollAlign: N,
		canEditEvent: (e) => !e.placeholder && !L && !!W && I === "events" && (e.editable ?? e.status !== "cancelled"),
		canEditBlock: (e) => !e.placeholder && !L && !!K && I === "availability" && e.editable !== !1,
		eventColor: (e) => e.color ?? nt(e.resourceId)?.color ?? "accent",
		blockColor: (e) => e.color ?? nt(e.resourceId)?.color ?? ((e.kind ?? "available") === "available" ? "green" : "gray"),
		statusLabel: rt,
		describeEvent: (e) => {
			let t = e.allDay ? `${be(e.start, le)}, ${Re.allDay}` : `${be(e.start, le)}, ${$i(e.start, e.end, tt)}`, n = rt(e);
			return [
				e.title,
				t,
				n,
				e.badge,
				e.description
			].filter(Boolean).join(", ").concat(Y(e.resourceId));
		},
		describeBlock: (e) => [
			(e.kind ?? "available") === "available" ? Re.available : Re.unavailable,
			e.label,
			`${be(e.start, le)}, ${$i(e.start, e.end, tt)}`
		].filter(Boolean).join(", ").concat(Y(e.resourceId)),
		renderEvent: re,
		hasEventClick: !!U,
		hasBlockClick: !!G,
		clickEvent: (e) => U?.(e),
		clickBlock: (e) => G?.(e),
		check: it,
		commit: (e, t) => {
			let n = it(e);
			if (n) return te?.(e, n), !1;
			if (e.target === "selection") V?.({
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
				delete n.target, e.target === "event" ? W?.(n) : K?.(n);
			}
			return !0;
		},
		openDay: (e) => {
			if (ne) {
				ne(e);
				return;
			}
			Ie(e), Le !== "day" && Le !== "timeline" && Fe("day");
		}
	}, ot = o.map((e) => ({
		value: e,
		label: Re.views[e]
	})), st = _e ?? et, ct = JSON.stringify([
		ue,
		Ve.map((e) => e.getTime()),
		Xe.min,
		Xe.max,
		Ze,
		n.map((e) => e.id)
	]), lt;
	return lt = Le === "month" ? /* @__PURE__ */ _(Aa, {
		date: Pe,
		events: J,
		availability: qe,
		label: st
	}, ue) : Le === "agenda" ? /* @__PURE__ */ _(wa, {
		days: Ve,
		events: J.filter((e) => !e.placeholder),
		availability: qe.filter((e) => !e.placeholder),
		label: st
	}, ue) : Le === "timeline" ? /* @__PURE__ */ _(eo, {
		day: Ve[0],
		events: J,
		availability: qe,
		label: st
	}, ct) : /* @__PURE__ */ _(qa, {
		days: Ve,
		events: J,
		availability: qe,
		label: st
	}, ct), /* @__PURE__ */ _(Sa.Provider, {
		value: at,
		children: /* @__PURE__ */ v("div", {
			ref: Te,
			"data-time-zone": ue,
			"data-shared-axis": E && ue && [
				"day",
				"threeDay",
				"workWeek",
				"week"
			].includes(Le) ? !0 : void 0,
			role: "region",
			"aria-label": _e ?? et,
			"aria-busy": he || void 0,
			className: q("ui-cal relative flex h-full min-h-0 flex-col overflow-hidden", ge),
			children: [
				/* @__PURE__ */ _("span", {
					id: Ee,
					className: "sr-only",
					children: Re.itemHelp
				}),
				pe && /* @__PURE__ */ v("div", {
					className: "ui-cal-noprint border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2",
					children: [/* @__PURE__ */ v("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ _(Q, {
								size: "sm",
								onClick: () => Ie(De),
								children: Re.today
							}),
							/* @__PURE__ */ v("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ _(Q, {
									variant: "icon",
									size: "sm",
									icon: A,
									"aria-label": Re.previous,
									onClick: () => Ie(we(Le, Pe, -1, ze))
								}), /* @__PURE__ */ _(Q, {
									variant: "icon",
									size: "sm",
									icon: j,
									"aria-label": Re.next,
									onClick: () => Ie(we(Le, Pe, 1, ze))
								})]
							}),
							/* @__PURE__ */ _("h2", {
								className: "text-text-primary truncate text-sm font-semibold",
								"aria-live": "polite",
								children: et
							})
						]
					}), /* @__PURE__ */ v("div", {
						className: "flex items-center gap-1.5",
						children: [me, o.length > 1 && (Oe === null || Oe >= o.length * 80 + 420 ? /* @__PURE__ */ _(no, {
							"aria-label": Re.view,
							options: ot,
							value: Ne,
							onChange: Fe
						}) : /* @__PURE__ */ _(Sr, {
							className: "w-28",
							size: "sm",
							options: ot,
							value: Ne,
							onChange: (e) => Fe(e)
						}))]
					})]
				}),
				lt,
				he && /* @__PURE__ */ v("div", {
					className: "ui-cal-loading",
					role: "status",
					children: [/* @__PURE__ */ _(H, { className: "text-accent h-6 w-6 animate-spin" }), /* @__PURE__ */ _("span", {
						className: "sr-only",
						children: Re.loading
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/lib/months.ts
var fo = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
], po = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
], mo = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
];
function ho(e, t, n) {
	let r = $(e, n), i = $(t, n);
	return r.year === i.year && r.month === i.month && r.day === i.day;
}
function go(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function _o(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function vo(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function yo({ year: e, month: t, timeZone: n, selected: r, rangeStart: i, rangeEnd: a, hoverDate: o, onSelect: s, onMonthChange: c, onHover: l, minDate: u, maxDate: d }) {
	let f = _o(e, t), p = vo(e, t), g = /* @__PURE__ */ new Date(), y = m(null), [b, x] = h(null);
	function S() {
		return b !== null && b >= 1 && b <= f ? b : r && $(r, n).year === e && $(r, n).month - 1 === t ? $(r, n).day : i && $(i, n).year === e && $(i, n).month - 1 === t ? $(i, n).day : $(g, n).year === e && $(g, n).month - 1 === t ? $(g, n).day : 1;
	}
	let C = S();
	function w(e, t) {
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
		r >= 1 && r <= f && (x(r), (y.current?.querySelector(`[data-day="${r}"]`))?.focus());
	}
	function T() {
		t === 0 ? c(e - 1, 11) : c(e, t - 1);
	}
	function E() {
		t === 11 ? c(e + 1, 0) : c(e, t + 1);
	}
	let D = [];
	for (let e = 0; e < p; e++) D.push(null);
	for (let e = 1; e <= f; e++) D.push(e);
	return /* @__PURE__ */ v("div", {
		className: "w-[252px]",
		ref: y,
		children: [/* @__PURE__ */ v("div", {
			className: "mb-2 flex items-center justify-between",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: T,
					"aria-label": "Previous month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ _(A, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ v("span", {
					className: "text-text-primary text-xs font-semibold",
					"aria-live": "polite",
					children: [
						po[t],
						" ",
						e
					]
				}),
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: E,
					"aria-label": "Next month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ _(j, { className: "h-3.5 w-3.5" })
				})
			]
		}), /* @__PURE__ */ v("div", {
			className: "grid grid-cols-7 gap-0",
			children: [mo.map((e) => /* @__PURE__ */ _("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), D.map((c, f) => {
				if (c === null) return /* @__PURE__ */ _("div", { className: "h-8" }, `empty-${f}`);
				let p = wi({
					year: e,
					month: t + 1,
					day: c,
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0
				}, n), m = ho(p, g, n), h = r ? ho(p, r, n) : !1, v = i ? ho(p, i, n) : !1, y = a ? ho(p, a, n) : !1, b = go(p, i ?? null, a ?? o ?? null), x = u && p < u || d && p > d;
				return /* @__PURE__ */ _("button", {
					type: "button",
					"data-day": c,
					disabled: !!x,
					tabIndex: c === C ? 0 : -1,
					"aria-label": `${po[t]} ${c}, ${e}`,
					"aria-current": m ? "date" : void 0,
					onClick: () => s(p),
					onKeyDown: (e) => w(e, c),
					onMouseEnter: () => l?.(p),
					onMouseLeave: () => l?.(null),
					className: q("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", x && "cursor-not-allowed opacity-30", !x && !h && !v && !y && !b && "hover:bg-bg-hover text-text-primary", m && !h && !v && !y && "text-accent font-semibold", (h || v || y) && "bg-accent text-text-on-accent font-semibold", b && !h && !v && !y && "bg-accent-muted text-accent"),
					children: c
				}, c);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function bo({ children: e, className: t, header: n, footer: r, as: i = "div", flush: a = !1, bodyClassName: o, ...s }) {
	let c = rr();
	return /* @__PURE__ */ v(i, {
		...s,
		className: q("bg-bg-secondary border-border overflow-hidden rounded-md border", t),
		children: [
			n && /* @__PURE__ */ _("div", {
				"data-control-size": c,
				className: "ui-bar border-border flex flex-col justify-center border-b px-3 py-2.5",
				children: n
			}),
			/* @__PURE__ */ _("div", {
				className: q(!a && "ui-surface-body p-3", o),
				children: e
			}),
			r && /* @__PURE__ */ _("div", {
				"data-control-size": c,
				className: "ui-bar border-border bg-bg-primary/50 flex flex-col justify-center border-t px-3 py-2.5",
				children: r
			})
		]
	});
}
//#endregion
//#region src/lib/codeInput.ts
function xo(e, t) {
	let n = e.replace(/\D/g, "").slice(0, t);
	return Array.from({ length: t }, (e, t) => n[t] ?? "");
}
function So(e, t, n) {
	if (!t || e.length <= t.length) return e;
	let r = e.length - t.length, i = n ?? e.length;
	return i - r >= 0 ? e.slice(i - r, i) : e.slice(-r);
}
function Co(e, t, n) {
	let r = e.length, i = n.match(RegExp(`(?<!\\d)\\d{${r}}(?!\\d)`));
	if (i) return {
		slots: i[0].split(""),
		focus: r - 1
	};
	if (!/^[\d\s-]+$/.test(n)) return null;
	let a = n.replace(/\D/g, "");
	if (a.length === 0 || a.length > r) return null;
	if (a.length === r) return {
		slots: a.split(""),
		focus: r - 1
	};
	let o = [...e];
	for (let e = 0; e < a.length && t + e < r; e++) o[t + e] = a[e];
	return {
		slots: o,
		focus: Math.min(t + a.length, r - 1)
	};
}
function wo(e, t, n, r) {
	if (n === "") {
		let n = [...e];
		return n[t] = "", {
			slots: n,
			focus: t
		};
	}
	return Co(e, t, So(n, e[t], r));
}
function To(e, t) {
	let n = e[t] ? t : t - 1;
	if (n < 0) return null;
	let r = [...e];
	return r[n] = "", {
		slots: r,
		focus: n
	};
}
//#endregion
//#region src/components/ui/CodeInput.tsx
function Eo({ value: e, onChange: t, onComplete: n, length: r = 6, error: i, invalid: a, disabled: o, autoFocus: s, name: c, "aria-label": l = "Verification code", className: d }) {
	let f = m([]), p = u(), g = a || !!i, [y, b] = h(() => xo(e, r)), [x, S] = h({
		value: e,
		length: r
	});
	(x.value !== e || x.length !== r) && (S({
		value: e,
		length: r
	}), (y.length !== r || y.join("") !== e) && b(xo(e, r)));
	function C(e) {
		let t = f.current[Math.max(0, Math.min(e, r - 1))];
		t?.focus(), t?.select();
	}
	function w(e) {
		if (!e) return;
		b(e.slots);
		let r = e.slots.join("");
		t(r), e.slots.every(Boolean) && n?.(r), C(e.focus);
	}
	function T(e, t) {
		t.key === "Backspace" ? (t.preventDefault(), w(To(y, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), C(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), C(e + 1));
	}
	return /* @__PURE__ */ v("div", {
		className: q("flex flex-col gap-1.5", d),
		children: [
			/* @__PURE__ */ _("div", {
				role: "group",
				"aria-label": l,
				className: "flex justify-between gap-2",
				children: y.map((e, t) => /* @__PURE__ */ _("input", {
					ref: (e) => {
						f.current[t] = e;
					},
					type: "text",
					inputMode: "numeric",
					autoComplete: t === 0 ? "one-time-code" : "off",
					autoFocus: s && t === 0,
					disabled: o,
					"aria-label": `Digit ${t + 1} of ${r}`,
					"aria-invalid": g || void 0,
					"aria-describedby": i ? p : void 0,
					value: e,
					onFocus: (e) => e.target.select(),
					onChange: (e) => w(wo(y, t, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => T(t, e),
					onPaste: (e) => {
						e.preventDefault(), w(Co(y, t, e.clipboardData.getData("text")));
					},
					className: q("bg-bg-secondary text-text-primary h-10 w-10 rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", g ? "border-red" : "border-border")
				}, t))
			}),
			c && /* @__PURE__ */ _("input", {
				type: "hidden",
				name: c,
				value: e,
				disabled: o
			}),
			i && /* @__PURE__ */ _("p", {
				id: p,
				role: "alert",
				className: "text-2xs text-red",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/ui/Combobox.tsx
function Do({ options: e, value: t, onChange: n, onOptionChange: r, placeholder: i = "Select...", label: a, className: o, controlSize: s, id: c, name: l, disabled: d, "aria-label": f, "aria-describedby": p, "aria-invalid": g, query: y, onQueryChange: b, filterOptions: x = !0, selectedOption: S, renderOption: C, loading: w = !1, loadingMessage: T = "Loading results…", error: E, onRetry: O, emptyMessage: A = "No results", footer: j }) {
	let M = rr(s), { open: N, show: P, close: F, rootRef: I, anchorRef: L, triggerRef: R, popupRef: z, labelId: B, triggerId: V, popupId: H } = dr({
		haspopup: "listbox",
		matchWidth: !0,
		disabled: d
	}), [U, W] = h(""), [G, K] = h(0), [ee, te] = h(() => e.find((e) => e.value === t)), ne = m(null), re = u(), ie = c ?? `${re}-search`, ae = `${re}-selected`, oe = y ?? U, se = e.find((e) => e.value === t) ?? (S?.value === t ? S : void 0) ?? (ee?.value === t ? ee : void 0), ce = x ? e.filter((e) => e.label.toLowerCase().includes(oe.toLowerCase())) : e, le = Math.min(G, Math.max(ce.length - 1, 0)), de = ce[le]?.disabled ? ce.findIndex((e) => !e.disabled) : le, fe = ce[de];
	function pe(e) {
		y === void 0 && W(e), b?.(e), K(0);
	}
	function me(e) {
		e.disabled || (te(e), n(e.value), r?.(e), F("select"));
	}
	function he(e) {
		if ([
			"ArrowDown",
			"ArrowUp",
			"Home",
			"End"
		].includes(e.key)) {
			e.preventDefault();
			let t = e.key === "ArrowUp" || e.key === "End" ? -1 : 1, n = e.key === "Home" ? 0 : e.key === "End" ? ce.length - 1 : de + t;
			for (; n >= 0 && n < ce.length && ce[n].disabled;) n += t;
			n >= 0 && n < ce.length && K(n);
		} else e.key === "Enter" ? (e.preventDefault(), fe && me(fe)) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), F("escape"));
	}
	function ge() {
		P(), y === void 0 && W(""), K(0), setTimeout(() => ne.current?.focus(), 0);
	}
	return /* @__PURE__ */ v("div", {
		className: q("flex flex-col gap-1.5", o),
		ref: I,
		onBlur: (e) => {
			N && !e.currentTarget.contains(e.relatedTarget) && F();
		},
		children: [
			a && /* @__PURE__ */ _("span", {
				id: B,
				className: "ui-field-label font-label text-xs font-medium",
				children: a
			}),
			l && /* @__PURE__ */ _("input", {
				type: "hidden",
				name: l,
				value: t,
				disabled: d
			}),
			/* @__PURE__ */ v("div", {
				className: "relative",
				ref: L,
				children: [
					/* @__PURE__ */ _("button", {
						ref: R,
						id: V,
						"data-control-size": M,
						type: "button",
						disabled: d,
						"aria-label": f ?? (a ? void 0 : i),
						"aria-labelledby": a && !f ? `${B} ${ae}` : void 0,
						"aria-describedby": p,
						"aria-invalid": g,
						"aria-expanded": N,
						"aria-haspopup": "listbox",
						"aria-controls": N ? H : void 0,
						onClick: () => N ? F("toggle") : ge(),
						onKeyDown: (e) => {
							(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), ge());
						},
						className: q("ui-sized-control font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms] disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
						children: /* @__PURE__ */ _("span", {
							id: ae,
							children: se ? se.label : /* @__PURE__ */ _("span", {
								className: "text-text-disabled",
								children: t || i
							})
						})
					}),
					/* @__PURE__ */ _(k, {
						"aria-hidden": "true",
						className: q("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", N && "rotate-180")
					}),
					N && /* @__PURE__ */ v("div", {
						ref: z,
						className: q("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
						children: [
							/* @__PURE__ */ _("div", {
								className: "border-border border-b p-1.5",
								children: /* @__PURE__ */ v("div", {
									className: "relative",
									children: [/* @__PURE__ */ _(ue, {
										"aria-hidden": "true",
										className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2"
									}), /* @__PURE__ */ _("input", {
										ref: ne,
										"data-control-size": M,
										"data-has-icon": "true",
										id: ie,
										type: "text",
										role: "combobox",
										"aria-label": f ?? (a ? `Search ${a}` : "Search options"),
										"aria-expanded": "true",
										"aria-controls": H,
										"aria-activedescendant": fe && !fe.disabled ? `${H}-${de}` : void 0,
										"aria-autocomplete": "list",
										"aria-describedby": p,
										"aria-invalid": g,
										value: oe,
										onChange: (e) => pe(e.target.value),
										onKeyDown: he,
										placeholder: "Search...",
										className: "ui-sized-control bg-bg-secondary text-text-primary border-border placeholder:text-text-disabled focus:border-accent font-control h-7 w-full rounded border pr-2 pl-7 text-xs focus:outline-none"
									})]
								})
							}),
							w && /* @__PURE__ */ _("div", {
								role: "status",
								className: "text-text-tertiary px-3 py-2 text-xs",
								children: T
							}),
							E && /* @__PURE__ */ v("div", {
								role: "alert",
								className: "text-text-secondary px-3 py-2 text-xs",
								children: [E, O && /* @__PURE__ */ _("button", {
									type: "button",
									onClick: O,
									className: "text-accent ml-2",
									children: "Retry"
								})]
							}),
							/* @__PURE__ */ _("ul", {
								id: H,
								className: "max-h-48 overflow-y-auto py-1",
								role: "listbox",
								"aria-label": a ?? f ?? "Options",
								"aria-busy": w,
								children: ce.map((e, n) => /* @__PURE__ */ v("li", {
									id: `${H}-${n}`,
									role: "option",
									"aria-selected": e.value === t,
									"aria-disabled": e.disabled || void 0,
									onClick: () => me(e),
									onMouseEnter: () => {
										e.disabled || K(n);
									},
									className: q("font-control flex w-full items-center gap-2 px-3 py-1.5 text-xs", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : "cursor-pointer", !e.disabled && (n === de ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover")),
									children: [/* @__PURE__ */ _("span", {
										className: "flex-1",
										children: C ? C(e) : e.label
									}), e.value === t && /* @__PURE__ */ _(D, {
										"aria-hidden": "true",
										className: "h-3 w-3 shrink-0"
									})]
								}, e.value))
							}),
							ce.length === 0 && !w && !E && /* @__PURE__ */ _("div", {
								role: "status",
								className: "text-text-tertiary px-3 py-2 text-center text-xs",
								children: A
							}),
							j && /* @__PURE__ */ _("div", {
								className: "border-border border-t p-1.5",
								children: j
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/ui/CopyButton.tsx
function Oo(e) {
	let t = document.activeElement, n = document.createElement("textarea");
	n.value = e, n.setAttribute("readonly", ""), n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n);
	try {
		return n.focus(), n.select(), document.execCommand("copy");
	} catch {
		return !1;
	} finally {
		n.remove(), t instanceof HTMLElement && t.focus();
	}
}
async function ko(e) {
	if (navigator.clipboard?.writeText) try {
		return await navigator.clipboard.writeText(e), !0;
	} catch {}
	return Oo(e);
}
function Ao({ value: e, label: t = "Copy", copiedLabel: n = "Copied", iconOnly: r = !1, onCopy: i, variant: a, ...o }) {
	let [s, c] = h(null), [u, d] = h(""), f = m(null), p = m(null);
	l(() => () => {
		p.current !== null && clearTimeout(p.current), f.current !== null && clearTimeout(f.current);
	}, []);
	async function y() {
		let t = !1;
		try {
			t = await ko(typeof e == "function" ? e() : e);
		} catch {}
		p.current !== null && clearTimeout(p.current), c(t ? "copied" : "failed"), d(""), f.current !== null && clearTimeout(f.current), f.current = setTimeout(() => {
			d(t ? n : "Copy failed"), f.current = null;
		}, 50), p.current = setTimeout(() => {
			c(null), d(""), p.current = null;
		}, 2e3), i?.(t);
	}
	let b = s === "copied" ? n : s === "failed" ? "Copy failed" : t;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(Q, {
		...o,
		variant: a ?? (r ? "icon" : "secondary"),
		icon: s === "copied" ? D : P,
		"aria-label": r ? b : o["aria-label"],
		title: r ? b : o.title,
		onClick: y,
		children: r ? void 0 : b
	}), /* @__PURE__ */ _("span", {
		className: "sr-only",
		role: "status",
		"aria-live": "polite",
		children: u
	})] });
}
//#endregion
//#region src/components/ui/DangerZone.tsx
function jo({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: q("border-border mt-8 border-t pt-6", r),
		children: [
			/* @__PURE__ */ _("h3", {
				className: "text-red mb-2 text-xs font-semibold",
				children: e
			}),
			t && /* @__PURE__ */ _("p", {
				className: "text-text-secondary mb-3 text-xs",
				children: t
			}),
			n
		]
	});
}
//#endregion
//#region src/components/ui/DatePicker.tsx
function Mo(e, t) {
	let { year: n, month: r, day: i } = $(e, t);
	return `${fo[r - 1]} ${i}, ${n}`;
}
function No({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date...", format: o }) {
	let s = rr(e), { open: c, show: l, close: u, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: g, popupId: y, triggerAria: b } = dr({
		haspopup: "dialog",
		labelled: !!t
	}), x = $(r ?? /* @__PURE__ */ new Date(), n), [S, C] = h(x.year), [w, T] = h(x.month - 1);
	function D(e) {
		i(e), u("select");
	}
	function O() {
		if (c) {
			u("toggle");
			return;
		}
		r && (C($(r, n).year), T($(r, n).month - 1)), l();
	}
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		ref: d,
		children: [t && /* @__PURE__ */ _("span", {
			id: g,
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			ref: f,
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					ref: p,
					...b,
					onClick: O,
					"data-control-size": s,
					className: q("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? o ? o(r) : Mo(r, n) : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ _(E, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				c && /* @__PURE__ */ _("div", {
					ref: m,
					id: y,
					role: "dialog",
					"aria-label": "Choose date",
					className: q("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: /* @__PURE__ */ _(yo, {
						timeZone: n,
						year: S,
						month: w,
						selected: r,
						onSelect: D,
						onMonthChange: (e, t) => {
							C(e), T(t);
						}
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateRangePicker.tsx
function Po(e) {
	return `${fo[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function Fo(e) {
	return e.start && e.end ? `${Po(e.start)} – ${Po(e.end)}` : e.start ? Po(e.start) : "";
}
function Io({ controlSize: e, label: t, value: n, onChange: r, placeholder: i = "Select date range..." }) {
	let a = rr(e), { open: o, show: s, close: c, rootRef: l, anchorRef: u, triggerRef: d, popupRef: f, labelId: p, popupId: m, triggerAria: g } = dr({
		haspopup: "dialog",
		labelled: !!t
	}), y = /* @__PURE__ */ new Date(), [b, x] = h(n.start?.getFullYear() ?? y.getFullYear()), [S, C] = h(n.start?.getMonth() ?? y.getMonth()), [w, T] = h(null), [D, O] = h("start"), [k, A] = h(n.start), [j, M] = h(n.end), N = S === 11 ? b + 1 : b, P = S === 11 ? 0 : S + 1;
	function F() {
		if (o) {
			c("toggle");
			return;
		}
		A(n.start), M(n.end), O("start"), n.start && (x(n.start.getFullYear()), C(n.start.getMonth())), s();
	}
	function I(e) {
		D === "start" ? (A(e), M(null), O("end")) : (k && e < k ? (M(k), A(e)) : M(e), O("start"), r({
			start: k && e < k ? e : k,
			end: k && e < k ? k : e
		}), c("select"));
	}
	function L() {
		S === 0 ? (x(b - 1), C(11)) : C(S - 1);
	}
	function R() {
		S === 11 ? (x(b + 1), C(0)) : C(S + 1);
	}
	let z = n.start || n.end ? Fo(n) : "";
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		ref: l,
		children: [t && /* @__PURE__ */ _("span", {
			id: p,
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			ref: u,
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					ref: d,
					...g,
					onClick: F,
					"data-control-size": a,
					className: q("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: z || /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ _(E, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				o && /* @__PURE__ */ v("div", {
					ref: f,
					id: m,
					role: "dialog",
					"aria-label": "Choose date range",
					className: q("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [/* @__PURE__ */ v("div", {
						className: "mb-2 flex items-center justify-between",
						children: [
							/* @__PURE__ */ _("button", {
								type: "button",
								onClick: L,
								"aria-label": "Previous month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ _("span", {
									className: "text-xs",
									children: "‹"
								})
							}),
							/* @__PURE__ */ _("span", {
								className: "text-text-tertiary text-2xs",
								"aria-live": "polite",
								children: D === "start" ? "Select start date" : "Select end date"
							}),
							/* @__PURE__ */ _("button", {
								type: "button",
								onClick: R,
								"aria-label": "Next month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ _("span", {
									className: "text-xs",
									children: "›"
								})
							})
						]
					}), /* @__PURE__ */ v("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ _(yo, {
							year: b,
							month: S,
							rangeStart: k,
							rangeEnd: j,
							hoverDate: D === "end" ? w : null,
							onSelect: I,
							onMonthChange: (e, t) => {
								x(e), C(t);
							},
							onHover: T
						}), /* @__PURE__ */ _(yo, {
							year: N,
							month: P,
							rangeStart: k,
							rangeEnd: j,
							hoverDate: D === "end" ? w : null,
							onSelect: I,
							onMonthChange: (e, t) => {
								t === 0 ? (x(e - 1), C(11)) : (x(e), C(t - 1));
							},
							onHover: T
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateTimePicker.tsx
function Lo(e) {
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
function Ro(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function zo(e, t) {
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
	let n = fo[e.getMonth()], r = e.getDate(), i = e.getFullYear(), { hour12: a, period: o } = Lo(e.getHours());
	return `${n} ${r}, ${i} ${a}:${String(e.getMinutes()).padStart(2, "0")} ${o}`;
}
function Bo(e) {
	return String(e).padStart(2, "0");
}
function Vo(e) {
	return /* @__PURE__ */ _(Ho, { ...e }, e.timeZone ?? "browser-local");
}
function Ho({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date & time..." }) {
	let o = rr(e), { open: s, show: c, close: l, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: g, popupId: y, triggerAria: b } = dr({
		haspopup: "dialog",
		labelled: !!t
	}), [x, S] = h(null), [C, w] = h(!1), [T, D] = h("reject"), O = u(), k = $(r ?? /* @__PURE__ */ new Date(), n), A = r ? Lo($(r, n).hour) : {
		hour12: 12,
		period: "PM"
	}, [j, M] = h(k.year), [N, P] = h(k.month - 1), [F, I] = h(String(A.hour12)), [L, R] = h(r ? Bo($(r, n).minute) : "00"), [z, B] = h(A.period), [V, H] = h(r);
	function U(e) {
		H(e);
	}
	function W(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		I(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (I(String(n - 12)), B("PM")) : n === 0 && (I("12"), B("AM"));
	}
	function G() {
		if (!V) return;
		let e = J(parseInt(F, 10) || 12, 1, 12), t = J(parseInt(L, 10) || 0, 0, 59), a = Ro(e, z), o = {
			...$(V, n),
			hour: a,
			minute: t,
			second: 0,
			millisecond: 0
		}, s = r ? $(r, n) : null, c;
		try {
			c = T === "reject" && r && s && [
				"year",
				"month",
				"day",
				"hour",
				"minute"
			].every((e) => s[e] === o[e]) ? new Date(r) : wi(o, n, T);
			let e = $(c, n);
			if (e.hour !== a || e.minute !== t || e.day !== o.day) throw RangeError("This time does not exist in the selected timezone");
		} catch (e) {
			let t = e instanceof Error ? e.message : "Invalid date and time";
			S(t), w(t.includes("twice"));
			return;
		}
		S(null), i(c), l("select");
	}
	function K() {
		if (s) {
			l("toggle");
			return;
		}
		if (r) {
			M($(r, n).year), P($(r, n).month - 1), H(r);
			let e = Lo($(r, n).hour);
			I(String(e.hour12)), B(e.period), R(Bo($(r, n).minute));
		}
		S(null);
		let e = !1;
		if (r && n) try {
			wi($(r, n), n, "reject");
		} catch (t) {
			e = t instanceof Error && t.message.includes("twice");
		}
		w(e), D("reject"), c();
	}
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		ref: d,
		children: [t && /* @__PURE__ */ _("span", {
			id: g,
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			ref: f,
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					ref: p,
					...b,
					onClick: K,
					"data-control-size": o,
					className: q("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? zo(r, n) : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ _(E, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				s && /* @__PURE__ */ v("div", {
					ref: m,
					id: y,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: q("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [
						/* @__PURE__ */ _(yo, {
							timeZone: n,
							year: j,
							month: N,
							selected: V,
							onSelect: U,
							onMonthChange: (e, t) => {
								M(e), P(t);
							}
						}),
						n && /* @__PURE__ */ _("p", {
							className: "text-text-tertiary text-2xs",
							children: n
						}),
						x && /* @__PURE__ */ _("p", {
							id: O,
							role: "alert",
							className: "text-red text-xs",
							children: x
						}),
						C && /* @__PURE__ */ v("select", {
							"aria-label": "Repeated time occurrence",
							value: T,
							onChange: (e) => D(e.target.value),
							className: "bg-bg-secondary text-text-primary border-border rounded-md border text-xs",
							children: [
								/* @__PURE__ */ _("option", {
									value: "reject",
									children: x ? "Choose an occurrence" : "Keep current occurrence"
								}),
								/* @__PURE__ */ _("option", {
									value: "earlier",
									children: "First occurrence (earlier instant)"
								}),
								/* @__PURE__ */ _("option", {
									value: "later",
									children: "Second occurrence (later instant)"
								})
							]
						}),
						/* @__PURE__ */ v("div", {
							className: "border-border mt-3 flex items-center gap-2 border-t pt-3",
							children: [
								/* @__PURE__ */ _("span", {
									className: "text-text-secondary text-2xs font-medium",
									children: "Time"
								}),
								/* @__PURE__ */ v("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ _("input", {
											type: "text",
											inputMode: "numeric",
											maxLength: 2,
											value: F,
											onChange: (e) => W(e.target.value),
											"aria-label": "Hour",
											"aria-invalid": !!x || void 0,
											"aria-describedby": x ? O : void 0,
											className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
										}),
										/* @__PURE__ */ _("span", {
											className: "text-text-tertiary text-xs",
											children: ":"
										}),
										/* @__PURE__ */ _("input", {
											type: "text",
											inputMode: "numeric",
											maxLength: 2,
											value: L,
											onChange: (e) => R(e.target.value.replace(/\D/g, "").slice(0, 2)),
											"aria-label": "Minute",
											"aria-invalid": !!x || void 0,
											"aria-describedby": x ? O : void 0,
											className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
										})
									]
								}),
								/* @__PURE__ */ v("div", {
									className: "border-border inline-flex overflow-hidden rounded-md border",
									role: "group",
									"aria-label": "Time period",
									children: [/* @__PURE__ */ _("button", {
										type: "button",
										onClick: () => B("AM"),
										"aria-pressed": z === "AM",
										className: q("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "AM"
									}), /* @__PURE__ */ _("button", {
										type: "button",
										onClick: () => B("PM"),
										"aria-pressed": z === "PM",
										className: q("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "PM"
									})]
								}),
								/* @__PURE__ */ _("button", {
									type: "button",
									onClick: G,
									disabled: !V,
									className: q("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", V ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
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
//#region src/lib/panelResize.ts
function Uo(e, t, n, r = "right") {
	if (e === "Home") return null;
	if (e === "End") return Infinity;
	if (!(e !== "ArrowLeft" && e !== "ArrowRight")) return t + (e === "ArrowLeft" == (r === "right") ? n : -n);
}
//#endregion
//#region src/components/ui/DetailPanel.tsx
function Wo({ open: e, onClose: t, title: n, children: r, className: i, headerActions: a, sticky: o = !1, resizable: s = !0, defaultWidth: c = 360, minWidth: d = 260, maxWidth: p = 700, fraction: y, defaultFraction: b, minFraction: x, maxFraction: S, onFractionChange: C, collapsed: w = !1, onCollapsedChange: T, railIndicator: E, overlay: D = !1, autoFocus: O = !0 }) {
	let k = m(null), A = m(null), j = m(null), M = m(null), N = m(null), P = m(!1), F = m(w), I = u(), L = u(), R = u(), [z, B] = h(c), [V, H] = h(b ?? .5), [U, W] = h(!1), G = m(null), K = y !== void 0 || b !== void 0 || x !== void 0 || S !== void 0 || C !== void 0, ee = K ? Math.max(0, Math.min(1, x ?? .3)) : d, te = K ? Math.max(ee, Math.min(1, S ?? .7)) : Math.max(ee, p), ne = (e) => Math.max(ee, Math.min(te, e)), re = K ? ne(y ?? V) : z, oe = K ? b ?? .5 : c, se = K ? `${re * 100}%` : z, ce = Rt(e && !w, () => t(), k), le = m(!1);
	l(() => {
		let e = k.current;
		if (!e) return;
		let t = () => {
			P.current = e.contains(e.ownerDocument.activeElement);
		};
		return t(), e.ownerDocument.addEventListener("focusin", t), () => e.ownerDocument.removeEventListener("focusin", t);
	}, []), f(() => {
		e || (P.current = !1), e && F.current !== w && P.current && (w ? M : N).current?.focus(), F.current = w;
	}, [w, e]), l(() => {
		let t = k.current, n = t?.ownerDocument.activeElement;
		e && !le.current && O && !t?.contains(n ?? null) && !n?.closest("[role=\"dialog\"][aria-modal=\"true\"], dialog[open]") && A.current?.focus(), le.current = e;
	}, [e, O]), f(() => {
		if (!e || w || !K) return;
		let t = k.current?.parentElement, n = j.current;
		if (!t || !n) return;
		let r = (e) => {
			n.style.width = `${e * re}px`;
		};
		r(t.getBoundingClientRect().width);
		let i = new ResizeObserver(([e]) => {
			r(e.contentRect.width);
		});
		return i.observe(t), () => i.disconnect();
	}, [
		e,
		w,
		K,
		re
	]), l(() => {
		let e = k.current?.ownerDocument, t = () => {
			G.current = null, W(!1);
		};
		return e?.addEventListener("pointerup", t), e?.addEventListener("pointercancel", t), () => {
			e?.removeEventListener("pointerup", t), e?.removeEventListener("pointercancel", t);
		};
	}, []);
	function ue(e) {
		let t = ne(e);
		K ? (y === void 0 && H(t), C?.(t)) : B(t);
	}
	function de() {
		G.current = null, W(!1);
	}
	return /* @__PURE__ */ _("section", {
		ref: k,
		id: R,
		role: "region",
		"aria-labelledby": e ? L : void 0,
		"aria-hidden": !e || void 0,
		className: q("border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l", !(U && e && !w) && "transition-[width] duration-[200ms] ease-out", i),
		style: {
			width: e ? w ? "3rem" : se : 0,
			position: D ? "absolute" : o ? "sticky" : void 0,
			top: D ? 0 : o ? "var(--detail-panel-top, 0px)" : void 0,
			right: D ? 0 : void 0,
			bottom: D ? 0 : void 0,
			height: o && !D ? "calc(100vh - var(--detail-panel-top, 0px))" : void 0,
			alignSelf: o && !D ? "flex-start" : void 0,
			zIndex: D ? 10 : void 0
		},
		children: e && /* @__PURE__ */ _(Lt.Provider, {
			value: ce,
			children: /* @__PURE__ */ v("div", {
				ref: j,
				className: "animate-fade-in flex h-full flex-col",
				style: { width: w ? "3rem" : K ? void 0 : z },
				children: [
					s && !w && /* @__PURE__ */ _("div", {
						role: "separator",
						tabIndex: 0,
						"aria-orientation": "vertical",
						"aria-label": "Resize panel",
						"aria-controls": R,
						"aria-valuenow": Math.round(re * (K ? 100 : 1)),
						"aria-valuemin": Math.round(ee * (K ? 100 : 1)),
						"aria-valuemax": Math.round(te * (K ? 100 : 1)),
						"aria-valuetext": `${Math.round(re * (K ? 100 : 1))}${K ? "%" : "px"}`,
						className: "hover:bg-accent/30 active:bg-accent/40 focus-visible:outline-accent absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0",
						style: { touchAction: "none" },
						onPointerDown: (e) => {
							e.button === 0 && (e.preventDefault(), e.currentTarget.focus(), e.currentTarget.setPointerCapture(e.pointerId), G.current = {
								x: e.clientX,
								width: re,
								pointerId: e.pointerId,
								parentWidth: k.current?.parentElement?.getBoundingClientRect().width ?? 0
							}, W(!0));
						},
						onPointerMove: (e) => {
							let t = G.current;
							!t || t.pointerId !== e.pointerId || K && !t.parentWidth || ue(t.width + (t.x - e.clientX) / (K ? t.parentWidth : 1));
						},
						onPointerUp: de,
						onPointerCancel: de,
						onLostPointerCapture: de,
						onDoubleClick: () => ue(oe),
						onKeyDown: (e) => {
							let t = Uo(e.key, re, K ? .02 : 16);
							t !== void 0 && (e.preventDefault(), ue(t ?? oe));
						}
					}),
					/* @__PURE__ */ v("div", {
						className: q("border-border flex shrink-0 items-center justify-between border-b px-3", w ? "flex-col gap-2 py-3" : "h-10"),
						children: [/* @__PURE__ */ _("h3", {
							ref: A,
							id: L,
							tabIndex: -1,
							className: "text-text-primary truncate text-xs font-semibold",
							style: w ? {
								writingMode: "vertical-rl",
								maxHeight: "12rem"
							} : void 0,
							children: n
						}), w ? /* @__PURE__ */ v(g, { children: [E, T && /* @__PURE__ */ v("button", {
							type: "button",
							onClick: () => T(!1),
							ref: M,
							"aria-labelledby": `${I} ${L}`,
							className: "text-text-tertiary hover:text-text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded",
							children: [/* @__PURE__ */ _("span", {
								id: I,
								className: "sr-only",
								children: "Expand"
							}), /* @__PURE__ */ _(ae, { className: "h-3.5 w-3.5" })]
						})] }) : /* @__PURE__ */ v("div", {
							className: "flex shrink-0 items-center gap-1",
							children: [
								T && /* @__PURE__ */ v("button", {
									type: "button",
									onClick: () => T(!0),
									ref: N,
									"aria-labelledby": `${I} ${L}`,
									className: "text-text-tertiary hover:text-text-primary flex h-6 w-6 items-center justify-center rounded",
									children: [/* @__PURE__ */ _("span", {
										id: I,
										className: "sr-only",
										children: "Collapse"
									}), /* @__PURE__ */ _(ie, { className: "h-3.5 w-3.5" })]
								}),
								a,
								/* @__PURE__ */ _("button", {
									type: "button",
									onClick: t,
									className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded",
									"aria-label": "Close panel",
									children: /* @__PURE__ */ _(ve, { className: "h-3.5 w-3.5" })
								})
							]
						})]
					}),
					/* @__PURE__ */ _("div", {
						hidden: w,
						inert: w,
						className: "min-h-0 flex-1 overflow-y-auto p-3",
						children: r
					})
				]
			})
		})
	});
}
function Go(e, t) {
	let n = /^\s*(\d*\.?\d+)(px|rem)\s*$/.exec(e);
	if (!n) return 8;
	let r = Number(n[1]), i = n[2] === "rem" ? r * t : r;
	return Number.isFinite(i) && i >= 0 ? i * 2 : 8;
}
function Ko(e, t, [n, r], [i, a], [o, s], c) {
	let [l, u] = r - n <= s - o - c * 2 ? [n, r] : [i, a], d = t + (o + c - l), f = t + (s - c - u);
	return f < d && (f = d), d = Math.min(d, 0), f = Math.max(f, 0), J(e, d, f);
}
function qo(e, t, n, r, i, a) {
	return {
		x: Ko(e.x, t.x, [n.left, n.right], [r.left, r.right], [i.left, i.right], a),
		y: Ko(e.y, t.y, [n.top, n.bottom], [r.top, r.bottom], [i.top, i.bottom], a)
	};
}
function Jo({ x: e, y: t }) {
	return e === 0 && t === 0 ? "" : `${e}px ${t}px`;
}
var Yo = 10, Xo = 50;
function Zo(e, t) {
	let n = t ? Xo : Yo;
	switch (e) {
		case "ArrowLeft": return {
			x: -n,
			y: 0
		};
		case "ArrowRight": return {
			x: n,
			y: 0
		};
		case "ArrowUp": return {
			x: 0,
			y: -n
		};
		case "ArrowDown": return {
			x: 0,
			y: n
		};
		default: return null;
	}
}
//#endregion
//#region src/lib/dialogResize.ts
var Qo = 10, $o = 50;
function es({ left: e, top: t }, n, r, i, a) {
	let o = {
		width: Math.max(0, Math.min(r.width, n.width)),
		height: Math.max(0, Math.min(r.height, n.height))
	};
	return {
		min: o,
		max: {
			width: Math.max(o.width, i.right - a - e),
			height: Math.max(o.height, i.bottom - a - t)
		}
	};
}
function ts(e, { min: t, max: n }) {
	let r = (e, t, n) => Math.round(J(e, t, n));
	return {
		width: r(e.width, t.width, n.width),
		height: r(e.height, t.height, n.height)
	};
}
function ns(e, t) {
	let n = t ? $o : Qo;
	switch (e) {
		case "ArrowLeft": return {
			width: -n,
			height: 0
		};
		case "ArrowRight": return {
			width: n,
			height: 0
		};
		case "ArrowUp": return {
			width: 0,
			height: -n
		};
		case "ArrowDown": return {
			width: 0,
			height: n
		};
		default: return null;
	}
}
//#endregion
//#region src/components/ui/Dialog.tsx
var rs = {
	sm: "max-w-[400px]",
	md: "max-w-[576px]",
	lg: "max-w-[768px]",
	xl: "max-w-[1024px]"
}, is = "(min-width: 48rem)", as = "a[href], button, input, select, textarea, label, summary, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [tabindex]:not([tabindex=\"-1\"])", os = {
	x: 0,
	y: 0
};
function ss(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top,
		right: t.left + e.clientWidth,
		bottom: t.top + e.clientHeight
	};
}
var cs = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function ls(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function us(e, t) {
	let n = t.getBoundingClientRect();
	return {
		left: n.left + e.offsetLeft - t.scrollLeft,
		top: n.top + e.offsetTop - t.scrollTop,
		width: e.offsetWidth,
		height: e.offsetHeight
	};
}
function ds(e, t) {
	if (!(e instanceof HTMLElement) || !e.isConnected) return null;
	let n = e.ownerDocument;
	return e === n.body || e === n.documentElement || t.contains(e) ? null : e.getClientRects().length > 0 ? e : null;
}
function fs(e) {
	return e.ownerDocument.defaultView?.matchMedia(is).matches ?? !1;
}
function ps(e) {
	let t = e.ownerDocument.defaultView;
	return t ? Go(t.getComputedStyle(e).getPropertyValue("--spacing"), parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize)) : 8;
}
function ms(e, t, n) {
	e.style.width = n ? `${n.width}px` : "", e.style.height = n ? `${n.height}px` : "", e.style.maxWidth = n ? "none" : "", t && (t.style.flex = n ? "1 1 0%" : "", t.style.minHeight = n ? "0" : "", t.style.overflowY = n ? "auto" : "");
}
function hs(e, t) {
	return {
		width: 280,
		height: e.offsetHeight - (t?.offsetHeight ?? 0) + 48
	};
}
function gs({ open: e, draggable: t, resizable: n, remember: r, placement: i, anchorRef: a }, o, s, c) {
	let l = m(os), u = m(os), d = m(8), p = m(null), h = m(null), g = m(null), _ = m(!1), v = m(null), y = e && t, b = e && n, x = r && (t || n);
	f(() => {
		let t = o.current, r = y ? s.current : null, f = c.current, m = t?.parentElement, S = t?.ownerDocument.defaultView, C = i !== "center";
		if (x || (g.current = null), (!e && !x || !n) && (v.current = null), !e || !t || !m || !S || !r && !C && !b) return;
		let w = C ? ds(t.ownerDocument.activeElement, t) : null, T = () => C ? ds(a?.current, t) ?? ds(w, t) : null, E = () => ls(u.current, l.current), D = () => {
			t.style.translate = Jo(E());
		}, O = () => {
			let e = us(t, m);
			if (_.current && g.current) {
				u.current = {
					x: g.current.left - e.left,
					y: g.current.top - e.top
				}, l.current = os, t.dataset.placement = "remembered", t.style.transformOrigin = "";
				return;
			}
			let n = fs(t) ? T() : null, r = C && n ? hn(i, n.getBoundingClientRect(), {
				size: {
					width: e.width,
					height: e.height
				},
				bounds: ss(m),
				margin: d.current,
				gap: d.current
			}) : null;
			u.current = r ? {
				x: r.left - e.left,
				y: r.top - e.top
			} : os, t.dataset.placement = r?.side ?? "center", t.style.transformOrigin = r ? cs[r.side] : "";
		}, k = () => {
			let e = l.current;
			if (!r && !_.current || !_.current && e.x === 0 && e.y === 0) return;
			let n = E(), i = qo(n, n, t.getBoundingClientRect(), (r ?? s.current ?? t).getBoundingClientRect(), ss(m), d.current);
			if (l.current = {
				x: i.x - u.current.x,
				y: i.y - u.current.y
			}, D(), _.current) {
				let e = us(t, m);
				g.current = {
					left: e.left + i.x,
					top: e.top + i.y
				};
			}
		}, A = () => {
			d.current = ps(t), fs(t) || (p.current = null, h.current = null, l.current = os, _.current = !1, g.current = null, v.current && ms(t, f, null), v.current = null);
			let e = v.current;
			if (e && !h.current) {
				let n = ss(m), r = d.current, i = _.current && g.current ? g.current : {
					left: n.left + r,
					top: n.top + r
				}, a = ts(e, es(i, e, hs(t, f), n, r)), o = Math.max(n.left + r, Math.min(i.left, n.right - r - a.width)), s = Math.max(n.top + r, Math.min(i.top, n.bottom - r - a.height));
				(a.width !== e.width || a.height !== e.height) && (v.current = a, ms(t, f, a)), _.current && (o !== i.left || s !== i.top) && (g.current = {
					left: o,
					top: s
				});
			}
			p.current || O(), D(), k();
		}, j = 0, M = () => {
			j ||= S.requestAnimationFrame(() => {
				j = 0, A();
			});
		}, N = (e) => {
			e.target === t && k();
		}, P = "ResizeObserver" in S ? new S.ResizeObserver(M) : null;
		return _.current = x && g.current !== null, b && v.current && ms(t, f, v.current), A(), S.addEventListener("resize", M), S.addEventListener("scroll", M, {
			capture: !0,
			passive: !0
		}), t.addEventListener("animationend", N), P?.observe(t), () => {
			S.cancelAnimationFrame(j), S.removeEventListener("resize", M), S.removeEventListener("scroll", M, { capture: !0 }), t.removeEventListener("animationend", N), P?.disconnect(), p.current = null, h.current = null, u.current = os, l.current = os, _.current = !1, t.style.translate = "", t.style.transformOrigin = "", b && (t.style.userSelect = "", ms(t, f, null)), delete t.dataset.placement;
		};
	}, [
		e,
		y,
		b,
		n,
		x,
		i,
		a,
		o,
		s,
		c
	]);
	let S = (e, t) => {
		let n = ls(u.current, l.current), r = us(e, t);
		g.current = {
			left: r.left + n.x,
			top: r.top + n.y
		}, u.current = n, l.current = os, _.current = !0, e.dataset.placement = "remembered", e.style.transformOrigin = "";
	}, C = (e) => s.current ?? e, w = (e) => {
		let t = o.current, n = e.currentTarget, r = t?.parentElement;
		if (!t || !r || e.button !== 0 || !e.isPrimary || h.current) return;
		let i = e.target.closest(as);
		i && i !== n && n.contains(i) || !fs(t) || (e.preventDefault(), n.setPointerCapture(e.pointerId), n.style.cursor = "grabbing", p.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			origin: ls(u.current, l.current),
			dialog: t.getBoundingClientRect(),
			handle: C(n).getBoundingClientRect(),
			bounds: ss(r),
			margin: d.current,
			moved: !1
		});
	}, T = (e) => {
		let t = p.current, n = o.current;
		if (!t || t.pointerId !== e.pointerId || !n) return;
		let r = qo({
			x: t.origin.x + e.clientX - t.startX,
			y: t.origin.y + e.clientY - t.startY
		}, t.origin, t.dialog, t.handle, t.bounds, t.margin);
		t.moved ||= r.x !== t.origin.x || r.y !== t.origin.y, l.current = {
			x: r.x - u.current.x,
			y: r.y - u.current.y
		}, n.style.translate = Jo(r);
	}, E = (e) => {
		let t = p.current, n = e.currentTarget;
		if ((!t || t.pointerId === e.pointerId) && n.style.cursor === "grabbing" && (n.style.cursor = ""), t?.pointerId !== e.pointerId) return;
		p.current = null;
		let r = o.current, i = r?.parentElement;
		!(x || _.current) || !t.moved || !r || !i || S(r, i);
	}, D = (e) => {
		let t = Zo(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
		if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || h.current || !fs(n)) return;
		e.preventDefault();
		let i = ls(u.current, l.current), a = qo({
			x: i.x + t.x,
			y: i.y + t.y
		}, i, n.getBoundingClientRect(), C(e.currentTarget).getBoundingClientRect(), ss(r), d.current);
		a.x === i.x && a.y === i.y || (l.current = {
			x: a.x - u.current.x,
			y: a.y - u.current.y
		}, n.style.translate = Jo(a), (x || _.current) && S(n, r));
	}, O = (e, t, n) => {
		(!_.current || !g.current) && S(e, t);
		let r = g.current;
		if (!r) return;
		v.current = n, ms(e, c.current, n);
		let i = us(e, t);
		u.current = {
			x: r.left - i.left,
			y: r.top - i.top
		}, l.current = os, e.style.translate = Jo(u.current);
	}, k = (e, t) => {
		let n = us(e, t), r = ls(u.current, l.current), i = {
			width: n.width,
			height: n.height
		};
		return {
			current: i,
			limits: es({
				left: n.left + r.x,
				top: n.top + r.y
			}, i, hs(e, c.current), ss(t), d.current)
		};
	}, A = (e) => {
		let t = o.current, n = t?.parentElement;
		if (!t || !n || e.button !== 0 || !e.isPrimary || p.current || !fs(t)) return;
		e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), t.style.userSelect = "none";
		let { current: r, limits: i } = k(t, n);
		h.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			start: r,
			limits: i,
			moved: !1
		};
	}, j = (e) => {
		let t = h.current, n = o.current, r = n?.parentElement;
		if (!t || t.pointerId !== e.pointerId || !n || !r) return;
		let i = ts({
			width: t.start.width + e.clientX - t.startX,
			height: t.start.height + e.clientY - t.startY
		}, t.limits), a = t.moved ? v.current : t.start;
		i.width === a?.width && i.height === a.height || (t.moved = !0, O(n, r, i));
	}, M = (e) => {
		let t = h.current;
		if (t && t.pointerId !== e.pointerId) return;
		h.current = null;
		let n = o.current;
		n && (n.style.userSelect = "");
	};
	return {
		drag: y ? {
			pointer: {
				onPointerDown: w,
				onPointerMove: T,
				onPointerUp: E,
				onPointerCancel: E,
				onLostPointerCapture: E
			},
			onKeyDown: D
		} : void 0,
		resize: b ? {
			pointer: {
				onPointerDown: A,
				onPointerMove: j,
				onPointerUp: M,
				onPointerCancel: M,
				onLostPointerCapture: M
			},
			onKeyDown: (e) => {
				let t = ns(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
				if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || h.current || !fs(n)) return;
				e.preventDefault();
				let { current: i, limits: a } = k(n, r), s = ts({
					width: i.width + t.width,
					height: i.height + t.height
				}, a);
				s.width === i.width && s.height === i.height || O(n, r, s);
			}
		} : void 0
	};
}
function _s({ open: e, onClose: t, title: n, children: r, footer: i, className: a, size: o = "sm", draggable: s = !1, resizable: c = !1, rememberPosition: l = !1, placement: d = "center", anchorRef: f, role: p = "dialog", description: h, "aria-label": g, "aria-describedby": y, initialFocusRef: b, returnFocusRef: x, busy: S = !1, closeOnEscape: C = !0, closeOnOverlayClick: w = !0, hideCloseButton: T = !1 }) {
	let E = rr(), D = m(null), [O, k] = Jt(D), A = m(null), j = m(null), M = u(), N = u();
	kt(D, e, {
		initialFocusRef: b,
		returnFocusRef: x
	});
	let { drag: P, resize: F } = gs({
		open: e,
		draggable: s,
		resizable: c,
		remember: l,
		placement: d,
		anchorRef: f
	}, D, A, j), I = Rt(e, (e) => {
		!C || S || (e.preventDefault(), t());
	});
	if (zt(e), !e) return null;
	let L = P && /* @__PURE__ */ _("button", {
		type: "button",
		"aria-label": "Move dialog",
		title: "Move dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-grip": "",
		className: "text-text-tertiary hover:text-text-secondary hover:bg-bg-hover focus-visible:outline-accent order-first hidden h-5 w-5 shrink-0 cursor-grab items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 md:flex md:touch-none md:select-none",
		...P.pointer,
		onKeyDown: P.onKeyDown,
		children: /* @__PURE__ */ _(R, {
			className: "h-3.5 w-3.5",
			"aria-hidden": "true"
		})
	}), B = F && /* @__PURE__ */ _("button", {
		type: "button",
		"aria-label": "Resize dialog",
		title: "Resize dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-resize": "",
		className: "text-text-tertiary hover:text-text-primary focus-visible:outline-accent absolute right-0.5 bottom-0.5 hidden h-4 w-4 cursor-nwse-resize items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-0 md:flex md:touch-none md:select-none",
		...F.pointer,
		onKeyDown: F.onKeyDown,
		children: /* @__PURE__ */ _(z, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		})
	});
	return xe(/* @__PURE__ */ _(Lt.Provider, {
		value: I,
		children: /* @__PURE__ */ _(Kt.Provider, {
			value: O,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: () => {
						w && !S && t();
					},
					"aria-hidden": "true"
				}), /* @__PURE__ */ v("div", {
					ref: k,
					className: q(`relative z-50 mx-1 mb-8 flex w-full ${rs[o]} flex-col`, "bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
					role: p,
					tabIndex: -1,
					"aria-busy": S || void 0,
					"aria-modal": "true",
					"aria-labelledby": n ? M : void 0,
					"aria-label": g ?? (n ? void 0 : "Dialog"),
					"aria-describedby": [h ? N : void 0, y].filter(Boolean).join(" ") || void 0,
					children: [
						(n || !T || s) && /* @__PURE__ */ v("div", {
							ref: A,
							"data-control-size": E,
							className: q("ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5", s && "md:cursor-move md:touch-none md:select-none"),
							...P?.pointer,
							children: [n && /* @__PURE__ */ _("h3", {
								id: M,
								className: "text-text-primary min-w-0 text-sm font-medium",
								children: n
							}), !T && /* @__PURE__ */ _(Q, {
								type: "button",
								variant: "icon",
								size: "sm",
								"aria-disabled": S || void 0,
								onClick: () => {
									S || t();
								},
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ _(ve, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ v("div", {
							ref: j,
							className: "ui-surface-body p-3",
							children: [h && /* @__PURE__ */ _("div", {
								id: N,
								className: "text-text-secondary mb-3 text-xs",
								children: h
							}), r]
						}),
						i && /* @__PURE__ */ v("div", {
							"data-control-size": E,
							className: q("ui-bar border-border bg-bg-primary/50 flex shrink-0 rounded-b-lg border-t px-3 py-2.5", B && "md:pr-6", L ? "items-center gap-2" : "flex-col justify-center"),
							children: [L ? /* @__PURE__ */ _("div", {
								className: "flex min-w-0 flex-1 flex-col justify-center",
								children: i
							}) : i, L]
						}),
						L && !i && /* @__PURE__ */ _("div", {
							className: "hidden px-3 pb-2 md:flex",
							children: L
						}),
						B && !i && !L && /* @__PURE__ */ _("div", {
							"data-dialog-resize-spacer": "",
							className: "hidden h-5 md:block"
						}),
						B
					]
				})]
			})
		})
	}), document.body);
}
//#endregion
//#region src/components/ui/DialogActions.tsx
function vs({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a, busy: o = !1, busyLabel: s = "Working…", cancelRef: c, confirmRef: l, confirmDisabled: u = !1 }) {
	return /* @__PURE__ */ v("div", {
		className: q("flex justify-end gap-2", a),
		"aria-busy": o || void 0,
		children: [/* @__PURE__ */ _(Q, {
			ref: c,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-disabled": o || void 0,
			onClick: () => {
				o || e();
			},
			children: n
		}), /* @__PURE__ */ _(Q, {
			ref: l,
			type: "button",
			variant: i,
			size: "sm",
			"aria-disabled": o || u || void 0,
			onClick: () => {
				!o && !u && t();
			},
			children: o ? s : r
		})]
	});
}
//#endregion
//#region src/components/ui/DividerLabel.tsx
function ys({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: q("my-6 flex items-center gap-3", t),
		children: [
			/* @__PURE__ */ _("div", { className: "border-border flex-1 border-t" }),
			/* @__PURE__ */ _("span", {
				className: "text-text-tertiary text-xs",
				children: e
			}),
			/* @__PURE__ */ _("div", { className: "border-border flex-1 border-t" })
		]
	});
}
//#endregion
//#region src/components/ui/DropdownMenu.tsx
var bs = (e) => !e.divider;
function xs(e) {
	return e.checked === void 0 ? "menuitem" : e.type === "radio" ? "menuitemradio" : "menuitemcheckbox";
}
function Ss({ trigger: e, items: r, header: i, renderLink: a, align: c = "right" }) {
	let [d, f] = h(!1), p = i != null && i !== !1, y = qt(), [b, x] = h(0), [S, C] = h(""), [w, T] = h(-1), E = m(null), O = m(null), k = m(null), A = m(null), j = m([]), M = m(!1), N = u(), P = `${N}menu`, F = `${N}header`, I = o(e) && e.type !== t ? e : null, L = I?.props.id, R = typeof L == "string" && L ? L : `${N}trigger`, z = [];
	r.forEach((e) => {
		bs(e) && z.push({
			item: e,
			index: z.length
		});
	});
	let B = z.filter(({ item: e }) => !e.disabled), V = () => {
		let e = E.current;
		return e ? I ? [...e.querySelectorAll("[id]")].find((e) => e.id === R) ?? e.querySelector("button, a[href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])") ?? e.firstElementChild ?? e : e : null;
	}, H = s((e) => {
		f(!1), T(-1), (e === "escape" || e === "select" || e === "tab") && O.current?.focus();
	}, []);
	Tn(d, H, [A], [E]), Cn(d, O, A, {
		side: "bottom",
		align: c === "left" ? "start" : "end",
		gap: 4,
		onAnchorHidden: H
	}), l(() => {
		d && (w >= 0 ? j.current[w] : k.current)?.focus();
	}, [
		d,
		w,
		p
	]);
	function U(e) {
		let t = V();
		O.current = t, C(t?.id ?? ""), x(t?.getBoundingClientRect().width ?? 0), f(!0), T((e === "first" ? B[0] : e === "last" ? B.at(-1) : null)?.index ?? -1);
	}
	function W(e) {
		if (!(M.current && (M.current = !1, e.detail === 0))) {
			if (d) {
				H();
				return;
			}
			U(e.detail === 0 ? "first" : "menu");
		}
	}
	function G(e) {
		M.current = !1, e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), U(e.key === "ArrowDown" ? "first" : "last")) : !I && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), d ? H("select") : U("first"));
	}
	function K(e) {
		!e || e.item.disabled || (H("select"), e.item.onClick?.());
	}
	function ee(e, t) {
		let n = z.length, r = e === -1 && t === -1 ? n : e;
		for (let e = 1; e <= n; e++) {
			let i = z[(r + t * e + n * 2) % n];
			if (!i.item.disabled) return i.index;
		}
		return -1;
	}
	function te(e) {
		let t = _r(z.map((e) => e.item.label), (e) => !!z[e].item.disabled, w, e);
		return t === -1 ? w : z[t].index;
	}
	function ne(e) {
		let { key: t } = e, n = null;
		if (t === "ArrowDown") n = ee(w, 1);
		else if (t === "ArrowUp") n = ee(w, -1);
		else if (t === "Home") n = B[0]?.index ?? -1;
		else if (t === "End") n = B.at(-1)?.index ?? -1;
		else if (t === "Enter" || t === " ") {
			let n = j.current.indexOf(e.target), r = n === -1 ? void 0 : z[n];
			if (!r || r.item.disabled) {
				e.preventDefault();
				return;
			}
			if (r.item.href !== void 0 && t === "Enter") return;
			e.preventDefault(), t === " " && (M.current = !0), r.item.href === void 0 ? K(r) : j.current[n]?.click();
			return;
		} else if (t === "Tab") {
			H("tab");
			return;
		} else t !== " " && mr(e) && (n = te(t));
		n !== null && (e.preventDefault(), T(n));
	}
	let re = {
		"aria-haspopup": "menu",
		"aria-expanded": d,
		"aria-controls": d ? P : void 0
	}, ie = -1, ae = d ? /* @__PURE__ */ _("div", {
		ref: (e) => {
			k.current = e, p || (A.current = e);
		},
		id: P,
		role: "menu",
		"aria-labelledby": S || R,
		"aria-describedby": p ? F : void 0,
		tabIndex: -1,
		onKeyDown: ne,
		onFocus: (e) => e.stopPropagation(),
		onBlur: (e) => e.stopPropagation(),
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none",
		style: { minWidth: b },
		children: r.map((e, n) => {
			if (e.divider) return /* @__PURE__ */ _("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${n}`);
			ie++;
			let r = z[ie], i = e.checked !== void 0, o = /* @__PURE__ */ v("button", {
				type: "button",
				ref: (e) => {
					j.current[r.index] = e;
				},
				role: xs(e),
				"aria-checked": i ? e.checked : void 0,
				"aria-disabled": e.disabled || void 0,
				tabIndex: r.index === w ? 0 : -1,
				onClick: () => K(r),
				onMouseDown: e.disabled ? (e) => e.preventDefault() : void 0,
				onFocus: () => T(r.index),
				onMouseMove: () => {
					!e.disabled && r.index !== w && T(r.index);
				},
				className: q("flex h-7 w-full items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.disabled ? "text-text-secondary cursor-not-allowed opacity-50" : e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted cursor-pointer" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover cursor-pointer"),
				children: [
					e.icon && /* @__PURE__ */ _("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center",
						children: e.icon
					}),
					/* @__PURE__ */ _("span", {
						className: "flex-1",
						children: e.label
					}),
					e.badge != null && /* @__PURE__ */ _("span", {
						className: "ml-auto",
						children: e.badge
					}),
					e.shortcut && /* @__PURE__ */ _("span", {
						className: "text-2xs text-text-tertiary ml-auto pl-4 font-mono",
						children: e.shortcut
					}),
					e.checked && /* @__PURE__ */ _(D, { className: "text-accent ml-auto h-3.5 w-3.5 shrink-0" })
				]
			}, `item-${n}`);
			if (e.href === void 0) return o;
			let s = {
				...o.props,
				type: void 0,
				href: e.disabled ? void 0 : e.href,
				target: e.target,
				rel: e.rel,
				download: e.download,
				"aria-current": e["aria-current"],
				onClick: (t) => {
					if (e.disabled) {
						t.preventDefault();
						return;
					}
					t.defaultPrevented || t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || K(r);
				},
				onAuxClick: e.disabled ? (e) => e.preventDefault() : void 0,
				ref: (e) => {
					j.current[r.index] = e;
				}
			};
			return delete s.key, /* @__PURE__ */ _(t, { children: a ? a(s, e) : /* @__PURE__ */ _("a", { ...s }) }, `item-${n}`);
		})
	}) : null;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", {
		ref: E,
		onClick: W,
		onKeyDown: G,
		...I ? {} : {
			...re,
			id: R,
			role: "button",
			tabIndex: 0
		},
		children: I ? n(I, {
			...re,
			id: R
		}) : e
	}), ae && xe(p ? /* @__PURE__ */ v("div", {
		ref: A,
		onMouseDown: (e) => {
			k.current?.contains(e.target) || e.preventDefault();
		},
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none",
		style: { minWidth: b },
		children: [/* @__PURE__ */ _("div", {
			id: F,
			className: "border-border border-b px-4 py-2",
			children: i
		}), n(ae, {
			className: "focus:outline-none",
			style: void 0
		})]
	}) : ae, y ?? document.body)] });
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function Cs({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ v("div", {
		className: q("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ _("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ _(B, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ _("p", {
				className: "text-text-primary mb-1 text-sm font-medium",
				children: t
			}),
			n && /* @__PURE__ */ _("p", {
				className: "text-text-secondary max-w-[300px] text-center text-xs",
				children: n
			}),
			r && /* @__PURE__ */ _("div", {
				className: "mt-4",
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/ui/ErrorBoundary.tsx
var ws = class extends e {
	state = {
		hasError: !1,
		error: null
	};
	static getDerivedStateFromError(e) {
		return {
			hasError: !0,
			error: e
		};
	}
	componentDidCatch(e, t) {
		console.error("[ErrorBoundary] Uncaught error:", e, t.componentStack);
	}
	render() {
		return this.state.hasError ? /* @__PURE__ */ v("div", {
			className: "bg-bg-primary flex min-h-svh flex-col items-center justify-center p-8 text-center",
			children: [
				/* @__PURE__ */ _("p", {
					className: "text-text-primary mb-2 text-lg font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ _("p", {
					className: "text-text-secondary mb-6 max-w-md text-xs",
					children: this.state.error?.message ?? "An unexpected error occurred."
				}),
				/* @__PURE__ */ _(Q, {
					variant: "secondary",
					onClick: () => {
						this.setState({
							hasError: !1,
							error: null
						}), window.location.href = "/";
					},
					children: "Go home"
				})
			]
		}) : this.props.children;
	}
};
//#endregion
//#region src/components/ui/FilterDropdown.tsx
function Ts({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ _(Ss, {
		align: r,
		trigger: /* @__PURE__ */ _(Br, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function Es({ children: e, className: t }) {
	return /* @__PURE__ */ _("kbd", {
		className: q("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var Ds = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function Os({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ _("div", {
		className: q("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ _(H, { className: q("text-accent animate-spin", Ds[t]) })
	});
}
//#endregion
//#region src/components/ui/MessageBubble.tsx
function ks({ direction: e, author: t, timestamp: n, status: r, actions: i, children: a, className: o, ...s }) {
	let c = e === "outbound";
	return /* @__PURE__ */ _("div", {
		role: "group",
		"aria-label": `${c ? "Outbound" : "Inbound"} message`,
		...s,
		"data-direction": e,
		className: q("flex", c && "justify-end", o),
		children: /* @__PURE__ */ v("div", {
			className: q("min-w-0 rounded-md px-4 py-3", c ? "bg-accent text-text-on-accent" : "border-border bg-bg-secondary text-text-primary border"),
			style: { maxWidth: "min(36rem, 85%)" },
			children: [
				t != null && /* @__PURE__ */ _("div", {
					className: "mb-1 text-xs font-medium",
					children: t
				}),
				/* @__PURE__ */ _("div", {
					className: "text-xs whitespace-pre-wrap",
					style: { overflowWrap: "anywhere" },
					children: a
				}),
				(n != null || r != null || i != null) && /* @__PURE__ */ v("div", {
					className: "mt-2 flex flex-wrap items-center gap-2 text-2xs",
					children: [
						n != null && /* @__PURE__ */ _("span", { children: n }),
						r != null && /* @__PURE__ */ _("span", { children: r }),
						i != null && /* @__PURE__ */ _("span", {
							className: "inline-flex items-center gap-1",
							children: i
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/lib/layout.ts
function As(e, t, n, r) {
	let i = typeof t == "object" ? t : { base: t }, a = { [`--ui-${e}-base`]: n(i.base ?? r) };
	for (let t of [
		"sm",
		"md",
		"lg",
		"xl"
	]) a[`--ui-${e}-${t}`] = i[t] === void 0 ? "initial" : n(i[t]);
	return a;
}
function js(e) {
	return typeof e == "number" ? `repeat(${e}, minmax(0, 1fr))` : e;
}
function Ms(e = 0, t, n) {
	return {
		"--ui-gap": `calc(var(--spacing) * ${e})`,
		"--ui-gap-x": t === void 0 ? "initial" : `calc(var(--spacing) * ${t})`,
		"--ui-gap-y": n === void 0 ? "initial" : `calc(var(--spacing) * ${n})`
	};
}
function Ns(e) {
	return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Ps(e) {
	return e === "between" || e === "around" || e === "evenly" ? `space-${e}` : Ns(e);
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
var Fs = "ui-metadata-stripe rounded-md px-2 py-1.5";
function Is(e, t) {
	return As("stripe", t, (t) => Math.floor(e / t) % 2 == 0 ? "var(--ui-metadata-stripe-color, var(--bg-tertiary))" : "transparent", 1);
}
function Ls({ items: e, labelWidth: n = "100px", layout: r = "inline", columns: i = 1, gap: a = 3, striped: o = !1, className: s }) {
	return r === "stacked" ? /* @__PURE__ */ _("dl", {
		className: q("ui-grid text-xs", s),
		style: {
			...As("columns", i, js, 1),
			...o ? Ms(a, void 0, 0) : Ms(a)
		},
		children: e.map((e, t) => /* @__PURE__ */ v("div", {
			className: o ? Fs : void 0,
			style: o ? Is(t, i) : void 0,
			children: [/* @__PURE__ */ _("dt", {
				className: "text-text-tertiary font-label",
				children: e.label
			}), /* @__PURE__ */ _("dd", {
				className: q((typeof e.value == "string" || typeof e.value == "number") && "text-text-primary font-data"),
				children: e.value
			})]
		}, e.label))
	}) : o ? /* @__PURE__ */ _("div", {
		className: q("gap-x-3 text-xs", s),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e, t) => /* @__PURE__ */ v("div", {
			className: Fs,
			style: {
				...Is(t, 1),
				display: "grid",
				gridColumn: "1 / -1",
				gridTemplateColumns: "subgrid"
			},
			children: [/* @__PURE__ */ _("span", {
				className: "text-text-tertiary font-label",
				children: e.label
			}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ _("span", {
				className: "text-text-primary font-data",
				children: e.value
			}) : /* @__PURE__ */ _("span", { children: e.value })]
		}, e.label))
	}) : /* @__PURE__ */ _("div", {
		className: q("gap-x-3 gap-y-2 text-xs", s),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e) => /* @__PURE__ */ v(t, { children: [/* @__PURE__ */ _("span", {
			className: "text-text-tertiary font-label",
			children: e.label
		}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ _("span", {
			className: "text-text-primary font-data",
			children: e.value
		}) : /* @__PURE__ */ _("span", { children: e.value })] }, e.label))
	});
}
//#endregion
//#region src/components/ui/MetricCard.tsx
var Rs = {
	positive: "success",
	negative: "danger",
	neutral: "neutral"
};
function zs({ label: e, value: t, sub: n, trend: r, bar: i, icon: a, iconColor: o, className: s }) {
	let c = r && Rs[r.tone], l = In(Pn(c) ? c : "neutral").text;
	return /* @__PURE__ */ v("div", {
		className: q("bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3", s),
		children: [
			a && /* @__PURE__ */ _(a, { className: q("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", o) }),
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label mb-1 font-medium tracking-wider uppercase",
				children: e
			}),
			/* @__PURE__ */ _("p", {
				className: "text-text-primary font-data text-xl font-bold tabular-nums",
				children: t
			}),
			n && /* @__PURE__ */ _("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: n
			}),
			r && /* @__PURE__ */ v("p", {
				className: "text-2xs font-label mt-1 flex items-center gap-1",
				children: [/* @__PURE__ */ _("span", {
					className: q("font-medium tabular-nums", l),
					children: r.value
				}), /* @__PURE__ */ _("span", {
					className: "text-text-tertiary",
					children: r.label
				})]
			}),
			i !== void 0 && /* @__PURE__ */ _("div", {
				className: "bg-bg-tertiary mt-2 h-[3px] overflow-hidden rounded-md",
				children: /* @__PURE__ */ _("div", {
					className: "bg-accent h-full rounded-md transition-all duration-[250ms] ease-out",
					style: { width: `${Math.min(100, Math.max(0, i))}%` }
				})
			})
		]
	});
}
//#endregion
//#region src/components/ui/OAuthButton.tsx
function Bs() {
	return /* @__PURE__ */ v("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ _("path", {
				fill: "currentColor",
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
			}),
			/* @__PURE__ */ _("path", {
				fill: "currentColor",
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			}),
			/* @__PURE__ */ _("path", {
				fill: "currentColor",
				d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
			}),
			/* @__PURE__ */ _("path", {
				fill: "currentColor",
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
			})
		]
	});
}
function Vs() {
	return /* @__PURE__ */ _("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ _("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var Hs = {
	github: "GitHub",
	google: "Google"
}, Us = {
	github: Vs,
	google: Bs
};
function Ws({ provider: e, children: t, ...n }) {
	let r = Us[e];
	return /* @__PURE__ */ v(Q, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ _(r, {}), t ?? Hs[e]]
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function Gs({ title: e, subtitle: t, actions: n, className: r, eyebrow: i, headingLevel: a = 1, wrap: o = !1 }) {
	let s = `h${a}`;
	return /* @__PURE__ */ v("div", {
		className: q("flex items-center justify-between gap-3", o && "flex-wrap", r),
		children: [/* @__PURE__ */ v("div", {
			className: "min-w-0",
			children: [
				i && /* @__PURE__ */ _("p", {
					className: "text-text-tertiary text-2xs",
					children: i
				}),
				/* @__PURE__ */ _(s, {
					className: "text-text-primary font-heading text-sm font-semibold",
					children: e
				}),
				t && /* @__PURE__ */ _("p", {
					className: "text-text-tertiary text-xs",
					children: t
				})
			]
		}), n && /* @__PURE__ */ _("div", {
			className: q("flex items-center gap-2", o && "flex-wrap"),
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/PageSection.tsx
function Ks({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ v("section", {
		className: q("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ v("div", {
			className: q("border-border flex items-end justify-between gap-3 border-b pb-2", o),
			children: [/* @__PURE__ */ v("div", {
				className: "min-w-0",
				children: [e && /* @__PURE__ */ _(i, {
					className: "text-text-primary font-heading text-xs font-semibold",
					children: e
				}), t && /* @__PURE__ */ _("p", {
					className: "text-text-secondary mt-1 text-xs",
					children: t
				})]
			}), n && /* @__PURE__ */ _("div", {
				className: "flex items-center gap-2",
				children: n
			})]
		}), /* @__PURE__ */ _("div", {
			className: s,
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/PaginationBar.tsx
var qs = [
	{
		value: "10",
		label: "10 per page"
	},
	{
		value: "25",
		label: "25 per page"
	},
	{
		value: "50",
		label: "50 per page"
	}
];
function Js({ page: e, pageSize: t, total: n, summary: r, showTotal: i = !1, loading: a = !1, pageSizeOptions: o = qs, onPageChange: s, onPageSizeChange: c, className: l }) {
	let u = Math.ceil(n / t), d = Math.min((e - 1) * t + 1, n), f = Math.min(e * t, n);
	return /* @__PURE__ */ v("div", {
		className: q("flex items-center justify-between", l),
		children: [/* @__PURE__ */ v("div", {
			className: "flex items-center gap-3",
			children: [c && /* @__PURE__ */ _(Sr, {
				size: "sm",
				value: String(t),
				onChange: (e) => {
					a || c(Number(e));
				},
				options: o,
				className: "w-28",
				disabled: a
			}), /* @__PURE__ */ v("span", {
				role: "status",
				className: q("text-text-tertiary text-xs", !a && "hidden sm:inline"),
				children: [a ? "Loading results..." : r === void 0 ? /* @__PURE__ */ v(g, { children: [
					d,
					"–",
					f,
					" of ",
					n
				] }) : typeof r == "function" ? r(n) : r, !a && i && /* @__PURE__ */ v(g, { children: [
					" · ",
					n,
					" in total"
				] })]
			})]
		}), /* @__PURE__ */ _(Ur, {
			page: e,
			totalPages: u,
			onPageChange: s,
			loading: a,
			summary: null
		})]
	});
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var Ys = a(({ label: e, error: t, className: n, id: r, hint: i, controlSize: a, required: o, "aria-describedby": s, "aria-invalid": c, ...l }, u) => {
	let d = oi({
		id: r,
		error: t,
		hint: i,
		describedBy: s,
		invalid: c,
		required: o
	}), { inputId: f, errorId: p, hintId: m } = d, g = rr(a), [y, b] = h(!1);
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		children: [
			i && /* @__PURE__ */ _("p", {
				id: m,
				className: "text-text-secondary text-xs",
				children: i
			}),
			(e || t) && /* @__PURE__ */ v("div", {
				className: "flex items-center justify-between",
				children: [e && /* @__PURE__ */ _("label", {
					htmlFor: f,
					className: "ui-field-label text-xs font-medium",
					children: e
				}), t && /* @__PURE__ */ _("p", {
					id: p,
					className: "text-2xs text-red",
					children: t
				})]
			}),
			/* @__PURE__ */ v("div", {
				className: "relative",
				children: [/* @__PURE__ */ _("input", {
					ref: u,
					"data-control-size": g,
					required: d.required,
					"aria-invalid": d.invalid,
					"aria-describedby": d.describedBy,
					id: f,
					type: y ? "text" : "password",
					className: q("ui-password-input ui-sized-control bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
					...l
				}), /* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => b(!y),
					"data-control-size": g,
					className: "ui-password-toggle text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",
					"aria-label": y ? "Hide password" : "Show password",
					children: _(y ? L : I, { className: "h-3.5 w-3.5" })
				})]
			})
		]
	});
});
Ys.displayName = "PasswordInput";
var Xs = Object.freeze([
	{
		label: "At least 8 characters",
		test: (e) => e.length >= 8
	},
	{
		label: "One uppercase letter",
		test: (e) => /[A-Z]/.test(e)
	},
	{
		label: "One lowercase letter",
		test: (e) => /[a-z]/.test(e)
	},
	{
		label: "One number",
		test: (e) => /\d/.test(e)
	}
]);
function Zs(e, t = Xs) {
	return t.every((t) => t.test(e));
}
//#endregion
//#region src/components/ui/PasswordRequirements.tsx
function Qs({ password: e, requirements: t = Xs, showWhenEmpty: n = !1, className: r }) {
	return !n && e.length === 0 ? null : /* @__PURE__ */ _("ul", {
		"aria-label": "Password requirements",
		className: q("space-y-1", r),
		children: t.map((t) => {
			let n = t.test(e);
			return /* @__PURE__ */ v("li", {
				className: "flex items-center gap-1.5",
				children: [n ? /* @__PURE__ */ _(D, {
					"aria-hidden": "true",
					className: "text-green h-3 w-3"
				}) : /* @__PURE__ */ _(ve, {
					"aria-hidden": "true",
					className: "text-text-disabled h-3 w-3"
				}), /* @__PURE__ */ v("span", {
					className: q("text-2xs", n ? "text-green" : "text-text-disabled"),
					children: [t.label, /* @__PURE__ */ _("span", {
						className: "sr-only",
						children: n ? " (met)" : " (not met)"
					})]
				})]
			}, t.label);
		})
	});
}
//#endregion
//#region src/components/ui/Popover.tsx
function $s({ trigger: e, open: t, onOpenChange: n, placement: r = "bottom", ariaLabel: i, children: a, className: o }) {
	let c = m(null), l = m(null), [d, p] = Jt(l), h = u(), y = (e) => {
		n(!1), e === "escape" && c.current?.focus();
	}, b = Tn(t, y, [l], [c]);
	Cn(t, c, l, {
		side: r,
		onAnchorHidden: () => y()
	});
	let x = s((e) => {
		if (p(e), e) return () => {
			e.contains(e.ownerDocument.activeElement) && c.current?.focus({ preventScroll: !0 }), p(null);
		};
	}, [p]);
	return f(() => {
		t && l.current?.focus();
	}, [t]), /* @__PURE__ */ v(g, { children: [e({
		ref: c,
		type: "button",
		onClick: () => n(!t),
		"aria-haspopup": "dialog",
		"aria-expanded": t,
		"aria-controls": t ? h : void 0
	}), t && /* @__PURE__ */ _("div", {
		ref: x,
		id: h,
		role: "dialog",
		"aria-label": i,
		tabIndex: -1,
		className: q("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "text-text-primary p-3 text-xs focus:outline-none", o),
		children: /* @__PURE__ */ _(Lt.Provider, {
			value: b,
			children: /* @__PURE__ */ _(Kt.Provider, {
				value: d,
				children: a
			})
		})
	})] });
}
//#endregion
//#region src/components/ui/ProfileHeader.tsx
function ec({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ v("div", {
		className: q("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ _(jn, {
				name: e,
				size: "lg"
			}),
			/* @__PURE__ */ v("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ v("div", {
						className: "mb-1 flex items-center gap-2",
						children: [/* @__PURE__ */ _("h1", {
							className: "text-text-primary text-base font-semibold",
							children: e
						}), n]
					}),
					t && /* @__PURE__ */ _("p", {
						className: "text-text-tertiary text-xs",
						children: t
					}),
					r && r.length > 0 && /* @__PURE__ */ _("div", {
						className: "mt-2 flex flex-wrap gap-3",
						children: r.map((e) => {
							let t = e.icon, n = /* @__PURE__ */ v(g, { children: [
								/* @__PURE__ */ _(t, { className: "h-3 w-3" }),
								" ",
								e.text
							] });
							return e.href ? /* @__PURE__ */ _("a", {
								href: e.href,
								className: "text-2xs-f text-accent hover:text-accent-hover flex cursor-pointer items-center gap-1",
								children: n
							}, e.text) : /* @__PURE__ */ _("span", {
								className: "text-2xs-f text-text-tertiary flex items-center gap-1",
								children: n
							}, e.text);
						})
					})
				]
			}),
			i
		]
	});
}
//#endregion
//#region src/components/ui/ProseContent.tsx
function tc({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: q("ui-prose", t),
		children: e
	});
}
//#endregion
//#region src/lib/qrCode.ts
var nc = class extends RangeError {
	constructor() {
		super("Text is too long to encode as a QR code"), this.name = "QrCapacityError";
	}
}, rc = {
	L: 0,
	M: 1,
	Q: 2,
	H: 3
}, ic = {
	L: 1,
	M: 0,
	Q: 3,
	H: 2
}, ac = [
	[
		-1,
		7,
		10,
		15,
		20,
		26,
		18,
		20,
		24,
		30,
		18,
		20,
		24,
		26,
		30,
		22,
		24,
		28,
		30,
		28,
		28,
		28,
		28,
		30,
		30,
		26,
		28,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30
	],
	[
		-1,
		10,
		16,
		26,
		18,
		24,
		16,
		18,
		22,
		22,
		26,
		30,
		22,
		22,
		24,
		24,
		28,
		28,
		26,
		26,
		26,
		26,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28,
		28
	],
	[
		-1,
		13,
		22,
		18,
		26,
		18,
		24,
		18,
		22,
		20,
		24,
		28,
		26,
		24,
		20,
		30,
		24,
		28,
		28,
		26,
		30,
		28,
		30,
		30,
		30,
		30,
		28,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30
	],
	[
		-1,
		17,
		28,
		22,
		16,
		22,
		28,
		26,
		26,
		24,
		28,
		24,
		28,
		22,
		24,
		24,
		30,
		28,
		28,
		26,
		28,
		30,
		24,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30,
		30
	]
], oc = [
	[
		-1,
		1,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		4,
		4,
		4,
		4,
		4,
		6,
		6,
		6,
		6,
		7,
		8,
		8,
		9,
		9,
		10,
		12,
		12,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		19,
		20,
		21,
		22,
		24,
		25
	],
	[
		-1,
		1,
		1,
		1,
		2,
		2,
		4,
		4,
		4,
		5,
		5,
		5,
		8,
		9,
		9,
		10,
		10,
		11,
		13,
		14,
		16,
		17,
		17,
		18,
		20,
		21,
		23,
		25,
		26,
		28,
		29,
		31,
		33,
		35,
		37,
		38,
		40,
		43,
		45,
		47,
		49
	],
	[
		-1,
		1,
		1,
		2,
		2,
		4,
		4,
		6,
		6,
		8,
		8,
		8,
		10,
		12,
		16,
		12,
		17,
		16,
		18,
		21,
		20,
		23,
		23,
		25,
		27,
		29,
		34,
		34,
		35,
		38,
		40,
		43,
		45,
		48,
		51,
		53,
		56,
		59,
		62,
		65,
		68
	],
	[
		-1,
		1,
		1,
		2,
		4,
		4,
		4,
		5,
		6,
		8,
		8,
		11,
		11,
		16,
		16,
		18,
		16,
		19,
		21,
		25,
		25,
		25,
		34,
		30,
		32,
		35,
		37,
		40,
		42,
		45,
		48,
		51,
		54,
		57,
		60,
		63,
		66,
		70,
		74,
		77,
		81
	]
];
function sc(e) {
	let t = (16 * e + 128) * e + 64;
	if (e >= 2) {
		let n = Math.floor(e / 7) + 2;
		t -= (25 * n - 10) * n - 55, e >= 7 && (t -= 36);
	}
	return t;
}
function cc(e, t) {
	let n = rc[t];
	return Math.floor(sc(e) / 8) - ac[n][e] * oc[n][e];
}
function lc(e) {
	if (e === 1) return [];
	let t = Math.floor(e / 7) + 2, n = Math.floor((e * 8 + t * 3 + 5) / (t * 4 - 4)) * 2, r = [6];
	for (let i = e * 4 + 17 - 7; r.length < t; i -= n) r.splice(1, 0, i);
	return r;
}
function uc(e, t) {
	let n = 0;
	for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285, n ^= (t >>> r & 1) * e;
	return n;
}
function dc(e) {
	let t = Array(e).fill(0);
	t[e - 1] = 1;
	let n = 1;
	for (let r = 0; r < e; r++) {
		for (let e = 0; e < t.length; e++) t[e] = uc(t[e], n), e + 1 < t.length && (t[e] ^= t[e + 1]);
		n = uc(n, 2);
	}
	return t;
}
function fc(e, t) {
	let n = Array(t.length).fill(0);
	for (let r of e) {
		let e = r ^ n.shift();
		n.push(0), t.forEach((t, r) => {
			n[r] ^= uc(t, e);
		});
	}
	return n;
}
function pc(e, t, n) {
	let r = cc(t, n) * 8, i = [], a = (e, t) => {
		for (let n = t - 1; n >= 0; n--) i.push(e >>> n & 1);
	};
	a(4, 4), a(e.length, t <= 9 ? 8 : 16);
	for (let t of e) a(t, 8);
	a(0, Math.min(4, r - i.length)), a(0, (8 - i.length % 8) % 8);
	for (let e = 236; i.length < r; e ^= 253) a(e, 8);
	let o = [];
	for (let e = 0; e < i.length; e += 8) o.push(i.slice(e, e + 8).reduce((e, t) => e << 1 | t));
	return o;
}
function mc(e, t, n) {
	let r = rc[n], i = oc[r][t], a = ac[r][t], o = Math.floor(sc(t) / 8), s = i - o % i, c = Math.floor(o / i), l = dc(a), u = [];
	for (let t = 0, n = 0; t < i; t++) {
		let r = c - a + (t < s ? 0 : 1), i = e.slice(n, n + r);
		n += r;
		let o = fc(i, l);
		t < s && i.push(0), u.push(i.concat(o));
	}
	let d = [];
	for (let e = 0; e < u[0].length; e++) u.forEach((t, n) => {
		(e !== c - a || n >= s) && d.push(t[e]);
	});
	return d;
}
var hc = class {
	size;
	modules;
	isFunction;
	constructor(e) {
		this.size = e, this.modules = Array.from({ length: e }, () => Array(e).fill(!1)), this.isFunction = Array.from({ length: e }, () => Array(e).fill(!1));
	}
	setFunction(e, t, n) {
		this.modules[t][e] = n, this.isFunction[t][e] = !0;
	}
};
function gc(e, t) {
	let { size: n } = e;
	for (let t = 0; t < n; t++) e.setFunction(6, t, t % 2 == 0), e.setFunction(t, 6, t % 2 == 0);
	for (let [t, r] of [
		[3, 3],
		[n - 4, 3],
		[3, n - 4]
	]) for (let i = -4; i <= 4; i++) for (let a = -4; a <= 4; a++) {
		let o = t + a, s = r + i;
		if (o < 0 || o >= n || s < 0 || s >= n) continue;
		let c = Math.max(Math.abs(a), Math.abs(i));
		e.setFunction(o, s, c !== 2 && c !== 4);
	}
	let r = lc(t), i = r.length - 1;
	r.forEach((t, n) => {
		r.forEach((r, a) => {
			if (!(n === 0 && a === 0 || n === 0 && a === i || n === i && a === 0)) for (let n = -2; n <= 2; n++) for (let i = -2; i <= 2; i++) e.setFunction(t + i, r + n, Math.max(Math.abs(i), Math.abs(n)) !== 1);
		});
	}), _c(e, "M", 0), vc(e, t);
}
function _c(e, t, n) {
	let r = ic[t] << 3 | n, i = r;
	for (let e = 0; e < 10; e++) i = i << 1 ^ (i >>> 9) * 1335;
	let a = (r << 10 | i) ^ 21522, o = (e) => (a >>> e & 1) != 0, { size: s } = e;
	for (let t = 0; t <= 5; t++) e.setFunction(8, t, o(t));
	e.setFunction(8, 7, o(6)), e.setFunction(8, 8, o(7)), e.setFunction(7, 8, o(8));
	for (let t = 9; t < 15; t++) e.setFunction(14 - t, 8, o(t));
	for (let t = 0; t < 8; t++) e.setFunction(s - 1 - t, 8, o(t));
	for (let t = 8; t < 15; t++) e.setFunction(8, s - 15 + t, o(t));
	e.setFunction(8, s - 8, !0);
}
function vc(e, t) {
	if (t < 7) return;
	let n = t;
	for (let e = 0; e < 12; e++) n = n << 1 ^ (n >>> 11) * 7973;
	let r = t << 12 | n;
	for (let t = 0; t < 18; t++) {
		let n = (r >>> t & 1) != 0, i = e.size - 11 + t % 3, a = Math.floor(t / 3);
		e.setFunction(i, a, n), e.setFunction(a, i, n);
	}
}
function yc(e, t) {
	let { size: n } = e, r = 0;
	for (let i = n - 1; i >= 1; i -= 2) {
		i === 6 && (i = 5);
		let a = (i + 1 & 2) == 0;
		for (let o = 0; o < n; o++) {
			let s = a ? n - 1 - o : o;
			for (let n = 0; n < 2; n++) {
				let a = i - n;
				e.isFunction[s][a] || r >= t.length * 8 || (e.modules[s][a] = (t[r >>> 3] >>> 7 - (r & 7) & 1) != 0, r++);
			}
		}
	}
}
var bc = [
	(e, t) => (e + t) % 2 == 0,
	(e, t) => t % 2 == 0,
	(e) => e % 3 == 0,
	(e, t) => (e + t) % 3 == 0,
	(e, t) => (Math.floor(e / 3) + Math.floor(t / 2)) % 2 == 0,
	(e, t) => e * t % 2 + e * t % 3 == 0,
	(e, t) => (e * t % 2 + e * t % 3) % 2 == 0,
	(e, t) => ((e + t) % 2 + e * t % 3) % 2 == 0
];
function xc(e, t) {
	for (let n = 0; n < e.size; n++) for (let r = 0; r < e.size; r++) !e.isFunction[n][r] && bc[t](r, n) && (e.modules[n][r] = !e.modules[n][r]);
}
var Sc = [[
	!0,
	!1,
	!0,
	!0,
	!0,
	!1,
	!0,
	!1,
	!1,
	!1,
	!1
], [
	!1,
	!1,
	!1,
	!1,
	!0,
	!1,
	!0,
	!0,
	!0,
	!1,
	!0
]];
function Cc(e) {
	let t = e.length, n = (t, n, r) => r ? e[t][n] : e[n][t], r = 0;
	for (let e of [!1, !0]) for (let i = 0; i < t; i++) {
		let a = 1;
		for (let o = 1; o <= t; o++) o < t && n(o, i, e) === n(o - 1, i, e) ? a++ : (a >= 5 && (r += 3 + (a - 5)), a = 1);
		for (let a = 0; a + 11 <= t; a++) for (let t of Sc) t.every((t, r) => n(a + r, i, e) === t) && (r += 40);
	}
	for (let n = 0; n < t - 1; n++) for (let i = 0; i < t - 1; i++) {
		let t = e[n][i];
		t === e[n][i + 1] && t === e[n + 1][i] && t === e[n + 1][i + 1] && (r += 3);
	}
	let i = e.reduce((e, t) => e + t.filter(Boolean).length, 0) * 100 / (t * t);
	return r += Math.floor(Math.abs(i - 50) / 5) * 10, r;
}
function wc(e, t = "M") {
	if (!Object.hasOwn(rc, t)) throw RangeError(`Invalid QR error correction level "${t}"; expected L, M, Q or H`);
	let n = new TextEncoder().encode(e), r = 1;
	for (; r <= 40 && !(4 + (r <= 9 ? 8 : 16) + n.length * 8 <= cc(r, t) * 8); r++);
	if (r > 40) throw new nc();
	let i = mc(pc(n, r, t), r, t), a = new hc(r * 4 + 17);
	gc(a, r), yc(a, i);
	let o = 0, s = Infinity;
	for (let e = 0; e < 8; e++) {
		xc(a, e), _c(a, t, e);
		let n = Cc(a.modules);
		n < s && (s = n, o = e), xc(a, e);
	}
	return xc(a, o), _c(a, t, o), {
		size: a.size,
		version: r,
		modules: a.modules
	};
}
//#endregion
//#region src/components/ui/QrCode.tsx
function Tc({ value: e, errorCorrection: t = "M", size: n = 160, margin: r = 4, "aria-label": i = "QR code", fallback: a = null, className: o }) {
	let s = p(() => {
		if (!e) return null;
		try {
			return wc(e, t);
		} catch (e) {
			if (e instanceof nc) return "too-long";
			throw e;
		}
	}, [e, t]);
	if (!s) return null;
	if (s === "too-long") return /* @__PURE__ */ _(g, { children: a });
	let c = Math.max(0, Math.floor(r)), l = s.size + c * 2, u = "";
	return s.modules.forEach((e, t) => {
		for (let n = 0; n < s.size; n++) {
			if (!e[n]) continue;
			let r = n;
			for (; n + 1 < s.size && e[n + 1];) n++;
			u += `M${r + c} ${t + c}h${n - r + 1}v1h-${n - r + 1}z`;
		}
	}), /* @__PURE__ */ v("svg", {
		role: "img",
		"aria-label": i,
		width: n,
		height: n,
		viewBox: `0 0 ${l} ${l}`,
		shapeRendering: "crispEdges",
		className: q("block", o),
		children: [/* @__PURE__ */ _("rect", {
			width: l,
			height: l,
			fill: "var(--qr-background)"
		}), /* @__PURE__ */ _("path", {
			d: u,
			fill: "var(--qr-foreground)"
		})]
	});
}
//#endregion
//#region src/components/ui/ReorderList.tsx
function Ec({ items: e, getKey: t, renderItem: n, onReorder: r, onRemove: i, getItemLabel: a, addButton: o, disabled: s = !1 }) {
	let [c, l] = h(""), u = m(/* @__PURE__ */ new Map()), d = m(null), p = m(null);
	f(() => {
		let n = d.current;
		n && e[n.index] !== void 0 && t(e[n.index]) === n.key && (u.current.get(n.key)?.[n.direction]?.focus(), d.current = null);
		let r = p.current;
		if (!r || e.some((e) => t(e) === r.key)) return;
		let i = e[Math.min(r.index, e.length - 1)];
		i !== void 0 && u.current.get(t(i))?.remove?.focus(), p.current = null;
	}, [e, t]);
	function g(n, i) {
		let o = n + i;
		if (s || o < 0 || o >= e.length) return;
		let c = [...e];
		[c[n], c[o]] = [c[o], c[n]], d.current = {
			key: t(e[n]),
			index: o,
			direction: i === -1 ? "up" : "down"
		}, r(c), l(`${a(e[n])} moved to position ${o + 1} of ${e.length}`);
	}
	return /* @__PURE__ */ v("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ _("ol", {
				role: "list",
				className: "space-y-3",
				children: e.map((r, o) => {
					let c = t(r), d = a(r);
					return /* @__PURE__ */ v("li", {
						className: "border-border space-y-3 rounded-md border p-3",
						children: [/* @__PURE__ */ v("div", {
							className: "flex items-center justify-end gap-1.5",
							children: [
								/* @__PURE__ */ _(Q, {
									ref: (e) => {
										let t = u.current.get(c) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.up = e, t.up || t.down || t.remove ? u.current.set(c, t) : u.current.delete(c);
									},
									variant: "ghost",
									size: "sm",
									icon: C,
									"aria-label": `Move ${d} up`,
									disabled: s,
									"aria-disabled": o === 0 || s,
									className: q(o === 0 && "cursor-not-allowed opacity-40"),
									onClick: () => g(o, -1),
									children: "Up"
								}),
								/* @__PURE__ */ _(Q, {
									ref: (e) => {
										let t = u.current.get(c) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.down = e, t.up || t.down || t.remove ? u.current.set(c, t) : u.current.delete(c);
									},
									variant: "ghost",
									size: "sm",
									icon: x,
									"aria-label": `Move ${d} down`,
									disabled: s,
									"aria-disabled": o === e.length - 1 || s,
									className: q(o === e.length - 1 && "cursor-not-allowed opacity-40"),
									onClick: () => g(o, 1),
									children: "Down"
								}),
								i && /* @__PURE__ */ _(Q, {
									ref: (e) => {
										let t = u.current.get(c) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.remove = e, t.up || t.down || t.remove ? u.current.set(c, t) : u.current.delete(c);
									},
									variant: "ghost",
									size: "sm",
									icon: me,
									"aria-label": `Remove ${d}`,
									disabled: s,
									onClick: () => {
										p.current = {
											key: c,
											index: o
										}, i(r, o), l(`${d} removed`);
									},
									children: "Remove"
								})
							]
						}), n(r, o)]
					}, c);
				})
			}),
			/* @__PURE__ */ _("div", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "true",
				className: "sr-only",
				children: c
			}),
			o
		]
	});
}
//#endregion
//#region src/components/ui/SearchInput.tsx
function Dc({ value: e, onChange: t, placeholder: n = "Search...", className: r }) {
	return /* @__PURE__ */ v("div", {
		className: q("relative", r),
		children: [/* @__PURE__ */ _(ue, { className: "text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" }), /* @__PURE__ */ _("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: q("bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none")
		})]
	});
}
//#endregion
//#region src/components/ui/SettingRow.tsx
function Oc({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: q("border-border flex items-center justify-between border-b py-3", r),
		children: [/* @__PURE__ */ v("div", {
			className: "min-w-0 flex-1 pr-4",
			children: [/* @__PURE__ */ _("p", {
				className: "text-text-primary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ _("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: t
			})]
		}), /* @__PURE__ */ _("div", {
			className: "shrink-0",
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/SideSheet.tsx
function kc({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: o = "w-[360px]", resizable: s = !1, className: c, contentClassName: l }) {
	let d = u(), f = rr(), p = m(null), [h, g] = Jt(p);
	kt(p, e);
	let y = Rt(e, () => t());
	return zt(e), e ? xe(/* @__PURE__ */ _(Lt.Provider, {
		value: y,
		children: /* @__PURE__ */ _(Kt.Provider, {
			value: h,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-50",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay animate-fade-in absolute inset-0",
					onClick: t
				}), /* @__PURE__ */ v("div", {
					ref: g,
					id: s ? d : void 0,
					className: q("bg-bg-secondary border-border absolute inset-y-0 flex flex-col shadow-lg", o, a === "right" ? "animate-slide-in-right right-0 border-l" : "animate-slide-in-left left-0 border-r", c),
					style: { maxWidth: "calc(100vw - 2rem)" },
					role: "dialog",
					"aria-modal": "true",
					"aria-label": typeof n == "string" ? n : "Panel",
					children: [
						/* @__PURE__ */ v("div", {
							"data-control-size": f,
							className: "ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5",
							children: [n && /* @__PURE__ */ _("h3", {
								className: "text-text-primary truncate text-sm font-medium",
								children: n
							}), /* @__PURE__ */ _(Q, {
								type: "button",
								variant: "icon",
								size: "sm",
								onClick: t,
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ _(ve, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ _("div", {
							className: q("ui-surface-body flex-1 overflow-y-auto p-3", l),
							children: r
						}),
						i && /* @__PURE__ */ _("div", {
							"data-control-size": f,
							className: "ui-bar border-border bg-bg-primary/50 flex shrink-0 items-center gap-2 border-t px-3 py-2.5",
							children: i
						}),
						s && h && /* @__PURE__ */ _(Pc, {
							sheet: h,
							side: a
						})
					]
				})]
			})
		})
	}), document.body) : null;
}
function Ac(e, t) {
	e.style.width = t === null ? "" : `${t}px`;
}
function jc(e) {
	let t = e.ownerDocument.body, n = t.style.userSelect, r = t.style.cursor;
	return t.style.userSelect = "none", t.style.cursor = "col-resize", () => {
		t.style.userSelect = n, t.style.cursor = r;
	};
}
function Mc(e) {
	let t = e.style.width;
	Ac(e, null);
	let n = e.getBoundingClientRect().width;
	return e.style.width = t, n;
}
function Nc(e) {
	let t = e.ownerDocument.defaultView, n = parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize);
	return Math.max(0, t.innerWidth - 2 * n);
}
function Pc({ sheet: e, side: t }) {
	let n = e.ownerDocument.defaultView, [r, i] = h(() => ({
		width: e.getBoundingClientRect().width,
		min: e.getBoundingClientRect().width,
		max: Nc(e),
		desktop: n.innerWidth >= 640
	})), a = m(null), o = m(null), c = m(null);
	function u() {
		o.current = null, c.current?.(), c.current = null;
	}
	let d = s((t) => {
		let r = Nc(e), o = Math.min(Mc(e), r), s = n.innerWidth >= 640;
		a.current = s && t !== null ? Math.min(r, Math.max(o, t)) : null, a.current !== null && a.current <= o && (a.current = null), Ac(e, a.current), i({
			width: e.getBoundingClientRect().width,
			min: o,
			max: r,
			desktop: s
		});
	}, [e, n]);
	return l(() => {
		let t = () => {
			u(), d(a.current);
		}, r = new ResizeObserver(() => d(a.current));
		return r.observe(e), n.addEventListener("resize", t), () => {
			r.disconnect(), n.removeEventListener("resize", t), u(), Ac(e, null);
		};
	}, [
		d,
		e,
		n
	]), r.desktop ? /* @__PURE__ */ _("div", {
		role: "separator",
		tabIndex: 0,
		"aria-orientation": "vertical",
		"aria-label": "Resize panel",
		"aria-controls": e.id,
		"aria-valuenow": Math.round(r.width),
		"aria-valuemin": Math.round(r.min),
		"aria-valuemax": Math.round(r.max),
		className: q("hover:bg-accent/30 active:bg-accent/50 focus-visible:outline-accent absolute inset-y-0 z-10 w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0", t === "right" ? "left-0" : "right-0"),
		style: { touchAction: "none" },
		onPointerDown: (t) => {
			if (!t.isPrimary || t.button !== 0 || o.current) return;
			t.preventDefault(), t.currentTarget.focus(), t.currentTarget.setPointerCapture(t.pointerId);
			let n = Mc(e);
			o.current = {
				pointerId: t.pointerId,
				x: t.clientX,
				width: a.current ?? n
			}, c.current = jc(e);
		},
		onPointerMove: (e) => {
			let n = o.current;
			!n || n.pointerId !== e.pointerId || d(n.width + (e.clientX - n.x) * (t === "right" ? -1 : 1));
		},
		onPointerUp: (e) => {
			o.current?.pointerId === e.pointerId && (u(), e.currentTarget.releasePointerCapture(e.pointerId));
		},
		onPointerCancel: (e) => {
			o.current?.pointerId === e.pointerId && u();
		},
		onLostPointerCapture: u,
		onDoubleClick: () => d(null),
		onKeyDown: (n) => {
			let r = Uo(n.key, a.current ?? Mc(e), 16, t);
			r !== void 0 && (n.preventDefault(), d(r));
		}
	}) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function Fc({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ _("div", {
		className: q("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function Ic({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: q("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var Lc = Object.assign(Fc, { Main: Ic }), Rc = {
	active: "success",
	inactive: "neutral",
	pending: "warning",
	error: "danger"
};
function zc({ status: e, label: t, className: n }) {
	let r = In(Rc[e]);
	return /* @__PURE__ */ v("span", {
		className: q("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ _("span", { className: q("h-2 w-2 rounded-full", r.dot, e === "pending" && "animate-pulse-subtle") }), t && /* @__PURE__ */ _("span", {
			className: q("text-xs", r.text),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function Bc({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ _("div", {
		className: q("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ v("div", {
			className: q("flex items-center", r < e.length - 1 && "flex-1"),
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ _("div", {
						className: q("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ _(D, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ _("span", {
						className: q("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ _("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ _("div", { className: q("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function Vc({ tabs: e, defaultTab: t, value: n, onChange: r, className: i }) {
	let [a, o] = h(t || e[0]?.key), s = n ?? a, c = e.some((e) => e.key === s) ? s : e[0]?.key, l = e.find((e) => e.key === c);
	function d(e) {
		n === void 0 && o(e), r?.(e);
	}
	let f = u(), p = m(null);
	function g(t) {
		let n = e.map((e) => e.key), r = n.indexOf(c), i = null;
		t.key === "ArrowRight" ? (t.preventDefault(), i = (r + 1) % e.length) : t.key === "ArrowLeft" && (t.preventDefault(), i = (r - 1 + e.length) % e.length), i !== null && (d(n[i]), (p.current?.querySelectorAll("[role=\"tab\"]"))?.[i]?.focus());
	}
	return /* @__PURE__ */ v("div", {
		className: i,
		children: [/* @__PURE__ */ _("div", {
			className: "border-border flex border-b",
			role: "tablist",
			ref: p,
			children: e.map((e) => /* @__PURE__ */ v("button", {
				type: "button",
				id: `${f}-tab-${e.key}`,
				role: "tab",
				tabIndex: e.key === c ? 0 : -1,
				"aria-selected": e.key === c,
				"aria-controls": `${f}-panel-${e.key}`,
				onClick: () => d(e.key),
				onKeyDown: g,
				className: q("font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]", "hover:text-text-primary", e.key === c ? "text-accent" : "text-text-tertiary"),
				children: [e.label, e.key === c && /* @__PURE__ */ _("div", { className: "bg-accent absolute right-0 bottom-0 left-0 h-0.5 rounded-md" })]
			}, e.key))
		}), /* @__PURE__ */ _("div", {
			id: `${f}-panel-${c}`,
			role: "tabpanel",
			"aria-labelledby": `${f}-tab-${c}`,
			className: "pt-4",
			children: l?.content
		})]
	});
}
//#endregion
//#region src/components/ui/Textarea.tsx
var Hc = a(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, hint: s, controlSize: c, required: l, "aria-describedby": u, "aria-invalid": d, ...f }, p) => {
	let m = oi({
		id: o,
		error: t,
		hint: s,
		describedBy: u,
		invalid: d,
		required: l
	}), { inputId: h, errorId: g, hintId: y } = m, b = rr(c), x = typeof i == "string" ? i.length : 0;
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		children: [
			s && /* @__PURE__ */ _("p", {
				id: y,
				className: "text-text-secondary text-xs",
				children: s
			}),
			e && /* @__PURE__ */ _("label", {
				htmlFor: h,
				className: "ui-field-label font-label text-xs font-medium",
				children: e
			}),
			/* @__PURE__ */ _("textarea", {
				ref: p,
				"data-control-size": b,
				required: m.required,
				"aria-invalid": m.invalid,
				"aria-describedby": m.describedBy,
				id: h,
				value: i,
				maxLength: r,
				className: q("ui-sized-control bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
				...f
			}),
			/* @__PURE__ */ v("div", {
				className: "flex justify-between",
				children: [t && /* @__PURE__ */ _("p", {
					id: g,
					className: "text-2xs text-red",
					children: t
				}), n && r && /* @__PURE__ */ v("p", {
					className: "text-2xs text-text-tertiary ml-auto",
					children: [
						x,
						"/",
						r
					]
				})]
			})
		]
	});
});
Hc.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var Uc = a(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, hint: o, controlSize: s, required: c, "aria-describedby": l, "aria-invalid": u, ...d }, f) => {
	let p = oi({
		id: i,
		error: t,
		hint: o,
		describedBy: l,
		invalid: u,
		required: c
	}), { inputId: m, errorId: h, hintId: g } = p, y = rr(s);
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		children: [
			o && /* @__PURE__ */ _("p", {
				id: g,
				className: "text-text-secondary text-xs",
				children: o
			}),
			(e || t) && /* @__PURE__ */ v("div", {
				className: "flex items-center justify-between",
				children: [e && /* @__PURE__ */ _("label", {
					htmlFor: m,
					className: "ui-field-label font-label text-xs font-medium",
					children: e
				}), t && /* @__PURE__ */ _("p", {
					id: h,
					className: "text-2xs text-red",
					children: t
				})]
			}),
			/* @__PURE__ */ v("div", {
				className: "relative",
				children: [n && /* @__PURE__ */ _("span", {
					className: "text-text-tertiary absolute top-1/2 left-2.5 -translate-y-1/2",
					children: n
				}), /* @__PURE__ */ _("input", {
					ref: f,
					"data-control-size": y,
					"data-has-icon": n ? "true" : void 0,
					required: p.required,
					"aria-invalid": p.invalid,
					id: m,
					readOnly: a,
					"aria-describedby": p.describedBy,
					className: q("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
					...d
				})]
			})
		]
	});
});
Uc.displayName = "TextInput";
//#endregion
//#region src/components/ui/TimeInput.tsx
var Wc = a(({ value: e, onChange: t, ...n }, r) => /* @__PURE__ */ _(Uc, {
	...n,
	ref: r,
	type: "time",
	value: e,
	onChange: (e) => t(e.currentTarget.value)
}));
Wc.displayName = "TimeInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function Gc({ items: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: q("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ v("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ _("div", { className: q(Pn(t.dot) ? In(t.dot).dot : t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ _("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ v("div", {
				className: q("pb-4", n === e.length - 1 && "pb-0"),
				children: [/* @__PURE__ */ _("p", {
					className: "text-text-primary text-xs",
					children: t.text
				}), /* @__PURE__ */ _("p", {
					className: "text-2xs text-text-tertiary mt-0.5",
					children: t.time
				})]
			})]
		}, t.id))
	});
}
//#endregion
//#region src/components/ui/TranscriptLine.tsx
function Kc({ speaker: e, role: t = "patient", time: n, onSeek: r, highlighted: i = !1, children: a, className: o, ...s }) {
	let c = n != null && Number.isFinite(n) && n >= 0 ? n : null, l = c == null ? null : ai(c);
	return /* @__PURE__ */ v("div", {
		...s,
		"data-role": t,
		"data-highlighted": i || void 0,
		className: q("flex gap-3 rounded-md p-2 text-xs", i && "bg-accent-subtle", t === "system" ? "text-text-tertiary italic" : "text-text-secondary", t === "agent" && "border-l-2 border-accent", t === "staff" && "border-l-2 border-border-strong", o),
		children: [l != null && /* @__PURE__ */ _("div", {
			className: "font-mono text-2xs shrink-0 pt-1",
			children: r ? /* @__PURE__ */ _("button", {
				type: "button",
				onClick: () => r(c),
				"aria-label": `Seek to ${l}`,
				className: "cursor-pointer rounded-md text-accent hover:underline focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
				children: l
			}) : /* @__PURE__ */ _("span", { children: l })
		}), /* @__PURE__ */ v("div", {
			className: "min-w-0 flex-1",
			style: { overflowWrap: "anywhere" },
			children: [
				/* @__PURE__ */ _("span", {
					className: "text-text-primary font-medium",
					children: e
				}),
				": ",
				/* @__PURE__ */ _("span", {
					className: "whitespace-pre-wrap",
					children: a
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/Tooltip.tsx
var qc = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function Jc(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		return typeof n == "function" ? n : () => e(null);
	}
	return e && (e.current = t), () => {
		e && (e.current = null);
	};
}
function Yc(e, t) {
	let n = { ...e };
	for (let [r, i] of Object.entries(t)) {
		if (i === void 0) continue;
		let t = e[r];
		if (/^on[A-Z]/.test(r) && typeof t == "function" && typeof i == "function") n[r] = (...e) => {
			t(...e), i(...e);
		};
		else if (r === "className") n[r] = q(t, i);
		else if (r === "style") n[r] = {
			...t,
			...i
		};
		else if (r === "id" && typeof t == "string" && t) continue;
		else r === "aria-describedby" ? n[r] = [t, i].filter(Boolean).join(" ") : n[r] = i;
	}
	return n;
}
function Xc({ element: e, merged: t, ...r }) {
	return n(e, {
		...t,
		...r
	});
}
var Zc = (e, t) => t instanceof Node && e.contains(t);
function Qc({ content: e, placement: n = "top", children: r, ref: i, ...a }) {
	let [c, d] = h(!1), f = u();
	l(() => {
		if (!c) return;
		let e = (e) => {
			e.key === "Escape" && (e.preventDefault(), d(!1));
		};
		return document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0);
	}, [c]);
	let p = o(r) && r.type !== t ? r : null, m = p?.props.ref, g = s((e) => {
		if (!e) return;
		let t = [Jc(m, e), Jc(i, e)];
		return () => t.forEach((e) => e());
	}, [m, i]), y = {
		onMouseOver: (e) => {
			let { currentTarget: t, target: n, relatedTarget: r } = e;
			Zc(t, n) && !Zc(t, r) && d(!0);
		},
		onMouseOut: (e) => {
			Zc(e.currentTarget, e.relatedTarget) || d(!1);
		},
		onFocus: (e) => {
			d(Zc(e.currentTarget, e.target));
		},
		onBlur: () => d(!1)
	}, b = p ? /* @__PURE__ */ _(Xc, {
		element: p,
		merged: Yc(p.props, {
			...a,
			"aria-describedby": [a["aria-describedby"], f].filter(Boolean).join(" ")
		}),
		ref: g
	}) : r;
	return /* @__PURE__ */ v("div", {
		...p ? y : Yc(y, a),
		ref: p ? void 0 : g,
		className: q("relative inline-flex", !p && a.className),
		children: [b, c && /* @__PURE__ */ _("div", {
			id: f,
			className: q("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", qc[n]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function $c({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a, moreFilters: o, moreFiltersActiveCount: s = 0, moreFiltersOpen: c, defaultMoreFiltersOpen: l, onMoreFiltersOpenChange: d }) {
	let f = u(), p = m(null), g = m(null), [y, b] = h(!1), x = s > 0, [S, C] = h(l ?? x), [w, T] = h(x);
	w !== x && (T(x), c === void 0 && x && C(!0));
	let E = c ?? S, D = (e) => {
		c === void 0 && C(e), d?.(e);
	}, O = Rt(!!o && E && y, (e) => {
		e.defaultPrevented || !g.current?.contains(g.current.ownerDocument.activeElement) || (D(!1), p.current?.focus());
	}, g), k = /* @__PURE__ */ v("div", {
		className: q("flex items-center justify-between gap-3", !o && r),
		children: [/* @__PURE__ */ _("div", {
			className: q("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), (t || o) && /* @__PURE__ */ v("div", {
			className: q("flex items-center gap-1.5", a),
			children: [t, o && /* @__PURE__ */ v("span", {
				className: "relative inline-flex",
				children: [/* @__PURE__ */ _(Q, {
					ref: p,
					size: "sm",
					icon: fe,
					hideLabel: !0,
					"aria-label": s > 0 ? `More filters (${s} active)` : "More filters",
					"aria-expanded": E,
					"aria-controls": f,
					onClick: () => D(!E),
					children: "More filters"
				}), s > 0 && /* @__PURE__ */ _(bi, {
					size: "xs",
					color: "accent",
					"aria-hidden": "true",
					className: "pointer-events-none absolute top-0 right-0 -translate-y-1/2",
					children: s
				})]
			})]
		})]
	});
	return o ? /* @__PURE__ */ v("div", {
		className: q("space-y-3", r),
		children: [k, /* @__PURE__ */ _(Lt.Provider, {
			value: O,
			children: /* @__PURE__ */ _("div", {
				ref: g,
				id: f,
				hidden: !E,
				className: q("flex-wrap items-center gap-3", E ? "flex" : "hidden"),
				onFocus: (e) => b(e.currentTarget.contains(e.target)),
				onBlur: (e) => {
					e.currentTarget.contains(e.relatedTarget) || b(!1);
				},
				children: o
			})
		})]
	}) : k;
}
//#endregion
//#region src/components/ui/UploadDropzone.tsx
var el = a(function({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, multiple: r, disabled: i, onChange: a, onFilesChange: o, className: s, id: c, "aria-describedby": l, ...f }, p) {
	let h = m(null);
	d(p, () => h.current, []);
	let g = u(), y = `${c ?? g}-description`;
	return /* @__PURE__ */ v("label", {
		className: q("ui-upload-dropzone border-border hover:border-border-strong relative block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", i ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
		onDragOver: (e) => {
			e.preventDefault(), e.dataTransfer.dropEffect = i || h.current?.matches(":disabled") ? "none" : "copy";
		},
		onDrop: (e) => {
			e.preventDefault();
			let t = h.current;
			if (i || !t || t.matches(":disabled") || !e.dataTransfer.files.length) return;
			let n = new DataTransfer(), a = Array.from(e.dataTransfer.files);
			for (let e of r ? a : a.slice(0, 1)) n.items.add(e);
			t.files = n.files, o?.(t.files, e);
		},
		children: [
			/* @__PURE__ */ _("input", {
				...f,
				id: c,
				ref: h,
				type: "file",
				multiple: r,
				disabled: i,
				className: "sr-only",
				"aria-describedby": [l, t && y].filter(Boolean).join(" ") || void 0,
				onChange: (e) => {
					a?.(e.target.files, e), e.target.files && o?.(e.target.files, e);
				}
			}),
			/* @__PURE__ */ _("div", {
				"aria-hidden": "true",
				className: "text-text-tertiary mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-bg-tertiary",
				children: n ?? /* @__PURE__ */ _(he, { className: "h-4.5 w-4.5" })
			}),
			/* @__PURE__ */ _("span", {
				className: "text-text-secondary mb-1 block text-xs",
				children: e
			}),
			t && /* @__PURE__ */ _("span", {
				id: y,
				className: "text-2xs text-text-tertiary block",
				children: t
			})
		]
	});
}), tl = r({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function nl() {
	return c(tl);
}
//#endregion
//#region src/lib/formatDate.ts
function rl(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function il(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function al(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${fo[e.getMonth()]} ${e.getDate()}`;
	return e.getFullYear() === t.getFullYear() ? o : `${o}, ${e.getFullYear()}`;
}
//#endregion
//#region src/providers/SettingsProvider.tsx
var ol = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, sl = {
	purple: {
		base: "#7C5CFC",
		hover: "#6B4AEB",
		active: "#5A39DA",
		muted: "rgba(124,92,252,0.15)",
		subtle: "rgba(124,92,252,0.08)"
	},
	blue: {
		base: "#3B82F6",
		hover: "#2563EB",
		active: "#1D4ED8",
		muted: "rgba(59,130,246,0.15)",
		subtle: "rgba(59,130,246,0.08)"
	},
	green: {
		base: "#22C55E",
		hover: "#16A34A",
		active: "#15803D",
		muted: "rgba(34,197,94,0.15)",
		subtle: "rgba(34,197,94,0.08)"
	},
	teal: {
		base: "#14B8A6",
		hover: "#0D9488",
		active: "#0F766E",
		muted: "rgba(20,184,166,0.15)",
		subtle: "rgba(20,184,166,0.08)"
	},
	orange: {
		base: "#F97316",
		hover: "#EA580C",
		active: "#C2410C",
		muted: "rgba(249,115,22,0.15)",
		subtle: "rgba(249,115,22,0.08)"
	},
	red: {
		base: "#EF4444",
		hover: "#DC2626",
		active: "#B91C1C",
		muted: "rgba(239,68,68,0.15)",
		subtle: "rgba(239,68,68,0.08)"
	},
	pink: {
		base: "#EC4899",
		hover: "#DB2777",
		active: "#BE185D",
		muted: "rgba(236,72,153,0.15)",
		subtle: "rgba(236,72,153,0.08)"
	},
	indigo: {
		base: "#6366F1",
		hover: "#4F46E5",
		active: "#4338CA",
		muted: "rgba(99,102,241,0.15)",
		subtle: "rgba(99,102,241,0.08)"
	}
}, cl = "leonardaustin-ui-settings", ll = new Set(Object.keys(sl)), ul = new Set(Object.keys(an)), dl = new Set(Object.keys(ol)), fl = new Set([
	"light",
	"dark",
	"system"
]);
function pl(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : J(e, t, n);
}
function ml(e) {
	let t = {};
	if (ll.has(e.accentColor) && (t.accentColor = e.accentColor), fl.has(e.colorMode) && (t.colorMode = e.colorMode), ul.has(e.preferredDarkTheme) && !$t(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), ul.has(e.preferredLightTheme) && $t(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = pl(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!ul.has(t) || !r || typeof r != "object") continue;
			let e = r, i = an[t];
			n[t] = {
				uiFont: dl.has(e.uiFont) ? e.uiFont : i.uiFont,
				headingFont: dl.has(e.headingFont) ? e.headingFont : i.headingFont,
				proseFont: dl.has(e.proseFont) ? e.proseFont : i.proseFont,
				controlFont: dl.has(e.controlFont) ? e.controlFont : i.controlFont,
				labelFont: dl.has(e.labelFont) ? e.labelFont : i.labelFont,
				navigationFont: dl.has(e.navigationFont) ? e.navigationFont : i.navigationFont,
				dataFont: dl.has(e.dataFont) ? e.dataFont : i.dataFont,
				codeFont: dl.has(e.codeFont) ? e.codeFont : i.codeFont,
				fontSize: pl(e.fontSize, 11, 18, i.fontSize),
				borderRadius: pl(e.borderRadius, 0, 16, i.borderRadius),
				borderWidth: pl(e.borderWidth, 1, 3, i.borderWidth),
				tracking: pl(e.tracking, 0, .3, i.tracking),
				lineHeight: pl(e.lineHeight, 1.2, 2, i.lineHeight),
				density: pl(e.density, .18, .32, i.density)
			};
		}
		t.themeOverrides = n;
	}
	return t;
}
var hl = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function gl(e, t) {
	let n = {
		...hl,
		...ml(t ?? {})
	};
	if (typeof localStorage > "u") return n;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...n,
			...ml(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return n;
}
function _l(e, t) {
	let n = an[e] ?? an.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function vl(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function yl({ children: e, storageKey: t = cl, initialSettings: n, forcedTheme: r }) {
	let [i, a] = h(() => gl(t, n)), [o, c] = h(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
	l(() => {
		if (typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = (e) => c(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let u = p(() => r || (i.colorMode === "light" ? i.preferredLightTheme : i.colorMode === "dark" || o ? i.preferredDarkTheme : i.preferredLightTheme), [
		r,
		i.colorMode,
		i.preferredDarkTheme,
		i.preferredLightTheme,
		o
	]), [d, f] = h(() => _l(u, i.themeOverrides));
	l(() => {
		f(_l(u, i.themeOverrides));
	}, [u]);
	let m = s((e) => {
		a((n) => {
			let r = {
				...n,
				...e
			};
			try {
				localStorage.setItem(t, JSON.stringify(r));
			} catch (e) {
				console.warn("[SettingsProvider] Failed to persist settings:", e);
			}
			return r;
		});
	}, [t]);
	l(() => {
		let e = document.documentElement, t = sl[i.accentColor];
		e.style.setProperty("--accent", t.base), e.style.setProperty("--accent-hover", t.hover), e.style.setProperty("--accent-active", t.active), e.style.setProperty("--accent-muted", t.muted), e.style.setProperty("--accent-subtle", t.subtle);
	}, [i.accentColor]), l(() => {
		document.documentElement.classList.toggle("reduced-motion", i.reducedMotion);
	}, [i.reducedMotion]), l(() => {
		let e = document.documentElement, t = d.borderRadius;
		e.style.fontSize = `${d.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", ol[d.uiFont]), e.style.setProperty("--font-heading", ol[d.headingFont]), e.style.setProperty("--font-prose", ol[d.proseFont]), e.style.setProperty("--font-control", ol[d.controlFont]), e.style.setProperty("--font-label", ol[d.labelFont]), e.style.setProperty("--font-navigation", ol[d.navigationFont]), e.style.setProperty("--font-data", ol[d.dataFont]), e.style.setProperty("--font-code", ol[d.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${d.borderWidth}px`), e.style.setProperty("--ui-tracking", `${d.tracking}em`), e.style.setProperty("--ui-line-height", String(d.lineHeight)), e.style.setProperty("--ui-density", `${d.density}rem`);
	}, [d]);
	let g = p(() => _l(u, i.themeOverrides), [u, i.themeOverrides]), v = u in i.themeOverrides, y = !vl(d, g), b = s(() => {
		m({ themeOverrides: {
			...i.themeOverrides,
			[u]: { ...d }
		} });
	}, [
		m,
		i.themeOverrides,
		u,
		d
	]), x = s(() => {
		let e = { ...i.themeOverrides };
		delete e[u], m({ themeOverrides: e }), f(an[u] ?? an.dark);
	}, [
		m,
		i.themeOverrides,
		u
	]), S = p(() => ({
		fontSize: d.fontSize,
		setFontSize: (e) => f((t) => ({
			...t,
			fontSize: e
		})),
		accentColor: i.accentColor,
		setAccentColor: (e) => m({ accentColor: e }),
		sidebarCollapsed: i.sidebarCollapsed,
		setSidebarCollapsed: (e) => m({ sidebarCollapsed: e }),
		sidebarWidth: i.sidebarWidth,
		setSidebarWidth: (e) => m({ sidebarWidth: e }),
		reducedMotion: i.reducedMotion,
		setReducedMotion: (e) => m({ reducedMotion: e }),
		colorMode: i.colorMode,
		setColorMode: (e) => m({ colorMode: e }),
		preferredDarkTheme: i.preferredDarkTheme,
		setPreferredDarkTheme: (e) => m({ preferredDarkTheme: e }),
		preferredLightTheme: i.preferredLightTheme,
		setPreferredLightTheme: (e) => m({ preferredLightTheme: e }),
		resolvedTheme: u,
		uiFont: d.uiFont,
		headingFont: d.headingFont,
		proseFont: d.proseFont,
		controlFont: d.controlFont,
		labelFont: d.labelFont,
		navigationFont: d.navigationFont,
		dataFont: d.dataFont,
		codeFont: d.codeFont,
		borderRadius: d.borderRadius,
		borderWidth: d.borderWidth,
		tracking: d.tracking,
		lineHeight: d.lineHeight,
		density: d.density,
		setUiFont: (e) => f((t) => ({
			...t,
			uiFont: e
		})),
		setHeadingFont: (e) => f((t) => ({
			...t,
			headingFont: e
		})),
		setProseFont: (e) => f((t) => ({
			...t,
			proseFont: e
		})),
		setControlFont: (e) => f((t) => ({
			...t,
			controlFont: e
		})),
		setLabelFont: (e) => f((t) => ({
			...t,
			labelFont: e
		})),
		setNavigationFont: (e) => f((t) => ({
			...t,
			navigationFont: e
		})),
		setDataFont: (e) => f((t) => ({
			...t,
			dataFont: e
		})),
		setCodeFont: (e) => f((t) => ({
			...t,
			codeFont: e
		})),
		setBorderRadius: (e) => f((t) => ({
			...t,
			borderRadius: e
		})),
		setBorderWidth: (e) => f((t) => ({
			...t,
			borderWidth: e
		})),
		setTracking: (e) => f((t) => ({
			...t,
			tracking: e
		})),
		setLineHeight: (e) => f((t) => ({
			...t,
			lineHeight: e
		})),
		setDensity: (e) => f((t) => ({
			...t,
			density: e
		})),
		saveThemeCustomization: b,
		resetThemeCustomization: x,
		hasThemeOverrides: v,
		isCustomized: y
	}), [
		i,
		m,
		d,
		u,
		b,
		x,
		v,
		y
	]);
	return /* @__PURE__ */ _(En.Provider, {
		value: S,
		children: e
	});
}
//#endregion
//#region src/providers/ThemeProvider.tsx
var bl = {
	dark: "",
	light: "theme-light",
	lightInverted: "theme-light-inverted",
	monokai: "theme-monokai",
	solarized: "theme-solarized",
	cyberBrutalDark: "theme-cyber-brutal-dark",
	cyberBrutalLight: "theme-cyber-brutal-light",
	hashiTheme: "theme-hashi"
};
function xl({ children: e }) {
	let { resolvedTheme: t } = c(En);
	return l(() => {
		let e = document.documentElement;
		Object.values(bl).forEach((t) => {
			t && e.classList.remove(t);
		});
		let n = bl[t];
		n && e.classList.add(n);
	}, [t]), /* @__PURE__ */ _(tl.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
//#region src/components/ui/FormField.tsx
function Sl({ id: e, label: t, hint: n, error: r, required: i, optionalLabel: a, labelPlacement: o = "above", children: c, className: l, ...d }) {
	let f = u(), p = e ?? f, m = n ? `${p}-hint` : void 0, g = r ? `${p}-error` : void 0, y = `${p}-label`, [b, x] = h(0), S = s(() => (x((e) => e + 1), () => x((e) => e - 1)), []), C = o === "placeholder" && typeof t == "string" && t ? t : void 0, w = {
		id: p,
		"aria-describedby": br(m, g),
		"aria-invalid": !!r || void 0,
		required: i
	};
	return /* @__PURE__ */ _(yr.Provider, {
		value: {
			id: p,
			describedBy: br(m, g),
			invalid: !!r,
			required: i,
			placeholderLabel: C,
			labelId: y,
			claimLabel: S
		},
		children: /* @__PURE__ */ v("div", {
			...d,
			className: q("flex flex-col gap-1.5", l),
			children: [
				/* @__PURE__ */ v("label", {
					id: b > 0 ? y : void 0,
					htmlFor: p,
					className: q("ui-field-label font-label text-xs font-medium", C && "sr-only"),
					children: [
						t,
						i && /* @__PURE__ */ _("span", {
							"aria-hidden": "true",
							children: " *"
						}),
						!i && a && /* @__PURE__ */ v("span", { children: [" ", a] })
					]
				}),
				n && /* @__PURE__ */ _("p", {
					id: m,
					className: "text-text-secondary text-xs",
					children: n
				}),
				r && /* @__PURE__ */ _("p", {
					id: g,
					className: "text-red text-xs",
					children: r
				}),
				typeof c == "function" ? c(w) : c
			]
		})
	});
}
function Cl({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: q("text-text-secondary text-xs", e)
	});
}
function wl({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: q("text-red text-xs", e)
	});
}
//#endregion
//#region src/components/ui/Fieldset.tsx
function Tl({ id: e, legend: t, hint: n, error: r, children: i, className: a, "aria-describedby": o, ...s }) {
	let c = u(), l = e ?? c, d = n ? `${l}-hint` : void 0, f = r ? `${l}-error` : void 0, p = br(o, d, f);
	return /* @__PURE__ */ v("fieldset", {
		...s,
		id: l,
		"aria-describedby": p,
		className: q("min-w-0 space-y-2", a),
		children: [
			/* @__PURE__ */ _("legend", {
				className: "text-text-primary font-label text-xs font-medium",
				children: t
			}),
			n && /* @__PURE__ */ _("p", {
				id: d,
				className: "text-text-secondary text-xs",
				children: n
			}),
			r && /* @__PURE__ */ _("p", {
				id: f,
				className: "text-red text-xs",
				children: r
			}),
			/* @__PURE__ */ _(yr.Provider, {
				value: {
					describedBy: p,
					invalid: !!r
				},
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/ui/Radio.tsx
var El = a(({ label: e, description: t, controlSize: n, className: r, id: i, "aria-describedby": a, "aria-invalid": o, ...s }, l) => {
	let d = u(), f = rr(n), p = c(yr), m = i ?? p?.id ?? d, h = t ? `${m}-description` : void 0;
	return /* @__PURE__ */ v("label", {
		className: q("ui-choice flex items-start gap-2.5", r),
		"data-control-size": f,
		children: [/* @__PURE__ */ _("input", {
			...s,
			ref: l,
			id: m,
			type: "radio",
			"aria-invalid": o ?? (p?.invalid || void 0),
			"aria-describedby": br(a, p?.describedBy, h),
			className: "ui-native-choice"
		}), /* @__PURE__ */ v("span", {
			className: "text-text-primary text-xs",
			children: [/* @__PURE__ */ _("span", { children: e }), t && /* @__PURE__ */ _("span", {
				id: h,
				className: "text-text-secondary block text-xs",
				children: t
			})]
		})]
	});
});
El.displayName = "Radio";
function Dl({ name: e, id: t, options: n, value: r, onChange: i, required: a, disabled: o, controlSize: s, ...c }) {
	let l = u(), d = t ?? l;
	return /* @__PURE__ */ _(Tl, {
		...c,
		id: d,
		disabled: o,
		children: n.map((t, n) => /* @__PURE__ */ _(El, {
			id: `${d}-${n}`,
			name: e ?? d,
			value: t.value,
			checked: r === t.value,
			onChange: () => i(t.value),
			label: t.label,
			description: t.description,
			disabled: o || t.disabled,
			required: a,
			controlSize: s
		}, t.value))
	});
}
var Ol = Object.assign(El, { Group: Dl }), kl = {
	pending: "Pending",
	uploading: "Uploading",
	processing: "Processing",
	ready: "Ready",
	error: "Upload failed"
};
function Al(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function jl({ name: e, size: t, status: n = "ready", statusLabel: r, error: i, onRetry: a, onRemove: o, onDownload: s, downloadHref: c, actionsDisabled: l, className: u, ...d }) {
	return /* @__PURE__ */ v("li", {
		...d,
		className: q("ui-attachment-item border-border flex items-center justify-between gap-3 rounded-md border p-3", u),
		children: [/* @__PURE__ */ v("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ _("p", {
					className: "text-text-primary text-xs",
					children: e
				}),
				t !== void 0 && /* @__PURE__ */ _("p", {
					className: "text-text-tertiary text-2xs",
					children: Al(t)
				}),
				/* @__PURE__ */ v("div", {
					role: "status",
					"aria-atomic": "true",
					className: q("text-2xs", n === "error" ? "text-red" : "text-text-secondary"),
					children: [
						e,
						": ",
						i ?? r ?? kl[n]
					]
				})
			]
		}), /* @__PURE__ */ v("div", {
			className: "flex items-center gap-1.5",
			children: [
				a && /* @__PURE__ */ _(Q, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: a,
					"aria-label": `Retry ${e}`,
					children: "Retry"
				}),
				c && !l && /* @__PURE__ */ _("a", {
					href: c,
					download: !0,
					"aria-label": `Download ${e}`,
					className: "text-accent text-xs",
					children: "Download"
				}),
				s && /* @__PURE__ */ _(Q, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: s,
					"aria-label": `Download ${e}`,
					children: "Download"
				}),
				o && /* @__PURE__ */ _(Q, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: o,
					"aria-label": `Remove ${e}`,
					children: "Remove"
				})
			]
		})]
	});
}
function Ml({ children: e, className: t, "aria-label": n = "Attachments", ...r }) {
	return /* @__PURE__ */ _("ul", {
		...r,
		"aria-label": n,
		className: q("space-y-2", t),
		children: e
	});
}
//#endregion
//#region src/lib/dateParts.ts
function Nl(e, { required: t = !1, minYear: n = 1900, maxYear: r = 2100 } = {}) {
	let i = [
		e.day,
		e.month,
		e.year
	];
	if (i.every((e) => e === "") && !t) return;
	if (i.some((e) => e === "")) return "Enter a day, month and year.";
	if (i.some((e) => !/^\d+$/.test(e))) return "Use numbers for the day, month and year.";
	let a = Number(e.day), o = Number(e.month), s = Number(e.year);
	if (s < n || s > r) return `Enter a year between ${n} and ${r}.`;
	if (o < 1 || o > 12) return "Enter a month between 1 and 12.";
	let c = [
		31,
		s % 4 == 0 && (s % 100 != 0 || s % 400 == 0) ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	][o - 1];
	if (a < 1 || a > c) return `Enter a valid day for this month (1–${c}).`;
}
//#endregion
//#region src/components/ui/DatePartsInput.tsx
function Pl({ value: e, onChange: t, label: n, hint: r, error: i, id: a, name: o, disabled: s, required: c, className: d, inputProps: f, minYear: p = 1900, maxYear: g = 2100 }) {
	let y = u(), b = m({}), [x, S] = h(!1);
	if (!Number.isInteger(p) || !Number.isInteger(g) || p < 1 || g > 9999 || p > g) throw RangeError("DatePartsInput requires year bounds between 1 and 9999, with minYear <= maxYear");
	let C = Nl(e, {
		required: c,
		minYear: p,
		maxYear: g
	}), w = e.day !== "" && e.month !== "" && e.year.length >= 4, T = i || (x || w ? C : void 0);
	l(() => {
		Object.values(b.current).forEach((e) => e?.setCustomValidity(C ?? ""));
	}, [C]);
	let E = [
		31,
		Number(e.year) % 4 == 0 && (Number(e.year) % 100 != 0 || Number(e.year) % 400 == 0) ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	][Number(e.month) - 1] ?? 31, D = {
		day: Array.from({ length: E }, (e, t) => String(t + 1)),
		month: Array.from({ length: 12 }, (e, t) => String(t + 1)),
		year: Array.from({ length: g - p + 1 }, (e, t) => String(g - t))
	}, O = a ?? y, A = [r && `${O}-hint`, T && `${O}-error`].filter(Boolean).join(" ") || void 0;
	return /* @__PURE__ */ v("fieldset", {
		id: O,
		disabled: s,
		className: q("space-y-2", d),
		"aria-describedby": A,
		children: [
			/* @__PURE__ */ v("legend", {
				className: "ui-field-label text-xs font-medium",
				children: [n, c && /* @__PURE__ */ _("span", { children: " (required)" })]
			}),
			r && /* @__PURE__ */ _("p", {
				id: `${O}-hint`,
				className: "text-text-tertiary text-xs",
				children: r
			}),
			/* @__PURE__ */ _("div", {
				className: "ui-date-parts",
				children: [
					"day",
					"month",
					"year"
				].map((n) => /* @__PURE__ */ v("div", {
					className: "ui-date-part",
					children: [/* @__PURE__ */ _(Uc, {
						inputMode: "numeric",
						"data-1p-ignore": "true",
						...f?.[n],
						ref: (e) => {
							b.current[n] = e;
							let t = f?.[n]?.ref;
							if (typeof t == "function") return t(e);
							t && (t.current = e);
						},
						onBlur: (e) => {
							S(!0), f?.[n]?.onBlur?.(e);
						},
						onInvalid: (e) => {
							S(!0), f?.[n]?.onInvalid?.(e);
						},
						type: "text",
						id: `${O}-${n}`,
						label: n[0].toUpperCase() + n.slice(1),
						name: o ? `${o}.${n}` : void 0,
						value: e[n],
						required: c,
						"aria-invalid": T ? !0 : f?.[n]?.["aria-invalid"],
						"aria-describedby": [A, f?.[n]?.["aria-describedby"]].filter(Boolean).join(" ") || void 0,
						onChange: (r) => {
							t({
								...e,
								[n]: r.target.value
							}), f?.[n]?.onChange?.(r);
						}
					}), /* @__PURE__ */ v("div", {
						className: "ui-date-part-selector",
						children: [/* @__PURE__ */ _(k, {
							"aria-hidden": "true",
							className: "h-3.5 w-3.5"
						}), /* @__PURE__ */ v("select", {
							"aria-label": `Choose ${n}`,
							disabled: s || f?.[n]?.disabled || f?.[n]?.readOnly,
							value: D[n].includes(String(Number(e[n]))) ? String(Number(e[n])) : "",
							onChange: (r) => {
								t({
									...e,
									[n]: r.target.value
								});
							},
							children: [/* @__PURE__ */ v("option", {
								value: "",
								disabled: !0,
								children: ["Choose ", n]
							}), D[n].map((e) => /* @__PURE__ */ _("option", {
								value: e,
								children: e
							}, e))]
						})]
					})]
				}, n))
			}),
			T && /* @__PURE__ */ _("p", {
				id: `${O}-error`,
				className: "text-red text-xs",
				children: T
			})
		]
	});
}
//#endregion
//#region src/components/ui/Skeleton.tsx
function Fl({ className: e, width: t, height: n, style: r, ...i }) {
	return /* @__PURE__ */ _("div", {
		...i,
		"aria-hidden": "true",
		className: q("ui-skeleton rounded-md bg-bg-tertiary", e),
		style: {
			width: t,
			height: n,
			...r
		}
	});
}
//#endregion
//#region src/components/ui/NavTabs.tsx
function Il({ items: e, activeKey: t, renderLink: n, className: r, "aria-label": i = "Sections", ...a }) {
	return /* @__PURE__ */ _("nav", {
		...a,
		"aria-label": i,
		className: q("ui-nav-tabs border-border border-b", r),
		children: /* @__PURE__ */ _("ul", {
			className: "ui-nav-tabs-list",
			children: e.map((e) => {
				let { key: r, label: i, badge: a, ...o } = e, s = {
					...o,
					"aria-current": r === t ? "page" : void 0,
					className: q("ui-nav-tab px-3 py-2 text-xs font-medium", r === t ? "text-accent" : "text-text-secondary", e.className),
					children: /* @__PURE__ */ v(g, { children: [i, a !== void 0 && /* @__PURE__ */ _(bi, {
						size: "xs",
						className: "bg-bg-tertiary font-inherit text-inherit",
						children: a
					})] })
				};
				return /* @__PURE__ */ _("li", { children: n ? n(s, e) : /* @__PURE__ */ _("a", { ...s }) }, r);
			})
		})
	});
}
//#endregion
//#region src/components/ui/CharacterCount.tsx
function Ll({ value: e, maxLength: t, announcementDelay: n = 1e3, className: r, ...i }) {
	let a = t - e.length, o = Math.abs(a), s = `${o} ${o === 1 ? "character" : "characters"} ${a < 0 ? "over the limit" : "remaining"}`, [c, u] = h(s);
	return l(() => {
		let e = setTimeout(() => u(s), n);
		return () => clearTimeout(e);
	}, [s, n]), /* @__PURE__ */ v("p", {
		...i,
		className: q("text-2xs", a < 0 ? "text-red" : "text-text-tertiary", r),
		children: [/* @__PURE__ */ _("span", {
			"aria-hidden": "true",
			children: s
		}), /* @__PURE__ */ _("span", {
			className: "sr-only",
			role: "status",
			"aria-live": "polite",
			"aria-atomic": "true",
			children: c
		})]
	});
}
//#endregion
//#region src/providers/ControlSizeProvider.tsx
function Rl({ size: e, children: t }) {
	return /* @__PURE__ */ _(nr.Provider, {
		value: e,
		children: t
	});
}
//#endregion
//#region src/components/ui/ProgressBar.tsx
var zl = a(function({ label: e, value: t, min: n = 0, max: r = 100, color: i = "accent", striped: a = !1, animated: o = !1, id: s, className: c, ...l }, d) {
	let f = u(), p = s ?? f;
	if (!Number.isFinite(n) || !Number.isFinite(r) || r <= n) throw RangeError("ProgressBar requires a finite max greater than min");
	if (t !== void 0 && !Number.isFinite(t)) throw RangeError("ProgressBar value must be finite");
	let m = t === void 0 ? void 0 : Math.min(r, Math.max(n, t));
	return /* @__PURE__ */ v("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ _("label", {
			htmlFor: p,
			className: "text-text-secondary text-xs",
			children: e
		}), /* @__PURE__ */ v("div", {
			className: "ui-progress-track",
			"data-color": i,
			"data-striped": a || void 0,
			"data-animated": o || void 0,
			"data-indeterminate": m === void 0 || void 0,
			children: [/* @__PURE__ */ _("span", {
				"aria-hidden": "true",
				className: "ui-progress-fill",
				style: { width: m === void 0 ? "35%" : `${(m - n) / (r - n) * 100}%` }
			}), /* @__PURE__ */ _("progress", {
				...l,
				ref: d,
				id: p,
				className: q("ui-progress-bar", c),
				max: r - n,
				value: m === void 0 ? void 0 : m - n,
				"aria-valuemin": n,
				"aria-valuemax": r,
				"aria-valuenow": m,
				children: m === void 0 ? "In progress" : `${Math.round((m - n) / (r - n) * 100)}%`
			})]
		})]
	});
});
//#endregion
//#region src/components/ui/Stack.tsx
function Bl({ as: e, gap: t = 0, align: n = "stretch", justify: r = "start", className: a, style: o, ...s }) {
	return i(e ?? "div", {
		...s,
		className: q("ui-stack", a),
		style: {
			...Ms(t),
			"--ui-align": Ns(n),
			"--ui-justify": Ps(r),
			...o
		}
	});
}
//#endregion
//#region src/components/ui/Inline.tsx
function Vl({ as: e, gap: t = 0, gapX: n, gapY: r, align: a = "stretch", justify: o = "start", wrap: s = !1, inline: c = !1, stackBelow: l, className: u, style: d, ...f }) {
	return i(e ?? "div", {
		...f,
		className: q("ui-inline", u),
		style: {
			...Ms(t, n, r),
			"--ui-align": Ns(a),
			"--ui-justify": Ps(o),
			"--ui-wrap": s ? "wrap" : "nowrap",
			"--ui-display": c ? "inline-flex" : "flex",
			...As("direction", l ? {
				base: "column",
				[l]: "row"
			} : "row", (e) => e, "row"),
			...d
		}
	});
}
//#endregion
//#region src/components/ui/Grid.tsx
function Hl({ as: e, columns: t = 1, gap: n = 0, gapX: r, gapY: a, align: o = "stretch", justify: s = "stretch", className: c, style: l, ...u }) {
	return i(e ?? "div", {
		...u,
		className: q("ui-grid", c),
		style: {
			...Ms(n, r, a),
			...As("columns", t, js, 1),
			"--ui-align": o,
			"--ui-justify": s,
			...l
		}
	});
}
//#endregion
//#region src/components/ui/GridItem.tsx
function Ul({ as: e, span: t = 1, className: n, style: r, ...a }) {
	return i(e ?? "div", {
		...a,
		className: q("ui-grid-item", n),
		style: {
			...As("span", t, (e) => `span ${e} / span ${e}`, 1),
			...r
		}
	});
}
//#endregion
export { ti as Accordion, ii as Alert, Ir as AppShell, at as AreaChart, jl as AttachmentItem, Ml as AttachmentList, li as AudioPlayer, di as AuthCard, Lr as AuthLayout, fi as AuthorByline, jn as Avatar, Rr as BackLink, bi as Badge, ct as BarChart, Dt as BottomNav, er as Breadcrumbs, Q as Button, Bt as COMMAND_PALETTE_EVENT, uo as Calendar, yo as CalendarGrid, bo as Card, Ll as CharacterCount, zr as Checkbox, Eo as CodeInput, Hr as ColumnPicker, Do as Combobox, Gt as CommandPalette, Rl as ControlSizeProvider, Ao as CopyButton, to as DEFAULT_CALENDAR_LABELS, Vt as DEFAULT_COMMAND_PALETTE_SHORTCUT, jo as DangerZone, Pl as DatePartsInput, No as DatePicker, Io as DateRangePicker, Vo as DateTimePicker, Wo as DetailPanel, _s as Dialog, vs as DialogActions, ei as Disclosure, ys as DividerLabel, ut as DonutChart, Ss as DropdownMenu, Cs as EmptyState, ws as ErrorBoundary, wl as FieldError, Cl as FieldHint, Tl as Fieldset, Br as FilterButton, Ts as FilterDropdown, Sl as FormField, Hl as Grid, Ul as GridItem, Vl as Inline, Es as Kbd, Os as LoadingSpinner, ks as MessageBubble, Ls as MetadataGrid, zs as MetricCard, Xt as MobileDrawer, Il as NavTabs, Ws as OAuthButton, Gs as PageHeader, Ks as PageSection, Ur as Pagination, Js as PaginationBar, Ys as PasswordInput, Qs as PasswordRequirements, $s as Popover, Kt as PortalContainerContext, ec as ProfileHeader, zl as ProgressBar, tc as ProseContent, nc as QrCapacityError, Tc as QrCode, dt as RadarChart, ft as RadialBarChart, Ol as Radio, no as RadioPill, Ec as ReorderList, $r as ResourceTable, Dc as SearchInput, ur as SectionHeader, si as Select, Sr as SelectDropdown, Oc as SettingRow, En as SettingsContext, yl as SettingsProvider, kc as SideSheet, Qn as Sidebar, Fl as Skeleton, wr as Slider, pt as SparkLine, Lc as SplitPaneLayout, Bl as Stack, bt as StackedBarChart, zc as StatusDot, Bc as StepProgress, Dr as THEME_MENU_EVENT, Gr as Table, qr as TableBody, Xr as TableCell, Zr as TableEmptyRow, Kr as TableHead, Yr as TableHeaderCell, Jr as TableRow, Vc as Tabs, Uc as TextInput, Hc as Textarea, tl as ThemeContext, Ar as ThemeMenu, Tr as ThemePreview, xl as ThemeProvider, Wc as TimeInput, Gc as Timeline, zn as ToastProvider, Er as Toggle, $c as Toolbar, Qc as Tooltip, Pr as TopBar, Kc as TranscriptLine, el as UploadDropzone, Ct as VerticalBarChart, sn as accentItems, ki as addDays, Ai as addMinutes, ji as addMonths, xi as badgeColors, wi as calendarDateFromParts, $ as calendarDateParts, q as cn, ba as createCalendarDateMath, tn as darkThemes, Ri as dateAtMinutes, Xs as defaultPasswordRequirements, Fi as differenceInDays, wc as encodeQrCode, pa as expandAvailabilityRules, on as fontOptions, il as formatDateLong, rl as formatDateShort, na as formatRangeTitle, al as formatRelative, Qi as formatTime, Bi as formatTimeOfDay, $i as formatTimeRange, Hi as fromDateKey, fa as getActiveResourceIds, Ji as getViewRange, Ki as getVisibleDays, Tt as handleAppShellNavigate, ya as isAllDayLike, wt as isAppShellPathActive, $t as isLightTheme, Pi as isSameDay, Gi as isTimeGridView, Pn as isTone, sa as layoutOverlaps, en as lightThemes, Ut as matchesCommandPaletteShortcut, Zs as meetsPasswordRequirements, Ii as minutesOfDay, Et as navigateToPath, Ht as openCommandPalette, Or as openThemeMenu, zi as parseTime, ra as rangesOverlap, Mn as semanticTones, Yi as shiftDate, Wi as snapDate, Ui as snapMinutes, Wr as sortRows, Oi as startOfDay, Ni as startOfMonth, Mi as startOfWeek, an as themeDefaults, Zt as themeItems, Vi as toDateKey, In as toneClasses, Fn as toneColor, Nn as tones, Cn as useAnchoredPopup, tr as useApplyTheme, rr as useControlSize, Tn as useDismiss, kt as useFocusTrap, dr as usePopover, qt as usePortalContainer, Dn as useSettings, nl as useTheme, Rn as useToast };
