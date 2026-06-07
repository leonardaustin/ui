import { useState } from "react";

import {
  accentItems,
  Button,
  cn,
  DangerZone,
  darkThemes,
  Dialog,
  DialogActions,
  fontOptions,
  lightThemes,
  PageHeader,
  SectionHeader,
  SelectDropdown,
  SettingRow,
  Slider,
  Tabs,
  TextInput,
  themeItems,
  ThemePreview,
  Toggle,
  useApplyTheme,
  useSettings,
  useToast,
} from "@leonardaustin/ui";

function FontSizeSlider({
  value,
  onCommit,
}: {
  value: number;
  onCommit: (v: number) => void;
}) {
  const [preview, setPreview] = useState(value);
  return (
    <div>
      <SectionHeader as="h3" border={false} className="mb-3">
        Font Size
      </SectionHeader>
      <Slider
        min={11}
        max={18}
        value={preview}
        onChange={setPreview}
        onCommit={onCommit}
        showValue
        className="max-w-xs"
      />
      <p
        className="text-text-secondary mt-2"
        style={{ fontSize: `${preview}px` }}
      >
        Preview at {preview}px — The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  );
}

function AppearanceTab() {
  const {
    accentColor,
    setAccentColor,
    fontSize,
    setFontSize,
    preferredDarkTheme,
    preferredLightTheme,
    uiFont,
    setUiFont,
    headingFont,
    setHeadingFont,
    proseFont,
    setProseFont,
    controlFont,
    setControlFont,
    labelFont,
    setLabelFont,
    navigationFont,
    setNavigationFont,
    dataFont,
    setDataFont,
    codeFont,
    setCodeFont,
    borderRadius,
    setBorderRadius,
    borderWidth,
    setBorderWidth,
    tracking,
    setTracking,
    lineHeight,
    setLineHeight,
    density,
    setDensity,
    saveThemeCustomization,
    resetThemeCustomization,
    hasThemeOverrides,
    isCustomized,
    resolvedTheme,
  } = useSettings();
  const applyTheme = useApplyTheme();
  const { toast } = useToast();
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Dark Themes
        </SectionHeader>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {darkThemes.map((t) => (
            <ThemePreview
              key={t.value}
              label={t.label}
              icon={t.icon}
              preview={t.preview}
              active={preferredDarkTheme === t.value}
              onClick={() => applyTheme(t.value)}
            />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Light Themes
        </SectionHeader>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {lightThemes.map((t) => (
            <ThemePreview
              key={t.value}
              label={t.label}
              icon={t.icon}
              preview={t.preview}
              active={preferredLightTheme === t.value}
              onClick={() => applyTheme(t.value)}
            />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Accent Colour
        </SectionHeader>
        <div className="flex flex-wrap gap-2">
          {accentItems.map((a) => (
            <button
              key={a.value}
              onClick={() => setAccentColor(a.value)}
              className={cn(
                "h-8 w-8 cursor-pointer rounded-full transition-transform duration-[100ms]",
                "hover:scale-110",
                "focus-visible:outline-2 focus-visible:outline-offset-2",
                accentColor === a.value &&
                  "ring-offset-bg-primary scale-110 ring-2 ring-offset-2",
              )}
              style={{
                backgroundColor: a.color,
                ...(accentColor === a.value
                  ? ({ "--utility-ring-color": a.color } as React.CSSProperties)
                  : {}),
              }}
              aria-label={a.value}
              title={a.value.charAt(0).toUpperCase() + a.value.slice(1)}
            />
          ))}
        </div>
      </div>

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Fonts
        </SectionHeader>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <SelectDropdown
            label="UI / Body"
            options={fontOptions}
            value={uiFont}
            onChange={(v) => setUiFont(v as typeof uiFont)}
          />
          <SelectDropdown
            label="Headings"
            options={fontOptions}
            value={headingFont}
            onChange={(v) => setHeadingFont(v as typeof headingFont)}
          />
          <SelectDropdown
            label="Prose"
            options={fontOptions}
            value={proseFont}
            onChange={(v) => setProseFont(v as typeof proseFont)}
          />
          <SelectDropdown
            label="Controls"
            options={fontOptions}
            value={controlFont}
            onChange={(v) => setControlFont(v as typeof controlFont)}
          />
          <SelectDropdown
            label="Labels / Meta"
            options={fontOptions}
            value={labelFont}
            onChange={(v) => setLabelFont(v as typeof labelFont)}
          />
          <SelectDropdown
            label="Navigation"
            options={fontOptions}
            value={navigationFont}
            onChange={(v) => setNavigationFont(v as typeof navigationFont)}
          />
          <SelectDropdown
            label="Data / Metrics"
            options={fontOptions}
            value={dataFont}
            onChange={(v) => setDataFont(v as typeof dataFont)}
          />
          <SelectDropdown
            label="Code / Kbd"
            options={fontOptions}
            value={codeFont}
            onChange={(v) => setCodeFont(v as typeof codeFont)}
          />
        </div>
      </div>

      <FontSizeSlider key={fontSize} value={fontSize} onCommit={setFontSize} />

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Corner Radius
        </SectionHeader>
        <Slider
          min={0}
          max={16}
          value={borderRadius}
          onChange={setBorderRadius}
          showValue
          className="max-w-xs"
        />
        <div className="mt-3 flex items-center gap-3">
          <div
            className="border-border bg-bg-secondary h-12 w-20 border"
            style={{ borderRadius: `${borderRadius}px` }}
          />
          <span className="text-text-tertiary text-xs">
            {borderRadius}px preview
          </span>
        </div>
      </div>

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Border Width
        </SectionHeader>
        <Slider
          min={1}
          max={3}
          value={borderWidth}
          onChange={setBorderWidth}
          showValue
          className="max-w-xs"
        />
      </div>

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Letter Spacing
        </SectionHeader>
        <Slider
          min={0}
          max={0.3}
          step={0.01}
          value={tracking}
          onChange={setTracking}
          showValue
          className="max-w-xs"
        />
      </div>

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Line Height
        </SectionHeader>
        <Slider
          min={1.2}
          max={2}
          step={0.05}
          value={lineHeight}
          onChange={setLineHeight}
          showValue
          className="max-w-xs"
        />
      </div>

      <div>
        <SectionHeader as="h3" border={false} className="mb-3">
          Density
        </SectionHeader>
        <Slider
          min={0.18}
          max={0.32}
          step={0.01}
          value={density}
          onChange={setDensity}
          showValue
          className="max-w-xs"
        />
        <p className="text-text-tertiary text-2xs mt-1.5">
          Controls spacing, padding, and gaps globally
        </p>
      </div>

      {/* Save / Reset for current theme */}
      <div className="border-border flex items-center gap-2 border-t pt-4">
        <Button
          variant="primary"
          size="sm"
          disabled={!isCustomized}
          onClick={() => {
            saveThemeCustomization();
            toast(
              "success",
              `Saved customization for ${themeItems.find((t) => t.value === resolvedTheme)?.label ?? resolvedTheme}`,
            );
          }}
        >
          Save for Theme
        </Button>
        <Button
          variant="secondary"
          size="sm"
          disabled={!hasThemeOverrides && !isCustomized}
          onClick={() => {
            resetThemeCustomization();
            toast("info", "Reset to theme defaults");
          }}
        >
          Reset to Default
        </Button>
        {isCustomized && (
          <span className="text-text-tertiary text-2xs">Unsaved changes</span>
        )}
        {!isCustomized && hasThemeOverrides && (
          <span className="text-text-tertiary text-2xs">Custom saved</span>
        )}
      </div>
    </div>
  );
}

function AccessibilityTab() {
  const { reducedMotion, setReducedMotion } = useSettings();
  const { toast } = useToast();

  return (
    <div className="max-w-xl space-y-6">
      {/* Each SettingRow renders a label + description on the left with a
          control on the right, separated by bottom borders for grouping. */}
      <SettingRow
        label="Reduced Motion"
        description="Disable animations and transitions"
        action={<Toggle checked={reducedMotion} onChange={setReducedMotion} />}
      />
      <SettingRow
        label="High Contrast"
        description="Increase border and text contrast"
        action={
          <Toggle
            checked={false}
            onChange={() => toast("info", "High contrast mode coming soon")}
          />
        }
      />
    </div>
  );
}

function AccountTab() {
  const { toast } = useToast();
  const [deleteOpen, setDeleteOpen] = useState(false);

  return (
    <div className="max-w-xl space-y-6">
      <div className="space-y-4">
        <TextInput label="Display Name" defaultValue="Jane Doe" />
        <TextInput
          label="Email"
          type="email"
          value="jane@example.com"
          disabled
        />
      </div>

      <Button
        variant="primary"
        onClick={() => toast("success", "Changes saved")}
      >
        Save Changes
      </Button>

      {/* DangerZone visually separates destructive actions from normal
          settings with a red heading and top border. */}
      <DangerZone description="Once you delete your account, there is no going back. Please be certain.">
        <Button variant="danger" onClick={() => setDeleteOpen(true)}>
          Delete Account
        </Button>
      </DangerZone>

      {/* Dialog accepts a `footer` prop so DialogActions sits at the
          natural footer position without nesting it inside children. */}
      <Dialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title="Delete Account"
        footer={
          <DialogActions
            onCancel={() => setDeleteOpen(false)}
            confirmLabel="Delete Account"
            confirmVariant="danger"
            onConfirm={() => {
              setDeleteOpen(false);
              toast("error", "Account deletion is disabled in demo");
            }}
          />
        }
      >
        <p className="text-text-secondary mb-4 text-xs">
          This will permanently delete your account and all associated data.
          This action cannot be undone.
        </p>
      </Dialog>
    </div>
  );
}

export function Settings() {
  return (
    <div className="space-y-4">
      {/* PageHeader provides a consistent top-of-page title bar.
          It supports an optional subtitle and right-aligned actions. */}
      <PageHeader title="Settings" />
      <Tabs
        tabs={[
          {
            key: "appearance",
            label: "Appearance",
            content: <AppearanceTab />,
          },
          {
            key: "accessibility",
            label: "Accessibility",
            content: <AccessibilityTab />,
          },
          { key: "account", label: "Account", content: <AccountTab /> },
        ]}
      />
    </div>
  );
}
