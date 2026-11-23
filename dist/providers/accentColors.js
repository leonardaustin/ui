//#region src/providers/accentColors.ts
var e = {
	purple: {
		base: "#7a59fc",
		onAccent: "#ffffff",
		hover: "#6B4AEB",
		active: "#5A39DA",
		muted: "rgba(124,92,252,0.15)",
		subtle: "rgba(124,92,252,0.08)"
	},
	blue: {
		base: "#3B82F6",
		onAccent: "#000000",
		hover: "#326dec",
		active: "#416ce5",
		muted: "rgba(59,130,246,0.15)",
		subtle: "rgba(59,130,246,0.08)"
	},
	green: {
		base: "#15803D",
		onAccent: "#ffffff",
		hover: "#166534",
		active: "#14532D",
		muted: "rgba(34,197,94,0.15)",
		subtle: "rgba(34,197,94,0.08)"
	},
	teal: {
		base: "#0F766E",
		onAccent: "#ffffff",
		hover: "#115E59",
		active: "#134E4A",
		muted: "rgba(20,184,166,0.15)",
		subtle: "rgba(20,184,166,0.08)"
	},
	orange: {
		base: "#C2410C",
		onAccent: "#ffffff",
		hover: "#9A3412",
		active: "#7C2D12",
		muted: "rgba(249,115,22,0.15)",
		subtle: "rgba(249,115,22,0.08)"
	},
	red: {
		base: "#EF4444",
		onAccent: "#000000",
		hover: "#dd2e2e",
		active: "#df2a2a",
		muted: "rgba(239,68,68,0.15)",
		subtle: "rgba(239,68,68,0.08)"
	},
	pink: {
		base: "#EC4899",
		onAccent: "#000000",
		hover: "#DB2777",
		active: "#df1c6d",
		muted: "rgba(236,72,153,0.15)",
		subtle: "rgba(236,72,153,0.08)"
	},
	indigo: {
		base: "#6265f1",
		onAccent: "#ffffff",
		hover: "#4F46E5",
		active: "#4338CA",
		muted: "rgba(99,102,241,0.15)",
		subtle: "rgba(99,102,241,0.08)"
	}
}, t = new Set(Object.keys(e));
function n(t, n) {
	let r = e[n];
	t.setProperty("--accent", r.base), t.setProperty("--text-on-accent", r.onAccent);
	let i = r.onAccent === "#ffffff";
	t.setProperty("--accent-hover", i ? r.hover : `var(--glass-accent-hover, ${r.hover})`), t.setProperty("--accent-active", i ? r.active : `var(--glass-accent-active, ${r.active})`), t.setProperty("--accent-muted", r.muted), t.setProperty("--accent-subtle", r.subtle);
}
//#endregion
export { t as VALID_ACCENTS, n as applyAccentColors };
