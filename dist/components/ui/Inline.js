import { cn as e } from "../../lib/cn.js";
import { flexAlign as t, flexJustify as n, responsiveStyle as r, spacingStyle as i } from "../../lib/layout.js";
import { createElement as a } from "react";
//#region src/components/ui/Inline.tsx
function o({ as: o, gap: s = 0, gapX: c, gapY: l, align: u = "stretch", justify: d = "start", wrap: f = !1, inline: p = !1, stackBelow: m, className: h, style: g, ..._ }) {
	return a(o ?? "div", {
		..._,
		className: e("ui-inline", h),
		style: {
			...i(s, c, l),
			"--ui-align": t(u),
			"--ui-justify": n(d),
			"--ui-wrap": f ? "wrap" : "nowrap",
			"--ui-display": p ? "inline-flex" : "flex",
			...r("direction", m ? {
				base: "column",
				[m]: "row"
			} : "row", (e) => e, "row"),
			...g
		}
	});
}
//#endregion
export { o as Inline };
