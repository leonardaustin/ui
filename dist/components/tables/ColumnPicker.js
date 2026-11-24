import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { useDismiss as n } from "../../hooks/useDismiss.js";
import { Checkbox as r } from "../ui/Checkbox.js";
import { FilterButton as i } from "../ui/FilterButton.js";
import { Fragment as a, useCallback as o, useMemo as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { Columns3 as f } from "lucide-react";
//#region src/components/tables/ColumnPicker.tsx
function p(e) {
	return typeof e.header == "string" ? e.header : e.sortLabel ?? e.key;
}
function m({ columns: m, hidden: h, onToggle: g, label: _ = "Columns", heading: v = "Toggle columns", icon: y = f, onOnly: b, onlyLabel: x = "Only", footer: S, className: C, ref: w, ...T }) {
	let [E, D] = l(!1), O = c(null), k = s(() => t(O, w), [w]);
	return n(E, o(() => D(!1), []), [O]), /* @__PURE__ */ d("div", {
		...T,
		ref: k,
		className: e("relative", C),
		children: [/* @__PURE__ */ u(i, {
			icon: y,
			onClick: () => D(!E),
			children: _
		}), E && /* @__PURE__ */ d("div", {
			className: e("ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 z-[100] mt-1 rounded-md border py-1 shadow-lg", b ? "w-56" : "w-48"),
			children: [m.map((e, t) => /* @__PURE__ */ d(a, { children: [(t === 0 || e.group !== m[t - 1].group) && /* @__PURE__ */ u("p", {
				className: "text-2xs-f text-text-tertiary px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: e.group ?? v
			}), /* @__PURE__ */ d("div", {
				onClick: () => g(e.key),
				className: "group text-text-secondary hover:text-text-primary hover:bg-bg-hover flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ u(r, {
						checked: !h.has(e.key),
						onChange: () => {},
						"aria-label": p(e)
					}),
					/* @__PURE__ */ u("span", {
						className: "min-w-0 flex-1 truncate",
						children: e.header
					}),
					b && /* @__PURE__ */ u("button", {
						type: "button",
						"aria-label": `${x}: ${p(e)}`,
						onClick: (t) => {
							t.stopPropagation(), b(e.key);
						},
						className: "text-text-tertiary hover:text-text-primary text-2xs opacity-0 transition-opacity duration-[100ms] group-hover:opacity-100 focus-visible:opacity-100",
						children: x
					})
				]
			})] }, e.key)), S && /* @__PURE__ */ u("div", {
				className: "border-border mt-1 border-t px-3 pt-1",
				children: S
			})]
		})]
	});
}
//#endregion
export { m as ColumnPicker };
