import { cn as e } from "../../../lib/cn.js";
import { formatTimeRange as t, resourceIdsOf as n } from "../../../lib/calendar.js";
import { useCalendarContext as r } from "./context.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/ui/calendar/AgendaView.tsx
function o({ days: t, events: o, availability: l, label: u }) {
	let d = r(), { daySegment: f, eventsOnDay: p, getFormatter: m, isAllDayLike: h, isSameDay: g, toDateKey: _ } = d.dates, v = m(d.locale, {
		weekday: "long",
		day: "numeric",
		month: "long"
	}), y = (e) => n(e).map((e) => d.resourceById.get(e)?.title).filter(Boolean).join(", ");
	return /* @__PURE__ */ i("div", {
		className: "ui-cal-scroll min-h-0 flex-1 overflow-y-auto",
		"aria-label": u,
		role: "region",
		children: t.map((t) => {
			let n = p(o, t).map((e) => ({
				type: "event",
				value: e
			}));
			if (d.agendaShowAvailability) {
				for (let e of l) f(e.start, e.end, t) && n.push({
					type: "availability",
					value: e
				});
				n.sort((e, t) => {
					let n = Number(e.type === "event" && h(e.value)) - Number(t.type === "event" && h(t.value));
					return n ? -n : e.value.start.getTime() - t.value.start.getTime() || (e.type === "availability" ? -1 : 1);
				});
			}
			let r = g(t, d.now);
			return /* @__PURE__ */ a("section", {
				"aria-label": v.format(t),
				children: [/* @__PURE__ */ i("h3", {
					className: e("ui-cal-agenda-day border-border border-b px-3 py-1.5 text-xs font-semibold", r ? "text-accent-fg" : "text-text-primary"),
					children: /* @__PURE__ */ i("button", {
						type: "button",
						className: "cursor-pointer hover:underline",
						onClick: () => d.openDay(t),
						"aria-current": r ? "date" : void 0,
						children: v.format(t)
					})
				}), n.length === 0 ? /* @__PURE__ */ i("p", {
					className: "text-text-tertiary border-border border-b px-3 py-2 text-xs",
					children: d.labels.noEvents
				}) : /* @__PURE__ */ i("ul", {
					className: "divide-border divide-y border-border border-b",
					children: n.map((e) => /* @__PURE__ */ i("li", { children: e.type === "event" ? /* @__PURE__ */ i(s, {
						event: e.value,
						resources: y(e.value.resourceId)
					}) : /* @__PURE__ */ i(c, {
						block: e.value,
						resources: y(e.value.resourceId)
					}) }, `${e.type}:${e.value.id}`))
				})]
			}, _(t));
		})
	});
}
function s({ event: n, resources: o }) {
	let s = r(), { isAllDayLike: c } = s.dates, l = s.statusLabel(n), u = c(n) ? s.labels.allDay : t(n.start, n.end, s);
	return /* @__PURE__ */ a("div", {
		role: "button",
		tabIndex: 0,
		"aria-label": s.describeEvent(n),
		"data-status": n.status ?? "confirmed",
		className: e("ui-cal-agenda-row hover:bg-bg-hover flex cursor-pointer items-start gap-3 px-3 py-2 transition-colors duration-[100ms]", `ui-cal-c-${s.eventColor(n)}`),
		onClick: () => s.clickEvent(n),
		onKeyDown: (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), s.clickEvent(n));
		},
		children: [
			/* @__PURE__ */ i("span", {
				className: "text-text-secondary font-mono w-24 shrink-0 text-xs",
				children: u
			}),
			/* @__PURE__ */ i("span", {
				className: "ui-cal-dot mt-1",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ a("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ i("span", {
					className: "ui-cal-title block text-xs",
					children: n.title
				}), n.description && /* @__PURE__ */ i("span", {
					className: "ui-cal-meta block text-2xs",
					children: n.description
				})]
			}),
			o && /* @__PURE__ */ i("span", {
				className: "text-text-tertiary hidden max-w-40 truncate text-2xs sm:block",
				children: o
			}),
			(l || n.badge) && /* @__PURE__ */ a("span", {
				className: "flex shrink-0 gap-1",
				children: [l && /* @__PURE__ */ i("span", {
					className: "ui-cal-badge",
					children: l
				}), n.badge && /* @__PURE__ */ i("span", {
					className: "ui-cal-badge",
					children: n.badge
				})]
			})
		]
	});
}
function c({ block: n, resources: o }) {
	let s = r(), c = n.kind ?? "available", l = c === "available" ? s.labels.available : s.labels.unavailable, u = s.hasBlockClick;
	return /* @__PURE__ */ a("div", {
		role: u ? "button" : void 0,
		tabIndex: u ? 0 : void 0,
		"aria-label": s.describeBlock(n),
		className: e("text-text-tertiary flex items-start gap-3 px-3 py-1.5 text-2xs", u && "hover:bg-bg-hover cursor-pointer transition-colors duration-[100ms]", `ui-cal-c-${s.blockColor(n)}`),
		onClick: u ? () => s.clickBlock(n) : void 0,
		onKeyDown: u ? (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), s.clickBlock(n));
		} : void 0,
		children: [
			/* @__PURE__ */ i("span", {
				className: "font-mono w-24 shrink-0",
				children: t(n.start, n.end, s)
			}),
			/* @__PURE__ */ i("span", {
				className: e("ui-cal-agenda-swatch mt-0.5", c === "unavailable" && "ui-cal-agenda-swatch-off"),
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ a("span", {
				className: "min-w-0 flex-1 truncate",
				children: [l, n.label ? ` · ${n.label}` : ""]
			}),
			o && /* @__PURE__ */ i("span", {
				className: "hidden max-w-40 truncate sm:block",
				children: o
			})
		]
	});
}
//#endregion
export { o as AgendaView };
