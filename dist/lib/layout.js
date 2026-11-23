//#region src/lib/layout.ts
function e(e, t, n, r) {
	let i = typeof t == "object" ? t : { base: t }, a = { [`--ui-${e}-base`]: n(i.base ?? r) };
	for (let t of [
		"sm",
		"md",
		"lg",
		"xl"
	]) a[`--ui-${e}-${t}`] = i[t] === void 0 ? "initial" : n(i[t]);
	return a;
}
function t(e) {
	return typeof e == "number" ? `repeat(${e}, minmax(0, 1fr))` : e;
}
function n(e = 0, t, n) {
	return {
		"--ui-gap": `calc(var(--spacing) * ${e})`,
		"--ui-gap-x": t === void 0 ? "initial" : `calc(var(--spacing) * ${t})`,
		"--ui-gap-y": n === void 0 ? "initial" : `calc(var(--spacing) * ${n})`
	};
}
function r(e) {
	return e === "start" || e === "end" ? `flex-${e}` : e;
}
function i(e) {
	return e === "between" || e === "around" || e === "evenly" ? `space-${e}` : r(e);
}
//#endregion
export { t as columnTemplate, r as flexAlign, i as flexJustify, e as responsiveStyle, n as spacingStyle };
