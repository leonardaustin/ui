//#region src/providers/themeClasses.ts
var e = {
	dark: [],
	light: ["theme-light"],
	lightInverted: ["theme-light-inverted"],
	monokai: ["theme-monokai"],
	solarized: ["theme-solarized"],
	cyberBrutalDark: ["theme-cyber-brutal-dark"],
	cyberBrutalLight: ["theme-cyber-brutal-light"],
	hashiTheme: ["theme-hashi"],
	glassDark: ["theme-glass", "theme-glass-dark"],
	glassLight: ["theme-glass", "theme-glass-light"]
}, t = [...new Set(Object.values(e).flat())];
function n(n, r) {
	n.remove(...t);
	let i = Object.hasOwn(e, r) ? e[r] : [];
	n.add(...i);
}
//#endregion
export { n as applyThemeClasses };
