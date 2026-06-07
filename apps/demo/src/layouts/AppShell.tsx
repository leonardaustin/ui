import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { AppShell as UiAppShell } from "@leonardaustin/ui";

import {
  allNavItems,
  appBrand,
  bottomNavItems,
  breadcrumbLabels,
  breadcrumbParents,
  demoAccounts,
  navSections,
} from "../config/navigation";

export function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <UiAppShell
      navSections={navSections}
      bottomNavItems={bottomNavItems}
      commandItems={allNavItems}
      brand={appBrand}
      accounts={demoAccounts}
      breadcrumbs={{
        homeLabel: "Dashboard",
        labels: breadcrumbLabels,
        parents: breadcrumbParents,
      }}
      settingsPath="/settings"
      signOutPath="/login"
      currentPath={location.pathname}
      onNavigate={navigate}
    >
      <Outlet />
    </UiAppShell>
  );
}
