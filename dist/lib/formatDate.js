import { MONTHS_SHORT as e } from "./months.js";
//#region src/lib/formatDate.ts
function t(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function n(e) {
	return (/* @__PURE__ */ new Date(e + "T00:00:00")).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
function r(t, n = /* @__PURE__ */ new Date()) {
	let r = n.getTime() - t.getTime(), i = Math.floor(r / 1e3);
	if (i < 60) return "just now";
	let a = Math.floor(i / 60);
	if (a < 60) return `${a}m ago`;
	let o = Math.floor(a / 60);
	if (o < 24) return `${o}h ago`;
	if (Math.floor(o / 24) === 1) return "yesterday";
	let s = `${e[t.getMonth()]} ${t.getDate()}`;
	return t.getFullYear() === n.getFullYear() ? s : `${s}, ${t.getFullYear()}`;
}
//#endregion
export { n as formatDateLong, t as formatDateShort, r as formatRelative };
