import { FieldContext as e, describeField as t } from "./FieldContext.js";
import { useContext as n, useId as r } from "react";
//#region src/components/ui/useFieldControl.ts
function i({ id: i, error: a, hint: o, describedBy: s, invalid: c, required: l }) {
	let u = r(), d = n(e), f = i ?? d?.id ?? u, p = a ? `${f}-error` : void 0, m = o ? `${f}-hint` : void 0;
	return {
		inputId: f,
		errorId: p,
		hintId: m,
		describedBy: t(s, d?.describedBy, m, p),
		invalid: c ?? (!!a || d?.invalid || void 0),
		required: l ?? d?.required,
		placeholderLabel: d?.placeholderLabel
	};
}
//#endregion
export { i as useFieldControl };
