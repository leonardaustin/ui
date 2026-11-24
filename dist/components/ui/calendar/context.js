import { createContext as e, useContext as t } from "react";
//#region src/components/ui/calendar/context.ts
var n = e(null);
function r() {
	let e = t(n);
	if (!e) throw Error("Calendar views must render inside <Calendar>");
	return e;
}
//#endregion
export { n as CalendarContext, r as useCalendarContext };
