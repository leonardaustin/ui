import { Link } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import { Button } from "@leonardaustin/ui";

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-text-tertiary text-5xl font-bold tabular-nums">404</p>
      <p className="text-text-secondary mt-1 mb-6 text-sm">Page not found</p>
      <Link to="/">
        <Button variant="secondary">
          <ArrowLeft className="h-3.5 w-3.5" />
          Go home
        </Button>
      </Link>
    </div>
  );
}
