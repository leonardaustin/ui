import { useEffect, useRef } from "react";

import { X } from "lucide-react";

import { useFocusTrap } from "../../hooks/useFocusTrap";
import { cn } from "../../lib/cn";
import {
  handleAppShellNavigate,
  isAppShellPathActive,
  type AppShellNavigate,
} from "./navigation";
import type { AppShellBrand, AppShellNavItem } from "./types";

export interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  items: AppShellNavItem[];
  brand: AppShellBrand;
  currentPath?: string;
  onNavigate?: AppShellNavigate;
  className?: string;
}

function Brand({ brand }: { brand: AppShellBrand }) {
  const BrandIcon = brand.icon;

  if (brand.logo) return <>{brand.logo}</>;

  return (
    <div className="flex items-center gap-2">
      {BrandIcon && <BrandIcon className="text-accent h-4.5 w-4.5" />}
      <span className="text-text-primary text-sm font-semibold">
        {brand.name}
      </span>
    </div>
  );
}

export function MobileDrawer({
  open,
  onClose,
  items,
  brand,
  currentPath,
  onNavigate,
  className,
}: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(drawerRef, open);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 md:hidden">
      <div className="bg-bg-overlay fixed inset-0" onClick={onClose} />
      <div
        ref={drawerRef}
        className={cn(
          "bg-bg-sidebar border-border animate-slide-in-left fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r",
          className,
        )}
      >
        <div className="border-border flex h-11 items-center justify-between border-b px-4">
          <Brand brand={brand} />
          <button
            onClick={onClose}
            className="text-text-tertiary hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-2 py-2">
          <ul className="space-y-0.5">
            {items.map((item) => {
              const isActive = isAppShellPathActive(item, currentPath);

              return (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(event) =>
                      handleAppShellNavigate(
                        event,
                        item.path,
                        onNavigate,
                        onClose,
                      )
                    }
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex h-10 items-center gap-3 rounded-md px-3",
                      "cursor-pointer transition-colors duration-[100ms]",
                      isActive
                        ? "bg-accent-muted text-accent"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
