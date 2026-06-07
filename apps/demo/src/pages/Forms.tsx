import { useState } from "react";

import { Lock, Mail, User } from "lucide-react";

import {
  Button,
  Card,
  Checkbox,
  Combobox,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  PageHeader,
  PageSection,
  RadioPill,
  SectionHeader,
  Select,
  SelectDropdown,
  Slider,
  Textarea,
  TextInput,
  Toggle,
  UploadDropzone,
  useToast,
  type DateRange,
} from "@leonardaustin/ui";

export function Forms() {
  const { toast } = useToast();
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [radio, setRadio] = useState<"left" | "center" | "right">("left");
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [bio, setBio] = useState("");
  const [slider, setSlider] = useState(50);
  const [comboValue, setComboValue] = useState("ns-default");
  const [styledSelect, setStyledSelect] = useState("engineering");
  const [pickedDate, setPickedDate] = useState<Date | null>(null);
  const [pickedDateTime, setPickedDateTime] = useState<Date | null>(null);
  const [dateRange, setDateRange] = useState<DateRange>({
    start: null,
    end: null,
  });

  return (
    <div className="max-w-2xl space-y-8">
      {/* Page title — uses the shared PageHeader component for consistency. */}
      <PageHeader title="Forms" />

      {/* Text Inputs */}
      <section className="space-y-4">
        <SectionHeader>Text Inputs</SectionHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput
            label="Full Name"
            placeholder="John Doe"
            icon={<User className="h-3.5 w-3.5" />}
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="john@example.com"
            icon={<Mail className="h-3.5 w-3.5" />}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Enter password"
            icon={<Lock className="h-3.5 w-3.5" />}
          />
          <TextInput
            label="With Error"
            placeholder="Required"
            error="This field is required"
          />
          <TextInput label="Disabled" placeholder="Cannot edit" disabled />
          <TextInput label="Read Only" value="read-only-value" readOnly />
        </div>
      </section>

      {/* Select */}
      <section className="space-y-4">
        <SectionHeader>Selects (Native)</SectionHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Select
            label="Role"
            options={[
              { value: "admin", label: "Admin" },
              { value: "editor", label: "Editor" },
              { value: "viewer", label: "Viewer" },
            ]}
          />
          <Select
            label="Department"
            options={[
              { value: "engineering", label: "Engineering" },
              { value: "design", label: "Design" },
              { value: "marketing", label: "Marketing" },
              { value: "sales", label: "Sales" },
            ]}
          />
        </div>
      </section>

      {/* Styled Select — Card needs `overflow-visible` so the dropdown menu
          can extend past the card's bounds instead of being clipped. */}
      <Card
        className="overflow-visible"
        header={
          <h2 className="text-text-primary text-xs font-semibold">
            Selects (Styled Dropdown)
          </h2>
        }
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectDropdown
            label="Department"
            value={styledSelect}
            onChange={setStyledSelect}
            options={[
              { value: "engineering", label: "Engineering" },
              { value: "design", label: "Design" },
              { value: "marketing", label: "Marketing" },
              { value: "sales", label: "Sales" },
              { value: "operations", label: "Operations" },
            ]}
          />
          <SelectDropdown
            label="Priority"
            value=""
            onChange={() => {}}
            placeholder="Choose priority..."
            options={[
              { value: "critical", label: "Critical" },
              { value: "high", label: "High" },
              { value: "medium", label: "Medium" },
              { value: "low", label: "Low" },
            ]}
          />
        </div>
      </Card>

      {/* Combobox */}
      <section className="space-y-4">
        <SectionHeader>Combobox (Searchable)</SectionHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Combobox
            label="Namespace"
            placeholder="Select namespace..."
            value={comboValue}
            onChange={setComboValue}
            options={[
              { value: "ns-default", label: "default" },
              { value: "ns-production", label: "production" },
              { value: "ns-staging", label: "staging" },
              { value: "ns-development", label: "development" },
              { value: "ns-monitoring", label: "monitoring" },
              { value: "ns-kube-system", label: "kube-system" },
              { value: "ns-istio-system", label: "istio-system" },
            ]}
          />
          <Combobox
            label="Region"
            placeholder="Choose region..."
            value=""
            onChange={() => {}}
            options={[
              { value: "us-east-1", label: "US East (N. Virginia)" },
              { value: "us-west-2", label: "US West (Oregon)" },
              { value: "eu-west-1", label: "EU (Ireland)" },
              { value: "ap-south-1", label: "Asia Pacific (Mumbai)" },
              { value: "ap-northeast-1", label: "Asia Pacific (Tokyo)" },
            ]}
          />
        </div>
      </section>

      {/* Toggles */}
      <section className="space-y-4">
        <SectionHeader>Toggles</SectionHeader>
        <div className="space-y-4">
          <Toggle
            checked={toggle1}
            onChange={setToggle1}
            label="Enable notifications"
          />
          <Toggle checked={toggle2} onChange={setToggle2} label="Dark mode" />
          <Toggle
            checked={false}
            onChange={() => {}}
            disabled
            label="Disabled toggle"
          />
        </div>
      </section>

      {/* Radio Pills */}
      <section className="space-y-4">
        <SectionHeader>Radio Pills</SectionHeader>
        <RadioPill
          options={[
            { value: "left", label: "Left" },
            { value: "center", label: "Center" },
            { value: "right", label: "Right" },
          ]}
          value={radio}
          onChange={setRadio}
        />
      </section>

      {/* Checkboxes */}
      <section className="space-y-4">
        <SectionHeader>Checkboxes</SectionHeader>
        <div className="space-y-3">
          <Checkbox checked={check1} onChange={setCheck1} label="Checked" />
          <Checkbox checked={check2} onChange={setCheck2} label="Unchecked" />
          <Checkbox
            checked={false}
            indeterminate
            onChange={() => setCheck3(!check3)}
            label="Indeterminate"
          />
          <Checkbox
            checked={false}
            onChange={() => {}}
            disabled
            label="Disabled"
          />
        </div>
      </section>

      {/* Textarea */}
      <section className="space-y-4">
        <SectionHeader>Textarea</SectionHeader>
        <Textarea
          label="Bio"
          placeholder="Tell us about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={200}
          showCount
        />
      </section>

      {/* Date Pickers */}
      <section className="space-y-4">
        <SectionHeader>Date Pickers</SectionHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DatePicker
            label="Date"
            value={pickedDate}
            onChange={setPickedDate}
            placeholder="Pick a date..."
          />
          <DateTimePicker
            label="Date & Time"
            value={pickedDateTime}
            onChange={setPickedDateTime}
            placeholder="Pick date & time..."
          />
        </div>
        <DateRangePicker
          label="Date Range"
          value={dateRange}
          onChange={setDateRange}
          placeholder="Select a range..."
        />
      </section>

      {/* Slider */}
      <PageSection title="Slider">
        <Slider
          min={0}
          max={100}
          value={slider}
          onChange={setSlider}
          label="Volume"
          showValue
          className="max-w-xs"
        />
      </PageSection>

      {/* File Upload */}
      <PageSection title="File Upload">
        <UploadDropzone
          accept="image/png,image/jpeg,image/gif"
          description="PNG, JPG, GIF up to 10MB"
          onChange={() => toast("info", "File selected (demo only)")}
        />
      </PageSection>

      {/* Submit */}
      <div className="border-border border-t pt-4">
        <Button
          variant="primary"
          onClick={() => toast("success", "Form submitted successfully!")}
        >
          Submit Form
        </Button>
      </div>
    </div>
  );
}
