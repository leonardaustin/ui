//#region src/lib/mergeRefs.ts
function e(...e) {
	return (t) => {
		let n = e.map((e) => {
			if (typeof e == "function") {
				let n = e(t);
				return typeof n == "function" ? n : () => e(null);
			}
			if (e) return e.current = t, () => {
				e.current = null;
			};
		});
		return () => n.forEach((e) => e?.());
	};
}
//#endregion
export { e as mergeRefs };
