import { cn as e } from "../../lib/cn.js";
import { SelectDropdown as t } from "./SelectDropdown.js";
import { Pagination as n } from "../tables/Pagination.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/ui/PaginationBar.tsx
var o = [
	{
		value: "10",
		label: "10 per page"
	},
	{
		value: "25",
		label: "25 per page"
	},
	{
		value: "50",
		label: "50 per page"
	}
];
function s({ page: s, pageSize: c, total: l, summary: u, showTotal: d = !1, loading: f = !1, pageSizeOptions: p = o, onPageChange: m, onPageSizeChange: h, className: g, ref: _, ...v }) {
	let y = Math.ceil(l / c), b = Math.min((s - 1) * c + 1, l), x = Math.min(s * c, l);
	return /* @__PURE__ */ a("div", {
		ref: _,
		...v,
		className: e("flex items-center justify-between", g),
		children: [/* @__PURE__ */ a("div", {
			className: "flex items-center gap-3",
			children: [h && /* @__PURE__ */ i(t, {
				size: "sm",
				value: String(c),
				onValueChange: (e) => {
					f || h(Number(e));
				},
				options: p,
				className: "w-28",
				disabled: f
			}), /* @__PURE__ */ a("span", {
				role: "status",
				className: e("text-text-tertiary text-xs", !f && "hidden sm:inline"),
				children: [f ? "Loading results..." : u === void 0 ? /* @__PURE__ */ a(r, { children: [
					b,
					"–",
					x,
					" of ",
					l
				] }) : typeof u == "function" ? u(l) : u, !f && d && /* @__PURE__ */ a(r, { children: [
					" · ",
					l,
					" in total"
				] })]
			})]
		}), /* @__PURE__ */ i(n, {
			page: s,
			totalPages: y,
			onPageChange: m,
			loading: f,
			summary: null
		})]
	});
}
//#endregion
export { s as PaginationBar };
