var e = {
	text: "",
	at: 0
};
function t() {
	return performance.now();
}
function n(e) {
	return e.key.length !== 1 || e.metaKey ? !1 : e.ctrlKey && e.altKey && e.getModifierState?.("AltGraph") ? !0 : !e.ctrlKey && !e.altKey;
}
function r(e, t) {
	return e.text !== "" && t - e.at <= 500;
}
function i(e, t, n) {
	return {
		text: r(e, n) ? e.text + t : t,
		at: n
	};
}
function a(e, t, n, r) {
	let i = e.length;
	if (i === 0 || r === "") return -1;
	let a = Array.from(r.toLocaleLowerCase()), o = a.every((e) => e === a[0]), s = o ? a[0] : a.join(""), c = o ? n + 1 : Math.max(n, 0);
	for (let n = 0; n < i; n++) {
		let r = ((c + n) % i + i) % i;
		if (!t(r) && e[r].trim().toLocaleLowerCase().startsWith(s)) return r;
	}
	return -1;
}
//#endregion
export { e as EMPTY_TYPEAHEAD, i as appendTypeahead, a as findTypeaheadMatch, r as isTypeaheadActive, n as isTypeaheadKey, t as typeaheadNow };
