import { CollapseButton } from "../button/collapse-button";
import { SearchButton } from "../button/search-button";

interface Props {
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderExpand = ({ setCollapse }: Props) => {
  return (
    <header className="relative flex h-14 shrink-0 items-center border-b border-white/6 px-3 justify-between">
      <div
        className="
          flex min-w-0 flex-1 items-center gap-2.5 overflow-hidden"
      >
        <span className=" min-w-0 flex-1 truncate text-[15px] font-semibold tracking-tight text-slate-100"
        >
          chat-hmzh
        </span>
      </div>
      <div className="flex items-center gap-2">
        <SearchButton />
        <CollapseButton setCollapse={setCollapse} />
      </div>
    </header>
  );
};
