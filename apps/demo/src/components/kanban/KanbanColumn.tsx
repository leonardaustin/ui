import type { DragEvent } from "react";

import { Plus } from "lucide-react";

import { Button, cn } from "@leonardaustin/ui";

import type { KanbanColumnDef, KanbanTask } from "../../data/kanban";
import { KanbanCard } from "./KanbanCard";

interface KanbanColumnProps {
  column: KanbanColumnDef;
  tasks: KanbanTask[];
  onDrop: (e: DragEvent<HTMLDivElement>, columnId: string) => void;
  onCardClick: (task: KanbanTask) => void;
  onAddCard: (columnId: string) => void;
  onDragStart: (e: DragEvent<HTMLDivElement>, taskId: string) => void;
  isOver: boolean;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave: () => void;
}

export function KanbanColumn({
  column,
  tasks,
  onDrop,
  onCardClick,
  onAddCard,
  onDragStart,
  isOver,
  onDragOver,
  onDragLeave,
}: KanbanColumnProps) {
  const overWipLimit =
    column.wipLimit !== undefined && tasks.length >= column.wipLimit;

  return (
    <div
      className={cn(
        "flex max-w-[320px] min-w-[280px] shrink-0 flex-col",
        isOver && "border-accent rounded-md border border-dashed",
      )}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, column.id)}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <span className="text-text-primary text-xs font-semibold">
            {column.title}
          </span>
          <span className="text-text-tertiary text-2xs">{tasks.length}</span>
          {overWipLimit && (
            <span className="text-red text-2xs font-medium">
              WIP {tasks.length}/{column.wipLimit}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          icon={Plus}
          hideLabel
          onClick={() => onAddCard(column.id)}
        >
          Add
        </Button>
      </div>

      {/* Card list */}
      <div className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {tasks.length === 0 ? (
          <div className="text-text-disabled flex flex-1 items-center justify-center py-8 text-xs">
            No tasks
          </div>
        ) : (
          tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              onDragStart={onDragStart}
              onClick={onCardClick}
            />
          ))
        )}
      </div>
    </div>
  );
}
