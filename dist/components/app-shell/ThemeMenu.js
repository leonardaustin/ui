import { cn as e } from "../../lib/cn.js";
import { mergeRefs as t } from "../../lib/mergeRefs.js";
import { usePortalContainer as n } from "../../hooks/usePortalContainer.js";
import { accentItems as r, darkThemes as i, fontOptions as a, lightThemes as o, themeItems as s } from "../../config/theme.js";
import { useAnchoredPopup as ee } from "../../hooks/useAnchoredPopup.js";
import { useDismiss as te } from "../../hooks/useDismiss.js";
import { useSettings as c } from "../../hooks/useSettings.js";
import { useToast as l } from "../ui/Toast.js";
import { useApplyTheme as u } from "../../hooks/useApplyTheme.js";
import { Button as d } from "../ui/Button.js";
import { SectionHeader as f } from "../ui/SectionHeader.js";
import { SelectDropdown as p } from "../ui/SelectDropdown.js";
import { Slider as m } from "../ui/Slider.js";
import { ThemePreview as h } from "../ui/ThemePreview.js";
import { Toggle as g } from "../ui/Toggle.js";
import { THEME_MENU_EVENT as _ } from "./themeMenuEvents.js";
import { useCallback as v, useEffect as y, useMemo as b, useRef as x, useState as S } from "react";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
import { Monitor as E, Moon as D, Palette as ne, Sun as O } from "lucide-react";
import { createPortal as re } from "react-dom";
//#region src/components/app-shell/ThemeMenu.tsx
var k = [
	{
		value: "dark",
		label: "Dark",
		Icon: D
	},
	{
		value: "light",
		label: "Light",
		Icon: O
	},
	{
		value: "system",
		label: "System",
		Icon: E
	}
];
function A({ className: E, respondToOpenEvent: D = !0, onClick: O, ref: A, ...j }) {
	let [M, N] = S(!1), P = n(), [F, I] = S(!1), L = x(null), R = b(() => t(L, A), [A]), z = x(null), B = c(), V = u(), { toast: H } = l(), U = v(() => {
		N(!1), I(!1);
	}, []);
	te(M, U, [z], [L], { outsideClick: !F }), ee(M, L, z, {
		side: "bottom",
		align: "end",
		gap: 6,
		onAnchorHidden: F ? void 0 : U
	});
	function W() {
		if (M) {
			U();
			return;
		}
		N(!0);
	}
	y(() => {
		if (!D) return;
		let e = () => {
			N(!0), I(!0);
		};
		return document.addEventListener(_, e), () => document.removeEventListener(_, e);
	}, [D]);
	let { colorMode: G, setColorMode: K, preferredDarkTheme: q, preferredLightTheme: J, accentColor: Y, setAccentColor: X, fontSize: ie, setFontSize: ae, uiFont: oe, setUiFont: se, headingFont: ce, setHeadingFont: le, proseFont: ue, setProseFont: de, codeFont: fe, setCodeFont: pe, borderRadius: me, setBorderRadius: he, borderWidth: ge, setBorderWidth: _e, tracking: ve, setTracking: ye, lineHeight: be, setLineHeight: xe, density: Se, setDensity: Z, reducedMotion: Ce, setReducedMotion: we, saveThemeCustomization: Te, resetThemeCustomization: Ee, hasThemeOverrides: De, isCustomized: Q, resolvedTheme: $ } = B;
	return /* @__PURE__ */ T(C, { children: [/* @__PURE__ */ w("button", {
		type: "button",
		...j,
		ref: R,
		onClick: (e) => {
			O?.(e), !e.defaultPrevented && W();
		},
		"aria-label": "Theme settings",
		"aria-haspopup": "dialog",
		"aria-expanded": M,
		title: "Theme",
		className: e("flex h-7 w-7 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]", M ? "text-accent-fg bg-accent-muted" : "text-text-tertiary hover:text-text-primary hover:bg-bg-hover", E),
		children: /* @__PURE__ */ w(ne, { className: "h-4 w-4" })
	}), M && re(/* @__PURE__ */ w("div", {
		ref: z,
		role: "dialog",
		"aria-label": "Theme settings",
		className: "ui-theme-menu ui-glass ui-glass-popover bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] flex w-80 flex-col overflow-y-auto rounded-md border p-3 shadow-lg",
		style: { maxHeight: "80vh" },
		children: /* @__PURE__ */ T("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w(f, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Mode"
				}), /* @__PURE__ */ w("div", {
					className: "bg-bg-secondary border-border flex gap-1 rounded-md border p-1.5",
					children: k.map(({ value: t, label: n, Icon: r }) => /* @__PURE__ */ T("button", {
						type: "button",
						onClick: () => K(t),
						className: e("font-navigation flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded px-2 py-1 text-xs transition-colors duration-[100ms]", G === t ? "bg-accent-muted text-accent-fg" : "text-text-secondary hover:text-text-primary hover:bg-bg-hover"),
						children: [/* @__PURE__ */ w(r, { className: "h-3.5 w-3.5" }), n]
					}, t))
				})] }),
				/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w(f, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Dark themes"
				}), /* @__PURE__ */ w("div", {
					className: "grid grid-cols-2 gap-2",
					children: i.map((e) => /* @__PURE__ */ w(h, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: q === e.value,
						onClick: () => V(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w(f, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Light themes"
				}), /* @__PURE__ */ w("div", {
					className: "grid grid-cols-2 gap-2",
					children: o.map((e) => /* @__PURE__ */ w(h, {
						label: e.label,
						icon: e.icon,
						preview: e.preview,
						active: J === e.value,
						onClick: () => V(e.value)
					}, e.value))
				})] }),
				/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w(f, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Accent"
				}), /* @__PURE__ */ w("div", {
					className: "flex flex-wrap gap-1.5",
					children: r.map((t) => /* @__PURE__ */ w("button", {
						type: "button",
						onClick: () => X(t.value),
						className: e("h-6 w-6 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110", Y === t.value && "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1"),
						style: {
							backgroundColor: t.color,
							...Y === t.value ? { "--utility-ring-color": t.color } : {}
						},
						title: t.value.charAt(0).toUpperCase() + t.value.slice(1),
						"aria-label": t.value
					}, t.value))
				})] }),
				/* @__PURE__ */ T("div", { children: [/* @__PURE__ */ w(f, {
					as: "h3",
					border: !1,
					className: "mb-2",
					children: "Fonts"
				}), /* @__PURE__ */ T("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ w(p, {
							label: "UI / Body",
							size: "sm",
							options: a,
							value: oe,
							onValueChange: (e) => se(e)
						}),
						/* @__PURE__ */ w(p, {
							label: "Headings",
							size: "sm",
							options: a,
							value: ce,
							onValueChange: (e) => le(e)
						}),
						/* @__PURE__ */ w(p, {
							label: "Prose",
							size: "sm",
							options: a,
							value: ue,
							onValueChange: (e) => de(e)
						}),
						/* @__PURE__ */ w(p, {
							label: "Code",
							size: "sm",
							options: a,
							value: fe,
							onValueChange: (e) => pe(e)
						})
					]
				})] }),
				/* @__PURE__ */ T("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ w(m, {
							label: "Font size",
							min: 11,
							max: 18,
							value: ie,
							onValueChange: ae,
							showValue: !0
						}),
						/* @__PURE__ */ w(m, {
							label: "Corner radius",
							min: 0,
							max: 16,
							value: me,
							onValueChange: he,
							showValue: !0
						}),
						/* @__PURE__ */ w(m, {
							label: "Border width",
							min: 1,
							max: 3,
							value: ge,
							onValueChange: _e,
							showValue: !0
						}),
						/* @__PURE__ */ w(m, {
							label: "Letter spacing",
							min: 0,
							max: .3,
							step: .01,
							value: ve,
							onValueChange: ye,
							showValue: !0
						}),
						/* @__PURE__ */ w(m, {
							label: "Line height",
							min: 1.2,
							max: 2,
							step: .05,
							value: be,
							onValueChange: xe,
							showValue: !0
						}),
						/* @__PURE__ */ w(m, {
							label: "Density",
							min: .18,
							max: .32,
							step: .01,
							value: Se,
							onValueChange: Z,
							showValue: !0
						})
					]
				}),
				/* @__PURE__ */ w(g, {
					label: "Reduced motion",
					checked: Ce,
					onCheckedChange: we
				}),
				/* @__PURE__ */ T("div", {
					className: "border-border flex items-center gap-2 border-t pt-3",
					children: [/* @__PURE__ */ w(d, {
						variant: "primary",
						size: "sm",
						disabled: !Q,
						onClick: () => {
							Te(), H("success", `Saved customization for ${s.find((e) => e.value === $)?.label ?? $}`);
						},
						children: "Save for theme"
					}), /* @__PURE__ */ w(d, {
						variant: "secondary",
						size: "sm",
						disabled: !De && !Q,
						onClick: () => {
							Ee(), H("info", "Reset to theme defaults");
						},
						children: "Reset"
					})]
				})
			]
		})
	}), P ?? document.body)] });
}
//#endregion
export { A as ThemeMenu };
