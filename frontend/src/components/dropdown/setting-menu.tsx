import { useDispatch, useSelector } from "react-redux";
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
import type { RootState } from "../../redux/store";
import { Check } from "lucide-react";

interface Props {
  children: React.ReactElement;
}

export const SettingMenu = ({ children }: Props) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state: RootState) => state.theme);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger render={children} />
        <DropdownMenuContent className="w-40" align="start">
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  onClick={() => dispatch(setTheme("system"))}
                >
                  System
                  {theme === "system" && <Check className="ml-auto size-4" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  onClick={() => dispatch(setTheme("dark"))}
                >
                  Dark
                  {theme === "dark" && <Check className="ml-auto size-4" />}
                </DropdownMenuItem>

                <DropdownMenuItem
                  onSelect={(e) => e.preventDefault()}
                  onClick={() => dispatch(setTheme("light"))}
                >
                  Light
                  {theme === "light" && <Check className="ml-auto size-4" />}
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
