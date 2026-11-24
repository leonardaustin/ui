import { clamp as e } from "./math.js";
//#region src/lib/dialogResize.ts
var t = 10, n = 50;
function r({ left: e, top: t }, n, r, i, a) {
	let o = {
		width: Math.max(0, Math.min(r.width, n.width)),
		height: Math.max(0, Math.min(r.height, n.height))
	};
	return {
		min: o,
		max: {
			width: Math.max(o.width, i.right - a - e),
			height: Math.max(o.height, i.bottom - a - t)
		}
	};
}
function i(t, { min: n, max: r }) {
	let i = (t, n, r) => Math.round(e(t, n, r));
	return {
		width: i(t.width, n.width, r.width),
		height: i(t.height, n.height, r.height)
	};
}
function a(e, r) {
	let i = r ? n : t;
	switch (e) {
		case "ArrowLeft": return {
			width: -i,
			height: 0
		};
		case "ArrowRight": return {
			width: i,
			height: 0
		};
		case "ArrowUp": return {
			width: 0,
			height: -i
		};
		case "ArrowDown": return {
			width: 0,
			height: i
		};
		default: return null;
	}
}
//#endregion
export { i as clampDialogSize, a as resizeDelta, r as resizeLimits };
