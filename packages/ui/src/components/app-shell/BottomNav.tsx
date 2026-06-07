import { cn } from "../../lib/cn";
import {
  handleAppShellNavigate,
  isAppShellPathActive,
  type AppShellNavigate,
} from "./navigation";
import type { AppShellNavItem } from "./types";

export interface BottomNavProps {
  items: AppShellNavItem[];
  currentPath?: string;
  onNavigate?: AppShellNavigate;
  className?: string;
}

export function BottomNav({
  items,
  currentPath,
  onNavigate,
  className,
}: BottomNavProps) {
  if (items.length === 0) return null;

  return (
    <nav
      className={cn(
        "bg-bg-secondary border-border font-navigation fixed right-0 bottom-0 left-0 z-30 border-t md:hidden",
        className,
      )}
      style={{ height: "var(--bottomnav-height)" }}
    >
      <ul className="flex h-full items-center justify-around">
        {items.map((item) => {
          const isActive = isAppShellPathActive(item, currentPath);

          return (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(event) =>
                  handleAppShellNavigate(event, item.path, onNavigate)
                }
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "font-navigation flex h-full w-14 flex-col items-center justify-center gap-0.5",
                  "cursor-pointer transition-colors duration-[100ms]",
                  isActive ? "text-accent" : "text-text-tertiary",
                )}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-2xs">
                  {item.shortLabel ?? item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
