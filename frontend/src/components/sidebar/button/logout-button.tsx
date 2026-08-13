import { LogOutIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import api from "../../../../utils/axios";
import { setUserData } from "../../../redux/user-slice";
import { setConversation } from "../../../redux/conversation-slice";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      dispatch(setUserData(null));
      dispatch(setConversation([]));
    } catch (error) {
      console.error("Handle logout failed", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className=" flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10 cursor-pointer"
    >
      <LogOutIcon className="size-4" />
      <span>Logout</span>
    </button>
  );
};
