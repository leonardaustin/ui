import { useCallback, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";

import {
  Accessibility,
  Check,
  ChevronDown,
  ChevronsUpDown,
  LogOut,
  Monitor,
  Moon,
  Settings as SettingsIcon,
  Sun,
} from "lucide-react";

import { accentItems } from "../../config/theme";
import { useDismiss } from "../../hooks/useDismiss";
import { useSettings } from "../../hooks/useSettings";
import { cn } from "../../lib/cn";
import { Avatar } from "../ui/Avatar";
import { useToast } from "../ui/Toast";
import {
  handleAppShellNavigate,
  isAppShellPathActive,
  navigateToPath,
  type AppShellNavigate,
} from "./navigation";
import type {
  AppShellAccount,
  AppShellBrand,
  AppShellNavItem,
  AppShellNavSection,
} from "./types";

const SIDEBAR_MIN = 140;
const SIDEBAR_MAX = 400;
const SIDEBAR_COLLAPSED = 48;

function SidebarNavLink({
  item,
  collapsed,
  currentPath,
  onNavigate,
}: {
  item: AppShellNavItem;
  collapsed: boolean;
  currentPath?: string;
  onNavigate?: AppShellNavigate;
}) {
  const isActive = isAppShellPathActive(item, currentPath);

  return (
    <a
      href={item.path}
      onClick={(event) => handleAppShellNavigate(event, item.path, onNavigate)}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "font-navigation relative flex items-center gap-2 rounded px-2",
        "cursor-pointer transition-colors duration-[100ms]",
        collapsed ? "mx-auto w-[2em] justify-center" : "",
        isActive
          ? "bg-accent-muted text-accent"
          : "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
      )}
      style={{ height: "2em" }}
      title={collapsed ? item.label : undefined}
    >
      {isActive && (
        <div
          className="bg-accent absolute left-0 w-0.5 rounded-md"
          style={{ top: "0.3em", bottom: "0.3em" }}
        />
      )}
      <span className="shrink-0">
        <item.icon className="h-3.5 w-3.5" />
      </span>
      {!collapsed && <span className="truncate text-xs">{item.label}</span>}
    </a>
  );
}

function SidebarBrand({
  brand,
  collapsed,
}: {
  brand: AppShellBrand;
  collapsed: boolean;
}) {
  const BrandIcon = brand.icon;
  const fallbackInitial = brand.name.trim().charAt(0).toUpperCase();

  if (brand.logo && !collapsed) {
    return (
      <div className="flex min-w-0 items-center gap-2 px-2">{brand.logo}</div>
    );
  }

  return (
    <div
      className={cn(
        "flex min-w-0 items-center gap-2 px-2",
        collapsed && "mx-auto justify-center px-0",
      )}
    >
      {BrandIcon ? (
        <BrandIcon className="text-accent h-3.5 w-3.5 shrink-0" />
      ) : (
        collapsed &&
        fallbackInitial && (
          <span className="text-accent shrink-0 text-xs font-bold">
            {fallbackInitial}
          </span>
        )
      )}
      {!collapsed && (
        <span className="text-text-primary truncate text-xs font-semibold">
          {brand.name}
        </span>
      )}
    </div>
  );
}

interface AccountSwitcherProps {
  collapsed: boolean;
  accounts: AppShellAccount[];
  initialAccountIndex?: number;
  onAccountChange?: (account: AppShellAccount, index: number) => void;
  onSignOut?: () => void;
  signOutPath?: string;
  signOutLabel?: string;
  onNavigate?: AppShellNavigate;
}

function accountDetail(account: AppShellAccount) {
  return account.role ?? account.email;
}

function AccountSwitcher({
  collapsed,
  accounts,
  initialAccountIndex = 0,
  onAccountChange,
  onSignOut,
  signOutPath,
  signOutLabel = "Sign out",
  onNavigate,
}: AccountSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [activeAccountIndex, setActiveAccountIndex] = useState(() =>
    Math.min(initialAccountIndex, Math.max(accounts.length - 1, 0)),
  );
  const [pos, setPos] = useState({ bottom: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [menuRef], [triggerRef]);

  const account = accounts[activeAccountIndex] ?? accounts[0];
  const showSignOut = Boolean(onSignOut || signOutPath);

  function handleOpen() {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({ bottom: window.innerHeight - rect.bottom, left: rect.right + 6 });
    setOpen(!open);
  }

  function handleAccountChange(account: AppShellAccount, index: number) {
    setActiveAccountIndex(index);
    onAccountChange?.(account, index);
    setOpen(false);
  }

  function handleSignOut() {
    setOpen(false);
    if (onSignOut) onSignOut();
    else if (signOutPath) navigateToPath(signOutPath, onNavigate);
  }

  if (!account) return null;

  return (
    <>
      <button
        ref={triggerRef}
        onClick={handleOpen}
        className={cn(
          "font-navigation flex w-full cursor-pointer items-center gap-2 rounded px-2 transition-colors duration-[100ms]",
          "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
          collapsed && "justify-center px-0",
        )}
        style={{ height: "2.5em" }}
        title={collapsed ? account.name : undefined}
      >
        <Avatar name={account.name} src={account.avatarSrc} size="sm" />
        {!collapsed && (
          <>
            <div className="min-w-0 flex-1 text-left">
              <p className="text-text-primary truncate text-xs leading-tight font-medium">
                {account.name}
              </p>
              {accountDetail(account) && (
                <p className="text-2xs text-text-tertiary truncate leading-tight">
                  {accountDetail(account)}
                </p>
              )}
            </div>
            <ChevronsUpDown className="text-text-tertiary h-3 w-3 shrink-0" />
          </>
        )}
      </button>
      {open &&
        createPortal(
          <div
            ref={menuRef}
            className="bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-56 rounded-md border py-1 shadow-lg"
            style={{ bottom: pos.bottom, left: pos.left }}
          >
            <p className="text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase">
              Accounts
            </p>
            {accounts.map((account, index) => (
              <button
                key={`${account.name}-${account.email ?? index}`}
                onClick={() => handleAccountChange(account, index)}
                className="text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-8 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]"
              >
                <Avatar name={account.name} src={account.avatarSrc} size="sm" />
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-text-primary truncate text-xs leading-tight">
                    {account.name}
                  </p>
                  {account.email && (
                    <p className="text-2xs text-text-tertiary truncate leading-tight">
                      {account.email}
                    </p>
                  )}
                </div>
                {index === activeAccountIndex && (
                  <Check className="text-accent h-3.5 w-3.5 shrink-0" />
                )}
              </button>
            ))}
            {showSignOut && (
              <>
                <div className="border-border my-1 border-t" />
                <button
                  onClick={handleSignOut}
                  className="text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>{signOutLabel}</span>
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}

interface SettingsPopupProps {
  collapsed: boolean;
  settingsPath?: string;
  settingsLabel?: string;
  onOpenSettings?: () => void;
  onNavigate?: AppShellNavigate;
}

function SettingsPopup({
  collapsed,
  settingsPath,
  settingsLabel = "All Settings",
  onOpenSettings,
  onNavigate,
}: SettingsPopupProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ bottom: 0, left: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    accentColor,
    setAccentColor,
    reducedMotion,
    setReducedMotion,
    colorMode,
    setColorMode,
  } = useSettings();
  const { toast } = useToast();
  const hasSettingsDestination = Boolean(settingsPath || onOpenSettings);

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [menuRef], [triggerRef]);

  function handleOpen() {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({ bottom: window.innerHeight - rect.bottom, left: rect.right + 6 });
    setOpen(!open);
  }

  function handleOpenSettings() {
    setOpen(false);
    if (onOpenSettings) onOpenSettings();
    else if (settingsPath) navigateToPath(settingsPath, onNavigate);
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={handleOpen}
        className={cn(
          "font-navigation relative flex w-full items-center gap-2 rounded px-2",
          "cursor-pointer transition-colors duration-[100ms]",
          collapsed ? "mx-auto w-[2em] justify-center" : "",
          open
            ? "bg-accent-muted text-accent"
            : "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
        )}
        style={{ height: "2em" }}
        title={collapsed ? "Settings" : undefined}
      >
        <SettingsIcon className="h-3.5 w-3.5 shrink-0" />
        {!collapsed && <span className="truncate text-xs">Settings</span>}
      </button>
      {open &&
        createPortal(
          <div
            ref={menuRef}
            className="bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-64 rounded-md border py-1 shadow-lg"
            style={{ bottom: pos.bottom, left: pos.left }}
          >
            <p className="text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase">
              Mode
            </p>
            {(
              [
                { value: "dark" as const, label: "Dark", Icon: Moon },
                { value: "light" as const, label: "Light", Icon: Sun },
                { value: "system" as const, label: "System", Icon: Monitor },
              ] as const
            ).map(({ value, label, Icon }) => (
              <button
                key={value}
                onClick={() => setColorMode(value)}
                className="text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]"
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                <span className="flex-1 text-left">{label}</span>
                {colorMode === value && (
                  <Check className="text-accent h-3.5 w-3.5 shrink-0" />
                )}
              </button>
            ))}

            <div className="border-border my-1 border-t" />

            <p className="text-2xs-f text-text-tertiary font-label px-3 py-1.5 font-semibold tracking-wider uppercase">
              Accent
            </p>
            <div className="flex flex-wrap gap-1.5 px-3 pb-2">
              {accentItems.map((accent) => (
                <button
                  key={accent.value}
                  onClick={() => setAccentColor(accent.value)}
                  className={cn(
                    "h-5 w-5 cursor-pointer rounded-full transition-transform duration-[100ms] hover:scale-110",
                    accentColor === accent.value &&
                      "ring-offset-bg-tertiary scale-110 ring-2 ring-offset-1",
                  )}
                  style={
                    {
                      backgroundColor: accent.color,
                      ...(accentColor === accent.value
                        ? { "--utility-ring-color": accent.color }
                        : {}),
                    } as CSSProperties
                  }
                  title={
                    accent.value.charAt(0).toUpperCase() + accent.value.slice(1)
                  }
                />
              ))}
            </div>

            <div className="border-border my-1 border-t" />

            <button
              onClick={() => {
                setReducedMotion(!reducedMotion);
                toast(
                  "info",
                  reducedMotion ? "Animations enabled" : "Animations disabled",
                );
              }}
              className="text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]"
            >
              <Accessibility className="h-3.5 w-3.5 shrink-0" />
              <span className="flex-1 text-left">Reduced Motion</span>
              {reducedMotion && (
                <Check className="text-accent h-3.5 w-3.5 shrink-0" />
              )}
            </button>

            {hasSettingsDestination && (
              <>
                <div className="border-border my-1 border-t" />
                <button
                  onClick={handleOpenSettings}
                  className="text-text-secondary hover:text-text-primary hover:bg-bg-hover font-navigation flex h-7 w-full cursor-pointer items-center gap-2.5 px-3 text-xs transition-colors duration-[100ms]"
                >
                  <SettingsIcon className="h-3.5 w-3.5 shrink-0" />
                  <span className="flex-1 text-left">{settingsLabel}</span>
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </>
  );
}

export interface SidebarProps {
  navSections: AppShellNavSection[];
  brand: AppShellBrand;
  accounts?: AppShellAccount[];
  initialAccountIndex?: number;
  onAccountChange?: (account: AppShellAccount, index: number) => void;
  onSignOut?: () => void;
  signOutPath?: string;
  signOutLabel?: string;
  settingsPath?: string;
  settingsLabel?: string;
  onOpenSettings?: () => void;
  currentPath?: string;
  onNavigate?: AppShellNavigate;
  className?: string;
}

export function Sidebar({
  navSections,
  brand,
  accounts = [],
  initialAccountIndex,
  onAccountChange,
  onSignOut,
  signOutPath,
  signOutLabel,
  settingsPath,
  settingsLabel,
  onOpenSettings,
  currentPath,
  onNavigate,
  className,
}: SidebarProps) {
  const { sidebarCollapsed, sidebarWidth, setSidebarWidth } = useSettings();
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
    new Set(),
  );
  const sidebarRef = useRef<HTMLElement>(null);
  const dragging = useRef(false);

  const onMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (sidebarCollapsed) return;
      event.preventDefault();
      dragging.current = true;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      const onMouseMove = (moveEvent: MouseEvent) => {
        if (!dragging.current || !sidebarRef.current) return;
        const rect = sidebarRef.current.getBoundingClientRect();
        const nextWidth = moveEvent.clientX - rect.left;
        setSidebarWidth(
          Math.max(SIDEBAR_MIN, Math.min(nextWidth, SIDEBAR_MAX)),
        );
      };

      const onMouseUp = () => {
        dragging.current = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [sidebarCollapsed, setSidebarWidth],
  );

  function toggleSection(title: string) {
    setCollapsedSections((previous) => {
      const next = new Set(previous);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  }

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        "bg-bg-secondary relative hidden shrink-0 flex-col border-r md:flex",
        "transition-[width] duration-[200ms] ease-out",
        "border-border",
        className,
      )}
      style={{ width: sidebarCollapsed ? SIDEBAR_COLLAPSED : sidebarWidth }}
    >
      {!sidebarCollapsed && (
        <div
          onMouseDown={onMouseDown}
          className="hover:bg-accent/30 active:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize"
        />
      )}

      <div
        className="border-border flex shrink-0 items-center border-b px-2"
        style={{ height: "var(--topbar-height)" }}
      >
        <SidebarBrand brand={brand} collapsed={sidebarCollapsed} />
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-2">
        {navSections.map((section, index) => {
          const isCollapsed = collapsedSections.has(section.title);
          return (
            <div key={section.title} className="mb-4">
              {sidebarCollapsed ? (
                index > 0 && (
                  <hr className="border-border mx-auto my-1.5 w-4/5" />
                )
              ) : (
                <button
                  onClick={() => toggleSection(section.title)}
                  className="text-2xs-f text-text-tertiary hover:text-text-secondary font-label flex w-full cursor-pointer items-center justify-between px-2 font-semibold tracking-wider uppercase"
                  style={{ paddingTop: "0.35em", paddingBottom: "0.35em" }}
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "h-3 w-3 transition-transform",
                      isCollapsed && "-rotate-90",
                    )}
                  />
                </button>
              )}
              {(!isCollapsed || sidebarCollapsed) && (
                <ul className="flex flex-col gap-1">
                  {section.items.map((item) => (
                    <li key={item.path}>
                      <SidebarNavLink
                        item={item}
                        collapsed={sidebarCollapsed}
                        currentPath={currentPath}
                        onNavigate={onNavigate}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>

      <div className="shrink-0 px-2 py-1.5">
        <SettingsPopup
          collapsed={sidebarCollapsed}
          settingsPath={settingsPath}
          settingsLabel={settingsLabel}
          onOpenSettings={onOpenSettings}
          onNavigate={onNavigate}
        />
        {accounts.length > 0 && (
          <div className="border-border mt-2 border-t pt-2">
            <AccountSwitcher
              collapsed={sidebarCollapsed}
              accounts={accounts}
              initialAccountIndex={initialAccountIndex}
              onAccountChange={onAccountChange}
              onSignOut={onSignOut}
              signOutPath={signOutPath}
              signOutLabel={signOutLabel}
              onNavigate={onNavigate}
            />
          </div>
        )}
      </div>
    </aside>
  );
}
