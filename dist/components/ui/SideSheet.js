import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useFocusTrap as n } from "../../hooks/useFocusTrap.js";
import { OverlayContext as r, useBodyScrollLock as i, useOverlayEscape as a } from "../../hooks/useOverlayStack.js";
import { PortalContainerContext as o, usePortalContainerRef as s } from "../../hooks/usePortalContainer.js";
import { useControlSize as c } from "../../providers/ControlSizeContext.js";
import { Button as l } from "./Button.js";
import { panelResizeKey as u } from "../../lib/panelResize.js";
import { useCallback as d, useEffect as f, useId as p, useMemo as m, useRef as h, useState as g } from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
import { X as y } from "lucide-react";
import { createPortal as b } from "react-dom";
//#region src/components/ui/SideSheet.tsx
function x({ open: u, onClose: d, title: f, children: g, footer: x, side: S = "right", widthClassName: C = "w-[360px]", resizable: w = !1, className: T, contentClassName: D, ref: O, style: k, id: A, ...j }) {
	let M = p(), N = c(), P = h(null), [F, I] = s(P), L = m(() => t(O, I), [O, I]);
	n(P, u);
	let R = a(u, () => d());
	return i(u), u ? b(/* @__PURE__ */ _(r.Provider, {
		value: R,
		children: /* @__PURE__ */ _(o.Provider, {
			value: F,
			children: /* @__PURE__ */ v("div", {
				className: "fixed inset-0 z-50",
				children: [/* @__PURE__ */ _("div", {
					className: "bg-bg-overlay animate-fade-in absolute inset-0",
					onClick: d
				}), /* @__PURE__ */ v("div", {
					...j,
					ref: L,
					id: A ?? (w ? M : void 0),
					className: e("ui-glass bg-bg-secondary border-border absolute inset-y-0 flex flex-col shadow-lg", C, S === "right" ? "animate-slide-in-right right-0 border-l" : "animate-slide-in-left left-0 border-r", T),
					style: {
						maxWidth: "calc(100vw - 2rem)",
						...k
					},
					role: "dialog",
					"aria-modal": "true",
					"aria-label": typeof f == "string" ? f : "Panel",
					children: [
						/* @__PURE__ */ v("div", {
							"data-control-size": N,
							className: "ui-bar border-border flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2.5",
							children: [f && /* @__PURE__ */ _("h3", {
								className: "text-text-primary truncate text-sm font-medium",
								children: f
							}), /* @__PURE__ */ _(l, {
								type: "button",
								variant: "icon",
								size: "sm",
								onClick: d,
								className: "ml-auto shrink-0",
								"aria-label": "Close",
								children: /* @__PURE__ */ _(y, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ _("div", {
							className: e("ui-surface-body flex-1 overflow-y-auto p-3", D),
							children: g
						}),
						x && /* @__PURE__ */ _("div", {
							"data-control-size": N,
							className: "ui-bar border-border bg-bg-primary/50 flex shrink-0 items-center gap-2 border-t px-3 py-2.5",
							children: x
						}),
						w && F && /* @__PURE__ */ _(E, {
							sheet: F,
							side: S
						})
					]
				})]
			})
		})
	}), document.body) : null;
}
function S(e, t) {
	e.style.width = t === null ? "" : `${t}px`;
}
function C(e) {
	let t = e.ownerDocument.body, n = t.style.userSelect, r = t.style.cursor;
	return t.style.userSelect = "none", t.style.cursor = "col-resize", () => {
		t.style.userSelect = n, t.style.cursor = r;
	};
}
function w(e) {
	let t = e.style.width;
	S(e, null);
	let n = e.getBoundingClientRect().width;
	return e.style.width = t, n;
}
function T(e) {
	let t = e.ownerDocument.defaultView, n = parseFloat(t.getComputedStyle(e.ownerDocument.documentElement).fontSize);
	return Math.max(0, t.innerWidth - 2 * n);
}
function E({ sheet: t, side: n }) {
	let r = t.ownerDocument.defaultView, [i, a] = g(() => ({
		width: t.getBoundingClientRect().width,
		min: t.getBoundingClientRect().width,
		max: T(t),
		desktop: r.innerWidth >= 640
	})), o = h(null), s = h(null), c = h(null);
	function l() {
		s.current = null, c.current?.(), c.current = null;
	}
	let p = d((e) => {
		let n = T(t), i = Math.min(w(t), n), s = r.innerWidth >= 640;
		o.current = s && e !== null ? Math.min(n, Math.max(i, e)) : null, o.current !== null && o.current <= i && (o.current = null), S(t, o.current), a({
			width: t.getBoundingClientRect().width,
			min: i,
			max: n,
			desktop: s
		});
	}, [t, r]);
	return f(() => {
		let e = () => {
			l(), p(o.current);
		}, n = new ResizeObserver(() => p(o.current));
		return n.observe(t), r.addEventListener("resize", e), () => {
			n.disconnect(), r.removeEventListener("resize", e), l(), S(t, null);
		};
	}, [
		p,
		t,
		r
	]), i.desktop ? /* @__PURE__ */ _("div", {
		role: "separator",
		tabIndex: 0,
		"aria-orientation": "vertical",
		"aria-label": "Resize panel",
		"aria-controls": t.id,
		"aria-valuenow": Math.round(i.width),
		"aria-valuemin": Math.round(i.min),
		"aria-valuemax": Math.round(i.max),
		className: e("hover:bg-accent/30 active:bg-accent/50 focus-visible:outline-accent absolute inset-y-0 z-10 w-1 cursor-col-resize select-none focus-visible:outline-2 focus-visible:outline-offset-0", n === "right" ? "left-0" : "right-0"),
		style: { touchAction: "none" },
		onPointerDown: (e) => {
			if (!e.isPrimary || e.button !== 0 || s.current) return;
			e.preventDefault(), e.currentTarget.focus(), e.currentTarget.setPointerCapture(e.pointerId);
			let n = w(t);
			s.current = {
				pointerId: e.pointerId,
				x: e.clientX,
				width: o.current ?? n
			}, c.current = C(t);
		},
		onPointerMove: (e) => {
			let t = s.current;
			!t || t.pointerId !== e.pointerId || p(t.width + (e.clientX - t.x) * (n === "right" ? -1 : 1));
		},
		onPointerUp: (e) => {
			s.current?.pointerId === e.pointerId && (l(), e.currentTarget.releasePointerCapture(e.pointerId));
		},
		onPointerCancel: (e) => {
			s.current?.pointerId === e.pointerId && l();
		},
		onLostPointerCapture: l,
		onDoubleClick: () => p(null),
		onKeyDown: (e) => {
			let r = u(e.key, o.current ?? w(t), 16, n);
			r !== void 0 && (e.preventDefault(), p(r));
		}
	}) : null;
}
//#endregion
export { x as SideSheet };
