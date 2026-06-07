import { Rocket } from "lucide-react";

import { Button } from "@leonardaustin/ui";

interface StepWelcomeProps {
  onNext: () => void;
}

export function StepWelcome({ onNext }: StepWelcomeProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <Rocket className="text-accent h-12 w-12" />
      <h2 className="text-text-primary text-sm font-semibold">
        Welcome aboard!
      </h2>
      <p className="text-text-secondary mx-auto max-w-md text-center text-xs">
        Let&apos;s get your workspace set up. We&apos;ll walk you through your
        profile, preferences, and integrations so everything is ready to go.
      </p>
      <Button variant="primary" onClick={onNext}>
        Get Started
      </Button>
    </div>
  );
}
