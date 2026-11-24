import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { ArrowDown as r, ArrowUp as i, ArrowUpDown as a } from "lucide-react";
//#region src/components/tables/Table.tsx
function o({ caption: r, captionHidden: i = !1, captionClassName: a, stickyHeader: o = !1, maxHeight: s, wrapperClassName: c, wrapperProps: l, beforeTable: u, className: d, children: f, ...p }) {
	return /* @__PURE__ */ n("div", {
		...l,
		className: e("ui-table-wrap", l?.className, c),
		style: {
			maxHeight: s,
			...s ? { overflow: "auto" } : {},
			...l?.style
		},
		children: [u, /* @__PURE__ */ n("table", {
			...p,
			className: e("ui-table", o && "ui-table-sticky", d),
			children: [r != null && /* @__PURE__ */ t("caption", {
				className: e(i && "sr-only", a),
				children: r
			}), f]
		})]
	});
}
function s({ className: n, ...r }) {
	return /* @__PURE__ */ t("thead", {
		...r,
		className: e("ui-table-head", n)
	});
}
function c({ className: n, ...r }) {
	return /* @__PURE__ */ t("tbody", {
		...r,
		className: e("ui-table-body", n)
	});
}
function l({ selected: n, interactive: r = !1, className: i, ...a }) {
	return /* @__PURE__ */ t("tr", {
		...a,
		"data-selected": n ? "" : void 0,
		className: e("ui-table-row", r && "ui-table-interactive", i)
	});
}
function u({ numeric: o = !1, align: s, sort: c, onSort: l, scope: u = "col", className: d, style: f, children: p, ...m }) {
	let h = c ?? m["aria-sort"], g = h === "ascending" ? "descending" : "ascending";
	return /* @__PURE__ */ t("th", {
		...m,
		scope: u,
		"aria-sort": h ?? (l ? "none" : void 0),
		className: e("ui-table-header-cell", o && "ui-table-numeric", d),
		style: {
			...s ? { textAlign: s } : {},
			...f
		},
		children: l ? /* @__PURE__ */ n("button", {
			type: "button",
			className: "ui-table-sort-button",
			onClick: () => l(g),
			children: [
				p,
				/* @__PURE__ */ n("span", {
					className: "sr-only",
					children: [" Sort ", g]
				}),
				/* @__PURE__ */ t("span", {
					className: "ui-table-sort-indicator",
					"aria-hidden": "true",
					children: t(h === "ascending" ? i : h === "descending" ? r : a, {})
				})
			]
		}) : p
	});
}
function d({ numeric: n = !1, align: r, nowrap: i = !1, className: a, style: o, ...s }) {
	return /* @__PURE__ */ t("td", {
		...s,
		className: e("ui-table-cell", n && "ui-table-numeric", i && "ui-table-nowrap", a),
		style: {
			...r ? { textAlign: r } : {},
			...o
		}
	});
}
function f({ colSpan: n, cellClassName: r, children: i, className: a, ...o }) {
	return /* @__PURE__ */ t("tr", {
		...o,
		className: e("ui-table-empty-row", a),
		children: /* @__PURE__ */ t("td", {
			colSpan: n,
			className: e("ui-table-empty-cell", r),
			children: i
		})
	});
}
//#endregion
export { o as Table, c as TableBody, d as TableCell, f as TableEmptyRow, s as TableHead, u as TableHeaderCell, l as TableRow };
