import { useState } from "react";

import type { Email, EmailCategory, EmailLabel } from "../data/emails";

export function useEmailState(initialEmails: Email[]) {
  const [emails, setEmails] = useState(initialEmails);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  function updateEmail(id: string, updates: Partial<Email>) {
    setEmails((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updates } : e)),
    );
  }

  function updateEmails(ids: string[], updates: Partial<Email>) {
    const idSet = new Set(ids);
    setEmails((prev) =>
      prev.map((e) => (idSet.has(e.id) ? { ...e, ...updates } : e)),
    );
  }

  const toggleStar = (id: string) => {
    const email = emails.find((e) => e.id === id);
    if (email) updateEmail(id, { isStarred: !email.isStarred });
  };

  const toggleRead = (id: string) => {
    const email = emails.find((e) => e.id === id);
    if (email) updateEmail(id, { isRead: !email.isRead });
  };

  const markRead = (ids: string[]) => updateEmails(ids, { isRead: true });
  const markUnread = (ids: string[]) => updateEmails(ids, { isRead: false });

  const archiveEmails = (ids: string[]) => {
    const idSet = new Set(ids);
    setEmails((prev) => prev.filter((e) => !idSet.has(e.id)));
    setSelectedIds((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const deleteEmails = (ids: string[]) => {
    updateEmails(ids, { category: "trash" });
    setSelectedIds((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const moveToCategory = (ids: string[], category: EmailCategory) => {
    updateEmails(ids, { category });
    setSelectedIds((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const addLabel = (ids: string[], label: EmailLabel) => {
    const idSet = new Set(ids);
    setEmails((prev) =>
      prev.map((e) =>
        idSet.has(e.id) && !e.labels.includes(label)
          ? { ...e, labels: [...e.labels, label] }
          : e,
      ),
    );
  };

  const removeLabel = (ids: string[], label: EmailLabel) => {
    const idSet = new Set(ids);
    setEmails((prev) =>
      prev.map((e) =>
        idSet.has(e.id)
          ? { ...e, labels: e.labels.filter((l) => l !== label) }
          : e,
      ),
    );
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAll = (ids: string[]) => {
    setSelectedIds(new Set(ids));
  };

  const selectNone = () => {
    setSelectedIds(new Set());
  };

  const selectRead = (visibleEmails: Email[]) => {
    setSelectedIds(
      new Set(visibleEmails.filter((e) => e.isRead).map((e) => e.id)),
    );
  };

  const selectUnread = (visibleEmails: Email[]) => {
    setSelectedIds(
      new Set(visibleEmails.filter((e) => !e.isRead).map((e) => e.id)),
    );
  };

  return {
    emails,
    selectedIds,
    toggleStar,
    toggleRead,
    markRead,
    markUnread,
    archiveEmails,
    deleteEmails,
    moveToCategory,
    addLabel,
    removeLabel,
    toggleSelect,
    selectAll,
    selectNone,
    selectRead,
    selectUnread,
  };
}
