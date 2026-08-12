import { PanelLeftIcon, PenBoxIcon } from "lucide-react";
import { iconStyling } from "./styling";

interface Props {
  setCollpase: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarHeader = ({ setCollpase }: Props) => {
  return (
    <div className="flex items-center gap-2.5 p-4 border-b border-white/6">
      <div
        className={iconStyling}
        onClick={() => setCollpase((prevState) => !prevState)}
      >
        <PanelLeftIcon />
      </div>
      <span className="text-[16px] font-semibold text-slate-100 tracking-tight flex-1 ">
        chat-hmzh
      </span>
      <span className="bg-indigo-500/10 text-indigo-400 rounded-full px-2 py-0.5 tracking-wide border border-indigo-500/20 text-[10px] font-medium">
        free
      </span>
      <button className={iconStyling}>
        <PenBoxIcon size={14} />
      </button>
    </div>
  );
};
