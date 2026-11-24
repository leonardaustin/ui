import { cn as e } from "../../lib/cn.js";
import { Button as t } from "./Button.js";
import { useLayoutEffect as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { ArrowDown as s, ArrowUp as c, Trash2 as l } from "lucide-react";
//#region src/components/ui/ReorderList.tsx
function u({ items: u, getKey: d, renderItem: f, onReorder: p, onRemove: m, canRemove: h, getItemLabel: g, addButton: _, disabled: v = !1, className: y, ref: b, ...x }) {
	let [S, C] = i(""), w = r(/* @__PURE__ */ new Map()), T = r(null), E = r(null);
	n(() => {
		let e = T.current;
		e && u[e.index] !== void 0 && d(u[e.index]) === e.key && (w.current.get(e.key)?.[e.direction]?.focus(), T.current = null);
		let t = E.current;
		if (!t || u.some((e) => d(e) === t.key)) return;
		let n = u[Math.min(t.index, u.length - 1)];
		if (n !== void 0) {
			let e = w.current.get(d(n));
			(e?.remove ?? e?.down ?? e?.up)?.focus();
		}
		E.current = null;
	}, [u, d]);
	function D(e, t) {
		let n = e + t;
		if (v || n < 0 || n >= u.length) return;
		let r = [...u];
		[r[e], r[n]] = [r[n], r[e]], T.current = {
			key: d(u[e]),
			index: n,
			direction: t === -1 ? "up" : "down"
		}, p(r), C(`${g(u[e])} moved to position ${n + 1} of ${u.length}`);
	}
	return /* @__PURE__ */ o("div", {
		ref: b,
		...x,
		className: e("space-y-3", y),
		children: [
			/* @__PURE__ */ a("ol", {
				role: "list",
				className: "space-y-3",
				children: u.map((n, r) => {
					let i = d(n), p = g(n);
					return /* @__PURE__ */ o("li", {
						className: "border-border space-y-3 rounded-md border p-3",
						children: [/* @__PURE__ */ o("div", {
							className: "flex items-center justify-end gap-1.5",
							children: [
								/* @__PURE__ */ a(t, {
									ref: (e) => {
										let t = w.current.get(i) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.up = e, t.up || t.down || t.remove ? w.current.set(i, t) : w.current.delete(i);
									},
									variant: "ghost",
									size: "sm",
									icon: c,
									"aria-label": `Move ${p} up`,
									disabled: v,
									"aria-disabled": r === 0 || v,
									className: e(r === 0 && "cursor-not-allowed opacity-40"),
									onClick: () => D(r, -1),
									children: "Up"
								}),
								/* @__PURE__ */ a(t, {
									ref: (e) => {
										let t = w.current.get(i) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.down = e, t.up || t.down || t.remove ? w.current.set(i, t) : w.current.delete(i);
									},
									variant: "ghost",
									size: "sm",
									icon: s,
									"aria-label": `Move ${p} down`,
									disabled: v,
									"aria-disabled": r === u.length - 1 || v,
									className: e(r === u.length - 1 && "cursor-not-allowed opacity-40"),
									onClick: () => D(r, 1),
									children: "Down"
								}),
								m && (h?.(n, r) ?? !0) && /* @__PURE__ */ a(t, {
									ref: (e) => {
										let t = w.current.get(i) ?? {
											up: null,
											down: null,
											remove: null
										};
										t.remove = e, t.up || t.down || t.remove ? w.current.set(i, t) : w.current.delete(i);
									},
									variant: "ghost",
									size: "sm",
									icon: l,
									"aria-label": `Remove ${p}`,
									disabled: v,
									onClick: () => {
										E.current = {
											key: i,
											index: r
										}, m(n, r), C(`${p} removed`);
									},
									children: "Remove"
								})
							]
						}), f(n, r)]
					}, i);
				})
			}),
			/* @__PURE__ */ a("div", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "true",
				className: "sr-only",
				children: S
			}),
			_
		]
	});
}
//#endregion
export { u as ReorderList };
