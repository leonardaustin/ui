# @leonardaustin/ui

Reusable React components, application shell, charts, tables, form controls, and
theme tooling for Leonard Austin projects.

This repository is a pnpm workspace:

```text
packages/ui   # @leonardaustin/ui component library
apps/demo     # Vite demo app consuming the package via workspace:*
```

## Install

```bash
pnpm add @leonardaustin/ui react react-dom lucide-react
```

Import the bundled stylesheet once in your app entry:

```tsx
import "@leonardaustin/ui/styles.css";
```

The library uses CSS custom properties for colours, typography, spacing,
radius, density, and motion, so theme functionality continues to work in
consumer apps.

## Basic Setup

Wrap your app with the settings and theme providers:

```tsx
import {
  SettingsProvider,
  ThemeProvider,
  ToastProvider,
} from "@leonardaustin/ui";

export function Root() {
  return (
    <SettingsProvider storageKey="my-app-settings">
      <ThemeProvider>
        <ToastProvider>{/* routes */}</ToastProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}
```

Use components directly from the package entry point:

```tsx
import { Button, Card, PageHeader, TextInput } from "@leonardaustin/ui";
```

## App Shell

`AppShell` is router-agnostic. It renders normal anchors by default and accepts
`currentPath` plus `onNavigate` when a project wants single-page navigation.

React Router example:

```tsx
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { AppShell } from "@leonardaustin/ui";

export function Shell() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppShell
      navSections={navSections}
      bottomNavItems={bottomNavItems}
      commandItems={allNavItems}
      brand={{ name: "Dashboard", icon: LayoutDashboard }}
      accounts={accounts}
      currentPath={location.pathname}
      onNavigate={navigate}
      settingsPath="/settings"
      signOutPath="/login"
    >
      <Outlet />
    </AppShell>
  );
}
```

The package does not depend on `react-router-dom`; the demo app uses it only as
one possible adapter.

## Component Surface

The package exports reusable primitives for:

- App frame: `AppShell`, `AuthLayout`, `TopBar`, `Sidebar`, `BottomNav`,
  `CommandPalette`, `BackLink`, `Breadcrumbs`.
- Page structure: `PageHeader`, `PageSection`, `Toolbar`, `Card`,
  `DetailPanel`, `SideSheet`, `Dialog`, `EmptyState`, `ProseContent`.
- Auth: `AuthCard`, `OAuthButton`, `DividerLabel`.
- Forms: `TextInput`, `PasswordInput`, `Textarea`, `Select`,
  `SelectDropdown`, `Combobox`, `Checkbox`, `Toggle`, `RadioPill`, `Slider`,
  `DatePicker`, `DateTimePicker`, `DateRangePicker`, `UploadDropzone`.
- Data display: `ResourceTable`, `Pagination`, `PaginationBar`,
  `ColumnPicker`, `MetadataGrid`, `MetricCard`, `Timeline`, `Badge`,
  `StatusDot`, `Avatar`, `ProfileHeader`, `AuthorByline`.
- Charts: `AreaChart`, `BarChart`, `DonutChart`, `RadarChart`,
  `RadialBarChart`, `SparkLine`, `VerticalBarChart`.
- Theme controls: `SettingsProvider`, `ThemeProvider`, `useSettings`,
  `useTheme`, `useApplyTheme`, `ThemePreview`, exported theme config.

## Development

```bash
pnpm install
make dev      # run the demo on 0.0.0.0
pnpm dev      # run the demo app
pnpm lint     # ESLint and CSS utility coverage checks
pnpm build    # build the UI package, then the demo app
pnpm format   # run Prettier
```

The package build emits `dist/index.js`, TypeScript declarations, and
`dist/styles.css`.

## Publishing

Before publishing a release:

```bash
pnpm lint
pnpm build
pnpm --filter @leonardaustin/ui pack --pack-destination /tmp/ui-pack
```

Then publish from `packages/ui` with npm provenance or your chosen release
workflow.
