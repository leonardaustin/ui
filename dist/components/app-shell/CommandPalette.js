import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { navigateToPath as n } from "./navigation.js";
import { useFocusTrap as r } from "../../hooks/useFocusTrap.js";
import { useOverlayEscape as i } from "../../hooks/useOverlayStack.js";
import { COMMAND_PALETTE_EVENT as a, DEFAULT_COMMAND_PALETTE_SHORTCUT as o, matchesCommandPaletteShortcut as s } from "./commandPaletteEvents.js";
import { useCallback as c, useEffect as l, useId as u, useMemo as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { Search as g } from "lucide-react";
//#region src/components/app-shell/CommandPalette.tsx
function _(e, t) {
	let n = t.toLowerCase();
	return [
		e.label,
		e.path,
		...e.keywords ?? []
	].some((e) => e.toLowerCase().includes(n));
}
function v({ items: v, eventName: y = a, shortcut: b = o, placeholder: x = "Search pages...", emptyLabel: S = "No results found", onNavigate: C, onSelect: w, className: T, onKeyDown: E, ref: D, ...O }) {
	let [k, A] = p(!1), [j, M] = p(""), [N, P] = p(0), F = f(null), I = f(null), L = d(() => t(I, D), [D]), R = u();
	r(I, k), i(k, () => A(!1), I);
	let z = v.filter((e) => _(e, j)), B = c(() => {
		A(!0), M(""), P(0), setTimeout(() => F.current?.focus(), 0);
	}, []);
	l(() => {
		let e = (e) => {
			s(e, b) && (e.preventDefault(), k ? A(!1) : B());
		}, t = () => {
			k || B();
		};
		return document.addEventListener("keydown", e), document.addEventListener(y, t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener(y, t);
		};
	}, [
		y,
		k,
		B,
		b
	]);
	function V(e) {
		M(e), P(0);
	}
	function H(e) {
		w?.(e), n(e.path, C), A(!1);
	}
	function U(e) {
		E?.(e), !e.defaultPrevented && (e.key === "ArrowDown" ? (e.preventDefault(), P((e) => Math.min(e + 1, z.length - 1))) : e.key === "ArrowUp" ? (e.preventDefault(), P((e) => Math.max(e - 1, 0))) : e.key === "Enter" && z[N] && H(z[N]));
	}
	return k ? /* @__PURE__ */ h("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center pt-[20vh]",
		children: [/* @__PURE__ */ m("div", {
			className: "bg-bg-overlay fixed inset-0",
			onClick: () => A(!1)
		}), /* @__PURE__ */ h("div", {
			...O,
			ref: L,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Command palette",
			className: e("ui-glass ui-glass-popover bg-bg-secondary border-border animate-scale-in relative z-50 mx-4 w-full max-w-[520px] overflow-hidden rounded-xl border shadow-lg", T),
			onKeyDown: U,
			children: [/* @__PURE__ */ h("div", {
				className: "border-border flex items-center gap-3 border-b px-4",
				children: [
					/* @__PURE__ */ m(g, { className: "text-text-tertiary h-4 w-4 shrink-0" }),
					/* @__PURE__ */ m("input", {
						ref: F,
						type: "text",
						role: "combobox",
						"aria-expanded": z.length > 0,
						"aria-controls": R,
						"aria-activedescendant": z[N] ? `${R}-${N}` : void 0,
						"aria-autocomplete": "list",
						"aria-label": "Search pages",
						value: j,
						onChange: (e) => V(e.target.value),
						placeholder: x,
						className: "text-text-primary placeholder:text-text-placeholder h-11 flex-1 bg-transparent text-sm focus:outline-none"
					}),
					/* @__PURE__ */ m("kbd", {
						className: "text-2xs bg-bg-tertiary text-text-tertiary border-border hidden items-center rounded border px-1.5 py-0.5 font-mono font-medium sm:inline-flex",
						children: "Esc"
					})
				]
			}), /* @__PURE__ */ m("ul", {
				id: R,
				role: "listbox",
				"aria-label": "Pages",
				className: "max-h-[320px] overflow-y-auto px-2 py-2",
				children: z.length === 0 ? /* @__PURE__ */ m("li", {
					className: "text-text-tertiary px-3 py-6 text-center text-xs",
					children: S
				}) : z.map((t, n) => /* @__PURE__ */ h("li", {
					id: `${R}-${n}`,
					role: "option",
					"aria-selected": n === N,
					onClick: () => H(t),
					className: e("flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left", "transition-colors duration-[100ms]", n === N ? "bg-accent-muted text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
					children: [
						/* @__PURE__ */ m("span", {
							className: "shrink-0 opacity-60",
							children: /* @__PURE__ */ m(t.icon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ m("span", {
							className: "min-w-0 flex-1 text-xs font-medium",
							children: t.label
						}),
						t.badge && /* @__PURE__ */ m("span", {
							className: "shrink-0",
							children: t.badge
						})
					]
				}, t.path))
			})]
		})]
	}) : null;
}
//#endregion
export { v as CommandPalette };
