import { ArrowUpIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import api from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/messages-slice";
import type { MessageData } from "../../redux/types";
import { useParams } from "react-router-dom";

export const InputBar = () => {
  const {chatId} = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setMessage(value);

    const textarea = e.target;

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };

  const resetTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleSubmit = async () => {
    const value = message.trim();
    if (!chatId) return;
    if (!value) return;

    // 1. show message on UI first
    const tempUserMessage: MessageData = {
      _id: crypto.randomUUID(),
      conversationId: chatId,
      role: "user",
      content: value,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    dispatch(addMessage(tempUserMessage));

    setMessage("");
    resetTextarea();

    try {
      // 2. send request to agent
      const { data } = await api.post("/agent/chat", {
        prompt: value,
        conversationId: chatId,
      });

      // 3. finnaly, show assistant message
      dispatch(addMessage(data.assistantMessage));
    } catch (error) {
      console.error("Failed create message:", error);
    } finally {
      setMessage("");
      resetTextarea();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className="shrink-0">
      <div className="mx-auto w-full max-w-3xl px-4 pb-4">
        <div className="rounded-2xl border bg-background shadow-sm transition-shadow duration-200 focus-within:shadow-md">
          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask anything..."
            className="block w-full resize-none min-h-13 max-h-50 overflow-y-auto bg-transparent px-4 pb-2 pt-4 text-sm leading-6 outline-none placeholder:text-muted-foreground"
          />

          <div className="flex items-center justify-between px-3 pb-3">
            <Button
              type="button"
              disabled={!message.trim()}
              onClick={handleSubmit}
              className={cn(
                "flex size-8 items-center justify-center rounded-full",
                "transition-all duration-150 ml-auto",
                message.trim()
                  ? "bg-foreground text-background hover:scale-105"
                  : "bg-muted text-muted-foreground",
                "disabled:cursor-not-allowed",
              )}
            >
              <ArrowUpIcon className="size-4" />
            </Button>
          </div>
        </div>

        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          Hamzah can make mistakes. Check important information.
        </p>
      </div>
    </div>
  );
};
