import { useState } from "react";

import {
  Button,
  Card,
  PageHeader,
  StepProgress,
  useToast,
} from "@leonardaustin/ui";

import { StepIntegrations } from "../components/onboarding/StepIntegrations";
import { StepPreferences } from "../components/onboarding/StepPreferences";
import { StepProfile } from "../components/onboarding/StepProfile";
import { StepReview } from "../components/onboarding/StepReview";
import { StepWelcome } from "../components/onboarding/StepWelcome";

const steps = [
  { label: "Welcome" },
  { label: "Profile" },
  { label: "Preferences" },
  { label: "Integrations" },
  { label: "Review" },
];

export function Onboarding() {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState("developer");
  const [teamName, setTeamName] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoDarkMode, setAutoDarkMode] = useState(false);
  const [defaultView, setDefaultView] = useState<
    "dashboard" | "inbox" | "board"
  >("dashboard");
  const [timezone, setTimezone] = useState("UTC");
  const [connected, setConnected] = useState<Set<string>>(new Set());

  const canContinue = step === 0 || step >= 2 || displayName.trim().length > 0;

  function handleToggleIntegration(id: string) {
    setConnected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function handleComplete() {
    toast("success", "Setup complete! Welcome aboard.");
    setStep(0);
  }

  return (
    <div className="max-w-2xl space-y-6">
      <PageHeader title="Onboarding" />
      <StepProgress steps={steps} currentStep={step} />
      <Card className="overflow-visible">
        {step === 0 && <StepWelcome onNext={() => setStep(1)} />}
        {step === 1 && (
          <StepProfile
            displayName={displayName}
            setDisplayName={setDisplayName}
            role={role}
            setRole={setRole}
            teamName={teamName}
            setTeamName={setTeamName}
          />
        )}
        {step === 2 && (
          <StepPreferences
            emailNotifications={emailNotifications}
            setEmailNotifications={setEmailNotifications}
            autoDarkMode={autoDarkMode}
            setAutoDarkMode={setAutoDarkMode}
            defaultView={defaultView}
            setDefaultView={setDefaultView}
            timezone={timezone}
            setTimezone={setTimezone}
          />
        )}
        {step === 3 && (
          <StepIntegrations
            connected={connected}
            onToggle={handleToggleIntegration}
          />
        )}
        {step === 4 && (
          <StepReview
            displayName={displayName}
            role={role}
            teamName={teamName}
            emailNotifications={emailNotifications}
            autoDarkMode={autoDarkMode}
            defaultView={defaultView}
            timezone={timezone}
            connected={connected}
            onEditStep={setStep}
            onComplete={handleComplete}
          />
        )}
      </Card>
      {step > 0 && step < steps.length - 1 && (
        <div className="border-border flex justify-between border-t pt-4">
          <Button variant="secondary" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
          <Button
            variant="primary"
            disabled={!canContinue}
            onClick={() => setStep((s) => s + 1)}
          >
            Continue
          </Button>
        </div>
      )}
      {step === steps.length - 1 && (
        <div className="border-border flex justify-between border-t pt-4">
          <Button variant="secondary" onClick={() => setStep((s) => s - 1)}>
            Back
          </Button>
        </div>
      )}
    </div>
  );
}
