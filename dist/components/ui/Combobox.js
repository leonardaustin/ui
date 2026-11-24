import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useControlSize as n } from "../../providers/ControlSizeContext.js";
import { useControllableState as r } from "../../hooks/useControllableState.js";
import { usePopover as i } from "../../hooks/usePopover.js";
import { useEffect as a, useId as ee, useMemo as te, useReducer as ne, useRef as o, useState as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { Check as re, ChevronDown as ie, Search as ae } from "lucide-react";
//#region src/components/ui/Combobox.tsx
function u({ options: u, value: oe, defaultValue: d = "", onValueChange: se, onOptionChange: ce, placeholder: f = "Select...", label: p, className: le, controlSize: ue, id: de, name: m, disabled: h, "aria-label": g, "aria-describedby": _, "aria-invalid": v, query: y, onQueryChange: fe, filterOptions: pe = !0, selectedOption: b, renderOption: x, loading: S = !1, loadingMessage: me = "Loading results…", error: C, onRetry: w, emptyMessage: he = "No results", footer: T, onOpenChange: ge, flip: _e = !0, ref: E, onBlur: ve, ...ye }) {
	let D = n(ue), { open: O, show: be, close: k, rootRef: A, anchorRef: j, triggerRef: M, popupRef: N, labelId: P, triggerId: F, popupId: I } = i({
		haspopup: "listbox",
		matchWidth: !0,
		disabled: h,
		flip: _e,
		onOpenChange: ge
	}), [L, xe] = r({
		value: oe,
		defaultValue: d,
		onChange: se
	}), [Se, R] = s(""), [Ce, z] = s(0), [B, we] = s(() => u.find((e) => e.value === L)), V = o(null), H = o(!1), [, Te] = ne((e) => e + 1, 0);
	function U() {
		H.current = !0, Te();
	}
	let W = ee(), Ee = de ?? `${W}-search`, G = `${W}-selected`, K = y ?? Se, q = u.find((e) => e.value === L) ?? (b?.value === L ? b : void 0) ?? (B?.value === L ? B : void 0), J = pe ? u.filter((e) => e.label.toLowerCase().includes(K.toLowerCase())) : u, Y = Math.min(Ce, Math.max(J.length - 1, 0)), X = J[Y]?.disabled ? J.findIndex((e) => !e.disabled) : Y, Z = J[X];
	function De(e) {
		y === void 0 && R(e), fe?.(e), z(0), U();
		let t = N.current?.ownerDocument.getElementById(I);
		t && (t.scrollTop = 0);
	}
	function Q(e) {
		e.disabled || (we(e), xe(e.value), ce?.(e), k("select"));
	}
	function Oe(e) {
		if ([
			"ArrowDown",
			"ArrowUp",
			"Home",
			"End"
		].includes(e.key)) {
			e.preventDefault();
			let t = e.key === "ArrowUp" || e.key === "End" ? -1 : 1, n = e.key === "Home" ? 0 : e.key === "End" ? J.length - 1 : X + t;
			for (; n >= 0 && n < J.length && J[n].disabled;) n += t;
			n >= 0 && n < J.length && (z(n), U());
		} else e.key === "Enter" ? (e.preventDefault(), Z && Q(Z)) : e.key === "Escape" && (e.preventDefault(), e.stopPropagation(), k("escape"));
	}
	function $(e) {
		be(e), y === void 0 && R("");
		let t = (y === void 0 ? u : J).findIndex((e) => e.value === L && !e.disabled);
		z(Math.max(t, 0)), U(), setTimeout(() => V.current?.focus(), 0);
	}
	a(() => {
		h && k("disabled");
	}, [
		h,
		O,
		k
	]), a(() => {
		if (!O || !H.current) return;
		H.current = !1;
		let e = N.current?.ownerDocument, t = e?.getElementById(I), n = e?.getElementById(`${I}-${X}`);
		if (!t || !n) return;
		let r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), a = t.offsetHeight ? r.height / t.offsetHeight : 1;
		i.top < r.top ? t.scrollTop -= (r.top - i.top) / a : i.bottom > r.bottom && (t.scrollTop += (i.bottom - r.bottom) / a);
	});
	let ke = te(() => t(A, E), [A, E]);
	return /* @__PURE__ */ l("div", {
		...ye,
		className: e("flex flex-col gap-1.5", le),
		ref: ke,
		onBlur: (e) => {
			ve?.(e), !e.defaultPrevented && O && !e.currentTarget.contains(e.relatedTarget) && k("blur");
		},
		children: [
			p && /* @__PURE__ */ c("span", {
				id: P,
				className: "ui-field-label font-label text-xs font-medium",
				children: p
			}),
			m && /* @__PURE__ */ c("input", {
				type: "hidden",
				name: m,
				value: L,
				disabled: h
			}),
			/* @__PURE__ */ l("div", {
				className: "relative",
				ref: j,
				children: [
					/* @__PURE__ */ c("button", {
						ref: M,
						id: F,
						"data-control-size": D,
						type: "button",
						disabled: h,
						"aria-label": g ?? (p ? void 0 : f),
						"aria-labelledby": p && !g ? `${P} ${G}` : void 0,
						"aria-describedby": _,
						"aria-invalid": v,
						"aria-expanded": O,
						"aria-haspopup": "listbox",
						"aria-controls": O ? I : void 0,
						onClick: () => O ? k("toggle") : $("toggle"),
						onKeyDown: (e) => {
							(e.key === "ArrowDown" || e.key === "ArrowUp") && (e.preventDefault(), $("keyboard"));
						},
						className: e("ui-sized-control font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs", "bg-bg-secondary border-border text-text-primary border", "hover:bg-bg-hover hover:border-border-strong", "transition-colors duration-[100ms] disabled:cursor-not-allowed disabled:opacity-40", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"),
						children: /* @__PURE__ */ c("span", {
							id: G,
							children: q ? q.label : /* @__PURE__ */ c("span", {
								className: "text-text-placeholder",
								children: L || f
							})
						})
					}),
					/* @__PURE__ */ c(ie, {
						"aria-hidden": "true",
						className: e("text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform", O && "rotate-180")
					}),
					O && /* @__PURE__ */ l("div", {
						ref: N,
						className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg", "flex flex-col overflow-hidden"),
						onMouseDown: (e) => {
							e.target.closest("input, textarea, select, [contenteditable]") || e.preventDefault();
						},
						children: [
							/* @__PURE__ */ c("div", {
								className: "border-border shrink-0 border-b p-1.5",
								children: /* @__PURE__ */ l("div", {
									className: "relative",
									children: [/* @__PURE__ */ c(ae, {
										"aria-hidden": "true",
										className: "text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2"
									}), /* @__PURE__ */ c("input", {
										ref: V,
										"data-control-size": D,
										"data-has-icon": "true",
										id: Ee,
										type: "text",
										role: "combobox",
										"aria-label": g ?? (p ? `Search ${p}` : "Search options"),
										"aria-expanded": "true",
										"aria-controls": I,
										"aria-activedescendant": Z && !Z.disabled ? `${I}-${X}` : void 0,
										"aria-autocomplete": "list",
										"aria-describedby": _,
										"aria-invalid": v,
										value: K,
										onChange: (e) => De(e.target.value),
										onKeyDown: Oe,
										placeholder: "Search...",
										className: "ui-sized-control bg-bg-secondary text-text-primary border-border placeholder:text-text-placeholder focus:border-accent font-control h-7 w-full rounded border pr-2 pl-7 text-xs focus:outline-none"
									})]
								})
							}),
							S && /* @__PURE__ */ c("div", {
								role: "status",
								className: "text-text-tertiary shrink-0 px-3 py-2 text-xs",
								children: me
							}),
							C && /* @__PURE__ */ l("div", {
								role: "alert",
								className: "text-text-secondary shrink-0 px-3 py-2 text-xs",
								children: [C, w && /* @__PURE__ */ c("button", {
									type: "button",
									onClick: w,
									className: "text-accent-fg ml-2",
									children: "Retry"
								})]
							}),
							/* @__PURE__ */ c("ul", {
								id: I,
								className: "max-h-48 min-h-0 overflow-y-auto py-1",
								role: "listbox",
								"aria-label": p ?? g ?? "Options",
								"aria-busy": S,
								children: J.map((t, n) => /* @__PURE__ */ l("li", {
									id: `${I}-${n}`,
									role: "option",
									"aria-selected": t.value === L,
									"aria-disabled": t.disabled || void 0,
									onClick: () => Q(t),
									onMouseEnter: () => {
										t.disabled || z(n);
									},
									className: e("font-control flex w-full items-center gap-2 px-3 py-1.5 text-xs", "transition-colors duration-[100ms]", t.disabled ? "text-text-disabled cursor-not-allowed" : "cursor-pointer", !t.disabled && (n === X ? "bg-accent-muted text-accent-fg" : t.value === L ? "text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover")),
									children: [/* @__PURE__ */ c("span", {
										className: "flex-1",
										children: x ? x(t) : t.label
									}), t.value === L && /* @__PURE__ */ c(re, {
										"aria-hidden": "true",
										className: "h-3 w-3 shrink-0"
									})]
								}, t.value))
							}),
							J.length === 0 && !S && !C && /* @__PURE__ */ c("div", {
								role: "status",
								className: "text-text-tertiary shrink-0 px-3 py-2 text-center text-xs",
								children: he
							}),
							T && /* @__PURE__ */ c("div", {
								className: "border-border shrink-0 border-t p-1.5",
								children: T
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { u as Combobox };
