# AGENTS.md

## Build & Lint

```bash
make dev          # Vite demo server on 0.0.0.0
pnpm dev          # Vite demo server
pnpm build        # Build @leonardaustin/ui, then the demo app
pnpm lint         # ESLint and CSS utility coverage checks
pnpm format       # Prettier
pnpm format:check # Prettier check
```

## Strict Lint Rules

The ESLint config (react-hooks v7) is unusually strict:

- **No `Date.now()` in render or event handlers** defined inside components. Move impure calls to functions defined outside the component, or into `setInterval`/subscription callbacks.
- **No synchronous `setState` in `useEffect` bodies.** Use subscription callbacks (e.g. `MutationObserver`, `setInterval`) or refs instead.
- **No unused destructured vars.** Use `delete` on a spread copy instead of `const { key: _unused, ...rest }` patterns.
- **Pages must be `export function`**, not `export const` (react-refresh requirement).

## Page Conventions

### Layout

- **Standard pages**: root element is `<div className="max-w-2xl space-y-6">`. No extra padding — AppShell provides `p-4 md:p-6`.
- **Full-height pages** (tables, inbox, logs): use `<SplitPaneLayout direction="column">` with `<SplitPaneLayout.Main className="space-y-4 overflow-y-auto p-4 md:p-6">`. This breaks out of AppShell padding and fills the viewport.
- **No "Back to X" links** on new demo pages. BackLink is only for detail/edit pages reached from a parent list (e.g. EditUser -> Tables, BlogArticle -> Blog).

### Routing

- All pages are lazy-loaded: `const Page = lazy(() => import("./pages/Page").then((m) => ({ default: m.Page })))`.
- Static routes before dynamic: `/blog/new` must come before `/blog/:postId`.
- Add new demo pages to `apps/demo/src/config/navigation.ts` (sidebar) and `apps/demo/src/App.tsx` (route).

### Toolbar Pattern

Use the exported `Toolbar` component for the standard left/right toolbar
layout.

- Search inputs: `max-w-xs flex-1`.
- Always use `FilterDropdown` for filter buttons (not custom dropdowns).
- Use `Button` with `icon` prop + `hideLabel` for toolbar actions — never inline SVGs.

## Component Rules

- **`rounded-md` not `rounded-full`** on badges, pills, progress bars, and any element that should respect the theme radius setting. `rounded-full` is only for avatars, status dots, toggle knobs, and circular indicators.
- **`transition-none`** on table row hover states to prevent paint jank.
- **`interactive: true`** on table columns containing buttons/dropdowns (prevents `onRowClick` from firing).
- **Paginated tables must use controlled sorting.** Never let `ResourceTable` sort a page slice — sort the FULL dataset with `sortRows()` before slicing, and pass `sortKey`/`sortDir`/`onSortChange` (see Tables.tsx). Uncontrolled (internal) sort is only for unpaginated data.
- **Use `useToast()` in event handlers only**, never in effects or render.

## Styling

- Text sizes: `text-sm` (titles), `text-xs` (body/labels), `text-2xs` (metadata/badges), `text-body` (blog excerpts).
- Transitions: `duration-[100ms]` for all hover/focus states.
- Colors: always use semantic vars (`text-text-primary`, `bg-bg-secondary`, `border-border`) — never hardcoded hex or utility color classes like `text-blue-500`.
- Font: `font-mono` for code, timestamps, technical text. Default font handled by CSS vars.
- This project has no Tailwind dependency. Utilities are checked in at `packages/ui/src/generated-utilities.css` and imported by `packages/ui/src/styles.css`.
- `pnpm lint` runs `scripts/check-css-coverage.mjs`; if a new static class is missing from generated CSS, add the utility intentionally rather than reintroducing Tailwind.
- Use `cn()` from `packages/ui/src/lib/cn.ts` for conditional class names. Keep its merge rules current when adding new utility families; side-specific border color classes such as `border-l-red` must not replace the base `border-border` card border.

## Data

Mock demo data lives in `apps/demo/src/data/`. Each file exports typed arrays and a generator function if streaming is needed (e.g. `logs.ts` exports `initialLogs` + `generateLogEntry()`).

## Import Order

1. React / React Router
2. Lucide icons
3. Local components (`../components/`)
4. Local utils (`../lib/`, `../hooks/`)
5. Local data (`../data/`)

Prettier plugin auto-sorts on save.
