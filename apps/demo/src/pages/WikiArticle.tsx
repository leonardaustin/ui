import { Fragment, useMemo, useState } from "react";
import { MarkdownHooks as Markdown } from "react-markdown";
import type { Options as MarkdownOptions } from "react-markdown";
import { Link, useParams } from "react-router-dom";

import { ChevronRight, FileText } from "lucide-react";

import {
  BackLink,
  Badge,
  cn,
  formatDateShort,
  ProseContent,
} from "@leonardaustin/ui";

import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";

import { getAncestors, getChildren, wikiPages } from "../data/wiki";

/* ── TOC types + extraction ──────────────────────────────────────── */

interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/** Extract h2 and h3 headings for table-of-contents navigation.
 *  Also produces the authoritative slug IDs used by both the TOC
 *  and the rendered markdown heading elements. */
function extractHeadings(markdown: string): TocEntry[] {
  const entries: TocEntry[] = [];
  const seen = new Map<string, number>();
  let inCodeBlock = false;

  for (const line of markdown.split("\n")) {
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;
    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/`/g, "");
    let id = slugify(text);
    const count = seen.get(id) ?? 0;
    if (count > 0) id = `${id}-${count}`;
    seen.set(id, count + 1);
    entries.push({ id, text, level });
  }
  return entries;
}

/* ── Table of contents ───────────────────────────────────────────── */

function TableOfContents({ headings }: { headings: TocEntry[] }) {
  const [open, setOpen] = useState(false);

  if (headings.length < 3) return null;

  return (
    <div className="border-border rounded-md border">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-text-secondary hover:text-text-primary flex w-full items-center gap-2 px-3 py-2 text-xs"
      >
        <ChevronRight
          className={cn(
            "h-3 w-3 transition-transform duration-[100ms]",
            open && "rotate-90",
          )}
        />
        On this page
      </button>
      {open && (
        <nav className="border-border space-y-1 border-t px-3 py-2">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={cn(
                "text-text-tertiary hover:text-text-primary text-2xs block",
                h.level === 3 && "pl-3",
              )}
            >
              {h.text}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}

/* ── Shiki syntax highlighting ───────────────────────────────────── */

/** Dual-theme highlighting: spans carry --shiki-light/--shiki-dark vars,
 *  and index.css picks the palette matching the active theme. */
const rehypePlugins: MarkdownOptions["rehypePlugins"] = [
  [
    rehypeShiki,
    {
      langs: [
        "bash",
        "css",
        "diff",
        "docker",
        "dotenv",
        "go",
        "html",
        "ini",
        "javascript",
        "json",
        "jsonc",
        "jsx",
        "make",
        "markdown",
        "python",
        "rust",
        "shellsession",
        "shellscript",
        "sql",
        "toml",
        "tsx",
        "typescript",
        "xml",
        "yaml",
      ],
      langAlias: {
        env: "dotenv",
        sh: "shellscript",
        shell: "shellscript",
        yml: "yaml",
        zsh: "shellscript",
      },
      themes: { light: "github-light", dark: "github-dark" },
      defaultColor: false,
      fallbackLanguage: "text",
      // Keep the language-* class so the code override below can tell
      // block code apart from inline code.
      addLanguageClass: true,
    },
  ],
];

/* ── Markdown component overrides ────────────────────────────────── */

/** Creates an index-based ID consumer that returns pre-computed heading IDs
 *  from extractHeadings in document order. This ensures the TOC and rendered
 *  headings always use identical IDs. */
function createHeadingIdConsumer(headings: TocEntry[]) {
  let index = 0;
  return () => {
    if (index < headings.length) return headings[index++].id;
    return slugify(`heading-${index++}`);
  };
}

function createMarkdownComponents(nextHeadingId: () => string) {
  return {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 className="text-text-primary mt-6 mb-2 text-lg font-semibold">
        {children}
      </h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2
        id={nextHeadingId()}
        className="text-text-primary mt-6 mb-2 text-base font-semibold"
      >
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3
        id={nextHeadingId()}
        className="text-text-primary mt-4 mb-1.5 text-sm font-semibold"
      >
        {children}
      </h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-text-primary text-body mt-4 mb-1.5 font-semibold">
        {children}
      </h4>
    ),
    p: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-text-secondary text-body font-prose mb-4 leading-relaxed">
        {children}
      </p>
    ),
    a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
      // Internal wiki links use React Router
      if (href?.startsWith("/wiki/")) {
        return (
          <Link to={href} className="text-accent hover:underline">
            {children}
          </Link>
        );
      }
      return (
        <a href={href} className="text-accent hover:underline">
          {children}
        </a>
      );
    },
    code: ({
      className,
      children,
    }: {
      className?: string;
      children?: React.ReactNode;
    }) => {
      if (className?.includes("language-")) {
        return (
          <code className="text-text-primary font-mono text-xs leading-relaxed">
            {children}
          </code>
        );
      }
      return (
        <code className="bg-bg-tertiary text-text-primary rounded px-1.5 py-0.5 font-mono text-xs">
          {children}
        </code>
      );
    },
    pre: ({
      className,
      children,
    }: {
      className?: string;
      children?: React.ReactNode;
    }) => (
      <pre
        className={cn(
          "bg-bg-tertiary border-border mb-4 overflow-x-auto rounded-md border p-4",
          className,
        )}
      >
        {children}
      </pre>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-accent mb-4 border-l-2 py-1 pl-4">
        {children}
      </blockquote>
    ),
    ul: ({ children }: { children?: React.ReactNode }) => (
      <ul className="text-body text-text-secondary font-prose mb-4 list-inside list-disc space-y-1">
        {children}
      </ul>
    ),
    ol: ({ children }: { children?: React.ReactNode }) => (
      <ol className="text-body text-text-secondary font-prose mb-4 list-inside list-decimal space-y-1">
        {children}
      </ol>
    ),
    li: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-body text-text-secondary font-prose leading-relaxed">
        {children}
      </li>
    ),
    hr: () => <hr className="border-border my-6" />,
    table: ({ children }: { children?: React.ReactNode }) => (
      <div className="mb-4 overflow-x-auto">
        <table className="w-full">{children}</table>
      </div>
    ),
    thead: ({ children }: { children?: React.ReactNode }) => (
      <thead className="bg-bg-tertiary">{children}</thead>
    ),
    th: ({ children }: { children?: React.ReactNode }) => (
      <th className="text-text-tertiary text-2xs px-3 py-2 text-left font-medium tracking-wider uppercase">
        {children}
      </th>
    ),
    td: ({ children }: { children?: React.ReactNode }) => (
      <td className="text-text-secondary border-border font-data border-b px-3 py-2 text-xs">
        {children}
      </td>
    ),
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-text-primary font-semibold">{children}</strong>
    ),
  };
}

/* ── Wiki article page ───────────────────────────────────────────── */

export function WikiArticle() {
  const { pageId } = useParams<{ pageId: string }>();
  const page = wikiPages.find((p) => p.id === pageId);

  const ancestors = useMemo(
    () => (page ? getAncestors(page.id, wikiPages) : []),
    [page],
  );

  const children = useMemo(
    () => (page ? getChildren(page.id, wikiPages) : []),
    [page],
  );

  const headings = useMemo(
    () => (page ? extractHeadings(page.content) : []),
    [page],
  );

  const mdComponents = useMemo(
    () => createMarkdownComponents(createHeadingIdConsumer(headings)),
    [headings],
  );

  if (!page) {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <BackLink to="/wiki">Back to Wiki</BackLink>
        <p className="text-text-secondary text-sm">Page not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <BackLink to="/wiki">Back to Wiki</BackLink>

      {/* Breadcrumbs */}
      {ancestors.length > 0 && (
        <nav className="text-text-tertiary text-2xs flex items-center gap-1">
          {ancestors.map((a, i) => (
            <Fragment key={a.id}>
              {i > 0 && <span>/</span>}
              <Link
                to={`/wiki/${a.id}`}
                className="hover:text-text-primary transition-colors duration-[100ms]"
              >
                {a.title}
              </Link>
            </Fragment>
          ))}
          <span>/</span>
          <span className="text-text-secondary">{page.title}</span>
        </nav>
      )}

      {/* Title */}
      <h1 className="text-text-primary text-lg leading-snug font-semibold">
        {page.icon && <span className="mr-2">{page.icon}</span>}
        {page.title}
      </h1>

      {/* Meta */}
      <div className="text-2xs flex items-center gap-2">
        <span className="text-text-tertiary font-mono">
          Updated {formatDateShort(page.updatedAt)}
        </span>
        {page.tags.length > 0 && (
          <>
            <span className="text-text-disabled">&middot;</span>
            <div className="flex gap-1.5">
              {page.tags.map((tag) => (
                <Badge key={tag} color="gray">
                  {tag}
                </Badge>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Table of contents */}
      <TableOfContents headings={headings} />

      {/* Rendered markdown */}
      <ProseContent>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={rehypePlugins}
          components={mdComponents}
        >
          {page.content}
        </Markdown>
      </ProseContent>

      {/* Child pages */}
      {children.length > 0 && (
        <>
          <hr className="border-border" />
          <div className="space-y-3">
            <h2 className="text-text-primary text-xs font-semibold">
              Child Pages
            </h2>
            <div className="space-y-1">
              {children.map((child) => (
                <Link
                  key={child.id}
                  to={`/wiki/${child.id}`}
                  className="group hover:bg-bg-hover flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors duration-[100ms]"
                >
                  {child.icon ? (
                    <span className="text-xs">{child.icon}</span>
                  ) : (
                    <FileText className="text-text-tertiary h-3.5 w-3.5" />
                  )}
                  <span className="text-text-primary text-xs group-hover:underline">
                    {child.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
