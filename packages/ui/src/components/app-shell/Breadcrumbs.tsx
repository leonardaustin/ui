import { ChevronRight } from "lucide-react";

import { cn } from "../../lib/cn";
import { handleAppShellNavigate, type AppShellNavigate } from "./navigation";
import type { AppShellBreadcrumbOptions } from "./types";

export interface BreadcrumbsProps extends AppShellBreadcrumbOptions {
  currentPath?: string;
  onNavigate?: AppShellNavigate;
  className?: string;
}

function defaultLabel(segment: string) {
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}

export function Breadcrumbs({
  homeLabel = "Dashboard",
  labels = {},
  parents = {},
  currentPath = "/",
  onNavigate,
  className,
}: BreadcrumbsProps) {
  const segments = currentPath.split("?")[0].split("/").filter(Boolean);

  const crumbs = [
    { label: homeLabel, path: "/" },
    ...segments.map((segment, index) => {
      const previous = segments[index - 1];
      return {
        label: labels[segment] || parents[previous] || defaultLabel(segment),
        path: "/" + segments.slice(0, index + 1).join("/"),
      };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "font-navigation flex items-center gap-1 text-xs",
        className,
      )}
    >
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <span key={crumb.path} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="text-text-tertiary h-3 w-3" />
            )}
            {isLast ? (
              <span className="text-text-primary font-medium">
                {crumb.label}
              </span>
            ) : (
              <a
                href={crumb.path}
                onClick={(event) =>
                  handleAppShellNavigate(event, crumb.path, onNavigate)
                }
                className={cn(
                  "text-text-tertiary hover:text-text-primary cursor-pointer transition-colors duration-[100ms]",
                )}
              >
                {crumb.label}
              </a>
            )}
          </span>
        );
      })}
    </nav>
  );
}
