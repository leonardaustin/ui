import { cn as e } from "../../lib/cn.js";
import { useControllableState as t } from "../../hooks/useControllableState.js";
import { useId as n, useRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/ui/Tabs.tsx
function o({ tabs: o, defaultValue: s, value: c, onValueChange: l, className: u, panelClassName: d, ref: f, ...p }) {
	let [m, h] = t({
		value: c,
		defaultValue: s || o[0]?.key || "",
		onChange: l
	}), g = o.some((e) => e.key === m) ? m : o[0]?.key ?? "", _ = o.find((e) => e.key === g), v = n(), y = r(null);
	function b(e) {
		let t = o.map((e) => e.key), n = t.indexOf(g), r = null;
		e.key === "ArrowRight" ? r = (n + 1) % o.length : e.key === "ArrowLeft" ? r = (n - 1 + o.length) % o.length : e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || (e.key === "Home" && (r = 0), e.key === "End" && (r = o.length - 1)), r !== null && (e.preventDefault(), h(t[r]), (y.current?.querySelectorAll("[role=\"tab\"]"))?.[r]?.focus());
	}
	return /* @__PURE__ */ a("div", {
		ref: f,
		...p,
		className: u,
		children: [/* @__PURE__ */ i("div", {
			className: "border-border flex shrink-0 overflow-x-auto border-b",
			role: "tablist",
			ref: y,
			children: o.map((t) => /* @__PURE__ */ a("button", {
				type: "button",
				id: `${v}-tab-${t.key}`,
				role: "tab",
				tabIndex: t.key === g ? 0 : -1,
				"aria-selected": t.key === g,
				"aria-controls": `${v}-panel`,
				onClick: () => h(t.key),
				onKeyDown: b,
				className: e("font-control relative flex shrink-0 cursor-pointer items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors duration-[100ms] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent", "hover:text-text-primary", t.key === g ? "text-accent-fg" : "text-text-tertiary"),
				children: [
					t.icon && /* @__PURE__ */ i("span", {
						"aria-hidden": "true",
						children: t.icon
					}),
					/* @__PURE__ */ i("span", { children: t.label }),
					t.count != null && /* @__PURE__ */ a("span", {
						className: e("min-w-[18px] rounded-md px-1.5 py-0.5 text-center text-2xs leading-none font-medium", t.key === g ? "bg-accent/15 text-accent-fg" : "bg-bg-hover text-text-tertiary"),
						children: [/* @__PURE__ */ i("span", {
							"aria-hidden": "true",
							children: t.count
						}), /* @__PURE__ */ i("span", {
							className: "sr-only",
							children: t.countLabel ?? `${t.count} ${t.count === 1 ? "item" : "items"}`
						})]
					}),
					t.key === g && /* @__PURE__ */ i("div", { className: "bg-accent absolute right-0 bottom-0 left-0 h-0.5 rounded-md" })
				]
			}, t.key))
		}), /* @__PURE__ */ i("div", {
			id: `${v}-panel`,
			role: "tabpanel",
			"aria-labelledby": `${v}-tab-${g}`,
			className: e("pt-4", d),
			children: _?.content
		})]
	});
}
//#endregion
export { o as Tabs };
