import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Save, Send } from "lucide-react";

import {
  Badge,
  Button,
  cn,
  PageHeader,
  SectionHeader,
  Textarea,
  TextInput,
  Toggle,
  useToast,
} from "@leonardaustin/ui";

import { markdown } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorState } from "@codemirror/state";
import { basicSetup, EditorView } from "codemirror";

/* ── Cover gradient presets ────────────────────────────────── */

const coverGradients = [
  {
    label: "Ocean",
    value: "linear-gradient(135deg, #1e3a5f 0%, #2d6a4f 100%)",
  },
  {
    label: "Violet",
    value: "linear-gradient(135deg, #6b21a8 0%, #2563eb 100%)",
  },
  { label: "Teal", value: "linear-gradient(135deg, #0f766e 0%, #164e63 100%)" },
  {
    label: "Crimson",
    value: "linear-gradient(135deg, #9f1239 0%, #7c2d12 100%)",
  },
  {
    label: "Amber",
    value: "linear-gradient(135deg, #854d0e 0%, #365314 100%)",
  },
  {
    label: "Indigo",
    value: "linear-gradient(135deg, #1e40af 0%, #6d28d9 100%)",
  },
  {
    label: "Slate",
    value: "linear-gradient(135deg, #4338ca 0%, #0e7490 100%)",
  },
  {
    label: "Ember",
    value: "linear-gradient(135deg, #b91c1c 0%, #c2410c 100%)",
  },
];

/* ── CodeMirror theme that reads CSS custom properties ─────── */

function createEditorTheme() {
  return EditorView.theme({
    "&": {
      fontSize: "13px",
      backgroundColor: "var(--color-bg-secondary)",
      color: "var(--color-text-primary)",
      borderRadius: "var(--radius-md)",
      border: "var(--ui-border-width, 1px) solid var(--color-border)",
    },
    "&.cm-focused": {
      outline: "none",
      borderColor: "var(--color-accent)",
    },
    ".cm-content": {
      fontFamily: "var(--font-code)",
      padding: "8px 0",
      caretColor: "var(--color-accent)",
    },
    ".cm-cursor": {
      borderLeftColor: "var(--color-accent)",
    },
    ".cm-selectionBackground": {
      backgroundColor: "var(--color-accent-subtle) !important",
    },
    "&.cm-focused .cm-selectionBackground": {
      backgroundColor: "var(--color-accent-subtle) !important",
    },
    ".cm-gutters": {
      backgroundColor: "var(--color-bg-secondary)",
      color: "var(--color-text-disabled)",
      border: "none",
      borderRight: "1px solid var(--color-border)",
    },
    ".cm-activeLineGutter": {
      backgroundColor: "var(--color-bg-hover)",
      color: "var(--color-text-tertiary)",
    },
    ".cm-activeLine": {
      backgroundColor: "var(--color-bg-hover)",
    },
    ".cm-line": {
      padding: "0 8px",
    },
    ".cm-scroller": {
      minHeight: "400px",
    },
  });
}

/* ── Component ─────────────────────────────────────────────── */

export function CreatePost() {
  const navigate = useNavigate();
  const { toast } = useToast();

  /* ── Form state ──────────────────────────────── */
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [featured, setFeatured] = useState(false);
  const [coverGradient, setCoverGradient] = useState(coverGradients[0].value);

  /* ── CodeMirror ──────────────────────────────── */
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      state: EditorState.create({
        doc: "",
        extensions: [
          basicSetup,
          markdown({ codeLanguages: languages }),
          createEditorTheme(),
          EditorView.lineWrapping,
        ],
      }),
      parent: editorRef.current,
    });

    viewRef.current = view;
    return () => view.destroy();
  }, []);

  /* ── Derived ─────────────────────────────────── */
  const tags = useMemo(
    () =>
      tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    [tagsInput],
  );

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = "Title is required";
    if (!excerpt.trim()) e.excerpt = "Excerpt is required";
    return e;
  }, [title, excerpt]);

  const hasErrors = Object.keys(errors).length > 0;

  /* ── Handlers ────────────────────────────────── */
  function getContent(): string {
    return viewRef.current?.state.doc.toString() ?? "";
  }

  function handlePublish() {
    if (hasErrors) {
      toast("error", "Please fill in all required fields");
      return;
    }
    const content = getContent();
    if (!content.trim()) {
      toast("error", "Post content cannot be empty");
      return;
    }
    toast("success", `"${title}" published successfully`);
    navigate("/blog");
  }

  function handleSaveDraft() {
    if (!title.trim()) {
      toast("error", "Title is required to save a draft");
      return;
    }
    toast("info", `Draft saved: "${title}"`);
    navigate("/blog");
  }

  const actionButtons = (
    <>
      <Button
        variant="secondary"
        size="sm"
        icon={Save}
        hideLabel
        onClick={handleSaveDraft}
      >
        Save Draft
      </Button>
      <Button
        variant="primary"
        size="sm"
        icon={Send}
        hideLabel
        onClick={handlePublish}
        disabled={hasErrors}
      >
        Publish
      </Button>
    </>
  );

  /* ── Render ──────────────────────────────────── */
  return (
    <div className="max-w-2xl space-y-6">
      <PageHeader title="New Post" actions={actionButtons} />

      {/* Cover preview */}
      <div
        className="flex h-32 items-end rounded-md p-4"
        style={{ background: coverGradient }}
      >
        {title && (
          <h2 className="text-text-on-media text-sm font-semibold">{title}</h2>
        )}
      </div>

      {/* Cover & featured settings — right below the preview */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {coverGradients.map((g) => (
            <button
              key={g.label}
              type="button"
              onClick={() => setCoverGradient(g.value)}
              className={cn(
                "h-8 w-12 cursor-pointer rounded-md border-2 transition-colors duration-[100ms]",
                "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
                coverGradient === g.value
                  ? "border-accent"
                  : "hover:border-border-strong border-transparent",
              )}
              style={{ background: g.value }}
              title={g.label}
            />
          ))}
        </div>
        <Toggle checked={featured} onChange={setFeatured} label="Featured" />
      </div>

      {/* Post Details */}
      <section className="space-y-4">
        <SectionHeader>Post Details</SectionHeader>

        <TextInput
          label="Title"
          placeholder="Enter post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
        />

        <Textarea
          label="Excerpt"
          placeholder="A short summary for the blog listing..."
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          maxLength={200}
          showCount
          error={errors.excerpt}
        />

        <div className="space-y-1.5">
          <TextInput
            label="Tags"
            placeholder="Comma-separated, e.g. Frontend, React, CSS"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
          />
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge key={tag} color="gray">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="space-y-4">
        <SectionHeader>Content</SectionHeader>
        <div ref={editorRef} />
        <p className="text-text-tertiary text-2xs">
          Supports Markdown syntax — headings, bold, italic, links, code blocks,
          and lists.
        </p>
      </section>

      {/* Bottom actions */}
      <div className="border-border flex justify-end gap-2 border-t pt-4">
        {actionButtons}
      </div>
    </div>
  );
}
