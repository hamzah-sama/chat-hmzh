import { useDispatch } from "react-redux";
import api from "../../utils/axios";
import { Input } from "./ui/input";
import { updateConversation } from "../redux/conversation-slice";

interface Props {
  newTitle: string;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  setIsRenaming: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  id: string;
}
export const InputRename = ({
  newTitle,
  setNewTitle,
  setIsRenaming,
  title,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const handleRename = async () => {
    const trimmedTitle = newTitle.trim();

    if (!trimmedTitle || trimmedTitle === title) {
      setNewTitle(title);
      setIsRenaming(false);
      return;
    }

    try {
      await api.put("/chat/update-conversation", {
        id,
        title: trimmedTitle,
      });

      dispatch(
        updateConversation({
          id,
          title: trimmedTitle,
        }),
      );

      setIsRenaming(false);
    } catch (error) {
      console.error("Rename conversation failed:", error);
      setNewTitle(title);
    }
  };

  const handleCancelRename = () => {
    setNewTitle(title);
    setIsRenaming(false);
  };
  return (
    <Input
      autoFocus
      value={newTitle}
      onChange={(e) => setNewTitle(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleRename();
        }

        if (e.key === "Escape") {
          e.preventDefault();
          handleCancelRename();
        }
      }}
      onBlur={handleRename}
      className="min-w-0 flex-1 focus:border-blue-500 border"
    />
  );
};
