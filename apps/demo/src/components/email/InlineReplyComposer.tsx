import { useEffect, useMemo, useRef, useState } from "react";

import { Button, Textarea, useToast } from "@leonardaustin/ui";

import type { Email, EmailMessage } from "../../data/emails";
import type { ReplyMode } from "./ReplyDialog";

interface InlineReplyComposerProps {
  mode: ReplyMode;
  email: Email;
  message: EmailMessage;
  onClose: () => void;
}

export function InlineReplyComposer({
  mode,
  email,
  message,
  onClose,
}: InlineReplyComposerProps) {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);

  const prefilled = useMemo(() => {
    const prefix = mode === "forward" ? "Fwd" : "Re";
    const subject = email.subject.startsWith(`${prefix}: `)
      ? email.subject
      : `${prefix}: ${email.subject}`;

    let to = "";
    let cc = "";

    if (mode === "reply") {
      to = `${message.from.name} <${message.from.email}>`;
    } else if (mode === "replyAll") {
      to = `${message.from.name} <${message.from.email}>`;
      const others = message.to
        .filter((r) => r.email !== "leonard@example.com")
        .map((r) => `${r.name} <${r.email}>`);
      if (message.cc) {
        others.push(...message.cc.map((r) => `${r.name} <${r.email}>`));
      }
      cc = others.join(", ");
    }

    const quotedHeader = `\n\n---------- Original Message ----------\nFrom: ${message.from.name} <${message.from.email}>\nDate: ${message.date}\nSubject: ${email.subject}\n\n`;
    const quotedBody = message.body
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n");

    return { to, cc, subject, body: quotedHeader + quotedBody };
  }, [mode, email, message]);

  const [to, setTo] = useState(prefilled.to);
  const [cc, setCc] = useState(prefilled.cc);
  const [subject, setSubject] = useState(prefilled.subject);
  const [body, setBody] = useState(prefilled.body);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, []);

  function handleSend() {
    const label = mode === "forward" ? "Email forwarded" : "Reply sent";
    toast("success", label);
    onClose();
  }

  return (
    <div
      ref={containerRef}
      className="bg-bg-primary border-border mx-3 mt-3 space-y-3 rounded-md border p-3"
    >
      <div className="space-y-0">
        <div className="border-border flex items-center gap-2 border-b py-1.5">
          <span className="text-text-tertiary w-12 shrink-0 text-xs">To</span>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="recipient@example.com"
            className="text-text-primary placeholder:text-text-disabled min-w-0 flex-1 bg-transparent text-xs focus:outline-none"
          />
        </div>

        {(mode === "replyAll" || cc) && (
          <div className="border-border flex items-center gap-2 border-b py-1.5">
            <span className="text-text-tertiary w-12 shrink-0 text-xs">Cc</span>
            <input
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              placeholder="cc@example.com"
              className="text-text-primary placeholder:text-text-disabled min-w-0 flex-1 bg-transparent text-xs focus:outline-none"
            />
          </div>
        )}

        <div className="border-border flex items-center gap-2 border-b py-1.5">
          <span className="text-text-tertiary w-12 shrink-0 text-xs">
            Subject
          </span>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="text-text-primary min-w-0 flex-1 bg-transparent text-xs focus:outline-none"
          />
        </div>
      </div>

      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="min-h-[120px]"
      />

      <div className="flex items-center gap-2">
        <Button variant="primary" size="sm" onClick={handleSend}>
          Send
        </Button>
        <Button variant="secondary" size="sm" onClick={onClose}>
          Discard
        </Button>
      </div>
    </div>
  );
}
