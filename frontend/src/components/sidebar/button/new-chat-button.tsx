import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NewChatButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="w-full flex items-center justify-center gap-2 bg-linear-to-br from-indigo-500 to-violet-700 hover:opacity-90 transition-opacity duration-150 text-white border-none cursor-pointer py-2.5 rounded-xl text-sm font-medium"
      onClick={() => {
        navigate("/");
      }}
    >
      <Plus size={15} />
      New Chat
    </button>
  );
};
