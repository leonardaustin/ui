import { SectionHeader, SelectDropdown, TextInput } from "@leonardaustin/ui";

interface StepProfileProps {
  displayName: string;
  setDisplayName: (value: string) => void;
  role: string;
  setRole: (value: string) => void;
  teamName: string;
  setTeamName: (value: string) => void;
}

const roleOptions = [
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "product-manager", label: "Product Manager" },
  { value: "executive", label: "Executive" },
  { value: "other", label: "Other" },
];

export function StepProfile({
  displayName,
  setDisplayName,
  role,
  setRole,
  teamName,
  setTeamName,
}: StepProfileProps) {
  return (
    <div className="space-y-4">
      <SectionHeader>Profile Setup</SectionHeader>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput
          label="Display Name"
          placeholder="Your name"
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <SelectDropdown
          label="Role"
          value={role}
          onChange={setRole}
          options={roleOptions}
        />
        <TextInput
          label="Team Name"
          placeholder="e.g. Platform Team"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
    </div>
  );
}
