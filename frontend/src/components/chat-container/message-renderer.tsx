import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { cn } from "../../lib/utils";
import { Hint } from "../hint";
import { useState } from "react";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";
import { Markdown } from "./markdown-format";

export const MessageRenderer = () => {
  const { messages } = useSelector((state: RootState) => state.messages);

  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);

  const handleCopy = async (messageId: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedMessageId(messageId);
    setTimeout(() => {
      setCopiedMessageId(null);
    }, 1500);
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6">
      {messages.map((message) => {
        const isUser = message.role === "user";
        const copied = copiedMessageId === message._id;

        return (
          <div
            key={message._id}
            className={cn(
              "group flex w-full gap-3 py-4",
              isUser ? "justify-end" : "justify-start",
            )}
          >
            <div
              className={cn(
                "flex max-w-[80%] flex-col gap-1",
                isUser && "items-end",
              )}
            >
              {/* Message */}
              <div
                className={cn(
                  "relative min-w-0 max-w-full wrap-break-words ",
                  "text-[15px] leading-7 tracking-[-0.01em]",
                  "bg-muted/80 dark:bg-muted/60",
                  "rounded-2xl rounded-br-md",
                  "px-4 py-3",
                  "shadow-sm",
                  "ring-1 ring-border/40",
                  isUser
                    ? "bg-linear-to-br from-indigo-500 to-violet-700 text-white rounded-tr-sm"
                    : "rounded-tl-sm",
                )}
              >
                <Markdown content={message.content} />
              </div>

              {/* Actions */}
              {!isUser && (
                <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                  <Hint label={copied ? "Copied" : "Copy"}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      onClick={() => handleCopy(message._id, message.content)}
                    >
                      {copied ? (
                        <Check className="size-3.5 text-green-500" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}{" "}
                    </Button>
                  </Hint>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
