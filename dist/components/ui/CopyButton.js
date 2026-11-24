import { Button as e } from "./Button.js";
import { useEffect as t, useRef as n, useState as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { Check as s, Copy as c } from "lucide-react";
//#region src/components/ui/CopyButton.tsx
function l(e) {
	let t = document.activeElement, n = document.createElement("textarea");
	n.value = e, n.setAttribute("readonly", ""), n.style.position = "fixed", n.style.opacity = "0", document.body.appendChild(n);
	try {
		return n.focus(), n.select(), document.execCommand("copy");
	} catch {
		return !1;
	} finally {
		n.remove(), t instanceof HTMLElement && t.focus();
	}
}
async function u(e) {
	if (navigator.clipboard?.writeText) try {
		return await navigator.clipboard.writeText(e), !0;
	} catch {}
	return l(e);
}
function d({ value: l, label: d = "Copy", copiedLabel: f = "Copied", iconOnly: p = !1, onCopy: m, variant: h, ref: g, ..._ }) {
	let [v, y] = r(null), [b, x] = r(""), S = n(null), C = n(null);
	t(() => () => {
		C.current !== null && clearTimeout(C.current), S.current !== null && clearTimeout(S.current);
	}, []);
	async function w() {
		let e = !1;
		try {
			e = await u(typeof l == "function" ? l() : l);
		} catch {}
		C.current !== null && clearTimeout(C.current), y(e ? "copied" : "failed"), x(""), S.current !== null && clearTimeout(S.current), S.current = setTimeout(() => {
			x(e ? f : "Copy failed"), S.current = null;
		}, 50), C.current = setTimeout(() => {
			y(null), x(""), C.current = null;
		}, 2e3), m?.(e);
	}
	let T = v === "copied" ? f : v === "failed" ? "Copy failed" : d;
	return /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a(e, {
		..._,
		ref: g,
		variant: h ?? (p ? "icon" : "secondary"),
		icon: v === "copied" ? s : c,
		"aria-label": p ? T : _["aria-label"],
		title: p ? T : _.title,
		onClick: w,
		children: p ? void 0 : T
	}), /* @__PURE__ */ a("span", {
		className: "sr-only",
		role: "status",
		"aria-live": "polite",
		children: b
	})] });
}
//#endregion
export { d as CopyButton };
