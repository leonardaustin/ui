import { useMemo, useState } from "react";

import {
  Button,
  Dialog,
  Textarea,
  TextInput,
  useToast,
} from "@leonardaustin/ui";

import type { Email, EmailMessage } from "../../data/emails";

export type ReplyMode = "reply" | "replyAll" | "forward";

interface ReplyDialogProps {
  open: boolean;
  onClose: () => void;
  mode: ReplyMode;
  email: Email;
  message: EmailMessage;
}

const modeLabels: Record<ReplyMode, string> = {
  reply: "Reply",
  replyAll: "Reply All",
  forward: "Forward",
};

export function ReplyDialog({
  open,
  onClose,
  mode,
  email,
  message,
}: ReplyDialogProps) {
  const { toast } = useToast();

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
    // forward: to is empty

    const quotedHeader = `\n\n---------- Original Message ----------\nFrom: ${message.from.name} <${message.from.email}>\nDate: ${message.date}\nSubject: ${email.subject}\n\n`;
    const quotedBody = message.body
      .split("\n")
      .map((line) => `> ${line}`)
      .join("\n");

    return { to, cc, subject, body: quotedHeader + quotedBody };
  }, [mode, email, message]);

  const [to, setTo] = useState(prefilled.to);
  const [cc, setCc] = useState(prefilled.cc);
  const [body, setBody] = useState(prefilled.body);

  function handleSend() {
    const label = mode === "forward" ? "Email forwarded" : "Reply sent";
    toast("success", label);
    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={modeLabels[mode]}
      className="max-w-[560px]"
    >
      <div className="space-y-3">
        <TextInput
          label="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="recipient@example.com"
        />

        {(mode === "replyAll" || cc) && (
          <TextInput
            label="Cc"
            value={cc}
            onChange={(e) => setCc(e.target.value)}
            placeholder="cc@example.com"
          />
        )}

        <div className="text-text-secondary bg-bg-tertiary rounded px-2 py-1 text-xs">
          <span className="text-text-tertiary">Subject:</span>{" "}
          {prefilled.subject}
        </div>

        <Textarea
          label="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="min-h-[200px]"
        />

        <div className="flex items-center gap-2 pt-2">
          <Button variant="primary" size="sm" onClick={handleSend}>
            Send
          </Button>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Discard
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
