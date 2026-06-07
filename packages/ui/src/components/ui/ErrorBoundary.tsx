import { Component, type ErrorInfo, type ReactNode } from "react";

import { Button } from "./Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      "[ErrorBoundary] Uncaught error:",
      error,
      info.componentStack,
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-bg-primary flex min-h-svh flex-col items-center justify-center p-8 text-center">
          <p className="text-text-primary mb-2 text-lg font-semibold">
            Something went wrong
          </p>
          <p className="text-text-secondary mb-6 max-w-md text-xs">
            {this.state.error?.message ?? "An unexpected error occurred."}
          </p>
          <Button
            variant="secondary"
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.href = "/";
            }}
          >
            Go home
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}
