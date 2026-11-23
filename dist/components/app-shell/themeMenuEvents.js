//#region src/components/app-shell/themeMenuEvents.ts
var e = "open-theme-menu";
function t(t = e) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(t));
}
//#endregion
export { e as THEME_MENU_EVENT, t as openThemeMenu };
