import { LogOutIcon, Sparkles } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useDispatch } from "react-redux";
import api from "../../../utils/axios";
import { setUserData } from "../../redux/user-slice";
import { setConversation } from "../../redux/conversation-slice";
import { Alert } from "../alert";
import { useState } from "react";

interface Props {
  children: React.ReactElement;
}

export const AccountMenu = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
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
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={children} />
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex justify-between">
              Upgrade plan
              <Sparkles />
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              className="flex justify-between"
              onClick={() => setOpen(true)}
            >
              Log out
              <LogOutIcon />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Alert
        open={open}
        setOpen={setOpen}
        handleAction={handleLogout}
        title="Logout"
        label="Logout"
        text="Are you sure want to logout ? this action cannot be undone"
      />
    </>
  );
};
