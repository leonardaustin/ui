import { Component as e, Fragment as t, cloneElement as n, createContext as r, forwardRef as i, isValidElement as a, useCallback as o, useContext as s, useEffect as c, useId as l, useLayoutEffect as u, useMemo as d, useRef as f, useState as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
import { Accessibility as _, AlertTriangle as v, ArrowDown as y, ArrowLeft as b, ArrowUp as x, BookOpen as S, Calendar as C, Check as w, CheckCircle2 as T, ChevronDown as E, ChevronLeft as D, ChevronRight as O, ChevronsUpDown as k, Columns3 as A, Eye as j, EyeOff as M, Inbox as N, Info as P, Loader2 as F, LogOut as ee, Menu as I, Minus as te, Monitor as L, Moon as R, Palette as ne, PanelLeft as re, PanelLeftDashed as ie, Search as z, Settings as ae, Sun as oe, UploadCloud as se, X as B, XCircle as ce, Zap as le } from "lucide-react";
import { createPortal as ue } from "react-dom";
//#region src/lib/cn.ts
function de(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = de(n);
		e && (t = t ? `${t} ${e}` : e);
	}
	else for (let n in e) e[n] && (t = t ? `${t} ${n}` : n);
	return t;
}
var fe = new Set([
	"block",
	"contents",
	"flex",
	"grid",
	"hidden",
	"inline",
	"inline-block",
	"inline-flex",
	"table"
]), pe = new Set([
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
]), me = new Set([
	"text-center",
	"text-left",
	"text-right"
]), he = new Set(["lowercase", "uppercase"]), ge = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), _e = {
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
}, ve = {
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
}, ye = {
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
}, be = {
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
}, xe = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function V(...e) {
	return Se(de(e));
}
function Se(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = Ce(r);
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
			r && r.keys.size > 0 && Me(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function Ce(e) {
	let t = we(e), n = t.pop() ?? e, r = n.startsWith("!"), i = Te(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = Ee(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function we(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function Te(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function Ee(e) {
	let t = De(e);
	if (t) return [..._e[t]];
	let n = Oe(e);
	if (n) return [...ve[n]];
	let r = ke(e);
	if (r) return [...ye[r]];
	if (fe.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (xe.has(e)) return ["border-style"];
	let i = Ae(e);
	return i ? [...be[i]] : e === "rounded" || e.startsWith("rounded-") ? ["border-radius"] : e.startsWith("bg-") ? ["background"] : pe.has(e) ? ["font-size"] : me.has(e) ? ["text-align"] : he.has(e) ? ["text-transform"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : ge.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" ? ["flex-direction"] : e === "flex-wrap" ? ["flex-wrap"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-") ? ["gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : [];
}
function De(e) {
	return je(e, _e);
}
function Oe(e) {
	return je(e, ve);
}
function ke(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function Ae(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function je(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function Me(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/components/charts/chartUtils.ts
var Ne = {
	"text-accent": "var(--accent)",
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-red": "var(--red)",
	"text-yellow": "var(--yellow)"
};
function H(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function U(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function W(e) {
	return e ? Ne[e] ?? e : "var(--accent)";
}
function Pe(e, t) {
	if (e <= 0 || t <= 0) return [];
	if (e === 1 || t === 1) return [0];
	let n = Math.min(e, Math.max(2, Math.floor(t))), r = (e - 1) / (n - 1), i = /* @__PURE__ */ new Set();
	for (let e = 0; e < n; e += 1) i.add(Math.round(e * r));
	return i.add(e - 1), Array.from(i).sort((e, t) => e - t);
}
function G(e) {
	return Number.isFinite(e) ? Math.max(0, e) : 0;
}
function Fe(e, t) {
	let n = String(e ?? "");
	return t === void 0 || t <= 0 || n.length <= t ? n : t <= 3 ? n.slice(0, t) : `${n.slice(0, t - 3)}...`;
}
function Ie(e, t = 10) {
	let n = 0;
	for (let r of e) r === " " ? n += t * .32 : /[A-Z0-9]/.test(r) ? n += t * .62 : /[il.,:;|'`]/.test(r) ? n += t * .28 : /[MW@#%&]/.test(r) ? n += t * .82 : n += t * .54;
	return Math.ceil(n);
}
function Le(e, { maxWidth: t = 220, minWidth: n = 72, paddingX: r = 20 } = {}) {
	return H(e.reduce((e, t) => Math.max(e, Ie(t, 11)), 0) + r, n, t);
}
function Re(e, t, { boundsHeight: n, boundsWidth: r, height: i, margin: a = 0, offset: o = 8, width: s }) {
	let c = Math.max(1, Math.min(s, r - a * 2)), l = Math.max(1, Math.min(i, n - a * 2)), u = Math.max(a, r - c - a), d = Math.max(a, n - l - a), f = H(e - c / 2, a, u), p = t - l - o, m = p >= a ? "above" : "below";
	return {
		height: l,
		placement: m,
		width: c,
		x: f,
		y: m === "above" ? p : H(t + o, a, d)
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
var K = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
}, Be = 600;
function Ve(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function He({ data: e, height: t = 240, minValue: n, maxValue: r, startAtZero: i = !1, valueFormatter: a, tooltipValueFormatter: o, xLabelCount: s = 5, ariaLabel: c = "Area chart", className: u }) {
	let d = l(), _ = f(null), [v, y] = p(null), b = Math.max(K.top + K.bottom + 1, t), x = Be - K.left - K.right, S = Math.max(1, b - K.top - K.bottom), C = e.length > 0, w = e[0]?.value ?? 0, T = e[0]?.value ?? 0;
	for (let t of e) t.value < w && (w = t.value), t.value > T && (T = t.value);
	let E = n ?? w, D = r ?? T;
	if (i && n === void 0 && w >= 0 && (E = 0), E === D) {
		if (i || n !== void 0 || r !== void 0) {
			let e = Ve(T);
			n === void 0 && (E = i && w >= 0 ? 0 : w >= 0 ? Math.max(0, w - e) : w - e), r === void 0 && (D = T + e);
		}
		E === D && (D = E + 1);
	}
	let O = D - E, k = a ?? U, A = o ?? a ?? ((e) => e.toLocaleString());
	function j(t) {
		return K.left + t / Math.max(e.length - 1, 1) * x;
	}
	function M(e) {
		return K.top + S - (e - E) / O * S;
	}
	let N = e.map((e, t) => `${j(t)},${M(e.value)}`).join(" "), P = C ? [
		`${j(0)},${K.top + S}`,
		...e.map((e, t) => `${j(t)},${M(e.value)}`),
		`${j(e.length - 1)},${K.top + S}`
	].join(" ") : "", F = Pe(e.length, s);
	function ee(t) {
		let n = _.current;
		if (!n || e.length === 0) return;
		let r = n.getBoundingClientRect();
		if (r.width <= 0) return;
		let i = ((t.clientX - r.left) / r.width * Be - K.left) / x, a = Math.round(i * (e.length - 1)), o = Math.max(0, Math.min(e.length - 1, a));
		y({
			x: j(o),
			y: M(e[o].value),
			index: o
		});
	}
	function I(t) {
		y({
			x: j(t),
			y: M(e[t].value),
			index: t
		});
	}
	function te() {
		y(null);
	}
	return /* @__PURE__ */ g("svg", {
		ref: _,
		width: "100%",
		viewBox: `0 0 ${Be} ${b}`,
		onPointerMove: ee,
		onPointerLeave: te,
		className: V("select-none", u),
		role: "img",
		"aria-label": c,
		children: [
			/* @__PURE__ */ h("defs", { children: /* @__PURE__ */ g("linearGradient", {
				id: d,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ h("stop", {
					offset: "0%",
					stopColor: "var(--accent)",
					stopOpacity: .3
				}), /* @__PURE__ */ h("stop", {
					offset: "100%",
					stopColor: "var(--accent)",
					stopOpacity: 0
				})]
			}) }),
			/* @__PURE__ */ h("text", {
				x: K.left - 8,
				y: K.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(D)
			}),
			/* @__PURE__ */ h("text", {
				x: K.left - 8,
				y: K.top + S,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: k(E)
			}),
			/* @__PURE__ */ h("line", {
				x1: K.left,
				y1: K.top + S,
				x2: K.left + x,
				y2: K.top + S,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			C && /* @__PURE__ */ h("polygon", {
				points: P,
				fill: `url(#${d})`
			}),
			C && /* @__PURE__ */ h("polyline", {
				points: N,
				fill: "none",
				stroke: "var(--accent)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			e.map((e, t) => /* @__PURE__ */ h("circle", {
				cx: j(t),
				cy: M(e.value),
				r: 8,
				fill: "transparent",
				tabIndex: 0,
				role: "button",
				"aria-label": `${e.date}: ${A(e.value)}`,
				onFocus: () => I(t),
				onBlur: te
			}, `${e.date}-${t}-hit`)),
			F.map((t) => /* @__PURE__ */ h("text", {
				x: j(t),
				y: b - 4,
				textAnchor: "middle",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: e[t].date
			}, `${e[t].date}-${t}`)),
			v && /* @__PURE__ */ g(m, { children: [
				/* @__PURE__ */ h("line", {
					x1: v.x,
					y1: K.top,
					x2: v.x,
					y2: K.top + S,
					stroke: "var(--border-strong)",
					strokeWidth: 1,
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ h("circle", {
					cx: v.x,
					cy: v.y,
					r: 4,
					fill: "var(--accent)",
					stroke: "var(--bg-secondary)",
					strokeWidth: 2
				}),
				(() => {
					let t = e[v.index];
					if (!t) return null;
					let n = t.date, r = A(t.value), i = Re(v.x, v.y, {
						boundsHeight: b,
						boundsWidth: Be,
						height: 28,
						offset: 10,
						width: Le([n, r], {
							maxWidth: 180,
							minWidth: 90
						})
					}), a = i.x + i.width / 2;
					return /* @__PURE__ */ g(m, { children: [
						/* @__PURE__ */ h("rect", {
							x: i.x,
							y: i.y,
							width: i.width,
							height: i.height,
							rx: 4,
							fill: "var(--bg-tertiary)",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ h("text", {
							x: a,
							y: i.y + 10,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-secondary)",
							fontSize: 9,
							children: n
						}),
						/* @__PURE__ */ h("text", {
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
	let [f, m] = p(null), _ = e.length, v = Math.max(1, c), y = Math.max(0, l), b = _ > 0 ? _ * v + Math.max(0, _ - 1) * y : v, x = Math.max(1, t ?? b), S = t === void 0 ? 1 : x / b, C = v * S, w = y * S, T = Math.min(3, C / 3), E = Math.max(0, C - T * 2), D = n === void 0 ? Math.max(...e.map((e) => G(e.value)), 1) : Math.max(G(n), 1), O = Math.max(0, o), k = Math.max(0, s), A = Math.max(0, We - O - k), j = r ?? ((e) => e.toLocaleString());
	return /* @__PURE__ */ h("svg", {
		width: "100%",
		viewBox: `0 0 ${We} ${x}`,
		className: V("select-none", d),
		role: "img",
		"aria-label": u,
		children: e.map((e, t) => {
			let n = t * (C + w), r = D > 0 ? H(G(e.value), 0, D) / D * A : 0, o = f === t, s = i?.(e.label, e, t) ?? e.label, c = Fe(s, a), l = c !== s, u = j(e.value);
			return /* @__PURE__ */ g("g", {
				onMouseEnter: () => m(t),
				onMouseLeave: () => m(null),
				onPointerEnter: () => m(t),
				onPointerDown: () => m(t),
				onPointerLeave: () => m(null),
				onFocus: () => m(t),
				onBlur: () => m(null),
				className: "cursor-pointer",
				tabIndex: 0,
				role: "button",
				"aria-label": `${s}: ${u}`,
				children: [
					/* @__PURE__ */ h("rect", {
						x: 0,
						y: n,
						width: We,
						height: C,
						fill: "transparent"
					}),
					/* @__PURE__ */ g("text", {
						x: 0,
						y: n + C / 2,
						dominantBaseline: "central",
						fill: o ? "var(--text-primary)" : "var(--text-secondary)",
						fontSize: 11,
						fontWeight: o ? 600 : 400,
						style: { transition: "all 150ms" },
						children: [l && /* @__PURE__ */ h("title", { children: s }), c]
					}),
					/* @__PURE__ */ h("rect", {
						x: O,
						y: n + T,
						width: A,
						height: E,
						fill: "var(--border)",
						rx: 6,
						opacity: .5
					}),
					/* @__PURE__ */ h("rect", {
						x: O,
						y: n + T,
						width: r,
						height: E,
						fill: "var(--accent)",
						rx: 6,
						opacity: o ? 1 : Ue[t % Ue.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ h("text", {
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
	let n = e.reduce((e, t) => e + G(t.value), 0), r = 0;
	return e.map((e) => {
		let i = G(e.value), a = n > 0 ? i / n * t : 0, o = t - a, s = r / t * 360 - 90, c = s + a / t * 180, l = n > 0 ? i / n * 100 : 0;
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
	let [c, l] = p(null), u = e.reduce((e, t) => e + G(t.value), 0), d = Math.max(1, t), f = Math.max(1, Math.min(n, d - 1)), m = Math.max(.5, (d - f) / 2), _ = Ke(e, 2 * Math.PI * m), v = r ?? ((e) => e.toLocaleString()), y = i ?? ((e) => `${e.toFixed(1)}%`), b = d + 12, x = b / 2;
	return /* @__PURE__ */ g("div", {
		className: V("flex flex-col items-center gap-4", s),
		children: [/* @__PURE__ */ g("div", {
			className: "relative",
			children: [/* @__PURE__ */ g("svg", {
				width: b,
				height: b,
				viewBox: `0 0 ${b} ${b}`,
				className: "select-none",
				onMouseLeave: () => l(null),
				onPointerLeave: () => l(null),
				role: "img",
				"aria-label": o,
				children: [
					_.map((e, t) => /* @__PURE__ */ h("circle", {
						cx: x,
						cy: x,
						r: m,
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
						"aria-label": `${e.segment.name}: ${v(G(e.segment.value))} (${y(e.percentage)})`,
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					_.map((e, t) => {
						let n = c === t, r = e.midAngle * Math.PI / 180, i = n ? Math.cos(r) * 6 : 0, a = n ? Math.sin(r) * 6 : 0;
						return /* @__PURE__ */ h("circle", {
							cx: x,
							cy: x,
							r: m,
							fill: "none",
							stroke: W(e.segment.color),
							strokeWidth: n ? f + 4 : f,
							strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
							strokeLinecap: "butt",
							transform: `translate(${i} ${a}) rotate(${e.rotation} ${x} ${x})`,
							opacity: c !== null && !n ? .5 : 1,
							style: { transition: "all 150ms ease-out" },
							className: "pointer-events-none"
						}, e.segment.name);
					}),
					/* @__PURE__ */ h("text", {
						x,
						y: x - 6,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-primary)",
						fontSize: 18,
						fontWeight: 700,
						className: "pointer-events-none",
						children: v(c === null ? u : G(_[c].segment.value))
					}),
					/* @__PURE__ */ h("text", {
						x,
						y: x + 12,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-tertiary)",
						fontSize: 10,
						className: "pointer-events-none",
						children: c === null ? "Total" : _[c].segment.name
					})
				]
			}), c !== null && (() => {
				let e = _[c], t = e.midAngle * Math.PI / 180, n = m + f / 2 + 20, r = x + Math.cos(t) * n, i = x + Math.sin(t) * n, a = W(e.segment.color), o = v(G(e.segment.value)), s = y(e.percentage);
				return /* @__PURE__ */ h("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: ze({
						anchorX: r,
						anchorY: i,
						boundsHeight: b,
						boundsWidth: b,
						height: 30,
						margin: 4,
						offset: 8,
						width: Le([`${e.segment.name} ${o} ${s}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ g("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ h("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: a }
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: e.segment.name
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-primary text-xs font-semibold",
								children: o
							}),
							/* @__PURE__ */ g("span", {
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
		}), a && /* @__PURE__ */ h("div", {
			className: "relative z-0 flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => /* @__PURE__ */ g("button", {
				type: "button",
				onMouseEnter: () => l(t),
				onMouseLeave: () => l(null),
				onPointerEnter: () => l(t),
				onPointerDown: () => l(t),
				onPointerLeave: () => l(null),
				onFocus: () => l(t),
				onBlur: () => l(null),
				className: V("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", c !== null && c !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ h("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: W(e.color) }
					}),
					/* @__PURE__ */ h("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ h("span", {
						className: "text-text-primary text-xs font-semibold",
						children: v(G(e.value))
					})
				]
			}, e.name))
		})]
	});
}
//#endregion
//#region src/components/charts/RadarChart.tsx
function Je({ data: e, maxValue: t, size: n = 240, rings: r = 4, labelOffset: i = 18, labelFormatter: a, maxLabelLength: o, valueFormatter: s, ariaLabel: c = "Radar chart", className: l }) {
	let [u, d] = p(null), f = Math.max(80, n), m = Math.max(G(t ?? 0), ...e.map((e) => G(e.value)), 1), _ = f / 2, v = Math.max(1, _ - Math.max(0, i) - 12), y = e.length > 0 ? 2 * Math.PI / e.length : 0, b = Math.max(1, Math.floor(r)), x = s ?? String, S = e.map((e, t) => {
		let n = a?.(e.label, e, t) ?? e.label, r = Fe(n, o);
		return {
			displayLabel: r,
			isTruncated: r !== n,
			label: n
		};
	});
	function C(e, t) {
		return [_ + t * Math.cos(e - Math.PI / 2), _ + t * Math.sin(e - Math.PI / 2)];
	}
	let w = e.map((e, t) => {
		let n = H(G(e.value), 0, m) / m * v;
		return C(t * y, n);
	}), T = w.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ g("div", {
		className: V("relative flex flex-col items-center", l),
		children: [/* @__PURE__ */ g("svg", {
			width: f,
			height: f,
			viewBox: `0 0 ${f} ${f}`,
			className: "select-none",
			role: "img",
			"aria-label": c,
			children: [
				e.length > 0 && Array.from({ length: b }, (t, n) => {
					let r = (n + 1) / b * v;
					return /* @__PURE__ */ h("polygon", {
						points: e.map((e, t) => C(t * y, r)).map((e) => `${e[0]},${e[1]}`).join(" "),
						fill: "none",
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .5
					}, n);
				}),
				e.map((e, t) => {
					let [n, r] = C(t * y, v);
					return /* @__PURE__ */ h("line", {
						x1: _,
						y1: _,
						x2: n,
						y2: r,
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .3
					}, t);
				}),
				e.length > 0 && /* @__PURE__ */ h("polygon", {
					points: T,
					fill: "var(--accent)",
					fillOpacity: .15,
					stroke: "var(--accent)",
					strokeWidth: 2,
					strokeLinejoin: "round"
				}),
				w.map((t, n) => {
					let r = u === n, i = x(e[n].value);
					return /* @__PURE__ */ h("circle", {
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
					let n = v + Math.max(0, i), [r, a] = C(t * y, n), o = S[t], s = Math.max(48, o.displayLabel.length * 6 + 12), c = x(e.value);
					return /* @__PURE__ */ g("g", {
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
						children: [/* @__PURE__ */ h("rect", {
							x: r - s / 2,
							y: a - 10,
							width: s,
							height: 20,
							fill: "transparent"
						}), /* @__PURE__ */ g("text", {
							x: r,
							y: a,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: u === t ? "var(--text-primary)" : "var(--text-tertiary)",
							fontSize: 10,
							fontWeight: u === t ? 600 : 400,
							style: { transition: "all 150ms" },
							children: [o.isTruncated && /* @__PURE__ */ h("title", { children: o.label }), o.displayLabel]
						})]
					}, e.label);
				})
			]
		}), u !== null && /* @__PURE__ */ h("div", {
			className: "bg-bg-tertiary border-border pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 shadow-lg",
			children: /* @__PURE__ */ g("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ h("span", { className: "bg-accent h-2 w-2 shrink-0 rounded-full" }),
					/* @__PURE__ */ h("span", {
						className: V("text-text-secondary text-xs whitespace-nowrap"),
						children: S[u].label
					}),
					/* @__PURE__ */ h("span", {
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
	let [l, u] = p(null), [d, m] = p({
		x: 0,
		y: 0
	}), _ = f(null), v = l?.index ?? null, y = Math.max(1, t), b = Math.max(1, Math.min(n, y)), x = Math.max(0, r), S = y / 2, C = Math.max(0, (y - 40) / 2), w = i ?? String, T = a ?? ((e) => `${Math.round(e)}%`), E = e.reduce((e, t, n) => C - n * (b + x) > 0 ? n : e, -1);
	function D(e) {
		let t = _.current?.getBoundingClientRect();
		t && m({
			x: e.clientX - t.left,
			y: e.clientY - t.top
		});
	}
	function O(e) {
		m({
			x: S,
			y: S
		}), u({
			index: e,
			source: "chart"
		});
	}
	function k(e) {
		let t = G(e.max);
		return t <= 0 ? 0 : H(G(e.value) / t, 0, 1);
	}
	function A(e) {
		return k(e) * 100;
	}
	return /* @__PURE__ */ g("div", {
		className: V("flex flex-col items-center gap-4", c),
		children: [/* @__PURE__ */ g("div", {
			className: "relative",
			ref: _,
			onPointerMove: D,
			children: [/* @__PURE__ */ g("svg", {
				width: y,
				height: y,
				viewBox: `0 0 ${y} ${y}`,
				className: "select-none",
				role: "img",
				"aria-label": s,
				children: [e.map((e, t) => {
					let n = C - t * (b + x);
					if (n <= 0) return null;
					let r = 2 * Math.PI * n, i = r * k(e), a = r - i, o = W(e.color), s = v === t, c = A(e);
					return /* @__PURE__ */ g("g", {
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
						children: [/* @__PURE__ */ h("circle", {
							cx: S,
							cy: S,
							r: n,
							fill: "none",
							stroke: "var(--border)",
							strokeWidth: b,
							opacity: .3
						}), /* @__PURE__ */ h("circle", {
							cx: S,
							cy: S,
							r: n,
							fill: "none",
							stroke: o,
							strokeWidth: s ? b + 4 : b,
							strokeDasharray: `${i} ${a}`,
							strokeLinecap: "round",
							transform: `rotate(-90 ${S} ${S})`,
							opacity: v !== null && !s ? .4 : 1,
							className: "pointer-events-none",
							style: { transition: "all 150ms ease-out" }
						})]
					}, e.label);
				}), E >= 0 && (() => {
					let t = C - E * (b + x) - b / 2;
					return /* @__PURE__ */ h("circle", {
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
			}), v !== null && l?.source === "chart" && (() => {
				let t = e[v];
				if (!t) return null;
				let n = A(t), r = W(t.color), i = T(n), a = `${w(t.value)}/${w(t.max)}`;
				return /* @__PURE__ */ h("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: ze({
						anchorX: d.x,
						anchorY: d.y,
						boundsHeight: y,
						boundsWidth: y,
						height: 30,
						margin: 4,
						offset: 8,
						width: Le([`${t.label} ${i} ${a}`], {
							maxWidth: 220,
							minWidth: 112
						})
					}),
					children: /* @__PURE__ */ g("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ h("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: r }
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: t.label
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-primary text-xs font-semibold",
								children: i
							}),
							/* @__PURE__ */ g("span", {
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
		}), o && /* @__PURE__ */ h("div", {
			className: "flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => {
				let n = A(e);
				return /* @__PURE__ */ g("button", {
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
					className: V("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", v !== null && v !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ h("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: W(e.color) }
						}),
						/* @__PURE__ */ h("span", {
							className: "text-text-secondary text-xs",
							children: e.label
						}),
						/* @__PURE__ */ h("span", {
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
	let f = Math.max(1, t), p = Math.max(1, n), m = Math.max(0, Math.min(o, p / 2, f / 2)), _ = r ?? Math.min(...e), v = i ?? Math.max(...e), y = Math.min(_, v), b = Math.max(_, v), x = b - y, S = Math.max(1, f - m * 2), C = Math.max(1, p - m * 2), w = e.map((t, n) => ({
		x: m + n / (e.length - 1) * S,
		y: x === 0 ? p / 2 : m + C - (H(t, y, b) - y) / x * C
	})), T = w.map(({ x: e, y: t }) => `${e},${t}`).join(" "), E = w.length > 0 ? [
		`${w[0].x},${p - m}`,
		...w.map(({ x: e, y: t }) => `${e},${t}`),
		`${w[w.length - 1].x},${p - m}`
	].join(" ") : "";
	return /* @__PURE__ */ g("svg", {
		width: f,
		height: p,
		viewBox: `0 0 ${f} ${p}`,
		className: V("inline-block", d),
		role: "img",
		"aria-label": u,
		children: [c && /* @__PURE__ */ h("polygon", {
			points: E,
			fill: s,
			opacity: l
		}), /* @__PURE__ */ h("polyline", {
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
var q = {
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
	let [d, f] = p(null), _ = Math.max(q.top + q.bottom + 1, n), v = Ze - q.left - q.right, y = Math.max(1, _ - q.top - q.bottom), b = e.reduce((e, n) => Math.max(e, tt(n, t)), 1), x = Math.ceil(b / 2), S = x > 0 && x < b, C = c ?? (e.length > 60 ? 2 : e.length > 30 ? 3 : 6), w = Math.max(1, l), T = e.length > 1 ? Math.max(0, (v - e.length * w) / Math.max(e.length - 1, 1)) : 0, E = e.length > 1 ? Math.min(Math.max(0, C), T) : 0, D = e.length > 0 ? (v - E * Math.max(e.length - 1, 0)) / e.length : 0, O = new Set(Pe(e.length, s)), k = d === null ? null : e[d], A = a ?? U, j = o ?? ((e) => e.toLocaleString());
	function M(e) {
		return q.left + e * (D + E);
	}
	function N(e) {
		return e / b * y;
	}
	return /* @__PURE__ */ g("svg", {
		width: "100%",
		viewBox: `0 0 ${Ze} ${_}`,
		className: V("select-none", u),
		role: "img",
		"aria-label": r,
		children: [
			/* @__PURE__ */ h("text", {
				x: q.left - 8,
				y: q.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(b)
			}),
			S && /* @__PURE__ */ h("text", {
				x: q.left - 8,
				y: q.top + y / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: A(x)
			}),
			/* @__PURE__ */ h("text", {
				x: q.left - 8,
				y: q.top + y,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ h("line", {
				x1: q.left,
				y1: q.top + y,
				x2: q.left + v,
				y2: q.top + y,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ h("line", {
				x1: q.left,
				y1: q.top + y / 2,
				x2: q.left + v,
				y2: q.top + y / 2,
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
				return /* @__PURE__ */ g("g", {
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
						/* @__PURE__ */ h("rect", {
							x: r,
							y: q.top,
							width: D,
							height: y,
							fill: "transparent"
						}),
						o.map(({ segment: e, value: t }, n) => {
							let s = N(t), c = q.top + y - a - s, l = n === o.length - 1;
							return a += s, l ? /* @__PURE__ */ h("path", {
								d: nt(r, c, D, s, Qe),
								fill: e.color,
								opacity: i ? 1 : e.opacity ?? .9
							}, e.key) : /* @__PURE__ */ h("rect", {
								x: r,
								y: c,
								width: D,
								height: s,
								fill: e.color,
								opacity: i ? 1 : e.opacity ?? .9
							}, e.key);
						}),
						O.has(n) && /* @__PURE__ */ h("text", {
							x: r + D / 2,
							y: _ - 5,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: $e(e.date)
						})
					]
				}, `${e.date}-${n}`);
			}),
			k && d !== null && /* @__PURE__ */ h("g", {
				pointerEvents: "none",
				children: (() => {
					let e = M(d) + D / 2, n = i?.(k) ?? t.map((e) => ({
						color: e.color,
						label: e.label,
						value: et(k, e.key)
					})), r = tt(k, t), a = Re(e, q.top + y - N(r), {
						boundsHeight: _,
						boundsWidth: Ze,
						height: 28 + n.length * 15,
						offset: 8,
						width: Le([$e(k.date), ...n.map((e) => `${e.label} ${j(e.value)}`)], {
							maxWidth: 240,
							minWidth: 150
						})
					}), o = a.x + 10, s = a.x + a.width - 10;
					return /* @__PURE__ */ g(m, { children: [
						/* @__PURE__ */ h("line", {
							x1: e,
							y1: q.top,
							x2: e,
							y2: q.top + y,
							stroke: "var(--border-strong)",
							strokeWidth: 1,
							strokeDasharray: "3 3"
						}),
						/* @__PURE__ */ h("rect", {
							x: a.x,
							y: a.y,
							width: a.width,
							height: a.height,
							rx: 4,
							fill: "var(--bg-tertiary)",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ h("text", {
							x: o,
							y: a.y + 14,
							fill: "var(--text-primary)",
							fontSize: 10,
							fontWeight: 600,
							children: $e(k.date)
						}),
						n.map((e, t) => {
							let n = a.y + 30 + t * 15;
							return /* @__PURE__ */ g("g", { children: [
								e.color && /* @__PURE__ */ h("rect", {
									x: o,
									y: n - 6,
									width: 6,
									height: 6,
									rx: 1,
									fill: e.color
								}),
								/* @__PURE__ */ h("text", {
									x: e.color ? o + 12 : o,
									y: n,
									fill: "var(--text-secondary)",
									fontSize: 10,
									children: e.label
								}),
								/* @__PURE__ */ h("text", {
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
], J = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
}, at = 600;
function ot({ data: e, height: t = 180, maxValue: n, valueFormatter: r, tooltipValueFormatter: i, labelFormatter: a, maxLabelLength: o, xLabelCount: s = 7, barGap: c = 6, minBarWidth: l = 4, ariaLabel: u = "Vertical bar chart", className: d }) {
	let [f, _] = p(null), v = Math.max(J.top + J.bottom + 1, t), y = at - J.left - J.right, b = Math.max(1, v - J.top - J.bottom), x = n === void 0 ? Math.max(...e.map((e) => G(e.value)), 1) : Math.max(G(n), 1), S = Math.max(0, c), C = Math.max(1, l), w = e.length > 1 ? Math.max(0, (y - e.length * C) / Math.max(e.length - 1, 1)) : 0, T = e.length > 1 ? Math.min(S, w) : 0, E = e.length > 0 ? Math.max(0, (y - T * Math.max(e.length - 1, 0)) / e.length) : 0, D = r ?? U, O = i ?? ((e) => e.toLocaleString()), k = new Set(Pe(e.length, s));
	return /* @__PURE__ */ g("svg", {
		width: "100%",
		viewBox: `0 0 ${at} ${v}`,
		className: V("select-none", d),
		role: "img",
		"aria-label": u,
		children: [
			/* @__PURE__ */ h("text", {
				x: J.left - 6,
				y: J.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: D(x)
			}),
			/* @__PURE__ */ h("text", {
				x: J.left - 6,
				y: J.top + b,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ h("line", {
				x1: J.left,
				y1: J.top + b,
				x2: J.left + y,
				y2: J.top + b,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ h("line", {
				x1: J.left,
				y1: J.top + b / 2,
				x2: J.left + y,
				y2: J.top + b / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, t) => {
				let n = J.left + t * (E + T), r = H(G(e.value), 0, x) / x * b, i = J.top + b - r, s = f === t, c = a?.(e.label, e, t) ?? e.label, l = Fe(c, o), u = l !== c, d = O(e.value);
				return /* @__PURE__ */ g("g", {
					onMouseEnter: () => _(t),
					onMouseLeave: () => _(null),
					onPointerEnter: () => _(t),
					onPointerDown: () => _(t),
					onPointerLeave: () => _(null),
					onFocus: () => _(t),
					onBlur: () => _(null),
					tabIndex: 0,
					role: "button",
					"aria-label": `${c}: ${d}`,
					children: [
						/* @__PURE__ */ h("rect", {
							x: n,
							y: J.top,
							width: E,
							height: b,
							fill: "transparent"
						}),
						/* @__PURE__ */ h("rect", {
							x: n,
							y: i,
							width: E,
							height: r,
							fill: W(e.color),
							rx: 6,
							opacity: s ? 1 : it[t % it.length],
							style: { transition: "all 150ms" }
						}),
						k.has(t) && /* @__PURE__ */ g("text", {
							x: n + E / 2,
							y: v - 4,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: [u && /* @__PURE__ */ h("title", { children: c }), l]
						}),
						s && (() => {
							let e = Re(n + E / 2, i, {
								boundsHeight: v,
								boundsWidth: at,
								height: 24,
								offset: 8,
								width: Le([c, d], {
									maxWidth: 180,
									minWidth: 72
								})
							}), t = e.x + e.width / 2;
							return /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("rect", {
								x: e.x,
								y: e.y,
								width: e.width,
								height: e.height,
								rx: 4,
								fill: "var(--bg-tertiary)",
								stroke: "var(--border)",
								strokeWidth: 1
							}), /* @__PURE__ */ h("text", {
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
	return e.length === 0 ? null : /* @__PURE__ */ h("nav", {
		className: V("bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ h("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = st(e, t);
				return /* @__PURE__ */ h("li", { children: /* @__PURE__ */ g("a", {
					href: e.path,
					onClick: (t) => ct(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					className: V("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
					children: [/* @__PURE__ */ h(e.icon, { className: "h-5 w-5" }), /* @__PURE__ */ h("span", {
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
var dt = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function ft(e, t) {
	let n = f(null);
	c(() => {
		if (!t || !e.current) return;
		let r = e.current.ownerDocument;
		n.current = r.activeElement;
		let i = e.current.querySelectorAll(dt);
		i.length > 0 && i[0].focus();
		let a = (t) => {
			if (t.key !== "Tab" || !e.current) return;
			let n = e.current.querySelectorAll(dt);
			if (n.length === 0) return;
			let i = n[0], a = n[n.length - 1];
			t.shiftKey ? r.activeElement === i && (t.preventDefault(), a.focus()) : r.activeElement === a && (t.preventDefault(), i.focus());
		};
		return r.addEventListener("keydown", a), () => {
			r.removeEventListener("keydown", a), n.current instanceof HTMLElement && n.current.focus();
		};
	}, [t, e]);
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
function vt({ items: e, eventName: t = pt, shortcut: n = mt, placeholder: r = "Search pages...", emptyLabel: i = "No results found", onNavigate: a, onSelect: s }) {
	let [u, d] = p(!1), [m, _] = p(""), [v, y] = p(0), b = f(null), x = f(null), S = l();
	ft(x, u);
	let C = e.filter((e) => _t(e, m)), w = o(() => {
		d(!0), _(""), y(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	c(() => {
		let e = (e) => {
			gt(e, n) && (e.preventDefault(), u ? d(!1) : w());
		}, r = () => {
			u || w();
		};
		return document.addEventListener("keydown", e), document.addEventListener(t, r), () => {
			document.removeEventListener("keydown", e), document.removeEventListener(t, r);
		};
	}, [
		t,
		u,
		w,
		n
	]);
	function T(e) {
		_(e), y(0);
	}
	function E(e) {
		s?.(e), lt(e.path, a), d(!1);
	}
	function D(e) {
		e.key === "ArrowDown" ? (e.preventDefault(), y((e) => Math.min(e + 1, C.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), y((e) => Math.max(e - 1, 0))) : e.key === "Enter" && C[v] ? E(C[v]) : e.key === "Escape" && d(!1);
	}
	return u ? /* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh]",
		children: [/* @__PURE__ */ h("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: () => d(!1)
		}), /* @__PURE__ */ g("div", {
			ref: x,
			className: "bg-bg-secondary border-border animate-scale-in relative z-50 mx-4 w-full max-w-[520px] overflow-hidden rounded-xl border shadow-lg",
			onKeyDown: D,
			children: [/* @__PURE__ */ g("div", {
				className: "border-border flex items-center gap-3 border-b px-4",
				children: [
					/* @__PURE__ */ h(z, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
					/* @__PURE__ */ h("input", {
						ref: b,
						type: "text",
						role: "combobox",
						"aria-expanded": C.length > 0,
						"aria-controls": S,
						"aria-activedescendant": C[v] ? `${S}-${v}` : void 0,
						"aria-autocomplete": "list",
						"aria-label": "Search pages",
						value: m,
						onChange: (e) => T(e.target.value),
						placeholder: r,
						className: "text-text-primary placeholder:text-text-disabled h-11 flex-1 bg-transparent text-sm focus:outline-none"
					}),
					/* @__PURE__ */ h("kbd", {
						className: "text-2xs bg-bg-tertiary text-text-tertiary border-border hidden items-center rounded border px-1.5 py-0.5 font-mono font-medium sm:inline-flex",
						children: "Esc"
					})
				]
			}), /* @__PURE__ */ h("ul", {
				id: S,
				role: "listbox",
				"aria-label": "Pages",
				className: "max-h-[320px] overflow-y-auto px-2 py-2",
				children: C.length === 0 ? /* @__PURE__ */ h("li", {
					className: "text-text-tertiary px-3 py-6 text-center text-xs",
					children: i
				}) : C.map((e, t) => /* @__PURE__ */ g("li", {
					id: `${S}-${t}`,
					role: "option",
					"aria-selected": t === v,
					onClick: () => E(e),
					className: V("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === v ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
					children: [
						/* @__PURE__ */ h("span", {
							className: "shrink-0 opacity-60",
							children: /* @__PURE__ */ h(e.icon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ h("span", {
							className: "min-w-0 flex-1 text-xs font-medium",
							children: e.label
						}),
						e.badge && /* @__PURE__ */ h("span", {
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
	return e.logo ? /* @__PURE__ */ h(m, { children: e.logo }) : /* @__PURE__ */ g("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ h(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ h("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function bt({ open: e, onClose: t, items: n, topBarNavItems: r = [], topBarNavLabel: i = "Primary", brand: a, currentPath: o, onNavigate: s, headerActions: l, className: u }) {
	let d = f(null);
	if (ft(d, e), c(() => {
		if (!e) return;
		document.body.style.overflow = "hidden";
		let n = (e) => {
			e.key === "Escape" && t();
		}, r = d.current?.ownerDocument ?? document;
		return r.addEventListener("keydown", n), () => {
			document.body.style.overflow = "", r.removeEventListener("keydown", n);
		};
	}, [e, t]), !e) return null;
	let p = r.length > 0;
	return /* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-40 md:hidden",
		children: [/* @__PURE__ */ h("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: t
		}), /* @__PURE__ */ g("div", {
			ref: d,
			className: V("bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", u),
			children: [
				/* @__PURE__ */ g("div", {
					className: "border-border flex h-11 items-center justify-between border-b px-4",
					children: [/* @__PURE__ */ h(yt, { brand: a }), /* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ h(B, { className: "h-4 w-4" })
					})]
				}),
				l && /* @__PURE__ */ h("div", {
					className: "border-border border-b px-4 py-2",
					children: l
				}),
				/* @__PURE__ */ g("nav", {
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2",
					children: [p && /* @__PURE__ */ g("div", {
						className: "border-border mb-2 border-b pb-2",
						children: [/* @__PURE__ */ h("div", {
							className: "text-text-tertiary px-3 py-1 text-2xs font-medium uppercase",
							children: i
						}), /* @__PURE__ */ h("ul", {
							className: "space-y-0.5",
							"aria-label": i,
							children: r.map((e) => {
								let n = e.icon, r = st(e, o), i = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
								return /* @__PURE__ */ h("li", { children: /* @__PURE__ */ g("a", {
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
									className: V("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", r ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
									children: [
										n && /* @__PURE__ */ h(n, { className: "h-4 w-4" }),
										/* @__PURE__ */ h("span", {
											className: "min-w-0 flex-1 text-sm",
											children: e.label
										}),
										e.badge && /* @__PURE__ */ h("span", {
											className: "shrink-0",
											children: e.badge
										})
									]
								}) }, `${e.label}-${e.path}`);
							})
						})]
					}), /* @__PURE__ */ h("ul", {
						className: "space-y-0.5",
						children: n.map((e) => {
							let n = st(e, o);
							return /* @__PURE__ */ h("li", { children: /* @__PURE__ */ g("a", {
								href: e.path,
								onClick: (n) => ct(n, e.path, s, t),
								"aria-current": n ? "page" : void 0,
								className: V("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
								children: [
									/* @__PURE__ */ h(e.icon, { className: "h-4 w-4" }),
									/* @__PURE__ */ h("span", {
										className: "min-w-0 flex-1 text-sm",
										children: e.label
									}),
									e.badge && /* @__PURE__ */ h("span", {
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
		icon: R,
		preview: {
			bg: "#0d0f12",
			fg: "#2a2e38"
		}
	},
	{
		value: "light",
		label: "Light",
		icon: oe,
		preview: {
			bg: "#f5f5f5",
			fg: "#d4d4d8"
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
		icon: L,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: le,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: le,
		preview: {
			bg: "#e4e4e7",
			fg: "#d4d4d8"
		}
	},
	{
		value: "hashiTheme",
		label: "HashiTheme",
		icon: S,
		preview: {
			bg: "#ffffff",
			fg: "#364153"
		}
	}
], St = new Set([
	"light",
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
	c(() => {
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
	return s(Mt);
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
	return /* @__PURE__ */ h("div", {
		className: V("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", Pt[n], r),
		style: { backgroundColor: t ? void 0 : It(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ h("img", {
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
	return s(Rt);
}
function Bt({ children: e }) {
	let [t, n] = p([]), r = f(0), i = o((e, t, i = 4e3) => {
		let a = r.current++;
		n((n) => [...n, {
			id: a,
			type: e,
			message: t,
			duration: i
		}]);
	}, []), a = o((e) => {
		n((t) => t.filter((t) => t.id !== e));
	}, []);
	return /* @__PURE__ */ g(Rt.Provider, {
		value: { toast: i },
		children: [e, /* @__PURE__ */ h("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ h(Wt, {
				toast: e,
				onDismiss: () => a(e.id)
			}, e.id))
		})]
	});
}
var Vt = {
	success: T,
	error: ce,
	warning: v,
	info: P
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
	let [n, r] = p(100), i = Vt[e.type], a = e.type === "error" || e.type === "warning", o = f(t);
	return c(() => {
		o.current = t;
	}, [t]), c(() => {
		let t = Date.now(), n = setInterval(() => {
			let i = Date.now() - t, a = Math.max(0, 100 - i / e.duration * 100);
			r(a), a <= 0 && (o.current(), clearInterval(n));
		}, 50);
		return () => clearInterval(n);
	}, [e.duration]), /* @__PURE__ */ g("div", {
		role: a ? "alert" : "status",
		"aria-live": a ? "assertive" : "polite",
		className: "bg-bg-secondary border-border animate-slide-down pointer-events-auto relative w-80 overflow-hidden rounded-lg border shadow-lg",
		children: [
			/* @__PURE__ */ h("div", { className: V("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", Ht[e.type]) }),
			/* @__PURE__ */ g("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ h(i, { className: V("h-4 w-4 shrink-0", Ut[e.type]) }),
					/* @__PURE__ */ h("p", {
						className: "text-text-primary flex-1 text-xs",
						children: e.message
					}),
					/* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ h(B, { className: "h-3 w-3" })
					})
				]
			}),
			/* @__PURE__ */ h("div", {
				className: "bg-bg-tertiary mx-3 mb-1 h-0.5 overflow-hidden rounded-md",
				children: /* @__PURE__ */ h("div", {
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
	return /* @__PURE__ */ g("a", {
		href: e.path,
		onClick: (t) => ct(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: V("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: t ? e.label : void 0,
		children: [
			i && /* @__PURE__ */ h("div", {
				className: "bg-accent absolute left-0 w-0.5 rounded-md",
				style: {
					top: "0.3em",
					bottom: "0.3em"
				}
			}),
			/* @__PURE__ */ h("span", {
				className: "shrink-0",
				children: /* @__PURE__ */ h(e.icon, { className: "h-3.5 w-3.5" })
			}),
			!t && /* @__PURE__ */ h("span", {
				className: "min-w-0 flex-1 truncate text-xs",
				children: e.label
			}),
			!t && e.badge && /* @__PURE__ */ h("span", {
				className: "ml-auto shrink-0",
				children: e.badge
			})
		]
	});
}
function Yt({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ h("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ g("div", {
		className: V("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ h(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ h("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ h("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function Xt(e) {
	return e.role ?? e.email;
}
function Zt({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: i, signOutPath: a, signOutLabel: s = "Sign out", onNavigate: c }) {
	let [l, u] = p(!1), [d, _] = p(() => Math.min(n, Math.max(t.length - 1, 0))), [v, y] = p({
		bottom: 0,
		left: 0
	}), b = f(null), x = f(null);
	jt(l, o(() => u(!1), []), [x], [b]);
	let S = t[d] ?? t[0], C = !!(i || a);
	function T() {
		if (!b.current) return;
		let e = b.current.getBoundingClientRect();
		y({
			bottom: window.innerHeight - e.bottom,
			left: e.right + 6
		}), u(!l);
	}
	function E(e, t) {
		_(t), r?.(e, t), u(!1);
	}
	function D() {
		u(!1), i ? i() : a && lt(a, c);
	}
	return S ? /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ g("button", {
		ref: b,
		onClick: T,
		className: V("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? S.name : void 0,
		children: [/* @__PURE__ */ h(Lt, {
			name: S.name,
			src: S.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ g("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ h("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: S.name
			}), Xt(S) && /* @__PURE__ */ h("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: Xt(S)
			})]
		}), /* @__PURE__ */ h(k, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && ue(/* @__PURE__ */ g("div", {
		ref: x,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-56 rounded-md border py-1 shadow-lg",
		style: {
			bottom: v.bottom,
			left: v.left
		},
		children: [
			/* @__PURE__ */ h("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accounts"
			}),
			t.map((e, t) => /* @__PURE__ */ g("button", {
				onClick: () => E(e, t),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-8 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ h(Lt, {
						name: e.name,
						src: e.avatarSrc,
						size: "sm"
					}),
					/* @__PURE__ */ g("div", {
						className: "min-w-0 flex-1 text-left",
						children: [/* @__PURE__ */ h("p", {
							className: "text-text-primary truncate text-xs leading-tight",
							children: e.name
						}), e.email && /* @__PURE__ */ h("p", {
							className: "text-2xs text-text-tertiary truncate leading-tight",
							children: e.email
						})]
					}),
					t === d && /* @__PURE__ */ h(w, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, `${e.name}-${e.email ?? t}`)),
			C && /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ g("button", {
				onClick: D,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ h(ee, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ h("span", { children: s })]
			})] })
		]
	}), document.body)] }) : null;
}
function Qt({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: i }) {
	let [a, s] = p(!1), [c, l] = p({
		bottom: 0,
		left: 0
	}), u = f(null), d = f(null), { accentColor: v, setAccentColor: y, reducedMotion: b, setReducedMotion: x, colorMode: S, setColorMode: C } = Nt(), { toast: T } = zt(), E = !!(t || r);
	jt(a, o(() => s(!1), []), [d], [u]);
	function D() {
		if (!u.current) return;
		let e = u.current.getBoundingClientRect();
		l({
			bottom: window.innerHeight - e.bottom,
			left: e.right + 6
		}), s(!a);
	}
	function O() {
		s(!1), r ? r() : t && lt(t, i);
	}
	return /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ g("button", {
		ref: u,
		onClick: D,
		className: V("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", a ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ h(ae, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ h("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), a && ue(/* @__PURE__ */ g("div", {
		ref: d,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-64 rounded-md border py-1 shadow-lg",
		style: {
			bottom: c.bottom,
			left: c.left
		},
		children: [
			/* @__PURE__ */ h("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Mode"
			}),
			[
				{
					value: "dark",
					label: "Dark",
					Icon: R
				},
				{
					value: "light",
					label: "Light",
					Icon: oe
				},
				{
					value: "system",
					label: "System",
					Icon: L
				}
			].map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ g("button", {
				onClick: () => C(e),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ h(n, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ h("span", {
						className: "flex-1 text-left",
						children: t
					}),
					S === e && /* @__PURE__ */ h(w, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, e)),
			/* @__PURE__ */ h("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ h("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accent"
			}),
			/* @__PURE__ */ h("div", {
				className: "flex flex-wrap gap-1.5 px-3 pb-2",
				children: At.map((e) => /* @__PURE__ */ h("button", {
					onClick: () => y(e.value),
					className: V("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", v === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
					style: {
						backgroundColor: e.color,
						...v === e.value ? { "--utility-ring-color": e.color } : {}
					},
					title: e.value.charAt(0).toUpperCase() + e.value.slice(1)
				}, e.value))
			}),
			/* @__PURE__ */ h("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ g("button", {
				onClick: () => {
					x(!b), T("info", b ? "Animations enabled" : "Animations disabled");
				},
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ h(_, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ h("span", {
						className: "flex-1 text-left",
						children: "Reduced Motion"
					}),
					b && /* @__PURE__ */ h(w, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}),
			E && /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ g("button", {
				onClick: O,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ h(ae, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ h("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), document.body)] });
}
function $t({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: i, onSignOut: a, signOutPath: s, signOutLabel: c, settingsPath: l, settingsLabel: u, onOpenSettings: d, currentPath: m, onNavigate: _, headerActions: v, className: y }) {
	let { sidebarCollapsed: b, sidebarWidth: x, setSidebarWidth: S } = Nt(), [C, w] = p(/* @__PURE__ */ new Set()), T = f(null), D = f(!1), O = o((e) => {
		if (b) return;
		e.preventDefault(), D.current = !0, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!D.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			S(Math.max(Gt, Math.min(n, Kt)));
		}, n = () => {
			D.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
		};
		document.addEventListener("mousemove", t), document.addEventListener("mouseup", n);
	}, [b, S]);
	function k(e) {
		w((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	return /* @__PURE__ */ g("aside", {
		ref: T,
		className: V("bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", "transition-[width] duration-[200ms] ease-out", "border-border", y),
		style: { width: b ? qt : x },
		children: [
			!b && /* @__PURE__ */ h("div", {
				onMouseDown: O,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ h("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ h(Yt, {
					brand: t,
					collapsed: b
				})
			}),
			!b && v && /* @__PURE__ */ h("div", {
				className: "border-border shrink-0 border-b px-2 py-2",
				children: v
			}),
			/* @__PURE__ */ h("nav", {
				className: "flex-1 overflow-y-auto px-2 py-2",
				children: e.map((e, t) => {
					let n = C.has(e.title);
					return /* @__PURE__ */ g("div", {
						className: "mb-4",
						children: [b ? t > 0 && /* @__PURE__ */ h("hr", { className: "border-border mx-auto my-1.5 w-4/5" }) : /* @__PURE__ */ g("button", {
							onClick: () => k(e.title),
							className: "text-2xs-f text-text-tertiary hover:text-text-secondary font-label flex w-full cursor-pointer items-center gap-1 px-2 text-left font-semibold tracking-wider uppercase",
							style: {
								paddingTop: "0.35em",
								paddingBottom: "0.35em"
							},
							children: [/* @__PURE__ */ h("span", {
								className: "min-w-0 flex-1",
								children: e.title
							}), /* @__PURE__ */ h(E, { className: V("h-3 w-3 shrink-0 transition-transform", n && "-rotate-90") })]
						}), (!n || b) && /* @__PURE__ */ h("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ h("li", { children: /* @__PURE__ */ h(Jt, {
								item: e,
								collapsed: b,
								currentPath: m,
								onNavigate: _
							}) }, e.path))
						})]
					}, e.title);
				})
			}),
			/* @__PURE__ */ g("div", {
				className: "shrink-0 px-2 py-1.5",
				children: [/* @__PURE__ */ h(Qt, {
					collapsed: b,
					settingsPath: l,
					settingsLabel: u,
					onOpenSettings: d,
					onNavigate: _
				}), n.length > 0 && /* @__PURE__ */ h("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ h(Zt, {
						collapsed: b,
						accounts: n,
						initialAccountIndex: r,
						onAccountChange: i,
						onSignOut: a,
						signOutPath: s,
						signOutLabel: c,
						onNavigate: _
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
	return /* @__PURE__ */ h("nav", {
		"aria-label": "Breadcrumb",
		className: V("font-navigation flex items-center gap-1 text-xs", a),
		children: /* @__PURE__ */ h("ol", {
			className: "flex items-center gap-1",
			children: s.map((e, t) => {
				let n = t === s.length - 1;
				return /* @__PURE__ */ g("li", {
					className: "flex items-center gap-1",
					children: [t > 0 && /* @__PURE__ */ h(O, { className: "text-text-tertiary h-3 w-3" }), n ? /* @__PURE__ */ h("span", {
						className: "text-text-primary font-medium",
						children: e.label
					}) : /* @__PURE__ */ h("a", {
						href: e.path,
						onClick: (t) => ct(t, e.path, i),
						className: V("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
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
	return o((r) => {
		Ct(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/components/ui/Button.tsx
var rn = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover"
}, an = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, on = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, sn = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, cn = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, ln = {
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
}, un = i(({ variant: e = "secondary", size: t = "md", loading: n, icon: r, hideLabel: i, className: a, children: o, disabled: s, ...c }, l) => {
	let u = e === "icon", d = i === !0 ? "sm" : i === !1 ? void 0 : i;
	return /* @__PURE__ */ g("button", {
		ref: l,
		disabled: s || n,
		className: V("inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", rn[e], u ? on[t] : an[t], d && !u && ln[d]?.[t], a),
		...c,
		children: [
			n && /* @__PURE__ */ h(F, { className: "h-3.5 w-3.5 animate-spin" }),
			r && !n && /* @__PURE__ */ h(r, { className: sn[t] }),
			o && (d ? /* @__PURE__ */ h("span", {
				className: cn[d],
				children: o
			}) : o)
		]
	});
});
un.displayName = "Button";
//#endregion
//#region src/components/ui/SectionHeader.tsx
function dn({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ h(t, {
		className: V("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
//#endregion
//#region src/hooks/useDropUp.ts
function fn(e, t, n) {
	let [r, i] = p(!1);
	return u(() => {
		if (!e || !n.current || !t.current) return;
		let r = t.current.getBoundingClientRect(), a = n.current.getBoundingClientRect();
		i(window.innerHeight - r.bottom < a.height + 8);
	}, [e]), r;
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function pn({ options: e, value: t, onChange: n, label: r, placeholder: i = "Select...", className: a, size: s = "md" }) {
	let [c, u] = p(!1), [d, m] = p(-1), _ = f(null), v = f(null), y = fn(c, _, v), b = l(), x = `${b}-listbox`, S = e.find((e) => e.value === t);
	jt(c, o(() => u(!1), []), [_]);
	function C() {
		if (!c) {
			let n = e.findIndex((e) => e.value === t);
			m(n >= 0 ? n : 0);
		}
		u(!c);
	}
	function T(r) {
		if (!c) {
			if (r.key === "ArrowDown" || r.key === "ArrowUp") {
				r.preventDefault();
				let n = e.findIndex((e) => e.value === t);
				m(n >= 0 ? n : 0), u(!0);
			}
			return;
		}
		switch (r.key) {
			case "ArrowDown":
				r.preventDefault(), m((t) => Math.min(t + 1, e.length - 1));
				break;
			case "ArrowUp":
				r.preventDefault(), m((e) => Math.max(e - 1, 0));
				break;
			case "Enter":
				r.preventDefault(), e[d] && (n(e[d].value), u(!1));
				break;
			case "Escape":
				r.preventDefault(), u(!1);
				break;
		}
	}
	return /* @__PURE__ */ g("div", {
		className: V("flex flex-col gap-1.5", a),
		ref: _,
		children: [r && /* @__PURE__ */ h("span", {
			className: "text-text-secondary font-label text-xs font-medium",
			children: r
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ h("button", {
					type: "button",
					onClick: C,
					onKeyDown: T,
					"aria-haspopup": "listbox",
					"aria-expanded": c,
					"aria-controls": c ? x : void 0,
					"aria-activedescendant": c && d >= 0 ? `${b}-option-${d}` : void 0,
					className: V("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", s === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7"),
					children: S ? S.label : /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ h(E, { className: V("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", s === "sm" ? "right-1.5" : "right-2", c && "rotate-180") }),
				c && /* @__PURE__ */ h("div", {
					ref: v,
					className: V("bg-bg-tertiary border-border-strong animate-scale-in absolute right-0 left-0 z-[100] overflow-hidden rounded-md border shadow-lg", y ? "bottom-full mb-1" : "top-full mt-1"),
					children: /* @__PURE__ */ h("ul", {
						id: x,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: e.map((e, r) => /* @__PURE__ */ g("li", {
							id: `${b}-option-${r}`,
							role: "option",
							"aria-selected": e.value === t,
							onClick: () => {
								n(e.value), u(!1);
							},
							onMouseEnter: () => m(r),
							className: V("font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs", "transition-colors duration-[100ms]", r === d ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
							children: [/* @__PURE__ */ h("span", {
								className: "flex-1 truncate",
								children: e.label
							}), e.value === t && /* @__PURE__ */ h(w, { className: "h-3 w-3 shrink-0" })]
						}, e.value))
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/Slider.tsx
function mn({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, showValue: s, className: c }) {
	let l = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ g("div", {
		className: V("flex flex-col gap-1.5", c),
		children: [(o || s) && /* @__PURE__ */ g("div", {
			className: "flex items-center justify-between",
			children: [o && /* @__PURE__ */ h("span", {
				className: "text-text-secondary font-label text-xs font-medium",
				children: o
			}), s && /* @__PURE__ */ h("span", {
				className: "text-text-primary font-data text-xs",
				children: r
			})]
		}), /* @__PURE__ */ h("input", {
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
function hn({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ g("button", {
		type: "button",
		onClick: i,
		className: V("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
		children: [/* @__PURE__ */ h("div", {
			className: "border-border-strong/20 flex h-10 w-full items-center justify-center rounded border",
			style: { backgroundColor: r?.bg },
			children: /* @__PURE__ */ h("div", {
				className: "h-1.5 w-8 rounded-md",
				style: { backgroundColor: r?.fg }
			})
		}), /* @__PURE__ */ g("div", {
			className: "flex items-center gap-1.5",
			children: [n && /* @__PURE__ */ h(n, { className: "h-3 w-3" }), /* @__PURE__ */ h("span", {
				className: "text-xs font-medium",
				children: e
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Toggle.tsx
function gn({ checked: e, onChange: t, disabled: n, label: r, className: i }) {
	return /* @__PURE__ */ g("label", {
		className: V("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", i),
		style: { gap: 10 },
		children: [/* @__PURE__ */ h("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			disabled: n,
			onClick: () => t(!e),
			className: V("relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary border-border", !n && "cursor-pointer"),
			style: {
				width: 36,
				height: 20
			},
			children: /* @__PURE__ */ h("span", {
				className: "bg-control-knob absolute top-1/2 rounded-full transition-[left] duration-[100ms]",
				style: {
					width: 14,
					height: 14,
					marginTop: -7,
					left: e ? 19 : 3,
					boxShadow: "0 0 1px rgba(0,0,0,0.1), 2px 0 4px rgba(0,0,0,0.35)"
				}
			})
		}), r && /* @__PURE__ */ h("span", {
			className: "text-text-secondary text-xs",
			children: r
		})]
	});
}
//#endregion
//#region src/components/app-shell/themeMenuEvents.ts
var _n = "open-theme-menu";
function vn(e = _n) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
//#endregion
//#region src/components/app-shell/ThemeMenu.tsx
var yn = [
	{
		value: "dark",
		label: "Dark",
		Icon: R
	},
	{
		value: "light",
		label: "Light",
		Icon: oe
	},
	{
		value: "system",
		label: "System",
		Icon: L
	}
];
function bn({ className: e, respondToOpenEvent: t = !0 }) {
	let [n, r] = p(!1), [i, a] = p(!1), [s, l] = p({
		top: 0,
		right: 0
	}), u = f(null), d = f(null), _ = Nt(), v = nn(), { toast: y } = zt(), b = o(() => {
		r(!1), a(!1);
	}, []);
	jt(n, b, [d], [u], { outsideClick: !i });
	let x = o(() => {
		if (!u.current) return;
		let e = u.current.getBoundingClientRect();
		l({
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
	c(() => {
		if (!t) return;
		let e = () => {
			x(), r(!0), a(!0);
		};
		return document.addEventListener(_n, e), () => document.removeEventListener(_n, e);
	}, [t, x]), c(() => {
		if (n) return window.addEventListener("resize", x), window.addEventListener("scroll", x, !0), () => {
			window.removeEventListener("resize", x), window.removeEventListener("scroll", x, !0);
		};
	}, [n, x]);
	let { colorMode: C, setColorMode: w, preferredDarkTheme: T, preferredLightTheme: E, accentColor: D, setAccentColor: O, fontSize: k, setFontSize: A, uiFont: j, setUiFont: M, headingFont: N, setHeadingFont: P, proseFont: F, setProseFont: ee, codeFont: I, setCodeFont: te, borderRadius: L, setBorderRadius: R, borderWidth: re, setBorderWidth: ie, tracking: z, setTracking: ae, lineHeight: oe, setLineHeight: se, density: B, setDensity: ce, reducedMotion: le, setReducedMotion: de, saveThemeCustomization: fe, resetThemeCustomization: pe, hasThemeOverrides: me, isCustomized: he, resolvedTheme: ge } = _;
	return /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("button", {
		ref: u,
		onClick: S,
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": n,
		title: "Theme",
		className: V("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", n ? "text-accent bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", e),
		children: /* @__PURE__ */ h(ne, { className: "h-4 w-4" })
	}), n && ue(/* @__PURE__ */ h("div", {
		ref: d,
		role: "dialog",
		"aria-label": "Theme settings",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] flex w-80 flex-col overflow-y-auto rounded-md border p-3 shadow-lg",
		style: {
			top: s.top,
			right: s.right,
			maxHeight: "80vh"
		},
		children: /* @__PURE__ */ g("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(dn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ h("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: yn.map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ g("button", {
						onClick: () => w(e),
						className: V("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", C === e ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ h(n, { className: "h-3.5 w-3.5" }), t]
					}, e))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(dn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ h("div", {
					className: "grid grid-cols-2 gap-2",
					children: Tt.map((e) => /* @__PURE__ */ h(hn, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: T === e.value,
						onClick: () => v(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(dn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ h("div", {
					className: "grid grid-cols-2 gap-2",
					children: wt.map((e) => /* @__PURE__ */ h(hn, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: E === e.value,
						onClick: () => v(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(dn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ h("div", {
					className: "flex flex-wrap gap-1.5",
					children: At.map((e) => /* @__PURE__ */ h("button", {
						onClick: () => O(e.value),
						className: V("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", D === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: e.color,
							...D === e.value ? { "--utility-ring-color": e.color } : {}
						},
						title: e.value.charAt(0).toUpperCase() + e.value.slice(1),
						"aria-label": e.value
					}, e.value))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(dn, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ g("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ h(pn, {
							label: "UI / Body",
							size: "sm",
							options: kt,
							value: j,
							onChange: (e) => M(e)
						}),
						/* @__PURE__ */ h(pn, {
							label: "Headings",
							size: "sm",
							options: kt,
							value: N,
							onChange: (e) => P(e)
						}),
						/* @__PURE__ */ h(pn, {
							label: "Prose",
							size: "sm",
							options: kt,
							value: F,
							onChange: (e) => ee(e)
						}),
						/* @__PURE__ */ h(pn, {
							label: "Code",
							size: "sm",
							options: kt,
							value: I,
							onChange: (e) => te(e)
						})
					]
				})] }),
				/* @__PURE__ */ g("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ h(mn, {
							label: "Font size",
							min: 11,
							max: 18,
							value: k,
							onChange: A,
							showValue: !0
						}),
						/* @__PURE__ */ h(mn, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: L,
							onChange: R,
							showValue: !0
						}),
						/* @__PURE__ */ h(mn, {
							label: "Border width",
							min: 1,
							max: 3,
							value: re,
							onChange: ie,
							showValue: !0
						}),
						/* @__PURE__ */ h(mn, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: z,
							onChange: ae,
							showValue: !0
						}),
						/* @__PURE__ */ h(mn, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: oe,
							onChange: se,
							showValue: !0
						}),
						/* @__PURE__ */ h(mn, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: B,
							onChange: ce,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ h(gn, {
					label: "Reduced motion",
					checked: le,
					onChange: de
				}),
				/* @__PURE__ */ g("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ h(un, {
						variant: "primary",
						size: "sm",
						disabled: !he,
						onClick: () => {
							fe(), y("success", `Saved customization for ${xt.find((e) => e.value === ge)?.label ?? ge}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ h(un, {
						variant: "secondary",
						size: "sm",
						disabled: !me && !he,
						onClick: () => {
							pe(), y("info", "Reset to theme defaults");
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
var xn = [
	"dark",
	"light",
	"system"
], Sn = {
	dark: R,
	light: oe,
	system: L
}, Cn = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function wn({ onMobileMenuToggle: e, breadcrumbs: t, navItems: n = [], navLabel: r = "Primary", showCommandTrigger: i = !0, commandTriggerLabel: a = "Search", commandShortcut: o = mt, currentPath: s, onNavigate: c, onCommandTrigger: l, actions: u }) {
	let { sidebarCollapsed: d, setSidebarCollapsed: f, colorMode: p, setColorMode: _ } = Nt();
	function v() {
		_(xn[(xn.indexOf(p) + 1) % xn.length]);
	}
	let y = Sn[p], b = n.length > 0;
	return /* @__PURE__ */ g("header", {
		className: "border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3",
		style: { height: "var(--topbar-height)" },
		children: [/* @__PURE__ */ g("div", {
			className: "flex min-w-0 items-center gap-2",
			children: [
				/* @__PURE__ */ h("button", {
					onClick: e,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden",
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ h(I, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ h("button", {
					onClick: () => f(!d),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": d ? "Expand sidebar" : "Collapse sidebar",
					children: h(d ? ie : re, { className: "h-4 w-4" })
				}),
				(b || t !== !1) && /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("div", { className: "bg-border hidden h-4 w-px md:block" }), b ? /* @__PURE__ */ h(Tn, {
					items: n,
					label: r,
					currentPath: s,
					onNavigate: c
				}) : t === !1 ? null : /* @__PURE__ */ h(tn, {
					...t,
					currentPath: s,
					onNavigate: c
				})] })
			]
		}), /* @__PURE__ */ g("div", {
			className: "flex shrink-0 items-center gap-1",
			children: [
				u,
				i && /* @__PURE__ */ g("button", {
					onClick: l ?? (() => ht()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ h(z, { className: "h-3 w-3" }),
						/* @__PURE__ */ h("span", {
							className: "text-2xs",
							children: a
						}),
						/* @__PURE__ */ h("kbd", {
							className: "text-2xs font-mono opacity-60",
							children: o.label
						})
					]
				}),
				/* @__PURE__ */ h("button", {
					onClick: v,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded",
					"aria-label": `Color mode: ${Cn[p]}. Click to cycle.`,
					title: Cn[p],
					children: /* @__PURE__ */ h(y, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ h(bn, {})
			]
		})]
	});
}
function Tn({ items: e, label: t, currentPath: n, onNavigate: r }) {
	return /* @__PURE__ */ h("nav", {
		className: "hidden min-w-0 items-center gap-1 md:flex",
		"aria-label": t,
		children: e.map((e) => {
			let t = e.icon, i = st(e, n), a = e.rel ?? (e.target === "_blank" ? "noreferrer" : void 0);
			return /* @__PURE__ */ g("a", {
				href: e.href ?? e.path,
				target: e.target,
				rel: a,
				"aria-current": i ? "page" : void 0,
				onClick: (t) => {
					e.reloadDocument || ct(t, e.path, r);
				},
				className: V("font-navigation flex h-6 max-w-40 items-center gap-1 rounded px-2 text-xs transition-colors duration-[100ms]", i ? "bg-accent-muted text-accent" : "text-text-tertiary hover:bg-bg-hover hover:text-text-primary"),
				children: [
					t && /* @__PURE__ */ h(t, { className: "h-3 w-3 shrink-0" }),
					/* @__PURE__ */ h("span", {
						className: "truncate",
						children: e.label
					}),
					e.badge && /* @__PURE__ */ h("span", {
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
function En({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: l, signOutPath: u, signOutLabel: f, settingsPath: m, settingsLabel: _, onOpenSettings: v, showCommandPalette: y = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, sidebarHeaderActions: C, topBarActions: w, topBarNavItems: T, topBarNavLabel: E, currentPath: D, onNavigate: O, mainClassName: k, className: A }) {
	let [j, M] = p(!1), N = d(() => t.flatMap((e) => e.items), [t]), P = a ?? N;
	return /* @__PURE__ */ g("div", {
		className: V("bg-bg-primary flex h-svh overflow-hidden", A),
		children: [
			/* @__PURE__ */ h("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ h($t, {
				navSections: t,
				brand: n,
				accounts: r,
				initialAccountIndex: s,
				onAccountChange: c,
				onSignOut: l,
				signOutPath: u,
				signOutLabel: f,
				settingsPath: m,
				settingsLabel: _,
				onOpenSettings: v,
				currentPath: D,
				onNavigate: O,
				headerActions: C
			}),
			/* @__PURE__ */ g("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ h(wn, {
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
				}), /* @__PURE__ */ h("main", {
					id: "main-content",
					className: V("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", k),
					children: e
				})]
			}),
			/* @__PURE__ */ h(ut, {
				items: i,
				currentPath: D,
				onNavigate: O
			}),
			/* @__PURE__ */ h(bt, {
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
			y && P.length > 0 && /* @__PURE__ */ h(vt, {
				items: P,
				shortcut: S,
				onNavigate: O
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function Dn({ children: e, className: t }) {
	return /* @__PURE__ */ g("div", {
		className: V("bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ h("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function On({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ g("a", {
		href: e,
		onClick: (t) => ct(t, e, n),
		className: V("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", r),
		children: [/* @__PURE__ */ h(b, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/Checkbox.tsx
function kn({ id: e, checked: t, indeterminate: n, onChange: r, label: i, ariaLabel: a, disabled: o, className: s }) {
	let c = t || n, u = l(), d = e ?? u;
	return /* @__PURE__ */ g("div", {
		className: V("flex w-fit items-center gap-2.5", o ? "cursor-not-allowed opacity-40" : "cursor-pointer", s),
		children: [/* @__PURE__ */ h("button", {
			id: d,
			type: "button",
			role: "checkbox",
			"aria-checked": n ? "mixed" : t,
			"aria-label": a,
			disabled: o,
			onClick: () => r(!t),
			className: V("flex h-4 w-4 shrink-0 items-center justify-center rounded border", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", c ? "bg-accent border-accent" : "bg-bg-secondary border-border", !o && "cursor-pointer"),
			children: n ? /* @__PURE__ */ h(te, { className: "text-text-on-accent h-3 w-3" }) : t ? /* @__PURE__ */ h(w, { className: "text-text-on-accent h-3 w-3" }) : null
		}), i && /* @__PURE__ */ h("label", {
			htmlFor: d,
			className: V("text-text-primary text-xs", o ? "cursor-not-allowed" : "cursor-pointer"),
			children: i
		})]
	});
}
//#endregion
//#region src/components/ui/FilterButton.tsx
var An = i(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ g("button", {
		ref: i,
		className: V("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ h(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ h("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function jn({ columns: e, hidden: n, onToggle: r, label: i = "Columns", heading: a = "Toggle columns", icon: s = A, onOnly: c, onlyLabel: l = "Only", footer: u }) {
	let [d, m] = p(!1), _ = f(null);
	return jt(d, o(() => m(!1), []), [_]), /* @__PURE__ */ g("div", {
		className: "relative",
		ref: _,
		children: [/* @__PURE__ */ h(An, {
			icon: s,
			onClick: () => m(!d),
			children: i
		}), d && /* @__PURE__ */ g("div", {
			className: V("bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 rounded-md border py-1 shadow-lg", c ? "w-56" : "w-48"),
			children: [e.map((i, o) => /* @__PURE__ */ g(t, { children: [(o === 0 || i.group !== e[o - 1].group) && /* @__PURE__ */ h("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: i.group ?? a
			}), /* @__PURE__ */ g("div", {
				onClick: () => r(i.key),
				className: "group text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ h(kn, {
						checked: !n.has(i.key),
						onChange: () => {},
						ariaLabel: i.header
					}),
					/* @__PURE__ */ h("span", {
						className: "min-w-0 flex-1 truncate",
						children: i.header
					}),
					c && /* @__PURE__ */ h("button", {
						type: "button",
						"aria-label": `${l}: ${i.header}`,
						onClick: (e) => {
							e.stopPropagation(), c(i.key);
						},
						className: "text-text-tertiary hover:text-text-primary text-2xs opacity-0 transition-opacity duration-[100ms] group-hover:opacity-100 focus-visible:opacity-100",
						children: l
					})
				]
			})] }, i.key)), u && /* @__PURE__ */ h("div", {
				className: "border-border mt-1 border-t px-3 pt-1",
				children: u
			})]
		})]
	});
}
//#endregion
//#region src/components/tables/Pagination.tsx
function Mn({ page: e, totalPages: t, onPageChange: n }) {
	if (t <= 1) return null;
	let r = [];
	for (let n = 1; n <= t; n++) n === 1 || n === t || n >= e - 1 && n <= e + 1 ? r.push(n) : r[r.length - 1] !== "ellipsis" && r.push("ellipsis");
	return /* @__PURE__ */ g("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ h("button", {
				disabled: e === 1,
				onClick: () => n(e - 1),
				className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30",
				"aria-label": "Previous page",
				children: /* @__PURE__ */ h(D, { className: "h-3.5 w-3.5" })
			}),
			r.map((t, r) => t === "ellipsis" ? /* @__PURE__ */ h("span", {
				className: "text-text-tertiary flex h-7 w-7 items-center justify-center text-xs",
				children: "..."
			}, `e${r}`) : /* @__PURE__ */ h("button", {
				onClick: () => n(t),
				className: V("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ h("button", {
				disabled: e === t,
				onClick: () => n(e + 1),
				className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30",
				"aria-label": "Next page",
				children: /* @__PURE__ */ h(O, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
//#endregion
//#region src/components/tables/sortRows.ts
function Nn(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
function Pn({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: i = "No data", sortKey: a, sortDir: o, onSortChange: s }) {
	let c = s !== void 0, [l, u] = p(null), [f, m] = p("asc"), _ = c ? a ?? null : l, v = c ? o ?? "asc" : f, b = d(() => c ? e : Nn(e, t, _, v), [
		c,
		e,
		t,
		_,
		v
	]);
	function S(e) {
		let t = _ === e && v === "asc" ? "desc" : "asc";
		if (c) {
			s(e, t);
			return;
		}
		u(e), m(t);
	}
	return /* @__PURE__ */ h("div", {
		className: "border-border overflow-x-auto rounded-md border",
		children: /* @__PURE__ */ g("table", {
			className: "font-data w-full text-xs",
			children: [/* @__PURE__ */ h("thead", { children: /* @__PURE__ */ h("tr", {
				className: "border-border bg-bg-secondary border-b",
				children: t.map((e) => /* @__PURE__ */ h("th", {
					className: V("text-2xs text-text-tertiary font-label h-7 px-3 text-left font-semibold tracking-wider uppercase", e.sortable && "hover:text-text-secondary cursor-pointer select-none"),
					style: { width: e.width },
					onClick: e.sortable ? () => S(e.key) : void 0,
					children: /* @__PURE__ */ g("span", {
						className: "inline-flex items-center gap-1",
						children: [e.header, e.sortable && _ === e.key && h(v === "asc" ? x : y, { className: "h-3 w-3" })]
					})
				}, e.key))
			}) }), /* @__PURE__ */ h("tbody", { children: b.length === 0 ? /* @__PURE__ */ h("tr", { children: /* @__PURE__ */ h("td", {
				colSpan: t.length,
				className: "text-text-tertiary h-32 text-center",
				children: i
			}) }) : b.map((e) => /* @__PURE__ */ h("tr", {
				className: V("border-border h-8 border-b last:border-b-0", "hover:bg-bg-hover", r && "cursor-pointer"),
				onClick: r ? () => r(e) : void 0,
				children: t.map((t) => /* @__PURE__ */ h("td", {
					className: V("text-text-primary px-3 whitespace-nowrap", t.cellClassName),
					onClick: t.interactive && r ? (e) => e.stopPropagation() : void 0,
					children: t.render(e)
				}, t.key))
			}, n(e))) })]
		})
	});
}
//#endregion
//#region src/components/ui/Alert.tsx
var Fn = {
	success: {
		bg: "bg-green-muted",
		border: "border-green/30",
		icon: T,
		iconColor: "text-green"
	},
	warning: {
		bg: "bg-yellow-muted",
		border: "border-yellow/30",
		icon: v,
		iconColor: "text-yellow"
	},
	error: {
		bg: "bg-red-muted",
		border: "border-red/30",
		icon: ce,
		iconColor: "text-red"
	},
	info: {
		bg: "bg-blue-muted",
		border: "border-blue/30",
		icon: P,
		iconColor: "text-blue"
	}
};
function In({ type: e, title: t, children: n, dismissible: r, className: i }) {
	let [a, o] = p(!1);
	if (a) return null;
	let s = Fn[e], c = s.icon;
	return /* @__PURE__ */ g("div", {
		className: V("flex gap-2.5 rounded-md border p-3", s.bg, s.border, i),
		children: [
			/* @__PURE__ */ h(c, { className: V("mt-0.5 h-4 w-4 shrink-0", s.iconColor) }),
			/* @__PURE__ */ g("div", {
				className: "min-w-0 flex-1",
				children: [t && /* @__PURE__ */ h("p", {
					className: "text-text-primary mb-0.5 text-xs font-semibold",
					children: t
				}), /* @__PURE__ */ h("div", {
					className: "text-text-secondary text-xs",
					children: n
				})]
			}),
			r && /* @__PURE__ */ h("button", {
				onClick: () => o(!0),
				className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ h(B, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/components/ui/AuthCard.tsx
function Ln({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ h("div", {
		className: V("relative z-10 w-full max-w-sm", a),
		children: /* @__PURE__ */ g("div", {
			className: "bg-bg-secondary border-border rounded-lg border p-8 shadow-lg",
			children: [
				/* @__PURE__ */ g("div", {
					className: "mb-6 flex flex-col items-center",
					children: [
						n && /* @__PURE__ */ h("div", {
							className: "bg-accent-muted mb-3 flex h-12 w-12 items-center justify-center rounded-xl",
							children: /* @__PURE__ */ h(n, { className: "text-accent h-6 w-6" })
						}),
						/* @__PURE__ */ h("h1", {
							className: "text-text-primary text-lg font-semibold",
							children: e
						}),
						t && /* @__PURE__ */ h("p", {
							className: "text-text-secondary mt-1 text-xs",
							children: t
						})
					]
				}),
				r,
				i && /* @__PURE__ */ h("p", {
					className: "text-text-secondary mt-6 text-center text-xs",
					children: i
				})
			]
		})
	});
}
//#endregion
//#region src/components/ui/AuthorByline.tsx
function Rn({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ g("div", {
		className: V("flex items-center gap-2", i),
		children: [/* @__PURE__ */ h(Lt, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ g("div", { children: [/* @__PURE__ */ g("p", {
			className: V("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ h("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var zn = {
	green: "bg-green-muted text-green",
	yellow: "bg-yellow-muted text-yellow",
	red: "bg-red-muted text-red",
	blue: "bg-blue-muted text-blue",
	purple: "bg-purple-muted text-purple",
	gray: "bg-bg-hover text-text-secondary"
}, Bn = {
	green: "bg-green",
	yellow: "bg-yellow",
	red: "bg-red",
	blue: "bg-blue",
	purple: "bg-purple",
	gray: "bg-text-tertiary"
};
function Vn({ color: e = "gray", dot: t, children: n, className: r }) {
	return /* @__PURE__ */ g("span", {
		className: V("font-label text-2xs inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-medium", zn[e], r),
		children: [t && /* @__PURE__ */ h("span", { className: V("h-1.5 w-1.5 rounded-full", Bn[e]) }), n]
	});
}
//#endregion
//#region src/lib/calendar.ts
var Hn = 1440, Un = 6e4, Wn = [
	1,
	2,
	3,
	4,
	5
];
function Gn(e) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate());
}
function Y(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function Kn(e, t) {
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes() + t, e.getSeconds(), e.getMilliseconds());
}
function qn(e, t) {
	let n = new Date(e.getFullYear(), e.getMonth() + t, 1), r = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
	return new Date(n.getFullYear(), n.getMonth(), Math.min(e.getDate(), r), e.getHours(), e.getMinutes());
}
function Jn(e, t = 1) {
	let n = Gn(e);
	return Y(n, -((n.getDay() - t + 7) % 7));
}
function Yn(e) {
	return new Date(e.getFullYear(), e.getMonth(), 1);
}
function Xn(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Zn(e, t) {
	let n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()), r = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
	return Math.round((n - r) / 864e5);
}
function X(e) {
	return e.getHours() * 60 + e.getMinutes() + e.getSeconds() / 60 + e.getMilliseconds() / Un;
}
function Qn(e, t) {
	let n = Z(e, t);
	if (!Xn(n, e) || X(n) <= t) return n;
	let r = Math.floor(t);
	for (; r > 0 && X(Z(e, r - 1)) !== r - 1;) r--;
	return /* @__PURE__ */ new Date(n.getTime() - (t - r) * Un);
}
function Z(e, t) {
	let n = Math.floor(t);
	return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, n, Math.round((t - n) * 60));
}
function $n(e) {
	let t = /^(\d{1,2}):(\d{2})$/.exec(e.trim());
	if (!t) throw RangeError(`Invalid time "${e}", expected HH:mm`);
	let n = Number(t[1]), r = Number(t[2]);
	if (r > 59 || n > 24 || n === 24 && r > 0) throw RangeError(`Invalid time "${e}"`);
	return n * 60 + r;
}
function er(e) {
	let t = Math.round(e), n = Math.floor(t / 60), r = t % 60;
	return `${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function Q(e) {
	return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
}
function tr(e) {
	let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
	if (!t) throw RangeError(`Invalid date key "${e}"`);
	let n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
	if (Q(n) !== e) throw RangeError(`Invalid date key "${e}"`);
	return n;
}
function nr(e, t, n = "round") {
	if (t <= 0) return e;
	let r = n === "floor" ? Math.floor : n === "ceil" ? Math.ceil : Math.round, i = e / t;
	return r(n === "floor" ? i + 1e-9 : n === "ceil" ? i - 1e-9 : i) * t;
}
function rr(e, t, n = "round") {
	return Z(Gn(e), nr(X(e), t, n));
}
function $(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function ir(e) {
	return e === "day" || e === "threeDay" || e === "workWeek" || e === "week";
}
function ar(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = Gn(t);
	switch (e) {
		case "day":
		case "timeline": return [i];
		case "threeDay": return [
			i,
			Y(i, 1),
			Y(i, 2)
		];
		case "week": {
			let e = Jn(i, r);
			return Array.from({ length: 7 }, (t, n) => Y(e, n));
		}
		case "workWeek": {
			let e = new Set(n.workWeekDays ?? Wn), t = Jn(i, r), a = Array.from({ length: 7 }, (e, n) => Y(t, n)).filter((t) => e.has(t.getDay()));
			return a.length ? a : [i];
		}
		case "agenda": {
			let e = Math.max(1, Math.floor(n.agendaDays ?? 7));
			return Array.from({ length: e }, (e, t) => Y(i, t));
		}
		case "month": return or(t, r).flat();
	}
}
function or(e, t = 1) {
	let n = Yn(e), r = new Date(n.getFullYear(), n.getMonth() + 1, 0), i = Jn(n, t), a = [], o = i;
	for (; o <= r || a.length === 0;) {
		let e = Array.from({ length: 7 }, (e, t) => Y(o, t));
		a.push(e), o = Y(o, 7);
	}
	return a;
}
function sr(e, t, n = {}) {
	let r = ar(e, t, n);
	return {
		start: r[0],
		end: Y(r[r.length - 1], 1)
	};
}
function cr(e, t, n, r = {}) {
	switch (e) {
		case "day":
		case "timeline": return Y(t, n);
		case "threeDay": return Y(t, 3 * n);
		case "week":
		case "workWeek": return Y(t, 7 * n);
		case "agenda": return Y(t, Math.max(1, r.agendaDays ?? 7) * n);
		case "month": return qn(t, n);
	}
}
var lr = /* @__PURE__ */ new Map();
function ur(e, t) {
	let n = `${e}|${JSON.stringify(t)}`, r = lr.get(n);
	return r || (r = new Intl.DateTimeFormat(e, t), lr.set(n, r)), r;
}
function dr(e, t = {}) {
	return ur(t.locale ?? "en-GB", {
		hour: t.hour12 ? "numeric" : "2-digit",
		minute: "2-digit",
		hourCycle: t.hour12 ? "h12" : "h23"
	}).format(e);
}
function fr(e, t, n = {}) {
	return `${dr(e, n)}–${dr(t, n)}`;
}
function pr(e, t = {}) {
	if (!t.hour12) return er(e);
	let n = Z(new Date(2e3, 0, 1), e);
	return ur(t.locale ?? "en-GB", {
		hour: "numeric",
		minute: e % 60 ? "2-digit" : void 0,
		hour12: !0
	}).format(n);
}
function mr(e, t = "en-GB") {
	return ur(t, {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(e);
}
function hr(e, t, n = {}) {
	let r = n.locale ?? "en-GB";
	if (e === "month") return ur(r, {
		month: "long",
		year: "numeric"
	}).format(t);
	let i = ar(e, t, n), a = i[0], o = i[i.length - 1];
	if (i.length === 1) return mr(a, r);
	let s = a.getFullYear() === o.getFullYear(), c = s && a.getMonth() === o.getMonth(), l = ur(r, {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	if (c) return `${a.getDate()} – ${l.format(o)}`;
	let u = ur(r, s ? {
		day: "numeric",
		month: "short"
	} : {
		day: "numeric",
		month: "short",
		year: "numeric"
	}), d = ur(r, {
		day: "numeric",
		month: "short",
		year: "numeric"
	});
	return `${u.format(a)} – ${d.format(o)}`;
}
function gr(e, t, n, r) {
	return e < r && n < t;
}
function _r(e, t, n) {
	let r = Gn(n), i = Y(r, 1), a = e.getTime(), o = Math.max(t.getTime(), a);
	if (o === a) {
		if (a < r.getTime() || a >= i.getTime()) return null;
	} else if (!gr(a, o, r.getTime(), i.getTime())) return null;
	let s = a < r.getTime(), c = o > i.getTime();
	return {
		startMinute: s ? 0 : X(e),
		endMinute: o >= i.getTime() ? Hn : Math.max(X(t), s ? 0 : X(e)),
		continuesBefore: s,
		continuesAfter: c
	};
}
function vr(e) {
	let t = e.filter(([e, t]) => t > e).map(([e, t]) => [e, t]).sort((e, t) => e[0] - t[0]), n = [];
	for (let [e, r] of t) {
		let t = n[n.length - 1];
		t && e <= t[1] ? t[1] = Math.max(t[1], r) : n.push([e, r]);
	}
	return n;
}
function yr(e, t, n) {
	let r = [], i = e;
	for (let [e, a] of vr(n)) if (!(a <= i) && (e >= t || (e > i && r.push([i, Math.min(e, t)]), i = Math.max(i, a), i >= t))) break;
	return i < t && r.push([i, t]), r;
}
function br(e, t = 0) {
	let n = e.map((e) => ({
		id: e.id,
		start: e.start,
		end: Math.max(e.end, e.start + t)
	})).sort((e, t) => e.start - t.start || t.end - e.end || (e.id < t.id ? -1 : 1)), r = /* @__PURE__ */ new Map(), i = [], a = [], o = -Infinity, s = () => {
		let e = a.length;
		for (let t of i) {
			let n = 1;
			for (let r = t.column + 1; r < e && !i.some((e) => e.column === r && gr(t.start, t.end, e.start, e.end)); r++) n++;
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
function xr(e) {
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
function Sr(e) {
	return e === void 0 ? [] : typeof e == "string" ? [e] : e;
}
function Cr(e, t, { emptyMatchesAll: n }) {
	if (t === void 0) return !0;
	let r = Sr(e);
	return r.length === 0 ? n : r.includes(t);
}
function wr(e, t, n) {
	let r = Sr(e);
	if (t === void 0 || n === void 0 || t === n) return r.length ? [...r] : void 0;
	if (r.length === 0) return;
	let i = r.map((e) => e === t ? n : e);
	return [...new Set(i)];
}
function Tr(e, t, n = []) {
	let r = /* @__PURE__ */ new Set(), i = e.start.getTime(), a = e.end.getTime();
	for (let e of [...t, ...n]) if (gr(e.start.getTime(), e.end.getTime(), i, a) && !("kind" in e && e.kind === "unavailable")) for (let t of Sr(e.resourceId)) r.add(t);
	return r;
}
function Er(e, t, n = {}) {
	let r = n.weekStartsOn ?? 1, i = [], a = t.start.getTime(), o = t.end.getTime();
	for (let n of e) {
		let e = $n(n.startTime), s = $n(n.endTime);
		s <= e && (s += Hn);
		let c = tr(n.startDate), l = (t) => {
			let r = Z(t, e), c = Z(t, s);
			if (!gr(r.getTime(), c.getTime(), a, o)) return;
			let l = Q(t);
			i.push({
				id: n.recurrence ? `${n.id}@${l}` : n.id,
				start: r,
				end: c,
				kind: n.kind ?? "available",
				resourceId: n.resourceId,
				label: n.label,
				color: n.color,
				editable: n.editable,
				seriesId: n.recurrence ? n.id : void 0,
				occurrenceKey: n.recurrence ? l : void 0,
				data: n.data
			});
		}, u = n.recurrence;
		if (!u) {
			l(c);
			continue;
		}
		let d = Math.max(1, Math.floor(u.interval ?? 1)), f = new Set(u.weekdays);
		if (f.size === 0) continue;
		let p = new Set(u.exclusions ?? []), m = u.until ? tr(u.until) : null, h = Jn(c, r), g = Gn(t.start);
		g = Y(g, -1), g < c && (g = c);
		let _ = Gn(t.end);
		for (; g <= _ && (!m || g <= m);) f.has(g.getDay()) && Math.floor(Zn(Jn(g, r), h) / 7) % d === 0 && !p.has(Q(g)) && l(g), g = Y(g, 1);
	}
	return i.sort((e, t) => e.start.getTime() - t.start.getTime());
}
function Dr(e, t, n, r, i) {
	let a = nr(t, r, "floor"), o = nr(n, r, "floor"), s = $(Math.min(a, o), i.min, i.max - r), c = $(Math.max(a, o) + r, s + r, i.max), l = Qn(e, s), u = Qn(e, c);
	return u <= l && (u = new Date(l.getTime() + r * Un)), {
		start: l,
		end: u
	};
}
function Or(e, t, n, r, i, a) {
	let o = (e.end.getTime() - e.start.getTime()) / Un, s = nr(n - r, i), c = X(e.start);
	c >= a.min && c + o <= a.max && (s = $(s, a.min, a.max - o));
	let l = Z(t, s);
	return {
		start: l,
		end: new Date(l.getTime() + o * Un)
	};
}
function kr(e, t, n, r, i) {
	let a = Gn(t), o = e.start.getTime() >= a.getTime() ? X(e.start) + r : r;
	return Qn(a, $(nr(n, r), Math.min(o, Hn), Math.max(i.max, o)));
}
function Ar(e, t, n) {
	let r = (e.end.getTime() - e.start.getTime()) / Un, i = X(e.start), a = t;
	i >= n.min && i + r <= n.max && (a = $(i + t, n.min, n.max - r) - i);
	let o = Kn(e.start, a);
	return {
		start: o,
		end: new Date(o.getTime() + r * Un)
	};
}
function jr(e, t) {
	return {
		start: Y(e.start, t),
		end: Y(e.end, t)
	};
}
function Mr(e, t) {
	return e.start.getTime() === t.start.getTime() && e.end.getTime() === t.end.getTime();
}
function Nr(e) {
	return e.allDay ? !0 : e.end.getTime() >= Y(e.start, 1).getTime();
}
function Pr(e, t) {
	let n = Gn(t).getTime(), r = Y(Gn(t), 1).getTime();
	return e.filter((e) => {
		let t = e.start.getTime();
		return gr(t, Math.max(e.end.getTime(), t + 1), n, r);
	}).sort((e, t) => Number(Nr(t)) - Number(Nr(e)) || e.start.getTime() - t.start.getTime() || t.end.getTime() - e.end.getTime() || e.title.localeCompare(t.title));
}
//#endregion
//#region src/components/ui/calendar/context.ts
var Fr = r(null);
function Ir() {
	let e = s(Fr);
	if (!e) throw Error("Calendar views must render inside <Calendar>");
	return e;
}
//#endregion
//#region src/components/ui/calendar/AgendaView.tsx
function Lr({ days: e, events: t, availability: n, label: r }) {
	let i = Ir(), a = ur(i.locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}), o = (e) => Sr(e).map((e) => i.resourceById.get(e)?.title).filter(Boolean).join(", ");
	return /* @__PURE__ */ h("div", {
		className: "ui-cal-scroll min-h-0 flex-1 overflow-y-auto",
		"aria-label": r,
		role: "region",
		children: e.map((e) => {
			let r = Pr(t, e).map((e) => ({
				type: "event",
				value: e
			}));
			if (i.agendaShowAvailability) {
				for (let t of n) _r(t.start, t.end, e) && r.push({
					type: "availability",
					value: t
				});
				r.sort((e, t) => {
					let n = Number(e.type === "event" && Nr(e.value)) - Number(t.type === "event" && Nr(t.value));
					return n ? -n : e.value.start.getTime() - t.value.start.getTime() || (e.type === "availability" ? -1 : 1);
				});
			}
			let s = Xn(e, i.now);
			return /* @__PURE__ */ g("section", {
				"aria-label": a.format(e),
				children: [/* @__PURE__ */ h("h3", {
					className: V("ui-cal-agenda-day border-border border-b px-3 py-1.5 text-xs font-semibold", s ? "text-accent" : "text-text-primary"),
					children: /* @__PURE__ */ h("button", {
						type: "button",
						className: "cursor-pointer hover:underline",
						onClick: () => i.openDay(e),
						"aria-current": s ? "date" : void 0,
						children: a.format(e)
					})
				}), r.length === 0 ? /* @__PURE__ */ h("p", {
					className: "text-text-tertiary border-border border-b px-3 py-2 text-xs",
					children: i.labels.noEvents
				}) : /* @__PURE__ */ h("ul", {
					className: "divide-border divide-y border-border border-b",
					children: r.map((e) => /* @__PURE__ */ h("li", { children: e.type === "event" ? /* @__PURE__ */ h(Rr, {
						event: e.value,
						resources: o(e.value.resourceId)
					}) : /* @__PURE__ */ h(zr, {
						block: e.value,
						resources: o(e.value.resourceId)
					}) }, `${e.type}:${e.value.id}`))
				})]
			}, Q(e));
		})
	});
}
function Rr({ event: e, resources: t }) {
	let n = Ir(), r = n.statusLabel(e), i = Nr(e) ? n.labels.allDay : fr(e.start, e.end, n);
	return /* @__PURE__ */ g("div", {
		role: "button",
		tabIndex: 0,
		"aria-label": n.describeEvent(e),
		"data-status": e.status ?? "confirmed",
		className: V("ui-cal-agenda-row hover:bg-bg-hover flex cursor-pointer items-start gap-3 px-3 py-2 transition-colors duration-[100ms]", `ui-cal-c-${n.eventColor(e)}`),
		onClick: () => n.clickEvent(e),
		onKeyDown: (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickEvent(e));
		},
		children: [
			/* @__PURE__ */ h("span", {
				className: "text-text-secondary font-mono w-24 shrink-0 text-xs",
				children: i
			}),
			/* @__PURE__ */ h("span", {
				className: "ui-cal-dot mt-1",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ g("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ h("span", {
					className: "ui-cal-title block text-xs",
					children: e.title
				}), e.description && /* @__PURE__ */ h("span", {
					className: "ui-cal-meta block text-2xs",
					children: e.description
				})]
			}),
			t && /* @__PURE__ */ h("span", {
				className: "text-text-tertiary hidden max-w-40 truncate text-2xs sm:block",
				children: t
			}),
			(r || e.badge) && /* @__PURE__ */ g("span", {
				className: "flex shrink-0 gap-1",
				children: [r && /* @__PURE__ */ h("span", {
					className: "ui-cal-badge",
					children: r
				}), e.badge && /* @__PURE__ */ h("span", {
					className: "ui-cal-badge",
					children: e.badge
				})]
			})
		]
	});
}
function zr({ block: e, resources: t }) {
	let n = Ir(), r = e.kind ?? "available", i = r === "available" ? n.labels.available : n.labels.unavailable, a = n.hasBlockClick;
	return /* @__PURE__ */ g("div", {
		role: a ? "button" : void 0,
		tabIndex: a ? 0 : void 0,
		"aria-label": n.describeBlock(e),
		className: V("text-text-tertiary flex items-start gap-3 px-3 py-1.5 text-2xs", a && "hover:bg-bg-hover cursor-pointer transition-colors duration-[100ms]", `ui-cal-c-${n.blockColor(e)}`),
		onClick: a ? () => n.clickBlock(e) : void 0,
		onKeyDown: a ? (t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n.clickBlock(e));
		} : void 0,
		children: [
			/* @__PURE__ */ h("span", {
				className: "font-mono w-24 shrink-0",
				children: fr(e.start, e.end, n)
			}),
			/* @__PURE__ */ h("span", {
				className: V("ui-cal-agenda-swatch mt-0.5", r === "unavailable" && "ui-cal-agenda-swatch-off"),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ g("span", {
				className: "min-w-0 flex-1 truncate",
				children: [i, e.label ? ` · ${e.label}` : ""]
			}),
			t && /* @__PURE__ */ h("span", {
				className: "hidden max-w-40 truncate sm:block",
				children: t
			})
		]
	});
}
//#endregion
//#region src/components/ui/calendar/MonthView.tsx
var Br = 96, Vr = 224;
function Hr(e) {
	return `${e.type}:${e.value.id}`;
}
function Ur({ date: e, events: t, availability: n, label: r }) {
	let i = Ir(), a = d(() => or(e, i.weekStartsOn), [e, i.weekStartsOn]), s = f(null), l = f(null), [m, _] = p(null), [v, y] = p(null), [b, x] = p({
		top: 0,
		left: 0,
		width: 0
	}), [S, C] = p(null), [w, T] = p(null), E = f(null), D = f(i);
	u(() => {
		D.current = i;
	}), c(() => {
		let e = E;
		return () => {
			e.current?.cleanup(), e.current = null;
		};
	}, []);
	let O = f(!1), [k, A] = p(null);
	c(() => {
		let e = s.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver((e) => {
			A(e[0]?.contentRect.height ?? null);
		});
		return t.observe(e), () => t.disconnect();
	}, []);
	let j = o(() => y(null), []);
	jt(v !== null, j, [l]), c(() => {
		v && l.current?.querySelector("[data-cal-close]")?.focus();
	}, [v]);
	let M = i.editLayer === "availability", N = e.getMonth(), P = d(() => a.flat(), [a]), F = Q(i.now), ee = P.find((e) => Q(e) === F && e.getMonth() === N) ?? P.find((t) => t.getMonth() === N && t.getDate() === e.getDate()) ?? P.find((e) => e.getMonth() === N) ?? P[0], I = m && P.some((e) => Q(e) === m) ? m : Q(ee), te = d(() => {
		let e = /* @__PURE__ */ new Map();
		for (let r of P) {
			let i = Pr(t, r).map((e) => ({
				type: "event",
				value: e
			})), a = n.filter((e) => _r(e.start, e.end, r)).sort((e, t) => e.start.getTime() - t.start.getTime()), o = a.some((e) => (e.kind ?? "available") === "available"), s = M ? a.map((e) => ({
				type: "availability",
				value: e
			})) : i;
			e.set(Q(r), {
				items: s,
				hasAvailable: o
			});
		}
		return e;
	}, [
		P,
		t,
		n,
		M
	]), L = ur(i.locale, { weekday: "short" }), R = i.monthMaxEvents ?? (k ? Math.max(1, Math.floor((Math.max(k / a.length, Br) - 28) / 20)) : 3);
	function ne(e) {
		let t = Q(e);
		_(t), requestAnimationFrame(() => {
			s.current?.querySelector(`[data-cal-date="${t}"]`)?.focus();
		});
	}
	function re(e, t) {
		if (e.target !== e.currentTarget) return;
		let n = {
			ArrowLeft: -1,
			ArrowRight: 1,
			ArrowUp: -7,
			ArrowDown: 7
		};
		if (e.key in n) {
			e.preventDefault();
			let r = Y(t, n[e.key]);
			P.some((e) => Xn(e, r)) && ne(r);
		} else if (e.key === "Home" || e.key === "End") {
			e.preventDefault();
			let n = (t.getDay() - i.weekStartsOn + 7) % 7;
			ne(Y(t, e.key === "Home" ? -n : 6 - n));
		} else (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i.openDay(t));
	}
	function ie(e) {
		return e.type === "event" ? i.canEditEvent(e.value) : i.canEditBlock(e.value);
	}
	function z(e, t) {
		let n = {
			action: "move",
			...jr(e.value, t),
			resourceIds: wr(e.value.resourceId, void 0, void 0)
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
	function ae(e) {
		e.type === "event" ? i.clickEvent(e.value) : i.clickBlock(e.value);
	}
	function oe(e, t, n) {
		if (e.button !== 0 || E.current || (e.stopPropagation(), e.pointerType === "touch" || !ie(t))) return;
		let r = (e) => {
			let t = E.current;
			if (!t || e.pointerId !== t.pointerId) return;
			if (!t.started) {
				if (Math.hypot(e.clientX - t.startX, e.clientY - t.startY) < 4) return;
				t.started = !0, T(Hr(t.item));
			}
			let n = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-cal-date]"), r = n && s.current?.contains(n) ? n.dataset.calDate ?? null : null;
			t.overKey = r ?? void 0, C(r);
		}, i = (e) => {
			let t = E.current;
			if (!t || (E.current = null, t.cleanup(), C(null), T(null), t.started && (O.current = !0, setTimeout(() => {
				O.current = !1;
			}, 0)), !e || !t.started || !t.overKey || t.overKey === t.originKey)) return;
			let n = Zn(tr(t.overKey), tr(t.originKey));
			D.current.commit(z(t.item, n), "pointer");
		}, a = (e) => {
			e.pointerId === E.current?.pointerId && i(!0);
		}, o = (e) => {
			e.pointerId === E.current?.pointerId && i(!1);
		}, c = (e) => {
			e.key === "Escape" && i(!1);
		};
		window.addEventListener("pointermove", r), window.addEventListener("pointerup", a), window.addEventListener("pointercancel", o), window.addEventListener("keydown", c), E.current = {
			item: t,
			originKey: n,
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			started: !1,
			cleanup: () => {
				window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", o), window.removeEventListener("keydown", c);
			}
		};
	}
	function se(e) {
		O.current || ae(e);
	}
	function ce(e, t) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault(), e.stopPropagation(), ae(t);
			return;
		}
		if (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
			if (e.preventDefault(), e.stopPropagation(), !ie(t)) return;
			i.commit(z(t, e.key === "ArrowLeft" ? -1 : 1), "keyboard");
		}
	}
	function le(e, t) {
		e.target !== e.currentTarget || !i.selectable || i.commit({
			target: "selection",
			action: "create",
			start: t,
			end: Y(t, 1),
			allDay: !0
		}, "pointer");
	}
	let de = (e, t) => {
		let n = Hr(e), r = e.value.placeholder ? {
			"aria-hidden": !0,
			"data-placeholder": !0
		} : {
			role: "button",
			tabIndex: 0,
			onPointerDown: (n) => oe(n, e, t),
			onClick: () => se(e),
			onKeyDown: (t) => ce(t, e)
		};
		if (e.type === "availability") {
			let t = e.value;
			return /* @__PURE__ */ g("div", {
				className: V("ui-cal-chip", `ui-cal-c-${i.blockColor(t)}`),
				"data-all-day": !0,
				"data-dragging": w === n || void 0,
				"aria-label": t.placeholder ? void 0 : i.describeBlock(t),
				...r,
				children: [i.display.time && /* @__PURE__ */ h("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: fr(t.start, t.end, i)
				}), i.display.blockLabels && /* @__PURE__ */ h("span", {
					className: "ui-cal-title",
					children: t.label ?? ((t.kind ?? "available") === "available" ? i.labels.available : i.labels.unavailable)
				})]
			}, n);
		}
		let a = e.value, o = Nr(a), s = i.statusLabel(a);
		return /* @__PURE__ */ g("div", {
			className: V("ui-cal-chip", `ui-cal-c-${i.eventColor(a)}`),
			"data-all-day": o || void 0,
			"data-status": a.status ?? "confirmed",
			"data-dragging": w === n || void 0,
			"aria-label": a.placeholder ? void 0 : i.describeEvent(a),
			title: s ? `${a.title} (${s})` : a.title,
			...r,
			children: [
				!o && /* @__PURE__ */ h("span", {
					className: "ui-cal-dot",
					"aria-hidden": "true"
				}),
				!o && i.display.time && /* @__PURE__ */ h("span", {
					className: "ui-cal-meta font-mono shrink-0",
					children: dr(a.start, i)
				}),
				/* @__PURE__ */ h("span", {
					className: "ui-cal-title font-medium",
					children: a.title
				})
			]
		}, n);
	};
	return /* @__PURE__ */ g("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [/* @__PURE__ */ h("div", {
			className: "border-border grid grid-cols-7 border-b",
			"aria-hidden": "true",
			children: a[0].map((e) => /* @__PURE__ */ h("div", {
				className: "text-text-tertiary py-1.5 text-center text-2xs font-medium uppercase",
				children: L.format(e)
			}, e.getDay()))
		}), /* @__PURE__ */ h("div", {
			ref: s,
			role: "grid",
			"aria-label": r,
			"data-cal-drag": w ? "move" : void 0,
			className: "ui-cal-scroll flex min-h-0 flex-1 flex-col overflow-y-auto",
			children: a.map((e) => /* @__PURE__ */ h("div", {
				role: "row",
				className: "grid min-h-24 flex-1 grid-cols-7",
				children: e.map((e) => {
					let t = Q(e), n = te.get(t), r = n?.items ?? [], a = Math.max(1, R), o = r.length > a, s = o ? r.slice(0, a - 1) : r, c = t === F, u = e.getMonth() !== N, d = i.hasAvailability && i.shadeOutsideAvailability && !n?.hasAvailable;
					return /* @__PURE__ */ g("div", {
						role: "gridcell",
						tabIndex: t === I ? 0 : -1,
						"data-cal-date": t,
						"data-outside-month": u || void 0,
						"data-unavailable": d || void 0,
						"data-drop-target": S === t || void 0,
						"aria-label": `${mr(e, i.locale)}${r.length ? `, ${i.labels.eventCount(r.length)}` : ""}`,
						"aria-current": c ? "date" : void 0,
						className: "ui-cal-month-cell flex flex-col gap-0.5 p-1",
						onFocus: (e) => {
							e.target === e.currentTarget && _(t);
						},
						onKeyDown: (t) => re(t, e),
						onClick: (t) => le(t, e),
						children: [
							/* @__PURE__ */ h("button", {
								type: "button",
								tabIndex: -1,
								onClick: () => i.openDay(e),
								"aria-label": mr(e, i.locale),
								className: V("flex h-5 min-w-5 cursor-pointer items-center justify-center self-start rounded-full px-1 text-2xs font-semibold transition-colors duration-[100ms]", c ? "bg-accent text-text-on-accent" : u ? "text-text-tertiary hover:bg-bg-hover" : "text-text-primary hover:bg-bg-hover"),
								children: e.getDate()
							}),
							s.map((e) => de(e, t)),
							o && /* @__PURE__ */ h("button", {
								type: "button",
								className: "text-text-secondary hover:bg-bg-hover hover:text-text-primary cursor-pointer self-start rounded-md px-1 text-2xs font-medium transition-colors duration-[100ms]",
								"aria-haspopup": "dialog",
								"aria-expanded": v === t,
								onClick: (e) => {
									let n = e.currentTarget.closest("[data-cal-date]")?.getBoundingClientRect();
									if (n) {
										let e = Math.max(n.width, Vr);
										x({
											top: Math.max(8, n.top),
											left: Math.max(8, Math.min(n.left, window.innerWidth - e - 8)),
											width: e
										});
									}
									y(t);
								},
								children: i.labels.more(r.length - s.length)
							}),
							v === t && ue(/* @__PURE__ */ g("div", {
								ref: l,
								role: "dialog",
								"aria-label": mr(e, i.locale),
								className: "ui-cal ui-cal-popover flex flex-col gap-0.5",
								style: b,
								children: [/* @__PURE__ */ g("div", {
									className: "mb-1 flex items-center justify-between gap-2 pl-1",
									children: [/* @__PURE__ */ h("button", {
										type: "button",
										className: "text-text-primary cursor-pointer text-xs font-semibold hover:underline",
										onClick: () => i.openDay(e),
										children: mr(e, i.locale)
									}), /* @__PURE__ */ h("button", {
										type: "button",
										"aria-label": i.labels.close,
										className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
										onClick: j,
										"data-cal-close": !0,
										children: /* @__PURE__ */ h(B, { className: "h-3.5 w-3.5" })
									})]
								}), r.map((e) => de(e, t))]
							}), document.body)
						]
					}, t);
				})
			}, Q(e[0])))
		})]
	});
}
//#endregion
//#region src/components/ui/calendar/items.tsx
function Wr({ event: e, style: t, resizeEdge: n, compact: r, dense: i, continuesBefore: a, continuesAfter: o, dragging: s, onKeyDown: c, onClick: l }) {
	let u = Ir(), d = u.canEditEvent(e), f = e.allDay ? u.labels.allDay : fr(e.start, e.end, u), { display: p } = u, _ = p.status ? u.statusLabel(e) : void 0, v = [p.time && f, _].filter(Boolean).join(" · "), y = !!e.placeholder, b = u.renderEvent?.(e, {
		view: u.view,
		compact: r,
		timeLabel: f,
		statusLabel: _
	});
	return /* @__PURE__ */ g("div", {
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
		className: V("ui-cal-event", `ui-cal-c-${u.eventColor(e)}`),
		style: t,
		onKeyDown: y ? void 0 : c,
		onClick: y ? void 0 : l,
		children: [b ?? (i ? /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("span", {
			className: "ui-cal-title",
			children: e.title
		}), v && /* @__PURE__ */ h("span", {
			className: "ui-cal-meta font-mono",
			children: v
		})] }) : /* @__PURE__ */ h(Gr, {
			event: e,
			compact: r,
			timeLabel: p.time ? f : void 0,
			statusLabel: _,
			description: p.description ? e.description : void 0,
			badge: p.badge ? e.badge : void 0
		})), n && d && !o && /* @__PURE__ */ h("div", {
			"data-cal-resize": !0,
			"data-edge": n,
			className: "ui-cal-resize",
			"aria-hidden": "true"
		})]
	});
}
function Gr({ event: e, compact: t, timeLabel: n, statusLabel: r, description: i, badge: a }) {
	return t ? /* @__PURE__ */ g("div", {
		className: "flex min-w-0 items-center gap-1",
		children: [/* @__PURE__ */ g("span", {
			className: "ui-cal-title min-w-0",
			children: [e.title, !e.allDay && n && /* @__PURE__ */ g("span", {
				className: "ui-cal-inline-time font-mono",
				children: [", ", n.split("–")[0]]
			})]
		}), r && /* @__PURE__ */ h("span", {
			className: "ui-cal-badge shrink-0",
			children: r
		})]
	}) : /* @__PURE__ */ g(m, { children: [
		/* @__PURE__ */ h("span", {
			className: "ui-cal-title",
			children: e.title
		}),
		n && /* @__PURE__ */ h("span", {
			className: "ui-cal-meta font-mono",
			children: n
		}),
		i && /* @__PURE__ */ h("span", {
			className: "ui-cal-meta",
			children: i
		}),
		(r || a) && /* @__PURE__ */ g("span", {
			className: "flex min-w-0 flex-wrap gap-1",
			children: [r && /* @__PURE__ */ h("span", {
				className: "ui-cal-badge",
				children: r
			}), a && /* @__PURE__ */ h("span", {
				className: "ui-cal-badge",
				children: a
			})]
		})
	] });
}
function Kr({ block: e, style: t, resizeEdge: n, continuesAfter: r, dragging: i, onKeyDown: a, onClick: o }) {
	let s = Ir(), c = s.editLayer === "availability", l = c && s.canEditBlock(e), u = e.kind ?? "available", d = e.label ?? (u === "available" ? s.labels.available : s.labels.unavailable), f = c && !e.placeholder && (l || s.hasBlockClick);
	return u === "available" && !c && !s.display.availableBlocks ? null : /* @__PURE__ */ g("div", {
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
		className: V("ui-cal-avail", `ui-cal-c-${s.blockColor(e)}`),
		style: t,
		onKeyDown: f ? a : void 0,
		onClick: f ? o : void 0,
		children: [
			s.display.blockLabels && /* @__PURE__ */ h("span", {
				className: "block truncate font-medium",
				children: d
			}),
			c && s.display.time && /* @__PURE__ */ h("span", {
				className: "ui-cal-meta font-mono block",
				children: fr(e.start, e.end, s)
			}),
			n && l && !r && /* @__PURE__ */ h("div", {
				"data-cal-resize": !0,
				"data-edge": n,
				className: "ui-cal-resize",
				"aria-hidden": "true"
			})
		]
	});
}
function qr({ draft: e, invalid: t, style: n }) {
	let r = Ir(), i = e.target === "event" ? e.event.title : e.target === "availability" ? e.availability.label ?? r.labels.available : void 0;
	return /* @__PURE__ */ g("div", {
		className: "ui-cal-ghost",
		"data-invalid": t ? !0 : void 0,
		style: n,
		"aria-hidden": "true",
		children: [
			i && /* @__PURE__ */ h("div", {
				className: "ui-cal-title",
				children: i
			}),
			/* @__PURE__ */ h("div", {
				className: "font-mono",
				children: fr(e.start, e.end, r)
			}),
			t && /* @__PURE__ */ h("div", {
				className: "text-red font-medium",
				children: t
			})
		]
	});
}
//#endregion
//#region src/components/ui/calendar/useGridInteraction.ts
var Jr = 4, Yr = 10, Xr = 36;
function Zr(e, t, n, r, i) {
	let a = Sr(e.value.resourceId).length > 0, o = {
		action: t,
		start: n.start,
		end: n.end,
		resourceId: a ? i : void 0,
		previousResourceId: a ? r : void 0,
		resourceIds: wr(e.value.resourceId, r, i)
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
function Qr(e, t) {
	return t.target === "selection" ? !1 : Mr(e.value, t) && (t.resourceId === void 0 || t.resourceId === t.previousResourceId);
}
function $r({ axis: e, columns: t, pxPerMinute: n, scrollRef: r, events: i, blocks: a, initialColumn: o }) {
	let s = Ir(), [l, d] = p(null), [m, h] = p(null), g = f(null), _ = f({
		ctx: s,
		columns: t,
		axis: e,
		pxPerMinute: n
	});
	u(() => {
		_.current = {
			ctx: s,
			columns: t,
			axis: e,
			pxPerMinute: n
		};
	}), c(() => {
		let e = g;
		return () => {
			let t = e.current;
			t && (e.current = null, t.cleanup(), t.frame && cancelAnimationFrame(t.frame));
		};
	}, []);
	let { bounds: v, step: y } = s;
	function b(e) {
		return r.current?.querySelector(`[data-cal-col="${e}"]`) ?? null;
	}
	function x(e, t, n) {
		let { ctx: r, axis: i, pxPerMinute: a } = _.current, { bounds: o } = r, s = e.getBoundingClientRect(), c = i === "y" ? n - s.top : t - s.left;
		return $(o.min + c / a, o.min, o.max);
	}
	function S(e, t, n) {
		let { columns: i, axis: a } = _.current, o = r.current, s = document.elementFromPoint(e, t)?.closest("[data-cal-col]");
		if (s && o?.contains(s)) return {
			index: Number(s.dataset.calCol),
			el: s
		};
		let c = b(n);
		if (!c) return null;
		let l = c.getBoundingClientRect(), u = n, d = a === "y" ? e < l.left : t < l.top, f = a === "y" ? e > l.right : t > l.bottom;
		d && (u = Math.max(0, n - 1)), f && (u = Math.min(i.length - 1, n + 1));
		let p = u === n ? c : b(u);
		return p ? {
			index: u,
			el: p
		} : {
			index: n,
			el: c
		};
	}
	function C(e) {
		let { ctx: t, columns: n } = _.current, { bounds: r, step: i } = t, a = n[e.origin];
		if (!a) return;
		let o;
		if (e.kind === "create") {
			let t = b(e.origin);
			if (!t) return;
			o = {
				target: "selection",
				action: "create",
				...Dr(a.day, e.anchorMinute, x(t, e.lastX, e.lastY), i, r),
				allDay: !1,
				resourceId: a.resourceId
			};
		} else if (e.kind === "move" && e.item) {
			let t = S(e.lastX, e.lastY, e.hover);
			if (!t) return;
			e.hover = t.index;
			let s = n[t.index], c = Or(e.item.value, s.day, x(t.el, e.lastX, e.lastY), e.grabOffset, i, r);
			o = Zr(e.item, "move", c, a.resourceId, s.resourceId);
		} else if (e.kind === "resize" && e.item) {
			let t = b(e.origin);
			if (!t) return;
			let n = kr(e.item.value, a.day, x(t, e.lastX, e.lastY), i, r);
			o = Zr(e.item, "resize", {
				start: e.item.value.start,
				end: n
			}, a.resourceId, a.resourceId);
		} else return;
		return {
			draft: o,
			invalid: t.check(o),
			itemId: e.item?.value.id
		};
	}
	function w(e) {
		let t = r.current;
		if (!t || !e.started) return;
		let n = t.getBoundingClientRect(), i = 0, a = 0;
		if (e.lastY < n.top + Xr ? a = -1 : e.lastY > n.bottom - Xr && (a = 1), e.lastX < n.left + Xr ? i = -1 : e.lastX > n.right - Xr && (i = 1), !i && !a) {
			e.frame = void 0;
			return;
		}
		t.scrollBy(i * 10, a * 10);
		let o = C(e);
		o && (e.current = o, d(o)), e.frame = requestAnimationFrame(() => w(e));
	}
	function T(e) {
		let { ctx: t, columns: n } = _.current, { bounds: r, step: i } = t, a = g.current;
		if (a && (g.current = null, a.cleanup(), a.frame && cancelAnimationFrame(a.frame), d(null), e)) {
			if (a.started) {
				let e = a.current;
				if (!e || a.item && Qr(a.item, e.draft)) return;
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
					let o = $(nr(a.anchorMinute, i, "floor"), r.min, r.max - i), s = Math.min(o + Math.max(i, t.clickCreateDuration), r.max);
					t.commit({
						target: "selection",
						action: "create",
						start: Z(e.day, o),
						end: Z(e.day, s),
						allDay: !1,
						resourceId: e.resourceId
					}, "pointer");
				}
			}
		}
	}
	function E(e) {
		if (e.button !== 0 || g.current) return;
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
		let m = x(o, e.clientX, e.clientY), h = u ? (Z(l.day, m).getTime() - u.value.start.getTime()) / 6e4 : 0, _ = (e) => {
			let t = g.current;
			if (!t || e.pointerId !== t.pointerId) return;
			t.lastX = e.clientX, t.lastY = e.clientY;
			let n = Math.hypot(e.clientX - t.startX, e.clientY - t.startY);
			if (!t.started) {
				if (t.pointerType === "touch") {
					n > Yr && (t.moved = !0);
					return;
				}
				if (t.kind === "click" || n < Jr) {
					n >= Jr && (t.moved = !0);
					return;
				}
				t.started = !0, r.current?.setPointerCapture?.(t.pointerId);
			}
			let i = C(t);
			i && (t.current = i, d(i)), t.frame || w(t);
		}, v = (e) => {
			e.pointerId === g.current?.pointerId && T(!0);
		}, y = (e) => {
			e.pointerId === g.current?.pointerId && T(!1);
		}, b = (e) => {
			e.key === "Escape" && (e.preventDefault(), T(!1));
		};
		window.addEventListener("pointermove", _), window.addEventListener("pointerup", v), window.addEventListener("pointercancel", y), window.addEventListener("keydown", b), g.current = {
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
				window.removeEventListener("pointermove", _), window.removeEventListener("pointerup", v), window.removeEventListener("pointercancel", y), window.removeEventListener("keydown", b);
			}
		};
	}
	function D(e) {
		requestAnimationFrame(() => {
			r.current?.querySelector(`[data-cal-item][data-cal-id="${CSS.escape(e)}"]`)?.focus();
		});
	}
	function O(n, r, o, c) {
		let l = r === "event" ? i.get(o) : a.get(o);
		if (!l) return;
		let u = {
			type: r,
			value: l
		};
		if (n.key === "Enter" || n.key === " ") {
			n.preventDefault(), u.type === "event" ? s.clickEvent(u.value) : s.clickBlock(u.value);
			return;
		}
		if (!n.altKey || !n.key.startsWith("Arrow") || !(u.type === "event" ? s.canEditEvent(u.value) : s.canEditBlock(u.value))) return;
		let d = e === "y" ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"], f = e === "y" ? ["ArrowLeft", "ArrowRight"] : ["ArrowUp", "ArrowDown"], p = t[c];
		if (!p) return;
		let m = null;
		if (d.includes(n.key)) {
			let e = n.key === d[0] ? -y : y;
			if (n.shiftKey) {
				let t = Kn(l.end, e);
				if (t.getTime() - l.start.getTime() < y * 6e4) return;
				m = Zr(u, "resize", {
					start: l.start,
					end: t
				}, p.resourceId, p.resourceId);
			} else m = Zr(u, "move", Ar(l, e, v), p.resourceId, p.resourceId);
		} else if (f.includes(n.key) && !n.shiftKey) {
			let e = t[c + (n.key === f[0] ? -1 : 1)];
			if (!e) return;
			m = Zr(u, "move", jr(l, Zn(e.day, p.day)), p.resourceId, e.resourceId);
		}
		m && (n.preventDefault(), !Qr(u, m) && s.commit(m, "keyboard") && D(o));
	}
	function k(e) {
		if (e.target !== e.currentTarget || m) return;
		let t = !0;
		try {
			t = e.currentTarget.matches(":focus-visible");
		} catch {}
		t && h(A());
	}
	function A() {
		let e = $(nr(s.scrollToMinute ?? v.min, y, "floor"), v.min, v.max - y);
		return {
			column: $(o, 0, Math.max(0, t.length - 1)),
			start: e,
			end: Math.min(e + Math.max(y, s.clickCreateDuration), v.max)
		};
	}
	function j(e) {
		e.target === e.currentTarget && h(null);
	}
	function M() {
		requestAnimationFrame(() => {
			r.current?.querySelector("[data-cal-cursor]")?.scrollIntoView({
				block: "nearest",
				inline: "nearest"
			});
		});
	}
	function N(n) {
		if (n.target !== n.currentTarget) return;
		if (!m) {
			(n.key.startsWith("Arrow") || n.key === "Enter" || n.key === " ") && (n.preventDefault(), h(A()), M());
			return;
		}
		let r = e === "y" ? "ArrowUp" : "ArrowLeft", i = e === "y" ? "ArrowDown" : "ArrowRight", a = e === "y" ? "ArrowLeft" : "ArrowUp", o = e === "y" ? "ArrowRight" : "ArrowDown", c = m.end - m.start, l = null;
		switch (n.key) {
			case r:
			case i: {
				let e = n.key === r ? -y : y;
				if (n.shiftKey) {
					let t = $(m.end + e, m.start + y, v.max);
					l = {
						...m,
						end: t
					};
				} else {
					let t = $(m.start + e, v.min, v.max - c);
					l = {
						...m,
						start: t,
						end: t + c
					};
				}
				break;
			}
			case a:
			case o: {
				let e = $(m.column + (n.key === a ? -1 : 1), 0, t.length - 1);
				l = {
					...m,
					column: e
				};
				break;
			}
			case "PageUp":
			case "PageDown": {
				let e = n.key === "PageUp" ? -60 : 60, t = $(m.start + e, v.min, v.max - c);
				l = {
					...m,
					start: t,
					end: t + c
				};
				break;
			}
			case "Home":
				l = {
					...m,
					start: v.min,
					end: v.min + c
				};
				break;
			case "End":
				l = {
					...m,
					start: v.max - c,
					end: v.max
				};
				break;
			case "Enter":
			case " ": {
				n.preventDefault();
				let e = t[m.column];
				if (!e || !s.selectable) return;
				s.commit({
					target: "selection",
					action: "create",
					start: Z(e.day, m.start),
					end: Z(e.day, m.end),
					allDay: !1,
					resourceId: e.resourceId
				}, "keyboard");
				return;
			}
			case "Escape":
				n.preventDefault(), h(null);
				return;
			default: return;
		}
		n.preventDefault(), h(l), M();
	}
	return {
		drag: l,
		cursor: m,
		onPointerDown: E,
		onItemKeyDown: O,
		onGridFocus: k,
		onGridBlur: j,
		onGridKeyDown: N
	};
}
//#endregion
//#region src/components/ui/calendar/TimeGrid.tsx
var ei = 22, ti = 3, ni = 18, ri = 36;
function ii(e) {
	let t = e.querySelector(".ui-cal-head")?.offsetHeight ?? 0;
	return (e.clientHeight - t) / 2;
}
function ai(e, t, n, r) {
	let i = _r(e.start, e.end, t);
	return i ? i.endMinute <= n && i.startMinute < n ? "before" : i.startMinute >= r ? "after" : {
		item: e,
		start: Math.max(i.startMinute, n),
		end: Math.min(i.endMinute, r),
		continuesBefore: i.continuesBefore || i.startMinute < n,
		continuesAfter: i.continuesAfter || i.endMinute > r
	} : null;
}
function oi({ days: e, events: t, availability: n, label: r }) {
	let i = Ir(), { bounds: a, resources: o, hourHeight: s } = i, m = s / 60, _ = f(null), v = l(), [y, b] = p(!1), x = d(() => e.flatMap((e) => o.length ? o.map((t) => ({
		key: `${Q(e)}|${t.id}`,
		day: e,
		resourceId: t.id
	})) : [{
		key: Q(e),
		day: e
	}]), [e, o]), S = d(() => new Map(t.map((e) => [e.id, e])), [t]), C = d(() => new Map(n.map((e) => [e.id, e])), [n]), w = x.findIndex((e) => Xn(e.day, i.now)), T = $r({
		axis: "y",
		columns: x,
		pxPerMinute: m,
		scrollRef: _,
		events: S,
		blocks: C,
		initialColumn: Math.max(0, w)
	}), { drag: E, cursor: D } = T, O = i.editLayer === "availability", k = d(() => {
		let e = t.filter((e) => !Nr(e)), r = ni / m;
		return x.map((t) => {
			let o = 0, s = 0, c = [];
			for (let n of e) {
				if (!Cr(n.resourceId, t.resourceId, { emptyMatchesAll: !1 })) continue;
				let e = ai(n, t.day, a.min, a.max);
				e === "before" ? o++ : e === "after" ? s++ : e && c.push(e);
			}
			let l = br(c.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r), u = [];
			for (let e of n) {
				if (!Cr(e.resourceId, t.resourceId, { emptyMatchesAll: !0 })) continue;
				let n = ai(e, t.day, a.min, a.max);
				n && typeof n == "object" && u.push(n);
			}
			let d = O ? br(u.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: e.end
			})), r) : null, f = [];
			return i.hasAvailability && i.shadeOutsideAvailability && (f = yr(a.min, a.max, u.map((e) => [e.start, e.end]))), {
				placed: c,
				layout: l,
				blocks: u,
				blockLayout: d,
				outside: f,
				earlier: o,
				later: s
			};
		});
	}, [
		x,
		t,
		n,
		a.min,
		a.max,
		m,
		O,
		i.hasAvailability,
		i.shadeOutsideAvailability
	]), A = d(() => {
		let e = [];
		for (let n of t) {
			if (!Nr(n)) continue;
			let t = -1;
			x.forEach((r, i) => {
				let a = _r(n.start, n.end, r.day) !== null && Cr(n.resourceId, r.resourceId, { emptyMatchesAll: !1 });
				a && t === -1 && (t = i);
				let o = i === x.length - 1;
				if (t !== -1 && (!a || o)) {
					let r = a && o ? i + 1 : i;
					e.push({
						id: `${n.id}#${t}`,
						event: n,
						start: t,
						end: r
					}), t = -1;
				}
			});
		}
		let { lanes: n, count: r } = xr(e);
		return {
			runs: e,
			lanes: n,
			count: r
		};
	}, [t, x]), j = y ? A.count : Math.min(A.count, ti), M = A.runs.filter((e) => (A.lanes.get(e.id) ?? 0) >= j).length, N = f(m), P = f(null);
	c(() => {
		let e = _.current;
		if (!e) return;
		let t = () => {
			P.current = (e.scrollTop + ii(e)) / N.current;
		};
		return e.addEventListener("scroll", t, { passive: !0 }), () => e.removeEventListener("scroll", t);
	}, []), u(() => {
		let e = _.current;
		if (!e || N.current === m) return;
		N.current = m;
		let t = P.current;
		t !== null && (e.scrollTop = Math.max(0, t * m - ii(e)));
	}, [m]);
	let F = f(null), ee = i.scrollToMinute, I = i.scrollAlign;
	c(() => {
		let e = _.current;
		if (!e || F.current === i.view) return;
		F.current = i.view;
		let t = ee ?? 480, n = e.querySelector(".ui-cal-head"), r = () => {
			let n = I === "center" ? ii(e) : 8;
			e.scrollTop = Math.max(0, (t - a.min) * m - n);
		};
		if (r(), typeof ResizeObserver > "u") return;
		let o = new ResizeObserver(r);
		o.observe(e), n && o.observe(n);
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
			s || (F.current = null);
		};
	}, [
		i.view,
		ee,
		I,
		a.min,
		m
	]);
	let te = e.length > 1, L = o.length > 0, R = L ? i.resourceMinWidth : 44, ne = (a.max - a.min) * m, re = {
		"--cal-hour": `${s}px`,
		"--cal-offset": `${-(a.min % 60 * m)}px`,
		height: ne
	}, ie = [], z = Math.max(5, i.slotLabelInterval);
	for (let e = Math.ceil(a.min / z) * z; e < a.max; e += z) e > a.min && ie.push(e);
	let ae = ur(i.locale, { weekday: "short" }), oe = X(i.now), se = i.nowIndicator && oe >= a.min && oe <= a.max, B = E?.draft, ce = B && (B.target === "selection" ? B.resourceId : B.resourceIds), le = "";
	if (D) {
		let e = x[D.column];
		if (e) {
			let t = e.resourceId ? i.resourceById.get(e.resourceId) : void 0;
			le = `${mr(e.day, i.locale)}, ${er(D.start)} to ${er(D.end)}${t ? `, ${t.title}` : ""}`;
		}
	}
	return /* @__PURE__ */ h("div", {
		ref: _,
		"data-cal-drag": E?.draft.action,
		className: "ui-cal-scroll relative min-h-0 flex-1 overflow-auto",
		children: /* @__PURE__ */ g("div", {
			className: "flex min-h-full flex-col",
			style: { minWidth: `calc(var(--cal-gutter) + ${x.length * R}px)` },
			children: [/* @__PURE__ */ g("div", {
				className: "ui-cal-head border-border border-b",
				children: [
					te && /* @__PURE__ */ g("div", {
						className: "flex",
						children: [/* @__PURE__ */ h("div", { className: "ui-cal-corner" }), e.map((e) => /* @__PURE__ */ h(si, {
							day: e,
							weekday: ae.format(e),
							isToday: Xn(e, i.now),
							grow: L ? o.length : 1,
							onOpen: () => i.openDay(e),
							bordered: L
						}, Q(e)))]
					}),
					L && /* @__PURE__ */ g("div", {
						className: "flex",
						children: [/* @__PURE__ */ h("div", { className: "ui-cal-corner" }), x.map((e, t) => /* @__PURE__ */ h(ci, {
							resource: i.resourceById.get(e.resourceId ?? ""),
							sub: t % o.length !== 0
						}, e.key))]
					}),
					A.count > 0 && /* @__PURE__ */ g("div", {
						className: "border-border flex border-t",
						children: [/* @__PURE__ */ g("div", {
							className: "ui-cal-corner text-text-tertiary flex flex-col items-end justify-center gap-0.5 pr-2 text-2xs",
							children: [/* @__PURE__ */ h("span", { children: i.labels.allDay }), A.count > ti && /* @__PURE__ */ h("button", {
								type: "button",
								className: "text-accent cursor-pointer hover:underline",
								"aria-expanded": y,
								onClick: () => b((e) => !e),
								children: y ? i.labels.showLess : i.labels.more(M)
							})]
						}), /* @__PURE__ */ h("div", {
							className: "relative flex-1",
							style: { height: j * ei + 4 },
							children: A.runs.map((e) => {
								let t = A.lanes.get(e.id) ?? 0;
								if (t >= j) return null;
								let n = x[e.start], r = x[e.end - 1];
								return /* @__PURE__ */ h(Wr, {
									event: e.event,
									compact: !0,
									continuesBefore: !!n && _r(e.event.start, e.event.end, n.day)?.continuesBefore,
									continuesAfter: !!r && _r(e.event.start, e.event.end, r.day)?.continuesAfter,
									style: {
										top: t * ei + 2,
										height: ei - 3,
										left: `calc(${e.start / x.length * 100}% + 2px)`,
										width: `calc(${(e.end - e.start) / x.length * 100}% - 4px)`,
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
			}), /* @__PURE__ */ g("div", {
				className: "flex flex-1",
				children: [/* @__PURE__ */ h("div", {
					className: "ui-cal-gutter relative",
					style: { height: ne },
					"aria-hidden": "true",
					children: ie.map((e) => /* @__PURE__ */ h("span", {
						className: "text-text-tertiary font-mono absolute right-2 -translate-y-1/2 text-2xs",
						style: { top: (e - a.min) * m },
						children: pr(e, i)
					}, e))
				}), /* @__PURE__ */ g("div", {
					role: "group",
					"aria-roledescription": "time grid",
					"aria-label": r,
					"aria-describedby": v,
					tabIndex: 0,
					className: "ui-cal-lines ui-cal-surface relative flex flex-1 select-none focus-visible:outline-none",
					style: re,
					onPointerDown: T.onPointerDown,
					onFocus: T.onGridFocus,
					onBlur: T.onGridBlur,
					onKeyDown: T.onGridKeyDown,
					children: [
						/* @__PURE__ */ h("span", {
							id: v,
							className: "sr-only",
							children: i.labels.gridHelp
						}),
						/* @__PURE__ */ h("span", {
							className: "sr-only",
							"aria-live": "polite",
							children: le
						}),
						x.map((e, t) => {
							let n = k[t], r = Xn(e.day, i.now), s = L && t % o.length !== 0;
							return /* @__PURE__ */ g("div", {
								"data-cal-col": t,
								"data-today": r || void 0,
								"data-subcol": s || void 0,
								className: "ui-cal-col flex-1",
								style: { minWidth: R },
								children: [
									n.outside.map(([e, t]) => /* @__PURE__ */ h("div", {
										className: "ui-cal-outside",
										"aria-hidden": "true",
										style: {
											left: 0,
											right: 0,
											top: (e - a.min) * m,
											height: (t - e) * m
										}
									}, `o${e}`)),
									n.blocks.map((e) => {
										let r = n.blockLayout?.get(e.item.id);
										return /* @__PURE__ */ h(Kr, {
											block: e.item,
											resizeEdge: "bottom",
											continuesAfter: e.continuesAfter,
											dragging: E?.itemId === e.item.id,
											style: {
												top: (e.start - a.min) * m,
												height: Math.max((e.end - e.start) * m, 4),
												left: r ? `calc(${r.column / r.columns * 100}% + 1px)` : 0,
												width: r ? `calc(${r.span / r.columns * 100}% - 4px)` : "100%"
											},
											onKeyDown: (n) => T.onItemKeyDown(n, "availability", e.item.id, t),
											onClick: (t) => {
												t.detail === 0 && i.clickBlock(e.item);
											}
										}, e.item.id);
									}),
									/* @__PURE__ */ h("div", {
										className: V("absolute inset-0", O && "ui-cal-muted-layer"),
										children: n.placed.map((e) => {
											let r = n.layout.get(e.item.id), o = Math.max((e.end - e.start) * m, ni);
											return /* @__PURE__ */ h(Wr, {
												event: e.item,
												compact: o < ri,
												resizeEdge: "bottom",
												continuesBefore: e.continuesBefore,
												continuesAfter: e.continuesAfter,
												dragging: E?.itemId === e.item.id,
												style: {
													top: (e.start - a.min) * m + 1,
													height: o - 2,
													left: r ? `calc(${r.column / r.columns * 100}% + 1px)` : 1,
													width: r ? `calc(${r.span / r.columns * 100}% - 5px)` : "calc(100% - 5px)"
												},
												onKeyDown: (n) => T.onItemKeyDown(n, "event", e.item.id, t),
												onClick: (t) => {
													t.detail === 0 && i.clickEvent(e.item);
												}
											}, e.item.id);
										})
									}),
									n.earlier > 0 && /* @__PURE__ */ h("span", {
										className: "ui-cal-overflow",
										"data-edge": "top",
										"data-cal-ignore": !0,
										children: i.labels.earlier(n.earlier)
									}),
									n.later > 0 && /* @__PURE__ */ h("span", {
										className: "ui-cal-overflow",
										"data-edge": "bottom",
										"data-cal-ignore": !0,
										children: i.labels.later(n.later)
									}),
									r && se && /* @__PURE__ */ h("div", {
										className: "ui-cal-now",
										"data-axis": "y",
										"data-dot": !s || void 0,
										style: { top: (oe - a.min) * m }
									}),
									B && Cr(ce, e.resourceId, { emptyMatchesAll: !0 }) && (() => {
										let t = ai(B, e.day, a.min, a.max);
										return !t || typeof t != "object" ? null : /* @__PURE__ */ h(qr, {
											draft: B,
											invalid: E?.invalid,
											style: {
												top: (t.start - a.min) * m + 1,
												height: Math.max((t.end - t.start) * m - 2, ni),
												left: 1,
												right: 4
											}
										});
									})(),
									D?.column === t && /* @__PURE__ */ h("div", {
										"data-cal-cursor": !0,
										className: "ui-cal-cursor",
										style: {
											left: 0,
											right: 0,
											top: (D.start - a.min) * m,
											height: (D.end - D.start) * m
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
function si({ day: e, weekday: t, isToday: n, grow: r, bordered: i, onOpen: a }) {
	let o = Ir();
	return /* @__PURE__ */ h("div", {
		className: V("flex min-w-0 items-center justify-center py-1.5", i && "border-border border-l"),
		style: { flex: `${r} 1 0` },
		children: /* @__PURE__ */ g("button", {
			type: "button",
			onClick: a,
			"aria-label": mr(e, o.locale),
			"aria-current": n ? "date" : void 0,
			className: "hover:bg-bg-hover flex cursor-pointer items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors duration-[100ms]",
			children: [/* @__PURE__ */ h("span", {
				className: V("text-2xs font-medium uppercase", n ? "text-accent" : "text-text-tertiary"),
				children: t
			}), /* @__PURE__ */ h("span", {
				className: V("flex h-6 w-6 items-center justify-center rounded-full text-sm font-semibold", n ? "bg-accent text-text-on-accent" : "text-text-primary"),
				children: e.getDate()
			})]
		})
	});
}
function ci({ resource: e, sub: t }) {
	let n = Ir();
	return /* @__PURE__ */ g("div", {
		className: V("border-border flex min-w-0 flex-1 items-center gap-1.5 border-l px-2 py-1.5", t && "ui-cal-subhead"),
		style: { minWidth: n.resourceMinWidth },
		title: e?.title,
		children: [e?.color && /* @__PURE__ */ h("span", {
			className: V("ui-cal-dot", `ui-cal-c-${e.color}`),
			"aria-hidden": "true"
		}), /* @__PURE__ */ g("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ h("span", {
				className: "text-text-primary block truncate text-xs font-medium",
				children: e?.title
			}), e?.subtitle && /* @__PURE__ */ h("span", {
				className: "text-text-tertiary block truncate text-2xs",
				children: e.subtitle
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/calendar/TimelineView.tsx
var li = 34, ui = 4, di = 28;
function fi(e, t, n, r) {
	let i = _r(e.start, e.end, t);
	return !i || i.endMinute <= n || i.startMinute >= r ? null : {
		item: e,
		start: Math.max(i.startMinute, n),
		end: Math.min(i.endMinute, r),
		continuesBefore: i.continuesBefore || i.startMinute < n,
		continuesAfter: i.continuesAfter || i.endMinute > r
	};
}
function pi({ day: e, events: t, availability: n, label: r }) {
	let i = Ir(), { bounds: a } = i, o = f(null), s = i.resources.length === 0 && t.length === 0 && n.length === 0, [u, m] = p(0);
	c(() => {
		let e = o.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(() => {
			let t = e.querySelector(".ui-cal-row-head");
			m(Math.max(0, e.clientWidth - (t?.offsetWidth ?? 0)));
		});
		return t.observe(e), () => t.disconnect();
	}, [s]);
	let _ = (a.max - a.min) / 60, v = Math.max(i.timelineHourWidth, u / _), y = v / 60, b = (a.max - a.min) * y, x = l(), [S, C] = p(/* @__PURE__ */ new Set()), w = d(() => {
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
	}, [i.resources]), T = d(() => w.flatMap((t) => t.name !== void 0 && S.has(t.name) ? [] : t.resources.map((t) => ({
		key: t.id,
		day: e,
		resourceId: t.id || void 0
	}))), [
		w,
		S,
		e
	]), D = $r({
		axis: "x",
		columns: T,
		pxPerMinute: y,
		scrollRef: o,
		events: d(() => new Map(t.map((e) => [e.id, e])), [t]),
		blocks: d(() => new Map(n.map((e) => [e.id, e])), [n]),
		initialColumn: 0
	}), { drag: k, cursor: A } = D, j = i.editLayer === "availability", M = d(() => {
		let r = di / y;
		return T.map((o) => {
			let s = t.filter((e) => Cr(e.resourceId, o.resourceId, { emptyMatchesAll: !1 })).map((t) => fi(t, e, a.min, a.max)).filter((e) => e !== null), c = xr(s.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))), l = n.filter((e) => Cr(e.resourceId, o.resourceId, { emptyMatchesAll: !0 })).map((t) => fi(t, e, a.min, a.max)).filter((e) => e !== null), u = j ? xr(l.map((e) => ({
				id: e.item.id,
				start: e.start,
				end: Math.max(e.end, e.start + r)
			}))) : null, d = Math.max(1, c.count, u?.count ?? 0);
			return {
				placed: s,
				lanes: c,
				blocks: l,
				blockLanes: u,
				outside: i.hasAvailability && i.shadeOutsideAvailability ? yr(a.min, a.max, l.map((e) => [e.start, e.end])) : [],
				laneCount: d
			};
		});
	}, [
		T,
		t,
		n,
		e,
		a.min,
		a.max,
		y,
		j,
		i.hasAvailability,
		i.shadeOutsideAvailability
	]), N = f(!1), P = i.scrollToMinute, F = i.scrollAlign;
	c(() => {
		let e = o.current;
		if (!e || N.current) return;
		N.current = !0;
		let t = e.querySelector(".ui-cal-row-head")?.offsetWidth ?? 0, n = F === "center" ? (e.clientWidth - t) / 2 : 16;
		e.scrollLeft = Math.max(0, ((P ?? 480) - a.min) * y - n);
	}, [
		P,
		F,
		a.min,
		y
	]);
	let ee = [], I = Math.max(15, i.slotLabelInterval);
	for (let e = Math.ceil(a.min / I) * I; e < a.max; e += I) ee.push(e);
	let te = X(i.now), L = i.nowIndicator && Xn(e, i.now) && te >= a.min && te <= a.max, R = k?.draft, ne = R && (R.target === "selection" ? R.resourceId : R.resourceIds), re = {
		"--cal-hour": `${v}px`,
		"--cal-offset": `${-(a.min % 60 * y)}px`
	}, ie = "";
	if (A) {
		let e = T[A.column], t = e?.resourceId ? i.resourceById.get(e.resourceId) : void 0;
		ie = `${t ? `${t.title}, ` : ""}${er(A.start)} to ${er(A.end)}`;
	}
	function z(e) {
		C((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	if (s) return /* @__PURE__ */ h("div", {
		className: "text-text-tertiary flex flex-1 items-center justify-center p-6 text-xs",
		children: i.labels.noResources
	});
	let ae = 0;
	return /* @__PURE__ */ h("div", {
		ref: o,
		"data-cal-drag": k?.draft.action,
		className: "ui-cal-scroll ui-cal-timeline relative min-h-0 flex-1 overflow-auto",
		children: /* @__PURE__ */ g("div", {
			style: { width: `calc(var(--cal-row-head) + ${b}px)` },
			children: [/* @__PURE__ */ g("div", {
				className: "ui-cal-head border-border flex border-b",
				children: [/* @__PURE__ */ h("div", { className: "ui-cal-row-head ui-cal-corner-x" }), /* @__PURE__ */ h("div", {
					className: "relative h-7",
					style: { width: b },
					"aria-hidden": "true",
					children: ee.map((e) => /* @__PURE__ */ h("span", {
						className: "text-text-tertiary font-mono absolute top-1.5 text-2xs",
						style: { left: (e - a.min) * y + 4 },
						children: pr(e, i)
					}, e))
				})]
			}), /* @__PURE__ */ g("div", {
				role: "group",
				"aria-roledescription": "timeline",
				"aria-label": r,
				"aria-describedby": x,
				tabIndex: 0,
				className: "ui-cal-surface select-none focus-visible:outline-none",
				onPointerDown: D.onPointerDown,
				onFocus: D.onGridFocus,
				onBlur: D.onGridBlur,
				onKeyDown: D.onGridKeyDown,
				children: [
					/* @__PURE__ */ h("span", {
						id: x,
						className: "sr-only",
						children: i.labels.gridHelp
					}),
					/* @__PURE__ */ h("span", {
						className: "sr-only",
						"aria-live": "polite",
						children: ie
					}),
					w.map((t) => {
						let n = t.name !== void 0 && S.has(t.name);
						return /* @__PURE__ */ g("div", { children: [t.name !== void 0 && /* @__PURE__ */ h("div", {
							className: "bg-bg-secondary border-border flex border-b",
							children: /* @__PURE__ */ g("button", {
								type: "button",
								className: "ui-cal-group text-text-secondary hover:text-text-primary flex cursor-pointer items-center gap-1 px-2 py-1 text-2xs font-semibold uppercase transition-colors duration-[100ms]",
								"aria-expanded": !n,
								onClick: () => z(t.name),
								children: [
									h(n ? O : E, { className: "h-3 w-3" }),
									t.name,
									/* @__PURE__ */ h("span", {
										className: "text-text-tertiary font-normal",
										children: t.resources.length
									})
								]
							})
						}), !n && t.resources.map((t) => {
							let n = ae++, r = M[n], o = T[n];
							if (!r || !o) return null;
							let s = r.laneCount * li + ui * 2;
							return /* @__PURE__ */ g("div", {
								className: "border-border flex border-b",
								children: [/* @__PURE__ */ g("div", {
									className: "ui-cal-row-head flex items-center gap-1.5 px-2",
									title: t.title,
									children: [t.color && /* @__PURE__ */ h("span", {
										className: V("ui-cal-dot", `ui-cal-c-${t.color}`),
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
										...re,
										width: b,
										height: s
									},
									children: [
										r.outside.map(([e, t]) => /* @__PURE__ */ h("div", {
											className: "ui-cal-outside",
											"aria-hidden": "true",
											style: {
												top: 0,
												bottom: 0,
												left: (e - a.min) * y,
												width: (t - e) * y
											}
										}, `o${e}`)),
										r.blocks.map((e) => {
											let t = r.blockLanes?.lanes.get(e.item.id);
											return /* @__PURE__ */ h(Kr, {
												block: e.item,
												resizeEdge: "right",
												continuesAfter: e.continuesAfter,
												dragging: k?.itemId === e.item.id,
												style: {
													left: (e.start - a.min) * y,
													width: Math.max((e.end - e.start) * y, 4),
													top: t === void 0 ? 0 : ui + t * li,
													height: t === void 0 ? "100%" : li - 3
												},
												onKeyDown: (t) => D.onItemKeyDown(t, "availability", e.item.id, n),
												onClick: (t) => {
													t.detail === 0 && i.clickBlock(e.item);
												}
											}, e.item.id);
										}),
										/* @__PURE__ */ h("div", {
											className: V("absolute inset-0", j && "ui-cal-muted-layer"),
											children: r.placed.map((e) => {
												let t = r.lanes.lanes.get(e.item.id) ?? 0;
												return /* @__PURE__ */ h(Wr, {
													event: e.item,
													compact: !1,
													dense: !0,
													resizeEdge: "right",
													continuesBefore: e.continuesBefore,
													continuesAfter: e.continuesAfter,
													dragging: k?.itemId === e.item.id,
													style: {
														left: (e.start - a.min) * y + 1,
														width: Math.max((e.end - e.start) * y, di) - 2,
														top: ui + t * li,
														height: li - 3,
														justifyContent: "center"
													},
													onKeyDown: (t) => D.onItemKeyDown(t, "event", e.item.id, n),
													onClick: (t) => {
														t.detail === 0 && i.clickEvent(e.item);
													}
												}, e.item.id);
											})
										}),
										L && /* @__PURE__ */ h("div", {
											className: "ui-cal-now",
											"data-axis": "x",
											style: { left: (te - a.min) * y }
										}),
										R && Cr(ne, o.resourceId, { emptyMatchesAll: !0 }) && (() => {
											let t = fi(R, e, a.min, a.max);
											return t ? /* @__PURE__ */ h(qr, {
												draft: R,
												invalid: k?.invalid,
												style: {
													left: (t.start - a.min) * y + 1,
													width: Math.max((t.end - t.start) * y - 2, di),
													top: ui,
													bottom: ui
												}
											}) : null;
										})(),
										A?.column === n && /* @__PURE__ */ h("div", {
											"data-cal-cursor": !0,
											className: "ui-cal-cursor",
											style: {
												top: 0,
												bottom: 0,
												left: (A.start - a.min) * y,
												width: (A.end - A.start) * y
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
var mi = {
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
function hi({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ h("div", {
		role: "radiogroup",
		"aria-label": a,
		className: V("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ h("button", {
			role: "radio",
			"aria-checked": e.value === t,
			disabled: r,
			onClick: () => n(e.value),
			className: V("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", !r && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/Calendar.tsx
var gi = [
	"day",
	"threeDay",
	"week",
	"month",
	"agenda"
];
function _i() {
	return /* @__PURE__ */ new Date();
}
function vi(e) {
	let [t, n] = p(_i);
	return c(() => {
		if (e) return;
		let t = setInterval(() => n(_i()), 3e4);
		return () => clearInterval(t);
	}, [e]), e ?? t;
}
function yi(e) {
	let [t, n] = p(null);
	return c(() => {
		let t = e.current;
		if (!t || typeof ResizeObserver > "u") return;
		let r = new ResizeObserver((e) => {
			n(e[0]?.contentRect.width ?? null);
		});
		return r.observe(t), () => r.disconnect();
	}, [e]), t;
}
var bi = /* @__PURE__ */ new Set();
function xi(e) {
	let t = !1;
	try {
		t = process.env.NODE_ENV !== "production";
	} catch {}
	!t || bi.has(e) || (bi.add(e), console.warn(`[Calendar] ${e}`));
}
function Si(e, t, n) {
	try {
		return $n(t);
	} catch {
		return xi(`Invalid ${e} "${t}", expected HH:mm; using the default.`), n;
	}
}
function Ci({ events: e = [], availability: t, resources: n = [], view: r, defaultView: i = "week", onViewChange: a, views: o = gi, date: s, defaultDate: m, onDateChange: _, onRangeChange: v, weekStartsOn: y = 1, workWeekDays: b, agendaDays: x = 7, slotMinTime: S = "07:00", slotMaxTime: C = "20:00", slotDuration: w = 15, slotLabelInterval: T = 60, hourHeight: E = 48, timelineHourWidth: k = 96, resourceMinWidth: A = 120, scrollToTime: j, scrollAlign: M = "start", now: N, nowIndicator: P = !0, editLayer: ee = "events", readOnly: I = !1, selectable: te, clickCreateDuration: L = 30, shadeOutsideAvailability: R = !0, onCreate: ne, onEventClick: re, onEventChange: ie, onAvailabilityClick: z, onAvailabilityChange: ae, validate: oe, onInvalidChange: se, onDateClick: B, renderEvent: ce, monthMaxEvents: le, agendaShowAvailability: ue = !0, display: de, narrowView: fe = "day", narrowWidth: pe = 640, locale: me = "en-GB", hour12: he = !1, labels: ge, toolbar: _e = !0, toolbarActions: ve, loading: ye = !1, className: be, "aria-label": xe }) {
	let Se = f(null), Ce = l(), we = vi(N), Te = yi(Se), [Ee, De] = p(i), [Oe, ke] = p(() => m ?? _i()), Ae = r ?? Ee, je = s ?? Oe, Me = (e) => {
		r === void 0 && De(e), a?.(e);
	}, Ne = (e) => {
		s === void 0 && ke(e), _?.(e);
	}, H = Te !== null && Te < pe && fe !== !1 && ir(Ae) && Ae !== "day" && fe ? fe : Ae, U = d(() => ({
		...mi,
		...ge,
		views: {
			...mi.views,
			...ge?.views
		},
		status: {
			...mi.status,
			...ge?.status
		}
	}), [ge]), W = d(() => ({
		weekStartsOn: y,
		workWeekDays: b,
		agendaDays: x
	}), [
		y,
		b,
		x
	]), Pe = je.getTime(), G = d(() => ar(H, new Date(Pe), W), [
		H,
		Pe,
		W
	]), Fe = G[0], Ie = Y(G[G.length - 1], 1), Le = Fe.getTime(), Re = Ie.getTime(), ze = f(v);
	u(() => {
		ze.current = v;
	}), c(() => {
		ze.current?.({
			start: new Date(Le),
			end: new Date(Re),
			view: H
		});
	}, [
		Le,
		Re,
		H
	]);
	let K = d(() => e.filter((e) => gr(e.start.getTime(), Math.max(e.end.getTime(), e.start.getTime() + 1), Le, Re)), [
		e,
		Le,
		Re
	]), Be = d(() => (t ?? []).filter((e) => gr(e.start.getTime(), e.end.getTime(), Le, Re)), [
		t,
		Le,
		Re
	]), Ve = Si("slotMinTime", S, 0), He = Si("slotMaxTime", C, 1440);
	He <= Ve && xi(`slotMaxTime "${C}" must be after slotMinTime "${S}"; showing the whole day.`);
	let Ue = He > Ve ? {
		min: Ve,
		max: He
	} : {
		min: 0,
		max: 1440
	}, We = Math.max(1, Math.round(w)), Ge;
	if (j) Ge = Si("scrollToTime", j, Ue.min);
	else {
		let e = Be.filter((e) => (e.kind ?? "available") === "available").map((e) => X(e.start)).filter((e) => e >= Ue.min && e < Ue.max);
		e.length && (Ge = Math.min(...e));
	}
	let Ke = d(() => new Map(n.map((e) => [e.id, e])), [n]), qe = hr(H, je, {
		...W,
		locale: me
	}), Je = {
		locale: me,
		hour12: he
	}, Ye = (e) => Ke.get(Sr(e)[0] ?? ""), Xe = (e) => {
		let t = Sr(e).map((e) => Ke.get(e)?.title).filter(Boolean);
		return t.length ? `, ${t.join(", ")}` : "";
	}, q = (e) => e.status && e.status !== "confirmed" ? U.status[e.status] : void 0, Ze = (e) => {
		let t = oe?.(e);
		return typeof t == "string" && t ? t : void 0;
	}, Qe = {
		view: H,
		locale: me,
		hour12: he,
		weekStartsOn: y,
		now: we,
		nowIndicator: P,
		labels: U,
		itemHelpId: Ce,
		resources: n,
		resourceById: Ke,
		step: We,
		bounds: Ue,
		hourHeight: E,
		slotLabelInterval: T,
		timelineHourWidth: k,
		resourceMinWidth: A,
		editLayer: ee,
		selectable: !I && !!ne && (te ?? !0),
		clickCreateDuration: L,
		hasAvailability: t !== void 0,
		shadeOutsideAvailability: R,
		monthMaxEvents: le,
		agendaShowAvailability: ue,
		display: {
			time: de?.time ?? !0,
			description: de?.description ?? !0,
			status: de?.status ?? !0,
			badge: de?.badge ?? !0,
			blockLabels: de?.blockLabels ?? !0,
			availableBlocks: de?.availableBlocks ?? !0
		},
		scrollToMinute: Ge,
		scrollAlign: M,
		canEditEvent: (e) => !e.placeholder && !I && !!ie && ee === "events" && (e.editable ?? e.status !== "cancelled"),
		canEditBlock: (e) => !e.placeholder && !I && !!ae && ee === "availability" && e.editable !== !1,
		eventColor: (e) => e.color ?? Ye(e.resourceId)?.color ?? "accent",
		blockColor: (e) => e.color ?? Ye(e.resourceId)?.color ?? ((e.kind ?? "available") === "available" ? "green" : "gray"),
		statusLabel: q,
		describeEvent: (e) => {
			let t = e.allDay ? `${mr(e.start, me)}, ${U.allDay}` : `${mr(e.start, me)}, ${fr(e.start, e.end, Je)}`, n = q(e);
			return [
				e.title,
				t,
				n,
				e.badge,
				e.description
			].filter(Boolean).join(", ").concat(Xe(e.resourceId));
		},
		describeBlock: (e) => [
			(e.kind ?? "available") === "available" ? U.available : U.unavailable,
			e.label,
			`${mr(e.start, me)}, ${fr(e.start, e.end, Je)}`
		].filter(Boolean).join(", ").concat(Xe(e.resourceId)),
		renderEvent: ce,
		hasEventClick: !!re,
		hasBlockClick: !!z,
		clickEvent: (e) => re?.(e),
		clickBlock: (e) => z?.(e),
		check: Ze,
		commit: (e, t) => {
			let n = Ze(e);
			if (n) return se?.(e, n), !1;
			if (e.target === "selection") ne?.({
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
				delete n.target, e.target === "event" ? ie?.(n) : ae?.(n);
			}
			return !0;
		},
		openDay: (e) => {
			if (B) {
				B(e);
				return;
			}
			Ne(e), H !== "day" && H !== "timeline" && Me("day");
		}
	}, $e = o.map((e) => ({
		value: e,
		label: U.views[e]
	})), et = xe ?? qe, tt;
	return tt = H === "month" ? /* @__PURE__ */ h(Ur, {
		date: je,
		events: K,
		availability: Be,
		label: et
	}) : H === "agenda" ? /* @__PURE__ */ h(Lr, {
		days: G,
		events: K.filter((e) => !e.placeholder),
		availability: Be.filter((e) => !e.placeholder),
		label: et
	}) : H === "timeline" ? /* @__PURE__ */ h(pi, {
		day: G[0],
		events: K,
		availability: Be,
		label: et
	}) : /* @__PURE__ */ h(oi, {
		days: G,
		events: K,
		availability: Be,
		label: et
	}), /* @__PURE__ */ h(Fr.Provider, {
		value: Qe,
		children: /* @__PURE__ */ g("div", {
			ref: Se,
			role: "region",
			"aria-label": xe ?? qe,
			"aria-busy": ye || void 0,
			className: V("ui-cal relative flex h-full min-h-0 flex-col overflow-hidden", be),
			children: [
				/* @__PURE__ */ h("span", {
					id: Ce,
					className: "sr-only",
					children: U.itemHelp
				}),
				_e && /* @__PURE__ */ g("div", {
					className: "ui-cal-noprint border-border flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2",
					children: [/* @__PURE__ */ g("div", {
						className: "flex min-w-0 items-center gap-2",
						children: [
							/* @__PURE__ */ h(un, {
								size: "sm",
								onClick: () => Ne(we),
								children: U.today
							}),
							/* @__PURE__ */ g("div", {
								className: "flex items-center",
								children: [/* @__PURE__ */ h(un, {
									variant: "icon",
									size: "sm",
									icon: D,
									"aria-label": U.previous,
									onClick: () => Ne(cr(H, je, -1, W))
								}), /* @__PURE__ */ h(un, {
									variant: "icon",
									size: "sm",
									icon: O,
									"aria-label": U.next,
									onClick: () => Ne(cr(H, je, 1, W))
								})]
							}),
							/* @__PURE__ */ h("h2", {
								className: "text-text-primary truncate text-sm font-semibold",
								"aria-live": "polite",
								children: qe
							})
						]
					}), /* @__PURE__ */ g("div", {
						className: "flex items-center gap-1.5",
						children: [ve, o.length > 1 && (Te === null || Te >= o.length * 80 + 420 ? /* @__PURE__ */ h(hi, {
							"aria-label": U.view,
							options: $e,
							value: Ae,
							onChange: Me
						}) : /* @__PURE__ */ h(pn, {
							className: "w-28",
							size: "sm",
							options: $e,
							value: Ae,
							onChange: (e) => Me(e)
						}))]
					})]
				}),
				tt,
				ye && /* @__PURE__ */ g("div", {
					className: "ui-cal-loading",
					role: "status",
					children: [/* @__PURE__ */ h(F, { className: "text-accent h-6 w-6 animate-spin" }), /* @__PURE__ */ h("span", {
						className: "sr-only",
						children: U.loading
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/ui/CalendarGrid.tsx
var wi = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
], Ti = [
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
function Ei(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Di(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function Oi(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function ki(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function Ai({ year: e, month: t, selected: n, rangeStart: r, rangeEnd: i, hoverDate: a, onSelect: o, onMonthChange: s, onHover: c, minDate: l, maxDate: u }) {
	let d = Oi(e, t), m = ki(e, t), _ = /* @__PURE__ */ new Date(), v = f(null), [y, b] = p(null);
	function x() {
		return y !== null && y >= 1 && y <= d ? y : n && n.getFullYear() === e && n.getMonth() === t ? n.getDate() : r && r.getFullYear() === e && r.getMonth() === t ? r.getDate() : _.getFullYear() === e && _.getMonth() === t ? _.getDate() : 1;
	}
	let S = x();
	function C(e, t) {
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
		r >= 1 && r <= d && (b(r), (v.current?.querySelector(`[data-day="${r}"]`))?.focus());
	}
	function w() {
		t === 0 ? s(e - 1, 11) : s(e, t - 1);
	}
	function T() {
		t === 11 ? s(e + 1, 0) : s(e, t + 1);
	}
	let E = [];
	for (let e = 0; e < m; e++) E.push(null);
	for (let e = 1; e <= d; e++) E.push(e);
	return /* @__PURE__ */ g("div", {
		className: "w-[252px]",
		ref: v,
		children: [/* @__PURE__ */ g("div", {
			className: "mb-2 flex items-center justify-between",
			children: [
				/* @__PURE__ */ h("button", {
					type: "button",
					onClick: w,
					"aria-label": "Previous month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ h(D, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ g("span", {
					className: "text-text-primary text-xs font-semibold",
					"aria-live": "polite",
					children: [
						Ti[t],
						" ",
						e
					]
				}),
				/* @__PURE__ */ h("button", {
					type: "button",
					onClick: T,
					"aria-label": "Next month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ h(O, { className: "h-3.5 w-3.5" })
				})
			]
		}), /* @__PURE__ */ g("div", {
			className: "grid grid-cols-7 gap-0",
			children: [wi.map((e) => /* @__PURE__ */ h("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), E.map((s, d) => {
				if (s === null) return /* @__PURE__ */ h("div", { className: "h-8" }, `empty-${d}`);
				let f = new Date(e, t, s), p = Ei(f, _), m = n ? Ei(f, n) : !1, g = r ? Ei(f, r) : !1, v = i ? Ei(f, i) : !1, y = Di(f, r ?? null, i ?? a ?? null), b = l && f < l || u && f > u;
				return /* @__PURE__ */ h("button", {
					type: "button",
					"data-day": s,
					disabled: !!b,
					tabIndex: s === S ? 0 : -1,
					"aria-label": `${Ti[t]} ${s}, ${e}`,
					"aria-current": p ? "date" : void 0,
					onClick: () => o(f),
					onKeyDown: (e) => C(e, s),
					onMouseEnter: () => c?.(f),
					onMouseLeave: () => c?.(null),
					className: V("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", b && "cursor-not-allowed opacity-30", !b && !m && !g && !v && !y && "hover:bg-bg-hover text-text-primary", p && !m && !g && !v && "text-accent font-semibold", (m || g || v) && "bg-accent text-text-on-accent font-semibold", y && !m && !g && !v && "bg-accent-muted text-accent"),
					children: s
				}, s);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function ji({ children: e, className: t, header: n, footer: r }) {
	return /* @__PURE__ */ g("div", {
		className: V("bg-bg-secondary border-border overflow-hidden rounded-md border", t),
		children: [
			n && /* @__PURE__ */ h("div", {
				className: "border-border border-b px-3 py-2.5",
				children: n
			}),
			/* @__PURE__ */ h("div", {
				className: "p-3",
				children: e
			}),
			r && /* @__PURE__ */ h("div", {
				className: "border-border bg-bg-primary/50 border-t px-3 py-2.5",
				children: r
			})
		]
	});
}
//#endregion
//#region src/lib/codeInput.ts
function Mi(e, t) {
	let n = e.replace(/\D/g, "").slice(0, t);
	return Array.from({ length: t }, (e, t) => n[t] ?? "");
}
function Ni(e, t, n) {
	if (!t || e.length <= t.length) return e;
	let r = e.length - t.length, i = n ?? e.length;
	return i - r >= 0 ? e.slice(i - r, i) : e.slice(-r);
}
function Pi(e, t, n) {
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
function Fi(e, t, n, r) {
	if (n === "") {
		let n = [...e];
		return n[t] = "", {
			slots: n,
			focus: t
		};
	}
	return Pi(e, t, Ni(n, e[t], r));
}
function Ii(e, t) {
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
function Li({ value: e, onChange: t, onComplete: n, length: r = 6, error: i, invalid: a, disabled: o, autoFocus: s, name: c, "aria-label": u = "Verification code", className: d }) {
	let m = f([]), _ = l(), v = a || !!i, [y, b] = p(() => Mi(e, r)), [x, S] = p({
		value: e,
		length: r
	});
	(x.value !== e || x.length !== r) && (S({
		value: e,
		length: r
	}), (y.length !== r || y.join("") !== e) && b(Mi(e, r)));
	function C(e) {
		let t = m.current[Math.max(0, Math.min(e, r - 1))];
		t?.focus(), t?.select();
	}
	function w(e) {
		if (!e) return;
		b(e.slots);
		let r = e.slots.join("");
		t(r), e.slots.every(Boolean) && n?.(r), C(e.focus);
	}
	function T(e, t) {
		t.key === "Backspace" ? (t.preventDefault(), w(Ii(y, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), C(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), C(e + 1));
	}
	return /* @__PURE__ */ g("div", {
		className: V("flex flex-col gap-1.5", d),
		children: [
			/* @__PURE__ */ h("div", {
				role: "group",
				"aria-label": u,
				className: "flex justify-between gap-2",
				children: y.map((e, t) => /* @__PURE__ */ h("input", {
					ref: (e) => {
						m.current[t] = e;
					},
					type: "text",
					inputMode: "numeric",
					autoComplete: t === 0 ? "one-time-code" : "off",
					autoFocus: s && t === 0,
					disabled: o,
					"aria-label": `Digit ${t + 1} of ${r}`,
					"aria-invalid": v || void 0,
					"aria-describedby": i ? _ : void 0,
					value: e,
					onFocus: (e) => e.target.select(),
					onChange: (e) => w(Fi(y, t, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => T(t, e),
					onPaste: (e) => {
						e.preventDefault(), w(Pi(y, t, e.clipboardData.getData("text")));
					},
					className: V("bg-bg-secondary text-text-primary h-10 w-10 rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", v ? "border-red" : "border-border")
				}, t))
			}),
			c && /* @__PURE__ */ h("input", {
				type: "hidden",
				name: c,
				value: e,
				disabled: o
			}),
			i && /* @__PURE__ */ h("p", {
				id: _,
				role: "alert",
				className: "text-2xs text-red",
				children: i
			})
		]
	});
}
//#endregion
//#region src/components/ui/Combobox.tsx
function Ri({ options: e, value: t, onChange: n, placeholder: r = "Select...", label: i, className: a }) {
	let [s, c] = p(!1), [u, d] = p(""), [m, _] = p(0), v = f(null), y = f(null), b = l(), x = e.find((e) => e.value === t), S = e.filter((e) => e.label.toLowerCase().includes(u.toLowerCase()));
	function C(e) {
		d(e), _(0);
	}
	function T(e) {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), _((e) => Math.min(e + 1, S.length - 1));
				break;
			case "ArrowUp":
				e.preventDefault(), _((e) => Math.max(e - 1, 0));
				break;
			case "Enter":
				e.preventDefault(), S[m] && (n(S[m].value), c(!1));
				break;
			case "Escape":
				c(!1);
				break;
		}
	}
	jt(s, o(() => c(!1), []), [v]);
	function D() {
		c(!0), d(""), _(0), setTimeout(() => y.current?.focus(), 0);
	}
	return /* @__PURE__ */ g("div", {
		className: V("flex flex-col gap-1.5", a),
		ref: v,
		children: [i && /* @__PURE__ */ h("span", {
			className: "text-text-secondary font-label text-xs font-medium",
			children: i
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			role: "combobox",
			"aria-expanded": s,
			"aria-haspopup": "listbox",
			children: [
				/* @__PURE__ */ h("button", {
					type: "button",
					onClick: () => s ? c(!1) : D(),
					className: V("font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
					children: x ? x.label : /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ h(E, { className: V("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", s && "rotate-180") }),
				s && /* @__PURE__ */ g("div", {
					className: "bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-md border shadow-lg",
					children: [/* @__PURE__ */ h("div", {
						className: "border-border border-b p-1.5",
						children: /* @__PURE__ */ g("div", {
							className: "relative",
							children: [/* @__PURE__ */ h(z, { className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2" }), /* @__PURE__ */ h("input", {
								ref: y,
								type: "text",
								"aria-label": "Search options",
								"aria-controls": b,
								"aria-activedescendant": S[m] ? `${b}-${m}` : void 0,
								"aria-autocomplete": "list",
								value: u,
								onChange: (e) => C(e.target.value),
								onKeyDown: T,
								placeholder: "Search...",
								className: "bg-bg-secondary text-text-primary border-border placeholder:text-text-disabled focus:border-accent font-control h-7 w-full rounded border pr-2 pl-7 text-xs focus:outline-none"
							})]
						})
					}), /* @__PURE__ */ h("ul", {
						id: b,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: S.length === 0 ? /* @__PURE__ */ h("li", {
							className: "text-text-tertiary px-3 py-2 text-center text-xs",
							children: "No results"
						}) : S.map((e, r) => /* @__PURE__ */ g("li", {
							id: `${b}-${r}`,
							role: "option",
							"aria-selected": e.value === t,
							onClick: () => {
								n(e.value), c(!1);
							},
							onMouseEnter: () => _(r),
							className: V("font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs", "transition-colors duration-[100ms]", r === m ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
							children: [/* @__PURE__ */ h("span", {
								className: "flex-1 truncate",
								children: e.label
							}), e.value === t && /* @__PURE__ */ h(w, { className: "h-3 w-3 shrink-0" })]
						}, e.value))
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DangerZone.tsx
function zi({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ g("div", {
		className: V("border-border mt-8 border-t pt-6", r),
		children: [
			/* @__PURE__ */ h("h3", {
				className: "text-red mb-2 text-xs font-semibold",
				children: e
			}),
			t && /* @__PURE__ */ h("p", {
				className: "text-text-secondary mb-3 text-xs",
				children: t
			}),
			n
		]
	});
}
//#endregion
//#region src/components/ui/DatePicker.tsx
function Bi(e) {
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
function Vi({ label: e, value: t, onChange: n, placeholder: r = "Select date...", format: i = Bi }) {
	let [a, s] = p(!1), c = f(null), l = f(null), u = fn(a, c, l), d = /* @__PURE__ */ new Date(), [m, _] = p(t?.getFullYear() ?? d.getFullYear()), [v, y] = p(t?.getMonth() ?? d.getMonth());
	jt(a, o(() => s(!1), []), [c]);
	function b(e) {
		n(e), s(!1);
	}
	function x() {
		!a && t && (_(t.getFullYear()), y(t.getMonth())), s(!a);
	}
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-1.5",
		ref: c,
		children: [e && /* @__PURE__ */ h("span", {
			className: "text-text-secondary text-xs font-medium",
			children: e
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ h("button", {
					type: "button",
					onClick: x,
					"aria-haspopup": "dialog",
					"aria-expanded": a,
					className: V("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: t ? i(t) : /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ h(C, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				a && /* @__PURE__ */ h("div", {
					ref: l,
					role: "dialog",
					"aria-label": "Choose date",
					className: V("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", u ? "bottom-full mb-1" : "top-full mt-1"),
					children: /* @__PURE__ */ h(Ai, {
						year: m,
						month: v,
						selected: t,
						onSelect: b,
						onMonthChange: (e, t) => {
							_(e), y(t);
						}
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateRangePicker.tsx
var Hi = [
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
function Ui(e) {
	return `${Hi[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function Wi(e) {
	return e.start && e.end ? `${Ui(e.start)} – ${Ui(e.end)}` : e.start ? Ui(e.start) : "";
}
function Gi({ label: e, value: t, onChange: n, placeholder: r = "Select date range..." }) {
	let [i, a] = p(!1), s = f(null), c = f(null), l = fn(i, s, c), u = /* @__PURE__ */ new Date(), [d, m] = p(t.start?.getFullYear() ?? u.getFullYear()), [_, v] = p(t.start?.getMonth() ?? u.getMonth()), [y, b] = p(null), [x, S] = p("start"), [w, T] = p(t.start), [E, D] = p(t.end);
	jt(i, o(() => a(!1), []), [s]);
	let O = _ === 11 ? d + 1 : d, k = _ === 11 ? 0 : _ + 1;
	function A() {
		i || (T(t.start), D(t.end), S((t.start && t.end, "start")), t.start && (m(t.start.getFullYear()), v(t.start.getMonth()))), a(!i);
	}
	function j(e) {
		x === "start" ? (T(e), D(null), S("end")) : (w && e < w ? (D(w), T(e)) : D(e), S("start"), n({
			start: w && e < w ? e : w,
			end: w && e < w ? w : e
		}), a(!1));
	}
	function M() {
		_ === 0 ? (m(d - 1), v(11)) : v(_ - 1);
	}
	function N() {
		_ === 11 ? (m(d + 1), v(0)) : v(_ + 1);
	}
	let P = t.start || t.end ? Wi(t) : "";
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-1.5",
		ref: s,
		children: [e && /* @__PURE__ */ h("span", {
			className: "text-text-secondary text-xs font-medium",
			children: e
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ h("button", {
					type: "button",
					onClick: A,
					"aria-haspopup": "dialog",
					"aria-expanded": i,
					className: V("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: P || /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ h(C, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				i && /* @__PURE__ */ g("div", {
					ref: c,
					role: "dialog",
					"aria-label": "Choose date range",
					className: V("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", l ? "bottom-full mb-1" : "top-full mt-1"),
					children: [/* @__PURE__ */ g("div", {
						className: "mb-2 flex items-center justify-between",
						children: [
							/* @__PURE__ */ h("button", {
								type: "button",
								onClick: M,
								"aria-label": "Previous month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ h("span", {
									className: "text-xs",
									children: "‹"
								})
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-tertiary text-2xs",
								"aria-live": "polite",
								children: x === "start" ? "Select start date" : "Select end date"
							}),
							/* @__PURE__ */ h("button", {
								type: "button",
								onClick: N,
								"aria-label": "Next month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ h("span", {
									className: "text-xs",
									children: "›"
								})
							})
						]
					}), /* @__PURE__ */ g("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ h(Ai, {
							year: d,
							month: _,
							rangeStart: w,
							rangeEnd: E,
							hoverDate: x === "end" ? y : null,
							onSelect: j,
							onMonthChange: (e, t) => {
								m(e), v(t);
							},
							onHover: b
						}), /* @__PURE__ */ h(Ai, {
							year: O,
							month: k,
							rangeStart: w,
							rangeEnd: E,
							hoverDate: x === "end" ? y : null,
							onSelect: j,
							onMonthChange: (e, t) => {
								t === 0 ? (m(e - 1), v(11)) : (m(e), v(t - 1));
							},
							onHover: b
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DateTimePicker.tsx
var Ki = [
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
function qi(e) {
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
function Ji(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function Yi(e) {
	let t = Ki[e.getMonth()], n = e.getDate(), r = e.getFullYear(), { hour12: i, period: a } = qi(e.getHours());
	return `${t} ${n}, ${r} ${i}:${String(e.getMinutes()).padStart(2, "0")} ${a}`;
}
function Xi(e) {
	return String(e).padStart(2, "0");
}
function Zi({ label: e, value: t, onChange: n, placeholder: r = "Select date & time..." }) {
	let [i, a] = p(!1), s = f(null), c = f(null), l = fn(i, s, c), u = /* @__PURE__ */ new Date(), d = t ? qi(t.getHours()) : {
		hour12: 12,
		period: "PM"
	}, [m, _] = p(t?.getFullYear() ?? u.getFullYear()), [v, y] = p(t?.getMonth() ?? u.getMonth()), [b, x] = p(String(d.hour12)), [S, w] = p(t ? Xi(t.getMinutes()) : "00"), [T, E] = p(d.period), [D, O] = p(t);
	jt(i, o(() => a(!1), []), [s]);
	function k(e) {
		O(e);
	}
	function A(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		x(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (x(String(n - 12)), E("PM")) : n === 0 && (x("12"), E("AM"));
	}
	function j() {
		if (!D) return;
		let e = Math.max(1, Math.min(12, parseInt(b, 10) || 12)), t = Math.max(0, Math.min(59, parseInt(S, 10) || 0)), r = Ji(e, T);
		n(new Date(D.getFullYear(), D.getMonth(), D.getDate(), r, t)), a(!1);
	}
	function M() {
		if (!i && t) {
			_(t.getFullYear()), y(t.getMonth()), O(t);
			let e = qi(t.getHours());
			x(String(e.hour12)), E(e.period), w(Xi(t.getMinutes()));
		}
		a(!i);
	}
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-1.5",
		ref: s,
		children: [e && /* @__PURE__ */ h("span", {
			className: "text-text-secondary text-xs font-medium",
			children: e
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ h("button", {
					type: "button",
					onClick: M,
					"aria-haspopup": "dialog",
					"aria-expanded": i,
					className: V("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: t ? Yi(t) : /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ h(C, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				i && /* @__PURE__ */ g("div", {
					ref: c,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: V("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", l ? "bottom-full mb-1" : "top-full mt-1"),
					children: [/* @__PURE__ */ h(Ai, {
						year: m,
						month: v,
						selected: D,
						onSelect: k,
						onMonthChange: (e, t) => {
							_(e), y(t);
						}
					}), /* @__PURE__ */ g("div", {
						className: "border-border mt-3 flex items-center gap-2 border-t pt-3",
						children: [
							/* @__PURE__ */ h("span", {
								className: "text-text-secondary text-2xs font-medium",
								children: "Time"
							}),
							/* @__PURE__ */ g("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ h("input", {
										type: "text",
										inputMode: "numeric",
										maxLength: 2,
										value: b,
										onChange: (e) => A(e.target.value),
										"aria-label": "Hour",
										className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
									}),
									/* @__PURE__ */ h("span", {
										className: "text-text-tertiary text-xs",
										children: ":"
									}),
									/* @__PURE__ */ h("input", {
										type: "text",
										inputMode: "numeric",
										maxLength: 2,
										value: S,
										onChange: (e) => w(e.target.value.replace(/\D/g, "").slice(0, 2)),
										"aria-label": "Minute",
										className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
									})
								]
							}),
							/* @__PURE__ */ g("div", {
								className: "border-border inline-flex overflow-hidden rounded-md border",
								role: "group",
								"aria-label": "Time period",
								children: [/* @__PURE__ */ h("button", {
									type: "button",
									onClick: () => E("AM"),
									"aria-pressed": T === "AM",
									className: V("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", T === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
									children: "AM"
								}), /* @__PURE__ */ h("button", {
									type: "button",
									onClick: () => E("PM"),
									"aria-pressed": T === "PM",
									className: V("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", T === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
									children: "PM"
								})]
							}),
							/* @__PURE__ */ h("button", {
								type: "button",
								onClick: j,
								disabled: !D,
								className: V("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", D ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
								children: "Apply"
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DetailPanel.tsx
var Qi = 360, $i = 260, ea = 700;
function ta({ open: e, onClose: t, title: n, children: r, className: i, resizable: a = !0, defaultWidth: s = Qi, minWidth: l = $i, maxWidth: u = ea }) {
	let [d, m] = p(s), _ = f(!1), v = f(0), y = f(0);
	c(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
	}, [e, t]);
	let b = o((e) => {
		a && (e.preventDefault(), _.current = !0, v.current = e.clientX, y.current = d, e.target.setPointerCapture(e.pointerId));
	}, [a, d]), x = o((e) => {
		if (!_.current) return;
		let t = v.current - e.clientX;
		m(Math.max(l, Math.min(u, y.current + t)));
	}, [l, u]), S = o(() => {
		_.current = !1;
	}, []);
	return /* @__PURE__ */ h("div", {
		className: V("border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l", "transition-[width] duration-[200ms] ease-out", i),
		style: { width: e ? d : 0 },
		children: e && /* @__PURE__ */ g("div", {
			className: "animate-fade-in flex h-full flex-col",
			style: { width: d },
			children: [
				a && /* @__PURE__ */ h("div", {
					onPointerDown: b,
					onPointerMove: x,
					onPointerUp: S,
					className: "hover:bg-accent/30 active:bg-accent/40 absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none"
				}),
				/* @__PURE__ */ g("div", {
					className: "border-border flex h-10 shrink-0 items-center justify-between border-b px-3",
					children: [/* @__PURE__ */ h("h3", {
						className: "text-text-primary truncate text-xs font-semibold",
						children: n
					}), /* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close panel",
						children: /* @__PURE__ */ h(B, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ h("div", {
					className: "flex-1 overflow-y-auto p-3",
					children: r
				})
			]
		})
	});
}
function na(e, t, [n, r], [i, a], [o, s], c) {
	let [l, u] = r - n <= s - o - c * 2 ? [n, r] : [i, a], d = t + (o + c - l), f = t + (s - c - u);
	return f < d && (f = d), d = Math.min(d, 0), f = Math.max(f, 0), Math.min(f, Math.max(d, e));
}
function ra(e, t, n, r, i, a = 8) {
	return {
		x: na(e.x, t.x, [n.left, n.right], [r.left, r.right], [i.left, i.right], a),
		y: na(e.y, t.y, [n.top, n.bottom], [r.top, r.bottom], [i.top, i.bottom], a)
	};
}
function ia({ x: e, y: t }) {
	return e === 0 && t === 0 ? "" : `${e}px ${t}px`;
}
//#endregion
//#region src/components/ui/Dialog.tsx
var aa = "(min-width: 48rem)", oa = "a[href], button, input, select, textarea, label, summary, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [tabindex]:not([tabindex=\"-1\"])", sa = {
	x: 0,
	y: 0
};
function ca(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top,
		right: t.left + e.clientWidth,
		bottom: t.top + e.clientHeight
	};
}
function la(e) {
	return e.ownerDocument.defaultView?.matchMedia(aa).matches ?? !1;
}
function ua(e, t, n) {
	let r = f(sa), i = f(null);
	c(() => {
		let a = t.current, o = n.current, s = a?.ownerDocument.defaultView;
		if (!e || !a || !o || !s) return;
		let c = (e) => {
			r.current = e, a.style.translate = ia(e);
		}, l = () => {
			if (!la(a)) {
				i.current = null, c(sa);
				return;
			}
			let e = r.current, t = a.parentElement;
			e.x === 0 && e.y === 0 || !t || c(ra(e, e, a.getBoundingClientRect(), o.getBoundingClientRect(), ca(t)));
		};
		return s.addEventListener("resize", l), () => {
			s.removeEventListener("resize", l), i.current = null, r.current = sa, a.style.translate = "";
		};
	}, [
		e,
		t,
		n
	]);
	let a = (e) => {
		let n = t.current, a = e.currentTarget, o = n?.parentElement;
		if (!n || !o || e.button !== 0 || !e.isPrimary) return;
		let s = e.target.closest(oa);
		s && a.contains(s) || !la(n) || (e.preventDefault(), a.setPointerCapture(e.pointerId), i.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			origin: r.current,
			dialog: n.getBoundingClientRect(),
			handle: a.getBoundingClientRect(),
			bounds: ca(o)
		});
	}, o = (e) => {
		let n = i.current, a = t.current;
		if (!n || n.pointerId !== e.pointerId || !a) return;
		let o = ra({
			x: n.origin.x + e.clientX - n.startX,
			y: n.origin.y + e.clientY - n.startY
		}, n.origin, n.dialog, n.handle, n.bounds);
		r.current = o, a.style.translate = ia(o);
	}, s = (e) => {
		i.current?.pointerId === e.pointerId && (i.current = null);
	};
	if (e) return {
		onPointerDown: a,
		onPointerMove: o,
		onPointerUp: s,
		onPointerCancel: s,
		onLostPointerCapture: s
	};
}
function da({ open: e, onClose: t, title: n, children: r, footer: i, className: a, draggable: o = !1 }) {
	let s = f(null), u = f(null), d = l();
	ft(s, e);
	let p = ua(e && o, s, u);
	return c(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = "";
		};
	}, [e, t]), e ? ue(/* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]",
		children: [/* @__PURE__ */ h("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: t
		}), /* @__PURE__ */ g("div", {
			ref: s,
			className: V("relative z-50 mx-4 mb-8 w-full max-w-[400px] p-6", "bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": n ? d : void 0,
			"aria-label": n ? void 0 : "Dialog",
			children: [
				/* @__PURE__ */ g("div", {
					ref: u,
					className: V("mb-4 flex items-center justify-between", o && "md:cursor-grab md:touch-none md:select-none md:active:cursor-grabbing"),
					...p,
					children: [n && /* @__PURE__ */ h("h3", {
						id: d,
						className: "text-text-primary text-sm font-semibold",
						children: n
					}), /* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]",
						"aria-label": "Close",
						children: /* @__PURE__ */ h(B, { className: "h-4 w-4" })
					})]
				}),
				r,
				i
			]
		})]
	}), document.body) : null;
}
//#endregion
//#region src/components/ui/DialogActions.tsx
function fa({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a }) {
	return /* @__PURE__ */ g("div", {
		className: V("flex justify-end gap-2", a),
		children: [/* @__PURE__ */ h(un, {
			variant: "ghost",
			size: "sm",
			onClick: e,
			children: n
		}), /* @__PURE__ */ h(un, {
			variant: i,
			size: "sm",
			onClick: t,
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/DividerLabel.tsx
function pa({ children: e, className: t }) {
	return /* @__PURE__ */ g("div", {
		className: V("my-6 flex items-center gap-3", t),
		children: [
			/* @__PURE__ */ h("div", { className: "border-border flex-1 border-t" }),
			/* @__PURE__ */ h("span", {
				className: "text-text-tertiary text-xs",
				children: e
			}),
			/* @__PURE__ */ h("div", { className: "border-border flex-1 border-t" })
		]
	});
}
//#endregion
//#region src/components/ui/DropdownMenu.tsx
function ma({ trigger: e, items: t, align: n = "right" }) {
	let [r, i] = p(!1), [a, s] = p({
		top: 0,
		left: 0,
		triggerWidth: 0
	}), [l, u] = p(-1), _ = f(null), v = f(null), y = d(() => t.filter((e) => !e.divider), [t]), b = o(() => {
		i(!1), u(-1);
	}, []);
	jt(r, b, [v], [_]), c(() => {
		if (!r) return;
		let e = (e) => {
			e.key === "ArrowDown" ? (e.preventDefault(), u((e) => (e + 1) % y.length)) : e.key === "ArrowUp" ? (e.preventDefault(), u((e) => (e - 1 + y.length) % y.length)) : e.key === "Enter" && l >= 0 && (e.preventDefault(), y[l].onClick(), b());
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		r,
		l,
		y,
		b
	]), c(() => {
		!r || l < 0 || !v.current || v.current.querySelectorAll("[role=\"menuitem\"]")[l]?.focus();
	}, [r, l]);
	function x() {
		if (!_.current) return;
		let e = _.current.getBoundingClientRect();
		s({
			top: e.bottom + 4,
			left: n === "right" ? e.right : e.left,
			triggerWidth: e.width
		}), i(!r), u(-1);
	}
	let S = -1;
	return /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("div", {
		ref: _,
		onClick: x,
		children: e
	}), r && ue(/* @__PURE__ */ h("div", {
		ref: v,
		role: "menu",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-max rounded-md border py-1 shadow-lg",
		style: {
			top: a.top,
			minWidth: a.triggerWidth,
			...n === "right" ? { right: window.innerWidth - a.left } : { left: a.left }
		},
		children: t.map((e, t) => {
			if (e.divider) return /* @__PURE__ */ h("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${t}`);
			S++;
			let n = S;
			return /* @__PURE__ */ g("button", {
				role: "menuitem",
				tabIndex: n === l ? 0 : -1,
				onClick: () => {
					e.onClick(), b();
				},
				onMouseEnter: () => u(n),
				className: V("flex h-7 w-full cursor-pointer items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover"),
				children: [
					e.icon && /* @__PURE__ */ h("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center",
						children: e.icon
					}),
					/* @__PURE__ */ h("span", {
						className: "flex-1",
						children: e.label
					}),
					e.shortcut && /* @__PURE__ */ h("span", {
						className: "text-2xs text-text-tertiary ml-auto pl-4 font-mono",
						children: e.shortcut
					}),
					e.checked && /* @__PURE__ */ h(w, { className: "text-accent ml-auto h-3.5 w-3.5 shrink-0" })
				]
			}, e.label || `item-${t}`);
		})
	}), document.body)] });
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function ha({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ g("div", {
		className: V("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ h("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ h(N, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ h("p", {
				className: "text-text-primary mb-1 text-sm font-medium",
				children: t
			}),
			n && /* @__PURE__ */ h("p", {
				className: "text-text-secondary max-w-[300px] text-center text-xs",
				children: n
			}),
			r && /* @__PURE__ */ h("div", {
				className: "mt-4",
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/ui/ErrorBoundary.tsx
var ga = class extends e {
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
		return this.state.hasError ? /* @__PURE__ */ g("div", {
			className: "bg-bg-primary flex min-h-svh flex-col items-center justify-center p-8 text-center",
			children: [
				/* @__PURE__ */ h("p", {
					className: "text-text-primary mb-2 text-lg font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ h("p", {
					className: "text-text-secondary mb-6 max-w-md text-xs",
					children: this.state.error?.message ?? "An unexpected error occurred."
				}),
				/* @__PURE__ */ h(un, {
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
function _a({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ h(ma, {
		align: r,
		trigger: /* @__PURE__ */ h(An, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function va({ children: e, className: t }) {
	return /* @__PURE__ */ h("kbd", {
		className: V("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var ya = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function ba({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ h("div", {
		className: V("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ h(F, { className: V("text-accent animate-spin", ya[t]) })
	});
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
function xa({ items: e, labelWidth: n = "100px", className: r }) {
	return /* @__PURE__ */ h("div", {
		className: V("gap-x-3 gap-y-2 text-xs", r),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e) => /* @__PURE__ */ g(t, { children: [/* @__PURE__ */ h("span", {
			className: "text-text-tertiary font-label",
			children: e.label
		}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ h("span", {
			className: "text-text-primary font-data",
			children: e.value
		}) : /* @__PURE__ */ h("span", { children: e.value })] }, e.label))
	});
}
//#endregion
//#region src/components/ui/MetricCard.tsx
function Sa({ label: e, value: t, sub: n, trend: r, bar: i, icon: a, iconColor: o, className: s }) {
	let c = r?.tone === "positive" ? "text-green" : r?.tone === "negative" ? "text-red" : "text-text-tertiary";
	return /* @__PURE__ */ g("div", {
		className: V("bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3", s),
		children: [
			a && /* @__PURE__ */ h(a, { className: V("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", o) }),
			/* @__PURE__ */ h("p", {
				className: "text-2xs-f text-text-tertiary font-label mb-1 font-medium tracking-wider uppercase",
				children: e
			}),
			/* @__PURE__ */ h("p", {
				className: "text-text-primary font-data text-xl font-bold tabular-nums",
				children: t
			}),
			n && /* @__PURE__ */ h("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: n
			}),
			r && /* @__PURE__ */ g("p", {
				className: "text-2xs font-label mt-1 flex items-center gap-1",
				children: [/* @__PURE__ */ h("span", {
					className: V("font-medium tabular-nums", c),
					children: r.value
				}), /* @__PURE__ */ h("span", {
					className: "text-text-tertiary",
					children: r.label
				})]
			}),
			i !== void 0 && /* @__PURE__ */ h("div", {
				className: "bg-bg-tertiary mt-2 h-[3px] overflow-hidden rounded-md",
				children: /* @__PURE__ */ h("div", {
					className: "bg-accent h-full rounded-md transition-all duration-[250ms] ease-out",
					style: { width: `${Math.min(100, Math.max(0, i))}%` }
				})
			})
		]
	});
}
//#endregion
//#region src/components/ui/OAuthButton.tsx
function Ca() {
	return /* @__PURE__ */ g("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ h("path", {
				fill: "currentColor",
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
			}),
			/* @__PURE__ */ h("path", {
				fill: "currentColor",
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			}),
			/* @__PURE__ */ h("path", {
				fill: "currentColor",
				d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
			}),
			/* @__PURE__ */ h("path", {
				fill: "currentColor",
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
			})
		]
	});
}
function wa() {
	return /* @__PURE__ */ h("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ h("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var Ta = {
	github: "GitHub",
	google: "Google"
}, Ea = {
	github: wa,
	google: Ca
};
function Da({ provider: e, children: t, ...n }) {
	let r = Ea[e];
	return /* @__PURE__ */ g(un, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ h(r, {}), t ?? Ta[e]]
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function Oa({ title: e, subtitle: t, actions: n, className: r }) {
	return /* @__PURE__ */ g("div", {
		className: V("flex items-center justify-between", r),
		children: [/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h("h1", {
			className: "text-text-primary font-heading text-sm font-semibold",
			children: e
		}), t && /* @__PURE__ */ h("p", {
			className: "text-text-tertiary text-xs",
			children: t
		})] }), n && /* @__PURE__ */ h("div", {
			className: "flex items-center gap-2",
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/PageSection.tsx
function ka({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ g("section", {
		className: V("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ g("div", {
			className: V("border-border flex items-end justify-between gap-3 border-b pb-2", o),
			children: [/* @__PURE__ */ g("div", {
				className: "min-w-0",
				children: [e && /* @__PURE__ */ h(i, {
					className: "text-text-primary font-heading text-xs font-semibold",
					children: e
				}), t && /* @__PURE__ */ h("p", {
					className: "text-text-secondary mt-1 text-xs",
					children: t
				})]
			}), n && /* @__PURE__ */ h("div", {
				className: "flex items-center gap-2",
				children: n
			})]
		}), /* @__PURE__ */ h("div", {
			className: s,
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/PaginationBar.tsx
var Aa = [
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
function ja({ page: e, pageSize: t, total: n, pageSizeOptions: r = Aa, onPageChange: i, onPageSizeChange: a, className: o }) {
	let s = Math.ceil(n / t), c = Math.min((e - 1) * t + 1, n), l = Math.min(e * t, n);
	return /* @__PURE__ */ g("div", {
		className: V("flex items-center justify-between", o),
		children: [/* @__PURE__ */ g("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ h(pn, {
				size: "sm",
				value: String(t),
				onChange: (e) => a(Number(e)),
				options: r,
				className: "w-28"
			}), /* @__PURE__ */ g("span", {
				className: "text-text-tertiary hidden text-xs sm:inline",
				children: [
					c,
					"–",
					l,
					" of ",
					n
				]
			})]
		}), /* @__PURE__ */ h(Mn, {
			page: e,
			totalPages: s,
			onPageChange: i
		})]
	});
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var Ma = i(({ label: e, error: t, className: n, id: r, ...i }, a) => {
	let o = r || e?.toLowerCase().replace(/\s+/g, "-"), [s, c] = p(!1);
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-1.5",
		children: [(e || t) && /* @__PURE__ */ g("div", {
			className: "flex items-center justify-between",
			children: [e && /* @__PURE__ */ h("label", {
				htmlFor: o,
				className: "text-text-secondary text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ h("p", {
				className: "text-2xs text-red",
				children: t
			})]
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			children: [/* @__PURE__ */ h("input", {
				ref: a,
				id: o,
				type: s ? "text" : "password",
				className: V("bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
				...i
			}), /* @__PURE__ */ h("button", {
				type: "button",
				onClick: () => c(!s),
				className: "text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",
				"aria-label": s ? "Hide password" : "Show password",
				children: h(s ? M : j, { className: "h-3.5 w-3.5" })
			})]
		})]
	});
});
Ma.displayName = "PasswordInput";
var Na = Object.freeze([
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
function Pa(e, t = Na) {
	return t.every((t) => t.test(e));
}
//#endregion
//#region src/components/ui/PasswordRequirements.tsx
function Fa({ password: e, requirements: t = Na, showWhenEmpty: n = !1, className: r }) {
	return !n && e.length === 0 ? null : /* @__PURE__ */ h("ul", {
		"aria-label": "Password requirements",
		className: V("space-y-1", r),
		children: t.map((t) => {
			let n = t.test(e);
			return /* @__PURE__ */ g("li", {
				className: "flex items-center gap-1.5",
				children: [n ? /* @__PURE__ */ h(w, {
					"aria-hidden": "true",
					className: "text-green h-3 w-3"
				}) : /* @__PURE__ */ h(B, {
					"aria-hidden": "true",
					className: "text-text-disabled h-3 w-3"
				}), /* @__PURE__ */ g("span", {
					className: V("text-2xs", n ? "text-green" : "text-text-disabled"),
					children: [t.label, /* @__PURE__ */ h("span", {
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
function Ia({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ g("div", {
		className: V("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ h(Lt, {
				name: e,
				size: "lg"
			}),
			/* @__PURE__ */ g("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ g("div", {
						className: "mb-1 flex items-center gap-2",
						children: [/* @__PURE__ */ h("h1", {
							className: "text-text-primary text-base font-semibold",
							children: e
						}), n]
					}),
					t && /* @__PURE__ */ h("p", {
						className: "text-text-tertiary text-xs",
						children: t
					}),
					r && r.length > 0 && /* @__PURE__ */ h("div", {
						className: "mt-2 flex flex-wrap gap-3",
						children: r.map((e) => {
							let t = e.icon, n = /* @__PURE__ */ g(m, { children: [
								/* @__PURE__ */ h(t, { className: "h-3 w-3" }),
								" ",
								e.text
							] });
							return e.href ? /* @__PURE__ */ h("a", {
								href: e.href,
								className: "text-2xs-f text-accent hover:text-accent-hover flex cursor-pointer items-center gap-1",
								children: n
							}, e.text) : /* @__PURE__ */ h("span", {
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
function La({ children: e, className: t }) {
	return /* @__PURE__ */ h("div", {
		className: V("ui-prose", t),
		children: e
	});
}
//#endregion
//#region src/lib/qrCode.ts
var Ra = class extends RangeError {
	constructor() {
		super("Text is too long to encode as a QR code"), this.name = "QrCapacityError";
	}
}, za = {
	L: 0,
	M: 1,
	Q: 2,
	H: 3
}, Ba = {
	L: 1,
	M: 0,
	Q: 3,
	H: 2
}, Va = [
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
], Ha = [
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
function Ua(e) {
	let t = (16 * e + 128) * e + 64;
	if (e >= 2) {
		let n = Math.floor(e / 7) + 2;
		t -= (25 * n - 10) * n - 55, e >= 7 && (t -= 36);
	}
	return t;
}
function Wa(e, t) {
	let n = za[t];
	return Math.floor(Ua(e) / 8) - Va[n][e] * Ha[n][e];
}
function Ga(e) {
	if (e === 1) return [];
	let t = Math.floor(e / 7) + 2, n = Math.floor((e * 8 + t * 3 + 5) / (t * 4 - 4)) * 2, r = [6];
	for (let i = e * 4 + 17 - 7; r.length < t; i -= n) r.splice(1, 0, i);
	return r;
}
function Ka(e, t) {
	let n = 0;
	for (let r = 7; r >= 0; r--) n = n << 1 ^ (n >>> 7) * 285, n ^= (t >>> r & 1) * e;
	return n;
}
function qa(e) {
	let t = Array(e).fill(0);
	t[e - 1] = 1;
	let n = 1;
	for (let r = 0; r < e; r++) {
		for (let e = 0; e < t.length; e++) t[e] = Ka(t[e], n), e + 1 < t.length && (t[e] ^= t[e + 1]);
		n = Ka(n, 2);
	}
	return t;
}
function Ja(e, t) {
	let n = Array(t.length).fill(0);
	for (let r of e) {
		let e = r ^ n.shift();
		n.push(0), t.forEach((t, r) => {
			n[r] ^= Ka(t, e);
		});
	}
	return n;
}
function Ya(e, t, n) {
	let r = Wa(t, n) * 8, i = [], a = (e, t) => {
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
function Xa(e, t, n) {
	let r = za[n], i = Ha[r][t], a = Va[r][t], o = Math.floor(Ua(t) / 8), s = i - o % i, c = Math.floor(o / i), l = qa(a), u = [];
	for (let t = 0, n = 0; t < i; t++) {
		let r = c - a + (t < s ? 0 : 1), i = e.slice(n, n + r);
		n += r;
		let o = Ja(i, l);
		t < s && i.push(0), u.push(i.concat(o));
	}
	let d = [];
	for (let e = 0; e < u[0].length; e++) u.forEach((t, n) => {
		(e !== c - a || n >= s) && d.push(t[e]);
	});
	return d;
}
var Za = class {
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
function Qa(e, t) {
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
	let r = Ga(t), i = r.length - 1;
	r.forEach((t, n) => {
		r.forEach((r, a) => {
			if (!(n === 0 && a === 0 || n === 0 && a === i || n === i && a === 0)) for (let n = -2; n <= 2; n++) for (let i = -2; i <= 2; i++) e.setFunction(t + i, r + n, Math.max(Math.abs(i), Math.abs(n)) !== 1);
		});
	}), $a(e, "M", 0), eo(e, t);
}
function $a(e, t, n) {
	let r = Ba[t] << 3 | n, i = r;
	for (let e = 0; e < 10; e++) i = i << 1 ^ (i >>> 9) * 1335;
	let a = (r << 10 | i) ^ 21522, o = (e) => (a >>> e & 1) != 0, { size: s } = e;
	for (let t = 0; t <= 5; t++) e.setFunction(8, t, o(t));
	e.setFunction(8, 7, o(6)), e.setFunction(8, 8, o(7)), e.setFunction(7, 8, o(8));
	for (let t = 9; t < 15; t++) e.setFunction(14 - t, 8, o(t));
	for (let t = 0; t < 8; t++) e.setFunction(s - 1 - t, 8, o(t));
	for (let t = 8; t < 15; t++) e.setFunction(8, s - 15 + t, o(t));
	e.setFunction(8, s - 8, !0);
}
function eo(e, t) {
	if (t < 7) return;
	let n = t;
	for (let e = 0; e < 12; e++) n = n << 1 ^ (n >>> 11) * 7973;
	let r = t << 12 | n;
	for (let t = 0; t < 18; t++) {
		let n = (r >>> t & 1) != 0, i = e.size - 11 + t % 3, a = Math.floor(t / 3);
		e.setFunction(i, a, n), e.setFunction(a, i, n);
	}
}
function to(e, t) {
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
var no = [
	(e, t) => (e + t) % 2 == 0,
	(e, t) => t % 2 == 0,
	(e) => e % 3 == 0,
	(e, t) => (e + t) % 3 == 0,
	(e, t) => (Math.floor(e / 3) + Math.floor(t / 2)) % 2 == 0,
	(e, t) => e * t % 2 + e * t % 3 == 0,
	(e, t) => (e * t % 2 + e * t % 3) % 2 == 0,
	(e, t) => ((e + t) % 2 + e * t % 3) % 2 == 0
];
function ro(e, t) {
	for (let n = 0; n < e.size; n++) for (let r = 0; r < e.size; r++) !e.isFunction[n][r] && no[t](r, n) && (e.modules[n][r] = !e.modules[n][r]);
}
var io = [[
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
function ao(e) {
	let t = e.length, n = (t, n, r) => r ? e[t][n] : e[n][t], r = 0;
	for (let e of [!1, !0]) for (let i = 0; i < t; i++) {
		let a = 1;
		for (let o = 1; o <= t; o++) o < t && n(o, i, e) === n(o - 1, i, e) ? a++ : (a >= 5 && (r += 3 + (a - 5)), a = 1);
		for (let a = 0; a + 11 <= t; a++) for (let t of io) t.every((t, r) => n(a + r, i, e) === t) && (r += 40);
	}
	for (let n = 0; n < t - 1; n++) for (let i = 0; i < t - 1; i++) {
		let t = e[n][i];
		t === e[n][i + 1] && t === e[n + 1][i] && t === e[n + 1][i + 1] && (r += 3);
	}
	let i = e.reduce((e, t) => e + t.filter(Boolean).length, 0) * 100 / (t * t);
	return r += Math.floor(Math.abs(i - 50) / 5) * 10, r;
}
function oo(e, t = "M") {
	if (!Object.hasOwn(za, t)) throw RangeError(`Invalid QR error correction level "${t}"; expected L, M, Q or H`);
	let n = new TextEncoder().encode(e), r = 1;
	for (; r <= 40 && !(4 + (r <= 9 ? 8 : 16) + n.length * 8 <= Wa(r, t) * 8); r++);
	if (r > 40) throw new Ra();
	let i = Xa(Ya(n, r, t), r, t), a = new Za(r * 4 + 17);
	Qa(a, r), to(a, i);
	let o = 0, s = Infinity;
	for (let e = 0; e < 8; e++) {
		ro(a, e), $a(a, t, e);
		let n = ao(a.modules);
		n < s && (s = n, o = e), ro(a, e);
	}
	return ro(a, o), $a(a, t, o), {
		size: a.size,
		version: r,
		modules: a.modules
	};
}
//#endregion
//#region src/components/ui/QrCode.tsx
function so({ value: e, errorCorrection: t = "M", size: n = 160, margin: r = 4, "aria-label": i = "QR code", fallback: a = null, className: o }) {
	let s = d(() => {
		if (!e) return null;
		try {
			return oo(e, t);
		} catch (e) {
			if (e instanceof Ra) return "too-long";
			throw e;
		}
	}, [e, t]);
	if (!s) return null;
	if (s === "too-long") return /* @__PURE__ */ h(m, { children: a });
	let c = Math.max(0, Math.floor(r)), l = s.size + c * 2, u = "";
	return s.modules.forEach((e, t) => {
		for (let n = 0; n < s.size; n++) {
			if (!e[n]) continue;
			let r = n;
			for (; n + 1 < s.size && e[n + 1];) n++;
			u += `M${r + c} ${t + c}h${n - r + 1}v1h-${n - r + 1}z`;
		}
	}), /* @__PURE__ */ g("svg", {
		role: "img",
		"aria-label": i,
		width: n,
		height: n,
		viewBox: `0 0 ${l} ${l}`,
		shapeRendering: "crispEdges",
		className: V("block", o),
		children: [/* @__PURE__ */ h("rect", {
			width: l,
			height: l,
			fill: "var(--qr-background)"
		}), /* @__PURE__ */ h("path", {
			d: u,
			fill: "var(--qr-foreground)"
		})]
	});
}
//#endregion
//#region src/components/ui/SearchInput.tsx
function co({ value: e, onChange: t, placeholder: n = "Search...", className: r }) {
	return /* @__PURE__ */ g("div", {
		className: V("relative", r),
		children: [/* @__PURE__ */ h(z, { className: "text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" }), /* @__PURE__ */ h("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: V("bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none")
		})]
	});
}
//#endregion
//#region src/components/ui/Select.tsx
var lo = i(({ label: e, error: t, options: n, className: r, id: i, ...a }, o) => {
	let s = i || e?.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-1.5",
		children: [(e || t) && /* @__PURE__ */ g("div", {
			className: "flex items-center justify-between",
			children: [e && /* @__PURE__ */ h("label", {
				htmlFor: s,
				className: "text-text-secondary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ h("p", {
				className: "text-2xs text-red",
				children: t
			})]
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			children: [/* @__PURE__ */ h("select", {
				ref: o,
				id: s,
				className: V("bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", t ? "border-red" : "border-border", r),
				...a,
				children: n.map((e) => /* @__PURE__ */ h("option", {
					value: e.value,
					children: e.label
				}, e.value))
			}), /* @__PURE__ */ h(E, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" })]
		})]
	});
});
lo.displayName = "Select";
//#endregion
//#region src/components/ui/SettingRow.tsx
function uo({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ g("div", {
		className: V("border-border flex items-center justify-between border-b py-3", r),
		children: [/* @__PURE__ */ g("div", {
			className: "min-w-0 flex-1 pr-4",
			children: [/* @__PURE__ */ h("p", {
				className: "text-text-primary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ h("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: t
			})]
		}), /* @__PURE__ */ h("div", {
			className: "shrink-0",
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/SideSheet.tsx
function fo({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: o = "w-[360px]", className: s, contentClassName: l }) {
	let u = f(null);
	return ft(u, e), c(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = "";
		};
	}, [e, t]), e ? ue(/* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ h("div", {
			className: "bg-bg-overlay animate-fade-in absolute inset-0",
			onClick: t
		}), /* @__PURE__ */ g("div", {
			ref: u,
			className: V("bg-bg-secondary border-border absolute inset-y-0 flex flex-col shadow-lg", o, a === "right" ? "animate-slide-in-right right-0 border-l" : "animate-slide-in-left left-0 border-r", s),
			style: { maxWidth: "calc(100vw - 2rem)" },
			role: "dialog",
			"aria-modal": "true",
			"aria-label": typeof n == "string" ? n : "Panel",
			children: [
				/* @__PURE__ */ g("div", {
					className: "border-border flex h-10 shrink-0 items-center justify-between border-b px-3",
					children: [n && /* @__PURE__ */ h("h3", {
						className: "text-text-primary truncate text-xs font-semibold",
						children: n
					}), /* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close",
						children: /* @__PURE__ */ h(B, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ h("div", {
					className: V("flex-1 overflow-y-auto p-3", l),
					children: r
				}),
				i && /* @__PURE__ */ h("div", {
					className: "border-border flex gap-2 border-t p-3",
					children: i
				})
			]
		})]
	}), document.body) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function po({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ h("div", {
		className: V("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function mo({ children: e, className: t }) {
	return /* @__PURE__ */ h("div", {
		className: V("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var ho = Object.assign(po, { Main: mo }), go = {
	active: "bg-green",
	inactive: "bg-text-tertiary",
	pending: "bg-yellow animate-pulse-subtle",
	error: "bg-red"
}, _o = {
	active: "text-green",
	inactive: "text-text-tertiary",
	pending: "text-yellow",
	error: "text-red"
};
function vo({ status: e, label: t, className: n }) {
	return /* @__PURE__ */ g("span", {
		className: V("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ h("span", { className: V("h-2 w-2 rounded-full", go[e]) }), t && /* @__PURE__ */ h("span", {
			className: V("text-xs", _o[e]),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function yo({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ h("div", {
		className: V("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ g("div", {
			className: V("flex items-center", r < e.length - 1 && "flex-1"),
			children: [/* @__PURE__ */ g("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ h("div", {
						className: V("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ h(w, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ h("span", {
						className: V("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ h("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ h("div", { className: V("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function bo({ tabs: e, defaultTab: t, value: n, onChange: r, className: i }) {
	let [a, o] = p(t || e[0]?.key), s = n ?? a, c = e.some((e) => e.key === s) ? s : e[0]?.key, u = e.find((e) => e.key === c);
	function d(e) {
		n === void 0 && o(e), r?.(e);
	}
	let m = l(), _ = f(null);
	function v(t) {
		let n = e.map((e) => e.key), r = n.indexOf(c), i = null;
		t.key === "ArrowRight" ? (t.preventDefault(), i = (r + 1) % e.length) : t.key === "ArrowLeft" && (t.preventDefault(), i = (r - 1 + e.length) % e.length), i !== null && (d(n[i]), (_.current?.querySelectorAll("[role=\"tab\"]"))?.[i]?.focus());
	}
	return /* @__PURE__ */ g("div", {
		className: i,
		children: [/* @__PURE__ */ h("div", {
			className: "border-border flex border-b",
			role: "tablist",
			ref: _,
			children: e.map((e) => /* @__PURE__ */ g("button", {
				id: `${m}-tab-${e.key}`,
				role: "tab",
				tabIndex: e.key === c ? 0 : -1,
				"aria-selected": e.key === c,
				"aria-controls": `${m}-panel-${e.key}`,
				onClick: () => d(e.key),
				onKeyDown: v,
				className: V("font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]", "hover:text-text-primary", e.key === c ? "text-accent" : "text-text-tertiary"),
				children: [e.label, e.key === c && /* @__PURE__ */ h("div", { className: "bg-accent absolute right-0 bottom-0 left-0 h-0.5 rounded-md" })]
			}, e.key))
		}), /* @__PURE__ */ h("div", {
			id: `${m}-panel-${c}`,
			role: "tabpanel",
			"aria-labelledby": `${m}-tab-${c}`,
			className: "pt-4",
			children: u?.content
		})]
	});
}
//#endregion
//#region src/components/ui/Textarea.tsx
var xo = i(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, ...s }, c) => {
	let l = o || e?.toLowerCase().replace(/\s+/g, "-"), u = typeof i == "string" ? i.length : 0;
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-1.5",
		children: [
			e && /* @__PURE__ */ h("label", {
				htmlFor: l,
				className: "text-text-secondary font-label text-xs font-medium",
				children: e
			}),
			/* @__PURE__ */ h("textarea", {
				ref: c,
				id: l,
				value: i,
				maxLength: r,
				className: V("bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
				...s
			}),
			/* @__PURE__ */ g("div", {
				className: "flex justify-between",
				children: [t && /* @__PURE__ */ h("p", {
					className: "text-2xs text-red",
					children: t
				}), n && r && /* @__PURE__ */ g("p", {
					className: "text-2xs text-text-tertiary ml-auto",
					children: [
						u,
						"/",
						r
					]
				})]
			})
		]
	});
});
xo.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var So = i(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, "aria-describedby": o, ...s }, c) => {
	let l = i || e?.toLowerCase().replace(/\s+/g, "-"), u = t && l ? `${l}-error` : void 0, d = [o, u].filter(Boolean).join(" ");
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-1.5",
		children: [(e || t) && /* @__PURE__ */ g("div", {
			className: "flex items-center justify-between",
			children: [e && /* @__PURE__ */ h("label", {
				htmlFor: l,
				className: "text-text-secondary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ h("p", {
				id: u,
				className: "text-2xs text-red",
				children: t
			})]
		}), /* @__PURE__ */ g("div", {
			className: "relative",
			children: [n && /* @__PURE__ */ h("span", {
				className: "text-text-tertiary absolute top-1/2 left-2.5 -translate-y-1/2",
				children: n
			}), /* @__PURE__ */ h("input", {
				ref: c,
				id: l,
				readOnly: a,
				"aria-describedby": d || void 0,
				className: V("bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
				...s
			})]
		})]
	});
});
So.displayName = "TextInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function Co({ items: e, className: t }) {
	return /* @__PURE__ */ h("div", {
		className: V("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ g("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ g("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ h("div", { className: V(t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ h("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ g("div", {
				className: V("pb-4", n === e.length - 1 && "pb-0"),
				children: [/* @__PURE__ */ h("p", {
					className: "text-text-primary text-xs",
					children: t.text
				}), /* @__PURE__ */ h("p", {
					className: "text-2xs text-text-tertiary mt-0.5",
					children: t.time
				})]
			})]
		}, t.id))
	});
}
//#endregion
//#region src/components/ui/Tooltip.tsx
var wo = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function To(e, t) {
	return e ? `${e} ${t}` : t;
}
function Eo({ content: e, placement: t = "top", children: r }) {
	let [i, o] = p(!1), s = l();
	return /* @__PURE__ */ g("div", {
		className: "relative inline-flex",
		onMouseEnter: () => o(!0),
		onMouseLeave: () => o(!1),
		onFocus: () => o(!0),
		onBlur: () => o(!1),
		children: [a(r) ? n(r, { "aria-describedby": To(r.props["aria-describedby"], s) }) : r, i && /* @__PURE__ */ h("div", {
			id: s,
			className: V("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", wo[t]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function Do({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a }) {
	return /* @__PURE__ */ g("div", {
		className: V("flex items-center justify-between gap-3", r),
		children: [/* @__PURE__ */ h("div", {
			className: V("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), t && /* @__PURE__ */ h("div", {
			className: V("flex items-center gap-1.5", a),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/UploadDropzone.tsx
function Oo({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, accept: r, multiple: i, disabled: a, onChange: o, className: s }) {
	return /* @__PURE__ */ g("label", {
		className: V("border-border hover:border-border-strong block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", a ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
		children: [
			/* @__PURE__ */ h("input", {
				type: "file",
				accept: r,
				multiple: i,
				disabled: a,
				className: "sr-only",
				onChange: (e) => o?.(e.target.files, e)
			}),
			/* @__PURE__ */ h("div", {
				className: "text-text-tertiary mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-bg-tertiary",
				children: n ?? /* @__PURE__ */ h(se, { className: "h-4.5 w-4.5" })
			}),
			/* @__PURE__ */ h("p", {
				className: "text-text-secondary mb-1 text-xs",
				children: e
			}),
			t && /* @__PURE__ */ h("p", {
				className: "text-2xs text-text-tertiary",
				children: t
			})
		]
	});
}
//#endregion
//#region src/providers/ThemeContext.ts
var ko = r({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function Ao() {
	return s(ko);
}
//#endregion
//#region src/lib/formatDate.ts
var jo = [
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
function Mo(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function No(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function Po(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${jo[e.getMonth()]} ${e.getDate()}`;
	return e.getFullYear() === t.getFullYear() ? o : `${o}, ${e.getFullYear()}`;
}
//#endregion
//#region src/providers/SettingsProvider.tsx
var Fo = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, Io = {
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
}, Lo = "leonardaustin-ui-settings", Ro = new Set(Object.keys(Io)), zo = new Set(Object.keys(Ot)), Bo = new Set(Object.keys(Fo)), Vo = new Set([
	"light",
	"dark",
	"system"
]);
function Ho(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : Math.min(n, Math.max(t, e));
}
function Uo(e) {
	let t = {};
	if (Ro.has(e.accentColor) && (t.accentColor = e.accentColor), Vo.has(e.colorMode) && (t.colorMode = e.colorMode), zo.has(e.preferredDarkTheme) && !Ct(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), zo.has(e.preferredLightTheme) && Ct(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = Ho(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!zo.has(t) || !r || typeof r != "object") continue;
			let e = r, i = Ot[t];
			n[t] = {
				uiFont: Bo.has(e.uiFont) ? e.uiFont : i.uiFont,
				headingFont: Bo.has(e.headingFont) ? e.headingFont : i.headingFont,
				proseFont: Bo.has(e.proseFont) ? e.proseFont : i.proseFont,
				controlFont: Bo.has(e.controlFont) ? e.controlFont : i.controlFont,
				labelFont: Bo.has(e.labelFont) ? e.labelFont : i.labelFont,
				navigationFont: Bo.has(e.navigationFont) ? e.navigationFont : i.navigationFont,
				dataFont: Bo.has(e.dataFont) ? e.dataFont : i.dataFont,
				codeFont: Bo.has(e.codeFont) ? e.codeFont : i.codeFont,
				fontSize: Ho(e.fontSize, 11, 18, i.fontSize),
				borderRadius: Ho(e.borderRadius, 0, 16, i.borderRadius),
				borderWidth: Ho(e.borderWidth, 1, 3, i.borderWidth),
				tracking: Ho(e.tracking, 0, .3, i.tracking),
				lineHeight: Ho(e.lineHeight, 1.2, 2, i.lineHeight),
				density: Ho(e.density, .18, .32, i.density)
			};
		}
		t.themeOverrides = n;
	}
	return t;
}
var Wo = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function Go(e) {
	if (typeof localStorage > "u") return Wo;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...Wo,
			...Uo(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return Wo;
}
function Ko(e, t) {
	let n = Ot[e] ?? Ot.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function qo(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function Jo({ children: e, storageKey: t = Lo }) {
	let [n, r] = p(() => Go(t)), [i, a] = p(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
	c(() => {
		if (typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = (e) => a(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let s = d(() => n.colorMode === "light" ? n.preferredLightTheme : n.colorMode === "dark" || i ? n.preferredDarkTheme : n.preferredLightTheme, [
		n.colorMode,
		n.preferredDarkTheme,
		n.preferredLightTheme,
		i
	]), [l, u] = p(() => Ko(s, n.themeOverrides));
	c(() => {
		u(Ko(s, n.themeOverrides));
	}, [s]);
	let f = o((e) => {
		r((n) => {
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
	c(() => {
		let e = document.documentElement, t = Io[n.accentColor];
		e.style.setProperty("--accent", t.base), e.style.setProperty("--accent-hover", t.hover), e.style.setProperty("--accent-active", t.active), e.style.setProperty("--accent-muted", t.muted), e.style.setProperty("--accent-subtle", t.subtle);
	}, [n.accentColor]), c(() => {
		document.documentElement.classList.toggle("reduced-motion", n.reducedMotion);
	}, [n.reducedMotion]), c(() => {
		let e = document.documentElement, t = l.borderRadius;
		e.style.fontSize = `${l.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", Fo[l.uiFont]), e.style.setProperty("--font-heading", Fo[l.headingFont]), e.style.setProperty("--font-prose", Fo[l.proseFont]), e.style.setProperty("--font-control", Fo[l.controlFont]), e.style.setProperty("--font-label", Fo[l.labelFont]), e.style.setProperty("--font-navigation", Fo[l.navigationFont]), e.style.setProperty("--font-data", Fo[l.dataFont]), e.style.setProperty("--font-code", Fo[l.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${l.borderWidth}px`), e.style.setProperty("--ui-tracking", `${l.tracking}em`), e.style.setProperty("--ui-line-height", String(l.lineHeight)), e.style.setProperty("--ui-density", `${l.density}rem`);
	}, [l]);
	let m = d(() => Ko(s, n.themeOverrides), [s, n.themeOverrides]), g = s in n.themeOverrides, _ = !qo(l, m), v = o(() => {
		f({ themeOverrides: {
			...n.themeOverrides,
			[s]: { ...l }
		} });
	}, [
		f,
		n.themeOverrides,
		s,
		l
	]), y = o(() => {
		let e = { ...n.themeOverrides };
		delete e[s], f({ themeOverrides: e }), u(Ot[s] ?? Ot.dark);
	}, [
		f,
		n.themeOverrides,
		s
	]), b = d(() => ({
		fontSize: l.fontSize,
		setFontSize: (e) => u((t) => ({
			...t,
			fontSize: e
		})),
		accentColor: n.accentColor,
		setAccentColor: (e) => f({ accentColor: e }),
		sidebarCollapsed: n.sidebarCollapsed,
		setSidebarCollapsed: (e) => f({ sidebarCollapsed: e }),
		sidebarWidth: n.sidebarWidth,
		setSidebarWidth: (e) => f({ sidebarWidth: e }),
		reducedMotion: n.reducedMotion,
		setReducedMotion: (e) => f({ reducedMotion: e }),
		colorMode: n.colorMode,
		setColorMode: (e) => f({ colorMode: e }),
		preferredDarkTheme: n.preferredDarkTheme,
		setPreferredDarkTheme: (e) => f({ preferredDarkTheme: e }),
		preferredLightTheme: n.preferredLightTheme,
		setPreferredLightTheme: (e) => f({ preferredLightTheme: e }),
		resolvedTheme: s,
		uiFont: l.uiFont,
		headingFont: l.headingFont,
		proseFont: l.proseFont,
		controlFont: l.controlFont,
		labelFont: l.labelFont,
		navigationFont: l.navigationFont,
		dataFont: l.dataFont,
		codeFont: l.codeFont,
		borderRadius: l.borderRadius,
		borderWidth: l.borderWidth,
		tracking: l.tracking,
		lineHeight: l.lineHeight,
		density: l.density,
		setUiFont: (e) => u((t) => ({
			...t,
			uiFont: e
		})),
		setHeadingFont: (e) => u((t) => ({
			...t,
			headingFont: e
		})),
		setProseFont: (e) => u((t) => ({
			...t,
			proseFont: e
		})),
		setControlFont: (e) => u((t) => ({
			...t,
			controlFont: e
		})),
		setLabelFont: (e) => u((t) => ({
			...t,
			labelFont: e
		})),
		setNavigationFont: (e) => u((t) => ({
			...t,
			navigationFont: e
		})),
		setDataFont: (e) => u((t) => ({
			...t,
			dataFont: e
		})),
		setCodeFont: (e) => u((t) => ({
			...t,
			codeFont: e
		})),
		setBorderRadius: (e) => u((t) => ({
			...t,
			borderRadius: e
		})),
		setBorderWidth: (e) => u((t) => ({
			...t,
			borderWidth: e
		})),
		setTracking: (e) => u((t) => ({
			...t,
			tracking: e
		})),
		setLineHeight: (e) => u((t) => ({
			...t,
			lineHeight: e
		})),
		setDensity: (e) => u((t) => ({
			...t,
			density: e
		})),
		saveThemeCustomization: v,
		resetThemeCustomization: y,
		hasThemeOverrides: g,
		isCustomized: _
	}), [
		n,
		f,
		l,
		s,
		v,
		y,
		g,
		_
	]);
	return /* @__PURE__ */ h(Mt.Provider, {
		value: b,
		children: e
	});
}
//#endregion
//#region src/providers/ThemeProvider.tsx
var Yo = {
	dark: "",
	light: "theme-light",
	monokai: "theme-monokai",
	solarized: "theme-solarized",
	cyberBrutalDark: "theme-cyber-brutal-dark",
	cyberBrutalLight: "theme-cyber-brutal-light",
	hashiTheme: "theme-hashi"
};
function Xo({ children: e }) {
	let { resolvedTheme: t } = s(Mt);
	return c(() => {
		let e = document.documentElement;
		Object.values(Yo).forEach((t) => {
			t && e.classList.remove(t);
		});
		let n = Yo[t];
		n && e.classList.add(n);
	}, [t]), /* @__PURE__ */ h(ko.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
export { In as Alert, En as AppShell, He as AreaChart, Ln as AuthCard, Dn as AuthLayout, Rn as AuthorByline, Lt as Avatar, On as BackLink, Vn as Badge, Ge as BarChart, ut as BottomNav, tn as Breadcrumbs, un as Button, pt as COMMAND_PALETTE_EVENT, Ci as Calendar, Ai as CalendarGrid, ji as Card, kn as Checkbox, Li as CodeInput, jn as ColumnPicker, Ri as Combobox, vt as CommandPalette, mi as DEFAULT_CALENDAR_LABELS, mt as DEFAULT_COMMAND_PALETTE_SHORTCUT, zi as DangerZone, Vi as DatePicker, Gi as DateRangePicker, Zi as DateTimePicker, ta as DetailPanel, da as Dialog, fa as DialogActions, pa as DividerLabel, qe as DonutChart, ma as DropdownMenu, ha as EmptyState, ga as ErrorBoundary, An as FilterButton, _a as FilterDropdown, va as Kbd, ba as LoadingSpinner, xa as MetadataGrid, Sa as MetricCard, bt as MobileDrawer, Da as OAuthButton, Oa as PageHeader, ka as PageSection, Mn as Pagination, ja as PaginationBar, Ma as PasswordInput, Fa as PasswordRequirements, Ia as ProfileHeader, La as ProseContent, Ra as QrCapacityError, so as QrCode, Je as RadarChart, Ye as RadialBarChart, hi as RadioPill, Pn as ResourceTable, co as SearchInput, dn as SectionHeader, lo as Select, pn as SelectDropdown, uo as SettingRow, Mt as SettingsContext, Jo as SettingsProvider, fo as SideSheet, $t as Sidebar, mn as Slider, Xe as SparkLine, ho as SplitPaneLayout, rt as StackedBarChart, vo as StatusDot, yo as StepProgress, _n as THEME_MENU_EVENT, bo as Tabs, So as TextInput, xo as Textarea, ko as ThemeContext, bn as ThemeMenu, hn as ThemePreview, Xo as ThemeProvider, Co as Timeline, Bt as ToastProvider, gn as Toggle, Do as Toolbar, Eo as Tooltip, wn as TopBar, Oo as UploadDropzone, ot as VerticalBarChart, At as accentItems, Y as addDays, Kn as addMinutes, qn as addMonths, V as cn, Tt as darkThemes, Z as dateAtMinutes, Na as defaultPasswordRequirements, Zn as differenceInDays, oo as encodeQrCode, Er as expandAvailabilityRules, kt as fontOptions, No as formatDateLong, Mo as formatDateShort, hr as formatRangeTitle, Po as formatRelative, dr as formatTime, er as formatTimeOfDay, fr as formatTimeRange, tr as fromDateKey, Tr as getActiveResourceIds, sr as getViewRange, ar as getVisibleDays, ct as handleAppShellNavigate, Nr as isAllDayLike, st as isAppShellPathActive, Ct as isLightTheme, Xn as isSameDay, ir as isTimeGridView, br as layoutOverlaps, wt as lightThemes, gt as matchesCommandPaletteShortcut, Pa as meetsPasswordRequirements, X as minutesOfDay, lt as navigateToPath, ht as openCommandPalette, vn as openThemeMenu, $n as parseTime, gr as rangesOverlap, cr as shiftDate, rr as snapDate, nr as snapMinutes, Nn as sortRows, Gn as startOfDay, Yn as startOfMonth, Jn as startOfWeek, Ot as themeDefaults, xt as themeItems, Q as toDateKey, nn as useApplyTheme, jt as useDismiss, ft as useFocusTrap, Nt as useSettings, Ao as useTheme, zt as useToast };
