import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { InputRename } from "../input-rename";

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
    <button
      type="button"
      className={cn(
        "group flex w-full cursor-pointer items-center justify-start rounded-lg border-none p-2 text-sm font-medium transition-colors duration-150",
        isSelected ? "bg-muted" : "hover:bg-muted",
      )}
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
        <span className="min-w-0 flex-1 truncate text-left">{title}</span>
      )}

      <ConversationMenu
        conversationId={id}
        onRename={() => {
          setNewTitle(title);
          setIsRenaming(true);
        }}
      />
    </button>
  );
};
