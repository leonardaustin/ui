import { cn as e } from "../../lib/cn.js";
import { useId as t, useImperativeHandle as n, useRef as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { UploadCloud as o } from "lucide-react";
//#region src/components/ui/UploadDropzone.tsx
function s({ title: s = "Drag and drop files here, or click to browse", description: c, icon: l, multiple: u, disabled: d, onChange: f, onFilesChange: p, className: m, id: h, "aria-describedby": g, ref: _, ...v }) {
	let y = r(null);
	n(_, () => y.current, []);
	let b = t(), x = `${h ?? b}-description`;
	return /* @__PURE__ */ a("label", {
		className: e("ui-upload-dropzone border-border hover:border-border-strong relative block rounded-md border-2 border-dashed p-8 text-center transition-colors duration-[100ms]", d ? "cursor-not-allowed opacity-60" : "cursor-pointer hover:bg-bg-hover", m),
		onDragOver: (e) => {
			e.preventDefault(), e.dataTransfer.dropEffect = d || y.current?.matches(":disabled") ? "none" : "copy";
		},
		onDrop: (e) => {
			e.preventDefault();
			let t = y.current;
			if (d || !t || t.matches(":disabled") || !e.dataTransfer.files.length) return;
			let n = new DataTransfer(), r = Array.from(e.dataTransfer.files);
			for (let e of u ? r : r.slice(0, 1)) n.items.add(e);
			t.files = n.files, p?.(t.files, e);
		},
		children: [
			/* @__PURE__ */ i("input", {
				...v,
				id: h,
				ref: y,
				type: "file",
				multiple: u,
				disabled: d,
				className: "sr-only",
				"aria-describedby": [g, c && x].filter(Boolean).join(" ") || void 0,
				onChange: (e) => {
					f?.(e), e.target.files && p?.(e.target.files, e);
				}
			}),
			/* @__PURE__ */ i("div", {
				"aria-hidden": "true",
				className: "text-text-tertiary mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-bg-tertiary",
				children: l ?? /* @__PURE__ */ i(o, { className: "h-4.5 w-4.5" })
			}),
			/* @__PURE__ */ i("span", {
				className: "text-text-secondary mb-1 block text-xs",
				children: s
			}),
			c && /* @__PURE__ */ i("span", {
				id: x,
				className: "text-2xs text-text-tertiary block",
				children: c
			})
		]
	});
}
//#endregion
export { s as UploadDropzone };
