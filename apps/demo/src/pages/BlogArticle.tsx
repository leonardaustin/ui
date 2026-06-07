import { Link, useParams } from "react-router-dom";

import {
  AuthorByline,
  BackLink,
  formatDateLong,
  formatDateShort,
} from "@leonardaustin/ui";

import { blogPosts } from "../data/blog";

export function BlogArticle() {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        {/* BackLink provides a consistent back-navigation link with arrow icon. */}
        <BackLink to="/blog">Back to Blog</BackLink>
        <p className="text-text-secondary text-sm">Post not found.</p>
      </div>
    );
  }

  const morePosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      const aShared = a.tags.filter((t) => post.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => post.tags.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, 3);
  const paragraphs = post.content.split("\n\n");

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* BackLink provides a consistent back-navigation link with arrow icon. */}
      <BackLink to="/blog">Back to Blog</BackLink>

      {/* Cover image */}
      <div
        className="flex h-48 items-end rounded-md p-5"
        style={{ background: post.coverGradient }}
      >
        <div className="flex gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-bg-media-badge text-2xs text-text-on-media-muted rounded-md px-2 py-0.5 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h1 className="text-text-primary text-lg leading-snug font-semibold">
        {post.title}
      </h1>

      {/* AuthorByline at size="md" for article-level text density.
          The nameAppend prop adds the author role inline after the name. */}
      <AuthorByline
        size="md"
        name={post.author.name}
        meta={`${formatDateLong(post.publishedAt)} · ${post.readTime}`}
        nameAppend={
          <span className="text-text-tertiary font-normal">
            {" "}
            &middot; {post.author.role}
          </span>
        }
      />

      {/* Article body */}
      <div className="font-prose">
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className="text-text-secondary text-body font-prose mb-4 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Divider + more posts */}
      <hr className="border-border" />

      <div className="space-y-3">
        <h2 className="text-text-primary text-xs font-semibold">More Posts</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {morePosts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.id}`}
              className="group bg-bg-secondary border-border overflow-hidden rounded-md border"
            >
              <div className="h-20" style={{ background: p.coverGradient }} />
              <div className="space-y-1 p-2.5">
                <h3 className="text-text-primary text-xs leading-snug font-semibold group-hover:underline">
                  {p.title}
                </h3>
                <p className="text-text-tertiary text-2xs">
                  {formatDateShort(p.publishedAt)} &middot; {p.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
