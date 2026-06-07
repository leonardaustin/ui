import {
  BarChart3,
  BookMarked,
  BookOpen,
  Cherry,
  Component,
  FormInput,
  KanbanSquare,
  LayoutDashboard,
  Mail,
  PanelRightOpen,
  Rocket,
  ScrollText,
  Settings,
  ShieldCheck,
  Table2,
  Type,
  User,
} from "lucide-react";

import type {
  AppShellAccount,
  AppShellBrand,
  AppShellNavItem,
  AppShellNavSection,
} from "@leonardaustin/ui";

export type NavItem = AppShellNavItem;
export type NavSection = AppShellNavSection;

export const appBrand: AppShellBrand = {
  name: "Dashboard",
  icon: Cherry,
};

export const demoAccounts: AppShellAccount[] = [
  { name: "Jane Doe", email: "jane@example.com", role: "Admin" },
  { name: "Alex Smith", email: "alex@example.com", role: "Editor" },
  { name: "Sam Lee", email: "sam@example.com", role: "Viewer" },
];

/** Full navigation grouped into sections (sidebar, mobile drawer). */
export const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
        shortLabel: "Home",
      },
    ],
  },
  {
    title: "Demo Pages",
    items: [
      { label: "Inbox", path: "/inbox", icon: Mail },
      { label: "Tables", path: "/tables", icon: Table2 },
      { label: "Forms", path: "/forms", icon: FormInput },
      {
        label: "Components",
        path: "/components",
        icon: Component,
        shortLabel: "UI",
      },
      { label: "Typography", path: "/content", icon: Type },
      { label: "Logs", path: "/logs", icon: ScrollText },
      { label: "Audit Log", path: "/audit-log", icon: ShieldCheck },
      { label: "Blog", path: "/blog", icon: BookOpen },
      { label: "Wiki", path: "/wiki", icon: BookMarked },
      { label: "Analytics", path: "/analytics", icon: BarChart3 },
      { label: "Board", path: "/kanban", icon: KanbanSquare },
      { label: "Onboarding", path: "/onboarding", icon: Rocket },
      {
        label: "Second Sidebar",
        path: "/secondary-sidebar",
        icon: PanelRightOpen,
        shortLabel: "Sidebar",
      },
    ],
  },
  {
    title: "Account",
    items: [{ label: "Profile", path: "/profile", icon: User }],
  },
];

/** Flat list of all navigable pages (command palette, etc.). */
export const allNavItems: NavItem[] = [
  ...navSections.flatMap((s) => s.items),
  { label: "Settings", path: "/settings", icon: Settings },
];

/** Subset of nav items shown in the bottom nav bar (limited space). */
export const bottomNavItems: NavItem[] = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard, shortLabel: "Home" },
  { label: "Inbox", path: "/inbox", icon: Mail },
  { label: "Tables", path: "/tables", icon: Table2 },
  {
    label: "Components",
    path: "/components",
    icon: Component,
    shortLabel: "UI",
  },
  { label: "Profile", path: "/profile", icon: User },
  { label: "Settings", path: "/settings", icon: Settings },
];

export const breadcrumbLabels: Record<string, string> = {
  inbox: "Inbox",
  tables: "Tables",
  forms: "Forms",
  components: "Components",
  content: "Content",
  settings: "Settings",
  profile: "Profile",
};

export const breadcrumbParents: Record<string, string> = { inbox: "Email" };
