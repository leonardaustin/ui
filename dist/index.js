import { Component as e, Fragment as t, createContext as n, forwardRef as r, useCallback as i, useContext as a, useEffect as o, useId as s, useLayoutEffect as c, useMemo as l, useRef as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { Accessibility as h, AlertTriangle as g, ArrowDown as _, ArrowLeft as v, ArrowUp as y, BookOpen as b, Calendar as x, Check as S, CheckCircle2 as C, ChevronDown as w, ChevronLeft as T, ChevronRight as E, ChevronsUpDown as D, Columns3 as O, Eye as k, EyeOff as A, Inbox as ee, Info as j, Loader2 as te, LogOut as ne, Menu as re, Minus as ie, Monitor as ae, Moon as oe, Palette as se, PanelLeft as ce, PanelLeftDashed as le, Search as M, Settings as ue, Sun as de, UploadCloud as fe, X as N, XCircle as pe, Zap as me } from "lucide-react";
import { createPortal as P } from "react-dom";
//#region src/components/charts/AreaChart.tsx
var F = {
	top: 16,
	right: 12,
	bottom: 28,
	left: 48
};
function he(e) {
	return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function ge({ data: e, height: t = 240 }) {
	let n = s(), r = u(null), [i, a] = d(null), o = 600 - F.left - F.right, c = t - F.top - F.bottom, l = Math.min(...e.map((e) => e.value)), h = Math.max(...e.map((e) => e.value)), g = h - l || 1;
	function _(t) {
		return F.left + t / Math.max(e.length - 1, 1) * o;
	}
	function v(e) {
		return F.top + c - (e - l) / g * c;
	}
	let y = e.map((e, t) => `${_(t)},${v(e.value)}`).join(" "), b = [
		`${_(0)},${F.top + c}`,
		...e.map((e, t) => `${_(t)},${v(e.value)}`),
		`${_(e.length - 1)},${F.top + c}`
	].join(" "), x = Math.max(1, Math.floor(e.length / 5)), S = e.filter((t, n) => n % x === 0 || n === e.length - 1), C = e.map((e, t) => t).filter((t) => t % x === 0 || t === e.length - 1);
	function w(t) {
		let n = r.current;
		if (!n || e.length === 0) return;
		let i = n.getBoundingClientRect(), s = ((t.clientX - i.left) / i.width * 600 - F.left) / o, c = Math.round(s * (e.length - 1)), l = Math.max(0, Math.min(e.length - 1, c));
		a({
			x: _(l),
			y: v(e[l].value),
			index: l
		});
	}
	function T() {
		a(null);
	}
	return /* @__PURE__ */ m("svg", {
		ref: r,
		width: "100%",
		viewBox: `0 0 600 ${t}`,
		onMouseMove: w,
		onMouseLeave: T,
		className: "select-none",
		children: [
			/* @__PURE__ */ p("defs", { children: /* @__PURE__ */ m("linearGradient", {
				id: n,
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "1",
				children: [/* @__PURE__ */ p("stop", {
					offset: "0%",
					stopColor: "var(--accent)",
					stopOpacity: .3
				}), /* @__PURE__ */ p("stop", {
					offset: "100%",
					stopColor: "var(--accent)",
					stopOpacity: 0
				})]
			}) }),
			/* @__PURE__ */ p("text", {
				x: F.left - 8,
				y: F.top,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: he(h)
			}),
			/* @__PURE__ */ p("text", {
				x: F.left - 8,
				y: F.top + c,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: he(l)
			}),
			/* @__PURE__ */ p("line", {
				x1: F.left,
				y1: F.top + c,
				x2: F.left + o,
				y2: F.top + c,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ p("polygon", {
				points: b,
				fill: `url(#${n})`
			}),
			/* @__PURE__ */ p("polyline", {
				points: y,
				fill: "none",
				stroke: "var(--accent)",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}),
			S.map((e, n) => /* @__PURE__ */ p("text", {
				x: _(C[n]),
				y: t - 4,
				textAnchor: "middle",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: e.date
			}, e.date)),
			i && /* @__PURE__ */ m(f, { children: [
				/* @__PURE__ */ p("line", {
					x1: i.x,
					y1: F.top,
					x2: i.x,
					y2: F.top + c,
					stroke: "var(--border-strong)",
					strokeWidth: 1,
					strokeDasharray: "3 3"
				}),
				/* @__PURE__ */ p("circle", {
					cx: i.x,
					cy: i.y,
					r: 4,
					fill: "var(--accent)",
					stroke: "var(--bg-secondary)",
					strokeWidth: 2
				}),
				(() => {
					let t = i.y - 38 >= 0 ? i.y - 38 : i.y + 12, n = Math.max(0, Math.min(510, i.x - 90 / 2)), r = n + 90 / 2;
					return /* @__PURE__ */ m(f, { children: [
						/* @__PURE__ */ p("rect", {
							x: n,
							y: t,
							width: 90,
							height: 28,
							rx: 4,
							fill: "var(--bg-tertiary)",
							stroke: "var(--border)",
							strokeWidth: 1
						}),
						/* @__PURE__ */ p("text", {
							x: r,
							y: t + 10,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-secondary)",
							fontSize: 9,
							children: e[i.index].date
						}),
						/* @__PURE__ */ p("text", {
							x: r,
							y: t + 22,
							textAnchor: "middle",
							dominantBaseline: "central",
							fill: "var(--text-primary)",
							fontSize: 11,
							fontWeight: 600,
							children: e[i.index].value.toLocaleString()
						})
					] });
				})()
			] })
		]
	});
}
//#endregion
//#region src/components/charts/BarChart.tsx
var _e = [
	1,
	.85,
	.7,
	.55,
	.45
];
function ve({ data: e, height: t }) {
	let [n, r] = d(null), i = Math.max(...e.map((e) => e.value));
	return /* @__PURE__ */ p("svg", {
		width: "100%",
		viewBox: `0 0 600 ${t ?? e.length * 38 - 10}`,
		className: "select-none",
		children: e.map((e, t) => {
			let a = t * 38, o = i > 0 ? e.value / i * 380 : 0, s = n === t;
			return /* @__PURE__ */ m("g", {
				onMouseEnter: () => r(t),
				onMouseLeave: () => r(null),
				className: "cursor-pointer",
				children: [
					/* @__PURE__ */ p("rect", {
						x: 0,
						y: a,
						width: 600,
						height: 28,
						fill: "transparent"
					}),
					/* @__PURE__ */ p("text", {
						x: 0,
						y: a + 28 / 2,
						dominantBaseline: "central",
						fill: s ? "var(--text-primary)" : "var(--text-secondary)",
						fontSize: 11,
						fontWeight: s ? 600 : 400,
						style: { transition: "all 150ms" },
						children: e.label
					}),
					/* @__PURE__ */ p("rect", {
						x: 160,
						y: a + 3,
						width: 380,
						height: 22,
						fill: "var(--border)",
						rx: 6,
						opacity: .5
					}),
					/* @__PURE__ */ p("rect", {
						x: 160,
						y: a + 3,
						width: o,
						height: 22,
						fill: "var(--accent)",
						rx: 6,
						opacity: s ? 1 : _e[t % _e.length],
						style: { transition: "all 150ms" }
					}),
					/* @__PURE__ */ p("text", {
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
function ye(e) {
	if (typeof e == "string" || typeof e == "number" || typeof e == "bigint") return String(e);
	if (!e || typeof e != "object") return "";
	let t = "";
	if (Array.isArray(e)) for (let n of e) {
		if (!n) continue;
		let e = ye(n);
		e && (t = t ? `${t} ${e}` : e);
	}
	else for (let n in e) e[n] && (t = t ? `${t} ${n}` : n);
	return t;
}
var be = new Set([
	"block",
	"contents",
	"flex",
	"grid",
	"hidden",
	"inline",
	"inline-block",
	"inline-flex",
	"table"
]), xe = new Set([
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
]), Se = new Set([
	"text-center",
	"text-left",
	"text-right"
]), Ce = new Set(["lowercase", "uppercase"]), we = new Set([
	"font-bold",
	"font-medium",
	"font-normal",
	"font-semibold"
]), Te = {
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
}, Ee = {
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
}, De = {
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
}, Oe = {
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
}, ke = new Set([
	"border-dashed",
	"border-dotted",
	"border-double",
	"border-hidden",
	"border-none",
	"border-solid"
]);
function I(...e) {
	return Ae(ye(e));
}
function Ae(e) {
	let t = [], n = /* @__PURE__ */ new Map();
	for (let r of e.split(/\s+/)) {
		if (!r) continue;
		let e = je(r);
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
			r && Be(r.keys, e) && (t[n] = null);
		}
		t.push({
			token: r,
			keys: e
		});
	}
	return t.filter((e) => !!e).map((e) => e.token).join(" ");
}
function je(e) {
	let t = Me(e), n = t.pop() ?? e, r = n.startsWith("!"), i = Ne(r ? n.slice(1) : n), a = `${t.join(":")}|${r ? "!" : ""}`, o = Pe(i);
	return new Set(o.map((e) => `${a}${e}`));
}
function Me(e) {
	let t = [], n = 0, r = 0;
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a === "[" && n++, a === "]" && (n = Math.max(0, n - 1)), !(a !== ":" || n > 0) && (t.push(e.slice(r, i)), r = i + 1);
	}
	return t.push(e.slice(r)), t;
}
function Ne(e) {
	return e.startsWith("-") ? e.slice(1) : e;
}
function Pe(e) {
	let t = Fe(e);
	if (t) return [...Te[t]];
	let n = Ie(e);
	if (n) return [...Ee[n]];
	let r = Le(e);
	if (r) return [...De[r]];
	if (be.has(e)) return ["display"];
	if (e === "absolute" || e === "fixed" || e === "relative" || e === "static" || e === "sticky") return ["position"];
	if (e === "visible" || e === "invisible" || e === "collapse") return ["visibility"];
	if (e === "border-collapse") return ["border-collapse"];
	if (ke.has(e)) return ["border-style"];
	let i = Re(e);
	return i ? [...Oe[i]] : e === "rounded" || e.startsWith("rounded-") ? ["border-radius"] : e.startsWith("bg-") ? ["background"] : xe.has(e) ? ["font-size"] : Se.has(e) ? ["text-align"] : Ce.has(e) ? ["text-transform"] : e.startsWith("text-") ? ["color"] : e === "font-mono" ? ["font-family"] : we.has(e) ? ["font-weight"] : e.startsWith("leading-") ? ["line-height"] : e.startsWith("tracking-") ? ["letter-spacing"] : e.startsWith("w-") ? ["width"] : e.startsWith("min-w-") ? ["min-width"] : e.startsWith("max-w-") ? ["max-width"] : e.startsWith("h-") ? ["height"] : e.startsWith("min-h-") ? ["min-height"] : e.startsWith("max-h-") ? ["max-height"] : e.startsWith("translate-x-") ? ["translate-x"] : e.startsWith("translate-y-") ? ["translate-y"] : e.startsWith("scale-") ? ["scale"] : e.startsWith("rotate-") ? ["rotate"] : e === "transform" ? ["transform"] : e.startsWith("grid-cols-") ? ["grid-template-columns"] : e.startsWith("col-span-") ? ["grid-column"] : e.startsWith("columns-") ? ["columns"] : e === "flex-col" || e === "flex-row" ? ["flex-direction"] : e === "flex-wrap" ? ["flex-wrap"] : e.startsWith("flex-") ? ["flex"] : e === "shrink" || e.startsWith("shrink-") ? ["flex-shrink"] : e === "grow" || e.startsWith("grow-") ? ["flex-grow"] : e.startsWith("items-") ? ["align-items"] : e.startsWith("justify-") ? ["justify-content"] : e.startsWith("gap-") ? ["gap"] : e.startsWith("space-y-") ? ["space-y"] : e.startsWith("overflow-y-") ? ["overflow-y"] : e.startsWith("overflow-x-") ? ["overflow-x"] : e.startsWith("overflow-") ? ["overflow-x", "overflow-y"] : e.startsWith("object-") ? ["object-fit"] : e.startsWith("aspect-") ? ["aspect-ratio"] : e.startsWith("cursor-") ? ["cursor"] : e.startsWith("opacity-") ? ["opacity"] : e.startsWith("shadow-") ? ["box-shadow"] : e === "ring" || /^ring-\d/.test(e) ? ["ring-width"] : e.startsWith("ring-offset-bg-") ? ["ring-offset-color"] : e.startsWith("ring-offset-") ? ["ring-offset-width"] : e.startsWith("ring-") ? ["ring-color"] : e.startsWith("outline-offset-") ? ["outline-offset"] : /^outline-\d/.test(e) ? ["outline-width"] : e === "outline" || e === "outline-none" ? ["outline-style"] : e.startsWith("outline-") ? ["outline-color"] : e.startsWith("transition-") || e === "transition" ? ["transition-property"] : e.startsWith("duration-") ? ["transition-duration"] : e.startsWith("ease-") ? ["transition-timing-function"] : e.startsWith("animate-") ? ["animation"] : e.startsWith("z-") ? ["z-index"] : e.startsWith("whitespace-") ? ["white-space"] : e.startsWith("break-inside-") ? ["break-inside"] : e.startsWith("break-") ? ["word-break"] : e.startsWith("line-clamp-") ? ["line-clamp"] : e === "list-inside" || e === "list-outside" ? ["list-style-position"] : e.startsWith("list-") ? ["list-style-type"] : e.startsWith("resize") ? ["resize"] : e.startsWith("select-") ? ["user-select"] : e.startsWith("pointer-events-") ? ["pointer-events"] : e.startsWith("appearance-") ? ["appearance"] : e.startsWith("accent-") ? ["accent-color"] : [];
}
function Fe(e) {
	return ze(e, Te);
}
function Ie(e) {
	return ze(e, Ee);
}
function Le(e) {
	return e === "border" ? "border" : e.match(/^(border(?:-[xytrbl])?)(?=$|-(?:0|2|4|8|\[))/)?.[1];
}
function Re(e) {
	let t = e.match(/^(border-[xytrbl])-./);
	return t ? t[1] : e.startsWith("border-") ? "border" : void 0;
}
function ze(e, t) {
	return Object.keys(t).sort((e, t) => String(t).length - String(e).length).find((t) => {
		let n = String(t);
		return e === n || e.startsWith(`${n}-`);
	});
}
function Be(e, t) {
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
//#endregion
//#region src/components/charts/DonutChart.tsx
var Ve = {
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-yellow": "var(--yellow)",
	"text-red": "var(--red)"
};
function He(e, t) {
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
function Ue({ segments: e, size: t = 180 }) {
	let [n, r] = d(null), i = e.reduce((e, t) => e + t.value, 0), a = (t - 28) / 2, o = He(e, 2 * Math.PI * a), s = t + 12, c = s / 2;
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col items-center gap-4",
		children: [/* @__PURE__ */ m("div", {
			className: "relative",
			children: [/* @__PURE__ */ m("svg", {
				width: s,
				height: s,
				viewBox: `0 0 ${s} ${s}`,
				className: "select-none",
				onMouseLeave: () => r(null),
				children: [
					o.map((e, t) => /* @__PURE__ */ p("circle", {
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
						return /* @__PURE__ */ p("circle", {
							cx: c,
							cy: c,
							r: a,
							fill: "none",
							stroke: Ve[e.segment.color] ?? "var(--accent)",
							strokeWidth: r ? 32 : 28,
							strokeDasharray: `${e.segmentLength} ${e.dashOffset}`,
							strokeLinecap: "butt",
							transform: `translate(${o} ${s}) rotate(${e.rotation} ${c} ${c})`,
							opacity: n !== null && !r ? .5 : 1,
							style: { transition: "all 150ms ease-out" },
							className: "pointer-events-none"
						}, e.segment.name);
					}),
					/* @__PURE__ */ p("text", {
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
					/* @__PURE__ */ p("text", {
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
				let e = o[n], t = e.midAngle * Math.PI / 180, r = a + 28 / 2 + 20, i = c + Math.cos(t) * r, s = c + Math.sin(t) * r, l = Ve[e.segment.color] ?? "var(--accent)";
				return /* @__PURE__ */ p("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: {
						left: i,
						top: s,
						transform: "translate(-50%, -50%)"
					},
					children: /* @__PURE__ */ m("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ p("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: l }
							}),
							/* @__PURE__ */ p("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: e.segment.name
							}),
							/* @__PURE__ */ p("span", {
								className: "text-text-primary text-xs font-semibold",
								children: e.segment.value.toLocaleString()
							}),
							/* @__PURE__ */ m("span", {
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
		}), /* @__PURE__ */ p("div", {
			className: "relative z-0 flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => /* @__PURE__ */ m("button", {
				type: "button",
				onMouseEnter: () => r(t),
				onMouseLeave: () => r(null),
				className: I("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", n !== null && n !== t && "opacity-50"),
				children: [
					/* @__PURE__ */ p("span", {
						className: "h-2 w-2 rounded-full",
						style: { backgroundColor: Ve[e.color] ?? "var(--accent)" }
					}),
					/* @__PURE__ */ p("span", {
						className: "text-text-secondary text-xs",
						children: e.name
					}),
					/* @__PURE__ */ p("span", {
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
var We = 4;
function Ge({ data: e, maxValue: t, size: n = 240 }) {
	let [r, i] = d(null), a = t ?? Math.max(...e.map((e) => e.value)), o = n / 2, s = (n - 60) / 2, c = 2 * Math.PI / e.length;
	function l(e, t) {
		return [o + t * Math.cos(e - Math.PI / 2), o + t * Math.sin(e - Math.PI / 2)];
	}
	let u = e.map((e, t) => {
		let n = e.value / a * s;
		return l(t * c, n);
	}), f = u.map((e) => `${e[0]},${e[1]}`).join(" ");
	return /* @__PURE__ */ m("div", {
		className: "relative flex flex-col items-center",
		children: [/* @__PURE__ */ m("svg", {
			width: n,
			height: n,
			viewBox: `0 0 ${n} ${n}`,
			className: "select-none",
			children: [
				Array.from({ length: We }, (t, n) => {
					let r = (n + 1) / We * s;
					return /* @__PURE__ */ p("polygon", {
						points: e.map((e, t) => l(t * c, r)).map((e) => `${e[0]},${e[1]}`).join(" "),
						fill: "none",
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .5
					}, n);
				}),
				e.map((e, t) => {
					let [n, r] = l(t * c, s);
					return /* @__PURE__ */ p("line", {
						x1: o,
						y1: o,
						x2: n,
						y2: r,
						stroke: "var(--border)",
						strokeWidth: 1,
						opacity: .3
					}, t);
				}),
				/* @__PURE__ */ p("polygon", {
					points: f,
					fill: "var(--accent)",
					fillOpacity: .15,
					stroke: "var(--accent)",
					strokeWidth: 2,
					strokeLinejoin: "round"
				}),
				u.map((e, t) => {
					let n = r === t;
					return /* @__PURE__ */ p("circle", {
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
					return /* @__PURE__ */ m("g", {
						onMouseEnter: () => i(t),
						onMouseLeave: () => i(null),
						className: "cursor-pointer",
						children: [/* @__PURE__ */ p("rect", {
							x: a - 24,
							y: o - 10,
							width: 48,
							height: 20,
							fill: "transparent"
						}), /* @__PURE__ */ p("text", {
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
		}), r !== null && /* @__PURE__ */ p("div", {
			className: "bg-bg-tertiary border-border pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md border px-2.5 py-1.5 shadow-lg",
			children: /* @__PURE__ */ m("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ p("span", { className: "bg-accent h-2 w-2 shrink-0 rounded-full" }),
					/* @__PURE__ */ p("span", {
						className: I("text-text-secondary text-xs whitespace-nowrap"),
						children: e[r].label
					}),
					/* @__PURE__ */ p("span", {
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
var Ke = {
	"text-blue": "var(--blue)",
	"text-green": "var(--green)",
	"text-purple": "var(--purple)",
	"text-yellow": "var(--yellow)",
	"text-red": "var(--red)",
	"text-accent": "var(--accent)"
};
function qe({ segments: e, size: t = 200 }) {
	let [n, r] = d(null), [i, a] = d({
		x: 0,
		y: 0
	}), o = u(null), s = t / 2, c = (t - 40) / 2;
	function l(e) {
		let t = o.current?.getBoundingClientRect();
		t && a({
			x: e.clientX - t.left,
			y: e.clientY - t.top
		});
	}
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col items-center gap-4",
		children: [/* @__PURE__ */ m("div", {
			className: "relative",
			ref: o,
			onMouseMove: l,
			children: [/* @__PURE__ */ m("svg", {
				width: t,
				height: t,
				viewBox: `0 0 ${t} ${t}`,
				className: "select-none",
				children: [e.map((e, t) => {
					let i = c - t * 20;
					if (i <= 0) return null;
					let a = 2 * Math.PI * i, o = a * Math.min(e.value / e.max, 1), l = a - o, u = Ke[e.color] ?? "var(--accent)", d = n === t;
					return /* @__PURE__ */ m("g", {
						onMouseEnter: () => r(t),
						onMouseLeave: () => r(null),
						className: "cursor-pointer",
						children: [/* @__PURE__ */ p("circle", {
							cx: s,
							cy: s,
							r: i,
							fill: "none",
							stroke: "var(--border)",
							strokeWidth: 14,
							opacity: .3
						}), /* @__PURE__ */ p("circle", {
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
					return /* @__PURE__ */ p("circle", {
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
				let t = e[n], r = Math.round(t.value / t.max * 100), a = Ke[t.color] ?? "var(--accent)";
				return /* @__PURE__ */ p("div", {
					className: "bg-bg-tertiary border-border pointer-events-none absolute z-10 rounded-md border px-2.5 py-1.5 shadow-lg",
					style: {
						left: i.x,
						top: i.y,
						transform: "translate(-50%, -120%)"
					},
					children: /* @__PURE__ */ m("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ p("span", {
								className: "h-2 w-2 shrink-0 rounded-full",
								style: { backgroundColor: a }
							}),
							/* @__PURE__ */ p("span", {
								className: "text-text-secondary text-xs whitespace-nowrap",
								children: t.label
							}),
							/* @__PURE__ */ m("span", {
								className: "text-text-primary text-xs font-semibold",
								children: [r, "%"]
							}),
							/* @__PURE__ */ m("span", {
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
		}), /* @__PURE__ */ p("div", {
			className: "flex flex-wrap justify-center gap-x-4 gap-y-1.5",
			children: e.map((e, t) => {
				let i = Math.round(e.value / e.max * 100);
				return /* @__PURE__ */ m("button", {
					type: "button",
					onMouseEnter: () => r(t),
					onMouseLeave: () => r(null),
					className: I("flex cursor-pointer items-center gap-1.5 transition-opacity duration-[100ms]", n !== null && n !== t && "opacity-50"),
					children: [
						/* @__PURE__ */ p("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: Ke[e.color] ?? "var(--accent)" }
						}),
						/* @__PURE__ */ p("span", {
							className: "text-text-secondary text-xs",
							children: e.label
						}),
						/* @__PURE__ */ m("span", {
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
function Je({ data: e, width: t = 60, height: n = 20, color: r }) {
	if (e.length < 2) return null;
	let i = Math.min(...e), a = Math.max(...e) - i || 1, o = e.map((r, o) => `${o / (e.length - 1) * t},${n - (r - i) / a * (n - 2) - 1}`).join(" ");
	return /* @__PURE__ */ p("svg", {
		width: t,
		height: n,
		viewBox: `0 0 ${t} ${n}`,
		className: "inline-block",
		children: /* @__PURE__ */ p("polyline", {
			points: o,
			fill: "none",
			stroke: r ?? "var(--accent)",
			strokeWidth: 1.5,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region src/components/charts/VerticalBarChart.tsx
var Ye = [
	1,
	.85,
	.7,
	.55,
	.45,
	.35,
	.25
], L = {
	top: 20,
	right: 8,
	bottom: 24,
	left: 40
};
function Xe(e) {
	return e >= 1e6 ? `${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `${(e / 1e3).toFixed(1)}k` : String(e);
}
function Ze({ data: e, height: t = 180 }) {
	let [n, r] = d(null), i = 600 - L.left - L.right, a = t - L.top - L.bottom, o = Math.max(...e.map((e) => e.value), 1), s = Math.max(4, (i - 6 * (e.length - 1)) / e.length);
	return /* @__PURE__ */ m("svg", {
		width: "100%",
		viewBox: `0 0 600 ${t}`,
		className: "select-none",
		children: [
			/* @__PURE__ */ p("text", {
				x: L.left - 6,
				y: L.top + 4,
				textAnchor: "end",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: Xe(o)
			}),
			/* @__PURE__ */ p("text", {
				x: L.left - 6,
				y: L.top + a,
				textAnchor: "end",
				dominantBaseline: "central",
				fill: "var(--text-tertiary)",
				fontSize: 10,
				children: "0"
			}),
			/* @__PURE__ */ p("line", {
				x1: L.left,
				y1: L.top + a,
				x2: L.left + i,
				y2: L.top + a,
				stroke: "var(--border)",
				strokeWidth: 1
			}),
			/* @__PURE__ */ p("line", {
				x1: L.left,
				y1: L.top + a / 2,
				x2: L.left + i,
				y2: L.top + a / 2,
				stroke: "var(--border)",
				strokeWidth: 1,
				strokeDasharray: "3 3",
				opacity: .5
			}),
			e.map((e, i) => {
				let c = L.left + i * (s + 6), l = e.value / o * a, u = L.top + a - l, d = n === i;
				return /* @__PURE__ */ m("g", {
					onMouseEnter: () => r(i),
					onMouseLeave: () => r(null),
					children: [
						/* @__PURE__ */ p("rect", {
							x: c,
							y: L.top,
							width: s,
							height: a,
							fill: "transparent"
						}),
						/* @__PURE__ */ p("rect", {
							x: c,
							y: u,
							width: s,
							height: l,
							fill: e.color ?? "var(--accent)",
							rx: 6,
							opacity: d ? 1 : Ye[i % Ye.length],
							style: { transition: "all 150ms" }
						}),
						/* @__PURE__ */ p("text", {
							x: c + s / 2,
							y: t - 4,
							textAnchor: "middle",
							fill: "var(--text-tertiary)",
							fontSize: 10,
							children: e.label
						}),
						d && /* @__PURE__ */ p("text", {
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
function Qe(e, t) {
	if (!t) return !1;
	if (e.end ?? e.path === "/") return t === e.path;
	let n = e.path.endsWith("/") ? e.path : `${e.path}/`;
	return t === e.path || t.startsWith(n);
}
function R(e, t, n, r) {
	let i = e.currentTarget.getAttribute("target");
	e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || i && i !== "_self" || (n && (e.preventDefault(), n(t)), r?.());
}
function z(e, t) {
	if (t) {
		t(e);
		return;
	}
	typeof window < "u" && window.location.assign(e);
}
//#endregion
//#region src/components/app-shell/BottomNav.tsx
function $e({ items: e, currentPath: t, onNavigate: n, className: r }) {
	return e.length === 0 ? null : /* @__PURE__ */ p("nav", {
		className: I("bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden", r),
		style: { height: "var(--bottomnav-height)" },
		children: /* @__PURE__ */ p("ul", {
			className: "flex h-full items-center justify-around",
			children: e.map((e) => {
				let r = Qe(e, t);
				return /* @__PURE__ */ p("li", { children: /* @__PURE__ */ m("a", {
					href: e.path,
					onClick: (t) => R(t, e.path, n),
					"aria-current": r ? "page" : void 0,
					className: I("font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5", "cursor-pointer transition-colors duration-[100ms]", r ? "text-accent" : "text-text-tertiary"),
					children: [/* @__PURE__ */ p(e.icon, { className: "h-5 w-5" }), /* @__PURE__ */ p("span", {
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
var et = "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function B(e, t) {
	let n = u(null);
	o(() => {
		if (!t || !e.current) return;
		n.current = document.activeElement;
		let r = e.current.querySelectorAll(et);
		r.length > 0 && r[0].focus();
		let i = (t) => {
			if (t.key !== "Tab" || !e.current) return;
			let n = e.current.querySelectorAll(et);
			if (n.length === 0) return;
			let r = n[0], i = n[n.length - 1];
			t.shiftKey ? document.activeElement === r && (t.preventDefault(), i.focus()) : document.activeElement === i && (t.preventDefault(), r.focus());
		};
		return document.addEventListener("keydown", i), () => {
			document.removeEventListener("keydown", i), n.current instanceof HTMLElement && n.current.focus();
		};
	}, [t, e]);
}
//#endregion
//#region src/components/app-shell/commandPaletteEvents.ts
var tt = "open-command-palette", nt = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function rt(e = tt) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(e));
}
function it(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
//#region src/components/app-shell/CommandPalette.tsx
function at(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function ot({ items: e, eventName: t = tt, shortcut: n = nt, placeholder: r = "Search pages...", emptyLabel: a = "No results found", onNavigate: c, onSelect: l }) {
	let [f, h] = d(!1), [g, _] = d(""), [v, y] = d(0), b = u(null), x = u(null), S = s();
	B(x, f);
	let C = e.filter((e) => at(e, g)), w = i(() => {
		h(!0), _(""), y(0), setTimeout(() => b.current?.focus(), 0);
	}, []);
	o(() => {
		let e = (e) => {
			it(e, n) && (e.preventDefault(), f ? h(!1) : w());
		}, r = () => {
			f || w();
		};
		return document.addEventListener("keydown", e), document.addEventListener(t, r), () => {
			document.removeEventListener("keydown", e), document.removeEventListener(t, r);
		};
	}, [
		t,
		f,
		w,
		n
	]);
	function T(e) {
		_(e), y(0);
	}
	function E(e) {
		l?.(e), z(e.path, c), h(!1);
	}
	function D(e) {
		e.key === "ArrowDown" ? (e.preventDefault(), y((e) => Math.min(e + 1, C.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), y((e) => Math.max(e - 1, 0))) : e.key === "Enter" && C[v] ? E(C[v]) : e.key === "Escape" && h(!1);
	}
	return f ? /* @__PURE__ */ m("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh]",
		children: [/* @__PURE__ */ p("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: () => h(!1)
		}), /* @__PURE__ */ m("div", {
			ref: x,
			className: "bg-bg-secondary border-border animate-scale-in relative z-50 mx-4 w-full max-w-[520px] overflow-hidden rounded-xl border shadow-lg",
			onKeyDown: D,
			children: [/* @__PURE__ */ m("div", {
				className: "border-border flex items-center gap-3 border-b px-4",
				children: [
					/* @__PURE__ */ p(M, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
					/* @__PURE__ */ p("input", {
						ref: b,
						type: "text",
						role: "combobox",
						"aria-expanded": C.length > 0,
						"aria-controls": S,
						"aria-activedescendant": C[v] ? `${S}-${v}` : void 0,
						"aria-autocomplete": "list",
						"aria-label": "Search pages",
						value: g,
						onChange: (e) => T(e.target.value),
						placeholder: r,
						className: "text-text-primary placeholder:text-text-disabled h-11 flex-1 bg-transparent text-sm focus:outline-none"
					}),
					/* @__PURE__ */ p("kbd", {
						className: "text-2xs bg-bg-tertiary text-text-tertiary border-border hidden items-center rounded border px-1.5 py-0.5 font-mono font-medium sm:inline-flex",
						children: "Esc"
					})
				]
			}), /* @__PURE__ */ p("ul", {
				id: S,
				role: "listbox",
				"aria-label": "Pages",
				className: "max-h-[320px] overflow-y-auto px-2 py-2",
				children: C.length === 0 ? /* @__PURE__ */ p("li", {
					className: "text-text-tertiary px-3 py-6 text-center text-xs",
					children: a
				}) : C.map((e, t) => /* @__PURE__ */ m("li", {
					id: `${S}-${t}`,
					role: "option",
					"aria-selected": t === v,
					onClick: () => E(e),
					className: I("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", t === v ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
					children: [/* @__PURE__ */ p("span", {
						className: "shrink-0 opacity-60",
						children: /* @__PURE__ */ p(e.icon, { className: "h-4 w-4" })
					}), /* @__PURE__ */ p("span", {
						className: "text-xs font-medium",
						children: e.label
					})]
				}, e.path))
			})]
		})]
	}) : null;
}
//#endregion
//#region src/components/app-shell/MobileDrawer.tsx
function st({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ p(f, { children: e.logo }) : /* @__PURE__ */ m("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ p(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ p("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function ct({ open: e, onClose: t, items: n, brand: r, currentPath: i, onNavigate: a, className: s }) {
	let c = u(null);
	return B(c, e), o(() => {
		if (!e) return;
		document.body.style.overflow = "hidden";
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), () => {
			document.body.style.overflow = "", document.removeEventListener("keydown", n);
		};
	}, [e, t]), e ? /* @__PURE__ */ m("div", {
		className: "fixed inset-0 z-40 md:hidden",
		children: [/* @__PURE__ */ p("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: t
		}), /* @__PURE__ */ m("div", {
			ref: c,
			className: I("bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", s),
			children: [/* @__PURE__ */ m("div", {
				className: "border-border flex h-11 items-center justify-between border-b px-4",
				children: [/* @__PURE__ */ p(st, { brand: r }), /* @__PURE__ */ p("button", {
					onClick: t,
					className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
					"aria-label": "Close menu",
					children: /* @__PURE__ */ p(N, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ p("nav", {
				className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2",
				children: /* @__PURE__ */ p("ul", {
					className: "space-y-0.5",
					children: n.map((e) => {
						let n = Qe(e, i);
						return /* @__PURE__ */ p("li", { children: /* @__PURE__ */ m("a", {
							href: e.path,
							onClick: (n) => R(n, e.path, a, t),
							"aria-current": n ? "page" : void 0,
							className: I("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", n ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
							children: [/* @__PURE__ */ p(e.icon, { className: "h-4 w-4" }), /* @__PURE__ */ p("span", {
								className: "text-sm",
								children: e.label
							})]
						}) }, e.path);
					})
				})
			})]
		})]
	}) : null;
}
//#endregion
//#region src/config/theme.ts
var lt = [
	{
		value: "dark",
		label: "Dark",
		icon: oe,
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
		icon: se,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: ae,
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
		icon: b,
		preview: {
			bg: "#ffffff",
			fg: "#364153"
		}
	}
], ut = new Set([
	"light",
	"cyberBrutalLight",
	"hashiTheme"
]);
function V(e) {
	return ut.has(e);
}
var dt = lt.filter((e) => V(e.value)), ft = lt.filter((e) => !V(e.value)), H = {
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
}, pt = {
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
}, U = {
	dark: H,
	light: H,
	monokai: H,
	solarized: H,
	cyberBrutalDark: pt,
	cyberBrutalLight: pt,
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
}, mt = [
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
], ht = [
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
function W(e, t, n, r) {
	o(() => {
		if (!e) return;
		let i = (e) => {
			let i = e.target;
			r?.some((e) => e.current?.contains(i)) || n.every((e) => e.current && !e.current.contains(i)) && t();
		}, a = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("mousedown", i), document.addEventListener("keydown", a), () => {
			document.removeEventListener("mousedown", i), document.removeEventListener("keydown", a);
		};
	}, [
		e,
		t,
		n,
		r
	]);
}
//#endregion
//#region src/providers/SettingsContext.ts
var G = n({
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
	return a(G);
}
//#endregion
//#region src/components/ui/Avatar.tsx
var gt = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function _t(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function vt(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function q({ name: e, src: t, size: n = "md", className: r }) {
	return /* @__PURE__ */ p("div", {
		className: I("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", gt[n], r),
		style: { backgroundColor: t ? void 0 : vt(e) },
		"aria-label": e,
		children: t ? /* @__PURE__ */ p("img", {
			src: t,
			alt: e,
			className: "h-full w-full rounded-full object-cover"
		}) : _t(e)
	});
}
//#endregion
//#region src/components/ui/Toast.tsx
var yt = n({ toast: () => {} });
function bt() {
	return a(yt);
}
function xt({ children: e }) {
	let [t, n] = d([]), r = u(0), a = i((e, t, i = 4e3) => {
		let a = r.current++;
		n((n) => [...n, {
			id: a,
			type: e,
			message: t,
			duration: i
		}]);
	}, []), o = i((e) => {
		n((t) => t.filter((t) => t.id !== e));
	}, []);
	return /* @__PURE__ */ m(yt.Provider, {
		value: { toast: a },
		children: [e, /* @__PURE__ */ p("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ p(Tt, {
				toast: e,
				onDismiss: () => o(e.id)
			}, e.id))
		})]
	});
}
var St = {
	success: C,
	error: pe,
	warning: g,
	info: j
}, Ct = {
	success: "bg-green",
	error: "bg-red",
	warning: "bg-yellow",
	info: "bg-blue"
}, wt = {
	success: "text-green",
	error: "text-red",
	warning: "text-yellow",
	info: "text-blue"
};
function Tt({ toast: e, onDismiss: t }) {
	let [n, r] = d(100), i = St[e.type], a = e.type === "error" || e.type === "warning", s = u(t);
	return o(() => {
		s.current = t;
	}, [t]), o(() => {
		let t = Date.now(), n = setInterval(() => {
			let i = Date.now() - t, a = Math.max(0, 100 - i / e.duration * 100);
			r(a), a <= 0 && (s.current(), clearInterval(n));
		}, 50);
		return () => clearInterval(n);
	}, [e.duration]), /* @__PURE__ */ m("div", {
		role: a ? "alert" : "status",
		"aria-live": a ? "assertive" : "polite",
		className: "bg-bg-secondary border-border animate-slide-down pointer-events-auto relative w-80 overflow-hidden rounded-lg border shadow-lg",
		children: [
			/* @__PURE__ */ p("div", { className: I("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", Ct[e.type]) }),
			/* @__PURE__ */ m("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ p(i, { className: I("h-4 w-4 shrink-0", wt[e.type]) }),
					/* @__PURE__ */ p("p", {
						className: "text-text-primary flex-1 text-xs",
						children: e.message
					}),
					/* @__PURE__ */ p("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ p(N, { className: "h-3 w-3" })
					})
				]
			}),
			/* @__PURE__ */ p("div", {
				className: "bg-bg-tertiary mx-3 mb-1 h-0.5 overflow-hidden rounded-md",
				children: /* @__PURE__ */ p("div", {
					className: "bg-border h-full rounded-md transition-all duration-[100ms]",
					style: { width: `${n}%` }
				})
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/Sidebar.tsx
var Et = 140, Dt = 400, Ot = 48;
function kt({ item: e, collapsed: t, currentPath: n, onNavigate: r }) {
	let i = Qe(e, n);
	return /* @__PURE__ */ m("a", {
		href: e.path,
		onClick: (t) => R(t, e.path, r),
		"aria-current": i ? "page" : void 0,
		className: I("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", i ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: t ? e.label : void 0,
		children: [
			i && /* @__PURE__ */ p("div", {
				className: "bg-accent absolute left-0 w-0.5 rounded-md",
				style: {
					top: "0.3em",
					bottom: "0.3em"
				}
			}),
			/* @__PURE__ */ p("span", {
				className: "shrink-0",
				children: /* @__PURE__ */ p(e.icon, { className: "h-3.5 w-3.5" })
			}),
			!t && /* @__PURE__ */ p("span", {
				className: "truncate text-xs",
				children: e.label
			})
		]
	});
}
function At({ brand: e, collapsed: t }) {
	let n = e.icon, r = e.name.trim().charAt(0).toUpperCase();
	return e.logo && !t ? /* @__PURE__ */ p("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: e.logo
	}) : /* @__PURE__ */ m("div", {
		className: I("flex min-w-0 items-center gap-2 px-2", t && "mx-auto justify-center px-0"),
		children: [n ? /* @__PURE__ */ p(n, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : t && r && /* @__PURE__ */ p("span", {
			className: "text-accent shrink-0 text-xs font-bold",
			children: r
		}), !t && /* @__PURE__ */ p("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: e.name
		})]
	});
}
function jt(e) {
	return e.role ?? e.email;
}
function Mt({ collapsed: e, accounts: t, initialAccountIndex: n = 0, onAccountChange: r, onSignOut: a, signOutPath: o, signOutLabel: s = "Sign out", onNavigate: c }) {
	let [l, h] = d(!1), [g, _] = d(() => Math.min(n, Math.max(t.length - 1, 0))), [v, y] = d({
		bottom: 0,
		left: 0
	}), b = u(null), x = u(null);
	W(l, i(() => h(!1), []), [x], [b]);
	let C = t[g] ?? t[0], w = !!(a || o);
	function T() {
		if (!b.current) return;
		let e = b.current.getBoundingClientRect();
		y({
			bottom: window.innerHeight - e.bottom,
			left: e.right + 6
		}), h(!l);
	}
	function E(e, t) {
		_(t), r?.(e, t), h(!1);
	}
	function O() {
		h(!1), a ? a() : o && z(o, c);
	}
	return C ? /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ m("button", {
		ref: b,
		onClick: T,
		className: I("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", e && "justify-center px-0"),
		style: { height: "2.5em" },
		title: e ? C.name : void 0,
		children: [/* @__PURE__ */ p(q, {
			name: C.name,
			src: C.avatarSrc,
			size: "sm"
		}), !e && /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ m("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ p("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: C.name
			}), jt(C) && /* @__PURE__ */ p("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: jt(C)
			})]
		}), /* @__PURE__ */ p(D, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), l && P(/* @__PURE__ */ m("div", {
		ref: x,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-56 rounded-md border py-1 shadow-lg",
		style: {
			bottom: v.bottom,
			left: v.left
		},
		children: [
			/* @__PURE__ */ p("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accounts"
			}),
			t.map((e, t) => /* @__PURE__ */ m("button", {
				onClick: () => E(e, t),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-8 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ p(q, {
						name: e.name,
						src: e.avatarSrc,
						size: "sm"
					}),
					/* @__PURE__ */ m("div", {
						className: "min-w-0 flex-1 text-left",
						children: [/* @__PURE__ */ p("p", {
							className: "text-text-primary truncate text-xs leading-tight",
							children: e.name
						}), e.email && /* @__PURE__ */ p("p", {
							className: "text-2xs text-text-tertiary truncate leading-tight",
							children: e.email
						})]
					}),
					t === g && /* @__PURE__ */ p(S, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, `${e.name}-${e.email ?? t}`)),
			w && /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ m("button", {
				onClick: O,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ p(ne, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ p("span", { children: s })]
			})] })
		]
	}), document.body)] }) : null;
}
function Nt({ collapsed: e, settingsPath: t, settingsLabel: n = "All Settings", onOpenSettings: r, onNavigate: a }) {
	let [o, s] = d(!1), [c, l] = d({
		bottom: 0,
		left: 0
	}), g = u(null), _ = u(null), { accentColor: v, setAccentColor: y, reducedMotion: b, setReducedMotion: x, colorMode: C, setColorMode: w } = K(), { toast: T } = bt(), E = !!(t || r);
	W(o, i(() => s(!1), []), [_], [g]);
	function D() {
		if (!g.current) return;
		let e = g.current.getBoundingClientRect();
		l({
			bottom: window.innerHeight - e.bottom,
			left: e.right + 6
		}), s(!o);
	}
	function O() {
		s(!1), r ? r() : t && z(t, a);
	}
	return /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ m("button", {
		ref: g,
		onClick: D,
		className: I("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", e ? "mx-auto w-[2em] justify-center" : "", o ? "bg-accent-muted text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: e ? "Settings" : void 0,
		children: [/* @__PURE__ */ p(ue, { className: "h-3.5 w-3.5 shrink-0" }), !e && /* @__PURE__ */ p("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), o && P(/* @__PURE__ */ m("div", {
		ref: _,
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-64 rounded-md border py-1 shadow-lg",
		style: {
			bottom: c.bottom,
			left: c.left
		},
		children: [
			/* @__PURE__ */ p("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Mode"
			}),
			[
				{
					value: "dark",
					label: "Dark",
					Icon: oe
				},
				{
					value: "light",
					label: "Light",
					Icon: de
				},
				{
					value: "system",
					label: "System",
					Icon: ae
				}
			].map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ m("button", {
				onClick: () => w(e),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ p(n, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ p("span", {
						className: "flex-1 text-left",
						children: t
					}),
					C === e && /* @__PURE__ */ p(S, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, e)),
			/* @__PURE__ */ p("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ p("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accent"
			}),
			/* @__PURE__ */ p("div", {
				className: "flex flex-wrap gap-1.5 px-3 pb-2",
				children: ht.map((e) => /* @__PURE__ */ p("button", {
					onClick: () => y(e.value),
					className: I("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", v === e.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
					style: {
						backgroundColor: e.color,
						...v === e.value ? { "--utility-ring-color": e.color } : {}
					},
					title: e.value.charAt(0).toUpperCase() + e.value.slice(1)
				}, e.value))
			}),
			/* @__PURE__ */ p("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ m("button", {
				onClick: () => {
					x(!b), T("info", b ? "Animations enabled" : "Animations disabled");
				},
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ p(h, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ p("span", {
						className: "flex-1 text-left",
						children: "Reduced Motion"
					}),
					b && /* @__PURE__ */ p(S, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}),
			E && /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ m("button", {
				onClick: O,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ p(ue, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ p("span", {
					className: "flex-1 text-left",
					children: n
				})]
			})] })
		]
	}), document.body)] });
}
function Pt({ navSections: e, brand: t, accounts: n = [], initialAccountIndex: r, onAccountChange: a, onSignOut: o, signOutPath: s, signOutLabel: c, settingsPath: l, settingsLabel: f, onOpenSettings: h, currentPath: g, onNavigate: _, className: v }) {
	let { sidebarCollapsed: y, sidebarWidth: b, setSidebarWidth: x } = K(), [S, C] = d(/* @__PURE__ */ new Set()), T = u(null), E = u(!1), D = i((e) => {
		if (y) return;
		e.preventDefault(), E.current = !0, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!E.current || !T.current) return;
			let t = T.current.getBoundingClientRect(), n = e.clientX - t.left;
			x(Math.max(Et, Math.min(n, Dt)));
		}, n = () => {
			E.current = !1, document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
		};
		document.addEventListener("mousemove", t), document.addEventListener("mouseup", n);
	}, [y, x]);
	function O(e) {
		C((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	return /* @__PURE__ */ m("aside", {
		ref: T,
		className: I("bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", "transition-[width] duration-[200ms] ease-out", "border-border", v),
		style: { width: y ? Ot : b },
		children: [
			!y && /* @__PURE__ */ p("div", {
				onMouseDown: D,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ p("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ p(At, {
					brand: t,
					collapsed: y
				})
			}),
			/* @__PURE__ */ p("nav", {
				className: "flex-1 overflow-y-auto px-2 py-2",
				children: e.map((e, t) => {
					let n = S.has(e.title);
					return /* @__PURE__ */ m("div", {
						className: "mb-4",
						children: [y ? t > 0 && /* @__PURE__ */ p("hr", { className: "border-border mx-auto my-1.5 w-4/5" }) : /* @__PURE__ */ m("button", {
							onClick: () => O(e.title),
							className: "text-2xs-f text-text-tertiary hover:text-text-secondary font-label flex w-full cursor-pointer items-center justify-between px-2 font-semibold tracking-wider uppercase",
							style: {
								paddingTop: "0.35em",
								paddingBottom: "0.35em"
							},
							children: [e.title, /* @__PURE__ */ p(w, { className: I("h-3 w-3 transition-transform", n && "-rotate-90") })]
						}), (!n || y) && /* @__PURE__ */ p("ul", {
							className: "flex flex-col gap-1",
							children: e.items.map((e) => /* @__PURE__ */ p("li", { children: /* @__PURE__ */ p(kt, {
								item: e,
								collapsed: y,
								currentPath: g,
								onNavigate: _
							}) }, e.path))
						})]
					}, e.title);
				})
			}),
			/* @__PURE__ */ m("div", {
				className: "shrink-0 px-2 py-1.5",
				children: [/* @__PURE__ */ p(Nt, {
					collapsed: y,
					settingsPath: l,
					settingsLabel: f,
					onOpenSettings: h,
					onNavigate: _
				}), n.length > 0 && /* @__PURE__ */ p("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ p(Mt, {
						collapsed: y,
						accounts: n,
						initialAccountIndex: r,
						onAccountChange: a,
						onSignOut: o,
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
function Ft(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function It({ homeLabel: e = "Dashboard", labels: t = {}, parents: n = {}, currentPath: r = "/", onNavigate: i, className: a }) {
	let o = r.split("?")[0].split("/").filter(Boolean), s = [{
		label: e,
		path: "/"
	}, ...o.map((e, r) => {
		let i = o[r - 1];
		return {
			label: t[e] || n[i] || Ft(e),
			path: "/" + o.slice(0, r + 1).join("/")
		};
	})];
	return /* @__PURE__ */ p("nav", {
		"aria-label": "Breadcrumb",
		className: I("font-navigation flex items-center gap-1 text-xs", a),
		children: s.map((e, t) => {
			let n = t === s.length - 1;
			return /* @__PURE__ */ m("span", {
				className: "flex items-center gap-1",
				children: [t > 0 && /* @__PURE__ */ p(E, { className: "text-text-tertiary h-3 w-3" }), n ? /* @__PURE__ */ p("span", {
					className: "text-text-primary font-medium",
					children: e.label
				}) : /* @__PURE__ */ p("a", {
					href: e.path,
					onClick: (t) => R(t, e.path, i),
					className: I("text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]"),
					children: e.label
				})]
			}, e.path);
		})
	});
}
//#endregion
//#region src/components/app-shell/TopBar.tsx
var Lt = [
	"dark",
	"light",
	"system"
], Rt = {
	dark: oe,
	light: de,
	system: ae
}, zt = {
	dark: "Dark",
	light: "Light",
	system: "System"
};
function Bt({ onMobileMenuToggle: e, breadcrumbs: t, showCommandTrigger: n = !0, commandTriggerLabel: r = "Search", commandShortcut: i = nt, currentPath: a, onNavigate: o, onCommandTrigger: s }) {
	let { sidebarCollapsed: c, setSidebarCollapsed: l, colorMode: u, setColorMode: d } = K();
	function h() {
		d(Lt[(Lt.indexOf(u) + 1) % Lt.length]);
	}
	let g = Rt[u];
	return /* @__PURE__ */ m("header", {
		className: "border-border bg-bg-secondary font-navigation flex h-9 shrink-0 items-center justify-between border-b px-3",
		style: { height: "var(--topbar-height)" },
		children: [/* @__PURE__ */ m("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ p("button", {
					onClick: e,
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded md:hidden",
					"aria-label": "Toggle menu",
					children: /* @__PURE__ */ p(re, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ p("button", {
					onClick: () => l(!c),
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover hidden h-7 w-7 cursor-pointer items-center justify-center rounded md:flex",
					"aria-label": c ? "Expand sidebar" : "Collapse sidebar",
					children: p(c ? le : ce, { className: "h-4 w-4" })
				}),
				t !== !1 && /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", { className: "bg-border hidden h-4 w-px md:block" }), /* @__PURE__ */ p(It, {
					...t,
					currentPath: a,
					onNavigate: o
				})] })
			]
		}), /* @__PURE__ */ m("div", {
			className: "flex items-center gap-1",
			children: [n && /* @__PURE__ */ m("button", {
				onClick: s ?? (() => rt()),
				className: "text-text-tertiary bg-bg-primary border-border hover:border-border-strong hover:text-text-secondary font-navigation hidden h-6 cursor-pointer items-center gap-2 rounded-md border px-2 transition-colors duration-[100ms] sm:flex",
				children: [
					/* @__PURE__ */ p(M, { className: "h-3 w-3" }),
					/* @__PURE__ */ p("span", {
						className: "text-2xs",
						children: r
					}),
					/* @__PURE__ */ p("kbd", {
						className: "text-2xs font-mono opacity-60",
						children: i.label
					})
				]
			}), /* @__PURE__ */ p("button", {
				onClick: h,
				className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded",
				"aria-label": `Color mode: ${zt[u]}. Click to cycle.`,
				title: zt[u],
				children: /* @__PURE__ */ p(g, { className: "h-4 w-4" })
			})]
		})]
	});
}
//#endregion
//#region src/components/app-shell/AppShell.tsx
function Vt({ children: e, navSections: t, brand: n, accounts: r, bottomNavItems: i = [], commandItems: a, breadcrumbs: o, initialAccountIndex: s, onAccountChange: c, onSignOut: u, signOutPath: f, signOutLabel: h, settingsPath: g, settingsLabel: _, onOpenSettings: v, showCommandPalette: y = !0, showCommandTrigger: b = !0, commandTriggerLabel: x, commandShortcut: S, currentPath: C, onNavigate: w, mainClassName: T, className: E }) {
	let [D, O] = d(!1), k = l(() => t.flatMap((e) => e.items), [t]), A = a ?? k;
	return /* @__PURE__ */ m("div", {
		className: I("bg-bg-primary flex h-svh overflow-hidden", E),
		children: [
			/* @__PURE__ */ p("a", {
				href: "#main-content",
				className: "skip-link",
				children: "Skip to content"
			}),
			/* @__PURE__ */ p(Pt, {
				navSections: t,
				brand: n,
				accounts: r,
				initialAccountIndex: s,
				onAccountChange: c,
				onSignOut: u,
				signOutPath: f,
				signOutLabel: h,
				settingsPath: g,
				settingsLabel: _,
				onOpenSettings: v,
				currentPath: C,
				onNavigate: w
			}),
			/* @__PURE__ */ m("div", {
				className: "flex min-w-0 flex-1 flex-col",
				children: [/* @__PURE__ */ p(Bt, {
					onMobileMenuToggle: () => O(!0),
					breadcrumbs: o,
					showCommandTrigger: y && b,
					commandTriggerLabel: x,
					commandShortcut: S,
					currentPath: C,
					onNavigate: w
				}), /* @__PURE__ */ p("main", {
					id: "main-content",
					className: I("flex-1 overflow-y-auto p-4 pb-20 md:p-6 md:pb-6", T),
					children: e
				})]
			}),
			/* @__PURE__ */ p($e, {
				items: i,
				currentPath: C,
				onNavigate: w
			}),
			/* @__PURE__ */ p(ct, {
				open: D,
				onClose: () => O(!1),
				items: k,
				brand: n,
				currentPath: C,
				onNavigate: w
			}),
			y && A.length > 0 && /* @__PURE__ */ p(ot, {
				items: A,
				shortcut: S,
				onNavigate: w
			})
		]
	});
}
//#endregion
//#region src/components/app-shell/AuthLayout.tsx
function Ht({ children: e, className: t }) {
	return /* @__PURE__ */ m("div", {
		className: I("bg-bg-primary relative flex min-h-svh items-center justify-center p-4", t),
		children: [/* @__PURE__ */ p("div", {
			className: "pointer-events-none absolute inset-0 opacity-30",
			style: { background: "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)" }
		}), e]
	});
}
//#endregion
//#region src/components/app-shell/BackLink.tsx
function Ut({ to: e, children: t, onNavigate: n, className: r }) {
	return /* @__PURE__ */ m("a", {
		href: e,
		onClick: (t) => R(t, e, n),
		className: I("inline-flex items-center gap-1.5", "text-text-tertiary text-xs", "hover:text-text-primary", r),
		children: [/* @__PURE__ */ p(v, { className: "h-3.5 w-3.5" }), t]
	});
}
//#endregion
//#region src/components/ui/Checkbox.tsx
function Wt({ checked: e, indeterminate: t, onChange: n, label: r, disabled: i, className: a }) {
	let o = e || t;
	return /* @__PURE__ */ m("label", {
		className: I("flex w-fit items-center gap-2.5", i ? "cursor-not-allowed opacity-40" : "cursor-pointer", a),
		children: [/* @__PURE__ */ p("button", {
			role: "checkbox",
			"aria-checked": t ? "mixed" : e,
			disabled: i,
			onClick: () => n(!e),
			className: I("flex h-4 w-4 shrink-0 items-center justify-center rounded border", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", o ? "bg-accent border-accent" : "bg-bg-secondary border-border", !i && "cursor-pointer"),
			children: t ? /* @__PURE__ */ p(ie, { className: "text-text-on-accent h-3 w-3" }) : e ? /* @__PURE__ */ p(S, { className: "text-text-on-accent h-3 w-3" }) : null
		}), r && /* @__PURE__ */ p("span", {
			className: "text-text-primary text-xs",
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/FilterButton.tsx
var Gt = r(function({ icon: e, children: t, className: n, ...r }, i) {
	return /* @__PURE__ */ m("button", {
		ref: i,
		className: I("flex h-7 cursor-pointer items-center gap-1.5 rounded-md px-2.5", "border-border bg-bg-secondary text-text-secondary border", "hover:bg-bg-hover hover:border-border-strong", "text-xs", "transition-colors duration-[100ms]", n),
		...r,
		children: [/* @__PURE__ */ p(e, { className: "h-3.5 w-3.5 shrink-0" }), t && /* @__PURE__ */ p("span", {
			className: "hidden sm:inline",
			children: t
		})]
	});
});
//#endregion
//#region src/components/tables/ColumnPicker.tsx
function Kt({ columns: e, hidden: t, onToggle: n }) {
	let [r, a] = d(!1), o = u(null);
	return W(r, i(() => a(!1), []), [o]), /* @__PURE__ */ m("div", {
		className: "relative",
		ref: o,
		children: [/* @__PURE__ */ p(Gt, {
			icon: O,
			onClick: () => a(!r),
			children: "Columns"
		}), r && /* @__PURE__ */ m("div", {
			className: "bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 w-48 rounded-md border py-1 shadow-lg",
			children: [/* @__PURE__ */ p("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Toggle columns"
			}), e.map((e) => /* @__PURE__ */ m("button", {
				onClick: () => n(e.key),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ p(Wt, {
					checked: !t.has(e.key),
					onChange: () => n(e.key)
				}), /* @__PURE__ */ p("span", { children: e.header })]
			}, e.key))]
		})]
	});
}
//#endregion
//#region src/components/tables/Pagination.tsx
function qt({ page: e, totalPages: t, onPageChange: n }) {
	if (t <= 1) return null;
	let r = [];
	for (let n = 1; n <= t; n++) n === 1 || n === t || n >= e - 1 && n <= e + 1 ? r.push(n) : r[r.length - 1] !== "ellipsis" && r.push("ellipsis");
	return /* @__PURE__ */ m("div", {
		className: "flex items-center gap-1",
		children: [
			/* @__PURE__ */ p("button", {
				disabled: e === 1,
				onClick: () => n(e - 1),
				className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30",
				"aria-label": "Previous page",
				children: /* @__PURE__ */ p(T, { className: "h-3.5 w-3.5" })
			}),
			r.map((t, r) => t === "ellipsis" ? /* @__PURE__ */ p("span", {
				className: "text-text-tertiary flex h-7 w-7 items-center justify-center text-xs",
				children: "..."
			}, `e${r}`) : /* @__PURE__ */ p("button", {
				onClick: () => n(t),
				className: I("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", "transition-colors duration-[100ms]", t === e ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ p("button", {
				disabled: e === t,
				onClick: () => n(e + 1),
				className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30",
				"aria-label": "Next page",
				children: /* @__PURE__ */ p(E, { className: "h-3.5 w-3.5" })
			})
		]
	});
}
//#endregion
//#region src/components/tables/sortRows.ts
function Jt(e, t, n, r) {
	if (!n) return e;
	let i = t.find((e) => e.key === n)?.getValue;
	return i ? [...e].sort((e, t) => {
		let n = String(i(e)), a = String(i(t)), o = n.localeCompare(a, void 0, { numeric: !0 });
		return r === "asc" ? o : -o;
	}) : e;
}
//#endregion
//#region src/components/tables/ResourceTable.tsx
function Yt({ data: e, columns: t, getRowId: n, onRowClick: r, emptyMessage: i = "No data", sortKey: a, sortDir: o, onSortChange: s }) {
	let c = s !== void 0, [u, f] = d(null), [h, g] = d("asc"), v = c ? a ?? null : u, b = c ? o ?? "asc" : h, x = l(() => c ? e : Jt(e, t, v, b), [
		c,
		e,
		t,
		v,
		b
	]);
	function S(e) {
		let t = v === e && b === "asc" ? "desc" : "asc";
		if (c) {
			s(e, t);
			return;
		}
		f(e), g(t);
	}
	return /* @__PURE__ */ p("div", {
		className: "border-border overflow-x-auto rounded-md border",
		children: /* @__PURE__ */ m("table", {
			className: "font-data w-full text-xs",
			children: [/* @__PURE__ */ p("thead", { children: /* @__PURE__ */ p("tr", {
				className: "border-border bg-bg-secondary border-b",
				children: t.map((e) => /* @__PURE__ */ p("th", {
					className: I("text-2xs text-text-tertiary font-label h-7 px-3 text-left font-semibold tracking-wider uppercase", e.sortable && "hover:text-text-secondary cursor-pointer select-none"),
					style: { width: e.width },
					onClick: e.sortable ? () => S(e.key) : void 0,
					children: /* @__PURE__ */ m("span", {
						className: "inline-flex items-center gap-1",
						children: [e.header, e.sortable && v === e.key && p(b === "asc" ? y : _, { className: "h-3 w-3" })]
					})
				}, e.key))
			}) }), /* @__PURE__ */ p("tbody", { children: x.length === 0 ? /* @__PURE__ */ p("tr", { children: /* @__PURE__ */ p("td", {
				colSpan: t.length,
				className: "text-text-tertiary h-32 text-center",
				children: i
			}) }) : x.map((e) => /* @__PURE__ */ p("tr", {
				className: I("border-border h-8 border-b last:border-b-0", "hover:bg-bg-hover", r && "cursor-pointer"),
				onClick: r ? () => r(e) : void 0,
				children: t.map((t) => /* @__PURE__ */ p("td", {
					className: I("text-text-primary px-3 whitespace-nowrap", t.cellClassName),
					onClick: t.interactive && r ? (e) => e.stopPropagation() : void 0,
					children: t.render(e)
				}, t.key))
			}, n(e))) })]
		})
	});
}
//#endregion
//#region src/components/ui/Alert.tsx
var Xt = {
	success: {
		bg: "bg-green-muted",
		border: "border-green/30",
		icon: C,
		iconColor: "text-green"
	},
	warning: {
		bg: "bg-yellow-muted",
		border: "border-yellow/30",
		icon: g,
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
		icon: j,
		iconColor: "text-blue"
	}
};
function Zt({ type: e, title: t, children: n, dismissible: r, className: i }) {
	let [a, o] = d(!1);
	if (a) return null;
	let s = Xt[e], c = s.icon;
	return /* @__PURE__ */ m("div", {
		className: I("flex gap-2.5 rounded-md border p-3", s.bg, s.border, i),
		children: [
			/* @__PURE__ */ p(c, { className: I("mt-0.5 h-4 w-4 shrink-0", s.iconColor) }),
			/* @__PURE__ */ m("div", {
				className: "min-w-0 flex-1",
				children: [t && /* @__PURE__ */ p("p", {
					className: "text-text-primary mb-0.5 text-xs font-semibold",
					children: t
				}), /* @__PURE__ */ p("div", {
					className: "text-text-secondary text-xs",
					children: n
				})]
			}),
			r && /* @__PURE__ */ p("button", {
				onClick: () => o(!0),
				className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ p(N, { className: "h-3 w-3" })
			})
		]
	});
}
//#endregion
//#region src/components/ui/AuthCard.tsx
function Qt({ title: e, subtitle: t, icon: n, children: r, footer: i, className: a }) {
	return /* @__PURE__ */ p("div", {
		className: I("relative z-10 w-full max-w-sm", a),
		children: /* @__PURE__ */ m("div", {
			className: "bg-bg-secondary border-border rounded-lg border p-8 shadow-lg",
			children: [
				/* @__PURE__ */ m("div", {
					className: "mb-6 flex flex-col items-center",
					children: [
						n && /* @__PURE__ */ p("div", {
							className: "bg-accent-muted mb-3 flex h-12 w-12 items-center justify-center rounded-xl",
							children: /* @__PURE__ */ p(n, { className: "text-accent h-6 w-6" })
						}),
						/* @__PURE__ */ p("h1", {
							className: "text-text-primary text-lg font-semibold",
							children: e
						}),
						t && /* @__PURE__ */ p("p", {
							className: "text-text-secondary mt-1 text-xs",
							children: t
						})
					]
				}),
				r,
				i && /* @__PURE__ */ p("p", {
					className: "text-text-secondary mt-6 text-center text-xs",
					children: i
				})
			]
		})
	});
}
//#endregion
//#region src/components/ui/AuthorByline.tsx
function $t({ name: e, meta: t, nameAppend: n, size: r = "sm", className: i }) {
	return /* @__PURE__ */ m("div", {
		className: I("flex items-center gap-2", i),
		children: [/* @__PURE__ */ p(q, {
			name: e,
			size: "sm"
		}), /* @__PURE__ */ m("div", { children: [/* @__PURE__ */ m("p", {
			className: I("text-text-primary font-label font-medium", r === "md" ? "text-xs" : "text-2xs"),
			children: [e, n]
		}), t && /* @__PURE__ */ p("p", {
			className: "text-text-tertiary font-label text-2xs",
			children: t
		})] })]
	});
}
//#endregion
//#region src/components/ui/Badge.tsx
var en = {
	green: "bg-green-muted text-green",
	yellow: "bg-yellow-muted text-yellow",
	red: "bg-red-muted text-red",
	blue: "bg-blue-muted text-blue",
	purple: "bg-purple-muted text-purple",
	gray: "bg-bg-hover text-text-secondary"
}, tn = {
	green: "bg-green",
	yellow: "bg-yellow",
	red: "bg-red",
	blue: "bg-blue",
	purple: "bg-purple",
	gray: "bg-text-tertiary"
};
function nn({ color: e = "gray", dot: t, children: n, className: r }) {
	return /* @__PURE__ */ m("span", {
		className: I("font-label text-2xs inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-medium", en[e], r),
		children: [t && /* @__PURE__ */ p("span", { className: I("h-1.5 w-1.5 rounded-full", tn[e]) }), n]
	});
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
	sm: "h-7 px-2.5 text-xs gap-1.5",
	md: "h-8 px-3 text-xs gap-2",
	lg: "h-9 px-4 text-sm gap-2"
}, on = {
	sm: "h-7 w-7",
	md: "h-8 w-8",
	lg: "h-9 w-9"
}, sn = {
	sm: "h-3.5 w-3.5",
	md: "h-3.5 w-3.5",
	lg: "h-4 w-4"
}, cn = {
	sm: "hidden sm:inline",
	md: "hidden md:inline",
	lg: "hidden lg:inline"
}, ln = {
	sm: {
		sm: "px-1.5 sm:px-2.5",
		md: "px-2 sm:px-3",
		lg: "px-2.5 sm:px-4"
	},
	md: {
		sm: "px-1.5 md:px-2.5",
		md: "px-2 md:px-3",
		lg: "px-2.5 md:px-4"
	},
	lg: {
		sm: "px-1.5 lg:px-2.5",
		md: "px-2 lg:px-3",
		lg: "px-2.5 lg:px-4"
	}
}, J = r(({ variant: e = "secondary", size: t = "md", loading: n, icon: r, hideLabel: i, className: a, children: o, disabled: s, ...c }, l) => {
	let u = e === "icon", d = i === !0 ? "sm" : i === !1 ? void 0 : i;
	return /* @__PURE__ */ m("button", {
		ref: l,
		disabled: s || n,
		className: I("inline-flex items-center justify-center rounded-md font-medium", "font-control", "transition-colors duration-[100ms] ease-out", "cursor-pointer", "disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", rn[e], u ? on[t] : an[t], d && !u && ln[d]?.[t], a),
		...c,
		children: [
			n && /* @__PURE__ */ p(te, { className: "h-3.5 w-3.5 animate-spin" }),
			r && !n && /* @__PURE__ */ p(r, { className: sn[t] }),
			o && (d ? /* @__PURE__ */ p("span", {
				className: cn[d],
				children: o
			}) : o)
		]
	});
});
J.displayName = "Button";
//#endregion
//#region src/components/ui/CalendarGrid.tsx
var un = [
	"Mo",
	"Tu",
	"We",
	"Th",
	"Fr",
	"Sa",
	"Su"
], dn = [
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
function Y(e, t) {
	return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function fn(e, t, n) {
	if (!t || !n) return !1;
	let r = e.getTime(), i = Math.min(t.getTime(), n.getTime()), a = Math.max(t.getTime(), n.getTime());
	return r > i && r < a;
}
function pn(e, t) {
	return new Date(e, t + 1, 0).getDate();
}
function mn(e, t) {
	let n = new Date(e, t, 1).getDay();
	return n === 0 ? 6 : n - 1;
}
function X({ year: e, month: t, selected: n, rangeStart: r, rangeEnd: i, hoverDate: a, onSelect: o, onMonthChange: s, onHover: c, minDate: l, maxDate: f }) {
	let h = pn(e, t), g = mn(e, t), _ = /* @__PURE__ */ new Date(), v = u(null), [y, b] = d(null);
	function x() {
		return y !== null && y >= 1 && y <= h ? y : n && n.getFullYear() === e && n.getMonth() === t ? n.getDate() : r && r.getFullYear() === e && r.getMonth() === t ? r.getDate() : _.getFullYear() === e && _.getMonth() === t ? _.getDate() : 1;
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
		r >= 1 && r <= h && (b(r), (v.current?.querySelector(`[data-day="${r}"]`))?.focus());
	}
	function w() {
		t === 0 ? s(e - 1, 11) : s(e, t - 1);
	}
	function D() {
		t === 11 ? s(e + 1, 0) : s(e, t + 1);
	}
	let O = [];
	for (let e = 0; e < g; e++) O.push(null);
	for (let e = 1; e <= h; e++) O.push(e);
	return /* @__PURE__ */ m("div", {
		className: "w-[252px]",
		ref: v,
		children: [/* @__PURE__ */ m("div", {
			className: "mb-2 flex items-center justify-between",
			children: [
				/* @__PURE__ */ p("button", {
					type: "button",
					onClick: w,
					"aria-label": "Previous month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ p(T, { className: "h-3.5 w-3.5" })
				}),
				/* @__PURE__ */ m("span", {
					className: "text-text-primary text-xs font-semibold",
					"aria-live": "polite",
					children: [
						dn[t],
						" ",
						e
					]
				}),
				/* @__PURE__ */ p("button", {
					type: "button",
					onClick: D,
					"aria-label": "Next month",
					className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
					children: /* @__PURE__ */ p(E, { className: "h-3.5 w-3.5" })
				})
			]
		}), /* @__PURE__ */ m("div", {
			className: "grid grid-cols-7 gap-0",
			children: [un.map((e) => /* @__PURE__ */ p("div", {
				className: "text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium",
				children: e
			}, e)), O.map((s, u) => {
				if (s === null) return /* @__PURE__ */ p("div", { className: "h-8" }, `empty-${u}`);
				let d = new Date(e, t, s), m = Y(d, _), h = n ? Y(d, n) : !1, g = r ? Y(d, r) : !1, v = i ? Y(d, i) : !1, y = fn(d, r ?? null, i ?? a ?? null), b = l && d < l || f && d > f;
				return /* @__PURE__ */ p("button", {
					type: "button",
					"data-day": s,
					disabled: !!b,
					tabIndex: s === S ? 0 : -1,
					"aria-label": `${dn[t]} ${s}, ${e}`,
					"aria-current": m ? "date" : void 0,
					onClick: () => o(d),
					onKeyDown: (e) => C(e, s),
					onMouseEnter: () => c?.(d),
					onMouseLeave: () => c?.(null),
					className: I("flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]", "rounded-md", b && "cursor-not-allowed opacity-30", !b && !h && !g && !v && !y && "hover:bg-bg-hover text-text-primary", m && !h && !g && !v && "text-accent font-semibold", (h || g || v) && "bg-accent text-text-on-accent font-semibold", y && !h && !g && !v && "bg-accent-muted text-accent"),
					children: s
				}, s);
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/Card.tsx
function hn({ children: e, className: t, header: n, footer: r }) {
	return /* @__PURE__ */ m("div", {
		className: I("bg-bg-secondary border-border overflow-hidden rounded-md border", t),
		children: [
			n && /* @__PURE__ */ p("div", {
				className: "border-border border-b px-3 py-2.5",
				children: n
			}),
			/* @__PURE__ */ p("div", {
				className: "p-3",
				children: e
			}),
			r && /* @__PURE__ */ p("div", {
				className: "border-border bg-bg-primary/50 border-t px-3 py-2.5",
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/ui/Combobox.tsx
function gn({ options: e, value: t, onChange: n, placeholder: r = "Select...", label: a, className: o }) {
	let [c, l] = d(!1), [f, h] = d(""), [g, _] = d(0), v = u(null), y = u(null), b = s(), x = e.find((e) => e.value === t), C = e.filter((e) => e.label.toLowerCase().includes(f.toLowerCase()));
	function T(e) {
		h(e), _(0);
	}
	function E(e) {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), _((e) => Math.min(e + 1, C.length - 1));
				break;
			case "ArrowUp":
				e.preventDefault(), _((e) => Math.max(e - 1, 0));
				break;
			case "Enter":
				e.preventDefault(), C[g] && (n(C[g].value), l(!1));
				break;
			case "Escape":
				l(!1);
				break;
		}
	}
	W(c, i(() => l(!1), []), [v]);
	function D() {
		l(!0), h(""), _(0), setTimeout(() => y.current?.focus(), 0);
	}
	return /* @__PURE__ */ m("div", {
		className: I("flex flex-col gap-1.5", o),
		ref: v,
		children: [a && /* @__PURE__ */ p("span", {
			className: "text-text-secondary font-label text-xs font-medium",
			children: a
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			role: "combobox",
			"aria-expanded": c,
			"aria-haspopup": "listbox",
			children: [
				/* @__PURE__ */ p("button", {
					type: "button",
					onClick: () => c ? l(!1) : D(),
					className: I("font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
					children: x ? x.label : /* @__PURE__ */ p("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ p(w, { className: I("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", c && "rotate-180") }),
				c && /* @__PURE__ */ m("div", {
					className: "bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-md border shadow-lg",
					children: [/* @__PURE__ */ p("div", {
						className: "border-border border-b p-1.5",
						children: /* @__PURE__ */ m("div", {
							className: "relative",
							children: [/* @__PURE__ */ p(M, { className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2" }), /* @__PURE__ */ p("input", {
								ref: y,
								type: "text",
								"aria-label": "Search options",
								"aria-controls": b,
								"aria-activedescendant": C[g] ? `${b}-${g}` : void 0,
								"aria-autocomplete": "list",
								value: f,
								onChange: (e) => T(e.target.value),
								onKeyDown: E,
								placeholder: "Search...",
								className: "bg-bg-secondary text-text-primary border-border placeholder:text-text-disabled focus:border-accent font-control h-7 w-full rounded border pr-2 pl-7 text-xs focus:outline-none"
							})]
						})
					}), /* @__PURE__ */ p("ul", {
						id: b,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: C.length === 0 ? /* @__PURE__ */ p("li", {
							className: "text-text-tertiary px-3 py-2 text-center text-xs",
							children: "No results"
						}) : C.map((e, r) => /* @__PURE__ */ m("li", {
							id: `${b}-${r}`,
							role: "option",
							"aria-selected": e.value === t,
							onClick: () => {
								n(e.value), l(!1);
							},
							onMouseEnter: () => _(r),
							className: I("font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs", "transition-colors duration-[100ms]", r === g ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
							children: [/* @__PURE__ */ p("span", {
								className: "flex-1 truncate",
								children: e.label
							}), e.value === t && /* @__PURE__ */ p(S, { className: "h-3 w-3 shrink-0" })]
						}, e.value))
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/DangerZone.tsx
function _n({ title: e = "Danger Zone", description: t, children: n, className: r }) {
	return /* @__PURE__ */ m("div", {
		className: I("border-border mt-8 border-t pt-6", r),
		children: [
			/* @__PURE__ */ p("h3", {
				className: "text-red mb-2 text-xs font-semibold",
				children: e
			}),
			t && /* @__PURE__ */ p("p", {
				className: "text-text-secondary mb-3 text-xs",
				children: t
			}),
			n
		]
	});
}
//#endregion
//#region src/hooks/useDropUp.ts
function vn(e, t, n) {
	let [r, i] = d(!1);
	return c(() => {
		if (!e || !n.current || !t.current) return;
		let r = t.current.getBoundingClientRect(), a = n.current.getBoundingClientRect();
		i(window.innerHeight - r.bottom < a.height + 8);
	}, [e]), r;
}
//#endregion
//#region src/components/ui/DatePicker.tsx
function yn(e) {
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
function bn({ label: e, value: t, onChange: n, placeholder: r = "Select date...", format: a = yn }) {
	let [o, s] = d(!1), c = u(null), l = u(null), f = vn(o, c, l), h = /* @__PURE__ */ new Date(), [g, _] = d(t?.getFullYear() ?? h.getFullYear()), [v, y] = d(t?.getMonth() ?? h.getMonth());
	W(o, i(() => s(!1), []), [c]);
	function b(e) {
		n(e), s(!1);
	}
	function S() {
		!o && t && (_(t.getFullYear()), y(t.getMonth())), s(!o);
	}
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-1.5",
		ref: c,
		children: [e && /* @__PURE__ */ p("span", {
			className: "text-text-secondary text-xs font-medium",
			children: e
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ p("button", {
					type: "button",
					onClick: S,
					"aria-haspopup": "dialog",
					"aria-expanded": o,
					className: I("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: t ? a(t) : /* @__PURE__ */ p("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ p(x, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				o && /* @__PURE__ */ p("div", {
					ref: l,
					role: "dialog",
					"aria-label": "Choose date",
					className: I("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", f ? "bottom-full mb-1" : "top-full mt-1"),
					children: /* @__PURE__ */ p(X, {
						year: g,
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
var xn = [
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
function Sn(e) {
	return `${xn[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
}
function Cn(e) {
	return e.start && e.end ? `${Sn(e.start)} – ${Sn(e.end)}` : e.start ? Sn(e.start) : "";
}
function wn({ label: e, value: t, onChange: n, placeholder: r = "Select date range..." }) {
	let [a, o] = d(!1), s = u(null), c = u(null), l = vn(a, s, c), f = /* @__PURE__ */ new Date(), [h, g] = d(t.start?.getFullYear() ?? f.getFullYear()), [_, v] = d(t.start?.getMonth() ?? f.getMonth()), [y, b] = d(null), [S, C] = d("start"), [w, T] = d(t.start), [E, D] = d(t.end);
	W(a, i(() => o(!1), []), [s]);
	let O = _ === 11 ? h + 1 : h, k = _ === 11 ? 0 : _ + 1;
	function A() {
		a || (T(t.start), D(t.end), C((t.start && t.end, "start")), t.start && (g(t.start.getFullYear()), v(t.start.getMonth()))), o(!a);
	}
	function ee(e) {
		S === "start" ? (T(e), D(null), C("end")) : (w && e < w ? (D(w), T(e)) : D(e), C("start"), n({
			start: w && e < w ? e : w,
			end: w && e < w ? w : e
		}), o(!1));
	}
	function j() {
		_ === 0 ? (g(h - 1), v(11)) : v(_ - 1);
	}
	function te() {
		_ === 11 ? (g(h + 1), v(0)) : v(_ + 1);
	}
	let ne = t.start || t.end ? Cn(t) : "";
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-1.5",
		ref: s,
		children: [e && /* @__PURE__ */ p("span", {
			className: "text-text-secondary text-xs font-medium",
			children: e
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ p("button", {
					type: "button",
					onClick: A,
					"aria-haspopup": "dialog",
					"aria-expanded": a,
					className: I("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: ne || /* @__PURE__ */ p("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ p(x, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				a && /* @__PURE__ */ m("div", {
					ref: c,
					role: "dialog",
					"aria-label": "Choose date range",
					className: I("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", l ? "bottom-full mb-1" : "top-full mt-1"),
					children: [/* @__PURE__ */ m("div", {
						className: "mb-2 flex items-center justify-between",
						children: [
							/* @__PURE__ */ p("button", {
								type: "button",
								onClick: j,
								"aria-label": "Previous month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ p("span", {
									className: "text-xs",
									children: "‹"
								})
							}),
							/* @__PURE__ */ p("span", {
								className: "text-text-tertiary text-2xs",
								"aria-live": "polite",
								children: S === "start" ? "Select start date" : "Select end date"
							}),
							/* @__PURE__ */ p("button", {
								type: "button",
								onClick: te,
								"aria-label": "Next month",
								className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]",
								children: /* @__PURE__ */ p("span", {
									className: "text-xs",
									children: "›"
								})
							})
						]
					}), /* @__PURE__ */ m("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ p(X, {
							year: h,
							month: _,
							rangeStart: w,
							rangeEnd: E,
							hoverDate: S === "end" ? y : null,
							onSelect: ee,
							onMonthChange: (e, t) => {
								g(e), v(t);
							},
							onHover: b
						}), /* @__PURE__ */ p(X, {
							year: O,
							month: k,
							rangeStart: w,
							rangeEnd: E,
							hoverDate: S === "end" ? y : null,
							onSelect: ee,
							onMonthChange: (e, t) => {
								t === 0 ? (g(e - 1), v(11)) : (g(e), v(t - 1));
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
var Tn = [
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
function En(e) {
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
function Dn(e, t) {
	return t === "AM" ? e === 12 ? 0 : e : e === 12 ? 12 : e + 12;
}
function On(e) {
	let t = Tn[e.getMonth()], n = e.getDate(), r = e.getFullYear(), { hour12: i, period: a } = En(e.getHours());
	return `${t} ${n}, ${r} ${i}:${String(e.getMinutes()).padStart(2, "0")} ${a}`;
}
function kn(e) {
	return String(e).padStart(2, "0");
}
function An({ label: e, value: t, onChange: n, placeholder: r = "Select date & time..." }) {
	let [a, o] = d(!1), s = u(null), c = u(null), l = vn(a, s, c), f = /* @__PURE__ */ new Date(), h = t ? En(t.getHours()) : {
		hour12: 12,
		period: "PM"
	}, [g, _] = d(t?.getFullYear() ?? f.getFullYear()), [v, y] = d(t?.getMonth() ?? f.getMonth()), [b, S] = d(String(h.hour12)), [C, w] = d(t ? kn(t.getMinutes()) : "00"), [T, E] = d(h.period), [D, O] = d(t);
	W(a, i(() => o(!1), []), [s]);
	function k(e) {
		O(e);
	}
	function A(e) {
		let t = e.replace(/\D/g, "").slice(0, 2);
		S(t);
		let n = parseInt(t, 10);
		!isNaN(n) && n >= 13 && n <= 23 ? (S(String(n - 12)), E("PM")) : n === 0 && (S("12"), E("AM"));
	}
	function ee() {
		if (!D) return;
		let e = Math.max(1, Math.min(12, parseInt(b, 10) || 12)), t = Math.max(0, Math.min(59, parseInt(C, 10) || 0)), r = Dn(e, T);
		n(new Date(D.getFullYear(), D.getMonth(), D.getDate(), r, t)), o(!1);
	}
	function j() {
		if (!a && t) {
			_(t.getFullYear()), y(t.getMonth()), O(t);
			let e = En(t.getHours());
			S(String(e.hour12)), E(e.period), w(kn(t.getMinutes()));
		}
		o(!a);
	}
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-1.5",
		ref: s,
		children: [e && /* @__PURE__ */ p("span", {
			className: "text-text-secondary text-xs font-medium",
			children: e
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ p("button", {
					type: "button",
					onClick: j,
					"aria-haspopup": "dialog",
					"aria-expanded": a,
					className: I("flex h-7 w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "px-2 pr-7"),
					children: t ? On(t) : /* @__PURE__ */ p("span", {
						className: "text-text-disabled",
						children: r
					})
				}),
				/* @__PURE__ */ p(x, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" }),
				a && /* @__PURE__ */ m("div", {
					ref: c,
					role: "dialog",
					"aria-label": "Choose date and time",
					className: I("bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg", l ? "bottom-full mb-1" : "top-full mt-1"),
					children: [/* @__PURE__ */ p(X, {
						year: g,
						month: v,
						selected: D,
						onSelect: k,
						onMonthChange: (e, t) => {
							_(e), y(t);
						}
					}), /* @__PURE__ */ m("div", {
						className: "border-border mt-3 flex items-center gap-2 border-t pt-3",
						children: [
							/* @__PURE__ */ p("span", {
								className: "text-text-secondary text-2xs font-medium",
								children: "Time"
							}),
							/* @__PURE__ */ m("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ p("input", {
										type: "text",
										inputMode: "numeric",
										maxLength: 2,
										value: b,
										onChange: (e) => A(e.target.value),
										"aria-label": "Hour",
										className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
									}),
									/* @__PURE__ */ p("span", {
										className: "text-text-tertiary text-xs",
										children: ":"
									}),
									/* @__PURE__ */ p("input", {
										type: "text",
										inputMode: "numeric",
										maxLength: 2,
										value: C,
										onChange: (e) => w(e.target.value.replace(/\D/g, "").slice(0, 2)),
										"aria-label": "Minute",
										className: "bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
									})
								]
							}),
							/* @__PURE__ */ m("div", {
								className: "border-border inline-flex overflow-hidden rounded-md border",
								role: "group",
								"aria-label": "Time period",
								children: [/* @__PURE__ */ p("button", {
									type: "button",
									onClick: () => E("AM"),
									"aria-pressed": T === "AM",
									className: I("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", T === "AM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
									children: "AM"
								}), /* @__PURE__ */ p("button", {
									type: "button",
									onClick: () => E("PM"),
									"aria-pressed": T === "PM",
									className: I("text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]", T === "PM" ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover"),
									children: "PM"
								})]
							}),
							/* @__PURE__ */ p("button", {
								type: "button",
								onClick: ee,
								disabled: !D,
								className: I("ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]", D ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer" : "bg-bg-hover text-text-disabled cursor-not-allowed"),
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
var jn = 360, Mn = 260, Nn = 700;
function Pn({ open: e, onClose: t, title: n, children: r, className: a, resizable: s = !0, defaultWidth: c = jn, minWidth: l = Mn, maxWidth: f = Nn }) {
	let [h, g] = d(c), _ = u(!1), v = u(0), y = u(0);
	o(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
	}, [e, t]);
	let b = i((e) => {
		s && (e.preventDefault(), _.current = !0, v.current = e.clientX, y.current = h, e.target.setPointerCapture(e.pointerId));
	}, [s, h]), x = i((e) => {
		if (!_.current) return;
		let t = v.current - e.clientX;
		g(Math.max(l, Math.min(f, y.current + t)));
	}, [l, f]), S = i(() => {
		_.current = !1;
	}, []);
	return /* @__PURE__ */ p("div", {
		className: I("border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l", "transition-[width] duration-[200ms] ease-out", a),
		style: { width: e ? h : 0 },
		children: e && /* @__PURE__ */ m("div", {
			className: "animate-fade-in flex h-full flex-col",
			style: { width: h },
			children: [
				s && /* @__PURE__ */ p("div", {
					onPointerDown: b,
					onPointerMove: x,
					onPointerUp: S,
					className: "hover:bg-accent/30 active:bg-accent/40 absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none"
				}),
				/* @__PURE__ */ m("div", {
					className: "border-border flex h-10 shrink-0 items-center justify-between border-b px-3",
					children: [/* @__PURE__ */ p("h3", {
						className: "text-text-primary truncate text-xs font-semibold",
						children: n
					}), /* @__PURE__ */ p("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded",
						"aria-label": "Close panel",
						children: /* @__PURE__ */ p(N, { className: "h-3.5 w-3.5" })
					})]
				}),
				/* @__PURE__ */ p("div", {
					className: "flex-1 overflow-y-auto p-3",
					children: r
				})
			]
		})
	});
}
//#endregion
//#region src/components/ui/Dialog.tsx
function Fn({ open: e, onClose: t, title: n, children: r, footer: i, className: a }) {
	let c = u(null), l = s();
	return B(c, e), o(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = "";
		};
	}, [e, t]), e ? P(/* @__PURE__ */ m("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]",
		children: [/* @__PURE__ */ p("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: t
		}), /* @__PURE__ */ m("div", {
			ref: c,
			className: I("relative z-50 mx-4 mb-8 w-full max-w-[400px] p-6", "bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", a),
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": n ? l : void 0,
			"aria-label": n ? void 0 : "Dialog",
			children: [
				/* @__PURE__ */ m("div", {
					className: "mb-4 flex items-center justify-between",
					children: [n && /* @__PURE__ */ p("h3", {
						id: l,
						className: "text-text-primary text-sm font-semibold",
						children: n
					}), /* @__PURE__ */ p("button", {
						onClick: t,
						className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]",
						"aria-label": "Close",
						children: /* @__PURE__ */ p(N, { className: "h-4 w-4" })
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
function In({ onCancel: e, onConfirm: t, cancelLabel: n = "Cancel", confirmLabel: r = "Confirm", confirmVariant: i = "primary", className: a }) {
	return /* @__PURE__ */ m("div", {
		className: I("flex justify-end gap-2", a),
		children: [/* @__PURE__ */ p(J, {
			variant: "ghost",
			size: "sm",
			onClick: e,
			children: n
		}), /* @__PURE__ */ p(J, {
			variant: i,
			size: "sm",
			onClick: t,
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/DividerLabel.tsx
function Ln({ children: e, className: t }) {
	return /* @__PURE__ */ m("div", {
		className: I("relative my-6", t),
		children: [/* @__PURE__ */ p("div", {
			className: "absolute inset-0 flex items-center",
			children: /* @__PURE__ */ p("div", { className: "border-border w-full border-t" })
		}), /* @__PURE__ */ p("div", {
			className: "relative flex justify-center",
			children: /* @__PURE__ */ p("span", {
				className: "bg-bg-secondary text-2xs text-text-tertiary px-2 tracking-wider uppercase",
				children: e
			})
		})]
	});
}
//#endregion
//#region src/components/ui/DropdownMenu.tsx
function Rn({ trigger: e, items: t, align: n = "right" }) {
	let [r, a] = d(!1), [s, c] = d({
		top: 0,
		left: 0,
		triggerWidth: 0
	}), [h, g] = d(-1), _ = u(null), v = u(null), y = l(() => t.filter((e) => !e.divider), [t]), b = i(() => {
		a(!1), g(-1);
	}, []);
	W(r, b, [v], [_]), o(() => {
		if (!r) return;
		let e = (e) => {
			e.key === "ArrowDown" ? (e.preventDefault(), g((e) => (e + 1) % y.length)) : e.key === "ArrowUp" ? (e.preventDefault(), g((e) => (e - 1 + y.length) % y.length)) : e.key === "Enter" && h >= 0 && (e.preventDefault(), y[h].onClick(), b());
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		r,
		h,
		y,
		b
	]), o(() => {
		!r || h < 0 || !v.current || v.current.querySelectorAll("[role=\"menuitem\"]")[h]?.focus();
	}, [r, h]);
	function x() {
		if (!_.current) return;
		let e = _.current.getBoundingClientRect();
		c({
			top: e.bottom + 4,
			left: n === "right" ? e.right : e.left,
			triggerWidth: e.width
		}), a(!r), g(-1);
	}
	let C = -1;
	return /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", {
		ref: _,
		onClick: x,
		children: e
	}), r && P(/* @__PURE__ */ p("div", {
		ref: v,
		role: "menu",
		className: "bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-max rounded-md border py-1 shadow-lg",
		style: {
			top: s.top,
			minWidth: s.triggerWidth,
			...n === "right" ? { right: window.innerWidth - s.left } : { left: s.left }
		},
		children: t.map((e, t) => {
			if (e.divider) return /* @__PURE__ */ p("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${t}`);
			C++;
			let n = C;
			return /* @__PURE__ */ m("button", {
				role: "menuitem",
				tabIndex: n === h ? 0 : -1,
				onClick: () => {
					e.onClick(), b();
				},
				onMouseEnter: () => g(n),
				className: I("flex h-7 w-full cursor-pointer items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", e.danger ? "text-red hover:bg-red-muted focus:bg-red-muted" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover"),
				children: [
					e.icon && /* @__PURE__ */ p("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center",
						children: e.icon
					}),
					/* @__PURE__ */ p("span", {
						className: "flex-1",
						children: e.label
					}),
					e.shortcut && /* @__PURE__ */ p("span", {
						className: "text-2xs text-text-tertiary ml-auto pl-4 font-mono",
						children: e.shortcut
					}),
					e.checked && /* @__PURE__ */ p(S, { className: "text-accent ml-auto h-3.5 w-3.5 shrink-0" })
				]
			}, e.label || `item-${t}`);
		})
	}), document.body)] });
}
//#endregion
//#region src/components/ui/EmptyState.tsx
function zn({ icon: e, title: t, description: n, action: r, className: i }) {
	return /* @__PURE__ */ m("div", {
		className: I("flex flex-col items-center justify-center px-4 py-12", i),
		children: [
			/* @__PURE__ */ p("div", {
				className: "bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md",
				children: e || /* @__PURE__ */ p(ee, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ p("p", {
				className: "text-text-primary mb-1 text-sm font-medium",
				children: t
			}),
			n && /* @__PURE__ */ p("p", {
				className: "text-text-secondary max-w-[300px] text-center text-xs",
				children: n
			}),
			r && /* @__PURE__ */ p("div", {
				className: "mt-4",
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/ui/ErrorBoundary.tsx
var Bn = class extends e {
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
		return this.state.hasError ? /* @__PURE__ */ m("div", {
			className: "bg-bg-primary flex min-h-svh flex-col items-center justify-center p-8 text-center",
			children: [
				/* @__PURE__ */ p("p", {
					className: "text-text-primary mb-2 text-lg font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ p("p", {
					className: "text-text-secondary mb-6 max-w-md text-xs",
					children: this.state.error?.message ?? "An unexpected error occurred."
				}),
				/* @__PURE__ */ p(J, {
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
function Vn({ icon: e, children: t, items: n, align: r, className: i }) {
	return /* @__PURE__ */ p(Rn, {
		align: r,
		trigger: /* @__PURE__ */ p(Gt, {
			icon: e,
			className: i,
			children: t
		}),
		items: n
	});
}
//#endregion
//#region src/components/ui/Kbd.tsx
function Hn({ children: e, className: t }) {
	return /* @__PURE__ */ p("kbd", {
		className: I("text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium", "bg-bg-tertiary text-text-secondary border-border rounded border", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/LoadingSpinner.tsx
var Un = {
	sm: "w-4 h-4",
	md: "w-6 h-6",
	lg: "w-8 h-8"
};
function Wn({ className: e, size: t = "md" }) {
	return /* @__PURE__ */ p("div", {
		className: I("flex min-h-[200px] items-center justify-center", e),
		children: /* @__PURE__ */ p(te, { className: I("text-accent animate-spin", Un[t]) })
	});
}
//#endregion
//#region src/components/ui/MetadataGrid.tsx
function Gn({ items: e, labelWidth: n = "100px", className: r }) {
	return /* @__PURE__ */ p("div", {
		className: I("gap-x-3 gap-y-2 text-xs", r),
		style: {
			display: "grid",
			gridTemplateColumns: `${n} 1fr`
		},
		children: e.map((e) => /* @__PURE__ */ m(t, { children: [/* @__PURE__ */ p("span", {
			className: "text-text-tertiary font-label",
			children: e.label
		}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ p("span", {
			className: "text-text-primary font-data",
			children: e.value
		}) : /* @__PURE__ */ p("span", { children: e.value })] }, e.label))
	});
}
//#endregion
//#region src/components/ui/MetricCard.tsx
function Kn({ label: e, value: t, sub: n, bar: r, icon: i, iconColor: a, className: o }) {
	return /* @__PURE__ */ m("div", {
		className: I("bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3", o),
		children: [
			i && /* @__PURE__ */ p(i, { className: I("absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]", a) }),
			/* @__PURE__ */ p("p", {
				className: "text-2xs-f text-text-tertiary font-label mb-1 font-medium tracking-wider uppercase",
				children: e
			}),
			/* @__PURE__ */ p("p", {
				className: "text-text-primary font-data text-xl font-bold tabular-nums",
				children: t
			}),
			n && /* @__PURE__ */ p("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: n
			}),
			r !== void 0 && /* @__PURE__ */ p("div", {
				className: "bg-bg-tertiary mt-2 h-[3px] overflow-hidden rounded-md",
				children: /* @__PURE__ */ p("div", {
					className: "bg-accent h-full rounded-md transition-all duration-[250ms] ease-out",
					style: { width: `${Math.min(100, Math.max(0, r))}%` }
				})
			})
		]
	});
}
//#endregion
//#region src/components/ui/OAuthButton.tsx
function qn() {
	return /* @__PURE__ */ m("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ p("path", {
				fill: "currentColor",
				d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
			}),
			/* @__PURE__ */ p("path", {
				fill: "currentColor",
				d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			}),
			/* @__PURE__ */ p("path", {
				fill: "currentColor",
				d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
			}),
			/* @__PURE__ */ p("path", {
				fill: "currentColor",
				d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
			})
		]
	});
}
function Jn() {
	return /* @__PURE__ */ p("svg", {
		className: "h-3.5 w-3.5",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ p("path", { d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" })
	});
}
var Yn = {
	github: "GitHub",
	google: "Google"
}, Xn = {
	github: Jn,
	google: qn
};
function Zn({ provider: e, children: t, ...n }) {
	let r = Xn[e];
	return /* @__PURE__ */ m(J, {
		variant: "secondary",
		size: "md",
		...n,
		children: [/* @__PURE__ */ p(r, {}), t ?? Yn[e]]
	});
}
//#endregion
//#region src/components/ui/PageHeader.tsx
function Qn({ title: e, subtitle: t, actions: n, className: r }) {
	return /* @__PURE__ */ m("div", {
		className: I("flex items-center justify-between", r),
		children: [/* @__PURE__ */ m("div", { children: [/* @__PURE__ */ p("h1", {
			className: "text-text-primary font-heading text-sm font-semibold",
			children: e
		}), t && /* @__PURE__ */ p("p", {
			className: "text-text-tertiary text-xs",
			children: t
		})] }), n && /* @__PURE__ */ p("div", {
			className: "flex items-center gap-2",
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/PageSection.tsx
function $n({ title: e, description: t, actions: n, children: r, as: i = "h2", className: a, headerClassName: o, contentClassName: s }) {
	return /* @__PURE__ */ m("section", {
		className: I("space-y-4", a),
		children: [(e || t || n) && /* @__PURE__ */ m("div", {
			className: I("border-border flex items-end justify-between gap-3 border-b pb-2", o),
			children: [/* @__PURE__ */ m("div", {
				className: "min-w-0",
				children: [e && /* @__PURE__ */ p(i, {
					className: "text-text-primary font-heading text-xs font-semibold",
					children: e
				}), t && /* @__PURE__ */ p("p", {
					className: "text-text-secondary mt-1 text-xs",
					children: t
				})]
			}), n && /* @__PURE__ */ p("div", {
				className: "flex items-center gap-2",
				children: n
			})]
		}), /* @__PURE__ */ p("div", {
			className: s,
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/SelectDropdown.tsx
function er({ options: e, value: t, onChange: n, label: r, placeholder: a = "Select...", className: o, size: c = "md" }) {
	let [l, f] = d(!1), [h, g] = d(-1), _ = u(null), v = u(null), y = vn(l, _, v), b = s(), x = `${b}-listbox`, C = e.find((e) => e.value === t);
	W(l, i(() => f(!1), []), [_]);
	function T() {
		if (!l) {
			let n = e.findIndex((e) => e.value === t);
			g(n >= 0 ? n : 0);
		}
		f(!l);
	}
	function E(r) {
		if (!l) {
			if (r.key === "ArrowDown" || r.key === "ArrowUp") {
				r.preventDefault();
				let n = e.findIndex((e) => e.value === t);
				g(n >= 0 ? n : 0), f(!0);
			}
			return;
		}
		switch (r.key) {
			case "ArrowDown":
				r.preventDefault(), g((t) => Math.min(t + 1, e.length - 1));
				break;
			case "ArrowUp":
				r.preventDefault(), g((e) => Math.max(e - 1, 0));
				break;
			case "Enter":
				r.preventDefault(), e[h] && (n(e[h].value), f(!1));
				break;
			case "Escape":
				r.preventDefault(), f(!1);
				break;
		}
	}
	return /* @__PURE__ */ m("div", {
		className: I("flex flex-col gap-1.5", o),
		ref: _,
		children: [r && /* @__PURE__ */ p("span", {
			className: "text-text-secondary font-label text-xs font-medium",
			children: r
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ p("button", {
					type: "button",
					onClick: T,
					onKeyDown: E,
					"aria-haspopup": "listbox",
					"aria-expanded": l,
					"aria-controls": l ? x : void 0,
					"aria-activedescendant": l && h >= 0 ? `${b}-option-${h}` : void 0,
					className: I("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", c === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7"),
					children: C ? C.label : /* @__PURE__ */ p("span", {
						className: "text-text-disabled",
						children: a
					})
				}),
				/* @__PURE__ */ p(w, { className: I("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", c === "sm" ? "right-1.5" : "right-2", l && "rotate-180") }),
				l && /* @__PURE__ */ p("div", {
					ref: v,
					className: I("bg-bg-tertiary border-border-strong animate-scale-in absolute right-0 left-0 z-[100] overflow-hidden rounded-md border shadow-lg", y ? "bottom-full mb-1" : "top-full mt-1"),
					children: /* @__PURE__ */ p("ul", {
						id: x,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: e.map((e, r) => /* @__PURE__ */ m("li", {
							id: `${b}-option-${r}`,
							role: "option",
							"aria-selected": e.value === t,
							onClick: () => {
								n(e.value), f(!1);
							},
							onMouseEnter: () => g(r),
							className: I("font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs", "transition-colors duration-[100ms]", r === h ? "bg-accent-muted text-accent" : e.value === t ? "text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
							children: [/* @__PURE__ */ p("span", {
								className: "flex-1 truncate",
								children: e.label
							}), e.value === t && /* @__PURE__ */ p(S, { className: "h-3 w-3 shrink-0" })]
						}, e.value))
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/components/ui/PaginationBar.tsx
var tr = [
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
function nr({ page: e, pageSize: t, total: n, pageSizeOptions: r = tr, onPageChange: i, onPageSizeChange: a, className: o }) {
	let s = Math.ceil(n / t), c = Math.min((e - 1) * t + 1, n), l = Math.min(e * t, n);
	return /* @__PURE__ */ m("div", {
		className: I("flex items-center justify-between", o),
		children: [/* @__PURE__ */ m("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ p(er, {
				size: "sm",
				value: String(t),
				onChange: (e) => a(Number(e)),
				options: r,
				className: "w-28"
			}), /* @__PURE__ */ m("span", {
				className: "text-text-tertiary hidden text-xs sm:inline",
				children: [
					c,
					"–",
					l,
					" of ",
					n
				]
			})]
		}), /* @__PURE__ */ p(qt, {
			page: e,
			totalPages: s,
			onPageChange: i
		})]
	});
}
//#endregion
//#region src/components/ui/PasswordInput.tsx
var rr = r(({ label: e, error: t, className: n, id: r, ...i }, a) => {
	let o = r || e?.toLowerCase().replace(/\s+/g, "-"), [s, c] = d(!1);
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-1.5",
		children: [(e || t) && /* @__PURE__ */ m("div", {
			className: "flex items-center justify-between",
			children: [e && /* @__PURE__ */ p("label", {
				htmlFor: o,
				className: "text-text-secondary text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ p("p", {
				className: "text-2xs text-red",
				children: t
			})]
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			children: [/* @__PURE__ */ p("input", {
				ref: a,
				id: o,
				type: s ? "text" : "password",
				className: I("bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", n),
				...i
			}), /* @__PURE__ */ p("button", {
				type: "button",
				onClick: () => c(!s),
				className: "text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",
				"aria-label": s ? "Hide password" : "Show password",
				children: p(s ? A : k, { className: "h-3.5 w-3.5" })
			})]
		})]
	});
});
rr.displayName = "PasswordInput";
//#endregion
//#region src/components/ui/ProfileHeader.tsx
function ir({ name: e, subtitle: t, badge: n, meta: r, action: i, className: a }) {
	return /* @__PURE__ */ m("div", {
		className: I("flex items-start gap-4", a),
		children: [
			/* @__PURE__ */ p(q, {
				name: e,
				size: "lg"
			}),
			/* @__PURE__ */ m("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ m("div", {
						className: "mb-1 flex items-center gap-2",
						children: [/* @__PURE__ */ p("h1", {
							className: "text-text-primary text-base font-semibold",
							children: e
						}), n]
					}),
					t && /* @__PURE__ */ p("p", {
						className: "text-text-tertiary text-xs",
						children: t
					}),
					r && r.length > 0 && /* @__PURE__ */ p("div", {
						className: "mt-2 flex flex-wrap gap-3",
						children: r.map((e) => {
							let t = e.icon, n = /* @__PURE__ */ m(f, { children: [
								/* @__PURE__ */ p(t, { className: "h-3 w-3" }),
								" ",
								e.text
							] });
							return e.href ? /* @__PURE__ */ p("a", {
								href: e.href,
								className: "text-2xs-f text-accent hover:text-accent-hover flex cursor-pointer items-center gap-1",
								children: n
							}, e.text) : /* @__PURE__ */ p("span", {
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
function ar({ children: e, className: t }) {
	return /* @__PURE__ */ p("div", {
		className: I("ui-prose", t),
		children: e
	});
}
//#endregion
//#region src/components/ui/RadioPill.tsx
function or({ options: e, value: t, onChange: n, disabled: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ p("div", {
		role: "radiogroup",
		"aria-label": a,
		className: I("border-border inline-flex overflow-hidden rounded-md border", r && "cursor-not-allowed opacity-40", i),
		children: e.map((e) => /* @__PURE__ */ p("button", {
			role: "radio",
			"aria-checked": e.value === t,
			disabled: r,
			onClick: () => n(e.value),
			className: I("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", !r && "cursor-pointer", e.value === t ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: e.label
		}, e.value))
	});
}
//#endregion
//#region src/components/ui/SearchInput.tsx
function sr({ value: e, onChange: t, placeholder: n = "Search...", className: r }) {
	return /* @__PURE__ */ m("div", {
		className: I("relative", r),
		children: [/* @__PURE__ */ p(M, { className: "text-text-tertiary absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" }), /* @__PURE__ */ p("input", {
			type: "search",
			value: e,
			onChange: (e) => t(e.target.value),
			placeholder: n,
			className: I("bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 text-xs", "border-border rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none")
		})]
	});
}
//#endregion
//#region src/components/ui/SectionHeader.tsx
function cr({ children: e, as: t = "h2", className: n, border: r = !0 }) {
	return /* @__PURE__ */ p(t, {
		className: I("text-text-primary font-heading text-xs font-semibold", r && "border-border border-b pb-2", n),
		children: e
	});
}
//#endregion
//#region src/components/ui/Select.tsx
var lr = r(({ label: e, error: t, options: n, className: r, id: i, ...a }, o) => {
	let s = i || e?.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-1.5",
		children: [(e || t) && /* @__PURE__ */ m("div", {
			className: "flex items-center justify-between",
			children: [e && /* @__PURE__ */ p("label", {
				htmlFor: s,
				className: "text-text-secondary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ p("p", {
				className: "text-2xs text-red",
				children: t
			})]
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			children: [/* @__PURE__ */ p("select", {
				ref: o,
				id: s,
				className: I("bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", t ? "border-red" : "border-border", r),
				...a,
				children: n.map((e) => /* @__PURE__ */ p("option", {
					value: e.value,
					children: e.label
				}, e.value))
			}), /* @__PURE__ */ p(w, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" })]
		})]
	});
});
lr.displayName = "Select";
//#endregion
//#region src/components/ui/SettingRow.tsx
function ur({ label: e, description: t, action: n, className: r }) {
	return /* @__PURE__ */ m("div", {
		className: I("border-border flex items-center justify-between border-b py-3", r),
		children: [/* @__PURE__ */ m("div", {
			className: "min-w-0 flex-1 pr-4",
			children: [/* @__PURE__ */ p("p", {
				className: "text-text-primary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ p("p", {
				className: "text-2xs text-text-tertiary font-label mt-0.5",
				children: t
			})]
		}), /* @__PURE__ */ p("div", {
			className: "shrink-0",
			children: n
		})]
	});
}
//#endregion
//#region src/components/ui/Slider.tsx
function dr({ min: e, max: t, step: n = 1, value: r, onChange: i, onCommit: a, label: o, showValue: s, className: c }) {
	let l = (r - e) / (t - e) * 100;
	return /* @__PURE__ */ m("div", {
		className: I("flex flex-col gap-1.5", c),
		children: [(o || s) && /* @__PURE__ */ m("div", {
			className: "flex items-center justify-between",
			children: [o && /* @__PURE__ */ p("span", {
				className: "text-text-secondary font-label text-xs font-medium",
				children: o
			}), s && /* @__PURE__ */ p("span", {
				className: "text-text-primary font-data text-xs",
				children: r
			})]
		}), /* @__PURE__ */ p("input", {
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
//#region src/components/ui/SideSheet.tsx
function fr({ open: e, onClose: t, title: n, children: r, footer: i, side: a = "right", widthClassName: s = "w-[360px]", className: c, contentClassName: l }) {
	let d = u(null);
	return B(d, e), o(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t();
		};
		return document.addEventListener("keydown", n), document.body.style.overflow = "hidden", () => {
			document.removeEventListener("keydown", n), document.body.style.overflow = "";
		};
	}, [e, t]), e ? P(/* @__PURE__ */ m("div", {
		className: "fixed inset-0 z-50 flex",
		children: [
			a === "right" && /* @__PURE__ */ p("div", {
				className: "bg-bg-overlay animate-fade-in flex-1",
				onClick: t
			}),
			/* @__PURE__ */ m("div", {
				ref: d,
				className: I("bg-bg-secondary border-border flex flex-col shadow-lg", s, a === "right" ? "animate-slide-in-right border-l" : "animate-slide-in-left border-r", c),
				style: { maxWidth: "calc(100vw - 2rem)" },
				role: "dialog",
				"aria-modal": "true",
				"aria-label": typeof n == "string" ? n : "Panel",
				children: [
					/* @__PURE__ */ m("div", {
						className: "border-border flex h-10 shrink-0 items-center justify-between border-b px-3",
						children: [n && /* @__PURE__ */ p("h3", {
							className: "text-text-primary truncate text-xs font-semibold",
							children: n
						}), /* @__PURE__ */ p("button", {
							onClick: t,
							className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded",
							"aria-label": "Close",
							children: /* @__PURE__ */ p(N, { className: "h-3.5 w-3.5" })
						})]
					}),
					/* @__PURE__ */ p("div", {
						className: I("flex-1 overflow-y-auto p-3", l),
						children: r
					}),
					i && /* @__PURE__ */ p("div", {
						className: "border-border flex gap-2 border-t p-3",
						children: i
					})
				]
			}),
			a === "left" && /* @__PURE__ */ p("div", {
				className: "bg-bg-overlay animate-fade-in flex-1",
				onClick: t
			})
		]
	}), document.body) : null;
}
//#endregion
//#region src/components/ui/SplitPaneLayout.tsx
function pr({ children: e, direction: t = "row", className: n }) {
	return /* @__PURE__ */ p("div", {
		className: I("-m-4 md:-m-6", "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]", t === "column" && "flex-col", n),
		children: e
	});
}
function mr({ children: e, className: t }) {
	return /* @__PURE__ */ p("div", {
		className: I("flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden", t),
		children: e
	});
}
var hr = Object.assign(pr, { Main: mr }), gr = {
	active: "bg-green",
	inactive: "bg-text-tertiary",
	pending: "bg-yellow animate-pulse-subtle",
	error: "bg-red"
}, _r = {
	active: "text-green",
	inactive: "text-text-tertiary",
	pending: "text-yellow",
	error: "text-red"
};
function vr({ status: e, label: t, className: n }) {
	return /* @__PURE__ */ m("span", {
		className: I("inline-flex items-center gap-1.5", n),
		children: [/* @__PURE__ */ p("span", { className: I("h-2 w-2 rounded-full", gr[e]) }), t && /* @__PURE__ */ p("span", {
			className: I("text-xs", _r[e]),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/StepProgress.tsx
function yr({ steps: e, currentStep: t, className: n }) {
	return /* @__PURE__ */ p("div", {
		className: I("flex items-center justify-between", n),
		children: e.map((n, r) => /* @__PURE__ */ m("div", {
			className: "flex flex-1 items-center",
			children: [/* @__PURE__ */ m("div", {
				className: "flex flex-col items-center",
				children: [
					/* @__PURE__ */ p("div", {
						className: I("flex h-8 w-8 items-center justify-center rounded-full text-xs", r < t && "bg-accent text-text-on-accent", r === t && "border-accent text-accent border-2 font-semibold", r > t && "bg-bg-tertiary border-border text-text-tertiary border"),
						children: r < t ? /* @__PURE__ */ p(S, { className: "h-4 w-4" }) : r + 1
					}),
					/* @__PURE__ */ p("span", {
						className: I("text-2xs mt-1.5 hidden sm:block", r === t && "text-accent", r < t && "text-text-primary", r > t && "text-text-tertiary"),
						children: n.label
					}),
					n.description && /* @__PURE__ */ p("span", {
						className: "text-2xs text-text-secondary mt-0.5 hidden sm:block",
						children: n.description
					})
				]
			}), r < e.length - 1 && /* @__PURE__ */ p("div", { className: I("mx-2 h-0.5 flex-1", r < t ? "bg-accent" : "bg-border") })]
		}, n.label))
	});
}
//#endregion
//#region src/components/ui/Tabs.tsx
function br({ tabs: e, defaultTab: t, value: n, onChange: r, className: i }) {
	let [a, o] = d(t || e[0]?.key), c = n ?? a, l = e.find((e) => e.key === c);
	function f(e) {
		n === void 0 && o(e), r?.(e);
	}
	let h = s(), g = u(null);
	function _(t) {
		let n = e.map((e) => e.key), r = n.indexOf(c), i = null;
		t.key === "ArrowRight" ? (t.preventDefault(), i = (r + 1) % e.length) : t.key === "ArrowLeft" && (t.preventDefault(), i = (r - 1 + e.length) % e.length), i !== null && (f(n[i]), (g.current?.querySelectorAll("[role=\"tab\"]"))?.[i]?.focus());
	}
	return /* @__PURE__ */ m("div", {
		className: i,
		children: [/* @__PURE__ */ p("div", {
			className: "border-border flex border-b",
			role: "tablist",
			ref: g,
			children: e.map((e) => /* @__PURE__ */ m("button", {
				id: `${h}-tab-${e.key}`,
				role: "tab",
				tabIndex: e.key === c ? 0 : -1,
				"aria-selected": e.key === c,
				"aria-controls": `${h}-panel-${e.key}`,
				onClick: () => f(e.key),
				onKeyDown: _,
				className: I("font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]", "hover:text-text-primary", e.key === c ? "text-accent" : "text-text-tertiary"),
				children: [e.label, e.key === c && /* @__PURE__ */ p("div", { className: "bg-accent absolute right-0 bottom-0 left-0 h-0.5 rounded-md" })]
			}, e.key))
		}), /* @__PURE__ */ p("div", {
			id: `${h}-panel-${c}`,
			role: "tabpanel",
			"aria-labelledby": `${h}-tab-${c}`,
			className: "pt-4",
			children: l?.content
		})]
	});
}
//#endregion
//#region src/components/ui/Textarea.tsx
var xr = r(({ label: e, error: t, showCount: n, maxLength: r, value: i, className: a, id: o, ...s }, c) => {
	let l = o || e?.toLowerCase().replace(/\s+/g, "-"), u = typeof i == "string" ? i.length : 0;
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-1.5",
		children: [
			e && /* @__PURE__ */ p("label", {
				htmlFor: l,
				className: "text-text-secondary font-label text-xs font-medium",
				children: e
			}),
			/* @__PURE__ */ p("textarea", {
				ref: c,
				id: l,
				value: i,
				maxLength: r,
				className: I("bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs", "resize-y rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", t ? "border-red" : "border-border", a),
				...s
			}),
			/* @__PURE__ */ m("div", {
				className: "flex justify-between",
				children: [t && /* @__PURE__ */ p("p", {
					className: "text-2xs text-red",
					children: t
				}), n && r && /* @__PURE__ */ m("p", {
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
xr.displayName = "Textarea";
//#endregion
//#region src/components/ui/TextInput.tsx
var Sr = r(({ label: e, error: t, icon: n, className: r, id: i, readOnly: a, ...o }, s) => {
	let c = i || e?.toLowerCase().replace(/\s+/g, "-");
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-1.5",
		children: [(e || t) && /* @__PURE__ */ m("div", {
			className: "flex items-center justify-between",
			children: [e && /* @__PURE__ */ p("label", {
				htmlFor: c,
				className: "text-text-secondary font-label text-xs font-medium",
				children: e
			}), t && /* @__PURE__ */ p("p", {
				className: "text-2xs text-red",
				children: t
			})]
		}), /* @__PURE__ */ m("div", {
			className: "relative",
			children: [n && /* @__PURE__ */ p("span", {
				className: "text-text-tertiary absolute top-1/2 left-2.5 -translate-y-1/2",
				children: n
			}), /* @__PURE__ */ p("input", {
				ref: s,
				id: c,
				readOnly: a,
				className: I("bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs", "rounded-md border", "placeholder:text-text-disabled", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", a && "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed", n && "pl-7", t ? "border-red" : !a && "border-border", a && !t && "border-border", r),
				...o
			})]
		})]
	});
});
Sr.displayName = "TextInput";
//#endregion
//#region src/components/ui/Timeline.tsx
function Cr({ items: e, className: t }) {
	return /* @__PURE__ */ p("div", {
		className: I("space-y-0", t),
		children: e.map((t, n) => /* @__PURE__ */ m("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ m("div", {
				className: "flex flex-col items-center",
				children: [/* @__PURE__ */ p("div", { className: I(t.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full") }), n < e.length - 1 && /* @__PURE__ */ p("div", { className: "bg-border mt-1 w-px flex-1" })]
			}), /* @__PURE__ */ m("div", {
				className: I("pb-4", n === e.length - 1 && "pb-0"),
				children: [/* @__PURE__ */ p("p", {
					className: "text-text-primary text-xs",
					children: t.text
				}), /* @__PURE__ */ p("p", {
					className: "text-2xs text-text-tertiary mt-0.5",
					children: t.time
				})]
			})]
		}, t.id))
	});
}
//#endregion
//#region src/components/ui/Toggle.tsx
function wr({ checked: e, onChange: t, disabled: n, label: r, className: i }) {
	return /* @__PURE__ */ m("label", {
		className: I("flex w-fit items-center", n ? "cursor-not-allowed opacity-40" : "cursor-pointer", i),
		style: { gap: 10 },
		children: [/* @__PURE__ */ p("button", {
			type: "button",
			role: "switch",
			"aria-checked": e,
			disabled: n,
			onClick: () => t(!e),
			className: I("relative shrink-0 rounded-full border transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", e ? "bg-accent border-accent" : "bg-bg-tertiary border-border", !n && "cursor-pointer"),
			style: {
				width: 36,
				height: 20
			},
			children: /* @__PURE__ */ p("span", {
				className: "bg-control-knob absolute top-1/2 rounded-full transition-[left] duration-[100ms]",
				style: {
					width: 14,
					height: 14,
					marginTop: -7,
					left: e ? 19 : 3,
					boxShadow: "0 0 1px rgba(0,0,0,0.1), 2px 0 4px rgba(0,0,0,0.35)"
				}
			})
		}), r && /* @__PURE__ */ p("span", {
			className: "text-text-secondary text-xs",
			children: r
		})]
	});
}
//#endregion
//#region src/components/ui/Tooltip.tsx
var Tr = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function Er({ content: e, placement: t = "top", children: n }) {
	let [r, i] = d(!1), a = s();
	return /* @__PURE__ */ m("div", {
		className: "relative inline-flex",
		onMouseEnter: () => i(!0),
		onMouseLeave: () => i(!1),
		onFocus: () => i(!0),
		onBlur: () => i(!1),
		"aria-describedby": r ? a : void 0,
		children: [n, r && /* @__PURE__ */ p("div", {
			id: a,
			className: I("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", Tr[t]),
			role: "tooltip",
			children: e
		})]
	});
}
//#endregion
//#region src/components/ui/Toolbar.tsx
function Dr({ start: e, end: t, children: n, className: r, startClassName: i, endClassName: a }) {
	return /* @__PURE__ */ m("div", {
		className: I("flex items-center justify-between gap-3", r),
		children: [/* @__PURE__ */ p("div", {
			className: I("flex flex-1 items-center gap-3", i),
			children: e ?? n
		}), t && /* @__PURE__ */ p("div", {
			className: I("flex items-center gap-1.5", a),
			children: t
		})]
	});
}
//#endregion
//#region src/components/ui/ThemePreview.tsx
function Or({ label: e, active: t, icon: n, preview: r, onClick: i, className: a }) {
	return /* @__PURE__ */ m("button", {
		type: "button",
		onClick: i,
		className: I("flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]", t ? "border-accent bg-accent-muted" : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong", a),
		children: [/* @__PURE__ */ p("div", {
			className: "border-border-strong/20 flex h-10 w-full items-center justify-center rounded border",
			style: { backgroundColor: r?.bg },
			children: /* @__PURE__ */ p("div", {
				className: "h-1.5 w-8 rounded-md",
				style: { backgroundColor: r?.fg }
			})
		}), /* @__PURE__ */ m("div", {
			className: "flex items-center gap-1.5",
			children: [n && /* @__PURE__ */ p(n, { className: "h-3 w-3" }), /* @__PURE__ */ p("span", {
				className: "text-xs font-medium",
				children: e
			})]
		})]
	});
}
//#endregion
//#region src/components/ui/UploadDropzone.tsx
function kr({ title: e = "Drag and drop files here, or click to browse", description: t, icon: n, accept: r, multiple: i, disabled: a, onChange: o, className: s }) {
	return /* @__PURE__ */ m("label", {
		className: I("border-border hover:border-border-strong block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", a ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", s),
		children: [
			/* @__PURE__ */ p("input", {
				type: "file",
				accept: r,
				multiple: i,
				disabled: a,
				className: "sr-only",
				onChange: (e) => o?.(e.target.files, e)
			}),
			/* @__PURE__ */ p("div", {
				className: "text-text-tertiary mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-bg-tertiary",
				children: n ?? /* @__PURE__ */ p(fe, { className: "h-4.5 w-4.5" })
			}),
			/* @__PURE__ */ p("p", {
				className: "text-text-secondary mb-1 text-xs",
				children: e
			}),
			t && /* @__PURE__ */ p("p", {
				className: "text-2xs text-text-tertiary",
				children: t
			})
		]
	});
}
//#endregion
//#region src/hooks/useApplyTheme.ts
function Ar() {
	let { setPreferredDarkTheme: e, setPreferredLightTheme: t, setColorMode: n } = K();
	return i((r) => {
		V(r) ? (t(r), n("light")) : (e(r), n("dark"));
	}, [
		e,
		t,
		n
	]);
}
//#endregion
//#region src/providers/ThemeContext.ts
var jr = n({ theme: "dark" });
//#endregion
//#region src/hooks/useTheme.ts
function Mr() {
	return a(jr);
}
//#endregion
//#region src/lib/formatDate.ts
var Nr = [
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
function Pr(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function Fr(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function Ir(e, t = /* @__PURE__ */ new Date()) {
	let n = t.getTime() - e.getTime(), r = Math.floor(n / 1e3);
	if (r < 60) return "just now";
	let i = Math.floor(r / 60);
	if (i < 60) return `${i}m ago`;
	let a = Math.floor(i / 60);
	if (a < 24) return `${a}h ago`;
	if (Math.floor(a / 24) === 1) return "yesterday";
	let o = `${Nr[e.getMonth()]} ${e.getDate()}`;
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
}, Lr = {
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
}, Rr = "leonardaustin-ui-settings", zr = new Set(Object.keys(Lr)), Br = new Set(Object.keys(U)), Q = new Set(Object.keys(Z)), Vr = new Set([
	"light",
	"dark",
	"system"
]);
function $(e, t, n, r) {
	return typeof e != "number" || !isFinite(e) ? r : Math.min(n, Math.max(t, e));
}
function Hr(e) {
	let t = {};
	if (zr.has(e.accentColor) && (t.accentColor = e.accentColor), Vr.has(e.colorMode) && (t.colorMode = e.colorMode), Br.has(e.preferredDarkTheme) && !V(e.preferredDarkTheme) && (t.preferredDarkTheme = e.preferredDarkTheme), Br.has(e.preferredLightTheme) && V(e.preferredLightTheme) && (t.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (t.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (t.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (t.sidebarWidth = $(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let n = {};
		for (let [t, r] of Object.entries(e.themeOverrides)) {
			if (!Br.has(t) || !r || typeof r != "object") continue;
			let e = r, i = U[t];
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
var Ur = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function Wr(e) {
	if (typeof localStorage > "u") return Ur;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...Ur,
			...Hr(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return Ur;
}
function Gr(e, t) {
	let n = U[e] ?? U.dark;
	return t[e] ? {
		...n,
		...t[e]
	} : n;
}
function Kr(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function qr({ children: e, storageKey: t = Rr }) {
	let [n, r] = d(() => Wr(t)), [a, s] = d(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
	o(() => {
		if (typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = (e) => s(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let c = l(() => n.colorMode === "light" ? n.preferredLightTheme : n.colorMode === "dark" || a ? n.preferredDarkTheme : n.preferredLightTheme, [
		n.colorMode,
		n.preferredDarkTheme,
		n.preferredLightTheme,
		a
	]), [u, f] = d(() => Gr(c, n.themeOverrides));
	o(() => {
		f(Gr(c, n.themeOverrides));
	}, [c]);
	let m = i((e) => {
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
	o(() => {
		let e = document.documentElement, t = Lr[n.accentColor];
		e.style.setProperty("--accent", t.base), e.style.setProperty("--accent-hover", t.hover), e.style.setProperty("--accent-active", t.active), e.style.setProperty("--accent-muted", t.muted), e.style.setProperty("--accent-subtle", t.subtle);
	}, [n.accentColor]), o(() => {
		document.documentElement.classList.toggle("reduced-motion", n.reducedMotion);
	}, [n.reducedMotion]), o(() => {
		let e = document.documentElement, t = u.borderRadius;
		e.style.fontSize = `${u.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", Z[u.uiFont]), e.style.setProperty("--font-heading", Z[u.headingFont]), e.style.setProperty("--font-prose", Z[u.proseFont]), e.style.setProperty("--font-control", Z[u.controlFont]), e.style.setProperty("--font-label", Z[u.labelFont]), e.style.setProperty("--font-navigation", Z[u.navigationFont]), e.style.setProperty("--font-data", Z[u.dataFont]), e.style.setProperty("--font-code", Z[u.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${u.borderWidth}px`), e.style.setProperty("--ui-tracking", `${u.tracking}em`), e.style.setProperty("--ui-line-height", String(u.lineHeight)), e.style.setProperty("--ui-density", `${u.density}rem`);
	}, [u]);
	let h = l(() => Gr(c, n.themeOverrides), [c, n.themeOverrides]), g = c in n.themeOverrides, _ = !Kr(u, h), v = i(() => {
		m({ themeOverrides: {
			...n.themeOverrides,
			[c]: { ...u }
		} });
	}, [
		m,
		n.themeOverrides,
		c,
		u
	]), y = i(() => {
		let e = { ...n.themeOverrides };
		delete e[c], m({ themeOverrides: e }), f(U[c] ?? U.dark);
	}, [
		m,
		n.themeOverrides,
		c
	]), b = l(() => ({
		fontSize: u.fontSize,
		setFontSize: (e) => f((t) => ({
			...t,
			fontSize: e
		})),
		accentColor: n.accentColor,
		setAccentColor: (e) => m({ accentColor: e }),
		sidebarCollapsed: n.sidebarCollapsed,
		setSidebarCollapsed: (e) => m({ sidebarCollapsed: e }),
		sidebarWidth: n.sidebarWidth,
		setSidebarWidth: (e) => m({ sidebarWidth: e }),
		reducedMotion: n.reducedMotion,
		setReducedMotion: (e) => m({ reducedMotion: e }),
		colorMode: n.colorMode,
		setColorMode: (e) => m({ colorMode: e }),
		preferredDarkTheme: n.preferredDarkTheme,
		setPreferredDarkTheme: (e) => m({ preferredDarkTheme: e }),
		preferredLightTheme: n.preferredLightTheme,
		setPreferredLightTheme: (e) => m({ preferredLightTheme: e }),
		resolvedTheme: c,
		uiFont: u.uiFont,
		headingFont: u.headingFont,
		proseFont: u.proseFont,
		controlFont: u.controlFont,
		labelFont: u.labelFont,
		navigationFont: u.navigationFont,
		dataFont: u.dataFont,
		codeFont: u.codeFont,
		borderRadius: u.borderRadius,
		borderWidth: u.borderWidth,
		tracking: u.tracking,
		lineHeight: u.lineHeight,
		density: u.density,
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
		saveThemeCustomization: v,
		resetThemeCustomization: y,
		hasThemeOverrides: g,
		isCustomized: _
	}), [
		n,
		m,
		u,
		c,
		v,
		y,
		g,
		_
	]);
	return /* @__PURE__ */ p(G.Provider, {
		value: b,
		children: e
	});
}
//#endregion
//#region src/providers/ThemeProvider.tsx
var Jr = {
	dark: "",
	light: "theme-light",
	monokai: "theme-monokai",
	solarized: "theme-solarized",
	cyberBrutalDark: "theme-cyber-brutal-dark",
	cyberBrutalLight: "theme-cyber-brutal-light",
	hashiTheme: "theme-hashi"
};
function Yr({ children: e }) {
	let { resolvedTheme: t } = a(G);
	return o(() => {
		let e = document.documentElement;
		Object.values(Jr).forEach((t) => {
			t && e.classList.remove(t);
		});
		let n = Jr[t];
		n && e.classList.add(n);
	}, [t]), /* @__PURE__ */ p(jr.Provider, {
		value: { theme: t },
		children: e
	});
}
//#endregion
export { Zt as Alert, Vt as AppShell, ge as AreaChart, Qt as AuthCard, Ht as AuthLayout, $t as AuthorByline, q as Avatar, Ut as BackLink, nn as Badge, ve as BarChart, $e as BottomNav, It as Breadcrumbs, J as Button, tt as COMMAND_PALETTE_EVENT, X as CalendarGrid, hn as Card, Wt as Checkbox, Kt as ColumnPicker, gn as Combobox, ot as CommandPalette, nt as DEFAULT_COMMAND_PALETTE_SHORTCUT, _n as DangerZone, bn as DatePicker, wn as DateRangePicker, An as DateTimePicker, Pn as DetailPanel, Fn as Dialog, In as DialogActions, Ln as DividerLabel, Ue as DonutChart, Rn as DropdownMenu, zn as EmptyState, Bn as ErrorBoundary, Gt as FilterButton, Vn as FilterDropdown, Hn as Kbd, Wn as LoadingSpinner, Gn as MetadataGrid, Kn as MetricCard, ct as MobileDrawer, Zn as OAuthButton, Qn as PageHeader, $n as PageSection, qt as Pagination, nr as PaginationBar, rr as PasswordInput, ir as ProfileHeader, ar as ProseContent, Ge as RadarChart, qe as RadialBarChart, or as RadioPill, Yt as ResourceTable, sr as SearchInput, cr as SectionHeader, lr as Select, er as SelectDropdown, ur as SettingRow, G as SettingsContext, qr as SettingsProvider, fr as SideSheet, Pt as Sidebar, dr as Slider, Je as SparkLine, hr as SplitPaneLayout, vr as StatusDot, yr as StepProgress, br as Tabs, Sr as TextInput, xr as Textarea, jr as ThemeContext, Or as ThemePreview, Yr as ThemeProvider, Cr as Timeline, xt as ToastProvider, wr as Toggle, Dr as Toolbar, Er as Tooltip, Bt as TopBar, kr as UploadDropzone, Ze as VerticalBarChart, ht as accentItems, I as cn, ft as darkThemes, mt as fontOptions, Fr as formatDateLong, Pr as formatDateShort, Ir as formatRelative, R as handleAppShellNavigate, Qe as isAppShellPathActive, V as isLightTheme, dt as lightThemes, it as matchesCommandPaletteShortcut, z as navigateToPath, rt as openCommandPalette, Jt as sortRows, U as themeDefaults, lt as themeItems, Ar as useApplyTheme, W as useDismiss, B as useFocusTrap, K as useSettings, Mr as useTheme, bt as useToast };
