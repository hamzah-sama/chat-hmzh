import { SettingsIcon } from "lucide-react";
import { Hint } from "../../hint";
import { Button } from "../../ui/button";
import { SettingMenu } from "../../setting-menu";

export const SettingButton = () => {
  return (
    <>
      <SettingMenu>
        <div>
          <Hint label="Settings">
            <Button variant="ghost" size="icon">
              <SettingsIcon size={17} />
            </Button>
          </Hint>
        </div>
      </SettingMenu>
    </>
  );
};
