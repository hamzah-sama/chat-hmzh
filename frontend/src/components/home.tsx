import { ArrowUpIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import api from "../../utils/axios";
import { useDispatch } from "react-redux";
import {
  addConversation,
} from "../redux/conversation-slice";
import { addMessage } from "../redux/messages-slice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };

  const handleSubmit = async () => {
    const value = message.trim();

    if (!value) return;

    setMessage("");

    try {
      // 1. Create conversation
      const { data: conversation } = await api.post(
        "/chat/create-conversation",
        {
          message: value,
        },
      );

      // 2. Store conversation
      dispatch(addConversation(conversation));

      // 3. Navigate to conversation
      navigate(`/${conversation._id}`);

      // 4. Immediately render user's message
      dispatch(
        addMessage({
          _id: crypto.randomUUID(),
          conversationId: conversation._id,
          role: "user",
          content: value,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }),
      );

      // 5. send request to agent
      const { data } = await api.post("/agent/chat", {
        conversationId: conversation._id,
        prompt: value,
      });

      // 6. Render assistant response
      dispatch(addMessage(data.assistantMessage));
    } catch (error) {
      console.error("Failed to create message:", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <main className="flex h-full min-h-0 flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-24 pt-10">
        <div className="w-full max-w-3xl">
          {/* Greeting */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              How can Hamzah help you?
            </h1>

            <p className="mt-3 text-sm text-muted-foreground sm:text-base">
              Ask anything, write code, brainstorm ideas, or analyze your files.
            </p>
          </div>

          {/* Composer */}
          <div
            className={cn(
              "rounded-2xl border bg-background shadow-sm",
              "transition-shadow duration-200",
              "focus-within:shadow-md",
            )}
          >
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              rows={1}
              placeholder="Ask anything to hamzah..."
              className={cn(
                "block max-h-50 min-h-13 w-full resize-none",
                "bg-transparent px-4 pb-2 pt-4",
                "text-sm outline-none",
                "placeholder:text-muted-foreground",
              )}
            />

            {/* Composer bottom */}
            <div className="flex items-center justify-between px-3 pb-3">
              <button
                type="button"
                disabled={!message.trim()}
                onClick={handleSubmit}
                className={cn(
                  "flex size-8 items-center justify-center rounded-full ml-auto",
                  "transition-all duration-150",
                  message.trim()
                    ? "bg-foreground text-background hover:scale-105"
                    : "bg-muted text-muted-foreground",
                  "disabled:cursor-not-allowed",
                )}
              >
                <ArrowUpIcon className="size-4" />
              </button>
            </div>
          </div>

          {/* Hint */}
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Hamzah can make mistakes. Check important information.
          </p>
        </div>
      </div>
    </main>
  );
};
