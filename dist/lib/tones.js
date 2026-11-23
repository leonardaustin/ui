//#region src/lib/tones.ts
var e = {
	success: "green",
	warning: "yellow",
	danger: "red",
	info: "blue",
	neutral: "gray"
}, t = {
	green: {
		soft: "bg-green-muted text-green-fg",
		outline: "border-green text-green-fg",
		fill: "bg-green-muted",
		dot: "bg-green",
		text: "text-green-fg",
		border: "border-green/30"
	},
	yellow: {
		soft: "bg-yellow-muted text-yellow-fg",
		outline: "border-yellow text-yellow-fg",
		fill: "bg-yellow-muted",
		dot: "bg-yellow",
		text: "text-yellow-fg",
		border: "border-yellow/30"
	},
	red: {
		soft: "bg-red-muted text-red-fg",
		outline: "border-red text-red-fg",
		fill: "bg-red-muted",
		dot: "bg-red",
		text: "text-red-fg",
		border: "border-red/30"
	},
	blue: {
		soft: "bg-blue-muted text-blue-fg",
		outline: "border-blue text-blue-fg",
		fill: "bg-blue-muted",
		dot: "bg-blue",
		text: "text-blue-fg",
		border: "border-blue/30"
	},
	purple: {
		soft: "bg-purple-muted text-purple-fg",
		outline: "border-purple text-purple-fg",
		fill: "bg-purple-muted",
		dot: "bg-purple",
		text: "text-purple-fg",
		border: "border-purple/30"
	},
	teal: {
		soft: "bg-teal-muted text-teal-fg",
		outline: "border-teal text-teal-fg",
		fill: "bg-teal-muted",
		dot: "bg-teal",
		text: "text-teal-fg",
		border: "border-teal/30"
	},
	rose: {
		soft: "bg-rose-muted text-rose-fg",
		outline: "border-rose text-rose-fg",
		fill: "bg-rose-muted",
		dot: "bg-rose",
		text: "text-rose-fg",
		border: "border-rose/30"
	},
	gray: {
		soft: "bg-bg-hover text-text-secondary",
		outline: "border-border text-text-secondary",
		fill: "bg-bg-hover",
		dot: "bg-text-tertiary",
		text: "text-text-tertiary",
		border: "border-border"
	},
	accent: {
		soft: "bg-accent-muted text-accent-fg",
		outline: "border-accent text-accent-fg",
		fill: "bg-accent-muted",
		dot: "bg-accent",
		text: "text-accent-fg",
		border: "border-accent/30"
	}
}, n = (e) => ({
	soft: `bg-${e}-muted text-${e}-fg`,
	outline: `border-${e} text-${e}-fg`,
	fill: `bg-${e}-muted`,
	dot: `bg-${e}`,
	text: `text-${e}-fg`,
	border: `border-${e}/30`
}), r = {
	success: n("success"),
	warning: n("warning"),
	danger: n("danger"),
	info: n("info")
};
function i(n) {
	return typeof n == "string" && (Object.prototype.hasOwnProperty.call(t, n) || Object.prototype.hasOwnProperty.call(e, n));
}
function a(t) {
	return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : t;
}
function o(e) {
	return Object.prototype.hasOwnProperty.call(r, e) ? r[e] : t[a(e)];
}
//#endregion
export { i as isTone, e as semanticTones, o as toneClasses, a as toneColor, t as tones };
