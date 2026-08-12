import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { iconStyling } from "./styling";
import { LogOutIcon } from "lucide-react";
import api from "../../../utils/axios";
import { setUserData } from "../../redux/user-slice";

export const SidebarFooter = () => {
  const { userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      dispatch(setUserData(null));
    } catch {
      console.error("Handle logout failed");
    }
  };
  return (
    <div className="shrink-0 border-t border-white/6 p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src={userData?.avatar}
          alt="profile picture"
          className="size-7 rounded-full"
        />
        <span>{userData?.name}</span>
      </div>
      <button className={iconStyling} onClick={handleLogout}>
        <LogOutIcon size={14} />
      </button>
    </div>
  );
};
