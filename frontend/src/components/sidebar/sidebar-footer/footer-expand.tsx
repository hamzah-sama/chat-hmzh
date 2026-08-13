import { DropdownMenu } from "../../dropdown-menu";
import { LogoutButton } from "../button/logout-button";
import { UpgradePlanButton } from "../button/upgrade-plan-button";

interface Props {
  avatar: string | undefined;
  name: string | undefined;
}

export const FooterExpand = ({ avatar, name }: Props) => {
  return (
    <footer className="shrink-0 border-t border-white/6 p-3">
      <DropdownMenu<HTMLImageElement>
        trigger={(ref, onClick) => (
          <div
            className=" flex items-center rounded-lg transition-colors hover:bg-white/4 gap-2.5 px-2 py-2 cursor-pointer"
            ref={ref}
            onClick={onClick}
          >
            <div className="relative shrink-0">
              <img
                src={avatar}
                alt="profile picture"
                className="size-8 rounded-full object-cover ring-1 ring-white/10"
              />
            </div>
            <div className="min-w-0 flex-1 overflow-hidden w-auto ">
              <p className="truncate text-sm font-medium text-slate-100">
                {name}
              </p>
            </div>
            <p className="flex items-center border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium tracking-wide text-indigo-400 rounded-full">
              free plan
            </p>
          </div>
        )}
      >
        <UpgradePlanButton />

        <div className="my-1 border-t border-white/10" />

        <LogoutButton />
      </DropdownMenu>
    </footer>
  );
};
