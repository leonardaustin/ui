import { useState } from "react";

import {
  Badge,
  Button,
  cn,
  DatePicker,
  Dialog,
  SelectDropdown,
  Textarea,
  TextInput,
} from "@leonardaustin/ui";

import {
  allLabels,
  assignees,
  columns,
  type ColumnId,
  type Priority,
} from "../../data/kanban";
import type { TaskFormData } from "../../hooks/useKanbanState";

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatShortDate(date: Date): string {
  return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}`;
}

function parseShortDate(str: string): Date | null {
  const match = str.match(/^(\w+)\s+(\d+)$/);
  if (!match) return null;
  const monthIdx = MONTH_NAMES.findIndex(
    (m) => m.toLowerCase() === match[1].toLowerCase(),
  );
  if (monthIdx === -1) return null;
  return new Date(new Date().getFullYear(), monthIdx, parseInt(match[2], 10));
}

interface TaskFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: TaskFormData) => void;
  /** Pre-filled values for editing. Omit for new task. */
  initial?: TaskFormData;
  title: string;
}

const priorityOptions = [
  { value: "critical", label: "Critical" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const columnOptions = columns.map((c) => ({
  value: c.id,
  label: c.title,
}));

const assigneeOptions = assignees.map((a) => ({
  value: a,
  label: a,
}));

export function TaskFormDialog({
  open,
  onClose,
  onSubmit,
  initial,
  title,
}: TaskFormDialogProps) {
  const [taskTitle, setTaskTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [priority, setPriority] = useState<string>(
    initial?.priority ?? "medium",
  );
  const [assignee, setAssignee] = useState(initial?.assignee ?? assignees[0]);
  const [columnId, setColumnId] = useState<string>(initial?.columnId ?? "todo");
  const [dueDate, setDueDate] = useState<Date | null>(
    initial?.dueDate ? (parseShortDate(initial.dueDate) ?? null) : null,
  );
  const [selectedLabels, setSelectedLabels] = useState<Set<string>>(
    new Set(initial?.labels ?? []),
  );

  function toggleLabel(label: string) {
    setSelectedLabels((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }

  function handleSubmit() {
    if (!taskTitle.trim()) return;
    onSubmit({
      title: taskTitle.trim(),
      description: description.trim(),
      priority: priority as Priority,
      assignee,
      labels: Array.from(selectedLabels),
      dueDate: dueDate ? formatShortDate(dueDate) : "No date",
      columnId: columnId as ColumnId,
    });
    onClose();
  }

  const canSubmit = taskTitle.trim().length > 0;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      className="max-w-[560px]"
    >
      <div className="space-y-4">
        <TextInput
          label="Title"
          placeholder="Task title..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          autoFocus
        />

        <Textarea
          label="Description"
          placeholder="What needs to be done..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={500}
          showCount
        />

        <div className="grid grid-cols-2 gap-3">
          <SelectDropdown
            label="Column"
            value={columnId}
            onChange={setColumnId}
            options={columnOptions}
          />
          <SelectDropdown
            label="Priority"
            value={priority}
            onChange={setPriority}
            options={priorityOptions}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SelectDropdown
            label="Assignee"
            value={assignee}
            onChange={setAssignee}
            options={assigneeOptions}
          />
          <DatePicker
            label="Due Date"
            value={dueDate}
            onChange={setDueDate}
            placeholder="Pick a date..."
          />
        </div>

        {/* Labels */}
        <div className="flex flex-col gap-1.5">
          <span className="text-text-secondary text-xs font-medium">
            Labels
          </span>
          <div className="flex flex-wrap gap-1.5">
            {allLabels.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => toggleLabel(label)}
                className={cn(
                  "text-2xs cursor-pointer rounded-md border px-2 py-0.5 font-medium transition-colors duration-[100ms]",
                  selectedLabels.has(label)
                    ? "border-accent bg-accent-muted text-accent"
                    : "border-border bg-bg-tertiary text-text-secondary hover:border-border-strong",
                )}
              >
                {label}
              </button>
            ))}
          </div>
          {selectedLabels.size > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {Array.from(selectedLabels).map((label) => (
                <Badge key={label} color="gray">
                  {label}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="border-border flex justify-end gap-2 border-t pt-4">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            {initial ? "Save Changes" : "Create Task"}
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
