import { Fragment, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { ChevronRight, FileText, Tag } from "lucide-react";

import {
  Badge,
  cn,
  FilterDropdown,
  formatDateShort,
  PageHeader,
  SearchInput,
} from "@leonardaustin/ui";

import {
  allWikiTags,
  buildWikiTree,
  getAncestors,
  wikiPages,
  type WikiTreeNode,
} from "../data/wiki";

/* ── Flat search result row ──────────────────────────────────────── */

function SearchResult({ page }: { page: (typeof wikiPages)[number] }) {
  const ancestors = getAncestors(page.id, wikiPages);

  return (
    <Link
      to={`/wiki/${page.id}`}
      className="group hover:bg-bg-hover flex items-center justify-between gap-3 rounded-md px-2 py-1.5 transition-colors duration-[100ms]"
    >
      <div className="flex min-w-0 items-center gap-2">
        <span className="shrink-0 text-xs">{page.icon ?? ""}</span>
        {!page.icon && (
          <FileText className="text-text-tertiary h-3.5 w-3.5 shrink-0" />
        )}
        <div className="min-w-0">
          <span className="text-text-primary text-xs group-hover:underline">
            {page.title}
          </span>
          {ancestors.length > 0 && (
            <span className="text-text-disabled text-2xs ml-2">
              {ancestors.map((a) => a.title).join(" / ")}
            </span>
          )}
        </div>
      </div>
      <span className="text-text-tertiary text-2xs shrink-0 font-mono">
        {formatDateShort(page.updatedAt)}
      </span>
    </Link>
  );
}

/* ── Tree item (recursive) ───────────────────────────────────────── */

function WikiTreeItem({
  node,
  depth,
  expanded,
  onToggle,
  selectedTag,
}: {
  node: WikiTreeNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (id: string) => void;
  selectedTag: string | null;
}) {
  const hasChildren = node.children.length > 0;
  const isExpanded = expanded.has(node.page.id);

  return (
    <Fragment>
      <div
        className="group hover:bg-bg-hover flex items-center justify-between gap-2 rounded-md py-1 transition-colors duration-[100ms]"
        style={{ paddingLeft: `${depth * 20 + 8}px`, paddingRight: 8 }}
      >
        <div className="flex min-w-0 items-center gap-1.5">
          {/* Expand/collapse toggle */}
          <button
            type="button"
            onClick={() => onToggle(node.page.id)}
            className={cn(
              "text-text-tertiary hover:bg-bg-active flex h-5 w-5 shrink-0 items-center justify-center rounded transition-colors duration-[100ms]",
              !hasChildren && "invisible",
            )}
          >
            <ChevronRight
              className={cn(
                "h-3 w-3 transition-transform duration-[100ms]",
                isExpanded && "rotate-90",
              )}
            />
          </button>

          {/* Icon */}
          {node.page.icon ? (
            <span className="shrink-0 text-xs">{node.page.icon}</span>
          ) : (
            <FileText className="text-text-tertiary h-3.5 w-3.5 shrink-0" />
          )}

          {/* Title link */}
          <Link
            to={`/wiki/${node.page.id}`}
            className="text-text-primary text-xs hover:underline"
          >
            {node.page.title}
          </Link>

          {/* Tags — only when a tag filter is active */}
          {selectedTag && node.page.tags.includes(selectedTag) && (
            <Badge color="gray">{selectedTag}</Badge>
          )}
        </div>

        {/* Updated date — visible on hover */}
        <span className="text-text-tertiary text-2xs shrink-0 font-mono opacity-0 transition-opacity duration-[100ms] group-hover:opacity-100">
          {formatDateShort(node.page.updatedAt)}
        </span>
      </div>

      {/* Children */}
      {isExpanded &&
        node.children.map((child) => (
          <WikiTreeItem
            key={child.page.id}
            node={child}
            depth={depth + 1}
            expanded={expanded}
            onToggle={onToggle}
            selectedTag={selectedTag}
          />
        ))}
    </Fragment>
  );
}

/* ── Wiki index page ─────────────────────────────────────────────── */

export function Wiki() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    // Default: expand all root-level pages
    return new Set(
      wikiPages.filter((p) => p.parentId === null).map((p) => p.id),
    );
  });

  const tree = useMemo(() => buildWikiTree(wikiPages), []);

  const filteredPages = useMemo(() => {
    return wikiPages.filter((page) => {
      if (selectedTag && !page.tags.includes(selectedTag)) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          page.title.toLowerCase().includes(q) ||
          page.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [search, selectedTag]);

  const isSearching = search.length > 0;

  function toggleExpand(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  // When tag filter is active without search, expand all ancestors of matching pages
  const effectiveExpanded = useMemo(() => {
    if (!selectedTag || isSearching) return expanded;
    const ids = new Set(expanded);
    for (const page of filteredPages) {
      const ancestors = getAncestors(page.id, wikiPages);
      for (const a of ancestors) ids.add(a.id);
    }
    return ids;
  }, [expanded, selectedTag, isSearching, filteredPages]);

  // Filter tree to only show nodes that match or have matching descendants
  const filteredTree = useMemo(() => {
    if (!selectedTag) return tree;
    const matchingIds = new Set(filteredPages.map((p) => p.id));

    function filterNode(node: WikiTreeNode): WikiTreeNode | null {
      const filteredChildren = node.children
        .map(filterNode)
        .filter((n): n is WikiTreeNode => n !== null);
      if (matchingIds.has(node.page.id) || filteredChildren.length > 0) {
        return { page: node.page, children: filteredChildren };
      }
      return null;
    }

    return tree.map(filterNode).filter((n): n is WikiTreeNode => n !== null);
  }, [tree, selectedTag, filteredPages]);

  return (
    <div className="max-w-2xl space-y-6">
      <PageHeader title="Wiki" subtitle="Internal knowledge base" />

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-1 items-center gap-3">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search pages..."
            className="max-w-xs flex-1"
          />
        </div>
        <div className="flex items-center gap-1.5">
          <FilterDropdown
            icon={Tag}
            items={allWikiTags.map((tag) => ({
              label: tag,
              checked: selectedTag === tag,
              onClick: () => setSelectedTag(selectedTag === tag ? null : tag),
            }))}
          >
            Tags{selectedTag ? `: ${selectedTag}` : ""}
          </FilterDropdown>
        </div>
      </div>

      {/* Content */}
      {isSearching ? (
        <div className="space-y-0.5">
          {filteredPages.length === 0 ? (
            <p className="text-text-tertiary py-8 text-center text-xs">
              No pages found.
            </p>
          ) : (
            filteredPages.map((page) => (
              <SearchResult key={page.id} page={page} />
            ))
          )}
        </div>
      ) : (
        <div className="space-y-0.5">
          {filteredTree.length === 0 ? (
            <p className="text-text-tertiary py-8 text-center text-xs">
              No pages match the selected tag.
            </p>
          ) : (
            filteredTree.map((node) => (
              <WikiTreeItem
                key={node.page.id}
                node={node}
                depth={0}
                expanded={effectiveExpanded}
                onToggle={toggleExpand}
                selectedTag={selectedTag}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
