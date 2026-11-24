import { cn as e } from "../../lib/cn.js";
import { Fragment as t, jsx as n, jsxs as r } from "react/jsx-runtime";
import { ChevronLeft as i, ChevronRight as a } from "lucide-react";
//#region src/components/tables/Pagination.tsx
function o({ page: o, totalPages: s, onPageChange: c, loading: l = !1, total: u, summary: d, className: f, ref: p, ...m }) {
	if (s <= 1 && !l && u === void 0 && d == null) return null;
	let h = [];
	for (let e = 1; e <= s; e++) e === 1 || e === s || e >= o - 1 && e <= o + 1 ? h.push(e) : h[h.length - 1] !== "ellipsis" && h.push("ellipsis");
	return /* @__PURE__ */ r("div", {
		ref: p,
		...m,
		className: e("flex items-center gap-1", f),
		children: [d !== null && (l || u !== void 0 || d !== void 0) && /* @__PURE__ */ n("span", {
			role: "status",
			className: "text-text-tertiary text-xs",
			children: l ? "Loading results..." : d === void 0 ? `${u} in total` : typeof d == "function" ? d(u) : d
		}), s > 1 && /* @__PURE__ */ r(t, { children: [
			/* @__PURE__ */ n("button", {
				type: "button",
				disabled: o === 1,
				"aria-disabled": l || void 0,
				onClick: () => {
					l || c(o - 1);
				},
				className: e("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", l && "cursor-not-allowed opacity-30"),
				"aria-label": "Previous page",
				children: /* @__PURE__ */ n(i, { className: "h-3.5 w-3.5" })
			}),
			h.map((t, r) => t === "ellipsis" ? /* @__PURE__ */ n("span", {
				className: "text-text-tertiary flex h-7 w-7 items-center justify-center text-xs",
				children: "..."
			}, `e${r}`) : /* @__PURE__ */ n("button", {
				type: "button",
				"aria-disabled": l || void 0,
				onClick: () => {
					l || c(t);
				},
				className: e("flex h-7 w-7 cursor-pointer items-center justify-center rounded text-xs font-medium", l && "cursor-not-allowed", "transition-colors duration-[100ms]", t === o ? "bg-accent text-text-on-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
				children: t
			}, t)),
			/* @__PURE__ */ n("button", {
				type: "button",
				disabled: o >= s,
				"aria-disabled": l || void 0,
				onClick: () => {
					l || c(o + 1);
				},
				className: e("text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded disabled:cursor-not-allowed disabled:opacity-30", l && "cursor-not-allowed opacity-30"),
				"aria-label": "Next page",
				children: /* @__PURE__ */ n(a, { className: "h-3.5 w-3.5" })
			})
		] })]
	});
}
//#endregion
export { o as Pagination };
