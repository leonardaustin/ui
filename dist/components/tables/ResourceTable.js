import { cn as e } from "../../lib/cn.js";
import { sortRows as t } from "./sortRows.js";
import { Table as n, TableBody as r, TableCell as i, TableEmptyRow as a, TableHead as o, TableHeaderCell as s, TableRow as c } from "./Table.js";
import { createElement as l, useMemo as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { ArrowDown as m, ArrowUp as h } from "lucide-react";
//#region src/components/tables/ResourceTable.tsx
var g = { "--ui-table-cell-padding-y": "0px" };
function _({ data: _, columns: v, getRowId: y, onRowClick: b, emptyMessage: x = "No data", sortKey: S, sortDir: C, onSortChange: w, caption: T, loading: E = !1, loadingMessage: D = "Loading…", className: O, tableProps: k, getRowProps: A, isRowSelected: j, ref: M, ...N }) {
	let P = w !== void 0, [F, I] = d(null), [L, R] = d("asc"), z = P ? S ?? null : F, B = P ? C ?? "asc" : L, V = u(() => P ? _ : t(_, v, z, B), [
		P,
		_,
		v,
		z,
		B
	]);
	function H(e) {
		let t = z === e && B === "asc" ? "desc" : "asc";
		if (P) {
			w(e, t);
			return;
		}
		I(e), R(t);
	}
	return /* @__PURE__ */ p(n, {
		...k,
		wrapperProps: {
			...N,
			ref: M
		},
		wrapperClassName: O,
		beforeTable: E && /* @__PURE__ */ f("span", {
			role: "status",
			className: "sr-only",
			children: D
		}),
		caption: T || void 0,
		captionClassName: "text-text-secondary px-3 py-2 text-left text-xs",
		"aria-busy": E || k?.["aria-busy"],
		className: e("font-data text-xs", k?.className),
		style: {
			...g,
			...k?.style
		},
		children: [/* @__PURE__ */ f(o, { children: /* @__PURE__ */ f(c, { children: v.map((t) => /* @__PURE__ */ f(s, {
			className: e("text-2xs h-7", t.sortable && "hover:text-text-table-header-hover cursor-pointer select-none"),
			style: { width: t.width },
			sort: t.sortable ? z === t.key ? B === "asc" ? "ascending" : "descending" : "none" : void 0,
			children: t.sortable ? /* @__PURE__ */ p("button", {
				type: "button",
				onClick: () => H(t.key),
				"aria-label": t.sortLabel,
				className: "inline-flex cursor-pointer items-center gap-1 text-left focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
				children: [t.header, z === t.key && f(B === "asc" ? h : m, {
					"aria-hidden": "true",
					className: "h-3 w-3"
				})]
			}) : t.header
		}, t.key)) }) }), /* @__PURE__ */ f(r, { children: V.length === 0 ? /* @__PURE__ */ f(a, {
			colSpan: v.length,
			cellClassName: "h-32 px-0 text-center",
			children: E ? D : x
		}) : V.map((t) => {
			let n = A?.(t) ?? {}, r = j?.(t) ?? n["aria-selected"], a = r === !0 || r === "true";
			return /* @__PURE__ */ l(c, {
				tabIndex: b ? 0 : void 0,
				...n,
				key: y(t),
				selected: a,
				interactive: !!b,
				className: e("h-8", !a && "hover:bg-bg-hover", b && "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]", n.className),
				onClick: (e) => {
					n.onClick?.(e), e.defaultPrevented || b?.(t);
				},
				onKeyDown: (e) => {
					n.onKeyDown?.(e), !(!b || e.defaultPrevented || e.repeat || e.target !== e.currentTarget || e.key !== "Enter" && e.key !== " ") && (e.preventDefault(), b(t));
				}
			}, v.map((e) => /* @__PURE__ */ f(i, {
				nowrap: !0,
				className: e.cellClassName,
				onClick: e.interactive ? (e) => e.stopPropagation() : void 0,
				children: e.render(t)
			}, e.key)));
		}) })]
	});
}
//#endregion
export { _ as ResourceTable };
