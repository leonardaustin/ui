import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useControllableState as n } from "../../hooks/useControllableState.js";
import { usePopover as r } from "../../hooks/usePopover.js";
import { findTypeaheadMatch as i, isTypeaheadKey as a } from "../../lib/typeahead.js";
import { useTypeahead as o } from "../../hooks/useTypeahead.js";
import { FieldContext as s } from "./FieldContext.js";
import { useContext as ee, useEffect as c, useMemo as te, useRef as l, useState as ne } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { Check as f, ChevronDown as re } from "lucide-react";
//#region src/components/ui/SelectDropdown.tsx
function ie(e) {
	let t = 0;
	return e.map((e) => {
		let n = t;
		return t += "options" in e ? e.options.length : 1, {
			entry: e,
			firstIndex: n
		};
	});
}
function p({ options: p, value: m, defaultValue: h = null, onValueChange: g, label: _, labelPlacement: v = "above", placeholder: y = "Select...", className: b, size: x = "md", disabled: S = !1, ref: C, ...w }) {
	let T = ee(s), [E, D] = n({
		value: m,
		defaultValue: h,
		onChange: (e) => g?.(e)
	}), O = v === "placeholder" && _ ? _ : _ ? void 0 : T?.placeholderLabel, k = p.flatMap((e) => "options" in e ? e.options : [e]), [A, j] = ne(-1), { open: M, show: ae, close: N, rootRef: P, anchorRef: oe, triggerRef: se, popupRef: F, labelId: I, popupId: L, triggerAria: R } = r({
		haspopup: "listbox",
		matchWidth: !0,
		labelled: !!_,
		disabled: S
	}), z = te(() => t(C, P), [C, P]), B = o(), V = l(!1), H = l(!1), U = (e) => `${L}-option-${e}`, W = !_ && T?.id ? T.labelId : void 0, G = T?.claimLabel;
	c(() => {
		if (W && G) return G();
	}, [W, G]), c(() => {
		S && N("disabled");
	}, [
		S,
		M,
		N
	]);
	let K = O && !E ? void 0 : k.find((e) => e.value === E), q = l(!1);
	c(() => {
		q.current && !M && B.clear(), q.current = M;
	}), c(() => {
		!M || !V.current || (V.current = !1, document.getElementById(U(A))?.scrollIntoView({ block: "nearest" }));
	});
	function J() {
		let e = k.findIndex((e) => e.value === E);
		B.clear(), X(e >= 0 && !k[e].disabled ? e : Q(1)), ae();
	}
	function Y(e) {
		S || e.disabled || (D(e.value), N("select"));
	}
	function ce(e) {
		S || H.current && (H.current = !1, e.detail === 0) || (M ? N("toggle") : J());
	}
	function X(e) {
		V.current = !0, j(e);
	}
	function Z(e, t) {
		for (let n = e + t; n >= 0 && n < k.length; n += t) if (!k[n].disabled) return n;
		return e;
	}
	function Q(e) {
		let t = Z(e === 1 ? -1 : k.length, e);
		return t >= 0 && t < k.length ? t : -1;
	}
	function le(e) {
		e.preventDefault();
		let t = B.push(e.key), n = k.map((e) => e.label), r = (e) => !!k[e].disabled;
		if (M) {
			let e = i(n, r, A, t);
			e !== -1 && X(e);
		} else {
			let e = i(n, r, k.findIndex((e) => e.value === E), t);
			e !== -1 && k[e].value !== E && D(k[e].value);
		}
	}
	function ue(e) {
		e.key === " " && H.current && e.preventDefault();
	}
	function de(e) {
		if (!S) {
			if (H.current = !1, e.key === " " && (M || B.active()) && (H.current = !0), a(e) && (e.key !== " " || B.active())) {
				le(e);
				return;
			}
			if (!M) {
				(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), J());
				return;
			}
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault(), X(Z(A, 1));
					break;
				case "ArrowUp":
					e.preventDefault(), X(Z(A, -1));
					break;
				case "Home":
					e.preventDefault();
					{
						let e = Q(1);
						e !== -1 && X(e);
					}
					break;
				case "End":
					e.preventDefault();
					{
						let e = Q(-1);
						e !== -1 && X(e);
					}
					break;
				case "Enter":
				case " ": {
					e.preventDefault();
					let t = k[A];
					t && !t.disabled && Y(t);
					break;
				}
				case "Escape":
					e.preventDefault(), N("escape");
					break;
			}
		}
	}
	function $(t, n) {
		return /* @__PURE__ */ d("li", {
			id: U(n),
			role: "option",
			"aria-selected": t.value === E,
			"aria-disabled": t.disabled || void 0,
			onClick: () => {
				t.disabled || Y(t);
			},
			onMouseEnter: () => {
				t.disabled || j(n);
			},
			className: e("font-control flex h-7 w-full items-center gap-2 px-3 text-xs", !t.disabled && "cursor-pointer", "transition-colors duration-[100ms]", t.disabled ? "text-text-disabled cursor-not-allowed" : n === A ? "bg-accent-muted text-accent-fg" : t.value === E ? "text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
			children: [/* @__PURE__ */ u("span", {
				className: "flex-1 truncate",
				children: t.label
			}), t.value === E && /* @__PURE__ */ u(f, { className: "h-3 w-3 shrink-0" })]
		}, t.value);
	}
	let fe = ie(p);
	return /* @__PURE__ */ d("div", {
		...w,
		className: e("flex flex-col gap-1.5", b),
		ref: z,
		children: [_ && /* @__PURE__ */ u("span", {
			id: I,
			className: e("ui-field-label font-label text-xs font-medium", v === "placeholder" && "sr-only"),
			children: _
		}), /* @__PURE__ */ d("div", {
			className: "relative",
			ref: oe,
			children: [
				/* @__PURE__ */ u("button", {
					type: "button",
					disabled: S,
					onClick: ce,
					onKeyDown: de,
					onKeyUp: ue,
					ref: se,
					...R,
					id: T?.id ?? R.id,
					"aria-labelledby": _ && T?.id ? `${I} ${T.id}` : W && G ? `${W} ${T?.id}` : R["aria-labelledby"],
					"aria-describedby": T?.describedBy,
					"aria-invalid": T?.invalid || void 0,
					"aria-activedescendant": M && A >= 0 && k[A] && !k[A].disabled ? U(A) : void 0,
					className: e("font-control flex w-full cursor-pointer items-center rounded-md text-xs", "bg-bg-secondary border-border text-text-primary border", "transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2", x === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7", S ? "cursor-not-allowed opacity-40" : "hover:bg-bg-hover hover:border-border-strong"),
					children: K ? K.label : /* @__PURE__ */ u("span", {
						className: "text-text-placeholder",
						"aria-hidden": O ? !0 : void 0,
						children: O ?? y
					})
				}),
				/* @__PURE__ */ u(re, { className: e("text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform", x === "sm" ? "right-1.5" : "right-2", M && "rotate-180") }),
				M && !S && /* @__PURE__ */ u("div", {
					ref: F,
					className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "overflow-hidden"),
					children: /* @__PURE__ */ u("ul", {
						id: L,
						className: "max-h-48 overflow-y-auto py-1",
						role: "listbox",
						children: fe.map(({ entry: e, firstIndex: t }, n) => "options" in e ? /* @__PURE__ */ d("li", {
							role: "group",
							"aria-label": e.label,
							children: [/* @__PURE__ */ u("div", {
								"aria-hidden": "true",
								className: "text-text-tertiary px-3 py-1 text-2xs font-medium",
								children: e.label
							}), /* @__PURE__ */ u("ul", {
								role: "presentation",
								children: e.options.map((e, n) => $(e, t + n))
							})]
						}, `group-${n}`) : $(e, t))
					})
				})
			]
		})]
	});
}
//#endregion
export { p as SelectDropdown };
