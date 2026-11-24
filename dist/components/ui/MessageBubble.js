import { cn as e } from "../../lib/cn.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/ui/MessageBubble.tsx
function r({ direction: r, author: i, timestamp: a, status: o, actions: s, children: c, className: l, ...u }) {
	let d = r === "outbound";
	return /* @__PURE__ */ t("div", {
		role: "group",
		"aria-label": `${d ? "Outbound" : "Inbound"} message`,
		...u,
		"data-direction": r,
		className: e("flex", d && "justify-end", l),
		children: /* @__PURE__ */ n("div", {
			className: e("min-w-0 rounded-md px-4 py-3", d ? "bg-accent text-text-on-accent" : "border-border bg-bg-secondary text-text-primary border"),
			style: { maxWidth: "min(36rem, 85%)" },
			children: [
				i != null && /* @__PURE__ */ t("div", {
					className: "mb-1 text-xs font-medium",
					children: i
				}),
				/* @__PURE__ */ t("div", {
					className: "text-xs whitespace-pre-wrap",
					style: { overflowWrap: "anywhere" },
					children: c
				}),
				(a != null || o != null || s != null) && /* @__PURE__ */ n("div", {
					className: "mt-2 flex flex-wrap items-center gap-2 text-2xs",
					children: [
						a != null && /* @__PURE__ */ t("span", { children: a }),
						o != null && /* @__PURE__ */ t("span", { children: o }),
						s != null && /* @__PURE__ */ t("span", {
							className: "inline-flex items-center gap-1",
							children: s
						})
					]
				})
			]
		})
	});
}
//#endregion
export { r as MessageBubble };
