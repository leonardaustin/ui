import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Grid2X2, LayoutGrid, List, Plus } from "lucide-react";

import {
  AuthorByline,
  Badge,
  Button,
  FilterDropdown,
  formatDateShort,
  PageHeader,
} from "@leonardaustin/ui";

import { allTags, blogPosts, type BlogPost } from "../data/blog";

type ViewMode = "list" | "cards" | "moodboard";

/* ── List view row ─────────────────────────────────────────────────── */

function PostListItem({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group border-border flex gap-3 border-b py-3 last:border-b-0"
    >
      <div
        className="h-24 w-[120px] shrink-0 rounded"
        style={{ background: post.coverGradient }}
      />
      <div className="min-w-0 flex-1 space-y-1">
        <h3 className="text-text-primary text-xs leading-snug font-semibold group-hover:underline">
          {post.title}
        </h3>
        <p className="text-text-secondary text-body line-clamp-1">
          {post.excerpt}
        </p>
        <div className="text-text-tertiary text-2xs flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-text-secondary font-medium">
            {post.author.name}
          </span>
          <span>&middot;</span>
          <span>{formatDateShort(post.publishedAt)}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
          <span className="hidden gap-2 sm:flex">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} color="gray">
                {tag}
              </Badge>
            ))}
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Card view ─────────────────────────────────────────────────────── */

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/blog/${post.id}`} className="group block">
      <div className="bg-bg-secondary border-border overflow-hidden rounded-md border">
        <div
          className="h-36 w-full"
          style={{ background: post.coverGradient }}
        />
        <div className="space-y-2 p-3">
          <h3 className="text-text-primary text-xs leading-snug font-semibold group-hover:underline">
            {post.title}
          </h3>
          <p className="text-text-secondary text-body line-clamp-2">
            {post.excerpt}
          </p>
          {/* AuthorByline renders the author avatar, name, and metadata
              (date + read time) in a compact row. */}
          <AuthorByline
            name={post.author.name}
            meta={`${formatDateShort(post.publishedAt)} · ${post.readTime}`}
          />
          <div className="flex gap-1.5 pt-0.5">
            {post.tags.map((tag) => (
              <Badge key={tag} color="gray">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Moodboard card (same as PostCard but with alternating aspect ratios) */

function MoodboardCard({ post, square }: { post: BlogPost; square: boolean }) {
  return (
    <Link to={`/blog/${post.id}`} className="group block">
      <div className="bg-bg-secondary border-border overflow-hidden rounded-md border">
        <div
          className={`w-full ${square ? "aspect-square" : "aspect-video"}`}
          style={{ background: post.coverGradient }}
        />
        <div className="space-y-2 p-3">
          <h3 className="text-text-primary text-xs leading-snug font-semibold group-hover:underline">
            {post.title}
          </h3>
          <p className="text-text-secondary text-body line-clamp-2">
            {post.excerpt}
          </p>
          {/* AuthorByline renders the author avatar, name, and metadata
              (date + read time) in a compact row. */}
          <AuthorByline
            name={post.author.name}
            meta={`${formatDateShort(post.publishedAt)} · ${post.readTime}`}
          />
          <div className="flex gap-1.5 pt-0.5">
            {post.tags.map((tag) => (
              <Badge key={tag} color="gray">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Main page ─────────────────────────────────────────────────────── */

export function BlogList() {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("cards");

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="space-y-6">
      {/* PageHeader renders a consistent title + subtitle + right-aligned actions.
          The view mode dropdown uses FilterButton for toolbar-style trigger styling. */}
      <PageHeader
        title="Blog"
        subtitle="Engineering blog and updates"
        actions={
          <>
            <Button
              variant="primary"
              size="sm"
              icon={Plus}
              hideLabel
              onClick={() => navigate("/blog/new")}
            >
              New Post
            </Button>
            <FilterDropdown
              icon={LayoutGrid}
              align="right"
              className="sm:w-[110px]"
              items={[
                {
                  label: "Cards",
                  icon: <Grid2X2 className="h-3.5 w-3.5" />,
                  checked: viewMode === "cards",
                  onClick: () => setViewMode("cards"),
                },
                {
                  label: "List",
                  icon: <List className="h-3.5 w-3.5" />,
                  checked: viewMode === "list",
                  onClick: () => setViewMode("list"),
                },
                {
                  label: "Moodboard",
                  icon: <LayoutGrid className="h-3.5 w-3.5" />,
                  checked: viewMode === "moodboard",
                  onClick: () => setViewMode("moodboard"),
                },
              ]}
            >
              {viewMode === "cards"
                ? "Cards"
                : viewMode === "list"
                  ? "List"
                  : "Moodboard"}
            </FilterDropdown>
          </>
        }
      />

      {/* Tag filter */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setSelectedTag(null)}
          aria-pressed={selectedTag === null}
          className="shrink-0"
        >
          <Badge color={selectedTag === null ? "blue" : "gray"}>All</Badge>
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setSelectedTag(tag)}
            aria-pressed={selectedTag === tag}
            className="shrink-0"
          >
            <Badge color={selectedTag === tag ? "blue" : "gray"}>{tag}</Badge>
          </button>
        ))}
      </div>

      {/* Posts */}
      {filteredPosts.length === 0 && (
        <p className="text-text-tertiary py-8 text-center text-xs">
          No posts match that filter.
        </p>
      )}

      {viewMode === "list" && (
        <div>
          {filteredPosts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
      )}

      {viewMode === "cards" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {viewMode === "moodboard" && (
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
          {filteredPosts.map((post, i) => (
            <div key={post.id} className="mb-4 break-inside-avoid">
              <MoodboardCard post={post} square={i % 3 === 0} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
