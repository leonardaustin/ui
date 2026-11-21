import { Component as e, Fragment as t, cloneElement as n, createContext as r, createElement as i, forwardRef as a, isValidElement as o, useCallback as s, useContext as c, useEffect as l, useId as u, useImperativeHandle as d, useLayoutEffect as f, useMemo as p, useReducer as m, useRef as h, useState as g } from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
import { Accessibility as b, AlertTriangle as x, ArrowDown as S, ArrowLeft as C, ArrowUp as w, ArrowUpDown as T, BookOpen as E, Calendar as D, Check as O, CheckCircle2 as k, ChevronDown as A, ChevronLeft as j, ChevronRight as M, ChevronsUpDown as N, Columns3 as P, Copy as F, Eye as I, EyeOff as L, GripVertical as R, HandleBottomRight as z, Inbox as B, Info as V, Layers3 as ee, Loader2 as H, LogOut as U, Menu as te, Minus as W, Monitor as G, Moon as K, Palette as ne, PanelLeft as re, PanelLeftDashed as ie, PanelRightClose as ae, PanelRightOpen as oe, Search as q, Settings as se, SlidersHorizontal as ce, Sun as J, Trash2 as le, UploadCloud as ue, X as de, XCircle as fe, Zap as pe } from "lucide-react";
import { createPortal as me } from "react-dom";
//#region src/lib/cn.ts
function he(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = he(n);
		e && (t = t ? `${t} ${e}` : e);
	}
	else for (let n in e) e[n] && (t = t ? `${t} ${n}` : n);
	return t;
}
var ge = new Set([
	"block",
	"contents",
	"flex",
	"grid",
	"hidden",
	"inline",
	"inline-block",
	"inline-flex",
	"table"
]), _e = new Set([
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
]), ve = new Set([
	"text-center",
	"text-left",
	"text-right"
]), ye = new Set(["lowercase", "uppercase"]), be = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), xe = {
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
}, Se = {
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
}, Ce = {
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
}, we = {
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
}, Te = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function Y(...e) {
	return Ee(he(e));
}
function Ee(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = De(r);
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
			r && r.keys.size > 0 && ze(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function De(e) {
	let t = Oe(e), n = t.pop() ?? e, r = n.startsWith("!"), i = ke(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = Ae(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function Oe(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function ke(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function Ae(e) {
	let t = Pe(e);
	if (t) return [...xe[t]];
	let n = Fe(e);
	if (n) return [...Se[n]];
	let r = Ie(e);
	if (r) return [...Ce[r]];
	if (ge.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (Te.has(e)) return ["border-style"];
	let i = Le(e);
	return i ? [...we[i]] : Me(e) || Ne(e) || (_e.has(e) ? ["font-size"] : ve.has(e) ? ["text-align"] : ye.has(e) ? ["text-transform"] : e === "text-ellipsis" || e === "text-clip" ? ["text-overflow"] : e === "text-wrap" || e === "text-nowrap" || e === "text-balance" || e === "text-pretty" ? ["text-wrap"] : /^text-\[(?:length:)?-?[\d.]+(?:px|rem|em|%|vw|vh)\]$/.test(e) ? ["font-size"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : be.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" || e === "flex-col-reverse" || e === "flex-row-reverse" ? ["flex-direction"] : e === "flex-wrap" || e === "flex-nowrap" || e === "flex-wrap-reverse" ? ["flex-wrap"] : e === "flex-shrink" || e.startsWith("flex-shrink-") ? ["flex-shrink"] : e === "flex-grow" || e.startsWith("flex-grow-") ? ["flex-grow"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-x-") ? ["column-gap"] : e.startsWith("gap-y-") ? ["row-gap"] : e.startsWith("gap-") ? ["column-gap", "row-gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : []);
}
var je = {
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
function Me(e) {
	let t = e.match(/^rounded(?:-(tl|tr|br|bl|ss|se|es|ee|t|r|b|l|s|e))?(?:-|$)/);
	if (t) return je[t[1] ?? ""].map((e) => `radius-${e}`);
}
function Ne(e) {
	if (e.startsWith("bg-")) return /^bg-(?:auto|cover|contain)$/.test(e) ? ["background-size"] : /^bg-(?:no-repeat|repeat)(?:-|$)/.test(e) ? ["background-repeat"] : /^bg-(?:fixed|local|scroll)$/.test(e) ? ["background-attachment"] : /^bg-(?:gradient-|linear-|radial-|conic-|none$)/.test(e) ? ["background-image"] : /^bg-(?:center|top|bottom|left|right)(?:-|$)/.test(e) || /^bg-position-/.test(e) ? ["background-position"] : ["background-color"];
}
function Pe(e) {
	return Re(e, xe);
}
function Fe(e) {
	return Re(e, Se);
}
function Ie(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function Le(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function Re(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function ze(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/lib/math.ts
function X(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region src/components/charts/chartUtils.ts
var Be = {
	"text-accent": "var(--accent)",
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-red": "var(--red)",
	"text-yellow": "var(--yellow)"
};
function Ve(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function He(e) {
	return e ? Be[e] ?? e : "var(--accent)";
}
function Ue(e, t) {
	if (e <= 0 || t <= 0) return [];
	if (e === 1 || t === 1) return [0];
	let n = Math.min(e, Math.max(2, Math.floor(t))), r = (e - 1) / (n - 1), i = /* @__PURE__ */ new Set();
	for (let e = 0; e < n; e += 1) i.add(Math.round(e * r));
	return i.add(e - 1), Array.from(i).sort((e, t) => e - t);
}
function We(e) {
	return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function Ge(e, t) {
	let n = String(e ?? "");
	return t === void 0 || t <= 0 || n.length <= t ? n : t <= 3 ? n.slice(0, t) : `${n.slice(0, t - 3)}...`;
}
function Ke(e, t = 10) {
	let n = 0;
	for (let r of e) r === " " ? n += t * .32 : /[A-Z0-9]/.test(r) ? n += t * .62 : /[il.,:;|'`]/.test(r) ? n += t * .28 : /[MW@#%&]/.test(r) ? n += t * .82 : n += t * .54;
	return Math.ceil(n);
}
function qe(e, { maxWidth: t = 220, minWidth: n = 72, paddingX: r = 20 } = {}) {
	return X(e.reduce((e, t) => Math.max(e, Ke(t, 11)), 0) + r, n, t);
}
function Je(e, t, { boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Math.max(1, Math.min(s, r - a * 2)), l = Math.max(1, Math.min(i, n - a * 2)), u = Math.max(a, r - c - a), d = Math.max(a, n - l - a), f = X(e - c / 2, a, u), p = t - l - o, m = p >= a ? "above" : "below";
	return {
		height: l,
		placement: m,
		width: c,
		x: f,
		y: m === "above" ? p : X(t + o, a, d)
	};
}
function Ye({ anchorX: e, anchorY: t, boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Je(e, t, {
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
}, Xe = 600;
function Ze(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function Qe({ data: e, height: t = 240, minValue: n, maxValue: r, startAtZero: i = !1, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 5, ariaLabel: c = "Area chart", className: l }) {
	let d = u(), f = h(null), [p, m] = g(null), b = Math.max(Z.top + Z.bottom + 1, t), x = Xe - Z.left - Z.right, S = Math.max(1, b - Z.top - Z.bottom), C = e.length > 0, w = e[0]?.value ?? 0, T = e[0]?.value ?? 0;
	for (let t of e) t.value < w && (w = t.value), t.value > T && (T = t.value);
	let E = n ?? w, D = r ?? T;
	if (i && n === void 0 && w >= 0 && (E = 0), E === D) {
		if (i || n !== void 0 || r !== void 0) {
			let e = Ze(T);
			n === void 0 && (E = i && w >= 0 ? 0 : w >= 0 ? Math.max(0, w - e) : w - e), r === void 0 && (D = T + e);
		}
		E === D && (D = E + 1);
	}
	let O = D - E, k = a ?? Ve, A = o ?? a ?? ((e) => e.toLocaleString());
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
	].join(" ") : "", F = Ue(e.length, s);
	function I(t) {
		let n = f.current;
		if (!n || e.length === 0) return;
		let r = n.getBoundingClientRect();
		if (r.width <= 0) return;
		let i = ((t.clientX - r.left) / r.width * Xe - Z.left) / x, a = Math.round(i * (e.length - 1)), o = Math.max(0, Math.min(e.length - 1, a));
		m({
			x: j(o),
			y: M(e[o].value),
			index: o
		});
	}
	function L(t) {
		m({
			x: j(t),
			y: M(e[t].value),
			index: t
		});
	}
	function R() {
		m(null);
	}
	return /* @__PURE__ */ y("svg", {
		ref: f,
		width: "100%",
		viewBox: `0 0 ${Xe} ${b}`,
		onPointerMove: I,
		onPointerLeave: R,
		className: Y("select-none", l),
		role: "img",
		"aria-label": c,
		children: [
			/* @__PURE__ */ v("defs", { children: /* @__PURE__ */ y("linearGradient", {
				id: d,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ v("stop", {
					offset: "0%",
					stopColor: "var(--accent)",
					stopOpacity: .3
				}), /* @__PURE__ */ v("stop", {
					offset: "100%",
					stopColor: "var(--accent)",
					stopOpacity: 0
				})]
			}) }),
			/* @__PURE__ */ v("text", {
				x: Z.left - 8,
				y: Z.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(D)
			}),
			/* @__PURE__ */ v("text", {
				x: Z.left - 8,
				y: Z.top + S,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(E)
			}),
			/* @__PURE__ */ v("line", {
				x1: Z.left,
				y1: Z.top + S,
				x2: Z.left + x,
				y2: Z.top + S,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			C && /* @__PURE__ */ v("polygon", {
				points: P,
				fill: `url(#${d})`
			}),
			C && /* @__PURE__ */ v("polyline", {
				points: N,
				fill: "none",
				stroke: "var(--accent)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			e.map((e, t) => /* @__PURE__ */ v("circle", {
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
			F.map((t) => /* @__PURE__ */ v("text", {
				x: j(t),
				y: b - 4,
				textAnchor: "middle",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: e[t].date
			}, `${e[t].date}-${t}`)),
			p && /* @__PURE__ */ y(_, { children: [
				/* @__PURE__ */ v("line", {
					x1: p.x,
					y1: Z.top,
					x2: p.x,
					y2: Z.top + S,
					stroke: "var(--border-strong)",
					strokeWidth: 1,
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ v("circle", {
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
					let n = t.date, r = A(t.value), i = Je(p.x, p.y, {
						boundsHeight: b,
						boundsWidth: Xe,
						height: 28,
						offset: 10,
						width: qe([n, r], {
							maxWidth: 180,
							minWidth: 90
						})
					}), a = i.x + i.width / 2;
					return /* @__PURE__ */ y(_, { children: [
						/* @__PURE__ */ v("rect", {
							x: i.x,
							y: i.y,
							width: i.width,
							height: i.height,
							rx: 4,
							fill: "var(--bg-tooltip, var(--bg-tertiary))",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ v("text", {
							x: a,
							y: i.y + 10,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-secondary)",
							fontSize: 9,
							children: n
						}),
						/* @__PURE__ */ v("text", {
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
var $e = [
	1,
	.85,
	.7,
	.55,
	.45
], et = 600;
function tt({ data: e, height: t, maxValue: n, valueFormatter: r, labelFormatter: i, maxLabelLength: a, labelWidth: o = 160, valueWidth: s = 60, barHeight: c = 28, gap: l = 10, ariaLabel: u = "Horizontal bar chart", className: d }) {
	let [f, p] = g(null), m = e.length, h = Math.max(1, c), _ = Math.max(0, l), b = m > 0 ? m * h + Math.max(0, m - 1) * _ : h, x = Math.max(1, t ?? b), S = t === void 0 ? 1 : x / b, C = h * S, w = _ * S, T = Math.min(3, C / 3), E = Math.max(0, C - T * 2), D = n === void 0 ? Math.max(...e.map((e) => We(e.value)), 1) : Math.max(We(n), 1), O = Math.max(0, o), k = Math.max(0, s), A = Math.max(0, et - O - k), j = r ?? ((e) => e.toLocaleString());
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${et} ${x}`,
		className: Y("select-none", d),
		role: "img",
		"aria-label": u,
		children: e.map((e, t) => {
			let n = t * (C + w), r = D > 0 ? X(We(e.value), 0, D) / D * A : 0, o = f === t, s = i?.(e.label, e, t) ?? e.label, c = Ge(s, a), l = c !== s, u = j(e.value);
			return /* @__PURE__ */ y("g", {
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
					/* @__PURE__ */ v("rect", {
						x: 0,
						y: n,
						width: et,
						height: C,
						fill: "transparent"
					}),
					/* @__PURE__ */ y("text", {
						x: 0,
						y: n + C / 2,
						dominantBaseline: "central",
						fill: o ? "var(--text-primary)" : "var(--text-secondary)",
						fontSize: 11,
						fontWeight: o ? 600 : 400,
						style: { transition: "all 150ms" },
						children: [l && /* @__PURE__ */ v("title", { children: s }), c]
					}),
					/* @__PURE__ */ v("rect", {
						x: O,
						y: n + T,
						width: A,
						height: E,
						fill: "var(--border)",
						rx: 6,
						opacity: .5
					}),
					/* @__PURE__ */ v("rect", {
						x: O,
						y: n + T,
						width: r,
						height: E,
						fill: "var(--accent)",
						rx: 6,
						opacity: o ? 1 : $e[t % $e.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ v("text", {
						x: et,
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
function nt(e, t) {
	let n = e.reduce((e, t) => e + We(t.value), 0), r = 0;
	return e.map((e) => {
		let i = We(e.value), a = n > 0 ? i / n * t : 0, o = t - a, s = r / t * 360 - 90, c = s + a / t * 180, l = n > 0 ? i / n * 100 : 0;
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
function rt({ segments: e, size: t = 180, strokeWidth: n = 28, valueFormatter: r, percentageFormatter: i, showLegend: a = !0, ariaLabel: o = "Donut chart", className: s }) {
	let [c, l] = g(null), u = e.reduce((e, t) => e + We(t.value), 0), d = Math.max(1, t), f = Math.max(1, Math.min(n, d - 1)), p = Math.max(.5, (d - f) / 2), m = nt(e, 2 * Math.PI * p), h = r ?? ((e) => e.toLocaleString()), _ = i ?? ((e) => `${e.toFixed(1)}%`), b = d + 12, x = b / 2;
	return /* @__PURE__ */ y("div", {
		className: Y("flex flex-col items-center gap-4", s),
		children: [/* @__PURE__ */ y("div", {
			className: "relative",
			children: [/* @__PURE__ */ y("svg", {
				width: b,
				height: b,
				viewBox: `0 0 ${b} ${b}`,
				className: "select-none",
				onMouseLeave: () => l(null),
				onPointerLeave: () => l(null),
				role: "img",
				"aria-label": o,
				children: [
					m.map((e, t) => /* @__PURE__ */ v("circle", {
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
						"aria-label": `${e.segment.name}: ${h(We(e.segment.value))} (${_(e.percentage)})`,
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					m.map((e, t) => {
						let n = c === t, r = e.midAngle * Math.PI / 180, i = n ? Math.cos(r) * 6 : 0, a = n ? Math.sin(r) * 6 : 0;
						return /* @__PURE__ */ v("circle", {
							cx: x,
							cy: x,
							r: p,
							fill: "none",
							stroke: He(e.segment.color),
							strokeWidth: n ? f + 4 : f,
							strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
							strokeLinecap: "butt",
							transform: `translate(${i} ${a}) rotate(${e.rotation} ${x} ${x})`,
							opacity: c !== null && !n ? .5 : 1,
							style: { transition: "all 150ms ease-out" },
							className: "pointer-events-none"
						}, e.segment.name);
					}),
					/* @__PURE__ */ v("text", {
						x,
						y: x - 6,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-primary)",
						fontSize: 18,
						fontWeight: 700,
						className: "pointer-events-none",
						children: h(c === null ? u : We(m[c].segment.value))
					}),
					/* @__PURE__ */ v("text", {
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
				let e = m[c], t = e.midAngle * Math.PI / 180, n = p + f / 2 + 20, r = x + Math.cos(t) * n, i = x + Math.sin(t) * n, a = He(e.segment.color), o = h(We(e.segment.value)), s = _(e.percentage);
				return /* @__PURE__ */ v("div", {
					className: "ui-glass ui-glass-popover bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: Ye({
						anchorX: r,
						anchorY: i,
						boundsHeight: b,
						boundsWidth: b,
						height: 30,
						margin: 4,
						offset: 8,
						width: qe([`${e.segment.name} ${o} ${s}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ y("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ v("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: a }
							}),
							/* @__PURE__ */ v("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: e.segment.name
							}),
							/* @__PURE__ */ v("span", {
								className: "text-text-primary text-xs font-semibold",
								children: o
							}),
							/* @__PURE__ */ y("span", {
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
		}), a && /* @__PURE__ */ v("div", {
			className: "relative z-0 flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => /* @__PURE__ */ y("button", {
				type: "button",
				onMouseEnter: () => l(t),
				onMouseLeave: () => l(null),
				onPointerEnter: () => l(t),
				onPointerDown: () => l(t),
				onPointerLeave: () => l(null),
				onFocus: () => l(t),
				onBlur: () => l(null),
				className: Y("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", c !== null && c !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ v("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: He(e.color) }
					}),
					/* @__PURE__ */ v("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ v("span", {
						className: "text-text-primary text-xs font-semibold",
						children: h(We(e.value))
					})
				]
			}, e.name))
		})]
	});
}
//#endregion
//#region src/components/charts/RadarChart.tsx
function it({ data: e, maxValue: t, size: n = 240, rings: r = 4, labelOffset: i = 18, labelFormatter: a, maxLabelLength: o, valueFormatter: s, ariaLabel: c = "Radar chart", className: l }) {
	let [u, d] = g(null), f = Math.max(80, n), p = Math.max(We(t ?? 0), ...e.map((e) => We(e.value)), 1), m = f / 2, h = Math.max(1, m - Math.max(0, i) - 12), _ = e.length > 0 ? 2 * Math.PI / e.length : 0, b = Math.max(1, Math.floor(r)), x = s ?? String, S = e.map((e, t) => {
		let n = a?.(e.label, e, t) ?? e.label, r = Ge(n, o);
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
		let n = X(We(e.value), 0, p) / p * h;
		return C(t * _, n);
	}), T = w.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ y("div", {
		className: Y("relative flex flex-col items-center", l),
		children: [/* @__PURE__ */ y("svg", {
			width: f,
			height: f,
			viewBox: `0 0 ${f} ${f}`,
			className: "select-none",
			role: "img",
			"aria-label": c,
			children: [
				e.length > 0 && Array.from({ length: b }, (t, n) => {
					let r = (n + 1) / b * h;
					return /* @__PURE__ */ v("polygon", {
						points: e.map((e, t) => C(t * _, r)).map((e) => `${e[0]},${e[1]}`).join(" "),
						fill: "none",
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .5
					}, n);
				}),
				e.map((e, t) => {
					let [n, r] = C(t * _, h);
					return /* @__PURE__ */ v("line", {
						x1: m,
						y1: m,
						x2: n,
						y2: r,
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .3
					}, t);
				}),
				e.length > 0 && /* @__PURE__ */ v("polygon", {
					points: T,
					fill: "var(--accent)",
					fillOpacity: .15,
					stroke: "var(--accent)",
					strokeWidth: 2,
					strokeLinejoin: "round"
				}),
				w.map((t, n) => {
					let r = u === n, i = x(e[n].value);
					return /* @__PURE__ */ v("circle", {
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
					let n = h + Math.max(0, i), [r, a] = C(t * _, n), o = S[t], s = Math.max(48, o.displayLabel.length * 6 + 12), c = x(e.value);
					return /* @__PURE__ */ y("g", {
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
						children: [/* @__PURE__ */ v("rect", {
							x: r - s / 2,
							y: a - 10,
							width: s,
							height: 20,
							fill: "transparent"
						}), /* @__PURE__ */ y("text", {
							x: r,
							y: a,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: u === t ? "var(--text-primary)" : "var(--text-tertiary)",
							fontSize: 10,
							fontWeight: u === t ? 600 : 400,
							style: { transition: "all 150ms" },
							children: [o.isTruncated && /* @__PURE__ */ v("title", { children: o.label }), o.displayLabel]
						})]
					}, e.label);
				})
			]
		}), u !== null && /* @__PURE__ */ v("div", {
			className: "ui-glass ui-glass-popover bg-bg-tertiary border-border pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 shadow-lg",
			children: /* @__PURE__ */ y("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ v("span", { className: "bg-accent h-2 w-2 shrink-0 rounded-full" }),
					/* @__PURE__ */ v("span", {
						className: Y("text-text-secondary text-xs whitespace-nowrap"),
						children: S[u].label
					}),
					/* @__PURE__ */ v("span", {
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
function at({ segments: e, size: t = 200, strokeWidth: n = 14, gap: r = 6, valueFormatter: i, percentageFormatter: a, showLegend: o = !0, ariaLabel: s = "Radial bar chart", className: c }) {
	let [l, u] = g(null), [d, f] = g({
		x: 0,
		y: 0
	}), p = h(null), m = l?.index ?? null, _ = Math.max(1, t), b = Math.max(1, Math.min(n, _)), x = Math.max(0, r), S = _ / 2, C = Math.max(0, (_ - 40) / 2), w = i ?? String, T = a ?? ((e) => `${Math.round(e)}%`), E = e.reduce((e, t, n) => C - n * (b + x) > 0 ? n : e, -1);
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
		let t = We(e.max);
		return t <= 0 ? 0 : X(We(e.value) / t, 0, 1);
	}
	function A(e) {
		return k(e) * 100;
	}
	return /* @__PURE__ */ y("div", {
		className: Y("flex flex-col items-center gap-4", c),
		children: [/* @__PURE__ */ y("div", {
			className: "relative",
			ref: p,
			onPointerMove: D,
			children: [/* @__PURE__ */ y("svg", {
				width: _,
				height: _,
				viewBox: `0 0 ${_} ${_}`,
				className: "select-none",
				role: "img",
				"aria-label": s,
				children: [e.map((e, t) => {
					let n = C - t * (b + x);
					if (n <= 0) return null;
					let r = 2 * Math.PI * n, i = r * k(e), a = r - i, o = He(e.color), s = m === t, c = A(e);
					return /* @__PURE__ */ y("g", {
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
						children: [/* @__PURE__ */ v("circle", {
							cx: S,
							cy: S,
							r: n,
							fill: "none",
							stroke: "var(--border)",
							strokeWidth: b,
							opacity: .3
						}), /* @__PURE__ */ v("circle", {
							cx: S,
							cy: S,
							r: n,
							fill: "none",
							stroke: o,
							strokeWidth: s ? b + 4 : b,
							strokeDasharray: `${i} ${a}`,
							strokeLinecap: "round",
							transform: `rotate(-90 ${S} ${S})`,
							opacity: m !== null && !s ? .4 : 1,
							className: "pointer-events-none",
							style: { transition: "all 150ms ease-out" }
						})]
					}, e.label);
				}), E >= 0 && (() => {
					let t = C - E * (b + x) - b / 2;
					return /* @__PURE__ */ v("circle", {
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
			}), m !== null && l?.source === "chart" && (() => {
				let t = e[m];
				if (!t) return null;
				let n = A(t), r = He(t.color), i = T(n), a = `${w(t.value)}/${w(t.max)}`;
				return /* @__PURE__ */ v("div", {
					className: "ui-glass ui-glass-popover bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: Ye({
						anchorX: d.x,
						anchorY: d.y,
						boundsHeight: _,
						boundsWidth: _,
						height: 30,
						margin: 4,
						offset: 8,
						width: qe([`${t.label} ${i} ${a}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ y("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ v("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: r }
							}),
							/* @__PURE__ */ v("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: t.label
							}),
							/* @__PURE__ */ v("span", {
								className: "text-text-primary text-xs font-semibold",
								children: i
							}),
							/* @__PURE__ */ y("span", {
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
		}), o && /* @__PURE__ */ v("div", {
			className: "flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => {
				let n = A(e);
				return /* @__PURE__ */ y("button", {
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
					className: Y("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", m !== null && m !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ v("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: He(e.color) }
						}),
						/* @__PURE__ */ v("span", {
							className: "text-text-secondary text-xs",
							children: e.label
						}),
						/* @__PURE__ */ v("span", {
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
function ot({ data: e, width: t = 60, height: n = 20, minValue: r, maxValue: i, strokeWidth: a = 1.5, padding: o = 1, color: s = "var(--accent)", area: c = !1, areaOpacity: l = .15, ariaLabel: u = "Sparkline chart", className: d }) {
	if (e.length < 2) return null;
	let f = Math.max(1, t), p = Math.max(1, n), m = Math.max(0, Math.min(o, p / 2, f / 2)), h = r ?? Math.min(...e), g = i ?? Math.max(...e), _ = Math.min(h, g), b = Math.max(h, g), x = b - _, S = Math.max(1, f - m * 2), C = Math.max(1, p - m * 2), w = e.map((t, n) => ({
		x: m + n / (e.length - 1) * S,
		y: x === 0 ? p / 2 : m + C - (X(t, _, b) - _) / x * C
	})), T = w.map(({ x: e, y: t }) => `${e},${t}`).join(" "), E = w.length > 0 ? [
		`${w[0].x},${p - m}`,
		...w.map(({ x: e, y: t }) => `${e},${t}`),
		`${w[w.length - 1].x},${p - m}`
	].join(" ") : "";
	return /* @__PURE__ */ y("svg", {
		width: f,
		height: p,
		viewBox: `0 0 ${f} ${p}`,
		className: Y("inline-block", d),
		role: "img",
		"aria-label": u,
		children: [c && /* @__PURE__ */ v("polygon", {
			points: E,
			fill: s,
			opacity: l
		}), /* @__PURE__ */ v("polyline", {
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
}, st = 600, ct = 4;
function lt(e) {
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
function ut(e, t) {
	let n = e[t];
	if (typeof n == "number") return Number.isFinite(n) ? n : 0;
	if (typeof n == "string") {
		let e = Number(n);
		return Number.isFinite(e) ? e : 0;
	}
	return 0;
}
function dt(e, t) {
	return t.reduce((t, n) => t + Math.max(0, ut(e, n.key)), 0);
}
function ft(e, t, n, r, i) {
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
function pt({ data: e, segments: t, height: n = 220, ariaLabel: r = "Stacked bar chart", tooltipRows: i, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 6, barGap: c, minBarWidth: l = 1, className: u }) {
	let [d, f] = g(null), p = Math.max(Q.top + Q.bottom + 1, n), m = st - Q.left - Q.right, h = Math.max(1, p - Q.top - Q.bottom), b = e.reduce((e, n) => Math.max(e, dt(n, t)), 1), x = Math.ceil(b / 2), S = x > 0 && x < b, C = c ?? (e.length > 60 ? 2 : e.length > 30 ? 3 : 6), w = Math.max(1, l), T = e.length > 1 ? Math.max(0, (m - e.length * w) / Math.max(e.length - 1, 1)) : 0, E = e.length > 1 ? Math.min(Math.max(0, C), T) : 0, D = e.length > 0 ? (m - E * Math.max(e.length - 1, 0)) / e.length : 0, O = new Set(Ue(e.length, s)), k = d === null ? null : e[d], A = a ?? Ve, j = o ?? ((e) => e.toLocaleString());
	function M(e) {
		return Q.left + e * (D + E);
	}
	function N(e) {
		return e / b * h;
	}
	return /* @__PURE__ */ y("svg", {
		width: "100%",
		viewBox: `0 0 ${st} ${p}`,
		className: Y("select-none", u),
		role: "img",
		"aria-label": r,
		children: [
			/* @__PURE__ */ v("text", {
				x: Q.left - 8,
				y: Q.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(b)
			}),
			S && /* @__PURE__ */ v("text", {
				x: Q.left - 8,
				y: Q.top + h / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(x)
			}),
			/* @__PURE__ */ v("text", {
				x: Q.left - 8,
				y: Q.top + h,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ v("line", {
				x1: Q.left,
				y1: Q.top + h,
				x2: Q.left + m,
				y2: Q.top + h,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ v("line", {
				x1: Q.left,
				y1: Q.top + h / 2,
				x2: Q.left + m,
				y2: Q.top + h / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, n) => {
				let r = M(n), i = d === n, a = 0, o = t.map((t) => ({
					segment: t,
					value: Math.max(0, ut(e, t.key))
				})).filter(({ value: e }) => e > 0);
				return /* @__PURE__ */ y("g", {
					onMouseEnter: () => f(n),
					onMouseLeave: () => f(null),
					onPointerEnter: () => f(n),
					onPointerDown: () => f(n),
					onPointerLeave: () => f(null),
					onFocus: () => f(n),
					onBlur: () => f(null),
					tabIndex: 0,
					role: "button",
					"aria-label": `${lt(e.date)}: ${j(dt(e, t))}`,
					children: [
						/* @__PURE__ */ v("rect", {
							x: r,
							y: Q.top,
							width: D,
							height: h,
							fill: "transparent"
						}),
						o.map(({ segment: e, value: t }, n) => {
							let s = N(t), c = Q.top + h - a - s, l = n === o.length - 1;
							return a += s, l ? /* @__PURE__ */ v("path", {
								d: ft(r, c, D, s, ct),
								fill: e.color,
								opacity: i ? 1 : e.opacity ?? .9
							}, e.key) : /* @__PURE__ */ v("rect", {
								x: r,
								y: c,
								width: D,
								height: s,
								fill: e.color,
								opacity: i ? 1 : e.opacity ?? .9
							}, e.key);
						}),
						O.has(n) && /* @__PURE__ */ v("text", {
							x: r + D / 2,
							y: p - 5,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: lt(e.date)
						})
					]
				}, `${e.date}-${n}`);
			}),
			k && d !== null && /* @__PURE__ */ v("g", {
				pointerEvents: "none",
				children: (() => {
					let e = M(d) + D / 2, n = i?.(k) ?? t.map((e) => ({
						color: e.color,
						label: e.label,
						value: ut(k, e.key)
					})), r = dt(k, t), a = Je(e, Q.top + h - N(r), {
						boundsHeight: p,
						boundsWidth: st,
						height: 28 + n.length * 15,
						offset: 8,
						width: qe([lt(k.date), ...n.map((e) => `${e.label} ${j(e.value)}`)], {
							maxWidth: 240,
							minWidth: 150
						})
					}), o = a.x + 10, s = a.x + a.width - 10;
					return /* @__PURE__ */ y(_, { children: [
						/* @__PURE__ */ v("line", {
							x1: e,
							y1: Q.top,
							x2: e,
							y2: Q.top + h,
							stroke: "var(--border-strong)",
							strokeWidth: 1,
							strokeDasharray: "3 3"
						}),
						/* @__PURE__ */ v("rect", {
							x: a.x,
							y: a.y,
							width: a.width,
							height: a.height,
							rx: 4,
							fill: "var(--bg-tooltip, var(--bg-tertiary))",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ v("text", {
							x: o,
							y: a.y + 14,
							fill: "var(--text-primary)",
							fontSize: 10,
							fontWeight: 600,
							children: lt(k.date)
						}),
						n.map((e, t) => {
							let n = a.y + 30 + t * 15;
							return /* @__PURE__ */ y("g", { children: [
								e.color && /* @__PURE__ */ v("rect", {
									x: o,
									y: n - 6,
									width: 6,
									height: 6,
									rx: 1,
									fill: e.color
								}),
								/* @__PURE__ */ v("text", {
									x: e.color ? o + 12 : o,
									y: n,
									fill: "var(--text-secondary)",
									fontSize: 10,
									children: e.label
								}),
								/* @__PURE__ */ v("text", {
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
var mt = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], ht = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
}, gt = 600;
function _t({ data: e, height: t = 180, maxValue: n, valueFormatter: r, tooltipValueFormatter: i, labelFormatter: a, maxLabelLength: o, xLabelCount: s = 7, barGap: c = 6, minBarWidth: l = 4, ariaLabel: u = "Vertical bar chart", className: d }) {
	let [f, p] = g(null), m = Math.max(ht.top + ht.bottom + 1, t), h = gt - ht.left - ht.right, b = Math.max(1, m - ht.top - ht.bottom), x = n === void 0 ? Math.max(...e.map((e) => We(e.value)), 1) : Math.max(We(n), 1), S = Math.max(0, c), C = Math.max(1, l), w = e.length > 1 ? Math.max(0, (h - e.length * C) / Math.max(e.length - 1, 1)) : 0, T = e.length > 1 ? Math.min(S, w) : 0, E = e.length > 0 ? Math.max(0, (h - T * Math.max(e.length - 1, 0)) / e.length) : 0, D = r ?? Ve, O = i ?? ((e) => e.toLocaleString()), k = new Set(Ue(e.length, s));
	return /* @__PURE__ */ y("svg", {
		width: "100%",
		viewBox: `0 0 ${gt} ${m}`,
		className: Y("select-none", d),
		role: "img",
		"aria-label": u,
		children: [
			/* @__PURE__ */ v("text", {
				x: ht.left - 6,
				y: ht.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: D(x)
			}),
			/* @__PURE__ */ v("text", {
				x: ht.left - 6,
				y: ht.top + b,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ v("line", {
				x1: ht.left,
				y1: ht.top + b,
				x2: ht.left + h,
				y2: ht.top + b,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ v("line", {
				x1: ht.left,
				y1: ht.top + b / 2,
				x2: ht.left + h,
				y2: ht.top + b / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, t) => {
				let n = ht.left + t * (E + T), r = X(We(e.value), 0, x) / x * b, i = ht.top + b - r, s = f === t, c = a?.(e.label, e, t) ?? e.label, l = Ge(c, o), u = l !== c, d = O(e.value);
				return /* @__PURE__ */ y("g", {
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
						/* @__PURE__ */ v("rect", {
							x: n,
							y: ht.top,
							width: E,
							height: b,
							fill: "transparent"
						}),
						/* @__PURE__ */ v("rect", {
							x: n,
							y: i,
							width: E,
							height: r,
							fill: He(e.color),
							rx: 6,
							opacity: s ? 1 : mt[t % mt.length],
							style: { transition: "all 150ms" }
						}),
						k.has(t) && /* @__PURE__ */ y("text", {
							x: n + E / 2,
							y: m - 4,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: [u && /* @__PURE__ */ v("title", { children: c }), l]
						}),
						s && (() => {
							let e = Je(n + E / 2, i, {
								boundsHeight: m,
								boundsWidth: gt,
								height: 24,
								offset: 8,
								width: qe([c, d], {
									maxWidth: 180,
									minWidth: 72
								})
							}), t = e.x + e.width / 2;
							return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("rect", {
								x: e.x,
								y: e.y,
								width: e.width,
								height: e.height,
								rx: 4,
								fill: "var(--bg-tooltip, var(--bg-tertiary))",
								stroke: "var(--border)",
								strokeWidth: 1
							}), /* @__PURE__ */ v("text", {
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
function vt(e, t) {
	if (e.active !== void 0) return e.active;
	if (!t) return !1;
	if (e.end ?? e.path === "/") return t === e.path;
	let n = e.path.endsWith("/") ? e.path : `${e.path}/`;
	return t === e.path || t.startsWith(n);
}
function yt(e, t, n, r) {
	let i = e.currentTarget.getAttribute("target");
	e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || i && i !== "_self" || (n && (e.preventDefault(), n(t)), r?.());
}
function bt(e, t) {
	if (t) {
		t(e);
		return;
	}
	typeof window < "u" && window.location.assign(e);
}
//#endregion
//#region src/components/app-shell/BottomNav.tsx
function xt({ items: e, currentPath: t, onNavigate: n, className: r }) {
	return e.length === 0 ? null : /* @__PURE__ */ v("nav", {
		className: Y("ui-glass ui-glass-chrome bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ v("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = vt(e, t);
				return /* @__PURE__ */ v("li", { children: /* @__PURE__ */ y("a", {
					href: e.path,
					onClick: (t) => yt(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					"aria-label": e.shortLabel && e.shortLabel !== e.label ? `${e.shortLabel}, ${e.label}` : void 0,
					className: Y("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
					children: [/* @__PURE__ */ v(e.icon, {
						className: "h-5 w-5",
						"aria-hidden": "true"
					}), /* @__PURE__ */ v("span", {
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
var St = "a[href], button:not([disabled]), input:not([disabled]):not([type=\"hidden\"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function Ct(e, t, { initialFocusRef: n, returnFocusRef: r } = {}) {
	l(() => {
		let i = e.current;
		if (!t || !i) return;
		let a = i.ownerDocument, o = a.activeElement, s = r?.current, c = () => {
			let e = Array.from(i.querySelectorAll(St)).filter((e) => e.tabIndex >= 0 && !e.matches(":disabled") && !e.closest("[hidden], [inert]") && e.getClientRects().length > 0);
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
function wt(e) {
	return { parent: e };
}
var Tt = [];
function Et(e, t) {
	for (let n = t.parent; n; n = n.parent) if (n === e) return !0;
	return !1;
}
function Dt(e) {
	if (e.key !== "Escape" || e.defaultPrevented) return;
	let t = e.currentTarget;
	for (let n = Tt.length - 1; n >= 0; n--) if (Tt[n].doc === t) {
		Tt[n].onEscape(e);
		return;
	}
}
function Ot(e, t, n = document) {
	let r = {
		node: e,
		doc: n,
		onEscape: t
	};
	Tt.some((e) => e.doc === n) || n.addEventListener("keydown", Dt);
	let i = Tt.findIndex((t) => Et(e, t.node));
	return i === -1 ? Tt.push(r) : Tt.splice(i, 0, r), () => {
		let e = Tt.indexOf(r);
		e !== -1 && (Tt.splice(e, 1), Tt.some((e) => e.doc === n) || n.removeEventListener("keydown", Dt));
	};
}
var kt = /* @__PURE__ */ new Map();
function At(e = document) {
	let t = kt.get(e);
	t || (t = {
		count: 0,
		overflow: e.body.style.overflow
	}, kt.set(e, t), e.body.style.overflow = "hidden"), t.count++;
	let n = !1;
	return () => {
		if (n) return;
		n = !0;
		let t = kt.get(e);
		t && (t.count--, !(t.count > 0) && (kt.delete(e), e.body.style.overflow = t.overflow));
	};
}
//#endregion
//#region src/hooks/useOverlayStack.ts
var jt = r(null);
function Mt(e, t, n) {
	let r = c(jt), [i] = g(() => wt(r)), a = h(t);
	return f(() => {
		a.current = t;
	}), l(() => {
		if (e) return Ot(i, (e) => a.current(e), n?.current?.ownerDocument ?? document);
	}, [
		e,
		i,
		n
	]), i;
}
function Nt(e, t) {
	l(() => {
		if (e) return At(t?.current?.ownerDocument ?? document);
	}, [e, t]);
}
//#endregion
//#region src/components/app-shell/commandPaletteEvents.ts
var Pt = "open-command-palette", Ft = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function It(e = Pt) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
function Lt(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
//#region src/components/app-shell/CommandPalette.tsx
function Rt(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function zt({ items: e, eventName: t = Pt, shortcut: n = Ft, placeholder: r = "Search pages...", emptyLabel: i = "No results found", onNavigate: a, onSelect: o }) {
	let [c, d] = g(!1), [f, p] = g(""), [m, _] = g(0), b = h(null), x = h(null), S = u();
	Ct(x, c), Mt(c, () => d(!1), x);
	let C = e.filter((e) => Rt(e, f)), w = s(() => {
		d(!0), p(""), _(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	l(() => {
		let e = (e) => {
			Lt(e, n) && (e.preventDefault(), c ? d(!1) : w());
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
		p(e), _(0);
	}
	function E(e) {
		o?.(e), bt(e.path, a), d(!1);
	}
	function D(e) {
		e.key === "ArrowDown" ? (e.preventDefault(), _((e) => Math.min(e + 1, C.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), _((e) => Math.max(e - 1, 0))) : e.key === "Enter" && C[m] && E(C[m]);
	}
	return c ? /* @__PURE__ */ y("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh]",
		children: [/* @__PURE__ */ v("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: () => d(!1)
		}), /* @__PURE__ */ y("div", {
			ref: x,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Command palette",
			className: "ui-glass ui-glass-popover bg-bg-secondary border-border animate-scale-in relative z-50 mx-4 w-full max-w-[520px] overflow-hidden rounded-xl border shadow-lg",
			onKeyDown: D,
			children: [/* @__PURE__ */ y("div", {
				className: "border-border flex items-center gap-3 border-b px-4",
				children: [
					/* @__PURE__ */ v(q, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
					/* @__PURE__ */ v("input", {
						ref: b,
						type: "text",
						role: "combobox",
						"aria-expanded": C.length > 0,
						"aria-controls": S,
						"aria-activedescendant": C[m] ? `${S}-${m}` : void 0,
						"aria-autocomplete": "list",
						"aria-label": "Search pages",
						value: f,
						onChange: (e) => T(e.target.value),
						placeholder: r,
						className: "text-text-primary placeholder:text-text-disabled h-11 flex-1 bg-transparent text-sm focus:outline-none"
					}),
					/* @__PURE__ */ v("kbd", {
						className: "text-2xs bg-bg-tertiary text-text-tertiary border-border hidden items-center rounded border px-1.5 py-0.5 font-mono font-medium sm:inline-flex",
						children: "Esc"
					})
				]
			}), /* @__PURE__ */ v("ul", {
				id: S,
				role: "listbox",
				"aria-label": "Pages",
				className: "max-h-[320px] overflow-y-auto px-2 py-2",
				children: C.length === 0 ? /* @__PURE__ */ v("li", {
					className: "text-text-tertiary px-3 py-6 text-center text-xs",
					children: i
				}) : C.map((e, t) => /* @__PURE__ */ y("li", {
					id: `${S}-${t}`,
					role: "option",
					"aria-selected": t === m,
					onClick: () => E(e),
					className: Y("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === m ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
					children: [
						/* @__PURE__ */ v("span", {
							className: "shrink-0 opacity-60",
							children: /* @__PURE__ */ v(e.icon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ v("span", {
							className: "min-w-0 flex-1 text-xs font-medium",
							children: e.label
						}),
						e.badge && /* @__PURE__ */ v("span", {
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
var Bt = r(null);
function Vt() {
	return c(Bt);
}
function Ht(e) {
	let [t, n] = g(null);
	return [t, s((t) => {
		e.current = t, n(t);
	}, [e])];
}
//#endregion
//#region src/components/app-shell/MobileDrawer.tsx
function Ut({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ v(_, { children: e.logo }) : /* @__PURE__ */ y("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ v(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ v("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function Wt({ open: e, onClose: t, items: n, topBarNavItems: r = [], topBarNavLabel: i = "Primary", brand: a, currentPath: o, onNavigate: s, headerActions: c, className: l }) {
	let u = h(null), [d, f] = Ht(u);
	Ct(u, e);
	let p = Mt(e, () => t(), u);
	if (Nt(e, u), !e) return null;
	let m = r.length > 0;
	return /* @__PURE__ */ v(jt.Provider, {
		value: p,
		children: /* @__PURE__ */ v(Bt.Provider, {
			value: d,
			children: /* @__PURE__ */ y("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ v("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: t
				}), /* @__PURE__ */ y("div", {
					ref: f,
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Navigation",
					className: Y("ui-glass ui-glass-chrome bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", l),
					children: [
						/* @__PURE__ */ y("div", {
							className: "border-border flex h-11 items-center justify-between border-b px-4",
							children: [/* @__PURE__ */ v(Ut, { brand: a }), /* @__PURE__ */ v("button", {
								type: "button",
								onClick: t,
								className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
								"aria-label": "Close menu",
								children: /* @__PURE__ */ v(de, { className: "h-4 w-4" })
							})]
						}),
						c && /* @__PURE__ */ v("div", {
							className: "border-border border-b px-4 py-2",
							children: c
						}),
						/* @__PURE__ */ y("nav", {
							className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2",
							children: [m && /* @__PURE__ */ y("div", {
								className: "border-border mb-2 border-b pb-2",
								children: [/* @__PURE__ */ v("div", {
									className: "text-text-tertiary px-3 py-1 text-2xs font-medium uppercase",
									children: i
								}), /* @__PURE__ */ v("ul", {
									className: "space-y-0.5",
									"aria-label": i,
									children: r.map((e) => {
										let n = e.icon, r = vt(e, o), i = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
										return /* @__PURE__ */ v("li", { children: /* @__PURE__ */ y("a", {
											href: e.href ?? e.path,
											target: e.target,
											rel: i,
											onClick: (n) => {
												if (e.reloadDocument) {
													t();
													return;
												}
												yt(n, e.path, s, t);
											},
											"aria-current": r ? "page" : void 0,
											className: Y("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", r ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
											children: [
												n && /* @__PURE__ */ v(n, { className: "h-4 w-4" }),
												/* @__PURE__ */ v("span", {
													className: "min-w-0 flex-1 text-sm",
													children: e.label
												}),
												e.badge && /* @__PURE__ */ v("span", {
													className: "shrink-0",
													children: e.badge
												})
											]
										}) }, `${e.label}-${e.path}`);
									})
								})]
							}), /* @__PURE__ */ v("ul", {
								className: "space-y-0.5",
								children: n.map((e) => {
									let n = vt(e, o);
									return /* @__PURE__ */ v("li", { children: /* @__PURE__ */ y("a", {
										href: e.path,
										onClick: (n) => yt(n, e.path, s, t),
										"aria-current": n ? "page" : void 0,
										className: Y("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
										children: [
											/* @__PURE__ */ v(e.icon, { className: "h-4 w-4" }),
											/* @__PURE__ */ v("span", {
												className: "min-w-0 flex-1 text-sm",
												children: e.label
											}),
											e.badge && /* @__PURE__ */ v("span", {
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
var Gt = [
	{
		value: "dark",
		label: "Dark",
		icon: K,
		preview: {
			bg: "#0d0f12",
			fg: "#2a2e38"
		}
	},
	{
		value: "light",
		label: "Light",
		icon: J,
		preview: {
			bg: "#f5f5f5",
			fg: "#d4d4d8"
		}
	},
	{
		value: "lightInverted",
		label: "Light Inverted",
		icon: J,
		preview: {
			bg: "#f1f2f4",
			fg: "#ffffff"
		}
	},
	{
		value: "monokai",
		label: "Monokai",
		icon: ne,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: G,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: pe,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: pe,
		preview: {
			bg: "#e4e4e7",
			fg: "#d4d4d8"
		}
	},
	{
		value: "hashiTheme",
		label: "HashiTheme",
		icon: E,
		preview: {
			bg: "#ffffff",
			fg: "#364153"
		}
	},
	{
		value: "glassDark",
		label: "Glass Dark",
		icon: ee,
		preview: {
			bg: "#1e2035",
			fg: "#272d40"
		}
	},
	{
		value: "glassLight",
		label: "Glass Light",
		icon: ee,
		preview: {
			bg: "#ecebf4",
			fg: "#f7f8fc"
		}
	}
], Kt = new Set([
	"light",
	"lightInverted",
	"cyberBrutalLight",
	"hashiTheme",
	"glassLight"
]);
function qt(e) {
	return Kt.has(e);
}
var Jt = Gt.filter((e) => qt(e.value)), Yt = Gt.filter((e) => !qt(e.value)), Xt = {
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
}, Zt = {
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
}, Qt = {
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
}, $t = {
	...Xt,
	borderRadius: 12
}, en = {
	dark: Xt,
	light: Xt,
	lightInverted: Xt,
	monokai: Xt,
	solarized: Xt,
	cyberBrutalDark: Zt,
	cyberBrutalLight: Zt,
	hashiTheme: Qt,
	glassDark: $t,
	glassLight: $t
}, tn = [
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
], nn = [
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
], rn = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, an = [
	"bottom",
	"top",
	"right",
	"left"
];
function on(e, t, n) {
	switch (n) {
		case "top": return e.top - t.top;
		case "bottom": return t.bottom - e.bottom;
		case "left": return e.left - t.left;
		case "right": return t.right - e.right;
	}
}
function sn(e, t, n, r) {
	return Math.min(Math.max(e, n), r - t);
}
function cn(e, t, n, r) {
	return r === "start" ? e : r === "end" ? t - n : (e + t) / 2 - n / 2;
}
function ln(e, t, { size: { width: n, height: r }, bounds: i, margin: a, gap: o, align: s = "center" }) {
	return e === "top" || e === "bottom" ? {
		left: sn(cn(t.left, t.right, n, s), n, i.left + a, i.right - a),
		top: e === "bottom" ? t.bottom + o : t.top - o - r
	} : {
		left: e === "right" ? t.right + o : t.left - o - n,
		top: sn(cn(t.top, t.bottom, r, s), r, i.top + a, i.bottom - a)
	};
}
function un(e, t, n) {
	let { size: { width: r, height: i }, bounds: a, margin: o } = n, s = a.left + o, c = a.right - o, l = a.top + o, u = a.bottom - o;
	if (r > c - s || i > u - l) return null;
	let { left: d, top: f } = ln(e, t, n);
	return d >= s && d + r <= c && f >= l && f + i <= u ? {
		side: e,
		left: d,
		top: f
	} : null;
}
function dn(e, t, n) {
	if (!t) return null;
	let { bounds: r } = n;
	if (!(t.right > r.left && t.left < r.right && t.bottom > r.top && t.top < r.bottom)) return null;
	let i = e === "auto" ? [...an].sort((e, n) => on(t, r, n) - on(t, r, e)) : [e, rn[e]];
	for (let e of i) {
		let r = un(e, t, n);
		if (r) return r;
	}
	return null;
}
function fn(e, t, n, r) {
	return Math.max(Math.min(e, r - t), n);
}
function pn(e, t, n) {
	if (n.flip === !1) return {
		side: e,
		...ln(e, t, n)
	};
	let r = dn(e, t, n);
	if (r) return r;
	let { size: { width: i, height: a }, bounds: o, margin: s } = n, c = rn[e], l = on(t, o, c) > on(t, o, e) ? c : e, { left: u, top: d } = ln(l, t, n);
	return {
		side: l,
		left: fn(u, i, o.left + s, o.right - s),
		top: fn(d, a, o.top + s, o.bottom - s)
	};
}
//#endregion
//#region src/hooks/useAnchoredPopup.ts
function mn(e, t) {
	let n = {
		left: Math.max(e.left, t.left),
		top: Math.max(e.top, t.top),
		right: Math.min(e.right, t.right),
		bottom: Math.min(e.bottom, t.bottom)
	};
	return n.left < n.right && n.top < n.bottom ? n : null;
}
function hn(e, t) {
	let n = mn(e.getBoundingClientRect(), t), r = e.ownerDocument.defaultView;
	for (let t = e.parentElement; n && t && t !== e.ownerDocument.documentElement; t = t.parentElement) {
		let e = r?.getComputedStyle(t);
		e && (e.overflowX !== "visible" || e.overflowY !== "visible") && (n = mn(n, t.getBoundingClientRect()));
	}
	return n !== null;
}
function gn(e) {
	let t = e.createElement("div");
	return t.setAttribute("aria-hidden", "true"), t.style.cssText = "position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none", t;
}
function _n(e) {
	let t = null;
	return {
		measure() {
			let n = e.parentElement;
			if (!n) return {
				left: 0,
				top: 0
			};
			t?.parentElement !== n && (t?.remove(), t = gn(e.ownerDocument), n.appendChild(t));
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
var vn = (e, t) => e.length !== t.length || e.some((e, n) => Math.abs(e - t[n]) > .5);
function yn(e, t, n, { side: r, align: i = "center", gap: a = 4, margin: o = 8, onAnchorHidden: s, matchAnchorWidth: c = !1, flip: l = !0, minSize: u = 120 }) {
	let d = h(s);
	f(() => {
		d.current = s;
	}), f(() => {
		let s = n.current;
		if (!e || !s) return;
		let f = s.ownerDocument, p = f.defaultView ?? window, m = _n(s), h = [], g = (e) => {
			let t = e.getBoundingClientRect(), n = m.measure();
			return [
				t.left,
				t.top,
				t.width,
				t.height,
				n.left,
				n.top
			];
		}, _ = (e) => {
			let n = t.current;
			if (!n) return;
			let m = f.documentElement, _ = {
				left: 0,
				top: 0,
				right: m.clientWidth || p.innerWidth,
				bottom: m.clientHeight || p.innerHeight
			};
			if (e && d.current && !hn(n, _)) {
				d.current();
				return;
			}
			let v = n.getBoundingClientRect();
			if (c) {
				let e = n instanceof HTMLElement ? n.offsetWidth : v.width;
				s.style.width = `${e}px`;
			}
			let y = r === "top" || r === "bottom";
			if (!l) {
				let e = on(v, _, r) - a - o;
				s.style[y ? "maxHeight" : "maxWidth"] = `${Math.max(Math.floor(e), u)}px`;
			}
			let b = pn(r, v, {
				size: {
					width: s.offsetWidth,
					height: s.offsetHeight
				},
				bounds: _,
				margin: o,
				gap: a,
				align: i,
				flip: l
			});
			h = g(n), s.style.left = `${b.left - h[4]}px`, s.style.top = `${b.top - h[5]}px`, s.dataset.side = b.side;
		}, v = () => {
			let e = t.current;
			e && vn(g(e), h) && _(!1);
		}, y = 0, b = () => {
			v(), y = p.requestAnimationFrame(b);
		}, x = (e) => {
			e.target instanceof Node && s.contains(e.target) || _(!0);
		}, S = () => _(!0);
		_(!1), p.addEventListener("resize", S), p.addEventListener("scroll", x, !0);
		let C = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => _(!1));
		return C?.observe(s), t.current && C?.observe(t.current), f.addEventListener("animationend", v, !0), f.addEventListener("transitionend", v, !0), y = p.requestAnimationFrame(b), () => {
			p.removeEventListener("resize", S), p.removeEventListener("scroll", x, !0), f.removeEventListener("animationend", v, !0), f.removeEventListener("transitionend", v, !0), p.cancelAnimationFrame(y), C?.disconnect(), m.release(), l || (s.style.maxHeight = "", s.style.maxWidth = "");
		};
	}, [
		e,
		t,
		n,
		r,
		i,
		a,
		o,
		c,
		l,
		u
	]);
}
function bn(e, t, n, r) {
	let i = h(r);
	f(() => {
		i.current = r;
	}), f(() => {
		let r = n.current;
		if (!e || !r) return;
		let a = r.ownerDocument, o = a.defaultView ?? window, s = _n(r), c = [], l = () => {
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
			if (!vn(u, c)) return;
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
function xn(e, t, n, r, i) {
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
	]), Mt(e, () => t("escape"), n[0]);
}
//#endregion
//#region src/providers/SettingsContext.ts
var Sn = r({
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
function Cn() {
	return c(Sn);
}
//#endregion
//#region src/components/ui/Avatar.tsx
var wn = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function Tn(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function En(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function Dn({ name: e, src: t, size: n = "md", className: r }) {
	return /* @__PURE__ */ v("div", {
		className: Y("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", wn[n], r),
		style: { backgroundColor: t ? void 0 : En(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ v("img", {
			src: t,
			alt: e,
			className: "h-full w-full rounded-full object-cover"
		}) : Tn(e)
	});
}
//#endregion
//#region src/lib/tones.ts
var On = {
	success: "green",
	warning: "yellow",
	danger: "red",
	info: "blue",
	neutral: "gray"
}, kn = {
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
function An(e) {
	return typeof e == "string" && (Object.prototype.hasOwnProperty.call(kn, e) || Object.prototype.hasOwnProperty.call(On, e));
}
function jn(e) {
	return Object.prototype.hasOwnProperty.call(On, e) ? On[e] : e;
}
function Mn(e) {
	return kn[jn(e)];
}
//#endregion
//#region src/components/ui/Toast.tsx
var Nn = r({ toast: () => {} });
function Pn() {
	return c(Nn);
}
function Fn({ children: e }) {
	let [t, n] = g([]), r = h(0), i = s((e, t, i = 4e3) => {
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
	return /* @__PURE__ */ y(Nn.Provider, {
		value: { toast: i },
		children: [e, /* @__PURE__ */ v("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ v(Rn, {
				toast: e,
				onDismiss: () => a(e.id)
			}, e.id))
		})]
	});
}
var In = {
	success: k,
	error: fe,
	warning: x,
	info: V
}, Ln = {
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
};
function Rn({ toast: e, onDismiss: t }) {
	let [n, r] = g(100), i = In[e.type], a = Mn(Ln[e.type]), o = e.type === "error" || e.type === "warning", s = h(t);
	l(() => {
		s.current = t;
	}, [t]);
	let c = h(!1), u = h(!1);
	return l(() => {
		if (!Number.isFinite(e.duration) || e.duration <= 0) return;
		let t = e.duration, n = Date.now(), i = setInterval(() => {
			let a = Date.now();
			!c.current && !u.current && (t -= a - n), n = a;
			let o = Math.max(0, t / e.duration * 100);
			r(o), o <= 0 && (s.current(), clearInterval(i));
		}, 50);
		return () => clearInterval(i);
	}, [e.duration]), /* @__PURE__ */ y("div", {
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
		className: "ui-glass ui-glass-popover bg-bg-secondary border-border animate-slide-down pointer-events-auto relative w-80 overflow-hidden rounded-lg border shadow-lg",
		children: [
			/* @__PURE__ */ v("div", { className: Y("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", a.dot) }),
			/* @__PURE__ */ y("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ v(i, { className: Y("h-4 w-4 shrink-0", a.text) }),
					e.title ? /* @__PURE__ */ y("div", {
						className: "text-text-primary flex-1 text-xs",
						children: [/* @__PURE__ */ v("strong", {
							className: "block font-semibold",
							children: e.title
						}), /* @__PURE__ */ v("p", { children: e.message })]
					}) : /* @__PURE__ */ v("p", {
						className: "text-text-primary flex-1 text-xs",
						children: e.message
					}),
					/* @__PURE__ */ v("button", {
						type: "button",
						onClick: t,
						"aria-label": "Dismiss notification",
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ v(de, {
							className: "h-3 w-3",
							"aria-hidden": "true"
						})
					})
				]
			}),
			/* @__PURE__ */ v("div", {
				className: "bg-bg-tertiary mx-3 mb-1 h-0.5 overflow-hidden rounded-md",
				children: /* @__PURE__ */ v("div", {
					className: "bg-border h-full rounded-md transition-all duration-[100ms]",
					style: { width: `${n}%` }
				})
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/Sidebar.tsx
var zn = 140, Bn = 400, Vn = 48, Hn = {
	side: "right",
	align: "end",
	gap: 6
};
function Un({ item: e, collapsed: t, currentPath: n, onNavigate: r }) {
	let i = vt(e, n);
	return /* @__PURE__ */ y("a", {
		href: e.path,
		onClick: (t) => yt(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: Y("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: t ? e.label : void 0,
		children: [
			i && /* @__PURE__ */ v("div", {
				className: "bg-accent absolute left-0 w-0.5 rounded-md",
				style: {
					top: "0.3em",
					bottom: "0.3em"
				}
			}),
			/* @__PURE__ */ v("span", {
				className: "shrink-0",
				children: /* @__PURE__ */ v(e.icon, { className: "h-3.5 w-3.5" })
			}),
			!t && /* @__PURE__ */ v("span", {
				className: "min-w-0 flex-1 truncate text-xs",
				children: e.label
			}),
			!t && e.badge && /* @__PURE__ */ v("span", {
				className: "ml-auto shrink-0",
				children: e.badge
			})
		]
	});
}
function Wn({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ v("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ y("div", {
		className: Y("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ v(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ v("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ v("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function Gn(e) {
	return e.role ?? e.email;
}
function Kn({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: i, signOutPath: a, signOutLabel: o = "Sign out", onNavigate: c }) {
	let [l, u] = g(!1), d = Vt(), [f, p] = g(() => Math.min(n, Math.max(t.length - 1, 0))), m = h(null), b = h(null), x = s(() => u(!1), []);
	xn(l, x, [b], [m]), yn(l, m, b, {
		...Hn,
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
		u(!1), i ? i() : a && bt(a, c);
	}
	return S ? /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y("button", {
		type: "button",
		ref: m,
		onClick: w,
		className: Y("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? S.name : void 0,
		children: [/* @__PURE__ */ v(Dn, {
			name: S.name,
			src: S.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ v("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: S.name
			}), Gn(S) && /* @__PURE__ */ v("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: Gn(S)
			})]
		}), /* @__PURE__ */ v(N, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && me(/* @__PURE__ */ y("div", {
		ref: b,
		className: "ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-56 rounded-md border py-1 shadow-lg",
		children: [
			/* @__PURE__ */ v("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accounts"
			}),
			t.map((e, t) => /* @__PURE__ */ y("button", {
				type: "button",
				onClick: () => T(e, t),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-8 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ v(Dn, {
						name: e.name,
						src: e.avatarSrc,
						size: "sm"
					}),
					/* @__PURE__ */ y("div", {
						className: "min-w-0 flex-1 text-left",
						children: [/* @__PURE__ */ v("p", {
							className: "text-text-primary truncate text-xs leading-tight",
							children: e.name
						}), e.email && /* @__PURE__ */ v("p", {
							className: "text-2xs text-text-tertiary truncate leading-tight",
							children: e.email
						})]
					}),
					t === f && /* @__PURE__ */ v(O, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, `${e.name}-${e.email ?? t}`)),
			C && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ y("button", {
				type: "button",
				onClick: E,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ v(U, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ v("span", { children: o })]
			})] })
		]
	}), d ?? document.body)] }) : null;
}
function qn({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: i }) {
	let [a, o] = g(!1), c = Vt(), l = h(null), u = h(null), { accentColor: d, setAccentColor: f, reducedMotion: p, setReducedMotion: m, colorMode: x, setColorMode: S } = Cn(), { toast: C } = Pn(), w = !!(t || r), T = s(() => o(!1), []);
	xn(a, T, [u], [l]), yn(a, l, u, {
		...Hn,
		onAnchorHidden: T
	});
	function E() {
		o(!a);
	}
	function D() {
		o(!1), r ? r() : t && bt(t, i);
	}
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ y("button", {
		type: "button",
		ref: l,
		onClick: E,
		className: Y("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", a ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ v(se, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ v("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), a && me(/* @__PURE__ */ y("div", {
		ref: u,
		className: "ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-64 rounded-md border py-1 shadow-lg",
		children: [
			/* @__PURE__ */ v("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Mode"
			}),
			[
				{
					value: "dark",
					label: "Dark",
					Icon: K
				},
				{
					value: "light",
					label: "Light",
					Icon: J
				},
				{
					value: "system",
					label: "System",
					Icon: G
				}
			].map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ y("button", {
				type: "button",
				onClick: () => S(e),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ v(n, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ v("span", {
						className: "flex-1 text-left",
						children: t
					}),
					x === e && /* @__PURE__ */ v(O, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, e)),
			/* @__PURE__ */ v("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ v("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accent"
			}),
			/* @__PURE__ */ v("div", {
				className: "flex flex-wrap gap-1.5 px-3 pb-2",
				children: nn.map((e) => /* @__PURE__ */ v("button", {
					type: "button",
					onClick: () => f(e.value),
					className: Y("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", d === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
					style: {
						backgroundColor: e.color,
						...d === e.value ? { "--utility-ring-color": e.color } : {}
					},
					title: e.value.charAt(0).toUpperCase() + e.value.slice(1)
				}, e.value))
			}),
			/* @__PURE__ */ v("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ y("button", {
				type: "button",
				onClick: () => {
					m(!p), C("info", p ? "Animations enabled" : "Animations disabled");
				},
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ v(b, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ v("span", {
						className: "flex-1 text-left",
						children: "Reduced Motion"
					}),
					p && /* @__PURE__ */ v(O, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}),
			w && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ y("button", {
				type: "button",
				onClick: D,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ v(se, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ v("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), c ?? document.body)] });
}
function Jn({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: i, onSignOut: a, signOutPath: o, signOutLabel: c, settingsPath: l, settingsLabel: u, onOpenSettings: d, currentPath: f, onNavigate: p, headerActions: m, className: _ }) {
	let { sidebarCollapsed: b, sidebarWidth: x, setSidebarWidth: S } = Cn(), [C, w] = g(/* @__PURE__ */ new Set()), T = h(null), E = h(!1), [D, O] = g(!1), k = s((e) => {
		if (b) return;
		e.preventDefault(), E.current = !0, O(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!E.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			S(Math.max(zn, Math.min(n, Bn)));
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
	return /* @__PURE__ */ y("aside", {
		ref: T,
		className: Y("ui-glass ui-glass-chrome bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", !D && "transition-[width] duration-[200ms] ease-out", "border-border", _),
		style: { width: b ? Vn : x },
		children: [
			!b && /* @__PURE__ */ v("div", {
				onMouseDown: k,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ v("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ v(Wn, {
					brand: t,
					collapsed: b
				})
			}),
			!b && m && /* @__PURE__ */ v("div", {
				className: "border-border shrink-0 border-b px-2 py-2",
				children: m
			}),
			/* @__PURE__ */ v("nav", {
				className: "flex-1 overflow-y-auto px-2 py-2",
				children: e.map((e, t) => {
					let n = C.has(e.title);
					return /* @__PURE__ */ y("div", {
						className: "mb-4",
						children: [b ? t > 0 && /* @__PURE__ */ v("hr", { className: "border-border mx-auto my-1.5 w-4/5" }) : /* @__PURE__ */ y("button", {
							type: "button",
							onClick: () => j(e.title),
							className: "text-2xs-f text-text-tertiary hover:text-text-secondary font-label flex w-full cursor-pointer items-center gap-1 px-2 text-left font-semibold tracking-wider uppercase",
							style: {
								paddingTop: "0.35em",
								paddingBottom: "0.35em"
							},
							children: [/* @__PURE__ */ v("span", {
								className: "min-w-0 flex-1",
								children: e.title
							}), /* @__PURE__ */ v(A, { className: Y("h-3 w-3 shrink-0 transition-transform", n && "-rotate-90") })]
						}), (!n || b) && /* @__PURE__ */ v("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ v("li", { children: /* @__PURE__ */ v(Un, {
								item: e,
								collapsed: b,
								currentPath: f,
								onNavigate: p
							}) }, e.path))
						})]
					}, e.title);
				})
			}),
			/* @__PURE__ */ y("div", {
				className: "shrink-0 px-2 py-1.5",
				children: [/* @__PURE__ */ v(qn, {
					collapsed: b,
					settingsPath: l,
					settingsLabel: u,
					onOpenSettings: d,
					onNavigate: p
				}), n.length > 0 && /* @__PURE__ */ v("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ v(Kn, {
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
function Yn(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xn({ homeLabel: e = "Dashboard", labels: t = {}, parents: n = {}, currentPath: r = "/", onNavigate: i, className: a }) {
	let o = r.split("?")[0].split("/").filter(Boolean), s = [{
		label: e,
		path: "/"
	}, ...o.map((e, r) => {
		let i = o[r - 1];
		return {
			label: t[e] || n[i] || Yn(e),
			path: "/" + o.slice(0, r + 1).join("/")
		};
	})];
	return /* @__PURE__ */ v("nav", {
		"aria-label": "Breadcrumb",
		className: Y("font-navigation flex items-center gap-1 text-xs", a),
		children: /* @__PURE__ */ v("ol", {
			className: "flex items-center gap-1",
			children: s.map((e, t) => {
				let n = t === s.length - 1;
				return /* @__PURE__ */ y("li", {
					className: "flex items-center gap-1",
					children: [t > 0 && /* @__PURE__ */ v(M, { className: "text-text-tertiary h-3 w-3" }), n ? /* @__PURE__ */ v("span", {
						className: "text-text-primary font-medium",
						children: e.label
					}) : /* @__PURE__ */ v("a", {
						href: e.path,
						onClick: (t) => yt(t, e.path, i),
						className: Y("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
						children: e.label
					})]
				}, e.path);
			})
		})
	});
}
//#endregion
//#region src/hooks/useApplyTheme.ts
function Zn() {
	let { setPreferredDarkTheme: e, setPreferredLightTheme: t, setColorMode: n } = Cn();
	return s((r) => {
		qt(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/providers/ControlSizeContext.ts
var Qn = r("compact");
function $n(e) {
	let t = c(Qn);
	return e ?? t;
}
//#endregion
//#region src/components/ui/Button.tsx
var er = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover",
	link: "text-accent hover:text-accent-hover hover:underline underline-offset-2"
}, tr = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, nr = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, rr = {
	xs: "text-2xs gap-1",
	sm: "text-xs gap-1.5",
	md: "text-xs gap-2",
	lg: "text-sm gap-2"
}, ir = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, ar = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, or = {
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
}, sr = a(({ variant: e = "secondary", size: t = "md", controlSize: n, loading: r, pressed: i, icon: a, hideLabel: o, className: s, children: c, disabled: l, ...u }, d) => {
	let f = $n(n), p = e === "icon", m = e === "link", h = i ?? (u["aria-pressed"] === !0 || u["aria-pressed"] === "true"), g = o === !0 ? "sm" : o === !1 ? void 0 : o;
	return /* @__PURE__ */ y("button", {
		type: "button",
		ref: d,
		"data-control-size": f,
		"data-variant": e,
		"data-size": t,
		"data-pressed": i !== void 0 || u["aria-pressed"] !== void 0 ? String(h) : void 0,
		"data-hide-label": g && !p ? "" : void 0,
		disabled: l || r,
		className: Y((!m || f === "comfortable") && "ui-sized-control", "inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", er[e], h && (e === "secondary" || e === "ghost" || p) && "text-text-primary", p ? nr[t] : m ? rr[t] : tr[t], g && !p && !m && or[g]?.[t], s),
		...u,
		"aria-pressed": i ?? u["aria-pressed"],
		children: [
			r && /* @__PURE__ */ v(H, { className: "h-3.5 w-3.5 animate-spin" }),
			a && !r && /* @__PURE__ */ v(a, { className: ir[t] }),
			c && (g ? /* @__PURE__ */ v("span", {
				className: ar[g],
				children: c
			}) : c)
		]
	});
});
sr.displayName = "Button";
//#endregion
//#region src/components/ui/SectionHeader.tsx
function cr({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ v(t, {
		className: Y("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
function lr({ haspopup: e, matchWidth: t = !1, disabled: n = !1, labelled: r = !1, flip: i = !0, onOpenChange: a }) {
	let [o, c] = g(!1), l = h(!1), d = h(a);
	f(() => {
		d.current = a;
	});
	let p = o && !n, m = h(null), _ = h(null), v = h(null), y = h(null), b = u(), x = `${b}-label`, S = `${b}-trigger`, C = `${b}-popup`, w = s((e) => {
		if (!l.current) return;
		l.current = !1;
		let t = y.current, n = t?.ownerDocument.activeElement ?? null, r = !!t && t.contains(n), i = !n || n === t?.ownerDocument.body;
		c(!1), e === "escape" || e === "select" && (r || i) ? v.current?.focus() : e === "anchor-hidden" && r && v.current?.focus({ preventScroll: !0 }), d.current?.(!1, e ?? "blur");
	}, []), T = s((e) => {
		l.current || n || (l.current = !0, c(!0), d.current?.(!0, typeof e == "string" ? e : "toggle"));
	}, [n]);
	return xn(p, w, [m]), yn(p, _, y, {
		side: "bottom",
		align: "start",
		gap: 4,
		matchAnchorWidth: t,
		flip: i,
		onAnchorHidden: () => w("anchor-hidden")
	}), {
		open: p,
		show: T,
		close: w,
		rootRef: m,
		anchorRef: _,
		triggerRef: v,
		popupRef: y,
		labelId: x,
		triggerId: S,
		popupId: C,
		triggerAria: {
			id: S,
			"aria-haspopup": e,
			"aria-expanded": p,
			"aria-controls": p ? C : void 0,
			"aria-labelledby": r ? `${x} ${S}` : void 0
		}
	};
}
var ur = {
	text: "",
	at: 0
};
function dr() {
	return performance.now();
}
function fr(e) {
	return e.key.length !== 1 || e.metaKey ? !1 : e.ctrlKey && e.altKey && e.getModifierState?.("AltGraph") ? !0 : !e.ctrlKey && !e.altKey;
}
function pr(e, t) {
	return e.text !== "" && t - e.at <= 500;
}
function mr(e, t, n) {
	return {
		text: pr(e, n) ? e.text + t : t,
		at: n
	};
}
function hr(e, t, n, r) {
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
function gr() {
	let e = h(ur);
	return {
		push(t) {
			return e.current = mr(e.current, t, dr()), e.current.text;
		},
		active() {
			return pr(e.current, dr());
		},
		clear() {
			e.current = ur;
		}
	};
}
//#endregion
//#region src/components/ui/FieldContext.ts
var _r = r(null);
function vr(...e) {
	return [...new Set(e.flatMap((e) => e?.split(/\s+/).filter(Boolean) ?? []))].join(" ") || void 0;
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function yr(e) {
	let t = 0;
	return e.map((e) => {
		let n = t;
		return t += "options" in e ? e.options.length : 1, {
			entry: e,
			firstIndex: n
		};
	});
}
function br({ options: e, value: t, onChange: n, label: r, labelPlacement: i = "above", placeholder: a = "Select...", className: o, size: s = "md", disabled: u = !1 }) {
	let d = c(_r), f = i === "placeholder" && r ? r : r ? void 0 : d?.placeholderLabel, p = e.flatMap((e) => "options" in e ? e.options : [e]), [m, _] = g(-1), { open: b, show: x, close: S, rootRef: C, anchorRef: w, triggerRef: T, popupRef: E, labelId: D, popupId: k, triggerAria: j } = lr({
		haspopup: "listbox",
		matchWidth: !0,
		labelled: !!r,
		disabled: u
	}), M = gr(), N = h(!1), P = h(!1), F = (e) => `${k}-option-${e}`, I = !r && d?.id ? d.labelId : void 0, L = d?.claimLabel;
	l(() => {
		if (I && L) return L();
	}, [I, L]), l(() => {
		u && S("disabled");
	}, [
		u,
		b,
		S
	]);
	let R = f && !t ? void 0 : p.find((e) => e.value === t), z = h(!1);
	l(() => {
		z.current && !b && M.clear(), z.current = b;
	}), l(() => {
		!b || !N.current || (N.current = !1, document.getElementById(F(m))?.scrollIntoView({ block: "nearest" }));
	});
	function B() {
		let e = p.findIndex((e) => e.value === t);
		M.clear(), H(e >= 0 && !p[e].disabled ? e : te(1)), x();
	}
	function V(e) {
		u || e.disabled || (n(e.value), S("select"));
	}
	function ee(e) {
		u || P.current && (P.current = !1, e.detail === 0) || (b ? S("toggle") : B());
	}
	function H(e) {
		N.current = !0, _(e);
	}
	function U(e, t) {
		for (let n = e + t; n >= 0 && n < p.length; n += t) if (!p[n].disabled) return n;
		return e;
	}
	function te(e) {
		let t = U(e === 1 ? -1 : p.length, e);
		return t >= 0 && t < p.length ? t : -1;
	}
	function W(e) {
		e.preventDefault();
		let r = M.push(e.key), i = p.map((e) => e.label), a = (e) => !!p[e].disabled;
		if (b) {
			let e = hr(i, a, m, r);
			e !== -1 && H(e);
		} else {
			let e = hr(i, a, p.findIndex((e) => e.value === t), r);
			e !== -1 && p[e].value !== t && n(p[e].value);
		}
	}
	function G(e) {
		e.key === " " && P.current && e.preventDefault();
	}
	function K(e) {
		if (!u) {
			if (P.current = !1, e.key === " " && (b || M.active()) && (P.current = !0), fr(e) && (e.key !== " " || M.active())) {
				W(e);
				return;
			}
			if (!b) {
				(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), B());
				return;
			}
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), H(U(m, 1));
					break;
				case "ArrowUp":
					e.preventDefault(), H(U(m, -1));
					break;
				case "Home":
					e.preventDefault();
					{
						let e = te(1);
						e !== -1 && H(e);
					}
					break;
				case "End":
					e.preventDefault();
					{
						let e = te(-1);
						e !== -1 && H(e);
					}
					break;
				case "Enter":
				case " ": {
					e.preventDefault();
					let t = p[m];
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
		return /* @__PURE__ */ y("li", {
			id: F(n),
			role: "option",
			"aria-selected": e.value === t,
			"aria-disabled": e.disabled || void 0,
			onClick: () => {
				e.disabled || V(e);
			},
			onMouseEnter: () => {
				e.disabled || _(n);
			},
			className: Y("font-control flex h-7 w-full items-center gap-2 px-3 text-xs", !e.disabled && "cursor-pointer", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : n === m ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
			children: [/* @__PURE__ */ v("span", {
				className: "flex-1 truncate",
				children: e.label
			}), e.value === t && /* @__PURE__ */ v(O, { className: "h-3 w-3 shrink-0" })]
		}, e.value);
	}
	let re = yr(e);
	return /* @__PURE__ */ y("div", {
		className: Y("flex flex-col gap-1.5", o),
		ref: C,
		children: [r && /* @__PURE__ */ v("span", {
			id: D,
			className: Y("ui-field-label font-label text-xs font-medium", i === "placeholder" && "sr-only"),
			children: r
		}), /* @__PURE__ */ y("div", {
			className: "relative",
			ref: w,
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					disabled: u,
					onClick: ee,
					onKeyDown: K,
					onKeyUp: G,
					ref: T,
					...j,
					id: d?.id ?? j.id,
					"aria-labelledby": r && d?.id ? `${D} ${d.id}` : I && L ? `${I} ${d?.id}` : j["aria-labelledby"],
					"aria-describedby": d?.describedBy,
					"aria-invalid": d?.invalid || void 0,
					"aria-activedescendant": b && m >= 0 && p[m] && !p[m].disabled ? F(m) : void 0,
					className: Y("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", s === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7", u ? "cursor-not-allowed opacity-40" : "hover:bg-bg-hover hover:border-border-strong"),
					children: R ? R.label : /* @__PURE__ */ v("span", {
						className: "text-text-disabled",
						"aria-hidden": f ? !0 : void 0,
						children: f ?? a
					})
				}),
				/* @__PURE__ */ v(A, { className: Y("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", s === "sm" ? "right-1.5" : "right-2", b && "rotate-180") }),
				b && !u && /* @__PURE__ */ v("div", {
					ref: E,
					className: Y("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
					children: /* @__PURE__ */ v("ul", {
						id: k,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: re.map(({ entry: e, firstIndex: t }, n) => "options" in e ? /* @__PURE__ */ y("li", {
							role: "group",
							"aria-label": e.label,
							children: [/* @__PURE__ */ v("div", {
								"aria-hidden": "true",
								className: "text-text-tertiary px-3 py-1 text-2xs font-medium",
								children: e.label
							}), /* @__PURE__ */ v("ul", {
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
var xr = new Set([
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"ArrowDown",
	"Home",
	"End",
	"PageUp",
	"PageDown"
]);
function Sr({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, "aria-label": s, "aria-labelledby": c, id: l, showValue: d, className: f }) {
	let p = u(), m = l ?? p, h = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ y("div", {
		className: Y("flex flex-col gap-1.5", f),
		children: [(o || d) && /* @__PURE__ */ y("div", {
			className: "flex items-center justify-between",
			children: [o && /* @__PURE__ */ v("label", {
				htmlFor: m,
				className: "ui-field-label font-label text-xs font-medium",
				children: o
			}), d && /* @__PURE__ */ v("span", {
				className: "text-text-primary font-data text-xs",
				children: r
			})]
		}), /* @__PURE__ */ v("input", {
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
				xr.has(e.key) && a(Number(e.target.value));
			} : void 0,
			className: "bg-bg-tertiary [&::-webkit-slider-thumb]:bg-accent h-1.5 w-full cursor-pointer appearance-none rounded-md [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[100ms] [&::-webkit-slider-thumb]:hover:scale-110",
			style: { background: `linear-gradient(to right, var(--accent) ${h}%, var(--bg-tertiary) ${h}%)` }
		})]
	});
}
//#endregion
//#region src/components/ui/ThemePreview.tsx
function Cr({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ y("button", {
		type: "button",
		onClick: i,
		className: Y("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
		children: [/* @__PURE__ */ v("div", {
			className: "border-border-strong/20 flex h-10 w-full items-center justify-center rounded border",
			style: { backgroundColor: r?.bg },
			children: /* @__PURE__ */ v("div", {
				className: "h-1.5 w-8 rounded-md",
				style: { backgroundColor: r?.fg }
			})
		}), /* @__PURE__ */ y("div", {
			className: "flex items-center gap-1.5",
			children: [n && /* @__PURE__ */ v(n, { className: "h-3 w-3" }), /* @__PURE__ */ v("span", {
				className: "text-xs font-medium",
				children: e
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Toggle.tsx
function wr({ checked: e, onChange: t, disabled: n, label: r, controlSize: i, onClick: a, className: o, ...s }) {
	let c = $n(i);
	return /* @__PURE__ */ y("label", {
		className: Y("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", o),
		style: { gap: 10 },
		children: [/* @__PURE__ */ v("button", {
			...s,
			type: "button",
			role: "switch",
			"aria-checked": e,
			"data-control-size": c,
			disabled: n,
			onClick: (n) => {
				a?.(n), n.defaultPrevented || t(!e);
			},
			className: Y("ui-switch relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary ui-switch-off", !n && "cursor-pointer"),
			children: /* @__PURE__ */ v("span", { className: "ui-switch-knob absolute top-1/2 rounded-full transition-[left] duration-[100ms]" })
		}), r && /* @__PURE__ */ v("span", {
			className: "text-text-secondary text-xs",
			children: r
		})]
	});
}
//#endregion
//#region src/components/app-shell/themeMenuEvents.ts
var Tr = "open-theme-menu";
function Er(e = Tr) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
//#endregion
//#region src/components/app-shell/ThemeMenu.tsx
var Dr = [
	{
		value: "dark",
		label: "Dark",
		Icon: K
	},
	{
		value: "light",
		label: "Light",
		Icon: J
	},
	{
		value: "system",
		label: "System",
		Icon: G
	}
];
function Or({ className: e, respondToOpenEvent: t = !0 }) {
	let [n, r] = g(!1), i = Vt(), [a, o] = g(!1), c = h(null), u = h(null), d = Cn(), f = Zn(), { toast: p } = Pn(), m = s(() => {
		r(!1), o(!1);
	}, []);
	xn(n, m, [u], [c], { outsideClick: !a }), yn(n, c, u, {
		side: "bottom",
		align: "end",
		gap: 6,
		onAnchorHidden: a ? void 0 : m
	});
	function b() {
		if (n) {
			m();
			return;
		}
		r(!0);
	}
	l(() => {
		if (!t) return;
		let e = () => {
			r(!0), o(!0);
		};
		return document.addEventListener(Tr, e), () => document.removeEventListener(Tr, e);
	}, [t]);
	let { colorMode: x, setColorMode: S, preferredDarkTheme: C, preferredLightTheme: w, accentColor: T, setAccentColor: E, fontSize: D, setFontSize: O, uiFont: k, setUiFont: A, headingFont: j, setHeadingFont: M, proseFont: N, setProseFont: P, codeFont: F, setCodeFont: I, borderRadius: L, setBorderRadius: R, borderWidth: z, setBorderWidth: B, tracking: V, setTracking: ee, lineHeight: H, setLineHeight: U, density: te, setDensity: W, reducedMotion: G, setReducedMotion: K, saveThemeCustomization: re, resetThemeCustomization: ie, hasThemeOverrides: ae, isCustomized: oe, resolvedTheme: q } = d;
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: c,
		onClick: b,
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": n,
		title: "Theme",
		className: Y("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", n ? "text-accent bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", e),
		children: /* @__PURE__ */ v(ne, { className: "h-4 w-4" })
	}), n && me(/* @__PURE__ */ v("div", {
		ref: u,
		role: "dialog",
		"aria-label": "Theme settings",
		className: "ui-theme-menu ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] flex w-80 flex-col overflow-y-auto rounded-md border p-3 shadow-lg",
		style: { maxHeight: "80vh" },
		children: /* @__PURE__ */ y("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ y("div", { children: [/* @__PURE__ */ v(cr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ v("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: Dr.map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ y("button", {
						type: "button",
						onClick: () => S(e),
						className: Y("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", x === e ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ v(n, { className: "h-3.5 w-3.5" }), t]
					}, e))
				})] }),
				/* @__PURE__ */ y("div", { children: [/* @__PURE__ */ v(cr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ v("div", {
					className: "grid grid-cols-2 gap-2",
					children: Yt.map((e) => /* @__PURE__ */ v(Cr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: C === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ y("div", { children: [/* @__PURE__ */ v(cr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ v("div", {
					className: "grid grid-cols-2 gap-2",
					children: Jt.map((e) => /* @__PURE__ */ v(Cr, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: w === e.value,
						onClick: () => f(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ y("div", { children: [/* @__PURE__ */ v(cr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ v("div", {
					className: "flex flex-wrap gap-1.5",
					children: nn.map((e) => /* @__PURE__ */ v("button", {
						type: "button",
						onClick: () => E(e.value),
						className: Y("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", T === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: e.color,
							...T === e.value ? { "--utility-ring-color": e.color } : {}
						},
						title: e.value.charAt(0).toUpperCase() + e.value.slice(1),
						"aria-label": e.value
					}, e.value))
				})] }),
				/* @__PURE__ */ y("div", { children: [/* @__PURE__ */ v(cr, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ y("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ v(br, {
							label: "UI / Body",
							size: "sm",
							options: tn,
							value: k,
							onChange: (e) => A(e)
						}),
						/* @__PURE__ */ v(br, {
							label: "Headings",
							size: "sm",
							options: tn,
							value: j,
							onChange: (e) => M(e)
						}),
						/* @__PURE__ */ v(br, {
							label: "Prose",
							size: "sm",
							options: tn,
							value: N,
							onChange: (e) => P(e)
						}),
						/* @__PURE__ */ v(br, {
							label: "Code",
							size: "sm",
							options: tn,
							value: F,
							onChange: (e) => I(e)
						})
					]
				})] }),
				/* @__PURE__ */ y("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ v(Sr, {
							label: "Font size",
							min: 11,
							max: 18,
							value: D,
							onChange: O,
							showValue: !0
						}),
						/* @__PURE__ */ v(Sr, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: L,
							onChange: R,
							showValue: !0
						}),
						/* @__PURE__ */ v(Sr, {
							label: "Border width",
							min: 1,
							max: 3,
							value: z,
							onChange: B,
							showValue: !0
						}),
						/* @__PURE__ */ v(Sr, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: V,
							onChange: ee,
							showValue: !0
						}),
						/* @__PURE__ */ v(Sr, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: H,
							onChange: U,
							showValue: !0
						}),
						/* @__PURE__ */ v(Sr, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: te,
							onChange: W,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ v(wr, {
					label: "Reduced motion",
					checked: G,
					onChange: K
				}),
				/* @__PURE__ */ y("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ v(sr, {
						variant: "primary",
						size: "sm",
						disabled: !oe,
						onClick: () => {
							re(), p("success", `Saved customization for ${Gt.find((e) => e.value === q)?.label ?? q}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ v(sr, {
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
var kr = [
	"dark",
	"light",
	"system"
], Ar = {
	dark: K,
	light: J,
	system: G
}, jr = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function Mr({ onMobileMenuToggle: e, breadcrumbs: t, navItems: n = [], navLabel: r = "Primary", showCommandTrigger: i = !0, commandTriggerLabel: a = "Search", commandShortcut: o = Ft, currentPath: s, onNavigate: c, onCommandTrigger: l, actions: u }) {
	let { sidebarCollapsed: d, setSidebarCollapsed: f, colorMode: p, setColorMode: m } = Cn();
	function h() {
		m(kr[(kr.indexOf(p) + 1) % kr.length]);
	}
	let g = Ar[p], b = n.length > 0;
	return /* @__PURE__ */ y("header", {
		className: "ui-glass ui-glass-chrome border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3",
		style: { height: "var(--topbar-height)" },
		children: [/* @__PURE__ */ y("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					onClick: e,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden",
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ v(te, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ v("button", {
					type: "button",
					onClick: () => f(!d),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": d ? "Expand sidebar" : "Collapse sidebar",
					children: v(d ? ie : re, { className: "h-4 w-4" })
				}),
				(b || t !== !1) && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("div", { className: "bg-border hidden h-4 w-px md:block" }), b ? /* @__PURE__ */ v(Nr, {
					items: n,
					label: r,
					currentPath: s,
					onNavigate: c
				}) : t === !1 ? null : /* @__PURE__ */ v(Xn, {
					...t,
					currentPath: s,
					onNavigate: c
				})] })
			]
		}), /* @__PURE__ */ y("div", {
			className: "flex shrink-0 items-center gap-1",
			children: [
				u,
				i && /* @__PURE__ */ y("button", {
					type: "button",
					onClick: l ?? (() => It()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ v(q, { className: "h-3 w-3" }),
						/* @__PURE__ */ v("span", {
							className: "text-2xs",
							children: a
						}),
						/* @__PURE__ */ v("kbd", {
							className: "text-2xs font-mono opacity-60",
							children: o.label
						})
					]
				}),
				/* @__PURE__ */ v("button", {
					type: "button",
					onClick: h,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded",
					"aria-label": `Color mode: ${jr[p]}. Click to cycle.`,
					title: jr[p],
					children: /* @__PURE__ */ v(g, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ v(Or, {})
			]
		})]
	});
}
function Nr({ items: e, label: t, currentPath: n, onNavigate: r }) {
	return /* @__PURE__ */ v("nav", {
		className: "hidden min-w-0 items-center gap-1 md:flex",
		"aria-label": t,
		children: e.map((e) => {
			let t = e.icon, i = vt(e, n), a = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
			return /* @__PURE__ */ y("a", {
				href: e.href ?? e.path,
				target: e.target,
				rel: a,
				"aria-current": i ? "page" : void 0,
				onClick: (t) => {
					e.reloadDocument || yt(t, e.path, r);
				},
				className: Y("font-navigation flex h-6 max-w-40 items-center gap-1 rounded px-2 text-xs transition-colors duration-[100ms]", i ? "bg-accent-muted text-accent" : "text-text-tertiary hover:bg-bg-hover hover:text-text-primary"),
				children: [
					t && /* @__PURE__ */ v(t, { className: "h-3 w-3 shrink-0" }),
					/* @__PURE__ */ v("span", {
						className: "truncate",
						children: e.label
					}),
					e.badge && /* @__PURE__ */ v("span", {
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
function Pr({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: l, signOutPath: u, signOutLabel: d, settingsPath: f, settingsLabel: m, onOpenSettings: h, showCommandPalette: _ = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, sidebarHeaderActions: C, topBarActions: w, topBarNavItems: T, topBarNavLabel: E, currentPath: D, onNavigate: O, mainClassName: k, className: A }) {
	let [j, M] = g(!1), N = p(() => t.flatMap((e) => e.items), [t]), P = a ?? N;
	return /* @__PURE__ */ y("div", {
		className: Y("ui-glass-shell bg-bg-primary flex h-svh overflow-hidden", A),
		children: [
			/* @__PURE__ */ v("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ v(Jn, {
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
				onOpenSettings: h,
				currentPath: D,
				onNavigate: O,
				headerActions: C
			}),
			/* @__PURE__ */ y("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ v(Mr, {
					onMobileMenuToggle: () => M(!0),
					breadcrumbs: o,
					showCommandTrigger: _ && b,
					commandTriggerLabel: x,
					commandShortcut: S,
					actions: w,
					navItems: T,
					navLabel: E,
					currentPath: D,
					onNavigate: O
				}), /* @__PURE__ */ v("main", {
					id: "main-content",
					className: Y("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", k),
					children: e
				})]
			}),
			/* @__PURE__ */ v(xt, {
				items: i,
				currentPath: D,
				onNavigate: O
			}),
			/* @__PURE__ */ v(Wt, {
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
			_ && P.length > 0 && /* @__PURE__ */ v(zt, {
				items: P,
				shortcut: S,
				onNavigate: O
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function Fr({ children: e, className: t }) {
	return /* @__PURE__ */ y("div", {
		className: Y("ui-glass-shell bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ v("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function Ir({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ y("a", {
		href: e,
		onClick: (t) => yt(t, e, n),
		className: Y("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", r),
		children: [/* @__PURE__ */ v(C, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/Checkbox.tsx
var Lr = a(({ id: e, checked: t, indeterminate: n, onChange: r, label: i, ariaLabel: a, disabled: o, controlSize: s, className: d, "aria-label": f, "aria-describedby": p, "aria-invalid": m, required: g, ..._ }, b) => {
	let x = u(), S = $n(s), C = c(_r), w = e ?? C?.id ?? x, T = h(null);
	return l(() => {
		T.current && (T.current.indeterminate = !!n);
	}, [n]), /* @__PURE__ */ y("div", {
		className: Y("ui-choice flex w-fit items-center gap-2.5", o ? "cursor-not-allowed opacity-40" : "cursor-pointer", d),
		"data-control-size": S,
		children: [/* @__PURE__ */ y("span", {
			className: "ui-checkbox-control",
			children: [/* @__PURE__ */ v("input", {
				..._,
				ref: (e) => {
					if (T.current = e, typeof b == "function") return b(e);
					b && (b.current = e);
				},
				id: w,
				type: "checkbox",
				checked: t,
				"aria-checked": n ? "mixed" : t,
				"aria-label": f ?? a,
				"aria-describedby": vr(p, C?.describedBy),
				"aria-invalid": m ?? (C?.invalid || void 0),
				disabled: o,
				required: g ?? C?.required,
				onChange: (e) => r(e.target.checked, e),
				className: "ui-checkbox-input"
			}), /* @__PURE__ */ v("span", {
				className: "ui-checkbox-decoration",
				"aria-hidden": "true",
				children: n ? /* @__PURE__ */ v(W, { className: "h-3 w-3" }) : t ? /* @__PURE__ */ v(O, { className: "h-3 w-3" }) : null
			})]
		}), i && /* @__PURE__ */ v("label", {
			htmlFor: w,
			className: Y("text-text-primary text-xs", o ? "cursor-not-allowed" : "cursor-pointer"),
			children: i
		})]
	});
});
Lr.displayName = "Checkbox";
//#endregion
//#region src/components/ui/FilterButton.tsx
var Rr = a(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ y("button", {
		type: "button",
		ref: i,
		className: Y("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ v(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ v("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function zr(e) {
	return typeof e.header == "string" ? e.header : e.sortLabel ?? e.key;
}
function Br({ columns: e, hidden: n, onToggle: r, label: i = "Columns", heading: a = "Toggle columns", icon: o = P, onOnly: c, onlyLabel: l = "Only", footer: u }) {
	let [d, f] = g(!1), p = h(null);
	return xn(d, s(() => f(!1), []), [p]), /* @__PURE__ */ y("div", {
		className: "relative",
		ref: p,
		children: [/* @__PURE__ */ v(Rr, {
			icon: o,
			onClick: () => f(!d),
			children: i
		}), d && /* @__PURE__ */ y("div", {
			className: Y("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 rounded-md border py-1 shadow-lg", c ? "w-56" : "w-48"),
			children: [e.map((i, o) => /* @__PURE__ */ y(t, { children: [(o === 0 || i.group !== e[o - 1].group) && /* @__PURE__ */ v("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: i.group ?? a
			}), /* @__PURE__ */ y("div", {
				onClick: () => r(i.key),
				className: "group text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ v(Lr, {
						checked: !n.has(i.key),
						onChange: () => {},
						ariaLabel: zr(i)
					}),
					/* @__PURE__ */ v("span", {
						className: "min-w-0 flex-1 truncate",
						children: i.header
					}),
					c && /* @__PURE__ */ v("button", {
						type: "button",
						"aria-label": `${l}: ${zr(i)}`,
						onClick: (e) => {
							e.stopPropagation(), c(i.key);
						},
						className: "text-text-tertiary hover:text-text-primary text-2xs opacity-0 transition-opacity duration-[100ms] group-hover:opacity-100 focus-visible:opacity-100",
						children: l
					})
				]
			})] }, i.key)), u && /* @__PURE__ */ v("div", {
				className: "border-border mt-1 border-t px-3 pt-1",
				children: u
			})]
		})]
	});
}
//#endregion
//#region src/components/tables/Pagination.tsx
function Vr({ page: e, totalPages: t, onPageChange: n, loading: r = !1, total: i, summary: a }) {
	if (t <= 1 && !r && i === void 0 && a == null) return null;
	let o = [];
	for (let n = 1; n <= t; n++) n === 1 || n === t || n >= e - 1 && n <= e + 1 ? o.push(n) : o[o.length - 1] !== "ellipsis" && o.push("ellipsis");
	return /* @__PURE__ */ y("div", {
		className: "flex items-center gap-1",
		children: [a !== null && (r || i !== void 0 || a !== void 0) && /* @__PURE__ */ v("span", {
			role: "status",
			className: "text-text-tertiary text-xs",
			children: r ? "Loading results..." : a === void 0 ? `${i} in total` : typeof a == "function" ? a(i) : a
		}), t > 1 && /* @__PURE__ */ y(_, { children: [
			/* @__PURE__ */ v("button", {
				type: "button",
				disabled: e === 1,
				"aria-disabled": r || void 0,
				onClick: () => {
					r || n(e - 1);
				},
				className: Y("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", r && "cursor-not-allowed opacity-30"),
				"aria-label": "Previous page",
				children: /* @__PURE__ */ v(j, { className: "h-3.5 w-3.5" })
			}),
			o.map((t, i) => t === "ellipsis" ? /* @__PURE__ */ v("span", {
				className: "text-text-tertiary flex h-7 w-7 items-center justify-center text-xs",
				children: "..."
			}, `e${i}`) : /* @__PURE__ */ v("button", {
				type: "button",
				"aria-disabled": r || void 0,
				onClick: () => {
					r || n(t);
				},
				className: Y("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", r && "cursor-not-allowed", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ v("button", {
				type: "button",
				disabled: e >= t,
				"aria-disabled": r || void 0,
				onClick: () => {
					r || n(e + 1);
				},
				className: Y("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", r && "cursor-not-allowed opacity-30"),
				"aria-label": "Next page",
				children: /* @__PURE__ */ v(M, { className: "h-3.5 w-3.5" })
			})
		] })]
	});
}
//#endregion
//#region src/components/tables/sortRows.ts
function Hr(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/Table.tsx
function Ur({ caption: e, captionHidden: t = !1, captionClassName: n, stickyHeader: r = !1, maxHeight: i, wrapperClassName: a, wrapperProps: o, beforeTable: s, className: c, children: l, ...u }) {
	return /* @__PURE__ */ y("div", {
		...o,
		className: Y("ui-table-wrap", o?.className, a),
		style: {
			maxHeight: i,
			...i ? { overflow: "auto" } : {},
			...o?.style
		},
		children: [s, /* @__PURE__ */ y("table", {
			...u,
			className: Y("ui-table", r && "ui-table-sticky", c),
			children: [e != null && /* @__PURE__ */ v("caption", {
				className: Y(t && "sr-only", n),
				children: e
			}), l]
		})]
	});
}
function Wr({ className: e, ...t }) {
	return /* @__PURE__ */ v("thead", {
		...t,
		className: Y("ui-table-head", e)
	});
}
function Gr({ className: e, ...t }) {
	return /* @__PURE__ */ v("tbody", {
		...t,
		className: Y("ui-table-body", e)
	});
}
function Kr({ selected: e, interactive: t = !1, className: n, ...r }) {
	return /* @__PURE__ */ v("tr", {
		...r,
		"data-selected": e ? "" : void 0,
		className: Y("ui-table-row", t && "ui-table-interactive", n)
	});
}
function qr({ numeric: e = !1, align: t, sort: n, onSort: r, scope: i = "col", className: a, style: o, children: s, ...c }) {
	let l = n ?? c["aria-sort"], u = l === "ascending" ? "descending" : "ascending";
	return /* @__PURE__ */ v("th", {
		...c,
		scope: i,
		"aria-sort": l ?? (r ? "none" : void 0),
		className: Y("ui-table-header-cell", e && "ui-table-numeric", a),
		style: {
			...t ? { textAlign: t } : {},
			...o
		},
		children: r ? /* @__PURE__ */ y("button", {
			type: "button",
			className: "ui-table-sort-button",
			onClick: () => r(u),
			children: [
				s,
				/* @__PURE__ */ y("span", {
					className: "sr-only",
					children: [" Sort ", u]
				}),
				/* @__PURE__ */ v("span", {
					className: "ui-table-sort-indicator",
					"aria-hidden": "true",
					children: v(l === "ascending" ? w : l === "descending" ? S : T, {})
				})
			]
		}) : s
	});
}
function Jr({ numeric: e = !1, align: t, nowrap: n = !1, className: r, style: i, ...a }) {
	return /* @__PURE__ */ v("td", {
		...a,
		className: Y("ui-table-cell", e && "ui-table-numeric", n && "ui-table-nowrap", r),
		style: {
			...t ? { textAlign: t } : {},
			...i
		}
	});
}
function Yr({ colSpan: e, cellClassName: t, children: n, className: r, ...i }) {
	return /* @__PURE__ */ v("tr", {
		...i,
		className: Y("ui-table-empty-row", r),
		children: /* @__PURE__ */ v("td", {
			colSpan: e,
			className: Y("ui-table-empty-cell", t),
			children: n
		})
	});
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
var Xr = { "--ui-table-cell-padding-y": "0px" };
function Zr({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: a = "No data", sortKey: o, sortDir: s, onSortChange: c, caption: l, loading: u = !1, loadingMessage: d = "Loading…", className: f, tableProps: m, getRowProps: h, isRowSelected: _ }) {
	let b = c !== void 0, [x, C] = g(null), [T, E] = g("asc"), D = b ? o ?? null : x, O = b ? s ?? "asc" : T, k = p(() => b ? e : Hr(e, t, D, O), [
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
		C(e), E(t);
	}
	return /* @__PURE__ */ y(Ur, {
		...m,
		wrapperClassName: f,
		beforeTable: u && /* @__PURE__ */ v("span", {
			role: "status",
			className: "sr-only",
			children: d
		}),
		caption: l || void 0,
		captionClassName: "text-text-secondary px-3 py-2 text-left text-xs",
		"aria-busy": u || m?.["aria-busy"],
		className: Y("font-data text-xs", m?.className),
		style: {
			...Xr,
			...m?.style
		},
		children: [/* @__PURE__ */ v(Wr, { children: /* @__PURE__ */ v(Kr, { children: t.map((e) => /* @__PURE__ */ v(qr, {
			className: Y("text-2xs h-7", e.sortable && "hover:text-text-table-header-hover cursor-pointer select-none"),
			style: { width: e.width },
			sort: e.sortable ? D === e.key ? O === "asc" ? "ascending" : "descending" : "none" : void 0,
			children: e.sortable ? /* @__PURE__ */ y("button", {
				type: "button",
				onClick: () => A(e.key),
				"aria-label": e.sortLabel,
				className: "inline-flex cursor-pointer items-center gap-1 text-left focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
				children: [e.header, D === e.key && v(O === "asc" ? w : S, {
					"aria-hidden": "true",
					className: "h-3 w-3"
				})]
			}) : e.header
		}, e.key)) }) }), /* @__PURE__ */ v(Gr, { children: k.length === 0 ? /* @__PURE__ */ v(Yr, {
			colSpan: t.length,
			cellClassName: "h-32 px-0 text-center",
			children: u ? d : a
		}) : k.map((e) => {
			let a = h?.(e) ?? {}, o = _?.(e) ?? a["aria-selected"], s = o === !0 || o === "true";
			return /* @__PURE__ */ i(Kr, {
				tabIndex: r ? 0 : void 0,
				...a,
				key: n(e),
				selected: s,
				interactive: !!r,
				className: Y("h-8", !s && "hover:bg-bg-hover", r && "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", a.className),
				onClick: (t) => {
					a.onClick?.(t), t.defaultPrevented || r?.(e);
				},
				onKeyDown: (t) => {
					a.onKeyDown?.(t), !(!r || t.defaultPrevented || t.repeat || t.target !== t.currentTarget || t.key !== "Enter" && t.key !== " ") && (t.preventDefault(), r(e));
				}
			}, t.map((t) => /* @__PURE__ */ v(Jr, {
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
function Qr({ title: e, open: t, defaultOpen: n = !1, onOpenChange: r, meta: i, children: a, className: o, keepMounted: s = !0 }) {
	let [c, l] = g(n), d = t ?? c, f = u();
	function p() {
		t === void 0 && l(!d), r?.(!d);
	}
	return /* @__PURE__ */ y("div", {
		className: Y("border-border rounded-md border", o),
		children: [/* @__PURE__ */ y("button", {
			type: "button",
			id: `${f}-trigger`,
			"aria-expanded": d,
			"aria-controls": `${f}-content`,
			onClick: p,
			className: "text-text-primary hover:bg-bg-hover flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
			children: [
				/* @__PURE__ */ v(A, {
					"aria-hidden": "true",
					className: Y("text-text-tertiary h-3.5 w-3.5 shrink-0 transition-transform duration-[100ms]", !d && "-rotate-90")
				}),
				/* @__PURE__ */ v("span", {
					className: "min-w-0 flex-1",
					children: e
				}),
				i != null && /* @__PURE__ */ v("span", {
					className: "text-text-tertiary shrink-0 text-xs font-normal",
					children: i
				})
			]
		}), /* @__PURE__ */ v("div", {
			id: `${f}-content`,
			hidden: !d,
			className: "text-text-secondary px-3 py-2 text-xs",
			children: (d || s) && a
		})]
	});
}
//#endregion
//#region src/components/ui/Accordion.tsx
function $r(e) {
	let [t, n] = g(e.defaultValue ?? (e.type === "multiple" ? [] : "")), r = e.value ?? t;
	function i(t, i) {
		if (e.type === "multiple") {
			let a = Array.isArray(r) ? r : [], o = i ? [...a, t] : a.filter((e) => e !== t);
			e.value === void 0 && n(o), e.onValueChange?.(o);
		} else {
			let r = i ? t : "";
			e.value === void 0 && n(r), e.onValueChange?.(r);
		}
	}
	return /* @__PURE__ */ v("div", {
		className: Y("space-y-2", e.className),
		children: e.items.map((t) => /* @__PURE__ */ v(Qr, {
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
var ei = {
	neutral: V,
	success: k,
	warning: x,
	danger: fe,
	info: V
};
function ti({ type: e, title: t, children: n, dismissible: r, onDismiss: i, className: a, actions: o, toneBody: s = !1, ...c }) {
	let [l, u] = g(!1);
	if (l) return null;
	let d = e === "error" ? "danger" : e, f = Mn(d), p = ei[d], m = d === "neutral" ? "text-text-primary" : f.text;
	return /* @__PURE__ */ y("div", {
		...c,
		className: Y("flex gap-2.5 rounded-md border p-3", f.fill, f.border, a),
		children: [
			/* @__PURE__ */ v(p, { className: Y("mt-0.5 h-4 w-4 shrink-0", f.text) }),
			/* @__PURE__ */ y("div", {
				className: "min-w-0 flex-1",
				children: [t && /* @__PURE__ */ v("p", {
					className: Y(s ? m : "text-text-primary", "mb-0.5 text-xs font-semibold"),
					children: t
				}), /* @__PURE__ */ v("div", {
					className: Y(s ? m : "text-text-secondary", "text-xs"),
					children: n
				})]
			}),
			o ? /* @__PURE__ */ v("div", {
				className: "shrink-0 self-center",
				children: o
			}) : null,
			r && /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => {
					i ? i() : u(!0);
				},
				className: "ui-alert-dismiss text-text-tertiary hover:text-text-primary flex shrink-0 cursor-pointer items-center justify-center self-start rounded-md transition-colors duration-[100ms]",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ v(de, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/components/ui/AudioPlayer.tsx
var ni = {
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": !0,
	focusable: !1
}, ri = ({ forward: e, seconds: t, size: n }) => /* @__PURE__ */ y("svg", {
	...ni,
	viewBox: "0 0 24 24",
	width: n,
	height: n,
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ y("g", {
		transform: e ? "translate(24 0) scale(-1 1)" : void 0,
		children: [/* @__PURE__ */ v("path", { d: "M12 4.2A8.6 8.6 0 1 0 20.6 12.8" }), /* @__PURE__ */ v("path", { d: "M14.6 1.8 12 4.3l2.6 2.5" })]
	}), /* @__PURE__ */ v("text", {
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
}), ii = {
	pill: {
		play: /* @__PURE__ */ v("svg", {
			...ni,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ v("path", { d: "M8 5v14l11-7z" })
		}),
		pause: /* @__PURE__ */ v("svg", {
			...ni,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ v("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
		}),
		volume: /* @__PURE__ */ v("svg", {
			...ni,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ v("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" })
		}),
		muted: /* @__PURE__ */ v("svg", {
			...ni,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ v("path", { d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" })
		}),
		download: /* @__PURE__ */ v("svg", {
			...ni,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ v("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" })
		})
	},
	glass: {
		play: /* @__PURE__ */ v("svg", {
			...ni,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "currentColor",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round",
			children: /* @__PURE__ */ v("path", { d: "M2.6 1.4 13.2 8 2.6 14.6z" })
		}),
		pause: /* @__PURE__ */ y("svg", {
			...ni,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "currentColor",
			children: [/* @__PURE__ */ v("rect", {
				x: "2.6",
				y: "1.6",
				width: "3.6",
				height: "12.8",
				rx: "1"
			}), /* @__PURE__ */ v("rect", {
				x: "9.8",
				y: "1.6",
				width: "3.6",
				height: "12.8",
				rx: "1"
			})]
		}),
		volume: /* @__PURE__ */ y("svg", {
			...ni,
			viewBox: "0 0 22 16",
			width: 26,
			height: 18,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.3,
			strokeLinecap: "round",
			children: [
				/* @__PURE__ */ v("path", {
					d: "M1.5 5.6h3L8.6 2v12L4.5 10.4h-3z",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ v("path", { d: "M11.4 5.6a3.4 3.4 0 0 1 0 4.8" }),
				/* @__PURE__ */ v("path", { d: "M14.2 3.8a6.4 6.4 0 0 1 0 8.4" }),
				/* @__PURE__ */ v("path", { d: "M17 2.2a9 9 0 0 1 0 11.6" })
			]
		}),
		muted: /* @__PURE__ */ y("svg", {
			...ni,
			viewBox: "0 0 22 16",
			width: 26,
			height: 18,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.3,
			strokeLinecap: "round",
			children: [/* @__PURE__ */ v("path", {
				d: "M1.5 5.6h3L8.6 2v12L4.5 10.4h-3z",
				fill: "currentColor",
				stroke: "none"
			}), /* @__PURE__ */ v("path", { d: "m12 5.8 5 4.4M17 5.8l-5 4.4" })]
		}),
		download: /* @__PURE__ */ v("svg", {
			...ni,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ v("path", { d: "M8 1.8v8M4.6 7l3.4 3.4L11.4 7M2.8 13.6h10.4" })
		})
	}
};
function ai(e, t) {
	let n = Number.isFinite(e) && e > 0 ? Math.floor(e) : 0, r = Math.floor(n / 3600), i = Math.floor(n % 3600 / 60), a = String(n % 60).padStart(2, "0");
	return r > 0 ? `${r}:${String(i).padStart(2, "0")}:${a}` : `${t ? String(i).padStart(2, "0") : i}:${a}`;
}
var oi = a(function(e, t) {
	return /* @__PURE__ */ i(si, {
		...e,
		ref: t,
		key: e.src
	});
}), si = a(function({ src: e, title: t = "Audio recording", preload: n = "metadata", onTimeUpdate: r, onError: i, downloadHref: a, downloadName: o, variant: s = "plain", skipSeconds: c = !1, showMute: l = !1, keyboardShortcuts: u = !0, playbackRates: f = [
	1,
	1.25,
	1.5,
	2
], className: p, appearance: m = "pill", controls: _ }, b) {
	let x = h(null), S = h(!1), C = h(null), [w, T] = g(!1), [E, D] = g(n !== "none"), [O, k] = g(), [A, j] = g(0), [M, N] = g(0), [P, F] = g(!1), [I, L] = g(1), [R, z] = g(1), B = [...new Set([1, ...f.filter((e) => Number.isFinite(e) && e > 0)])].sort((e, t) => e - t), V = A <= 0 || !!O, ee = A > 0 ? Math.min(100, Math.max(0, M / A * 100)) : 0, H = typeof c == "number" && Number.isFinite(c) && c > 0, U = H ? c : 10, te = m === "glass", W = ii[m], G = [...new Set(_ ?? [
		...H ? ["skipBack"] : [],
		"play",
		...H ? ["skipForward"] : [],
		...m === "glass" ? [
			"currentTime",
			"progress",
			"duration"
		] : ["time", "progress"],
		...l ? ["mute"] : [],
		"speed",
		...a ? ["download"] : []
	])];
	async function K() {
		let t = x.current;
		if (!(!t || O || !e)) {
			if (!t.paused) {
				t.pause();
				return;
			}
			try {
				await t.play();
			} catch (e) {
				x.current === t && !(e instanceof DOMException && e.name === "AbortError") && ne(e);
			}
		}
	}
	function ne(e) {
		x.current?.pause();
		let t = e instanceof Error ? e : /* @__PURE__ */ Error("Unable to load or play audio.");
		k(t.message), D(!1), T(!1), i?.(t);
	}
	function re(e) {
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
			ne(e);
		}
	}
	d(b, () => ({ seekTo: re }));
	function ie() {
		let e = x.current?.duration;
		j(e && Number.isFinite(e) && e > 0 ? e : 0), D(!1);
	}
	function ae(e) {
		if (u && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === " " || e.key.toLowerCase() === "k")) {
			e.preventDefault(), e.repeat || K();
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
		n !== void 0 && (e.preventDefault(), re(n));
	}
	let oe = ai(M, te), q = ai(A, te);
	function se(t) {
		switch (t) {
			case "skipBack":
			case "skipForward": {
				let e = t === "skipForward";
				return /* @__PURE__ */ v("button", {
					type: "button",
					className: "ui-audio-icon-btn ui-audio-skip",
					"aria-label": `${e ? "Forward" : "Back"} ${U} seconds`,
					disabled: V,
					onClick: () => re(M + (e ? U : -U)),
					children: /* @__PURE__ */ v(ri, {
						forward: e,
						seconds: U,
						size: m === "glass" ? 18 : 24
					})
				}, t);
			}
			case "play": return /* @__PURE__ */ v("button", {
				type: "button",
				className: "ui-audio-play",
				"aria-label": w ? "Pause" : "Play",
				disabled: !!O || !e,
				onClick: K,
				children: w ? W.pause : W.play
			}, t);
			case "time": return /* @__PURE__ */ y("span", {
				className: "ui-audio-clock ui-audio-time",
				children: [
					oe,
					" / ",
					q
				]
			}, t);
			case "currentTime": return /* @__PURE__ */ v("span", {
				className: "ui-audio-clock",
				children: oe
			}, t);
			case "duration": return /* @__PURE__ */ v("span", {
				className: "ui-audio-clock",
				children: q
			}, t);
			case "progress": return /* @__PURE__ */ v("div", {
				className: "ui-audio-progress",
				children: /* @__PURE__ */ y("div", {
					className: "ui-audio-track",
					children: [
						/* @__PURE__ */ v("input", {
							type: "range",
							className: "ui-audio-seek",
							"aria-label": "Seek",
							"aria-valuetext": `${oe} of ${q}`,
							min: 0,
							max: A,
							step: "any",
							value: M,
							disabled: V,
							onChange: (e) => re(Number(e.target.value)),
							onKeyDown: ae
						}),
						/* @__PURE__ */ v("div", {
							className: "ui-audio-fill",
							"aria-hidden": "true",
							style: { width: `${ee}%` }
						}),
						/* @__PURE__ */ v("div", {
							className: "ui-audio-thumb",
							"aria-hidden": "true",
							style: { left: `calc(${ee}% - var(--ui-audio-thumb) / 2)` }
						})
					]
				})
			}, t);
			case "speed": return /* @__PURE__ */ v("div", {
				className: "ui-audio-select",
				children: /* @__PURE__ */ v("select", {
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
					children: B.map((e) => /* @__PURE__ */ v("option", {
						value: String(e),
						children: `${e}x`
					}, e))
				})
			}, t);
			case "mute":
			case "volume": {
				let n = /* @__PURE__ */ v("button", {
					type: "button",
					className: "ui-audio-icon-btn",
					"aria-label": P ? "Unmute" : "Mute",
					"aria-pressed": P,
					disabled: !!O || !e,
					onClick: () => {
						let e = x.current;
						e && (e.muted = !e.muted, F(e.muted));
					},
					children: P ? W.muted : W.volume
				}, "toggle");
				return t === "mute" ? /* @__PURE__ */ v("span", {
					className: "ui-audio-mute",
					children: n
				}, t) : /* @__PURE__ */ y("div", {
					className: "ui-audio-volume",
					children: [n, /* @__PURE__ */ v("div", {
						className: "ui-audio-volume-popup",
						children: /* @__PURE__ */ v("input", {
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
			case "download": return a ? /* @__PURE__ */ v("a", {
				href: a,
				download: o ?? "",
				className: "ui-audio-icon-btn",
				"aria-label": "Download recording",
				title: "Download recording",
				children: W.download
			}, t) : null;
		}
	}
	return /* @__PURE__ */ y("div", {
		role: "group",
		"aria-label": t,
		className: Y("ui-audio", s === "card" && "ui-audio-card", m === "glass" ? "ui-audio-glass" : "ui-audio-pill", p),
		children: [
			s === "card" && /* @__PURE__ */ v("p", {
				className: "ui-audio-title",
				children: t
			}),
			/* @__PURE__ */ v("audio", {
				ref: x,
				src: e,
				preload: n,
				onLoadStart: () => {
					D(!0), k(void 0);
				},
				onLoadedMetadata: () => {
					S.current = !0, ie();
					let e = C.current;
					C.current = null, e !== null && re(e);
				},
				onDurationChange: ie,
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
				onError: () => ne(/* @__PURE__ */ Error("Unable to load audio recording.")),
				onTimeUpdate: (e) => {
					let t = e.currentTarget.currentTime;
					N(t), r?.(t);
				}
			}),
			/* @__PURE__ */ v("div", {
				className: "ui-audio-row",
				children: G.map((e) => se(e))
			}),
			O ? /* @__PURE__ */ v("p", {
				role: "alert",
				className: "ui-audio-error",
				children: O
			}) : E ? /* @__PURE__ */ y("p", {
				role: "status",
				className: "ui-audio-status",
				children: [/* @__PURE__ */ v("span", {
					className: "ui-audio-spinner",
					"aria-hidden": "true"
				}), "Loading audio…"]
			}) : null
		]
	});
});
//#endregion
//#region src/components/ui/AuthCard.tsx
function ci({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ v("div", {
		className: Y("relative z-10 w-full max-w-sm", a),
		children: /* @__PURE__ */ y("div", {
			className: "bg-bg-secondary border-border rounded-lg border p-8 shadow-lg",
			children: [
				/* @__PURE__ */ y("div", {
					className: "mb-6 flex flex-col items-center",
					children: [
						n && /* @__PURE__ */ v("div", {
							className: "bg-accent-muted mb-3 flex h-12 w-12 items-center justify-center rounded-xl",
							children: /* @__PURE__ */ v(n, { className: "text-accent h-6 w-6" })
						}),
						/* @__PURE__ */ v("h1", {
							className: "text-text-primary text-lg font-semibold",
							children: e
						}),
						t && /* @__PURE__ */ v("p", {
							className: "text-text-secondary mt-1 text-xs",
							children: t
						})
					]
				}),
				r,
				i && /* @__PURE__ */ v("p", {
					className: "text-text-secondary mt-6 text-center text-xs",
					children: i
				})
			]
		})
	});
}
//#endregion
//#region src/components/ui/AuthorByline.tsx
function li({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ y("div", {
		className: Y("flex items-center gap-2", i),
		children: [/* @__PURE__ */ v(Dn, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ y("div", { children: [/* @__PURE__ */ y("p", {
			className: Y("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ v("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var ui = "font-label inline-flex items-center rounded-md font-medium", di = {
	xs: "text-2xs gap-1 px-1.5",
	sm: "text-2xs gap-1.5 px-2 py-0.5",
	md: "text-xs gap-1.5 px-2.5 py-1"
}, fi = {
	xs: "h-1.5 w-1.5",
	sm: "h-1.5 w-1.5",
	md: "h-2 w-2"
}, pi = "cursor-pointer transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-40", mi = {
	soft: "hover:text-text-primary",
	outline: "hover:border-border-strong hover:text-text-primary"
}, hi = !1;
function gi() {
	let e = !1;
	try {
		e = process.env.NODE_ENV !== "production";
	} catch {}
	!e || hi || (hi = !0, console.warn("[Badge] `selected` needs `onClick`; without it the badge renders as a static span and `selected` is ignored."));
}
var _i = a(function(e, t) {
	let { color: n, variant: r = "soft", size: i = "sm", dot: a, selected: o, onClick: s, disabled: c, className: l, children: u, ...d } = e;
	o !== void 0 && !s && gi();
	let f = s ? o : void 0, p = f !== void 0, m = kn[p && !f ? "gray" : n ?? (p ? "accent" : "gray")], h = Y(ui, di[i], r === "outline" ? Y("border", m.outline) : m.soft, f && (r === "outline" ? m.fill : "ring"), s && pi, p && !f && mi[r], c && !s && "opacity-40", l), g = /* @__PURE__ */ y(_, { children: [a && /* @__PURE__ */ v("span", { className: Y(fi[i], "rounded-full", m.dot) }), u] });
	return s ? /* @__PURE__ */ v("button", {
		...d,
		ref: t,
		type: "button",
		disabled: c,
		...p && { "aria-pressed": f },
		onClick: s,
		className: h,
		children: g
	}) : /* @__PURE__ */ v("span", {
		...d,
		...c && { "aria-disabled": !0 },
		ref: t,
		className: h,
		children: g
	});
});
_i.displayName = "Badge";
//#endregion
//#region src/components/ui/badgeColors.ts
var vi = kn, yi = /* @__PURE__ */ new Map();
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
	let n = yi.get(t);
	n || (n = new Intl.DateTimeFormat("en-GB-u-ca-iso8601-nu-latn", {
		timeZone: t,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}), yi.set(t, n));
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
function bi(e) {
	let t = /* @__PURE__ */ new Date(0);
	return t.setUTCFullYear(e.year, e.month - 1, e.day), t.setUTCHours(e.hour, e.minute, e.second, e.millisecond), t.getTime();
}
function xi(e, t, n = "compatible") {
	let r = bi(e), i = new Date(r);
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
		a.add(bi($(new Date(n), t)) - n);
	}
	let o = [...a].map((e) => r - e).sort((e, t) => e - t), s = o.filter((e) => bi($(new Date(e), t)) === r);
	if (s.length === 1) return new Date(s[0]);
	if (n === "reject") throw RangeError(s.length ? "This time occurs twice in the selected timezone" : "This time does not exist in the selected timezone");
	return s.length ? new Date(n === "later" ? s[s.length - 1] : s[0]) : new Date(n === "earlier" ? o[0] : o[o.length - 1]);
}
var Si = 1440, Ci = 6e4, wi = [
	1,
	2,
	3,
	4,
	5
];
function Ti(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function Ei(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Di(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes() + t, e.getSeconds(), e.getMilliseconds());
}
function Oi(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes());
}
function ki(e, t = 1) {
	let n = Ti(e);
	return Ei(n, -((n.getDay() - t + 7) % 7));
}
function Ai(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function ji(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Mi(e, t) {
	let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	return Math.round((n - r) / 864e5);
}
function Ni(e) {
	return e.getHours() * 60 + e.getMinutes() + e.getSeconds() / 60 + e.getMilliseconds() / Ci;
}
function Pi(e, t) {
	let n = Fi(e, t);
	if (!ji(n, e) || Ni(n) <= t) return n;
	let r = Math.floor(t);
	for (; r > 0 && Ni(Fi(e, r - 1)) !== r - 1;) r--;
	return /* @__PURE__ */ new Date(n.getTime() - (t - r) * Ci);
}
function Fi(e, t) {
	let n = Math.floor(t);
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, n, Math.round((t - n) * 60));
}
function Ii(e) {
	let t = /^(\d{1,2}):(\d{2})$/.exec(e.trim());
	if (!t) throw RangeError(`Invalid time "${e}", expected HH:mm`);
	let n = Number(t[1]), r = Number(t[2]);
	if (r > 59 || n > 24 || n === 24 && r > 0) throw RangeError(`Invalid time "${e}"`);
	return n * 60 + r;
}
function Li(e) {
	let t = Math.round(e), n = Math.floor(t / 60), r = t % 60;
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Ri(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function zi(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
	if (!t) throw RangeError(`Invalid date key "${e}"`);
	let n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
	if (Ri(n) !== e) throw RangeError(`Invalid date key "${e}"`);
	return n;
}
function Bi(e, t, n = "round") {
	if (t <= 0) return e;
	let r = n === "floor" ? Math.floor : n === "ceil" ? Math.ceil : Math.round, i = e / t;
	return r(n === "floor" ? i + 1e-9 : n === "ceil" ? i - 1e-9 : i) * t;
}
function Vi(e, t, n = "round") {
	return Fi(Ti(e), Bi(Ni(e), t, n));
}
function Hi(e) {
	return e === "day" || e === "threeDay" || e === "workWeek" || e === "week";
}
function Ui(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = Ti(t);
	switch (e) {
		case "day":
		case "timeline": return [i];
		case "threeDay": return [
			i,
			Ei(i, 1),
			Ei(i, 2)
		];
		case "week": {
			let e = ki(i, r);
			return Array.from({ length: 7 }, (t, n) => Ei(e, n));
		}
		case "workWeek": {
			let e = new Set(n.workWeekDays ?? wi), t = ki(i, r), a = Array.from({ length: 7 }, (e, n) => Ei(t, n)).filter((t) => e.has(t.getDay()));
			return a.length ? a : [i];
		}
		case "agenda": {
			let e = Math.max(1, Math.floor(n.agendaDays ?? 7));
			return Array.from({ length: e }, (e, t) => Ei(i, t));
		}
		case "month": return Wi(t, r).flat();
	}
}
function Wi(e, t = 1) {
	let n = Ai(e), r = new Date(n.getFullYear(), n.getMonth() + 1, 0), i = ki(n, t), a = [], o = i;
	for (; o <= r || a.length === 0;) {
		let e = Array.from({ length: 7 }, (e, t) => Ei(o, t));
		a.push(e), o = Ei(o, 7);
	}
	return a;
}
function Gi(e, t, n = {}) {
	let r = Ui(e, t, n);
	return {
		start: r[0],
		end: Ei(r[r.length - 1], 1)
	};
}
function Ki(e, t, n, r = {}) {
	switch (e) {
		case "day":
		case "timeline": return Ei(t, n);
		case "threeDay": return Ei(t, 3 * n);
		case "week":
		case "workWeek": return Ei(t, 7 * n);
		case "agenda": return Ei(t, Math.max(1, r.agendaDays ?? 7) * n);
		case "month": return Oi(t, n);
	}
}
var qi = /* @__PURE__ */ new Map();
function Ji(e, t) {
	let n = `${e}|${JSON.stringify(t)}`, r = qi.get(n);
	return r || (r = new Intl.DateTimeFormat(e, t), qi.set(n, r)), r;
}
function Yi(e, t = {}) {
	return Ji(t.locale ?? "en-GB", {
		timeZone: t.timeZone,
		timeZoneName: t.timeZone ? "short" : void 0,
		hour: t.hour12 ? "numeric" : "2-digit",
		minute: "2-digit",
		hourCycle: t.hour12 ? "h12" : "h23"
	}).format(e);
}
function Xi(e, t, n = {}) {
	return `${Yi(e, n)}–${Yi(t, n)}`;
}
function Zi(e, t = {}) {
	if (!t.hour12) return Li(e);
	let n = Fi(new Date(2e3, 0, 1), e);
	return Ji(t.locale ?? "en-GB", {
		hour: "numeric",
		minute: e % 60 ? "2-digit" : void 0,
		hour12: !0
	}).format(n);
}
function Qi(e, t = "en-GB") {
	return Ji(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e);
}
function $i(e, t, n = {}) {
	let r = n.locale ?? "en-GB";
	if (e === "month") return Ji(r, {
		month: "long",
		year: "numeric"
	}).format(t);
	let i = Ui(e, t, n), a = i[0], o = i[i.length - 1];
	if (i.length === 1) return Qi(a, r);
	let s = a.getFullYear() === o.getFullYear(), c = s && a.getMonth() === o.getMonth(), l = Ji(r, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	if (c) return `${a.getDate()} – ${l.format(o)}`;
	let u = Ji(r, s ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	}), d = Ji(r, {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return `${u.format(a)} – ${d.format(o)}`;
}
function ea(e, t, n, r) {
	return e < r && n < t;
}
function ta(e, t, n) {
	let r = Ti(n), i = Ei(r, 1), a = e.getTime(), o = Math.max(t.getTime(), a);
	if (o === a) {
		if (a < r.getTime() || a >= i.getTime()) return null;
	} else if (!ea(a, o, r.getTime(), i.getTime())) return null;
	let s = a < r.getTime(), c = o > i.getTime();
	return {
		startMinute: s ? 0 : Ni(e),
		endMinute: o >= i.getTime() ? Si : Math.max(Ni(t), s ? 0 : Ni(e)),
		continuesBefore: s,
		continuesAfter: c
	};
}
function na(e) {
	let t = e.filter(([e, t]) => t > e).map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]), n = [];
	for (let [e, r] of t) {
		let t = n[n.length - 1];
		t && e <= t[1] ? t[1] = Math.max(t[1], r) : n.push([e, r]);
	}
	return n;
}
function ra(e, t, n) {
	let r = [], i = e;
	for (let [e, a] of na(n)) if (!(a <= i) && (e >= t || (e > i && r.push([i, Math.min(e, t)]), i = Math.max(i, a), i >= t))) break;
	return i < t && r.push([i, t]), r;
}
function ia(e, t = 0) {
	let n = e.map((e) => ({
		id: e.id,
		start: e.start,
		end: Math.max(e.end, e.start + t)
	})).sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), r = /* @__PURE__ */ new Map(), i = [], a = [], o = -Infinity, s = () => {
		let e = a.length;
		for (let t of i) {
			let n = 1;
			for (let r = t.column + 1; r < e && !i.some((e) => e.column === r && ea(t.start, t.end, e.start, e.end)); r++) n++;
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
function aa(e) {
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
function oa(e) {
	return e === void 0 ? [] : typeof e == "string" ? [e] : e;
}
function sa(e, t, { emptyMatchesAll: n }) {
	if (t === void 0) return !0;
	let r = oa(e);
	return r.length === 0 ? n : r.includes(t);
}
function ca(e, t, n) {
	let r = oa(e);
	if (t === void 0 || n === void 0 || t === n) return r.length ? [...r] : void 0;
	if (r.length === 0) return;
	let i = r.map((e) => e === t ? n : e);
	return [...new Set(i)];
}
function la(e, t, n = []) {
	let r = /* @__PURE__ */ new Set(), i = e.start.getTime(), a = e.end.getTime();
	for (let e of [...t, ...n]) if (ea(e.start.getTime(), e.end.getTime(), i, a) && !("kind" in e && e.kind === "unavailable")) for (let t of oa(e.resourceId)) r.add(t);
	return r;
}
function ua(e, t, n = {}) {
	let { fromDateKey: r, wallDateAtMinutes: i, toDateKey: a, startOfWeek: o, startOfDay: s, addDays: c, differenceInDays: l, weekday: u } = _a(n.timeZone), d = n.weekStartsOn ?? 1, f = [], p = t.start.getTime(), m = t.end.getTime();
	for (let n of e) {
		let e = Ii(n.startTime), h = Ii(n.endTime);
		h <= e && (h += Si);
		let g = r(n.startDate), _ = (t) => {
			let r = i(t, e), o = i(t, h);
			if (o <= r || !ea(r.getTime(), o.getTime(), p, m)) return;
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
function da(e, t, n, r, i) {
	let a = Bi(t, r, "floor"), o = Bi(n, r, "floor"), s = X(Math.min(a, o), i.min, i.max - r), c = X(Math.max(a, o) + r, s + r, i.max), l = Pi(e, s), u = Pi(e, c);
	return u <= l && (u = new Date(l.getTime() + r * Ci)), {
		start: l,
		end: u
	};
}
function fa(e, t, n, r, i, a) {
	let o = (e.end.getTime() - e.start.getTime()) / Ci, s = Bi(n - r, i), c = Ni(e.start);
	c >= a.min && c + o <= a.max && (s = X(s, a.min, a.max - o));
	let l = Fi(t, s);
	return {
		start: l,
		end: new Date(l.getTime() + o * Ci)
	};
}
function pa(e, t, n, r, i) {
	let a = Ti(t), o = e.start.getTime() >= a.getTime() ? Ni(e.start) + r : r;
	return Pi(a, X(Bi(n, r), Math.min(o, Si), Math.max(i.max, o)));
}
function ma(e, t) {
	return {
		start: Ei(e.start, t),
		end: Ei(e.end, t)
	};
}
function ha(e, t) {
	return e.start.getTime() === t.start.getTime() && e.end.getTime() === t.end.getTime();
}
function ga(e) {
	return e.allDay ? !0 : e.end.getTime() >= Ei(e.start, 1).getTime();
}
function _a(e) {
	let t = (t) => $(t, e), n = (t) => xi(t, e), r = (e) => {
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
		let i = t(e), a = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, Math.floor(r), 0, Math.round((r - Math.floor(r)) * Ci)));
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
		return u(e, n) * Si + r.hour * 60 + r.minute + r.second / 60 + r.millisecond / Ci;
	}, p = (t, n) => {
		let r = d(t, n), i = f(r, t);
		if (!e || i <= n + 1e-8) return r;
		let a = Math.floor(r.getTime() - (i - n) * Ci), o = r.getTime();
		for (; a < o;) {
			let e = Math.floor((a + o) / 2);
			f(new Date(e), t) < n ? a = e + 1 : o = e;
		}
		return new Date(o);
	}, m = (e) => {
		if (!Number.isFinite(e.min) || !Number.isFinite(e.max) || e.max <= e.min) throw RangeError("Calendar time bounds must contain a positive interval of real instants");
	}, h = e ? (e, t) => new Date(i(e).getTime() + t * Ci) : Fi, g = e ? (e) => (e.getTime() - i(e).getTime()) / Ci : Ni, _ = e ? (e, t) => new Date(e.getTime() + t * Ci) : Di, v = (e) => {
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
			let o = new Set(n.workWeekDays ?? wi), l = i.filter((e) => o.has(s(e)));
			return l.length ? l : [r];
		}
		let o = e === "threeDay" ? 3 : e === "agenda" ? Math.max(1, Math.floor(n.agendaDays ?? 7)) : 1;
		return Array.from({ length: o }, (e, t) => a(r, t));
	}, x = (t, n, r) => {
		if (!e) return ta(t, n, r);
		let o = i(r).getTime(), s = a(i(r), 1).getTime(), c = t.getTime(), l = Math.max(c, n.getTime());
		return (l === c ? c < o || c >= s : !ea(c, l, o, s)) ? null : {
			startMinute: Math.max(0, (c - o) / Ci),
			endMinute: Math.min(s - o, l - o) / Ci,
			continuesBefore: c < o,
			continuesAfter: l > s
		};
	}, S = (e) => !!e.allDay || e.end >= a(e.start, 1), C = (t, n) => Ji(t, {
		...n,
		...e ? { timeZone: e } : {}
	}), w = (e, t = "en-GB") => C(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e), T = (n, r, i = {}) => {
		if (!e) return $i(n, r, i);
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
		if (!e) return fa(n, r, i, a, o, s);
		m(s);
		let c = (n.end.getTime() - n.start.getTime()) / Ci, l = Bi(i - a, o), f = (e) => {
			let n = h(r, e), i = t(n);
			return u(n, r) * Si + i.hour * 60 + i.minute;
		}, p = d(n.start, f(s.min)), g = d(n.start, f(s.max));
		n.start >= p && n.end <= g && c <= s.max - s.min && (l = X(l, s.min, s.max - c));
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
			if (!e) return da(t, n, r, i, a);
			let o = Bi(n, i, "floor"), s = Bi(r, i, "floor");
			m(a);
			let c = Math.min(i, a.max - a.min), l = X(Math.min(o, s), a.min, a.max - c);
			return {
				start: h(t, l),
				end: h(t, X(Math.max(o, s) + i, l + c, a.max))
			};
		},
		computeMoveRange: E,
		computeResizeEnd: (t, n, r, a, o) => {
			if (!e) return pa(t, n, r, a, o);
			m(o);
			let s = Math.max(0, (t.start.getTime() - i(n).getTime()) / Ci) + a;
			return h(n, X(Bi(r, a), s, Math.max(o.max, s)));
		},
		computeNudgeRange: (e, t, n) => E(e, i(e.start), g(e.start) + t, 0, 1, n),
		shiftRangeDays: (t, n) => {
			if (!e) return ma(t, n);
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
				min: (p(t, n.min).getTime() - r) / Ci,
				max: (p(t, n.max).getTime() - r) / Ci
			};
			return m(a), a;
		}
	};
}
function va(e, t, n, r, i = !0) {
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
	let s = _a(n.timeZone), c = /* @__PURE__ */ new Map(), l = e.map(({ day: e, bounds: t }) => {
		let i = s.toDateKey(e), a = c.get(i);
		if (a) return a;
		let l = o(t), u = l.map((t) => s.dateAtMinutes(e, t)), d = u.map((e) => Yi(e, n)), f = Ji(n.locale ?? "en-GB", {
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
var ya = r(null);
function ba() {
	let e = c(ya);
	if (!e) throw Error("Calendar views must render inside <Calendar>");
	return e;
}
//#endregion
//#region src/components/ui/calendar/AgendaView.tsx
function xa({ days: e, events: t, availability: n, label: r }) {
	let i = ba(), { daySegment: a, eventsOnDay: o, getFormatter: s, isAllDayLike: c, isSameDay: l, toDateKey: u } = i.dates, d = s(i.locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}), f = (e) => oa(e).map((e) => i.resourceById.get(e)?.title).filter(Boolean).join(", ");
	return /* @__PURE__ */ v("div", {
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
			return /* @__PURE__ */ y("section", {
				"aria-label": d.format(e),
				children: [/* @__PURE__ */ v("h3", {
					className: Y("ui-cal-agenda-day border-border border-b px-3 py-1.5 text-xs font-semibold", s ? "text-accent" : "text-text-primary"),
					children: /* @__PURE__ */ v("button", {
						type: "button",
						className: "cursor-pointer hover:underline",
						onClick: () => i.openDay(e),
						"aria-current": s ? "date" : void 0,
						children: d.format(e)
					})
				}), r.length === 0 ? /* @__PURE__ */ v("p", {
					className: "text-text-tertiary border-border border-b px-3 py-2 text-xs",
					children: i.labels.noEvents
				}) : /* @__PURE__ */ v("ul", {
					className: "divide-border divide-y border-border border-b",
					children: r.map((e) => /* @__PURE__ */ v("li", { children: e.type === "event" ? /* @__PURE__ */ v(Sa, {
						event: e.value,
						resources: f(e.value.resourceId)
					}) : /* @__PURE__ */ v(Ca, {
						block: e.value,
						resources: f(e.value.resourceId)
					}) }, `${e.type}:${e.value.id}`))
				})]
			}, u(e));
		})
	});
}
function Sa({ event: e, resources: t }) {
	let n = ba(), { isAllDayLike: r } = n.dates, i = n.statusLabel(e), a = r(e) ? n.labels.allDay : Xi(e.start, e.end, n);
	return /* @__PURE__ */ y("div", {
		role: "button",
		tabIndex: 0,
		"aria-label": n.describeEvent(e),
		"data-status": e.status ?? "confirmed",
		className: Y("ui-cal-agenda-row hover:bg-bg-hover flex cursor-pointer items-start gap-3 px-3 py-2 transition-colors duration-[100ms]", `ui-cal-c-${n.eventColor(e)}`),
		onClick: () => n.clickEvent(e),
		onKeyDown: (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickEvent(e));
		},
		children: [
			/* @__PURE__ */ v("span", {
				className: "text-text-secondary font-mono w-24 shrink-0 text-xs",
				children: a
			}),
			/* @__PURE__ */ v("span", {
				className: "ui-cal-dot mt-1",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ y("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ v("span", {
					className: "ui-cal-title block text-xs",
					children: e.title
				}), e.description && /* @__PURE__ */ v("span", {
					className: "ui-cal-meta block text-2xs",
					children: e.description
				})]
			}),
			t && /* @__PURE__ */ v("span", {
				className: "text-text-tertiary hidden max-w-40 truncate text-2xs sm:block",
				children: t
			}),
			(i || e.badge) && /* @__PURE__ */ y("span", {
				className: "flex shrink-0 gap-1",
				children: [i && /* @__PURE__ */ v("span", {
					className: "ui-cal-badge",
					children: i
				}), e.badge && /* @__PURE__ */ v("span", {
					className: "ui-cal-badge",
					children: e.badge
				})]
			})
		]
	});
}
function Ca({ block: e, resources: t }) {
	let n = ba(), r = e.kind ?? "available", i = r === "available" ? n.labels.available : n.labels.unavailable, a = n.hasBlockClick;
	return /* @__PURE__ */ y("div", {
		role: a ? "button" : void 0,
		tabIndex: a ? 0 : void 0,
		"aria-label": n.describeBlock(e),
		className: Y("text-text-tertiary flex items-start gap-3 px-3 py-1.5 text-2xs", a && "hover:bg-bg-hover cursor-pointer transition-colors duration-[100ms]", `ui-cal-c-${n.blockColor(e)}`),
		onClick: a ? () => n.clickBlock(e) : void 0,
		onKeyDown: a ? (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickBlock(e));
		} : void 0,
		children: [
			/* @__PURE__ */ v("span", {
				className: "font-mono w-24 shrink-0",
				children: Xi(e.start, e.end, n)
			}),
			/* @__PURE__ */ v("span", {
				className: Y("ui-cal-agenda-swatch mt-0.5", r === "unavailable" && "ui-cal-agenda-swatch-off"),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ y("span", {
				className: "min-w-0 flex-1 truncate",
				children: [i, e.label ? ` · ${e.label}` : ""]
			}),
			t && /* @__PURE__ */ v("span", {
				className: "hidden max-w-40 truncate sm:block",
				children: t
			})
		]
	});
}
//#endregion
//#region src/components/ui/calendar/MonthView.tsx
var wa = 96, Ta = 224;
function Ea(e) {
	return `${e.type}:${e.value.id}`;
}
function Da({ date: e, events: t, availability: n, label: r }) {
	let i = ba(), { addDays: a, daySegment: o, differenceInDays: c, eventsOnDay: u, formatLongDate: d, fromDateKey: m, getFormatter: _, getMonthWeeks: b, isAllDayLike: x, isSameDay: S, shiftRangeDays: C, toDateKey: w } = i.dates, T = p(() => b(e, i.weekStartsOn), [
		e,
		i.weekStartsOn,
		b
	]), E = h(null), D = h(null), [O, k] = g(null), [A, j] = g(null), M = Vt(), N = h(null), [P, F] = g(null), [I, L] = g(null), R = h(null), z = h(i);
	f(() => {
		z.current = i;
	}), l(() => {
		let e = R;
		return () => {
			e.current?.cleanup(), e.current = null;
		};
	}, []);
	let B = h(!1), [V, ee] = g(null);
	l(() => {
		let e = E.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			ee(e[0]?.contentRect.height ?? null);
		});
		return t.observe(e), () => t.disconnect();
	}, []);
	let H = s(() => j(null), []);
	xn(A !== null, H, [D]), bn(A !== null, N, D, (e, t) => {
		let n = Math.max(e.width, Ta);
		return {
			top: Math.max(8, e.top),
			left: Math.max(8, Math.min(e.left, t - n - 8)),
			width: n
		};
	}), l(() => {
		A && D.current?.querySelector("[data-cal-close]")?.focus();
	}, [A]);
	let U = i.editLayer === "availability", te = i.dates.parts(e).month, W = p(() => T.flat(), [T]), G = w(i.now), K = W.find((e) => w(e) === G && i.dates.parts(e).month === te) ?? W.find((t) => i.dates.parts(t).month === te && i.dates.parts(t).day === i.dates.parts(e).day) ?? W.find((e) => i.dates.parts(e).month === te) ?? W[0], ne = O && W.some((e) => w(e) === O) ? O : w(K), re = p(() => {
		let e = /* @__PURE__ */ new Map();
		for (let r of W) {
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
		W,
		t,
		n,
		U,
		u,
		o,
		w
	]), ie = _(i.locale, { weekday: "short" }), ae = i.monthMaxEvents ?? (V ? Math.max(1, Math.floor((Math.max(V / T.length, wa) - 28) / 20)) : 3);
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
			W.some((e) => S(e, r)) && oe(r);
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
			resourceIds: ca(e.value.resourceId, void 0, void 0)
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
	function J(e) {
		e.type === "event" ? i.clickEvent(e.value) : i.clickBlock(e.value);
	}
	function le(e, t, n) {
		if (e.button !== 0 || R.current || (e.stopPropagation(), e.pointerType === "touch" || !se(t))) return;
		let r = (e) => {
			let t = R.current;
			if (!t || e.pointerId !== t.pointerId) return;
			if (!t.started) {
				if (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) < 4) return;
				t.started = !0, L(Ea(t.item));
			}
			let n = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-cal-date]"), r = n && E.current?.contains(n) ? n.dataset.calDate ?? null : null;
			t.overKey = r ?? void 0, F(r);
		}, i = (e) => {
			let t = R.current;
			if (!t || (R.current = null, t.cleanup(), F(null), L(null), t.started && (B.current = !0, setTimeout(() => {
				B.current = !1;
			}, 0)), !e || !t.started || !t.overKey || t.overKey === t.originKey)) return;
			let n = c(m(t.overKey), m(t.originKey));
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
	function ue(e) {
		B.current || J(e);
	}
	function fe(e, t) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), e.stopPropagation(), J(t);
			return;
		}
		if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
			if (e.preventDefault(), e.stopPropagation(), !se(t)) return;
			i.commit(ce(t, e.key === "ArrowLeft" ? -1 : 1), "keyboard");
		}
	}
	function pe(e, t) {
		e.target !== e.currentTarget || !i.selectable || i.commit({
			target: "selection",
			action: "create",
			start: t,
			end: a(t, 1),
			allDay: !0
		}, "pointer");
	}
	let he = (e, t) => {
		let n = Ea(e), r = e.value.placeholder ? {
			"aria-hidden": !0,
			"data-placeholder": !0
		} : {
			role: "button",
			tabIndex: 0,
			onPointerDown: (n) => le(n, e, t),
			onClick: () => ue(e),
			onKeyDown: (t) => fe(t, e)
		};
		if (e.type === "availability") {
			let t = e.value;
			return /* @__PURE__ */ y("div", {
				className: Y("ui-cal-chip", `ui-cal-c-${i.blockColor(t)}`),
				"data-all-day": !0,
				"data-dragging": I === n || void 0,
				"aria-label": t.placeholder ? void 0 : i.describeBlock(t),
				...r,
				children: [i.display.time && /* @__PURE__ */ v("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: Xi(t.start, t.end, i)
				}), i.display.blockLabels && /* @__PURE__ */ v("span", {
					className: "ui-cal-title",
					children: t.label ?? ((t.kind ?? "available") === "available" ? i.labels.available : i.labels.unavailable)
				})]
			}, n);
		}
		let a = e.value, o = x(a), s = i.statusLabel(a);
		return /* @__PURE__ */ y("div", {
			className: Y("ui-cal-chip", `ui-cal-c-${i.eventColor(a)}`),
			"data-all-day": o || void 0,
			"data-status": a.status ?? "confirmed",
			"data-dragging": I === n || void 0,
			"aria-label": a.placeholder ? void 0 : i.describeEvent(a),
			title: s ? `${a.title} (${s})` : a.title,
			...r,
			children: [
				!o && /* @__PURE__ */ v("span", {
					className: "ui-cal-dot",
					"aria-hidden": "true"
				}),
				!o && i.display.time && /* @__PURE__ */ v("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: Yi(a.start, i)
				}),
				/* @__PURE__ */ v("span", {
					className: "ui-cal-title font-medium",
					children: a.title
				})
			]
		}, n);
	};
	return /* @__PURE__ */ y("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ v("div", {
			className: "border-border grid grid-cols-7 border-b",
			"aria-hidden": "true",
			children: T[0].map((e) => /* @__PURE__ */ v("div", {
				className: "text-text-tertiary py-1.5 text-center text-2xs font-medium uppercase",
				children: ie.format(e)
			}, i.dates.weekday(e)))
		}), /* @__PURE__ */ v("div", {
			ref: E,
			role: "grid",
			"aria-label": r,
			"data-cal-drag": I ? "move" : void 0,
			className: "ui-cal-scroll flex min-h-0 flex-1 flex-col overflow-y-auto",
			children: T.map((e) => /* @__PURE__ */ v("div", {
				role: "row",
				className: "grid min-h-24 flex-1 grid-cols-7",
				children: e.map((e) => {
					let t = w(e), n = re.get(t), r = n?.items ?? [], a = Math.max(1, ae), o = r.length > a, s = o ? r.slice(0, a - 1) : r, c = t === G, l = i.dates.parts(e).month !== te, u = i.hasAvailability && i.shadeOutsideAvailability && !n?.hasAvailable;
					return /* @__PURE__ */ y("div", {
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
						onKeyDown: (t) => q(t, e),
						onClick: (t) => pe(t, e),
						children: [
							/* @__PURE__ */ v("button", {
								type: "button",
								tabIndex: -1,
								onClick: () => i.openDay(e),
								"aria-label": d(e, i.locale),
								className: Y("flex h-5 min-w-5 cursor-pointer items-center justify-center self-start rounded-full px-1 text-2xs font-semibold transition-colors duration-[100ms]", c ? "bg-accent text-text-on-accent" : l ? "text-text-tertiary hover:bg-bg-hover" : "text-text-primary hover:bg-bg-hover"),
								children: i.dates.parts(e).day
							}),
							s.map((e) => he(e, t)),
							o && /* @__PURE__ */ v("button", {
								type: "button",
								className: "text-text-secondary hover:bg-bg-hover hover:text-text-primary cursor-pointer self-start rounded-md px-1 text-2xs font-medium transition-colors duration-[100ms]",
								"aria-haspopup": "dialog",
								"aria-expanded": A === t,
								onClick: (e) => {
									N.current = e.currentTarget.closest("[data-cal-date]"), j(t);
								},
								children: i.labels.more(r.length - s.length)
							}),
							A === t && me(/* @__PURE__ */ v("div", {
								ref: D,
								role: "dialog",
								"aria-label": d(e, i.locale),
								className: "ui-cal ui-cal-popover ui-glass ui-glass-popover flex flex-col gap-0.5",
								children: /* @__PURE__ */ y("div", {
									className: "ui-cal-popover-scroll",
									children: [/* @__PURE__ */ y("div", {
										className: "mb-1 flex items-center justify-between gap-2 pl-1",
										children: [/* @__PURE__ */ v("button", {
											type: "button",
											className: "text-text-primary cursor-pointer text-xs font-semibold hover:underline",
											onClick: () => i.openDay(e),
											children: d(e, i.locale)
										}), /* @__PURE__ */ v("button", {
											type: "button",
											"aria-label": i.labels.close,
											className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
											onClick: H,
											"data-cal-close": !0,
											children: /* @__PURE__ */ v(de, { className: "h-3.5 w-3.5" })
										})]
									}), r.map((e) => he(e, t))]
								})
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
function Oa({ event: e, style: t, resizeEdge: n, compact: r, dense: i, continuesBefore: a, continuesAfter: o, dragging: s, onKeyDown: c, onClick: l }) {
	let u = ba(), d = u.canEditEvent(e), f = e.allDay ? u.labels.allDay : Xi(e.start, e.end, u), { display: p } = u, m = p.status ? u.statusLabel(e) : void 0, h = [p.time && f, m].filter(Boolean).join(" · "), g = !!e.placeholder, b = u.renderEvent?.(e, {
		view: u.view,
		compact: r,
		timeLabel: f,
		statusLabel: m
	});
	return /* @__PURE__ */ y("div", {
		role: g ? void 0 : "button",
		tabIndex: g ? void 0 : 0,
		"aria-hidden": g || void 0,
		"data-cal-item": g ? void 0 : "event",
		"data-cal-id": e.id,
		"data-status": e.status ?? "confirmed",
		"data-placeholder": g || void 0,
		"data-editable": d || void 0,
		"data-dragging": s || void 0,
		"data-continues-before": a || void 0,
		"data-continues-after": o || void 0,
		"aria-label": g ? void 0 : u.describeEvent(e),
		"aria-describedby": !g && (d || u.hasEventClick) ? u.itemHelpId : void 0,
		title: `${e.title}\n${f}${e.description ? `\n${e.description}` : ""}`,
		className: Y("ui-cal-event", `ui-cal-c-${u.eventColor(e)}`),
		style: t,
		onKeyDown: g ? void 0 : c,
		onClick: g ? void 0 : l,
		children: [b ?? (i ? /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("span", {
			className: "ui-cal-title",
			children: e.title
		}), h && /* @__PURE__ */ v("span", {
			className: "ui-cal-meta font-mono",
			children: h
		})] }) : /* @__PURE__ */ v(ka, {
			event: e,
			compact: r,
			timeLabel: p.time ? f : void 0,
			statusLabel: m,
			description: p.description ? e.description : void 0,
			badge: p.badge ? e.badge : void 0
		})), n && d && !o && /* @__PURE__ */ v("div", {
			"data-cal-resize": !0,
			"data-edge": n,
			className: "ui-cal-resize",
			"aria-hidden": "true"
		})]
	});
}
function ka({ event: e, compact: t, timeLabel: n, statusLabel: r, description: i, badge: a }) {
	return t ? /* @__PURE__ */ y("div", {
		className: "flex min-w-0 items-center gap-1",
		children: [/* @__PURE__ */ y("span", {
			className: "ui-cal-title min-w-0",
			children: [e.title, !e.allDay && n && /* @__PURE__ */ y("span", {
				className: "ui-cal-inline-time font-mono",
				children: [", ", n.split("–")[0]]
			})]
		}), r && /* @__PURE__ */ v("span", {
			className: "ui-cal-badge shrink-0",
			children: r
		})]
	}) : /* @__PURE__ */ y(_, { children: [
		/* @__PURE__ */ v("span", {
			className: "ui-cal-title",
			children: e.title
		}),
		n && /* @__PURE__ */ v("span", {
			className: "ui-cal-meta font-mono",
			children: n
		}),
		i && /* @__PURE__ */ v("span", {
			className: "ui-cal-meta",
			children: i
		}),
		(r || a) && /* @__PURE__ */ y("span", {
			className: "flex min-w-0 flex-wrap gap-1",
			children: [r && /* @__PURE__ */ v("span", {
				className: "ui-cal-badge",
				children: r
			}), a && /* @__PURE__ */ v("span", {
				className: "ui-cal-badge",
				children: a
			})]
		})
	] });
}
function Aa({ block: e, style: t, resizeEdge: n, continuesAfter: r, dragging: i, onKeyDown: a, onClick: o }) {
	let s = ba(), c = s.editLayer === "availability", l = c && s.canEditBlock(e), u = e.kind ?? "available", d = e.label ?? (u === "available" ? s.labels.available : s.labels.unavailable), f = c && !e.placeholder && (l || s.hasBlockClick);
	return u === "available" && !c && !s.display.availableBlocks ? null : /* @__PURE__ */ y("div", {
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
		className: Y("ui-cal-avail", `ui-cal-c-${s.blockColor(e)}`),
		style: t,
		onKeyDown: f ? a : void 0,
		onClick: f ? o : void 0,
		children: [
			s.display.blockLabels && /* @__PURE__ */ v("span", {
				className: "block truncate font-medium",
				children: d
			}),
			c && s.display.time && /* @__PURE__ */ v("span", {
				className: "ui-cal-meta font-mono block",
				children: Xi(e.start, e.end, s)
			}),
			n && l && !r && /* @__PURE__ */ v("div", {
				"data-cal-resize": !0,
				"data-edge": n,
				className: "ui-cal-resize",
				"aria-hidden": "true"
			})
		]
	});
}
function ja({ draft: e, invalid: t, style: n }) {
	let r = ba(), i = e.target === "event" ? e.event.title : e.target === "availability" ? e.availability.label ?? r.labels.available : void 0;
	return /* @__PURE__ */ y("div", {
		className: "ui-cal-ghost",
		"data-invalid": t ? !0 : void 0,
		style: n,
		"aria-hidden": "true",
		children: [
			i && /* @__PURE__ */ v("div", {
				className: "ui-cal-title",
				children: i
			}),
			/* @__PURE__ */ v("div", {
				className: "font-mono",
				children: Xi(e.start, e.end, r)
			}),
			t && /* @__PURE__ */ v("div", {
				className: "text-red font-medium",
				children: t
			})
		]
	});
}
//#endregion
//#region src/components/ui/calendar/useGridInteraction.ts
var Ma = 4, Na = 10, Pa = 36;
function Fa(e, t, n, r, i) {
	let a = oa(e.value.resourceId).length > 0, o = {
		action: t,
		start: n.start,
		end: n.end,
		resourceId: a ? i : void 0,
		previousResourceId: a ? r : void 0,
		resourceIds: ca(e.value.resourceId, r, i)
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
function Ia(e, t) {
	return t.target === "selection" ? !1 : ha(e.value, t) && (t.resourceId === void 0 || t.resourceId === t.previousResourceId);
}
function La({ axis: e, columns: t, pxPerMinute: n, scrollRef: r, events: i, blocks: a, initialColumn: o }) {
	let s = ba(), { addMinutes: c, computeNudgeRange: u, dateAtMinutes: d, differenceInDays: p, shiftRangeDays: m } = s.dates, [_, v] = g(null), [y, b] = g(null), x = h(null), S = h({
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
		return X(s.min + l / a, s.min, s.max);
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
			l = Fa(e.item, "move", c, s.resourceId, a.resourceId);
		} else if (e.kind === "resize" && e.item) {
			let t = w(e.origin);
			if (!t) return;
			let n = a(e.item.value, s.day, T(t, e.lastX, e.lastY), o, c);
			l = Fa(e.item, "resize", {
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
		if (e.lastY < n.top + Pa ? a = -1 : e.lastY > n.bottom - Pa && (a = 1), e.lastX < n.left + Pa ? i = -1 : e.lastX > n.right - Pa && (i = 1), !i && !a) {
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
				if (!e || a.item && Ia(a.item, e.draft)) return;
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
					let o = t.dayBounds(e.day), s = Math.min(i, o.max - o.min), c = X(Bi(a.anchorMinute, i, "floor"), o.min, o.max - s), l = Math.min(c + Math.max(i, t.clickCreateDuration), o.max);
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
					n > Na && (t.moved = !0);
					return;
				}
				if (t.kind === "click" || n < Ma) {
					n >= Ma && (t.moved = !0);
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
		let h = e === "y" ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"], g = e === "y" ? ["ArrowLeft", "ArrowRight"] : ["ArrowUp", "ArrowDown"], _ = t[l];
		if (!_) return;
		let v = null;
		if (h.includes(n.key)) {
			let e = n.key === h[0] ? -C : C;
			if (n.shiftKey) {
				let t = c(d.end, e);
				if (t.getTime() - d.start.getTime() < C * 6e4) return;
				v = Fa(f, "resize", {
					start: d.start,
					end: t
				}, _.resourceId, _.resourceId);
			} else v = Fa(f, "move", u(d, e, s.dayBounds(d.start)), _.resourceId, _.resourceId);
		} else if (g.includes(n.key) && !n.shiftKey) {
			let e = t[l + (n.key === g[0] ? -1 : 1)];
			if (!e) return;
			v = Fa(f, "move", m(d, p(e.day, _.day)), _.resourceId, e.resourceId);
		}
		v && (n.preventDefault(), !Ia(f, v) && s.commit(v, "keyboard") && j(o));
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
		let e = t[X(o, 0, Math.max(0, t.length - 1))], n = e ? s.dayBounds(e.day) : s.bounds, r = Math.min(C, n.max - n.min), i = X(Bi((e && s.timeZone && s.scrollToMinute !== void 0 ? s.dates.minutesOfDay(s.dates.wallDateAtMinutes(e.day, s.scrollToMinute)) : s.scrollToMinute) ?? n.min, C, "floor"), n.min, n.max - r);
		return {
			column: X(o, 0, Math.max(0, t.length - 1)),
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
					let t = X(y.end + e, y.start + C, i.max);
					f = {
						...y,
						end: t
					};
				} else {
					let t = X(y.start + e, i.min, i.max - u);
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
				let e = X(y.column + (n.key === c ? -1 : 1), 0, t.length - 1), r = s.dayBounds(t[e].day), a = Math.min(u, r.max - r.min), o = X(r.min + y.start - i.min, r.min, r.max - a);
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
				let e = n.key === "PageUp" ? -60 : 60, t = X(y.start + e, i.min, i.max - u);
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
var Ra = 22, za = 3, Ba = 18, Va = 36;
function Ha(e) {
	let t = e.querySelector(".ui-cal-head")?.offsetHeight ?? 0;
	return (e.clientHeight - t) / 2;
}
function Ua(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return a ? a.endMinute <= n && a.startMinute < n ? "before" : a.startMinute >= r ? "after" : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	} : null;
}
function Wa({ days: e, events: t, availability: n, label: r }) {
	let i = ba(), { daySegment: a, formatLongDate: o, getFormatter: s, isAllDayLike: c, isSameDay: d, minutesOfDay: m, toDateKey: _ } = i.dates, { bounds: b, resources: x, hourHeight: S } = i, C = S / 60, w = h(null), T = u(), [E, D] = g(!1), O = p(() => e.flatMap((e) => x.length ? x.map((t) => ({
		key: `${_(e)}|${t.id}`,
		day: e,
		bounds: i.dates.dayBounds(e, i.bounds),
		resourceId: t.id
	})) : [{
		key: _(e),
		day: e,
		bounds: i.dates.dayBounds(e, i.bounds)
	}]), [
		e,
		x,
		_,
		i.dates,
		i.bounds
	]), k = p(() => new Map(t.map((e) => [e.id, e])), [t]), A = p(() => new Map(n.map((e) => [e.id, e])), [n]), j = O.findIndex((e) => d(e.day, i.now)), M = La({
		axis: "y",
		columns: O,
		pxPerMinute: C,
		scrollRef: w,
		events: k,
		blocks: A,
		initialColumn: Math.max(0, j)
	}), { drag: N, cursor: P } = M, F = i.editLayer === "availability", I = p(() => {
		let e = t.filter((e) => !c(e)), r = Ba / C;
		return O.map((t) => {
			let o = t.bounds ?? i.bounds, s = 0, c = 0, l = [];
			for (let n of e) {
				if (!sa(n.resourceId, t.resourceId, { emptyMatchesAll: !1 })) continue;
				let e = Ua(n, t.day, o.min, o.max, a);
				e === "before" ? s++ : e === "after" ? c++ : e && l.push(e);
			}
			let u = ia(l.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r), d = [];
			for (let e of n) {
				if (!sa(e.resourceId, t.resourceId, { emptyMatchesAll: !0 })) continue;
				let n = Ua(e, t.day, o.min, o.max, a);
				n && typeof n == "object" && d.push(n);
			}
			let f = F ? ia(d.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r) : null, p = [];
			return i.hasAvailability && i.shadeOutsideAvailability && (p = ra(o.min, o.max, d.map((e) => [e.start, e.end]))), {
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
				let o = a(n.start, n.end, r.day) !== null && sa(n.resourceId, r.resourceId, { emptyMatchesAll: !1 });
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
		let { lanes: n, count: r } = aa(e);
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
	]), R = E ? L.count : Math.min(L.count, za), z = L.runs.filter((e) => (L.lanes.get(e.id) ?? 0) >= R).length, B = h(C), V = h(null);
	l(() => {
		let e = w.current;
		if (!e) return;
		let t = () => {
			V.current = (e.scrollTop + Ha(e)) / B.current;
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, []), f(() => {
		let e = w.current;
		if (!e || B.current === C) return;
		B.current = C;
		let t = V.current;
		t !== null && (e.scrollTop = Math.max(0, t * C - Ha(e)));
	}, [C]);
	let ee = h(null), H = i.scrollToMinute, { dates: U, timeZone: te, now: W } = i, G = i.scrollAlign;
	l(() => {
		let t = w.current;
		if (!t || ee.current === i.view) return;
		ee.current = i.view;
		let n = e.find((e) => d(e, W)) ?? e[0], r = te ? U.minutesOfDay(U.wallDateAtMinutes(n, H ?? 480)) : H ?? 480, a = U.dayBounds(n, b), o = t.querySelector(".ui-cal-head"), s = () => {
			let e = G === "center" ? Ha(t) : 8;
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
			l || (ee.current = null);
		};
	}, [
		i.view,
		H,
		G,
		b,
		C,
		e,
		d,
		U,
		te,
		W
	]);
	let K = e.length > 1, ne = x.length > 0, re = !!i.timeZone && i.sharedTimeAxis, ie = p(() => va(O.map((e) => ({
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
	]), ae = ie.reference, oe = ie.axes.map((e) => !!i.timeZone && (!re || !e.matchesReference)), q = ae ? s(i.locale, { timeZoneName: "short" }).formatToParts(i.dates.dateAtMinutes(ae.day, ae.bounds.min)).find((e) => e.type === "timeZoneName")?.value : void 0, se = oe.some(Boolean) ? Math.max(ne ? i.resourceMinWidth : 0, 180) : ne ? i.resourceMinWidth : 44, ce = Math.max(...O.map((e) => (e.bounds?.max ?? b.max) - (e.bounds?.min ?? b.min))) * C, J = {
		"--cal-hour": `${S}px`,
		"--cal-offset": `${-(b.min % 60 * C)}px`,
		height: ce
	}, le = ae?.bounds ?? b, ue = [], de = Math.max(5, i.slotLabelInterval);
	for (let e = Math.ceil(le.min / de) * de; e < le.max; e += de) e > le.min && ue.push(e);
	let fe = s(i.locale, { weekday: "short" }), pe = m(i.now), me = i.nowIndicator, he = N?.draft, ge = he && (he.target === "selection" ? he.resourceId : he.resourceIds), _e = "";
	if (P) {
		let e = O[P.column];
		if (e) {
			let t = e.resourceId ? i.resourceById.get(e.resourceId) : void 0;
			_e = `${o(e.day, i.locale)}, ${i.timeZone ? Yi(i.dates.dateAtMinutes(e.day, P.start), i) : Li(P.start)} to ${i.timeZone ? Yi(i.dates.dateAtMinutes(e.day, P.end), i) : Li(P.end)}${t ? `, ${t.title}` : ""}`;
		}
	}
	return /* @__PURE__ */ v("div", {
		ref: w,
		"data-cal-drag": N?.draft.action,
		className: "ui-cal-scroll relative min-h-0 flex-1 overflow-auto",
		style: i.timeZone && !ae ? { "--cal-gutter": "0px" } : void 0,
		children: /* @__PURE__ */ y("div", {
			className: "flex min-h-full flex-col",
			style: { minWidth: `calc(var(--cal-gutter) + ${O.length * se}px)` },
			children: [/* @__PURE__ */ y("div", {
				className: "ui-cal-head border-border border-b",
				children: [
					K && /* @__PURE__ */ y("div", {
						className: "flex",
						children: [/* @__PURE__ */ v("div", {
							className: q ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: q ? i.timeZone : void 0,
							"aria-label": q ? i.timeZone : void 0,
							children: q
						}), e.map((e) => /* @__PURE__ */ v(Ga, {
							day: e,
							weekday: fe.format(e),
							isToday: d(e, i.now),
							grow: ne ? x.length : 1,
							onOpen: () => i.openDay(e),
							bordered: ne
						}, _(e)))]
					}),
					ne && /* @__PURE__ */ y("div", {
						className: "flex",
						children: [/* @__PURE__ */ v("div", {
							className: q && !K ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: !K && q ? i.timeZone : void 0,
							"aria-label": !K && q ? i.timeZone : void 0,
							children: K ? void 0 : q
						}), O.map((e, t) => /* @__PURE__ */ v(Ka, {
							resource: i.resourceById.get(e.resourceId ?? ""),
							sub: t % x.length !== 0
						}, e.key))]
					}),
					L.count > 0 && /* @__PURE__ */ y("div", {
						className: "border-border flex border-t",
						children: [/* @__PURE__ */ y("div", {
							className: "ui-cal-corner text-text-tertiary flex flex-col items-end justify-center gap-0.5 pr-2 text-2xs",
							children: [/* @__PURE__ */ v("span", { children: i.labels.allDay }), L.count > za && /* @__PURE__ */ v("button", {
								type: "button",
								className: "text-accent cursor-pointer hover:underline",
								"aria-expanded": E,
								onClick: () => D((e) => !e),
								children: E ? i.labels.showLess : i.labels.more(z)
							})]
						}), /* @__PURE__ */ v("div", {
							className: "relative flex-1",
							style: { height: R * Ra + 4 },
							children: L.runs.map((e) => {
								let t = L.lanes.get(e.id) ?? 0;
								if (t >= R) return null;
								let n = O[e.start], r = O[e.end - 1];
								return /* @__PURE__ */ v(Oa, {
									event: e.event,
									compact: !0,
									continuesBefore: !!n && a(e.event.start, e.event.end, n.day)?.continuesBefore,
									continuesAfter: !!r && a(e.event.start, e.event.end, r.day)?.continuesAfter,
									style: {
										top: t * Ra + 2,
										height: Ra - 3,
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
			}), /* @__PURE__ */ y("div", {
				className: "flex flex-1",
				children: [/* @__PURE__ */ y("div", {
					className: "ui-cal-gutter relative",
					style: { height: ce },
					"aria-hidden": "true",
					children: [
						q && !K && !ne && /* @__PURE__ */ v("span", {
							className: "text-text-tertiary absolute top-0 right-2 text-2xs",
							"aria-hidden": "true",
							children: q
						}),
						ae && ue.map((e) => {
							let t = i.dates.parts(i.dates.dateAtMinutes(ae.day, e));
							return /* @__PURE__ */ v("span", {
								className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
								style: { top: (e - ae.bounds.min) * C },
								children: Zi(t.hour * 60 + t.minute, i)
							}, e);
						}),
						!i.timeZone && ue.map((e) => /* @__PURE__ */ v("span", {
							className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
							style: { top: (e - b.min) * C },
							children: Zi(e, i)
						}, e))
					]
				}), /* @__PURE__ */ y("div", {
					role: "group",
					"aria-roledescription": "time grid",
					"aria-label": r,
					"aria-describedby": T,
					tabIndex: 0,
					className: "ui-cal-lines ui-cal-surface relative flex flex-1 select-none focus-visible:outline-none",
					style: J,
					onPointerDown: M.onPointerDown,
					onFocus: M.onGridFocus,
					onBlur: M.onGridBlur,
					onKeyDown: M.onGridKeyDown,
					children: [
						/* @__PURE__ */ v("span", {
							id: T,
							className: "sr-only",
							children: i.labels.gridHelp
						}),
						/* @__PURE__ */ v("span", {
							className: "sr-only",
							"aria-live": "polite",
							children: _e
						}),
						O.map((e, t) => {
							let n = I[t], r = e.bounds ?? i.bounds, o = oe[t] ? 72 : 0, s = oe[t] ? ie.axes[t].minutes : [], c = d(e.day, i.now), l = ne && t % x.length !== 0;
							return /* @__PURE__ */ y("div", {
								"data-cal-col": t,
								"data-today": c || void 0,
								"data-subcol": l || void 0,
								className: "ui-cal-col flex-1",
								style: {
									minWidth: se,
									height: (r.max - r.min) * C
								},
								children: [
									s.map((t) => /* @__PURE__ */ v("span", {
										className: "ui-cal-zone-label",
										style: { top: (t - r.min) * C },
										"aria-hidden": "true",
										children: Yi(i.dates.dateAtMinutes(e.day, t), i)
									}, `label-${t}`)),
									n.outside.map(([e, t]) => /* @__PURE__ */ v("div", {
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
										return /* @__PURE__ */ v(Aa, {
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
									/* @__PURE__ */ v("div", {
										style: o ? { left: o } : void 0,
										className: Y("absolute inset-0", F && "ui-cal-muted-layer"),
										children: n.placed.map((e) => {
											let a = n.layout.get(e.item.id), o = Math.max((e.end - e.start) * C, Ba);
											return /* @__PURE__ */ v(Oa, {
												event: e.item,
												compact: o < Va,
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
									n.earlier > 0 && /* @__PURE__ */ v("span", {
										className: "ui-cal-overflow",
										"data-edge": "top",
										"data-cal-ignore": !0,
										children: i.labels.earlier(n.earlier)
									}),
									n.later > 0 && /* @__PURE__ */ v("span", {
										className: "ui-cal-overflow",
										"data-edge": "bottom",
										"data-cal-ignore": !0,
										children: i.labels.later(n.later)
									}),
									c && me && pe >= r.min && pe <= r.max && /* @__PURE__ */ v("div", {
										className: "ui-cal-now",
										"data-axis": "y",
										"data-dot": !l || void 0,
										style: { top: (pe - r.min) * C }
									}),
									he && sa(ge, e.resourceId, { emptyMatchesAll: !0 }) && (() => {
										let t = Ua(he, e.day, r.min, r.max, a);
										return !t || typeof t != "object" ? null : /* @__PURE__ */ v(ja, {
											draft: he,
											invalid: N?.invalid,
											style: {
												top: (t.start - r.min) * C + 1,
												height: Math.max((t.end - t.start) * C - 2, Ba),
												left: o + 1,
												right: 4
											}
										});
									})(),
									P?.column === t && /* @__PURE__ */ v("div", {
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
function Ga({ day: e, weekday: t, isToday: n, grow: r, bordered: i, onOpen: a }) {
	let o = ba();
	return /* @__PURE__ */ v("div", {
		className: Y("flex min-w-0 items-center justify-center py-1.5", i && "border-border border-l"),
		style: { flex: `${r} 1 0` },
		children: /* @__PURE__ */ y("button", {
			type: "button",
			onClick: a,
			"aria-label": o.dates.formatLongDate(e, o.locale),
			"aria-current": n ? "date" : void 0,
			className: "hover:bg-bg-hover flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors duration-[100ms]",
			children: [/* @__PURE__ */ v("span", {
				className: Y("text-2xs font-medium uppercase", n ? "text-accent" : "text-text-tertiary"),
				children: t
			}), /* @__PURE__ */ v("span", {
				className: Y("flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold", n ? "bg-accent text-text-on-accent" : "text-text-primary"),
				children: o.dates.parts(e).day
			})]
		})
	});
}
function Ka({ resource: e, sub: t }) {
	let n = ba();
	return /* @__PURE__ */ y("div", {
		className: Y("border-border flex min-w-0 flex-1 items-center gap-1.5 border-l px-2 py-1.5", t && "ui-cal-subhead"),
		style: { minWidth: n.resourceMinWidth },
		title: e?.title,
		children: [e?.color && /* @__PURE__ */ v("span", {
			className: Y("ui-cal-dot", `ui-cal-c-${e.color}`),
			"aria-hidden": "true"
		}), /* @__PURE__ */ y("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ v("span", {
				className: "text-text-primary block truncate text-xs font-medium",
				children: e?.title
			}), e?.subtitle && /* @__PURE__ */ v("span", {
				className: "text-text-tertiary block truncate text-2xs",
				children: e.subtitle
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/calendar/TimelineView.tsx
var qa = 34, Ja = 4, Ya = 28;
function Xa(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return !a || a.endMinute <= n || a.startMinute >= r ? null : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	};
}
function Za({ day: e, events: t, availability: n, label: r }) {
	let i = ba(), { daySegment: a, isSameDay: o, minutesOfDay: s } = i.dates, c = i.dayBounds(e), d = h(null), f = i.resources.length === 0 && t.length === 0 && n.length === 0, [m, _] = g(0);
	l(() => {
		let e = d.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(() => {
			let t = e.querySelector(".ui-cal-row-head");
			_(Math.max(0, e.clientWidth - (t?.offsetWidth ?? 0)));
		});
		return t.observe(e), () => t.disconnect();
	}, [f]);
	let b = (c.max - c.min) / 60, x = Math.max(i.timelineHourWidth, m / b), S = x / 60, C = (c.max - c.min) * S, w = u(), [T, E] = g(/* @__PURE__ */ new Set()), D = p(() => {
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
	]), k = La({
		axis: "x",
		columns: O,
		pxPerMinute: S,
		scrollRef: d,
		events: p(() => new Map(t.map((e) => [e.id, e])), [t]),
		blocks: p(() => new Map(n.map((e) => [e.id, e])), [n]),
		initialColumn: 0
	}), { drag: j, cursor: N } = k, P = i.editLayer === "availability", F = p(() => {
		let r = Ya / S;
		return O.map((o) => {
			let s = t.filter((e) => sa(e.resourceId, o.resourceId, { emptyMatchesAll: !1 })).map((t) => Xa(t, e, c.min, c.max, a)).filter((e) => e !== null), l = aa(s.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))), u = n.filter((e) => sa(e.resourceId, o.resourceId, { emptyMatchesAll: !0 })).map((t) => Xa(t, e, c.min, c.max, a)).filter((e) => e !== null), d = P ? aa(u.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))) : null, f = Math.max(1, l.count, d?.count ?? 0);
			return {
				placed: s,
				lanes: l,
				blocks: u,
				blockLanes: d,
				outside: i.hasAvailability && i.shadeOutsideAvailability ? ra(c.min, c.max, u.map((e) => [e.start, e.end])) : [],
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
	]), I = h(!1), L = i.timeZone && i.scrollToMinute !== void 0 ? i.dates.minutesOfDay(i.dates.wallDateAtMinutes(e, i.scrollToMinute)) : i.scrollToMinute, R = i.scrollAlign;
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
	let V = s(i.now), ee = i.nowIndicator && o(e, i.now) && V >= c.min && V <= c.max, H = j?.draft, U = H && (H.target === "selection" ? H.resourceId : H.resourceIds), te = {
		"--cal-hour": `${x}px`,
		"--cal-offset": `${-(c.min % 60 * S)}px`
	}, W = "";
	if (N) {
		let t = O[N.column], n = t?.resourceId ? i.resourceById.get(t.resourceId) : void 0;
		W = `${n ? `${n.title}, ` : ""}${i.timeZone ? Yi(i.dates.dateAtMinutes(e, N.start), i) : Li(N.start)} to ${i.timeZone ? Yi(i.dates.dateAtMinutes(e, N.end), i) : Li(N.end)}`;
	}
	function G(e) {
		E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	if (f) return /* @__PURE__ */ v("div", {
		className: "text-text-tertiary flex flex-1 items-center justify-center p-6 text-xs",
		children: i.labels.noResources
	});
	let K = 0;
	return /* @__PURE__ */ v("div", {
		ref: d,
		"data-cal-drag": j?.draft.action,
		className: "ui-cal-scroll ui-cal-timeline relative min-h-0 flex-1 overflow-auto",
		children: /* @__PURE__ */ y("div", {
			style: { width: `calc(var(--cal-row-head) + ${C}px)` },
			children: [/* @__PURE__ */ y("div", {
				className: "ui-cal-head border-border flex border-b",
				children: [/* @__PURE__ */ v("div", { className: "ui-cal-row-head ui-cal-corner-x" }), /* @__PURE__ */ v("div", {
					className: "relative h-7",
					style: { width: C },
					"aria-hidden": "true",
					children: z.map((t) => /* @__PURE__ */ v("span", {
						className: "text-text-tertiary font-mono absolute top-1.5 text-2xs",
						style: { left: (t - c.min) * S + 4 },
						children: i.timeZone ? Yi(i.dates.dateAtMinutes(e, t), i) : Zi(t, i)
					}, t))
				})]
			}), /* @__PURE__ */ y("div", {
				role: "group",
				"aria-roledescription": "timeline",
				"aria-label": r,
				"aria-describedby": w,
				tabIndex: 0,
				className: "ui-cal-surface select-none focus-visible:outline-none",
				onPointerDown: k.onPointerDown,
				onFocus: k.onGridFocus,
				onBlur: k.onGridBlur,
				onKeyDown: k.onGridKeyDown,
				children: [
					/* @__PURE__ */ v("span", {
						id: w,
						className: "sr-only",
						children: i.labels.gridHelp
					}),
					/* @__PURE__ */ v("span", {
						className: "sr-only",
						"aria-live": "polite",
						children: W
					}),
					D.map((t) => {
						let n = t.name !== void 0 && T.has(t.name);
						return /* @__PURE__ */ y("div", { children: [t.name !== void 0 && /* @__PURE__ */ v("div", {
							className: "bg-bg-pinned border-border flex border-b",
							children: /* @__PURE__ */ y("button", {
								type: "button",
								className: "ui-cal-group text-text-secondary hover:text-text-primary flex cursor-pointer items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase transition-colors duration-[100ms]",
								"aria-expanded": !n,
								onClick: () => G(t.name),
								children: [
									v(n ? M : A, { className: "h-3 w-3" }),
									t.name,
									/* @__PURE__ */ v("span", {
										className: "text-text-tertiary font-normal",
										children: t.resources.length
									})
								]
							})
						}), !n && t.resources.map((t) => {
							let n = K++, r = F[n], o = O[n];
							if (!r || !o) return null;
							let s = r.laneCount * qa + Ja * 2;
							return /* @__PURE__ */ y("div", {
								className: "border-border flex border-b",
								children: [/* @__PURE__ */ y("div", {
									className: "ui-cal-row-head flex items-center gap-1.5 px-2",
									title: t.title,
									children: [t.color && /* @__PURE__ */ v("span", {
										className: Y("ui-cal-dot", `ui-cal-c-${t.color}`),
										"aria-hidden": "true"
									}), /* @__PURE__ */ y("span", {
										className: "min-w-0",
										children: [/* @__PURE__ */ v("span", {
											className: "text-text-primary block truncate text-xs font-medium",
											children: t.title
										}), t.subtitle && /* @__PURE__ */ v("span", {
											className: "text-text-tertiary block truncate text-2xs",
											children: t.subtitle
										})]
									})]
								}), /* @__PURE__ */ y("div", {
									"data-cal-col": n,
									className: "ui-cal-lines-x relative shrink-0",
									style: {
										...te,
										width: C,
										height: s
									},
									children: [
										r.outside.map(([e, t]) => /* @__PURE__ */ v("div", {
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
											return /* @__PURE__ */ v(Aa, {
												block: e.item,
												resizeEdge: "right",
												continuesAfter: e.continuesAfter,
												dragging: j?.itemId === e.item.id,
												style: {
													left: (e.start - c.min) * S,
													width: Math.max((e.end - e.start) * S, 4),
													top: t === void 0 ? 0 : Ja + t * qa,
													height: t === void 0 ? "100%" : qa - 3
												},
												onKeyDown: (t) => k.onItemKeyDown(t, "availability", e.item.id, n),
												onClick: (t) => {
													t.detail === 0 && i.clickBlock(e.item);
												}
											}, e.item.id);
										}),
										/* @__PURE__ */ v("div", {
											className: Y("absolute inset-0", P && "ui-cal-muted-layer"),
											children: r.placed.map((e) => {
												let t = r.lanes.lanes.get(e.item.id) ?? 0;
												return /* @__PURE__ */ v(Oa, {
													event: e.item,
													compact: !1,
													dense: !0,
													resizeEdge: "right",
													continuesBefore: e.continuesBefore,
													continuesAfter: e.continuesAfter,
													dragging: j?.itemId === e.item.id,
													style: {
														left: (e.start - c.min) * S + 1,
														width: Math.max((e.end - e.start) * S, Ya) - 2,
														top: Ja + t * qa,
														height: qa - 3,
														justifyContent: "center"
													},
													onKeyDown: (t) => k.onItemKeyDown(t, "event", e.item.id, n),
													onClick: (t) => {
														t.detail === 0 && i.clickEvent(e.item);
													}
												}, e.item.id);
											})
										}),
										ee && /* @__PURE__ */ v("div", {
											className: "ui-cal-now",
											"data-axis": "x",
											style: { left: (V - c.min) * S }
										}),
										H && sa(U, o.resourceId, { emptyMatchesAll: !0 }) && (() => {
											let t = Xa(H, e, c.min, c.max, a);
											return t ? /* @__PURE__ */ v(ja, {
												draft: H,
												invalid: j?.invalid,
												style: {
													left: (t.start - c.min) * S + 1,
													width: Math.max((t.end - t.start) * S - 2, Ya),
													top: Ja,
													bottom: Ja
												}
											}) : null;
										})(),
										N?.column === n && /* @__PURE__ */ v("div", {
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
var Qa = {
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
function $a({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	let o = r ? [] : e.filter((e) => !e.disabled), s = o.find((e) => e.value === t) ?? o[0];
	function c(e, r) {
		if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
		let i;
		switch (e.key) {
			case "ArrowRight":
			case "ArrowDown":
				i = 1;
				break;
			case "ArrowLeft":
			case "ArrowUp":
				i = -1;
				break;
			default: return;
		}
		let a = o.findIndex((e) => e.value === r);
		if (a < 0) return;
		e.preventDefault();
		let s = (a + i + o.length) % o.length;
		(e.currentTarget.parentElement?.querySelectorAll("[role=\"radio\"]:enabled"))?.[s]?.focus();
		let c = o[s].value;
		c !== t && n(c);
	}
	return /* @__PURE__ */ v("div", {
		role: "radiogroup",
		"aria-label": a,
		className: Y("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ v("button", {
			type: "button",
			role: "radio",
			"aria-checked": e.value === t,
			tabIndex: e === s ? 0 : -1,
			disabled: r || e.disabled,
			onKeyDown: (t) => c(t, e.value),
			onClick: () => n(e.value),
			className: Y("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", e.disabled && !r && "cursor-not-allowed opacity-40", !r && !e.disabled && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/Calendar.tsx
var eo = [
	"day",
	"threeDay",
	"week",
	"month",
	"agenda"
];
function to() {
	return /* @__PURE__ */ new Date();
}
function no(e) {
	let [t, n] = g(to);
	return l(() => {
		if (e) return;
		let t = setInterval(() => n(to()), 3e4);
		return () => clearInterval(t);
	}, [e]), e ?? t;
}
function ro(e) {
	let [t, n] = g(null);
	return l(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = new ResizeObserver((e) => {
			n(e[0]?.contentRect.width ?? null);
		});
		return r.observe(t), () => r.disconnect();
	}, [e]), t;
}
var io = /* @__PURE__ */ new Set();
function ao(e) {
	let t = !1;
	try {
		t = process.env.NODE_ENV !== "production";
	} catch {}
	!t || io.has(e) || (io.add(e), console.warn(`[Calendar] ${e}`));
}
function oo(e, t, n) {
	try {
		return Ii(t);
	} catch {
		return ao(`Invalid ${e} "${t}", expected HH:mm; using the default.`), n;
	}
}
function so({ events: e = [], availability: t, resources: n = [], view: r, defaultView: i = "week", onViewChange: a, views: o = eo, date: s, defaultDate: c, onDateChange: d, onRangeChange: m, weekStartsOn: _ = 1, workWeekDays: b, agendaDays: x = 7, slotMinTime: S = "07:00", slotMaxTime: C = "20:00", slotDuration: w = 15, slotLabelInterval: T = 60, sharedTimeAxis: E = !1, hourHeight: D = 48, timelineHourWidth: O = 96, resourceMinWidth: k = 120, scrollToTime: A, scrollAlign: N = "start", now: P, nowIndicator: F = !0, editLayer: I = "events", readOnly: L = !1, selectable: R, clickCreateDuration: z = 30, shadeOutsideAvailability: B = !0, onCreate: V, onEventClick: ee, onEventChange: U, onAvailabilityClick: te, onAvailabilityChange: W, validate: G, onInvalidChange: K, onDateClick: ne, renderEvent: re, monthMaxEvents: ie, agendaShowAvailability: ae = !0, display: oe, narrowView: q = "day", narrowWidth: se = 640, locale: ce = "en-GB", timeZone: J, hour12: le = !1, labels: ue, toolbar: de = !0, toolbarActions: fe, loading: pe = !1, className: me, "aria-label": he }) {
	let ge = p(() => _a(J), [J]), { addDays: _e, formatLongDate: ve, formatRangeTitle: ye, getVisibleDays: be, minutesOfDay: xe, shiftDate: Se } = ge, Ce = h(null), we = u(), Te = no(P), Ee = ro(Ce), [De, Oe] = g(i), [ke, Ae] = g(() => c ?? to()), je = r ?? De, Me = s ?? ke, Ne = (e) => {
		r === void 0 && Oe(e), a?.(e);
	}, Pe = (e) => {
		s === void 0 && Ae(e), d?.(e);
	}, Fe = Ee !== null && Ee < se && q !== !1 && Hi(je) && je !== "day" && q ? q : je, Ie = p(() => ({
		...Qa,
		...ue,
		views: {
			...Qa.views,
			...ue?.views
		},
		status: {
			...Qa.status,
			...ue?.status
		}
	}), [ue]), Le = p(() => ({
		weekStartsOn: _,
		workWeekDays: b,
		agendaDays: x
	}), [
		_,
		b,
		x
	]), Re = Me.getTime(), ze = p(() => be(Fe, new Date(Re), Le), [
		Fe,
		Re,
		Le,
		be
	]), X = ze[0], Be = _e(ze[ze.length - 1], 1), Ve = X.getTime(), He = Be.getTime(), Ue = h(m);
	f(() => {
		Ue.current = m;
	}), l(() => {
		Ue.current?.({
			start: new Date(Ve),
			end: new Date(He),
			view: Fe
		});
	}, [
		Ve,
		He,
		Fe
	]);
	let We = p(() => e.filter((e) => ea(e.start.getTime(), Math.max(e.end.getTime(), e.start.getTime() + 1), Ve, He)), [
		e,
		Ve,
		He
	]), Ge = p(() => (t ?? []).filter((e) => ea(e.start.getTime(), e.end.getTime(), Ve, He)), [
		t,
		Ve,
		He
	]), Ke = oo("slotMinTime", S, 0), qe = oo("slotMaxTime", C, 1440);
	qe <= Ke && ao(`slotMaxTime "${C}" must be after slotMinTime "${S}"; showing the whole day.`);
	let Je = p(() => qe > Ke ? {
		min: Ke,
		max: qe
	} : {
		min: 0,
		max: 1440
	}, [Ke, qe]), Ye = Math.max(1, Math.round(w)), Z;
	if (A) Z = oo("scrollToTime", A, Je.min);
	else {
		let e = Ge.filter((e) => (e.kind ?? "available") === "available").map((e) => J ? ge.parts(e.start).hour * 60 + ge.parts(e.start).minute : xe(e.start)).filter((e) => e >= Je.min && e < Je.max);
		e.length && (Z = Math.min(...e));
	}
	let Xe = p(() => new Map(n.map((e) => [e.id, e])), [n]), Ze = ye(Fe, Me, {
		...Le,
		locale: ce
	}), Qe = {
		locale: ce,
		hour12: le,
		timeZone: J
	}, $e = (e) => Xe.get(oa(e)[0] ?? ""), et = (e) => {
		let t = oa(e).map((e) => Xe.get(e)?.title).filter(Boolean);
		return t.length ? `, ${t.join(", ")}` : "";
	}, tt = (e) => e.status && e.status !== "confirmed" ? Ie.status[e.status] : void 0, nt = (e) => {
		let t = G?.(e);
		return typeof t == "string" && t ? t : void 0;
	}, rt = {
		view: Fe,
		dates: ge,
		timeZone: J,
		dayBounds: (e) => ge.dayBounds(e, Je),
		locale: ce,
		hour12: le,
		weekStartsOn: _,
		now: Te,
		nowIndicator: F,
		labels: Ie,
		itemHelpId: we,
		resources: n,
		resourceById: Xe,
		step: Ye,
		bounds: Je,
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
		scrollToMinute: Z,
		scrollAlign: N,
		canEditEvent: (e) => !e.placeholder && !L && !!U && I === "events" && (e.editable ?? e.status !== "cancelled"),
		canEditBlock: (e) => !e.placeholder && !L && !!W && I === "availability" && e.editable !== !1,
		eventColor: (e) => e.color ?? $e(e.resourceId)?.color ?? "accent",
		blockColor: (e) => e.color ?? $e(e.resourceId)?.color ?? ((e.kind ?? "available") === "available" ? "green" : "gray"),
		statusLabel: tt,
		describeEvent: (e) => {
			let t = e.allDay ? `${ve(e.start, ce)}, ${Ie.allDay}` : `${ve(e.start, ce)}, ${Xi(e.start, e.end, Qe)}`, n = tt(e);
			return [
				e.title,
				t,
				n,
				e.badge,
				e.description
			].filter(Boolean).join(", ").concat(et(e.resourceId));
		},
		describeBlock: (e) => [
			(e.kind ?? "available") === "available" ? Ie.available : Ie.unavailable,
			e.label,
			`${ve(e.start, ce)}, ${Xi(e.start, e.end, Qe)}`
		].filter(Boolean).join(", ").concat(et(e.resourceId)),
		renderEvent: re,
		hasEventClick: !!ee,
		hasBlockClick: !!te,
		clickEvent: (e) => ee?.(e),
		clickBlock: (e) => te?.(e),
		check: nt,
		commit: (e, t) => {
			let n = nt(e);
			if (n) return K?.(e, n), !1;
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
				delete n.target, e.target === "event" ? U?.(n) : W?.(n);
			}
			return !0;
		},
		openDay: (e) => {
			if (ne) {
				ne(e);
				return;
			}
			Pe(e), Fe !== "day" && Fe !== "timeline" && Ne("day");
		}
	}, it = o.map((e) => ({
		value: e,
		label: Ie.views[e]
	})), at = he ?? Ze, ot = JSON.stringify([
		J,
		ze.map((e) => e.getTime()),
		Je.min,
		Je.max,
		Ye,
		n.map((e) => e.id)
	]), Q;
	return Q = Fe === "month" ? /* @__PURE__ */ v(Da, {
		date: Me,
		events: We,
		availability: Ge,
		label: at
	}, J) : Fe === "agenda" ? /* @__PURE__ */ v(xa, {
		days: ze,
		events: We.filter((e) => !e.placeholder),
		availability: Ge.filter((e) => !e.placeholder),
		label: at
	}, J) : Fe === "timeline" ? /* @__PURE__ */ v(Za, {
		day: ze[0],
		events: We,
		availability: Ge,
		label: at
	}, ot) : /* @__PURE__ */ v(Wa, {
		days: ze,
		events: We,
		availability: Ge,
		label: at
	}, ot), /* @__PURE__ */ v(ya.Provider, {
		value: rt,
		children: /* @__PURE__ */ y("div", {
			ref: Ce,
			"data-time-zone": J,
			"data-shared-axis": E && J && [
				"day",
				"threeDay",
				"workWeek",
				"week"
			].includes(Fe) ? !0 : void 0,
			role: "region",
			"aria-label": he ?? Ze,
			"aria-busy": pe || void 0,
			className: Y("ui-cal relative flex h-full min-h-0 flex-col overflow-hidden", me),
			children: [
				/* @__PURE__ */ v("span", {
					id: we,
					className: "sr-only",
					children: Ie.itemHelp
				}),
				de && /* @__PURE__ */ y("div", {
					className: "ui-cal-noprint border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2",
					children: [/* @__PURE__ */ y("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ v(sr, {
								size: "sm",
								onClick: () => Pe(Te),
								children: Ie.today
							}),
							/* @__PURE__ */ y("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ v(sr, {
									variant: "icon",
									size: "sm",
									icon: j,
									"aria-label": Ie.previous,
									onClick: () => Pe(Se(Fe, Me, -1, Le))
								}), /* @__PURE__ */ v(sr, {
									variant: "icon",
									size: "sm",
									icon: M,
									"aria-label": Ie.next,
									onClick: () => Pe(Se(Fe, Me, 1, Le))
								})]
							}),
							/* @__PURE__ */ v("h2", {
								className: "text-text-primary truncate text-sm font-semibold",
								"aria-live": "polite",
								children: Ze
							})
						]
					}), /* @__PURE__ */ y("div", {
						className: "flex items-center gap-1.5",
						children: [fe, o.length > 1 && (Ee === null || Ee >= o.length * 80 + 420 ? /* @__PURE__ */ v($a, {
							"aria-label": Ie.view,
							options: it,
							value: je,
							onChange: Ne
						}) : /* @__PURE__ */ v(br, {
							className: "w-28",
							size: "sm",
							options: it,
							value: je,
							onChange: (e) => Ne(e)
						}))]
					})]
				}),
				Q,
				pe && /* @__PURE__ */ y("div", {
					className: "ui-cal-loading",
					role: "status",
					children: [/* @__PURE__ */ v(H, { className: "text-accent h-6 w-6 animate-spin" }), /* @__PURE__ */ v("span", {
						className: "sr-only",
						children: Ie.loading
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/lib/months.ts
var co = [
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
], lo = [
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
], uo = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
];
function fo(e, t, n) {
	let r = $(e, n), i = $(t, n);
	return r.year === i.year && r.month === i.month && r.day === i.day;
}
function po(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function mo(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function ho(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function go({ year: e, month: t, timeZone: n, selected: r, rangeStart: i, rangeEnd: a, hoverDate: o, onSelect: s, onMonthChange: c, onHover: l, minDate: u, maxDate: d }) {
	let f = mo(e, t), p = ho(e, t), m = /* @__PURE__ */ new Date(), _ = h(null), [b, x] = g(null);
	function S() {
		return b !== null && b >= 1 && b <= f ? b : r && $(r, n).year === e && $(r, n).month - 1 === t ? $(r, n).day : i && $(i, n).year === e && $(i, n).month - 1 === t ? $(i, n).day : $(m, n).year === e && $(m, n).month - 1 === t ? $(m, n).day : 1;
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
		r >= 1 && r <= f && (x(r), (_.current?.querySelector(`[data-day="${r}"]`))?.focus());
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
	return /* @__PURE__ */ y("div", {
		className: "w-[252px]",
		ref: _,
		children: [/* @__PURE__ */ y("div", {
			className: "mb-2 flex items-center justify-between",
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					onClick: T,
					"aria-label": "Previous month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ v(j, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ y("span", {
					className: "text-text-primary text-xs font-semibold",
					"aria-live": "polite",
					children: [
						lo[t],
						" ",
						e
					]
				}),
				/* @__PURE__ */ v("button", {
					type: "button",
					onClick: E,
					"aria-label": "Next month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ v(M, { className: "h-3.5 w-3.5" })
				})
			]
		}), /* @__PURE__ */ y("div", {
			className: "grid grid-cols-7 gap-0",
			children: [uo.map((e) => /* @__PURE__ */ v("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), D.map((c, f) => {
				if (c === null) return /* @__PURE__ */ v("div", { className: "h-8" }, `empty-${f}`);
				let p = xi({
					year: e,
					month: t + 1,
					day: c,
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0
				}, n), h = fo(p, m, n), g = r ? fo(p, r, n) : !1, _ = i ? fo(p, i, n) : !1, y = a ? fo(p, a, n) : !1, b = po(p, i ?? null, a ?? o ?? null), x = u && p < u || d && p > d;
				return /* @__PURE__ */ v("button", {
					type: "button",
					"data-day": c,
					disabled: !!x,
					tabIndex: c === C ? 0 : -1,
					"aria-label": `${lo[t]} ${c}, ${e}`,
					"aria-current": h ? "date" : void 0,
					onClick: () => s(p),
					onKeyDown: (e) => w(e, c),
					onMouseEnter: () => l?.(p),
					onMouseLeave: () => l?.(null),
					className: Y("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", x && "cursor-not-allowed opacity-30", !x && !g && !_ && !y && !b && "hover:bg-bg-hover text-text-primary", h && !g && !_ && !y && "text-accent font-semibold", (g || _ || y) && "bg-accent text-text-on-accent font-semibold", b && !g && !_ && !y && "bg-accent-muted text-accent"),
					children: c
				}, c);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function _o({ children: e, className: t, header: n, footer: r, cover: i, selected: a, flush: o = !1, bodyClassName: s, ...c }) {
	let l = $n(), u = c.as === "button", d = c.as === "a", f = u && c.disabled, p = u ? "span" : "div", m = Y("ui-glass bg-bg-card border-border overflow-hidden rounded-md border", a && "border-accent", (u || d) && "focus-visible:outline-accent block w-full cursor-pointer appearance-none text-left transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2", (u || d) && !a && !f && "hover:border-border-strong", f && "cursor-not-allowed opacity-40", t), h = /* @__PURE__ */ y(_, { children: [
		i != null && typeof i != "boolean" && i !== "" && /* @__PURE__ */ v(p, {
			className: "block",
			children: i
		}),
		n && /* @__PURE__ */ v(p, {
			"data-control-size": l,
			className: "ui-bar border-border flex flex-col justify-center border-b px-3 py-2.5",
			children: n
		}),
		/* @__PURE__ */ v(p, {
			className: Y(u && "block", !o && "ui-surface-body p-3", s),
			children: e
		}),
		r && /* @__PURE__ */ v(p, {
			"data-control-size": l,
			className: "ui-bar border-border bg-bg-primary/50 flex flex-col justify-center border-t px-3 py-2.5",
			children: r
		})
	] });
	if (c.as === "a") {
		let { as: e, renderLink: t, ...n } = c, r = {
			...n,
			"aria-current": a ? "page" : n["aria-current"],
			className: m,
			children: h
		};
		return t ? t(r) : /* @__PURE__ */ v(e, { ...r });
	}
	if (c.as === "button") {
		let { as: e, ...t } = c;
		return /* @__PURE__ */ v(e, {
			...t,
			type: t.type ?? "button",
			"aria-pressed": a ?? t["aria-pressed"],
			className: m,
			children: h
		});
	}
	let { as: g = "div", ...b } = c;
	return /* @__PURE__ */ v(g, {
		...b,
		className: m,
		children: h
	});
}
//#endregion
//#region src/lib/codeInput.ts
function vo(e, t) {
	let n = e.replace(/\D/g, "").slice(0, t);
	return Array.from({ length: t }, (e, t) => n[t] ?? "");
}
function yo(e, t, n) {
	if (!t || e.length <= t.length) return e;
	let r = e.length - t.length, i = n ?? e.length;
	return i - r >= 0 ? e.slice(i - r, i) : e.slice(-r);
}
function bo(e, t, n) {
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
function xo(e, t, n, r) {
	if (n === "") {
		let n = [...e];
		return n[t] = "", {
			slots: n,
			focus: t
		};
	}
	return bo(e, t, yo(n, e[t], r));
}
function So(e, t) {
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
function Co({ value: e, onChange: t, onComplete: n, length: r = 6, error: i, invalid: a, disabled: o, autoFocus: s, name: c, "aria-label": l = "Verification code", className: d }) {
	let f = h([]), p = u(), m = a || !!i, [_, b] = g(() => vo(e, r)), [x, S] = g({
		value: e,
		length: r
	});
	(x.value !== e || x.length !== r) && (S({
		value: e,
		length: r
	}), (_.length !== r || _.join("") !== e) && b(vo(e, r)));
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
		t.key === "Backspace" ? (t.preventDefault(), w(So(_, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), C(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), C(e + 1));
	}
	return /* @__PURE__ */ y("div", {
		className: Y("flex flex-col gap-1.5", d),
		children: [
			/* @__PURE__ */ v("div", {
				role: "group",
				"aria-label": l,
				className: "flex justify-between gap-2",
				children: _.map((e, t) => /* @__PURE__ */ v("input", {
					ref: (e) => {
						f.current[t] = e;
					},
					type: "text",
					inputMode: "numeric",
					autoComplete: t === 0 ? "one-time-code" : "off",
					autoFocus: s && t === 0,
					disabled: o,
					"aria-label": `Digit ${t + 1} of ${r}`,
					"aria-invalid": m || void 0,
					"aria-describedby": i ? p : void 0,
					value: e,
					onFocus: (e) => e.target.select(),
					onChange: (e) => w(xo(_, t, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => T(t, e),
					onPaste: (e) => {
						e.preventDefault(), w(bo(_, t, e.clipboardData.getData("text")));
					},
					className: Y("bg-bg-secondary text-text-primary h-10 w-10 rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", m ? "border-red" : "border-border")
				}, t))
			}),
			c && /* @__PURE__ */ v("input", {
				type: "hidden",
				name: c,
				value: e,
				disabled: o
			}),
			i && /* @__PURE__ */ v("p", {
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
function wo({ options: e, value: t, onChange: n, onOptionChange: r, placeholder: i = "Select...", label: a, className: o, controlSize: s, id: c, name: d, disabled: f, "aria-label": p, "aria-describedby": _, "aria-invalid": b, query: x, onQueryChange: S, filterOptions: C = !0, selectedOption: w, renderOption: T, loading: E = !1, loadingMessage: D = "Loading results…", error: k, onRetry: j, emptyMessage: M = "No results", footer: N, onOpenChange: P, flip: F = !0 }) {
	let I = $n(s), { open: L, show: R, close: z, rootRef: B, anchorRef: V, triggerRef: ee, popupRef: H, labelId: U, triggerId: te, popupId: W } = lr({
		haspopup: "listbox",
		matchWidth: !0,
		disabled: f,
		flip: F,
		onOpenChange: P
	}), [G, K] = g(""), [ne, re] = g(0), [ie, ae] = g(() => e.find((e) => e.value === t)), oe = h(null), se = h(!1), [, ce] = m((e) => e + 1, 0);
	function J() {
		se.current = !0, ce();
	}
	let le = u(), ue = c ?? `${le}-search`, de = `${le}-selected`, fe = x ?? G, pe = e.find((e) => e.value === t) ?? (w?.value === t ? w : void 0) ?? (ie?.value === t ? ie : void 0), me = C ? e.filter((e) => e.label.toLowerCase().includes(fe.toLowerCase())) : e, he = Math.min(ne, Math.max(me.length - 1, 0)), ge = me[he]?.disabled ? me.findIndex((e) => !e.disabled) : he, _e = me[ge];
	function ve(e) {
		x === void 0 && K(e), S?.(e), re(0), J();
		let t = H.current?.ownerDocument.getElementById(W);
		t && (t.scrollTop = 0);
	}
	function ye(e) {
		e.disabled || (ae(e), n(e.value), r?.(e), z("select"));
	}
	function be(e) {
		if ([
			"ArrowDown",
			"ArrowUp",
			"Home",
			"End"
		].includes(e.key)) {
			e.preventDefault();
			let t = e.key === "ArrowUp" || e.key === "End" ? -1 : 1, n = e.key === "Home" ? 0 : e.key === "End" ? me.length - 1 : ge + t;
			for (; n >= 0 && n < me.length && me[n].disabled;) n += t;
			n >= 0 && n < me.length && (re(n), J());
		} else e.key === "Enter" ? (e.preventDefault(), _e && ye(_e)) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), z("escape"));
	}
	function xe(n) {
		R(n), x === void 0 && K("");
		let r = (x === void 0 ? e : me).findIndex((e) => e.value === t && !e.disabled);
		re(Math.max(r, 0)), J(), setTimeout(() => oe.current?.focus(), 0);
	}
	return l(() => {
		f && z("disabled");
	}, [
		f,
		L,
		z
	]), l(() => {
		if (!L || !se.current) return;
		se.current = !1;
		let e = H.current?.ownerDocument, t = e?.getElementById(W), n = e?.getElementById(`${W}-${ge}`);
		if (!t || !n) return;
		let r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), a = t.offsetHeight ? r.height / t.offsetHeight : 1;
		i.top < r.top ? t.scrollTop -= (r.top - i.top) / a : i.bottom > r.bottom && (t.scrollTop += (i.bottom - r.bottom) / a);
	}), /* @__PURE__ */ y("div", {
		className: Y("flex flex-col gap-1.5", o),
		ref: B,
		onBlur: (e) => {
			L && !e.currentTarget.contains(e.relatedTarget) && z("blur");
		},
		children: [
			a && /* @__PURE__ */ v("span", {
				id: U,
				className: "ui-field-label font-label text-xs font-medium",
				children: a
			}),
			d && /* @__PURE__ */ v("input", {
				type: "hidden",
				name: d,
				value: t,
				disabled: f
			}),
			/* @__PURE__ */ y("div", {
				className: "relative",
				ref: V,
				children: [
					/* @__PURE__ */ v("button", {
						ref: ee,
						id: te,
						"data-control-size": I,
						type: "button",
						disabled: f,
						"aria-label": p ?? (a ? void 0 : i),
						"aria-labelledby": a && !p ? `${U} ${de}` : void 0,
						"aria-describedby": _,
						"aria-invalid": b,
						"aria-expanded": L,
						"aria-haspopup": "listbox",
						"aria-controls": L ? W : void 0,
						onClick: () => L ? z("toggle") : xe("toggle"),
						onKeyDown: (e) => {
							(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), xe("keyboard"));
						},
						className: Y("ui-sized-control font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms] disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
						children: /* @__PURE__ */ v("span", {
							id: de,
							children: pe ? pe.label : /* @__PURE__ */ v("span", {
								className: "text-text-disabled",
								children: t || i
							})
						})
					}),
					/* @__PURE__ */ v(A, {
						"aria-hidden": "true",
						className: Y("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", L && "rotate-180")
					}),
					L && /* @__PURE__ */ y("div", {
						ref: H,
						className: Y("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "flex flex-col overflow-hidden"),
						onMouseDown: (e) => {
							e.target.closest("input, textarea, select, [contenteditable]") || e.preventDefault();
						},
						children: [
							/* @__PURE__ */ v("div", {
								className: "border-border shrink-0 border-b p-1.5",
								children: /* @__PURE__ */ y("div", {
									className: "relative",
									children: [/* @__PURE__ */ v(q, {
										"aria-hidden": "true",
										className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2"
									}), /* @__PURE__ */ v("input", {
										ref: oe,
										"data-control-size": I,
										"data-has-icon": "true",
										id: ue,
										type: "text",
										role: "combobox",
										"aria-label": p ?? (a ? `Search ${a}` : "Search options"),
										"aria-expanded": "true",
										"aria-controls": W,
										"aria-activedescendant": _e && !_e.disabled ? `${W}-${ge}` : void 0,
										"aria-autocomplete": "list",
										"aria-describedby": _,
										"aria-invalid": b,
										value: fe,
										onChange: (e) => ve(e.target.value),
										onKeyDown: be,
										placeholder: "Search...",
										className: "ui-sized-control bg-bg-secondary text-text-primary border-border placeholder:text-text-disabled focus:border-accent font-control h-7 w-full rounded border pr-2 pl-7 text-xs focus:outline-none"
									})]
								})
							}),
							E && /* @__PURE__ */ v("div", {
								role: "status",
								className: "text-text-tertiary shrink-0 px-3 py-2 text-xs",
								children: D
							}),
							k && /* @__PURE__ */ y("div", {
								role: "alert",
								className: "text-text-secondary shrink-0 px-3 py-2 text-xs",
								children: [k, j && /* @__PURE__ */ v("button", {
									type: "button",
									onClick: j,
									className: "text-accent ml-2",
									children: "Retry"
								})]
							}),
							/* @__PURE__ */ v("ul", {
								id: W,
								className: "max-h-48 min-h-0 overflow-y-auto py-1",
								role: "listbox",
								"aria-label": a ?? p ?? "Options",
								"aria-busy": E,
								children: me.map((e, n) => /* @__PURE__ */ y("li", {
									id: `${W}-${n}`,
									role: "option",
									"aria-selected": e.value === t,
									"aria-disabled": e.disabled || void 0,
									onClick: () => ye(e),
									onMouseEnter: () => {
										e.disabled || re(n);
									},
									className: Y("font-control flex w-full items-center gap-2 px-3 py-1.5 text-xs", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : "cursor-pointer", !e.disabled && (n === ge ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover")),
									children: [/* @__PURE__ */ v("span", {
										className: "flex-1",
										children: T ? T(e) : e.label
									}), e.value === t && /* @__PURE__ */ v(O, {
										"aria-hidden": "true",
										className: "h-3 w-3 shrink-0"
									})]
								}, e.value))
							}),
							me.length === 0 && !E && !k && /* @__PURE__ */ v("div", {
								role: "status",
								className: "text-text-tertiary shrink-0 px-3 py-2 text-center text-xs",
								children: M
							}),
							N && /* @__PURE__ */ v("div", {
								className: "border-border shrink-0 border-t p-1.5",
								children: N
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
function To(e) {
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
async function Eo(e) {
	if (navigator.clipboard?.writeText) try {
		return await navigator.clipboard.writeText(e), !0;
	} catch {}
	return To(e);
}
function Do({ value: e, label: t = "Copy", copiedLabel: n = "Copied", iconOnly: r = !1, onCopy: i, variant: a, ...o }) {
	let [s, c] = g(null), [u, d] = g(""), f = h(null), p = h(null);
	l(() => () => {
		p.current !== null && clearTimeout(p.current), f.current !== null && clearTimeout(f.current);
	}, []);
	async function m() {
		let t = !1;
		try {
			t = await Eo(typeof e == "function" ? e() : e);
		} catch {}
		p.current !== null && clearTimeout(p.current), c(t ? "copied" : "failed"), d(""), f.current !== null && clearTimeout(f.current), f.current = setTimeout(() => {
			d(t ? n : "Copy failed"), f.current = null;
		}, 50), p.current = setTimeout(() => {
			c(null), d(""), p.current = null;
		}, 2e3), i?.(t);
	}
	let b = s === "copied" ? n : s === "failed" ? "Copy failed" : t;
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v(sr, {
		...o,
		variant: a ?? (r ? "icon" : "secondary"),
		icon: s === "copied" ? O : F,
		"aria-label": r ? b : o["aria-label"],
		title: r ? b : o.title,
		onClick: m,
		children: r ? void 0 : b
	}), /* @__PURE__ */ v("span", {
		className: "sr-only",
		role: "status",
		"aria-live": "polite",
		children: u
	})] });
}
//#endregion
//#region src/components/ui/DangerZone.tsx
function Oo({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ y("div", {
		className: Y("border-border mt-8 border-t pt-6", r),
		children: [
			/* @__PURE__ */ v("h3", {
				className: "text-red mb-2 text-xs font-semibold",
				children: e
			}),
			t && /* @__PURE__ */ v("p", {
				className: "text-text-secondary mb-3 text-xs",
				children: t
			}),
			n
		]
	});
}
//#endregion
//#region src/components/ui/DatePicker.tsx
function ko(e, t) {
	let { year: n, month: r, day: i } = $(e, t);
	return `${co[r - 1]} ${i}, ${n}`;
}
function Ao({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date...", format: o }) {
	let s = $n(e), { open: c, show: l, close: u, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: h, popupId: _, triggerAria: b } = lr({
		haspopup: "dialog",
		labelled: !!t
	}), x = $(r ?? /* @__PURE__ */ new Date(), n), [S, C] = g(x.year), [w, T] = g(x.month - 1);
	function E(e) {
		i(e), u("select");
	}
	function O() {
		if (c) {
			u("toggle");
			return;
		}
		r && (C($(r, n).year), T($(r, n).month - 1)), l();
	}
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-1.5",
		ref: d,
		children: [t && /* @__PURE__ */ v("span", {
			id: h,
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ y("div", {
			className: "relative",
			ref: f,
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					ref: p,
					...b,
					onClick: O,
					"data-control-size": s,
					className: Y("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? o ? o(r) : ko(r, n) : /* @__PURE__ */ v("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ v(D, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				c && /* @__PURE__ */ v("div", {
					ref: m,
					id: _,
					role: "dialog",
					"aria-label": "Choose date",
					className: Y("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: /* @__PURE__ */ v(go, {
						timeZone: n,
						year: S,
						month: w,
						selected: r,
						onSelect: E,
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
function jo(e) {
	return `${co[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function Mo(e) {
	return e.start && e.end ? `${jo(e.start)} – ${jo(e.end)}` : e.start ? jo(e.start) : "";
}
function No({ controlSize: e, label: t, value: n, onChange: r, placeholder: i = "Select date range..." }) {
	let a = $n(e), { open: o, show: s, close: c, rootRef: l, anchorRef: u, triggerRef: d, popupRef: f, labelId: p, popupId: m, triggerAria: h } = lr({
		haspopup: "dialog",
		labelled: !!t
	}), _ = /* @__PURE__ */ new Date(), [b, x] = g(n.start?.getFullYear() ?? _.getFullYear()), [S, C] = g(n.start?.getMonth() ?? _.getMonth()), [w, T] = g(null), [E, O] = g("start"), [k, A] = g(n.start), [j, M] = g(n.end), N = S === 11 ? b + 1 : b, P = S === 11 ? 0 : S + 1;
	function F() {
		if (o) {
			c("toggle");
			return;
		}
		A(n.start), M(n.end), O("start"), n.start && (x(n.start.getFullYear()), C(n.start.getMonth())), s();
	}
	function I(e) {
		E === "start" ? (A(e), M(null), O("end")) : (k && e < k ? (M(k), A(e)) : M(e), O("start"), r({
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
	let z = n.start || n.end ? Mo(n) : "";
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-1.5",
		ref: l,
		children: [t && /* @__PURE__ */ v("span", {
			id: p,
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ y("div", {
			className: "relative",
			ref: u,
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					ref: d,
					...h,
					onClick: F,
					"data-control-size": a,
					className: Y("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: z || /* @__PURE__ */ v("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ v(D, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				o && /* @__PURE__ */ y("div", {
					ref: f,
					id: m,
					role: "dialog",
					"aria-label": "Choose date range",
					className: Y("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [/* @__PURE__ */ y("div", {
						className: "mb-2 flex items-center justify-between",
						children: [
							/* @__PURE__ */ v("button", {
								type: "button",
								onClick: L,
								"aria-label": "Previous month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ v("span", {
									className: "text-xs",
									children: "‹"
								})
							}),
							/* @__PURE__ */ v("span", {
								className: "text-text-tertiary text-2xs",
								"aria-live": "polite",
								children: E === "start" ? "Select start date" : "Select end date"
							}),
							/* @__PURE__ */ v("button", {
								type: "button",
								onClick: R,
								"aria-label": "Next month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ v("span", {
									className: "text-xs",
									children: "›"
								})
							})
						]
					}), /* @__PURE__ */ y("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ v(go, {
							year: b,
							month: S,
							rangeStart: k,
							rangeEnd: j,
							hoverDate: E === "end" ? w : null,
							onSelect: I,
							onMonthChange: (e, t) => {
								x(e), C(t);
							},
							onHover: T
						}), /* @__PURE__ */ v(go, {
							year: N,
							month: P,
							rangeStart: k,
							rangeEnd: j,
							hoverDate: E === "end" ? w : null,
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
function Po(e) {
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
function Fo(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function Io(e, t) {
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
	let n = co[e.getMonth()], r = e.getDate(), i = e.getFullYear(), { hour12: a, period: o } = Po(e.getHours());
	return `${n} ${r}, ${i} ${a}:${String(e.getMinutes()).padStart(2, "0")} ${o}`;
}
function Lo(e) {
	return String(e).padStart(2, "0");
}
function Ro(e) {
	return /* @__PURE__ */ v(zo, { ...e }, e.timeZone ?? "browser-local");
}
function zo({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date & time..." }) {
	let o = $n(e), { open: s, show: c, close: l, rootRef: d, anchorRef: f, triggerRef: p, popupRef: m, labelId: h, popupId: _, triggerAria: b } = lr({
		haspopup: "dialog",
		labelled: !!t
	}), [x, S] = g(null), [C, w] = g(!1), [T, E] = g("reject"), O = u(), k = $(r ?? /* @__PURE__ */ new Date(), n), A = r ? Po($(r, n).hour) : {
		hour12: 12,
		period: "PM"
	}, [j, M] = g(k.year), [N, P] = g(k.month - 1), [F, I] = g(String(A.hour12)), [L, R] = g(r ? Lo($(r, n).minute) : "00"), [z, B] = g(A.period), [V, ee] = g(r);
	function H(e) {
		ee(e);
	}
	function U(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		I(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (I(String(n - 12)), B("PM")) : n === 0 && (I("12"), B("AM"));
	}
	function te() {
		if (!V) return;
		let e = X(parseInt(F, 10) || 12, 1, 12), t = X(parseInt(L, 10) || 0, 0, 59), a = Fo(e, z), o = {
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
			].every((e) => s[e] === o[e]) ? new Date(r) : xi(o, n, T);
			let e = $(c, n);
			if (e.hour !== a || e.minute !== t || e.day !== o.day) throw RangeError("This time does not exist in the selected timezone");
		} catch (e) {
			let t = e instanceof Error ? e.message : "Invalid date and time";
			S(t), w(t.includes("twice"));
			return;
		}
		S(null), i(c), l("select");
	}
	function W() {
		if (s) {
			l("toggle");
			return;
		}
		if (r) {
			M($(r, n).year), P($(r, n).month - 1), ee(r);
			let e = Po($(r, n).hour);
			I(String(e.hour12)), B(e.period), R(Lo($(r, n).minute));
		}
		S(null);
		let e = !1;
		if (r && n) try {
			xi($(r, n), n, "reject");
		} catch (t) {
			e = t instanceof Error && t.message.includes("twice");
		}
		w(e), E("reject"), c();
	}
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-1.5",
		ref: d,
		children: [t && /* @__PURE__ */ v("span", {
			id: h,
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ y("div", {
			className: "relative",
			ref: f,
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					ref: p,
					...b,
					onClick: W,
					"data-control-size": o,
					className: Y("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? Io(r, n) : /* @__PURE__ */ v("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ v(D, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				s && /* @__PURE__ */ y("div", {
					ref: m,
					id: _,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: Y("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "p-3"),
					children: [
						/* @__PURE__ */ v(go, {
							timeZone: n,
							year: j,
							month: N,
							selected: V,
							onSelect: H,
							onMonthChange: (e, t) => {
								M(e), P(t);
							}
						}),
						n && /* @__PURE__ */ v("p", {
							className: "text-text-tertiary text-2xs",
							children: n
						}),
						x && /* @__PURE__ */ v("p", {
							id: O,
							role: "alert",
							className: "text-red text-xs",
							children: x
						}),
						C && /* @__PURE__ */ y("select", {
							"aria-label": "Repeated time occurrence",
							value: T,
							onChange: (e) => E(e.target.value),
							className: "bg-bg-secondary text-text-primary border-border rounded-md border text-xs",
							children: [
								/* @__PURE__ */ v("option", {
									value: "reject",
									children: x ? "Choose an occurrence" : "Keep current occurrence"
								}),
								/* @__PURE__ */ v("option", {
									value: "earlier",
									children: "First occurrence (earlier instant)"
								}),
								/* @__PURE__ */ v("option", {
									value: "later",
									children: "Second occurrence (later instant)"
								})
							]
						}),
						/* @__PURE__ */ y("div", {
							className: "border-border mt-3 flex items-center gap-2 border-t pt-3",
							children: [
								/* @__PURE__ */ v("span", {
									className: "text-text-secondary text-2xs font-medium",
									children: "Time"
								}),
								/* @__PURE__ */ y("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ v("input", {
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
										/* @__PURE__ */ v("span", {
											className: "text-text-tertiary text-xs",
											children: ":"
										}),
										/* @__PURE__ */ v("input", {
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
								/* @__PURE__ */ y("div", {
									className: "border-border inline-flex overflow-hidden rounded-md border",
									role: "group",
									"aria-label": "Time period",
									children: [/* @__PURE__ */ v("button", {
										type: "button",
										onClick: () => B("AM"),
										"aria-pressed": z === "AM",
										className: Y("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "AM"
									}), /* @__PURE__ */ v("button", {
										type: "button",
										onClick: () => B("PM"),
										"aria-pressed": z === "PM",
										className: Y("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", z === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "PM"
									})]
								}),
								/* @__PURE__ */ v("button", {
									type: "button",
									onClick: te,
									disabled: !V,
									className: Y("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", V ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
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
function Bo(e, t, n, r = "right") {
	if (e === "Home") return null;
	if (e === "End") return Infinity;
	if (!(e !== "ArrowLeft" && e !== "ArrowRight")) return t + (e === "ArrowLeft" == (r === "right") ? n : -n);
}
//#endregion
//#region src/components/ui/DetailPanel.tsx
function Vo({ open: e, onClose: t, title: n, children: r, className: i, headerActions: a, sticky: o = !1, resizable: s = !0, defaultWidth: c = 360, minWidth: d = 260, maxWidth: p = 700, fraction: m, defaultFraction: b, minFraction: x, maxFraction: S, onFractionChange: C, collapsed: w = !1, onCollapsedChange: T, railIndicator: E, overlay: D = !1, autoFocus: O = !0 }) {
	let k = h(null), A = h(null), j = h(null), M = h(null), N = h(null), P = h(!1), F = h(w), I = u(), L = u(), z = u(), [B, V] = g(c), [ee, H] = g(b ?? .5), [U, te] = g(!1), W = h(null), G = m !== void 0 || b !== void 0 || x !== void 0 || S !== void 0 || C !== void 0, K = G ? Math.max(0, Math.min(1, x ?? .3)) : d, ne = G ? Math.max(K, Math.min(1, S ?? .7)) : Math.max(K, p), re = (e) => Math.max(K, Math.min(ne, e)), ie = G ? re(m ?? ee) : B, q = G ? b ?? .5 : c, se = G ? `${ie * 100}%` : B, ce = Mt(e && !w, () => t(), k), J = h(!1);
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
		e && !J.current && O && !t?.contains(n ?? null) && !n?.closest("[role=\"dialog\"][aria-modal=\"true\"], dialog[open]") && A.current?.focus(), J.current = e;
	}, [e, O]), f(() => {
		if (!e || w || !G) return;
		let t = k.current?.parentElement, n = j.current;
		if (!t || !n) return;
		let r = (e) => {
			n.style.width = `${e * ie}px`;
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
		ie
	]), l(() => {
		let e = k.current?.ownerDocument, t = () => {
			W.current = null, te(!1);
		};
		return e?.addEventListener("pointerup", t), e?.addEventListener("pointercancel", t), () => {
			e?.removeEventListener("pointerup", t), e?.removeEventListener("pointercancel", t);
		};
	}, []);
	function le(e) {
		let t = re(e);
		G ? (m === void 0 && H(t), C?.(t)) : V(t);
	}
	function ue() {
		W.current = null, te(!1);
	}
	return /* @__PURE__ */ v("section", {
		ref: k,
		id: z,
		role: "region",
		"aria-labelledby": e ? L : void 0,
		"aria-hidden": !e || void 0,
		className: Y("border-border relative shrink-0 border-l", D ? "ui-glass ui-glass-popover bg-bg-secondary" : "bg-bg-pinned", !(U && e && !w) && "transition-[width] duration-[200ms] ease-out", i),
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
		children: e && /* @__PURE__ */ y(jt.Provider, {
			value: ce,
			children: [s && !w && /* @__PURE__ */ v("div", {
				role: "separator",
				tabIndex: 0,
				"aria-orientation": "vertical",
				"aria-label": "Resize panel",
				"aria-controls": z,
				"aria-valuenow": Math.round(ie * (G ? 100 : 1)),
				"aria-valuemin": Math.round(K * (G ? 100 : 1)),
				"aria-valuemax": Math.round(ne * (G ? 100 : 1)),
				"aria-valuetext": `${Math.round(ie * (G ? 100 : 1))}${G ? "%" : "px"}`,
				className: "text-text-tertiary hover:text-text-secondary hover:bg-accent/30 active:bg-accent/40 focus-visible:outline-accent absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0",
				style: { touchAction: "none" },
				onPointerDown: (e) => {
					e.button === 0 && (e.preventDefault(), e.currentTarget.focus(), e.currentTarget.setPointerCapture(e.pointerId), W.current = {
						x: e.clientX,
						width: ie,
						pointerId: e.pointerId,
						parentWidth: k.current?.parentElement?.getBoundingClientRect().width ?? 0
					}, te(!0));
				},
				onPointerMove: (e) => {
					let t = W.current;
					!t || t.pointerId !== e.pointerId || G && !t.parentWidth || le(t.width + (t.x - e.clientX) / (G ? t.parentWidth : 1));
				},
				onPointerUp: ue,
				onPointerCancel: ue,
				onLostPointerCapture: ue,
				onDoubleClick: () => le(q),
				onKeyDown: (e) => {
					let t = Bo(e.key, ie, G ? .02 : 16);
					t !== void 0 && (e.preventDefault(), le(t ?? q));
				},
				children: /* @__PURE__ */ v("span", {
					"aria-hidden": "true",
					className: "bg-bg-pinned border-border absolute left-0 flex h-8 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border transition-colors duration-[100ms]",
					style: { top: "calc(100% / 3)" },
					children: /* @__PURE__ */ v(R, {
						"aria-hidden": "true",
						className: "h-3.5 w-3.5"
					})
				})
			}), /* @__PURE__ */ v("div", {
				className: "h-full overflow-hidden",
				children: /* @__PURE__ */ y("div", {
					ref: j,
					className: "animate-fade-in flex h-full flex-col",
					style: { width: w ? "3rem" : G ? void 0 : B },
					children: [/* @__PURE__ */ y("div", {
						className: Y("border-border flex shrink-0 items-center justify-between border-b px-3", w ? "flex-col gap-2 py-3" : "h-10"),
						children: [/* @__PURE__ */ v("h3", {
							ref: A,
							id: L,
							tabIndex: -1,
							className: "text-text-primary truncate text-xs font-semibold",
							style: w ? {
								writingMode: "vertical-rl",
								maxHeight: "12rem"
							} : void 0,
							children: n
						}), w ? /* @__PURE__ */ y(_, { children: [E, T && /* @__PURE__ */ y("button", {
							type: "button",
							onClick: () => T(!1),
							ref: M,
							"aria-labelledby": `${I} ${L}`,
							className: "text-text-tertiary hover:text-text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded",
							children: [/* @__PURE__ */ v("span", {
								id: I,
								className: "sr-only",
								children: "Expand"
							}), /* @__PURE__ */ v(oe, { className: "h-3.5 w-3.5" })]
						})] }) : /* @__PURE__ */ y("div", {
							className: "flex shrink-0 items-center gap-1",
							children: [
								T && /* @__PURE__ */ y("button", {
									type: "button",
									onClick: () => T(!0),
									ref: N,
									"aria-labelledby": `${I} ${L}`,
									className: "text-text-tertiary hover:text-text-primary flex h-6 w-6 items-center justify-center rounded",
									children: [/* @__PURE__ */ v("span", {
										id: I,
										className: "sr-only",
										children: "Collapse"
									}), /* @__PURE__ */ v(ae, { className: "h-3.5 w-3.5" })]
								}),
								a,
								/* @__PURE__ */ v("button", {
									type: "button",
									onClick: t,
									className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded",
									"aria-label": "Close panel",
									children: /* @__PURE__ */ v(de, { className: "h-3.5 w-3.5" })
								})
							]
						})]
					}), /* @__PURE__ */ v("div", {
						hidden: w,
						inert: w,
						className: "min-h-0 flex-1 overflow-y-auto p-3",
						children: r
					})]
				})
			})]
		})
	});
}
function Ho(e, t) {
	let n = /^\s*(\d*\.?\d+)(px|rem)\s*$/.exec(e);
	if (!n) return 8;
	let r = Number(n[1]), i = n[2] === "rem" ? r * t : r;
	return Number.isFinite(i) && i >= 0 ? i * 2 : 8;
}
function Uo(e, t, [n, r], [i, a], [o, s], c) {
	let [l, u] = r - n <= s - o - c * 2 ? [n, r] : [i, a], d = t + (o + c - l), f = t + (s - c - u);
	return f < d && (f = d), d = Math.min(d, 0), f = Math.max(f, 0), X(e, d, f);
}
function Wo(e, t, n, r, i, a) {
	return {
		x: Uo(e.x, t.x, [n.left, n.right], [r.left, r.right], [i.left, i.right], a),
		y: Uo(e.y, t.y, [n.top, n.bottom], [r.top, r.bottom], [i.top, i.bottom], a)
	};
}
function Go({ x: e, y: t }) {
	return e === 0 && t === 0 ? "" : `${e}px ${t}px`;
}
var Ko = 10, qo = 50;
function Jo(e, t) {
	let n = t ? qo : Ko;
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
var Yo = 10, Xo = 50;
function Zo({ left: e, top: t }, n, r, i, a) {
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
function Qo(e, { min: t, max: n }) {
	let r = (e, t, n) => Math.round(X(e, t, n));
	return {
		width: r(e.width, t.width, n.width),
		height: r(e.height, t.height, n.height)
	};
}
function $o(e, t) {
	let n = t ? Xo : Yo;
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
var es = {
	sm: "max-w-[400px]",
	md: "max-w-[576px]",
	lg: "max-w-[768px]",
	xl: "max-w-[1024px]"
}, ts = "(min-width: 48rem)", ns = "a[href], button, input, select, textarea, label, summary, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [tabindex]:not([tabindex=\"-1\"])", rs = {
	x: 0,
	y: 0
};
function is(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top,
		right: t.left + e.clientWidth,
		bottom: t.top + e.clientHeight
	};
}
var as = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function os(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function ss(e, t) {
	let n = t.getBoundingClientRect();
	return {
		left: n.left + e.offsetLeft - t.scrollLeft,
		top: n.top + e.offsetTop - t.scrollTop,
		width: e.offsetWidth,
		height: e.offsetHeight
	};
}
function cs(e, t) {
	if (!(e instanceof HTMLElement) || !e.isConnected) return null;
	let n = e.ownerDocument;
	return e === n.body || e === n.documentElement || t.contains(e) ? null : e.getClientRects().length > 0 ? e : null;
}
function ls(e) {
	return e.ownerDocument.defaultView?.matchMedia(ts).matches ?? !1;
}
function us(e) {
	let t = e.ownerDocument.defaultView;
	return t ? Ho(t.getComputedStyle(e).getPropertyValue("--spacing"), parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize)) : 8;
}
function ds(e, t, n) {
	e.style.width = n ? `${n.width}px` : "", e.style.height = n ? `${n.height}px` : "", e.style.maxWidth = n ? "none" : "", t && (t.style.flex = n ? "1 1 0%" : "", t.style.minHeight = n ? "0" : "", t.style.overflowY = n ? "auto" : "");
}
function fs(e, t) {
	return {
		width: 280,
		height: e.offsetHeight - (t?.offsetHeight ?? 0) + 48
	};
}
function ps({ open: e, draggable: t, resizable: n, remember: r, placement: i, anchorRef: a }, o, s, c) {
	let l = h(rs), u = h(rs), d = h(8), p = h(null), m = h(null), g = h(null), _ = h(!1), v = h(null), y = e && t, b = e && n, x = r && (t || n);
	f(() => {
		let t = o.current, r = y ? s.current : null, f = c.current, h = t?.parentElement, S = t?.ownerDocument.defaultView, C = i !== "center";
		if (x || (g.current = null), (!e && !x || !n) && (v.current = null), !e || !t || !h || !S || !r && !C && !b) return;
		let w = C ? cs(t.ownerDocument.activeElement, t) : null, T = () => C ? cs(a?.current, t) ?? cs(w, t) : null, E = () => os(u.current, l.current), D = () => {
			t.style.translate = Go(E());
		}, O = () => {
			let e = ss(t, h);
			if (_.current && g.current) {
				u.current = {
					x: g.current.left - e.left,
					y: g.current.top - e.top
				}, l.current = rs, t.dataset.placement = "remembered", t.style.transformOrigin = "";
				return;
			}
			let n = ls(t) ? T() : null, r = C && n ? dn(i, n.getBoundingClientRect(), {
				size: {
					width: e.width,
					height: e.height
				},
				bounds: is(h),
				margin: d.current,
				gap: d.current
			}) : null;
			u.current = r ? {
				x: r.left - e.left,
				y: r.top - e.top
			} : rs, t.dataset.placement = r?.side ?? "center", t.style.transformOrigin = r ? as[r.side] : "";
		}, k = () => {
			let e = l.current;
			if (!r && !_.current || !_.current && e.x === 0 && e.y === 0) return;
			let n = E(), i = Wo(n, n, t.getBoundingClientRect(), (r ?? s.current ?? t).getBoundingClientRect(), is(h), d.current);
			if (l.current = {
				x: i.x - u.current.x,
				y: i.y - u.current.y
			}, D(), _.current) {
				let e = ss(t, h);
				g.current = {
					left: e.left + i.x,
					top: e.top + i.y
				};
			}
		}, A = () => {
			d.current = us(t), ls(t) || (p.current = null, m.current = null, l.current = rs, _.current = !1, g.current = null, v.current && ds(t, f, null), v.current = null);
			let e = v.current;
			if (e && !m.current) {
				let n = is(h), r = d.current, i = _.current && g.current ? g.current : {
					left: n.left + r,
					top: n.top + r
				}, a = Qo(e, Zo(i, e, fs(t, f), n, r)), o = Math.max(n.left + r, Math.min(i.left, n.right - r - a.width)), s = Math.max(n.top + r, Math.min(i.top, n.bottom - r - a.height));
				(a.width !== e.width || a.height !== e.height) && (v.current = a, ds(t, f, a)), _.current && (o !== i.left || s !== i.top) && (g.current = {
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
		return _.current = x && g.current !== null, b && v.current && ds(t, f, v.current), A(), S.addEventListener("resize", M), S.addEventListener("scroll", M, {
			capture: !0,
			passive: !0
		}), t.addEventListener("animationend", N), P?.observe(t), () => {
			S.cancelAnimationFrame(j), S.removeEventListener("resize", M), S.removeEventListener("scroll", M, { capture: !0 }), t.removeEventListener("animationend", N), P?.disconnect(), p.current = null, m.current = null, u.current = rs, l.current = rs, _.current = !1, t.style.translate = "", t.style.transformOrigin = "", b && (t.style.userSelect = "", ds(t, f, null)), delete t.dataset.placement;
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
		let n = os(u.current, l.current), r = ss(e, t);
		g.current = {
			left: r.left + n.x,
			top: r.top + n.y
		}, u.current = n, l.current = rs, _.current = !0, e.dataset.placement = "remembered", e.style.transformOrigin = "";
	}, C = (e) => s.current ?? e, w = (e) => {
		let t = o.current, n = e.currentTarget, r = t?.parentElement;
		if (!t || !r || e.button !== 0 || !e.isPrimary || m.current) return;
		let i = e.target.closest(ns);
		i && i !== n && n.contains(i) || !ls(t) || (e.preventDefault(), n.setPointerCapture(e.pointerId), n.style.cursor = "grabbing", p.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			origin: os(u.current, l.current),
			dialog: t.getBoundingClientRect(),
			handle: C(n).getBoundingClientRect(),
			bounds: is(r),
			margin: d.current,
			moved: !1
		});
	}, T = (e) => {
		let t = p.current, n = o.current;
		if (!t || t.pointerId !== e.pointerId || !n) return;
		let r = Wo({
			x: t.origin.x + e.clientX - t.startX,
			y: t.origin.y + e.clientY - t.startY
		}, t.origin, t.dialog, t.handle, t.bounds, t.margin);
		t.moved ||= r.x !== t.origin.x || r.y !== t.origin.y, l.current = {
			x: r.x - u.current.x,
			y: r.y - u.current.y
		}, n.style.translate = Go(r);
	}, E = (e) => {
		let t = p.current, n = e.currentTarget;
		if ((!t || t.pointerId === e.pointerId) && n.style.cursor === "grabbing" && (n.style.cursor = ""), t?.pointerId !== e.pointerId) return;
		p.current = null;
		let r = o.current, i = r?.parentElement;
		!(x || _.current) || !t.moved || !r || !i || S(r, i);
	}, D = (e) => {
		let t = Jo(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
		if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || m.current || !ls(n)) return;
		e.preventDefault();
		let i = os(u.current, l.current), a = Wo({
			x: i.x + t.x,
			y: i.y + t.y
		}, i, n.getBoundingClientRect(), C(e.currentTarget).getBoundingClientRect(), is(r), d.current);
		a.x === i.x && a.y === i.y || (l.current = {
			x: a.x - u.current.x,
			y: a.y - u.current.y
		}, n.style.translate = Go(a), (x || _.current) && S(n, r));
	}, O = (e, t, n) => {
		(!_.current || !g.current) && S(e, t);
		let r = g.current;
		if (!r) return;
		v.current = n, ds(e, c.current, n);
		let i = ss(e, t);
		u.current = {
			x: r.left - i.left,
			y: r.top - i.top
		}, l.current = rs, e.style.translate = Go(u.current);
	}, k = (e, t) => {
		let n = ss(e, t), r = os(u.current, l.current), i = {
			width: n.width,
			height: n.height
		};
		return {
			current: i,
			limits: Zo({
				left: n.left + r.x,
				top: n.top + r.y
			}, i, fs(e, c.current), is(t), d.current)
		};
	}, A = (e) => {
		let t = o.current, n = t?.parentElement;
		if (!t || !n || e.button !== 0 || !e.isPrimary || p.current || !ls(t)) return;
		e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), t.style.userSelect = "none";
		let { current: r, limits: i } = k(t, n);
		m.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			start: r,
			limits: i,
			moved: !1
		};
	}, j = (e) => {
		let t = m.current, n = o.current, r = n?.parentElement;
		if (!t || t.pointerId !== e.pointerId || !n || !r) return;
		let i = Qo({
			width: t.start.width + e.clientX - t.startX,
			height: t.start.height + e.clientY - t.startY
		}, t.limits), a = t.moved ? v.current : t.start;
		i.width === a?.width && i.height === a.height || (t.moved = !0, O(n, r, i));
	}, M = (e) => {
		let t = m.current;
		if (t && t.pointerId !== e.pointerId) return;
		m.current = null;
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
				let t = $o(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
				if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || p.current || m.current || !ls(n)) return;
				e.preventDefault();
				let { current: i, limits: a } = k(n, r), s = Qo({
					width: i.width + t.width,
					height: i.height + t.height
				}, a);
				s.width === i.width && s.height === i.height || O(n, r, s);
			}
		} : void 0
	};
}
function ms({ open: e, onClose: t, title: n, children: r, footer: i, className: a, size: o = "sm", draggable: s = !1, resizable: c = !1, rememberPosition: l = !1, placement: d = "center", anchorRef: f, role: p = "dialog", description: m, "aria-label": g, "aria-describedby": _, initialFocusRef: b, returnFocusRef: x, busy: S = !1, closeOnEscape: C = !0, closeOnOverlayClick: w = !0, hideCloseButton: T = !1 }) {
	let E = $n(), D = h(null), [O, k] = Ht(D), A = h(null), j = h(null), M = u(), N = u();
	Ct(D, e, {
		initialFocusRef: b,
		returnFocusRef: x
	});
	let { drag: P, resize: F } = ps({
		open: e,
		draggable: s,
		resizable: c,
		remember: l,
		placement: d,
		anchorRef: f
	}, D, A, j), I = Mt(e, (e) => {
		!C || S || (e.preventDefault(), t());
	});
	if (Nt(e), !e) return null;
	let L = P && /* @__PURE__ */ v("button", {
		type: "button",
		"aria-label": "Move dialog",
		title: "Move dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-grip": "",
		className: "text-text-tertiary hover:text-text-secondary hover:bg-bg-hover focus-visible:outline-accent order-first hidden h-5 w-5 shrink-0 cursor-grab items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 md:flex md:touch-none md:select-none",
		...P.pointer,
		onKeyDown: P.onKeyDown,
		children: /* @__PURE__ */ v(R, {
			className: "h-3.5 w-3.5",
			"aria-hidden": "true"
		})
	}), B = F && /* @__PURE__ */ v("button", {
		type: "button",
		"aria-label": "Resize dialog",
		title: "Resize dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-resize": "",
		className: "text-text-tertiary hover:text-text-primary focus-visible:outline-accent absolute right-0.5 bottom-0.5 hidden h-4 w-4 cursor-nwse-resize items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-0 md:flex md:touch-none md:select-none",
		...F.pointer,
		onKeyDown: F.onKeyDown,
		children: /* @__PURE__ */ v(z, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		})
	});
	return me(/* @__PURE__ */ v(jt.Provider, {
		value: I,
		children: /* @__PURE__ */ v(Bt.Provider, {
			value: O,
			children: /* @__PURE__ */ y("div", {
				className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]",
				children: [/* @__PURE__ */ v("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: () => {
						w && !S && t();
					},
					"aria-hidden": "true"
				}), /* @__PURE__ */ y("div", {
					ref: k,
					className: Y(`relative z-50 mx-1 mb-8 flex w-full ${es[o]} flex-col`, "ui-glass bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
					role: p,
					tabIndex: -1,
					"aria-busy": S || void 0,
					"aria-modal": "true",
					"aria-labelledby": n ? M : void 0,
					"aria-label": g ?? (n ? void 0 : "Dialog"),
					"aria-describedby": [m ? N : void 0, _].filter(Boolean).join(" ") || void 0,
					children: [
						(n || !T || s) && /* @__PURE__ */ y("div", {
							ref: A,
							"data-control-size": E,
							className: Y("ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5", s && "md:cursor-move md:touch-none md:select-none"),
							...P?.pointer,
							children: [n && /* @__PURE__ */ v("h3", {
								id: M,
								className: "text-text-primary min-w-0 text-sm font-medium",
								children: n
							}), !T && /* @__PURE__ */ v(sr, {
								type: "button",
								variant: "icon",
								size: "sm",
								"aria-disabled": S || void 0,
								onClick: () => {
									S || t();
								},
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ v(de, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ y("div", {
							ref: j,
							className: "ui-surface-body p-3",
							children: [m && /* @__PURE__ */ v("div", {
								id: N,
								className: "text-text-secondary mb-3 text-xs",
								children: m
							}), r]
						}),
						i && /* @__PURE__ */ y("div", {
							"data-control-size": E,
							className: Y("ui-bar border-border bg-bg-primary/50 flex shrink-0 rounded-b-lg border-t px-3 py-2.5", B && "md:pr-6", L ? "items-center gap-2" : "flex-col justify-center"),
							children: [L ? /* @__PURE__ */ v("div", {
								className: "flex min-w-0 flex-1 flex-col justify-center",
								children: i
							}) : i, L]
						}),
						L && !i && /* @__PURE__ */ v("div", {
							className: "hidden px-3 pb-2 md:flex",
							children: L
						}),
						B && !i && !L && /* @__PURE__ */ v("div", {
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
function hs({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a, busy: o = !1, busyLabel: s = "Working…", cancelRef: c, confirmRef: l, confirmDisabled: u = !1 }) {
	return /* @__PURE__ */ y("div", {
		className: Y("flex justify-end gap-2", a),
		"aria-busy": o || void 0,
		children: [/* @__PURE__ */ v(sr, {
			ref: c,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-disabled": o || void 0,
			onClick: () => {
				o || e();
			},
			children: n
		}), /* @__PURE__ */ v(sr, {
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
function gs({ children: e, className: t }) {
	return /* @__PURE__ */ y("div", {
		className: Y("my-6 flex items-center gap-3", t),
		children: [
			/* @__PURE__ */ v("div", { className: "border-border flex-1 border-t" }),
			/* @__PURE__ */ v("span", {
				className: "text-text-tertiary text-xs",
				children: e
			}),
			/* @__PURE__ */ v("div", { className: "border-border flex-1 border-t" })
		]
	});
}
//#endregion
//#region src/components/ui/DropdownMenu.tsx
var _s = (e) => !e.divider;
function vs(e) {
	return e.checked === void 0 ? "menuitem" : e.type === "radio" ? "menuitemradio" : "menuitemcheckbox";
}
function ys({ trigger: e, triggerIcon: r, triggerLabel: i, triggerSize: a = "xs", items: c, header: d, renderLink: f, align: p = "right" }) {
	let m = r ? /* @__PURE__ */ v(sr, {
		variant: "icon",
		size: a,
		hideLabel: !0,
		icon: r,
		"aria-label": i,
		title: i
	}) : e, [b, x] = g(!1), S = d != null && d !== !1, C = Vt(), [w, T] = g(0), [E, D] = g(""), [k, A] = g(-1), j = h(null), M = h(null), N = h(null), P = h(null), F = h([]), I = h(!1), L = u(), R = `${L}menu`, z = `${L}header`, B = o(m) && m.type !== t ? m : null, V = B?.props.id, ee = typeof V == "string" && V ? V : `${L}trigger`, H = [];
	c.forEach((e) => {
		_s(e) && H.push({
			item: e,
			index: H.length
		});
	});
	let U = H.filter(({ item: e }) => !e.disabled), te = () => {
		let e = j.current;
		return e ? B ? [...e.querySelectorAll("[id]")].find((e) => e.id === ee) ?? e.querySelector("button, a[href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])") ?? e.firstElementChild ?? e : e : null;
	}, W = s((e) => {
		x(!1), A(-1), (e === "escape" || e === "select" || e === "tab") && M.current?.focus();
	}, []);
	xn(b, W, [P], [j]), yn(b, M, P, {
		side: "bottom",
		align: p === "left" ? "start" : "end",
		gap: 4,
		onAnchorHidden: W
	}), l(() => {
		b && (k >= 0 ? F.current[k] : N.current)?.focus();
	}, [
		b,
		k,
		S
	]);
	function G(e) {
		let t = te();
		M.current = t, D(t?.id ?? ""), T(t?.getBoundingClientRect().width ?? 0), x(!0), A((e === "first" ? U[0] : e === "last" ? U.at(-1) : null)?.index ?? -1);
	}
	function K(e) {
		if (!(I.current && (I.current = !1, e.detail === 0))) {
			if (b) {
				W();
				return;
			}
			G(e.detail === 0 ? "first" : "menu");
		}
	}
	function ne(e) {
		I.current = !1, e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), G(e.key === "ArrowDown" ? "first" : "last")) : !B && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), b ? W("select") : G("first"));
	}
	function re(e) {
		!e || e.item.disabled || (W("select"), e.item.onClick?.());
	}
	function ie(e, t) {
		let n = H.length, r = e === -1 && t === -1 ? n : e;
		for (let e = 1; e <= n; e++) {
			let i = H[(r + t * e + n * 2) % n];
			if (!i.item.disabled) return i.index;
		}
		return -1;
	}
	function ae(e) {
		let t = hr(H.map((e) => e.item.label), (e) => !!H[e].item.disabled, k, e);
		return t === -1 ? k : H[t].index;
	}
	function oe(e) {
		let { key: t } = e, n = null;
		if (t === "ArrowDown") n = ie(k, 1);
		else if (t === "ArrowUp") n = ie(k, -1);
		else if (t === "Home") n = U[0]?.index ?? -1;
		else if (t === "End") n = U.at(-1)?.index ?? -1;
		else if (t === "Enter" || t === " ") {
			let n = F.current.indexOf(e.target), r = n === -1 ? void 0 : H[n];
			if (!r || r.item.disabled) {
				e.preventDefault();
				return;
			}
			if (r.item.href !== void 0 && t === "Enter") return;
			e.preventDefault(), t === " " && (I.current = !0), r.item.href === void 0 ? re(r) : F.current[n]?.click();
			return;
		} else if (t === "Tab") {
			W("tab");
			return;
		} else t !== " " && fr(e) && (n = ae(t));
		n !== null && (e.preventDefault(), A(n));
	}
	let q = {
		"aria-haspopup": "menu",
		"aria-expanded": b,
		"aria-controls": b ? R : void 0
	}, se = -1, ce = b ? /* @__PURE__ */ v("div", {
		ref: (e) => {
			N.current = e, S || (P.current = e);
		},
		id: R,
		role: "menu",
		"aria-labelledby": E || ee,
		"aria-describedby": S ? z : void 0,
		tabIndex: -1,
		onKeyDown: oe,
		onFocus: (e) => e.stopPropagation(),
		onBlur: (e) => e.stopPropagation(),
		className: "ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none",
		style: { minWidth: w },
		children: c.map((e, n) => {
			if (e.divider) return /* @__PURE__ */ v("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${n}`);
			se++;
			let r = H[se], i = e.checked !== void 0, a = /* @__PURE__ */ y("button", {
				type: "button",
				ref: (e) => {
					F.current[r.index] = e;
				},
				role: vs(e),
				"aria-checked": i ? e.checked : void 0,
				"aria-disabled": e.disabled || void 0,
				tabIndex: r.index === k ? 0 : -1,
				onClick: () => re(r),
				onMouseDown: e.disabled ? (e) => e.preventDefault() : void 0,
				onFocus: () => A(r.index),
				onMouseMove: () => {
					!e.disabled && r.index !== k && A(r.index);
				},
				className: Y("flex h-7 w-full items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.disabled ? "text-text-secondary cursor-not-allowed opacity-50" : e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted cursor-pointer" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover cursor-pointer"),
				children: [
					e.icon && /* @__PURE__ */ v("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center",
						children: e.icon
					}),
					/* @__PURE__ */ v("span", {
						className: "flex-1",
						children: e.label
					}),
					e.badge != null && /* @__PURE__ */ v("span", {
						className: "ml-auto",
						children: e.badge
					}),
					e.shortcut && /* @__PURE__ */ v("span", {
						className: "text-2xs text-text-tertiary ml-auto pl-4 font-mono",
						children: e.shortcut
					}),
					e.checked && /* @__PURE__ */ v(O, { className: "text-accent ml-auto h-3.5 w-3.5 shrink-0" })
				]
			}, `item-${n}`);
			if (e.href === void 0) return a;
			let o = {
				...a.props,
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
					t.defaultPrevented || t.button !== 0 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || re(r);
				},
				onAuxClick: e.disabled ? (e) => e.preventDefault() : void 0,
				ref: (e) => {
					F.current[r.index] = e;
				}
			};
			return delete o.key, /* @__PURE__ */ v(t, { children: f ? f(o, e) : /* @__PURE__ */ v("a", { ...o }) }, `item-${n}`);
		})
	}) : null;
	return /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("div", {
		ref: j,
		onClick: K,
		onKeyDown: ne,
		...B ? {} : {
			...q,
			id: ee,
			role: "button",
			tabIndex: 0
		},
		children: B ? n(B, {
			...q,
			id: ee
		}) : m
	}), ce && me(S ? /* @__PURE__ */ y("div", {
		ref: P,
		onMouseDown: (e) => {
			N.current?.contains(e.target) || e.preventDefault();
		},
		className: "ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none",
		style: { minWidth: w },
		children: [/* @__PURE__ */ v("div", {
			id: z,
			className: "border-border border-b px-4 py-2",
			children: d
		}), n(ce, {
			className: "focus:outline-none",
			style: void 0
		})]
	}) : ce, C ?? document.body)] });
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function bs({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ y("div", {
		className: Y("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ v("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ v(B, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ v("p", {
				className: "text-text-primary mb-1 text-sm font-medium",
				children: t
			}),
			n && /* @__PURE__ */ v("p", {
				className: "text-text-secondary max-w-[300px] text-center text-xs",
				children: n
			}),
			r && /* @__PURE__ */ v("div", {
				className: "mt-4",
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/ui/ErrorBoundary.tsx
var xs = class extends e {
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
		return this.state.hasError ? /* @__PURE__ */ y("div", {
			className: "ui-glass-shell bg-bg-primary flex min-h-svh flex-col items-center justify-center p-8 text-center",
			children: [
				/* @__PURE__ */ v("p", {
					className: "text-text-primary mb-2 text-lg font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ v("p", {
					className: "text-text-secondary mb-6 max-w-md text-xs",
					children: this.state.error?.message ?? "An unexpected error occurred."
				}),
				/* @__PURE__ */ v(sr, {
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
function Ss({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ v(ys, {
		align: r,
		trigger: /* @__PURE__ */ v(Rr, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function Cs({ children: e, className: t }) {
	return /* @__PURE__ */ v("kbd", {
		className: Y("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var ws = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function Ts({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ v("div", {
		className: Y("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ v(H, { className: Y("text-accent animate-spin", ws[t]) })
	});
}
//#endregion
//#region src/components/ui/ListItemLink.tsx
function Es({ title: e, icon: t, meta: n, trailing: r, active: i, className: a, ...o }) {
	let s = Y("group hover:bg-bg-hover flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs transition-colors duration-[100ms] focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", i && "bg-accent-muted", a), c = /* @__PURE__ */ y(_, { children: [
		t != null && /* @__PURE__ */ v("span", {
			className: "shrink-0",
			children: t
		}),
		/* @__PURE__ */ y("span", {
			className: Y("min-w-0 flex-1", o.as !== "button" && "truncate"),
			children: [/* @__PURE__ */ v("span", {
				className: Y("text-text-primary", o.as !== "button" && "group-hover:underline"),
				children: e
			}), n != null && /* @__PURE__ */ v("span", {
				className: Y("text-text-disabled text-2xs", o.as !== "button" && "ml-2"),
				children: n
			})]
		}),
		r != null && /* @__PURE__ */ v("span", {
			className: "text-text-tertiary text-2xs shrink-0",
			children: r
		})
	] });
	if (o.as === "button") {
		let { as: e, ...t } = o;
		return /* @__PURE__ */ v(e, {
			type: "button",
			...t,
			"aria-pressed": i ?? t["aria-pressed"],
			className: s,
			children: c
		});
	}
	let { as: l = "a", renderLink: u, ...d } = o, f = {
		...d,
		"aria-current": i ? "page" : d["aria-current"],
		className: s,
		children: c
	};
	return u ? u(f) : /* @__PURE__ */ v(l, { ...f });
}
//#endregion
//#region src/components/ui/MessageBubble.tsx
function Ds({ direction: e, author: t, timestamp: n, status: r, actions: i, children: a, className: o, ...s }) {
	let c = e === "outbound";
	return /* @__PURE__ */ v("div", {
		role: "group",
		"aria-label": `${c ? "Outbound" : "Inbound"} message`,
		...s,
		"data-direction": e,
		className: Y("flex", c && "justify-end", o),
		children: /* @__PURE__ */ y("div", {
			className: Y("min-w-0 rounded-md px-4 py-3", c ? "bg-accent text-text-on-accent" : "border-border bg-bg-secondary text-text-primary border"),
			style: { maxWidth: "min(36rem, 85%)" },
			children: [
				t != null && /* @__PURE__ */ v("div", {
					className: "mb-1 text-xs font-medium",
					children: t
				}),
				/* @__PURE__ */ v("div", {
					className: "text-xs whitespace-pre-wrap",
					style: { overflowWrap: "anywhere" },
					children: a
				}),
				(n != null || r != null || i != null) && /* @__PURE__ */ y("div", {
					className: "mt-2 flex flex-wrap items-center gap-2 text-2xs",
					children: [
						n != null && /* @__PURE__ */ v("span", { children: n }),
						r != null && /* @__PURE__ */ v("span", { children: r }),
						i != null && /* @__PURE__ */ v("span", {
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
function Os(e, t, n, r) {
	let i = typeof t == "object" ? t : { base: t }, a = { [`--ui-${e}-base`]: n(i.base ?? r) };
	for (let t of [
		"sm",
		"md",
		"lg",
		"xl"
	]) a[`--ui-${e}-${t}`] = i[t] === void 0 ? "initial" : n(i[t]);
	return a;
}
function ks(e) {
	return typeof e == "number" ? `repeat(${e}, minmax(0, 1fr))` : e;
}
function As(e = 0, t, n) {
	return {
		"--ui-gap": `calc(var(--spacing) * ${e})`,
		"--ui-gap-x": t === void 0 ? "initial" : `calc(var(--spacing) * ${t})`,
		"--ui-gap-y": n === void 0 ? "initial" : `calc(var(--spacing) * ${n})`
	};
}
function js(e) {
	return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Ms(e) {
	return e === "between" || e === "around" || e === "evenly" ? `space-${e}` : js(e);
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
var Ns = "ui-metadata-stripe rounded-md px-2 py-1.5";
function Ps(e, t) {
	return Os("stripe", t, (t) => Math.floor(e / t) % 2 == 0 ? "var(--ui-metadata-stripe-color, var(--bg-tertiary))" : "transparent", 1);
}
function Fs({ items: e, labelWidth: n = "100px", layout: r = "inline", columns: i = 1, gap: a = 3, striped: o = !1, className: s }) {
	return r === "stacked" ? /* @__PURE__ */ v("dl", {
		className: Y("ui-grid text-xs", s),
		style: {
			...Os("columns", i, ks, 1),
			...o ? As(a, void 0, 0) : As(a)
		},
		children: e.map((e, t) => /* @__PURE__ */ y("div", {
			className: o ? Ns : void 0,
			style: o ? Ps(t, i) : void 0,
			children: [/* @__PURE__ */ v("dt", {
				className: "text-text-tertiary font-label",
				children: e.label
			}), /* @__PURE__ */ v("dd", {
				className: Y((typeof e.value == "string" || typeof e.value == "number") && "text-text-primary font-data"),
				children: e.value
			})]
		}, e.label))
	}) : o ? /* @__PURE__ */ v("div", {
		className: Y("gap-x-3 text-xs", s),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e, t) => /* @__PURE__ */ y("div", {
			className: Ns,
			style: {
				...Ps(t, 1),
				display: "grid",
				gridColumn: "1 / -1",
				gridTemplateColumns: "subgrid"
			},
			children: [/* @__PURE__ */ v("span", {
				className: "text-text-tertiary font-label",
				children: e.label
			}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ v("span", {
				className: "text-text-primary font-data",
				children: e.value
			}) : /* @__PURE__ */ v("span", { children: e.value })]
		}, e.label))
	}) : /* @__PURE__ */ v("div", {
		className: Y("gap-x-3 gap-y-2 text-xs", s),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e) => /* @__PURE__ */ y(t, { children: [/* @__PURE__ */ v("span", {
			className: "text-text-tertiary font-label",
			children: e.label
		}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ v("span", {
			className: "text-text-primary font-data",
			children: e.value
		}) : /* @__PURE__ */ v("span", { children: e.value })] }, e.label))
	});
}
//#endregion
//#region src/components/ui/MetricCard.tsx
var Is = {
	positive: "success",
	negative: "danger",
	neutral: "neutral"
};
function Ls({ label: e, value: t, sub: n, trend: r, bar: i, icon: a, iconColor: o, className: s }) {
	let c = r && Is[r.tone], l = Mn(An(c) ? c : "neutral").text;
	return /* @__PURE__ */ y("div", {
		className: Y("ui-glass bg-bg-card border-border relative overflow-hidden rounded-md border p-3", s),
		children: [
			a && /* @__PURE__ */ v(a, { className: Y("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", o) }),
			/* @__PURE__ */ v("p", {
				className: "text-2xs-f text-text-tertiary font-label mb-1 font-medium tracking-wider uppercase",
				children: e
			}),
			/* @__PURE__ */ v("p", {
				className: "text-text-primary font-data text-xl font-bold tabular-nums",
				children: t
			}),
			n && /* @__PURE__ */ v("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: n
			}),
			r && /* @__PURE__ */ y("p", {
				className: "text-2xs font-label mt-1 flex items-center gap-1",
				children: [/* @__PURE__ */ v("span", {
					className: Y("font-medium tabular-nums", l),
					children: r.value
				}), /* @__PURE__ */ v("span", {
					className: "text-text-tertiary",
					children: r.label
				})]
			}),
			i !== void 0 && /* @__PURE__ */ v("div", {
				className: "bg-bg-tertiary mt-2 h-[3px] overflow-hidden rounded-md",
				children: /* @__PURE__ */ v("div", {
					className: "bg-accent h-full rounded-md transition-all duration-[250ms] ease-out",
					style: { width: `${Math.min(100, Math.max(0, i))}%` }
				})
			})
		]
	});
}
//#endregion
//#region src/components/ui/OAuthButton.tsx
function Rs() {
	return /* @__PURE__ */ y("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ v("path", {
				fill: "currentColor",
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
			}),
			/* @__PURE__ */ v("path", {
				fill: "currentColor",
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			}),
			/* @__PURE__ */ v("path", {
				fill: "currentColor",
				d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
			}),
			/* @__PURE__ */ v("path", {
				fill: "currentColor",
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
			})
		]
	});
}
function zs() {
	return /* @__PURE__ */ v("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ v("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var Bs = {
	github: "GitHub",
	google: "Google"
}, Vs = {
	github: zs,
	google: Rs
};
function Hs({ provider: e, children: t, ...n }) {
	let r = Vs[e];
	return /* @__PURE__ */ y(sr, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ v(r, {}), t ?? Bs[e]]
	});
}
//#endregion
//#region src/components/ui/OverlineLabel.tsx
function Us({ children: e, as: t = "span", className: n }) {
	return /* @__PURE__ */ v(t, {
		className: Y("text-2xs text-text-tertiary font-label font-medium tracking-wider uppercase", n),
		children: e
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function Ws({ title: e, subtitle: t, actions: n, className: r, eyebrow: i, headingLevel: a = 1, wrap: o = !1 }) {
	let s = `h${a}`;
	return /* @__PURE__ */ y("div", {
		className: Y("flex items-center justify-between gap-3", o && "flex-wrap", r),
		children: [/* @__PURE__ */ y("div", {
			className: "min-w-0",
			children: [
				i && /* @__PURE__ */ v("p", {
					className: "text-text-tertiary text-2xs",
					children: i
				}),
				/* @__PURE__ */ v(s, {
					className: "text-text-primary font-heading text-sm font-semibold",
					children: e
				}),
				t && /* @__PURE__ */ v("p", {
					className: "text-text-tertiary text-xs",
					children: t
				})
			]
		}), n && /* @__PURE__ */ v("div", {
			className: Y("flex items-center gap-2", o && "flex-wrap"),
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/PageSection.tsx
function Gs({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ y("section", {
		className: Y("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ y("div", {
			className: Y("border-border flex items-end justify-between gap-3 border-b pb-2", o),
			children: [/* @__PURE__ */ y("div", {
				className: "min-w-0",
				children: [e && /* @__PURE__ */ v(i, {
					className: "text-text-primary font-heading text-xs font-semibold",
					children: e
				}), t && /* @__PURE__ */ v("p", {
					className: "text-text-secondary mt-1 text-xs",
					children: t
				})]
			}), n && /* @__PURE__ */ v("div", {
				className: "flex items-center gap-2",
				children: n
			})]
		}), /* @__PURE__ */ v("div", {
			className: s,
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/PaginationBar.tsx
var Ks = [
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
function qs({ page: e, pageSize: t, total: n, summary: r, showTotal: i = !1, loading: a = !1, pageSizeOptions: o = Ks, onPageChange: s, onPageSizeChange: c, className: l }) {
	let u = Math.ceil(n / t), d = Math.min((e - 1) * t + 1, n), f = Math.min(e * t, n);
	return /* @__PURE__ */ y("div", {
		className: Y("flex items-center justify-between", l),
		children: [/* @__PURE__ */ y("div", {
			className: "flex items-center gap-3",
			children: [c && /* @__PURE__ */ v(br, {
				size: "sm",
				value: String(t),
				onChange: (e) => {
					a || c(Number(e));
				},
				options: o,
				className: "w-28",
				disabled: a
			}), /* @__PURE__ */ y("span", {
				role: "status",
				className: Y("text-text-tertiary text-xs", !a && "hidden sm:inline"),
				children: [a ? "Loading results..." : r === void 0 ? /* @__PURE__ */ y(_, { children: [
					d,
					"–",
					f,
					" of ",
					n
				] }) : typeof r == "function" ? r(n) : r, !a && i && /* @__PURE__ */ y(_, { children: [
					" · ",
					n,
					" in total"
				] })]
			})]
		}), /* @__PURE__ */ v(Vr, {
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
function Js({ id: e, error: t, hint: n, describedBy: r, invalid: i, required: a }) {
	let o = u(), s = c(_r), l = e ?? s?.id ?? o, d = t ? `${l}-error` : void 0, f = n ? `${l}-hint` : void 0;
	return {
		inputId: l,
		errorId: d,
		hintId: f,
		describedBy: vr(r, s?.describedBy, f, d),
		invalid: i ?? (!!t || s?.invalid || void 0),
		required: a ?? s?.required,
		placeholderLabel: s?.placeholderLabel
	};
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var Ys = a(({ label: e, error: t, className: n, id: r, hint: i, controlSize: a, required: o, "aria-describedby": s, "aria-invalid": c, ...l }, u) => {
	let d = Js({
		id: r,
		error: t,
		hint: i,
		describedBy: s,
		invalid: c,
		required: o
	}), { inputId: f, errorId: p, hintId: m } = d, h = $n(a), [_, b] = g(!1);
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-1.5",
		children: [
			i && /* @__PURE__ */ v("p", {
				id: m,
				className: "text-text-secondary text-xs",
				children: i
			}),
			(e || t) && /* @__PURE__ */ y("div", {
				className: "flex items-center justify-between",
				children: [e && /* @__PURE__ */ v("label", {
					htmlFor: f,
					className: "ui-field-label text-xs font-medium",
					children: e
				}), t && /* @__PURE__ */ v("p", {
					id: p,
					className: "text-2xs text-red",
					children: t
				})]
			}),
			/* @__PURE__ */ y("div", {
				className: "relative",
				children: [/* @__PURE__ */ v("input", {
					ref: u,
					"data-control-size": h,
					required: d.required,
					"aria-invalid": d.invalid,
					"aria-describedby": d.describedBy,
					id: f,
					type: _ ? "text" : "password",
					className: Y("ui-password-input ui-sized-control bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
					...l
				}), /* @__PURE__ */ v("button", {
					type: "button",
					onClick: () => b(!_),
					"data-control-size": h,
					className: "ui-password-toggle text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",
					"aria-label": _ ? "Hide password" : "Show password",
					children: v(_ ? L : I, { className: "h-3.5 w-3.5" })
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
	return !n && e.length === 0 ? null : /* @__PURE__ */ v("ul", {
		"aria-label": "Password requirements",
		className: Y("space-y-1", r),
		children: t.map((t) => {
			let n = t.test(e);
			return /* @__PURE__ */ y("li", {
				className: "flex items-center gap-1.5",
				children: [n ? /* @__PURE__ */ v(O, {
					"aria-hidden": "true",
					className: "text-green h-3 w-3"
				}) : /* @__PURE__ */ v(de, {
					"aria-hidden": "true",
					className: "text-text-disabled h-3 w-3"
				}), /* @__PURE__ */ y("span", {
					className: Y("text-2xs", n ? "text-green" : "text-text-disabled"),
					children: [t.label, /* @__PURE__ */ v("span", {
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
	let c = h(null), l = h(null), [d, p] = Ht(l), m = u(), g = (e) => {
		n(!1), e === "escape" && c.current?.focus();
	}, b = xn(t, g, [l], [c]);
	yn(t, c, l, {
		side: r,
		onAnchorHidden: () => g()
	});
	let x = s((e) => {
		if (p(e), e) return () => {
			e.contains(e.ownerDocument.activeElement) && c.current?.focus({ preventScroll: !0 }), p(null);
		};
	}, [p]);
	return f(() => {
		t && l.current?.focus();
	}, [t]), /* @__PURE__ */ y(_, { children: [e({
		ref: c,
		type: "button",
		onClick: () => n(!t),
		"aria-haspopup": "dialog",
		"aria-expanded": t,
		"aria-controls": t ? m : void 0
	}), t && /* @__PURE__ */ v("div", {
		ref: x,
		id: m,
		role: "dialog",
		"aria-label": i,
		tabIndex: -1,
		className: Y("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "text-text-primary p-3 text-xs focus:outline-none", o),
		children: /* @__PURE__ */ v(jt.Provider, {
			value: b,
			children: /* @__PURE__ */ v(Bt.Provider, {
				value: d,
				children: a
			})
		})
	})] });
}
//#endregion
//#region src/components/ui/ProfileHeader.tsx
function ec({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ y("div", {
		className: Y("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ v(Dn, {
				name: e,
				size: "lg"
			}),
			/* @__PURE__ */ y("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ y("div", {
						className: "mb-1 flex items-center gap-2",
						children: [/* @__PURE__ */ v("h1", {
							className: "text-text-primary text-base font-semibold",
							children: e
						}), n]
					}),
					t && /* @__PURE__ */ v("p", {
						className: "text-text-tertiary text-xs",
						children: t
					}),
					r && r.length > 0 && /* @__PURE__ */ v("div", {
						className: "mt-2 flex flex-wrap gap-3",
						children: r.map((e) => {
							let t = e.icon, n = /* @__PURE__ */ y(_, { children: [
								/* @__PURE__ */ v(t, { className: "h-3 w-3" }),
								" ",
								e.text
							] });
							return e.href ? /* @__PURE__ */ v("a", {
								href: e.href,
								className: "text-2xs-f text-accent hover:text-accent-hover flex cursor-pointer items-center gap-1",
								children: n
							}, e.text) : /* @__PURE__ */ v("span", {
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
	return /* @__PURE__ */ v("div", {
		className: Y("ui-prose", t),
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
	if (s === "too-long") return /* @__PURE__ */ v(_, { children: a });
	let c = Math.max(0, Math.floor(r)), l = s.size + c * 2, u = "";
	return s.modules.forEach((e, t) => {
		for (let n = 0; n < s.size; n++) {
			if (!e[n]) continue;
			let r = n;
			for (; n + 1 < s.size && e[n + 1];) n++;
			u += `M${r + c} ${t + c}h${n - r + 1}v1h-${n - r + 1}z`;
		}
	}), /* @__PURE__ */ y("svg", {
		role: "img",
		"aria-label": i,
		width: n,
		height: n,
		viewBox: `0 0 ${l} ${l}`,
		shapeRendering: "crispEdges",
		className: Y("block", o),
		children: [/* @__PURE__ */ v("rect", {
			width: l,
			height: l,
			fill: "var(--qr-background)"
		}), /* @__PURE__ */ v("path", {
			d: u,
			fill: "var(--qr-foreground)"
		})]
	});
}
//#endregion
//#region src/components/ui/ReorderList.tsx
function Ec({ items: e, getKey: t, renderItem: n, onReorder: r, onRemove: i, canRemove: a, getItemLabel: o, addButton: s, disabled: c = !1 }) {
	let [l, u] = g(""), d = h(/* @__PURE__ */ new Map()), p = h(null), m = h(null);
	f(() => {
		let n = p.current;
		n && e[n.index] !== void 0 && t(e[n.index]) === n.key && (d.current.get(n.key)?.[n.direction]?.focus(), p.current = null);
		let r = m.current;
		if (!r || e.some((e) => t(e) === r.key)) return;
		let i = e[Math.min(r.index, e.length - 1)];
		if (i !== void 0) {
			let e = d.current.get(t(i));
			(e?.remove ?? e?.down ?? e?.up)?.focus();
		}
		m.current = null;
	}, [e, t]);
	function _(n, i) {
		let a = n + i;
		if (c || a < 0 || a >= e.length) return;
		let s = [...e];
		[s[n], s[a]] = [s[a], s[n]], p.current = {
			key: t(e[n]),
			index: a,
			direction: i === -1 ? "up" : "down"
		}, r(s), u(`${o(e[n])} moved to position ${a + 1} of ${e.length}`);
	}
	return /* @__PURE__ */ y("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ v("ol", {
				role: "list",
				className: "space-y-3",
				children: e.map((r, s) => {
					let l = t(r), f = o(r);
					return /* @__PURE__ */ y("li", {
						className: "border-border space-y-3 rounded-md border p-3",
						children: [/* @__PURE__ */ y("div", {
							className: "flex items-center justify-end gap-1.5",
							children: [
								/* @__PURE__ */ v(sr, {
									ref: (e) => {
										let t = d.current.get(l) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.up = e, t.up || t.down || t.remove ? d.current.set(l, t) : d.current.delete(l);
									},
									variant: "ghost",
									size: "sm",
									icon: w,
									"aria-label": `Move ${f} up`,
									disabled: c,
									"aria-disabled": s === 0 || c,
									className: Y(s === 0 && "cursor-not-allowed opacity-40"),
									onClick: () => _(s, -1),
									children: "Up"
								}),
								/* @__PURE__ */ v(sr, {
									ref: (e) => {
										let t = d.current.get(l) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.down = e, t.up || t.down || t.remove ? d.current.set(l, t) : d.current.delete(l);
									},
									variant: "ghost",
									size: "sm",
									icon: S,
									"aria-label": `Move ${f} down`,
									disabled: c,
									"aria-disabled": s === e.length - 1 || c,
									className: Y(s === e.length - 1 && "cursor-not-allowed opacity-40"),
									onClick: () => _(s, 1),
									children: "Down"
								}),
								i && (a?.(r, s) ?? !0) && /* @__PURE__ */ v(sr, {
									ref: (e) => {
										let t = d.current.get(l) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.remove = e, t.up || t.down || t.remove ? d.current.set(l, t) : d.current.delete(l);
									},
									variant: "ghost",
									size: "sm",
									icon: le,
									"aria-label": `Remove ${f}`,
									disabled: c,
									onClick: () => {
										m.current = {
											key: l,
											index: s
										}, i(r, s), u(`${f} removed`);
									},
									children: "Remove"
								})
							]
						}), n(r, s)]
					}, l);
				})
			}),
			/* @__PURE__ */ v("div", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "true",
				className: "sr-only",
				children: l
			}),
			s
		]
	});
}
//#endregion
//#region src/components/ui/SearchInput.tsx
function Dc({ value: e, onChange: t, placeholder: n = "Search...", className: r, inputClassName: i, icon: a = q, invalid: o = !1, errorMessage: s, "aria-invalid": c, "aria-describedby": l, ...d }) {
	let f = `${u()}-error`, p = o || c != null && c !== !1 && c !== "false", m = p && s != null && typeof s != "boolean" && s !== "";
	return /* @__PURE__ */ y("div", {
		className: Y("flex flex-col gap-1.5", r),
		children: [/* @__PURE__ */ y("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ v(a, {
					"aria-hidden": "true",
					className: "text-text-tertiary pointer-events-none absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2"
				}),
				/* @__PURE__ */ v("input", {
					...d,
					type: "search",
					value: e,
					onChange: (e) => t(e.target.value),
					placeholder: n,
					"aria-invalid": o ? !0 : c,
					"aria-describedby": vr(l, m ? f : void 0),
					className: Y("bg-bg-secondary text-text-primary h-7 w-full pl-7 text-xs", !p && "pr-2", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:outline-none", p ? "border-red focus:border-red" : "focus:border-accent", p && "search-input-invalid", i)
				}),
				p && /* @__PURE__ */ v(x, {
					"aria-hidden": "true",
					className: "search-input-warning text-red pointer-events-none absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2"
				})
			]
		}), m && /* @__PURE__ */ v("p", {
			id: f,
			className: "text-2xs text-red",
			children: s
		})]
	});
}
//#endregion
//#region src/components/ui/Select.tsx
var Oc = a(({ label: e, labelPlacement: t = "above", error: n, options: r, className: i, id: a, hint: o, controlSize: c, required: u, "aria-describedby": d, "aria-invalid": f, ...p }, m) => {
	let _ = Js({
		id: a,
		error: n,
		hint: o,
		describedBy: d,
		invalid: f,
		required: u
	}), { inputId: b, errorId: x, hintId: S } = _, C = $n(c), w = h(null), T = s((e) => {
		if (w.current = e, typeof m == "function") return m(e);
		m && (m.current = e);
	}, [m]), E = t === "placeholder" && e ? e : e ? void 0 : _.placeholderLabel, D = !!E && !p.multiple && (!p.size || p.size <= 1), O = p.value !== void 0, [k, j] = g(p.value ?? p.defaultValue ?? ""), M = O ? p.value ?? "" : k, N = D && M === "", P = r.some((e) => !("options" in e) && e.value === ""), F = (e) => /* @__PURE__ */ v("option", {
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
	]), /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-1.5",
		children: [
			o && /* @__PURE__ */ v("p", {
				id: S,
				className: "text-text-secondary text-xs",
				children: o
			}),
			(e || n) && /* @__PURE__ */ y("div", {
				className: Y("flex items-center justify-between", D && !n && "sr-only"),
				children: [e && /* @__PURE__ */ v("label", {
					htmlFor: b,
					className: Y("ui-field-label font-label text-xs font-medium", D && "sr-only"),
					children: e
				}), n && /* @__PURE__ */ v("p", {
					id: x,
					className: "text-2xs text-red",
					children: n
				})]
			}),
			/* @__PURE__ */ y("div", {
				className: "relative",
				"data-control-size": D ? C : void 0,
				children: [
					/* @__PURE__ */ y("select", {
						ref: D ? T : m,
						"data-control-size": C,
						required: _.required,
						"aria-invalid": _.invalid,
						"aria-describedby": _.describedBy,
						id: b,
						className: Y("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", n ? "border-red" : "border-border", i),
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
						children: [D && !P && /* @__PURE__ */ v("option", {
							value: "",
							disabled: !0,
							hidden: !0
						}), r.map((e, t) => "options" in e ? /* @__PURE__ */ v("optgroup", {
							label: e.label,
							style: D ? { color: "var(--text-primary)" } : void 0,
							children: e.options.map(F)
						}, `group-${t}`) : F(e))]
					}),
					N && /* @__PURE__ */ v("span", {
						"aria-hidden": "true",
						className: "ui-select-placeholder text-text-disabled font-control pointer-events-none absolute top-1/2 -translate-y-1/2 truncate",
						children: E
					}),
					/* @__PURE__ */ v(A, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" })
				]
			})
		]
	});
});
Oc.displayName = "Select";
//#endregion
//#region src/components/ui/SettingRow.tsx
function kc({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ y("div", {
		className: Y("border-border flex items-center justify-between border-b py-3", r),
		children: [/* @__PURE__ */ y("div", {
			className: "min-w-0 flex-1 pr-4",
			children: [/* @__PURE__ */ v("p", {
				className: "text-text-primary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ v("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: t
			})]
		}), /* @__PURE__ */ v("div", {
			className: "shrink-0",
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/SideSheet.tsx
function Ac({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: o = "w-[360px]", resizable: s = !1, className: c, contentClassName: l }) {
	let d = u(), f = $n(), p = h(null), [m, g] = Ht(p);
	Ct(p, e);
	let _ = Mt(e, () => t());
	return Nt(e), e ? me(/* @__PURE__ */ v(jt.Provider, {
		value: _,
		children: /* @__PURE__ */ v(Bt.Provider, {
			value: m,
			children: /* @__PURE__ */ y("div", {
				className: "fixed inset-0 z-50",
				children: [/* @__PURE__ */ v("div", {
					className: "bg-bg-overlay animate-fade-in absolute inset-0",
					onClick: t
				}), /* @__PURE__ */ y("div", {
					ref: g,
					id: s ? d : void 0,
					className: Y("ui-glass bg-bg-secondary border-border absolute inset-y-0 flex flex-col shadow-lg", o, a === "right" ? "animate-slide-in-right right-0 border-l" : "animate-slide-in-left left-0 border-r", c),
					style: { maxWidth: "calc(100vw - 2rem)" },
					role: "dialog",
					"aria-modal": "true",
					"aria-label": typeof n == "string" ? n : "Panel",
					children: [
						/* @__PURE__ */ y("div", {
							"data-control-size": f,
							className: "ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5",
							children: [n && /* @__PURE__ */ v("h3", {
								className: "text-text-primary truncate text-sm font-medium",
								children: n
							}), /* @__PURE__ */ v(sr, {
								type: "button",
								variant: "icon",
								size: "sm",
								onClick: t,
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ v(de, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ v("div", {
							className: Y("ui-surface-body flex-1 overflow-y-auto p-3", l),
							children: r
						}),
						i && /* @__PURE__ */ v("div", {
							"data-control-size": f,
							className: "ui-bar border-border bg-bg-primary/50 flex shrink-0 items-center gap-2 border-t px-3 py-2.5",
							children: i
						}),
						s && m && /* @__PURE__ */ v(Fc, {
							sheet: m,
							side: a
						})
					]
				})]
			})
		})
	}), document.body) : null;
}
function jc(e, t) {
	e.style.width = t === null ? "" : `${t}px`;
}
function Mc(e) {
	let t = e.ownerDocument.body, n = t.style.userSelect, r = t.style.cursor;
	return t.style.userSelect = "none", t.style.cursor = "col-resize", () => {
		t.style.userSelect = n, t.style.cursor = r;
	};
}
function Nc(e) {
	let t = e.style.width;
	jc(e, null);
	let n = e.getBoundingClientRect().width;
	return e.style.width = t, n;
}
function Pc(e) {
	let t = e.ownerDocument.defaultView, n = parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize);
	return Math.max(0, t.innerWidth - 2 * n);
}
function Fc({ sheet: e, side: t }) {
	let n = e.ownerDocument.defaultView, [r, i] = g(() => ({
		width: e.getBoundingClientRect().width,
		min: e.getBoundingClientRect().width,
		max: Pc(e),
		desktop: n.innerWidth >= 640
	})), a = h(null), o = h(null), c = h(null);
	function u() {
		o.current = null, c.current?.(), c.current = null;
	}
	let d = s((t) => {
		let r = Pc(e), o = Math.min(Nc(e), r), s = n.innerWidth >= 640;
		a.current = s && t !== null ? Math.min(r, Math.max(o, t)) : null, a.current !== null && a.current <= o && (a.current = null), jc(e, a.current), i({
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
			r.disconnect(), n.removeEventListener("resize", t), u(), jc(e, null);
		};
	}, [
		d,
		e,
		n
	]), r.desktop ? /* @__PURE__ */ v("div", {
		role: "separator",
		tabIndex: 0,
		"aria-orientation": "vertical",
		"aria-label": "Resize panel",
		"aria-controls": e.id,
		"aria-valuenow": Math.round(r.width),
		"aria-valuemin": Math.round(r.min),
		"aria-valuemax": Math.round(r.max),
		className: Y("hover:bg-accent/30 active:bg-accent/50 focus-visible:outline-accent absolute inset-y-0 z-10 w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0", t === "right" ? "left-0" : "right-0"),
		style: { touchAction: "none" },
		onPointerDown: (t) => {
			if (!t.isPrimary || t.button !== 0 || o.current) return;
			t.preventDefault(), t.currentTarget.focus(), t.currentTarget.setPointerCapture(t.pointerId);
			let n = Nc(e);
			o.current = {
				pointerId: t.pointerId,
				x: t.clientX,
				width: a.current ?? n
			}, c.current = Mc(e);
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
			let r = Bo(n.key, a.current ?? Nc(e), 16, t);
			r !== void 0 && (n.preventDefault(), d(r));
		}
	}) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function Ic({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ v("div", {
		className: Y("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function Lc({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: Y("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var Rc = Object.assign(Ic, { Main: Lc }), zc = {
	active: "success",
	inactive: "neutral",
	pending: "warning",
	error: "danger"
};
function Bc({ status: e, label: t, className: n, pulse: r = !1 }) {
	let i = Mn(zc[e]);
	return /* @__PURE__ */ y("span", {
		className: Y("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ v("span", { className: Y("h-2 w-2 rounded-full", i.dot, r ? Y("status-dot-pulse relative", i.text) : e === "pending" && "animate-pulse-subtle") }), t && /* @__PURE__ */ v("span", {
			className: Y("text-xs", i.text),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function Vc({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ v("div", {
		className: Y("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ y("div", {
			className: Y("flex items-center", r < e.length - 1 && "flex-1"),
			children: [/* @__PURE__ */ y("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ v("div", {
						className: Y("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ v(O, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ v("span", {
						className: Y("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ v("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ v("div", { className: Y("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function Hc({ tabs: e, defaultTab: t, value: n, onChange: r, className: i, panelClassName: a }) {
	let [o, s] = g(t || e[0]?.key), c = n ?? o, l = e.some((e) => e.key === c) ? c : e[0]?.key, d = e.find((e) => e.key === l);
	function f(e) {
		n === void 0 && s(e), r?.(e);
	}
	let p = u(), m = h(null);
	function _(t) {
		let n = e.map((e) => e.key), r = n.indexOf(l), i = null;
		t.key === "ArrowRight" ? i = (r + 1) % e.length : t.key === "ArrowLeft" ? i = (r - 1 + e.length) % e.length : t.altKey || t.ctrlKey || t.metaKey || t.shiftKey || (t.key === "Home" && (i = 0), t.key === "End" && (i = e.length - 1)), i !== null && (t.preventDefault(), f(n[i]), (m.current?.querySelectorAll("[role=\"tab\"]"))?.[i]?.focus());
	}
	return /* @__PURE__ */ y("div", {
		className: i,
		children: [/* @__PURE__ */ v("div", {
			className: "border-border flex shrink-0 overflow-x-auto border-b",
			role: "tablist",
			ref: m,
			children: e.map((e) => /* @__PURE__ */ y("button", {
				type: "button",
				id: `${p}-tab-${e.key}`,
				role: "tab",
				tabIndex: e.key === l ? 0 : -1,
				"aria-selected": e.key === l,
				"aria-controls": `${p}-panel`,
				onClick: () => f(e.key),
				onKeyDown: _,
				className: Y("font-control relative flex shrink-0 cursor-pointer items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent", "hover:text-text-primary", e.key === l ? "text-accent" : "text-text-tertiary"),
				children: [
					e.icon && /* @__PURE__ */ v("span", {
						"aria-hidden": "true",
						children: e.icon
					}),
					/* @__PURE__ */ v("span", { children: e.label }),
					e.count != null && /* @__PURE__ */ y("span", {
						className: Y("min-w-[18px] rounded-md px-1.5 py-0.5 text-center text-2xs leading-none font-medium", e.key === l ? "bg-accent/15 text-accent" : "bg-bg-hover text-text-tertiary"),
						children: [/* @__PURE__ */ v("span", {
							"aria-hidden": "true",
							children: e.count
						}), /* @__PURE__ */ v("span", {
							className: "sr-only",
							children: e.countLabel ?? `${e.count} ${e.count === 1 ? "item" : "items"}`
						})]
					}),
					e.key === l && /* @__PURE__ */ v("div", { className: "bg-accent absolute right-0 bottom-0 left-0 h-0.5 rounded-md" })
				]
			}, e.key))
		}), /* @__PURE__ */ v("div", {
			id: `${p}-panel`,
			role: "tabpanel",
			"aria-labelledby": `${p}-tab-${l}`,
			className: Y("pt-4", a),
			children: d?.content
		})]
	});
}
//#endregion
//#region src/components/ui/Textarea.tsx
var Uc = a(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, hint: s, controlSize: c, required: l, "aria-describedby": u, "aria-invalid": d, ...f }, p) => {
	let m = Js({
		id: o,
		error: t,
		hint: s,
		describedBy: u,
		invalid: d,
		required: l
	}), { inputId: h, errorId: g, hintId: _ } = m, b = $n(c), x = typeof i == "string" ? i.length : 0;
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-1.5",
		children: [
			s && /* @__PURE__ */ v("p", {
				id: _,
				className: "text-text-secondary text-xs",
				children: s
			}),
			e && /* @__PURE__ */ v("label", {
				htmlFor: h,
				className: "ui-field-label font-label text-xs font-medium",
				children: e
			}),
			/* @__PURE__ */ v("textarea", {
				ref: p,
				"data-control-size": b,
				required: m.required,
				"aria-invalid": m.invalid,
				"aria-describedby": m.describedBy,
				id: h,
				value: i,
				maxLength: r,
				className: Y("ui-sized-control bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
				...f
			}),
			/* @__PURE__ */ y("div", {
				className: "flex justify-between",
				children: [t && /* @__PURE__ */ v("p", {
					id: g,
					className: "text-2xs text-red",
					children: t
				}), n && r && /* @__PURE__ */ y("p", {
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
Uc.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var Wc = a(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, hint: o, controlSize: s, required: c, "aria-describedby": l, "aria-invalid": u, ...d }, f) => {
	let p = Js({
		id: i,
		error: t,
		hint: o,
		describedBy: l,
		invalid: u,
		required: c
	}), { inputId: m, errorId: h, hintId: g } = p, _ = $n(s);
	return /* @__PURE__ */ y("div", {
		className: "flex flex-col gap-1.5",
		children: [
			o && /* @__PURE__ */ v("p", {
				id: g,
				className: "text-text-secondary text-xs",
				children: o
			}),
			(e || t) && /* @__PURE__ */ y("div", {
				className: "flex items-center justify-between",
				children: [e && /* @__PURE__ */ v("label", {
					htmlFor: m,
					className: "ui-field-label font-label text-xs font-medium",
					children: e
				}), t && /* @__PURE__ */ v("p", {
					id: h,
					className: "text-2xs text-red",
					children: t
				})]
			}),
			/* @__PURE__ */ y("div", {
				className: "relative",
				children: [n && /* @__PURE__ */ v("span", {
					className: "text-text-tertiary absolute top-1/2 left-2.5 -translate-y-1/2",
					children: n
				}), /* @__PURE__ */ v("input", {
					ref: f,
					"data-control-size": _,
					"data-has-icon": n ? "true" : void 0,
					required: p.required,
					"aria-invalid": p.invalid,
					id: m,
					readOnly: a,
					"aria-describedby": p.describedBy,
					className: Y("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
					...d
				})]
			})
		]
	});
});
Wc.displayName = "TextInput";
//#endregion
//#region src/components/ui/TimeInput.tsx
var Gc = a(({ value: e, onChange: t, ...n }, r) => /* @__PURE__ */ v(Wc, {
	...n,
	ref: r,
	type: "time",
	value: e,
	onChange: (e) => t(e.currentTarget.value)
}));
Gc.displayName = "TimeInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function Kc({ items: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: Y("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ y("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ y("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ v("div", { className: Y(An(t.dot) ? Mn(t.dot).dot : t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ v("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ y("div", {
				className: Y("pb-4", n === e.length - 1 && "pb-0"),
				children: [/* @__PURE__ */ v("p", {
					className: "text-text-primary text-xs",
					children: t.text
				}), /* @__PURE__ */ v("p", {
					className: "text-2xs text-text-tertiary mt-0.5",
					children: t.time
				})]
			})]
		}, t.id))
	});
}
//#endregion
//#region src/lib/formatMediaTime.ts
function qc(e) {
	let t = Math.max(0, Math.floor(e)), n = Math.floor(t / 3600), r = Math.floor(t % 3600 / 60), i = String(t % 60).padStart(2, "0");
	return n > 0 ? `${n}:${String(r).padStart(2, "0")}:${i}` : `${r}:${i}`;
}
//#endregion
//#region src/components/ui/TranscriptLine.tsx
function Jc({ speaker: e, role: t = "patient", time: n, onSeek: r, highlighted: i = !1, children: a, className: o, ...s }) {
	let c = n != null && Number.isFinite(n) && n >= 0 ? n : null, l = c == null ? null : qc(c);
	return /* @__PURE__ */ y("div", {
		...s,
		"data-role": t,
		"data-highlighted": i || void 0,
		className: Y("flex gap-3 rounded-md p-2 text-xs", i && "bg-accent-subtle", t === "system" ? "text-text-tertiary italic" : "text-text-secondary", t === "agent" && "border-l-2 border-accent", t === "staff" && "border-l-2 border-border-strong", o),
		children: [l != null && /* @__PURE__ */ v("div", {
			className: "font-mono text-2xs shrink-0 pt-1",
			children: r ? /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => r(c),
				"aria-label": `Seek to ${l}`,
				className: "cursor-pointer rounded-md text-accent hover:underline focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
				children: l
			}) : /* @__PURE__ */ v("span", { children: l })
		}), /* @__PURE__ */ y("div", {
			className: "min-w-0 flex-1",
			style: { overflowWrap: "anywhere" },
			children: [
				/* @__PURE__ */ v("span", {
					className: "text-text-primary font-medium",
					children: e
				}),
				": ",
				/* @__PURE__ */ v("span", {
					className: "whitespace-pre-wrap",
					children: a
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/Tooltip.tsx
var Yc = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function Xc(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		return typeof n == "function" ? n : () => e(null);
	}
	return e && (e.current = t), () => {
		e && (e.current = null);
	};
}
function Zc(e, t) {
	let n = { ...e };
	for (let [r, i] of Object.entries(t)) {
		if (i === void 0) continue;
		let t = e[r];
		if (/^on[A-Z]/.test(r) && typeof t == "function" && typeof i == "function") n[r] = (...e) => {
			t(...e), i(...e);
		};
		else if (r === "className") n[r] = Y(t, i);
		else if (r === "style") n[r] = {
			...t,
			...i
		};
		else if (r === "id" && typeof t == "string" && t) continue;
		else r === "aria-describedby" ? n[r] = [t, i].filter(Boolean).join(" ") : n[r] = i;
	}
	return n;
}
function Qc({ element: e, merged: t, ...r }) {
	return n(e, {
		...t,
		...r
	});
}
var $c = (e, t) => t instanceof Node && e.contains(t);
function el({ content: e, placement: n = "top", children: r, ref: i, ...a }) {
	let [c, d] = g(!1), f = u();
	l(() => {
		if (!c) return;
		let e = (e) => {
			e.key === "Escape" && (e.preventDefault(), d(!1));
		};
		return document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0);
	}, [c]);
	let p = o(r) && r.type !== t ? r : null, m = p?.props.ref, h = s((e) => {
		if (!e) return;
		let t = [Xc(m, e), Xc(i, e)];
		return () => t.forEach((e) => e());
	}, [m, i]), _ = {
		onMouseOver: (e) => {
			let { currentTarget: t, target: n, relatedTarget: r } = e;
			$c(t, n) && !$c(t, r) && d(!0);
		},
		onMouseOut: (e) => {
			$c(e.currentTarget, e.relatedTarget) || d(!1);
		},
		onFocus: (e) => {
			d($c(e.currentTarget, e.target));
		},
		onBlur: () => d(!1)
	}, b = p ? /* @__PURE__ */ v(Qc, {
		element: p,
		merged: Zc(p.props, {
			...a,
			"aria-describedby": [a["aria-describedby"], f].filter(Boolean).join(" ")
		}),
		ref: h
	}) : r;
	return /* @__PURE__ */ y("div", {
		...p ? _ : Zc(_, a),
		ref: p ? void 0 : h,
		className: Y("relative inline-flex", !p && a.className),
		children: [b, c && /* @__PURE__ */ v("div", {
			id: f,
			className: Y("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "ui-glass ui-glass-popover bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", Yc[n]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function tl({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a, moreFilters: o, moreFiltersActiveCount: s = 0, moreFiltersOpen: c, defaultMoreFiltersOpen: l, onMoreFiltersOpenChange: d }) {
	let f = u(), p = h(null), m = h(null), [_, b] = g(!1), x = s > 0, [S, C] = g(l ?? x), [w, T] = g(x);
	w !== x && (T(x), c === void 0 && x && C(!0));
	let E = c ?? S, D = (e) => {
		c === void 0 && C(e), d?.(e);
	}, O = Mt(!!o && E && _, (e) => {
		e.defaultPrevented || !m.current?.contains(m.current.ownerDocument.activeElement) || (D(!1), p.current?.focus());
	}, m), k = /* @__PURE__ */ y("div", {
		className: Y("flex items-center justify-between gap-3", !o && r),
		children: [/* @__PURE__ */ v("div", {
			className: Y("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), (t || o) && /* @__PURE__ */ y("div", {
			className: Y("flex items-center gap-1.5", a),
			children: [t, o && /* @__PURE__ */ y("span", {
				className: "relative inline-flex",
				children: [/* @__PURE__ */ v(sr, {
					ref: p,
					size: "sm",
					icon: ce,
					hideLabel: !0,
					"aria-label": s > 0 ? `More filters (${s} active)` : "More filters",
					"aria-expanded": E,
					"aria-controls": f,
					onClick: () => D(!E),
					children: "More filters"
				}), s > 0 && /* @__PURE__ */ v(_i, {
					size: "xs",
					color: "accent",
					"aria-hidden": "true",
					className: "pointer-events-none absolute top-0 right-0 -translate-y-1/2",
					children: s
				})]
			})]
		})]
	});
	return o ? /* @__PURE__ */ y("div", {
		className: Y("space-y-3", r),
		children: [k, /* @__PURE__ */ v(jt.Provider, {
			value: O,
			children: /* @__PURE__ */ v("div", {
				ref: m,
				id: f,
				hidden: !E,
				className: Y("flex-wrap items-center gap-3", E ? "flex" : "hidden"),
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
var nl = a(function({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, multiple: r, disabled: i, onChange: a, onFilesChange: o, className: s, id: c, "aria-describedby": l, ...f }, p) {
	let m = h(null);
	d(p, () => m.current, []);
	let g = u(), _ = `${c ?? g}-description`;
	return /* @__PURE__ */ y("label", {
		className: Y("ui-upload-dropzone border-border hover:border-border-strong relative block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", i ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
		onDragOver: (e) => {
			e.preventDefault(), e.dataTransfer.dropEffect = i || m.current?.matches(":disabled") ? "none" : "copy";
		},
		onDrop: (e) => {
			e.preventDefault();
			let t = m.current;
			if (i || !t || t.matches(":disabled") || !e.dataTransfer.files.length) return;
			let n = new DataTransfer(), a = Array.from(e.dataTransfer.files);
			for (let e of r ? a : a.slice(0, 1)) n.items.add(e);
			t.files = n.files, o?.(t.files, e);
		},
		children: [
			/* @__PURE__ */ v("input", {
				...f,
				id: c,
				ref: m,
				type: "file",
				multiple: r,
				disabled: i,
				className: "sr-only",
				"aria-describedby": [l, t && _].filter(Boolean).join(" ") || void 0,
				onChange: (e) => {
					a?.(e.target.files, e), e.target.files && o?.(e.target.files, e);
				}
			}),
			/* @__PURE__ */ v("div", {
				"aria-hidden": "true",
				className: "text-text-tertiary mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-bg-tertiary",
				children: n ?? /* @__PURE__ */ v(ue, { className: "h-4.5 w-4.5" })
			}),
			/* @__PURE__ */ v("span", {
				className: "text-text-secondary mb-1 block text-xs",
				children: e
			}),
			t && /* @__PURE__ */ v("span", {
				id: _,
				className: "text-2xs text-text-tertiary block",
				children: t
			})
		]
	});
}), rl = r({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function il() {
	return c(rl);
}
//#endregion
//#region src/lib/formatDate.ts
function al(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function ol(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function sl(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${co[e.getMonth()]} ${e.getDate()}`;
	return e.getFullYear() === t.getFullYear() ? o : `${o}, ${e.getFullYear()}`;
}
//#endregion
//#region src/providers/accentColors.ts
var cl = {
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
}, ll = new Set(Object.keys(cl));
function ul(e, t) {
	let n = cl[t];
	e.setProperty("--accent", n.base), e.setProperty("--accent-hover", `var(--glass-accent-hover, ${n.hover})`), e.setProperty("--accent-active", `var(--glass-accent-active, ${n.active})`), e.setProperty("--accent-muted", n.muted), e.setProperty("--accent-subtle", n.subtle);
}
//#endregion
//#region src/providers/SettingsProvider.tsx
var dl = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, fl = "leonardaustin-ui-settings", pl = new Set(Object.keys(en)), ml = new Set(Object.keys(dl)), hl = new Set([
	"light",
	"dark",
	"system"
]);
function gl(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : X(e, t, n);
}
function _l(e) {
	let t = {};
	if (ll.has(e.accentColor) && (t.accentColor = e.accentColor), hl.has(e.colorMode) && (t.colorMode = e.colorMode), pl.has(e.preferredDarkTheme) && !qt(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), pl.has(e.preferredLightTheme) && qt(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = gl(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!pl.has(t) || !r || typeof r != "object") continue;
			let e = r, i = en[t];
			n[t] = {
				uiFont: ml.has(e.uiFont) ? e.uiFont : i.uiFont,
				headingFont: ml.has(e.headingFont) ? e.headingFont : i.headingFont,
				proseFont: ml.has(e.proseFont) ? e.proseFont : i.proseFont,
				controlFont: ml.has(e.controlFont) ? e.controlFont : i.controlFont,
				labelFont: ml.has(e.labelFont) ? e.labelFont : i.labelFont,
				navigationFont: ml.has(e.navigationFont) ? e.navigationFont : i.navigationFont,
				dataFont: ml.has(e.dataFont) ? e.dataFont : i.dataFont,
				codeFont: ml.has(e.codeFont) ? e.codeFont : i.codeFont,
				fontSize: gl(e.fontSize, 11, 18, i.fontSize),
				borderRadius: gl(e.borderRadius, 0, 16, i.borderRadius),
				borderWidth: gl(e.borderWidth, 1, 3, i.borderWidth),
				tracking: gl(e.tracking, 0, .3, i.tracking),
				lineHeight: gl(e.lineHeight, 1.2, 2, i.lineHeight),
				density: gl(e.density, .18, .32, i.density)
			};
		}
		t.themeOverrides = n;
	}
	return t;
}
var vl = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function yl(e, t) {
	let n = {
		...vl,
		..._l(t ?? {})
	};
	if (typeof localStorage > "u") return n;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...n,
			..._l(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return n;
}
function bl(e, t) {
	let n = en[e] ?? en.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function xl(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function Sl({ children: e, storageKey: t = fl, initialSettings: n, forcedTheme: r }) {
	let [i, a] = g(() => yl(t, n)), [o, c] = g(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
	]), [d, f] = g(() => bl(u, i.themeOverrides));
	l(() => {
		f(bl(u, i.themeOverrides));
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
		ul(document.documentElement.style, i.accentColor);
	}, [i.accentColor]), l(() => {
		document.documentElement.classList.toggle("reduced-motion", i.reducedMotion);
	}, [i.reducedMotion]), l(() => {
		let e = document.documentElement, t = d.borderRadius;
		e.style.fontSize = `${d.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", dl[d.uiFont]), e.style.setProperty("--font-heading", dl[d.headingFont]), e.style.setProperty("--font-prose", dl[d.proseFont]), e.style.setProperty("--font-control", dl[d.controlFont]), e.style.setProperty("--font-label", dl[d.labelFont]), e.style.setProperty("--font-navigation", dl[d.navigationFont]), e.style.setProperty("--font-data", dl[d.dataFont]), e.style.setProperty("--font-code", dl[d.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${d.borderWidth}px`), e.style.setProperty("--ui-tracking", `${d.tracking}em`), e.style.setProperty("--ui-line-height", String(d.lineHeight)), e.style.setProperty("--ui-density", `${d.density}rem`);
	}, [d]);
	let h = p(() => bl(u, i.themeOverrides), [u, i.themeOverrides]), _ = u in i.themeOverrides, y = !xl(d, h), b = s(() => {
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
		delete e[u], m({ themeOverrides: e }), f(en[u] ?? en.dark);
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
		hasThemeOverrides: _,
		isCustomized: y
	}), [
		i,
		m,
		d,
		u,
		b,
		x,
		_,
		y
	]);
	return /* @__PURE__ */ v(Sn.Provider, {
		value: S,
		children: e
	});
}
//#endregion
//#region src/providers/themeClasses.ts
var Cl = {
	dark: [],
	light: ["theme-light"],
	lightInverted: ["theme-light-inverted"],
	monokai: ["theme-monokai"],
	solarized: ["theme-solarized"],
	cyberBrutalDark: ["theme-cyber-brutal-dark"],
	cyberBrutalLight: ["theme-cyber-brutal-light"],
	hashiTheme: ["theme-hashi"],
	glassDark: ["theme-glass", "theme-glass-dark"],
	glassLight: ["theme-glass", "theme-glass-light"]
}, wl = [...new Set(Object.values(Cl).flat())];
function Tl(e, t) {
	e.remove(...wl);
	let n = Object.hasOwn(Cl, t) ? Cl[t] : [];
	e.add(...n);
}
//#endregion
//#region src/providers/ThemeProvider.tsx
function El({ children: e }) {
	let { resolvedTheme: t } = c(Sn);
	return l(() => {
		Tl(document.documentElement.classList, t);
	}, [t]), /* @__PURE__ */ v(rl.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
//#region src/components/ui/FormField.tsx
function Dl({ id: e, label: t, hint: n, error: r, required: i, optionalLabel: a, labelPlacement: o = "above", children: c, className: l, ...d }) {
	let f = u(), p = e ?? f, m = n ? `${p}-hint` : void 0, h = r ? `${p}-error` : void 0, _ = `${p}-label`, [b, x] = g(0), S = s(() => (x((e) => e + 1), () => x((e) => e - 1)), []), C = o === "placeholder" && typeof t == "string" && t ? t : void 0, w = {
		id: p,
		"aria-describedby": vr(m, h),
		"aria-invalid": !!r || void 0,
		required: i
	};
	return /* @__PURE__ */ v(_r.Provider, {
		value: {
			id: p,
			describedBy: vr(m, h),
			invalid: !!r,
			required: i,
			placeholderLabel: C,
			labelId: _,
			claimLabel: S
		},
		children: /* @__PURE__ */ y("div", {
			...d,
			className: Y("flex flex-col gap-1.5", l),
			children: [
				/* @__PURE__ */ y("label", {
					id: b > 0 ? _ : void 0,
					htmlFor: p,
					className: Y("ui-field-label font-label text-xs font-medium", C && "sr-only"),
					children: [
						t,
						i && /* @__PURE__ */ v("span", {
							"aria-hidden": "true",
							children: " *"
						}),
						!i && a && /* @__PURE__ */ y("span", { children: [" ", a] })
					]
				}),
				n && /* @__PURE__ */ v("p", {
					id: m,
					className: "text-text-secondary text-xs",
					children: n
				}),
				r && /* @__PURE__ */ v("p", {
					id: h,
					className: "text-red text-xs",
					children: r
				}),
				typeof c == "function" ? c(w) : c
			]
		})
	});
}
function Ol({ className: e, ...t }) {
	return /* @__PURE__ */ v("p", {
		...t,
		className: Y("text-text-secondary text-xs", e)
	});
}
function kl({ className: e, ...t }) {
	return /* @__PURE__ */ v("p", {
		...t,
		className: Y("text-red text-xs", e)
	});
}
//#endregion
//#region src/components/ui/Fieldset.tsx
function Al({ id: e, legend: t, hint: n, error: r, children: i, className: a, "aria-describedby": o, ...s }) {
	let c = u(), l = e ?? c, d = n ? `${l}-hint` : void 0, f = r ? `${l}-error` : void 0, p = vr(o, d, f);
	return /* @__PURE__ */ y("fieldset", {
		...s,
		id: l,
		"aria-describedby": p,
		className: Y("min-w-0 space-y-2", a),
		children: [
			/* @__PURE__ */ v("legend", {
				className: "text-text-primary font-label text-xs font-medium",
				children: t
			}),
			n && /* @__PURE__ */ v("p", {
				id: d,
				className: "text-text-secondary text-xs",
				children: n
			}),
			r && /* @__PURE__ */ v("p", {
				id: f,
				className: "text-red text-xs",
				children: r
			}),
			/* @__PURE__ */ v(_r.Provider, {
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
var jl = a(({ label: e, description: t, controlSize: n, className: r, id: i, "aria-describedby": a, "aria-invalid": o, ...s }, l) => {
	let d = u(), f = $n(n), p = c(_r), m = i ?? p?.id ?? d, h = t ? `${m}-description` : void 0;
	return /* @__PURE__ */ y("label", {
		className: Y("ui-choice flex items-start gap-2.5", r),
		"data-control-size": f,
		children: [/* @__PURE__ */ v("input", {
			...s,
			ref: l,
			id: m,
			type: "radio",
			"aria-invalid": o ?? (p?.invalid || void 0),
			"aria-describedby": vr(a, p?.describedBy, h),
			className: "ui-native-choice"
		}), /* @__PURE__ */ y("span", {
			className: "text-text-primary text-xs",
			children: [/* @__PURE__ */ v("span", { children: e }), t && /* @__PURE__ */ v("span", {
				id: h,
				className: "text-text-secondary block text-xs",
				children: t
			})]
		})]
	});
});
jl.displayName = "Radio";
function Ml({ name: e, id: t, options: n, value: r, onChange: i, required: a, disabled: o, controlSize: s, ...c }) {
	let l = u(), d = t ?? l;
	return /* @__PURE__ */ v(Al, {
		...c,
		id: d,
		disabled: o,
		children: n.map((t, n) => /* @__PURE__ */ v(jl, {
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
var Nl = Object.assign(jl, { Group: Ml }), Pl = {
	pending: "Pending",
	uploading: "Uploading",
	processing: "Processing",
	ready: "Ready",
	error: "Upload failed"
};
function Fl(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Il({ name: e, size: t, status: n = "ready", statusLabel: r, error: i, onRetry: a, onRemove: o, onDownload: s, downloadHref: c, actionsDisabled: l, className: u, ...d }) {
	return /* @__PURE__ */ y("li", {
		...d,
		className: Y("ui-attachment-item border-border flex items-center justify-between gap-3 rounded-md border p-3", u),
		children: [/* @__PURE__ */ y("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ v("p", {
					className: "text-text-primary text-xs",
					children: e
				}),
				t !== void 0 && /* @__PURE__ */ v("p", {
					className: "text-text-tertiary text-2xs",
					children: Fl(t)
				}),
				/* @__PURE__ */ y("div", {
					role: "status",
					"aria-atomic": "true",
					className: Y("text-2xs", n === "error" ? "text-red" : "text-text-secondary"),
					children: [
						e,
						": ",
						i ?? r ?? Pl[n]
					]
				})
			]
		}), /* @__PURE__ */ y("div", {
			className: "flex items-center gap-1.5",
			children: [
				a && /* @__PURE__ */ v(sr, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: a,
					"aria-label": `Retry ${e}`,
					children: "Retry"
				}),
				c && !l && /* @__PURE__ */ v("a", {
					href: c,
					download: !0,
					"aria-label": `Download ${e}`,
					className: "text-accent text-xs",
					children: "Download"
				}),
				s && /* @__PURE__ */ v(sr, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: s,
					"aria-label": `Download ${e}`,
					children: "Download"
				}),
				o && /* @__PURE__ */ v(sr, {
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
function Ll({ children: e, className: t, "aria-label": n = "Attachments", ...r }) {
	return /* @__PURE__ */ v("ul", {
		...r,
		"aria-label": n,
		className: Y("space-y-2", t),
		children: e
	});
}
//#endregion
//#region src/lib/dateParts.ts
function Rl(e, { required: t = !1, minYear: n = 1900, maxYear: r = 2100 } = {}) {
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
function zl({ value: e, onChange: t, label: n, hint: r, error: i, id: a, name: o, disabled: s, required: c, className: d, inputProps: f, minYear: p = 1900, maxYear: m = 2100 }) {
	let _ = u(), b = h({}), [x, S] = g(!1);
	if (!Number.isInteger(p) || !Number.isInteger(m) || p < 1 || m > 9999 || p > m) throw RangeError("DatePartsInput requires year bounds between 1 and 9999, with minYear <= maxYear");
	let C = Rl(e, {
		required: c,
		minYear: p,
		maxYear: m
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
		year: Array.from({ length: m - p + 1 }, (e, t) => String(m - t))
	}, O = a ?? _, k = [r && `${O}-hint`, T && `${O}-error`].filter(Boolean).join(" ") || void 0;
	return /* @__PURE__ */ y("fieldset", {
		id: O,
		disabled: s,
		className: Y("space-y-2", d),
		"aria-describedby": k,
		children: [
			/* @__PURE__ */ y("legend", {
				className: "ui-field-label text-xs font-medium",
				children: [n, c && /* @__PURE__ */ v("span", { children: " (required)" })]
			}),
			r && /* @__PURE__ */ v("p", {
				id: `${O}-hint`,
				className: "text-text-tertiary text-xs",
				children: r
			}),
			/* @__PURE__ */ v("div", {
				className: "ui-date-parts",
				children: [
					"day",
					"month",
					"year"
				].map((n) => /* @__PURE__ */ y("div", {
					className: "ui-date-part",
					children: [/* @__PURE__ */ v(Wc, {
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
						"aria-describedby": [k, f?.[n]?.["aria-describedby"]].filter(Boolean).join(" ") || void 0,
						onChange: (r) => {
							t({
								...e,
								[n]: r.target.value
							}), f?.[n]?.onChange?.(r);
						}
					}), /* @__PURE__ */ y("div", {
						className: "ui-date-part-selector",
						children: [/* @__PURE__ */ v(A, {
							"aria-hidden": "true",
							className: "h-3.5 w-3.5"
						}), /* @__PURE__ */ y("select", {
							"aria-label": `Choose ${n}`,
							disabled: s || f?.[n]?.disabled || f?.[n]?.readOnly,
							value: D[n].includes(String(Number(e[n]))) ? String(Number(e[n])) : "",
							onChange: (r) => {
								t({
									...e,
									[n]: r.target.value
								});
							},
							children: [/* @__PURE__ */ y("option", {
								value: "",
								disabled: !0,
								children: ["Choose ", n]
							}), D[n].map((e) => /* @__PURE__ */ v("option", {
								value: e,
								children: e
							}, e))]
						})]
					})]
				}, n))
			}),
			T && /* @__PURE__ */ v("p", {
				id: `${O}-error`,
				className: "text-red text-xs",
				children: T
			})
		]
	});
}
//#endregion
//#region src/components/ui/Skeleton.tsx
function Bl({ className: e, width: t, height: n, style: r, ...i }) {
	return /* @__PURE__ */ v("div", {
		...i,
		"aria-hidden": "true",
		className: Y("ui-skeleton rounded-md bg-bg-tertiary", e),
		style: {
			width: t,
			height: n,
			...r
		}
	});
}
//#endregion
//#region src/components/ui/NavTabs.tsx
function Vl({ items: e, activeKey: t, renderLink: n, className: r, "aria-label": i = "Sections", ...a }) {
	return /* @__PURE__ */ v("nav", {
		...a,
		"aria-label": i,
		className: Y("ui-nav-tabs border-border border-b", r),
		children: /* @__PURE__ */ v("ul", {
			className: "ui-nav-tabs-list",
			children: e.map((e) => {
				let { key: r, label: i, badge: a, ...o } = e, s = {
					...o,
					"aria-current": r === t ? "page" : void 0,
					className: Y("ui-nav-tab px-3 py-2 text-xs font-medium", r === t ? "text-accent" : "text-text-secondary", e.className),
					children: /* @__PURE__ */ y(_, { children: [i, a !== void 0 && /* @__PURE__ */ v(_i, {
						size: "xs",
						className: "bg-bg-tertiary font-inherit text-inherit",
						children: a
					})] })
				};
				return /* @__PURE__ */ v("li", { children: n ? n(s, e) : /* @__PURE__ */ v("a", { ...s }) }, r);
			})
		})
	});
}
//#endregion
//#region src/components/ui/CharacterCount.tsx
function Hl({ value: e, maxLength: t, announcementDelay: n = 1e3, className: r, ...i }) {
	let a = t - e.length, o = Math.abs(a), s = `${o} ${o === 1 ? "character" : "characters"} ${a < 0 ? "over the limit" : "remaining"}`, [c, u] = g(s);
	return l(() => {
		let e = setTimeout(() => u(s), n);
		return () => clearTimeout(e);
	}, [s, n]), /* @__PURE__ */ y("p", {
		...i,
		className: Y("text-2xs", a < 0 ? "text-red" : "text-text-tertiary", r),
		children: [/* @__PURE__ */ v("span", {
			"aria-hidden": "true",
			children: s
		}), /* @__PURE__ */ v("span", {
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
function Ul({ size: e, children: t }) {
	return /* @__PURE__ */ v(Qn.Provider, {
		value: e,
		children: t
	});
}
//#endregion
//#region src/components/ui/ProgressBar.tsx
var Wl = a(function({ label: e, value: t, min: n = 0, max: r = 100, color: i = "accent", striped: a = !1, animated: o = !1, id: s, className: c, ...l }, d) {
	let f = u(), p = s ?? f;
	if (!Number.isFinite(n) || !Number.isFinite(r) || r <= n) throw RangeError("ProgressBar requires a finite max greater than min");
	if (t !== void 0 && !Number.isFinite(t)) throw RangeError("ProgressBar value must be finite");
	let m = t === void 0 ? void 0 : Math.min(r, Math.max(n, t));
	return /* @__PURE__ */ y("div", {
		className: "space-y-1.5",
		children: [/* @__PURE__ */ v("label", {
			htmlFor: p,
			className: "text-text-secondary text-xs",
			children: e
		}), /* @__PURE__ */ y("div", {
			className: "ui-progress-track",
			"data-color": i,
			"data-striped": a || void 0,
			"data-animated": o || void 0,
			"data-indeterminate": m === void 0 || void 0,
			children: [/* @__PURE__ */ v("span", {
				"aria-hidden": "true",
				className: "ui-progress-fill",
				style: { width: m === void 0 ? "35%" : `${(m - n) / (r - n) * 100}%` }
			}), /* @__PURE__ */ v("progress", {
				...l,
				ref: d,
				id: p,
				className: Y("ui-progress-bar", c),
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
function Gl({ as: e, gap: t = 0, align: n = "stretch", justify: r = "start", className: a, style: o, ...s }) {
	return i(e ?? "div", {
		...s,
		className: Y("ui-stack", a),
		style: {
			...As(t),
			"--ui-align": js(n),
			"--ui-justify": Ms(r),
			...o
		}
	});
}
//#endregion
//#region src/components/ui/Inline.tsx
function Kl({ as: e, gap: t = 0, gapX: n, gapY: r, align: a = "stretch", justify: o = "start", wrap: s = !1, inline: c = !1, stackBelow: l, className: u, style: d, ...f }) {
	return i(e ?? "div", {
		...f,
		className: Y("ui-inline", u),
		style: {
			...As(t, n, r),
			"--ui-align": js(a),
			"--ui-justify": Ms(o),
			"--ui-wrap": s ? "wrap" : "nowrap",
			"--ui-display": c ? "inline-flex" : "flex",
			...Os("direction", l ? {
				base: "column",
				[l]: "row"
			} : "row", (e) => e, "row"),
			...d
		}
	});
}
//#endregion
//#region src/components/ui/Grid.tsx
function ql({ as: e, columns: t = 1, gap: n = 0, gapX: r, gapY: a, align: o = "stretch", justify: s = "stretch", className: c, style: l, ...u }) {
	return i(e ?? "div", {
		...u,
		className: Y("ui-grid", c),
		style: {
			...As(n, r, a),
			...Os("columns", t, ks, 1),
			"--ui-align": o,
			"--ui-justify": s,
			...l
		}
	});
}
//#endregion
//#region src/components/ui/GridItem.tsx
function Jl({ as: e, span: t = 1, className: n, style: r, ...a }) {
	return i(e ?? "div", {
		...a,
		className: Y("ui-grid-item", n),
		style: {
			...Os("span", t, (e) => `span ${e} / span ${e}`, 1),
			...r
		}
	});
}
//#endregion
export { $r as Accordion, ti as Alert, Pr as AppShell, Qe as AreaChart, Il as AttachmentItem, Ll as AttachmentList, oi as AudioPlayer, ci as AuthCard, Fr as AuthLayout, li as AuthorByline, Dn as Avatar, Ir as BackLink, _i as Badge, tt as BarChart, xt as BottomNav, Xn as Breadcrumbs, sr as Button, Pt as COMMAND_PALETTE_EVENT, so as Calendar, go as CalendarGrid, _o as Card, Hl as CharacterCount, Lr as Checkbox, Co as CodeInput, Br as ColumnPicker, wo as Combobox, zt as CommandPalette, Ul as ControlSizeProvider, Do as CopyButton, Qa as DEFAULT_CALENDAR_LABELS, Ft as DEFAULT_COMMAND_PALETTE_SHORTCUT, Oo as DangerZone, zl as DatePartsInput, Ao as DatePicker, No as DateRangePicker, Ro as DateTimePicker, Vo as DetailPanel, ms as Dialog, hs as DialogActions, Qr as Disclosure, gs as DividerLabel, rt as DonutChart, ys as DropdownMenu, bs as EmptyState, xs as ErrorBoundary, kl as FieldError, Ol as FieldHint, Al as Fieldset, Rr as FilterButton, Ss as FilterDropdown, Dl as FormField, ql as Grid, Jl as GridItem, Kl as Inline, Cs as Kbd, Es as ListItemLink, Ts as LoadingSpinner, Ds as MessageBubble, Fs as MetadataGrid, Ls as MetricCard, Wt as MobileDrawer, Vl as NavTabs, Hs as OAuthButton, Us as OverlineLabel, Ws as PageHeader, Gs as PageSection, Vr as Pagination, qs as PaginationBar, Ys as PasswordInput, Qs as PasswordRequirements, $s as Popover, Bt as PortalContainerContext, ec as ProfileHeader, Wl as ProgressBar, tc as ProseContent, nc as QrCapacityError, Tc as QrCode, it as RadarChart, at as RadialBarChart, Nl as Radio, $a as RadioPill, Ec as ReorderList, Zr as ResourceTable, Dc as SearchInput, cr as SectionHeader, Oc as Select, br as SelectDropdown, kc as SettingRow, Sn as SettingsContext, Sl as SettingsProvider, Ac as SideSheet, Jn as Sidebar, Bl as Skeleton, Sr as Slider, ot as SparkLine, Rc as SplitPaneLayout, Gl as Stack, pt as StackedBarChart, Bc as StatusDot, Vc as StepProgress, Tr as THEME_MENU_EVENT, Ur as Table, Gr as TableBody, Jr as TableCell, Yr as TableEmptyRow, Wr as TableHead, qr as TableHeaderCell, Kr as TableRow, Hc as Tabs, Wc as TextInput, Uc as Textarea, rl as ThemeContext, Or as ThemeMenu, Cr as ThemePreview, El as ThemeProvider, Gc as TimeInput, Kc as Timeline, Fn as ToastProvider, wr as Toggle, tl as Toolbar, el as Tooltip, Mr as TopBar, Jc as TranscriptLine, nl as UploadDropzone, _t as VerticalBarChart, nn as accentItems, Ei as addDays, Di as addMinutes, Oi as addMonths, vi as badgeColors, xi as calendarDateFromParts, $ as calendarDateParts, Y as cn, _a as createCalendarDateMath, Yt as darkThemes, Fi as dateAtMinutes, Xs as defaultPasswordRequirements, Mi as differenceInDays, wc as encodeQrCode, ua as expandAvailabilityRules, tn as fontOptions, ol as formatDateLong, al as formatDateShort, $i as formatRangeTitle, sl as formatRelative, Yi as formatTime, Li as formatTimeOfDay, Xi as formatTimeRange, zi as fromDateKey, la as getActiveResourceIds, Gi as getViewRange, Ui as getVisibleDays, yt as handleAppShellNavigate, ga as isAllDayLike, vt as isAppShellPathActive, qt as isLightTheme, ji as isSameDay, Hi as isTimeGridView, An as isTone, ia as layoutOverlaps, Jt as lightThemes, Lt as matchesCommandPaletteShortcut, Zs as meetsPasswordRequirements, Ni as minutesOfDay, bt as navigateToPath, It as openCommandPalette, Er as openThemeMenu, Ii as parseTime, ea as rangesOverlap, On as semanticTones, Ki as shiftDate, Vi as snapDate, Bi as snapMinutes, Hr as sortRows, Ti as startOfDay, Ai as startOfMonth, ki as startOfWeek, en as themeDefaults, Gt as themeItems, Ri as toDateKey, Mn as toneClasses, jn as toneColor, kn as tones, yn as useAnchoredPopup, Zn as useApplyTheme, $n as useControlSize, xn as useDismiss, Ct as useFocusTrap, lr as usePopover, Vt as usePortalContainer, Cn as useSettings, il as useTheme, Pn as useToast };
