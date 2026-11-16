# @leonardaustin/ui

Reusable React components, application shell, charts, tables, form controls, and
theme tooling for Leonard Austin projects.

**Live demo & docs → [ui.leonardaustin.com](https://ui.leonardaustin.com)**

```bash
pnpm add @leonardaustin/ui react react-dom lucide-react
```

Import the stylesheet once:

```tsx
import "@leonardaustin/ui/styles.css";
```

Wrap applications with the providers when using the built-in theme controls:

```tsx
import {
  SettingsProvider,
  ThemeProvider,
  ToastProvider,
} from "@leonardaustin/ui";

export function Root() {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <ToastProvider>{/* app */}</ToastProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}
```

`AppShell` is router-agnostic. Pass `currentPath` and `onNavigate` from your
router when you want single-page navigation; otherwise links render as normal
anchors.

This repository contains only the built package. See
https://github.com/leonardaustin/ui for the full component list.
