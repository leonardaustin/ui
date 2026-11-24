import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { OverlayContext as n } from "../../hooks/useOverlayStack.js";
import { PortalContainerContext as r, usePortalContainerRef as i } from "../../hooks/usePortalContainer.js";
import { useAnchoredPopup as a } from "../../hooks/useAnchoredPopup.js";
import { useDismiss as o } from "../../hooks/useDismiss.js";
import "../../hooks/usePopover.js";
import { useCallback as s, useId as c, useLayoutEffect as l, useRef as u } from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/ui/Popover.tsx
function m({ trigger: m, open: h, onOpenChange: g, placement: _ = "bottom", "aria-label": v, children: y, className: b, ref: x, id: S, ...C }) {
	let w = u(null), T = u(null), [E, D] = i(T), O = c(), k = S ?? O, A = (e) => {
		g(!1), e === "escape" && w.current?.focus();
	}, j = o(h, A, [T], [w]);
	a(h, w, T, {
		side: _,
		onAnchorHidden: () => A()
	});
	let M = s((e) => {
		if (D(e), e) return () => {
			e.contains(e.ownerDocument.activeElement) && w.current?.focus({ preventScroll: !0 }), D(null);
		};
	}, [D]);
	return l(() => {
		if (E) return t(x)(E) ?? void 0;
	}, [E, x]), l(() => {
		h && T.current?.focus();
	}, [h]), /* @__PURE__ */ p(d, { children: [m({
		ref: w,
		type: "button",
		onClick: () => g(!h),
		"aria-haspopup": "dialog",
		"aria-expanded": h,
		"aria-controls": h ? k : void 0
	}), h && /* @__PURE__ */ f("div", {
		...C,
		ref: M,
		id: k,
		role: "dialog",
		"aria-label": v,
		tabIndex: -1,
		className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "text-text-primary p-3 text-xs focus:outline-none", b),
		children: /* @__PURE__ */ f(n.Provider, {
			value: j,
			children: /* @__PURE__ */ f(r.Provider, {
				value: E,
				children: y
			})
		})
	})] });
}
//#endregion
export { m as Popover };
