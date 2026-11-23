import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { handleAppShellNavigate as n, isAppShellPathActive as r, navigateToPath as i } from "./navigation.js";
import { usePortalContainer as a } from "../../hooks/usePortalContainer.js";
import { accentItems as o } from "../../config/theme.js";
import { useAnchoredPopup as s } from "../../hooks/useAnchoredPopup.js";
import { useDismiss as c } from "../../hooks/useDismiss.js";
import { useSettings as l } from "../../hooks/useSettings.js";
import { Avatar as u } from "../ui/Avatar.js";
import { useToast as d } from "../ui/Toast.js";
import { useCallback as f, useMemo as p, useRef as m, useState as h } from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
import { Accessibility as y, Check as b, ChevronDown as x, ChevronsUpDown as S, LogOut as C, Monitor as w, Moon as T, Settings as E, Sun as D } from "lucide-react";
import { createPortal as O } from "react-dom";
//#region src/components/app-shell/Sidebar.tsx
var k = 140, A = 400, j = 48, M = {
	side: "right",
	align: "end",
	gap: 6
};
function N({ item: t, collapsed: i, currentPath: a, onNavigate: o }) {
	let s = r(t, a);
	return /* @__PURE__ */ v("a", {
		href: t.path,
		onClick: (e) => n(e, t.path, o),
		"aria-current": s ? "page" : void 0,
		className: e("font-navigation relative flex items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", i ? "mx-auto w-[2em] justify-center" : "", s ? "bg-accent-muted text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: i ? t.label : void 0,
		children: [
			s && /* @__PURE__ */ _("div", {
				className: "bg-accent absolute left-0 w-0.5 rounded-md",
				style: {
					top: "0.3em",
					bottom: "0.3em"
				}
			}),
			/* @__PURE__ */ _("span", {
				className: "shrink-0",
				children: /* @__PURE__ */ _(t.icon, { className: "h-3.5 w-3.5" })
			}),
			!i && /* @__PURE__ */ _("span", {
				className: "min-w-0 flex-1 truncate text-xs",
				children: t.label
			}),
			!i && t.badge && /* @__PURE__ */ _("span", {
				className: "ml-auto shrink-0",
				children: t.badge
			})
		]
	});
}
function P({ brand: t, collapsed: n }) {
	let r = t.icon, i = t.name.trim().charAt(0).toUpperCase();
	return t.logo && !n ? /* @__PURE__ */ _("div", {
		className: "flex min-w-0 items-center gap-2 px-2",
		children: t.logo
	}) : /* @__PURE__ */ v("div", {
		className: e("flex min-w-0 items-center gap-2 px-2", n && "mx-auto justify-center px-0"),
		children: [r ? /* @__PURE__ */ _(r, { className: "text-accent h-3.5 w-3.5 shrink-0" }) : n && i && /* @__PURE__ */ _("span", {
			className: "text-accent-fg shrink-0 text-xs font-bold",
			children: i
		}), !n && /* @__PURE__ */ _("span", {
			className: "text-text-primary truncate text-xs font-semibold",
			children: t.name
		})]
	});
}
function F(e) {
	return e.role ?? e.email;
}
function I({ collapsed: t, accounts: n, initialAccountIndex: r = 0, onAccountChange: o, onSignOut: l, signOutPath: d, signOutLabel: p = "Sign out", onNavigate: y }) {
	let [x, w] = h(!1), T = a(), [E, D] = h(() => Math.min(r, Math.max(n.length - 1, 0))), k = m(null), A = m(null), j = f(() => w(!1), []);
	c(x, j, [A], [k]), s(x, k, A, {
		...M,
		onAnchorHidden: j
	});
	let N = n[E] ?? n[0], P = !!(l || d);
	function I() {
		w(!x);
	}
	function L(e, t) {
		D(t), o?.(e, t), w(!1);
	}
	function R() {
		w(!1), l ? l() : d && i(d, y);
	}
	return N ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: k,
		onClick: I,
		className: e("font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]", "text-text-secondary hover:text-text-primary hover:bg-bg-hover", t && "justify-center px-0"),
		style: { height: "2.5em" },
		title: t ? N.name : void 0,
		children: [/* @__PURE__ */ _(u, {
			name: N.name,
			src: N.avatarSrc,
			size: "sm"
		}), !t && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("div", {
			className: "min-w-0 flex-1 text-left",
			children: [/* @__PURE__ */ _("p", {
				className: "text-text-primary truncate text-xs leading-tight font-medium",
				children: N.name
			}), F(N) && /* @__PURE__ */ _("p", {
				className: "text-2xs text-text-tertiary truncate leading-tight",
				children: F(N)
			})]
		}), /* @__PURE__ */ _(S, { className: "text-text-tertiary h-3 w-3 shrink-0" })] })]
	}), x && O(/* @__PURE__ */ v("div", {
		ref: A,
		className: "ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-56 rounded-md border py-1 shadow-lg",
		children: [
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accounts"
			}),
			n.map((e, t) => /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => L(e, t),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-8 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(u, {
						name: e.name,
						src: e.avatarSrc,
						size: "sm"
					}),
					/* @__PURE__ */ v("div", {
						className: "min-w-0 flex-1 text-left",
						children: [/* @__PURE__ */ _("p", {
							className: "text-text-primary truncate text-xs leading-tight",
							children: e.name
						}), e.email && /* @__PURE__ */ _("p", {
							className: "text-2xs text-text-tertiary truncate leading-tight",
							children: e.email
						})]
					}),
					t === E && /* @__PURE__ */ _(b, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, `${e.name}-${e.email ?? t}`)),
			P && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				type: "button",
				onClick: R,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(C, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ _("span", { children: p })]
			})] })
		]
	}), T ?? document.body)] }) : null;
}
function L({ collapsed: t, settingsPath: n, settingsLabel: r = "All Settings", onOpenSettings: u, onNavigate: p }) {
	let [x, S] = h(!1), C = a(), k = m(null), A = m(null), { accentColor: j, setAccentColor: N, reducedMotion: P, setReducedMotion: F, colorMode: I, setColorMode: L } = l(), { toast: R } = d(), z = !!(n || u), B = f(() => S(!1), []);
	c(x, B, [A], [k]), s(x, k, A, {
		...M,
		onAnchorHidden: B
	});
	function V() {
		S(!x);
	}
	function H() {
		S(!1), u ? u() : n && i(n, p);
	}
	return /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ v("button", {
		type: "button",
		ref: k,
		onClick: V,
		className: e("font-navigation relative flex w-full items-center gap-2 rounded px-2", "cursor-pointer transition-colors duration-[100ms]", t ? "mx-auto w-[2em] justify-center" : "", x ? "bg-accent-muted text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
		style: { height: "2em" },
		title: t ? "Settings" : void 0,
		children: [/* @__PURE__ */ _(E, { className: "h-3.5 w-3.5 shrink-0" }), !t && /* @__PURE__ */ _("span", {
			className: "truncate text-xs",
			children: "Settings"
		})]
	}), x && O(/* @__PURE__ */ v("div", {
		ref: A,
		className: "ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] w-64 rounded-md border py-1 shadow-lg",
		children: [
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Mode"
			}),
			[
				{
					value: "dark",
					label: "Dark",
					Icon: T
				},
				{
					value: "light",
					label: "Light",
					Icon: D
				},
				{
					value: "system",
					label: "System",
					Icon: w
				}
			].map(({ value: e, label: t, Icon: n }) => /* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => L(e),
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(n, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ _("span", {
						className: "flex-1 text-left",
						children: t
					}),
					I === e && /* @__PURE__ */ _(b, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}, e)),
			/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ _("p", {
				className: "text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase",
				children: "Accent"
			}),
			/* @__PURE__ */ _("div", {
				className: "flex flex-wrap gap-1.5 px-3 pb-2",
				children: o.map((t) => /* @__PURE__ */ _("button", {
					type: "button",
					onClick: () => N(t.value),
					className: e("h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", j === t.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
					style: {
						backgroundColor: t.color,
						...j === t.value ? { "--utility-ring-color": t.color } : {}
					},
					title: t.value.charAt(0).toUpperCase() + t.value.slice(1)
				}, t.value))
			}),
			/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }),
			/* @__PURE__ */ v("button", {
				type: "button",
				onClick: () => {
					F(!P), R("info", P ? "Animations enabled" : "Animations disabled");
				},
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [
					/* @__PURE__ */ _(y, { className: "h-3.5 w-3.5 shrink-0" }),
					/* @__PURE__ */ _("span", {
						className: "flex-1 text-left",
						children: "Reduced Motion"
					}),
					P && /* @__PURE__ */ _(b, { className: "text-accent h-3.5 w-3.5 shrink-0" })
				]
			}),
			z && /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("div", { className: "border-border my-1 border-t" }), /* @__PURE__ */ v("button", {
				type: "button",
				onClick: H,
				className: "text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]",
				children: [/* @__PURE__ */ _(E, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ _("span", {
					className: "flex-1 text-left",
					children: r
				})]
			})] })
		]
	}), C ?? document.body)] });
}
function R({ navSections: n, brand: r, accounts: i = [], initialAccountIndex: a, onAccountChange: o, onSignOut: s, signOutPath: c, signOutLabel: u, settingsPath: d, settingsLabel: g, onOpenSettings: y, currentPath: b, onNavigate: S, headerActions: C, className: w, style: T, ref: E, ...D }) {
	let { sidebarCollapsed: O, sidebarWidth: M, setSidebarWidth: F } = l(), [R, z] = h(/* @__PURE__ */ new Set()), B = m(null), V = p(() => t(B, E), [E]), H = m(!1), [U, W] = h(!1), G = f((e) => {
		if (O) return;
		e.preventDefault(), H.current = !0, W(!0), document.body.style.cursor = "col-resize", document.body.style.userSelect = "none";
		let t = (e) => {
			if (!H.current || !B.current) return;
			let t = B.current.getBoundingClientRect(), n = e.clientX - t.left;
			F(Math.max(k, Math.min(n, A)));
		}, n = () => {
			H.current = !1, W(!1), document.body.style.cursor = "", document.body.style.userSelect = "", document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n);
		};
		document.addEventListener("mousemove", t), document.addEventListener("mouseup", n);
	}, [O, F]);
	function K(e) {
		z((t) => {
			let n = new Set(t);
			return n.has(e) ? n.delete(e) : n.add(e), n;
		});
	}
	return /* @__PURE__ */ v("aside", {
		...D,
		ref: V,
		className: e("ui-glass ui-glass-chrome bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex", !U && "transition-[width] duration-[200ms] ease-out", "border-border", w),
		style: {
			width: O ? j : M,
			...T
		},
		children: [
			!O && /* @__PURE__ */ _("div", {
				onMouseDown: G,
				className: "hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
			}),
			/* @__PURE__ */ _("div", {
				className: "border-border flex shrink-0 items-center border-b px-2",
				style: { height: "var(--topbar-height)" },
				children: /* @__PURE__ */ _(P, {
					brand: r,
					collapsed: O
				})
			}),
			!O && C && /* @__PURE__ */ _("div", {
				className: "border-border shrink-0 border-b px-2 py-2",
				children: C
			}),
			/* @__PURE__ */ _("nav", {
				className: "flex-1 overflow-y-auto px-2 py-2",
				children: n.map((t, n) => {
					let r = R.has(t.title);
					return /* @__PURE__ */ v("div", {
						className: "mb-4",
						children: [O ? n > 0 && /* @__PURE__ */ _("hr", { className: "border-border mx-auto my-1.5 w-4/5" }) : /* @__PURE__ */ v("button", {
							type: "button",
							onClick: () => K(t.title),
							className: "text-2xs-f text-text-tertiary hover:text-text-secondary font-label flex w-full cursor-pointer items-center gap-1 px-2 text-left font-semibold tracking-wider uppercase",
							style: {
								paddingTop: "0.35em",
								paddingBottom: "0.35em"
							},
							children: [/* @__PURE__ */ _("span", {
								className: "min-w-0 flex-1",
								children: t.title
							}), /* @__PURE__ */ _(x, { className: e("h-3 w-3 shrink-0 transition-transform", r && "-rotate-90") })]
						}), (!r || O) && /* @__PURE__ */ _("ul", {
							className: "flex flex-col gap-1",
							children: t.items.map((e) => /* @__PURE__ */ _("li", { children: /* @__PURE__ */ _(N, {
								item: e,
								collapsed: O,
								currentPath: b,
								onNavigate: S
							}) }, e.path))
						})]
					}, t.title);
				})
			}),
			/* @__PURE__ */ v("div", {
				className: "shrink-0 px-2 py-1.5",
				children: [/* @__PURE__ */ _(L, {
					collapsed: O,
					settingsPath: d,
					settingsLabel: g,
					onOpenSettings: y,
					onNavigate: S
				}), i.length > 0 && /* @__PURE__ */ _("div", {
					className: "border-border mt-2 border-t pt-2",
					children: /* @__PURE__ */ _(I, {
						collapsed: O,
						accounts: i,
						initialAccountIndex: a,
						onAccountChange: o,
						onSignOut: s,
						signOutPath: c,
						signOutLabel: u,
						onNavigate: S
					})
				})]
			})
		]
	});
}
//#endregion
export { R as Sidebar };
