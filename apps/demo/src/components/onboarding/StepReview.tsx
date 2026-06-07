import { Button, MetadataGrid, SectionHeader } from "@leonardaustin/ui";

interface StepReviewProps {
  displayName: string;
  role: string;
  teamName: string;
  emailNotifications: boolean;
  autoDarkMode: boolean;
  defaultView: string;
  timezone: string;
  connected: Set<string>;
  onEditStep: (step: number) => void;
  onComplete: () => void;
}

const roleLabels: Record<string, string> = {
  developer: "Developer",
  designer: "Designer",
  "product-manager": "Product Manager",
  executive: "Executive",
  other: "Other",
};

export function StepReview({
  displayName,
  role,
  teamName,
  emailNotifications,
  autoDarkMode,
  defaultView,
  timezone,
  connected,
  onEditStep,
  onComplete,
}: StepReviewProps) {
  const connectedList = Array.from(connected);

  return (
    <div className="space-y-5">
      <SectionHeader>Review</SectionHeader>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-text-primary text-xs font-semibold">Profile</h3>
          <Button variant="ghost" size="sm" onClick={() => onEditStep(1)}>
            Edit
          </Button>
        </div>
        <MetadataGrid
          items={[
            { label: "Display Name", value: displayName || "Not set" },
            { label: "Role", value: roleLabels[role] ?? role },
            { label: "Team", value: teamName || "Not set" },
          ]}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-text-primary text-xs font-semibold">
            Preferences
          </h3>
          <Button variant="ghost" size="sm" onClick={() => onEditStep(2)}>
            Edit
          </Button>
        </div>
        <MetadataGrid
          items={[
            {
              label: "Notifications",
              value: emailNotifications ? "Enabled" : "Disabled",
            },
            {
              label: "Dark Mode",
              value: autoDarkMode ? "Auto" : "Manual",
            },
            { label: "Default View", value: defaultView },
            { label: "Timezone", value: timezone },
          ]}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-text-primary text-xs font-semibold">
            Integrations
          </h3>
          <Button variant="ghost" size="sm" onClick={() => onEditStep(3)}>
            Edit
          </Button>
        </div>
        <MetadataGrid
          items={[
            {
              label: "Connected",
              value:
                connectedList.length > 0
                  ? connectedList
                      .map((c) => c.charAt(0).toUpperCase() + c.slice(1))
                      .join(", ")
                  : "None",
            },
          ]}
        />
      </div>

      <div className="border-border border-t pt-4">
        <Button variant="primary" onClick={onComplete}>
          Complete Setup
        </Button>
      </div>
    </div>
  );
}
