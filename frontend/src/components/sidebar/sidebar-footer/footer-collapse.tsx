import { DropdownMenu } from "../../dropdown-menu";
import { LogoutButton } from "../button/logout-button";
import { UpgradePlanButton } from "../button/upgrade-plan-button";

interface Props {
  avatar: string | undefined;
}

export const FooterCollapse = ({ avatar }: Props) => {
  return (
    <footer className="shrink-0 p-2">
      <div className="flex items-center justify-center rounded-lg transition-colors hover:bg-white/4">
        <div className="shrink-0 p-2">
          <DropdownMenu<HTMLImageElement>
            trigger={(ref, onClick) => (
              <img
                ref={ref}
                src={avatar}
                alt="profile picture"
                onClick={onClick}
                className="
                  size-6
                  cursor-pointer
                  rounded-full
                  object-cover
                  ring-1
                  ring-white/10
                "
              />
            )}
          >
            <UpgradePlanButton />

            <div className="my-1 border-t border-white/10" />

            <LogoutButton />
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
};
