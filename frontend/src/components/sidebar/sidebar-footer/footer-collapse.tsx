import { AccountMenu } from "../../account-menu";
import { Hint } from "../../hint";

interface Props {
  avatar: string | undefined;
}

export const FooterCollapse = ({ avatar }: Props) => {
  return (
    <footer className="shrink-0 p-2">
      <div className="flex items-center justify-center rounded-lg transition-colors hover:bg-white/4">
        <div className="shrink-0 p-2">
          <AccountMenu>
            <div>
              <Hint label="Account">
                <img
                  src={avatar}
                  alt="profile picture"
                  className="
                  size-6
                  cursor-pointer
                  rounded-full
                  object-cover
                  ring-1
                  ring-white/10
                  "
                />
              </Hint>
            </div>
          </AccountMenu>
        </div>
      </div>
    </footer>
  );
};
