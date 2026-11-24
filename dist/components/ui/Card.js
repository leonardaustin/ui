import { cn as e } from "../../lib/cn.js";
import { useControlSize as t } from "../../providers/ControlSizeContext.js";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/ui/Card.tsx
function a({ children: a, className: o, header: s, footer: c, cover: l, selected: u, flush: d = !1, bodyClassName: f, ...p }) {
	let m = t(), h = p.as === "button", g = p.as === "a", _ = h && p.disabled, v = h ? "span" : "div", y = e("ui-glass bg-bg-card border-border overflow-hidden rounded-md border", u && "border-accent", (h || g) && "focus-visible:outline-accent block w-full cursor-pointer appearance-none text-left transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-2", (h || g) && !u && !_ && "hover:border-border-strong", _ && "cursor-not-allowed opacity-40", o), b = /* @__PURE__ */ i(n, { children: [
		l != null && typeof l != "boolean" && l !== "" && /* @__PURE__ */ r(v, {
			className: "block",
			children: l
		}),
		s && /* @__PURE__ */ r(v, {
			"data-control-size": m,
			className: "ui-bar border-border flex flex-col justify-center border-b px-3 py-2.5",
			children: s
		}),
		/* @__PURE__ */ r(v, {
			className: e(h && "block", !d && "ui-surface-body p-3", f),
			children: a
		}),
		c && /* @__PURE__ */ r(v, {
			"data-control-size": m,
			className: "ui-bar border-border bg-bg-primary/50 flex flex-col justify-center border-t px-3 py-2.5",
			children: c
		})
	] });
	if (p.as === "a") {
		let { as: e, renderLink: t, ...n } = p, i = {
			...n,
			"aria-current": u ? "page" : n["aria-current"],
			className: y,
			children: b
		};
		return t ? t(i) : /* @__PURE__ */ r(e, { ...i });
	}
	if (p.as === "button") {
		let { as: e, ...t } = p;
		return /* @__PURE__ */ r(e, {
			...t,
			type: t.type ?? "button",
			"aria-pressed": u ?? t["aria-pressed"],
			className: y,
			children: b
		});
	}
	let { as: x = "div", ...S } = p;
	return /* @__PURE__ */ r(x, {
		...S,
		className: y,
		children: b
	});
}
//#endregion
export { a as Card };
