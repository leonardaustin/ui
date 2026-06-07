import { useState } from "react";

import type { ColumnId, KanbanTask, Priority } from "../data/kanban";

let nextId = 100;

export interface TaskFormData {
  title: string;
  description: string;
  priority: Priority;
  assignee: string;
  labels: string[];
  dueDate: string;
  columnId: ColumnId;
}

export function useKanbanState(initialTasks: KanbanTask[]) {
  const [tasks, setTasks] = useState(initialTasks);

  function moveTask(taskId: string, targetColumnId: ColumnId) {
    setTasks((prev) => {
      const taskIndex = prev.findIndex((t) => t.id === taskId);
      if (taskIndex === -1) return prev;
      if (prev[taskIndex].columnId === targetColumnId) return prev;

      const maxOrder = prev
        .filter((t) => t.columnId === targetColumnId)
        .reduce((max, t) => Math.max(max, t.order), -1);

      return prev.map((t) =>
        t.id === taskId
          ? { ...t, columnId: targetColumnId, order: maxOrder + 1 }
          : t,
      );
    });
  }

  function addTask(data: TaskFormData) {
    setTasks((prev) => {
      const maxOrder = prev
        .filter((t) => t.columnId === data.columnId)
        .reduce((max, t) => Math.max(max, t.order), -1);

      const newTask: KanbanTask = {
        id: `task-${nextId++}`,
        ...data,
        order: maxOrder + 1,
      };

      return [...prev, newTask];
    });
  }

  function updateTask(taskId: string, data: TaskFormData) {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, ...data } : t)),
    );
  }

  function deleteTask(taskId: string) {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  }

  return { tasks, moveTask, addTask, updateTask, deleteTask };
}
