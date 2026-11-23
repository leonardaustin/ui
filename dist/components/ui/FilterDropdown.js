import { FilterButton as e } from "./FilterButton.js";
import { DropdownMenu as t } from "./DropdownMenu.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/ui/FilterDropdown.tsx
function r({ icon: r, children: i, items: a, align: o, className: s, ...c }) {
	return /* @__PURE__ */ n(t, {
		align: o,
		trigger: /* @__PURE__ */ n(e, {
			...c,
			icon: r,
			className: s,
			children: i
		}),
		items: a
	});
}
//#endregion
export { r as FilterDropdown };
