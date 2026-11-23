//#region src/components/app-shell/commandPaletteEvents.ts
var e = "open-command-palette", t = {
	key: "k",
	label: "⌘K",
	modifier: "primary"
};
function n(t = e) {
	typeof document > "u" || document.dispatchEvent(new CustomEvent(t));
}
function r(e, t) {
	if (e.key.toLowerCase() !== t.key.toLowerCase()) return !1;
	let n = t.modifier ?? "primary";
	return (n === "primary" ? e.metaKey || e.ctrlKey : n === "meta" ? e.metaKey && !e.ctrlKey : n === "ctrl" ? e.ctrlKey && !e.metaKey : !e.metaKey && !e.ctrlKey) && !!e.altKey == !!t.altKey && !!e.shiftKey == !!t.shiftKey;
}
//#endregion
export { e as COMMAND_PALETTE_EVENT, t as DEFAULT_COMMAND_PALETTE_SHORTCUT, r as matchesCommandPaletteShortcut, n as openCommandPalette };
