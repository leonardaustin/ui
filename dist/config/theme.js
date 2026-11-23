import { BookOpen as e, Layers3 as t, Monitor as n, Moon as r, Palette as i, Sun as a, Zap as o } from "lucide-react";
//#region src/config/theme.ts
var s = [
	{
		value: "dark",
		label: "Dark",
		icon: r,
		preview: {
			bg: "#0d0f12",
			fg: "#2a2e38"
		}
	},
	{
		value: "light",
		label: "Light",
		icon: a,
		preview: {
			bg: "#f5f5f5",
			fg: "#d4d4d8"
		}
	},
	{
		value: "lightInverted",
		label: "Light Inverted",
		icon: a,
		preview: {
			bg: "#f1f2f4",
			fg: "#ffffff"
		}
	},
	{
		value: "monokai",
		label: "Monokai",
		icon: i,
		preview: {
			bg: "#272822",
			fg: "#3E3D32"
		}
	},
	{
		value: "solarized",
		label: "Solarized",
		icon: n,
		preview: {
			bg: "#002B36",
			fg: "#0A3F4C"
		}
	},
	{
		value: "cyberBrutalDark",
		label: "Cyber Brutal Dark",
		icon: o,
		preview: {
			bg: "#050505",
			fg: "#18181b"
		}
	},
	{
		value: "cyberBrutalLight",
		label: "Cyber Brutal Light",
		icon: o,
		preview: {
			bg: "#e4e4e7",
			fg: "#d4d4d8"
		}
	},
	{
		value: "hashiTheme",
		label: "HashiTheme",
		icon: e,
		preview: {
			bg: "#ffffff",
			fg: "#364153"
		}
	},
	{
		value: "glassDark",
		label: "Glass Dark",
		icon: t,
		preview: {
			bg: "#1e2035",
			fg: "#272d40"
		}
	},
	{
		value: "glassLight",
		label: "Glass Light",
		icon: t,
		preview: {
			bg: "#ecebf4",
			fg: "#f7f8fc"
		}
	}
], c = new Set([
	"light",
	"lightInverted",
	"cyberBrutalLight",
	"hashiTheme",
	"glassLight"
]);
function l(e) {
	return c.has(e);
}
var u = s.filter((e) => l(e.value)), d = s.filter((e) => !l(e.value)), f = {
	uiFont: "inter",
	headingFont: "inter",
	proseFont: "inter",
	controlFont: "inter",
	labelFont: "inter",
	navigationFont: "inter",
	dataFont: "inter",
	codeFont: "jetbrains-mono",
	fontSize: 15,
	borderRadius: 6,
	borderWidth: 1,
	tracking: .05,
	lineHeight: 1.45,
	density: .25
}, p = {
	uiFont: "jetbrains-mono",
	headingFont: "jetbrains-mono",
	proseFont: "jetbrains-mono",
	controlFont: "jetbrains-mono",
	labelFont: "jetbrains-mono",
	navigationFont: "jetbrains-mono",
	dataFont: "jetbrains-mono",
	codeFont: "jetbrains-mono",
	fontSize: 15,
	borderRadius: 0,
	borderWidth: 1,
	tracking: .2,
	lineHeight: 1.4,
	density: .22
}, m = {
	uiFont: "inter",
	headingFont: "archivo-expanded",
	proseFont: "pt-serif",
	controlFont: "inter",
	labelFont: "inter",
	navigationFont: "inter",
	dataFont: "inter",
	codeFont: "jetbrains-mono",
	fontSize: 14,
	borderRadius: 6,
	borderWidth: 1,
	tracking: 0,
	lineHeight: 1.45,
	density: .25
}, h = {
	...f,
	borderRadius: 12
}, g = {
	dark: f,
	light: f,
	lightInverted: f,
	monokai: f,
	solarized: f,
	cyberBrutalDark: p,
	cyberBrutalLight: p,
	hashiTheme: m,
	glassDark: h,
	glassLight: h
}, _ = [
	{
		value: "archivo-expanded",
		label: "Archivo Expanded"
	},
	{
		value: "inter",
		label: "Inter"
	},
	{
		value: "jetbrains-mono",
		label: "JetBrains Mono"
	},
	{
		value: "pt-serif",
		label: "PT Serif"
	},
	{
		value: "system",
		label: "System"
	}
], v = [
	{
		value: "purple",
		color: "#7a59fc"
	},
	{
		value: "blue",
		color: "#3B82F6"
	},
	{
		value: "green",
		color: "#15803D"
	},
	{
		value: "teal",
		color: "#0F766E"
	},
	{
		value: "orange",
		color: "#C2410C"
	},
	{
		value: "red",
		color: "#EF4444"
	},
	{
		value: "pink",
		color: "#EC4899"
	},
	{
		value: "indigo",
		color: "#6265f1"
	}
];
//#endregion
export { v as accentItems, d as darkThemes, _ as fontOptions, l as isLightTheme, u as lightThemes, g as themeDefaults, s as themeItems };
