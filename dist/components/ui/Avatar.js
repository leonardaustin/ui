import { cn as e } from "../../lib/cn.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/ui/Avatar.tsx
var n = {
	xs: "w-5 h-5 text-2xs",
	sm: "w-7 h-7 text-2xs",
	md: "w-10 h-10 text-xs",
	lg: "w-16 h-16 text-lg"
};
function r(e) {
	return e.split(" ").map((e) => e[0]).join("").toUpperCase().slice(0, 2);
}
function i(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
	return `hsl(${Math.abs(t) % 360}, 50%, 40%)`;
}
function a({ name: a, src: o, size: s = "md", className: c, style: l, ref: u, ...d }) {
	return /* @__PURE__ */ t("div", {
		ref: u,
		...d,
		className: e("text-text-on-avatar flex shrink-0 items-center justify-center rounded-full font-semibold", n[s], c),
		style: {
			backgroundColor: o ? void 0 : i(a),
			...l
		},
		"aria-label": a,
		children: o ? /* @__PURE__ */ t("img", {
			src: o,
			alt: a,
			className: "h-full w-full rounded-full object-cover"
		}) : r(a)
	});
}
//#endregion
export { a as Avatar };
