import { Component as e, Fragment as t, cloneElement as n, createContext as r, createElement as i, forwardRef as a, isValidElement as o, useCallback as s, useContext as c, useEffect as l, useId as u, useImperativeHandle as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { Accessibility as y, AlertTriangle as b, ArrowDown as x, ArrowLeft as S, ArrowUp as C, BookOpen as w, Calendar as T, Check as E, CheckCircle2 as D, ChevronDown as O, ChevronLeft as k, ChevronRight as A, ChevronsUpDown as j, Columns3 as M, Eye as N, EyeOff as P, GripVertical as F, HandleBottomRight as I, Inbox as L, Info as R, Loader2 as z, LogOut as B, Menu as ee, Minus as te, Monitor as V, Moon as ne, Palette as re, PanelLeft as H, PanelLeftDashed as ie, Search as ae, Settings as oe, Sun as se, UploadCloud as ce, X as U, XCircle as le, Zap as W } from "lucide-react";
import { createPortal as ue } from "react-dom";
//#region src/lib/cn.ts
function G(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = G(n);
		e && (t = t ? `${t} ${e}` : e);
	}
	else for (let n in e) e[n] && (t = t ? `${t} ${n}` : n);
	return t;
}
var de = new Set([
	"block",
	"contents",
	"flex",
	"grid",
	"hidden",
	"inline",
	"inline-block",
	"inline-flex",
	"table"
]), fe = new Set([
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
]), pe = new Set([
	"text-center",
	"text-left",
	"text-right"
]), me = new Set(["lowercase", "uppercase"]), he = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), ge = {
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
}, _e = {
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
}, ve = {
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
}, ye = {
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
}, be = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function K(...e) {
	return xe(G(e));
}
function xe(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = Se(r);
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
			r && r.keys.size > 0 && Pe(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function Se(e) {
	let t = Ce(e), n = t.pop() ?? e, r = n.startsWith("!"), i = we(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = Te(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function Ce(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function we(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function Te(e) {
	let t = ke(e);
	if (t) return [...ge[t]];
	let n = Ae(e);
	if (n) return [..._e[n]];
	let r = je(e);
	if (r) return [...ve[r]];
	if (de.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (be.has(e)) return ["border-style"];
	let i = Me(e);
	return i ? [...ye[i]] : De(e) || Oe(e) || (fe.has(e) ? ["font-size"] : pe.has(e) ? ["text-align"] : me.has(e) ? ["text-transform"] : e === "text-ellipsis" || e === "text-clip" ? ["text-overflow"] : e === "text-wrap" || e === "text-nowrap" || e === "text-balance" || e === "text-pretty" ? ["text-wrap"] : /^text-\[(?:length:)?-?[\d.]+(?:px|rem|em|%|vw|vh)\]$/.test(e) ? ["font-size"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : he.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" || e === "flex-col-reverse" || e === "flex-row-reverse" ? ["flex-direction"] : e === "flex-wrap" || e === "flex-nowrap" || e === "flex-wrap-reverse" ? ["flex-wrap"] : e === "flex-shrink" || e.startsWith("flex-shrink-") ? ["flex-shrink"] : e === "flex-grow" || e.startsWith("flex-grow-") ? ["flex-grow"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-x-") ? ["column-gap"] : e.startsWith("gap-y-") ? ["row-gap"] : e.startsWith("gap-") ? ["column-gap", "row-gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : []);
}
var Ee = {
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
function De(e) {
	let t = e.match(/^rounded(?:-(tl|tr|br|bl|ss|se|es|ee|t|r|b|l|s|e))?(?:-|$)/);
	if (t) return Ee[t[1] ?? ""].map((e) => `radius-${e}`);
}
function Oe(e) {
	if (e.startsWith("bg-")) return /^bg-(?:auto|cover|contain)$/.test(e) ? ["background-size"] : /^bg-(?:no-repeat|repeat)(?:-|$)/.test(e) ? ["background-repeat"] : /^bg-(?:fixed|local|scroll)$/.test(e) ? ["background-attachment"] : /^bg-(?:gradient-|linear-|radial-|conic-|none$)/.test(e) ? ["background-image"] : /^bg-(?:center|top|bottom|left|right)(?:-|$)/.test(e) || /^bg-position-/.test(e) ? ["background-position"] : ["background-color"];
}
function ke(e) {
	return Ne(e, ge);
}
function Ae(e) {
	return Ne(e, _e);
}
function je(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function Me(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function Ne(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function Pe(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/lib/math.ts
function q(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region src/components/charts/chartUtils.ts
var Fe = {
	"text-accent": "var(--accent)",
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-red": "var(--red)",
	"text-yellow": "var(--yellow)"
};
function Ie(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function J(e) {
	return e ? Fe[e] ?? e : "var(--accent)";
}
function Le(e, t) {
	if (e <= 0 || t <= 0) return [];
	if (e === 1 || t === 1) return [0];
	let n = Math.min(e, Math.max(2, Math.floor(t))), r = (e - 1) / (n - 1), i = /* @__PURE__ */ new Set();
	for (let e = 0; e < n; e += 1) i.add(Math.round(e * r));
	return i.add(e - 1), Array.from(i).sort((e, t) => e - t);
}
function Y(e) {
	return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function Re(e, t) {
	let n = String(e ?? "");
	return t === void 0 || t <= 0 || n.length <= t ? n : t <= 3 ? n.slice(0, t) : `${n.slice(0, t - 3)}...`;
}
function ze(e, t = 10) {
	let n = 0;
	for (let r of e) r === " " ? n += t * .32 : /[A-Z0-9]/.test(r) ? n += t * .62 : /[il.,:;|'`]/.test(r) ? n += t * .28 : /[MW@#%&]/.test(r) ? n += t * .82 : n += t * .54;
	return Math.ceil(n);
}
function Be(e, { maxWidth: t = 220, minWidth: n = 72, paddingX: r = 20 } = {}) {
	return q(e.reduce((e, t) => Math.max(e, ze(t, 11)), 0) + r, n, t);
}
function Ve(e, t, { boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Math.max(1, Math.min(s, r - a * 2)), l = Math.max(1, Math.min(i, n - a * 2)), u = Math.max(a, r - c - a), d = Math.max(a, n - l - a), f = q(e - c / 2, a, u), p = t - l - o, m = p >= a ? "above" : "below";
	return {
		height: l,
		placement: m,
		width: c,
		x: f,
		y: m === "above" ? p : q(t + o, a, d)
	};
}
function He({ anchorX: e, anchorY: t, boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Ve(e, t, {
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
var X = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
}, Ue = 600;
function We(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function Ge({ data: e, height: t = 240, minValue: n, maxValue: r, startAtZero: i = !1, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 5, ariaLabel: c = "Area chart", className: l }) {
	let d = u(), f = m(null), [p, y] = h(null), b = Math.max(X.top + X.bottom + 1, t), x = Ue - X.left - X.right, S = Math.max(1, b - X.top - X.bottom), C = e.length > 0, w = e[0]?.value ?? 0, T = e[0]?.value ?? 0;
	for (let t of e) t.value < w && (w = t.value), t.value > T && (T = t.value);
	let E = n ?? w, D = r ?? T;
	if (i && n === void 0 && w >= 0 && (E = 0), E === D) {
		if (i || n !== void 0 || r !== void 0) {
			let e = We(T);
			n === void 0 && (E = i && w >= 0 ? 0 : w >= 0 ? Math.max(0, w - e) : w - e), r === void 0 && (D = T + e);
		}
		E === D && (D = E + 1);
	}
	let O = D - E, k = a ?? Ie, A = o ?? a ?? ((e) => e.toLocaleString());
	function j(t) {
		return X.left + t / Math.max(e.length - 1, 1) * x;
	}
	function M(e) {
		return X.top + S - (e - E) / O * S;
	}
	let N = e.map((e, t) => `${j(t)},${M(e.value)}`).join(" "), P = C ? [
		`${j(0)},${X.top + S}`,
		...e.map((e, t) => `${j(t)},${M(e.value)}`),
		`${j(e.length - 1)},${X.top + S}`
	].join(" ") : "", F = Le(e.length, s);
	function I(t) {
		let n = f.current;
		if (!n || e.length === 0) return;
		let r = n.getBoundingClientRect();
		if (r.width <= 0) return;
		let i = ((t.clientX - r.left) / r.width * Ue - X.left) / x, a = Math.round(i * (e.length - 1)), o = Math.max(0, Math.min(e.length - 1, a));
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
		viewBox: `0 0 ${Ue} ${b}`,
		onPointerMove: I,
		onPointerLeave: R,
		className: K("select-none", l),
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
				x: X.left - 8,
				y: X.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(D)
			}),
			/* @__PURE__ */ _("text", {
				x: X.left - 8,
				y: X.top + S,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(E)
			}),
			/* @__PURE__ */ _("line", {
				x1: X.left,
				y1: X.top + S,
				x2: X.left + x,
				y2: X.top + S,
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
					y1: X.top,
					x2: p.x,
					y2: X.top + S,
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
					let n = t.date, r = A(t.value), i = Ve(p.x, p.y, {
						boundsHeight: b,
						boundsWidth: Ue,
						height: 28,
						offset: 10,
						width: Be([n, r], {
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
var Ke = [
	1,
	.85,
	.7,
	.55,
	.45
], qe = 600;
function Je({ data: e, height: t, maxValue: n, valueFormatter: r, labelFormatter: i, maxLabelLength: a, labelWidth: o = 160, valueWidth: s = 60, barHeight: c = 28, gap: l = 10, ariaLabel: u = "Horizontal bar chart", className: d }) {
	let [f, p] = h(null), m = e.length, g = Math.max(1, c), y = Math.max(0, l), b = m > 0 ? m * g + Math.max(0, m - 1) * y : g, x = Math.max(1, t ?? b), S = t === void 0 ? 1 : x / b, C = g * S, w = y * S, T = Math.min(3, C / 3), E = Math.max(0, C - T * 2), D = n === void 0 ? Math.max(...e.map((e) => Y(e.value)), 1) : Math.max(Y(n), 1), O = Math.max(0, o), k = Math.max(0, s), A = Math.max(0, qe - O - k), j = r ?? ((e) => e.toLocaleString());
	return /* @__PURE__ */ _("svg", {
		width: "100%",
		viewBox: `0 0 ${qe} ${x}`,
		className: K("select-none", d),
		role: "img",
		"aria-label": u,
		children: e.map((e, t) => {
			let n = t * (C + w), r = D > 0 ? q(Y(e.value), 0, D) / D * A : 0, o = f === t, s = i?.(e.label, e, t) ?? e.label, c = Re(s, a), l = c !== s, u = j(e.value);
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
						width: qe,
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
						opacity: o ? 1 : Ke[t % Ke.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ _("text", {
						x: qe,
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
function Ye(e, t) {
	let n = e.reduce((e, t) => e + Y(t.value), 0), r = 0;
	return e.map((e) => {
		let i = Y(e.value), a = n > 0 ? i / n * t : 0, o = t - a, s = r / t * 360 - 90, c = s + a / t * 180, l = n > 0 ? i / n * 100 : 0;
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
function Xe({ segments: e, size: t = 180, strokeWidth: n = 28, valueFormatter: r, percentageFormatter: i, showLegend: a = !0, ariaLabel: o = "Donut chart", className: s }) {
	let [c, l] = h(null), u = e.reduce((e, t) => e + Y(t.value), 0), d = Math.max(1, t), f = Math.max(1, Math.min(n, d - 1)), p = Math.max(.5, (d - f) / 2), m = Ye(e, 2 * Math.PI * p), g = r ?? ((e) => e.toLocaleString()), y = i ?? ((e) => `${e.toFixed(1)}%`), b = d + 12, x = b / 2;
	return /* @__PURE__ */ v("div", {
		className: K("flex flex-col items-center gap-4", s),
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
						"aria-label": `${e.segment.name}: ${g(Y(e.segment.value))} (${y(e.percentage)})`,
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					m.map((e, t) => {
						let n = c === t, r = e.midAngle * Math.PI / 180, i = n ? Math.cos(r) * 6 : 0, a = n ? Math.sin(r) * 6 : 0;
						return /* @__PURE__ */ _("circle", {
							cx: x,
							cy: x,
							r: p,
							fill: "none",
							stroke: J(e.segment.color),
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
						children: g(c === null ? u : Y(m[c].segment.value))
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
				let e = m[c], t = e.midAngle * Math.PI / 180, n = p + f / 2 + 20, r = x + Math.cos(t) * n, i = x + Math.sin(t) * n, a = J(e.segment.color), o = g(Y(e.segment.value)), s = y(e.percentage);
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: He({
						anchorX: r,
						anchorY: i,
						boundsHeight: b,
						boundsWidth: b,
						height: 30,
						margin: 4,
						offset: 8,
						width: Be([`${e.segment.name} ${o} ${s}`], {
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
				className: K("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", c !== null && c !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ _("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: J(e.color) }
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-primary text-xs font-semibold",
						children: g(Y(e.value))
					})
				]
			}, e.name))
		})]
	});
}
//#endregion
//#region src/components/charts/RadarChart.tsx
function Ze({ data: e, maxValue: t, size: n = 240, rings: r = 4, labelOffset: i = 18, labelFormatter: a, maxLabelLength: o, valueFormatter: s, ariaLabel: c = "Radar chart", className: l }) {
	let [u, d] = h(null), f = Math.max(80, n), p = Math.max(Y(t ?? 0), ...e.map((e) => Y(e.value)), 1), m = f / 2, g = Math.max(1, m - Math.max(0, i) - 12), y = e.length > 0 ? 2 * Math.PI / e.length : 0, b = Math.max(1, Math.floor(r)), x = s ?? String, S = e.map((e, t) => {
		let n = a?.(e.label, e, t) ?? e.label, r = Re(n, o);
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
		let n = q(Y(e.value), 0, p) / p * g;
		return C(t * y, n);
	}), T = w.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ v("div", {
		className: K("relative flex flex-col items-center", l),
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
						className: K("text-text-secondary text-xs whitespace-nowrap"),
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
function Qe({ segments: e, size: t = 200, strokeWidth: n = 14, gap: r = 6, valueFormatter: i, percentageFormatter: a, showLegend: o = !0, ariaLabel: s = "Radial bar chart", className: c }) {
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
		let t = Y(e.max);
		return t <= 0 ? 0 : q(Y(e.value) / t, 0, 1);
	}
	function A(e) {
		return k(e) * 100;
	}
	return /* @__PURE__ */ v("div", {
		className: K("flex flex-col items-center gap-4", c),
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
					let r = 2 * Math.PI * n, i = r * k(e), a = r - i, o = J(e.color), s = g === t, c = A(e);
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
				let n = A(t), r = J(t.color), i = T(n), a = `${w(t.value)}/${w(t.max)}`;
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: He({
						anchorX: d.x,
						anchorY: d.y,
						boundsHeight: y,
						boundsWidth: y,
						height: 30,
						margin: 4,
						offset: 8,
						width: Be([`${t.label} ${i} ${a}`], {
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
					className: K("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", g !== null && g !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ _("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: J(e.color) }
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
function $e({ data: e, width: t = 60, height: n = 20, minValue: r, maxValue: i, strokeWidth: a = 1.5, padding: o = 1, color: s = "var(--accent)", area: c = !1, areaOpacity: l = .15, ariaLabel: u = "Sparkline chart", className: d }) {
	if (e.length < 2) return null;
	let f = Math.max(1, t), p = Math.max(1, n), m = Math.max(0, Math.min(o, p / 2, f / 2)), h = r ?? Math.min(...e), g = i ?? Math.max(...e), y = Math.min(h, g), b = Math.max(h, g), x = b - y, S = Math.max(1, f - m * 2), C = Math.max(1, p - m * 2), w = e.map((t, n) => ({
		x: m + n / (e.length - 1) * S,
		y: x === 0 ? p / 2 : m + C - (q(t, y, b) - y) / x * C
	})), T = w.map(({ x: e, y: t }) => `${e},${t}`).join(" "), E = w.length > 0 ? [
		`${w[0].x},${p - m}`,
		...w.map(({ x: e, y: t }) => `${e},${t}`),
		`${w[w.length - 1].x},${p - m}`
	].join(" ") : "";
	return /* @__PURE__ */ v("svg", {
		width: f,
		height: p,
		viewBox: `0 0 ${f} ${p}`,
		className: K("inline-block", d),
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
var Z = {
	top: 20,
	right: 12,
	bottom: 30,
	left: 48
}, et = 600, tt = 4;
function nt(e) {
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
function rt(e, t) {
	let n = e[t];
	if (typeof n == "number") return Number.isFinite(n) ? n : 0;
	if (typeof n == "string") {
		let e = Number(n);
		return Number.isFinite(e) ? e : 0;
	}
	return 0;
}
function it(e, t) {
	return t.reduce((t, n) => t + Math.max(0, rt(e, n.key)), 0);
}
function at(e, t, n, r, i) {
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
function ot({ data: e, segments: t, height: n = 220, ariaLabel: r = "Stacked bar chart", tooltipRows: i, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 6, barGap: c, minBarWidth: l = 1, className: u }) {
	let [d, f] = h(null), p = Math.max(Z.top + Z.bottom + 1, n), m = et - Z.left - Z.right, y = Math.max(1, p - Z.top - Z.bottom), b = e.reduce((e, n) => Math.max(e, it(n, t)), 1), x = Math.ceil(b / 2), S = x > 0 && x < b, C = c ?? (e.length > 60 ? 2 : e.length > 30 ? 3 : 6), w = Math.max(1, l), T = e.length > 1 ? Math.max(0, (m - e.length * w) / Math.max(e.length - 1, 1)) : 0, E = e.length > 1 ? Math.min(Math.max(0, C), T) : 0, D = e.length > 0 ? (m - E * Math.max(e.length - 1, 0)) / e.length : 0, O = new Set(Le(e.length, s)), k = d === null ? null : e[d], A = a ?? Ie, j = o ?? ((e) => e.toLocaleString());
	function M(e) {
		return Z.left + e * (D + E);
	}
	function N(e) {
		return e / b * y;
	}
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${et} ${p}`,
		className: K("select-none", u),
		role: "img",
		"aria-label": r,
		children: [
			/* @__PURE__ */ _("text", {
				x: Z.left - 8,
				y: Z.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(b)
			}),
			S && /* @__PURE__ */ _("text", {
				x: Z.left - 8,
				y: Z.top + y / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(x)
			}),
			/* @__PURE__ */ _("text", {
				x: Z.left - 8,
				y: Z.top + y,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: Z.left,
				y1: Z.top + y,
				x2: Z.left + m,
				y2: Z.top + y,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: Z.left,
				y1: Z.top + y / 2,
				x2: Z.left + m,
				y2: Z.top + y / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, n) => {
				let r = M(n), i = d === n, a = 0, o = t.map((t) => ({
					segment: t,
					value: Math.max(0, rt(e, t.key))
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
					"aria-label": `${nt(e.date)}: ${j(it(e, t))}`,
					children: [
						/* @__PURE__ */ _("rect", {
							x: r,
							y: Z.top,
							width: D,
							height: y,
							fill: "transparent"
						}),
						o.map(({ segment: e, value: t }, n) => {
							let s = N(t), c = Z.top + y - a - s, l = n === o.length - 1;
							return a += s, l ? /* @__PURE__ */ _("path", {
								d: at(r, c, D, s, tt),
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
							children: nt(e.date)
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
						value: rt(k, e.key)
					})), r = it(k, t), a = Ve(e, Z.top + y - N(r), {
						boundsHeight: p,
						boundsWidth: et,
						height: 28 + n.length * 15,
						offset: 8,
						width: Be([nt(k.date), ...n.map((e) => `${e.label} ${j(e.value)}`)], {
							maxWidth: 240,
							minWidth: 150
						})
					}), o = a.x + 10, s = a.x + a.width - 10;
					return /* @__PURE__ */ v(g, { children: [
						/* @__PURE__ */ _("line", {
							x1: e,
							y1: Z.top,
							x2: e,
							y2: Z.top + y,
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
							children: nt(k.date)
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
var st = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], Q = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
}, ct = 600;
function lt({ data: e, height: t = 180, maxValue: n, valueFormatter: r, tooltipValueFormatter: i, labelFormatter: a, maxLabelLength: o, xLabelCount: s = 7, barGap: c = 6, minBarWidth: l = 4, ariaLabel: u = "Vertical bar chart", className: d }) {
	let [f, p] = h(null), m = Math.max(Q.top + Q.bottom + 1, t), y = ct - Q.left - Q.right, b = Math.max(1, m - Q.top - Q.bottom), x = n === void 0 ? Math.max(...e.map((e) => Y(e.value)), 1) : Math.max(Y(n), 1), S = Math.max(0, c), C = Math.max(1, l), w = e.length > 1 ? Math.max(0, (y - e.length * C) / Math.max(e.length - 1, 1)) : 0, T = e.length > 1 ? Math.min(S, w) : 0, E = e.length > 0 ? Math.max(0, (y - T * Math.max(e.length - 1, 0)) / e.length) : 0, D = r ?? Ie, O = i ?? ((e) => e.toLocaleString()), k = new Set(Le(e.length, s));
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${ct} ${m}`,
		className: K("select-none", d),
		role: "img",
		"aria-label": u,
		children: [
			/* @__PURE__ */ _("text", {
				x: Q.left - 6,
				y: Q.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: D(x)
			}),
			/* @__PURE__ */ _("text", {
				x: Q.left - 6,
				y: Q.top + b,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: Q.left,
				y1: Q.top + b,
				x2: Q.left + y,
				y2: Q.top + b,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: Q.left,
				y1: Q.top + b / 2,
				x2: Q.left + y,
				y2: Q.top + b / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, t) => {
				let n = Q.left + t * (E + T), r = q(Y(e.value), 0, x) / x * b, i = Q.top + b - r, s = f === t, c = a?.(e.label, e, t) ?? e.label, l = Re(c, o), u = l !== c, d = O(e.value);
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
							y: Q.top,
							width: E,
							height: b,
							fill: "transparent"
						}),
						/* @__PURE__ */ _("rect", {
							x: n,
							y: i,
							width: E,
							height: r,
							fill: J(e.color),
							rx: 6,
							opacity: s ? 1 : st[t % st.length],
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
							let e = Ve(n + E / 2, i, {
								boundsHeight: m,
								boundsWidth: ct,
								height: 24,
								offset: 8,
								width: Be([c, d], {
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
function ut(e, t) {
	if (e.active !== void 0) return e.active;
	if (!t) return !1;
	if (e.end ?? e.path === "/") return t === e.path;
	let n = e.path.endsWith("/") ? e.path : `${e.path}/`;
	return t === e.path || t.startsWith(n);
}
function dt(e, t, n, r) {
	let i = e.currentTarget.getAttribute("target");
	e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || i && i !== "_self" || (n && (e.preventDefault(), n(t)), r?.());
}
function ft(e, t) {
	if (t) {
		t(e);
		return;
	}
	typeof window < "u" && window.location.assign(e);
}
//#endregion
//#region src/components/app-shell/BottomNav.tsx
function pt({ items: e, currentPath: t, onNavigate: n, className: r }) {
	return e.length === 0 ? null : /* @__PURE__ */ _("nav", {
		className: K("bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ _("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = ut(e, t);
				return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
					href: e.path,
					onClick: (t) => dt(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					"aria-label": e.shortLabel && e.shortLabel !== e.label ? `${e.shortLabel}, ${e.label}` : void 0,
					className: K("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
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
var mt = "a[href], button:not([disabled]), input:not([disabled]):not([type=\"hidden\"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function ht(e, t, { initialFocusRef: n, returnFocusRef: r } = {}) {
	l(() => {
		let i = e.current;
		if (!t || !i) return;
		let a = i.ownerDocument, o = a.activeElement, s = r?.current, c = () => {
			let e = Array.from(i.querySelectorAll(mt)).filter((e) => e.tabIndex >= 0 && !e.matches(":disabled") && !e.closest("[hidden], [inert]") && e.getClientRects().length > 0);
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
function gt(e) {
	return { parent: e };
}
var _t = [];
function vt(e, t) {
	for (let n = t.parent; n; n = n.parent) if (n === e) return !0;
	return !1;
}
function yt(e) {
	if (e.key !== "Escape" || e.defaultPrevented) return;
	let t = e.currentTarget;
	for (let n = _t.length - 1; n >= 0; n--) if (_t[n].doc === t) {
		_t[n].onEscape(e);
		return;
	}
}
function bt(e, t, n = document) {
	let r = {
		node: e,
		doc: n,
		onEscape: t
	};
	_t.some((e) => e.doc === n) || n.addEventListener("keydown", yt);
	let i = _t.findIndex((t) => vt(e, t.node));
	return i === -1 ? _t.push(r) : _t.splice(i, 0, r), () => {
		let e = _t.indexOf(r);
		e !== -1 && (_t.splice(e, 1), _t.some((e) => e.doc === n) || n.removeEventListener("keydown", yt));
	};
}
var xt = /* @__PURE__ */ new Map();
function St(e = document) {
	let t = xt.get(e);
	t || (t = {
		count: 0,
		overflow: e.body.style.overflow
	}, xt.set(e, t), e.body.style.overflow = "hidden"), t.count++;
	let n = !1;
	return () => {
		if (n) return;
		n = !0;
		let t = xt.get(e);
		t && (t.count--, !(t.count > 0) && (xt.delete(e), e.body.style.overflow = t.overflow));
	};
}
//#endregion
//#region src/hooks/useOverlayStack.ts
var Ct = r(null);
function wt(e, t, n) {
	let r = c(Ct), [i] = h(() => gt(r)), a = m(t);
	return f(() => {
		a.current = t;
	}), l(() => {
		if (e) return bt(i, (e) => a.current(e), n?.current?.ownerDocument ?? document);
	}, [
		e,
		i,
		n
	]), i;
}
function Tt(e, t) {
	l(() => {
		if (e) return St(t?.current?.ownerDocument ?? document);
	}, [e, t]);
}
//#endregion
//#region src/components/app-shell/commandPaletteEvents.ts
var Et = "open-command-palette", Dt = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function Ot(e = Et) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
function kt(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
//#region src/components/app-shell/CommandPalette.tsx
function At(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function jt({ items: e, eventName: t = Et, shortcut: n = Dt, placeholder: r = "Search pages...", emptyLabel: i = "No results found", onNavigate: a, onSelect: o }) {
	let [c, d] = h(!1), [f, p] = h(""), [g, y] = h(0), b = m(null), x = m(null), S = u();
	ht(x, c), wt(c, () => d(!1), x);
	let C = e.filter((e) => At(e, f)), w = s(() => {
		d(!0), p(""), y(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	l(() => {
		let e = (e) => {
			kt(e, n) && (e.preventDefault(), c ? d(!1) : w());
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
		o?.(e), ft(e.path, a), d(!1);
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
					/* @__PURE__ */ _(ae, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
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
					className: K("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === g ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
var Mt = r(null);
function Nt() {
	return c(Mt);
}
function Pt(e) {
	let [t, n] = h(null);
	return [t, s((t) => {
		e.current = t, n(t);
	}, [e])];
}
//#endregion
//#region src/components/app-shell/MobileDrawer.tsx
function Ft({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ _(g, { children: e.logo }) : /* @__PURE__ */ v("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ _(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ _("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function It({ open: e, onClose: t, items: n, topBarNavItems: r = [], topBarNavLabel: i = "Primary", brand: a, currentPath: o, onNavigate: s, headerActions: c, className: l }) {
	let u = m(null), [d, f] = Pt(u);
	ht(u, e);
	let p = wt(e, () => t(), u);
	if (Tt(e, u), !e) return null;
	let h = r.length > 0;
	return /* @__PURE__ */ _(Ct.Provider, {
		value: p,
		children: /* @__PURE__ */ _(Mt.Provider, {
			value: d,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: t
				}), /* @__PURE__ */ v("div", {
					ref: f,
					className: K("bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", l),
					children: [
						/* @__PURE__ */ v("div", {
							className: "border-border flex h-11 items-center justify-between border-b px-4",
							children: [/* @__PURE__ */ _(Ft, { brand: a }), /* @__PURE__ */ _("button", {
								type: "button",
								onClick: t,
								className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
								"aria-label": "Close menu",
								children: /* @__PURE__ */ _(U, { className: "h-4 w-4" })
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
										let n = e.icon, r = ut(e, o), i = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
										return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
											href: e.href ?? e.path,
											target: e.target,
											rel: i,
											onClick: (n) => {
												if (e.reloadDocument) {
													t();
													return;
												}
												dt(n, e.path, s, t);
											},
											"aria-current": r ? "page" : void 0,
											className: K("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", r ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
									let n = ut(e, o);
									return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
										href: e.path,
										onClick: (n) => dt(n, e.path, s, t),
										"aria-current": n ? "page" : void 0,
										className: K("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
var Lt = [
	{
		value: "dark",
		label: "Dark",
		icon: ne,
		preview: {
			bg: "#0d0f12",
			fg: "#2a2e38"
		}
	},
	{
		value: "light",
		label: "Light",
		icon: se,
		preview: {
			bg: "#f5f5f5",
			fg: "#d4d4d8"
		}
	},
	{
		value: "lightInverted",
		label: "Light Inverted",
		icon: se,
		preview: {
			bg: "#f1f2f4",
			fg: "#ffffff"
		}
	},
	{
		value: "monokai",
		label: "Monokai",
		icon: re,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: V,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: W,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: W,
		preview: {
			bg: "#e4e4e7",
			fg: "#d4d4d8"
		}
	},
	{
		value: "hashiTheme",
		label: "HashiTheme",
		icon: w,
		preview: {
			bg: "#ffffff",
			fg: "#364153"
		}
	}
], Rt = new Set([
	"light",
	"lightInverted",
	"cyberBrutalLight",
	"hashiTheme"
]);
function zt(e) {
	return Rt.has(e);
}
var Bt = Lt.filter((e) => zt(e.value)), Vt = Lt.filter((e) => !zt(e.value)), Ht = {
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
}, Ut = {
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
}, Wt = {
	dark: Ht,
	light: Ht,
	lightInverted: Ht,
	monokai: Ht,
	solarized: Ht,
	cyberBrutalDark: Ut,
	cyberBrutalLight: Ut,
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
}, Gt = [
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
], Kt = [
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
], qt = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, Jt = [
	"bottom",
	"top",
	"right",
	"left"
];
function Yt(e, t, n) {
	switch (n) {
		case "top": return e.top - t.top;
		case "bottom": return t.bottom - e.bottom;
		case "left": return e.left - t.left;
		case "right": return t.right - e.right;
	}
}
function Xt(e, t, n, r) {
	return Math.min(Math.max(e, n), r - t);
}
function Zt(e, t, n, r) {
	return r === "start" ? e : r === "end" ? t - n : (e + t) / 2 - n / 2;
}
function Qt(e, t, { size: { width: n, height: r }, bounds: i, margin: a, gap: o, align: s = "center" }) {
	return e === "top" || e === "bottom" ? {
		left: Xt(Zt(t.left, t.right, n, s), n, i.left + a, i.right - a),
		top: e === "bottom" ? t.bottom + o : t.top - o - r
	} : {
		left: e === "right" ? t.right + o : t.left - o - n,
		top: Xt(Zt(t.top, t.bottom, r, s), r, i.top + a, i.bottom - a)
	};
}
function $t(e, t, n) {
	let { size: { width: r, height: i }, bounds: a, margin: o } = n, s = a.left + o, c = a.right - o, l = a.top + o, u = a.bottom - o;
	if (r > c - s || i > u - l) return null;
	let { left: d, top: f } = Qt(e, t, n);
	return d >= s && d + r <= c && f >= l && f + i <= u ? {
		side: e,
		left: d,
		top: f
	} : null;
}
function en(e, t, n) {
	if (!t) return null;
	let { bounds: r } = n;
	if (!(t.right > r.left && t.left < r.right && t.bottom > r.top && t.top < r.bottom)) return null;
	let i = e === "auto" ? [...Jt].sort((e, n) => Yt(t, r, n) - Yt(t, r, e)) : [e, qt[e]];
	for (let e of i) {
		let r = $t(e, t, n);
		if (r) return r;
	}
	return null;
}
function tn(e, t, n, r) {
	return Math.max(Math.min(e, r - t), n);
}
function nn(e, t, n) {
	let r = en(e, t, n);
	if (r) return r;
	let { size: { width: i, height: a }, bounds: o, margin: s } = n, c = qt[e], l = Yt(t, o, c) > Yt(t, o, e) ? c : e, { left: u, top: d } = Qt(l, t, n);
	return {
		side: l,
		left: tn(u, i, o.left + s, o.right - s),
		top: tn(d, a, o.top + s, o.bottom - s)
	};
}
//#endregion
//#region src/hooks/useAnchoredPopup.ts
function rn(e, t) {
	let n = {
		left: Math.max(e.left, t.left),
		top: Math.max(e.top, t.top),
		right: Math.min(e.right, t.right),
		bottom: Math.min(e.bottom, t.bottom)
	};
	return n.left < n.right && n.top < n.bottom ? n : null;
}
function an(e, t) {
	let n = rn(e.getBoundingClientRect(), t), r = e.ownerDocument.defaultView;
	for (let t = e.parentElement; n && t && t !== e.ownerDocument.documentElement; t = t.parentElement) {
		let e = r?.getComputedStyle(t);
		e && (e.overflowX !== "visible" || e.overflowY !== "visible") && (n = rn(n, t.getBoundingClientRect()));
	}
	return n !== null;
}
function on(e) {
	let t = e.createElement("div");
	return t.setAttribute("aria-hidden", "true"), t.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none", t;
}
function sn(e) {
	let t = null;
	return {
		measure() {
			let n = e.parentElement;
			if (!n) return {
				left: 0,
				top: 0
			};
			t?.parentElement !== n && (t?.remove(), t = on(e.ownerDocument), n.appendChild(t));
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
var cn = (e, t) => e.length !== t.length || e.some((e, n) => Math.abs(e - t[n]) > .5);
function ln(e, t, n, { side: r, align: i = "center", gap: a = 4, margin: o = 8, onAnchorHidden: s, matchAnchorWidth: c = !1 }) {
	let l = m(s);
	f(() => {
		l.current = s;
	}), f(() => {
		let s = n.current;
		if (!e || !s) return;
		let u = s.ownerDocument, d = u.defaultView ?? window, f = sn(s), p = [], m = (e) => {
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
			if (e && l.current && !an(n, h)) {
				l.current();
				return;
			}
			let g = n.getBoundingClientRect();
			if (c) {
				let e = n instanceof HTMLElement ? n.offsetWidth : g.width;
				s.style.width = `${e}px`;
			}
			let _ = nn(r, g, {
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
			e && cn(m(e), p) && h(!1);
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
function un(e, t, n, r) {
	let i = m(r);
	f(() => {
		i.current = r;
	}), f(() => {
		let r = n.current;
		if (!e || !r) return;
		let a = r.ownerDocument, o = a.defaultView ?? window, s = sn(r), c = [], l = () => {
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
			if (!cn(u, c)) return;
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
function dn(e, t, n, r, i) {
	let a = i?.outsideClick ?? !0;
	l(() => {
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
	]), wt(e, () => t("escape"), n[0]);
}
//#endregion
//#region src/providers/SettingsContext.ts
var fn = r({
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
function pn() {
	return c(fn);
}
//#endregion
//#region src/components/ui/Avatar.tsx
var mn = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function hn(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function gn(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function _n({ name: e, src: t, size: n = "md", className: r }) {
	return /* @__PURE__ */ _("div", {
		className: K("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", mn[n], r),
		style: { backgroundColor: t ? void 0 : gn(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ _("img", {
			src: t,
			alt: e,
			className: "h-full w-full rounded-full object-cover"
		}) : hn(e)
	});
}
//#endregion
//#region src/lib/tones.ts
var vn = {
	success: "green",
	warning: "yellow",
	danger: "red",
	info: "blue",
	neutral: "gray"
}, yn = {
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
function bn(e) {
	return typeof e == "string" && (Object.prototype.hasOwnProperty.call(yn, e) || Object.prototype.hasOwnProperty.call(vn, e));
}
function xn(e) {
	return Object.prototype.hasOwnProperty.call(vn, e) ? vn[e] : e;
}
function Sn(e) {
	return yn[xn(e)];
}
//#endregion
//#region src/components/ui/Toast.tsx
var Cn = r({ toast: () => {} });
function wn() {
	return c(Cn);
}
function Tn({ children: e }) {
	let [t, n] = h([]), r = m(0), i = s((e, t, i = 4e3) => {
		let a = r.current++;
		n((n) => [...n, {
			id: a,
			type: e,
			message: t,
			duration: i
		}]);
	}, []), a = s((e) => {
		n((t) => t.filter((t) => t.id !== e));
	}, []);
	return /* @__PURE__ */ v(Cn.Provider, {
		value: { toast: i },
		children: [e, /* @__PURE__ */ _("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ _(On, {
				toast: e,
				onDismiss: () => a(e.id)
			}, e.id))
		})]
	});
}
var En = {
	success: D,
	error: le,
	warning: b,
	info: R
}, Dn = {
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
};
function On({ toast: e, onDismiss: t }) {
	let [n, r] = h(100), i = En[e.type], a = Sn(Dn[e.type]), o = e.type === "error" || e.type === "warning", s = m(t);
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
			/* @__PURE__ */ _("div", { className: K("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", a.dot) }),
			/* @__PURE__ */ v("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ _(i, { className: K("h-4 w-4 shrink-0", a.text) }),
					/* @__PURE__ */ _("p", {
						className: "text-text-primary flex-1 text-xs",
						children: e.message
					}),
					/* @__PURE__ */ _("button", {
						type: "button",
						onClick: t,
						"aria-label": "Dismiss notification",
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ _(U, {
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
var kn = 140, An = 400, jn = 48, Mn = {
	side: "right",
	align: "end",
	gap: 6
};
function Nn({ item: e, collapsed: t, currentPath: n, onNavigate: r }) {
	let i = ut(e, n);
	return /* @__PURE__ */ v("a", {
		href: e.path,
		onClick: (t) => dt(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: K("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function Pn({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ _("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ v("div", {
		className: K("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ _(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ _("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ _("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function Fn(e) {
	return e.role ?? e.email;
}
function In({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: i, signOutPath: a, signOutLabel: o = "Sign out", onNavigate: c }) {
	let [l, u] = h(!1), d = Nt(), [f, p] = h(() => Math.min(n, Math.max(t.length - 1, 0))), y = m(null), b = m(null), x = s(() => u(!1), []);
	dn(l, x, [b], [y]), ln(l, y, b, {
		...Mn,
		onAnchorHidden: x
	});
	let S = t[f] ?? t[0], C = !!(i || a);
	function w() {
		u(!l);
	}
	function T(e, t) {
		p(t), r?.(e, t), u(!1);
	}
	function D() {
		u(!1), i ? i() : a && ft(a, c);
	}
	return S ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: y,
		onClick: w,
		className: K("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? S.name : void 0,
		children: [/* @__PURE__ */ _(_n, {
			name: S.name,
			src: S.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ _("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: S.name
			}), Fn(S) && /* @__PURE__ */ _("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: Fn(S)
			})]
		}), /* @__PURE__ */ _(j, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && ue(/* @__PURE__ */ v("div", {
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
					/* @__PURE__ */ _(_n, {
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
					t === f && /* @__PURE__ */ _(E, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, `${e.name}-${e.email ?? t}`)),
			C && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				type: "button",
				onClick: D,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(B, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ _("span", { children: o })]
			})] })
		]
	}), d ?? document.body)] }) : null;
}
function Ln({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: i }) {
	let [a, o] = h(!1), c = Nt(), l = m(null), u = m(null), { accentColor: d, setAccentColor: f, reducedMotion: p, setReducedMotion: b, colorMode: x, setColorMode: S } = pn(), { toast: C } = wn(), w = !!(t || r), T = s(() => o(!1), []);
	dn(a, T, [u], [l]), ln(a, l, u, {
		...Mn,
		onAnchorHidden: T
	});
	function D() {
		o(!a);
	}
	function O() {
		o(!1), r ? r() : t && ft(t, i);
	}
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: l,
		onClick: D,
		className: K("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", a ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ _(oe, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ _("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), a && ue(/* @__PURE__ */ v("div", {
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
					Icon: ne
				},
				{
					value: "light",
					label: "Light",
					Icon: se
				},
				{
					value: "system",
					label: "System",
					Icon: V
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
					x === e && /* @__PURE__ */ _(E, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, e)),
			/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accent"
			}),
			/* @__PURE__ */ _("div", {
				className: "flex flex-wrap gap-1.5 px-3 pb-2",
				children: Kt.map((e) => /* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => f(e.value),
					className: K("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", d === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
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
					p && /* @__PURE__ */ _(E, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}),
			w && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				type: "button",
				onClick: O,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(oe, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ _("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), c ?? document.body)] });
}
function Rn({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: i, onSignOut: a, signOutPath: o, signOutLabel: c, settingsPath: l, settingsLabel: u, onOpenSettings: d, currentPath: f, onNavigate: p, headerActions: g, className: y }) {
	let { sidebarCollapsed: b, sidebarWidth: x, setSidebarWidth: S } = pn(), [C, w] = h(/* @__PURE__ */ new Set()), T = m(null), E = m(!1), [D, k] = h(!1), A = s((e) => {
		if (b) return;
		e.preventDefault(), E.current = !0, k(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!E.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			S(Math.max(kn, Math.min(n, An)));
		}, n = () => {
			E.current = !1, k(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
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
		className: K("bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", !D && "transition-[width] duration-[200ms] ease-out", "border-border", y),
		style: { width: b ? jn : x },
		children: [
			!b && /* @__PURE__ */ _("div", {
				onMouseDown: A,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ _("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ _(Pn, {
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
							}), /* @__PURE__ */ _(O, { className: K("h-3 w-3 shrink-0 transition-transform", n && "-rotate-90") })]
						}), (!n || b) && /* @__PURE__ */ _("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _(Nn, {
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
				children: [/* @__PURE__ */ _(Ln, {
					collapsed: b,
					settingsPath: l,
					settingsLabel: u,
					onOpenSettings: d,
					onNavigate: p
				}), n.length > 0 && /* @__PURE__ */ _("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ _(In, {
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
function zn(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function Bn({ homeLabel: e = "Dashboard", labels: t = {}, parents: n = {}, currentPath: r = "/", onNavigate: i, className: a }) {
	let o = r.split("?")[0].split("/").filter(Boolean), s = [{
		label: e,
		path: "/"
	}, ...o.map((e, r) => {
		let i = o[r - 1];
		return {
			label: t[e] || n[i] || zn(e),
			path: "/" + o.slice(0, r + 1).join("/")
		};
	})];
	return /* @__PURE__ */ _("nav", {
		"aria-label": "Breadcrumb",
		className: K("font-navigation flex items-center gap-1 text-xs", a),
		children: /* @__PURE__ */ _("ol", {
			className: "flex items-center gap-1",
			children: s.map((e, t) => {
				let n = t === s.length - 1;
				return /* @__PURE__ */ v("li", {
					className: "flex items-center gap-1",
					children: [t > 0 && /* @__PURE__ */ _(A, { className: "text-text-tertiary h-3 w-3" }), n ? /* @__PURE__ */ _("span", {
						className: "text-text-primary font-medium",
						children: e.label
					}) : /* @__PURE__ */ _("a", {
						href: e.path,
						onClick: (t) => dt(t, e.path, i),
						className: K("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
						children: e.label
					})]
				}, e.path);
			})
		})
	});
}
//#endregion
//#region src/hooks/useApplyTheme.ts
function Vn() {
	let { setPreferredDarkTheme: e, setPreferredLightTheme: t, setColorMode: n } = pn();
	return s((r) => {
		zt(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/providers/ControlSizeContext.ts
var Hn = r("compact");
function Un(e) {
	let t = c(Hn);
	return e ?? t;
}
//#endregion
//#region src/components/ui/Button.tsx
var Wn = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover"
}, Gn = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, Kn = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, qn = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, Jn = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, Yn = {
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
}, Xn = a(({ variant: e = "secondary", size: t = "md", controlSize: n, loading: r, icon: i, hideLabel: a, className: o, children: s, disabled: c, ...l }, u) => {
	let d = Un(n), f = e === "icon", p = a === !0 ? "sm" : a === !1 ? void 0 : a;
	return /* @__PURE__ */ v("button", {
		type: "button",
		ref: u,
		"data-control-size": d,
		"data-variant": e,
		"data-size": t,
		"data-hide-label": p && !f ? "" : void 0,
		disabled: c || r,
		className: K("ui-sized-control inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", Wn[e], f ? Kn[t] : Gn[t], p && !f && Yn[p]?.[t], o),
		...l,
		children: [
			r && /* @__PURE__ */ _(z, { className: "h-3.5 w-3.5 animate-spin" }),
			i && !r && /* @__PURE__ */ _(i, { className: qn[t] }),
			s && (p ? /* @__PURE__ */ _("span", {
				className: Jn[p],
				children: s
			}) : s)
		]
	});
});
Xn.displayName = "Button";
//#endregion
//#region src/components/ui/SectionHeader.tsx
function Zn({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ _(t, {
		className: K("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
function Qn({ haspopup: e, matchWidth: t = !1, disabled: n = !1, labelled: r = !1 }) {
	let [i, a] = h(!1), o = i && !n, c = m(null), l = m(null), d = m(null), f = m(null), p = u(), g = `${p}-label`, _ = `${p}-trigger`, v = `${p}-popup`, y = s((e) => {
		let t = f.current, n = t?.ownerDocument.activeElement ?? null, r = !!t && t.contains(n), i = !n || n === t?.ownerDocument.body;
		a(!1), e === "escape" || e === "select" && (r || i) ? d.current?.focus() : e === "anchor-hidden" && r && d.current?.focus({ preventScroll: !0 });
	}, []);
	return dn(o, y, [c]), ln(o, l, f, {
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
var $n = {
	text: "",
	at: 0
};
function er() {
	return performance.now();
}
function tr(e) {
	return e.key.length !== 1 || e.metaKey ? !1 : e.ctrlKey && e.altKey && e.getModifierState?.("AltGraph") ? !0 : !e.ctrlKey && !e.altKey;
}
function nr(e, t) {
	return e.text !== "" && t - e.at <= 500;
}
function rr(e, t, n) {
	return {
		text: nr(e, n) ? e.text + t : t,
		at: n
	};
}
function ir(e, t, n, r) {
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
function ar() {
	let e = m($n);
	return {
		push(t) {
			return e.current = rr(e.current, t, er()), e.current.text;
		},
		active() {
			return nr(e.current, er());
		},
		clear() {
			e.current = $n;
		}
	};
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function or({ options: e, value: t, onChange: n, label: r, placeholder: i = "Select...", className: a, size: o = "md" }) {
	let [s, c] = h(-1), { open: u, show: d, close: f, rootRef: p, anchorRef: g, triggerRef: y, popupRef: b, labelId: x, popupId: S, triggerAria: C } = Qn({
		haspopup: "listbox",
		matchWidth: !0,
		labelled: !!r
	}), w = ar(), T = m(!1), D = m(!1), k = (e) => `${S}-option-${e}`, A = e.find((e) => e.value === t), j = m(!1);
	l(() => {
		j.current && !u && w.clear(), j.current = u;
	}), l(() => {
		!u || !T.current || (T.current = !1, document.getElementById(k(s))?.scrollIntoView({ block: "nearest" }));
	});
	function M() {
		let n = e.findIndex((e) => e.value === t);
		w.clear(), F(n >= 0 && !e[n].disabled ? n : L(1)), d();
	}
	function N(e) {
		n(e.value), f("select");
	}
	function P(e) {
		D.current && (D.current = !1, e.detail === 0) || (u ? f("toggle") : M());
	}
	function F(e) {
		T.current = !0, c(e);
	}
	function I(t, n) {
		for (let r = t + n; r >= 0 && r < e.length; r += n) if (!e[r].disabled) return r;
		return t;
	}
	function L(t) {
		let n = I(t === 1 ? -1 : e.length, t);
		return n >= 0 && n < e.length ? n : -1;
	}
	function R(r) {
		r.preventDefault();
		let i = w.push(r.key), a = e.map((e) => e.label), o = (t) => !!e[t].disabled;
		if (u) {
			let e = ir(a, o, s, i);
			e !== -1 && F(e);
		} else {
			let r = ir(a, o, e.findIndex((e) => e.value === t), i);
			r !== -1 && e[r].value !== t && n(e[r].value);
		}
	}
	function z(e) {
		e.key === " " && D.current && e.preventDefault();
	}
	function B(t) {
		if (D.current = !1, t.key === " " && (u || w.active()) && (D.current = !0), tr(t) && (t.key !== " " || w.active())) {
			R(t);
			return;
		}
		if (!u) {
			(t.key === "ArrowDown" || t.key === "ArrowUp") && (t.preventDefault(), M());
			return;
		}
		switch (t.key) {
			case "ArrowDown":
				t.preventDefault(), F(I(s, 1));
				break;
			case "ArrowUp":
				t.preventDefault(), F(I(s, -1));
				break;
			case "Home":
				t.preventDefault();
				{
					let e = L(1);
					e !== -1 && F(e);
				}
				break;
			case "End":
				t.preventDefault();
				{
					let e = L(-1);
					e !== -1 && F(e);
				}
				break;
			case "Enter":
			case " ": {
				t.preventDefault();
				let n = e[s];
				n && !n.disabled && N(n);
				break;
			}
			case "Escape":
				t.preventDefault(), f("escape");
				break;
		}
	}
	return /* @__PURE__ */ v("div", {
		className: K("flex flex-col gap-1.5", a),
		ref: p,
		children: [r && /* @__PURE__ */ _("span", {
			id: x,
			className: "ui-field-label font-label text-xs font-medium",
			children: r
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			ref: g,
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: P,
					onKeyDown: B,
					onKeyUp: z,
					ref: y,
					...C,
					"aria-activedescendant": u && s >= 0 ? k(s) : void 0,
					className: K("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", o === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7"),
					children: A ? A.label : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ _(O, { className: K("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", o === "sm" ? "right-1.5" : "right-2", u && "rotate-180") }),
				u && /* @__PURE__ */ _("div", {
					ref: b,
					className: K("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
					children: /* @__PURE__ */ _("ul", {
						id: S,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: e.map((e, n) => /* @__PURE__ */ v("li", {
							id: k(n),
							role: "option",
							"aria-selected": e.value === t,
							"aria-disabled": e.disabled || void 0,
							onClick: () => {
								e.disabled || N(e);
							},
							onMouseEnter: () => {
								e.disabled || c(n);
							},
							className: K("font-control flex h-7 w-full items-center gap-2 px-3 text-xs", !e.disabled && "cursor-pointer", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : n === s ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
							children: [/* @__PURE__ */ _("span", {
								className: "flex-1 truncate",
								children: e.label
							}), e.value === t && /* @__PURE__ */ _(E, { className: "h-3 w-3 shrink-0" })]
						}, e.value))
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/Slider.tsx
var sr = new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"Home",
	"End",
	"PageUp",
	"PageDown"
]);
function cr({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, "aria-label": s, "aria-labelledby": c, id: l, showValue: d, className: f }) {
	let p = u(), m = l ?? p, h = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ v("div", {
		className: K("flex flex-col gap-1.5", f),
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
				sr.has(e.key) && a(Number(e.target.value));
			} : void 0,
			className: "bg-bg-tertiary [&::-webkit-slider-thumb]:bg-accent h-1.5 w-full cursor-pointer appearance-none rounded-md [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[100ms] [&::-webkit-slider-thumb]:hover:scale-110",
			style: { background: `linear-gradient(to right, var(--accent) ${h}%, var(--bg-tertiary) ${h}%)` }
		})]
	});
}
//#endregion
//#region src/components/ui/ThemePreview.tsx
function lr({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ v("button", {
		type: "button",
		onClick: i,
		className: K("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
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
function ur({ checked: e, onChange: t, disabled: n, label: r, className: i }) {
	return /* @__PURE__ */ v("label", {
		className: K("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", i),
		style: { gap: 10 },
		children: [/* @__PURE__ */ _("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			disabled: n,
			onClick: () => t(!e),
			className: K("relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary ui-switch-off", !n && "cursor-pointer"),
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
var dr = "open-theme-menu";
function fr(e = dr) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
//#endregion
//#region src/components/app-shell/ThemeMenu.tsx
var pr = [
	{
		value: "dark",
		label: "Dark",
		Icon: ne
	},
	{
		value: "light",
		label: "Light",
		Icon: se
	},
	{
		value: "system",
		label: "System",
		Icon: V
	}
];
function mr({ className: e, respondToOpenEvent: t = !0 }) {
	let [n, r] = h(!1), i = Nt(), [a, o] = h(!1), c = m(null), u = m(null), d = pn(), f = Vn(), { toast: p } = wn(), y = s(() => {
		r(!1), o(!1);
	}, []);
	dn(n, y, [u], [c], { outsideClick: !a }), ln(n, c, u, {
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
		return document.addEventListener(dr, e), () => document.removeEventListener(dr, e);
	}, [t]);
	let { colorMode: x, setColorMode: S, preferredDarkTheme: C, preferredLightTheme: w, accentColor: T, setAccentColor: E, fontSize: D, setFontSize: O, uiFont: k, setUiFont: A, headingFont: j, setHeadingFont: M, proseFont: N, setProseFont: P, codeFont: F, setCodeFont: I, borderRadius: L, setBorderRadius: R, borderWidth: z, setBorderWidth: B, tracking: ee, setTracking: te, lineHeight: V, setLineHeight: ne, density: H, setDensity: ie, reducedMotion: ae, setReducedMotion: oe, saveThemeCustomization: se, resetThemeCustomization: ce, hasThemeOverrides: U, isCustomized: le, resolvedTheme: W } = d;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("button", {
		type: "button",
		ref: c,
		onClick: b,
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": n,
		title: "Theme",
		className: K("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", n ? "text-accent bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", e),
		children: /* @__PURE__ */ _(re, { className: "h-4 w-4" })
	}), n && ue(/* @__PURE__ */ _("div", {
		ref: u,
		role: "dialog",
		"aria-label": "Theme settings",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] flex w-80 flex-col overflow-y-auto rounded-md border p-3 shadow-lg",
		style: { maxHeight: "80vh" },
		children: /* @__PURE__ */ v("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(Zn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ _("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: pr.map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ v("button", {
						type: "button",
						onClick: () => S(e),
						className: K("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", x === e ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ _(n, { className: "h-3.5 w-3.5" }), t]
					}, e))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(Zn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: Vt.map((e) => /* @__PURE__ */ _(lr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: C === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(Zn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: Bt.map((e) => /* @__PURE__ */ _(lr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: w === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(Zn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ _("div", {
					className: "flex flex-wrap gap-1.5",
					children: Kt.map((e) => /* @__PURE__ */ _("button", {
						type: "button",
						onClick: () => E(e.value),
						className: K("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", T === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: e.color,
							...T === e.value ? { "--utility-ring-color": e.color } : {}
						},
						title: e.value.charAt(0).toUpperCase() + e.value.slice(1),
						"aria-label": e.value
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(Zn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ v("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ _(or, {
							label: "UI / Body",
							size: "sm",
							options: Gt,
							value: k,
							onChange: (e) => A(e)
						}),
						/* @__PURE__ */ _(or, {
							label: "Headings",
							size: "sm",
							options: Gt,
							value: j,
							onChange: (e) => M(e)
						}),
						/* @__PURE__ */ _(or, {
							label: "Prose",
							size: "sm",
							options: Gt,
							value: N,
							onChange: (e) => P(e)
						}),
						/* @__PURE__ */ _(or, {
							label: "Code",
							size: "sm",
							options: Gt,
							value: F,
							onChange: (e) => I(e)
						})
					]
				})] }),
				/* @__PURE__ */ v("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ _(cr, {
							label: "Font size",
							min: 11,
							max: 18,
							value: D,
							onChange: O,
							showValue: !0
						}),
						/* @__PURE__ */ _(cr, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: L,
							onChange: R,
							showValue: !0
						}),
						/* @__PURE__ */ _(cr, {
							label: "Border width",
							min: 1,
							max: 3,
							value: z,
							onChange: B,
							showValue: !0
						}),
						/* @__PURE__ */ _(cr, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: ee,
							onChange: te,
							showValue: !0
						}),
						/* @__PURE__ */ _(cr, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: V,
							onChange: ne,
							showValue: !0
						}),
						/* @__PURE__ */ _(cr, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: H,
							onChange: ie,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ _(ur, {
					label: "Reduced motion",
					checked: ae,
					onChange: oe
				}),
				/* @__PURE__ */ v("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ _(Xn, {
						variant: "primary",
						size: "sm",
						disabled: !le,
						onClick: () => {
							se(), p("success", `Saved customization for ${Lt.find((e) => e.value === W)?.label ?? W}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ _(Xn, {
						variant: "secondary",
						size: "sm",
						disabled: !U && !le,
						onClick: () => {
							ce(), p("info", "Reset to theme defaults");
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
var hr = [
	"dark",
	"light",
	"system"
], gr = {
	dark: ne,
	light: se,
	system: V
}, _r = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function vr({ onMobileMenuToggle: e, breadcrumbs: t, navItems: n = [], navLabel: r = "Primary", showCommandTrigger: i = !0, commandTriggerLabel: a = "Search", commandShortcut: o = Dt, currentPath: s, onNavigate: c, onCommandTrigger: l, actions: u }) {
	let { sidebarCollapsed: d, setSidebarCollapsed: f, colorMode: p, setColorMode: m } = pn();
	function h() {
		m(hr[(hr.indexOf(p) + 1) % hr.length]);
	}
	let y = gr[p], b = n.length > 0;
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
					children: /* @__PURE__ */ _(ee, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => f(!d),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": d ? "Expand sidebar" : "Collapse sidebar",
					children: _(d ? ie : H, { className: "h-4 w-4" })
				}),
				(b || t !== !1) && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "bg-border hidden h-4 w-px md:block" }), b ? /* @__PURE__ */ _(yr, {
					items: n,
					label: r,
					currentPath: s,
					onNavigate: c
				}) : t === !1 ? null : /* @__PURE__ */ _(Bn, {
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
					onClick: l ?? (() => Ot()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ _(ae, { className: "h-3 w-3" }),
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
					"aria-label": `Color mode: ${_r[p]}. Click to cycle.`,
					title: _r[p],
					children: /* @__PURE__ */ _(y, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _(mr, {})
			]
		})]
	});
}
function yr({ items: e, label: t, currentPath: n, onNavigate: r }) {
	return /* @__PURE__ */ _("nav", {
		className: "hidden min-w-0 items-center gap-1 md:flex",
		"aria-label": t,
		children: e.map((e) => {
			let t = e.icon, i = ut(e, n), a = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
			return /* @__PURE__ */ v("a", {
				href: e.href ?? e.path,
				target: e.target,
				rel: a,
				"aria-current": i ? "page" : void 0,
				onClick: (t) => {
					e.reloadDocument || dt(t, e.path, r);
				},
				className: K("font-navigation flex h-6 max-w-40 items-center gap-1 rounded px-2 text-xs transition-colors duration-[100ms]", i ? "bg-accent-muted text-accent" : "text-text-tertiary hover:bg-bg-hover hover:text-text-primary"),
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
function br({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: l, signOutPath: u, signOutLabel: d, settingsPath: f, settingsLabel: m, onOpenSettings: g, showCommandPalette: y = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, sidebarHeaderActions: C, topBarActions: w, topBarNavItems: T, topBarNavLabel: E, currentPath: D, onNavigate: O, mainClassName: k, className: A }) {
	let [j, M] = h(!1), N = p(() => t.flatMap((e) => e.items), [t]), P = a ?? N;
	return /* @__PURE__ */ v("div", {
		className: K("bg-bg-primary flex h-svh overflow-hidden", A),
		children: [
			/* @__PURE__ */ _("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ _(Rn, {
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
				children: [/* @__PURE__ */ _(vr, {
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
					className: K("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", k),
					children: e
				})]
			}),
			/* @__PURE__ */ _(pt, {
				items: i,
				currentPath: D,
				onNavigate: O
			}),
			/* @__PURE__ */ _(It, {
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
			y && P.length > 0 && /* @__PURE__ */ _(jt, {
				items: P,
				shortcut: S,
				onNavigate: O
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function xr({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: K("bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ _("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function Sr({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ v("a", {
		href: e,
		onClick: (t) => dt(t, e, n),
		className: K("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", r),
		children: [/* @__PURE__ */ _(S, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/FieldContext.ts
var Cr = r(null);
function wr(...e) {
	return [...new Set(e.flatMap((e) => e?.split(/\s+/).filter(Boolean) ?? []))].join(" ") || void 0;
}
//#endregion
//#region src/components/ui/Checkbox.tsx
var Tr = a(({ id: e, checked: t, indeterminate: n, onChange: r, label: i, ariaLabel: a, disabled: o, controlSize: s, className: d, "aria-label": f, "aria-describedby": p, "aria-invalid": h, required: g, ...y }, b) => {
	let x = u(), S = Un(s), C = c(Cr), w = e ?? C?.id ?? x, T = m(null);
	return l(() => {
		T.current && (T.current.indeterminate = !!n);
	}, [n]), /* @__PURE__ */ v("div", {
		className: K("ui-choice flex w-fit items-center gap-2.5", o ? "cursor-not-allowed opacity-40" : "cursor-pointer", d),
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
				"aria-describedby": wr(p, C?.describedBy),
				"aria-invalid": h ?? (C?.invalid || void 0),
				disabled: o,
				required: g ?? C?.required,
				onChange: (e) => r(e.target.checked, e),
				className: "ui-checkbox-input"
			}), /* @__PURE__ */ _("span", {
				className: "ui-checkbox-decoration",
				"aria-hidden": "true",
				children: n ? /* @__PURE__ */ _(te, { className: "h-3 w-3" }) : t ? /* @__PURE__ */ _(E, { className: "h-3 w-3" }) : null
			})]
		}), i && /* @__PURE__ */ _("label", {
			htmlFor: w,
			className: K("text-text-primary text-xs", o ? "cursor-not-allowed" : "cursor-pointer"),
			children: i
		})]
	});
});
Tr.displayName = "Checkbox";
//#endregion
//#region src/components/ui/FilterButton.tsx
var Er = a(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ v("button", {
		type: "button",
		ref: i,
		className: K("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ _(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ _("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function Dr(e) {
	return typeof e.header == "string" ? e.header : e.sortLabel ?? e.key;
}
function Or({ columns: e, hidden: n, onToggle: r, label: i = "Columns", heading: a = "Toggle columns", icon: o = M, onOnly: c, onlyLabel: l = "Only", footer: u }) {
	let [d, f] = h(!1), p = m(null);
	return dn(d, s(() => f(!1), []), [p]), /* @__PURE__ */ v("div", {
		className: "relative",
		ref: p,
		children: [/* @__PURE__ */ _(Er, {
			icon: o,
			onClick: () => f(!d),
			children: i
		}), d && /* @__PURE__ */ v("div", {
			className: K("bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 rounded-md border py-1 shadow-lg", c ? "w-56" : "w-48"),
			children: [e.map((i, o) => /* @__PURE__ */ v(t, { children: [(o === 0 || i.group !== e[o - 1].group) && /* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: i.group ?? a
			}), /* @__PURE__ */ v("div", {
				onClick: () => r(i.key),
				className: "group text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(Tr, {
						checked: !n.has(i.key),
						onChange: () => {},
						ariaLabel: Dr(i)
					}),
					/* @__PURE__ */ _("span", {
						className: "min-w-0 flex-1 truncate",
						children: i.header
					}),
					c && /* @__PURE__ */ _("button", {
						type: "button",
						"aria-label": `${l}: ${Dr(i)}`,
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
function kr({ page: e, totalPages: t, onPageChange: n }) {
	if (t <= 1) return null;
	let r = [];
	for (let n = 1; n <= t; n++) n === 1 || n === t || n >= e - 1 && n <= e + 1 ? r.push(n) : r[r.length - 1] !== "ellipsis" && r.push("ellipsis");
	return /* @__PURE__ */ v("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ _("button", {
				type: "button",
				disabled: e === 1,
				onClick: () => n(e - 1),
				className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30",
				"aria-label": "Previous page",
				children: /* @__PURE__ */ _(k, { className: "h-3.5 w-3.5" })
			}),
			r.map((t, r) => t === "ellipsis" ? /* @__PURE__ */ _("span", {
				className: "text-text-tertiary flex h-7 w-7 items-center justify-center text-xs",
				children: "..."
			}, `e${r}`) : /* @__PURE__ */ _("button", {
				type: "button",
				onClick: () => n(t),
				className: K("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ _("button", {
				type: "button",
				disabled: e === t,
				onClick: () => n(e + 1),
				className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30",
				"aria-label": "Next page",
				children: /* @__PURE__ */ _(A, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
//#endregion
//#region src/components/tables/sortRows.ts
function Ar(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/Table.tsx
function jr({ caption: e, captionHidden: t = !1, captionClassName: n, stickyHeader: r = !1, maxHeight: i, wrapperClassName: a, wrapperProps: o, beforeTable: s, className: c, children: l, ...u }) {
	return /* @__PURE__ */ v("div", {
		...o,
		className: K("ui-table-wrap", o?.className, a),
		style: {
			maxHeight: i,
			...i ? { overflow: "auto" } : {},
			...o?.style
		},
		children: [s, /* @__PURE__ */ v("table", {
			...u,
			className: K("ui-table", r && "ui-table-sticky", c),
			children: [e != null && /* @__PURE__ */ _("caption", {
				className: K(t && "sr-only", n),
				children: e
			}), l]
		})]
	});
}
function Mr({ className: e, ...t }) {
	return /* @__PURE__ */ _("thead", {
		...t,
		className: K("ui-table-head", e)
	});
}
function Nr({ className: e, ...t }) {
	return /* @__PURE__ */ _("tbody", {
		...t,
		className: K("ui-table-body", e)
	});
}
function Pr({ selected: e, interactive: t = !1, className: n, ...r }) {
	return /* @__PURE__ */ _("tr", {
		...r,
		"data-selected": e ? "" : void 0,
		className: K("ui-table-row", t && "ui-table-interactive", n)
	});
}
function Fr({ numeric: e = !1, align: t, sort: n, scope: r = "col", className: i, style: a, ...o }) {
	return /* @__PURE__ */ _("th", {
		...o,
		scope: r,
		"aria-sort": n ?? o["aria-sort"],
		className: K("ui-table-header-cell", e && "ui-table-numeric", i),
		style: {
			...t ? { textAlign: t } : {},
			...a
		}
	});
}
function Ir({ numeric: e = !1, align: t, nowrap: n = !1, className: r, style: i, ...a }) {
	return /* @__PURE__ */ _("td", {
		...a,
		className: K("ui-table-cell", e && "ui-table-numeric", n && "ui-table-nowrap", r),
		style: {
			...t ? { textAlign: t } : {},
			...i
		}
	});
}
function Lr({ colSpan: e, cellClassName: t, children: n, className: r, ...i }) {
	return /* @__PURE__ */ _("tr", {
		...i,
		className: K("ui-table-empty-row", r),
		children: /* @__PURE__ */ _("td", {
			colSpan: e,
			className: K("ui-table-empty-cell", t),
			children: n
		})
	});
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
var Rr = { "--ui-table-cell-padding-y": "0px" };
function zr({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: a = "No data", sortKey: o, sortDir: s, onSortChange: c, caption: l, loading: u = !1, loadingMessage: d = "Loading…", className: f, tableProps: m, getRowProps: g, isRowSelected: y }) {
	let b = c !== void 0, [S, w] = h(null), [T, E] = h("asc"), D = b ? o ?? null : S, O = b ? s ?? "asc" : T, k = p(() => b ? e : Ar(e, t, D, O), [
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
	return /* @__PURE__ */ v(jr, {
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
		className: K("font-data text-xs", m?.className),
		style: {
			...Rr,
			...m?.style
		},
		children: [/* @__PURE__ */ _(Mr, { children: /* @__PURE__ */ _(Pr, { children: t.map((e) => /* @__PURE__ */ _(Fr, {
			className: K("text-2xs h-7", e.sortable && "hover:text-text-table-header-hover cursor-pointer select-none"),
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
		}, e.key)) }) }), /* @__PURE__ */ _(Nr, { children: k.length === 0 ? /* @__PURE__ */ _(Lr, {
			colSpan: t.length,
			cellClassName: "h-32 px-0 text-center",
			children: u ? d : a
		}) : k.map((e) => {
			let a = g?.(e) ?? {}, o = y?.(e) ?? a["aria-selected"], s = o === !0 || o === "true";
			return /* @__PURE__ */ i(Pr, {
				tabIndex: r ? 0 : void 0,
				...a,
				key: n(e),
				selected: s,
				interactive: !!r,
				className: K("h-8", !s && "hover:bg-bg-hover", r && "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", a.className),
				onClick: (t) => {
					a.onClick?.(t), t.defaultPrevented || r?.(e);
				},
				onKeyDown: (t) => {
					a.onKeyDown?.(t), !(!r || t.defaultPrevented || t.repeat || t.target !== t.currentTarget || t.key !== "Enter" && t.key !== " ") && (t.preventDefault(), r(e));
				}
			}, t.map((t) => /* @__PURE__ */ _(Ir, {
				nowrap: !0,
				className: t.cellClassName,
				onClick: t.interactive ? (e) => e.stopPropagation() : void 0,
				children: t.render(e)
			}, t.key)));
		}) })]
	});
}
//#endregion
//#region src/components/ui/Alert.tsx
var Br = {
	neutral: "neutral",
	success: "success",
	warning: "warning",
	error: "danger",
	info: "info"
}, Vr = {
	neutral: R,
	success: D,
	warning: b,
	error: le,
	info: R
};
function Hr({ type: e, title: t, children: n, dismissible: r, className: i, actions: a, toneBody: o = !1, ...s }) {
	let [c, l] = h(!1);
	if (c) return null;
	let u = Sn(Br[e]), d = Vr[e], f = e === "neutral" ? "text-text-primary" : u.text;
	return /* @__PURE__ */ v("div", {
		...s,
		className: K("flex gap-2.5 rounded-md border p-3", u.fill, u.border, i),
		children: [
			/* @__PURE__ */ _(d, { className: K("mt-0.5 h-4 w-4 shrink-0", u.text) }),
			/* @__PURE__ */ v("div", {
				className: "min-w-0 flex-1",
				children: [t && /* @__PURE__ */ _("p", {
					className: K(o ? f : "text-text-primary", "mb-0.5 text-xs font-semibold"),
					children: t
				}), /* @__PURE__ */ _("div", {
					className: K(o ? f : "text-text-secondary", "text-xs"),
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
				children: /* @__PURE__ */ _(U, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/components/ui/AuthCard.tsx
function Ur({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ _("div", {
		className: K("relative z-10 w-full max-w-sm", a),
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
function Wr({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ v("div", {
		className: K("flex items-center gap-2", i),
		children: [/* @__PURE__ */ _(_n, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ v("div", { children: [/* @__PURE__ */ v("p", {
			className: K("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ _("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var Gr = "font-label inline-flex items-center rounded-md font-medium", Kr = {
	xs: "text-2xs gap-1 px-1.5",
	sm: "text-2xs gap-1.5 px-2 py-0.5",
	md: "text-xs gap-1.5 px-2.5 py-1"
}, qr = {
	xs: "h-1.5 w-1.5",
	sm: "h-1.5 w-1.5",
	md: "h-2 w-2"
}, Jr = "cursor-pointer transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40", Yr = {
	soft: "hover:text-text-primary",
	outline: "hover:border-border-strong hover:text-text-primary"
}, Xr = !1;
function Zr() {
	let e = !1;
	try {
		e = process.env.NODE_ENV !== "production";
	} catch {}
	!e || Xr || (Xr = !0, console.warn("[Badge] `selected` needs `onClick`; without it the badge renders as a static span and `selected` is ignored."));
}
var Qr = a(function(e, t) {
	let { color: n, variant: r = "soft", size: i = "sm", dot: a, selected: o, onClick: s, disabled: c, className: l, children: u, ...d } = e;
	o !== void 0 && !s && Zr();
	let f = s ? o : void 0, p = f !== void 0, m = yn[p && !f ? "gray" : n ?? (p ? "accent" : "gray")], h = K(Gr, Kr[i], r === "outline" ? K("border", m.outline) : m.soft, f && (r === "outline" ? m.fill : "ring"), s && Jr, p && !f && Yr[r], c && !s && "opacity-40", l), y = /* @__PURE__ */ v(g, { children: [a && /* @__PURE__ */ _("span", { className: K(qr[i], "rounded-full", m.dot) }), u] });
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
Qr.displayName = "Badge";
//#endregion
//#region src/components/ui/badgeColors.ts
var $r = yn, ei = /* @__PURE__ */ new Map();
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
	let n = ei.get(t);
	n || (n = new Intl.DateTimeFormat("en-GB-u-ca-iso8601-nu-latn", {
		timeZone: t,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}), ei.set(t, n));
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
function ti(e) {
	let t = /* @__PURE__ */ new Date(0);
	return t.setUTCFullYear(e.year, e.month - 1, e.day), t.setUTCHours(e.hour, e.minute, e.second, e.millisecond), t.getTime();
}
function ni(e, t, n = "compatible") {
	let r = ti(e), i = new Date(r);
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
		a.add(ti($(new Date(n), t)) - n);
	}
	let o = [...a].map((e) => r - e).sort((e, t) => e - t), s = o.filter((e) => ti($(new Date(e), t)) === r);
	if (s.length === 1) return new Date(s[0]);
	if (n === "reject") throw RangeError(s.length ? "This time occurs twice in the selected timezone" : "This time does not exist in the selected timezone");
	return s.length ? new Date(n === "later" ? s[s.length - 1] : s[0]) : new Date(n === "earlier" ? o[0] : o[o.length - 1]);
}
var ri = 1440, ii = 6e4, ai = [
	1,
	2,
	3,
	4,
	5
];
function oi(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function si(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function ci(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes() + t, e.getSeconds(), e.getMilliseconds());
}
function li(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes());
}
function ui(e, t = 1) {
	let n = oi(e);
	return si(n, -((n.getDay() - t + 7) % 7));
}
function di(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function fi(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function pi(e, t) {
	let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	return Math.round((n - r) / 864e5);
}
function mi(e) {
	return e.getHours() * 60 + e.getMinutes() + e.getSeconds() / 60 + e.getMilliseconds() / ii;
}
function hi(e, t) {
	let n = gi(e, t);
	if (!fi(n, e) || mi(n) <= t) return n;
	let r = Math.floor(t);
	for (; r > 0 && mi(gi(e, r - 1)) !== r - 1;) r--;
	return /* @__PURE__ */ new Date(n.getTime() - (t - r) * ii);
}
function gi(e, t) {
	let n = Math.floor(t);
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, n, Math.round((t - n) * 60));
}
function _i(e) {
	let t = /^(\d{1,2}):(\d{2})$/.exec(e.trim());
	if (!t) throw RangeError(`Invalid time "${e}", expected HH:mm`);
	let n = Number(t[1]), r = Number(t[2]);
	if (r > 59 || n > 24 || n === 24 && r > 0) throw RangeError(`Invalid time "${e}"`);
	return n * 60 + r;
}
function vi(e) {
	let t = Math.round(e), n = Math.floor(t / 60), r = t % 60;
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function yi(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function bi(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
	if (!t) throw RangeError(`Invalid date key "${e}"`);
	let n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
	if (yi(n) !== e) throw RangeError(`Invalid date key "${e}"`);
	return n;
}
function xi(e, t, n = "round") {
	if (t <= 0) return e;
	let r = n === "floor" ? Math.floor : n === "ceil" ? Math.ceil : Math.round, i = e / t;
	return r(n === "floor" ? i + 1e-9 : n === "ceil" ? i - 1e-9 : i) * t;
}
function Si(e, t, n = "round") {
	return gi(oi(e), xi(mi(e), t, n));
}
function Ci(e) {
	return e === "day" || e === "threeDay" || e === "workWeek" || e === "week";
}
function wi(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = oi(t);
	switch (e) {
		case "day":
		case "timeline": return [i];
		case "threeDay": return [
			i,
			si(i, 1),
			si(i, 2)
		];
		case "week": {
			let e = ui(i, r);
			return Array.from({ length: 7 }, (t, n) => si(e, n));
		}
		case "workWeek": {
			let e = new Set(n.workWeekDays ?? ai), t = ui(i, r), a = Array.from({ length: 7 }, (e, n) => si(t, n)).filter((t) => e.has(t.getDay()));
			return a.length ? a : [i];
		}
		case "agenda": {
			let e = Math.max(1, Math.floor(n.agendaDays ?? 7));
			return Array.from({ length: e }, (e, t) => si(i, t));
		}
		case "month": return Ti(t, r).flat();
	}
}
function Ti(e, t = 1) {
	let n = di(e), r = new Date(n.getFullYear(), n.getMonth() + 1, 0), i = ui(n, t), a = [], o = i;
	for (; o <= r || a.length === 0;) {
		let e = Array.from({ length: 7 }, (e, t) => si(o, t));
		a.push(e), o = si(o, 7);
	}
	return a;
}
function Ei(e, t, n = {}) {
	let r = wi(e, t, n);
	return {
		start: r[0],
		end: si(r[r.length - 1], 1)
	};
}
function Di(e, t, n, r = {}) {
	switch (e) {
		case "day":
		case "timeline": return si(t, n);
		case "threeDay": return si(t, 3 * n);
		case "week":
		case "workWeek": return si(t, 7 * n);
		case "agenda": return si(t, Math.max(1, r.agendaDays ?? 7) * n);
		case "month": return li(t, n);
	}
}
var Oi = /* @__PURE__ */ new Map();
function ki(e, t) {
	let n = `${e}|${JSON.stringify(t)}`, r = Oi.get(n);
	return r || (r = new Intl.DateTimeFormat(e, t), Oi.set(n, r)), r;
}
function Ai(e, t = {}) {
	return ki(t.locale ?? "en-GB", {
		timeZone: t.timeZone,
		timeZoneName: t.timeZone ? "short" : void 0,
		hour: t.hour12 ? "numeric" : "2-digit",
		minute: "2-digit",
		hourCycle: t.hour12 ? "h12" : "h23"
	}).format(e);
}
function ji(e, t, n = {}) {
	return `${Ai(e, n)}–${Ai(t, n)}`;
}
function Mi(e, t = {}) {
	if (!t.hour12) return vi(e);
	let n = gi(new Date(2e3, 0, 1), e);
	return ki(t.locale ?? "en-GB", {
		hour: "numeric",
		minute: e % 60 ? "2-digit" : void 0,
		hour12: !0
	}).format(n);
}
function Ni(e, t = "en-GB") {
	return ki(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e);
}
function Pi(e, t, n = {}) {
	let r = n.locale ?? "en-GB";
	if (e === "month") return ki(r, {
		month: "long",
		year: "numeric"
	}).format(t);
	let i = wi(e, t, n), a = i[0], o = i[i.length - 1];
	if (i.length === 1) return Ni(a, r);
	let s = a.getFullYear() === o.getFullYear(), c = s && a.getMonth() === o.getMonth(), l = ki(r, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	if (c) return `${a.getDate()} – ${l.format(o)}`;
	let u = ki(r, s ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	}), d = ki(r, {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return `${u.format(a)} – ${d.format(o)}`;
}
function Fi(e, t, n, r) {
	return e < r && n < t;
}
function Ii(e, t, n) {
	let r = oi(n), i = si(r, 1), a = e.getTime(), o = Math.max(t.getTime(), a);
	if (o === a) {
		if (a < r.getTime() || a >= i.getTime()) return null;
	} else if (!Fi(a, o, r.getTime(), i.getTime())) return null;
	let s = a < r.getTime(), c = o > i.getTime();
	return {
		startMinute: s ? 0 : mi(e),
		endMinute: o >= i.getTime() ? ri : Math.max(mi(t), s ? 0 : mi(e)),
		continuesBefore: s,
		continuesAfter: c
	};
}
function Li(e) {
	let t = e.filter(([e, t]) => t > e).map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]), n = [];
	for (let [e, r] of t) {
		let t = n[n.length - 1];
		t && e <= t[1] ? t[1] = Math.max(t[1], r) : n.push([e, r]);
	}
	return n;
}
function Ri(e, t, n) {
	let r = [], i = e;
	for (let [e, a] of Li(n)) if (!(a <= i) && (e >= t || (e > i && r.push([i, Math.min(e, t)]), i = Math.max(i, a), i >= t))) break;
	return i < t && r.push([i, t]), r;
}
function zi(e, t = 0) {
	let n = e.map((e) => ({
		id: e.id,
		start: e.start,
		end: Math.max(e.end, e.start + t)
	})).sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), r = /* @__PURE__ */ new Map(), i = [], a = [], o = -Infinity, s = () => {
		let e = a.length;
		for (let t of i) {
			let n = 1;
			for (let r = t.column + 1; r < e && !i.some((e) => e.column === r && Fi(t.start, t.end, e.start, e.end)); r++) n++;
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
function Bi(e) {
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
function Vi(e) {
	return e === void 0 ? [] : typeof e == "string" ? [e] : e;
}
function Hi(e, t, { emptyMatchesAll: n }) {
	if (t === void 0) return !0;
	let r = Vi(e);
	return r.length === 0 ? n : r.includes(t);
}
function Ui(e, t, n) {
	let r = Vi(e);
	if (t === void 0 || n === void 0 || t === n) return r.length ? [...r] : void 0;
	if (r.length === 0) return;
	let i = r.map((e) => e === t ? n : e);
	return [...new Set(i)];
}
function Wi(e, t, n = []) {
	let r = /* @__PURE__ */ new Set(), i = e.start.getTime(), a = e.end.getTime();
	for (let e of [...t, ...n]) if (Fi(e.start.getTime(), e.end.getTime(), i, a) && !("kind" in e && e.kind === "unavailable")) for (let t of Vi(e.resourceId)) r.add(t);
	return r;
}
function Gi(e, t, n = {}) {
	let { fromDateKey: r, wallDateAtMinutes: i, toDateKey: a, startOfWeek: o, startOfDay: s, addDays: c, differenceInDays: l, weekday: u } = Qi(n.timeZone), d = n.weekStartsOn ?? 1, f = [], p = t.start.getTime(), m = t.end.getTime();
	for (let n of e) {
		let e = _i(n.startTime), h = _i(n.endTime);
		h <= e && (h += ri);
		let g = r(n.startDate), _ = (t) => {
			let r = i(t, e), o = i(t, h);
			if (o <= r || !Fi(r.getTime(), o.getTime(), p, m)) return;
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
function Ki(e, t, n, r, i) {
	let a = xi(t, r, "floor"), o = xi(n, r, "floor"), s = q(Math.min(a, o), i.min, i.max - r), c = q(Math.max(a, o) + r, s + r, i.max), l = hi(e, s), u = hi(e, c);
	return u <= l && (u = new Date(l.getTime() + r * ii)), {
		start: l,
		end: u
	};
}
function qi(e, t, n, r, i, a) {
	let o = (e.end.getTime() - e.start.getTime()) / ii, s = xi(n - r, i), c = mi(e.start);
	c >= a.min && c + o <= a.max && (s = q(s, a.min, a.max - o));
	let l = gi(t, s);
	return {
		start: l,
		end: new Date(l.getTime() + o * ii)
	};
}
function Ji(e, t, n, r, i) {
	let a = oi(t), o = e.start.getTime() >= a.getTime() ? mi(e.start) + r : r;
	return hi(a, q(xi(n, r), Math.min(o, ri), Math.max(i.max, o)));
}
function Yi(e, t) {
	return {
		start: si(e.start, t),
		end: si(e.end, t)
	};
}
function Xi(e, t) {
	return e.start.getTime() === t.start.getTime() && e.end.getTime() === t.end.getTime();
}
function Zi(e) {
	return e.allDay ? !0 : e.end.getTime() >= si(e.start, 1).getTime();
}
function Qi(e) {
	let t = (t) => $(t, e), n = (t) => ni(t, e), r = (e) => {
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
		let i = t(e), a = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, Math.floor(r), 0, Math.round((r - Math.floor(r)) * ii)));
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
		return u(e, n) * ri + r.hour * 60 + r.minute + r.second / 60 + r.millisecond / ii;
	}, p = (t, n) => {
		let r = d(t, n), i = f(r, t);
		if (!e || i <= n + 1e-8) return r;
		let a = Math.floor(r.getTime() - (i - n) * ii), o = r.getTime();
		for (; a < o;) {
			let e = Math.floor((a + o) / 2);
			f(new Date(e), t) < n ? a = e + 1 : o = e;
		}
		return new Date(o);
	}, m = (e) => {
		if (!Number.isFinite(e.min) || !Number.isFinite(e.max) || e.max <= e.min) throw RangeError("Calendar time bounds must contain a positive interval of real instants");
	}, h = e ? (e, t) => new Date(i(e).getTime() + t * ii) : gi, g = e ? (e) => (e.getTime() - i(e).getTime()) / ii : mi, _ = e ? (e, t) => new Date(e.getTime() + t * ii) : ci, v = (e) => {
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
			let o = new Set(n.workWeekDays ?? ai), l = i.filter((e) => o.has(s(e)));
			return l.length ? l : [r];
		}
		let o = e === "threeDay" ? 3 : e === "agenda" ? Math.max(1, Math.floor(n.agendaDays ?? 7)) : 1;
		return Array.from({ length: o }, (e, t) => a(r, t));
	}, x = (t, n, r) => {
		if (!e) return Ii(t, n, r);
		let o = i(r).getTime(), s = a(i(r), 1).getTime(), c = t.getTime(), l = Math.max(c, n.getTime());
		return (l === c ? c < o || c >= s : !Fi(c, l, o, s)) ? null : {
			startMinute: Math.max(0, (c - o) / ii),
			endMinute: Math.min(s - o, l - o) / ii,
			continuesBefore: c < o,
			continuesAfter: l > s
		};
	}, S = (e) => !!e.allDay || e.end >= a(e.start, 1), C = (t, n) => ki(t, {
		...n,
		...e ? { timeZone: e } : {}
	}), w = (e, t = "en-GB") => C(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e), T = (n, r, i = {}) => {
		if (!e) return Pi(n, r, i);
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
		if (!e) return qi(n, r, i, a, o, s);
		m(s);
		let c = (n.end.getTime() - n.start.getTime()) / ii, l = xi(i - a, o), f = (e) => {
			let n = h(r, e), i = t(n);
			return u(n, r) * ri + i.hour * 60 + i.minute;
		}, p = d(n.start, f(s.min)), g = d(n.start, f(s.max));
		n.start >= p && n.end <= g && c <= s.max - s.min && (l = q(l, s.min, s.max - c));
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
			if (!e) return Ki(t, n, r, i, a);
			let o = xi(n, i, "floor"), s = xi(r, i, "floor");
			m(a);
			let c = Math.min(i, a.max - a.min), l = q(Math.min(o, s), a.min, a.max - c);
			return {
				start: h(t, l),
				end: h(t, q(Math.max(o, s) + i, l + c, a.max))
			};
		},
		computeMoveRange: E,
		computeResizeEnd: (t, n, r, a, o) => {
			if (!e) return Ji(t, n, r, a, o);
			m(o);
			let s = Math.max(0, (t.start.getTime() - i(n).getTime()) / ii) + a;
			return h(n, q(xi(r, a), s, Math.max(o.max, s)));
		},
		computeNudgeRange: (e, t, n) => E(e, i(e.start), g(e.start) + t, 0, 1, n),
		shiftRangeDays: (t, n) => {
			if (!e) return Yi(t, n);
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
				min: (p(t, n.min).getTime() - r) / ii,
				max: (p(t, n.max).getTime() - r) / ii
			};
			return m(a), a;
		}
	};
}
function $i(e, t, n, r, i = !0) {
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
	let s = Qi(n.timeZone), c = /* @__PURE__ */ new Map(), l = e.map(({ day: e, bounds: t }) => {
		let i = s.toDateKey(e), a = c.get(i);
		if (a) return a;
		let l = o(t), u = l.map((t) => s.dateAtMinutes(e, t)), d = u.map((e) => Ai(e, n)), f = ki(n.locale ?? "en-GB", {
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
var ea = r(null);
function ta() {
	let e = c(ea);
	if (!e) throw Error("Calendar views must render inside <Calendar>");
	return e;
}
//#endregion
//#region src/components/ui/calendar/AgendaView.tsx
function na({ days: e, events: t, availability: n, label: r }) {
	let i = ta(), { daySegment: a, eventsOnDay: o, getFormatter: s, isAllDayLike: c, isSameDay: l, toDateKey: u } = i.dates, d = s(i.locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}), f = (e) => Vi(e).map((e) => i.resourceById.get(e)?.title).filter(Boolean).join(", ");
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
					className: K("ui-cal-agenda-day border-border border-b px-3 py-1.5 text-xs font-semibold", s ? "text-accent" : "text-text-primary"),
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
					children: r.map((e) => /* @__PURE__ */ _("li", { children: e.type === "event" ? /* @__PURE__ */ _(ra, {
						event: e.value,
						resources: f(e.value.resourceId)
					}) : /* @__PURE__ */ _(ia, {
						block: e.value,
						resources: f(e.value.resourceId)
					}) }, `${e.type}:${e.value.id}`))
				})]
			}, u(e));
		})
	});
}
function ra({ event: e, resources: t }) {
	let n = ta(), { isAllDayLike: r } = n.dates, i = n.statusLabel(e), a = r(e) ? n.labels.allDay : ji(e.start, e.end, n);
	return /* @__PURE__ */ v("div", {
		role: "button",
		tabIndex: 0,
		"aria-label": n.describeEvent(e),
		"data-status": e.status ?? "confirmed",
		className: K("ui-cal-agenda-row hover:bg-bg-hover flex cursor-pointer items-start gap-3 px-3 py-2 transition-colors duration-[100ms]", `ui-cal-c-${n.eventColor(e)}`),
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
function ia({ block: e, resources: t }) {
	let n = ta(), r = e.kind ?? "available", i = r === "available" ? n.labels.available : n.labels.unavailable, a = n.hasBlockClick;
	return /* @__PURE__ */ v("div", {
		role: a ? "button" : void 0,
		tabIndex: a ? 0 : void 0,
		"aria-label": n.describeBlock(e),
		className: K("text-text-tertiary flex items-start gap-3 px-3 py-1.5 text-2xs", a && "hover:bg-bg-hover cursor-pointer transition-colors duration-[100ms]", `ui-cal-c-${n.blockColor(e)}`),
		onClick: a ? () => n.clickBlock(e) : void 0,
		onKeyDown: a ? (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickBlock(e));
		} : void 0,
		children: [
			/* @__PURE__ */ _("span", {
				className: "font-mono w-24 shrink-0",
				children: ji(e.start, e.end, n)
			}),
			/* @__PURE__ */ _("span", {
				className: K("ui-cal-agenda-swatch mt-0.5", r === "unavailable" && "ui-cal-agenda-swatch-off"),
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
var aa = 96, oa = 224;
function sa(e) {
	return `${e.type}:${e.value.id}`;
}
function ca({ date: e, events: t, availability: n, label: r }) {
	let i = ta(), { addDays: a, daySegment: o, differenceInDays: c, eventsOnDay: u, formatLongDate: d, fromDateKey: g, getFormatter: y, getMonthWeeks: b, isAllDayLike: x, isSameDay: S, shiftRangeDays: C, toDateKey: w } = i.dates, T = p(() => b(e, i.weekStartsOn), [
		e,
		i.weekStartsOn,
		b
	]), E = m(null), D = m(null), [O, k] = h(null), [A, j] = h(null), M = Nt(), N = m(null), [P, F] = h(null), [I, L] = h(null), R = m(null), z = m(i);
	f(() => {
		z.current = i;
	}), l(() => {
		let e = R;
		return () => {
			e.current?.cleanup(), e.current = null;
		};
	}, []);
	let B = m(!1), [ee, te] = h(null);
	l(() => {
		let e = E.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			te(e[0]?.contentRect.height ?? null);
		});
		return t.observe(e), () => t.disconnect();
	}, []);
	let V = s(() => j(null), []);
	dn(A !== null, V, [D]), un(A !== null, N, D, (e, t) => {
		let n = Math.max(e.width, oa);
		return {
			top: Math.max(8, e.top),
			left: Math.max(8, Math.min(e.left, t - n - 8)),
			width: n
		};
	}), l(() => {
		A && D.current?.querySelector("[data-cal-close]")?.focus();
	}, [A]);
	let ne = i.editLayer === "availability", re = i.dates.parts(e).month, H = p(() => T.flat(), [T]), ie = w(i.now), ae = H.find((e) => w(e) === ie && i.dates.parts(e).month === re) ?? H.find((t) => i.dates.parts(t).month === re && i.dates.parts(t).day === i.dates.parts(e).day) ?? H.find((e) => i.dates.parts(e).month === re) ?? H[0], oe = O && H.some((e) => w(e) === O) ? O : w(ae), se = p(() => {
		let e = /* @__PURE__ */ new Map();
		for (let r of H) {
			let i = u(t, r).map((e) => ({
				type: "event",
				value: e
			})), a = n.filter((e) => o(e.start, e.end, r)).sort((e, t) => e.start.getTime() - t.start.getTime()), s = a.some((e) => (e.kind ?? "available") === "available"), c = ne ? a.map((e) => ({
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
		H,
		t,
		n,
		ne,
		u,
		o,
		w
	]), ce = y(i.locale, { weekday: "short" }), le = i.monthMaxEvents ?? (ee ? Math.max(1, Math.floor((Math.max(ee / T.length, aa) - 28) / 20)) : 3);
	function W(e) {
		let t = w(e);
		k(t), requestAnimationFrame(() => {
			E.current?.querySelector(`[data-cal-date="${t}"]`)?.focus();
		});
	}
	function G(e, t) {
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
			H.some((e) => S(e, r)) && W(r);
		} else if (e.key === "Home" || e.key === "End") {
			e.preventDefault();
			let n = (i.dates.weekday(t) - i.weekStartsOn + 7) % 7;
			W(a(t, e.key === "Home" ? -n : 6 - n));
		} else (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i.openDay(t));
	}
	function de(e) {
		return e.type === "event" ? i.canEditEvent(e.value) : i.canEditBlock(e.value);
	}
	function fe(e, t) {
		let n = {
			action: "move",
			...C(e.value, t),
			resourceIds: Ui(e.value.resourceId, void 0, void 0)
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
	function pe(e) {
		e.type === "event" ? i.clickEvent(e.value) : i.clickBlock(e.value);
	}
	function me(e, t, n) {
		if (e.button !== 0 || R.current || (e.stopPropagation(), e.pointerType === "touch" || !de(t))) return;
		let r = (e) => {
			let t = R.current;
			if (!t || e.pointerId !== t.pointerId) return;
			if (!t.started) {
				if (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) < 4) return;
				t.started = !0, L(sa(t.item));
			}
			let n = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-cal-date]"), r = n && E.current?.contains(n) ? n.dataset.calDate ?? null : null;
			t.overKey = r ?? void 0, F(r);
		}, i = (e) => {
			let t = R.current;
			if (!t || (R.current = null, t.cleanup(), F(null), L(null), t.started && (B.current = !0, setTimeout(() => {
				B.current = !1;
			}, 0)), !e || !t.started || !t.overKey || t.overKey === t.originKey)) return;
			let n = c(g(t.overKey), g(t.originKey));
			z.current.commit(fe(t.item, n), "pointer");
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
	function he(e) {
		B.current || pe(e);
	}
	function ge(e, t) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), e.stopPropagation(), pe(t);
			return;
		}
		if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
			if (e.preventDefault(), e.stopPropagation(), !de(t)) return;
			i.commit(fe(t, e.key === "ArrowLeft" ? -1 : 1), "keyboard");
		}
	}
	function _e(e, t) {
		e.target !== e.currentTarget || !i.selectable || i.commit({
			target: "selection",
			action: "create",
			start: t,
			end: a(t, 1),
			allDay: !0
		}, "pointer");
	}
	let ve = (e, t) => {
		let n = sa(e), r = e.value.placeholder ? {
			"aria-hidden": !0,
			"data-placeholder": !0
		} : {
			role: "button",
			tabIndex: 0,
			onPointerDown: (n) => me(n, e, t),
			onClick: () => he(e),
			onKeyDown: (t) => ge(t, e)
		};
		if (e.type === "availability") {
			let t = e.value;
			return /* @__PURE__ */ v("div", {
				className: K("ui-cal-chip", `ui-cal-c-${i.blockColor(t)}`),
				"data-all-day": !0,
				"data-dragging": I === n || void 0,
				"aria-label": t.placeholder ? void 0 : i.describeBlock(t),
				...r,
				children: [i.display.time && /* @__PURE__ */ _("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: ji(t.start, t.end, i)
				}), i.display.blockLabels && /* @__PURE__ */ _("span", {
					className: "ui-cal-title",
					children: t.label ?? ((t.kind ?? "available") === "available" ? i.labels.available : i.labels.unavailable)
				})]
			}, n);
		}
		let a = e.value, o = x(a), s = i.statusLabel(a);
		return /* @__PURE__ */ v("div", {
			className: K("ui-cal-chip", `ui-cal-c-${i.eventColor(a)}`),
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
					children: Ai(a.start, i)
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
				children: ce.format(e)
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
					let t = w(e), n = se.get(t), r = n?.items ?? [], a = Math.max(1, le), o = r.length > a, s = o ? r.slice(0, a - 1) : r, c = t === ie, l = i.dates.parts(e).month !== re, u = i.hasAvailability && i.shadeOutsideAvailability && !n?.hasAvailable;
					return /* @__PURE__ */ v("div", {
						role: "gridcell",
						tabIndex: t === oe ? 0 : -1,
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
						onKeyDown: (t) => G(t, e),
						onClick: (t) => _e(t, e),
						children: [
							/* @__PURE__ */ _("button", {
								type: "button",
								tabIndex: -1,
								onClick: () => i.openDay(e),
								"aria-label": d(e, i.locale),
								className: K("flex h-5 min-w-5 cursor-pointer items-center justify-center self-start rounded-full px-1 text-2xs font-semibold transition-colors duration-[100ms]", c ? "bg-accent text-text-on-accent" : l ? "text-text-tertiary hover:bg-bg-hover" : "text-text-primary hover:bg-bg-hover"),
								children: i.dates.parts(e).day
							}),
							s.map((e) => ve(e, t)),
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
							A === t && ue(/* @__PURE__ */ v("div", {
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
										onClick: V,
										"data-cal-close": !0,
										children: /* @__PURE__ */ _(U, { className: "h-3.5 w-3.5" })
									})]
								}), r.map((e) => ve(e, t))]
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
function la({ event: e, style: t, resizeEdge: n, compact: r, dense: i, continuesBefore: a, continuesAfter: o, dragging: s, onKeyDown: c, onClick: l }) {
	let u = ta(), d = u.canEditEvent(e), f = e.allDay ? u.labels.allDay : ji(e.start, e.end, u), { display: p } = u, m = p.status ? u.statusLabel(e) : void 0, h = [p.time && f, m].filter(Boolean).join(" · "), y = !!e.placeholder, b = u.renderEvent?.(e, {
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
		className: K("ui-cal-event", `ui-cal-c-${u.eventColor(e)}`),
		style: t,
		onKeyDown: y ? void 0 : c,
		onClick: y ? void 0 : l,
		children: [b ?? (i ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("span", {
			className: "ui-cal-title",
			children: e.title
		}), h && /* @__PURE__ */ _("span", {
			className: "ui-cal-meta font-mono",
			children: h
		})] }) : /* @__PURE__ */ _(ua, {
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
function ua({ event: e, compact: t, timeLabel: n, statusLabel: r, description: i, badge: a }) {
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
function da({ block: e, style: t, resizeEdge: n, continuesAfter: r, dragging: i, onKeyDown: a, onClick: o }) {
	let s = ta(), c = s.editLayer === "availability", l = c && s.canEditBlock(e), u = e.kind ?? "available", d = e.label ?? (u === "available" ? s.labels.available : s.labels.unavailable), f = c && !e.placeholder && (l || s.hasBlockClick);
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
		className: K("ui-cal-avail", `ui-cal-c-${s.blockColor(e)}`),
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
				children: ji(e.start, e.end, s)
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
function fa({ draft: e, invalid: t, style: n }) {
	let r = ta(), i = e.target === "event" ? e.event.title : e.target === "availability" ? e.availability.label ?? r.labels.available : void 0;
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
				children: ji(e.start, e.end, r)
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
var pa = 4, ma = 10, ha = 36;
function ga(e, t, n, r, i) {
	let a = Vi(e.value.resourceId).length > 0, o = {
		action: t,
		start: n.start,
		end: n.end,
		resourceId: a ? i : void 0,
		previousResourceId: a ? r : void 0,
		resourceIds: Ui(e.value.resourceId, r, i)
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
function _a(e, t) {
	return t.target === "selection" ? !1 : Xi(e.value, t) && (t.resourceId === void 0 || t.resourceId === t.previousResourceId);
}
function va({ axis: e, columns: t, pxPerMinute: n, scrollRef: r, events: i, blocks: a, initialColumn: o }) {
	let s = ta(), { addMinutes: c, computeNudgeRange: u, dateAtMinutes: d, differenceInDays: p, shiftRangeDays: g } = s.dates, [_, v] = h(null), [y, b] = h(null), x = m(null), S = m({
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
		return q(s.min + l / a, s.min, s.max);
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
			l = ga(e.item, "move", c, s.resourceId, a.resourceId);
		} else if (e.kind === "resize" && e.item) {
			let t = w(e.origin);
			if (!t) return;
			let n = a(e.item.value, s.day, T(t, e.lastX, e.lastY), o, c);
			l = ga(e.item, "resize", {
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
		if (e.lastY < n.top + ha ? a = -1 : e.lastY > n.bottom - ha && (a = 1), e.lastX < n.left + ha ? i = -1 : e.lastX > n.right - ha && (i = 1), !i && !a) {
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
				if (!e || a.item && _a(a.item, e.draft)) return;
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
					let o = t.dayBounds(e.day), s = Math.min(i, o.max - o.min), c = q(xi(a.anchorMinute, i, "floor"), o.min, o.max - s), l = Math.min(c + Math.max(i, t.clickCreateDuration), o.max);
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
					n > ma && (t.moved = !0);
					return;
				}
				if (t.kind === "click" || n < pa) {
					n >= pa && (t.moved = !0);
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
				v = ga(f, "resize", {
					start: d.start,
					end: t
				}, _.resourceId, _.resourceId);
			} else v = ga(f, "move", u(d, e, s.dayBounds(d.start)), _.resourceId, _.resourceId);
		} else if (h.includes(n.key) && !n.shiftKey) {
			let e = t[l + (n.key === h[0] ? -1 : 1)];
			if (!e) return;
			v = ga(f, "move", g(d, p(e.day, _.day)), _.resourceId, e.resourceId);
		}
		v && (n.preventDefault(), !_a(f, v) && s.commit(v, "keyboard") && j(o));
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
		let e = t[q(o, 0, Math.max(0, t.length - 1))], n = e ? s.dayBounds(e.day) : s.bounds, r = Math.min(C, n.max - n.min), i = q(xi((e && s.timeZone && s.scrollToMinute !== void 0 ? s.dates.minutesOfDay(s.dates.wallDateAtMinutes(e.day, s.scrollToMinute)) : s.scrollToMinute) ?? n.min, C, "floor"), n.min, n.max - r);
		return {
			column: q(o, 0, Math.max(0, t.length - 1)),
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
					let t = q(y.end + e, y.start + C, i.max);
					f = {
						...y,
						end: t
					};
				} else {
					let t = q(y.start + e, i.min, i.max - u);
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
				let e = q(y.column + (n.key === c ? -1 : 1), 0, t.length - 1), r = s.dayBounds(t[e].day), a = Math.min(u, r.max - r.min), o = q(r.min + y.start - i.min, r.min, r.max - a);
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
				let e = n.key === "PageUp" ? -60 : 60, t = q(y.start + e, i.min, i.max - u);
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
var ya = 22, ba = 3, xa = 18, Sa = 36;
function Ca(e) {
	let t = e.querySelector(".ui-cal-head")?.offsetHeight ?? 0;
	return (e.clientHeight - t) / 2;
}
function wa(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return a ? a.endMinute <= n && a.startMinute < n ? "before" : a.startMinute >= r ? "after" : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	} : null;
}
function Ta({ days: e, events: t, availability: n, label: r }) {
	let i = ta(), { daySegment: a, formatLongDate: o, getFormatter: s, isAllDayLike: c, isSameDay: d, minutesOfDay: g, toDateKey: y } = i.dates, { bounds: b, resources: x, hourHeight: S } = i, C = S / 60, w = m(null), T = u(), [E, D] = h(!1), O = p(() => e.flatMap((e) => x.length ? x.map((t) => ({
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
	]), k = p(() => new Map(t.map((e) => [e.id, e])), [t]), A = p(() => new Map(n.map((e) => [e.id, e])), [n]), j = O.findIndex((e) => d(e.day, i.now)), M = va({
		axis: "y",
		columns: O,
		pxPerMinute: C,
		scrollRef: w,
		events: k,
		blocks: A,
		initialColumn: Math.max(0, j)
	}), { drag: N, cursor: P } = M, F = i.editLayer === "availability", I = p(() => {
		let e = t.filter((e) => !c(e)), r = xa / C;
		return O.map((t) => {
			let o = t.bounds ?? i.bounds, s = 0, c = 0, l = [];
			for (let n of e) {
				if (!Hi(n.resourceId, t.resourceId, { emptyMatchesAll: !1 })) continue;
				let e = wa(n, t.day, o.min, o.max, a);
				e === "before" ? s++ : e === "after" ? c++ : e && l.push(e);
			}
			let u = zi(l.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r), d = [];
			for (let e of n) {
				if (!Hi(e.resourceId, t.resourceId, { emptyMatchesAll: !0 })) continue;
				let n = wa(e, t.day, o.min, o.max, a);
				n && typeof n == "object" && d.push(n);
			}
			let f = F ? zi(d.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r) : null, p = [];
			return i.hasAvailability && i.shadeOutsideAvailability && (p = Ri(o.min, o.max, d.map((e) => [e.start, e.end]))), {
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
				let o = a(n.start, n.end, r.day) !== null && Hi(n.resourceId, r.resourceId, { emptyMatchesAll: !1 });
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
		let { lanes: n, count: r } = Bi(e);
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
	]), R = E ? L.count : Math.min(L.count, ba), z = L.runs.filter((e) => (L.lanes.get(e.id) ?? 0) >= R).length, B = m(C), ee = m(null);
	l(() => {
		let e = w.current;
		if (!e) return;
		let t = () => {
			ee.current = (e.scrollTop + Ca(e)) / B.current;
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, []), f(() => {
		let e = w.current;
		if (!e || B.current === C) return;
		B.current = C;
		let t = ee.current;
		t !== null && (e.scrollTop = Math.max(0, t * C - Ca(e)));
	}, [C]);
	let te = m(null), V = i.scrollToMinute, { dates: ne, timeZone: re, now: H } = i, ie = i.scrollAlign;
	l(() => {
		let t = w.current;
		if (!t || te.current === i.view) return;
		te.current = i.view;
		let n = e.find((e) => d(e, H)) ?? e[0], r = re ? ne.minutesOfDay(ne.wallDateAtMinutes(n, V ?? 480)) : V ?? 480, a = ne.dayBounds(n, b), o = t.querySelector(".ui-cal-head"), s = () => {
			let e = ie === "center" ? Ca(t) : 8;
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
			l || (te.current = null);
		};
	}, [
		i.view,
		V,
		ie,
		b,
		C,
		e,
		d,
		ne,
		re,
		H
	]);
	let ae = e.length > 1, oe = x.length > 0, se = !!i.timeZone && i.sharedTimeAxis, ce = p(() => $i(O.map((e) => ({
		day: e.day,
		bounds: e.bounds ?? i.bounds
	})), i.slotLabelInterval, {
		timeZone: i.timeZone,
		locale: i.locale,
		hour12: i.hour12
	}, i.bounds, se), [
		O,
		i.slotLabelInterval,
		i.timeZone,
		i.locale,
		i.hour12,
		i.bounds,
		se
	]), U = ce.reference, le = ce.axes.map((e) => !!i.timeZone && (!se || !e.matchesReference)), W = U ? s(i.locale, { timeZoneName: "short" }).formatToParts(i.dates.dateAtMinutes(U.day, U.bounds.min)).find((e) => e.type === "timeZoneName")?.value : void 0, ue = le.some(Boolean) ? Math.max(oe ? i.resourceMinWidth : 0, 180) : oe ? i.resourceMinWidth : 44, G = Math.max(...O.map((e) => (e.bounds?.max ?? b.max) - (e.bounds?.min ?? b.min))) * C, de = {
		"--cal-hour": `${S}px`,
		"--cal-offset": `${-(b.min % 60 * C)}px`,
		height: G
	}, fe = U?.bounds ?? b, pe = [], me = Math.max(5, i.slotLabelInterval);
	for (let e = Math.ceil(fe.min / me) * me; e < fe.max; e += me) e > fe.min && pe.push(e);
	let he = s(i.locale, { weekday: "short" }), ge = g(i.now), _e = i.nowIndicator, ve = N?.draft, ye = ve && (ve.target === "selection" ? ve.resourceId : ve.resourceIds), be = "";
	if (P) {
		let e = O[P.column];
		if (e) {
			let t = e.resourceId ? i.resourceById.get(e.resourceId) : void 0;
			be = `${o(e.day, i.locale)}, ${i.timeZone ? Ai(i.dates.dateAtMinutes(e.day, P.start), i) : vi(P.start)} to ${i.timeZone ? Ai(i.dates.dateAtMinutes(e.day, P.end), i) : vi(P.end)}${t ? `, ${t.title}` : ""}`;
		}
	}
	return /* @__PURE__ */ _("div", {
		ref: w,
		"data-cal-drag": N?.draft.action,
		className: "ui-cal-scroll relative min-h-0 flex-1 overflow-auto",
		style: i.timeZone && !U ? { "--cal-gutter": "0px" } : void 0,
		children: /* @__PURE__ */ v("div", {
			className: "flex min-h-full flex-col",
			style: { minWidth: `calc(var(--cal-gutter) + ${O.length * ue}px)` },
			children: [/* @__PURE__ */ v("div", {
				className: "ui-cal-head border-border border-b",
				children: [
					ae && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: W ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: W ? i.timeZone : void 0,
							"aria-label": W ? i.timeZone : void 0,
							children: W
						}), e.map((e) => /* @__PURE__ */ _(Ea, {
							day: e,
							weekday: he.format(e),
							isToday: d(e, i.now),
							grow: oe ? x.length : 1,
							onOpen: () => i.openDay(e),
							bordered: oe
						}, y(e)))]
					}),
					oe && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: W && !ae ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: !ae && W ? i.timeZone : void 0,
							"aria-label": !ae && W ? i.timeZone : void 0,
							children: ae ? void 0 : W
						}), O.map((e, t) => /* @__PURE__ */ _(Da, {
							resource: i.resourceById.get(e.resourceId ?? ""),
							sub: t % x.length !== 0
						}, e.key))]
					}),
					L.count > 0 && /* @__PURE__ */ v("div", {
						className: "border-border flex border-t",
						children: [/* @__PURE__ */ v("div", {
							className: "ui-cal-corner text-text-tertiary flex flex-col items-end justify-center gap-0.5 pr-2 text-2xs",
							children: [/* @__PURE__ */ _("span", { children: i.labels.allDay }), L.count > ba && /* @__PURE__ */ _("button", {
								type: "button",
								className: "text-accent cursor-pointer hover:underline",
								"aria-expanded": E,
								onClick: () => D((e) => !e),
								children: E ? i.labels.showLess : i.labels.more(z)
							})]
						}), /* @__PURE__ */ _("div", {
							className: "relative flex-1",
							style: { height: R * ya + 4 },
							children: L.runs.map((e) => {
								let t = L.lanes.get(e.id) ?? 0;
								if (t >= R) return null;
								let n = O[e.start], r = O[e.end - 1];
								return /* @__PURE__ */ _(la, {
									event: e.event,
									compact: !0,
									continuesBefore: !!n && a(e.event.start, e.event.end, n.day)?.continuesBefore,
									continuesAfter: !!r && a(e.event.start, e.event.end, r.day)?.continuesAfter,
									style: {
										top: t * ya + 2,
										height: ya - 3,
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
					style: { height: G },
					"aria-hidden": "true",
					children: [
						W && !ae && !oe && /* @__PURE__ */ _("span", {
							className: "text-text-tertiary absolute top-0 right-2 text-2xs",
							"aria-hidden": "true",
							children: W
						}),
						U && pe.map((e) => {
							let t = i.dates.parts(i.dates.dateAtMinutes(U.day, e));
							return /* @__PURE__ */ _("span", {
								className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
								style: { top: (e - U.bounds.min) * C },
								children: Mi(t.hour * 60 + t.minute, i)
							}, e);
						}),
						!i.timeZone && pe.map((e) => /* @__PURE__ */ _("span", {
							className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
							style: { top: (e - b.min) * C },
							children: Mi(e, i)
						}, e))
					]
				}), /* @__PURE__ */ v("div", {
					role: "group",
					"aria-roledescription": "time grid",
					"aria-label": r,
					"aria-describedby": T,
					tabIndex: 0,
					className: "ui-cal-lines ui-cal-surface relative flex flex-1 select-none focus-visible:outline-none",
					style: de,
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
							children: be
						}),
						O.map((e, t) => {
							let n = I[t], r = e.bounds ?? i.bounds, o = le[t] ? 72 : 0, s = le[t] ? ce.axes[t].minutes : [], c = d(e.day, i.now), l = oe && t % x.length !== 0;
							return /* @__PURE__ */ v("div", {
								"data-cal-col": t,
								"data-today": c || void 0,
								"data-subcol": l || void 0,
								className: "ui-cal-col flex-1",
								style: {
									minWidth: ue,
									height: (r.max - r.min) * C
								},
								children: [
									s.map((t) => /* @__PURE__ */ _("span", {
										className: "ui-cal-zone-label",
										style: { top: (t - r.min) * C },
										"aria-hidden": "true",
										children: Ai(i.dates.dateAtMinutes(e.day, t), i)
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
										return /* @__PURE__ */ _(da, {
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
										className: K("absolute inset-0", F && "ui-cal-muted-layer"),
										children: n.placed.map((e) => {
											let a = n.layout.get(e.item.id), o = Math.max((e.end - e.start) * C, xa);
											return /* @__PURE__ */ _(la, {
												event: e.item,
												compact: o < Sa,
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
									c && _e && ge >= r.min && ge <= r.max && /* @__PURE__ */ _("div", {
										className: "ui-cal-now",
										"data-axis": "y",
										"data-dot": !l || void 0,
										style: { top: (ge - r.min) * C }
									}),
									ve && Hi(ye, e.resourceId, { emptyMatchesAll: !0 }) && (() => {
										let t = wa(ve, e.day, r.min, r.max, a);
										return !t || typeof t != "object" ? null : /* @__PURE__ */ _(fa, {
											draft: ve,
											invalid: N?.invalid,
											style: {
												top: (t.start - r.min) * C + 1,
												height: Math.max((t.end - t.start) * C - 2, xa),
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
function Ea({ day: e, weekday: t, isToday: n, grow: r, bordered: i, onOpen: a }) {
	let o = ta();
	return /* @__PURE__ */ _("div", {
		className: K("flex min-w-0 items-center justify-center py-1.5", i && "border-border border-l"),
		style: { flex: `${r} 1 0` },
		children: /* @__PURE__ */ v("button", {
			type: "button",
			onClick: a,
			"aria-label": o.dates.formatLongDate(e, o.locale),
			"aria-current": n ? "date" : void 0,
			className: "hover:bg-bg-hover flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors duration-[100ms]",
			children: [/* @__PURE__ */ _("span", {
				className: K("text-2xs font-medium uppercase", n ? "text-accent" : "text-text-tertiary"),
				children: t
			}), /* @__PURE__ */ _("span", {
				className: K("flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold", n ? "bg-accent text-text-on-accent" : "text-text-primary"),
				children: o.dates.parts(e).day
			})]
		})
	});
}
function Da({ resource: e, sub: t }) {
	let n = ta();
	return /* @__PURE__ */ v("div", {
		className: K("border-border flex min-w-0 flex-1 items-center gap-1.5 border-l px-2 py-1.5", t && "ui-cal-subhead"),
		style: { minWidth: n.resourceMinWidth },
		title: e?.title,
		children: [e?.color && /* @__PURE__ */ _("span", {
			className: K("ui-cal-dot", `ui-cal-c-${e.color}`),
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
var Oa = 34, ka = 4, Aa = 28;
function ja(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return !a || a.endMinute <= n || a.startMinute >= r ? null : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	};
}
function Ma({ day: e, events: t, availability: n, label: r }) {
	let i = ta(), { daySegment: a, isSameDay: o, minutesOfDay: s } = i.dates, c = i.dayBounds(e), d = m(null), f = i.resources.length === 0 && t.length === 0 && n.length === 0, [g, y] = h(0);
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
	}, [i.resources]), k = p(() => D.flatMap((t) => t.name !== void 0 && T.has(t.name) ? [] : t.resources.map((t) => ({
		key: t.id,
		day: e,
		resourceId: t.id || void 0
	}))), [
		D,
		T,
		e
	]), j = va({
		axis: "x",
		columns: k,
		pxPerMinute: S,
		scrollRef: d,
		events: p(() => new Map(t.map((e) => [e.id, e])), [t]),
		blocks: p(() => new Map(n.map((e) => [e.id, e])), [n]),
		initialColumn: 0
	}), { drag: M, cursor: N } = j, P = i.editLayer === "availability", F = p(() => {
		let r = Aa / S;
		return k.map((o) => {
			let s = t.filter((e) => Hi(e.resourceId, o.resourceId, { emptyMatchesAll: !1 })).map((t) => ja(t, e, c.min, c.max, a)).filter((e) => e !== null), l = Bi(s.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))), u = n.filter((e) => Hi(e.resourceId, o.resourceId, { emptyMatchesAll: !0 })).map((t) => ja(t, e, c.min, c.max, a)).filter((e) => e !== null), d = P ? Bi(u.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))) : null, f = Math.max(1, l.count, d?.count ?? 0);
			return {
				placed: s,
				lanes: l,
				blocks: u,
				blockLanes: d,
				outside: i.hasAvailability && i.shadeOutsideAvailability ? Ri(c.min, c.max, u.map((e) => [e.start, e.end])) : [],
				laneCount: f
			};
		});
	}, [
		k,
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
	let ee = s(i.now), te = i.nowIndicator && o(e, i.now) && ee >= c.min && ee <= c.max, V = M?.draft, ne = V && (V.target === "selection" ? V.resourceId : V.resourceIds), re = {
		"--cal-hour": `${x}px`,
		"--cal-offset": `${-(c.min % 60 * S)}px`
	}, H = "";
	if (N) {
		let t = k[N.column], n = t?.resourceId ? i.resourceById.get(t.resourceId) : void 0;
		H = `${n ? `${n.title}, ` : ""}${i.timeZone ? Ai(i.dates.dateAtMinutes(e, N.start), i) : vi(N.start)} to ${i.timeZone ? Ai(i.dates.dateAtMinutes(e, N.end), i) : vi(N.end)}`;
	}
	function ie(e) {
		E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	if (f) return /* @__PURE__ */ _("div", {
		className: "text-text-tertiary flex flex-1 items-center justify-center p-6 text-xs",
		children: i.labels.noResources
	});
	let ae = 0;
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
						children: i.timeZone ? Ai(i.dates.dateAtMinutes(e, t), i) : Mi(t, i)
					}, t))
				})]
			}), /* @__PURE__ */ v("div", {
				role: "group",
				"aria-roledescription": "timeline",
				"aria-label": r,
				"aria-describedby": w,
				tabIndex: 0,
				className: "ui-cal-surface select-none focus-visible:outline-none",
				onPointerDown: j.onPointerDown,
				onFocus: j.onGridFocus,
				onBlur: j.onGridBlur,
				onKeyDown: j.onGridKeyDown,
				children: [
					/* @__PURE__ */ _("span", {
						id: w,
						className: "sr-only",
						children: i.labels.gridHelp
					}),
					/* @__PURE__ */ _("span", {
						className: "sr-only",
						"aria-live": "polite",
						children: H
					}),
					D.map((t) => {
						let n = t.name !== void 0 && T.has(t.name);
						return /* @__PURE__ */ v("div", { children: [t.name !== void 0 && /* @__PURE__ */ _("div", {
							className: "bg-bg-secondary border-border flex border-b",
							children: /* @__PURE__ */ v("button", {
								type: "button",
								className: "ui-cal-group text-text-secondary hover:text-text-primary flex cursor-pointer items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase transition-colors duration-[100ms]",
								"aria-expanded": !n,
								onClick: () => ie(t.name),
								children: [
									_(n ? A : O, { className: "h-3 w-3" }),
									t.name,
									/* @__PURE__ */ _("span", {
										className: "text-text-tertiary font-normal",
										children: t.resources.length
									})
								]
							})
						}), !n && t.resources.map((t) => {
							let n = ae++, r = F[n], o = k[n];
							if (!r || !o) return null;
							let s = r.laneCount * Oa + ka * 2;
							return /* @__PURE__ */ v("div", {
								className: "border-border flex border-b",
								children: [/* @__PURE__ */ v("div", {
									className: "ui-cal-row-head flex items-center gap-1.5 px-2",
									title: t.title,
									children: [t.color && /* @__PURE__ */ _("span", {
										className: K("ui-cal-dot", `ui-cal-c-${t.color}`),
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
										...re,
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
											return /* @__PURE__ */ _(da, {
												block: e.item,
												resizeEdge: "right",
												continuesAfter: e.continuesAfter,
												dragging: M?.itemId === e.item.id,
												style: {
													left: (e.start - c.min) * S,
													width: Math.max((e.end - e.start) * S, 4),
													top: t === void 0 ? 0 : ka + t * Oa,
													height: t === void 0 ? "100%" : Oa - 3
												},
												onKeyDown: (t) => j.onItemKeyDown(t, "availability", e.item.id, n),
												onClick: (t) => {
													t.detail === 0 && i.clickBlock(e.item);
												}
											}, e.item.id);
										}),
										/* @__PURE__ */ _("div", {
											className: K("absolute inset-0", P && "ui-cal-muted-layer"),
											children: r.placed.map((e) => {
												let t = r.lanes.lanes.get(e.item.id) ?? 0;
												return /* @__PURE__ */ _(la, {
													event: e.item,
													compact: !1,
													dense: !0,
													resizeEdge: "right",
													continuesBefore: e.continuesBefore,
													continuesAfter: e.continuesAfter,
													dragging: M?.itemId === e.item.id,
													style: {
														left: (e.start - c.min) * S + 1,
														width: Math.max((e.end - e.start) * S, Aa) - 2,
														top: ka + t * Oa,
														height: Oa - 3,
														justifyContent: "center"
													},
													onKeyDown: (t) => j.onItemKeyDown(t, "event", e.item.id, n),
													onClick: (t) => {
														t.detail === 0 && i.clickEvent(e.item);
													}
												}, e.item.id);
											})
										}),
										te && /* @__PURE__ */ _("div", {
											className: "ui-cal-now",
											"data-axis": "x",
											style: { left: (ee - c.min) * S }
										}),
										V && Hi(ne, o.resourceId, { emptyMatchesAll: !0 }) && (() => {
											let t = ja(V, e, c.min, c.max, a);
											return t ? /* @__PURE__ */ _(fa, {
												draft: V,
												invalid: M?.invalid,
												style: {
													left: (t.start - c.min) * S + 1,
													width: Math.max((t.end - t.start) * S - 2, Aa),
													top: ka,
													bottom: ka
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
var Na = {
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
function Pa({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ _("div", {
		role: "radiogroup",
		"aria-label": a,
		className: K("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ _("button", {
			type: "button",
			role: "radio",
			"aria-checked": e.value === t,
			disabled: r,
			onClick: () => n(e.value),
			className: K("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", !r && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/Calendar.tsx
var Fa = [
	"day",
	"threeDay",
	"week",
	"month",
	"agenda"
];
function Ia() {
	return /* @__PURE__ */ new Date();
}
function La(e) {
	let [t, n] = h(Ia);
	return l(() => {
		if (e) return;
		let t = setInterval(() => n(Ia()), 3e4);
		return () => clearInterval(t);
	}, [e]), e ?? t;
}
function Ra(e) {
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
var za = /* @__PURE__ */ new Set();
function Ba(e) {
	let t = !1;
	try {
		t = process.env.NODE_ENV !== "production";
	} catch {}
	!t || za.has(e) || (za.add(e), console.warn(`[Calendar] ${e}`));
}
function Va(e, t, n) {
	try {
		return _i(t);
	} catch {
		return Ba(`Invalid ${e} "${t}", expected HH:mm; using the default.`), n;
	}
}
function Ha({ events: e = [], availability: t, resources: n = [], view: r, defaultView: i = "week", onViewChange: a, views: o = Fa, date: s, defaultDate: c, onDateChange: d, onRangeChange: g, weekStartsOn: y = 1, workWeekDays: b, agendaDays: x = 7, slotMinTime: S = "07:00", slotMaxTime: C = "20:00", slotDuration: w = 15, slotLabelInterval: T = 60, sharedTimeAxis: E = !1, hourHeight: D = 48, timelineHourWidth: O = 96, resourceMinWidth: j = 120, scrollToTime: M, scrollAlign: N = "start", now: P, nowIndicator: F = !0, editLayer: I = "events", readOnly: L = !1, selectable: R, clickCreateDuration: B = 30, shadeOutsideAvailability: ee = !0, onCreate: te, onEventClick: V, onEventChange: ne, onAvailabilityClick: re, onAvailabilityChange: H, validate: ie, onInvalidChange: ae, onDateClick: oe, renderEvent: se, monthMaxEvents: ce, agendaShowAvailability: U = !0, display: le, narrowView: W = "day", narrowWidth: ue = 640, locale: G = "en-GB", timeZone: de, hour12: fe = !1, labels: pe, toolbar: me = !0, toolbarActions: he, loading: ge = !1, className: _e, "aria-label": ve }) {
	let ye = p(() => Qi(de), [de]), { addDays: be, formatLongDate: xe, formatRangeTitle: Se, getVisibleDays: Ce, minutesOfDay: we, shiftDate: Te } = ye, Ee = m(null), De = u(), Oe = La(P), ke = Ra(Ee), [Ae, je] = h(i), [Me, Ne] = h(() => c ?? Ia()), Pe = r ?? Ae, q = s ?? Me, Fe = (e) => {
		r === void 0 && je(e), a?.(e);
	}, Ie = (e) => {
		s === void 0 && Ne(e), d?.(e);
	}, J = ke !== null && ke < ue && W !== !1 && Ci(Pe) && Pe !== "day" && W ? W : Pe, Le = p(() => ({
		...Na,
		...pe,
		views: {
			...Na.views,
			...pe?.views
		},
		status: {
			...Na.status,
			...pe?.status
		}
	}), [pe]), Y = p(() => ({
		weekStartsOn: y,
		workWeekDays: b,
		agendaDays: x
	}), [
		y,
		b,
		x
	]), Re = q.getTime(), ze = p(() => Ce(J, new Date(Re), Y), [
		J,
		Re,
		Y,
		Ce
	]), Be = ze[0], Ve = be(ze[ze.length - 1], 1), He = Be.getTime(), X = Ve.getTime(), Ue = m(g);
	f(() => {
		Ue.current = g;
	}), l(() => {
		Ue.current?.({
			start: new Date(He),
			end: new Date(X),
			view: J
		});
	}, [
		He,
		X,
		J
	]);
	let We = p(() => e.filter((e) => Fi(e.start.getTime(), Math.max(e.end.getTime(), e.start.getTime() + 1), He, X)), [
		e,
		He,
		X
	]), Ge = p(() => (t ?? []).filter((e) => Fi(e.start.getTime(), e.end.getTime(), He, X)), [
		t,
		He,
		X
	]), Ke = Va("slotMinTime", S, 0), qe = Va("slotMaxTime", C, 1440);
	qe <= Ke && Ba(`slotMaxTime "${C}" must be after slotMinTime "${S}"; showing the whole day.`);
	let Je = p(() => qe > Ke ? {
		min: Ke,
		max: qe
	} : {
		min: 0,
		max: 1440
	}, [Ke, qe]), Ye = Math.max(1, Math.round(w)), Xe;
	if (M) Xe = Va("scrollToTime", M, Je.min);
	else {
		let e = Ge.filter((e) => (e.kind ?? "available") === "available").map((e) => de ? ye.parts(e.start).hour * 60 + ye.parts(e.start).minute : we(e.start)).filter((e) => e >= Je.min && e < Je.max);
		e.length && (Xe = Math.min(...e));
	}
	let Ze = p(() => new Map(n.map((e) => [e.id, e])), [n]), Qe = Se(J, q, {
		...Y,
		locale: G
	}), $e = {
		locale: G,
		hour12: fe,
		timeZone: de
	}, Z = (e) => Ze.get(Vi(e)[0] ?? ""), et = (e) => {
		let t = Vi(e).map((e) => Ze.get(e)?.title).filter(Boolean);
		return t.length ? `, ${t.join(", ")}` : "";
	}, tt = (e) => e.status && e.status !== "confirmed" ? Le.status[e.status] : void 0, nt = (e) => {
		let t = ie?.(e);
		return typeof t == "string" && t ? t : void 0;
	}, rt = {
		view: J,
		dates: ye,
		timeZone: de,
		dayBounds: (e) => ye.dayBounds(e, Je),
		locale: G,
		hour12: fe,
		weekStartsOn: y,
		now: Oe,
		nowIndicator: F,
		labels: Le,
		itemHelpId: De,
		resources: n,
		resourceById: Ze,
		step: Ye,
		bounds: Je,
		hourHeight: D,
		slotLabelInterval: T,
		sharedTimeAxis: E,
		timelineHourWidth: O,
		resourceMinWidth: j,
		editLayer: I,
		selectable: !L && !!te && (R ?? !0),
		clickCreateDuration: B,
		hasAvailability: t !== void 0,
		shadeOutsideAvailability: ee,
		monthMaxEvents: ce,
		agendaShowAvailability: U,
		display: {
			time: le?.time ?? !0,
			description: le?.description ?? !0,
			status: le?.status ?? !0,
			badge: le?.badge ?? !0,
			blockLabels: le?.blockLabels ?? !0,
			availableBlocks: le?.availableBlocks ?? !0
		},
		scrollToMinute: Xe,
		scrollAlign: N,
		canEditEvent: (e) => !e.placeholder && !L && !!ne && I === "events" && (e.editable ?? e.status !== "cancelled"),
		canEditBlock: (e) => !e.placeholder && !L && !!H && I === "availability" && e.editable !== !1,
		eventColor: (e) => e.color ?? Z(e.resourceId)?.color ?? "accent",
		blockColor: (e) => e.color ?? Z(e.resourceId)?.color ?? ((e.kind ?? "available") === "available" ? "green" : "gray"),
		statusLabel: tt,
		describeEvent: (e) => {
			let t = e.allDay ? `${xe(e.start, G)}, ${Le.allDay}` : `${xe(e.start, G)}, ${ji(e.start, e.end, $e)}`, n = tt(e);
			return [
				e.title,
				t,
				n,
				e.badge,
				e.description
			].filter(Boolean).join(", ").concat(et(e.resourceId));
		},
		describeBlock: (e) => [
			(e.kind ?? "available") === "available" ? Le.available : Le.unavailable,
			e.label,
			`${xe(e.start, G)}, ${ji(e.start, e.end, $e)}`
		].filter(Boolean).join(", ").concat(et(e.resourceId)),
		renderEvent: se,
		hasEventClick: !!V,
		hasBlockClick: !!re,
		clickEvent: (e) => V?.(e),
		clickBlock: (e) => re?.(e),
		check: nt,
		commit: (e, t) => {
			let n = nt(e);
			if (n) return ae?.(e, n), !1;
			if (e.target === "selection") te?.({
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
				delete n.target, e.target === "event" ? ne?.(n) : H?.(n);
			}
			return !0;
		},
		openDay: (e) => {
			if (oe) {
				oe(e);
				return;
			}
			Ie(e), J !== "day" && J !== "timeline" && Fe("day");
		}
	}, it = o.map((e) => ({
		value: e,
		label: Le.views[e]
	})), at = ve ?? Qe, ot = JSON.stringify([
		de,
		ze.map((e) => e.getTime()),
		Je.min,
		Je.max,
		Ye,
		n.map((e) => e.id)
	]), st;
	return st = J === "month" ? /* @__PURE__ */ _(ca, {
		date: q,
		events: We,
		availability: Ge,
		label: at
	}, de) : J === "agenda" ? /* @__PURE__ */ _(na, {
		days: ze,
		events: We.filter((e) => !e.placeholder),
		availability: Ge.filter((e) => !e.placeholder),
		label: at
	}, de) : J === "timeline" ? /* @__PURE__ */ _(Ma, {
		day: ze[0],
		events: We,
		availability: Ge,
		label: at
	}, ot) : /* @__PURE__ */ _(Ta, {
		days: ze,
		events: We,
		availability: Ge,
		label: at
	}, ot), /* @__PURE__ */ _(ea.Provider, {
		value: rt,
		children: /* @__PURE__ */ v("div", {
			ref: Ee,
			"data-time-zone": de,
			"data-shared-axis": E && de && [
				"day",
				"threeDay",
				"workWeek",
				"week"
			].includes(J) ? !0 : void 0,
			role: "region",
			"aria-label": ve ?? Qe,
			"aria-busy": ge || void 0,
			className: K("ui-cal relative flex h-full min-h-0 flex-col overflow-hidden", _e),
			children: [
				/* @__PURE__ */ _("span", {
					id: De,
					className: "sr-only",
					children: Le.itemHelp
				}),
				me && /* @__PURE__ */ v("div", {
					className: "ui-cal-noprint border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2",
					children: [/* @__PURE__ */ v("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ _(Xn, {
								size: "sm",
								onClick: () => Ie(Oe),
								children: Le.today
							}),
							/* @__PURE__ */ v("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ _(Xn, {
									variant: "icon",
									size: "sm",
									icon: k,
									"aria-label": Le.previous,
									onClick: () => Ie(Te(J, q, -1, Y))
								}), /* @__PURE__ */ _(Xn, {
									variant: "icon",
									size: "sm",
									icon: A,
									"aria-label": Le.next,
									onClick: () => Ie(Te(J, q, 1, Y))
								})]
							}),
							/* @__PURE__ */ _("h2", {
								className: "text-text-primary truncate text-sm font-semibold",
								"aria-live": "polite",
								children: Qe
							})
						]
					}), /* @__PURE__ */ v("div", {
						className: "flex items-center gap-1.5",
						children: [he, o.length > 1 && (ke === null || ke >= o.length * 80 + 420 ? /* @__PURE__ */ _(Pa, {
							"aria-label": Le.view,
							options: it,
							value: Pe,
							onChange: Fe
						}) : /* @__PURE__ */ _(or, {
							className: "w-28",
							size: "sm",
							options: it,
							value: Pe,
							onChange: (e) => Fe(e)
						}))]
					})]
				}),
				st,
				ge && /* @__PURE__ */ v("div", {
					className: "ui-cal-loading",
					role: "status",
					children: [/* @__PURE__ */ _(z, { className: "text-accent h-6 w-6 animate-spin" }), /* @__PURE__ */ _("span", {
						className: "sr-only",
						children: Le.loading
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/lib/months.ts
var Ua = [
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
], Wa = [
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
], Ga = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
];
function Ka(e, t, n) {
	let r = $(e, n), i = $(t, n);
	return r.year === i.year && r.month === i.month && r.day === i.day;
}
function qa(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function Ja(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function Ya(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function Xa({ year: e, month: t, timeZone: n, selected: r, rangeStart: i, rangeEnd: a, hoverDate: o, onSelect: s, onMonthChange: c, onHover: l, minDate: u, maxDate: d }) {
	let f = Ja(e, t), p = Ya(e, t), g = /* @__PURE__ */ new Date(), y = m(null), [b, x] = h(null);
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
					children: /* @__PURE__ */ _(k, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ v("span", {
					className: "text-text-primary text-xs font-semibold",
					"aria-live": "polite",
					children: [
						Wa[t],
						" ",
						e
					]
				}),
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: E,
					"aria-label": "Next month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ _(A, { className: "h-3.5 w-3.5" })
				})
			]
		}), /* @__PURE__ */ v("div", {
			className: "grid grid-cols-7 gap-0",
			children: [Ga.map((e) => /* @__PURE__ */ _("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), D.map((c, f) => {
				if (c === null) return /* @__PURE__ */ _("div", { className: "h-8" }, `empty-${f}`);
				let p = ni({
					year: e,
					month: t + 1,
					day: c,
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0
				}, n), m = Ka(p, g, n), h = r ? Ka(p, r, n) : !1, v = i ? Ka(p, i, n) : !1, y = a ? Ka(p, a, n) : !1, b = qa(p, i ?? null, a ?? o ?? null), x = u && p < u || d && p > d;
				return /* @__PURE__ */ _("button", {
					type: "button",
					"data-day": c,
					disabled: !!x,
					tabIndex: c === C ? 0 : -1,
					"aria-label": `${Wa[t]} ${c}, ${e}`,
					"aria-current": m ? "date" : void 0,
					onClick: () => s(p),
					onKeyDown: (e) => w(e, c),
					onMouseEnter: () => l?.(p),
					onMouseLeave: () => l?.(null),
					className: K("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", x && "cursor-not-allowed opacity-30", !x && !h && !v && !y && !b && "hover:bg-bg-hover text-text-primary", m && !h && !v && !y && "text-accent font-semibold", (h || v || y) && "bg-accent text-text-on-accent font-semibold", b && !h && !v && !y && "bg-accent-muted text-accent"),
					children: c
				}, c);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function Za({ children: e, className: t, header: n, footer: r, as: i = "div", flush: a = !1, bodyClassName: o, ...s }) {
	let c = Un();
	return /* @__PURE__ */ v(i, {
		...s,
		className: K("bg-bg-secondary border-border overflow-hidden rounded-md border", t),
		children: [
			n && /* @__PURE__ */ _("div", {
				"data-control-size": c,
				className: "ui-bar border-border flex flex-col justify-center border-b px-3 py-2.5",
				children: n
			}),
			/* @__PURE__ */ _("div", {
				className: K(!a && "ui-surface-body p-3", o),
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
function Qa(e, t) {
	let n = e.replace(/\D/g, "").slice(0, t);
	return Array.from({ length: t }, (e, t) => n[t] ?? "");
}
function $a(e, t, n) {
	if (!t || e.length <= t.length) return e;
	let r = e.length - t.length, i = n ?? e.length;
	return i - r >= 0 ? e.slice(i - r, i) : e.slice(-r);
}
function eo(e, t, n) {
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
function to(e, t, n, r) {
	if (n === "") {
		let n = [...e];
		return n[t] = "", {
			slots: n,
			focus: t
		};
	}
	return eo(e, t, $a(n, e[t], r));
}
function no(e, t) {
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
function ro({ value: e, onChange: t, onComplete: n, length: r = 6, error: i, invalid: a, disabled: o, autoFocus: s, name: c, "aria-label": l = "Verification code", className: d }) {
	let f = m([]), p = u(), g = a || !!i, [y, b] = h(() => Qa(e, r)), [x, S] = h({
		value: e,
		length: r
	});
	(x.value !== e || x.length !== r) && (S({
		value: e,
		length: r
	}), (y.length !== r || y.join("") !== e) && b(Qa(e, r)));
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
		t.key === "Backspace" ? (t.preventDefault(), w(no(y, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), C(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), C(e + 1));
	}
	return /* @__PURE__ */ v("div", {
		className: K("flex flex-col gap-1.5", d),
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
					onChange: (e) => w(to(y, t, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => T(t, e),
					onPaste: (e) => {
						e.preventDefault(), w(eo(y, t, e.clipboardData.getData("text")));
					},
					className: K("bg-bg-secondary text-text-primary h-10 w-10 rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", g ? "border-red" : "border-border")
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
function io({ options: e, value: t, onChange: n, onOptionChange: r, placeholder: i = "Select...", label: a, className: o, controlSize: s, id: c, name: l, disabled: d, "aria-label": f, "aria-describedby": p, "aria-invalid": g, query: y, onQueryChange: b, filterOptions: x = !0, selectedOption: S, renderOption: C, loading: w = !1, loadingMessage: T = "Loading results…", error: D, onRetry: k, emptyMessage: A = "No results", footer: j }) {
	let M = Un(s), { open: N, show: P, close: F, rootRef: I, anchorRef: L, triggerRef: R, popupRef: z, labelId: B, triggerId: ee, popupId: te } = Qn({
		haspopup: "listbox",
		matchWidth: !0,
		disabled: d
	}), [V, ne] = h(""), [re, H] = h(0), [ie, oe] = h(() => e.find((e) => e.value === t)), se = m(null), ce = u(), U = c ?? `${ce}-search`, le = `${ce}-selected`, W = y ?? V, ue = e.find((e) => e.value === t) ?? (S?.value === t ? S : void 0) ?? (ie?.value === t ? ie : void 0), G = x ? e.filter((e) => e.label.toLowerCase().includes(W.toLowerCase())) : e, de = Math.min(re, Math.max(G.length - 1, 0)), fe = G[de]?.disabled ? G.findIndex((e) => !e.disabled) : de, pe = G[fe];
	function me(e) {
		y === void 0 && ne(e), b?.(e), H(0);
	}
	function he(e) {
		e.disabled || (oe(e), n(e.value), r?.(e), F("select"));
	}
	function ge(e) {
		if ([
			"ArrowDown",
			"ArrowUp",
			"Home",
			"End"
		].includes(e.key)) {
			e.preventDefault();
			let t = e.key === "ArrowUp" || e.key === "End" ? -1 : 1, n = e.key === "Home" ? 0 : e.key === "End" ? G.length - 1 : fe + t;
			for (; n >= 0 && n < G.length && G[n].disabled;) n += t;
			n >= 0 && n < G.length && H(n);
		} else e.key === "Enter" ? (e.preventDefault(), pe && he(pe)) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), F("escape"));
	}
	function _e() {
		P(), y === void 0 && ne(""), H(0), setTimeout(() => se.current?.focus(), 0);
	}
	return /* @__PURE__ */ v("div", {
		className: K("flex flex-col gap-1.5", o),
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
						id: ee,
						"data-control-size": M,
						type: "button",
						disabled: d,
						"aria-label": f ?? (a ? void 0 : i),
						"aria-labelledby": a && !f ? `${B} ${le}` : void 0,
						"aria-describedby": p,
						"aria-invalid": g,
						"aria-expanded": N,
						"aria-haspopup": "listbox",
						"aria-controls": N ? te : void 0,
						onClick: () => N ? F("toggle") : _e(),
						onKeyDown: (e) => {
							(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), _e());
						},
						className: K("ui-sized-control font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms] disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
						children: /* @__PURE__ */ _("span", {
							id: le,
							children: ue ? ue.label : /* @__PURE__ */ _("span", {
								className: "text-text-disabled",
								children: t || i
							})
						})
					}),
					/* @__PURE__ */ _(O, {
						"aria-hidden": "true",
						className: K("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", N && "rotate-180")
					}),
					N && /* @__PURE__ */ v("div", {
						ref: z,
						className: K("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
						children: [
							/* @__PURE__ */ _("div", {
								className: "border-border border-b p-1.5",
								children: /* @__PURE__ */ v("div", {
									className: "relative",
									children: [/* @__PURE__ */ _(ae, {
										"aria-hidden": "true",
										className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2"
									}), /* @__PURE__ */ _("input", {
										ref: se,
										"data-control-size": M,
										"data-has-icon": "true",
										id: U,
										type: "text",
										role: "combobox",
										"aria-label": f ?? (a ? `Search ${a}` : "Search options"),
										"aria-expanded": "true",
										"aria-controls": te,
										"aria-activedescendant": pe && !pe.disabled ? `${te}-${fe}` : void 0,
										"aria-autocomplete": "list",
										"aria-describedby": p,
										"aria-invalid": g,
										value: W,
										onChange: (e) => me(e.target.value),
										onKeyDown: ge,
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
							D && /* @__PURE__ */ v("div", {
								role: "alert",
								className: "text-text-secondary px-3 py-2 text-xs",
								children: [D, k && /* @__PURE__ */ _("button", {
									type: "button",
									onClick: k,
									className: "text-accent ml-2",
									children: "Retry"
								})]
							}),
							/* @__PURE__ */ _("ul", {
								id: te,
								className: "max-h-48 overflow-y-auto py-1",
								role: "listbox",
								"aria-label": a ?? f ?? "Options",
								"aria-busy": w,
								children: G.map((e, n) => /* @__PURE__ */ v("li", {
									id: `${te}-${n}`,
									role: "option",
									"aria-selected": e.value === t,
									"aria-disabled": e.disabled || void 0,
									onClick: () => he(e),
									onMouseEnter: () => {
										e.disabled || H(n);
									},
									className: K("font-control flex w-full items-center gap-2 px-3 py-1.5 text-xs", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : "cursor-pointer", !e.disabled && (n === fe ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover")),
									children: [/* @__PURE__ */ _("span", {
										className: "flex-1",
										children: C ? C(e) : e.label
									}), e.value === t && /* @__PURE__ */ _(E, {
										"aria-hidden": "true",
										className: "h-3 w-3 shrink-0"
									})]
								}, e.value))
							}),
							G.length === 0 && !w && !D && /* @__PURE__ */ _("div", {
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
//#region src/components/ui/DangerZone.tsx
function ao({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: K("border-border mt-8 border-t pt-6", r),
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
function oo(e, t) {
	let { year: n, month: r, day: i } = $(e, t);
	return `${Ua[r - 1]} ${i}, ${n}`;
}
function so({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date...", format: o }) {
	let s = Un(e), { open: c, show: l, close: u, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: g, popupId: y, triggerAria: b } = Qn({
		haspopup: "dialog",
		labelled: !!t
	}), x = $(r ?? /* @__PURE__ */ new Date(), n), [S, C] = h(x.year), [w, E] = h(x.month - 1);
	function D(e) {
		i(e), u("select");
	}
	function O() {
		if (c) {
			u("toggle");
			return;
		}
		r && (C($(r, n).year), E($(r, n).month - 1)), l();
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
					className: K("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? o ? o(r) : oo(r, n) : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ _(T, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				c && /* @__PURE__ */ _("div", {
					ref: m,
					id: y,
					role: "dialog",
					"aria-label": "Choose date",
					className: K("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: /* @__PURE__ */ _(Xa, {
						timeZone: n,
						year: S,
						month: w,
						selected: r,
						onSelect: D,
						onMonthChange: (e, t) => {
							C(e), E(t);
						}
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateRangePicker.tsx
function co(e) {
	return `${Ua[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function lo(e) {
	return e.start && e.end ? `${co(e.start)} – ${co(e.end)}` : e.start ? co(e.start) : "";
}
function uo({ controlSize: e, label: t, value: n, onChange: r, placeholder: i = "Select date range..." }) {
	let a = Un(e), { open: o, show: s, close: c, rootRef: l, anchorRef: u, triggerRef: d, popupRef: f, labelId: p, popupId: m, triggerAria: g } = Qn({
		haspopup: "dialog",
		labelled: !!t
	}), y = /* @__PURE__ */ new Date(), [b, x] = h(n.start?.getFullYear() ?? y.getFullYear()), [S, C] = h(n.start?.getMonth() ?? y.getMonth()), [w, E] = h(null), [D, O] = h("start"), [k, A] = h(n.start), [j, M] = h(n.end), N = S === 11 ? b + 1 : b, P = S === 11 ? 0 : S + 1;
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
	let z = n.start || n.end ? lo(n) : "";
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
					className: K("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: z || /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ _(T, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				o && /* @__PURE__ */ v("div", {
					ref: f,
					id: m,
					role: "dialog",
					"aria-label": "Choose date range",
					className: K("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
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
						children: [/* @__PURE__ */ _(Xa, {
							year: b,
							month: S,
							rangeStart: k,
							rangeEnd: j,
							hoverDate: D === "end" ? w : null,
							onSelect: I,
							onMonthChange: (e, t) => {
								x(e), C(t);
							},
							onHover: E
						}), /* @__PURE__ */ _(Xa, {
							year: N,
							month: P,
							rangeStart: k,
							rangeEnd: j,
							hoverDate: D === "end" ? w : null,
							onSelect: I,
							onMonthChange: (e, t) => {
								t === 0 ? (x(e - 1), C(11)) : (x(e), C(t - 1));
							},
							onHover: E
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateTimePicker.tsx
function fo(e) {
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
function po(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function mo(e, t) {
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
	let n = Ua[e.getMonth()], r = e.getDate(), i = e.getFullYear(), { hour12: a, period: o } = fo(e.getHours());
	return `${n} ${r}, ${i} ${a}:${String(e.getMinutes()).padStart(2, "0")} ${o}`;
}
function ho(e) {
	return String(e).padStart(2, "0");
}
function go(e) {
	return /* @__PURE__ */ _(_o, { ...e }, e.timeZone ?? "browser-local");
}
function _o({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date & time..." }) {
	let o = Un(e), { open: s, show: c, close: l, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: g, popupId: y, triggerAria: b } = Qn({
		haspopup: "dialog",
		labelled: !!t
	}), [x, S] = h(null), [C, w] = h(!1), [E, D] = h("reject"), O = u(), k = $(r ?? /* @__PURE__ */ new Date(), n), A = r ? fo($(r, n).hour) : {
		hour12: 12,
		period: "PM"
	}, [j, M] = h(k.year), [N, P] = h(k.month - 1), [F, I] = h(String(A.hour12)), [L, R] = h(r ? ho($(r, n).minute) : "00"), [z, B] = h(A.period), [ee, te] = h(r);
	function V(e) {
		te(e);
	}
	function ne(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		I(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (I(String(n - 12)), B("PM")) : n === 0 && (I("12"), B("AM"));
	}
	function re() {
		if (!ee) return;
		let e = q(parseInt(F, 10) || 12, 1, 12), t = q(parseInt(L, 10) || 0, 0, 59), a = po(e, z), o = {
			...$(ee, n),
			hour: a,
			minute: t,
			second: 0,
			millisecond: 0
		}, s = r ? $(r, n) : null, c;
		try {
			c = E === "reject" && r && s && [
				"year",
				"month",
				"day",
				"hour",
				"minute"
			].every((e) => s[e] === o[e]) ? new Date(r) : ni(o, n, E);
			let e = $(c, n);
			if (e.hour !== a || e.minute !== t || e.day !== o.day) throw RangeError("This time does not exist in the selected timezone");
		} catch (e) {
			let t = e instanceof Error ? e.message : "Invalid date and time";
			S(t), w(t.includes("twice"));
			return;
		}
		S(null), i(c), l("select");
	}
	function H() {
		if (s) {
			l("toggle");
			return;
		}
		if (r) {
			M($(r, n).year), P($(r, n).month - 1), te(r);
			let e = fo($(r, n).hour);
			I(String(e.hour12)), B(e.period), R(ho($(r, n).minute));
		}
		S(null);
		let e = !1;
		if (r && n) try {
			ni($(r, n), n, "reject");
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
					onClick: H,
					"data-control-size": o,
					className: K("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? mo(r, n) : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ _(T, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				s && /* @__PURE__ */ v("div", {
					ref: m,
					id: y,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: K("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [
						/* @__PURE__ */ _(Xa, {
							timeZone: n,
							year: j,
							month: N,
							selected: ee,
							onSelect: V,
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
							value: E,
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
											onChange: (e) => ne(e.target.value),
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
										className: K("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "AM"
									}), /* @__PURE__ */ _("button", {
										type: "button",
										onClick: () => B("PM"),
										"aria-pressed": z === "PM",
										className: K("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "PM"
									})]
								}),
								/* @__PURE__ */ _("button", {
									type: "button",
									onClick: re,
									disabled: !ee,
									className: K("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", ee ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
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
//#region src/components/ui/DetailPanel.tsx
var vo = 360, yo = 260, bo = 700;
function xo({ open: e, onClose: t, title: n, children: r, className: i, resizable: a = !0, defaultWidth: o = vo, minWidth: c = yo, maxWidth: l = bo }) {
	let [u, d] = h(o), f = m(!1), p = m(0), g = m(0), [y, b] = h(!1), x = wt(e, () => t()), S = s(() => {
		f.current = !1, b(!1);
	}, []), C = s((e) => {
		if (!a) return;
		e.preventDefault(), f.current = !0, b(!0), p.current = e.clientX, g.current = u;
		let t = e.currentTarget, n = t.ownerDocument, r = () => {
			n.removeEventListener("pointerup", r), n.removeEventListener("pointercancel", r), S();
		};
		n.addEventListener("pointerup", r), n.addEventListener("pointercancel", r), t.setPointerCapture(e.pointerId);
	}, [
		a,
		u,
		S
	]), w = s((e) => {
		if (!f.current) return;
		let t = p.current - e.clientX;
		d(Math.max(c, Math.min(l, g.current + t)));
	}, [c, l]);
	return /* @__PURE__ */ _("div", {
		className: K("border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l", !y && "transition-[width] duration-[200ms] ease-out", i),
		style: { width: e ? u : 0 },
		children: e && /* @__PURE__ */ v("div", {
			className: "animate-fade-in flex h-full flex-col",
			style: { width: u },
			children: [
				a && /* @__PURE__ */ _("div", {
					onPointerDown: C,
					onPointerMove: w,
					onPointerUp: S,
					onPointerCancel: S,
					onLostPointerCapture: S,
					className: "hover:bg-accent/30 active:bg-accent/40 absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none"
				}),
				/* @__PURE__ */ v("div", {
					className: "border-border flex h-10 shrink-0 items-center justify-between border-b px-3",
					children: [/* @__PURE__ */ _("h3", {
						className: "text-text-primary truncate text-xs font-semibold",
						children: n
					}), /* @__PURE__ */ _("button", {
						type: "button",
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close panel",
						children: /* @__PURE__ */ _(U, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ _("div", {
					className: "flex-1 overflow-y-auto p-3",
					children: /* @__PURE__ */ _(Ct.Provider, {
						value: x,
						children: r
					})
				})
			]
		})
	});
}
function So(e, t) {
	let n = /^\s*(\d*\.?\d+)(px|rem)\s*$/.exec(e);
	if (!n) return 8;
	let r = Number(n[1]), i = n[2] === "rem" ? r * t : r;
	return Number.isFinite(i) && i >= 0 ? i * 2 : 8;
}
function Co(e, t, [n, r], [i, a], [o, s], c) {
	let [l, u] = r - n <= s - o - c * 2 ? [n, r] : [i, a], d = t + (o + c - l), f = t + (s - c - u);
	return f < d && (f = d), d = Math.min(d, 0), f = Math.max(f, 0), q(e, d, f);
}
function wo(e, t, n, r, i, a) {
	return {
		x: Co(e.x, t.x, [n.left, n.right], [r.left, r.right], [i.left, i.right], a),
		y: Co(e.y, t.y, [n.top, n.bottom], [r.top, r.bottom], [i.top, i.bottom], a)
	};
}
function To({ x: e, y: t }) {
	return e === 0 && t === 0 ? "" : `${e}px ${t}px`;
}
var Eo = 10, Do = 50;
function Oo(e, t) {
	let n = t ? Do : Eo;
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
var ko = 10, Ao = 50;
function jo({ left: e, top: t }, n, r, i, a) {
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
function Mo(e, { min: t, max: n }) {
	let r = (e, t, n) => Math.round(q(e, t, n));
	return {
		width: r(e.width, t.width, n.width),
		height: r(e.height, t.height, n.height)
	};
}
function No(e, t) {
	let n = t ? Ao : ko;
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
var Po = {
	sm: "max-w-[400px]",
	md: "max-w-[576px]",
	lg: "max-w-[768px]",
	xl: "max-w-[1024px]"
}, Fo = "(min-width: 48rem)", Io = "a[href], button, input, select, textarea, label, summary, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [tabindex]:not([tabindex=\"-1\"])", Lo = {
	x: 0,
	y: 0
};
function Ro(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top,
		right: t.left + e.clientWidth,
		bottom: t.top + e.clientHeight
	};
}
var zo = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function Bo(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function Vo(e, t) {
	let n = t.getBoundingClientRect();
	return {
		left: n.left + e.offsetLeft - t.scrollLeft,
		top: n.top + e.offsetTop - t.scrollTop,
		width: e.offsetWidth,
		height: e.offsetHeight
	};
}
function Ho(e, t) {
	if (!(e instanceof HTMLElement) || !e.isConnected) return null;
	let n = e.ownerDocument;
	return e === n.body || e === n.documentElement || t.contains(e) ? null : e.getClientRects().length > 0 ? e : null;
}
function Uo(e) {
	return e.ownerDocument.defaultView?.matchMedia(Fo).matches ?? !1;
}
function Wo(e) {
	let t = e.ownerDocument.defaultView;
	return t ? So(t.getComputedStyle(e).getPropertyValue("--spacing"), parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize)) : 8;
}
function Go(e, t, n) {
	e.style.width = n ? `${n.width}px` : "", e.style.height = n ? `${n.height}px` : "", e.style.maxWidth = n ? "none" : "", t && (t.style.flex = n ? "1 1 0%" : "", t.style.minHeight = n ? "0" : "", t.style.overflowY = n ? "auto" : "");
}
function Ko(e, t) {
	return {
		width: 280,
		height: e.offsetHeight - (t?.offsetHeight ?? 0) + 48
	};
}
function qo({ open: e, draggable: t, resizable: n, remember: r, placement: i, anchorRef: a }, o, s, c) {
	let l = m(Lo), u = m(Lo), d = m(8), p = m(null), h = m(null), g = m(null), _ = m(!1), v = m(null), y = e && t, b = e && n, x = r && (t || n);
	f(() => {
		let t = o.current, r = y ? s.current : null, f = c.current, m = t?.parentElement, S = t?.ownerDocument.defaultView, C = i !== "center";
		if (x || (g.current = null), (!e && !x || !n) && (v.current = null), !e || !t || !m || !S || !r && !C && !b) return;
		let w = C ? Ho(t.ownerDocument.activeElement, t) : null, T = () => C ? Ho(a?.current, t) ?? Ho(w, t) : null, E = () => Bo(u.current, l.current), D = () => {
			t.style.translate = To(E());
		}, O = () => {
			let e = Vo(t, m);
			if (_.current && g.current) {
				u.current = {
					x: g.current.left - e.left,
					y: g.current.top - e.top
				}, l.current = Lo, t.dataset.placement = "remembered", t.style.transformOrigin = "";
				return;
			}
			let n = Uo(t) ? T() : null, r = C && n ? en(i, n.getBoundingClientRect(), {
				size: {
					width: e.width,
					height: e.height
				},
				bounds: Ro(m),
				margin: d.current,
				gap: d.current
			}) : null;
			u.current = r ? {
				x: r.left - e.left,
				y: r.top - e.top
			} : Lo, t.dataset.placement = r?.side ?? "center", t.style.transformOrigin = r ? zo[r.side] : "";
		}, k = () => {
			let e = l.current;
			if (!r && !_.current || !_.current && e.x === 0 && e.y === 0) return;
			let n = E(), i = wo(n, n, t.getBoundingClientRect(), (r ?? s.current ?? t).getBoundingClientRect(), Ro(m), d.current);
			if (l.current = {
				x: i.x - u.current.x,
				y: i.y - u.current.y
			}, D(), _.current) {
				let e = Vo(t, m);
				g.current = {
					left: e.left + i.x,
					top: e.top + i.y
				};
			}
		}, A = () => {
			d.current = Wo(t), Uo(t) || (p.current = null, h.current = null, l.current = Lo, _.current = !1, g.current = null, v.current && Go(t, f, null), v.current = null);
			let e = v.current;
			if (e && !h.current) {
				let n = Ro(m), r = d.current, i = _.current && g.current ? g.current : {
					left: n.left + r,
					top: n.top + r
				}, a = Mo(e, jo(i, e, Ko(t, f), n, r)), o = Math.max(n.left + r, Math.min(i.left, n.right - r - a.width)), s = Math.max(n.top + r, Math.min(i.top, n.bottom - r - a.height));
				(a.width !== e.width || a.height !== e.height) && (v.current = a, Go(t, f, a)), _.current && (o !== i.left || s !== i.top) && (g.current = {
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
		return _.current = x && g.current !== null, b && v.current && Go(t, f, v.current), A(), S.addEventListener("resize", M), S.addEventListener("scroll", M, {
			capture: !0,
			passive: !0
		}), t.addEventListener("animationend", N), P?.observe(t), () => {
			S.cancelAnimationFrame(j), S.removeEventListener("resize", M), S.removeEventListener("scroll", M, { capture: !0 }), t.removeEventListener("animationend", N), P?.disconnect(), p.current = null, h.current = null, u.current = Lo, l.current = Lo, _.current = !1, t.style.translate = "", t.style.transformOrigin = "", b && (t.style.userSelect = "", Go(t, f, null)), delete t.dataset.placement;
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
		let n = Bo(u.current, l.current), r = Vo(e, t);
		g.current = {
			left: r.left + n.x,
			top: r.top + n.y
		}, u.current = n, l.current = Lo, _.current = !0, e.dataset.placement = "remembered", e.style.transformOrigin = "";
	}, C = (e) => s.current ?? e, w = (e) => {
		let t = o.current, n = e.currentTarget, r = t?.parentElement;
		if (!t || !r || e.button !== 0 || !e.isPrimary || h.current) return;
		let i = e.target.closest(Io);
		i && i !== n && n.contains(i) || !Uo(t) || (e.preventDefault(), n.setPointerCapture(e.pointerId), n.style.cursor = "grabbing", p.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			origin: Bo(u.current, l.current),
			dialog: t.getBoundingClientRect(),
			handle: C(n).getBoundingClientRect(),
			bounds: Ro(r),
			margin: d.current,
			moved: !1
		});
	}, T = (e) => {
		let t = p.current, n = o.current;
		if (!t || t.pointerId !== e.pointerId || !n) return;
		let r = wo({
			x: t.origin.x + e.clientX - t.startX,
			y: t.origin.y + e.clientY - t.startY
		}, t.origin, t.dialog, t.handle, t.bounds, t.margin);
		t.moved ||= r.x !== t.origin.x || r.y !== t.origin.y, l.current = {
			x: r.x - u.current.x,
			y: r.y - u.current.y
		}, n.style.translate = To(r);
	}, E = (e) => {
		let t = p.current, n = e.currentTarget;
		if ((!t || t.pointerId === e.pointerId) && n.style.cursor === "grabbing" && (n.style.cursor = ""), t?.pointerId !== e.pointerId) return;
		p.current = null;
		let r = o.current, i = r?.parentElement;
		!(x || _.current) || !t.moved || !r || !i || S(r, i);
	}, D = (e) => {
		let t = Oo(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
		if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || h.current || !Uo(n)) return;
		e.preventDefault();
		let i = Bo(u.current, l.current), a = wo({
			x: i.x + t.x,
			y: i.y + t.y
		}, i, n.getBoundingClientRect(), C(e.currentTarget).getBoundingClientRect(), Ro(r), d.current);
		a.x === i.x && a.y === i.y || (l.current = {
			x: a.x - u.current.x,
			y: a.y - u.current.y
		}, n.style.translate = To(a), (x || _.current) && S(n, r));
	}, O = (e, t, n) => {
		(!_.current || !g.current) && S(e, t);
		let r = g.current;
		if (!r) return;
		v.current = n, Go(e, c.current, n);
		let i = Vo(e, t);
		u.current = {
			x: r.left - i.left,
			y: r.top - i.top
		}, l.current = Lo, e.style.translate = To(u.current);
	}, k = (e, t) => {
		let n = Vo(e, t), r = Bo(u.current, l.current), i = {
			width: n.width,
			height: n.height
		};
		return {
			current: i,
			limits: jo({
				left: n.left + r.x,
				top: n.top + r.y
			}, i, Ko(e, c.current), Ro(t), d.current)
		};
	}, A = (e) => {
		let t = o.current, n = t?.parentElement;
		if (!t || !n || e.button !== 0 || !e.isPrimary || p.current || !Uo(t)) return;
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
		let i = Mo({
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
				let t = No(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
				if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || h.current || !Uo(n)) return;
				e.preventDefault();
				let { current: i, limits: a } = k(n, r), s = Mo({
					width: i.width + t.width,
					height: i.height + t.height
				}, a);
				s.width === i.width && s.height === i.height || O(n, r, s);
			}
		} : void 0
	};
}
function Jo({ open: e, onClose: t, title: n, children: r, footer: i, className: a, size: o = "sm", draggable: s = !1, resizable: c = !1, rememberPosition: l = !1, placement: d = "center", anchorRef: f, role: p = "dialog", description: h, "aria-label": g, "aria-describedby": y, initialFocusRef: b, returnFocusRef: x, busy: S = !1, closeOnEscape: C = !0, closeOnOverlayClick: w = !0, hideCloseButton: T = !1 }) {
	let E = Un(), D = m(null), [O, k] = Pt(D), A = m(null), j = m(null), M = u(), N = u();
	ht(D, e, {
		initialFocusRef: b,
		returnFocusRef: x
	});
	let { drag: P, resize: L } = qo({
		open: e,
		draggable: s,
		resizable: c,
		remember: l,
		placement: d,
		anchorRef: f
	}, D, A, j), R = wt(e, (e) => {
		!C || S || (e.preventDefault(), t());
	});
	if (Tt(e), !e) return null;
	let z = P && /* @__PURE__ */ _("button", {
		type: "button",
		"aria-label": "Move dialog",
		title: "Move dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-grip": "",
		className: "text-text-tertiary hover:text-text-secondary hover:bg-bg-hover focus-visible:outline-accent order-first hidden h-5 w-5 shrink-0 cursor-grab items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 md:flex md:touch-none md:select-none",
		...P.pointer,
		onKeyDown: P.onKeyDown,
		children: /* @__PURE__ */ _(F, {
			className: "h-3.5 w-3.5",
			"aria-hidden": "true"
		})
	}), B = L && /* @__PURE__ */ _("button", {
		type: "button",
		"aria-label": "Resize dialog",
		title: "Resize dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-resize": "",
		className: "text-text-tertiary hover:text-text-primary focus-visible:outline-accent absolute right-0.5 bottom-0.5 hidden h-4 w-4 cursor-nwse-resize items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-0 md:flex md:touch-none md:select-none",
		...L.pointer,
		onKeyDown: L.onKeyDown,
		children: /* @__PURE__ */ _(I, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		})
	});
	return ue(/* @__PURE__ */ _(Ct.Provider, {
		value: R,
		children: /* @__PURE__ */ _(Mt.Provider, {
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
					className: K(`relative z-50 mx-1 mb-8 flex w-full ${Po[o]} flex-col`, "bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
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
							className: K("ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5", s && "md:cursor-move md:touch-none md:select-none"),
							...P?.pointer,
							children: [n && /* @__PURE__ */ _("h3", {
								id: M,
								className: "text-text-primary min-w-0 text-sm font-medium",
								children: n
							}), !T && /* @__PURE__ */ _(Xn, {
								type: "button",
								variant: "icon",
								size: "sm",
								"aria-disabled": S || void 0,
								onClick: () => {
									S || t();
								},
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ _(U, { className: "h-4 w-4" })
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
							className: K("ui-bar border-border bg-bg-primary/50 flex shrink-0 rounded-b-lg border-t px-3 py-2.5", B && "md:pr-6", z ? "items-center gap-2" : "flex-col justify-center"),
							children: [z ? /* @__PURE__ */ _("div", {
								className: "flex min-w-0 flex-1 flex-col justify-center",
								children: i
							}) : i, z]
						}),
						z && !i && /* @__PURE__ */ _("div", {
							className: "hidden px-3 pb-2 md:flex",
							children: z
						}),
						B && !i && !z && /* @__PURE__ */ _("div", {
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
function Yo({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a, busy: o = !1, busyLabel: s = "Working…", cancelRef: c, confirmRef: l, confirmDisabled: u = !1 }) {
	return /* @__PURE__ */ v("div", {
		className: K("flex justify-end gap-2", a),
		"aria-busy": o || void 0,
		children: [/* @__PURE__ */ _(Xn, {
			ref: c,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-disabled": o || void 0,
			onClick: () => {
				o || e();
			},
			children: n
		}), /* @__PURE__ */ _(Xn, {
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
function Xo({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: K("my-6 flex items-center gap-3", t),
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
var Zo = (e) => !e.divider;
function Qo(e) {
	return e.checked === void 0 ? "menuitem" : e.type === "radio" ? "menuitemradio" : "menuitemcheckbox";
}
function $o({ trigger: e, items: r, align: i = "right" }) {
	let [a, c] = h(!1), d = Nt(), [f, p] = h(0), [y, b] = h(""), [x, S] = h(-1), C = m(null), w = m(null), T = m(null), D = m([]), O = m(!1), k = u(), A = `${k}menu`, j = o(e) && e.type !== t ? e : null, M = j?.props.id, N = typeof M == "string" && M ? M : `${k}trigger`, P = [];
	r.forEach((e) => {
		Zo(e) && P.push({
			item: e,
			index: P.length
		});
	});
	let F = P.filter(({ item: e }) => !e.disabled), I = () => {
		let e = C.current;
		return e ? j ? [...e.querySelectorAll("[id]")].find((e) => e.id === N) ?? e.querySelector("button, a[href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])") ?? e.firstElementChild ?? e : e : null;
	}, L = s((e) => {
		c(!1), S(-1), (e === "escape" || e === "select" || e === "tab") && w.current?.focus();
	}, []);
	dn(a, L, [T], [C]), ln(a, w, T, {
		side: "bottom",
		align: i === "left" ? "start" : "end",
		gap: 4,
		onAnchorHidden: L
	}), l(() => {
		a && (x >= 0 ? D.current[x] : T.current)?.focus();
	}, [a, x]);
	function R(e) {
		let t = I();
		w.current = t, b(t?.id ?? ""), p(t?.getBoundingClientRect().width ?? 0), c(!0), S((e === "first" ? F[0] : e === "last" ? F.at(-1) : null)?.index ?? -1);
	}
	function z(e) {
		if (!(O.current && (O.current = !1, e.detail === 0))) {
			if (a) {
				L();
				return;
			}
			R(e.detail === 0 ? "first" : "menu");
		}
	}
	function B(e) {
		O.current = !1, e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), R(e.key === "ArrowDown" ? "first" : "last")) : !j && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a ? L("select") : R("first"));
	}
	function ee(e) {
		!e || e.item.disabled || (L("select"), e.item.onClick());
	}
	function te(e, t) {
		let n = P.length, r = e === -1 && t === -1 ? n : e;
		for (let e = 1; e <= n; e++) {
			let i = P[(r + t * e + n * 2) % n];
			if (!i.item.disabled) return i.index;
		}
		return -1;
	}
	function V(e) {
		let t = ir(P.map((e) => e.item.label), (e) => !!P[e].item.disabled, x, e);
		return t === -1 ? x : P[t].index;
	}
	function ne(e) {
		let { key: t } = e, n = null;
		if (t === "ArrowDown") n = te(x, 1);
		else if (t === "ArrowUp") n = te(x, -1);
		else if (t === "Home") n = F[0]?.index ?? -1;
		else if (t === "End") n = F.at(-1)?.index ?? -1;
		else if (t === "Enter" || t === " ") {
			e.preventDefault();
			let n = D.current.indexOf(e.target), r = n === -1 ? void 0 : P[n];
			if (!r || r.item.disabled) return;
			t === " " && (O.current = !0), ee(r);
			return;
		} else if (t === "Tab") {
			L("tab");
			return;
		} else t !== " " && tr(e) && (n = V(t));
		n !== null && (e.preventDefault(), S(n));
	}
	let re = {
		"aria-haspopup": "menu",
		"aria-expanded": a,
		"aria-controls": a ? A : void 0
	}, H = -1;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", {
		ref: C,
		onClick: z,
		onKeyDown: B,
		...j ? {} : {
			...re,
			id: N,
			role: "button",
			tabIndex: 0
		},
		children: j ? n(j, {
			...re,
			id: N
		}) : e
	}), a && ue(/* @__PURE__ */ _("div", {
		ref: T,
		id: A,
		role: "menu",
		"aria-labelledby": y || N,
		tabIndex: -1,
		onKeyDown: ne,
		onFocus: (e) => e.stopPropagation(),
		onBlur: (e) => e.stopPropagation(),
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none",
		style: { minWidth: f },
		children: r.map((e, t) => {
			if (e.divider) return /* @__PURE__ */ _("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${t}`);
			H++;
			let n = P[H], r = e.checked !== void 0;
			return /* @__PURE__ */ v("button", {
				type: "button",
				ref: (e) => {
					D.current[n.index] = e;
				},
				role: Qo(e),
				"aria-checked": r ? e.checked : void 0,
				"aria-disabled": e.disabled || void 0,
				tabIndex: n.index === x ? 0 : -1,
				onClick: () => ee(n),
				onMouseDown: e.disabled ? (e) => e.preventDefault() : void 0,
				onFocus: () => S(n.index),
				onMouseMove: () => {
					!e.disabled && n.index !== x && S(n.index);
				},
				className: K("flex h-7 w-full items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.disabled ? "text-text-secondary cursor-not-allowed opacity-50" : e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted cursor-pointer" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover cursor-pointer"),
				children: [
					e.icon && /* @__PURE__ */ _("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center",
						children: e.icon
					}),
					/* @__PURE__ */ _("span", {
						className: "flex-1",
						children: e.label
					}),
					e.shortcut && /* @__PURE__ */ _("span", {
						className: "text-2xs text-text-tertiary ml-auto pl-4 font-mono",
						children: e.shortcut
					}),
					e.checked && /* @__PURE__ */ _(E, { className: "text-accent ml-auto h-3.5 w-3.5 shrink-0" })
				]
			}, `item-${t}`);
		})
	}), d ?? document.body)] });
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function es({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ v("div", {
		className: K("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ _("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ _(L, { className: "h-5 w-5" })
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
var ts = class extends e {
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
				/* @__PURE__ */ _(Xn, {
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
function ns({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ _($o, {
		align: r,
		trigger: /* @__PURE__ */ _(Er, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function rs({ children: e, className: t }) {
	return /* @__PURE__ */ _("kbd", {
		className: K("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var is = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function as({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ _("div", {
		className: K("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ _(z, { className: K("text-accent animate-spin", is[t]) })
	});
}
//#endregion
//#region src/lib/layout.ts
function os(e, t, n, r) {
	let i = typeof t == "object" ? t : { base: t }, a = { [`--ui-${e}-base`]: n(i.base ?? r) };
	for (let t of [
		"sm",
		"md",
		"lg",
		"xl"
	]) a[`--ui-${e}-${t}`] = i[t] === void 0 ? "initial" : n(i[t]);
	return a;
}
function ss(e) {
	return typeof e == "number" ? `repeat(${e}, minmax(0, 1fr))` : e;
}
function cs(e = 0, t, n) {
	return {
		"--ui-gap": `calc(var(--spacing) * ${e})`,
		"--ui-gap-x": t === void 0 ? "initial" : `calc(var(--spacing) * ${t})`,
		"--ui-gap-y": n === void 0 ? "initial" : `calc(var(--spacing) * ${n})`
	};
}
function ls(e) {
	return e === "start" || e === "end" ? `flex-${e}` : e;
}
function us(e) {
	return e === "between" || e === "around" || e === "evenly" ? `space-${e}` : ls(e);
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
var ds = "ui-metadata-stripe rounded-md px-2 py-1.5";
function fs(e, t) {
	return os("stripe", t, (t) => Math.floor(e / t) % 2 == 0 ? "var(--ui-metadata-stripe-color, var(--bg-tertiary))" : "transparent", 1);
}
function ps({ items: e, labelWidth: n = "100px", layout: r = "inline", columns: i = 1, gap: a = 3, striped: o = !1, className: s }) {
	return r === "stacked" ? /* @__PURE__ */ _("dl", {
		className: K("ui-grid text-xs", s),
		style: {
			...os("columns", i, ss, 1),
			...o ? cs(a, void 0, 0) : cs(a)
		},
		children: e.map((e, t) => /* @__PURE__ */ v("div", {
			className: o ? ds : void 0,
			style: o ? fs(t, i) : void 0,
			children: [/* @__PURE__ */ _("dt", {
				className: "text-text-tertiary font-label",
				children: e.label
			}), /* @__PURE__ */ _("dd", {
				className: K((typeof e.value == "string" || typeof e.value == "number") && "text-text-primary font-data"),
				children: e.value
			})]
		}, e.label))
	}) : o ? /* @__PURE__ */ _("div", {
		className: K("gap-x-3 text-xs", s),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e, t) => /* @__PURE__ */ v("div", {
			className: ds,
			style: {
				...fs(t, 1),
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
		className: K("gap-x-3 gap-y-2 text-xs", s),
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
var ms = {
	positive: "success",
	negative: "danger",
	neutral: "neutral"
};
function hs({ label: e, value: t, sub: n, trend: r, bar: i, icon: a, iconColor: o, className: s }) {
	let c = r && ms[r.tone], l = Sn(bn(c) ? c : "neutral").text;
	return /* @__PURE__ */ v("div", {
		className: K("bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3", s),
		children: [
			a && /* @__PURE__ */ _(a, { className: K("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", o) }),
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
					className: K("font-medium tabular-nums", l),
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
function gs() {
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
function _s() {
	return /* @__PURE__ */ _("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ _("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var vs = {
	github: "GitHub",
	google: "Google"
}, ys = {
	github: _s,
	google: gs
};
function bs({ provider: e, children: t, ...n }) {
	let r = ys[e];
	return /* @__PURE__ */ v(Xn, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ _(r, {}), t ?? vs[e]]
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function xs({ title: e, subtitle: t, actions: n, className: r, eyebrow: i, headingLevel: a = 1, wrap: o = !1 }) {
	let s = `h${a}`;
	return /* @__PURE__ */ v("div", {
		className: K("flex items-center justify-between gap-3", o && "flex-wrap", r),
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
			className: K("flex items-center gap-2", o && "flex-wrap"),
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/PageSection.tsx
function Ss({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ v("section", {
		className: K("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ v("div", {
			className: K("border-border flex items-end justify-between gap-3 border-b pb-2", o),
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
var Cs = [
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
function ws({ page: e, pageSize: t, total: n, pageSizeOptions: r = Cs, onPageChange: i, onPageSizeChange: a, className: o }) {
	let s = Math.ceil(n / t), c = Math.min((e - 1) * t + 1, n), l = Math.min(e * t, n);
	return /* @__PURE__ */ v("div", {
		className: K("flex items-center justify-between", o),
		children: [/* @__PURE__ */ v("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ _(or, {
				size: "sm",
				value: String(t),
				onChange: (e) => a(Number(e)),
				options: r,
				className: "w-28"
			}), /* @__PURE__ */ v("span", {
				className: "text-text-tertiary hidden text-xs sm:inline",
				children: [
					c,
					"–",
					l,
					" of ",
					n
				]
			})]
		}), /* @__PURE__ */ _(kr, {
			page: e,
			totalPages: s,
			onPageChange: i
		})]
	});
}
//#endregion
//#region src/components/ui/useFieldControl.ts
function Ts({ id: e, error: t, hint: n, describedBy: r, invalid: i, required: a }) {
	let o = u(), s = c(Cr), l = e ?? s?.id ?? o, d = t ? `${l}-error` : void 0, f = n ? `${l}-hint` : void 0;
	return {
		inputId: l,
		errorId: d,
		hintId: f,
		describedBy: wr(r, s?.describedBy, f, d),
		invalid: i ?? (!!t || s?.invalid || void 0),
		required: a ?? s?.required
	};
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var Es = a(({ label: e, error: t, className: n, id: r, hint: i, controlSize: a, required: o, "aria-describedby": s, "aria-invalid": c, ...l }, u) => {
	let d = Ts({
		id: r,
		error: t,
		hint: i,
		describedBy: s,
		invalid: c,
		required: o
	}), { inputId: f, errorId: p, hintId: m } = d, g = Un(a), [y, b] = h(!1);
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
					className: K("ui-password-input ui-sized-control bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
					...l
				}), /* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => b(!y),
					"data-control-size": g,
					className: "ui-password-toggle text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",
					"aria-label": y ? "Hide password" : "Show password",
					children: _(y ? P : N, { className: "h-3.5 w-3.5" })
				})]
			})
		]
	});
});
Es.displayName = "PasswordInput";
var Ds = Object.freeze([
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
function Os(e, t = Ds) {
	return t.every((t) => t.test(e));
}
//#endregion
//#region src/components/ui/PasswordRequirements.tsx
function ks({ password: e, requirements: t = Ds, showWhenEmpty: n = !1, className: r }) {
	return !n && e.length === 0 ? null : /* @__PURE__ */ _("ul", {
		"aria-label": "Password requirements",
		className: K("space-y-1", r),
		children: t.map((t) => {
			let n = t.test(e);
			return /* @__PURE__ */ v("li", {
				className: "flex items-center gap-1.5",
				children: [n ? /* @__PURE__ */ _(E, {
					"aria-hidden": "true",
					className: "text-green h-3 w-3"
				}) : /* @__PURE__ */ _(U, {
					"aria-hidden": "true",
					className: "text-text-disabled h-3 w-3"
				}), /* @__PURE__ */ v("span", {
					className: K("text-2xs", n ? "text-green" : "text-text-disabled"),
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
//#region src/components/ui/ProfileHeader.tsx
function As({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ v("div", {
		className: K("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ _(_n, {
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
function js({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: K("ui-prose", t),
		children: e
	});
}
//#endregion
//#region src/lib/qrCode.ts
var Ms = class extends RangeError {
	constructor() {
		super("Text is too long to encode as a QR code"), this.name = "QrCapacityError";
	}
}, Ns = {
	L: 0,
	M: 1,
	Q: 2,
	H: 3
}, Ps = {
	L: 1,
	M: 0,
	Q: 3,
	H: 2
}, Fs = [
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
], Is = [
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
function Ls(e) {
	let t = (16 * e + 128) * e + 64;
	if (e >= 2) {
		let n = Math.floor(e / 7) + 2;
		t -= (25 * n - 10) * n - 55, e >= 7 && (t -= 36);
	}
	return t;
}
function Rs(e, t) {
	let n = Ns[t];
	return Math.floor(Ls(e) / 8) - Fs[n][e] * Is[n][e];
}
function zs(e) {
	if (e === 1) return [];
	let t = Math.floor(e / 7) + 2, n = Math.floor((e * 8 + t * 3 + 5) / (t * 4 - 4)) * 2, r = [6];
	for (let i = e * 4 + 17 - 7; r.length < t; i -= n) r.splice(1, 0, i);
	return r;
}
function Bs(e, t) {
	let n = 0;
	for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285, n ^= (t >>> r & 1) * e;
	return n;
}
function Vs(e) {
	let t = Array(e).fill(0);
	t[e - 1] = 1;
	let n = 1;
	for (let r = 0; r < e; r++) {
		for (let e = 0; e < t.length; e++) t[e] = Bs(t[e], n), e + 1 < t.length && (t[e] ^= t[e + 1]);
		n = Bs(n, 2);
	}
	return t;
}
function Hs(e, t) {
	let n = Array(t.length).fill(0);
	for (let r of e) {
		let e = r ^ n.shift();
		n.push(0), t.forEach((t, r) => {
			n[r] ^= Bs(t, e);
		});
	}
	return n;
}
function Us(e, t, n) {
	let r = Rs(t, n) * 8, i = [], a = (e, t) => {
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
function Ws(e, t, n) {
	let r = Ns[n], i = Is[r][t], a = Fs[r][t], o = Math.floor(Ls(t) / 8), s = i - o % i, c = Math.floor(o / i), l = Vs(a), u = [];
	for (let t = 0, n = 0; t < i; t++) {
		let r = c - a + (t < s ? 0 : 1), i = e.slice(n, n + r);
		n += r;
		let o = Hs(i, l);
		t < s && i.push(0), u.push(i.concat(o));
	}
	let d = [];
	for (let e = 0; e < u[0].length; e++) u.forEach((t, n) => {
		(e !== c - a || n >= s) && d.push(t[e]);
	});
	return d;
}
var Gs = class {
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
function Ks(e, t) {
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
	let r = zs(t), i = r.length - 1;
	r.forEach((t, n) => {
		r.forEach((r, a) => {
			if (!(n === 0 && a === 0 || n === 0 && a === i || n === i && a === 0)) for (let n = -2; n <= 2; n++) for (let i = -2; i <= 2; i++) e.setFunction(t + i, r + n, Math.max(Math.abs(i), Math.abs(n)) !== 1);
		});
	}), qs(e, "M", 0), Js(e, t);
}
function qs(e, t, n) {
	let r = Ps[t] << 3 | n, i = r;
	for (let e = 0; e < 10; e++) i = i << 1 ^ (i >>> 9) * 1335;
	let a = (r << 10 | i) ^ 21522, o = (e) => (a >>> e & 1) != 0, { size: s } = e;
	for (let t = 0; t <= 5; t++) e.setFunction(8, t, o(t));
	e.setFunction(8, 7, o(6)), e.setFunction(8, 8, o(7)), e.setFunction(7, 8, o(8));
	for (let t = 9; t < 15; t++) e.setFunction(14 - t, 8, o(t));
	for (let t = 0; t < 8; t++) e.setFunction(s - 1 - t, 8, o(t));
	for (let t = 8; t < 15; t++) e.setFunction(8, s - 15 + t, o(t));
	e.setFunction(8, s - 8, !0);
}
function Js(e, t) {
	if (t < 7) return;
	let n = t;
	for (let e = 0; e < 12; e++) n = n << 1 ^ (n >>> 11) * 7973;
	let r = t << 12 | n;
	for (let t = 0; t < 18; t++) {
		let n = (r >>> t & 1) != 0, i = e.size - 11 + t % 3, a = Math.floor(t / 3);
		e.setFunction(i, a, n), e.setFunction(a, i, n);
	}
}
function Ys(e, t) {
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
var Xs = [
	(e, t) => (e + t) % 2 == 0,
	(e, t) => t % 2 == 0,
	(e) => e % 3 == 0,
	(e, t) => (e + t) % 3 == 0,
	(e, t) => (Math.floor(e / 3) + Math.floor(t / 2)) % 2 == 0,
	(e, t) => e * t % 2 + e * t % 3 == 0,
	(e, t) => (e * t % 2 + e * t % 3) % 2 == 0,
	(e, t) => ((e + t) % 2 + e * t % 3) % 2 == 0
];
function Zs(e, t) {
	for (let n = 0; n < e.size; n++) for (let r = 0; r < e.size; r++) !e.isFunction[n][r] && Xs[t](r, n) && (e.modules[n][r] = !e.modules[n][r]);
}
var Qs = [[
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
function $s(e) {
	let t = e.length, n = (t, n, r) => r ? e[t][n] : e[n][t], r = 0;
	for (let e of [!1, !0]) for (let i = 0; i < t; i++) {
		let a = 1;
		for (let o = 1; o <= t; o++) o < t && n(o, i, e) === n(o - 1, i, e) ? a++ : (a >= 5 && (r += 3 + (a - 5)), a = 1);
		for (let a = 0; a + 11 <= t; a++) for (let t of Qs) t.every((t, r) => n(a + r, i, e) === t) && (r += 40);
	}
	for (let n = 0; n < t - 1; n++) for (let i = 0; i < t - 1; i++) {
		let t = e[n][i];
		t === e[n][i + 1] && t === e[n + 1][i] && t === e[n + 1][i + 1] && (r += 3);
	}
	let i = e.reduce((e, t) => e + t.filter(Boolean).length, 0) * 100 / (t * t);
	return r += Math.floor(Math.abs(i - 50) / 5) * 10, r;
}
function ec(e, t = "M") {
	if (!Object.hasOwn(Ns, t)) throw RangeError(`Invalid QR error correction level "${t}"; expected L, M, Q or H`);
	let n = new TextEncoder().encode(e), r = 1;
	for (; r <= 40 && !(4 + (r <= 9 ? 8 : 16) + n.length * 8 <= Rs(r, t) * 8); r++);
	if (r > 40) throw new Ms();
	let i = Ws(Us(n, r, t), r, t), a = new Gs(r * 4 + 17);
	Ks(a, r), Ys(a, i);
	let o = 0, s = Infinity;
	for (let e = 0; e < 8; e++) {
		Zs(a, e), qs(a, t, e);
		let n = $s(a.modules);
		n < s && (s = n, o = e), Zs(a, e);
	}
	return Zs(a, o), qs(a, t, o), {
		size: a.size,
		version: r,
		modules: a.modules
	};
}
//#endregion
//#region src/components/ui/QrCode.tsx
function tc({ value: e, errorCorrection: t = "M", size: n = 160, margin: r = 4, "aria-label": i = "QR code", fallback: a = null, className: o }) {
	let s = p(() => {
		if (!e) return null;
		try {
			return ec(e, t);
		} catch (e) {
			if (e instanceof Ms) return "too-long";
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
		className: K("block", o),
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
//#region src/components/ui/SearchInput.tsx
function nc({ value: e, onChange: t, placeholder: n = "Search...", className: r }) {
	return /* @__PURE__ */ v("div", {
		className: K("relative", r),
		children: [/* @__PURE__ */ _(ae, { className: "text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" }), /* @__PURE__ */ _("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: K("bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none")
		})]
	});
}
//#endregion
//#region src/components/ui/Select.tsx
var rc = a(({ label: e, error: t, options: n, className: r, id: i, hint: a, controlSize: o, required: s, "aria-describedby": c, "aria-invalid": l, ...u }, d) => {
	let f = Ts({
		id: i,
		error: t,
		hint: a,
		describedBy: c,
		invalid: l,
		required: s
	}), { inputId: p, errorId: m, hintId: h } = f, g = Un(o);
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		children: [
			a && /* @__PURE__ */ _("p", {
				id: h,
				className: "text-text-secondary text-xs",
				children: a
			}),
			(e || t) && /* @__PURE__ */ v("div", {
				className: "flex items-center justify-between",
				children: [e && /* @__PURE__ */ _("label", {
					htmlFor: p,
					className: "ui-field-label font-label text-xs font-medium",
					children: e
				}), t && /* @__PURE__ */ _("p", {
					id: m,
					className: "text-2xs text-red",
					children: t
				})]
			}),
			/* @__PURE__ */ v("div", {
				className: "relative",
				children: [/* @__PURE__ */ _("select", {
					ref: d,
					"data-control-size": g,
					required: f.required,
					"aria-invalid": f.invalid,
					"aria-describedby": f.describedBy,
					id: p,
					className: K("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", t ? "border-red" : "border-border", r),
					...u,
					children: n.map((e) => /* @__PURE__ */ _("option", {
						value: e.value,
						children: e.label
					}, e.value))
				}), /* @__PURE__ */ _(O, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" })]
			})
		]
	});
});
rc.displayName = "Select";
//#endregion
//#region src/components/ui/SettingRow.tsx
function ic({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: K("border-border flex items-center justify-between border-b py-3", r),
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
function ac({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: o = "w-[360px]", className: s, contentClassName: c }) {
	let l = Un(), u = m(null), [d, f] = Pt(u);
	ht(u, e);
	let p = wt(e, () => t());
	return Tt(e), e ? ue(/* @__PURE__ */ _(Ct.Provider, {
		value: p,
		children: /* @__PURE__ */ _(Mt.Provider, {
			value: d,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-50",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay animate-fade-in absolute inset-0",
					onClick: t
				}), /* @__PURE__ */ v("div", {
					ref: f,
					className: K("bg-bg-secondary border-border absolute inset-y-0 flex flex-col shadow-lg", o, a === "right" ? "animate-slide-in-right right-0 border-l" : "animate-slide-in-left left-0 border-r", s),
					style: { maxWidth: "calc(100vw - 2rem)" },
					role: "dialog",
					"aria-modal": "true",
					"aria-label": typeof n == "string" ? n : "Panel",
					children: [
						/* @__PURE__ */ v("div", {
							"data-control-size": l,
							className: "ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5",
							children: [n && /* @__PURE__ */ _("h3", {
								className: "text-text-primary truncate text-sm font-medium",
								children: n
							}), /* @__PURE__ */ _(Xn, {
								type: "button",
								variant: "icon",
								size: "sm",
								onClick: t,
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ _(U, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ _("div", {
							className: K("ui-surface-body flex-1 overflow-y-auto p-3", c),
							children: r
						}),
						i && /* @__PURE__ */ _("div", {
							"data-control-size": l,
							className: "ui-bar border-border bg-bg-primary/50 flex shrink-0 items-center gap-2 border-t px-3 py-2.5",
							children: i
						})
					]
				})]
			})
		})
	}), document.body) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function oc({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ _("div", {
		className: K("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function sc({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: K("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var cc = Object.assign(oc, { Main: sc }), lc = {
	active: "success",
	inactive: "neutral",
	pending: "warning",
	error: "danger"
};
function uc({ status: e, label: t, className: n }) {
	let r = Sn(lc[e]);
	return /* @__PURE__ */ v("span", {
		className: K("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ _("span", { className: K("h-2 w-2 rounded-full", r.dot, e === "pending" && "animate-pulse-subtle") }), t && /* @__PURE__ */ _("span", {
			className: K("text-xs", r.text),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function dc({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ _("div", {
		className: K("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ v("div", {
			className: K("flex items-center", r < e.length - 1 && "flex-1"),
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ _("div", {
						className: K("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ _(E, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ _("span", {
						className: K("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ _("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ _("div", { className: K("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function fc({ tabs: e, defaultTab: t, value: n, onChange: r, className: i }) {
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
				className: K("font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]", "hover:text-text-primary", e.key === c ? "text-accent" : "text-text-tertiary"),
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
var pc = a(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, hint: s, controlSize: c, required: l, "aria-describedby": u, "aria-invalid": d, ...f }, p) => {
	let m = Ts({
		id: o,
		error: t,
		hint: s,
		describedBy: u,
		invalid: d,
		required: l
	}), { inputId: h, errorId: g, hintId: y } = m, b = Un(c), x = typeof i == "string" ? i.length : 0;
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
				className: K("ui-sized-control bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
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
pc.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var mc = a(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, hint: o, controlSize: s, required: c, "aria-describedby": l, "aria-invalid": u, ...d }, f) => {
	let p = Ts({
		id: i,
		error: t,
		hint: o,
		describedBy: l,
		invalid: u,
		required: c
	}), { inputId: m, errorId: h, hintId: g } = p, y = Un(s);
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
					className: K("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
					...d
				})]
			})
		]
	});
});
mc.displayName = "TextInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function hc({ items: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: K("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ v("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ _("div", { className: K(bn(t.dot) ? Sn(t.dot).dot : t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ _("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ v("div", {
				className: K("pb-4", n === e.length - 1 && "pb-0"),
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
//#region src/components/ui/Tooltip.tsx
var gc = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function _c(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		return typeof n == "function" ? n : () => e(null);
	}
	return e && (e.current = t), () => {
		e && (e.current = null);
	};
}
function vc(e, t) {
	let n = { ...e };
	for (let [r, i] of Object.entries(t)) {
		if (i === void 0) continue;
		let t = e[r];
		if (/^on[A-Z]/.test(r) && typeof t == "function" && typeof i == "function") n[r] = (...e) => {
			t(...e), i(...e);
		};
		else if (r === "className") n[r] = K(t, i);
		else if (r === "style") n[r] = {
			...t,
			...i
		};
		else if (r === "id" && typeof t == "string" && t) continue;
		else r === "aria-describedby" ? n[r] = [t, i].filter(Boolean).join(" ") : n[r] = i;
	}
	return n;
}
function yc({ element: e, merged: t, ...r }) {
	return n(e, {
		...t,
		...r
	});
}
var bc = (e, t) => t instanceof Node && e.contains(t);
function xc({ content: e, placement: n = "top", children: r, ref: i, ...a }) {
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
		let t = [_c(m, e), _c(i, e)];
		return () => t.forEach((e) => e());
	}, [m, i]), y = {
		onMouseOver: (e) => {
			let { currentTarget: t, target: n, relatedTarget: r } = e;
			bc(t, n) && !bc(t, r) && d(!0);
		},
		onMouseOut: (e) => {
			bc(e.currentTarget, e.relatedTarget) || d(!1);
		},
		onFocus: (e) => {
			d(bc(e.currentTarget, e.target));
		},
		onBlur: () => d(!1)
	}, b = p ? /* @__PURE__ */ _(yc, {
		element: p,
		merged: vc(p.props, {
			...a,
			"aria-describedby": [a["aria-describedby"], f].filter(Boolean).join(" ")
		}),
		ref: g
	}) : r;
	return /* @__PURE__ */ v("div", {
		...p ? y : vc(y, a),
		ref: p ? void 0 : g,
		className: K("relative inline-flex", !p && a.className),
		children: [b, c && /* @__PURE__ */ _("div", {
			id: f,
			className: K("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", gc[n]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function Sc({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a }) {
	return /* @__PURE__ */ v("div", {
		className: K("flex items-center justify-between gap-3", r),
		children: [/* @__PURE__ */ _("div", {
			className: K("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), t && /* @__PURE__ */ _("div", {
			className: K("flex items-center gap-1.5", a),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/UploadDropzone.tsx
var Cc = a(function({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, multiple: r, disabled: i, onChange: a, onFilesChange: o, className: s, id: c, "aria-describedby": l, ...f }, p) {
	let h = m(null);
	d(p, () => h.current, []);
	let g = u(), y = `${c ?? g}-description`;
	return /* @__PURE__ */ v("label", {
		className: K("ui-upload-dropzone border-border hover:border-border-strong relative block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", i ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
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
				children: n ?? /* @__PURE__ */ _(ce, { className: "h-4.5 w-4.5" })
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
}), wc = r({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function Tc() {
	return c(wc);
}
//#endregion
//#region src/lib/formatDate.ts
function Ec(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function Dc(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function Oc(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${Ua[e.getMonth()]} ${e.getDate()}`;
	return e.getFullYear() === t.getFullYear() ? o : `${o}, ${e.getFullYear()}`;
}
//#endregion
//#region src/providers/SettingsProvider.tsx
var kc = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, Ac = {
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
}, jc = "leonardaustin-ui-settings", Mc = new Set(Object.keys(Ac)), Nc = new Set(Object.keys(Wt)), Pc = new Set(Object.keys(kc)), Fc = new Set([
	"light",
	"dark",
	"system"
]);
function Ic(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : q(e, t, n);
}
function Lc(e) {
	let t = {};
	if (Mc.has(e.accentColor) && (t.accentColor = e.accentColor), Fc.has(e.colorMode) && (t.colorMode = e.colorMode), Nc.has(e.preferredDarkTheme) && !zt(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), Nc.has(e.preferredLightTheme) && zt(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = Ic(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!Nc.has(t) || !r || typeof r != "object") continue;
			let e = r, i = Wt[t];
			n[t] = {
				uiFont: Pc.has(e.uiFont) ? e.uiFont : i.uiFont,
				headingFont: Pc.has(e.headingFont) ? e.headingFont : i.headingFont,
				proseFont: Pc.has(e.proseFont) ? e.proseFont : i.proseFont,
				controlFont: Pc.has(e.controlFont) ? e.controlFont : i.controlFont,
				labelFont: Pc.has(e.labelFont) ? e.labelFont : i.labelFont,
				navigationFont: Pc.has(e.navigationFont) ? e.navigationFont : i.navigationFont,
				dataFont: Pc.has(e.dataFont) ? e.dataFont : i.dataFont,
				codeFont: Pc.has(e.codeFont) ? e.codeFont : i.codeFont,
				fontSize: Ic(e.fontSize, 11, 18, i.fontSize),
				borderRadius: Ic(e.borderRadius, 0, 16, i.borderRadius),
				borderWidth: Ic(e.borderWidth, 1, 3, i.borderWidth),
				tracking: Ic(e.tracking, 0, .3, i.tracking),
				lineHeight: Ic(e.lineHeight, 1.2, 2, i.lineHeight),
				density: Ic(e.density, .18, .32, i.density)
			};
		}
		t.themeOverrides = n;
	}
	return t;
}
var Rc = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function zc(e, t) {
	let n = {
		...Rc,
		...Lc(t ?? {})
	};
	if (typeof localStorage > "u") return n;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...n,
			...Lc(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return n;
}
function Bc(e, t) {
	let n = Wt[e] ?? Wt.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function Vc(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function Hc({ children: e, storageKey: t = jc, initialSettings: n, forcedTheme: r }) {
	let [i, a] = h(() => zc(t, n)), [o, c] = h(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
	]), [d, f] = h(() => Bc(u, i.themeOverrides));
	l(() => {
		f(Bc(u, i.themeOverrides));
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
		let e = document.documentElement, t = Ac[i.accentColor];
		e.style.setProperty("--accent", t.base), e.style.setProperty("--accent-hover", t.hover), e.style.setProperty("--accent-active", t.active), e.style.setProperty("--accent-muted", t.muted), e.style.setProperty("--accent-subtle", t.subtle);
	}, [i.accentColor]), l(() => {
		document.documentElement.classList.toggle("reduced-motion", i.reducedMotion);
	}, [i.reducedMotion]), l(() => {
		let e = document.documentElement, t = d.borderRadius;
		e.style.fontSize = `${d.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", kc[d.uiFont]), e.style.setProperty("--font-heading", kc[d.headingFont]), e.style.setProperty("--font-prose", kc[d.proseFont]), e.style.setProperty("--font-control", kc[d.controlFont]), e.style.setProperty("--font-label", kc[d.labelFont]), e.style.setProperty("--font-navigation", kc[d.navigationFont]), e.style.setProperty("--font-data", kc[d.dataFont]), e.style.setProperty("--font-code", kc[d.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${d.borderWidth}px`), e.style.setProperty("--ui-tracking", `${d.tracking}em`), e.style.setProperty("--ui-line-height", String(d.lineHeight)), e.style.setProperty("--ui-density", `${d.density}rem`);
	}, [d]);
	let g = p(() => Bc(u, i.themeOverrides), [u, i.themeOverrides]), v = u in i.themeOverrides, y = !Vc(d, g), b = s(() => {
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
		delete e[u], m({ themeOverrides: e }), f(Wt[u] ?? Wt.dark);
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
	return /* @__PURE__ */ _(fn.Provider, {
		value: S,
		children: e
	});
}
//#endregion
//#region src/providers/ThemeProvider.tsx
var Uc = {
	dark: "",
	light: "theme-light",
	lightInverted: "theme-light-inverted",
	monokai: "theme-monokai",
	solarized: "theme-solarized",
	cyberBrutalDark: "theme-cyber-brutal-dark",
	cyberBrutalLight: "theme-cyber-brutal-light",
	hashiTheme: "theme-hashi"
};
function Wc({ children: e }) {
	let { resolvedTheme: t } = c(fn);
	return l(() => {
		let e = document.documentElement;
		Object.values(Uc).forEach((t) => {
			t && e.classList.remove(t);
		});
		let n = Uc[t];
		n && e.classList.add(n);
	}, [t]), /* @__PURE__ */ _(wc.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
//#region src/components/ui/FormField.tsx
function Gc({ id: e, label: t, hint: n, error: r, required: i, optionalLabel: a, children: o, className: s, ...c }) {
	let l = u(), d = e ?? l, f = n ? `${d}-hint` : void 0, p = r ? `${d}-error` : void 0, m = {
		id: d,
		"aria-describedby": wr(f, p),
		"aria-invalid": !!r || void 0,
		required: i
	};
	return /* @__PURE__ */ _(Cr.Provider, {
		value: {
			id: d,
			describedBy: wr(f, p),
			invalid: !!r,
			required: i
		},
		children: /* @__PURE__ */ v("div", {
			...c,
			className: K("flex flex-col gap-1.5", s),
			children: [
				/* @__PURE__ */ v("label", {
					htmlFor: d,
					className: "ui-field-label font-label text-xs font-medium",
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
					id: f,
					className: "text-text-secondary text-xs",
					children: n
				}),
				r && /* @__PURE__ */ _("p", {
					id: p,
					className: "text-red text-xs",
					children: r
				}),
				typeof o == "function" ? o(m) : o
			]
		})
	});
}
function Kc({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: K("text-text-secondary text-xs", e)
	});
}
function qc({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: K("text-red text-xs", e)
	});
}
//#endregion
//#region src/components/ui/Fieldset.tsx
function Jc({ id: e, legend: t, hint: n, error: r, children: i, className: a, "aria-describedby": o, ...s }) {
	let c = u(), l = e ?? c, d = n ? `${l}-hint` : void 0, f = r ? `${l}-error` : void 0, p = wr(o, d, f);
	return /* @__PURE__ */ v("fieldset", {
		...s,
		id: l,
		"aria-describedby": p,
		className: K("min-w-0 space-y-2", a),
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
			/* @__PURE__ */ _(Cr.Provider, {
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
var Yc = a(({ label: e, description: t, controlSize: n, className: r, id: i, "aria-describedby": a, "aria-invalid": o, ...s }, l) => {
	let d = u(), f = Un(n), p = c(Cr), m = i ?? p?.id ?? d, h = t ? `${m}-description` : void 0;
	return /* @__PURE__ */ v("label", {
		className: K("ui-choice flex items-start gap-2.5", r),
		"data-control-size": f,
		children: [/* @__PURE__ */ _("input", {
			...s,
			ref: l,
			id: m,
			type: "radio",
			"aria-invalid": o ?? (p?.invalid || void 0),
			"aria-describedby": wr(a, p?.describedBy, h),
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
Yc.displayName = "Radio";
function Xc({ name: e, id: t, options: n, value: r, onChange: i, required: a, disabled: o, controlSize: s, ...c }) {
	let l = u(), d = t ?? l;
	return /* @__PURE__ */ _(Jc, {
		...c,
		id: d,
		disabled: o,
		children: n.map((t, n) => /* @__PURE__ */ _(Yc, {
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
var Zc = Object.assign(Yc, { Group: Xc }), Qc = {
	pending: "Pending",
	uploading: "Uploading",
	processing: "Processing",
	ready: "Ready",
	error: "Upload failed"
};
function $c(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function el({ name: e, size: t, status: n = "ready", statusLabel: r, error: i, onRetry: a, onRemove: o, onDownload: s, downloadHref: c, actionsDisabled: l, className: u, ...d }) {
	return /* @__PURE__ */ v("li", {
		...d,
		className: K("ui-attachment-item border-border flex items-center justify-between gap-3 rounded-md border p-3", u),
		children: [/* @__PURE__ */ v("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ _("p", {
					className: "text-text-primary text-xs",
					children: e
				}),
				t !== void 0 && /* @__PURE__ */ _("p", {
					className: "text-text-tertiary text-2xs",
					children: $c(t)
				}),
				/* @__PURE__ */ v("div", {
					role: "status",
					"aria-atomic": "true",
					className: K("text-2xs", n === "error" ? "text-red" : "text-text-secondary"),
					children: [
						e,
						": ",
						i ?? r ?? Qc[n]
					]
				})
			]
		}), /* @__PURE__ */ v("div", {
			className: "flex items-center gap-1.5",
			children: [
				a && /* @__PURE__ */ _(Xn, {
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
				s && /* @__PURE__ */ _(Xn, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: s,
					"aria-label": `Download ${e}`,
					children: "Download"
				}),
				o && /* @__PURE__ */ _(Xn, {
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
function tl({ children: e, className: t, "aria-label": n = "Attachments", ...r }) {
	return /* @__PURE__ */ _("ul", {
		...r,
		"aria-label": n,
		className: K("space-y-2", t),
		children: e
	});
}
//#endregion
//#region src/lib/dateParts.ts
function nl(e, { required: t = !1, minYear: n = 1900, maxYear: r = 2100 } = {}) {
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
function rl({ value: e, onChange: t, label: n, hint: r, error: i, id: a, name: o, disabled: s, required: c, className: d, inputProps: f, minYear: p = 1900, maxYear: g = 2100 }) {
	let y = u(), b = m({}), [x, S] = h(!1);
	if (!Number.isInteger(p) || !Number.isInteger(g) || p < 1 || g > 9999 || p > g) throw RangeError("DatePartsInput requires year bounds between 1 and 9999, with minYear <= maxYear");
	let C = nl(e, {
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
	}, k = a ?? y, A = [r && `${k}-hint`, T && `${k}-error`].filter(Boolean).join(" ") || void 0;
	return /* @__PURE__ */ v("fieldset", {
		id: k,
		disabled: s,
		className: K("space-y-2", d),
		"aria-describedby": A,
		children: [
			/* @__PURE__ */ v("legend", {
				className: "ui-field-label text-xs font-medium",
				children: [n, c && /* @__PURE__ */ _("span", { children: " (required)" })]
			}),
			r && /* @__PURE__ */ _("p", {
				id: `${k}-hint`,
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
					children: [/* @__PURE__ */ _(mc, {
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
						id: `${k}-${n}`,
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
						children: [/* @__PURE__ */ _(O, {
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
				id: `${k}-error`,
				className: "text-red text-xs",
				children: T
			})
		]
	});
}
//#endregion
//#region src/components/ui/Skeleton.tsx
function il({ className: e, width: t, height: n, style: r, ...i }) {
	return /* @__PURE__ */ _("div", {
		...i,
		"aria-hidden": "true",
		className: K("ui-skeleton rounded-md bg-bg-tertiary", e),
		style: {
			width: t,
			height: n,
			...r
		}
	});
}
//#endregion
//#region src/components/ui/NavTabs.tsx
function al({ items: e, activeKey: t, renderLink: n, className: r, "aria-label": i = "Sections", ...a }) {
	return /* @__PURE__ */ _("nav", {
		...a,
		"aria-label": i,
		className: K("ui-nav-tabs border-border border-b", r),
		children: /* @__PURE__ */ _("ul", {
			className: "ui-nav-tabs-list",
			children: e.map((e) => {
				let { key: r, label: i, badge: a, ...o } = e, s = {
					...o,
					"aria-current": r === t ? "page" : void 0,
					className: K("ui-nav-tab px-3 py-2 text-xs font-medium", r === t ? "text-accent" : "text-text-secondary", e.className),
					children: /* @__PURE__ */ v(g, { children: [i, a !== void 0 && /* @__PURE__ */ _(Qr, {
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
function ol({ value: e, maxLength: t, announcementDelay: n = 1e3, className: r, ...i }) {
	let a = t - e.length, o = Math.abs(a), s = `${o} ${o === 1 ? "character" : "characters"} ${a < 0 ? "over the limit" : "remaining"}`, [c, u] = h(s);
	return l(() => {
		let e = setTimeout(() => u(s), n);
		return () => clearTimeout(e);
	}, [s, n]), /* @__PURE__ */ v("p", {
		...i,
		className: K("text-2xs", a < 0 ? "text-red" : "text-text-tertiary", r),
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
function sl({ size: e, children: t }) {
	return /* @__PURE__ */ _(Hn.Provider, {
		value: e,
		children: t
	});
}
//#endregion
//#region src/components/ui/ProgressBar.tsx
var cl = a(function({ label: e, value: t, min: n = 0, max: r = 100, color: i = "accent", striped: a = !1, animated: o = !1, id: s, className: c, ...l }, d) {
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
				className: K("ui-progress-bar", c),
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
function ll({ as: e, gap: t = 0, align: n = "stretch", justify: r = "start", className: a, style: o, ...s }) {
	return i(e ?? "div", {
		...s,
		className: K("ui-stack", a),
		style: {
			...cs(t),
			"--ui-align": ls(n),
			"--ui-justify": us(r),
			...o
		}
	});
}
//#endregion
//#region src/components/ui/Inline.tsx
function ul({ as: e, gap: t = 0, gapX: n, gapY: r, align: a = "stretch", justify: o = "start", wrap: s = !1, inline: c = !1, stackBelow: l, className: u, style: d, ...f }) {
	return i(e ?? "div", {
		...f,
		className: K("ui-inline", u),
		style: {
			...cs(t, n, r),
			"--ui-align": ls(a),
			"--ui-justify": us(o),
			"--ui-wrap": s ? "wrap" : "nowrap",
			"--ui-display": c ? "inline-flex" : "flex",
			...os("direction", l ? {
				base: "column",
				[l]: "row"
			} : "row", (e) => e, "row"),
			...d
		}
	});
}
//#endregion
//#region src/components/ui/Grid.tsx
function dl({ as: e, columns: t = 1, gap: n = 0, gapX: r, gapY: a, align: o = "stretch", justify: s = "stretch", className: c, style: l, ...u }) {
	return i(e ?? "div", {
		...u,
		className: K("ui-grid", c),
		style: {
			...cs(n, r, a),
			...os("columns", t, ss, 1),
			"--ui-align": o,
			"--ui-justify": s,
			...l
		}
	});
}
//#endregion
//#region src/components/ui/GridItem.tsx
function fl({ as: e, span: t = 1, className: n, style: r, ...a }) {
	return i(e ?? "div", {
		...a,
		className: K("ui-grid-item", n),
		style: {
			...os("span", t, (e) => `span ${e} / span ${e}`, 1),
			...r
		}
	});
}
//#endregion
export { Hr as Alert, br as AppShell, Ge as AreaChart, el as AttachmentItem, tl as AttachmentList, Ur as AuthCard, xr as AuthLayout, Wr as AuthorByline, _n as Avatar, Sr as BackLink, Qr as Badge, Je as BarChart, pt as BottomNav, Bn as Breadcrumbs, Xn as Button, Et as COMMAND_PALETTE_EVENT, Ha as Calendar, Xa as CalendarGrid, Za as Card, ol as CharacterCount, Tr as Checkbox, ro as CodeInput, Or as ColumnPicker, io as Combobox, jt as CommandPalette, sl as ControlSizeProvider, Na as DEFAULT_CALENDAR_LABELS, Dt as DEFAULT_COMMAND_PALETTE_SHORTCUT, ao as DangerZone, rl as DatePartsInput, so as DatePicker, uo as DateRangePicker, go as DateTimePicker, xo as DetailPanel, Jo as Dialog, Yo as DialogActions, Xo as DividerLabel, Xe as DonutChart, $o as DropdownMenu, es as EmptyState, ts as ErrorBoundary, qc as FieldError, Kc as FieldHint, Jc as Fieldset, Er as FilterButton, ns as FilterDropdown, Gc as FormField, dl as Grid, fl as GridItem, ul as Inline, rs as Kbd, as as LoadingSpinner, ps as MetadataGrid, hs as MetricCard, It as MobileDrawer, al as NavTabs, bs as OAuthButton, xs as PageHeader, Ss as PageSection, kr as Pagination, ws as PaginationBar, Es as PasswordInput, ks as PasswordRequirements, Mt as PortalContainerContext, As as ProfileHeader, cl as ProgressBar, js as ProseContent, Ms as QrCapacityError, tc as QrCode, Ze as RadarChart, Qe as RadialBarChart, Zc as Radio, Pa as RadioPill, zr as ResourceTable, nc as SearchInput, Zn as SectionHeader, rc as Select, or as SelectDropdown, ic as SettingRow, fn as SettingsContext, Hc as SettingsProvider, ac as SideSheet, Rn as Sidebar, il as Skeleton, cr as Slider, $e as SparkLine, cc as SplitPaneLayout, ll as Stack, ot as StackedBarChart, uc as StatusDot, dc as StepProgress, dr as THEME_MENU_EVENT, jr as Table, Nr as TableBody, Ir as TableCell, Lr as TableEmptyRow, Mr as TableHead, Fr as TableHeaderCell, Pr as TableRow, fc as Tabs, mc as TextInput, pc as Textarea, wc as ThemeContext, mr as ThemeMenu, lr as ThemePreview, Wc as ThemeProvider, hc as Timeline, Tn as ToastProvider, ur as Toggle, Sc as Toolbar, xc as Tooltip, vr as TopBar, Cc as UploadDropzone, lt as VerticalBarChart, Kt as accentItems, si as addDays, ci as addMinutes, li as addMonths, $r as badgeColors, ni as calendarDateFromParts, $ as calendarDateParts, K as cn, Qi as createCalendarDateMath, Vt as darkThemes, gi as dateAtMinutes, Ds as defaultPasswordRequirements, pi as differenceInDays, ec as encodeQrCode, Gi as expandAvailabilityRules, Gt as fontOptions, Dc as formatDateLong, Ec as formatDateShort, Pi as formatRangeTitle, Oc as formatRelative, Ai as formatTime, vi as formatTimeOfDay, ji as formatTimeRange, bi as fromDateKey, Wi as getActiveResourceIds, Ei as getViewRange, wi as getVisibleDays, dt as handleAppShellNavigate, Zi as isAllDayLike, ut as isAppShellPathActive, zt as isLightTheme, fi as isSameDay, Ci as isTimeGridView, bn as isTone, zi as layoutOverlaps, Bt as lightThemes, kt as matchesCommandPaletteShortcut, Os as meetsPasswordRequirements, mi as minutesOfDay, ft as navigateToPath, Ot as openCommandPalette, fr as openThemeMenu, _i as parseTime, Fi as rangesOverlap, vn as semanticTones, Di as shiftDate, Si as snapDate, xi as snapMinutes, Ar as sortRows, oi as startOfDay, di as startOfMonth, ui as startOfWeek, Wt as themeDefaults, Lt as themeItems, yi as toDateKey, Sn as toneClasses, xn as toneColor, yn as tones, Vn as useApplyTheme, Un as useControlSize, dn as useDismiss, ht as useFocusTrap, Nt as usePortalContainer, pn as useSettings, Tc as useTheme, wn as useToast };
