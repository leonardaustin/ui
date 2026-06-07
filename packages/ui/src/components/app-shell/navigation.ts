import type { MouseEvent } from "react";

import type { AppShellNavItem } from "./types";

export type AppShellNavigate = (path: string) => void;

export function isAppShellPathActive(
  item: AppShellNavItem,
  currentPath?: string,
) {
  if (!currentPath) return false;

  const end = item.end ?? item.path === "/";
  if (end) return currentPath === item.path;

  const prefix = item.path.endsWith("/") ? item.path : `${item.path}/`;
  return currentPath === item.path || currentPath.startsWith(prefix);
}

export function handleAppShellNavigate(
  event: MouseEvent<HTMLAnchorElement>,
  path: string,
  onNavigate?: AppShellNavigate,
  onAfterNavigate?: () => void,
) {
  const target = event.currentTarget.getAttribute("target");

  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    (target && target !== "_self")
  ) {
    return;
  }

  if (onNavigate) {
    event.preventDefault();
    onNavigate(path);
  }

  onAfterNavigate?.();
}

export function navigateToPath(path: string, onNavigate?: AppShellNavigate) {
  if (onNavigate) {
    onNavigate(path);
    return;
  }

  if (typeof window !== "undefined") window.location.assign(path);
}
