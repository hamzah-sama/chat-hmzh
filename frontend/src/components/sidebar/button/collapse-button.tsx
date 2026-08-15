import { PanelLeftCloseIcon, PanelRightCloseIcon } from "lucide-react";
import { Hint } from "../../hint";
import { Button } from "../../ui/button";

interface Props {
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  collapse: boolean;
}

export const CollapseButton = ({ setCollapse, collapse }: Props) => {
  return (
    <>
      <Hint label={collapse ? "Expand sidebar" : "Collapse sidebar"}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapse((prev) => !prev)}
        >
          {collapse ? <PanelRightCloseIcon /> : <PanelLeftCloseIcon />}
        </Button>
      </Hint>
    </>
  );
};
