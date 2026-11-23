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

### Per-theme stylesheets

To load selected themes, import the core sheet first. It includes the default
dark theme. Add one stylesheet for each additional theme your app offers.

```tsx
import "@leonardaustin/ui/core.css";
import "@leonardaustin/ui/themes/light.css";
import "@leonardaustin/ui/themes/glass-dark.css";
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

## Components

### App shell & navigation

| Component                           | Purpose                                                            |
| ----------------------------------- | ------------------------------------------------------------------ |
| `SettingsProvider`, `ThemeProvider` | Provide application appearance preferences and the resolved theme. |
| `AppShell`                          | Wrap an application in responsive navigation and content chrome.   |
| `AuthLayout`                        | Centre and frame sign-in or registration screens.                  |
| `BackLink`                          | Link to the parent view.                                           |
| `BottomNav`                         | Show primary navigation at the bottom of mobile screens.           |
| `Breadcrumbs`                       | Show the current page’s location in a hierarchy.                   |
| `CommandPalette`                    | Search and invoke application commands from the keyboard.          |
| `ListItemLink`                      | Render a link as a structured list row.                            |
| `MobileDrawer`                      | Show navigation in a mobile overlay.                               |
| `Sidebar`                           | Show desktop navigation, account and settings controls.            |
| `ThemeMenu`                         | Change appearance, theme and accent settings.                      |
| `TopBar`                            | Show navigation and actions across the top of the app.             |

### Buttons & display

| Component          | Purpose                                                            |
| ------------------ | ------------------------------------------------------------------ |
| `Accordion`        | Group related expandable sections.                                 |
| `AudioPlayer`      | Play and seek through audio recordings.                            |
| `AuthorByline`     | Show an author’s name, avatar and metadata.                        |
| `Avatar`           | Represent a person with an image or initials.                      |
| `Badge`            | Show compact labels and status.                                    |
| `Button`           | Trigger an action with a themed button.                            |
| `Card`             | Group content in a surface with optional button or link behaviour. |
| `CopyButton`       | Copy text and announce the result.                                 |
| `Disclosure`       | Toggle a section of supporting content.                            |
| `DividerLabel`     | Separate sections with a centred label.                            |
| `Grid`, `GridItem` | Arrange responsive columns and spans.                              |
| `Inline`           | Arrange items horizontally with optional wrapping.                 |
| `Kbd`              | Display a keyboard key or shortcut.                                |
| `LoadingSpinner`   | Indicate an ongoing operation.                                     |
| `MessageBubble`    | Show incoming and outgoing conversation messages.                  |
| `MetadataGrid`     | Show labelled values in a grid.                                    |
| `MetricCard`       | Highlight a metric and its context.                                |
| `PageHeader`       | Display a page title, description and actions.                     |
| `PageSection`      | Group page content under a heading.                                |
| `ProfileHeader`    | Display identity, metadata and actions for a profile.              |
| `ProseContent`     | Theme long-form content and rich text.                             |
| `OverlineLabel`    | Add a compact heading above a group.                               |
| `QrCode`           | Render a QR code from text.                                        |
| `SectionHeader`    | Label a section with an optional icon and actions.                 |
| `Stack`            | Arrange items vertically with consistent spacing.                  |
| `StatusDot`        | Display a compact visual status indicator.                         |
| `StepProgress`     | Show progress through ordered steps.                               |
| `Tabs`, `NavTabs`  | Switch panels or navigate between related routes.                  |
| `ThemePreview`     | Preview the palette of a theme.                                    |
| `Timeline`         | Display a chronological sequence of events.                        |
| `TranscriptLine`   | Display a speaker’s line with an optional seek control.            |

### Forms & inputs

| Component                               | Purpose                                                        |
| --------------------------------------- | -------------------------------------------------------------- |
| `ControlSizeProvider`, `useControlSize` | Provide and read the inherited control density.                |
| `CharacterCount`                        | Display text length against a limit.                           |
| `AttachmentList`, `AttachmentItem`      | List attachments with metadata, status and actions.            |
| `CalendarGrid`                          | Display dates in a selectable month grid.                      |
| `Checkbox`                              | Toggle a boolean form value.                                   |
| `CodeInput`                             | Enter a one-time verification code.                            |
| `Combobox`                              | Search and choose from options in an anchored popup.           |
| `DatePartsInput`                        | Enter the day, month and year in separate fields.              |
| `DatePicker`                            | Choose a single date.                                          |
| `DateRangePicker`                       | Choose a start and end date.                                   |
| `DateTimePicker`                        | Choose a date and time together.                               |
| `Fieldset`                              | Group related inputs under a legend.                           |
| `FilterButton`                          | Show and toggle the active state of a filter.                  |
| `FilterDropdown`                        | Open a menu for choosing filter values.                        |
| `FormField`, `FieldHint`, `FieldError`  | Associate controls with labels, hints and validation messages. |
| `OAuthButton`                           | Start sign-in with an identity provider.                       |
| `PasswordInput`                         | Enter a password with a visibility toggle.                     |
| `PasswordRequirements`                  | Show password rules and completion status.                     |
| `Radio`, `Radio.Group`                  | Select one option from a labelled group.                       |
| `RadioPill`                             | Select one option with a segmented control.                    |
| `ReorderList`                           | Move items up or down in a controlled list.                    |
| `SearchInput`                           | Enter and clear a search query.                                |
| `Select`                                | Choose an option with a native select.                         |
| `SelectDropdown`                        | Choose an option with a themed popup.                          |
| `SettingRow`                            | Pair a setting’s label and description with its control.       |
| `Slider`                                | Adjust a numeric value within a range.                         |
| `Textarea`                              | Enter multi-line text.                                         |
| `TextInput`                             | Enter single-line text with a label, hint or error.            |
| `TimeInput`                             | Enter a native time value.                                     |
| `Toggle`                                | Switch a setting on or off.                                    |
| `UploadDropzone`                        | Choose files with a picker or drag and drop.                   |

### Feedback & overlays

| Component                   | Purpose                                                  |
| --------------------------- | -------------------------------------------------------- |
| `Skeleton`                  | Reserve space with a loading placeholder.                |
| `ProgressBar`               | Show progress toward a known total.                      |
| `Alert`                     | Display a contextual notice.                             |
| `AuthCard`                  | Frame an authentication form and supporting links.       |
| `DangerZone`                | Group destructive actions in a clearly labelled section. |
| `DetailPanel`               | Show details in a panel beside the current view.         |
| `Dialog`, `DialogActions`   | Open a modal and present its actions.                    |
| `DropdownMenu`              | Open an anchored menu of actions or links.               |
| `EmptyState`                | Explain an empty view and offer an action.               |
| `ErrorBoundary`             | Show a fallback after a render error.                    |
| `Popover`                   | Open a non-modal dialog beside its trigger.              |
| `SideSheet`                 | Show a panel that slides in from the side.               |
| `SplitPaneLayout`           | Lay out independent full-height scroll areas.            |
| `ToastProvider`, `useToast` | Provide and trigger transient notifications.             |
| `Toolbar`                   | Arrange actions and filters above content.               |
| `Tooltip`                   | Show contextual information about a control.             |

### Tables & data

| Component                                                                                      | Purpose                                                     |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `Calendar`                                                                                     | Display and edit events and availability in calendar views. |
| `ColumnPicker`                                                                                 | Control which table columns are visible.                    |
| `Pagination`                                                                                   | Navigate between pages of results.                          |
| `PaginationBar`                                                                                | Combine paging, result count and page-size selection.       |
| `ResourceTable`                                                                                | Display typed rows with sorting and selection controls.     |
| `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell`, `TableEmptyRow` | Compose a styled semantic table.                            |

### Charts

| Component          | Purpose                                               |
| ------------------ | ----------------------------------------------------- |
| `AreaChart`        | Show how values change across a continuous series.    |
| `BarChart`         | Compare values across categories.                     |
| `DonutChart`       | Show parts of a whole in a ring.                      |
| `RadarChart`       | Compare values across several axes.                   |
| `RadialBarChart`   | Show values as concentric arcs.                       |
| `SparkLine`        | Show a compact trend without axes.                    |
| `StackedBarChart`  | Compare totals and their breakdown across categories. |
| `VerticalBarChart` | Compare values using vertical bars.                   |

### Hooks & providers

| Component                                          | Purpose                                                          |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| `useTheme`, `useApplyTheme`, `useSettings`         | Read and change the active theme and its settings.               |
| `useAnchoredPopup`, `usePopover`                   | Position an anchored popup or manage its trigger and open state. |
| `useDismiss`, `useFocusTrap`, `usePortalContainer` | Coordinate overlay dismissal, focus and portal placement.        |

### Sizes

Visual sizes follow the scale `xs`, `sm`, `md`, `lg`, `xl` from smallest to
largest. Each component supports a subset. `controlSize` is the separate
`compact` or `comfortable` density setting for interactive controls.

### TypeScript

Import `ButtonVariant`, `ButtonSize`, and `SplitPaneLayoutMainProps` from
`@leonardaustin/ui` to type button options and props for `SplitPaneLayout.Main`.

## Themes

Use a React value with `SettingsProvider` or apply the CSS classes to a theme
root when using the stylesheet directly.

| Theme              | React value        | CSS classes                        |
| ------------------ | ------------------ | ---------------------------------- |
| Dark               | `dark`             | None (uses `:root`)                |
| Light              | `light`            | `theme-light`                      |
| Light Inverted     | `lightInverted`    | `theme-light-inverted`             |
| Monokai            | `monokai`          | `theme-monokai`                    |
| Solarized          | `solarized`        | `theme-solarized`                  |
| Cyber Brutal Dark  | `cyberBrutalDark`  | `theme-cyber-brutal-dark`          |
| Cyber Brutal Light | `cyberBrutalLight` | `theme-cyber-brutal-light`         |
| HashiTheme         | `hashiTheme`       | `theme-hashi`                      |
| Glass Dark         | `glassDark`        | `theme-glass`, `theme-glass-dark`  |
| Glass Light        | `glassLight`       | `theme-glass`, `theme-glass-light` |
