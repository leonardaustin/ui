import type { DragEvent } from "react";

import { Avatar, Badge, cn, type BadgeColor } from "@leonardaustin/ui";

import type { KanbanTask, Priority } from "../../data/kanban";

const priorityColor: Record<Priority, BadgeColor> = {
  critical: "red",
  high: "yellow",
  medium: "blue",
  low: "gray",
};

const priorityBorderColor: Record<Priority, string> = {
  critical: "border-l-red",
  high: "border-l-yellow",
  medium: "border-l-blue",
  low: "border-l-border",
};

interface KanbanCardProps {
  task: KanbanTask;
  onDragStart: (e: DragEvent<HTMLDivElement>, taskId: string) => void;
  onClick: (task: KanbanTask) => void;
}

export function KanbanCard({ task, onDragStart, onClick }: KanbanCardProps) {
  return (
    <div
      draggable="true"
      onDragStart={(e) => onDragStart(e, task.id)}
      onClick={() => onClick(task)}
      className={cn(
        "bg-bg-tertiary border-border cursor-grab rounded-md border border-l-[3px] p-3",
        priorityBorderColor[task.priority],
        "hover:bg-bg-hover transition-none",
        "active:cursor-grabbing active:opacity-50",
      )}
    >
      {/* Title */}
      <p className="text-text-primary text-xs font-medium">{task.title}</p>

      {/* Labels */}
      {task.labels.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {task.labels.map((label) => (
            <Badge key={label} color="gray">
              {label}
            </Badge>
          ))}
        </div>
      )}

      {/* Footer: assignee + due date */}
      <div className="mt-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Avatar name={task.assignee} size="sm" />
          <Badge color={priorityColor[task.priority]}>{task.priority}</Badge>
        </div>
        <span className="text-text-tertiary text-2xs font-mono">
          {task.dueDate}
        </span>
      </div>
    </div>
  );
}
