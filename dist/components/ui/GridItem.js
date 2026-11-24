import { cn as e } from "../../lib/cn.js";
import { responsiveStyle as t } from "../../lib/layout.js";
import { createElement as n } from "react";
//#region src/components/ui/GridItem.tsx
function r({ as: r, span: i = 1, className: a, style: o, ...s }) {
	return n(r ?? "div", {
		...s,
		className: e("ui-grid-item", a),
		style: {
			...t("span", i, (e) => `span ${e} / span ${e}`, 1),
			...o
		}
	});
}
//#endregion
export { r as GridItem };
