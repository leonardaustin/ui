import { useAnchoredPopup as e } from "./useAnchoredPopup.js";
import { useDismiss as t } from "./useDismiss.js";
import { useCallback as n, useId as r, useLayoutEffect as i, useRef as a, useState as o } from "react";
//#region src/hooks/usePopover.ts
var s = "ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg";
function c({ haspopup: s, matchWidth: c = !1, disabled: l = !1, labelled: u = !1, flip: d = !0, onOpenChange: f }) {
	let [p, m] = o(!1), h = a(!1), g = a(f);
	i(() => {
		g.current = f;
	});
	let _ = p && !l, v = a(null), y = a(null), b = a(null), x = a(null), S = r(), C = `${S}-label`, w = `${S}-trigger`, T = `${S}-popup`, E = n((e) => {
		if (!h.current) return;
		h.current = !1;
		let t = x.current, n = t?.ownerDocument.activeElement ?? null, r = !!t && t.contains(n), i = !n || n === t?.ownerDocument.body;
		m(!1), e === "escape" || e === "select" && (r || i) ? b.current?.focus() : e === "anchor-hidden" && r && b.current?.focus({ preventScroll: !0 }), g.current?.(!1, e ?? "blur");
	}, []), D = n((e) => {
		h.current || l || (h.current = !0, m(!0), g.current?.(!0, typeof e == "string" ? e : "toggle"));
	}, [l]);
	return t(_, E, [v]), e(_, y, x, {
		side: "bottom",
		align: "start",
		gap: 4,
		matchAnchorWidth: c,
		flip: d,
		onAnchorHidden: () => E("anchor-hidden")
	}), {
		open: _,
		show: D,
		close: E,
		rootRef: v,
		anchorRef: y,
		triggerRef: b,
		popupRef: x,
		labelId: C,
		triggerId: w,
		popupId: T,
		triggerAria: {
			id: w,
			"aria-haspopup": s,
			"aria-expanded": _,
			"aria-controls": _ ? T : void 0,
			"aria-labelledby": u ? `${C} ${w}` : void 0
		}
	};
}
//#endregion
export { s as POPOVER_PANEL_CLASS, c as usePopover };
