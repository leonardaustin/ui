import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useFocusTrap as n } from "../../hooks/useFocusTrap.js";
import { OverlayContext as r, useBodyScrollLock as i, useOverlayEscape as a } from "../../hooks/useOverlayStack.js";
import { PortalContainerContext as o, usePortalContainerRef as s } from "../../hooks/usePortalContainer.js";
import { placeAgainstAnchor as c } from "../../lib/anchorPlacement.js";
import { useControlSize as l } from "../../providers/ControlSizeContext.js";
import { Button as u } from "./Button.js";
import { clampDragOffset as d, dragMarginFromSpacing as f, dragTranslate as p, nudgeDelta as m } from "../../lib/dialogDrag.js";
import { clampDialogSize as h, resizeDelta as g, resizeLimits as _ } from "../../lib/dialogResize.js";
import { useId as v, useLayoutEffect as y, useMemo as b, useRef as x } from "react";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
import { GripVertical as w, HandleBottomRight as T, X as E } from "lucide-react";
import { createPortal as D } from "react-dom";
//#region src/components/ui/Dialog.tsx
var O = {
	sm: "max-w-[400px]",
	md: "max-w-[576px]",
	lg: "max-w-[768px]",
	xl: "max-w-[1024px]"
}, k = "(min-width: 48rem)", A = "a[href], button, input, select, textarea, label, summary, [contenteditable]:not([contenteditable=\"false\"]), [role=\"button\"], [role=\"link\"], [tabindex]:not([tabindex=\"-1\"])", j = {
	x: 0,
	y: 0
};
function M(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top,
		right: t.left + e.clientWidth,
		bottom: t.top + e.clientHeight
	};
}
var N = {
	top: "bottom",
	bottom: "top",
	left: "right",
	right: "left"
};
function P(e, t) {
	return {
		x: e.x + t.x,
		y: e.y + t.y
	};
}
function F(e, t) {
	let n = t.getBoundingClientRect();
	return {
		left: n.left + e.offsetLeft - t.scrollLeft,
		top: n.top + e.offsetTop - t.scrollTop,
		width: e.offsetWidth,
		height: e.offsetHeight
	};
}
function I(e, t) {
	if (!(e instanceof HTMLElement) || !e.isConnected) return null;
	let n = e.ownerDocument;
	return e === n.body || e === n.documentElement || t.contains(e) ? null : e.getClientRects().length > 0 ? e : null;
}
function L(e) {
	return e.ownerDocument.defaultView?.matchMedia(k).matches ?? !1;
}
function R(e) {
	let t = e.ownerDocument.defaultView;
	return t ? f(t.getComputedStyle(e).getPropertyValue("--spacing"), parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize)) : 8;
}
function z(e, t, n) {
	e.style.width = n ? `${n.width}px` : "", e.style.height = n ? `${n.height}px` : "", e.style.maxWidth = n ? "none" : "", t && (t.style.flex = n ? "1 1 0%" : "", t.style.minHeight = n ? "0" : "", t.style.overflowY = n ? "auto" : "");
}
function B(e, t) {
	return {
		width: 280,
		height: e.offsetHeight - (t?.offsetHeight ?? 0) + 48
	};
}
function V({ open: e, draggable: t, resizable: n, remember: r, placement: i, anchorRef: a }, o, s, l) {
	let u = x(j), f = x(j), v = x(8), b = x(null), S = x(null), C = x(null), w = x(!1), T = x(null), E = e && t, D = e && n, O = r && (t || n);
	y(() => {
		let t = o.current, r = E ? s.current : null, m = l.current, g = t?.parentElement, y = t?.ownerDocument.defaultView, x = i !== "center";
		if (O || (C.current = null), (!e && !O || !n) && (T.current = null), !e || !t || !g || !y || !r && !x && !D) return;
		let k = x ? I(t.ownerDocument.activeElement, t) : null, A = () => x ? I(a?.current, t) ?? I(k, t) : null, V = () => P(f.current, u.current), H = () => {
			t.style.translate = p(V());
		}, U = () => {
			let e = F(t, g);
			if (w.current && C.current) {
				f.current = {
					x: C.current.left - e.left,
					y: C.current.top - e.top
				}, u.current = j, t.dataset.placement = "remembered", t.style.transformOrigin = "";
				return;
			}
			let n = L(t) ? A() : null, r = x && n ? c(i, n.getBoundingClientRect(), {
				size: {
					width: e.width,
					height: e.height
				},
				bounds: M(g),
				margin: v.current,
				gap: v.current
			}) : null;
			f.current = r ? {
				x: r.left - e.left,
				y: r.top - e.top
			} : j, t.dataset.placement = r?.side ?? "center", t.style.transformOrigin = r ? N[r.side] : "";
		}, W = () => {
			let e = u.current;
			if (!r && !w.current || !w.current && e.x === 0 && e.y === 0) return;
			let n = V(), i = d(n, n, t.getBoundingClientRect(), (r ?? s.current ?? t).getBoundingClientRect(), M(g), v.current);
			if (u.current = {
				x: i.x - f.current.x,
				y: i.y - f.current.y
			}, H(), w.current) {
				let e = F(t, g);
				C.current = {
					left: e.left + i.x,
					top: e.top + i.y
				};
			}
		}, G = () => {
			v.current = R(t), L(t) || (b.current = null, S.current = null, u.current = j, w.current = !1, C.current = null, T.current && z(t, m, null), T.current = null);
			let e = T.current;
			if (e && !S.current) {
				let n = M(g), r = v.current, i = w.current && C.current ? C.current : {
					left: n.left + r,
					top: n.top + r
				}, a = h(e, _(i, e, B(t, m), n, r)), o = Math.max(n.left + r, Math.min(i.left, n.right - r - a.width)), s = Math.max(n.top + r, Math.min(i.top, n.bottom - r - a.height));
				(a.width !== e.width || a.height !== e.height) && (T.current = a, z(t, m, a)), w.current && (o !== i.left || s !== i.top) && (C.current = {
					left: o,
					top: s
				});
			}
			b.current || U(), H(), W();
		}, K = 0, q = () => {
			K ||= y.requestAnimationFrame(() => {
				K = 0, G();
			});
		}, J = (e) => {
			e.target === t && W();
		}, Y = "ResizeObserver" in y ? new y.ResizeObserver(q) : null;
		return w.current = O && C.current !== null, D && T.current && z(t, m, T.current), G(), y.addEventListener("resize", q), y.addEventListener("scroll", q, {
			capture: !0,
			passive: !0
		}), t.addEventListener("animationend", J), Y?.observe(t), () => {
			y.cancelAnimationFrame(K), y.removeEventListener("resize", q), y.removeEventListener("scroll", q, { capture: !0 }), t.removeEventListener("animationend", J), Y?.disconnect(), b.current = null, S.current = null, f.current = j, u.current = j, w.current = !1, t.style.translate = "", t.style.transformOrigin = "", D && (t.style.userSelect = "", z(t, m, null)), delete t.dataset.placement;
		};
	}, [
		e,
		E,
		D,
		n,
		O,
		i,
		a,
		o,
		s,
		l
	]);
	let k = (e, t) => {
		let n = P(f.current, u.current), r = F(e, t);
		C.current = {
			left: r.left + n.x,
			top: r.top + n.y
		}, f.current = n, u.current = j, w.current = !0, e.dataset.placement = "remembered", e.style.transformOrigin = "";
	}, V = (e) => s.current ?? e, H = (e) => {
		let t = o.current, n = e.currentTarget, r = t?.parentElement;
		if (!t || !r || e.button !== 0 || !e.isPrimary || S.current) return;
		let i = e.target.closest(A);
		i && i !== n && n.contains(i) || !L(t) || (e.preventDefault(), n.setPointerCapture(e.pointerId), n.style.cursor = "grabbing", b.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			origin: P(f.current, u.current),
			dialog: t.getBoundingClientRect(),
			handle: V(n).getBoundingClientRect(),
			bounds: M(r),
			margin: v.current,
			moved: !1
		});
	}, U = (e) => {
		let t = b.current, n = o.current;
		if (!t || t.pointerId !== e.pointerId || !n) return;
		let r = d({
			x: t.origin.x + e.clientX - t.startX,
			y: t.origin.y + e.clientY - t.startY
		}, t.origin, t.dialog, t.handle, t.bounds, t.margin);
		t.moved ||= r.x !== t.origin.x || r.y !== t.origin.y, u.current = {
			x: r.x - f.current.x,
			y: r.y - f.current.y
		}, n.style.translate = p(r);
	}, W = (e) => {
		let t = b.current, n = e.currentTarget;
		if ((!t || t.pointerId === e.pointerId) && n.style.cursor === "grabbing" && (n.style.cursor = ""), t?.pointerId !== e.pointerId) return;
		b.current = null;
		let r = o.current, i = r?.parentElement;
		!(O || w.current) || !t.moved || !r || !i || k(r, i);
	}, G = (e) => {
		let t = m(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
		if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || b.current || S.current || !L(n)) return;
		e.preventDefault();
		let i = P(f.current, u.current), a = d({
			x: i.x + t.x,
			y: i.y + t.y
		}, i, n.getBoundingClientRect(), V(e.currentTarget).getBoundingClientRect(), M(r), v.current);
		a.x === i.x && a.y === i.y || (u.current = {
			x: a.x - f.current.x,
			y: a.y - f.current.y
		}, n.style.translate = p(a), (O || w.current) && k(n, r));
	}, K = (e, t, n) => {
		(!w.current || !C.current) && k(e, t);
		let r = C.current;
		if (!r) return;
		T.current = n, z(e, l.current, n);
		let i = F(e, t);
		f.current = {
			x: r.left - i.left,
			y: r.top - i.top
		}, u.current = j, e.style.translate = p(f.current);
	}, q = (e, t) => {
		let n = F(e, t), r = P(f.current, u.current), i = {
			width: n.width,
			height: n.height
		};
		return {
			current: i,
			limits: _({
				left: n.left + r.x,
				top: n.top + r.y
			}, i, B(e, l.current), M(t), v.current)
		};
	}, J = (e) => {
		let t = o.current, n = t?.parentElement;
		if (!t || !n || e.button !== 0 || !e.isPrimary || b.current || !L(t)) return;
		e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), t.style.userSelect = "none";
		let { current: r, limits: i } = q(t, n);
		S.current = {
			pointerId: e.pointerId,
			startX: e.clientX,
			startY: e.clientY,
			start: r,
			limits: i,
			moved: !1
		};
	}, Y = (e) => {
		let t = S.current, n = o.current, r = n?.parentElement;
		if (!t || t.pointerId !== e.pointerId || !n || !r) return;
		let i = h({
			width: t.start.width + e.clientX - t.startX,
			height: t.start.height + e.clientY - t.startY
		}, t.limits), a = t.moved ? T.current : t.start;
		i.width === a?.width && i.height === a.height || (t.moved = !0, K(n, r, i));
	}, X = (e) => {
		let t = S.current;
		if (t && t.pointerId !== e.pointerId) return;
		S.current = null;
		let n = o.current;
		n && (n.style.userSelect = "");
	};
	return {
		drag: E ? {
			pointer: {
				onPointerDown: H,
				onPointerMove: U,
				onPointerUp: W,
				onPointerCancel: W,
				onLostPointerCapture: W
			},
			onKeyDown: G
		} : void 0,
		resize: D ? {
			pointer: {
				onPointerDown: J,
				onPointerMove: Y,
				onPointerUp: X,
				onPointerCancel: X,
				onLostPointerCapture: X
			},
			onKeyDown: (e) => {
				let t = g(e.key, e.shiftKey), n = o.current, r = n?.parentElement;
				if (!t || e.altKey || e.ctrlKey || e.metaKey || !n || !r || b.current || S.current || !L(n)) return;
				e.preventDefault();
				let { current: i, limits: a } = q(n, r), s = h({
					width: i.width + t.width,
					height: i.height + t.height
				}, a);
				s.width === i.width && s.height === i.height || K(n, r, s);
			}
		} : void 0
	};
}
function H({ open: c, onClose: d, title: f, children: p, footer: m, className: h, size: g = "sm", draggable: _ = !1, resizable: y = !1, rememberPosition: k = !1, placement: A = "center", anchorRef: j, role: M = "dialog", description: N, "aria-label": P, "aria-describedby": F, initialFocusRef: I, returnFocusRef: L, busy: R = !1, closeOnEscape: z = !0, closeOnOverlayClick: B = !0, hideCloseButton: H = !1, ref: U, ...W }) {
	let G = l(), K = x(null), [q, J] = s(K), Y = b(() => t(U, J), [U, J]), X = x(null), ee = x(null), te = v(), ne = v();
	n(K, c, {
		initialFocusRef: I,
		returnFocusRef: L
	});
	let { drag: Z, resize: Q } = V({
		open: c,
		draggable: _,
		resizable: y,
		remember: k,
		placement: A,
		anchorRef: j
	}, K, X, ee), re = a(c, (e) => {
		!z || R || (e.preventDefault(), d());
	});
	if (i(c), !c) return null;
	let $ = Z && /* @__PURE__ */ S("button", {
		type: "button",
		"aria-label": "Move dialog",
		title: "Move dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-grip": "",
		className: "text-text-tertiary hover:text-text-secondary hover:bg-bg-hover focus-visible:outline-accent order-first hidden h-5 w-5 shrink-0 cursor-grab items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2 md:flex md:touch-none md:select-none",
		...Z.pointer,
		onKeyDown: Z.onKeyDown,
		children: /* @__PURE__ */ S(w, {
			className: "h-3.5 w-3.5",
			"aria-hidden": "true"
		})
	}), ie = Q && /* @__PURE__ */ S("button", {
		type: "button",
		"aria-label": "Resize dialog",
		title: "Resize dialog: drag, or use the arrow keys (Shift for larger steps)",
		"data-dialog-resize": "",
		className: "text-text-tertiary hover:text-text-primary focus-visible:outline-accent absolute right-0.5 bottom-0.5 hidden h-4 w-4 cursor-nwse-resize items-center justify-center rounded-md transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-0 md:flex md:touch-none md:select-none",
		...Q.pointer,
		onKeyDown: Q.onKeyDown,
		children: /* @__PURE__ */ S(T, {
			className: "h-4 w-4",
			"aria-hidden": "true"
		})
	});
	return D(/* @__PURE__ */ S(r.Provider, {
		value: re,
		children: /* @__PURE__ */ S(o.Provider, {
			value: q,
			children: /* @__PURE__ */ C("div", {
				className: "fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]",
				children: [/* @__PURE__ */ S("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: () => {
						B && !R && d();
					},
					"aria-hidden": "true"
				}), /* @__PURE__ */ C("div", {
					...W,
					ref: Y,
					className: e(`relative z-50 mx-1 mb-8 flex w-full ${O[g]} flex-col`, "ui-glass bg-bg-secondary border-border rounded-lg border", "animate-scale-in shadow-lg", h),
					role: M,
					tabIndex: -1,
					"aria-busy": R || void 0,
					"aria-modal": "true",
					"aria-labelledby": f ? te : W["aria-labelledby"],
					"aria-label": P ?? (f ? void 0 : "Dialog"),
					"aria-describedby": [N ? ne : void 0, F].filter(Boolean).join(" ") || void 0,
					children: [
						(f || !H || _) && /* @__PURE__ */ C("div", {
							ref: X,
							"data-control-size": G,
							className: e("ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5", _ && "md:cursor-move md:touch-none md:select-none"),
							...Z?.pointer,
							children: [f && /* @__PURE__ */ S("h3", {
								id: te,
								className: "text-text-primary min-w-0 text-sm font-medium",
								children: f
							}), !H && /* @__PURE__ */ S(u, {
								type: "button",
								variant: "icon",
								size: "sm",
								"aria-disabled": R || void 0,
								onClick: () => {
									R || d();
								},
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ S(E, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ C("div", {
							ref: ee,
							className: "ui-surface-body p-3",
							children: [N && /* @__PURE__ */ S("div", {
								id: ne,
								className: "text-text-secondary mb-3 text-xs",
								children: N
							}), p]
						}),
						m && /* @__PURE__ */ C("div", {
							"data-control-size": G,
							className: e("ui-bar border-border bg-bg-primary/50 flex shrink-0 rounded-b-lg border-t px-3 py-2.5", ie && "md:pr-6", $ ? "items-center gap-2" : "flex-col justify-center"),
							children: [$ ? /* @__PURE__ */ S("div", {
								className: "flex min-w-0 flex-1 flex-col justify-center",
								children: m
							}) : m, $]
						}),
						$ && !m && /* @__PURE__ */ S("div", {
							className: "hidden px-3 pb-2 md:flex",
							children: $
						}),
						ie && !m && !$ && /* @__PURE__ */ S("div", {
							"data-dialog-resize-spacer": "",
							className: "hidden h-5 md:block"
						}),
						ie
					]
				})]
			})
		})
	}), document.body);
}
//#endregion
export { H as Dialog };
