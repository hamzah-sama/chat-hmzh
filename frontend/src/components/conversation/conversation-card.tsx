import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { InputRename } from "../input-rename";
import { ConversationMenu } from "../dropdown/conversation-menu";

interface Props {
  title: string;
  id: string;
}

export const ConversationCard = ({ id, title }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRenaming, setIsRenaming] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const isSelected = location.pathname === `/${id}`;

  return (
  <div
    className={cn(
      "group flex w-full items-center rounded-lg p-2 text-sm font-medium transition-colors duration-150",
      isSelected ? "bg-muted" : "hover:bg-muted",
    )}
  >
    <button
      type="button"
      className="min-w-0 flex-1 cursor-pointer text-left"
      onClick={() => {
        if (!isRenaming) {
          navigate(`/${id}`);
        }
      }}
    >
      {isRenaming ? (
        <InputRename
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          setIsRenaming={setIsRenaming}
          title={title}
          id={id}
        />
      ) : (
        <span className="block truncate">{title}</span>
      )}
    </button>

    <ConversationMenu
      conversationId={id}
      onRename={() => {
        setNewTitle(title);
        setIsRenaming(true);
      }}
    />
  </div>
);
};
