import { useControllableState as e } from "../../hooks/useControllableState.js";
import { TextInput as t } from "./TextInput.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/ui/TimeInput.tsx
function r({ value: r, defaultValue: i = "", onValueChange: a, onChange: o, ref: s, ...c }) {
	let [l, u] = e({
		value: r,
		defaultValue: i,
		onChange: a
	});
	return /* @__PURE__ */ n(t, {
		...c,
		ref: s,
		type: "time",
		value: l,
		onChange: (e) => {
			o?.(e), u(e.currentTarget.value);
		}
	});
}
//#endregion
export { r as TimeInput };
