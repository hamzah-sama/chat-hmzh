import { NewChatButton } from "../button/new-chat-button";
import { RecentChat } from "../../recent-chat";

export const Contentexpand = () => {
  return (
    <div
      className="h-full overflow-y-auto
              scrollbar-thin
              scrollbar-thumb-white/20
              scrollbar-track-transparent
              transition-opacity duration-200"
    >
      <div className="px-4 pt-4">
        <NewChatButton />
      </div>

      <RecentChat />
    </div>
  );
};
