import { clamp as e } from "../lib/math.js";
import { isLightTheme as t, themeDefaults as n } from "../config/theme.js";
import { SettingsContext as r } from "./SettingsContext.js";
import { VALID_ACCENTS as i, applyAccentColors as a } from "./accentColors.js";
import { useCallback as o, useEffect as s, useMemo as c, useState as l } from "react";
import { jsx as u } from "react/jsx-runtime";
//#region src/providers/SettingsProvider.tsx
var d = {
	"archivo-expanded": "\"Archivo\", \"Arial Black\", \"Avenir Next Condensed\", \"HelveticaNeue-CondensedBold\", system-ui, sans-serif",
	inter: "\"Inter\", system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
	"jetbrains-mono": "\"JetBrains Mono\", Menlo, Monaco, Consolas, monospace",
	"pt-serif": "\"PT Serif\", Georgia, ui-serif, Cambria, \"Times New Roman\", Times, serif",
	system: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
}, f = "leonardaustin-ui-settings", p = new Set(Object.keys(n)), m = new Set(Object.keys(d)), h = new Set([
	"light",
	"dark",
	"system"
]);
function g(t, n, r, i) {
	return typeof t != "number" || !isFinite(t) ? i : e(t, n, r);
}
function _(e) {
	let r = {};
	if (i.has(e.accentColor) && (r.accentColor = e.accentColor), h.has(e.colorMode) && (r.colorMode = e.colorMode), p.has(e.preferredDarkTheme) && !t(e.preferredDarkTheme) && (r.preferredDarkTheme = e.preferredDarkTheme), p.has(e.preferredLightTheme) && t(e.preferredLightTheme) && (r.preferredLightTheme = e.preferredLightTheme), typeof e.sidebarCollapsed == "boolean" && (r.sidebarCollapsed = e.sidebarCollapsed), typeof e.reducedMotion == "boolean" && (r.reducedMotion = e.reducedMotion), typeof e.sidebarWidth == "number" && (r.sidebarWidth = g(e.sidebarWidth, 160, 400, 220)), e.themeOverrides && typeof e.themeOverrides == "object") {
		let t = {};
		for (let [r, i] of Object.entries(e.themeOverrides)) {
			if (!p.has(r) || !i || typeof i != "object") continue;
			let e = i, a = n[r];
			t[r] = {
				uiFont: m.has(e.uiFont) ? e.uiFont : a.uiFont,
				headingFont: m.has(e.headingFont) ? e.headingFont : a.headingFont,
				proseFont: m.has(e.proseFont) ? e.proseFont : a.proseFont,
				controlFont: m.has(e.controlFont) ? e.controlFont : a.controlFont,
				labelFont: m.has(e.labelFont) ? e.labelFont : a.labelFont,
				navigationFont: m.has(e.navigationFont) ? e.navigationFont : a.navigationFont,
				dataFont: m.has(e.dataFont) ? e.dataFont : a.dataFont,
				codeFont: m.has(e.codeFont) ? e.codeFont : a.codeFont,
				fontSize: g(e.fontSize, 11, 18, a.fontSize),
				borderRadius: g(e.borderRadius, 0, 16, a.borderRadius),
				borderWidth: g(e.borderWidth, 1, 3, a.borderWidth),
				tracking: g(e.tracking, 0, .3, a.tracking),
				lineHeight: g(e.lineHeight, 1.2, 2, a.lineHeight),
				density: g(e.density, .18, .32, a.density)
			};
		}
		r.themeOverrides = t;
	}
	return r;
}
var v = {
	accentColor: "purple",
	sidebarCollapsed: !1,
	sidebarWidth: 220,
	reducedMotion: !1,
	colorMode: "dark",
	preferredDarkTheme: "dark",
	preferredLightTheme: "light",
	themeOverrides: {}
};
function y(e, t) {
	let n = {
		...v,
		..._(t ?? {})
	};
	if (typeof localStorage > "u") return n;
	try {
		let t = localStorage.getItem(e);
		if (t) return {
			...n,
			..._(JSON.parse(t))
		};
	} catch (e) {
		console.warn("[SettingsProvider] Failed to load settings:", e);
	}
	return n;
}
function b(e, t) {
	let r = n[e] ?? n.dark;
	return t[e] ? {
		...r,
		...t[e]
	} : r;
}
function x(e, t) {
	return e.uiFont === t.uiFont && e.headingFont === t.headingFont && e.proseFont === t.proseFont && e.controlFont === t.controlFont && e.labelFont === t.labelFont && e.navigationFont === t.navigationFont && e.dataFont === t.dataFont && e.codeFont === t.codeFont && e.fontSize === t.fontSize && e.borderRadius === t.borderRadius && e.borderWidth === t.borderWidth && e.tracking === t.tracking && e.lineHeight === t.lineHeight && e.density === t.density;
}
function S({ children: e, storageKey: t = f, initialSettings: i, forcedTheme: p }) {
	let [m, h] = l(() => y(t, i)), [g, _] = l(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches);
	s(() => {
		if (typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)"), t = (e) => _(e.matches);
		return e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let v = c(() => p || (m.colorMode === "light" ? m.preferredLightTheme : m.colorMode === "dark" || g ? m.preferredDarkTheme : m.preferredLightTheme), [
		p,
		m.colorMode,
		m.preferredDarkTheme,
		m.preferredLightTheme,
		g
	]), [S, C] = l(() => b(v, m.themeOverrides));
	s(() => {
		C(b(v, m.themeOverrides));
	}, [v]);
	let w = o((e) => {
		h((n) => {
			let r = {
				...n,
				...e
			};
			try {
				localStorage.setItem(t, JSON.stringify(r));
			} catch (e) {
				console.warn("[SettingsProvider] Failed to persist settings:", e);
			}
			return r;
		});
	}, [t]);
	s(() => {
		a(document.documentElement.style, m.accentColor);
	}, [m.accentColor]), s(() => {
		document.documentElement.classList.toggle("reduced-motion", m.reducedMotion);
	}, [m.reducedMotion]), s(() => {
		let e = document.documentElement, t = S.borderRadius;
		e.style.fontSize = `${S.fontSize / 13 * 100}%`, e.style.setProperty("--font-ui", d[S.uiFont]), e.style.setProperty("--font-heading", d[S.headingFont]), e.style.setProperty("--font-prose", d[S.proseFont]), e.style.setProperty("--font-control", d[S.controlFont]), e.style.setProperty("--font-label", d[S.labelFont]), e.style.setProperty("--font-navigation", d[S.navigationFont]), e.style.setProperty("--font-data", d[S.dataFont]), e.style.setProperty("--font-code", d[S.codeFont]), e.style.setProperty("--ui-radius", t === 0 ? "0" : `${Math.round(t * 2 / 3)}px`), e.style.setProperty("--ui-radius-md", t === 0 ? "0" : `${t}px`), e.style.setProperty("--ui-radius-lg", t === 0 ? "0" : `${Math.round(t * 4 / 3)}px`), e.style.setProperty("--ui-radius-xl", t === 0 ? "0" : `${t * 2}px`), e.style.setProperty("--ui-border-width", `${S.borderWidth}px`), e.style.setProperty("--ui-tracking", `${S.tracking}em`), e.style.setProperty("--ui-line-height", String(S.lineHeight)), e.style.setProperty("--ui-density", `${S.density}rem`);
	}, [S]);
	let T = c(() => b(v, m.themeOverrides), [v, m.themeOverrides]), E = v in m.themeOverrides, D = !x(S, T), O = o(() => {
		w({ themeOverrides: {
			...m.themeOverrides,
			[v]: { ...S }
		} });
	}, [
		w,
		m.themeOverrides,
		v,
		S
	]), k = o(() => {
		let e = { ...m.themeOverrides };
		delete e[v], w({ themeOverrides: e }), C(n[v] ?? n.dark);
	}, [
		w,
		m.themeOverrides,
		v
	]), A = c(() => ({
		fontSize: S.fontSize,
		setFontSize: (e) => C((t) => ({
			...t,
			fontSize: e
		})),
		accentColor: m.accentColor,
		setAccentColor: (e) => w({ accentColor: e }),
		sidebarCollapsed: m.sidebarCollapsed,
		setSidebarCollapsed: (e) => w({ sidebarCollapsed: e }),
		sidebarWidth: m.sidebarWidth,
		setSidebarWidth: (e) => w({ sidebarWidth: e }),
		reducedMotion: m.reducedMotion,
		setReducedMotion: (e) => w({ reducedMotion: e }),
		colorMode: m.colorMode,
		setColorMode: (e) => w({ colorMode: e }),
		preferredDarkTheme: m.preferredDarkTheme,
		setPreferredDarkTheme: (e) => w({ preferredDarkTheme: e }),
		preferredLightTheme: m.preferredLightTheme,
		setPreferredLightTheme: (e) => w({ preferredLightTheme: e }),
		resolvedTheme: v,
		uiFont: S.uiFont,
		headingFont: S.headingFont,
		proseFont: S.proseFont,
		controlFont: S.controlFont,
		labelFont: S.labelFont,
		navigationFont: S.navigationFont,
		dataFont: S.dataFont,
		codeFont: S.codeFont,
		borderRadius: S.borderRadius,
		borderWidth: S.borderWidth,
		tracking: S.tracking,
		lineHeight: S.lineHeight,
		density: S.density,
		setUiFont: (e) => C((t) => ({
			...t,
			uiFont: e
		})),
		setHeadingFont: (e) => C((t) => ({
			...t,
			headingFont: e
		})),
		setProseFont: (e) => C((t) => ({
			...t,
			proseFont: e
		})),
		setControlFont: (e) => C((t) => ({
			...t,
			controlFont: e
		})),
		setLabelFont: (e) => C((t) => ({
			...t,
			labelFont: e
		})),
		setNavigationFont: (e) => C((t) => ({
			...t,
			navigationFont: e
		})),
		setDataFont: (e) => C((t) => ({
			...t,
			dataFont: e
		})),
		setCodeFont: (e) => C((t) => ({
			...t,
			codeFont: e
		})),
		setBorderRadius: (e) => C((t) => ({
			...t,
			borderRadius: e
		})),
		setBorderWidth: (e) => C((t) => ({
			...t,
			borderWidth: e
		})),
		setTracking: (e) => C((t) => ({
			...t,
			tracking: e
		})),
		setLineHeight: (e) => C((t) => ({
			...t,
			lineHeight: e
		})),
		setDensity: (e) => C((t) => ({
			...t,
			density: e
		})),
		saveThemeCustomization: O,
		resetThemeCustomization: k,
		hasThemeOverrides: E,
		isCustomized: D
	}), [
		m,
		w,
		S,
		v,
		O,
		k,
		E,
		D
	]);
	return /* @__PURE__ */ u(r.Provider, {
		value: A,
		children: e
	});
}
//#endregion
export { S as SettingsProvider };
