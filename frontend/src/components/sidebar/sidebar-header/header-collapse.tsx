import { useIsMobile } from "../../../hooks/use-is-mobile";
import { CollapseButton } from "../button/collapse-button";

interface Props {
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderCollapse = ({ setCollapse }: Props) => {
  const isMobile = useIsMobile();

  return (
    <header className="relative flex h-14 shrink-0 items-center  transition-all duration-300 justify-center px-2">
      {isMobile ? (
        <img src="../../../public/app-logo.png"/>
      ) : (
        <CollapseButton setCollapse={setCollapse} />
      )}

      <div
        className="
          flex min-w-0 flex-1 items-center gap-2.5
          overflow-hidden
          transition-all duration-300 ml-0 w-0 opacity-0"
      >
        <span
          className="
            min-w-0 flex-1
            truncate
            text-[15px] font-semibold
            tracking-tight text-slate-100
          "
        >
          chat-hmzh
        </span>
      </div>
    </header>
  );
};
