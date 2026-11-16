import { Component as e, Fragment as t, cloneElement as n, createContext as r, createElement as i, forwardRef as a, isValidElement as o, useCallback as s, useContext as c, useEffect as l, useId as u, useImperativeHandle as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { Accessibility as y, AlertTriangle as b, ArrowDown as x, ArrowLeft as S, ArrowUp as C, ArrowUpDown as w, BookOpen as T, Calendar as E, Check as D, CheckCircle2 as O, ChevronDown as k, ChevronLeft as A, ChevronRight as j, ChevronsUpDown as M, Columns3 as N, Copy as P, Eye as F, EyeOff as I, GripVertical as L, HandleBottomRight as R, Inbox as z, Info as B, Loader2 as ee, LogOut as V, Menu as H, Minus as U, Monitor as W, Moon as G, Palette as te, PanelLeft as ne, PanelLeftDashed as re, PanelRightClose as ie, PanelRightOpen as ae, Search as K, Settings as oe, SlidersHorizontal as q, Sun as se, Trash2 as ce, UploadCloud as le, X as ue, XCircle as de, Zap as fe } from "lucide-react";
import { createPortal as pe } from "react-dom";
//#region src/lib/cn.ts
function me(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = me(n);
		e && (t = t ? `${t} ${e}` : e);
	}
	else for (let n in e) e[n] && (t = t ? `${t} ${n}` : n);
	return t;
}
var he = new Set([
	"block",
	"contents",
	"flex",
	"grid",
	"hidden",
	"inline",
	"inline-block",
	"inline-flex",
	"table"
]), ge = new Set([
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
]), _e = new Set([
	"text-center",
	"text-left",
	"text-right"
]), ve = new Set(["lowercase", "uppercase"]), ye = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), be = {
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
}, xe = {
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
}, Se = {
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
}, Ce = {
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
}, we = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function J(...e) {
	return Te(me(e));
}
function Te(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = Ee(r);
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
			r && r.keys.size > 0 && Re(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function Ee(e) {
	let t = De(e), n = t.pop() ?? e, r = n.startsWith("!"), i = Oe(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = ke(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function De(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function Oe(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function ke(e) {
	let t = Ne(e);
	if (t) return [...be[t]];
	let n = Pe(e);
	if (n) return [...xe[n]];
	let r = Fe(e);
	if (r) return [...Se[r]];
	if (he.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (we.has(e)) return ["border-style"];
	let i = Ie(e);
	return i ? [...Ce[i]] : je(e) || Me(e) || (ge.has(e) ? ["font-size"] : _e.has(e) ? ["text-align"] : ve.has(e) ? ["text-transform"] : e === "text-ellipsis" || e === "text-clip" ? ["text-overflow"] : e === "text-wrap" || e === "text-nowrap" || e === "text-balance" || e === "text-pretty" ? ["text-wrap"] : /^text-\[(?:length:)?-?[\d.]+(?:px|rem|em|%|vw|vh)\]$/.test(e) ? ["font-size"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : ye.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" || e === "flex-col-reverse" || e === "flex-row-reverse" ? ["flex-direction"] : e === "flex-wrap" || e === "flex-nowrap" || e === "flex-wrap-reverse" ? ["flex-wrap"] : e === "flex-shrink" || e.startsWith("flex-shrink-") ? ["flex-shrink"] : e === "flex-grow" || e.startsWith("flex-grow-") ? ["flex-grow"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-x-") ? ["column-gap"] : e.startsWith("gap-y-") ? ["row-gap"] : e.startsWith("gap-") ? ["column-gap", "row-gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : []);
}
var Ae = {
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
function je(e) {
	let t = e.match(/^rounded(?:-(tl|tr|br|bl|ss|se|es|ee|t|r|b|l|s|e))?(?:-|$)/);
	if (t) return Ae[t[1] ?? ""].map((e) => `radius-${e}`);
}
function Me(e) {
	if (e.startsWith("bg-")) return /^bg-(?:auto|cover|contain)$/.test(e) ? ["background-size"] : /^bg-(?:no-repeat|repeat)(?:-|$)/.test(e) ? ["background-repeat"] : /^bg-(?:fixed|local|scroll)$/.test(e) ? ["background-attachment"] : /^bg-(?:gradient-|linear-|radial-|conic-|none$)/.test(e) ? ["background-image"] : /^bg-(?:center|top|bottom|left|right)(?:-|$)/.test(e) || /^bg-position-/.test(e) ? ["background-position"] : ["background-color"];
}
function Ne(e) {
	return Le(e, be);
}
function Pe(e) {
	return Le(e, xe);
}
function Fe(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function Ie(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function Le(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function Re(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/lib/math.ts
function Y(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region src/components/charts/chartUtils.ts
var ze = {
	"text-accent": "var(--accent)",
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-red": "var(--red)",
	"text-yellow": "var(--yellow)"
};
function Be(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Ve(e) {
	return e ? ze[e] ?? e : "var(--accent)";
}
function He(e, t) {
	if (e <= 0 || t <= 0) return [];
	if (e === 1 || t === 1) return [0];
	let n = Math.min(e, Math.max(2, Math.floor(t))), r = (e - 1) / (n - 1), i = /* @__PURE__ */ new Set();
	for (let e = 0; e < n; e += 1) i.add(Math.round(e * r));
	return i.add(e - 1), Array.from(i).sort((e, t) => e - t);
}
function X(e) {
	return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function Ue(e, t) {
	let n = String(e ?? "");
	return t === void 0 || t <= 0 || n.length <= t ? n : t <= 3 ? n.slice(0, t) : `${n.slice(0, t - 3)}...`;
}
function We(e, t = 10) {
	let n = 0;
	for (let r of e) r === " " ? n += t * .32 : /[A-Z0-9]/.test(r) ? n += t * .62 : /[il.,:;|'`]/.test(r) ? n += t * .28 : /[MW@#%&]/.test(r) ? n += t * .82 : n += t * .54;
	return Math.ceil(n);
}
function Ge(e, { maxWidth: t = 220, minWidth: n = 72, paddingX: r = 20 } = {}) {
	return Y(e.reduce((e, t) => Math.max(e, We(t, 11)), 0) + r, n, t);
}
function Ke(e, t, { boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Math.max(1, Math.min(s, r - a * 2)), l = Math.max(1, Math.min(i, n - a * 2)), u = Math.max(a, r - c - a), d = Math.max(a, n - l - a), f = Y(e - c / 2, a, u), p = t - l - o, m = p >= a ? "above" : "below";
	return {
		height: l,
		placement: m,
		width: c,
		x: f,
		y: m === "above" ? p : Y(t + o, a, d)
	};
}
function qe({ anchorX: e, anchorY: t, boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Ke(e, t, {
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
var Z = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
}, Je = 600;
function Ye(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function Xe({ data: e, height: t = 240, minValue: n, maxValue: r, startAtZero: i = !1, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 5, ariaLabel: c = "Area chart", className: l }) {
	let d = u(), f = m(null), [p, y] = h(null), b = Math.max(Z.top + Z.bottom + 1, t), x = Je - Z.left - Z.right, S = Math.max(1, b - Z.top - Z.bottom), C = e.length > 0, w = e[0]?.value ?? 0, T = e[0]?.value ?? 0;
	for (let t of e) t.value < w && (w = t.value), t.value > T && (T = t.value);
	let E = n ?? w, D = r ?? T;
	if (i && n === void 0 && w >= 0 && (E = 0), E === D) {
		if (i || n !== void 0 || r !== void 0) {
			let e = Ye(T);
			n === void 0 && (E = i && w >= 0 ? 0 : w >= 0 ? Math.max(0, w - e) : w - e), r === void 0 && (D = T + e);
		}
		E === D && (D = E + 1);
	}
	let O = D - E, k = a ?? Be, A = o ?? a ?? ((e) => e.toLocaleString());
	function j(t) {
		return Z.left + t / Math.max(e.length - 1, 1) * x;
	}
	function M(e) {
		return Z.top + S - (e - E) / O * S;
	}
	let N = e.map((e, t) => `${j(t)},${M(e.value)}`).join(" "), P = C ? [
		`${j(0)},${Z.top + S}`,
		...e.map((e, t) => `${j(t)},${M(e.value)}`),
		`${j(e.length - 1)},${Z.top + S}`
	].join(" ") : "", F = He(e.length, s);
	function I(t) {
		let n = f.current;
		if (!n || e.length === 0) return;
		let r = n.getBoundingClientRect();
		if (r.width <= 0) return;
		let i = ((t.clientX - r.left) / r.width * Je - Z.left) / x, a = Math.round(i * (e.length - 1)), o = Math.max(0, Math.min(e.length - 1, a));
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
		viewBox: `0 0 ${Je} ${b}`,
		onPointerMove: I,
		onPointerLeave: R,
		className: J("select-none", l),
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
				x: Z.left - 8,
				y: Z.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(D)
			}),
			/* @__PURE__ */ _("text", {
				x: Z.left - 8,
				y: Z.top + S,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(E)
			}),
			/* @__PURE__ */ _("line", {
				x1: Z.left,
				y1: Z.top + S,
				x2: Z.left + x,
				y2: Z.top + S,
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
					y1: Z.top,
					x2: p.x,
					y2: Z.top + S,
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
					let n = t.date, r = A(t.value), i = Ke(p.x, p.y, {
						boundsHeight: b,
						boundsWidth: Je,
						height: 28,
						offset: 10,
						width: Ge([n, r], {
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
var Ze = [
	1,
	.85,
	.7,
	.55,
	.45
], Qe = 600;
function $e({ data: e, height: t, maxValue: n, valueFormatter: r, labelFormatter: i, maxLabelLength: a, labelWidth: o = 160, valueWidth: s = 60, barHeight: c = 28, gap: l = 10, ariaLabel: u = "Horizontal bar chart", className: d }) {
	let [f, p] = h(null), m = e.length, g = Math.max(1, c), y = Math.max(0, l), b = m > 0 ? m * g + Math.max(0, m - 1) * y : g, x = Math.max(1, t ?? b), S = t === void 0 ? 1 : x / b, C = g * S, w = y * S, T = Math.min(3, C / 3), E = Math.max(0, C - T * 2), D = n === void 0 ? Math.max(...e.map((e) => X(e.value)), 1) : Math.max(X(n), 1), O = Math.max(0, o), k = Math.max(0, s), A = Math.max(0, Qe - O - k), j = r ?? ((e) => e.toLocaleString());
	return /* @__PURE__ */ _("svg", {
		width: "100%",
		viewBox: `0 0 ${Qe} ${x}`,
		className: J("select-none", d),
		role: "img",
		"aria-label": u,
		children: e.map((e, t) => {
			let n = t * (C + w), r = D > 0 ? Y(X(e.value), 0, D) / D * A : 0, o = f === t, s = i?.(e.label, e, t) ?? e.label, c = Ue(s, a), l = c !== s, u = j(e.value);
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
						width: Qe,
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
						opacity: o ? 1 : Ze[t % Ze.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ _("text", {
						x: Qe,
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
function et(e, t) {
	let n = e.reduce((e, t) => e + X(t.value), 0), r = 0;
	return e.map((e) => {
		let i = X(e.value), a = n > 0 ? i / n * t : 0, o = t - a, s = r / t * 360 - 90, c = s + a / t * 180, l = n > 0 ? i / n * 100 : 0;
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
function tt({ segments: e, size: t = 180, strokeWidth: n = 28, valueFormatter: r, percentageFormatter: i, showLegend: a = !0, ariaLabel: o = "Donut chart", className: s }) {
	let [c, l] = h(null), u = e.reduce((e, t) => e + X(t.value), 0), d = Math.max(1, t), f = Math.max(1, Math.min(n, d - 1)), p = Math.max(.5, (d - f) / 2), m = et(e, 2 * Math.PI * p), g = r ?? ((e) => e.toLocaleString()), y = i ?? ((e) => `${e.toFixed(1)}%`), b = d + 12, x = b / 2;
	return /* @__PURE__ */ v("div", {
		className: J("flex flex-col items-center gap-4", s),
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
						"aria-label": `${e.segment.name}: ${g(X(e.segment.value))} (${y(e.percentage)})`,
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					m.map((e, t) => {
						let n = c === t, r = e.midAngle * Math.PI / 180, i = n ? Math.cos(r) * 6 : 0, a = n ? Math.sin(r) * 6 : 0;
						return /* @__PURE__ */ _("circle", {
							cx: x,
							cy: x,
							r: p,
							fill: "none",
							stroke: Ve(e.segment.color),
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
						children: g(c === null ? u : X(m[c].segment.value))
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
				let e = m[c], t = e.midAngle * Math.PI / 180, n = p + f / 2 + 20, r = x + Math.cos(t) * n, i = x + Math.sin(t) * n, a = Ve(e.segment.color), o = g(X(e.segment.value)), s = y(e.percentage);
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: qe({
						anchorX: r,
						anchorY: i,
						boundsHeight: b,
						boundsWidth: b,
						height: 30,
						margin: 4,
						offset: 8,
						width: Ge([`${e.segment.name} ${o} ${s}`], {
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
				className: J("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", c !== null && c !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ _("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: Ve(e.color) }
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-primary text-xs font-semibold",
						children: g(X(e.value))
					})
				]
			}, e.name))
		})]
	});
}
//#endregion
//#region src/components/charts/RadarChart.tsx
function nt({ data: e, maxValue: t, size: n = 240, rings: r = 4, labelOffset: i = 18, labelFormatter: a, maxLabelLength: o, valueFormatter: s, ariaLabel: c = "Radar chart", className: l }) {
	let [u, d] = h(null), f = Math.max(80, n), p = Math.max(X(t ?? 0), ...e.map((e) => X(e.value)), 1), m = f / 2, g = Math.max(1, m - Math.max(0, i) - 12), y = e.length > 0 ? 2 * Math.PI / e.length : 0, b = Math.max(1, Math.floor(r)), x = s ?? String, S = e.map((e, t) => {
		let n = a?.(e.label, e, t) ?? e.label, r = Ue(n, o);
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
		let n = Y(X(e.value), 0, p) / p * g;
		return C(t * y, n);
	}), T = w.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ v("div", {
		className: J("relative flex flex-col items-center", l),
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
						className: J("text-text-secondary text-xs whitespace-nowrap"),
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
function rt({ segments: e, size: t = 200, strokeWidth: n = 14, gap: r = 6, valueFormatter: i, percentageFormatter: a, showLegend: o = !0, ariaLabel: s = "Radial bar chart", className: c }) {
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
		let t = X(e.max);
		return t <= 0 ? 0 : Y(X(e.value) / t, 0, 1);
	}
	function A(e) {
		return k(e) * 100;
	}
	return /* @__PURE__ */ v("div", {
		className: J("flex flex-col items-center gap-4", c),
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
					let r = 2 * Math.PI * n, i = r * k(e), a = r - i, o = Ve(e.color), s = g === t, c = A(e);
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
				let n = A(t), r = Ve(t.color), i = T(n), a = `${w(t.value)}/${w(t.max)}`;
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: qe({
						anchorX: d.x,
						anchorY: d.y,
						boundsHeight: y,
						boundsWidth: y,
						height: 30,
						margin: 4,
						offset: 8,
						width: Ge([`${t.label} ${i} ${a}`], {
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
					className: J("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", g !== null && g !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ _("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: Ve(e.color) }
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
function it({ data: e, width: t = 60, height: n = 20, minValue: r, maxValue: i, strokeWidth: a = 1.5, padding: o = 1, color: s = "var(--accent)", area: c = !1, areaOpacity: l = .15, ariaLabel: u = "Sparkline chart", className: d }) {
	if (e.length < 2) return null;
	let f = Math.max(1, t), p = Math.max(1, n), m = Math.max(0, Math.min(o, p / 2, f / 2)), h = r ?? Math.min(...e), g = i ?? Math.max(...e), y = Math.min(h, g), b = Math.max(h, g), x = b - y, S = Math.max(1, f - m * 2), C = Math.max(1, p - m * 2), w = e.map((t, n) => ({
		x: m + n / (e.length - 1) * S,
		y: x === 0 ? p / 2 : m + C - (Y(t, y, b) - y) / x * C
	})), T = w.map(({ x: e, y: t }) => `${e},${t}`).join(" "), E = w.length > 0 ? [
		`${w[0].x},${p - m}`,
		...w.map(({ x: e, y: t }) => `${e},${t}`),
		`${w[w.length - 1].x},${p - m}`
	].join(" ") : "";
	return /* @__PURE__ */ v("svg", {
		width: f,
		height: p,
		viewBox: `0 0 ${f} ${p}`,
		className: J("inline-block", d),
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
var Q = {
	top: 20,
	right: 12,
	bottom: 30,
	left: 48
}, at = 600, ot = 4;
function st(e) {
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
function ct(e, t) {
	let n = e[t];
	if (typeof n == "number") return Number.isFinite(n) ? n : 0;
	if (typeof n == "string") {
		let e = Number(n);
		return Number.isFinite(e) ? e : 0;
	}
	return 0;
}
function lt(e, t) {
	return t.reduce((t, n) => t + Math.max(0, ct(e, n.key)), 0);
}
function ut(e, t, n, r, i) {
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
function dt({ data: e, segments: t, height: n = 220, ariaLabel: r = "Stacked bar chart", tooltipRows: i, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 6, barGap: c, minBarWidth: l = 1, className: u }) {
	let [d, f] = h(null), p = Math.max(Q.top + Q.bottom + 1, n), m = at - Q.left - Q.right, y = Math.max(1, p - Q.top - Q.bottom), b = e.reduce((e, n) => Math.max(e, lt(n, t)), 1), x = Math.ceil(b / 2), S = x > 0 && x < b, C = c ?? (e.length > 60 ? 2 : e.length > 30 ? 3 : 6), w = Math.max(1, l), T = e.length > 1 ? Math.max(0, (m - e.length * w) / Math.max(e.length - 1, 1)) : 0, E = e.length > 1 ? Math.min(Math.max(0, C), T) : 0, D = e.length > 0 ? (m - E * Math.max(e.length - 1, 0)) / e.length : 0, O = new Set(He(e.length, s)), k = d === null ? null : e[d], A = a ?? Be, j = o ?? ((e) => e.toLocaleString());
	function M(e) {
		return Q.left + e * (D + E);
	}
	function N(e) {
		return e / b * y;
	}
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${at} ${p}`,
		className: J("select-none", u),
		role: "img",
		"aria-label": r,
		children: [
			/* @__PURE__ */ _("text", {
				x: Q.left - 8,
				y: Q.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(b)
			}),
			S && /* @__PURE__ */ _("text", {
				x: Q.left - 8,
				y: Q.top + y / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(x)
			}),
			/* @__PURE__ */ _("text", {
				x: Q.left - 8,
				y: Q.top + y,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: Q.left,
				y1: Q.top + y,
				x2: Q.left + m,
				y2: Q.top + y,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: Q.left,
				y1: Q.top + y / 2,
				x2: Q.left + m,
				y2: Q.top + y / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, n) => {
				let r = M(n), i = d === n, a = 0, o = t.map((t) => ({
					segment: t,
					value: Math.max(0, ct(e, t.key))
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
					"aria-label": `${st(e.date)}: ${j(lt(e, t))}`,
					children: [
						/* @__PURE__ */ _("rect", {
							x: r,
							y: Q.top,
							width: D,
							height: y,
							fill: "transparent"
						}),
						o.map(({ segment: e, value: t }, n) => {
							let s = N(t), c = Q.top + y - a - s, l = n === o.length - 1;
							return a += s, l ? /* @__PURE__ */ _("path", {
								d: ut(r, c, D, s, ot),
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
							children: st(e.date)
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
						value: ct(k, e.key)
					})), r = lt(k, t), a = Ke(e, Q.top + y - N(r), {
						boundsHeight: p,
						boundsWidth: at,
						height: 28 + n.length * 15,
						offset: 8,
						width: Ge([st(k.date), ...n.map((e) => `${e.label} ${j(e.value)}`)], {
							maxWidth: 240,
							minWidth: 150
						})
					}), o = a.x + 10, s = a.x + a.width - 10;
					return /* @__PURE__ */ v(g, { children: [
						/* @__PURE__ */ _("line", {
							x1: e,
							y1: Q.top,
							x2: e,
							y2: Q.top + y,
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
							children: st(k.date)
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
var ft = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], pt = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
}, mt = 600;
function ht({ data: e, height: t = 180, maxValue: n, valueFormatter: r, tooltipValueFormatter: i, labelFormatter: a, maxLabelLength: o, xLabelCount: s = 7, barGap: c = 6, minBarWidth: l = 4, ariaLabel: u = "Vertical bar chart", className: d }) {
	let [f, p] = h(null), m = Math.max(pt.top + pt.bottom + 1, t), y = mt - pt.left - pt.right, b = Math.max(1, m - pt.top - pt.bottom), x = n === void 0 ? Math.max(...e.map((e) => X(e.value)), 1) : Math.max(X(n), 1), S = Math.max(0, c), C = Math.max(1, l), w = e.length > 1 ? Math.max(0, (y - e.length * C) / Math.max(e.length - 1, 1)) : 0, T = e.length > 1 ? Math.min(S, w) : 0, E = e.length > 0 ? Math.max(0, (y - T * Math.max(e.length - 1, 0)) / e.length) : 0, D = r ?? Be, O = i ?? ((e) => e.toLocaleString()), k = new Set(He(e.length, s));
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${mt} ${m}`,
		className: J("select-none", d),
		role: "img",
		"aria-label": u,
		children: [
			/* @__PURE__ */ _("text", {
				x: pt.left - 6,
				y: pt.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: D(x)
			}),
			/* @__PURE__ */ _("text", {
				x: pt.left - 6,
				y: pt.top + b,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: pt.left,
				y1: pt.top + b,
				x2: pt.left + y,
				y2: pt.top + b,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: pt.left,
				y1: pt.top + b / 2,
				x2: pt.left + y,
				y2: pt.top + b / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, t) => {
				let n = pt.left + t * (E + T), r = Y(X(e.value), 0, x) / x * b, i = pt.top + b - r, s = f === t, c = a?.(e.label, e, t) ?? e.label, l = Ue(c, o), u = l !== c, d = O(e.value);
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
							y: pt.top,
							width: E,
							height: b,
							fill: "transparent"
						}),
						/* @__PURE__ */ _("rect", {
							x: n,
							y: i,
							width: E,
							height: r,
							fill: Ve(e.color),
							rx: 6,
							opacity: s ? 1 : ft[t % ft.length],
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
							let e = Ke(n + E / 2, i, {
								boundsHeight: m,
								boundsWidth: mt,
								height: 24,
								offset: 8,
								width: Ge([c, d], {
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
function gt(e, t) {
	if (e.active !== void 0) return e.active;
	if (!t) return !1;
	if (e.end ?? e.path === "/") return t === e.path;
	let n = e.path.endsWith("/") ? e.path : `${e.path}/`;
	return t === e.path || t.startsWith(n);
}
function _t(e, t, n, r) {
	let i = e.currentTarget.getAttribute("target");
	e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || i && i !== "_self" || (n && (e.preventDefault(), n(t)), r?.());
}
function vt(e, t) {
	if (t) {
		t(e);
		return;
	}
	typeof window < "u" && window.location.assign(e);
}
//#endregion
//#region src/components/app-shell/BottomNav.tsx
function yt({ items: e, currentPath: t, onNavigate: n, className: r }) {
	return e.length === 0 ? null : /* @__PURE__ */ _("nav", {
		className: J("bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ _("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = gt(e, t);
				return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
					href: e.path,
					onClick: (t) => _t(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					"aria-label": e.shortLabel && e.shortLabel !== e.label ? `${e.shortLabel}, ${e.label}` : void 0,
					className: J("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
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
var bt = "a[href], button:not([disabled]), input:not([disabled]):not([type=\"hidden\"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function xt(e, t, { initialFocusRef: n, returnFocusRef: r } = {}) {
	l(() => {
		let i = e.current;
		if (!t || !i) return;
		let a = i.ownerDocument, o = a.activeElement, s = r?.current, c = () => {
			let e = Array.from(i.querySelectorAll(bt)).filter((e) => e.tabIndex >= 0 && !e.matches(":disabled") && !e.closest("[hidden], [inert]") && e.getClientRects().length > 0);
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
function St(e) {
	return { parent: e };
}
var Ct = [];
function wt(e, t) {
	for (let n = t.parent; n; n = n.parent) if (n === e) return !0;
	return !1;
}
function Tt(e) {
	if (e.key !== "Escape" || e.defaultPrevented) return;
	let t = e.currentTarget;
	for (let n = Ct.length - 1; n >= 0; n--) if (Ct[n].doc === t) {
		Ct[n].onEscape(e);
		return;
	}
}
function Et(e, t, n = document) {
	let r = {
		node: e,
		doc: n,
		onEscape: t
	};
	Ct.some((e) => e.doc === n) || n.addEventListener("keydown", Tt);
	let i = Ct.findIndex((t) => wt(e, t.node));
	return i === -1 ? Ct.push(r) : Ct.splice(i, 0, r), () => {
		let e = Ct.indexOf(r);
		e !== -1 && (Ct.splice(e, 1), Ct.some((e) => e.doc === n) || n.removeEventListener("keydown", Tt));
	};
}
var Dt = /* @__PURE__ */ new Map();
function Ot(e = document) {
	let t = Dt.get(e);
	t || (t = {
		count: 0,
		overflow: e.body.style.overflow
	}, Dt.set(e, t), e.body.style.overflow = "hidden"), t.count++;
	let n = !1;
	return () => {
		if (n) return;
		n = !0;
		let t = Dt.get(e);
		t && (t.count--, !(t.count > 0) && (Dt.delete(e), e.body.style.overflow = t.overflow));
	};
}
//#endregion
//#region src/hooks/useOverlayStack.ts
var kt = r(null);
function At(e, t, n) {
	let r = c(kt), [i] = h(() => St(r)), a = m(t);
	return f(() => {
		a.current = t;
	}), l(() => {
		if (e) return Et(i, (e) => a.current(e), n?.current?.ownerDocument ?? document);
	}, [
		e,
		i,
		n
	]), i;
}
function jt(e, t) {
	l(() => {
		if (e) return Ot(t?.current?.ownerDocument ?? document);
	}, [e, t]);
}
//#endregion
//#region src/components/app-shell/commandPaletteEvents.ts
var Mt = "open-command-palette", Nt = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function Pt(e = Mt) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
function Ft(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
//#region src/components/app-shell/CommandPalette.tsx
function It(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function Lt({ items: e, eventName: t = Mt, shortcut: n = Nt, placeholder: r = "Search pages...", emptyLabel: i = "No results found", onNavigate: a, onSelect: o }) {
	let [c, d] = h(!1), [f, p] = h(""), [g, y] = h(0), b = m(null), x = m(null), S = u();
	xt(x, c), At(c, () => d(!1), x);
	let C = e.filter((e) => It(e, f)), w = s(() => {
		d(!0), p(""), y(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	l(() => {
		let e = (e) => {
			Ft(e, n) && (e.preventDefault(), c ? d(!1) : w());
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
		o?.(e), vt(e.path, a), d(!1);
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
					/* @__PURE__ */ _(K, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
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
					className: J("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === g ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
var Rt = r(null);
function zt() {
	return c(Rt);
}
function Bt(e) {
	let [t, n] = h(null);
	return [t, s((t) => {
		e.current = t, n(t);
	}, [e])];
}
//#endregion
//#region src/components/app-shell/MobileDrawer.tsx
function Vt({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ _(g, { children: e.logo }) : /* @__PURE__ */ v("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ _(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ _("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function Ht({ open: e, onClose: t, items: n, topBarNavItems: r = [], topBarNavLabel: i = "Primary", brand: a, currentPath: o, onNavigate: s, headerActions: c, className: l }) {
	let u = m(null), [d, f] = Bt(u);
	xt(u, e);
	let p = At(e, () => t(), u);
	if (jt(e, u), !e) return null;
	let h = r.length > 0;
	return /* @__PURE__ */ _(kt.Provider, {
		value: p,
		children: /* @__PURE__ */ _(Rt.Provider, {
			value: d,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: t
				}), /* @__PURE__ */ v("div", {
					ref: f,
					className: J("bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", l),
					children: [
						/* @__PURE__ */ v("div", {
							className: "border-border flex h-11 items-center justify-between border-b px-4",
							children: [/* @__PURE__ */ _(Vt, { brand: a }), /* @__PURE__ */ _("button", {
								type: "button",
								onClick: t,
								className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
								"aria-label": "Close menu",
								children: /* @__PURE__ */ _(ue, { className: "h-4 w-4" })
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
										let n = e.icon, r = gt(e, o), i = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
										return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
											href: e.href ?? e.path,
											target: e.target,
											rel: i,
											onClick: (n) => {
												if (e.reloadDocument) {
													t();
													return;
												}
												_t(n, e.path, s, t);
											},
											"aria-current": r ? "page" : void 0,
											className: J("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", r ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
									let n = gt(e, o);
									return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
										href: e.path,
										onClick: (n) => _t(n, e.path, s, t),
										"aria-current": n ? "page" : void 0,
										className: J("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
var Ut = [
	{
		value: "dark",
		label: "Dark",
		icon: G,
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
		icon: te,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: W,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: fe,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: fe,
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
], Wt = new Set([
	"light",
	"lightInverted",
	"cyberBrutalLight",
	"hashiTheme"
]);
function Gt(e) {
	return Wt.has(e);
}
var Kt = Ut.filter((e) => Gt(e.value)), qt = Ut.filter((e) => !Gt(e.value)), Jt = {
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
}, Yt = {
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
}, Xt = {
	dark: Jt,
	light: Jt,
	lightInverted: Jt,
	monokai: Jt,
	solarized: Jt,
	cyberBrutalDark: Yt,
	cyberBrutalLight: Yt,
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
}, Zt = [
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
], Qt = [
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
], $t = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, en = [
	"bottom",
	"top",
	"right",
	"left"
];
function tn(e, t, n) {
	switch (n) {
		case "top": return e.top - t.top;
		case "bottom": return t.bottom - e.bottom;
		case "left": return e.left - t.left;
		case "right": return t.right - e.right;
	}
}
function nn(e, t, n, r) {
	return Math.min(Math.max(e, n), r - t);
}
function rn(e, t, n, r) {
	return r === "start" ? e : r === "end" ? t - n : (e + t) / 2 - n / 2;
}
function an(e, t, { size: { width: n, height: r }, bounds: i, margin: a, gap: o, align: s = "center" }) {
	return e === "top" || e === "bottom" ? {
		left: nn(rn(t.left, t.right, n, s), n, i.left + a, i.right - a),
		top: e === "bottom" ? t.bottom + o : t.top - o - r
	} : {
		left: e === "right" ? t.right + o : t.left - o - n,
		top: nn(rn(t.top, t.bottom, r, s), r, i.top + a, i.bottom - a)
	};
}
function on(e, t, n) {
	let { size: { width: r, height: i }, bounds: a, margin: o } = n, s = a.left + o, c = a.right - o, l = a.top + o, u = a.bottom - o;
	if (r > c - s || i > u - l) return null;
	let { left: d, top: f } = an(e, t, n);
	return d >= s && d + r <= c && f >= l && f + i <= u ? {
		side: e,
		left: d,
		top: f
	} : null;
}
function sn(e, t, n) {
	if (!t) return null;
	let { bounds: r } = n;
	if (!(t.right > r.left && t.left < r.right && t.bottom > r.top && t.top < r.bottom)) return null;
	let i = e === "auto" ? [...en].sort((e, n) => tn(t, r, n) - tn(t, r, e)) : [e, $t[e]];
	for (let e of i) {
		let r = on(e, t, n);
		if (r) return r;
	}
	return null;
}
function cn(e, t, n, r) {
	return Math.max(Math.min(e, r - t), n);
}
function ln(e, t, n) {
	let r = sn(e, t, n);
	if (r) return r;
	let { size: { width: i, height: a }, bounds: o, margin: s } = n, c = $t[e], l = tn(t, o, c) > tn(t, o, e) ? c : e, { left: u, top: d } = an(l, t, n);
	return {
		side: l,
		left: cn(u, i, o.left + s, o.right - s),
		top: cn(d, a, o.top + s, o.bottom - s)
	};
}
//#endregion
//#region src/hooks/useAnchoredPopup.ts
function un(e, t) {
	let n = {
		left: Math.max(e.left, t.left),
		top: Math.max(e.top, t.top),
		right: Math.min(e.right, t.right),
		bottom: Math.min(e.bottom, t.bottom)
	};
	return n.left < n.right && n.top < n.bottom ? n : null;
}
function dn(e, t) {
	let n = un(e.getBoundingClientRect(), t), r = e.ownerDocument.defaultView;
	for (let t = e.parentElement; n && t && t !== e.ownerDocument.documentElement; t = t.parentElement) {
		let e = r?.getComputedStyle(t);
		e && (e.overflowX !== "visible" || e.overflowY !== "visible") && (n = un(n, t.getBoundingClientRect()));
	}
	return n !== null;
}
function fn(e) {
	let t = e.createElement("div");
	return t.setAttribute("aria-hidden", "true"), t.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none", t;
}
function pn(e) {
	let t = null;
	return {
		measure() {
			let n = e.parentElement;
			if (!n) return {
				left: 0,
				top: 0
			};
			t?.parentElement !== n && (t?.remove(), t = fn(e.ownerDocument), n.appendChild(t));
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
var mn = (e, t) => e.length !== t.length || e.some((e, n) => Math.abs(e - t[n]) > .5);
function hn(e, t, n, { side: r, align: i = "center", gap: a = 4, margin: o = 8, onAnchorHidden: s, matchAnchorWidth: c = !1 }) {
	let l = m(s);
	f(() => {
		l.current = s;
	}), f(() => {
		let s = n.current;
		if (!e || !s) return;
		let u = s.ownerDocument, d = u.defaultView ?? window, f = pn(s), p = [], m = (e) => {
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
			if (e && l.current && !dn(n, h)) {
				l.current();
				return;
			}
			let g = n.getBoundingClientRect();
			if (c) {
				let e = n instanceof HTMLElement ? n.offsetWidth : g.width;
				s.style.width = `${e}px`;
			}
			let _ = ln(r, g, {
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
			e && mn(m(e), p) && h(!1);
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
function gn(e, t, n, r) {
	let i = m(r);
	f(() => {
		i.current = r;
	}), f(() => {
		let r = n.current;
		if (!e || !r) return;
		let a = r.ownerDocument, o = a.defaultView ?? window, s = pn(r), c = [], l = () => {
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
			if (!mn(u, c)) return;
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
function _n(e, t, n, r, i) {
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
	]), At(e, () => t("escape"), n[0]);
}
//#endregion
//#region src/providers/SettingsContext.ts
var vn = r({
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
function yn() {
	return c(vn);
}
//#endregion
//#region src/components/ui/Avatar.tsx
var bn = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function xn(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function Sn(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function Cn({ name: e, src: t, size: n = "md", className: r }) {
	return /* @__PURE__ */ _("div", {
		className: J("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", bn[n], r),
		style: { backgroundColor: t ? void 0 : Sn(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ _("img", {
			src: t,
			alt: e,
			className: "h-full w-full rounded-full object-cover"
		}) : xn(e)
	});
}
//#endregion
//#region src/lib/tones.ts
var wn = {
	success: "green",
	warning: "yellow",
	danger: "red",
	info: "blue",
	neutral: "gray"
}, Tn = {
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
function En(e) {
	return typeof e == "string" && (Object.prototype.hasOwnProperty.call(Tn, e) || Object.prototype.hasOwnProperty.call(wn, e));
}
function Dn(e) {
	return Object.prototype.hasOwnProperty.call(wn, e) ? wn[e] : e;
}
function On(e) {
	return Tn[Dn(e)];
}
//#endregion
//#region src/components/ui/Toast.tsx
var kn = r({ toast: () => {} });
function An() {
	return c(kn);
}
function jn({ children: e }) {
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
	return /* @__PURE__ */ v(kn.Provider, {
		value: { toast: i },
		children: [e, /* @__PURE__ */ _("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ _(Pn, {
				toast: e,
				onDismiss: () => a(e.id)
			}, e.id))
		})]
	});
}
var Mn = {
	success: O,
	error: de,
	warning: b,
	info: B
}, Nn = {
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
};
function Pn({ toast: e, onDismiss: t }) {
	let [n, r] = h(100), i = Mn[e.type], a = On(Nn[e.type]), o = e.type === "error" || e.type === "warning", s = m(t);
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
			/* @__PURE__ */ _("div", { className: J("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", a.dot) }),
			/* @__PURE__ */ v("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ _(i, { className: J("h-4 w-4 shrink-0", a.text) }),
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
						children: /* @__PURE__ */ _(ue, {
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
var Fn = 140, In = 400, Ln = 48, Rn = {
	side: "right",
	align: "end",
	gap: 6
};
function zn({ item: e, collapsed: t, currentPath: n, onNavigate: r }) {
	let i = gt(e, n);
	return /* @__PURE__ */ v("a", {
		href: e.path,
		onClick: (t) => _t(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: J("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function Bn({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ _("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ v("div", {
		className: J("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ _(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ _("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ _("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function Vn(e) {
	return e.role ?? e.email;
}
function Hn({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: i, signOutPath: a, signOutLabel: o = "Sign out", onNavigate: c }) {
	let [l, u] = h(!1), d = zt(), [f, p] = h(() => Math.min(n, Math.max(t.length - 1, 0))), y = m(null), b = m(null), x = s(() => u(!1), []);
	_n(l, x, [b], [y]), hn(l, y, b, {
		...Rn,
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
		u(!1), i ? i() : a && vt(a, c);
	}
	return S ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: y,
		onClick: w,
		className: J("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? S.name : void 0,
		children: [/* @__PURE__ */ _(Cn, {
			name: S.name,
			src: S.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ _("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: S.name
			}), Vn(S) && /* @__PURE__ */ _("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: Vn(S)
			})]
		}), /* @__PURE__ */ _(M, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && pe(/* @__PURE__ */ v("div", {
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
					/* @__PURE__ */ _(Cn, {
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
				children: [/* @__PURE__ */ _(V, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ _("span", { children: o })]
			})] })
		]
	}), d ?? document.body)] }) : null;
}
function Un({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: i }) {
	let [a, o] = h(!1), c = zt(), l = m(null), u = m(null), { accentColor: d, setAccentColor: f, reducedMotion: p, setReducedMotion: b, colorMode: x, setColorMode: S } = yn(), { toast: C } = An(), w = !!(t || r), T = s(() => o(!1), []);
	_n(a, T, [u], [l]), hn(a, l, u, {
		...Rn,
		onAnchorHidden: T
	});
	function E() {
		o(!a);
	}
	function O() {
		o(!1), r ? r() : t && vt(t, i);
	}
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: l,
		onClick: E,
		className: J("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", a ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ _(oe, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ _("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), a && pe(/* @__PURE__ */ v("div", {
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
					Icon: G
				},
				{
					value: "light",
					label: "Light",
					Icon: se
				},
				{
					value: "system",
					label: "System",
					Icon: W
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
				children: Qt.map((e) => /* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => f(e.value),
					className: J("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", d === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
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
				children: [/* @__PURE__ */ _(oe, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ _("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), c ?? document.body)] });
}
function Wn({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: i, onSignOut: a, signOutPath: o, signOutLabel: c, settingsPath: l, settingsLabel: u, onOpenSettings: d, currentPath: f, onNavigate: p, headerActions: g, className: y }) {
	let { sidebarCollapsed: b, sidebarWidth: x, setSidebarWidth: S } = yn(), [C, w] = h(/* @__PURE__ */ new Set()), T = m(null), E = m(!1), [D, O] = h(!1), A = s((e) => {
		if (b) return;
		e.preventDefault(), E.current = !0, O(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!E.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			S(Math.max(Fn, Math.min(n, In)));
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
		className: J("bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", !D && "transition-[width] duration-[200ms] ease-out", "border-border", y),
		style: { width: b ? Ln : x },
		children: [
			!b && /* @__PURE__ */ _("div", {
				onMouseDown: A,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ _("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ _(Bn, {
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
							}), /* @__PURE__ */ _(k, { className: J("h-3 w-3 shrink-0 transition-transform", n && "-rotate-90") })]
						}), (!n || b) && /* @__PURE__ */ _("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _(zn, {
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
				children: [/* @__PURE__ */ _(Un, {
					collapsed: b,
					settingsPath: l,
					settingsLabel: u,
					onOpenSettings: d,
					onNavigate: p
				}), n.length > 0 && /* @__PURE__ */ _("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ _(Hn, {
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
function Gn(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function Kn({ homeLabel: e = "Dashboard", labels: t = {}, parents: n = {}, currentPath: r = "/", onNavigate: i, className: a }) {
	let o = r.split("?")[0].split("/").filter(Boolean), s = [{
		label: e,
		path: "/"
	}, ...o.map((e, r) => {
		let i = o[r - 1];
		return {
			label: t[e] || n[i] || Gn(e),
			path: "/" + o.slice(0, r + 1).join("/")
		};
	})];
	return /* @__PURE__ */ _("nav", {
		"aria-label": "Breadcrumb",
		className: J("font-navigation flex items-center gap-1 text-xs", a),
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
						onClick: (t) => _t(t, e.path, i),
						className: J("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
						children: e.label
					})]
				}, e.path);
			})
		})
	});
}
//#endregion
//#region src/hooks/useApplyTheme.ts
function qn() {
	let { setPreferredDarkTheme: e, setPreferredLightTheme: t, setColorMode: n } = yn();
	return s((r) => {
		Gt(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/providers/ControlSizeContext.ts
var Jn = r("compact");
function Yn(e) {
	let t = c(Jn);
	return e ?? t;
}
//#endregion
//#region src/components/ui/Button.tsx
var Xn = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover"
}, Zn = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, Qn = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, $n = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, er = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, tr = {
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
}, nr = a(({ variant: e = "secondary", size: t = "md", controlSize: n, loading: r, icon: i, hideLabel: a, className: o, children: s, disabled: c, ...l }, u) => {
	let d = Yn(n), f = e === "icon", p = a === !0 ? "sm" : a === !1 ? void 0 : a;
	return /* @__PURE__ */ v("button", {
		type: "button",
		ref: u,
		"data-control-size": d,
		"data-variant": e,
		"data-size": t,
		"data-hide-label": p && !f ? "" : void 0,
		disabled: c || r,
		className: J("ui-sized-control inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", Xn[e], f ? Qn[t] : Zn[t], p && !f && tr[p]?.[t], o),
		...l,
		children: [
			r && /* @__PURE__ */ _(ee, { className: "h-3.5 w-3.5 animate-spin" }),
			i && !r && /* @__PURE__ */ _(i, { className: $n[t] }),
			s && (p ? /* @__PURE__ */ _("span", {
				className: er[p],
				children: s
			}) : s)
		]
	});
});
nr.displayName = "Button";
//#endregion
//#region src/components/ui/SectionHeader.tsx
function rr({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ _(t, {
		className: J("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
function ir({ haspopup: e, matchWidth: t = !1, disabled: n = !1, labelled: r = !1 }) {
	let [i, a] = h(!1), o = i && !n, c = m(null), l = m(null), d = m(null), f = m(null), p = u(), g = `${p}-label`, _ = `${p}-trigger`, v = `${p}-popup`, y = s((e) => {
		let t = f.current, n = t?.ownerDocument.activeElement ?? null, r = !!t && t.contains(n), i = !n || n === t?.ownerDocument.body;
		a(!1), e === "escape" || e === "select" && (r || i) ? d.current?.focus() : e === "anchor-hidden" && r && d.current?.focus({ preventScroll: !0 });
	}, []);
	return _n(o, y, [c]), hn(o, l, f, {
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
var ar = {
	text: "",
	at: 0
};
function or() {
	return performance.now();
}
function sr(e) {
	return e.key.length !== 1 || e.metaKey ? !1 : e.ctrlKey && e.altKey && e.getModifierState?.("AltGraph") ? !0 : !e.ctrlKey && !e.altKey;
}
function cr(e, t) {
	return e.text !== "" && t - e.at <= 500;
}
function lr(e, t, n) {
	return {
		text: cr(e, n) ? e.text + t : t,
		at: n
	};
}
function ur(e, t, n, r) {
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
function dr() {
	let e = m(ar);
	return {
		push(t) {
			return e.current = lr(e.current, t, or()), e.current.text;
		},
		active() {
			return cr(e.current, or());
		},
		clear() {
			e.current = ar;
		}
	};
}
//#endregion
//#region src/components/ui/FieldContext.ts
var fr = r(null);
function pr(...e) {
	return [...new Set(e.flatMap((e) => e?.split(/\s+/).filter(Boolean) ?? []))].join(" ") || void 0;
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function mr(e) {
	let t = 0;
	return e.map((e) => {
		let n = t;
		return t += "options" in e ? e.options.length : 1, {
			entry: e,
			firstIndex: n
		};
	});
}
function hr({ options: e, value: t, onChange: n, label: r, labelPlacement: i = "above", placeholder: a = "Select...", className: o, size: s = "md", disabled: u = !1 }) {
	let d = c(fr), f = i === "placeholder" && r ? r : r ? void 0 : d?.placeholderLabel, p = e.flatMap((e) => "options" in e ? e.options : [e]), [g, y] = h(-1), { open: b, show: x, close: S, rootRef: C, anchorRef: w, triggerRef: T, popupRef: E, labelId: O, popupId: A, triggerAria: j } = ir({
		haspopup: "listbox",
		matchWidth: !0,
		labelled: !!r,
		disabled: u
	}), M = dr(), N = m(!1), P = m(!1), F = (e) => `${A}-option-${e}`, I = !r && d?.id ? d.labelId : void 0, L = d?.claimLabel;
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
		M.clear(), H(e >= 0 && !p[e].disabled ? e : W(1)), x();
	}
	function ee(e) {
		u || e.disabled || (n(e.value), S("select"));
	}
	function V(e) {
		u || P.current && (P.current = !1, e.detail === 0) || (b ? S("toggle") : B());
	}
	function H(e) {
		N.current = !0, y(e);
	}
	function U(e, t) {
		for (let n = e + t; n >= 0 && n < p.length; n += t) if (!p[n].disabled) return n;
		return e;
	}
	function W(e) {
		let t = U(e === 1 ? -1 : p.length, e);
		return t >= 0 && t < p.length ? t : -1;
	}
	function G(e) {
		e.preventDefault();
		let r = M.push(e.key), i = p.map((e) => e.label), a = (e) => !!p[e].disabled;
		if (b) {
			let e = ur(i, a, g, r);
			e !== -1 && H(e);
		} else {
			let e = ur(i, a, p.findIndex((e) => e.value === t), r);
			e !== -1 && p[e].value !== t && n(p[e].value);
		}
	}
	function te(e) {
		e.key === " " && P.current && e.preventDefault();
	}
	function ne(e) {
		if (!u) {
			if (P.current = !1, e.key === " " && (b || M.active()) && (P.current = !0), sr(e) && (e.key !== " " || M.active())) {
				G(e);
				return;
			}
			if (!b) {
				(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), B());
				return;
			}
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), H(U(g, 1));
					break;
				case "ArrowUp":
					e.preventDefault(), H(U(g, -1));
					break;
				case "Home":
					e.preventDefault();
					{
						let e = W(1);
						e !== -1 && H(e);
					}
					break;
				case "End":
					e.preventDefault();
					{
						let e = W(-1);
						e !== -1 && H(e);
					}
					break;
				case "Enter":
				case " ": {
					e.preventDefault();
					let t = p[g];
					t && !t.disabled && ee(t);
					break;
				}
				case "Escape":
					e.preventDefault(), S("escape");
					break;
			}
		}
	}
	function re(e, n) {
		return /* @__PURE__ */ v("li", {
			id: F(n),
			role: "option",
			"aria-selected": e.value === t,
			"aria-disabled": e.disabled || void 0,
			onClick: () => {
				e.disabled || ee(e);
			},
			onMouseEnter: () => {
				e.disabled || y(n);
			},
			className: J("font-control flex h-7 w-full items-center gap-2 px-3 text-xs", !e.disabled && "cursor-pointer", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : n === g ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
			children: [/* @__PURE__ */ _("span", {
				className: "flex-1 truncate",
				children: e.label
			}), e.value === t && /* @__PURE__ */ _(D, { className: "h-3 w-3 shrink-0" })]
		}, e.value);
	}
	let ie = mr(e);
	return /* @__PURE__ */ v("div", {
		className: J("flex flex-col gap-1.5", o),
		ref: C,
		children: [r && /* @__PURE__ */ _("span", {
			id: O,
			className: J("ui-field-label font-label text-xs font-medium", i === "placeholder" && "sr-only"),
			children: r
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			ref: w,
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					disabled: u,
					onClick: V,
					onKeyDown: ne,
					onKeyUp: te,
					ref: T,
					...j,
					id: d?.id ?? j.id,
					"aria-labelledby": r && d?.id ? `${O} ${d.id}` : I && L ? `${I} ${d?.id}` : j["aria-labelledby"],
					"aria-describedby": d?.describedBy,
					"aria-invalid": d?.invalid || void 0,
					"aria-activedescendant": b && g >= 0 && p[g] && !p[g].disabled ? F(g) : void 0,
					className: J("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", s === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7", u ? "cursor-not-allowed opacity-40" : "hover:bg-bg-hover hover:border-border-strong"),
					children: R ? R.label : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						"aria-hidden": f ? !0 : void 0,
						children: f ?? a
					})
				}),
				/* @__PURE__ */ _(k, { className: J("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", s === "sm" ? "right-1.5" : "right-2", b && "rotate-180") }),
				b && !u && /* @__PURE__ */ _("div", {
					ref: E,
					className: J("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
					children: /* @__PURE__ */ _("ul", {
						id: A,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: ie.map(({ entry: e, firstIndex: t }, n) => "options" in e ? /* @__PURE__ */ v("li", {
							role: "group",
							"aria-label": e.label,
							children: [/* @__PURE__ */ _("div", {
								"aria-hidden": "true",
								className: "text-text-tertiary px-3 py-1 text-2xs font-medium",
								children: e.label
							}), /* @__PURE__ */ _("ul", {
								role: "presentation",
								children: e.options.map((e, n) => re(e, t + n))
							})]
						}, `group-${n}`) : re(e, t))
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/Slider.tsx
var gr = new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"Home",
	"End",
	"PageUp",
	"PageDown"
]);
function _r({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, "aria-label": s, "aria-labelledby": c, id: l, showValue: d, className: f }) {
	let p = u(), m = l ?? p, h = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ v("div", {
		className: J("flex flex-col gap-1.5", f),
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
				gr.has(e.key) && a(Number(e.target.value));
			} : void 0,
			className: "bg-bg-tertiary [&::-webkit-slider-thumb]:bg-accent h-1.5 w-full cursor-pointer appearance-none rounded-md [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[100ms] [&::-webkit-slider-thumb]:hover:scale-110",
			style: { background: `linear-gradient(to right, var(--accent) ${h}%, var(--bg-tertiary) ${h}%)` }
		})]
	});
}
//#endregion
//#region src/components/ui/ThemePreview.tsx
function vr({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ v("button", {
		type: "button",
		onClick: i,
		className: J("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
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
function yr({ checked: e, onChange: t, disabled: n, label: r, "aria-labelledby": i, "aria-describedby": a, className: o }) {
	return /* @__PURE__ */ v("label", {
		className: J("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", o),
		style: { gap: 10 },
		children: [/* @__PURE__ */ _("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			"aria-labelledby": i,
			"aria-describedby": a,
			disabled: n,
			onClick: () => t(!e),
			className: J("relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary ui-switch-off", !n && "cursor-pointer"),
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
var br = "open-theme-menu";
function xr(e = br) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
//#endregion
//#region src/components/app-shell/ThemeMenu.tsx
var Sr = [
	{
		value: "dark",
		label: "Dark",
		Icon: G
	},
	{
		value: "light",
		label: "Light",
		Icon: se
	},
	{
		value: "system",
		label: "System",
		Icon: W
	}
];
function Cr({ className: e, respondToOpenEvent: t = !0 }) {
	let [n, r] = h(!1), i = zt(), [a, o] = h(!1), c = m(null), u = m(null), d = yn(), f = qn(), { toast: p } = An(), y = s(() => {
		r(!1), o(!1);
	}, []);
	_n(n, y, [u], [c], { outsideClick: !a }), hn(n, c, u, {
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
		return document.addEventListener(br, e), () => document.removeEventListener(br, e);
	}, [t]);
	let { colorMode: x, setColorMode: S, preferredDarkTheme: C, preferredLightTheme: w, accentColor: T, setAccentColor: E, fontSize: D, setFontSize: O, uiFont: k, setUiFont: A, headingFont: j, setHeadingFont: M, proseFont: N, setProseFont: P, codeFont: F, setCodeFont: I, borderRadius: L, setBorderRadius: R, borderWidth: z, setBorderWidth: B, tracking: ee, setTracking: V, lineHeight: H, setLineHeight: U, density: W, setDensity: G, reducedMotion: ne, setReducedMotion: re, saveThemeCustomization: ie, resetThemeCustomization: ae, hasThemeOverrides: K, isCustomized: oe, resolvedTheme: q } = d;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("button", {
		type: "button",
		ref: c,
		onClick: b,
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": n,
		title: "Theme",
		className: J("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", n ? "text-accent bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", e),
		children: /* @__PURE__ */ _(te, { className: "h-4 w-4" })
	}), n && pe(/* @__PURE__ */ _("div", {
		ref: u,
		role: "dialog",
		"aria-label": "Theme settings",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] flex w-80 flex-col overflow-y-auto rounded-md border p-3 shadow-lg",
		style: { maxHeight: "80vh" },
		children: /* @__PURE__ */ v("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(rr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ _("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: Sr.map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ v("button", {
						type: "button",
						onClick: () => S(e),
						className: J("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", x === e ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ _(n, { className: "h-3.5 w-3.5" }), t]
					}, e))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(rr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: qt.map((e) => /* @__PURE__ */ _(vr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: C === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(rr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: Kt.map((e) => /* @__PURE__ */ _(vr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: w === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(rr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ _("div", {
					className: "flex flex-wrap gap-1.5",
					children: Qt.map((e) => /* @__PURE__ */ _("button", {
						type: "button",
						onClick: () => E(e.value),
						className: J("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", T === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: e.color,
							...T === e.value ? { "--utility-ring-color": e.color } : {}
						},
						title: e.value.charAt(0).toUpperCase() + e.value.slice(1),
						"aria-label": e.value
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(rr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ v("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ _(hr, {
							label: "UI / Body",
							size: "sm",
							options: Zt,
							value: k,
							onChange: (e) => A(e)
						}),
						/* @__PURE__ */ _(hr, {
							label: "Headings",
							size: "sm",
							options: Zt,
							value: j,
							onChange: (e) => M(e)
						}),
						/* @__PURE__ */ _(hr, {
							label: "Prose",
							size: "sm",
							options: Zt,
							value: N,
							onChange: (e) => P(e)
						}),
						/* @__PURE__ */ _(hr, {
							label: "Code",
							size: "sm",
							options: Zt,
							value: F,
							onChange: (e) => I(e)
						})
					]
				})] }),
				/* @__PURE__ */ v("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ _(_r, {
							label: "Font size",
							min: 11,
							max: 18,
							value: D,
							onChange: O,
							showValue: !0
						}),
						/* @__PURE__ */ _(_r, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: L,
							onChange: R,
							showValue: !0
						}),
						/* @__PURE__ */ _(_r, {
							label: "Border width",
							min: 1,
							max: 3,
							value: z,
							onChange: B,
							showValue: !0
						}),
						/* @__PURE__ */ _(_r, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: ee,
							onChange: V,
							showValue: !0
						}),
						/* @__PURE__ */ _(_r, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: H,
							onChange: U,
							showValue: !0
						}),
						/* @__PURE__ */ _(_r, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: W,
							onChange: G,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ _(yr, {
					label: "Reduced motion",
					checked: ne,
					onChange: re
				}),
				/* @__PURE__ */ v("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ _(nr, {
						variant: "primary",
						size: "sm",
						disabled: !oe,
						onClick: () => {
							ie(), p("success", `Saved customization for ${Ut.find((e) => e.value === q)?.label ?? q}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ _(nr, {
						variant: "secondary",
						size: "sm",
						disabled: !K && !oe,
						onClick: () => {
							ae(), p("info", "Reset to theme defaults");
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
var wr = [
	"dark",
	"light",
	"system"
], Tr = {
	dark: G,
	light: se,
	system: W
}, Er = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function Dr({ onMobileMenuToggle: e, breadcrumbs: t, navItems: n = [], navLabel: r = "Primary", showCommandTrigger: i = !0, commandTriggerLabel: a = "Search", commandShortcut: o = Nt, currentPath: s, onNavigate: c, onCommandTrigger: l, actions: u }) {
	let { sidebarCollapsed: d, setSidebarCollapsed: f, colorMode: p, setColorMode: m } = yn();
	function h() {
		m(wr[(wr.indexOf(p) + 1) % wr.length]);
	}
	let y = Tr[p], b = n.length > 0;
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
					children: /* @__PURE__ */ _(H, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => f(!d),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": d ? "Expand sidebar" : "Collapse sidebar",
					children: _(d ? re : ne, { className: "h-4 w-4" })
				}),
				(b || t !== !1) && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "bg-border hidden h-4 w-px md:block" }), b ? /* @__PURE__ */ _(Or, {
					items: n,
					label: r,
					currentPath: s,
					onNavigate: c
				}) : t === !1 ? null : /* @__PURE__ */ _(Kn, {
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
					onClick: l ?? (() => Pt()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ _(K, { className: "h-3 w-3" }),
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
					"aria-label": `Color mode: ${Er[p]}. Click to cycle.`,
					title: Er[p],
					children: /* @__PURE__ */ _(y, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _(Cr, {})
			]
		})]
	});
}
function Or({ items: e, label: t, currentPath: n, onNavigate: r }) {
	return /* @__PURE__ */ _("nav", {
		className: "hidden min-w-0 items-center gap-1 md:flex",
		"aria-label": t,
		children: e.map((e) => {
			let t = e.icon, i = gt(e, n), a = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
			return /* @__PURE__ */ v("a", {
				href: e.href ?? e.path,
				target: e.target,
				rel: a,
				"aria-current": i ? "page" : void 0,
				onClick: (t) => {
					e.reloadDocument || _t(t, e.path, r);
				},
				className: J("font-navigation flex h-6 max-w-40 items-center gap-1 rounded px-2 text-xs transition-colors duration-[100ms]", i ? "bg-accent-muted text-accent" : "text-text-tertiary hover:bg-bg-hover hover:text-text-primary"),
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
function kr({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: l, signOutPath: u, signOutLabel: d, settingsPath: f, settingsLabel: m, onOpenSettings: g, showCommandPalette: y = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, sidebarHeaderActions: C, topBarActions: w, topBarNavItems: T, topBarNavLabel: E, currentPath: D, onNavigate: O, mainClassName: k, className: A }) {
	let [j, M] = h(!1), N = p(() => t.flatMap((e) => e.items), [t]), P = a ?? N;
	return /* @__PURE__ */ v("div", {
		className: J("bg-bg-primary flex h-svh overflow-hidden", A),
		children: [
			/* @__PURE__ */ _("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ _(Wn, {
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
				children: [/* @__PURE__ */ _(Dr, {
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
					className: J("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", k),
					children: e
				})]
			}),
			/* @__PURE__ */ _(yt, {
				items: i,
				currentPath: D,
				onNavigate: O
			}),
			/* @__PURE__ */ _(Ht, {
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
			y && P.length > 0 && /* @__PURE__ */ _(Lt, {
				items: P,
				shortcut: S,
				onNavigate: O
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function Ar({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: J("bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ _("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function jr({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ v("a", {
		href: e,
		onClick: (t) => _t(t, e, n),
		className: J("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", r),
		children: [/* @__PURE__ */ _(S, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/Checkbox.tsx
var Mr = a(({ id: e, checked: t, indeterminate: n, onChange: r, label: i, ariaLabel: a, disabled: o, controlSize: s, className: d, "aria-label": f, "aria-describedby": p, "aria-invalid": h, required: g, ...y }, b) => {
	let x = u(), S = Yn(s), C = c(fr), w = e ?? C?.id ?? x, T = m(null);
	return l(() => {
		T.current && (T.current.indeterminate = !!n);
	}, [n]), /* @__PURE__ */ v("div", {
		className: J("ui-choice flex w-fit items-center gap-2.5", o ? "cursor-not-allowed opacity-40" : "cursor-pointer", d),
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
				"aria-describedby": pr(p, C?.describedBy),
				"aria-invalid": h ?? (C?.invalid || void 0),
				disabled: o,
				required: g ?? C?.required,
				onChange: (e) => r(e.target.checked, e),
				className: "ui-checkbox-input"
			}), /* @__PURE__ */ _("span", {
				className: "ui-checkbox-decoration",
				"aria-hidden": "true",
				children: n ? /* @__PURE__ */ _(U, { className: "h-3 w-3" }) : t ? /* @__PURE__ */ _(D, { className: "h-3 w-3" }) : null
			})]
		}), i && /* @__PURE__ */ _("label", {
			htmlFor: w,
			className: J("text-text-primary text-xs", o ? "cursor-not-allowed" : "cursor-pointer"),
			children: i
		})]
	});
});
Mr.displayName = "Checkbox";
//#endregion
//#region src/components/ui/FilterButton.tsx
var Nr = a(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ v("button", {
		type: "button",
		ref: i,
		className: J("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ _(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ _("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function Pr(e) {
	return typeof e.header == "string" ? e.header : e.sortLabel ?? e.key;
}
function Fr({ columns: e, hidden: n, onToggle: r, label: i = "Columns", heading: a = "Toggle columns", icon: o = N, onOnly: c, onlyLabel: l = "Only", footer: u }) {
	let [d, f] = h(!1), p = m(null);
	return _n(d, s(() => f(!1), []), [p]), /* @__PURE__ */ v("div", {
		className: "relative",
		ref: p,
		children: [/* @__PURE__ */ _(Nr, {
			icon: o,
			onClick: () => f(!d),
			children: i
		}), d && /* @__PURE__ */ v("div", {
			className: J("bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 rounded-md border py-1 shadow-lg", c ? "w-56" : "w-48"),
			children: [e.map((i, o) => /* @__PURE__ */ v(t, { children: [(o === 0 || i.group !== e[o - 1].group) && /* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: i.group ?? a
			}), /* @__PURE__ */ v("div", {
				onClick: () => r(i.key),
				className: "group text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(Mr, {
						checked: !n.has(i.key),
						onChange: () => {},
						ariaLabel: Pr(i)
					}),
					/* @__PURE__ */ _("span", {
						className: "min-w-0 flex-1 truncate",
						children: i.header
					}),
					c && /* @__PURE__ */ _("button", {
						type: "button",
						"aria-label": `${l}: ${Pr(i)}`,
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
function Ir({ page: e, totalPages: t, onPageChange: n, loading: r = !1, total: i, summary: a }) {
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
				className: J("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", r && "cursor-not-allowed opacity-30"),
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
				className: J("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", r && "cursor-not-allowed", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ _("button", {
				type: "button",
				disabled: e >= t,
				"aria-disabled": r || void 0,
				onClick: () => {
					r || n(e + 1);
				},
				className: J("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", r && "cursor-not-allowed opacity-30"),
				"aria-label": "Next page",
				children: /* @__PURE__ */ _(j, { className: "h-3.5 w-3.5" })
			})
		] })]
	});
}
//#endregion
//#region src/components/tables/sortRows.ts
function Lr(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/Table.tsx
function Rr({ caption: e, captionHidden: t = !1, captionClassName: n, stickyHeader: r = !1, maxHeight: i, wrapperClassName: a, wrapperProps: o, beforeTable: s, className: c, children: l, ...u }) {
	return /* @__PURE__ */ v("div", {
		...o,
		className: J("ui-table-wrap", o?.className, a),
		style: {
			maxHeight: i,
			...i ? { overflow: "auto" } : {},
			...o?.style
		},
		children: [s, /* @__PURE__ */ v("table", {
			...u,
			className: J("ui-table", r && "ui-table-sticky", c),
			children: [e != null && /* @__PURE__ */ _("caption", {
				className: J(t && "sr-only", n),
				children: e
			}), l]
		})]
	});
}
function zr({ className: e, ...t }) {
	return /* @__PURE__ */ _("thead", {
		...t,
		className: J("ui-table-head", e)
	});
}
function Br({ className: e, ...t }) {
	return /* @__PURE__ */ _("tbody", {
		...t,
		className: J("ui-table-body", e)
	});
}
function Vr({ selected: e, interactive: t = !1, className: n, ...r }) {
	return /* @__PURE__ */ _("tr", {
		...r,
		"data-selected": e ? "" : void 0,
		className: J("ui-table-row", t && "ui-table-interactive", n)
	});
}
function Hr({ numeric: e = !1, align: t, sort: n, onSort: r, scope: i = "col", className: a, style: o, children: s, ...c }) {
	let l = n ?? c["aria-sort"], u = l === "ascending" ? "descending" : "ascending";
	return /* @__PURE__ */ _("th", {
		...c,
		scope: i,
		"aria-sort": l ?? (r ? "none" : void 0),
		className: J("ui-table-header-cell", e && "ui-table-numeric", a),
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
function Ur({ numeric: e = !1, align: t, nowrap: n = !1, className: r, style: i, ...a }) {
	return /* @__PURE__ */ _("td", {
		...a,
		className: J("ui-table-cell", e && "ui-table-numeric", n && "ui-table-nowrap", r),
		style: {
			...t ? { textAlign: t } : {},
			...i
		}
	});
}
function Wr({ colSpan: e, cellClassName: t, children: n, className: r, ...i }) {
	return /* @__PURE__ */ _("tr", {
		...i,
		className: J("ui-table-empty-row", r),
		children: /* @__PURE__ */ _("td", {
			colSpan: e,
			className: J("ui-table-empty-cell", t),
			children: n
		})
	});
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
var Gr = { "--ui-table-cell-padding-y": "0px" };
function Kr({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: a = "No data", sortKey: o, sortDir: s, onSortChange: c, caption: l, loading: u = !1, loadingMessage: d = "Loading…", className: f, tableProps: m, getRowProps: g, isRowSelected: y }) {
	let b = c !== void 0, [S, w] = h(null), [T, E] = h("asc"), D = b ? o ?? null : S, O = b ? s ?? "asc" : T, k = p(() => b ? e : Lr(e, t, D, O), [
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
	return /* @__PURE__ */ v(Rr, {
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
		className: J("font-data text-xs", m?.className),
		style: {
			...Gr,
			...m?.style
		},
		children: [/* @__PURE__ */ _(zr, { children: /* @__PURE__ */ _(Vr, { children: t.map((e) => /* @__PURE__ */ _(Hr, {
			className: J("text-2xs h-7", e.sortable && "hover:text-text-table-header-hover cursor-pointer select-none"),
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
		}, e.key)) }) }), /* @__PURE__ */ _(Br, { children: k.length === 0 ? /* @__PURE__ */ _(Wr, {
			colSpan: t.length,
			cellClassName: "h-32 px-0 text-center",
			children: u ? d : a
		}) : k.map((e) => {
			let a = g?.(e) ?? {}, o = y?.(e) ?? a["aria-selected"], s = o === !0 || o === "true";
			return /* @__PURE__ */ i(Vr, {
				tabIndex: r ? 0 : void 0,
				...a,
				key: n(e),
				selected: s,
				interactive: !!r,
				className: J("h-8", !s && "hover:bg-bg-hover", r && "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", a.className),
				onClick: (t) => {
					a.onClick?.(t), t.defaultPrevented || r?.(e);
				},
				onKeyDown: (t) => {
					a.onKeyDown?.(t), !(!r || t.defaultPrevented || t.repeat || t.target !== t.currentTarget || t.key !== "Enter" && t.key !== " ") && (t.preventDefault(), r(e));
				}
			}, t.map((t) => /* @__PURE__ */ _(Ur, {
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
function qr({ title: e, open: t, defaultOpen: n = !1, onOpenChange: r, meta: i, children: a, className: o, keepMounted: s = !0 }) {
	let [c, l] = h(n), d = t ?? c, f = u();
	function p() {
		t === void 0 && l(!d), r?.(!d);
	}
	return /* @__PURE__ */ v("div", {
		className: J("border-border rounded-md border", o),
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
					className: J("text-text-tertiary h-3.5 w-3.5 shrink-0 transition-transform duration-[100ms]", !d && "-rotate-90")
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
function Jr(e) {
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
		className: J("space-y-2", e.className),
		children: e.items.map((t) => /* @__PURE__ */ _(qr, {
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
var Yr = {
	neutral: "neutral",
	success: "success",
	warning: "warning",
	error: "danger",
	info: "info"
}, Xr = {
	neutral: B,
	success: O,
	warning: b,
	error: de,
	info: B
};
function Zr({ type: e, title: t, children: n, dismissible: r, className: i, actions: a, toneBody: o = !1, ...s }) {
	let [c, l] = h(!1);
	if (c) return null;
	let u = On(Yr[e]), d = Xr[e], f = e === "neutral" ? "text-text-primary" : u.text;
	return /* @__PURE__ */ v("div", {
		...s,
		className: J("flex gap-2.5 rounded-md border p-3", u.fill, u.border, i),
		children: [
			/* @__PURE__ */ _(d, { className: J("mt-0.5 h-4 w-4 shrink-0", u.text) }),
			/* @__PURE__ */ v("div", {
				className: "min-w-0 flex-1",
				children: [t && /* @__PURE__ */ _("p", {
					className: J(o ? f : "text-text-primary", "mb-0.5 text-xs font-semibold"),
					children: t
				}), /* @__PURE__ */ _("div", {
					className: J(o ? f : "text-text-secondary", "text-xs"),
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
				children: /* @__PURE__ */ _(ue, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/components/ui/AudioPlayer.tsx
var Qr = {
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": !0,
	focusable: !1
}, $r = ({ forward: e, seconds: t, size: n }) => /* @__PURE__ */ v("svg", {
	...Qr,
	viewBox: "0 0 24 24",
	width: n,
	height: n,
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ v("g", {
		transform: e ? "translate(24 0) scale(-1 1)" : void 0,
		children: [/* @__PURE__ */ _("path", { d: "M12 4.2A8.6 8.6 0 1 0 20.6 12.8" }), /* @__PURE__ */ _("path", { d: "M14.6 1.8 12 4.3l2.6 2.5" })]
	}), /* @__PURE__ */ _("text", {
		x: "12",
		y: "16",
		textAnchor: "middle",
		fontSize: "8.6",
		fontWeight: "600",
		fill: "currentColor",
		stroke: "none",
		fontFamily: "inherit",
		children: t
	})]
}), ei = {
	pill: {
		play: /* @__PURE__ */ _("svg", {
			...Qr,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ _("path", { d: "M8 5v14l11-7z" })
		}),
		pause: /* @__PURE__ */ _("svg", {
			...Qr,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ _("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
		}),
		volume: /* @__PURE__ */ _("svg", {
			...Qr,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ _("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" })
		}),
		muted: /* @__PURE__ */ _("svg", {
			...Qr,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ _("path", { d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" })
		}),
		download: /* @__PURE__ */ _("svg", {
			...Qr,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ _("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" })
		})
	},
	glass: {
		play: /* @__PURE__ */ _("svg", {
			...Qr,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "currentColor",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round",
			children: /* @__PURE__ */ _("path", { d: "M2.6 1.4 13.2 8 2.6 14.6z" })
		}),
		pause: /* @__PURE__ */ v("svg", {
			...Qr,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "currentColor",
			children: [/* @__PURE__ */ _("rect", {
				x: "2.6",
				y: "1.6",
				width: "3.6",
				height: "12.8",
				rx: "1"
			}), /* @__PURE__ */ _("rect", {
				x: "9.8",
				y: "1.6",
				width: "3.6",
				height: "12.8",
				rx: "1"
			})]
		}),
		volume: /* @__PURE__ */ v("svg", {
			...Qr,
			viewBox: "0 0 22 16",
			width: 26,
			height: 18,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.3,
			strokeLinecap: "round",
			children: [
				/* @__PURE__ */ _("path", {
					d: "M1.5 5.6h3L8.6 2v12L4.5 10.4h-3z",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ _("path", { d: "M11.4 5.6a3.4 3.4 0 0 1 0 4.8" }),
				/* @__PURE__ */ _("path", { d: "M14.2 3.8a6.4 6.4 0 0 1 0 8.4" }),
				/* @__PURE__ */ _("path", { d: "M17 2.2a9 9 0 0 1 0 11.6" })
			]
		}),
		muted: /* @__PURE__ */ v("svg", {
			...Qr,
			viewBox: "0 0 22 16",
			width: 26,
			height: 18,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.3,
			strokeLinecap: "round",
			children: [/* @__PURE__ */ _("path", {
				d: "M1.5 5.6h3L8.6 2v12L4.5 10.4h-3z",
				fill: "currentColor",
				stroke: "none"
			}), /* @__PURE__ */ _("path", { d: "m12 5.8 5 4.4M17 5.8l-5 4.4" })]
		}),
		download: /* @__PURE__ */ _("svg", {
			...Qr,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ _("path", { d: "M8 1.8v8M4.6 7l3.4 3.4L11.4 7M2.8 13.6h10.4" })
		})
	}
};
function ti(e, t) {
	let n = Number.isFinite(e) && e > 0 ? Math.floor(e) : 0, r = Math.floor(n / 3600), i = Math.floor(n % 3600 / 60), a = String(n % 60).padStart(2, "0");
	return r > 0 ? `${r}:${String(i).padStart(2, "0")}:${a}` : `${t ? String(i).padStart(2, "0") : i}:${a}`;
}
var ni = a(function(e, t) {
	return /* @__PURE__ */ i(ri, {
		...e,
		ref: t,
		key: e.src
	});
}), ri = a(function({ src: e, title: t = "Audio recording", preload: n = "metadata", onTimeUpdate: r, onError: i, downloadHref: a, downloadName: o, variant: s = "plain", skipSeconds: c = !1, showMute: l = !1, keyboardShortcuts: u = !0, playbackRates: f = [
	1,
	1.25,
	1.5,
	2
], className: p, appearance: g = "pill", controls: y }, b) {
	let x = m(null), S = m(!1), C = m(null), [w, T] = h(!1), [E, D] = h(n !== "none"), [O, k] = h(), [A, j] = h(0), [M, N] = h(0), [P, F] = h(!1), [I, L] = h(1), [R, z] = h(1), B = [...new Set([1, ...f.filter((e) => Number.isFinite(e) && e > 0)])].sort((e, t) => e - t), ee = A <= 0 || !!O, V = A > 0 ? Math.min(100, Math.max(0, M / A * 100)) : 0, H = typeof c == "number" && Number.isFinite(c) && c > 0, U = H ? c : 10, W = g === "glass", G = ei[g], te = [...new Set(y ?? [
		...H ? ["skipBack"] : [],
		"play",
		...H ? ["skipForward"] : [],
		...g === "glass" ? [
			"currentTime",
			"progress",
			"duration"
		] : ["time", "progress"],
		...l ? ["mute"] : [],
		"speed",
		...a ? ["download"] : []
	])];
	async function ne() {
		let t = x.current;
		if (!(!t || O || !e)) {
			if (!t.paused) {
				t.pause();
				return;
			}
			try {
				await t.play();
			} catch (e) {
				x.current === t && !(e instanceof DOMException && e.name === "AbortError") && re(e);
			}
		}
	}
	function re(e) {
		x.current?.pause();
		let t = e instanceof Error ? e : /* @__PURE__ */ Error("Unable to load or play audio.");
		k(t.message), D(!1), T(!1), i?.(t);
	}
	function ie(e) {
		let t = x.current;
		if (!t || !Number.isFinite(e) || O) return;
		if (!S.current) {
			let r = C.current === null && n === "none";
			C.current = e, r && (t.preload = "metadata", t.load());
			return;
		}
		let i = t.duration;
		if (!Number.isFinite(i) || i <= 0) return;
		let a = Math.min(i, Math.max(0, e));
		try {
			t.currentTime = a, N(a), r?.(a);
		} catch (e) {
			re(e);
		}
	}
	d(b, () => ({ seekTo: ie }));
	function ae() {
		let e = x.current?.duration;
		j(e && Number.isFinite(e) && e > 0 ? e : 0), D(!1);
	}
	function K(e) {
		if (u && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === " " || e.key.toLowerCase() === "k")) {
			e.preventDefault(), e.repeat || ne();
			return;
		}
		let t = {
			ArrowRight: 5,
			ArrowUp: 5,
			ArrowLeft: -5,
			ArrowDown: -5,
			PageUp: 30,
			PageDown: -30
		}, n = e.key === "Home" ? 0 : e.key === "End" ? A : t[e.key] === void 0 ? void 0 : M + t[e.key];
		n !== void 0 && (e.preventDefault(), ie(n));
	}
	let oe = ti(M, W), q = ti(A, W);
	function se(t) {
		switch (t) {
			case "skipBack":
			case "skipForward": {
				let e = t === "skipForward";
				return /* @__PURE__ */ _("button", {
					type: "button",
					className: "ui-audio-icon-btn ui-audio-skip",
					"aria-label": `${e ? "Forward" : "Back"} ${U} seconds`,
					disabled: ee,
					onClick: () => ie(M + (e ? U : -U)),
					children: /* @__PURE__ */ _($r, {
						forward: e,
						seconds: U,
						size: g === "glass" ? 18 : 24
					})
				}, t);
			}
			case "play": return /* @__PURE__ */ _("button", {
				type: "button",
				className: "ui-audio-play",
				"aria-label": w ? "Pause" : "Play",
				disabled: !!O || !e,
				onClick: ne,
				children: w ? G.pause : G.play
			}, t);
			case "time": return /* @__PURE__ */ v("span", {
				className: "ui-audio-clock ui-audio-time",
				children: [
					oe,
					" / ",
					q
				]
			}, t);
			case "currentTime": return /* @__PURE__ */ _("span", {
				className: "ui-audio-clock",
				children: oe
			}, t);
			case "duration": return /* @__PURE__ */ _("span", {
				className: "ui-audio-clock",
				children: q
			}, t);
			case "progress": return /* @__PURE__ */ _("div", {
				className: "ui-audio-progress",
				children: /* @__PURE__ */ v("div", {
					className: "ui-audio-track",
					children: [
						/* @__PURE__ */ _("input", {
							type: "range",
							className: "ui-audio-seek",
							"aria-label": "Seek",
							"aria-valuetext": `${oe} of ${q}`,
							min: 0,
							max: A,
							step: "any",
							value: M,
							disabled: ee,
							onChange: (e) => ie(Number(e.target.value)),
							onKeyDown: K
						}),
						/* @__PURE__ */ _("div", {
							className: "ui-audio-fill",
							"aria-hidden": "true",
							style: { width: `${V}%` }
						}),
						/* @__PURE__ */ _("div", {
							className: "ui-audio-thumb",
							"aria-hidden": "true",
							style: { left: `calc(${V}% - var(--ui-audio-thumb) / 2)` }
						})
					]
				})
			}, t);
			case "speed": return /* @__PURE__ */ _("div", {
				className: "ui-audio-select",
				children: /* @__PURE__ */ _("select", {
					"aria-label": "Playback speed",
					value: String(R),
					disabled: !!O,
					onChange: (e) => {
						let t = Number(e.target.value);
						try {
							x.current && (x.current.playbackRate = t), z(t);
						} catch {
							e.target.value = String(R);
						}
					},
					children: B.map((e) => /* @__PURE__ */ _("option", {
						value: String(e),
						children: `${e}x`
					}, e))
				})
			}, t);
			case "mute":
			case "volume": {
				let n = /* @__PURE__ */ _("button", {
					type: "button",
					className: "ui-audio-icon-btn",
					"aria-label": P ? "Unmute" : "Mute",
					"aria-pressed": P,
					disabled: !!O || !e,
					onClick: () => {
						let e = x.current;
						e && (e.muted = !e.muted, F(e.muted));
					},
					children: P ? G.muted : G.volume
				}, "toggle");
				return t === "mute" ? /* @__PURE__ */ _("span", {
					className: "ui-audio-mute",
					children: n
				}, t) : /* @__PURE__ */ v("div", {
					className: "ui-audio-volume",
					children: [n, /* @__PURE__ */ _("div", {
						className: "ui-audio-volume-popup",
						children: /* @__PURE__ */ _("input", {
							className: "ui-audio-volume-slider",
							type: "range",
							min: 0,
							max: 1,
							step: .05,
							value: I,
							"aria-label": "Volume",
							"aria-valuetext": `${Math.round(I * 100)}%`,
							disabled: !!O || !e,
							onChange: (e) => {
								let t = x.current;
								if (!t) return;
								let n = Number(e.target.value);
								t.volume = n, n > 0 && t.muted && (t.muted = !1), L(t.volume), F(t.muted);
							}
						})
					})]
				}, t);
			}
			case "download": return a ? /* @__PURE__ */ _("a", {
				href: a,
				download: o ?? "",
				className: "ui-audio-icon-btn",
				"aria-label": "Download recording",
				title: "Download recording",
				children: G.download
			}, t) : null;
		}
	}
	return /* @__PURE__ */ v("div", {
		role: "group",
		"aria-label": t,
		className: J("ui-audio", s === "card" && "ui-audio-card", g === "glass" ? "ui-audio-glass" : "ui-audio-pill", p),
		children: [
			s === "card" && /* @__PURE__ */ _("p", {
				className: "ui-audio-title",
				children: t
			}),
			/* @__PURE__ */ _("audio", {
				ref: x,
				src: e,
				preload: n,
				onLoadStart: () => {
					D(!0), k(void 0);
				},
				onLoadedMetadata: () => {
					S.current = !0, ae();
					let e = C.current;
					C.current = null, e !== null && ie(e);
				},
				onDurationChange: ae,
				onCanPlay: () => D(!1),
				onSuspend: () => D(!1),
				onWaiting: () => D(!0),
				onPlaying: () => {
					T(!0), D(!1);
				},
				onVolumeChange: (e) => {
					F(e.currentTarget.muted), L(e.currentTarget.volume);
				},
				onPause: () => T(!1),
				onEnded: () => T(!1),
				onError: () => re(/* @__PURE__ */ Error("Unable to load audio recording.")),
				onTimeUpdate: (e) => {
					let t = e.currentTarget.currentTime;
					N(t), r?.(t);
				}
			}),
			/* @__PURE__ */ _("div", {
				className: "ui-audio-row",
				children: te.map((e) => se(e))
			}),
			O ? /* @__PURE__ */ _("p", {
				role: "alert",
				className: "ui-audio-error",
				children: O
			}) : E ? /* @__PURE__ */ v("p", {
				role: "status",
				className: "ui-audio-status",
				children: [/* @__PURE__ */ _("span", {
					className: "ui-audio-spinner",
					"aria-hidden": "true"
				}), "Loading audio…"]
			}) : null
		]
	});
});
//#endregion
//#region src/components/ui/AuthCard.tsx
function ii({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ _("div", {
		className: J("relative z-10 w-full max-w-sm", a),
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
function ai({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ v("div", {
		className: J("flex items-center gap-2", i),
		children: [/* @__PURE__ */ _(Cn, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ v("div", { children: [/* @__PURE__ */ v("p", {
			className: J("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ _("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var oi = "font-label inline-flex items-center rounded-md font-medium", si = {
	xs: "text-2xs gap-1 px-1.5",
	sm: "text-2xs gap-1.5 px-2 py-0.5",
	md: "text-xs gap-1.5 px-2.5 py-1"
}, ci = {
	xs: "h-1.5 w-1.5",
	sm: "h-1.5 w-1.5",
	md: "h-2 w-2"
}, li = "cursor-pointer transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40", ui = {
	soft: "hover:text-text-primary",
	outline: "hover:border-border-strong hover:text-text-primary"
}, di = !1;
function fi() {
	let e = !1;
	try {
		e = process.env.NODE_ENV !== "production";
	} catch {}
	!e || di || (di = !0, console.warn("[Badge] `selected` needs `onClick`; without it the badge renders as a static span and `selected` is ignored."));
}
var pi = a(function(e, t) {
	let { color: n, variant: r = "soft", size: i = "sm", dot: a, selected: o, onClick: s, disabled: c, className: l, children: u, ...d } = e;
	o !== void 0 && !s && fi();
	let f = s ? o : void 0, p = f !== void 0, m = Tn[p && !f ? "gray" : n ?? (p ? "accent" : "gray")], h = J(oi, si[i], r === "outline" ? J("border", m.outline) : m.soft, f && (r === "outline" ? m.fill : "ring"), s && li, p && !f && ui[r], c && !s && "opacity-40", l), y = /* @__PURE__ */ v(g, { children: [a && /* @__PURE__ */ _("span", { className: J(ci[i], "rounded-full", m.dot) }), u] });
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
pi.displayName = "Badge";
//#endregion
//#region src/components/ui/badgeColors.ts
var mi = Tn, hi = /* @__PURE__ */ new Map();
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
	let n = hi.get(t);
	n || (n = new Intl.DateTimeFormat("en-GB-u-ca-iso8601-nu-latn", {
		timeZone: t,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}), hi.set(t, n));
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
function gi(e) {
	let t = /* @__PURE__ */ new Date(0);
	return t.setUTCFullYear(e.year, e.month - 1, e.day), t.setUTCHours(e.hour, e.minute, e.second, e.millisecond), t.getTime();
}
function _i(e, t, n = "compatible") {
	let r = gi(e), i = new Date(r);
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
		a.add(gi($(new Date(n), t)) - n);
	}
	let o = [...a].map((e) => r - e).sort((e, t) => e - t), s = o.filter((e) => gi($(new Date(e), t)) === r);
	if (s.length === 1) return new Date(s[0]);
	if (n === "reject") throw RangeError(s.length ? "This time occurs twice in the selected timezone" : "This time does not exist in the selected timezone");
	return s.length ? new Date(n === "later" ? s[s.length - 1] : s[0]) : new Date(n === "earlier" ? o[0] : o[o.length - 1]);
}
var vi = 1440, yi = 6e4, bi = [
	1,
	2,
	3,
	4,
	5
];
function xi(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function Si(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Ci(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes() + t, e.getSeconds(), e.getMilliseconds());
}
function wi(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes());
}
function Ti(e, t = 1) {
	let n = xi(e);
	return Si(n, -((n.getDay() - t + 7) % 7));
}
function Ei(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Di(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Oi(e, t) {
	let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	return Math.round((n - r) / 864e5);
}
function ki(e) {
	return e.getHours() * 60 + e.getMinutes() + e.getSeconds() / 60 + e.getMilliseconds() / yi;
}
function Ai(e, t) {
	let n = ji(e, t);
	if (!Di(n, e) || ki(n) <= t) return n;
	let r = Math.floor(t);
	for (; r > 0 && ki(ji(e, r - 1)) !== r - 1;) r--;
	return /* @__PURE__ */ new Date(n.getTime() - (t - r) * yi);
}
function ji(e, t) {
	let n = Math.floor(t);
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, n, Math.round((t - n) * 60));
}
function Mi(e) {
	let t = /^(\d{1,2}):(\d{2})$/.exec(e.trim());
	if (!t) throw RangeError(`Invalid time "${e}", expected HH:mm`);
	let n = Number(t[1]), r = Number(t[2]);
	if (r > 59 || n > 24 || n === 24 && r > 0) throw RangeError(`Invalid time "${e}"`);
	return n * 60 + r;
}
function Ni(e) {
	let t = Math.round(e), n = Math.floor(t / 60), r = t % 60;
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Pi(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function Fi(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
	if (!t) throw RangeError(`Invalid date key "${e}"`);
	let n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
	if (Pi(n) !== e) throw RangeError(`Invalid date key "${e}"`);
	return n;
}
function Ii(e, t, n = "round") {
	if (t <= 0) return e;
	let r = n === "floor" ? Math.floor : n === "ceil" ? Math.ceil : Math.round, i = e / t;
	return r(n === "floor" ? i + 1e-9 : n === "ceil" ? i - 1e-9 : i) * t;
}
function Li(e, t, n = "round") {
	return ji(xi(e), Ii(ki(e), t, n));
}
function Ri(e) {
	return e === "day" || e === "threeDay" || e === "workWeek" || e === "week";
}
function zi(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = xi(t);
	switch (e) {
		case "day":
		case "timeline": return [i];
		case "threeDay": return [
			i,
			Si(i, 1),
			Si(i, 2)
		];
		case "week": {
			let e = Ti(i, r);
			return Array.from({ length: 7 }, (t, n) => Si(e, n));
		}
		case "workWeek": {
			let e = new Set(n.workWeekDays ?? bi), t = Ti(i, r), a = Array.from({ length: 7 }, (e, n) => Si(t, n)).filter((t) => e.has(t.getDay()));
			return a.length ? a : [i];
		}
		case "agenda": {
			let e = Math.max(1, Math.floor(n.agendaDays ?? 7));
			return Array.from({ length: e }, (e, t) => Si(i, t));
		}
		case "month": return Bi(t, r).flat();
	}
}
function Bi(e, t = 1) {
	let n = Ei(e), r = new Date(n.getFullYear(), n.getMonth() + 1, 0), i = Ti(n, t), a = [], o = i;
	for (; o <= r || a.length === 0;) {
		let e = Array.from({ length: 7 }, (e, t) => Si(o, t));
		a.push(e), o = Si(o, 7);
	}
	return a;
}
function Vi(e, t, n = {}) {
	let r = zi(e, t, n);
	return {
		start: r[0],
		end: Si(r[r.length - 1], 1)
	};
}
function Hi(e, t, n, r = {}) {
	switch (e) {
		case "day":
		case "timeline": return Si(t, n);
		case "threeDay": return Si(t, 3 * n);
		case "week":
		case "workWeek": return Si(t, 7 * n);
		case "agenda": return Si(t, Math.max(1, r.agendaDays ?? 7) * n);
		case "month": return wi(t, n);
	}
}
var Ui = /* @__PURE__ */ new Map();
function Wi(e, t) {
	let n = `${e}|${JSON.stringify(t)}`, r = Ui.get(n);
	return r || (r = new Intl.DateTimeFormat(e, t), Ui.set(n, r)), r;
}
function Gi(e, t = {}) {
	return Wi(t.locale ?? "en-GB", {
		timeZone: t.timeZone,
		timeZoneName: t.timeZone ? "short" : void 0,
		hour: t.hour12 ? "numeric" : "2-digit",
		minute: "2-digit",
		hourCycle: t.hour12 ? "h12" : "h23"
	}).format(e);
}
function Ki(e, t, n = {}) {
	return `${Gi(e, n)}–${Gi(t, n)}`;
}
function qi(e, t = {}) {
	if (!t.hour12) return Ni(e);
	let n = ji(new Date(2e3, 0, 1), e);
	return Wi(t.locale ?? "en-GB", {
		hour: "numeric",
		minute: e % 60 ? "2-digit" : void 0,
		hour12: !0
	}).format(n);
}
function Ji(e, t = "en-GB") {
	return Wi(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e);
}
function Yi(e, t, n = {}) {
	let r = n.locale ?? "en-GB";
	if (e === "month") return Wi(r, {
		month: "long",
		year: "numeric"
	}).format(t);
	let i = zi(e, t, n), a = i[0], o = i[i.length - 1];
	if (i.length === 1) return Ji(a, r);
	let s = a.getFullYear() === o.getFullYear(), c = s && a.getMonth() === o.getMonth(), l = Wi(r, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	if (c) return `${a.getDate()} – ${l.format(o)}`;
	let u = Wi(r, s ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	}), d = Wi(r, {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return `${u.format(a)} – ${d.format(o)}`;
}
function Xi(e, t, n, r) {
	return e < r && n < t;
}
function Zi(e, t, n) {
	let r = xi(n), i = Si(r, 1), a = e.getTime(), o = Math.max(t.getTime(), a);
	if (o === a) {
		if (a < r.getTime() || a >= i.getTime()) return null;
	} else if (!Xi(a, o, r.getTime(), i.getTime())) return null;
	let s = a < r.getTime(), c = o > i.getTime();
	return {
		startMinute: s ? 0 : ki(e),
		endMinute: o >= i.getTime() ? vi : Math.max(ki(t), s ? 0 : ki(e)),
		continuesBefore: s,
		continuesAfter: c
	};
}
function Qi(e) {
	let t = e.filter(([e, t]) => t > e).map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]), n = [];
	for (let [e, r] of t) {
		let t = n[n.length - 1];
		t && e <= t[1] ? t[1] = Math.max(t[1], r) : n.push([e, r]);
	}
	return n;
}
function $i(e, t, n) {
	let r = [], i = e;
	for (let [e, a] of Qi(n)) if (!(a <= i) && (e >= t || (e > i && r.push([i, Math.min(e, t)]), i = Math.max(i, a), i >= t))) break;
	return i < t && r.push([i, t]), r;
}
function ea(e, t = 0) {
	let n = e.map((e) => ({
		id: e.id,
		start: e.start,
		end: Math.max(e.end, e.start + t)
	})).sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), r = /* @__PURE__ */ new Map(), i = [], a = [], o = -Infinity, s = () => {
		let e = a.length;
		for (let t of i) {
			let n = 1;
			for (let r = t.column + 1; r < e && !i.some((e) => e.column === r && Xi(t.start, t.end, e.start, e.end)); r++) n++;
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
function ta(e) {
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
function na(e) {
	return e === void 0 ? [] : typeof e == "string" ? [e] : e;
}
function ra(e, t, { emptyMatchesAll: n }) {
	if (t === void 0) return !0;
	let r = na(e);
	return r.length === 0 ? n : r.includes(t);
}
function ia(e, t, n) {
	let r = na(e);
	if (t === void 0 || n === void 0 || t === n) return r.length ? [...r] : void 0;
	if (r.length === 0) return;
	let i = r.map((e) => e === t ? n : e);
	return [...new Set(i)];
}
function aa(e, t, n = []) {
	let r = /* @__PURE__ */ new Set(), i = e.start.getTime(), a = e.end.getTime();
	for (let e of [...t, ...n]) if (Xi(e.start.getTime(), e.end.getTime(), i, a) && !("kind" in e && e.kind === "unavailable")) for (let t of na(e.resourceId)) r.add(t);
	return r;
}
function oa(e, t, n = {}) {
	let { fromDateKey: r, wallDateAtMinutes: i, toDateKey: a, startOfWeek: o, startOfDay: s, addDays: c, differenceInDays: l, weekday: u } = pa(n.timeZone), d = n.weekStartsOn ?? 1, f = [], p = t.start.getTime(), m = t.end.getTime();
	for (let n of e) {
		let e = Mi(n.startTime), h = Mi(n.endTime);
		h <= e && (h += vi);
		let g = r(n.startDate), _ = (t) => {
			let r = i(t, e), o = i(t, h);
			if (o <= r || !Xi(r.getTime(), o.getTime(), p, m)) return;
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
function sa(e, t, n, r, i) {
	let a = Ii(t, r, "floor"), o = Ii(n, r, "floor"), s = Y(Math.min(a, o), i.min, i.max - r), c = Y(Math.max(a, o) + r, s + r, i.max), l = Ai(e, s), u = Ai(e, c);
	return u <= l && (u = new Date(l.getTime() + r * yi)), {
		start: l,
		end: u
	};
}
function ca(e, t, n, r, i, a) {
	let o = (e.end.getTime() - e.start.getTime()) / yi, s = Ii(n - r, i), c = ki(e.start);
	c >= a.min && c + o <= a.max && (s = Y(s, a.min, a.max - o));
	let l = ji(t, s);
	return {
		start: l,
		end: new Date(l.getTime() + o * yi)
	};
}
function la(e, t, n, r, i) {
	let a = xi(t), o = e.start.getTime() >= a.getTime() ? ki(e.start) + r : r;
	return Ai(a, Y(Ii(n, r), Math.min(o, vi), Math.max(i.max, o)));
}
function ua(e, t) {
	return {
		start: Si(e.start, t),
		end: Si(e.end, t)
	};
}
function da(e, t) {
	return e.start.getTime() === t.start.getTime() && e.end.getTime() === t.end.getTime();
}
function fa(e) {
	return e.allDay ? !0 : e.end.getTime() >= Si(e.start, 1).getTime();
}
function pa(e) {
	let t = (t) => $(t, e), n = (t) => _i(t, e), r = (e) => {
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
		let i = t(e), a = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, Math.floor(r), 0, Math.round((r - Math.floor(r)) * yi)));
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
		return u(e, n) * vi + r.hour * 60 + r.minute + r.second / 60 + r.millisecond / yi;
	}, p = (t, n) => {
		let r = d(t, n), i = f(r, t);
		if (!e || i <= n + 1e-8) return r;
		let a = Math.floor(r.getTime() - (i - n) * yi), o = r.getTime();
		for (; a < o;) {
			let e = Math.floor((a + o) / 2);
			f(new Date(e), t) < n ? a = e + 1 : o = e;
		}
		return new Date(o);
	}, m = (e) => {
		if (!Number.isFinite(e.min) || !Number.isFinite(e.max) || e.max <= e.min) throw RangeError("Calendar time bounds must contain a positive interval of real instants");
	}, h = e ? (e, t) => new Date(i(e).getTime() + t * yi) : ji, g = e ? (e) => (e.getTime() - i(e).getTime()) / yi : ki, _ = e ? (e, t) => new Date(e.getTime() + t * yi) : Ci, v = (e) => {
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
			let o = new Set(n.workWeekDays ?? bi), l = i.filter((e) => o.has(s(e)));
			return l.length ? l : [r];
		}
		let o = e === "threeDay" ? 3 : e === "agenda" ? Math.max(1, Math.floor(n.agendaDays ?? 7)) : 1;
		return Array.from({ length: o }, (e, t) => a(r, t));
	}, x = (t, n, r) => {
		if (!e) return Zi(t, n, r);
		let o = i(r).getTime(), s = a(i(r), 1).getTime(), c = t.getTime(), l = Math.max(c, n.getTime());
		return (l === c ? c < o || c >= s : !Xi(c, l, o, s)) ? null : {
			startMinute: Math.max(0, (c - o) / yi),
			endMinute: Math.min(s - o, l - o) / yi,
			continuesBefore: c < o,
			continuesAfter: l > s
		};
	}, S = (e) => !!e.allDay || e.end >= a(e.start, 1), C = (t, n) => Wi(t, {
		...n,
		...e ? { timeZone: e } : {}
	}), w = (e, t = "en-GB") => C(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e), T = (n, r, i = {}) => {
		if (!e) return Yi(n, r, i);
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
		if (!e) return ca(n, r, i, a, o, s);
		m(s);
		let c = (n.end.getTime() - n.start.getTime()) / yi, l = Ii(i - a, o), f = (e) => {
			let n = h(r, e), i = t(n);
			return u(n, r) * vi + i.hour * 60 + i.minute;
		}, p = d(n.start, f(s.min)), g = d(n.start, f(s.max));
		n.start >= p && n.end <= g && c <= s.max - s.min && (l = Y(l, s.min, s.max - c));
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
			if (!e) return sa(t, n, r, i, a);
			let o = Ii(n, i, "floor"), s = Ii(r, i, "floor");
			m(a);
			let c = Math.min(i, a.max - a.min), l = Y(Math.min(o, s), a.min, a.max - c);
			return {
				start: h(t, l),
				end: h(t, Y(Math.max(o, s) + i, l + c, a.max))
			};
		},
		computeMoveRange: E,
		computeResizeEnd: (t, n, r, a, o) => {
			if (!e) return la(t, n, r, a, o);
			m(o);
			let s = Math.max(0, (t.start.getTime() - i(n).getTime()) / yi) + a;
			return h(n, Y(Ii(r, a), s, Math.max(o.max, s)));
		},
		computeNudgeRange: (e, t, n) => E(e, i(e.start), g(e.start) + t, 0, 1, n),
		shiftRangeDays: (t, n) => {
			if (!e) return ua(t, n);
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
				min: (p(t, n.min).getTime() - r) / yi,
				max: (p(t, n.max).getTime() - r) / yi
			};
			return m(a), a;
		}
	};
}
function ma(e, t, n, r, i = !0) {
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
	let s = pa(n.timeZone), c = /* @__PURE__ */ new Map(), l = e.map(({ day: e, bounds: t }) => {
		let i = s.toDateKey(e), a = c.get(i);
		if (a) return a;
		let l = o(t), u = l.map((t) => s.dateAtMinutes(e, t)), d = u.map((e) => Gi(e, n)), f = Wi(n.locale ?? "en-GB", {
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
var ha = r(null);
function ga() {
	let e = c(ha);
	if (!e) throw Error("Calendar views must render inside <Calendar>");
	return e;
}
//#endregion
//#region src/components/ui/calendar/AgendaView.tsx
function _a({ days: e, events: t, availability: n, label: r }) {
	let i = ga(), { daySegment: a, eventsOnDay: o, getFormatter: s, isAllDayLike: c, isSameDay: l, toDateKey: u } = i.dates, d = s(i.locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}), f = (e) => na(e).map((e) => i.resourceById.get(e)?.title).filter(Boolean).join(", ");
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
					className: J("ui-cal-agenda-day border-border border-b px-3 py-1.5 text-xs font-semibold", s ? "text-accent" : "text-text-primary"),
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
					children: r.map((e) => /* @__PURE__ */ _("li", { children: e.type === "event" ? /* @__PURE__ */ _(va, {
						event: e.value,
						resources: f(e.value.resourceId)
					}) : /* @__PURE__ */ _(ya, {
						block: e.value,
						resources: f(e.value.resourceId)
					}) }, `${e.type}:${e.value.id}`))
				})]
			}, u(e));
		})
	});
}
function va({ event: e, resources: t }) {
	let n = ga(), { isAllDayLike: r } = n.dates, i = n.statusLabel(e), a = r(e) ? n.labels.allDay : Ki(e.start, e.end, n);
	return /* @__PURE__ */ v("div", {
		role: "button",
		tabIndex: 0,
		"aria-label": n.describeEvent(e),
		"data-status": e.status ?? "confirmed",
		className: J("ui-cal-agenda-row hover:bg-bg-hover flex cursor-pointer items-start gap-3 px-3 py-2 transition-colors duration-[100ms]", `ui-cal-c-${n.eventColor(e)}`),
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
function ya({ block: e, resources: t }) {
	let n = ga(), r = e.kind ?? "available", i = r === "available" ? n.labels.available : n.labels.unavailable, a = n.hasBlockClick;
	return /* @__PURE__ */ v("div", {
		role: a ? "button" : void 0,
		tabIndex: a ? 0 : void 0,
		"aria-label": n.describeBlock(e),
		className: J("text-text-tertiary flex items-start gap-3 px-3 py-1.5 text-2xs", a && "hover:bg-bg-hover cursor-pointer transition-colors duration-[100ms]", `ui-cal-c-${n.blockColor(e)}`),
		onClick: a ? () => n.clickBlock(e) : void 0,
		onKeyDown: a ? (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickBlock(e));
		} : void 0,
		children: [
			/* @__PURE__ */ _("span", {
				className: "font-mono w-24 shrink-0",
				children: Ki(e.start, e.end, n)
			}),
			/* @__PURE__ */ _("span", {
				className: J("ui-cal-agenda-swatch mt-0.5", r === "unavailable" && "ui-cal-agenda-swatch-off"),
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
var ba = 96, xa = 224;
function Sa(e) {
	return `${e.type}:${e.value.id}`;
}
function Ca({ date: e, events: t, availability: n, label: r }) {
	let i = ga(), { addDays: a, daySegment: o, differenceInDays: c, eventsOnDay: u, formatLongDate: d, fromDateKey: g, getFormatter: y, getMonthWeeks: b, isAllDayLike: x, isSameDay: S, shiftRangeDays: C, toDateKey: w } = i.dates, T = p(() => b(e, i.weekStartsOn), [
		e,
		i.weekStartsOn,
		b
	]), E = m(null), D = m(null), [O, k] = h(null), [A, j] = h(null), M = zt(), N = m(null), [P, F] = h(null), [I, L] = h(null), R = m(null), z = m(i);
	f(() => {
		z.current = i;
	}), l(() => {
		let e = R;
		return () => {
			e.current?.cleanup(), e.current = null;
		};
	}, []);
	let B = m(!1), [ee, V] = h(null);
	l(() => {
		let e = E.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			V(e[0]?.contentRect.height ?? null);
		});
		return t.observe(e), () => t.disconnect();
	}, []);
	let H = s(() => j(null), []);
	_n(A !== null, H, [D]), gn(A !== null, N, D, (e, t) => {
		let n = Math.max(e.width, xa);
		return {
			top: Math.max(8, e.top),
			left: Math.max(8, Math.min(e.left, t - n - 8)),
			width: n
		};
	}), l(() => {
		A && D.current?.querySelector("[data-cal-close]")?.focus();
	}, [A]);
	let U = i.editLayer === "availability", W = i.dates.parts(e).month, G = p(() => T.flat(), [T]), te = w(i.now), ne = G.find((e) => w(e) === te && i.dates.parts(e).month === W) ?? G.find((t) => i.dates.parts(t).month === W && i.dates.parts(t).day === i.dates.parts(e).day) ?? G.find((e) => i.dates.parts(e).month === W) ?? G[0], re = O && G.some((e) => w(e) === O) ? O : w(ne), ie = p(() => {
		let e = /* @__PURE__ */ new Map();
		for (let r of G) {
			let i = u(t, r).map((e) => ({
				type: "event",
				value: e
			})), a = n.filter((e) => o(e.start, e.end, r)).sort((e, t) => e.start.getTime() - t.start.getTime()), s = a.some((e) => (e.kind ?? "available") === "available"), c = U ? a.map((e) => ({
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
		G,
		t,
		n,
		U,
		u,
		o,
		w
	]), ae = y(i.locale, { weekday: "short" }), K = i.monthMaxEvents ?? (ee ? Math.max(1, Math.floor((Math.max(ee / T.length, ba) - 28) / 20)) : 3);
	function oe(e) {
		let t = w(e);
		k(t), requestAnimationFrame(() => {
			E.current?.querySelector(`[data-cal-date="${t}"]`)?.focus();
		});
	}
	function q(e, t) {
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
			G.some((e) => S(e, r)) && oe(r);
		} else if (e.key === "Home" || e.key === "End") {
			e.preventDefault();
			let n = (i.dates.weekday(t) - i.weekStartsOn + 7) % 7;
			oe(a(t, e.key === "Home" ? -n : 6 - n));
		} else (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i.openDay(t));
	}
	function se(e) {
		return e.type === "event" ? i.canEditEvent(e.value) : i.canEditBlock(e.value);
	}
	function ce(e, t) {
		let n = {
			action: "move",
			...C(e.value, t),
			resourceIds: ia(e.value.resourceId, void 0, void 0)
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
	function le(e) {
		e.type === "event" ? i.clickEvent(e.value) : i.clickBlock(e.value);
	}
	function de(e, t, n) {
		if (e.button !== 0 || R.current || (e.stopPropagation(), e.pointerType === "touch" || !se(t))) return;
		let r = (e) => {
			let t = R.current;
			if (!t || e.pointerId !== t.pointerId) return;
			if (!t.started) {
				if (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) < 4) return;
				t.started = !0, L(Sa(t.item));
			}
			let n = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-cal-date]"), r = n && E.current?.contains(n) ? n.dataset.calDate ?? null : null;
			t.overKey = r ?? void 0, F(r);
		}, i = (e) => {
			let t = R.current;
			if (!t || (R.current = null, t.cleanup(), F(null), L(null), t.started && (B.current = !0, setTimeout(() => {
				B.current = !1;
			}, 0)), !e || !t.started || !t.overKey || t.overKey === t.originKey)) return;
			let n = c(g(t.overKey), g(t.originKey));
			z.current.commit(ce(t.item, n), "pointer");
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
		B.current || le(e);
	}
	function me(e, t) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), e.stopPropagation(), le(t);
			return;
		}
		if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
			if (e.preventDefault(), e.stopPropagation(), !se(t)) return;
			i.commit(ce(t, e.key === "ArrowLeft" ? -1 : 1), "keyboard");
		}
	}
	function he(e, t) {
		e.target !== e.currentTarget || !i.selectable || i.commit({
			target: "selection",
			action: "create",
			start: t,
			end: a(t, 1),
			allDay: !0
		}, "pointer");
	}
	let ge = (e, t) => {
		let n = Sa(e), r = e.value.placeholder ? {
			"aria-hidden": !0,
			"data-placeholder": !0
		} : {
			role: "button",
			tabIndex: 0,
			onPointerDown: (n) => de(n, e, t),
			onClick: () => fe(e),
			onKeyDown: (t) => me(t, e)
		};
		if (e.type === "availability") {
			let t = e.value;
			return /* @__PURE__ */ v("div", {
				className: J("ui-cal-chip", `ui-cal-c-${i.blockColor(t)}`),
				"data-all-day": !0,
				"data-dragging": I === n || void 0,
				"aria-label": t.placeholder ? void 0 : i.describeBlock(t),
				...r,
				children: [i.display.time && /* @__PURE__ */ _("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: Ki(t.start, t.end, i)
				}), i.display.blockLabels && /* @__PURE__ */ _("span", {
					className: "ui-cal-title",
					children: t.label ?? ((t.kind ?? "available") === "available" ? i.labels.available : i.labels.unavailable)
				})]
			}, n);
		}
		let a = e.value, o = x(a), s = i.statusLabel(a);
		return /* @__PURE__ */ v("div", {
			className: J("ui-cal-chip", `ui-cal-c-${i.eventColor(a)}`),
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
					children: Gi(a.start, i)
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
				children: ae.format(e)
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
					let t = w(e), n = ie.get(t), r = n?.items ?? [], a = Math.max(1, K), o = r.length > a, s = o ? r.slice(0, a - 1) : r, c = t === te, l = i.dates.parts(e).month !== W, u = i.hasAvailability && i.shadeOutsideAvailability && !n?.hasAvailable;
					return /* @__PURE__ */ v("div", {
						role: "gridcell",
						tabIndex: t === re ? 0 : -1,
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
						onKeyDown: (t) => q(t, e),
						onClick: (t) => he(t, e),
						children: [
							/* @__PURE__ */ _("button", {
								type: "button",
								tabIndex: -1,
								onClick: () => i.openDay(e),
								"aria-label": d(e, i.locale),
								className: J("flex h-5 min-w-5 cursor-pointer items-center justify-center self-start rounded-full px-1 text-2xs font-semibold transition-colors duration-[100ms]", c ? "bg-accent text-text-on-accent" : l ? "text-text-tertiary hover:bg-bg-hover" : "text-text-primary hover:bg-bg-hover"),
								children: i.dates.parts(e).day
							}),
							s.map((e) => ge(e, t)),
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
							A === t && pe(/* @__PURE__ */ v("div", {
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
										onClick: H,
										"data-cal-close": !0,
										children: /* @__PURE__ */ _(ue, { className: "h-3.5 w-3.5" })
									})]
								}), r.map((e) => ge(e, t))]
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
function wa({ event: e, style: t, resizeEdge: n, compact: r, dense: i, continuesBefore: a, continuesAfter: o, dragging: s, onKeyDown: c, onClick: l }) {
	let u = ga(), d = u.canEditEvent(e), f = e.allDay ? u.labels.allDay : Ki(e.start, e.end, u), { display: p } = u, m = p.status ? u.statusLabel(e) : void 0, h = [p.time && f, m].filter(Boolean).join(" · "), y = !!e.placeholder, b = u.renderEvent?.(e, {
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
		className: J("ui-cal-event", `ui-cal-c-${u.eventColor(e)}`),
		style: t,
		onKeyDown: y ? void 0 : c,
		onClick: y ? void 0 : l,
		children: [b ?? (i ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("span", {
			className: "ui-cal-title",
			children: e.title
		}), h && /* @__PURE__ */ _("span", {
			className: "ui-cal-meta font-mono",
			children: h
		})] }) : /* @__PURE__ */ _(Ta, {
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
function Ta({ event: e, compact: t, timeLabel: n, statusLabel: r, description: i, badge: a }) {
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
function Ea({ block: e, style: t, resizeEdge: n, continuesAfter: r, dragging: i, onKeyDown: a, onClick: o }) {
	let s = ga(), c = s.editLayer === "availability", l = c && s.canEditBlock(e), u = e.kind ?? "available", d = e.label ?? (u === "available" ? s.labels.available : s.labels.unavailable), f = c && !e.placeholder && (l || s.hasBlockClick);
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
		className: J("ui-cal-avail", `ui-cal-c-${s.blockColor(e)}`),
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
				children: Ki(e.start, e.end, s)
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
function Da({ draft: e, invalid: t, style: n }) {
	let r = ga(), i = e.target === "event" ? e.event.title : e.target === "availability" ? e.availability.label ?? r.labels.available : void 0;
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
				children: Ki(e.start, e.end, r)
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
var Oa = 4, ka = 10, Aa = 36;
function ja(e, t, n, r, i) {
	let a = na(e.value.resourceId).length > 0, o = {
		action: t,
		start: n.start,
		end: n.end,
		resourceId: a ? i : void 0,
		previousResourceId: a ? r : void 0,
		resourceIds: ia(e.value.resourceId, r, i)
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
function Ma(e, t) {
	return t.target === "selection" ? !1 : da(e.value, t) && (t.resourceId === void 0 || t.resourceId === t.previousResourceId);
}
function Na({ axis: e, columns: t, pxPerMinute: n, scrollRef: r, events: i, blocks: a, initialColumn: o }) {
	let s = ga(), { addMinutes: c, computeNudgeRange: u, dateAtMinutes: d, differenceInDays: p, shiftRangeDays: g } = s.dates, [_, v] = h(null), [y, b] = h(null), x = m(null), S = m({
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
		return Y(s.min + l / a, s.min, s.max);
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
			l = ja(e.item, "move", c, s.resourceId, a.resourceId);
		} else if (e.kind === "resize" && e.item) {
			let t = w(e.origin);
			if (!t) return;
			let n = a(e.item.value, s.day, T(t, e.lastX, e.lastY), o, c);
			l = ja(e.item, "resize", {
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
		if (e.lastY < n.top + Aa ? a = -1 : e.lastY > n.bottom - Aa && (a = 1), e.lastX < n.left + Aa ? i = -1 : e.lastX > n.right - Aa && (i = 1), !i && !a) {
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
				if (!e || a.item && Ma(a.item, e.draft)) return;
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
					let o = t.dayBounds(e.day), s = Math.min(i, o.max - o.min), c = Y(Ii(a.anchorMinute, i, "floor"), o.min, o.max - s), l = Math.min(c + Math.max(i, t.clickCreateDuration), o.max);
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
					n > ka && (t.moved = !0);
					return;
				}
				if (t.kind === "click" || n < Oa) {
					n >= Oa && (t.moved = !0);
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
				v = ja(f, "resize", {
					start: d.start,
					end: t
				}, _.resourceId, _.resourceId);
			} else v = ja(f, "move", u(d, e, s.dayBounds(d.start)), _.resourceId, _.resourceId);
		} else if (h.includes(n.key) && !n.shiftKey) {
			let e = t[l + (n.key === h[0] ? -1 : 1)];
			if (!e) return;
			v = ja(f, "move", g(d, p(e.day, _.day)), _.resourceId, e.resourceId);
		}
		v && (n.preventDefault(), !Ma(f, v) && s.commit(v, "keyboard") && j(o));
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
		let e = t[Y(o, 0, Math.max(0, t.length - 1))], n = e ? s.dayBounds(e.day) : s.bounds, r = Math.min(C, n.max - n.min), i = Y(Ii((e && s.timeZone && s.scrollToMinute !== void 0 ? s.dates.minutesOfDay(s.dates.wallDateAtMinutes(e.day, s.scrollToMinute)) : s.scrollToMinute) ?? n.min, C, "floor"), n.min, n.max - r);
		return {
			column: Y(o, 0, Math.max(0, t.length - 1)),
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
					let t = Y(y.end + e, y.start + C, i.max);
					f = {
						...y,
						end: t
					};
				} else {
					let t = Y(y.start + e, i.min, i.max - u);
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
				let e = Y(y.column + (n.key === c ? -1 : 1), 0, t.length - 1), r = s.dayBounds(t[e].day), a = Math.min(u, r.max - r.min), o = Y(r.min + y.start - i.min, r.min, r.max - a);
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
				let e = n.key === "PageUp" ? -60 : 60, t = Y(y.start + e, i.min, i.max - u);
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
var Pa = 22, Fa = 3, Ia = 18, La = 36;
function Ra(e) {
	let t = e.querySelector(".ui-cal-head")?.offsetHeight ?? 0;
	return (e.clientHeight - t) / 2;
}
function za(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return a ? a.endMinute <= n && a.startMinute < n ? "before" : a.startMinute >= r ? "after" : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	} : null;
}
function Ba({ days: e, events: t, availability: n, label: r }) {
	let i = ga(), { daySegment: a, formatLongDate: o, getFormatter: s, isAllDayLike: c, isSameDay: d, minutesOfDay: g, toDateKey: y } = i.dates, { bounds: b, resources: x, hourHeight: S } = i, C = S / 60, w = m(null), T = u(), [E, D] = h(!1), O = p(() => e.flatMap((e) => x.length ? x.map((t) => ({
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
	]), k = p(() => new Map(t.map((e) => [e.id, e])), [t]), A = p(() => new Map(n.map((e) => [e.id, e])), [n]), j = O.findIndex((e) => d(e.day, i.now)), M = Na({
		axis: "y",
		columns: O,
		pxPerMinute: C,
		scrollRef: w,
		events: k,
		blocks: A,
		initialColumn: Math.max(0, j)
	}), { drag: N, cursor: P } = M, F = i.editLayer === "availability", I = p(() => {
		let e = t.filter((e) => !c(e)), r = Ia / C;
		return O.map((t) => {
			let o = t.bounds ?? i.bounds, s = 0, c = 0, l = [];
			for (let n of e) {
				if (!ra(n.resourceId, t.resourceId, { emptyMatchesAll: !1 })) continue;
				let e = za(n, t.day, o.min, o.max, a);
				e === "before" ? s++ : e === "after" ? c++ : e && l.push(e);
			}
			let u = ea(l.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r), d = [];
			for (let e of n) {
				if (!ra(e.resourceId, t.resourceId, { emptyMatchesAll: !0 })) continue;
				let n = za(e, t.day, o.min, o.max, a);
				n && typeof n == "object" && d.push(n);
			}
			let f = F ? ea(d.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r) : null, p = [];
			return i.hasAvailability && i.shadeOutsideAvailability && (p = $i(o.min, o.max, d.map((e) => [e.start, e.end]))), {
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
				let o = a(n.start, n.end, r.day) !== null && ra(n.resourceId, r.resourceId, { emptyMatchesAll: !1 });
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
		let { lanes: n, count: r } = ta(e);
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
	]), R = E ? L.count : Math.min(L.count, Fa), z = L.runs.filter((e) => (L.lanes.get(e.id) ?? 0) >= R).length, B = m(C), ee = m(null);
	l(() => {
		let e = w.current;
		if (!e) return;
		let t = () => {
			ee.current = (e.scrollTop + Ra(e)) / B.current;
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, []), f(() => {
		let e = w.current;
		if (!e || B.current === C) return;
		B.current = C;
		let t = ee.current;
		t !== null && (e.scrollTop = Math.max(0, t * C - Ra(e)));
	}, [C]);
	let V = m(null), H = i.scrollToMinute, { dates: U, timeZone: W, now: G } = i, te = i.scrollAlign;
	l(() => {
		let t = w.current;
		if (!t || V.current === i.view) return;
		V.current = i.view;
		let n = e.find((e) => d(e, G)) ?? e[0], r = W ? U.minutesOfDay(U.wallDateAtMinutes(n, H ?? 480)) : H ?? 480, a = U.dayBounds(n, b), o = t.querySelector(".ui-cal-head"), s = () => {
			let e = te === "center" ? Ra(t) : 8;
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
			l || (V.current = null);
		};
	}, [
		i.view,
		H,
		te,
		b,
		C,
		e,
		d,
		U,
		W,
		G
	]);
	let ne = e.length > 1, re = x.length > 0, ie = !!i.timeZone && i.sharedTimeAxis, ae = p(() => ma(O.map((e) => ({
		day: e.day,
		bounds: e.bounds ?? i.bounds
	})), i.slotLabelInterval, {
		timeZone: i.timeZone,
		locale: i.locale,
		hour12: i.hour12
	}, i.bounds, ie), [
		O,
		i.slotLabelInterval,
		i.timeZone,
		i.locale,
		i.hour12,
		i.bounds,
		ie
	]), K = ae.reference, oe = ae.axes.map((e) => !!i.timeZone && (!ie || !e.matchesReference)), q = K ? s(i.locale, { timeZoneName: "short" }).formatToParts(i.dates.dateAtMinutes(K.day, K.bounds.min)).find((e) => e.type === "timeZoneName")?.value : void 0, se = oe.some(Boolean) ? Math.max(re ? i.resourceMinWidth : 0, 180) : re ? i.resourceMinWidth : 44, ce = Math.max(...O.map((e) => (e.bounds?.max ?? b.max) - (e.bounds?.min ?? b.min))) * C, le = {
		"--cal-hour": `${S}px`,
		"--cal-offset": `${-(b.min % 60 * C)}px`,
		height: ce
	}, ue = K?.bounds ?? b, de = [], fe = Math.max(5, i.slotLabelInterval);
	for (let e = Math.ceil(ue.min / fe) * fe; e < ue.max; e += fe) e > ue.min && de.push(e);
	let pe = s(i.locale, { weekday: "short" }), me = g(i.now), he = i.nowIndicator, ge = N?.draft, _e = ge && (ge.target === "selection" ? ge.resourceId : ge.resourceIds), ve = "";
	if (P) {
		let e = O[P.column];
		if (e) {
			let t = e.resourceId ? i.resourceById.get(e.resourceId) : void 0;
			ve = `${o(e.day, i.locale)}, ${i.timeZone ? Gi(i.dates.dateAtMinutes(e.day, P.start), i) : Ni(P.start)} to ${i.timeZone ? Gi(i.dates.dateAtMinutes(e.day, P.end), i) : Ni(P.end)}${t ? `, ${t.title}` : ""}`;
		}
	}
	return /* @__PURE__ */ _("div", {
		ref: w,
		"data-cal-drag": N?.draft.action,
		className: "ui-cal-scroll relative min-h-0 flex-1 overflow-auto",
		style: i.timeZone && !K ? { "--cal-gutter": "0px" } : void 0,
		children: /* @__PURE__ */ v("div", {
			className: "flex min-h-full flex-col",
			style: { minWidth: `calc(var(--cal-gutter) + ${O.length * se}px)` },
			children: [/* @__PURE__ */ v("div", {
				className: "ui-cal-head border-border border-b",
				children: [
					ne && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: q ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: q ? i.timeZone : void 0,
							"aria-label": q ? i.timeZone : void 0,
							children: q
						}), e.map((e) => /* @__PURE__ */ _(Va, {
							day: e,
							weekday: pe.format(e),
							isToday: d(e, i.now),
							grow: re ? x.length : 1,
							onOpen: () => i.openDay(e),
							bordered: re
						}, y(e)))]
					}),
					re && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: q && !ne ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: !ne && q ? i.timeZone : void 0,
							"aria-label": !ne && q ? i.timeZone : void 0,
							children: ne ? void 0 : q
						}), O.map((e, t) => /* @__PURE__ */ _(Ha, {
							resource: i.resourceById.get(e.resourceId ?? ""),
							sub: t % x.length !== 0
						}, e.key))]
					}),
					L.count > 0 && /* @__PURE__ */ v("div", {
						className: "border-border flex border-t",
						children: [/* @__PURE__ */ v("div", {
							className: "ui-cal-corner text-text-tertiary flex flex-col items-end justify-center gap-0.5 pr-2 text-2xs",
							children: [/* @__PURE__ */ _("span", { children: i.labels.allDay }), L.count > Fa && /* @__PURE__ */ _("button", {
								type: "button",
								className: "text-accent cursor-pointer hover:underline",
								"aria-expanded": E,
								onClick: () => D((e) => !e),
								children: E ? i.labels.showLess : i.labels.more(z)
							})]
						}), /* @__PURE__ */ _("div", {
							className: "relative flex-1",
							style: { height: R * Pa + 4 },
							children: L.runs.map((e) => {
								let t = L.lanes.get(e.id) ?? 0;
								if (t >= R) return null;
								let n = O[e.start], r = O[e.end - 1];
								return /* @__PURE__ */ _(wa, {
									event: e.event,
									compact: !0,
									continuesBefore: !!n && a(e.event.start, e.event.end, n.day)?.continuesBefore,
									continuesAfter: !!r && a(e.event.start, e.event.end, r.day)?.continuesAfter,
									style: {
										top: t * Pa + 2,
										height: Pa - 3,
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
					style: { height: ce },
					"aria-hidden": "true",
					children: [
						q && !ne && !re && /* @__PURE__ */ _("span", {
							className: "text-text-tertiary absolute top-0 right-2 text-2xs",
							"aria-hidden": "true",
							children: q
						}),
						K && de.map((e) => {
							let t = i.dates.parts(i.dates.dateAtMinutes(K.day, e));
							return /* @__PURE__ */ _("span", {
								className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
								style: { top: (e - K.bounds.min) * C },
								children: qi(t.hour * 60 + t.minute, i)
							}, e);
						}),
						!i.timeZone && de.map((e) => /* @__PURE__ */ _("span", {
							className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
							style: { top: (e - b.min) * C },
							children: qi(e, i)
						}, e))
					]
				}), /* @__PURE__ */ v("div", {
					role: "group",
					"aria-roledescription": "time grid",
					"aria-label": r,
					"aria-describedby": T,
					tabIndex: 0,
					className: "ui-cal-lines ui-cal-surface relative flex flex-1 select-none focus-visible:outline-none",
					style: le,
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
							children: ve
						}),
						O.map((e, t) => {
							let n = I[t], r = e.bounds ?? i.bounds, o = oe[t] ? 72 : 0, s = oe[t] ? ae.axes[t].minutes : [], c = d(e.day, i.now), l = re && t % x.length !== 0;
							return /* @__PURE__ */ v("div", {
								"data-cal-col": t,
								"data-today": c || void 0,
								"data-subcol": l || void 0,
								className: "ui-cal-col flex-1",
								style: {
									minWidth: se,
									height: (r.max - r.min) * C
								},
								children: [
									s.map((t) => /* @__PURE__ */ _("span", {
										className: "ui-cal-zone-label",
										style: { top: (t - r.min) * C },
										"aria-hidden": "true",
										children: Gi(i.dates.dateAtMinutes(e.day, t), i)
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
										return /* @__PURE__ */ _(Ea, {
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
										className: J("absolute inset-0", F && "ui-cal-muted-layer"),
										children: n.placed.map((e) => {
											let a = n.layout.get(e.item.id), o = Math.max((e.end - e.start) * C, Ia);
											return /* @__PURE__ */ _(wa, {
												event: e.item,
												compact: o < La,
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
									c && he && me >= r.min && me <= r.max && /* @__PURE__ */ _("div", {
										className: "ui-cal-now",
										"data-axis": "y",
										"data-dot": !l || void 0,
										style: { top: (me - r.min) * C }
									}),
									ge && ra(_e, e.resourceId, { emptyMatchesAll: !0 }) && (() => {
										let t = za(ge, e.day, r.min, r.max, a);
										return !t || typeof t != "object" ? null : /* @__PURE__ */ _(Da, {
											draft: ge,
											invalid: N?.invalid,
											style: {
												top: (t.start - r.min) * C + 1,
												height: Math.max((t.end - t.start) * C - 2, Ia),
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
function Va({ day: e, weekday: t, isToday: n, grow: r, bordered: i, onOpen: a }) {
	let o = ga();
	return /* @__PURE__ */ _("div", {
		className: J("flex min-w-0 items-center justify-center py-1.5", i && "border-border border-l"),
		style: { flex: `${r} 1 0` },
		children: /* @__PURE__ */ v("button", {
			type: "button",
			onClick: a,
			"aria-label": o.dates.formatLongDate(e, o.locale),
			"aria-current": n ? "date" : void 0,
			className: "hover:bg-bg-hover flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors duration-[100ms]",
			children: [/* @__PURE__ */ _("span", {
				className: J("text-2xs font-medium uppercase", n ? "text-accent" : "text-text-tertiary"),
				children: t
			}), /* @__PURE__ */ _("span", {
				className: J("flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold", n ? "bg-accent text-text-on-accent" : "text-text-primary"),
				children: o.dates.parts(e).day
			})]
		})
	});
}
function Ha({ resource: e, sub: t }) {
	let n = ga();
	return /* @__PURE__ */ v("div", {
		className: J("border-border flex min-w-0 flex-1 items-center gap-1.5 border-l px-2 py-1.5", t && "ui-cal-subhead"),
		style: { minWidth: n.resourceMinWidth },
		title: e?.title,
		children: [e?.color && /* @__PURE__ */ _("span", {
			className: J("ui-cal-dot", `ui-cal-c-${e.color}`),
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
var Ua = 34, Wa = 4, Ga = 28;
function Ka(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return !a || a.endMinute <= n || a.startMinute >= r ? null : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	};
}
function qa({ day: e, events: t, availability: n, label: r }) {
	let i = ga(), { daySegment: a, isSameDay: o, minutesOfDay: s } = i.dates, c = i.dayBounds(e), d = m(null), f = i.resources.length === 0 && t.length === 0 && n.length === 0, [g, y] = h(0);
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
	]), A = Na({
		axis: "x",
		columns: O,
		pxPerMinute: S,
		scrollRef: d,
		events: p(() => new Map(t.map((e) => [e.id, e])), [t]),
		blocks: p(() => new Map(n.map((e) => [e.id, e])), [n]),
		initialColumn: 0
	}), { drag: M, cursor: N } = A, P = i.editLayer === "availability", F = p(() => {
		let r = Ga / S;
		return O.map((o) => {
			let s = t.filter((e) => ra(e.resourceId, o.resourceId, { emptyMatchesAll: !1 })).map((t) => Ka(t, e, c.min, c.max, a)).filter((e) => e !== null), l = ta(s.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))), u = n.filter((e) => ra(e.resourceId, o.resourceId, { emptyMatchesAll: !0 })).map((t) => Ka(t, e, c.min, c.max, a)).filter((e) => e !== null), d = P ? ta(u.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))) : null, f = Math.max(1, l.count, d?.count ?? 0);
			return {
				placed: s,
				lanes: l,
				blocks: u,
				blockLanes: d,
				outside: i.hasAvailability && i.shadeOutsideAvailability ? $i(c.min, c.max, u.map((e) => [e.start, e.end])) : [],
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
	let ee = s(i.now), V = i.nowIndicator && o(e, i.now) && ee >= c.min && ee <= c.max, H = M?.draft, U = H && (H.target === "selection" ? H.resourceId : H.resourceIds), W = {
		"--cal-hour": `${x}px`,
		"--cal-offset": `${-(c.min % 60 * S)}px`
	}, G = "";
	if (N) {
		let t = O[N.column], n = t?.resourceId ? i.resourceById.get(t.resourceId) : void 0;
		G = `${n ? `${n.title}, ` : ""}${i.timeZone ? Gi(i.dates.dateAtMinutes(e, N.start), i) : Ni(N.start)} to ${i.timeZone ? Gi(i.dates.dateAtMinutes(e, N.end), i) : Ni(N.end)}`;
	}
	function te(e) {
		E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	if (f) return /* @__PURE__ */ _("div", {
		className: "text-text-tertiary flex flex-1 items-center justify-center p-6 text-xs",
		children: i.labels.noResources
	});
	let ne = 0;
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
						children: i.timeZone ? Gi(i.dates.dateAtMinutes(e, t), i) : qi(t, i)
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
						children: G
					}),
					D.map((t) => {
						let n = t.name !== void 0 && T.has(t.name);
						return /* @__PURE__ */ v("div", { children: [t.name !== void 0 && /* @__PURE__ */ _("div", {
							className: "bg-bg-secondary border-border flex border-b",
							children: /* @__PURE__ */ v("button", {
								type: "button",
								className: "ui-cal-group text-text-secondary hover:text-text-primary flex cursor-pointer items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase transition-colors duration-[100ms]",
								"aria-expanded": !n,
								onClick: () => te(t.name),
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
							let n = ne++, r = F[n], o = O[n];
							if (!r || !o) return null;
							let s = r.laneCount * Ua + Wa * 2;
							return /* @__PURE__ */ v("div", {
								className: "border-border flex border-b",
								children: [/* @__PURE__ */ v("div", {
									className: "ui-cal-row-head flex items-center gap-1.5 px-2",
									title: t.title,
									children: [t.color && /* @__PURE__ */ _("span", {
										className: J("ui-cal-dot", `ui-cal-c-${t.color}`),
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
										...W,
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
											return /* @__PURE__ */ _(Ea, {
												block: e.item,
												resizeEdge: "right",
												continuesAfter: e.continuesAfter,
												dragging: M?.itemId === e.item.id,
												style: {
													left: (e.start - c.min) * S,
													width: Math.max((e.end - e.start) * S, 4),
													top: t === void 0 ? 0 : Wa + t * Ua,
													height: t === void 0 ? "100%" : Ua - 3
												},
												onKeyDown: (t) => A.onItemKeyDown(t, "availability", e.item.id, n),
												onClick: (t) => {
													t.detail === 0 && i.clickBlock(e.item);
												}
											}, e.item.id);
										}),
										/* @__PURE__ */ _("div", {
											className: J("absolute inset-0", P && "ui-cal-muted-layer"),
											children: r.placed.map((e) => {
												let t = r.lanes.lanes.get(e.item.id) ?? 0;
												return /* @__PURE__ */ _(wa, {
													event: e.item,
													compact: !1,
													dense: !0,
													resizeEdge: "right",
													continuesBefore: e.continuesBefore,
													continuesAfter: e.continuesAfter,
													dragging: M?.itemId === e.item.id,
													style: {
														left: (e.start - c.min) * S + 1,
														width: Math.max((e.end - e.start) * S, Ga) - 2,
														top: Wa + t * Ua,
														height: Ua - 3,
														justifyContent: "center"
													},
													onKeyDown: (t) => A.onItemKeyDown(t, "event", e.item.id, n),
													onClick: (t) => {
														t.detail === 0 && i.clickEvent(e.item);
													}
												}, e.item.id);
											})
										}),
										V && /* @__PURE__ */ _("div", {
											className: "ui-cal-now",
											"data-axis": "x",
											style: { left: (ee - c.min) * S }
										}),
										H && ra(U, o.resourceId, { emptyMatchesAll: !0 }) && (() => {
											let t = Ka(H, e, c.min, c.max, a);
											return t ? /* @__PURE__ */ _(Da, {
												draft: H,
												invalid: M?.invalid,
												style: {
													left: (t.start - c.min) * S + 1,
													width: Math.max((t.end - t.start) * S - 2, Ga),
													top: Wa,
													bottom: Wa
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
var Ja = {
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
function Ya({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ _("div", {
		role: "radiogroup",
		"aria-label": a,
		className: J("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ _("button", {
			type: "button",
			role: "radio",
			"aria-checked": e.value === t,
			disabled: r,
			onClick: () => n(e.value),
			className: J("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", !r && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/Calendar.tsx
var Xa = [
	"day",
	"threeDay",
	"week",
	"month",
	"agenda"
];
function Za() {
	return /* @__PURE__ */ new Date();
}
function Qa(e) {
	let [t, n] = h(Za);
	return l(() => {
		if (e) return;
		let t = setInterval(() => n(Za()), 3e4);
		return () => clearInterval(t);
	}, [e]), e ?? t;
}
function $a(e) {
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
var eo = /* @__PURE__ */ new Set();
function to(e) {
	let t = !1;
	try {
		t = process.env.NODE_ENV !== "production";
	} catch {}
	!t || eo.has(e) || (eo.add(e), console.warn(`[Calendar] ${e}`));
}
function no(e, t, n) {
	try {
		return Mi(t);
	} catch {
		return to(`Invalid ${e} "${t}", expected HH:mm; using the default.`), n;
	}
}
function ro({ events: e = [], availability: t, resources: n = [], view: r, defaultView: i = "week", onViewChange: a, views: o = Xa, date: s, defaultDate: c, onDateChange: d, onRangeChange: g, weekStartsOn: y = 1, workWeekDays: b, agendaDays: x = 7, slotMinTime: S = "07:00", slotMaxTime: C = "20:00", slotDuration: w = 15, slotLabelInterval: T = 60, sharedTimeAxis: E = !1, hourHeight: D = 48, timelineHourWidth: O = 96, resourceMinWidth: k = 120, scrollToTime: M, scrollAlign: N = "start", now: P, nowIndicator: F = !0, editLayer: I = "events", readOnly: L = !1, selectable: R, clickCreateDuration: z = 30, shadeOutsideAvailability: B = !0, onCreate: V, onEventClick: H, onEventChange: U, onAvailabilityClick: W, onAvailabilityChange: G, validate: te, onInvalidChange: ne, onDateClick: re, renderEvent: ie, monthMaxEvents: ae, agendaShowAvailability: K = !0, display: oe, narrowView: q = "day", narrowWidth: se = 640, locale: ce = "en-GB", timeZone: le, hour12: ue = !1, labels: de, toolbar: fe = !0, toolbarActions: pe, loading: me = !1, className: he, "aria-label": ge }) {
	let _e = p(() => pa(le), [le]), { addDays: ve, formatLongDate: ye, formatRangeTitle: be, getVisibleDays: xe, minutesOfDay: Se, shiftDate: Ce } = _e, we = m(null), Te = u(), Ee = Qa(P), De = $a(we), [Oe, ke] = h(i), [Ae, je] = h(() => c ?? Za()), Me = r ?? Oe, Ne = s ?? Ae, Pe = (e) => {
		r === void 0 && ke(e), a?.(e);
	}, Fe = (e) => {
		s === void 0 && je(e), d?.(e);
	}, Ie = De !== null && De < se && q !== !1 && Ri(Me) && Me !== "day" && q ? q : Me, Le = p(() => ({
		...Ja,
		...de,
		views: {
			...Ja.views,
			...de?.views
		},
		status: {
			...Ja.status,
			...de?.status
		}
	}), [de]), Re = p(() => ({
		weekStartsOn: y,
		workWeekDays: b,
		agendaDays: x
	}), [
		y,
		b,
		x
	]), Y = Ne.getTime(), ze = p(() => xe(Ie, new Date(Y), Re), [
		Ie,
		Y,
		Re,
		xe
	]), Be = ze[0], Ve = ve(ze[ze.length - 1], 1), He = Be.getTime(), X = Ve.getTime(), Ue = m(g);
	f(() => {
		Ue.current = g;
	}), l(() => {
		Ue.current?.({
			start: new Date(He),
			end: new Date(X),
			view: Ie
		});
	}, [
		He,
		X,
		Ie
	]);
	let We = p(() => e.filter((e) => Xi(e.start.getTime(), Math.max(e.end.getTime(), e.start.getTime() + 1), He, X)), [
		e,
		He,
		X
	]), Ge = p(() => (t ?? []).filter((e) => Xi(e.start.getTime(), e.end.getTime(), He, X)), [
		t,
		He,
		X
	]), Ke = no("slotMinTime", S, 0), qe = no("slotMaxTime", C, 1440);
	qe <= Ke && to(`slotMaxTime "${C}" must be after slotMinTime "${S}"; showing the whole day.`);
	let Z = p(() => qe > Ke ? {
		min: Ke,
		max: qe
	} : {
		min: 0,
		max: 1440
	}, [Ke, qe]), Je = Math.max(1, Math.round(w)), Ye;
	if (M) Ye = no("scrollToTime", M, Z.min);
	else {
		let e = Ge.filter((e) => (e.kind ?? "available") === "available").map((e) => le ? _e.parts(e.start).hour * 60 + _e.parts(e.start).minute : Se(e.start)).filter((e) => e >= Z.min && e < Z.max);
		e.length && (Ye = Math.min(...e));
	}
	let Xe = p(() => new Map(n.map((e) => [e.id, e])), [n]), Ze = be(Ie, Ne, {
		...Re,
		locale: ce
	}), Qe = {
		locale: ce,
		hour12: ue,
		timeZone: le
	}, $e = (e) => Xe.get(na(e)[0] ?? ""), et = (e) => {
		let t = na(e).map((e) => Xe.get(e)?.title).filter(Boolean);
		return t.length ? `, ${t.join(", ")}` : "";
	}, tt = (e) => e.status && e.status !== "confirmed" ? Le.status[e.status] : void 0, nt = (e) => {
		let t = te?.(e);
		return typeof t == "string" && t ? t : void 0;
	}, rt = {
		view: Ie,
		dates: _e,
		timeZone: le,
		dayBounds: (e) => _e.dayBounds(e, Z),
		locale: ce,
		hour12: ue,
		weekStartsOn: y,
		now: Ee,
		nowIndicator: F,
		labels: Le,
		itemHelpId: Te,
		resources: n,
		resourceById: Xe,
		step: Je,
		bounds: Z,
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
		monthMaxEvents: ae,
		agendaShowAvailability: K,
		display: {
			time: oe?.time ?? !0,
			description: oe?.description ?? !0,
			status: oe?.status ?? !0,
			badge: oe?.badge ?? !0,
			blockLabels: oe?.blockLabels ?? !0,
			availableBlocks: oe?.availableBlocks ?? !0
		},
		scrollToMinute: Ye,
		scrollAlign: N,
		canEditEvent: (e) => !e.placeholder && !L && !!U && I === "events" && (e.editable ?? e.status !== "cancelled"),
		canEditBlock: (e) => !e.placeholder && !L && !!G && I === "availability" && e.editable !== !1,
		eventColor: (e) => e.color ?? $e(e.resourceId)?.color ?? "accent",
		blockColor: (e) => e.color ?? $e(e.resourceId)?.color ?? ((e.kind ?? "available") === "available" ? "green" : "gray"),
		statusLabel: tt,
		describeEvent: (e) => {
			let t = e.allDay ? `${ye(e.start, ce)}, ${Le.allDay}` : `${ye(e.start, ce)}, ${Ki(e.start, e.end, Qe)}`, n = tt(e);
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
			`${ye(e.start, ce)}, ${Ki(e.start, e.end, Qe)}`
		].filter(Boolean).join(", ").concat(et(e.resourceId)),
		renderEvent: ie,
		hasEventClick: !!H,
		hasBlockClick: !!W,
		clickEvent: (e) => H?.(e),
		clickBlock: (e) => W?.(e),
		check: nt,
		commit: (e, t) => {
			let n = nt(e);
			if (n) return ne?.(e, n), !1;
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
				delete n.target, e.target === "event" ? U?.(n) : G?.(n);
			}
			return !0;
		},
		openDay: (e) => {
			if (re) {
				re(e);
				return;
			}
			Fe(e), Ie !== "day" && Ie !== "timeline" && Pe("day");
		}
	}, it = o.map((e) => ({
		value: e,
		label: Le.views[e]
	})), Q = ge ?? Ze, at = JSON.stringify([
		le,
		ze.map((e) => e.getTime()),
		Z.min,
		Z.max,
		Je,
		n.map((e) => e.id)
	]), ot;
	return ot = Ie === "month" ? /* @__PURE__ */ _(Ca, {
		date: Ne,
		events: We,
		availability: Ge,
		label: Q
	}, le) : Ie === "agenda" ? /* @__PURE__ */ _(_a, {
		days: ze,
		events: We.filter((e) => !e.placeholder),
		availability: Ge.filter((e) => !e.placeholder),
		label: Q
	}, le) : Ie === "timeline" ? /* @__PURE__ */ _(qa, {
		day: ze[0],
		events: We,
		availability: Ge,
		label: Q
	}, at) : /* @__PURE__ */ _(Ba, {
		days: ze,
		events: We,
		availability: Ge,
		label: Q
	}, at), /* @__PURE__ */ _(ha.Provider, {
		value: rt,
		children: /* @__PURE__ */ v("div", {
			ref: we,
			"data-time-zone": le,
			"data-shared-axis": E && le && [
				"day",
				"threeDay",
				"workWeek",
				"week"
			].includes(Ie) ? !0 : void 0,
			role: "region",
			"aria-label": ge ?? Ze,
			"aria-busy": me || void 0,
			className: J("ui-cal relative flex h-full min-h-0 flex-col overflow-hidden", he),
			children: [
				/* @__PURE__ */ _("span", {
					id: Te,
					className: "sr-only",
					children: Le.itemHelp
				}),
				fe && /* @__PURE__ */ v("div", {
					className: "ui-cal-noprint border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2",
					children: [/* @__PURE__ */ v("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ _(nr, {
								size: "sm",
								onClick: () => Fe(Ee),
								children: Le.today
							}),
							/* @__PURE__ */ v("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ _(nr, {
									variant: "icon",
									size: "sm",
									icon: A,
									"aria-label": Le.previous,
									onClick: () => Fe(Ce(Ie, Ne, -1, Re))
								}), /* @__PURE__ */ _(nr, {
									variant: "icon",
									size: "sm",
									icon: j,
									"aria-label": Le.next,
									onClick: () => Fe(Ce(Ie, Ne, 1, Re))
								})]
							}),
							/* @__PURE__ */ _("h2", {
								className: "text-text-primary truncate text-sm font-semibold",
								"aria-live": "polite",
								children: Ze
							})
						]
					}), /* @__PURE__ */ v("div", {
						className: "flex items-center gap-1.5",
						children: [pe, o.length > 1 && (De === null || De >= o.length * 80 + 420 ? /* @__PURE__ */ _(Ya, {
							"aria-label": Le.view,
							options: it,
							value: Me,
							onChange: Pe
						}) : /* @__PURE__ */ _(hr, {
							className: "w-28",
							size: "sm",
							options: it,
							value: Me,
							onChange: (e) => Pe(e)
						}))]
					})]
				}),
				ot,
				me && /* @__PURE__ */ v("div", {
					className: "ui-cal-loading",
					role: "status",
					children: [/* @__PURE__ */ _(ee, { className: "text-accent h-6 w-6 animate-spin" }), /* @__PURE__ */ _("span", {
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
var io = [
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
], ao = [
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
], oo = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
];
function so(e, t, n) {
	let r = $(e, n), i = $(t, n);
	return r.year === i.year && r.month === i.month && r.day === i.day;
}
function co(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function lo(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function uo(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function fo({ year: e, month: t, timeZone: n, selected: r, rangeStart: i, rangeEnd: a, hoverDate: o, onSelect: s, onMonthChange: c, onHover: l, minDate: u, maxDate: d }) {
	let f = lo(e, t), p = uo(e, t), g = /* @__PURE__ */ new Date(), y = m(null), [b, x] = h(null);
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
						ao[t],
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
			children: [oo.map((e) => /* @__PURE__ */ _("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), D.map((c, f) => {
				if (c === null) return /* @__PURE__ */ _("div", { className: "h-8" }, `empty-${f}`);
				let p = _i({
					year: e,
					month: t + 1,
					day: c,
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0
				}, n), m = so(p, g, n), h = r ? so(p, r, n) : !1, v = i ? so(p, i, n) : !1, y = a ? so(p, a, n) : !1, b = co(p, i ?? null, a ?? o ?? null), x = u && p < u || d && p > d;
				return /* @__PURE__ */ _("button", {
					type: "button",
					"data-day": c,
					disabled: !!x,
					tabIndex: c === C ? 0 : -1,
					"aria-label": `${ao[t]} ${c}, ${e}`,
					"aria-current": m ? "date" : void 0,
					onClick: () => s(p),
					onKeyDown: (e) => w(e, c),
					onMouseEnter: () => l?.(p),
					onMouseLeave: () => l?.(null),
					className: J("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", x && "cursor-not-allowed opacity-30", !x && !h && !v && !y && !b && "hover:bg-bg-hover text-text-primary", m && !h && !v && !y && "text-accent font-semibold", (h || v || y) && "bg-accent text-text-on-accent font-semibold", b && !h && !v && !y && "bg-accent-muted text-accent"),
					children: c
				}, c);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function po({ children: e, className: t, header: n, footer: r, as: i = "div", flush: a = !1, bodyClassName: o, ...s }) {
	let c = Yn();
	return /* @__PURE__ */ v(i, {
		...s,
		className: J("bg-bg-secondary border-border overflow-hidden rounded-md border", t),
		children: [
			n && /* @__PURE__ */ _("div", {
				"data-control-size": c,
				className: "ui-bar border-border flex flex-col justify-center border-b px-3 py-2.5",
				children: n
			}),
			/* @__PURE__ */ _("div", {
				className: J(!a && "ui-surface-body p-3", o),
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
function mo(e, t) {
	let n = e.replace(/\D/g, "").slice(0, t);
	return Array.from({ length: t }, (e, t) => n[t] ?? "");
}
function ho(e, t, n) {
	if (!t || e.length <= t.length) return e;
	let r = e.length - t.length, i = n ?? e.length;
	return i - r >= 0 ? e.slice(i - r, i) : e.slice(-r);
}
function go(e, t, n) {
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
function _o(e, t, n, r) {
	if (n === "") {
		let n = [...e];
		return n[t] = "", {
			slots: n,
			focus: t
		};
	}
	return go(e, t, ho(n, e[t], r));
}
function vo(e, t) {
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
function yo({ value: e, onChange: t, onComplete: n, length: r = 6, error: i, invalid: a, disabled: o, autoFocus: s, name: c, "aria-label": l = "Verification code", className: d }) {
	let f = m([]), p = u(), g = a || !!i, [y, b] = h(() => mo(e, r)), [x, S] = h({
		value: e,
		length: r
	});
	(x.value !== e || x.length !== r) && (S({
		value: e,
		length: r
	}), (y.length !== r || y.join("") !== e) && b(mo(e, r)));
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
		t.key === "Backspace" ? (t.preventDefault(), w(vo(y, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), C(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), C(e + 1));
	}
	return /* @__PURE__ */ v("div", {
		className: J("flex flex-col gap-1.5", d),
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
					onChange: (e) => w(_o(y, t, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => T(t, e),
					onPaste: (e) => {
						e.preventDefault(), w(go(y, t, e.clipboardData.getData("text")));
					},
					className: J("bg-bg-secondary text-text-primary h-10 w-10 rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", g ? "border-red" : "border-border")
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
function bo({ options: e, value: t, onChange: n, onOptionChange: r, placeholder: i = "Select...", label: a, className: o, controlSize: s, id: c, name: l, disabled: d, "aria-label": f, "aria-describedby": p, "aria-invalid": g, query: y, onQueryChange: b, filterOptions: x = !0, selectedOption: S, renderOption: C, loading: w = !1, loadingMessage: T = "Loading results…", error: E, onRetry: O, emptyMessage: A = "No results", footer: j }) {
	let M = Yn(s), { open: N, show: P, close: F, rootRef: I, anchorRef: L, triggerRef: R, popupRef: z, labelId: B, triggerId: ee, popupId: V } = ir({
		haspopup: "listbox",
		matchWidth: !0,
		disabled: d
	}), [H, U] = h(""), [W, G] = h(0), [te, ne] = h(() => e.find((e) => e.value === t)), re = m(null), ie = u(), ae = c ?? `${ie}-search`, oe = `${ie}-selected`, q = y ?? H, se = e.find((e) => e.value === t) ?? (S?.value === t ? S : void 0) ?? (te?.value === t ? te : void 0), ce = x ? e.filter((e) => e.label.toLowerCase().includes(q.toLowerCase())) : e, le = Math.min(W, Math.max(ce.length - 1, 0)), ue = ce[le]?.disabled ? ce.findIndex((e) => !e.disabled) : le, de = ce[ue];
	function fe(e) {
		y === void 0 && U(e), b?.(e), G(0);
	}
	function pe(e) {
		e.disabled || (ne(e), n(e.value), r?.(e), F("select"));
	}
	function me(e) {
		if ([
			"ArrowDown",
			"ArrowUp",
			"Home",
			"End"
		].includes(e.key)) {
			e.preventDefault();
			let t = e.key === "ArrowUp" || e.key === "End" ? -1 : 1, n = e.key === "Home" ? 0 : e.key === "End" ? ce.length - 1 : ue + t;
			for (; n >= 0 && n < ce.length && ce[n].disabled;) n += t;
			n >= 0 && n < ce.length && G(n);
		} else e.key === "Enter" ? (e.preventDefault(), de && pe(de)) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), F("escape"));
	}
	function he() {
		P(), y === void 0 && U(""), G(0), setTimeout(() => re.current?.focus(), 0);
	}
	return /* @__PURE__ */ v("div", {
		className: J("flex flex-col gap-1.5", o),
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
						"aria-labelledby": a && !f ? `${B} ${oe}` : void 0,
						"aria-describedby": p,
						"aria-invalid": g,
						"aria-expanded": N,
						"aria-haspopup": "listbox",
						"aria-controls": N ? V : void 0,
						onClick: () => N ? F("toggle") : he(),
						onKeyDown: (e) => {
							(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), he());
						},
						className: J("ui-sized-control font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms] disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
						children: /* @__PURE__ */ _("span", {
							id: oe,
							children: se ? se.label : /* @__PURE__ */ _("span", {
								className: "text-text-disabled",
								children: t || i
							})
						})
					}),
					/* @__PURE__ */ _(k, {
						"aria-hidden": "true",
						className: J("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", N && "rotate-180")
					}),
					N && /* @__PURE__ */ v("div", {
						ref: z,
						className: J("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
						children: [
							/* @__PURE__ */ _("div", {
								className: "border-border border-b p-1.5",
								children: /* @__PURE__ */ v("div", {
									className: "relative",
									children: [/* @__PURE__ */ _(K, {
										"aria-hidden": "true",
										className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2"
									}), /* @__PURE__ */ _("input", {
										ref: re,
										"data-control-size": M,
										"data-has-icon": "true",
										id: ae,
										type: "text",
										role: "combobox",
										"aria-label": f ?? (a ? `Search ${a}` : "Search options"),
										"aria-expanded": "true",
										"aria-controls": V,
										"aria-activedescendant": de && !de.disabled ? `${V}-${ue}` : void 0,
										"aria-autocomplete": "list",
										"aria-describedby": p,
										"aria-invalid": g,
										value: q,
										onChange: (e) => fe(e.target.value),
										onKeyDown: me,
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
								id: V,
								className: "max-h-48 overflow-y-auto py-1",
								role: "listbox",
								"aria-label": a ?? f ?? "Options",
								"aria-busy": w,
								children: ce.map((e, n) => /* @__PURE__ */ v("li", {
									id: `${V}-${n}`,
									role: "option",
									"aria-selected": e.value === t,
									"aria-disabled": e.disabled || void 0,
									onClick: () => pe(e),
									onMouseEnter: () => {
										e.disabled || G(n);
									},
									className: J("font-control flex w-full items-center gap-2 px-3 py-1.5 text-xs", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : "cursor-pointer", !e.disabled && (n === ue ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover")),
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
function xo(e) {
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
async function So(e) {
	if (navigator.clipboard?.writeText) try {
		return await navigator.clipboard.writeText(e), !0;
	} catch {}
	return xo(e);
}
function Co({ value: e, label: t = "Copy", copiedLabel: n = "Copied", iconOnly: r = !1, onCopy: i, variant: a, ...o }) {
	let [s, c] = h(null), [u, d] = h(""), f = m(null), p = m(null);
	l(() => () => {
		p.current !== null && clearTimeout(p.current), f.current !== null && clearTimeout(f.current);
	}, []);
	async function y() {
		let t = !1;
		try {
			t = await So(typeof e == "function" ? e() : e);
		} catch {}
		p.current !== null && clearTimeout(p.current), c(t ? "copied" : "failed"), d(""), f.current !== null && clearTimeout(f.current), f.current = setTimeout(() => {
			d(t ? n : "Copy failed"), f.current = null;
		}, 50), p.current = setTimeout(() => {
			c(null), d(""), p.current = null;
		}, 2e3), i?.(t);
	}
	let b = s === "copied" ? n : s === "failed" ? "Copy failed" : t;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _(nr, {
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
function wo({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: J("border-border mt-8 border-t pt-6", r),
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
function To(e, t) {
	let { year: n, month: r, day: i } = $(e, t);
	return `${io[r - 1]} ${i}, ${n}`;
}
function Eo({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date...", format: o }) {
	let s = Yn(e), { open: c, show: l, close: u, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: g, popupId: y, triggerAria: b } = ir({
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
					className: J("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? o ? o(r) : To(r, n) : /* @__PURE__ */ _("span", {
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
					className: J("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: /* @__PURE__ */ _(fo, {
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
function Do(e) {
	return `${io[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function Oo(e) {
	return e.start && e.end ? `${Do(e.start)} – ${Do(e.end)}` : e.start ? Do(e.start) : "";
}
function ko({ controlSize: e, label: t, value: n, onChange: r, placeholder: i = "Select date range..." }) {
	let a = Yn(e), { open: o, show: s, close: c, rootRef: l, anchorRef: u, triggerRef: d, popupRef: f, labelId: p, popupId: m, triggerAria: g } = ir({
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
	let z = n.start || n.end ? Oo(n) : "";
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
					className: J("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
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
					className: J("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
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
						children: [/* @__PURE__ */ _(fo, {
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
						}), /* @__PURE__ */ _(fo, {
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
function Ao(e) {
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
function jo(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function Mo(e, t) {
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
	let n = io[e.getMonth()], r = e.getDate(), i = e.getFullYear(), { hour12: a, period: o } = Ao(e.getHours());
	return `${n} ${r}, ${i} ${a}:${String(e.getMinutes()).padStart(2, "0")} ${o}`;
}
function No(e) {
	return String(e).padStart(2, "0");
}
function Po(e) {
	return /* @__PURE__ */ _(Fo, { ...e }, e.timeZone ?? "browser-local");
}
function Fo({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date & time..." }) {
	let o = Yn(e), { open: s, show: c, close: l, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: g, popupId: y, triggerAria: b } = ir({
		haspopup: "dialog",
		labelled: !!t
	}), [x, S] = h(null), [C, w] = h(!1), [T, D] = h("reject"), O = u(), k = $(r ?? /* @__PURE__ */ new Date(), n), A = r ? Ao($(r, n).hour) : {
		hour12: 12,
		period: "PM"
	}, [j, M] = h(k.year), [N, P] = h(k.month - 1), [F, I] = h(String(A.hour12)), [L, R] = h(r ? No($(r, n).minute) : "00"), [z, B] = h(A.period), [ee, V] = h(r);
	function H(e) {
		V(e);
	}
	function U(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		I(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (I(String(n - 12)), B("PM")) : n === 0 && (I("12"), B("AM"));
	}
	function W() {
		if (!ee) return;
		let e = Y(parseInt(F, 10) || 12, 1, 12), t = Y(parseInt(L, 10) || 0, 0, 59), a = jo(e, z), o = {
			...$(ee, n),
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
			].every((e) => s[e] === o[e]) ? new Date(r) : _i(o, n, T);
			let e = $(c, n);
			if (e.hour !== a || e.minute !== t || e.day !== o.day) throw RangeError("This time does not exist in the selected timezone");
		} catch (e) {
			let t = e instanceof Error ? e.message : "Invalid date and time";
			S(t), w(t.includes("twice"));
			return;
		}
		S(null), i(c), l("select");
	}
	function G() {
		if (s) {
			l("toggle");
			return;
		}
		if (r) {
			M($(r, n).year), P($(r, n).month - 1), V(r);
			let e = Ao($(r, n).hour);
			I(String(e.hour12)), B(e.period), R(No($(r, n).minute));
		}
		S(null);
		let e = !1;
		if (r && n) try {
			_i($(r, n), n, "reject");
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
					onClick: G,
					"data-control-size": o,
					className: J("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? Mo(r, n) : /* @__PURE__ */ _("span", {
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
					className: J("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [
						/* @__PURE__ */ _(fo, {
							timeZone: n,
							year: j,
							month: N,
							selected: ee,
							onSelect: H,
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
											onChange: (e) => U(e.target.value),
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
										className: J("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "AM"
									}), /* @__PURE__ */ _("button", {
										type: "button",
										onClick: () => B("PM"),
										"aria-pressed": z === "PM",
										className: J("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "PM"
									})]
								}),
								/* @__PURE__ */ _("button", {
									type: "button",
									onClick: W,
									disabled: !ee,
									className: J("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", ee ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
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
function Io(e, t, n, r = "right") {
	if (e === "Home") return null;
	if (e === "End") return Infinity;
	if (!(e !== "ArrowLeft" && e !== "ArrowRight")) return t + (e === "ArrowLeft" == (r === "right") ? n : -n);
}
//#endregion
//#region src/components/ui/DetailPanel.tsx
function Lo({ open: e, onClose: t, title: n, children: r, className: i, headerActions: a, sticky: o = !1, resizable: s = !0, defaultWidth: c = 360, minWidth: d = 260, maxWidth: p = 700, fraction: y, defaultFraction: b, minFraction: x, maxFraction: S, onFractionChange: C, collapsed: w = !1, onCollapsedChange: T, railIndicator: E, overlay: D = !1, autoFocus: O = !0 }) {
	let k = m(null), A = m(null), j = m(null), M = m(null), N = m(null), P = m(!1), F = m(w), I = u(), L = u(), R = u(), [z, B] = h(c), [ee, V] = h(b ?? .5), [H, U] = h(!1), W = m(null), G = y !== void 0 || b !== void 0 || x !== void 0 || S !== void 0 || C !== void 0, te = G ? Math.max(0, Math.min(1, x ?? .3)) : d, ne = G ? Math.max(te, Math.min(1, S ?? .7)) : Math.max(te, p), re = (e) => Math.max(te, Math.min(ne, e)), K = G ? re(y ?? ee) : z, oe = G ? b ?? .5 : c, q = G ? `${K * 100}%` : z, se = At(e && !w, () => t(), k), ce = m(!1);
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
		e && !ce.current && O && !t?.contains(n ?? null) && !n?.closest("[role=\"dialog\"][aria-modal=\"true\"], dialog[open]") && A.current?.focus(), ce.current = e;
	}, [e, O]), f(() => {
		if (!e || w || !G) return;
		let t = k.current?.parentElement, n = j.current;
		if (!t || !n) return;
		let r = (e) => {
			n.style.width = `${e * K}px`;
		};
		r(t.getBoundingClientRect().width);
		let i = new ResizeObserver(([e]) => {
			r(e.contentRect.width);
		});
		return i.observe(t), () => i.disconnect();
	}, [
		e,
		w,
		G,
		K
	]), l(() => {
		let e = k.current?.ownerDocument, t = () => {
			W.current = null, U(!1);
		};
		return e?.addEventListener("pointerup", t), e?.addEventListener("pointercancel", t), () => {
			e?.removeEventListener("pointerup", t), e?.removeEventListener("pointercancel", t);
		};
	}, []);
	function le(e) {
		let t = re(e);
		G ? (y === void 0 && V(t), C?.(t)) : B(t);
	}
	function de() {
		W.current = null, U(!1);
	}
	return /* @__PURE__ */ _("section", {
		ref: k,
		id: R,
		role: "region",
		"aria-labelledby": e ? L : void 0,
		"aria-hidden": !e || void 0,
		className: J("border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l", !(H && e && !w) && "transition-[width] duration-[200ms] ease-out", i),
		style: {
			width: e ? w ? "3rem" : q : 0,
			position: D ? "absolute" : o ? "sticky" : void 0,
			top: D ? 0 : o ? "var(--detail-panel-top, 0px)" : void 0,
			right: D ? 0 : void 0,
			bottom: D ? 0 : void 0,
			height: o && !D ? "calc(100vh - var(--detail-panel-top, 0px))" : void 0,
			alignSelf: o && !D ? "flex-start" : void 0,
			zIndex: D ? 10 : void 0
		},
		children: e && /* @__PURE__ */ _(kt.Provider, {
			value: se,
			children: /* @__PURE__ */ v("div", {
				ref: j,
				className: "animate-fade-in flex h-full flex-col",
				style: { width: w ? "3rem" : G ? void 0 : z },
				children: [
					s && !w && /* @__PURE__ */ _("div", {
						role: "separator",
						tabIndex: 0,
						"aria-orientation": "vertical",
						"aria-label": "Resize panel",
						"aria-controls": R,
						"aria-valuenow": Math.round(K * (G ? 100 : 1)),
						"aria-valuemin": Math.round(te * (G ? 100 : 1)),
						"aria-valuemax": Math.round(ne * (G ? 100 : 1)),
						"aria-valuetext": `${Math.round(K * (G ? 100 : 1))}${G ? "%" : "px"}`,
						className: "hover:bg-accent/30 active:bg-accent/40 focus-visible:outline-accent absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0",
						style: { touchAction: "none" },
						onPointerDown: (e) => {
							e.button === 0 && (e.preventDefault(), e.currentTarget.focus(), e.currentTarget.setPointerCapture(e.pointerId), W.current = {
								x: e.clientX,
								width: K,
								pointerId: e.pointerId,
								parentWidth: k.current?.parentElement?.getBoundingClientRect().width ?? 0
							}, U(!0));
						},
						onPointerMove: (e) => {
							let t = W.current;
							!t || t.pointerId !== e.pointerId || G && !t.parentWidth || le(t.width + (t.x - e.clientX) / (G ? t.parentWidth : 1));
						},
						onPointerUp: de,
						onPointerCancel: de,
						onLostPointerCapture: de,
						onDoubleClick: () => le(oe),
						onKeyDown: (e) => {
							let t = Io(e.key, K, G ? .02 : 16);
							t !== void 0 && (e.preventDefault(), le(t ?? oe));
						}
					}),
					/* @__PURE__ */ v("div", {
						className: J("border-border flex shrink-0 items-center justify-between border-b px-3", w ? "flex-col gap-2 py-3" : "h-10"),
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
									children: /* @__PURE__ */ _(ue, { className: "h-3.5 w-3.5" })
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
function Ro(e, t) {
	let n = /^\s*(\d*\.?\d+)(px|rem)\s*$/.exec(e);
	if (!n) return 8;
	let r = Number(n[1]), i = n[2] === "rem" ? r * t : r;
	return Number.isFinite(i) && i >= 0 ? i * 2 : 8;
}
function zo(e, t, [n, r], [i, a], [o, s], c) {
	let [l, u] = r - n <= s - o - c * 2 ? [n, r] : [i, a], d = t + (o + c - l), f = t + (s - c - u);
	return f < d && (f = d), d = Math.min(d, 0), f = Math.max(f, 0), Y(e, d, f);
}
function Bo(e, t, n, r, i, a) {
	return {
		x: zo(e.x, t.x, [n.left, n.right], [r.left, r.right], [i.left, i.right], a),
		y: zo(e.y, t.y, [n.top, n.bottom], [r.top, r.bottom], [i.top, i.bottom], a)
	};
}
function Vo({ x: e, y: t }) {
	return e === 0 && t === 0 ? "" : `${e}px ${t}px`;
}
var Ho = 10, Uo = 50;
function Wo(e, t) {
	let n = t ? Uo : Ho;
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
var Go = 10, Ko = 50;
function qo({ left: e, top: t }, n, r, i, a) {
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
function Jo(e, { min: t, max: n }) {
	let r = (e, t, n) => Math.round(Y(e, t, n));
	return {
		width: r(e.width, t.width, n.width),
		height: r(e.height, t.height, n.height)
	};
}
function Yo(e, t) {
	let n = t ? Ko : Go;
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
var Xo = {
	sm: "max-w-[400px]",
	md: "max-w-[576px]",
	lg: "max-w-[768px]",
	xl: "max-w-[1024px]"
}, Zo = "(min-width: 48rem)", Qo = "a[href], button, input, select, textarea, label, summary, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [tabindex]:not([tabindex=\"-1\"])", $o = {
	x: 0,
	y: 0
};
function es(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top,
		right: t.left + e.clientWidth,
		bottom: t.top + e.clientHeight
	};
}
var ts = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function ns(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function rs(e, t) {
	let n = t.getBoundingClientRect();
	return {
		left: n.left + e.offsetLeft - t.scrollLeft,
		top: n.top + e.offsetTop - t.scrollTop,
		width: e.offsetWidth,
		height: e.offsetHeight
	};
}
function is(e, t) {
	if (!(e instanceof HTMLElement) || !e.isConnected) return null;
	let n = e.ownerDocument;
	return e === n.body || e === n.documentElement || t.contains(e) ? null : e.getClientRects().length > 0 ? e : null;
}
function as(e) {
	return e.ownerDocument.defaultView?.matchMedia(Zo).matches ?? !1;
}
function os(e) {
	let t = e.ownerDocument.defaultView;
	return t ? Ro(t.getComputedStyle(e).getPropertyValue("--spacing"), parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize)) : 8;
}
function ss(e, t, n) {
	e.style.width = n ? `${n.width}px` : "", e.style.height = n ? `${n.height}px` : "", e.style.maxWidth = n ? "none" : "", t && (t.style.flex = n ? "1 1 0%" : "", t.style.minHeight = n ? "0" : "", t.style.overflowY = n ? "auto" : "");
}
function cs(e, t) {
	return {
		width: 280,
		height: e.offsetHeight - (t?.offsetHeight ?? 0) + 48
	};
}
function ls({ open: e, draggable: t, resizable: n, remember: r, placement: i, anchorRef: a }, o, s, c) {
	let l = m($o), u = m($o), d = m(8), p = m(null), h = m(null), g = m(null), _ = m(!1), v = m(null), y = e && t, b = e && n, x = r && (t || n);
	f(() => {
		let t = o.current, r = y ? s.current : null, f = c.current, m = t?.parentElement, S = t?.ownerDocument.defaultView, C = i !== "center";
		if (x || (g.current = null), (!e && !x || !n) && (v.current = null), !e || !t || !m || !S || !r && !C && !b) return;
		let w = C ? is(t.ownerDocument.activeElement, t) : null, T = () => C ? is(a?.current, t) ?? is(w, t) : null, E = () => ns(u.current, l.current), D = () => {
			t.style.translate = Vo(E());
		}, O = () => {
			let e = rs(t, m);
			if (_.current && g.current) {
				u.current = {
					x: g.current.left - e.left,
					y: g.current.top - e.top
				}, l.current = $o, t.dataset.placement = "remembered", t.style.transformOrigin = "";
				return;
			}
			let n = as(t) ? T() : null, r = C && n ? sn(i, n.getBoundingClientRect(), {
				size: {
					width: e.width,
					height: e.height
				},
				bounds: es(m),
				margin: d.current,
				gap: d.current
			}) : null;
			u.current = r ? {
				x: r.left - e.left,
				y: r.top - e.top
			} : $o, t.dataset.placement = r?.side ?? "center", t.style.transformOrigin = r ? ts[r.side] : "";
		}, k = () => {
			let e = l.current;
			if (!r && !_.current || !_.current && e.x === 0 && e.y === 0) return;
			let n = E(), i = Bo(n, n, t.getBoundingClientRect(), (r ?? s.current ?? t).getBoundingClientRect(), es(m), d.current);
			if (l.current = {
				x: i.x - u.current.x,
				y: i.y - u.current.y
			}, D(), _.current) {
				let e = rs(t, m);
				g.current = {
					left: e.left + i.x,
					top: e.top + i.y
				};
			}
		}, A = () => {
			d.current = os(t), as(t) || (p.current = null, h.current = null, l.current = $o, _.current = !1, g.current = null, v.current && ss(t, f, null), v.current = null);
			let e = v.current;
			if (e && !h.current) {
				let n = es(m), r = d.current, i = _.current && g.current ? g.current : {
					left: n.left + r,
					top: n.top + r
				}, a = Jo(e, qo(i, e, cs(t, f), n, r)), o = Math.max(n.left + r, Math.min(i.left, n.right - r - a.width)), s = Math.max(n.top + r, Math.min(i.top, n.bottom - r - a.height));
				(a.width !== e.width || a.height !== e.height) && (v.current = a, ss(t, f, a)), _.current && (o !== i.left || s !== i.top) && (g.current = {
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
		return _.current = x && g.current !== null, b && v.current && ss(t, f, v.current), A(), S.addEventListener("resize", M), S.addEventListener("scroll", M, {
			capture: !0,
			passive: !0
		}), t.addEventListener("animationend", N), P?.observe(t), () => {
			S.cancelAnimationFrame(j), S.removeEventListener("resize", M), S.removeEventListener("scroll", M, { capture: !0 }), t.removeEventListener("animationend", N), P?.disconnect(), p.current = null, h.current = null, u.current = $o, l.current = $o, _.current = !1, t.style.translate = "", t.style.transformOrigin = "", b && (t.style.userSelect = "", ss(t, f, null)), delete t.dataset.placement;
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
		let n = ns(u.current, l.current), r = rs(e, t);
		g.current = {
			left: r.left + n.x,
			top: r.top + n.y
		}, u.current = n, l.current = $o, _.current = !0, e.dataset.placement = "remembered", e.style.transformOrigin = "";
	}, C = (e) => s.current ?? e, w = (e) => {
		let t = o.current, n = e.currentTarget, r = t?.parentElement;
		if (!t || !r || e.button !== 0 || !e.isPrimary || h.current) return;
		let i = e.target.closest(Qo);
		i && i !== n && n.contains(i) || !as(t) || (e.preventDefault(), n.setPointerCapture(e.pointerId), n.style.cursor = "grabbing", p.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			origin: ns(u.current, l.current),
			dialog: t.getBoundingClientRect(),
			handle: C(n).getBoundingClientRect(),
			bounds: es(r),
			margin: d.current,
			moved: !1
		});
	}, T = (e) => {
		let t = p.current, n = o.current;
		if (!t || t.pointerId !== e.pointerId || !n) return;
		let r = Bo({
			x: t.origin.x + e.clientX - t.startX,
			y: t.origin.y + e.clientY - t.startY
		}, t.origin, t.dialog, t.handle, t.bounds, t.margin);
		t.moved ||= r.x !== t.origin.x || r.y !== t.origin.y, l.current = {
			x: r.x - u.current.x,
			y: r.y - u.current.y
		}, n.style.translate = Vo(r);
	}, E = (e) => {
		let t = p.current, n = e.currentTarget;
		if ((!t || t.pointerId === e.pointerId) && n.style.cursor === "grabbing" && (n.style.cursor = ""), t?.pointerId !== e.pointerId) return;
		p.current = null;
		let r = o.current, i = r?.parentElement;
		!(x || _.current) || !t.moved || !r || !i || S(r, i);
	}, D = (e) => {
		let t = Wo(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
		if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || h.current || !as(n)) return;
		e.preventDefault();
		let i = ns(u.current, l.current), a = Bo({
			x: i.x + t.x,
			y: i.y + t.y
		}, i, n.getBoundingClientRect(), C(e.currentTarget).getBoundingClientRect(), es(r), d.current);
		a.x === i.x && a.y === i.y || (l.current = {
			x: a.x - u.current.x,
			y: a.y - u.current.y
		}, n.style.translate = Vo(a), (x || _.current) && S(n, r));
	}, O = (e, t, n) => {
		(!_.current || !g.current) && S(e, t);
		let r = g.current;
		if (!r) return;
		v.current = n, ss(e, c.current, n);
		let i = rs(e, t);
		u.current = {
			x: r.left - i.left,
			y: r.top - i.top
		}, l.current = $o, e.style.translate = Vo(u.current);
	}, k = (e, t) => {
		let n = rs(e, t), r = ns(u.current, l.current), i = {
			width: n.width,
			height: n.height
		};
		return {
			current: i,
			limits: qo({
				left: n.left + r.x,
				top: n.top + r.y
			}, i, cs(e, c.current), es(t), d.current)
		};
	}, A = (e) => {
		let t = o.current, n = t?.parentElement;
		if (!t || !n || e.button !== 0 || !e.isPrimary || p.current || !as(t)) return;
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
		let i = Jo({
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
				let t = Yo(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
				if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || h.current || !as(n)) return;
				e.preventDefault();
				let { current: i, limits: a } = k(n, r), s = Jo({
					width: i.width + t.width,
					height: i.height + t.height
				}, a);
				s.width === i.width && s.height === i.height || O(n, r, s);
			}
		} : void 0
	};
}
function us({ open: e, onClose: t, title: n, children: r, footer: i, className: a, size: o = "sm", draggable: s = !1, resizable: c = !1, rememberPosition: l = !1, placement: d = "center", anchorRef: f, role: p = "dialog", description: h, "aria-label": g, "aria-describedby": y, initialFocusRef: b, returnFocusRef: x, busy: S = !1, closeOnEscape: C = !0, closeOnOverlayClick: w = !0, hideCloseButton: T = !1 }) {
	let E = Yn(), D = m(null), [O, k] = Bt(D), A = m(null), j = m(null), M = u(), N = u();
	xt(D, e, {
		initialFocusRef: b,
		returnFocusRef: x
	});
	let { drag: P, resize: F } = ls({
		open: e,
		draggable: s,
		resizable: c,
		remember: l,
		placement: d,
		anchorRef: f
	}, D, A, j), I = At(e, (e) => {
		!C || S || (e.preventDefault(), t());
	});
	if (jt(e), !e) return null;
	let z = P && /* @__PURE__ */ _("button", {
		type: "button",
		"aria-label": "Move dialog",
		title: "Move dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-grip": "",
		className: "text-text-tertiary hover:text-text-secondary hover:bg-bg-hover focus-visible:outline-accent order-first hidden h-5 w-5 shrink-0 cursor-grab items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 md:flex md:touch-none md:select-none",
		...P.pointer,
		onKeyDown: P.onKeyDown,
		children: /* @__PURE__ */ _(L, {
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
		children: /* @__PURE__ */ _(R, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		})
	});
	return pe(/* @__PURE__ */ _(kt.Provider, {
		value: I,
		children: /* @__PURE__ */ _(Rt.Provider, {
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
					className: J(`relative z-50 mx-1 mb-8 flex w-full ${Xo[o]} flex-col`, "bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
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
							className: J("ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5", s && "md:cursor-move md:touch-none md:select-none"),
							...P?.pointer,
							children: [n && /* @__PURE__ */ _("h3", {
								id: M,
								className: "text-text-primary min-w-0 text-sm font-medium",
								children: n
							}), !T && /* @__PURE__ */ _(nr, {
								type: "button",
								variant: "icon",
								size: "sm",
								"aria-disabled": S || void 0,
								onClick: () => {
									S || t();
								},
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ _(ue, { className: "h-4 w-4" })
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
							className: J("ui-bar border-border bg-bg-primary/50 flex shrink-0 rounded-b-lg border-t px-3 py-2.5", B && "md:pr-6", z ? "items-center gap-2" : "flex-col justify-center"),
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
function ds({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a, busy: o = !1, busyLabel: s = "Working…", cancelRef: c, confirmRef: l, confirmDisabled: u = !1 }) {
	return /* @__PURE__ */ v("div", {
		className: J("flex justify-end gap-2", a),
		"aria-busy": o || void 0,
		children: [/* @__PURE__ */ _(nr, {
			ref: c,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-disabled": o || void 0,
			onClick: () => {
				o || e();
			},
			children: n
		}), /* @__PURE__ */ _(nr, {
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
function fs({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: J("my-6 flex items-center gap-3", t),
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
var ps = (e) => !e.divider;
function ms(e) {
	return e.checked === void 0 ? "menuitem" : e.type === "radio" ? "menuitemradio" : "menuitemcheckbox";
}
function hs({ trigger: e, items: r, header: i, renderLink: a, align: c = "right" }) {
	let [d, f] = h(!1), p = i != null && i !== !1, y = zt(), [b, x] = h(0), [S, C] = h(""), [w, T] = h(-1), E = m(null), O = m(null), k = m(null), A = m(null), j = m([]), M = m(!1), N = u(), P = `${N}menu`, F = `${N}header`, I = o(e) && e.type !== t ? e : null, L = I?.props.id, R = typeof L == "string" && L ? L : `${N}trigger`, z = [];
	r.forEach((e) => {
		ps(e) && z.push({
			item: e,
			index: z.length
		});
	});
	let B = z.filter(({ item: e }) => !e.disabled), ee = () => {
		let e = E.current;
		return e ? I ? [...e.querySelectorAll("[id]")].find((e) => e.id === R) ?? e.querySelector("button, a[href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])") ?? e.firstElementChild ?? e : e : null;
	}, V = s((e) => {
		f(!1), T(-1), (e === "escape" || e === "select" || e === "tab") && O.current?.focus();
	}, []);
	_n(d, V, [A], [E]), hn(d, O, A, {
		side: "bottom",
		align: c === "left" ? "start" : "end",
		gap: 4,
		onAnchorHidden: V
	}), l(() => {
		d && (w >= 0 ? j.current[w] : k.current)?.focus();
	}, [
		d,
		w,
		p
	]);
	function H(e) {
		let t = ee();
		O.current = t, C(t?.id ?? ""), x(t?.getBoundingClientRect().width ?? 0), f(!0), T((e === "first" ? B[0] : e === "last" ? B.at(-1) : null)?.index ?? -1);
	}
	function U(e) {
		if (!(M.current && (M.current = !1, e.detail === 0))) {
			if (d) {
				V();
				return;
			}
			H(e.detail === 0 ? "first" : "menu");
		}
	}
	function W(e) {
		M.current = !1, e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), H(e.key === "ArrowDown" ? "first" : "last")) : !I && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), d ? V("select") : H("first"));
	}
	function G(e) {
		!e || e.item.disabled || (V("select"), e.item.onClick?.());
	}
	function te(e, t) {
		let n = z.length, r = e === -1 && t === -1 ? n : e;
		for (let e = 1; e <= n; e++) {
			let i = z[(r + t * e + n * 2) % n];
			if (!i.item.disabled) return i.index;
		}
		return -1;
	}
	function ne(e) {
		let t = ur(z.map((e) => e.item.label), (e) => !!z[e].item.disabled, w, e);
		return t === -1 ? w : z[t].index;
	}
	function re(e) {
		let { key: t } = e, n = null;
		if (t === "ArrowDown") n = te(w, 1);
		else if (t === "ArrowUp") n = te(w, -1);
		else if (t === "Home") n = B[0]?.index ?? -1;
		else if (t === "End") n = B.at(-1)?.index ?? -1;
		else if (t === "Enter" || t === " ") {
			let n = j.current.indexOf(e.target), r = n === -1 ? void 0 : z[n];
			if (!r || r.item.disabled) {
				e.preventDefault();
				return;
			}
			if (r.item.href !== void 0 && t === "Enter") return;
			e.preventDefault(), t === " " && (M.current = !0), r.item.href === void 0 ? G(r) : j.current[n]?.click();
			return;
		} else if (t === "Tab") {
			V("tab");
			return;
		} else t !== " " && sr(e) && (n = ne(t));
		n !== null && (e.preventDefault(), T(n));
	}
	let ie = {
		"aria-haspopup": "menu",
		"aria-expanded": d,
		"aria-controls": d ? P : void 0
	}, ae = -1, K = d ? /* @__PURE__ */ _("div", {
		ref: (e) => {
			k.current = e, p || (A.current = e);
		},
		id: P,
		role: "menu",
		"aria-labelledby": S || R,
		"aria-describedby": p ? F : void 0,
		tabIndex: -1,
		onKeyDown: re,
		onFocus: (e) => e.stopPropagation(),
		onBlur: (e) => e.stopPropagation(),
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none",
		style: { minWidth: b },
		children: r.map((e, n) => {
			if (e.divider) return /* @__PURE__ */ _("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${n}`);
			ae++;
			let r = z[ae], i = e.checked !== void 0, o = /* @__PURE__ */ v("button", {
				type: "button",
				ref: (e) => {
					j.current[r.index] = e;
				},
				role: ms(e),
				"aria-checked": i ? e.checked : void 0,
				"aria-disabled": e.disabled || void 0,
				tabIndex: r.index === w ? 0 : -1,
				onClick: () => G(r),
				onMouseDown: e.disabled ? (e) => e.preventDefault() : void 0,
				onFocus: () => T(r.index),
				onMouseMove: () => {
					!e.disabled && r.index !== w && T(r.index);
				},
				className: J("flex h-7 w-full items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.disabled ? "text-text-secondary cursor-not-allowed opacity-50" : e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted cursor-pointer" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover cursor-pointer"),
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
					t.defaultPrevented || t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || G(r);
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
		onClick: U,
		onKeyDown: W,
		...I ? {} : {
			...ie,
			id: R,
			role: "button",
			tabIndex: 0
		},
		children: I ? n(I, {
			...ie,
			id: R
		}) : e
	}), K && pe(p ? /* @__PURE__ */ v("div", {
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
		}), n(K, {
			className: "focus:outline-none",
			style: void 0
		})]
	}) : K, y ?? document.body)] });
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function gs({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ v("div", {
		className: J("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ _("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ _(z, { className: "h-5 w-5" })
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
var _s = class extends e {
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
				/* @__PURE__ */ _(nr, {
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
function vs({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ _(hs, {
		align: r,
		trigger: /* @__PURE__ */ _(Nr, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function ys({ children: e, className: t }) {
	return /* @__PURE__ */ _("kbd", {
		className: J("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var bs = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function xs({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ _("div", {
		className: J("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ _(ee, { className: J("text-accent animate-spin", bs[t]) })
	});
}
//#endregion
//#region src/components/ui/MessageBubble.tsx
function Ss({ direction: e, author: t, timestamp: n, status: r, actions: i, children: a, className: o, ...s }) {
	let c = e === "outbound";
	return /* @__PURE__ */ _("div", {
		role: "group",
		"aria-label": `${c ? "Outbound" : "Inbound"} message`,
		...s,
		"data-direction": e,
		className: J("flex", c && "justify-end", o),
		children: /* @__PURE__ */ v("div", {
			className: J("min-w-0 rounded-md px-4 py-3", c ? "bg-accent text-text-on-accent" : "border-border bg-bg-secondary text-text-primary border"),
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
function Cs(e, t, n, r) {
	let i = typeof t == "object" ? t : { base: t }, a = { [`--ui-${e}-base`]: n(i.base ?? r) };
	for (let t of [
		"sm",
		"md",
		"lg",
		"xl"
	]) a[`--ui-${e}-${t}`] = i[t] === void 0 ? "initial" : n(i[t]);
	return a;
}
function ws(e) {
	return typeof e == "number" ? `repeat(${e}, minmax(0, 1fr))` : e;
}
function Ts(e = 0, t, n) {
	return {
		"--ui-gap": `calc(var(--spacing) * ${e})`,
		"--ui-gap-x": t === void 0 ? "initial" : `calc(var(--spacing) * ${t})`,
		"--ui-gap-y": n === void 0 ? "initial" : `calc(var(--spacing) * ${n})`
	};
}
function Es(e) {
	return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Ds(e) {
	return e === "between" || e === "around" || e === "evenly" ? `space-${e}` : Es(e);
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
var Os = "ui-metadata-stripe rounded-md px-2 py-1.5";
function ks(e, t) {
	return Cs("stripe", t, (t) => Math.floor(e / t) % 2 == 0 ? "var(--ui-metadata-stripe-color, var(--bg-tertiary))" : "transparent", 1);
}
function As({ items: e, labelWidth: n = "100px", layout: r = "inline", columns: i = 1, gap: a = 3, striped: o = !1, className: s }) {
	return r === "stacked" ? /* @__PURE__ */ _("dl", {
		className: J("ui-grid text-xs", s),
		style: {
			...Cs("columns", i, ws, 1),
			...o ? Ts(a, void 0, 0) : Ts(a)
		},
		children: e.map((e, t) => /* @__PURE__ */ v("div", {
			className: o ? Os : void 0,
			style: o ? ks(t, i) : void 0,
			children: [/* @__PURE__ */ _("dt", {
				className: "text-text-tertiary font-label",
				children: e.label
			}), /* @__PURE__ */ _("dd", {
				className: J((typeof e.value == "string" || typeof e.value == "number") && "text-text-primary font-data"),
				children: e.value
			})]
		}, e.label))
	}) : o ? /* @__PURE__ */ _("div", {
		className: J("gap-x-3 text-xs", s),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e, t) => /* @__PURE__ */ v("div", {
			className: Os,
			style: {
				...ks(t, 1),
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
		className: J("gap-x-3 gap-y-2 text-xs", s),
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
var js = {
	positive: "success",
	negative: "danger",
	neutral: "neutral"
};
function Ms({ label: e, value: t, sub: n, trend: r, bar: i, icon: a, iconColor: o, className: s }) {
	let c = r && js[r.tone], l = On(En(c) ? c : "neutral").text;
	return /* @__PURE__ */ v("div", {
		className: J("bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3", s),
		children: [
			a && /* @__PURE__ */ _(a, { className: J("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", o) }),
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
					className: J("font-medium tabular-nums", l),
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
function Ns() {
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
function Ps() {
	return /* @__PURE__ */ _("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ _("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var Fs = {
	github: "GitHub",
	google: "Google"
}, Is = {
	github: Ps,
	google: Ns
};
function Ls({ provider: e, children: t, ...n }) {
	let r = Is[e];
	return /* @__PURE__ */ v(nr, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ _(r, {}), t ?? Fs[e]]
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function Rs({ title: e, subtitle: t, actions: n, className: r, eyebrow: i, headingLevel: a = 1, wrap: o = !1 }) {
	let s = `h${a}`;
	return /* @__PURE__ */ v("div", {
		className: J("flex items-center justify-between gap-3", o && "flex-wrap", r),
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
			className: J("flex items-center gap-2", o && "flex-wrap"),
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/PageSection.tsx
function zs({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ v("section", {
		className: J("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ v("div", {
			className: J("border-border flex items-end justify-between gap-3 border-b pb-2", o),
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
var Bs = [
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
function Vs({ page: e, pageSize: t, total: n, summary: r, showTotal: i = !1, loading: a = !1, pageSizeOptions: o = Bs, onPageChange: s, onPageSizeChange: c, className: l }) {
	let u = Math.ceil(n / t), d = Math.min((e - 1) * t + 1, n), f = Math.min(e * t, n);
	return /* @__PURE__ */ v("div", {
		className: J("flex items-center justify-between", l),
		children: [/* @__PURE__ */ v("div", {
			className: "flex items-center gap-3",
			children: [c && /* @__PURE__ */ _(hr, {
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
				className: J("text-text-tertiary text-xs", !a && "hidden sm:inline"),
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
		}), /* @__PURE__ */ _(Ir, {
			page: e,
			totalPages: u,
			onPageChange: s,
			loading: a,
			summary: null
		})]
	});
}
//#endregion
//#region src/components/ui/useFieldControl.ts
function Hs({ id: e, error: t, hint: n, describedBy: r, invalid: i, required: a }) {
	let o = u(), s = c(fr), l = e ?? s?.id ?? o, d = t ? `${l}-error` : void 0, f = n ? `${l}-hint` : void 0;
	return {
		inputId: l,
		errorId: d,
		hintId: f,
		describedBy: pr(r, s?.describedBy, f, d),
		invalid: i ?? (!!t || s?.invalid || void 0),
		required: a ?? s?.required,
		placeholderLabel: s?.placeholderLabel
	};
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var Us = a(({ label: e, error: t, className: n, id: r, hint: i, controlSize: a, required: o, "aria-describedby": s, "aria-invalid": c, ...l }, u) => {
	let d = Hs({
		id: r,
		error: t,
		hint: i,
		describedBy: s,
		invalid: c,
		required: o
	}), { inputId: f, errorId: p, hintId: m } = d, g = Yn(a), [y, b] = h(!1);
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
					className: J("ui-password-input ui-sized-control bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
					...l
				}), /* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => b(!y),
					"data-control-size": g,
					className: "ui-password-toggle text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",
					"aria-label": y ? "Hide password" : "Show password",
					children: _(y ? I : F, { className: "h-3.5 w-3.5" })
				})]
			})
		]
	});
});
Us.displayName = "PasswordInput";
var Ws = Object.freeze([
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
function Gs(e, t = Ws) {
	return t.every((t) => t.test(e));
}
//#endregion
//#region src/components/ui/PasswordRequirements.tsx
function Ks({ password: e, requirements: t = Ws, showWhenEmpty: n = !1, className: r }) {
	return !n && e.length === 0 ? null : /* @__PURE__ */ _("ul", {
		"aria-label": "Password requirements",
		className: J("space-y-1", r),
		children: t.map((t) => {
			let n = t.test(e);
			return /* @__PURE__ */ v("li", {
				className: "flex items-center gap-1.5",
				children: [n ? /* @__PURE__ */ _(D, {
					"aria-hidden": "true",
					className: "text-green h-3 w-3"
				}) : /* @__PURE__ */ _(ue, {
					"aria-hidden": "true",
					className: "text-text-disabled h-3 w-3"
				}), /* @__PURE__ */ v("span", {
					className: J("text-2xs", n ? "text-green" : "text-text-disabled"),
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
function qs({ trigger: e, open: t, onOpenChange: n, placement: r = "bottom", ariaLabel: i, children: a, className: o }) {
	let c = m(null), l = m(null), [d, p] = Bt(l), h = u(), y = (e) => {
		n(!1), e === "escape" && c.current?.focus();
	}, b = _n(t, y, [l], [c]);
	hn(t, c, l, {
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
		className: J("bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "text-text-primary p-3 text-xs focus:outline-none", o),
		children: /* @__PURE__ */ _(kt.Provider, {
			value: b,
			children: /* @__PURE__ */ _(Rt.Provider, {
				value: d,
				children: a
			})
		})
	})] });
}
//#endregion
//#region src/components/ui/ProfileHeader.tsx
function Js({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ v("div", {
		className: J("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ _(Cn, {
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
function Ys({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: J("ui-prose", t),
		children: e
	});
}
//#endregion
//#region src/lib/qrCode.ts
var Xs = class extends RangeError {
	constructor() {
		super("Text is too long to encode as a QR code"), this.name = "QrCapacityError";
	}
}, Zs = {
	L: 0,
	M: 1,
	Q: 2,
	H: 3
}, Qs = {
	L: 1,
	M: 0,
	Q: 3,
	H: 2
}, $s = [
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
], ec = [
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
function tc(e) {
	let t = (16 * e + 128) * e + 64;
	if (e >= 2) {
		let n = Math.floor(e / 7) + 2;
		t -= (25 * n - 10) * n - 55, e >= 7 && (t -= 36);
	}
	return t;
}
function nc(e, t) {
	let n = Zs[t];
	return Math.floor(tc(e) / 8) - $s[n][e] * ec[n][e];
}
function rc(e) {
	if (e === 1) return [];
	let t = Math.floor(e / 7) + 2, n = Math.floor((e * 8 + t * 3 + 5) / (t * 4 - 4)) * 2, r = [6];
	for (let i = e * 4 + 17 - 7; r.length < t; i -= n) r.splice(1, 0, i);
	return r;
}
function ic(e, t) {
	let n = 0;
	for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285, n ^= (t >>> r & 1) * e;
	return n;
}
function ac(e) {
	let t = Array(e).fill(0);
	t[e - 1] = 1;
	let n = 1;
	for (let r = 0; r < e; r++) {
		for (let e = 0; e < t.length; e++) t[e] = ic(t[e], n), e + 1 < t.length && (t[e] ^= t[e + 1]);
		n = ic(n, 2);
	}
	return t;
}
function oc(e, t) {
	let n = Array(t.length).fill(0);
	for (let r of e) {
		let e = r ^ n.shift();
		n.push(0), t.forEach((t, r) => {
			n[r] ^= ic(t, e);
		});
	}
	return n;
}
function sc(e, t, n) {
	let r = nc(t, n) * 8, i = [], a = (e, t) => {
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
function cc(e, t, n) {
	let r = Zs[n], i = ec[r][t], a = $s[r][t], o = Math.floor(tc(t) / 8), s = i - o % i, c = Math.floor(o / i), l = ac(a), u = [];
	for (let t = 0, n = 0; t < i; t++) {
		let r = c - a + (t < s ? 0 : 1), i = e.slice(n, n + r);
		n += r;
		let o = oc(i, l);
		t < s && i.push(0), u.push(i.concat(o));
	}
	let d = [];
	for (let e = 0; e < u[0].length; e++) u.forEach((t, n) => {
		(e !== c - a || n >= s) && d.push(t[e]);
	});
	return d;
}
var lc = class {
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
function uc(e, t) {
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
	let r = rc(t), i = r.length - 1;
	r.forEach((t, n) => {
		r.forEach((r, a) => {
			if (!(n === 0 && a === 0 || n === 0 && a === i || n === i && a === 0)) for (let n = -2; n <= 2; n++) for (let i = -2; i <= 2; i++) e.setFunction(t + i, r + n, Math.max(Math.abs(i), Math.abs(n)) !== 1);
		});
	}), dc(e, "M", 0), fc(e, t);
}
function dc(e, t, n) {
	let r = Qs[t] << 3 | n, i = r;
	for (let e = 0; e < 10; e++) i = i << 1 ^ (i >>> 9) * 1335;
	let a = (r << 10 | i) ^ 21522, o = (e) => (a >>> e & 1) != 0, { size: s } = e;
	for (let t = 0; t <= 5; t++) e.setFunction(8, t, o(t));
	e.setFunction(8, 7, o(6)), e.setFunction(8, 8, o(7)), e.setFunction(7, 8, o(8));
	for (let t = 9; t < 15; t++) e.setFunction(14 - t, 8, o(t));
	for (let t = 0; t < 8; t++) e.setFunction(s - 1 - t, 8, o(t));
	for (let t = 8; t < 15; t++) e.setFunction(8, s - 15 + t, o(t));
	e.setFunction(8, s - 8, !0);
}
function fc(e, t) {
	if (t < 7) return;
	let n = t;
	for (let e = 0; e < 12; e++) n = n << 1 ^ (n >>> 11) * 7973;
	let r = t << 12 | n;
	for (let t = 0; t < 18; t++) {
		let n = (r >>> t & 1) != 0, i = e.size - 11 + t % 3, a = Math.floor(t / 3);
		e.setFunction(i, a, n), e.setFunction(a, i, n);
	}
}
function pc(e, t) {
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
var mc = [
	(e, t) => (e + t) % 2 == 0,
	(e, t) => t % 2 == 0,
	(e) => e % 3 == 0,
	(e, t) => (e + t) % 3 == 0,
	(e, t) => (Math.floor(e / 3) + Math.floor(t / 2)) % 2 == 0,
	(e, t) => e * t % 2 + e * t % 3 == 0,
	(e, t) => (e * t % 2 + e * t % 3) % 2 == 0,
	(e, t) => ((e + t) % 2 + e * t % 3) % 2 == 0
];
function hc(e, t) {
	for (let n = 0; n < e.size; n++) for (let r = 0; r < e.size; r++) !e.isFunction[n][r] && mc[t](r, n) && (e.modules[n][r] = !e.modules[n][r]);
}
var gc = [[
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
function _c(e) {
	let t = e.length, n = (t, n, r) => r ? e[t][n] : e[n][t], r = 0;
	for (let e of [!1, !0]) for (let i = 0; i < t; i++) {
		let a = 1;
		for (let o = 1; o <= t; o++) o < t && n(o, i, e) === n(o - 1, i, e) ? a++ : (a >= 5 && (r += 3 + (a - 5)), a = 1);
		for (let a = 0; a + 11 <= t; a++) for (let t of gc) t.every((t, r) => n(a + r, i, e) === t) && (r += 40);
	}
	for (let n = 0; n < t - 1; n++) for (let i = 0; i < t - 1; i++) {
		let t = e[n][i];
		t === e[n][i + 1] && t === e[n + 1][i] && t === e[n + 1][i + 1] && (r += 3);
	}
	let i = e.reduce((e, t) => e + t.filter(Boolean).length, 0) * 100 / (t * t);
	return r += Math.floor(Math.abs(i - 50) / 5) * 10, r;
}
function vc(e, t = "M") {
	if (!Object.hasOwn(Zs, t)) throw RangeError(`Invalid QR error correction level "${t}"; expected L, M, Q or H`);
	let n = new TextEncoder().encode(e), r = 1;
	for (; r <= 40 && !(4 + (r <= 9 ? 8 : 16) + n.length * 8 <= nc(r, t) * 8); r++);
	if (r > 40) throw new Xs();
	let i = cc(sc(n, r, t), r, t), a = new lc(r * 4 + 17);
	uc(a, r), pc(a, i);
	let o = 0, s = Infinity;
	for (let e = 0; e < 8; e++) {
		hc(a, e), dc(a, t, e);
		let n = _c(a.modules);
		n < s && (s = n, o = e), hc(a, e);
	}
	return hc(a, o), dc(a, t, o), {
		size: a.size,
		version: r,
		modules: a.modules
	};
}
//#endregion
//#region src/components/ui/QrCode.tsx
function yc({ value: e, errorCorrection: t = "M", size: n = 160, margin: r = 4, "aria-label": i = "QR code", fallback: a = null, className: o }) {
	let s = p(() => {
		if (!e) return null;
		try {
			return vc(e, t);
		} catch (e) {
			if (e instanceof Xs) return "too-long";
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
		className: J("block", o),
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
function bc({ items: e, getKey: t, renderItem: n, onReorder: r, onRemove: i, getItemLabel: a, addButton: o, disabled: s = !1 }) {
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
								/* @__PURE__ */ _(nr, {
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
									className: J(o === 0 && "cursor-not-allowed opacity-40"),
									onClick: () => g(o, -1),
									children: "Up"
								}),
								/* @__PURE__ */ _(nr, {
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
									className: J(o === e.length - 1 && "cursor-not-allowed opacity-40"),
									onClick: () => g(o, 1),
									children: "Down"
								}),
								i && /* @__PURE__ */ _(nr, {
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
									icon: ce,
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
function xc({ value: e, onChange: t, placeholder: n = "Search...", className: r }) {
	return /* @__PURE__ */ v("div", {
		className: J("relative", r),
		children: [/* @__PURE__ */ _(K, { className: "text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" }), /* @__PURE__ */ _("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: J("bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none")
		})]
	});
}
//#endregion
//#region src/components/ui/Select.tsx
var Sc = a(({ label: e, labelPlacement: t = "above", error: n, options: r, className: i, id: a, hint: o, controlSize: c, required: u, "aria-describedby": d, "aria-invalid": f, ...p }, g) => {
	let y = Hs({
		id: a,
		error: n,
		hint: o,
		describedBy: d,
		invalid: f,
		required: u
	}), { inputId: b, errorId: x, hintId: S } = y, C = Yn(c), w = m(null), T = s((e) => {
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
				className: J("flex items-center justify-between", D && !n && "sr-only"),
				children: [e && /* @__PURE__ */ _("label", {
					htmlFor: b,
					className: J("ui-field-label font-label text-xs font-medium", D && "sr-only"),
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
						className: J("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", n ? "border-red" : "border-border", i),
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
Sc.displayName = "Select";
//#endregion
//#region src/components/ui/SettingRow.tsx
function Cc({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: J("border-border flex items-center justify-between border-b py-3", r),
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
function wc({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: o = "w-[360px]", resizable: s = !1, className: c, contentClassName: l }) {
	let d = u(), f = Yn(), p = m(null), [h, g] = Bt(p);
	xt(p, e);
	let y = At(e, () => t());
	return jt(e), e ? pe(/* @__PURE__ */ _(kt.Provider, {
		value: y,
		children: /* @__PURE__ */ _(Rt.Provider, {
			value: h,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-50",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay animate-fade-in absolute inset-0",
					onClick: t
				}), /* @__PURE__ */ v("div", {
					ref: g,
					id: s ? d : void 0,
					className: J("bg-bg-secondary border-border absolute inset-y-0 flex flex-col shadow-lg", o, a === "right" ? "animate-slide-in-right right-0 border-l" : "animate-slide-in-left left-0 border-r", c),
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
							}), /* @__PURE__ */ _(nr, {
								type: "button",
								variant: "icon",
								size: "sm",
								onClick: t,
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ _(ue, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ _("div", {
							className: J("ui-surface-body flex-1 overflow-y-auto p-3", l),
							children: r
						}),
						i && /* @__PURE__ */ _("div", {
							"data-control-size": f,
							className: "ui-bar border-border bg-bg-primary/50 flex shrink-0 items-center gap-2 border-t px-3 py-2.5",
							children: i
						}),
						s && h && /* @__PURE__ */ _(kc, {
							sheet: h,
							side: a
						})
					]
				})]
			})
		})
	}), document.body) : null;
}
function Tc(e, t) {
	e.style.width = t === null ? "" : `${t}px`;
}
function Ec(e) {
	let t = e.ownerDocument.body, n = t.style.userSelect, r = t.style.cursor;
	return t.style.userSelect = "none", t.style.cursor = "col-resize", () => {
		t.style.userSelect = n, t.style.cursor = r;
	};
}
function Dc(e) {
	let t = e.style.width;
	Tc(e, null);
	let n = e.getBoundingClientRect().width;
	return e.style.width = t, n;
}
function Oc(e) {
	let t = e.ownerDocument.defaultView, n = parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize);
	return Math.max(0, t.innerWidth - 2 * n);
}
function kc({ sheet: e, side: t }) {
	let n = e.ownerDocument.defaultView, [r, i] = h(() => ({
		width: e.getBoundingClientRect().width,
		min: e.getBoundingClientRect().width,
		max: Oc(e),
		desktop: n.innerWidth >= 640
	})), a = m(null), o = m(null), c = m(null);
	function u() {
		o.current = null, c.current?.(), c.current = null;
	}
	let d = s((t) => {
		let r = Oc(e), o = Math.min(Dc(e), r), s = n.innerWidth >= 640;
		a.current = s && t !== null ? Math.min(r, Math.max(o, t)) : null, a.current !== null && a.current <= o && (a.current = null), Tc(e, a.current), i({
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
			r.disconnect(), n.removeEventListener("resize", t), u(), Tc(e, null);
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
		className: J("hover:bg-accent/30 active:bg-accent/50 focus-visible:outline-accent absolute inset-y-0 z-10 w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0", t === "right" ? "left-0" : "right-0"),
		style: { touchAction: "none" },
		onPointerDown: (t) => {
			if (!t.isPrimary || t.button !== 0 || o.current) return;
			t.preventDefault(), t.currentTarget.focus(), t.currentTarget.setPointerCapture(t.pointerId);
			let n = Dc(e);
			o.current = {
				pointerId: t.pointerId,
				x: t.clientX,
				width: a.current ?? n
			}, c.current = Ec(e);
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
			let r = Io(n.key, a.current ?? Dc(e), 16, t);
			r !== void 0 && (n.preventDefault(), d(r));
		}
	}) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function Ac({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ _("div", {
		className: J("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function jc({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: J("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var Mc = Object.assign(Ac, { Main: jc }), Nc = {
	active: "success",
	inactive: "neutral",
	pending: "warning",
	error: "danger"
};
function Pc({ status: e, label: t, className: n }) {
	let r = On(Nc[e]);
	return /* @__PURE__ */ v("span", {
		className: J("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ _("span", { className: J("h-2 w-2 rounded-full", r.dot, e === "pending" && "animate-pulse-subtle") }), t && /* @__PURE__ */ _("span", {
			className: J("text-xs", r.text),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function Fc({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ _("div", {
		className: J("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ v("div", {
			className: J("flex items-center", r < e.length - 1 && "flex-1"),
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ _("div", {
						className: J("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ _(D, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ _("span", {
						className: J("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ _("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ _("div", { className: J("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function Ic({ tabs: e, defaultTab: t, value: n, onChange: r, className: i }) {
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
				className: J("font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]", "hover:text-text-primary", e.key === c ? "text-accent" : "text-text-tertiary"),
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
var Lc = a(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, hint: s, controlSize: c, required: l, "aria-describedby": u, "aria-invalid": d, ...f }, p) => {
	let m = Hs({
		id: o,
		error: t,
		hint: s,
		describedBy: u,
		invalid: d,
		required: l
	}), { inputId: h, errorId: g, hintId: y } = m, b = Yn(c), x = typeof i == "string" ? i.length : 0;
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
				className: J("ui-sized-control bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
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
Lc.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var Rc = a(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, hint: o, controlSize: s, required: c, "aria-describedby": l, "aria-invalid": u, ...d }, f) => {
	let p = Hs({
		id: i,
		error: t,
		hint: o,
		describedBy: l,
		invalid: u,
		required: c
	}), { inputId: m, errorId: h, hintId: g } = p, y = Yn(s);
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
					className: J("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
					...d
				})]
			})
		]
	});
});
Rc.displayName = "TextInput";
//#endregion
//#region src/components/ui/TimeInput.tsx
var zc = a(({ value: e, onChange: t, ...n }, r) => /* @__PURE__ */ _(Rc, {
	...n,
	ref: r,
	type: "time",
	value: e,
	onChange: (e) => t(e.currentTarget.value)
}));
zc.displayName = "TimeInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function Bc({ items: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: J("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ v("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ _("div", { className: J(En(t.dot) ? On(t.dot).dot : t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ _("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ v("div", {
				className: J("pb-4", n === e.length - 1 && "pb-0"),
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
//#region src/lib/formatMediaTime.ts
function Vc(e) {
	let t = Math.max(0, Math.floor(e)), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), i = String(t % 60).padStart(2, "0");
	return n > 0 ? `${n}:${String(r).padStart(2, "0")}:${i}` : `${r}:${i}`;
}
//#endregion
//#region src/components/ui/TranscriptLine.tsx
function Hc({ speaker: e, role: t = "patient", time: n, onSeek: r, highlighted: i = !1, children: a, className: o, ...s }) {
	let c = n != null && Number.isFinite(n) && n >= 0 ? n : null, l = c == null ? null : Vc(c);
	return /* @__PURE__ */ v("div", {
		...s,
		"data-role": t,
		"data-highlighted": i || void 0,
		className: J("flex gap-3 rounded-md p-2 text-xs", i && "bg-accent-subtle", t === "system" ? "text-text-tertiary italic" : "text-text-secondary", t === "agent" && "border-l-2 border-accent", t === "staff" && "border-l-2 border-border-strong", o),
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
var Uc = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function Wc(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		return typeof n == "function" ? n : () => e(null);
	}
	return e && (e.current = t), () => {
		e && (e.current = null);
	};
}
function Gc(e, t) {
	let n = { ...e };
	for (let [r, i] of Object.entries(t)) {
		if (i === void 0) continue;
		let t = e[r];
		if (/^on[A-Z]/.test(r) && typeof t == "function" && typeof i == "function") n[r] = (...e) => {
			t(...e), i(...e);
		};
		else if (r === "className") n[r] = J(t, i);
		else if (r === "style") n[r] = {
			...t,
			...i
		};
		else if (r === "id" && typeof t == "string" && t) continue;
		else r === "aria-describedby" ? n[r] = [t, i].filter(Boolean).join(" ") : n[r] = i;
	}
	return n;
}
function Kc({ element: e, merged: t, ...r }) {
	return n(e, {
		...t,
		...r
	});
}
var qc = (e, t) => t instanceof Node && e.contains(t);
function Jc({ content: e, placement: n = "top", children: r, ref: i, ...a }) {
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
		let t = [Wc(m, e), Wc(i, e)];
		return () => t.forEach((e) => e());
	}, [m, i]), y = {
		onMouseOver: (e) => {
			let { currentTarget: t, target: n, relatedTarget: r } = e;
			qc(t, n) && !qc(t, r) && d(!0);
		},
		onMouseOut: (e) => {
			qc(e.currentTarget, e.relatedTarget) || d(!1);
		},
		onFocus: (e) => {
			d(qc(e.currentTarget, e.target));
		},
		onBlur: () => d(!1)
	}, b = p ? /* @__PURE__ */ _(Kc, {
		element: p,
		merged: Gc(p.props, {
			...a,
			"aria-describedby": [a["aria-describedby"], f].filter(Boolean).join(" ")
		}),
		ref: g
	}) : r;
	return /* @__PURE__ */ v("div", {
		...p ? y : Gc(y, a),
		ref: p ? void 0 : g,
		className: J("relative inline-flex", !p && a.className),
		children: [b, c && /* @__PURE__ */ _("div", {
			id: f,
			className: J("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", Uc[n]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function Yc({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a, moreFilters: o, moreFiltersActiveCount: s = 0, moreFiltersOpen: c, defaultMoreFiltersOpen: l, onMoreFiltersOpenChange: d }) {
	let f = u(), p = m(null), g = m(null), [y, b] = h(!1), x = s > 0, [S, C] = h(l ?? x), [w, T] = h(x);
	w !== x && (T(x), c === void 0 && x && C(!0));
	let E = c ?? S, D = (e) => {
		c === void 0 && C(e), d?.(e);
	}, O = At(!!o && E && y, (e) => {
		e.defaultPrevented || !g.current?.contains(g.current.ownerDocument.activeElement) || (D(!1), p.current?.focus());
	}, g), k = /* @__PURE__ */ v("div", {
		className: J("flex items-center justify-between gap-3", !o && r),
		children: [/* @__PURE__ */ _("div", {
			className: J("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), (t || o) && /* @__PURE__ */ v("div", {
			className: J("flex items-center gap-1.5", a),
			children: [t, o && /* @__PURE__ */ v("span", {
				className: "relative inline-flex",
				children: [/* @__PURE__ */ _(nr, {
					ref: p,
					size: "sm",
					icon: q,
					hideLabel: !0,
					"aria-label": s > 0 ? `More filters (${s} active)` : "More filters",
					"aria-expanded": E,
					"aria-controls": f,
					onClick: () => D(!E),
					children: "More filters"
				}), s > 0 && /* @__PURE__ */ _(pi, {
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
		className: J("space-y-3", r),
		children: [k, /* @__PURE__ */ _(kt.Provider, {
			value: O,
			children: /* @__PURE__ */ _("div", {
				ref: g,
				id: f,
				hidden: !E,
				className: J("flex-wrap items-center gap-3", E ? "flex" : "hidden"),
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
var Xc = a(function({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, multiple: r, disabled: i, onChange: a, onFilesChange: o, className: s, id: c, "aria-describedby": l, ...f }, p) {
	let h = m(null);
	d(p, () => h.current, []);
	let g = u(), y = `${c ?? g}-description`;
	return /* @__PURE__ */ v("label", {
		className: J("ui-upload-dropzone border-border hover:border-border-strong relative block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", i ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
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
				children: n ?? /* @__PURE__ */ _(le, { className: "h-4.5 w-4.5" })
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
}), Zc = r({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function Qc() {
	return c(Zc);
}
//#endregion
//#region src/lib/formatDate.ts
function $c(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function el(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function tl(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${io[e.getMonth()]} ${e.getDate()}`;
	return e.getFullYear() === t.getFullYear() ? o : `${o}, ${e.getFullYear()}`;
}
//#endregion
//#region src/providers/SettingsProvider.tsx
var nl = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, rl = {
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
}, il = "leonardaustin-ui-settings", al = new Set(Object.keys(rl)), ol = new Set(Object.keys(Xt)), sl = new Set(Object.keys(nl)), cl = new Set([
	"light",
	"dark",
	"system"
]);
function ll(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : Y(e, t, n);
}
function ul(e) {
	let t = {};
	if (al.has(e.accentColor) && (t.accentColor = e.accentColor), cl.has(e.colorMode) && (t.colorMode = e.colorMode), ol.has(e.preferredDarkTheme) && !Gt(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), ol.has(e.preferredLightTheme) && Gt(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = ll(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!ol.has(t) || !r || typeof r != "object") continue;
			let e = r, i = Xt[t];
			n[t] = {
				uiFont: sl.has(e.uiFont) ? e.uiFont : i.uiFont,
				headingFont: sl.has(e.headingFont) ? e.headingFont : i.headingFont,
				proseFont: sl.has(e.proseFont) ? e.proseFont : i.proseFont,
				controlFont: sl.has(e.controlFont) ? e.controlFont : i.controlFont,
				labelFont: sl.has(e.labelFont) ? e.labelFont : i.labelFont,
				navigationFont: sl.has(e.navigationFont) ? e.navigationFont : i.navigationFont,
				dataFont: sl.has(e.dataFont) ? e.dataFont : i.dataFont,
				codeFont: sl.has(e.codeFont) ? e.codeFont : i.codeFont,
				fontSize: ll(e.fontSize, 11, 18, i.fontSize),
				borderRadius: ll(e.borderRadius, 0, 16, i.borderRadius),
				borderWidth: ll(e.borderWidth, 1, 3, i.borderWidth),
				tracking: ll(e.tracking, 0, .3, i.tracking),
				lineHeight: ll(e.lineHeight, 1.2, 2, i.lineHeight),
				density: ll(e.density, .18, .32, i.density)
			};
		}
		t.themeOverrides = n;
	}
	return t;
}
var dl = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function fl(e, t) {
	let n = {
		...dl,
		...ul(t ?? {})
	};
	if (typeof localStorage > "u") return n;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...n,
			...ul(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return n;
}
function pl(e, t) {
	let n = Xt[e] ?? Xt.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function ml(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function hl({ children: e, storageKey: t = il, initialSettings: n, forcedTheme: r }) {
	let [i, a] = h(() => fl(t, n)), [o, c] = h(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
	]), [d, f] = h(() => pl(u, i.themeOverrides));
	l(() => {
		f(pl(u, i.themeOverrides));
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
		let e = document.documentElement, t = rl[i.accentColor];
		e.style.setProperty("--accent", t.base), e.style.setProperty("--accent-hover", t.hover), e.style.setProperty("--accent-active", t.active), e.style.setProperty("--accent-muted", t.muted), e.style.setProperty("--accent-subtle", t.subtle);
	}, [i.accentColor]), l(() => {
		document.documentElement.classList.toggle("reduced-motion", i.reducedMotion);
	}, [i.reducedMotion]), l(() => {
		let e = document.documentElement, t = d.borderRadius;
		e.style.fontSize = `${d.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", nl[d.uiFont]), e.style.setProperty("--font-heading", nl[d.headingFont]), e.style.setProperty("--font-prose", nl[d.proseFont]), e.style.setProperty("--font-control", nl[d.controlFont]), e.style.setProperty("--font-label", nl[d.labelFont]), e.style.setProperty("--font-navigation", nl[d.navigationFont]), e.style.setProperty("--font-data", nl[d.dataFont]), e.style.setProperty("--font-code", nl[d.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${d.borderWidth}px`), e.style.setProperty("--ui-tracking", `${d.tracking}em`), e.style.setProperty("--ui-line-height", String(d.lineHeight)), e.style.setProperty("--ui-density", `${d.density}rem`);
	}, [d]);
	let g = p(() => pl(u, i.themeOverrides), [u, i.themeOverrides]), v = u in i.themeOverrides, y = !ml(d, g), b = s(() => {
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
		delete e[u], m({ themeOverrides: e }), f(Xt[u] ?? Xt.dark);
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
	return /* @__PURE__ */ _(vn.Provider, {
		value: S,
		children: e
	});
}
//#endregion
//#region src/providers/ThemeProvider.tsx
var gl = {
	dark: "",
	light: "theme-light",
	lightInverted: "theme-light-inverted",
	monokai: "theme-monokai",
	solarized: "theme-solarized",
	cyberBrutalDark: "theme-cyber-brutal-dark",
	cyberBrutalLight: "theme-cyber-brutal-light",
	hashiTheme: "theme-hashi"
};
function _l({ children: e }) {
	let { resolvedTheme: t } = c(vn);
	return l(() => {
		let e = document.documentElement;
		Object.values(gl).forEach((t) => {
			t && e.classList.remove(t);
		});
		let n = gl[t];
		n && e.classList.add(n);
	}, [t]), /* @__PURE__ */ _(Zc.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
//#region src/components/ui/FormField.tsx
function vl({ id: e, label: t, hint: n, error: r, required: i, optionalLabel: a, labelPlacement: o = "above", children: c, className: l, ...d }) {
	let f = u(), p = e ?? f, m = n ? `${p}-hint` : void 0, g = r ? `${p}-error` : void 0, y = `${p}-label`, [b, x] = h(0), S = s(() => (x((e) => e + 1), () => x((e) => e - 1)), []), C = o === "placeholder" && typeof t == "string" && t ? t : void 0, w = {
		id: p,
		"aria-describedby": pr(m, g),
		"aria-invalid": !!r || void 0,
		required: i
	};
	return /* @__PURE__ */ _(fr.Provider, {
		value: {
			id: p,
			describedBy: pr(m, g),
			invalid: !!r,
			required: i,
			placeholderLabel: C,
			labelId: y,
			claimLabel: S
		},
		children: /* @__PURE__ */ v("div", {
			...d,
			className: J("flex flex-col gap-1.5", l),
			children: [
				/* @__PURE__ */ v("label", {
					id: b > 0 ? y : void 0,
					htmlFor: p,
					className: J("ui-field-label font-label text-xs font-medium", C && "sr-only"),
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
function yl({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: J("text-text-secondary text-xs", e)
	});
}
function bl({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: J("text-red text-xs", e)
	});
}
//#endregion
//#region src/components/ui/Fieldset.tsx
function xl({ id: e, legend: t, hint: n, error: r, children: i, className: a, "aria-describedby": o, ...s }) {
	let c = u(), l = e ?? c, d = n ? `${l}-hint` : void 0, f = r ? `${l}-error` : void 0, p = pr(o, d, f);
	return /* @__PURE__ */ v("fieldset", {
		...s,
		id: l,
		"aria-describedby": p,
		className: J("min-w-0 space-y-2", a),
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
			/* @__PURE__ */ _(fr.Provider, {
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
var Sl = a(({ label: e, description: t, controlSize: n, className: r, id: i, "aria-describedby": a, "aria-invalid": o, ...s }, l) => {
	let d = u(), f = Yn(n), p = c(fr), m = i ?? p?.id ?? d, h = t ? `${m}-description` : void 0;
	return /* @__PURE__ */ v("label", {
		className: J("ui-choice flex items-start gap-2.5", r),
		"data-control-size": f,
		children: [/* @__PURE__ */ _("input", {
			...s,
			ref: l,
			id: m,
			type: "radio",
			"aria-invalid": o ?? (p?.invalid || void 0),
			"aria-describedby": pr(a, p?.describedBy, h),
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
Sl.displayName = "Radio";
function Cl({ name: e, id: t, options: n, value: r, onChange: i, required: a, disabled: o, controlSize: s, ...c }) {
	let l = u(), d = t ?? l;
	return /* @__PURE__ */ _(xl, {
		...c,
		id: d,
		disabled: o,
		children: n.map((t, n) => /* @__PURE__ */ _(Sl, {
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
var wl = Object.assign(Sl, { Group: Cl }), Tl = {
	pending: "Pending",
	uploading: "Uploading",
	processing: "Processing",
	ready: "Ready",
	error: "Upload failed"
};
function El(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Dl({ name: e, size: t, status: n = "ready", statusLabel: r, error: i, onRetry: a, onRemove: o, onDownload: s, downloadHref: c, actionsDisabled: l, className: u, ...d }) {
	return /* @__PURE__ */ v("li", {
		...d,
		className: J("ui-attachment-item border-border flex items-center justify-between gap-3 rounded-md border p-3", u),
		children: [/* @__PURE__ */ v("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ _("p", {
					className: "text-text-primary text-xs",
					children: e
				}),
				t !== void 0 && /* @__PURE__ */ _("p", {
					className: "text-text-tertiary text-2xs",
					children: El(t)
				}),
				/* @__PURE__ */ v("div", {
					role: "status",
					"aria-atomic": "true",
					className: J("text-2xs", n === "error" ? "text-red" : "text-text-secondary"),
					children: [
						e,
						": ",
						i ?? r ?? Tl[n]
					]
				})
			]
		}), /* @__PURE__ */ v("div", {
			className: "flex items-center gap-1.5",
			children: [
				a && /* @__PURE__ */ _(nr, {
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
				s && /* @__PURE__ */ _(nr, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: s,
					"aria-label": `Download ${e}`,
					children: "Download"
				}),
				o && /* @__PURE__ */ _(nr, {
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
function Ol({ children: e, className: t, "aria-label": n = "Attachments", ...r }) {
	return /* @__PURE__ */ _("ul", {
		...r,
		"aria-label": n,
		className: J("space-y-2", t),
		children: e
	});
}
//#endregion
//#region src/lib/dateParts.ts
function kl(e, { required: t = !1, minYear: n = 1900, maxYear: r = 2100 } = {}) {
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
function Al({ value: e, onChange: t, label: n, hint: r, error: i, id: a, name: o, disabled: s, required: c, className: d, inputProps: f, minYear: p = 1900, maxYear: g = 2100 }) {
	let y = u(), b = m({}), [x, S] = h(!1);
	if (!Number.isInteger(p) || !Number.isInteger(g) || p < 1 || g > 9999 || p > g) throw RangeError("DatePartsInput requires year bounds between 1 and 9999, with minYear <= maxYear");
	let C = kl(e, {
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
		className: J("space-y-2", d),
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
					children: [/* @__PURE__ */ _(Rc, {
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
function jl({ className: e, width: t, height: n, style: r, ...i }) {
	return /* @__PURE__ */ _("div", {
		...i,
		"aria-hidden": "true",
		className: J("ui-skeleton rounded-md bg-bg-tertiary", e),
		style: {
			width: t,
			height: n,
			...r
		}
	});
}
//#endregion
//#region src/components/ui/NavTabs.tsx
function Ml({ items: e, activeKey: t, renderLink: n, className: r, "aria-label": i = "Sections", ...a }) {
	return /* @__PURE__ */ _("nav", {
		...a,
		"aria-label": i,
		className: J("ui-nav-tabs border-border border-b", r),
		children: /* @__PURE__ */ _("ul", {
			className: "ui-nav-tabs-list",
			children: e.map((e) => {
				let { key: r, label: i, badge: a, ...o } = e, s = {
					...o,
					"aria-current": r === t ? "page" : void 0,
					className: J("ui-nav-tab px-3 py-2 text-xs font-medium", r === t ? "text-accent" : "text-text-secondary", e.className),
					children: /* @__PURE__ */ v(g, { children: [i, a !== void 0 && /* @__PURE__ */ _(pi, {
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
function Nl({ value: e, maxLength: t, announcementDelay: n = 1e3, className: r, ...i }) {
	let a = t - e.length, o = Math.abs(a), s = `${o} ${o === 1 ? "character" : "characters"} ${a < 0 ? "over the limit" : "remaining"}`, [c, u] = h(s);
	return l(() => {
		let e = setTimeout(() => u(s), n);
		return () => clearTimeout(e);
	}, [s, n]), /* @__PURE__ */ v("p", {
		...i,
		className: J("text-2xs", a < 0 ? "text-red" : "text-text-tertiary", r),
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
function Pl({ size: e, children: t }) {
	return /* @__PURE__ */ _(Jn.Provider, {
		value: e,
		children: t
	});
}
//#endregion
//#region src/components/ui/ProgressBar.tsx
var Fl = a(function({ label: e, value: t, min: n = 0, max: r = 100, color: i = "accent", striped: a = !1, animated: o = !1, id: s, className: c, ...l }, d) {
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
				className: J("ui-progress-bar", c),
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
function Il({ as: e, gap: t = 0, align: n = "stretch", justify: r = "start", className: a, style: o, ...s }) {
	return i(e ?? "div", {
		...s,
		className: J("ui-stack", a),
		style: {
			...Ts(t),
			"--ui-align": Es(n),
			"--ui-justify": Ds(r),
			...o
		}
	});
}
//#endregion
//#region src/components/ui/Inline.tsx
function Ll({ as: e, gap: t = 0, gapX: n, gapY: r, align: a = "stretch", justify: o = "start", wrap: s = !1, inline: c = !1, stackBelow: l, className: u, style: d, ...f }) {
	return i(e ?? "div", {
		...f,
		className: J("ui-inline", u),
		style: {
			...Ts(t, n, r),
			"--ui-align": Es(a),
			"--ui-justify": Ds(o),
			"--ui-wrap": s ? "wrap" : "nowrap",
			"--ui-display": c ? "inline-flex" : "flex",
			...Cs("direction", l ? {
				base: "column",
				[l]: "row"
			} : "row", (e) => e, "row"),
			...d
		}
	});
}
//#endregion
//#region src/components/ui/Grid.tsx
function Rl({ as: e, columns: t = 1, gap: n = 0, gapX: r, gapY: a, align: o = "stretch", justify: s = "stretch", className: c, style: l, ...u }) {
	return i(e ?? "div", {
		...u,
		className: J("ui-grid", c),
		style: {
			...Ts(n, r, a),
			...Cs("columns", t, ws, 1),
			"--ui-align": o,
			"--ui-justify": s,
			...l
		}
	});
}
//#endregion
//#region src/components/ui/GridItem.tsx
function zl({ as: e, span: t = 1, className: n, style: r, ...a }) {
	return i(e ?? "div", {
		...a,
		className: J("ui-grid-item", n),
		style: {
			...Cs("span", t, (e) => `span ${e} / span ${e}`, 1),
			...r
		}
	});
}
//#endregion
export { Jr as Accordion, Zr as Alert, kr as AppShell, Xe as AreaChart, Dl as AttachmentItem, Ol as AttachmentList, ni as AudioPlayer, ii as AuthCard, Ar as AuthLayout, ai as AuthorByline, Cn as Avatar, jr as BackLink, pi as Badge, $e as BarChart, yt as BottomNav, Kn as Breadcrumbs, nr as Button, Mt as COMMAND_PALETTE_EVENT, ro as Calendar, fo as CalendarGrid, po as Card, Nl as CharacterCount, Mr as Checkbox, yo as CodeInput, Fr as ColumnPicker, bo as Combobox, Lt as CommandPalette, Pl as ControlSizeProvider, Co as CopyButton, Ja as DEFAULT_CALENDAR_LABELS, Nt as DEFAULT_COMMAND_PALETTE_SHORTCUT, wo as DangerZone, Al as DatePartsInput, Eo as DatePicker, ko as DateRangePicker, Po as DateTimePicker, Lo as DetailPanel, us as Dialog, ds as DialogActions, qr as Disclosure, fs as DividerLabel, tt as DonutChart, hs as DropdownMenu, gs as EmptyState, _s as ErrorBoundary, bl as FieldError, yl as FieldHint, xl as Fieldset, Nr as FilterButton, vs as FilterDropdown, vl as FormField, Rl as Grid, zl as GridItem, Ll as Inline, ys as Kbd, xs as LoadingSpinner, Ss as MessageBubble, As as MetadataGrid, Ms as MetricCard, Ht as MobileDrawer, Ml as NavTabs, Ls as OAuthButton, Rs as PageHeader, zs as PageSection, Ir as Pagination, Vs as PaginationBar, Us as PasswordInput, Ks as PasswordRequirements, qs as Popover, Rt as PortalContainerContext, Js as ProfileHeader, Fl as ProgressBar, Ys as ProseContent, Xs as QrCapacityError, yc as QrCode, nt as RadarChart, rt as RadialBarChart, wl as Radio, Ya as RadioPill, bc as ReorderList, Kr as ResourceTable, xc as SearchInput, rr as SectionHeader, Sc as Select, hr as SelectDropdown, Cc as SettingRow, vn as SettingsContext, hl as SettingsProvider, wc as SideSheet, Wn as Sidebar, jl as Skeleton, _r as Slider, it as SparkLine, Mc as SplitPaneLayout, Il as Stack, dt as StackedBarChart, Pc as StatusDot, Fc as StepProgress, br as THEME_MENU_EVENT, Rr as Table, Br as TableBody, Ur as TableCell, Wr as TableEmptyRow, zr as TableHead, Hr as TableHeaderCell, Vr as TableRow, Ic as Tabs, Rc as TextInput, Lc as Textarea, Zc as ThemeContext, Cr as ThemeMenu, vr as ThemePreview, _l as ThemeProvider, zc as TimeInput, Bc as Timeline, jn as ToastProvider, yr as Toggle, Yc as Toolbar, Jc as Tooltip, Dr as TopBar, Hc as TranscriptLine, Xc as UploadDropzone, ht as VerticalBarChart, Qt as accentItems, Si as addDays, Ci as addMinutes, wi as addMonths, mi as badgeColors, _i as calendarDateFromParts, $ as calendarDateParts, J as cn, pa as createCalendarDateMath, qt as darkThemes, ji as dateAtMinutes, Ws as defaultPasswordRequirements, Oi as differenceInDays, vc as encodeQrCode, oa as expandAvailabilityRules, Zt as fontOptions, el as formatDateLong, $c as formatDateShort, Yi as formatRangeTitle, tl as formatRelative, Gi as formatTime, Ni as formatTimeOfDay, Ki as formatTimeRange, Fi as fromDateKey, aa as getActiveResourceIds, Vi as getViewRange, zi as getVisibleDays, _t as handleAppShellNavigate, fa as isAllDayLike, gt as isAppShellPathActive, Gt as isLightTheme, Di as isSameDay, Ri as isTimeGridView, En as isTone, ea as layoutOverlaps, Kt as lightThemes, Ft as matchesCommandPaletteShortcut, Gs as meetsPasswordRequirements, ki as minutesOfDay, vt as navigateToPath, Pt as openCommandPalette, xr as openThemeMenu, Mi as parseTime, Xi as rangesOverlap, wn as semanticTones, Hi as shiftDate, Li as snapDate, Ii as snapMinutes, Lr as sortRows, xi as startOfDay, Ei as startOfMonth, Ti as startOfWeek, Xt as themeDefaults, Ut as themeItems, Pi as toDateKey, On as toneClasses, Dn as toneColor, Tn as tones, hn as useAnchoredPopup, qn as useApplyTheme, Yn as useControlSize, _n as useDismiss, xt as useFocusTrap, ir as usePopover, zt as usePortalContainer, yn as useSettings, Qc as useTheme, An as useToast };
