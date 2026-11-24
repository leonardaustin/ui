import { cn as e } from "../../lib/cn.js";
import { useControllableState as t } from "../../hooks/useControllableState.js";
import { describeField as n } from "./FieldContext.js";
import { applyBackspace as r, applyInput as i, applyText as a, toSlots as o } from "../../lib/codeInput.js";
import { useId as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/ui/CodeInput.tsx
function f({ value: f, defaultValue: p = "", onValueChange: m, onComplete: h, length: g = 6, error: _, invalid: v, disabled: y, autoFocus: b, name: x, "aria-label": S = "Verification code", "aria-describedby": C, className: w, ref: T, ...E }) {
	let [D, O] = t({
		value: f,
		defaultValue: p,
		onChange: m
	}), k = c([]), A = s(), j = v || !!_, [M, N] = l(() => {
		let e = o(D, g);
		return {
			proposed: e,
			shown: e
		};
	}), P = (e) => e.length === g && e.join("") === D, [F, I] = l({
		value: D,
		length: g
	});
	if ((F.value !== D || F.length !== g) && (I({
		value: D,
		length: g
	}), !P(M.proposed) && !P(M.shown))) {
		let e = o(D, g);
		N({
			proposed: e,
			shown: e
		});
	}
	let L = P(M.proposed) ? M.proposed : P(M.shown) ? M.shown : o(D, g);
	function R(e) {
		let t = k.current[Math.max(0, Math.min(e, g - 1))];
		t?.focus(), t?.select();
	}
	function z(e) {
		if (!e) return;
		N({
			proposed: e.slots,
			shown: L
		});
		let t = e.slots.join("");
		O(t), e.slots.every(Boolean) && h?.(t), R(e.focus);
	}
	function B(e, t) {
		t.key === "Backspace" ? (t.preventDefault(), z(r(L, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), R(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), R(e + 1));
	}
	return /* @__PURE__ */ d("div", {
		ref: T,
		...E,
		className: e("flex flex-col gap-1.5", w),
		children: [
			/* @__PURE__ */ u("div", {
				role: "group",
				"aria-label": S,
				className: "flex justify-between gap-2",
				children: L.map((t, r) => /* @__PURE__ */ u("input", {
					ref: (e) => {
						k.current[r] = e;
					},
					type: "text",
					inputMode: "numeric",
					autoComplete: r === 0 ? "one-time-code" : "off",
					autoFocus: b && r === 0,
					disabled: y,
					"aria-label": `Digit ${r + 1} of ${g}`,
					"aria-invalid": j || void 0,
					"aria-describedby": n(C, _ ? A : void 0),
					value: t,
					onFocus: (e) => e.target.select(),
					onChange: (e) => z(i(L, r, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => B(r, e),
					onPaste: (e) => {
						e.preventDefault(), z(a(L, r, e.clipboardData.getData("text")));
					},
					className: e("bg-bg-secondary text-text-primary h-10 w-10 min-w-0 shrink rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", j ? "border-danger" : "border-border")
				}, r))
			}),
			x && /* @__PURE__ */ u("input", {
				type: "hidden",
				name: x,
				value: D,
				disabled: y
			}),
			_ && /* @__PURE__ */ u("p", {
				id: A,
				role: "alert",
				className: "text-2xs text-danger-fg",
				children: _
			})
		]
	});
}
//#endregion
export { f as CodeInput };
