import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import { useFieldControl as n } from "./useFieldControl.js";
import { useCallback as r, useEffect as i, useRef as a, useState as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
import { ChevronDown as l } from "lucide-react";
//#region src/components/ui/Select.tsx
function u({ label: u, labelPlacement: d = "above", error: f, options: p, className: m, id: h, hint: g, controlSize: _, required: v, "aria-describedby": y, "aria-invalid": b, ref: x, ...S }) {
	let C = n({
		id: h,
		error: f,
		hint: g,
		describedBy: y,
		invalid: b,
		required: v
	}), { inputId: w, errorId: T, hintId: E } = C, D = t(_), O = a(null), k = r((e) => {
		if (O.current = e, typeof x == "function") return x(e);
		x && (x.current = e);
	}, [x]), A = d === "placeholder" && u ? u : u ? void 0 : C.placeholderLabel, j = !!A && !S.multiple && (!S.size || S.size <= 1), M = S.value !== void 0, [N, P] = o(S.value ?? S.defaultValue ?? ""), F = M ? S.value ?? "" : N, I = j && F === "", L = p.some((e) => !("options" in e) && e.value === ""), R = (e) => /* @__PURE__ */ s("option", {
		value: e.value,
		disabled: e.disabled,
		style: j ? { color: "var(--text-primary)" } : void 0,
		children: e.label
	}, e.value);
	return i(() => {
		let e = O.current;
		if (!e || M || !j) return;
		let t = !0;
		queueMicrotask(() => {
			t && P(e.value);
		});
		let n = e.form, r, i = () => {
			clearTimeout(r), r = setTimeout(() => {
				P(e.value);
			}, 0);
		};
		n?.addEventListener("reset", i);
		let a = new MutationObserver(() => {
			P(e.value);
		});
		return a.observe(e, {
			childList: !0,
			subtree: !0,
			attributes: !0,
			attributeFilter: ["value", "selected"]
		}), () => {
			t = !1, n?.removeEventListener("reset", i), a.disconnect(), clearTimeout(r);
		};
	}, [
		M,
		j,
		S.form
	]), /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-1.5",
		children: [
			g && /* @__PURE__ */ s("p", {
				id: E,
				className: "text-text-secondary text-xs",
				children: g
			}),
			(u || f) && /* @__PURE__ */ c("div", {
				className: e("flex items-center justify-between", j && !f && "sr-only"),
				children: [u && /* @__PURE__ */ s("label", {
					htmlFor: w,
					className: e("ui-field-label font-label text-xs font-medium", j && "sr-only"),
					children: u
				}), f && /* @__PURE__ */ s("p", {
					id: T,
					className: "text-2xs text-danger-fg",
					children: f
				})]
			}),
			/* @__PURE__ */ c("div", {
				className: "relative",
				"data-control-size": j ? D : void 0,
				children: [
					/* @__PURE__ */ c("select", {
						ref: j ? k : x,
						"data-control-size": D,
						required: C.required,
						"aria-invalid": C.invalid,
						"aria-describedby": C.describedBy,
						id: w,
						className: e("ui-sized-control bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs", "appearance-none rounded-md border", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", "cursor-pointer", f ? "border-danger" : "border-border", m),
						...S,
						value: j && M ? S.value ?? "" : S.value ?? void 0,
						defaultValue: j && !M ? S.defaultValue ?? "" : S.defaultValue,
						onChange: j ? (e) => {
							M || P(e.currentTarget.value), S.onChange?.(e);
						} : S.onChange,
						style: I ? {
							...S.style,
							color: "transparent"
						} : S.style,
						children: [j && !L && /* @__PURE__ */ s("option", {
							value: "",
							disabled: !0,
							hidden: !0
						}), p.map((e, t) => "options" in e ? /* @__PURE__ */ s("optgroup", {
							label: e.label,
							style: j ? { color: "var(--text-primary)" } : void 0,
							children: e.options.map(R)
						}, `group-${t}`) : R(e))]
					}),
					I && /* @__PURE__ */ s("span", {
						"aria-hidden": "true",
						className: "ui-select-placeholder text-text-placeholder font-control pointer-events-none absolute top-1/2 -translate-y-1/2 truncate",
						children: A
					}),
					/* @__PURE__ */ s(l, { className: "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" })
				]
			})
		]
	});
}
//#endregion
export { u as Select };
