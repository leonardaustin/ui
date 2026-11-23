import { cn as e } from "../../lib/cn.js";
import { useControllableState as t } from "../../hooks/useControllableState.js";
import { applyBackspace as n, applyInput as r, applyText as i, toSlots as a } from "../../lib/codeInput.js";
import { useId as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/ui/CodeInput.tsx
function d({ value: d, defaultValue: f = "", onValueChange: p, onComplete: m, length: h = 6, error: g, invalid: _, disabled: v, autoFocus: y, name: b, "aria-label": x = "Verification code", className: S, ref: C, ...w }) {
	let [T, E] = t({
		value: d,
		defaultValue: f,
		onChange: p
	}), D = s([]), O = o(), k = _ || !!g, [A, j] = c(() => {
		let e = a(T, h);
		return {
			proposed: e,
			shown: e
		};
	}), M = (e) => e.length === h && e.join("") === T, [N, P] = c({
		value: T,
		length: h
	});
	if ((N.value !== T || N.length !== h) && (P({
		value: T,
		length: h
	}), !M(A.proposed) && !M(A.shown))) {
		let e = a(T, h);
		j({
			proposed: e,
			shown: e
		});
	}
	let F = M(A.proposed) ? A.proposed : M(A.shown) ? A.shown : a(T, h);
	function I(e) {
		let t = D.current[Math.max(0, Math.min(e, h - 1))];
		t?.focus(), t?.select();
	}
	function L(e) {
		if (!e) return;
		j({
			proposed: e.slots,
			shown: F
		});
		let t = e.slots.join("");
		E(t), e.slots.every(Boolean) && m?.(t), I(e.focus);
	}
	function R(e, t) {
		t.key === "Backspace" ? (t.preventDefault(), L(n(F, e))) : t.key === "ArrowLeft" ? (t.preventDefault(), I(e - 1)) : t.key === "ArrowRight" && (t.preventDefault(), I(e + 1));
	}
	return /* @__PURE__ */ u("div", {
		ref: C,
		...w,
		className: e("flex flex-col gap-1.5", S),
		children: [
			/* @__PURE__ */ l("div", {
				role: "group",
				"aria-label": x,
				className: "flex justify-between gap-2",
				children: F.map((t, n) => /* @__PURE__ */ l("input", {
					ref: (e) => {
						D.current[n] = e;
					},
					type: "text",
					inputMode: "numeric",
					autoComplete: n === 0 ? "one-time-code" : "off",
					autoFocus: y && n === 0,
					disabled: v,
					"aria-label": `Digit ${n + 1} of ${h}`,
					"aria-invalid": k || void 0,
					"aria-describedby": g ? O : void 0,
					value: t,
					onFocus: (e) => e.target.select(),
					onChange: (e) => L(r(F, n, e.target.value, e.target.selectionStart)),
					onKeyDown: (e) => R(n, e),
					onPaste: (e) => {
						e.preventDefault(), L(i(F, n, e.clipboardData.getData("text")));
					},
					className: e("bg-bg-secondary text-text-primary h-10 w-10 rounded-md border text-center font-mono text-sm", "transition-colors duration-[100ms]", "focus:border-accent focus:outline-none", "disabled:cursor-not-allowed disabled:opacity-40", k ? "border-danger" : "border-border")
				}, n))
			}),
			b && /* @__PURE__ */ l("input", {
				type: "hidden",
				name: b,
				value: T,
				disabled: v
			}),
			g && /* @__PURE__ */ l("p", {
				id: O,
				role: "alert",
				className: "text-2xs text-danger-fg",
				children: g
			})
		]
	});
}
//#endregion
export { d as CodeInput };
