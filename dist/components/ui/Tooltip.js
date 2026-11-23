import { cn as e } from "../../lib/cn.js";
import { Fragment as t, cloneElement as n, isValidElement as r, useCallback as i, useEffect as a, useId as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/ui/Tooltip.tsx
var u = {
	top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
	bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
	left: "right-full top-1/2 -translate-y-1/2 mr-2",
	right: "left-full top-1/2 -translate-y-1/2 ml-2"
};
function d(e, t) {
	if (typeof e == "function") {
		let n = e(t);
		return typeof n == "function" ? n : () => e(null);
	}
	return e && (e.current = t), () => {
		e && (e.current = null);
	};
}
function f(t, n) {
	let r = { ...t };
	for (let [i, a] of Object.entries(n)) {
		if (a === void 0) continue;
		let n = t[i];
		if (/^on[A-Z]/.test(i) && typeof n == "function" && typeof a == "function") r[i] = (...e) => {
			n(...e), a(...e);
		};
		else if (i === "className") r[i] = e(n, a);
		else if (i === "style") r[i] = {
			...n,
			...a
		};
		else if (i === "id" && typeof n == "string" && n) continue;
		else i === "aria-describedby" ? r[i] = [n, a].filter(Boolean).join(" ") : r[i] = a;
	}
	return r;
}
function p({ element: e, merged: t, ...r }) {
	return n(e, {
		...t,
		...r
	});
}
var m = (e, t) => t instanceof Node && e.contains(t);
function h({ content: n, placement: h = "top", children: g, ref: _, ...v }) {
	let [y, b] = s(!1), x = o();
	a(() => {
		if (!y) return;
		let e = (e) => {
			e.key === "Escape" && (e.preventDefault(), b(!1));
		};
		return document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0);
	}, [y]);
	let S = r(g) && g.type !== t ? g : null, C = S?.props.ref, w = i((e) => {
		if (!e) return;
		let t = [d(C, e), d(_, e)];
		return () => t.forEach((e) => e());
	}, [C, _]), T = {
		onMouseOver: (e) => {
			let { currentTarget: t, target: n, relatedTarget: r } = e;
			m(t, n) && !m(t, r) && b(!0);
		},
		onMouseOut: (e) => {
			m(e.currentTarget, e.relatedTarget) || b(!1);
		},
		onFocus: (e) => {
			b(m(e.currentTarget, e.target));
		},
		onBlur: () => b(!1)
	}, E = S ? /* @__PURE__ */ c(p, {
		element: S,
		merged: f(S.props, {
			...v,
			"aria-describedby": [v["aria-describedby"], x].filter(Boolean).join(" ")
		}),
		ref: w
	}) : g;
	return /* @__PURE__ */ l("div", {
		...S ? T : f(T, v),
		ref: S ? void 0 : w,
		className: e("relative inline-flex", !S && v.className),
		children: [E, y && /* @__PURE__ */ c("div", {
			id: x,
			className: e("text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap", "ui-glass ui-glass-popover bg-bg-tertiary text-text-primary border-border rounded border shadow-md", "animate-fade-in pointer-events-none", u[h]),
			role: "tooltip",
			children: n
		})]
	});
}
//#endregion
export { h as Tooltip };
