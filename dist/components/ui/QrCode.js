import { cn as e } from "../../lib/cn.js";
import { QrCapacityError as t, encodeQrCode as n } from "../../lib/qrCode.js";
import { useMemo as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/ui/QrCode.tsx
function s({ value: s, errorCorrection: c = "M", size: l = 160, margin: u = 4, "aria-label": d = "QR code", fallback: f = null, className: p, ref: m, ...h }) {
	let g = r(() => {
		if (!s) return null;
		try {
			return n(s, c);
		} catch (e) {
			if (e instanceof t) return "too-long";
			throw e;
		}
	}, [s, c]);
	if (!g) return null;
	if (g === "too-long") return /* @__PURE__ */ a(i, { children: f });
	let _ = Math.max(0, Math.floor(u)), v = g.size + _ * 2, y = "";
	return g.modules.forEach((e, t) => {
		for (let n = 0; n < g.size; n++) {
			if (!e[n]) continue;
			let r = n;
			for (; n + 1 < g.size && e[n + 1];) n++;
			y += `M${r + _} ${t + _}h${n - r + 1}v1h-${n - r + 1}z`;
		}
	}), /* @__PURE__ */ o("svg", {
		ref: m,
		...h,
		role: "img",
		"aria-label": d,
		width: l,
		height: l,
		viewBox: `0 0 ${v} ${v}`,
		shapeRendering: "crispEdges",
		className: e("block", p),
		children: [/* @__PURE__ */ a("rect", {
			width: v,
			height: v,
			fill: "var(--qr-background)"
		}), /* @__PURE__ */ a("path", {
			d: y,
			fill: "var(--qr-foreground)"
		})]
	});
}
//#endregion
export { s as QrCode };
