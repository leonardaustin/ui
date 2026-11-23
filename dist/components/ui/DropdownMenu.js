import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { usePortalContainer as n } from "../../hooks/usePortalContainer.js";
import { useAnchoredPopup as r } from "../../hooks/useAnchoredPopup.js";
import { useDismiss as i } from "../../hooks/useDismiss.js";
import { Button as a } from "./Button.js";
import { findTypeaheadMatch as o, isTypeaheadKey as ee } from "../../lib/typeahead.js";
import { Fragment as s, cloneElement as c, isValidElement as te, useCallback as ne, useEffect as re, useId as ie, useMemo as ae, useRef as l, useState as u } from "react";
import { Fragment as oe, jsx as d, jsxs as f } from "react/jsx-runtime";
import { Check as se } from "lucide-react";
import { createPortal as ce } from "react-dom";
//#region src/components/ui/DropdownMenu.tsx
var le = (e) => !e.divider;
function ue(e) {
	return e.checked === void 0 ? "menuitem" : e.type === "radio" ? "menuitemradio" : "menuitemcheckbox";
}
function p({ trigger: p, triggerIcon: m, triggerLabel: h, triggerSize: de = "xs", items: g, header: _, renderLink: v, align: fe = "right", ref: y, id: pe, className: b, style: x, onKeyDown: me, onFocus: S, onBlur: C, ...w }) {
	let T = m ? /* @__PURE__ */ d(a, {
		variant: "icon",
		size: de,
		hideLabel: !0,
		icon: m,
		"aria-label": h,
		title: h
	}) : p, [E, D] = u(!1), O = _ != null && _ !== !1, he = n(), [k, ge] = u(0), [A, _e] = u(""), [j, M] = u(-1), N = l(null), P = l(null), F = l(null), I = l(null), L = l([]), R = l(!1), z = ie(), B = pe ?? `${z}menu`, V = `${z}header`, H = te(T) && T.type !== s ? T : null, U = H?.props.id, W = typeof U == "string" && U ? U : `${z}trigger`, G = [];
	g.forEach((e) => {
		le(e) && G.push({
			item: e,
			index: G.length
		});
	});
	let K = G.filter(({ item: e }) => !e.disabled), ve = () => {
		let e = N.current;
		return e ? H ? [...e.querySelectorAll("[id]")].find((e) => e.id === W) ?? e.querySelector("button, a[href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])") ?? e.firstElementChild ?? e : e : null;
	}, q = ne((e) => {
		D(!1), M(-1), (e === "escape" || e === "select" || e === "tab") && P.current?.focus();
	}, []);
	i(E, q, [I], [N]), r(E, P, I, {
		side: "bottom",
		align: fe === "left" ? "start" : "end",
		gap: 4,
		onAnchorHidden: q
	}), re(() => {
		E && (j >= 0 ? L.current[j] : F.current)?.focus();
	}, [
		E,
		j,
		O
	]);
	function J(e) {
		let t = ve();
		P.current = t, _e(t?.id ?? ""), ge(t?.getBoundingClientRect().width ?? 0), D(!0), M((e === "first" ? K[0] : e === "last" ? K.at(-1) : null)?.index ?? -1);
	}
	function ye(e) {
		if (!(R.current && (R.current = !1, e.detail === 0))) {
			if (E) {
				q();
				return;
			}
			J(e.detail === 0 ? "first" : "menu");
		}
	}
	function be(e) {
		R.current = !1, e.key === "ArrowDown" || e.key === "ArrowUp" ? (e.preventDefault(), J(e.key === "ArrowDown" ? "first" : "last")) : !H && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), E ? q("select") : J("first"));
	}
	function Y(e) {
		!e || e.item.disabled || (q("select"), e.item.onClick?.());
	}
	function X(e, t) {
		let n = G.length, r = e === -1 && t === -1 ? n : e;
		for (let e = 1; e <= n; e++) {
			let i = G[(r + t * e + n * 2) % n];
			if (!i.item.disabled) return i.index;
		}
		return -1;
	}
	function xe(e) {
		let t = o(G.map((e) => e.item.label), (e) => !!G[e].item.disabled, j, e);
		return t === -1 ? j : G[t].index;
	}
	function Se(e) {
		let { key: t } = e, n = null;
		if (t === "ArrowDown") n = X(j, 1);
		else if (t === "ArrowUp") n = X(j, -1);
		else if (t === "Home") n = K[0]?.index ?? -1;
		else if (t === "End") n = K.at(-1)?.index ?? -1;
		else if (t === "Enter" || t === " ") {
			let n = L.current.indexOf(e.target), r = n === -1 ? void 0 : G[n];
			if (!r || r.item.disabled) {
				e.preventDefault();
				return;
			}
			if (r.item.href !== void 0 && t === "Enter") return;
			e.preventDefault(), t === " " && (R.current = !0), r.item.href === void 0 ? Y(r) : L.current[n]?.click();
			return;
		} else if (t === "Tab") {
			q("tab");
			return;
		} else t !== " " && ee(e) && (n = xe(t));
		n !== null && (e.preventDefault(), M(n));
	}
	let Ce = ae(() => t(F, O ? void 0 : I, y), [y, O]), Z = {
		"aria-haspopup": "menu",
		"aria-expanded": E,
		"aria-controls": E ? B : void 0
	}, Q = -1, $ = E ? /* @__PURE__ */ d("div", {
		...w,
		ref: Ce,
		id: B,
		role: "menu",
		"aria-labelledby": A || W,
		"aria-describedby": O ? V : void 0,
		tabIndex: -1,
		onKeyDown: (e) => {
			me?.(e), !e.defaultPrevented && Se(e);
		},
		onFocus: (e) => {
			S?.(e), e.stopPropagation();
		},
		onBlur: (e) => {
			C?.(e), e.stopPropagation();
		},
		className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none", b),
		style: {
			...x,
			minWidth: k
		},
		children: g.map((t, n) => {
			if (t.divider) return /* @__PURE__ */ d("div", {
				className: "border-border my-1 border-t",
				role: "separator"
			}, `divider-${n}`);
			Q++;
			let r = G[Q], i = t.checked !== void 0, a = /* @__PURE__ */ f("button", {
				type: "button",
				ref: (e) => {
					L.current[r.index] = e;
				},
				role: ue(t),
				"aria-checked": i ? t.checked : void 0,
				"aria-disabled": t.disabled || void 0,
				tabIndex: r.index === j ? 0 : -1,
				onClick: () => Y(r),
				onMouseDown: t.disabled ? (e) => e.preventDefault() : void 0,
				onFocus: () => M(r.index),
				onMouseMove: () => {
					!t.disabled && r.index !== j && M(r.index);
				},
				className: e("flex h-7 w-full items-center gap-2 px-4 text-left text-xs", "transition-colors duration-[100ms]", "focus:outline-none", t.disabled ? "text-text-secondary cursor-not-allowed opacity-50" : t.danger ? "text-danger-fg hover:bg-danger-muted focus:bg-danger-muted cursor-pointer" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover cursor-pointer"),
				children: [
					t.icon && /* @__PURE__ */ d("span", {
						className: "flex h-3.5 w-3.5 shrink-0 items-center",
						children: t.icon
					}),
					/* @__PURE__ */ d("span", {
						className: "flex-1",
						children: t.label
					}),
					t.badge != null && /* @__PURE__ */ d("span", {
						className: "ml-auto",
						children: t.badge
					}),
					t.shortcut && /* @__PURE__ */ d("span", {
						className: "text-2xs text-text-tertiary ml-auto pl-4 font-mono",
						children: t.shortcut
					}),
					t.checked && /* @__PURE__ */ d(se, { className: "text-accent ml-auto h-3.5 w-3.5 shrink-0" })
				]
			}, `item-${n}`);
			if (t.href === void 0) return a;
			let o = {
				...a.props,
				type: void 0,
				href: t.disabled ? void 0 : t.href,
				target: t.target,
				rel: t.rel,
				download: t.download,
				"aria-current": t["aria-current"],
				onClick: (e) => {
					if (t.disabled) {
						e.preventDefault();
						return;
					}
					e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || Y(r);
				},
				onAuxClick: t.disabled ? (e) => e.preventDefault() : void 0,
				ref: (e) => {
					L.current[r.index] = e;
				}
			};
			return delete o.key, /* @__PURE__ */ d(s, { children: v ? v(o, t) : /* @__PURE__ */ d("a", { ...o }) }, `item-${n}`);
		})
	}) : null;
	return /* @__PURE__ */ f(oe, { children: [/* @__PURE__ */ d("div", {
		ref: N,
		onClick: ye,
		onKeyDown: be,
		...H ? {} : {
			...Z,
			id: W,
			role: "button",
			tabIndex: 0
		},
		children: H ? c(H, {
			...Z,
			id: W
		}) : T
	}), $ && ce(O ? /* @__PURE__ */ f("div", {
		ref: I,
		onMouseDown: (e) => {
			F.current?.contains(e.target) || e.preventDefault();
		},
		className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-max rounded-md border py-1 shadow-lg focus:outline-none", b),
		style: {
			...x,
			minWidth: k
		},
		children: [/* @__PURE__ */ d("div", {
			id: V,
			className: "border-border border-b px-4 py-2",
			children: _
		}), c($, {
			className: "focus:outline-none",
			style: void 0
		})]
	}) : $, he ?? document.body)] });
}
//#endregion
export { p as DropdownMenu };
