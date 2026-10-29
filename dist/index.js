import { Component as e, Fragment as t, cloneElement as n, createContext as r, createElement as i, forwardRef as a, isValidElement as o, useCallback as s, useContext as c, useEffect as l, useId as u, useImperativeHandle as d, useLayoutEffect as f, useMemo as p, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { Accessibility as y, AlertTriangle as b, ArrowDown as x, ArrowLeft as S, ArrowUp as C, BookOpen as w, Calendar as T, Check as E, CheckCircle2 as D, ChevronDown as O, ChevronLeft as k, ChevronRight as A, ChevronsUpDown as j, Columns3 as M, Eye as N, EyeOff as P, Inbox as F, Info as I, Loader2 as L, LogOut as R, Menu as ee, Minus as te, Monitor as ne, Moon as re, Palette as z, PanelLeft as ie, PanelLeftDashed as ae, Search as B, Settings as oe, Sun as se, UploadCloud as ce, X as V, XCircle as le, Zap as ue } from "lucide-react";
import { createPortal as H } from "react-dom";
//#region src/lib/cn.ts
function U(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = U(n);
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
]), W = new Set([
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
]), fe = new Set([
	"text-center",
	"text-left",
	"text-right"
]), pe = new Set(["lowercase", "uppercase"]), me = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), he = {
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
}, ge = {
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
}, _e = {
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
}, ve = {
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
}, ye = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function G(...e) {
	return be(U(e));
}
function be(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = xe(r);
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
			r && r.keys.size > 0 && Ae(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function xe(e) {
	let t = Se(e), n = t.pop() ?? e, r = n.startsWith("!"), i = Ce(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = we(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function Se(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function Ce(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function we(e) {
	let t = Te(e);
	if (t) return [...he[t]];
	let n = Ee(e);
	if (n) return [...ge[n]];
	let r = De(e);
	if (r) return [..._e[r]];
	if (de.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (ye.has(e)) return ["border-style"];
	let i = Oe(e);
	return i ? [...ve[i]] : e === "rounded" || e.startsWith("rounded-") ? ["border-radius"] : e.startsWith("bg-") ? ["background"] : W.has(e) ? ["font-size"] : fe.has(e) ? ["text-align"] : pe.has(e) ? ["text-transform"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : me.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" ? ["flex-direction"] : e === "flex-wrap" ? ["flex-wrap"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-") ? ["gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : [];
}
function Te(e) {
	return ke(e, he);
}
function Ee(e) {
	return ke(e, ge);
}
function De(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function Oe(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function ke(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function Ae(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/components/charts/chartUtils.ts
var je = {
	"text-accent": "var(--accent)",
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-red": "var(--red)",
	"text-yellow": "var(--yellow)"
};
function Me(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function Ne(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Pe(e) {
	return e ? je[e] ?? e : "var(--accent)";
}
function Fe(e, t) {
	if (e <= 0 || t <= 0) return [];
	if (e === 1 || t === 1) return [0];
	let n = Math.min(e, Math.max(2, Math.floor(t))), r = (e - 1) / (n - 1), i = /* @__PURE__ */ new Set();
	for (let e = 0; e < n; e += 1) i.add(Math.round(e * r));
	return i.add(e - 1), Array.from(i).sort((e, t) => e - t);
}
function K(e) {
	return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function Ie(e, t) {
	let n = String(e ?? "");
	return t === void 0 || t <= 0 || n.length <= t ? n : t <= 3 ? n.slice(0, t) : `${n.slice(0, t - 3)}...`;
}
function Le(e, t = 10) {
	let n = 0;
	for (let r of e) r === " " ? n += t * .32 : /[A-Z0-9]/.test(r) ? n += t * .62 : /[il.,:;|'`]/.test(r) ? n += t * .28 : /[MW@#%&]/.test(r) ? n += t * .82 : n += t * .54;
	return Math.ceil(n);
}
function q(e, { maxWidth: t = 220, minWidth: n = 72, paddingX: r = 20 } = {}) {
	return Me(e.reduce((e, t) => Math.max(e, Le(t, 11)), 0) + r, n, t);
}
function Re(e, t, { boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Math.max(1, Math.min(s, r - a * 2)), l = Math.max(1, Math.min(i, n - a * 2)), u = Math.max(a, r - c - a), d = Math.max(a, n - l - a), f = Me(e - c / 2, a, u), p = t - l - o, m = p >= a ? "above" : "below";
	return {
		height: l,
		placement: m,
		width: c,
		x: f,
		y: m === "above" ? p : Me(t + o, a, d)
	};
}
function ze({ anchorX: e, anchorY: t, boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Re(e, t, {
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
var J = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
}, Be = 600;
function Ve(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function He({ data: e, height: t = 240, minValue: n, maxValue: r, startAtZero: i = !1, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 5, ariaLabel: c = "Area chart", className: l }) {
	let d = u(), f = m(null), [p, y] = h(null), b = Math.max(J.top + J.bottom + 1, t), x = Be - J.left - J.right, S = Math.max(1, b - J.top - J.bottom), C = e.length > 0, w = e[0]?.value ?? 0, T = e[0]?.value ?? 0;
	for (let t of e) t.value < w && (w = t.value), t.value > T && (T = t.value);
	let E = n ?? w, D = r ?? T;
	if (i && n === void 0 && w >= 0 && (E = 0), E === D) {
		if (i || n !== void 0 || r !== void 0) {
			let e = Ve(T);
			n === void 0 && (E = i && w >= 0 ? 0 : w >= 0 ? Math.max(0, w - e) : w - e), r === void 0 && (D = T + e);
		}
		E === D && (D = E + 1);
	}
	let O = D - E, k = a ?? Ne, A = o ?? a ?? ((e) => e.toLocaleString());
	function j(t) {
		return J.left + t / Math.max(e.length - 1, 1) * x;
	}
	function M(e) {
		return J.top + S - (e - E) / O * S;
	}
	let N = e.map((e, t) => `${j(t)},${M(e.value)}`).join(" "), P = C ? [
		`${j(0)},${J.top + S}`,
		...e.map((e, t) => `${j(t)},${M(e.value)}`),
		`${j(e.length - 1)},${J.top + S}`
	].join(" ") : "", F = Fe(e.length, s);
	function I(t) {
		let n = f.current;
		if (!n || e.length === 0) return;
		let r = n.getBoundingClientRect();
		if (r.width <= 0) return;
		let i = ((t.clientX - r.left) / r.width * Be - J.left) / x, a = Math.round(i * (e.length - 1)), o = Math.max(0, Math.min(e.length - 1, a));
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
		viewBox: `0 0 ${Be} ${b}`,
		onPointerMove: I,
		onPointerLeave: R,
		className: G("select-none", l),
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
				x: J.left - 8,
				y: J.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(D)
			}),
			/* @__PURE__ */ _("text", {
				x: J.left - 8,
				y: J.top + S,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(E)
			}),
			/* @__PURE__ */ _("line", {
				x1: J.left,
				y1: J.top + S,
				x2: J.left + x,
				y2: J.top + S,
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
					y1: J.top,
					x2: p.x,
					y2: J.top + S,
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
					let n = t.date, r = A(t.value), i = Re(p.x, p.y, {
						boundsHeight: b,
						boundsWidth: Be,
						height: 28,
						offset: 10,
						width: q([n, r], {
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
var Ue = [
	1,
	.85,
	.7,
	.55,
	.45
], We = 600;
function Ge({ data: e, height: t, maxValue: n, valueFormatter: r, labelFormatter: i, maxLabelLength: a, labelWidth: o = 160, valueWidth: s = 60, barHeight: c = 28, gap: l = 10, ariaLabel: u = "Horizontal bar chart", className: d }) {
	let [f, p] = h(null), m = e.length, g = Math.max(1, c), y = Math.max(0, l), b = m > 0 ? m * g + Math.max(0, m - 1) * y : g, x = Math.max(1, t ?? b), S = t === void 0 ? 1 : x / b, C = g * S, w = y * S, T = Math.min(3, C / 3), E = Math.max(0, C - T * 2), D = n === void 0 ? Math.max(...e.map((e) => K(e.value)), 1) : Math.max(K(n), 1), O = Math.max(0, o), k = Math.max(0, s), A = Math.max(0, We - O - k), j = r ?? ((e) => e.toLocaleString());
	return /* @__PURE__ */ _("svg", {
		width: "100%",
		viewBox: `0 0 ${We} ${x}`,
		className: G("select-none", d),
		role: "img",
		"aria-label": u,
		children: e.map((e, t) => {
			let n = t * (C + w), r = D > 0 ? Me(K(e.value), 0, D) / D * A : 0, o = f === t, s = i?.(e.label, e, t) ?? e.label, c = Ie(s, a), l = c !== s, u = j(e.value);
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
						width: We,
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
						opacity: o ? 1 : Ue[t % Ue.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ _("text", {
						x: We,
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
function Ke(e, t) {
	let n = e.reduce((e, t) => e + K(t.value), 0), r = 0;
	return e.map((e) => {
		let i = K(e.value), a = n > 0 ? i / n * t : 0, o = t - a, s = r / t * 360 - 90, c = s + a / t * 180, l = n > 0 ? i / n * 100 : 0;
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
function qe({ segments: e, size: t = 180, strokeWidth: n = 28, valueFormatter: r, percentageFormatter: i, showLegend: a = !0, ariaLabel: o = "Donut chart", className: s }) {
	let [c, l] = h(null), u = e.reduce((e, t) => e + K(t.value), 0), d = Math.max(1, t), f = Math.max(1, Math.min(n, d - 1)), p = Math.max(.5, (d - f) / 2), m = Ke(e, 2 * Math.PI * p), g = r ?? ((e) => e.toLocaleString()), y = i ?? ((e) => `${e.toFixed(1)}%`), b = d + 12, x = b / 2;
	return /* @__PURE__ */ v("div", {
		className: G("flex flex-col items-center gap-4", s),
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
						"aria-label": `${e.segment.name}: ${g(K(e.segment.value))} (${y(e.percentage)})`,
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					m.map((e, t) => {
						let n = c === t, r = e.midAngle * Math.PI / 180, i = n ? Math.cos(r) * 6 : 0, a = n ? Math.sin(r) * 6 : 0;
						return /* @__PURE__ */ _("circle", {
							cx: x,
							cy: x,
							r: p,
							fill: "none",
							stroke: Pe(e.segment.color),
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
						children: g(c === null ? u : K(m[c].segment.value))
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
				let e = m[c], t = e.midAngle * Math.PI / 180, n = p + f / 2 + 20, r = x + Math.cos(t) * n, i = x + Math.sin(t) * n, a = Pe(e.segment.color), o = g(K(e.segment.value)), s = y(e.percentage);
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: ze({
						anchorX: r,
						anchorY: i,
						boundsHeight: b,
						boundsWidth: b,
						height: 30,
						margin: 4,
						offset: 8,
						width: q([`${e.segment.name} ${o} ${s}`], {
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
				className: G("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", c !== null && c !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ _("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: Pe(e.color) }
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ _("span", {
						className: "text-text-primary text-xs font-semibold",
						children: g(K(e.value))
					})
				]
			}, e.name))
		})]
	});
}
//#endregion
//#region src/components/charts/RadarChart.tsx
function Je({ data: e, maxValue: t, size: n = 240, rings: r = 4, labelOffset: i = 18, labelFormatter: a, maxLabelLength: o, valueFormatter: s, ariaLabel: c = "Radar chart", className: l }) {
	let [u, d] = h(null), f = Math.max(80, n), p = Math.max(K(t ?? 0), ...e.map((e) => K(e.value)), 1), m = f / 2, g = Math.max(1, m - Math.max(0, i) - 12), y = e.length > 0 ? 2 * Math.PI / e.length : 0, b = Math.max(1, Math.floor(r)), x = s ?? String, S = e.map((e, t) => {
		let n = a?.(e.label, e, t) ?? e.label, r = Ie(n, o);
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
		let n = Me(K(e.value), 0, p) / p * g;
		return C(t * y, n);
	}), T = w.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ v("div", {
		className: G("relative flex flex-col items-center", l),
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
						className: G("text-text-secondary text-xs whitespace-nowrap"),
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
function Ye({ segments: e, size: t = 200, strokeWidth: n = 14, gap: r = 6, valueFormatter: i, percentageFormatter: a, showLegend: o = !0, ariaLabel: s = "Radial bar chart", className: c }) {
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
		let t = K(e.max);
		return t <= 0 ? 0 : Me(K(e.value) / t, 0, 1);
	}
	function A(e) {
		return k(e) * 100;
	}
	return /* @__PURE__ */ v("div", {
		className: G("flex flex-col items-center gap-4", c),
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
					let r = 2 * Math.PI * n, i = r * k(e), a = r - i, o = Pe(e.color), s = g === t, c = A(e);
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
						fill: "rgba(0,0,0,0)",
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
				let n = A(t), r = Pe(t.color), i = T(n), a = `${w(t.value)}/${w(t.max)}`;
				return /* @__PURE__ */ _("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: ze({
						anchorX: d.x,
						anchorY: d.y,
						boundsHeight: y,
						boundsWidth: y,
						height: 30,
						margin: 4,
						offset: 8,
						width: q([`${t.label} ${i} ${a}`], {
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
					className: G("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", g !== null && g !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ _("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: Pe(e.color) }
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
function Xe({ data: e, width: t = 60, height: n = 20, minValue: r, maxValue: i, strokeWidth: a = 1.5, padding: o = 1, color: s = "var(--accent)", area: c = !1, areaOpacity: l = .15, ariaLabel: u = "Sparkline chart", className: d }) {
	if (e.length < 2) return null;
	let f = Math.max(1, t), p = Math.max(1, n), m = Math.max(0, Math.min(o, p / 2, f / 2)), h = r ?? Math.min(...e), g = i ?? Math.max(...e), y = Math.min(h, g), b = Math.max(h, g), x = b - y, S = Math.max(1, f - m * 2), C = Math.max(1, p - m * 2), w = e.map((t, n) => ({
		x: m + n / (e.length - 1) * S,
		y: x === 0 ? p / 2 : m + C - (Me(t, y, b) - y) / x * C
	})), T = w.map(({ x: e, y: t }) => `${e},${t}`).join(" "), E = w.length > 0 ? [
		`${w[0].x},${p - m}`,
		...w.map(({ x: e, y: t }) => `${e},${t}`),
		`${w[w.length - 1].x},${p - m}`
	].join(" ") : "";
	return /* @__PURE__ */ v("svg", {
		width: f,
		height: p,
		viewBox: `0 0 ${f} ${p}`,
		className: G("inline-block", d),
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
var Y = {
	top: 20,
	right: 12,
	bottom: 30,
	left: 48
}, Ze = 600, Qe = 4;
function $e(e) {
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
function et(e, t) {
	let n = e[t];
	if (typeof n == "number") return Number.isFinite(n) ? n : 0;
	if (typeof n == "string") {
		let e = Number(n);
		return Number.isFinite(e) ? e : 0;
	}
	return 0;
}
function tt(e, t) {
	return t.reduce((t, n) => t + Math.max(0, et(e, n.key)), 0);
}
function nt(e, t, n, r, i) {
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
function rt({ data: e, segments: t, height: n = 220, ariaLabel: r = "Stacked bar chart", tooltipRows: i, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 6, barGap: c, minBarWidth: l = 1, className: u }) {
	let [d, f] = h(null), p = Math.max(Y.top + Y.bottom + 1, n), m = Ze - Y.left - Y.right, y = Math.max(1, p - Y.top - Y.bottom), b = e.reduce((e, n) => Math.max(e, tt(n, t)), 1), x = Math.ceil(b / 2), S = x > 0 && x < b, C = c ?? (e.length > 60 ? 2 : e.length > 30 ? 3 : 6), w = Math.max(1, l), T = e.length > 1 ? Math.max(0, (m - e.length * w) / Math.max(e.length - 1, 1)) : 0, E = e.length > 1 ? Math.min(Math.max(0, C), T) : 0, D = e.length > 0 ? (m - E * Math.max(e.length - 1, 0)) / e.length : 0, O = new Set(Fe(e.length, s)), k = d === null ? null : e[d], A = a ?? Ne, j = o ?? ((e) => e.toLocaleString());
	function M(e) {
		return Y.left + e * (D + E);
	}
	function N(e) {
		return e / b * y;
	}
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${Ze} ${p}`,
		className: G("select-none", u),
		role: "img",
		"aria-label": r,
		children: [
			/* @__PURE__ */ _("text", {
				x: Y.left - 8,
				y: Y.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(b)
			}),
			S && /* @__PURE__ */ _("text", {
				x: Y.left - 8,
				y: Y.top + y / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(x)
			}),
			/* @__PURE__ */ _("text", {
				x: Y.left - 8,
				y: Y.top + y,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: Y.left,
				y1: Y.top + y,
				x2: Y.left + m,
				y2: Y.top + y,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: Y.left,
				y1: Y.top + y / 2,
				x2: Y.left + m,
				y2: Y.top + y / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, n) => {
				let r = M(n), i = d === n, a = 0, o = t.map((t) => ({
					segment: t,
					value: Math.max(0, et(e, t.key))
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
					"aria-label": `${$e(e.date)}: ${j(tt(e, t))}`,
					children: [
						/* @__PURE__ */ _("rect", {
							x: r,
							y: Y.top,
							width: D,
							height: y,
							fill: "transparent"
						}),
						o.map(({ segment: e, value: t }, n) => {
							let s = N(t), c = Y.top + y - a - s, l = n === o.length - 1;
							return a += s, l ? /* @__PURE__ */ _("path", {
								d: nt(r, c, D, s, Qe),
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
							children: $e(e.date)
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
						value: et(k, e.key)
					})), r = tt(k, t), a = Re(e, Y.top + y - N(r), {
						boundsHeight: p,
						boundsWidth: Ze,
						height: 28 + n.length * 15,
						offset: 8,
						width: q([$e(k.date), ...n.map((e) => `${e.label} ${j(e.value)}`)], {
							maxWidth: 240,
							minWidth: 150
						})
					}), o = a.x + 10, s = a.x + a.width - 10;
					return /* @__PURE__ */ v(g, { children: [
						/* @__PURE__ */ _("line", {
							x1: e,
							y1: Y.top,
							x2: e,
							y2: Y.top + y,
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
							children: $e(k.date)
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
var it = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], X = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
}, at = 600;
function ot({ data: e, height: t = 180, maxValue: n, valueFormatter: r, tooltipValueFormatter: i, labelFormatter: a, maxLabelLength: o, xLabelCount: s = 7, barGap: c = 6, minBarWidth: l = 4, ariaLabel: u = "Vertical bar chart", className: d }) {
	let [f, p] = h(null), m = Math.max(X.top + X.bottom + 1, t), y = at - X.left - X.right, b = Math.max(1, m - X.top - X.bottom), x = n === void 0 ? Math.max(...e.map((e) => K(e.value)), 1) : Math.max(K(n), 1), S = Math.max(0, c), C = Math.max(1, l), w = e.length > 1 ? Math.max(0, (y - e.length * C) / Math.max(e.length - 1, 1)) : 0, T = e.length > 1 ? Math.min(S, w) : 0, E = e.length > 0 ? Math.max(0, (y - T * Math.max(e.length - 1, 0)) / e.length) : 0, D = r ?? Ne, O = i ?? ((e) => e.toLocaleString()), k = new Set(Fe(e.length, s));
	return /* @__PURE__ */ v("svg", {
		width: "100%",
		viewBox: `0 0 ${at} ${m}`,
		className: G("select-none", d),
		role: "img",
		"aria-label": u,
		children: [
			/* @__PURE__ */ _("text", {
				x: X.left - 6,
				y: X.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: D(x)
			}),
			/* @__PURE__ */ _("text", {
				x: X.left - 6,
				y: X.top + b,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ _("line", {
				x1: X.left,
				y1: X.top + b,
				x2: X.left + y,
				y2: X.top + b,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ _("line", {
				x1: X.left,
				y1: X.top + b / 2,
				x2: X.left + y,
				y2: X.top + b / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, t) => {
				let n = X.left + t * (E + T), r = Me(K(e.value), 0, x) / x * b, i = X.top + b - r, s = f === t, c = a?.(e.label, e, t) ?? e.label, l = Ie(c, o), u = l !== c, d = O(e.value);
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
							y: X.top,
							width: E,
							height: b,
							fill: "transparent"
						}),
						/* @__PURE__ */ _("rect", {
							x: n,
							y: i,
							width: E,
							height: r,
							fill: Pe(e.color),
							rx: 6,
							opacity: s ? 1 : it[t % it.length],
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
							let e = Re(n + E / 2, i, {
								boundsHeight: m,
								boundsWidth: at,
								height: 24,
								offset: 8,
								width: q([c, d], {
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
function st(e, t) {
	if (e.active !== void 0) return e.active;
	if (!t) return !1;
	if (e.end ?? e.path === "/") return t === e.path;
	let n = e.path.endsWith("/") ? e.path : `${e.path}/`;
	return t === e.path || t.startsWith(n);
}
function ct(e, t, n, r) {
	let i = e.currentTarget.getAttribute("target");
	e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || i && i !== "_self" || (n && (e.preventDefault(), n(t)), r?.());
}
function lt(e, t) {
	if (t) {
		t(e);
		return;
	}
	typeof window < "u" && window.location.assign(e);
}
//#endregion
//#region src/components/app-shell/BottomNav.tsx
function ut({ items: e, currentPath: t, onNavigate: n, className: r }) {
	return e.length === 0 ? null : /* @__PURE__ */ _("nav", {
		className: G("bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ _("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = st(e, t);
				return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
					href: e.path,
					onClick: (t) => ct(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					className: G("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
					children: [/* @__PURE__ */ _(e.icon, { className: "h-5 w-5" }), /* @__PURE__ */ _("span", {
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
var dt = "a[href], button:not([disabled]), input:not([disabled]):not([type=\"hidden\"]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function ft(e, t, { initialFocusRef: n, returnFocusRef: r } = {}) {
	l(() => {
		let i = e.current;
		if (!t || !i) return;
		let a = i.ownerDocument, o = a.activeElement, s = r?.current, c = () => {
			let e = Array.from(i.querySelectorAll(dt)).filter((e) => e.tabIndex >= 0 && !e.matches(":disabled") && !e.closest("[hidden], [inert]") && e.getClientRects().length > 0);
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
//#region src/components/app-shell/commandPaletteEvents.ts
var pt = "open-command-palette", mt = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function ht(e = pt) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
function gt(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
//#region src/components/app-shell/CommandPalette.tsx
function _t(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function vt({ items: e, eventName: t = pt, shortcut: n = mt, placeholder: r = "Search pages...", emptyLabel: i = "No results found", onNavigate: a, onSelect: o }) {
	let [c, d] = h(!1), [f, p] = h(""), [g, y] = h(0), b = m(null), x = m(null), S = u();
	ft(x, c);
	let C = e.filter((e) => _t(e, f)), w = s(() => {
		d(!0), p(""), y(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	l(() => {
		let e = (e) => {
			gt(e, n) && (e.preventDefault(), c ? d(!1) : w());
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
		o?.(e), lt(e.path, a), d(!1);
	}
	function D(e) {
		e.key === "ArrowDown" ? (e.preventDefault(), y((e) => Math.min(e + 1, C.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), y((e) => Math.max(e - 1, 0))) : e.key === "Enter" && C[g] ? E(C[g]) : e.key === "Escape" && d(!1);
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
					/* @__PURE__ */ _(B, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
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
					className: G("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === g ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
//#region src/components/app-shell/MobileDrawer.tsx
function yt({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ _(g, { children: e.logo }) : /* @__PURE__ */ v("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ _(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ _("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function bt({ open: e, onClose: t, items: n, topBarNavItems: r = [], topBarNavLabel: i = "Primary", brand: a, currentPath: o, onNavigate: s, headerActions: c, className: u }) {
	let d = m(null);
	if (ft(d, e), l(() => {
		if (!e) return;
		document.body.style.overflow = "hidden";
		let n = (e) => {
			e.key === "Escape" && t();
		}, r = d.current?.ownerDocument ?? document;
		return r.addEventListener("keydown", n), () => {
			document.body.style.overflow = "", r.removeEventListener("keydown", n);
		};
	}, [e, t]), !e) return null;
	let f = r.length > 0;
	return /* @__PURE__ */ v("div", {
		className: "fixed inset-0 z-40 md:hidden",
		children: [/* @__PURE__ */ _("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: t
		}), /* @__PURE__ */ v("div", {
			ref: d,
			className: G("bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", u),
			children: [
				/* @__PURE__ */ v("div", {
					className: "border-border flex h-11 items-center justify-between border-b px-4",
					children: [/* @__PURE__ */ _(yt, { brand: a }), /* @__PURE__ */ _("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ _(V, { className: "h-4 w-4" })
					})]
				}),
				c && /* @__PURE__ */ _("div", {
					className: "border-border border-b px-4 py-2",
					children: c
				}),
				/* @__PURE__ */ v("nav", {
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2",
					children: [f && /* @__PURE__ */ v("div", {
						className: "border-border mb-2 border-b pb-2",
						children: [/* @__PURE__ */ _("div", {
							className: "text-text-tertiary px-3 py-1 text-2xs font-medium uppercase",
							children: i
						}), /* @__PURE__ */ _("ul", {
							className: "space-y-0.5",
							"aria-label": i,
							children: r.map((e) => {
								let n = e.icon, r = st(e, o), i = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
								return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
									href: e.href ?? e.path,
									target: e.target,
									rel: i,
									onClick: (n) => {
										if (e.reloadDocument) {
											t();
											return;
										}
										ct(n, e.path, s, t);
									},
									"aria-current": r ? "page" : void 0,
									className: G("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", r ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
							let n = st(e, o);
							return /* @__PURE__ */ _("li", { children: /* @__PURE__ */ v("a", {
								href: e.path,
								onClick: (n) => ct(n, e.path, s, t),
								"aria-current": n ? "page" : void 0,
								className: G("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
	});
}
//#endregion
//#region src/config/theme.ts
var xt = [
	{
		value: "dark",
		label: "Dark",
		icon: re,
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
		icon: z,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: ne,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: ue,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: ue,
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
], St = new Set([
	"light",
	"lightInverted",
	"cyberBrutalLight",
	"hashiTheme"
]);
function Ct(e) {
	return St.has(e);
}
var wt = xt.filter((e) => Ct(e.value)), Tt = xt.filter((e) => !Ct(e.value)), Et = {
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
}, Dt = {
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
}, Ot = {
	dark: Et,
	light: Et,
	lightInverted: Et,
	monokai: Et,
	solarized: Et,
	cyberBrutalDark: Dt,
	cyberBrutalLight: Dt,
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
}, kt = [
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
], At = [
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
];
//#endregion
//#region src/hooks/useDismiss.ts
function jt(e, t, n, r, i) {
	let a = i?.outsideClick ?? !0;
	l(() => {
		if (!e) return;
		let i = (e) => {
			let i = e.target;
			r?.some((e) => e.current?.contains(i)) || n.every((e) => e.current && !e.current.contains(i)) && t();
		}, o = (e) => {
			e.key === "Escape" && t();
		};
		return a && document.addEventListener("mousedown", i), document.addEventListener("keydown", o), () => {
			a && document.removeEventListener("mousedown", i), document.removeEventListener("keydown", o);
		};
	}, [
		e,
		t,
		n,
		r,
		a
	]);
}
//#endregion
//#region src/providers/SettingsContext.ts
var Mt = r({
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
function Nt() {
	return c(Mt);
}
//#endregion
//#region src/components/ui/Avatar.tsx
var Pt = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function Ft(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function It(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function Lt({ name: e, src: t, size: n = "md", className: r }) {
	return /* @__PURE__ */ _("div", {
		className: G("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", Pt[n], r),
		style: { backgroundColor: t ? void 0 : It(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ _("img", {
			src: t,
			alt: e,
			className: "h-full w-full rounded-full object-cover"
		}) : Ft(e)
	});
}
//#endregion
//#region src/components/ui/Toast.tsx
var Rt = r({ toast: () => {} });
function zt() {
	return c(Rt);
}
function Bt({ children: e }) {
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
	return /* @__PURE__ */ v(Rt.Provider, {
		value: { toast: i },
		children: [e, /* @__PURE__ */ _("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ _(Wt, {
				toast: e,
				onDismiss: () => a(e.id)
			}, e.id))
		})]
	});
}
var Vt = {
	success: D,
	error: le,
	warning: b,
	info: I
}, Ht = {
	success: "bg-green",
	error: "bg-red",
	warning: "bg-yellow",
	info: "bg-blue"
}, Ut = {
	success: "text-green",
	error: "text-red",
	warning: "text-yellow",
	info: "text-blue"
};
function Wt({ toast: e, onDismiss: t }) {
	let [n, r] = h(100), i = Vt[e.type], a = e.type === "error" || e.type === "warning", o = m(t);
	return l(() => {
		o.current = t;
	}, [t]), l(() => {
		let t = Date.now(), n = setInterval(() => {
			let i = Date.now() - t, a = Math.max(0, 100 - i / e.duration * 100);
			r(a), a <= 0 && (o.current(), clearInterval(n));
		}, 50);
		return () => clearInterval(n);
	}, [e.duration]), /* @__PURE__ */ v("div", {
		role: a ? "alert" : "status",
		"aria-live": a ? "assertive" : "polite",
		className: "bg-bg-secondary border-border animate-slide-down pointer-events-auto relative w-80 overflow-hidden rounded-lg border shadow-lg",
		children: [
			/* @__PURE__ */ _("div", { className: G("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", Ht[e.type]) }),
			/* @__PURE__ */ v("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ _(i, { className: G("h-4 w-4 shrink-0", Ut[e.type]) }),
					/* @__PURE__ */ _("p", {
						className: "text-text-primary flex-1 text-xs",
						children: e.message
					}),
					/* @__PURE__ */ _("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ _(V, { className: "h-3 w-3" })
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
var Gt = 140, Kt = 400, qt = 48;
function Jt({ item: e, collapsed: t, currentPath: n, onNavigate: r }) {
	let i = st(e, n);
	return /* @__PURE__ */ v("a", {
		href: e.path,
		onClick: (t) => ct(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: G("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function Yt({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ _("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ v("div", {
		className: G("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ _(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ _("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ _("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function Xt(e) {
	return e.role ?? e.email;
}
function Zt({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: i, signOutPath: a, signOutLabel: o = "Sign out", onNavigate: c }) {
	let [l, u] = h(!1), [d, f] = h(() => Math.min(n, Math.max(t.length - 1, 0))), [p, y] = h({
		bottom: 0,
		left: 0
	}), b = m(null), x = m(null);
	jt(l, s(() => u(!1), []), [x], [b]);
	let S = t[d] ?? t[0], C = !!(i || a);
	function w() {
		if (!b.current) return;
		let e = b.current.getBoundingClientRect();
		y({
			bottom: window.innerHeight - e.bottom,
			left: e.right + 6
		}), u(!l);
	}
	function T(e, t) {
		f(t), r?.(e, t), u(!1);
	}
	function D() {
		u(!1), i ? i() : a && lt(a, c);
	}
	return S ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		ref: b,
		onClick: w,
		className: G("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? S.name : void 0,
		children: [/* @__PURE__ */ _(Lt, {
			name: S.name,
			src: S.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ _("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: S.name
			}), Xt(S) && /* @__PURE__ */ _("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: Xt(S)
			})]
		}), /* @__PURE__ */ _(j, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && H(/* @__PURE__ */ v("div", {
		ref: x,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-56 rounded-md border py-1 shadow-lg",
		style: {
			bottom: p.bottom,
			left: p.left
		},
		children: [
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accounts"
			}),
			t.map((e, t) => /* @__PURE__ */ v("button", {
				onClick: () => T(e, t),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-8 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(Lt, {
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
					t === d && /* @__PURE__ */ _(E, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, `${e.name}-${e.email ?? t}`)),
			C && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				onClick: D,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(R, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ _("span", { children: o })]
			})] })
		]
	}), document.body)] }) : null;
}
function Qt({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: i }) {
	let [a, o] = h(!1), [c, l] = h({
		bottom: 0,
		left: 0
	}), u = m(null), d = m(null), { accentColor: f, setAccentColor: p, reducedMotion: b, setReducedMotion: x, colorMode: S, setColorMode: C } = Nt(), { toast: w } = zt(), T = !!(t || r);
	jt(a, s(() => o(!1), []), [d], [u]);
	function D() {
		if (!u.current) return;
		let e = u.current.getBoundingClientRect();
		l({
			bottom: window.innerHeight - e.bottom,
			left: e.right + 6
		}), o(!a);
	}
	function O() {
		o(!1), r ? r() : t && lt(t, i);
	}
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		ref: u,
		onClick: D,
		className: G("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", a ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ _(oe, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ _("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), a && H(/* @__PURE__ */ v("div", {
		ref: d,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-64 rounded-md border py-1 shadow-lg",
		style: {
			bottom: c.bottom,
			left: c.left
		},
		children: [
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Mode"
			}),
			[
				{
					value: "dark",
					label: "Dark",
					Icon: re
				},
				{
					value: "light",
					label: "Light",
					Icon: se
				},
				{
					value: "system",
					label: "System",
					Icon: ne
				}
			].map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ v("button", {
				onClick: () => C(e),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(n, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ _("span", {
						className: "flex-1 text-left",
						children: t
					}),
					S === e && /* @__PURE__ */ _(E, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, e)),
			/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accent"
			}),
			/* @__PURE__ */ _("div", {
				className: "flex flex-wrap gap-1.5 px-3 pb-2",
				children: At.map((e) => /* @__PURE__ */ _("button", {
					onClick: () => p(e.value),
					className: G("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", f === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
					style: {
						backgroundColor: e.color,
						...f === e.value ? { "--utility-ring-color": e.color } : {}
					},
					title: e.value.charAt(0).toUpperCase() + e.value.slice(1)
				}, e.value))
			}),
			/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ v("button", {
				onClick: () => {
					x(!b), w("info", b ? "Animations enabled" : "Animations disabled");
				},
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(y, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ _("span", {
						className: "flex-1 text-left",
						children: "Reduced Motion"
					}),
					b && /* @__PURE__ */ _(E, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}),
			T && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				onClick: O,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(oe, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ _("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), document.body)] });
}
function $t({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: i, onSignOut: a, signOutPath: o, signOutLabel: c, settingsPath: l, settingsLabel: u, onOpenSettings: d, currentPath: f, onNavigate: p, headerActions: g, className: y }) {
	let { sidebarCollapsed: b, sidebarWidth: x, setSidebarWidth: S } = Nt(), [C, w] = h(/* @__PURE__ */ new Set()), T = m(null), E = m(!1), D = s((e) => {
		if (b) return;
		e.preventDefault(), E.current = !0, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!E.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			S(Math.max(Gt, Math.min(n, Kt)));
		}, n = () => {
			E.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
		};
		document.addEventListener("mousemove", t), document.addEventListener("mouseup", n);
	}, [b, S]);
	function k(e) {
		w((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	return /* @__PURE__ */ v("aside", {
		ref: T,
		className: G("bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", "transition-[width] duration-[200ms] ease-out", "border-border", y),
		style: { width: b ? qt : x },
		children: [
			!b && /* @__PURE__ */ _("div", {
				onMouseDown: D,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ _("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ _(Yt, {
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
							onClick: () => k(e.title),
							className: "text-2xs-f text-text-tertiary hover:text-text-secondary font-label flex w-full cursor-pointer items-center gap-1 px-2 text-left font-semibold tracking-wider uppercase",
							style: {
								paddingTop: "0.35em",
								paddingBottom: "0.35em"
							},
							children: [/* @__PURE__ */ _("span", {
								className: "min-w-0 flex-1",
								children: e.title
							}), /* @__PURE__ */ _(O, { className: G("h-3 w-3 shrink-0 transition-transform", n && "-rotate-90") })]
						}), (!n || b) && /* @__PURE__ */ _("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _(Jt, {
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
				children: [/* @__PURE__ */ _(Qt, {
					collapsed: b,
					settingsPath: l,
					settingsLabel: u,
					onOpenSettings: d,
					onNavigate: p
				}), n.length > 0 && /* @__PURE__ */ _("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ _(Zt, {
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
function en(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function tn({ homeLabel: e = "Dashboard", labels: t = {}, parents: n = {}, currentPath: r = "/", onNavigate: i, className: a }) {
	let o = r.split("?")[0].split("/").filter(Boolean), s = [{
		label: e,
		path: "/"
	}, ...o.map((e, r) => {
		let i = o[r - 1];
		return {
			label: t[e] || n[i] || en(e),
			path: "/" + o.slice(0, r + 1).join("/")
		};
	})];
	return /* @__PURE__ */ _("nav", {
		"aria-label": "Breadcrumb",
		className: G("font-navigation flex items-center gap-1 text-xs", a),
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
						onClick: (t) => ct(t, e.path, i),
						className: G("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
						children: e.label
					})]
				}, e.path);
			})
		})
	});
}
//#endregion
//#region src/hooks/useApplyTheme.ts
function nn() {
	let { setPreferredDarkTheme: e, setPreferredLightTheme: t, setColorMode: n } = Nt();
	return s((r) => {
		Ct(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/providers/ControlSizeContext.ts
var rn = r("compact");
function an(e) {
	let t = c(rn);
	return e ?? t;
}
//#endregion
//#region src/components/ui/Button.tsx
var on = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover"
}, sn = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, cn = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, ln = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, un = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, dn = {
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
}, fn = a(({ variant: e = "secondary", size: t = "md", controlSize: n, loading: r, icon: i, hideLabel: a, className: o, children: s, disabled: c, ...l }, u) => {
	let d = an(n), f = e === "icon", p = a === !0 ? "sm" : a === !1 ? void 0 : a;
	return /* @__PURE__ */ v("button", {
		ref: u,
		"data-control-size": d,
		"data-variant": e,
		"data-size": t,
		"data-hide-label": p && !f ? "" : void 0,
		disabled: c || r,
		className: G("ui-sized-control inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", on[e], f ? cn[t] : sn[t], p && !f && dn[p]?.[t], o),
		...l,
		children: [
			r && /* @__PURE__ */ _(L, { className: "h-3.5 w-3.5 animate-spin" }),
			i && !r && /* @__PURE__ */ _(i, { className: ln[t] }),
			s && (p ? /* @__PURE__ */ _("span", {
				className: un[p],
				children: s
			}) : s)
		]
	});
});
fn.displayName = "Button";
//#endregion
//#region src/components/ui/SectionHeader.tsx
function pn({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ _(t, {
		className: G("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
//#endregion
//#region src/lib/anchorPlacement.ts
var mn = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
}, hn = [
	"bottom",
	"top",
	"right",
	"left"
];
function gn(e, t, n) {
	switch (n) {
		case "top": return e.top - t.top;
		case "bottom": return t.bottom - e.bottom;
		case "left": return e.left - t.left;
		case "right": return t.right - e.right;
	}
}
function _n(e, t, n, r) {
	return Math.min(Math.max(e, n), r - t);
}
function vn(e, t, { size: { width: n, height: r }, bounds: i, margin: a, gap: o }) {
	let s = i.left + a, c = i.right - a, l = i.top + a, u = i.bottom - a;
	if (n > c - s || r > u - l) return null;
	let d, f;
	return e === "top" || e === "bottom" ? (d = _n((t.left + t.right) / 2 - n / 2, n, s, c), f = e === "bottom" ? t.bottom + o : t.top - o - r) : (d = e === "right" ? t.right + o : t.left - o - n, f = _n((t.top + t.bottom) / 2 - r / 2, r, l, u)), d >= s && d + n <= c && f >= l && f + r <= u ? {
		side: e,
		left: d,
		top: f
	} : null;
}
function yn(e, t, n) {
	if (!t) return null;
	let { bounds: r } = n;
	if (!(t.right > r.left && t.left < r.right && t.bottom > r.top && t.top < r.bottom)) return null;
	let i = e === "auto" ? [...hn].sort((e, n) => gn(t, r, n) - gn(t, r, e)) : [e, mn[e]];
	for (let e of i) {
		let r = vn(e, t, n);
		if (r) return r;
	}
	return null;
}
//#endregion
//#region src/hooks/useDropUp.ts
function bn(e, t, n) {
	let [r, i] = h(!1);
	return f(() => {
		if (!e || !n.current || !t.current) return;
		let r = t.current.getBoundingClientRect(), a = n.current.getBoundingClientRect();
		i(gn(r, {
			left: 0,
			top: 0,
			right: window.innerWidth,
			bottom: window.innerHeight
		}, "bottom") < a.height + 8);
	}, [e]), r;
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function xn({ options: e, value: t, onChange: n, label: r, placeholder: i = "Select...", className: a, size: o = "md" }) {
	let [c, l] = h(!1), [d, f] = h(-1), p = m(null), g = m(null), y = bn(c, p, g), b = u(), x = `${b}-listbox`, S = e.find((e) => e.value === t);
	jt(c, s(() => l(!1), []), [p]);
	function C() {
		if (!c) {
			let n = e.findIndex((e) => e.value === t);
			f(n >= 0 ? n : 0);
		}
		l(!c);
	}
	function w(r) {
		if (!c) {
			if (r.key === "ArrowDown" || r.key === "ArrowUp") {
				r.preventDefault();
				let n = e.findIndex((e) => e.value === t);
				f(n >= 0 ? n : 0), l(!0);
			}
			return;
		}
		switch (r.key) {
			case "ArrowDown":
				r.preventDefault(), f((t) => Math.min(t + 1, e.length - 1));
				break;
			case "ArrowUp":
				r.preventDefault(), f((e) => Math.max(e - 1, 0));
				break;
			case "Enter":
				r.preventDefault(), e[d] && (n(e[d].value), l(!1));
				break;
			case "Escape":
				r.preventDefault(), l(!1);
				break;
		}
	}
	return /* @__PURE__ */ v("div", {
		className: G("flex flex-col gap-1.5", a),
		ref: p,
		children: [r && /* @__PURE__ */ _("span", {
			className: "ui-field-label font-label text-xs font-medium",
			children: r
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: C,
					onKeyDown: w,
					"aria-haspopup": "listbox",
					"aria-expanded": c,
					"aria-controls": c ? x : void 0,
					"aria-activedescendant": c && d >= 0 ? `${b}-option-${d}` : void 0,
					className: G("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", o === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7"),
					children: S ? S.label : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ _(O, { className: G("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", o === "sm" ? "right-1.5" : "right-2", c && "rotate-180") }),
				c && /* @__PURE__ */ _("div", {
					ref: g,
					className: G("bg-bg-tertiary border-border-strong animate-scale-in absolute right-0 left-0 z-[100] overflow-hidden rounded-md border shadow-lg", y ? "bottom-full mb-1" : "top-full mt-1"),
					children: /* @__PURE__ */ _("ul", {
						id: x,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: e.map((e, r) => /* @__PURE__ */ v("li", {
							id: `${b}-option-${r}`,
							role: "option",
							"aria-selected": e.value === t,
							onClick: () => {
								n(e.value), l(!1);
							},
							onMouseEnter: () => f(r),
							className: G("font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs", "transition-colors duration-[100ms]", r === d ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function Sn({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, showValue: s, className: c }) {
	let l = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ v("div", {
		className: G("flex flex-col gap-1.5", c),
		children: [(o || s) && /* @__PURE__ */ v("div", {
			className: "flex items-center justify-between",
			children: [o && /* @__PURE__ */ _("span", {
				className: "ui-field-label font-label text-xs font-medium",
				children: o
			}), s && /* @__PURE__ */ _("span", {
				className: "text-text-primary font-data text-xs",
				children: r
			})]
		}), /* @__PURE__ */ _("input", {
			type: "range",
			min: e,
			max: t,
			step: n,
			value: r,
			onChange: (e) => i(Number(e.target.value)),
			onPointerUp: a ? (e) => a(Number(e.target.value)) : void 0,
			className: "bg-bg-tertiary [&::-webkit-slider-thumb]:bg-accent h-1.5 w-full cursor-pointer appearance-none rounded-md [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[100ms] [&::-webkit-slider-thumb]:hover:scale-110",
			style: { background: `linear-gradient(to right, var(--accent) ${l}%, var(--bg-tertiary) ${l}%)` }
		})]
	});
}
//#endregion
//#region src/components/ui/ThemePreview.tsx
function Cn({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ v("button", {
		type: "button",
		onClick: i,
		className: G("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
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
function wn({ checked: e, onChange: t, disabled: n, label: r, className: i }) {
	return /* @__PURE__ */ v("label", {
		className: G("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", i),
		style: { gap: 10 },
		children: [/* @__PURE__ */ _("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			disabled: n,
			onClick: () => t(!e),
			className: G("relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary ui-switch-off", !n && "cursor-pointer"),
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
					left: e ? 19 : 3,
					boxShadow: "0 0 1px rgba(0,0,0,0.1), 2px 0 4px rgba(0,0,0,0.35)"
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
var Tn = "open-theme-menu";
function En(e = Tn) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
//#endregion
//#region src/components/app-shell/ThemeMenu.tsx
var Dn = [
	{
		value: "dark",
		label: "Dark",
		Icon: re
	},
	{
		value: "light",
		label: "Light",
		Icon: se
	},
	{
		value: "system",
		label: "System",
		Icon: ne
	}
];
function On({ className: e, respondToOpenEvent: t = !0 }) {
	let [n, r] = h(!1), [i, a] = h(!1), [o, c] = h({
		top: 0,
		right: 0
	}), u = m(null), d = m(null), f = Nt(), p = nn(), { toast: y } = zt(), b = s(() => {
		r(!1), a(!1);
	}, []);
	jt(n, b, [d], [u], { outsideClick: !i });
	let x = s(() => {
		if (!u.current) return;
		let e = u.current.getBoundingClientRect();
		c({
			top: e.bottom + 6,
			right: window.innerWidth - e.right
		});
	}, []);
	function S() {
		if (n) {
			b();
			return;
		}
		x(), r(!0);
	}
	l(() => {
		if (!t) return;
		let e = () => {
			x(), r(!0), a(!0);
		};
		return document.addEventListener(Tn, e), () => document.removeEventListener(Tn, e);
	}, [t, x]), l(() => {
		if (n) return window.addEventListener("resize", x), window.addEventListener("scroll", x, !0), () => {
			window.removeEventListener("resize", x), window.removeEventListener("scroll", x, !0);
		};
	}, [n, x]);
	let { colorMode: C, setColorMode: w, preferredDarkTheme: T, preferredLightTheme: E, accentColor: D, setAccentColor: O, fontSize: k, setFontSize: A, uiFont: j, setUiFont: M, headingFont: N, setHeadingFont: P, proseFont: F, setProseFont: I, codeFont: L, setCodeFont: R, borderRadius: ee, setBorderRadius: te, borderWidth: ne, setBorderWidth: re, tracking: ie, setTracking: ae, lineHeight: B, setLineHeight: oe, density: se, setDensity: ce, reducedMotion: V, setReducedMotion: le, saveThemeCustomization: ue, resetThemeCustomization: U, hasThemeOverrides: de, isCustomized: W, resolvedTheme: fe } = f;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("button", {
		ref: u,
		onClick: S,
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": n,
		title: "Theme",
		className: G("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", n ? "text-accent bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", e),
		children: /* @__PURE__ */ _(z, { className: "h-4 w-4" })
	}), n && H(/* @__PURE__ */ _("div", {
		ref: d,
		role: "dialog",
		"aria-label": "Theme settings",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] flex w-80 flex-col overflow-y-auto rounded-md border p-3 shadow-lg",
		style: {
			top: o.top,
			right: o.right,
			maxHeight: "80vh"
		},
		children: /* @__PURE__ */ v("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(pn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ _("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: Dn.map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ v("button", {
						onClick: () => w(e),
						className: G("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", C === e ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ _(n, { className: "h-3.5 w-3.5" }), t]
					}, e))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(pn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: Tt.map((e) => /* @__PURE__ */ _(Cn, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: T === e.value,
						onClick: () => p(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(pn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ _("div", {
					className: "grid grid-cols-2 gap-2",
					children: wt.map((e) => /* @__PURE__ */ _(Cn, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: E === e.value,
						onClick: () => p(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(pn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ _("div", {
					className: "flex flex-wrap gap-1.5",
					children: At.map((e) => /* @__PURE__ */ _("button", {
						onClick: () => O(e.value),
						className: G("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", D === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: e.color,
							...D === e.value ? { "--utility-ring-color": e.color } : {}
						},
						title: e.value.charAt(0).toUpperCase() + e.value.slice(1),
						"aria-label": e.value
					}, e.value))
				})] }),
				/* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _(pn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ v("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ _(xn, {
							label: "UI / Body",
							size: "sm",
							options: kt,
							value: j,
							onChange: (e) => M(e)
						}),
						/* @__PURE__ */ _(xn, {
							label: "Headings",
							size: "sm",
							options: kt,
							value: N,
							onChange: (e) => P(e)
						}),
						/* @__PURE__ */ _(xn, {
							label: "Prose",
							size: "sm",
							options: kt,
							value: F,
							onChange: (e) => I(e)
						}),
						/* @__PURE__ */ _(xn, {
							label: "Code",
							size: "sm",
							options: kt,
							value: L,
							onChange: (e) => R(e)
						})
					]
				})] }),
				/* @__PURE__ */ v("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ _(Sn, {
							label: "Font size",
							min: 11,
							max: 18,
							value: k,
							onChange: A,
							showValue: !0
						}),
						/* @__PURE__ */ _(Sn, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: ee,
							onChange: te,
							showValue: !0
						}),
						/* @__PURE__ */ _(Sn, {
							label: "Border width",
							min: 1,
							max: 3,
							value: ne,
							onChange: re,
							showValue: !0
						}),
						/* @__PURE__ */ _(Sn, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: ie,
							onChange: ae,
							showValue: !0
						}),
						/* @__PURE__ */ _(Sn, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: B,
							onChange: oe,
							showValue: !0
						}),
						/* @__PURE__ */ _(Sn, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: se,
							onChange: ce,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ _(wn, {
					label: "Reduced motion",
					checked: V,
					onChange: le
				}),
				/* @__PURE__ */ v("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ _(fn, {
						variant: "primary",
						size: "sm",
						disabled: !W,
						onClick: () => {
							ue(), y("success", `Saved customization for ${xt.find((e) => e.value === fe)?.label ?? fe}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ _(fn, {
						variant: "secondary",
						size: "sm",
						disabled: !de && !W,
						onClick: () => {
							U(), y("info", "Reset to theme defaults");
						},
						children: "Reset"
					})]
				})
			]
		})
	}), document.body)] });
}
//#endregion
//#region src/components/app-shell/TopBar.tsx
var kn = [
	"dark",
	"light",
	"system"
], An = {
	dark: re,
	light: se,
	system: ne
}, jn = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function Mn({ onMobileMenuToggle: e, breadcrumbs: t, navItems: n = [], navLabel: r = "Primary", showCommandTrigger: i = !0, commandTriggerLabel: a = "Search", commandShortcut: o = mt, currentPath: s, onNavigate: c, onCommandTrigger: l, actions: u }) {
	let { sidebarCollapsed: d, setSidebarCollapsed: f, colorMode: p, setColorMode: m } = Nt();
	function h() {
		m(kn[(kn.indexOf(p) + 1) % kn.length]);
	}
	let y = An[p], b = n.length > 0;
	return /* @__PURE__ */ v("header", {
		className: "border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3",
		style: { height: "var(--topbar-height)" },
		children: [/* @__PURE__ */ v("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [
				/* @__PURE__ */ _("button", {
					onClick: e,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden",
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ _(ee, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _("button", {
					onClick: () => f(!d),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": d ? "Expand sidebar" : "Collapse sidebar",
					children: _(d ? ae : ie, { className: "h-4 w-4" })
				}),
				(b || t !== !1) && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "bg-border hidden h-4 w-px md:block" }), b ? /* @__PURE__ */ _(Nn, {
					items: n,
					label: r,
					currentPath: s,
					onNavigate: c
				}) : t === !1 ? null : /* @__PURE__ */ _(tn, {
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
					onClick: l ?? (() => ht()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ _(B, { className: "h-3 w-3" }),
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
					onClick: h,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded",
					"aria-label": `Color mode: ${jn[p]}. Click to cycle.`,
					title: jn[p],
					children: /* @__PURE__ */ _(y, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ _(On, {})
			]
		})]
	});
}
function Nn({ items: e, label: t, currentPath: n, onNavigate: r }) {
	return /* @__PURE__ */ _("nav", {
		className: "hidden min-w-0 items-center gap-1 md:flex",
		"aria-label": t,
		children: e.map((e) => {
			let t = e.icon, i = st(e, n), a = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
			return /* @__PURE__ */ v("a", {
				href: e.href ?? e.path,
				target: e.target,
				rel: a,
				"aria-current": i ? "page" : void 0,
				onClick: (t) => {
					e.reloadDocument || ct(t, e.path, r);
				},
				className: G("font-navigation flex h-6 max-w-40 items-center gap-1 rounded px-2 text-xs transition-colors duration-[100ms]", i ? "bg-accent-muted text-accent" : "text-text-tertiary hover:bg-bg-hover hover:text-text-primary"),
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
function Pn({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: l, signOutPath: u, signOutLabel: d, settingsPath: f, settingsLabel: m, onOpenSettings: g, showCommandPalette: y = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, sidebarHeaderActions: C, topBarActions: w, topBarNavItems: T, topBarNavLabel: E, currentPath: D, onNavigate: O, mainClassName: k, className: A }) {
	let [j, M] = h(!1), N = p(() => t.flatMap((e) => e.items), [t]), P = a ?? N;
	return /* @__PURE__ */ v("div", {
		className: G("bg-bg-primary flex h-svh overflow-hidden", A),
		children: [
			/* @__PURE__ */ _("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ _($t, {
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
				children: [/* @__PURE__ */ _(Mn, {
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
					className: G("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", k),
					children: e
				})]
			}),
			/* @__PURE__ */ _(ut, {
				items: i,
				currentPath: D,
				onNavigate: O
			}),
			/* @__PURE__ */ _(bt, {
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
			y && P.length > 0 && /* @__PURE__ */ _(vt, {
				items: P,
				shortcut: S,
				onNavigate: O
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function Fn({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: G("bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ _("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function In({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ v("a", {
		href: e,
		onClick: (t) => ct(t, e, n),
		className: G("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", r),
		children: [/* @__PURE__ */ _(S, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/FieldContext.ts
var Ln = r(null);
function Rn(...e) {
	return [...new Set(e.flatMap((e) => e?.split(/\s+/).filter(Boolean) ?? []))].join(" ") || void 0;
}
//#endregion
//#region src/components/ui/Checkbox.tsx
var zn = a(({ id: e, checked: t, indeterminate: n, onChange: r, label: i, ariaLabel: a, disabled: o, controlSize: s, className: d, "aria-label": f, "aria-describedby": p, "aria-invalid": h, required: g, ...y }, b) => {
	let x = u(), S = an(s), C = c(Ln), w = e ?? C?.id ?? x, T = m(null);
	return l(() => {
		T.current && (T.current.indeterminate = !!n);
	}, [n]), /* @__PURE__ */ v("div", {
		className: G("ui-choice flex w-fit items-center gap-2.5", o ? "cursor-not-allowed opacity-40" : "cursor-pointer", d),
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
				"aria-describedby": Rn(p, C?.describedBy),
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
			className: G("text-text-primary text-xs", o ? "cursor-not-allowed" : "cursor-pointer"),
			children: i
		})]
	});
});
zn.displayName = "Checkbox";
//#endregion
//#region src/components/ui/FilterButton.tsx
var Bn = a(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ v("button", {
		ref: i,
		className: G("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ _(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ _("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function Vn(e) {
	return typeof e.header == "string" ? e.header : e.sortLabel ?? e.key;
}
function Hn({ columns: e, hidden: n, onToggle: r, label: i = "Columns", heading: a = "Toggle columns", icon: o = M, onOnly: c, onlyLabel: l = "Only", footer: u }) {
	let [d, f] = h(!1), p = m(null);
	return jt(d, s(() => f(!1), []), [p]), /* @__PURE__ */ v("div", {
		className: "relative",
		ref: p,
		children: [/* @__PURE__ */ _(Bn, {
			icon: o,
			onClick: () => f(!d),
			children: i
		}), d && /* @__PURE__ */ v("div", {
			className: G("bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 rounded-md border py-1 shadow-lg", c ? "w-56" : "w-48"),
			children: [e.map((i, o) => /* @__PURE__ */ v(t, { children: [(o === 0 || i.group !== e[o - 1].group) && /* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: i.group ?? a
			}), /* @__PURE__ */ v("div", {
				onClick: () => r(i.key),
				className: "group text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(zn, {
						checked: !n.has(i.key),
						onChange: () => {},
						ariaLabel: Vn(i)
					}),
					/* @__PURE__ */ _("span", {
						className: "min-w-0 flex-1 truncate",
						children: i.header
					}),
					c && /* @__PURE__ */ _("button", {
						type: "button",
						"aria-label": `${l}: ${Vn(i)}`,
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
function Un({ page: e, totalPages: t, onPageChange: n }) {
	if (t <= 1) return null;
	let r = [];
	for (let n = 1; n <= t; n++) n === 1 || n === t || n >= e - 1 && n <= e + 1 ? r.push(n) : r[r.length - 1] !== "ellipsis" && r.push("ellipsis");
	return /* @__PURE__ */ v("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ _("button", {
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
				onClick: () => n(t),
				className: G("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ _("button", {
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
function Wn(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
function Gn({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: a = "No data", sortKey: o, sortDir: s, onSortChange: c, caption: l, loading: u = !1, loadingMessage: d = "Loading…", className: f, tableProps: m, getRowProps: g, isRowSelected: y }) {
	let b = c !== void 0, [S, w] = h(null), [T, E] = h("asc"), D = b ? o ?? null : S, O = b ? s ?? "asc" : T, k = p(() => b ? e : Wn(e, t, D, O), [
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
	return /* @__PURE__ */ v("div", {
		className: G("border-border bg-bg-table overflow-x-auto rounded-md border", f),
		children: [u && /* @__PURE__ */ _("span", {
			role: "status",
			className: "sr-only",
			children: d
		}), /* @__PURE__ */ v("table", {
			...m,
			"aria-busy": u || m?.["aria-busy"],
			className: G("font-data w-full text-xs", m?.className),
			children: [
				l && /* @__PURE__ */ _("caption", {
					className: "text-text-secondary px-3 py-2 text-left text-xs",
					children: l
				}),
				/* @__PURE__ */ _("thead", { children: /* @__PURE__ */ _("tr", {
					className: "border-border bg-bg-table-header border-b",
					children: t.map((e) => /* @__PURE__ */ _("th", {
						className: G("text-2xs text-text-table-header font-label h-7 px-3 text-left font-semibold tracking-wider uppercase", e.sortable && "hover:text-text-table-header-hover cursor-pointer select-none"),
						style: { width: e.width },
						scope: "col",
						"aria-sort": e.sortable ? D === e.key ? O === "asc" ? "ascending" : "descending" : "none" : void 0,
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
					}, e.key))
				}) }),
				/* @__PURE__ */ _("tbody", { children: k.length === 0 ? /* @__PURE__ */ _("tr", { children: /* @__PURE__ */ _("td", {
					colSpan: t.length,
					className: "text-text-tertiary h-32 text-center",
					children: u ? d : a
				}) }) : k.map((e) => {
					let a = g?.(e), o = y?.(e) ?? a?.["aria-selected"];
					return /* @__PURE__ */ i("tr", {
						...a,
						key: n(e),
						"aria-selected": o,
						className: G("border-border h-8 border-b last:border-b-0", "transition-none", o === !0 || o === "true" ? "bg-accent-muted" : "hover:bg-bg-hover", r && "cursor-pointer", a?.className),
						onClick: (t) => {
							a?.onClick?.(t), t.defaultPrevented || r?.(e);
						}
					}, t.map((t) => /* @__PURE__ */ _("td", {
						className: G("text-text-primary px-3 whitespace-nowrap", t.cellClassName),
						onClick: t.interactive ? (e) => e.stopPropagation() : void 0,
						children: t.render(e)
					}, t.key)));
				}) })
			]
		})]
	});
}
//#endregion
//#region src/components/ui/Alert.tsx
var Kn = {
	neutral: {
		bg: "bg-bg-hover",
		border: "border-border",
		icon: I,
		iconColor: "text-text-tertiary"
	},
	success: {
		bg: "bg-green-muted",
		border: "border-green/30",
		icon: D,
		iconColor: "text-green"
	},
	warning: {
		bg: "bg-yellow-muted",
		border: "border-yellow/30",
		icon: b,
		iconColor: "text-yellow"
	},
	error: {
		bg: "bg-red-muted",
		border: "border-red/30",
		icon: le,
		iconColor: "text-red"
	},
	info: {
		bg: "bg-blue-muted",
		border: "border-blue/30",
		icon: I,
		iconColor: "text-blue"
	}
};
function qn({ type: e, title: t, children: n, dismissible: r, className: i, actions: a, toneBody: o = !1, ...s }) {
	let [c, l] = h(!1);
	if (c) return null;
	let u = Kn[e], d = u.icon, f = e === "neutral" ? "text-text-primary" : u.iconColor;
	return /* @__PURE__ */ v("div", {
		...s,
		className: G("flex gap-2.5 rounded-md border p-3", u.bg, u.border, i),
		children: [
			/* @__PURE__ */ _(d, { className: G("mt-0.5 h-4 w-4 shrink-0", u.iconColor) }),
			/* @__PURE__ */ v("div", {
				className: "min-w-0 flex-1",
				children: [t && /* @__PURE__ */ _("p", {
					className: G(o ? f : "text-text-primary", "mb-0.5 text-xs font-semibold"),
					children: t
				}), /* @__PURE__ */ _("div", {
					className: G(o ? f : "text-text-secondary", "text-xs"),
					children: n
				})]
			}),
			a ? /* @__PURE__ */ _("div", {
				className: "shrink-0 self-center",
				children: a
			}) : null,
			r && /* @__PURE__ */ _("button", {
				onClick: () => l(!0),
				className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ _(V, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/components/ui/AuthCard.tsx
function Jn({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ _("div", {
		className: G("relative z-10 w-full max-w-sm", a),
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
function Yn({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ v("div", {
		className: G("flex items-center gap-2", i),
		children: [/* @__PURE__ */ _(Lt, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ v("div", { children: [/* @__PURE__ */ v("p", {
			className: G("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ _("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var Xn = {
	teal: "bg-teal-muted text-teal",
	rose: "bg-rose-muted text-rose",
	green: "bg-green-muted text-green",
	yellow: "bg-yellow-muted text-yellow",
	red: "bg-red-muted text-red",
	blue: "bg-blue-muted text-blue",
	purple: "bg-purple-muted text-purple",
	gray: "bg-bg-hover text-text-secondary"
}, Zn = {
	teal: "bg-teal",
	rose: "bg-rose",
	green: "bg-green",
	yellow: "bg-yellow",
	red: "bg-red",
	blue: "bg-blue",
	purple: "bg-purple",
	gray: "bg-text-tertiary"
};
function Qn({ color: e = "gray", dot: t, children: n, className: r }) {
	return /* @__PURE__ */ v("span", {
		className: G("font-label text-2xs inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-medium", Xn[e], r),
		children: [t && /* @__PURE__ */ _("span", { className: G("h-1.5 w-1.5 rounded-full", Zn[e]) }), n]
	});
}
//#endregion
//#region src/lib/calendar.ts
var $n = /* @__PURE__ */ new Map();
function Z(e, t) {
	if (!t) return {
		year: e.getFullYear(),
		month: e.getMonth() + 1,
		day: e.getDate(),
		hour: e.getHours(),
		minute: e.getMinutes(),
		second: e.getSeconds(),
		millisecond: e.getMilliseconds()
	};
	let n = $n.get(t);
	n || (n = new Intl.DateTimeFormat("en-GB-u-ca-iso8601-nu-latn", {
		timeZone: t,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hourCycle: "h23"
	}), $n.set(t, n));
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
function er(e) {
	let t = /* @__PURE__ */ new Date(0);
	return t.setUTCFullYear(e.year, e.month - 1, e.day), t.setUTCHours(e.hour, e.minute, e.second, e.millisecond), t.getTime();
}
function tr(e, t, n = "compatible") {
	let r = er(e), i = new Date(r);
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
		a.add(er(Z(new Date(n), t)) - n);
	}
	let o = [...a].map((e) => r - e).sort((e, t) => e - t), s = o.filter((e) => er(Z(new Date(e), t)) === r);
	if (s.length === 1) return new Date(s[0]);
	if (n === "reject") throw RangeError(s.length ? "This time occurs twice in the selected timezone" : "This time does not exist in the selected timezone");
	return s.length ? new Date(n === "later" ? s[s.length - 1] : s[0]) : new Date(n === "earlier" ? o[0] : o[o.length - 1]);
}
var nr = 1440, rr = 6e4, ir = [
	1,
	2,
	3,
	4,
	5
];
function ar(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function Q(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function or(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes() + t, e.getSeconds(), e.getMilliseconds());
}
function sr(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes());
}
function cr(e, t = 1) {
	let n = ar(e);
	return Q(n, -((n.getDay() - t + 7) % 7));
}
function lr(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function ur(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function dr(e, t) {
	let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	return Math.round((n - r) / 864e5);
}
function fr(e) {
	return e.getHours() * 60 + e.getMinutes() + e.getSeconds() / 60 + e.getMilliseconds() / rr;
}
function pr(e, t) {
	let n = mr(e, t);
	if (!ur(n, e) || fr(n) <= t) return n;
	let r = Math.floor(t);
	for (; r > 0 && fr(mr(e, r - 1)) !== r - 1;) r--;
	return /* @__PURE__ */ new Date(n.getTime() - (t - r) * rr);
}
function mr(e, t) {
	let n = Math.floor(t);
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, n, Math.round((t - n) * 60));
}
function hr(e) {
	let t = /^(\d{1,2}):(\d{2})$/.exec(e.trim());
	if (!t) throw RangeError(`Invalid time "${e}", expected HH:mm`);
	let n = Number(t[1]), r = Number(t[2]);
	if (r > 59 || n > 24 || n === 24 && r > 0) throw RangeError(`Invalid time "${e}"`);
	return n * 60 + r;
}
function gr(e) {
	let t = Math.round(e), n = Math.floor(t / 60), r = t % 60;
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function _r(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function vr(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
	if (!t) throw RangeError(`Invalid date key "${e}"`);
	let n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
	if (_r(n) !== e) throw RangeError(`Invalid date key "${e}"`);
	return n;
}
function yr(e, t, n = "round") {
	if (t <= 0) return e;
	let r = n === "floor" ? Math.floor : n === "ceil" ? Math.ceil : Math.round, i = e / t;
	return r(n === "floor" ? i + 1e-9 : n === "ceil" ? i - 1e-9 : i) * t;
}
function br(e, t, n = "round") {
	return mr(ar(e), yr(fr(e), t, n));
}
function $(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function xr(e) {
	return e === "day" || e === "threeDay" || e === "workWeek" || e === "week";
}
function Sr(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = ar(t);
	switch (e) {
		case "day":
		case "timeline": return [i];
		case "threeDay": return [
			i,
			Q(i, 1),
			Q(i, 2)
		];
		case "week": {
			let e = cr(i, r);
			return Array.from({ length: 7 }, (t, n) => Q(e, n));
		}
		case "workWeek": {
			let e = new Set(n.workWeekDays ?? ir), t = cr(i, r), a = Array.from({ length: 7 }, (e, n) => Q(t, n)).filter((t) => e.has(t.getDay()));
			return a.length ? a : [i];
		}
		case "agenda": {
			let e = Math.max(1, Math.floor(n.agendaDays ?? 7));
			return Array.from({ length: e }, (e, t) => Q(i, t));
		}
		case "month": return Cr(t, r).flat();
	}
}
function Cr(e, t = 1) {
	let n = lr(e), r = new Date(n.getFullYear(), n.getMonth() + 1, 0), i = cr(n, t), a = [], o = i;
	for (; o <= r || a.length === 0;) {
		let e = Array.from({ length: 7 }, (e, t) => Q(o, t));
		a.push(e), o = Q(o, 7);
	}
	return a;
}
function wr(e, t, n = {}) {
	let r = Sr(e, t, n);
	return {
		start: r[0],
		end: Q(r[r.length - 1], 1)
	};
}
function Tr(e, t, n, r = {}) {
	switch (e) {
		case "day":
		case "timeline": return Q(t, n);
		case "threeDay": return Q(t, 3 * n);
		case "week":
		case "workWeek": return Q(t, 7 * n);
		case "agenda": return Q(t, Math.max(1, r.agendaDays ?? 7) * n);
		case "month": return sr(t, n);
	}
}
var Er = /* @__PURE__ */ new Map();
function Dr(e, t) {
	let n = `${e}|${JSON.stringify(t)}`, r = Er.get(n);
	return r || (r = new Intl.DateTimeFormat(e, t), Er.set(n, r)), r;
}
function Or(e, t = {}) {
	return Dr(t.locale ?? "en-GB", {
		timeZone: t.timeZone,
		timeZoneName: t.timeZone ? "short" : void 0,
		hour: t.hour12 ? "numeric" : "2-digit",
		minute: "2-digit",
		hourCycle: t.hour12 ? "h12" : "h23"
	}).format(e);
}
function kr(e, t, n = {}) {
	return `${Or(e, n)}–${Or(t, n)}`;
}
function Ar(e, t = {}) {
	if (!t.hour12) return gr(e);
	let n = mr(new Date(2e3, 0, 1), e);
	return Dr(t.locale ?? "en-GB", {
		hour: "numeric",
		minute: e % 60 ? "2-digit" : void 0,
		hour12: !0
	}).format(n);
}
function jr(e, t = "en-GB") {
	return Dr(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e);
}
function Mr(e, t, n = {}) {
	let r = n.locale ?? "en-GB";
	if (e === "month") return Dr(r, {
		month: "long",
		year: "numeric"
	}).format(t);
	let i = Sr(e, t, n), a = i[0], o = i[i.length - 1];
	if (i.length === 1) return jr(a, r);
	let s = a.getFullYear() === o.getFullYear(), c = s && a.getMonth() === o.getMonth(), l = Dr(r, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	if (c) return `${a.getDate()} – ${l.format(o)}`;
	let u = Dr(r, s ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	}), d = Dr(r, {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return `${u.format(a)} – ${d.format(o)}`;
}
function Nr(e, t, n, r) {
	return e < r && n < t;
}
function Pr(e, t, n) {
	let r = ar(n), i = Q(r, 1), a = e.getTime(), o = Math.max(t.getTime(), a);
	if (o === a) {
		if (a < r.getTime() || a >= i.getTime()) return null;
	} else if (!Nr(a, o, r.getTime(), i.getTime())) return null;
	let s = a < r.getTime(), c = o > i.getTime();
	return {
		startMinute: s ? 0 : fr(e),
		endMinute: o >= i.getTime() ? nr : Math.max(fr(t), s ? 0 : fr(e)),
		continuesBefore: s,
		continuesAfter: c
	};
}
function Fr(e) {
	let t = e.filter(([e, t]) => t > e).map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]), n = [];
	for (let [e, r] of t) {
		let t = n[n.length - 1];
		t && e <= t[1] ? t[1] = Math.max(t[1], r) : n.push([e, r]);
	}
	return n;
}
function Ir(e, t, n) {
	let r = [], i = e;
	for (let [e, a] of Fr(n)) if (!(a <= i) && (e >= t || (e > i && r.push([i, Math.min(e, t)]), i = Math.max(i, a), i >= t))) break;
	return i < t && r.push([i, t]), r;
}
function Lr(e, t = 0) {
	let n = e.map((e) => ({
		id: e.id,
		start: e.start,
		end: Math.max(e.end, e.start + t)
	})).sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), r = /* @__PURE__ */ new Map(), i = [], a = [], o = -Infinity, s = () => {
		let e = a.length;
		for (let t of i) {
			let n = 1;
			for (let r = t.column + 1; r < e && !i.some((e) => e.column === r && Nr(t.start, t.end, e.start, e.end)); r++) n++;
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
function Rr(e) {
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
function zr(e) {
	return e === void 0 ? [] : typeof e == "string" ? [e] : e;
}
function Br(e, t, { emptyMatchesAll: n }) {
	if (t === void 0) return !0;
	let r = zr(e);
	return r.length === 0 ? n : r.includes(t);
}
function Vr(e, t, n) {
	let r = zr(e);
	if (t === void 0 || n === void 0 || t === n) return r.length ? [...r] : void 0;
	if (r.length === 0) return;
	let i = r.map((e) => e === t ? n : e);
	return [...new Set(i)];
}
function Hr(e, t, n = []) {
	let r = /* @__PURE__ */ new Set(), i = e.start.getTime(), a = e.end.getTime();
	for (let e of [...t, ...n]) if (Nr(e.start.getTime(), e.end.getTime(), i, a) && !("kind" in e && e.kind === "unavailable")) for (let t of zr(e.resourceId)) r.add(t);
	return r;
}
function Ur(e, t, n = {}) {
	let { fromDateKey: r, wallDateAtMinutes: i, toDateKey: a, startOfWeek: o, startOfDay: s, addDays: c, differenceInDays: l, weekday: u } = Xr(n.timeZone), d = n.weekStartsOn ?? 1, f = [], p = t.start.getTime(), m = t.end.getTime();
	for (let n of e) {
		let e = hr(n.startTime), h = hr(n.endTime);
		h <= e && (h += nr);
		let g = r(n.startDate), _ = (t) => {
			let r = i(t, e), o = i(t, h);
			if (o <= r || !Nr(r.getTime(), o.getTime(), p, m)) return;
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
function Wr(e, t, n, r, i) {
	let a = yr(t, r, "floor"), o = yr(n, r, "floor"), s = $(Math.min(a, o), i.min, i.max - r), c = $(Math.max(a, o) + r, s + r, i.max), l = pr(e, s), u = pr(e, c);
	return u <= l && (u = new Date(l.getTime() + r * rr)), {
		start: l,
		end: u
	};
}
function Gr(e, t, n, r, i, a) {
	let o = (e.end.getTime() - e.start.getTime()) / rr, s = yr(n - r, i), c = fr(e.start);
	c >= a.min && c + o <= a.max && (s = $(s, a.min, a.max - o));
	let l = mr(t, s);
	return {
		start: l,
		end: new Date(l.getTime() + o * rr)
	};
}
function Kr(e, t, n, r, i) {
	let a = ar(t), o = e.start.getTime() >= a.getTime() ? fr(e.start) + r : r;
	return pr(a, $(yr(n, r), Math.min(o, nr), Math.max(i.max, o)));
}
function qr(e, t) {
	return {
		start: Q(e.start, t),
		end: Q(e.end, t)
	};
}
function Jr(e, t) {
	return e.start.getTime() === t.start.getTime() && e.end.getTime() === t.end.getTime();
}
function Yr(e) {
	return e.allDay ? !0 : e.end.getTime() >= Q(e.start, 1).getTime();
}
function Xr(e) {
	let t = (t) => Z(t, e), n = (t) => tr(t, e), r = (e) => {
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
		let i = t(e), a = new Date(Date.UTC(i.year, i.month - 1, i.day, 0, Math.floor(r), 0, Math.round((r - Math.floor(r)) * rr)));
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
		return u(e, n) * nr + r.hour * 60 + r.minute + r.second / 60 + r.millisecond / rr;
	}, p = (t, n) => {
		let r = d(t, n), i = f(r, t);
		if (!e || i <= n + 1e-8) return r;
		let a = Math.floor(r.getTime() - (i - n) * rr), o = r.getTime();
		for (; a < o;) {
			let e = Math.floor((a + o) / 2);
			f(new Date(e), t) < n ? a = e + 1 : o = e;
		}
		return new Date(o);
	}, m = (e) => {
		if (!Number.isFinite(e.min) || !Number.isFinite(e.max) || e.max <= e.min) throw RangeError("Calendar time bounds must contain a positive interval of real instants");
	}, h = e ? (e, t) => new Date(i(e).getTime() + t * rr) : mr, g = e ? (e) => (e.getTime() - i(e).getTime()) / rr : fr, _ = e ? (e, t) => new Date(e.getTime() + t * rr) : or, v = (e) => {
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
			let o = new Set(n.workWeekDays ?? ir), l = i.filter((e) => o.has(s(e)));
			return l.length ? l : [r];
		}
		let o = e === "threeDay" ? 3 : e === "agenda" ? Math.max(1, Math.floor(n.agendaDays ?? 7)) : 1;
		return Array.from({ length: o }, (e, t) => a(r, t));
	}, x = (t, n, r) => {
		if (!e) return Pr(t, n, r);
		let o = i(r).getTime(), s = a(i(r), 1).getTime(), c = t.getTime(), l = Math.max(c, n.getTime());
		return (l === c ? c < o || c >= s : !Nr(c, l, o, s)) ? null : {
			startMinute: Math.max(0, (c - o) / rr),
			endMinute: Math.min(s - o, l - o) / rr,
			continuesBefore: c < o,
			continuesAfter: l > s
		};
	}, S = (e) => !!e.allDay || e.end >= a(e.start, 1), C = (t, n) => Dr(t, {
		...n,
		...e ? { timeZone: e } : {}
	}), w = (e, t = "en-GB") => C(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e), T = (n, r, i = {}) => {
		if (!e) return Mr(n, r, i);
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
		if (!e) return Gr(n, r, i, a, o, s);
		m(s);
		let c = (n.end.getTime() - n.start.getTime()) / rr, l = yr(i - a, o), f = (e) => {
			let n = h(r, e), i = t(n);
			return u(n, r) * nr + i.hour * 60 + i.minute;
		}, p = d(n.start, f(s.min)), g = d(n.start, f(s.max));
		n.start >= p && n.end <= g && c <= s.max - s.min && (l = $(l, s.min, s.max - c));
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
			if (!e) return Wr(t, n, r, i, a);
			let o = yr(n, i, "floor"), s = yr(r, i, "floor");
			m(a);
			let c = Math.min(i, a.max - a.min), l = $(Math.min(o, s), a.min, a.max - c);
			return {
				start: h(t, l),
				end: h(t, $(Math.max(o, s) + i, l + c, a.max))
			};
		},
		computeMoveRange: E,
		computeResizeEnd: (t, n, r, a, o) => {
			if (!e) return Kr(t, n, r, a, o);
			m(o);
			let s = Math.max(0, (t.start.getTime() - i(n).getTime()) / rr) + a;
			return h(n, $(yr(r, a), s, Math.max(o.max, s)));
		},
		computeNudgeRange: (e, t, n) => E(e, i(e.start), g(e.start) + t, 0, 1, n),
		shiftRangeDays: (t, n) => {
			if (!e) return qr(t, n);
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
				min: (p(t, n.min).getTime() - r) / rr,
				max: (p(t, n.max).getTime() - r) / rr
			};
			return m(a), a;
		}
	};
}
function Zr(e, t, n, r, i = !0) {
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
	let s = Xr(n.timeZone), c = /* @__PURE__ */ new Map(), l = e.map(({ day: e, bounds: t }) => {
		let i = s.toDateKey(e), a = c.get(i);
		if (a) return a;
		let l = o(t), u = l.map((t) => s.dateAtMinutes(e, t)), d = u.map((e) => Or(e, n)), f = Dr(n.locale ?? "en-GB", {
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
var Qr = r(null);
function $r() {
	let e = c(Qr);
	if (!e) throw Error("Calendar views must render inside <Calendar>");
	return e;
}
//#endregion
//#region src/components/ui/calendar/AgendaView.tsx
function ei({ days: e, events: t, availability: n, label: r }) {
	let i = $r(), { daySegment: a, eventsOnDay: o, getFormatter: s, isAllDayLike: c, isSameDay: l, toDateKey: u } = i.dates, d = s(i.locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}), f = (e) => zr(e).map((e) => i.resourceById.get(e)?.title).filter(Boolean).join(", ");
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
					className: G("ui-cal-agenda-day border-border border-b px-3 py-1.5 text-xs font-semibold", s ? "text-accent" : "text-text-primary"),
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
					children: r.map((e) => /* @__PURE__ */ _("li", { children: e.type === "event" ? /* @__PURE__ */ _(ti, {
						event: e.value,
						resources: f(e.value.resourceId)
					}) : /* @__PURE__ */ _(ni, {
						block: e.value,
						resources: f(e.value.resourceId)
					}) }, `${e.type}:${e.value.id}`))
				})]
			}, u(e));
		})
	});
}
function ti({ event: e, resources: t }) {
	let n = $r(), { isAllDayLike: r } = n.dates, i = n.statusLabel(e), a = r(e) ? n.labels.allDay : kr(e.start, e.end, n);
	return /* @__PURE__ */ v("div", {
		role: "button",
		tabIndex: 0,
		"aria-label": n.describeEvent(e),
		"data-status": e.status ?? "confirmed",
		className: G("ui-cal-agenda-row hover:bg-bg-hover flex cursor-pointer items-start gap-3 px-3 py-2 transition-colors duration-[100ms]", `ui-cal-c-${n.eventColor(e)}`),
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
function ni({ block: e, resources: t }) {
	let n = $r(), r = e.kind ?? "available", i = r === "available" ? n.labels.available : n.labels.unavailable, a = n.hasBlockClick;
	return /* @__PURE__ */ v("div", {
		role: a ? "button" : void 0,
		tabIndex: a ? 0 : void 0,
		"aria-label": n.describeBlock(e),
		className: G("text-text-tertiary flex items-start gap-3 px-3 py-1.5 text-2xs", a && "hover:bg-bg-hover cursor-pointer transition-colors duration-[100ms]", `ui-cal-c-${n.blockColor(e)}`),
		onClick: a ? () => n.clickBlock(e) : void 0,
		onKeyDown: a ? (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickBlock(e));
		} : void 0,
		children: [
			/* @__PURE__ */ _("span", {
				className: "font-mono w-24 shrink-0",
				children: kr(e.start, e.end, n)
			}),
			/* @__PURE__ */ _("span", {
				className: G("ui-cal-agenda-swatch mt-0.5", r === "unavailable" && "ui-cal-agenda-swatch-off"),
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
var ri = 96, ii = 224;
function ai(e) {
	return `${e.type}:${e.value.id}`;
}
function oi({ date: e, events: t, availability: n, label: r }) {
	let i = $r(), { addDays: a, daySegment: o, differenceInDays: c, eventsOnDay: u, formatLongDate: d, fromDateKey: g, getFormatter: y, getMonthWeeks: b, isAllDayLike: x, isSameDay: S, shiftRangeDays: C, toDateKey: w } = i.dates, T = p(() => b(e, i.weekStartsOn), [
		e,
		i.weekStartsOn,
		b
	]), E = m(null), D = m(null), [O, k] = h(null), [A, j] = h(null), [M, N] = h({
		top: 0,
		left: 0,
		width: 0
	}), [P, F] = h(null), [I, L] = h(null), R = m(null), ee = m(i);
	f(() => {
		ee.current = i;
	}), l(() => {
		let e = R;
		return () => {
			e.current?.cleanup(), e.current = null;
		};
	}, []);
	let te = m(!1), [ne, re] = h(null);
	l(() => {
		let e = E.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			re(e[0]?.contentRect.height ?? null);
		});
		return t.observe(e), () => t.disconnect();
	}, []);
	let z = s(() => j(null), []);
	jt(A !== null, z, [D]), l(() => {
		A && D.current?.querySelector("[data-cal-close]")?.focus();
	}, [A]);
	let ie = i.editLayer === "availability", ae = i.dates.parts(e).month, B = p(() => T.flat(), [T]), oe = w(i.now), se = B.find((e) => w(e) === oe && i.dates.parts(e).month === ae) ?? B.find((t) => i.dates.parts(t).month === ae && i.dates.parts(t).day === i.dates.parts(e).day) ?? B.find((e) => i.dates.parts(e).month === ae) ?? B[0], ce = O && B.some((e) => w(e) === O) ? O : w(se), le = p(() => {
		let e = /* @__PURE__ */ new Map();
		for (let r of B) {
			let i = u(t, r).map((e) => ({
				type: "event",
				value: e
			})), a = n.filter((e) => o(e.start, e.end, r)).sort((e, t) => e.start.getTime() - t.start.getTime()), s = a.some((e) => (e.kind ?? "available") === "available"), c = ie ? a.map((e) => ({
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
		B,
		t,
		n,
		ie,
		u,
		o,
		w
	]), ue = y(i.locale, { weekday: "short" }), U = i.monthMaxEvents ?? (ne ? Math.max(1, Math.floor((Math.max(ne / T.length, ri) - 28) / 20)) : 3);
	function de(e) {
		let t = w(e);
		k(t), requestAnimationFrame(() => {
			E.current?.querySelector(`[data-cal-date="${t}"]`)?.focus();
		});
	}
	function W(e, t) {
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
			B.some((e) => S(e, r)) && de(r);
		} else if (e.key === "Home" || e.key === "End") {
			e.preventDefault();
			let n = (i.dates.weekday(t) - i.weekStartsOn + 7) % 7;
			de(a(t, e.key === "Home" ? -n : 6 - n));
		} else (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i.openDay(t));
	}
	function fe(e) {
		return e.type === "event" ? i.canEditEvent(e.value) : i.canEditBlock(e.value);
	}
	function pe(e, t) {
		let n = {
			action: "move",
			...C(e.value, t),
			resourceIds: Vr(e.value.resourceId, void 0, void 0)
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
	function me(e) {
		e.type === "event" ? i.clickEvent(e.value) : i.clickBlock(e.value);
	}
	function he(e, t, n) {
		if (e.button !== 0 || R.current || (e.stopPropagation(), e.pointerType === "touch" || !fe(t))) return;
		let r = (e) => {
			let t = R.current;
			if (!t || e.pointerId !== t.pointerId) return;
			if (!t.started) {
				if (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) < 4) return;
				t.started = !0, L(ai(t.item));
			}
			let n = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-cal-date]"), r = n && E.current?.contains(n) ? n.dataset.calDate ?? null : null;
			t.overKey = r ?? void 0, F(r);
		}, i = (e) => {
			let t = R.current;
			if (!t || (R.current = null, t.cleanup(), F(null), L(null), t.started && (te.current = !0, setTimeout(() => {
				te.current = !1;
			}, 0)), !e || !t.started || !t.overKey || t.overKey === t.originKey)) return;
			let n = c(g(t.overKey), g(t.originKey));
			ee.current.commit(pe(t.item, n), "pointer");
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
	function ge(e) {
		te.current || me(e);
	}
	function _e(e, t) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), e.stopPropagation(), me(t);
			return;
		}
		if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
			if (e.preventDefault(), e.stopPropagation(), !fe(t)) return;
			i.commit(pe(t, e.key === "ArrowLeft" ? -1 : 1), "keyboard");
		}
	}
	function ve(e, t) {
		e.target !== e.currentTarget || !i.selectable || i.commit({
			target: "selection",
			action: "create",
			start: t,
			end: a(t, 1),
			allDay: !0
		}, "pointer");
	}
	let ye = (e, t) => {
		let n = ai(e), r = e.value.placeholder ? {
			"aria-hidden": !0,
			"data-placeholder": !0
		} : {
			role: "button",
			tabIndex: 0,
			onPointerDown: (n) => he(n, e, t),
			onClick: () => ge(e),
			onKeyDown: (t) => _e(t, e)
		};
		if (e.type === "availability") {
			let t = e.value;
			return /* @__PURE__ */ v("div", {
				className: G("ui-cal-chip", `ui-cal-c-${i.blockColor(t)}`),
				"data-all-day": !0,
				"data-dragging": I === n || void 0,
				"aria-label": t.placeholder ? void 0 : i.describeBlock(t),
				...r,
				children: [i.display.time && /* @__PURE__ */ _("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: kr(t.start, t.end, i)
				}), i.display.blockLabels && /* @__PURE__ */ _("span", {
					className: "ui-cal-title",
					children: t.label ?? ((t.kind ?? "available") === "available" ? i.labels.available : i.labels.unavailable)
				})]
			}, n);
		}
		let a = e.value, o = x(a), s = i.statusLabel(a);
		return /* @__PURE__ */ v("div", {
			className: G("ui-cal-chip", `ui-cal-c-${i.eventColor(a)}`),
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
					children: Or(a.start, i)
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
				children: ue.format(e)
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
					let t = w(e), n = le.get(t), r = n?.items ?? [], a = Math.max(1, U), o = r.length > a, s = o ? r.slice(0, a - 1) : r, c = t === oe, l = i.dates.parts(e).month !== ae, u = i.hasAvailability && i.shadeOutsideAvailability && !n?.hasAvailable;
					return /* @__PURE__ */ v("div", {
						role: "gridcell",
						tabIndex: t === ce ? 0 : -1,
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
						onKeyDown: (t) => W(t, e),
						onClick: (t) => ve(t, e),
						children: [
							/* @__PURE__ */ _("button", {
								type: "button",
								tabIndex: -1,
								onClick: () => i.openDay(e),
								"aria-label": d(e, i.locale),
								className: G("flex h-5 min-w-5 cursor-pointer items-center justify-center self-start rounded-full px-1 text-2xs font-semibold transition-colors duration-[100ms]", c ? "bg-accent text-text-on-accent" : l ? "text-text-tertiary hover:bg-bg-hover" : "text-text-primary hover:bg-bg-hover"),
								children: i.dates.parts(e).day
							}),
							s.map((e) => ye(e, t)),
							o && /* @__PURE__ */ _("button", {
								type: "button",
								className: "text-text-secondary hover:bg-bg-hover hover:text-text-primary cursor-pointer self-start rounded-md px-1 text-2xs font-medium transition-colors duration-[100ms]",
								"aria-haspopup": "dialog",
								"aria-expanded": A === t,
								onClick: (e) => {
									let n = e.currentTarget.closest("[data-cal-date]")?.getBoundingClientRect();
									if (n) {
										let e = Math.max(n.width, ii);
										N({
											top: Math.max(8, n.top),
											left: Math.max(8, Math.min(n.left, window.innerWidth - e - 8)),
											width: e
										});
									}
									j(t);
								},
								children: i.labels.more(r.length - s.length)
							}),
							A === t && H(/* @__PURE__ */ v("div", {
								ref: D,
								role: "dialog",
								"aria-label": d(e, i.locale),
								className: "ui-cal ui-cal-popover flex flex-col gap-0.5",
								style: M,
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
										onClick: z,
										"data-cal-close": !0,
										children: /* @__PURE__ */ _(V, { className: "h-3.5 w-3.5" })
									})]
								}), r.map((e) => ye(e, t))]
							}), document.body)
						]
					}, t);
				})
			}, w(e[0])))
		})]
	});
}
//#endregion
//#region src/components/ui/calendar/items.tsx
function si({ event: e, style: t, resizeEdge: n, compact: r, dense: i, continuesBefore: a, continuesAfter: o, dragging: s, onKeyDown: c, onClick: l }) {
	let u = $r(), d = u.canEditEvent(e), f = e.allDay ? u.labels.allDay : kr(e.start, e.end, u), { display: p } = u, m = p.status ? u.statusLabel(e) : void 0, h = [p.time && f, m].filter(Boolean).join(" · "), y = !!e.placeholder, b = u.renderEvent?.(e, {
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
		className: G("ui-cal-event", `ui-cal-c-${u.eventColor(e)}`),
		style: t,
		onKeyDown: y ? void 0 : c,
		onClick: y ? void 0 : l,
		children: [b ?? (i ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("span", {
			className: "ui-cal-title",
			children: e.title
		}), h && /* @__PURE__ */ _("span", {
			className: "ui-cal-meta font-mono",
			children: h
		})] }) : /* @__PURE__ */ _(ci, {
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
function ci({ event: e, compact: t, timeLabel: n, statusLabel: r, description: i, badge: a }) {
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
function li({ block: e, style: t, resizeEdge: n, continuesAfter: r, dragging: i, onKeyDown: a, onClick: o }) {
	let s = $r(), c = s.editLayer === "availability", l = c && s.canEditBlock(e), u = e.kind ?? "available", d = e.label ?? (u === "available" ? s.labels.available : s.labels.unavailable), f = c && !e.placeholder && (l || s.hasBlockClick);
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
		className: G("ui-cal-avail", `ui-cal-c-${s.blockColor(e)}`),
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
				children: kr(e.start, e.end, s)
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
function ui({ draft: e, invalid: t, style: n }) {
	let r = $r(), i = e.target === "event" ? e.event.title : e.target === "availability" ? e.availability.label ?? r.labels.available : void 0;
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
				children: kr(e.start, e.end, r)
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
var di = 4, fi = 10, pi = 36;
function mi(e, t, n, r, i) {
	let a = zr(e.value.resourceId).length > 0, o = {
		action: t,
		start: n.start,
		end: n.end,
		resourceId: a ? i : void 0,
		previousResourceId: a ? r : void 0,
		resourceIds: Vr(e.value.resourceId, r, i)
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
function hi(e, t) {
	return t.target === "selection" ? !1 : Jr(e.value, t) && (t.resourceId === void 0 || t.resourceId === t.previousResourceId);
}
function gi({ axis: e, columns: t, pxPerMinute: n, scrollRef: r, events: i, blocks: a, initialColumn: o }) {
	let s = $r(), { addMinutes: c, computeNudgeRange: u, dateAtMinutes: d, differenceInDays: p, shiftRangeDays: g } = s.dates, [_, v] = h(null), [y, b] = h(null), x = m(null), S = m({
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
		return $(s.min + l / a, s.min, s.max);
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
			l = mi(e.item, "move", c, s.resourceId, a.resourceId);
		} else if (e.kind === "resize" && e.item) {
			let t = w(e.origin);
			if (!t) return;
			let n = a(e.item.value, s.day, T(t, e.lastX, e.lastY), o, c);
			l = mi(e.item, "resize", {
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
		if (e.lastY < n.top + pi ? a = -1 : e.lastY > n.bottom - pi && (a = 1), e.lastX < n.left + pi ? i = -1 : e.lastX > n.right - pi && (i = 1), !i && !a) {
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
				if (!e || a.item && hi(a.item, e.draft)) return;
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
					let o = t.dayBounds(e.day), s = Math.min(i, o.max - o.min), c = $(yr(a.anchorMinute, i, "floor"), o.min, o.max - s), l = Math.min(c + Math.max(i, t.clickCreateDuration), o.max);
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
					n > fi && (t.moved = !0);
					return;
				}
				if (t.kind === "click" || n < di) {
					n >= di && (t.moved = !0);
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
				v = mi(f, "resize", {
					start: d.start,
					end: t
				}, _.resourceId, _.resourceId);
			} else v = mi(f, "move", u(d, e, s.dayBounds(d.start)), _.resourceId, _.resourceId);
		} else if (h.includes(n.key) && !n.shiftKey) {
			let e = t[l + (n.key === h[0] ? -1 : 1)];
			if (!e) return;
			v = mi(f, "move", g(d, p(e.day, _.day)), _.resourceId, e.resourceId);
		}
		v && (n.preventDefault(), !hi(f, v) && s.commit(v, "keyboard") && j(o));
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
		let e = t[$(o, 0, Math.max(0, t.length - 1))], n = e ? s.dayBounds(e.day) : s.bounds, r = Math.min(C, n.max - n.min), i = $(yr((e && s.timeZone && s.scrollToMinute !== void 0 ? s.dates.minutesOfDay(s.dates.wallDateAtMinutes(e.day, s.scrollToMinute)) : s.scrollToMinute) ?? n.min, C, "floor"), n.min, n.max - r);
		return {
			column: $(o, 0, Math.max(0, t.length - 1)),
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
					let t = $(y.end + e, y.start + C, i.max);
					f = {
						...y,
						end: t
					};
				} else {
					let t = $(y.start + e, i.min, i.max - u);
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
				let e = $(y.column + (n.key === c ? -1 : 1), 0, t.length - 1), r = s.dayBounds(t[e].day), a = Math.min(u, r.max - r.min), o = $(r.min + y.start - i.min, r.min, r.max - a);
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
				let e = n.key === "PageUp" ? -60 : 60, t = $(y.start + e, i.min, i.max - u);
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
var _i = 22, vi = 3, yi = 18, bi = 36;
function xi(e) {
	let t = e.querySelector(".ui-cal-head")?.offsetHeight ?? 0;
	return (e.clientHeight - t) / 2;
}
function Si(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return a ? a.endMinute <= n && a.startMinute < n ? "before" : a.startMinute >= r ? "after" : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	} : null;
}
function Ci({ days: e, events: t, availability: n, label: r }) {
	let i = $r(), { daySegment: a, formatLongDate: o, getFormatter: s, isAllDayLike: c, isSameDay: d, minutesOfDay: g, toDateKey: y } = i.dates, { bounds: b, resources: x, hourHeight: S } = i, C = S / 60, w = m(null), T = u(), [E, D] = h(!1), O = p(() => e.flatMap((e) => x.length ? x.map((t) => ({
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
	]), k = p(() => new Map(t.map((e) => [e.id, e])), [t]), A = p(() => new Map(n.map((e) => [e.id, e])), [n]), j = O.findIndex((e) => d(e.day, i.now)), M = gi({
		axis: "y",
		columns: O,
		pxPerMinute: C,
		scrollRef: w,
		events: k,
		blocks: A,
		initialColumn: Math.max(0, j)
	}), { drag: N, cursor: P } = M, F = i.editLayer === "availability", I = p(() => {
		let e = t.filter((e) => !c(e)), r = yi / C;
		return O.map((t) => {
			let o = t.bounds ?? i.bounds, s = 0, c = 0, l = [];
			for (let n of e) {
				if (!Br(n.resourceId, t.resourceId, { emptyMatchesAll: !1 })) continue;
				let e = Si(n, t.day, o.min, o.max, a);
				e === "before" ? s++ : e === "after" ? c++ : e && l.push(e);
			}
			let u = Lr(l.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r), d = [];
			for (let e of n) {
				if (!Br(e.resourceId, t.resourceId, { emptyMatchesAll: !0 })) continue;
				let n = Si(e, t.day, o.min, o.max, a);
				n && typeof n == "object" && d.push(n);
			}
			let f = F ? Lr(d.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r) : null, p = [];
			return i.hasAvailability && i.shadeOutsideAvailability && (p = Ir(o.min, o.max, d.map((e) => [e.start, e.end]))), {
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
				let o = a(n.start, n.end, r.day) !== null && Br(n.resourceId, r.resourceId, { emptyMatchesAll: !1 });
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
		let { lanes: n, count: r } = Rr(e);
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
	]), R = E ? L.count : Math.min(L.count, vi), ee = L.runs.filter((e) => (L.lanes.get(e.id) ?? 0) >= R).length, te = m(C), ne = m(null);
	l(() => {
		let e = w.current;
		if (!e) return;
		let t = () => {
			ne.current = (e.scrollTop + xi(e)) / te.current;
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, []), f(() => {
		let e = w.current;
		if (!e || te.current === C) return;
		te.current = C;
		let t = ne.current;
		t !== null && (e.scrollTop = Math.max(0, t * C - xi(e)));
	}, [C]);
	let re = m(null), z = i.scrollToMinute, { dates: ie, timeZone: ae, now: B } = i, oe = i.scrollAlign;
	l(() => {
		let t = w.current;
		if (!t || re.current === i.view) return;
		re.current = i.view;
		let n = e.find((e) => d(e, B)) ?? e[0], r = ae ? ie.minutesOfDay(ie.wallDateAtMinutes(n, z ?? 480)) : z ?? 480, a = ie.dayBounds(n, b), o = t.querySelector(".ui-cal-head"), s = () => {
			let e = oe === "center" ? xi(t) : 8;
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
			l || (re.current = null);
		};
	}, [
		i.view,
		z,
		oe,
		b,
		C,
		e,
		d,
		ie,
		ae,
		B
	]);
	let se = e.length > 1, ce = x.length > 0, V = !!i.timeZone && i.sharedTimeAxis, le = p(() => Zr(O.map((e) => ({
		day: e.day,
		bounds: e.bounds ?? i.bounds
	})), i.slotLabelInterval, {
		timeZone: i.timeZone,
		locale: i.locale,
		hour12: i.hour12
	}, i.bounds, V), [
		O,
		i.slotLabelInterval,
		i.timeZone,
		i.locale,
		i.hour12,
		i.bounds,
		V
	]), ue = le.reference, H = le.axes.map((e) => !!i.timeZone && (!V || !e.matchesReference)), U = ue ? s(i.locale, { timeZoneName: "short" }).formatToParts(i.dates.dateAtMinutes(ue.day, ue.bounds.min)).find((e) => e.type === "timeZoneName")?.value : void 0, de = H.some(Boolean) ? Math.max(ce ? i.resourceMinWidth : 0, 180) : ce ? i.resourceMinWidth : 44, W = Math.max(...O.map((e) => (e.bounds?.max ?? b.max) - (e.bounds?.min ?? b.min))) * C, fe = {
		"--cal-hour": `${S}px`,
		"--cal-offset": `${-(b.min % 60 * C)}px`,
		height: W
	}, pe = ue?.bounds ?? b, me = [], he = Math.max(5, i.slotLabelInterval);
	for (let e = Math.ceil(pe.min / he) * he; e < pe.max; e += he) e > pe.min && me.push(e);
	let ge = s(i.locale, { weekday: "short" }), _e = g(i.now), ve = i.nowIndicator, ye = N?.draft, be = ye && (ye.target === "selection" ? ye.resourceId : ye.resourceIds), xe = "";
	if (P) {
		let e = O[P.column];
		if (e) {
			let t = e.resourceId ? i.resourceById.get(e.resourceId) : void 0;
			xe = `${o(e.day, i.locale)}, ${i.timeZone ? Or(i.dates.dateAtMinutes(e.day, P.start), i) : gr(P.start)} to ${i.timeZone ? Or(i.dates.dateAtMinutes(e.day, P.end), i) : gr(P.end)}${t ? `, ${t.title}` : ""}`;
		}
	}
	return /* @__PURE__ */ _("div", {
		ref: w,
		"data-cal-drag": N?.draft.action,
		className: "ui-cal-scroll relative min-h-0 flex-1 overflow-auto",
		style: i.timeZone && !ue ? { "--cal-gutter": "0px" } : void 0,
		children: /* @__PURE__ */ v("div", {
			className: "flex min-h-full flex-col",
			style: { minWidth: `calc(var(--cal-gutter) + ${O.length * de}px)` },
			children: [/* @__PURE__ */ v("div", {
				className: "ui-cal-head border-border border-b",
				children: [
					se && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: U ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: U ? i.timeZone : void 0,
							"aria-label": U ? i.timeZone : void 0,
							children: U
						}), e.map((e) => /* @__PURE__ */ _(wi, {
							day: e,
							weekday: ge.format(e),
							isToday: d(e, i.now),
							grow: ce ? x.length : 1,
							onOpen: () => i.openDay(e),
							bordered: ce
						}, y(e)))]
					}),
					ce && /* @__PURE__ */ v("div", {
						className: "flex",
						children: [/* @__PURE__ */ _("div", {
							className: U && !se ? "ui-cal-corner text-text-tertiary flex items-center justify-center text-2xs" : "ui-cal-corner",
							title: !se && U ? i.timeZone : void 0,
							"aria-label": !se && U ? i.timeZone : void 0,
							children: se ? void 0 : U
						}), O.map((e, t) => /* @__PURE__ */ _(Ti, {
							resource: i.resourceById.get(e.resourceId ?? ""),
							sub: t % x.length !== 0
						}, e.key))]
					}),
					L.count > 0 && /* @__PURE__ */ v("div", {
						className: "border-border flex border-t",
						children: [/* @__PURE__ */ v("div", {
							className: "ui-cal-corner text-text-tertiary flex flex-col items-end justify-center gap-0.5 pr-2 text-2xs",
							children: [/* @__PURE__ */ _("span", { children: i.labels.allDay }), L.count > vi && /* @__PURE__ */ _("button", {
								type: "button",
								className: "text-accent cursor-pointer hover:underline",
								"aria-expanded": E,
								onClick: () => D((e) => !e),
								children: E ? i.labels.showLess : i.labels.more(ee)
							})]
						}), /* @__PURE__ */ _("div", {
							className: "relative flex-1",
							style: { height: R * _i + 4 },
							children: L.runs.map((e) => {
								let t = L.lanes.get(e.id) ?? 0;
								if (t >= R) return null;
								let n = O[e.start], r = O[e.end - 1];
								return /* @__PURE__ */ _(si, {
									event: e.event,
									compact: !0,
									continuesBefore: !!n && a(e.event.start, e.event.end, n.day)?.continuesBefore,
									continuesAfter: !!r && a(e.event.start, e.event.end, r.day)?.continuesAfter,
									style: {
										top: t * _i + 2,
										height: _i - 3,
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
					style: { height: W },
					"aria-hidden": "true",
					children: [
						U && !se && !ce && /* @__PURE__ */ _("span", {
							className: "text-text-tertiary absolute top-0 right-2 text-2xs",
							"aria-hidden": "true",
							children: U
						}),
						ue && me.map((e) => {
							let t = i.dates.parts(i.dates.dateAtMinutes(ue.day, e));
							return /* @__PURE__ */ _("span", {
								className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
								style: { top: (e - ue.bounds.min) * C },
								children: Ar(t.hour * 60 + t.minute, i)
							}, e);
						}),
						!i.timeZone && me.map((e) => /* @__PURE__ */ _("span", {
							className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
							style: { top: (e - b.min) * C },
							children: Ar(e, i)
						}, e))
					]
				}), /* @__PURE__ */ v("div", {
					role: "group",
					"aria-roledescription": "time grid",
					"aria-label": r,
					"aria-describedby": T,
					tabIndex: 0,
					className: "ui-cal-lines ui-cal-surface relative flex flex-1 select-none focus-visible:outline-none",
					style: fe,
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
							children: xe
						}),
						O.map((e, t) => {
							let n = I[t], r = e.bounds ?? i.bounds, o = H[t] ? 72 : 0, s = H[t] ? le.axes[t].minutes : [], c = d(e.day, i.now), l = ce && t % x.length !== 0;
							return /* @__PURE__ */ v("div", {
								"data-cal-col": t,
								"data-today": c || void 0,
								"data-subcol": l || void 0,
								className: "ui-cal-col flex-1",
								style: {
									minWidth: de,
									height: (r.max - r.min) * C
								},
								children: [
									s.map((t) => /* @__PURE__ */ _("span", {
										className: "ui-cal-zone-label",
										style: { top: (t - r.min) * C },
										"aria-hidden": "true",
										children: Or(i.dates.dateAtMinutes(e.day, t), i)
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
										return /* @__PURE__ */ _(li, {
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
										className: G("absolute inset-0", F && "ui-cal-muted-layer"),
										children: n.placed.map((e) => {
											let a = n.layout.get(e.item.id), o = Math.max((e.end - e.start) * C, yi);
											return /* @__PURE__ */ _(si, {
												event: e.item,
												compact: o < bi,
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
									c && ve && _e >= r.min && _e <= r.max && /* @__PURE__ */ _("div", {
										className: "ui-cal-now",
										"data-axis": "y",
										"data-dot": !l || void 0,
										style: { top: (_e - r.min) * C }
									}),
									ye && Br(be, e.resourceId, { emptyMatchesAll: !0 }) && (() => {
										let t = Si(ye, e.day, r.min, r.max, a);
										return !t || typeof t != "object" ? null : /* @__PURE__ */ _(ui, {
											draft: ye,
											invalid: N?.invalid,
											style: {
												top: (t.start - r.min) * C + 1,
												height: Math.max((t.end - t.start) * C - 2, yi),
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
function wi({ day: e, weekday: t, isToday: n, grow: r, bordered: i, onOpen: a }) {
	let o = $r();
	return /* @__PURE__ */ _("div", {
		className: G("flex min-w-0 items-center justify-center py-1.5", i && "border-border border-l"),
		style: { flex: `${r} 1 0` },
		children: /* @__PURE__ */ v("button", {
			type: "button",
			onClick: a,
			"aria-label": o.dates.formatLongDate(e, o.locale),
			"aria-current": n ? "date" : void 0,
			className: "hover:bg-bg-hover flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors duration-[100ms]",
			children: [/* @__PURE__ */ _("span", {
				className: G("text-2xs font-medium uppercase", n ? "text-accent" : "text-text-tertiary"),
				children: t
			}), /* @__PURE__ */ _("span", {
				className: G("flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold", n ? "bg-accent text-text-on-accent" : "text-text-primary"),
				children: o.dates.parts(e).day
			})]
		})
	});
}
function Ti({ resource: e, sub: t }) {
	let n = $r();
	return /* @__PURE__ */ v("div", {
		className: G("border-border flex min-w-0 flex-1 items-center gap-1.5 border-l px-2 py-1.5", t && "ui-cal-subhead"),
		style: { minWidth: n.resourceMinWidth },
		title: e?.title,
		children: [e?.color && /* @__PURE__ */ _("span", {
			className: G("ui-cal-dot", `ui-cal-c-${e.color}`),
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
var Ei = 34, Di = 4, Oi = 28;
function ki(e, t, n, r, i) {
	let a = i(e.start, e.end, t);
	return !a || a.endMinute <= n || a.startMinute >= r ? null : {
		item: e,
		start: Math.max(a.startMinute, n),
		end: Math.min(a.endMinute, r),
		continuesBefore: a.continuesBefore || a.startMinute < n,
		continuesAfter: a.continuesAfter || a.endMinute > r
	};
}
function Ai({ day: e, events: t, availability: n, label: r }) {
	let i = $r(), { daySegment: a, isSameDay: o, minutesOfDay: s } = i.dates, c = i.dayBounds(e), d = m(null), f = i.resources.length === 0 && t.length === 0 && n.length === 0, [g, y] = h(0);
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
	]), j = gi({
		axis: "x",
		columns: k,
		pxPerMinute: S,
		scrollRef: d,
		events: p(() => new Map(t.map((e) => [e.id, e])), [t]),
		blocks: p(() => new Map(n.map((e) => [e.id, e])), [n]),
		initialColumn: 0
	}), { drag: M, cursor: N } = j, P = i.editLayer === "availability", F = p(() => {
		let r = Oi / S;
		return k.map((o) => {
			let s = t.filter((e) => Br(e.resourceId, o.resourceId, { emptyMatchesAll: !1 })).map((t) => ki(t, e, c.min, c.max, a)).filter((e) => e !== null), l = Rr(s.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))), u = n.filter((e) => Br(e.resourceId, o.resourceId, { emptyMatchesAll: !0 })).map((t) => ki(t, e, c.min, c.max, a)).filter((e) => e !== null), d = P ? Rr(u.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))) : null, f = Math.max(1, l.count, d?.count ?? 0);
			return {
				placed: s,
				lanes: l,
				blocks: u,
				blockLanes: d,
				outside: i.hasAvailability && i.shadeOutsideAvailability ? Ir(c.min, c.max, u.map((e) => [e.start, e.end])) : [],
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
	let ee = [], te = Math.max(15, i.slotLabelInterval);
	for (let e = Math.ceil(c.min / te) * te; e < c.max; e += te) ee.push(e);
	let ne = s(i.now), re = i.nowIndicator && o(e, i.now) && ne >= c.min && ne <= c.max, z = M?.draft, ie = z && (z.target === "selection" ? z.resourceId : z.resourceIds), ae = {
		"--cal-hour": `${x}px`,
		"--cal-offset": `${-(c.min % 60 * S)}px`
	}, B = "";
	if (N) {
		let t = k[N.column], n = t?.resourceId ? i.resourceById.get(t.resourceId) : void 0;
		B = `${n ? `${n.title}, ` : ""}${i.timeZone ? Or(i.dates.dateAtMinutes(e, N.start), i) : gr(N.start)} to ${i.timeZone ? Or(i.dates.dateAtMinutes(e, N.end), i) : gr(N.end)}`;
	}
	function oe(e) {
		E((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	if (f) return /* @__PURE__ */ _("div", {
		className: "text-text-tertiary flex flex-1 items-center justify-center p-6 text-xs",
		children: i.labels.noResources
	});
	let se = 0;
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
					children: ee.map((t) => /* @__PURE__ */ _("span", {
						className: "text-text-tertiary font-mono absolute top-1.5 text-2xs",
						style: { left: (t - c.min) * S + 4 },
						children: i.timeZone ? Or(i.dates.dateAtMinutes(e, t), i) : Ar(t, i)
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
						children: B
					}),
					D.map((t) => {
						let n = t.name !== void 0 && T.has(t.name);
						return /* @__PURE__ */ v("div", { children: [t.name !== void 0 && /* @__PURE__ */ _("div", {
							className: "bg-bg-secondary border-border flex border-b",
							children: /* @__PURE__ */ v("button", {
								type: "button",
								className: "ui-cal-group text-text-secondary hover:text-text-primary flex cursor-pointer items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase transition-colors duration-[100ms]",
								"aria-expanded": !n,
								onClick: () => oe(t.name),
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
							let n = se++, r = F[n], o = k[n];
							if (!r || !o) return null;
							let s = r.laneCount * Ei + Di * 2;
							return /* @__PURE__ */ v("div", {
								className: "border-border flex border-b",
								children: [/* @__PURE__ */ v("div", {
									className: "ui-cal-row-head flex items-center gap-1.5 px-2",
									title: t.title,
									children: [t.color && /* @__PURE__ */ _("span", {
										className: G("ui-cal-dot", `ui-cal-c-${t.color}`),
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
										...ae,
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
											return /* @__PURE__ */ _(li, {
												block: e.item,
												resizeEdge: "right",
												continuesAfter: e.continuesAfter,
												dragging: M?.itemId === e.item.id,
												style: {
													left: (e.start - c.min) * S,
													width: Math.max((e.end - e.start) * S, 4),
													top: t === void 0 ? 0 : Di + t * Ei,
													height: t === void 0 ? "100%" : Ei - 3
												},
												onKeyDown: (t) => j.onItemKeyDown(t, "availability", e.item.id, n),
												onClick: (t) => {
													t.detail === 0 && i.clickBlock(e.item);
												}
											}, e.item.id);
										}),
										/* @__PURE__ */ _("div", {
											className: G("absolute inset-0", P && "ui-cal-muted-layer"),
											children: r.placed.map((e) => {
												let t = r.lanes.lanes.get(e.item.id) ?? 0;
												return /* @__PURE__ */ _(si, {
													event: e.item,
													compact: !1,
													dense: !0,
													resizeEdge: "right",
													continuesBefore: e.continuesBefore,
													continuesAfter: e.continuesAfter,
													dragging: M?.itemId === e.item.id,
													style: {
														left: (e.start - c.min) * S + 1,
														width: Math.max((e.end - e.start) * S, Oi) - 2,
														top: Di + t * Ei,
														height: Ei - 3,
														justifyContent: "center"
													},
													onKeyDown: (t) => j.onItemKeyDown(t, "event", e.item.id, n),
													onClick: (t) => {
														t.detail === 0 && i.clickEvent(e.item);
													}
												}, e.item.id);
											})
										}),
										re && /* @__PURE__ */ _("div", {
											className: "ui-cal-now",
											"data-axis": "x",
											style: { left: (ne - c.min) * S }
										}),
										z && Br(ie, o.resourceId, { emptyMatchesAll: !0 }) && (() => {
											let t = ki(z, e, c.min, c.max, a);
											return t ? /* @__PURE__ */ _(ui, {
												draft: z,
												invalid: M?.invalid,
												style: {
													left: (t.start - c.min) * S + 1,
													width: Math.max((t.end - t.start) * S - 2, Oi),
													top: Di,
													bottom: Di
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
var ji = {
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
function Mi({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ _("div", {
		role: "radiogroup",
		"aria-label": a,
		className: G("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ _("button", {
			role: "radio",
			"aria-checked": e.value === t,
			disabled: r,
			onClick: () => n(e.value),
			className: G("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", !r && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/Calendar.tsx
var Ni = [
	"day",
	"threeDay",
	"week",
	"month",
	"agenda"
];
function Pi() {
	return /* @__PURE__ */ new Date();
}
function Fi(e) {
	let [t, n] = h(Pi);
	return l(() => {
		if (e) return;
		let t = setInterval(() => n(Pi()), 3e4);
		return () => clearInterval(t);
	}, [e]), e ?? t;
}
function Ii(e) {
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
var Li = /* @__PURE__ */ new Set();
function Ri(e) {
	let t = !1;
	try {
		t = process.env.NODE_ENV !== "production";
	} catch {}
	!t || Li.has(e) || (Li.add(e), console.warn(`[Calendar] ${e}`));
}
function zi(e, t, n) {
	try {
		return hr(t);
	} catch {
		return Ri(`Invalid ${e} "${t}", expected HH:mm; using the default.`), n;
	}
}
function Bi({ events: e = [], availability: t, resources: n = [], view: r, defaultView: i = "week", onViewChange: a, views: o = Ni, date: s, defaultDate: c, onDateChange: d, onRangeChange: g, weekStartsOn: y = 1, workWeekDays: b, agendaDays: x = 7, slotMinTime: S = "07:00", slotMaxTime: C = "20:00", slotDuration: w = 15, slotLabelInterval: T = 60, sharedTimeAxis: E = !1, hourHeight: D = 48, timelineHourWidth: O = 96, resourceMinWidth: j = 120, scrollToTime: M, scrollAlign: N = "start", now: P, nowIndicator: F = !0, editLayer: I = "events", readOnly: R = !1, selectable: ee, clickCreateDuration: te = 30, shadeOutsideAvailability: ne = !0, onCreate: re, onEventClick: z, onEventChange: ie, onAvailabilityClick: ae, onAvailabilityChange: B, validate: oe, onInvalidChange: se, onDateClick: ce, renderEvent: V, monthMaxEvents: le, agendaShowAvailability: ue = !0, display: H, narrowView: U = "day", narrowWidth: de = 640, locale: W = "en-GB", timeZone: fe, hour12: pe = !1, labels: me, toolbar: he = !0, toolbarActions: ge, loading: _e = !1, className: ve, "aria-label": ye }) {
	let be = p(() => Xr(fe), [fe]), { addDays: xe, formatLongDate: Se, formatRangeTitle: Ce, getVisibleDays: we, minutesOfDay: Te, shiftDate: Ee } = be, De = m(null), Oe = u(), ke = Fi(P), Ae = Ii(De), [je, Me] = h(i), [Ne, Pe] = h(() => c ?? Pi()), Fe = r ?? je, K = s ?? Ne, Ie = (e) => {
		r === void 0 && Me(e), a?.(e);
	}, Le = (e) => {
		s === void 0 && Pe(e), d?.(e);
	}, q = Ae !== null && Ae < de && U !== !1 && xr(Fe) && Fe !== "day" && U ? U : Fe, Re = p(() => ({
		...ji,
		...me,
		views: {
			...ji.views,
			...me?.views
		},
		status: {
			...ji.status,
			...me?.status
		}
	}), [me]), ze = p(() => ({
		weekStartsOn: y,
		workWeekDays: b,
		agendaDays: x
	}), [
		y,
		b,
		x
	]), J = K.getTime(), Be = p(() => we(q, new Date(J), ze), [
		q,
		J,
		ze,
		we
	]), Ve = Be[0], He = xe(Be[Be.length - 1], 1), Ue = Ve.getTime(), We = He.getTime(), Ge = m(g);
	f(() => {
		Ge.current = g;
	}), l(() => {
		Ge.current?.({
			start: new Date(Ue),
			end: new Date(We),
			view: q
		});
	}, [
		Ue,
		We,
		q
	]);
	let Ke = p(() => e.filter((e) => Nr(e.start.getTime(), Math.max(e.end.getTime(), e.start.getTime() + 1), Ue, We)), [
		e,
		Ue,
		We
	]), qe = p(() => (t ?? []).filter((e) => Nr(e.start.getTime(), e.end.getTime(), Ue, We)), [
		t,
		Ue,
		We
	]), Je = zi("slotMinTime", S, 0), Ye = zi("slotMaxTime", C, 1440);
	Ye <= Je && Ri(`slotMaxTime "${C}" must be after slotMinTime "${S}"; showing the whole day.`);
	let Xe = p(() => Ye > Je ? {
		min: Je,
		max: Ye
	} : {
		min: 0,
		max: 1440
	}, [Je, Ye]), Y = Math.max(1, Math.round(w)), Ze;
	if (M) Ze = zi("scrollToTime", M, Xe.min);
	else {
		let e = qe.filter((e) => (e.kind ?? "available") === "available").map((e) => fe ? be.parts(e.start).hour * 60 + be.parts(e.start).minute : Te(e.start)).filter((e) => e >= Xe.min && e < Xe.max);
		e.length && (Ze = Math.min(...e));
	}
	let Qe = p(() => new Map(n.map((e) => [e.id, e])), [n]), $e = Ce(q, K, {
		...ze,
		locale: W
	}), et = {
		locale: W,
		hour12: pe,
		timeZone: fe
	}, tt = (e) => Qe.get(zr(e)[0] ?? ""), nt = (e) => {
		let t = zr(e).map((e) => Qe.get(e)?.title).filter(Boolean);
		return t.length ? `, ${t.join(", ")}` : "";
	}, rt = (e) => e.status && e.status !== "confirmed" ? Re.status[e.status] : void 0, it = (e) => {
		let t = oe?.(e);
		return typeof t == "string" && t ? t : void 0;
	}, X = {
		view: q,
		dates: be,
		timeZone: fe,
		dayBounds: (e) => be.dayBounds(e, Xe),
		locale: W,
		hour12: pe,
		weekStartsOn: y,
		now: ke,
		nowIndicator: F,
		labels: Re,
		itemHelpId: Oe,
		resources: n,
		resourceById: Qe,
		step: Y,
		bounds: Xe,
		hourHeight: D,
		slotLabelInterval: T,
		sharedTimeAxis: E,
		timelineHourWidth: O,
		resourceMinWidth: j,
		editLayer: I,
		selectable: !R && !!re && (ee ?? !0),
		clickCreateDuration: te,
		hasAvailability: t !== void 0,
		shadeOutsideAvailability: ne,
		monthMaxEvents: le,
		agendaShowAvailability: ue,
		display: {
			time: H?.time ?? !0,
			description: H?.description ?? !0,
			status: H?.status ?? !0,
			badge: H?.badge ?? !0,
			blockLabels: H?.blockLabels ?? !0,
			availableBlocks: H?.availableBlocks ?? !0
		},
		scrollToMinute: Ze,
		scrollAlign: N,
		canEditEvent: (e) => !e.placeholder && !R && !!ie && I === "events" && (e.editable ?? e.status !== "cancelled"),
		canEditBlock: (e) => !e.placeholder && !R && !!B && I === "availability" && e.editable !== !1,
		eventColor: (e) => e.color ?? tt(e.resourceId)?.color ?? "accent",
		blockColor: (e) => e.color ?? tt(e.resourceId)?.color ?? ((e.kind ?? "available") === "available" ? "green" : "gray"),
		statusLabel: rt,
		describeEvent: (e) => {
			let t = e.allDay ? `${Se(e.start, W)}, ${Re.allDay}` : `${Se(e.start, W)}, ${kr(e.start, e.end, et)}`, n = rt(e);
			return [
				e.title,
				t,
				n,
				e.badge,
				e.description
			].filter(Boolean).join(", ").concat(nt(e.resourceId));
		},
		describeBlock: (e) => [
			(e.kind ?? "available") === "available" ? Re.available : Re.unavailable,
			e.label,
			`${Se(e.start, W)}, ${kr(e.start, e.end, et)}`
		].filter(Boolean).join(", ").concat(nt(e.resourceId)),
		renderEvent: V,
		hasEventClick: !!z,
		hasBlockClick: !!ae,
		clickEvent: (e) => z?.(e),
		clickBlock: (e) => ae?.(e),
		check: it,
		commit: (e, t) => {
			let n = it(e);
			if (n) return se?.(e, n), !1;
			if (e.target === "selection") re?.({
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
				delete n.target, e.target === "event" ? ie?.(n) : B?.(n);
			}
			return !0;
		},
		openDay: (e) => {
			if (ce) {
				ce(e);
				return;
			}
			Le(e), q !== "day" && q !== "timeline" && Ie("day");
		}
	}, at = o.map((e) => ({
		value: e,
		label: Re.views[e]
	})), ot = ye ?? $e, st = JSON.stringify([
		fe,
		Be.map((e) => e.getTime()),
		Xe.min,
		Xe.max,
		Y,
		n.map((e) => e.id)
	]), ct;
	return ct = q === "month" ? /* @__PURE__ */ _(oi, {
		date: K,
		events: Ke,
		availability: qe,
		label: ot
	}, fe) : q === "agenda" ? /* @__PURE__ */ _(ei, {
		days: Be,
		events: Ke.filter((e) => !e.placeholder),
		availability: qe.filter((e) => !e.placeholder),
		label: ot
	}, fe) : q === "timeline" ? /* @__PURE__ */ _(Ai, {
		day: Be[0],
		events: Ke,
		availability: qe,
		label: ot
	}, st) : /* @__PURE__ */ _(Ci, {
		days: Be,
		events: Ke,
		availability: qe,
		label: ot
	}, st), /* @__PURE__ */ _(Qr.Provider, {
		value: X,
		children: /* @__PURE__ */ v("div", {
			ref: De,
			"data-time-zone": fe,
			"data-shared-axis": E && fe && [
				"day",
				"threeDay",
				"workWeek",
				"week"
			].includes(q) ? !0 : void 0,
			role: "region",
			"aria-label": ye ?? $e,
			"aria-busy": _e || void 0,
			className: G("ui-cal relative flex h-full min-h-0 flex-col overflow-hidden", ve),
			children: [
				/* @__PURE__ */ _("span", {
					id: Oe,
					className: "sr-only",
					children: Re.itemHelp
				}),
				he && /* @__PURE__ */ v("div", {
					className: "ui-cal-noprint border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2",
					children: [/* @__PURE__ */ v("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ _(fn, {
								size: "sm",
								onClick: () => Le(ke),
								children: Re.today
							}),
							/* @__PURE__ */ v("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ _(fn, {
									variant: "icon",
									size: "sm",
									icon: k,
									"aria-label": Re.previous,
									onClick: () => Le(Ee(q, K, -1, ze))
								}), /* @__PURE__ */ _(fn, {
									variant: "icon",
									size: "sm",
									icon: A,
									"aria-label": Re.next,
									onClick: () => Le(Ee(q, K, 1, ze))
								})]
							}),
							/* @__PURE__ */ _("h2", {
								className: "text-text-primary truncate text-sm font-semibold",
								"aria-live": "polite",
								children: $e
							})
						]
					}), /* @__PURE__ */ v("div", {
						className: "flex items-center gap-1.5",
						children: [ge, o.length > 1 && (Ae === null || Ae >= o.length * 80 + 420 ? /* @__PURE__ */ _(Mi, {
							"aria-label": Re.view,
							options: at,
							value: Fe,
							onChange: Ie
						}) : /* @__PURE__ */ _(xn, {
							className: "w-28",
							size: "sm",
							options: at,
							value: Fe,
							onChange: (e) => Ie(e)
						}))]
					})]
				}),
				ct,
				_e && /* @__PURE__ */ v("div", {
					className: "ui-cal-loading",
					role: "status",
					children: [/* @__PURE__ */ _(L, { className: "text-accent h-6 w-6 animate-spin" }), /* @__PURE__ */ _("span", {
						className: "sr-only",
						children: Re.loading
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/ui/CalendarGrid.tsx
var Vi = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
], Hi = [
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
];
function Ui(e, t, n) {
	let r = Z(e, n), i = Z(t, n);
	return r.year === i.year && r.month === i.month && r.day === i.day;
}
function Wi(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function Gi(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function Ki(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function qi({ year: e, month: t, timeZone: n, selected: r, rangeStart: i, rangeEnd: a, hoverDate: o, onSelect: s, onMonthChange: c, onHover: l, minDate: u, maxDate: d }) {
	let f = Gi(e, t), p = Ki(e, t), g = /* @__PURE__ */ new Date(), y = m(null), [b, x] = h(null);
	function S() {
		return b !== null && b >= 1 && b <= f ? b : r && Z(r, n).year === e && Z(r, n).month - 1 === t ? Z(r, n).day : i && Z(i, n).year === e && Z(i, n).month - 1 === t ? Z(i, n).day : Z(g, n).year === e && Z(g, n).month - 1 === t ? Z(g, n).day : 1;
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
						Hi[t],
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
			children: [Vi.map((e) => /* @__PURE__ */ _("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), D.map((c, f) => {
				if (c === null) return /* @__PURE__ */ _("div", { className: "h-8" }, `empty-${f}`);
				let p = tr({
					year: e,
					month: t + 1,
					day: c,
					hour: 0,
					minute: 0,
					second: 0,
					millisecond: 0
				}, n), m = Ui(p, g, n), h = r ? Ui(p, r, n) : !1, v = i ? Ui(p, i, n) : !1, y = a ? Ui(p, a, n) : !1, b = Wi(p, i ?? null, a ?? o ?? null), x = u && p < u || d && p > d;
				return /* @__PURE__ */ _("button", {
					type: "button",
					"data-day": c,
					disabled: !!x,
					tabIndex: c === C ? 0 : -1,
					"aria-label": `${Hi[t]} ${c}, ${e}`,
					"aria-current": m ? "date" : void 0,
					onClick: () => s(p),
					onKeyDown: (e) => w(e, c),
					onMouseEnter: () => l?.(p),
					onMouseLeave: () => l?.(null),
					className: G("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", x && "cursor-not-allowed opacity-30", !x && !h && !v && !y && !b && "hover:bg-bg-hover text-text-primary", m && !h && !v && !y && "text-accent font-semibold", (h || v || y) && "bg-accent text-text-on-accent font-semibold", b && !h && !v && !y && "bg-accent-muted text-accent"),
					children: c
				}, c);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function Ji({ children: e, className: t, header: n, footer: r, as: i = "div", flush: a = !1, bodyClassName: o, ...s }) {
	let c = an();
	return /* @__PURE__ */ v(i, {
		...s,
		className: G("bg-bg-secondary border-border overflow-hidden rounded-md border", t),
		children: [
			n && /* @__PURE__ */ _("div", {
				"data-control-size": c,
				className: "ui-bar border-border flex flex-col justify-center border-b px-3 py-2.5",
				children: n
			}),
			/* @__PURE__ */ _("div", {
				className: G(!a && "ui-surface-body p-3", o),
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
function Yi(e, t) {
	let n = e.replace(/\D/g, "").slice(0, t);
	return Array.from({ length: t }, (e, t) => n[t] ?? "");
}
function Xi(e, t, n) {
	if (!t || e.length <= t.length) return e;
	let r = e.length - t.length, i = n ?? e.length;
	return i - r >= 0 ? e.slice(i - r, i) : e.slice(-r);
}
function Zi(e, t, n) {
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
function Qi(e, t, n, r) {
	if (n === "") {
		let n = [...e];
		return n[t] = "", {
			slots: n,
			focus: t
		};
	}
	return Zi(e, t, Xi(n, e[t], r));
}
function $i(e, t) {
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
function ea({ value: e, onChange: t, onComplete: n, length: r = 6, error: i, invalid: a, disabled: o, autoFocus: s, name: c, "aria-label": l = "Verification code", className: d }) {
	let f = m([]), p = u(), g = a || !!i, [y, b] = h(() => Yi(e, r)), [x, S] = h({
		value: e,
		length: r
	});
	(x.value !== e || x.length !== r) && (S({
		value: e,
		length: r
	}), (y.length !== r || y.join("") !== e) && b(Yi(e, r)));
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
		t.key === "Backspace" ? (t.preventDefault(), w($i(y, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), C(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), C(e + 1));
	}
	return /* @__PURE__ */ v("div", {
		className: G("flex flex-col gap-1.5", d),
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
					onChange: (e) => w(Qi(y, t, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => T(t, e),
					onPaste: (e) => {
						e.preventDefault(), w(Zi(y, t, e.clipboardData.getData("text")));
					},
					className: G("bg-bg-secondary text-text-primary h-10 w-10 rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", g ? "border-red" : "border-border")
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
function ta({ options: e, value: t, onChange: n, onOptionChange: r, placeholder: i = "Select...", label: a, className: o, controlSize: c, id: l, name: d, disabled: f, "aria-label": p, "aria-describedby": g, "aria-invalid": y, query: b, onQueryChange: x, filterOptions: S = !0, selectedOption: C, renderOption: w, loading: T = !1, loadingMessage: D = "Loading results…", error: k, onRetry: A, emptyMessage: j = "No results", footer: M }) {
	let N = an(c), [P, F] = h(!1), [I, L] = h(""), [R, ee] = h(0), [te, ne] = h(() => e.find((e) => e.value === t)), re = m(null), z = m(null), ie = m(null), ae = u(), oe = l ?? `${ae}-search`, se = `${ae}-label`, ce = `${ae}-selected`, V = `${ae}-listbox`, le = b ?? I, ue = e.find((e) => e.value === t) ?? (C?.value === t ? C : void 0) ?? (te?.value === t ? te : void 0), H = S ? e.filter((e) => e.label.toLowerCase().includes(le.toLowerCase())) : e, U = Math.min(R, Math.max(H.length - 1, 0)), de = H[U], W = P && !f;
	function fe(e) {
		b === void 0 && L(e), x?.(e), ee(0);
	}
	function pe(e) {
		e.disabled || (ne(e), n(e.value), r?.(e), F(!1), z.current?.focus());
	}
	function me(e) {
		if ([
			"ArrowDown",
			"ArrowUp",
			"Home",
			"End"
		].includes(e.key)) {
			e.preventDefault();
			let t = e.key === "ArrowUp" || e.key === "End" ? -1 : 1, n = e.key === "Home" ? 0 : e.key === "End" ? H.length - 1 : U + t;
			for (; n >= 0 && n < H.length && H[n].disabled;) n += t;
			n >= 0 && n < H.length && ee(n);
		} else e.key === "Enter" ? (e.preventDefault(), de && pe(de)) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), F(!1), z.current?.focus());
	}
	jt(W, s(() => F(!1), []), [re]);
	function he() {
		F(!0), b === void 0 && L(""), ee(0), setTimeout(() => ie.current?.focus(), 0);
	}
	return /* @__PURE__ */ v("div", {
		className: G("flex flex-col gap-1.5", o),
		ref: re,
		onBlur: (e) => {
			e.currentTarget.contains(e.relatedTarget) || F(!1);
		},
		children: [
			a && /* @__PURE__ */ _("span", {
				id: se,
				className: "ui-field-label font-label text-xs font-medium",
				children: a
			}),
			d && /* @__PURE__ */ _("input", {
				type: "hidden",
				name: d,
				value: t,
				disabled: f
			}),
			/* @__PURE__ */ v("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ _("button", {
						ref: z,
						"data-control-size": N,
						type: "button",
						disabled: f,
						"aria-label": p ?? (a ? void 0 : i),
						"aria-labelledby": a && !p ? `${se} ${ce}` : void 0,
						"aria-describedby": g,
						"aria-invalid": y,
						"aria-expanded": W,
						"aria-haspopup": "listbox",
						"aria-controls": W ? V : void 0,
						onClick: () => W ? F(!1) : he(),
						onKeyDown: (e) => {
							(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), he());
						},
						className: G("ui-sized-control font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms] disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
						children: /* @__PURE__ */ _("span", {
							id: ce,
							children: ue ? ue.label : /* @__PURE__ */ _("span", {
								className: "text-text-disabled",
								children: t || i
							})
						})
					}),
					/* @__PURE__ */ _(O, {
						"aria-hidden": "true",
						className: G("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", W && "rotate-180")
					}),
					W && /* @__PURE__ */ v("div", {
						className: "bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-md border shadow-lg",
						children: [
							/* @__PURE__ */ _("div", {
								className: "border-border border-b p-1.5",
								children: /* @__PURE__ */ v("div", {
									className: "relative",
									children: [/* @__PURE__ */ _(B, {
										"aria-hidden": "true",
										className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2"
									}), /* @__PURE__ */ _("input", {
										ref: ie,
										"data-control-size": N,
										"data-has-icon": "true",
										id: oe,
										type: "text",
										role: "combobox",
										"aria-label": p ?? (a ? `Search ${a}` : "Search options"),
										"aria-expanded": "true",
										"aria-controls": V,
										"aria-activedescendant": de && !de.disabled ? `${V}-${U}` : void 0,
										"aria-autocomplete": "list",
										"aria-describedby": g,
										"aria-invalid": y,
										value: le,
										onChange: (e) => fe(e.target.value),
										onKeyDown: me,
										placeholder: "Search...",
										className: "ui-sized-control bg-bg-secondary text-text-primary border-border placeholder:text-text-disabled focus:border-accent font-control h-7 w-full rounded border pr-2 pl-7 text-xs focus:outline-none"
									})]
								})
							}),
							T && /* @__PURE__ */ _("div", {
								role: "status",
								className: "text-text-tertiary px-3 py-2 text-xs",
								children: D
							}),
							k && /* @__PURE__ */ v("div", {
								role: "alert",
								className: "text-text-secondary px-3 py-2 text-xs",
								children: [k, A && /* @__PURE__ */ _("button", {
									type: "button",
									onClick: A,
									className: "text-accent ml-2",
									children: "Retry"
								})]
							}),
							/* @__PURE__ */ _("ul", {
								id: V,
								className: "max-h-48 overflow-y-auto py-1",
								role: "listbox",
								"aria-label": a ?? p ?? "Options",
								"aria-busy": T,
								children: H.map((e, n) => /* @__PURE__ */ v("li", {
									id: `${V}-${n}`,
									role: "option",
									"aria-selected": e.value === t,
									"aria-disabled": e.disabled || void 0,
									onClick: () => pe(e),
									onMouseEnter: () => {
										e.disabled || ee(n);
									},
									className: G("font-control flex w-full items-center gap-2 px-3 py-1.5 text-xs", "transition-colors duration-[100ms]", e.disabled ? "text-text-disabled cursor-not-allowed" : "cursor-pointer", !e.disabled && (n === U ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover")),
									children: [/* @__PURE__ */ _("span", {
										className: "flex-1",
										children: w ? w(e) : e.label
									}), e.value === t && /* @__PURE__ */ _(E, {
										"aria-hidden": "true",
										className: "h-3 w-3 shrink-0"
									})]
								}, e.value))
							}),
							H.length === 0 && !T && !k && /* @__PURE__ */ _("div", {
								role: "status",
								className: "text-text-tertiary px-3 py-2 text-center text-xs",
								children: j
							}),
							M && /* @__PURE__ */ _("div", {
								className: "border-border border-t p-1.5",
								children: M
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
function na({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: G("border-border mt-8 border-t pt-6", r),
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
function ra(e) {
	return `${[
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
	][e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function ia({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date...", format: o }) {
	let c = an(e), [l, u] = h(!1), d = m(null), f = m(null), p = bn(l, d, f), g = Z(r ?? /* @__PURE__ */ new Date(), n), [y, b] = h(g.year), [x, S] = h(g.month - 1);
	jt(l, s(() => u(!1), []), [d]);
	function C(e) {
		i(e), u(!1);
	}
	function w() {
		!l && r && (b(Z(r, n).year), S(Z(r, n).month - 1)), u(!l);
	}
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		ref: d,
		children: [t && /* @__PURE__ */ _("span", {
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: w,
					"data-control-size": c,
					"aria-haspopup": "dialog",
					"aria-expanded": l,
					className: G("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? o ? o(r) : n ? new Intl.DateTimeFormat("en-GB", {
						timeZone: n,
						day: "numeric",
						month: "short",
						year: "numeric"
					}).format(r) : ra(r) : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ _(T, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				l && /* @__PURE__ */ _("div", {
					ref: f,
					role: "dialog",
					"aria-label": "Choose date",
					className: G("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", p ? "bottom-full mb-1" : "top-full mt-1"),
					children: /* @__PURE__ */ _(qi, {
						timeZone: n,
						year: y,
						month: x,
						selected: r,
						onSelect: C,
						onMonthChange: (e, t) => {
							b(e), S(t);
						}
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateRangePicker.tsx
var aa = [
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
];
function oa(e) {
	return `${aa[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function sa(e) {
	return e.start && e.end ? `${oa(e.start)} – ${oa(e.end)}` : e.start ? oa(e.start) : "";
}
function ca({ controlSize: e, label: t, value: n, onChange: r, placeholder: i = "Select date range..." }) {
	let a = an(e), [o, c] = h(!1), l = m(null), u = m(null), d = bn(o, l, u), f = /* @__PURE__ */ new Date(), [p, g] = h(n.start?.getFullYear() ?? f.getFullYear()), [y, b] = h(n.start?.getMonth() ?? f.getMonth()), [x, S] = h(null), [C, w] = h("start"), [E, D] = h(n.start), [O, k] = h(n.end);
	jt(o, s(() => c(!1), []), [l]);
	let A = y === 11 ? p + 1 : p, j = y === 11 ? 0 : y + 1;
	function M() {
		o || (D(n.start), k(n.end), w((n.start && n.end, "start")), n.start && (g(n.start.getFullYear()), b(n.start.getMonth()))), c(!o);
	}
	function N(e) {
		C === "start" ? (D(e), k(null), w("end")) : (E && e < E ? (k(E), D(e)) : k(e), w("start"), r({
			start: E && e < E ? e : E,
			end: E && e < E ? E : e
		}), c(!1));
	}
	function P() {
		y === 0 ? (g(p - 1), b(11)) : b(y - 1);
	}
	function F() {
		y === 11 ? (g(p + 1), b(0)) : b(y + 1);
	}
	let I = n.start || n.end ? sa(n) : "";
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		ref: l,
		children: [t && /* @__PURE__ */ _("span", {
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: M,
					"data-control-size": a,
					"aria-haspopup": "dialog",
					"aria-expanded": o,
					className: G("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: I || /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ _(T, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				o && /* @__PURE__ */ v("div", {
					ref: u,
					role: "dialog",
					"aria-label": "Choose date range",
					className: G("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", d ? "bottom-full mb-1" : "top-full mt-1"),
					children: [/* @__PURE__ */ v("div", {
						className: "mb-2 flex items-center justify-between",
						children: [
							/* @__PURE__ */ _("button", {
								type: "button",
								onClick: P,
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
								children: C === "start" ? "Select start date" : "Select end date"
							}),
							/* @__PURE__ */ _("button", {
								type: "button",
								onClick: F,
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
						children: [/* @__PURE__ */ _(qi, {
							year: p,
							month: y,
							rangeStart: E,
							rangeEnd: O,
							hoverDate: C === "end" ? x : null,
							onSelect: N,
							onMonthChange: (e, t) => {
								g(e), b(t);
							},
							onHover: S
						}), /* @__PURE__ */ _(qi, {
							year: A,
							month: j,
							rangeStart: E,
							rangeEnd: O,
							hoverDate: C === "end" ? x : null,
							onSelect: N,
							onMonthChange: (e, t) => {
								t === 0 ? (g(e - 1), b(11)) : (g(e), b(t - 1));
							},
							onHover: S
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateTimePicker.tsx
var la = [
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
];
function ua(e) {
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
function da(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function fa(e, t) {
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
	let n = la[e.getMonth()], r = e.getDate(), i = e.getFullYear(), { hour12: a, period: o } = ua(e.getHours());
	return `${n} ${r}, ${i} ${a}:${String(e.getMinutes()).padStart(2, "0")} ${o}`;
}
function pa(e) {
	return String(e).padStart(2, "0");
}
function ma(e) {
	return /* @__PURE__ */ _(ha, { ...e }, e.timeZone ?? "browser-local");
}
function ha({ controlSize: e, label: t, timeZone: n, value: r, onChange: i, placeholder: a = "Select date & time..." }) {
	let o = an(e), [c, l] = h(!1), [d, f] = h(null), [p, g] = h(!1), [y, b] = h("reject"), x = u(), S = m(null), C = m(null), w = bn(c, S, C), E = Z(r ?? /* @__PURE__ */ new Date(), n), D = r ? ua(Z(r, n).hour) : {
		hour12: 12,
		period: "PM"
	}, [O, k] = h(E.year), [A, j] = h(E.month - 1), [M, N] = h(String(D.hour12)), [P, F] = h(r ? pa(Z(r, n).minute) : "00"), [I, L] = h(D.period), [R, ee] = h(r);
	jt(c, s(() => l(!1), []), [S]);
	function te(e) {
		ee(e);
	}
	function ne(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		N(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (N(String(n - 12)), L("PM")) : n === 0 && (N("12"), L("AM"));
	}
	function re() {
		if (!R) return;
		let e = Math.max(1, Math.min(12, parseInt(M, 10) || 12)), t = Math.max(0, Math.min(59, parseInt(P, 10) || 0)), a = da(e, I), o = {
			...Z(R, n),
			hour: a,
			minute: t,
			second: 0,
			millisecond: 0
		}, s = r ? Z(r, n) : null, c;
		try {
			c = y === "reject" && r && s && [
				"year",
				"month",
				"day",
				"hour",
				"minute"
			].every((e) => s[e] === o[e]) ? new Date(r) : tr(o, n, y);
			let e = Z(c, n);
			if (e.hour !== a || e.minute !== t || e.day !== o.day) throw RangeError("This time does not exist in the selected timezone");
		} catch (e) {
			let t = e instanceof Error ? e.message : "Invalid date and time";
			f(t), g(t.includes("twice"));
			return;
		}
		f(null), i(c), l(!1);
	}
	function z() {
		if (!c && r) {
			k(Z(r, n).year), j(Z(r, n).month - 1), ee(r);
			let e = ua(Z(r, n).hour);
			N(String(e.hour12)), L(e.period), F(pa(Z(r, n).minute));
		}
		f(null);
		let e = !1;
		if (!c && r && n) try {
			tr(Z(r, n), n, "reject");
		} catch (t) {
			e = t instanceof Error && t.message.includes("twice");
		}
		g(e), b("reject"), l(!c);
	}
	return /* @__PURE__ */ v("div", {
		className: "flex flex-col gap-1.5",
		ref: S,
		children: [t && /* @__PURE__ */ _("span", {
			className: "ui-field-label text-xs font-medium",
			children: t
		}), /* @__PURE__ */ v("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					onClick: z,
					"data-control-size": o,
					"aria-haspopup": "dialog",
					"aria-expanded": c,
					className: G("ui-sized-control flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: r ? fa(r, n) : /* @__PURE__ */ _("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ _(T, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				c && /* @__PURE__ */ v("div", {
					ref: C,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: G("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", w ? "bottom-full mb-1" : "top-full mt-1"),
					children: [
						/* @__PURE__ */ _(qi, {
							timeZone: n,
							year: O,
							month: A,
							selected: R,
							onSelect: te,
							onMonthChange: (e, t) => {
								k(e), j(t);
							}
						}),
						n && /* @__PURE__ */ _("p", {
							className: "text-text-tertiary text-2xs",
							children: n
						}),
						d && /* @__PURE__ */ _("p", {
							id: x,
							role: "alert",
							className: "text-red text-xs",
							children: d
						}),
						p && /* @__PURE__ */ v("select", {
							"aria-label": "Repeated time occurrence",
							value: y,
							onChange: (e) => b(e.target.value),
							className: "bg-bg-secondary text-text-primary border-border rounded-md border text-xs",
							children: [
								/* @__PURE__ */ _("option", {
									value: "reject",
									children: d ? "Choose an occurrence" : "Keep current occurrence"
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
											value: M,
											onChange: (e) => ne(e.target.value),
											"aria-label": "Hour",
											"aria-invalid": !!d || void 0,
											"aria-describedby": d ? x : void 0,
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
											value: P,
											onChange: (e) => F(e.target.value.replace(/\D/g, "").slice(0, 2)),
											"aria-label": "Minute",
											"aria-invalid": !!d || void 0,
											"aria-describedby": d ? x : void 0,
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
										onClick: () => L("AM"),
										"aria-pressed": I === "AM",
										className: G("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", I === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "AM"
									}), /* @__PURE__ */ _("button", {
										type: "button",
										onClick: () => L("PM"),
										"aria-pressed": I === "PM",
										className: G("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", I === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
										children: "PM"
									})]
								}),
								/* @__PURE__ */ _("button", {
									type: "button",
									onClick: re,
									disabled: !R,
									className: G("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", R ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
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
var ga = 360, _a = 260, va = 700;
function ya({ open: e, onClose: t, title: n, children: r, className: i, resizable: a = !0, defaultWidth: o = ga, minWidth: c = _a, maxWidth: u = va }) {
	let [d, f] = h(o), p = m(!1), g = m(0), y = m(0);
	l(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
	}, [e, t]);
	let b = s((e) => {
		a && (e.preventDefault(), p.current = !0, g.current = e.clientX, y.current = d, e.target.setPointerCapture(e.pointerId));
	}, [a, d]), x = s((e) => {
		if (!p.current) return;
		let t = g.current - e.clientX;
		f(Math.max(c, Math.min(u, y.current + t)));
	}, [c, u]), S = s(() => {
		p.current = !1;
	}, []);
	return /* @__PURE__ */ _("div", {
		className: G("border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l", "transition-[width] duration-[200ms] ease-out", i),
		style: { width: e ? d : 0 },
		children: e && /* @__PURE__ */ v("div", {
			className: "animate-fade-in flex h-full flex-col",
			style: { width: d },
			children: [
				a && /* @__PURE__ */ _("div", {
					onPointerDown: b,
					onPointerMove: x,
					onPointerUp: S,
					className: "hover:bg-accent/30 active:bg-accent/40 absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none"
				}),
				/* @__PURE__ */ v("div", {
					className: "border-border flex h-10 shrink-0 items-center justify-between border-b px-3",
					children: [/* @__PURE__ */ _("h3", {
						className: "text-text-primary truncate text-xs font-semibold",
						children: n
					}), /* @__PURE__ */ _("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close panel",
						children: /* @__PURE__ */ _(V, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ _("div", {
					className: "flex-1 overflow-y-auto p-3",
					children: r
				})
			]
		})
	});
}
function ba(e, t) {
	let n = /^\s*(\d*\.?\d+)(px|rem)\s*$/.exec(e);
	if (!n) return 8;
	let r = Number(n[1]), i = n[2] === "rem" ? r * t : r;
	return Number.isFinite(i) && i >= 0 ? i * 2 : 8;
}
function xa(e, t, [n, r], [i, a], [o, s], c) {
	let [l, u] = r - n <= s - o - c * 2 ? [n, r] : [i, a], d = t + (o + c - l), f = t + (s - c - u);
	return f < d && (f = d), d = Math.min(d, 0), f = Math.max(f, 0), Math.min(f, Math.max(d, e));
}
function Sa(e, t, n, r, i, a) {
	return {
		x: xa(e.x, t.x, [n.left, n.right], [r.left, r.right], [i.left, i.right], a),
		y: xa(e.y, t.y, [n.top, n.bottom], [r.top, r.bottom], [i.top, i.bottom], a)
	};
}
function Ca({ x: e, y: t }) {
	return e === 0 && t === 0 ? "" : `${e}px ${t}px`;
}
//#endregion
//#region src/components/ui/Dialog.tsx
var wa = {
	sm: "max-w-[400px]",
	md: "max-w-[576px]",
	lg: "max-w-[768px]",
	xl: "max-w-[1024px]"
}, Ta = "(min-width: 48rem)", Ea = "a[href], button, input, select, textarea, label, summary, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [tabindex]:not([tabindex=\"-1\"])", Da = {
	x: 0,
	y: 0
};
function Oa(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top,
		right: t.left + e.clientWidth,
		bottom: t.top + e.clientHeight
	};
}
var ka = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function Aa(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function ja(e, t) {
	let n = t.getBoundingClientRect();
	return {
		left: n.left + e.offsetLeft - t.scrollLeft,
		top: n.top + e.offsetTop - t.scrollTop,
		width: e.offsetWidth,
		height: e.offsetHeight
	};
}
function Ma(e, t) {
	if (!(e instanceof HTMLElement) || !e.isConnected) return null;
	let n = e.ownerDocument;
	return e === n.body || e === n.documentElement || t.contains(e) ? null : e.getClientRects().length > 0 ? e : null;
}
function Na(e) {
	return e.ownerDocument.defaultView?.matchMedia(Ta).matches ?? !1;
}
function Pa(e) {
	let t = e.ownerDocument.defaultView;
	return t ? ba(t.getComputedStyle(e).getPropertyValue("--spacing"), parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize)) : 8;
}
function Fa({ open: e, draggable: t, remember: n, placement: r, anchorRef: i }, a, o) {
	let s = m(Da), c = m(Da), l = m(8), u = m(null), d = m(null), p = m(!1), h = e && t;
	f(() => {
		let f = a.current, m = h ? o.current : null, g = f?.parentElement, _ = f?.ownerDocument.defaultView, v = r !== "center";
		(!n || !t) && (d.current = null);
		let y = n && m !== null;
		if (!e || !f || !g || !_ || !m && !v) return;
		let b = v ? Ma(f.ownerDocument.activeElement, f) : null, x = () => v ? Ma(i?.current, f) ?? Ma(b, f) : null, S = () => Aa(c.current, m ? s.current : Da), C = () => {
			f.style.translate = Ca(S());
		}, w = () => {
			let e = ja(f, g);
			if (p.current && d.current) {
				c.current = {
					x: d.current.left - e.left,
					y: d.current.top - e.top
				}, s.current = Da, f.dataset.placement = "remembered", f.style.transformOrigin = "";
				return;
			}
			let t = Na(f) ? x() : null, n = v && t ? yn(r, t.getBoundingClientRect(), {
				size: {
					width: e.width,
					height: e.height
				},
				bounds: Oa(g),
				margin: l.current,
				gap: l.current
			}) : null;
			c.current = n ? {
				x: n.left - e.left,
				y: n.top - e.top
			} : Da, f.dataset.placement = n?.side ?? "center", f.style.transformOrigin = n ? ka[n.side] : "";
		}, T = () => {
			let e = s.current;
			if (!m || !p.current && e.x === 0 && e.y === 0) return;
			let t = S(), n = Sa(t, t, f.getBoundingClientRect(), m.getBoundingClientRect(), Oa(g), l.current);
			if (s.current = {
				x: n.x - c.current.x,
				y: n.y - c.current.y
			}, C(), p.current) {
				let e = ja(f, g);
				d.current = {
					left: e.left + n.x,
					top: e.top + n.y
				};
			}
		}, E = () => {
			l.current = Pa(f), Na(f) || (u.current = null, s.current = Da, p.current = !1, d.current = null), u.current || w(), C(), T();
		}, D = 0, O = () => {
			D ||= _.requestAnimationFrame(() => {
				D = 0, E();
			});
		}, k = (e) => {
			e.target === f && T();
		}, A = "ResizeObserver" in _ ? new _.ResizeObserver(O) : null;
		return p.current = y && d.current !== null, E(), _.addEventListener("resize", O), _.addEventListener("scroll", O, {
			capture: !0,
			passive: !0
		}), f.addEventListener("animationend", k), A?.observe(f), () => {
			_.cancelAnimationFrame(D), _.removeEventListener("resize", O), _.removeEventListener("scroll", O, { capture: !0 }), f.removeEventListener("animationend", k), A?.disconnect(), u.current = null, c.current = Da, s.current = Da, p.current = !1, f.style.translate = "", f.style.transformOrigin = "", delete f.dataset.placement;
		};
	}, [
		e,
		h,
		t,
		n,
		r,
		i,
		a,
		o
	]);
	let g = (e) => {
		let t = a.current, n = e.currentTarget, r = t?.parentElement;
		if (!t || !r || e.button !== 0 || !e.isPrimary) return;
		let i = e.target.closest(Ea);
		i && n.contains(i) || !Na(t) || (e.preventDefault(), n.setPointerCapture(e.pointerId), u.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			origin: Aa(c.current, s.current),
			dialog: t.getBoundingClientRect(),
			handle: n.getBoundingClientRect(),
			bounds: Oa(r),
			margin: l.current,
			moved: !1
		});
	}, _ = (e) => {
		let t = u.current, n = a.current;
		if (!t || t.pointerId !== e.pointerId || !n) return;
		let r = Sa({
			x: t.origin.x + e.clientX - t.startX,
			y: t.origin.y + e.clientY - t.startY
		}, t.origin, t.dialog, t.handle, t.bounds, t.margin);
		t.moved ||= r.x !== t.origin.x || r.y !== t.origin.y, s.current = {
			x: r.x - c.current.x,
			y: r.y - c.current.y
		}, n.style.translate = Ca(r);
	}, v = (e) => {
		let t = u.current;
		if (t?.pointerId !== e.pointerId) return;
		u.current = null;
		let r = a.current, i = r?.parentElement;
		if (!n || !t.moved || !r || !i) return;
		let o = Aa(c.current, s.current), l = ja(r, i);
		d.current = {
			left: l.left + o.x,
			top: l.top + o.y
		}, c.current = o, s.current = Da, p.current = !0, r.dataset.placement = "remembered", r.style.transformOrigin = "";
	};
	if (h) return {
		onPointerDown: g,
		onPointerMove: _,
		onPointerUp: v,
		onPointerCancel: v,
		onLostPointerCapture: v
	};
}
function Ia({ open: e, onClose: t, title: n, children: r, footer: i, className: a, size: o = "sm", draggable: s = !1, rememberPosition: c = !1, placement: d = "center", anchorRef: f, role: p = "dialog", description: h, "aria-label": g, "aria-describedby": y, initialFocusRef: b, returnFocusRef: x, busy: S = !1, closeOnEscape: C = !0, closeOnOverlayClick: w = !0, hideCloseButton: T = !1 }) {
	let E = an(), D = m(null), O = m(null), k = u(), A = u();
	ft(D, e, {
		initialFocusRef: b,
		returnFocusRef: x
	});
	let j = Fa({
		open: e,
		draggable: s,
		remember: c,
		placement: d,
		anchorRef: f
	}, D, O);
	return l(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && C && !S && (e.preventDefault(), t());
		};
		document.addEventListener("keydown", n);
		let r = document.body.style.overflow;
		return document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = r;
		};
	}, [
		e,
		t,
		C,
		S
	]), e ? H(/* @__PURE__ */ v("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]",
		children: [/* @__PURE__ */ _("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: () => {
				w && !S && t();
			},
			"aria-hidden": "true"
		}), /* @__PURE__ */ v("div", {
			ref: D,
			className: G(`relative z-50 mx-1 mb-8 flex w-full ${wa[o]} flex-col`, "bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
			role: p,
			tabIndex: -1,
			"aria-busy": S || void 0,
			"aria-modal": "true",
			"aria-labelledby": n ? k : void 0,
			"aria-label": g ?? (n ? void 0 : "Dialog"),
			"aria-describedby": [h ? A : void 0, y].filter(Boolean).join(" ") || void 0,
			children: [
				(n || !T || s) && /* @__PURE__ */ v("div", {
					ref: O,
					"data-control-size": E,
					className: G("ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5", s && "md:cursor-move md:touch-none md:select-none"),
					...j,
					children: [n && /* @__PURE__ */ _("h3", {
						id: k,
						className: "text-text-primary min-w-0 text-sm font-medium",
						children: n
					}), !T && /* @__PURE__ */ _(fn, {
						type: "button",
						variant: "icon",
						size: "sm",
						"aria-disabled": S || void 0,
						onClick: () => {
							S || t();
						},
						className: "ml-auto shrink-0",
						"aria-label": "Close",
						children: /* @__PURE__ */ _(V, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ v("div", {
					className: "ui-surface-body p-3",
					children: [h && /* @__PURE__ */ _("div", {
						id: A,
						className: "text-text-secondary mb-3 text-xs",
						children: h
					}), r]
				}),
				i && /* @__PURE__ */ _("div", {
					"data-control-size": E,
					className: "ui-bar border-border bg-bg-primary/50 flex shrink-0 flex-col justify-center rounded-b-lg border-t px-3 py-2.5",
					children: i
				})
			]
		})]
	}), document.body) : null;
}
//#endregion
//#region src/components/ui/DialogActions.tsx
function La({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a, busy: o = !1, busyLabel: s = "Working…", cancelRef: c, confirmRef: l, confirmDisabled: u = !1 }) {
	return /* @__PURE__ */ v("div", {
		className: G("flex justify-end gap-2", a),
		"aria-busy": o || void 0,
		children: [/* @__PURE__ */ _(fn, {
			ref: c,
			type: "button",
			variant: "ghost",
			size: "sm",
			"aria-disabled": o || void 0,
			onClick: () => {
				o || e();
			},
			children: n
		}), /* @__PURE__ */ _(fn, {
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
function Ra({ children: e, className: t }) {
	return /* @__PURE__ */ v("div", {
		className: G("my-6 flex items-center gap-3", t),
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
function za({ trigger: e, items: t, align: n = "right" }) {
	let [r, i] = h(!1), [a, o] = h({
		top: 0,
		left: 0,
		triggerWidth: 0
	}), [c, u] = h(-1), d = m(null), f = m(null), y = p(() => t.filter((e) => !e.divider), [t]), b = s(() => {
		i(!1), u(-1);
	}, []);
	jt(r, b, [f], [d]), l(() => {
		if (!r) return;
		let e = (e) => {
			e.key === "ArrowDown" ? (e.preventDefault(), u((e) => (e + 1) % y.length)) : e.key === "ArrowUp" ? (e.preventDefault(), u((e) => (e - 1 + y.length) % y.length)) : e.key === "Enter" && c >= 0 && (e.preventDefault(), y[c].onClick(), b());
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		r,
		c,
		y,
		b
	]), l(() => {
		!r || c < 0 || !f.current || f.current.querySelectorAll("[role=\"menuitem\"]")[c]?.focus();
	}, [r, c]);
	function x() {
		if (!d.current) return;
		let e = d.current.getBoundingClientRect();
		o({
			top: e.bottom + 4,
			left: n === "right" ? e.right : e.left,
			triggerWidth: e.width
		}), i(!r), u(-1);
	}
	let S = -1;
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", {
		ref: d,
		onClick: x,
		children: e
	}), r && H(/* @__PURE__ */ _("div", {
		ref: f,
		role: "menu",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-max rounded-md border py-1 shadow-lg",
		style: {
			top: a.top,
			minWidth: a.triggerWidth,
			...n === "right" ? { right: window.innerWidth - a.left } : { left: a.left }
		},
		children: t.map((e, t) => {
			if (e.divider) return /* @__PURE__ */ _("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${t}`);
			S++;
			let n = S;
			return /* @__PURE__ */ v("button", {
				role: "menuitem",
				tabIndex: n === c ? 0 : -1,
				onClick: () => {
					e.onClick(), b();
				},
				onMouseEnter: () => u(n),
				className: G("flex h-7 w-full cursor-pointer items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover"),
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
			}, e.label || `item-${t}`);
		})
	}), document.body)] });
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function Ba({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ v("div", {
		className: G("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ _("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ _(F, { className: "h-5 w-5" })
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
var Va = class extends e {
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
				/* @__PURE__ */ _(fn, {
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
function Ha({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ _(za, {
		align: r,
		trigger: /* @__PURE__ */ _(Bn, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function Ua({ children: e, className: t }) {
	return /* @__PURE__ */ _("kbd", {
		className: G("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var Wa = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function Ga({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ _("div", {
		className: G("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ _(L, { className: G("text-accent animate-spin", Wa[t]) })
	});
}
//#endregion
//#region src/lib/layout.ts
function Ka(e, t, n, r) {
	let i = typeof t == "object" ? t : { base: t }, a = { [`--ui-${e}-base`]: n(i.base ?? r) };
	for (let t of [
		"sm",
		"md",
		"lg",
		"xl"
	]) a[`--ui-${e}-${t}`] = i[t] === void 0 ? "initial" : n(i[t]);
	return a;
}
function qa(e) {
	return typeof e == "number" ? `repeat(${e}, minmax(0, 1fr))` : e;
}
function Ja(e = 0, t, n) {
	return {
		"--ui-gap": `calc(var(--spacing) * ${e})`,
		"--ui-gap-x": t === void 0 ? "initial" : `calc(var(--spacing) * ${t})`,
		"--ui-gap-y": n === void 0 ? "initial" : `calc(var(--spacing) * ${n})`
	};
}
function Ya(e) {
	return e === "start" || e === "end" ? `flex-${e}` : e;
}
function Xa(e) {
	return e === "between" || e === "around" || e === "evenly" ? `space-${e}` : Ya(e);
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
function Za({ items: e, labelWidth: n = "100px", layout: r = "inline", columns: i = 1, gap: a = 3, className: o }) {
	return r === "stacked" ? /* @__PURE__ */ _("dl", {
		className: G("ui-grid text-xs", o),
		style: {
			...Ka("columns", i, qa, 1),
			...Ja(a)
		},
		children: e.map((e) => /* @__PURE__ */ v("div", { children: [/* @__PURE__ */ _("dt", {
			className: "text-text-tertiary font-label",
			children: e.label
		}), /* @__PURE__ */ _("dd", {
			className: G((typeof e.value == "string" || typeof e.value == "number") && "text-text-primary font-data"),
			children: e.value
		})] }, e.label))
	}) : /* @__PURE__ */ _("div", {
		className: G("gap-x-3 gap-y-2 text-xs", o),
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
function Qa({ label: e, value: t, sub: n, trend: r, bar: i, icon: a, iconColor: o, className: s }) {
	let c = r?.tone === "positive" ? "text-green" : r?.tone === "negative" ? "text-red" : "text-text-tertiary";
	return /* @__PURE__ */ v("div", {
		className: G("bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3", s),
		children: [
			a && /* @__PURE__ */ _(a, { className: G("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", o) }),
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
					className: G("font-medium tabular-nums", c),
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
function $a() {
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
function eo() {
	return /* @__PURE__ */ _("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ _("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var to = {
	github: "GitHub",
	google: "Google"
}, no = {
	github: eo,
	google: $a
};
function ro({ provider: e, children: t, ...n }) {
	let r = no[e];
	return /* @__PURE__ */ v(fn, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ _(r, {}), t ?? to[e]]
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function io({ title: e, subtitle: t, actions: n, className: r, eyebrow: i, headingLevel: a = 1, wrap: o = !1 }) {
	let s = `h${a}`;
	return /* @__PURE__ */ v("div", {
		className: G("flex items-center justify-between gap-3", o && "flex-wrap", r),
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
			className: G("flex items-center gap-2", o && "flex-wrap"),
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/PageSection.tsx
function ao({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ v("section", {
		className: G("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ v("div", {
			className: G("border-border flex items-end justify-between gap-3 border-b pb-2", o),
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
var oo = [
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
function so({ page: e, pageSize: t, total: n, pageSizeOptions: r = oo, onPageChange: i, onPageSizeChange: a, className: o }) {
	let s = Math.ceil(n / t), c = Math.min((e - 1) * t + 1, n), l = Math.min(e * t, n);
	return /* @__PURE__ */ v("div", {
		className: G("flex items-center justify-between", o),
		children: [/* @__PURE__ */ v("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ _(xn, {
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
		}), /* @__PURE__ */ _(Un, {
			page: e,
			totalPages: s,
			onPageChange: i
		})]
	});
}
//#endregion
//#region src/components/ui/useFieldControl.ts
function co({ id: e, error: t, hint: n, describedBy: r, invalid: i, required: a }) {
	let o = u(), s = c(Ln), l = e ?? s?.id ?? o, d = t ? `${l}-error` : void 0, f = n ? `${l}-hint` : void 0;
	return {
		inputId: l,
		errorId: d,
		hintId: f,
		describedBy: Rn(r, s?.describedBy, f, d),
		invalid: i ?? (!!t || s?.invalid || void 0),
		required: a ?? s?.required
	};
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var lo = a(({ label: e, error: t, className: n, id: r, hint: i, controlSize: a, required: o, "aria-describedby": s, "aria-invalid": c, ...l }, u) => {
	let d = co({
		id: r,
		error: t,
		hint: i,
		describedBy: s,
		invalid: c,
		required: o
	}), { inputId: f, errorId: p, hintId: m } = d, g = an(a), [y, b] = h(!1);
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
					className: G("ui-password-input ui-sized-control bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
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
lo.displayName = "PasswordInput";
var uo = Object.freeze([
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
function fo(e, t = uo) {
	return t.every((t) => t.test(e));
}
//#endregion
//#region src/components/ui/PasswordRequirements.tsx
function po({ password: e, requirements: t = uo, showWhenEmpty: n = !1, className: r }) {
	return !n && e.length === 0 ? null : /* @__PURE__ */ _("ul", {
		"aria-label": "Password requirements",
		className: G("space-y-1", r),
		children: t.map((t) => {
			let n = t.test(e);
			return /* @__PURE__ */ v("li", {
				className: "flex items-center gap-1.5",
				children: [n ? /* @__PURE__ */ _(E, {
					"aria-hidden": "true",
					className: "text-green h-3 w-3"
				}) : /* @__PURE__ */ _(V, {
					"aria-hidden": "true",
					className: "text-text-disabled h-3 w-3"
				}), /* @__PURE__ */ v("span", {
					className: G("text-2xs", n ? "text-green" : "text-text-disabled"),
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
function mo({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ v("div", {
		className: G("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ _(Lt, {
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
function ho({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: G("ui-prose", t),
		children: e
	});
}
//#endregion
//#region src/lib/qrCode.ts
var go = class extends RangeError {
	constructor() {
		super("Text is too long to encode as a QR code"), this.name = "QrCapacityError";
	}
}, _o = {
	L: 0,
	M: 1,
	Q: 2,
	H: 3
}, vo = {
	L: 1,
	M: 0,
	Q: 3,
	H: 2
}, yo = [
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
], bo = [
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
function xo(e) {
	let t = (16 * e + 128) * e + 64;
	if (e >= 2) {
		let n = Math.floor(e / 7) + 2;
		t -= (25 * n - 10) * n - 55, e >= 7 && (t -= 36);
	}
	return t;
}
function So(e, t) {
	let n = _o[t];
	return Math.floor(xo(e) / 8) - yo[n][e] * bo[n][e];
}
function Co(e) {
	if (e === 1) return [];
	let t = Math.floor(e / 7) + 2, n = Math.floor((e * 8 + t * 3 + 5) / (t * 4 - 4)) * 2, r = [6];
	for (let i = e * 4 + 17 - 7; r.length < t; i -= n) r.splice(1, 0, i);
	return r;
}
function wo(e, t) {
	let n = 0;
	for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285, n ^= (t >>> r & 1) * e;
	return n;
}
function To(e) {
	let t = Array(e).fill(0);
	t[e - 1] = 1;
	let n = 1;
	for (let r = 0; r < e; r++) {
		for (let e = 0; e < t.length; e++) t[e] = wo(t[e], n), e + 1 < t.length && (t[e] ^= t[e + 1]);
		n = wo(n, 2);
	}
	return t;
}
function Eo(e, t) {
	let n = Array(t.length).fill(0);
	for (let r of e) {
		let e = r ^ n.shift();
		n.push(0), t.forEach((t, r) => {
			n[r] ^= wo(t, e);
		});
	}
	return n;
}
function Do(e, t, n) {
	let r = So(t, n) * 8, i = [], a = (e, t) => {
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
function Oo(e, t, n) {
	let r = _o[n], i = bo[r][t], a = yo[r][t], o = Math.floor(xo(t) / 8), s = i - o % i, c = Math.floor(o / i), l = To(a), u = [];
	for (let t = 0, n = 0; t < i; t++) {
		let r = c - a + (t < s ? 0 : 1), i = e.slice(n, n + r);
		n += r;
		let o = Eo(i, l);
		t < s && i.push(0), u.push(i.concat(o));
	}
	let d = [];
	for (let e = 0; e < u[0].length; e++) u.forEach((t, n) => {
		(e !== c - a || n >= s) && d.push(t[e]);
	});
	return d;
}
var ko = class {
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
function Ao(e, t) {
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
	let r = Co(t), i = r.length - 1;
	r.forEach((t, n) => {
		r.forEach((r, a) => {
			if (!(n === 0 && a === 0 || n === 0 && a === i || n === i && a === 0)) for (let n = -2; n <= 2; n++) for (let i = -2; i <= 2; i++) e.setFunction(t + i, r + n, Math.max(Math.abs(i), Math.abs(n)) !== 1);
		});
	}), jo(e, "M", 0), Mo(e, t);
}
function jo(e, t, n) {
	let r = vo[t] << 3 | n, i = r;
	for (let e = 0; e < 10; e++) i = i << 1 ^ (i >>> 9) * 1335;
	let a = (r << 10 | i) ^ 21522, o = (e) => (a >>> e & 1) != 0, { size: s } = e;
	for (let t = 0; t <= 5; t++) e.setFunction(8, t, o(t));
	e.setFunction(8, 7, o(6)), e.setFunction(8, 8, o(7)), e.setFunction(7, 8, o(8));
	for (let t = 9; t < 15; t++) e.setFunction(14 - t, 8, o(t));
	for (let t = 0; t < 8; t++) e.setFunction(s - 1 - t, 8, o(t));
	for (let t = 8; t < 15; t++) e.setFunction(8, s - 15 + t, o(t));
	e.setFunction(8, s - 8, !0);
}
function Mo(e, t) {
	if (t < 7) return;
	let n = t;
	for (let e = 0; e < 12; e++) n = n << 1 ^ (n >>> 11) * 7973;
	let r = t << 12 | n;
	for (let t = 0; t < 18; t++) {
		let n = (r >>> t & 1) != 0, i = e.size - 11 + t % 3, a = Math.floor(t / 3);
		e.setFunction(i, a, n), e.setFunction(a, i, n);
	}
}
function No(e, t) {
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
var Po = [
	(e, t) => (e + t) % 2 == 0,
	(e, t) => t % 2 == 0,
	(e) => e % 3 == 0,
	(e, t) => (e + t) % 3 == 0,
	(e, t) => (Math.floor(e / 3) + Math.floor(t / 2)) % 2 == 0,
	(e, t) => e * t % 2 + e * t % 3 == 0,
	(e, t) => (e * t % 2 + e * t % 3) % 2 == 0,
	(e, t) => ((e + t) % 2 + e * t % 3) % 2 == 0
];
function Fo(e, t) {
	for (let n = 0; n < e.size; n++) for (let r = 0; r < e.size; r++) !e.isFunction[n][r] && Po[t](r, n) && (e.modules[n][r] = !e.modules[n][r]);
}
var Io = [[
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
function Lo(e) {
	let t = e.length, n = (t, n, r) => r ? e[t][n] : e[n][t], r = 0;
	for (let e of [!1, !0]) for (let i = 0; i < t; i++) {
		let a = 1;
		for (let o = 1; o <= t; o++) o < t && n(o, i, e) === n(o - 1, i, e) ? a++ : (a >= 5 && (r += 3 + (a - 5)), a = 1);
		for (let a = 0; a + 11 <= t; a++) for (let t of Io) t.every((t, r) => n(a + r, i, e) === t) && (r += 40);
	}
	for (let n = 0; n < t - 1; n++) for (let i = 0; i < t - 1; i++) {
		let t = e[n][i];
		t === e[n][i + 1] && t === e[n + 1][i] && t === e[n + 1][i + 1] && (r += 3);
	}
	let i = e.reduce((e, t) => e + t.filter(Boolean).length, 0) * 100 / (t * t);
	return r += Math.floor(Math.abs(i - 50) / 5) * 10, r;
}
function Ro(e, t = "M") {
	if (!Object.hasOwn(_o, t)) throw RangeError(`Invalid QR error correction level "${t}"; expected L, M, Q or H`);
	let n = new TextEncoder().encode(e), r = 1;
	for (; r <= 40 && !(4 + (r <= 9 ? 8 : 16) + n.length * 8 <= So(r, t) * 8); r++);
	if (r > 40) throw new go();
	let i = Oo(Do(n, r, t), r, t), a = new ko(r * 4 + 17);
	Ao(a, r), No(a, i);
	let o = 0, s = Infinity;
	for (let e = 0; e < 8; e++) {
		Fo(a, e), jo(a, t, e);
		let n = Lo(a.modules);
		n < s && (s = n, o = e), Fo(a, e);
	}
	return Fo(a, o), jo(a, t, o), {
		size: a.size,
		version: r,
		modules: a.modules
	};
}
//#endregion
//#region src/components/ui/QrCode.tsx
function zo({ value: e, errorCorrection: t = "M", size: n = 160, margin: r = 4, "aria-label": i = "QR code", fallback: a = null, className: o }) {
	let s = p(() => {
		if (!e) return null;
		try {
			return Ro(e, t);
		} catch (e) {
			if (e instanceof go) return "too-long";
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
		className: G("block", o),
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
function Bo({ value: e, onChange: t, placeholder: n = "Search...", className: r }) {
	return /* @__PURE__ */ v("div", {
		className: G("relative", r),
		children: [/* @__PURE__ */ _(B, { className: "text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" }), /* @__PURE__ */ _("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: G("bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none")
		})]
	});
}
//#endregion
//#region src/components/ui/Select.tsx
var Vo = a(({ label: e, error: t, options: n, className: r, id: i, hint: a, controlSize: o, required: s, "aria-describedby": c, "aria-invalid": l, ...u }, d) => {
	let f = co({
		id: i,
		error: t,
		hint: a,
		describedBy: c,
		invalid: l,
		required: s
	}), { inputId: p, errorId: m, hintId: h } = f, g = an(o);
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
					className: G("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", t ? "border-red" : "border-border", r),
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
Vo.displayName = "Select";
//#endregion
//#region src/components/ui/SettingRow.tsx
function Ho({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ v("div", {
		className: G("border-border flex items-center justify-between border-b py-3", r),
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
function Uo({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: o = "w-[360px]", className: s, contentClassName: c }) {
	let u = an(), d = m(null);
	return ft(d, e), l(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = "";
		};
	}, [e, t]), e ? H(/* @__PURE__ */ v("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ _("div", {
			className: "bg-bg-overlay animate-fade-in absolute inset-0",
			onClick: t
		}), /* @__PURE__ */ v("div", {
			ref: d,
			className: G("bg-bg-secondary border-border absolute inset-y-0 flex flex-col shadow-lg", o, a === "right" ? "animate-slide-in-right right-0 border-l" : "animate-slide-in-left left-0 border-r", s),
			style: { maxWidth: "calc(100vw - 2rem)" },
			role: "dialog",
			"aria-modal": "true",
			"aria-label": typeof n == "string" ? n : "Panel",
			children: [
				/* @__PURE__ */ v("div", {
					"data-control-size": u,
					className: "ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5",
					children: [n && /* @__PURE__ */ _("h3", {
						className: "text-text-primary truncate text-sm font-medium",
						children: n
					}), /* @__PURE__ */ _(fn, {
						type: "button",
						variant: "icon",
						size: "sm",
						onClick: t,
						className: "ml-auto shrink-0",
						"aria-label": "Close",
						children: /* @__PURE__ */ _(V, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ _("div", {
					className: G("ui-surface-body flex-1 overflow-y-auto p-3", c),
					children: r
				}),
				i && /* @__PURE__ */ _("div", {
					"data-control-size": u,
					className: "ui-bar border-border bg-bg-primary/50 flex shrink-0 items-center gap-2 border-t px-3 py-2.5",
					children: i
				})
			]
		})]
	}), document.body) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function Wo({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ _("div", {
		className: G("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function Go({ children: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: G("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var Ko = Object.assign(Wo, { Main: Go }), qo = {
	active: "bg-green",
	inactive: "bg-text-tertiary",
	pending: "bg-yellow animate-pulse-subtle",
	error: "bg-red"
}, Jo = {
	active: "text-green",
	inactive: "text-text-tertiary",
	pending: "text-yellow",
	error: "text-red"
};
function Yo({ status: e, label: t, className: n }) {
	return /* @__PURE__ */ v("span", {
		className: G("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ _("span", { className: G("h-2 w-2 rounded-full", qo[e]) }), t && /* @__PURE__ */ _("span", {
			className: G("text-xs", Jo[e]),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function Xo({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ _("div", {
		className: G("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ v("div", {
			className: G("flex items-center", r < e.length - 1 && "flex-1"),
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ _("div", {
						className: G("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ _(E, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ _("span", {
						className: G("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ _("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ _("div", { className: G("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function Zo({ tabs: e, defaultTab: t, value: n, onChange: r, className: i }) {
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
				className: G("font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]", "hover:text-text-primary", e.key === c ? "text-accent" : "text-text-tertiary"),
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
var Qo = a(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, hint: s, controlSize: c, required: l, "aria-describedby": u, "aria-invalid": d, ...f }, p) => {
	let m = co({
		id: o,
		error: t,
		hint: s,
		describedBy: u,
		invalid: d,
		required: l
	}), { inputId: h, errorId: g, hintId: y } = m, b = an(c), x = typeof i == "string" ? i.length : 0;
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
				className: G("ui-sized-control bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
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
Qo.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var $o = a(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, hint: o, controlSize: s, required: c, "aria-describedby": l, "aria-invalid": u, ...d }, f) => {
	let p = co({
		id: i,
		error: t,
		hint: o,
		describedBy: l,
		invalid: u,
		required: c
	}), { inputId: m, errorId: h, hintId: g } = p, y = an(s);
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
					className: G("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
					...d
				})]
			})
		]
	});
});
$o.displayName = "TextInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function es({ items: e, className: t }) {
	return /* @__PURE__ */ _("div", {
		className: G("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ v("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ v("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ _("div", { className: G(t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ _("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ v("div", {
				className: G("pb-4", n === e.length - 1 && "pb-0"),
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
var ts = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function ns(e, t) {
	return e ? `${e} ${t}` : t;
}
function rs({ content: e, placement: t = "top", children: r }) {
	let [i, a] = h(!1), s = u();
	return /* @__PURE__ */ v("div", {
		className: "relative inline-flex",
		onMouseEnter: () => a(!0),
		onMouseLeave: () => a(!1),
		onFocus: () => a(!0),
		onBlur: () => a(!1),
		children: [o(r) ? n(r, { "aria-describedby": ns(r.props["aria-describedby"], s) }) : r, i && /* @__PURE__ */ _("div", {
			id: s,
			className: G("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", ts[t]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function is({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a }) {
	return /* @__PURE__ */ v("div", {
		className: G("flex items-center justify-between gap-3", r),
		children: [/* @__PURE__ */ _("div", {
			className: G("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), t && /* @__PURE__ */ _("div", {
			className: G("flex items-center gap-1.5", a),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/UploadDropzone.tsx
var as = a(function({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, multiple: r, disabled: i, onChange: a, onFilesChange: o, className: s, id: c, "aria-describedby": l, ...f }, p) {
	let h = m(null);
	d(p, () => h.current, []);
	let g = u(), y = `${c ?? g}-description`;
	return /* @__PURE__ */ v("label", {
		className: G("ui-upload-dropzone border-border hover:border-border-strong relative block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", i ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
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
}), os = r({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function ss() {
	return c(os);
}
//#endregion
//#region src/lib/formatDate.ts
var cs = [
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
];
function ls(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function us(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function ds(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${cs[e.getMonth()]} ${e.getDate()}`;
	return e.getFullYear() === t.getFullYear() ? o : `${o}, ${e.getFullYear()}`;
}
//#endregion
//#region src/providers/SettingsProvider.tsx
var fs = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, ps = {
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
}, ms = "leonardaustin-ui-settings", hs = new Set(Object.keys(ps)), gs = new Set(Object.keys(Ot)), _s = new Set(Object.keys(fs)), vs = new Set([
	"light",
	"dark",
	"system"
]);
function ys(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : Math.min(n, Math.max(t, e));
}
function bs(e) {
	let t = {};
	if (hs.has(e.accentColor) && (t.accentColor = e.accentColor), vs.has(e.colorMode) && (t.colorMode = e.colorMode), gs.has(e.preferredDarkTheme) && !Ct(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), gs.has(e.preferredLightTheme) && Ct(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = ys(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!gs.has(t) || !r || typeof r != "object") continue;
			let e = r, i = Ot[t];
			n[t] = {
				uiFont: _s.has(e.uiFont) ? e.uiFont : i.uiFont,
				headingFont: _s.has(e.headingFont) ? e.headingFont : i.headingFont,
				proseFont: _s.has(e.proseFont) ? e.proseFont : i.proseFont,
				controlFont: _s.has(e.controlFont) ? e.controlFont : i.controlFont,
				labelFont: _s.has(e.labelFont) ? e.labelFont : i.labelFont,
				navigationFont: _s.has(e.navigationFont) ? e.navigationFont : i.navigationFont,
				dataFont: _s.has(e.dataFont) ? e.dataFont : i.dataFont,
				codeFont: _s.has(e.codeFont) ? e.codeFont : i.codeFont,
				fontSize: ys(e.fontSize, 11, 18, i.fontSize),
				borderRadius: ys(e.borderRadius, 0, 16, i.borderRadius),
				borderWidth: ys(e.borderWidth, 1, 3, i.borderWidth),
				tracking: ys(e.tracking, 0, .3, i.tracking),
				lineHeight: ys(e.lineHeight, 1.2, 2, i.lineHeight),
				density: ys(e.density, .18, .32, i.density)
			};
		}
		t.themeOverrides = n;
	}
	return t;
}
var xs = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function Ss(e, t) {
	let n = {
		...xs,
		...bs(t ?? {})
	};
	if (typeof localStorage > "u") return n;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...n,
			...bs(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return n;
}
function Cs(e, t) {
	let n = Ot[e] ?? Ot.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function ws(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function Ts({ children: e, storageKey: t = ms, initialSettings: n, forcedTheme: r }) {
	let [i, a] = h(() => Ss(t, n)), [o, c] = h(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
	]), [d, f] = h(() => Cs(u, i.themeOverrides));
	l(() => {
		f(Cs(u, i.themeOverrides));
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
		let e = document.documentElement, t = ps[i.accentColor];
		e.style.setProperty("--accent", t.base), e.style.setProperty("--accent-hover", t.hover), e.style.setProperty("--accent-active", t.active), e.style.setProperty("--accent-muted", t.muted), e.style.setProperty("--accent-subtle", t.subtle);
	}, [i.accentColor]), l(() => {
		document.documentElement.classList.toggle("reduced-motion", i.reducedMotion);
	}, [i.reducedMotion]), l(() => {
		let e = document.documentElement, t = d.borderRadius;
		e.style.fontSize = `${d.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", fs[d.uiFont]), e.style.setProperty("--font-heading", fs[d.headingFont]), e.style.setProperty("--font-prose", fs[d.proseFont]), e.style.setProperty("--font-control", fs[d.controlFont]), e.style.setProperty("--font-label", fs[d.labelFont]), e.style.setProperty("--font-navigation", fs[d.navigationFont]), e.style.setProperty("--font-data", fs[d.dataFont]), e.style.setProperty("--font-code", fs[d.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${d.borderWidth}px`), e.style.setProperty("--ui-tracking", `${d.tracking}em`), e.style.setProperty("--ui-line-height", String(d.lineHeight)), e.style.setProperty("--ui-density", `${d.density}rem`);
	}, [d]);
	let g = p(() => Cs(u, i.themeOverrides), [u, i.themeOverrides]), v = u in i.themeOverrides, y = !ws(d, g), b = s(() => {
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
		delete e[u], m({ themeOverrides: e }), f(Ot[u] ?? Ot.dark);
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
	return /* @__PURE__ */ _(Mt.Provider, {
		value: S,
		children: e
	});
}
//#endregion
//#region src/providers/ThemeProvider.tsx
var Es = {
	dark: "",
	light: "theme-light",
	lightInverted: "theme-light-inverted",
	monokai: "theme-monokai",
	solarized: "theme-solarized",
	cyberBrutalDark: "theme-cyber-brutal-dark",
	cyberBrutalLight: "theme-cyber-brutal-light",
	hashiTheme: "theme-hashi"
};
function Ds({ children: e }) {
	let { resolvedTheme: t } = c(Mt);
	return l(() => {
		let e = document.documentElement;
		Object.values(Es).forEach((t) => {
			t && e.classList.remove(t);
		});
		let n = Es[t];
		n && e.classList.add(n);
	}, [t]), /* @__PURE__ */ _(os.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
//#region src/components/ui/FormField.tsx
function Os({ id: e, label: t, hint: n, error: r, required: i, optionalLabel: a, children: o, className: s, ...c }) {
	let l = u(), d = e ?? l, f = n ? `${d}-hint` : void 0, p = r ? `${d}-error` : void 0, m = {
		id: d,
		"aria-describedby": Rn(f, p),
		"aria-invalid": !!r || void 0,
		required: i
	};
	return /* @__PURE__ */ _(Ln.Provider, {
		value: {
			id: d,
			describedBy: Rn(f, p),
			invalid: !!r,
			required: i
		},
		children: /* @__PURE__ */ v("div", {
			...c,
			className: G("flex flex-col gap-1.5", s),
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
function ks({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: G("text-text-secondary text-xs", e)
	});
}
function As({ className: e, ...t }) {
	return /* @__PURE__ */ _("p", {
		...t,
		className: G("text-red text-xs", e)
	});
}
//#endregion
//#region src/components/ui/Fieldset.tsx
function js({ id: e, legend: t, hint: n, error: r, children: i, className: a, "aria-describedby": o, ...s }) {
	let c = u(), l = e ?? c, d = n ? `${l}-hint` : void 0, f = r ? `${l}-error` : void 0, p = Rn(o, d, f);
	return /* @__PURE__ */ v("fieldset", {
		...s,
		id: l,
		"aria-describedby": p,
		className: G("min-w-0 space-y-2", a),
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
			/* @__PURE__ */ _(Ln.Provider, {
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
var Ms = a(({ label: e, description: t, controlSize: n, className: r, id: i, "aria-describedby": a, "aria-invalid": o, ...s }, l) => {
	let d = u(), f = an(n), p = c(Ln), m = i ?? p?.id ?? d, h = t ? `${m}-description` : void 0;
	return /* @__PURE__ */ v("label", {
		className: G("ui-choice flex items-start gap-2.5", r),
		"data-control-size": f,
		children: [/* @__PURE__ */ _("input", {
			...s,
			ref: l,
			id: m,
			type: "radio",
			"aria-invalid": o ?? (p?.invalid || void 0),
			"aria-describedby": Rn(a, p?.describedBy, h),
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
Ms.displayName = "Radio";
function Ns({ name: e, id: t, options: n, value: r, onChange: i, required: a, disabled: o, controlSize: s, ...c }) {
	let l = u(), d = t ?? l;
	return /* @__PURE__ */ _(js, {
		...c,
		id: d,
		disabled: o,
		children: n.map((t, n) => /* @__PURE__ */ _(Ms, {
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
var Ps = Object.assign(Ms, { Group: Ns }), Fs = {
	pending: "Pending",
	uploading: "Uploading",
	processing: "Processing",
	ready: "Ready",
	error: "Upload failed"
};
function Is(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function Ls({ name: e, size: t, status: n = "ready", statusLabel: r, error: i, onRetry: a, onRemove: o, onDownload: s, downloadHref: c, actionsDisabled: l, className: u, ...d }) {
	return /* @__PURE__ */ v("li", {
		...d,
		className: G("ui-attachment-item border-border flex items-center justify-between gap-3 rounded-md border p-3", u),
		children: [/* @__PURE__ */ v("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ _("p", {
					className: "text-text-primary text-xs",
					children: e
				}),
				t !== void 0 && /* @__PURE__ */ _("p", {
					className: "text-text-tertiary text-2xs",
					children: Is(t)
				}),
				/* @__PURE__ */ v("div", {
					role: "status",
					"aria-atomic": "true",
					className: G("text-2xs", n === "error" ? "text-red" : "text-text-secondary"),
					children: [
						e,
						": ",
						i ?? r ?? Fs[n]
					]
				})
			]
		}), /* @__PURE__ */ v("div", {
			className: "flex items-center gap-1.5",
			children: [
				a && /* @__PURE__ */ _(fn, {
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
				s && /* @__PURE__ */ _(fn, {
					type: "button",
					size: "sm",
					disabled: l,
					onClick: s,
					"aria-label": `Download ${e}`,
					children: "Download"
				}),
				o && /* @__PURE__ */ _(fn, {
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
function Rs({ children: e, className: t, "aria-label": n = "Attachments", ...r }) {
	return /* @__PURE__ */ _("ul", {
		...r,
		"aria-label": n,
		className: G("space-y-2", t),
		children: e
	});
}
//#endregion
//#region src/lib/dateParts.ts
function zs(e, { required: t = !1, minYear: n = 1900, maxYear: r = 2100 } = {}) {
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
function Bs({ value: e, onChange: t, label: n, hint: r, error: i, id: a, name: o, disabled: s, required: c, className: d, inputProps: f, minYear: p = 1900, maxYear: g = 2100 }) {
	let y = u(), b = m({}), [x, S] = h(!1);
	if (!Number.isInteger(p) || !Number.isInteger(g) || p < 1 || g > 9999 || p > g) throw RangeError("DatePartsInput requires year bounds between 1 and 9999, with minYear <= maxYear");
	let C = zs(e, {
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
		className: G("space-y-2", d),
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
					children: [/* @__PURE__ */ _($o, {
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
function Vs({ className: e, width: t, height: n, style: r, ...i }) {
	return /* @__PURE__ */ _("div", {
		...i,
		"aria-hidden": "true",
		className: G("ui-skeleton rounded-md bg-bg-tertiary", e),
		style: {
			width: t,
			height: n,
			...r
		}
	});
}
//#endregion
//#region src/components/ui/NavTabs.tsx
function Hs({ items: e, activeKey: t, renderLink: n, className: r, "aria-label": i = "Sections", ...a }) {
	return /* @__PURE__ */ _("nav", {
		...a,
		"aria-label": i,
		className: G("ui-nav-tabs border-border border-b", r),
		children: /* @__PURE__ */ _("ul", {
			className: "ui-nav-tabs-list",
			children: e.map((e) => {
				let { key: r, label: i, badge: a, ...o } = e, s = {
					...o,
					"aria-current": r === t ? "page" : void 0,
					className: G("ui-nav-tab px-3 py-2 text-xs font-medium", r === t ? "text-accent" : "text-text-secondary", e.className),
					children: /* @__PURE__ */ v(g, { children: [i, a !== void 0 && /* @__PURE__ */ _("span", {
						className: "bg-bg-tertiary rounded-md px-1.5 text-2xs",
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
function Us({ value: e, maxLength: t, announcementDelay: n = 1e3, className: r, ...i }) {
	let a = t - e.length, o = Math.abs(a), s = `${o} ${o === 1 ? "character" : "characters"} ${a < 0 ? "over the limit" : "remaining"}`, [c, u] = h(s);
	return l(() => {
		let e = setTimeout(() => u(s), n);
		return () => clearTimeout(e);
	}, [s, n]), /* @__PURE__ */ v("p", {
		...i,
		className: G("text-2xs", a < 0 ? "text-red" : "text-text-tertiary", r),
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
function Ws({ size: e, children: t }) {
	return /* @__PURE__ */ _(rn.Provider, {
		value: e,
		children: t
	});
}
//#endregion
//#region src/components/ui/ProgressBar.tsx
var Gs = a(function({ label: e, value: t, min: n = 0, max: r = 100, color: i = "accent", striped: a = !1, animated: o = !1, id: s, className: c, ...l }, d) {
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
				className: G("ui-progress-bar", c),
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
function Ks({ as: e, gap: t = 0, align: n = "stretch", justify: r = "start", className: a, style: o, ...s }) {
	return i(e ?? "div", {
		...s,
		className: G("ui-stack", a),
		style: {
			...Ja(t),
			"--ui-align": Ya(n),
			"--ui-justify": Xa(r),
			...o
		}
	});
}
//#endregion
//#region src/components/ui/Inline.tsx
function qs({ as: e, gap: t = 0, gapX: n, gapY: r, align: a = "stretch", justify: o = "start", wrap: s = !1, inline: c = !1, stackBelow: l, className: u, style: d, ...f }) {
	return i(e ?? "div", {
		...f,
		className: G("ui-inline", u),
		style: {
			...Ja(t, n, r),
			"--ui-align": Ya(a),
			"--ui-justify": Xa(o),
			"--ui-wrap": s ? "wrap" : "nowrap",
			"--ui-display": c ? "inline-flex" : "flex",
			...Ka("direction", l ? {
				base: "column",
				[l]: "row"
			} : "row", (e) => e, "row"),
			...d
		}
	});
}
//#endregion
//#region src/components/ui/Grid.tsx
function Js({ as: e, columns: t = 1, gap: n = 0, gapX: r, gapY: a, align: o = "stretch", justify: s = "stretch", className: c, style: l, ...u }) {
	return i(e ?? "div", {
		...u,
		className: G("ui-grid", c),
		style: {
			...Ja(n, r, a),
			...Ka("columns", t, qa, 1),
			"--ui-align": o,
			"--ui-justify": s,
			...l
		}
	});
}
//#endregion
//#region src/components/ui/GridItem.tsx
function Ys({ as: e, span: t = 1, className: n, style: r, ...a }) {
	return i(e ?? "div", {
		...a,
		className: G("ui-grid-item", n),
		style: {
			...Ka("span", t, (e) => `span ${e} / span ${e}`, 1),
			...r
		}
	});
}
//#endregion
//#region src/components/tables/Table.tsx
function Xs({ caption: e, captionHidden: t = !1, stickyHeader: n = !1, maxHeight: r, wrapperClassName: i, wrapperProps: a, className: o, children: s, ...c }) {
	return /* @__PURE__ */ _("div", {
		...a,
		className: G("ui-table-wrap", a?.className, i),
		style: {
			maxHeight: r,
			...r ? { overflow: "auto" } : {},
			...a?.style
		},
		children: /* @__PURE__ */ v("table", {
			...c,
			className: G("ui-table", n && "ui-table-sticky", o),
			children: [e != null && /* @__PURE__ */ _("caption", {
				className: G(t && "sr-only"),
				children: e
			}), s]
		})
	});
}
function Zs({ className: e, ...t }) {
	return /* @__PURE__ */ _("thead", {
		...t,
		className: G("ui-table-head", e)
	});
}
function Qs({ className: e, ...t }) {
	return /* @__PURE__ */ _("tbody", {
		...t,
		className: G("ui-table-body", e)
	});
}
function $s({ selected: e, interactive: t = !1, className: n, ...r }) {
	return /* @__PURE__ */ _("tr", {
		...r,
		"aria-selected": e ?? r["aria-selected"],
		className: G("ui-table-row", t && "ui-table-interactive", n)
	});
}
function ec({ numeric: e = !1, align: t, sort: n, scope: r = "col", className: i, style: a, ...o }) {
	return /* @__PURE__ */ _("th", {
		...o,
		scope: r,
		"aria-sort": n ?? o["aria-sort"],
		className: G("ui-table-header-cell", e && "ui-table-numeric", i),
		style: {
			...t ? { textAlign: t } : {},
			...a
		}
	});
}
function tc({ numeric: e = !1, align: t, nowrap: n = !1, className: r, style: i, ...a }) {
	return /* @__PURE__ */ _("td", {
		...a,
		className: G("ui-table-cell", e && "ui-table-numeric", n && "ui-table-nowrap", r),
		style: {
			...t ? { textAlign: t } : {},
			...i
		}
	});
}
function nc({ colSpan: e, children: t, className: n, ...r }) {
	return /* @__PURE__ */ _("tr", {
		...r,
		className: G("ui-table-empty-row", n),
		children: /* @__PURE__ */ _("td", {
			colSpan: e,
			className: "ui-table-empty-cell",
			children: t
		})
	});
}
//#endregion
export { qn as Alert, Pn as AppShell, He as AreaChart, Ls as AttachmentItem, Rs as AttachmentList, Jn as AuthCard, Fn as AuthLayout, Yn as AuthorByline, Lt as Avatar, In as BackLink, Qn as Badge, Ge as BarChart, ut as BottomNav, tn as Breadcrumbs, fn as Button, pt as COMMAND_PALETTE_EVENT, Bi as Calendar, qi as CalendarGrid, Ji as Card, Us as CharacterCount, zn as Checkbox, ea as CodeInput, Hn as ColumnPicker, ta as Combobox, vt as CommandPalette, Ws as ControlSizeProvider, ji as DEFAULT_CALENDAR_LABELS, mt as DEFAULT_COMMAND_PALETTE_SHORTCUT, na as DangerZone, Bs as DatePartsInput, ia as DatePicker, ca as DateRangePicker, ma as DateTimePicker, ya as DetailPanel, Ia as Dialog, La as DialogActions, Ra as DividerLabel, qe as DonutChart, za as DropdownMenu, Ba as EmptyState, Va as ErrorBoundary, As as FieldError, ks as FieldHint, js as Fieldset, Bn as FilterButton, Ha as FilterDropdown, Os as FormField, Js as Grid, Ys as GridItem, qs as Inline, Ua as Kbd, Ga as LoadingSpinner, Za as MetadataGrid, Qa as MetricCard, bt as MobileDrawer, Hs as NavTabs, ro as OAuthButton, io as PageHeader, ao as PageSection, Un as Pagination, so as PaginationBar, lo as PasswordInput, po as PasswordRequirements, mo as ProfileHeader, Gs as ProgressBar, ho as ProseContent, go as QrCapacityError, zo as QrCode, Je as RadarChart, Ye as RadialBarChart, Ps as Radio, Mi as RadioPill, Gn as ResourceTable, Bo as SearchInput, pn as SectionHeader, Vo as Select, xn as SelectDropdown, Ho as SettingRow, Mt as SettingsContext, Ts as SettingsProvider, Uo as SideSheet, $t as Sidebar, Vs as Skeleton, Sn as Slider, Xe as SparkLine, Ko as SplitPaneLayout, Ks as Stack, rt as StackedBarChart, Yo as StatusDot, Xo as StepProgress, Tn as THEME_MENU_EVENT, Xs as Table, Qs as TableBody, tc as TableCell, nc as TableEmptyRow, Zs as TableHead, ec as TableHeaderCell, $s as TableRow, Zo as Tabs, $o as TextInput, Qo as Textarea, os as ThemeContext, On as ThemeMenu, Cn as ThemePreview, Ds as ThemeProvider, es as Timeline, Bt as ToastProvider, wn as Toggle, is as Toolbar, rs as Tooltip, Mn as TopBar, as as UploadDropzone, ot as VerticalBarChart, At as accentItems, Q as addDays, or as addMinutes, sr as addMonths, tr as calendarDateFromParts, Z as calendarDateParts, G as cn, Xr as createCalendarDateMath, Tt as darkThemes, mr as dateAtMinutes, uo as defaultPasswordRequirements, dr as differenceInDays, Ro as encodeQrCode, Ur as expandAvailabilityRules, kt as fontOptions, us as formatDateLong, ls as formatDateShort, Mr as formatRangeTitle, ds as formatRelative, Or as formatTime, gr as formatTimeOfDay, kr as formatTimeRange, vr as fromDateKey, Hr as getActiveResourceIds, wr as getViewRange, Sr as getVisibleDays, ct as handleAppShellNavigate, Yr as isAllDayLike, st as isAppShellPathActive, Ct as isLightTheme, ur as isSameDay, xr as isTimeGridView, Lr as layoutOverlaps, wt as lightThemes, gt as matchesCommandPaletteShortcut, fo as meetsPasswordRequirements, fr as minutesOfDay, lt as navigateToPath, ht as openCommandPalette, En as openThemeMenu, hr as parseTime, Nr as rangesOverlap, Tr as shiftDate, br as snapDate, yr as snapMinutes, Wn as sortRows, ar as startOfDay, lr as startOfMonth, cr as startOfWeek, Ot as themeDefaults, xt as themeItems, _r as toDateKey, nn as useApplyTheme, an as useControlSize, jt as useDismiss, ft as useFocusTrap, Nt as useSettings, ss as useTheme, zt as useToast };
