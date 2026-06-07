import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import {
  AuthLayout,
  ErrorBoundary,
  LoadingSpinner,
  SettingsProvider,
  ThemeProvider,
  ToastProvider,
} from "@leonardaustin/ui";

import { AppShell } from "./layouts/AppShell";

const Dashboard = lazy(() =>
  import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })),
);
const Inbox = lazy(() =>
  import("./pages/Inbox").then((m) => ({ default: m.Inbox })),
);
const EmailDetail = lazy(() =>
  import("./pages/EmailDetail").then((m) => ({ default: m.EmailDetail })),
);
const Tables = lazy(() =>
  import("./pages/Tables").then((m) => ({ default: m.Tables })),
);
const Forms = lazy(() =>
  import("./pages/Forms").then((m) => ({ default: m.Forms })),
);
const Components = lazy(() =>
  import("./pages/Components").then((m) => ({ default: m.Components })),
);
const Content = lazy(() =>
  import("./pages/Content").then((m) => ({ default: m.Content })),
);
const BlogList = lazy(() =>
  import("./pages/BlogList").then((m) => ({ default: m.BlogList })),
);
const BlogArticle = lazy(() =>
  import("./pages/BlogArticle").then((m) => ({ default: m.BlogArticle })),
);
const Settings = lazy(() =>
  import("./pages/Settings").then((m) => ({ default: m.Settings })),
);
const EditUser = lazy(() =>
  import("./pages/EditUser").then((m) => ({ default: m.EditUser })),
);
const Profile = lazy(() =>
  import("./pages/Profile").then((m) => ({ default: m.Profile })),
);
const Login = lazy(() =>
  import("./pages/Login").then((m) => ({ default: m.Login })),
);
const Register = lazy(() =>
  import("./pages/Register").then((m) => ({ default: m.Register })),
);
const Logs = lazy(() =>
  import("./pages/Logs").then((m) => ({ default: m.Logs })),
);
const AuditLog = lazy(() =>
  import("./pages/AuditLog").then((m) => ({ default: m.AuditLog })),
);
const CreatePost = lazy(() =>
  import("./pages/CreatePost").then((m) => ({ default: m.CreatePost })),
);
const Analytics = lazy(() =>
  import("./pages/Analytics").then((m) => ({ default: m.Analytics })),
);
const Wiki = lazy(() =>
  import("./pages/Wiki").then((m) => ({ default: m.Wiki })),
);
const WikiArticle = lazy(() =>
  import("./pages/WikiArticle").then((m) => ({ default: m.WikiArticle })),
);
const Kanban = lazy(() =>
  import("./pages/Kanban").then((m) => ({ default: m.Kanban })),
);
const Onboarding = lazy(() =>
  import("./pages/Onboarding").then((m) => ({ default: m.Onboarding })),
);
const SecondarySidebar = lazy(() =>
  import("./pages/SecondarySidebar").then((m) => ({
    default: m.SecondarySidebar,
  })),
);
const NotFound = lazy(() =>
  import("./pages/NotFound").then((m) => ({ default: m.NotFound })),
);

function AuthRouteLayout() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <SettingsProvider storageKey="dashboard-settings">
          <ThemeProvider>
            <ToastProvider>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route element={<AuthRouteLayout />}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                  </Route>
                  <Route element={<AppShell />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="/inbox/:emailId" element={<EmailDetail />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/tables/:userId/edit" element={<EditUser />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/components" element={<Components />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/logs" element={<Logs />} />
                    <Route path="/audit-log" element={<AuditLog />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/new" element={<CreatePost />} />
                    <Route path="/blog/:postId" element={<BlogArticle />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/wiki" element={<Wiki />} />
                    <Route path="/wiki/:pageId" element={<WikiArticle />} />
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route
                      path="/secondary-sidebar"
                      element={<SecondarySidebar />}
                    />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            </ToastProvider>
          </ThemeProvider>
        </SettingsProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
