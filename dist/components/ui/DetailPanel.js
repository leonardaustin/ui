import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { OverlayContext as n, useOverlayEscape as r } from "../../hooks/useOverlayStack.js";
import { panelResizeKey as ee } from "../../lib/panelResize.js";
import { useEffect as i, useId as a, useLayoutEffect as o, useMemo as te, useRef as s, useState as c } from "react";
import { Fragment as ne, jsx as l, jsxs as u } from "react/jsx-runtime";
import { GripVertical as d, PanelRightClose as f, PanelRightOpen as p, X as re } from "lucide-react";
//#region src/components/ui/DetailPanel.tsx
function m({ open: m, onClose: h, title: g, children: _, className: ie, headerActions: ae, sticky: v = !1, resizable: oe = !0, defaultWidth: y = 360, minWidth: se = 260, maxWidth: ce = 700, fraction: b, defaultFraction: x, minFraction: S, maxFraction: C, onFractionChange: w, collapsed: T = !1, onCollapsedChange: E, railIndicator: le, overlay: D = !1, autoFocus: O = !0, ref: k, id: A, style: ue, ...de }) {
	let j = s(null), fe = te(() => t(k, j), [k]), M = s(null), N = s(null), P = s(null), F = s(null), I = s(!1), L = s(T), R = a(), z = a(), B = a(), V = A ?? B, [H, pe] = c(y), [me, he] = c(x ?? .5), [ge, U] = c(!1), W = s(null), G = b !== void 0 || x !== void 0 || S !== void 0 || C !== void 0 || w !== void 0, K = G ? Math.max(0, Math.min(1, S ?? .3)) : se, q = G ? Math.max(K, Math.min(1, C ?? .7)) : Math.max(K, ce), J = (e) => Math.max(K, Math.min(q, e)), Y = G ? J(b ?? me) : H, X = G ? x ?? .5 : y, _e = G ? `${Y * 100}%` : H, ve = r(m && !T, () => h(), j), Z = s(!1);
	i(() => {
		let e = j.current;
		if (!e) return;
		let t = () => {
			I.current = e.contains(e.ownerDocument.activeElement);
		};
		return t(), e.ownerDocument.addEventListener("focusin", t), () => e.ownerDocument.removeEventListener("focusin", t);
	}, []), o(() => {
		m || (I.current = !1), m && L.current !== T && I.current && (T ? P : F).current?.focus(), L.current = T;
	}, [T, m]), i(() => {
		let e = j.current, t = e?.ownerDocument.activeElement;
		m && !Z.current && O && !e?.contains(t ?? null) && !t?.closest("[role=\"dialog\"][aria-modal=\"true\"], dialog[open]") && M.current?.focus(), Z.current = m;
	}, [m, O]), o(() => {
		if (!m || T || !G) return;
		let e = j.current?.parentElement, t = N.current;
		if (!e || !t) return;
		let n = (e) => {
			t.style.width = `${e * Y}px`;
		};
		n(e.getBoundingClientRect().width);
		let r = new ResizeObserver(([e]) => {
			n(e.contentRect.width);
		});
		return r.observe(e), () => r.disconnect();
	}, [
		m,
		T,
		G,
		Y
	]), i(() => {
		let e = j.current?.ownerDocument, t = () => {
			W.current = null, U(!1);
		};
		return e?.addEventListener("pointerup", t), e?.addEventListener("pointercancel", t), () => {
			e?.removeEventListener("pointerup", t), e?.removeEventListener("pointercancel", t);
		};
	}, []);
	function Q(e) {
		let t = J(e);
		G ? (b === void 0 && he(t), w?.(t)) : pe(t);
	}
	function $() {
		W.current = null, U(!1);
	}
	return /* @__PURE__ */ l("section", {
		...de,
		ref: fe,
		id: V,
		role: "region",
		"aria-labelledby": m ? z : void 0,
		"aria-hidden": !m || void 0,
		className: e("border-border relative shrink-0 border-l", D ? "ui-glass ui-glass-popover bg-bg-secondary" : "bg-bg-pinned", !(ge && m && !T) && "transition-[width] duration-[200ms] ease-out", ie),
		style: {
			width: m ? T ? "3rem" : _e : 0,
			position: D ? "absolute" : v ? "sticky" : void 0,
			top: D ? 0 : v ? "var(--detail-panel-top, 0px)" : void 0,
			right: D ? 0 : void 0,
			bottom: D ? 0 : void 0,
			height: v && !D ? "calc(100vh - var(--detail-panel-top, 0px))" : void 0,
			alignSelf: v && !D ? "flex-start" : void 0,
			zIndex: D ? 10 : void 0,
			...ue
		},
		children: m && /* @__PURE__ */ u(n.Provider, {
			value: ve,
			children: [oe && !T && /* @__PURE__ */ l("div", {
				role: "separator",
				tabIndex: 0,
				"aria-orientation": "vertical",
				"aria-label": "Resize panel",
				"aria-controls": V,
				"aria-valuenow": Math.round(Y * (G ? 100 : 1)),
				"aria-valuemin": Math.round(K * (G ? 100 : 1)),
				"aria-valuemax": Math.round(q * (G ? 100 : 1)),
				"aria-valuetext": `${Math.round(Y * (G ? 100 : 1))}${G ? "%" : "px"}`,
				className: "text-text-tertiary hover:text-text-secondary hover:bg-accent/30 active:bg-accent/40 focus-visible:outline-accent absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0",
				style: { touchAction: "none" },
				onPointerDown: (e) => {
					e.button === 0 && (e.preventDefault(), e.currentTarget.focus(), e.currentTarget.setPointerCapture(e.pointerId), W.current = {
						x: e.clientX,
						width: Y,
						pointerId: e.pointerId,
						parentWidth: j.current?.parentElement?.getBoundingClientRect().width ?? 0
					}, U(!0));
				},
				onPointerMove: (e) => {
					let t = W.current;
					!t || t.pointerId !== e.pointerId || G && !t.parentWidth || Q(t.width + (t.x - e.clientX) / (G ? t.parentWidth : 1));
				},
				onPointerUp: $,
				onPointerCancel: $,
				onLostPointerCapture: $,
				onDoubleClick: () => Q(X),
				onKeyDown: (e) => {
					let t = ee(e.key, Y, G ? .02 : 16);
					t !== void 0 && (e.preventDefault(), Q(t ?? X));
				},
				children: /* @__PURE__ */ l("span", {
					"aria-hidden": "true",
					className: "bg-bg-pinned border-border absolute left-0 flex h-8 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border transition-colors duration-[100ms]",
					style: { top: "calc(100% / 3)" },
					children: /* @__PURE__ */ l(d, {
						"aria-hidden": "true",
						className: "h-3.5 w-3.5"
					})
				})
			}), /* @__PURE__ */ l("div", {
				className: "h-full overflow-hidden",
				children: /* @__PURE__ */ u("div", {
					ref: N,
					className: "animate-fade-in flex h-full flex-col",
					style: { width: T ? "3rem" : G ? void 0 : H },
					children: [/* @__PURE__ */ u("div", {
						className: e("border-border flex shrink-0 items-center justify-between border-b px-3", T ? "flex-col gap-2 py-3" : "h-10"),
						children: [/* @__PURE__ */ l("h3", {
							ref: M,
							id: z,
							tabIndex: -1,
							className: "text-text-primary truncate text-xs font-semibold",
							style: T ? {
								writingMode: "vertical-rl",
								maxHeight: "12rem"
							} : void 0,
							children: g
						}), T ? /* @__PURE__ */ u(ne, { children: [le, E && /* @__PURE__ */ u("button", {
							type: "button",
							onClick: () => E(!1),
							ref: P,
							"aria-labelledby": `${R} ${z}`,
							className: "text-text-tertiary hover:text-text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded",
							children: [/* @__PURE__ */ l("span", {
								id: R,
								className: "sr-only",
								children: "Expand"
							}), /* @__PURE__ */ l(p, { className: "h-3.5 w-3.5" })]
						})] }) : /* @__PURE__ */ u("div", {
							className: "flex shrink-0 items-center gap-1",
							children: [
								E && /* @__PURE__ */ u("button", {
									type: "button",
									onClick: () => E(!0),
									ref: F,
									"aria-labelledby": `${R} ${z}`,
									className: "text-text-tertiary hover:text-text-primary flex h-6 w-6 items-center justify-center rounded",
									children: [/* @__PURE__ */ l("span", {
										id: R,
										className: "sr-only",
										children: "Collapse"
									}), /* @__PURE__ */ l(f, { className: "h-3.5 w-3.5" })]
								}),
								ae,
								/* @__PURE__ */ l("button", {
									type: "button",
									onClick: h,
									className: "text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded",
									"aria-label": "Close panel",
									children: /* @__PURE__ */ l(re, { className: "h-3.5 w-3.5" })
								})
							]
						})]
					}), /* @__PURE__ */ l("div", {
						hidden: T,
						inert: T,
						className: "min-h-0 flex-1 overflow-y-auto p-3",
						children: _
					})]
				})
			})]
		})
	});
}
//#endregion
export { m as DetailPanel };
