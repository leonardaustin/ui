import { useMemo, useState, type DragEvent } from "react";

import {
  Calendar,
  Filter,
  Pencil,
  Plus,
  Tag,
  Trash2,
  User,
} from "lucide-react";

import {
  Avatar,
  Badge,
  Button,
  Dialog,
  FilterDropdown,
  PageHeader,
  SearchInput,
  SplitPaneLayout,
} from "@leonardaustin/ui";
import type { BadgeColor } from "@leonardaustin/ui";

import { KanbanColumn } from "../components/kanban/KanbanColumn";
import { TaskFormDialog } from "../components/kanban/TaskFormDialog";
import {
  assignees,
  columns,
  tasks as initialTasks,
  type ColumnId,
  type KanbanTask,
  type Priority,
} from "../data/kanban";
import { useKanbanState, type TaskFormData } from "../hooks/useKanbanState";

/* ── Constants ─────────────────────────────────────────────── */

const priorityOptions: Priority[] = ["critical", "high", "medium", "low"];

const priorityColor: Record<Priority, BadgeColor> = {
  critical: "red",
  high: "yellow",
  medium: "blue",
  low: "gray",
};

/* ── Component ─────────────────────────────────────────────── */

export function Kanban() {
  const { tasks, moveTask, addTask, updateTask, deleteTask } =
    useKanbanState(initialTasks);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState<string>("All");
  const [assigneeFilter, setAssigneeFilter] = useState<string>("All");
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

  /* Form dialog state */
  const [formOpen, setFormOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [newTaskColumnId, setNewTaskColumnId] = useState<ColumnId>("todo");

  /* ── Derived ──────────────────────────────────── */
  const selectedTask = useMemo(
    () =>
      selectedTaskId
        ? (tasks.find((t) => t.id === selectedTaskId) ?? null)
        : null,
    [tasks, selectedTaskId],
  );

  const editingTask = useMemo(
    () =>
      editingTaskId
        ? (tasks.find((t) => t.id === editingTaskId) ?? null)
        : null,
    [tasks, editingTaskId],
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (
        priorityFilter !== "All" &&
        task.priority !== priorityFilter.toLowerCase()
      )
        return false;
      if (assigneeFilter !== "All" && task.assignee !== assigneeFilter)
        return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          task.title.toLowerCase().includes(q) ||
          task.description.toLowerCase().includes(q) ||
          task.assignee.toLowerCase().includes(q) ||
          task.labels.some((l) => l.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [tasks, search, priorityFilter, assigneeFilter]);

  const tasksByColumn = useMemo(() => {
    const grouped: Record<ColumnId, KanbanTask[]> = {
      backlog: [],
      todo: [],
      "in-progress": [],
      "in-review": [],
      done: [],
    };
    for (const task of filteredTasks) {
      grouped[task.columnId].push(task);
    }
    for (const col of Object.values(grouped)) {
      col.sort((a, b) => a.order - b.order);
    }
    return grouped;
  }, [filteredTasks]);

  const totalVisible = filteredTasks.length;

  /* ── DnD handlers ────────────────────────────── */
  function handleDragStart(e: DragEvent<HTMLDivElement>, taskId: string) {
    e.dataTransfer.setData("text/plain", taskId);
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  function handleDrop(e: DragEvent<HTMLDivElement>, columnId: string) {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");
    if (taskId) {
      moveTask(taskId, columnId as ColumnId);
    }
    setDragOverColumn(null);
  }

  /* ── Create / Edit / Delete ─────────────────── */
  function openNewTaskForm(columnId: ColumnId) {
    setNewTaskColumnId(columnId);
    setEditingTaskId(null);
    setFormOpen(true);
  }

  function openEditForm(task: KanbanTask) {
    setSelectedTaskId(null);
    setEditingTaskId(task.id);
    setFormOpen(true);
  }

  function handleFormSubmit(data: TaskFormData) {
    if (editingTaskId) {
      updateTask(editingTaskId, data);
    } else {
      addTask(data);
    }
    setEditingTaskId(null);
  }

  function handleFormClose() {
    setFormOpen(false);
    setEditingTaskId(null);
  }

  function handleDelete(taskId: string) {
    deleteTask(taskId);
    setSelectedTaskId(null);
  }

  /* ── Render ───────────────────────────────────── */
  return (
    <SplitPaneLayout direction="column">
      <SplitPaneLayout.Main className="gap-4 p-4 md:p-6">
        {/* Page header */}
        <PageHeader
          title="Board"
          actions={
            <div className="flex items-center gap-2">
              <span className="text-text-tertiary text-xs tabular-nums">
                {totalVisible} task{totalVisible !== 1 ? "s" : ""}
              </span>
              <Button
                variant="primary"
                size="sm"
                icon={Plus}
                onClick={() => openNewTaskForm("todo")}
              >
                New Task
              </Button>
            </div>
          }
        />

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-1 items-center gap-3">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search tasks..."
              className="max-w-xs flex-1"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <FilterDropdown
              icon={Filter}
              align="right"
              items={["All", ...priorityOptions].map((p) => ({
                label: p.charAt(0).toUpperCase() + p.slice(1),
                checked: priorityFilter === p,
                onClick: () => setPriorityFilter(p),
              }))}
            >
              Priority
              {priorityFilter !== "All" ? `: ${priorityFilter}` : ""}
            </FilterDropdown>
            <FilterDropdown
              icon={Filter}
              align="right"
              items={["All", ...assignees].map((a) => ({
                label: a,
                checked: assigneeFilter === a,
                onClick: () => setAssigneeFilter(a),
              }))}
            >
              Assignee
              {assigneeFilter !== "All" ? `: ${assigneeFilter}` : ""}
            </FilterDropdown>
          </div>
        </div>

        {/* Board */}
        <div className="flex min-h-0 flex-1 gap-3 overflow-x-auto pb-2">
          {columns.map((col) => (
            <KanbanColumn
              key={col.id}
              column={col}
              tasks={tasksByColumn[col.id]}
              onDrop={handleDrop}
              onCardClick={(task) => setSelectedTaskId(task.id)}
              onAddCard={(colId) => openNewTaskForm(colId as ColumnId)}
              onDragStart={handleDragStart}
              isOver={dragOverColumn === col.id}
              onDragOver={(e) => {
                handleDragOver(e);
                setDragOverColumn(col.id);
              }}
              onDragLeave={() => setDragOverColumn(null)}
            />
          ))}
        </div>
      </SplitPaneLayout.Main>

      {/* View card modal */}
      <Dialog
        open={selectedTask !== null}
        onClose={() => setSelectedTaskId(null)}
        title={selectedTask?.title ?? ""}
        className="max-w-[640px]"
      >
        {selectedTask && (
          <div className="space-y-5">
            {/* Column badge */}
            <div>
              <Badge color="blue">{selectedTask.columnId}</Badge>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h4 className="text-text-secondary text-2xs font-semibold tracking-wider uppercase">
                Description
              </h4>
              <p className="text-text-secondary text-xs leading-relaxed">
                {selectedTask.description || "No description"}
              </p>
            </div>

            {/* Details grid */}
            <div className="border-border grid grid-cols-2 gap-3 border-t pt-4">
              <div className="space-y-1">
                <div className="text-text-tertiary text-2xs flex items-center gap-1.5 font-medium tracking-wider uppercase">
                  <User className="h-3 w-3" />
                  Assignee
                </div>
                <div className="flex items-center gap-2">
                  <Avatar name={selectedTask.assignee} size="sm" />
                  <span className="text-text-primary text-xs">
                    {selectedTask.assignee}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-text-tertiary text-2xs flex items-center gap-1.5 font-medium tracking-wider uppercase">
                  <Filter className="h-3 w-3" />
                  Priority
                </div>
                <Badge color={priorityColor[selectedTask.priority]}>
                  {selectedTask.priority}
                </Badge>
              </div>

              <div className="space-y-1">
                <div className="text-text-tertiary text-2xs flex items-center gap-1.5 font-medium tracking-wider uppercase">
                  <Calendar className="h-3 w-3" />
                  Due Date
                </div>
                <span className="text-text-primary font-mono text-xs">
                  {selectedTask.dueDate}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-text-tertiary text-2xs flex items-center gap-1.5 font-medium tracking-wider uppercase">
                  <Tag className="h-3 w-3" />
                  Labels
                </div>
                {selectedTask.labels.length > 0 ? (
                  <div className="flex flex-wrap gap-1">
                    {selectedTask.labels.map((label) => (
                      <Badge key={label} color="gray">
                        {label}
                      </Badge>
                    ))}
                  </div>
                ) : (
                  <span className="text-text-tertiary text-xs">None</span>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="border-border flex gap-2 border-t pt-4">
              <Button
                variant="secondary"
                size="sm"
                icon={Pencil}
                onClick={() => openEditForm(selectedTask)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                icon={Trash2}
                onClick={() => handleDelete(selectedTask.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        )}
      </Dialog>

      {/* Create / Edit form dialog */}
      <TaskFormDialog
        open={formOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
        title={editingTask ? "Edit Task" : "New Task"}
        initial={
          editingTask
            ? {
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
                assignee: editingTask.assignee,
                labels: editingTask.labels,
                dueDate: editingTask.dueDate,
                columnId: editingTask.columnId,
              }
            : {
                title: "",
                description: "",
                priority: "medium",
                assignee: "Alice Chen",
                labels: [],
                dueDate: "",
                columnId: newTaskColumnId,
              }
        }
      />
    </SplitPaneLayout>
  );
}
