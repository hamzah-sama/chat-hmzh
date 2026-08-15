import { CollapseButton } from "../button/collapse-button";
import { SearchButton } from "../button/search-button";
import { SettingButton } from "../button/settings-button";

interface Props {
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  collapse: boolean;
}

export const HeaderExpand = ({ setCollapse , collapse}: Props) => {
  return (
    <header className="relative flex h-14 shrink-0 items-center border-b px-3 justify-between">
      <div
        className="
          flex min-w-0 flex-1 items-center gap-2.5 overflow-hidden"
      >
        <span className=" min-w-0 flex-1 truncate text-[15px] font-semibold tracking-tight "
        >
          chat-hmzh
        </span>
      </div>
      <div className="flex items-center gap-2">
        <SearchButton />
        <SettingButton />
        <CollapseButton setCollapse={setCollapse} collapse={collapse} />
      </div>
    </header>
  );
};
