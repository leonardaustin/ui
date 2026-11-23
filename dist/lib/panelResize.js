//#region src/lib/panelResize.ts
function e(e, t, n, r = "right") {
	if (e === "Home") return null;
	if (e === "End") return Infinity;
	if (!(e !== "ArrowLeft" && e !== "ArrowRight")) return t + (e === "ArrowLeft" == (r === "right") ? n : -n);
}
//#endregion
export { e as panelResizeKey };
