import { NewChatIcon } from "../button/new-chat-icon";
import { SearchButton } from "../button/search-button";

export const CollapseContent = () => {
  return (
    <div
      className="h-full overflow-y-auto
                  scrollbar-thin
                  scrollbar-thumb-white/20
                  scrollbar-track-transparent
                  transition-opacity duration-200"
    >
      <div className="px-2 pt-4 flex flex-col gap-2">
        <NewChatIcon />
        <SearchButton />
      </div>
    </div>
  );
};
