import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { handleAppShellNavigate as n, isAppShellPathActive as r } from "./navigation.js";
import { useFocusTrap as i } from "../../hooks/useFocusTrap.js";
import { OverlayContext as a, useBodyScrollLock as o, useOverlayEscape as s } from "../../hooks/useOverlayStack.js";
import { PortalContainerContext as c, usePortalContainerRef as l } from "../../hooks/usePortalContainer.js";
import { useMemo as u, useRef as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { X as h } from "lucide-react";
//#region src/components/app-shell/MobileDrawer.tsx
function g({ brand: e }) {
	let t = e.icon;
	return e.logo ? /* @__PURE__ */ p(f, { children: e.logo }) : /* @__PURE__ */ m("div", {
		className: "flex items-center gap-2",
		children: [t && /* @__PURE__ */ p(t, { className: "text-accent h-4.5 w-4.5" }), /* @__PURE__ */ p("span", {
			className: "text-text-primary text-sm font-semibold",
			children: e.name
		})]
	});
}
function _({ open: f, onClose: _, items: v, topBarNavItems: y = [], topBarNavLabel: b = "Primary", brand: x, currentPath: S, onNavigate: C, headerActions: w, className: T, ref: E, ...D }) {
	let O = d(null), [k, A] = l(O), j = u(() => t(A, E), [A, E]);
	i(O, f);
	let M = s(f, () => _(), O);
	if (o(f, O), !f) return null;
	let N = y.length > 0;
	return /* @__PURE__ */ p(a.Provider, {
		value: M,
		children: /* @__PURE__ */ p(c.Provider, {
			value: k,
			children: /* @__PURE__ */ m("div", {
				className: "fixed inset-0 z-40 md:hidden",
				children: [/* @__PURE__ */ p("div", {
					className: "bg-bg-overlay fixed inset-0",
					onClick: _
				}), /* @__PURE__ */ m("div", {
					...D,
					ref: j,
					role: "dialog",
					"aria-modal": "true",
					"aria-label": "Navigation",
					className: e("ui-glass ui-glass-chrome bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r", T),
					children: [
						/* @__PURE__ */ m("div", {
							className: "border-border flex h-11 items-center justify-between border-b px-4",
							children: [/* @__PURE__ */ p(g, { brand: x }), /* @__PURE__ */ p("button", {
								type: "button",
								onClick: _,
								className: "text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded",
								"aria-label": "Close menu",
								children: /* @__PURE__ */ p(h, { className: "h-4 w-4" })
							})]
						}),
						w && /* @__PURE__ */ p("div", {
							className: "border-border border-b px-4 py-2",
							children: w
						}),
						/* @__PURE__ */ m("nav", {
							className: "min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2",
							children: [N && /* @__PURE__ */ m("div", {
								className: "border-border mb-2 border-b pb-2",
								children: [/* @__PURE__ */ p("div", {
									className: "text-text-tertiary px-3 py-1 text-2xs font-medium uppercase",
									children: b
								}), /* @__PURE__ */ p("ul", {
									className: "space-y-0.5",
									"aria-label": b,
									children: y.map((t) => {
										let i = t.icon, a = r(t, S), o = t.rel ?? (t.target === "_blank" ? "noreferrer" : void 0);
										return /* @__PURE__ */ p("li", { children: /* @__PURE__ */ m("a", {
											href: t.href ?? t.path,
											target: t.target,
											rel: o,
											onClick: (e) => {
												if (t.reloadDocument) {
													_();
													return;
												}
												n(e, t.path, C, _);
											},
											"aria-current": a ? "page" : void 0,
											className: e("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", a ? "bg-accent-muted text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
											children: [
												i && /* @__PURE__ */ p(i, { className: "h-4 w-4" }),
												/* @__PURE__ */ p("span", {
													className: "min-w-0 flex-1 text-sm",
													children: t.label
												}),
												t.badge && /* @__PURE__ */ p("span", {
													className: "shrink-0",
													children: t.badge
												})
											]
										}) }, `${t.label}-${t.path}`);
									})
								})]
							}), /* @__PURE__ */ p("ul", {
								className: "space-y-0.5",
								children: v.map((t) => {
									let i = r(t, S);
									return /* @__PURE__ */ p("li", { children: /* @__PURE__ */ m("a", {
										href: t.path,
										onClick: (e) => n(e, t.path, C, _),
										"aria-current": i ? "page" : void 0,
										className: e("flex h-10 items-center gap-3 rounded-md px-3", "cursor-pointer transition-colors duration-[100ms]", i ? "bg-accent-muted text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
										children: [
											/* @__PURE__ */ p(t.icon, { className: "h-4 w-4" }),
											/* @__PURE__ */ p("span", {
												className: "min-w-0 flex-1 text-sm",
												children: t.label
											}),
											t.badge && /* @__PURE__ */ p("span", {
												className: "shrink-0",
												children: t.badge
											})
										]
									}) }, t.path);
								})
							})]
						})
					]
				})]
			})
		})
	});
}
//#endregion
export { _ as MobileDrawer };
