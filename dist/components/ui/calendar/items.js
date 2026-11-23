import { cn as e } from "../../../lib/cn.js";
import { formatTimeRange as t } from "../../../lib/calendar.js";
import { useCalendarContext as n } from "./context.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/ui/calendar/items.tsx
function o({ event: o, style: c, resizeEdge: l, compact: u, dense: d, continuesBefore: f, continuesAfter: p, dragging: m, onKeyDown: h, onClick: g }) {
	let _ = n(), v = _.canEditEvent(o), y = o.allDay ? _.labels.allDay : t(o.start, o.end, _), { display: b } = _, x = b.status ? _.statusLabel(o) : void 0, S = [b.time && y, x].filter(Boolean).join(" · "), C = !!o.placeholder, w = _.renderEvent?.(o, {
		view: _.view,
		compact: u,
		timeLabel: y,
		statusLabel: x
	});
	return /* @__PURE__ */ a("div", {
		role: C ? void 0 : "button",
		tabIndex: C ? void 0 : 0,
		"aria-hidden": C || void 0,
		"data-cal-item": C ? void 0 : "event",
		"data-cal-id": o.id,
		"data-status": o.status ?? "confirmed",
		"data-placeholder": C || void 0,
		"data-editable": v || void 0,
		"data-dragging": m || void 0,
		"data-continues-before": f || void 0,
		"data-continues-after": p || void 0,
		"aria-label": C ? void 0 : _.describeEvent(o),
		"aria-describedby": !C && (v || _.hasEventClick) ? _.itemHelpId : void 0,
		title: `${o.title}\n${y}${o.description ? `\n${o.description}` : ""}`,
		className: e("ui-cal-event", `ui-cal-c-${_.eventColor(o)}`),
		style: c,
		onKeyDown: C ? void 0 : h,
		onClick: C ? void 0 : g,
		children: [w ?? (d ? /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i("span", {
			className: "ui-cal-title",
			children: o.title
		}), S && /* @__PURE__ */ i("span", {
			className: "ui-cal-meta font-mono",
			children: S
		})] }) : /* @__PURE__ */ i(s, {
			event: o,
			compact: u,
			timeLabel: b.time ? y : void 0,
			statusLabel: x,
			description: b.description ? o.description : void 0,
			badge: b.badge ? o.badge : void 0
		})), l && v && !p && /* @__PURE__ */ i("div", {
			"data-cal-resize": !0,
			"data-edge": l,
			className: "ui-cal-resize",
			"aria-hidden": "true"
		})]
	});
}
function s({ event: e, compact: t, timeLabel: n, statusLabel: o, description: s, badge: c }) {
	return t ? /* @__PURE__ */ a("div", {
		className: "flex min-w-0 items-center gap-1",
		children: [/* @__PURE__ */ a("span", {
			className: "ui-cal-title min-w-0",
			children: [e.title, !e.allDay && n && /* @__PURE__ */ a("span", {
				className: "ui-cal-inline-time font-mono",
				children: [", ", n.split("–")[0]]
			})]
		}), o && /* @__PURE__ */ i("span", {
			className: "ui-cal-badge shrink-0",
			children: o
		})]
	}) : /* @__PURE__ */ a(r, { children: [
		/* @__PURE__ */ i("span", {
			className: "ui-cal-title",
			children: e.title
		}),
		n && /* @__PURE__ */ i("span", {
			className: "ui-cal-meta font-mono",
			children: n
		}),
		s && /* @__PURE__ */ i("span", {
			className: "ui-cal-meta",
			children: s
		}),
		(o || c) && /* @__PURE__ */ a("span", {
			className: "flex min-w-0 flex-wrap gap-1",
			children: [o && /* @__PURE__ */ i("span", {
				className: "ui-cal-badge",
				children: o
			}), c && /* @__PURE__ */ i("span", {
				className: "ui-cal-badge",
				children: c
			})]
		})
	] });
}
function c({ block: r, style: o, resizeEdge: s, continuesAfter: c, dragging: l, onKeyDown: u, onClick: d }) {
	let f = n(), p = f.editLayer === "availability", m = p && f.canEditBlock(r), h = r.kind ?? "available", g = r.label ?? (h === "available" ? f.labels.available : f.labels.unavailable), _ = p && !r.placeholder && (m || f.hasBlockClick);
	return h === "available" && !p && !f.display.availableBlocks ? null : /* @__PURE__ */ a("div", {
		role: _ ? "button" : void 0,
		tabIndex: _ ? 0 : void 0,
		"aria-label": _ ? f.describeBlock(r) : void 0,
		"aria-describedby": _ ? f.itemHelpId : void 0,
		"aria-hidden": _ ? void 0 : !0,
		"data-cal-item": _ ? "availability" : void 0,
		"data-cal-id": r.id,
		"data-kind": h,
		"data-placeholder": r.placeholder || void 0,
		"data-edit": p || void 0,
		"data-readonly": p && !m ? !0 : void 0,
		"data-dragging": l || void 0,
		className: e("ui-cal-avail", `ui-cal-c-${f.blockColor(r)}`),
		style: o,
		onKeyDown: _ ? u : void 0,
		onClick: _ ? d : void 0,
		children: [
			f.display.blockLabels && /* @__PURE__ */ i("span", {
				className: "block truncate font-medium",
				children: g
			}),
			p && f.display.time && /* @__PURE__ */ i("span", {
				className: "ui-cal-meta font-mono block",
				children: t(r.start, r.end, f)
			}),
			s && m && !c && /* @__PURE__ */ i("div", {
				"data-cal-resize": !0,
				"data-edge": s,
				className: "ui-cal-resize",
				"aria-hidden": "true"
			})
		]
	});
}
function l({ draft: e, invalid: r, style: o }) {
	let s = n(), c = e.target === "event" ? e.event.title : e.target === "availability" ? e.availability.label ?? s.labels.available : void 0;
	return /* @__PURE__ */ a("div", {
		className: "ui-cal-ghost",
		"data-invalid": r ? !0 : void 0,
		style: o,
		"aria-hidden": "true",
		children: [
			c && /* @__PURE__ */ i("div", {
				className: "ui-cal-title",
				children: c
			}),
			/* @__PURE__ */ i("div", {
				className: "font-mono",
				children: t(e.start, e.end, s)
			}),
			r && /* @__PURE__ */ i("div", {
				className: "text-danger-fg font-medium",
				children: r
			})
		]
	});
}
//#endregion
export { c as BlockBox, o as EventBox, l as Ghost };
