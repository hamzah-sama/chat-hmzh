import { Plus } from "lucide-react";
import api from "../../../utils/axios";
import { useDispatch } from "react-redux";
import { addConversation } from "../../redux/conversation-slice";

export const NewChatButton = () => {
  const dispatch = useDispatch();
  const createNewConversation = async () => {
    try {
      const { data } = await api.post("/chat/create-conversation");
      dispatch(addConversation(data));
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <button
      className="w-full flex items-center justify-center gap-2 bg-linear-to-br from-indigo-500 to-violet-700 hover:opacity-90 transition-opacity duration-150 text-white border-none cursor-pointer py-2.5 rounded-xl text-sm font-medium"
      onClick={createNewConversation}
    >
      <Plus size={15} />
      New Chat
    </button>
  );
};
