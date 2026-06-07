import { useState } from "react";

import {
  Button,
  Dialog,
  Textarea,
  TextInput,
  useToast,
} from "@leonardaustin/ui";

interface ComposeDialogProps {
  open: boolean;
  onClose: () => void;
}

export function ComposeDialog({ open, onClose }: ComposeDialogProps) {
  const { toast } = useToast();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [showCcBcc, setShowCcBcc] = useState(false);
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");

  function reset() {
    setTo("");
    setSubject("");
    setBody("");
    setCc("");
    setBcc("");
    setShowCcBcc(false);
  }

  function handleSend() {
    toast("success", "Email sent");
    reset();
    onClose();
  }

  function handleDiscard() {
    reset();
    onClose();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title="New Message"
      className="max-w-[560px]"
    >
      <div className="space-y-3">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <TextInput
              label="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="recipient@example.com"
            />
          </div>
          {!showCcBcc && (
            <button
              onClick={() => setShowCcBcc(true)}
              className="text-accent hover:text-accent-hover mb-1 cursor-pointer text-xs"
            >
              Cc/Bcc
            </button>
          )}
        </div>

        {showCcBcc && (
          <>
            <TextInput
              label="Cc"
              value={cc}
              onChange={(e) => setCc(e.target.value)}
              placeholder="cc@example.com"
            />
            <TextInput
              label="Bcc"
              value={bcc}
              onChange={(e) => setBcc(e.target.value)}
              placeholder="bcc@example.com"
            />
          </>
        )}

        <TextInput
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />

        <Textarea
          label="Message"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your message..."
          className="min-h-[200px]"
        />

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Button variant="primary" size="sm" onClick={handleSend}>
              Send
            </Button>
            <Button variant="secondary" size="sm" onClick={handleDiscard}>
              Discard
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
