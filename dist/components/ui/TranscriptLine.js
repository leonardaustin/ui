import { cn as e } from "../../lib/cn.js";
import { formatMediaTime as t } from "../../lib/formatMediaTime.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/TranscriptLine.tsx
function i({ speaker: i, role: a = "patient", time: o, onSeek: s, highlighted: c = !1, children: l, className: u, ref: d, ...f }) {
	let p = o != null && Number.isFinite(o) && o >= 0 ? o : null, m = p == null ? null : t(p);
	return /* @__PURE__ */ r("div", {
		...f,
		ref: d,
		"data-role": a,
		"data-highlighted": c || void 0,
		className: e("flex gap-3 rounded-md p-2 text-xs", c && "bg-accent-subtle", a === "system" ? "text-text-tertiary italic" : "text-text-secondary", a === "agent" && "border-l-2 border-accent", a === "staff" && "border-l-2 border-border-strong", u),
		children: [m != null && /* @__PURE__ */ n("div", {
			className: "font-mono text-2xs shrink-0 pt-1",
			children: s ? /* @__PURE__ */ n("button", {
				type: "button",
				onClick: () => s(p),
				"aria-label": `Seek to ${m}`,
				className: "cursor-pointer rounded-md text-accent-fg hover:underline focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
				children: m
			}) : /* @__PURE__ */ n("span", { children: m })
		}), /* @__PURE__ */ r("div", {
			className: "min-w-0 flex-1",
			style: { overflowWrap: "anywhere" },
			children: [
				/* @__PURE__ */ n("span", {
					className: "text-text-primary font-medium",
					children: i
				}),
				": ",
				/* @__PURE__ */ n("span", {
					className: "whitespace-pre-wrap",
					children: l
				})
			]
		})]
	});
}
//#endregion
export { i as TranscriptLine };
