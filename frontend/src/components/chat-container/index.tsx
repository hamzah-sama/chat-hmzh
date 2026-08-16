import { useEffect, useRef, useState } from "react";
import api from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setMessages } from "../../redux/messages-slice";
import { InputBar } from "./input-bar";
import { MessageRenderer } from "./message-renderer";
import { useParams } from "react-router-dom";

export const ChatContainer = () => {
  const dispatch = useDispatch();
  const {chatId} = useParams();
  const { messages } = useSelector((state: RootState) => state.messages);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const previousMessageCount = useRef(0);
  const isInitialLoad = useRef(true);

  const [loading, setLoading] = useState(true);

  // Fetch messages when selected conversation changes
  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true);

        // Reset state untuk conversation baru
        isInitialLoad.current = true;
        previousMessageCount.current = 0;

        const { data } = await api.get(`/chat/get-messages/${chatId}`);

        dispatch(setMessages(data));
      } catch (error) {
        console.error("Failed get messages:", error);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [chatId, dispatch]);

  // Handle scrolling
  useEffect(() => {
    const container = containerRef.current;

    if (!container || loading) return;

    const currentCount = messages.length;
    const previousCount = previousMessageCount.current;

    // Initial load / new selected conversation, no scroll needed
    if (isInitialLoad.current) {
      container.scrollTop = container.scrollHeight;

      previousMessageCount.current = currentCount;
      isInitialLoad.current = false;

      return;
    }

    // only scroll when new messages are added
    if (currentCount > previousCount) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }

    previousMessageCount.current = currentCount;
  }, [messages, loading]);

  if (loading) {
    return null;
  }

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col">
      {/* Messages */}
      <div
        ref={containerRef}
        className="min-h-0 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        <MessageRenderer />
      </div>

      <InputBar />
    </div>
  );
};
