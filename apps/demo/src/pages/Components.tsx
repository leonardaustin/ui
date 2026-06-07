import { useState } from "react";

import {
  Ban,
  Copy,
  Download,
  Edit,
  Eye,
  Heart,
  Layers,
  MoreHorizontal,
  PanelRight,
  Plus,
  Settings,
  Star,
  Trash2,
} from "lucide-react";

import {
  Alert,
  Badge,
  Button,
  Card,
  DetailPanel,
  Dialog,
  DialogActions,
  DropdownMenu,
  Kbd,
  LoadingSpinner,
  MetadataGrid,
  PageHeader,
  SectionHeader,
  SideSheet,
  SplitPaneLayout,
  StatusDot,
  Tabs,
  Tooltip,
  useToast,
} from "@leonardaustin/ui";

export function Components() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [overlayPanelOpen, setOverlayPanelOpen] = useState(false);
  const [inlinePanelOpen, setInlinePanelOpen] = useState(false);
  const { toast } = useToast();

  /* SplitPaneLayout fills the viewport below the top bar and supports
     an inline detail panel docked to the right. */
  return (
    <SplitPaneLayout>
      <SplitPaneLayout.Main className="space-y-8 overflow-y-auto p-4 md:p-6">
        <div className="max-w-3xl space-y-8">
          {/* Page title — uses the shared PageHeader component for consistency. */}
          <PageHeader title="Components" />

          {/* Buttons */}
          <section className="space-y-4">
            <SectionHeader>Buttons</SectionHeader>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="primary">
                  <Plus className="h-3.5 w-3.5" /> Primary
                </Button>
                <Button variant="secondary">
                  <Download className="h-3.5 w-3.5" /> Secondary
                </Button>
                <Button variant="danger">
                  <Trash2 className="h-3.5 w-3.5" /> Danger
                </Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="icon" aria-label="Settings">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="primary" size="sm">
                  Small
                </Button>
                <Button variant="primary" size="md">
                  Medium
                </Button>
                <Button variant="primary" size="lg">
                  Large
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="primary" loading>
                  Loading
                </Button>
                <Button variant="secondary" disabled>
                  Disabled
                </Button>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="space-y-4">
            <SectionHeader>Badges</SectionHeader>
            <div className="flex flex-wrap gap-2">
              <Badge color="green" dot>
                Active
              </Badge>
              <Badge color="yellow" dot>
                Pending
              </Badge>
              <Badge color="red" dot>
                Error
              </Badge>
              <Badge color="blue">Info</Badge>
              <Badge color="purple">Admin</Badge>
              <Badge color="gray">Unknown</Badge>
            </div>
          </section>

          {/* Status Dots */}
          <section className="space-y-4">
            <SectionHeader>Status Indicators</SectionHeader>
            <div className="flex flex-wrap gap-4">
              <StatusDot status="active" label="Active" />
              <StatusDot status="pending" label="Pending" />
              <StatusDot status="inactive" label="Inactive" />
              <StatusDot status="error" label="Error" />
            </div>
          </section>

          {/* Alerts */}
          <section className="space-y-4">
            <SectionHeader>Alerts</SectionHeader>
            <div className="space-y-2">
              <Alert type="success" title="Success" dismissible>
                Operation completed successfully.
              </Alert>
              <Alert type="warning" title="Warning" dismissible>
                This action cannot be easily undone.
              </Alert>
              <Alert type="error" title="Error" dismissible>
                Failed to save changes. Please try again.
              </Alert>
              <Alert type="info" title="Info">
                A new version is available for download.
              </Alert>
            </div>
          </section>

          {/* Cards */}
          <section className="space-y-4">
            <SectionHeader>Cards</SectionHeader>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Card>
                <p className="text-text-primary mb-1 text-xs font-medium">
                  Basic Card
                </p>
                <p className="text-text-secondary text-xs">
                  A simple card with text content.
                </p>
              </Card>
              <Card
                header={
                  <p className="text-text-primary text-xs font-semibold">
                    Card with Header
                  </p>
                }
                footer={
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Cancel
                    </Button>
                    <Button size="sm" variant="primary">
                      Save
                    </Button>
                  </div>
                }
              >
                <p className="text-text-secondary text-xs">
                  Card with header and footer actions.
                </p>
              </Card>
            </div>
          </section>

          {/* Tooltips */}
          <section className="space-y-4">
            <SectionHeader>Tooltips</SectionHeader>
            <div className="flex flex-wrap gap-3">
              <Tooltip content="Top tooltip" placement="top">
                <Button variant="secondary" size="sm">
                  Top
                </Button>
              </Tooltip>
              <Tooltip content="Bottom tooltip" placement="bottom">
                <Button variant="secondary" size="sm">
                  Bottom
                </Button>
              </Tooltip>
              <Tooltip content="Left tooltip" placement="left">
                <Button variant="secondary" size="sm">
                  Left
                </Button>
              </Tooltip>
              <Tooltip content="Right tooltip" placement="right">
                <Button variant="secondary" size="sm">
                  Right
                </Button>
              </Tooltip>
            </div>
          </section>

          {/* Dialog */}
          <section className="space-y-4">
            <SectionHeader>Dialog</SectionHeader>
            <Button variant="secondary" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
            {/* Dialog's `footer` prop places DialogActions at the natural
                footer position without nesting it inside children. */}
            <Dialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              title="Confirm Action"
              footer={
                <DialogActions
                  onCancel={() => setDialogOpen(false)}
                  onConfirm={() => {
                    setDialogOpen(false);
                    toast("success", "Action confirmed!");
                  }}
                />
              }
            >
              <p className="text-text-secondary mb-4 text-xs">
                Are you sure you want to proceed? This action requires
                confirmation.
              </p>
            </Dialog>
          </section>

          {/* Side Panels */}
          <section className="space-y-4">
            <SectionHeader>Side Panels</SectionHeader>
            <div className="space-y-2">
              <p className="text-text-secondary text-xs">
                Two variants: an{" "}
                <strong className="text-text-primary">overlay sheet</strong>{" "}
                that floats above content with a backdrop, and an{" "}
                <strong className="text-text-primary">inline panel</strong> that
                docks beside content and squashes it (like the Tables page).
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setOverlayPanelOpen(true)}
                >
                  <Layers className="h-3.5 w-3.5" /> Overlay Sheet
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setInlinePanelOpen(!inlinePanelOpen)}
                >
                  <PanelRight className="h-3.5 w-3.5" />{" "}
                  {inlinePanelOpen ? "Close" : "Open"} Inline Panel
                </Button>
              </div>
            </div>
            <SideSheet
              open={overlayPanelOpen}
              onClose={() => setOverlayPanelOpen(false)}
              title="Overlay Sheet"
              contentClassName="space-y-3"
              footer={
                <>
                  <Button variant="secondary" size="sm" icon={Edit}>
                    Edit
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setOverlayPanelOpen(false);
                      toast("success", "Saved");
                    }}
                  >
                    Save
                  </Button>
                </>
              }
            >
              <p className="text-text-secondary text-xs">
                This panel slides in from the right and overlays the page with a
                backdrop. Click the backdrop or press Escape to close.
              </p>
              <MetadataGrid
                labelWidth="80px"
                items={[
                  { label: "Name", value: "Alice Chen" },
                  {
                    label: "Role",
                    value: <Badge color="purple">Admin</Badge>,
                  },
                  {
                    label: "Status",
                    value: <StatusDot status="active" label="Active" />,
                  },
                  { label: "Email", value: "alice@example.com" },
                ]}
              />
            </SideSheet>
          </section>

          {/* Dropdown Menu */}
          <section className="space-y-4">
            <SectionHeader>Dropdown Menu</SectionHeader>
            <div className="flex flex-wrap gap-3">
              <DropdownMenu
                trigger={
                  <Button variant="secondary" size="sm">
                    <MoreHorizontal className="h-3.5 w-3.5" /> Actions
                  </Button>
                }
                items={[
                  {
                    label: "Edit",
                    icon: <Edit className="h-3.5 w-3.5" />,
                    shortcut: "⌘E",
                    onClick: () => toast("info", "Edit clicked"),
                  },
                  {
                    label: "Duplicate",
                    icon: <Copy className="h-3.5 w-3.5" />,
                    shortcut: "⌘D",
                    onClick: () => toast("info", "Duplicated"),
                  },
                  {
                    label: "Download",
                    icon: <Download className="h-3.5 w-3.5" />,
                    onClick: () => {},
                  },
                  { divider: true },
                  {
                    label: "Delete",
                    icon: <Trash2 className="h-3.5 w-3.5" />,
                    shortcut: "⌫",
                    onClick: () => toast("error", "Deleted"),
                    danger: true,
                  },
                ]}
              />
              <DropdownMenu
                align="left"
                trigger={
                  <Button variant="icon" size="md" aria-label="More">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                }
                items={[
                  {
                    label: "View",
                    icon: <Eye className="h-3.5 w-3.5" />,
                    onClick: () => {},
                  },
                  {
                    label: "Edit",
                    icon: <Edit className="h-3.5 w-3.5" />,
                    onClick: () => {},
                  },
                  { divider: true },
                  {
                    label: "Disable",
                    icon: <Ban className="h-3.5 w-3.5" />,
                    onClick: () => {},
                    danger: true,
                  },
                ]}
              />
            </div>
          </section>

          {/* Toasts */}
          <section className="space-y-4">
            <SectionHeader>Toasts</SectionHeader>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => toast("success", "Changes saved successfully")}
              >
                Success Toast
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => toast("error", "Failed to connect to server")}
              >
                Error Toast
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => toast("warning", "API rate limit approaching")}
              >
                Warning Toast
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => toast("info", "New update available")}
              >
                Info Toast
              </Button>
            </div>
          </section>

          {/* Tabs */}
          <section className="space-y-4">
            <SectionHeader>Tabs</SectionHeader>
            <Tabs
              tabs={[
                {
                  key: "overview",
                  label: "Overview",
                  content: (
                    <div className="space-y-2">
                      <p className="text-text-primary text-xs font-medium">
                        Overview
                      </p>
                      <p className="text-text-secondary text-xs">
                        This is the overview tab content. Tabs switch between
                        different views of related content without navigating
                        away from the page.
                      </p>
                    </div>
                  ),
                },
                {
                  key: "analytics",
                  label: "Analytics",
                  content: (
                    <div className="space-y-2">
                      <p className="text-text-primary text-xs font-medium">
                        Analytics
                      </p>
                      <p className="text-text-secondary text-xs">
                        Charts, graphs, and performance metrics would appear
                        here. The tab indicator smoothly highlights the active
                        section.
                      </p>
                    </div>
                  ),
                },
                {
                  key: "settings",
                  label: "Settings",
                  content: (
                    <div className="space-y-2">
                      <p className="text-text-primary text-xs font-medium">
                        Settings
                      </p>
                      <p className="text-text-secondary text-xs">
                        Configuration options and preferences for this
                        particular resource. Each tab maintains its own scroll
                        position independently.
                      </p>
                    </div>
                  ),
                },
                {
                  key: "logs",
                  label: "Logs",
                  content: (
                    <div className="space-y-1">
                      <p className="text-text-primary text-xs font-medium">
                        Recent Logs
                      </p>
                      <pre className="bg-bg-tertiary border-border text-2xs-f text-text-secondary rounded border p-3 font-mono leading-relaxed">
                        {`[14:32:01] INFO  Request processed in 42ms
[14:32:00] DEBUG Connection pool: 8/20 active
[14:31:58] WARN  Rate limit 80% for api-key-xxxx
[14:31:55] INFO  Deployment v2.4.1 healthy`}
                      </pre>
                    </div>
                  ),
                },
              ]}
            />
          </section>

          {/* Keyboard Shortcuts */}
          <section className="space-y-4">
            <SectionHeader>Keyboard Shortcuts</SectionHeader>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-text-secondary text-xs">Press</span>
              <Kbd>Cmd</Kbd>
              <span className="text-text-tertiary">+</span>
              <Kbd>K</Kbd>
              <span className="text-text-secondary text-xs">
                to open search
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Kbd>Ctrl</Kbd>
              <span className="text-text-tertiary">+</span>
              <Kbd>S</Kbd>
              <span className="text-text-secondary text-xs">Save</span>
              <span className="mx-2" />
              <Kbd>Esc</Kbd>
              <span className="text-text-secondary text-xs">Close</span>
              <span className="mx-2" />
              <Kbd>Enter</Kbd>
              <span className="text-text-secondary text-xs">Confirm</span>
            </div>
          </section>

          {/* Loading */}
          <section className="space-y-4">
            <SectionHeader>Loading States</SectionHeader>
            <div className="flex items-center gap-8">
              <LoadingSpinner size="sm" className="min-h-0" />
              <LoadingSpinner size="md" className="min-h-0" />
              <LoadingSpinner size="lg" className="min-h-0" />
            </div>
          </section>

          {/* Icons */}
          <section className="space-y-4">
            <SectionHeader>Icon Buttons</SectionHeader>
            <div className="flex flex-wrap gap-2">
              <Button variant="icon" size="sm" aria-label="Like">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="icon" size="md" aria-label="Favourite">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="icon" size="lg" aria-label="Settings">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </section>
        </div>
      </SplitPaneLayout.Main>

      {/* Inline Detail Panel — docks beside content */}
      <DetailPanel
        open={inlinePanelOpen}
        onClose={() => setInlinePanelOpen(false)}
        title="Inline Panel"
      >
        <div className="space-y-3">
          <p className="text-text-secondary text-xs">
            This panel docks inline and squashes the content area, just like the
            Tables page. The width animates smoothly.
          </p>
          {/* MetadataGrid replaces the manual label/value grid. */}
          <MetadataGrid
            labelWidth="80px"
            items={[
              { label: "Name", value: "Alice Chen" },
              { label: "Role", value: <Badge color="purple">Admin</Badge> },
              {
                label: "Status",
                value: <StatusDot status="active" label="Active" />,
              },
              { label: "Email", value: "alice@example.com" },
            ]}
          />
          <div className="border-border flex gap-2 border-t pt-3">
            <Button variant="secondary" size="sm">
              <Edit className="h-3.5 w-3.5" /> Edit
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setInlinePanelOpen(false);
                toast("success", "Saved");
              }}
            >
              Save
            </Button>
          </div>
        </div>
      </DetailPanel>
    </SplitPaneLayout>
  );
}
