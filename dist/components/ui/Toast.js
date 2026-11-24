import { cn as e } from "../../lib/cn.js";
import { toneClasses as t } from "../../lib/tones.js";
import { createContext as n, useCallback as r, useContext as i, useEffect as a, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { AlertTriangle as u, CheckCircle2 as d, Info as f, X as p, XCircle as m } from "lucide-react";
//#region src/components/ui/Toast.tsx
var h = n({ toast: () => {} });
function g() {
	return i(h);
}
function _({ children: e }) {
	let [t, n] = s([]), i = o(0), a = r((e, t, r = 4e3) => {
		let a = typeof e == "string" ? {
			type: e,
			message: t ?? "",
			duration: r
		} : {
			...e,
			duration: e.duration ?? 4e3
		}, o = i.current++;
		n((e) => [...e, {
			...a,
			id: o
		}]);
	}, []), u = r((e) => {
		n((t) => t.filter((t) => t.id !== e));
	}, []);
	return /* @__PURE__ */ l(h.Provider, {
		value: { toast: a },
		children: [e, /* @__PURE__ */ c("div", {
			className: "pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2",
			"aria-live": "polite",
			children: t.map((e) => /* @__PURE__ */ c(b, {
				toast: e,
				onDismiss: () => u(e.id)
			}, e.id))
		})]
	});
}
var v = {
	success: d,
	error: m,
	warning: u,
	info: f
}, y = {
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
};
function b({ toast: n, onDismiss: r }) {
	let [i, u] = s(100), d = v[n.type], f = t(y[n.type]), m = n.type === "error" || n.type === "warning", h = o(r);
	a(() => {
		h.current = r;
	}, [r]);
	let g = o(!1), _ = o(!1);
	return a(() => {
		if (!Number.isFinite(n.duration) || n.duration <= 0) return;
		let e = n.duration, t = Date.now(), r = setInterval(() => {
			let i = Date.now();
			!g.current && !_.current && (e -= i - t), t = i;
			let a = Math.max(0, e / n.duration * 100);
			u(a), a <= 0 && (h.current(), clearInterval(r));
		}, 50);
		return () => clearInterval(r);
	}, [n.duration]), /* @__PURE__ */ l("div", {
		role: m ? "alert" : "status",
		"aria-live": m ? "assertive" : "polite",
		onMouseEnter: () => {
			g.current = !0;
		},
		onMouseLeave: () => {
			g.current = !1;
		},
		onFocus: () => {
			_.current = !0;
		},
		onBlur: (e) => {
			e.currentTarget.contains(e.relatedTarget) || (_.current = !1);
		},
		className: "ui-glass ui-glass-popover bg-bg-secondary border-border animate-slide-down pointer-events-auto relative w-80 overflow-hidden rounded-lg border shadow-lg",
		children: [
			/* @__PURE__ */ c("div", { className: e("absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md", f.dot) }),
			/* @__PURE__ */ l("div", {
				className: "flex items-center gap-2.5 p-3 pl-3.5",
				children: [
					/* @__PURE__ */ c(d, { className: e("h-4 w-4 shrink-0", f.text) }),
					n.title ? /* @__PURE__ */ l("div", {
						className: "text-text-primary flex-1 text-xs",
						children: [/* @__PURE__ */ c("strong", {
							className: "block font-semibold",
							children: n.title
						}), /* @__PURE__ */ c("p", { children: n.message })]
					}) : /* @__PURE__ */ c("p", {
						className: "text-text-primary flex-1 text-xs",
						children: n.message
					}),
					/* @__PURE__ */ c("button", {
						type: "button",
						onClick: r,
						"aria-label": "Dismiss notification",
						className: "text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded",
						children: /* @__PURE__ */ c(p, {
							className: "h-3 w-3",
							"aria-hidden": "true"
						})
					})
				]
			}),
			/* @__PURE__ */ c("div", {
				className: "bg-bg-tertiary mx-3 mb-1 h-0.5 overflow-hidden rounded-md",
				children: /* @__PURE__ */ c("div", {
					className: "bg-border h-full rounded-md transition-all duration-[100ms]",
					style: { width: `${i}%` }
				})
			})
		]
	});
}
//#endregion
export { _ as ToastProvider, g as useToast };
