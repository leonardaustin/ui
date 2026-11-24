import { cn as e } from "../../lib/cn.js";
import { columnTemplate as t, responsiveStyle as n, spacingStyle as r } from "../../lib/layout.js";
import { Fragment as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/ui/MetadataGrid.tsx
var s = "ui-metadata-stripe rounded-md px-2 py-1.5";
function c(e, t) {
	return n("stripe", t, (t) => Math.floor(e / t) % 2 == 0 ? "var(--ui-metadata-stripe-color, var(--bg-tertiary))" : "transparent", 1);
}
function l({ items: l, labelWidth: u = "100px", layout: d = "inline", columns: f = 1, gap: p = 3, striped: m = !1, className: h, ref: g, style: _, ...v }) {
	let y = g, b = g;
	return d === "stacked" ? /* @__PURE__ */ a("dl", {
		...v,
		ref: y,
		className: e("ui-grid text-xs", h),
		style: {
			...n("columns", f, t, 1),
			...m ? r(p, void 0, 0) : r(p),
			..._
		},
		children: l.map((t, n) => /* @__PURE__ */ o("div", {
			className: m ? s : void 0,
			style: m ? c(n, f) : void 0,
			children: [/* @__PURE__ */ a("dt", {
				className: "text-text-tertiary font-label",
				children: t.label
			}), /* @__PURE__ */ a("dd", {
				className: e((typeof t.value == "string" || typeof t.value == "number") && "text-text-primary font-data"),
				children: t.value
			})]
		}, t.label))
	}) : m ? /* @__PURE__ */ a("div", {
		...v,
		ref: b,
		className: e("gap-x-3 text-xs", h),
		style: {
			display: "grid",
			gridTemplateColumns: `${u} 1fr`,
			..._
		},
		children: l.map((e, t) => /* @__PURE__ */ o("div", {
			className: s,
			style: {
				...c(t, 1),
				display: "grid",
				gridColumn: "1 / -1",
				gridTemplateColumns: "subgrid"
			},
			children: [/* @__PURE__ */ a("span", {
				className: "text-text-tertiary font-label",
				children: e.label
			}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ a("span", {
				className: "text-text-primary font-data",
				children: e.value
			}) : /* @__PURE__ */ a("span", { children: e.value })]
		}, e.label))
	}) : /* @__PURE__ */ a("div", {
		...v,
		ref: b,
		className: e("gap-x-3 gap-y-2 text-xs", h),
		style: {
			display: "grid",
			gridTemplateColumns: `${u} 1fr`,
			..._
		},
		children: l.map((e) => /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("span", {
			className: "text-text-tertiary font-label",
			children: e.label
		}), typeof e.value == "string" || typeof e.value == "number" ? /* @__PURE__ */ a("span", {
			className: "text-text-primary font-data",
			children: e.value
		}) : /* @__PURE__ */ a("span", { children: e.value })] }, e.label))
	});
}
//#endregion
export { l as MetadataGrid };
