import { useDispatch } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { setTheme } from "../../redux/theme-slice";

interface Props {
  children: React.ReactElement;
}

export const SettingMenu = ({ children }: Props) => {
  const dispatch = useDispatch();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={children} />
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => dispatch(setTheme("system"))}>
                  System
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => dispatch(setTheme("dark"))}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => dispatch(setTheme("light"))}>
                  Light
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
