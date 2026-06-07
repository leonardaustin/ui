import {
  RadioPill,
  SectionHeader,
  SelectDropdown,
  Toggle,
} from "@leonardaustin/ui";

interface StepPreferencesProps {
  emailNotifications: boolean;
  setEmailNotifications: (value: boolean) => void;
  autoDarkMode: boolean;
  setAutoDarkMode: (value: boolean) => void;
  defaultView: "dashboard" | "inbox" | "board";
  setDefaultView: (value: "dashboard" | "inbox" | "board") => void;
  timezone: string;
  setTimezone: (value: string) => void;
}

const timezoneOptions = [
  { value: "UTC", label: "UTC" },
  { value: "America/New_York", label: "America/New_York" },
  { value: "America/Los_Angeles", label: "America/Los_Angeles" },
  { value: "Europe/London", label: "Europe/London" },
  { value: "Europe/Berlin", label: "Europe/Berlin" },
  { value: "Asia/Tokyo", label: "Asia/Tokyo" },
  { value: "Asia/Shanghai", label: "Asia/Shanghai" },
  { value: "Australia/Sydney", label: "Australia/Sydney" },
];

const viewOptions = [
  { value: "dashboard" as const, label: "Dashboard" },
  { value: "inbox" as const, label: "Inbox" },
  { value: "board" as const, label: "Board" },
];

export function StepPreferences({
  emailNotifications,
  setEmailNotifications,
  autoDarkMode,
  setAutoDarkMode,
  defaultView,
  setDefaultView,
  timezone,
  setTimezone,
}: StepPreferencesProps) {
  return (
    <div className="space-y-4">
      <SectionHeader>Preferences</SectionHeader>
      <div className="space-y-4">
        <Toggle
          checked={emailNotifications}
          onChange={setEmailNotifications}
          label="Email notifications"
        />
        <Toggle
          checked={autoDarkMode}
          onChange={setAutoDarkMode}
          label="Auto dark mode"
        />
        <div className="flex flex-col gap-1.5">
          <span className="text-text-secondary text-xs font-medium">
            Default View
          </span>
          <RadioPill
            options={viewOptions}
            value={defaultView}
            onChange={setDefaultView}
          />
        </div>
        <SelectDropdown
          label="Timezone"
          value={timezone}
          onChange={setTimezone}
          options={timezoneOptions}
        />
      </div>
    </div>
  );
}
