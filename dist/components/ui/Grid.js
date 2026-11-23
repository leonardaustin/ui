import { cn as e } from "../../lib/cn.js";
import { columnTemplate as t, responsiveStyle as n, spacingStyle as r } from "../../lib/layout.js";
import { createElement as i } from "react";
//#region src/components/ui/Grid.tsx
function a({ as: a, columns: o = 1, gap: s = 0, gapX: c, gapY: l, align: u = "stretch", justify: d = "stretch", className: f, style: p, ...m }) {
	return i(a ?? "div", {
		...m,
		className: e("ui-grid", f),
		style: {
			...r(s, c, l),
			...n("columns", o, t, 1),
			"--ui-align": u,
			"--ui-justify": d,
			...p
		}
	});
}
//#endregion
export { a as Grid };
