import { cn as e } from "../../lib/cn.js";
import { createElement as t, useImperativeHandle as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/ui/AudioPlayer.tsx
var s = {
	xmlns: "http://www.w3.org/2000/svg",
	"aria-hidden": !0,
	focusable: !1
}, ee = ({ forward: e, seconds: t, size: n }) => /* @__PURE__ */ o("svg", {
	...s,
	viewBox: "0 0 24 24",
	width: n,
	height: n,
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.8,
	strokeLinecap: "round",
	strokeLinejoin: "round",
	children: [/* @__PURE__ */ o("g", {
		transform: e ? "translate(24 0) scale(-1 1)" : void 0,
		children: [/* @__PURE__ */ a("path", { d: "M12 4.2A8.6 8.6 0 1 0 20.6 12.8" }), /* @__PURE__ */ a("path", { d: "M14.6 1.8 12 4.3l2.6 2.5" })]
	}), /* @__PURE__ */ a("text", {
		x: "12",
		y: "16",
		textAnchor: "middle",
		fontSize: "8.6",
		fontWeight: "600",
		fill: "currentColor",
		stroke: "none",
		fontFamily: "inherit",
		children: t
	})]
}), c = {
	pill: {
		play: /* @__PURE__ */ a("svg", {
			...s,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ a("path", { d: "M8 5v14l11-7z" })
		}),
		pause: /* @__PURE__ */ a("svg", {
			...s,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ a("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" })
		}),
		volume: /* @__PURE__ */ a("svg", {
			...s,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ a("path", { d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" })
		}),
		muted: /* @__PURE__ */ a("svg", {
			...s,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ a("path", { d: "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" })
		}),
		download: /* @__PURE__ */ a("svg", {
			...s,
			viewBox: "0 0 24 24",
			width: 20,
			height: 20,
			fill: "currentColor",
			children: /* @__PURE__ */ a("path", { d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" })
		})
	},
	glass: {
		play: /* @__PURE__ */ a("svg", {
			...s,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "currentColor",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round",
			children: /* @__PURE__ */ a("path", { d: "M2.6 1.4 13.2 8 2.6 14.6z" })
		}),
		pause: /* @__PURE__ */ o("svg", {
			...s,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "currentColor",
			children: [/* @__PURE__ */ a("rect", {
				x: "2.6",
				y: "1.6",
				width: "3.6",
				height: "12.8",
				rx: "1"
			}), /* @__PURE__ */ a("rect", {
				x: "9.8",
				y: "1.6",
				width: "3.6",
				height: "12.8",
				rx: "1"
			})]
		}),
		volume: /* @__PURE__ */ o("svg", {
			...s,
			viewBox: "0 0 22 16",
			width: 26,
			height: 18,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.3,
			strokeLinecap: "round",
			children: [
				/* @__PURE__ */ a("path", {
					d: "M1.5 5.6h3L8.6 2v12L4.5 10.4h-3z",
					fill: "currentColor",
					stroke: "none"
				}),
				/* @__PURE__ */ a("path", { d: "M11.4 5.6a3.4 3.4 0 0 1 0 4.8" }),
				/* @__PURE__ */ a("path", { d: "M14.2 3.8a6.4 6.4 0 0 1 0 8.4" }),
				/* @__PURE__ */ a("path", { d: "M17 2.2a9 9 0 0 1 0 11.6" })
			]
		}),
		muted: /* @__PURE__ */ o("svg", {
			...s,
			viewBox: "0 0 22 16",
			width: 26,
			height: 18,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.3,
			strokeLinecap: "round",
			children: [/* @__PURE__ */ a("path", {
				d: "M1.5 5.6h3L8.6 2v12L4.5 10.4h-3z",
				fill: "currentColor",
				stroke: "none"
			}), /* @__PURE__ */ a("path", { d: "m12 5.8 5 4.4M17 5.8l-5 4.4" })]
		}),
		download: /* @__PURE__ */ a("svg", {
			...s,
			viewBox: "0 0 16 16",
			width: 16,
			height: 16,
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 1.4,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: /* @__PURE__ */ a("path", { d: "M8 1.8v8M4.6 7l3.4 3.4L11.4 7M2.8 13.6h10.4" })
		})
	}
};
function l(e, t) {
	let n = Number.isFinite(e) && e > 0 ? Math.floor(e) : 0, r = Math.floor(n / 3600), i = Math.floor(n % 3600 / 60), a = String(n % 60).padStart(2, "0");
	return r > 0 ? `${r}:${String(i).padStart(2, "0")}:${a}` : `${t ? String(i).padStart(2, "0") : i}:${a}`;
}
function u(e) {
	return /* @__PURE__ */ t(d, {
		...e,
		key: e.src
	});
}
function d({ src: t, title: s = "Audio recording", preload: u = "metadata", onTimeUpdate: d, onError: f, downloadHref: p, downloadName: m, variant: h = "plain", skipSeconds: g = !1, showMute: _ = !1, keyboardShortcuts: v = !0, playbackRates: y = [
	1,
	1.25,
	1.5,
	2
], className: te, appearance: b = "pill", controls: ne, ref: x, ...S }) {
	let C = r(null), w = r(!1), T = r(null), [E, D] = i(!1), [re, O] = i(u !== "none"), [k, A] = i(), [j, M] = i(0), [N, P] = i(0), [F, I] = i(!1), [L, R] = i(1), [z, ie] = i(1), B = [...new Set([1, ...y.filter((e) => Number.isFinite(e) && e > 0)])].sort((e, t) => e - t), V = j <= 0 || !!k, H = j > 0 ? Math.min(100, Math.max(0, N / j * 100)) : 0, U = typeof g == "number" && Number.isFinite(g) && g > 0, W = U ? g : 10, G = b === "glass", K = c[b], q = [...new Set(ne ?? [
		...U ? ["skipBack"] : [],
		"play",
		...U ? ["skipForward"] : [],
		...b === "glass" ? [
			"currentTime",
			"progress",
			"duration"
		] : ["time", "progress"],
		..._ ? ["mute"] : [],
		"speed",
		...p ? ["download"] : []
	])];
	async function J() {
		let e = C.current;
		if (!(!e || k || !t)) {
			if (!e.paused) {
				e.pause();
				return;
			}
			try {
				await e.play();
			} catch (t) {
				C.current === e && !(t instanceof DOMException && t.name === "AbortError") && Y(t);
			}
		}
	}
	function Y(e) {
		C.current?.pause();
		let t = e instanceof Error ? e : /* @__PURE__ */ Error("Unable to load or play audio.");
		A(t.message), O(!1), D(!1), f?.(t);
	}
	function X(e) {
		let t = C.current;
		if (!t || !Number.isFinite(e) || k) return;
		if (!w.current) {
			let n = T.current === null && u === "none";
			T.current = e, n && (t.preload = "metadata", t.load());
			return;
		}
		let n = t.duration;
		if (!Number.isFinite(n) || n <= 0) return;
		let r = Math.min(n, Math.max(0, e));
		try {
			t.currentTime = r, P(r), d?.(r);
		} catch (e) {
			Y(e);
		}
	}
	n(x, () => ({ seekTo: X }));
	function Z() {
		let e = C.current?.duration;
		M(e && Number.isFinite(e) && e > 0 ? e : 0), O(!1);
	}
	function ae(e) {
		if (v && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === " " || e.key.toLowerCase() === "k")) {
			e.preventDefault(), e.repeat || J();
			return;
		}
		let t = {
			ArrowRight: 5,
			ArrowUp: 5,
			ArrowLeft: -5,
			ArrowDown: -5,
			PageUp: 30,
			PageDown: -30
		}, n = e.key === "Home" ? 0 : e.key === "End" ? j : t[e.key] === void 0 ? void 0 : N + t[e.key];
		n !== void 0 && (e.preventDefault(), X(n));
	}
	let Q = l(N, G), $ = l(j, G);
	function oe(e) {
		switch (e) {
			case "skipBack":
			case "skipForward": {
				let t = e === "skipForward";
				return /* @__PURE__ */ a("button", {
					type: "button",
					className: "ui-audio-icon-btn ui-audio-skip",
					"aria-label": `${t ? "Forward" : "Back"} ${W} seconds`,
					disabled: V,
					onClick: () => X(N + (t ? W : -W)),
					children: /* @__PURE__ */ a(ee, {
						forward: t,
						seconds: W,
						size: b === "glass" ? 18 : 24
					})
				}, e);
			}
			case "play": return /* @__PURE__ */ a("button", {
				type: "button",
				className: "ui-audio-play",
				"aria-label": E ? "Pause" : "Play",
				disabled: !!k || !t,
				onClick: J,
				children: E ? K.pause : K.play
			}, e);
			case "time": return /* @__PURE__ */ o("span", {
				className: "ui-audio-clock ui-audio-time",
				children: [
					Q,
					" / ",
					$
				]
			}, e);
			case "currentTime": return /* @__PURE__ */ a("span", {
				className: "ui-audio-clock",
				children: Q
			}, e);
			case "duration": return /* @__PURE__ */ a("span", {
				className: "ui-audio-clock",
				children: $
			}, e);
			case "progress": return /* @__PURE__ */ a("div", {
				className: "ui-audio-progress",
				children: /* @__PURE__ */ o("div", {
					className: "ui-audio-track",
					children: [
						/* @__PURE__ */ a("input", {
							type: "range",
							className: "ui-audio-seek",
							"aria-label": "Seek",
							"aria-valuetext": `${Q} of ${$}`,
							min: 0,
							max: j,
							step: "any",
							value: N,
							disabled: V,
							onChange: (e) => X(Number(e.target.value)),
							onKeyDown: ae
						}),
						/* @__PURE__ */ a("div", {
							className: "ui-audio-fill",
							"aria-hidden": "true",
							style: { width: `${H}%` }
						}),
						/* @__PURE__ */ a("div", {
							className: "ui-audio-thumb",
							"aria-hidden": "true",
							style: { left: `calc(${H}% - var(--ui-audio-thumb) / 2)` }
						})
					]
				})
			}, e);
			case "speed": return /* @__PURE__ */ a("div", {
				className: "ui-audio-select",
				children: /* @__PURE__ */ a("select", {
					"aria-label": "Playback speed",
					value: String(z),
					disabled: !!k,
					onChange: (e) => {
						let t = Number(e.target.value);
						try {
							C.current && (C.current.playbackRate = t), ie(t);
						} catch {
							e.target.value = String(z);
						}
					},
					children: B.map((e) => /* @__PURE__ */ a("option", {
						value: String(e),
						children: `${e}x`
					}, e))
				})
			}, e);
			case "mute":
			case "volume": {
				let n = /* @__PURE__ */ a("button", {
					type: "button",
					className: "ui-audio-icon-btn",
					"aria-label": F ? "Unmute" : "Mute",
					"aria-pressed": F,
					disabled: !!k || !t,
					onClick: () => {
						let e = C.current;
						e && (e.muted = !e.muted, I(e.muted));
					},
					children: F ? K.muted : K.volume
				}, "toggle");
				return e === "mute" ? /* @__PURE__ */ a("span", {
					className: "ui-audio-mute",
					children: n
				}, e) : /* @__PURE__ */ o("div", {
					className: "ui-audio-volume",
					children: [n, /* @__PURE__ */ a("div", {
						className: "ui-audio-volume-popup",
						children: /* @__PURE__ */ a("input", {
							className: "ui-audio-volume-slider",
							type: "range",
							min: 0,
							max: 1,
							step: .05,
							value: L,
							"aria-label": "Volume",
							"aria-valuetext": `${Math.round(L * 100)}%`,
							disabled: !!k || !t,
							onChange: (e) => {
								let t = C.current;
								if (!t) return;
								let n = Number(e.target.value);
								t.volume = n, n > 0 && t.muted && (t.muted = !1), R(t.volume), I(t.muted);
							}
						})
					})]
				}, e);
			}
			case "download": return p ? /* @__PURE__ */ a("a", {
				href: p,
				download: m ?? "",
				className: "ui-audio-icon-btn",
				"aria-label": "Download recording",
				title: "Download recording",
				children: K.download
			}, e) : null;
		}
	}
	return /* @__PURE__ */ o("div", {
		...S,
		role: "group",
		"aria-label": s,
		className: e("ui-audio", h === "card" && "ui-audio-card", b === "glass" ? "ui-audio-glass" : "ui-audio-pill", te),
		children: [
			h === "card" && /* @__PURE__ */ a("p", {
				className: "ui-audio-title",
				children: s
			}),
			/* @__PURE__ */ a("audio", {
				ref: C,
				src: t,
				preload: u,
				onLoadStart: () => {
					O(!0), A(void 0);
				},
				onLoadedMetadata: () => {
					w.current = !0, Z();
					let e = T.current;
					T.current = null, e !== null && X(e);
				},
				onDurationChange: Z,
				onCanPlay: () => O(!1),
				onSuspend: () => O(!1),
				onWaiting: () => O(!0),
				onPlaying: () => {
					D(!0), O(!1);
				},
				onVolumeChange: (e) => {
					I(e.currentTarget.muted), R(e.currentTarget.volume);
				},
				onPause: () => D(!1),
				onEnded: () => D(!1),
				onError: () => Y(/* @__PURE__ */ Error("Unable to load audio recording.")),
				onTimeUpdate: (e) => {
					let t = e.currentTarget.currentTime;
					P(t), d?.(t);
				}
			}),
			/* @__PURE__ */ a("div", {
				className: "ui-audio-row",
				children: q.map((e) => oe(e))
			}),
			k ? /* @__PURE__ */ a("p", {
				role: "alert",
				className: "ui-audio-error",
				children: k
			}) : re ? /* @__PURE__ */ o("p", {
				role: "status",
				className: "ui-audio-status",
				children: [/* @__PURE__ */ a("span", {
					className: "ui-audio-spinner",
					"aria-hidden": "true"
				}), "Loading audio…"]
			}) : null
		]
	});
}
//#endregion
export { u as AudioPlayer };
