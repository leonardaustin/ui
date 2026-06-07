import { useId, useRef, useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";

interface Tab {
  key: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  /** Controlled active tab key. When set, the parent owns the state. */
  value?: string;
  /** Called with the tab key whenever a tab is selected. */
  onChange?: (key: string) => void;
  className?: string;
}

export function Tabs({
  tabs,
  defaultTab,
  value,
  onChange,
  className,
}: TabsProps) {
  const [internalActive, setInternalActive] = useState(
    defaultTab || tabs[0]?.key,
  );
  const active = value ?? internalActive;
  const current = tabs.find((t) => t.key === active);

  function selectTab(key: string) {
    if (value === undefined) setInternalActive(key);
    onChange?.(key);
  }
  const baseId = useId();
  const tablistRef = useRef<HTMLDivElement>(null);

  function handleTabKeyDown(e: React.KeyboardEvent) {
    const tabKeys = tabs.map((t) => t.key);
    const currentIndex = tabKeys.indexOf(active);
    let nextIndex: number | null = null;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    }

    if (nextIndex !== null) {
      selectTab(tabKeys[nextIndex]);
      const buttons =
        tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      buttons?.[nextIndex]?.focus();
    }
  }

  return (
    <div className={className}>
      <div
        className="border-border flex border-b"
        role="tablist"
        ref={tablistRef}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            id={`${baseId}-tab-${tab.key}`}
            role="tab"
            tabIndex={tab.key === active ? 0 : -1}
            aria-selected={tab.key === active}
            aria-controls={`${baseId}-panel-${tab.key}`}
            onClick={() => selectTab(tab.key)}
            onKeyDown={handleTabKeyDown}
            className={cn(
              "font-control relative cursor-pointer px-3 py-2 text-xs font-medium transition-colors duration-[100ms]",
              "hover:text-text-primary",
              tab.key === active ? "text-accent" : "text-text-tertiary",
            )}
          >
            {tab.label}
            {tab.key === active && (
              <div className="bg-accent absolute right-0 bottom-0 left-0 h-0.5 rounded-md" />
            )}
          </button>
        ))}
      </div>
      <div
        id={`${baseId}-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="pt-4"
      >
        {current?.content}
      </div>
    </div>
  );
}
