import { createContext as e } from "react";
//#region src/components/ui/FieldContext.ts
var t = e(null);
function n(...e) {
	return [...new Set(e.flatMap((e) => e?.split(/\s+/).filter(Boolean) ?? []))].join(" ") || void 0;
}
//#endregion
export { t as FieldContext, n as describeField };
