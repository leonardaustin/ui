import { Component as e, Fragment as t, cloneElement as n, createContext as r, forwardRef as i, isValidElement as a, useCallback as o, useContext as s, useEffect as c, useId as l, useLayoutEffect as u, useMemo as d, useRef as f, useState as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
import { Accessibility as _, AlertTriangle as v, ArrowDown as y, ArrowLeft as b, ArrowUp as x, BookOpen as S, Calendar as C, Check as w, CheckCircle2 as T, ChevronDown as E, ChevronLeft as D, ChevronRight as O, ChevronsUpDown as k, Columns3 as A, Eye as j, EyeOff as M, Inbox as ee, Info as N, Loader2 as te, LogOut as ne, Menu as re, Minus as ie, Monitor as P, Moon as ae, Palette as oe, PanelLeft as se, PanelLeftDashed as ce, Search as le, Settings as ue, Sun as de, UploadCloud as fe, X as F, XCircle as pe, Zap as me } from "lucide-react";
import { createPortal as I } from "react-dom";
//#region src/components/charts/AreaChart.tsx
var L = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
};
function he(e) {
	return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function ge(e) {
	return e === 0 ? 1 : Math.max(Math.abs(e) * .02, 1);
}
function _e({ data: e, height: t = 240, minValue: n, maxValue: r, startAtZero: i = !1, valueFormatter: a, tooltipValueFormatter: o }) {
	let s = l(), c = f(null), [u, d] = p(null), _ = 600 - L.left - L.right, v = t - L.top - L.bottom, y = e[0]?.value ?? 0, b = e[0]?.value ?? 0;
	for (let t of e) t.value < y && (y = t.value), t.value > b && (b = t.value);
	let x = n ?? y, S = r ?? b;
	if (i && n === void 0 && y >= 0 && (x = 0), x === S) {
		if (i || n !== void 0 || r !== void 0) {
			let e = ge(b);
			n === void 0 && (x = i && y >= 0 ? 0 : y >= 0 ? Math.max(0, y - e) : y - e), r === void 0 && (S = b + e);
		}
		x === S && (S = x + 1);
	}
	let C = S - x, w = a ?? he, T = o ?? a ?? ((e) => e.toLocaleString());
	function E(t) {
		return L.left + t / Math.max(e.length - 1, 1) * _;
	}
	function D(e) {
		return L.top + v - (e - x) / C * v;
	}
	let O = e.map((e, t) => `${E(t)},${D(e.value)}`).join(" "), k = [
		`${E(0)},${L.top + v}`,
		...e.map((e, t) => `${E(t)},${D(e.value)}`),
		`${E(e.length - 1)},${L.top + v}`
	].join(" "), A = Math.max(1, Math.floor(e.length / 5)), j = e.filter((t, n) => n % A === 0 || n === e.length - 1), M = e.map((e, t) => t).filter((t) => t % A === 0 || t === e.length - 1);
	function ee(t) {
		let n = c.current;
		if (!n || e.length === 0) return;
		let r = n.getBoundingClientRect(), i = ((t.clientX - r.left) / r.width * 600 - L.left) / _, a = Math.round(i * (e.length - 1)), o = Math.max(0, Math.min(e.length - 1, a));
		d({
			x: E(o),
			y: D(e[o].value),
			index: o
		});
	}
	function N() {
		d(null);
	}
	return /* @__PURE__ */ g("svg", {
		ref: c,
		width: "100%",
		viewBox: `0 0 600 ${t}`,
		onMouseMove: ee,
		onMouseLeave: N,
		className: "select-none",
		children: [
			/* @__PURE__ */ h("defs", { children: /* @__PURE__ */ g("linearGradient", {
				id: s,
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
				x: L.left - 8,
				y: L.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: w(S)
			}),
			/* @__PURE__ */ h("text", {
				x: L.left - 8,
				y: L.top + v,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: w(x)
			}),
			/* @__PURE__ */ h("line", {
				x1: L.left,
				y1: L.top + v,
				x2: L.left + _,
				y2: L.top + v,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ h("polygon", {
				points: k,
				fill: `url(#${s})`
			}),
			/* @__PURE__ */ h("polyline", {
				points: O,
				fill: "none",
				stroke: "var(--accent)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			j.map((e, n) => /* @__PURE__ */ h("text", {
				x: E(M[n]),
				y: t - 4,
				textAnchor: "middle",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: e.date
			}, e.date)),
			u && /* @__PURE__ */ g(m, { children: [
				/* @__PURE__ */ h("line", {
					x1: u.x,
					y1: L.top,
					x2: u.x,
					y2: L.top + v,
					stroke: "var(--border-strong)",
					strokeWidth: 1,
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ h("circle", {
					cx: u.x,
					cy: u.y,
					r: 4,
					fill: "var(--accent)",
					stroke: "var(--bg-secondary)",
					strokeWidth: 2
				}),
				(() => {
					let t = u.y - 38 >= 0 ? u.y - 38 : u.y + 12, n = Math.max(0, Math.min(510, u.x - 90 / 2)), r = n + 90 / 2;
					return /* @__PURE__ */ g(m, { children: [
						/* @__PURE__ */ h("rect", {
							x: n,
							y: t,
							width: 90,
							height: 28,
							rx: 4,
							fill: "var(--bg-tertiary)",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ h("text", {
							x: r,
							y: t + 10,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-secondary)",
							fontSize: 9,
							children: e[u.index].date
						}),
						/* @__PURE__ */ h("text", {
							x: r,
							y: t + 22,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-primary)",
							fontSize: 11,
							fontWeight: 600,
							children: T(e[u.index].value)
						})
					] });
				})()
			] })
		]
	});
}
//#endregion
//#region src/components/charts/BarChart.tsx
var ve = [
	1,
	.85,
	.7,
	.55,
	.45
];
function ye({ data: e, height: t }) {
	let [n, r] = p(null), i = Math.max(...e.map((e) => e.value));
	return /* @__PURE__ */ h("svg", {
		width: "100%",
		viewBox: `0 0 600 ${t ?? e.length * 38 - 10}`,
		className: "select-none",
		children: e.map((e, t) => {
			let a = t * 38, o = i > 0 ? e.value / i * 380 : 0, s = n === t;
			return /* @__PURE__ */ g("g", {
				onMouseEnter: () => r(t),
				onMouseLeave: () => r(null),
				className: "cursor-pointer",
				children: [
					/* @__PURE__ */ h("rect", {
						x: 0,
						y: a,
						width: 600,
						height: 28,
						fill: "transparent"
					}),
					/* @__PURE__ */ h("text", {
						x: 0,
						y: a + 28 / 2,
						dominantBaseline: "central",
						fill: s ? "var(--text-primary)" : "var(--text-secondary)",
						fontSize: 11,
						fontWeight: s ? 600 : 400,
						style: { transition: "all 150ms" },
						children: e.label
					}),
					/* @__PURE__ */ h("rect", {
						x: 160,
						y: a + 3,
						width: 380,
						height: 22,
						fill: "var(--border)",
						rx: 6,
						opacity: .5
					}),
					/* @__PURE__ */ h("rect", {
						x: 160,
						y: a + 3,
						width: o,
						height: 22,
						fill: "var(--accent)",
						rx: 6,
						opacity: s ? 1 : ve[t % ve.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ h("text", {
						x: 600,
						y: a + 28 / 2,
						dominantBaseline: "central",
						textAnchor: "end",
						fill: "var(--text-primary)",
						fontSize: 11,
						fontWeight: 600,
						children: e.value.toLocaleString()
					})
				]
			}, e.label);
		})
	});
}
//#endregion
//#region src/lib/cn.ts
function be(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = be(n);
		e && (t = t ? `${t} ${e}` : e);
	}
	else for (let n in e) e[n] && (t = t ? `${t} ${n}` : n);
	return t;
}
var xe = new Set([
	"block",
	"contents",
	"flex",
	"grid",
	"hidden",
	"inline",
	"inline-block",
	"inline-flex",
	"table"
]), Se = new Set([
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
]), Ce = new Set([
	"text-center",
	"text-left",
	"text-right"
]), we = new Set(["lowercase", "uppercase"]), Te = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), Ee = {
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
}, De = {
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
}, Oe = {
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
}, ke = {
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
}, Ae = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function R(...e) {
	return je(be(e));
}
function je(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = Me(r);
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
			r && r.keys.size > 0 && Ve(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function Me(e) {
	let t = Ne(e), n = t.pop() ?? e, r = n.startsWith("!"), i = Pe(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = Fe(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function Ne(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function Pe(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function Fe(e) {
	let t = Ie(e);
	if (t) return [...Ee[t]];
	let n = Le(e);
	if (n) return [...De[n]];
	let r = Re(e);
	if (r) return [...Oe[r]];
	if (xe.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (Ae.has(e)) return ["border-style"];
	let i = ze(e);
	return i ? [...ke[i]] : e === "rounded" || e.startsWith("rounded-") ? ["border-radius"] : e.startsWith("bg-") ? ["background"] : Se.has(e) ? ["font-size"] : Ce.has(e) ? ["text-align"] : we.has(e) ? ["text-transform"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : Te.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" ? ["flex-direction"] : e === "flex-wrap" ? ["flex-wrap"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-") ? ["gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : [];
}
function Ie(e) {
	return Be(e, Ee);
}
function Le(e) {
	return Be(e, De);
}
function Re(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function ze(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function Be(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function Ve(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/components/charts/DonutChart.tsx
var He = {
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-yellow": "var(--yellow)",
	"text-red": "var(--red)"
};
function Ue(e, t) {
	let n = e.reduce((e, t) => e + t.value, 0), r = 0;
	return e.map((e) => {
		let i = n > 0 ? e.value / n * t : 0, a = t - i, o = r / t * 360 - 90, s = o + i / t * 180, c = n > 0 ? e.value / n * 100 : 0;
		return r += i, {
			segment: e,
			segmentLength: i,
			dashOffset: a,
			rotation: o,
			midAngle: s,
			percentage: c
		};
	});
}
function We({ segments: e, size: t = 180 }) {
	let [n, r] = p(null), i = e.reduce((e, t) => e + t.value, 0), a = (t - 28) / 2, o = Ue(e, 2 * Math.PI * a), s = t + 12, c = s / 2;
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col items-center gap-4",
		children: [/* @__PURE__ */ g("div", {
			className: "relative",
			children: [/* @__PURE__ */ g("svg", {
				width: s,
				height: s,
				viewBox: `0 0 ${s} ${s}`,
				className: "select-none",
				onMouseLeave: () => r(null),
				children: [
					o.map((e, t) => /* @__PURE__ */ h("circle", {
						cx: c,
						cy: c,
						r: a,
						fill: "none",
						stroke: "transparent",
						strokeWidth: 48,
						strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
						strokeLinecap: "butt",
						transform: `rotate(${e.rotation} ${c} ${c})`,
						onMouseEnter: () => r(t),
						className: "cursor-pointer"
					}, `hit-${e.segment.name}`)),
					o.map((e, t) => {
						let r = n === t, i = e.midAngle * Math.PI / 180, o = r ? Math.cos(i) * 6 : 0, s = r ? Math.sin(i) * 6 : 0;
						return /* @__PURE__ */ h("circle", {
							cx: c,
							cy: c,
							r: a,
							fill: "none",
							stroke: He[e.segment.color] ?? "var(--accent)",
							strokeWidth: r ? 32 : 28,
							strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
							strokeLinecap: "butt",
							transform: `translate(${o} ${s}) rotate(${e.rotation} ${c} ${c})`,
							opacity: n !== null && !r ? .5 : 1,
							style: { transition: "all 150ms ease-out" },
							className: "pointer-events-none"
						}, e.segment.name);
					}),
					/* @__PURE__ */ h("text", {
						x: c,
						y: c - 6,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-primary)",
						fontSize: 18,
						fontWeight: 700,
						className: "pointer-events-none",
						children: n === null ? i.toLocaleString() : o[n].segment.value.toLocaleString()
					}),
					/* @__PURE__ */ h("text", {
						x: c,
						y: c + 12,
						textAnchor: "middle",
						dominantBaseline: "central",
						fill: "var(--text-tertiary)",
						fontSize: 10,
						className: "pointer-events-none",
						children: n === null ? "Total" : o[n].segment.name
					})
				]
			}), n !== null && (() => {
				let e = o[n], t = e.midAngle * Math.PI / 180, r = a + 28 / 2 + 20, i = c + Math.cos(t) * r, s = c + Math.sin(t) * r, l = He[e.segment.color] ?? "var(--accent)";
				return /* @__PURE__ */ h("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: {
						left: i,
						top: s,
						transform: "translate(-50%, -50%)"
					},
					children: /* @__PURE__ */ g("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ h("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: l }
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: e.segment.name
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-primary text-xs font-semibold",
								children: e.segment.value.toLocaleString()
							}),
							/* @__PURE__ */ g("span", {
								className: "text-text-tertiary text-2xs",
								children: [
									"(",
									e.percentage.toFixed(1),
									"%)"
								]
							})
						]
					})
				});
			})()]
		}), /* @__PURE__ */ h("div", {
			className: "relative z-0 flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => /* @__PURE__ */ g("button", {
				type: "button",
				onMouseEnter: () => r(t),
				onMouseLeave: () => r(null),
				className: R("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", n !== null && n !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ h("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: He[e.color] ?? "var(--accent)" }
					}),
					/* @__PURE__ */ h("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ h("span", {
						className: "text-text-primary text-xs font-semibold",
						children: e.value.toLocaleString()
					})
				]
			}, e.name))
		})]
	});
}
//#endregion
//#region src/components/charts/RadarChart.tsx
var Ge = 4;
function Ke({ data: e, maxValue: t, size: n = 240 }) {
	let [r, i] = p(null), a = t ?? Math.max(...e.map((e) => e.value)), o = n / 2, s = (n - 60) / 2, c = 2 * Math.PI / e.length;
	function l(e, t) {
		return [o + t * Math.cos(e - Math.PI / 2), o + t * Math.sin(e - Math.PI / 2)];
	}
	let u = e.map((e, t) => {
		let n = e.value / a * s;
		return l(t * c, n);
	}), d = u.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ g("div", {
		className: "relative flex flex-col items-center",
		children: [/* @__PURE__ */ g("svg", {
			width: n,
			height: n,
			viewBox: `0 0 ${n} ${n}`,
			className: "select-none",
			children: [
				Array.from({ length: Ge }, (t, n) => {
					let r = (n + 1) / Ge * s;
					return /* @__PURE__ */ h("polygon", {
						points: e.map((e, t) => l(t * c, r)).map((e) => `${e[0]},${e[1]}`).join(" "),
						fill: "none",
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .5
					}, n);
				}),
				e.map((e, t) => {
					let [n, r] = l(t * c, s);
					return /* @__PURE__ */ h("line", {
						x1: o,
						y1: o,
						x2: n,
						y2: r,
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .3
					}, t);
				}),
				/* @__PURE__ */ h("polygon", {
					points: d,
					fill: "var(--accent)",
					fillOpacity: .15,
					stroke: "var(--accent)",
					strokeWidth: 2,
					strokeLinejoin: "round"
				}),
				u.map((e, t) => {
					let n = r === t;
					return /* @__PURE__ */ h("circle", {
						cx: e[0],
						cy: e[1],
						r: n ? 5 : 3,
						fill: "var(--accent)",
						stroke: "var(--bg-secondary)",
						strokeWidth: 2,
						onMouseEnter: () => i(t),
						onMouseLeave: () => i(null),
						className: "cursor-pointer",
						style: { transition: "r 150ms" }
					}, t);
				}),
				e.map((e, t) => {
					let n = s + 18, [a, o] = l(t * c, n);
					return /* @__PURE__ */ g("g", {
						onMouseEnter: () => i(t),
						onMouseLeave: () => i(null),
						className: "cursor-pointer",
						children: [/* @__PURE__ */ h("rect", {
							x: a - 24,
							y: o - 10,
							width: 48,
							height: 20,
							fill: "transparent"
						}), /* @__PURE__ */ h("text", {
							x: a,
							y: o,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: r === t ? "var(--text-primary)" : "var(--text-tertiary)",
							fontSize: 10,
							fontWeight: r === t ? 600 : 400,
							style: { transition: "all 150ms" },
							children: e.label
						})]
					}, e.label);
				})
			]
		}), r !== null && /* @__PURE__ */ h("div", {
			className: "bg-bg-tertiary border-border pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 shadow-lg",
			children: /* @__PURE__ */ g("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ h("span", { className: "bg-accent h-2 w-2 shrink-0 rounded-full" }),
					/* @__PURE__ */ h("span", {
						className: R("text-text-secondary text-xs whitespace-nowrap"),
						children: e[r].label
					}),
					/* @__PURE__ */ h("span", {
						className: "text-text-primary text-xs font-semibold",
						children: e[r].value
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/charts/RadialBarChart.tsx
var qe = {
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-yellow": "var(--yellow)",
	"text-red": "var(--red)",
	"text-accent": "var(--accent)"
};
function Je({ segments: e, size: t = 200 }) {
	let [n, r] = p(null), [i, a] = p({
		x: 0,
		y: 0
	}), o = f(null), s = t / 2, c = (t - 40) / 2;
	function l(e) {
		let t = o.current?.getBoundingClientRect();
		t && a({
			x: e.clientX - t.left,
			y: e.clientY - t.top
		});
	}
	return /* @__PURE__ */ g("div", {
		className: "flex flex-col items-center gap-4",
		children: [/* @__PURE__ */ g("div", {
			className: "relative",
			ref: o,
			onMouseMove: l,
			children: [/* @__PURE__ */ g("svg", {
				width: t,
				height: t,
				viewBox: `0 0 ${t} ${t}`,
				className: "select-none",
				children: [e.map((e, t) => {
					let i = c - t * 20;
					if (i <= 0) return null;
					let a = 2 * Math.PI * i, o = a * Math.min(e.value / e.max, 1), l = a - o, u = qe[e.color] ?? "var(--accent)", d = n === t;
					return /* @__PURE__ */ g("g", {
						onMouseEnter: () => r(t),
						onMouseLeave: () => r(null),
						className: "cursor-pointer",
						children: [/* @__PURE__ */ h("circle", {
							cx: s,
							cy: s,
							r: i,
							fill: "none",
							stroke: "var(--border)",
							strokeWidth: 14,
							opacity: .3
						}), /* @__PURE__ */ h("circle", {
							cx: s,
							cy: s,
							r: i,
							fill: "none",
							stroke: u,
							strokeWidth: d ? 18 : 14,
							strokeDasharray: `${o} ${l}`,
							strokeLinecap: "round",
							transform: `rotate(-90 ${s} ${s})`,
							opacity: n !== null && !d ? .4 : 1,
							className: "pointer-events-none",
							style: { transition: "all 150ms ease-out" }
						})]
					}, e.label);
				}), (() => {
					let t = e.length - 1, n = c - t * 20 - 14 / 2;
					return /* @__PURE__ */ h("circle", {
						cx: s,
						cy: s,
						r: Math.max(0, n),
						fill: "rgba(0,0,0,0)",
						onMouseEnter: () => r(t),
						onMouseLeave: () => r(null),
						className: "cursor-pointer"
					});
				})()]
			}), n !== null && (() => {
				let t = e[n], r = Math.round(t.value / t.max * 100), a = qe[t.color] ?? "var(--accent)";
				return /* @__PURE__ */ h("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: {
						left: i.x,
						top: i.y,
						transform: "translate(-50%, -120%)"
					},
					children: /* @__PURE__ */ g("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ h("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: a }
							}),
							/* @__PURE__ */ h("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: t.label
							}),
							/* @__PURE__ */ g("span", {
								className: "text-text-primary text-xs font-semibold",
								children: [r, "%"]
							}),
							/* @__PURE__ */ g("span", {
								className: "text-text-tertiary text-2xs",
								children: [
									"(",
									t.value,
									"/",
									t.max,
									")"
								]
							})
						]
					})
				});
			})()]
		}), /* @__PURE__ */ h("div", {
			className: "flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => {
				let i = Math.round(e.value / e.max * 100);
				return /* @__PURE__ */ g("button", {
					type: "button",
					onMouseEnter: () => r(t),
					onMouseLeave: () => r(null),
					className: R("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", n !== null && n !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ h("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: qe[e.color] ?? "var(--accent)" }
						}),
						/* @__PURE__ */ h("span", {
							className: "text-text-secondary text-xs",
							children: e.label
						}),
						/* @__PURE__ */ g("span", {
							className: "text-text-primary text-xs font-semibold",
							children: [i, "%"]
						})
					]
				}, e.label);
			})
		})]
	});
}
//#endregion
//#region src/components/charts/SparkLine.tsx
function Ye({ data: e, width: t = 60, height: n = 20, color: r = "var(--accent)", area: i = !1, className: a }) {
	if (e.length < 2) return null;
	let o = Math.min(...e), s = Math.max(...e) - o || 1, c = e.map((r, i) => ({
		x: i / (e.length - 1) * t,
		y: n - (r - o) / s * (n - 2) - 1
	})), l = c.map(({ x: e, y: t }) => `${e},${t}`).join(" "), u = c.length > 0 ? [
		`${c[0].x},${n}`,
		...c.map(({ x: e, y: t }) => `${e},${t}`),
		`${c[c.length - 1].x},${n}`
	].join(" ") : "";
	return /* @__PURE__ */ g("svg", {
		width: t,
		height: n,
		viewBox: `0 0 ${t} ${n}`,
		className: R("inline-block", a),
		children: [i && /* @__PURE__ */ h("polygon", {
			points: u,
			fill: r,
			opacity: .15
		}), /* @__PURE__ */ h("polyline", {
			points: l,
			fill: "none",
			stroke: r,
			strokeWidth: 1.5,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region src/components/charts/StackedBarChart.tsx
var z = {
	top: 20,
	right: 12,
	bottom: 30,
	left: 48
}, Xe = 1;
function Ze(e) {
	let t = Math.abs(e);
	return t >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : t >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Qe(e) {
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
function $e(e, t) {
	let n = e[t];
	if (typeof n == "number") return Number.isFinite(n) ? n : 0;
	if (typeof n == "string") {
		let e = Number(n);
		return Number.isFinite(e) ? e : 0;
	}
	return 0;
}
function et(e, t) {
	return t.reduce((t, n) => t + $e(e, n.key), 0);
}
function tt({ data: e, segments: t, height: n = 220, ariaLabel: r = "Stacked bar chart", tooltipRows: i }) {
	let a = l().replace(/:/g, ""), [o, s] = p(null), c = 600 - z.left - z.right, u = n - z.top - z.bottom, d = e.reduce((e, n) => Math.max(e, et(n, t)), 1), f = Math.ceil(d / 2), _ = f > 0 && f < d, v = e.length > 60 ? 2 : e.length > 30 ? 3 : 6, y = e.length > 1 ? Math.max(0, (c - e.length * Xe) / Math.max(e.length - 1, 1)) : 0, b = e.length > 1 ? Math.min(v, y) : 0, x = e.length > 0 ? (c - b * Math.max(e.length - 1, 0)) / e.length : 0, S = Math.max(1, Math.ceil(e.length / 6)), C = o === null ? null : e[o];
	function w(e) {
		return z.left + e * (x + b);
	}
	function T(e) {
		return e / d * u;
	}
	return /* @__PURE__ */ g("svg", {
		width: "100%",
		viewBox: `0 0 600 ${n}`,
		className: "select-none",
		role: "img",
		"aria-label": r,
		children: [
			/* @__PURE__ */ h("defs", { children: e.map((e, t) => /* @__PURE__ */ h("clipPath", {
				id: `${a}-bar-${t}`,
				children: /* @__PURE__ */ h("rect", {
					x: w(t),
					y: z.top,
					width: x,
					height: u,
					rx: 4
				})
			}, `${e.date}-${t}`)) }),
			/* @__PURE__ */ h("text", {
				x: z.left - 8,
				y: z.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: Ze(d)
			}),
			_ && /* @__PURE__ */ h("text", {
				x: z.left - 8,
				y: z.top + u / 2,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: Ze(f)
			}),
			/* @__PURE__ */ h("text", {
				x: z.left - 8,
				y: z.top + u,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ h("line", {
				x1: z.left,
				y1: z.top + u,
				x2: z.left + c,
				y2: z.top + u,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ h("line", {
				x1: z.left,
				y1: z.top + u / 2,
				x2: z.left + c,
				y2: z.top + u / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((r, i) => {
				let c = w(i), l = o === i, d = 0;
				return /* @__PURE__ */ g("g", {
					onMouseEnter: () => s(i),
					onMouseLeave: () => s(null),
					children: [
						/* @__PURE__ */ h("rect", {
							x: c,
							y: z.top,
							width: x,
							height: u,
							fill: "transparent"
						}),
						/* @__PURE__ */ h("rect", {
							x: c,
							y: z.top,
							width: x,
							height: u,
							fill: "var(--bg-tertiary)",
							opacity: l ? .8 : .18,
							rx: 4
						}),
						/* @__PURE__ */ h("g", {
							clipPath: `url(#${a}-bar-${i})`,
							children: t.map((e) => {
								let t = $e(r, e.key);
								if (t <= 0) return null;
								let n = T(t), i = z.top + u - d - n;
								return d += n, /* @__PURE__ */ h("rect", {
									x: c,
									y: i,
									width: x,
									height: n,
									fill: e.color,
									opacity: l ? 1 : e.opacity ?? .9
								}, e.key);
							})
						}),
						(i % S === 0 && e.length - 1 - i >= S || i === e.length - 1) && /* @__PURE__ */ h("text", {
							x: c + x / 2,
							y: n - 5,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: Qe(r.date)
						})
					]
				}, `${r.date}-${i}`);
			}),
			C && o !== null && /* @__PURE__ */ h("g", {
				pointerEvents: "none",
				children: (() => {
					let e = w(o) + x / 2, n = i?.(C) ?? t.map((e) => ({
						color: e.color,
						label: e.label,
						value: $e(C, e.key)
					})), r = et(C, t), a = z.top + u - T(r), s = 28 + n.length * 15, c = Math.max(0, Math.min(450, e - 150 / 2)), l = a - s - 8 >= 0 ? a - s - 8 : a + 8, d = c + 10, f = c + 150 - 10;
					return /* @__PURE__ */ g(m, { children: [
						/* @__PURE__ */ h("line", {
							x1: e,
							y1: z.top,
							x2: e,
							y2: z.top + u,
							stroke: "var(--border-strong)",
							strokeWidth: 1,
							strokeDasharray: "3 3"
						}),
						/* @__PURE__ */ h("rect", {
							x: c,
							y: l,
							width: 150,
							height: s,
							rx: 4,
							fill: "var(--bg-tertiary)",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ h("text", {
							x: d,
							y: l + 14,
							fill: "var(--text-primary)",
							fontSize: 10,
							fontWeight: 600,
							children: Qe(C.date)
						}),
						n.map((e, t) => {
							let n = l + 30 + t * 15;
							return /* @__PURE__ */ g("g", { children: [
								e.color && /* @__PURE__ */ h("rect", {
									x: d,
									y: n - 6,
									width: 6,
									height: 6,
									rx: 1,
									fill: e.color
								}),
								/* @__PURE__ */ h("text", {
									x: e.color ? d + 12 : d,
									y: n,
									fill: "var(--text-secondary)",
									fontSize: 10,
									children: e.label
								}),
								/* @__PURE__ */ h("text", {
									x: f,
									y: n,
									textAnchor: "end",
									fill: "var(--text-primary)",
									fontSize: 10,
									fontWeight: 600,
									children: e.value.toLocaleString()
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
var nt = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], B = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
};
function rt(e) {
	return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function it({ data: e, height: t = 180 }) {
	let [n, r] = p(null), i = 600 - B.left - B.right, a = t - B.top - B.bottom, o = Math.max(...e.map((e) => e.value), 1), s = Math.max(4, (i - 6 * (e.length - 1)) / e.length);
	return /* @__PURE__ */ g("svg", {
		width: "100%",
		viewBox: `0 0 600 ${t}`,
		className: "select-none",
		children: [
			/* @__PURE__ */ h("text", {
				x: B.left - 6,
				y: B.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: rt(o)
			}),
			/* @__PURE__ */ h("text", {
				x: B.left - 6,
				y: B.top + a,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ h("line", {
				x1: B.left,
				y1: B.top + a,
				x2: B.left + i,
				y2: B.top + a,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ h("line", {
				x1: B.left,
				y1: B.top + a / 2,
				x2: B.left + i,
				y2: B.top + a / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, i) => {
				let c = B.left + i * (s + 6), l = e.value / o * a, u = B.top + a - l, d = n === i;
				return /* @__PURE__ */ g("g", {
					onMouseEnter: () => r(i),
					onMouseLeave: () => r(null),
					children: [
						/* @__PURE__ */ h("rect", {
							x: c,
							y: B.top,
							width: s,
							height: a,
							fill: "transparent"
						}),
						/* @__PURE__ */ h("rect", {
							x: c,
							y: u,
							width: s,
							height: l,
							fill: e.color ?? "var(--accent)",
							rx: 6,
							opacity: d ? 1 : nt[i % nt.length],
							style: { transition: "all 150ms" }
						}),
						/* @__PURE__ */ h("text", {
							x: c + s / 2,
							y: t - 4,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: e.label
						}),
						d && /* @__PURE__ */ h("text", {
							x: c + s / 2,
							y: u - 6,
							textAnchor: "middle",
							fill: "var(--text-primary)",
							fontSize: 10,
							fontWeight: 600,
							children: e.value.toLocaleString()
						})
					]
				}, e.label);
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/navigation.ts
function at(e, t) {
	if (!t) return !1;
	if (e.end ?? e.path === "/") return t === e.path;
	let n = e.path.endsWith("/") ? e.path : `${e.path}/`;
	return t === e.path || t.startsWith(n);
}
function V(e, t, n, r) {
	let i = e.currentTarget.getAttribute("target");
	e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || i && i !== "_self" || (n && (e.preventDefault(), n(t)), r?.());
}
function ot(e, t) {
	if (t) {
		t(e);
		return;
	}
	typeof window < "u" && window.location.assign(e);
}
//#endregion
//#region src/components/app-shell/BottomNav.tsx
function st({ items: e, currentPath: t, onNavigate: n, className: r }) {
	return e.length === 0 ? null : /* @__PURE__ */ h("nav", {
		className: R("bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ h("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = at(e, t);
				return /* @__PURE__ */ h("li", { children: /* @__PURE__ */ g("a", {
					href: e.path,
					onClick: (t) => V(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					className: R("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
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
var ct = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function H(e, t) {
	let n = f(null);
	c(() => {
		if (!t || !e.current) return;
		let r = e.current.ownerDocument;
		n.current = r.activeElement;
		let i = e.current.querySelectorAll(ct);
		i.length > 0 && i[0].focus();
		let a = (t) => {
			if (t.key !== "Tab" || !e.current) return;
			let n = e.current.querySelectorAll(ct);
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
var lt = "open-command-palette", ut = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function dt(e = lt) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
function ft(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
//#region src/components/app-shell/CommandPalette.tsx
function pt(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function mt({ items: e, eventName: t = lt, shortcut: n = ut, placeholder: r = "Search pages...", emptyLabel: i = "No results found", onNavigate: a, onSelect: s }) {
	let [u, d] = p(!1), [m, _] = p(""), [v, y] = p(0), b = f(null), x = f(null), S = l();
	H(x, u);
	let C = e.filter((e) => pt(e, m)), w = o(() => {
		d(!0), _(""), y(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	c(() => {
		let e = (e) => {
			ft(e, n) && (e.preventDefault(), u ? d(!1) : w());
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
		s?.(e), ot(e.path, a), d(!1);
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
					/* @__PURE__ */ h(le, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
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
					className: R("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === v ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function ht({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ h(m, { children: e.logo }) : /* @__PURE__ */ g("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ h(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ h("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function gt({ open: e, onClose: t, items: n, brand: r, currentPath: i, onNavigate: a, headerActions: o, className: s }) {
	let l = f(null);
	return H(l, e), c(() => {
		if (!e) return;
		document.body.style.overflow = "hidden";
		let n = (e) => {
			e.key === "Escape" && t();
		}, r = l.current?.ownerDocument ?? document;
		return r.addEventListener("keydown", n), () => {
			document.body.style.overflow = "", r.removeEventListener("keydown", n);
		};
	}, [e, t]), e ? /* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-40 md:hidden",
		children: [/* @__PURE__ */ h("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: t
		}), /* @__PURE__ */ g("div", {
			ref: l,
			className: R("bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", s),
			children: [
				/* @__PURE__ */ g("div", {
					className: "border-border flex h-11 items-center justify-between border-b px-4",
					children: [/* @__PURE__ */ h(ht, { brand: r }), /* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ h(F, { className: "h-4 w-4" })
					})]
				}),
				o && /* @__PURE__ */ h("div", {
					className: "border-border border-b px-4 py-2",
					children: o
				}),
				/* @__PURE__ */ h("nav", {
					className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2",
					children: /* @__PURE__ */ h("ul", {
						className: "space-y-0.5",
						children: n.map((e) => {
							let n = at(e, i);
							return /* @__PURE__ */ h("li", { children: /* @__PURE__ */ g("a", {
								href: e.path,
								onClick: (n) => V(n, e.path, a, t),
								"aria-current": n ? "page" : void 0,
								className: R("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
					})
				})
			]
		})]
	}) : null;
}
//#endregion
//#region src/config/theme.ts
var _t = [
	{
		value: "dark",
		label: "Dark",
		icon: ae,
		preview: {
			bg: "#0d0f12",
			fg: "#2a2e38"
		}
	},
	{
		value: "light",
		label: "Light",
		icon: de,
		preview: {
			bg: "#f5f5f5",
			fg: "#d4d4d8"
		}
	},
	{
		value: "monokai",
		label: "Monokai",
		icon: oe,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: P,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: me,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: me,
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
], vt = new Set([
	"light",
	"cyberBrutalLight",
	"hashiTheme"
]);
function U(e) {
	return vt.has(e);
}
var yt = _t.filter((e) => U(e.value)), bt = _t.filter((e) => !U(e.value)), xt = {
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
}, St = {
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
}, W = {
	dark: xt,
	light: xt,
	monokai: xt,
	solarized: xt,
	cyberBrutalDark: St,
	cyberBrutalLight: St,
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
}, Ct = [
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
], wt = [
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
function G(e, t, n, r, i) {
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
var Tt = r({
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
function K() {
	return s(Tt);
}
//#endregion
//#region src/components/ui/Avatar.tsx
var Et = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function Dt(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function Ot(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function kt({ name: e, src: t, size: n = "md", className: r }) {
	return /* @__PURE__ */ h("div", {
		className: R("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", Et[n], r),
		style: { backgroundColor: t ? void 0 : Ot(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ h("img", {
			src: t,
			alt: e,
			className: "h-full w-full rounded-full object-cover"
		}) : Dt(e)
	});
}
//#endregion
//#region src/components/ui/Toast.tsx
var At = r({ toast: () => {} });
function jt() {
	return s(At);
}
function Mt({ children: e }) {
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
	return /* @__PURE__ */ g(At.Provider, {
		value: { toast: i },
		children: [e, /* @__PURE__ */ h("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ h(It, {
				toast: e,
				onDismiss: () => a(e.id)
			}, e.id))
		})]
	});
}
var Nt = {
	success: T,
	error: pe,
	warning: v,
	info: N
}, Pt = {
	success: "bg-green",
	error: "bg-red",
	warning: "bg-yellow",
	info: "bg-blue"
}, Ft = {
	success: "text-green",
	error: "text-red",
	warning: "text-yellow",
	info: "text-blue"
};
function It({ toast: e, onDismiss: t }) {
	let [n, r] = p(100), i = Nt[e.type], a = e.type === "error" || e.type === "warning", o = f(t);
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
			/* @__PURE__ */ h("div", { className: R("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", Pt[e.type]) }),
			/* @__PURE__ */ g("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ h(i, { className: R("h-4 w-4 shrink-0", Ft[e.type]) }),
					/* @__PURE__ */ h("p", {
						className: "text-text-primary flex-1 text-xs",
						children: e.message
					}),
					/* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ h(F, { className: "h-3 w-3" })
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
var Lt = 140, Rt = 400, zt = 48;
function Bt({ item: e, collapsed: t, currentPath: n, onNavigate: r }) {
	let i = at(e, n);
	return /* @__PURE__ */ g("a", {
		href: e.path,
		onClick: (t) => V(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: R("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function Vt({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ h("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ g("div", {
		className: R("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ h(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ h("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ h("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function Ht(e) {
	return e.role ?? e.email;
}
function Ut({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: i, signOutPath: a, signOutLabel: s = "Sign out", onNavigate: c }) {
	let [l, u] = p(!1), [d, _] = p(() => Math.min(n, Math.max(t.length - 1, 0))), [v, y] = p({
		bottom: 0,
		left: 0
	}), b = f(null), x = f(null);
	G(l, o(() => u(!1), []), [x], [b]);
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
		u(!1), i ? i() : a && ot(a, c);
	}
	return S ? /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ g("button", {
		ref: b,
		onClick: T,
		className: R("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? S.name : void 0,
		children: [/* @__PURE__ */ h(kt, {
			name: S.name,
			src: S.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ g("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ h("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: S.name
			}), Ht(S) && /* @__PURE__ */ h("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: Ht(S)
			})]
		}), /* @__PURE__ */ h(k, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && I(/* @__PURE__ */ g("div", {
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
					/* @__PURE__ */ h(kt, {
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
				children: [/* @__PURE__ */ h(ne, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ h("span", { children: s })]
			})] })
		]
	}), document.body)] }) : null;
}
function Wt({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: i }) {
	let [a, s] = p(!1), [c, l] = p({
		bottom: 0,
		left: 0
	}), u = f(null), d = f(null), { accentColor: v, setAccentColor: y, reducedMotion: b, setReducedMotion: x, colorMode: S, setColorMode: C } = K(), { toast: T } = jt(), E = !!(t || r);
	G(a, o(() => s(!1), []), [d], [u]);
	function D() {
		if (!u.current) return;
		let e = u.current.getBoundingClientRect();
		l({
			bottom: window.innerHeight - e.bottom,
			left: e.right + 6
		}), s(!a);
	}
	function O() {
		s(!1), r ? r() : t && ot(t, i);
	}
	return /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ g("button", {
		ref: u,
		onClick: D,
		className: R("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", a ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ h(ue, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ h("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), a && I(/* @__PURE__ */ g("div", {
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
					Icon: ae
				},
				{
					value: "light",
					label: "Light",
					Icon: de
				},
				{
					value: "system",
					label: "System",
					Icon: P
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
				children: wt.map((e) => /* @__PURE__ */ h("button", {
					onClick: () => y(e.value),
					className: R("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", v === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
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
				children: [/* @__PURE__ */ h(ue, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ h("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), document.body)] });
}
function Gt({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: i, onSignOut: a, signOutPath: s, signOutLabel: c, settingsPath: l, settingsLabel: u, onOpenSettings: d, currentPath: m, onNavigate: _, headerActions: v, className: y }) {
	let { sidebarCollapsed: b, sidebarWidth: x, setSidebarWidth: S } = K(), [C, w] = p(/* @__PURE__ */ new Set()), T = f(null), D = f(!1), O = o((e) => {
		if (b) return;
		e.preventDefault(), D.current = !0, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!D.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			S(Math.max(Lt, Math.min(n, Rt)));
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
		className: R("bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", "transition-[width] duration-[200ms] ease-out", "border-border", y),
		style: { width: b ? zt : x },
		children: [
			!b && /* @__PURE__ */ h("div", {
				onMouseDown: O,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ h("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ h(Vt, {
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
							}), /* @__PURE__ */ h(E, { className: R("h-3 w-3 shrink-0 transition-transform", n && "-rotate-90") })]
						}), (!n || b) && /* @__PURE__ */ h("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ h("li", { children: /* @__PURE__ */ h(Bt, {
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
				children: [/* @__PURE__ */ h(Wt, {
					collapsed: b,
					settingsPath: l,
					settingsLabel: u,
					onOpenSettings: d,
					onNavigate: _
				}), n.length > 0 && /* @__PURE__ */ h("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ h(Ut, {
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
function Kt(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function qt({ homeLabel: e = "Dashboard", labels: t = {}, parents: n = {}, currentPath: r = "/", onNavigate: i, className: a }) {
	let o = r.split("?")[0].split("/").filter(Boolean), s = [{
		label: e,
		path: "/"
	}, ...o.map((e, r) => {
		let i = o[r - 1];
		return {
			label: t[e] || n[i] || Kt(e),
			path: "/" + o.slice(0, r + 1).join("/")
		};
	})];
	return /* @__PURE__ */ h("nav", {
		"aria-label": "Breadcrumb",
		className: R("font-navigation flex items-center gap-1 text-xs", a),
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
						onClick: (t) => V(t, e.path, i),
						className: R("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
						children: e.label
					})]
				}, e.path);
			})
		})
	});
}
//#endregion
//#region src/hooks/useApplyTheme.ts
function Jt() {
	let { setPreferredDarkTheme: e, setPreferredLightTheme: t, setColorMode: n } = K();
	return o((r) => {
		U(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/components/ui/Button.tsx
var Yt = {
	primary: "bg-accent text-text-on-accent hover:bg-accent-hover active:bg-accent-active",
	secondary: "bg-bg-secondary text-text-primary border border-border hover:bg-bg-hover hover:border-border-strong",
	danger: "bg-red-muted text-red border border-transparent hover:bg-red/20",
	ghost: "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
	icon: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover"
}, Xt = {
	xs: "h-6 px-2 text-2xs gap-1",
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, Zt = {
	xs: "h-6 w-6",
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, Qt = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, $t = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, en = {
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
}, q = i(({ variant: e = "secondary", size: t = "md", loading: n, icon: r, hideLabel: i, className: a, children: o, disabled: s, ...c }, l) => {
	let u = e === "icon", d = i === !0 ? "sm" : i === !1 ? void 0 : i;
	return /* @__PURE__ */ g("button", {
		ref: l,
		disabled: s || n,
		className: R("inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", Yt[e], u ? Zt[t] : Xt[t], d && !u && en[d]?.[t], a),
		...c,
		children: [
			n && /* @__PURE__ */ h(te, { className: "h-3.5 w-3.5 animate-spin" }),
			r && !n && /* @__PURE__ */ h(r, { className: Qt[t] }),
			o && (d ? /* @__PURE__ */ h("span", {
				className: $t[d],
				children: o
			}) : o)
		]
	});
});
q.displayName = "Button";
//#endregion
//#region src/components/ui/SectionHeader.tsx
function J({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ h(t, {
		className: R("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
//#endregion
//#region src/hooks/useDropUp.ts
function tn(e, t, n) {
	let [r, i] = p(!1);
	return u(() => {
		if (!e || !n.current || !t.current) return;
		let r = t.current.getBoundingClientRect(), a = n.current.getBoundingClientRect();
		i(window.innerHeight - r.bottom < a.height + 8);
	}, [e]), r;
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function Y({ options: e, value: t, onChange: n, label: r, placeholder: i = "Select...", className: a, size: s = "md" }) {
	let [c, u] = p(!1), [d, m] = p(-1), _ = f(null), v = f(null), y = tn(c, _, v), b = l(), x = `${b}-listbox`, S = e.find((e) => e.value === t);
	G(c, o(() => u(!1), []), [_]);
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
		className: R("flex flex-col gap-1.5", a),
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
					className: R("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", s === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7"),
					children: S ? S.label : /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: i
					})
				}),
				/* @__PURE__ */ h(E, { className: R("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", s === "sm" ? "right-1.5" : "right-2", c && "rotate-180") }),
				c && /* @__PURE__ */ h("div", {
					ref: v,
					className: R("bg-bg-tertiary border-border-strong animate-scale-in absolute right-0 left-0 z-[100] overflow-hidden rounded-md border shadow-lg", y ? "bottom-full mb-1" : "top-full mt-1"),
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
							className: R("font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs", "transition-colors duration-[100ms]", r === d ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function X({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, showValue: s, className: c }) {
	let l = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ g("div", {
		className: R("flex flex-col gap-1.5", c),
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
function nn({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ g("button", {
		type: "button",
		onClick: i,
		className: R("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
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
function rn({ checked: e, onChange: t, disabled: n, label: r, className: i }) {
	return /* @__PURE__ */ g("label", {
		className: R("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", i),
		style: { gap: 10 },
		children: [/* @__PURE__ */ h("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			disabled: n,
			onClick: () => t(!e),
			className: R("relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary border-border", !n && "cursor-pointer"),
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
var an = "open-theme-menu";
function on(e = an) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
//#endregion
//#region src/components/app-shell/ThemeMenu.tsx
var sn = [
	{
		value: "dark",
		label: "Dark",
		Icon: ae
	},
	{
		value: "light",
		label: "Light",
		Icon: de
	},
	{
		value: "system",
		label: "System",
		Icon: P
	}
];
function cn({ className: e, respondToOpenEvent: t = !0 }) {
	let [n, r] = p(!1), [i, a] = p(!1), [s, l] = p({
		top: 0,
		right: 0
	}), u = f(null), d = f(null), _ = K(), v = Jt(), { toast: y } = jt(), b = o(() => {
		r(!1), a(!1);
	}, []);
	G(n, b, [d], [u], { outsideClick: !i });
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
		return document.addEventListener(an, e), () => document.removeEventListener(an, e);
	}, [t, x]), c(() => {
		if (n) return window.addEventListener("resize", x), window.addEventListener("scroll", x, !0), () => {
			window.removeEventListener("resize", x), window.removeEventListener("scroll", x, !0);
		};
	}, [n, x]);
	let { colorMode: C, setColorMode: w, preferredDarkTheme: T, preferredLightTheme: E, accentColor: D, setAccentColor: O, fontSize: k, setFontSize: A, uiFont: j, setUiFont: M, headingFont: ee, setHeadingFont: N, proseFont: te, setProseFont: ne, codeFont: re, setCodeFont: ie, borderRadius: P, setBorderRadius: ae, borderWidth: se, setBorderWidth: ce, tracking: le, setTracking: ue, lineHeight: de, setLineHeight: fe, density: F, setDensity: pe, reducedMotion: me, setReducedMotion: L, saveThemeCustomization: he, resetThemeCustomization: ge, hasThemeOverrides: _e, isCustomized: ve, resolvedTheme: ye } = _;
	return /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("button", {
		ref: u,
		onClick: S,
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": n,
		title: "Theme",
		className: R("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", n ? "text-accent bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", e),
		children: /* @__PURE__ */ h(oe, { className: "h-4 w-4" })
	}), n && I(/* @__PURE__ */ h("div", {
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
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(J, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ h("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: sn.map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ g("button", {
						onClick: () => w(e),
						className: R("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", C === e ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ h(n, { className: "h-3.5 w-3.5" }), t]
					}, e))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(J, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ h("div", {
					className: "grid grid-cols-2 gap-2",
					children: bt.map((e) => /* @__PURE__ */ h(nn, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: T === e.value,
						onClick: () => v(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(J, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ h("div", {
					className: "grid grid-cols-2 gap-2",
					children: yt.map((e) => /* @__PURE__ */ h(nn, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: E === e.value,
						onClick: () => v(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(J, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ h("div", {
					className: "flex flex-wrap gap-1.5",
					children: wt.map((e) => /* @__PURE__ */ h("button", {
						onClick: () => O(e.value),
						className: R("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", D === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: e.color,
							...D === e.value ? { "--utility-ring-color": e.color } : {}
						},
						title: e.value.charAt(0).toUpperCase() + e.value.slice(1),
						"aria-label": e.value
					}, e.value))
				})] }),
				/* @__PURE__ */ g("div", { children: [/* @__PURE__ */ h(J, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ g("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ h(Y, {
							label: "UI / Body",
							size: "sm",
							options: Ct,
							value: j,
							onChange: (e) => M(e)
						}),
						/* @__PURE__ */ h(Y, {
							label: "Headings",
							size: "sm",
							options: Ct,
							value: ee,
							onChange: (e) => N(e)
						}),
						/* @__PURE__ */ h(Y, {
							label: "Prose",
							size: "sm",
							options: Ct,
							value: te,
							onChange: (e) => ne(e)
						}),
						/* @__PURE__ */ h(Y, {
							label: "Code",
							size: "sm",
							options: Ct,
							value: re,
							onChange: (e) => ie(e)
						})
					]
				})] }),
				/* @__PURE__ */ g("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ h(X, {
							label: "Font size",
							min: 11,
							max: 18,
							value: k,
							onChange: A,
							showValue: !0
						}),
						/* @__PURE__ */ h(X, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: P,
							onChange: ae,
							showValue: !0
						}),
						/* @__PURE__ */ h(X, {
							label: "Border width",
							min: 1,
							max: 3,
							value: se,
							onChange: ce,
							showValue: !0
						}),
						/* @__PURE__ */ h(X, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: le,
							onChange: ue,
							showValue: !0
						}),
						/* @__PURE__ */ h(X, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: de,
							onChange: fe,
							showValue: !0
						}),
						/* @__PURE__ */ h(X, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: F,
							onChange: pe,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ h(rn, {
					label: "Reduced motion",
					checked: me,
					onChange: L
				}),
				/* @__PURE__ */ g("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ h(q, {
						variant: "primary",
						size: "sm",
						disabled: !ve,
						onClick: () => {
							he(), y("success", `Saved customization for ${_t.find((e) => e.value === ye)?.label ?? ye}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ h(q, {
						variant: "secondary",
						size: "sm",
						disabled: !_e && !ve,
						onClick: () => {
							ge(), y("info", "Reset to theme defaults");
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
var ln = [
	"dark",
	"light",
	"system"
], un = {
	dark: ae,
	light: de,
	system: P
}, dn = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function fn({ onMobileMenuToggle: e, breadcrumbs: t, showCommandTrigger: n = !0, commandTriggerLabel: r = "Search", commandShortcut: i = ut, currentPath: a, onNavigate: o, onCommandTrigger: s, actions: c }) {
	let { sidebarCollapsed: l, setSidebarCollapsed: u, colorMode: d, setColorMode: f } = K();
	function p() {
		f(ln[(ln.indexOf(d) + 1) % ln.length]);
	}
	let _ = un[d];
	return /* @__PURE__ */ g("header", {
		className: "border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3",
		style: { height: "var(--topbar-height)" },
		children: [/* @__PURE__ */ g("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ h("button", {
					onClick: e,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden",
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ h(re, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ h("button", {
					onClick: () => u(!l),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": l ? "Expand sidebar" : "Collapse sidebar",
					children: h(l ? ce : se, { className: "h-4 w-4" })
				}),
				t !== !1 && /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h("div", { className: "bg-border hidden h-4 w-px md:block" }), /* @__PURE__ */ h(qt, {
					...t,
					currentPath: a,
					onNavigate: o
				})] })
			]
		}), /* @__PURE__ */ g("div", {
			className: "flex items-center gap-1",
			children: [
				c,
				n && /* @__PURE__ */ g("button", {
					onClick: s ?? (() => dt()),
					className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
					children: [
						/* @__PURE__ */ h(le, { className: "h-3 w-3" }),
						/* @__PURE__ */ h("span", {
							className: "text-2xs",
							children: r
						}),
						/* @__PURE__ */ h("kbd", {
							className: "text-2xs font-mono opacity-60",
							children: i.label
						})
					]
				}),
				/* @__PURE__ */ h("button", {
					onClick: p,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded",
					"aria-label": `Color mode: ${dn[d]}. Click to cycle.`,
					title: dn[d],
					children: /* @__PURE__ */ h(_, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ h(cn, {})
			]
		})]
	});
}
//#endregion
//#region src/components/app-shell/AppShell.tsx
function pn({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: l, signOutPath: u, signOutLabel: f, settingsPath: m, settingsLabel: _, onOpenSettings: v, showCommandPalette: y = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, sidebarHeaderActions: C, topBarActions: w, currentPath: T, onNavigate: E, mainClassName: D, className: O }) {
	let [k, A] = p(!1), j = d(() => t.flatMap((e) => e.items), [t]), M = a ?? j;
	return /* @__PURE__ */ g("div", {
		className: R("bg-bg-primary flex h-svh overflow-hidden", O),
		children: [
			/* @__PURE__ */ h("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ h(Gt, {
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
				currentPath: T,
				onNavigate: E,
				headerActions: C
			}),
			/* @__PURE__ */ g("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ h(fn, {
					onMobileMenuToggle: () => A(!0),
					breadcrumbs: o,
					showCommandTrigger: y && b,
					commandTriggerLabel: x,
					commandShortcut: S,
					actions: w,
					currentPath: T,
					onNavigate: E
				}), /* @__PURE__ */ h("main", {
					id: "main-content",
					className: R("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", D),
					children: e
				})]
			}),
			/* @__PURE__ */ h(st, {
				items: i,
				currentPath: T,
				onNavigate: E
			}),
			/* @__PURE__ */ h(gt, {
				open: k,
				onClose: () => A(!1),
				items: j,
				brand: n,
				currentPath: T,
				onNavigate: E,
				headerActions: C
			}),
			y && M.length > 0 && /* @__PURE__ */ h(mt, {
				items: M,
				shortcut: S,
				onNavigate: E
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function mn({ children: e, className: t }) {
	return /* @__PURE__ */ g("div", {
		className: R("bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ h("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function hn({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ g("a", {
		href: e,
		onClick: (t) => V(t, e, n),
		className: R("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary transition-colors duration-[100ms]", r),
		children: [/* @__PURE__ */ h(b, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/Checkbox.tsx
function gn({ id: e, checked: t, indeterminate: n, onChange: r, label: i, ariaLabel: a, disabled: o, className: s }) {
	let c = t || n, u = l(), d = e ?? u;
	return /* @__PURE__ */ g("div", {
		className: R("flex w-fit items-center gap-2.5", o ? "cursor-not-allowed opacity-40" : "cursor-pointer", s),
		children: [/* @__PURE__ */ h("button", {
			id: d,
			type: "button",
			role: "checkbox",
			"aria-checked": n ? "mixed" : t,
			"aria-label": a,
			disabled: o,
			onClick: () => r(!t),
			className: R("flex h-4 w-4 shrink-0 items-center justify-center rounded border", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", c ? "bg-accent border-accent" : "bg-bg-secondary border-border", !o && "cursor-pointer"),
			children: n ? /* @__PURE__ */ h(ie, { className: "text-text-on-accent h-3 w-3" }) : t ? /* @__PURE__ */ h(w, { className: "text-text-on-accent h-3 w-3" }) : null
		}), i && /* @__PURE__ */ h("label", {
			htmlFor: d,
			className: R("text-text-primary text-xs", o ? "cursor-not-allowed" : "cursor-pointer"),
			children: i
		})]
	});
}
//#endregion
//#region src/components/ui/FilterButton.tsx
var _n = i(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ g("button", {
		ref: i,
		className: R("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ h(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ h("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function vn({ columns: e, hidden: t, onToggle: n }) {
	let [r, i] = p(!1), a = f(null);
	return G(r, o(() => i(!1), []), [a]), /* @__PURE__ */ g("div", {
		className: "relative",
		ref: a,
		children: [/* @__PURE__ */ h(_n, {
			icon: A,
			onClick: () => i(!r),
			children: "Columns"
		}), r && /* @__PURE__ */ g("div", {
			className: "bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 w-48 rounded-md border py-1 shadow-lg",
			children: [/* @__PURE__ */ h("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Toggle columns"
			}), e.map((e) => /* @__PURE__ */ g("button", {
				onClick: () => n(e.key),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ h(gn, {
					checked: !t.has(e.key),
					onChange: () => n(e.key)
				}), /* @__PURE__ */ h("span", { children: e.header })]
			}, e.key))]
		})]
	});
}
//#endregion
//#region src/components/tables/Pagination.tsx
function yn({ page: e, totalPages: t, onPageChange: n }) {
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
				className: R("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function bn(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
function xn({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: i = "No data", sortKey: a, sortDir: o, onSortChange: s }) {
	let c = s !== void 0, [l, u] = p(null), [f, m] = p("asc"), _ = c ? a ?? null : l, v = c ? o ?? "asc" : f, b = d(() => c ? e : bn(e, t, _, v), [
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
					className: R("text-2xs text-text-tertiary font-label h-7 px-3 text-left font-semibold tracking-wider uppercase", e.sortable && "hover:text-text-secondary cursor-pointer select-none"),
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
				className: R("border-border h-8 border-b last:border-b-0", "hover:bg-bg-hover", r && "cursor-pointer"),
				onClick: r ? () => r(e) : void 0,
				children: t.map((t) => /* @__PURE__ */ h("td", {
					className: R("text-text-primary px-3 whitespace-nowrap", t.cellClassName),
					onClick: t.interactive && r ? (e) => e.stopPropagation() : void 0,
					children: t.render(e)
				}, t.key))
			}, n(e))) })]
		})
	});
}
//#endregion
//#region src/components/ui/Alert.tsx
var Sn = {
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
		icon: pe,
		iconColor: "text-red"
	},
	info: {
		bg: "bg-blue-muted",
		border: "border-blue/30",
		icon: N,
		iconColor: "text-blue"
	}
};
function Cn({ type: e, title: t, children: n, dismissible: r, className: i }) {
	let [a, o] = p(!1);
	if (a) return null;
	let s = Sn[e], c = s.icon;
	return /* @__PURE__ */ g("div", {
		className: R("flex gap-2.5 rounded-md border p-3", s.bg, s.border, i),
		children: [
			/* @__PURE__ */ h(c, { className: R("mt-0.5 h-4 w-4 shrink-0", s.iconColor) }),
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
				children: /* @__PURE__ */ h(F, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/components/ui/AuthCard.tsx
function wn({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ h("div", {
		className: R("relative z-10 w-full max-w-sm", a),
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
function Tn({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ g("div", {
		className: R("flex items-center gap-2", i),
		children: [/* @__PURE__ */ h(kt, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ g("div", { children: [/* @__PURE__ */ g("p", {
			className: R("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ h("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var En = {
	green: "bg-green-muted text-green",
	yellow: "bg-yellow-muted text-yellow",
	red: "bg-red-muted text-red",
	blue: "bg-blue-muted text-blue",
	purple: "bg-purple-muted text-purple",
	gray: "bg-bg-hover text-text-secondary"
}, Dn = {
	green: "bg-green",
	yellow: "bg-yellow",
	red: "bg-red",
	blue: "bg-blue",
	purple: "bg-purple",
	gray: "bg-text-tertiary"
};
function On({ color: e = "gray", dot: t, children: n, className: r }) {
	return /* @__PURE__ */ g("span", {
		className: R("font-label text-2xs inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-medium", En[e], r),
		children: [t && /* @__PURE__ */ h("span", { className: R("h-1.5 w-1.5 rounded-full", Dn[e]) }), n]
	});
}
//#endregion
//#region src/components/ui/CalendarGrid.tsx
var kn = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
], An = [
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
function jn(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Mn(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function Nn(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function Pn(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function Fn({ year: e, month: t, selected: n, rangeStart: r, rangeEnd: i, hoverDate: a, onSelect: o, onMonthChange: s, onHover: c, minDate: l, maxDate: u }) {
	let d = Nn(e, t), m = Pn(e, t), _ = /* @__PURE__ */ new Date(), v = f(null), [y, b] = p(null);
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
						An[t],
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
			children: [kn.map((e) => /* @__PURE__ */ h("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), E.map((s, d) => {
				if (s === null) return /* @__PURE__ */ h("div", { className: "h-8" }, `empty-${d}`);
				let f = new Date(e, t, s), p = jn(f, _), m = n ? jn(f, n) : !1, g = r ? jn(f, r) : !1, v = i ? jn(f, i) : !1, y = Mn(f, r ?? null, i ?? a ?? null), b = l && f < l || u && f > u;
				return /* @__PURE__ */ h("button", {
					type: "button",
					"data-day": s,
					disabled: !!b,
					tabIndex: s === S ? 0 : -1,
					"aria-label": `${An[t]} ${s}, ${e}`,
					"aria-current": p ? "date" : void 0,
					onClick: () => o(f),
					onKeyDown: (e) => C(e, s),
					onMouseEnter: () => c?.(f),
					onMouseLeave: () => c?.(null),
					className: R("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", b && "cursor-not-allowed opacity-30", !b && !m && !g && !v && !y && "hover:bg-bg-hover text-text-primary", p && !m && !g && !v && "text-accent font-semibold", (m || g || v) && "bg-accent text-text-on-accent font-semibold", y && !m && !g && !v && "bg-accent-muted text-accent"),
					children: s
				}, s);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function In({ children: e, className: t, header: n, footer: r }) {
	return /* @__PURE__ */ g("div", {
		className: R("bg-bg-secondary border-border overflow-hidden rounded-md border", t),
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
//#region src/components/ui/Combobox.tsx
function Ln({ options: e, value: t, onChange: n, placeholder: r = "Select...", label: i, className: a }) {
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
	G(s, o(() => c(!1), []), [v]);
	function D() {
		c(!0), d(""), _(0), setTimeout(() => y.current?.focus(), 0);
	}
	return /* @__PURE__ */ g("div", {
		className: R("flex flex-col gap-1.5", a),
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
					className: R("font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
					children: x ? x.label : /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ h(E, { className: R("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", s && "rotate-180") }),
				s && /* @__PURE__ */ g("div", {
					className: "bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-md border shadow-lg",
					children: [/* @__PURE__ */ h("div", {
						className: "border-border border-b p-1.5",
						children: /* @__PURE__ */ g("div", {
							className: "relative",
							children: [/* @__PURE__ */ h(le, { className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2" }), /* @__PURE__ */ h("input", {
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
							className: R("font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs", "transition-colors duration-[100ms]", r === m ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
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
function Rn({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ g("div", {
		className: R("border-border mt-8 border-t pt-6", r),
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
function zn(e) {
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
function Bn({ label: e, value: t, onChange: n, placeholder: r = "Select date...", format: i = zn }) {
	let [a, s] = p(!1), c = f(null), l = f(null), u = tn(a, c, l), d = /* @__PURE__ */ new Date(), [m, _] = p(t?.getFullYear() ?? d.getFullYear()), [v, y] = p(t?.getMonth() ?? d.getMonth());
	G(a, o(() => s(!1), []), [c]);
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
					className: R("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
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
					className: R("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", u ? "bottom-full mb-1" : "top-full mt-1"),
					children: /* @__PURE__ */ h(Fn, {
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
var Vn = [
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
function Hn(e) {
	return `${Vn[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function Un(e) {
	return e.start && e.end ? `${Hn(e.start)} – ${Hn(e.end)}` : e.start ? Hn(e.start) : "";
}
function Wn({ label: e, value: t, onChange: n, placeholder: r = "Select date range..." }) {
	let [i, a] = p(!1), s = f(null), c = f(null), l = tn(i, s, c), u = /* @__PURE__ */ new Date(), [d, m] = p(t.start?.getFullYear() ?? u.getFullYear()), [_, v] = p(t.start?.getMonth() ?? u.getMonth()), [y, b] = p(null), [x, S] = p("start"), [w, T] = p(t.start), [E, D] = p(t.end);
	G(i, o(() => a(!1), []), [s]);
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
	function ee() {
		_ === 11 ? (m(d + 1), v(0)) : v(_ + 1);
	}
	let N = t.start || t.end ? Un(t) : "";
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
					className: R("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: N || /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ h(C, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				i && /* @__PURE__ */ g("div", {
					ref: c,
					role: "dialog",
					"aria-label": "Choose date range",
					className: R("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", l ? "bottom-full mb-1" : "top-full mt-1"),
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
								onClick: ee,
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
						children: [/* @__PURE__ */ h(Fn, {
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
						}), /* @__PURE__ */ h(Fn, {
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
var Gn = [
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
function Kn(e) {
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
function qn(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function Jn(e) {
	let t = Gn[e.getMonth()], n = e.getDate(), r = e.getFullYear(), { hour12: i, period: a } = Kn(e.getHours());
	return `${t} ${n}, ${r} ${i}:${String(e.getMinutes()).padStart(2, "0")} ${a}`;
}
function Yn(e) {
	return String(e).padStart(2, "0");
}
function Xn({ label: e, value: t, onChange: n, placeholder: r = "Select date & time..." }) {
	let [i, a] = p(!1), s = f(null), c = f(null), l = tn(i, s, c), u = /* @__PURE__ */ new Date(), d = t ? Kn(t.getHours()) : {
		hour12: 12,
		period: "PM"
	}, [m, _] = p(t?.getFullYear() ?? u.getFullYear()), [v, y] = p(t?.getMonth() ?? u.getMonth()), [b, x] = p(String(d.hour12)), [S, w] = p(t ? Yn(t.getMinutes()) : "00"), [T, E] = p(d.period), [D, O] = p(t);
	G(i, o(() => a(!1), []), [s]);
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
		let e = Math.max(1, Math.min(12, parseInt(b, 10) || 12)), t = Math.max(0, Math.min(59, parseInt(S, 10) || 0)), r = qn(e, T);
		n(new Date(D.getFullYear(), D.getMonth(), D.getDate(), r, t)), a(!1);
	}
	function M() {
		if (!i && t) {
			_(t.getFullYear()), y(t.getMonth()), O(t);
			let e = Kn(t.getHours());
			x(String(e.hour12)), E(e.period), w(Yn(t.getMinutes()));
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
					className: R("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: t ? Jn(t) : /* @__PURE__ */ h("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ h(C, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				i && /* @__PURE__ */ g("div", {
					ref: c,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: R("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", l ? "bottom-full mb-1" : "top-full mt-1"),
					children: [/* @__PURE__ */ h(Fn, {
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
									className: R("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", T === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
									children: "AM"
								}), /* @__PURE__ */ h("button", {
									type: "button",
									onClick: () => E("PM"),
									"aria-pressed": T === "PM",
									className: R("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", T === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
									children: "PM"
								})]
							}),
							/* @__PURE__ */ h("button", {
								type: "button",
								onClick: j,
								disabled: !D,
								className: R("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", D ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
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
var Zn = 360, Qn = 260, $n = 700;
function er({ open: e, onClose: t, title: n, children: r, className: i, resizable: a = !0, defaultWidth: s = Zn, minWidth: l = Qn, maxWidth: u = $n }) {
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
		className: R("border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l", "transition-[width] duration-[200ms] ease-out", i),
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
						children: /* @__PURE__ */ h(F, { className: "h-3.5 w-3.5" })
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
//#endregion
//#region src/components/ui/Dialog.tsx
function tr({ open: e, onClose: t, title: n, children: r, footer: i, className: a }) {
	let o = f(null), s = l();
	return H(o, e), c(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = "";
		};
	}, [e, t]), e ? I(/* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]",
		children: [/* @__PURE__ */ h("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: t
		}), /* @__PURE__ */ g("div", {
			ref: o,
			className: R("relative z-50 mx-4 mb-8 w-full max-w-[400px] p-6", "bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": n ? s : void 0,
			"aria-label": n ? void 0 : "Dialog",
			children: [
				/* @__PURE__ */ g("div", {
					className: "mb-4 flex items-center justify-between",
					children: [n && /* @__PURE__ */ h("h3", {
						id: s,
						className: "text-text-primary text-sm font-semibold",
						children: n
					}), /* @__PURE__ */ h("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]",
						"aria-label": "Close",
						children: /* @__PURE__ */ h(F, { className: "h-4 w-4" })
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
function nr({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a }) {
	return /* @__PURE__ */ g("div", {
		className: R("flex justify-end gap-2", a),
		children: [/* @__PURE__ */ h(q, {
			variant: "ghost",
			size: "sm",
			onClick: e,
			children: n
		}), /* @__PURE__ */ h(q, {
			variant: i,
			size: "sm",
			onClick: t,
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/DividerLabel.tsx
function rr({ children: e, className: t }) {
	return /* @__PURE__ */ g("div", {
		className: R("my-6 flex items-center gap-3", t),
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
function ir({ trigger: e, items: t, align: n = "right" }) {
	let [r, i] = p(!1), [a, s] = p({
		top: 0,
		left: 0,
		triggerWidth: 0
	}), [l, u] = p(-1), _ = f(null), v = f(null), y = d(() => t.filter((e) => !e.divider), [t]), b = o(() => {
		i(!1), u(-1);
	}, []);
	G(r, b, [v], [_]), c(() => {
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
	}), r && I(/* @__PURE__ */ h("div", {
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
				className: R("flex h-7 w-full cursor-pointer items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover"),
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
function ar({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ g("div", {
		className: R("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ h("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ h(ee, { className: "h-5 w-5" })
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
var or = class extends e {
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
				/* @__PURE__ */ h(q, {
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
function sr({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ h(ir, {
		align: r,
		trigger: /* @__PURE__ */ h(_n, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function cr({ children: e, className: t }) {
	return /* @__PURE__ */ h("kbd", {
		className: R("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var lr = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function ur({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ h("div", {
		className: R("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ h(te, { className: R("text-accent animate-spin", lr[t]) })
	});
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
function dr({ items: e, labelWidth: n = "100px", className: r }) {
	return /* @__PURE__ */ h("div", {
		className: R("gap-x-3 gap-y-2 text-xs", r),
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
function fr({ label: e, value: t, sub: n, trend: r, bar: i, icon: a, iconColor: o, className: s }) {
	let c = r?.tone === "positive" ? "text-green" : r?.tone === "negative" ? "text-red" : "text-text-tertiary";
	return /* @__PURE__ */ g("div", {
		className: R("bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3", s),
		children: [
			a && /* @__PURE__ */ h(a, { className: R("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", o) }),
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
					className: R("font-medium tabular-nums", c),
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
function pr() {
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
function mr() {
	return /* @__PURE__ */ h("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ h("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var hr = {
	github: "GitHub",
	google: "Google"
}, gr = {
	github: mr,
	google: pr
};
function _r({ provider: e, children: t, ...n }) {
	let r = gr[e];
	return /* @__PURE__ */ g(q, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ h(r, {}), t ?? hr[e]]
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function vr({ title: e, subtitle: t, actions: n, className: r }) {
	return /* @__PURE__ */ g("div", {
		className: R("flex items-center justify-between", r),
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
function yr({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ g("section", {
		className: R("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ g("div", {
			className: R("border-border flex items-end justify-between gap-3 border-b pb-2", o),
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
var br = [
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
function xr({ page: e, pageSize: t, total: n, pageSizeOptions: r = br, onPageChange: i, onPageSizeChange: a, className: o }) {
	let s = Math.ceil(n / t), c = Math.min((e - 1) * t + 1, n), l = Math.min(e * t, n);
	return /* @__PURE__ */ g("div", {
		className: R("flex items-center justify-between", o),
		children: [/* @__PURE__ */ g("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ h(Y, {
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
		}), /* @__PURE__ */ h(yn, {
			page: e,
			totalPages: s,
			onPageChange: i
		})]
	});
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var Sr = i(({ label: e, error: t, className: n, id: r, ...i }, a) => {
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
				className: R("bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
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
Sr.displayName = "PasswordInput";
//#endregion
//#region src/components/ui/ProfileHeader.tsx
function Cr({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ g("div", {
		className: R("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ h(kt, {
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
function wr({ children: e, className: t }) {
	return /* @__PURE__ */ h("div", {
		className: R("ui-prose", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/RadioPill.tsx
function Tr({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ h("div", {
		role: "radiogroup",
		"aria-label": a,
		className: R("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ h("button", {
			role: "radio",
			"aria-checked": e.value === t,
			disabled: r,
			onClick: () => n(e.value),
			className: R("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", !r && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/SearchInput.tsx
function Er({ value: e, onChange: t, placeholder: n = "Search...", className: r }) {
	return /* @__PURE__ */ g("div", {
		className: R("relative", r),
		children: [/* @__PURE__ */ h(le, { className: "text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" }), /* @__PURE__ */ h("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: R("bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none")
		})]
	});
}
//#endregion
//#region src/components/ui/Select.tsx
var Dr = i(({ label: e, error: t, options: n, className: r, id: i, ...a }, o) => {
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
				className: R("bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", t ? "border-red" : "border-border", r),
				...a,
				children: n.map((e) => /* @__PURE__ */ h("option", {
					value: e.value,
					children: e.label
				}, e.value))
			}), /* @__PURE__ */ h(E, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" })]
		})]
	});
});
Dr.displayName = "Select";
//#endregion
//#region src/components/ui/SettingRow.tsx
function Or({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ g("div", {
		className: R("border-border flex items-center justify-between border-b py-3", r),
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
function kr({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: o = "w-[360px]", className: s, contentClassName: l }) {
	let u = f(null);
	return H(u, e), c(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = "";
		};
	}, [e, t]), e ? I(/* @__PURE__ */ g("div", {
		className: "fixed inset-0 z-50 flex",
		children: [
			a === "right" && /* @__PURE__ */ h("div", {
				className: "bg-bg-overlay animate-fade-in flex-1",
				onClick: t
			}),
			/* @__PURE__ */ g("div", {
				ref: u,
				className: R("bg-bg-secondary border-border flex flex-col shadow-lg", o, a === "right" ? "animate-slide-in-right border-l" : "animate-slide-in-left border-r", s),
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
							children: /* @__PURE__ */ h(F, { className: "h-3.5 w-3.5" })
						})]
					}),
					/* @__PURE__ */ h("div", {
						className: R("flex-1 overflow-y-auto p-3", l),
						children: r
					}),
					i && /* @__PURE__ */ h("div", {
						className: "border-border flex gap-2 border-t p-3",
						children: i
					})
				]
			}),
			a === "left" && /* @__PURE__ */ h("div", {
				className: "bg-bg-overlay animate-fade-in flex-1",
				onClick: t
			})
		]
	}), document.body) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function Ar({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ h("div", {
		className: R("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function jr({ children: e, className: t }) {
	return /* @__PURE__ */ h("div", {
		className: R("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var Mr = Object.assign(Ar, { Main: jr }), Nr = {
	active: "bg-green",
	inactive: "bg-text-tertiary",
	pending: "bg-yellow animate-pulse-subtle",
	error: "bg-red"
}, Pr = {
	active: "text-green",
	inactive: "text-text-tertiary",
	pending: "text-yellow",
	error: "text-red"
};
function Fr({ status: e, label: t, className: n }) {
	return /* @__PURE__ */ g("span", {
		className: R("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ h("span", { className: R("h-2 w-2 rounded-full", Nr[e]) }), t && /* @__PURE__ */ h("span", {
			className: R("text-xs", Pr[e]),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function Ir({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ h("div", {
		className: R("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ g("div", {
			className: "flex flex-1 items-center",
			children: [/* @__PURE__ */ g("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ h("div", {
						className: R("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ h(w, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ h("span", {
						className: R("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ h("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ h("div", { className: R("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function Lr({ tabs: e, defaultTab: t, value: n, onChange: r, className: i }) {
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
				className: R("font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]", "hover:text-text-primary", e.key === c ? "text-accent" : "text-text-tertiary"),
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
var Rr = i(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, ...s }, c) => {
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
				className: R("bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
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
Rr.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var zr = i(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, "aria-describedby": o, ...s }, c) => {
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
				className: R("bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
				...s
			})]
		})]
	});
});
zr.displayName = "TextInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function Br({ items: e, className: t }) {
	return /* @__PURE__ */ h("div", {
		className: R("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ g("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ g("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ h("div", { className: R(t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ h("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ g("div", {
				className: R("pb-4", n === e.length - 1 && "pb-0"),
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
var Vr = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function Hr(e, t) {
	return e ? `${e} ${t}` : t;
}
function Ur({ content: e, placement: t = "top", children: r }) {
	let [i, o] = p(!1), s = l();
	return /* @__PURE__ */ g("div", {
		className: "relative inline-flex",
		onMouseEnter: () => o(!0),
		onMouseLeave: () => o(!1),
		onFocus: () => o(!0),
		onBlur: () => o(!1),
		children: [a(r) ? n(r, { "aria-describedby": Hr(r.props["aria-describedby"], s) }) : r, i && /* @__PURE__ */ h("div", {
			id: s,
			className: R("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", Vr[t]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function Wr({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a }) {
	return /* @__PURE__ */ g("div", {
		className: R("flex items-center justify-between gap-3", r),
		children: [/* @__PURE__ */ h("div", {
			className: R("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), t && /* @__PURE__ */ h("div", {
			className: R("flex items-center gap-1.5", a),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/UploadDropzone.tsx
function Gr({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, accept: r, multiple: i, disabled: a, onChange: o, className: s }) {
	return /* @__PURE__ */ g("label", {
		className: R("border-border hover:border-border-strong block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", a ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
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
				children: n ?? /* @__PURE__ */ h(fe, { className: "h-4.5 w-4.5" })
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
var Kr = r({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function qr() {
	return s(Kr);
}
//#endregion
//#region src/lib/formatDate.ts
var Jr = [
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
function Yr(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function Xr(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function Zr(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${Jr[e.getMonth()]} ${e.getDate()}`;
	return e.getFullYear() === t.getFullYear() ? o : `${o}, ${e.getFullYear()}`;
}
//#endregion
//#region src/providers/SettingsProvider.tsx
var Z = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, Qr = {
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
}, $r = "leonardaustin-ui-settings", ei = new Set(Object.keys(Qr)), ti = new Set(Object.keys(W)), Q = new Set(Object.keys(Z)), ni = new Set([
	"light",
	"dark",
	"system"
]);
function $(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : Math.min(n, Math.max(t, e));
}
function ri(e) {
	let t = {};
	if (ei.has(e.accentColor) && (t.accentColor = e.accentColor), ni.has(e.colorMode) && (t.colorMode = e.colorMode), ti.has(e.preferredDarkTheme) && !U(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), ti.has(e.preferredLightTheme) && U(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = $(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!ti.has(t) || !r || typeof r != "object") continue;
			let e = r, i = W[t];
			n[t] = {
				uiFont: Q.has(e.uiFont) ? e.uiFont : i.uiFont,
				headingFont: Q.has(e.headingFont) ? e.headingFont : i.headingFont,
				proseFont: Q.has(e.proseFont) ? e.proseFont : i.proseFont,
				controlFont: Q.has(e.controlFont) ? e.controlFont : i.controlFont,
				labelFont: Q.has(e.labelFont) ? e.labelFont : i.labelFont,
				navigationFont: Q.has(e.navigationFont) ? e.navigationFont : i.navigationFont,
				dataFont: Q.has(e.dataFont) ? e.dataFont : i.dataFont,
				codeFont: Q.has(e.codeFont) ? e.codeFont : i.codeFont,
				fontSize: $(e.fontSize, 11, 18, i.fontSize),
				borderRadius: $(e.borderRadius, 0, 16, i.borderRadius),
				borderWidth: $(e.borderWidth, 1, 3, i.borderWidth),
				tracking: $(e.tracking, 0, .3, i.tracking),
				lineHeight: $(e.lineHeight, 1.2, 2, i.lineHeight),
				density: $(e.density, .18, .32, i.density)
			};
		}
		t.themeOverrides = n;
	}
	return t;
}
var ii = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function ai(e) {
	if (typeof localStorage > "u") return ii;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...ii,
			...ri(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return ii;
}
function oi(e, t) {
	let n = W[e] ?? W.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function si(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function ci({ children: e, storageKey: t = $r }) {
	let [n, r] = p(() => ai(t)), [i, a] = p(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
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
	]), [l, u] = p(() => oi(s, n.themeOverrides));
	c(() => {
		u(oi(s, n.themeOverrides));
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
		let e = document.documentElement, t = Qr[n.accentColor];
		e.style.setProperty("--accent", t.base), e.style.setProperty("--accent-hover", t.hover), e.style.setProperty("--accent-active", t.active), e.style.setProperty("--accent-muted", t.muted), e.style.setProperty("--accent-subtle", t.subtle);
	}, [n.accentColor]), c(() => {
		document.documentElement.classList.toggle("reduced-motion", n.reducedMotion);
	}, [n.reducedMotion]), c(() => {
		let e = document.documentElement, t = l.borderRadius;
		e.style.fontSize = `${l.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", Z[l.uiFont]), e.style.setProperty("--font-heading", Z[l.headingFont]), e.style.setProperty("--font-prose", Z[l.proseFont]), e.style.setProperty("--font-control", Z[l.controlFont]), e.style.setProperty("--font-label", Z[l.labelFont]), e.style.setProperty("--font-navigation", Z[l.navigationFont]), e.style.setProperty("--font-data", Z[l.dataFont]), e.style.setProperty("--font-code", Z[l.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${l.borderWidth}px`), e.style.setProperty("--ui-tracking", `${l.tracking}em`), e.style.setProperty("--ui-line-height", String(l.lineHeight)), e.style.setProperty("--ui-density", `${l.density}rem`);
	}, [l]);
	let m = d(() => oi(s, n.themeOverrides), [s, n.themeOverrides]), g = s in n.themeOverrides, _ = !si(l, m), v = o(() => {
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
		delete e[s], f({ themeOverrides: e }), u(W[s] ?? W.dark);
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
	return /* @__PURE__ */ h(Tt.Provider, {
		value: b,
		children: e
	});
}
//#endregion
//#region src/providers/ThemeProvider.tsx
var li = {
	dark: "",
	light: "theme-light",
	monokai: "theme-monokai",
	solarized: "theme-solarized",
	cyberBrutalDark: "theme-cyber-brutal-dark",
	cyberBrutalLight: "theme-cyber-brutal-light",
	hashiTheme: "theme-hashi"
};
function ui({ children: e }) {
	let { resolvedTheme: t } = s(Tt);
	return c(() => {
		let e = document.documentElement;
		Object.values(li).forEach((t) => {
			t && e.classList.remove(t);
		});
		let n = li[t];
		n && e.classList.add(n);
	}, [t]), /* @__PURE__ */ h(Kr.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
export { Cn as Alert, pn as AppShell, _e as AreaChart, wn as AuthCard, mn as AuthLayout, Tn as AuthorByline, kt as Avatar, hn as BackLink, On as Badge, ye as BarChart, st as BottomNav, qt as Breadcrumbs, q as Button, lt as COMMAND_PALETTE_EVENT, Fn as CalendarGrid, In as Card, gn as Checkbox, vn as ColumnPicker, Ln as Combobox, mt as CommandPalette, ut as DEFAULT_COMMAND_PALETTE_SHORTCUT, Rn as DangerZone, Bn as DatePicker, Wn as DateRangePicker, Xn as DateTimePicker, er as DetailPanel, tr as Dialog, nr as DialogActions, rr as DividerLabel, We as DonutChart, ir as DropdownMenu, ar as EmptyState, or as ErrorBoundary, _n as FilterButton, sr as FilterDropdown, cr as Kbd, ur as LoadingSpinner, dr as MetadataGrid, fr as MetricCard, gt as MobileDrawer, _r as OAuthButton, vr as PageHeader, yr as PageSection, yn as Pagination, xr as PaginationBar, Sr as PasswordInput, Cr as ProfileHeader, wr as ProseContent, Ke as RadarChart, Je as RadialBarChart, Tr as RadioPill, xn as ResourceTable, Er as SearchInput, J as SectionHeader, Dr as Select, Y as SelectDropdown, Or as SettingRow, Tt as SettingsContext, ci as SettingsProvider, kr as SideSheet, Gt as Sidebar, X as Slider, Ye as SparkLine, Mr as SplitPaneLayout, tt as StackedBarChart, Fr as StatusDot, Ir as StepProgress, an as THEME_MENU_EVENT, Lr as Tabs, zr as TextInput, Rr as Textarea, Kr as ThemeContext, cn as ThemeMenu, nn as ThemePreview, ui as ThemeProvider, Br as Timeline, Mt as ToastProvider, rn as Toggle, Wr as Toolbar, Ur as Tooltip, fn as TopBar, Gr as UploadDropzone, it as VerticalBarChart, wt as accentItems, R as cn, bt as darkThemes, Ct as fontOptions, Xr as formatDateLong, Yr as formatDateShort, Zr as formatRelative, V as handleAppShellNavigate, at as isAppShellPathActive, U as isLightTheme, yt as lightThemes, ft as matchesCommandPaletteShortcut, ot as navigateToPath, dt as openCommandPalette, on as openThemeMenu, bn as sortRows, W as themeDefaults, _t as themeItems, Jt as useApplyTheme, G as useDismiss, H as useFocusTrap, K as useSettings, qr as useTheme, jt as useToast };
