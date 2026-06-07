import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Ban,
  Copy,
  Edit,
  Eye,
  Filter,
  MoreHorizontal,
  Search,
  Trash2,
} from "lucide-react";

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  ColumnPicker,
  DetailPanel,
  DropdownMenu,
  EmptyState,
  FilterDropdown,
  MetadataGrid,
  PageHeader,
  PaginationBar,
  ResourceTable,
  SearchInput,
  sortRows,
  SplitPaneLayout,
  StatusDot,
  Toolbar,
  type Column,
  type SortDir,
} from "@leonardaustin/ui";

import { users, type User } from "../data/demo";

/* Page-size options — overrides PaginationBar's default (10/25/50)
   because this table starts at 5 rows for a compact initial view. */
const PAGE_SIZE_OPTIONS = [
  { value: "5", label: "5 per page" },
  { value: "10", label: "10 per page" },
  { value: "25", label: "25 per page" },
];

const roleOptions = ["All", "Admin", "Editor", "Viewer"] as const;
const statusOptions = ["All", "active", "inactive", "pending"] as const;

export function Tables() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [roleFilter, setRoleFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [panelUser, setPanelUser] = useState<User | null>(null);
  const [hiddenCols, setHiddenCols] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  function toggleCol(key: string) {
    setHiddenCols((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const filtered = useMemo(
    () =>
      users.filter((u) => {
        if (roleFilter !== "All" && u.role !== roleFilter) return false;
        if (statusFilter !== "All" && u.status !== statusFilter) return false;
        if (search) {
          const q = search.toLowerCase();
          return (
            u.name.toLowerCase().includes(q) ||
            u.email.toLowerCase().includes(q) ||
            u.department.toLowerCase().includes(q)
          );
        }
        return true;
      }),
    [search, roleFilter, statusFilter],
  );

  function toggleSelect(id: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleSortChange(key: string | null, dir: SortDir) {
    setSortKey(key);
    setSortDir(dir);
    // Reset to the first page on sort change, matching how search/filter
    // changes reset pagination — otherwise the active page can point past
    // the end of the freshly reordered list.
    setPage(1);
  }

  const columns: Column<User>[] = [
    {
      key: "select",
      header: "",
      width: "40px",
      interactive: true,
      render: (row) => (
        <Checkbox
          checked={selected.has(row.id)}
          onChange={() => toggleSelect(row.id)}
        />
      ),
    },
    {
      key: "name",
      header: "Name",
      sortable: true,
      getValue: (row) => row.name,
      render: (row) => <span className="font-medium">{row.name}</span>,
    },
    {
      key: "status",
      header: "Status",
      sortable: true,
      getValue: (row) => row.status,
      render: (row) => (
        <StatusDot
          status={
            row.status === "active"
              ? "active"
              : row.status === "pending"
                ? "pending"
                : "inactive"
          }
          label={row.status}
        />
      ),
    },
    {
      key: "role",
      header: "Role",
      sortable: true,
      getValue: (row) => row.role,
      render: (row) => {
        const color =
          row.role === "Admin"
            ? "purple"
            : row.role === "Editor"
              ? "blue"
              : "gray";
        return <Badge color={color}>{row.role}</Badge>;
      },
    },
    {
      key: "email",
      header: "Email",
      render: (row) => <span className="text-text-secondary">{row.email}</span>,
    },
    {
      key: "department",
      header: "Department",
      sortable: true,
      getValue: (row) => row.department,
      render: (row) => row.department,
    },
    {
      key: "lastActive",
      header: "Last Active",
      width: "110px",
      render: (row) => (
        <span className="text-text-tertiary">{row.lastActive}</span>
      ),
    },
    {
      key: "actions",
      header: "",
      width: "40px",
      interactive: true,
      render: (row) => (
        <DropdownMenu
          trigger={
            <button className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded">
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          }
          items={[
            {
              label: "View details",
              icon: <Eye className="h-3.5 w-3.5" />,
              onClick: () => setPanelUser(row),
            },
            {
              label: "Edit",
              icon: <Edit className="h-3.5 w-3.5" />,
              onClick: () => navigate(`/tables/${row.id}/edit`),
            },
            {
              label: "Copy email",
              icon: <Copy className="h-3.5 w-3.5" />,
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
      ),
    },
  ];

  // Sort the FULL filtered list before slicing into a page — sorting only the
  // current page slice would reorder just the visible rows. sortRows reuses
  // ResourceTable's comparison semantics so controlled and uncontrolled tables
  // order identically. Plain computation (no useMemo): `columns` is rebuilt
  // each render anyway and the dataset is small.
  const sorted = sortRows(filtered, columns, sortKey, sortDir);
  const paged = sorted.slice((page - 1) * pageSize, page * pageSize);

  const allSelected =
    paged.length > 0 && paged.every((u) => selected.has(u.id));
  const someSelected = paged.some((u) => selected.has(u.id));

  function toggleAll() {
    if (allSelected) {
      setSelected((prev) => {
        const next = new Set(prev);
        paged.forEach((u) => next.delete(u.id));
        return next;
      });
    } else {
      setSelected((prev) => {
        const next = new Set(prev);
        paged.forEach((u) => next.add(u.id));
        return next;
      });
    }
  }

  return (
    <SplitPaneLayout>
      {/* Main scrollable area — uses SplitPaneLayout.Main for consistent
          full-viewport-height behavior across all split-pane pages. */}
      <SplitPaneLayout.Main className="space-y-4 overflow-y-auto p-4 md:p-6">
        {/* Page header — only shows the delete action when rows are selected. */}
        <PageHeader
          title="Users"
          actions={
            selected.size > 0 ? (
              <Button icon={Trash2} hideLabel variant="danger" size="sm">
                Delete ({selected.size})
              </Button>
            ) : undefined
          }
        />

        {/* Search + filters */}
        <Toolbar
          start={
            <>
              <SearchInput
                value={search}
                onChange={(v) => {
                  setSearch(v);
                  setPage(1);
                }}
                placeholder="Search users..."
                className="max-w-xs"
              />
              {someSelected && (
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected && !allSelected}
                  onChange={toggleAll}
                  label="Select all"
                />
              )}
            </>
          }
          end={
            <>
              {/* Filter dropdowns — FilterDropdown combines FilterButton +
              DropdownMenu into a single component for less boilerplate. */}
              <FilterDropdown
                icon={Filter}
                align="right"
                items={roleOptions.map((r) => ({
                  label: r,
                  checked: roleFilter === r,
                  onClick: () => {
                    setRoleFilter(r);
                    setPage(1);
                  },
                }))}
              >
                Role{roleFilter !== "All" ? `: ${roleFilter}` : ""}
              </FilterDropdown>
              <FilterDropdown
                icon={Filter}
                align="right"
                items={statusOptions.map((s) => ({
                  label:
                    s === "All"
                      ? "All"
                      : s.charAt(0).toUpperCase() + s.slice(1),
                  checked: statusFilter === s,
                  onClick: () => {
                    setStatusFilter(s);
                    setPage(1);
                  },
                }))}
              >
                Status{statusFilter !== "All" ? `: ${statusFilter}` : ""}
              </FilterDropdown>
              <ColumnPicker
                columns={columns.filter(
                  (c) => c.key !== "select" && c.key !== "actions",
                )}
                hidden={hiddenCols}
                onToggle={toggleCol}
              />
            </>
          }
        />

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search className="h-5 w-5" />}
            title="No results found"
            description={
              search
                ? `No users match "${search}"`
                : "No users match the selected filters"
            }
            action={
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSearch("");
                  setRoleFilter("All");
                  setStatusFilter("All");
                }}
              >
                Clear filters
              </Button>
            }
          />
        ) : (
          <>
            <ResourceTable
              data={paged}
              columns={columns.filter((c) => !hiddenCols.has(c.key))}
              getRowId={(row) => row.id}
              onRowClick={(row) => setPanelUser(row)}
              sortKey={sortKey}
              sortDir={sortDir}
              onSortChange={handleSortChange}
            />
            {/* Pagination footer — combines page-size selector, item count,
                and prev/next navigation into a single reusable bar. */}
            <PaginationBar
              page={page}
              pageSize={pageSize}
              total={filtered.length}
              pageSizeOptions={PAGE_SIZE_OPTIONS}
              onPageChange={setPage}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setPage(1);
              }}
            />
          </>
        )}
      </SplitPaneLayout.Main>

      {/* Right-side detail panel — slides in from the right when a user
          row is clicked, rendered inside SplitPaneLayout alongside Main. */}
      <DetailPanel
        open={panelUser !== null}
        onClose={() => setPanelUser(null)}
        title={panelUser?.name ?? ""}
      >
        {panelUser && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar name={panelUser.name} size="lg" />
              <div>
                <p className="text-text-primary text-sm font-semibold">
                  {panelUser.name}
                </p>
                <p className="text-text-tertiary text-xs">
                  {panelUser.role} · {panelUser.department}
                </p>
              </div>
            </div>

            {/* User metadata — uses MetadataGrid for consistent two-column
                label/value layout across all detail panels. */}
            <MetadataGrid
              items={[
                { label: "Email", value: panelUser.email },
                {
                  label: "Status",
                  value: (
                    <StatusDot
                      status={
                        panelUser.status === "active"
                          ? "active"
                          : panelUser.status === "pending"
                            ? "pending"
                            : "inactive"
                      }
                      label={panelUser.status}
                    />
                  ),
                },
                {
                  label: "Role",
                  value: (
                    <Badge
                      color={
                        panelUser.role === "Admin"
                          ? "purple"
                          : panelUser.role === "Editor"
                            ? "blue"
                            : "gray"
                      }
                    >
                      {panelUser.role}
                    </Badge>
                  ),
                },
                { label: "Department", value: panelUser.department },
                { label: "Last Active", value: panelUser.lastActive },
              ]}
            />

            <div className="border-border flex gap-2 border-t pt-3">
              <Button
                icon={Edit}
                variant="secondary"
                size="sm"
                onClick={() => navigate(`/tables/${panelUser.id}/edit`)}
              >
                Edit
              </Button>
              <Button variant="danger" size="sm">
                <Ban className="h-3.5 w-3.5" /> Disable
              </Button>
            </div>
          </div>
        )}
      </DetailPanel>
    </SplitPaneLayout>
  );
}
