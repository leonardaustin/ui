/**
 * EditUser — a templated form page for editing a user record.
 *
 * Demonstrates how to build a typical CRUD edit form using the template's
 * shared components. The page loads a user by ID from the URL, populates
 * the form fields, and provides save/cancel actions.
 *
 * Key patterns shown:
 * - BackLink for parent navigation
 * - PageHeader with save/cancel actions
 * - SectionHeader to divide form sections
 * - TextInput, Select, Toggle for form fields
 * - DangerZone for destructive actions
 * - Dialog + DialogActions for confirmation
 * - Toast notifications for feedback
 * - Responsive grid layout (1 col mobile, 2 col desktop)
 *
 * In a real application, you would replace the local state with a form
 * library (e.g. react-hook-form) and wire save/delete to API calls.
 */

import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Mail, Save, User, X } from "lucide-react";

import {
  Avatar,
  BackLink,
  Badge,
  Button,
  DangerZone,
  Dialog,
  DialogActions,
  PageHeader,
  SectionHeader,
  Select,
  Textarea,
  TextInput,
  Toggle,
  useToast,
} from "@leonardaustin/ui";

import { users, type User as UserType } from "../data/demo";

/* ── Role / department option lists ─────────────────────────────────── */

const roleOptions = [
  { value: "Admin", label: "Admin" },
  { value: "Editor", label: "Editor" },
  { value: "Viewer", label: "Viewer" },
];

const departmentOptions = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Operations", label: "Operations" },
];

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
  { value: "pending", label: "Pending" },
];

/* ── Route wrapper ──────────────────────────────────────────────────── */

/**
 * EditUser resolves the userId param and keys the form by it.
 * The `key={userId}` forces React to remount EditUserForm when
 * navigating between different users (e.g. /tables/1/edit → /tables/2/edit),
 * which resets all useState values to the new user's data.
 */
export function EditUser() {
  const { userId } = useParams<{ userId: string }>();
  const user = useMemo(
    () => users.find((u) => u.id === Number(userId)) ?? null,
    [userId],
  );

  if (!user) {
    return (
      <div className="max-w-2xl space-y-4">
        <BackLink to="/tables">Back to Users</BackLink>
        <p className="text-text-secondary text-sm">User not found.</p>
      </div>
    );
  }

  return <EditUserForm key={userId} user={user} />;
}

/* ── Form component ─────────────────────────────────────────────────── */

function EditUserForm({ user }: { user: UserType }) {
  const navigate = useNavigate();
  const { toast } = useToast();

  /* ── Form state ─────────────────────────────────────────────────── */

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [department, setDepartment] = useState(user.department);
  const [status, setStatus] = useState(user.status);
  const [bio, setBio] = useState("");
  const [sendNotification, setSendNotification] = useState(true);

  /* ── Validation ─────────────────────────────────────────────────── */

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!email.includes("@")) e.email = "Invalid email address";
    return e;
  }, [name, email]);

  const hasErrors = Object.keys(errors).length > 0;

  /* ── Dirty tracking — detect unsaved changes ────────────────────── */

  const isDirty = useMemo(() => {
    return (
      name !== user.name ||
      email !== user.email ||
      role !== user.role ||
      department !== user.department ||
      status !== user.status ||
      bio !== ""
    );
  }, [name, email, role, department, status, bio, user]);

  /* ── Dialog state ───────────────────────────────────────────────── */

  const [deleteOpen, setDeleteOpen] = useState(false);

  /* ── Handlers ───────────────────────────────────────────────────── */

  function handleSave() {
    if (hasErrors) {
      toast("error", "Please fix the validation errors before saving");
      return;
    }
    /* In a real app, this would call an API endpoint.
       For the demo, we just show a success toast. */
    toast("success", `Changes saved for ${name}`);
    navigate("/tables");
  }

  function handleDelete() {
    setDeleteOpen(false);
    toast("error", "User deletion is disabled in demo");
    navigate("/tables");
  }

  /* ── Role badge color helper ────────────────────────────────────── */

  const roleBadgeColor =
    role === "Admin" ? "purple" : role === "Editor" ? "blue" : "gray";

  return (
    <div className="max-w-2xl space-y-6">
      <PageHeader
        title={`Edit ${user.name}`}
        actions={
          <>
            <Button
              icon={X}
              hideLabel
              variant="ghost"
              size="sm"
              onClick={() => navigate("/tables")}
            >
              Cancel
            </Button>
            <Button
              icon={Save}
              hideLabel
              variant="primary"
              size="sm"
              disabled={!isDirty || hasErrors}
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </>
        }
      />

      {/* ── User identity summary ─────────────────────────────────── */}
      <div className="flex items-center gap-3">
        <Avatar name={name || "?"} size="lg" />
        <div>
          <p className="text-text-primary text-sm font-semibold">
            {name || <span className="text-text-tertiary italic">No name</span>}
          </p>
          <p className="text-text-tertiary text-xs">{email}</p>
        </div>
        <Badge color={roleBadgeColor} className="ml-auto">
          {role}
        </Badge>
      </div>

      {/* ── Personal Information ──────────────────────────────────── */}
      <section className="space-y-4">
        <SectionHeader>Personal Information</SectionHeader>

        {/* Responsive 2-column grid — stacks on mobile, side-by-side on sm+.
            This is the standard layout for form fields in this template. */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput
            label="Full Name"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
            icon={<User className="h-3.5 w-3.5" />}
          />
          <TextInput
            label="Email Address"
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            icon={<Mail className="h-3.5 w-3.5" />}
          />
        </div>
      </section>

      {/* ── Role & Access ────────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionHeader>Role & Access</SectionHeader>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Select — native dropdown for role assignment. */}
          <Select
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value as UserType["role"])}
            options={roleOptions}
          />
          <Select
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            options={departmentOptions}
          />
        </div>

        <Select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value as UserType["status"])}
          options={statusOptions}
          className="max-w-xs"
        />
      </section>

      {/* ── Additional Details ────────────────────────────────────── */}
      <section className="space-y-4">
        <SectionHeader>Additional Details</SectionHeader>

        {/* Textarea — for longer-form content like a bio or notes. */}
        <Textarea
          label="Bio / Notes"
          placeholder="Add a short bio or notes about this user..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          maxLength={500}
          showCount
        />

        {/* Toggle — for boolean settings within the form. */}
        <Toggle
          checked={sendNotification}
          onChange={setSendNotification}
          label="Send email notification on save"
        />
      </section>

      {/* ── Danger Zone ──────────────────────────────────────────── */}
      <DangerZone description="Permanently delete this user and all their associated data. This cannot be undone.">
        <Button variant="danger" onClick={() => setDeleteOpen(true)}>
          Delete User
        </Button>
      </DangerZone>

      {/* Delete confirmation dialog — uses the `footer` prop to place
          DialogActions at the dialog's footer position. */}
      <Dialog
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title="Delete User"
        footer={
          <DialogActions
            onCancel={() => setDeleteOpen(false)}
            confirmLabel="Delete User"
            confirmVariant="danger"
            onConfirm={handleDelete}
          />
        }
      >
        <p className="text-text-secondary mb-4 text-xs">
          Are you sure you want to delete <strong>{user.name}</strong>? This
          will permanently remove their account, permissions, and all associated
          data.
        </p>
      </Dialog>
    </div>
  );
}
