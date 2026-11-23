import { cn as e } from "../../lib/cn.js";
import { Button as t } from "./Button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/AttachmentList.tsx
var i = {
	pending: "Pending",
	uploading: "Uploading",
	processing: "Processing",
	ready: "Ready",
	error: "Upload failed"
};
function a(e) {
	return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
function o({ name: o, size: s, status: c = "ready", statusLabel: l, error: u, onRetry: d, onRemove: f, onDownload: p, downloadHref: m, actionsDisabled: h, className: g, ref: _, ...v }) {
	return /* @__PURE__ */ r("li", {
		ref: _,
		...v,
		className: e("ui-attachment-item border-border flex items-center justify-between gap-3 rounded-md border p-3", g),
		children: [/* @__PURE__ */ r("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ n("p", {
					className: "text-text-primary text-xs",
					children: o
				}),
				s !== void 0 && /* @__PURE__ */ n("p", {
					className: "text-text-tertiary text-2xs",
					children: a(s)
				}),
				/* @__PURE__ */ r("div", {
					role: "status",
					"aria-atomic": "true",
					className: e("text-2xs", c === "error" ? "text-danger-fg" : "text-text-secondary"),
					children: [
						o,
						": ",
						u ?? l ?? i[c]
					]
				})
			]
		}), /* @__PURE__ */ r("div", {
			className: "flex items-center gap-1.5",
			children: [
				d && /* @__PURE__ */ n(t, {
					type: "button",
					size: "sm",
					disabled: h,
					onClick: d,
					"aria-label": `Retry ${o}`,
					children: "Retry"
				}),
				m && !h && /* @__PURE__ */ n("a", {
					href: m,
					download: !0,
					"aria-label": `Download ${o}`,
					className: "text-accent-fg text-xs",
					children: "Download"
				}),
				p && /* @__PURE__ */ n(t, {
					type: "button",
					size: "sm",
					disabled: h,
					onClick: p,
					"aria-label": `Download ${o}`,
					children: "Download"
				}),
				f && /* @__PURE__ */ n(t, {
					type: "button",
					size: "sm",
					disabled: h,
					onClick: f,
					"aria-label": `Remove ${o}`,
					children: "Remove"
				})
			]
		})]
	});
}
function s({ children: t, className: r, ref: i, "aria-label": a = "Attachments", ...o }) {
	return /* @__PURE__ */ n("ul", {
		ref: i,
		...o,
		"aria-label": a,
		className: e("space-y-2", r),
		children: t
	});
}
//#endregion
export { o as AttachmentItem, s as AttachmentList };
