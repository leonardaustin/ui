import { cn as e } from "../../lib/cn.js";
import { useControllableState as t } from "../../hooks/useControllableState.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/ui/RadioPill.tsx
function r({ options: r, value: i, defaultValue: a, onValueChange: o, disabled: s, className: c, "aria-label": l, ref: u, ...d }) {
	let [f, p] = t({
		value: i,
		defaultValue: a,
		onChange: (e) => o?.(e)
	}), m = s ? [] : r.filter((e) => !e.disabled), h = m.find((e) => e.value === f) ?? m[0];
	function g(e, t) {
		if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
		let n;
		switch (e.key) {
			case "ArrowRight":
			case "ArrowDown":
				n = 1;
				break;
			case "ArrowLeft":
			case "ArrowUp":
				n = -1;
				break;
			default: return;
		}
		let r = m.findIndex((e) => e.value === t);
		if (r < 0) return;
		e.preventDefault();
		let i = (r + n + m.length) % m.length;
		(e.currentTarget.parentElement?.querySelectorAll("[role=\"radio\"]:enabled"))?.[i]?.focus();
		let a = m[i].value;
		a !== f && p(a);
	}
	return /* @__PURE__ */ n("div", {
		ref: u,
		...d,
		role: "radiogroup",
		"aria-label": l,
		className: e("border-border inline-flex overflow-hidden rounded-md border", s && "cursor-not-allowed opacity-40", c),
		children: r.map((t) => /* @__PURE__ */ n("button", {
			type: "button",
			role: "radio",
			"aria-checked": t.value === f,
			tabIndex: t === h ? 0 : -1,
			disabled: s || t.disabled,
			onKeyDown: (e) => g(e, t.value),
			onClick: () => p(t.value),
			className: e("font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]", "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", t.disabled && !s && "cursor-not-allowed opacity-40", !s && !t.disabled && "cursor-pointer", t.value === f ? "bg-accent text-text-on-accent" : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary"),
			children: t.label
		}, t.value))
	});
}
//#endregion
export { r as RadioPill };
