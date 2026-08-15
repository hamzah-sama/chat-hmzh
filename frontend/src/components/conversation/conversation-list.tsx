import { MessageSquareIcon } from "lucide-react";
import { CommandItem } from "../ui/command";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputRename } from "../input-rename";
import { ConversationMenu } from "../dropdown/conversation-menu";

interface Props {
  id: string;
  title: string;
  updatedAt: string;
  onOpenChange: (open: boolean) => void;
}
export const ConversationList = ({
  id,
  title,
  updatedAt,
  onOpenChange,
}: Props) => {
  const navigate = useNavigate();
  const [isRenaming, setIsRenaming] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  return (
    <CommandItem
      key={id}
      value={title}
      onSelect={() => {
        navigate(`/${id}`);

        onOpenChange(false);
      }}
      className="cursor-pointer hover:bg-accent/50 "
    >
      <MessageSquareIcon className="mr-2 size-4 shrink-0" />
      <div className="min-w-0 flex-1">
        {isRenaming ? (
          <InputRename
            newTitle={newTitle}
            setNewTitle={setNewTitle}
            setIsRenaming={setIsRenaming}
            title={title}
            id={id}
          />
        ) : (
          <p className="truncate">{title}</p>
        )}

        <p className="text-xs text-muted-foreground">
          {new Date(updatedAt).toLocaleDateString()}
        </p>
      </div>
      <ConversationMenu
        conversationId={id}
        onRename={() => {
          setNewTitle(title);
          setIsRenaming(true);
        }}
      />
    </CommandItem>
  );
};
