import { cn as e } from "../../lib/cn.js";
import { flexAlign as t, flexJustify as n, spacingStyle as r } from "../../lib/layout.js";
import { createElement as i } from "react";
//#region src/components/ui/Stack.tsx
function a({ as: a, gap: o = 0, align: s = "stretch", justify: c = "start", className: l, style: u, ...d }) {
	return i(a ?? "div", {
		...d,
		className: e("ui-stack", l),
		style: {
			...r(o),
			"--ui-align": t(s),
			"--ui-justify": n(c),
			...u
		}
	});
}
//#endregion
export { a as Stack };
